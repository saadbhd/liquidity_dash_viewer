import type { ReportData } from '@/types/report';

const MARKET_CURRENCY: Record<string, string> = {
  XSES: 'SGD',
  XHKG: 'HKD',
};

const CURRENCY_PREFIX: Record<string, string> = {
  SGD: 'S$',
  HKD: 'HK$',
  USD: 'US$',
  AUD: 'A$',
  CAD: 'C$',
};

export function normalizeCurrencyCode(currency?: string | null): string {
  return String(currency || '').trim().toUpperCase();
}

export function getCurrencyPrefix(currency?: string | null): string {
  const code = normalizeCurrencyCode(currency);
  if (!code) return '';
  return CURRENCY_PREFIX[code] ?? `${code} `;
}

export function getCurrencyCodeLabel(currency?: string | null): string {
  return normalizeCurrencyCode(currency);
}

function compactNumber(value: number): string {
  if (Math.abs(value) >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (Math.abs(value) >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (Math.abs(value) >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return value.toFixed(0);
}

export function splitCompactMoney(value: number | null | undefined, currency?: string | null): { prefix: string; compact: string } {
  if (value === null || value === undefined || !Number.isFinite(value)) {
    return { prefix: '', compact: 'N/A' };
  }
  return {
    prefix: getCurrencyPrefix(currency),
    compact: compactNumber(value),
  };
}

export function formatCompactMoney(value: number | null | undefined, currency?: string | null): string {
  const parts = splitCompactMoney(value, currency);
  if (parts.compact === 'N/A') return parts.compact;
  return `${parts.prefix}${parts.compact}`;
}

export function resolveReportCurrency(report: Partial<ReportData> & Record<string, any>): string {
  const traderCompositionCurrency = normalizeCurrencyCode((report?.series?.trader_composition as any)?.currency);
  return (
    normalizeCurrencyCode(report?.meta?.currency) ||
    normalizeCurrencyCode(report?.q03?.currency) ||
    traderCompositionCurrency ||
    normalizeCurrencyCode(report?.q03?.trader_composition?.currency) ||
    MARKET_CURRENCY[String(report?.meta?.market || '').trim().toUpperCase()] ||
    ''
  );
}
