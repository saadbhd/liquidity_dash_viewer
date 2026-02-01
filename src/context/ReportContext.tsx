// ============================================================================
// REPORT CONTEXT - Provides report data to all section components
// ============================================================================

import { createContext, useContext, type ReactNode } from 'react';
import type { ReportData } from '@/types/report';

const ReportContext = createContext<ReportData | null>(null);

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
    return (
        <ReportContext.Provider value={report}>
            {children}
        </ReportContext.Provider>
    );
}
