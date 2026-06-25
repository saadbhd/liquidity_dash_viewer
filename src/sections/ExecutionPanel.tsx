import { motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Clock3,
  Layers3,
  Target,
} from 'lucide-react';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { formatCompactMoney, resolveReportCurrency } from '@/lib/currency';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function safeNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

type HistoricalScenarioRow = {
  key?: string | null;
  label?: string | null;
  quantile?: number | null;
  trade_notional?: number | null;
  impact_pct?: number | null;
  filled_pct?: number | null;
  pct_of_bid_depth?: number | null;
  pct_of_adv?: number | null;
};

type L3OrderRow = {
  rank?: number | null;
  notional?: number | null;
  impact_pct?: number | null;
  filled_pct?: number | null;
  pct_of_bid_depth?: number | null;
};

type IntradayRow = {
  bucket?: string | null;
  spread_pct?: number | null;
  spread_ticks?: number | null;
  bid_depth_notional?: number | null;
  ask_depth_notional?: number | null;
};

export function ExecutionPanel() {
  const report = useReport();
  const { labels, content, series, meta, insights } = report;
  const chartTheme = useChartTheme();
  const { order_book } = series;
  const execution = series.execution_dynamic;
  const reportCurrency = resolveReportCurrency(report);

  const snapshot = execution?.snapshot;
  const historical = execution?.historical_trade_scenarios;
  const l3Orders = execution?.l3_sell_order_scenarios;
  const intraday = execution?.intraday_liquidity_profile;

  const formatMoney = (value?: number | null) => {
    return formatCompactMoney(value, reportCurrency);
  };

  const formatPercent = (value?: number | null, digits = 2) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    return `${(value * 100).toFixed(digits)}%`;
  };

  const formatRatio = (value?: number | null) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    return `${value.toFixed(value >= 10 ? 1 : 2)}x`;
  };

  const formatPrice = (value?: number | null) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    return value < 1 ? value.toFixed(3) : value.toFixed(2);
  };

  const formatDateShort = (value?: string | null) => {
    if (!value) return null;
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return null;
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(parsed);
  };

  const buildDateRangeShort = (first?: string | null, last?: string | null) => {
    const firstLabel = formatDateShort(first);
    const lastLabel = formatDateShort(last);
    if (!firstLabel || !lastLabel) return null;
    return firstLabel === lastLabel ? firstLabel : `${firstLabel}-${lastLabel}`;
  };

  const buildDateRangeLong = (first?: string | null, last?: string | null) => {
    if (!first || !last) return null;
    const firstParsed = new Date(`${first}T00:00:00`);
    const lastParsed = new Date(`${last}T00:00:00`);
    if (Number.isNaN(firstParsed.getTime()) || Number.isNaN(lastParsed.getTime())) return null;
    const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const firstLabel = fmt.format(firstParsed);
    const lastLabel = fmt.format(lastParsed);
    return firstLabel === lastLabel ? firstLabel : `${firstLabel} to ${lastLabel}`;
  };

  const histRows = (historical?.scenarios ?? []) as HistoricalScenarioRow[];
  const l3Rows = (l3Orders?.orders ?? []) as L3OrderRow[];
  const intradayRows = (intraday?.rows ?? []) as IntradayRow[];
  const intradaySummary = intraday?.summary;
  const historyWindowShort =
    historical?.window_short_label ??
    buildDateRangeShort(historical?.first_trade_date, historical?.last_trade_date) ??
    (historical?.trade_days_used != null ? `${historical.trade_days_used} trading days` : 'N/A');
  const historyWindowLabel =
    historical?.window_label ??
    buildDateRangeLong(historical?.first_trade_date, historical?.last_trade_date) ??
    historyWindowShort;
  const historyDetailLabel =
    historical?.window_detail_label ??
    [
      historical?.trade_days_used != null ? `${historical.trade_days_used} trading days` : null,
      historical?.n_trades_used != null ? `${historical.n_trades_used.toLocaleString('en-US')} trades` : null,
    ]
      .filter(Boolean)
      .join(' • ');
  const sessionLabel =
    intraday?.session_label ??
    (meta.market === 'XSES' ? 'continuous trading session' : 'regular trading session');
  const sessionWindowLabel =
    intraday?.display_window_label ??
    (meta.market === 'XSES' ? 'continuous trading session' : 'regular trading session');
  const sessionBucketNote =
    intraday?.bucket_note ??
    (meta.market === 'XSES'
      ? 'Buckets cover the continuous trading session (auctions excluded).'
      : 'Buckets cover the regular trading session (auctions excluded).');
  const snapshotLabel = snapshot?.snapshot_label || 'latest displayed book';
  const snapshotNote = snapshot?.snapshot_note || 'Latest displayed book snapshot';
  const sectionSubtitle = historical?.valid
    ? `Combines the ${snapshotLabel}, trade-size stress tests calibrated on ${historyWindowLabel}${historyDetailLabel ? ` (${historyDetailLabel})` : ''}, large sell-side orders observed today, and intraday spread/depth during the ${sessionLabel}.`
    : `Combines the ${snapshotLabel}, available-history trade-size stress tests, large sell-side orders observed today, and intraday spread/depth during the ${sessionLabel}.`;
  const historicalDescription = historical?.history_note
    ? `${historical.history_note} These sizes are then replayed as hypothetical sell orders into the ${snapshotLabel}.`
    : `Trade-size percentiles are taken from the stock's available history and replayed as hypothetical sell orders into the ${snapshotLabel}.`;

  const hasDynamic = Boolean(
    snapshot?.valid ||
    historical?.valid ||
    l3Orders?.valid ||
    intraday?.valid
  );

  const sortedBids = [...(order_book?.bids ?? [])].sort((a, b) => b.price - a.price);
  const sortedAsks = [...(order_book?.asks ?? [])].sort((a, b) => a.price - b.price);
  const displayedBidDepth = safeNumber(snapshot?.bid_depth_notional_displayed) ?? safeNumber(snapshot?.bid_depth_notional_top10);
  const displayedAskDepth = safeNumber(snapshot?.ask_depth_notional_displayed) ?? safeNumber(snapshot?.ask_depth_notional_top10);
  const visibleLevelsPerSide = Math.min(Math.max(sortedBids.length, sortedAsks.length), 10);
  const visibleBids = sortedBids.slice(0, visibleLevelsPerSide);
  const visibleAsks = sortedAsks.slice(0, visibleLevelsPerSide);
  const bidDepthByPrice = new Map<number, { depth: number; quantity: number | null }>();
  const askDepthByPrice = new Map<number, { depth: number; quantity: number | null }>();
  let runningBidDepth = 0;
  let runningAskDepth = 0;

  visibleBids.forEach((level) => {
    runningBidDepth += Math.abs(level.value);
    bidDepthByPrice.set(level.price, {
      depth: runningBidDepth,
      quantity: level.quantity ?? null,
    });
  });

  visibleAsks.forEach((level) => {
    runningAskDepth += Math.abs(level.value);
    askDepthByPrice.set(level.price, {
      depth: runningAskDepth,
      quantity: level.quantity ?? null,
    });
  });

  const bestBidPrice = safeNumber(visibleBids[0]?.price);
  const bestAskPrice = safeNumber(visibleAsks[0]?.price);
  const midPrice =
    safeNumber(snapshot?.mid_price) ??
    (bestBidPrice != null && bestAskPrice != null ? (bestBidPrice + bestAskPrice) / 2 : null);
  const orderBookPrices = new Set([...visibleBids.map((level) => level.price), ...visibleAsks.map((level) => level.price)]);
  if (midPrice != null && !orderBookPrices.has(midPrice)) {
    orderBookPrices.add(midPrice);
  }
  const orderBookData = [...orderBookPrices]
    .sort((a, b) => a - b)
    .map((price) => {
      const bidLevel = bidDepthByPrice.get(price);
      const askLevel = askDepthByPrice.get(price);
      const isMidAnchor = midPrice != null && price === midPrice && !bidLevel && !askLevel;
      return {
        price,
        priceLabel: formatPrice(price),
        bidDepth: isMidAnchor ? 0 : bidLevel?.depth ?? null,
        askDepth: isMidAnchor ? 0 : askLevel?.depth ?? null,
        bidQuantity: bidLevel?.quantity ?? null,
        askQuantity: askLevel?.quantity ?? null,
      };
    });
  const displayedLevelCount = Math.max(visibleBids.length, visibleAsks.length);
  let bidLadderDepth = 0;
  let askLadderDepth = 0;
  const bidLadderDepths = visibleBids.map((level) => {
    bidLadderDepth += Math.abs(level.value);
    return bidLadderDepth;
  });
  const askLadderDepths = visibleAsks.map((level) => {
    askLadderDepth += Math.abs(level.value);
    return askLadderDepth;
  });
  const maxLadderDepth = Math.max(1, ...bidLadderDepths, ...askLadderDepths);
  const orderBookLadderRows = Array.from({ length: displayedLevelCount }, (_, index) => {
    const bid = visibleBids[index];
    const ask = visibleAsks[index];
    const bidDepth = bidLadderDepths[index] ?? null;
    const askDepth = askLadderDepths[index] ?? null;
    return {
      level: index + 1,
      bid,
      ask,
      bidDepth,
      askDepth,
      bidWidth: bidDepth == null ? 0 : Math.max(8, Math.min(100, (bidDepth / maxLadderDepth) * 100)),
      askWidth: askDepth == null ? 0 : Math.max(8, Math.min(100, (askDepth / maxLadderDepth) * 100)),
    };
  });

  const spreadChartData = intradayRows.map((row) => ({
    bucket: row.bucket,
    spreadPct: safeNumber(row.spread_pct) != null ? safeNumber(row.spread_pct)! * 100 : null,
    spreadTicks: safeNumber(row.spread_ticks),
  }));

  const depthChartData = intradayRows.map((row) => ({
    bucket: row.bucket,
    bidDepth: safeNumber(row.bid_depth_notional),
    askDepth: safeNumber(row.ask_depth_notional),
  }));

  const metricTiles = [
    {
      title: 'Current Spread',
      value: formatPercent(snapshot?.spread_pct),
      note:
        snapshot?.spread_ticks != null
          ? `${snapshot.spread_ticks.toFixed(1)} ticks on the ${snapshotLabel}`
          : snapshotNote,
      color: 'text-amber-400',
    },
    {
      title: 'Bid Depth',
      value: formatMoney(displayedBidDepth),
      note: 'Displayed buy-side support',
      color: 'text-emerald-400',
    },
    {
      title: 'Ask Depth',
      value: formatMoney(displayedAskDepth),
      note: 'Displayed sell-side supply',
      color: 'text-rose-400',
    },
    {
      title: 'History Used',
      value: historical?.valid ? historyWindowShort : 'N/A',
      note:
        historical?.valid
          ? historyDetailLabel || 'Historical size calibration available'
          : 'Historical size calibration unavailable',
      color: 'text-cyan-400',
    },
  ];

  const fallbackInsightParts: string[] = [];
  if (snapshot?.valid) {
    fallbackInsightParts.push(
      `Displayed depth shows ${formatMoney(displayedBidDepth)} on the bid versus ${formatMoney(displayedAskDepth)} on the ask, with current spread at ${formatPercent(snapshot.spread_pct)}.`
    );
  }
  const p95 = histRows.find((row) => row.key === 'p95') ?? histRows[1] ?? histRows[0];
  if (p95?.trade_notional != null) {
    fallbackInsightParts.push(
      `${p95.label} is about ${formatMoney(p95.trade_notional)} and would imply roughly ${formatPercent(p95.impact_pct)} sell impact on the ${snapshotLabel}${historical?.trade_days_used != null ? `, based on ${historical.trade_days_used} trading days of history` : ''}.`
    );
  }
  if (l3Rows[0]?.notional != null) {
    fallbackInsightParts.push(
      `The largest sell-side order seen during the day was about ${formatMoney(l3Rows[0].notional)} and would imply roughly ${formatPercent(l3Rows[0].impact_pct)} if it crossed immediately.`
    );
  }
  if (intradaySummary?.widest_bucket || intradaySummary?.deepest_bid_bucket) {
    fallbackInsightParts.push(
      `Across ${sessionWindowLabel}, spread was widest around ${intradaySummary?.widest_bucket ?? 'N/A'} and displayed bid depth was strongest around ${intradaySummary?.deepest_bid_bucket ?? 'N/A'}.`
    );
  }
  const sectionInsight =
    insights?.execution?.overall ||
    labels.exec_check_insight ||
    fallbackInsightParts.join(' ');

  if (!hasDynamic) {
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
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {labels.exec_check_title || 'Trading Costs & Market Depth'}
                <SectionTooltip sectionKey="execution" size="md" />
              </h2>
              <p className="text-sm text-muted-foreground">
                This report uses the earlier execution view. Regenerate the report to unlock the new dynamic cost blocks.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
          {content.exec_check_tiles.map((tile) => (
            <div key={tile.title} className="glass-panel rounded-xl p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">{tile.title}</p>
              <p className={`text-2xl font-bold ${tile.color}`}>{tile.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{tile.note}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">{labels.order_book_title}</h3>
          </div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.08)]">
              BID
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Spread</span>
            <span className="rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 py-2 text-xs font-bold text-rose-200 shadow-[0_0_24px_rgba(248,113,113,0.08)]">
              ASK
            </span>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={orderBookData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="fallbackBidDepthFill" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="fallbackAskDepthFill" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f87171" stopOpacity={0.1} />
                    <stop offset="100%" stopColor="#f87171" stopOpacity={0.45} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 6" stroke={chartTheme.gridStroke} vertical={false} />
                <XAxis dataKey="price" type="number" domain={['dataMin', 'dataMax']} tick={{ fill: chartTheme.tickFill, fontSize: 10 }} axisLine={{ stroke: chartTheme.axisLineStroke }} tickLine={false} tickFormatter={(v) => Number(v).toFixed(3)} />
                <YAxis tick={{ fill: chartTheme.tickFill, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatMoney(v)} />
                <Tooltip contentStyle={chartTheme.tooltipContentStyle} formatter={(value: unknown) => value != null && typeof value === 'number' ? [formatMoney(value), ''] : ['—', '']} />
                <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
                {midPrice != null ? (
                  <ReferenceLine x={midPrice} stroke="rgba(148, 163, 184, 0.3)" strokeDasharray="4 4" />
                ) : null}
                <Area type="linear" dataKey="bids" name="Bid depth" stroke="#10b981" strokeWidth={2.5} fill="url(#fallbackBidDepthFill)" dot={{ r: 3.5, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 5 }} connectNulls={false} />
                <Area type="linear" dataKey="asks" name="Ask depth" stroke="#f87171" strokeWidth={2.5} fill="url(#fallbackAskDepthFill)" dot={{ r: 3.5, fill: '#f87171', strokeWidth: 0 }} activeDot={{ r: 5 }} connectNulls={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">{labels.order_book_note}</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            {labels.impact_summary_title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.impact_summary_cards.map((card, index) => (
              <div key={card.title} className={`glass-panel rounded-xl p-4 border-l-2 ${index === 0 ? 'border-emerald-500/50 bg-emerald-500/5' : index === 1 ? 'border-amber-500/50 bg-amber-500/5' : 'border-red-500/50 bg-red-500/5'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{card.title}</span>
                </div>
                <p className="text-xs text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

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
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              {labels.exec_check_title || 'Trading Costs & Market Depth'}
              <SectionTooltip sectionKey="execution" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">
              {sectionSubtitle}
            </p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <span className="text-xs font-medium text-cyan-400">Dynamic Cost View</span>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricTiles.map((tile) => (
          <div key={tile.title} className="glass-panel rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground mb-1">{tile.title}</p>
            <p className={`text-2xl font-bold ${tile.color}`}>{tile.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{tile.note}</p>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 xl:[grid-template-columns:minmax(0,1.3fr)_minmax(340px,0.95fr)] gap-6 items-start">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              Historical Trade Stress Test
              <MethodologyTooltip methodKey="historical_trade_scenarios" />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            {historicalDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['p90', 'p95', 'p99_99'].map((key, idx) => {
              const row = histRows.find((item) => item.key === key) ?? histRows[idx];
              return (
                <div key={key} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">{row?.label ?? 'Not available'}</p>
                      <p className="text-xs text-muted-foreground">
                        {row?.quantile != null ? `Quantile ${(row.quantile * 100).toFixed(row.quantile > 0.99 ? 2 : 0)}%` : 'No scenario available'}
                      </p>
                    </div>
                    <span className="text-xs rounded-full px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Sell replay
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{formatMoney(row?.trade_notional)}</p>
                  <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    <div>Estimated impact: <span className="text-foreground">{formatPercent(row?.impact_pct)}</span></div>
                    <div>Fill on displayed book: <span className="text-foreground">{row?.filled_pct != null ? `${row.filled_pct.toFixed(1)}%` : 'N/A'}</span></div>
                    <div>Share of bid depth: <span className="text-foreground">{row?.pct_of_bid_depth != null ? `${row.pct_of_bid_depth.toFixed(1)}%` : 'N/A'}</span></div>
                    <div>Share of ADV: <span className="text-foreground">{row?.pct_of_adv != null ? `${row.pct_of_adv.toFixed(1)}%` : 'N/A'}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Layers3 className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              Largest Sell Orders Seen Today
              <MethodologyTooltip methodKey="l3_sell_orders" />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Largest ask-side orders observed during the day. Each row shows the notional size, estimated impact, and share of displayed bid depth if that size crossed immediately.
          </p>
          <div className="space-y-2">
            {[0, 1, 2].map((index) => {
              const row = l3Rows[index];
              return (
                <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{row ? `Order #${row.rank}` : 'No order available'}</p>
                    </div>
                    <span className="text-[11px] rounded-full px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Hypothetical market sell
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-foreground mt-1.5">{formatMoney(row?.notional)}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <div>Impact: <span className="text-foreground">{formatPercent(row?.impact_pct)}</span></div>
                    <div>Fill: <span className="text-foreground">{row?.filled_pct != null ? `${row.filled_pct.toFixed(1)}%` : 'N/A'}</span></div>
                    <div>Bid depth: <span className="text-foreground">{row?.pct_of_bid_depth != null ? `${row.pct_of_bid_depth.toFixed(1)}%` : 'N/A'}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-6">
          <div className="mb-4 space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                Current Displayed Order Book
                <MethodologyTooltip methodKey="impact_simulation" />
              </h3>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-6 py-3 text-sm font-bold text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.08)]">
                BID
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Spread</span>
              <span className="rounded-xl border border-rose-400/40 bg-rose-400/10 px-6 py-3 text-sm font-bold text-rose-200 shadow-[0_0_24px_rgba(248,113,113,0.08)]">
                ASK
              </span>
            </div>
          </div>
          <div className="relative h-[520px] overflow-hidden rounded-xl border border-white/10 bg-slate-950/45 px-5 py-5 shadow-inner">
            <div className="absolute left-1/2 top-5 bottom-12 w-px -translate-x-1/2 bg-slate-400/25" />
            <div className="absolute inset-x-5 bottom-8 h-px bg-slate-400/20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-100">
              Spread
            </div>
            <div className="relative z-10 flex h-[calc(100%-3rem)] flex-col justify-between">
              {orderBookLadderRows.map((row) => (
                <div key={row.level} className="grid min-h-[32px] grid-cols-[74px_minmax(0,1fr)_58px_minmax(0,1fr)_74px] items-center gap-0">
                  <div className="relative z-20 justify-self-start rounded bg-slate-800/85 px-2.5 py-1 text-center text-[10px] leading-tight text-emerald-300 ring-1 ring-emerald-300/10">
                    <div className="font-semibold uppercase text-slate-200">Buy</div>
                    <div className="font-mono">{row.bid ? formatPrice(row.bid.price) : '—'}</div>
                    <div className="font-mono text-[9px] text-emerald-200/80">{row.bid ? formatMoney(row.bidDepth) : '—'}</div>
                  </div>
                  <div className="relative h-full min-h-[15px]">
                    <div
                      className="absolute right-0 top-0 h-full rounded-l-sm border-r border-emerald-200/25 bg-gradient-to-l from-emerald-400/75 via-emerald-500/45 to-emerald-500/10 shadow-[0_0_18px_rgba(16,185,129,0.16)]"
                      style={{ width: `${row.bidWidth}%` }}
                      title={row.bid ? `Bid ${formatPrice(row.bid.price)} · ${formatMoney(row.bidDepth)}` : undefined}
                    />
                  </div>
                  <div className="relative z-20 text-center text-[9px] font-medium text-slate-300">
                    {row.bid && row.ask ? formatPrice((row.bid.price + row.ask.price) / 2) : ''}
                  </div>
                  <div className="relative h-full min-h-[15px]">
                    <div
                      className="absolute left-0 top-0 h-full rounded-r-sm border-l border-rose-200/25 bg-gradient-to-r from-rose-400/75 via-rose-500/45 to-rose-500/10 shadow-[0_0_18px_rgba(248,113,113,0.16)]"
                      style={{ width: `${row.askWidth}%` }}
                      title={row.ask ? `Ask ${formatPrice(row.ask.price)} · ${formatMoney(row.askDepth)}` : undefined}
                    />
                  </div>
                  <div className="relative z-20 justify-self-end rounded bg-slate-800/85 px-2.5 py-1 text-center text-[10px] leading-tight text-rose-300 ring-1 ring-rose-300/10">
                    <div className="font-semibold uppercase text-slate-200">Sell</div>
                    <div className="font-mono">{row.ask ? formatPrice(row.ask.price) : '—'}</div>
                    <div className="font-mono text-[9px] text-rose-200/80">{row.ask ? formatMoney(row.askDepth) : '—'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Top {displayedLevelCount || 10} levels per side from the {snapshotLabel}. Bid/ask depth ratio on that snapshot: {formatRatio(snapshot?.bid_ask_depth_ratio)}.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Clock3 className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                Spread Through The Day
                <MethodologyTooltip methodKey="intraday_book_profile" />
              </h3>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={spreadChartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                  <XAxis
                    dataKey="bucket"
                    tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                    axisLine={{ stroke: chartTheme.axisLineStroke }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${Number(v).toFixed(2)}%`}
                  />
                  <Tooltip
                    contentStyle={chartTheme.tooltipContentStyle}
                    formatter={(value: unknown, name: string) => {
                      if (typeof value !== 'number' || !Number.isFinite(value)) return ['N/A', name];
                      if (name === 'Spread (ticks)') return [value.toFixed(1), name];
                      return [`${value.toFixed(2)}%`, name];
                    }}
                  />
                  <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
                  <Line
                    type="monotone"
                    dataKey="spreadPct"
                    name="Spread (%)"
                    stroke="#f59e0b"
                    strokeWidth={2}
                    dot={{ r: 2, fill: '#f59e0b' }}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="spreadTicks"
                    name="Spread (ticks)"
                    stroke="#60a5fa"
                    strokeWidth={2}
                    dot={{ r: 2, fill: '#60a5fa' }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {sessionBucketNote} Tightest bucket: {intradaySummary?.tightest_bucket ?? 'N/A'} • Widest bucket: {intradaySummary?.widest_bucket ?? 'N/A'}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                Displayed Depth Through The Day
                <MethodologyTooltip methodKey="intraday_book_profile" />
              </h3>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={depthChartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                  <XAxis
                    dataKey="bucket"
                    tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                    axisLine={{ stroke: chartTheme.axisLineStroke }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => formatMoney(v)}
                  />
                  <Tooltip
                    contentStyle={chartTheme.tooltipContentStyle}
                    formatter={(value: unknown, name: string) =>
                      value != null && typeof value === 'number' ? [formatMoney(value), name] : ['N/A', name]
                    }
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar dataKey="bidDepth" name="Bid depth" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="askDepth" name="Ask depth" fill="#f87171" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Deepest bid bucket: {intradaySummary?.deepest_bid_bucket ?? 'N/A'} • Thinnest bid bucket: {intradaySummary?.thinnest_bid_bucket ?? 'N/A'}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 border-l-2 border-rose-500/50">
        <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          Trading Cost Read
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{sectionInsight || 'Dynamic trading-cost signals are not available for this report.'}</p>
      </motion.div>
    </motion.div>
  );
}
