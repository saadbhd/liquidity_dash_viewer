// ============================================================================
// Reports Index - Auto-discovery using Vite glob imports
// Just add a new report file following the naming pattern and it appears!
// ============================================================================

import type { ReportData } from '@/types/report';

export interface ReportMeta {
    id: string;
    market: string;
    ticker: string;
    company: string;
    asof_date: string;
    sector: string;
    market_cap_category: string;
}

// Auto-discover all report modules using Vite's glob import
// Files must match pattern: {market}_{ticker}_{date}.ts (e.g., xhkg_1828_2026-01-20.ts)
const reportModules = import.meta.glob<{
    REPORT_DATA: ReportData;
    PEER_METHODOLOGY?: any;
}>('./*_*_*.ts', { eager: true });

// Build the reports index automatically from discovered files
function buildReportsIndex(): ReportMeta[] {
    const reports: ReportMeta[] = [];

    for (const path of Object.keys(reportModules)) {
        // Skip this file and non-report files
        if (path.includes('reportsIndex') || path.includes('glossary')) continue;

        const module = reportModules[path];
        if (!module?.REPORT_DATA?.meta) continue;

        const meta = module.REPORT_DATA.meta;

        // Convert filename to URL slug format
        // e.g., ./xhkg_1828_2026-01-20.ts -> xhkg-1828_2026-01-20
        const filename = path.replace('./', '').replace('.ts', '');
        const id = filename.replace(/_/, '-'); // First underscore becomes dash

        reports.push({
            id,
            market: meta.market,
            ticker: meta.ticker,
            company: meta.company,
            asof_date: meta.asof_date,
            sector: meta.sector || meta.industry,
            market_cap_category: meta.market_cap_category,
        });
    }

    // Sort by date (newest first)
    reports.sort((a, b) => b.asof_date.localeCompare(a.asof_date));

    return reports;
}

export const REPORTS_INDEX: ReportMeta[] = buildReportsIndex();

// Dynamic loader that matches the auto-discovered files
export async function loadReportData(id: string) {
    // Convert URL slug back to filename format
    // e.g., xhkg-1828_2026-01-20 -> xhkg_1828_2026-01-20
    const filename = id.replace(/-/, '_');
    const path = `./${filename}.ts`;

    const module = reportModules[path];
    if (!module) {
        throw new Error(`Report not found: ${id}`);
    }

    return {
        reportData: module.REPORT_DATA,
        peerMethodology: module.PEER_METHODOLOGY,
    };
}
