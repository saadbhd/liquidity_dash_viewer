import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Info } from 'lucide-react';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function IntradayLiquidity() {
  const { labels, theme, series } = useReport();
  const { intraday } = series;
  const [selectedPeriod, setSelectedPeriod] = useState('6M');

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  // Normalize to percentage points for charts.
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  // Session distribution data
  const sessionData = intraday.session_periods.map((period) => ({
    period,
    Opening: toPct(intraday.session[period].opening),
    Continuous: toPct(intraday.session[period].continuous),
    Closing: toPct(intraday.session[period].closing),
    Auctions: toPct(intraday.session[period].auctions),
    Other: toPct(intraday.session[period].other ?? 0),
  }));

  const currentSession = sessionData.find((s) => s.period === selectedPeriod);
  const sessionChartData = currentSession
    ? [
        { name: 'Opening', value: currentSession.Opening, color: 'rgba(148, 163, 184, 0.55)' },
        { name: 'Continuous', value: currentSession.Continuous, color: '#38bdf8' },
        { name: 'Closing', value: currentSession.Closing, color: '#34d399' },
        { name: 'Auctions', value: currentSession.Auctions, color: '#fbbf24' },
        { name: 'Other', value: currentSession.Other, color: '#a78bfa' },
      ]
    : [];

  // HHI data
  const hhiData = intraday.session_periods.map((period) => ({
    period,
    hhi: intraday.hhi[period],
  }));

  // Intraday intensity data
  const totalShare = intraday.profile_buckets.reduce((sum, b) => sum + b.avg_share, 0);
  const intensityData = intraday.profile_buckets.map((bucket) => ({
    time: bucket.time,
    value: (bucket.avg_share / totalShare) * 100,
  }));

  // Find top 3 values for highlighting
  const sortedIntensity = [...intensityData].sort((a, b) => b.value - a.value);
  const top3Times = new Set(sortedIntensity.slice(0, 3).map((d) => d.time));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
      className="glass-card rounded-2xl p-6 shadow-2xl mt-6"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            {labels.intraday_title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{labels.intraday_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.intraday.bg} ${theme.badges.intraday.textColor} border border-current/30`}>
          {theme.badges.intraday.text}
        </span>
      </div>

      {/* Session Distribution & HHI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Session Distribution */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-semibold text-slate-300">{labels.session_dist_title}</h4>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">{labels.session_period_label}</span>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-20 h-8 text-xs bg-slate-800 border-slate-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  {intraday.session_periods.map((period) => (
                    <SelectItem key={period} value={period} className="text-xs">
                      {period}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessionChartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Share']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={50}>
                  {sessionChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.session_dist_note}</p>
        </div>

        {/* HHI Chart */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.hhi_title}</h4>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hhiData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="period"
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 1]}
                  tickFormatter={(v) => v.toFixed(1)}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
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
        </div>
      </div>

      {/* Intraday Intensity & Peers HHI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Intraday Intensity */}
        <div className="bg-slate-900/30 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.intraday_intensity_title}</h4>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intensityData} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis
                  dataKey="time"
                  tick={{ fill: '#94a3b8', fontSize: 9 }}
                  axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v.toFixed(0)}%`}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)' }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Share of volume']}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} maxBarSize={20}>
                  {intensityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={top3Times.has(entry.time) ? '#38bdf8' : 'rgba(148, 163, 184, 0.35)'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-2">{labels.intraday_intensity_note}</p>
        </div>

        {/* Peers HHI Table */}
        <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/50">
          <h4 className="text-sm font-semibold text-slate-300 mb-4">{labels.peers_hhi_title}</h4>
          <div className="overflow-auto max-h-52 rounded-lg border border-slate-700/50">
            <Table>
              <TableHeader className="sticky top-0 bg-slate-900/90 z-10">
                <TableRow className="border-slate-700/50 hover:bg-transparent">
                  {labels.peers_hhi_cols.map((col) => (
                    <TableHead key={col} className="text-slate-400 text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {intraday.peers_hhi_rows.map((row) => (
                  <TableRow key={row.ticker} className="border-slate-700/50">
                    <TableCell className="text-slate-300 font-medium text-sm">
                      {row.ticker}
                      {row.interp.you && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full font-semibold">
                          YOU
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right text-slate-200 text-sm">
                      {row.auctions_pct.toFixed(1)}%
                    </TableCell>
                    <TableCell className="text-right text-slate-200 text-sm">
                      {row.hhi.toFixed(3)}
                    </TableCell>
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
          <p className="text-xs text-slate-500 mt-2">{labels.peers_hhi_note}</p>
        </div>
      </div>

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="insight-card mt-6"
      >
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="font-semibold">Key insight:</span>{' '}
            {labels.intraday_insight.replace('Key insight: ', '')}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
