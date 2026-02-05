// @ts-nocheck

// ============================================================================
// TOKU LTD (TKU) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// Source: Pipeline JSON and console output (as-of 2026-01-30).
// Narrative and insights written for CEO/CFO: plain language, candid,
// and action-oriented. TKU is a Software - Application small cap with
// strong liquidity vs peers (high ADV, tight spread, best 50K execution).
// Factor/driver analysis unavailable (insufficient trading history). L2 OFI
// significantly predicts price. No SBL pool; short interest nil.
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
    { ticker: "TKU", name: "TOKU LTD", marketCap: "S$162.5M", sector: "Software - Application", industry: "Technology" },
    { ticker: "ITS", name: "Info-Tech", marketCap: "S$211.6M", sector: "Software - Application", industry: "Technology" },
    { ticker: "LVR", name: "17LIVE GROUP", marketCap: "S$185.1M", sector: "Software - Application", industry: "Technology" },
    { ticker: "NXR", name: "iWOW Tech", marketCap: "S$115.4M", sector: "Software - Application", industry: "Technology" },
    { ticker: "U77", name: "Sarine Tech", marketCap: "S$76.7M", sector: "Software - Application", industry: "Technology" },
    { ticker: "532", name: "DISA", marketCap: "S$14.1M", sector: "Software - Application", industry: "Technology" },
    { ticker: "KUX", name: "OIO", marketCap: "S$11.0M", sector: "Software - Application", industry: "Technology" },
    { ticker: "A31", name: "Addvalue Tech", marketCap: "S$236.8M", sector: "Communication Equipment", industry: "Technology" },
    { ticker: "544", name: "CSE Global", marketCap: "S$767.3M", sector: "Information Technology Services", industry: "Technology" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "TKU",
    company: "TOKU LTD",
    asof_date: "2026-01-30",
    industry: "Technology",
    sector: "Software - Application",
    market_cap_display: "162.5M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400", dot: "bg-amber-500" },
      liq_section: { text: "Liquidity score: 44.8 — MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Insufficient history", bg: "bg-slate-500/20", textColor: "text-slate-400" },
      exec_check: { text: "LOW impact for size", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "SPREAD (low HHI)", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      ofi: { text: "Moderate • L2 predictive", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "No short interest", bg: "bg-slate-500/20", textColor: "text-slate-400" },
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
    perf_insight: "TOKU has strong liquidity vs peers: ADV ~S$1.52M and 122 trades/day put it ahead of the peer median. Spread (1.9%) is in line with peers. A S$50K trade is only ~3.3% of ADV—best execution in the peer set. Factor exposure cannot be estimated yet (insufficient history). Order flow is moderate (|OFI| ~26%); L2 order-book imbalance significantly predicts mid-price (4 min lead).",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "Factor exposure (market/sector/company share) could not be estimated—only 6 days of return history were available. As more data accumulates, we will report sensitivity and lead-lag." },
      { title: "Market Link", text: "Regression and lead-lag analysis require at least 30 days of returns; currently insufficient." },
      { title: "Sector Link", text: "Software - Application sector context will be reported once sufficient history is available." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Insufficient data for this period.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Insufficient data for lead-lag analysis.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "No rolling windows available (insufficient history).",
    drivers_bottom_line: "Takeaway: Liquidity and execution are strong; factor breakdown will be available once more trading history exists.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Spread (1.9%) is in line with peer median—limit orders remain sensible.",
      "A S$50K trade is only ~3.3% of ADV—easiest execution in the peer set; 544 and A31 are next best.",
      "L2 order flow significantly predicts mid-price (4 min lag); order-book imbalance is a useful short-term signal."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Insufficient data",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Insufficient data for regime analysis.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread ~1.9%. Deep book: 10 bid/10 ask levels. S$100K sell impact ~−1%; S$1M ~−4.5%; S$2.5M ~−5.3% (45% fill). Execution is favourable vs peers.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "TKU has the best 50K-as-%-of-ADV in the peer set (~3.3%)—execution is easy. Next: 544 (21%), A31 (61%).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book.",
    exec_check_insight: "Execution is favourable: deep book, low impact for 100K–2.5M. S$50K is only ~3% of ADV. Kyle's Lambda not computed (pipeline).",
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
    session_dist_note: "Most volume in continuous (~91%); auctions ~8.7%. Peak buckets 09:00 (15.1%), 10:00 (13.6%), 16:30 (11.4%).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "Your value: {value} (spread—liquidity distributed through the day).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Volume is spread across the session; best windows 09:00, 10:00, 16:30.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "TKU has the lowest HHI in the peer set—liquidity is well spread; 544 and ITS are next.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does order flow predict price?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (6-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 OFI → mid-price" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow is moderate (6M avg |OFI| ~26%). Daily OFI–return correlation not available (short history). L2 OFI significantly predicts mid-price (4 min lag; buy pressure associated with price down in the test).",
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
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact. Higher is better." }, value: "44.8", suffix: "/100", bar_pct: 45, color_value: "text-amber-400", color_bar: "text-amber-500", subtext: "Rank 309/558 • Below peer median", interpretation: { text: "MODERATE", cls: "interpretation-neutral", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "1.94", suffix: "%", bar_pct: 2, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "In line with peer median (~2.0%)", interpretation: { text: "LOW", cls: "interpretation-good", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "1.52M", suffix: "SGD", bar_pct: 85, color_value: "text-emerald-400", color_bar: "text-emerald-500", subtext: "Well above peer median (~S$29K)", interpretation: { text: "STRONG", cls: "interpretation-good", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "N/A", suffix: "", bar_pct: 0, color_value: "text-slate-400", color_bar: "text-slate-500", subtext: "Insufficient history (6 days)", interpretation: { text: "Insufficient data", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "TOKU has moderate liquidity overall (rank 309/558) but is the strongest in its peer set: ADV ~S$1.52M and 122 trades/day. Spread (1.9%) is in line with peers. A S$50K trade is only ~3.3% of ADV—best execution among Software - Application peers.",
      "Sell impact is low: −1% for S$100K, −4.5% for S$1M, −5.3% for S$2.5M (45% fill). Order flow is moderate (|OFI| ~26%); 71% of days are net buying. L2 order-book OFI significantly predicts mid-price (4 min lag).",
      "Factor/driver analysis is not available (insufficient return history). Short interest is 0%; no SBL pool data. Not eligible for major indices (rank #242, Fledgling); free float data unavailable."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Maintain liquidity and visibility", bullets: ["Execution is already favourable vs peers. Continue IR and disclosure so two-way flow and institutional interest are sustained.", "L2 OFI predicts price—consider monitoring order-book imbalance for timing large orders."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-slate-500/20", text: "text-slate-400", textColor: "text-slate-400", dot: "bg-slate-500" },
          items: [
            { title: "Revisit factor exposure once history allows", bullets: ["With more trading days, we can report market/sector/company share of moves and lead-lag. Useful for messaging and risk context."] },
            { title: "Track free float for index criteria", bullets: ["Free float is missing in current data; STI and FTSE All-Share require float ≥15%. Once reported, we can assess index gaps."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #242 of 562—need top 30 for STI, top 80 for iEdge Next 50. Velocity is high (93%); growth in market cap and clarity on free float would support index path."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "122", sub: "Well above peer median (~30)", interp: { text: "STRONG", cls: "interpretation-good", icon: "◆" } },
      { title: "Spread vs Peers", value: "1.9%", sub: "In line with peer median (~2.0%)", interp: { text: "GOOD", cls: "interpretation-good", icon: "◆" } },
      { title: "50K as % ADV", value: "3.3%", sub: "Best in peer set", interp: { text: "BEST IN PEERS", cls: "interpretation-good", icon: "◆" } }
    ],
    liq_insight: "Liquidity is strong versus peers: ADV is about 52× the peer median (S$29K), spread is in line (1.9%), and trade count (122/day) is well above median. Execution for size is the best in the set—a S$50K clip is only ~3.3% of ADV. Volatility (2.9%) is higher than peer median (0.5%)—typical for a name with recent listing or event history.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.2675", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "1.87%", note: "Low cost", color: "text-emerald-400" },
      { title: "Depth", value: "Deep", note: "10 bid levels, 10 ask levels", color: "text-emerald-400" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −0.99% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −4.51% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −5.35% • Fill: 45.3% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate (26%)" },
      { cls: "bg-slate-500/20 text-slate-300", text: "N/A (short history)" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Significant (4 min lead)" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "TOKU ranks in the middle tier for liquidity (309/558) but is the strongest in its Software - Application peer set. ADV is ~S$1.52M (52× peer median), spread 1.9% (in line), and 122 trades/day. Execution for size is the best among peers—S$50K is only 3.3% of ADV.",
      strengths: ["ADV and trade count are the highest in the peer set; execution is easy for meaningful size.", "Spread (1.9%) is in line with peer median; deep order book (10/10 levels).", "HHI is the lowest in the set—liquidity is well spread through the day."],
      concerns: ["Volatility (2.9%) is above peer median (0.5%)—may reflect recent listing or event-driven trading.", "Turnover ratio and free float are not available in the pipeline output."],
      peer_context: "544 and A31 have the next-best liquidity in the set; 532, KUX, NXR, U77 are much thinner. TKU is the standout for execution capacity."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is S$1.52M—well above peer median (S$29K) and market median (S$18K).", vs_market: "Market median ~S$18K; you are far above.", vs_sector: "Sector median ~S$29K; you are far above.", vs_peers: "Peer median S$29K; you are about 5,146% higher." },
      spread: { insight: "Spread is 1.9%—in line with peer median (~2.0%) and tighter than market median (~2.2%).", vs_market: "Market median ~2.2%; you are slightly tighter.", vs_sector: "Sector median ~2.3%; you are tighter.", vs_peers: "Peer median ~2.0%; you are about 5.5% wider (still in line)." },
      volatility: { insight: "Daily volatility is 2.9%—above peer median (0.5%) and sector (0.4%).", vs_market: "Market median ~0.6%; you are higher.", vs_sector: "Sector median ~0.4%; you are higher.", vs_peers: "Peer median ~0.5%; your volatility is above (often true for newer or event-driven names)." },
      trades: { insight: "You have about 122 trades per day—well above peer median (~30).", vs_market: "Market median ~10; you are far above.", vs_sector: "Sector median ~30; you are above.", vs_peers: "Peer median ~30; you are about 303% higher." }
    },
    performance: {
      overall: "Returns are −7.0% over 1M, 3M, 6M, and YTD (same period). Market +1.6%, sector −0.36%, peers 0%. Limited history; performance narrative is company-specific.",
      ytd: { stock: "−7.0%", market: "+1.59%", sector: "−0.36%", peers: "0.0%", insight: "YTD you are down; market is up, sector and peers flat." },
      three_month: { stock: "−7.0%", market: "+1.59%", sector: "−0.36%", peers: "0.0%", insight: "Over 3 months you are down; market is up slightly." },
      six_month: { stock: "−7.0%", market: "+1.59%", sector: "−0.36%", peers: "0.0%", insight: "Over 6 months you are down; same short history." },
      conclusion: "Liquidity and execution are strong; performance is negative over the available short window. Focus on sustaining two-way flow and visibility."
    },
    drivers: {
      overall: "Factor exposure (market/sector/company share of variance) could not be estimated—only 6 days of return history were available (minimum 30 required). Regime switching and lead-lag are also unavailable.",
      interpretation: "As more trading history accumulates, we will report sensitivity to market and sector and whether the stock leads or lags. For now, treat the name as company- and event-driven.",
      rolling_change: "No rolling windows available (insufficient data).",
      beta: "N/A (insufficient data)."
    },
    regime: {
      overall: "Regime-switching analysis could not be run (6 days < 30 required).",
      current: "N/A",
      transitions: "N/A",
      trading_implications: "Once sufficient data exists, regime context can inform timing."
    },
    trader_composition: {
      overall: "By trade count, 83.9% retail, 15.2% mixed, 0.9% institutional. By value (notional), 28.4% retail, 60.2% mixed, 11.4% institutional—so mixed-size trades account for most volume.",
      retail_heavy: "Retail dominates trade count; mixed and institutional account for the majority of value traded.",
      institutional_gap: "Institutional share of value is 11.4%—meaningful for a small cap; 544 and A31 have higher institutional participation.",
      peer_comparison: "By value, TKU is mixed (28.7% retail, 59.8% mixed, 11.5% instit); 544 and A31 are more institutional; U77, 532, KUX are 100% retail by value."
    },
    price_moving: {
      overall: "About 25.6% of trades moved the price. Retail and mixed dominate; negative movers are on average larger than positive movers (8.5K vs 4.4K).",
      interpretation: "A moderate share of trades move the price; negative movers tend to be larger (mixed/institutional sell pressure).",
      asymmetry: "Negative movers avg ~1.9× larger than positive movers.",
      by_trader_type: "Positive movers: 88.7% retail, 11.3% mixed. Negative movers: 78.3% retail, 19.8% mixed, 1.9% institutional."
    },
    short_selling: {
      overall: "Short interest is 0% over 1M, 3M, and 6M. No SBL lending pool data available for TKU. Pipeline short data mapped to a different security name; TKU-specific short series shows 0%.",
      level: "0% (low short interest)",
      correlation: "N/A",
      trend: "Stable",
      peaks: "None"
    },
    execution: {
      overall: "Execution is favourable: S$100K sell impact ~−1%, S$1M ~−4.5%, S$2.5M ~−5.3% (45% fill). S$50K is only 3.3% of ADV—best in the peer set. Deep book (10/10 levels) supports size.",
      concern: "No material execution concern at current sizes; maintain two-way flow.",
      kyle: "Kyle's Lambda not computed in pipeline.",
      peer_context: "TKU has the best 50K capacity (3.3% ADV). Next: 544 (21%), A31 (61%). ITS, LVR, NXR, U77, 532, KUX are much harder for size."
    },
    intraday: {
      overall: "Trading is well spread: 91% continuous, 8.7% auctions. HHI is 0.13—lowest in the peer set (liquidity distributed through the day). Peak buckets 09:00 (15.1%), 10:00 (13.6%), 16:30 (11.4%).",
      hhi_interpretation: "HHI 0.13 is in the spread range—liquidity is not concentrated in a few buckets.",
      best_times: "Best windows for size: 09:00, 10:00, 16:30.",
      peer_ranking: "TKU has the lowest HHI in the peer set; 544 (0.17) and ITS (0.26) are next. 532 and KUX have the highest HHI (concentrated)."
    },
    ofi: {
      overall: "Order flow is moderate (avg |OFI| ~26%). Net buying days 71.4%, net selling 28.6%, balanced 0%. Daily OFI–return correlation not available (short history). L2 OFI significantly Granger-causes mid-price (4 min lag; negative correlation in the test—buy pressure → price down).",
      daily_vs_intraday: "71% buy days, 29% sell days over the short window. Correlation with returns not computed.",
      l2_signal: "L2 OFI significantly predicts mid-price (p≈0.0000, 4 min lag). Order-book imbalance is a useful short-term signal.",
      day_breakdown: "Over available period: 71.4% net buying days, 28.6% net selling, 0% balanced."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #242 of 562 (S$162.5M); FTSE size band Fledgling. Free float and float mcap are unavailable in data. Velocity is 93.1%. STI requires top 30; iEdge Next 50 top 80; FTSE All-Share top 98% mcap.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve market-cap rank for index eligibility; once free float is reported, assess STI/FTSE float criteria. Velocity is already high (93%)."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["TKU", "ITS", "LVR", "NXR", "U77", "532", "KUX", "A31", "544"],
      scores: [44.80, 70.97, 66.67, 40.50, 38.53, 19.18, 6.09, 85.84, 91.94],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [1518998, 139314.75, 48508, 9396.75, 7110, 225.05, 0, 1629924.15, 4786594],
      total: 558
    },
    market_comparison: {
      sector_name: "Software - Application",
      sector_count: 8,
      market_count: 558,
      company: { volatility: 0.02923, adv: 1518998, spread_pct: 0.01937, turnover_ratio: null, amihud: 1.683e-8, trades: 122 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.01102, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 2515175, median: 17956.5, min: 0, max: 243209838, p5: 0, p95: 10103622, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.304, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00359, median: 0.000389, min: 0, max: 0.705, p5: 0, p95: 0.0105, count: 552 },
        amihud: { direction: "lower_is_better", mean: 6.89e-5, median: 7.62e-8, min: 0, max: 0.0185, p5: 0, p95: 8.46e-5, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.00786, median: 0.00413, min: 0, max: 0.0292, p5: 0, p95: 0.0235, count: 8 },
        adv: { direction: "higher_is_better", mean: 1700692, median: 28952.38, min: 0, max: 11881985, p5: 78.77, p95: 8254940, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.141, median: 0.0226, min: 0.00118, max: 0.667, p5: 0.004, p95: 0.556, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00153, median: 0.000312, min: 0, max: 0.00721, p5: 7.32e-6, p95: 0.00584, count: 7 },
        amihud: { direction: "lower_is_better", mean: 4.99e-6, median: 8.75e-9, min: 0, max: 3.87e-5, p5: 0, p95: 2.55e-5, count: 8 },
        trades: { direction: "higher_is_better", mean: 363, median: 30.25, min: 0, max: 2598.5, p5: 0.7, p95: 1731.72, count: 8 }
      },
      peers: {
        volatility: { direction: "lower_is_better", mean: 0.00631, median: 0.00495, min: 0, max: 0.0152, p5: 0, p95: 0.0144, count: 8 },
        adv: { direction: "higher_is_better", mean: 827634, median: 28952.38, min: 0, max: 4786594, p5: 78.77, p95: 3681760, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.1416, median: 0.0205, min: 0.00924, max: 0.667, p5: 0.00931, p95: 0.556, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00256, median: 0.00036, min: 0, max: 0.00962, p5: 8.54e-6, p95: 0.00885, count: 8 },
        amihud: { direction: "lower_is_better", mean: 4.99e-6, median: 7.05e-9, min: 0, max: 3.87e-5, p5: 0, p95: 2.55e-5, count: 8 },
        trades: { direction: "higher_is_better", mean: 187.81, median: 30.25, min: 0, max: 1019, p5: 0.7, p95: 767.35, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: -7.02, market: 1.59, sector: -0.36, peers: 0 },
      { horizon: "3M", stock: -7.02, market: 1.59, sector: -0.36, peers: 0 },
      { horizon: "6M", stock: -7.02, market: 1.59, sector: -0.36, peers: 0 },
      { horizon: "YTD", stock: -7.02, market: 1.59, sector: -0.36, peers: 0 }
    ],
    drivers: {
      share_market: 0,
      share_sector: 0,
      share_idio: 100,
      beta_market: 0,
      beta_sector: 0,
      r_squared: 0,
      lead_lag: {
        lags: [],
        corr_market: [],
        corr_sector: [],
        best: { market: 0, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: false }
      },
      rolling: {
        ordered: [],
        market: [],
        sector: [],
        idio: []
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
        transitions: [[1, 0], [0, 1]]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.265, quantity: 367200, value: 97308 },
        { level: 2, price: 0.26, quantity: 989300, value: 257218 },
        { level: 3, price: 0.255, quantity: 1416900, value: 361309.5 },
        { level: 4, price: 0.25, quantity: 891100, value: 222775 },
        { level: 5, price: 0.245, quantity: 343900, value: 84255.5 },
        { level: 6, price: 0.24, quantity: 280000, value: 67200 },
        { level: 7, price: 0.235, quantity: 120000, value: 28200 },
        { level: 8, price: 0.23, quantity: 1300, value: 299 },
        { level: 9, price: 0.225, quantity: 30000, value: 6750 },
        { level: 10, price: 0.22, quantity: 36000, value: 7920 }
      ],
      asks: [
        { level: 1, price: 0.27, quantity: 248600, value: 67122 },
        { level: 2, price: 0.275, quantity: 415100, value: 114152.5 },
        { level: 3, price: 0.28, quantity: 376100, value: 105308 },
        { level: 4, price: 0.285, quantity: 1017100, value: 289873.5 },
        { level: 5, price: 0.29, quantity: 880900, value: 255461 },
        { level: 6, price: 0.295, quantity: 509900, value: 150420.5 },
        { level: 7, price: 0.3, quantity: 884400, value: 265320 },
        { level: 8, price: 0.305, quantity: 283000, value: 86315 },
        { level: 9, price: 0.31, quantity: 170000, value: 52700 },
        { level: 10, price: 0.315, quantity: 83000, value: 26145 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 3.29,
      peers: [
        { ticker: "544", pct: 20.9 },
        { ticker: "A31", pct: 61.4 },
        { ticker: "ITS", pct: 717.8 },
        { ticker: "LVR", pct: 2061.5 },
        { ticker: "NXR", pct: 10642 },
        { ticker: "U77", pct: 14064.7 },
        { ticker: "532", pct: 444345.7 },
        { ticker: "KUX", pct: null }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 2013,
      first_trade_date: "2026-01-22",
      last_trade_date: "2026-01-29",
      period_days: 7,
      thresholds: { retail_max: 13500, instit_min: 67500 },
      composition: {
        retail_pct: 0.839,
        mixed_pct: 0.152,
        instit_pct: 0.00894,
        retail_qty_pct: 0.287,
        mixed_qty_pct: 0.598,
        instit_qty_pct: 0.115,
        retail_notional_pct: 0.284,
        mixed_notional_pct: 0.602,
        instit_notional_pct: 0.114
      },
      trade_size: { avg: 6961.35, median: 1166 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 2013, retail_pct: 0.839, mixed_pct: 0.152, instit_pct: 0.00894, avg_trade_size: 6961.35, retail_qty_pct: 0.287, mixed_qty_pct: 0.598, instit_qty_pct: 0.115, total_quantity: 51119700 }
        ]
      },
      peer_comparison: [
        { ticker: "TKU", currency: "SGD", is_target: true, retail_pct: 0.839, mixed_pct: 0.152, instit_pct: 0.00894, retail_qty_pct: 0.287, mixed_qty_pct: 0.598, instit_qty_pct: 0.115, retail_notional_pct: 0.284, mixed_notional_pct: 0.602, instit_notional_pct: 0.114, avg_trade_size: 6961.35, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "U77", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 2702.76, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "532", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 569.13, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "KUX", currency: "SGD", is_target: false, retail_pct: 1, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 283.32, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "LVR", currency: "SGD", is_target: false, retail_pct: 0.9945, mixed_pct: 0.00554, instit_pct: 0, retail_qty_pct: 0.746, mixed_qty_pct: 0.254, instit_qty_pct: 0, retail_notional_pct: 0.755, mixed_notional_pct: 0.245, instit_notional_pct: 0, avg_trade_size: 523.55, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "ITS", currency: "SGD", is_target: false, retail_pct: 0.9213, mixed_pct: 0.0781, instit_pct: 0.00065, retail_qty_pct: 0.518, mixed_qty_pct: 0.467, instit_qty_pct: 0.015, retail_notional_pct: 0.516, mixed_notional_pct: 0.468, instit_notional_pct: 0.0153, avg_trade_size: 4149.50, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "NXR", currency: "SGD", is_target: false, retail_pct: 0.9016, mixed_pct: 0.0984, instit_pct: 0, retail_qty_pct: 0.587, mixed_qty_pct: 0.413, instit_qty_pct: 0, retail_notional_pct: 0.580, mixed_notional_pct: 0.420, instit_notional_pct: 0, avg_trade_size: 5448.75, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "544", currency: "SGD", is_target: false, retail_pct: 0.8814, mixed_pct: 0.0909, instit_pct: 0.0276, retail_qty_pct: 0.182, mixed_qty_pct: 0.371, instit_qty_pct: 0.447, retail_notional_pct: 0.182, mixed_notional_pct: 0.371, instit_notional_pct: 0.447, avg_trade_size: 7740.14, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "A31", currency: "SGD", is_target: false, retail_pct: 0.8498, mixed_pct: 0.1266, instit_pct: 0.0235, retail_qty_pct: 0.230, mixed_qty_pct: 0.462, instit_qty_pct: 0.309, retail_notional_pct: 0.230, mixed_notional_pct: 0.461, instit_notional_pct: 0.309, avg_trade_size: 7974.08, thresholds: { retail_max: 13500, instit_min: 67500 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 2012,
      price_moving_trades: 515,
      pct_price_moving: 25.596,
      all_movers: { count: 515, avg_size: 6463.67, median_size: 561, retail_count: 430, mixed_count: 80, institutional_count: 5, retail_pct: 83.50, mixed_pct: 15.53, instit_pct: 0.97 },
      positive_movers: { count: 257, avg_size: 4422.61, median_size: 234, retail_count: 228, mixed_count: 29, institutional_count: 0, retail_pct: 88.72, mixed_pct: 11.28, instit_pct: 0 },
      negative_movers: { count: 258, avg_size: 8496.83, median_size: 1060, retail_count: 202, mixed_count: 51, institutional_count: 5, retail_pct: 78.29, mixed_pct: 19.77, instit_pct: 1.94 }
    },
    short_selling: {
      data_available: true,
      security_name: "TOKU LTD",
      mapping: { ticker_to_security: "$ METAOPTICS LTD", confidence: "high" },
      coverage: { n_days_short_data: 13, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } }
      },
      correlation: { valid: false, correlation: null, interpretation: "" },
      peaks: [],
      short_interest_change: { valid: false, monthly_data: [], mom_change: [], interpretation: "" },
      peer_comparison: [
        { ticker: "TKU", avg_short_ratio: 0, max_short_ratio: 0, is_target: true },
        { ticker: "NXR", avg_short_ratio: 8.64e-5, max_short_ratio: 0.0323, is_target: false },
        { ticker: "U77", avg_short_ratio: 0.000834, max_short_ratio: 0.1235, is_target: false },
        { ticker: "A31", avg_short_ratio: 0.00146, max_short_ratio: 0.0988, is_target: false },
        { ticker: "ITS", avg_short_ratio: 0.00204, max_short_ratio: 0.1386, is_target: false },
        { ticker: "544", avg_short_ratio: 0.0465, max_short_ratio: 0.4378, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0, short_vol: 0, total_vol: 14635000, close: 0.265, return: 0.03922 },
          { date: "2026-01-29", short_ratio: 0, short_vol: 0, total_vol: 2423300, close: 0.255, return: 0.02 },
          { date: "2026-01-28", short_ratio: 0, short_vol: 0, total_vol: 2401500, close: 0.25, return: -0.03846 },
          { date: "2026-01-27", short_ratio: 0, short_vol: 0, total_vol: 3285000, close: 0.26, return: 0 },
          { date: "2026-01-26", short_ratio: 0, short_vol: 0, total_vol: 5842300, close: 0.26, return: -0.01887 },
          { date: "2026-01-23", short_ratio: 0, short_vol: 0, total_vol: 12463700, close: 0.265, return: -0.07018 },
          { date: "2026-01-22", short_ratio: 0, short_vol: 0, total_vol: 30703500, close: 0.285, return: null }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.0570, continuous: 0.9131, closing: 0.0231, auctions: 0.0869, other: 0 },
        "3M": { opening: 0.0570, continuous: 0.9131, closing: 0.0231, auctions: 0.0869, other: 0 },
        "6M": { opening: 0.0570, continuous: 0.9131, closing: 0.0231, auctions: 0.0869, other: 0 }
      },
      hhi: { "1M": 0.1292, "3M": 0.1292, "6M": 0.1292 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0193 },
        { time: "09:00", avg_share: 0.1509 },
        { time: "09:30", avg_share: 0.0757 },
        { time: "10:00", avg_share: 0.1359 },
        { time: "10:30", avg_share: 0.0483 },
        { time: "11:00", avg_share: 0.0426 },
        { time: "11:30", avg_share: 0.0718 },
        { time: "12:30", avg_share: 0.0098 },
        { time: "13:00", avg_share: 0.0417 },
        { time: "13:30", avg_share: 0.0525 },
        { time: "14:00", avg_share: 0.0663 },
        { time: "14:30", avg_share: 0.0415 },
        { time: "15:00", avg_share: 0.0286 },
        { time: "15:30", avg_share: 0.0195 },
        { time: "16:00", avg_share: 0.0476 },
        { time: "16:30", avg_share: 0.1136 },
        { time: "17:00", avg_share: 0.0345 }
      ],
      peers_hhi_rows: [
        { ticker: "TKU", auctions_pct: 8.69, hhi: 0.1292, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300", you: true } },
        { ticker: "544", auctions_pct: 6.24, hhi: 0.1704, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "ITS", auctions_pct: 6.91, hhi: 0.2613, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "LVR", auctions_pct: 2.71, hhi: 0.3338, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "A31", auctions_pct: 5.32, hhi: 0.4815, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "U77", auctions_pct: 8.21, hhi: 0.5026, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "NXR", auctions_pct: 2.50, hhi: 0.6480, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "532", auctions_pct: 7.84, hhi: 0.7857, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "KUX", auctions_pct: 2.88, hhi: 0.8031, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "26.3%", note_suffix: " - 6-month average absolute OFI (moderate)." },
        { value: "N/A", note_suffix: " - Correlation not available (short history)." },
        { value: "Significant", note_suffix: " - L2 OFI Granger-causes mid-price (4 min lag)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "+16.0%", avg_abs: "26.3%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "+16.0%", avg_abs: "26.3%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "+16.0%", avg_abs: "26.3%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "N/A",
      pie: { net_buy_days: 71.43, net_sell_days: 28.57, balanced_days: 0 },
      l2_compact_text: "Over the last 7 days we analyzed 1,775 valid L2 snapshots. Granger causality: OFI% SIGNIFICANTLY predicts mid-price changes (p≈0.0000, 4 min lag). Negative correlation in test (buy pressure → price down).",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2026-01-27", ofi: "−46%", direction: "SELL pressure", return: "0.0%" },
        { date: "2026-01-23", ofi: "−41%", direction: "SELL pressure", return: "−7.0%" }
      ],
      ofi_series: {
        rows: [
          { date: "2026-01-30", ofi: 0.1728, return: 0.03922 },
          { date: "2026-01-29", ofi: -0.0511, return: 0.02 },
          { date: "2026-01-28", ofi: -0.3050, return: -0.03846 },
          { date: "2026-01-27", ofi: -0.4641, return: 0 },
          { date: "2026-01-26", ofi: -0.2182, return: -0.01887 },
          { date: "2026-01-23", ofi: -0.4110, return: -0.07018 }
        ],
        window_options: [30, 60, 100]
      }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#242 of 562", sub: "S$162.5M • Fledgling" },
        { title: "Free Float", value: "N/A", sub: "Data unavailable" },
        { title: "Avg Daily Turnover", value: "S$600K", sub: "Velocity 93.1%" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #242 — outside top 30", gaps: ["Need rank ≤30 (currently 242)", "Need float ≥15% (data unavailable)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.3%)", "Need float >15% (data unavailable)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #242 — below top 80", gaps: ["Need rank ≤80 (currently 242)"] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #242 of 562 (S$162.5M); FTSE size band Fledgling. Free float unavailable; velocity is 93.1%. STI requires top 30 and float ≥15%; iEdge Next 50 top 80; FTSE All-Share top 98% mcap.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently 242) for STI (top 30) or iEdge Next 50 (top 80)", "Once free float is reported, ensure it meets index criteria (e.g. ≥15%)"]
    }
  }
};

export default REPORT_DATA;
