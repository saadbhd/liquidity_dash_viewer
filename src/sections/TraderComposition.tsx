import { motion } from 'framer-motion';
import { Users, BarChart3, ListChecks, ShieldCheck, Activity } from 'lucide-react';
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
  { key: 'unclear', label: 'Unclear', color: '#f59e0b' },
] as const;

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

const fmtPct = (value: unknown, digits = 1): string => `${toPct(value).toFixed(digits)}%`;

const fmtCount = (value: unknown): string => {
  const num = Number(value ?? 0);
  if (!Number.isFinite(num) || num <= 0) return '0';
  return Math.round(num).toLocaleString();
};

const fmtMoney = (value: unknown, currency = 'USD'): string => {
  const num = Number(value ?? 0);
  if (!Number.isFinite(num) || num <= 0) return '—';
  const prefix = currency === 'HKD' ? 'HK$' : currency === 'SGD' ? 'S$' : `${currency} `;
  if (num >= 1_000_000) return `${prefix}${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${prefix}${(num / 1_000).toFixed(1)}K`;
  return `${prefix}${num.toFixed(0)}`;
};

const marketTimeSettings = (market?: string) => {
  if (market === 'XSES') return { timeZone: 'Asia/Singapore', label: 'SGT', locale: 'en-SG' };
  if (market === 'XHKG') return { timeZone: 'Asia/Hong_Kong', label: 'HKT', locale: 'en-HK' };
  return { timeZone: 'UTC', label: 'UTC', locale: 'en-GB' };
};

