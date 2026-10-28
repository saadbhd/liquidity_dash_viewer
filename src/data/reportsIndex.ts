// The catalog is small; each report payload is imported only when its route opens.
import type { PeerMethodology, ReportData } from '@/types/report';
import reportMetadata from './reportsMetadata.json';

export interface ReportMeta {
    id: string;
    market: string;
    ticker: string;
    company: string;
    asof_date: string;
    sector: string;
    market_cap_category: string;
}

interface ReportModule {
    REPORT_DATA?: ReportData;
    default?: ReportData;
    PEER_METHODOLOGY?: PeerMethodology;
}

const reportModules = import.meta.glob<ReportModule>('./*_*_*.ts');
const metadata: Record<string, Partial<ReportMeta>> = reportMetadata;
const catalogPaths = new Map<string, string>();

function describeReport(path: string): ReportMeta | null {
    const match = /^\.\/([a-z0-9]{4})_(.+)_(\d{4}-\d{2}-\d{2})(?:_([a-z0-9][a-z0-9._-]*))?\.ts$/i.exec(path);
    if (!match) return null;
    const [, market, ticker, date] = match;
    // Preserve the full filename, including variants such as _v2.
    const id = path.slice(2, -3).replace('_', '-');
    const saved = metadata[path];
    catalogPaths.set(id, path);
    return {
        id,
        market: saved?.market || market.toUpperCase(),
        ticker: saved?.ticker || ticker.toUpperCase(),
        company: saved?.company || ticker.toUpperCase(),
        asof_date: saved?.asof_date || date,
        sector: saved?.sector || '—',
        market_cap_category: saved?.market_cap_category || '—',
    };
}

// The glob, rather than a stale metadata file, decides which reports exist.
// A newly added report remains accessible before the next metadata refresh.
export const REPORTS_INDEX: ReportMeta[] = Object.keys(reportModules)
    .map(describeReport)
    .filter((report): report is ReportMeta => report !== null)
    .sort((a, b) => b.asof_date.localeCompare(a.asof_date) || a.id.localeCompare(b.id));

export async function loadReportData(id: string) {
    const path = catalogPaths.get(id);
    const load = path ? reportModules[path] : undefined;
    if (!load) throw new Error(`Report not found: ${id}`);

    const module = await load();
    const reportData = module.REPORT_DATA ?? module.default;
    if (!reportData?.meta || !reportData.series) {
        throw new Error(`Invalid report data: ${id}`);
    }
    return {
        reportData,
        peerMethodology: module.PEER_METHODOLOGY,
    };
}
