import {
  Activity,
  BarChart3,
  BookOpen,
  Clock,
  Cpu,
  DollarSign,
  Gift,
  Gauge,
  LineChart as LineChartIcon,
  TrendingDown,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { ElementType, ReactNode } from 'react';
import { useReport } from '@/context/ReportContext';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from 'recharts';

type AnyRecord = Record<string, any>;
type Tone = 'good' | 'info' | 'warn' | 'bad' | 'neutral';

const toneClasses: Record<Tone, { text: string; bg: string; border: string; dot: string }> = {
  good: { text: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', dot: 'bg-emerald-400' },
  info: { text: 'text-sky-300', bg: 'bg-sky-500/10', border: 'border-sky-500/30', dot: 'bg-sky-400' },
  warn: { text: 'text-amber-300', bg: 'bg-amber-500/10', border: 'border-amber-500/30', dot: 'bg-amber-400' },
  bad: { text: 'text-red-300', bg: 'bg-red-500/10', border: 'border-red-500/30', dot: 'bg-red-400' },
  neutral: { text: 'text-slate-300', bg: 'bg-slate-500/10', border: 'border-slate-700/70', dot: 'bg-slate-400' },
};

const macroColors: Record<number, string> = {
  0: '#22c55e',
  1: '#f59e0b',
  2: '#38bdf8',
  3: '#ef4444',
};

function useEtfPayload(): AnyRecord {
  const report = useReport() as { etf?: AnyRecord };
  return report.etf || {};
}

function asNumber(value: unknown): number | null {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function fmtNum(value: unknown, digits = 1): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  return num.toFixed(digits);
}

function fmtPct(value: unknown, digits = 1): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  return `${(num * 100).toFixed(digits)}%`;
}

function fmtBps(value: unknown, digits = 1): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  return `${num.toFixed(digits)} bps`;
}

function fmtMoney(value: unknown, digits = 1): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  const abs = Math.abs(num);
  if (abs >= 1e9) return `HK$${(num / 1e9).toFixed(digits)}B`;
  if (abs >= 1e6) return `HK$${(num / 1e6).toFixed(digits)}M`;
  if (abs >= 1e3) return `HK$${(num / 1e3).toFixed(digits)}K`;
  return `HK$${num.toFixed(0)}`;
}

function fmtCount(value: unknown): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  if (Math.abs(num) >= 1000) return `${Math.round(num / 1000)}K`;
  return num.toFixed(0);
}

function fmtSignedPct(value: unknown, digits = 2): string {
  const num = asNumber(value);
  if (num === null) return 'N/A';
  return `${num >= 0 ? '+' : ''}${(num * 100).toFixed(digits)}%`;
}

function cleanNarrative(text: unknown): string {
  return String(text || '')
    .replace(/ and [0-9.]+% quote uptime —/g, ' and strong market-maker coverage —')
    .replace(/, with both sides of the book quoted [^.]+ of the continuous session\./g, '.');
}

function latest<T>(rows: T[] | undefined): T | undefined {
  return Array.isArray(rows) ? rows[rows.length - 1] : undefined;
}

function normalizeSeries(rows: AnyRecord[], key: string): Array<number | null> {
  const first = rows.map((row) => asNumber(row[key])).find((value) => value !== null);
  if (!first) return rows.map(() => null);
  return rows.map((row) => {
    const value = asNumber(row[key]);
    return value === null ? null : (value / first) * 100;
  });
}

function tail<T>(arr: T[] | undefined, n: number): T[] {
  return Array.isArray(arr) ? arr.slice(-n) : [];
}

function pctChange(values: Array<number | null>): number | null {
  const clean = values.filter((value): value is number => value !== null && Number.isFinite(value));
  if (clean.length < 2 || clean[0] === 0) return null;
  return (clean[clean.length - 1] - clean[0]) / clean[0];
}

function Sparkline({
  values,
  color = '#38bdf8',
  fill = true,
}: {
  values: Array<number | null>;
  color?: string;
  fill?: boolean;
}) {
  const clean = values.map((value) => (value === null || !Number.isFinite(value) ? null : value));
  const numeric = clean.filter((value): value is number => value !== null);
  if (numeric.length < 2) return <div className="h-16 rounded-lg bg-slate-950/50" />;

  const min = Math.min(...numeric);
  const max = Math.max(...numeric);
  const range = max - min || 1;
  const width = 220;
  const height = 64;
  const points = clean.map((value, index) => {
    const x = (index / Math.max(clean.length - 1, 1)) * width;
    const y = value === null ? height / 2 : height - ((value - min) / range) * (height - 8) - 4;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });
  const line = points.join(' ');
  const area = `0,${height} ${line} ${width},${height}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-16 w-full overflow-visible">
      {fill ? <polygon points={area} fill={color} opacity="0.12" /> : null}
      <polyline points={line} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PulseCard({
  title,
  value,
  sub,
  values,
  color,
  change,
}: {
  title: string;
  value: string;
  sub: string;
  values: Array<number | null>;
  color: string;
  change?: number | null;
}) {
  const hasChange = change !== undefined && change !== null && Number.isFinite(change);
  const changeText = hasChange ? `${change! > 0 ? '+' : ''}${(change! * 100).toFixed(1)}%` : null;
  return (
    <div className="glass-panel rounded-xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">{value}</p>
          <p className="mt-1 text-xs text-slate-500">{sub}</p>
        </div>
        {changeText ? (
          <span className={`text-xs font-semibold ${change! <= 0 ? 'text-red-300' : 'text-emerald-300'}`}>
            {changeText}
          </span>
        ) : null}
      </div>
      <div className="mt-4">
        <Sparkline values={values} color={color} />
      </div>
    </div>
  );
}

function DepthPulseCard({
  bidValues,
  askValues,
}: {
  bidValues: Array<number | null>;
  askValues: Array<number | null>;
}) {
  const bid = bidValues.at(-1) ?? null;
  const ask = askValues.at(-1) ?? null;
  const skew = bid && ask ? (ask - bid) / (ask + bid) : null;
  const bidShare = bid && ask ? Math.max(8, Math.min(92, (bid / (bid + ask)) * 100)) : 50;
  return (
    <div className="glass-panel rounded-xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">Bid vs Ask depth ±2%</p>
          <div className="mt-2 grid grid-cols-2 gap-5">
            <div>
              <p className="text-2xl font-semibold text-emerald-300">{fmtMoney(bid)}</p>
              <p className="mt-1 text-xs text-slate-500">bid depth</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-rose-300">{fmtMoney(ask)}</p>
              <p className="mt-1 text-xs text-slate-500">ask depth</p>
            </div>
          </div>
        </div>
        {skew !== null ? <span className="text-xs font-semibold text-rose-300">{skew >= 0 ? '+' : ''}{(skew * 100).toFixed(0)}% ask skew</span> : null}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <Sparkline values={bidValues} color="#34d399" />
        <Sparkline values={askValues} color="#fb7185" />
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full bg-emerald-400" style={{ width: `${bidShare}%`, float: 'left' }} />
        <div className="h-full bg-rose-400" />
      </div>
      <p className="mt-2 text-xs text-slate-500">inside tighter mid-price band · 60d</p>
    </div>
  );
}

function dailyRows(etf: AnyRecord): AnyRecord[] {
  const series = etf.daily_series || {};
  const dates = Array.isArray(series.trading_day) ? series.trading_day : [];
  return dates.map((date: string, index: number) => ({
    date,
    close: asNumber(series.close?.[index]),
    volume: asNumber(series.volume?.[index]),
    turnover: asNumber(series.turnover_hkd?.[index]),
    spread: asNumber(series.spread_bps_tw?.[index]),
    bidDepth: asNumber((series.bid_notional_band_2pct_tw || series.bid_notional_band_5pct_tw)?.[index]),
    askDepth: asNumber((series.ask_notional_band_2pct_tw || series.ask_notional_band_5pct_tw)?.[index]),
    bidDepth5: asNumber(series.bid_notional_band_5pct_tw?.[index]),
    askDepth5: asNumber(series.ask_notional_band_5pct_tw?.[index]),
  }));
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  pill,
  tone = 'info',
}: {
  icon: ElementType;
  title: string;
  subtitle: string;
  pill?: string;
  tone?: Tone;
}) {
  const cls = toneClasses[tone];
  return (
    <div className="rounded-2xl border border-border/60 bg-card/80 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${cls.bg} ${cls.text}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {pill ? (
          <span className={`inline-flex w-fit items-center rounded-full border ${cls.border} ${cls.bg} px-3 py-1 text-xs font-semibold ${cls.text}`}>
            {pill}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function KpiCard({ title, value, sub, tone = 'neutral' }: { title: string; value: string; sub: string; tone?: Tone }) {
  const cls = toneClasses[tone];
  return (
    <div className={`glass-panel rounded-xl border ${cls.border} p-4`}>
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
        <span className={`h-2 w-2 rounded-full ${cls.dot}`} />
        {title}
      </div>
      <p className={`mt-3 text-2xl font-semibold ${cls.text}`}>{value}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">{sub}</p>
    </div>
  );
}

function StatusPill({ label, tone = 'neutral' }: { label: string; tone?: Tone }) {
  const cls = toneClasses[tone];
  return (
    <span className={`inline-flex items-center rounded-full border ${cls.border} ${cls.bg} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${cls.text}`}>
      {label}
    </span>
  );
}

function OverviewMetricCard({
  title,
  value,
  suffix,
  sub,
  pill,
  tone = 'neutral',
  bar = 0,
}: {
  title: string;
  value: string;
  suffix: string;
  sub: string;
  pill: string;
  tone?: Tone;
  bar?: number;
}) {
  const cls = toneClasses[tone];
  return (
    <div className={`glass-panel rounded-xl border ${cls.border} p-5`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-xs uppercase tracking-wider text-slate-500">{title}</span>
        <StatusPill label={pill} tone={tone} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-bold ${cls.text}`}>{value}</span>
        <span className="text-lg text-slate-500">{suffix}</span>
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-800">
        <div className={`h-full rounded-full ${cls.dot}`} style={{ width: `${Math.max(0, Math.min(100, bar))}%` }} />
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-500">{sub}</p>
    </div>
  );
}

