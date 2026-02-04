import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Activity, DollarSign, BarChart3, PieChart, HelpCircle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const { meta, labels, content, series } = useReport();
  const metrics = content.exec_metrics;

  // Map metrics to user-friendly titles
  const titleMap: Record<string, string> = {
    'Liquidity Score (PCA)': labels.metric_liquidity_score,
    'Liquidity Score': labels.metric_liquidity_score,
    'Trading Cost (Spread)': labels.metric_spread,
    'Capacity (ADV)': labels.metric_adv,
    'Average Traded Volume': labels.metric_adv,
    'Price Moves: Company vs Market': labels.metric_drivers
  };

  const liquidityMetric =
    metrics.find((m) => (titleMap[m.title] ?? m.title) === labels.metric_liquidity_score) ?? metrics[0];
  const rankMatch = liquidityMetric?.subtext?.match(/Rank\s+(\d+)\s*\/\s*(\d+)/i);
  const universeRank = rankMatch ? `#${rankMatch[1]}/${rankMatch[2]}` : `—/${meta.universe_total}`;

  const dailyTradesTile = content.liq_tiles.find((t) => t.title.toLowerCase().includes('daily trades'));
  const dailyTrades =
    dailyTradesTile?.value ??
    (Number.isFinite(series.market_comparison.company.trades) ? `${Math.round(series.market_comparison.company.trades)}` : '—');

  const getTrendIcon = (value: string) => {
    if (value.includes('ABOVE') || value.includes('TIGHT') || value.includes('EXCELLENT')) return <TrendingUp className="w-4 h-4" />;
    if (value.includes('BELOW')) return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = (cls: string) => {
    if (cls.includes('good')) return 'text-emerald-600 dark:text-emerald-400';
    if (cls.includes('bad')) return 'text-red-600 dark:text-red-400';
    return 'text-amber-600 dark:text-amber-400';
  };

  const getBgColor = (cls: string) => {
    if (cls.includes('good')) return 'from-emerald-500/10 to-emerald-600/5';
    if (cls.includes('bad')) return 'from-red-500/10 to-red-600/5';
    return 'from-amber-500/10 to-amber-600/5';
  };

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Title Area */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="section-title">Executive Summary</span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            {labels.exec_subtitle} for {meta.company} ({meta.ticker}).
            Data as of {meta.asof_date}.
          </p>
        </motion.div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.title}
              variants={itemVariants}
              className={`glass-panel rounded-xl p-5 card-lift relative overflow-hidden group`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getBgColor(metric.interpretation.cls)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                      {titleMap[metric.title] || metric.title}
                    </span>
                    {metric.tooltip && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-slate-600 hover:text-slate-400 transition-colors">
                            <HelpCircle className="w-3.5 h-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                          <p className="font-semibold text-sky-400 text-sm">{metric.tooltip.title}</p>
                          <p className="text-xs text-slate-300 mt-1">{metric.tooltip.body}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(metric.interpretation.cls)} bg-current/10`}>
                    {getTrendIcon(metric.interpretation.text)}
                    {metric.interpretation.text}
                  </div>
                </div>

                {/* Value */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className={`big-number ${metric.color_value}`}>
                      {metric.value}
                    </span>
                    <span className="text-lg text-slate-500">{metric.suffix}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(metric.bar_pct, 100)}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className={`h-full rounded-full ${metric.color_bar.replace('text-', 'bg-')}`}
                    />
                  </div>
                </div>

                {/* Subtext */}
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">{metric.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaways Bar */}
        <motion.div
          variants={itemVariants}
          className="glass-panel rounded-xl p-5 border-glow"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
              <Activity className="w-5 h-5 text-sky-400" />
            </div>
            <div className="flex-1">
                    <h3 className="text-sm font-semibold text-foreground mb-3">{labels.exec_takeaways_title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {content.exec_takeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground flex-shrink-0">
                      {idx + 1}
                    </span>
                          <p className="text-sm text-muted-foreground leading-relaxed">{takeaway}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: 'Market Cap', value: meta.market_cap_display, icon: DollarSign },
            { label: 'Universe Rank', value: universeRank, icon: BarChart3 },
            { label: 'Peer Count', value: meta.peers_count, icon: PieChart },
            { label: 'Daily Trades', value: dailyTrades, icon: Activity },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-border/60">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
