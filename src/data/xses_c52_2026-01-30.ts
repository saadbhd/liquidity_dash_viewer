// @ts-nocheck

// ============================================================================
// ComfortDelGro (C52) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
// ============================================================================

import type { ReportData } from '@/types/report';

export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (mid cap)",
    "Prefer the same sector first (Railroads), then the same industry (Industrials)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "S61", name: "SBS Transit", marketCap: "S$1.0B", sector: "Railroads", industry: "Industrials" },
    { ticker: "S58", name: "SATS", marketCap: "S$5.8B", sector: "Airports & Air Services", industry: "Industrials" },
    { ticker: "C07", name: "Jardine C&C", marketCap: "S$13.6B", sector: "Conglomerates", industry: "Industrials" },
    { ticker: "5LY", name: "MarcoPolo Marine", marketCap: "S$579M", sector: "Marine Shipping", industry: "Industrials" },
    { ticker: "E3B", name: "Wee Hur", marketCap: "S$837M", sector: "Engineering & Construction", industry: "Industrials" },
    { ticker: "1MZ", name: "NamCheong", marketCap: "S$430M", sector: "Aerospace & Defense", industry: "Industrials" },
    { ticker: "C6L", name: "SIA", marketCap: "S$20.1B", sector: "Airlines", industry: "Industrials" },
    { ticker: "J36", name: "JMH USD", marketCap: "S$22.0B", sector: "Conglomerates", industry: "Industrials" }
  ]
};

