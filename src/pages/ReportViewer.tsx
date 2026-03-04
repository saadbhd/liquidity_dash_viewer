// ============================================================================
// REPORT VIEWER PAGE - Tab-based layout with anchor pill navigation
// ============================================================================

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    TrendingDown,
    Activity,
    Clock,
    X,
    Target,
    ArrowLeft,
    Users,
    PieChart,
    BarChart3,
    Loader2,
    Gauge,
    BookOpen
} from 'lucide-react';
import { loadReportData } from '@/data/reportsIndex';
import { ReportProvider } from '@/context/ReportContext';
import { FloatingHelp } from '@/components/FloatingHelp';
import { HeroSection } from '@/sections/HeroSection';
import { LiquidityScore } from '@/sections/LiquidityScore';
import { DriversAnalysis } from '@/sections/DriversAnalysis';
import { ExecutionPanel } from '@/sections/ExecutionPanel';
import { TraderComposition } from '@/sections/TraderComposition';
import { PeerTraderComposition } from '@/sections/PeerTraderComposition';
import { PriceMovingTrades } from '@/sections/PriceMovingTrades';
import { IntradayPanel } from '@/sections/IntradayPanel';
import { ShortSellingAndLending } from '@/sections/ShortSellingAndLending';
import type { ReportData } from '@/types/report';

type SubSection = { id: string; label: string; icon: React.ElementType };

type TabDef = {
    id: string;
    label: string;
    icon: React.ElementType;
    subSections?: SubSection[];
};

function buildTabs(report: ReportData): TabDef[] {
    const showShort = report.meta.market === 'XSES' && !!report.series.short_selling?.data_available;

    return [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        {
            id: 'liquidity-profile', label: 'Liquidity Profile', icon: BarChart3,
            subSections: [
                { id: 'liquidity', label: 'Liquidity & Market', icon: Activity },
                { id: 'drivers', label: 'What Drives Price', icon: PieChart },
                { id: 'execution', label: 'Trading Costs', icon: Target },
                ...(showShort ? [{ id: 'short', label: 'Short Selling', icon: TrendingDown }] : []),
            ],
        },
        {
            id: 'trading-activity', label: 'Trading Activity', icon: Activity,
            subSections: [
                { id: 'traders', label: 'Trader Types', icon: Users },
                { id: 'peer-traders', label: 'Peer Traders', icon: Users },
                { id: 'price-moving', label: 'Price-Moving Trades', icon: Activity },
                { id: 'intraday', label: 'Trading Times', icon: Clock },
            ],
        },
        { id: 'sentiment', label: 'Sentiment', icon: Gauge },
        { id: 'narratives', label: 'Narratives', icon: BookOpen },
    ];
}

