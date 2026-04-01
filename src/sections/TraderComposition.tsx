import { motion } from 'framer-motion';
import { Users, BarChart3, Activity } from 'lucide-react';
import { SectionTooltip } from '@/components/SectionTooltip';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { formatCompactMoney } from '@/lib/currency';
import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
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
const BUCKET_META = [
  { key: 'retail', label: 'Retail-like', color: '#38bdf8' },
  { key: 'mixed', label: 'Mixed', color: '#64748b' },
  { key: 'instit', label: 'Institution-like', color: '#34d399' },
  { key: 'unclear', label: 'Unclassified', color: '#f59e0b' },
] as const;

type ControlledViewMode = 'trades' | 'volume';

type TraderCompositionProps = {
  selectedPeriod?: string;
  onSelectedPeriodChange?: (period: string) => void;
  mode?: ControlledViewMode;
  onModeChange?: (mode: ControlledViewMode) => void;
};

type ViewMode = 'trades' | 'volume' | 'notional' | 'runs';

const safeText = (v: unknown): string => {
  if (typeof v === 'string') return v;
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>;
    if (typeof o.text === 'string') return o.text;
    if (typeof o.insight === 'string') return o.insight;
  }
  return '';
};

const toPct = (value: unknown): number => {
  const num = typeof value === 'number' ? value : Number(value ?? 0);
  if (!Number.isFinite(num)) return 0;
  return num <= 1 ? num * 100 : num;
};

const fmtCount = (value: unknown): string => {
  const num = Number(value ?? 0);
  if (!Number.isFinite(num) || num <= 0) return '0';
  return Math.round(num).toLocaleString();
};

const fmtMoney = (value: unknown, currency = 'USD'): string => {
  const num = Number(value ?? 0);
  if (!Number.isFinite(num) || num <= 0) return '—';
  return formatCompactMoney(num, currency);
};

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

const getUnclearPct = (source: Record<string, any>, base: string): number => {
  // Prefer the explicit unclear field when present; otherwise fallback to ambiguous + unobservable.
  const direct = source[`unclear_${base}_pct`];
  if (direct != null) return toPct(direct);
  const ambiguous = toPct(source[`ambiguous_${base}_pct`]);
  const unobservable = toPct(source[`unobservable_${base}_pct`]);
  return ambiguous + unobservable;
};

const getComposition = (snapshot: any, mode: ViewMode) => {
  const comp = snapshot?.composition || snapshot || {};
  const runComp = snapshot?.run_composition || {};
  if (mode === 'volume') {
    return {
      retail: toPct(comp.retail_qty_pct),
      mixed: toPct(comp.mixed_qty_pct),
      instit: toPct(comp.instit_qty_pct),
      unclear: getUnclearPct(comp, 'qty'),
    };
  }
  if (mode === 'notional') {
    return {
      retail: toPct(comp.retail_notional_pct),
      mixed: toPct(comp.mixed_notional_pct),
      instit: toPct(comp.instit_notional_pct),
      unclear: getUnclearPct(comp, 'notional'),
    };
  }
  if (mode === 'runs') {
    return {
      retail: toPct(runComp.retail_pct),
      mixed: toPct(runComp.mixed_pct),
      instit: toPct(runComp.instit_pct),
      unclear: (() => {
        if (runComp.unclear_pct != null) return toPct(runComp.unclear_pct);
        return toPct(runComp.ambiguous_pct) + toPct(runComp.unobservable_pct);
      })(),
    };
  }
  return {
    retail: toPct(comp.retail_pct),
    mixed: toPct(comp.mixed_pct),
    instit: toPct(comp.instit_pct),
    unclear: (() => {
      if (comp.unclear_pct != null) return toPct(comp.unclear_pct);
      return toPct(comp.ambiguous_pct) + toPct(comp.unobservable_pct);
    })(),
  };
};

const dominantLabelFromKey = (key: (typeof BUCKET_META)[number]['key']) => {
  if (key === 'retail') return 'Retail-led';
  if (key === 'instit') return 'Institution-led';
  if (key === 'mixed') return 'Mixed';
  return 'Unclassified';
};

