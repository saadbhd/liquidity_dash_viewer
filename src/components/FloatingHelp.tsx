// ============================================================================
// LAYER 3 — Help & Methodology floating modal
// Tabs: Peer Selection | Methodology (section-organized deep glossary)
// Can be opened at a specific entry via HelpContext.
// ============================================================================

import { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, BookOpen, Info, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { GLOSSARY, GLOSSARY_SECTIONS, type GlossaryEntry } from '@/data/glossary';
import { useHelp } from '@/context/HelpContext';

// Default peer methodology for when no report is loaded
const DEFAULT_PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company",
    "Filter on the same Industry and Sector",
    "If many remain, choose closest by ADV (Average Daily Volume)"
  ],
  peers: [] as { ticker: string; name: string; marketCap: string; sector?: string; industry?: string }[]
};

interface FloatingHelpProps {
  peerMethodology?: {
    title: string;
    steps: string[];
    peers: { ticker: string; name: string; marketCap: string; sector?: string; industry?: string }[];
  };
}

export function FloatingHelp({ peerMethodology = DEFAULT_PEER_METHODOLOGY }: FloatingHelpProps) {
  const { isOpen, activeGlossaryKey, openHelp, closeHelp } = useHelp();
  const [activeTab, setActiveTab] = useState<'peers' | 'methodology'>('peers');
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const PEER_METHODOLOGY = peerMethodology;

  // Group glossary entries by section
  const groupedEntries = useMemo(() => {
    const groups: Record<string, { key: string; entry: GlossaryEntry }[]> = {};
    for (const section of GLOSSARY_SECTIONS) {
      groups[section] = [];
    }
    for (const [key, entry] of Object.entries(GLOSSARY)) {
      const section = entry.section;
      if (!groups[section]) groups[section] = [];
      groups[section].push({ key, entry });
    }
    return groups;
  }, []);

  // When opened with a specific glossary key, switch to methodology tab and expand + scroll
  useEffect(() => {
    if (isOpen && activeGlossaryKey) {
      setActiveTab('methodology');
      setExpandedKeys(prev => new Set(prev).add(activeGlossaryKey));

      // Scroll to the entry after a brief delay for render
      setTimeout(() => {
        const el = entryRefs.current[activeGlossaryKey];
        if (el && scrollContainerRef.current) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
    }
  }, [isOpen, activeGlossaryKey]);

  const toggleExpanded = (key: string) => {
    setExpandedKeys(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openHelp()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sky-500 hover:bg-sky-400 rounded-full shadow-lg shadow-sky-500/30 flex items-center justify-center transition-colors"
      >
        <BookOpen className="w-6 h-6 text-white" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeHelp}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-[5vh] -translate-x-1/2 w-[90vw] max-w-[700px] max-h-[80vh] bg-slate-900 border border-slate-700 rounded-2xl z-50 overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-white">Help & Methodology</h2>
                </div>
                <button
                  onClick={closeHelp}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-800/50 p-2 mx-4 mt-4 rounded-lg">
                <button
                  onClick={() => setActiveTab('peers')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors flex-1 justify-center ${activeTab === 'peers'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <Users className="w-4 h-4" />
                  Peer Selection
                </button>
                <button
                  onClick={() => setActiveTab('methodology')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors flex-1 justify-center ${activeTab === 'methodology'
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Methodology
                </button>
              </div>

              {/* Content */}
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4">
                {activeTab === 'peers' ? (
                  <div className="space-y-5">
                    <div className="bg-slate-800/30 rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Info className="w-4 h-4 text-sky-400" />
                        {PEER_METHODOLOGY.title}
                      </h3>
                      <div className="space-y-3">
                        {PEER_METHODOLOGY.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-slate-300">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white mb-3">Selected Peers</h3>
                      <div className="overflow-x-auto rounded-xl border border-slate-800">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-slate-800/50">
                              <th className="text-slate-400 text-xs font-medium px-4 py-3 text-left">Ticker</th>
                              <th className="text-slate-400 text-xs font-medium px-4 py-3 text-left">Company</th>
                              <th className="text-slate-400 text-xs font-medium px-4 py-3 text-left">Sector</th>
                              <th className="text-slate-400 text-xs font-medium px-4 py-3 text-left">Industry</th>
                              <th className="text-slate-400 text-xs font-medium px-4 py-3 text-right">Market Cap</th>
                            </tr>
                          </thead>
                          <tbody>
                            {PEER_METHODOLOGY.peers.map((peer) => (
                              <tr key={peer.ticker} className="border-t border-slate-800 hover:bg-slate-800/30">
                                <td className="text-slate-300 font-medium px-4 py-3">{peer.ticker}</td>
                                <td className="text-slate-400 px-4 py-3">{peer.name}</td>
                                <td className="text-slate-400 px-4 py-3">{peer.sector ?? '—'}</td>
                                <td className="text-slate-400 px-4 py-3">{peer.industry ?? '—'}</td>
                                <td className="text-slate-400 px-4 py-3 text-right">{peer.marketCap}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <p className="text-sm text-slate-400 mb-2">
                      Detailed methodology for every metric in the dashboard. Click any entry to expand.
                    </p>

                    {GLOSSARY_SECTIONS.map(section => {
                      const entries = groupedEntries[section];
                      if (!entries || entries.length === 0) return null;

                      return (
                        <div key={section} className="space-y-2">
                          {/* Section header */}
                          <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider px-1 pt-2 border-b border-slate-800 pb-2">
                            {section}
                          </h3>

                          {entries.map(({ key, entry }) => {
                            const isExpanded = expandedKeys.has(key);
                            return (
                              <div
                                key={key}
                                ref={el => { entryRefs.current[key] = el; }}
                                className={`rounded-xl border transition-colors ${activeGlossaryKey === key
                                    ? 'border-sky-500/50 bg-sky-500/5'
                                    : 'border-slate-800 bg-slate-800/30'
                                  }`}
                              >
                                <button
                                  onClick={() => toggleExpanded(key)}
                                  className="w-full flex items-center justify-between p-4 text-left"
                                >
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-sky-400">{entry.term}</h4>
                                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{entry.explanation}</p>
                                  </div>
                                  {isExpanded
                                    ? <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                                    : <ChevronRight className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                                  }
                                </button>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 pb-4 space-y-3">
                                        {/* Deep Methodology */}
                                        <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                                          <p className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                                            📐 Methodology
                                          </p>
                                          <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                                            {entry.methodology}
                                          </p>
                                        </div>

                                        {/* Plain Language */}
                                        <div className="bg-emerald-500/5 rounded-lg p-3 border border-emerald-500/20">
                                          <p className="text-xs font-semibold text-emerald-400 mb-1">
                                            💡 Quick take
                                          </p>
                                          <p className="text-xs text-slate-300 leading-relaxed italic">
                                            {entry.plainLanguage}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
