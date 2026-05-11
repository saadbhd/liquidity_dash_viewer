import type { ReportData } from '@/types/report';
import etfPayload from './etf_3416_report.json';

const raw = etfPayload as any;

export const REPORT_DATA: ReportData = {
  report_kind: 'etf',
  meta: {
    market: 'XHKG',
    currency: 'HKD',
    ticker: '3416',
    company: raw.meta?.name ?? 'Global X HSCEI Covered Call Active ETF',
    asof_date: raw.macro_regime?.regime_series?.at?.(-1)?.date ?? raw.meta?.asof_date ?? '2026-04-29',
    industry: raw.meta?.asset_class ?? 'China Securities',
    sector: 'Covered Call ETF',
    market_cap_display: `AUM HK$${Number(raw.meta?.aum_hkd_m ?? 0).toFixed(1)}M`,
    market_cap_category: 'ETF',
    universe_total: 0,
    peers_count: 0,
    page_title_template: 'ETF Liquidity & Regime Report — {market}/{ticker} — {asof}',
  },
  theme: {
    badges: {
      header_health: {
        text: `${raw.headline?.score_label ?? 'ETF'} · ${Number(raw.headline?.score ?? 0).toFixed(1)}/100`,
        bg: 'bg-emerald-500/10',
        textColor: 'text-emerald-300',
        dot: 'bg-emerald-400',
      },
      liq_section: { text: 'ETF liquidity', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      perf: { text: 'ETF', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      drivers: { text: 'ETF drivers', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      exec_check: { text: 'Execution', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      intraday: { text: 'Trading activity', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      ofi: { text: 'Flow', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
      short: { text: 'Short-volume overlay', bg: 'bg-amber-500/10', textColor: 'text-amber-300', dot: 'bg-amber-400' },
      index_status: { text: 'ETF product', bg: 'bg-sky-500/10', textColor: 'text-sky-300', dot: 'bg-sky-400' },
    },
    borders: {
      action_plan: 'border-sky-500/30',
      index: 'border-sky-500/30',
    },
    colors: {
      interpretation_good: 'text-emerald-400',
      interpretation_neutral: 'text-slate-400',
      interpretation_bad: 'text-red-400',
    },
  } as any,
  labels: {
    exec_subtitle: `${raw.meta?.short_name ?? '3416'} · ${raw.meta?.exchange ?? 'HKEX'} · ${raw.meta?.strategy ?? 'Covered-call ETF'}`,
    header_meta_line1_tokens: [],
    header_meta_line2_tokens: [],
  } as any,
  content: {
    exec_metrics: [],
    exec_takeaways: [],
    liq_tiles: [],
  } as any,
  insights: {} as any,
  series: {} as any,
  etf: raw,
};

