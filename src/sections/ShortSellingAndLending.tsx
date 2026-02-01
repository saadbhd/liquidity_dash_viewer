import { motion } from 'framer-motion';
import { TrendingDown, Info, Activity, ShieldAlert } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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

export function ShortSellingAndLending() {
  const { labels, theme, insights, series, meta } = useReport();

  // Only show for Singapore (XSES) reports *with* short selling data.
  const short = series.short_selling;
  if (meta.market !== 'XSES' || !short?.data_available) return null;

  const shortInsights = insights.short_selling;

  const ratioToPct = (v: number) => (v <= 1 ? v * 100 : v);
  const fmtPct = (v: number, digits = 2) => `${ratioToPct(v).toFixed(digits)}%`;

  const p3 = short.periods?.['3M']?.stats;
  const p6 = short.periods?.['6M']?.stats;

  const avg3m = p3?.valid ? p3.avg_short_ratio : 0;
  const max6m = p6?.valid ? p6.max_short_ratio : 0;

  const corr = short.correlation?.valid ? short.correlation.correlation : 0;
  const corrLabel = short.correlation?.interpretation ?? '—';

  const trendText = short.short_interest_change?.interpretation ?? 'No trend data';
  const coverageDays = short.coverage?.n_days_short_data;

  const badgeText = p3?.interpretation ?? theme.badges.short.text;

  const seriesRows = short.short_series?.valid
    ? short.short_series.rows
        .slice()
        .sort((a, b) => a.date.localeCompare(b.date))
        .map((r) => ({
          date: r.date,
          shortPct: ratioToPct(r.short_ratio),
        }))
    : [];

  const peaks = (short.peaks ?? []).slice(0, 5);

  const SectionTitle = labels.short_title ?? 'Short Selling & Lending';
  const SectionSubtitle =
    labels.short_subtitle ??
    'Short participation context and how it relates to returns';

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <TrendingDown className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{SectionTitle}</h2>
            <p className="text-sm text-slate-500">{SectionSubtitle}</p>
          </div>
        </div>
        <span className={`status-badge ${theme.badges.short.bg} ${theme.badges.short.textColor} border border-current/30`}>
          {badgeText}
        </span>
      </motion.div>

      {/* Tiles */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-2">Avg Short% (3M)</p>
          <p className="text-3xl font-bold text-white">{fmtPct(avg3m, 2)}</p>
          <p className="text-xs text-slate-500 mt-1">
            Max: {p3?.valid ? fmtPct(p3.max_short_ratio, 1) : '—'}
          </p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-2">Short% → Return corr</p>
          <p className="text-3xl font-bold text-white">{corr.toFixed(3)}</p>
          <p className="text-xs text-slate-500 mt-1">{corrLabel}</p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-2">Max Short% (6M)</p>
          <p className="text-3xl font-bold text-white">{fmtPct(max6m, 1)}</p>
          <p className="text-xs text-slate-500 mt-1">{p6?.interpretation ?? '—'}</p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-slate-500 mb-2">Coverage</p>
          <p className="text-3xl font-bold text-white">{coverageDays ?? '—'}</p>
          <p className="text-xs text-slate-500 mt-1">days of short data</p>
        </div>
      </motion.div>

      {/* Narrative + chart/table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-semibold text-white">Executive take</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-400 leading-relaxed">
            <p>{shortInsights?.overall ?? 'Short selling context is available for this report.'}</p>
            <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-slate-300">
                <Info className="w-3 h-3 text-sky-400" />
                Trend / change
              </div>
              <p className="text-xs text-slate-500">{shortInsights?.trend ?? trendText}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-white">Short% over time</h3>
          </div>
          {seriesRows.length > 0 ? (
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seriesRows} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: '#64748b', fontSize: 10 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                    hide
                  />
                  <YAxis
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 'dataMax']}
                    tickFormatter={(v) => `${Number(v).toFixed(0)}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(71, 85, 105, 0.5)',
                      borderRadius: '8px',
                    }}
                    formatter={(v: number) => [`${Number(v).toFixed(2)}%`, 'Short%']}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="shortPct"
                    stroke="#34d399"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-slate-500">No short time series available.</p>
          )}
        </motion.div>
      </div>

      {/* Peaks table */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <h3 className="text-sm font-semibold text-white mb-3">Largest short-ratio days</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-slate-500 text-xs">Date</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Short%</TableHead>
                <TableHead className="text-slate-500 text-xs text-right">Return</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {peaks.map((p) => (
                <TableRow key={p.date} className="border-slate-800">
                  <TableCell className="text-slate-300 text-sm">{p.date}</TableCell>
                  <TableCell className="text-right text-slate-400 text-sm">{fmtPct(p.short_ratio, 1)}</TableCell>
                  <TableCell className={`text-right text-sm ${p.return_pct >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {p.return_pct.toFixed(1)}%
                  </TableCell>
                </TableRow>
              ))}
              {peaks.length === 0 ? (
                <TableRow className="border-slate-800">
                  <TableCell className="text-slate-500 text-sm" colSpan={3}>
                    No peak days available.
                  </TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          {shortInsights?.peaks ?? 'Peaks are episodic; use as context alongside spread and OFI stress.'}
        </p>
      </motion.div>
    </motion.section>
  );
}

