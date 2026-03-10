import { motion } from 'framer-motion';
import { Brain, PieChart as PieIcon, TrendingUp } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import type {
  DriverMonthlyHistory,
  Q02Interval,
  Q02LeadSignal,
  Q02MonthlyHistoryItem,
  Q02RegimeItem,
  Q02RegimeSwitching,
} from '@/types/report';
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

type ShiftPoint = {
  period: string;
  fullPeriod: string;
  market: number;
  sector: number;
  company: number;
  summary: string;
  dominantLabel: string;
  regimeLabel: string;
};

const normalizePct = (value: number | null | undefined) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return value <= 1.5 ? value * 100 : value;
};

const intervalPctValue = (interval?: Q02Interval | null) => normalizePct(interval?.median);

const formatPct = (value: number | null | undefined, digits = 1) => {
  const pct = normalizePct(value);
  return pct === null ? 'Not available' : `${pct.toFixed(digits)}%`;
};

const formatDays = (value: number | null | undefined) => {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Not available';
  return `${value.toFixed(1)} days`;
};

const driverLabel = (value?: string | null) => {
  if (!value) return 'Not available';
  if (value === 'company') return 'Company-specific';
  if (value === 'market') return 'Market';
  if (value === 'sector') return 'Sector';
  if (value === 'none') return 'No stable lead';
  return value;
};

const buildLeadSignalText = (leadSignal?: Q02LeadSignal | null, fallback?: string | null) => {
  if (fallback) return fallback;
  if (!leadSignal || !leadSignal.lead_factor || leadSignal.lead_factor === 'none') {
    return 'No stable lead signal in the current state.';
  }
  const factor = driverLabel(leadSignal.lead_factor);
  const horizon = leadSignal.lead_horizon_days && Number.isFinite(leadSignal.lead_horizon_days)
    ? ` by about ${leadSignal.lead_horizon_days.toFixed(0)} day${leadSignal.lead_horizon_days === 1 ? '' : 's'}`
    : '';
  return `${factor} moves tend to lead${horizon}.`;
};

const buildShiftPointFromQ02 = (item: Q02MonthlyHistoryItem): ShiftPoint => ({
  period: item.month_short_label || item.month_label || item.month_key || 'Month',
  fullPeriod: item.month_label || item.month_key || item.period_label || 'Month',
  market: intervalPctValue(item.shares?.market_share) ?? 0,
  sector: intervalPctValue(item.shares?.sector_share) ?? 0,
  company: intervalPctValue(item.shares?.company_share) ?? 0,
  summary: item.summary || 'Monthly driver summary not available.',
  dominantLabel: item.dominant_driver_label || 'Mixed',
  regimeLabel: item.regime_label || '',
});

const buildShiftPointFromLegacy = (item: DriverMonthlyHistory): ShiftPoint => ({
  period: item.month_short_label || item.month_label || item.month_key || 'Month',
  fullPeriod: item.month_label || item.month_key || item.period_label || 'Month',
  market: normalizePct(item.share_market) ?? 0,
  sector: normalizePct(item.share_sector) ?? 0,
  company: normalizePct(item.share_company) ?? 0,
  summary: item.summary || 'Monthly driver summary not available.',
  dominantLabel: item.dominant_driver_label || 'Mixed',
  regimeLabel: item.regime_label || '',
});

const monthlyShiftStripText = (points: ShiftPoint[]) => {
  if (!points.length) return 'Monthly driver shift is not available in this report.';
  return points.slice(-3).map((point) => {
    const dominantShare = Math.max(point.market, point.sector, point.company);
    return `${point.period} was ${point.dominantLabel.toLowerCase()} at ${dominantShare.toFixed(1)}%`;
  }).join(', then ');
};

