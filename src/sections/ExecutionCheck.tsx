import { motion } from 'framer-motion';
import { Target, TrendingDown, DollarSign, Activity, AlertTriangle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  Cell,
} from 'recharts';

export function ExecutionCheck() {
  const { labels, content, theme, series } = useReport();
  const { order_book, peer_capacity } = series;

  // Prepare order book data
  const bidCumulative = order_book.bids
    .sort((a, b) => b.price - a.price)
    .reduce((acc: number[], bid, index) => {
      const prev = index > 0 ? acc[index - 1] : 0;
      acc.push(prev + bid.value);
      return acc;
    }, []);

  const askCumulative = order_book.asks
    .sort((a, b) => a.price - b.price)
    .reduce((acc: number[], ask, index) => {
      const prev = index > 0 ? acc[index - 1] : 0;
      acc.push(prev + ask.value);
      return acc;
    }, []);

  const orderBookData = Array.from({ length: 10 }, (_, i) => ({
    level: `L${i + 1}`,
    bids: bidCumulative[i] || 0,
    asks: askCumulative[i] || 0,
  }));

  // Peer capacity data
  const capacityData = [
    { ticker: '1828', pct: peer_capacity.bx_ticket_pct_adv_50k, isTarget: true },
    ...peer_capacity.peers.map((p) => ({ ticker: p.ticker, pct: p.pct, isTarget: false })),
  ];

  const formatMoney = (value: number) => {
    if (value >= 1e6) return `HK$${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `HK$${(value / 1e3).toFixed(0)}K`;
    return `HK$${value.toFixed(0)}`;
  };

  const OrderBookTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      const levelIndex = parseInt(label?.replace('L', '') || '1') - 1;
      const bid = order_book.bids.sort((a, b) => b.price - a.price)[levelIndex];
      const ask = order_book.asks.sort((a, b) => a.price - b.price)[levelIndex];
      
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="font-semibold text-slate-200 mb-2">{label}</p>
          {payload.map((entry, index) => {
            const isBid = entry.name === 'Bid cum value';
            const level = isBid ? bid : ask;
            return (
              <div key={index} className="text-sm" style={{ color: entry.color }}>
                <p>{entry.name}: {formatMoney(entry.value)}</p>
                {level && (
                  <p className="text-xs text-slate-400">
                    Price: {level.price.toFixed(3)} • Qty: {level.quantity.toLocaleString()}
                  </p>
                )}
              </div>
            );
          })}
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
      <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50 mb-6">
        <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.order_book_title}</h4>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={orderBookData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
              <XAxis
                dataKey="level"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                tickLine={false}
                label={{ value: 'Book level from top-of-book', position: 'insideBottom', fill: '#64748b', fontSize: 11, dy: 10 }}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => formatMoney(v)}
                label={{ value: 'Cumulative depth (HK$)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
              />
              <Tooltip content={<OrderBookTooltip />} />
              <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
              <Line
                type="monotone"
                dataKey="bids"
                name="Bid cum value"
                stroke="#34d399"
                strokeWidth={2}
                fill="rgba(52, 211, 153, 0.1)"
                dot={{ r: 3, fill: '#34d399' }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="asks"
                name="Ask cum value"
                stroke="#f87171"
                strokeWidth={2}
                fill="rgba(248, 113, 113, 0.1)"
                dot={{ r: 3, fill: '#f87171' }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-500 mt-2">{labels.order_book_note}</p>
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
