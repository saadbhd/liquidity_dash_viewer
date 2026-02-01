import { motion } from 'framer-motion';
import { Flag, CheckCircle, XCircle, Lightbulb, TrendingUp, Percent, DollarSign, Activity } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const iconMap: Record<string, React.ReactNode> = {
  'Market Cap Rank': <TrendingUp className="w-5 h-5" />,
  'Free Float': <Percent className="w-5 h-5" />,
  'Avg Daily Turnover': <DollarSign className="w-5 h-5" />,
  'Velocity': <Activity className="w-5 h-5" />,
};

export function IndexEligibility() {
  const { labels, theme, series } = useReport();
  const { index_block } = series;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
      className={`glass-card rounded-2xl p-6 shadow-2xl mt-6 border-l-4 ${theme.borders.index}`}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
            <Flag className="w-5 h-5 text-sky-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{labels.index_title}</h3>
            <p className="text-sm text-slate-400 mt-1">{labels.index_subtitle}</p>
          </div>
        </div>
        <span className={`status-badge ${theme.badges.index_status.bg} ${theme.badges.index_status.textColor} border border-current/30`}>
          {theme.badges.index_status.text}
        </span>
      </div>

      {/* Index Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {index_block.tiles.map((tile, index) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.75 + index * 0.1, duration: 0.3 }}
            className="metric-card bg-slate-900/50 p-4 rounded-xl border border-slate-700/50"
          >
            <div className="flex items-center gap-2 text-slate-400 mb-2">
              {iconMap[tile.title]}
              <span className="text-xs font-medium">{tile.title}</span>
            </div>
            <div className="text-2xl font-bold text-white">{tile.value}</div>
            <div className="text-xs text-slate-500 mt-1">{tile.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Index Table */}
      <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50 mb-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700/50 hover:bg-transparent">
                {index_block.table_header.map((header) => (
                  <TableHead key={header} className="text-slate-400 text-xs">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {index_block.table_rows.map((row) => (
                <TableRow key={row.index} className="border-slate-700/50">
                  <TableCell className="text-slate-300 font-medium text-sm">{row.index}</TableCell>
                  <TableCell>
                    {row.status === 'eligible' ? (
                      <span className="status-badge bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        <CheckCircle className="w-3 h-3" />
                        Eligible
                      </span>
                    ) : (
                      <span className="status-badge bg-red-500/20 text-red-400 border border-red-500/30">
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
                      <span className="text-slate-500">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Insight & Levers */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="insight-card"
        >
          <div className="flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-semibold">Key insight:</span>{' '}
              {index_block.insight.replace('💡 Key insight: ', '')}
            </p>
          </div>
        </motion.div>

        <div className="bg-slate-800/50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            {index_block.levers_title}
          </div>
          <ul className="space-y-2">
            {index_block.levers.map((lever, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{lever}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
