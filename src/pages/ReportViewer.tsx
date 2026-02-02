// ============================================================================
// REPORT VIEWER PAGE - Displays a single report with dynamic loading
// ============================================================================

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    TrendingUp,
    TrendingDown,
    Activity,
    Clock,
    Scale,
    Flag,
    Menu,
    X,
    ChevronRight,
    Zap,
    Target,
    ArrowRight,
    ArrowLeft,
    Users,
    PieChart,
    BarChart2,
    Loader2
} from 'lucide-react';
import { loadReportData } from '@/data/reportsIndex';
import { ReportProvider } from '@/context/ReportContext';
import { FloatingHelp } from '@/components/FloatingHelp';
import { HeroSection } from '@/sections/HeroSection';
import { LiquidityScore } from '@/sections/LiquidityScore';
import { MarketComparison } from '@/sections/MarketComparison';
import { PerformancePanel } from '@/sections/PerformancePanel';
import { DriversAnalysis } from '@/sections/DriversAnalysis';
import { ExecutionPanel } from '@/sections/ExecutionPanel';
import { TraderComposition } from '@/sections/TraderComposition';
import { PeerTraderComposition } from '@/sections/PeerTraderComposition';
import { PriceMovingTrades } from '@/sections/PriceMovingTrades';
import { IntradayPanel } from '@/sections/IntradayPanel';
import { OFIPanel } from '@/sections/OFIPanel';
import { ShortSellingAndLending } from '@/sections/ShortSellingAndLending';
import { IndexPanel } from '@/sections/IndexPanel';
import { ActionPanel } from '@/sections/ActionPanel';
import type { ReportData } from '@/types/report';

function buildNavItems(report: ReportData) {
    const showShort = report.meta.market === 'XSES' && !!report.series.short_selling?.data_available;
    const showIndex = report.meta.market === 'XSES';

    return [
        { id: 'hero', label: 'Overview', icon: LayoutDashboard },
        { id: 'liquidity', label: 'Liquidity Score', icon: Activity },
        { id: 'comparison', label: 'Market Comparison', icon: BarChart2 },
        { id: 'performance', label: 'Performance', icon: TrendingUp },
        { id: 'drivers', label: 'What Drives Price', icon: PieChart },
        { id: 'execution', label: 'Trading Costs', icon: Target },
        { id: 'traders', label: 'Trader Types', icon: Users },
        { id: 'peer-traders', label: 'Peer Traders', icon: Users },
        { id: 'price-moving', label: 'Price-Moving Trades', icon: Activity },
        { id: 'intraday', label: 'Trading Times', icon: Clock },
        { id: 'ofi', label: 'Order Flow', icon: Scale },
        ...(showShort ? [{ id: 'short', label: 'Short Selling', icon: TrendingDown }] : []),
        ...(showIndex ? [{ id: 'index', label: 'Index Eligibility', icon: Flag }] : []),
        { id: 'actions', label: 'Action Plan', icon: Zap },
    ];
}

