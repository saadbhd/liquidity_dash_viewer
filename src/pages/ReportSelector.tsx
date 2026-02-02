// ============================================================================
// REPORT SELECTOR PAGE - Grid of available reports
// ============================================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Calendar, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { REPORTS_INDEX } from '@/data/reportsIndex';
import { ThemeToggle } from '@/components/ThemeToggle';

export function ReportSelector() {
    return (
        <div className="min-h-screen bg-background">
            {/* Background gradient */}
            <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                            <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Liquidity Reports</h1>
                            <p className="text-sm text-slate-500">Select a report to view detailed analysis</p>
                        </div>
                        <div className="ml-auto">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Reports Grid */}
            <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REPORTS_INDEX.map((report, index) => (
                        <motion.div
                            key={report.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/report/${report.id}`}
                                className="block group"
                            >
                                <div className="glass-panel border border-slate-800/50 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                                    {/* Ticker Badge */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                                            <span className="text-white font-bold text-lg">{report.ticker}</span>
                                        </div>
                                        <span className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-400 uppercase">
                                            {report.market}
                                        </span>
                                    </div>

                                    {/* Company Info */}
                                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-sky-400 transition-colors">
                                        {report.company}
                                    </h3>

                                    {/* Meta Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Building2 className="w-4 h-4" />
                                            <span>{report.sector}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="capitalize">{report.market_cap_category} Cap</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{report.asof_date}</span>
                                        </div>
                                    </div>

                                    {/* View Link */}
                                    <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                                        <span>View Report</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {REPORTS_INDEX.length === 0 && (
                    <div className="text-center py-20">
                        <FileText className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-400 mb-2">No Reports Available</h3>
                        <p className="text-sm text-slate-600">Add reports to the reportsIndex.ts file</p>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-slate-800/50 mt-12">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <p className="text-xs text-slate-600 text-center">
                        Liquidity Analysis Reports • Generated by Deltablock
                    </p>
                </div>
            </footer>
        </div>
    );
}
