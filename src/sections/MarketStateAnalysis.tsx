import { motion } from 'framer-motion';
import { Activity, Gauge, HelpCircle, TrendingUp } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import type { PeerAnalysisPeerProfile, Q02RegimeItem, Q02RegimeSwitching } from '@/types/report';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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

const formatPosterior = (value: number | null | undefined, display?: string | null) => {
  if (display) return display;
  if (value === null || value === undefined || !Number.isFinite(value)) return 'Not available';
  if (value >= 0.9995) return '>99.9%';
  if (value <= 0.0005) return '<0.1%';
  return `${(value * 100).toFixed(1)}%`;
};

const regimeMeaning = (label?: string | null) => {
  const text = (label ?? '').toLowerCase();
  if (text.includes('calm')) {
    return 'Quiet price action, lower jump risk, and easier trading conditions.';
  }
  if (text.includes('normal')) {
    return 'Typical day-to-day trading conditions without clear stress.';
  }
  if (text.includes('stressed')) {
    return 'More fragile trading conditions: volatility, spread, activity, or liquidity stress is higher than usual.';
  }
  if (text.includes('jump')) {
    return 'Tail-risk days where abnormal return or residual shocks are more visible.';
  }
  if (text.includes('transition')) {
    return 'The model does not have a clean enough read to assign one dominant state.';
  }
  return 'A statistically inferred trading environment for this stock.';
};

