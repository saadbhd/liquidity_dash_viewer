import { motion } from 'framer-motion';
import { Activity, TrendingUp } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import type { Q02RegimeItem, Q02RegimeSwitching } from '@/types/report';
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

const intervalPctValue = (interval?: { median?: number | null } | null) => normalizePct(interval?.median);

const driverLabel = (value?: string | null) => {
  if (!value) return 'Not available';
  if (value === 'company') return 'Company-specific';
  if (value === 'market') return 'Market';
  if (value === 'sector') return 'Sector';
  return value;
};

export function MarketStateAnalysis() {
  const report = useReport();
  const { labels, q02, series, insights } = report;
  const { drivers } = series;

  const driverModel = q02?.driver_model?.valid ? q02.driver_model : null;

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

  const badgeText = currentRegime?.label ?? driverModel?.current_regime_label ?? labels.regime_badge_text ?? 'Current state';
  const regimeTitle = labels.regime_title || 'Market State';
  const regimeSubtitle = labels.regime_subtitle || (currentRegime
    ? `${currentRegime.label} is the active state across the observed sample.`
    : 'Market-state analysis is not available for this report.');
  const transitionNote = labels.transition_note_template || 'Rows sum to 100%. Each row shows how states tend to transition across the observed sample.';
  const currentRead = insights?.regime?.current || regimeSubtitle;
  const transitionRead = insights?.regime?.transitions || insights?.regime?.overall || regimeSubtitle;
  const whyItMatters = insights?.regime?.overall || insights?.regime?.trading_implications || regimeSubtitle;

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-5"
      >
        <motion.div variants={itemVariants} className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                {regimeTitle}
                <MethodologyTooltip methodKey="regime_switching" />
              </h2>
              <p className="text-xs text-muted-foreground max-w-5xl">{regimeSubtitle}</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full shrink-0">
            <span className="text-xs font-medium text-emerald-400">{badgeText}</span>
          </div>
        </motion.div>

        {hasRegimeCards ? (
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.95fr)] gap-4 items-start">
              <div className="glass-panel rounded-xl p-5 border-l-2 border-emerald-500/50">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">State Profiles</h3>
                    <p className="text-xs text-muted-foreground">How each observed state looks on driver mix and duration.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {regimes.map((regime) => {
                    const isCurrent = regime.id === regimeSwitching.current_regime;
                    return (
                      <div
                        key={regime.id}
                        className={`rounded-xl border p-4 ${isCurrent ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-border/60 bg-card/20'}`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div>
                            <p className={`text-base font-semibold ${isCurrent ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
                              {regime.label ?? `State ${regime.id + 1}`}
                            </p>
                            <p className="text-xs text-muted-foreground">{formatPct(regime.pct_time)} of the time</p>
                          </div>
                          {isCurrent ? (
                            <span className="text-[11px] px-2.5 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full">
                              NOW
                            </span>
                          ) : null}
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-lg border border-border/50 bg-background/30 p-3">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Avg Duration</p>
                            <p className="text-sm font-medium text-foreground">{formatDays(regime.expected_duration_days)}</p>
                          </div>
                          <div className="rounded-lg border border-border/50 bg-background/30 p-3">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Effective days</p>
                            <p className="text-sm font-medium text-foreground">{formatDays(regime.n_days_effective)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass-panel rounded-xl p-5 border-l-2 border-cyan-500/40 space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">State Insight</h3>
                    <p className="text-xs text-muted-foreground">What the active state is saying now.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl border border-border/60 bg-card/30 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Current read</p>
                    <p className="text-sm leading-6 text-foreground">{currentRead}</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/30 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Transition read</p>
                    <p className="text-sm leading-6 text-foreground">{transitionRead}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.9fr)] gap-4 items-start">
              <div className="glass-panel rounded-xl p-5">
                <h3 className="text-base font-semibold text-foreground mb-4">{labels.transition_title || 'State Transitions'}</h3>
                <div className="overflow-x-auto">
                  <Table className="w-full min-w-[420px]">
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        {['From \\ To', ...regimes.map((regime) => regime.label ?? `State ${regime.id + 1}`)].map((column) => (
                          <TableHead key={column} className="text-muted-foreground text-xs px-4 py-3 first:w-[36%]">
                            {column}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {regimes.map((fromRegime, fromIndex) => (
                        <TableRow key={fromRegime.id} className="border-border">
                          <TableCell className="text-foreground/90 font-medium text-sm px-4 py-3">
                            <div className="inline-flex items-center gap-2">
                              <span>{fromRegime.label ?? `State ${fromRegime.id + 1}`}</span>
                              {fromRegime.id === regimeSwitching.current_regime ? (
                                <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 rounded-full">
                                  NOW
                                </span>
                              ) : null}
                            </div>
                          </TableCell>
                          {regimes.map((toRegime, toIndex) => {
                            const prob = regimeSwitching.transitions?.[fromIndex]?.[toIndex];
                            return (
                              <TableCell key={`${fromRegime.id}-${toRegime.id}`} className="text-sm text-muted-foreground px-4 py-3">
                                <span className={fromIndex === toIndex ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''}>
                                  {formatPct(prob)}
                                </span>
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">{transitionNote}</p>
              </div>

              <div className="glass-panel rounded-xl p-5 border-l-2 border-emerald-500/40 h-full">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Why it matters</p>
                <p className="text-sm leading-7 text-foreground">{whyItMatters}</p>
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
            <p className="text-xs text-foreground/80 leading-relaxed">{whyItMatters}</p>
          </motion.div>
        )}
      </motion.div>
    </TooltipProvider>
  );
}