export function DriversAnalysis() {
  const report = useReport();
  const { labels, series, q02, insights } = report;
  const chartTheme = useChartTheme();
  const { drivers } = series;

  const driverModel = q02?.driver_model?.valid ? q02.driver_model : null;
  const currentSummary = driverModel?.current_summary ?? null;

  const q02MonthlyHistory = (Array.isArray(driverModel?.monthly_history) ? driverModel.monthly_history : [])
    .filter((item): item is Q02MonthlyHistoryItem =>
      item != null &&
      (
        Number.isFinite(intervalPctValue(item.shares?.market_share) ?? Number.NaN) ||
        Number.isFinite(intervalPctValue(item.shares?.sector_share) ?? Number.NaN) ||
        Number.isFinite(intervalPctValue(item.shares?.company_share) ?? Number.NaN)
      ),
    );

  const legacyMonthlyHistory = (Array.isArray(drivers.monthly_history) ? drivers.monthly_history : [])
    .filter((item): item is DriverMonthlyHistory =>
      item != null &&
      (
        Number.isFinite(normalizePct(item.share_market) ?? Number.NaN) ||
        Number.isFinite(normalizePct(item.share_sector) ?? Number.NaN) ||
        Number.isFinite(normalizePct(item.share_company) ?? Number.NaN)
      ),
    );

  const currentMarketShare = intervalPctValue(driverModel?.current_driver_mix?.market_share) ?? normalizePct(drivers.share_market) ?? 0;
  const currentSectorShare = intervalPctValue(driverModel?.current_driver_mix?.sector_share) ?? normalizePct(drivers.share_sector) ?? 0;
  const currentCompanyShare = intervalPctValue(driverModel?.current_driver_mix?.company_share) ?? normalizePct(drivers.share_idio) ?? 0;

  const pieData = [
    { name: 'Market', value: currentMarketShare, color: chartTheme.barSecondary },
    { name: 'Sector', value: currentSectorShare, color: '#10b981' },
    { name: 'Company-Specific', value: currentCompanyShare, color: '#f59e0b' },
  ];

  const rollingFallback: ShiftPoint[] = (() => {
    if (drivers.rolling_windows) {
      const parseStart = (label?: string) => {
        if (!label) return Number.POSITIVE_INFINITY;
        const start = label.split(' to ')[0]?.trim();
        const t = start ? Date.parse(start) : Number.NaN;
        return Number.isFinite(t) ? t : Number.POSITIVE_INFINITY;
      };

      return Object.values(drivers.rolling_windows)
        .filter((window) => window.valid && window.period_label && window.shares)
        .sort((a, b) => parseStart(a.period_label) - parseStart(b.period_label))
        .map((window) => {
          const shares = window.shares as { share_market?: number; share_sector?: number; share_idio?: number; share_company?: number };
          const company = shares.share_idio ?? shares.share_company ?? 0;
          return {
            period: window.period_label || 'Period',
            fullPeriod: window.period_label || 'Period',
            market: (shares.share_market ?? 0) * 100,
            sector: (shares.share_sector ?? 0) * 100,
            company: company * 100,
            summary: '',
            dominantLabel: company >= Math.max((shares.share_market ?? 0), (shares.share_sector ?? 0))
              ? 'Company-specific'
              : ((shares.share_market ?? 0) >= (shares.share_sector ?? 0) ? 'Market' : 'Sector'),
            regimeLabel: '',
          };
        });
    }

    return drivers.rolling.ordered.map((period, index) => ({
      period,
      fullPeriod: period,
      market: drivers.rolling.market[index] ?? 0,
      sector: drivers.rolling.sector[index] ?? 0,
      company: drivers.rolling.idio[index] ?? 0,
      summary: '',
      dominantLabel: (drivers.rolling.idio[index] ?? 0) >= Math.max((drivers.rolling.market[index] ?? 0), (drivers.rolling.sector[index] ?? 0))
        ? 'Company-specific'
        : ((drivers.rolling.market[index] ?? 0) >= (drivers.rolling.sector[index] ?? 0) ? 'Market' : 'Sector'),
      regimeLabel: '',
    }));
  })();

  const shiftData = q02MonthlyHistory.length
    ? q02MonthlyHistory.map(buildShiftPointFromQ02)
    : legacyMonthlyHistory.length
      ? legacyMonthlyHistory.map(buildShiftPointFromLegacy)
      : rollingFallback;

  const fallbackRegimeSwitching: Q02RegimeSwitching = {
    valid: true,
    regime_method: 'legacy_regime',
    regimes:
      drivers.regime?.regimes?.map((regime): Q02RegimeItem => ({
        id: regime.id,
        label: regime.label,
        pct_time: regime.pct_time,
      })) ?? [],
    transitions: drivers.regime?.transitions ?? [],
    current_regime: drivers.regime?.current_regime ?? 0,
  };

  const regimeSwitching =
    q02?.regime_switching && Array.isArray(q02.regime_switching.regimes)
      ? q02.regime_switching
      : fallbackRegimeSwitching;

  const regimes = Array.isArray(regimeSwitching.regimes) ? regimeSwitching.regimes : [];
  const currentRegime = regimes.find((regime) => regime.id === regimeSwitching.current_regime) ?? regimes[0] ?? null;
  const hasRegimeCards = regimes.length > 0 && currentRegime;
  const currentProbability = driverModel?.current_regime_probability ?? currentRegime?.current_probability ?? null;

  const regimeIndexById = new Map(regimes.map((regime, index) => [regime.id, index]));
  const stayProbabilityForRegime = (regimeId: number) => {
    const idx = regimeIndexById.get(regimeId);
    return idx === undefined ? null : regimeSwitching.transitions?.[idx]?.[idx] ?? null;
  };

  const currentStayProb = currentRegime ? stayProbabilityForRegime(currentRegime.id) : null;
  const badgeText = currentRegime?.label ?? driverModel?.current_regime_label ?? labels.regime_badge_text ?? 'Current state';
  const driversSubtitle = currentSummary
    ? `${currentSummary.regime_label || badgeText} now; ${currentSummary.dominant_driver_label || driverLabel(currentSummary.dominant_driver)} moves drive ${currentSummary.driver_share_display || 'the active state'}.`
    : labels.drivers_subtitle;
  const regimeTitle = labels.regime_title || 'Current Market State';
  const regimeSubtitle = currentRegime
    ? `${regimes.length} volatility state${regimes.length === 1 ? '' : 's'} visible. Current state: ${currentRegime.label}.`
    : 'Volatility states show how noisy the stock has recently been and how quickly that pattern can change.';
  const transitionNote = currentSummary?.persistence_note || (currentRegime
    ? `${currentRegime.label} is the current ${currentSummary?.state_term || 'state'}. Probability of staying in the same state next period: ${formatPct(currentStayProb)}.`
    : 'Rows sum to 100%. Each row shows the probability of moving from one state to another.');
  const leadNote = buildLeadSignalText(driverModel?.current_lead_signal, currentSummary?.lead_signal_text) || labels.lead_lag_note;

  const generatedStrips = [
    {
      title: 'Current Driver',
      text: currentSummary
        ? `${currentSummary.dominant_driver_label || driverLabel(currentSummary.dominant_driver)} moves dominate now at ${currentSummary.driver_share_display || 'Not available'}; market is ${formatPct(currentMarketShare)}, sector ${formatPct(currentSectorShare)}, and company-specific ${formatPct(currentCompanyShare)}.`
        : labels.drivers_pie_note,
    },
    {
      title: 'Market Regime',
      text: `${badgeText} is active now. ${leadNote} ${currentSummary?.confidence_note || ''}`.trim(),
    },
    {
      title: 'Monthly Driver Shift',
      text: monthlyShiftStripText(shiftData),
    },
  ];
  const strips = Array.isArray(labels.drivers_strip) && labels.drivers_strip.some((item) => item.title === 'Monthly Driver Shift')
    ? labels.drivers_strip
    : generatedStrips;
  const takeaways = Array.isArray(labels.drivers_wtd_list) ? labels.drivers_wtd_list.filter(Boolean) : [];
  const monthlyCards = shiftData.slice(-3);
  const bottomLine = labels.drivers_bottom_line || insights?.drivers?.overall || '';

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-5"
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
              <p className="text-xs text-muted-foreground">{driversSubtitle}</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-xs font-medium text-purple-400">{badgeText}</span>
          </div>
        </motion.div>

        {strips.length ? (
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-1 ${strips.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-3`}
          >
            {strips.map((item) => (
              <div key={`${item.title}-${item.text}`} className="glass-panel rounded-xl p-3">
                <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1.5">{item.title}</p>
                <p className="text-xs text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        ) : null}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <PieIcon className="w-4 h-4 text-slate-500" />
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">
                {labels.drivers_pie_title} <MethodologyTooltip methodKey="share_of_moves" />
              </h3>
            </div>
            <div className="flex justify-center">
              <div className="h-60 w-full max-w-md">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={56}
                      outerRadius={86}
                      paddingAngle={4}
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
                      verticalAlign="bottom"
                      height={34}
                      iconType="circle"
                      formatter={(value, entry: { color?: string }) => (
                        <span className="text-xs" style={{ color: entry.color }}>{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{labels.drivers_pie_note}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded-lg border border-border bg-muted/30 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Market</p>
                <p className="text-base font-semibold text-foreground">{formatPct(currentMarketShare)}</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Sector</p>
                <p className="text-base font-semibold text-foreground">{formatPct(currentSectorShare)}</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Company-Specific</p>
                <p className="text-base font-semibold text-foreground">{formatPct(currentCompanyShare)}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <div className="rounded-lg border border-border bg-muted/20 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{labels.lead_lag_title || 'Lead signal'}</p>
                <p className="text-xs text-foreground leading-relaxed">{leadNote}</p>
              </div>
              <div className="rounded-lg border border-border bg-muted/20 p-3">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">State persistence</p>
                <p className="text-xs text-foreground leading-relaxed">{transitionNote}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4">
            <div className="flex items-center justify-between mb-3 gap-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">{labels.rolling_title || 'Monthly Driver Shift'}</h3>
              </div>
              <span className="text-[11px] text-muted-foreground">{labels.rolling_note}</span>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={shiftData} margin={{ top: 8, right: 10, left: 0, bottom: 16 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                  <XAxis
                    dataKey="period"
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={{ stroke: chartTheme.axisLineStroke }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={chartTheme.tooltipContentStyle}
                    formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, name]}
                    labelFormatter={(_, payload) => payload?.[0]?.payload?.fullPeriod || ''}
                  />
                  <Legend iconType="square" wrapperStyle={{ paddingTop: '8px', fontSize: '12px' }} />
                  <Bar dataKey="market" name="Market" stackId="a" fill={chartTheme.barSecondary} radius={[0, 0, 0, 0]} />
                  <Bar dataKey="sector" name="Sector" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="company" name="Company-Specific" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {monthlyCards.length ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                {monthlyCards.map((item) => (
                  <div key={`${item.period}-${item.fullPeriod}`} className="rounded-lg border border-border bg-muted/20 p-3">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{item.period}</p>
                      <span className="text-[11px] text-muted-foreground">{item.regimeLabel || item.dominantLabel}</span>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed">{item.summary || 'Monthly driver summary not available.'}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.div>
        </div>

        {hasRegimeCards ? (
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 border-l-2 border-amber-500/50">
            <div className="flex items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    {regimeTitle}
                    <MethodologyTooltip methodKey="regime_switching" />
                  </h3>
                  <p className="text-xs text-muted-foreground">{regimeSubtitle}</p>
                </div>
              </div>
              <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Current: {currentRegime?.label ?? 'Not available'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-5">
              {regimes.map((regime) => {
                const stayProbability = stayProbabilityForRegime(regime.id);
                const isCurrent = regime.id === regimeSwitching.current_regime;
                return (
                  <div
                    key={regime.id}
                    className={`rounded-xl border p-4 ${isCurrent ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-muted/30 border-border'}`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className={`text-sm font-semibold ${isCurrent ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
                          {regime.label ?? `State ${regime.id + 1}`}
                        </p>
                        <p className="text-[11px] text-muted-foreground">{formatPct(regime.pct_time)} of sample</p>
                      </div>
                      {isCurrent ? (
                        <span className="text-[11px] px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full">
                          NOW
                        </span>
                      ) : null}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Driver</p>
                        <p className="text-foreground">{driverLabel(regime.dominant_driver)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Expected duration</p>
                        <p className="text-foreground">{formatDays(regime.expected_duration_days)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Market</p>
                        <p className="text-foreground">{formatPct(intervalPctValue(regime.shares?.market))}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Sector</p>
                        <p className="text-foreground">{formatPct(intervalPctValue(regime.shares?.sector))}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Company-Specific</p>
                        <p className="text-foreground">{formatPct(intervalPctValue(regime.shares?.company))}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Effective days</p>
                        <p className="text-foreground">{formatDays(regime.n_days_effective)}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Stay next day</p>
                        <p className="text-foreground">{formatPct(stayProbability)}</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-lg border border-border bg-muted/20 p-3">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Lead signal</p>
                      <p className="text-xs text-foreground leading-relaxed">{buildLeadSignalText(regime.lead_signal)}</p>
                    </div>

                    {isCurrent ? (
                      <p className="mt-3 text-[11px] text-muted-foreground">
                        Current probability {formatPct(regime.current_probability ?? currentProbability)}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-start">
              <div className="overflow-x-auto">
                <h4 className="text-sm font-semibold text-foreground mb-3">{labels.transition_title || 'State Persistence'}</h4>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      {['From \\ To', ...regimes.map((regime) => regime.label ?? `State ${regime.id + 1}`)].map((column) => (
                        <TableHead key={column} className="text-muted-foreground text-xs">
                          {column}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {regimes.map((fromRegime, fromIndex) => (
                      <TableRow key={fromRegime.id} className="border-border">
                        <TableCell className="text-foreground/80 font-medium text-sm">
                          {fromRegime.label ?? `State ${fromRegime.id + 1}`}
                          {fromRegime.id === regimeSwitching.current_regime ? (
                            <span className="ml-2 text-[11px] px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full">
                              NOW
                            </span>
                          ) : null}
                        </TableCell>
                        {regimes.map((toRegime, toIndex) => {
                          const prob = regimeSwitching.transitions?.[fromIndex]?.[toIndex];
                          return (
                            <TableCell key={`${fromRegime.id}-${toRegime.id}`} className="text-muted-foreground text-sm">
                              <span className={fromIndex === toIndex ? 'text-emerald-600 dark:text-emerald-400 font-medium' : ''}>
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

              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-muted/20 p-3">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Current state</p>
                  <p className="text-xs text-foreground leading-relaxed">{insights?.regime?.current || transitionNote}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/20 p-3">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Why it matters</p>
                  <p className="text-xs text-foreground leading-relaxed">
                    {insights?.regime?.overall || bottomLine || 'Volatility states separate calmer trading from stress periods so the current driver read has better context.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 border-l-2 border-amber-500/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{regimeTitle}</h3>
                <p className="text-xs text-muted-foreground">{regimeSubtitle}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">State analysis is not available for this report.</p>
          </motion.div>
        )}

        {takeaways.length ? (
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">{labels.drivers_wtd_title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {takeaways.map((item, index) => (
                <div key={`${index}-${item}`} className="rounded-lg border border-border bg-muted/20 p-3">
                  <p className="text-xs text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </TooltipProvider>
  );
}
