// News publications and observed daily/intraday market response.
// Summaries and source history are displayed without sentiment or price forecasts.

import { useMemo, useState, type MouseEvent } from 'react';
import { Newspaper } from 'lucide-react';
import { NewsMacroStudy } from './NewsMacroStudy';
import { StatTile, StatusPill } from './newsUi';
import { newsCategoryColor, officialNewsCategories } from './newsCategoryStyle';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import type { NewsAnnualChart, NewsClassification, NewsChartEvent, NewsEventImpact, NewsEventStudyData, NewsEventStudyWindow, NewsPreAnnouncement, NewsSummaryHistoryEntry } from '@/types/report';

const W = 1200;
const H = 520;
const PAD = { l: 58, r: 62, t: 14, b: 36 };
const PRICE_H = 330;
const VOL_TOP = 380;

function pct(value: number | null | undefined, signed = true): string {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '—';
  const text = (value * 100).toFixed(1);
  return `${signed && value > 0 ? '+' : ''}${text}%`;
}

function indexGap(value: number | null | undefined): string {
  return typeof value === 'number' && Number.isFinite(value) ? `${value > 0 ? '+' : ''}${(value * 100).toFixed(2)} pp` : '—';
}

function num(value: unknown, digits = 2): string {
  if (value == null || value === '') return '—';
  const n = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(n)) return String(value ?? '—');
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(n);
}

function localTime(iso: string | null | undefined, mic = 'XSES', dateOnly = false): string {
  const [timeZone, zoneLabel] = mic === 'XHKG' ? ['Asia/Hong_Kong', 'HKT'] : mic === 'XNAS' ? ['America/New_York', 'ET'] : ['Asia/Singapore', 'SGT'];
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  try {
    return new Intl.DateTimeFormat('en-GB', { timeZone, year: 'numeric', day: 'numeric', month: 'short', ...(dateOnly ? {} : { hour: '2-digit' as const, minute: '2-digit' as const }) }).format(date) + (dateOnly ? '' : ` ${zoneLabel}`);
  } catch {
    return iso;
  }
}

function rankText(rank: number | null | undefined): string {
  return typeof rank === 'number' && rank <= 0.25 ? ` · top ${Math.max(1, Math.round(rank * 100))}%` : '';
}

function isCalculatedSeries(event: NewsChartEvent): boolean {
  return event.kind === 'source_filing_series' || event.level_basis === 'insider_burst_rule';
}

