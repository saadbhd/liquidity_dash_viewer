import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb, Table2 } from 'lucide-react';
import { useReport } from '@/context/ReportContext';
import type { MarketPerformanceBlock, MarketPerformanceRow, PeerAnalysis, PeerPerformancePeriod, PeerReturnSummary, Q01PeriodKey, Q01Returns, TotalReturnRow } from '@/types/report';

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function formatPercent(value: unknown): string {
  if (!isFiniteNumber(value)) return 'N/A - data unavailable';
  const pct = value * 100;
  const sign = pct > 0 ? '+' : '';
  return `${sign}${pct.toFixed(2)}%`;
}

function formatReturnCell(value: unknown, note?: string | null): string {
  if (isFiniteNumber(value)) return formatPercent(value);
  return note || 'N/A - data unavailable';
}

function formatReturnMetricCell(metric: TotalReturnRow['ytd_total_return']): string {
  if (metric && isFiniteNumber(metric.value)) return formatPercent(metric.value);
  return metric?.note || 'N/A - data unavailable';
}

function formatExtremeCell(extreme: MarketPerformanceRow['best_month']): { value: string; month: string } {
  if (!extreme || !isFiniteNumber(extreme.value)) {
    return { value: 'N/A - data unavailable', month: '' };
  }
  return {
    value: formatPercent(extreme.value),
    month: extreme.month || '',
  };
}

function fallbackMarketPerformanceRows(): MarketPerformanceBlock['rows'] {
  return [
    { key: 'stock', label: 'Stock', best_month: null, worst_month: null },
    { key: 'market', label: 'Market', best_month: null, worst_month: null },
    { key: 'sector', label: 'Sector', best_month: null, worst_month: null },
    { key: 'peers', label: 'Peers', best_month: null, worst_month: null },
  ];
}

function isSecurityTotalReturnRow(row: TotalReturnRow): boolean {
  return Boolean(row.ytd_total_return || row.one_year_total_return);
}

function formatHistoryWindow(row: MarketPerformanceRow): string | null {
  const window = row.history_window;
  if (!window?.start_date || !window?.end_date) return null;
  const obsText = isFiniteNumber(window.n_obs) && window.n_obs > 0 ? `, ${window.n_obs} closes` : '';
  return `${window.start_date} to ${window.end_date}${obsText}`;
}

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

type PeerReturnRow = NonNullable<Q01Returns['peer_rows']>[number];

function peerPeriodKeys(peerAnalysis?: PeerAnalysis): Q01PeriodKey[] {
  const explicit = Object.keys(peerAnalysis?.performance?.periods ?? {}) as Q01PeriodKey[];
  const fallback = Object.keys(peerAnalysis?.periods ?? {}) as Q01PeriodKey[];
  const raw = Array.from(new Set([...explicit, ...fallback]));
  return PERIOD_ORDER.filter((key) => raw.includes(key)).concat(raw.filter((key) => !PERIOD_ORDER.includes(key)));
}

function medianReturn(values: number[]): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function buildPeerReturnSummary(rows: PeerReturnRow[], returns?: Q01Returns | null): PeerReturnSummary {
  const target = rows.find((row) => row.is_target);
  const peerValues = rows
    .filter((row) => !row.is_target && isFiniteNumber(row.return))
    .map((row) => row.return as number);
  const targetReturn = isFiniteNumber(target?.return) ? target.return : returns?.stock;
  const sortedRank = isFiniteNumber(targetReturn) && peerValues.length
    ? 1 + peerValues.filter((value) => value > targetReturn).length
    : null;
  return {
    target_return: isFiniteNumber(targetReturn) ? targetReturn : null,
    peer_median_return: medianReturn(peerValues) ?? returns?.peers ?? null,
    peer_rank: sortedRank,
    peer_count: peerValues.length,
    peers_up: peerValues.filter((value) => value > 0).length,
    peers_down: peerValues.filter((value) => value < 0).length,
    dispersion: peerValues.length >= 2 ? Math.max(...peerValues) - Math.min(...peerValues) : null,
  };
}

function getPeerPerformancePeriod(peerAnalysis: PeerAnalysis | undefined, key: Q01PeriodKey): PeerPerformancePeriod | null {
  const explicit = peerAnalysis?.performance?.periods?.[key] ?? peerAnalysis?.periods?.[key]?.performance;
  if (explicit?.rows?.length) return explicit;
  const period = peerAnalysis?.periods?.[key];
  const returns = period?.market_comparison?.returns;
  const rows = returns?.peer_rows ?? [];
  if (!rows.length) return null;
  return {
    period_key: key,
    label: period?.label,
    window_days: period?.window_days ?? returns?.window_days,
    n_obs: returns?.n_obs,
    rows,
    summary: buildPeerReturnSummary(rows, returns),
  };
}

