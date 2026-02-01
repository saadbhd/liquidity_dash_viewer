import { motion } from 'framer-motion';
import { Brain, PieChart as PieIcon, TrendingUp, HelpCircle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { GLOSSARY } from '@/data/glossary';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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

export function DriversAnalysis() {
  const { labels, series } = useReport();
  const { drivers } = series;

  // Pie data
  const pieData = [
    { name: 'Market', value: drivers.share_market, color: '#64748b' },
    { name: 'Sector', value: drivers.share_sector, color: '#10b981' },
    { name: 'Company-Specific', value: drivers.share_idio, color: '#8b5cf6' },
  ];

  // Rolling data (prefer new rolling_windows with date ranges)
  const rollingData = (() => {
    if (drivers.rolling_windows) {
      const parseStart = (label?: string) => {
        if (!label) return Number.POSITIVE_INFINITY;
        const start = label.split(' to ')[0]?.trim();
        const t = start ? Date.parse(start) : Number.NaN;
        return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
      };

      return Object.values(drivers.rolling_windows)
        .filter((w) => w.valid && w.period_label && w.shares)
        .sort((a, b) => parseStart(a.period_label) - parseStart(b.period_label))
        .map((w) => ({
          period: w.period_label!,
          Market: w.shares!.share_market * 100,
          Sector: w.shares!.share_sector * 100,
          'Company-Specific': w.shares!.share_idio * 100,
        }));
    }

    return drivers.rolling.ordered.map((period, index) => ({
      period,
      Market: drivers.rolling.market[index],
      Sector: drivers.rolling.sector[index],
      'Company-Specific': drivers.rolling.idio[index],
    }));
  })();

  // Regime data
  const regime = drivers.regime;
  const currentRegime = regime.regimes[regime.current_regime];



  return (
    <TooltipProvider>
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
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{labels.drivers_title}</h2>
              <p className="text-sm text-slate-500">{labels.drivers_subtitle}</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-xs font-medium text-purple-400">Company-Driven</span>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {labels.drivers_strip.map((item) => (
            <div key={item.title} className="glass-panel rounded-xl p-4">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{item.title}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Charts Section: Pie + Rolling Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <PieIcon className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-white">{labels.drivers_pie_title}</h3>
            </div>
            <div className="flex justify-center">
              <div className="h-64 w-full max-w-md">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {pieData.map((entry, pidx) => (
                        <Cell key={`cell-${pidx}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                      formatter={(value: number) => [`${value.toFixed(1)}%`, '']}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      formatter={(value, entry: any) => (
                        <span className="text-sm" style={{ color: entry.color }}>{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Rolling Chart */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-slate-500" />
                <h3 className="text-sm font-semibold text-white">{labels.rolling_title}</h3>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rollingData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis
                    dataKey="period"
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                    orientation="top"
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
                  <Legend iconType="square" wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar dataKey="Market" stackId="a" fill="#64748b" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Sector" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Company-Specific" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Regime Switching Section - moved after Rolling View */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  {labels.regime_title}
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="font-semibold text-sky-400 text-sm">{GLOSSARY.regime.term}</p>
                      <p className="text-xs text-slate-300 mt-1">{GLOSSARY.regime.plainLanguage}</p>
                    </TooltipContent>
                  </UITooltip>
                </h3>
                <p className="text-sm text-slate-500">{labels.regime_subtitle}</p>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-xs font-medium text-emerald-400">
                Current: {currentRegime.label}
              </span>
            </div>
          </div>

          {/* Regime Characteristics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {regime.regimes.map((r) => (
              <div
                key={r.id}
                className={`p-4 rounded-lg border ${r.id === regime.current_regime
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-slate-800/50 border-slate-700/50'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${r.id === regime.current_regime ? 'text-emerald-400' : 'text-slate-400'}`}>
                    {r.label}
                  </span>
                  <span className="text-xs text-slate-500">{r.pct_time.toFixed(1)}% of time</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Avg Daily Return:</span>
                    <span className={r.mean_ret >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                      {r.mean_ret >= 0 ? '+' : ''}{r.mean_ret.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Volatility:</span>
                    <span className="text-slate-300">{r.volatility.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transition Matrix */}
          <div className="overflow-x-auto">
            <h4 className="text-sm font-semibold text-white mb-3">{labels.transition_title}</h4>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  {labels.transition_cols.map((col) => (
                    <TableHead key={col} className="text-slate-500 text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {regime.regimes.map((fromRegime, fromIdx) => (
                  <TableRow key={fromRegime.id} className="border-slate-800">
                    <TableCell className="text-slate-300 font-medium text-sm">
                      {fromRegime.label}
                      {fromIdx === regime.current_regime && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full">
                          NOW
                        </span>
                      )}
                    </TableCell>
                    {regime.transitions[fromIdx].map((prob, toIdx) => (
                      <TableCell key={toIdx} className="text-slate-400 text-sm">
                        <span className={fromIdx === toIdx ? 'text-emerald-400 font-medium' : ''}>
                          {prob.toFixed(1)}%
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-xs text-slate-500 mt-3">{labels.transition_note_template}</p>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
