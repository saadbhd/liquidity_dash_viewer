// @ts-nocheck

// ============================================================================
// UnionSteel (ZB9) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// Source: Pipeline JSON and console output (as-of 2026-01-30).
// Narrative and insights written for CEO/CFO: plain language, candid,
// and action-oriented. ZB9 is a thin-trading small cap in Waste Management;
// spread is tighter than peers but ADV and trade count are very low.
// Short interest is nil; SBL pool is large vs ADV. Not index-eligible.
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector (Waste Management), then industry (Industrials)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "ZB9", name: "UnionSteel", marketCap: "S$69.1M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "5CT", name: "EcoWise", marketCap: "S$21.8M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "L23", name: "Enviro-Hub", marketCap: "S$40.1M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "SES", name: "Shanaya", marketCap: "S$12.4M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "1E3", name: "Sanli Env", marketCap: "S$108.9M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "NEX", name: "Reclaims Global", marketCap: "S$68.7M", sector: "Waste Management", industry: "Industrials" },
    { ticker: "AWC", name: "Brook Crompton", marketCap: "S$20.9M", sector: "Electrical Equipment & Parts", industry: "Industrials" },
    { ticker: "5IF", name: "Natural Cool", marketCap: "S$11.5M", sector: "Building Products & Equipment", industry: "Industrials" },
    { ticker: "LMS", name: "LMS Compliance", marketCap: "S$49.4M", sector: "Specialty Business Services", industry: "Industrials" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "ZB9",
    company: "UnionSteel",
    asof_date: "2026-01-30",
    industry: "Industrials",
    sector: "Waste Management",
    market_cap_display: "69.1M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: WEAK", bg: "bg-red-500/20", textColor: "text-red-300", dot: "bg-red-500" },
      liq_section: { text: "Liquidity score: 23.5 — WEAK", bg: "bg-red-500/20", textColor: "text-red-300" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "HIGH impact for size", bg: "bg-red-500/20", textColor: "text-red-300" },
      intraday: { text: "CONCENTRATED", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "Moderately one-sided", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "No short interest • SBL pool", bg: "bg-slate-500/20", textColor: "text-slate-400" },
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
    liq_subtitle: "How your stock compares to similar Waste Management names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "UnionSteel has very low daily volume (ADV ~S$88) and minimal trade count. Spread is tighter than peers (3.5% vs 5.4% median)—a relative strength. Most price moves are company-specific (73%). Execution for size is extremely difficult; a S$50K clip is ~57,000% of ADV. Short interest is nil; SBL pool is large vs ADV.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 73% of recent price moves are company-specific; 18% from the sector and 9% from the market. The stock has meaningful sector linkage but remains largely on its own tape." },
      { title: "Market Link", text: "Market leads by 5 days at best correlation. Sensitivity to the market is moderate (β ≈ 0.36); sector sensitivity is higher (β ≈ 0.65)." },
      { title: "Sector Link", text: "Sector has contemporaneous correlation (lag 0). In rolling windows, sector share has varied; company-specific share has been 66–93%." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company share means the stock moves mainly on its own news and fundamentals.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Market leads by 5 days; sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share has been dominant (66–93%) across rolling windows; sector share picked up in Q3 2025 (24%).",
    drivers_bottom_line: "Takeaway: UnionSteel is strongly company-driven with moderate sector sensitivity. Improving liquidity and two-way flow will matter most.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Spread (3.5%) is tighter than peer median (5.4%)—use limit orders to preserve this advantage.",
      "A S$50K trade is about 57,000% of typical daily volume—execution must be staged over many days or use auctions.",
      "Order flow is moderately one-sided (6M |OFI| ~39%); OFI correlates with same-day returns (+0.34)—imbalance can move price."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Low Vol (current)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Current regime: Low Vol.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is ~2.6%. Depth is limited; a S$100K sell implies about −6.6% impact (book simulation). Large orders should be split across many days or use auctions.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "ZB9 has the highest 50K-as-%-of-ADV in the peer set (~57,000%)—execution is extremely difficult. Peers with better capacity: NEX (233%), 1E3 (357%).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Execution is challenging: ADV is very low (~S$88), so any meaningful size moves the price. Sell impact ~−6.6% for 100K–2.5M (book simulation). Staging and limit orders are essential.",
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
    session_dist_note: "Most volume is in continuous trading (~93%); auctions ~7.3%. Peak buckets 17:00 (13.7%), 14:00 (12%), 16:30 (8.6%), 08:30 and 13:00 (7.3%).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "This index shows how spread out trading is through the day. Your value: {value} (highly concentrated).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity is concentrated in afternoon and close; larger clips could target 14:00 and 17:00.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is highly concentrated. Best windows are 17:00, 14:00, and 16:30.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does that explain same-day price moves?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (6-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow is moderately one-sided (6M avg |OFI| ~39%). Correlation with same-day returns is moderate (+0.34)—imbalance can affect price. L2 order-book OFI does not significantly predict mid-price.",
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
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact. Higher is better." }, value: "23.5", suffix: "/100", bar_pct: 23, color_value: "text-red-300", color_bar: "text-red-400", subtext: "Rank 428/558 • Below peer median", interpretation: { text: "WEAK", cls: "interpretation-bad", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "3.50", suffix: "%", bar_pct: 4, color_value: "text-amber-400", color_bar: "text-amber-500", subtext: "Tighter than peer median (~5.4%)", interpretation: { text: "BETTER THAN PEERS", cls: "interpretation-good", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "87.75", suffix: "SGD", bar_pct: 1, color_value: "text-red-300", color_bar: "text-red-400", subtext: "Peer median ~S$1.1K • −92% vs peers", interpretation: { text: "VERY LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "73.2", suffix: "% company", bar_pct: 73, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 8.6% • Sector: 18.2%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "UnionSteel has weak liquidity overall: rank 428/558, median daily volume ~S$88, and only ~0.5 trades per day. Execution for size is extremely difficult—a S$50K trade is ~57,000% of ADV.",
      "Spread (3.5%) is a relative strength—tighter than peer median (5.4%). Use limit orders to preserve this. Sell impact from the book is ~−6.6% for 100K–2.5M; staging over many days is essential.",
      "Short interest is nil; SBL pool is 549,605 shares (large vs ADV). If the entire pool were sold, estimated impact is limited (~0.32%). Not eligible for major indices (rank #312, Fledgling band). Focus on two-way flow and visibility."
    ],
    action_plan: {
      borderClass: "border-red-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-red-500/20", text: "text-red-300", textColor: "text-red-300", dot: "bg-red-500" },
          items: [
            { title: "Protect and encourage two-way flow", bullets: ["ADV is very low (~S$88) and trade count is minimal. Any steps to increase visibility (earnings, guidance, IR) can help attract incremental flow.", "Avoid large single-day sells; book simulation suggests ~−6.6% impact for 100K+. Stage orders or use auctions."] },
            { title: "Set execution expectations for large holders", bullets: ["A S$50K clip is ~57,000% of ADV. Educate significant shareholders to stage orders over many days and use limits; your spread is already tighter than peers—preserve it."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Lead with company and sector narrative", bullets: ["73% of price moves are company-specific; 18% sector. Emphasise results and Waste Management sector context so the stock is understood on its own merits and sector trends."] },
            { title: "Monitor order-flow and SBL pool", bullets: ["Order flow is moderately one-sided (|OFI| ~39%); OFI correlates with same-day returns (+0.34). SBL pool is large vs ADV—track turnover and any change in short interest."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #312 of 562 — need top 30 for STI, top 80 for iEdge Next 50. Free float is 16.5% (above typical 15% minimum); velocity is very low (0.28%). Growth in market cap and turnover would help."] },
            { title: "Run a simple monthly liquidity dashboard", bullets: ["Monitor: spread, daily volume, trade count, order-flow balance, and SBL pool vs ADV. Track progress vs peers (e.g. NEX, 1E3, L23)."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "0.5", sub: "Well below peer median (~2.75)", interp: { text: "VERY LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "Median Turnover (Vol/Free Float)", value: "~0%", sub: "Well below peer median", interp: { text: "VERY LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "Spread vs Peers", value: "3.5%", sub: "Tighter than peer median (5.4%)", interp: { text: "RELATIVE STRENGTH", cls: "interpretation-good", icon: "◆" } }
    ],
    liq_insight: "Liquidity is weak versus peers: ADV is about 92% below peer median (S$1.1K), but spread (3.5%) is tighter than peer median (5.4%)—a relative strength. Trade count is the lowest in the set. Execution capacity is the most constrained; improving visibility and two-way interest is the main lever.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.5825", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "2.58%", note: "Tighter than peers", color: "text-emerald-400" },
      { title: "Depth", value: "Limited", note: "5 bid levels, 7 ask levels", color: "text-amber-400" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −6.63% • Fill: 55.3% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −6.63% • Fill: 5.5% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −6.63% • Fill: 2.2% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderately one-sided (39%)" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Moderate positive (+0.34)" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "UnionSteel ranks in the lower tier for liquidity (428/558). Typical daily volume is only S$88—about 92% below the peer median (S$1.1K)—and trade count is minimal (~0.5/day). The spread (3.5%) is tighter than peer median (5.4%), which is a relative strength.",
      strengths: ["Spread is tighter than peers (3.5% vs 5.4% median)—limit orders can preserve this.", "Price moves are largely company-specific (73%), so the story is in your control.", "Short interest is nil; no short-selling pressure."],
      concerns: ["ADV and trade count are the lowest in the peer set; a S$50K trade is ~57,000% of ADV.", "Trading concentration (HHI) is high—liquidity clusters in a few time buckets.", "SBL pool is large vs ADV (6,816% of ADV); if lent and sold, impact is estimated limited but pool size is a monitoring point."],
      peer_context: "NEX and 1E3 have meaningfully higher ADV and better 50K-as-%-ADV. ZB9, AWC, 5IF, and LMS are the thinnest. Improving toward L23 or 5CT level would be a practical medium-term target."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is S$88—well below peer median (S$1.1K) and sector median (S$2.1K).", vs_market: "Market median is ~S$18K; you are far below.", vs_sector: "Sector median is ~S$2.1K; you are far below.", vs_peers: "Peer median is S$1.1K; you are about 92% lower." },
      spread: { insight: "Trading cost (spread) is 3.5%—tighter than the peer median (~5.4%).", vs_market: "Market median spread is ~2.2%; yours is slightly wider.", vs_sector: "Sector median ~4.7%; you are tighter.", vs_peers: "Peer median ~5.4%; you are about 35% tighter." },
      volatility: { insight: "Daily volatility is 0% in the metric window—low and stable.", vs_market: "Market median volatility is ~0.6%.", vs_sector: "Sector median ~0.8%.", vs_peers: "Peer median ~0%; in line." },
      trades: { insight: "You have about 0.5 trades per day—the lowest in the peer set (median ~2.75).", vs_market: "Market median is ~10; you are far lower.", vs_sector: "Sector median ~4; you are lower.", vs_peers: "Peer median ~2.75; you are about 82% lower." }
    },
    performance: {
      overall: "Returns are negative over 1M (−5.0%), 3M (−8.7%), and 6M (−11.5%). Market and sector are positive over 1M/3M/6M; peers are mixed. Liquidity is the main constraint; execution for size requires staging and patience.",
      ytd: { stock: "−5.0%", market: "+5.57%", sector: "+1.57%", peers: "+1.99%", insight: "YTD you are down; the market, sector, and peers are up." },
      three_month: { stock: "−8.7%", market: "+10.76%", sector: "−3.42%", peers: "−2.68%", insight: "Over 3 months you are down; the market is up, sector and peers down." },
      six_month: { stock: "−11.5%", market: "+16.87%", sector: "−4.66%", peers: "−1.40%", insight: "Over 6 months you are down; the market is up, sector and peers mixed." },
      conclusion: "Execution conditions are tight. Focus on two-way flow and visibility; performance narrative is company- and sector-specific."
    },
    drivers: {
      overall: "About 73% of recent price moves come from company-specific factors, 18% from the sector, and 9% from the market. The model explains a modest share of daily variance (R² ~9.9%).",
      interpretation: "Company and sector news drive most moves; market plays a smaller role. The market leads by 5 days at best correlation; sector is contemporaneous. Positive market and sector betas (0.36 and 0.65) are consistent with some macro/sector linkage.",
      rolling_change: "Over rolling windows, company-specific share has ranged 66–93%; sector share picked up in Q3 2025 (24%).",
      beta: "Sensitivity to the market is moderate (β ≈ 0.36); sensitivity to the sector is higher (β ≈ 0.65). The stock has meaningful sector linkage."
    },
    regime: {
      overall: "Two regimes are identified (Low Vol and High Vol); both show 0% of time in the fitted sample—regime interpretation is limited for ZB9 due to thin trading.",
      current: "Low Vol",
      transitions: "Transition matrix is available; from Low Vol the system moves to High Vol with ~34% probability; from High Vol to Low Vol ~54%.",
      trading_implications: "Regime-based causality is not available (insufficient data in each regime). Use order-flow and sector context for timing."
    },
    trader_composition: {
      overall: "By number of trades and value, 100% are classified as retail (all trades under S$13.5K). No mixed or institutional trades in the current 1M window.",
      retail_heavy: "Retail dominates entirely; building any institutional or larger mixed flow could improve depth and reduce impact.",
      institutional_gap: "Institutional share is 0%; attracting larger, two-way interest would help liquidity over time.",
      peer_comparison: "You are among the most retail-heavy (ZB9, L23, SES, LMS, AWC, 5IF at 100% retail by count); 5CT, 1E3, and NEX have some mixed/institutional participation."
    },
    price_moving: {
      overall: "About 57% of trades moved the price. Retail orders dominate in both directions (~98–100% of price-moving trades).",
      interpretation: "A high share of trades move the price; with very low trade count, each trade has high marginal impact.",
      asymmetry: "Negative movers are on average larger than positive movers (median 3.1K vs 725 SGD).",
      by_trader_type: "Virtually all price-moving activity is retail, in both directions."
    },
    short_selling: {
      overall: "Short interest is 0% over 1M, 3M, and 6M. SBL lending pool is 549,605 shares (S$316K at latest price)—large vs ADV (6,816% of 20D ADV). If the entire pool were sold, estimated impact is limited (~0.32%). Short interest stable; YoY −100% (down from a small base in Feb 2025).",
      level: "0% (low short interest)",
      correlation: "N/A (no short variation)",
      trend: "Stable; YoY −100%",
      peaks: "None"
    },
    execution: {
      overall: "Trading cost from price impact is material: ~−6.6% for S$100K (55% fill), and similar impact for 1M/2.5M with low fill. A S$50K trade is about 57,000% of typical daily volume—the highest in the peer set (most difficult execution).",
      concern: "The main execution risk is very low depth and minimal ADV. Any meaningful order must be broken into tiny clips over many days or use auctions.",
      kyle: "Kyle's Lambda is 1.13% per S$10K traded—consistent with thin, impact-sensitive liquidity.",
      peer_context: "ZB9 has the worst 50K capacity in the peer set (~57,000% ADV). Next are LMS (463k%), SES (160k%), 5CT (61k%), L23 (40k%). Best are NEX (233%), 1E3 (357%)."
    },
    intraday: {
      overall: "Trading is highly concentrated: most volume is in continuous trading (~93%), with about 7.3% in auctions. The busiest times are 17:00 (13.7%), 14:00 (12%), and 16:30 (8.6%).",
      hhi_interpretation: "The concentration index (HHI) is 0.78—highly concentrated; liquidity clusters in a few buckets.",
      best_times: "The best windows for size are around 17:00, 14:00, and 16:30.",
      peer_ranking: "Your HHI is among the highest in the peer set (concentrated). 1E3 and SES have lower HHI (more spread-out volume)."
    },
    ofi: {
      overall: "Order flow is moderately one-sided (about 39% average absolute imbalance over 6 months). Imbalance and same-day returns have moderate positive correlation (+0.34)—imbalance can affect price. L2 order-book imbalance does not significantly predict mid-price.",
      daily_vs_intraday: "Daily order flow: 31% buy days, 13% sell days, 56% balanced. Correlation with returns is +0.34.",
      l2_signal: "L2 OFI does not significantly Granger-cause mid-price. No short-term predictive signal from the order book.",
      day_breakdown: "Over 3 months, balanced days (56%) dominate; net buying (31%) outnumbers net selling (13%)."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #312 of 562 (S$69M); FTSE size band Fledgling. Free float is 16.5%; velocity is 0.28%. STI requires top 30 rank; iEdge Next 50 top 80; FTSE All-Share top 98% cumulative mcap.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve market-cap rank and turnover for index eligibility. Free float (16.5%) is just above typical minimums; velocity is very low—initiatives that support turnover and two-way flow would help."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["ZB9", "5CT", "L23", "SES", "1E3", "NEX", "AWC", "5IF", "LMS"],
      scores: [23.48, 30.29, 36.74, 29.03, 77.60, 82.44, 16.31, 11.65, 24.55],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [87.75, 1638.5, 2480, 624.25, 279971.25, 429436, 0, 0, 216],
      total: 558
    },
    market_comparison: {
      sector_name: "Waste Management",
      sector_count: 6,
      market_count: 558,
      company: { volatility: 0, adv: 87.75, spread_pct: 0.03502, turnover_ratio: 7.68e-6, amihud: 2.54e-6, trades: 0.5 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.01102, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 2515175, median: 17956.5, min: 0, max: 243209838, p5: 0, p95: 10103622, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.304, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00359, median: 0.000389, min: 0, max: 0.705, p5: 0, p95: 0.0105, count: 552 },
        amihud: { direction: "lower_is_better", mean: 6.89e-5, median: 7.62e-8, min: 0, max: 0.0185, p5: 0, p95: 8.46e-5, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.01186, median: 0.00769, min: 0, max: 0.0333, p5: 0, p95: 0.0306, count: 6 },
        adv: { direction: "higher_is_better", mean: 119040, median: 2059.25, min: 87.75, max: 429436, p5: 221.88, p95: 392070, count: 6 },
        spread_pct: { direction: "lower_is_better", mean: 0.05291, median: 0.04653, min: 0.0123, max: 0.1312, p5: 0.0135, p95: 0.1144, count: 6 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.01657, median: 0.00019, min: 7.68e-6, max: 0.0859, p5: 3.16e-5, p95: 0.0677, count: 6 },
        amihud: { direction: "lower_is_better", mean: 2.25e-6, median: 1.78e-6, min: 3.68e-8, max: 5.25e-6, p5: 3.79e-8, p95: 5.09e-6, count: 6 },
        trades: { direction: "higher_is_better", mean: 24.25, median: 4, min: 0.5, max: 77, p5: 0.875, p95: 72.25, count: 6 }
      },
      peers: {
        volatility: { direction: "lower_is_better", mean: 0.00890, median: 0, min: 0, max: 0.0333, p5: 0, p95: 0.0295, count: 8 },
        adv: { direction: "higher_is_better", mean: 89296, median: 1131.375, min: 0, max: 429436, p5: 0, p95: 377123, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0646, median: 0.0540, min: 0.0123, max: 0.158, p5: 0.0139, p95: 0.149, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.0124, median: 0.000111, min: 0, max: 0.0859, p5: 0, p95: 0.0604, count: 8 },
        amihud: { direction: "lower_is_better", mean: 4.71e-6, median: 4.88e-6, min: 3.68e-8, max: 1.26e-5, p5: 3.84e-8, p95: 1.13e-5, count: 8 },
        trades: { direction: "higher_is_better", mean: 18.25, median: 2.75, min: 0, max: 77, p5: 0, p95: 70.35, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: -4.96, market: 5.57, sector: 1.57, peers: 1.99 },
      { horizon: "3M", stock: -8.73, market: 10.76, sector: -3.42, peers: -2.68 },
      { horizon: "6M", stock: -11.54, market: 16.87, sector: -4.66, peers: -1.40 },
      { horizon: "YTD", stock: -4.96, market: 5.57, sector: 1.57, peers: 1.99 }
    ],
    drivers: {
      share_market: 8.65,
      share_sector: 18.19,
      share_idio: 73.16,
      beta_market: 0.3563,
      beta_sector: 0.6503,
      r_squared: 9.94,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [0.1003, 0.00034, -0.0408, -0.1323, 0.0284, 0.1657, -0.0749, 0.0880, -0.1297, -0.1403, 0.2899],
        corr_sector: [0.0115, -0.0107, 0.0999, -0.0831, -0.1452, 0.3048, -0.0553, 0.0143, -0.0029, -0.0541, -0.0278],
        best: { market: 5, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 8.89, share_sector: 7.57, share_idio: 83.54 }, regression: { r_squared: 4.07 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 8.07, share_sector: 8.21, share_idio: 83.72 }, regression: { r_squared: 5.73 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 11.00, share_sector: 10.67, share_idio: 78.32 }, regression: { r_squared: 16.00 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 10.36, share_sector: 24.00, share_idio: 65.64 }, regression: { r_squared: 33.21 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 5.22, share_sector: 1.41, share_idio: 93.37 }, regression: { r_squared: 0.17 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 8.65, share_sector: 18.19, share_idio: 73.16 }, regression: { r_squared: 9.94 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [8.89, 8.07, 11.00, 10.36, 5.22, 8.65],
        sector: [7.57, 8.21, 10.67, 24.00, 1.41, 18.19],
        idio: [83.54, 83.72, 78.32, 65.64, 93.37, 73.16]
      },
      regime: {
        n_regimes: 2,
        labels: ["Low Vol", "High Vol"],
        pct_time: [0, 0],
        current_regime: 0,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 0, volatility: 1e-6, mean_ret_pct: 0, volatility_pct: 0, n_days: 0, pct_time: 0 },
          { id: 1, label: "High Vol", mean_ret: 0, volatility: 1e-6, mean_ret_pct: 0, volatility_pct: 0, n_days: 0, pct_time: 0 }
        ],
        transitions: [
          [0.6569, 0.3431],
          [0.5359, 0.4641]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.575, quantity: 9500, value: 5462.5 },
        { level: 2, price: 0.57, quantity: 21100, value: 12027 },
        { level: 3, price: 0.555, quantity: 20000, value: 11100 },
        { level: 4, price: 0.525, quantity: 30000, value: 15750 },
        { level: 5, price: 0.52, quantity: 21000, value: 10920 }
      ],
      asks: [
        { level: 1, price: 0.59, quantity: 15000, value: 8850 },
        { level: 2, price: 0.6, quantity: 300, value: 180 },
        { level: 3, price: 0.605, quantity: 900, value: 544.5 },
        { level: 4, price: 0.615, quantity: 6000, value: 3690 },
        { level: 5, price: 0.65, quantity: 7500, value: 4875 },
        { level: 6, price: 0.69, quantity: 25000, value: 17250 },
        { level: 7, price: 0.7, quantity: 24000, value: 16800 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 56980,
      peers: [
        { ticker: "NEX", pct: 232.9 },
        { ticker: "1E3", pct: 357.2 },
        { ticker: "L23", pct: 40323 },
        { ticker: "5CT", pct: 61031 },
        { ticker: "SES", pct: 160192 },
        { ticker: "LMS", pct: 462963 },
        { ticker: "AWC", pct: null },
        { ticker: "5IF", pct: null }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 31,
      first_trade_date: "2026-01-02",
      last_trade_date: "2026-01-26",
      period_days: 24,
      thresholds: { retail_max: 13500, instit_min: 67500 },
      composition: {
        retail_pct: 1,
        mixed_pct: 0,
        instit_pct: 0,
        retail_qty_pct: 1,
        mixed_qty_pct: 0,
        instit_qty_pct: 0,
        retail_notional_pct: 1,
        mixed_notional_pct: 0,
        instit_notional_pct: 0
      },
      trade_size: { avg: 1403.5967741935483, median: 354 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 31, retail_pct: 1, mixed_pct: 0, instit_pct: 0, avg_trade_size: 1403.5967741935483, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, total_quantity: 73500 },
          { month: "2025-12", n_trades: 42, retail_pct: 1, mixed_pct: 0, instit_pct: 0, avg_trade_size: 2991.75, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, total_quantity: 215600 },
          { month: "2025-11", n_trades: 19, retail_pct: 1, mixed_pct: 0, instit_pct: 0, avg_trade_size: 2017.2368421052631, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, total_quantity: 62800 },
          { month: "2025-10", n_trades: 47, retail_pct: 0.9362, mixed_pct: 0.0638, instit_pct: 0, avg_trade_size: 3384.6170212765956, retail_qty_pct: 0.598, mixed_qty_pct: 0.402, instit_qty_pct: 0, total_quantity: 258200 },
          { month: "2025-09", n_trades: 33, retail_pct: 1, mixed_pct: 0, instit_pct: 0, avg_trade_size: 2330.318181818182, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, total_quantity: 127600 },
          { month: "2025-08", n_trades: 13, retail_pct: 0.9231, mixed_pct: 0.0769, instit_pct: 0, avg_trade_size: 3376.3076923076924, retail_qty_pct: 0.5526, mixed_qty_pct: 0.4474, instit_qty_pct: 0, total_quantity: 72200 }
        ]
      },
      peer_comparison: [
        { ticker: "ZB9", currency: "SGD", is_target: true, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 1403.5967741935483, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "L23", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 586.35, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "SES", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 2475.23, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "LMS", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 1159.14, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "AWC", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 1178.19, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5IF", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 1495.73, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5CT", currency: "SGD", is_target: false, retail_pct: 0.9649, mixed_pct: 0.0351, instit_pct: 0, retail_qty_pct: 0.7757, mixed_qty_pct: 0.2243, instit_qty_pct: 0, retail_notional_pct: 0.7671, mixed_notional_pct: 0.2329, instit_notional_pct: 0, avg_trade_size: 2583.53, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "1E3", currency: "SGD", is_target: false, retail_pct: 0.8706, mixed_pct: 0.1154, instit_pct: 0.0140, retail_qty_pct: 0.2815, mixed_qty_pct: 0.5061, instit_qty_pct: 0.2125, retail_notional_pct: 0.2806, mixed_notional_pct: 0.5055, instit_notional_pct: 0.2140, avg_trade_size: 6094.61, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "NEX", currency: "SGD", is_target: false, retail_pct: 0.7565, mixed_pct: 0.2332, instit_pct: 0.0104, retail_qty_pct: 0.3284, mixed_qty_pct: 0.5554, instit_qty_pct: 0.1162, retail_notional_pct: 0.3262, mixed_notional_pct: 0.5519, instit_notional_pct: 0.1219, avg_trade_size: 10723.11, thresholds: { retail_max: 13500, instit_min: 67500 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 184,
      price_moving_trades: 105,
      pct_price_moving: 57.065217391304344,
      all_movers: { count: 105, avg_size: 2675.504761904762, median_size: 1755, retail_count: 104, mixed_count: 1, institutional_count: 0, retail_pct: 99.05, mixed_pct: 0.95, instit_pct: 0 },
      positive_movers: { count: 52, avg_size: 2204.93, median_size: 725.25, retail_count: 51, mixed_count: 1, institutional_count: 0, retail_pct: 98.08, mixed_pct: 1.92, instit_pct: 0 },
      negative_movers: { count: 53, avg_size: 3137.20, median_size: 3125, retail_count: 53, mixed_count: 0, institutional_count: 0, retail_pct: 100, mixed_pct: 0, instit_pct: 0 }
    },
    short_selling: {
      data_available: true,
      security_name: "UnionSteel",
      mapping: { ticker_to_security: "UnionSteel", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } }
      },
      correlation: { valid: true, correlation: null, interpretation: "Positive - unusual (shorts during up days?)" },
      peaks: [],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0 },
          { month: "2025-12", avg_short_ratio: 0 },
          { month: "2025-11", avg_short_ratio: 0 },
          { month: "2025-10", avg_short_ratio: 0 },
          { month: "2025-09", avg_short_ratio: 0 },
          { month: "2025-08", avg_short_ratio: 0 },
          { month: "2025-07", avg_short_ratio: 0 },
          { month: "2025-06", avg_short_ratio: 0 },
          { month: "2025-05", avg_short_ratio: 0 },
          { month: "2025-04", avg_short_ratio: 0 },
          { month: "2025-03", avg_short_ratio: 0 },
          { month: "2025-02", avg_short_ratio: 0.00462 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0, change_pct: null },
          { month: "2025-11", avg_short_ratio: 0, change_pct: null },
          { month: "2025-10", avg_short_ratio: 0, change_pct: null },
          { month: "2025-09", avg_short_ratio: 0, change_pct: null },
          { month: "2025-08", avg_short_ratio: 0, change_pct: null },
          { month: "2025-07", avg_short_ratio: 0, change_pct: null },
          { month: "2025-06", avg_short_ratio: 0, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0, change_pct: null },
          { month: "2025-04", avg_short_ratio: 0, change_pct: null },
          { month: "2025-03", avg_short_ratio: 0, change_pct: null },
          { month: "2025-02", avg_short_ratio: 0.00462, change_pct: null }
        ],
        interpretation: "Short interest stable | YoY: -100% ⬇️"
      },
      sbl_pool: {
        valid: true,
        lending_pool: 549605,
        lending_pool_value: 316022.875,
        latest_price: 0.575,
        lending_rate_pct: 2.8,
        borrowing_rate_pct: 4.0,
        pool_as_pct_adv: 6816.101694915254,
        days_to_liquidate: 68.16101694915254,
        estimated_impact_pct: 0.0031602287499999998,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Limited price impact if entire pool sold",
        timestamp: ""
      },
      peer_comparison: [
        { ticker: "ZB9", avg_short_ratio: 0, max_short_ratio: 0, is_target: true },
        { ticker: "NEX", avg_short_ratio: 0.00011, max_short_ratio: 0.0194, is_target: false },
        { ticker: "5CT", avg_short_ratio: 0.00031, max_short_ratio: 0.0315, is_target: false },
        { ticker: "SES", avg_short_ratio: 0.00096, max_short_ratio: 0.1141, is_target: false },
        { ticker: "1E3", avg_short_ratio: 0.00221, max_short_ratio: 0.1048, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0, short_vol: 0, total_vol: 29600, close: 0.575, return: -0.01709 },
          { date: "2026-01-26", short_ratio: 0, short_vol: 0, total_vol: 7100, close: 0.585, return: 0 },
          { date: "2026-01-21", short_ratio: 0, short_vol: 0, total_vol: 300, close: 0.585, return: -0.00847 },
          { date: "2026-01-16", short_ratio: 0, short_vol: 0, total_vol: 1000, close: 0.59, return: 0.00855 },
          { date: "2026-01-15", short_ratio: 0, short_vol: 0, total_vol: 10800, close: 0.585, return: 0 },
          { date: "2025-09-26", short_ratio: 0, short_vol: 0, total_vol: 25200, close: 0.615, return: null }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0, continuous: 0.9951, closing: 0, auctions: 0.00492, other: 0 },
        "3M": { opening: 0.00336, continuous: 0.9208, closing: 0.0739, auctions: 0.0792, other: 0 },
        "6M": { opening: 0.0158, continuous: 0.9271, closing: 0.0493, auctions: 0.0729, other: 0 }
      },
      hhi: { "1M": 0.5864, "3M": 0.7651, "6M": 0.7831 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0733 },
        { time: "09:00", avg_share: 0.0574 },
        { time: "09:30", avg_share: 0.0151 },
        { time: "10:00", avg_share: 0.028 },
        { time: "10:30", avg_share: 0.0391 },
        { time: "11:00", avg_share: 0.0458 },
        { time: "11:30", avg_share: 0.0644 },
        { time: "12:30", avg_share: 0.0496 },
        { time: "13:00", avg_share: 0.0733 },
        { time: "13:30", avg_share: 0.042 },
        { time: "14:00", avg_share: 0.12 },
        { time: "14:30", avg_share: 0.0281 },
        { time: "15:00", avg_share: 0.0411 },
        { time: "15:30", avg_share: 0.065 },
        { time: "16:00", avg_share: 0.0351 },
        { time: "16:30", avg_share: 0.0863 },
        { time: "17:00", avg_share: 0.1365 }
      ],
      peers_hhi_rows: [
        { ticker: "ZB9", auctions_pct: 5.00, hhi: 0.7404, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300", you: true } },
        { ticker: "5CT", auctions_pct: 6.26, hhi: 0.5198, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "L23", auctions_pct: 6.30, hhi: 0.6852, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "SES", auctions_pct: 5.96, hhi: 0.4412, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "1E3", auctions_pct: 6.33, hhi: 0.4219, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "NEX", auctions_pct: 8.73, hhi: 0.6075, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "AWC", auctions_pct: 8.56, hhi: 0.8440, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5IF", auctions_pct: 2.39, hhi: 0.7136, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "LMS", auctions_pct: 11.20, hhi: 0.7117, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "39.5%", note_suffix: " - 6-month average absolute OFI (moderately one-sided)." },
        { value: "0.34", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "Not significant", note_suffix: " - L2 OFI Granger-causality not significant." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "+18.0%", avg_abs: "40.1%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "+16.9%", avg_abs: "36.4%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "+15.5%", avg_abs: "39.5%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.34",
      pie: { net_buy_days: 30.88, net_sell_days: 13.24, balanced_days: 55.88 },
      l2_compact_text: "Over the last 7 days we analyzed 50 valid L2 snapshots. Granger causality: OFI% does not significantly predict mid-price changes. No short-term predictive signal from the order book.",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2026-01-30", ofi: "−100%", direction: "SELL pressure", return: "−1.71%" },
        { date: "2025-04-07", ofi: "−100%", direction: "SELL pressure", return: "−8.91%" },
        { date: "2025-06-02", ofi: "+100%", direction: "BUY pressure", return: "+6.09%" },
        { date: "2025-05-29", ofi: "+100%", direction: "BUY pressure", return: "+2.68%" },
        { date: "2025-10-14", ofi: "−100%", direction: "SELL pressure", return: "−3.23%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#312 of 562", sub: "S$69.1M • Fledgling" },
        { title: "Free Float", value: "16.5%", sub: "Float mcap S$11.4M" },
        { title: "Avg Daily Turnover", value: "S$762", sub: "Velocity 0.28%" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #312 — outside top 30", gaps: ["Need rank ≤30 (currently 312)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.7%)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #312 — below top 80", gaps: ["Need rank ≤80 (currently 312)"] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #312 of 562 (S$69M); FTSE size band Fledgling. Free float is 16.5%; velocity is 0.28%. STI requires top 30; iEdge Next 50 top 80; FTSE All-Share top 98% cumulative mcap.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently 312) for STI (top 30) or iEdge Next 50 (top 80)", "Grow turnover; velocity is very low (0.28%). Maintain free float (16.5%) for index criteria"]
    }
  }
};

export default REPORT_DATA;
