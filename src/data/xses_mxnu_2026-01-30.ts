// @ts-nocheck

// ============================================================================
// EliteUKREIT GBP (MXNU) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// REIT - Office small cap; GBP-denominated. Moderate liquidity (rank 195/558),
// company-driven price moves (70%), best 50K execution in peer set (41% ADV).
// Order flow one-sided; L2 OFI not predictive. Low short interest; SBL pool
// ~619% ADV (moderate impact if fully sold). Not eligible for major indices.
// ============================================================================

import type { ReportData } from '@/types/report';

export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector (REIT - Office), then industry (Real Estate)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "MXNU", name: "EliteUKREIT GBP", marketCap: "S$213.9M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "UD1U", name: "IREIT Global SGD", marketCap: "S$403.5M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "BTOU", name: "ManulifeReit USD", marketCap: "S$131.5M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "CMOU", name: "KepPacOakReitUSD", marketCap: "S$240.2M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "OXMU", name: "Prime US ReitUSD", marketCap: "S$260.3M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "8U7U", name: "IREIT Global EUR", marketCap: "S$255.5M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "ODBU", name: "UtdHampshReitUSD", marketCap: "S$315.5M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "LJ3", name: "OUE", marketCap: "S$878.8M", sector: "Real Estate - Diversified", industry: "Real Estate" },
    { ticker: "5F4", name: "Figtree", marketCap: "S$18.7M", sector: "Real Estate - Development", industry: "Real Estate" }
  ]
};

