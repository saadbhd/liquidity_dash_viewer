import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Droplets, TrendingUp, Users } from 'lucide-react';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { formatCompactMoney, resolveReportCurrency } from '@/lib/currency';
import type { Q01PeerLiquidityRow, Q01PeriodData, Q01PeriodKey, ReportData } from '@/types/report';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';

const CANONICAL_ORDER: Q01PeriodKey[] = ['1d', '1w', '2w', '30d', '3m', '6m', 'max'];

const PERIOD_LABELS: Record<string, string> = {
  '1d': '1D',
  '1w': '1W',
  '2w': '2W',
  '30d': '1M',
  '3m': '3M',
  '6m': '6M',
  'max': 'MAX',
};

type MarketTabKey = 'returns' | 'adv' | 'spread_pct' | 'turnover_ratio' | 'trades' | 'volatility' | 'amihud';
type PeerDetailMetricKey = 'returns' | 'adv' | 'spread_pct' | 'turnover_ratio' | 'trades' | 'volatility' | 'amihud';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function formatSignedPct(value: number | null | undefined, digits = 2): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  const pct = value * 100;
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(digits)}%`;
}

function formatPct(value: number | null | undefined, digits = 2): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  return `${(value * 100).toFixed(digits)}%`;
}

function formatNumber(value: number | null | undefined, digits = 1): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  return value.toFixed(digits);
}

function formatCount(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toFixed(0);
}

function formatMoney(value: number | null | undefined, currency: string): string {
  return formatCompactMoney(value, currency);
}

function peerLabel(row: Q01PeerLiquidityRow): string {
  const ticker = String(row.ticker || '').trim();
  const label = String(row.label || row.company_name || '').trim();
  if (label && ticker && !label.includes(ticker)) return `${label} (${ticker})`;
  return label || ticker || 'N/A';
}

function normalizeReturn(value: number | null | undefined): number | null {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return Math.abs(value) > 1 ? value / 100 : value;
}

function toSafeText(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function toUsableNarrativeText(value: string | null | undefined): string | null {
  const safe = toSafeText(value);
  if (!safe) return null;
  if (/\b(?:secto|marke|pee)%/i.test(safe)) return null;
  return safe;
}

function relativeLabel(
  company: number | null | undefined,
  benchmark: number | null | undefined,
  direction: 'higher_is_better' | 'lower_is_better' = 'higher_is_better'
): string {
  if (company === null || company === undefined || !Number.isFinite(company)) return 'Not available';
  if (benchmark === null || benchmark === undefined || !Number.isFinite(benchmark)) return 'Not available';

  const base = Math.abs(benchmark) > 1e-12 ? Math.abs(benchmark) : 1;
  const relDiff = (company - benchmark) / base;
  if (Math.abs(relDiff) <= 0.1) return 'In line';

  const better = direction === 'higher_is_better' ? company > benchmark : company < benchmark;
  return better ? 'Better' : 'Worse';
}


type ComparisonOutcome = 'positive' | 'negative' | 'mixed' | 'neutral' | 'unavailable';

function joinLabels(labels: string[]): string {
  if (labels.length === 0) return '';
  if (labels.length === 1) return labels[0];
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`;
  return `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}`;
}

function buildComparisonCluster(
  company: number | null | undefined,
  benchmarks: Array<{ label: string; value: number | null | undefined }>,
  direction: 'higher_is_better' | 'lower_is_better'
): { outcome: ComparisonOutcome; phrase: string } {
  const better: string[] = [];
  const worse: string[] = [];
  const inLine: string[] = [];

  benchmarks.forEach(({ label, value }) => {
    const verdict = relativeLabel(company, value, direction);
    if (verdict === 'Better') better.push(label);
    else if (verdict === 'Worse') worse.push(label);
    else if (verdict === 'In line') inLine.push(label);
  });

  if (better.length > 0 && worse.length === 0) {
    return { outcome: 'positive', phrase: `better than ${joinLabels(better)}` };
  }
  if (worse.length > 0 && better.length === 0) {
    return { outcome: 'negative', phrase: `worse than ${joinLabels(worse)}` };
  }
  if (better.length > 0 && worse.length > 0) {
    return { outcome: 'mixed', phrase: `better than ${joinLabels(better)}, but worse than ${joinLabels(worse)}` };
  }
  if (inLine.length > 0) {
    return { outcome: 'neutral', phrase: `broadly in line with ${joinLabels(inLine)}` };
  }
  return { outcome: 'unavailable', phrase: 'comparison unavailable' };
}

function buildComparatorText(
  company: number | null | undefined,
  benchmark: number | null | undefined,
  label: string,
  direction: 'higher_is_better' | 'lower_is_better',
  format: (value: number | null | undefined) => string
): string | null {
  const verdict = relativeLabel(company, benchmark, direction);
  if (verdict === 'Not available') return null;
  const prefix = verdict === 'In line' ? 'In line with' : verdict === 'Better' ? 'Better than' : 'Worse than';
  return `${prefix} ${label}: ${format(company)} vs ${label.toLowerCase()} ${format(benchmark)}.`;
}

function buildMetricMeaning(metricKey: MarketTabKey, outcome: ComparisonOutcome): string {
  const meaning: Record<MarketTabKey, Record<ComparisonOutcome, string>> = {
    returns: {
      positive: 'points to stronger price performance than comparable names',
      negative: 'points to weaker price performance than comparable names',
      mixed: 'shows price performance is mixed across comparison groups',
      neutral: 'suggests price performance is broadly in line with comparison groups',
      unavailable: 'leaves the relative performance read incomplete',
    },
    adv: {
      positive: 'supports stronger day-to-day trading size than comparable names',
      negative: 'points to smaller day-to-day trading size than comparable names',
      mixed: 'shows trading size is uneven across comparison groups',
      neutral: 'suggests day-to-day trading size is broadly typical for the group',
      unavailable: 'leaves the trading-size comparison incomplete',
    },
    spread_pct: {
      positive: 'keeps trading costs more competitive than comparable names',
      negative: 'suggests trading costs are heavier than comparable names',
      mixed: 'shows execution cost is mixed across comparison groups',
      neutral: 'suggests trading costs are broadly in line with the group',
      unavailable: 'leaves the cost comparison incomplete',
    },
    turnover_ratio: {
      positive: 'shows a more active free-float turnover profile than comparable names',
      negative: 'shows a lighter free-float turnover profile than comparable names',
      mixed: 'shows turnover is mixed across comparison groups',
      neutral: 'suggests turnover is broadly typical for the group',
      unavailable: 'leaves the turnover comparison incomplete',
    },
    trades: {
      positive: 'supports more dependable day-to-day activity than comparable names',
      negative: 'suggests activity is thinner than comparable names',
      mixed: 'shows trading frequency is mixed across comparison groups',
      neutral: 'suggests trading frequency is broadly typical for the group',
      unavailable: 'leaves the trading-frequency comparison incomplete',
    },
    volatility: {
      positive: 'suggests day-to-day price swings are more contained than comparable names',
      negative: 'suggests day-to-day price swings are heavier than comparable names',
      mixed: 'shows price variability is mixed across comparison groups',
      neutral: 'suggests price variability is broadly in line with the group',
      unavailable: 'leaves the volatility comparison incomplete',
    },
    amihud: {
      positive: 'suggests trades move price less than comparable names',
      negative: 'suggests trades move price more than comparable names',
      mixed: 'shows price impact is mixed across comparison groups',
      neutral: 'suggests price impact is broadly in line with the group',
      unavailable: 'leaves the price-impact comparison incomplete',
    },
  };

  return meaning[metricKey][outcome];
}

