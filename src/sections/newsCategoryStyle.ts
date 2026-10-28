// Presentation only: official exchange categories and our topics stay distinct.
// Colors identify categories, never sentiment, importance or expected returns.
const PALETTE = [
  ['#2563eb', '#60a5fa'], ['#7c3aed', '#a78bfa'], ['#b45309', '#fbbf24'],
  ['#0e7490', '#22d3ee'], ['#be185d', '#f472b6'], ['#4d7c0f', '#a3e635'],
  ['#4338ca', '#818cf8'], ['#c2410c', '#fb923c'], ['#0f766e', '#2dd4bf'],
  ['#a21caf', '#e879f9'], ['#0369a1', '#7dd3fc'], ['#92400e', '#fcd34d'],
];
const CATEGORY_INDEX: Record<string, number> = {
  'official:financial statements': 0,
  'official:disclosure of interest/ changes in interest': 1,
  'official:cash dividend/ distribution': 2,
  'official:general announcement': 3,
  'official:announcement of appointment': 4,
  'official:annual general meeting': 5,
  'official:annual reports and related documents': 6,
  'official:placements': 7,
  'official:announcement of cessation': 8,
  'official:extraordinary/ special general meeting': 9,
  'official:listing confirmation': 10,
  'official:notice of valuation of real assets': 11,
  'topic:financial performance': 0,
  'topic:ownership changes': 1,
  'topic:shareholder returns': 2,
  'topic:business and transactions': 3,
  'topic:governance': 4,
  'topic:financing and capital': 7,
  'topic:trading and listing': 8,
  'topic:other updates': 10,
};

export function newsCategoryColor(key: string, isDark: boolean): string {
  const normalized = key.trim().toLowerCase().replace(/\s+/g, ' ');
  if (normalized === 'story' || normalized === 'mixed' || normalized.endsWith(':category unavailable')) return isDark ? '#94a3b8' : '#64748b';
  // Fixed known categories plus a deterministic fallback for new source labels.
  let hash = 0;
  for (const character of normalized) hash = (Math.imul(hash, 31) + character.charCodeAt(0)) >>> 0;
  const index = CATEGORY_INDEX[normalized] ?? hash % PALETTE.length;
  return PALETTE[index][isDark ? 1 : 0];
}

export function officialNewsCategories(publication: { sgx_category?: string | null; sgx_categories?: string[] }): string[] {
  const values = [publication.sgx_category, ...(publication.sgx_categories || [])]
    .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
    .map((value) => value.trim());
  return values.length ? [...new Set(values)].sort() : ['Category unavailable'];
}