function DailyMarketTable({ event }: { event: NewsChartEvent }) {
  const sessions = event.impact?.sessions || {};
  const rows = ['J-1', 'J0', 'J+1', 'J+2', 'J+3', 'J+4', 'J+5'].map((key) => ({ key, session: sessions[key] }));
  const history = event.history_comparison;
  const preText = preAnnouncementText(event.impact?.pre_announcement);
  return (
    <section className="space-y-3 rounded-xl border border-border p-4 sm:p-6" aria-label={isCalculatedSeries(event) ? 'Market reference at series end' : 'Daily market response'}>
      <div><h4 className="text-base font-semibold">{isCalculatedSeries(event) ? 'Market reference at series end' : 'Daily market response'}</h4><p className="mt-1 text-sm text-muted-foreground">{isCalculatedSeries(event) ? 'J0 is the trading session assigned to the last source publication in this series. These prices and volumes are a reference at the end of the series, not the response to a separate announcement.' : 'Observed price and volume around the publication. J0 is the first trading day assigned to the news (the next trading day for news after the close). Each row shows that day’s close versus the previous trading day’s close. J+1 is the following trading day.'}</p></div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[660px] text-sm">
          <thead><tr className="bg-muted/60 text-left text-muted-foreground">{['Session', 'Date', 'Daily return (%)', 'Return gap vs index (pp)', 'Volume (shares)', 'Volume ratio (× baseline)'].map((h) => <th key={h} className="px-3 py-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>{rows.map(({ key, session: row }) => (
            <tr key={key} className="border-t border-border/60">
              <th className="px-3 py-3 text-left font-medium">{key}</th>
              <td className="px-3 py-3 whitespace-nowrap">{row?.date || 'Not available'}</td>
              <td className="px-3 py-3 tabular-nums">{pct(row?.return)}{row?.carried_forward ? <span className="block text-xs text-muted-foreground">No trade</span> : null}</td>
              <td className="px-3 py-3 tabular-nums">{indexGap(row?.excess_return)}</td>
              <td className="px-3 py-3 tabular-nums">{typeof row?.volume === 'number' ? num(row.volume, 0) : '—'}</td>
              <td className="px-3 py-3 tabular-nums">{typeof row?.volume_ratio === 'number' ? `×${num(row.volume_ratio, 2)}${rankText(row.volume_ratio_rank)}` : '—'}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      {event.impact?.post_announcement && <div className="space-y-2">
        <h5 className="font-semibold">Total change since the close before the news day</h5>
        <div className="overflow-x-auto"><table className="w-full min-w-[660px] text-sm">
          <thead><tr className="bg-muted/60 text-left text-muted-foreground">{['Through', 'Session coverage', 'Compounded return', 'Return gap vs index', 'Mean volume vs usual'].map((label) => <th key={label} className="px-3 py-3 font-medium">{label}</th>)}</tr></thead>
          <tbody>{Object.entries(event.impact.post_announcement.horizons).map(([key, window]) => <tr key={key} className="border-t border-border/60"><th className="px-3 py-3 text-left font-medium">{key}</th><td className="px-3 py-3"><span className="flex flex-wrap items-center gap-2 tabular-nums">{window.observed_sessions}/{window.expected_sessions}<StatusPill status={window.status} /></span>{window.status === 'partial' && window.end_date && <span className="mt-1 block text-xs text-muted-foreground">through {window.end_date}</span>}</td><td className="px-3 py-3 tabular-nums">{pct(window.cumulative_return)}</td><td className="px-3 py-3 tabular-nums">{indexGap(window.cumulative_excess_return)}</td><td className="px-3 py-3 tabular-nums">{typeof window.mean_volume_ratio === 'number' ? `×${num(window.mean_volume_ratio)}` : '—'}</td></tr>)}</tbody>
        </table></div>
        <p className="text-xs text-muted-foreground">J0 through J+5 contains six trading sessions. The index gap is the difference between compounded stock and index returns, in percentage points (pp). Incomplete windows have no cumulative result. Daily J0 can include trading before the publication; use the intraday study for the timestamp response.</p>
      </div>}
      {history && history.other_events > 0 && <p className="text-sm text-muted-foreground">Issuer history: {history.other_events} other events · median absolute J0 move {pct(history.median_abs_j0_move, false)}{typeof history.median_j0_volume_ratio === 'number' ? ` · median volume ×${num(history.median_j0_volume_ratio, 1)}` : ''}.</p>}
      {preText && <p className="text-sm text-muted-foreground">{preText}</p>}
    </section>
  );
}

function preAnnouncementText(pre: NewsPreAnnouncement | null | undefined): string | null {
  if (!pre || (!pre.unusual_activity && !pre.notable)) return null;
  const bits: string[] = [];
  if (typeof pre.cumulative_return === 'number') {
    bits.push(`J-5 to J-1 ${pct(pre.cumulative_return)}${typeof pre.cumulative_excess_return === 'number' ? ` (vs index ${pct(pre.cumulative_excess_return)})` : ''}${rankText(pre.cumulative_move_rank)}`);
  }
  if (typeof pre.mean_volume_ratio === 'number') bits.push(`mean volume ×${num(pre.mean_volume_ratio, 1)}${rankText(pre.mean_volume_ratio_rank)}`);
  const unusual = (pre.sessions_with_unusual_activity || []).length;
  if (unusual) bits.push(`${unusual} unusual session${unusual > 1 ? 's' : ''}`);
  if (pre.unusual_activity) {
    if (typeof pre.base_rate_in_history === 'number') bits.push(`the rule fires on ${num(pre.base_rate_in_history * 100, 0)}% of this stock's weeks`);
  } else {
    bits.push('below the alert threshold');
  }
  const head = pre.unusual_activity ? 'Unusual pre-announcement activity' : 'Pre-announcement activity worth noting';
  return `${head} (${bits.join(' · ')}); prices and volumes only, no attribution.`;
}

type PublicationSummary = { summary?: string | null; full_summary?: string | null };

function sourceSummary(publication: PublicationSummary): string {
  return (publication.full_summary || publication.summary || '').trim();
}

function publicationTitle(publication: { short_title?: string; headline?: string | null }): string {
  return publication.short_title || publication.headline || 'Publication';
}

interface SourceHistoryRow extends PublicationSummary, NewsClassification {
  document_id: string;
  published_at: string;
  short_title: string;
  url?: string | null;
  event_id: string;
  impact?: NewsEventImpact | null;
  event_study?: NewsEventStudyData | null;
  event_study_ref?: string | null;
  thread_id?: string | null;
}

/** Keep every source document, including members of merged events and calculated series. */
function sourceHistory(events: NewsChartEvent[], summaryHistory: NewsSummaryHistoryEntry[] = [], studies: Record<string, NewsEventStudyData> = {}): SourceHistoryRow[] {
  const sources = new Map<string, SourceHistoryRow>();
  for (const publication of summaryHistory) {
    sources.set(publication.document_id, { ...publication, event_study: publication.event_study || studies[publication.event_study_ref || ''], short_title: publicationTitle(publication), event_id: publication.document_id });
  }
  // Prefer a publication's own event over a calculated series that reuses its filings.
  for (const event of [...events].sort((a, b) => Number(isCalculatedSeries(a)) - Number(isCalculatedSeries(b)))) {
    const publications = [...(event.publications?.length ? event.publications : [event]), ...(event.history || [])];
    for (const publication of publications) {
      const ownSummary = sourceSummary(publication);
      const summaryDocument = event.summary_from || event.reading_from || event.document_id;
      const parentSummary = publication.document_id === summaryDocument ? sourceSummary(event) : '';
      const row: SourceHistoryRow = {
        ...publication,
        document_id: publication.document_id,
        published_at: publication.published_at || event.published_at,
        short_title: publicationTitle(publication),
        url: publication.url,
        summary: ownSummary || parentSummary,
        event_id: event.document_id,
        impact: publication.impact || (publication.document_id === event.document_id ? event.impact : undefined),
        event_study: publication.event_study || studies[publication.event_study_ref || ''] || (publication.document_id === event.document_id ? event.event_study : undefined),
        thread_id: publication.thread_id || event.thread_id,
      };
      const previous = sources.get(row.document_id);
      if (!previous) sources.set(row.document_id, row);
      else if (!sourceSummary(previous) && sourceSummary(row)) sources.set(row.document_id, { ...previous, summary: row.summary });
    }
  }
  return [...sources.values()].sort((a, b) => a.published_at.localeCompare(b.published_at) || a.document_id.localeCompare(b.document_id));
}

function sourceEvent(publication: SourceHistoryRow): NewsChartEvent {
  return { ...publication, impact: publication.impact || { status: 'unavailable', session_j0: null, sessions: {} } };
}

function sourceLabel(mic: string): string {
  return mic === 'XSES' ? 'SGX source' : mic === 'XHKG' ? 'HKEX source' : 'Source publication';
}

function relatedSourceHistory(selectedEvent: NewsChartEvent | null, events: NewsChartEvent[], history: SourceHistoryRow[]): SourceHistoryRow[] {
  if (!selectedEvent) return [];
  const ids = new Set([selectedEvent.document_id, ...(selectedEvent.publications || []).map((publication) => publication.document_id)]);
  if (selectedEvent.thread_origin) ids.add(selectedEvent.thread_origin.document_id);
  for (const publication of selectedEvent.history || []) ids.add(publication.document_id);
  for (const followUp of selectedEvent.thread_events || []) ids.add(followUp.document_id);
  for (const event of events) {
    if (selectedEvent.thread_id && event.thread_id === selectedEvent.thread_id) {
      ids.add(event.document_id);
      for (const publication of event.publications || []) ids.add(publication.document_id);
    }
  }
  return history.filter((row) => ids.has(row.document_id) || (!!selectedEvent.thread_id && row.thread_id === selectedEvent.thread_id));
}

function PublicationClassification({ publication, mic = 'XSES' }: { publication: NewsClassification; mic?: string }) {
  const { isDark } = useChartTheme();
  const categories = officialNewsCategories(publication);
  return <div className="mt-3 flex flex-wrap items-center gap-2 text-xs" aria-label="Publication classification">
    {categories.map((category) => {
      const color = newsCategoryColor(`official:${category}`, isDark);
      return <span key={category} className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ color, borderColor: `${color}66`, backgroundColor: `${color}12` }}><i aria-hidden="true" className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />{mic === 'XSES' ? 'SGX' : 'Exchange'}: {category}</span>;
    })}
    {publication.topic_label && <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">Our category: {publication.topic_label}</span>}
    {publication.subject_label && <span className="text-muted-foreground">Related story: {publication.subject_label}</span>}
  </div>;
}

function PublicationHistory({ rows, onOpen, mic }: { rows: SourceHistoryRow[]; onOpen: (documentId: string) => void; mic: string }) {
  return (
    <ol className="space-y-4">
      {rows.map((row) => <li key={row.document_id} className="border-l-2 border-sky-500/40 pl-4">
        <p className="text-xs text-muted-foreground">{localTime(row.published_at, mic)}</p>
        <button type="button" className="mt-1 text-left text-sm font-medium text-sky-600 hover:underline dark:text-sky-400" onClick={() => onOpen(row.document_id)}>{row.short_title}</button>
        <PublicationClassification publication={row} mic={mic} />
        <p className="mt-1 text-sm text-foreground">{sourceSummary(row) || 'Summary unavailable.'}</p>
        {row.url && <a className="mt-1 inline-block text-xs text-sky-600 underline dark:text-sky-400" href={row.url} target="_blank" rel="noopener noreferrer">{sourceLabel(mic)}</a>}
      </li>)}
    </ol>
  );
}

// ---------------------------------------------------------------------------
// Intraday event study (news-event-study.v1): trades and book minutes around the
// publication, read from the sessions already stored in the base. Descriptive
// only — an association in time, never a causal claim.
// ---------------------------------------------------------------------------
const STUDY_REASON: Record<string, string> = {
  intraday_access_not_supplied: 'this run had no intraday access (listing id or ClickHouse client missing)',
  session_not_in_base: 'no trades or book rows stored for this session (nothing is fetched on demand)',
  session_rows_not_read: 'the session has more rows than the bounded read allows',
  no_session_for_publication: 'no session could be attached to the publication',
  market_not_supported: 'the trading clock of this market is not configured',
  no_intraday_rows_for_supplied_sessions: 'the stored rows hold no continuous-trading minute for this session',
  no_session_after_publication_in_supplied_rows: 'the stored sessions all precede the publication',
  naive_publication_time: 'the publication time has no time zone',
  no_session_rows: 'no stored session',
  calculated_series_has_no_single_publication_anchor: 'this calculated series combines several source publications, each with its own publication time. Open a source filing below to view its individual intraday study',
};
const WINDOW_LABEL: Record<string, string> = { pre_120: '−120 min', pre_30: '−30 min', pre_5: '−5 min', post_5: '+5 min', post_30: '+30 min', post_60: '+60 min', post_120: '+120 min', post_180: '+180 min', post_240: '+240 min' };
const TIMING_LABEL: Record<string, string> = {
  during_session: 'published during continuous trading', before_phase: 'published before the open (or during lunch): anchored on the next trading minute',
  after_close_next_session: 'published after the close: anchored on the next session’s open',
};

// Stored legacy fields are in basis points; the report presents all changes as percentages.
function percentageFromBasisPoints(v: number | null | undefined, signed = true): string {
  return typeof v === 'number' && Number.isFinite(v) ? `${signed && v > 0 ? '+' : ''}${(v / 100).toFixed(2)}%` : '—';
}
function vol(v: number | null | undefined): string {
  if (typeof v !== 'number') return '—';
  return v >= 1_000_000 ? `${(v / 1_000_000).toFixed(2)}M` : v >= 10_000 ? `${(v / 1000).toFixed(0)}k` : v.toLocaleString('en-US', { maximumFractionDigits: 0 });
}
function imbalance(w: NewsEventStudyWindow): string {
  if (typeof w.signed_volume_imbalance !== 'number') return '—';
  const share = w.signed_volume_imbalance;
  return `${share > 0 ? '+' : ''}${(share * 100).toFixed(0)}%${typeof w.unknown_side_share === 'number' && w.unknown_side_share > 0.2 ? ` (${(w.unknown_side_share * 100).toFixed(0)}% unknown side)` : ''}`;
}

/** Window name plus a marker when the trading clock crosses into another session. */
function WindowLabel({ name, window, anchorSession }: { name: string; window: NewsEventStudyWindow; anchorSession?: string }) {
  const other = (window.sessions || []).filter((day) => day !== anchorSession);
  const crosses = other.length > 0;
  return <><span>{WINDOW_LABEL[name]}</span>{crosses && <span className="mt-1 block font-normal"><StatusPill status="info" title={`Includes ${other.join(', ')}; the overnight gap is part of this window's price change`}>{name.startsWith('pre_') ? 'From previous session' : 'Into next session'}</StatusPill></span>}</>;
}

function bpsAsPercent(v: number | null | undefined): string {
  return typeof v === 'number' && Number.isFinite(v) ? `${v > 0 ? '+' : ''}${(v / 100).toFixed(2)}%` : '—';
}

function signedPct(v: number | null | undefined): string {
  return typeof v === 'number' && Number.isFinite(v) ? `${v > 0 ? '+' : ''}${num(v, 1)}%` : '—';
}

/** One-line overview of the publication: daily response first, then the intraday reading. */
function AtAGlance({ event, study }: { event: NewsChartEvent; study?: NewsEventStudyData | null }) {
  const j0 = event.impact?.sessions?.J0;
  const j5 = event.impact?.post_announcement?.horizons?.['J+5'];
  const ready = study?.status === 'ready';
  const post30 = ready ? study?.windows?.post_30 : undefined;
  const post60 = ready ? study?.windows?.post_60 : undefined;
  const depthReady = ready && !!study?.depth_baseline?.eligible && !!post60 && post60.status !== 'unavailable';
  return <section aria-label="At a glance" className="grid grid-cols-2 gap-3 lg:grid-cols-5">
    <StatTile label="J0 return" value={pct(j0?.return)} detail={j0?.date ? `${j0.date} · vs index ${indexGap(j0?.excess_return)}` : 'Session not available'} status={j0?.date ? undefined : 'unavailable'} />
    <StatTile label="J0 volume vs usual" value={typeof j0?.volume_ratio === 'number' ? `×${num(j0.volume_ratio, 2)}` : '—'} detail={typeof j0?.volume_ratio_rank === 'number' && j0.volume_ratio_rank <= 0.25 ? `Top ${Math.max(1, Math.round(j0.volume_ratio_rank * 100))}% of this stock's sessions` : 'vs pre-event median ending J−2'} />
    <StatTile label="J0 → J+5 compounded" value={pct(j5?.cumulative_return)} detail={j5 ? `${j5.observed_sessions}/${j5.expected_sessions} sessions · vs index ${indexGap(j5.cumulative_excess_return)}` : 'Not available'} status={j5?.status ?? 'unavailable'} />
    <StatTile label="Mid-price, first 30 min" value={bpsAsPercent(post30?.mid_return_bps)} detail={ready && study?.anchor ? `From t0 ${study.anchor.minute} SGT on ${study.anchor.session}` : 'No intraday study'} status={ready ? post30?.status : 'unavailable'} />
    <StatTile label="Depth, first 60 min" value={depthReady ? <span className="text-lg sm:text-xl">{signedPct(post60?.bid_depth_change_pct)} <span className="text-muted-foreground">/</span> {signedPct(post60?.ask_depth_change_pct)}</span> : '—'} detail={depthReady ? 'Bid / ask vs 2 h pre-event mean' : 'Pre-event book baseline unavailable'} status={depthReady ? (study?.depth_baseline?.status === 'partial' ? 'partial' : undefined) : 'unavailable'} />
  </section>;
}

function EventStudyChart({ study, isDark }: { study: NewsEventStudyData; isDark: boolean }) {
  const series = study.series || [];
  if (!series.length) return null;
  const W2 = 1000; const PL = 70; const PR = 80; const MID_H = 180; const VOL_H = 75; const GAP = 24; const TOP = 28;
  const H2 = TOP + MID_H + GAP + VOL_H + 40;
  const offsets = series.map((p) => p.offset);
  const minO = Math.min(...offsets); const maxO = Math.max(...offsets);
  const x = (o: number) => PL + ((o - minO) / Math.max(1, maxO - minO)) * (W2 - PL - PR);
  const mids = series.map((p) => p.mid).filter((v): v is number => typeof v === 'number' && Number.isFinite(v));
  const anchorMid = typeof study.anchor?.mid === 'number' && Number.isFinite(study.anchor.mid) && study.anchor.mid > 0 ? study.anchor.mid : null;
  const rel = (m: number) => (anchorMid ? ((m / anchorMid) - 1) * 100 : 0);
  const rels = anchorMid ? mids.map(rel) : [];
  const lo = Math.min(0, ...rels); const hi = Math.max(0, ...rels); const span = Math.max(hi - lo, 0.2);
  const yMid = (m: number) => TOP + MID_H - ((rel(m) - lo) / span) * MID_H;
  const spreads = series.flatMap((p) => typeof p.spread_bps === 'number' && Number.isFinite(p.spread_bps) ? [p.spread_bps / 100] : []);
  const maxSpread = Math.max(0.01, ...spreads);
  const ySpread = (sp: number) => TOP + MID_H - (sp / maxSpread) * MID_H;
  const maxVol = Math.max(1, ...series.map((p) => p.volume ?? 0));
  const volTop = TOP + MID_H + GAP;
  const yVol = (v: number) => volTop + VOL_H - (v / maxVol) * VOL_H;
  // Break lines at missing observations instead of visually filling gaps.
  const path = (value: (point: typeof series[number]) => number | null) => {
    let connected = false;
    return series.map((point) => {
      const yValue = value(point);
      if (point.data_available === false || yValue == null || !Number.isFinite(yValue)) { connected = false; return ''; }
      const command = connected ? 'L' : 'M'; connected = true;
      return `${command}${x(point.offset).toFixed(1)},${yValue.toFixed(1)}`;
    }).join(' ');
  };
  const midPath = path((point) => anchorMid && typeof point.mid === 'number' ? yMid(point.mid) : null);
  const spreadPath = path((point) => typeof point.spread_bps === 'number' ? ySpread(point.spread_bps / 100) : null);
  const breaks = series.filter((p, i) => i > 0 && p.session !== series[i - 1].session);
  const grid = isDark ? '#3f3f46' : '#e4e4e7'; const text = isDark ? '#a1a1aa' : '#71717a';
  const midColor = isDark ? '#e4e4e7' : '#18181b'; const spreadColor = '#f59e0b';
  const barW = Math.max(1, (W2 - PL - PR) / Math.max(1, series.length) - 0.4);
  const ticks = [-120, -60, 0, 60, 120, 180, 240].filter((t) => t >= minO && t <= maxO);
  return (
    <svg viewBox={`0 0 ${W2} ${H2}`} className="block w-full min-w-[660px]" role="img" aria-label="Mid-price change and quoted spread in percent, with volume per trading minute around the publication">
      {anchorMid && <line x1={PL} x2={W2 - PR} y1={yMid(anchorMid)} y2={yMid(anchorMid)} stroke={grid} strokeDasharray="2 3" />}
      {breaks.map((p) => (
        <g key={`${p.session}-${p.offset}`}>
          <line x1={x(p.offset)} x2={x(p.offset)} y1={TOP} y2={volTop + VOL_H} stroke={grid} strokeDasharray="4 3" />
          <text x={x(p.offset) + 3} y={TOP + 9} fontSize="12" fill={text}>{p.session} {p.time}</text>
        </g>
      ))}
      {series.filter((p) => p.volume != null && p.data_available !== false).map((p) => (
        <rect key={p.offset} x={x(p.offset) - barW / 2} width={barW} y={yVol(p.volume ?? 0)} height={volTop + VOL_H - yVol(p.volume ?? 0)}
          fill={(p.buy ?? 0) > (p.sell ?? 0) ? (isDark ? '#4ade80' : '#16a34a') : (p.sell ?? 0) > (p.buy ?? 0) ? (isDark ? '#f87171' : '#dc2626') : (isDark ? '#71717a' : '#a1a1aa')} opacity={0.85} />
      ))}
      {spreadPath && <path d={spreadPath} fill="none" stroke={spreadColor} strokeWidth={1} opacity={0.8} />}
      {midPath && <path d={midPath} fill="none" stroke={midColor} strokeWidth={1.4} />}
      <line x1={x(0)} x2={x(0)} y1={TOP - 4} y2={volTop + VOL_H} stroke={isDark ? '#38bdf8' : '#0284c7'} strokeWidth={1.2} />
      <text x={x(0)} y={TOP - 4 + 2} fontSize="12" fill={isDark ? '#38bdf8' : '#0284c7'} textAnchor="middle">t0</text>
      {anchorMid && <text x={PL - 4} y={yMid(anchorMid) + 3} fontSize="12" fill={text} textAnchor="end">0%</text>}
      {hi > 0 && <text x={PL - 4} y={TOP + 8} fontSize="12" fill={text} textAnchor="end">{`+${hi.toFixed(2)}%`}</text>}
      {lo < 0 && <text x={PL - 4} y={TOP + MID_H} fontSize="12" fill={text} textAnchor="end">{`${lo.toFixed(2)}%`}</text>}
      {spreadPath && <text x={W2 - PR + 4} y={TOP + 8} fontSize="12" fill={spreadColor}>{`${maxSpread.toFixed(2)}%`}</text>}
      {spreadPath && <text x={W2 - PR + 4} y={TOP + MID_H} fontSize="12" fill={spreadColor}>spread</text>}
      <text x={PL - 4} y={volTop + 8} fontSize="12" fill={text} textAnchor="end">{vol(maxVol)}</text>
      <text x={PL - 4} y={volTop + VOL_H} fontSize="12" fill={text} textAnchor="end">volume</text>
      {ticks.map((t) => (
        <text key={t} x={x(t)} y={H2 - 8} fontSize="12" fill={text} textAnchor="middle">{t === 0 ? 't0' : `${t > 0 ? '+' : ''}${t}`}</text>
      ))}
    </svg>
  );
}

function DepthValue({ mean, change, percent, postEvent }: { mean?: number | null; change?: number | null; percent?: number | null; postEvent: boolean }) {
  return <><span>{num(mean, 0)}</span>{postEvent && (change !== undefined || percent !== undefined) && <span className="mt-1 block whitespace-nowrap text-xs text-muted-foreground">Observed Δ {typeof change === 'number' ? `${change > 0 ? '+' : ''}${num(change, 0)} shares` : '— shares'}<br />{typeof percent === 'number' ? `${percent > 0 ? '+' : ''}${num(percent, 1)}%` : '—%'} vs pre-event</span>}</>;
}

function EventStudyView({ study, calculatedSeries = false }: { study: NewsEventStudyData | null | undefined; calculatedSeries?: boolean }) {
  const { isDark } = useChartTheme();
  if (!study && !calculatedSeries) return null;
  if (!study || study.status !== 'ready') {
    const reason = study?.reason || (calculatedSeries ? 'calculated_series_has_no_single_publication_anchor' : '');
    return <section className="rounded-xl border border-border p-4 sm:p-6"><h4 className="text-base font-semibold">Intraday event study</h4><p className="mt-2 text-sm text-muted-foreground">Not available: {STUDY_REASON[reason] || reason}{study?.session ? ` (session ${study.session})` : ''}.</p></section>;
  }
  const windows = study.windows || {};
  const standingBook = study.parameters?.book_state_policy === 'carry_until_next_update_or_phase_end';
  const directionalReturns = study.parameters?.mid_return_basis === 'pre:first_window_mid_to_anchor;post:anchor_to_last_window_mid';
  const order = ['pre_120', 'pre_30', 'pre_5', 'post_5', 'post_30', 'post_60', 'post_120', 'post_180', 'post_240'].filter((key) => windows[key]);
  const anchor = study.anchor;
  const points = study.series || [];
  const seriesOffsets = points.map((point) => point.offset).filter(Number.isFinite);
  const seriesStart = Math.min(...seriesOffsets);
  const seriesEnd = Math.max(...seriesOffsets);
  const lastSummaryWindow = Math.max(0, ...order.filter((key) => key.startsWith('post_')).map((key) => Number(key.split('_')[1])));
  const hasMid = typeof study.anchor?.mid === 'number' && Number.isFinite(study.anchor.mid) && study.anchor.mid > 0 && points.some((point) => typeof point.mid === 'number' && Number.isFinite(point.mid));
  const hasSpread = points.some((point) => typeof point.spread_bps === 'number' && Number.isFinite(point.spread_bps));
  const volumeKinds = [
    { label: 'More buyer-initiated volume', color: isDark ? '#4ade80' : '#16a34a', present: points.some((point) => (point.volume ?? 0) > 0 && (point.buy ?? 0) > (point.sell ?? 0)) },
    { label: 'More seller-initiated volume', color: isDark ? '#f87171' : '#dc2626', present: points.some((point) => (point.volume ?? 0) > 0 && (point.sell ?? 0) > (point.buy ?? 0)) },
    { label: 'Balanced or unknown-side volume', color: isDark ? '#71717a' : '#a1a1aa', present: points.some((point) => (point.volume ?? 0) > 0 && point.buy === point.sell) },
  ].filter((kind) => kind.present);
  const clockCoverage = (key: string, w: NewsEventStudyWindow) => {
    const expected = Math.abs(study.parameters?.windows_minutes?.[key] ?? Number(key.split('_')[1]));
    return `${w.minutes ?? '—'} / ${expected} min${w.status === 'partial' ? ' · partial coverage' : ''}`;
  };
  return (
    <section className="space-y-5 rounded-xl border border-border p-4 sm:p-6" data-event-study aria-label="Intraday event study">
      <div>
        <h4 className="text-lg font-semibold">Minute-by-minute market response</h4><p className="mt-1 text-sm text-muted-foreground">t0 is the first trading minute used for the announcement. Negative minutes are before it; positive minutes are after it. Breaks and nights are skipped.</p>
        <p className="mt-2 text-sm text-muted-foreground">{anchor ? `t0 = ${anchor.session} at ${anchor.minute} (Singapore) · ${TIMING_LABEL[anchor.timing] || anchor.timing}` : 'Anchor unavailable'}{typeof anchor?.mid === 'number' ? ` · reference mid-price ${anchor.mid.toFixed(4)}` : ''}.</p>
      </div>
      {!hasMid && <p className="text-xs text-muted-foreground">Mid-price change is unavailable because the price reference at t0 or the book observations are missing.</p>}
      <div className="overflow-x-auto rounded-lg bg-muted/20 p-3"><EventStudyChart study={study} isDark={isDark} /></div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground" aria-label="Intraday chart legend">
        {hasMid && <span className="inline-flex items-center gap-2"><i className="inline-block h-0.5 w-5" style={{ backgroundColor: isDark ? '#e4e4e7' : '#18181b' }} />Mid-price change from t0 (%)</span>}
        {hasSpread && <span className="inline-flex items-center gap-2"><i className="inline-block h-0.5 w-5 bg-amber-500" />Quoted spread (% of midpoint)</span>}
        {volumeKinds.map((kind) => <span key={kind.label} className="inline-flex items-center gap-2"><i className="inline-block h-3 w-3" style={{ backgroundColor: kind.color }} />{kind.label}</span>)}
      </div>
      {seriesOffsets.length > 0 && <p className="text-xs text-muted-foreground">Plotted range: {num(seriesStart, 0)} to {seriesEnd >= 0 ? '+' : ''}{num(seriesEnd, 0)} trading minutes relative to t0.{lastSummaryWindow > 0 ? ` Summary windows extend through +${num(lastSummaryWindow, 0)} minutes.` : ''} The trading clock skips lunch and nights; dashed lines mark a session change. {standingBook ? 'Standing quotes carry until the next update within each trading phase, resetting at 09:00 and 13:00. Periods without a valid book remain gaps.' : 'Missing observations remain gaps.'}</p>}
      <div className="space-y-2">
        <h5 className="font-semibold">Transactions and order flow</h5>
        <div className="overflow-x-auto"><table className="w-full min-w-[750px] text-sm">
          <thead><tr className="bg-muted/60 text-left text-muted-foreground">{['Window relative to t0', 'Trading-clock extent', 'Minutes with trades', 'Trades', 'Volume (shares)', 'Buy–sell imbalance'].map((h) => <th key={h} className="px-3 py-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>{order.map((key) => {
            const w = windows[key];
            if (w.status === 'unavailable') return <tr key={key} className="border-t border-border/60"><th className="px-3 py-3 text-left font-medium">{WINDOW_LABEL[key]}</th><td colSpan={5} className="px-3 py-3 text-muted-foreground">Outside the stored sessions</td></tr>;
            return <tr key={key} className="border-t border-border/60"><th className="px-3 py-3 text-left font-medium whitespace-nowrap"><WindowLabel name={key} window={w} anchorSession={anchor?.session} /></th><td className="px-3 py-3">{clockCoverage(key, w)}</td><td className="px-3 py-3 tabular-nums">{w.minutes_with_trades ?? '—'}</td><td className="px-3 py-3 tabular-nums">{num(w.trades ?? '—', 0)}</td><td className="px-3 py-3 tabular-nums">{num(w.volume ?? '—', 0)}{w.trade_data_status && w.trade_data_status !== 'complete' && <span className="block text-xs text-muted-foreground">{w.trade_data_status === 'partial' ? 'Partial trade coverage' : 'Trade data unavailable'}</span>}</td><td className="px-3 py-3 tabular-nums">{imbalance(w)}</td></tr>;
          })}</tbody>
        </table></div>
        <p className="text-xs leading-relaxed text-muted-foreground">Imbalance = (buyer-initiated volume − seller-initiated volume) / their combined volume. Trades with an unknown side are excluded from this ratio. Clock extent describes the available session boundaries, not complete data coverage; minutes with trades count only minutes containing observed trades.</p>
      </div>
      <div className="space-y-2">
        <h5 className="font-semibold">Price and displayed liquidity</h5>
        <div className="overflow-x-auto"><table className="w-full min-w-[750px] text-sm">
          <thead><tr className="bg-muted/60 text-left text-muted-foreground">{['Window', 'Minutes with book', directionalReturns ? 'Mid-price change' : 'Last mid-price vs t0', 'Mean quoted spread', 'Mean bid depth (shares)', 'Mean ask depth (shares)'].map((h) => <th key={h} className="px-3 py-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>{order.map((key) => {
            const w = windows[key];
            if (w.status === 'unavailable') return <tr key={key} className="border-t border-border/60"><th className="px-3 py-3 text-left font-medium">{WINDOW_LABEL[key]}</th><td colSpan={5} className="px-3 py-3 text-muted-foreground">Outside the stored sessions</td></tr>;
            return <tr key={key} className="border-t border-border/60"><th className="px-3 py-3 text-left font-medium whitespace-nowrap"><WindowLabel name={key} window={w} anchorSession={anchor?.session} /></th><td className="px-3 py-3 tabular-nums">{w.minutes_with_book ?? '—'}{typeof w.book_coverage_pct === 'number' && <span className="block text-xs text-muted-foreground">{num(w.book_coverage_pct, 1)}% time coverage</span>}</td><td className="px-3 py-3 tabular-nums">{percentageFromBasisPoints(w.mid_return_bps)}</td><td className="px-3 py-3 tabular-nums">{percentageFromBasisPoints(w.tw_spread_bps, false)}</td><td className="px-3 py-3 tabular-nums"><DepthValue postEvent={key.startsWith('post_')} mean={w.mean_bid_depth} change={w.bid_depth_change_shares} percent={w.bid_depth_change_pct} /></td><td className="px-3 py-3 tabular-nums"><DepthValue postEvent={key.startsWith('post_')} mean={w.mean_ask_depth} change={w.ask_depth_change_shares} percent={w.ask_depth_change_pct} /></td></tr>;
          })}</tbody>
        </table></div>
        {study.depth_baseline && <p className="rounded-lg bg-muted/30 p-3 text-xs text-muted-foreground">Depth changes compare each post-event window’s time-weighted mean with the two-hour pre-event mean: bid {num(study.depth_baseline.mean_bid_depth, 0)} shares · ask {num(study.depth_baseline.mean_ask_depth, 0)} shares. Δ shares = window mean − pre-event mean; Δ % = Δ shares / pre-event mean × 100.{study.depth_baseline.eligible ? ` Pre-event book coverage: ${num(study.depth_baseline.coverage_pct, 1)}% of time across ${study.depth_baseline.minutes_with_book}/120 minutes.${study.depth_baseline.status === 'partial' ? ' These changes compare observed means with partial time coverage; unobserved seconds are not estimated.' : ''}` : ' The pre-event baseline lacks book coverage across all 120 minutes or a complete stored-data read; depth changes are unavailable.'} A zero baseline has no percentage change.</p>}
        <p className="text-xs leading-relaxed text-muted-foreground">Mid-price = (best ask + best bid) / 2. Spread (%) = (best ask − best bid) / mid-price × 100. Spread and depth are time-weighted means over book coverage; depth sums the top {study.parameters?.depth_levels ?? 5} levels on each side. {standingBook ? 'Covered minutes include standing quotes between updates; a partially covered minute can still have fewer than 60 known seconds.' : 'A minute with a book observation does not establish coverage of all 60 seconds.'} {directionalReturns ? 'Pre-window price change runs from the first available mid in that window to the reference at t0. Post-window price change runs from the reference at t0 to the last mid in the window.' : 'Price change compares the last observed mid-price in each window with the reference at t0.'}</p>
      </div>
      <p className="border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">{study.coverage ? `Source coverage: ${num(study.coverage.trades_rows, 0)} trades across ${num(study.coverage.trade_minutes, 0)} minutes with trades; ${num(study.coverage.book_states, 0)} book states across ${num(study.coverage.book_minutes, 0)} minutes with ${standingBook ? 'book coverage' : 'book observations'}, over ${study.coverage.sessions.join(', ')}. ` : ''}Only lit continuous-trading trades are included. The study describes observations around the announcement; it does not establish that the announcement caused them.</p>
    </section>
  );
}

