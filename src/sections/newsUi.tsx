// Small presentational helpers shared by the News & Events views.
// Neutral by design: they describe data coverage, never good/bad outcomes.

import type { ReactNode } from 'react';
import type { NewsBar } from '@/types/report';

export type CoverageStatus = 'complete' | 'partial' | 'unavailable' | string | null | undefined;

const PILL: Record<string, string> = {
  complete: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  partial: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  unavailable: 'bg-muted text-muted-foreground',
  info: 'bg-sky-500/10 text-sky-700 dark:text-sky-400',
};

export function StatusPill({ status, children, title }: { status: CoverageStatus | 'info'; children?: ReactNode; title?: string }) {
  const key = status === 'complete' || status === 'partial' || status === 'info' ? status : 'unavailable';
  const label = children ?? (key === 'complete' ? 'Full data' : key === 'partial' ? 'Incomplete data' : 'No data');
  return <span title={title} className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ${PILL[key]}`}>{label}</span>;
}

export function StatTile({ label, value, detail, status }: { label: string; value: ReactNode; detail?: ReactNode; status?: CoverageStatus }) {
  return <div className="min-w-0 rounded-xl border border-border bg-muted/20 p-3 sm:p-4">
    <p className="flex items-center justify-between gap-2 text-xs text-muted-foreground"><span className="truncate">{label}</span>{status && status !== 'complete' && <StatusPill status={status} />}</p>
    <p className="mt-1 text-xl font-semibold tabular-nums text-foreground sm:text-2xl">{value}</p>
    {detail && <p className="mt-1 text-xs text-muted-foreground">{detail}</p>}
  </div>;
}

function median(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Reference level for a J0..J+h comparison: median absolute compounded return of every
 * (h+1)-session window in the displayed year, event sessions included. Same basis as the
 * macro comparison (close before the window to its last close). Descriptive context only.
 */
export function typicalWindowMove(bars: NewsBar[], sessions: number): { median: number | null; windows: number } {
  const closes = bars.map((bar) => bar.close).filter((close) => typeof close === 'number' && Number.isFinite(close) && close > 0);
  const moves: number[] = [];
  for (let end = sessions; end < closes.length; end += 1) moves.push(Math.abs(closes[end] / closes[end - sessions] - 1));
  return { median: median(moves), windows: moves.length };
}

/** SGX securities tick size by price band (S$). Returns null outside SGX. */
export function sgxTick(mic: string, price: number | null | undefined): number | null {
  if (mic !== 'XSES' || typeof price !== 'number' || !(price > 0)) return null;
  return price < 0.2 ? 0.001 : price < 1 ? 0.005 : 0.01;
}