const fmtMarketTime = (value: unknown, market?: string): string => {
  if (!value) return '—';
  const raw = String(value);
  const dt = new Date(raw);
  if (Number.isNaN(dt.getTime())) {
    const match = raw.match(/(\d{2}:\d{2}:\d{2})/);
    return match?.[1] || raw;
  }
  const settings = marketTimeSettings(market);
  return new Intl.DateTimeFormat(settings.locale, {
    timeZone: settings.timeZone,
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(dt);
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
  const direct = source[`${base}_pct`];
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

const dominantFromBreakdown = (breakdown: ReturnType<typeof getComposition>) => {
  const ranked = [
    { label: 'Retail-like', value: breakdown.retail },
    { label: 'Mixed', value: breakdown.mixed },
    { label: 'Institution-like', value: breakdown.instit },
    { label: 'Unclear', value: breakdown.unclear },
  ].sort((a, b) => b.value - a.value);
  return ranked[0] || { label: 'Unavailable', value: 0 };
};

const confidenceRows = (mix: Record<string, any> | undefined, counts: Record<string, any> | undefined) => [
  { key: 'high', label: 'High' },
  { key: 'medium', label: 'Medium' },
  { key: 'low', label: 'Low' },
  { key: 'na', label: 'N/A' },
].map((item) => ({
  ...item,
  pct: toPct(mix?.[item.key]),
  count: Number(counts?.[item.key] ?? 0),
}));

const bucketRows = (counts: Record<string, any> | undefined) => [
  { key: 'retail', label: 'Retail-like' },
  { key: 'mixed', label: 'Mixed' },
  { key: 'institutional', label: 'Institution-like' },
  { key: 'ambiguous', label: 'Ambiguous' },
  { key: 'unobservable', label: 'Unobservable' },
  { key: 'unclear', label: 'Unclear' },
].map((item) => ({
  ...item,
  count: Number(counts?.[item.key] ?? 0),
}));

const bucketLabel = (value: unknown): string => {
  const text = String(value || 'UNOBSERVABLE').toUpperCase();
  const map: Record<string, string> = {
    RETAIL: 'Retail-like',
    MIXED: 'Mixed',
    INSTITUTIONAL: 'Institution-like',
    AMBIGUOUS: 'Ambiguous',
    UNOBSERVABLE: 'Unclear',
  };
  return map[text] || text;
};

const confidenceBadgeClass = (value: unknown): string => {
  const key = String(value || 'NA').toUpperCase();
  if (key === 'HIGH') return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
  if (key === 'MEDIUM') return 'border-sky-500/30 bg-sky-500/10 text-sky-300';
  if (key === 'LOW') return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
  return 'border-slate-500/30 bg-slate-500/10 text-slate-300';
};

export function TraderComposition() {
  const { labels, insights, meta, series } = useReport();
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

  const [selectedPeriod, setSelectedPeriod] = React.useState(primaryPeriod);

  React.useEffect(() => {
    if (primaryPeriod && (!selectedPeriod || !periodKeys.includes(selectedPeriod))) {
      setSelectedPeriod(primaryPeriod);
    }
  }, [primaryPeriod, periodKeys, selectedPeriod]);

  const activeSnapshot = (selectedPeriod && periodSnapshots[selectedPeriod]) || traderComposition || {};

  const hasVolume = React.useMemo(() => {
    const snaps = [activeSnapshot, ...Object.values(periodSnapshots)];
    return snaps.some((snapshot: any) => snapshot?.composition?.retail_qty_pct != null);
  }, [activeSnapshot, periodSnapshots]);

  const modes = [
    { id: 'volume' as ViewMode, label: 'Volume', available: hasVolume },
    { id: 'trades' as ViewMode, label: 'Trades', available: true },
  ].filter((mode) => mode.available);

  const [mode, setMode] = React.useState<ViewMode>(modes[0]?.id || 'trades');

  React.useEffect(() => {
    if (!modes.some((entry) => entry.id === mode)) {
      setMode(modes[0]?.id || 'trades');
    }
  }, [mode, modes]);

  const composition = getComposition(activeSnapshot, mode);
  const dominant = activeSnapshot?.dominant_label || dominantFromBreakdown(composition).label;
  const dominantShare = activeSnapshot?.dominant_share != null ? fmtPct(activeSnapshot.dominant_share) : fmtPct(dominantFromBreakdown(composition).value);
  const confidence = activeSnapshot?.confidence || {};
  const confidenceCounts = activeSnapshot?.confidence_counts || {};
  const tradeConfidence = activeSnapshot?.trade_confidence || {};
  const tradeConfidenceCounts = activeSnapshot?.trade_confidence_counts || {};
  const observability = activeSnapshot?.observability || {};
  const method = activeSnapshot?.method || traderComposition?.method || {};
  const currency = activeSnapshot?.currency || traderComposition?.currency || 'USD';
  const selectedPeriodLabel = selectedPeriod ? periodLabel(selectedPeriod) : 'Current';
  const timeSettings = marketTimeSettings(meta?.market);

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
                unclear: toPct(row.run_unclear_pct) + toPct(row.run_ambiguous_pct) + toPct(row.run_unobservable_pct),
              }
            : {
                retail: toPct(row.retail_pct),
                mixed: toPct(row.mixed_pct),
                instit: toPct(row.instit_pct),
                unclear: toPct(row.unclear_pct) + toPct(row.ambiguous_pct) + toPct(row.unobservable_pct),
              };
      return {
        month: row.month,
        'Retail-like': breakdown.retail,
        Mixed: breakdown.mixed,
        'Institution-like': breakdown.instit,
        Unclear: breakdown.unclear,
      };
    });

  const compositionCards = BUCKET_META.map((bucket) => ({
    ...bucket,
    value: composition[bucket.key],
  }));

  const tradeConfidenceRows = confidenceRows(tradeConfidence, tradeConfidenceCounts);
  const runConfidenceRows = confidenceRows(confidence, confidenceCounts);
  const tradeCountRows = bucketRows(activeSnapshot?.counts?.trades);
  const runCountRows = bucketRows(activeSnapshot?.counts?.runs);
  const recentTrades = Array.isArray(activeSnapshot?.recent_trades) ? activeSnapshot.recent_trades : [];

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
              {method?.name ? ` • Method: ${method.name}` : ''}
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Users className="h-4 w-4" /> Dominant persona
              <MethodologyTooltip methodKey="trader_dominant_persona" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{dominant || 'Unavailable'}</div>
            <p className="mt-2 text-sm text-muted-foreground">Largest run share: {dominantShare}</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <Activity className="h-4 w-4" /> Classified flow
              <MethodologyTooltip methodKey="trader_classified_flow" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{fmtCount(activeSnapshot?.n_trades)} trades</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {fmtCount(activeSnapshot?.n_runs)} runs across {fmtCount(activeSnapshot?.n_trade_days)} trading day{Number(activeSnapshot?.n_trade_days || 0) === 1 ? '' : 's'}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="h-4 w-4" /> Trade confidence
              <MethodologyTooltip methodKey="trader_trade_confidence" />
            </div>
            <div className="space-y-1 text-sm text-foreground">
              {tradeConfidenceRows.map((row) => (
                <div key={row.key} className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span>{fmtPct(row.pct)} ({fmtCount(row.count)} trades)</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="h-4 w-4" /> Run confidence
              <MethodologyTooltip methodKey="trader_run_confidence" />
            </div>
            <div className="space-y-1 text-sm text-foreground">
              {runConfidenceRows.map((row) => (
                <div key={row.key} className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span>{fmtPct(row.pct)} ({fmtCount(row.count)} trades)</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
              <BarChart3 className="h-4 w-4" /> Typical size
              <MethodologyTooltip methodKey="trader_typical_size" />
            </div>
            <div className="text-2xl font-semibold text-foreground">{fmtMoney(activeSnapshot?.trade_size?.avg, currency)}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Avg trade value • Avg run {fmtMoney(activeSnapshot?.run_size?.avg, currency)}
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-border/60 bg-card/30 p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Current mix by {mode}</h3>
              <p className="text-xs text-muted-foreground">
                Persona shares combine retail-like, mixed, institution-like, and unclear flow.
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              Observable runs: <span className="font-semibold text-foreground">{fmtPct(observability.observable_run_pct ?? 0)}</span>
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
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
        <div className="glass-panel rounded-xl p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <ListChecks className="h-4 w-4 text-sky-400" />
            Classification detail for {selectedPeriodLabel}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card/30 p-4">
              <div className="mb-3 text-sm font-semibold text-foreground">Trade counts by bucket</div>
              <div className="space-y-2 text-sm">
                {tradeCountRows.map((row) => (
                  <div key={row.key} className="flex items-center justify-between gap-3 text-muted-foreground">
                    <span>{row.label}</span>
                    <span className="font-semibold text-foreground">{fmtCount(row.count)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/30 p-4">
              <div className="mb-3 text-sm font-semibold text-foreground">Run counts by bucket</div>
              <div className="space-y-2 text-sm">
                {runCountRows.map((row) => (
                  <div key={row.key} className="flex items-center justify-between gap-3 text-muted-foreground">
                    <span>{row.label}</span>
                    <span className="font-semibold text-foreground">{fmtCount(row.count)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
            <MethodologyTooltip methodKey="trader_recent_trades" />
            Recent classified trades
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Recent trades in the selected window, with the method's bucket and confidence tag.
          </p>
          <div className="max-h-[320px] overflow-auto rounded-xl border border-border/60 bg-card/20">
            <table className="min-w-full text-sm">
              <thead className="sticky top-0 bg-background/95 backdrop-blur">
                <tr className="border-b border-border">
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Date/Time ({timeSettings.label})</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Value</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Bucket</th>
                  <th className="px-3 py-2 text-left font-medium text-muted-foreground">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.length ? recentTrades.map((trade: any, index: number) => (
                  <tr key={`${trade.trade_id || trade.timestamp || index}`} className="border-b border-border/60 last:border-b-0">
                    <td className="px-3 py-2 text-muted-foreground">{fmtMarketTime(trade.timestamp, meta?.market)}</td>
                    <td className="px-3 py-2 text-foreground">{fmtMoney(trade.notional, currency)}</td>
                    <td className="px-3 py-2 text-foreground">{bucketLabel(trade.bucket)}</td>
                    <td className="px-3 py-2">
                      <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${confidenceBadgeClass(trade.confidence)}`}>
                        {String(trade.confidence || 'NA')}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={4} className="px-3 py-6 text-center text-sm text-muted-foreground">
                      No classified trades available for this window.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">How the persona mix changed over time</h3>
            <p className="text-xs text-muted-foreground">
              Monthly view using the same behavioral persona method. Switch modes to compare trade count, volume, value, or runs.
            </p>
          </div>
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
              <Bar dataKey="Unclear" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
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