export function ReportViewer() {
    const { id } = useParams<{ id: string }>();
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const [peerMethodology, setPeerMethodology] = useState<{ title: string; steps: string[]; peers: { ticker: string; name: string; marketCap: string; sector?: string; industry?: string }[] } | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [activeSubSection, setActiveSubSection] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const tabs = useMemo(() => reportData ? buildTabs(reportData) : [], [reportData]);
    const currentTab = tabs.find(t => t.id === activeTab);

    useEffect(() => {
        async function loadReport() {
            if (!id) {
                setError('No report ID specified');
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                setError(null);
                const { reportData: data, peerMethodology: peers } = await loadReportData(id);
                setReportData(data);
                setPeerMethodology(peers);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load report');
            } finally {
                setLoading(false);
            }
        }
        loadReport();
    }, [id]);

    const handleTabChange = useCallback((tabId: string) => {
        setActiveTab(tabId);
        const tab = tabs.find(t => t.id === tabId);
        setActiveSubSection(tab?.subSections?.[0]?.id ?? null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [tabs]);

    const scrollToSubSection = useCallback((sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            const offset = 140;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        if (!currentTab?.subSections?.length) return;

        const sectionIds = currentTab.subSections.map(s => s.id);
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSubSection(entry.target.id);
                    }
                }
            },
            { threshold: 0.25, rootMargin: '-140px 0px -40% 0px' }
        );

        const timer = requestAnimationFrame(() => {
            sectionIds.forEach((sId) => {
                const el = document.getElementById(sId);
                if (el) observer.observe(el);
            });
        });

        return () => {
            cancelAnimationFrame(timer);
            observer.disconnect();
        };
    }, [currentTab]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-sky-500 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Loading report...</p>
                </div>
            </div>
        );
    }

    if (error || !reportData) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <X className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">Report Not Found</h2>
                    <p className="text-slate-400 mb-6">{error || 'The requested report could not be loaded'}</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Reports
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <ReportProvider report={reportData}>
            <div className="min-h-screen bg-background">
                <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

                {/* Sticky Header */}
                <header className="sticky top-0 z-50 glass border-b border-border/60">
                    {/* Top bar: back + report info */}
                    <div className="flex items-center justify-between px-4 lg:px-8 py-3">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/60 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </Link>
                            <div className="w-9 h-9 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-sky-500/20">
                                <span className="text-white font-bold text-xs">{reportData.meta.ticker}</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-sm font-semibold text-foreground leading-tight">{reportData.meta.company}</h1>
                                <p className="text-xs text-muted-foreground">{reportData.meta.asof_date} · {reportData.meta.market} · {reportData.meta.sector}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="hidden sm:inline">Live Data</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Tabs */}
                    <div className="px-4 lg:px-8">
                        <nav className="flex justify-center gap-2 -mb-px overflow-x-auto scrollbar-hide">
                            {tabs.map((tab) => {
                                const isActive = activeTab === tab.id;
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={`
                                            relative flex items-center gap-2.5 px-5 py-3 text-[0.9rem] font-medium whitespace-nowrap
                                            transition-colors duration-200 border-b-2
                                            ${isActive
                                                ? 'text-sky-500 border-sky-500'
                                                : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                                            }
                                        `}
                                    >
                                        <Icon className="w-[18px] h-[18px]" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Sub-section Anchor Pills */}
                    <AnimatePresence mode="wait">
                        {currentTab?.subSections && (
                            <motion.div
                                key={currentTab.id}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden border-t border-border/40"
                            >
                                <div className="px-4 lg:px-8 py-2.5 flex justify-center gap-2 overflow-x-auto scrollbar-hide">
                                    {currentTab.subSections.map((sub) => {
                                        const isActive = activeSubSection === sub.id;
                                        const SubIcon = sub.icon;
                                        return (
                                            <button
                                                key={sub.id}
                                                onClick={() => scrollToSubSection(sub.id)}
                                                className={`
                                                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                                                    whitespace-nowrap transition-all duration-200
                                                    ${isActive
                                                        ? 'bg-sky-500/15 text-sky-500 ring-1 ring-sky-500/30'
                                                        : 'bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground'
                                                    }
                                                `}
                                            >
                                                <SubIcon className="w-3 h-3" />
                                                {sub.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>

                {/* Main Content */}
                <main ref={contentRef}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="p-4 lg:p-8 space-y-8"
                        >
                            {activeTab === 'overview' && (
                                <section id="hero">
                                    <HeroSection />
                                </section>
                            )}

                            {activeTab === 'liquidity-profile' && (
                                <>
                                    <section id="liquidity">
                                        <LiquidityScore />
                                    </section>
                                    <section id="drivers">
                                        <DriversAnalysis />
                                    </section>
                                    <section id="execution">
                                        <ExecutionPanel />
                                    </section>
                                    {reportData.meta.market === 'XSES' && reportData.series.short_selling?.data_available && (
                                        <section id="short">
                                            <ShortSellingAndLending />
                                        </section>
                                    )}
                                </>
                            )}

                            {activeTab === 'trading-activity' && (
                                <>
                                    <section id="traders">
                                        <TraderComposition />
                                    </section>
                                    <section id="peer-traders">
                                        <PeerTraderComposition />
                                    </section>
                                    <section id="price-moving">
                                        <PriceMovingTrades />
                                    </section>
                                    <section id="intraday">
                                        <IntradayPanel />
                                    </section>
                                </>
                            )}

                            {activeTab === 'sentiment' && (
                                <section id="sentiment">
                                    <div className="rounded-2xl border border-border/60 bg-card/80 p-8 lg:p-12 text-center">
                                        <div className="mx-auto w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
                                            <Gauge className="w-8 h-8 text-sky-500" />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-3">Sentiment Analysis</h2>
                                        <p className="text-muted-foreground max-w-md mx-auto">
                                            Market sentiment data and analysis will be displayed here.
                                        </p>
                                    </div>
                                </section>
                            )}

                            {activeTab === 'narratives' && (
                                <section id="narratives">
                                    <div className="rounded-2xl border border-border/60 bg-card/80 p-8 lg:p-12 text-center">
                                        <div className="mx-auto w-16 h-16 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6">
                                            <BookOpen className="w-8 h-8 text-sky-500" />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-3">Narratives</h2>
                                        <p className="text-muted-foreground max-w-md mx-auto">
                                            Key narratives and thematic analysis will be displayed here.
                                        </p>
                                    </div>
                                </section>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Floating Help */}
                <FloatingHelp peerMethodology={peerMethodology} />
            </div>
        </ReportProvider>
    );
}