function OverviewInsightCard({
  icon: Icon,
  title,
  value,
  sub,
  note,
  pill,
  tone = 'neutral',
}: {
  icon: ElementType;
  title: string;
  value: string;
  sub: string;
  note: string;
  pill: string;
  tone?: Tone;
}) {
  return (
    <div className="glass-panel rounded-xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900/70">
            <Icon className="h-4 w-4 text-slate-400" />
          </div>
          <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
        </div>
        <StatusPill label={pill} tone={tone} />
      </div>
      <p className="mt-3 text-lg font-semibold leading-tight text-slate-100">{value}</p>
      <p className="mt-2 text-xs text-slate-500">{sub}</p>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">{note}</p>
    </div>
  );
}

function InfoCard({
  title,
  text,
  items,
  tone = 'neutral',
}: {
  title: string;
  text?: string;
  items?: string[];
  tone?: Tone;
}) {
  const cls = toneClasses[tone];
  return (
    <div className={`glass-panel rounded-xl border ${cls.border} p-5`}>
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      {text ? <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p> : null}
      {items?.length ? (
        <ul className="mt-3 space-y-2 text-sm text-slate-400">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${cls.dot}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function MiniTable({ headers, rows }: { headers: string[]; rows: Array<Array<string | number>> }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border/60">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-950/60 text-xs uppercase tracking-wider text-slate-500">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60 text-slate-300">
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${row[0]}-${cellIndex}`} className="px-3 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChartShell({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
      </div>
      <div className="h-80">{children}</div>
    </div>
  );
}

export function EtfOverview() {
  const etf = useEtfPayload();
  const meta = etf.meta || {};
  const headline = etf.headline || {};
  const w30 = etf.windows?.['30d'] || {};
  const narratives = etf.narratives || {};
  const latestDay = etf.extras?.latest_day || {};
  const short = etf.short_block || {};
  const personaPeriod = etf.etf_persona?.periods?.[etf.etf_persona?.primary_period] || {};
  const macroLatest = latest<AnyRecord>(etf.macro_regime?.regime_series) || {};
  const liquidityRegime = etf.regime_study?.current || {};
  const takeaways = Array.isArray(narratives.key_takeaways) ? narratives.key_takeaways.map(cleanNarrative) : [];
  const reportAsOf = meta.market_data_asof || meta.asof_date || meta.nav_date || 'N/A';
  const shortAsOf = meta.shortsell_data_through || reportAsOf;
  const liquidityAsOf = etf.regime_study?.asof || reportAsOf;
  const ds = etf.daily_series || {};
  const turnoverTail = tail<number | null>((ds.turnover_hkd || []).map(asNumber), 60);
  const spreadTail = tail<number | null>((ds.spread_bps_tw || []).map(asNumber), 60);
  const closeTail = tail<number | null>((ds.close || []).map(asNumber), 60);
  const bidDepthTail = tail<number | null>(((ds.bid_notional_band_2pct_tw || ds.bid_notional_band_5pct_tw) || []).map(asNumber), 60);
  const askDepthTail = tail<number | null>(((ds.ask_notional_band_2pct_tw || ds.ask_notional_band_5pct_tw) || []).map(asNumber), 60);
  const metricCards = [
    {
      title: 'Market-quality score',
      value: fmtNum(headline.score, 1),
      suffix: '/100',
      sub: `${headline.score_label || 'ETF'} · absolute market snapshot (peer-free, not vs other ETFs)`,
      pill: String(headline.score_label || 'ETF').toUpperCase(),
      tone: 'good' as Tone,
      bar: asNumber(headline.score) ?? 0,
    },
    {
      title: 'Trading Cost (Spread)',
      value: fmtNum(headline.spread_bps, 1),
      suffix: 'bps',
      sub: `Time-weighted (${w30.label || '30 days'}) · median ${fmtBps(w30.spread_bps_median)} · ~${fmtNum((asNumber(headline.spread_bps) ?? 0) / 100, 3)}% of mid`,
      pill: (asNumber(headline.spread_bps) ?? 99) < 10 ? 'TIGHT' : 'MODERATE',
      tone: ((asNumber(headline.spread_bps) ?? 99) < 10 ? 'good' : 'warn') as Tone,
      bar: Math.max(0, Math.min(100, 100 - ((asNumber(headline.spread_bps) ?? 0) - 1) * 2)),
    },
    {
      title: 'Average Traded Volume',
      value: fmtMoney(headline.adv_turnover_hkd).replace('HK$', ''),
      suffix: 'HKD',
      sub: `${fmtCount(headline.avg_trades_per_day)} avg trades/day · ADV in HKD`,
      pill: 'STRONG',
      tone: 'info' as Tone,
      bar: Math.min(100, ((asNumber(headline.adv_turnover_hkd) ?? 0) / 1e6) * 0.4),
    },
    {
      title: 'Displayed Depth',
      value: fmtMoney(headline.depth_band_5pct_avg_notional).replace('HK$', ''),
      suffix: 'HKD',
      sub: `Avg depth inside ±5% mid · ${(meta.market_makers || []).length || 0} designated MMs`,
      pill: 'DEEP',
      tone: 'good' as Tone,
      bar: Math.min(100, ((asNumber(headline.depth_band_5pct_avg_notional) ?? 0) / 1e6) * 0.25),
    },
  ];
  const overviewInsightCards = [
    {
      title: 'Short-volume overlay',
      value: fmtPct(short.avg_short_pct_30d),
      sub: `30d average · peak ${fmtPct(short.max_short_pct_30d)} · as of ${shortAsOf}`,
      note: `${short.pill_label || 'ETF short-volume overlay'}${short.trend_label ? `; ${short.trend_label}` : ''}. Read with spread, depth, and NAV context.`,
      icon: TrendingDown,
      tone: ((asNumber(short.avg_short_pct_30d) ?? 0) > 0.4 ? 'warn' : 'neutral') as Tone,
      pill: (asNumber(short.avg_short_pct_30d) ?? 0) > 0.4 ? 'Structural watch' : 'Context',
    },
    {
      title: 'Dominant by turnover',
      value: personaPeriod.dominant_by_turnover_label || 'N/A',
      sub: `${fmtPct(personaPeriod.dominant_by_turnover_share)} by turnover · ${personaPeriod.label || 'active window'} · as of ${reportAsOf}`,
      note: 'Largest value segment. Trade-count dominance can differ from turnover dominance.',
      icon: Users,
      tone: 'info' as Tone,
      pill: 'Value tape',
    },
    {
      title: 'Macro regime',
      value: macroLatest?.regime_label || 'N/A',
      sub: macroLatest?.date ? `Latest assignment · ${macroLatest.date}` : (etf.macro_regime?.sample_period || 'No assignment date'),
      note: 'Client-facing macro state for positioning and communication.',
      icon: Cpu,
      tone: (macroLatest?.regime_id === 3 ? 'bad' : macroLatest?.regime_id === 1 ? 'warn' : 'good') as Tone,
      pill: 'Macro state',
    },
    {
      title: 'Trading/liquidity regime',
      value: liquidityRegime.short_label || liquidityRegime.label || 'N/A',
      sub: `${liquidityRegime.label || 'Trading and liquidity regime'} · as of ${liquidityAsOf}`,
      note: liquidityRegime.description || 'Current market-quality state from spread, depth, turnover, and volatility.',
      icon: LineChartIcon,
      tone: (liquidityRegime.key === 'deep_tight_liquidity' ? 'good' : liquidityRegime.key === 'stress_repricing' ? 'bad' : 'warn') as Tone,
      pill: 'Market quality',
    },
  ];
  const quickStats = [
    { label: 'AUM', value: fmtMoney((asNumber(meta.aum_hkd_m) ?? 0) * 1e6), icon: DollarSign },
    { label: 'TER', value: `${fmtNum((asNumber(meta.ter) ?? 0) * 100, 2)}%`, icon: Gauge },
    { label: 'Yield (gross TTM)', value: fmtPct(meta.yield_gross_ttm_pct, 1), icon: Gift },
    { label: 'Daily Trades (30d)', value: fmtCount(headline.avg_trades_per_day), icon: Activity },
    { label: 'NAV (latest)', value: fmtNum(meta.nav_latest, 3), icon: DollarSign },
    { label: 'Premium (last vs NAV)', value: fmtSignedPct(meta.premium_vs_nav_frac, 2), icon: TrendingUp },
    { label: 'Vendor-published premium', value: `${(asNumber(meta.premium_etnet_percent) ?? 0) >= 0 ? '+' : ''}${fmtNum(meta.premium_etnet_percent, 2)}%`, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <section id="hero" className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">Executive Summary</span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {narratives.exec_subtitle || `${meta.name || '3416'} · ${(meta.market_makers || []).length || 0} designated MMs · AUM ${fmtMoney((asNumber(meta.aum_hkd_m) ?? 0) * 1e6)} · TER ${fmtNum((asNumber(meta.ter) ?? 0) * 100, 2)}%.`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <OverviewMetricCard key={card.title} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewInsightCards.map((card) => (
            <OverviewInsightCard key={card.title} {...card} />
          ))}
        </div>

        <div className="glass-panel rounded-xl border border-sky-500/20 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10">
              <Activity className="h-5 w-5 text-sky-400" />
            </div>
            <div className="flex-1">
              <h3 className="mb-3 text-sm font-semibold text-slate-100">Key Takeaways</h3>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {takeaways.map((item: string, index: number) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-medium text-slate-400">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="glass-panel rounded-xl p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <Clock className="h-4 w-4 text-sky-400" />
            Latest trading day
          </h3>
          <span className="text-xs text-slate-500">{latestDay.date || 'N/A'}</span>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-3 xl:grid-cols-6">
          {[
            ['Open', fmtNum(latestDay.open, 4)],
            ['High', fmtNum(latestDay.high, 4)],
            ['Low', fmtNum(latestDay.low, 4)],
            ['Close', fmtNum(latestDay.close, 4)],
            ['VWAP', fmtNum(latestDay.vwap, 4)],
            ['Spread (TW)', fmtBps(latestDay.spread_bps_tw)],
            ['Volume', `${fmtNum((asNumber(latestDay.volume) ?? 0) / 1e6, 1)}M`],
            ['Turnover', fmtMoney(latestDay.turnover_hkd)],
            ['Trades', fmtCount(latestDay.n_trades)],
            ['Auction share', fmtPct(latestDay.auction_share_pct)],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
              <p className={`mt-1 font-mono text-sm ${label === 'Close' ? 'text-emerald-300' : 'text-slate-100'}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">60-day pulse</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <PulseCard
            title="Daily turnover"
            value={fmtMoney(turnoverTail.at(-1))}
            sub="last 60 days"
            values={turnoverTail}
            color="#10b981"
            change={pctChange(turnoverTail)}
          />
          <PulseCard
            title="Median spread"
            value={fmtBps(spreadTail.at(-1), 1)}
            sub="last 60 days · bps"
            values={spreadTail}
            color="#38bdf8"
            change={pctChange(spreadTail)}
          />
          <DepthPulseCard bidValues={bidDepthTail} askValues={askDepthTail} />
          <PulseCard
            title="Close price"
            value={fmtNum(closeTail.at(-1), 3)}
            sub="last 60 days · HKD"
            values={closeTail}
            color="#34d399"
            change={pctChange(closeTail)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickStats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-panel flex items-center gap-3 rounded-xl p-4">
            <Icon className="h-4 w-4 text-slate-500" />
            <div>
              <p className="text-xs text-slate-500">{label}</p>
              <p className="text-sm font-semibold text-slate-100">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EtfLiquidityProfile() {
  const etf = useEtfPayload();
  const rows = dailyRows(etf);
  const rows180 = rows.slice(-180);
  const windows = ['30d', '90d', '180d', '365d'].map((key) => ({ key, ...(etf.windows?.[key] || {}) }));
  const narratives = etf.narratives || {};
  const w30 = etf.windows?.['30d'] || {};
  const score = w30.liquidity_score ?? etf.headline?.score;
  const stress = etf.extras?.stress_test || {};
  const stressScenarios = Array.isArray(stress.scenarios) ? stress.scenarios : [];
  const ob = etf.order_book_snapshot || {};
  const activeBand = ob.price_bands?.['5pct'] || {
    label: ob.price_band_label || '±5% from mid',
    bids: ob.band_bids || ob.bids || [],
    asks: ob.band_asks || ob.asks || [],
    n_bid_levels: ob.band_n_bid_levels,
    n_ask_levels: ob.band_n_ask_levels,
    total_bid_value_hkd: ob.band_total_bid_value_hkd,
    total_ask_value_hkd: ob.band_total_ask_value_hkd,
  };
  const bandBids = Array.isArray(activeBand.bids) ? activeBand.bids : [];
  const bandAsks = Array.isArray(activeBand.asks) ? activeBand.asks : [];
  const cumulativeRows = Array.from({ length: Math.max(bandBids.length, bandAsks.length) }).map((_, index) => {
    const bidCum = bandBids.slice(0, index + 1).reduce((sum: number, row: AnyRecord) => sum + (asNumber(row.value_hkd) ?? 0), 0);
    const askCum = bandAsks.slice(0, index + 1).reduce((sum: number, row: AnyRecord) => sum + (asNumber(row.value_hkd) ?? 0), 0);
    return { level: index + 1, bidCum, askCum };
  });
  const bandDepth = ((asNumber(w30.depth?.MID_5PCT?.bid_notional_hkd) ?? 0) + (asNumber(w30.depth?.MID_5PCT?.ask_notional_hkd) ?? 0)) / 2;
  const healthTiles = [
    { title: 'Market-quality score', value: fmtNum(score, 1), sub: etf.headline?.score_label || 'ETF market quality', tone: 'good' as Tone },
    { title: '30D Spread (TW)', value: fmtBps(w30.spread_bps_tw), sub: `Median ${fmtBps(w30.spread_bps_median)} · time-weighted`, tone: 'good' as Tone },
    { title: '30D ADV', value: fmtMoney(w30.adv_turnover_hkd), sub: `${fmtNum(w30.avg_trades_per_day, 0)} trades/day`, tone: 'good' as Tone },
    { title: '±5% band depth', value: fmtMoney(bandDepth), sub: '30D average inside mid-price band', tone: 'good' as Tone },
  ];

  return (
    <div className="space-y-8">
      <section id="liquidity" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={BarChart3}
        title="Liquidity Health"
        subtitle="Spread, quoted book depth, and the absolute market-quality score."
        pill={`MQ ${fmtNum(score, 1)} · ${etf.headline?.score_label || 'ETF'}`}
        tone="info"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {healthTiles.map((tileData) => (
          <KpiCard key={tileData.title} title={tileData.title} value={tileData.value} sub={tileData.sub} tone={tileData.tone} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <InfoCard title="Executive Take" text={cleanNarrative(narratives.liquidity_overall)} tone="good" />
        <InfoCard title="Spread Trend" text={cleanNarrative(narratives.spread_trend)} tone="info" />
        <InfoCard title="Depth Context" text={cleanNarrative(narratives.depth_text)} tone="good" />
      </div>

      <MiniTable
        headers={['Window', 'Spread', 'ADV', 'Annual vol', 'Mkt. qual.']}
        rows={windows.map((window) => [
          window.label || window.key,
          fmtBps(window.spread_bps_tw),
          fmtMoney(window.adv_turnover_hkd),
          fmtPct(window.realized_vol_annual),
          fmtNum(window.liquidity_score, 1),
        ])}
      />
      </section>

      <section id="execution" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Gauge}
        title="Trading Costs & Market Depth"
        subtitle={`Order book snapshot ${ob.trading_day || 'latest'}. Broad depth is measured inside ${activeBand.label || '±5% from mid'}, not fixed level count.`}
        pill={`${fmtBps(w30.spread_bps_tw)} avg · 30d`}
        tone="warn"
      />

      {stressScenarios.length ? (
        <div className="glass-panel rounded-xl p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-slate-100">Stress-test depth cover</h3>
            <span className="text-xs text-slate-500">vs 30D median top-5 depth ({fmtMoney(stress.median_top5_avg_notional_hkd)})</span>
          </div>
          <MiniTable
            headers={['Scenario', 'Notional', 'Top-5 cover', '% of top-5 depth']}
            rows={stressScenarios.map((scenario: AnyRecord) => [
              scenario.scenario,
              fmtMoney(scenario.notional_hkd),
              `${fmtNum(scenario.cover_x, 1)}x`,
              `${fmtNum(scenario.pct_of_top5_depth, 1)}%`,
            ])}
          />
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            A top-5 cover of 10x means median displayed depth at the top five price levels could notionally absorb about ten such clips in sequence absent replenishment. ETF market makers can also access the underlying basket via creation/redemption, so accessible liquidity can exceed the on-screen book.
          </p>
        </div>
      ) : null}

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <KpiCard title="Best bid / ask" value={`${fmtNum(ob.best_bid, 4)} / ${fmtNum(ob.best_ask, 4)}`} sub={`Spread ${fmtBps(ob.spread_bps)}`} tone="info" />
          <KpiCard title="Mid price" value={fmtNum(ob.mid, 4)} sub="Snapshot mid." tone="neutral" />
          <KpiCard title="±5% bid value" value={fmtMoney(activeBand.total_bid_value_hkd)} sub={`${fmtNum(activeBand.n_bid_levels, 0)} levels in band`} tone="good" />
          <KpiCard title="±5% ask value" value={fmtMoney(activeBand.total_ask_value_hkd)} sub={`${fmtNum(activeBand.n_ask_levels, 0)} levels in band`} tone="good" />
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <ChartShell title="Cumulative book inside ±5% band" subtitle={`Order book snapshot ${ob.trading_day || 'latest'} · ${activeBand.label || '±5% from mid'}.`}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cumulativeRows}>
                <CartesianGrid stroke="rgba(148,163,184,0.12)" />
                <XAxis dataKey="level" tick={{ fill: '#64748b', fontSize: 10 }} />
                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(v) => fmtMoney(v, 0)} />
                <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => fmtMoney(value)} />
                <Legend />
                <Line name="Bid cumulative" type="monotone" dataKey="bidCum" stroke="#22c55e" dot={false} strokeWidth={2} />
                <Line name="Ask cumulative" type="monotone" dataKey="askCum" stroke="#fb7185" dot={false} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartShell>

          <div className="glass-panel rounded-xl p-5 xl:col-span-2">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-slate-100">All snapshot levels inside band</h3>
              <p className="mt-1 text-xs text-slate-500">Scrollable list: {fmtNum(activeBand.n_bid_levels, 0)} bid levels and {fmtNum(activeBand.n_ask_levels, 0)} ask levels inside ±5%.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {[
                ['Bids', bandBids, 'text-emerald-300'],
                ['Asks', bandAsks, 'text-rose-300'],
              ].map(([side, levels, color]) => (
                <div key={String(side)}>
                  <p className="mb-2 text-xs text-slate-400">{String(side)}</p>
                  <div className="max-h-[300px] overflow-y-auto rounded-lg border border-slate-800/70 bg-slate-950/25">
                    <table className="w-full text-right text-xs">
                      <thead className="sticky top-0 bg-slate-950 text-[10px] uppercase text-slate-500">
                        <tr>
                          <th className="py-2 pl-2 text-left">Lvl</th>
                          <th className="py-2">Price</th>
                          <th className="py-2">Size</th>
                          <th className="py-2 pr-2">Notional</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(levels as AnyRecord[]).map((level) => (
                          <tr key={`${side}-${level.level}`} className="border-b border-slate-900">
                            <td className="py-1.5 pl-2 text-left text-slate-500">{level.level}</td>
                            <td className={`py-1.5 font-mono ${String(color)}`}>{fmtNum(level.price, 4)}</td>
                            <td className="py-1.5 font-mono text-slate-300">{fmtNum(level.size, 0)}</td>
                            <td className="py-1.5 pr-2 font-mono text-slate-400">{fmtMoney(level.value_hkd)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      <section id="daily-charts" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={LineChartIcon}
        title="Daily Charts"
        subtitle={`Full ${rows.length} days of ETF market quality.`}
        pill="time series"
        tone="info"
      />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <ChartShell title="Spread (bps, TW) and turnover (HKD)" subtitle={`Full ${rows.length} days of market quality.`}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows180}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
              <YAxis yAxisId="spread" tick={{ fill: '#38bdf8', fontSize: 10 }} />
              <YAxis yAxisId="turnover" orientation="right" tick={{ fill: '#f59e0b', fontSize: 10 }} tickFormatter={(v) => fmtMoney(v, 0)} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value, name) => name === 'Turnover' ? fmtMoney(value) : fmtBps(value)} />
              <Legend />
              <Line yAxisId="spread" name="Spread" type="monotone" dataKey="spread" stroke="#38bdf8" dot={false} strokeWidth={2} />
              <Line yAxisId="turnover" name="Turnover" type="monotone" dataKey="turnover" stroke="#f59e0b" dot={false} strokeWidth={1.5} />
            </LineChart>
          </ResponsiveContainer>
        </ChartShell>

        <ChartShell title="Close price (HKD)" subtitle="Daily ETF close price.">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows180}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => fmtNum(value, 3)} />
              <Legend />
              <Line name="Close" type="monotone" dataKey="close" stroke="#34d399" dot={false} strokeWidth={1.8} />
            </LineChart>
          </ResponsiveContainer>
        </ChartShell>

        <ChartShell title="Displayed depth — ±5% band, bid vs ask (HKD)" subtitle="Daily displayed liquidity inside the wider ETF price band.">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rows180}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(v) => fmtMoney(v, 0)} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => fmtMoney(value)} />
              <Legend />
              <Line name="Bid depth" type="monotone" dataKey="bidDepth5" stroke="#22c55e" dot={false} strokeWidth={1.6} />
              <Line name="Ask depth" type="monotone" dataKey="askDepth5" stroke="#fb7185" dot={false} strokeWidth={1.6} />
            </LineChart>
          </ResponsiveContainer>
        </ChartShell>

        <ChartShell title="Daily volume (shares)" subtitle="Daily traded share volume.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rows180}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(v) => `${(Number(v) / 1e6).toFixed(0)}M`} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => `${fmtNum((Number(value) || 0) / 1e6, 1)}M shares`} />
              <Bar name="Volume" dataKey="volume" fill="#38bdf8" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartShell>
      </div>
      </section>
    </div>
  );
}

export function EtfTradingActivity() {
  const etf = useEtfPayload();
  const persona = etf.etf_persona || {};
  const period = persona.periods?.[persona.primary_period] || {};
  const composition = Object.values(period.composition || {}) as AnyRecord[];
  const flow = etf.extras?.flow_signal_latest || {};
  const intradayBuckets = Array.isArray(etf.intraday_profile?.buckets) ? etf.intraday_profile.buckets : [];
  const overTime = Array.isArray(persona.over_time) ? persona.over_time : [];
  const trendRows = overTime.map((row: AnyRecord) => ({
    month: row.month,
    retail: (row.shares?.retail_sized?.turnover_share ?? 0) * 100,
    mixed: (row.shares?.mixed_tickets?.turnover_share ?? 0) * 100,
    stable: (row.shares?.institutional_stable?.turnover_share ?? 0) * 100,
    active: (row.shares?.institutional_active?.turnover_share ?? 0) * 100,
    unclassified: (row.shares?.unclassified?.turnover_share ?? 0) * 100,
  }));

  return (
    <div className="space-y-8">
      <section id="traders" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Users}
        title="Execution Segments"
        subtitle="Trade-size and turnover buckets for the ETF tape."
        pill={`${period.label || 'Active'} window`}
        tone="info"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {composition.map((bucket) => (
          <div key={bucket.key} className="glass-panel rounded-xl p-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: bucket.color || '#94a3b8' }} />
              <p className="text-sm font-medium text-slate-300">{bucket.label}</p>
            </div>
            <p className="mt-4 text-2xl font-semibold text-slate-100">{fmtPct(bucket.turnover_share)}</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              {fmtMoney(bucket.turnover_hkd)} · {fmtNum(bucket.runs, 0)} market orders · {fmtNum(bucket.prints, 0)} trades · {fmtMoney(bucket.avg_run_hkd)} avg market order
            </p>
          </div>
        ))}
      </div>
      </section>

      <section id="intraday" className="scroll-mt-44 space-y-6">
        <ChartShell title="Intraday Trading Pattern" subtitle="Average share of volume and trades by time bucket.">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={intradayBuckets}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={18} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => `${(Number(value) * 100).toFixed(1)}%`} />
              <Legend />
              <Bar name="Volume share" dataKey="avg_volume_share" fill="#38bdf8" />
              <Bar name="Trade share" dataKey="avg_trades_share" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </ChartShell>
      </section>

      <section id="persona-timing" className="scroll-mt-44 space-y-6">
        <ChartShell title="Execution Segment Mix Through Time" subtitle="Turnover share by ETF execution segment.">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendRows}>
              <CartesianGrid stroke="rgba(148,163,184,0.12)" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 10 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
              <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value) => `${Number(value).toFixed(1)}%`} />
              <Legend />
              <Area type="monotone" dataKey="retail" stackId="1" name="Retail-sized" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.55} />
              <Area type="monotone" dataKey="mixed" stackId="1" name="Mixed" stroke="#64748b" fill="#64748b" fillOpacity={0.55} />
              <Area type="monotone" dataKey="stable" stackId="1" name="Institutional stable" stroke="#34d399" fill="#34d399" fillOpacity={0.55} />
              <Area type="monotone" dataKey="active" stackId="1" name="Institutional active" stroke="#f97316" fill="#f97316" fillOpacity={0.55} />
              <Area type="monotone" dataKey="unclassified" stackId="1" name="Unclassified" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.45} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartShell>
      </section>

      <section id="flow" className="scroll-mt-44 space-y-6">
        <InfoCard
          title="Trade-Imbalance Flow Signal"
          text={`Latest flow is ${fmtPct(flow.buy_trigger_share)} buy-triggered versus ${fmtPct(flow.sell_trigger_share)} sell-triggered. The 30-day average net trigger is ${fmtPct(flow.avg_net_buy_trigger_share)}, so the current read is sell-leaning but should be judged alongside spread and depth.`}
          tone={asNumber(flow.net_buy_trigger_share) !== null && Number(flow.net_buy_trigger_share) < 0 ? 'warn' : 'good'}
        />
      </section>
    </div>
  );
}