function buildLegacyQ01(report: ReportData): Q01PeriodData {
  const { series, meta } = report;
  const seriesPeerTickers = series.peers_liquidity.tickers ?? series.peers_liquidity.labels;
  const targetIdx = series.peers_liquidity.is_target.findIndex(Boolean);
  const effectiveTargetIdx =
    targetIdx >= 0 ? targetIdx : seriesPeerTickers.findIndex((t) => t === meta.ticker);

  const targetScore = effectiveTargetIdx >= 0 ? series.peers_liquidity.scores[effectiveTargetIdx] : 0;
  const targetAdv = effectiveTargetIdx >= 0 ? series.peers_liquidity.adv[effectiveTargetIdx] : series.market_comparison.company.adv;
  const oneMonthReturn = series.returns?.find((r) => r.horizon === '1M') ?? series.returns?.[0];

  return {
    label: '30D',
    window_days: 30,
    liquidity: {
      metric_aggregation: 'median',
      metric_window_days: 30,
      score_pca: targetScore,
      score_pca_percentile: targetScore,
      rank_pca: 0,
      total: series.peers_liquidity.total,
      adv_notional_sgd: targetAdv ?? 0,
      adv_volume_shares: 0,
      free_float_shares: null,
      turnover_ratio: series.market_comparison.company.turnover_ratio ?? null,
      votes: null,
      trades: series.market_comparison.company.trades ?? null,
      spread_pct: series.market_comparison.company.spread_pct ?? null,
      spread_ticks: null,
      amihud: series.market_comparison.company.amihud ?? null,
      volatility: series.market_comparison.company.volatility ?? null,
    },
    pca: {
      valid: false,
      window_days: 30,
      variance_explained: null,
      loadings: {},
    },
    data_quality: {},
    peer_summary: {
      n_peers: Math.max(0, series.peers_liquidity.labels.length - 1),
      peer_median_adv: series.market_comparison.peers.adv.median,
      peer_median_score_pca: null,
      peer_median_trades: series.market_comparison.peers.trades.median,
      peer_median_volatility: series.market_comparison.peers.volatility?.median ?? null,
      peer_median_spread_pct: series.market_comparison.peers.spread_pct.median,
      peer_median_amihud: series.market_comparison.peers.amihud?.median ?? null,
      peer_median_turnover_ratio: series.market_comparison.peers.turnover_ratio.median,
      target_vs_peer: {},
    },
    peer_liquidity: series.peers_liquidity.labels.map((label, idx) => {
      const ticker = seriesPeerTickers[idx] ?? label;
      return {
        ticker,
        label,
        score_pca: series.peers_liquidity.scores[idx] ?? 0,
        rank_pca: idx + 1,
        adv: series.peers_liquidity.adv[idx] ?? 0,
        trades: null,
        volatility: null,
        spread_pct: null,
        spread_ticks: null,
        amihud: null,
        turnover_ratio: null,
        is_target: series.peers_liquidity.is_target[idx] ?? ticker === meta.ticker,
      };
    }),
    market_comparison: {
      sector_name: series.market_comparison.sector_name,
      sector_count: series.market_comparison.sector_count,
      market_count: series.market_comparison.market_count,
      market: series.market_comparison.market,
      sector: series.market_comparison.sector,
      peers: series.market_comparison.peers,
      returns: {
        window_days: 30,
        n_obs: 0,
        stock: normalizeReturn(oneMonthReturn?.stock),
        market: normalizeReturn(oneMonthReturn?.market),
        sector: normalizeReturn(oneMonthReturn?.sector),
        peers: normalizeReturn(oneMonthReturn?.peers),
        vs_market:
          normalizeReturn(oneMonthReturn?.stock) !== null && normalizeReturn(oneMonthReturn?.market) !== null
            ? (normalizeReturn(oneMonthReturn?.stock) as number) - (normalizeReturn(oneMonthReturn?.market) as number)
            : null,
        vs_sector:
          normalizeReturn(oneMonthReturn?.stock) !== null && normalizeReturn(oneMonthReturn?.sector) !== null
            ? (normalizeReturn(oneMonthReturn?.stock) as number) - (normalizeReturn(oneMonthReturn?.sector) as number)
            : null,
        vs_peers:
          normalizeReturn(oneMonthReturn?.stock) !== null && normalizeReturn(oneMonthReturn?.peers) !== null
            ? (normalizeReturn(oneMonthReturn?.stock) as number) - (normalizeReturn(oneMonthReturn?.peers) as number)
            : null,
      },
    },
  };
}

function getQ01Periods(report: ReportData): {
  periods: Partial<Record<Q01PeriodKey, Q01PeriodData>>;
  availableKeys: Q01PeriodKey[];
  primaryKey: Q01PeriodKey;
  legacyFallback: boolean;
} {
  if (report.q01?.periods) {
    const allPeriodKeys = Object.keys(report.q01.periods) as Q01PeriodKey[];
    const availableKeys = CANONICAL_ORDER.filter((key) => allPeriodKeys.includes(key))
      .concat(allPeriodKeys.filter((key) => !CANONICAL_ORDER.includes(key)));
    if (availableKeys.length > 0) {
      const preferred = report.q01.primary_liquidity_period;
      return {
        periods: report.q01.periods,
        availableKeys,
        primaryKey: availableKeys.includes(preferred) ? preferred : availableKeys[0],
        legacyFallback: false,
      };
    }
  }

  return {
    periods: { '30d': buildLegacyQ01(report) },
    availableKeys: ['30d'],
    primaryKey: '30d',
    legacyFallback: true,
  };
}

