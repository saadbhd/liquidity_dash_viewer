import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
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

export function PerformanceContext() {
  const { labels, theme, series } = useReport();
  const { returns } = series;

  // Prepare chart data
  const chartData = returns.map((r) => ({
    horizon: r.horizon,
    Stock: (r.stock * 100).toFixed(2),
    Market: (r.market * 100).toFixed(2),
    Sector: (r.sector * 100).toFixed(2),
    Peers: (r.peers * 100).toFixed(2),
  }));

  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="font-semibold text-slate-200 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="glass-card rounded-2xl p-6 shadow-2xl"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            {labels.perf_title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{labels.perf_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.perf.bg} ${theme.badges.perf.textColor} border border-current/30`}>
          {theme.badges.perf.text}
        </span>
      </div>

      {/* Returns Chart */}
      <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
              <XAxis
                dataKey="horizon"
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#94a3b8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
                label={{ value: 'Return (%)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(148, 163, 184, 0.05)' }} />
              <Legend
                wrapperStyle={{ paddingTop: '10px' }}
                iconType="square"
              />
              <Bar dataKey="Stock" fill="#38bdf8" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Market" fill="rgba(148, 163, 184, 0.55)" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Sector" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="Peers" fill="#fbbf24" radius={[4, 4, 0, 0]} maxBarSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="insight-card mt-5"
      >
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-sky-400 font-semibold">Read-through:</span>{' '}
            {labels.perf_insight.replace('💡 Read-through: ', '')}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