export function ReportViewer() {
    const { id } = useParams<{ id: string }>();
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const [peerMethodology, setPeerMethodology] = useState<{ title: string; steps: string[]; peers: { ticker: string; name: string; marketCap: string }[] } | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('hero');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [scrolled, setScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const navItems = reportData ? buildNavItems(reportData) : [];
        navItems.forEach(({ id: navId }) => {
            const element = document.getElementById(navId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [reportData]);

    // Loading State
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0c10] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-sky-500 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Loading report...</p>
                </div>
            </div>
        );
    }

    // Error State
    if (error || !reportData) {
        return (
            <div className="min-h-screen bg-[#0a0c10] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <X className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2">Report Not Found</h2>
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

    const headerHealth = reportData.theme.badges.header_health;
    const headerHealthTextColor = headerHealth.textColor ?? 'text-slate-300';
    const headerHealthBg = headerHealth.bg ?? 'bg-slate-700/40';
    const headerHealthBorder = headerHealthTextColor.includes('red')
        ? 'border-red-500/30'
        : headerHealthTextColor.includes('emerald')
            ? 'border-emerald-500/30'
            : headerHealthTextColor.includes('amber')
                ? 'border-amber-500/30'
                : 'border-slate-700/40';

    return (
        <ReportProvider report={reportData}>
            <div className="min-h-screen bg-[#0a0c10]">
                {/* Background gradient overlay */}
                <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

                {/* Mobile Header */}
                <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="p-2 text-slate-400 hover:text-white">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{reportData.meta.ticker}</span>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-white">{reportData.meta.company}</h1>
                                <p className="text-xs text-slate-500">Liquidity Report</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 text-slate-400 hover:text-white"
                        >
                            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <motion.aside
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="fixed left-0 top-0 bottom-0 w-[280px] z-40 glass-panel border-r border-slate-800/50 hidden lg:flex flex-col"
                        >
                            {/* Logo */}
                            <div className="p-6 border-b border-slate-800/50">
                                <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-4 transition-colors">
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>All Reports</span>
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                                        <span className="text-white font-bold">{reportData.meta.ticker}</span>
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-white">{reportData.meta.company}</h1>
                                        <p className="text-xs text-slate-500">{reportData.meta.asof_date}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                                {buildNavItems(reportData).map(({ id: navId, label, icon: Icon }) => (
                                    <button
                                        key={navId}
                                        onClick={() => scrollToSection(navId)}
                                        className={`nav-item w-full ${activeSection === navId ? 'active' : ''}`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="flex-1 text-left">{label}</span>
                                        {activeSection === navId && (
                                            <ChevronRight className="w-4 h-4 text-sky-400" />
                                        )}
                                    </button>
                                ))}
                            </nav>

                            {/* Footer */}
                            <div className="p-4 border-t border-slate-800/50">
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Live Data</span>
                                </div>
                                <p className="text-xs text-slate-600 mt-2">{reportData.content.footer}</p>
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Main Content */}
                <main className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-[280px]' : ''}`}>
                    {/* Desktop Header */}
                    <header
                        className={`hidden lg:flex items-center justify-between px-8 py-4 sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-800/50' : ''
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/50"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div className="h-6 w-px bg-slate-800" />
                            <nav className="flex items-center gap-2 text-sm text-slate-500">
                                <Link to="/" className="hover:text-white transition-colors">Reports</Link>
                                <ArrowRight className="w-3 h-3" />
                                <span className="text-slate-300">Liquidity Analysis</span>
                                <ArrowRight className="w-3 h-3" />
                                <span className="text-sky-400">{reportData.meta.ticker}</span>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-500">Market: {reportData.meta.market}</span>
                            <span className="text-xs text-slate-500">Sector: {reportData.meta.sector}</span>
                            <div className={`px-3 py-1.5 ${headerHealthBg} border ${headerHealthBorder} rounded-full`}>
                                <span className={`text-xs font-medium ${headerHealthTextColor}`}>{reportData.theme.badges.header_health.text}</span>
                            </div>
                        </div>
                    </header>

                    {/* Content Sections */}
                    <div className="p-4 lg:p-8 pt-20 lg:pt-8 space-y-8">
                        <section id="hero">
                            <HeroSection />
                        </section>

                        <section id="liquidity">
                            <LiquidityScore />
                        </section>

                        <section id="comparison">
                            <MarketComparison />
                        </section>

                        <section id="performance">
                            <PerformancePanel />
                        </section>

                        <section id="drivers">
                            <DriversAnalysis />
                        </section>

                        <section id="execution">
                            <ExecutionPanel />
                        </section>

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

                        <section id="ofi">
                            <OFIPanel />
                        </section>

                        {reportData.meta.market === 'XSES' && reportData.series.short_selling?.data_available ? (
                            <section id="short">
                                <ShortSellingAndLending />
                            </section>
                        ) : null}

                        {reportData.meta.market === 'XSES' ? (
                            <section id="index">
                                <IndexPanel />
                            </section>
                        ) : null}

                        <section id="actions">
                            <ActionPanel />
                        </section>
                    </div>
                </main>

                {/* Floating Help Button */}
                <FloatingHelp peerMethodology={peerMethodology} />
            </div>
        </ReportProvider>
    );
}
