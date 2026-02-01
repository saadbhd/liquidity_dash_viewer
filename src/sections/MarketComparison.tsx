import { motion } from 'framer-motion';
import { BarChart3, HelpCircle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { GLOSSARY } from '@/data/glossary';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

interface MetricStats {
  direction: 'higher_is_better' | 'lower_is_better';
  mean: number;
  median: number;
  min: number;
  max: number;
  p5?: number;
  p95?: number;
  count: number;
}

interface GradientBarProps {
  label: string;
  companyValue: number;
  marketStats: MetricStats;
  sectorStats: MetricStats;
  peerStats: MetricStats;
  insight: string;
  formatFn?: (val: number) => string;
  glossaryKey?: keyof typeof GLOSSARY;
}

function GradientBar({
  label,
  companyValue,
  marketStats,
  sectorStats,
  peerStats,
  insight,
  formatFn = (v) => v.toFixed(2),
  glossaryKey
}: GradientBarProps) {
  const direction = marketStats.direction;
  const isLowerBetter = direction === 'lower_is_better';

  // Use p5/p95 from marketStats for better range (avoids outlier compression)
  // Fallback to sector range if p5/p95 not available
  const rangeMin = marketStats.p5 ?? sectorStats.min;
  const rangeMax = marketStats.p95 ?? sectorStats.max;

  // Calculate position on the gradient (0% = left/bad, 100% = right/good)
  // For lower_is_better: INVERT so lower values appear on RIGHT (green)
  // For higher_is_better: higher values appear on RIGHT (green)
  const calcPosition = (value: number) => {
    if (rangeMax === rangeMin) return 50;

    // Clamp value to range
    const clampedValue = Math.max(rangeMin, Math.min(rangeMax, value));

    if (isLowerBetter) {
      // Invert: low values → right side (good/green)
      return (1 - (clampedValue - rangeMin) / (rangeMax - rangeMin)) * 100;
    } else {
      // Normal: high values → right side (good/green)
      return ((clampedValue - rangeMin) / (rangeMax - rangeMin)) * 100;
    }
  };

  const companyPos = calcPosition(companyValue);
  const sectorPos = calcPosition(sectorStats.median);
  const peerPos = calcPosition(peerStats.median);
  const marketPos = calcPosition(marketStats.median);

  // Determine if company is performing well
  const isGood = isLowerBetter ? companyValue <= sectorStats.median : companyValue >= sectorStats.median;

  // ALWAYS: red (bad) on LEFT → green (good) on RIGHT
  const gradientClass = 'bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500';

  // Labels: left is always "Worse", right is always "Better"
  const leftLabel = isLowerBetter ? 'High (Worse)' : 'Low (Worse)';
  const rightLabel = isLowerBetter ? 'Low (Better)' : 'High (Better)';


  return (
    <TooltipProvider>
      <div className="glass-panel rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-white">{label}</h4>
            {glossaryKey && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-slate-600 hover:text-slate-400 transition-colors">
                    <HelpCircle className="w-3.5 h-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                  <p className="font-semibold text-sky-400 text-sm">{GLOSSARY[glossaryKey].term}</p>
                  <p className="text-xs text-slate-300 mt-1">{GLOSSARY[glossaryKey].plainLanguage}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${isGood ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
            {isGood ? '✓ Good' : '◆ Below Avg'}
          </div>
        </div>

        {/* Gradient Bar Container */}
        <div className="relative mt-6 mb-28">
          {/* Scale Labels */}
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>{leftLabel}</span>
            <span>{rightLabel}</span>
          </div>

          {/* Gradient Bar */}
          <div className={`h-3 rounded-full ${gradientClass} relative overflow-visible`}>
            {/* Company Marker */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-1/2 -translate-y-1/2 z-30"
              style={{ left: `${companyPos}%` }}
            >
              <div className="relative">
                <div className="w-5 h-5 bg-sky-500 rounded-full border-2 border-white shadow-lg -translate-x-1/2" />
                <div className="absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="bg-sky-500 text-white text-xs px-2 py-1 rounded font-medium shadow-lg">
                    You: {formatFn(companyValue)}
                  </div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-sky-500 absolute -top-1 left-1/2 -translate-x-1/2 rotate-180" />
                </div>
              </div>
            </motion.div>

            {/* Market Marker - Shortest Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 transform -translate-y-1/2 z-10"
              style={{ left: `${marketPos}%` }}
            >
              <div className="relative flex flex-col items-center">
                {/* Line downwards */}
                <div className="w-0.5 h-8 bg-purple-400/50 translate-y-2" />
                {/* Label */}
                <div className="absolute top-10 whitespace-nowrap text-center">
                  <div className="text-[10px] text-purple-400 font-medium leading-none mb-0.5">Market</div>
                  <div className="text-[10px] text-purple-300 leading-none">{formatFn(marketStats.median)}</div>
                </div>
              </div>
            </motion.div>

            {/* Sector Marker - Medium Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 transform -translate-y-1/2 z-20"
              style={{ left: `${sectorPos}%` }}
            >
              <div className="relative flex flex-col items-center">
                {/* Line downwards - longer */}
                <div className="w-0.5 h-16 bg-teal-400/50 translate-y-6" />
                {/* Label */}
                <div className="absolute top-[4.5rem] whitespace-nowrap text-center">
                  <div className="text-[10px] text-teal-400 font-medium leading-none mb-0.5">Sector</div>
                  <div className="text-[10px] text-teal-300 leading-none">{formatFn(sectorStats.median)}</div>
                </div>
              </div>
            </motion.div>

            {/* Peer Marker - Longest Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/2 transform -translate-y-1/2 z-20"
              style={{ left: `${peerPos}%` }}
            >
              <div className="relative flex flex-col items-center">
                {/* Line downwards - longest */}
                <div className="w-0.5 h-24 bg-amber-400/50 translate-y-10" />
                {/* Label */}
                <div className="absolute top-[6.5rem] whitespace-nowrap text-center">
                  <div className="text-[10px] text-amber-400 font-medium leading-none mb-0.5">Peers</div>
                  <div className="text-[10px] text-amber-300 leading-none">{formatFn(peerStats.median)}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Range Labels */}
          <div className="flex justify-between text-[10px] text-slate-600 mt-8">
            <span>{isLowerBetter ? 'Max' : 'Min'}: {formatFn(isLowerBetter ? rangeMax : rangeMin)}</span>
            <span>{isLowerBetter ? 'Min' : 'Max'}: {formatFn(isLowerBetter ? rangeMin : rangeMax)}</span>
          </div>
        </div>

        {/* Insight */}
        <div className="pt-4 border-t border-slate-800">
          <p className="text-xs text-slate-400 leading-relaxed">{insight}</p>
        </div>
      </div>
    </TooltipProvider>
  );
}

// Format functions for different metric types
const formatPercent = (v: number) => `${(v * 100).toFixed(2)}%`;
const formatVolume = (v: number) => {
  if (v >= 1e9) return `${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
  if (v >= 1e3) return `${(v / 1e3).toFixed(0)}K`;
  return v.toFixed(0);
};
const formatTrades = (v: number) => {
  if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
  return v.toFixed(0);
};
const formatAmihud = (v: number) => v.toExponential(2);

export function MarketComparison() {
  const { labels, insights, series } = useReport();
  const data = series.market_comparison;
  const { market_comparison: marketInsights } = insights;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{labels.market_comparison_title}</h2>
            <p className="text-sm text-slate-500">{labels.market_comparison_subtitle}</p>
          </div>
        </div>
        <div className="text-xs text-slate-500">
          {data.sector_name} Sector ({data.sector_count} companies) • Market ({data.market_count} stocks)
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-sky-500" />
          <span className="text-slate-400">Your Company</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-amber-400" />
          <span className="text-slate-400">Peer Median</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-teal-400" />
          <span className="text-slate-400">Sector Median</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-purple-400" />
          <span className="text-slate-400">Market Median</span>
        </div>
        <div className="ml-auto text-slate-600 text-[10px] italic">
          Scale shows 5th-95th percentile of market values to exclude outliers
        </div>
      </motion.div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <GradientBar
            label="Average Daily Volume"
            companyValue={data.company.adv}
            marketStats={data.market.adv}
            sectorStats={data.sector.adv}
            peerStats={data.peers.adv}
            insight={marketInsights.adv.insight}
            formatFn={formatVolume}
            glossaryKey="adv"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientBar
            label="Trading Cost (Spread)"
            companyValue={data.company.spread_pct}
            marketStats={data.market.spread_pct}
            sectorStats={data.sector.spread_pct}
            peerStats={data.peers.spread_pct}
            insight={marketInsights.spread.insight}
            formatFn={formatPercent}
            glossaryKey="spread"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientBar
            label="Daily Volatility"
            companyValue={data.company.volatility}
            marketStats={data.market.volatility}
            sectorStats={data.sector.volatility}
            peerStats={data.peers.volatility}
            insight={marketInsights.volatility.insight}
            formatFn={formatPercent}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientBar
            label="Daily Trades"
            companyValue={data.company.trades}
            marketStats={data.market.trades}
            sectorStats={data.sector.trades}
            peerStats={data.peers.trades}
            insight={marketInsights.trades.insight}
            formatFn={formatTrades}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientBar
            label="Turnover Ratio"
            companyValue={data.company.turnover_ratio}
            marketStats={data.market.turnover_ratio}
            sectorStats={data.sector.turnover_ratio}
            peerStats={data.peers.turnover_ratio}
            insight="Turnover ratio measures how frequently shares change hands relative to free float. Higher turnover indicates more active trading."
            formatFn={formatPercent}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientBar
            label="Price Impact (Amihud)"
            companyValue={data.company.amihud}
            marketStats={data.market.amihud}
            sectorStats={data.sector.amihud}
            peerStats={data.peers.amihud}
            insight="Amihud illiquidity measures price impact per unit of trading volume. Lower values indicate better liquidity with less price impact."
            formatFn={formatAmihud}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
