import { motion } from 'framer-motion';
import { Users, HelpCircle } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  Tooltip as UITooltip,
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

export function TraderComposition() {
  const { labels, insights, series } = useReport();
  const { trader_composition } = series;
  const { trader_composition: traderInsights } = insights;

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  // Normalize to percentage points for display/geometry.
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  const comp = trader_composition.composition;
  const compPct = {
    retail: toPct(comp.retail_pct),
    mixed: toPct(comp.mixed_pct),
    instit: toPct(comp.instit_pct),
  };
  
  // Chart data prepared for future use
  void comp;

  // Time series data
  const overTimePeriods =
    'over_time' in trader_composition && Array.isArray(trader_composition.over_time)
      ? trader_composition.over_time
      : 'over_time' in trader_composition && trader_composition.over_time && 'periods' in trader_composition.over_time
        ? trader_composition.over_time.periods
        : [];

  const timeSeriesData = [...overTimePeriods]
    // Ensure proper time evolution: oldest -> newest (newest on the right)
    .sort((a, b) => a.month.localeCompare(b.month))
    .map((d: any) => {
      const retail = toPct(d.retail_pct);
      const mixed = toPct(d.mixed_pct);
      const instit = toPct(d.instit_pct);
      const total = retail + mixed + instit;

      // Normalize to exactly 100% to avoid floating tick artifacts (e.g. 100.00001%).
      const scale = total > 0 ? 100 / total : 0;

      return {
        // Keep month label as in the data file (YYYY-MM)
        month: d.month,
        Retail: retail * scale,
        Mixed: mixed * scale,
        Institutional: instit * scale,
      };
    });

  const currency =
    'currency' in trader_composition && trader_composition.currency
      ? trader_composition.currency
      : 'HKD';
  const currencyPrefix = currency === 'HKD' ? 'HK$' : currency === 'CNY' ? 'CN¥' : `${currency} `;

  const totalTrades =
    'n_trades' in trader_composition
      ? trader_composition.n_trades
      : trader_composition.trade_stats.total_trades;
  const avgTradeSize =
    'trade_size' in trader_composition
      ? trader_composition.trade_size.avg
      : trader_composition.trade_stats.avg_size;
  const periodDays =
    'period_days' in trader_composition
      ? trader_composition.period_days
      : trader_composition.trade_stats.period_days;

  return (
    <TooltipProvider>
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
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{labels.trader_composition_title}</h2>
              <p className="text-sm text-slate-500">{labels.trader_composition_subtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Composition Pie/Stats */}
          <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white mb-4">Current Composition</h3>
            
            {/* Retail - Dominant */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-medium">Retail Traders</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_retail_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-2xl font-bold text-sky-400">{compPct.retail.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compPct.retail}%` }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-sky-500"
                />
              </div>
            </div>
            
            {/* Mixed */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-medium">Mixed Traders</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_mixed_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-xl font-bold text-slate-400">{compPct.mixed.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compPct.mixed}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="h-full rounded-full bg-slate-500"
                />
              </div>
            </div>
            
            {/* Institutional */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-medium">Institutional</span>
                  <UITooltip>
                    <TooltipTrigger asChild>
                      <button className="text-slate-600 hover:text-slate-400">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="max-w-xs bg-slate-900 border border-slate-700">
                      <p className="text-xs text-slate-300">{labels.trader_instit_threshold}</p>
                    </TooltipContent>
                  </UITooltip>
                </div>
                <span className="text-xl font-bold text-emerald-400">{compPct.instit.toFixed(1)}%</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${compPct.instit}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-emerald-500"
                />
              </div>
            </div>

            {/* Trade Stats */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500">Total Trades ({periodDays}D)</p>
                <p className="text-lg font-bold text-white">{totalTrades.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Avg Trade Size</p>
                <p className="text-lg font-bold text-white">
                  {currencyPrefix}
                  {(avgTradeSize / 1000).toFixed(1)}K
                </p>
              </div>
            </div>
          </motion.div>

          {/* Time Series Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-2 glass-panel rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white mb-4">Composition Over Time</h3>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timeSeriesData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={{ stroke: '#334155' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#64748b', fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    domain={[0, 100]}
                    allowDecimals={false}
                    tickFormatter={(v) => `${Math.round(Number(v))}%`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
                  />
                  <Legend iconType="square" wrapperStyle={{ paddingTop: '10px' }} />
                  <Bar dataKey="Retail" stackId="a" fill="#0ea5e9" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Mixed" stackId="a" fill="#64748b" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="Institutional" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Insights */}
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-pink-500/50">
          <h4 className="text-sm font-semibold text-white mb-3">Key Insights</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-slate-400 leading-relaxed">{traderInsights.overall}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{traderInsights.retail_heavy}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-slate-400 leading-relaxed">{traderInsights.institutional_gap}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{traderInsights.peer_comparison}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
