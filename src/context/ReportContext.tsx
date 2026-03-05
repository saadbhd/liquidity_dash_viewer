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
    const safeReport = normalizeReportForRender(report);

    return (
        <ReportContext.Provider value={safeReport}>
            {children}
        </ReportContext.Provider>
    );
}
