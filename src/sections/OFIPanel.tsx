import { motion } from 'framer-motion';
import { Scale, TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
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

export function OFIPanel() {
  const { labels, content, series } = useReport();
  const { ofi_block } = series;

  // Pie data
  const pieData = [
    { name: 'Net buying', value: ofi_block.pie.net_buy_days, color: '#10b981' },
    { name: 'Net selling', value: ofi_block.pie.net_sell_days, color: '#f87171' },
    { name: 'Balanced', value: ofi_block.pie.balanced_days, color: '#64748b' },
  ];

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
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
            <Scale className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.ofi_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.ofi_subtitle}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="text-xs font-medium text-emerald-400">Balanced / Moderate</span>
        </div>
      </motion.div>

      {/* OFI Tiles */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {labels.ofi_tiles.map((tile, index) => {
          const value = ofi_block.tiles_values[index];
          const interpretation = content.ofi_tiles_interpretations[index];
          
          return (
            <div key={tile.title} className="glass-panel rounded-xl p-5">
              <p className="text-xs text-slate-500 mb-2">{tile.title}</p>
              <p className="text-2xl font-bold text-foreground mb-2">{value.value}</p>
              <p className="text-xs text-slate-500 mb-3">{tile.note}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${interpretation.cls}`}>
                {index === 0 && <TrendingUp className="w-3 h-3 inline mr-1" />}
                {index === 1 && <Minus className="w-3 h-3 inline mr-1" />}
                {index === 2 && <TrendingDown className="w-3 h-3 inline mr-1" />}
                {interpretation.text}
              </span>
            </div>
          );
        })}
      </motion.div>

      {/* Table & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* OFI Table */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.ofi_table_title}</h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">{labels.ofi_table_note}</p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  {labels.ofi_table_cols.map((col) => (
                    <TableHead key={col} className="text-slate-500 text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ofi_block.table_rows.map((row) => (
                  <TableRow key={row.period} className="border-slate-800">
                    <TableCell className="text-slate-300 font-medium text-sm">{row.period}</TableCell>
                    <TableCell className={`text-right text-sm font-semibold ${row.avg_ofi.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {row.avg_ofi}
                    </TableCell>
                    <TableCell className="text-right text-slate-400 text-sm">{row.avg_abs}</TableCell>
                    <TableCell>
                      <span className={`text-xs px-2 py-1 rounded-full ${row.interp.cls}`}>
                        {row.interp.text}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            {labels.ofi_corr_note_template.replace('{corr}', ofi_block.corr_value)}
          </p>
        </motion.div>

        {/* Pie Chart & L2 Compact */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-foreground">{labels.ofi_pie_title}</h3>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="40%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                    formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
                  />
                  <Legend
                    verticalAlign="middle"
                    align="right"
                    layout="vertical"
                    iconType="circle"
                    formatter={(value, entry: any) => (
                      <span className="text-sm" style={{ color: entry.color }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-800">
              <div>
                <p className="text-xs text-slate-500">{labels.ofi_pie_stats[0]}</p>
                <p className="text-2xl font-bold text-foreground">{ofi_block.pie.net_buy_days.toFixed(1)}%</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">{labels.ofi_pie_stats[1]}</p>
                <p className="text-2xl font-bold text-foreground">{ofi_block.pie.net_sell_days.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          {/* L2 Compact */}
          <div className="glass-panel rounded-xl p-4 border-l-2 border-indigo-500/50">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-indigo-400" />
              <h4 className="text-sm font-semibold text-foreground">{labels.l2_compact_title}</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{ofi_block.l2_compact_text}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
