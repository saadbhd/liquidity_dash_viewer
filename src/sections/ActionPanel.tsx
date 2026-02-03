import { motion } from 'framer-motion';
import { Zap, Target, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReport } from '@/context/ReportContext';

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

const priorityConfig = [
  {
    icon: Target,
    color: 'emerald',
    bgColor: 'from-emerald-500/10 to-emerald-600/5',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
  },
  {
    icon: Clock,
    color: 'amber',
    bgColor: 'from-amber-500/10 to-amber-600/5',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
  },
  {
    icon: Calendar,
    color: 'sky',
    bgColor: 'from-sky-500/10 to-sky-600/5',
    borderColor: 'border-sky-500/30',
    textColor: 'text-sky-400',
  },
];

export function ActionPanel() {
  const { labels, content } = useReport();
  const { columns } = content.action_plan;

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
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.action_plan_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.action_plan_subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Action Plan Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => {
          const config = priorityConfig[colIndex];
          const Icon = config.icon;
          
          return (
            <motion.div
              key={column.priority}
              variants={itemVariants}
              className={`glass-panel rounded-xl overflow-hidden border ${config.borderColor}`}
            >
              {/* Header */}
              <div className={`p-4 bg-gradient-to-br ${config.bgColor}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${config.color}-500/20 flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${config.textColor}`} />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${config.textColor}`}>
                      Priority {colIndex + 1}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{column.priority}</h3>
                  </div>
                </div>
              </div>

              {/* Items */}
              <div className="p-4 space-y-4">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className={`w-4 h-4 ${config.textColor} mt-0.5 flex-shrink-0`} />
                      <h4 className="text-sm font-medium text-slate-200">{item.title}</h4>
                    </div>
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="ml-6 space-y-1.5">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-2 text-xs text-slate-500">
                            <span className="w-1 h-1 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Execution Focus</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The action plan prioritizes maintaining tight spreads and protecting top-of-book quality
              as immediate concerns. Medium-term focus should be on reducing idiosyncratic volatility
              around catalysts and smoothing intraday liquidity. Long-term, establish a monthly
              liquidity monitoring routine and attract institutional investor participation.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
