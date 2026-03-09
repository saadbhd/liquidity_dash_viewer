// ============================================================================
// LAYER 3 — Deep Methodology Glossary
// Organized by section. Each entry has a plain-language explanation plus
// detailed methodology (formulas, PCA details, edge cases, etc.).
//
// This powers the "Help & Methodology" modal's Methodology tab.
// ============================================================================

export interface GlossaryEntry {
    term: string;
    section: string;
    explanation: string;
    methodology: string;
    plainLanguage: string;
}

export const GLOSSARY: Record<string, GlossaryEntry> = {
    // ── Liquidity Health & Peer Comparison ──────────────────────────────────

    liquidity_score: {
        term: "Liquidity Score",
        section: "Liquidity Health",
        explanation:
            "A single score from 0 to 100 that summarizes how easy the stock has been to trade over the chosen period.",
        methodology:
            "The score is built from six features: log(ADV notional), log(trade count), log(turnover ratio), −spread (%), −price impact (Amihud), −volatility (annualized). " +
            "Each feature is computed over the selected analysis period window (medians for volume/cost/impact, standard deviation for volatility). " +
            "All features are standardized (z-score: subtract mean, divide by std) across the full exchange universe. " +
            "Singular Value Decomposition (SVD) extracts the principal components; only the first component (PC1) is retained. " +
            "PC1 captures the dominant 'liquidity axis' — features that covary across the universe. " +
            "Component loadings (weights) determine each feature's contribution. " +
            "The raw score is oriented so that higher = more liquid (negative features like spread are sign-flipped before PCA). " +
            "Final scores are converted to percentile ranks (0–100) within the exchange universe. " +
            "Variance explained by PC1 is typically 40–60%, diagnostics are reported in the PCA section.",
        plainLanguage:
            "We combine the main parts of liquidity into one number so you can compare this stock with peers and with its own history.",
    },

    pca_score: {
        term: "Liquidity Score (PCA)",
        section: "Liquidity Health",
        explanation:
            "The same liquidity score, shown as a percentile rank, built from multiple liquidity features.",
        methodology:
            "This is the same PCA-based liquidity score described in Liquidity Score. " +
            "Some parts of the dashboard label it as PCA Score to emphasize that it is a composite, not a single raw metric.",
        plainLanguage:
            "A single score that summarizes how easy the stock is to trade, built from several liquidity signals.",
    },

    spread: {
        term: "Bid-Ask Spread",
        section: "Liquidity Health",
        explanation:
            "The gap between the best buy price and the best sell price. Lower spread usually means lower trading cost.",
        methodology:
            "Relative spread = (Ask − Bid) / Mid × 100%. " +
            "We use the field Spread_RelMean from daily_metrics_bmll_wide, which is the time-weighted average relative spread for each trading day. " +
            "The trailing median of daily spreads is taken over the selected analysis period window (e.g., 1M = 21 trading days). " +
            "Spread in ticks is also reported using Spread_AbsMeanTicks (absolute spread / tick size). " +
            "Tick size is sourced from market_info.tick_size_rule. " +
            "Lower spread → lower implicit round-trip cost → better liquidity. " +
            "Enters the PCA score with a negative sign (wider = worse).",
        plainLanguage:
            "This is the built-in trading cost you face before market movement is even considered.",
    },

    adv: {
        term: "Average Daily Volume (Notional)",
        section: "Liquidity Health",
        explanation:
            "The typical daily traded value, computed as the median of (close × volume) over the selected period. Expressed in local currency.",
        methodology:
            "ADV(w) = median(close_t × volume_t) for t in [asof_date − w, asof_date]. " +
            "Expressed in local currency (S$, HK$). " +
            "For peer comparison, ADV is converted to the target stock's currency using spot FX rates. " +
            "ADV is the primary input for peer distance: distance = |log(ADV_target) − log(ADV_peer)|. " +
            "Used throughout the report for %ADV calculations, days-to-cover, and execution sizing. " +
            "Enters PCA as log(ADV) to handle the skewed distribution across the universe.",
        plainLanguage:
            "This shows the amount of money that usually trades in the stock each day.",
    },

    turnover: {
        term: "Turnover Ratio",
        section: "Liquidity Health",
        explanation:
            "Daily volume divided by shares outstanding (or free float), medianed over the period. Shows how actively the stock trades relative to its size.",
        methodology:
            "Turnover = volume_t / shares_outstanding (or free_float_shares if available). " +
            "Trailing median over the analysis window. " +
            "Higher turnover implies more active trading relative to the stock's capitalization. " +
            "Enters the PCA score as log(turnover_ratio). " +
            "Free float data is sourced from market_info when available; otherwise total shares outstanding is used.",
        plainLanguage:
            "This shows how actively the stock trades relative to the company size.",
    },

    trades: {
        term: "Daily Trade Count",
        section: "Liquidity Health",
        explanation:
            "The number of individual trades executed per day, medianed over the analysis period.",
        methodology:
            "trades_t = count of matched transactions on day t (from daily_metrics_bmll_wide). " +
            "Trailing median is taken over the selected analysis window (e.g., 1M = 21 days). " +
            "Enters the PCA score as log(trades) alongside other liquidity features. " +
            "More trades generally correlate with tighter spreads and lower price impact.",
        plainLanguage:
            "More trades usually mean a more active market and easier entry or exit.",
    },

    volatility: {
        term: "Annualized Volatility (σ)",
        section: "Liquidity Health",
        explanation:
            "Standard deviation of daily returns, annualized using the square root of time (√252). Measures the intensity of price fluctuations.",
        methodology:
            "Volatility = std(daily returns) × √252. " +
            "Daily return_t = close_t / close_(t-1) − 1. " +
            "We use the sample standard deviation (Bessel's correction, ddof=1) over the selected analysis window. " +
            "The result is scaled by √252 to represent the expected price variation over a one-year horizon. " +
            "Enters the PCA score inversely: higher volatility reduces the liquidity score (via sign flip: −volatility). " +
            "Typical range: 10–30% for large-caps, 40–100%+ for high-growth or small-cap stocks.",
        plainLanguage:
            "This shows how jumpy or calm the price movements are, scaled to a yearly percentage.",
    },

    amihud: {
        term: "Price Impact",
        section: "Liquidity Health",
        explanation:
            "Shows how easily trading pushes the price up or down. Higher values mean the stock is easier to move.",
        methodology:
            "Amihud Price Impact = median(|return_t| / notional_t) over the selected period. " +
            "Where notional_t = close_t × volume_t. " +
            "Higher values mean that even small trades move the price significantly. " +
            "The median (not mean) is used for robustness against outlier days with extremely low volume. " +
            "Enters the PCA score inversely (higher price impact = worse liquidity). " +
            "Values are typically very small (scientific notation, e.g., 1.23e-08) — the relative ranking matters more than the absolute value.",
        plainLanguage:
            "If even a small trade moves the price a lot, liquidity is weak. This number captures that effect.",
    },

    price_impact: {
        term: "Price Impact",
        section: "Liquidity Health",
        explanation:
            "A measure of how much the price tends to move when trading happens. Higher values mean weaker liquidity.",
        methodology:
            "This is the same concept as the Amihud-style price impact metric. " +
            "We summarize it over the selected window using robust statistics (median), and treat higher impact as worse liquidity.",
        plainLanguage:
            "If small trades move the price a lot, liquidity is weaker. This number captures that effect.",
    },

    peer_selection: {
        term: "Peer Selection Algorithm",
        section: "Liquidity Health",
        explanation:
            "A peer set chosen to look like this stock in business profile, size, and trading pattern.",
        methodology:
            "Universe: all stocks on the same market_mic with OHLCV data up to asof_date. " +
            "ADV for peers: mean(close × volume) over the analysis window, converted to the target's currency. " +
            "Distance: |log(ADV_peer) − log(ADV_target)|. " +
            "Selection tiers (fill up to K=8): " +
            "(1) Same market_cap_class + same sector, sorted by ADV distance. " +
            "(2) Same market_cap_class + same industry. " +
            "(3) Same industry (any cap class). " +
            "(4) Same market_cap_class only. " +
            "(5) Rest of universe, nearest by ADV distance. " +
            "This ensures fundamental comparability first (size/sector/industry), then refines by liquidity proximity.",
        plainLanguage:
            "We start with similar businesses and then keep the names that also trade in a similar way.",
    },

    // ── Drivers of Moves ──────────────────────────────────────────────────

    drivers: {
        term: "Drivers of Moves",
        section: "Drivers & Sensitivity",
        explanation:
            "Shows whether recent price moves were driven more by the market, the sector, or company-specific factors.",
        methodology:
            "The current Q02 model uses a hybrid regime-aware approach. First, a Markov regression is fitted on daily stock returns versus market and sector returns to infer hidden driver states over a target 252-trading-day window; if less history exists, the model uses all available history. " +
            "Second, PyMC weighted regressions are fitted for each inferred state to estimate uncertainty around the sensitivities and contribution shares. " +
            "The stock return model includes same-day market and sector effects plus one-day lags for the stock, market, and sector. " +
            "The dashboard then reports the latest 63-trading-day driver mix as low / median / high ranges rather than as one fixed point only. " +
            "Legacy rolling 63-day windows are still shown to preserve trend context.",
        plainLanguage:
            "This shows what has really been moving the stock lately, and how certain that reading looks.",
    },

    beta_market: {
        term: "Market Link",
        section: "Drivers & Sensitivity",
        explanation:
            "Shows how strongly the stock tends to move with the wider market in the current regime.",
        methodology:
            "This number comes from the regime-specific return model, not from a single constant beta over the whole period. " +
            "The model estimates a market sensitivity for each hidden state, then the dashboard highlights the sensitivity of the current most-likely state together with a low / median / high range from the PyMC posterior. " +
            "A higher positive value means the stock usually reacts more when the market moves in that state. " +
            "A value near zero means broad market moves matter less in that state.",
        plainLanguage:
            "This shows how tightly the stock is linked to the wider market right now, with a range to show confidence.",
    },

    beta_sector: {
        term: "Sector Link",
        section: "Drivers & Sensitivity",
        explanation:
            "Shows how strongly the stock tends to move with its sector or industry in the current regime.",
        methodology:
            "This is estimated alongside the market link inside the regime-aware return model. " +
            "The sector benchmark is built from sector or industry median returns when enough names exist. " +
            "The dashboard reports the current regime's sector sensitivity together with a low / median / high range. " +
            "Higher values mean sector moves matter more for the stock in that state.",
        plainLanguage:
            "This shows how much sector trends matter to the stock right now, with a range to show confidence.",
    },

    share_of_moves: {
        term: "Share of Moves",
        section: "Drivers & Sensitivity",
        explanation:
            "Shows how much of the recent move came from the market, the sector, or the company's own story.",
        methodology:
            "For each posterior draw, the model measures absolute market, sector, and company-specific contributions day by day, then adds them over the latest 63 trading days. " +
            "Market contribution uses the market beta and market lag terms; sector contribution uses the sector beta and sector lag terms; company contribution is the remaining unexplained move. " +
            "Each contribution is divided by the total so the three shares sum to 100%. " +
            "The dashboard shows the median share plus a low / high range, which is more informative than a single point estimate.",
        plainLanguage:
            "This is the split of recent moves into market, sector, and company-specific parts, with a range to show uncertainty.",
    },

    r_squared: {
        term: "Base Model Fit",
        section: "Drivers & Sensitivity",
        explanation:
            "A background fit check from the simpler market-plus-sector model.",
        methodology:
            "This comes from the older static two-factor regression that is still kept in the report for comparison and rolling history. " +
            "It shows how much of the move that simpler model could explain over the recent window. " +
            "In the new Q02 design, it is secondary: the main read comes from regime probabilities, driver-share ranges, and regime-specific sensitivities.",
        plainLanguage:
            "Treat this as background context, not as the main answer to what is moving the stock.",
    },

    regime_switching: {
        term: "Price Driver Regimes",
        section: "Drivers & Sensitivity",
        explanation:
            "Groups past days into a small number of driver states, such as market-led, sector-led, or company-led phases.",
        methodology:
            "The model first fits a Markov regression to daily stock returns using market and sector returns as explanatory series. " +
            "That produces hidden states and a day-by-day probability of being in each state. " +
            "For each state, a PyMC weighted regression is then fitted to estimate uncertainty around market sensitivity, sector sensitivity, lagged leadership effects, and the share of moves attributed to each driver. " +
            "The default estimation target is 252 trading days, but if a stock is newly listed the model uses all available history and may collapse to fewer regimes. " +
            "Each regime is labelled by its dominant driver, transition probabilities are estimated between consecutive days, and expected duration is derived from the probability of staying in the same regime.",
        plainLanguage:
            "This shows the stock's main behaviour states, how likely the current state is, and how easily that state could change.",
    },

    granger: {
        term: "Granger Causality",
        section: "Drivers & Sensitivity",
        explanation:
            "Checks whether earlier trading imbalance gave a useful signal about later price moves.",
        methodology:
            "Null hypothesis: lagged OFI does not help predict returns beyond lagged returns alone. " +
            "Maximum lag: 2 days. " +
            "F-test for the joint significance of the OFI lags. " +
            "p-value < 0.05 suggests order flow has predictive power → possible informed trading. " +
            "Hiemstra-Jones nonlinear variant is also tested for nonlinear predictive relationships. " +
            "Volatility Granger (6M window): tests whether volatility in the stock Granger-causes or is caused by market volatility.",
        plainLanguage:
            "This is a lead-lag check: did the order flow signal come before the price move?",
    },

    // ── Execution & Trading Costs ─────────────────────────────────────────

    execution: {
        term: "Trading Cost Snapshot",
        section: "Execution & Trading Costs",
        explanation:
            "Brings together the latest displayed book, large trade sizes from history, large sell-side orders seen today, and intraday spread/depth conditions.",
        methodology:
            "This section now has three main checks. First, it reads the latest displayed L2 book using the top 10 bid and top 10 ask levels. Second, it takes large real trade sizes from the stock's available history, up to one year, and asks what would happen if those sizes had to be sold into today's displayed book. Third, it looks at the largest sell-side orders observed in L3 during the day and estimates the same hypothetical impact. Spread and displayed depth are also tracked through the day in 30-minute buckets in local market time. Full orderbook coverage is not yet included.",
        plainLanguage:
            "It shows what the visible market looks like now, how today's book compares with large trades already seen in this stock, and whether conditions changed during the day.",
    },

    impact_simulation: {
        term: "Displayed Book Replay",
        section: "Execution & Trading Costs",
        explanation:
            "A closer look at how a hypothetical sell would move through the visible book.",
        methodology:
            "The simulation walks down the bid side level by level. At each level, filled value is limited by what is displayed there. VWAP is the value-weighted average fill price across the consumed levels. Estimated impact is shown as price change versus the latest mid price. Fill rate shows what share of the order could be absorbed by the displayed top-10 bid stack.",
        plainLanguage:
            "This shows how much of the sell order the visible buyers could absorb before price would need to move lower.",
    },

    historical_trade_scenarios: {
        term: "Historical Trade Stress Test",
        section: "Execution & Trading Costs",
        explanation:
            "Uses the stock's own large historical trade sizes and asks what they would do to the current displayed book.",
        methodology:
            "Take the stock's available trade history, up to one year, build the trade-notional distribution, and select large reference sizes such as the 90th, 95th, and 99.99th percentiles. Each size is then replayed as a hypothetical market sell against the latest displayed L2 book. When the stock is newly listed, the calibration window is shorter and the dashboard should show that exact range instead of implying a full year. The output shows estimated price impact, expected fill rate, share of current bid depth, and share of ADV.",
        plainLanguage:
            "It answers: if a trade size that has happened before needed to be sold now, how much pressure would today's visible buyers absorb?",
    },

    l3_sell_orders: {
        term: "Large Sell Orders Seen Today",
        section: "Execution & Trading Costs",
        explanation:
            "Looks at the biggest sell-side orders observed during the day and estimates what they would mean if they crossed immediately.",
        methodology:
            "Using L3 order data for the analysis day, the model ranks the largest observed ask-side orders by notional value. It then takes the top three observed orders and replays each as a hypothetical market sell into the latest displayed L2 bid stack. This is not a statement that those orders traded that way; it is a stress test using sizes that were visibly present in the day's order flow.",
        plainLanguage:
            "It shows whether the largest sell orders seen today were still small relative to visible demand or large enough to move price materially.",
    },

    intraday_book_profile: {
        term: "Spread & Depth Through The Day",
        section: "Execution & Trading Costs",
        explanation:
            "Shows how spread and visible depth changed during the session.",
        methodology:
            "L2 snapshots are sampled through the day in 30-minute buckets, shown in local market time and labeled by bucket start. For each bucket, the model measures spread as a percent, spread in ticks, displayed bid depth, and displayed ask depth. The summary highlights the tightest and widest spread buckets, plus the deepest and thinnest bid-depth buckets. Buckets focus on the continuous trading session (auctions excluded) when available.",
        plainLanguage:
            "It shows whether trading conditions were steady all day or if some time windows were clearly tighter or thinner than others.",
    },

    kyles_lambda: {
        term: "Kyle's Lambda (Price Impact Coefficient)",
        section: "Execution & Trading Costs",
        explanation:
            "Regression-based measure of how much the price moves per unit of volume traded.",
        methodology:
            "Regression: |return_t| = α + λ × notional_t + ε over 63 trading days. " +
            "The slope (λ) measures marginal price impact per unit of volume. " +
            "Scaled to a reference amount (e.g., S$10K or HK$10K) to report impact in basis points. " +
            "Higher λ = more price impact = less liquid. " +
            "Complements the L2 simulation with a statistical (historical) perspective on price impact.",
        plainLanguage:
            "A statistical way to measure how much the price reacts when money flows in — based on historical data.",
    },

    adv_execution: {
        term: "% of ADV (Order Sizing)",
        section: "Execution & Trading Costs",
        explanation:
            "Your order size as a fraction of daily volume — larger fractions typically mean more slippage.",
        methodology:
            "pct_ADV = order_size / ADV_reference × 100%. " +
            "Days to execute at 10% participation: order_size / (ADV × 0.10). " +
            "Rule of thumb: orders above 10-15% of ADV typically need multi-day TWAP/VWAP strategies. " +
            "ADV_reference is the median daily notional from the Q03 analysis window.",
        plainLanguage:
            "This shows whether the order is small or large compared with a normal trading day.",
    },

    // ── Short Selling ─────────────────────────────────────────────────────

    short_selling: {
        term: "Short Selling Analysis",
        section: "Short Selling",
        explanation:
            "Comprehensive analysis of short-selling activity, trends, and lending availability.",
        methodology:
            "Data source: SGX ShortSaleVolume/Value (MySQL MarketDataHub.short_sells). " +
            "Ticker mapped to Security via correspondence table + fuzzy text fallback. " +
            "Short ratio = ShortSaleVolume_t / TotalVolume_t (daily). " +
            "Stats computed over 1M, 3M, 6M windows. " +
            "Peak detection: days where short_ratio > 15%, ranked by intensity. " +
            "Correlation: Pearson corr(short_ratio, return) over ~100 calendar days. " +
            "Unusual activity: short_ratio > rolling_mean_60 + 2 × rolling_std_60. " +
            "Recent activity: last 14 days vs 3M average. " +
            "Available only for SGX-listed stocks with short-sale reporting.",
        plainLanguage:
            "This shows whether short selling is a small part of trading or a meaningful force in the stock.",
    },

    short_ratio: {
        term: "Short Ratio",
        section: "Short Selling",
        explanation:
            "The proportion of daily volume that comes from short sellers. Higher = more bearish positioning.",
        methodology:
            "Daily: ShortSaleVolume / TotalVolume. " +
            "Average and max are reported over the selected period (1M, 3M, 6M). " +
            "Interpretation levels: <5% low, 5-15% moderate, >15% high short interest.",
        plainLanguage:
            "This shows how much of trading came from short sellers.",
    },

    days_to_cover: {
        term: "Days to Cover",
        section: "Short Selling",
        explanation:
            "How many days of normal volume it would take to unwind the short position.",
        methodology:
            "DTC_t = ShortSaleVolume_t / ADV_20_t, where ADV_20 is the 20-day rolling average daily volume. " +
            "Higher DTC = stronger short conviction or harder unwind. " +
            "Reported as current, average, and maximum over the analysis period.",
        plainLanguage:
            "This gives a rough sense of how quickly short positions could be unwound using normal volume.",
    },

    unusual_short: {
        term: "Unusual Short Activity",
        section: "Short Selling",
        explanation:
            "Statistical detection of short-selling spikes that are significantly above normal patterns.",
        methodology:
            "Threshold: rolling_mean_60 + 2 × rolling_std_60 of the daily short ratio. " +
            "Computed on a rolling basis over 252 trading days. " +
            "Days exceeding this threshold are flagged as unusual. " +
            "Z-score is reported for each flagged day: (short_ratio − mean) / std.",
        plainLanguage:
            "This highlights days when short activity was far above the stock's normal level.",
    },

    sbl_pool: {
        term: "Securities Borrowing & Lending (SBL) Pool",
        section: "Short Selling",
        explanation:
            "The total shares available for lending and the estimated market impact if the pool were liquidated.",
        methodology:
            "Pool data sourced from internal SBL feed (fetch_sbl_pool). " +
            "Pool as % of ADV = lending_pool_quantity × last_close / ADV_30 × 100%. " +
            "Days to liquidate = pool_notional / ADV_30. " +
            "Impact estimated by simulating pool liquidation through L2 order book (if available). " +
            "Risk levels: <1 day = Low, 1-5 days = Medium, >5 days = High overhang risk.",
        plainLanguage:
            "This shows whether the borrowable share pool looks small or large compared with normal trading.",
    },

    correlation_short_return: {
        term: "Short-Return Correlation",
        section: "Short Selling",
        explanation:
            "Whether short selling and price returns move together or against each other.",
        methodology:
            "Pearson correlation between daily short_ratio and daily stock return over ~100 calendar days (~3M). " +
            "Negative correlation: shorts anticipate declines (potentially informed). " +
            "Positive correlation: shorts are reactive or used for hedging (e.g., paired trades). " +
            "Granger causality is also tested (shorts → price) to check for predictive power.",
        plainLanguage:
            "This checks whether short selling tended to move with price weakness or for other reasons.",
    },

    // ── Trading Activity ──────────────────────────────────────────────────

    trader_composition: {
        term: "Trader Persona Classification",
        section: "Trading Activity",
        explanation:
            "Uses behavior seen in runs of trading to estimate whether flow looks more retail-like, institution-like, mixed, or unclear.",
        methodology:
            "The model groups trades into short runs, then scores how those runs interact with visible order-book depth and price movement. " +
            "It reports the mix four ways: by trade count, by share volume, by traded value, and by run count. " +
            "It also reports how much of the run history was observable and how much of the classification was high confidence. " +
            "Peer comparison uses the same run-based persona method across the selected peers.",
        plainLanguage:
            "This shows what kind of trading behavior the market currently looks like, and how strong that read is.",
    },

    trader_dominant_persona: {
        term: "Dominant Persona",
        section: "Trading Activity",
        explanation:
            "The main trading style in the selected window, based on the share of runs (not just raw trade count).",
        methodology:
            "We compute persona shares at the run level (run_composition). " +
            "The dominant persona is the bucket with the highest run share; the dashboard also shows that share and the gap to the next bucket.",
        plainLanguage:
            "This tells you which trading style shows up most often as a run pattern in the recent window.",
    },

    trader_classified_flow: {
        term: "Classified Flow",
        section: "Trading Activity",
        explanation:
            "How much trading the model could classify into personas, shown as trades and runs.",
        methodology:
            "Trades are individual prints. Runs are short sequences of nearby trades grouped into one action. " +
            "We report counts for both, and exclude auction prints when the analysis is focused on continuous trading.",
        plainLanguage:
            "This shows how much activity was analyzed and grouped into behavior buckets.",
    },

    trader_typical_size: {
        term: "Typical Size",
        section: "Trading Activity",
        explanation:
            "Average trade value and average run value in the selected window.",
        methodology:
            "Average trade value is the mean traded notional per trade. " +
            "Average run value is the mean summed notional per run; it is usually larger because runs bundle nearby trades.",
        plainLanguage:
            "A quick sense of how big trades and trade-runs typically are.",
    },

    trader_trade_confidence: {
        term: "Trade Confidence",
        section: "Trading Activity",
        explanation:
            "How strong the model's evidence is at the individual trade level.",
        methodology:
            "For each trade we assign a confidence bucket based on how separated the retail vs institutional score is after calibration. " +
            "MIXED/AMBIGUOUS/UNOBSERVABLE trades are labeled NA by design. The dashboard shows both % and counts.",
        plainLanguage:
            "Higher confidence means the model had clearer evidence for that trade's persona label.",
    },

    trader_run_confidence: {
        term: "Run Confidence",
        section: "Trading Activity",
        explanation:
            "How strong the model's evidence is after grouping nearby trades into runs.",
        methodology:
            "Confidence is computed for runs that are classified as RETAIL or INSTITUTIONAL. " +
            "Runs labeled MIXED/AMBIGUOUS/UNOBSERVABLE are reported as NA confidence by design.",
        plainLanguage:
            "This shows how clear the model's read is once trades are grouped into short sequences.",
    },

    trader_recent_trades: {
        term: "Recent Classified Trades",
        section: "Trading Activity",
        explanation:
            "A small recent sample of trades with their persona bucket and confidence label.",
        methodology:
            "We show the most recent classified trades (local market time) with their run id, persona bucket, and confidence tag. " +
            "This is a diagnostic view to sanity-check what the model is labeling in the latest prints.",
        plainLanguage:
            "A quick inspection window into the latest classifications.",
    },

    peer_traders: {
        term: "Peer Trader Comparison",
        section: "Trading Activity",
        explanation:
            "How the stock's trading persona differs from similar names.",
        methodology:
            "Each peer is classified with the same run-based persona method. " +
            "Comparison can be viewed by trade count, by volume, by traded value, or by run share. " +
            "This helps show whether the stock stands out for retail-like flow, institution-like flow, or a larger unclear bucket than peers.",
        plainLanguage:
            "This shows whether similar stocks are attracting a different style of trading behavior.",
    },

    price_moving_trades: {
        term: "Price-Moving Trades",
        section: "Trading Activity",
        explanation:
            "The share of trades that changed the last traded price, plus the persona mix behind those moves.",
        methodology:
            "A trade is treated as price-moving when its price differs from the previous trade. " +
            "The dashboard then breaks those trades down by the same persona labels used in trader composition. " +
            "This shows whether price changes are mostly tied to retail-like flow, institution-like flow, mixed flow, or unclear flow.",
        plainLanguage:
            "This shows how sensitive the share price is to individual trades, and what kind of flow tends to move it.",
    },

    // ── Intraday Patterns ─────────────────────────────────────────────────

    intraday: {
        term: "Intraday Liquidity Patterns",
        section: "Intraday Patterns",
        explanation:
            "Volume distribution across the trading day, including auction versus continuous sessions.",
        methodology:
            "Timestamps converted to SGT (UTC+8). " +
            "Volume bucketed into 30-minute intervals. " +
            "Sessions classified via MarketState flags: OPENING_AUCTION, CONTINUOUS_TRADING, INTRADAY_AUCTION, CLOSING_AUCTION. " +
            "Volume profile: median share per bucket across all days (not mean — more robust to outliers). " +
            "Summary period: first valid among 6M > 3M > 1M. " +
            "Peer comparison uses 3M window for consistency.",
        plainLanguage:
            "This shows when trading usually happens and whether volume is spread out or concentrated.",
    },

    session_distribution: {
        term: "Session Distribution",
        section: "Intraday Patterns",
        explanation:
            "How volume splits between opening auction, continuous trading, closing auction, and intraday auctions.",
        methodology:
            "Each trade's session is identified from the MarketState field. " +
            "Notional volume is aggregated per session type. " +
            "Percentage = session_notional / total_notional × 100%. " +
            "High auction volume may indicate index-rebalancing flows, ETF activity, or closing-price-dependent orders.",
        plainLanguage:
            "This shows whether most trading happens during the main session or in auction periods.",
    },

    hhi: {
        term: "HHI Concentration Index",
        section: "Intraday Patterns",
        explanation:
            "Measures how concentrated or spread out the trading volume is throughout the day. 0 = perfectly even, 1 = all in one bucket.",
        methodology:
            "For each day: HHI = Σ(share_bucket²) across all 30-minute buckets. " +
            "Then averaged across all days in the period. " +
            "Range: 0 to 1. " +
            "Thresholds: <0.15 = low concentration (well distributed), 0.15-0.25 = moderate, >0.25 = high concentration. " +
            "A perfectly uniform distribution across N buckets gives HHI = 1/N.",
        plainLanguage:
            "This tells you whether trading is evenly spread or packed into a few time windows.",
    },

    volume_profile: {
        term: "Volume Profile",
        section: "Intraday Patterns",
        explanation:
            "Distribution of traded volume across 30-minute time buckets throughout the day.",
        methodology:
            "Time buckets in local market time, labeled by bucket start. " +
            "Share per bucket = bucket_volume / total_day_volume for each day. " +
            "Across days, the median share per bucket is reported (not mean). " +
            "Median is preferred because single anomalous days (e.g., block trades) can distort the mean.",
        plainLanguage:
            "This is the day-by-day trading pattern by time window.",
    },

    // ── General / Cross-Section ──────────────────────────────────────────

    ofi: {
        term: "Order Flow Imbalance (OFI)",
        section: "General",
        explanation:
            "Measures whether buyers or sellers are more active. Positive = buying pressure, negative = selling pressure.",
        methodology:
            "OFI aggregates changes in the order book at the best bid and ask: " +
            "OFI = Σ(change_in_best_bid_qty − change_in_best_ask_qty) over intraday snapshots. " +
            "|OFI| measures how one-sided the market is, regardless of direction. " +
            "Used in Granger causality tests as a predictor of future price movements.",
        plainLanguage:
            "This is a simple read on whether buyers or sellers were more active.",
    },

    idiosyncratic: {
        term: "Idiosyncratic Risk",
        section: "General",
        explanation:
            "Price movements specific to this company, not explained by market or sector factors.",
        methodology:
            "Idiosyncratic return = ε_t from the 2-factor regression (residual). " +
            "Idiosyncratic share = Σ|ε_t| / Σ(|market_contribution| + |sector_contribution| + |ε_t|). " +
            "High idiosyncratic risk means diversification benefits are higher (low correlation with market) " +
            "but also means higher event risk specific to the company.",
        plainLanguage:
            "This is the part of price movement that was mainly about the company itself.",
    },
};

/** Ordered list of section names for display grouping */
export const GLOSSARY_SECTIONS = [
    "Liquidity Health",
    "Drivers & Sensitivity",
    "Execution & Trading Costs",
    "Short Selling",
    "Trading Activity",
    "Intraday Patterns",
    "General",
];
