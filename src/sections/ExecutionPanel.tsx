import { motion } from 'framer-motion';
import { Target, TrendingDown, TrendingUp, Minus, AlertTriangle, DollarSign, Activity } from 'lucide-react';
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

export function ExecutionPanel() {
  const { labels, content, series, meta } = useReport();
  const { order_book, peer_capacity } = series;

  const currencySymbol = meta.market === 'XHKG' ? 'HK$' : meta.market === 'XSES' ? 'S$' : '';

  // Order book data: bids and asks each have their own prices (from report/book_snapshot).
  // Build merged price axis (all unique bid + ask prices, sorted) and cumulative depth with carry-forward.
  const sortedBids = [...order_book.bids].sort((a, b) => b.price - a.price);
  const sortedAsks = [...order_book.asks].sort((a, b) => a.price - b.price);
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

  // Only plot depth at prices where that side has a level; use null elsewhere so no line is drawn.
  const orderBookData = allPrices.map((price) => ({
    price,
    bids: bidPriceToCum.has(price) ? bidPriceToCum.get(price)! : null,
    asks: askPriceToCum.has(price) ? askPriceToCum.get(price)! : null,
  }));

  // Capacity data
  const capacityData = [
    { ticker: '1828', pct: peer_capacity.bx_ticket_pct_adv_50k, isTarget: true },
    ...peer_capacity.peers.map((p) => ({ ticker: p.ticker, pct: p.pct, isTarget: false })),
  ];

  const formatMoney = (value: number) => {
    if (value >= 1e6) return `${currencySymbol}${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${currencySymbol}${(value / 1e3).toFixed(0)}K`;
    return `${currencySymbol}${value.toFixed(0)}`;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.exec_check_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.exec_check_subtitle}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-xs font-medium text-emerald-400">Low Crossing Cost</span>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
        {content.exec_check_tiles.map((tile) => (
          <div key={tile.title} className="glass-panel rounded-xl p-4 text-center">
            <p className="text-xs text-slate-500 mb-1">{tile.title}</p>
            <p className={`text-2xl font-bold ${tile.color}`}>{tile.value}</p>
            <p className="text-xs text-slate-500 mt-1">{tile.note}</p>
          </div>
        ))}
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Book Depth */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.order_book_title}</h3>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderBookData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="price"
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                  tickFormatter={(v) => Number(v).toFixed(3)}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => formatMoney(v)}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  formatter={(value: unknown) => (value != null && typeof value === 'number' ? [formatMoney(value), ''] : ['—', ''])}
                />
                <Legend iconType="line" wrapperStyle={{ paddingTop: '10px' }} />
                <Line
                  type="monotone"
                  dataKey="bids"
                  name="Bid Depth"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#10b981' }}
                  connectNulls={false}
                />
                <Line
                  type="monotone"
                  dataKey="asks"
                  name="Ask Depth"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ r: 3, fill: '#f87171' }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.order_book_note}</p>
        </motion.div>

        {/* Peer Capacity */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.peer_capacity_title}</h3>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={capacityData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
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
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  formatter={(value: number) => [`${value}%`, '50k as %ADV']}
                />
                <Bar dataKey="pct" radius={[4, 4, 0, 0]} maxBarSize={30}>
                  {capacityData.map((entry, cidx) => (
                    <Cell
                      key={`cell-${cidx}`}
                      fill={entry.isTarget ? '#0ea5e9' : '#475569'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.peer_capacity_note}</p>
        </motion.div>
      </div>

      {/* Impact Cards */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-slate-500" />
          {labels.impact_summary_title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.impact_summary_cards.map((card, index) => (
            <div
              key={card.title}
              className={`glass-panel rounded-xl p-4 border-l-2 ${
                index === 0 ? 'border-emerald-500/50 bg-emerald-500/5' :
                index === 1 ? 'border-amber-500/50 bg-amber-500/5' :
                'border-red-500/50 bg-red-500/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{card.title}</span>
                {index === 0 && <TrendingUp className="w-4 h-4 text-emerald-400" />}
                {index === 1 && <Minus className="w-4 h-4 text-amber-400" />}
                {index === 2 && <TrendingDown className="w-4 h-4 text-red-400" />}
              </div>
              <p className="text-xs text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3 italic">
          Note: These estimates are based on the top 10 levels of the order book.
        </p>
      </motion.div>

      {/* Insight */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 border-l-2 border-rose-500/50">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="text-rose-400 font-semibold">Key insight:</span>{' '}
          {labels.exec_check_insight.replace('💡 Key insight: ', '')}
        </p>
      </motion.div>
    </motion.div>
  );
}
