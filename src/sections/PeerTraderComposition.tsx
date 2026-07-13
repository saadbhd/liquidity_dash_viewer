import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { SectionTooltip } from '@/components/SectionTooltip';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PERIOD_ORDER = ['1d', '1w', '2w', '30d', '3m', '6m', 'max'];
type ViewMode = 'trades' | 'volume' | 'notional' | 'runs';
type ControlledViewMode = 'trades' | 'volume';

type PeerTraderCompositionProps = {
  selectedPeriod?: string;
  onSelectedPeriodChange?: (period: string) => void;
  mode?: ControlledViewMode;
  onModeChange?: (mode: ControlledViewMode) => void;
};

const toPct = (value: unknown): number => {
  const num = typeof value === 'number' ? value : Number(value ?? 0);
  if (!Number.isFinite(num)) return 0;
  return num <= 1 ? num * 100 : num;
};

const normalizeDominantLabel = (value: unknown): string => {
  const text = typeof value === 'string' ? value : '';
  return text
    .replace(/Unclear Flow/g, 'Unclassified Flow')
    .replace(/mostly unclear/g, 'mostly unclassified')
    .replace(/\bUnclear\b/g, 'Unclassified');
};

const fmtPct = (value: unknown, digits = 1) => `${toPct(value).toFixed(digits)}%`;

const periodLabel = (key: string) => {
  const map: Record<string, string> = {
    '1d': '1D',
    '1w': '1W',
    '2w': '2W',
    '30d': '1M',
    '3m': '3M',
    '6m': '6M',
    max: 'MAX',
  };
  return map[key] || key.toUpperCase();
};

const unclearFromRow = (row: Record<string, any>, prefix: '' | '_qty' | '_notional') => {
  const directKey = prefix ? `unclear${prefix}_pct` : 'unclear_pct';
  if (row[directKey] != null) return toPct(row[directKey]);
  const ambiguousKey = prefix ? `ambiguous${prefix}_pct` : 'ambiguous_pct';
  const unobservableKey = prefix ? `unobservable${prefix}_pct` : 'unobservable_pct';
  return toPct(row[ambiguousKey]) + toPct(row[unobservableKey]);
};

const rowBreakdown = (row: any, mode: ViewMode) => {
  if (mode === 'volume') {
    return {
      retail: toPct(row.retail_qty_pct),
      mixed: toPct(row.mixed_qty_pct),
      instit: toPct(row.instit_qty_pct),
      unclear: unclearFromRow(row, '_qty'),
    };
  }
  if (mode === 'notional') {
    return {
      retail: toPct(row.retail_notional_pct),
      mixed: toPct(row.mixed_notional_pct),
      instit: toPct(row.instit_notional_pct),
      unclear: unclearFromRow(row, '_notional'),
    };
  }
  if (mode === 'runs') {
    return {
      retail: toPct(row.run_retail_pct),
      mixed: toPct(row.run_mixed_pct),
      instit: toPct(row.run_instit_pct),
      unclear: toPct(row.run_unclear_pct),
    };
  }
  return {
    retail: toPct(row.retail_pct),
    mixed: toPct(row.mixed_pct),
    instit: toPct(row.instit_pct),
    unclear: unclearFromRow(row, ''),
  };
};

const normalizeMix = (breakdown: { retail: number; mixed: number; instit: number; unclear: number }) => {
  const clamp = (x: number) => Math.max(0, Math.min(100, x));
  const retail = Number.isFinite(breakdown.retail) ? breakdown.retail : 0;
  const mixed = Number.isFinite(breakdown.mixed) ? breakdown.mixed : 0;
  const instit = Number.isFinite(breakdown.instit) ? breakdown.instit : 0;
  const unclear = Number.isFinite(breakdown.unclear) ? breakdown.unclear : 0;
  const sum = retail + mixed + instit + unclear;
  if (sum <= 0) return { retail: 0, mixed: 0, instit: 0, unclear: 0 };
  const scale = 100 / sum;
  return {
    retail: clamp(retail * scale),
    mixed: clamp(mixed * scale),
    instit: clamp(instit * scale),
    unclear: clamp(unclear * scale),
  };
};

