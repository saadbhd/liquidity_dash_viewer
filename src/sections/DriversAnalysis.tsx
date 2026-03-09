import { motion } from 'framer-motion';
import { Brain, PieChart as PieIcon, TrendingUp } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import type { Q02Interval, Q02LeadSignal, Q02RegimeItem, Q02RegimeSwitching } from '@/types/report';
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
import { TooltipProvider } from '@/components/ui/tooltip';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const normalizePct = (value: number | null | undefined) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return value <= 1.5 ? value * 100 : value;
};

const formatPct = (value: number | null | undefined, digits = 1) => {
  const pct = normalizePct(value);
  return pct === null ? 'Not available' : `${pct.toFixed(digits)}%`;
};

const formatDays = (value: number | null | undefined) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Not available';
  return `${value.toFixed(1)} days`;
};

const formatNumber = (value: number | null | undefined, digits = 2) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Not available';
  return value.toFixed(digits);
};

const formatInterval = (interval?: Q02Interval | null, kind: 'pct' | 'num' = 'pct', digits = 1) => {
  if (!interval) return 'Not available';
  const formatter = kind === 'pct' ? formatPct : (v: number | null | undefined) => formatNumber(v, digits);
  const median = formatter(interval.median, digits);
  const low = formatter(interval.low, digits);
  const high = formatter(interval.high, digits);
  if (median === 'Not available') return median;
  if (low === 'Not available' || high === 'Not available') return median;
  return `${median} (${low} to ${high})`;
};

const driverLabel = (value?: string | null) => {
  if (!value) return 'Not available';
  if (value === 'company') return 'Company';
  if (value === 'market') return 'Market';
  if (value === 'sector') return 'Sector';
  if (value === 'none') return 'No stable external lead';
  return value;
};

const formatLeadSignal = (lead?: Q02LeadSignal | null) => {
  if (!lead || !lead.lead_factor || lead.lead_factor === 'none') return 'No stable external lead';
  const horizon = lead.lead_horizon_days ? ` (${lead.lead_horizon_days}d)` : '';
  const confidence = lead.lead_confidence != null ? ` • ${formatPct(lead.lead_confidence, 0)}` : '';
  return `${driverLabel(lead.lead_factor)} leads${horizon}${confidence}`;
};