export function NewsEventStudy() {
  const report = useReport();
  const chart: NewsAnnualChart | null | undefined = report.news?.annual_chart;
  const showPublicationHistory = report.news?.delivery?.publication_history_included !== false;
  const { isDark, gridStroke, tickFill } = useChartTheme();
  const [showDots, setShowDots] = useState(true);
  const [showIndex, setShowIndex] = useState(true);
  const [showFollow, setShowFollow] = useState(true);
  const [category, setCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<{ left: number; top: number; lines: string[] } | null>(null);
  const bars = (chart?.bars || []).filter((bar) => typeof bar.close === 'number' && Number.isFinite(bar.close) && bar.close > 0 && typeof bar.volume === 'number' && Number.isFinite(bar.volume) && bar.volume >= 0);
  const allEvents = useMemo(() => [...(chart?.events || []), ...(chart?.dots || [])].map((event) => ({ ...event, event_study: event.event_study || chart?.intraday_studies?.[event.event_study_ref || ''] })), [chart]);
  const events = useMemo(() => [...(chart?.events || []), ...(showDots ? chart?.dots || [] : [])]
    .filter((event) => (showFollow || event.thread_role !== 'follow_up') && (!category || officialNewsCategories(event).includes(category))), [chart, showDots, showFollow, category]);
  const categories = useMemo(() => [...new Set(allEvents.flatMap(officialNewsCategories))].sort(), [allEvents]);
  const history = useMemo(() => sourceHistory(allEvents, chart?.summary_history, chart?.intraday_studies), [allEvents, chart]);
  // Latest included publication is not an ingestion timestamp or proof of complete coverage.
  const latestPublication = history.reduce<string | null>((latest, publication) => {
    const timestamp = Date.parse(publication.published_at);
    return Number.isFinite(timestamp) && (!latest || timestamp > Date.parse(latest)) ? publication.published_at : latest;
  }, null);
  const selectedSource = selected ? history.find((publication) => publication.document_id === selected) : undefined;
  const selectedEvent = selected ? allEvents.find((event) => event.document_id === selected)
    || (selectedSource ? sourceEvent(selectedSource) : null) : null;
  const selectedPublication = selectedEvent?.publications?.find((publication) => publication.document_id === selected);
  const selectedTitle = selectedSource ? publicationTitle(selectedSource) : selectedPublication ? publicationTitle(selectedPublication) : selectedEvent ? publicationTitle(selectedEvent) : '';
  const selectedSummary = selectedSource ? sourceSummary(selectedSource)
    : selectedPublication && selectedPublication.document_id !== selectedEvent?.document_id ? sourceSummary(selectedPublication)
    : selectedEvent ? sourceSummary(selectedEvent) : '';
  const selectedDate = selectedSource?.published_at || selectedPublication?.published_at || selectedEvent?.published_at;
  const selectedUrl = selectedSource?.url || selectedPublication?.url || selectedEvent?.url;
  const relatedHistory = relatedSourceHistory(selectedEvent, allEvents, history);

  if (!chart || report.news?.status !== 'ready') {
    return <div className="rounded-2xl border border-border/60 bg-card/80 p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10"><Newspaper className="h-6 w-6 text-sky-500" /></div>
      <h2 className="mb-2 text-xl font-semibold text-foreground">News & events</h2>
      <p className="mx-auto max-w-md text-muted-foreground">{report.news?.reason ? `News section unavailable for this report (${report.news.reason}).` : 'This report has no news section. Re-run the report to add the publication history.'}</p>
    </div>;
  }

  const dates = bars.map((bar) => bar.date);
  const x = (date: string): number | null => {
    const i = dates.indexOf(date);
    return i < 0 ? null : PAD.l + (i + 0.5) * ((W - PAD.l - PAD.r) / Math.max(1, bars.length));
  };
  const indexMap = new Map((chart.index || []).map((row) => [row.date, row.close]));
  const firstIndex = bars.map((bar) => indexMap.get(bar.date)).find((value) => value != null) ?? null;
  const base = bars.length ? bars[0].close : 1;
  const rebased = (date: string): number | null => {
    const value = indexMap.get(date);
    return value == null || firstIndex == null ? null : (base * value) / firstIndex;
  };
  const indexShown = showIndex && firstIndex != null && bars.length > 0;
  const domainValues = bars.flatMap((bar) => [bar.low ?? bar.close, bar.high ?? bar.close]);
  if (indexShown) for (const bar of bars) { const value = rebased(bar.date); if (value != null) domainValues.push(value); }
  let lo = domainValues.length ? Math.min(...domainValues) : 0;
  let hi = domainValues.length ? Math.max(...domainValues) : 1;
  if (!(hi > lo)) { lo *= 0.99; hi = hi * 1.01 || 1; }
  const y = (value: number) => PAD.t + ((hi - value) / (hi - lo || 1)) * (PRICE_H - PAD.t);
  const vmax = Math.max(1, ...bars.map((bar) => bar.volume));
  const yv = (value: number) => H - PAD.b - (value / vmax) * (H - PAD.b - VOL_TOP);
  const barWidth = Math.max(1, Math.min(24, (W - PAD.l - PAD.r) / Math.max(1, bars.length) - 2));
  const priceColor = isDark ? '#e2e8f0' : '#334155';
  const indexColor = isDark ? '#64748b' : '#94a3b8';
  const volumeColor = isDark ? 'rgba(56, 189, 248, 0.28)' : 'rgba(2, 132, 199, 0.22)';
  const markerColor = isDark ? '#94a3b8' : '#64748b';
  const exchangeLabel = chart.mic === 'XSES' ? 'SGX' : 'exchange';
  const markerSurface = isDark ? '#0f172a' : '#ffffff';
  const months = new Set<string>();
  const monthTicks = bars.filter((bar) => {
    const month = bar.date.slice(0, 7);
    if (months.has(month)) return false;
    months.add(month);
    return true;
  });
  const gridValues = [0, 1, 2, 3, 4, 5].map((i) => lo + ((hi - lo) * i) / 5);
  const stacked = new Map<string, number>();
  const markers = events.slice().sort((a, b) => a.published_at.localeCompare(b.published_at)).flatMap((event) => {
    const date = event.impact?.session_j0;
    const bar = date ? bars.find((row) => row.date === date) : undefined;
    if (!date || !bar) return [];
    const n = stacked.get(date) || 0;
    stacked.set(date, n + 1);
    return [{ event, cx: x(date) as number, cy: y(bar.high ?? bar.close) - 12 - n * 16 }];
  });
  const openPopup = (id: string) => { setSelected(id); setHover(null); };
  const onMove = (ev: MouseEvent<SVGSVGElement>) => {
    if (!bars.length) return;
    const rect = ev.currentTarget.getBoundingClientRect();
    const px = ((ev.clientX - rect.left) * W) / rect.width;
    const i = Math.min(bars.length - 1, Math.max(0, Math.round((px - PAD.l) / ((W - PAD.l - PAD.r) / bars.length) - 0.5)));
    const bar = bars[i];
    if (!bar || (ev.target as Element).closest('[data-event]')) return;
    const indexValue = indexMap.get(bar.date);
    setHover({ left: Math.max(0, Math.min(rect.width - 220, ev.clientX - rect.left + 14)), top: ev.clientY - rect.top + 14,
      lines: [bar.date, `Close ${num(bar.close, bar.close < 10 ? 3 : 2)} · Volume ${num(bar.volume, 0)}${indexValue != null && indexShown ? ` · ${chart.index_ticker || 'Index'} ${num(indexValue, 2)}` : ''}`] });
  };
  const legendItems: Array<{ label: string; swatch: string; shape: 'line' | 'bar' | 'dot' | 'hollow' }> = [
    ...(bars.length ? [{ label: `Close ${chart.ticker}`, swatch: priceColor, shape: 'line' as const }, { label: 'Volume', swatch: volumeColor, shape: 'bar' as const }] : []),
    ...(indexShown ? [{ label: `${chart.index_ticker || 'Index'} rebased on the first close`, swatch: indexColor, shape: 'line' as const }] : []),

    ...(markers.some(({ event }) => !sourceSummary(event)) ? [{ label: 'Hollow circle: summary unavailable', swatch: markerColor, shape: 'hollow' as const }] : []),
  ];

  return <div className="space-y-5">
    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground"><Newspaper className="h-5 w-5 text-sky-500" />News & market response</h2>
      <p className="mt-2 max-w-4xl text-sm text-muted-foreground">Explore what the company announced and how price, trading volume and available liquidity changed around it. These are observed changes; they do not prove the news caused them.</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">Analysis period: {chart.window.start} → {chart.window.end}</span>
        {typeof chart.counts.publications_unique_in_window === 'number' && <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">{chart.counts.publications_unique_in_window} included announcements in this period</span>}
        <span className="rounded-full border border-border bg-background/60 px-3 py-1.5">Latest included announcement: {latestPublication ? localTime(latestPublication, chart.mic, true) : 'date unavailable'}</span>
      </div>
      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <p><strong className="text-foreground">1. Explore the news.</strong> <span className="text-muted-foreground">Click a colored marker to read the summary and see daily or minute-by-minute changes.</span></p>
        <p><strong className="text-foreground">2. Compare categories.</strong> <span className="text-muted-foreground">Below the chart, compare price moves and trading activity across types of news.</span></p>
      </div>
    </div>
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">1 · Explore announcements</h3>
      <div className="rounded-xl border border-border/60 bg-card/80 p-3 sm:p-4">
        <p className="text-sm font-medium">Marker colors = {exchangeLabel} announcement categories</p>
        <p className="mt-1 text-xs text-muted-foreground">Select a category to filter this chart. Colors identify the type of announcement; they do not rate the news as positive or negative.</p>
        <div className="mt-3 flex flex-wrap gap-2" aria-label="Filter chart by announcement category">
          <button type="button" aria-pressed={category === null} onClick={() => setCategory(null)} className={`rounded-full border px-3 py-1.5 text-xs ${category === null ? 'border-foreground bg-foreground text-background' : 'border-border text-muted-foreground hover:bg-muted'}`}>All categories</button>
          {categories.map((label) => {
            const color = newsCategoryColor(`official:${label}`, isDark);
            return <button type="button" key={label} aria-pressed={category === label} onClick={() => setCategory(category === label ? null : label)} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-left text-xs transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ borderColor: category === label ? color : `${color}55`, backgroundColor: category === label ? `${color}22` : undefined }}><i aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />{label}</button>;
          })}
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      {(chart.dots?.length ?? 0) > 0 && <label className="flex items-center gap-2"><input type="checkbox" checked={showDots} onChange={(ev) => setShowDots(ev.target.checked)} />Include routine filings & grouped series</label>}
      {allEvents.some((event) => event.thread_role === 'follow_up') && <label className="flex items-center gap-2"><input type="checkbox" checked={showFollow} onChange={(ev) => setShowFollow(ev.target.checked)} />Include updates to earlier stories</label>}
      {(chart.index?.length ?? 0) > 0 && <label className="flex items-center gap-2"><input type="checkbox" checked={showIndex} onChange={(ev) => setShowIndex(ev.target.checked)} />Market index</label>}
    </div>
    {legendItems.length > 0 && <div className="flex flex-wrap gap-4 text-xs text-muted-foreground" aria-label="Publication chart legend">
      {legendItems.map((item) => <span key={item.label} className="inline-flex items-center gap-1.5">
        <i className={item.shape === 'dot' || item.shape === 'hollow' ? 'inline-block h-2.5 w-2.5 rounded-full' : 'inline-block w-3.5 rounded-sm'} style={{ background: item.shape === 'hollow' ? 'transparent' : item.swatch, border: item.shape === 'hollow' ? `1.5px solid ${item.swatch}` : undefined, height: item.shape === 'line' ? 3 : item.shape === 'bar' ? 8 : undefined }} />{item.label}
      </span>)}
      {markers.some(({ event }) => event.thread_role === 'follow_up') && <span>Dashed outline: update to an earlier story.</span>}
    </div>}
    <p className="text-xs text-muted-foreground" aria-live="polite">Showing {markers.length} chart markers{category ? ` · ${category}` : ''}. A circle is an announcement; a diamond groups several filings. Chart filters do not change the category comparison below.{allEvents.some((event) => officialNewsCategories(event).length > 1 || officialNewsCategories(event).includes('Category unavailable')) && ' Grey: multiple categories or category unavailable.'}</p>
    <div className="relative rounded-2xl border border-border/60 bg-card/80 p-2" data-news-chart>
      {bars.length === 0 ? <p className="p-4 text-sm text-muted-foreground">No price series in this report. {showPublicationHistory ? 'All source publications remain available in the history below.' : 'Use the category comparison below to open the included publications.'}</p> : <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="group" aria-label={`One year of close and volume for ${chart.ticker} with publications`} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
        {gridValues.map((value) => <g key={value}>
          <line x1={PAD.l} x2={W - PAD.r} y1={y(value)} y2={y(value)} stroke={gridStroke} strokeWidth={1} />
          <text x={PAD.l - 6} y={y(value) + 4} textAnchor="end" fontSize={11} fill={tickFill}>{num(value, value < 10 ? 3 : 2)}</text>
          <text x={W - PAD.r + 6} y={y(value) + 4} textAnchor="start" fontSize={11} fill={tickFill}>{pct(value / base - 1)}</text>
        </g>)}
        <text x={W - 4} y={PRICE_H + 18} textAnchor="end" fontSize={11} fill={tickFill}>right axis: % since {bars[0]?.date}</text>
        {monthTicks.map((bar) => <text key={bar.date} x={x(bar.date) ?? 0} y={H - PAD.b + 16} textAnchor="middle" fontSize={11} fill={tickFill}>{bar.date.slice(5, 7)}/{bar.date.slice(2, 4)}</text>)}
        {bars.map((bar) => <rect key={bar.date} x={(x(bar.date) ?? 0) - barWidth / 2} y={yv(bar.volume)} width={barWidth} height={Math.max(0, H - PAD.b - yv(bar.volume))} rx={1} fill={volumeColor} />)}
        {indexShown && <polyline fill="none" stroke={indexColor} strokeWidth={1.5} strokeLinejoin="round" points={bars.map((bar) => { const value = rebased(bar.date); return value == null ? null : `${x(bar.date)},${y(value)}`; }).filter(Boolean).join(' ')} />}
        <polyline fill="none" stroke={priceColor} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" points={bars.map((bar) => `${x(bar.date)},${y(bar.close)}`).join(' ')} />
        {markers.map(({ event, cx, cy }) => {
          const follow = event.thread_role === 'follow_up';
          const radius = 6;
          const eventCategories = officialNewsCategories(event);
          const color = newsCategoryColor(eventCategories.length === 1 ? `official:${eventCategories[0]}` : 'mixed', isDark);
          const stroke = selectedEvent?.document_id === event.document_id ? (isDark ? '#f8fafc' : '#0f172a') : color;
          return <g key={event.document_id} data-event={event.document_id} transform={`translate(${cx},${cy})`} style={{ cursor: 'pointer' }} role="button" tabIndex={0} aria-label={`Open event: ${publicationTitle(event)} · ${eventCategories.join(", ")}`} onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); openPopup(event.document_id); } }} onClick={(ev) => { ev.stopPropagation(); openPopup(event.document_id); }} onMouseEnter={(ev) => {
            const box = (ev.currentTarget.closest('[data-news-chart]') as HTMLElement | null)?.getBoundingClientRect();
            setHover({ left: box ? Math.max(0, Math.min(box.width - 260, ev.clientX - box.left + 14)) : 0, top: box ? ev.clientY - box.top + 14 : 0, lines: [publicationTitle(event), `${exchangeLabel.toUpperCase()}: ${eventCategories.join(' · ')}`, `Published: ${localTime(event.published_at, chart.mic)}`, `First market day (J0): ${event.impact?.session_j0 || 'Unavailable'}${isCalculatedSeries(event) ? ' · grouped filing series' : ''}`] });
          }} onMouseLeave={() => setHover(null)}>
            {isCalculatedSeries(event) ? <path d="M 0 -7 L 7 0 L 0 7 L -7 0 Z" fill={sourceSummary(event) ? color : markerSurface} stroke={stroke} strokeWidth={1.8} /> : <circle r={radius} fill={sourceSummary(event) ? color : markerSurface} stroke={stroke} strokeWidth={1.8} strokeDasharray={follow ? '2.5 2' : undefined} />}
            <circle r={14} fill="transparent" stroke="none" />
          </g>;
        })}
      </svg>}
      {hover && <div className="pointer-events-none absolute z-10 max-w-sm rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow" style={{ left: hover.left, top: hover.top }}><div className="font-semibold">{hover.lines[0]}</div>{hover.lines.slice(1).map((line, i) => <div key={i}>{line}</div>)}</div>}
    </div>
    <NewsMacroStudy comparison={chart.macro_comparison} publications={history} onOpen={openPopup} bars={bars} mic={chart.mic} />
    <Dialog open={selectedEvent !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      {selectedEvent && <DialogContent className="flex max-h-[92dvh] w-[calc(100vw-2rem)] max-w-[1280px] flex-col gap-0 overflow-hidden p-0 sm:max-w-[1280px]" data-news-popup>
        <DialogHeader className="shrink-0 border-b border-border px-5 py-5 pr-12 text-left sm:px-8 sm:pr-14">
          <DialogTitle className="text-xl leading-snug sm:text-2xl">{selectedTitle}</DialogTitle>
          <DialogDescription className="mt-1">{chart.ticker} · {isCalculatedSeries(selectedEvent) ? 'Calculated series · Last filing' : 'Published'} {localTime(selectedDate, chart.mic)}</DialogDescription>
          {!isCalculatedSeries(selectedEvent) && <PublicationClassification publication={selectedSource || selectedPublication || selectedEvent} mic={chart.mic} />}
        </DialogHeader>
        <div className="space-y-6 overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          {!isCalculatedSeries(selectedEvent) && <AtAGlance event={selectedEvent} study={selectedEvent.event_study} />}
          <DailyMarketTable event={selectedEvent} />
          <section className="space-y-2" aria-label="Publication summary">
            <h4 className="text-base font-semibold">{isCalculatedSeries(selectedEvent) ? 'Series summary' : 'Publication summary'}</h4>
            {isCalculatedSeries(selectedEvent) && <p className="text-sm text-muted-foreground">This calculated series groups director-disposal filings. Its reference session is the last source filing; the source publications are listed chronologically below.</p>}
            <p className="text-sm text-foreground">{selectedSummary || 'Summary unavailable.'}</p>
            {selectedUrl && <a className="inline-block text-sm text-sky-600 underline dark:text-sky-400" href={selectedUrl} target="_blank" rel="noopener noreferrer">{sourceLabel(chart.mic)}</a>}
          </section>
          <EventStudyView study={selectedEvent.event_study} calculatedSeries={isCalculatedSeries(selectedEvent)} />
          {relatedHistory.length > 1 && <section className="space-y-3" aria-label="Related publication history">
            <h4 className="text-base font-semibold">{isCalculatedSeries(selectedEvent) ? 'Source filings in chronological order' : 'Earlier news & updates on this story'}</h4>
            <PublicationHistory rows={relatedHistory} onOpen={openPopup} mic={chart.mic} />
          </section>}
        </div>
      </DialogContent>}
    </Dialog>
    {showPublicationHistory && <details className="rounded-2xl border border-border/60 bg-card/80">
      <summary className="cursor-pointer px-4 py-3 text-sm text-muted-foreground">All available announcements — {history.length} publications, including older history</summary>
      <div className="px-4 pb-5"><p className="mb-4 text-sm text-muted-foreground">This archive can extend beyond the year shown in the chart. Open a title to explore its summary and available market data.</p><PublicationHistory rows={history} onOpen={openPopup} mic={chart.mic} /></div>
    </details>}
  </div>;
}

export default NewsEventStudy;
