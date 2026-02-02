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
  sectorMarkerMode?: 'median' | 'range';
  rangeMode?: 'market_p5p95' | 'sector_minmax';
}

function GradientBar({
  label,
  companyValue,
  marketStats,
  sectorStats,
  peerStats,
  insight,
  formatFn = (v) => v.toFixed(2),
  glossaryKey,
  sectorMarkerMode = 'median',
  rangeMode = 'market_p5p95',
}: GradientBarProps) {
  const direction = marketStats.direction;
  const isLowerBetter = direction === 'lower_is_better';

  // Range controls the scale endpoints for marker placement + min/max labels.
  // Default: use market p5/p95 to avoid outlier compression.
  // ADV override: use sector min/max for a more sector-relevant scale.
  const rangeMin =
    rangeMode === 'sector_minmax' ? sectorStats.min : (marketStats.p5 ?? sectorStats.min);
  const rangeMax =
    rangeMode === 'sector_minmax' ? sectorStats.max : (marketStats.p95 ?? sectorStats.max);

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
  const sectorMedianPos = calcPosition(sectorStats.median);
  const sectorMinPos = calcPosition(sectorStats.min);
  const sectorMaxPos = calcPosition(sectorStats.max);
  const peerPos = calcPosition(peerStats.median);
  const marketPos = calcPosition(marketStats.median);

  // Determine if company is performing well
  const isGood = isLowerBetter ? companyValue <= sectorStats.median : companyValue >= sectorStats.median;

  // ALWAYS: red (bad) on LEFT → green (good) on RIGHT
  const gradientClass = 'bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500';

  // Labels: left is always "Worse", right is always "Better"
  const leftLabel = isLowerBetter ? 'High (Worse)' : 'Low (Worse)';
  const rightLabel = isLowerBetter ? 'Low (Better)' : 'High (Better)';

  const Marker = ({
    pos,
    shape,
    colorClass,
    labelText,
    valueText,
    zClass,
  }: {
    pos: number;
    shape: 'circle' | 'square' | 'diamond' | 'triangle';
    colorClass: string;
    labelText: string;
    valueText: string;
    zClass?: string;
  }) => {
    const base = 'absolute top-1/2 -translate-y-1/2 -translate-x-1/2';

    const node =
      shape === 'circle' ? (
        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${colorClass}`} />
      ) : shape === 'square' ? (
        <div className={`w-4 h-4 border-2 border-white shadow-lg ${colorClass}`} />
      ) : shape === 'diamond' ? (
        <div className={`w-4 h-4 border-2 border-white shadow-lg rotate-45 ${colorClass}`} />
      ) : (
        <div className="relative w-4 h-4">
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-0 h-0 border-l-[7px] border-r-[7px] border-b-[12px] border-l-transparent border-r-transparent ${colorClass}`}
          />
        </div>
      );

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`${base} ${zClass ?? ''}`} style={{ left: `${pos}%` }}>
            {node}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-slate-900 border border-slate-700">
          <p className="text-xs text-slate-300">
            <span className="font-semibold text-white">{labelText}</span>: {valueText}
          </p>
        </TooltipContent>
      </Tooltip>
    );
  };

  const sectorRangeLeft = Math.min(sectorMinPos, sectorMaxPos);
  const sectorRangeWidth = Math.max(0, Math.abs(sectorMaxPos - sectorMinPos));

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
        <div className="relative mt-6 mb-12">
          {/* Scale Labels */}
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>{leftLabel}</span>
            <span>{rightLabel}</span>
          </div>

          {/* Gradient Bar */}
          <div className={`h-3 rounded-full ${gradientClass} relative overflow-visible`}>
            {/* Sector min-max range (optional) */}
            {sectorMarkerMode === 'range' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="absolute inset-0 pointer-events-none"
              >
                <div
                  className="absolute top-0 h-full rounded-full bg-teal-500/25 border border-teal-400/35"
                  style={{ left: `${sectorRangeLeft}%`, width: `${sectorRangeWidth}%` }}
                />
              </motion.div>
            )}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <Marker
                pos={companyPos}
                shape="circle"
                colorClass="bg-sky-500"
                labelText="You"
                valueText={formatFn(companyValue)}
                zClass="z-30"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Marker
                pos={marketPos}
                shape="triangle"
                colorClass="border-b-purple-400"
                labelText="Market (median)"
                valueText={formatFn(marketStats.median)}
                zClass="z-20"
              />
            </motion.div>
            {sectorMarkerMode === 'median' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <Marker
                  pos={sectorMedianPos}
                  shape="square"
                  colorClass="bg-teal-500"
                  labelText="Sector (median)"
                  valueText={formatFn(sectorStats.median)}
                  zClass="z-20"
                />
              </motion.div>
            ) : (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.62 }}>
                  <Marker
                    pos={sectorMinPos}
                    shape="square"
                    colorClass="bg-teal-600"
                    labelText="Sector (min)"
                    valueText={formatFn(sectorStats.min)}
                    zClass="z-20"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.66 }}>
                  <Marker
                    pos={sectorMaxPos}
                    shape="square"
                    colorClass="bg-teal-400"
                    labelText="Sector (max)"
                    valueText={formatFn(sectorStats.max)}
                    zClass="z-20"
                  />
                </motion.div>
              </>
            )}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Marker
                pos={peerPos}
                shape="diamond"
                colorClass="bg-amber-500"
                labelText="Peers (median)"
                valueText={formatFn(peerStats.median)}
                zClass="z-20"
              />
            </motion.div>
          </div>

          {/* Range Labels */}
          <div className="flex justify-between text-[10px] text-slate-600 mt-6">
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
          <div className="w-3 h-3 rounded-full bg-sky-500 border border-white/60" />
          <span className="text-slate-400">You</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500 border border-white/60 rotate-45" />
          <span className="text-slate-400">Peers (median)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 border border-white/60" />
          <span className="text-slate-400">Sector (median)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-3 h-3">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[65%] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[9px] border-l-transparent border-r-transparent border-b-purple-400" />
          </div>
          <span className="text-slate-400">Market (median)</span>
        </div>
        <div className="ml-auto text-slate-600 text-[10px] italic">
          Scale shows 5th-95th percentile of market values to exclude outliers (ADV uses sector min/max)
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
            sectorMarkerMode="median"
            rangeMode="sector_minmax"
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
