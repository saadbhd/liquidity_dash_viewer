import { useMemo, useState } from 'react';
import type { NewsBar, NewsMacroComparison, NewsMacroGroup, NewsResponseHorizon } from '@/types/report';
import { StatusPill, sgxTick, typicalWindowMove } from './newsUi';
import { newsCategoryColor } from './newsCategoryStyle';
import { useChartTheme } from '@/hooks/useChartTheme';

type Grouping = keyof NewsMacroComparison['groups'];
type Publication = { document_id: string; short_title: string; published_at: string };
const GROUPS: [Grouping, string][] = [['official_categories', 'Official SGX categories'], ['topics', 'Our broad categories'], ['subjects', 'Related stories']];
const GROUP_HELP: Record<Grouping, string> = {
  official_categories: 'Uses the announcement categories provided by SGX.',
  topics: 'Combines announcements into our eight broad categories.',
  subjects: 'Groups follow-up announcements about the same specific story.',
};
const percent = (value: number | null | undefined, signed = false) => typeof value === 'number' && Number.isFinite(value) ? `${signed && value > 0 ? '+' : ''}${(value * 100).toFixed(2)}%` : '—';
const multiple = (value: number | null | undefined) => typeof value === 'number' && Number.isFinite(value) ? `${value.toFixed(2)}×` : '—';
const control = 'rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground';
const sessionsIn = (horizon: NewsResponseHorizon) => horizon === 'J0' ? 1 : Number(horizon.slice(2)) + 1;
const dayLabel = (count: number) => `${count} event ${count === 1 ? 'day' : 'days'}`;

