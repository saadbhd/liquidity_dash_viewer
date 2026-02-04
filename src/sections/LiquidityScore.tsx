import { motion } from 'framer-motion';
import { Droplets, Users, Zap, TrendingUp, AlertTriangle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
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

export function LiquidityScore() {
  const { labels, content, insights, series, meta, theme } = useReport();
  const chartTheme = useChartTheme();
  const { peers_liquidity } = series;
  const { liquidity: liquidityInsights } = insights;

  // Prepare chart data
  const chartData = peers_liquidity.labels.map((label, index) => ({
    ticker: label,
    score: peers_liquidity.scores[index],
    adv: peers_liquidity.adv[index],
    isTarget: peers_liquidity.is_target[index],
  }));

  const targetRow = chartData.find((d) => d.isTarget) ?? chartData.find((d) => d.ticker === meta.ticker);
  const targetScore = targetRow?.score ?? 0;

  const currencyPrefix = meta.market === 'XHKG' ? 'HK$' : meta.market === 'XSES' ? 'S$' : '';

  const formatMoney = (value: number) => {
    if (value >= 1e9) return `${currencyPrefix}${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `${currencyPrefix}${(value / 1e6).toFixed(1)}M`;
    if (value >= 1e3) return `${currencyPrefix}${(value / 1e3).toFixed(0)}K`;
    return `${currencyPrefix}${value.toFixed(0)}`;
  };

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="chart-tooltip">
          <p className="font-semibold text-foreground">{data.ticker}</p>
          <p className="text-sm text-sky-600 dark:text-sky-400">Score: {data.score.toFixed(1)}</p>
          <p className="text-sm text-muted-foreground">ADV: {formatMoney(data.adv)}</p>
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
          <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center">
            <Droplets className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.liq_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.liq_subtitle}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{theme.badges.liq_section.text}</span>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Metrics Panel */}
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-4">
          {content.liq_tiles.map((tile) => (
            <div
              key={tile.title}
              className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-slate-700 transition-colors"
            >
              <div>
                <p className="text-xs text-slate-500 mb-1">{tile.title}</p>
                <p className="text-2xl font-bold text-foreground">{tile.value}</p>
                <p className="text-xs text-slate-500 mt-1">{tile.sub}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${tile.interp.cls}`}>
                {tile.interp.text}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Chart Panel */}
        <motion.div variants={itemVariants} className="lg:col-span-2 glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-500" />
              Peer Comparison
            </h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-sky-500" />
                <span className="text-muted-foreground">{meta.ticker}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-slate-600" />
                <span className="text-muted-foreground">Peers</span>
              </div>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <XAxis
                  dataKey="ticker"
                  tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                  axisLine={{ stroke: chartTheme.axisLineStroke }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(51, 65, 85, 0.3)' }} />
                <ReferenceLine y={targetScore} stroke="#10b981" strokeDasharray="3 3" />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} maxBarSize={40}>
                  {chartData.map((entry, cellIdx) => (
                    <Cell
                      key={`cell-${cellIdx}`}
                      fill={entry.isTarget ? '#0ea5e9' : '#475569'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Liquidity Score (PCA-based)</span>
            <span className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-emerald-500 border-dashed" />
              Your Score: {targetScore.toFixed(1)}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Full-width insight (to avoid empty space under chart) */}
      <motion.div
        variants={itemVariants}
        className="glass-panel rounded-xl p-5 bg-gradient-to-br from-sky-500/5 to-transparent border border-sky-500/20"
      >
        <div className="flex items-start gap-3">
          <Zap className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">{content.liq_insight}</p>
        </div>
      </motion.div>

      {/* Detailed Insights */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <h4 className="text-sm font-semibold text-foreground mb-4">Detailed Analysis</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Strengths */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <h5 className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Strengths</h5>
            </div>
            <ul className="space-y-2">
              {liquidityInsights.strengths.map((strength, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Concerns */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h5 className="text-sm font-medium text-amber-600 dark:text-amber-400">Areas for Improvement</h5>
            </div>
            <ul className="space-y-2">
              {liquidityInsights.concerns.map((concern, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Peer Context */}
        <div className="mt-4 pt-4 border-t border-slate-800">
          <p className="text-sm text-muted-foreground leading-relaxed">{liquidityInsights.peer_context}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
