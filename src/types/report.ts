// ============================================================================
// TYPE DEFINITIONS FOR LIQUIDITY ANALYSIS REPORT
// ============================================================================

export interface Meta {
  market: string;
  ticker: string;
  company: string;
  asof_date: string;
  industry: string;
  sector: string;
  market_cap_display: string;
  market_cap_category: string;
  universe_total: number;
  peers_count: number;
  page_title_template: string;
}

export interface Badge {
  text: string;
  bg: string;
  textColor?: string;
  dot?: string;
}

export interface Theme {
  badges: {
    header_health: Badge;
    liq_section: Badge;
    perf: Badge;
    drivers: Badge;
    exec_check: Badge;
    intraday: Badge;
    ofi: Badge;
    short: Badge;
    index_status: Badge;
  };
  borders: {
    action_plan: string;
    index: string;
  };
  colors: {
    interpretation_good: string;
    interpretation_neutral: string;
    interpretation_bad: string;
  };
}

export interface Tooltip {
  title: string;
  body: string;
}

export interface ExecMetric {
  title: string;
  tooltip?: Tooltip;
  value: string;
  suffix?: string;
  bar_pct: number;
  color_value: string;
  color_bar: string;
  subtext: string;
  interpretation: { text: string; cls: string; icon: string };
}

export interface ActionPlanItem {
  title: string;
  bullets?: string[];
}

export interface ActionPlanColumn {
  priority: string;
  badge: Badge;
  items: ActionPlanItem[];
}

export interface LiqTile {
  title: string;
  value: string;
  sub: string;
  interp: { text: string; cls: string; icon: string };
}

export interface ExecCheckTile {
  title: string;
  value: string;
  note: string;
  color: string;
}

export interface ImpactCard {
  title: string;
  text: string;
  cls: string;
}

export interface OrderBookLevel {
  level: number;
  price: number;
  quantity: number;
  value: number;
}

export interface PeerCapacity {
  bx_ticket_pct_adv_50k: number;
  peers: { ticker: string; pct: number }[];
}

export interface ProfileBucket {
  time: string;
  avg_share: number;
}

export interface PeerHHI {
  ticker: string;
  auctions_pct: number;
  hhi: number;
  interp: { text: string; cls: string; you?: boolean };
}

export interface OFITileValue {
  value: string;
  note_suffix: string;
}

export interface OFITableRow {
  period: string;
  avg_ofi: string;
  avg_abs: string;
  interp: { text: string; cls: string };
}

export interface OFIPie {
  net_buy_days: number;
  net_sell_days: number;
  balanced_days: number;
}

export interface IndexTile {
  title: string;
  value: string;
  sub: string;
}

export interface IndexTableRow {
  index: string;
  status: 'eligible' | 'ineligible';
  notes: string;
  gaps: string[];
}

export interface PeersLiquidity {
  labels: string[];
  scores: number[];
  is_target: boolean[];
  adv: number[];
  total: number;
}

export interface ReturnData {
  horizon: string;
  stock: number;
  market: number;
  sector: number;
  peers: number;
}

export interface LeadLag {
  lags: number[];
  corr_market: number[];
  corr_sector: number[];
  best: { market: number; sector: number };
}

export interface RollingData {
  ordered: string[];
  market: number[];
  sector: number[];
  idio: number[];
}

export interface RollingWindowEntry {
  valid: boolean;
  period_label?: string;
  shares?: {
    share_market: number;
    share_sector: number;
    share_idio: number;
  };
  regression?: {
    r_squared: number;
  };
}

export type RollingWindows = Record<string, RollingWindowEntry>;

export interface Regime {
  n_regimes: number;
  labels: string[];
  pct_time: number[];
  current_regime: number;
  regimes: {
    id: number;
    label: string;
    mean_ret: number;
    volatility: number;
    /** When set, value is already in percent — display as-is with % (no ×100) */
    mean_ret_pct?: number;
    /** When set, value is already in percent — display as-is with % (no ×100) */
    volatility_pct?: number;
    n_days: number;
    pct_time: number;
  }[];
  transitions: number[][];
}

