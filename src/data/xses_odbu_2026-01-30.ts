// @ts-nocheck

// ============================================================================
// United Hampshire REIT USD (ODBU) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
// ============================================================================

import type { ReportData } from '@/types/report';

export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector (REIT - Retail), then industry (Real Estate)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "D5IU", name: "Lippo Malls Tr", marketCap: "S$69M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "CRPU", name: "Sasseur Reit", marketCap: "S$863M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "BMGU", name: "BHG Retail Reit", marketCap: "S$252M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "MXNU", name: "Elite UK REIT", marketCap: "S$214M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "LJ3", name: "OUE", marketCap: "S$879M", sector: "Real Estate - Diversified", industry: "Real Estate" },
    { ticker: "5F4", name: "Figtree", marketCap: "S$19M", sector: "Real Estate - Development", industry: "Real Estate" },
    { ticker: "UD1U", name: "IREIT Global", marketCap: "S$403M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "5UX", name: "Oxley", marketCap: "S$376M", sector: "Real Estate - Development", industry: "Real Estate" }
  ]
};

export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "ODBU",
    company: "UtdHampshReitUSD",
    asof_date: "2026-01-30",
    industry: "Real Estate",
    sector: "REIT - Retail",
    market_cap_display: "315.5M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400", dot: "bg-amber-500" },
      liq_section: { text: "Liquidity score: 61.8 — MODERATE", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "MODERATE crossing cost", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      intraday: { text: "CONCENTRATED", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided imbalance", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "Low short interest", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      index_status: { text: "Near FTSE All-Share", bg: "bg-amber-500/20", textColor: "text-amber-400" }
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
    action_plan_subtitle: "Practical actions to reduce trading friction and protect liquidity",
    action_plan_icon: "",
    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar REIT / Real Estate names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "Liquidity is moderate; most price moves are company-specific. A US$50K trade is 47% of daily volume—best in peer set. SBL pool is large; monitor for covering risk.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 76% of recent price moves come from company-specific factors; 23% from the sector and 1% from the market." },
      { title: "Market Link", text: "Your stock leads the market by 5 days at best correlation. Sector is contemporaneous (moves together)." },
      { title: "Sector Link", text: "Sector drives some moves (23%); in the low-vol regime, sector Granger-causes stock returns." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company share means the stock moves mainly on its own news and fundamentals.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Stock leads the market by 5 days at best correlation; sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share has dominated (68–92%) across rolling windows; sector 6–25%, market 1–11%.",
    drivers_bottom_line: "Takeaway: Your stock is company-driven. Sector has meaningful influence in some regimes; market plays a small role.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Trading cost is moderate (0.92% spread)—limit orders are appropriate.",
      "A US$50K trade is about 47% of daily volume—best capacity in your peer set.",
      "SBL lending pool is large (~30 days of volume); monitor for covering risk in stress."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Medium Vol (29% of time)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Medium Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Current regime: Medium Vol.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is about 0.92%. Good depth on the bid; selling 100K has low impact (−0.46%), 1M–2.5M about −3.4%.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "Your stock has the best capacity in the peer set: a US$50K trade is about 47% of typical daily volume (moderate). Peers are all >50% ADV.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Trading conditions are moderate: solid depth for 100K (−0.46%); larger sells (1M–2.5M) move the price by about 3.4%. Best peer capacity for 50K.",
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under US$10,000",
    trader_mixed_threshold: "Mixed: Trades US$10,000 - US$50,000",
    trader_instit_threshold: "Institutional: Trades over US$50,000",
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail concentration across comparable names",
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes (microstructure sensitivity)",
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most volume is in continuous trading (~93–96%); auctions ~4–7%. Peak at 09:00 (13.4%), then 16:30 and 10:00.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "This index shows how spread out trading is through the day. Your value: {value} (concentrated).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity clusters at 09:00, 16:30, and 10:00; larger clips should target these windows.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is concentrated through the day. Best windows are 09:00, 16:30, and 10:00.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does that explain same-day price moves?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow imbalance is the difference between buy- and sell-initiated volume. Over 3 months the average absolute imbalance is about 65% (one-sided). L2 order-book OFI does not significantly predict mid-price.",
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
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from median volume, trades, spread, impact. Higher is better." }, value: "61.8", suffix: "/100", bar_pct: 62, color_value: "text-amber-400", color_bar: "text-amber-400", subtext: "Rank 214/558 • Above peer median ADV", interpretation: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Median spread is immediate cost to trade. Tighter is better." }, value: "0.96", suffix: "%", bar_pct: 70, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Below peer median (~1.5%)", interpretation: { text: "GOOD", cls: "interpretation-good", icon: "✓" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "105.3K", suffix: "USD", bar_pct: 55, color_value: "text-amber-400", color_bar: "text-amber-400", subtext: "Peer median: 72.8K • +45% vs peers", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "✓" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "75.9", suffix: "% company", bar_pct: 76, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 1.1% • Sector: 23.0%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "Your stock has moderate liquidity: rank 214/558, ~105K USD median daily volume (about 45% above peer median), and tight spread (0.96%).",
      "Execution capacity is the best in the peer set: a US$50K trade is about 47% of typical daily volume (moderate). Selling 100K has low impact (−0.46%); 1M–2.5M about −3.4%.",
      "SBL lending pool is large (6.2M shares, ~30 days of volume). If the entire pool were sold, estimated impact is ~3.4%. Monitor short interest and pool for stress scenarios."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Monitor SBL lending pool and short interest", bullets: ["Pool is ~30 days of volume; covering could add selling pressure in stress.", "Short interest is low but building (e.g. +3648% MoM from a low base). Track monthly."] },
            { title: "Protect current liquidity strengths", bullets: ["You have the best 50K capacity in the peer set and a tight spread. Keep two-way interest and visibility."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            { title: "Lead with company narrative in investor messaging", bullets: ["About 76% of price moves are company-specific. Emphasise results, guidance, and fundamentals."] },
            { title: "Use order-flow signals for context", bullets: ["Order flow is one-sided (~65% |OFI|) and correlates with same-day returns. Use extreme imbalance days as context."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #179 of 562—need top 30 for STI, top 80 for iEdge Next 50. FTSE All-Share: at 98.5% mcap—near cutoff.", "Monitor turnover and free float (83.4%); velocity 9.21% supports Fledgling band."] },
            { title: "Run a simple monthly liquidity dashboard", bullets: ["Monitor: spread, daily volume, order-flow balance, short ratio, and SBL pool vs daily volume."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "20", sub: "Below peer median (~37)", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Median Turnover (Vol/Free Float)", value: "0.04%", sub: "Below peer median (~0.09%)", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Daily Volatility", value: "0.9%", sub: "In line with peer median (~1.0%)", interp: { text: "IN LINE", cls: "interpretation-neutral", icon: "■" } }
    ],
    liq_insight: "Liquidity is moderate versus peers: ADV is about 45% above peer median (72.8K) and spread is tighter (~1.0% vs ~1.5%). Trade count is below peer median (~37). Best execution capacity in the peer set for a 50K ticket. Main risk to monitor is the large SBL pool.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.5425", note: "USD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.92%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Depth", value: "Good", note: "10 bid levels, 10 ask levels", color: "text-emerald-300" }
    ],
    impact_summary_cards: [
      { title: "US$100K Sell", text: "Price impact: −0.46% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "US$1.0M Sell", text: "Price impact: −3.42% • Fill: 59.9% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "US$2.5M Sell", text: "Price impact: −3.42% • Fill: 24.0% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided (65%)" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Moderate positive" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "Your stock ranks in the middle for liquidity (214/558). Typical daily volume is 105K USD—about 45% above the peer median (72.8K)—and the spread is tight at 0.96%, so trading cost is low.",
      strengths: ["Best capacity in the peer set: a US$50K trade is about 47% of daily volume (moderate).", "Spread is tighter than peer median (yours 1.0% vs peers ~1.5%).", "Short interest is low versus most peers."],
      concerns: ["Order flow is one-sided (~65% |OFI|); net selling days (60%) outnumber net buying (37%).", "SBL lending pool is large (~30 days of volume); covering could add pressure in stress.", "Trading concentration (HHI) is high—liquidity clusters in time."],
      peer_context: "You lead peers on 50K capacity and spread. CRPU has more balanced order flow and lower HHI; LJ3, UD1U, MXNU have higher trade counts. CRPU has the highest short interest in the set (~2.1%); others are low."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is 105K USD—above your peer median (72.8K) and sector median (455K for REIT - Retail).", vs_market: "Market median is ~14K; you are well above.", vs_sector: "Sector median is ~455K; you are below (sector has larger names).", vs_peers: "Peer median is 72.8K; you are about 45% higher." },
      spread: { insight: "Trading cost (spread) is 0.96%—tighter than the peer median (~1.5%).", vs_market: "Market median spread is ~2.2%; yours is much tighter.", vs_sector: "Sector median ~0.8%; you are in line.", vs_peers: "Peer median ~1.5%; you are tighter." },
      volatility: { insight: "Daily price swings are 0.9%—in line with peer median (~1.0%).", vs_market: "Market median volatility is ~0.6%; you are slightly higher.", vs_sector: "Sector median ~0.6%; you are in line.", vs_peers: "Peer median ~1.0%; your volatility is about 7% lower." },
      trades: { insight: "You have about 20 trades per day—below the peer median (~37).", vs_market: "Market median is ~10; you are higher.", vs_sector: "Sector median ~296; you are lower.", vs_peers: "Peer median ~37; you are about 46% lower." }
    },
    performance: {
      overall: "Returns are positive over 1M, 3M, and 6M; you are ahead of the peer group. Liquidity is moderate and execution capacity is strong; the main item to watch is the SBL pool size.",
      ytd: { stock: "+5.83%", market: "+5.57%", sector: "−0.53%", peers: "−1.76%", insight: "Year to date you are up; the market is up, sector and peers down." },
      three_month: { stock: "+11.22%", market: "+10.76%", sector: "−0.36%", peers: "−5.15%", insight: "Over 3 months you are up; the market is up, sector and peers down." },
      six_month: { stock: "+15.96%", market: "+16.87%", sector: "+3.91%", peers: "−7.01%", insight: "Over 6 months you are up; the market and sector are up, peers down." },
      conclusion: "Trading conditions support execution. Keep an eye on the SBL pool and short interest; otherwise focus on company-specific catalysts."
    },
    drivers: {
      overall: "About 76% of recent price moves come from company-specific factors, 23% from the sector, and 1% from the market. The model explains 13% of moves.",
      interpretation: "Company news and fundamentals drive most moves; sector has meaningful influence. In the low-vol regime, sector Granger-causes stock returns. The stock leads the market by 5 days at best correlation.",
      rolling_change: "Over rolling windows, company-specific share has ranged 68–92%; sector 6–25%, market 1–11%.",
      beta: "Sensitivity to the market is very low (~0.02); sensitivity to the sector is moderate (~0.88). The stock is largely company-driven with sector link."
    },
    regime: {
      overall: "We see three environments: Low Vol (67%), Medium Vol (29%), and High Vol (2%). You are currently in the medium-volatility regime.",
      current: "Medium Vol",
      transitions: "From Medium Vol, the market transitions to Low Vol with probability 100%. From Low Vol, it goes to Medium Vol about 50%, stays Low 46%, High 4%. High Vol tends to persist or move to Medium.",
      trading_implications: "In the current medium-vol regime, sector does not Granger-cause returns; use company news and order flow for context."
    },
    trader_composition: {
      overall: "By number of trades, 84% are retail. By value traded, institutional and mixed each account for about 40%, retail 18%.",
      retail_heavy: "Retail drives trade count; institutions and mixed sizes share most of the value.",
      institutional_gap: "Institutional share of volume (40%) supports block trading; mixed and retail provide most of the order flow count.",
      peer_comparison: "You are among the most retail-heavy by trade count (ODBU, BMGU, 5F4, 5UX, CRPU, LJ3, D5IU, UD1U, MXNU); by value you have the highest institutional share in the set (40.5%), similar to CRPU and MXNU."
    },
    price_moving: {
      overall: "About 13% of trades moved the price. Retail orders dominate in both directions (roughly 81% of price-moving trades).",
      interpretation: "A smaller share of trades move the price than in some peers; execution quality is reasonable for size.",
      asymmetry: "Trades that pushed the price up were on average slightly larger than those that pushed it down (8.4K vs 7.6K).",
      by_trader_type: "Most price-moving activity is retail, in both directions; institutional share is about 3–4%."
    },
    short_selling: {
      overall: "Short selling is low: about 0.2% of volume on average over 3 months. The SBL lending pool is 6.2M shares (~30 days of volume); if the entire pool were sold, estimated impact is ~3.4%.",
      level: "3-month average short share of volume is ~0.2% (peak ~8.7%). This is low versus peers; CRPU has the highest in the set (~2.1%).",
      correlation: "When short activity is higher, returns tend to be slightly higher (positive correlation 0.15)—unusual, possibly shorts during up days.",
      trend: "Short interest has built significantly from a low base (+3648% MoM in one month, YoY +60%). Recent 14 days averaged 0.6% (above 3M avg).",
      peaks: "One elevated day in the last 14 (8.7% short on 2026-01-27)."
    },
    execution: {
      overall: "Trading cost from price impact is low for 100K (−0.46%); moderate for 1M–2.5M (−3.4%). A US$50K trade is about 47% of typical daily volume—best in the peer set.",
      concern: "The main execution risk is not day-to-day cost but the possibility of extra selling pressure if the large SBL pool is unwound in stress.",
      peer_context: "You have the best capacity in the peer set for a 50K ticket (47% of ADV). Next are CRPU (221%), MXNU (604%), UD1U (996%), LJ3 (1024%); D5IU, 5UX, 5F4 and BMGU are all >200% ADV for 50K."
    },
    intraday: {
      overall: "Trading is concentrated in time: most volume is in continuous trading (~93–96%), with about 4–7% in auctions. The busiest times are 09:00 (13.4%), 16:30 (12.5%), and 10:00 (10.0%).",
      hhi_interpretation: "The concentration index (HHI) is in the concentrated range—liquidity clusters in a few buckets.",
      best_times: "The best windows for size are around 09:00, 16:30, and 10:00.",
      peer_ranking: "Your HHI is in the middle of the peer pack; CRPU has the most spread volume (lowest HHI); UD1U, LJ3, 5UX, MXNU, D5IU and 5F4 are concentrated; BMGU is highly concentrated."
    },
    ofi: {
      overall: "Order flow is one-sided (about 65% average absolute imbalance over 3 months). Imbalance and same-day returns move together (moderate positive correlation). L2 order-book imbalance does not significantly predict mid-price.",
      daily_vs_intraday: "Daily order flow lines up with returns (correlation +0.38). Intraday L2 OFI does not Granger-cause mid-price (p≈0.08).",
      l2_signal: "Over 298 L2 snapshots (last 7 days), OFI% does not significantly predict mid-price (p≈0.08). No short-term predictive signal from the order book.",
      day_breakdown: "Over 3 months, net selling days (60%) outnumber net buying days (37%); balanced days about 3%."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #179 of 562 (S$315M); FTSE size band Fledgling. Near FTSE All-Share (98.5% cumulative mcap). STI and iEdge Next 50 require top 30 and top 80 rank respectively.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve rank (currently 179) and turnover to move toward STI (top 30) or iEdge Next 50 (top 80); maintain free float (83.4%) and velocity for FTSE All-Share."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["ODBU", "D5IU", "CRPU", "BMGU", "MXNU", "LJ3", "5F4", "UD1U", "5UX"],
      scores: [61.83, 70.07, 80.82, 20.79, 65.23, 67.38, 65.77, 66.31, 60.39],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [105272.75, 43219.46, 452998.79, 37.76, 165514.8, 97653.86, 34987.16, 100375.96, 47916.85],
      total: 558
    },
    market_comparison: {
      sector_name: "REIT - Retail",
      sector_count: 8,
      market_count: 558,
      company: { volatility: 0.00926, adv: 105272.75, spread_pct: 0.00957, turnover_ratio: 0.000412, amihud: 5.92e-8, trades: 20 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.0110, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 1979203, median: 14129.2, min: 0, max: 191371406, p5: 0, p95: 7950107, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.30, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00367, median: 0.000374, min: 0, max: 0.705, p5: 0, p95: 0.0107, count: 537 },
        amihud: { direction: "lower_is_better", mean: 8.76e-05, median: 9.69e-08, min: 0, max: 0.0235, p5: 0, p95: 0.000108, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.0181, median: 0.00582, min: 0, max: 0.111, p5: 0, p95: 0.0755, count: 8 },
        adv: { direction: "higher_is_better", mean: 6750456, median: 455437, min: 37.77, max: 41978750, p5: 15156, p95: 30776695, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0298, median: 0.00787, min: 0.00419, max: 0.118, p5: 0.00428, p95: 0.105, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00330, median: 0.00200, min: 0.000717, max: 0.00750, p5: 0.000868, p95: 0.00719, count: 6 },
        amihud: { direction: "lower_is_better", mean: 1.76e-6, median: 9.87e-9, min: 0, max: 1.30e-5, p5: 0, p95: 8.79e-6, count: 8 },
        trades: { direction: "higher_is_better", mean: 1070, median: 296, min: 0.5, max: 5132, p5: 7.33, p95: 4073, count: 8 }
      },
      peers: {
        adv: { direction: "higher_is_better", mean: 117838, median: 72785.4, min: 37.76, max: 452999, p5: 12270, p95: 352379, count: 8 },
        trades: { direction: "higher_is_better", mean: 61.81, median: 36.75, min: 0.5, max: 237.5, p5: 6.8, p95: 185.52, count: 8 },
        volatility: { direction: "lower_is_better", mean: 0.0238, median: 0.0101, min: 0, max: 0.111, p5: 0, p95: 0.0857, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0361, median: 0.0154, min: 0.00731, max: 0.118, p5: 0.00816, p95: 0.105, count: 8 },
        amihud: { direction: "lower_is_better", mean: 1.91e-6, median: 1.38e-7, min: 0, max: 1.30e-5, p5: 1.79e-9, p95: 8.79e-6, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00161, median: 0.00089, min: 1.92e-7, max: 0.00674, p5: 4.96e-5, p95: 0.00514, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: 5.83, market: 5.57, sector: -0.53, peers: -1.76 },
      { horizon: "3M", stock: 11.22, market: 10.76, sector: -0.36, peers: -5.15 },
      { horizon: "6M", stock: 15.96, market: 16.87, sector: 3.91, peers: -7.01 },
      { horizon: "YTD", stock: 5.83, market: 5.57, sector: -0.53, peers: -1.76 }
    ],
    drivers: {
      share_market: 1.14,
      share_sector: 22.96,
      share_idio: 75.90,
      beta_market: 0.0242,
      beta_sector: 0.8786,
      r_squared: 12.92,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.199, -0.008, 0.147, -0.040, -0.077, 0.147, -0.023, 0.065, -0.019, -0.062, 0.164],
        corr_sector: [0.182, -0.095, 0.151, -0.071, -0.321, 0.359, -0.294, 0.070, 0.015, 0.094, -0.112],
        best: { market: -5, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 0.1132, share_sector: 0.2071, share_idio: 0.6797 }, regression: { r_squared: 0.156 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 0.0146, share_sector: 0.0632, share_idio: 0.9222 }, regression: { r_squared: 0.0079 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 0.0588, share_sector: 0.2530, share_idio: 0.6881 }, regression: { r_squared: 0.207 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 0.0161, share_sector: 0.1808, share_idio: 0.8031 }, regression: { r_squared: 0.080 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 0.0246, share_sector: 0.2062, share_idio: 0.7692 }, regression: { r_squared: 0.080 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 0.0114, share_sector: 0.2296, share_idio: 0.7590 }, regression: { r_squared: 0.129 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [11.32, 1.46, 5.88, 1.61, 2.46, 1.14],
        sector: [20.71, 6.32, 25.30, 18.08, 20.62, 22.96],
        idio: [67.97, 92.22, 68.81, 80.31, 76.92, 75.90]
      },
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "High Vol", "Medium Vol"],
        pct_time: [0.675, 0.024, 0.286],
        current_regime: 2,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 0, volatility: 0.000001, mean_ret_pct: 0, volatility_pct: 0, n_days: 85, pct_time: 0.675 },
          { id: 1, label: "High Vol", mean_ret: -0.01961, volatility: 0.02965, mean_ret_pct: -1.96, volatility_pct: 2.96, n_days: 3, pct_time: 0.024 },
          { id: 2, label: "Medium Vol", mean_ret: -0.00980, volatility: 0.00044, mean_ret_pct: -0.98, volatility_pct: 0.04, n_days: 36, pct_time: 0.286 }
        ],
        transitions: [
          [0.459, 0.499, 0.041],
          [1.0, 8.3e-7, 0],
          [2.2e-6, 0.558, 0.442]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.54, quantity: 383100, value: 206874 },
        { level: 2, price: 0.535, quantity: 71000, value: 37985 },
        { level: 3, price: 0.53, quantity: 180200, value: 95506 },
        { level: 4, price: 0.525, quantity: 18000, value: 9450 },
        { level: 5, price: 0.52, quantity: 138900, value: 72228 },
        { level: 6, price: 0.515, quantity: 15000, value: 7725 },
        { level: 7, price: 0.51, quantity: 36800, value: 18768 },
        { level: 8, price: 0.505, quantity: 81500, value: 41157.5 },
        { level: 9, price: 0.5, quantity: 213400, value: 106700 },
        { level: 10, price: 0.495, quantity: 6000, value: 2970 }
      ],
      asks: [
        { level: 1, price: 0.545, quantity: 8100, value: 4414.5 },
        { level: 2, price: 0.55, quantity: 95500, value: 52525 },
        { level: 3, price: 0.555, quantity: 10000, value: 5550 },
        { level: 4, price: 0.565, quantity: 10000, value: 5650 },
        { level: 5, price: 0.57, quantity: 30000, value: 17100 },
        { level: 6, price: 0.58, quantity: 400, value: 232 },
        { level: 7, price: 0.585, quantity: 10000, value: 5850 },
        { level: 8, price: 0.59, quantity: 20000, value: 11800 },
        { level: 9, price: 0.6, quantity: 10000, value: 6000 },
        { level: 10, price: 0.61, quantity: 20000, value: 12200 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 47,
      peers: [
        { ticker: "CRPU", pct: 221 },
        { ticker: "MXNU", pct: 604 },
        { ticker: "UD1U", pct: 996 },
        { ticker: "LJ3", pct: 1024 },
        { ticker: "5UX", pct: 2087 },
        { ticker: "D5IU", pct: 2314 },
        { ticker: "5F4", pct: 2858 },
        { ticker: "BMGU", pct: 26485 }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "USD",
      n_trades: 337,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 10000, instit_min: 50000 },
      composition: {
        retail_pct: 0.8427,
        mixed_pct: 0.1335,
        instit_pct: 0.0237,
        retail_qty_pct: 0.1853,
        mixed_qty_pct: 0.4095,
        instit_qty_pct: 0.4052,
        retail_notional_pct: 0.1839,
        mixed_notional_pct: 0.4097,
        instit_notional_pct: 0.4064
      },
      trade_size: { avg: 6440, median: 505 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 319, retail_pct: 0.8370, mixed_pct: 0.1379, instit_pct: 0.0251, avg_trade_size: 6765, retail_qty_pct: 0.1853, mixed_qty_pct: 0.4071, instit_qty_pct: 0.4076, total_quantity: 4069800 },
          { month: "2025-12", n_trades: 751, retail_pct: 0.9081, mixed_pct: 0.0812, instit_pct: 0.0107, avg_trade_size: 3232, retail_qty_pct: 0.2698, mixed_qty_pct: 0.5107, instit_qty_pct: 0.2195, total_quantity: 4818700 },
          { month: "2025-11", n_trades: 295, retail_pct: 0.8847, mixed_pct: 0.0949, instit_pct: 0.0203, avg_trade_size: 4157, retail_qty_pct: 0.1893, mixed_qty_pct: 0.4945, instit_qty_pct: 0.3162, total_quantity: 2438000 },
          { month: "2025-10", n_trades: 855, retail_pct: 0.9485, mixed_pct: 0.0421, instit_pct: 0.0094, avg_trade_size: 2862, retail_qty_pct: 0.4486, mixed_qty_pct: 0.2800, instit_qty_pct: 0.2714, total_quantity: 4912400 },
          { month: "2025-09", n_trades: 1017, retail_pct: 0.8997, mixed_pct: 0.0895, instit_pct: 0.0108, avg_trade_size: 4326, retail_qty_pct: 0.4330, mixed_qty_pct: 0.3525, instit_qty_pct: 0.2146, total_quantity: 8816200 },
          { month: "2025-08", n_trades: 1009, retail_pct: 0.8940, mixed_pct: 0.0961, instit_pct: 0.0099, avg_trade_size: 4253, retail_qty_pct: 0.2383, mixed_qty_pct: 0.5703, instit_qty_pct: 0.1914, total_quantity: 8877100 }
        ]
      },
      peer_comparison: [
        { ticker: "ODBU", currency: "USD", is_target: true, retail_pct: 0.8427, mixed_pct: 0.1335, instit_pct: 0.0237, retail_qty_pct: 0.1853, mixed_qty_pct: 0.4095, instit_qty_pct: 0.4052, retail_notional_pct: 0.1839, mixed_notional_pct: 0.4097, instit_notional_pct: 0.4064, avg_trade_size: 6440, thresholds: { retail_max: 10000, instit_min: 50000 } },
        { ticker: "BMGU", currency: "SGD", is_target: false, retail_pct: 0.9956, mixed_pct: 0.0044, instit_pct: 0, retail_qty_pct: 0.5718, mixed_qty_pct: 0.4282, instit_qty_pct: 0, retail_notional_pct: 0.5784, mixed_notional_pct: 0.4216, instit_notional_pct: 0, avg_trade_size: 191, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5F4", currency: "SGD", is_target: false, retail_pct: 0.9826, mixed_pct: 0.0174, instit_pct: 0, retail_qty_pct: 0.9002, mixed_qty_pct: 0.0998, instit_qty_pct: 0, retail_notional_pct: 0.8973, mixed_notional_pct: 0.1027, instit_notional_pct: 0, avg_trade_size: 3028, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5UX", currency: "SGD", is_target: false, retail_pct: 0.9601, mixed_pct: 0.0399, instit_pct: 0, retail_qty_pct: 0.7044, mixed_qty_pct: 0.2956, instit_qty_pct: 0, retail_notional_pct: 0.7021, mixed_notional_pct: 0.2979, instit_notional_pct: 0, avg_trade_size: 2773, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "CRPU", currency: "SGD", is_target: false, retail_pct: 0.9587, mixed_pct: 0.0307, instit_pct: 0.0106, retail_qty_pct: 0.2269, mixed_qty_pct: 0.3061, instit_qty_pct: 0.4669, retail_notional_pct: 0.2269, mixed_notional_pct: 0.3061, instit_notional_pct: 0.4670, avg_trade_size: 2674, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "LJ3", currency: "SGD", is_target: false, retail_pct: 0.9547, mixed_pct: 0.0443, instit_pct: 0.0010, retail_qty_pct: 0.5299, mixed_qty_pct: 0.4286, instit_qty_pct: 0.0415, retail_notional_pct: 0.5287, mixed_notional_pct: 0.4304, instit_notional_pct: 0.0409, avg_trade_size: 2533, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "D5IU", currency: "SGD", is_target: false, retail_pct: 0.9478, mixed_pct: 0.0458, instit_pct: 0.0064, retail_qty_pct: 0.3512, mixed_qty_pct: 0.4012, instit_qty_pct: 0.2476, retail_notional_pct: 0.3697, mixed_notional_pct: 0.4028, instit_notional_pct: 0.2275, avg_trade_size: 2941, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "UD1U", currency: "SGD", is_target: false, retail_pct: 0.9155, mixed_pct: 0.0798, instit_pct: 0.0047, retail_qty_pct: 0.3276, mixed_qty_pct: 0.5298, instit_qty_pct: 0.1426, retail_notional_pct: 0.3278, mixed_notional_pct: 0.5307, instit_notional_pct: 0.1415, avg_trade_size: 3942, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "MXNU", currency: "GBP", is_target: false, retail_pct: 0.7809, mixed_pct: 0.1907, instit_pct: 0.0284, retail_qty_pct: 0.1628, mixed_qty_pct: 0.5640, instit_qty_pct: 0.2732, retail_notional_pct: 0.1626, mixed_notional_pct: 0.5637, instit_notional_pct: 0.2738, avg_trade_size: 6286, thresholds: { retail_max: 7900, instit_min: 39500 } }
      ],
      currency_thresholds: { GBP: { retail_max: 7900, instit_min: 39500 }, USD: { retail_max: 10000, instit_min: 50000 }, SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 4245,
      price_moving_trades: 535,
      pct_price_moving: 12.60,
      all_movers: { count: 535, avg_size: 7989, median_size: 1040, retail_count: 435, mixed_count: 80, institutional_count: 20, retail_pct: 81.31, mixed_pct: 14.95, instit_pct: 3.74 },
      positive_movers: { count: 272, avg_size: 8384, median_size: 1601, retail_count: 221, mixed_count: 40, institutional_count: 11, retail_pct: 81.25, mixed_pct: 14.71, instit_pct: 4.04 },
      negative_movers: { count: 263, avg_size: 7580, median_size: 792, retail_count: 214, mixed_count: 40, institutional_count: 9, retail_pct: 81.37, mixed_pct: 15.21, instit_pct: 3.42 }
    },
    short_selling: {
      data_available: true,
      security_name: "UtdHampshReitUSD",
      mapping: { ticker_to_security: "UtdHampshReitUSD", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      sbl_pool: {
        valid: true,
        lending_pool: 6215666,
        lending_pool_value: 3387538,
        latest_price: 0.545,
        lending_rate_pct: 0.35,
        borrowing_rate_pct: 0.5,
        pool_as_pct_adv: 3053.28,
        days_to_liquidate: 30.53,
        estimated_impact_pct: 0.0339,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Significant price impact if entire pool sold",
        timestamp: ""
      },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.00381, max_short_ratio: 0.0867, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.00222, max_short_ratio: 0.0867, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.00142, max_short_ratio: 0.0867, interpretation: "Low short interest" } }
      },
      correlation: { valid: true, correlation: 0.1519, interpretation: "Positive - unusual (shorts during up days?)" },
      peaks: [],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0.00433 },
          { month: "2025-12", avg_short_ratio: 0.000116 },
          { month: "2025-11", avg_short_ratio: 0.00283 },
          { month: "2025-10", avg_short_ratio: 0.00156 },
          { month: "2025-09", avg_short_ratio: 0.000185 },
          { month: "2025-08", avg_short_ratio: 0 },
          { month: "2025-07", avg_short_ratio: 0 },
          { month: "2025-06", avg_short_ratio: 0 },
          { month: "2025-05", avg_short_ratio: 0.00252 },
          { month: "2025-04", avg_short_ratio: 0 },
          { month: "2025-03", avg_short_ratio: 0 },
          { month: "2025-02", avg_short_ratio: 0.00271 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0.00433, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.000116, change_pct: -97.33 },
          { month: "2025-11", avg_short_ratio: 0.00283, change_pct: 2353.62 },
          { month: "2025-10", avg_short_ratio: 0.00156, change_pct: -45.11 },
          { month: "2025-09", avg_short_ratio: 0.000185, change_pct: -88.12 },
          { month: "2025-08", avg_short_ratio: 0, change_pct: -100 },
          { month: "2025-07", avg_short_ratio: 0, change_pct: null },
          { month: "2025-06", avg_short_ratio: 0, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0.00252, change_pct: null },
          { month: "2025-04", avg_short_ratio: 0, change_pct: -100 },
          { month: "2025-03", avg_short_ratio: 0, change_pct: null },
          { month: "2025-02", avg_short_ratio: 0.00271, change_pct: null }
        ],
        interpretation: "Shorts building significantly (+3648% MoM) | YoY: +60%"
      },
      peer_comparison: [
        { ticker: "ODBU", avg_short_ratio: 0.00222, max_short_ratio: 0.0867, is_target: true },
        { ticker: "BMGU", avg_short_ratio: 0.00002, max_short_ratio: 0.00735, is_target: false },
        { ticker: "5F4", avg_short_ratio: 0.00046, max_short_ratio: 0.0546, is_target: false },
        { ticker: "D5IU", avg_short_ratio: 0.00201, max_short_ratio: 0.2702, is_target: false },
        { ticker: "UD1U", avg_short_ratio: 0.00222, max_short_ratio: 0.2456, is_target: false },
        { ticker: "LJ3", avg_short_ratio: 0.00367, max_short_ratio: 0.6925, is_target: false },
        { ticker: "5UX", avg_short_ratio: 0.00748, max_short_ratio: 0.5193, is_target: false },
        { ticker: "CRPU", avg_short_ratio: 0.02091, max_short_ratio: 0.2921, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0, short_vol: 0, total_vol: 498000, close: 0.545, return: 0 },
          { date: "2026-01-29", short_ratio: 0.00024, short_vol: 100, total_vol: 416000, close: 0.545, return: 0.00926 },
          { date: "2026-01-28", short_ratio: 0, short_vol: 0, total_vol: 867300, close: 0.54, return: -0.00917 },
          { date: "2026-01-27", short_ratio: 0.0867, short_vol: 19000, total_vol: 219100, close: 0.545, return: 0.00926 },
          { date: "2026-01-26", short_ratio: 0, short_vol: 0, total_vol: 155600, close: 0.54, return: 0.00935 }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.0346, continuous: 0.9315, closing: 0.0095, auctions: 0.0685, other: 0 },
        "3M": { opening: 0.0380, continuous: 0.9361, closing: 0.0106, auctions: 0.0639, other: 0 },
        "6M": { opening: 0.0231, continuous: 0.9561, closing: 0.0098, auctions: 0.0439, other: 0 }
      },
      hhi: { "1M": 0.390, "3M": 0.429, "6M": 0.394 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0314 },
        { time: "09:00", avg_share: 0.1339 },
        { time: "09:30", avg_share: 0.0373 },
        { time: "10:00", avg_share: 0.0997 },
        { time: "10:30", avg_share: 0.0666 },
        { time: "11:00", avg_share: 0.0859 },
        { time: "11:30", avg_share: 0.035 },
        { time: "12:00", avg_share: 0.0288 },
        { time: "12:30", avg_share: 0.022 },
        { time: "13:00", avg_share: 0.0161 },
        { time: "13:30", avg_share: 0.0301 },
        { time: "14:00", avg_share: 0.0382 },
        { time: "14:30", avg_share: 0.0604 },
        { time: "15:00", avg_share: 0.0658 },
        { time: "15:30", avg_share: 0.0312 },
        { time: "16:00", avg_share: 0.0786 },
        { time: "16:30", avg_share: 0.1248 },
        { time: "17:00", avg_share: 0.014 }
      ],
      peers_hhi_rows: [
        { ticker: "ODBU", auctions_pct: 4.08, hhi: 0.403, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300", you: true } },
        { ticker: "CRPU", auctions_pct: 11.51, hhi: 0.231, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "UD1U", auctions_pct: 7.13, hhi: 0.338, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "LJ3", auctions_pct: 6.85, hhi: 0.379, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5UX", auctions_pct: 3.38, hhi: 0.384, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "MXNU", auctions_pct: 7.77, hhi: 0.399, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "D5IU", auctions_pct: 10.72, hhi: 0.459, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5F4", auctions_pct: 4.05, hhi: 0.530, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "BMGU", auctions_pct: 1.72, hhi: 0.742, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "65.5%", note_suffix: " - 3-month average absolute OFI (one-sided)." },
        { value: "0.38", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "Not significant", note_suffix: " - L2 OFI Granger-causality not significant (p≈0.08)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−3.4%", avg_abs: "56.4%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "−12.0%", avg_abs: "65.5%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "−13.0%", avg_abs: "57.5%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.38",
      pie: { net_buy_days: 36.8, net_sell_days: 60.3, balanced_days: 2.9 },
      l2_compact_text: "Over the last 7 days we analyzed 298 valid L2 snapshots (top 4 levels). Average L2 OFI was +2.90% of book value (abs: 21.39%). Granger causality: OFI% does not significantly predict mid-price changes (p≈0.08). No short-term predictive signal from the order book.",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-05-08", ofi: "−100%", direction: "SELL pressure", return: "−1.1%" },
        { date: "2025-09-09", ofi: "+100%", direction: "BUY pressure", return: "+1.0%" },
        { date: "2024-10-30", ofi: "+100%", direction: "BUY pressure", return: "+0.0%" },
        { date: "2024-11-19", ofi: "+100%", direction: "BUY pressure", return: "+1.1%" },
        { date: "2025-11-06", ofi: "−100%", direction: "SELL pressure", return: "+1.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#179 of 562", sub: "S$315M • Fledgling" },
        { title: "Free Float", value: "83.4%", sub: "Float mcap S$263M" },
        { title: "Avg Daily Turnover", value: "S$115K", sub: "Velocity 9.21%" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #179 — outside top 30", gaps: ["Need rank ≤30 (currently 179)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "At 98.5% — near All-Share cutoff", gaps: ["Need top 98% mcap (currently 98.5%)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #179 — below top 80", gaps: ["Need rank ≤80 (currently 179)"] }
      ],
      insight: "Not currently eligible for major indices. Near FTSE All-Share (98.5% cumulative mcap). To qualify for STI need rank ≤30; for iEdge Next 50 need rank ≤80.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (currently 179) for STI (top 30) or iEdge Next 50 (top 80)", "Maintain free float (83.4%) and turnover; velocity 9.21% supports Fledgling band"]
    }
  }
};

export default REPORT_DATA;
