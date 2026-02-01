import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
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

export function PeerTraderComposition() {
  const { labels, meta, series } = useReport();
  const { trader_composition } = series;

  const peerData = trader_composition.peer_comparison;

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  // Normalize to percentage points for charts/tables.
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  const currencyPrefix = (currency: string) =>
    currency === 'HKD' ? 'HK$' : currency === 'CNY' ? 'CN¥' : `${currency} `;

  // Prepare chart data
  const chartData = peerData.map(p => ({
    ticker: p.ticker,
    retail: toPct(p.retail_pct),
    mixed: toPct(p.mixed_pct),
    instit: toPct(p.instit_pct),
    isTarget: p.is_target,
  }));

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
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{labels.peer_trader_title}</h2>
            <p className="text-sm text-slate-500">{labels.peer_trader_subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="ticker"
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
              />
              <Bar dataKey="retail" name="Retail %" radius={[4, 4, 0, 0]} maxBarSize={40}>
                {chartData.map((entry, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={entry.isTarget ? '#0ea5e9' : '#475569'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-sky-500" />
            <span className="text-slate-400">{meta.ticker} (You)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slate-600" />
            <span className="text-slate-400">Peers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">🏠 = Retail-heavy (&gt;70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">⚖️ = Mixed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-500">🏦 = Institutional (&gt;20%)</span>
          </div>
        </div>
      </motion.div>

      {/* Detailed Table */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-slate-500 text-xs">Ticker</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Retail %</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Mixed %</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Institutional %</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Avg Trade Size</TableHead>
                <TableHead className="text-slate-500 text-xs">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {peerData.map((row) => (
                <TableRow key={row.ticker} className="border-slate-800">
                  <TableCell className="text-slate-300 font-medium text-sm">
                    {row.ticker}
                    {row.is_target && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full">
                        YOU
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-slate-400 text-sm">{toPct(row.retail_pct).toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-slate-400 text-sm">{toPct(row.mixed_pct).toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-slate-400 text-sm">{toPct(row.instit_pct).toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-slate-400 text-sm">
                    {'avg_trade_size' in row ? currencyPrefix(row.currency) + (row.avg_trade_size / 1000).toFixed(1) : currencyPrefix('HKD') + ((row as any).avg_size / 1000).toFixed(1)}K
                  </TableCell>
                  <TableCell className="text-slate-400 text-sm">
                    {toPct(row.retail_pct) > 70 ? '🏠' : toPct(row.instit_pct) > 20 ? '🏦' : '⚖️'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
}
