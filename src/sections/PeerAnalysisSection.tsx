import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Eye, EyeOff, Users } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import { formatCompactMoney, resolveReportCurrency } from '@/lib/currency';
import type { Q01PeriodKey, Q01PeerLiquidityRow } from '@/types/report';

const PERIOD_ORDER: Q01PeriodKey[] = ['1d', '1w', '2w', '30d', '3m', '6m', 'max'];
const PERIOD_LABELS: Record<string, string> = {
  '1d': '1D',
  '1w': '1W',
  '2w': '2W',
  '30d': '1M',
  '3m': '3M',
  '6m': '6M',
  max: 'MAX',
};

function formatPct(value: number | null | undefined, digits = 2): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  return `${(value * 100).toFixed(digits)}%`;
}

function formatSignedPct(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  const pct = value * 100;
  return `${pct > 0 ? '+' : ''}${pct.toFixed(2)}%`;
}

function formatNumber(value: number | null | undefined, digits = 1): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  return value.toFixed(digits);
}

function formatCount(value: number | null | undefined): string {
  if (value === null || value === undefined || !Number.isFinite(value)) return 'N/A';
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toFixed(0);
}

function labelForRow(row: Q01PeerLiquidityRow): string {
  const ticker = String(row.ticker || '').trim();
  const name = String(row.label || row.company_name || '').trim();
  if (name && ticker && !name.includes(ticker)) return `${name} (${ticker})`;
  return name || ticker || 'N/A';
}

export function PeerAnalysisSection() {
  const report = useReport();
  const currency = resolveReportCurrency(report);
  const peerAnalysis = report.peer_analysis;
  const periods = peerAnalysis?.periods ?? {};
  const keys = useMemo(() => {
    const raw = Object.keys(periods) as Q01PeriodKey[];
    return PERIOD_ORDER.filter((key) => raw.includes(key)).concat(raw.filter((key) => !PERIOD_ORDER.includes(key)));
  }, [periods]);
  const [activePeriod, setActivePeriod] = useState<Q01PeriodKey>(keys[0] ?? '30d');
  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    if (keys.length > 0 && !keys.includes(activePeriod)) {
      setActivePeriod(keys[0]);
    }
  }, [activePeriod, keys]);

  if (!peerAnalysis?.enabled || keys.length === 0) return null;

  const period = periods[activePeriod] ?? periods[keys[0]];
  const liquidityRows = period?.liquidity?.rows ?? period?.market_comparison?.metric_rows ?? [];
  const returnRows = period?.market_comparison?.returns?.peer_rows ?? [];
  const takeaways = period?.takeaways ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Peer Analysis</h2>
            <p className="text-sm text-muted-foreground">Peer-level market comparison using daily return and liquidity metrics.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActivePeriod(key)}
              className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeriod === key
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                }`}
            >
              {PERIOD_LABELS[key] ?? key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-panel rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-slate-500" />
              Market Comparison Detail
            </h3>
            <button
              type="button"
              onClick={() => setShowDetails((value) => !value)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/70 bg-slate-900/50 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800"
            >
              {showDetails ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showDetails ? 'Hide rows' : 'Show rows'}
            </button>
          </div>

          {showDetails ? (
            <div className="overflow-x-auto rounded-lg border border-slate-800">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-900/70 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Company</th>
                    <th className="px-3 py-2 text-right font-medium">Return</th>
                    <th className="px-3 py-2 text-right font-medium">ADV</th>
                    <th className="px-3 py-2 text-right font-medium">Trades</th>
                    <th className="px-3 py-2 text-right font-medium">Spread</th>
                    <th className="px-3 py-2 text-right font-medium">Turnover</th>
                    <th className="px-3 py-2 text-right font-medium">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {liquidityRows.map((row) => {
                    const returnRow = returnRows.find((item) => (item.ticker || item.stock_code) === row.ticker);
                    return (
                      <tr key={`${activePeriod}-${row.ticker}-${row.is_target ? 'target' : 'peer'}`} className={row.is_target ? 'bg-sky-500/10 text-slate-100' : 'text-slate-300'}>
                        <td className="px-3 py-2 whitespace-nowrap">{labelForRow(row)}</td>
                        <td className="px-3 py-2 text-right">{formatSignedPct(returnRow?.return)}</td>
                        <td className="px-3 py-2 text-right">{formatCompactMoney(row.adv, currency)}</td>
                        <td className="px-3 py-2 text-right">{formatCount(row.trades)}</td>
                        <td className="px-3 py-2 text-right">{formatPct(row.spread_pct)}</td>
                        <td className="px-3 py-2 text-right">{formatPct(row.turnover_ratio)}</td>
                        <td className="px-3 py-2 text-right">{formatNumber(row.score_pca, 1)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 text-sm text-slate-400">
              Peer-level rows are hidden. Existing median comparators remain visible in the Market Comparison section.
            </div>
          )}
        </div>

        <div className="glass-panel rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Key Takeaways</h3>
          {takeaways.length ? (
            takeaways.map((line, index) => (
              <p key={`${activePeriod}-takeaway-${index}`} className="text-sm text-slate-300 leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="text-sm text-slate-500">No peer takeaways are available for this period.</p>
          )}
          <div className="pt-3 border-t border-slate-800 text-xs text-slate-500">
            Scope: daily returns and liquidity metrics only. Trading Activity and L2 trading-cost peer analysis are excluded.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
