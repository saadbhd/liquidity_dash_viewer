import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Users, BookOpen, Info } from 'lucide-react';
import { GLOSSARY } from '@/data/glossary';

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
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'peers' | 'glossary'>('peers');
  const PEER_METHODOLOGY = peerMethodology;

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sky-500 hover:bg-sky-400 rounded-full shadow-lg shadow-sky-500/30 flex items-center justify-center transition-colors"
      >
        <HelpCircle className="w-6 h-6 text-white" />
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
              onClick={() => setIsOpen(false)}
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
                  onClick={() => setIsOpen(false)}
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
                  onClick={() => setActiveTab('glossary')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors flex-1 justify-center ${activeTab === 'glossary'
                      ? 'bg-sky-500 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <BookOpen className="w-4 h-4" />
                  Glossary
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
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
                  <div className="space-y-3">
                    <p className="text-sm text-slate-400 mb-4">
                      Technical terms explained in plain language:
                    </p>
                    {Object.entries(GLOSSARY).map(([key, term]) => (
                      <div key={key} className="bg-slate-800/30 rounded-xl p-4">
                        <h4 className="text-sm font-semibold text-sky-400 mb-2">{term.term}</h4>
                        <p className="text-xs text-slate-300 leading-relaxed mb-2">{term.explanation}</p>
                        <p className="text-xs text-slate-500 italic">{term.plainLanguage}</p>
                      </div>
                    ))}
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
