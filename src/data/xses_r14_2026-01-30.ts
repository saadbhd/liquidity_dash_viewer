// @ts-nocheck

// ============================================================================
// Eneco Energy (R14) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// Source:
// - Key numeric fields from pipeline JSON and console output (as-of 2026-01-30).
// - Narrative and insights written for CEO/CFO: plain language, candid,
//   and action-oriented. R14 is a thin-trading small cap in Integrated
//   Freight & Logistics; focus is on liquidity constraints and what to do.
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector (Integrated Freight & Logistics), then industry (Industrials)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "R14", name: "Eneco Energy", marketCap: "S$34.2M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "BIP", name: "Vibrant Group", marketCap: "S$103.5M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "BTJ", name: "A-Sonic Aero", marketCap: "S$54.7M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "5NV", name: "Chasen", marketCap: "S$32.9M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "F83", name: "COSCO SHP SG", marketCap: "S$528.5M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "595", name: "GKE", marketCap: "S$74.7M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "S08", name: "SingPost", marketCap: "S$900.5M", sector: "Integrated Freight & Logistics", industry: "Industrials" },
    { ticker: "5G9", name: "Tritech", marketCap: "S$12.7M", sector: "Engineering & Construction", industry: "Industrials" },
    { ticker: "SES", name: "Shanaya", marketCap: "S$12.4M", sector: "Waste Management", industry: "Industrials" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "R14",
    company: "Eneco Energy",
    asof_date: "2026-01-30",
    industry: "Industrials",
    sector: "Integrated Freight & Logistics",
    market_cap_display: "34.2M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: WEAK", bg: "bg-red-500/20", textColor: "text-red-300", dot: "bg-red-500" },
      liq_section: { text: "Liquidity score: 43.9 — WEAK", bg: "bg-red-500/20", textColor: "text-red-300" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "HIGH crossing cost", bg: "bg-red-500/20", textColor: "text-red-300" },
      intraday: { text: "CONCENTRATED", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided imbalance", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "No short data", bg: "bg-slate-500/20", textColor: "text-slate-400" },
      index_status: { text: "Not eligible — Fledgling", bg: "bg-amber-500/20", textColor: "text-amber-400" }
    },
    borders: { action_plan: "border-red-500", index: "border-sky-500" },
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
    action_plan_subtitle: "Practical actions to reduce trading friction and protect liquidity",
    action_plan_icon: "",
    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar Integrated Freight & Logistics names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "R14 has very low daily turnover and only a handful of trades per day. Most price moves are company-specific (94%). Execution is challenging for size; a S$50K clip is ~828% of typical daily volume. Focus on improving visibility and two-way flow.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 94% of recent price moves are company-specific; 6% from the market and under 1% from the sector. The stock is largely on its own tape." },
      { title: "Market Link", text: "Your stock leads the market by 4 days at best correlation. Sensitivity to the market is negative (beta ≈ −0.77) — unusual; often seen in thin, name-specific stories." },
      { title: "Sector Link", text: "Sector has minimal direct influence on daily returns; in high-volatility regimes, sector volatility can Granger-cause stock volatility — worth monitoring on stress days." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company share means the stock moves mainly on its own news and fundamentals.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Stock leads the market by 4 days; sector leads by 2 days.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share has been dominant (69–94%) across rolling windows; market and sector shares are small and variable.",
    drivers_bottom_line: "Takeaway: R14 is strongly company-driven. Improving liquidity and visibility will matter more than macro or sector timing.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Trading cost is high (10.5% spread) — use limit orders and avoid market orders where possible.",
      "A S$50K trade is about 828% of typical daily volume — execution must be staged over many days.",
      "Order flow is one-sided (net sell days 53%); building two-way interest can help reduce impact."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "High Vol (20% of time)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Medium Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Current regime: High Vol.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is wide (~10.5%). Depth is limited; a S$100K sell moves the price about −5.3%; S$1M–2.5M sells show ~−22% impact with partial fill. Large orders should be split across many days.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "R14 has the highest 50K-as-%-of-ADV in the peer set (828%) — execution is difficult. Peers with better capacity: S08 (39%), 595 (388%), F83 (562%).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Execution is challenging: spread is wide (10.5%), ADV is low (~S$6K), and impact for 100K is −5.3%, for 1M about −22%. Staging and limit orders are essential.",
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under S$13,500",
    trader_mixed_threshold: "Mixed: Trades S$13,500 – S$67,500",
    trader_instit_threshold: "Institutional: Trades over S$67,500",
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail concentration across comparable names",
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes (microstructure sensitivity)",
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most volume is in continuous trading (~96%); auctions ~3.6%. Peak buckets 09:00 (13.9%), 09:30 (12.1%), 08:30 (10.8%), 14:00 (10.5%), 13:00 (9.2%).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "This index shows how spread out trading is through the day. Your value: {value} (highly concentrated).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity is concentrated in the morning and early afternoon; larger clips should target 08:30–10:00 and 13:00–14:00.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is highly concentrated. Best windows are 09:00, 09:30, and 08:30.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does that explain same-day price moves?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (6-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow is one-sided (6M avg |OFI| ~77%). Correlation with same-day returns is weak (+0.19). L2 order-book OFI does not significantly predict mid-price.",
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
    short_subtitle: "How much trading is short selling and what the lending pool means for risk",
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  content: {
    exec_metrics: [
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact. Higher is better." }, value: "43.9", suffix: "/100", bar_pct: 44, color_value: "text-red-300", color_bar: "text-red-400", subtext: "Rank 314/558 • Below peer median", interpretation: { text: "WEAK", cls: "interpretation-bad", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "10.53", suffix: "%", bar_pct: 10, color_value: "text-red-300", color_bar: "text-red-400", subtext: "Well above peer median (~1.4%)", interpretation: { text: "HIGH", cls: "interpretation-bad", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "6.0K", suffix: "SGD", bar_pct: 5, color_value: "text-red-300", color_bar: "text-red-400", subtext: "Peer median: 62.5K • −90% vs peers", interpretation: { text: "LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "93.8", suffix: "% company", bar_pct: 94, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 5.6% • Sector: 0.5%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "R14 has weak liquidity: rank 314/558, median daily volume ~S$6K, and wide spread (10.5%). Only a few trades per day — execution for size is difficult.",
      "A S$50K trade is about 828% of typical daily volume (worst in the peer set). Selling S$100K implies ~−5.3% impact; S$1M+ implies ~−22% with partial fill. Staging over many days is essential.",
      "No short-selling or SBL data available. Price moves are overwhelmingly company-specific (94%). Focus on improving two-way flow and visibility to support liquidity over time."
    ],
    action_plan: {
      borderClass: "border-red-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-red-500/20", text: "text-red-300", textColor: "text-red-300", dot: "bg-red-500" },
          items: [
            { title: "Protect and encourage two-way flow", bullets: ["Spread (10.5%) and low trade count reflect thin interest. Any steps to increase visibility (earnings calls, guidance, IR) can help attract incremental flow.", "Avoid large single-day sells; they would move the price sharply (−22% for 1M)."] },
            { title: "Set execution expectations for large holders", bullets: ["A S$50K clip is 828% of ADV. Educate significant shareholders to stage orders over many days and use limits."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Lead with company narrative in investor messaging", bullets: ["94% of price moves are company-specific. Emphasise results, strategy, and fundamentals so the stock is understood on its own merits."] },
            { title: "Monitor order-flow and volatility regimes", bullets: ["Order flow is one-sided (53% sell days). In high-vol regimes, sector volatility can Granger-cause stock volatility — use as context on stress days."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #387 of 562 — need top 30 for STI, top 80 for iEdge Next 50, and top 98% mcap for FTSE All-Share. Currently Fledgling; growth in market cap and turnover would help."] },
            { title: "Run a simple monthly liquidity dashboard", bullets: ["Monitor: spread, daily volume, trade count, and order-flow balance. Track progress vs peers (e.g. 5NV, BIP, BTJ)."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "4", sub: "Well below peer median (~17)", interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "Median Turnover (Vol/Free Float)", value: "0.02%", sub: "Well below peer median (~0.11%)", interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "Daily Volatility", value: "10.0%", sub: "Much higher than peer median (~1.2%)", interp: { text: "HIGH", cls: "interpretation-bad", icon: "◆" } }
    ],
    liq_insight: "Liquidity is weak versus peers: ADV is about 90% below peer median (S$62.5K), spread is wide (10.5% vs ~1.4%), and only 4 trades per day. Execution capacity is the most constrained in the peer set. Improving visibility and two-way interest is the main lever.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.0095", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "10.53%", note: "High immediate cost", color: "text-red-300" },
      { title: "Depth", value: "Limited", note: "9 bid levels, 10 ask levels", color: "text-amber-400" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −5.26% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −21.94% • Fill: 34.8% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −21.94% • Fill: 13.9% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided (77%)" },
      { cls: "bg-amber-500/20 text-amber-400", text: "Weak positive" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "R14 ranks in the lower half for liquidity (314/558). Typical daily volume is only S$6K—about 90% below the peer median (S$62.5K)—and the spread is wide at 10.5%, so trading cost is high and execution for size is difficult.",
      strengths: ["Price moves are largely company-specific (94%), so the story is in your control.", "Order book has multiple levels; depth is limited but present for very small size."],
      concerns: ["ADV and trade count are the lowest in the peer set; a S$50K trade is 828% of ADV.", "Spread (10.5%) is far above peer median (~1.4%).", "Trading concentration (HHI) is high — liquidity clusters in a few time buckets."],
      peer_context: "S08, 595, F83, and 5NV have meaningfully higher ADV and lower 50K-as-%-ADV. R14 and 5G9, SES are the thinnest in the set. Improving toward 5NV/BIP level would be a practical medium-term target."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is S$6K—well below peer median (S$62.5K) and sector median (S$87.2K).", vs_market: "Market median is ~S$18K; you are below.", vs_sector: "Sector median is ~S$87K; you are far below.", vs_peers: "Peer median is S$62.5K; you are about 90% lower." },
      spread: { insight: "Trading cost (spread) is 10.5%—much wider than the peer median (~1.4%).", vs_market: "Market median spread is ~2.2%; yours is much wider.", vs_sector: "Sector median ~1.3%; you are the widest in the sector.", vs_peers: "Peer median ~1.4%; you are about 7× wider." },
      volatility: { insight: "Daily volatility is 10%—far above peer median (~1.2%) and driven by thin, jumpy trading.", vs_market: "Market median volatility is ~0.6%; you are much higher.", vs_sector: "Sector median ~1.2%; you are about 8× higher.", vs_peers: "Peer median ~1.2%; your volatility is far above." },
      trades: { insight: "You have about 4 trades per day—well below the peer median (~17).", vs_market: "Market median is ~10; you are lower.", vs_sector: "Sector median ~23; you are far lower.", vs_peers: "Peer median ~17; you are about 77% lower." }
    },
    performance: {
      overall: "Returns are flat over 1M and 3M, with +11.1% over 6M. Market and sector are mixed; peers are negative. Liquidity is the main constraint; execution for size requires staging and patience.",
      ytd: { stock: "0.0%", market: "+5.57%", sector: "−1.94%", peers: "−2.19%", insight: "YTD you are flat; the market is up, sector and peers down." },
      three_month: { stock: "0.0%", market: "+10.76%", sector: "−2.84%", peers: "−1.39%", insight: "Over 3 months you are flat; the market is up, sector and peers down." },
      six_month: { stock: "+11.1%", market: "+16.87%", sector: "−6.11%", peers: "−7.44%", insight: "Over 6 months you are up; the market is up, sector and peers down." },
      conclusion: "Execution conditions are tight. Focus on two-way flow and visibility; performance narrative is company-specific."
    },
    drivers: {
      overall: "About 94% of recent price moves come from company-specific factors, 6% from the market, and under 1% from the sector. The model explains very little of daily variance (R² ~0.4%).",
      interpretation: "Company news and fundamentals drive almost all moves; market and sector play a small role. The stock leads the market by 4 days at best correlation. Negative market beta (−0.77) is unusual and consistent with a thin, name-specific tape.",
      rolling_change: "Over rolling windows, company-specific share has ranged 69–94%; market and sector shares are small and variable.",
      beta: "Sensitivity to the market is negative (β ≈ −0.77); sensitivity to the sector is low (β ≈ −0.14). The stock behaves like a small, company-driven name."
    },
    regime: {
      overall: "We see three environments: Low Vol (62%), Medium Vol (18%), and High Vol (20%). You are currently in the high-volatility regime.",
      current: "High Vol",
      transitions: "From High Vol, the market tends to move to Low Vol (58%) or Medium Vol (38%). From Low Vol, it stays Low 75% or moves to Medium 18%, High 7%. Medium Vol rarely persists (≈0% stay).",
      trading_implications: "In the current high-vol regime, sector Granger-causes stock returns. Use sector and order-flow context on stress days."
    },
    trader_composition: {
      overall: "By number of trades, 96% are retail. By value traded, retail is 55%, mixed 17.5%, institutional 27% — so a minority of larger trades accounts for a meaningful share of volume.",
      retail_heavy: "Retail dominates trade count; a small number of larger (mixed/institutional) trades drive a substantial share of value.",
      institutional_gap: "Institutional share of value (27%) is present but modest; building more institutional interest could improve depth and reduce impact.",
      peer_comparison: "You are among the most retail-heavy by trade count (R14, SES, 5G9, BIP); by value you have a moderate institutional share (27%), similar to S08 and BTJ in the set."
    },
    price_moving: {
      overall: "About 18.5% of trades moved the price. Retail orders dominate in both directions (~91–93% of price-moving trades).",
      interpretation: "A meaningful share of trades move the price; with only 4 trades per day on average, each trade has a high marginal impact.",
      asymmetry: "Trades that pushed the price up were on average larger than those that pushed it down (7.5K vs 3.3K).",
      by_trader_type: "Most price-moving activity is retail, in both directions; institutional share of price movers is very small."
    },
    short_selling: {
      overall: "No short-selling or SBL lending data is available for R14 in the current dataset.",
      level: "N/A",
      correlation: "N/A",
      trend: "N/A",
      peaks: "N/A"
    },
    execution: {
      overall: "Trading cost from price impact is high: −5.3% for S$100K, ~−22% for S$1M–2.5M with partial fill. A S$50K trade is about 828% of typical daily volume—the highest in the peer set (most difficult execution).",
      concern: "The main execution risk is low depth and wide spread. Any large order must be broken into small clips over many days.",
      kyle: "Kyle's Lambda is −0.15% per S$10K traded — consistent with thin, impact-sensitive liquidity.",
      peer_context: "R14 has the worst 50K capacity in the peer set (828% ADV). Next are 5G9 (24,757%), SES (160,192%). Best are S08 (39%), 595 (388%), F83 (562%)."
    },
    intraday: {
      overall: "Trading is highly concentrated: most volume is in continuous trading (~96%), with about 3.6% in auctions. The busiest times are 09:00 (13.9%), 09:30 (12.1%), and 08:30 (10.8%).",
      hhi_interpretation: "The concentration index (HHI) is in the highly concentrated range—liquidity clusters in a few buckets.",
      best_times: "The best windows for size are around 09:00, 09:30, and 08:30, and 13:00–14:00.",
      peer_ranking: "Your HHI is among the highest in the peer set (concentrated). S08 and F83 have more spread-out volume (lower HHI)."
    },
    ofi: {
      overall: "Order flow is one-sided (about 77% average absolute imbalance over 6 months). Imbalance and same-day returns have weak positive correlation (+0.19). L2 order-book imbalance does not significantly predict mid-price.",
      daily_vs_intraday: "Daily order flow is one-sided (53% sell days, 40% buy days). Correlation with returns is weak (+0.19).",
      l2_signal: "L2 OFI does not significantly Granger-cause mid-price. No short-term predictive signal from the order book.",
      day_breakdown: "Over 3 months, net selling days (53%) outnumber net buying days (40%); balanced days about 7%."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #387 of 562 (S$34M); FTSE size band Fledgling. STI requires top 30 rank; iEdge Next 50 top 80; FTSE All-Share top 98% cumulative mcap.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve market-cap rank and turnover to move toward index eligibility; maintain free float (74%) and consider initiatives that support velocity and two-way flow."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["R14", "BIP", "BTJ", "5NV", "F83", "595", "S08", "5G9", "SES"],
      scores: [43.91, 54.48, 55.91, 66.85, 70.43, 77.06, 90.32, 33.51, 29.03],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [6040.35, 37756.75, 26345.5, 87245.35, 177979.3, 257932, 2536788.75, 4039.2, 624.25],
      total: 558
    },
    market_comparison: {
      sector_name: "Integrated Freight & Logistics",
      sector_count: 7,
      market_count: 558,
      company: { volatility: 0.10, adv: 6040.35, spread_pct: 0.10526, turnover_ratio: 0.0002235, amihud: 1.5805e-5, trades: 4 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.01102, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 2515175, median: 17956.5, min: 0, max: 243209838, p5: 0, p95: 10103622, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.304, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00359, median: 0.000389, min: 0, max: 0.705, p5: 0, p95: 0.0105, count: 552 },
        amihud: { direction: "lower_is_better", mean: 6.89e-5, median: 7.62e-8, min: 0, max: 0.0185, p5: 0, p95: 8.46e-5, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.02388, median: 0.0125, min: 0, max: 0.10, p5: 0.00345, p95: 0.0756, count: 7 },
        adv: { direction: "higher_is_better", mean: 447155, median: 87245.35, min: 6040.35, max: 2536789, p5: 12132, p95: 1853132, count: 7 },
        spread_pct: { direction: "lower_is_better", mean: 0.02655, median: 0.01321, min: 0.00863, max: 0.1053, p5: 0.00965, p95: 0.0792, count: 7 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00249, median: 0.00144, min: 0.000224, max: 0.00563, p5: 0.000316, p95: 0.00549, count: 7 },
        amihud: { direction: "lower_is_better", mean: 2.37e-6, median: 7.85e-8, min: 0, max: 1.58e-5, p5: 1.23e-9, p95: 1.12e-5, count: 7 },
        trades: { direction: "higher_is_better", mean: 193.57, median: 23, min: 4, max: 1114, p5: 5.8, p95: 811.15, count: 7 }
      },
      peers: {
        volatility: { direction: "lower_is_better", mean: 0.00839, median: 0.01156, min: 0, max: 0.01869, p5: 0, p95: 0.01664, count: 8 },
        adv: { direction: "higher_is_better", mean: 391089, median: 62501.05, min: 624.25, max: 2536789, p5: 1819.5, p95: 1739189, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0446, median: 0.01443, min: 0.00863, max: 0.1449, p5: 0.00982, p95: 0.1401, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00227, median: 0.00109, min: 0.00026, max: 0.00563, p5: 0.000356, p95: 0.00547, count: 8 },
        amihud: { direction: "lower_is_better", mean: 2.97e-7, median: 2.00e-7, min: 0, max: 1.02e-6, p5: 1.44e-9, p95: 8.57e-7, count: 8 },
        trades: { direction: "higher_is_better", mean: 169.81, median: 17.25, min: 3.5, max: 1114, p5: 3.68, p95: 760.67, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: 0, market: 5.57, sector: -1.94, peers: -2.19 },
      { horizon: "3M", stock: 0, market: 10.76, sector: -2.84, peers: -1.39 },
      { horizon: "6M", stock: 11.11, market: 16.87, sector: -6.11, peers: -7.44 },
      { horizon: "YTD", stock: 0, market: 5.57, sector: -1.94, peers: -2.19 }
    ],
    drivers: {
      share_market: 5.64,
      share_sector: 0.53,
      share_idio: 93.82,
      beta_market: -0.7728,
      beta_sector: -0.1350,
      r_squared: 0.35,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.110, 0.310, -0.248, 0.164, -0.118, -0.059, 0.022, -0.057, 0.121, -0.040, 0.063],
        corr_sector: [0.016, 0.123, -0.031, -0.006, -0.049, -0.025, 0.149, -0.233, 0.090, 0.032, -0.080],
        best: { market: -4, sector: 2 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 4.49, share_sector: 9.57, share_idio: 85.94 }, regression: { r_squared: 2.11 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 1.26, share_sector: 16.91, share_idio: 81.82 }, regression: { r_squared: 7.81 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 11.51, share_sector: 5.19, share_idio: 83.30 }, regression: { r_squared: 4.23 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 18.69, share_sector: 11.97, share_idio: 69.34 }, regression: { r_squared: 6.32 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 6.03, share_sector: 15.23, share_idio: 78.74 }, regression: { r_squared: 5.27 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 5.64, share_sector: 0.53, share_idio: 93.82 }, regression: { r_squared: 0.35 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [4.49, 1.26, 11.51, 18.69, 6.03, 5.64],
        sector: [9.57, 16.91, 5.19, 11.97, 15.23, 0.53],
        idio: [85.94, 81.82, 83.30, 69.34, 78.74, 93.82]
      },
      regime: {
        n_regimes: 3,
        labels: ["Medium Vol", "High Vol", "Low Vol"],
        pct_time: [0.1825, 0.1984, 0.6190],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Medium Vol", mean_ret: -0.10, volatility: 0.10, mean_ret_pct: -10, volatility_pct: 10, n_days: 23, pct_time: 0.1825 },
          { id: 1, label: "High Vol", mean_ret: 0.1111, volatility: 0.1111, mean_ret_pct: 11.11, volatility_pct: 11.11, n_days: 25, pct_time: 0.1984 },
          { id: 2, label: "Low Vol", mean_ret: 0, volatility: 1e-6, mean_ret_pct: 0, volatility_pct: 0, n_days: 78, pct_time: 0.6190 }
        ],
        transitions: [
          [0.7505, 0.1830, 0.0665],
          [0.2098, 3.7e-7, 0.7902],
          [0.5760, 0.3809, 0.0431]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.009, quantity: 27445900, value: 247013.1 },
        { level: 2, price: 0.008, quantity: 8211000, value: 65688 },
        { level: 3, price: 0.007, quantity: 2157000, value: 15099 },
        { level: 4, price: 0.006, quantity: 996000, value: 5976 },
        { level: 5, price: 0.005, quantity: 595000, value: 2975 },
        { level: 6, price: 0.004, quantity: 824000, value: 3296 },
        { level: 7, price: 0.003, quantity: 333000, value: 999 },
        { level: 8, price: 0.002, quantity: 332000, value: 664 },
        { level: 9, price: 0.001, quantity: 5991000, value: 5991 }
      ],
      asks: [
        { level: 1, price: 0.01, quantity: 33401000, value: 334010 },
        { level: 2, price: 0.011, quantity: 15820600, value: 174026.6 },
        { level: 3, price: 0.012, quantity: 2498000, value: 29976 },
        { level: 4, price: 0.013, quantity: 500000, value: 6500 },
        { level: 5, price: 0.014, quantity: 3000000, value: 42000 },
        { level: 6, price: 0.015, quantity: 550000, value: 8250 },
        { level: 7, price: 0.016, quantity: 300000, value: 4800 },
        { level: 8, price: 0.017, quantity: 2000000, value: 34000 },
        { level: 9, price: 0.018, quantity: 50000, value: 900 },
        { level: 10, price: 0.02, quantity: 40000, value: 800 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 828,
      peers: [
        { ticker: "S08", pct: 39 },
        { ticker: "595", pct: 388 },
        { ticker: "F83", pct: 562 },
        { ticker: "5NV", pct: 1146 },
        { ticker: "BIP", pct: 2649 },
        { ticker: "BTJ", pct: 3796 },
        { ticker: "5G9", pct: 24757 },
        { ticker: "SES", pct: 160192 }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 70,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500, instit_min: 67500 },
      composition: {
        retail_pct: 0.9571,
        mixed_pct: 0.0286,
        instit_pct: 0.0143,
        retail_qty_pct: 0.5551,
        mixed_qty_pct: 0.1752,
        instit_qty_pct: 0.2696,
        retail_notional_pct: 0.5510,
        mixed_notional_pct: 0.1657,
        instit_notional_pct: 0.2833
      },
      trade_size: { avg: 5042.75, median: 2250 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 69, retail_pct: 0.9565, mixed_pct: 0.0290, instit_pct: 0.0145, avg_trade_size: 5086.12, retail_qty_pct: 0.5527, mixed_qty_pct: 0.1762, instit_qty_pct: 0.2711, total_quantity: 36885500 },
          { month: "2025-12", n_trades: 87, retail_pct: 0.7701, mixed_pct: 0.1954, instit_pct: 0.0345, avg_trade_size: 13005.58, retail_qty_pct: 0.1945, mixed_qty_pct: 0.4833, instit_qty_pct: 0.3222, total_quantity: 113706600 },
          { month: "2025-11", n_trades: 90, retail_pct: 0.8333, mixed_pct: 0.1667, instit_pct: 0, avg_trade_size: 6609.51, retail_qty_pct: 0.4542, mixed_qty_pct: 0.5458, instit_qty_pct: 0, total_quantity: 60900800 },
          { month: "2025-10", n_trades: 176, retail_pct: 0.875, mixed_pct: 0.125, instit_pct: 0, avg_trade_size: 5684.16, retail_qty_pct: 0.5083, mixed_qty_pct: 0.4917, instit_qty_pct: 0, total_quantity: 99992800 },
          { month: "2025-09", n_trades: 249, retail_pct: 0.9197, mixed_pct: 0.0683, instit_pct: 0.0120, avg_trade_size: 5810.30, retail_qty_pct: 0.3712, mixed_qty_pct: 0.3875, instit_qty_pct: 0.2413, total_quantity: 138462800 },
          { month: "2025-08", n_trades: 362, retail_pct: 0.9116, mixed_pct: 0.0773, instit_pct: 0.0110, avg_trade_size: 5748.55, retail_qty_pct: 0.4176, mixed_qty_pct: 0.3535, instit_qty_pct: 0.2289, total_quantity: 207197800 }
        ]
      },
      peer_comparison: [
        { ticker: "R14", currency: "SGD", is_target: true, retail_pct: 0.9571, mixed_pct: 0.0286, instit_pct: 0.0143, retail_qty_pct: 0.5551, mixed_qty_pct: 0.1752, instit_qty_pct: 0.2696, retail_notional_pct: 0.5510, mixed_notional_pct: 0.1657, instit_notional_pct: 0.2833, avg_trade_size: 5042.75, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "SES", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 2475.23, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5G9", currency: "SGD", is_target: false, retail_pct: 0.9887, mixed_pct: 0.0113, instit_pct: 0, retail_qty_pct: 0.8118, mixed_qty_pct: 0.1882, instit_qty_pct: 0, retail_notional_pct: 0.8086, mixed_notional_pct: 0.1914, instit_notional_pct: 0, avg_trade_size: 1297.12, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "BIP", currency: "SGD", is_target: false, retail_pct: 0.9692, mixed_pct: 0.0308, instit_pct: 0, retail_qty_pct: 0.8117, mixed_qty_pct: 0.1883, instit_qty_pct: 0, retail_notional_pct: 0.8120, mixed_notional_pct: 0.1880, instit_notional_pct: 0, avg_trade_size: 3923.04, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "S08", currency: "SGD", is_target: false, retail_pct: 0.9612, mixed_pct: 0.0286, instit_pct: 0.0102, retail_qty_pct: 0.2227, mixed_qty_pct: 0.2900, instit_qty_pct: 0.4873, retail_notional_pct: 0.2225, mixed_notional_pct: 0.2898, instit_notional_pct: 0.4877, avg_trade_size: 2876.66, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "F83", currency: "SGD", is_target: false, retail_pct: 0.9538, mixed_pct: 0.0427, instit_pct: 0.0035, retail_qty_pct: 0.4275, mixed_qty_pct: 0.4479, instit_qty_pct: 0.1246, retail_notional_pct: 0.4262, mixed_notional_pct: 0.4482, instit_notional_pct: 0.1255, avg_trade_size: 2988.62, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "BTJ", currency: "SGD", is_target: false, retail_pct: 0.8976, mixed_pct: 0.0783, instit_pct: 0.0241, retail_qty_pct: 0.3775, mixed_qty_pct: 0.3060, instit_qty_pct: 0.3164, retail_notional_pct: 0.3770, mixed_notional_pct: 0.3029, instit_notional_pct: 0.3201, avg_trade_size: 7188.29, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5NV", currency: "SGD", is_target: false, retail_pct: 0.8724, mixed_pct: 0.1253, instit_pct: 0.0023, retail_qty_pct: 0.5094, mixed_qty_pct: 0.4621, instit_qty_pct: 0.0285, retail_notional_pct: 0.5082, mixed_notional_pct: 0.4627, instit_notional_pct: 0.0291, avg_trade_size: 6270.90, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "595", currency: "SGD", is_target: false, retail_pct: 0.8579, mixed_pct: 0.1367, instit_pct: 0.0054, retail_qty_pct: 0.4074, mixed_qty_pct: 0.5345, instit_qty_pct: 0.0581, retail_notional_pct: 0.4076, mixed_notional_pct: 0.5340, instit_notional_pct: 0.0584, avg_trade_size: 6768.66, thresholds: { retail_max: 13500, instit_min: 67500 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 1032,
      price_moving_trades: 191,
      pct_price_moving: 18.51,
      all_movers: { count: 191, avg_size: 5438.88, median_size: 500, retail_count: 175, mixed_count: 13, institutional_count: 3, retail_pct: 91.62, mixed_pct: 6.81, instit_pct: 1.57 },
      positive_movers: { count: 96, avg_size: 7543.06, median_size: 500, retail_count: 87, mixed_count: 6, institutional_count: 3, retail_pct: 90.63, mixed_pct: 6.25, instit_pct: 3.13 },
      negative_movers: { count: 95, avg_size: 3312.54, median_size: 378, retail_count: 88, mixed_count: 7, institutional_count: 0, retail_pct: 92.63, mixed_pct: 7.37, instit_pct: 0 }
    },
    short_selling: {
      data_available: false,
      security_name: "Eneco Energy",
      mapping: { ticker_to_security: "", confidence: "none" },
      coverage: { n_days_short_data: null, window_days: 182 },
      periods: {
        "1M": { stats: { valid: false, avg_short_ratio: null, max_short_ratio: null, interpretation: "" } },
        "3M": { stats: { valid: false, avg_short_ratio: null, max_short_ratio: null, interpretation: "" } },
        "6M": { stats: { valid: false, avg_short_ratio: null, max_short_ratio: null, interpretation: "" } }
      },
      correlation: { valid: false, correlation: null, interpretation: "" },
      peaks: [],
      peer_comparison: []
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.00552, continuous: 0.9599, closing: 0.0128, auctions: 0.0401, other: 0 },
        "3M": { opening: 0.0189, continuous: 0.9741, closing: 0.00244, auctions: 0.0259, other: 0 },
        "6M": { opening: 0.0230, continuous: 0.9639, closing: 0.00934, auctions: 0.0361, other: 0 }
      },
      hhi: { "1M": 0.6756, "3M": 0.7448, "6M": 0.6463 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.1079 },
        { time: "09:00", avg_share: 0.1387 },
        { time: "09:30", avg_share: 0.1209 },
        { time: "10:00", avg_share: 0.0796 },
        { time: "10:30", avg_share: 0.0575 },
        { time: "11:00", avg_share: 0.0199 },
        { time: "11:30", avg_share: 0.0387 },
        { time: "12:30", avg_share: 0.0018 },
        { time: "13:00", avg_share: 0.0916 },
        { time: "13:30", avg_share: 0.0813 },
        { time: "14:00", avg_share: 0.1054 },
        { time: "14:30", avg_share: 0.0317 },
        { time: "15:00", avg_share: 0.0279 },
        { time: "15:30", avg_share: 0.0019 },
        { time: "16:00", avg_share: 0.0122 },
        { time: "16:30", avg_share: 0.0742 },
        { time: "17:00", avg_share: 0.0088 }
      ],
      peers_hhi_rows: [
        { ticker: "R14", auctions_pct: 3.21, hhi: 0.6624, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300", you: true } },
        { ticker: "BIP", auctions_pct: 2.53, hhi: 0.5615, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "BTJ", auctions_pct: 5.96, hhi: 0.6577, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5NV", auctions_pct: 6.66, hhi: 0.4132, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "F83", auctions_pct: 8.50, hhi: 0.2293, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "595", auctions_pct: 7.53, hhi: 0.3799, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "S08", auctions_pct: 12.87, hhi: 0.1904, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "5G9", auctions_pct: 8.62, hhi: 0.7333, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "SES", auctions_pct: 5.96, hhi: 0.4412, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "77.4%", note_suffix: " - 6-month average absolute OFI (one-sided)." },
        { value: "0.19", note_suffix: " - Correlation between daily OFI and same-day returns (weak positive)." },
        { value: "Not significant", note_suffix: " - L2 OFI Granger-causality not significant." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "+24.1%", avg_abs: "91.0%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "−13.7%", avg_abs: "83.6%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "−16.7%", avg_abs: "77.4%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.19",
      pie: { net_buy_days: 39.71, net_sell_days: 52.94, balanced_days: 7.35 },
      l2_compact_text: "Over the last 7 days we analyzed 47 valid L2 snapshots. Granger causality: OFI% does not significantly predict mid-price changes. No short-term predictive signal from the order book.",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-02-03", ofi: "+100%", direction: "BUY pressure", return: "0.0%" },
        { date: "2025-10-22", ofi: "+100%", direction: "BUY pressure", return: "0.0%" },
        { date: "2025-10-24", ofi: "+100%", direction: "BUY pressure", return: "0.0%" },
        { date: "2025-03-11", ofi: "−100%", direction: "SELL pressure", return: "0.0%" },
        { date: "2025-03-12", ofi: "−100%", direction: "SELL pressure", return: "0.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#387 of 562", sub: "S$34.2M • Fledgling" },
        { title: "Free Float", value: "74.0%", sub: "Float mcap S$25.3M" },
        { title: "Avg Daily Turnover", value: "S$9.0K", sub: "Velocity 6.60%" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #387 — outside top 30", gaps: ["Need rank ≤30 (currently 387)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.8%)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #387 — below top 80", gaps: ["Need rank ≤80 (currently 387)"] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #387 of 562 (S$34M); FTSE size band Fledgling. STI requires top 30; iEdge Next 50 top 80; FTSE All-Share top 98% cumulative mcap.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently 387) for STI (top 30) or iEdge Next 50 (top 80)", "Grow turnover and maintain free float (74%); velocity 6.6% supports Fledgling band"]
    }
  }
};

export default REPORT_DATA;