export function NewsMacroStudy({ comparison, publications, onOpen, bars = [], mic = '' }: { comparison?: NewsMacroComparison | null; publications: Publication[]; onOpen: (id: string) => void; bars?: NewsBar[]; mic?: string }) {
  const { isDark } = useChartTheme();
  const [grouping, setGrouping] = useState<Grouping>('topics');
  const [horizon, setHorizon] = useState<NewsResponseHorizon>('J+1');
  const [metric, setMetric] = useState<'price' | 'volume'>('price');
  const [direction, setDirection] = useState<'largest' | 'smallest'>('largest');
  const [clean, setClean] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showDataDetails, setShowDataDetails] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const sourceMap = useMemo(() => new Map(publications.map((publication) => [publication.document_id, publication])), [publications]);
  const rows = useMemo(() => {
    const minimum = comparison?.minimum_sessions ?? 3;
    return (comparison?.groups[grouping] || []).map((group) => {
      const window = group.horizons[horizon];
      const stats = window?.[clean ? 'clean' : 'all'];
      const value = metric === 'price' ? stats?.median_abs_return : stats?.median_volume_ratio;
      const count = (metric === 'price' ? stats?.price_samples : stats?.volume_samples) ?? 0;
      const eligible = typeof value === 'number' && count >= minimum;
      return { group, window, stats, value, count, eligible };
    }).sort((a, b) => Number(b.eligible) - Number(a.eligible) || (typeof a.value === 'number' && typeof b.value === 'number' ? (direction === 'largest' ? b.value - a.value : a.value - b.value) : Number(typeof b.value === 'number') - Number(typeof a.value === 'number')) || a.group.label.localeCompare(b.group.label));
  }, [comparison, grouping, horizon, metric, direction, clean]);
  const days = sessionsIn(horizon);
  const reference = useMemo(() => metric === 'price'
    ? { ...typicalWindowMove(bars, days), label: `Median absolute return over ${days} trading days across this year` }
    : { median: 1, windows: 0, label: 'Each event’s median daily volume before the news' }, [bars, days, metric]);
  const lastClose = bars.length ? bars[bars.length - 1].close : null;
  const tick = sgxTick(mic, lastClose);
  const tickPct = tick && lastClose ? tick / lastClose : null;
  if (!comparison) return <section className="rounded-2xl border border-border/60 bg-card/80 p-5"><h3 className="font-semibold">Compare news categories</h3><p className="mt-2 text-sm text-muted-foreground">This report does not yet include the category comparison. Rebuild it to compare price moves and trading volume after different types of news.</p></section>;
  const minimum = comparison.minimum_sessions;
  const eligible = rows.filter((row) => row.eligible);
  const ranked = [...eligible].sort((a, b) => (b.value as number) - (a.value as number));
  const highest = ranked[0]; const lowest = ranked.length > 1 ? ranked[ranked.length - 1] : undefined;
  const format = metric === 'price' ? percent : multiple;
  const metricLabel = metric === 'price' ? 'median absolute return' : 'median volume ratio';
  const groupColor = (group: NewsMacroGroup) => newsCategoryColor(grouping === 'official_categories' ? `official:${group.label}` : grouping === 'topics' ? `topic:${group.label}` : 'story', isDark);
  const evidence = (group: NewsMacroGroup) => group.document_ids.flatMap((id) => sourceMap.has(id) ? [sourceMap.get(id)!] : []).sort((a, b) => a.published_at.localeCompare(b.published_at));
  const relative = (value: number | null | undefined) => {
    if (typeof value !== 'number' || typeof reference.median !== 'number' || !(reference.median > 0)) return null;
    return value / reference.median;
  };
  const scaleMax = Math.max(reference.median ?? 0, ...ranked.map((row) => row.value as number)) || 1;
  const shown = eligible.slice(0, 10);
  return <section className="space-y-5 rounded-2xl border border-border/60 bg-card/80 p-5 sm:p-6" aria-label="Compare news categories" data-news-macro>
    <div>
      <h3 className="text-lg font-semibold">2 · Compare news categories</h3>
      <p className="mt-1 max-w-4xl text-sm text-muted-foreground">Which types of news were followed by larger price moves or more trading? These results use the announcements received for this report within the analysis period {comparison.window.start} to {comparison.window.end}; the collection may not include the latest news.</p>
    </div>
    <div className="flex flex-wrap items-end gap-3">
      <label className="flex flex-col gap-1 text-xs text-muted-foreground">Group news by<select aria-label="Group news by" className={control} value={grouping} onChange={(event) => { setGrouping(event.target.value as Grouping); setExpanded(null); }}>{GROUPS.map(([key, label]) => <option value={key} key={key}>{key === 'official_categories' && mic !== 'XSES' ? 'Exchange categories' : label}</option>)}</select></label>
      <label className="flex flex-col gap-1 text-xs text-muted-foreground">Days to include<select aria-label="Days to include" className={control} value={horizon} onChange={(event) => setHorizon(event.target.value as NewsResponseHorizon)}>{comparison.horizons.map((key) => <option value={key} key={key}>{key === 'J0' ? 'First trading day (J0)' : `First ${sessionsIn(key)} trading days (J0–${key})`}</option>)}</select></label>
      <label className="flex flex-col gap-1 text-xs text-muted-foreground">Compare<select aria-label="Compare price or volume" className={control} value={metric} onChange={(event) => setMetric(event.target.value as 'price' | 'volume')}><option value="price">Median absolute return</option><option value="volume">Median volume ratio</option></select></label>
      <label className="flex flex-col gap-1 text-xs text-muted-foreground">Order<select aria-label="Comparison order" className={control} value={direction} onChange={(event) => setDirection(event.target.value as 'largest' | 'smallest')}><option value="largest">Largest first</option><option value="smallest">Smallest first</option></select></label>
      <label className="flex min-h-10 items-center gap-2 text-sm"><input type="checkbox" checked={clean} onChange={(event) => setClean(event.target.checked)} aria-describedby="news-other-news-help" />Hide periods with other news</label>
    </div>
    <div className="grid gap-3 rounded-xl border border-border bg-muted/20 p-4 text-sm sm:grid-cols-2" aria-label="Selected period and volume baseline">
      <div><p className="font-medium">Price period: {days} trading {days === 1 ? 'day' : 'days'}</p><p className="mt-1 text-muted-foreground">Close before J0 → close of {horizon}</p><p className="mt-1 text-xs text-muted-foreground">J0 is the first trading day assigned to the news. {horizon === 'J0' ? 'This measures that day’s close-to-close return.' : `The period includes J0 and the following ${days - 1} trading ${days - 1 === 1 ? 'day' : 'days'}.`}</p></div>
      <div><p className="font-medium">Volume baseline: before each announcement</p><p className="mt-1 text-muted-foreground">1× = baseline volume · 2× = twice that volume</p><p className="mt-1 text-xs text-muted-foreground">Baseline = median daily volume over up to 20 prior sessions, ending at J−2. Each event period uses its average daily volume.</p></div>
    </div>
    <div className="space-y-1 text-xs leading-relaxed text-muted-foreground">
      <p>{grouping === 'official_categories' && mic !== 'XSES' ? 'Uses the announcement categories provided by the exchange.' : GROUP_HELP[grouping]} {metric === 'price' ? 'Ranking uses median absolute return: the size of the move, whether the price rose or fell.' : 'Ranking uses median volume ratio: trading activity compared with each announcement’s pre-news baseline.'}</p>
      <p id="news-other-news-help">{clean ? 'Periods shared with other news are excluded.' : 'Other news may share the same trading days. Use the filter above to leave those periods out.'} This shows what happened around the news; other news and market moves may also explain it.</p>
    </div>
    {highest ? <div className="grid gap-3 sm:grid-cols-3">
      {[{ label: 'Highest', row: highest }, { label: 'Lowest', row: lowest }].map(({ label, row }) => {
        const ratio = row ? relative(row.value as number) : null;
        return <div key={label} className="rounded-xl border border-border border-t-2 bg-muted/20 p-4" style={row ? { borderTopColor: groupColor(row.group) } : undefined}><p className="text-xs text-muted-foreground">{label} {metricLabel}</p>{row ? <>
          <p className="mt-1 text-2xl font-semibold tabular-nums">{format(row.value)}{metric === 'volume' && <span className="text-xs font-normal"> pre-news volume</span>}</p>
          <p className="mt-1 flex items-center gap-2 text-sm font-medium"><span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: groupColor(row.group) }} aria-hidden="true" />{row.group.label}</p>
          <p className="mt-1 text-xs text-muted-foreground">Based on {dayLabel(row.count)}{clean && row.window?.overlap_windows ? ` · ${row.window.overlap_windows} with other news excluded` : ''}</p>
          {metric === 'price' && ratio !== null && <p className="mt-1 text-xs text-muted-foreground">Price: {num(ratio, 1)}× annual reference<span className="mt-0.5 block">{percent(row.value)} ÷ {percent(reference.median)}</span></p>}
        </> : <p className="mt-2 text-sm text-muted-foreground">Only one group has enough data to compare.</p>}</div>;
      })}
      <div className="rounded-xl border border-dashed border-border p-4"><p className="text-xs text-muted-foreground">{metric === 'price' ? 'Same-length periods across the year' : 'Pre-news volume baseline'}</p>
        <p className="mt-1 text-2xl font-semibold tabular-nums text-muted-foreground">{format(reference.median)}</p>
        <p className="mt-1 text-sm font-medium">{reference.label}</p>
        {metric === 'price' && <p className="mt-1 text-xs text-muted-foreground">Includes days with and without news</p>}
      </div>
    </div> : <p className="rounded-lg bg-muted/40 p-4 text-sm text-muted-foreground">Not enough data to compare groups with these settings. We need at least {dayLabel(minimum)} with usable {metric === 'price' ? 'prices' : 'volume'} in each group. {clean && 'Try including periods with other news or choosing fewer days.'}</p>}
    {shown.length > 0 && <figure className="space-y-2" aria-label="Median absolute return or volume ratio by news group">
      <figcaption className="text-sm font-medium">{grouping === 'subjects' ? 'Stories' : 'Categories'} ranked by {metricLabel}</figcaption>
      <p className="text-xs text-muted-foreground">Dashed line: {metric === 'price' ? `median absolute return for all ${days}-trading-day periods across the year` : 'pre-news volume baseline (1×)'}. {grouping === 'official_categories' ? `Colors identify ${mic === 'XSES' ? 'SGX' : 'exchange'} announcement types.` : grouping === 'topics' ? 'Colors identify our broad categories.' : 'Each row is one related story.'}</p>
      <p className="text-xs text-muted-foreground">{ranked.length > shown.length ? `Showing ${shown.length} of ${ranked.length}` : `${ranked.length}`} {ranked.length === 1 ? 'group has' : 'groups have'} enough data to compare · at least {dayLabel(minimum)} each.</p>
      <div className="relative space-y-1.5">
        {typeof reference.median === 'number' && <div className="pointer-events-none absolute inset-y-0 left-[calc(40%+0.75rem)] right-[4.25rem] sm:left-[calc(30%+0.75rem)]"><div className="absolute inset-y-0 border-l border-dashed border-muted-foreground/60" style={{ left: `${Math.min(100, (reference.median / scaleMax) * 100)}%` }} /></div>}
        {shown.map((row) => <button type="button" key={row.group.key} onClick={() => setExpanded(expanded === row.group.key ? null : row.group.key)} className="grid w-full grid-cols-[40%_1fr_3.5rem] items-center gap-3 rounded-md text-left text-xs hover:bg-muted/40 sm:grid-cols-[30%_1fr_3.5rem]">
          <span className="flex min-w-0 items-center gap-2 text-foreground" title={`${row.group.label} · ${dayLabel(row.count)} compared`}><span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: groupColor(row.group) }} aria-hidden="true" /><span className="truncate">{row.group.label}</span></span>
          <span className="h-2.5 rounded-sm bg-muted"><span className="block h-full rounded-sm" style={{ width: `${Math.max(1, ((row.value as number) / scaleMax) * 100)}%`, backgroundColor: groupColor(row.group) }} /></span>
          <span className="text-right tabular-nums text-foreground">{format(row.value)}</span>
        </button>)}
      </div>
    </figure>}
    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
      <p>Median means the middle result (average of the two middle values for an even count). Each event day counts once per group. Click a group to see its announcements.</p>
      <button type="button" className="rounded-md border border-border px-3 py-2 text-foreground hover:bg-muted" aria-expanded={showDataDetails} onClick={() => setShowDataDetails(!showDataDetails)}>{showDataDetails ? 'Hide data details' : 'Show data details'}</button>
    </div>
    <div className="overflow-x-auto"><table className={`w-full ${showDataDetails ? 'min-w-[900px]' : 'min-w-[650px]'} text-sm`}>
      <thead><tr className="bg-muted/60 text-left text-muted-foreground">{[[grouping === 'subjects' ? 'Related story' : 'News category', ''], ['Event days compared', `Usable ${metric === 'price' ? 'price' : 'volume'} results`], ['Median absolute return (%)', 'Move size · ignores rise or fall'], ['Median signed return (%)', 'Direction · keeps + / −'], ['Median volume ratio (× baseline)', 'Trading activity · 1× = baseline'], ...(showDataDetails ? [['Data coverage', 'Prices and other news']] : [])].map(([label, detail]) => <th key={label} className="px-3 py-3 font-medium">{label}{detail && <span className="mt-1 block text-xs font-normal">{detail}</span>}</th>)}</tr></thead>
      <tbody>{(showAll ? rows : rows.slice(0, 10)).map(({ group, window, stats, eligible: isEligible, count }) => <tr key={group.key} className="border-t border-border/60 align-top">
        <th className="max-w-[300px] px-3 py-3 text-left font-medium"><button type="button" className="inline-flex items-start gap-2 text-left hover:underline" aria-expanded={expanded === group.key} onClick={() => setExpanded(expanded === group.key ? null : group.key)}><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: groupColor(group) }} aria-hidden="true" />{group.label}</button><span className="mt-1 block text-xs font-normal text-muted-foreground">{group.publication_count} announcements · {dayLabel(group.distinct_sessions)}</span>{expanded === group.key && <ul className="mt-3 space-y-2 border-l border-border pl-3">{evidence(group).map((publication) => <li key={publication.document_id}><button type="button" className="text-left text-xs font-normal hover:underline" onClick={() => onOpen(publication.document_id)}>{publication.published_at.slice(0, 10)} · {publication.short_title}</button></li>)}</ul>}</th>
        <td className="px-3 py-3 tabular-nums">{count}{!isEligible && <span className="mt-1 block text-xs text-muted-foreground">Need at least {minimum} to compare</span>}</td>
        <td className="px-3 py-3 tabular-nums">{percent(stats?.median_abs_return)}{showDataDetails && <span className="mt-1 block text-xs text-muted-foreground">{dayLabel(stats?.price_samples ?? 0)} with prices</span>}</td>
        <td className="px-3 py-3 tabular-nums">{percent(stats?.median_signed_return, true)}{showDataDetails && typeof stats?.return_iqr === 'number' && <span className="mt-1 block text-xs text-muted-foreground">Signed-return spread (IQR): {percent(stats.return_iqr)}</span>}</td>
        <td className="px-3 py-3 tabular-nums">{multiple(stats?.median_volume_ratio)}{typeof stats?.median_volume_ratio === 'number' && <span className="block text-xs text-muted-foreground"> pre-news volume</span>}{showDataDetails && <span className="mt-1 block text-xs text-muted-foreground">{dayLabel(stats?.volume_samples ?? 0)} with volume{typeof stats?.volume_ratio_iqr === 'number' ? ` · IQR ${multiple(stats.volume_ratio_iqr)}` : ''}</span>}</td>
        {showDataDetails && <td className="px-3 py-3"><div className="flex flex-wrap gap-1">
          <StatusPill status="complete" title="All required trading days have usable closing prices. Other news may still overlap.">{window?.complete_windows ?? 0} with full prices</StatusPill>
          {(window?.partial_windows ?? 0) > 0 && <StatusPill status="partial" title="The full period cannot be measured; excluded from the comparison.">{window?.partial_windows} incomplete period</StatusPill>}
          {(window?.unavailable_windows ?? 0) > 0 && <StatusPill status="unavailable" title="No usable price measurement for the selected period.">{window?.unavailable_windows} no usable prices</StatusPill>}
          {(window?.overlap_windows ?? 0) > 0 && <StatusPill status="info" title="The measured days overlap another story’s measured period.">{window?.overlap_windows} with other news</StatusPill>}
        </div></td>}
      </tr>)}</tbody>
    </table>{rows.length === 0 && <p className="p-4 text-sm text-muted-foreground">No announcements in this grouping.</p>}</div>
    {showDataDetails && <p className="text-xs text-muted-foreground">Data coverage describes all periods before filtering. “Event days compared” counts usable {metric === 'price' ? 'price' : 'volume'} results after your filters; price and volume counts can differ. Full price history and other news can apply to the same period.</p>}
    {rows.length > 10 && <div className="flex items-center justify-between text-xs text-muted-foreground"><span>Showing {showAll ? rows.length : 10} of {rows.length} groups</span><button type="button" className="rounded-md border border-border px-3 py-2 text-foreground hover:bg-muted" onClick={() => setShowAll(!showAll)}>{showAll ? 'Show first 10' : `Show all ${rows.length} groups`}</button></div>}
    <details className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground"><summary className="cursor-pointer font-medium">What these numbers mean · examples and method</summary><div className="mt-3 space-y-3">
      <p><strong className="text-foreground">Days to include.</strong> Start with the first trading day that can react to the announcement. News after the close starts on the next trading day. “First 2 trading days” includes that day and the next trading day; weekends and holidays are skipped. Prices are measured from the close before the first day to the close of the last day. For news published during trading, this can include a move from before publication.</p>
      <p><strong className="text-foreground">Absolute and signed return.</strong> Median absolute return is median(|return|): take the absolute value of each event return, then the median. Median signed return is median(return): keep each + or − sign, then take the median. A +5% rise and a −5% fall both count as a 5% absolute return. The signed median is calculated separately; it is not the absolute median with a sign attached. These are closing-price changes, not the biggest move reached during the day.</p>
      <p><strong className="text-foreground">The dashed line.</strong> For price, this is the median absolute return across all rolling periods of the same length in the displayed year, including days with news. The card’s price multiple divides the group’s median absolute return by this annual reference. For volume, the line marks 1× the pre-news median daily volume. Price and volume multiples use different baselines.</p>
      <p><strong className="text-foreground">Other news in the same period.</strong> For example, Monday’s news measured over Monday–Tuesday overlaps Tuesday’s news measured over Tuesday–Wednesday. Both include Tuesday, so their price changes may reflect more than one story. The filter leaves these shared periods out; it cannot remove every possible influence.</p>
      <p><strong className="text-foreground">Full data and enough data.</strong> “Full price history” means prices are available for every required trading day. It can still overlap other news. Four full periods and four with other news can be the same four periods. We compare a group only when at least {dayLabel(minimum)} have usable results for your chosen measure. This is a minimum for display, not proof of a reliable pattern.</p>
      <p><strong className="text-foreground">Why fewer days than announcements?</strong> Several announcements can share one trading day. We count that day once per group so the same price move is not counted repeatedly. Related follow-ups about one story on the same day also count together.</p>
      <details className="border-t border-border/60 pt-3 text-xs"><summary className="cursor-pointer font-medium">Exact formulas and methodology</summary><div className="mt-3 space-y-2">
        <p><strong className="text-foreground">Price:</strong> return (%) = (period-end close ÷ close before J0 − 1) × 100. Absolute return ignores the sign; signed return keeps +/−. Both columns take the median across event days.</p>
        <p><strong className="text-foreground">Volume:</strong> ratio = average daily volume during the event period ÷ pre-news median daily volume, then the median of those ratios across event days. The baseline uses up to 20 prior sessions ending at J−2.</p>
        <p>The absolute-return column is the median absolute compounded stock return from the close before J0 through the selected endpoint. The signed-return column is the median signed return. J0, J0–J+1, J0–J+3 and J0–J+5 contain 1, 2, 4 and 6 session returns respectively. Raw prices can reflect dividends and other corporate actions; no total-return adjustment is applied.</p>
        <p>The price reference uses {metric === 'price' ? reference.windows : typicalWindowMove(bars, days).windows} rolling periods of {days} trading {days === 1 ? 'day' : 'days'} in the displayed year. It is not a market-index return or a statistical test. IQR describes the spread of the middle 50% of results. The price IQR uses signed returns, not absolute moves.</p>
        <p>Volume is the median of the average daily volume multiples in each complete period. Each announcement uses a fixed baseline: median daily volume over up to 20 prior sessions ending at J−2. Incomplete price periods are excluded. Price and volume samples are counted separately.</p>
        <p>One observation per group and effective session avoids double-counting same-day announcements. Calculated announcement series are excluded. Overlap is checked against other known story windows, including earlier stories that extend into the displayed year; same-day unrelated stories also overlap. Categories can share observations. These comparisons show association, not causation or predictions.</p>
        {metric === 'price' && tickPct && <p>At the last close of S${num(lastClose, 3)}, the minimum SGX price step was S${tick} (about {percent(tickPct)}). Small changes may therefore represent just one price step.</p>}
        <p>Methodology: <a className="underline" href="https://www.bu.edu/econ/files/2011/01/MacKinlay-1996-Event-Studies-in-Economics-and-Finance.pdf" target="_blank" rel="noopener noreferrer">MacKinlay (1997)</a> and <a className="underline" href="https://leeds-faculty.colorado.edu/bhagat/brownwarner1985.pdf" target="_blank" rel="noopener noreferrer">Brown &amp; Warner (1985)</a>.</p>
      </div></details>
    </div></details>
  </section>;
}

function num(value: number | null | undefined, digits = 2): string {
  return typeof value === 'number' && Number.isFinite(value) ? value.toFixed(digits) : '—';
}