export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "MXNU",
    company: "EliteUKREIT GBP",
    asof_date: "2026-01-30",
    industry: "Real Estate",
    sector: "REIT - Office",
    market_cap_display: "213.9M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400", dot: "bg-amber-500" },
      liq_section: { text: "Liquidity score: 65.2 — MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "BEST 50K in peers (41% ADV)", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "CONCENTRATED (HHI 0.36)", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided • L2 not predictive", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "Low short • SBL pool large", bg: "bg-amber-500/20", textColor: "text-amber-400" },
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
    action_plan_subtitle: "Practical actions to support liquidity and monitor risk",
    action_plan_icon: "",
    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar REIT - Office names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "MXNU has moderate liquidity (score 65.2, rank 195/558): ADV ~£121K, 24 trades/day, spread 1.4%. Best execution in the peer set—a £50K trade is 41% of ADV. Price moves are 70% company-specific, 27% market, 4% sector; 3 regimes (current: Low Vol). Order flow one-sided (|OFI| ~58%); L2 OFI does not predict price. Short interest 0%; SBL pool ~619% ADV.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 70% of price moves are company-specific, 27% market, 4% sector (two-factor regression, R² 9.7%). Fama-French suggests large-cap behaviour (β_SMB −0.24)." },
      { title: "Market Link", text: "Market β −0.63; correlation −0.30 (contemporaneous). Volatility Granger: market/sector stress do not significantly predict stock volatility (ρ 0.14)." },
      { title: "Sector Link", text: "Sector β 0.37; stock leads sector by 3 days at best correlation. REIT - Office sector contributes 3.5% of explained variance." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Company share has dominated across rolling windows (68–90%); market and sector vary.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Market is contemporaneous; stock leads sector by 3 days.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Six rolling windows show company share 68–90%; market 0.6–27%; sector 3.5–23%.",
    drivers_bottom_line: "Takeaway: Your stock is company-driven. No significant market or sector causality in any regime.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Spread (1.4%) is in line or tighter than peer median—limit orders are appropriate.",
      "A £50K trade is 41% of ADV—best capacity in the REIT - Office peer set.",
      "SBL lending pool is large (~619% ADV); if entire pool sold, estimated impact ~0.67%. Monitor for covering risk."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Low Vol (current)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Medium Vol", "High Vol"],
    transition_note_template: "3-regime model. From Low Vol: 60% stay, 23% → Medium, 17% → High.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread ~1.4%. 10 bid/10 ask levels. £100K sell impact −0.70%; £1M–£2.5M −3.24%. Kyle's Lambda 0.024% per £10K.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "MXNU has the best 50K-as-%-of-ADV in the peer set (41%—moderate). Peers range from OXMU 349% to 8U7U inf%.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book.",
    exec_check_insight: "Execution is best in peer set for 50K (41% ADV). Impact low for 100K (−0.7%); 1M–2.5M −3.24%. SBL pool large—monitor for stress.",
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under £7,900",
    trader_mixed_threshold: "Mixed: Trades £7,900 – £39,500",
    trader_instit_threshold: "Institutional: Trades over £39,500",
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail vs mixed vs institutional across comparable names",
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes",
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most volume in continuous (~88–92%); auctions ~8–12%. Peak buckets 16:30 (8.8%), 09:00 (8.7%), 16:00 (8.6%).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "Your value: {value} (concentrated—liquidity clusters in time).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Volume concentrated in afternoon and open; best windows 16:30, 09:00, 16:00.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "MXNU HHI is in the concentrated range; OXMU and BTOU have lower HHI (more spread).",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does order flow predict price?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3M Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 OFI → mid-price" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow is one-sided (3M avg |OFI| ~58%). Net selling days 56%, net buying 40%. OFI–return correlation +0.25 (moderate positive). L2 OFI does not significantly predict mid-price.",
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
    short_subtitle: "Short interest and SBL lending pool (when available)",
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  content: {
    exec_metrics: [
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact. Higher is better." }, value: "65.2", suffix: "/100", bar_pct: 65, color_value: "text-amber-400", color_bar: "text-amber-500", subtext: "Rank 195/558 • In line with peers", interpretation: { text: "MODERATE", cls: "interpretation-neutral", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "1.40", suffix: "%", bar_pct: 2, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "Tighter than peer median (~1.6%)", interpretation: { text: "LOW", cls: "interpretation-good", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "121K", suffix: "GBP", bar_pct: 55, color_value: "text-amber-400", color_bar: "text-amber-500", subtext: "Above peer median (~£75K)", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "69.7", suffix: "% company", bar_pct: 70, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 26.8% • Sector: 3.5%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "MXNU has moderate liquidity (PCA score 65.2, rank 195/558): ADV ~£121K, 24 trades/day, spread 1.4%. Best execution in the REIT - Office peer set—a £50K trade is 41% of ADV.",
      "Sell impact: −0.70% for £100K, −3.24% for £1M–£2.5M. Order flow is one-sided (|OFI| ~58%); 56% net selling days. L2 order-book OFI does not significantly predict mid-price. Kyle's Lambda 0.024% per £10K.",
      "Price moves 70% company, 27% market, 4% sector (R² 9.7%); behaves like large cap. Three regimes; current Low Vol. Short interest 0%; SBL pool 1.87M shares (~619% ADV, ~0.67% impact if fully sold). Not eligible for major indices (rank #215, Fledgling)."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Monitor SBL lending pool and execution", bullets: ["Pool is ~619% of ADV; if entire pool were sold, estimated impact ~0.67%. Track pool size and short interest monthly.", "You have the best 50K capacity in the peer set (41% ADV). Maintain two-way flow and visibility."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-slate-500/20", text: "text-slate-400", textColor: "text-slate-400", dot: "bg-slate-500" },
          items: [
            { title: "Lead with company narrative", bullets: ["About 70% of price moves are company-specific. Emphasise results, guidance, and fundamentals in IR."] },
            { title: "Use order-flow context", bullets: ["Order flow is one-sided and correlates with same-day returns (+0.25). Use extreme imbalance days as context for timing."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #215 of 562—need top 30 for STI, top 80 for iEdge Next 50. Velocity 8.3%; free float data unavailable."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "24", sub: "Below peer median (~45)", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "◆" } },
      { title: "Spread vs Peers", value: "1.4%", sub: "Tighter than peer median (~1.6%)", interp: { text: "GOOD", cls: "interpretation-good", icon: "◆" } },
      { title: "50K as % ADV", value: "41%", sub: "Best in peer set", interp: { text: "BEST IN PEERS", cls: "interpretation-good", icon: "◆" } }
    ],
    liq_insight: "Liquidity is moderate versus peers: ADV ~£121K (about 61% above peer median £75K), spread 1.4% (tighter than median 1.6%), 24 trades/day (below median 45). Execution for size is the best in the set—a £50K clip is 41% of ADV. Turnover ratio below peer median. Main risk to monitor is the large SBL pool.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.3575", note: "GBP (snapshot)", color: "text-white" },
      { title: "Spread", value: "1.40%", note: "Low cost", color: "text-emerald-400" },
      { title: "Depth", value: "Good", note: "10 bid levels, 10 ask levels", color: "text-emerald-400" }
    ],
    impact_summary_cards: [
      { title: "£100K Sell", text: "Price impact: −0.70% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "£1.0M Sell", text: "Price impact: −3.24% • Fill: 34% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "£2.5M Sell", text: "Price impact: −3.24% • Fill: 13.6% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided (58%)" },
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate +0.25" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "MXNU has moderate liquidity (PCA score 65.2, rank 195/558). ADV ~£121K is above peer median (£75K); spread 1.4% is tighter than peers (~1.6%). Trade count (24/day) is below peer median (45). Best execution capacity in the REIT - Office peer set—£50K is 41% of ADV.",
      strengths: ["Best 50K capacity in the peer set (41% ADV).", "Spread tighter than peer median (1.4% vs ~1.6%).", "ADV above peer median."],
      concerns: ["Order flow one-sided (|OFI| ~58%); net selling days (56%) outnumber net buying (40%).", "SBL lending pool is large (~619% ADV); covering could add pressure in stress.", "Trading concentration (HHI) is high—liquidity clusters in time."],
      peer_context: "MXNU leads on 50K capacity (41%). OXMU, CMOU, BTOU, ODBU, UD1U, LJ3, 5F4 all have 50K >100% ADV; 8U7U has no ADV. OXMU and BTOU have more balanced order flow and lower HHI."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is £121K—above peer median (£75K) and market median (£10K).", vs_market: "Market median ~£10K; you are well above.", vs_sector: "Sector median ~£177K; you are below.", vs_peers: "Peer median £75K; you are about 61% higher." },
      spread: { insight: "Spread is 1.4%—tighter than peer median (~1.6%) and market median (~2.2%).", vs_market: "Market median ~2.2%; you are tighter.", vs_sector: "Sector median ~1.4%; you are in line.", vs_peers: "Peer median ~1.6%; you are about 11% tighter." },
      volatility: { insight: "Daily volatility is 1.4%—above peer median (1.0%) and sector (0.8%).", vs_market: "Market median ~0.6%; you are higher.", vs_sector: "Sector median ~0.8%; you are higher.", vs_peers: "Peer median ~1.0%; your volatility is about 41% higher." },
      trades: { insight: "You have about 24 trades per day—below peer median (~45).", vs_market: "Market median ~10; you are higher.", vs_sector: "Sector median ~82; you are lower.", vs_peers: "Peer median ~45; you are about 48% lower." }
    },
    performance: {
      overall: "Returns are flat over 1M and 3M, +2.9% over 6M. Market and peers are up over 1M/3M. Liquidity is moderate and execution capacity is best in peer set; main item to watch is SBL pool size.",
      ytd: { stock: "0.0%", market: "+5.57%", sector: "+0.45%", peers: "+1.20%", insight: "YTD you are flat; market and peers are up." },
      three_month: { stock: "0.0%", market: "+10.76%", sector: "−2.40%", peers: "−0.59%", insight: "Over 3 months you are flat; market up, sector and peers down." },
      six_month: { stock: "+2.86%", market: "+16.87%", sector: "+0.71%", peers: "+4.59%", insight: "Over 6 months you are up modestly; market and peers up more." },
      conclusion: "Trading conditions support execution (best 50K in peers). Monitor SBL pool and short interest."
    },
    drivers: {
      overall: "About 70% of price moves are company-specific, 27% market, 4% sector (two-factor R² 9.7%). β_market −0.63, β_sector 0.37; Fama-French suggests large-cap behaviour (β_SMB −0.24).",
      interpretation: "Company news and fundamentals drive most moves; market has moderate influence, sector minimal. No significant Granger causality in any regime. Stock leads sector by 3 days.",
      rolling_change: "Over six rolling windows, company share 68–90%; market 0.6–27%; sector 3.5–23%.",
      beta: "β_market −0.63, β_sector 0.37 (two-factor); β_mkt −0.61, β_SMB −0.24 (Fama-French)."
    },
    regime: {
      overall: "Three regimes: Low Vol (52%), Medium Vol (26%), High Vol (21%). Current regime: Low Vol (σ≈0%). No significant market or sector causality in any regime.",
      current: "Low Vol",
      transitions: "From Low Vol: 60% stay, 23% → Medium Vol, 17% → High Vol. From Medium: 45% → Low, 9% stay, 46% → High. From High: 44% → Low, 56% → Medium, 0% stay.",
      trading_implications: "In Low Vol regime; transitions are spread. Use company news and order flow for context."
    },
    trader_composition: {
      overall: "By trade count, 78.1% retail, 19.1% mixed, 2.8% institutional. By value (notional), 16.3% retail, 56.4% mixed, 27.3% institutional—mixed and institutional account for most volume.",
      retail_heavy: "Retail dominates trade count; mixed and institutional account for the majority of value traded.",
      institutional_gap: "Institutional share of value is 27.3%—meaningful for a small cap; ODBU, OXMU, CMOU have higher institutional participation.",
      peer_comparison: "By value, MXNU is institutional/mixed (16.3% retail, 56.4% mixed, 27.3% instit); 5F4, LJ3, UD1U are more retail by value; ODBU, OXMU, CMOU are more institutional."
    },
    price_moving: {
      overall: "About 25.5% of trades moved the price. Retail and mixed dominate; negative movers are on average larger than positive (7.1K vs 5.4K).",
      interpretation: "A moderate share of trades move the price; negative movers tend to be larger.",
      asymmetry: "Negative movers avg ~1.3× larger than positive movers.",
      by_trader_type: "Positive movers: 82.8% retail, 15.2% mixed, 2.0% instit. Negative movers: 78.3% retail, 17.9% mixed, 3.8% instit."
    },
    short_selling: {
      overall: "Short interest is 0% over 1M, 3M, and 6M. SBL lending pool: 1.87M shares (~S$672K), 619% of 20D ADV. If entire pool were sold, estimated impact ~0.67% (moderate). Lending rate 1.22%, borrowing 1.75%. Granger test (shorts → price) not significant.",
      level: "0% (low short interest)",
      correlation: "N/A (insufficient variation)",
      trend: "Stable; historical spike in Jun 2025 (4.3%) then back to 0%.",
      peaks: "None recently."
    },
    execution: {
      overall: "Execution is best in peer set for 50K (41% ADV). £100K sell impact −0.70%, £1M–£2.5M −3.24%. Kyle's Lambda 0.024% per £10K. Deep book (10/10 levels).",
      concern: "SBL pool is large (~619% ADV); monitor for covering risk. Day-to-day execution cost is low.",
      kyle: "Kyle's Lambda: 0.0243% per £10K traded.",
      peer_context: "MXNU has the best 50K capacity (41% ADV). Next: OXMU 349%, CMOU 815%, BTOU 1108%; others much higher."
    },
    intraday: {
      overall: "Trading is concentrated: 88–92% continuous, 8–12% auctions. HHI ~0.36–0.38 (concentrated). Peak buckets 16:30 (8.8%), 09:00 (8.7%), 16:00 (8.6%).",
      hhi_interpretation: "HHI in concentrated range—liquidity clusters in a few time buckets.",
      best_times: "Best windows for size: 16:30, 09:00, 16:00, 10:30.",
      peer_ranking: "MXNU HHI is in the concentrated range; OXMU (0.19) and BTOU (0.22) have lower HHI; 5F4, ODBU, 8U7U are more concentrated."
    },
    ofi: {
      overall: "Order flow is one-sided (avg |OFI| ~58% over 3M). Net selling days 55.9%, net buying 39.7%, balanced 4.4%. OFI–return correlation +0.25 (moderate positive). L2 OFI does not significantly predict mid-price (p≈0.60).",
      daily_vs_intraday: "Daily order flow correlates with returns (+0.25). Intraday L2 OFI does not Granger-cause mid-price.",
      l2_signal: "Over 209 L2 snapshots (last 7 days), OFI% does not significantly predict mid-price (p≈0.60).",
      day_breakdown: "Over 3 months: 39.7% net buying days, 55.9% net selling, 4.4% balanced."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #215 of 562 (S$214M); FTSE size band Fledgling. Float and velocity (8.3%) from data; avg daily turnover S$70K. STI requires top 30; iEdge Next 50 top 80; FTSE All-Share top 98% mcap. FTSE Fledgling eligible.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve market-cap rank (currently 215) for STI (top 30) or iEdge Next 50 (top 80). Free float data unavailable; velocity 8.3%."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["MXNU", "UD1U", "BTOU", "CMOU", "OXMU", "8U7U", "ODBU", "LJ3", "5F4"],
      scores: [65.23, 66.13, 68.82, 69.53, 78.67, 16.85, 61.65, 67.20, 65.59],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [121019.5, 73488.26, 90219.69, 122676.58, 286618.14, 0, 77185.71, 71495.33, 25615.16],
      total: 558
    },
    market_comparison: {
      sector_name: "REIT - Office",
      sector_count: 10,
      market_count: 558,
      company: { volatility: 0.0137, adv: 121019.5, spread_pct: 0.0140, turnover_ratio: 0.000571, amihud: 7.02e-8, trades: 23.5 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.0110, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 1448746, median: 10341.3, min: 0, max: 140066682, p5: 0, p95: 5818765, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.304, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00360, median: 0.000390, min: 0, max: 0.705, p5: 0, p95: 0.0105, count: 553 },
        amihud: { direction: "lower_is_better", mean: 0.000120, median: 1.32e-7, min: 0, max: 0.0322, p5: 0, p95: 0.000147, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.00824, median: 0.00761, min: 0, max: 0.0217, p5: 0, p95: 0.0181, count: 10 },
        adv: { direction: "higher_is_better", mean: 2565807, median: 176505, min: 0, max: 11662748, p5: 33070, p95: 9791169, count: 10 },
        spread_pct: { direction: "lower_is_better", mean: 0.0155, median: 0.0138, min: 0.00450, max: 0.0442, p5: 0.00476, p95: 0.0344, count: 10 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00218, median: 0.00116, min: 0, max: 0.00559, p5: 0.000257, p95: 0.00504, count: 10 },
        amihud: { direction: "lower_is_better", mean: 3.30e-8, median: 3.49e-8, min: 0, max: 8.40e-8, p5: 0, p95: 7.85e-8, count: 9 },
        trades: { direction: "higher_is_better", mean: 857.45, median: 82.25, min: 0, max: 3076, p5: 10.58, p95: 2958.5, count: 10 }
      },
      peers: {
        volatility: { direction: "lower_is_better", mean: 0.0127, median: 0.00971, min: 0, max: 0.0385, p5: 0, p95: 0.0326, count: 8 },
        adv: { direction: "higher_is_better", mean: 93412, median: 75337, min: 0, max: 286618, p5: 8965, p95: 229239, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0200, median: 0.0157, min: 0.00957, max: 0.0442, p5: 0.00963, p95: 0.0391, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00187, median: 0.00105, min: 0, max: 0.00674, p5: 4.95e-5, p95: 0.00591, count: 8 },
        amihud: { direction: "lower_is_better", mean: 2.33e-7, median: 8.07e-8, min: 0, max: 1.26e-6, p5: 1.18e-8, p95: 9.12e-7, count: 7 },
        trades: { direction: "higher_is_better", mean: 47.75, median: 45, min: 0, max: 110.5, p5: 6.48, p95: 102.98, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: 0, market: 5.57, sector: 0.45, peers: 1.20 },
      { horizon: "3M", stock: 0, market: 10.76, sector: -2.40, peers: -0.59 },
      { horizon: "6M", stock: 2.86, market: 16.87, sector: 0.71, peers: 4.59 },
      { horizon: "YTD", stock: 0, market: 5.57, sector: 0.45, peers: 1.20 }
    ],
    drivers: {
      share_market: 26.84,
      share_sector: 3.50,
      share_idio: 69.65,
      beta_market: -0.626,
      beta_sector: 0.371,
      r_squared: 9.68,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.101, 0.188, -0.141, -0.130, 0.200, -0.299, 0.269, -0.100, 0.106, 0.039, -0.249],
        corr_sector: [-0.153, 0.241, -0.315, -0.062, 0.193, -0.004, 0.154, -0.251, 0.024, -0.005, 0.057],
        best: { market: 0, sector: -3 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 0.58, share_sector: 19.60, share_idio: 79.82 }, regression: { r_squared: 7.84 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 1.82, share_sector: 12.52, share_idio: 85.66 }, regression: { r_squared: 3.36 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 9.53, share_sector: 22.60, share_idio: 67.87 }, regression: { r_squared: 35.88 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 9.04, share_sector: 17.00, share_idio: 73.98 }, regression: { r_squared: 10.72 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 4.66, share_sector: 5.33, share_idio: 90.01 }, regression: { r_squared: 0.46 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 26.84, share_sector: 3.50, share_idio: 69.65 }, regression: { r_squared: 9.68 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [0.58, 1.82, 9.53, 9.04, 4.66, 26.84],
        sector: [19.60, 12.52, 22.60, 17.00, 5.33, 3.50],
        idio: [79.82, 85.66, 67.87, 73.98, 90.01, 69.65]
      },
      regime: {
        n_regimes: 3,
        labels: ["High Vol", "Medium Vol", "Low Vol"],
        pct_time: [21.43, 26.19, 52.38],
        current_regime: 2,
        regimes: [
          { id: 0, label: "High Vol", mean_ret: -0.01408, volatility: 0.000298, mean_ret_pct: -1.41, volatility_pct: 0.03, n_days: 27, pct_time: 21.43 },
          { id: 1, label: "Medium Vol", mean_ret: 0.01408, volatility: 0.000290, mean_ret_pct: 1.41, volatility_pct: 0.03, n_days: 33, pct_time: 26.19 },
          { id: 2, label: "Low Vol", mean_ret: 0, volatility: 1e-6, mean_ret_pct: 0, volatility_pct: 0, n_days: 66, pct_time: 52.38 }
        ],
        transitions: [
          [0.598, 0.230, 0.172],
          [0.447, 0.090, 0.463],
          [0.441, 0.559, 1.8e-7]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.355, quantity: 382100, value: 135645.5 },
        { level: 2, price: 0.35, quantity: 331300, value: 115955 },
        { level: 3, price: 0.345, quantity: 147100, value: 50749.5 },
        { level: 4, price: 0.34, quantity: 27800, value: 9452 },
        { level: 5, price: 0.335, quantity: 19000, value: 6365 },
        { level: 6, price: 0.33, quantity: 2000, value: 660 },
        { level: 7, price: 0.32, quantity: 30000, value: 9600 },
        { level: 8, price: 0.3, quantity: 12300, value: 3690 },
        { level: 9, price: 0.28, quantity: 1000, value: 280 },
        { level: 10, price: 0.25, quantity: 30000, value: 7500 }
      ],
      asks: [
        { level: 1, price: 0.36, quantity: 588000, value: 211680 },
        { level: 2, price: 0.365, quantity: 171200, value: 62488 },
        { level: 3, price: 0.37, quantity: 57200, value: 21164 },
        { level: 4, price: 0.375, quantity: 48500, value: 18187.5 },
        { level: 5, price: 0.38, quantity: 6800, value: 2584 },
        { level: 6, price: 0.385, quantity: 2400, value: 924 },
        { level: 7, price: 0.39, quantity: 76000, value: 29640 },
        { level: 8, price: 0.4, quantity: 35500, value: 14200 },
        { level: 9, price: 0.41, quantity: 300, value: 123 },
        { level: 10, price: 0.44, quantity: 700, value: 308 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 41,
      peers: [
        { ticker: "OXMU", pct: 348.9 },
        { ticker: "CMOU", pct: 815.2 },
        { ticker: "BTOU", pct: 1108.4 },
        { ticker: "ODBU", pct: 1295.6 },
        { ticker: "UD1U", pct: 1360.8 },
        { ticker: "LJ3", pct: 1398.7 },
        { ticker: "5F4", pct: 3903.9 },
        { ticker: "8U7U", pct: null }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "GBP",
      n_trades: 388,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 7900, instit_min: 39500 },
      composition: {
        retail_pct: 0.781,
        mixed_pct: 0.191,
        instit_pct: 0.028,
        retail_qty_pct: 0.163,
        mixed_qty_pct: 0.564,
        instit_qty_pct: 0.273,
        retail_notional_pct: 0.163,
        mixed_notional_pct: 0.564,
        instit_notional_pct: 0.274
      },
      trade_size: { avg: 6286.11, median: 887.5 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 384, retail_pct: 0.784, mixed_pct: 0.188, instit_pct: 0.029, avg_trade_size: 6242.56, retail_qty_pct: 0.165, mixed_qty_pct: 0.557, instit_qty_pct: 0.278, total_quantity: 6686800 },
          { month: "2025-12", n_trades: 452, retail_pct: 0.892, mixed_pct: 0.100, instit_pct: 0.009, avg_trade_size: 3116.54, retail_qty_pct: 0.263, mixed_qty_pct: 0.530, instit_qty_pct: 0.207, total_quantity: 3937400 },
          { month: "2025-11", n_trades: 384, retail_pct: 0.836, mixed_pct: 0.148, instit_pct: 0.016, avg_trade_size: 4969.59, retail_qty_pct: 0.234, mixed_qty_pct: 0.565, instit_qty_pct: 0.202, total_quantity: 5346900 },
          { month: "2025-10", n_trades: 342, retail_pct: 0.787, mixed_pct: 0.158, instit_pct: 0.056, avg_trade_size: 8787.52, retail_qty_pct: 0.151, mixed_qty_pct: 0.334, instit_qty_pct: 0.516, total_quantity: 8449600 },
          { month: "2025-09", n_trades: 1024, retail_pct: 0.916, mixed_pct: 0.070, instit_pct: 0.014, avg_trade_size: 3167.82, retail_qty_pct: 0.301, mixed_qty_pct: 0.395, instit_qty_pct: 0.305, total_quantity: 9194100 },
          { month: "2025-08", n_trades: 528, retail_pct: 0.843, mixed_pct: 0.144, instit_pct: 0.013, avg_trade_size: 4629.23, retail_qty_pct: 0.323, mixed_qty_pct: 0.508, instit_qty_pct: 0.169, total_quantity: 7049500 }
        ]
      },
      peer_comparison: [
        { ticker: "MXNU", currency: "GBP", is_target: true, retail_pct: 0.781, mixed_pct: 0.191, instit_pct: 0.028, retail_qty_pct: 0.163, mixed_qty_pct: 0.564, instit_qty_pct: 0.273, retail_notional_pct: 0.163, mixed_notional_pct: 0.564, instit_notional_pct: 0.274, avg_trade_size: 6286.11, thresholds: { retail_max: 7900, instit_min: 39500 } },
        { ticker: "5F4", currency: "SGD", is_target: false, retail_pct: 0.983, mixed_pct: 0.017, instit_pct: 0, retail_qty_pct: 0.900, mixed_qty_pct: 0.100, instit_qty_pct: 0, retail_notional_pct: 0.897, mixed_notional_pct: 0.103, instit_notional_pct: 0, avg_trade_size: 3028.36, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "LJ3", currency: "SGD", is_target: false, retail_pct: 0.955, mixed_pct: 0.044, instit_pct: 0.001, retail_qty_pct: 0.530, mixed_qty_pct: 0.429, instit_qty_pct: 0.041, retail_notional_pct: 0.529, mixed_notional_pct: 0.430, instit_notional_pct: 0.041, avg_trade_size: 2532.93, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "UD1U", currency: "SGD", is_target: false, retail_pct: 0.915, mixed_pct: 0.080, instit_pct: 0.005, retail_qty_pct: 0.328, mixed_qty_pct: 0.530, instit_qty_pct: 0.143, retail_notional_pct: 0.328, mixed_notional_pct: 0.531, instit_notional_pct: 0.142, avg_trade_size: 3942.09, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "BTOU", currency: "USD", is_target: false, retail_pct: 0.864, mixed_pct: 0.121, instit_pct: 0.015, retail_qty_pct: 0.275, mixed_qty_pct: 0.522, instit_qty_pct: 0.203, retail_notional_pct: 0.274, mixed_notional_pct: 0.522, instit_notional_pct: 0.204, avg_trade_size: 5319.61, thresholds: { retail_max: 10000, instit_min: 50000 } },
        { ticker: "ODBU", currency: "USD", is_target: false, retail_pct: 0.843, mixed_pct: 0.134, instit_pct: 0.024, retail_qty_pct: 0.185, mixed_qty_pct: 0.410, instit_qty_pct: 0.405, retail_notional_pct: 0.184, mixed_notional_pct: 0.410, instit_notional_pct: 0.406, avg_trade_size: 6439.99, thresholds: { retail_max: 10000, instit_min: 50000 } },
        { ticker: "OXMU", currency: "USD", is_target: false, retail_pct: 0.840, mixed_pct: 0.126, instit_pct: 0.034, retail_qty_pct: 0.157, mixed_qty_pct: 0.412, instit_qty_pct: 0.431, retail_notional_pct: 0.154, mixed_notional_pct: 0.409, instit_notional_pct: 0.436, avg_trade_size: 6591.29, thresholds: { retail_max: 10000, instit_min: 50000 } },
        { ticker: "CMOU", currency: "USD", is_target: false, retail_pct: 0.788, mixed_pct: 0.182, instit_pct: 0.030, retail_qty_pct: 0.156, mixed_qty_pct: 0.503, instit_qty_pct: 0.341, retail_notional_pct: 0.156, mixed_notional_pct: 0.503, instit_notional_pct: 0.340, avg_trade_size: 7714.98, thresholds: { retail_max: 10000, instit_min: 50000 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500, instit_min: 67500 }, USD: { retail_max: 10000, instit_min: 50000 }, GBP: { retail_max: 7900, instit_min: 39500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 3113,
      price_moving_trades: 793,
      pct_price_moving: 25.47,
      all_movers: { count: 793, avg_size: 6256.79, median_size: 1207, retail_count: 639, mixed_count: 131, institutional_count: 23, retail_pct: 80.58, mixed_pct: 16.52, instit_pct: 2.90 },
      positive_movers: { count: 396, avg_size: 5415.05, median_size: 1207, retail_count: 328, mixed_count: 60, institutional_count: 8, retail_pct: 82.83, mixed_pct: 15.15, instit_pct: 2.02 },
      negative_movers: { count: 397, avg_size: 7096.41, median_size: 1207, retail_count: 311, mixed_count: 71, institutional_count: 15, retail_pct: 78.34, mixed_pct: 17.88, instit_pct: 3.78 }
    },
    short_selling: {
      data_available: true,
      security_name: "EliteUKREIT GBP",
      mapping: { ticker_to_security: "EliteUKREIT GBP", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      sbl_pool: {
        valid: true,
        lending_pool: 1865450,
        lending_pool_value: 671562,
        latest_price: 0.36,
        lending_rate_pct: 1.22,
        borrowing_rate_pct: 1.75,
        pool_as_pct_adv: 618.67,
        days_to_liquidate: 6.19,
        estimated_impact_pct: 0.00672,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Moderate price impact if entire pool sold",
        timestamp: ""
      },
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
          { month: "2026-01", avg_short_ratio: 0 }, { month: "2025-12", avg_short_ratio: 0 }, { month: "2025-11", avg_short_ratio: 0 },
          { month: "2025-10", avg_short_ratio: 0 }, { month: "2025-09", avg_short_ratio: 0 }, { month: "2025-08", avg_short_ratio: 0 },
          { month: "2025-07", avg_short_ratio: 0.00462 }, { month: "2025-06", avg_short_ratio: 0.04269 }, { month: "2025-05", avg_short_ratio: 0 },
          { month: "2025-04", avg_short_ratio: 0 }, { month: "2025-03", avg_short_ratio: 0.00212 }, { month: "2025-02", avg_short_ratio: 0 }
        ],
        mom_change: [],
        interpretation: "Short interest stable | YoY: -100%"
      },
      peer_comparison: [
        { ticker: "MXNU", avg_short_ratio: 0, max_short_ratio: 0, is_target: true },
        { ticker: "5F4", avg_short_ratio: 0.00046, max_short_ratio: 0.0546, is_target: false },
        { ticker: "ODBU", avg_short_ratio: 0.00050, max_short_ratio: 0.0867, is_target: false },
        { ticker: "CMOU", avg_short_ratio: 0.00121, max_short_ratio: 0.0899, is_target: false },
        { ticker: "UD1U", avg_short_ratio: 0.00222, max_short_ratio: 0.2456, is_target: false },
        { ticker: "LJ3", avg_short_ratio: 0.00367, max_short_ratio: 0.6925, is_target: false },
        { ticker: "BTOU", avg_short_ratio: 0.00400, max_short_ratio: 0.1462, is_target: false },
        { ticker: "OXMU", avg_short_ratio: 0.00842, max_short_ratio: 0.8548, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0, short_vol: 0, total_vol: 104800, close: 0.36, return: 0 },
          { date: "2026-01-29", short_ratio: 0, short_vol: 0, total_vol: 412000, close: 0.36, return: 0 },
          { date: "2026-01-28", short_ratio: 0, short_vol: 0, total_vol: 133100, close: 0.36, return: 0.0141 },
          { date: "2026-01-27", short_ratio: 0, short_vol: 0, total_vol: 299500, close: 0.355, return: -0.0139 },
          { date: "2026-01-26", short_ratio: 0, short_vol: 0, total_vol: 419700, close: 0.36, return: 0.0141 },
          { date: "2026-01-23", short_ratio: 0, short_vol: 0, total_vol: 546800, close: 0.355, return: -0.0139 },
          { date: "2025-12-22", short_ratio: 0, short_vol: 0, total_vol: 136300, close: 0.355, return: 0 }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.040, continuous: 0.880, closing: 0.054, auctions: 0.120, other: 0 },
        "3M": { opening: 0.042, continuous: 0.883, closing: 0.044, auctions: 0.117, other: 0 },
        "6M": { opening: 0.028, continuous: 0.918, closing: 0.036, auctions: 0.082, other: 0 }
      },
      hhi: { "1M": 0.365, "3M": 0.378, "6M": 0.361 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0351 }, { time: "09:00", avg_share: 0.087 }, { time: "09:30", avg_share: 0.0491 },
        { time: "10:00", avg_share: 0.0477 }, { time: "10:30", avg_share: 0.0842 }, { time: "11:00", avg_share: 0.0334 },
        { time: "11:30", avg_share: 0.0421 }, { time: "12:30", avg_share: 0.0278 }, { time: "13:00", avg_share: 0.0739 },
        { time: "13:30", avg_share: 0.0646 }, { time: "14:00", avg_share: 0.0586 }, { time: "14:30", avg_share: 0.067 },
        { time: "15:00", avg_share: 0.0413 }, { time: "15:30", avg_share: 0.0345 }, { time: "16:00", avg_share: 0.0855 },
        { time: "16:30", avg_share: 0.0877 }, { time: "17:00", avg_share: 0.0804 }
      ],
      peers_hhi_rows: [
        { ticker: "MXNU", auctions_pct: 7.77, hhi: 0.399, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300", you: true } },
        { ticker: "UD1U", auctions_pct: 7.13, hhi: 0.338, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "BTOU", auctions_pct: 6.43, hhi: 0.216, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "CMOU", auctions_pct: 8.97, hhi: 0.279, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "OXMU", auctions_pct: 9.20, hhi: 0.189, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "ODBU", auctions_pct: 4.08, hhi: 0.403, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "LJ3", auctions_pct: 6.85, hhi: 0.379, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5F4", auctions_pct: 4.05, hhi: 0.530, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "58.1%", note_suffix: " - 3-month average absolute OFI (one-sided)." },
        { value: "+0.25", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "Not significant", note_suffix: " - L2 OFI Granger-causality not significant (p≈0.60)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−7.7%", avg_abs: "62.0%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "−6.7%", avg_abs: "58.1%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "+3.1%", avg_abs: "50.5%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "+0.25",
      pie: { net_buy_days: 39.7, net_sell_days: 55.9, balanced_days: 4.4 },
      l2_compact_text: "Over the last 7 days we analyzed 209 valid L2 snapshots. Average L2 OFI was −0.28% of book value (abs: 20.0%). Granger causality: OFI% does not significantly predict mid-price changes (p≈0.60).",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-02-19", ofi: "−100%", direction: "SELL pressure", return: "0.0%" },
        { date: "2025-01-09", ofi: "−100%", direction: "SELL pressure", return: "0.0%" },
        { date: "2025-06-18", ofi: "−100%", direction: "SELL pressure", return: "0.0%" },
        { date: "2024-10-10", ofi: "+100%", direction: "BUY pressure", return: "+1.7%" },
        { date: "2025-12-22", ofi: "−100%", direction: "SELL pressure", return: "0.0%" }
      ],
      ofi_series: {
        rows: [
          { date: "2026-01-30", ofi: 0.780, return: 0 },
          { date: "2026-01-29", ofi: -0.714, return: 0 },
          { date: "2026-01-28", ofi: 0.187, return: 0.0141 },
          { date: "2026-01-27", ofi: -0.775, return: -0.0139 },
          { date: "2026-01-26", ofi: 0.127, return: 0.0141 },
          { date: "2026-01-23", ofi: -0.926, return: -0.0139 }
        ],
        window_options: [30, 60, 100]
      }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#215 of 562", sub: "S$214M • Fledgling" },
        { title: "Free Float", value: "N/A", sub: "Data unavailable" },
        { title: "Avg Daily Turnover", value: "S$70K", sub: "Velocity 8.3%" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #215 — outside top 30", gaps: ["Need rank ≤30 (currently 215)", "Need float ≥15% (data unavailable)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.0%)", "Need float >15% (data unavailable)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #215 — below top 80", gaps: ["Need rank ≤80 (currently 215)"] },
        { index: "FTSE Fledgling", status: "eligible", notes: "Below All-Share coverage", gaps: [] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #215 of 562 (S$214M); FTSE size band Fledgling. Free float unavailable; velocity 8.3%. STI requires top 30; iEdge Next 50 top 80; FTSE All-Share top 98% mcap. FTSE Fledgling eligible.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently 215) for STI (top 30) or iEdge Next 50 (top 80)", "Once free float is reported, ensure it meets index criteria (e.g. ≥15%)"]
    }
  }
};

export default REPORT_DATA;
