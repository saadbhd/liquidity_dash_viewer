import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

export function PeerTraderComposition() {
  const { labels, meta, series } = useReport();
  const { trader_composition } = series;

  const peerData = trader_composition.peer_comparison;

  // Some datasets store shares as fractions (0-1), others as percentages (0-100).
  // Normalize to percentage points for charts/tables.
  const toPct = (v: number) => (v <= 1 ? v * 100 : v);

  const currencyPrefix = (currency: string) =>
    currency === 'HKD' ? 'HK$' : currency === 'CNY' ? 'CN¥' : `${currency} `;

  const hasQty = peerData.some((p: any) => p && (p.retail_qty_pct != null || p.mixed_qty_pct != null || p.instit_qty_pct != null));

  type ViewMode = 'trades' | 'shares';
  const modes: { id: ViewMode; label: string; available: boolean }[] = [
    { id: 'trades', label: 'Trades', available: true },
    { id: 'shares', label: 'Shares', available: !!hasQty },
  ];
  const availableModes = modes.filter((m) => m.available);
  const defaultMode: ViewMode = availableModes[0]?.id ?? 'trades';
  const [mode, setMode] = React.useState<ViewMode>(defaultMode);

  const pctFor = (p: any, mode: ViewMode) => {
    if (mode === 'shares' && hasQty) {
      return {
        retail: toPct(p.retail_qty_pct ?? 0),
        mixed: toPct(p.mixed_qty_pct ?? 0),
        instit: toPct(p.instit_qty_pct ?? 0),
      };
    }
    return {
      retail: toPct(p.retail_pct ?? 0),
      mixed: toPct(p.mixed_pct ?? 0),
      instit: toPct(p.instit_pct ?? 0),
    };
  };

  // Prepare chart data (stacked composition per peer)
  const chartData = peerData.map((p: any) => {
    const v = pctFor(p, mode);
    return {
      ticker: p.ticker,
      Retail: v.retail,
      Mixed: v.mixed,
      Institutional: v.instit,
      isTarget: p.is_target,
    };
  });

  const labelForMode = (mode: ViewMode) => (mode === 'shares' ? 'by shares' : 'by trades');
  const typeIcon = (p: any) => {
    const v = pctFor(p, mode);
    // Same legend as your console output: 🏠 retail-heavy (>70% retail) | 🏦 institutional (>20% institutional) | ⚖️ mixed otherwise
    if (v.retail > 70) return '🏠';
    if (v.instit > 20) return '🏦';
    return '⚖️';
  };

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
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">{labels.peer_trader_title}</h2>
            <p className="text-sm text-muted-foreground">{labels.peer_trader_subtitle}</p>
          </div>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-foreground">Peer composition ({labelForMode(mode)})</div>
          <Tabs value={mode} onValueChange={(v) => setMode(v as ViewMode)} className="w-auto">
            <TabsList>
              {availableModes.map((m) => (
                <TabsTrigger key={m.id} value={m.id}>
                  {m.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="ticker"
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={{ stroke: '#334155' }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: '#64748b', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', border: '1px solid rgba(71, 85, 105, 0.5)', borderRadius: '8px' }}
              />
              <Bar dataKey="Retail" stackId="a" fill="#0ea5e9" radius={[0, 0, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-retail-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
              <Bar dataKey="Mixed" stackId="a" fill="#64748b" radius={[0, 0, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-mixed-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
              <Bar dataKey="Institutional" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={42}>
                {chartData.map((entry: any, idx: number) => (
                  <Cell key={`cell-instit-${idx}`} fillOpacity={entry.isTarget ? 1 : 0.6} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-sky-500" />
            <span className="text-muted-foreground">{meta.ticker} (You)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-slate-600" />
            <span className="text-muted-foreground">Peers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">🏠 = Retail-heavy (&gt;70%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">⚖️ = Mixed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">🏦 = Institutional (&gt;20%)</span>
          </div>
        </div>
      </motion.div>

      {/* Detailed Table */}
      <motion.div variants={itemVariants} className="glass-panel rounded-xl p-5">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-muted-foreground text-xs">Ticker</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Retail %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Mixed %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Institutional %</TableHead>
                <TableHead className="text-muted-foreground text-xs text-right">Avg Trade Size</TableHead>
                <TableHead className="text-muted-foreground text-xs">Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {peerData.map((row) => (
                <TableRow key={row.ticker} className="border-slate-800">
                  <TableCell className="text-foreground font-medium text-sm">
                    {row.ticker}
                    {row.is_target && (
                      <span className="ml-2 text-xs px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded-full">
                        YOU
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row as any, mode).retail.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row as any, mode).mixed.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">{pctFor(row as any, mode).instit.toFixed(1)}%</TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm">
                    {'avg_trade_size' in row ? currencyPrefix(row.currency) + (row.avg_trade_size / 1000).toFixed(1) : currencyPrefix('HKD') + ((row as any).avg_size / 1000).toFixed(1)}K
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">{typeIcon(row as any)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
}
