// @ts-nocheck

// ============================================================================
// Leong Guan Hldgs (LGH) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
// ============================================================================

import type { ReportData } from '@/types/report';

export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector first (Packaged Foods), then the same industry (Consumer Defensive)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "5JS", name: "Indofood Agri", marketCap: "S$516M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "BQD", name: "Envictus", marketCap: "S$119M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "D03", name: "Del Monte Pac", marketCap: "S$179M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "Q01", name: "QAF", marketCap: "S$549M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "42W", name: "Zixin", marketCap: "S$68M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "MV4", name: "Mewah Intl", marketCap: "S$465M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "Y03", name: "Yeo Hiap Seng", marketCap: "S$379M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "OTS", name: "OTS Holdings", marketCap: "S$26M", sector: "Packaged Foods", industry: "Consumer Defensive" }
  ]
};

export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "LGH",
    company: "Leong Guan Hldgs",
    asof_date: "2026-01-30",
    industry: "Consumer Defensive",
    sector: "Packaged Foods",
    market_cap_display: "23.3M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  theme: {
    badges: {
      header_health: { text: "Liquidity Health: BELOW AVG", bg: "bg-amber-500/20", textColor: "text-amber-400", dot: "bg-amber-500" },
      liq_section: { text: "Liquidity score: 45.9 — BELOW AVG", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "HIGH crossing cost", bg: "bg-red-500/20", textColor: "text-red-300" },
      intraday: { text: "CONCENTRATED", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided imbalance", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "Low short interest", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      index_status: { text: "Not eligible (rank #428)", bg: "bg-slate-500/20", textColor: "text-slate-300" }
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
    liq_subtitle: "How your stock compares to similar Packaged Foods / Consumer Defensive names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "Liquidity is thin; most price moves are company-specific. Execution cost is high for size. Short interest is low; no SBL pool data.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 74% of recent price moves come from company-specific factors; 19% from the sector and 7% from the market." },
      { title: "Market Link", text: "Market leads by 2 days at best correlation; stock–market correlation is near zero. Sector is contemporaneous (ρ=0.62); company-specific news is the main driver." },
      { title: "Sector Link", text: "Sector and stock move together (contemporaneous). Market leads by 2 days at best correlation." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company share means the stock moves mainly on its own news and fundamentals.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Market leads by 2 days at best correlation; sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Single rolling window: company-specific share about 74%, market 7%, sector 19%.",
    drivers_bottom_line: "Takeaway: Your stock is company-driven. Own results and news matter most; sector has some influence, market less.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Trading cost is high (2.7% spread)—limit orders and patience are important.",
      "Price impact is large for size; a S$50K trade is about 603% of daily volume.",
      "Earnings and company news are the main catalysts; sector and market are secondary."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "High Vol (59% of time)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Medium Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Current regime: High Vol.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is about 2.15%. Limited depth; selling 100K–2.5M moves the price by about 10.6%.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "Your stock has the highest capacity burden: a S$50K trade is about 603% of typical daily volume; peers are also thin (all >50% ADV).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Trading conditions are challenging: thin book and high price impact (~10.6%) for sells of 100K–2.5M SGD. Use limit orders and spread execution.",
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under S$13,500",
    trader_mixed_threshold: "Mixed: Trades S$13,500 - S$67,500",
    trader_instit_threshold: "Institutional: Trades over S$67,500",
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail concentration across comparable names",
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes (microstructure sensitivity)",
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most volume is in continuous trading (~83–87%); auctions account for ~13–17%. Peak at 15:30 (13.6%), then 09:00 and 10:30.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "This index shows how spread out trading is through the day. Your value: {value} (concentrated).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity is concentrated in a few buckets; larger clips should target 15:30, 09:00, 10:30.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is highly concentrated through the day. Best depth is around 15:30 and at the open.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does that explain same-day price moves?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow imbalance is the difference between buy- and sell-initiated volume. Over 3 months the average absolute imbalance is about 50% (one-sided). L2 order-book OFI does not significantly predict mid-price.",
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
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from median volume, trades, spread, impact. Higher is better." }, value: "45.9", suffix: "/100", bar_pct: 46, color_value: "text-amber-400", color_bar: "text-amber-400", subtext: "Rank 303/558 • Below peer median", interpretation: { text: "BELOW PEERS", cls: "interpretation-bad", icon: "◆" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Median spread is immediate cost to trade. Tighter is better." }, value: "2.73", suffix: "%", bar_pct: 15, color_value: "text-red-300", color_bar: "text-red-300", subtext: "Above peer median (~2.3%)", interpretation: { text: "HIGH", cls: "interpretation-bad", icon: "◆" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "8.3K", suffix: "SGD", bar_pct: 10, color_value: "text-red-300", color_bar: "text-red-300", subtext: "Peer median: 25.2K • −67% vs peers", interpretation: { text: "BELOW PEERS", cls: "interpretation-bad", icon: "◆" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "74.3", suffix: "% company", bar_pct: 74, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 6.7% • Sector: 19.0%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "Your stock has thin liquidity: rank 303/558, ~8.3K SGD median daily volume (about 67% below peer median), and high trading cost (2.7% spread).",
      "Selling size is costly: even S$100K moves the price by about 10.6%. A S$50K trade is about 603% of typical daily volume—execution should be spread and patient.",
      "Short interest is low and there is no SBL pool data; execution risk is mainly from thin liquidity and concentration, not from short covering."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Reduce execution cost with patient, limit-order strategy", bullets: ["Spread is 2.7% and depth is thin. Use limit orders and avoid crossing the spread for size.", "Consider spreading larger orders over time and targeting higher-liquidity windows (e.g. 15:30, 09:00)."] },
            { title: "Monitor order-flow imbalance for timing", bullets: ["Order flow is one-sided (~50% |OFI| on average) and correlates with same-day returns. Use extreme imbalance days as context for volatility."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            { title: "Lead with company narrative in investor messaging", bullets: ["About 74% of price moves are company-specific. Emphasise results, guidance, and fundamentals."] },
            { title: "Improve two-way interest to support liquidity", bullets: ["Retail-heavy, thin volume. Encourage visibility and regular disclosure to attract steady interest."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Improve index eligibility", bullets: ["Rank #428 of 562—need top 30 for STI, top 80 for iEdge Next 50. Float and velocity data unavailable.", "FTSE All-Share: currently 99.9% cumulative mcap (Fledgling band)."] },
            { title: "Run a simple monthly liquidity dashboard", bullets: ["Monitor: spread, daily volume, trading concentration, order-flow balance, and short ratio when available."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "7", sub: "Below peer median (~11)", interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" } },
      { title: "Median Turnover (Vol/Free Float)", value: "0.04%", sub: "Above peer median (~0.03%)", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Daily Volatility", value: "2.2%", sub: "Above peer median (~0.6%)", interp: { text: "HIGH", cls: "interpretation-bad", icon: "◆" } }
    ],
    liq_insight: "Trading conditions are weak versus peers: low liquidity score, low daily volume, and wide spread. Execution is costly for size; the main focus should be on reducing trading cost and avoiding urgency.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "0.2325", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "2.15%", note: "Immediate trading cost", color: "text-red-300" },
      { title: "Depth", value: "Limited", note: "7 bid levels, 10 ask levels", color: "text-amber-400" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −10.6% • Fill: 71.8% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −10.6% • Fill: 7.2% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −10.6% • Fill: 2.9% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided (50%)" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Moderate positive" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Not significant" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "Your stock ranks in the bottom half for liquidity (303/558). Typical daily volume is 8.3K SGD—about 67% below the peer median (25.2K)—and the spread is wide at 2.7%, so trading cost is high.",
      strengths: ["Short interest is low versus peers, reducing squeeze risk.", "Order flow correlates with same-day returns, giving some timing context."],
      concerns: ["Daily volume and spread make size costly; a S$50K trade is about 603% of ADV.", "Concentrated intraday liquidity (high HHI); execution should target specific times.", "L2 order book OFI does not significantly predict price—no short-term signal from the book."],
      peer_context: "You have one of the lowest liquidity scores in the peer set. 42W, Q01 have the best capacity for a 50K ticket (still >900% ADV); 5JS, D03, BQD, Y03, MV4, OTS are all thin. All peers show >50% ADV for a 50K ticket."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is 8.3K SGD—below your sector and peer group.", vs_market: "The market median is ~18K; you are below it.", vs_sector: "Sector median is ~25.2K; you are about 67% lower.", vs_peers: "Peer median is 25.2K; you are about 67% lower." },
      spread: { insight: "Trading cost (spread) is 2.73%—wider than the peer median (~2.3%).", vs_market: "Market median spread is ~2.2%; you are wider.", vs_sector: "Sector median ~2.2%; you are slightly wider.", vs_peers: "Peer median ~2.3%; you are wider." },
      volatility: { insight: "Daily price swings are 2.2%—well above sector median (~0.2%); peer median volatility is N/A in console.", vs_market: "Market median volatility is ~0.6%; you are higher.", vs_sector: "Sector median ~0.2%; you are much higher.", vs_peers: "Peers median volatility not reported; your volatility is high versus sector." },
      trades: { insight: "You have about 7 trades per day—below the peer median (~11).", vs_market: "Market median is ~10; you are lower.", vs_sector: "Sector median ~11; you are lower.", vs_peers: "Peer median ~11; you are about 36% lower." }
    },
    performance: {
      overall: "Returns are mixed: up over 1M and YTD, down over 3M/6M. Liquidity is thin; execution cost is the main concern. Short interest is low.",
      ytd: { stock: "+2.17%", market: "+5.57%", sector: "+0.91%", peers: "+1.77%", insight: "Year to date you are up slightly; the market, sector and peers are also up." },
      three_month: { stock: "−2.08%", market: "+8.50%", sector: "+0.58%", peers: "+1.06%", insight: "Over 3 months you are down; the market, sector and peers are up." },
      six_month: { stock: "−2.08%", market: "+8.50%", sector: "+0.58%", peers: "+1.06%", insight: "Over 6 months you are down; the market and peers are up." },
      conclusion: "Trading conditions are challenging. Focus on execution discipline—limit orders and spreading size—and company-specific catalysts."
    },
    drivers: {
      overall: "About 74% of recent price moves come from company-specific factors, 19% from the sector, and 7% from the market. The model explains 39% of moves.",
      interpretation: "Company news and fundamentals drive most moves; sector has some influence, market less. The stock is contemporaneous with the sector; market leads by 2 days at best correlation.",
      rolling_change: "Single rolling window: company 74%, market 7%, sector 19%.",
      beta: "Sensitivity to the market is negative (~−0.54); sensitivity to the sector is very high (~17.9). The stock is largely company-driven with strong sector correlation."
    },
    regime: {
      overall: "We see three environments: Low Vol (29%), Medium Vol (12%), and High Vol (59%). You are currently in the high-volatility regime.",
      current: "High Vol",
      transitions: "From High Vol, the market stays there about 51% of the time, moves to Low Vol about 33%, and to Medium Vol about 16%. Transitions from Low Vol go mostly to High Vol (79%).",
      trading_implications: "In the current high-vol regime, expect larger swings; use company news and order flow for context and avoid urgency on extreme imbalance days."
    },
    trader_composition: {
      overall: "By number of trades, 88% are retail. By value traded, retail is about 48%, mixed 48%, and institutional 4%.",
      retail_heavy: "Retail drives trade count; mixed and retail share value almost equally.",
      institutional_gap: "Institutional share of volume is low (4%); most flow is retail and mixed.",
      peer_comparison: "You are among the most retail-heavy by trade count (LGH, OTS, Y03, D03, MV4, 5JS, Q01, BQD, 42W); by value you are balanced (retail/mixed ~48% each), similar to several peers."
    },
    price_moving: {
      overall: "About 28% of trades moved the price. Retail orders dominate in both directions (roughly 81–86% of price-moving trades).",
      interpretation: "A meaningful share of trades move the price; execution quality and timing matter for larger orders.",
      asymmetry: "Trades that pushed the price down were on average about 1.3x larger than those that pushed it up.",
      by_trader_type: "Most price-moving activity is retail, in both directions."
    },
    short_selling: {
      overall: "Short selling is low: about 0.1% of volume on average over 3 months. No SBL lending pool data is available, so covering risk is not quantified.",
      level: "3-month average short share of volume is ~0.1% (peak ~8%). This is low versus peers.",
      correlation: "Correlation between short activity and returns could not be computed (insufficient variation).",
      trend: "Short interest has dropped (covering) from December to January; recent 14-day average is 0%.",
      peaks: "No notable short spikes in the window; short interest is low throughout."
    },
    execution: {
      overall: "Trading cost from price impact is high. Order book depth is limited; selling 100K–2.5M moves the price by about 10.6%. A S$50K trade is about 603% of typical daily volume.",
      concern: "The main execution risk is thin liquidity and high impact. Use limit orders and spread execution; avoid crossing the spread for size.",
      peer_context: "You have the highest capacity burden in the peer set for a 50K ticket (603% of ADV). Next are 42W (904%), Q01 (919%), 5JS (2925%), D03 (3055%), BQD (5666%), Y03 (7585%), MV4 (13002%); OTS is extremely thin."
    },
    intraday: {
      overall: "Trading is concentrated in time: most volume is in continuous trading (~83–87%), with about 13–17% in auctions. The busiest time is 15:30 (13.6%), then 09:00 and 10:30.",
      hhi_interpretation: "The concentration index (HHI) is high—liquidity is concentrated in a few buckets.",
      best_times: "The best windows for size are around 15:30, 09:00, and 10:30.",
      peer_ranking: "Your HHI is in the middle of the peer pack. 42W and Q01 have slightly lower HHI (more spread); D03, 5JS, Y03, BQD, OTS, MV4 are concentrated or highly concentrated."
    },
    ofi: {
      overall: "Order flow is one-sided (about 50% average absolute imbalance over 3 months). Imbalance and same-day returns move together (moderate positive correlation). L2 order-book imbalance does not significantly predict mid-price.",
      daily_vs_intraday: "Daily order flow lines up with returns (correlation +0.44). Intraday L2 OFI does not Granger-cause mid-price (p≈0.16).",
      l2_signal: "Over 73 L2 snapshots (last 7 days), OFI% does not significantly predict mid-price (p≈0.16). No short-term predictive signal from the order book.",
      day_breakdown: "Over 3 months, net selling days (57%) outnumber net buying days (34%); balanced days about 9%."
    },
    index: {
      overall: "Not eligible for major indices. Market cap rank #428 of 562 (S$23M); FTSE size band Fledgling. Float and velocity data unavailable. STI requires rank ≤30; iEdge Next 50 requires rank ≤80; FTSE All-Share requires top 98% mcap (currently 99.9%).",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Improve rank (currently 428) for STI (top 30) or iEdge Next 50 (top 80). Resolve float and velocity data for full eligibility assessment."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["LGH", "5JS", "BQD", "D03", "Q01", "42W", "MV4", "Y03", "OTS"],
      scores: [45.88, 53.41, 41.94, 57.71, 64.70, 63.80, 35.30, 43.19, 19.53],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [8287.5, 34185.5, 17648, 32728.6, 108765.5, 110662.55, 7691, 13183.75, 6],
      total: 558
    },
    market_comparison: {
      sector_name: "Packaged Foods",
      sector_count: 14,
      market_count: 558,
      company: { volatility: 0.02174, adv: 8287.5, spread_pct: 0.02729, turnover_ratio: 0.000351, amihud: 1.66e-6, trades: 7 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.0110, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 2515365, median: 17956.5, min: 0, max: 243209838, p5: 0, p95: 10103622, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.30, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00367, median: 0.000374, min: 0, max: 0.705, p5: 0, p95: 0.0107, count: 537 },
        amihud: { direction: "lower_is_better", mean: 6.89e-05, median: 7.62e-08, min: 0, max: 0.0185, p5: 0, p95: 8.46e-05, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.00505, median: 0.00163, min: 0, max: 0.02174, p5: 0, p95: 0.0163, count: 14 },
        adv: { direction: "higher_is_better", mean: 1452837, median: 25188.3, min: 0, max: 17136792, p5: 0, p95: 7781077, count: 14 },
        spread_pct: { direction: "lower_is_better", mean: 0.1314, median: 0.02204, min: 0.00320, max: 1.304, p5: 0.00441, p95: 0.577, count: 14 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.000473, median: 0.000228, min: 0, max: 0.00241, p5: 0, p95: 0.00148, count: 13 },
        amihud: { direction: "lower_is_better", mean: 2.30e-6, median: 5.02e-8, min: 0, max: 2.74e-5, p5: 0, p95: 1.20e-5, count: 13 },
        trades: { direction: "higher_is_better", mean: 350.14, median: 11.25, min: 0, max: 3416.5, p5: 0, p95: 2066.1, count: 14 }
      },
      peers: {
        adv: { direction: "higher_is_better", mean: 40609, median: 25188.3, min: 6, max: 110662.55, p5: 2695.75, p95: 109998.58, count: 8 },
        trades: { direction: "higher_is_better", mean: 13.25, median: 11, min: 0.5, max: 30, p5: 1.55, p95: 27.55, count: 8 },
        volatility: { direction: "lower_is_better", mean: 0.00371, median: 0, min: 0, max: 0.0133, p5: 0, p95: 0.01243, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.04076, median: 0.02289, min: 0.00601, max: 0.1847, p5: 0.00769, p95: 0.1312, count: 8 },
        amihud: { direction: "lower_is_better", mean: 1.01e-7, median: 1.01e-7, min: 0, max: 2.85e-7, p5: 0, p95: 2.42e-7, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.000548, median: 0.00025, min: 1.73e-6, max: 0.00241, p5: 1.23e-5, p95: 0.00182, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: 2.17, market: 5.57, sector: 0.91, peers: 1.77 },
      { horizon: "3M", stock: -2.08, market: 8.50, sector: 0.58, peers: 1.06 },
      { horizon: "6M", stock: -2.08, market: 8.50, sector: 0.58, peers: 1.06 },
      { horizon: "YTD", stock: 2.17, market: 5.57, sector: 0.91, peers: 1.77 }
    ],
    drivers: {
      share_market: 6.70,
      share_sector: 18.98,
      share_idio: 74.32,
      beta_market: -0.5408,
      beta_sector: 17.925,
      r_squared: 38.75,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.262, 0.193, -0.023, 0.034, 0.275, 0.00187, 0.157, -0.373, -0.042, 0.147, 0.146],
        corr_sector: [0.057, 0.017, 0.097, -0.017, 0.200, 0.619, -0.034, -0.196, -0.270, 0.016, 0.089],
        best: { market: 2, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: false },
        p2: { valid: false },
        p3: { valid: false },
        p4: { valid: false },
        p5: { valid: false },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 0.067, share_sector: 0.190, share_idio: 0.743 }, regression: { r_squared: 0.388 } }
      },
      rolling: {
        ordered: ["2025-11-28 to 2026-01-30"],
        market: [6.70],
        sector: [18.98],
        idio: [74.32]
      },
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "High Vol", "Medium Vol"],
        pct_time: [0.294, 0.588, 0.118],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 0.02151, volatility: 0.000671, mean_ret_pct: 2.15, volatility_pct: 0.067, n_days: 10, pct_time: 0.294 },
          { id: 1, label: "High Vol", mean_ret: -0.02247, volatility: 0.03332, mean_ret_pct: -2.25, volatility_pct: 3.33, n_days: 20, pct_time: 0.588 },
          { id: 2, label: "Medium Vol", mean_ret: 0.07147, volatility: 0.02201, mean_ret_pct: 7.15, volatility_pct: 2.20, n_days: 4, pct_time: 0.118 }
        ],
        transitions: [
          [0.212, 4.5e-7, 0.788],
          [0.261, 0.241, 0.498],
          [0.334, 0.155, 0.511]
        ]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 0.23, quantity: 7000, value: 1610 },
        { level: 2, price: 0.22, quantity: 103800, value: 22836 },
        { level: 3, price: 0.215, quantity: 3000, value: 645 },
        { level: 4, price: 0.21, quantity: 20000, value: 4200 },
        { level: 5, price: 0.205, quantity: 110000, value: 22550 },
        { level: 6, price: 0.2, quantity: 82000, value: 16400 },
        { level: 7, price: 0.18, quantity: 20000, value: 3600 }
      ],
      asks: [
        { level: 1, price: 0.235, quantity: 5000, value: 1175 },
        { level: 2, price: 0.24, quantity: 26700, value: 6408 },
        { level: 3, price: 0.245, quantity: 11000, value: 2695 },
        { level: 4, price: 0.25, quantity: 30200, value: 7550 },
        { level: 5, price: 0.255, quantity: 60000, value: 15300 },
        { level: 6, price: 0.26, quantity: 65000, value: 16900 },
        { level: 7, price: 0.265, quantity: 30000, value: 7950 },
        { level: 8, price: 0.27, quantity: 55000, value: 14850 },
        { level: 9, price: 0.275, quantity: 40000, value: 11000 },
        { level: 10, price: 0.28, quantity: 200000, value: 56000 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 603,
      peers: [
        { ticker: "42W", pct: 904 },
        { ticker: "Q01", pct: 919 },
        { ticker: "5JS", pct: 2925 },
        { ticker: "D03", pct: 3055 },
        { ticker: "BQD", pct: 5666 },
        { ticker: "Y03", pct: 7585 },
        { ticker: "MV4", pct: 13002 },
        { ticker: "OTS", pct: 16666667 }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 256,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500, instit_min: 67500 },
      composition: {
        retail_pct: 0.8828,
        mixed_pct: 0.1133,
        instit_pct: 0.0039,
        retail_qty_pct: 0.4756,
        mixed_qty_pct: 0.4815,
        instit_qty_pct: 0.0429,
        retail_notional_pct: 0.4660,
        mixed_notional_pct: 0.4873,
        instit_notional_pct: 0.0467
      },
      trade_size: { avg: 5646, median: 2550 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 243, retail_pct: 0.8889, mixed_pct: 0.1070, instit_pct: 0.0041, avg_trade_size: 5522, retail_qty_pct: 0.4760, mixed_qty_pct: 0.4773, instit_qty_pct: 0.0466, total_quantity: 5359400 },
          { month: "2025-12", n_trades: 267, retail_pct: 0.9139, mixed_pct: 0.0861, instit_pct: 0, avg_trade_size: 5806, retail_qty_pct: 0.6285, mixed_qty_pct: 0.3715, instit_qty_pct: 0, total_quantity: 6458100 }
        ]
      },
      peer_comparison: [
        { ticker: "LGH", currency: "SGD", is_target: true, retail_pct: 0.8828, mixed_pct: 0.1133, instit_pct: 0.0039, retail_qty_pct: 0.4756, mixed_qty_pct: 0.4815, instit_qty_pct: 0.0429, retail_notional_pct: 0.4660, mixed_notional_pct: 0.4873, instit_notional_pct: 0.0467, avg_trade_size: 5646, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "Y03", currency: "SGD", is_target: false, retail_pct: 0.9881, mixed_pct: 0.0119, instit_pct: 0, retail_qty_pct: 0.8998, mixed_qty_pct: 0.1002, instit_qty_pct: 0, retail_notional_pct: 0.9000, mixed_notional_pct: 0.1000, instit_notional_pct: 0, avg_trade_size: 3240, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "D03", currency: "SGD", is_target: false, retail_pct: 0.9530, mixed_pct: 0.0470, instit_pct: 0, retail_qty_pct: 0.7281, mixed_qty_pct: 0.2719, instit_qty_pct: 0, retail_notional_pct: 0.7316, mixed_notional_pct: 0.2684, instit_notional_pct: 0, avg_trade_size: 3294, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "MV4", currency: "SGD", is_target: false, retail_pct: 0.9326, mixed_pct: 0.0674, instit_pct: 0, retail_qty_pct: 0.6040, mixed_qty_pct: 0.3960, instit_qty_pct: 0, retail_notional_pct: 0.6013, mixed_notional_pct: 0.3987, instit_notional_pct: 0, avg_trade_size: 3405, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5JS", currency: "SGD", is_target: false, retail_pct: 0.9063, mixed_pct: 0.0938, instit_pct: 0, retail_qty_pct: 0.5182, mixed_qty_pct: 0.4818, instit_qty_pct: 0, retail_notional_pct: 0.5205, mixed_notional_pct: 0.4795, instit_notional_pct: 0, avg_trade_size: 4461, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "OTS", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0, instit_pct: 0, retail_qty_pct: 1.0, mixed_qty_pct: 0, instit_qty_pct: 0, retail_notional_pct: 1.0, mixed_notional_pct: 0, instit_notional_pct: 0, avg_trade_size: 1350, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "Q01", currency: "SGD", is_target: false, retail_pct: 0.8728, mixed_pct: 0.1228, instit_pct: 0.0043, retail_qty_pct: 0.4425, mixed_qty_pct: 0.4887, instit_qty_pct: 0.0688, retail_notional_pct: 0.4443, mixed_notional_pct: 0.4862, instit_notional_pct: 0.0695, avg_trade_size: 6637, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "BQD", currency: "SGD", is_target: false, retail_pct: 0.8152, mixed_pct: 0.1739, instit_pct: 0.0109, retail_qty_pct: 0.3624, mixed_qty_pct: 0.5256, instit_qty_pct: 0.1120, retail_notional_pct: 0.3661, mixed_notional_pct: 0.5216, instit_notional_pct: 0.1123, avg_trade_size: 8057, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "42W", currency: "SGD", is_target: false, retail_pct: 0.7992, mixed_pct: 0.1805, instit_pct: 0.0203, retail_qty_pct: 0.2802, mixed_qty_pct: 0.5150, instit_qty_pct: 0.2048, retail_notional_pct: 0.2801, mixed_notional_pct: 0.5127, instit_notional_pct: 0.2072, avg_trade_size: 9689, thresholds: { retail_max: 13500, instit_min: 67500 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 509,
      price_moving_trades: 143,
      pct_price_moving: 28.09,
      all_movers: { count: 143, avg_size: 7673, median_size: 3375, retail_count: 119, mixed_count: 23, institutional_count: 1, retail_pct: 83.22, mixed_pct: 16.08, instit_pct: 0.70 },
      positive_movers: { count: 71, avg_size: 6580, median_size: 2400, retail_count: 61, mixed_count: 10, institutional_count: 0, retail_pct: 85.92, mixed_pct: 14.08, instit_pct: 0 },
      negative_movers: { count: 72, avg_size: 8750, median_size: 4545, retail_count: 58, mixed_count: 13, institutional_count: 1, retail_pct: 80.56, mixed_pct: 18.06, instit_pct: 1.39 }
    },
    short_selling: {
      data_available: true,
      security_name: "$ Leong Guan Hldgs",
      mapping: { ticker_to_security: "$ Leong Guan Hldgs", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0, max_short_ratio: 0, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.00118, max_short_ratio: 0.0804, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.000604, max_short_ratio: 0.0804, interpretation: "Low short interest" } }
      },
      correlation: { valid: true, correlation: 0, interpretation: "Insufficient variation in short data to compute correlation" },
      peaks: [],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0 },
          { month: "2025-12", avg_short_ratio: 0.00365 },
          { month: "2025-11", avg_short_ratio: 0 },
          { month: "2025-10", avg_short_ratio: 0 },
          { month: "2025-09", avg_short_ratio: 0 },
          { month: "2025-08", avg_short_ratio: 0 },
          { month: "2025-07", avg_short_ratio: 0 },
          { month: "2025-06", avg_short_ratio: 0 },
          { month: "2025-05", avg_short_ratio: 0 },
          { month: "2025-04", avg_short_ratio: 0 },
          { month: "2025-03", avg_short_ratio: 0 },
          { month: "2025-02", avg_short_ratio: 0 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.00365, change_pct: null },
          { month: "2025-11", avg_short_ratio: 0, change_pct: -100 },
          { month: "2025-10", avg_short_ratio: 0, change_pct: null },
          { month: "2025-09", avg_short_ratio: 0, change_pct: null },
          { month: "2025-08", avg_short_ratio: 0, change_pct: null },
          { month: "2025-07", avg_short_ratio: 0, change_pct: null },
          { month: "2025-06", avg_short_ratio: 0, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0, change_pct: null },
          { month: "2025-04", avg_short_ratio: 0, change_pct: null },
          { month: "2025-03", avg_short_ratio: 0, change_pct: null },
          { month: "2025-02", avg_short_ratio: 0, change_pct: null }
        ],
        interpretation: "Shorts covering significantly (-100% MoM)"
      },
      peer_comparison: [
        { ticker: "LGH", avg_short_ratio: 0.00118, max_short_ratio: 0.0804, is_target: true },
        { ticker: "42W", avg_short_ratio: 0.000143, max_short_ratio: 0.00985, is_target: false },
        { ticker: "Q01", avg_short_ratio: 0.000872, max_short_ratio: 0.1175, is_target: false },
        { ticker: "D03", avg_short_ratio: 0.000967, max_short_ratio: 0.0741, is_target: false },
        { ticker: "BQD", avg_short_ratio: 0.00216, max_short_ratio: 0.211, is_target: false },
        { ticker: "OTS", avg_short_ratio: 0.00271, max_short_ratio: 0.44, is_target: false },
        { ticker: "5JS", avg_short_ratio: 0.00324, max_short_ratio: 0.2, is_target: false },
        { ticker: "MV4", avg_short_ratio: 0.00589, max_short_ratio: 1.0, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0, short_vol: 0, total_vol: 22000, close: 0.235, return: 0 },
          { date: "2026-01-29", short_ratio: 0, short_vol: 0, total_vol: 82400, close: 0.235, return: 0 },
          { date: "2026-01-28", short_ratio: 0, short_vol: 0, total_vol: 12600, close: 0.235, return: 0.02174 },
          { date: "2026-01-27", short_ratio: 0, short_vol: 0, total_vol: 100000, close: 0.23, return: -0.04167 },
          { date: "2026-01-26", short_ratio: 0, short_vol: 0, total_vol: 40000, close: 0.24, return: 0.02128 },
          { date: "2026-01-23", short_ratio: 0, short_vol: 0, total_vol: 28700, close: 0.235, return: 0.02174 },
          { date: "2026-01-22", short_ratio: 0, short_vol: 0, total_vol: 2100, close: 0.23, return: -0.04167 },
          { date: "2026-01-21", short_ratio: 0, short_vol: 0, total_vol: 2000, close: 0.24, return: 0.02128 },
          { date: "2026-01-20", short_ratio: 0, short_vol: 0, total_vol: 17000, close: 0.235, return: -0.04082 },
          { date: "2026-01-19", short_ratio: 0, short_vol: 0, total_vol: 12000, close: 0.245, return: 0.02083 },
          { date: "2026-01-16", short_ratio: 0, short_vol: 0, total_vol: 53400, close: 0.24, return: 0.02128 },
          { date: "2026-01-15", short_ratio: 0, short_vol: 0, total_vol: 25500, close: 0.235, return: -0.02083 },
          { date: "2026-01-14", short_ratio: 0, short_vol: 0, total_vol: 510500, close: 0.24, return: -0.05882 },
          { date: "2026-01-13", short_ratio: 0, short_vol: 0, total_vol: 2793600, close: 0.255, return: -0.05556 },
          { date: "2026-01-12", short_ratio: 0, short_vol: 0, total_vol: 1360200, close: 0.27, return: 0.125 },
          { date: "2026-01-09", short_ratio: 0, short_vol: 0, total_vol: 651600, close: 0.24, return: 0.04348 },
          { date: "2026-01-08", short_ratio: 0, short_vol: 0, total_vol: 9500, close: 0.23, return: 0 },
          { date: "2026-01-07", short_ratio: 0, short_vol: 0, total_vol: 285000, close: 0.23, return: 0.02222 },
          { date: "2026-01-06", short_ratio: 0, short_vol: 0, total_vol: 63000, close: 0.225, return: 0 },
          { date: "2026-01-05", short_ratio: 0, short_vol: 0, total_vol: 31000, close: 0.225, return: 0.02273 },
          { date: "2026-01-02", short_ratio: 0, short_vol: 0, total_vol: 112000, close: 0.22, return: -0.04348 },
          { date: "2025-12-31", short_ratio: 0, short_vol: 0, total_vol: 485400, close: 0.23, return: 0.06977 },
          { date: "2025-12-30", short_ratio: 0, short_vol: 0, total_vol: 80000, close: 0.215, return: 0 },
          { date: "2025-12-29", short_ratio: 0, short_vol: 0, total_vol: 169200, close: 0.215, return: -0.02273 },
          { date: "2025-12-26", short_ratio: 0, short_vol: 0, total_vol: 37500, close: 0.22, return: -0.02222 },
          { date: "2025-12-24", short_ratio: 0, short_vol: 0, total_vol: 2000, close: 0.225, return: 0 },
          { date: "2025-12-23", short_ratio: 0, short_vol: 0, total_vol: 27000, close: 0.225, return: 0 },
          { date: "2025-12-22", short_ratio: 0, short_vol: 0, total_vol: 5300, close: 0.225, return: 0.02273 },
          { date: "2025-12-19", short_ratio: 0, short_vol: 0, total_vol: 113700, close: 0.22, return: 0.07317 },
          { date: "2025-12-18", short_ratio: 0, short_vol: 0, total_vol: 293000, close: 0.205, return: -0.04651 },
          { date: "2025-12-17", short_ratio: 0, short_vol: 0, total_vol: 597600, close: 0.215, return: -0.04444 },
          { date: "2025-12-16", short_ratio: 0, short_vol: 0, total_vol: 242400, close: 0.225, return: -0.0625 },
          { date: "2025-12-15", short_ratio: 0, short_vol: 0, total_vol: 533300, close: 0.24, return: -0.02041 },
          { date: "2025-12-12", short_ratio: 0, short_vol: 0, total_vol: 461400, close: 0.245, return: 0.02083 },
          { date: "2025-12-11", short_ratio: 0.0804, short_vol: 400700, total_vol: 4986500, close: 0.24, return: null }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.121, continuous: 0.869, closing: 0.006, auctions: 0.131, other: 0 },
        "3M": { opening: 0.149, continuous: 0.828, closing: 0.016, auctions: 0.172, other: 0 },
        "6M": { opening: 0.149, continuous: 0.828, closing: 0.016, auctions: 0.172, other: 0 }
      },
      hhi: { "1M": 0.465, "3M": 0.443, "6M": 0.443 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0283 },
        { time: "09:00", avg_share: 0.1176 },
        { time: "09:30", avg_share: 0.0936 },
        { time: "10:00", avg_share: 0.0633 },
        { time: "10:30", avg_share: 0.0949 },
        { time: "11:00", avg_share: 0.0583 },
        { time: "11:30", avg_share: 0.0306 },
        { time: "12:30", avg_share: 0.06 },
        { time: "13:00", avg_share: 0.0259 },
        { time: "13:30", avg_share: 0.0128 },
        { time: "14:00", avg_share: 0.0385 },
        { time: "14:30", avg_share: 0.0691 },
        { time: "15:00", avg_share: 0.0582 },
        { time: "15:30", avg_share: 0.1363 },
        { time: "16:00", avg_share: 0.0115 },
        { time: "16:30", avg_share: 0.0913 },
        { time: "17:00", avg_share: 0.0098 }
      ],
      peers_hhi_rows: [
        { ticker: "LGH", auctions_pct: 17.21, hhi: 0.443, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300", you: true } },
        { ticker: "42W", auctions_pct: 7.61, hhi: 0.370, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "Q01", auctions_pct: 2.84, hhi: 0.374, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "D03", auctions_pct: 6.05, hhi: 0.504, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "5JS", auctions_pct: 4.50, hhi: 0.561, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "Y03", auctions_pct: 4.20, hhi: 0.634, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "BQD", auctions_pct: 0.21, hhi: 0.675, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "OTS", auctions_pct: 5.26, hhi: 0.719, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } },
        { ticker: "MV4", auctions_pct: 4.28, hhi: 0.730, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-300" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "50.3%", note_suffix: " - 3-month average absolute OFI (one-sided)." },
        { value: "0.44", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "Not significant", note_suffix: " - L2 OFI Granger-causality not significant (p≈0.16)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−21.6%", avg_abs: "45.6%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "−16.3%", avg_abs: "50.3%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "−16.3%", avg_abs: "50.3%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.44",
      pie: { net_buy_days: 34.3, net_sell_days: 57.1, balanced_days: 8.6 },
      l2_compact_text: "Over the last 7 days we analyzed 73 valid L2 snapshots (top 4 levels). Average L2 OFI was −8.37% of book value (abs: 82.65%). Granger causality: OFI% does not significantly predict mid-price changes (p≈0.16). No short-term predictive signal from the order book.",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2026-01-08", ofi: "+100%", direction: "BUY pressure", return: "+0.0%" },
        { date: "2025-12-23", ofi: "+100%", direction: "BUY pressure", return: "+0.0%" },
        { date: "2025-12-24", ofi: "−100%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2026-01-21", ofi: "+100%", direction: "BUY pressure", return: "+2.1%" },
        { date: "2026-01-27", ofi: "−98%", direction: "SELL pressure", return: "−4.2%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#428 of 562", sub: "S$23M • FTSE Fledgling" },
        { title: "Free Float", value: "—", sub: "Data unavailable" },
        { title: "Avg Daily Turnover", value: "S$0k", sub: "Velocity N/A" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #428 – outside top 30", gaps: ["Need rank ≤30 (currently #428)", "Need float ≥15% (data unavailable)", "Need velocity ≥0.1% (data unavailable)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.9%)", "Need float >15% (data unavailable)", "Need velocity ≥0.05% (data unavailable)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #428 – below top 80", gaps: ["Need rank ≤80 (currently #428)"] },
        { index: "FTSE Fledgling", status: "eligible", notes: "Below All-Share coverage", gaps: [] }
      ],
      insight: "Not currently eligible for major indices. Market cap rank #428 of 562 (S$23M); FTSE size band Fledgling. Float and velocity data unavailable for full criteria check.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Improve market-cap rank (need ≤30 for STI, ≤80 for iEdge Next 50)", "Improve liquidity and turnover so velocity meets index thresholds when data is available", "Maintain or improve free float visibility for index screens"]
    }
  }
};

export default REPORT_DATA;
