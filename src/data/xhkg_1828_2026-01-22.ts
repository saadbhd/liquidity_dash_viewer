// @ts-nocheck

// ============================================================================
// FWD Group (1828.HK) Liquidity Analysis Report
// Generated: 2026-01-22
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
// Peers are selected in three steps:
// 1. Start with the same market-cap category as the company (large cap)
// 2. Filter on the same Industry and Sector (Financials - Insurance)
// 3. If many remain, choose closest by ADV (20-day Average Daily Volume)
// ============================================================================

export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (large cap)",
    "Filter on the same Industry and Sector (Financials - Insurance)",
    "If many remain, choose closest by ADV (20-day Average Daily Volume)"
  ],
  peers: [
    { ticker: "1508", name: "CHINA RE", marketCap: "11.1B HKD" },
    { ticker: "376", name: "YUNFENG FIN", marketCap: "14.0B HKD" },
    { ticker: "2378", name: "PRU", marketCap: "313.2B HKD" },
    { ticker: "6963", name: "SUNSHINE INS", marketCap: "14.3B HKD" },
    { ticker: "82318", name: "PING AN-R", marketCap: "443.1B HKD" },
    { ticker: "945", name: "MANULIFE-S", marketCap: "485.4B HKD" },
    { ticker: "6060", name: "ZA ONLINE", marketCap: "27.5B HKD" },
    { ticker: "966", name: "CHINA TAIPING", marketCap: "82.7B HKD" }
  ]
};

