import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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

export function PriceMovingTrades() {
  const { labels, insights, series, meta } = useReport();
  const chartTheme = useChartTheme();
  const { price_moving_trades } = series;
  const currencySymbol = meta.market === 'XHKG' ? 'HK$' : meta.market === 'XSES' ? 'S$' : '';
  const { price_moving: priceInsights } = insights;

  const chartData = [
    { 
      name: 'All Price-Moving', 
      count: price_moving_trades.all_movers.count,
      avgSize: price_moving_trades.all_movers.avg_size / 1000,
    },
    { 
      name: 'Positive (↑)', 
      count: price_moving_trades.positive_movers.count,
      avgSize: price_moving_trades.positive_movers.avg_size / 1000,
    },
    { 
      name: 'Negative (↓)', 
      count: price_moving_trades.negative_movers.count,
      avgSize: price_moving_trades.negative_movers.avg_size / 1000,
    },
  ];

  const sizeRatio = price_moving_trades.negative_movers.avg_size / price_moving_trades.positive_movers.avg_size;
  const hasTraderBreakdown =
    typeof price_moving_trades.positive_movers.retail_count === 'number' &&
    typeof price_moving_trades.negative_movers.retail_count === 'number';

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
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.price_moving_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.price_moving_subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Price-Moving Trades</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">
              {price_moving_trades.price_moving_trades.toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">
              ({price_moving_trades.pct_price_moving.toFixed(1)}%)
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            of {price_moving_trades.total_trades.toLocaleString()} total trades
          </p>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Positive Movers</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {price_moving_trades.positive_movers.count.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Avg size: {currencySymbol}{(price_moving_trades.positive_movers.avg_size / 1000).toFixed(1)}K
          </p>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-500" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Negative Movers</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-red-600 dark:text-red-400">
              {price_moving_trades.negative_movers.count.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Avg size: {currencySymbol}{(price_moving_trades.negative_movers.avg_size / 1000).toFixed(1)}K
          </p>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Trade Size Comparison</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridStroke} vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={{ stroke: chartTheme.axisLineStroke }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: chartTheme.tickFill, fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}K`}
                label={{ value: `Avg Trade Size (${currencySymbol}K)`, angle: -90, position: 'insideLeft', fill: chartTheme.labelFill, fontSize: 11 }}
              />
              <Tooltip
                contentStyle={chartTheme.tooltipContentStyle}
                formatter={(value: number) => [`${currencySymbol}${value.toFixed(1)}K`, 'Avg Size']}
              />
              <Bar dataKey="avgSize" radius={[4, 4, 0, 0]} maxBarSize={60} fill={chartTheme.barPrimary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* By trader type (when breakdown available) */}
      {hasTraderBreakdown && (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            By trader type :
          </h3>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground font-medium">Direction</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Retail</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Mixed</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">Institutional</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">R%</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">M%</TableHead>
                <TableHead className="text-muted-foreground font-medium text-right">I%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-border">
                <TableCell className="font-medium text-emerald-600 dark:text-emerald-400">Positive (↑)</TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.positive_movers.retail_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.positive_movers.mixed_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.positive_movers.institutional_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.positive_movers.retail_pct!.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.positive_movers.mixed_pct!.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.positive_movers.instit_pct!.toFixed(1)}%
                </TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-medium text-red-600 dark:text-red-400">Negative (↓)</TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.negative_movers.retail_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.negative_movers.mixed_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground/80">
                  {price_moving_trades.negative_movers.institutional_count!.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.negative_movers.retail_pct!.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.negative_movers.mixed_pct!.toFixed(1)}%
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {price_moving_trades.negative_movers.instit_pct!.toFixed(1)}%
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>
      )}

      {/* Key Insight */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5 border-l-2 border-orange-500/50">
        <h4 className="text-sm font-semibold text-foreground mb-3">Key Finding</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">{priceInsights.overall}</p>
            {priceInsights.by_trader_type && (
              <p className="text-sm text-orange-600 dark:text-orange-400/90 leading-relaxed mt-3">
                {priceInsights.by_trader_type}
              </p>
            )}
          </div>
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">{priceInsights.interpretation}</p>
            <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
              Sell trades that move prices are {sizeRatio.toFixed(1)}x larger on average than buy trades that move prices.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