const dominantFromBreakdown = (breakdown: ReturnType<typeof getComposition>) => {
  const ranked = (
    [
      { key: 'retail' as const, value: breakdown.retail },
      { key: 'mixed' as const, value: breakdown.mixed },
      { key: 'instit' as const, value: breakdown.instit },
      { key: 'unclear' as const, value: breakdown.unclear },
    ] satisfies Array<{ key: (typeof BUCKET_META)[number]['key']; value: number }>
  ).sort((a, b) => b.value - a.value);
  const top = ranked[0];
  if (!top) return { label: 'Unavailable', value: 0 };
  return { label: dominantLabelFromKey(top.key), value: top.value };
};

export function TraderComposition({ selectedPeriod: controlledSelectedPeriod, onSelectedPeriodChange, mode: controlledMode, onModeChange }: TraderCompositionProps) {
  const { labels, insights, series } = useReport();
  const chartTheme = useChartTheme();
  const traderComposition = series.trader_composition as any;
  const traderInsights = insights.trader_composition || {};

  const periodSnapshots =
    traderComposition?.periods && typeof traderComposition.periods === 'object'
      ? (traderComposition.periods as Record<string, any>)
      : {};

  const periodKeys = React.useMemo(() => {
    const keys = Object.keys(periodSnapshots).filter((key) => !!periodSnapshots[key]);
    return [
      ...PERIOD_ORDER.filter((key) => keys.includes(key)),
      ...keys.filter((key) => !PERIOD_ORDER.includes(key)),
    ];
  }, [periodSnapshots]);

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

  const activeSnapshot = (selectedPeriod && periodSnapshots[selectedPeriod]) || traderComposition || {};

  const hasVolume = React.useMemo(() => {
    const snaps = [activeSnapshot, ...Object.values(periodSnapshots)];
    return snaps.some((snapshot: any) => snapshot?.composition?.retail_qty_pct != null);
  }, [activeSnapshot, periodSnapshots]);

  const modes = [
    { id: 'trades' as ViewMode, label: 'Trades', available: true },
    { id: 'volume' as ViewMode, label: 'Volume', available: hasVolume },
  ].filter((mode) => mode.available);

  const [localMode, setLocalMode] = React.useState<ViewMode>(modes.some((entry) => entry.id === 'trades') ? 'trades' : (modes[0]?.id || 'trades'));
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

  const composition = getComposition(activeSnapshot, mode);
  const dominant = dominantFromBreakdown(composition).label;
  const currency = activeSnapshot?.currency || traderComposition?.currency || 'USD';
  const selectedPeriodLabel = selectedPeriod ? periodLabel(selectedPeriod) : 'Current';

  const overTimeSource = Array.isArray(traderComposition?.over_time)
    ? traderComposition.over_time
    : Array.isArray(traderComposition?.over_time?.periods)
      ? traderComposition.over_time.periods
      : [];

  const timeSeriesData = [...overTimeSource]
    .sort((a: any, b: any) => String(a.month || '').localeCompare(String(b.month || '')))
    .map((row: any) => {
      const breakdown = mode === 'volume'
        ? {
            retail: toPct(row.retail_qty_pct),
            mixed: toPct(row.mixed_qty_pct),
            instit: toPct(row.instit_qty_pct),
            unclear: getUnclearPct(row, 'qty'),
          }
        : mode === 'notional'
          ? {
              retail: toPct(row.retail_notional_pct),
              mixed: toPct(row.mixed_notional_pct),
              instit: toPct(row.instit_notional_pct),
              unclear: getUnclearPct(row, 'notional'),
            }
          : mode === 'runs'
            ? {
                retail: toPct(row.run_retail_pct),
                mixed: toPct(row.run_mixed_pct),
                instit: toPct(row.run_instit_pct),
                unclear: row.run_unclear_pct != null ? toPct(row.run_unclear_pct) : toPct(row.run_ambiguous_pct) + toPct(row.run_unobservable_pct),
              }
            : {
                retail: toPct(row.retail_pct),
                mixed: toPct(row.mixed_pct),
                instit: toPct(row.instit_pct),
                unclear: row.unclear_pct != null ? toPct(row.unclear_pct) : toPct(row.ambiguous_pct) + toPct(row.unobservable_pct),
              };
      return {
        month: row.month,
        'Retail-like': breakdown.retail,
        Mixed: breakdown.mixed,
        'Institution-like': breakdown.instit,
        Unclassified: breakdown.unclear,
      };
    });

  const overTimeNote = timeSeriesData.length < 3 ? ' Limited history: only a few months are available.' : '';

  const tradeCounts = activeSnapshot?.counts?.trades || {};
  const bucketTradeCount = (bucketKey: (typeof BUCKET_META)[number]['key']) => {
    if (!tradeCounts) return null;
    if (bucketKey === 'instit') return tradeCounts.institutional;
    return tradeCounts[bucketKey];
  };

  const compositionCards = BUCKET_META.map((bucket) => ({
    ...bucket,
    value: composition[bucket.key],
    tradeCount: bucketTradeCount(bucket.key),
  }));
  const activeModeLabel = modes.find((entry) => entry.id === mode)?.label || 'Trades';

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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10">
            <Users className="h-5 w-5 text-pink-400" />
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              {labels.trader_composition_title}
              <SectionTooltip sectionKey="traders" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">{labels.trader_composition_subtitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              Current persona mix
              <MethodologyTooltip methodKey="trader_composition" />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Window: <span className="font-semibold text-foreground">{selectedPeriodLabel}</span>
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
            {modes.length > 1 ? (
              <Tabs value={mode} onValueChange={(value) => setMode(value as ViewMode)} className="w-auto">
                <TabsList>
                  {modes.map((entry) => (
                    <TabsTrigger key={entry.id} value={entry.id}>{entry.label}</TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Users className="h-4 w-4" /> Dominant persona
              <MethodologyTooltip methodKey="trader_dominant_persona" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{dominant || 'Unavailable'}</div>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Activity className="h-4 w-4" /> Classified flow
              <MethodologyTooltip methodKey="trader_classified_flow" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{fmtCount(activeSnapshot?.n_trades)} trades</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {fmtCount(activeSnapshot?.n_runs)} grouped trades across {fmtCount(activeSnapshot?.n_trade_days)} trading day{Number(activeSnapshot?.n_trade_days || 0) === 1 ? '' : 's'}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <BarChart3 className="h-4 w-4" /> Typical size
              <MethodologyTooltip methodKey="trader_typical_size" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{fmtMoney(activeSnapshot?.trade_size?.avg, currency)}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Avg trade value • Avg group {fmtMoney(activeSnapshot?.run_size?.avg, currency)}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-border/60 bg-card/30 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Current mix by {activeModeLabel.toLowerCase()}</h3>
              <p className="text-xs text-muted-foreground">
                Persona shares combine retail-like, mixed, institution-like, and unclassified flow.
              </p>
            </div>
          </div>
          <div className="mb-4 flex h-4 overflow-hidden rounded-full bg-slate-900/70">
            {compositionCards.map((bucket) => (
              <div
                key={bucket.key}
                className="h-full"
                style={{ width: `${Math.max(bucket.value, 0)}%`, backgroundColor: bucket.color }}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {compositionCards.map((bucket) => (
              <div key={bucket.key} className="rounded-lg border border-border/60 bg-background/40 p-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: bucket.color }} />
                  {bucket.label}
                </div>
                <div className="mt-2 text-2xl font-semibold text-foreground">{bucket.value.toFixed(1)}%</div>
                {mode === 'trades' && bucket.tradeCount != null ? (
                  <div className="mt-1 text-xs text-muted-foreground">{fmtCount(bucket.tradeCount)} trades</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">How the persona mix changed over time</h3>
            <p className="text-xs text-muted-foreground">
              Monthly persona shares (months shown depend on available history). Use the view switch to compare trade share and volume share.{overTimeNote}
            </p>
          </div>
          {modes.length > 1 ? (
            <Tabs value={mode} onValueChange={(value) => setMode(value as ViewMode)} className="w-auto">
              <TabsList>
                {modes.map((entry) => (
                  <TabsTrigger key={entry.id} value={entry.id}>{entry.label}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          ) : null}
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={timeSeriesData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
              <XAxis
                dataKey="month"
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={{ stroke: chartTheme.axisLineStroke }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip contentStyle={chartTheme.tooltipContentStyle} formatter={(value: number) => `${value.toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="Retail-like" stackId="a" fill="#38bdf8" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Mixed" stackId="a" fill="#64748b" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Institution-like" stackId="a" fill="#34d399" radius={[0, 0, 0, 0]} />
              <Bar dataKey="Unclassified" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-pink-500/50">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Key Insights</h4>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[safeText(traderInsights.overall), safeText(traderInsights.retail_heavy), safeText(traderInsights.institutional_gap), safeText(traderInsights.peer_comparison)]
            .filter(Boolean)
            .map((text, index) => (
              <p key={index} className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