export function EtfTradingLiquidityRegimes() {
  const etf = useEtfPayload();
  const regimeStudy = etf.regime_study || {};
  const current = regimeStudy.current || {};
  const regimes = Array.isArray(regimeStudy.regimes) ? regimeStudy.regimes : [];
  const timeline = Array.isArray(regimeStudy.timeline) ? regimeStudy.timeline.slice(-180) : [];

  return (
    <div className="space-y-8">
      <section id="regime-now" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={LineChartIcon}
        title="Trading & Liquidity Regime Analysis"
        subtitle="ETF trading-state map built from spread, turnover, displayed depth, volatility, flow skew, and short-volume overlay."
        pill={`${current.short_label || current.label || 'Current'} · ${regimeStudy.asof || 'latest'}`}
        tone={current.key === 'stress_repricing' ? 'bad' : current.key === 'deep_tight_liquidity' ? 'good' : 'warn'}
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="glass-panel rounded-xl p-5 xl:col-span-2">
          <p className="text-xs uppercase tracking-wider text-slate-500">Current inferred regime</p>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-4 w-4 rounded-full" style={{ backgroundColor: current.color || '#94a3b8' }} />
            <h3 className="text-3xl font-bold text-slate-100">{current.label || 'N/A'}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{current.description}</p>
          <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <p className="text-sm font-semibold text-cyan-100">Issuer-facing read</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{current.issuer_read}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <KpiCard title="Spread" value={fmtBps(current.spread_bps)} sub="Current time-weighted spread." tone="good" />
          <KpiCard title="L1 depth" value={fmtMoney(current.depth_l1_hkd)} sub="Two-sided displayed depth." tone="good" />
          <KpiCard title="Turnover" value={fmtMoney(current.turnover_hkd)} sub="Latest trading day." tone="info" />
          <KpiCard title="10D vol" value={fmtPct(current.rv_10d)} sub="Current realized volatility." tone="good" />
        </div>
      </div>
      </section>

      <section id="regime-map" className="scroll-mt-44 space-y-6">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        {regimes.map((regime: AnyRecord) => (
          <div key={regime.key} className="glass-panel rounded-xl border p-5" style={{ borderColor: `${regime.color || '#334155'}66` }}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: regime.color || '#94a3b8' }} />
                <h3 className="text-sm font-semibold text-slate-100">{regime.label}</h3>
              </div>
              <span className="text-sm text-slate-400">{fmtPct(regime.share_days, 0)}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{regime.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-slate-950/50 p-3"><p className="text-slate-500">Days</p><p className="mt-1 text-slate-100">{fmtNum(regime.n_days, 0)}</p></div>
              <div className="rounded-lg bg-slate-950/50 p-3"><p className="text-slate-500">Avg spread</p><p className="mt-1 text-slate-100">{fmtBps(regime.avg_spread_bps)}</p></div>
              <div className="rounded-lg bg-slate-950/50 p-3"><p className="text-slate-500">Turnover</p><p className="mt-1 text-slate-100">{fmtMoney(regime.avg_turnover_hkd)}</p></div>
              <div className="rounded-lg bg-slate-950/50 p-3"><p className="text-slate-500">10D vol</p><p className="mt-1 text-slate-100">{fmtPct(regime.avg_rv_10d)}</p></div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">{regime.issuer_read}</p>
          </div>
        ))}
      </div>

      <ChartShell title="Trading-Regime Quality Through Time" subtitle="Spread, turnover, and displayed depth across inferred ETF trading states.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={timeline}>
            <CartesianGrid stroke="rgba(148,163,184,0.12)" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
            <YAxis yAxisId="spread" tick={{ fill: '#38bdf8', fontSize: 10 }} />
            <YAxis yAxisId="turnover" orientation="right" tick={{ fill: '#f97316', fontSize: 10 }} tickFormatter={(v) => fmtMoney(v, 0)} />
            <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value, name) => String(name).includes('Turnover') ? fmtMoney(value) : fmtBps(value)} />
            <Legend />
            <Line yAxisId="spread" name="Spread" dataKey="spread_bps" stroke="#38bdf8" dot={false} strokeWidth={1.8} />
            <Line yAxisId="turnover" name="Turnover" dataKey="turnover_hkd" stroke="#f97316" dot={false} strokeWidth={1.4} />
          </LineChart>
        </ResponsiveContainer>
      </ChartShell>
      </section>
    </div>
  );
}

