import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Lightbulb, TrendingUp, DollarSign, Activity, Puzzle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const iconMap: Record<string, React.ReactNode> = {
  'Liquidity Score (PCA)': <TrendingUp className="w-4 h-4" />,
  'Trading Cost (Spread)': <DollarSign className="w-4 h-4" />,
  'Capacity (ADV)': <Activity className="w-4 h-4" />,
  'Price Moves: Company vs Market': <Puzzle className="w-4 h-4" />,
};

export function ExecutiveSummary() {
  const { labels, content } = useReport();
  const [animatedBars, setAnimatedBars] = useState(false);

  setTimeout(() => setAnimatedBars(true), 300);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <TooltipProvider>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card rounded-2xl p-6 mb-6 shadow-2xl"
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-sky-400">◆</span>
              {labels.exec_title}
            </h2>
            <p className="text-sm text-slate-400 mt-1">{labels.exec_subtitle}</p>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {content.exec_metrics.map((metric) => (
            <motion.div
              key={metric.title}
              variants={cardVariants}
              className="metric-card bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-5 rounded-xl shadow-lg border border-slate-700/50"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs uppercase text-slate-400 tracking-wider font-medium">
                  {iconMap[metric.title]}
                  {metric.title}
                </div>
                {metric.tooltip && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs font-bold hover:bg-sky-500/30 transition-colors">
                        <Info className="w-3 h-3" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <div className="space-y-1">
                        <p className="font-semibold text-sky-400">{metric.tooltip.title}</p>
                        <p className="text-sm text-slate-300">{metric.tooltip.body}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>

              {/* Value */}
              <div className={`number-lg ${metric.color_value} mb-2`}>
                {metric.value}
                <span className="text-lg font-medium ml-1">{metric.suffix}</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${
                    metric.color_bar.replace('text-', 'bg-')
                  }`}
                  style={{
                    width: animatedBars ? `${Math.min(metric.bar_pct, 100)}%` : '0%',
                  }}
                />
              </div>

              {/* Subtext */}
              <p className="text-xs text-slate-500 leading-relaxed mb-2">{metric.subtext}</p>

              {/* Interpretation Badge */}
              <div className={metric.interpretation.cls}>
                <span>{metric.interpretation.icon}</span>
                <span>{metric.interpretation.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="insight-card mt-6"
        >
          <div className="bg-slate-800/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              {labels.exec_takeaways_title}
            </div>
            <ul className="space-y-2">
              {content.exec_takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </TooltipProvider>
  );
}