function formatRank(summary?: PeerReturnSummary): string {
  if (!isFiniteNumber(summary?.peer_rank) || !isFiniteNumber(summary?.peer_count)) return 'N/A - data unavailable';
  return `${summary.peer_rank} / ${summary.peer_count + 1}`;
}

function peerName(row: PeerReturnRow): string {
  const name = row.name || row.stock_code || row.ticker || 'N/A - data unavailable';
  const ticker = row.ticker || row.stock_code;
  return ticker && !String(name).includes(String(ticker)) ? `${name} (${ticker})` : String(name);
}

export function PerformanceContext() {
  const { meta, labels, theme, series, peer_analysis: peerAnalysis } = useReport();
  const isSasseurReit = meta.market === 'XSES' && meta.ticker?.toUpperCase() === 'CRPU';
  const totalReturnRows = isSasseurReit
    ? (series.total_returns?.rows ?? [])
    : [];
  const securityTotalReturnRows = totalReturnRows.filter(isSecurityTotalReturnRow);
  const legacyTotalReturnRows = totalReturnRows.filter((row) => !isSecurityTotalReturnRow(row));
  const marketPerformanceRows = series.market_performance?.rows?.length
    ? series.market_performance.rows
    : fallbackMarketPerformanceRows();
  const marketPerformanceWindowText = series.market_performance?.window_note
    || 'Best and worst months are detected from the maximum available daily close history used for each row.';
  const marketPerformanceBasisText = series.market_performance?.window_start && series.market_performance?.window_end
    ? `Overall available window: ${series.market_performance.window_start} to ${series.market_performance.window_end}.`
    : 'Rows may use different available-history windows depending on data coverage.';
  const peerKeys = useMemo(() => peerAnalysis?.enabled ? peerPeriodKeys(peerAnalysis) : [], [peerAnalysis]);
  const [activePeerPeriod, setActivePeerPeriod] = useState<Q01PeriodKey>(peerKeys[0] ?? '30d');

  useEffect(() => {
    if (peerKeys.length > 0 && !peerKeys.includes(activePeerPeriod)) {
      setActivePeerPeriod(peerKeys[0]);
    }
  }, [activePeerPeriod, peerKeys]);

  const peerPerformance = peerAnalysis?.enabled ? getPeerPerformancePeriod(peerAnalysis, activePeerPeriod) : null;
  const peerRows = peerPerformance?.rows ?? [];
  const peerSummary = peerPerformance?.summary;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="glass-card rounded-2xl p-6 shadow-2xl"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            {labels.perf_title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{labels.perf_subtitle}</p>
        </div>
        <span className={`status-badge ${theme.badges.perf.bg} ${theme.badges.perf.textColor} border border-current/30`}>
          {theme.badges.perf.text}
        </span>
      </div>

      {isSasseurReit && securityTotalReturnRows.length > 0 && (
        <div className="mt-5 bg-slate-900/30 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
            <Table2 className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-semibold text-slate-200">Total Returns</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-slate-950/50 text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-left font-semibold">Stock code</th>
                  <th className="px-4 py-3 text-right font-semibold">YTD Total Return</th>
                  <th className="px-4 py-3 text-right font-semibold">1 Year Total Return</th>
                </tr>
              </thead>
              <tbody>
                {securityTotalReturnRows.map((row) => (
                  <tr key={row.key} className={`border-t border-slate-800/70 ${row.is_target ? 'bg-emerald-500/10' : ''}`}>
                    <td className="px-4 py-3 text-slate-300">{row.name || row.label || 'N/A - data unavailable'}</td>
                    <td className="px-4 py-3 text-slate-300">{row.stock_code || 'N/A'}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-100">
                      {formatReturnMetricCell(row.ytd_total_return)}
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-slate-100">
                      {formatReturnMetricCell(row.one_year_total_return)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {series.total_returns?.basis && (
            <p className="px-4 py-3 border-t border-slate-800/70 text-xs text-slate-500">
              Basis: {series.total_returns.basis.replaceAll('_', ' ')}
            </p>
          )}
        </div>
      )}

      {isSasseurReit && legacyTotalReturnRows.length > 0 && (
        <div className="mt-5 bg-slate-900/30 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
            <Table2 className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-semibold text-slate-200">Total Returns</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="bg-slate-950/50 text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 text-left font-semibold">Metric</th>
                  <th className="px-4 py-3 text-right font-semibold">Total Return</th>
                </tr>
              </thead>
              <tbody>
                {legacyTotalReturnRows.map((row) => (
                  <tr key={row.key} className="border-t border-slate-800/70">
                    <td className="px-4 py-3 text-slate-300">{row.label}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-100">
                      {formatReturnCell(row.value, row.note)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-5 bg-slate-900/30 rounded-xl border border-slate-700/50 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <Table2 className="w-4 h-4 text-sky-400" />
            <h4 className="text-sm font-semibold text-slate-200">Market Performance</h4>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            {marketPerformanceWindowText} {marketPerformanceBasisText}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-slate-950/50 text-xs uppercase tracking-wide text-slate-400">
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-right font-semibold">Best Month</th>
                <th className="px-4 py-3 text-right font-semibold">Worst Month</th>
              </tr>
            </thead>
            <tbody>
              {marketPerformanceRows.map((row) => {
                const best = formatExtremeCell(row.best_month);
                const worst = formatExtremeCell(row.worst_month);
                return (
                  <tr key={row.key} className={`border-t border-slate-800/70 ${row.is_target ? 'bg-emerald-500/10' : ''}`}>
                    <td className="px-4 py-3 text-slate-300">
                      <span className="font-medium text-slate-200">{row.name || row.label}</span>
                      {row.stock_code && <span className="ml-2 text-xs text-slate-500">{row.stock_code}</span>}
                      {formatHistoryWindow(row) && (
                        <span className="block text-xs text-slate-500">{formatHistoryWindow(row)}</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-medium text-slate-100">{best.value}</span>
                      {best.month && <span className="block text-xs text-slate-500">{best.month}</span>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-medium text-slate-100">{worst.value}</span>
                      {worst.month && <span className="block text-xs text-slate-500">{worst.month}</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {peerAnalysis?.enabled && peerRows.length > 0 && (
        <div className="mt-5 bg-slate-900/30 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="flex flex-col gap-3 px-4 py-3 border-b border-slate-700/50 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Table2 className="w-4 h-4 text-emerald-400" />
              <div>
                <h4 className="text-sm font-semibold text-slate-200">Peer Performance Detail</h4>
                <p className="text-xs text-slate-400">{peerPerformance?.label || PERIOD_LABELS[activePeerPeriod] || activePeerPeriod.toUpperCase()} return window</p>
              </div>
            </div>
            {peerKeys.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {peerKeys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActivePeerPeriod(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${activePeerPeriod === key
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-900/40 text-slate-400 border-slate-700/50 hover:text-slate-200'
                    }`}
                  >
                    {PERIOD_LABELS[key] ?? key.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 border-b border-slate-800/70">
            <div className="rounded-lg border border-slate-800/80 bg-slate-950/30 p-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">Target return</p>
              <p className="text-sm font-semibold text-slate-100">{formatPercent(peerSummary?.target_return)}</p>
            </div>
            <div className="rounded-lg border border-slate-800/80 bg-slate-950/30 p-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">Peer median</p>
              <p className="text-sm font-semibold text-slate-100">{formatPercent(peerSummary?.peer_median_return)}</p>
            </div>
            <div className="rounded-lg border border-slate-800/80 bg-slate-950/30 p-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">Peer rank</p>
              <p className="text-sm font-semibold text-slate-100">{formatRank(peerSummary)}</p>
            </div>
            <div className="rounded-lg border border-slate-800/80 bg-slate-950/30 p-3">
              <p className="text-[11px] uppercase tracking-wider text-slate-500 mb-1">Peers up / down</p>
              <p className="text-sm font-semibold text-slate-100">
                {isFiniteNumber(peerSummary?.peers_up) && isFiniteNumber(peerSummary?.peers_down)
                  ? `${peerSummary.peers_up} / ${peerSummary.peers_down}`
                  : 'N/A - data unavailable'}
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-slate-950/50 text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-4 py-3 text-left font-semibold">Name</th>
                  <th className="px-4 py-3 text-right font-semibold">Return</th>
                  <th className="px-4 py-3 text-right font-semibold">Observations</th>
                  <th className="px-4 py-3 text-right font-semibold">Target</th>
                </tr>
              </thead>
              <tbody>
                {peerRows.map((row) => (
                  <tr key={`${activePeerPeriod}-${row.ticker || row.stock_code}-${row.is_target ? 'target' : 'peer'}`} className={`border-t border-slate-800/70 ${row.is_target ? 'bg-emerald-500/10' : ''}`}>
                    <td className="px-4 py-3 text-slate-300">{peerName(row)}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-100">{formatPercent(row.return)}</td>
                    <td className="px-4 py-3 text-right text-slate-300">{isFiniteNumber(row.n_obs) ? row.n_obs : 'N/A - data unavailable'}</td>
                    <td className="px-4 py-3 text-right text-slate-300">{row.is_target ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Insight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="insight-card mt-5"
      >
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-sky-400 font-semibold">Read-through:</span>{' '}
            {labels.perf_insight.replace('💡 Read-through: ', '')}
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