// ============================================================================
// TECHNICAL TERMS GLOSSARY (for help tooltips)
// ============================================================================
export const GLOSSARY = {
  ofi: {
    term: "Order Flow Imbalance (OFI)",
    explanation: "Measures whether buyers or sellers are more active. Positive OFI means more buying pressure, negative means more selling pressure. The absolute value (|OFI|) shows how one-sided the trading is, regardless of direction.",
    plainLanguage: "Think of it as a scale: which side is heavier - buyers or sellers?"
  },
  adv: {
    term: "Average Daily Volume (ADV)",
    explanation: "The average amount of shares or money traded per day over the last 20 trading days. Higher ADV means more liquidity and easier to trade large amounts without moving the price.",
    plainLanguage: "How much of this stock trades on a typical day"
  },
  hhi: {
    term: "Herfindahl-Hirschman Index (HHI)",
    explanation: "Measures how concentrated trading is across different times of day. 0 = perfectly spread out, 1 = all trading happens at one time. Values above 0.25 indicate high concentration.",
    plainLanguage: "Are trades spread evenly through the day, or do they bunch up at certain times?"
  },
  spread: {
    term: "Bid-Ask Spread",
    explanation: "The difference between the highest price buyers are willing to pay (bid) and the lowest price sellers will accept (ask). Lower spreads mean lower trading costs.",
    plainLanguage: "The gap between what buyers offer and sellers ask - your immediate trading cost"
  },
  granger: {
    term: "Granger Causality",
    explanation: "A statistical test that checks if one time series can predict another. If OFI 'Granger-causes' price, it means order flow imbalance helps predict future price movements.",
    plainLanguage: "Does knowing the order imbalance help us guess where the price is heading?"
  },
  regime: {
    term: "Volatility Regime",
    explanation: "Different market states characterized by volatility levels. Markets can be calm (low vol), normal (medium vol), or turbulent (high vol). The model identifies which state we're in and how likely we are to switch.",
    plainLanguage: "Is the market currently calm, normal, or chaotic?"
  },
  kyle: {
    term: "Kyle's Lambda",
    explanation: "Measures how much the price moves when you trade. Higher lambda means your trades have more price impact - the market is less liquid.",
    plainLanguage: "How much does the price move when you buy or sell?"
  },
  amihud: {
    term: "Amihud Ratio",
    explanation: "Measures price impact per dollar traded. Lower values indicate better liquidity. It's calculated as the average of (|return| / dollar volume) over a period.",
    plainLanguage: "How much does the price bounce around relative to how much is being traded"
  },
  idiosyncratic: {
    term: "Idiosyncratic Risk",
    explanation: "Price movements specific to this company, not explained by the overall market or sector. High idiosyncratic share means the stock marches to its own drum.",
    plainLanguage: "How much of the price movement is just about this company, not the market"
  }
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XHKG",
    ticker: "1828",
    company: "FWD Group",
    asof_date: "2026-01-22",
    industry: "Financials - Insurance",
    sector: "Insurance",
    market_cap_display: "47.6B",
    market_cap_category: "large",
    universe_total: 2607,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  // ============================================================================
  // THEME & STYLING
  // ============================================================================
  theme: {
    badges: {
      header_health: {
        text: "Liquidity Health: ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300",
        dot: "bg-emerald-500"
      },
      liq_section: {
        text: "Liquidity score: 82% — ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-led; market meaningful", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW crossing cost", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "Balanced/moderate; L2 signal significant", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      short: { text: "Short data unavailable", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      index_status: { text: "Eligible: HSCI", bg: "bg-emerald-500/20", textColor: "text-emerald-300" }
    },
    borders: {
      action_plan: "border-emerald-500",
      index: "border-sky-500"
    },
    colors: {
      interpretation_good: "interpretation-good",
      interpretation_neutral: "interpretation-neutral",
      interpretation_bad: "interpretation-bad"
    }
  },

  // ============================================================================
  // LABELS - USER-FRIENDLY SECTION TITLES
  // ============================================================================
  labels: {
    header_title: "Liquidity Analysis Report",
    header_meta_line1_tokens: [
      "{company}", "•", "{ticker}", "•",
      "Sector: {sector}", "•",
      "Market Cap: {mcap} ({mcap_cat} cap)"
    ],
    header_meta_line2_tokens: ["As of: {asof}", "•", "Universe: {univ}", "•", "Peers: {peers}"],

    // EXECUTIVE SUMMARY - User-friendly titles
    exec_title: "Executive Summary: What Matters for Trading",
    exec_subtitle: "Key metrics that explain your stock's trading experience",
    exec_takeaways_title: "Key Takeaways:",

    // METRIC TITLES - User-friendly names
    metric_liquidity_score: "Liquidity Score",
    metric_spread: "Trading Cost (Spread)",
    metric_adv: "Average Traded Volume",
    metric_drivers: "What Drives Price Changes",

    // ACTION PLAN
    action_plan_title: "Action Plan (Prioritized)",
    action_plan_subtitle: "Steps to improve trading conditions and reduce costs",
    action_plan_icon: "",

    // LIQUIDITY HEALTH
    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar companies in the Insurance sector",

    // MARKET COMPARISON - NEW SECTION
    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    // PERFORMANCE
    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight: "Liquidity is strong, but recent returns have lagged market and sector — execution is more about timing and market conditions than trading friction.",

    // DRIVERS
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Understanding whether price changes come from the market, your sector, or company-specific factors",
    drivers_strip: [
      { title: "Key Insight", text: "About 61% of price moves are specific to FWD. The broader market accounts for ~28% and the Insurance sector contributes ~11%." },
      { title: "Market Sensitivity", text: "Moderate relationship with the overall market (correlation ~0.49). Market conditions do matter for timing." },
      { title: "Sector Link", text: "Insurance sector moves have some influence (correlation ~0.43), but company factors are still more important." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Company-specific factors dominate, but market and sector still play meaningful roles.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "FWD tends to move at the same time as the market and sector, not before or after.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Market and sector influence increased recently compared to the previous period.",
    drivers_bottom_line: "Bottom line: FWD is a liquid large-cap stock. While company news drives most price changes, broader market conditions still matter for timing trades.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Small to medium trades can be executed confidently — costs are low with tight spreads.",
      "For larger trades, use limit orders and watch market conditions and order book balance."
    ],

    // REGIME SWITCHING
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Understanding when markets are calm versus turbulent helps with trade timing",
    regime_badge_text: "Current: Low Volatility Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Med Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    // EXECUTION CHECK
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is tight (~0.21%). The main constraint is how much you want to trade versus what's available.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "Lower is better. Shows what percentage of a typical day's trading a 50K order represents.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Based on current order book snapshot. Actual results depend on timing and market conditions.",
    exec_check_insight: "Liquidity is strong with an average daily volume of ~HK$22.4M and tight spreads (~0.21%). Small orders execute easily; larger orders may face partial fills (e.g., ~HK$1.5M sells only fill 56% in the current snapshot).",

    // TRADER COMPOSITION - NEW SECTION
    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional traders",
    trader_retail_threshold: "Retail: Trades under HK$78,000",
    trader_mixed_threshold: "Mixed: Trades HK$78,000 - HK$390,000",
    trader_instit_threshold: "Institutional: Trades over HK$390,000",

    // PEER TRADER COMPOSITION - NEW SECTION
    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Trader composition across similar Insurance stocks",

    // PRICE-MOVING TRADES - NEW SECTION
    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Analysis of trades that caused price changes",

    // INTRADAY
    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the trading day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note: "Most trading happens during continuous sessions. Auctions and opening/closing account for smaller shares.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Peak trading times are around 3:30 PM and 9:30 AM, but overall concentration is moderate.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is moderately concentrated (HHI ~0.17). Best liquidity is at 3:30 PM and 9:30 AM, but you can trade throughout most of the day.",

    // OFI
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does order imbalance predict price changes?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Average)", note: "How one-sided is trading?" },
      { title: "Does Imbalance Predict Daily Prices?", note: "Statistical relationship test" },
      { title: "Short-Term Order Book Signal", note: "Can order book imbalance predict next-minute prices?" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "OFI measures buyer-initiated minus seller-initiated volume. Positive = more buying pressure.",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger price moves — useful as a trading signal.",

    // INDEX
    index_title: "Index Inclusion Status",
    index_subtitle: "Which stock indices could include FWD, and what's needed to qualify",

    // FOOTER
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // CONTENT - EXECUTIVE METRICS WITH USER-FRIENDLY LABELS
  // ============================================================================
  content: {
    exec_metrics: [
      {
        title: "Liquidity Score",
        tooltip: {
          title: "What this means",
          body: "A composite score (0-100) based on trading volume, number of trades, spread width, price impact, and volatility. Higher is better."
        },
        value: "82.3",
        suffix: "/100",
        bar_pct: 82.3,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Rank 462/2607 • Peer median: 81.5",
        interpretation: { text: "ABOVE AVERAGE", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Wider spreads = higher trading costs."
        },
        value: "0.21",
        suffix: "%",
        bar_pct: 21,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "~21 basis points • Very tight",
        interpretation: { text: "EXCELLENT", cls: "interpretation-good", icon: "●" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body: "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade large amounts."
        },
        value: "22.4M",
        suffix: "HKD",
        bar_pct: 35,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 34.5M HKD • 35% below peers",
        interpretation: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "61.2",
        suffix: "% company",
        bar_pct: 61.2,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 27.6% • Sector: 11.2%",
        interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Liquidity score (82.3/100) is slightly above peer median (81.5) with healthy trading activity (~1,386 trades/day).",
      "Trading costs are very low with tight spreads (~0.21%). A HK$50K order is only 0.2% of daily volume; HK$500K is 2.2%.",
      "Price movements are mostly company-specific (~61%), but market conditions (~28%) and sector trends (~11%) still matter for timing."
    ],

    // ============================================================================
    // ACTION PLAN
    // ============================================================================
    action_plan: {
      borderClass: "border-emerald-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            {
              title: "Maintain tight spreads and protect order book quality",
              bullets: [
                "Keep consistent quoting and depth at the best prices — tight spreads are a key competitive advantage.",
                "Monitor spread levels during volatile periods to ensure trading quality doesn't deteriorate."
              ]
            },
            {
              title: "Increase average traded volume through targeted outreach",
              bullets: [
                "Your ADV (HK$22.4M) is 35% below peer median — focus on attracting larger institutional investors.",
                "Engage with market makers and liquidity providers to improve depth at top of book."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Reduce price volatility around company announcements",
              bullets: [
                "With 61% idiosyncratic risk, improve predictability through consistent KPI reporting and guidance.",
                "Pre-brief key metrics to reduce surprise-driven price gaps during earnings or announcements."
              ]
            },
            {
              title: "Smooth out intraday trading availability",
              bullets: [
                "Trading concentration is moderate (HHI ~0.17) but peaks at 3:30 PM and 9:30 AM.",
                "Consider supporting deeper liquidity outside peak hours where possible."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            {
              title: "Establish monthly liquidity monitoring",
              bullets: [
                "Track spreads, trading volume, concentration, order book depth, and price impact monthly.",
                "Use peer benchmarking to catch any deterioration early."
              ]
            },
            {
              title: "Attract institutional investor participation",
              bullets: [
                "Current institutional participation is only 0.4% — well below peer average.",
                "Consider roadshows targeting long-only funds and pension funds to build stable ownership base."
              ]
            }
          ]
        }
      ]
    },

    // ============================================================================
    // LIQUIDITY TILES
    // ============================================================================
    liq_tiles: [
      {
        title: "Daily Trades",
        value: "1,386",
        sub: "Healthy trading activity supports efficient execution",
        interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.21%",
        sub: "Below peer median of 0.48% — shares change hands less frequently",
        interp: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "1.09%",
        sub: "Moderate day-to-day price movement",
        interp: { text: "LOW", cls: "interpretation-good", icon: "✓" }
      }
    ],

    liq_insight: "Liquidity quality is strong overall. With tight spreads (~0.21%) and good trade counts, the main variable for execution is market timing rather than trading friction.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "37.54", note: "HKD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.21%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Kyle's Lambda", value: "0.06 bps", note: "per HK$50K traded", color: "text-white" }
    ],

    impact_summary_cards: [
      { title: "HK$50K Sell", text: "Impact: −0.11% • Fill: 100%", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "HK$500K Sell", text: "Impact: −0.13% • Fill: 100%", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "HK$1.5M Sell", text: "Impact: −0.24% • Fill: 56.2%", cls: "bg-red-500/10 border border-red-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Balanced" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Weak relationship" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Significant predictive power" }
    ],

    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // INSIGHTS - ALL ANALYSIS AND COMMENTS IN ONE PLACE
  // ============================================================================
  insights: {
    // LIQUIDITY INSIGHTS
    liquidity: {
      overall: "FWD's liquidity score of 82.3/100 ranks in the top 18% of all Hong Kong stocks (462nd out of 2,607). This is slightly above the peer median of 81.5, indicating solid but not exceptional liquidity for an Insurance sector stock.",
      strengths: [
        "Tight bid-ask spread of 0.21% is excellent — better than 75% of peers",
        "Low volatility (1.09% daily) makes the stock more predictable to trade",
        "Strong daily trade count (1,386) supports efficient order execution"
      ],
      concerns: [
        "Average daily volume (HK$22.4M) is 35% below peer median (HK$34.5M) — this is a significant gap",
        "Lower turnover ratio (0.21% vs peer median 0.48%) suggests shares change hands less frequently",
        "Among 8 peers, only 2 have lower ADV — this is an area for improvement"
      ],
      peer_context: "Peers 6060 (ZA ONLINE) and 966 (CHINA TAIPING) have dramatically higher liquidity with ADV over HK$230M and 10K+ daily trades. However, FWD outperforms peers like 82318 (PING AN-R) and 945 (MANULIFE-S) which have very low trading activity."
    },

    // MARKET COMPARISON INSIGHTS
    market_comparison: {
      adv: {
        insight: "Your average daily trading volume (HK$22.4M) is well above the overall market median (HK$382K) but trails your Insurance sector peers (median HK$34.5M). This puts you in a challenging position: liquid enough for most trades, but thinner than direct competitors.",
        vs_market: "Your ADV is 58x higher than the overall market median — you're in a completely different liquidity tier than smaller stocks.",
        vs_sector: "However, among Insurance peers, you're at the lower end. The sector median is 54% higher than your volume.",
        vs_peers: "Peer median ADV (HK$34.5M) is 54% higher than yours. Only 2 of 8 peers have lower volume."
      },
      spread: {
        insight: "Your spread of 0.21% is excellent — better than 75% of peers and far tighter than the overall market median of 2.8%. This is a real strength.",
        vs_market: "Market median spread is 13x wider than yours — you have a significant trading cost advantage.",
        vs_sector: "Sector median spread matches yours at 0.21% — you're competitive with peers.",
        vs_peers: "Peer median spread is 0.33%, so your 0.21% is actually better than most peers."
      },
      volatility: {
        insight: "Your daily volatility of 1.09% is remarkably low — half the peer median (2.2%) and far below the overall market (3.1%). This is a major strength that reduces execution risk.",
        vs_market: "Market median volatility is 2.9x higher than yours — your stock is much more stable.",
        vs_sector: "Sector median volatility (2.0%) is still 84% higher than yours.",
        vs_peers: "Peer median volatility (2.2%) is 2x higher — you're significantly less volatile than competitors."
      },
      trades: {
        insight: "Your 1,386 daily trades are slightly above peer median (1,172) and dramatically higher than the overall market (27). This indicates healthy market participation.",
        vs_market: "You have 50x more daily trades than the market median — excellent participation.",
        vs_sector: "Sector median (1,386) matches yours exactly — right in line with peers.",
        vs_peers: "Peer median is 1,172 trades, so you're 18% above that."
      }
    },

    // PERFORMANCE INSIGHTS
    performance: {
      overall: "FWD's returns have significantly underperformed across all time horizons. This is a concern that goes beyond liquidity — it reflects underlying business or market sentiment issues.",
      ytd: {
        stock: "-1.4%",
        market: "+5.6%",
        sector: "+4.9%",
        peers: "+3.9%",
        insight: "YTD, FWD is down 1.4% while the market is up 5.6% — a 7 percentage point underperformance. Even peers are up 3.9%. This is a significant gap that warrants attention."
      },
      three_month: {
        stock: "-15.1%",
        market: "+5.3%",
        sector: "+4.6%",
        peers: "+6.8%",
        insight: "Over 3 months, FWD has declined 15.1% while the market gained 5.3% — a 20+ point gap. This is the most concerning period and suggests company-specific challenges."
      },
      six_month: {
        stock: "-1.4%",
        market: "+31.5%",
        sector: "+8.8%",
        peers: "+14.1%",
        insight: "6-month performance shows FWD flat (-1.4%) while the market surged 31.5%. Even the more conservative Insurance sector gained 8.8%. This is a major underperformance."
      },
      conclusion: "The consistent underperformance across all timeframes suggests the issue is not liquidity-related but fundamental. Investors may have concerns about the business that need to be addressed through clearer communication and guidance."
    },

    // DRIVERS INSIGHTS
    drivers: {
      overall: "FWD's price movements are primarily driven by company-specific factors (61.2%), with the broader market contributing 27.6% and the Insurance sector just 11.2%. This high idiosyncratic share means FWD's stock price is largely independent of sector trends.",
      interpretation: "High idiosyncratic risk is a double-edged sword. On one hand, it means your stock isn't dragged down by sector weakness. On the other, it means you need to work harder to manage investor expectations since company news has outsized impact.",
      rolling_change: "The market's influence increased from 15.4% to 27.6% in the most recent 3-month window, while idiosyncratic share dropped from 83.2% to 61.2%. This suggests FWD is becoming more correlated with broader market movements.",
      beta: "Beta of 0.69 means when the market moves 1%, FWD typically moves 0.69% in the same direction. This lower-than-1 beta indicates FWD is less volatile than the overall market."
    },

    // REGIME INSIGHTS
    regime: {
      overall: "The market for FWD has three distinct states: Low Volatility (67% of time), Medium Volatility (27%), and High Volatility (6%). Currently, we're in the Low Volatility regime.",
      current: "Current regime: Low Volatility (σ=0.65%). This is the calmest state with low daily price swings. It's a good environment for executing trades.",
      transitions: "The market tends to stay in its current state. From Low Vol, there's a 96% chance of staying Low Vol and only a 4% chance of jumping to High Vol. Medium Vol is more unstable with a 62% chance of jumping to High Vol.",
      trading_implications: "In Low Vol regime, trades are less likely to move the price significantly. As volatility increases, execution becomes more challenging and timing becomes more critical."
    },

    // TRADER COMPOSITION INSIGHTS
    trader_composition: {
      overall: "FWD's trading is dominated by retail investors (95.9%), with minimal institutional participation (0.4%). This is typical for many Hong Kong stocks but may limit large block trading capacity.",
      retail_heavy: "95.9% retail traders means most trades are small (average HK$21K, median HK$7.6K). This creates a liquid but fragmented market.",
      institutional_gap: "Only 0.4% institutional participation is very low. Institutions typically provide deeper liquidity and more stable trading. This may explain why larger orders have higher impact.",
      peer_comparison: "Compared to peers, FWD has higher retail concentration than most. Peer 82318 (PING AN-R) has 7.8% institutional participation — nearly 20x higher than FWD. This is a significant gap."
    },

    // PRICE-MOVING TRADES INSIGHTS
    price_moving: {
      overall: "Of 168,375 trades analyzed, 46,558 (27.7%) moved the price. Interestingly, negative price movers averaged 1.3x larger size than positive movers (HK$23.6K vs HK$18.6K).",
      interpretation: "The fact that sell trades that move prices are larger on average suggests that selling pressure has more impact than buying pressure. This is a liquidity concern.",
      asymmetry: "Negative movers: 23,134 trades, avg HK$23.6K. Positive movers: 23,424 trades, avg HK$18.6K. The size asymmetry indicates that the market absorbs buying more easily than selling."
    },

    // EXECUTION INSIGHTS
    execution: {
      overall: "Execution costs are very reasonable for small to medium trades. A HK$50K order has only 10.7 bps impact and fills 100%. Even HK$500K orders fill completely with 13.2 bps impact.",
      concern: "The challenge is at HK$1.5M where impact jumps to 24.1 bps and only 56% fills in the snapshot. This indicates depth constraints for large trades.",
      kyle: "Kyle's Lambda of 0.06 bps per HK$50K means each additional HK$50K traded moves the price by 0.06 bps. This is quite low, indicating good liquidity.",
      peer_context: "Your 50K order is only 0.2% of daily volume — among the best in your peer group. Only 966 and 6060 have better ratios."
    },

    // INTRADAY INSIGHTS
    intraday: {
      overall: "Trading is moderately concentrated with an HHI of 0.17. Peak times are 3:30 PM (18.6% of volume) and 9:30 AM (12.4%). There's good liquidity throughout the day, but timing large trades around peaks is beneficial.",
      hhi_interpretation: "HHI of 0.17 is in the 'moderate' range. Values below 0.15 would be perfectly spread; above 0.25 would be highly concentrated.",
      best_times: "Best liquidity: 3:30 PM (18.6%), 9:30 AM (12.4%), 1:00 PM (8.2%). Worst: 9:00 AM (0.3%), 4:00 PM (1.3%).",
      peer_ranking: "Among peers, FWD's HHI of 0.17 ranks middle of the pack. 966 and 6060 have the most even trading (HHI ~0.12), while 376 is most concentrated (HHI 0.33)."
    },

    // OFI INSIGHTS
    ofi: {
      overall: "Order flow imbalance is moderate at 18.5% absolute average. The key finding is that while daily OFI doesn't predict same-day returns (correlation ~0), the order book OFI (L2) significantly predicts next-minute prices (p=0.0003).",
      daily_vs_intraday: "Daily OFI has no correlation with daily returns — knowing whether there was more buying or selling today doesn't help predict today's price change. But order book imbalance at the minute level does predict the next minute's price.",
      l2_signal: "The L2 OFI Granger test shows order book imbalance significantly predicts mid-price changes at 1-minute lag (p=0.0003). This is a tradable signal for algorithmic execution.",
      day_breakdown: "Over 3 months: 62.5% of days had net buying, 18.8% net selling, 18.8% balanced. There's a slight buy bias overall."
    },

    // INDEX INSIGHTS
    index: {
      overall: "FWD is currently eligible for Hang Seng Composite (HSCI) but not for the main Hang Seng Index (HSI) or Hang Seng TECH.",
      hsci: "Eligible for HSCI — meets rank (#179) and velocity (0.13%) requirements. This is good for passive fund flows.",
      hsi_gap: "To qualify for HSI, need to be in top 80% by market cap. Currently at 84.6% — need to improve by ~4.6 percentage points (about S$2.6B in market cap).",
      tech_gap: "Hang Seng TECH requires Tech/Internet/Auto sector and rank ≤30. FWD is Insurance and rank #179 — two significant barriers.",
      recommendation: "Focus on maintaining HSCI eligibility and working toward HSI. The 4.6% market cap gap is achievable with improved investor relations and performance."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA FROM JSON
  // ============================================================================
  series: {
    // Q01: LIQUIDITY DATA
    peers_liquidity: {
      labels: ["1828", "1508", "376", "2378", "6963", "82318", "945", "6060", "966"],
      scores: [82.3, 80.6, 82.5, 72.2, 88.3, 63.8, 63.2, 96.9, 96.5],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [22354887, 30096945, 38852415, 9532655, 66469803, 6587130, 3476620, 232705730, 266235469],
      total: 2607
    },

    // MARKET COMPARISON DATA - Enhanced with p5/p95 percentiles
    market_comparison: {
      sector_name: "Insurance",
      sector_count: 21,
      market_count: 2607,
      company: {
        volatility: 0.0109, // 1.09%
        adv: 22354887, // HK$22.4M
        spread_pct: 0.0021, // 0.21%
        turnover_ratio: 0.0021, // 0.21%
        amihud: 5.5e-10,
        trades: 1386
      },
      market: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.04118605213465057,
          median: 0.03112404206733586,
          min: 0.0,
          max: 1.0314818373418977,
          p5: 0.009315740690254285,
          p95: 0.10008764977314445,
          count: 2606
        },
        adv: {
          direction: "higher_is_better",
          mean: 70241086.0754347,
          median: 381647.96875,
          min: 0.0,
          max: 14678035050.64,
          p5: 4625.340000000001,
          p95: 271383709.4968999,
          count: 2607
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.04885242725430493,
          median: 0.028199294566958678,
          min: 0.000541081177412961,
          max: 0.929232613639424,
          p5: 0.0013805023897133682,
          p95: 0.1576906832569068,
          count: 2605
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.006419908220484146,
          median: 0.0019507850449621495,
          min: 0.0,
          max: 0.3931216750821062,
          p5: 7.209130987781564e-05,
          p95: 0.023011206770128415,
          count: 2232
        },
        amihud: {
          direction: "lower_is_better",
          mean: 1.2605924920331453e-05,
          median: 1.3534263908720266e-07,
          min: 0.0,
          max: 0.004219916290650667,
          p5: 7.334417687653394e-11,
          p95: 3.384796621846086e-05,
          count: 2597
        },
        trades: {
          direction: "higher_is_better",
          mean: 1168.943670886076,
          median: 27.45,
          min: 0.0,
          max: 123545.95,
          p5: 0.95,
          p95: 6370.139999999998,
          count: 2607
        }
      },
      sector: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.02183539647582677,
          median: 0.020201237826426657,
          min: 0.009519872234777443,
          max: 0.0449751825649026,
          p5: 0.010851392864555361,
          p95: 0.04334186668212304,
          count: 21
        },
        adv: {
          direction: "higher_is_better",
          mean: 449501943.5644972,
          median: 38852414.673,
          min: 41065.0,
          max: 2987514025.965,
          p5: 94135.0,
          p95: 1982215630.2389998,
          count: 21
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.01219952183187292,
          median: 0.0021029427684850373,
          min: 0.000680156037633248,
          max: 0.08138425417484653,
          p5: 0.0008184348940482488,
          p95: 0.06654547471941562,
          count: 21
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.004486280118556357,
          median: 0.0027885695553047487,
          min: 8.998039172473588e-07,
          max: 0.011046313634866564,
          p5: 7.122266495196134e-06,
          p95: 0.010853053514414911,
          count: 21
        },
        amihud: {
          direction: "lower_is_better",
          mean: 5.708082488555099e-08,
          median: 4.13798180652322e-10,
          min: 5.114038223161178e-12,
          max: 5.408303331174588e-07,
          p5: 7.899387392007589e-12,
          p95: 3.091380750176505e-07,
          count: 21
        },
        trades: {
          direction: "higher_is_better",
          mean: 5609.559523809525,
          median: 1385.6,
          min: 0.75,
          max: 20668.0,
          p5: 2.3,
          p95: 18061.4,
          count: 21
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 81745033.70863895,
          median: 34474680.061000004,
          min: 3476620.0,
          max: 266235468.6525,
          p5: 4566524.821814055,
          p95: 254500060.12412497,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 3351.3875,
          median: 1171.8000000000002,
          min: 34.05,
          max: 10573.75,
          p5: 40.787499999999994,
          p95: 10534.865,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.02361776897086524,
          median: 0.022053244276065427,
          min: 0.009519872234777443,
          max: 0.04334186668212304,
          p5: 0.012307422997234052,
          p95: 0.03824624996313787,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.0032517778517974064,
          median: 0.003322442702030428,
          min: 0.0011189184969732568,
          max: 0.006432572667501981,
          p5: 0.0013971414140731037,
          p95: 0.005602820064567806,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 1.3560366886564888e-09,
          median: 7.763441862416913e-10,
          min: 8.615681361672288e-11,
          max: 3.802228124997055e-09,
          p5: 1.0356400939463503e-10,
          p95: 3.709896167441563e-09,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.004801441223342835,
          median: 0.004787723950506374,
          min: 7.122266495196134e-06,
          max: 0.011046313634866564,
          p5: 1.0547070393014633e-05,
          p95: 0.010346102221150438,
          count: 8
        }
      }
    },

    // RETURNS DATA
    returns: [
      { horizon: "1M", stock: -2.55, market: 6.49, sector: 4.89, peers: 3.96 },
      { horizon: "3M", stock: -15.08, market: 5.28, sector: 4.60, peers: 6.82 },
      { horizon: "6M", stock: -1.45, market: 31.49, sector: 8.78, peers: 14.13 },
      { horizon: "YTD", stock: -1.42, market: 5.60, sector: 4.86, peers: 3.85 }
    ],

    // DRIVERS DATA
    drivers: {
      share_market: 27.6,
      share_sector: 11.2,
      share_idio: 61.2,
      beta_market: 0.69,
      beta_sector: 0.15,
      r_squared: 25.9,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [0.26, 0.11, 0.09, 0.10, 0.01, 0.49, -0.14, 0.00, 0.03, -0.36, 0.03],
        corr_sector: [0.12, -0.08, 0.02, -0.02, 0.09, 0.43, -0.05, -0.01, 0.03, -0.16, -0.14],
        best: { market: 0, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: false },
        p2: { valid: false },
        p3: { valid: false },
        p4: { valid: false },
        p5: {
          valid: true,
          period_label: "2025-09-16 to 2025-11-18",
          shares: {
            share_market: 0.1543091674271808,
            share_sector: 0.013191352320887976,
            share_idio: 0.8324994802519312
          },
          regression: {
            r_squared: 0.011285741942563599
          }
        },
        p6: {
          valid: true,
          period_label: "2025-11-18 to 2026-01-20",
          shares: {
            share_market: 0.27585606039369565,
            share_sector: 0.11225649535189441,
            share_idio: 0.6118874442544099
          },
          regression: {
            r_squared: 0.25881614291507127
          }
        }
      },
      rolling: {
        ordered: ["2025-09-16 to 2025-11-18", "2025-11-18 to 2026-01-20"],
        market: [15.4, 27.6],
        sector: [1.3, 11.2],
        idio: [83.2, 61.2]
      },
      // 3-REGIME MODEL
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "Medium Vol", "High Vol"],
        pct_time: [66.7, 27.0, 6.3],
        current_regime: 0,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: -0.08, volatility: 0.65, n_days: 84, pct_time: 66.7 },
          { id: 1, label: "Medium Vol", mean_ret: -0.81, volatility: 1.84, n_days: 34, pct_time: 27.0 },
          { id: 2, label: "High Vol", mean_ret: 4.00, volatility: 2.57, n_days: 8, pct_time: 6.3 }
        ],
        transitions: [
          [96.2, 10.0, 0.0],
          [0.0, 84.0, 61.7],
          [3.8, 6.0, 38.3]
        ]
      }
    },

    // ORDER BOOK DATA
    order_book: {
      bids: [
        { level: 1, price: 37.50, quantity: 7000, value: 262500 },
        { level: 2, price: 37.48, quantity: 8900, value: 333572 },
        { level: 3, price: 37.44, quantity: 600, value: 22464 },
        { level: 4, price: 37.42, quantity: 600, value: 22452 },
        { level: 5, price: 37.40, quantity: 700, value: 26180 },
        { level: 6, price: 37.38, quantity: 600, value: 22428 },
        { level: 7, price: 37.36, quantity: 800, value: 29888 },
        { level: 8, price: 37.34, quantity: 700, value: 26138 },
        { level: 9, price: 37.32, quantity: 600, value: 22392 },
        { level: 10, price: 37.30, quantity: 2000, value: 74600 }
      ],
      asks: [
        { level: 1, price: 37.58, quantity: 900, value: 33822 },
        { level: 2, price: 37.60, quantity: 3100, value: 116560 },
        { level: 3, price: 37.62, quantity: 3700, value: 139194 },
        { level: 4, price: 37.64, quantity: 1500, value: 56460 },
        { level: 5, price: 37.66, quantity: 400, value: 15064 },
        { level: 6, price: 37.68, quantity: 100, value: 3768 },
        { level: 7, price: 37.70, quantity: 2900, value: 109330 },
        { level: 8, price: 37.72, quantity: 1900, value: 71668 },
        { level: 9, price: 37.74, quantity: 1200, value: 45288 },
        { level: 10, price: 37.76, quantity: 500, value: 18880 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 0.2,
      peers: [
        { ticker: "966", pct: 0.2 },
        { ticker: "6060", pct: 0.2 },
        { ticker: "6963", pct: 0.8 },
        { ticker: "376", pct: 1.3 },
        { ticker: "1508", pct: 1.7 },
        { ticker: "2378", pct: 5.2 },
        { ticker: "82318", pct: 7.6 },
        { ticker: "945", pct: 14.4 }
      ]
    },

    // TRADER COMPOSITION DATA
    trader_composition: {
      valid: true,
      currency: "HKD",
      n_trades: 25408,
      first_trade_date: "2025-12-22",
      last_trade_date: "2026-01-19",
      period_days: 28,
      thresholds: { retail_max: 78000.0, instit_min: 390000.0 },
      composition: {
        retail_pct: 0.978904282115869,
        mixed_pct: 0.020269206549118388,
        instit_pct: 0.0008265113350125944
      },
      trade_size: {
        avg: 16121.331029596979,
        median: 7588.0
      },
      over_time: {
        valid: true,
        periods: [
          {
            month: "2026-01",
            n_trades: 17839,
            retail_pct: 0.9795952687930938,
            mixed_pct: 0.019451762991199058,
            instit_pct: 0.0009529682157071585,
            avg_trade_size: 16686.41121363305
          },
          {
            month: "2025-12",
            n_trades: 27321,
            retail_pct: 0.9759891658431243,
            mixed_pct: 0.023242194648804948,
            instit_pct: 0.0007686395080707148,
            avg_trade_size: 14830.713208154899
          },
          {
            month: "2025-11",
            n_trades: 15387,
            retail_pct: 0.9710794826801846,
            mixed_pct: 0.026905829596412557,
            instit_pct: 0.0020146877234028726,
            avg_trade_size: 17869.81138961461
          },
          {
            month: "2025-10",
            n_trades: 13356,
            retail_pct: 0.9564240790655885,
            mixed_pct: 0.040506139562743335,
            instit_pct: 0.0030697813716681643,
            avg_trade_size: 19254.60935609464
          },
          {
            month: "2025-09",
            n_trades: 22361,
            retail_pct: 0.9515674612047762,
            mixed_pct: 0.04431823263718081,
            instit_pct: 0.004114306158043021,
            avg_trade_size: 22465.784687625775
          },
          {
            month: "2025-08",
            n_trades: 18424,
            retail_pct: 0.9584237950499349,
            mixed_pct: 0.038808076422058184,
            instit_pct: 0.0027681285280069475,
            avg_trade_size: 20378.098235453755
          }
        ]
      },
      peer_comparison: [
        {
          ticker: "1828",
          currency: "HKD",
          is_target: true,
          retail_pct: 0.978904282115869,
          mixed_pct: 0.020269206549118388,
          instit_pct: 0.0008265113350125944,
          avg_trade_size: 16121.331029596979,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "2378",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9830383480825958,
          mixed_pct: 0.014601769911504425,
          instit_pct: 0.002359882005899705,
          avg_trade_size: 16452.923137905607,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "6963",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9481270575673992,
          mixed_pct: 0.04840288281875612,
          instit_pct: 0.003470059613844648,
          avg_trade_size: 21163.338902393454,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "6060",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9443455510811296,
          mixed_pct: 0.05028855772436966,
          instit_pct: 0.005365891194500731,
          avg_trade_size: 22340.690260086696,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "966",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9395556644327402,
          mixed_pct: 0.05507824575524798,
          instit_pct: 0.005366089812011875,
          avg_trade_size: 25972.250485164514,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "376",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9384064010668445,
          mixed_pct: 0.05871811968661444,
          instit_pct: 0.0028754792465410903,
          avg_trade_size: 30077.07386606101,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "1508",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.9122652733950649,
          mixed_pct: 0.08085458589829807,
          instit_pct: 0.006880140706637008,
          avg_trade_size: 28125.941237908028,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "945",
          currency: "HKD",
          is_target: false,
          retail_pct: 0.77487922705314,
          mixed_pct: 0.21932367149758455,
          instit_pct: 0.005797101449275362,
          avg_trade_size: 62035.9406763285,
          thresholds: { retail_max: 78000.0, instit_min: 390000.0 }
        },
        {
          ticker: "82318",
          currency: "CNY",
          is_target: false,
          retail_pct: 0.6426380368098159,
          mixed_pct: 0.2684049079754601,
          instit_pct: 0.08895705521472393,
          avg_trade_size: 172218.28987730062,
          thresholds: { retail_max: 72000.0, instit_min: 360000.0 }
        }
      ],
      currency_thresholds: {
        HKD: { retail_max: 78000.0, instit_min: 390000.0 },
        CNY: { retail_max: 72000.0, instit_min: 360000.0 }
      },
      classification_legend: {
        retail_heavy: ">70% retail",
        institutional: ">20% institutional",
        mixed: "otherwise"
      }
    },

    // PRICE-MOVING TRADES DATA
    price_moving_trades: {
      total_trades: 168375,
      price_moving_trades: 46558,
      pct_price_moving: 27.7,
      all_movers: { count: 46558, avg_size: 21076, median_size: 7600 },
      positive_movers: { count: 23424, avg_size: 18551, median_size: 7520 },
      negative_movers: { count: 23134, avg_size: 23632, median_size: 7628 }
    },

    // INTRADAY DATA
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        // Shares may be stored as fractions (0-1) or as percent points (0-100).
        // UI normalizes via toPct().
        "1M": {
          opening: 0.0006787398781374512,
          continuous: 0.8397070445558183,
          closing: 0.021779252028455275,
          auctions: 0.022457991906592728,
          other: 0.13783496353758892
        },
        "3M": {
          opening: 0.0009492101549092915,
          continuous: 0.8701513741098315,
          closing: 0.02585954493710453,
          auctions: 0.026808755092013824,
          other: 0.10303987079815484
        },
        "6M": {
          opening: 0.002999768763457979,
          continuous: 0.9227170061892696,
          closing: 0.02165654109532652,
          auctions: 0.024656309858784496,
          other: 0.05262668395194602
        }
      },
      hhi: { "1M": 0.201, "3M": 0.179, "6M": 0.170 },
      profile_buckets: [
        { time: "09:00", avg_share: 0.3 },
        { time: "09:30", avg_share: 12.4 },
        { time: "10:00", avg_share: 9.0 },
        { time: "10:30", avg_share: 8.1 },
        { time: "11:00", avg_share: 7.0 },
        { time: "11:30", avg_share: 4.9 },
        { time: "12:00", avg_share: 4.8 },
        { time: "13:00", avg_share: 8.2 },
        { time: "13:30", avg_share: 5.5 },
        { time: "14:00", avg_share: 6.4 },
        { time: "14:30", avg_share: 6.4 },
        { time: "15:00", avg_share: 7.1 },
        { time: "15:30", avg_share: 18.6 },
        { time: "16:00", avg_share: 1.3 }
      ],
      peers_hhi_rows: [
        { ticker: "966", auctions_pct: 4.31, hhi: 0.120, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "6060", auctions_pct: 2.84, hhi: 0.125, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "6963", auctions_pct: 5.34, hhi: 0.157, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "1508", auctions_pct: 4.09, hhi: 0.169, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "1828", auctions_pct: 7.22, hhi: 0.170, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "2378", auctions_pct: 3.83, hhi: 0.206, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "945", auctions_pct: 2.67, hhi: 0.207, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "82318", auctions_pct: 0.20, hhi: 0.214, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "376", auctions_pct: 1.21, hhi: 0.330, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    // OFI DATA
    ofi_block: {
      tiles_values: [
        {
          value: "18.5%",
          note_suffix: " - The average absolute order flow imbalance over 3 months. This measures how one-sided trading is, regardless of direction. Lower values mean more balanced buying and selling."
        },
        {
          value: "No correlation",
          note_suffix: " - Daily order flow imbalance does not predict same-day price changes. Knowing whether there was more buying or selling today doesn't help predict today's return."
        },
        {
          value: "Strong signal (1-min)",
          note_suffix: " - Order book imbalance significantly predicts next-minute price changes (p=0.0003). This is a statistically significant relationship that can be used for execution timing."
        }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "+8.0%", avg_abs: "16.3%", interp: { text: "Balanced", cls: "bg-emerald-500/20 text-emerald-300" } },
        { period: "3M", avg_ofi: "+11.5%", avg_abs: "18.5%", interp: { text: "Balanced", cls: "bg-emerald-500/20 text-emerald-300" } },
        { period: "6M", avg_ofi: "+11.4%", avg_abs: "21.4%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.00",
      pie: { net_buy_days: 62.5, net_sell_days: 18.8, balanced_days: 18.8 },
      l2_compact_text: "Over the last 7 days, we analyzed 1,815 order book snapshots. The average order book imbalance was -0.013% of book value (absolute: 0.55%). The key finding: order book imbalance at one minute significantly predicts the price change in the next minute (p=0.0003). This means if you see more buy orders than sell orders in the book right now, there's a statistically significant chance the price will tick up in the next minute.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [],
      ofi_series: {
        rows: [],
        window_options: [30, 60, 100]
      }
    },

    // INDEX DATA
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#179", sub: "of 2,608 stocks" },
        { title: "Free Float", value: "21.3%", sub: "of total shares" },
        { title: "Avg Daily Turnover", value: "HK$14.2M", sub: "Notional value" },
        { title: "Velocity", value: "0.13%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        {
          index: "Hang Seng Composite (HSCI)",
          status: "eligible",
          notes: "Meets rank & velocity criteria",
          gaps: []
        },
        {
          index: "Hang Seng Index (HSI)",
          status: "ineligible",
          notes: "Does not meet HSI gateway criteria",
          gaps: ["Need top ~80% market cap (currently 84.6% — gap of 4.6%)"]
        },
        {
          index: "Hang Seng TECH",
          status: "ineligible",
          notes: "Misses rank and sector requirements",
          gaps: ["Need Tech/Internet/Auto sector (currently Insurance)", "Need Rank ≤30 (currently #179 — gap of 149 positions)"]
        },
        {
          index: "FTSE Hong Kong 100",
          status: "ineligible",
          notes: "Fails rank requirement",
          gaps: ["Need Rank ≤100 (currently #179 — gap of 79 positions)"]
        }
      ],
      insight: "FWD is eligible for Hang Seng Composite (HSCI), which provides exposure to passive fund flows. The main path for broader index inclusion is the Hang Seng Index (HSI), which requires improving market cap ranking by about 4.6 percentage points (approximately HK$2.6B in market cap).",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Maintain trading velocity and turnover stability through market cycles",
        "Improve relative market cap ranking over time (need ~HK$2.6B increase)",
        "Keep consistent disclosure and KPI reporting to reduce volatility around announcements"
      ]
    }
  }
};

export default REPORT_DATA;
