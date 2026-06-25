import { motion } from 'framer-motion';
import { Target, TrendingDown, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { formatCompactMoney, getCurrencyCodeLabel, resolveReportCurrency } from '@/lib/currency';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Cell,
  ReferenceLine,
} from 'recharts';

export function ExecutionCheck() {
  const report = useReport();
  const { labels, content, theme, series } = report;
  const { order_book, peer_capacity } = series;
  const reportCurrency = resolveReportCurrency(report);
  const currencyLabel = getCurrencyCodeLabel(reportCurrency);

  const sortedBids = [...order_book.bids].sort((a, b) => b.price - a.price);
  const sortedAsks = [...order_book.asks].sort((a, b) => a.price - b.price);
  const displayedBids = sortedBids.slice(0, 10);
  const displayedAsks = sortedAsks.slice(0, 10);
  const bestBid = displayedBids[0]?.price;
  const bestAsk = displayedAsks[0]?.price;
  const midPrice = bestBid != null && bestAsk != null ? (bestBid + bestAsk) / 2 : (bestBid ?? bestAsk ?? 0);
  const totalBidDepth = displayedBids.reduce((sum, row) => sum + row.value, 0);
  const totalAskDepth = displayedAsks.reduce((sum, row) => sum + row.value, 0);
  const bidAskDepthRatio = totalAskDepth > 0 ? totalBidDepth / totalAskDepth : null;
  let bidDepthRemaining = totalBidDepth;
  const bidProfile = [...displayedBids]
    .sort((a, b) => a.price - b.price)
    .map((row) => {
      const point = {
        price: row.price,
        bidDepth: bidDepthRemaining,
        askDepth: null as number | null,
        side: 'Bid',
        level: row.level,
        quantity: row.quantity,
        levelValue: row.value,
      };
      bidDepthRemaining -= row.value;
      return point;
    });
  let askDepthCumulative = 0;
  const askProfile = [...displayedAsks]
    .sort((a, b) => a.price - b.price)
    .map((row) => {
      askDepthCumulative += row.value;
      return {
        price: row.price,
        bidDepth: null as number | null,
        askDepth: askDepthCumulative,
        side: 'Ask',
        level: row.level,
        quantity: row.quantity,
        levelValue: row.value,
      };
    });
  const orderBookData = [
    ...bidProfile,
    { price: midPrice, bidDepth: 0, askDepth: 0, side: 'Spread', level: 0, quantity: 0, levelValue: 0 },
    ...askProfile,
  ].sort((a, b) => a.price - b.price);

  // Peer capacity data
  const capacityData = [
    { ticker: '1828', pct: peer_capacity.bx_ticket_pct_adv_50k, isTarget: true },
    ...peer_capacity.peers.map((p) => ({ ticker: p.ticker, pct: p.pct, isTarget: false })),
  ];

  const formatMoney = (value: number) => {
    return formatCompactMoney(value, reportCurrency);
  };

  const OrderBookTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      const visibleEntry = payload.find((entry) => entry.value != null);
      const point = visibleEntry?.payload ?? payload[0]?.payload;
      const price = point?.price ?? (typeof label === 'number' ? label : 0);
      const priceLabel = typeof price === 'number' ? price.toFixed(3) : String(price);
      const isBid = point?.side === 'Bid';
      const isAsk = point?.side === 'Ask';
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="font-semibold text-slate-200 mb-2">Price: {priceLabel}</p>
          {point?.side === 'Spread' ? (
            <p className="text-sm text-slate-400">Spread midpoint</p>
          ) : (
            <div className="text-sm" style={{ color: isBid ? '#34d399' : '#fb7185' }}>
              <p>{isBid ? 'Bid depth' : isAsk ? 'Ask depth' : 'Depth'}: {formatMoney(visibleEntry?.value ?? 0)}</p>
              <p className="text-xs text-slate-400">
                Level {point?.level} • Qty: {point?.quantity?.toLocaleString()} • Level value: {formatMoney(point?.levelValue ?? 0)}
              </p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="glass-card rounded-2xl p-6 shadow-2xl mt-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-rose-400" />
            {labels.exec_check_title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{labels.exec_check_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.exec_check.bg} ${theme.badges.exec_check.textColor} border border-current/30`}>
          {theme.badges.exec_check.text}
        </span>
      </div>

      {/* Exec Check Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {content.exec_check_tiles.map((tile, index) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
            className="metric-card bg-slate-900/50 p-5 rounded-xl border border-slate-700/50"
          >
            <div className="text-xs text-slate-400 font-medium mb-2">{tile.title}</div>
            <div className={`text-3xl font-bold ${tile.color} mb-1`}>{tile.value}</div>
            <div className="text-xs text-slate-500">{tile.note}</div>
          </motion.div>
        ))}
      </div>

      {/* Order Book Chart */}
      <div className="bg-slate-950/45 rounded-xl p-5 border border-slate-700/50 mb-6 overflow-hidden">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200 shadow-[0_0_24px_rgba(16,185,129,0.08)]">
            BID
          </div>
          <div className="text-center">
            <h4 className="text-base font-bold text-slate-100">Current Displayed Order Book</h4>
            <p className="text-xs text-slate-500">Top {Math.max(displayedBids.length, displayedAsks.length)} levels per side • spread shown at midpoint</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 py-2 text-sm font-bold text-rose-200 shadow-[0_0_24px_rgba(248,113,113,0.08)]">
            ASK
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={orderBookData} margin={{ top: 12, right: 26, left: 4, bottom: 18 }}>
              <defs>
                <linearGradient id="bidDepthFill" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.42} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.12} />
                </linearGradient>
                <linearGradient id="askDepthFill" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fb7185" stopOpacity={0.12} />
                  <stop offset="100%" stopColor="#fb7185" stopOpacity={0.42} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 5" stroke="rgba(148, 163, 184, 0.12)" vertical={false} />
              <XAxis
                dataKey="price"
                type="number"
                domain={['dataMin', 'dataMax']}
                tick={{ fill: '#94a3b8', fontSize: 10 }}
                axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                tickLine={false}
                tickFormatter={(v) => Number(v).toFixed(3)}
                label={{ value: 'Price', position: 'insideBottom', fill: '#64748b', fontSize: 11, dy: 10 }}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => formatMoney(v)}
                label={{ value: currencyLabel ? `Displayed depth (${currencyLabel})` : 'Displayed depth', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
              />
              <Tooltip content={<OrderBookTooltip />} />
              <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
              <ReferenceLine
                x={midPrice}
                stroke="rgba(148, 163, 184, 0.4)"
                strokeDasharray="4 4"
                label={{ value: 'SPREAD', position: 'bottom', fill: '#cbd5e1', fontSize: 11, fontWeight: 700 }}
              />
              <Area
                type="stepAfter"
                dataKey="bidDepth"
                name="Bid depth"
                stroke="#34d399"
                strokeWidth={2.5}
                fill="url(#bidDepthFill)"
                dot={{ r: 3.5, fill: '#10b981', stroke: '#0f172a', strokeWidth: 1 }}
                activeDot={{ r: 5 }}
                connectNulls={false}
              />
              <Area
                type="stepAfter"
                dataKey="askDepth"
                name="Ask depth"
                stroke="#fb7185"
                strokeWidth={2.5}
                fill="url(#askDepthFill)"
                dot={{ r: 3.5, fill: '#fb7185', stroke: '#0f172a', strokeWidth: 1 }}
                activeDot={{ r: 5 }}
                connectNulls={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          {labels.order_book_note} Bid/ask displayed-depth ratio: {bidAskDepthRatio == null ? 'N/A' : `${bidAskDepthRatio.toFixed(2)}x`}.
        </p>
      </div>

      {/* Peer Capacity & Impact Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peer Capacity Chart */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.peer_capacity_title}</h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={capacityData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="ticker"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                  label={{ value: '% of ADV', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                  formatter={(value: number) => [`${value}%`, '50k as %ADV']}
                />
                <Bar dataKey="pct" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {capacityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.isTarget ? '#38bdf8' : 'rgba(148, 163, 184, 0.45)'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.peer_capacity_note}</p>
        </div>

        {/* Impact Summary Cards */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">{labels.impact_summary_title}</h4>
          <p className="text-xs text-slate-500 mb-4">{labels.impact_summary_subtitle}</p>
          <div className="space-y-3">
            {content.impact_summary_cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`${card.cls} rounded-lg p-3`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-200 font-semibold">{card.title}</div>
                  {index === 0 && <TrendingDown className="w-4 h-4 text-emerald-400" />}
                  {index === 1 && <Activity className="w-4 h-4 text-amber-400" />}
                  {index === 2 && <AlertTriangle className="w-4 h-4 text-red-400" />}
                </div>
                <div className="text-xs text-slate-400 mt-1">{card.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="insight-card mt-6"
      >
        <div className="flex items-start gap-2">
          <DollarSign className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold">Key insight:</span>{' '}
            {labels.exec_check_insight.replace('💡 Key insight: ', '')}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