const dominantLabelFromKey = (key: 'retail' | 'mixed' | 'instit' | 'unclear') => {
  if (key === 'retail') return 'Retail-led';
  if (key === 'instit') return 'Institution-led';
  if (key === 'mixed') return 'Mixed';
  return 'Unclassified';
};

const dominantFromBreakdown = (breakdown: ReturnType<typeof normalizeMix>) => {
  const ranked = [
    { key: 'retail' as const, value: breakdown.retail },
    { key: 'mixed' as const, value: breakdown.mixed },
    { key: 'instit' as const, value: breakdown.instit },
    { key: 'unclear' as const, value: breakdown.unclear },
  ].sort((a, b) => b.value - a.value);
  const top = ranked[0];
  return top ? dominantLabelFromKey(top.key) : 'Unavailable';
};

export function PeerTraderComposition({ selectedPeriod: controlledSelectedPeriod, onSelectedPeriodChange, mode: controlledMode, onModeChange }: PeerTraderCompositionProps) {
  const { labels, meta, series } = useReport();
  const chartTheme = useChartTheme();
  const traderComposition = series.trader_composition as any;

  const periodPeerMap = React.useMemo(() => {
    const out: Record<string, any[]> = {};
    if (traderComposition?.peer_comparison_periods && typeof traderComposition.peer_comparison_periods === 'object') {
      for (const [key, value] of Object.entries(traderComposition.peer_comparison_periods)) {
        if (Array.isArray(value)) out[key] = value as any[];
      }
    }
    if (traderComposition?.periods && typeof traderComposition.periods === 'object') {
      for (const [key, value] of Object.entries(traderComposition.periods)) {
        if (!out[key] && Array.isArray((value as any)?.peer_comparison)) {
          out[key] = (value as any).peer_comparison;
        }
      }
    }
    return out;
  }, [traderComposition]);

  const periodKeys = React.useMemo(() => {
    const keys = Object.keys(periodPeerMap).filter((key) => Array.isArray(periodPeerMap[key]));
    return [
      ...PERIOD_ORDER.filter((key) => keys.includes(key)),
      ...keys.filter((key) => !PERIOD_ORDER.includes(key)),
    ];
  }, [periodPeerMap]);

  const primaryPeriod = React.useMemo(() => {
    const raw = String(traderComposition?.primary_period || '').trim();
    if (raw && periodKeys.includes(raw)) return raw;
    const preferred = [...periodKeys].reverse().find((key) => key !== '1d');
    return preferred || periodKeys[0] || '';
  }, [traderComposition?.primary_period, periodKeys]);

  const [localSelectedPeriod, setLocalSelectedPeriod] = React.useState(primaryPeriod);
  const selectedPeriod = controlledSelectedPeriod ?? localSelectedPeriod;
  const setSelectedPeriod = React.useCallback((period: string) => {
    onSelectedPeriodChange?.(period);
    if (controlledSelectedPeriod === undefined) setLocalSelectedPeriod(period);
  }, [controlledSelectedPeriod, onSelectedPeriodChange]);

  React.useEffect(() => {
    if (primaryPeriod && (!selectedPeriod || !periodKeys.includes(selectedPeriod))) {
      setSelectedPeriod(primaryPeriod);
    }
  }, [primaryPeriod, periodKeys, selectedPeriod, setSelectedPeriod]);

  const peerRows = React.useMemo(() => {
    if (selectedPeriod && Array.isArray(periodPeerMap[selectedPeriod])) return periodPeerMap[selectedPeriod];
    return Array.isArray(traderComposition?.peer_comparison) ? traderComposition.peer_comparison : [];
  }, [periodPeerMap, selectedPeriod, traderComposition]);

  const hasVolume = peerRows.some((row: any) => row?.retail_qty_pct != null);

  const modes = [
    { id: 'trades' as ViewMode, label: 'Trades', available: true },
    { id: 'volume' as ViewMode, label: 'Volume', available: hasVolume },
  ].filter((entry) => entry.available);

  const [localMode, setLocalMode] = React.useState<ViewMode>('trades');
  const mode = controlledMode ?? localMode;
  const setMode = React.useCallback((nextMode: ViewMode) => {
    onModeChange?.(nextMode as ControlledViewMode);
    if (controlledMode === undefined) setLocalMode(nextMode);
  }, [controlledMode, onModeChange]);

  React.useEffect(() => {
    if (!modes.some((entry) => entry.id === mode)) {
      setMode(modes[0]?.id || 'trades');
    }
  }, [mode, modes, setMode]);

  const chartData = peerRows.map((row: any) => {
    const breakdown = normalizeMix(rowBreakdown(row, mode));
    return {
      ticker: row.ticker,
      'Retail-like': breakdown.retail,
      Mixed: breakdown.mixed,
      'Institution-like': breakdown.instit,
      Unclassified: breakdown.unclear,
      isTarget: !!row.is_target,
    };
  });

  const selectedPeriodLabel = selectedPeriod ? periodLabel(selectedPeriod) : 'Current';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10">
            <Users className="h-5 w-5 text-rose-400" />
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              {labels.peer_trader_title}
              <SectionTooltip sectionKey="peer-traders" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">{labels.peer_trader_subtitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              Peer persona mix
              <MethodologyTooltip methodKey="peer_traders" />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Window: <span className="font-semibold text-foreground">{selectedPeriodLabel}</span> • {meta.peers_count} peers
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {periodKeys.length > 1 ? (
              <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-auto">
                <TabsList>
                  {periodKeys.map((key) => (
                    <TabsTrigger key={key} value={key}>{periodLabel(key)}</TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            ) : null}
            <Tabs value={mode} onValueChange={(value) => setMode(value as ViewMode)} className="w-auto">
              <TabsList>
                {modes.map((entry) => (
                  <TabsTrigger key={entry.id} value={entry.id}>{entry.label}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
              <XAxis
                dataKey="ticker"
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={{ stroke: chartTheme.axisLineStroke }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                tickFormatter={(value) => `${Number(value).toFixed(0)}%`}
              />
              <Tooltip contentStyle={chartTheme.tooltipContentStyle} formatter={(value: number) => `${value.toFixed(1)}%`} />
              <Legend />
              {['Retail-like', 'Mixed', 'Institution-like', 'Unclassified'].map((key, idx) => {
                const colors = ['#38bdf8', '#64748b', '#34d399', '#f59e0b'];
                const radius: [number, number, number, number] = idx === 3 ? [4, 4, 0, 0] : [0, 0, 0, 0];
                return (
                  <Bar key={key} dataKey={key} stackId="a" fill={colors[idx]} radius={radius} maxBarSize={42}>
                    {chartData.map((entry: any, i: number) => (
                      <Cell key={`${key}-${i}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                    ))}
                  </Bar>
                );
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 rounded-xl border border-border/60 bg-card/30 p-4">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Ticker</TableHead>
                <TableHead>Dominant Read</TableHead>
                <TableHead className="text-right">Retail-like</TableHead>
                <TableHead className="text-right">Mixed</TableHead>
                <TableHead className="text-right">Institution-like</TableHead>
                <TableHead className="text-right">Unclassified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {peerRows.map((row: any) => {
                const breakdown = normalizeMix(rowBreakdown(row, mode));
                return (
                  <TableRow key={row.ticker} className="border-border">
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <span>{row.ticker}</span>
                        {row.is_target ? (
                          <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] font-medium text-sky-400">YOU</span>
                        ) : null}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{normalizeDominantLabel(dominantFromBreakdown(breakdown)) || '—'}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{fmtPct(breakdown.retail)}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{fmtPct(breakdown.mixed)}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{fmtPct(breakdown.instit)}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{fmtPct(breakdown.unclear)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
}