export interface IntradaySession {
  opening: number;
  continuous: number;
  closing: number;
  auctions: number;
  other?: number;
}

export interface TraderCompositionThresholds {
  retail_max: number;
  instit_min: number;
}

export interface TraderCompositionMix {
  retail_pct: number;
  mixed_pct: number;
  instit_pct: number;
  // Optional (v3): composition by total shares and notional (fractions 0-1).
  retail_qty_pct?: number;
  mixed_qty_pct?: number;
  instit_qty_pct?: number;
  retail_notional_pct?: number;
  mixed_notional_pct?: number;
  instit_notional_pct?: number;
}

// Legacy (v1) shape kept for backward compatibility with older report files.
export interface TraderCompositionLegacy {
  thresholds: TraderCompositionThresholds;
  composition: TraderCompositionMix;
  trade_stats: { total_trades: number; avg_size: number; median_size: number; period_days: number };
  over_time: {
    month: string;
    retail_pct: number;
    mixed_pct: number;
    instit_pct: number;
    avg_size: number;
  }[];
  peer_comparison: {
    ticker: string;
    retail_pct: number;
    mixed_pct: number;
    instit_pct: number;
    avg_size: number;
    is_target: boolean;
  }[];
}

export interface TraderPeerCompositionRow {
  ticker: string;
  currency: string;
  is_target: boolean;
  retail_pct: number;
  mixed_pct: number;
  instit_pct: number;
  retail_qty_pct?: number;
  mixed_qty_pct?: number;
  instit_qty_pct?: number;
  retail_notional_pct?: number;
  mixed_notional_pct?: number;
  instit_notional_pct?: number;
  avg_trade_size: number;
  thresholds: TraderCompositionThresholds;
}

export interface TraderCompositionPeriodSnapshot {
  valid: boolean;
  currency: string;
  n_trades: number;
  first_trade_date: string;
  last_trade_date: string;
  period_days: number;
  thresholds: TraderCompositionThresholds;
  composition: TraderCompositionMix;
  trade_size: { avg: number; median: number };
  peer_comparison?: TraderPeerCompositionRow[];
}

// New (v2) schema from the pipeline (fractions 0-1).
export interface TraderCompositionV2 {
  primary_period?: string;
  periods?: Record<string, TraderCompositionPeriodSnapshot>;
  peer_comparison_periods?: Record<string, TraderPeerCompositionRow[]>;
  valid: boolean;
  currency: string;
  n_trades: number;
  first_trade_date: string;
  last_trade_date: string;
  period_days: number;
  thresholds: TraderCompositionThresholds;
  composition: TraderCompositionMix;
  trade_size: { avg: number; median: number };
  over_time: {
    valid: boolean;
    periods: {
      month: string;
      n_trades: number;
      retail_pct: number;
      mixed_pct: number;
      instit_pct: number;
      avg_trade_size: number;
      // Optional (v3): monthly composition by total shares (fractions 0-1).
      retail_qty_pct?: number;
      mixed_qty_pct?: number;
      instit_qty_pct?: number;
      total_quantity?: number;
    }[];
  };
  peer_comparison: TraderPeerCompositionRow[];
  currency_thresholds?: Record<string, TraderCompositionThresholds>;
  classification_legend?: Record<string, string>;
}

export type TraderComposition = TraderCompositionLegacy | TraderCompositionV2;

export interface PriceMovingMoverGroup {
  count: number;
  avg_size: number;
  median_size: number;
  retail_count?: number;
  mixed_count?: number;
  institutional_count?: number;
  retail_pct?: number;
  mixed_pct?: number;
  instit_pct?: number;
}

export interface PriceMovingTrades {
  total_trades: number;
  price_moving_trades: number;
  pct_price_moving: number;
  all_movers: PriceMovingMoverGroup;
  positive_movers: PriceMovingMoverGroup;
  negative_movers: PriceMovingMoverGroup;
}

