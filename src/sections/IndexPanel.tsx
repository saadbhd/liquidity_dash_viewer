import { motion } from 'framer-motion';
import { Flag, CheckCircle, XCircle, TrendingUp, Percent, DollarSign, Activity, Lightbulb } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

const iconMap: Record<string, React.ReactNode> = {
  'Market Cap Rank': <TrendingUp className="w-5 h-5" />,
  'Free Float': <Percent className="w-5 h-5" />,
  'Avg Daily Turnover': <DollarSign className="w-5 h-5" />,
  'Velocity': <Activity className="w-5 h-5" />,
};

export function IndexPanel() {
  const { labels, theme, series } = useReport();
  const { index_block } = series;

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
            <Flag className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.index_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.index_subtitle}</p>
          </div>
        </div>
        <div className={`px-3 py-1.5 ${theme.badges.index_status.bg} border ${theme.badges.index_status.bg.replace('/20', '/30')} rounded-full`}>
          <span className={`text-xs font-medium ${theme.badges.index_status.textColor}`}>{theme.badges.index_status.text}</span>
        </div>
      </motion.div>

      {/* Index Tiles */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {index_block.tiles.map((tile) => (
          <div key={tile.title} className="glass-panel rounded-xl p-4">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              {iconMap[tile.title]}
              <span className="text-xs">{tile.title}</span>
            </div>
            <p className="text-2xl font-bold text-foreground">{tile.value}</p>
            <p className="text-xs text-slate-500 mt-1">{tile.sub}</p>
          </div>
        ))}
      </motion.div>

      {/* Index Table */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                {index_block.table_header.map((header) => (
                  <TableHead key={header} className="text-slate-500 text-xs">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {index_block.table_rows.map((row) => (
                <TableRow key={row.index} className="border-slate-800">
                  <TableCell className="text-slate-300 font-medium text-sm">{row.index}</TableCell>
                  <TableCell>
                    {row.status === 'eligible' ? (
                      <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                        <CheckCircle className="w-3 h-3" />
                        Eligible
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 w-fit">
                        <XCircle className="w-3 h-3" />
                        Ineligible
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-slate-400 text-sm">{row.notes}</TableCell>
                  <TableCell className="text-slate-400 text-sm">
                    {row.gaps.length > 0 ? (
                      <ul className="space-y-1">
                        {row.gaps.map((gap, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 flex-shrink-0" />
                            <span>{gap}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-slate-600">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>

      {/* Insight & Levers */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="glass-panel rounded-xl p-4 border-l-2 border-sky-500/50">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-sky-400 font-semibold">Key insight:</span>{' '}
              {index_block.insight.replace('💡 Key insight: ', '')}
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-semibold text-foreground">{index_block.levers_title}</h4>
          </div>
          <ul className="space-y-2">
            {index_block.levers.map((lever, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-500 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{lever}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
