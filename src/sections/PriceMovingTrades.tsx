import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { MethodologyTooltip } from '@/components/MethodologyTooltip';
import { SectionTooltip } from '@/components/SectionTooltip';
import { useReport } from '@/context/ReportContext';
import { useChartTheme } from '@/hooks/useChartTheme';
import { formatCompactMoney, getCurrencyCodeLabel, resolveReportCurrency } from '@/lib/currency';
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const safeText = (value: unknown): string => {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    if (typeof obj.text === 'string') return obj.text;
    if (typeof obj.insight === 'string') return obj.insight;
  }
  return '';
};

const fmtPct = (value: unknown, digits = 1): string => {
  const num = Number(value ?? 0);
  if (!Number.isFinite(num)) return '0.0%';
  return `${num.toFixed(digits)}%`;
};

export function PriceMovingTrades() {
  const report = useReport();
  const { labels, insights, series } = report;
  const chartTheme = useChartTheme();
  const priceMovingTrades = series.price_moving_trades as any;
  const eligibleTrades = Number(priceMovingTrades?.eligible_trades ?? priceMovingTrades?.total_trades ?? 0);
  const rawTrades = Number(priceMovingTrades?.raw_trades ?? 0);
  const priceInsights = insights.price_moving || {};
  const reportCurrency = resolveReportCurrency(report);
  const currencyLabel = getCurrencyCodeLabel(reportCurrency);

  const hasBreakdown =
    typeof priceMovingTrades?.positive_movers?.retail_count === 'number' &&
    typeof priceMovingTrades?.negative_movers?.retail_count === 'number';

  const unclearShareAll = Number(priceMovingTrades?.all_movers?.unclear_pct ?? 0);

  const chartData = [
    {
      name: 'All price-moving',
      avgSize: Number(priceMovingTrades?.all_movers?.avg_size ?? 0) / 1000,
    },
    {
      name: 'Positive (up)',
      avgSize: Number(priceMovingTrades?.positive_movers?.avg_size ?? 0) / 1000,
    },
    {
      name: 'Negative (down)',
      avgSize: Number(priceMovingTrades?.negative_movers?.avg_size ?? 0) / 1000,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
            <Activity className="h-5 w-5 text-orange-500" />
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
              {labels.price_moving_title}
              <SectionTooltip sectionKey="price-moving" size="md" />
            </h2>
            <p className="text-sm text-muted-foreground">{labels.price_moving_subtitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="glass-panel rounded-xl p-5">
          <div className="mb-2 flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground">
              Price-moving share <MethodologyTooltip methodKey="price_moving_trades" />
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{fmtPct(priceMovingTrades?.pct_price_moving)}</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {Number(priceMovingTrades?.price_moving_trades ?? 0).toLocaleString()} of {eligibleTrades.toLocaleString()} eligible trades moved price{rawTrades ? ` (${rawTrades.toLocaleString()} total prints)` : ''}
          </p>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Positive movers</span>
          </div>
          <div className="text-3xl font-bold text-emerald-500">{Number(priceMovingTrades?.positive_movers?.count ?? 0).toLocaleString()}</div>
          <p className="mt-2 text-xs text-muted-foreground">
            Avg trade value: {formatCompactMoney(Number(priceMovingTrades?.positive_movers?.avg_size ?? 0), reportCurrency)}
          </p>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-500" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Negative movers</span>
          </div>
          <div className="text-3xl font-bold text-red-500">{Number(priceMovingTrades?.negative_movers?.count ?? 0).toLocaleString()}</div>
          <p className="mt-2 text-xs text-muted-foreground">
            Avg trade value: {formatCompactMoney(Number(priceMovingTrades?.negative_movers?.avg_size ?? 0), reportCurrency)}
          </p>
        </div>

        <div className="glass-panel rounded-xl p-5">
          <div className="mb-2 flex items-center gap-2">
            <Activity className="h-4 w-4 text-amber-500" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Unclassified share</span>
          </div>
          <div className="text-3xl font-bold text-foreground">{fmtPct(unclearShareAll)}</div>
          <p className="mt-2 text-xs text-muted-foreground">
            Among all price-moving trades
          </p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <h3 className="mb-4 text-sm font-semibold text-foreground">Average size of trades that moved price</h3>
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
                tickFormatter={(value) => `${value}K`}
                label={{ value: currencyLabel ? `Avg Trade Value (${currencyLabel} K)` : 'Avg Trade Value (K)', angle: -90, position: 'insideLeft', fill: chartTheme.labelFill, fontSize: 11 }}
              />
              <Tooltip
                contentStyle={chartTheme.tooltipContentStyle}
                formatter={(value: number) => [formatCompactMoney(value * 1000, reportCurrency), 'Avg size']}
              />
              <Bar dataKey="avgSize" radius={[4, 4, 0, 0]} maxBarSize={60} fill={chartTheme.barPrimary} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {hasBreakdown ? (
        <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
          <h3 className="mb-3 text-sm font-semibold text-foreground">Who sat behind those price-moving trades?</h3>
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead>Direction</TableHead>
                <TableHead className="text-right">Retail-like</TableHead>
                <TableHead className="text-right">Mixed</TableHead>
                <TableHead className="text-right">Institution-like</TableHead>
                <TableHead className="text-right">Unclassified</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { label: 'All price-moving', row: priceMovingTrades?.all_movers, cls: 'text-foreground' },
                { label: 'Positive (up)', row: priceMovingTrades?.positive_movers, cls: 'text-emerald-500' },
                { label: 'Negative (down)', row: priceMovingTrades?.negative_movers, cls: 'text-red-500' },
              ].map(({ label, row, cls }) => (
                <TableRow key={label} className="border-border">
                  <TableCell className={`font-medium ${cls}`}>{label}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{fmtPct(row?.retail_pct)}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{fmtPct(row?.mixed_pct)}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{fmtPct(row?.instit_pct)}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{fmtPct(row?.unclear_pct)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      ) : null}

      <motion.div variants={itemVariants} className="glass-panel rounded-xl border-l-2 border-orange-500/50 p-5">
        <h4 className="mb-3 text-sm font-semibold text-foreground">Key Finding</h4>
        <div className="space-y-3">
          {[safeText(priceInsights.overall), safeText(priceInsights.by_trader_type), safeText(priceInsights.interpretation), safeText(priceInsights.asymmetry)]
            .filter(Boolean)
            .map((text, index) => (
              <p key={index} className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