export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "C52",
    company: "ComfortDelGro",
    asof_date: "2026-01-30",
    industry: "Industrials",
    sector: "Railroads",
    market_cap_display: "3185.1M",
    market_cap_category: "mid",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

    theme: {
    badges: {
      header_health: { text: "Liquidity Health: ABOVE AVG", bg: "bg-emerald-500/20", textColor: "text-emerald-300", dot: "bg-emerald-500" },
      liq_section: { text: "Liquidity score: 95.0 — ABOVE AVG", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW crossing cost", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "Moderate imbalance", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "High short interest", bg: "bg-red-500/20", textColor: "text-red-300" },
      index_status: { text: "Eligible: FTSE All-Share, FTSE Large/mid Cap", bg: "bg-emerald-500/20", textColor: "text-emerald-300" }
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
    liq_subtitle: "How your stock compares to similar Railroads / Industrials names in Singapore",
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "Returns are mixed; liquidity is strong (top-30 rank). Most price moves are company-specific. Monitor short interest and the lending pool for execution risk.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "How much comes from the sector and market versus company-specific news?",
    drivers_strip: [
      { title: "Key Insight", text: "About 75% of recent price moves come from company-specific factors; 20% from the broad market and 5% from the sector." },
      { title: "Market Link", text: "Your stock moves somewhat with the market (moderate correlation). Sector correlation is moderate; the stock is largely company-driven." },
      { title: "Sector Link", text: "Sector and stock move together at the same time (contemporaneous); company-specific news is the main driver of moves." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company share means the stock moves mainly on its own news and fundamentals.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Stock leads the market by 4 days at best correlation; sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share has dominated (about 74–87%) across recent windows; market share varies (7–26%).",
    drivers_bottom_line: "Takeaway: Your stock is company-driven. Own results and news matter most; market and sector play a smaller role.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Trading cost is low (0.7% spread)—limit orders are appropriate.",
      "Price impact is small for typical sizes; a S$50K trade is about 1% of daily volume.",
      "Earnings and company news are the main catalysts; market and sector are secondary."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Low Vol (77.8% of time)",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Current regime: Low Vol.",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is about 0.68%. There is solid depth on both sides; selling 100K–2.5M moves the price by about 0.34%.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "Your stock has the best capacity in the peer set: a S$50K trade is about 1% of typical daily volume (J36 and C6L next at 3–4%).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Price impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Trading conditions are strong: deep order book and low price impact (about 0.34%) for sells of 100K–2.5M SGD.",
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
    session_dist_note: "Most volume is in continuous trading (~82–83%); auctions account for ~15–17%. Peak at 12:00 (28%), then 09:00 and 17:00.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "This index shows how spread out trading is through the day. Your value: {value} (moderate concentration).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity clusters at 12:00 and open/close. Larger clips should target these windows.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is moderately concentrated through the day. Best depth is around midday and at the close.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is buying or selling dominant? Does that explain same-day price moves?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "Order flow imbalance is the difference between buy- and sell-initiated volume. Over 3 months the average absolute imbalance is about 28% (moderately one-sided). L2 order-book OFI significantly predicts mid-price at 3-min lag.",
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
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from median volume, trades, spread, impact. Higher is better." }, value: "95.0", suffix: "/100", bar_pct: 95, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Rank 29/558 • Above peer median", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "✓" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Median spread is immediate cost to trade. Tighter is better." }, value: "0.68", suffix: "%", bar_pct: 75, color_value: "text-amber-400", color_bar: "text-amber-400", subtext: "Above peer median (~0.31%)", interpretation: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Median Traded Volume", tooltip: { title: "What this means", body: "Median daily trading value (20D). Higher = more liquidity." }, value: "9.5M", suffix: "SGD", bar_pct: 85, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Peer median: 5.3M • +79% vs peers", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "✓" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "75.2", suffix: "% company", bar_pct: 75, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 20.2% • Sector: 4.5%", interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "Your stock trades well: top-30 liquidity in the market, ~9.5M SGD median daily volume (well above peers), and low trading cost (0.68% spread).",
      "Selling size is not a bottleneck: even S$2.5M moves the price by only ~0.34%. A S$50K trade is about 1% of typical daily volume—best in your peer set.",
      "Watch short interest: averaging ~42% of volume with a large lending pool. In stress, covering could add selling pressure; track this alongside price."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Track short selling and lending pool", bullets: ["Short volume is high versus peers (~42% of trading). Lending pool is about 3 days of typical volume.", "Review short interest and pool size monthly; spikes can signal stress or one-sided selling risk."] },
            { title: "Protect current liquidity strengths", bullets: ["Your spread and daily volume are competitive advantages. Keep investor visibility and two-way trading interest."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            { title: "Lead with company narrative in investor messaging", bullets: ["About 75% of price moves are company-specific. Emphasise results, guidance, and fundamentals."] },
            { title: "Use order-flow signals for timing", bullets: ["Trading is moderately one-sided (~28% imbalance on average). Use days with very large imbalance as context for volatility or positioning."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Defend index inclusion and aim for STI", bullets: ["You qualify for FTSE All-Share and FTSE Large/mid Cap. STI requires a market-cap rank in the top 30 (you are #58)."] },
            { title: "Run a simple monthly liquidity dashboard", bullets: ["Monitor: spread, daily volume, trading concentration, order-flow balance, short ratio, and lending pool vs daily volume."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Median Daily Trades", value: "2.6K", sub: "Strong activity", interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" } },
      { title: "Median Turnover (Vol/Free Float)", value: "0.30%", sub: "Above peer median", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Daily Volatility", value: "0.68%", sub: "In line with peer median (~0.71%)", interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" } }
    ],
    liq_insight: "Trading conditions are strong versus peers: top-tier liquidity score, higher daily volume, and tighter spread. The main risk to monitor is elevated short interest and the size of the lending pool.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "1.4750", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.68%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Depth", value: "Strong", note: "Multiple levels of size on both sides", color: "text-emerald-300" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Moderate positive" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Significant (3-min)" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "Your stock ranks in the top 30 for liquidity in the market. Typical daily volume is 9.5M SGD—about 79% above the peer median (5.3M)—and the spread is tight at 0.68%, so trading cost is low.",
      strengths: ["Daily volume and spread support large orders without moving the price much.", "A S$50K trade is only about 1% of typical daily volume—the best in your peer set (J36, C6L, S58 next).", "Turnover relative to float is above the peer median."],
      concerns: ["Short selling is high versus peers, and the lending pool is large. In a stress scenario, covering could add selling pressure."],
      peer_context: "You lead peers on volume and spread. J36 and C6L have higher ADV; S58, 5LY, C07 have similar or lower capacity. S61 has much less capacity for size."
    },
    market_comparison: {
      adv: { insight: "Typical daily trading value is 9.5M SGD—well above your sector and peer group.", vs_market: "The market median is much lower (~18K); you sit in a more liquid tier.", vs_sector: "Sector median is ~4.9M; you are above it.", vs_peers: "Peer median is 5.3M; you are about 79% higher." },
      spread: { insight: "Trading cost (spread) is 0.68%—wider than the peer median (~0.31%).", vs_market: "Market median spread is ~2.2%; yours is much tighter.", vs_sector: "Sector median ~0.51%; you are slightly wider.", vs_peers: "Peer median ~0.31%; you are wider (peers like J36, C07, C6L have tighter spreads)." },
      volatility: { insight: "Daily price swings are 0.68%—in line with peer median (~0.71%), so the stock is relatively stable.", vs_market: "Market median volatility is ~0.6%; you are in line.", vs_sector: "Sector median ~0.5%; you are slightly higher.", vs_peers: "Peer median ~0.71%; your volatility is about 5% lower." },
      trades: { insight: "You have about 2.6K trades per day—above the peer median (~1.6K).", vs_market: "Market median is ~10; you are far more active.", vs_sector: "Sector median ~1.3K; you are higher.", vs_peers: "Peer median ~1.6K; you are about 69% higher." }
    },
    performance: {
      overall: "Returns are mixed: slightly down over 1M and 6M, flat over 3M. Liquidity is strong; the main item to watch is short interest and the lending pool.",
      ytd: { stock: "−0.68%", market: "+5.6%", sector: "+0.75%", peers: "+0.85%", insight: "Year to date you are slightly down; the market and peers are up." },
      three_month: { stock: "+0.68%", market: "+10.8%", sector: "+1.7%", peers: "+2.8%", insight: "Over 3 months you are flat; market, sector, and peers are positive." },
      six_month: { stock: "−3.29%", market: "+16.9%", sector: "+0.05%", peers: "+8.6%", insight: "Over 6 months you are down; the market and peers are up." },
      conclusion: "Trading conditions support execution. Keep an eye on spread and volume, and monitor short interest and the lending pool."
    },
    drivers: {
      overall: "About three-quarters of recent price moves come from company-specific factors, 20% from the broad market, and 5% from the sector. The model explains 18% of moves.",
      interpretation: "Company news and fundamentals drive most moves; market and sector play a smaller role. The stock leads the market by about 4 days at best correlation.",
      rolling_change: "Over rolling windows, company-specific share has dominated (74–87%); market share varies (7–26%), sector is low or zero in most windows.",
      beta: "Sensitivity to the market is moderate (~0.30); sensitivity to the sector is high (~2.62). The stock is largely company-driven."
    },
    regime: {
      overall: "We see two environments: high volatility (22% of the time) and low volatility (78%). You are currently in the low-volatility regime.",
      current: "Low Vol",
      transitions: "Once in low vol, the market tends to stay there (about 77% of the time). Transitions to high vol are possible (about 23%).",
      trading_implications: "In the current low-vol regime, use company news and order flow for context; regime can switch to high vol."
    },
    trader_composition: {
      overall: "By number of trades, 96% are retail. By value traded, institutions account for about 55%, retail 26%, and mixed sizes 19%.",
      retail_heavy: "Retail drives trade count; institutions drive a majority of volume.",
      institutional_gap: "Institutional share of volume (55%) supports block trading; retail provides most of the order flow count.",
      peer_comparison: "You are the most retail-heavy by trade count among peers (C52, E3B, S61, 1MZ, C6L, 5LY, S58, C07, J36); by value, institutional share is similar to E3B and C6L."
    },
    price_moving: {
      overall: "About one in three trades moved the price. Retail orders dominate in both directions (roughly 94–96% of price-moving trades).",
      interpretation: "A meaningful share of trades move the price, so execution quality and timing matter for large orders.",
      asymmetry: "Trades that pushed the price up were on average about 1.2x larger than those that pushed it down.",
      by_trader_type: "Most price-moving activity is retail, in both directions."
    },
    short_selling: {
      overall: "Short selling is high: about 42% of volume on average over 3 months. The lending pool is 21.5M shares—about 3.3 days of typical volume—so covering could add pressure in stress.",
      level: "3-month average short share of volume is ~42% (peak ~69%). This is high versus peers.",
      correlation: "When short activity is high, returns tend to be slightly lower (moderate negative relationship).",
      trend: "Short interest has ticked up recently (+9% month-on-month). The last 14 days averaged about 50%.",
      peaks: "Spikes in short volume (e.g. 69%) can serve as a simple stress or sentiment indicator."
    },
    execution: {
      overall: "Trading cost from price impact is low. Order book depth is strong; selling 100K–2.5M moves the price by about 0.34%. A S$50K trade is about 1% of typical daily volume.",
      concern: "The main execution risk is not day-to-day cost but the possibility of extra selling pressure if short positions are closed in a stress event.",
      peer_context: "You have the best capacity in the peer set for size (50K ≈ 1% of daily volume). J36 and C6L are next (3–4%); S61 would need a much larger share of daily volume for the same size."
    },
    intraday: {
      overall: "Trading is moderately concentrated in time: most volume is in continuous trading (~82–83%), with about 15–17% in auctions. The busiest time is noon (28%), then open and close.",
      hhi_interpretation: "The concentration index (HHI) is in the moderate range—liquidity is neither perfectly even nor highly concentrated.",
      best_times: "The best windows for size are around 12:00, 09:00, and 17:00.",
      peer_ranking: "Your concentration is in the middle of the peer pack; S58, C07, and C6L have more evenly spread trading (lower HHI)."
    },
    ofi: {
      overall: "Order flow is moderately one-sided (about 28% average imbalance over 3 months). Imbalance and same-day returns move together (positive correlation). L2 order-book imbalance significantly predicts mid-price changes at 3-minute lag (buy pressure → price down).",
      daily_vs_intraday: "Daily order flow lines up with returns. Intraday L2 OFI Granger-causes mid-price at 3-min lag (p≈0.0000).",
      l2_signal: "Over 2,739 L2 snapshots (last 7 days), OFI% significantly predicts mid-price (p≈0.0000). Lead time: 3 min. Direction: negative (buy pressure → price down)—contrarian microstructure; avoid urgency during extreme imbalances.",
      day_breakdown: "Over 3 months, net buying and net selling days are roughly balanced."
    },
    index: {
      overall: "You are eligible for FTSE All-Share and FTSE Large/mid Cap. The STI index would require a rank in the top 30.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Keep meeting the bar for FTSE All-Share and FTSE Large/mid Cap. STI inclusion is a longer-term goal if your market-cap rank improves to the top 30."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["C52", "S61", "S58", "C07", "5LY", "E3B", "1MZ", "C6L", "J36"],
      scores: [94.98, 71.33, 93.37, 89.25, 94.27, 93.19, 92.47, 97.13, 94.62],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [9499175, 234019, 10309989, 4894405, 5708984, 3414622, 4798067, 22866476, 32385704],
      total: 558
    },
    market_comparison: {
      sector_name: "Railroads",
      sector_count: 2,
      market_count: 558,
      company: { volatility: 0.00676, adv: 9499174.5, spread_pct: 0.00680, turnover_ratio: 0.00300, amihud: 3.97e-10, trades: 2628.5 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.0110, median: 0.00613, min: 0, max: 0.5, p5: 0, p95: 0.0333, count: 558 },
        adv: { direction: "higher_is_better", mean: 2515365, median: 17956.5, min: 0, max: 243209838, p5: 0, p95: 10103622, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0883, median: 0.02243, min: 0.00027, max: 1.30, p5: 0.00321, p95: 0.474, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00367, median: 0.000374, min: 0, max: 0.705, p5: 0, p95: 0.0107, count: 537 },
        amihud: { direction: "lower_is_better", mean: 6.89e-05, median: 7.62e-08, min: 0, max: 0.0185, p5: 0, p95: 8.46e-05, count: 548 },
        trades: { direction: "higher_is_better", mean: 367.5, median: 9.5, min: 0, max: 9583.5, p5: 0, p95: 2122.6, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.00491, median: 0.00491, min: 0.00306, max: 0.00676, p5: 0.00324, p95: 0.00657, count: 2 },
        adv: { direction: "higher_is_better", mean: 4866596.5, median: 4866596.5, min: 234019, max: 9499175, p5: 697276, p95: 9035917, count: 2 },
        spread_pct: { direction: "lower_is_better", mean: 0.00511, median: 0.00511, min: 0.00342, max: 0.00680, p5: 0.00359, p95: 0.00663, count: 2 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00196, median: 0.00196, min: 0.00091, max: 0.00300, p5: 0.00102, p95: 0.00290, count: 2 },
        amihud: { direction: "lower_is_better", mean: 6.78e-09, median: 6.78e-09, min: 3.97e-10, max: 1.32e-08, p5: 1.04e-09, p95: 1.25e-08, count: 2 },
        trades: { direction: "higher_is_better", mean: 1345.25, median: 1345.25, min: 62, max: 2628.5, p5: 190.3, p95: 2500.2, count: 2 }
      },
      peers: {
        adv: { direction: "higher_is_better", mean: 10576533, median: 5301694.5, min: 234019, max: 32385704, p5: 1347230, p95: 29053974, count: 8 },
        trades: { direction: "higher_is_better", mean: 1500.6, median: 1550.75, min: 62, max: 3875.5, p5: 288.3, p95: 3132.3, count: 8 },
        volatility: { direction: "lower_is_better", mean: 0.00751, median: 0.00708, min: 0.00306, max: 0.0130, p5: 0.00307, p95: 0.0124, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.00420, median: 0.00306, min: 0.00138, max: 0.00957, p5: 0.00139, p95: 0.00876, count: 8 },
        amihud: { direction: "lower_is_better", mean: 3.12e-09, median: 1.76e-09, min: 8.40e-11, max: 1.32e-08, p5: 1.31e-10, p95: 9.97e-09, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00593, median: 0.00246, min: 0.00091, max: 0.0162, p5: 0.00113, p95: 0.0150, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: -0.676, market: 5.57, sector: 0.754, peers: 0.85 },
      { horizon: "3M", stock: 0.685, market: 10.76, sector: 1.66, peers: 2.83 },
      { horizon: "6M", stock: -3.29, market: 16.87, sector: 0.05, peers: 8.59 },
      { horizon: "YTD", stock: -0.676, market: 5.57, sector: 0.754, peers: 0.85 }
    ],
    drivers: {
      share_market: 20.23,
      share_sector: 4.52,
      share_idio: 75.25,
      beta_market: 0.3043,
      beta_sector: 2.6159,
      r_squared: 18.11,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.0564, -0.3168, 0.2416, -0.1003, -0.0480, 0.3077, 0.0348, 0.1237, -0.1543, 0.0221, -0.0565],
        corr_sector: [0.1272, -0.1198, 0.2519, 0.0025, -0.2426, 0.3650, -0.0016, 0.0049, 0.0049, 0.0050, 0.0028],
        best: { market: -4, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 0.1284, share_sector: 0, share_idio: 0.8716 }, regression: { r_squared: 0.0192 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 0.1821, share_sector: 0, share_idio: 0.8179 }, regression: { r_squared: 0.0430 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 0.0696, share_sector: 0.0687, share_idio: 0.8617 }, regression: { r_squared: 0.2601 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 0.1857, share_sector: 0, share_idio: 0.8143 }, regression: { r_squared: 0.0283 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 0.2583, share_sector: 0, share_idio: 0.7417 }, regression: { r_squared: 0.1074 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 0.2023, share_sector: 0.0452, share_idio: 0.7525 }, regression: { r_squared: 0.1811 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [12.84, 18.21, 6.96, 18.57, 25.83, 20.23],
        sector: [0, 0, 6.87, 0, 0, 4.52],
        idio: [87.16, 81.79, 86.17, 81.43, 74.17, 75.25]
      },
      regime: {
        n_regimes: 2,
        labels: ["High Vol", "Low Vol"],
        pct_time: [0.2222222222222222, 0.7777777777777778],
        current_regime: 1,
        regimes: [
          { id: 0, label: "High Vol", mean_ret: 0.6849315068493178, volatility: 0.006908023483368888, mean_ret_pct: 0.6849315068493178, volatility_pct: 0.006908023483368888, n_days: 28, pct_time: 0.2222222222222222 },
          { id: 1, label: "Low Vol", mean_ret: 0, volatility: 0.000001, mean_ret_pct: 0, volatility_pct: 0.000001, n_days: 98, pct_time: 0.7777777777777778 }
        ],
        transitions: [[0.7846917676606052, 0.21530823233939475], [0.768539340782348, 0.23146065921765205]]
      }
    },
    order_book: {
      bids: [
        { level: 1, price: 1.47, quantity: 2820500, value: 4146135 },
        { level: 2, price: 1.46, quantity: 4337800, value: 6333188 },
        { level: 3, price: 1.45, quantity: 4012200, value: 5817690 },
        { level: 4, price: 1.44, quantity: 2775300, value: 3996432 },
        { level: 5, price: 1.43, quantity: 2193400, value: 3136562 },
        { level: 6, price: 1.42, quantity: 1986800, value: 2821256 },
        { level: 7, price: 1.41, quantity: 1203700, value: 1697217 },
        { level: 8, price: 1.40, quantity: 1284300, value: 1798020 },
        { level: 9, price: 1.39, quantity: 1036500, value: 1440735 },
        { level: 10, price: 1.38, quantity: 1068300, value: 1474254 }
      ],
      asks: [
        { level: 1, price: 1.48, quantity: 1303600, value: 1929328 },
        { level: 2, price: 1.49, quantity: 3185400, value: 4746246 },
        { level: 3, price: 1.50, quantity: 4380800, value: 6571200 },
        { level: 4, price: 1.51, quantity: 1705100, value: 2574701 },
        { level: 5, price: 1.52, quantity: 1319500, value: 2005640 },
        { level: 6, price: 1.53, quantity: 1143800, value: 1750014 },
        { level: 7, price: 1.54, quantity: 1187600, value: 1828904 },
        { level: 8, price: 1.55, quantity: 1322500, value: 2049875 },
        { level: 9, price: 1.56, quantity: 858100, value: 1338636 },
        { level: 10, price: 1.57, quantity: 664200, value: 1042794 }
      ]
    },
    peer_capacity: {
      bx_ticket_pct_adv_50k: 1.0,
      peers: [
        { ticker: "J36", pct: 3.1 },
        { ticker: "C6L", pct: 4.4 },
        { ticker: "S58", pct: 9.7 },
        { ticker: "5LY", pct: 17.5 },
        { ticker: "C07", pct: 20.4 },
        { ticker: "1MZ", pct: 20.8 },
        { ticker: "E3B", pct: 29.3 },
        { ticker: "S61", pct: 427.3 }
      ]
    },
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 45747,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500, instit_min: 67500 },
      composition: {
        retail_pct: 0.9616,
        mixed_pct: 0.0272,
        instit_pct: 0.0113,
        retail_qty_pct: 0.2649,
        mixed_qty_pct: 0.1872,
        instit_qty_pct: 0.5479,
        retail_notional_pct: 0.2644,
        mixed_notional_pct: 0.1872,
        instit_notional_pct: 0.5484
      },
      trade_size: { avg: 3951, median: 584 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 45444, retail_pct: 0.9619, mixed_pct: 0.0268, instit_pct: 0.0112, avg_trade_size: 3934, retail_qty_pct: 0.2656, mixed_qty_pct: 0.1856, instit_qty_pct: 0.5488, total_quantity: 121452500 },
          { month: "2025-12", n_trades: 24556, retail_pct: 0.9402, mixed_pct: 0.0435, instit_pct: 0.0163, avg_trade_size: 5544, retail_qty_pct: 0.2316, mixed_qty_pct: 0.2127, instit_qty_pct: 0.5557, total_quantity: 94488700 },
          { month: "2025-11", n_trades: 32107, retail_pct: 0.9355, mixed_pct: 0.0434, instit_pct: 0.0211, avg_trade_size: 6653, retail_qty_pct: 0.1883, mixed_qty_pct: 0.1796, instit_qty_pct: 0.6321, total_quantity: 146503400 },
          { month: "2025-10", n_trades: 23218, retail_pct: 0.8928, mixed_pct: 0.0693, instit_pct: 0.0379, avg_trade_size: 12898, retail_qty_pct: 0.1122, mixed_qty_pct: 0.1497, instit_qty_pct: 0.7381, total_quantity: 203646900 },
          { month: "2025-09", n_trades: 29372, retail_pct: 0.9057, mixed_pct: 0.0638, instit_pct: 0.0305, avg_trade_size: 9876, retail_qty_pct: 0.1569, mixed_qty_pct: 0.1773, instit_qty_pct: 0.6658, total_quantity: 196320400 },
          { month: "2025-08", n_trades: 33269, retail_pct: 0.8638, mixed_pct: 0.0953, instit_pct: 0.0408, avg_trade_size: 12551, retail_qty_pct: 0.1454, mixed_qty_pct: 0.2090, instit_qty_pct: 0.6457, total_quantity: 278706500 }
        ]
      },
      peer_comparison: [
        { ticker: "C52", currency: "SGD", is_target: true, retail_pct: 0.9616, mixed_pct: 0.0272, instit_pct: 0.0113, retail_qty_pct: 0.2649, mixed_qty_pct: 0.1872, instit_qty_pct: 0.5479, retail_notional_pct: 0.2644, mixed_notional_pct: 0.1872, instit_notional_pct: 0.5484, avg_trade_size: 3951, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "E3B", currency: "SGD", is_target: false, retail_pct: 0.9173, mixed_pct: 0.0703, instit_pct: 0.0124, retail_qty_pct: 0.2575, mixed_qty_pct: 0.4296, instit_qty_pct: 0.3130, retail_notional_pct: 0.2591, mixed_notional_pct: 0.4311, instit_notional_pct: 0.3098, avg_trade_size: 4779, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "S61", currency: "SGD", is_target: false, retail_pct: 0.8919, mixed_pct: 0.1047, instit_pct: 0.0034, retail_qty_pct: 0.4160, mixed_qty_pct: 0.5224, instit_qty_pct: 0.0617, retail_notional_pct: 0.4169, mixed_notional_pct: 0.5218, instit_notional_pct: 0.0613, avg_trade_size: 5507, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "1MZ", currency: "SGD", is_target: false, retail_pct: 0.8777, mixed_pct: 0.0935, instit_pct: 0.0287, retail_qty_pct: 0.1676, mixed_qty_pct: 0.3644, instit_qty_pct: 0.4679, retail_notional_pct: 0.1684, mixed_notional_pct: 0.3626, instit_notional_pct: 0.4689, avg_trade_size: 8240, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "C6L", currency: "SGD", is_target: false, retail_pct: 0.8643, mixed_pct: 0.1144, instit_pct: 0.0213, retail_qty_pct: 0.2856, mixed_qty_pct: 0.3961, instit_qty_pct: 0.3182, retail_notional_pct: 0.2856, mixed_notional_pct: 0.3961, instit_notional_pct: 0.3184, avg_trade_size: 8639, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "5LY", currency: "SGD", is_target: false, retail_pct: 0.8472, mixed_pct: 0.1317, instit_pct: 0.0211, retail_qty_pct: 0.1866, mixed_qty_pct: 0.4944, instit_qty_pct: 0.3190, retail_notional_pct: 0.1868, mixed_notional_pct: 0.4945, instit_notional_pct: 0.3187, avg_trade_size: 7445, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "S58", currency: "SGD", is_target: false, retail_pct: 0.8466, mixed_pct: 0.1222, instit_pct: 0.0312, retail_qty_pct: 0.2366, mixed_qty_pct: 0.3858, instit_qty_pct: 0.3776, retail_notional_pct: 0.2363, mixed_notional_pct: 0.3858, instit_notional_pct: 0.3779, avg_trade_size: 9375, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "C07", currency: "SGD", is_target: false, retail_pct: 0.8007, mixed_pct: 0.1830, instit_pct: 0.0163, retail_qty_pct: 0.3697, mixed_qty_pct: 0.4468, instit_qty_pct: 0.1834, retail_notional_pct: 0.3714, mixed_notional_pct: 0.4450, instit_notional_pct: 0.1836, avg_trade_size: 10516, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "J36", currency: "USD", is_target: false, retail_pct: 0.6376, mixed_pct: 0.3067, instit_pct: 0.0557, retail_qty_pct: 0.2859, mixed_qty_pct: 0.4222, instit_qty_pct: 0.2919, retail_notional_pct: 0.2854, mixed_notional_pct: 0.4221, instit_notional_pct: 0.2925, avg_trade_size: 16318, thresholds: { retail_max: 10000, instit_min: 50000 } }
      ],
      currency_thresholds: { USD: { retail_max: 10000, instit_min: 50000 }, SGD: { retail_max: 13500, instit_min: 67500 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },
    price_moving_trades: {
      total_trades: 187965,
      price_moving_trades: 63729,
      pct_price_moving: 33.90,
      all_movers: { count: 63729, avg_size: 4265, median_size: 735, retail_count: 60603, mixed_count: 2493, institutional_count: 633, retail_pct: 95.09, mixed_pct: 3.91, instit_pct: 0.99 },
      positive_movers: { count: 31863, avg_size: 4685, median_size: 730, retail_count: 29966, mixed_count: 1511, institutional_count: 386, retail_pct: 94.05, mixed_pct: 4.74, instit_pct: 1.21 },
      negative_movers: { count: 31866, avg_size: 3845, median_size: 750, retail_count: 30637, mixed_count: 982, institutional_count: 247, retail_pct: 96.14, mixed_pct: 3.08, instit_pct: 0.78 }
    },
    short_selling: {
      data_available: true,
      security_name: "ComfortDelGro",
      mapping: { ticker_to_security: "ComfortDelGro", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      sbl_pool: { valid: true, lending_pool: 21517032, lending_pool_value: 31630037, latest_price: 1.47, lending_rate_pct: 0.17, borrowing_rate_pct: 0.25, pool_as_pct_adv: 333, days_to_liquidate: 3.33, estimated_impact_pct: 0.05, liquidity_risk: "Moderate - pool 2-5 days of volume", impact_interpretation: "Significant price impact if entire pool sold", timestamp: "" },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.4226, max_short_ratio: 0.6936, interpretation: "High short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.4249, max_short_ratio: 0.6936, interpretation: "High short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.4124, max_short_ratio: 0.6936, interpretation: "High short interest" } }
      },
      correlation: { valid: true, correlation: -0.1634, interpretation: "Moderate negative - shorts somewhat predict drops" },
      peaks: [
        { date: "2025-12-29", short_ratio: 0.6936, return_pct: 0 },
        { date: "2025-11-19", short_ratio: 0.6695, return_pct: 0 },
        { date: "2026-01-28", short_ratio: 0.6489, return_pct: -0.68 },
        { date: "2025-10-15", short_ratio: 0.6443, return_pct: 0.68 },
        { date: "2025-11-25", short_ratio: 0.6201, return_pct: 0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0.4348 },
          { month: "2025-12", avg_short_ratio: 0.3979 },
          { month: "2025-11", avg_short_ratio: 0.4499 },
          { month: "2025-10", avg_short_ratio: 0.4319 },
          { month: "2025-09", avg_short_ratio: 0.4195 },
          { month: "2025-08", avg_short_ratio: 0.3838 },
          { month: "2025-07", avg_short_ratio: 0.2980 },
          { month: "2025-06", avg_short_ratio: 0.4014 },
          { month: "2025-05", avg_short_ratio: 0.3882 },
          { month: "2025-04", avg_short_ratio: 0.3460 },
          { month: "2025-03", avg_short_ratio: 0.3911 },
          { month: "2025-02", avg_short_ratio: 0.4014 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0.4348, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.3979, change_pct: -8.48 },
          { month: "2025-11", avg_short_ratio: 0.4499, change_pct: 13.07 },
          { month: "2025-10", avg_short_ratio: 0.4319, change_pct: -4.00 },
          { month: "2025-09", avg_short_ratio: 0.4195, change_pct: -2.86 },
          { month: "2025-08", avg_short_ratio: 0.3838, change_pct: -8.51 },
          { month: "2025-07", avg_short_ratio: 0.2980, change_pct: -22.35 },
          { month: "2025-06", avg_short_ratio: 0.4014, change_pct: 34.69 },
          { month: "2025-05", avg_short_ratio: 0.3882, change_pct: -3.29 },
          { month: "2025-04", avg_short_ratio: 0.3460, change_pct: -10.88 },
          { month: "2025-03", avg_short_ratio: 0.3911, change_pct: 13.03 },
          { month: "2025-02", avg_short_ratio: 0.4014, change_pct: 2.63 }
        ],
        interpretation: "Shorts slightly building (+9% MoM)"
      },
      peer_comparison: [
        { ticker: "C52", avg_short_ratio: 0.4249, max_short_ratio: 0.6936, is_target: true },
        { ticker: "S61", avg_short_ratio: 0.0102, max_short_ratio: 0.3430, is_target: false },
        { ticker: "1MZ", avg_short_ratio: 0.0129, max_short_ratio: 0.2034, is_target: false },
        { ticker: "E3B", avg_short_ratio: 0.0246, max_short_ratio: 0.3006, is_target: false },
        { ticker: "5LY", avg_short_ratio: 0.0252, max_short_ratio: 0.2945, is_target: false },
        { ticker: "C07", avg_short_ratio: 0.0790, max_short_ratio: 0.6862, is_target: false },
        { ticker: "J36", avg_short_ratio: 0.0839, max_short_ratio: 0.6080, is_target: false },
        { ticker: "S58", avg_short_ratio: 0.1081, max_short_ratio: 0.5621, is_target: false }
      ],
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0.2732, short_vol: 2478200, total_vol: 9070400, close: 1.47, return: -0.00676 },
          { date: "2026-01-29", short_ratio: 0.4952, short_vol: 5735300, total_vol: 11582200, close: 1.48, return: 0.00680 },
          { date: "2026-01-28", short_ratio: 0.6489, short_vol: 4855000, total_vol: 7482300, close: 1.47, return: -0.00676 },
          { date: "2026-01-27", short_ratio: 0.6037, short_vol: 5024300, total_vol: 8322400, close: 1.48, return: 0 },
          { date: "2026-01-26", short_ratio: 0.4896, short_vol: 4824800, total_vol: 9854500, close: 1.48, return: 0.00680 },
          { date: "2026-01-23", short_ratio: 0.5741, short_vol: 3396300, total_vol: 5915800, close: 1.47, return: 0 },
          { date: "2026-01-22", short_ratio: 0.5794, short_vol: 8566100, total_vol: 14785100, close: 1.47, return: 0.00685 },
          { date: "2026-01-21", short_ratio: 0.6035, short_vol: 10657700, total_vol: 17659100, close: 1.46, return: -0.01351 },
          { date: "2026-01-20", short_ratio: 0.4399, short_vol: 3023100, total_vol: 6871800, close: 1.48, return: 0.00680 },
          { date: "2026-01-19", short_ratio: 0.4020, short_vol: 2414000, total_vol: 6005500, close: 1.47, return: 0 },
          { date: "2026-01-16", short_ratio: 0.5293, short_vol: 1107800, total_vol: 2092900, close: 1.47, return: 0 },
          { date: "2026-01-15", short_ratio: 0.5134, short_vol: 804700, total_vol: 1567400, close: 1.47, return: 0.00685 },
          { date: "2026-01-14", short_ratio: 0.6091, short_vol: 3192000, total_vol: 5240800, close: 1.46, return: 0 },
          { date: "2026-01-13", short_ratio: 0.1946, short_vol: 952700, total_vol: 4895400, close: 1.46, return: -0.00680 },
          { date: "2026-01-12", short_ratio: 0.2343, short_vol: 1125200, total_vol: 4802700, close: 1.47, return: 0.00685 },
          { date: "2026-01-09", short_ratio: 0.3433, short_vol: 1954300, total_vol: 5692400, close: 1.46, return: 0 },
          { date: "2026-01-08", short_ratio: 0.1574, short_vol: 1123500, total_vol: 7138500, close: 1.46, return: 0 },
          { date: "2026-01-07", short_ratio: 0.2400, short_vol: 1275200, total_vol: 5313000, close: 1.46, return: 0 },
          { date: "2026-01-06", short_ratio: 0.4530, short_vol: 3423400, total_vol: 7556500, close: 1.46, return: -0.01351 },
          { date: "2026-01-05", short_ratio: 0.3525, short_vol: 1668900, total_vol: 4734600, close: 1.48, return: 0 },
          { date: "2026-01-02", short_ratio: 0.3934, short_vol: 2490200, total_vol: 6329800, close: 1.48, return: 0 },
          { date: "2025-12-31", short_ratio: 0.2623, short_vol: 524000, total_vol: 1997400, close: 1.48, return: 0.00680 },
          { date: "2025-12-30", short_ratio: 0.0571, short_vol: 107200, total_vol: 1878600, close: 1.47, return: 0 },
          { date: "2025-12-29", short_ratio: 0.6936, short_vol: 3376000, total_vol: 4867100, close: 1.47, return: 0 },
          { date: "2025-12-26", short_ratio: 0.5120, short_vol: 2789600, total_vol: 5448600, close: 1.47, return: 0 },
          { date: "2025-12-24", short_ratio: 0.3971, short_vol: 952200, total_vol: 2397800, close: 1.47, return: 0.00685 },
          { date: "2025-12-23", short_ratio: 0.3370, short_vol: 1101600, total_vol: 3269000, close: 1.46, return: 0.00690 },
          { date: "2025-12-22", short_ratio: 0.5035, short_vol: 3806400, total_vol: 7560300, close: 1.45, return: 0.00694 },
          { date: "2025-12-19", short_ratio: 0.2025, short_vol: 2003700, total_vol: 9893904, close: 1.44, return: 0.00699 },
          { date: "2025-12-18", short_ratio: 0.2714, short_vol: 985900, total_vol: 3632700, close: 1.43, return: 0 },
          { date: "2025-12-17", short_ratio: 0.3314, short_vol: 996700, total_vol: 3007500, close: 1.43, return: -0.01379 },
          { date: "2025-12-16", short_ratio: 0.3618, short_vol: 1445600, total_vol: 3995900, close: 1.45, return: 0.00694 },
          { date: "2025-12-15", short_ratio: 0.4489, short_vol: 3012100, total_vol: 6709800, close: 1.44, return: 0.00699 },
          { date: "2025-12-12", short_ratio: 0.4407, short_vol: 3259200, total_vol: 7396000, close: 1.43, return: 0 },
          { date: "2025-12-11", short_ratio: 0.6178, short_vol: 5099500, total_vol: 8253900, close: 1.43, return: 0 },
          { date: "2025-12-10", short_ratio: 0.4682, short_vol: 2988000, total_vol: 6382300, close: 1.43, return: 0 },
          { date: "2025-12-09", short_ratio: 0.5007, short_vol: 2227400, total_vol: 4448500, close: 1.43, return: 0.00704 },
          { date: "2025-12-08", short_ratio: 0.3195, short_vol: 4596300, total_vol: 14388000, close: 1.42, return: -0.01389 },
          { date: "2025-12-05", short_ratio: 0.3698, short_vol: 809700, total_vol: 2189300, close: 1.44, return: 0 },
          { date: "2025-12-04", short_ratio: 0.5554, short_vol: 2156200, total_vol: 3882500, close: 1.44, return: 0 },
          { date: "2025-12-03", short_ratio: 0.6025, short_vol: 1370500, total_vol: 2274800, close: 1.44, return: 0 },
          { date: "2025-12-02", short_ratio: 0.2717, short_vol: 2242000, total_vol: 8252300, close: 1.44, return: 0 },
          { date: "2025-12-01", short_ratio: 0.2285, short_vol: 1571300, total_vol: 6877100, close: 1.44, return: 0 },
          { date: "2025-11-28", short_ratio: 0.4714, short_vol: 5393800, total_vol: 11442000, close: 1.44, return: 0 },
          { date: "2025-11-27", short_ratio: 0.3194, short_vol: 1211800, total_vol: 3793800, close: 1.44, return: 0 },
          { date: "2025-11-26", short_ratio: 0.3987, short_vol: 863800, total_vol: 2166700, close: 1.44, return: 0 },
          { date: "2025-11-25", short_ratio: 0.6201, short_vol: 1271900, total_vol: 2051000, close: 1.44, return: 0 },
          { date: "2025-11-24", short_ratio: 0.3873, short_vol: 3885600, total_vol: 10032600, close: 1.44, return: 0 },
          { date: "2025-11-21", short_ratio: 0.5886, short_vol: 11147600, total_vol: 18939500, close: 1.44, return: -0.02041 },
          { date: "2025-11-20", short_ratio: 0.4832, short_vol: 4278300, total_vol: 8853400, close: 1.47, return: 0.01379 },
          { date: "2025-11-19", short_ratio: 0.6695, short_vol: 2589200, total_vol: 3867500, close: 1.45, return: 0 },
          { date: "2025-11-18", short_ratio: 0.5946, short_vol: 5595600, total_vol: 9411300, close: 1.45, return: -0.01361 },
          { date: "2025-11-17", short_ratio: 0.2394, short_vol: 1601500, total_vol: 6689400, close: 1.47, return: 0.00685 },
          { date: "2025-11-14", short_ratio: 0.2400, short_vol: 1681400, total_vol: 7005500, close: 1.46, return: -0.00680 },
          { date: "2025-11-13", short_ratio: 0.3461, short_vol: 4633500, total_vol: 13386600, close: 1.47, return: -0.00676 },
          { date: "2025-11-12", short_ratio: 0.2092, short_vol: 924200, total_vol: 4418700, close: 1.48, return: 0.00680 },
          { date: "2025-11-11", short_ratio: 0.4129, short_vol: 5030200, total_vol: 12182800, close: 1.47, return: 0.00685 },
          { date: "2025-11-10", short_ratio: 0.5829, short_vol: 4729800, total_vol: 8114600, close: 1.46, return: 0 },
          { date: "2025-11-07", short_ratio: 0.3443, short_vol: 2846400, total_vol: 8266100, close: 1.46, return: 0.00690 },
          { date: "2025-11-06", short_ratio: 0.6017, short_vol: 10144200, total_vol: 16858000, close: 1.45, return: 0 },
          { date: "2025-11-05", short_ratio: 0.4144, short_vol: 2044800, total_vol: 4933800, close: 1.45, return: 0 },
          { date: "2025-11-04", short_ratio: 0.5929, short_vol: 8449900, total_vol: 14252700, close: 1.45, return: -0.02027 },
          { date: "2025-11-03", short_ratio: 0.4809, short_vol: 5324100, total_vol: 11071300, close: 1.48, return: 0.01370 },
          { date: "2025-10-31", short_ratio: 0.2300, short_vol: 1284200, total_vol: 5582400, close: 1.46, return: 0 },
          { date: "2025-10-30", short_ratio: 0.4007, short_vol: 3765400, total_vol: 9397000, close: 1.46, return: 0.00690 },
          { date: "2025-10-29", short_ratio: 0.5724, short_vol: 14559900, total_vol: 25437900, close: 1.45, return: -0.01361 },
          { date: "2025-10-28", short_ratio: 0.3865, short_vol: 1191700, total_vol: 3083200, close: 1.47, return: -0.00676 },
          { date: "2025-10-27", short_ratio: 0.4237, short_vol: 5810800, total_vol: 13713900, close: 1.48, return: -0.00671 },
          { date: "2025-10-24", short_ratio: 0.3035, short_vol: 5121200, total_vol: 16872500, close: 1.49, return: 0 },
          { date: "2025-10-23", short_ratio: 0.3699, short_vol: 4502400, total_vol: 12173500, close: 1.49, return: 0.01361 },
          { date: "2025-10-22", short_ratio: 0.4688, short_vol: 7936300, total_vol: 16928700, close: 1.47, return: 0 },
          { date: "2025-10-21", short_ratio: 0.4431, short_vol: 4235900, total_vol: 9560100, close: 1.47, return: 0 },
          { date: "2025-10-17", short_ratio: 0.3283, short_vol: 3321700, total_vol: 10117000, close: 1.47, return: 0 },
          { date: "2025-10-16", short_ratio: 0.6184, short_vol: 2203800, total_vol: 3563700, close: 1.47, return: -0.00676 },
          { date: "2025-10-15", short_ratio: 0.6443, short_vol: 4413300, total_vol: 6849800, close: 1.48, return: 0.00680 },
          { date: "2025-10-14", short_ratio: 0.4675, short_vol: 5324000, total_vol: 11388300, close: 1.47, return: -0.01342 },
          { date: "2025-10-13", short_ratio: 0.5559, short_vol: 7521900, total_vol: 13530300, close: 1.49, return: 0.00676 },
          { date: "2025-10-10", short_ratio: 0.3715, short_vol: 3760900, total_vol: 10123800, close: 1.48, return: -0.00671 },
          { date: "2025-10-09", short_ratio: 0.4410, short_vol: 4661400, total_vol: 10569700, close: 1.49, return: 0.00676 },
          { date: "2025-10-08", short_ratio: 0.3228, short_vol: 938400, total_vol: 2907200, close: 1.48, return: 0.00680 },
          { date: "2025-10-07", short_ratio: 0.4828, short_vol: 1718700, total_vol: 3559800, close: 1.47, return: 0 },
          { date: "2025-10-06", short_ratio: 0.3732, short_vol: 3701700, total_vol: 9919900, close: 1.47, return: 0 },
          { date: "2025-10-03", short_ratio: 0.5316, short_vol: 4811200, total_vol: 9050500, close: 1.47, return: 0.00685 },
          { date: "2025-10-02", short_ratio: 0.4610, short_vol: 6549100, total_vol: 14206200, close: 1.46, return: 0.01389 },
          { date: "2025-10-01", short_ratio: 0.3043, short_vol: 7843300, total_vol: 25773400, close: 1.44, return: -0.00690 },
          { date: "2025-09-30", short_ratio: 0.3815, short_vol: 4247400, total_vol: 11134400, close: 1.45, return: 0 },
          { date: "2025-09-29", short_ratio: 0.6057, short_vol: 5221600, total_vol: 8620300, close: 1.45, return: -0.00685 },
          { date: "2025-09-26", short_ratio: 0.4015, short_vol: 4730100, total_vol: 11780800, close: 1.46, return: 0 }
        ]
      }
    },
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.0138, continuous: 0.8317, closing: 0.1389, auctions: 0.1634, other: 0.0049 },
        "3M": { opening: 0.0175, continuous: 0.8220, closing: 0.1437, auctions: 0.1700, other: 0.0080 },
        "6M": { opening: 0.0200, continuous: 0.8393, closing: 0.1209, auctions: 0.1501, other: 0.0106 }
      },
      hhi: { "1M": 0.1954, "3M": 0.2128, "6M": 0.2057 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0148 },
        { time: "09:00", avg_share: 0.1702 },
        { time: "09:30", avg_share: 0.0393 },
        { time: "10:00", avg_share: 0.0321 },
        { time: "10:30", avg_share: 0.023 },
        { time: "11:00", avg_share: 0.0221 },
        { time: "11:30", avg_share: 0.0206 },
        { time: "12:00", avg_share: 0.2828 },
        { time: "12:30", avg_share: 0.0093 },
        { time: "13:00", avg_share: 0.0137 },
        { time: "13:30", avg_share: 0.0202 },
        { time: "14:00", avg_share: 0.0182 },
        { time: "14:30", avg_share: 0.0272 },
        { time: "15:00", avg_share: 0.0288 },
        { time: "15:30", avg_share: 0.0252 },
        { time: "16:00", avg_share: 0.0262 },
        { time: "16:30", avg_share: 0.0748 },
        { time: "17:00", avg_share: 0.1515 }
      ],
      peers_hhi_rows: [
        { ticker: "C52", auctions_pct: 15.59, hhi: 0.1957, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "S58", auctions_pct: 12.07, hhi: 0.1213, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "C07", auctions_pct: 13.95, hhi: 0.1239, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "C6L", auctions_pct: 22.63, hhi: 0.1252, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "1MZ", auctions_pct: 4.18, hhi: 0.1693, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "E3B", auctions_pct: 5.47, hhi: 0.1717, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "J36", auctions_pct: 30.12, hhi: 0.1937, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "5LY", auctions_pct: 4.97, hhi: 0.2352, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "S61", auctions_pct: 5.86, hhi: 0.2300, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "28.1%", note_suffix: " - 3-month average absolute OFI (moderate one-sidedness)." },
        { value: "0.42", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "Significant (3-min)", note_suffix: " - L2 OFI Granger-causality significant (p≈0.0000) at 3-min lag. Direction: negative (buy pressure → price down)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−1.4%", avg_abs: "27.3%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "+2.2%", avg_abs: "28.1%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "+4.2%", avg_abs: "24.5%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.42",
      pie: { net_buy_days: 47.1, net_sell_days: 42.6, balanced_days: 10.3 },
      l2_compact_text: "Over the last 7 days we analyzed 2,739 valid L2 snapshots (top 4 levels). Average L2 OFI was +0.017% of book value (abs: 1.21%). Granger causality: OFI% significantly predicts mid-price changes (p≈0.0000). Lead time: 3 min lag. Direction: negative correlation (buy pressure → price down), suggesting contrarian/mean-reversion microstructure—avoid urgency during extreme imbalances.",
      unusual_header: ["Date", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-01-14", ofi: "−83%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2025-02-25", ofi: "+75%", direction: "BUY pressure", return: "+0.7%" },
        { date: "2025-02-13", ofi: "−75%", direction: "SELL pressure", return: "−2.2%" },
        { date: "2026-01-06", ofi: "−74%", direction: "SELL pressure", return: "−1.4%" },
        { date: "2025-01-21", ofi: "−70%", direction: "SELL pressure", return: "−1.4%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#58", sub: "of 562 stocks" },
        { title: "Free Float", value: "98.9%", sub: "Float mcap ~ S$3.2B" },
        { title: "Avg Daily Turnover", value: "S$13.0M", sub: "Notional value" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #58 - outside top 30", gaps: ["Need rank ≤30 (currently #58)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 91.8% - qualifies", gaps: [] },
        { index: "FTSE Large/mid Cap", status: "eligible", notes: "Top 91.8% - qualifies", gaps: [] }
      ],
      insight: "You qualify for FTSE All-Share and FTSE Large/mid Cap. STI inclusion would require a market-cap rank in the top 30 (currently #58).",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Keep turnover and velocity strong to retain current index membership", "Improve market-cap rank to enter the top 30 for STI consideration"]
    }
  }
};

export default REPORT_DATA;
