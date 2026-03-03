// ============================================================================
// REPORT VIEWER PAGE - Displays a single report with dynamic loading
// ============================================================================

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    TrendingDown,
    Activity,
    Clock,
    Menu,
    X,
    ChevronRight,
    ChevronDown,
    Target,
    ArrowRight,
    ArrowLeft,
    Users,
    PieChart,
    BarChart3,
    Loader2
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

type NavItem = { id: string; label: string; icon: React.ElementType };
type NavGroup = { id: string; label: string; icon: React.ElementType; children: NavItem[] };
type NavEntry = NavItem | NavGroup;

function isGroup(entry: NavEntry): entry is NavGroup {
    return 'children' in entry;
}

function buildNavItems(report: ReportData): NavEntry[] {
    const showShort = report.meta.market === 'XSES' && !!report.series.short_selling?.data_available;

    return [
        { id: 'hero', label: 'Overview', icon: LayoutDashboard },
        {
            id: 'group-profile', label: 'Liquidity Profile', icon: BarChart3,
            children: [
                { id: 'liquidity', label: 'Liquidity & Market', icon: Activity },
                { id: 'drivers', label: 'What Drives Price', icon: PieChart },
                { id: 'execution', label: 'Trading Costs', icon: Target },
                ...(showShort ? [{ id: 'short', label: 'Short Selling', icon: TrendingDown }] : []),
            ],
        },
        {
            id: 'group-activity', label: 'Trading Activity', icon: Activity,
            children: [
                { id: 'traders', label: 'Trader Types', icon: Users },
                { id: 'peer-traders', label: 'Peer Traders', icon: Users },
                { id: 'price-moving', label: 'Price-Moving Trades', icon: Activity },
                { id: 'intraday', label: 'Trading Times', icon: Clock },
            ],
        },
    ];
}

function getAllSectionIds(report: ReportData): string[] {
    const ids: string[] = [];
    for (const entry of buildNavItems(report)) {
        if (isGroup(entry)) {
            for (const child of entry.children) ids.push(child.id);
        } else {
            ids.push(entry.id);
        }
    }
    return ids;
}

function getGroupForSection(sectionId: string, navItems: NavEntry[]): string | null {
    for (const entry of navItems) {
        if (isGroup(entry) && entry.children.some(c => c.id === sectionId)) {
            return entry.id;
        }
    }
    return null;
}

export function ReportViewer() {
    const { id } = useParams<{ id: string }>();
    const [reportData, setReportData] = useState<ReportData | null>(null);
    const [peerMethodology, setPeerMethodology] = useState<{ title: string; steps: string[]; peers: { ticker: string; name: string; marketCap: string; sector?: string; industry?: string }[] } | undefined>(undefined);
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

    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
        'group-profile': true,
        'group-activity': true,
    });

    const toggleGroup = (groupId: string) => {
        setOpenGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        if (reportData) {
                            const group = getGroupForSection(entry.target.id, buildNavItems(reportData));
                            if (group) setOpenGroups(prev => ({ ...prev, [group]: true }));
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        const sectionIds = reportData ? getAllSectionIds(reportData) : [];
        sectionIds.forEach((sId) => {
            const element = document.getElementById(sId);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [reportData]);

    // Loading State
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

    // Error State
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
                {/* Background gradient overlay */}
                <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

                {/* Mobile Header */}
                <div className="lg:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800/50">
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="p-2 text-slate-400 hover:text-foreground">
                                <ArrowLeft className="w-5 h-5" />
                            </Link>
                            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">{reportData.meta.ticker}</span>
                            </div>
                            <div>
                                <h1 className="text-sm font-semibold text-foreground">{reportData.meta.company}</h1>
                                <p className="text-xs text-slate-500">Liquidity Report</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 text-slate-400 hover:text-foreground"
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
                                <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-foreground text-sm mb-4 transition-colors">
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>All Reports</span>
                                </Link>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
                                        <span className="text-white font-bold">{reportData.meta.ticker}</span>
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-foreground">{reportData.meta.company}</h1>
                                        <p className="text-xs text-slate-500">{reportData.meta.asof_date}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                                {buildNavItems(reportData).map((entry) => {
                                    if (isGroup(entry)) {
                                        const groupOpen = openGroups[entry.id] ?? true;
                                        const hasActive = entry.children.some(c => c.id === activeSection);
                                        return (
                                            <div key={entry.id}>
                                                <button
                                                    onClick={() => toggleGroup(entry.id)}
                                                    className={`nav-item w-full ${hasActive ? 'text-sky-400' : ''}`}
                                                >
                                                    <entry.icon className="w-4 h-4" />
                                                    <span className="flex-1 text-left font-medium">{entry.label}</span>
                                                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${groupOpen ? '' : '-rotate-90'}`} />
                                                </button>
                                                <AnimatePresence initial={false}>
                                                    {groupOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-4 pl-3 border-l border-slate-800/60 space-y-0.5 py-1">
                                                                {entry.children.map(({ id: childId, label, icon: Icon }) => (
                                                                    <button
                                                                        key={childId}
                                                                        onClick={() => scrollToSection(childId)}
                                                                        className={`nav-item w-full text-sm ${activeSection === childId ? 'active' : ''}`}
                                                                    >
                                                                        <Icon className="w-3.5 h-3.5" />
                                                                        <span className="flex-1 text-left">{label}</span>
                                                                        {activeSection === childId && (
                                                                            <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                                                                        )}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }
                                    return (
                                        <button
                                            key={entry.id}
                                            onClick={() => scrollToSection(entry.id)}
                                            className={`nav-item w-full ${activeSection === entry.id ? 'active' : ''}`}
                                        >
                                            <entry.icon className="w-4 h-4" />
                                            <span className="flex-1 text-left">{entry.label}</span>
                                            {activeSection === entry.id && (
                                                <ChevronRight className="w-4 h-4 text-sky-400" />
                                            )}
                                        </button>
                                    );
                                })}
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
                                className="p-2 text-slate-400 hover:text-foreground rounded-lg hover:bg-slate-800/50"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <div className="h-6 w-px bg-slate-800" />
                            <nav className="flex items-center gap-2 text-sm text-slate-500">
                                <Link to="/" className="hover:text-foreground transition-colors">Reports</Link>
                                <ArrowRight className="w-3 h-3" />
                                <span className="text-slate-300">Liquidity Analysis</span>
                                <ArrowRight className="w-3 h-3" />
                                <span className="text-sky-400">{reportData.meta.ticker}</span>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-500">Market: {reportData.meta.market}</span>
                            <span className="text-xs text-slate-500">Sector: {reportData.meta.sector}</span>
                        </div>
                    </header>

                    {/* Content Sections */}
                    <div className="p-4 lg:p-8 pt-20 lg:pt-8 space-y-8">
                        {/* Overview */}
                        <section id="hero">
                            <HeroSection />
                        </section>

                        {/* Liquidity Profile */}
                        <section id="liquidity">
                            <LiquidityScore />
                        </section>

                        <section id="drivers">
                            <DriversAnalysis />
                        </section>

                        <section id="execution">
                            <ExecutionPanel />
                        </section>

                        {reportData.meta.market === 'XSES' && reportData.series.short_selling?.data_available ? (
                            <section id="short">
                                <ShortSellingAndLending />
                            </section>
                        ) : null}

                        {/* Trading Activity */}
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
                    </div>
                </main>

                {/* Floating Help Button */}
                <FloatingHelp peerMethodology={peerMethodology} />
            </div>
        </ReportProvider>
    );
}