export interface ShortSellingPeriodStats {
  valid: boolean;
  avg_short_ratio: number;
  max_short_ratio: number;
  interpretation: string;
}

export interface ShortSelling {
  data_available: boolean;
  security_name: string;
  methodology?: {
    primary_period?: string;
    [key: string]: string | number | null | undefined;
  };
  mapping?: {
    ticker_to_security: string;
    confidence: string;
  };
  coverage?: {
    n_days_short_data: number;
    window_days: number;
  };
  // Optional: Securities Borrowing & Lending (SBL) lending pool context (XSES).
  // Present only when the pipeline finds an SBL pool mapping for the ticker.
  sbl_pool?: {
    valid: boolean;
    lending_pool: number; // shares available
    lending_pool_value: number; // SGD notional (latest_price * lending_pool)
    latest_price: number;
    lending_rate_pct: number;
    borrowing_rate_pct: number;
    pool_as_pct_adv: number; // % of 20D ADV
    days_to_liquidate: number;
    estimated_impact_pct: number; // e.g. 0.05 = 5%
    liquidity_risk?: string;
    impact_interpretation?: string;
    timestamp?: string;
  };
  periods: Record<
    string,
    {
      stats: ShortSellingPeriodStats;
    }
  >;
  correlation: {
    valid: boolean;
    correlation: number;
    interpretation: string;
  };
  peaks: {
    date: string;
    short_ratio: number;
    return_pct: number;
  }[];
  short_interest_change?: {
    valid: boolean;
    monthly_data: { month: string; avg_short_ratio: number }[];
    mom_change: { month: string; avg_short_ratio: number; change_pct: number | null }[];
    interpretation: string;
  };
  short_series?: {
    valid: boolean;
    rows: {
      date: string;
      short_ratio: number;
      short_vol: number;
      total_vol: number;
      return: number;
      close?: number;
    }[];
  };
  peer_comparison?: {
    ticker: string;
    avg_short_ratio: number;
    max_short_ratio: number;
    is_target: boolean;
  }[];
}

export interface Intraday {
  session_periods: string[];
  session: Record<string, IntradaySession>;
  hhi: Record<string, number>;
  profile_buckets: ProfileBucket[];
  peers_hhi_rows: PeerHHI[];
}

export interface OFIBlock {
  tiles_values: OFITileValue[];
  table_rows: OFITableRow[];
  corr_value: string;
  pie: OFIPie;
  l2_compact_text: string;
  unusual_header: string[];
  unusual_rows: any[];
  ofi_series: {
    rows: any[];
    window_options: number[];
  };
}

export interface IndexBlock {
  tiles: IndexTile[];
  table_header: string[];
  table_rows: IndexTableRow[];
  insight: string;
  levers_title: string;
  levers: string[];
}

export interface MetricStats {
  direction: 'higher_is_better' | 'lower_is_better';
  mean: number;
  median: number;
  min: number;
  max: number;
  p5?: number;
  p95?: number;
  count: number;
}

export type Q01PeriodKey = '1d' | '1w' | '2w' | '30d' | '3m' | '6m' | 'max' | string;

export interface Q01Liquidity {
  metric_aggregation: string;
  metric_window_days: number;
  score_pca: number;
  score_pca_percentile: number;
  rank_pca: number;
  total: number;
  adv_notional_sgd: number;
  adv_volume_shares: number;
  free_float_shares: number | null;
  turnover_ratio: number | null;
  votes: number | null;
  trades: number | null;
  spread_pct: number | null;
  spread_ticks: number | null;
  amihud: number | null;
  volatility: number | null;
}

export interface Q01Pca {
  valid: boolean;
  window_days: number;
  variance_explained: number | null;
  loadings: Record<string, number | null>;
}

export interface Q01DataQualityItem {
  valid: boolean;
  reason: string | null;
}