export function EtfMacroRegimePlaybook() {
  const etf = useEtfPayload();
  const macro = etf.macro_regime || {};
  const perfRows = Array.isArray(macro.regime_performance) ? macro.regime_performance : [];
  const series = Array.isArray(macro.regime_series) ? macro.regime_series : [];
  const normalized3416 = normalizeSeries(series, 'market_total_return');
  const normalizedHscei = normalizeSeries(series, 'hscei_index');
  const chartRows = series.map((row: AnyRecord, index: number) => ({
    date: row.date,
    hscei: normalizedHscei[index],
    regime: row.regime_label,
    regimeId: row.regime_id,
    rangeBound: Number(row.regime_id) === 0 ? normalized3416[index] : null,
    liquidity: Number(row.regime_id) === 1 ? normalized3416[index] : null,
    recovery: Number(row.regime_id) === 2 ? normalized3416[index] : null,
    stress: Number(row.regime_id) === 3 ? normalized3416[index] : null,
  }));
  const latestMacro = latest<AnyRecord>(series.filter((row: AnyRecord) => row.regime_label));
  const rowFor = (needle: string) => perfRows.find((row: AnyRecord) => String(row.empirical_label || '').toLowerCase() === needle.toLowerCase()) || {};
  const regimeDetails = [
    {
      label: 'Range-Bound Income Regime',
      tile: 'Range-Bound Income',
      fit: 'High',
      tone: 'good' as Tone,
      overview: 'Best alignment with covered-call income generation.',
      row: rowFor('Range-bound income regime'),
      defines: ['Sideways or gradually rising equities.', 'Available option premium.', 'Controlled realized volatility.', 'Limited RMB pressure.'],
      means: 'Best alignment between product design and market environment.',
      monitor: ['HSCEI trend', 'VHSI versus realized volatility', 'USD/CNH stability'],
      client: 'Income-oriented China equity exposure in a range-bound market.',
      avoid: 'Full downside protection.',
    },
    {
      label: 'RMB Strength / China Recovery',
      tile: 'RMB Strength / China Recovery',
      fit: 'Constructive',
      tone: 'info' as Tone,
      overview: 'Participates in recovery, but may lag sharp rallies.',
      row: rowFor('RMB strength / China recovery'),
      defines: ['RMB stable or strengthening.', 'China/Hong Kong equities recovering.', 'Volatility not in panic mode.', 'Risk sentiment improving.'],
      means: 'Positive participation in recovery, with possible relative lag if the rally is fast and one-directional.',
      monitor: ['USD/CNH direction', 'HSCEI and HSTECH recovery breadth', 'VHSI normalization', '3416 relative performance'],
      client: 'Participation in China recovery with income.',
      avoid: 'Will match HSCEI upside.',
    },
    {
      label: 'HKD Funding Shift / Liquidity Watch',
      tile: 'HKD Funding Shift / Liquidity Watch',
      fit: 'Monitoring',
      tone: 'warn' as Tone,
      overview: 'Focus on spreads, liquidity, premium/discount, and market-making conditions.',
      row: rowFor('Liquidity normalization / HKD funding shift'),
      defines: ['HIBOR moves sharply.', 'HKMA Aggregate Balance changes materially.', 'HKD liquidity conditions reset.', 'ETF microstructure becomes more important.'],
      means: 'Return signal may be mixed; trading quality and execution conditions matter more.',
      monitor: ['HIBOR', 'HKMA Aggregate Balance', 'ETF spreads', 'Premium/discount', 'Market-maker depth', 'Creations/redemptions'],
      client: 'Monitor trading quality and liquidity conditions.',
      avoid: 'This is a pure return opportunity.',
    },
    {
      label: 'Equity Drawdown / Volatility Stress',
      tile: 'Equity Drawdown / Volatility Stress',
      fit: 'Caution',
      tone: 'bad' as Tone,
      overview: 'Option income can cushion, but equity risk remains.',
      row: rowFor('Equity drawdown / volatility stress'),
      defines: ['HSCEI falls.', 'VHSI rises.', 'Realized volatility increases.', 'RMB pressure may rise.', 'Risk sentiment deteriorates.'],
      means: 'Option income can soften the impact, but broad equity stress can dominate returns.',
      monitor: ['HSCEI drawdown speed', 'VHSI and realized volatility spikes', 'USD/CNH stress', 'ETF discount and liquidity quality'],
      client: 'Option income can cushion, but equity risk remains.',
      avoid: 'Defensive product immune to selloffs.',
    },
  ];
  const playbookRows = [
    ['Range-Bound Income', 'High', 'Sideways or gradually rising market', 'Available premium with controlled realized volatility', 'Best alignment with income objective', 'Position as income-oriented China equity exposure', 'Income-oriented China equity exposure in a range-bound market'],
    ['RMB Strength / China Recovery', 'Constructive', 'Improving China/HK equity tone', 'Moderate, not panic-driven', 'Participates, but may lag sharp rallies', 'Explain recovery participation with income', 'Recovery participation with income'],
    ['HKD Funding Shift / Liquidity Watch', 'Monitoring', 'Equity signal can be mixed', 'Liquidity and funding quality matter', 'Trading quality more important than return forecast', 'Watch spreads, premium/discount, market-maker depth, creations/redemptions', 'Liquidity-aware positioning'],
    ['Equity Drawdown / Volatility Stress', 'Caution', 'Equities falling or risk sentiment deteriorating', 'High realized stress, not clean premium', 'Option income can cushion, but equity risk remains', 'Emphasize risk disclosure and equity exposure', 'Income cushion, not downside protection'],
  ];
  const signalGroups = [
    ['Equity direction', ['HSCEI trend', 'HSTECH tone', '3416 relative performance'], 'info' as Tone],
    ['Volatility quality', ['VHSI', 'Realized volatility', 'VRP proxy'], 'good' as Tone],
    ['RMB pressure', ['USD/CNH direction'], 'bad' as Tone],
    ['HKD liquidity', ['HIBOR', 'HKMA Aggregate Balance', 'ETF spreads', 'Premium/discount'], 'warn' as Tone],
  ];

  return (
    <div className="space-y-8">
      <section id="macro-summary" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Cpu}
        title="Regime Playbook Overview"
        subtitle="Four recurring market states for positioning, communication, and risk monitoring."
        pill={macro.sample_period || 'Macro sample'}
        tone="info"
      />

      <div className="glass-panel rounded-xl border border-cyan-500/20 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
            <Activity className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100">What the Regime Study Adds</h3>
            <p className="mt-2 max-w-5xl text-sm leading-relaxed text-slate-300">
              The macro regime framework separates the 3416 HK environment into four recurring market states. Each state has different implications for income generation, upside participation, downside exposure, and trading-quality monitoring. The objective is to use these regimes as a practical playbook for positioning, communication, and risk monitoring.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {regimeDetails.map((regime) => (
          <div key={regime.label} className={`glass-panel rounded-xl border ${toneClasses[regime.tone].border} p-4`}>
            <StatusPill label={`Product fit: ${regime.fit}`} tone={regime.tone} />
            <h3 className="mt-4 text-sm font-semibold text-slate-100">{regime.tile}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{regime.overview}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {regimeDetails.map((regime) => (
          <div key={regime.label} className={`glass-panel rounded-xl border ${toneClasses[regime.tone].border} p-5`}>
            <div className="flex items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${toneClasses[regime.tone].bg} ${toneClasses[regime.tone].text}`}>
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill label={`Product fit: ${regime.fit}`} tone={regime.tone} />
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">{fmtNum((regime.row as AnyRecord).number_of_days, 0)} days</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-100">{regime.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{regime.overview}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              <InfoCard title="What defines it" items={regime.defines} tone={regime.tone} />
              <InfoCard title="What to monitor" items={regime.monitor} tone={regime.tone} />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 text-sm leading-relaxed lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">What it means for 3416</p>
                <p className="mt-2 text-slate-300">{regime.means}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Best client message</p>
                <p className="mt-2 text-slate-300">{regime.client}</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message to avoid</p>
                <p className="mt-2 text-slate-300">{regime.avoid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ChartShell title="How 3416 Behaved Across the Four Market Regimes" subtitle="Interactive close-based total-return proxy indexed to 100, with HSCEI shown as context.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartRows}>
            <CartesianGrid stroke="rgba(148,163,184,0.12)" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={32} />
            <YAxis tick={{ fill: '#64748b', fontSize: 10 }} />
            <ChartTooltip
              contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }}
              formatter={(value, name) => [`${Number(value).toFixed(1)} indexed`, name]}
              labelFormatter={(label, payload) => `${label} · ${payload?.[0]?.payload?.regime || 'Regime'}`}
            />
            <Legend />
            <Line name="HSCEI context" type="monotone" dataKey="hscei" stroke="#94a3b8" strokeDasharray="4 4" dot={false} strokeWidth={1.2} />
            <Line name="Range-bound income" type="monotone" dataKey="rangeBound" stroke={macroColors[0]} dot={false} strokeWidth={2.1} connectNulls={false} />
            <Line name="HKD funding shift" type="monotone" dataKey="liquidity" stroke={macroColors[1]} dot={false} strokeWidth={2.1} connectNulls={false} />
            <Line name="RMB recovery" type="monotone" dataKey="recovery" stroke={macroColors[2]} dot={false} strokeWidth={2.1} connectNulls={false} />
            <Line name="Stress" type="monotone" dataKey="stress" stroke={macroColors[3]} dot={false} strokeWidth={2.1} connectNulls={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartShell>
      </section>

      <section id="macro-insights" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Activity}
        title="Actionable Regime Insights"
        subtitle="A simple translation of the regimes into product fit and client communication."
        pill="Playbook"
        tone="neutral"
      />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <InfoCard
          title="Not All Volatility Is Useful Volatility"
          text="For a covered-call ETF, higher implied volatility can support option income, but only when realized volatility remains controlled. The most attractive environment is available premium without disorderly market moves. When realized volatility rises sharply because of equity stress, high volatility becomes a risk signal rather than a clean income opportunity."
          tone="warn"
        />
        <InfoCard title="How to read the playbook" text="Use the regime map as a monitoring and communication tool, not as a precise daily return forecast. The same product can be income-friendly, recovery-oriented, liquidity-sensitive, or stress-exposed depending on the market backdrop." tone="info" />
      </div>

      <MiniTable
        headers={['Regime', 'Product fit', 'Market backdrop', 'Volatility quality', '3416 behavior', 'Issuer action', 'Client message']}
        rows={playbookRows}
      />
      </section>

      <section id="macro-monitoring" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Gauge}
        title="Actual Regime"
        subtitle="A practical checklist for identifying the current market state."
        pill={latestMacro?.date ? `Latest · ${latestMacro.date}` : 'Monitoring'}
        tone={latestMacro?.regime_id === 3 ? 'bad' : latestMacro?.regime_id === 1 ? 'warn' : 'info'}
      />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <InfoCard
          title="Latest Assigned Regime"
          text={latestMacro?.regime_label ? `The latest available assignment is ${latestMacro.regime_label}.` : 'No current regime assignment is available in the embedded data.'}
          tone={latestMacro?.regime_id === 3 ? 'bad' : latestMacro?.regime_id === 1 ? 'warn' : 'good'}
        />
        <InfoCard
          title="Current Regime Monitoring"
          items={[
            'Equity direction: HSCEI trend, HSTECH tone, and 3416 relative performance.',
            'Volatility quality: VHSI, realized volatility, and VRP proxy.',
            'RMB pressure: USD/CNH direction.',
            'HKD liquidity: HIBOR, HKMA Aggregate Balance, ETF spreads, and premium/discount.',
          ]}
          tone="info"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {signalGroups.map(([label, signals, tone]) => (
          <InfoCard key={String(label)} title={String(label)} items={signals as string[]} tone={tone as Tone} />
        ))}
      </div>
      <div className="glass-panel rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-100">Simple interpretation</h3>
        <div className="mt-4 grid grid-cols-1 gap-4 text-sm leading-relaxed text-slate-300 md:grid-cols-2">
          <p><span className="font-semibold text-emerald-300">Stable equity + available volatility</span> = income-friendly.</p>
          <p><span className="font-semibold text-sky-300">Fast equity rally</span> = positive but may create relative underperformance.</p>
          <p><span className="font-semibold text-red-300">RMB stress + falling equities</span> = caution.</p>
          <p><span className="font-semibold text-amber-300">HIBOR / Aggregate Balance shocks</span> = monitor trading quality.</p>
        </div>
      </div>
      </section>
    </div>
  );
}

export function EtfShortVolumeOverlay() {
  const etf = useEtfPayload();
  const short = etf.short_block || {};
  const rows = Array.isArray(short.series) ? short.series.slice(-120) : [];
  const peaks = Array.isArray(short.peaks) ? short.peaks.slice(0, 8) : [];

  return (
    <div className="space-y-8">
      <section id="short-overview" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={TrendingDown}
        title="Short Selling"
        subtitle="ETF short volume is interpreted as market-maker inventory and creation/redemption context, not standalone bearish sentiment."
        pill={short.pill_label || 'Short-volume overlay'}
        tone="warn"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="30D average" value={fmtPct(short.avg_short_pct_30d)} sub="Short value as share of turnover." tone="warn" />
        <KpiCard title="7D average" value={fmtPct(short.avg_short_pct_7d)} sub={short.trend_label || 'Latest short-volume trend.'} tone="warn" />
        <KpiCard title="30D peak" value={fmtPct(short.max_short_pct_30d)} sub="Peak short-volume share." tone="bad" />
        <KpiCard title="Return correlation" value={fmtNum(short.correlation_with_return, 3)} sub="Same-day return correlation." tone="neutral" />
      </div>
      </section>

      <section id="short-trend" className="scroll-mt-44 space-y-6">
      <ChartShell title="Short-Volume Share and Close Price" subtitle="Short-volume overlay should be read with price, spread, depth, and NAV context.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={rows}>
            <CartesianGrid stroke="rgba(148,163,184,0.12)" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} minTickGap={28} />
            <YAxis yAxisId="short" tick={{ fill: '#f59e0b', fontSize: 10 }} tickFormatter={(v) => `${(Number(v) * 100).toFixed(0)}%`} />
            <YAxis yAxisId="close" orientation="right" tick={{ fill: '#38bdf8', fontSize: 10 }} />
            <ChartTooltip contentStyle={{ background: '#0f172a', border: '1px solid #1e293b' }} formatter={(value, name) => name === 'Short share' ? fmtPct(value) : fmtNum(value, 3)} />
            <Legend />
            <Line yAxisId="short" name="Short share" type="monotone" dataKey="short_pct" stroke="#f59e0b" dot={false} strokeWidth={1.8} />
            <Line yAxisId="close" name="Close" type="monotone" dataKey="close" stroke="#38bdf8" dot={false} strokeWidth={1.4} />
          </LineChart>
        </ResponsiveContainer>
      </ChartShell>
      </section>

      <section id="short-peaks" className="scroll-mt-44 space-y-6">
      <MiniTable
        headers={['Date', 'Short share', 'Short value', 'Turnover', 'Close']}
        rows={peaks.map((row: AnyRecord) => [
          row.date,
          fmtPct(row.short_pct),
          fmtMoney(row.short_value_hkd),
          fmtMoney(row.turnover_hkd),
          fmtNum(row.close, 3),
        ])}
      />
      </section>
    </div>
  );
}

export function EtfProductNav() {
  const etf = useEtfPayload();
  const meta = etf.meta || {};
  const dividends = Array.isArray(etf.dividend_history) ? etf.dividend_history : [];
  const counters = Array.isArray(meta.counters) ? meta.counters : [];

  return (
    <div className="space-y-8">
      <section id="profile" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={BookOpen}
        title="ETF Profile"
        subtitle="Product metadata, strategy, market-maker coverage, and listed counters."
        pill={`${meta.trading_currency || 'HKD'} · ${meta.distribution || 'Monthly'}`}
        tone="info"
      />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <InfoCard title="Strategy" text={`${meta.strategy || 'Covered-call ETF'} linked to ${meta.underlying || 'HSCEI'} with ${meta.replication || 'physical'} replication.`} tone="info" />
        <InfoCard title="Market Makers" items={(meta.market_makers || []).map(String)} tone="good" />
        <InfoCard title="Listed Counters" items={counters.map((counter: AnyRecord) => `${counter.code} · ${counter.currency}`)} tone="neutral" />
      </div>
      </section>

      <section id="nav" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={DollarSign}
        title="NAV / AUM"
        subtitle="Latest NAV, market close versus NAV, AUM, and trailing distribution yield."
        pill={meta.nav_date || 'latest'}
        tone="good"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="AUM" value={fmtMoney((asNumber(meta.aum_hkd_m) ?? 0) * 1e6)} sub="Issuer snapshot." tone="good" />
        <KpiCard title="NAV latest" value={fmtNum(meta.nav_latest, 3)} sub={`NAV date ${meta.nav_date || 'N/A'}.`} tone="info" />
        <KpiCard title="Premium vs NAV" value={fmtSignedPct(meta.premium_vs_nav_frac, 2)} sub="Last close versus NAV snapshot." tone="neutral" />
        <KpiCard title="Gross TTM yield" value={fmtPct(meta.yield_gross_ttm_pct, 1)} sub={`${meta.ttm_distribution_payment_count || 0} payments.`} tone="good" />
      </div>
      </section>

      <section id="distributions" className="scroll-mt-44 space-y-6">
      <SectionHeader
        icon={Gift}
        title="Distributions"
        subtitle="Recent distribution history, ex-dates, and payable dates."
        pill={meta.distribution || 'Monthly'}
        tone="warn"
      />
      <MiniTable
        headers={['Announcement', 'Description', 'Amount', 'Ex-date', 'Payable']}
        rows={dividends.map((row: AnyRecord) => [
          row.announce_date,
          row.description,
          `${row.currency || ''} ${fmtNum(row.amount, 2)}`,
          row.ex_date,
          row.payable_date || 'N/A',
        ])}
      />
      </section>
    </div>
  );
}
