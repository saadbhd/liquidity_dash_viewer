import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Info, Activity, ShieldAlert, HelpCircle } from 'lucide-react';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { getCurrencyCodeLabel, resolveReportCurrency } from '@/lib/currency';
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

const safeText = (v: unknown): string => {
  if (typeof v === 'string') return v;
  if (v && typeof v === 'object') {
    const o = v as Record<string, unknown>;
    if (typeof o.text === 'string') return o.text;
    if (typeof o.insight === 'string') return o.insight;
  }
  return '';
};

function ShortSellingHelp({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`${title} details`}
          className="inline-flex shrink-0 rounded-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        aria-label={title}
        className="w-[28rem] max-w-[calc(100vw-2rem)] max-h-80 overflow-y-auto space-y-2 text-xs text-muted-foreground leading-relaxed"
      >
        <p className="font-semibold text-sm text-sky-600 dark:text-sky-400">{title}</p>
        {children}
      </PopoverContent>
    </Popover>
  );
}

export function ShortSellingAndLending() {
  const report = useReport();
  const { labels, theme, insights, series, meta } = report;
  const chartTheme = useChartTheme();
  const reportCurrency = resolveReportCurrency(report);

  const short = series.short_selling;
  if (!['XSES', 'XHKG', 'XNAS'].includes(meta.market) || !short) return null;
  if (!short.data_available) {
    if (meta.market === 'XSES') return null;
    const source = short.methodology?.source ?? short.coverage?.sources?.join(', ');
    const scope = short.methodology?.coverage_scope ?? short.coverage?.scope;
    return (
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Short Selling</h2>
          </div>
          <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
            Data unavailable
          </span>
        </div>
        <div className="glass-panel rounded-xl p-5 space-y-3 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">
            {short.coverage?.unavailable_reason
              ? 'Short-selling data could not be loaded for this report.'
              : 'No short-selling observations were found for this security in the report window.'}
          </p>
          <p>Missing observations do not establish zero short selling.</p>
          {(source || scope) && (
            <div className="space-y-1 text-xs">
              {source && <p>Source: {source}</p>}
              {scope && <p>Coverage: {scope}</p>}
            </div>
          )}
        </div>
      </section>
    );
  }

  const shortInsights = insights.short_selling;
  const sbl = short.sbl_pool;
  const showSbl = meta.market === 'XSES' && !!sbl?.valid;

  // The analysis payload uses fractional ratios; unavailable denominators stay unknown.
  const ratioToPct = (v: number) => v * 100;
  const fmtPct = (v: number | null | undefined, digits = 2) =>
    v == null || !Number.isFinite(v) ? '—' : `${ratioToPct(v).toFixed(digits)}%`;
  const fmtNum = (n: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 6 }).format(n);

  const periodKeys = Object.keys(short.periods ?? {});
  // Match the report's selected period for its metrics and narrative.
  const primaryPeriodKey =
    short.methodology?.primary_period ??
    (periodKeys.includes("1M") ? "1M" : null) ??
    (periodKeys.length > 1 ? periodKeys[periodKeys.length - 2] : periodKeys[0]) ??
    "1M";
  const p = short.periods?.[primaryPeriodKey]?.stats;
  const avgShort = p?.valid ? p.avg_short_ratio : null;
  const maxShort = p?.valid ? p.max_short_ratio : null;

  const corr = short.correlation?.valid ? short.correlation.correlation : null;
  const corrLabel = short.correlation?.interpretation ?? '—';

  const trendText = short.short_interest_change?.interpretation ?? 'No trend data';
  const coverageDays = short.coverage?.n_days_short_data;

  const badgeText = p?.interpretation ?? theme.badges.short.text;

  const rawRows = short.short_series?.valid
    ? (short.short_series.rows ?? []).slice().sort((a, b) => a.date.localeCompare(b.date))
    : [];
  const hasPrice = rawRows.some((r) => r.close != null && Number.isFinite(r.close));
  const seriesRows = rawRows.map((r) => ({
    date: r.date,
    shortPct: r.short_ratio != null && Number.isFinite(r.short_ratio) ? ratioToPct(r.short_ratio) : null,
    ...(r.close != null && Number.isFinite(r.close) ? { price: r.close } : {}),
  }));
  const currencyLabel = getCurrencyCodeLabel(reportCurrency);
  const priceAxisLabel = `Close Price${currencyLabel ? ` (${currencyLabel})` : ''}`;

  const priceRange = hasPrice
    ? (() => {
      const prices = seriesRows.map((r: { price?: number }) => r.price).filter((p): p is number => p != null);
      const minP = Math.min(...prices);
      const maxP = Math.max(...prices);
      return [minP, maxP] as [number, number];
    })()
    : null;

  const formatAxisDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  };

  const peaks = (short.peaks ?? []).slice(0, 5);

  const SectionTitle = meta.market === 'XSES' ? (labels.short_title ?? 'Short Selling & Lending') : 'Short Selling';
  const SectionSubtitle =
    labels.short_subtitle ??
    'Short participation context and how it relates to returns';
  const ratioBasis = short.methodology?.ratio_basis ?? 'Short-sale shares / total reported shares';
  const coverageScope = short.methodology?.coverage_scope ?? short.coverage?.scope;
  const sourceLabel = short.methodology?.source ?? short.coverage?.sources?.join(', ');
  const limitations = short.methodology?.limitations ?? [];
  const coverageDetail = meta.market === 'XHKG' ? [
    short.coverage?.n_days_official_complete != null ? `${short.coverage.n_days_official_complete} complete official days` : null,
    short.coverage?.n_days_partial != null ? `${short.coverage.n_days_partial} partial official days` : null,
    short.coverage?.n_days_vendor != null ? `${short.coverage.n_days_vendor} vendor days` : null,
    short.coverage?.n_days_legacy != null ? `${short.coverage.n_days_legacy} unverified legacy days` : null,
  ].filter(Boolean).join(' · ') : '';

  const compactSourceHelp = meta.market === 'XHKG' || meta.market === 'XNAS';
  const sourceSummary = meta.market === 'XNAS'
    ? 'FINRA off-exchange short-sale activity.'
    : 'HKEX short-sale activity with supplemental coverage.';
  const sourceDetails = (
    <>
      {sourceLabel && <p>{sourceLabel}{coverageScope ? ` · ${coverageScope}` : ''}</p>}
      {!sourceLabel && coverageScope && <p>{coverageScope}</p>}
      <p>Short%: {ratioBasis}. Unavailable ratios remain gaps.</p>
      {coverageDetail && <p>{coverageDetail}</p>}
      {!!short.coverage?.listing_asof?.length && <p>Listing snapshot: {short.coverage.listing_asof.join(', ')}.</p>}
      {limitations.map((limitation, index) => <p key={index}>{limitation}</p>)}
    </>
  );

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
            <TrendingDown className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              {SectionTitle}
              <SectionTooltip sectionKey="short" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">{SectionSubtitle}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center justify-center px-5 py-2 rounded-full border text-sm font-medium ${theme.badges.short.bg} ${theme.badges.short.textColor} border-current/30`}
        >
          {safeText(badgeText) || theme.badges.short.text}
        </span>
      </motion.div>

      {(sourceLabel || coverageScope || coverageDetail || limitations.length > 0) && (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-4 space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-foreground">Source and coverage</p>
            {compactSourceHelp && (
              <ShortSellingHelp title="Short-selling source and coverage">
                {sourceDetails}
              </ShortSellingHelp>
            )}
          </div>
          {compactSourceHelp ? <p>{sourceSummary}</p> : sourceDetails}
        </motion.div>
      )}

      {/* Tiles */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">Avg Short% ({primaryPeriodKey}) <MethodologyTooltip methodKey="short_ratio" /></p>
          <p className="text-3xl font-bold text-foreground">{fmtPct(avgShort, 2)}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Max: {p?.valid ? fmtPct(p.max_short_ratio, 1) : '—'}
          </p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">Short% → Return corr <MethodologyTooltip methodKey="correlation_short_return" /></p>
          <p className="text-3xl font-bold text-foreground">{corr != null && Number.isFinite(corr) ? corr.toFixed(3) : '—'}</p>
          <p className="text-xs text-muted-foreground mt-1">{corrLabel}</p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2">Max Short% ({primaryPeriodKey})</p>
          <p className="text-3xl font-bold text-foreground">{fmtPct(maxShort, 1)}</p>
          <p className="text-xs text-muted-foreground mt-1">{p?.interpretation ?? '—'}</p>
        </div>

        <div className="glass-panel rounded-xl p-4">
          <p className="text-xs text-muted-foreground mb-2">Coverage</p>
          <p className="text-3xl font-bold text-foreground">{coverageDays ?? '—'}</p>
          <p className="text-xs text-muted-foreground mt-1">days of short data</p>
          {short.coverage?.n_days_valid_ratio != null && <p className="text-xs text-muted-foreground mt-1">{short.coverage.n_days_valid_ratio} days with a valid share ratio</p>}
        </div>
      </motion.div>

      {/* Narrative + chart/table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-sm font-semibold text-foreground">Executive take</h3>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>{safeText(shortInsights?.overall) || 'Short selling context is available for this report.'}</p>
            {showSbl ? (
              <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-slate-300">
                  <Info className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                  SBL lending pool risk (if borrowed shares were sold)
                </div>
                <p className="text-xs text-muted-foreground">
                  Pool size is {fmtNum(sbl!.lending_pool ?? 0)} shares ({new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(Number(sbl!.lending_pool_value ?? 0))}), which is{' '}
                  {(sbl!.pool_as_pct_adv ?? 0).toFixed(1)}% of 20D ADV (~{(sbl!.days_to_liquidate ?? 0).toFixed(2)} days). Hypothetical full-pool sale
                  impact: ~{((sbl!.estimated_impact_pct ?? 0) * 100).toFixed(2)}%. {sbl!.impact_interpretation ?? ''}
                </p>
              </div>
            ) : null}
            <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-slate-300">
                <Info className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                Trend / change
              </div>
              <p className="text-xs text-muted-foreground">{safeText(shortInsights?.trend) || trendText}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 min-h-[380px] flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">Short% over time</h3>
            {compactSourceHelp && (
              <ShortSellingHelp title="Short% over time">
                <p>Short%: {ratioBasis}.</p>
                <p>Unavailable ratios remain gaps.</p>
                {coverageScope && <p>{coverageScope}</p>}
              </ShortSellingHelp>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {compactSourceHelp ? 'Short%' : `Short% (${ratioBasis})`}
            </span>
            {hasPrice ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {priceAxisLabel}
              </span>
            ) : null}
          </div>
          {seriesRows.length > 0 ? (
            <div className="h-72 min-h-[280px] flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={seriesRows} margin={{ top: 10, right: hasPrice ? 64 : 20, left: 28, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                    axisLine={{ stroke: chartTheme.axisLineStroke }}
                    tickLine={false}
                    tickFormatter={formatAxisDate}
                    interval={seriesRows.length <= 20 ? 0 : undefined}
                  />
                  <YAxis
                    yAxisId="left"
                    tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 'dataMax']}
                    tickFormatter={(v) => `${Number(v).toFixed(0)}%`}
                    label={{
                      value: 'Short %',
                      angle: -90,
                      position: 'left',
                      dx: -8,
                      fill: chartTheme.tickFill,
                      fontSize: 11,
                    }}
                  />
                  {hasPrice && priceRange ? (
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      width={72}
                      tick={{ fill: chartTheme.tickFill, fontSize: 10 }}
                      tickMargin={8}
                      axisLine={false}
                      tickLine={false}
                      domain={[priceRange[0], priceRange[1]]}
                      tickFormatter={(v) => Number(v).toFixed(3)}
                      label={{
                        value: 'Price',
                        angle: 90,
                        position: 'right',
                        offset: 8,
                        fill: chartTheme.tickFill,
                        fontSize: 10,
                      }}
                    />
                  ) : null}
                  <Tooltip
                    contentStyle={chartTheme.tooltipContentStyle}
                    formatter={(v: number, name: string) =>
                      name === 'price'
                        ? [Number(v).toFixed(3), priceAxisLabel]
                        : [`${Number(v).toFixed(2)}%`, compactSourceHelp ? 'Short%' : `Short % (${ratioBasis})`]
                    }
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="shortPct"
                    stroke="#34d399"
                    strokeWidth={2}
                    dot={false}
                    connectNulls={false}
                    activeDot={{ r: 4 }}
                  />
                  {hasPrice ? (
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="price"
                      stroke="#f59e0b"
                      strokeWidth={1.5}
                      dot={false}
                      activeDot={{ r: 3 }}
                    />
                  ) : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No short time series available.</p>
          )}
        </motion.div>
      </div>

      {/* SBL Lending Pool block (only when available) */}
      {showSbl ? (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-amber-500/50">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-1">SBL Lending Pool (Borrow Availability) <MethodologyTooltip methodKey="sbl_pool" /></h3>
              <p className="text-xs text-muted-foreground">
                This indicates how much stock is available for lending/borrowing and the potential liquidity overhang in a stress scenario.
              </p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              {sbl!.liquidity_risk ?? 'SBL data available'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-panel rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Pool Size</p>
              <p className="text-2xl font-bold text-foreground">{fmtNum(sbl!.lending_pool)}</p>
              <p className="text-xs text-muted-foreground mt-1">shares</p>
            </div>

            <div className="glass-panel rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Pool Value</p>
              <p className="text-2xl font-bold text-foreground">
                {new Intl.NumberFormat('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(Number(sbl!.lending_pool_value ?? 0))}
              </p>
              <p className="text-xs text-muted-foreground mt-1">at latest price {(sbl!.latest_price ?? 0).toFixed(3)}</p>
            </div>

            <div className="glass-panel rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Lending / Borrowing Rate</p>
              <p className="text-2xl font-bold text-foreground">
                {(sbl!.lending_rate_pct ?? 0).toFixed(2)}% / {(sbl!.borrowing_rate_pct ?? 0).toFixed(2)}%
              </p>
              <p className="text-xs text-muted-foreground mt-1">annualized</p>
            </div>

            <div className="glass-panel rounded-xl p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-2">Pool vs ADV</p>
              <p className="text-2xl font-bold text-foreground">{(sbl!.pool_as_pct_adv ?? 0).toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground mt-1">{(sbl!.days_to_liquidate ?? 0).toFixed(2)} days to liquidate</p>
            </div>
          </div>

          <div className="mt-4 bg-slate-900/40 border border-slate-800 rounded-lg p-3">
            <p className="text-xs text-muted-foreground">
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Hypothetical impact:</span>{' '}
              ~{((sbl!.estimated_impact_pct ?? 0) * 100).toFixed(2)}% if the entire pool was sold.{' '}
              {sbl!.impact_interpretation ?? ''}
            </p>
          </div>
        </motion.div>
      ) : null}

      {/* Peaks table */}
      {peaks.length > 0 ? (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">Largest short-ratio days</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableHead className="text-muted-foreground text-xs">Date</TableHead>
                  <TableHead className="text-muted-foreground text-xs text-right">Short%</TableHead>
                  <TableHead className="text-muted-foreground text-xs text-right">Return</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {peaks.map((p) => (
                  <TableRow key={p.date} className="border-slate-800">
                    <TableCell className="text-slate-300 text-sm">{p.date}</TableCell>
                    <TableCell className="text-right text-slate-400 text-sm">{fmtPct(p.short_ratio, 1)}</TableCell>
                    <TableCell className={`text-right text-sm ${p.return_pct == null ? 'text-muted-foreground' : p.return_pct >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                      {p.return_pct != null && Number.isFinite(p.return_pct) ? `${p.return_pct.toFixed(1)}%` : '—'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {safeText(shortInsights?.peaks) || 'Peaks are episodic; use as context alongside spread and OFI stress.'}
          </p>
        </motion.div>
      ) : null}
    </motion.section>
  );
}
