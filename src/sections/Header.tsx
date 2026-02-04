import { Building2, Calendar, Users, BarChart3 } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { motion } from 'framer-motion';

export function Header() {
  const { meta } = useReport();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 mb-6 shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            {/* Ticker Badge */}
            <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <span className="text-white font-bold text-lg">{meta.ticker}</span>
            </div>
            
            {/* Company Info */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">
                {meta.company}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-400 mt-1">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  {meta.company}
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-mono text-sky-400">{meta.ticker}</span>
                <span className="text-slate-600">•</span>
                <span>Sector: {meta.sector}</span>
                <span className="text-slate-600">•</span>
                <span>Market Cap: {meta.market_cap_display} ({meta.market_cap_category} cap)</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 mt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  As of: {meta.asof_date}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Universe: {meta.universe_total.toLocaleString()}
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Peers: {meta.peers_count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
