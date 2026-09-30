import type { ReportData, TotalReturnsBlock } from '@/types/report';

type ReturnReport = Pick<ReportData, 'meta' | 'series' | 'q01'>;
type ReturnPresentation = {
  mode: 'quarterly' | 'classic' | 'none';
  block: TotalReturnsBlock | null;
};

function reportScope(report: ReturnReport): string {
  return `${report.meta.market?.trim().toUpperCase()}:${report.meta.ticker?.trim().toUpperCase()}`;
}

export function isScopedReturnsReport(report: ReturnReport): boolean {
  return ['XSES:CRPU', 'XSES:5E2'].includes(reportScope(report));
}

/** Resolve the payload contract identically for rendering and workbook exports. */
export function resolveTotalReturns(report: ReturnReport): ReturnPresentation {
  const scope = reportScope(report);
  const candidates = [report.series?.total_returns, report.q01?.total_returns]
    .filter((block): block is TotalReturnsBlock => Boolean(
      block
      && Array.isArray(block.rows)
      && block.rows.length
      && block.rows.every((row) => row && typeof row === 'object' && !Array.isArray(row))
      && (block.scope == null || (typeof block.scope === 'string' && block.scope.trim().toUpperCase() === scope))
    ));

  // The Alerts payload may carry the new section in either supported location.
  // Prefer an explicit, matching v2 contract over an older copy of the section.
  if (isScopedReturnsReport(report)) {
    const detailed = candidates.find((block) => block.schema_version === 2
      && block.scope?.trim().toUpperCase() === scope
      && Array.isArray(block.periods)
      && block.periods.every((period) => period && typeof period.key === 'string' && typeof period.label === 'string'));
    if (detailed) return { mode: 'quarterly', block: detailed };
  }

  // Existing reports have no version field (or v1). Never interpret a future or
  // mismatched contract as classic data; use another valid classic copy instead.
  const classic = candidates.find((block) => block.schema_version == null || block.schema_version === 1);
  return classic ? { mode: 'classic', block: classic } : { mode: 'none', block: null };
}
