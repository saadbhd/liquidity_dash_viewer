import { motion } from 'framer-motion';
import { Droplets, CheckCircle, Info } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
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

export function LiquidityHealth() {
  const { labels, content, theme, series } = useReport();
  const { peers_liquidity } = series;

  // Prepare chart data
  const chartData = peers_liquidity.labels.map((label, index) => ({
    ticker: label,
    score: peers_liquidity.scores[index],
    adv: peers_liquidity.adv[index],
    isTarget: peers_liquidity.is_target[index],
  }));

  const formatMoney = (value: number) => {
    if (value >= 1e9) return `S$${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `S$${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `S$${(value / 1e3).toFixed(0)}K`;
    return `S$${value.toFixed(0)}`;
  };

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="font-semibold text-slate-200">{data.ticker}</p>
          <p className="text-sm text-sky-400">Score: {data.score.toFixed(1)}</p>
          <p className="text-sm text-slate-400">ADV: {formatMoney(data.adv)}</p>
          {data.isTarget && (
            <p className="text-xs text-emerald-400 mt-1">★ Target Stock</p>
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
      transition={{ duration: 0.5, delay: 0.3 }}
      className="glass-card rounded-2xl p-6 shadow-2xl"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Droplets className="w-5 h-5 text-sky-400" />
            {labels.liq_title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{labels.liq_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.liq_section.bg} ${theme.badges.liq_section.textColor} border border-current/30`}>
          {theme.badges.liq_section.text}
        </span>
      </div>

      {/* Liquidity Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {content.liq_tiles.map((tile, index) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
            className="metric-card bg-slate-900/50 p-5 rounded-xl border border-slate-700/50"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-slate-400 font-medium">{tile.title}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{tile.value}</div>
            <p className="text-xs text-slate-500 leading-relaxed mb-2">{tile.sub}</p>
            <div className={tile.interp.cls}>
              {tile.interp.icon === '✓' ? <CheckCircle className="w-3 h-3" /> : <Info className="w-3 h-3" />}
              <span>{tile.interp.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Peer Comparison Chart */}
      <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
        <h4 className="text-sm font-semibold text-slate-300 mb-4">Liquidity Score vs Peers (PCA)</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
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
                domain={[0, 100]}
                label={{ value: 'Score (percentile)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.05)' }} />
              <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={50}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isTarget ? '#38bdf8' : 'rgba(148, 163, 184, 0.45)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-sky-400" />
            <span>Target (1828)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded bg-slate-400/45" />
            <span>Peers</span>
          </div>
        </div>
      </div>

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="insight-card mt-5"
      >
        <p className="text-sm text-slate-300 leading-relaxed">
          <span className="text-sky-400 font-semibold">Insight:</span>{' '}
          {content.liq_insight.replace('Key insight: ', '')}
        </p>
      </motion.div>
    </motion.section>
  );
}
