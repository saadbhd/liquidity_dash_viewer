// @ts-nocheck

// ============================================================================
// Toku Ltd (TKU) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-02-16
//
// Source: Pipeline JSON and console output (as-of 2026-02-16).
// Narrative and insights written for CEO/CFO: plain language, candid,
// and action-oriented. TKU is a Software - Application small cap with
// strong liquidity vs peers (high ADV, frequent prints, spread in line).
// Factor/driver analysis based on short history; 3 regimes identified
// (current: High Vol). Short interest is low; no SBL pool data.
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector (Software - Application), then industry (Technology)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "TKU", name: "Toku Ltd", marketCap: "S$131.2M", sector: "Software - Application", industry: "Technology" },
    { ticker: "ITS", name: "Info-Tech", marketCap: "S$250.3M", sector: "Software - Application", industry: "Technology" },
    { ticker: "LVR", name: "17LIVE GROUP", marketCap: "S$161.4M", sector: "Software - Application", industry: "Technology" },
    { ticker: "U77", name: "Sarine Tech", marketCap: "S$74.9M", sector: "Software - Application", industry: "Technology" },
    { ticker: "NXR", name: "iWOW Tech", marketCap: "S$108.5M", sector: "Software - Application", industry: "Technology" },
    { ticker: "532", name: "DISA", marketCap: "S$14.1M", sector: "Software - Application", industry: "Technology" },
    { ticker: "KUX", name: "OIO", marketCap: "S$11.0M", sector: "Software - Application", industry: "Technology" },
    { ticker: "PCT", name: "PC Partner", marketCap: "S$546.9M", sector: "Computer Hardware", industry: "Technology" },
    { ticker: "MZH", name: "Nanofilm", marketCap: "S$407.6M", sector: "Electronic Components", industry: "Technology" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "TKU",
    company: "Toku Ltd",
    asof_date: "2026-02-16",
    industry: "Technology",
    sector: "Software - Application",
    market_cap_display: "131.2M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: STRONG", bg: "bg-emerald-500/20", textColor: "text-emerald-400", dot: "bg-emerald-500" },
      liq_section: { text: "Liquidity score: 92.8 — STRONG", bg: "bg-emerald-500/20", textColor: "text-emerald-400" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-led • 3 regimes", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      exec_check: { text: "MODERATE impact for size", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      intraday: { text: "SPREAD (low HHI)", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      ofi: { text: "Moderate • L2 not significant", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "Low short interest", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      index_status: { text: "Not eligible — Fledgling", bg: "bg-amber-500/20", textColor: "text-amber-400" }
    },
    borders: { action_plan: "border-amber-500", index: "border-sky-500" },
    colors: { interpretation_good: "interpretation-good", interpretation_neutral: "interpretation-neutral", interpretation_bad: "interpretation-bad" }
  },

  labels: {
    header_title: "Liquidity Analysis Report",
    header_meta_line1_tokens: ["{company}", "•", "{ticker}", "•", "Sector: {sector}", "•", "Market Cap: {mcap} ({mcap_cat} cap)"],
    header_meta_line2_tokens: ["As of: {asof}", "•", "Universe: {univ}", "•", "Peers: {peers}"],
    exec_title: "Executive Summary: What Matters for Trading",
    exec_subtitle: "Key metrics that explain your stock's trading experience",
    exec_takeaways_title: "Key Takeaways:",
    metric_liquidity_score: "Liquidity Score",
    metric_spread: "Trading Cost (Spread)",
    metric_adv: "Median Traded Volume",
    metric_drivers: "What Drives Price Changes",
    action_plan_title: "Action Plan (Prioritized)",
    action_plan_subtitle: "Practical actions to support liquidity and visibility",
    action_plan_icon: "",
    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar Software - Application names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "TKU has strong liquidity (score 92.8, rank 41/558): ADV ~S$0.75M and ~260 trades/day. Spread (~2.06%) is in line with peers; a S$50K clip is ~6.7% of ADV—manageable. Price moves are ~16% market, ~22% sector, ~63% company; 3 volatility regimes (current: High Vol). Order flow is moderate (|OFI| ~24.6%); L2 OFI is not significant in this sample.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 63% of recent price moves are company-specific; market ~16%, sector ~22% (R² ~26.8%, short history: 17 observations)." },
      { title: "Market Link", text: "Market β −1.22; contemporaneous correlation ~0.00. Lead-lag suggests the market leads by ~5 days in this sample." },
      { title: "Sector Link", text: "Sector β 5.79; contemporaneous correlation ~0.48. Sector movement is meaningful and coincident." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Share of variance: Market ~15.8%, Sector ~21.6%, Company ~62.6%. Based on 17 days; interpret with caution.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Market leads by ~5 days (weak); sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Single window 2025-12-15 to 2026-02-16 (17 days). More history will enable rolling comparison.",
    drivers_bottom_line: "Takeaway: Company-specific factors dominate. Three regimes identified; currently in High Vol (σ ~7.82%).",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Spread (~2.06%) is in line with peer median—use limit orders; crossing is reasonable.",
      "A S$50K trade is ~6.7% of ADV—manageable; 100K shows ~−1.0% impact, but 1M+ turns costly and may only partially fill.",
      "Daily OFI aligns with returns (corr ~0.70); L2 OFI is not significant (p~0.10)—monitor tape, but avoid over-reliance on book-only signals."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "High Vol (current)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Medium Vol", "High Vol"],
    transition_note_template: "3-regime model (AIC −749.9). From High Vol: 30.7% → Low, 26.7% → Medium, 42.7% stay.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread ~2.06%. 10 bid/10 ask levels displayed. S$100K sell impact ~−1.03% (100% fill); S$1M ~−6.27% (82% fill); S$2.5M ~−6.27% (33% fill).",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "TKU’s 50K is ~6.7% of ADV—manageable. Among peers: MZH ~72%, PCT ~74%, ITS ~135%; smaller names are far higher.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book.",
    exec_check_insight: "Execution is generally supportive for 50K–100K clips. For 1M+, impact rises (~−6.3%) and fills may be partial. Kyle’s Lambda computed (~6.6e−5 per S$10K ref).",
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under S$13,500",
    trader_mixed_threshold: "Mixed: Trades S$13,500 – S$67,500",
    trader_instit_threshold: "Institutional: Trades over S$67,500",
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail vs mixed vs institutional across comparable names",
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes",
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most volume in continuous (~92.0%); auctions ~8.0%. Peak buckets 09:00 (14.1%), 09:30 (11.1%), 14:00 (10.4%), 16:30 (8.3%).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "Your value: {value} (lower suggests liquidity is spread through the day).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Volume is spread with morning and mid-afternoon peaks; best windows 09:00–10:00, 13:00–14:30, 16:30.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "TKU has a low HHI (~0.16) vs peers—liquidity is well distributed. MZH is similarly spread; ITS and smaller peers are concentrated.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does order flow predict price?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (6-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 OFI → mid-price" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow is moderate (avg |OFI| ~24.6%). Daily OFI–return correlation is strong (~0.70). L2 OFI is not statistically significant (p~0.10; 7-day window).",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger moves.",
    index_title: "Index Eligibility",
    index_subtitle: "Which indices you qualify for and what would be needed for others",
    short_title: "Short Selling & Lending",
    short_subtitle: "Short interest and SBL pool (when available)",
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  content: {
    exec_metrics: [
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact. Higher is better." }, value: "92.8", suffix: "/100", bar_pct: 93, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "Rank 41/558 • Top tier vs peers", interpretation: { text: "STRONG", cls: "interpretation-good", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "2.06", suffix: "%", bar_pct: 2, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "In line with peer median (~1.90%)", interpretation: { text: "LOW", cls: "interpretation-good", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "0.75M", suffix: "SGD", bar_pct: 75, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "Well above peer median (~S$16.5K)", interpretation: { text: "STRONG", cls: "interpretation-good", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "62.6", suffix: "% company", bar_pct: 63, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 15.8% • Sector: 21.6%", interpretation: { text: "Company-led", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "TKU’s liquidity is strong (92.8/100; rank 41/558): ~S$0.75M ADV, ~260 trades/day, spread ~2.06% (in line). A S$50K clip is ~6.7% of ADV—manageable for most use cases.",
      "Impact is low for S$100K (~−1.0%); it rises for S$1M (~−6.3%, ~82% fill) and S$2.5M (~−6.3%, ~33% fill). Stage larger orders and use peak windows.",
      "Price moves: ~16% market, ~22% sector, ~63% company (R² ~26.8%). Three regimes detected; current regime High Vol (σ ~7.82%). Short interest is low; no SBL pool data. Index status: ineligible (rank #252; Fledgling)."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Protect two-way liquidity and time larger clips", bullets: ["Use 09:00–10:00, 13:00–14:30, and 16:30 windows for size.", "Stagger 1M+ sells to avoid partial fills and rising impact."] },
            { title: "Monitor order flow and short spikes", bullets: ["Daily OFI aligns with returns (corr ~0.70); L2 not significant—confirm with prints.", "Short interest is low overall; flag spikes (e.g., late Jan/early Feb) as potential risk days."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-slate-500/20", text: "text-slate-400", textColor: "text-slate-400", dot: "bg-slate-500" },
          items: [
            { title: "Lift steady turnover without widening spreads", bullets: ["Sustain IR cadence and broker engagement to broaden participation.", "Target deeper mixed/institutional share (instit ~12.9% of notional)."] },
            { title: "Deepen analytics for timing and risk", bullets: ["Extend history to strengthen driver/lead-lag models and regime stability."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Current rank #252/562 (Fledgling). STI needs ≤30; iEdge Next 50 ≤80.", "Report free float; velocity and float data are missing in current feeds."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "260", sub: "Well above peer median (~9)", interp: { text: "STRONG", cls: "interpretation-good", icon: "◆" } },
      { title: "Spread vs Peers", value: "2.06%", sub: "In line with peer median (~1.90%)", interp: { text: "GOOD", cls: "interpretation-good", icon: "◆" } },
      { title: "50K as % ADV", value: "6.7%", sub: "Manageable", interp: { text: "FAVOURABLE", cls: "interpretation-good", icon: "◆" } }
    ],
    liq_insight: "Liquidity is strong (score 92.8, rank 41/558): ADV ~S$0.75M, spread ~2.06% (in line), and ~260 trades/day. Execution for 50K–100K is straightforward; larger clips should be staged. Volatility (~3.85%) is higher than peers (~0.72%), typical for newer or event-driven names.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.2425", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "2.06%", note: "Low-to-moderate cost", color: "text-emerald-400" },
      { title: "Depth", value: "10x10", note: "10 bid levels, 10 ask levels", color: "text-emerald-400" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −1.03% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −6.27% • Fill: 81.8% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −6.27% • Fill: 32.7% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate (24.6%)" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Strong (corr ~0.70)" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant (L2)" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "TKU screens as a high-liquidity small cap on SGX. Score 92.8/100 (rank 41/558) reflects ~S$0.75M ADV, ~260 trades/day, and an in-line spread (~2.06%).",
      strengths: ["ADV and trade count are far above peer medians; execution is easy for 50K–100K clips.", "Spread is in line (~2.06% vs peer ~1.90%); the order book shows 10x10 depth."],
      concerns: ["Volatility (~3.85%) is higher than peers (~0.72%), raising timing risk for urgency and larger clips."],
      peer_context: "ITS, MZH, and PCT are next-best by liquidity; smaller peers (532, KUX, U77, NXR) are far thinner."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is ~S$0.75M—well above peer (~S$16.5K) and market (~S$14.9K) medians.", vs_market: "Market median ~S$14.9K; you are far above.", vs_sector: "Sector median ~S$16.5K; you are far above.", vs_peers: "Peer median ~S$16.5K; you are ~44x higher." },
      spread: { insight: "Spread is ~2.06%—in line with peer median (~1.90%) and tighter than market median (~2.37%).", vs_market: "Market median ~2.37%; you are slightly tighter.", vs_sector: "Sector median ~2.32%; you are in line.", vs_peers: "Peer median ~1.90%; you are slightly wider (still in line)." },
      volatility: { insight: "Daily volatility is ~3.85%—above peer median (~0.72%).", vs_market: "Market median ~0.59%; you are higher.", vs_sector: "Sector median ~0.64%; you are higher.", vs_peers: "Peer median ~0.72%; you are higher (typical for newer or event-driven names)." },
      trades: { insight: "You print ~260 trades/day—well above sector and market medians (~9).", vs_market: "Market median ~8.5; you are far above.", vs_sector: "Sector median ~8.75; you are far above.", vs_peers: "Peer median ~8.75; you are ~28x higher by count." }
    },
    performance: {
      overall: "Returns are −12.3% over 1M/3M/6M (same sample window). The market is +2.3%, sector −2.46%, peers −0.55%. Limited history; performance looks company-specific.",
      ytd: { stock: "N/A", market: "N/A", sector: "N/A", peers: "N/A", insight: "YTD not available in this sample." },
      three_month: { stock: "−12.3%", market: "+2.3%", sector: "−2.46%", peers: "−0.55%", insight: "Stock down vs a modestly positive market." },
      six_month: { stock: "−12.3%", market: "+2.3%", sector: "−2.46%", peers: "−0.55%", insight: "Stock underperformed over the short lookback." },
      conclusion: "Liquidity and execution are strong; emphasize fundamentals and messaging while staging larger clips."
    },
    drivers: {
      overall: "Approximate variance share: company ~62.6%, sector ~21.6%, market ~15.8% (R² ~26.8%). Market β −1.22; sector β 5.79. Fama-French indicates small-cap tilt (β_SMB ~2.39).",
      interpretation: "Company-specific and sector influences dominate. Market link is weak and lagged in this short sample.",
      rolling_change: "Single window (2025-12-15 to 2026-02-16); further history will improve stability.",
      beta: "β_market −1.22, β_sector 5.79; FF: β_mkt ~0.83, β_SMB ~2.39."
    },
    regime: {
      overall: "Three regimes identified. Low Vol (~29% of time; σ≈0.00%), Medium Vol (~47%; σ≈5.74%), High Vol (~24%; σ≈7.82%). Current regime: High Vol.",
      current: "High Vol (σ ~7.82%).",
      transitions: "From High Vol: ~30.7% → Low, ~26.7% → Medium, ~42.7% stay.",
      trading_implications: "Favor peak windows and measured participation. Avoid urgency on one-sided days."
    },
    trader_composition: {
      overall: "By trade count: ~86.6% retail, ~12.5% mixed, ~0.9% institutional. By notional: ~31.7% retail, ~55.4% mixed, ~12.9% institutional.",
      retail_heavy: "Retail dominates prints; mixed-size trades carry most notional.",
      institutional_gap: "Institutional notional share is ~12.9%—in range for a small cap; room to grow via block-friendly conditions.",
      peer_comparison: "Versus peers: TKU is retail-heavy by count, with notional mix similar to ITS/MZH/PCT (majority mixed)."
    },
    price_moving: {
      overall: "About 19.5% of trades moved the price (789 of 4,044). Positive movers avg ~S$6.1K; negative movers ~S$9.3K.",
      interpretation: "A moderate share of trades move price; negative movers are larger on average, indicating sell-side pressure is more disruptive.",
      asymmetry: "Negative movers are ~1.5× larger than positive movers.",
      by_trader_type: "All movers: ~82.5% retail, ~16.0% mixed, ~1.5% institutional."
    },
    short_selling: {
      overall: "Short interest is low: 1M avg ~0.43%, 3M avg ~0.15%, 6M avg ~0.07%. No clear relationship to returns in this sample. No SBL pool data.",
      level: "Low across horizons; episodic spikes occurred (e.g., 2026-01-23 ~2.7%).",
      correlation: "No robust correlation detected (undefined in this sample).",
      trend: "Recent 14-day short activity is ~0.35% on average; down from late-January spike.",
      peaks: "Notable episodes: 2026-01-23 (~2.74%), 2026-01-26 (~2.10%), 2026-02-04 (~1.47%)."
    },
    execution: {
      overall: "Execution is favourable for standard clips: ~−1.0% impact for S$100K with full fill. 1M+ turns costly (~−6.3%) with partial fills; staging helps.",
      concern: "Rising impact for larger orders and higher volatility days; avoid urgency and use deeper windows.",
      kyle: "Kyle’s Lambda ~6.6e−5 per S$10K reference amount.",
      peer_context: "50K as % ADV ~6.7% (manageable). Peers: MZH ~72%, PCT ~74%, ITS ~135%; smaller names are far higher."
    },
    intraday: {
      overall: "Trading is well spread: ~92% continuous, ~8% auctions. HHI ~0.16 is low vs peers. Peaks at 09:00, 09:30, 14:00, and 16:30.",
      hhi_interpretation: "Low HHI indicates liquidity is not concentrated in a few buckets.",
      best_times: "Best depth windows: 09:00–10:00, 13:00–14:30, and 16:30.",
      peer_ranking: "TKU and MZH are the most evenly traded; ITS/LVR/PCT and smaller peers are more concentrated."
    },
    ofi: {
      overall: "Order flow is moderate (avg |OFI| ~24.6%). Daily OFI strongly aligns with returns (corr ~0.70). L2 OFI is not significant (p~0.10; best lag ~4 min; negative direction).",
      daily_vs_intraday: "At the daily level OFI is informative; at short horizons, book-only signals are weaker—confirm with tape.",
      l2_signal: "L2 Granger test not significant (p~0.104) over 861 snapshots.",
      day_breakdown: "Over recent days: ~33% net buying, ~50% net selling, ~17% balanced."
    },
    index: {
      overall: "Not eligible for major indices. Market-cap rank #252 of 562 (S$131.2M); FTSE size band Fledgling. Float and velocity data are unavailable.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve market-cap rank and disclose free float. STI requires rank ≤30; iEdge Next 50 ≤80; FTSE All-Share requires top 98% mcap, float ≥15%, and velocity ≥0.05%."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["TKU", "ITS", "LVR", "U77", "NXR", "532", "KUX", "PCT", "MZH"],
      scores: [92.831541218638, 80.10752688172043, 50.7168458781362, 32.61648745519714, 37.992831541218635, 16.845878136200717, 6.093189964157706, 84.05017921146953, 83.33333333333334],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [746773.0, 741264.0, 31100.0, 1833.0, 1852.0, 35.1, 0.0, 1360937.0, 1385845.0],
      total: 558
    },
    market_comparison: {
      sector_name: "Software - Application",
      sector_count: 8,
      market_count: 558,
      company: { volatility: 0.03846153846153855, adv: 746773.0, spread_pct: 0.020280108086343007, turnover_ratio: 0.004933350534240108, amihud: 2.1246738595747293e-08, trades: 259.5 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.009150674333346669, median: 0.0059464875058934386, min: 0.0, max: 0.11111111111111105, p5: 0.0, p95: 0.033418079096045085, count: 558 },
        adv: { direction: "higher_is_better", mean: 2928619.5477689835, median: 14964.25, min: 0.0, max: 303745077.85, p5: 0.0, p95: 11653991.974999975, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.09312691831818345, median: 0.02367994421514626, min: 0.0002598231365279911, max: 1.3043478260869563, p5: 0.003305830086237345, p95: 0.48003871640235274, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.003965481841492924, median: 0.0002872109052622901, min: 0.0, max: 0.9013908114165183, p5: 0.0, p95: 0.011471674400077228, count: 552 },
        amihud: { direction: "lower_is_better", mean: 0.00024784661310946475, median: 1.212813237557314e-07, min: 0.0, max: 0.10869565217391303, p5: 0.0, p95: 6.928031055938039e-05, count: 548 },
        trades: { direction: "higher_is_better", mean: 395.35931899641577, median: 8.5, min: 0.0, max: 11374.5, p5: 0.0, p95: 2122.7749999999987, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.009379351652296489, median: 0.006381875473654819, min: 0.0, max: 0.03846153846153855, p5: 0.0, p95: 0.029166666666666695, count: 8 },
        adv: { direction: "higher_is_better", mean: 2654104.075, median: 16476.0, min: 0.0, max: 19709975.5, p5: 12.285000000000002, p95: 13072854.624999989, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.14271497852573273, median: 0.02321408266777291, min: 0.0011861886089541275, max: 0.6666666666666666, p5: 0.0033932136317877263, p95: 0.5597075949300264, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.003693965327976984, median: 0.00015088152434085763, min: 0.0, max: 0.01287867343220979, p5: 1.331765886332291e-06, p95: 0.012364302939196855, count: 8 },
        amihud: { direction: "lower_is_better", mean: 3.8908450235468913e-07, median: 2.1246738595747293e-08, min: 0.0, max: 1.8155410312273139e-06, p5: 1.3162039641257957e-10, p95: 1.4643846624914961e-06, count: 7 },
        trades: { direction: "higher_is_better", mean: 617.1875, median: 8.75, min: 0.0, max: 4503.0, p5: 0.35000000000000003, p95: 3017.774999999998, count: 8 }
      },
      peers: {
        volatility: { direction: "lower_is_better", mean: 0.0074731637406702245, median: 0.007196526151444171, min: 0.0, max: 0.021582733812949728, p5: 0.0, p95: 0.01819544364508397, count: 8 },
        adv: { direction: "higher_is_better", mean: 440358.2625, median: 16476.0, min: 0.0, max: 1385845.0, p5: 12.285000000000002, p95: 1377127.2, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.14231146923889743, median: 0.019012610141054292, min: 0.007491974388478696, max: 0.6666666666666666, p5: 0.008002258973780253, p95: 0.5597075949300264, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.003097600778020102, median: 0.00015088152434085763, min: 0.0, max: 0.01287867343220979, p5: 1.331765886332291e-06, p95: 0.011077240906181531, count: 8 },
        amihud: { direction: "lower_is_better", mean: 3.895876320328299e-07, median: 1.9902192664370147e-08, min: 0.0, max: 1.8155410312273139e-06, p5: 1.591556499921515e-09, p95: 1.4643846624914961e-06, count: 7 },
        trades: { direction: "higher_is_better", mean: 135.375, median: 8.75, min: 0.0, max: 673.0, p5: 0.35000000000000003, p95: 519.6999999999998, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: -0.12280701754385948, market: 0.022836153759572486, sector: -0.02456666015426512, peers: -0.0054711785382624 },
      { horizon: "3M", stock: -0.12280701754385948, market: 0.022836153759572486, sector: -0.02456666015426512, peers: -0.0054711785382624 },
      { horizon: "6M", stock: -0.12280701754385948, market: 0.022836153759572486, sector: -0.02456666015426512, peers: -0.0054711785382624 },
      { horizon: "LAST_YEAR", stock: null, market: null, sector: null, peers: null }
    ],
    drivers: {
      share_market: 15.808446137858473,
      share_sector: 21.611753549792183,
      share_idio: 62.57980031234934,
      beta_market: -1.2189669258093925,
      beta_sector: 5.788155865430501,
      r_squared: 26.75952353264598,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [0.16503120142490824, 0.24165256612706276, -0.19759622083532094, -0.17266975467942516, -0.11063361058182775, -0.0042922855280116985, -0.3979374564400219, 0.16029509432115804, -0.1104569337424486, -0.3074207471961309, 0.6589811473543409],
        corr_sector: [-0.47734003198134, 0.07961963354698474, -0.10227145501028297, 0.17385882179720952, -0.25474410902701095, 0.47877898606165653, 0.1830748857880929, 0.1069454091621905, -0.22816889837283263, 0.15133987831793586, 0.28759361132018696],
        best: { market: 5, sector: 0 }
      },
      rolling_windows: {
        p6: { valid: true, period_label: "2025-12-15 to 2026-02-16", shares: { share_market: 15.808446137858473, share_sector: 21.611753549792183, share_idio: 62.57980031234934 }, regression: { r_squared: 26.75952353264598 } }
      },
      rolling: {
        ordered: ["2025-12-15 to 2026-02-16"],
        market: [15.808446137858473],
        sector: [21.611753549792183],
        idio: [62.57980031234934]
      },
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "High Vol", "Medium Vol"],
        pct_time: [29.411764705882355, 23.52941176470588, 47.05882352941176],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 0.0, volatility: 0.000001, mean_ret_pct: 0.0, volatility_pct: 0.0001, n_days: 5, pct_time: 29.411764705882355 },
          { id: 1, label: "High Vol", mean_ret: 0.34965034965034336, volatility: 7.817345454545455, mean_ret_pct: 0.34965034965034336, volatility_pct: 7.817345454545455, n_days: 4, pct_time: 23.52941176470588 },
          { id: 2, label: "Medium Vol", mean_ret: -2.8301886792452824, volatility: 5.737769654968403, mean_ret_pct: -2.8301886792452824, volatility_pct: 5.737769654968403, n_days: 8, pct_time: 47.05882352941176 }
        ],
        transitions: [
          [15.679166153854918, 38.743819516766664, 45.57701432937841],
          [30.66451705998902, 42.685479311273954, 26.650003628737022],
          [30.6612294233508, 36.79617721577153, 32.54259336087767]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.24, quantity: 990300.0, value: 237672.0 },
        { level: 2, price: 0.235, quantity: 507000.0, value: 119145.0 },
        { level: 3, price: 0.23, quantity: 305000.0, value: 70150.0 },
        { level: 4, price: 0.225, quantity: 482800.0, value: 108630.0 },
        { level: 5, price: 0.22, quantity: 742300.0, value: 163306.0 },
        { level: 6, price: 0.215, quantity: 319000.0, value: 68585.0 },
        { level: 7, price: 0.21, quantity: 101000.0, value: 21210.0 },
        { level: 8, price: 0.2, quantity: 100000.0, value: 20000.0 },
        { level: 9, price: 0.18, quantity: 20000.0, value: 3600.0 },
        { level: 10, price: 0.178, quantity: 30000.0, value: 5340.0 }
      ],
      asks: [
        { level: 1, price: 0.245, quantity: 200000.0, value: 49000.0 },
        { level: 2, price: 0.25, quantity: 1002400.0, value: 250600.0 },
        { level: 3, price: 0.255, quantity: 170500.0, value: 43477.5 },
        { level: 4, price: 0.26, quantity: 200600.0, value: 52156.0 },
        { level: 5, price: 0.265, quantity: 545400.0, value: 144531.0 },
        { level: 6, price: 0.27, quantity: 530500.0, value: 143235.0 },
        { level: 7, price: 0.275, quantity: 236500.0, value: 65037.5 },
        { level: 8, price: 0.28, quantity: 569000.0, value: 159320.0 },
        { level: 9, price: 0.285, quantity: 69000.0, value: 19665.0 },
        { level: 10, price: 0.29, quantity: 281500.0, value: 81635.0 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 6.7,
      peers: [
        { ticker: "MZH", pct: 72.2 },
        { ticker: "PCT", pct: 73.5 },
        { ticker: "ITS", pct: 134.9 },
        { ticker: "LVR", pct: 3215.4 },
        { ticker: "NXR", pct: 53995.7 },
        { ticker: "U77", pct: 54555.4 },
        { ticker: "532", pct: 2849002.8 },
        { ticker: "KUX", pct: null }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 4045,
      first_trade_date: "2026-01-22",
      last_trade_date: "2026-02-13",
      period_days: 22,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.8660074165636589,
        mixed_pct: 0.12484548825710753,
        instit_pct: 0.009147095179233622,
        retail_qty_pct: 0.321731858805559,
        mixed_qty_pct: 0.5496775023560656,
        instit_qty_pct: 0.12859063883837543,
        retail_notional_pct: 0.3174889199226359,
        mixed_notional_pct: 0.5539742564771879,
        instit_notional_pct: 0.12853682360017624
      },
      trade_size: { avg: 6378.389864029667, median: 1150.0 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-02", n_trades: 1568, retail_pct: 0.9088010204081632, mixed_pct: 0.08609693877551021, instit_pct: 0.00510204081632653, avg_trade_size: 5038.648915816327, retail_qty_pct: 0.41227255022833154, mixed_qty_pct: 0.4927697578060547, instit_qty_pct: 0.0949576919656138, total_quantity: 32606100.0 },
          { month: "2026-01", n_trades: 2477, retail_pct: 0.8389180460234155, mixed_pct: 0.14937424303593055, instit_pct: 0.011707710940654016, avg_trade_size: 7226.47779572063, retail_qty_pct: 0.27654494081056014, mixed_qty_pct: 0.5780789376207284, instit_qty_pct: 0.1453761215687115, total_quantity: 65332600.0 }
        ]
      },
      peer_comparison: [
        { ticker: "TKU", currency: "SGD", is_target: true, retail_pct: 0.8660074165636589, mixed_pct: 0.12484548825710753, instit_pct: 0.009147095179233622, retail_qty_pct: 0.321731858805559, mixed_qty_pct: 0.5496775023560656, instit_qty_pct: 0.12859063883837543, retail_notional_pct: 0.3174889199226359, mixed_notional_pct: 0.5539742564771879, instit_notional_pct: 0.12853682360017624, avg_trade_size: 6378.389864029667, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "532", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, retail_qty_pct: 1.0, mixed_qty_pct: 0.0, instit_qty_pct: 0.0, retail_notional_pct: 1.0, mixed_notional_pct: 0.0, instit_notional_pct: 0.0, avg_trade_size: 390.56, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "LVR", currency: "SGD", is_target: false, retail_pct: 0.98, mixed_pct: 0.02, instit_pct: 0.0, retail_qty_pct: 0.6993056973657341, mixed_qty_pct: 0.3006943026342659, instit_qty_pct: 0.0, retail_notional_pct: 0.696730729746976, mixed_notional_pct: 0.3032692702530239, instit_notional_pct: 0.0, avg_trade_size: 1578.8691666666666, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "U77", currency: "SGD", is_target: false, retail_pct: 0.9702970297029703, mixed_pct: 0.0297029702970297, instit_pct: 0.0, retail_qty_pct: 0.751938645078824, mixed_qty_pct: 0.24806135492117598, instit_qty_pct: 0.0, retail_notional_pct: 0.7472122893203668, mixed_notional_pct: 0.2527877106796333, instit_notional_pct: 0.0, avg_trade_size: 2666.4059405940593, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "MZH", currency: "SGD", is_target: false, retail_pct: 0.9103581385374223, mixed_pct: 0.08074201158052756, instit_pct: 0.008899849882050183, retail_qty_pct: 0.29171062241337337, mixed_qty_pct: 0.5208582093877883, instit_qty_pct: 0.1874311681988384, retail_notional_pct: 0.28981905048953055, mixed_notional_pct: 0.5221411515990119, instit_notional_pct: 0.1880397979114576, avg_trade_size: 4447.922206733862, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "ITS", currency: "SGD", is_target: false, retail_pct: 0.8730687670402908, mixed_pct: 0.11814601635867919, instit_pct: 0.008785216601029992, retail_qty_pct: 0.344879165314014, mixed_qty_pct: 0.5002239581835142, instit_qty_pct: 0.15489687650247175, retail_notional_pct: 0.3419775896084498, mixed_notional_pct: 0.5014609191003425, instit_notional_pct: 0.15656149129120767, avg_trade_size: 6442.257952135717, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "NXR", currency: "SGD", is_target: false, retail_pct: 0.8235294117647058, mixed_pct: 0.17647058823529413, instit_pct: 0.0, retail_qty_pct: 0.29314329738058553, mixed_qty_pct: 0.7068567026194145, instit_qty_pct: 0.0, retail_notional_pct: 0.2940009576578425, mixed_notional_pct: 0.7059990423421575, instit_notional_pct: 0.0, avg_trade_size: 6234.573529411765, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "PCT", currency: "SGD", is_target: false, retail_pct: 0.7974358974358975, mixed_pct: 0.1907051282051282, instit_pct: 0.011858974358974358, retail_qty_pct: 0.311558714708998, mixed_qty_pct: 0.5543751375306405, instit_qty_pct: 0.1340661477603615, retail_notional_pct: 0.31025808858217885, mixed_notional_pct: 0.5539808397675048, instit_notional_pct: 0.1357610716503164, avg_trade_size: 8855.213461538462, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 4044,
      price_moving_trades: 789,
      pct_price_moving: 19.510385756676556,
      all_movers: { count: 789, avg_size: 7668.266159695818, median_size: 1081.0, retail_count: 651, mixed_count: 126, institutional_count: 12, retail_pct: 82.50950570342205, mixed_pct: 15.96958174904943, instit_pct: 1.520912547528517 },
      positive_movers: { count: 392, avg_size: 6059.434948979592, median_size: 234.0, retail_count: 337, mixed_count: 52, institutional_count: 3, retail_pct: 85.96938775510205, mixed_pct: 13.26530612244898, instit_pct: 0.7653061224489796 },
      negative_movers: { count: 397, avg_size: 9256.835012594458, median_size: 2418.0, retail_count: 314, mixed_count: 74, institutional_count: 9, retail_pct: 79.09319899244332, mixed_pct: 18.639798488664987, instit_pct: 2.2670025188916876 }
    },
    short_selling: {
      data_available: true,
      security_name: "$ Toku Ltd",
      mapping: { ticker_to_security: "$ Toku Ltd", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.004257781376083126, max_short_ratio: 0.027351428548504857, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.0014837722977259378, max_short_ratio: 0.027351428548504857, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.0007363080575181345, max_short_ratio: 0.027351428548504857, interpretation: "Low short interest" } }
      },
      correlation: { valid: false, correlation: null, interpretation: "No clear relationship" },
      peaks: [],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-02", avg_short_ratio: 0.0031313361350504237 },
          { month: "2026-01", avg_short_ratio: 0.0030230606744932015 },
          { month: "2025-12", avg_short_ratio: 0.0 },
          { month: "2025-11", avg_short_ratio: 0.0 },
          { month: "2025-10", avg_short_ratio: 0.0 },
          { month: "2025-09", avg_short_ratio: 0.0 },
          { month: "2025-08", avg_short_ratio: 0.0 },
          { month: "2025-07", avg_short_ratio: 0.0 },
          { month: "2025-06", avg_short_ratio: 0.0 },
          { month: "2025-05", avg_short_ratio: 0.0 },
          { month: "2025-04", avg_short_ratio: 0.0 },
          { month: "2025-03", avg_short_ratio: 0.0 }
        ],
        mom_change: [
          { month: "2026-02", avg_short_ratio: 0.0031313361350504237, change_pct: null },
          { month: "2026-01", avg_short_ratio: 0.0030230606744932015, change_pct: -3.457803821993026 },
          { month: "2025-12", avg_short_ratio: 0.0, change_pct: -100.0 },
          { month: "2025-11", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-10", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-09", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-08", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-07", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-06", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-04", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-03", avg_short_ratio: 0.0, change_pct: null }
        ],
        interpretation: "Short interest stable"
      },
      peer_comparison: [],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-02-16", short_ratio: 0.0, short_vol: 0, total_vol: 1310400, return: 0.08695652173913038 },
          { date: "2026-02-13", short_ratio: 0.0, short_vol: 0, total_vol: 2619400, return: 0.0 },
          { date: "2026-02-12", short_ratio: 0.0, short_vol: 0, total_vol: 1588200, return: 0.0 },
          { date: "2026-02-11", short_ratio: 0.0, short_vol: 0, total_vol: 1992800, return: 0.045454545454545414 },
          { date: "2026-02-10", short_ratio: 0.0, short_vol: 0, total_vol: 3371800, return: 0.0 },
          { date: "2026-02-09", short_ratio: 0.0, short_vol: 0, total_vol: 4116600, return: -0.06382978723404253 },
          { date: "2026-02-06", short_ratio: 0.0, short_vol: 0, total_vol: 5132900, return: -0.06000000000000005 },
          { date: "2026-02-05", short_ratio: 0.009976720984369804, short_vol: 30000, total_vol: 3007000, return: 0.0 },
          { date: "2026-02-04", short_ratio: 0.014653168944735494, short_vol: 37200, total_vol: 2538700, return: -0.05660377358490576 },
          { date: "2026-02-03", short_ratio: 0.0029329962073324904, short_vol: 5800, total_vol: 1977500, return: 0.03921568627450989 },
          { date: "2026-02-02", short_ratio: 0.006881811349116873, short_vol: 58600, total_vol: 8515200, return: -0.037735849056603765 },
          { date: "2026-01-30", short_ratio: 0.0030064912880081993, short_vol: 44000, total_vol: 14635000, return: 0.03921568627450989 },
          { date: "2026-01-29", short_ratio: 0.012090950356951265, short_vol: 29300, total_vol: 2423300, return: 0.020000000000000018 },
          { date: "2026-01-28", short_ratio: 0.0, short_vol: 0, total_vol: 2401500, return: -0.03846153846153855 },
          { date: "2026-01-27", short_ratio: 0.0, short_vol: 0, total_vol: 3285000, return: 0.0 },
          { date: "2026-01-26", short_ratio: 0.021019119182513736, short_vol: 122800, total_vol: 5842300, return: -0.018867924528301883 },
          { date: "2026-01-23", short_ratio: 0.027351428548504857, short_vol: 340900, total_vol: 12463700, return: -0.07017543859649111 },
          { date: "2026-01-22", short_ratio: 1.628478837917501e-05, short_vol: 500, total_vol: 30703500, return: null }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.043441244793077705, continuous: 0.9204987152494688, closing: 0.02903432648514878, auctions: 0.0795012847505311, other: 0.0 },
        "3M": { opening: 0.043441244793077705, continuous: 0.9204987152494688, closing: 0.02903432648514878, auctions: 0.0795012847505311, other: 0.0 },
        "6M": { opening: 0.043441244793077705, continuous: 0.9204987152494688, closing: 0.02903432648514878, auctions: 0.0795012847505311, other: 0.0 }
      },
      hhi: { "1M": 0.1585437625141794, "3M": 0.1585437625141794, "6M": 0.1585437625141794 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0068 },
        { time: "09:00", avg_share: 0.1412 },
        { time: "09:30", avg_share: 0.1112 },
        { time: "10:00", avg_share: 0.0697 },
        { time: "10:30", avg_share: 0.0344 },
        { time: "11:00", avg_share: 0.0435 },
        { time: "11:30", avg_share: 0.0572 },
        { time: "12:00", avg_share: 0.0022 },
        { time: "12:30", avg_share: 0.0111 },
        { time: "13:00", avg_share: 0.1004 },
        { time: "13:30", avg_share: 0.059 },
        { time: "14:00", avg_share: 0.104 },
        { time: "14:30", avg_share: 0.0423 },
        { time: "15:00", avg_share: 0.0263 },
        { time: "15:30", avg_share: 0.0241 },
        { time: "16:00", avg_share: 0.0486 },
        { time: "16:30", avg_share: 0.0828 },
        { time: "17:00", avg_share: 0.0352 }
      ],
      peers_hhi_rows: [
        { ticker: "TKU", auctions_pct: 7.95, hhi: 0.1585, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300", you: true } },
        { ticker: "ITS", auctions_pct: 6.65, hhi: 0.2570, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "LVR", auctions_pct: 2.73, hhi: 0.3382, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "U77", auctions_pct: 8.23, hhi: 0.5080, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "NXR", auctions_pct: 2.71, hhi: 0.6480, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "532", auctions_pct: 7.91, hhi: 0.7849, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "KUX", auctions_pct: 2.95, hhi: 0.8029, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "PCT", auctions_pct: 2.87, hhi: 0.3659, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "MZH", auctions_pct: 7.15, hhi: 0.1633, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "24.6%", note_suffix: " - 6-month average absolute OFI (moderate)." },
        { value: "0.70", note_suffix: " - Correlation (daily OFI vs returns) — strong positive." },
        { value: "Not significant", note_suffix: " - L2 Granger (p≈0.104), best lag ~4 min." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−3.8%", avg_abs: "24.6%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "−3.8%", avg_abs: "24.6%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "−3.8%", avg_abs: "24.6%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.7008",
      pie: { net_buy_days: 33.33, net_sell_days: 50.00, balanced_days: 16.67 },
      l2_compact_text: "Over the last 7 days we analyzed 861 valid L2 snapshots. Granger causality: NOT significant (p≈0.104) at ~4‑min lag. Direction negative (buy pressure → short-horizon mean reversion).",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2026-02-16", ofi: "+52.1%", direction: "BUY pressure", return: "+8.70%" },
        { date: "2026-02-09", ofi: "−50.6%", direction: "SELL pressure", return: "−6.38%" },
        { date: "2026-01-27", ofi: "−46.4%", direction: "SELL pressure", return: "0.0%" },
        { date: "2026-01-23", ofi: "−41.1%", direction: "SELL pressure", return: "−7.02%" },
        { date: "2026-02-12", ofi: "+41.0%", direction: "BUY pressure", return: "0.0%" }
      ],
      ofi_series: {
        rows: [
          { date: "2026-02-16", ofi: 0.5205009191321873, return: 0.08695652173913038 },
          { date: "2026-02-13", ofi: 0.18543526637594965, return: 0.0 },
          { date: "2026-02-12", ofi: 0.4098750973643942, return: 0.0 },
          { date: "2026-02-11", ofi: -0.028408030454028434, return: 0.045454545454545414 },
          { date: "2026-02-10", ofi: 0.006216645652587929, return: 0.0 },
          { date: "2026-02-09", ofi: -0.5064607891253321, return: -0.06382978723404253 },
          { date: "2026-02-06", ofi: -0.08303221609867503, return: -0.06000000000000005 },
          { date: "2026-02-05", ofi: -0.2556117379437068, return: 0.0 },
          { date: "2026-02-04", ofi: -0.2323565075009957, return: -0.05660377358490576 },
          { date: "2026-02-03", ofi: 0.3666428122695365, return: 0.03921568627450989 },
          { date: "2026-02-02", ofi: 0.028028499969745255, return: -0.037735849056603765 },
          { date: "2026-01-30", ofi: 0.17277699471299407, return: 0.03921568627450989 },
          { date: "2026-01-29", ofi: -0.0511074843034945, return: 0.020000000000000018 },
          { date: "2026-01-28", ofi: -0.3049622257043125, return: -0.03846153846153855 },
          { date: "2026-01-27", ofi: -0.46408624433205975, return: 0.0 },
          { date: "2026-01-26", ofi: -0.21816385456156673, return: -0.018867924528301883 },
          { date: "2026-01-23", ofi: -0.4110126275286362, return: -0.07017543859649111 }
        ],
        window_options: [30, 60, 100]
      }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#252 of 562", sub: "S$131.2M • Fledgling" },
        { title: "Free Float", value: "N/A", sub: "Float MCap N/A" },
        { title: "Avg Daily Turnover", value: "N/A", sub: "Velocity N/A" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #252 — outside top 30", gaps: ["Need rank ≤30 (currently #252)", "Need float ≥15% (data unavailable)", "Need velocity ≥0.1% (data unavailable)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.4%)", "Need float ≥15% (data unavailable)", "Need velocity ≥0.05% (data unavailable)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #252 — below top 80", gaps: ["Need rank ≤80 (currently #252)"] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #252 of 562 (S$131.2M); FTSE size band Fledgling. Float and velocity data are missing; both are required for FTSE All-Share.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently #252) toward STI (≤30) or iEdge Next 50 (≤80)", "Report free float and sustain velocity; both are required for FTSE All-Share"]
    }
  }
};

export default REPORT_DATA;