const metricValue = (regime: Q02RegimeItem, key: string) => {
  const metrics = regime.metrics ?? regime.metrics_median ?? {};
  const value = metrics[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
};

const formatTicks = (value: number | null) => (
  value === null ? 'N/A' : `${value.toFixed(1)} ticks`
);

const activityScore = (regime: Q02RegimeItem) => {
  const values = [metricValue(regime, 'log_notional'), metricValue(regime, 'log_trade_count')]
    .filter((value): value is number => value !== null);
  if (!values.length) return null;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

const relativeLabel = (
  value: number | null,
  values: Array<number | null>,
  labels: { low: string; mid: string; high: string },
) => {
  const clean = values.filter((item): item is number => item !== null && Number.isFinite(item));
  if (value === null || clean.length < 2) return 'N/A';
  const min = Math.min(...clean);
  const max = Math.max(...clean);
  if (Math.abs(max - min) < 1e-12) return labels.mid;
  const position = (value - min) / (max - min);
  if (position >= 0.67) return labels.high;
  if (position <= 0.33) return labels.low;
  return labels.mid;
};

const peerProfileLabel = (profile: PeerAnalysisPeerProfile) => {
  const identity = profile.identity ?? {};
  const name = identity.company_name || identity.ticker || 'N/A - data unavailable';
  const ticker = identity.ticker;
  return ticker && !String(name).includes(String(ticker)) ? `${name} (${ticker})` : String(name);
};


export function MarketStateAnalysis() {
  const report = useReport();
  const { labels, q02, series, insights, peer_analysis: peerAnalysis } = report;
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
  const currentSummary = (driverModel?.current_summary ?? {}) as {
    confidence_display?: string | null;
  };
  const jumpRisk = (driverModel?.jump_risk ?? regimeSwitching.jump_risk ?? {}) as {
    current_probability?: number | null;
    current_flag?: boolean;
  };
  const currentPosteriorDisplay = currentSummary.confidence_display
    ?? driverModel?.current_regime_probability_display
    ?? regimeSwitching.current_regime_probability_display
    ?? currentRegime?.current_probability_display;
  const currentPosteriorValue = driverModel?.current_regime_probability
    ?? regimeSwitching.current_regime_probability
    ?? currentRegime?.current_probability;
  const jumpProbability = jumpRisk.current_probability;
  const jumpFlag = jumpRisk.current_flag === true;
  const volatilityValues = regimes.map((regime) => metricValue(regime, 'rolling_vol_10d'));
  const activityValues = regimes.map(activityScore);

  const badgeText = currentRegime?.label ?? driverModel?.current_regime_label ?? labels.regime_badge_text ?? 'Current state';
  const regimeTitle = labels.regime_title || 'Market State';
  const regimeSubtitle = labels.regime_subtitle || (currentRegime
    ? `${currentRegime.label} is the active state across the observed sample.`
    : 'Market-state analysis is not available for this report.');
  const transitionNote = labels.transition_note_template || 'Rows sum to 100%. Each row shows how states tend to transition across the observed sample.';
  const currentRead = insights?.regime?.current || regimeSubtitle;
  const transitionRead = insights?.regime?.transitions || insights?.regime?.overall || regimeSubtitle;
  const whyItMatters = insights?.regime?.overall || insights?.regime?.trading_implications || regimeSubtitle;
  const peerStateProfiles = peerAnalysis?.enabled
    ? (peerAnalysis.peers ?? []).filter((profile) => profile.valid && profile.market_state?.valid)
    : [];

  return (
    <TooltipProvider>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col gap-5"
      >
        <motion.div variants={itemVariants} className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Activity className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">{regimeTitle}</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label="Open market state guide"
                      className="inline-flex size-6 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <HelpCircle className="size-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Market State Guide</DialogTitle>
                      <DialogDescription>
                        Market states group similar trading days using returns, volatility, liquidity/activity, spread, and jump-risk signals. The model can select fewer than four states when the history does not support a richer split.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          ['Calm / Liquid', 'Lower volatility, lower jump risk, and easier trading conditions.'],
                          ['Normal / Active', 'Ordinary trading conditions with no clear stress signal.'],
                          ['Stressed / Illiquid', 'More fragile conditions where volatility, spread, or liquidity stress is higher.'],
                          ['Jump / Tail Shock', 'Abnormal return or residual shocks are more visible than usual.'],
                        ].map(([title, body]) => (
                          <div key={title} className="rounded-lg border border-border/60 bg-card/30 p-3">
                            <p className="text-sm font-semibold text-foreground">{title}</p>
                            <p className="text-xs leading-5 text-muted-foreground mt-1">{body}</p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-lg border border-border/60 bg-card/30 p-4">
                        <p className="text-sm font-semibold text-foreground mb-3">Metrics used</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-5 text-muted-foreground">
                          <p><span className="text-foreground">Return behavior:</span> stock, market, sector, residual, and absolute return.</p>
                          <p><span className="text-foreground">Volatility and risk:</span> rolling volatility, downside volatility, drawdown, skew, and kurtosis.</p>
                          <p><span className="text-foreground">Liquidity and activity:</span> volume, traded notional, trade count, Amihud stress, and spread when available.</p>
                          <p><span className="text-foreground">Jump stress:</span> abnormal return and residual shock score.</p>
                        </div>
                      </div>

                      {regimes.length ? (
                        <div className="space-y-2">
                          <div className="rounded-lg border border-border/60 overflow-hidden">
                            <Table>
                              <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                  <TableHead className="text-xs">State in this report</TableHead>
                                  <TableHead className="text-xs">Meaning</TableHead>
                                  <TableHead className="text-xs">10d vol</TableHead>
                                  <TableHead className="text-xs">Activity</TableHead>
                                  <TableHead className="text-xs">Spread</TableHead>
                                  <TableHead className="text-xs">Jump risk</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {regimes.map((regime, index) => {
                                  const vol10 = metricValue(regime, 'rolling_vol_10d');
                                  const spreadTicks = metricValue(regime, 'spread_ticks');
                                  const activity = activityScore(regime);
                                  return (
                                    <TableRow key={`guide-${regime.id ?? index}`}>
                                      <TableCell className="text-sm font-medium text-foreground">
                                        {regime.label ?? `State ${index + 1}`}
                                      </TableCell>
                                      <TableCell className="text-xs leading-5 text-muted-foreground min-w-[220px]">
                                        {regimeMeaning(regime.label)}
                                      </TableCell>
                                      <TableCell className="text-xs text-muted-foreground">
                                        {formatPct(vol10)}
                                        <span className="block text-[11px]">
                                          {relativeLabel(vol10, volatilityValues, { low: 'lower', mid: 'middle', high: 'higher' })}
                                        </span>
                                      </TableCell>
                                      <TableCell className="text-xs text-muted-foreground">
                                        {relativeLabel(activity, activityValues, { low: 'lower', mid: 'middle', high: 'higher' })}
                                      </TableCell>
                                      <TableCell className="text-xs text-muted-foreground">{formatTicks(spreadTicks)}</TableCell>
                                      <TableCell className="text-xs text-muted-foreground">{formatPct(regime.jump_probability)}</TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </div>
                          <p className="text-xs leading-5 text-muted-foreground">
                            Lower, middle, and higher are ranked against the other states in this same report, not against all stocks.
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-xs text-muted-foreground max-w-5xl">{regimeSubtitle}</p>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full shrink-0">
            <span className="text-xs font-medium text-emerald-400">{badgeText}</span>
          </div>
        </motion.div>

        {peerStateProfiles.length > 0 ? (
          <motion.div variants={itemVariants} className="glass-panel order-last rounded-xl p-5 border-l-2 border-cyan-500/40 space-y-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">Peer State Profiles</h3>
                  <p className="text-xs text-muted-foreground">
                    Active state and inferred state cards for other companies in the peer set.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {peerStateProfiles.map((profile) => {
                const state = profile.market_state;
                const stateCards = state?.state_profiles ?? [];
                const activeCard = stateCards.find((stateCard) => stateCard.label === state?.active_state_label);
                const visibleStateCards = [
                  activeCard,
                  ...stateCards.filter((stateCard) => stateCard.label !== activeCard?.label),
                ].filter((stateCard): stateCard is NonNullable<typeof stateCards[number]> => Boolean(stateCard)).slice(0, 3);
                const detailText = state?.summary || state?.limitation || (state?.transitions?.length ? `Transition matrix available for ${state.transitions.length} inferred states.` : 'No additional peer state summary available.');
                return (
                  <div key={`${profile.identity?.listing_id ?? profile.identity?.ticker}-state-profile`} className="rounded-lg border border-border/60 bg-card/20 px-3 py-2.5">
                    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(170px,1fr)_minmax(190px,1.05fr)_minmax(340px,1.85fr)_minmax(240px,1.3fr)] lg:items-center">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">{peerProfileLabel(profile)}</p>
                        <p className="text-[11px] text-muted-foreground">{profile.identity?.ticker || 'N/A'}</p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Active state</p>
                        <p className="truncate text-xs text-muted-foreground">
                          <span className="font-medium text-cyan-300">{state?.active_state_label ?? 'Not available'}</span>
                          <span className="ml-1">{formatPosterior(state?.active_state_probability, state?.active_state_probability_display)}</span>
                        </p>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">State mix</p>
                        <div className="mt-1 flex min-w-0 flex-wrap gap-1.5 lg:flex-nowrap">
                          {visibleStateCards.map((stateCard, index) => {
                            const isActive = stateCard.label === state?.active_state_label;
                            return (
                              <span
                                key={`${profile.identity?.ticker}-state-pill-${stateCard.id ?? index}`}
                                className={`min-w-0 max-w-[130px] truncate rounded-full border px-2 py-0.5 text-[11px] ${isActive ? 'border-cyan-500/30 bg-cyan-500/15 text-cyan-200' : 'border-border/50 bg-background/30 text-muted-foreground'}`}
                                title={`${stateCard.label ?? `State ${index + 1}`}: ${formatPct(stateCard.pct_time)} time, ${formatDays(stateCard.expected_duration_days)} avg duration`}
                              >
                                {stateCard.label ?? `State ${index + 1}`} · {formatPct(stateCard.pct_time)}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex min-w-0 items-center gap-3">
                        <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground" title={detailText}>{detailText}</p>
                        <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/15 px-2.5 py-1 text-[11px] text-cyan-300">
                          {stateCards.length} states
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : null}

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
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border/60 bg-card/30 p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Current confidence</p>
                      <p className="text-sm font-semibold text-foreground">{formatPosterior(currentPosteriorValue, currentPosteriorDisplay)}</p>
                    </div>
                    <div className="rounded-lg border border-border/60 bg-card/30 p-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-1">Jump Risk</p>
                      <p className="text-sm font-semibold text-foreground">{formatPct(jumpProbability)}</p>
                      <p className={`text-[11px] mt-1 ${jumpFlag ? 'text-amber-500' : 'text-muted-foreground'}`}>
                        {jumpFlag ? 'Latest day flagged' : 'No hard jump flag'}
                      </p>
                    </div>
                  </div>
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