export function DriversAnalysis() {
  const report = useReport();
  const { labels, series, q02, insights } = report;
  const chartTheme = useChartTheme();
  const { drivers } = series;

  const driverModel = q02?.driver_model?.valid ? q02.driver_model : null;

  const pieData = [
    { name: 'Market', value: drivers.share_market ?? 0, color: chartTheme.barSecondary },
    { name: 'Sector', value: drivers.share_sector ?? 0, color: '#10b981' },
    { name: 'Company-Specific', value: drivers.share_idio ?? 0, color: '#8b5cf6' },
  ];

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
        .filter((w) => {
          const s = w.shares! as { share_market?: number; share_sector?: number; share_idio?: number; share_company?: number };
          const idio = s.share_idio ?? s.share_company;
          return Number.isFinite(s.share_market) && Number.isFinite(s.share_sector) && Number.isFinite(idio);
        })
        .sort((a, b) => parseStart(a.period_label) - parseStart(b.period_label))
        .map((w) => {
          const s = w.shares! as { share_market?: number; share_sector?: number; share_idio?: number; share_company?: number };
          const idio = s.share_idio ?? s.share_company ?? 0;
          return {
            period: w.period_label!,
            Market: (s.share_market ?? 0) * 100,
            Sector: (s.share_sector ?? 0) * 100,
            'Company-Specific': idio * 100,
          };
        });
    }

    return drivers.rolling.ordered.map((period, index) => ({
      period,
      Market: drivers.rolling.market[index],
      Sector: drivers.rolling.sector[index],
      'Company-Specific': drivers.rolling.idio[index],
    }));
  })();

  const fallbackRegimeSwitching: Q02RegimeSwitching = {
    valid: true,
    regime_method: 'legacy_regime',
    regimes:
      drivers.regime?.regimes?.map((r): Q02RegimeItem => ({
        id: r.id,
        label: r.label,
        pct_time: r.pct_time,
      })) ?? [],
    transitions: drivers.regime?.transitions ?? [],
    current_regime: drivers.regime?.current_regime ?? 0,
  };

  const regimeSwitching =
    q02?.regime_switching && Array.isArray(q02.regime_switching.regimes)
      ? q02.regime_switching
      : fallbackRegimeSwitching;

  const regimes = Array.isArray(regimeSwitching.regimes) ? regimeSwitching.regimes : [];
  const currentRegime = regimes.find((r) => r.id === regimeSwitching.current_regime) ?? regimes[0] ?? null;
  const hasRegimeCards = regimes.length > 0 && currentRegime;

  const currentProbability = driverModel?.current_regime_probability ?? currentRegime?.current_probability ?? null;
  const currentStayProb = currentRegime && regimeSwitching.transitions?.[currentRegime.id]?.[currentRegime.id];
  const badgeText = currentRegime?.label ?? 'Driver Model';
  const badgeProb = currentProbability != null ? ` • ${formatPct(currentProbability, 0)}` : '';
  const regimeTitle = labels.regime_title || 'Price Driver Regimes';
  const regimeSubtitle = labels.regime_subtitle || (currentRegime
    ? `Current state: ${currentRegime.label}${badgeProb}.`
    : 'Shows which type of driver regime the stock is most likely in, and how stable that state appears to be.');

  const topCards = [
    { title: 'Current state', value: currentRegime?.label ?? 'Not available', note: 'Most likely driver regime now' },
    { title: 'State confidence', value: formatPct(currentProbability), note: 'Probability of current regime' },
    { title: 'Main driver', value: driverLabel(currentRegime?.dominant_driver), note: 'Largest contributor in current regime' },
    { title: 'Stay probability', value: formatPct(currentStayProb), note: 'Chance current state persists next period' },
    { title: 'Expected duration', value: formatDays(currentRegime?.expected_duration_days), note: 'Typical run length of this state' },
    { title: 'Lead signal', value: formatLeadSignal(currentRegime?.lead_signal), note: 'Who tends to move first in this state' },
  ];

  const transitionNote = currentRegime
    ? `${currentRegime.label} is the current state. Probability of staying in the same state next period: ${formatPct(currentStayProb)}.`
    : 'Rows sum to 100%. Each row shows the probability of moving from one state to another.';

  const strips = Array.isArray(labels.drivers_strip) ? labels.drivers_strip : [];
  const takeaways = Array.isArray(labels.drivers_wtd_list) ? labels.drivers_wtd_list.filter(Boolean) : [];

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {labels.drivers_title}
                <SectionTooltip sectionKey="drivers" size="md" />
              </h2>
              <p className="text-sm text-muted-foreground">{labels.drivers_subtitle}</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-xs font-medium text-purple-400">{badgeText}{badgeProb}</span>
          </div>
        </motion.div>

        {strips.length ? (
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {strips.map((item) => (
              <div key={`${item.title}-${item.text}`} className="glass-panel rounded-xl p-4">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">{item.title}</p>
                <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ) : null}

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {topCards.map((card) => (
            <div key={card.title} className="glass-panel rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{card.title}</p>
              <p className="text-base font-semibold text-foreground leading-snug">{card.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{card.note}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <PieIcon className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">
                {labels.drivers_pie_title} <MethodologyTooltip methodKey="share_of_moves" />
              </h3>
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
                      formatter={(value: number) => [formatPct(value), '']}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      formatter={(value, entry: { color?: string }) => (
                        <span className="text-sm" style={{ color: entry.color }}>{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{labels.drivers_pie_note}</p>
            {driverModel?.current_driver_mix ? (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <p className="text-muted-foreground mb-1">Market share</p>
                  <p className="text-foreground font-medium">{formatInterval(driverModel.current_driver_mix.market_share, 'pct')}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <p className="text-muted-foreground mb-1">Sector share</p>
                  <p className="text-foreground font-medium">{formatInterval(driverModel.current_driver_mix.sector_share, 'pct')}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/40 p-3">
                  <p className="text-muted-foreground mb-1">Company share</p>
                  <p className="text-foreground font-medium">{formatInterval(driverModel.current_driver_mix.company_share, 'pct')}</p>
                </div>
              </div>
            ) : null}
            {insights?.drivers?.overall ? (
              <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Driver read</p>
                <p className="text-sm text-foreground leading-relaxed">{insights.drivers.overall}</p>
              </div>
            ) : null}
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <div className="flex items-center justify-between mb-4 gap-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">
                Current Sensitivities <MethodologyTooltip methodKey="beta_market" />
              </h3>
              <span className="text-xs text-muted-foreground">Ranges show uncertainty, not just one point.</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Market link</p>
                <p className="text-lg font-semibold text-foreground">{formatInterval(driverModel?.current_sensitivities?.beta_market, 'num', 2)}</p>
                <p className="text-xs text-muted-foreground mt-2">How strongly the stock tends to move with the market in the current state.</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Sector link</p>
                <p className="text-lg font-semibold text-foreground">{formatInterval(driverModel?.current_sensitivities?.beta_sector, 'num', 2)}</p>
                <p className="text-xs text-muted-foreground mt-2">How strongly the stock tends to move with its sector in the current state.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Driver stability</p>
                <p className="text-sm text-foreground leading-relaxed">{insights?.regime?.current || transitionNote}</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Sensitivity read</p>
                <p className="text-sm text-foreground leading-relaxed">{insights?.drivers?.beta || 'Ranges show whether the current market and sector links look firm or uncertain.'}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4 gap-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground">{labels.rolling_title}</h3>
            </div>
            <span className="text-xs text-muted-foreground">{labels.rolling_note}</span>
          </div>
          <div className="h-72">
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
          {insights?.drivers?.rolling_change ? (
            <p className="text-sm text-muted-foreground mt-3">{insights.drivers.rolling_change}</p>
          ) : null}
        </motion.div>

        {hasRegimeCards ? (
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
            <div className="flex items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    {regimeTitle}
                    <MethodologyTooltip methodKey="regime_switching" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{regimeSubtitle}</p>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Current: {currentRegime?.label ?? 'Not available'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
              {regimes.map((r) => (
                <div
                  key={r.id}
                  className={`p-4 rounded-lg border ${r.id === regimeSwitching.current_regime ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-muted/50 border-border'}`}
                >
                  <div className="flex items-center justify-between mb-3 gap-3">
                    <span className={`text-sm font-medium ${r.id === regimeSwitching.current_regime ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`}>
                      {r.label ?? `Regime ${r.id}`}
                    </span>
                    <span className="text-xs text-muted-foreground">{formatPct(r.pct_time)}</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-muted-foreground">
                    <p>Dominant driver: <span className="text-foreground">{driverLabel(r.dominant_driver)}</span></p>
                    <p>Driver confidence: <span className="text-foreground">{formatPct(r.dominant_driver_probability)}</span></p>
                    <p>Lead signal: <span className="text-foreground">{formatLeadSignal(r.lead_signal)}</span></p>
                    <p>Expected duration: <span className="text-foreground">{formatDays(r.expected_duration_days)}</span></p>
                    <p>Market / Sector / Company: <span className="text-foreground">{formatPct(r.shares?.market?.median)} / {formatPct(r.shares?.sector?.median)} / {formatPct(r.shares?.company?.median)}</span></p>
                    <p>Market beta / Sector beta: <span className="text-foreground">{formatNumber(r.sensitivities?.beta_market?.median)} / {formatNumber(r.sensitivities?.beta_sector?.median)}</span></p>
                    {r.id === regimeSwitching.current_regime ? (
                      <p>Current probability: <span className="text-foreground">{formatPct(r.current_probability)}</span></p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
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
                          return (
                            <TableCell key={`${fromRegime.id}-${toRegime.id}`} className="text-muted-foreground text-sm">
                              <span className={fromIdx === toIdx ? 'text-emerald-600 dark:text-emerald-400 font-medium' : ''}>
                                {formatPct(prob)}
                              </span>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p className="text-xs text-muted-foreground mt-3">{transitionNote}</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Regime overview</p>
                  <p className="text-sm text-foreground leading-relaxed">{insights?.regime?.overall || 'Each regime shows a different mix of market, sector, and company-specific drivers.'}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Current state</p>
                  <p className="text-sm text-foreground leading-relaxed">{insights?.regime?.current || regimeSubtitle}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Transition risk</p>
                  <p className="text-sm text-foreground leading-relaxed">{insights?.regime?.transitions || transitionNote}</p>
                </div>
              </div>
            </div>
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

        {takeaways.length ? (
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">{labels.drivers_wtd_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {takeaways.map((item, idx) => (
                <div key={`${idx}-${item}`} className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}
