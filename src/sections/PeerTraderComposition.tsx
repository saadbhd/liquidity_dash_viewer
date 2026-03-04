import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { useReport } from '@/context/ReportContext';
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PERIOD_ORDER = ['1d', '1w', '2w', '30d', '3m', '6m', 'max'];

const periodLabel = (key: string) => {
  const map: Record<string, string> = {
    '1d': '1D',
    '1w': '1W',
    '2w': '2W',
    '30d': '1M',
    '3m': '3M',
    '6m': '6M',
    'max': 'MAX',
  };
  return map[key] || key.toUpperCase();
};

export function PeerTraderComposition() {
  const { labels, meta, series } = useReport();
  const { trader_composition } = series;
  const tcAny = trader_composition as any;

  const periodPeerMap = React.useMemo(() => {
    const out: Record<string, any[]> = {};
    const m1 = tcAny?.peer_comparison_periods;
    if (m1 && typeof m1 === 'object') {
      for (const [k, v] of Object.entries(m1)) {
        if (Array.isArray(v)) out[k] = v as any[];
      }
    }
    const m2 = tcAny?.periods;
    if (m2 && typeof m2 === 'object') {
      for (const [k, v] of Object.entries(m2 as Record<string, any>)) {
        if (!out[k] && Array.isArray((v as any)?.peer_comparison)) {
          out[k] = (v as any).peer_comparison;
        }
      }
    }
    return out;
  }, [tcAny]);

  const periodKeys = React.useMemo(() => {
    const keys = Object.keys(periodPeerMap).filter((k) => Array.isArray(periodPeerMap[k]));
    return [
      ...PERIOD_ORDER.filter((k) => keys.includes(k)),
      ...keys.filter((k) => !PERIOD_ORDER.includes(k)),
    ];
  }, [periodPeerMap]);

  const primaryPeriod = React.useMemo(() => {
    const raw = String(tcAny?.primary_period || '').trim();
    if (raw && periodKeys.includes(raw)) return raw;
    const pref = [...periodKeys].reverse().find((k) => k !== '1d');
    return pref || periodKeys[0] || '';
  }, [tcAny?.primary_period, periodKeys]);

  const [selectedPeriod, setSelectedPeriod] = React.useState<string>(primaryPeriod);

  React.useEffect(() => {
    if (primaryPeriod && selectedPeriod !== primaryPeriod && !periodKeys.includes(selectedPeriod)) {
      setSelectedPeriod(primaryPeriod);
    } else if (!selectedPeriod && primaryPeriod) {
      setSelectedPeriod(primaryPeriod);
    }
  }, [primaryPeriod, selectedPeriod, periodKeys]);

  const peerData = React.useMemo(() => {
    if (selectedPeriod && Array.isArray(periodPeerMap[selectedPeriod])) {
      return periodPeerMap[selectedPeriod];
    }
    return Array.isArray(tcAny?.peer_comparison) ? tcAny.peer_comparison : [];
  }, [selectedPeriod, periodPeerMap, tcAny]);

  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  const currencyPrefix = (currency: string) =>
    currency === 'HKD' ? 'HK$' : currency === 'CNY' ? 'CN¥' : `${currency} `;

  const hasQty = peerData.some((p: any) => p && (p.retail_qty_pct != null || p.mixed_qty_pct != null || p.instit_qty_pct != null));

  type ViewMode = 'trades' | 'shares';
  const modes: { id: ViewMode; label: string; available: boolean }[] = [
    { id: 'trades', label: 'Trades', available: true },
    { id: 'shares', label: 'Volume', available: !!hasQty },
  ];
  const availableModes = modes.filter((m) => m.available);
  const defaultMode: ViewMode = availableModes[0]?.id ?? 'trades';
  const [mode, setMode] = React.useState<ViewMode>(defaultMode);

  React.useEffect(() => {
    if (mode === 'shares' && !hasQty) {
      setMode('trades');
    }
  }, [mode, hasQty]);

  const pctFor = (p: any, m: ViewMode) => {
    if (m === 'shares' && hasQty) {
      return {
        retail: toPct(p.retail_qty_pct ?? 0),
        mixed: toPct(p.mixed_qty_pct ?? 0),
        instit: toPct(p.instit_qty_pct ?? 0),
      };
    }
    return {
      retail: toPct(p.retail_pct ?? 0),
      mixed: toPct(p.mixed_pct ?? 0),
      instit: toPct(p.instit_pct ?? 0),
    };
  };

  const chartData = peerData.map((p: any) => {
    const v = pctFor(p, mode);
    return {
      ticker: p.ticker,
      Retail: v.retail,
      Mixed: v.mixed,
      Institutional: v.instit,
      isTarget: p.is_target,
    };
  });

  const labelForMode = (m: ViewMode) => (m === 'shares' ? 'Volume' : 'by trades');
  const typeIcon = (p: any) => {
    const v = pctFor(p, mode);
    if (v.retail > 70) return '🏠';
    if (v.instit > 20) return '🏦';
    return '⚖️';
  };

  const selectedPeriodLabel = selectedPeriod ? periodLabel(selectedPeriod) : 'Current';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              {labels.peer_trader_title}
              <MethodologyTooltip methodKey="peer_traders" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">{labels.peer_trader_subtitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="text-sm font-semibold text-foreground">Peer composition ({labelForMode(mode)}) • Window: {selectedPeriodLabel}</div>
          <div className="flex flex-wrap items-center gap-2">
            {periodKeys.length > 1 ? (
              <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod} className="w-auto">
                <TabsList>
                  {periodKeys.map((k) => (
                    <TabsTrigger key={k} value={k}>{periodLabel(k)}</TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            ) : null}
            <Tabs value={mode} onValueChange={(v) => setMode(v as ViewMode)} className="w-auto">
              <TabsList>
                {availableModes.map((m) => (
                  <TabsTrigger key={m.id} value={m.id}>
                    {m.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="ticker"
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
              />
              <Bar dataKey="Retail" stackId="a" fill="#0ea5e9" radius={[0, 0, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-retail-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
              <Bar dataKey="Mixed" stackId="a" fill="#64748b" radius={[0, 0, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-mixed-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
              <Bar dataKey="Institutional" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-instit-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-sky-500" />
            <span className="text-muted-foreground">{meta.ticker} (You)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slate-600" />
            <span className="text-muted-foreground">Peers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">🏠 = Retail-heavy (&gt;70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">⚖️ = Mixed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">🏦 = Institutional (&gt;20%)</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-muted-foreground text-xs">Ticker</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Retail %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Mixed %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Institutional %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Avg Trade Size</TableHead>
                <TableHead className="text-muted-foreground text-xs">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {peerData.map((row: any) => (
                <TableRow key={row.ticker} className="border-slate-800">
                  <TableCell className="text-foreground font-medium text-sm">
                    {row.ticker}
                    {row.is_target && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full">
                        YOU
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row, mode).retail.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row, mode).mixed.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row, mode).instit.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">
                    {currencyPrefix(row.currency)}{((row.avg_trade_size ?? 0) / 1000).toFixed(1)}K
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{typeIcon(row)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
}
