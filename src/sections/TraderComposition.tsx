import { motion } from 'framer-motion';
import { Users, HelpCircle } from 'lucide-react';
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
  Legend,
} from 'recharts';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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

export function TraderComposition() {
  const { labels, insights, series } = useReport();
  const chartTheme = useChartTheme();
  const { trader_composition } = series;
  const { trader_composition: traderInsights } = insights;

  const tcAny = trader_composition as any;
  const periodSnapshots = (tcAny?.periods && typeof tcAny.periods === 'object') ? tcAny.periods as Record<string, any> : {};

  const periodKeys = React.useMemo(() => {
    const keys = Object.keys(periodSnapshots).filter((k) => {
      const s = periodSnapshots[k];
      return !!s && typeof s === 'object' && (s.composition || s.valid !== undefined);
    });
    return [
      ...PERIOD_ORDER.filter((k) => keys.includes(k)),
      ...keys.filter((k) => !PERIOD_ORDER.includes(k)),
    ];
  }, [periodSnapshots]);

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

  const activeSnapshot = (selectedPeriod && periodSnapshots[selectedPeriod]) ? periodSnapshots[selectedPeriod] : tcAny;

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  const comp = activeSnapshot?.composition || tcAny?.composition || {};
  const hasQty =
    typeof comp === 'object' &&
    comp !== null &&
    ('retail_qty_pct' in comp || 'mixed_qty_pct' in comp || 'instit_qty_pct' in comp);

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

  const getCompPct = (m: ViewMode) => {
    if (m === 'shares' && hasQty) {
      return {
        retail: toPct((comp as any).retail_qty_pct ?? 0),
        mixed: toPct((comp as any).mixed_qty_pct ?? 0),
        instit: toPct((comp as any).instit_qty_pct ?? 0),
      };
    }
    return {
      retail: toPct((comp as any).retail_pct ?? 0),
      mixed: toPct((comp as any).mixed_pct ?? 0),
      instit: toPct((comp as any).instit_pct ?? 0),
    };
  };

  const compTrades = getCompPct('trades');
  const compShares = hasQty ? getCompPct('shares') : null;
  const compCurrent = getCompPct(mode);

  const overTimePeriods =
    'over_time' in trader_composition && Array.isArray((trader_composition as any).over_time)
      ? (trader_composition as any).over_time
      : 'over_time' in trader_composition && (trader_composition as any).over_time && 'periods' in (trader_composition as any).over_time
        ? (trader_composition as any).over_time.periods
        : [];

  const timeSeriesData = [...overTimePeriods]
    .sort((a, b) => a.month.localeCompare(b.month))
    .map((d: any) => {
      const retail = toPct(d.retail_pct);
      const mixed = toPct(d.mixed_pct);
      const instit = toPct(d.instit_pct);
      const total = retail + mixed + instit;
      const scale = total > 0 ? 100 / total : 0;
      return {
        month: d.month,
        Retail: retail * scale,
        Mixed: mixed * scale,
        Institutional: instit * scale,
      };
    });

  const timeSeriesDataByQty =
    overTimePeriods.some((p: any) => p && (p.retail_qty_pct != null || p.mixed_qty_pct != null || p.instit_qty_pct != null))
      ? [...overTimePeriods]
          .sort((a: any, b: any) => a.month.localeCompare(b.month))
          .map((d: any) => {
            const retail = toPct(d.retail_qty_pct ?? 0);
            const mixed = toPct(d.mixed_qty_pct ?? 0);
            const instit = toPct(d.instit_qty_pct ?? 0);
            const total = retail + mixed + instit;
            const scale = total > 0 ? 100 / total : 0;
            return {
              month: d.month,
              Retail: retail * scale,
              Mixed: mixed * scale,
              Institutional: instit * scale,
              totalQty: d.total_quantity,
            };
          })
      : null;

  const currency = activeSnapshot?.currency || tcAny?.currency || 'HKD';
  const currencyPrefix = currency === 'HKD' ? 'HK$' : currency === 'CNY' ? 'CN¥' : `${currency} `;

  const totalTrades = activeSnapshot?.n_trades ?? tcAny?.n_trades ?? (trader_composition as any)?.trade_stats?.total_trades ?? 0;
  const avgTradeSize = activeSnapshot?.trade_size?.avg ?? tcAny?.trade_size?.avg ?? (trader_composition as any)?.trade_stats?.avg_size ?? 0;
  const medianTradeSize = activeSnapshot?.trade_size?.median ?? tcAny?.trade_size?.median ?? (trader_composition as any)?.trade_stats?.median_size ?? 0;
  const periodDays = activeSnapshot?.period_days ?? tcAny?.period_days ?? (trader_composition as any)?.trade_stats?.period_days ?? 0;

  const fmtTradeSize = (v: number) => {
    if (!Number.isFinite(v)) return '—';
    if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
    return `${Math.round(v).toLocaleString()}`;
  };

  const selectedPeriodLabel = selectedPeriod ? periodLabel(selectedPeriod) : 'Current';

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {labels.trader_composition_title}
                <MethodologyTooltip methodKey="trader_composition" size="md" />
              </h2>
              <p className="text-sm text-muted-foreground">{labels.trader_composition_subtitle}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">Current Composition</h3>
              <div className="text-xs text-muted-foreground">Window: <span className="font-semibold text-foreground">{selectedPeriodLabel}</span></div>
            </div>
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

          {hasQty ? (
            <div className="mb-4 rounded-lg border border-border/60 bg-card/50 p-3">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Reality check:</span> retail can be ~{compTrades.retail.toFixed(1)}% of trades
                but only ~{compShares!.retail.toFixed(1)}% of volume. Institutions often look small by trade count, yet dominate volume.
              </p>
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border border-border/50 bg-card/30 p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sky-600 dark:text-sky-400 font-medium">Retail</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_retail_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-xl font-bold text-sky-600 dark:text-sky-400">{compCurrent.retail.toFixed(1)}%</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compCurrent.retail}%` }}
                  transition={{ duration: 0.9 }}
                  className="h-full rounded-full bg-sky-500"
                />
              </div>
              {hasQty ? (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5">Trades: {compTrades.retail.toFixed(1)}%</span>
                  <span className="rounded-full bg-muted px-2 py-0.5">Volume: {compShares!.retail.toFixed(1)}%</span>
                </div>
              ) : null}
            </div>

            <div className="rounded-lg border border-border/50 bg-card/30 p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-medium">Mixed</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_mixed_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-xl font-bold text-slate-300">{compCurrent.mixed.toFixed(1)}%</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compCurrent.mixed}%` }}
                  transition={{ duration: 0.9, delay: 0.05 }}
                  className="h-full rounded-full bg-slate-500"
                />
              </div>
              {hasQty ? (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5">Trades: {compTrades.mixed.toFixed(1)}%</span>
                  <span className="rounded-full bg-muted px-2 py-0.5">Volume: {compShares!.mixed.toFixed(1)}%</span>
                </div>
              ) : null}
            </div>

            <div className="rounded-lg border border-border/50 bg-card/30 p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Institutional</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_instit_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{compCurrent.instit.toFixed(1)}%</span>
              </div>
              <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compCurrent.instit}%` }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className="h-full rounded-full bg-emerald-500"
                />
              </div>
              {hasQty ? (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-2 py-0.5">Trades: {compTrades.instit.toFixed(1)}%</span>
                  <span className="rounded-full bg-muted px-2 py-0.5">Volume: {compShares!.instit.toFixed(1)}%</span>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Total Trades ({selectedPeriodLabel} • {periodDays}D)</p>
              <p className="text-lg font-bold text-foreground">{Number(totalTrades || 0).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Avg Trade Size</p>
              <p className="text-lg font-bold text-foreground">
                {currencyPrefix}
                {fmtTradeSize(avgTradeSize)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Median Trade Size</p>
              <p className="text-lg font-bold text-foreground">
                {currencyPrefix}
                {fmtTradeSize(medianTradeSize)}
              </p>
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-muted-foreground">Mode</p>
              <p className="text-lg font-bold text-foreground">{mode === 'shares' ? 'Volume %' : 'Trades %'}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Composition Over Time</h3>
            {hasQty ? (
              <div className="text-xs text-muted-foreground">
                Tip: switch to <span className="font-semibold text-foreground">Volume</span> to see who actually moves volume.
              </div>
            ) : null}
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mode === 'shares' && timeSeriesDataByQty ? timeSeriesDataByQty : timeSeriesData}
                margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
              >
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
                  allowDecimals={false}
                  tickFormatter={(v) => `${Math.round(Number(v))}%`}
                />
                <Tooltip contentStyle={chartTheme.tooltipContentStyle} />
                <Legend iconType="square" wrapperStyle={{ paddingTop: '10px' }} />
                <Bar dataKey="Retail" stackId="a" fill={chartTheme.barPrimary} radius={[0, 0, 0, 0]} />
                <Bar dataKey="Mixed" stackId="a" fill={chartTheme.barSecondary} radius={[0, 0, 0, 0]} />
                <Bar dataKey="Institutional" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-pink-500/50">
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Insights</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">{traderInsights.overall}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{traderInsights.retail_heavy}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">{traderInsights.institutional_gap}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{traderInsights.peer_comparison}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
