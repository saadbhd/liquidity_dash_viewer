import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Calendar, Target } from 'lucide-react';
import { useReport } from '@/context/ReportContext';

const priorityIcons = [
  <Target className="w-4 h-4" key="high" />,
  <Clock className="w-4 h-4" key="medium" />,
  <Calendar className="w-4 h-4" key="low" />,
];

const priorityClasses = [
  'priority-high',
  'priority-medium',
  'priority-low',
];

export function ActionPlan() {
  const { labels, content, theme } = useReport();
  const { columns } = content.action_plan;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`glass-card rounded-2xl p-6 mb-6 shadow-2xl border-l-4 ${theme.borders.action_plan}`}
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{labels.action_plan_title}</h2>
          <p className="text-sm text-muted-foreground">{labels.action_plan_subtitle}</p>
        </div>
      </div>

      {/* Action Plan Columns */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6"
      >
        {columns.map((column, colIndex) => (
          <motion.div
            key={column.priority}
            variants={columnVariants}
            className={`${priorityClasses[colIndex]} p-5`}
          >
            {/* Priority Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`status-badge ${column.badge.bg} ${column.badge.text} border border-current/30`}>
                <span className={`pulse-dot ${column.badge.dot}`} />
                {priorityIcons[colIndex]}
                {column.priority}
              </span>
            </div>

            {/* Action Items */}
            <div className="space-y-4">
              {column.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <p className="text-sm text-slate-100 font-medium leading-relaxed">
                    {item.title}
                  </p>
                  {item.bullets && item.bullets.length > 0 && (
                    <div className="bg-slate-800/50 rounded-lg p-3 space-y-1.5">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <p key={bulletIndex} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