export interface Q01PeerSummary {
  n_peers: number;
  peer_median_adv: number | null;
  peer_median_score_pca: number | null;
  peer_median_trades: number | null;
  peer_median_volatility: number | null;
  peer_median_spread_pct: number | null;
  peer_median_amihud: number | null;
  peer_median_turnover_ratio: number | null;
  target_vs_peer: Record<string, number | null>;
}

export interface Q01PeerLiquidityRow {
  ticker: string;
  score_pca: number;
  rank_pca: number;
  adv: number;
  trades: number | null;
  volatility: number | null;
  spread_pct: number | null;
  spread_ticks: number | null;
  amihud: number | null;
  turnover_ratio: number | null;
  is_target: boolean;
}

export interface Q01Returns {
  window_days: number;
  n_obs: number;
  stock: number | null;
  market: number | null;
  sector: number | null;
  peers: number | null;
  vs_market: number | null;
  vs_sector: number | null;
  vs_peers: number | null;
}

export interface Q01MarketComparisonMetrics {
  adv: MetricStats;
  spread_pct: MetricStats;
  turnover_ratio: MetricStats;
  trades: MetricStats;
  volatility?: MetricStats;
  amihud?: MetricStats;
}

export interface Q01MarketComparison {
  sector_name: string;
  sector_count: number;
  market_count: number;
  market: Q01MarketComparisonMetrics;
  sector: Q01MarketComparisonMetrics;
  peers: Q01MarketComparisonMetrics;
  returns: Q01Returns;
}

export interface Q01PeriodData {
  label: string;
  window_days: number;
  liquidity: Q01Liquidity;
  pca: Q01Pca;
  data_quality: Record<string, Q01DataQualityItem>;
  peer_summary: Q01PeerSummary;
  peer_liquidity: Q01PeerLiquidityRow[];
  market_comparison: Q01MarketComparison;
}

export interface Q01 {
  primary_liquidity_period: Q01PeriodKey;
  periods: Partial<Record<Q01PeriodKey, Q01PeriodData>>;
  period_insights?: Partial<
    Record<
      Q01PeriodKey,
      {
        liquidity?: string;
        market_comparison?: string;
      }
    >
  >;
}

export interface Q02RegimeMetricsMedian {
  [key: string]: number | null | undefined;
}

export interface Q02RegimeItem {
  id: number;
  label: string;
  pct_time: number;
  n_days?: number;
  liquidity_score?: number | null;
  mean_ret_pct?: number | null;
  volatility_pct?: number | null;
  activity_score?: number | null;
  spread_mode_ticks?: number | null;
  l2_depth_notional_top4?: number | null;
  l2_updates?: number | null;
  l3_events?: number | null;
  l3_executed_events?: number | null;
  metrics_median?: Q02RegimeMetricsMedian;
}

export interface Q02RegimeMethodology {
  window_days?: number | null;
  clustering?: string | null;
  spread_unit?: string | null;
  tick_size_inferred?: number | null;
  regime_metric_aggregation?: string | null;
}

export interface Q02RegimeSwitching {
  valid?: boolean;
  regime_method?: string;
  n_regimes?: number;
  regimes?: Q02RegimeItem[];
  transitions?: number[][];
  current_regime?: number;
  interpretation?: string;
  feature_columns?: string[];
  methodology?: Q02RegimeMethodology;
}

export interface Q02 {
  regime_switching?: Q02RegimeSwitching;
  methodology?: {
    regime_window_days?: number;
    [key: string]: number | string | null | undefined;
  };
}

export interface CompanyMetrics {
  volatility: number;
  adv: number;
  spread_pct: number;
  turnover_ratio: number;
  amihud: number;
  trades: number;
}

export interface MarketStats {
  volatility: MetricStats;
  adv: MetricStats;
  spread_pct: MetricStats;
  turnover_ratio: MetricStats;
  amihud: MetricStats;
  trades: MetricStats;
}

export interface PeerStats {
  volatility: MetricStats;
  adv: MetricStats;
  spread_pct: MetricStats;
  turnover_ratio: MetricStats;
  amihud: MetricStats;
  trades: MetricStats;
}

