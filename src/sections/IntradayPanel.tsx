import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart3, Info, ChevronDown } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
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

export function IntradayPanel() {
  const { labels, series } = useReport();
  const { intraday } = series;
  const [selectedPeriod, setSelectedPeriod] = useState('6M');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  // Normalize to percentage points for charts.
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  // Session data
  const currentSession = intraday.session[selectedPeriod];
  const sessionChartData = [
    { name: 'Opening', value: toPct(currentSession.opening), color: '#64748b' },
    { name: 'Continuous', value: toPct(currentSession.continuous), color: '#0ea5e9' },
    { name: 'Closing', value: toPct(currentSession.closing), color: '#10b981' },
    { name: 'Auctions', value: toPct(currentSession.auctions), color: '#f59e0b' },
    { name: 'Other', value: toPct(currentSession.other ?? 0), color: '#a78bfa' },
  ];

  // HHI data
  const hhiData = intraday.session_periods.map((period) => ({
    period,
    hhi: intraday.hhi[period],
  }));

  // Intensity data
  const totalShare = intraday.profile_buckets.reduce((sum, b) => sum + b.avg_share, 0);
  const intensityData = intraday.profile_buckets.map((bucket) => ({
    time: bucket.time,
    value: (bucket.avg_share / totalShare) * 100,
  }));

  const sortedIntensity = [...intensityData].sort((a, b) => b.value - a.value);
  const top3Times = new Set(sortedIntensity.slice(0, 3).map((d) => d.time));

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
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.intraday_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.intraday_subtitle}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <span className="text-xs font-medium text-amber-400">Moderate Concentration</span>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Session Distribution */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-foreground">{labels.session_dist_title}</h3>
            </div>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-700 transition-colors"
              >
                {selectedPeriod}
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden z-10">
                  {intraday.session_periods.map((period) => (
                    <button
                      key={period}
                      onClick={() => {
                        setSelectedPeriod(period);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2 text-sm text-left hover:bg-slate-700 ${
                        selectedPeriod === period ? 'text-sky-400' : 'text-slate-300'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessionChartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Share']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={50}>
                  {sessionChartData.map((entry, sidx) => (
                    <Cell key={`cell-${sidx}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.session_dist_note}</p>
        </motion.div>

        {/* HHI Chart */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.hhi_title}</h3>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hhiData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="period"
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 1]}
                  tickFormatter={(v) => v.toFixed(1)}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  formatter={(value: number) => [value.toFixed(3), 'HHI']}
                />
                <Line
                  type="monotone"
                  dataKey="hhi"
                  stroke="#f87171"
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#f87171' }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {labels.hhi_note_template.replace('{value}', intraday.hhi['6M'].toFixed(3))}
          </p>
        </motion.div>
      </div>

      {/* Intensity & Peers Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Intraday Intensity */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.intraday_intensity_title}</h3>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intensityData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis
                  dataKey="time"
                  tick={{ fill: '#64748b', fontSize: 9 }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v.toFixed(0)}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Volume']}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} maxBarSize={16}>
                  {intensityData.map((entry, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={top3Times.has(entry.time) ? '#0ea5e9' : '#475569'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.intraday_intensity_note}</p>
        </motion.div>

        {/* Peers HHI Table */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground">{labels.peers_hhi_title}</h3>
          </div>
          <div className="overflow-auto max-h-56 rounded-lg border border-slate-800">
            <Table>
              <TableHeader className="sticky top-0 bg-slate-900/95 z-10">
                <TableRow className="border-slate-800 hover:bg-transparent">
                  {labels.peers_hhi_cols.map((col) => (
                    <TableHead key={col} className="text-slate-500 text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {intraday.peers_hhi_rows.map((row) => (
                  <TableRow key={row.ticker} className="border-slate-800">
                    <TableCell className="text-slate-300 font-medium text-sm">
                      {row.ticker}
                      {row.interp.you && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full">
                          YOU
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right text-slate-400 text-sm">
                      {row.auctions_pct.toFixed(1)}%
                    </TableCell>
                    <TableCell className="text-right text-slate-400 text-sm">
                      {row.hhi.toFixed(3)}
                    </TableCell>
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
          <p className="text-xs text-slate-500 mt-2">{labels.peers_hhi_note}</p>
        </motion.div>
      </div>

      {/* Insight */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 border-l-2 border-amber-500/50">
        <p className="text-sm text-slate-400 leading-relaxed">
          <span className="text-amber-400 font-semibold">Key insight:</span>{' '}
          {labels.intraday_insight.replace('Key insight: ', '')}
        </p>
      </motion.div>
    </motion.div>
  );
}
