// ============================================================================
// REPORT CONTEXT - Provides report data to all section components
// ============================================================================

import { createContext, useContext, type ReactNode } from 'react';
import type { ReportData } from '@/types/report';

const ReportContext = createContext<ReportData | null>(null);

function normalizeReportForRender<T>(input: T): T {
    const keepObjectPaths = new Set([
        'content.exec_metrics[].interpretation',
        'content.liq_tiles[].interp',
    ]);

    const walk = (value: any, parentKey = '', path = ''): any => {
        if (Array.isArray(value)) {
            const listPath = path ? `${path}[]` : '[]';
            return value.map((v) => walk(v, parentKey, listPath));
        }

        if (typeof value === 'string') {
            let s = value;
            s = s.replace(/\.{3,}/g, '.').replace(/…+/g, '.');
            s = s.replace(/\s{2,}/g, ' ').trim();
            return s;
        }

        if (value && typeof value === 'object') {
            const keys = Object.keys(value);
            const keepAsObject = keepObjectPaths.has(path);

            if (!keepAsObject) {
                const hasInterpretationShape = keys.includes('text') && keys.includes('cls') && keys.includes('icon');
                if (hasInterpretationShape && typeof value.text === 'string') {
                    return value.text;
                }
                if (keys.includes('insight') && typeof value.insight === 'string') {
                    return value.insight;
                }
            }

            const out: Record<string, unknown> = {};
            for (const [k, v] of Object.entries(value)) {
                const childPath = path ? `${path}.${k}` : k;
                out[k] = walk(v, k, childPath);
            }
            return out;
        }

        return value;
    };

    return walk(input) as T;
}

function ensureReportShape(input: ReportData): ReportData {
    const out = { ...(input || {}) } as ReportData & Record<string, any>;
    const labels: Record<string, any> = (out.labels && typeof out.labels === 'object') ? { ...out.labels } : {};
    const content: Record<string, any> = (out.content && typeof out.content === 'object') ? { ...out.content } : {};
    const theme: Record<string, any> = (out.theme && typeof out.theme === 'object') ? { ...out.theme } : {};
    const badges: Record<string, any> = (theme.badges && typeof theme.badges === 'object') ? { ...theme.badges } : {};

    if (!Array.isArray(labels.header_meta_line1_tokens)) labels.header_meta_line1_tokens = [];
    if (!Array.isArray(labels.header_meta_line2_tokens)) labels.header_meta_line2_tokens = [];
    if (!Array.isArray(labels.drivers_strip)) labels.drivers_strip = [];
    if (!Array.isArray(labels.drivers_wtd_list)) labels.drivers_wtd_list = [];
    if (!Array.isArray(labels.market_state_strip)) labels.market_state_strip = [];
    if (!Array.isArray(labels.transition_cols)) labels.transition_cols = [];
    if (!Array.isArray(labels.peers_hhi_cols)) labels.peers_hhi_cols = [];
    if (!Array.isArray(labels.ofi_tiles)) labels.ofi_tiles = [];
    if (!Array.isArray(labels.ofi_table_cols)) labels.ofi_table_cols = [];
    if (!Array.isArray(labels.ofi_pie_stats)) labels.ofi_pie_stats = [];
    if (!Array.isArray(labels.ofi_unusual_cols)) labels.ofi_unusual_cols = [];

    if (!Array.isArray(content.exec_metrics)) content.exec_metrics = [];
    if (!Array.isArray(content.exec_takeaways)) content.exec_takeaways = [];
    if (!Array.isArray(content.liq_tiles)) content.liq_tiles = [];
    if (!Array.isArray(content.impact_summary_cards)) content.impact_summary_cards = [];
    if (!Array.isArray(content.peers_hhi_header)) content.peers_hhi_header = [];
    if (!Array.isArray(content.ofi_tiles_interpretations)) content.ofi_tiles_interpretations = [];

    if (!badges.header_health || typeof badges.header_health !== 'object') {
        badges.header_health = {
            text: 'Liquidity Health: N/A',
            bg: 'bg-slate-700/40',
            textColor: 'text-slate-300',
            dot: 'bg-slate-400',
        };
    }

    theme.badges = badges;
    out.labels = labels as any;
    out.content = content as any;
    out.theme = theme as any;
    return out as ReportData;
}

export function useReport(): ReportData {
    const ctx = useContext(ReportContext);
    if (!ctx) {
        throw new Error('useReport must be used within a ReportProvider');
    }
    return ctx;
}

interface ReportProviderProps {
    report: ReportData;
    children: ReactNode;
}

export function ReportProvider({ report, children }: ReportProviderProps) {
    const safeReport = ensureReportShape(normalizeReportForRender(report));

    return (
        <ReportContext.Provider value={safeReport}>
            {children}
        </ReportContext.Provider>
    );
}