export interface MarketComparison {
  sector_name: string;
  sector_count: number;
  market_count: number;
  company: CompanyMetrics;
  market: MarketStats;
  sector: MarketStats;
  peers: PeerStats;
}

export interface LiquidityInsights {
  overall: string;
  strengths: string[];
  concerns: string[];
  peer_context: string;
}

export interface MarketComparisonInsight {
  insight: string;
  vs_market: string;
  vs_sector: string;
  vs_peers: string;
}

export interface MarketComparisonInsights {
  adv: MarketComparisonInsight;
  spread: MarketComparisonInsight;
  volatility: MarketComparisonInsight;
  trades: MarketComparisonInsight;
}

export interface PerformancePeriodInsight {
  stock: string;
  market: string;
  sector: string;
  peers: string;
  insight: string;
}

export interface PerformanceInsights {
  overall: string;
  ytd: PerformancePeriodInsight;
  three_month: PerformancePeriodInsight;
  six_month: PerformancePeriodInsight;
  conclusion: string;
}

export interface DriverInsights {
  overall: string;
  interpretation: string;
  rolling_change: string;
  beta: string;
}

export interface RegimeInsights {
  overall: string;
  current: string;
  transitions: string;
  trading_implications: string;
}

export interface TraderCompositionInsights {
  overall: string;
  retail_heavy: string;
  institutional_gap: string;
  peer_comparison: string;
}

export interface PriceMovingInsights {
  overall: string;
  interpretation: string;
  asymmetry: string;
  /** Optional: insight that retail dominates price-moving trades (when by-trader breakdown is present). */
  by_trader_type?: string;
}

export interface ShortSellingInsights {
  overall: string;
  level: string;
  correlation: string;
  trend: string;
  peaks: string;
}

export interface ExecutionInsights {
  overall: string;
  concern: string;
  kyle?: string;
  peer_context: string;
}

export interface IntradayInsights {
  overall: string;
  hhi_interpretation: string;
  best_times: string;
  peer_ranking: string;
}

export interface OFIInsights {
  overall: string;
  daily_vs_intraday: string;
  l2_signal: string;
  day_breakdown: string;
}

export interface IndexInsights {
  overall: string;
  hsci: string;
  hsi_gap: string;
  tech_gap: string;
  recommendation: string;
}

export interface Insights {
  liquidity: LiquidityInsights;
  market_comparison: MarketComparisonInsights;
  performance: PerformanceInsights;
  drivers: DriverInsights;
  regime: RegimeInsights;
  trader_composition: TraderCompositionInsights;
  price_moving: PriceMovingInsights;
  short_selling?: ShortSellingInsights;
  execution: ExecutionInsights;
  intraday: IntradayInsights;
  ofi: OFIInsights;
  index: IndexInsights;
}

export interface Drivers {
  share_market: number;
  share_sector: number;
  share_idio: number;
  beta_market: number;
  beta_sector: number;
  r_squared: number;
  lead_lag: LeadLag;
  rolling: RollingData;
  rolling_windows?: RollingWindows;
  regime: Regime;
}

export interface Series {
  peers_liquidity: PeersLiquidity;
  market_comparison: MarketComparison;
  returns: ReturnData[];
  drivers: Drivers;
  order_book: {
    bids: OrderBookLevel[];
    asks: OrderBookLevel[];
  };
  peer_capacity: PeerCapacity;
  trader_composition: TraderComposition;
  price_moving_trades: PriceMovingTrades;
  short_selling?: ShortSelling;
  intraday: Intraday;
  ofi_block: OFIBlock;
  index_block: IndexBlock;
}

export interface DriverStrip {
  title: string;
  text: string;
}

