import { motion } from 'framer-motion';
import { Brain, PieChart as PieIcon, TrendingUp, HelpCircle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { GLOSSARY } from '@/data/glossary';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import type { Q02RegimeItem, Q02RegimeSwitching } from '@/types/report';
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

const formatPlain = (value: number | null | undefined, digits = 2) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Not available';
  return value.toFixed(digits);
};

const normalizePct = (value: number | null | undefined) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return value <= 1.5 ? value * 100 : value;
};

export function DriversAnalysis() {
  const report = useReport();
  const { labels, series, q02 } = report;
  const chartTheme = useChartTheme();
  const { drivers } = series;

  // Pie data (use theme bar colors for consistency)
  const pieData = [
    { name: 'Market', value: drivers.share_market, color: chartTheme.barSecondary },
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

  // Q02 regime source of truth (with legacy fallback for older files)
  const fallbackRegimeSwitching: Q02RegimeSwitching = {
    valid: true,
    regime_method: 'legacy_regime',
    regimes:
      drivers.regime?.regimes?.map((r): Q02RegimeItem => ({
        id: r.id,
        label: r.label,
        pct_time: r.pct_time,
        mean_ret_pct: r.mean_ret_pct ?? (Math.abs(r.mean_ret) < 2 ? r.mean_ret * 100 : r.mean_ret),
        volatility_pct: r.volatility_pct ?? (Math.abs(r.volatility) < 2 ? r.volatility * 100 : r.volatility),
      })) ?? [],
    transitions: drivers.regime?.transitions ?? [],
    current_regime: drivers.regime?.current_regime ?? 0,
    feature_columns: [],
    methodology: {},
  };

  const regimeSwitching =
    q02?.regime_switching && Array.isArray(q02.regime_switching.regimes)
      ? q02.regime_switching
      : fallbackRegimeSwitching;

  const regimes = Array.isArray(regimeSwitching.regimes) ? regimeSwitching.regimes : [];
  const hasRegimeCards = regimes.length > 0;
  const currentRegime =
    hasRegimeCards
      ? regimes.find((r) => r.id === regimeSwitching.current_regime) ??
        regimes[(regimeSwitching.current_regime as number) ?? 0] ??
        null
      : null;

  const regimeMethod = regimeSwitching.regime_method ?? '';
  const isActivityMethod = regimeMethod === 'activity_day_clustering';
  const regimeTitle = isActivityMethod ? 'Market Activity Regimes' : labels.regime_title;
  const regimeSubtitle = isActivityMethod
    ? 'Activity-based clustering states and how often the market shifts between them.'
    : labels.regime_subtitle;

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
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {labels.drivers_title}
                <MethodologyTooltip methodKey="drivers" size="md" />
              </h2>
              <p className="text-sm text-muted-foreground">{labels.drivers_subtitle}</p>
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
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">{item.title}</p>
              <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Charts Section: Pie + Rolling Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <PieIcon className="w-4 h-4 text-slate-500" />
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">{labels.drivers_pie_title} <MethodologyTooltip methodKey="share_of_moves" /></h3>
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
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">{labels.rolling_title}</h3>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rollingData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                  <XAxis
                    dataKey="period"
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={{ stroke: chartTheme.axisLineStroke }}
                    tickLine={false}
                    orientation="top"
                  />
                  <YAxis
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip contentStyle={chartTheme.tooltipContentStyle} />
                  <Legend iconType="square" wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar dataKey="Market" stackId="a" fill={chartTheme.barSecondary} radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Sector" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Company-Specific" stackId="a" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Regime Switching Section */}
        {hasRegimeCards && currentRegime ? (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  {regimeTitle}
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-muted-foreground hover:text-foreground">
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-popover border border-border">
                      <p className="font-semibold text-sky-600 dark:text-sky-400 text-sm">{GLOSSARY.regime.term}</p>
                      <p className="text-xs text-muted-foreground mt-1">{GLOSSARY.regime.plainLanguage}</p>
                    </TooltipContent>
                  </UITooltip>
                </h3>
                <p className="text-sm text-muted-foreground">{regimeSubtitle}</p>
              </div>
            </div>
            <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Current: {currentRegime.label ?? 'Not available'}
              </span>
            </div>
          </div>

          {/* Dynamic Regime Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
            {regimes.map((r) => {
              const pctTime = normalizePct(r.pct_time);
              const liquidityScore = r.liquidity_score ?? null;
              return (
              <div
                key={r.id}
                className={`p-4 rounded-lg border ${r.id === regimeSwitching.current_regime
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-muted/50 border-border'
                  }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${r.id === regimeSwitching.current_regime ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}>
                    {r.label ?? `Regime ${r.id}`}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {pctTime === null ? 'Not available' : `${pctTime.toFixed(1)}% of time`}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 mb-1">Liquidity Score</p>
                  <p className="text-sm text-slate-300">
                    {liquidityScore === null || !Number.isFinite(liquidityScore)
                      ? 'Not available'
                      : formatPlain(liquidityScore, 1)}
                  </p>
                </div>
              </div>
            );})}
          </div>

          {/* Transition Matrix */}
          <div className="overflow-x-auto">
            <h4 className="text-sm font-semibold text-foreground mb-3">{labels.transition_title}</h4>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  {['From \\ To', ...regimes.map((r) => r.label ?? `Regime ${r.id}`)].map((col) => (
                    <TableHead key={col} className="text-muted-foreground text-xs">
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {regimes.map((fromRegime, fromIdx) => (
                  <TableRow key={fromRegime.id} className="border-border">
                    <TableCell className="text-foreground/80 font-medium text-sm">
                      {fromRegime.label ?? `Regime ${fromRegime.id}`}
                      {fromRegime.id === regimeSwitching.current_regime && (
                        <span className="ml-2 text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full">
                          NOW
                        </span>
                      )}
                    </TableCell>
                    {regimes.map((toRegime, toIdx) => {
                      const prob = regimeSwitching.transitions?.[fromIdx]?.[toIdx];
                      const probPct = prob === null || prob === undefined || !Number.isFinite(prob)
                        ? null
                        : prob <= 1 ? prob * 100 : prob;
                      return (
                      <TableCell key={`${fromRegime.id}-${toRegime.id}`} className="text-muted-foreground text-sm">
                        <span className={fromIdx === toIdx ? 'text-emerald-600 dark:text-emerald-400 font-medium' : ''}>
                          {probPct === null ? 'Not available' : `${probPct.toFixed(1)}%`}
                        </span>
                      </TableCell>
                    );})}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <p className="text-xs text-muted-foreground mt-3">{labels.transition_note_template}</p>
        </motion.div>
        ) : (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{regimeTitle}</h3>
              <p className="text-sm text-muted-foreground">{regimeSubtitle}</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">Regime analysis is not available for this report.</p>
        </motion.div>
        )}
      </motion.div>
    </TooltipProvider>
  );
}