export function LiquidityScore() {
  const report = useReport();
  const chartTheme = useChartTheme();
  const reportCurrency = resolveReportCurrency(report);

  const q01View = useMemo(() => getQ01Periods(report), [report]);
  const [activePeriod, setActivePeriod] = useState<Q01PeriodKey>(q01View.primaryKey);
  const [activeMarketTab, setActiveMarketTab] = useState<MarketTabKey>('adv');
  const [activePeerMetric, setActivePeerMetric] = useState<PeerDetailMetricKey>('adv');
  const availableSignature = q01View.availableKeys.join('|');

  useEffect(() => {
    if (!q01View.availableKeys.includes(activePeriod)) {
      setActivePeriod(q01View.primaryKey);
    }
  }, [activePeriod, q01View.primaryKey, availableSignature]);

  const period = q01View.periods[activePeriod];
  if (!period) return null;

  const marketComparison = period.market_comparison ?? {
    sector_name: 'N/A',
    sector_count: 0,
    market_count: 0,
    market: {},
    sector: {},
    peers: {},
    returns: {
      window_days: period.window_days ?? 0,
      n_obs: 0,
      stock: null,
      market: null,
      sector: null,
      peers: null,
      vs_market: null,
      vs_sector: null,
      vs_peers: null,
    },
  };

  const marketReturns = marketComparison.returns ?? {
    window_days: period.window_days ?? 0,
    n_obs: 0,
    stock: null,
    market: null,
    sector: null,
    peers: null,
    vs_market: null,
    vs_sector: null,
    vs_peers: null,
  };

  const scorePca = Number.isFinite(period.liquidity?.score_pca) ? period.liquidity.score_pca : 0;
  const scorePcaPercentile = Number.isFinite(period.liquidity?.score_pca_percentile)
    ? period.liquidity.score_pca_percentile
    : 0;
  const rankPca = Number.isFinite(period.liquidity?.rank_pca) ? period.liquidity.rank_pca : 0;
  const totalPca = Number.isFinite(period.liquidity?.total) ? period.liquidity.total : 0;
  const liquidityTitle = String(report.labels.liq_title || '').trim() || 'Liquidity Health & Peer Comparison';
  const liquiditySubtitle = String(report.labels.liq_subtitle || '').trim();
  const selectedWindowLabel = `Window: ${period.window_days}D`;

  const peerNameByTicker = new Map(
    (report.peer_methodology?.peers ?? [])
      .map((peer) => [String(peer.ticker || '').trim(), String(peer.name || '').trim()] as const)
      .filter(([ticker, name]) => ticker && name),
  );

  const formatPeerLabel = (ticker: string, companyName?: string | null) => {
    const cleanTicker = String(ticker || '').trim();
    const cleanName = String(companyName || '').trim();
    if (cleanName && cleanTicker) return `${cleanName} (${cleanTicker})`;
    return cleanName || cleanTicker;
  };

  const peerRows = period.peer_liquidity ?? [];
  const targetPeer = peerRows.find((row) => row.is_target) ?? peerRows.find((row) => row.ticker === report.meta.ticker);
  const peerChartData = peerRows.map((row) => {
    const fallbackLabel = formatPeerLabel(row.ticker, row.company_name || peerNameByTicker.get(row.ticker));
    const label = String(row.label || fallbackLabel || '').trim();
    return {
      ticker: row.ticker,
      label: label || row.ticker,
      score: row.score_pca,
      adv: row.adv,
      isTarget: row.is_target || row.ticker === report.meta.ticker,
    };
  });

  const marketMetricRows = [
    {
      key: 'adv',
      tabLabel: 'Volume',
      label: 'ADV (Notional)',
      direction: 'higher_is_better' as const,
      company: period.liquidity.adv_notional_sgd,
      market: marketComparison.market.adv,
      sector: marketComparison.sector.adv,
      peers: marketComparison.peers.adv,
      format: (v: number | null | undefined) => formatMoney(v, reportCurrency),
    },
    {
      key: 'spread_pct',
      tabLabel: 'Spread',
      label: 'Spread',
      direction: 'lower_is_better' as const,
      company: period.liquidity.spread_pct,
      market: marketComparison.market.spread_pct,
      sector: marketComparison.sector.spread_pct,
      peers: marketComparison.peers.spread_pct,
      format: formatPct,
    },
    {
      key: 'turnover_ratio',
      tabLabel: 'Turnover',
      label: 'Turnover Ratio',
      direction: 'higher_is_better' as const,
      company: period.liquidity.turnover_ratio,
      market: marketComparison.market.turnover_ratio,
      sector: marketComparison.sector.turnover_ratio,
      peers: marketComparison.peers.turnover_ratio,
      format: formatPct,
    },
    {
      key: 'trades',
      tabLabel: 'Trades',
      label: 'Trades',
      direction: 'higher_is_better' as const,
      company: period.liquidity.trades,
      market: marketComparison.market.trades,
      sector: marketComparison.sector.trades,
      peers: marketComparison.peers.trades,
      format: formatCount,
    },
    {
      key: 'volatility',
      tabLabel: 'Volatility',
      label: 'Volatility',
      direction: 'lower_is_better' as const,
      company: period.liquidity.volatility,
      market: marketComparison.market.volatility,
      sector: marketComparison.sector.volatility,
      peers: marketComparison.peers.volatility,
      format: formatPct,
    },
    {
      key: 'amihud',
      tabLabel: 'Price Impact',
      label: 'Price Impact',
      direction: 'lower_is_better' as const,
      company: period.liquidity.amihud,
      market: marketComparison.market.amihud,
      sector: marketComparison.sector.amihud,
      peers: marketComparison.peers.amihud,
      format: (v: number | null | undefined) =>
        v === null || v === undefined || !Number.isFinite(v) ? 'N/A' : v.toExponential(2),
    },
  ] as const satisfies Array<{
    key: Exclude<MarketTabKey, 'returns'>;
    tabLabel: string;
    label: string;
    direction: 'higher_is_better' | 'lower_is_better';
    company: number | null | undefined;
    market?: { min: number; max: number; median: number };
    sector?: { median: number };
    peers?: { median: number };
    format: (v: number | null | undefined) => string;
  }>;

  const selectedMetric = marketMetricRows.find((m) => m.key === activeMarketTab);
  const peerAnalysisEnabled = Boolean(report.peer_analysis?.enabled);
  const peerAnalysisPeriod = report.peer_analysis?.periods?.[activePeriod];
  const peerDetailRows = peerAnalysisEnabled
    ? (peerAnalysisPeriod?.market_comparison?.metric_rows ?? peerAnalysisPeriod?.liquidity?.rows ?? [])
    : [];
  const peerReturnRows = peerAnalysisEnabled
    ? (peerAnalysisPeriod?.market_comparison?.returns?.peer_rows ?? [])
    : [];
  const peerReturnByTicker = new Map(
    peerReturnRows
      .map((row) => [String(row.ticker ?? row.stock_code ?? '').trim(), row.return] as const)
      .filter(([ticker]) => ticker.length > 0),
  );
  const peerDetailMetricSpecs = [
    {
      key: 'returns',
      tabLabel: 'Returns',
      chartLabel: 'Returns',
      direction: 'higher_is_better' as const,
      signed: true,
      value: (row: Q01PeerLiquidityRow) => peerReturnByTicker.get(String(row.ticker || '').trim()),
      format: formatSignedPct,
    },
    {
      key: 'adv',
      tabLabel: 'Volume',
      chartLabel: 'ADV (Notional)',
      direction: 'higher_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.adv,
      format: (value: number | null | undefined) => formatMoney(value, reportCurrency),
    },
    {
      key: 'spread_pct',
      tabLabel: 'Spread',
      chartLabel: 'Spread',
      direction: 'lower_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.spread_pct,
      format: formatPct,
    },
    {
      key: 'turnover_ratio',
      tabLabel: 'Turnover',
      chartLabel: 'Turnover',
      direction: 'higher_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.turnover_ratio,
      format: formatPct,
    },
    {
      key: 'trades',
      tabLabel: 'Trades',
      chartLabel: 'Trades',
      direction: 'higher_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.trades,
      format: formatCount,
    },
    {
      key: 'volatility',
      tabLabel: 'Volatility',
      chartLabel: 'Volatility',
      direction: 'lower_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.volatility,
      format: formatPct,
    },
    {
      key: 'amihud',
      tabLabel: 'Price Impact',
      chartLabel: 'Price Impact',
      direction: 'lower_is_better' as const,
      signed: false,
      value: (row: Q01PeerLiquidityRow) => row.amihud,
      format: (value: number | null | undefined) =>
        value === null || value === undefined || !Number.isFinite(value) ? 'N/A' : value.toExponential(2),
    },
  ] as const satisfies Array<{
    key: PeerDetailMetricKey;
    tabLabel: string;
    chartLabel: string;
    direction: 'higher_is_better' | 'lower_is_better';
    signed: boolean;
    value: (row: Q01PeerLiquidityRow) => number | null | undefined;
    format: (value: number | null | undefined) => string;
  }>;
  const selectedPeerMetric = peerDetailMetricSpecs.find((metric) => metric.key === activePeerMetric) ?? peerDetailMetricSpecs[0];
  const selectedPeerRows = peerDetailRows
    .map((row) => {
      const ticker = String(row.ticker || '').trim();
      const value = selectedPeerMetric.value(row);
      return {
        ticker,
        label: peerLabel(row),
        value,
        formatted: selectedPeerMetric.format(value),
        isTarget: Boolean(row.is_target || ticker === report.meta.ticker),
      };
    })
    .filter((row) => row.value !== null && row.value !== undefined && Number.isFinite(row.value));
  const selectedPeerValues = selectedPeerRows.map((row) => row.value as number);
  const selectedPeerMin = selectedPeerMetric.signed && selectedPeerValues.length > 0 ? Math.min(0, ...selectedPeerValues) : 0;
  const selectedPeerMax = selectedPeerMetric.signed && selectedPeerValues.length > 0
    ? Math.max(0, ...selectedPeerValues)
    : selectedPeerValues.length > 0
      ? Math.max(...selectedPeerValues.map((value) => Math.abs(value)), 1e-12)
      : 1;
  const selectedPeerSpan = selectedPeerMetric.signed
    ? Math.max(selectedPeerMax - selectedPeerMin, 1e-12)
    : Math.max(selectedPeerMax, 1e-12);
  const selectedPeerZeroPct = selectedPeerMetric.signed ? ((0 - selectedPeerMin) / selectedPeerSpan) * 100 : 0;
  const metricMin = selectedMetric?.market?.min ?? 0;
  const metricMax = selectedMetric?.market?.max ?? 1;
  const toPos = (value: number | null | undefined) => {
    if (value === null || value === undefined || !Number.isFinite(value)) return null;
    if (metricMax === metricMin) return 50;
    const pct = ((value - metricMin) / (metricMax - metricMin)) * 100;
    return Math.max(0, Math.min(100, pct));
  };

  const metricMarkers = selectedMetric
    ? [
      { key: 'stock', label: 'Stock', value: selectedMetric.company, pos: toPos(selectedMetric.company), cls: 'bg-sky-500' },
      {
        key: 'peers',
        label: 'Peers median',
        value: selectedMetric.peers?.median,
        pos: toPos(selectedMetric.peers?.median),
        cls: 'bg-amber-500',
      },
      {
        key: 'sector',
        label: 'Sector median',
        value: selectedMetric.sector?.median,
        pos: toPos(selectedMetric.sector?.median),
        cls: 'bg-teal-500',
      },
      {
        key: 'market',
        label: 'Market median',
        value: selectedMetric.market?.median,
        pos: toPos(selectedMetric.market?.median),
        cls: 'bg-purple-500',
      },
    ]
    : [];

  const useNarrativeInsights = activePeriod === q01View.primaryKey;
  const periodInsights = report.q01?.period_insights?.[activePeriod];
  const liquidityOverviewFallback = `Liquidity score ${formatNumber(period.liquidity.score_pca_percentile, 1)} (${period.liquidity.rank_pca}/${period.liquidity.total}), ADV ${formatMoney(
    period.liquidity.adv_notional_sgd,
    reportCurrency
  )}, spread ${formatPct(period.liquidity.spread_pct)}, trades ${formatCount(period.liquidity.trades)} for ${period.window_days}D.`;
  const liquidityOverviewInsight =
    toSafeText(periodInsights?.liquidity) ??
    (useNarrativeInsights ? toSafeText(report.content.liq_insight) ?? toSafeText(report.insights?.liquidity?.overall) : null) ??
    liquidityOverviewFallback;

  const staticMarketInsights = {
    returns: report.insights?.market_comparison?.returns,
    adv: report.insights?.market_comparison?.adv,
    spread_pct: report.insights?.market_comparison?.spread,
    turnover_ratio: report.insights?.market_comparison?.turnover_ratio,
    trades: report.insights?.market_comparison?.trades,
    volatility: report.insights?.market_comparison?.volatility,
    amihud: report.insights?.market_comparison?.amihud,
  } as const;

  const returnsCluster = buildComparisonCluster(
    marketReturns.stock,
    [
      { label: 'market', value: marketReturns.market },
      { label: 'sector', value: marketReturns.sector },
      { label: 'peers', value: marketReturns.peers },
    ],
    'higher_is_better'
  );
  const returnsFallbackSummary =
    marketReturns.stock !== null && marketReturns.stock !== undefined && Number.isFinite(marketReturns.stock)
      ? `${PERIOD_LABELS[activePeriod] ?? activePeriod.toUpperCase()} return is ${formatSignedPct(marketReturns.stock)}, ${returnsCluster.phrase}, which ${buildMetricMeaning(
        'returns',
        returnsCluster.outcome
      )}.`
      : null;
  const returnsFallbackVsMarket = buildComparatorText(
    marketReturns.stock,
    marketReturns.market,
    'Market',
    'higher_is_better',
    (value) => formatSignedPct(value)
  );
  const returnsFallbackVsSector = buildComparatorText(
    marketReturns.stock,
    marketReturns.sector,
    'Sector',
    'higher_is_better',
    (value) => formatSignedPct(value)
  );
  const returnsFallbackVsPeers = buildComparatorText(
    marketReturns.stock,
    marketReturns.peers,
    'Peers',
    'higher_is_better',
    (value) => formatSignedPct(value)
  );

  const metricInsight = useNarrativeInsights && selectedMetric
    ? staticMarketInsights[selectedMetric.key]
    : undefined;
  const metricCluster = selectedMetric
    ? buildComparisonCluster(
      selectedMetric.company,
      [
        { label: 'market', value: selectedMetric.market?.median },
        { label: 'sector', value: selectedMetric.sector?.median },
        { label: 'peers', value: selectedMetric.peers?.median },
      ],
      selectedMetric.direction
    )
    : null;

  const metricFallbackSummary = selectedMetric
    ? selectedMetric.company !== null && selectedMetric.company !== undefined && Number.isFinite(selectedMetric.company)
      ? `${selectedMetric.label} is ${selectedMetric.format(selectedMetric.company)}, ${metricCluster?.phrase ?? 'comparison unavailable'}, which ${buildMetricMeaning(
        selectedMetric.key,
        metricCluster?.outcome ?? 'unavailable'
      )}.`
      : `${selectedMetric.label} is not available for this period.`
    : null;

  const metricFallbackVsMarket = selectedMetric
    ? buildComparatorText(
      selectedMetric.company,
      selectedMetric.market?.median,
      'Market',
      selectedMetric.direction,
      selectedMetric.format
    )
    : null;

  const metricFallbackVsSector = selectedMetric
    ? buildComparatorText(
      selectedMetric.company,
      selectedMetric.sector?.median,
      'Sector',
      selectedMetric.direction,
      selectedMetric.format
    )
    : null;

  const metricFallbackVsPeers = selectedMetric
    ? buildComparatorText(
      selectedMetric.company,
      selectedMetric.peers?.median,
      'Peers',
      selectedMetric.direction,
      selectedMetric.format
    )
    : null;

  const returnsMarkers = [
    { key: 'stock', label: 'Stock', value: marketReturns.stock, cls: 'bg-sky-500' },
    { key: 'peers', label: 'Peers median', value: marketReturns.peers, cls: 'bg-amber-500' },
    { key: 'sector', label: 'Sector median', value: marketReturns.sector, cls: 'bg-teal-500' },
    { key: 'market', label: 'Market median', value: marketReturns.market, cls: 'bg-purple-500' },
  ] as const;
  const returnsBarData = returnsMarkers.filter((m) => m.value !== null && m.value !== undefined && Number.isFinite(m.value));
  const returnsValues = returnsBarData.map((m) => m.value as number);
  const returnsMin = returnsBarData.length > 0 ? Math.min(...returnsBarData.map((m) => m.value as number)) : null;
  const returnsMax = returnsBarData.length > 0 ? Math.max(...returnsBarData.map((m) => m.value as number)) : null;
  const returnsScaleMin = returnsValues.length > 0 ? Math.min(...returnsValues, 0) : 0;
  const returnsScaleMax = returnsValues.length > 0 ? Math.max(...returnsValues, 0) : 0;
  const returnsScaleSpan = Math.max(returnsScaleMax - returnsScaleMin, 1e-12);
  const returnsZeroPct = ((0 - returnsScaleMin) / returnsScaleSpan) * 100;
  const returnsZeroMarkerPct = Math.min(99.5, Math.max(0.5, returnsZeroPct));
  const returnsStockIsFavorable =
    marketReturns.stock !== null &&
      marketReturns.stock !== undefined &&
      Number.isFinite(marketReturns.stock) &&
      marketReturns.peers !== null &&
      marketReturns.peers !== undefined &&
      Number.isFinite(marketReturns.peers)
      ? (marketReturns.stock as number) >= (marketReturns.peers as number)
      : null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
            <Droplets className="w-5 h-5 text-sky-500" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              {liquidityTitle}
              {peerAnalysisEnabled ? (
                <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-300">
                  Peer mode
                </span>
              ) : null}
              <SectionTooltip sectionKey="liquidity" size="md" />
            </h2>
            {liquiditySubtitle ? (
              <p className="text-sm text-muted-foreground">{liquiditySubtitle}</p>
            ) : null}
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{selectedWindowLabel}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-xs font-medium text-emerald-400">
            Liquidity Score: {scorePca.toFixed(1)}
          </span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
        {q01View.availableKeys.map((periodKey) => (
          <button
            key={periodKey}
            onClick={() => setActivePeriod(periodKey)}
            className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeriod === periodKey
              ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
              : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
              }`}
          >
            {PERIOD_LABELS[periodKey] ?? periodKey.toUpperCase()}
          </button>
        ))}
        {q01View.legacyFallback ? (
          <span className="text-xs text-amber-400 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20">
            Legacy fallback (q01 missing)
          </span>
        ) : null}
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Score (Percentile) <MethodologyTooltip methodKey="liquidity_score" /></p>
          <p className="text-2xl font-bold text-foreground">{scorePcaPercentile.toFixed(1)}</p>
          <p className="text-xs text-slate-500 mt-1">
            Rank {rankPca}/{totalPca}
          </p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">ADV <MethodologyTooltip methodKey="adv" /></p>
          <p className="text-2xl font-bold text-foreground">{formatMoney(period.liquidity.adv_notional_sgd, reportCurrency)}</p>
          <p className="text-xs text-slate-500 mt-1">Window median</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Spread <MethodologyTooltip methodKey="spread" /></p>
          <p className="text-2xl font-bold text-foreground">{formatPct(period.liquidity.spread_pct)}</p>
          <p className="text-xs text-slate-500 mt-1">{formatNumber(period.liquidity.spread_ticks, 2)} ticks</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Trades <MethodologyTooltip methodKey="trades" /></p>
          <p className="text-2xl font-bold text-foreground">{formatCount(period.liquidity.trades)}</p>
          <p className="text-xs text-slate-500 mt-1">Median daily</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Turnover Ratio <MethodologyTooltip methodKey="turnover" /></p>
          <p className="text-2xl font-bold text-foreground">{formatPct(period.liquidity.turnover_ratio)}</p>
          <p className="text-xs text-slate-500 mt-1">Vol/Free float</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Volatility <MethodologyTooltip methodKey="volatility" /></p>
          <p className="text-2xl font-bold text-foreground">{formatPct(period.liquidity.volatility)}</p>
          <p className="text-xs text-slate-500 mt-1">Annualized</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Price Impact <MethodologyTooltip methodKey="price_impact" /></p>
          <p className="text-2xl font-bold text-foreground">
            {period.liquidity.amihud === null || period.liquidity.amihud === undefined
              ? 'N/A'
              : period.liquidity.amihud.toExponential(2)}
          </p>
          <p className="text-xs text-slate-500 mt-1">Price impact proxy</p>
        </div>
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">Peer Median Score <MethodologyTooltip methodKey="liquidity_score" /></p>
          <p className="text-2xl font-bold text-foreground">{formatNumber(period.peer_summary.peer_median_score_pca, 1)}</p>
          <p className="text-xs text-slate-500 mt-1">{period.peer_summary.n_peers} peers</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="xl:col-span-2 glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-500" />
              Peer Liquidity Score Comparison
              <MethodologyTooltip methodKey="liquidity_score" />
            </h3>
            <span className="text-xs text-slate-500">Liquidity score</span>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={peerChartData} layout="vertical" margin={{ top: 8, right: 24, left: 18, bottom: 8 }}>
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="label"
                  width={190}
                  tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                  axisLine={{ stroke: chartTheme.axisLineStroke }}
                  tickLine={false}
                  interval={0}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(51, 65, 85, 0.3)' }}
                  content={({ active, payload }) => {
                    if (!active || !payload || payload.length === 0) return null;
                    const p = payload[0].payload as { ticker: string; label: string; score: number; adv: number };
                    return (
                      <div className="chart-tooltip">
                        <p className="font-semibold text-foreground">{p.label}</p>
                        {p.label !== p.ticker ? <p className="text-xs text-slate-500">Ticker: {p.ticker}</p> : null}
                        <p className="text-sm text-sky-400">Score: {p.score.toFixed(1)}</p>
                        <p className="text-sm text-slate-400">ADV: {formatMoney(p.adv, reportCurrency)}</p>
                      </div>
                    );
                  }}
                />
                <ReferenceLine x={targetPeer?.score_pca ?? period.liquidity.score_pca} stroke="#10b981" strokeDasharray="3 3" />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} maxBarSize={24}>
                  {peerChartData.map((entry, idx) => (
                    <Cell key={`peer-${entry.ticker}-${entry.label}-${idx}`} fill={entry.isTarget ? '#0ea5e9' : '#475569'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-slate-500" />
            Liquidity Insights
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">{liquidityOverviewInsight}</p>
          <div className="space-y-2 pt-2 border-t border-slate-800">
            {(useNarrativeInsights ? report.insights?.liquidity?.strengths ?? [] : []).slice(0, 3).map((line, idx) => (
              <div key={`liq-strength-${idx}`} className="text-xs text-slate-400">
                {line}
              </div>
            ))}
            {(useNarrativeInsights ? report.insights?.liquidity?.strengths ?? [] : []).length === 0 ? (
              <p className="text-xs text-slate-500">No additional liquidity insights provided.</p>
            ) : null}
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-slate-500" />
            Market Comparison
          </h3>
          <div className="flex flex-col gap-2 lg:items-end">
            <span className="text-xs text-slate-500">
              {marketComparison.sector_name} ({marketComparison.sector_count}) • Market ({marketComparison.market_count})
            </span>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {q01View.availableKeys.map((periodKey) => (
                <button
                  key={`mc-period-${periodKey}`}
                  onClick={() => setActivePeriod(periodKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeriod === periodKey
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                    }`}
                >
                  {PERIOD_LABELS[periodKey] ?? periodKey.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveMarketTab('returns')}
            className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activeMarketTab === 'returns'
              ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
              : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
              }`}
          >
            Returns
          </button>
          {marketMetricRows.map((metric) => (
            <button
              key={metric.key}
              onClick={() => setActiveMarketTab(metric.key)}
              className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activeMarketTab === metric.key
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                }`}
            >
              {metric.tabLabel}
            </button>
          ))}
        </div>

        {activeMarketTab === 'returns' ? (
          <div className="pt-1">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-slate-500" />
              Returns
            </h4>
            <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-800">
              {returnsBarData.length > 0 ? (
                <>
                  <div className="space-y-3">
                    {returnsBarData.map((marker) => {
                      const value = marker.value as number;
                      const valuePct = ((value - returnsScaleMin) / returnsScaleSpan) * 100;
                      const rawWidthPct = Math.abs(valuePct - returnsZeroPct);
                      const widthPct = rawWidthPct > 0 ? Math.max(rawWidthPct, 1.5) : 0;
                      const leftPct = value < 0 ? Math.max(0, returnsZeroPct - widthPct) : returnsZeroPct;

                      let barBg: string;
                      if (marker.key === 'stock') {
                        barBg =
                          returnsStockIsFavorable === true
                            ? 'bg-emerald-500/80'
                            : returnsStockIsFavorable === false
                              ? 'bg-red-400/70'
                              : 'bg-sky-500/80';
                      } else {
                        const bgMap: Record<string, string> = {
                          'bg-amber-500': 'bg-amber-500/60',
                          'bg-teal-500': 'bg-teal-500/60',
                          'bg-purple-500': 'bg-purple-500/60',
                        };
                        barBg = bgMap[marker.cls] ?? 'bg-slate-500/60';
                      }

                      return (
                        <div key={marker.key} className="flex items-center gap-3">
                          <div className="w-28 shrink-0 flex items-center gap-2">
                            <span
                              className={`w-2.5 h-2.5 rounded-full shrink-0 ${marker.key === 'stock'
                                ? returnsStockIsFavorable === true
                                  ? 'bg-emerald-500'
                                  : returnsStockIsFavorable === false
                                    ? 'bg-red-400'
                                    : marker.cls
                                : marker.cls
                                }`}
                            />
                            <span className="text-xs text-slate-400 truncate">{marker.label}</span>
                          </div>
                          <div className="flex-1 relative h-7 bg-slate-800/50 rounded-lg overflow-hidden">
                            <span
                              className="absolute inset-y-0 w-px bg-slate-300/40"
                              style={{ left: `${returnsZeroMarkerPct}%` }}
                            />
                            <motion.div
                              className={`absolute inset-y-0 rounded-lg ${barBg}`}
                              initial={{ left: `${returnsZeroPct}%`, width: 0 }}
                              animate={{ left: `${leftPct}%`, width: `${widthPct}%` }}
                              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-200">
                              {formatSignedPct(marker.value)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between mt-4 text-[11px] text-slate-500">
                    <span>
                      Return range: {formatSignedPct(returnsMin)} – {formatSignedPct(returnsMax)}
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/60 text-slate-400">
                      0% baseline
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-sm text-slate-400">Return data is not available for this period.</div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
              <div className="bg-slate-900/40 rounded-lg p-3">
                <p className="text-xs text-slate-500">vs Market</p>
                <p className="text-sm font-medium text-slate-300">{formatSignedPct(marketReturns.vs_market)}</p>
              </div>
              <div className="bg-slate-900/40 rounded-lg p-3">
                <p className="text-xs text-slate-500">vs Sector</p>
                <p className="text-sm font-medium text-slate-300">{formatSignedPct(marketReturns.vs_sector)}</p>
              </div>
              <div className="bg-slate-900/40 rounded-lg p-3">
                <p className="text-xs text-slate-500">vs Peers</p>
                <p className="text-sm font-medium text-slate-300">{formatSignedPct(marketReturns.vs_peers)}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Insight</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {toUsableNarrativeText(staticMarketInsights.returns?.insight) ?? returnsFallbackSummary ?? 'Not available'}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-3">
                <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">{toUsableNarrativeText(staticMarketInsights.returns?.vs_market) ?? returnsFallbackVsMarket ?? 'Not available'}</div>
                <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">{toUsableNarrativeText(staticMarketInsights.returns?.vs_sector) ?? returnsFallbackVsSector ?? 'Not available'}</div>
                <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">{toUsableNarrativeText(staticMarketInsights.returns?.vs_peers) ?? returnsFallbackVsPeers ?? 'Not available'}</div>
              </div>
            </div>
          </div>
        ) : selectedMetric ? (
          <div className="pt-1">
            <h4 className="text-sm font-semibold text-foreground mb-3">{selectedMetric.label}</h4>
            <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-800">
              {selectedMetric.market ? (
                <>
                  {/* ── Horizontal Bar Chart (direction-aware) ── */}
                  {(() => {
                    const dir = selectedMetric.direction;
                    const lowerBetter = dir === 'lower_is_better';
                    const barData = metricMarkers.filter(m => m.value !== null && m.value !== undefined && Number.isFinite(m.value));
                    const maxVal = Math.max(...barData.map(m => Math.abs(m.value as number)), 1e-12);
                    const stockVal = selectedMetric.company;
                    const peersVal = selectedMetric.peers?.median;
                    const stockIsFavorable =
                      stockVal != null && peersVal != null && Number.isFinite(stockVal) && Number.isFinite(peersVal)
                        ? lowerBetter ? stockVal <= peersVal : stockVal >= peersVal
                        : null;

                    return (
                      <div className="space-y-3">
                        {barData.map((marker) => {
                          const absVal = Math.abs(marker.value as number);
                          const widthPct = Math.max((absVal / maxVal) * 100, 2);

                          let barBg: string;
                          if (marker.key === 'stock') {
                            barBg = stockIsFavorable === true ? 'bg-emerald-500/80' : stockIsFavorable === false ? 'bg-red-400/70' : 'bg-sky-500/80';
                          } else {
                            const bgMap: Record<string, string> = {
                              'bg-amber-500': 'bg-amber-500/60',
                              'bg-teal-500': 'bg-teal-500/60',
                              'bg-purple-500': 'bg-purple-500/60',
                            };
                            barBg = bgMap[marker.cls] ?? 'bg-slate-500/60';
                          }

                          return (
                            <div key={marker.key} className="flex items-center gap-3">
                              <div className="w-28 shrink-0 flex items-center gap-2">
                                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${marker.key === 'stock' ? (stockIsFavorable === true ? 'bg-emerald-500' : stockIsFavorable === false ? 'bg-red-400' : marker.cls) : marker.cls}`} />
                                <span className="text-xs text-slate-400 truncate">{marker.label}</span>
                              </div>
                              <div className="flex-1 relative h-7 bg-slate-800/50 rounded-lg overflow-hidden">
                                <motion.div
                                  className={`absolute inset-y-0 left-0 rounded-lg ${barBg}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${widthPct}%` }}
                                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-200">
                                  {selectedMetric.format(marker.value)}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}

                  <div className="flex items-center justify-between mt-4 text-[11px] text-slate-500">
                    <span>Market range: {selectedMetric.format(selectedMetric.market.min)} – {selectedMetric.format(selectedMetric.market.max)}</span>
                    <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/60 text-slate-400">
                      {selectedMetric.direction === 'lower_is_better' ? '↓' : '↑'}
                      {selectedMetric.direction === 'lower_is_better' ? ' Lower is better' : ' Higher is better'}
                    </span>
                  </div>

                  {/* ── OLD CHART (gradient slider) ──
                  <div className="flex justify-between text-[11px] text-slate-500 mb-2">
                    <span>Min: {selectedMetric.format(selectedMetric.market.min)}</span>
                    <span>Max: {selectedMetric.format(selectedMetric.market.max)}</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500">
                    {metricMarkers.map((marker) =>
                      marker.pos === null ? null : (
                        <div
                          key={marker.key}
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                          style={{ left: `${marker.pos}%` }}
                        >
                          <div className={`w-3.5 h-3.5 rounded-full border-2 border-white ${marker.cls}`} />
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
                    {metricMarkers.map((marker) => (
                      <div key={`legend-${marker.key}`} className="bg-slate-900/40 rounded-lg p-2 border border-slate-800/70">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className={`w-2.5 h-2.5 rounded-full ${marker.cls}`} />
                          <span>{marker.label}</span>
                        </div>
                        <p className="text-sm text-slate-200 mt-1">{selectedMetric.format(marker.value)}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">
                    Distribution is anchored on market min→max for this period. Markers show stock and median comparators.
                  </p>
                  ── END OLD CHART ── */}

                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Insight</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {toUsableNarrativeText(metricInsight?.insight) ?? metricFallbackSummary ?? 'Not available'}
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-3">
                      <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">
                        {toUsableNarrativeText(metricInsight?.vs_market) ?? metricFallbackVsMarket ?? 'Not available'}
                      </div>
                      <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">
                        {toUsableNarrativeText(metricInsight?.vs_sector) ?? metricFallbackVsSector ?? 'Not available'}
                      </div>
                      <div className="bg-slate-900/40 rounded-lg p-2 text-xs text-slate-400">
                        {toUsableNarrativeText(metricInsight?.vs_peers) ?? metricFallbackVsPeers ?? 'Not available'}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-sm text-slate-400">This metric is not available for {PERIOD_LABELS[activePeriod] ?? activePeriod.toUpperCase()}.</div>
              )}
            </div>
          </div>
        ) : null}

        {peerAnalysisEnabled ? (
          <div className="mt-5 border-t border-slate-800 pt-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between mb-4">
              <div>
                <h4 className="text-sm font-semibold text-foreground">Peer Detail</h4>
                <p className="text-xs text-slate-500">
                  {PERIOD_LABELS[activePeriod] ?? activePeriod.toUpperCase()} window · {selectedPeerMetric.tabLabel}
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:items-end">
                <span className="text-xs text-slate-500">
                  {peerDetailRows.length > 0 ? `${Math.max(peerDetailRows.length - 1, 0)} peers + target` : 'No peer rows'}
                </span>
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {q01View.availableKeys.map((periodKey) => (
                    <button
                      key={`peer-detail-period-${periodKey}`}
                      onClick={() => setActivePeriod(periodKey)}
                      className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeriod === periodKey
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                        }`}
                    >
                      {PERIOD_LABELS[periodKey] ?? periodKey.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {peerDetailMetricSpecs.map((metric) => (
                <button
                  key={`peer-detail-metric-${metric.key}`}
                  onClick={() => setActivePeerMetric(metric.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeerMetric === metric.key
                    ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                    : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                    }`}
                >
                  {metric.tabLabel}
                </button>
              ))}
            </div>

            {peerDetailRows.length > 0 ? (
              <div>
                <h5 className="text-sm font-semibold text-foreground mb-3">{selectedPeerMetric.chartLabel}</h5>
                <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-4">
                  {selectedPeerRows.length > 0 ? (
                    <>
                    <div className="space-y-3">
                      {selectedPeerRows.map((row) => {
                        const value = row.value as number;
                        const isNegative = selectedPeerMetric.signed && value < 0;
                        const leftPct = selectedPeerMetric.signed
                          ? isNegative
                            ? ((value - selectedPeerMin) / selectedPeerSpan) * 100
                            : selectedPeerZeroPct
                          : 0;
                        const widthPct = Math.max((Math.abs(value) / selectedPeerSpan) * 100, 1.5);
                        const barBg = row.isTarget
                          ? 'bg-rose-500/80'
                          : selectedPeerMetric.signed
                            ? value >= 0
                              ? 'bg-emerald-500/65'
                              : 'bg-red-400/60'
                            : selectedPeerMetric.direction === 'lower_is_better'
                              ? 'bg-teal-500/60'
                              : 'bg-emerald-500/55';

                        return (
                          <div key={`peer-detail-chart-${activePeriod}-${selectedPeerMetric.key}-${row.ticker}`} className="flex items-center gap-3">
                            <div className="w-36 shrink-0 flex items-center gap-2 text-xs text-slate-400">
                              <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${row.isTarget ? 'bg-rose-400' : 'bg-emerald-400'}`} />
                              <span className="truncate">{row.label}</span>
                            </div>
                            <div className="relative h-8 flex-1 overflow-hidden rounded-lg bg-slate-800/50">
                              {selectedPeerMetric.signed ? (
                                <span
                                  className="absolute inset-y-0 w-px bg-slate-300/40"
                                  style={{ left: `${Math.min(100, Math.max(0, selectedPeerZeroPct))}%` }}
                                />
                              ) : null}
                              <motion.div
                                className={`absolute inset-y-0 rounded-lg ${barBg}`}
                                initial={{ left: selectedPeerMetric.signed ? `${selectedPeerZeroPct}%` : '0%', width: 0 }}
                                animate={{ left: `${Math.min(100, Math.max(0, leftPct))}%`, width: `${Math.min(100, widthPct)}%` }}
                                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                              />
                              <span className="absolute inset-y-0 right-3 flex items-center text-xs font-medium text-slate-100">
                                {row.formatted}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between mt-4 text-[11px] text-slate-500">
                      <span>
                        {selectedPeerMetric.signed
                          ? `Peer range: ${selectedPeerMetric.format(selectedPeerMin)} – ${selectedPeerMetric.format(selectedPeerMax)}`
                          : `Peer range: ${selectedPeerMetric.format(0)} – ${selectedPeerMetric.format(selectedPeerMax)}`}
                      </span>
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800/60 text-slate-400">
                        {selectedPeerMetric.direction === 'lower_is_better' ? '↓' : '↑'}
                        {selectedPeerMetric.direction === 'lower_is_better' ? ' Lower is better' : ' Higher is better'}
                      </span>
                    </div>
                    </>
                  ) : (
                    <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-400">
                      {selectedPeerMetric.tabLabel} data is not available for this period.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-400">
                Peer detail rows are not available for this period.
              </div>
            )}
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