export interface Labels {
  header_title: string;
  header_meta_line1_tokens: string[];
  header_meta_line2_tokens: string[];
  exec_title: string;
  exec_subtitle: string;
  exec_takeaways_title: string;
  metric_liquidity_score: string;
  metric_spread: string;
  metric_adv: string;
  metric_drivers: string;
  action_plan_title: string;
  action_plan_subtitle: string;
  action_plan_icon: string;
  liq_title: string;
  liq_subtitle: string;
  market_comparison_title: string;
  market_comparison_subtitle: string;
  perf_title: string;
  perf_subtitle: string;
  perf_insight: string;
  drivers_title: string;
  drivers_subtitle: string;
  drivers_strip: DriverStrip[];
  drivers_pie_title: string;
  drivers_pie_note: string;
  lead_lag_title: string;
  lead_lag_note: string;
  rolling_title: string;
  rolling_latest_label: string;
  rolling_note: string;
  drivers_bottom_line: string;
  drivers_wtd_title: string;
  drivers_wtd_list: string[];
  regime_title: string;
  regime_subtitle: string;
  regime_badge_text: string;
  regime_pie_title: string;
  transition_title: string;
  transition_cols: string[];
  transition_note_template: string;
  exec_check_title: string;
  exec_check_subtitle: string;
  order_book_title: string;
  order_book_note: string;
  peer_capacity_title: string;
  peer_capacity_note: string;
  impact_summary_title: string;
  impact_summary_subtitle: string;
  exec_check_insight: string;
  trader_composition_title: string;
  trader_composition_subtitle: string;
  trader_retail_threshold: string;
  trader_mixed_threshold: string;
  trader_instit_threshold: string;
  peer_trader_title: string;
  peer_trader_subtitle: string;
  price_moving_title: string;
  price_moving_subtitle: string;
  intraday_title: string;
  intraday_subtitle: string;
  session_dist_title: string;
  session_period_label: string;
  session_dist_note: string;
  hhi_title: string;
  hhi_note_template: string;
  intraday_intensity_title: string;
  intraday_intensity_note: string;
  peers_hhi_title: string;
  peers_hhi_cols: string[];
  peers_hhi_note: string;
  intraday_insight: string;
  ofi_title: string;
  ofi_subtitle: string;
  ofi_tiles: { title: string; note: string }[];
  ofi_table_title: string;
  ofi_table_note: string;
  ofi_table_cols: string[];
  ofi_corr_note_template: string;
  ofi_pie_title: string;
  ofi_pie_stats: string[];
  l2_compact_title: string;
  ofi_unusual_title: string;
  ofi_unusual_cols: string[];
  ofi_unusual_note: string;
  index_title: string;
  index_subtitle: string;
  footer: string;

  // Optional (only used for some markets like XSES)
  short_title?: string;
  short_subtitle?: string;
}

export interface Content {
  exec_metrics: ExecMetric[];
  exec_takeaways: string[];
  action_plan: {
    borderClass: string;
    columns: ActionPlanColumn[];
  };
  liq_tiles: LiqTile[];
  liq_insight: string;
  perf_badge: string;
  exec_check_tiles: ExecCheckTile[];
  impact_summary_cards: ImpactCard[];
  peers_hhi_header: string[];
  ofi_tiles_interpretations: { cls: string; text: string }[];
  footer: string;
}

export interface GlossaryTerm {
  term: string;
  explanation: string;
  plainLanguage: string;
}

export interface Glossary {
  ofi: GlossaryTerm;
  adv: GlossaryTerm;
  hhi: GlossaryTerm;
  spread: GlossaryTerm;
  granger: GlossaryTerm;
  regime: GlossaryTerm;
  kyle: GlossaryTerm;
  amihud: GlossaryTerm;
  idiosyncratic: GlossaryTerm;
}

export interface PeerMethodology {
  title: string;
  steps: string[];
  peers: {
    ticker: string;
    name: string;
    marketCap: string;
    sector?: string;
    industry?: string;
  }[];
}

export interface ReportData {
  meta: Meta;
  theme: Theme;
  labels: Labels;
  content: Content;
  insights: Insights;
  series: Series;
  q01?: Q01;
  q02?: Q02;
}
