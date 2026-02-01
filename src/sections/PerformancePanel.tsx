import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Lightbulb } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
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

export function PerformancePanel() {
  const { labels, insights, series } = useReport();
  const { returns } = series;
  const { performance: perfInsights } = insights;

  // Prepare chart data
  const chartData = returns.map((r) => ({
    horizon: r.horizon,
    Stock: r.stock,
    Market: r.market,
    Sector: r.sector,
    Peers: r.peers,
  }));

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="font-semibold text-white mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(2)}%
            </p>
          ))}
        </div>
      );
    }
    return null;
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
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{labels.perf_title}</h2>
            <p className="text-sm text-slate-500">{labels.perf_subtitle}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-slate-800 rounded-full">
          <span className="text-xs text-slate-400">Context</span>
        </div>
      </motion.div>

      {/* Performance Summary Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '1M Return', value: returns[0].stock, market: returns[0].market, insight: perfInsights.ytd },
          { label: '3M Return', value: returns[1].stock, market: returns[1].market, insight: perfInsights.three_month },
          { label: '6M Return', value: returns[2].stock, market: returns[2].market, insight: perfInsights.six_month },
          { label: 'YTD Return', value: returns[3].stock, market: returns[3].market, insight: perfInsights.ytd },
        ].map((period) => {
          const isPositive = period.value >= 0;
          const vsMarket = period.value - period.market;
          return (
            <div key={period.label} className="glass-panel rounded-xl p-4">
              <p className="text-xs text-slate-500 mb-2">{period.label}</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {period.value.toFixed(1)}%
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs">
                <span className="text-slate-500">vs Market:</span>
                <span className={vsMarket >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                  {vsMarket >= 0 ? '+' : ''}{vsMarket.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Main Chart */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
              <XAxis
                dataKey="horizon"
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(51, 65, 85, 0.3)' }} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <ReferenceLine y={0} stroke="#475569" />
              <Bar dataKey="Stock" fill="#0ea5e9" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Market" fill="#64748b" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Sector" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Peers" fill="#f59e0b" radius={[4, 4, 0, 0]} maxBarSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Period Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-red-500/50">
          <div className="flex items-start gap-3">
            <TrendingDown className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">3-Month Performance Concern</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{perfInsights.three_month.insight}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Key Takeaway</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{perfInsights.conclusion}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
