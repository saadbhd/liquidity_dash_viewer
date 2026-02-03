import { motion } from 'framer-motion';
import { Scale, Info, TrendingUp, TrendingDown, Minus } from 'lucide-react';
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

export function OrderFlowBalance() {
  const { labels, theme, series, content } = useReport();
  const { ofi_block } = series;

  // Pie chart data
  const pieData = [
    { name: 'Net buying', value: ofi_block.pie.net_buy_days, color: '#34d399' },
    { name: 'Net selling', value: ofi_block.pie.net_sell_days, color: '#f87171' },
    { name: 'Balanced', value: ofi_block.pie.balanced_days, color: 'rgba(148, 163, 184, 0.6)' },
  ];

  const PieTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-sm text-slate-200">
            {payload[0].name}: {payload[0].value.toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="glass-card rounded-2xl p-6 shadow-2xl mt-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            {labels.ofi_title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{labels.ofi_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.ofi.bg} ${theme.badges.ofi.textColor} border border-current/30`}>
          {theme.badges.ofi.text}
        </span>
      </div>

      {/* OFI Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {labels.ofi_tiles.map((tile, index) => {
          const value = ofi_block.tiles_values[index];
          const interpretation = content.ofi_tiles_interpretations[index];
          
          return (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              className="metric-card bg-slate-900/50 p-5 rounded-xl border border-slate-700/50"
            >
              <div className="text-xs text-slate-400 font-medium mb-2">{tile.title}</div>
              <div className="text-2xl font-bold text-white mb-2">{value.value}</div>
              <div className="text-xs text-slate-500 leading-relaxed mb-3">
                {tile.note}
                <span className="text-slate-400">{value.note_suffix.split(' - ')[1]}</span>
              </div>
              <span className={`status-badge ${interpretation.cls} text-xs`}>
                {index === 0 && <TrendingUp className="w-3 h-3" />}
                {index === 1 && <Minus className="w-3 h-3" />}
                {index === 2 && <TrendingDown className="w-3 h-3" />}
                {interpretation.text}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* OFI Table & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* OFI Summary Table */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">{labels.ofi_table_title}</h4>
          <p className="text-xs text-slate-500 mb-4">{labels.ofi_table_note}</p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700/50 hover:bg-transparent">
                  {labels.ofi_table_cols.map((col) => (
                    <TableHead key={col} className="text-slate-400 text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {ofi_block.table_rows.map((row) => (
                  <TableRow key={row.period} className="border-slate-700/50">
                    <TableCell className="text-slate-300 font-medium text-sm">{row.period}</TableCell>
                    <TableCell className={`text-right text-sm font-semibold ${row.avg_ofi.startsWith('+') ? 'text-emerald-300' : 'text-red-300'}`}>
                      {row.avg_ofi}
                    </TableCell>
                    <TableCell className="text-right text-slate-200 text-sm">{row.avg_abs}</TableCell>
                    <TableCell>
                      <span className={`status-badge ${row.interp.cls} text-xs`}>
                        {row.interp.text}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            {labels.ofi_corr_note_template.replace('{corr}', ofi_block.corr_value)}
          </p>
        </div>

        {/* OFI Balance Pie & L2 Compact */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.ofi_pie_title}</h4>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="40%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <Legend
                  verticalAlign="middle"
                  align="right"
                  layout="vertical"
                  iconType="circle"
                  formatter={(value, entry: any) => (
                    <span style={{ color: entry.color, fontSize: '12px' }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Stats */}
          <div className="grid grid-cols-2 gap-4 mt-2 mb-4">
            <div>
              <div className="text-xs text-slate-500">{labels.ofi_pie_stats[0]}</div>
              <div className="text-2xl font-bold text-white">{ofi_block.pie.net_buy_days.toFixed(1)}%</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">{labels.ofi_pie_stats[1]}</div>
              <div className="text-2xl font-bold text-white">{ofi_block.pie.net_sell_days.toFixed(1)}%</div>
            </div>
          </div>

          {/* L2 Compact */}
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-1">
              <Info className="w-3 h-3 text-sky-400" />
              {labels.l2_compact_title}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{ofi_block.l2_compact_text}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
