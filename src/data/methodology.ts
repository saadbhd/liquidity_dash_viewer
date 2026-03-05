// Auto-generated from LiquidityIQ_Reports/src/methodology_tooltips.py
// Do NOT edit manually — update the Python source and re-run:
//   python generate_ts_with_openai.py --methodology-only --methodology-output <path>

export const METHODOLOGY: Record<string, { title: string; body: string }> = {
  liquidity_score: {
    title: "Liquidity Score (PCA)",
    body: "Composite score built from six liquidity features (average daily trading value, trade count, turnover vs free float, bid-ask spread, price impact score, price variability) using Principal Component Analysis (PCA). Features are computed as 20-day trailing medians, standardized, and projected onto the first principal component. The score is oriented so higher = more liquid, then converted to a percentile rank across the full exchange universe.",
  },
  drivers: {
    title: "Drivers of Moves",
    body: "Two-factor regression over the most recent 63 trading days: r_stock = α + β_market × r_market + β_sector × r_sector + ε. Share-of-moves decomposes absolute contributions: market = Σ|β_m × r_mkt|, sector = Σ|β_s × r_sector|, idiosyncratic = Σ|ε|, each normalized to a percentage of total. Rolling windows (6 × 63 days) show how the mix evolves over time.",
  },
  regime_switching: {
    title: "Liquidity Regime Detection",
    body: "A daily liquidity score is computed from the same PCA feature family (trading value, trades, turnover, spread, price impact, and price variability) over 20-day rolling medians. A Markov Switching model (2 or 3 regimes, selected by AIC) identifies distinct liquidity states — Low, Medium, High — and estimates transition probabilities between them. Granger causality tests within each regime reveal directional links.",
  },
  execution: {
    title: "Execution Impact Simulation",
    body: "Market orders are simulated through the actual L2 order book: SELL orders hit bids, BUY orders lift asks, walking through levels until the target notional is filled. Impact = (VWAP − Mid) / Mid × 10,000 bps. Multi-day statistics aggregate results over 30 snapshots (extended to 90 if sparse). Kyle's Lambda fallback estimates impact per unit volume via regression over 63 days.",
  },
  intraday: {
    title: "Intraday Liquidity Patterns",
    body: "Trades are bucketed into 30-minute intervals in SGT (UTC+8). Sessions are classified by MarketState: Opening Auction, Continuous Trading, Closing Auction, Intraday Auction. Volume share per bucket uses the median across days (not mean) to reduce outlier impact. Concentration is measured by the Herfindahl-Hirschman Index (HHI) per day, then averaged.",
  },
  trader_composition: {
    title: "Trader Type Classification",
    body: "Each trade is classified as Retail, Institutional, or Mixed based on trade size relative to ADV and order characteristics from L3 data. The current month breakdown shows the latest mix; the 6-month trend tracks monthly shifts in participation. Peer comparison shows how the trader mix differs from similar stocks.",
  },
  peer_traders: {
    title: "Peer Trader Comparison",
    body: "Compares the trader composition (retail / institutional / mixed) of the target stock against its 8 selected peers. Peers are chosen using a 5-tier matching algorithm: same cap class + sector, same cap + industry, same industry, same cap class, then nearest average daily trading value. Trader percentages are averaged across peers for benchmarking.",
  },
  price_moving_trades: {
    title: "Price-Moving Trades",
    body: "Identifies trades that caused a price change (tick movement) over the past 6 months. A trade is price-moving if the trade price differs from the previous trade price. The ratio of price-moving trades to total trades indicates how sensitive the price is to individual transactions — higher ratios suggest thinner liquidity.",
  },
  short_selling: {
    title: "Short Selling Analysis",
    body: "Daily short ratio = ShortSaleVolume / TotalVolume. Days to cover = ShortVolume / 20-day rolling average daily trading value. Unusual activity is flagged when the short ratio exceeds the 60-day rolling mean + 2 standard deviations. Peak days are those with short ratio above 15%. SBL pool impact estimates the bps cost of liquidating the available lending pool.",
  },
  pca_score: {
    title: "PCA Liquidity Score",
    body: "Six features — log(average daily trading value), log(trades), log(turnover), negative spread, negative price impact, negative price variability — are standardized (z-score) and decomposed via SVD. The first principal component captures the dominant liquidity dimension. Scores are oriented so higher = more liquid and converted to a percentile rank in the exchange universe.",
  },
  spread: {
    title: "Bid-Ask Spread",
    body: "The relative bid-ask spread is computed as (Ask − Bid) / Mid × 100%. We use the 20-day trailing median of daily mean spreads (Spread_RelMean). Lower spread means lower implicit trading cost.",
  },
  amihud: {
    title: "Price Impact Score",
    body: "Measures price impact per unit of value traded: Price Impact Score = mean(|daily return| / daily notional volume). Higher values indicate that even small trades move the price significantly, signaling poor liquidity. We use the 20-day trailing median.",
  },
  adv: {
    title: "Average Daily Trading Value",
    body: "Median of (close price × volume) over the last 20 trading days. Expressed in local currency (e.g., S$, HK$). This is the primary measure of how much liquidity is available daily.",
  },
  turnover: {
    title: "Turnover vs Free Float",
    body: "Daily volume divided by free-float shares (fallback: shares outstanding), medianed over 20 trading days. Measures the fraction of the company that changes hands on a typical day. Higher turnover implies more active trading relative to the stock's size.",
  },
  volatility: {
    title: "Price Variability",
    body: "Median of daily |return| over the 20-day trailing window. Used as a proxy for price uncertainty. Enters the PCA score inversely (higher variability reduces the liquidity score).",
  },
  kyles_lambda: {
    title: "Kyle's Lambda (Price Impact)",
    body: "Regression of |daily return| on daily notional volume over 63 trading days. The slope (λ) measures how much the price moves per unit of volume traded. Scaled to a reference notional amount (e.g., S$10K) to give impact in bps. Higher λ = more price impact = less liquid.",
  },
  hhi: {
    title: "Trading Concentration Index (HHI)",
    body: "Herfindahl-Hirschman Index: for each day, the index = Σ(share_bucket²) across 30-minute volume buckets. Then averaged across all days in the period. Range 0 to 1: closer to 0 = evenly distributed, closer to 1 = concentrated. Values above 0.25 indicate high intraday concentration.",
  },
  granger: {
    title: "Granger Causality",
    body: "Statistical test checking whether lagged order flow imbalance (OFI) helps predict future price returns, controlling for past returns. Uses maximum lag of 2 days. A significant p-value (< 0.05) suggests order flow has predictive power over price movements.",
  },
  beta_market: {
    title: "Market Sensitivity (Beta)",
    body: "Sensitivity of the stock's return to the overall market (index) return. Estimated from the 2-factor regression over 63 trading days. β_market > 1 means the stock amplifies market moves; < 1 means it dampens them.",
  },
  beta_sector: {
    title: "Sector Sensitivity (Beta)",
    body: "Sensitivity of the stock's return to its sector median return, after controlling for market moves. Estimated from the 2-factor regression over 63 trading days. A high sector beta means the stock tracks sector-specific trends closely.",
  },
  share_of_moves: {
    title: "Share of Moves Decomposition",
    body: "Decomposes absolute price movements into three sources: Market (Σ|β_m × r_mkt|), Sector (Σ|β_s × r_sector|), and Company-specific (Σ|ε|). Each is normalized to a percentage. A high idiosyncratic share means the stock's price is mostly driven by company-specific events, not market or sector.",
  },
  r_squared: {
    title: "R-Squared (Model Fit)",
    body: "Proportion of the stock's return variance explained by the 2-factor model (market + sector). Low R² means most movement is company-specific. Typical range: 5-40% for individual stocks.",
  },
  short_ratio: {
    title: "Short Ratio",
    body: "Daily: ShortSaleVolume / TotalVolume. Shows the proportion of each day's trading that comes from short sellers. Higher ratios indicate more bearish positioning or hedging activity.",
  },
  days_to_cover: {
    title: "Days to Cover",
    body: "ShortSaleVolume / 20-day rolling ADV. Estimates how many days of average volume it would take to cover the current short position. Higher values suggest stronger conviction or harder-to-unwind positions.",
  },
  unusual_short: {
    title: "Unusual Short Activity",
    body: "A day is flagged as unusual when the short ratio exceeds the 60-day rolling mean + 2 × rolling standard deviation. This statistical threshold detects spikes that are significantly above the stock's normal shorting pattern.",
  },
  sbl_pool: {
    title: "Securities Borrowing & Lending Pool",
    body: "The SBL pool is the total quantity of shares available for lending. Pool as % of ADV shows how many days of normal volume the pool represents. Impact is estimated by simulating liquidation of the pool through the L2 order book.",
  },
  correlation_short_return: {
    title: "Short-Return Correlation",
    body: "Pearson correlation between daily short ratio and daily stock return over the past 3 months (~100 calendar days). Negative correlation suggests shorts anticipate price declines; positive correlation suggests shorts are reactive or used for hedging.",
  },
  peer_selection: {
    title: "Peer Selection Methodology",
    body: "8 peers selected using a 5-tier algorithm: (1) same market cap class + sector, (2) same cap + industry, (3) same industry across all caps, (4) same cap class only, (5) nearest by ADV distance. Distance = |log(ADV_target) − log(ADV_peer)|. ADV is normalized to the target's currency before comparison.",
  },
  session_distribution: {
    title: "Session Distribution",
    body: "Trading volume split across market sessions: Opening Auction, Continuous Trading, Closing Auction, and Intraday Auction. Sessions are identified from MarketState flags on each trade. The percentage is computed from notional volume per session.",
  },
  volume_profile: {
    title: "Volume Profile",
    body: "Distribution of traded volume across 30-minute buckets in SGT (UTC+8). The share for each bucket is the median across all days in the period (not the mean), which reduces the influence of single anomalous days.",
  },
  impact_simulation: {
    title: "Order Book Impact Simulation",
    body: "A market order of the specified notional is walked through the L2 order book (SELL hits bids, BUY lifts asks) level by level until filled or the book is exhausted. VWAP is the weighted average execution price. Impact = (VWAP − Mid) / Mid × 10,000 bps.",
  },
  adv_execution: {
    title: "% of ADV",
    body: "Trade size divided by the 20-day median daily notional. Shows how many days of normal volume your order represents. Larger % of ADV typically means higher market impact and longer execution time.",
  },
};
