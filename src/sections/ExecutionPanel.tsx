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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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

export function ExecutionPanel() {
  const { labels, content, series, meta } = useReport();
  const chartTheme = useChartTheme();
  const { order_book } = series;
  const execution = series.execution_dynamic;

  const snapshot = execution?.snapshot;
  const historical = execution?.historical_trade_scenarios;
  const l3Orders = execution?.l3_sell_order_scenarios;
  const intraday = execution?.intraday_liquidity_profile;

  const currencySymbol =
    meta.market === 'XHKG' ? 'HK$' : meta.market === 'XSES' ? 'S$' : '';

  const formatMoney = (value?: number | null) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    if (Math.abs(value) >= 1e9) return `${currencySymbol}${(value / 1e9).toFixed(2)}B`;
    if (Math.abs(value) >= 1e6) return `${currencySymbol}${(value / 1e6).toFixed(2)}M`;
    if (Math.abs(value) >= 1e3) return `${currencySymbol}${(value / 1e3).toFixed(1)}K`;
    return `${currencySymbol}${value.toFixed(0)}`;
  };

  const formatPercent = (value?: number | null, digits = 2) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    return `${(value * 100).toFixed(digits)}%`;
  };

  const formatRatio = (value?: number | null) => {
    if (value == null || !Number.isFinite(value)) return 'N/A';
    return `${value.toFixed(value >= 10 ? 1 : 2)}x`;
  };

  const formatTime = (value?: string | null) => {
    if (!value) return 'N/A';
    const timePart = value.includes(' ') ? value.split(' ')[1] : value;
    return timePart.slice(0, 5) || value;
  };

  const histRows = historical?.scenarios ?? [];
  const l3Rows = l3Orders?.orders ?? [];
  const intradayRows = intraday?.rows ?? [];
  const intradaySummary = intraday?.summary;

  const hasDynamic = Boolean(
    snapshot?.valid ||
    historical?.valid ||
    l3Orders?.valid ||
    intraday?.valid
  );

  const sortedBids = [...(order_book?.bids ?? [])].sort((a, b) => b.price - a.price);
  const sortedAsks = [...(order_book?.asks ?? [])].sort((a, b) => a.price - b.price);
  const bidCumulative = sortedBids.reduce((acc: number[], bid, index) => {
    const prev = index > 0 ? acc[index - 1] : 0;
    acc.push(prev + bid.value);
    return acc;
  }, []);
  const askCumulative = sortedAsks.reduce((acc: number[], ask, index) => {
    const prev = index > 0 ? acc[index - 1] : 0;
    acc.push(prev + ask.value);
    return acc;
  }, []);
  const bidPriceToCum = new Map(sortedBids.map((b, i) => [b.price, bidCumulative[i]]));
  const askPriceToCum = new Map(sortedAsks.map((a, i) => [a.price, askCumulative[i]]));
  const allPrices = [...new Set([...sortedBids.map((b) => b.price), ...sortedAsks.map((a) => a.price)])].sort((a, b) => a - b);
  const orderBookData = allPrices.map((price) => ({
    price,
    bids: bidPriceToCum.has(price) ? bidPriceToCum.get(price)! : null,
    asks: askPriceToCum.has(price) ? askPriceToCum.get(price)! : null,
  }));

  const spreadChartData = intradayRows.map((row: any) => ({
    bucket: row.bucket,
    spreadPct: safeNumber(row.spread_pct) != null ? safeNumber(row.spread_pct)! * 100 : null,
    spreadTicks: safeNumber(row.spread_ticks),
  }));

  const depthChartData = intradayRows.map((row: any) => ({
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
          ? `${snapshot.spread_ticks.toFixed(1)} ticks on the latest displayed book`
          : 'Latest displayed book snapshot',
      color: 'text-amber-400',
    },
    {
      title: 'Bid Depth (Top 10)',
      value: formatMoney(snapshot?.bid_depth_notional_top10),
      note: 'Displayed buy-side support',
      color: 'text-emerald-400',
    },
    {
      title: 'Ask Depth (Top 10)',
      value: formatMoney(snapshot?.ask_depth_notional_top10),
      note: 'Displayed sell-side supply',
      color: 'text-rose-400',
    },
    {
      title: 'Stress-Test Window',
      value:
        historical?.valid && historical.trade_days_used != null
          ? `${historical.trade_days_used}D`
          : 'N/A',
      note:
        historical?.valid && historical.n_trades_used != null
          ? `${historical.n_trades_used.toLocaleString('en-US')} trades used`
          : 'Historical size calibration unavailable',
      color: 'text-cyan-400',
    },
  ];

  const fallbackInsightParts: string[] = [];
  if (snapshot?.valid) {
    fallbackInsightParts.push(
      `Latest displayed bid depth is ${formatMoney(snapshot.bid_depth_notional_top10)} versus ${formatMoney(snapshot.ask_depth_notional_top10)} on the ask.`
    );
  }
  const p95 = histRows.find((row: any) => row.key === 'p95') ?? histRows[1] ?? histRows[0];
  if (p95?.trade_notional != null) {
    fallbackInsightParts.push(
      `${p95.label} is about ${formatMoney(p95.trade_notional)} and would imply roughly ${formatPercent(p95.impact_pct)} sell impact on the latest displayed book.`
    );
  }
  if (l3Rows[0]?.notional != null) {
    fallbackInsightParts.push(
      `The largest sell-side order seen during the day was about ${formatMoney(l3Rows[0].notional)} and would imply roughly ${formatPercent(l3Rows[0].impact_pct)} if it crossed immediately.`
    );
  }
  if (intradaySummary?.widest_bucket || intradaySummary?.deepest_bid_bucket) {
    fallbackInsightParts.push(
      `During the day, spread was widest around ${intradaySummary?.widest_bucket ?? 'N/A'} and displayed bid depth was strongest around ${intradaySummary?.deepest_bid_bucket ?? 'N/A'}.`
    );
  }
  const sectionInsight = fallbackInsightParts.join(' ');

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
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderBookData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                <XAxis dataKey="price" tick={{ fill: chartTheme.tickFill, fontSize: 10 }} axisLine={{ stroke: chartTheme.axisLineStroke }} tickLine={false} tickFormatter={(v) => Number(v).toFixed(3)} />
                <YAxis tick={{ fill: chartTheme.tickFill, fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => formatMoney(v)} />
                <Tooltip contentStyle={chartTheme.tooltipContentStyle} formatter={(value: unknown) => value != null && typeof value === 'number' ? [formatMoney(value), ''] : ['—', '']} />
                <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
                <Line type="monotone" dataKey="bids" name="Bid depth" stroke="#10b981" strokeWidth={2} dot={{ r: 3, fill: '#10b981' }} connectNulls={false} />
                <Line type="monotone" dataKey="asks" name="Ask depth" stroke="#f87171" strokeWidth={2} dot={{ r: 3, fill: '#f87171' }} connectNulls={false} />
              </LineChart>
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
              Combines the latest displayed book, one-year historical trade-size stress tests,
              large sell-side orders seen during the day, and intraday spread/depth conditions.
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 xl:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              Historical Trade Stress Test
              <MethodologyTooltip methodKey="historical_trade_scenarios" />
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Large trade sizes are taken from the stock&apos;s own trade history over the last year of available data,
            then replayed as hypothetical sell orders into the latest displayed book.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['p90', 'p95', 'p99_99'].map((key, idx) => {
              const row = histRows.find((item: any) => item.key === key) ?? histRows[idx];
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
          <p className="text-xs text-muted-foreground mb-4">
            Largest ask-side orders observed during the day. Each row shows the hypothetical price impact if that size crossed the market immediately.
          </p>
          <div className="space-y-3">
            {[0, 1, 2].map((index) => {
              const row = l3Rows[index];
              return (
                <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">{row ? `Order #${row.rank}` : 'No order available'}</p>
                      <p className="text-xs text-muted-foreground">
                        {row ? `Seen at ${formatTime(row.timestamp)} • Posted ${formatMoney(row.posted_price)}` : 'No matching L3 sell-side order for this slot'}
                      </p>
                    </div>
                    <span className="text-xs rounded-full px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Hypothetical market sell
                    </span>
                  </div>
                  <p className="text-xl font-bold text-foreground mt-3">{formatMoney(row?.notional)}</p>
                  <div className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                    <div>Estimated impact: <span className="text-foreground">{formatPercent(row?.impact_pct)}</span></div>
                    <div>Fill on displayed book: <span className="text-foreground">{row?.filled_pct != null ? `${row.filled_pct.toFixed(1)}%` : 'N/A'}</span></div>
                    <div>Share of bid depth: <span className="text-foreground">{row?.pct_of_bid_depth != null ? `${row.pct_of_bid_depth.toFixed(1)}%` : 'N/A'}</span></div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              Current Displayed Order Book
              <MethodologyTooltip methodKey="impact_simulation" />
            </h3>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderBookData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                <XAxis
                  dataKey="price"
                  tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                  axisLine={{ stroke: chartTheme.axisLineStroke }}
                  tickLine={false}
                  tickFormatter={(v) => Number(v).toFixed(3)}
                />
                <YAxis
                  tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => formatMoney(v)}
                />
                <Tooltip
                  contentStyle={chartTheme.tooltipContentStyle}
                  formatter={(value: unknown) =>
                    value != null && typeof value === 'number' ? [formatMoney(value), ''] : ['—', '']
                  }
                />
                <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
                <Line
                  type="monotone"
                  dataKey="bids"
                  name="Bid depth"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#10b981' }}
                  connectNulls={false}
                />
                <Line
                  type="monotone"
                  dataKey="asks"
                  name="Ask depth"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#f87171' }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Top 10 levels per side only. Bid/ask depth ratio on the latest snapshot: {formatRatio(snapshot?.bid_ask_depth_ratio)}.
          </p>
        </motion.div>

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
            Tightest bucket: {intradaySummary?.tightest_bucket ?? 'N/A'} • Widest bucket: {intradaySummary?.widest_bucket ?? 'N/A'}
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
