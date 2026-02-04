// @ts-nocheck

// ============================================================================
// Oceanus (579) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// Source:
// - All key numeric fields are taken from the console output + JSON provided in
//   the user prompt (as-of 2026-01-30).
// - Narrative fields are written for CEO/CFO readability and are intentionally
//   plain-language and candid.
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector first, then same industry",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "5EV", name: "Hosen", marketCap: "S$21.4M", sector: "Food Distribution", industry: "Consumer Staples" },
    { ticker: "AAJ", name: "SunMoonFood", marketCap: "S$22.6M", sector: "Packaged Foods", industry: "Consumer Staples" },
    { ticker: "BAC", name: "Camsing Hc", marketCap: "S$3.9M", sector: "Household Products", industry: "Consumer Staples" },
    { ticker: "K03", name: "Khong Guan", marketCap: "S$24.4M", sector: "Packaged Foods", industry: "Consumer Staples" },
    { ticker: "5EG", name: "Zhongxin Fruit", marketCap: "S$38.0M", sector: "Agricultural Products", industry: "Consumer Staples" },
    { ticker: "Y03", name: "Yeo Hiap Seng", marketCap: "S$379.4M", sector: "Beverages", industry: "Consumer Staples" },
    { ticker: "MV4", name: "Mewah Intl", marketCap: "S$465.2M", sector: "Agricultural Products", industry: "Consumer Staples" },
    { ticker: "TSH", name: "TSH Resources", marketCap: "S$552.7M", sector: "Agricultural Products", industry: "Consumer Staples" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "579",
    company: "Oceanus",
    asof_date: "2026-01-30",
    industry: "Consumer Defensive",
    sector: "Food Distribution",
    market_cap_display: "77.3M",
    market_cap_category: "small",
    universe_total: 558,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  // ============================================================================
  // THEME & STYLING
  // ============================================================================
  theme: {
    badges: {
      header_health: {
        text: "Liquidity Health: BELOW AVG",
        bg: "bg-red-500/20",
        textColor: "text-red-300",
        dot: "bg-red-500"
      },
      liq_section: {
        text: "Liquidity score: 12.9% — BELOW AVG",
        bg: "bg-red-500/20",
        textColor: "text-red-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Mostly company-led", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "HIGH crossing cost", bg: "bg-red-500/20", textColor: "text-red-300" },
      intraday: { text: "HIGH concentration", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided flow", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "Short data available", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      index_status: { text: "Not eligible (major indices)", bg: "bg-slate-700/40", textColor: "text-slate-300" }
    },
    borders: {
      action_plan: "border-red-500",
      index: "border-slate-500"
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

    exec_title: "Executive Summary: What Matters for Trading",
    exec_subtitle: "Key metrics that explain your stock's trading experience",
    exec_takeaways_title: "Key Takeaways:",

    metric_liquidity_score: "Liquidity Score",
    metric_spread: "Trading Cost (Spread)",
    metric_adv: "Average Traded Volume",
    metric_drivers: "What Drives Price Changes",

    action_plan_title: "Action Plan (Prioritized)",
    action_plan_subtitle: "Practical actions to improve tradability over time",
    action_plan_icon: "",

    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar small-cap names in Singapore",

    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight:
      "Recent returns have lagged the market. Wide spreads and high volatility amplify investor friction when they need to trade.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or mostly company-specific factors?",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 89% of recent price moves are company-specific. Market contribution is ~3% and sector ~8%."
      },
      {
        title: "Market Link",
        text:
          "Market correlation is low (~0.08). Macro moves explain little of day-to-day changes."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is modest (~0.23). Sector conditions matter at the margin, but they are not the main driver."
      }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company-specific share means the stock moves on its own tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Lead-lag signals are weak in this sample.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share remains dominant across rolling windows.",
    drivers_bottom_line:
      "Bottom line: Oceanus behaves like a microstructure-driven small cap — execution outcomes are highly sensitive to spread and timing.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Prefer limit orders; market orders can be very expensive with wide spreads.",
      "Time trades around the most liquid windows (auctions / top buckets).",
      "Break orders into smaller clips; avoid forcing size into thin continuous trading."
    ],

    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Current: Medium Volatility Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Med Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note:
      "Spread is very wide (~28.6%). Depth exists, but crossing the spread is costly — execution should be careful and staged.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. For Oceanus, a S$50K clip is ~319% of ADV — difficult to execute without multi-day staging.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Price impact from mid to VWAP using latest order book snapshot (single-day). Results can vary materially day to day.",
    exec_check_insight:
      "Oceanus combines very wide spreads with high volatility. Even moderate orders can create outsized slippage, which limits institutional participation.",

    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional trading",
    trader_retail_threshold: "Retail: Trades under S$13,500",
    trader_mixed_threshold: "Mixed: Trades S$13,500 - S$67,500",
    trader_instit_threshold: "Institutional: Trades over S$67,500",

    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail concentration across similar small-cap names",

    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Trades that caused price changes (microstructure sensitivity)",

    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note:
      "For Oceanus, liquidity is time-dependent and concentrated in a few windows; auctions remain meaningful.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template:
      "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note:
      "Liquidity clusters in early buckets; plan larger trades around those peaks.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight:
      "Trading is highly concentrated (HHI ~0.47). Liquidity is mostly available in auctions and a few early buckets — execution outside peak windows is higher risk.",

    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does imbalance explain daily returns?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 signal availability" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note:
      "OFI measures buyer-initiated minus seller-initiated volume. Positive = more buying pressure.",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger moves — useful as a risk flag.",

    index_title: "Index Visibility & Eligibility",
    index_subtitle: "What prevents inclusion (and what must improve first)",

    // XSES-only
    short_title: "Short Selling & Lending",
    short_subtitle: "Short participation context and how it relates to returns",

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
          body:
            "A composite score (0-100) based on trading volume, number of trades, spread width, price impact, and volatility. Higher is better."
        },
        value: "12.9",
        suffix: "/100",
        bar_pct: 12.9,
        color_value: "text-red-300",
        color_bar: "text-red-300",
        subtext: "Rank 487/558 • Peer median: 34.5",
        interpretation: { text: "BELOW AVERAGE", cls: "interpretation-bad", icon: "!" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Wider spreads = higher trading costs."
        },
        value: "28.6",
        suffix: "%",
        bar_pct: 100,
        color_value: "text-red-300",
        color_bar: "text-red-300",
        subtext: "~2,857 basis points • Very wide",
        interpretation: { text: "POOR", cls: "interpretation-bad", icon: "×" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body:
            "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade larger amounts."
        },
        value: "15.7K",
        suffix: "SGD",
        bar_pct: 8,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 10.9K SGD • Above peers, but still small in absolute terms",
        interpretation: { text: "THIN", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "89.2",
        suffix: "% company",
        bar_pct: 89.2,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 3.3% • Sector: 7.5%",
        interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Oceanus ranks in the bottom decile for overall liquidity (12.9/100; 487/558). The biggest constraint is an exceptionally wide spread (~28.6%) and very high volatility (~19.6%).",
      "ADV is ~S$15.7K/day. A S$50K clip is ~319% of ADV, meaning meaningful orders require careful staging and timing.",
      "Price moves are mostly company-specific (~89%). This increases sensitivity to order flow, timing, and company events."
    ],

    action_plan: {
      borderClass: "border-red-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-red-500/20", text: "text-red-300", textColor: "text-red-300", dot: "bg-red-500" },
          items: [
            {
              title: "Reduce spread and improve two-way tradability",
              bullets: [
                "Increase consistent on-screen liquidity in continuous trading (not only in auctions).",
                "Reduce gaps between bid and ask to lower immediate trading cost and widen the investable audience."
              ]
            },
            {
              title: "Reduce price volatility around company announcements",
              bullets: [
                "Improve disclosure cadence and clarity to reduce surprise-driven moves.",
                "Aim for more predictable information flow so the market can price changes with less abrupt repricing."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Increase average traded value (ADV) and repeat participation",
              bullets: [
                "Broaden investor participation to increase steady turnover rather than episodic spikes.",
                "Encourage more trading outside a few concentrated time buckets."
              ]
            },
            {
              title: "Attract institutional investor participation",
              bullets: [
                "Improve tradability (spread/impact) to make larger ticket sizes realistic.",
                "Build consistency in trading conditions so investors can enter/exit with lower friction."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-slate-500/20", text: "text-slate-300", textColor: "text-slate-300", dot: "bg-slate-500" },
          items: [
            {
              title: "Establish monthly liquidity monitoring",
              bullets: [
                "Track spread, ADV, trade count, concentration (HHI), volatility, and investor mix versus peers.",
                "Use a small KPI dashboard to monitor progress and identify setbacks quickly."
              ]
            },
            {
              title: "Revisit index visibility once liquidity improves",
              bullets: [
                "Index eligibility is currently constrained by rank and velocity; treat it as an outcome, not a near-term lever.",
                "Focus first on more predictable turnover and lower trading friction."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      {
        title: "Daily Trades",
        value: "20.5",
        sub: "Many trades are small, which limits depth despite activity",
        interp: { text: "FRAGMENTED", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.02%",
        sub: "Very low turnover — shares change hands infrequently",
        interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "19.6%",
        sub: "Very high moves — execution risk is elevated",
        interp: { text: "HIGH", cls: "interpretation-bad", icon: "!" }
      }
    ],

    liq_insight:
      "Liquidity quality is weak. Even though ADV is above the peer and sector medians, spread and volatility dominate the trading experience and drive a poor liquidity rank.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.0035", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "28.6%", note: "Immediate trading cost", color: "text-red-300" },
      { title: "Depth", value: "Present", note: "Depth exists; crossing spread is costly — stage orders", color: "text-amber-300" }
    ],

    impact_summary_cards: [
      { title: "S$25K Sell", text: "Price impact: −14.3% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$500K Sell", text: "Price impact: −22.5% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$650K Sell", text: "Price impact: −33.9% • Fill: 93.1% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Weak relationship" },
      { cls: "bg-amber-500/20 text-amber-400", text: "Limited" }
    ],

    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // INSIGHTS - EXECUTIVE NARRATIVE (CEO/CFO-friendly)
  // ============================================================================
  insights: {
    liquidity: {
      overall:
        "Oceanus screens as a low-liquidity small-cap in Singapore. The composite liquidity score is 12.9/100 (rank 487 of 558). The main drivers are an exceptionally wide spread (~28.6%) and very high volatility (~19.6%).",
      strengths: [
        "ADV (~S$15.7K/day) is above the peer and sector medians — the name trades, but in small absolute size",
        "Daily trades (~20/day) are near the market median, indicating activity is present (but fragmented)"
      ],
      concerns: [
        "Spread is extremely wide (~28.6%), materially increasing crossing cost and slippage",
        "Volatility is very high (~19.6%), increasing execution risk and discouraging larger orders",
        "Turnover is very low (~0.02%), indicating limited natural liquidity and participation depth"
      ],
      peer_context:
        "Relative to peers, Oceanus has higher ADV but far worse spread and volatility. Improving liquidity quality likely requires tighter two-way trading conditions, not only more volume."
    },

    market_comparison: {
      adv: {
        insight: "Oceanus ADV is ~S$15.7K/day — above peer and sector medians but still small in absolute terms.",
        vs_market: "Below the market median (~S$47.3K), highlighting a meaningful liquidity gap versus the broader SGX universe.",
        vs_sector: "Above the sector median (~S$6.5K), but tradability is constrained by spread and volatility.",
        vs_peers: "Above peer median (~S$10.9K)."
      },
      spread: {
        insight: "Spread is the dominant constraint (~28.6%).",
        vs_market: "Much wider than market median (~2.5%).",
        vs_sector: "Much wider than sector median (~7.8%).",
        vs_peers: "Much wider than peer median (~4.4%)."
      },
      volatility: {
        insight: "Volatility is exceptionally high for peers/sector.",
        vs_market: "Much higher than market median (~2.2%).",
        vs_sector: "Much higher than sector median (~2.4%).",
        vs_peers: "Much higher than peer median (~1.9%)."
      },
      trades: {
        insight: "Trade count is relatively high for a small-cap (~20/day) but trades are very small.",
        vs_market: "Near the market median (~19/day), but quality is limited by spread/volatility.",
        vs_sector: "Above sector median (~4/day).",
        vs_peers: "Above peer median (~4/day)."
      }
    },

    performance: {
      overall:
        "Oceanus has underperformed the broader market over recent horizons. Liquidity does not explain performance, but wide spreads and high volatility amplify the trading friction and investor experience.",
      ytd: {
        stock: "0.0%",
        market: "+6.3%",
        sector: "-0.5%",
        peers: "+0.7%",
        insight:
          "YTD to 2026-01-30, Oceanus is flat while the market is up. This gap matters because investors compare opportunity cost."
      },
      three_month: {
        stock: "-20.0%",
        market: "+16.7%",
        sector: "~0.0%",
        peers: "+0.9%",
        insight:
          "Over 3 months, Oceanus is down ~20% while the market is up. This divergence reinforces that company-specific factors dominate."
      },
      six_month: {
        stock: "-20.0%",
        market: "+54.3%",
        sector: "-2.0%",
        peers: "-0.6%",
        insight:
          "Over 6 months, Oceanus is down ~20% while the market is up strongly. This is a material gap in relative performance."
      },
      conclusion:
        "Management should treat liquidity improvement and business performance as two parallel tracks: better liquidity reduces trading friction, but durable valuation requires investor confidence in fundamentals and narrative consistency."
    },

    drivers: {
      overall:
        "Oceanus price movements are overwhelmingly company-specific: ~89.2% idiosyncratic share. Sector contributes ~7.5% and the overall market ~3.3%.",
      interpretation:
        "High company-specific share means the tape is driven by Oceanus-specific information, trading conditions, and positioning rather than macro tailwinds.",
      rolling_change:
        "Across rolling windows, company-specific share remains dominant, and the market/sector shares vary but stay secondary.",
      beta:
        "Market beta is ~0.85 in the sample. Sector beta is very large (β≈25), which is common in thin small-cap regressions; treat betas as directional, not precise."
    },

    regime: {
      overall:
        "The regime model identifies three states: Low Vol (~17% of time), Medium Vol (~67%), and High Vol (~16%). Current regime is Medium Vol.",
      current:
        "Current regime: Medium Vol. Execution risk remains elevated given spread and thin depth.",
      transitions:
        "From Medium Vol, the model indicates a non-trivial chance of switching to High Vol. This reinforces the need to avoid forcing size into thin conditions.",
      trading_implications:
        "In higher-vol regimes, execution should be staged and time-aware; small changes in flow can move the price materially."
    },

    trader_composition: {
      overall:
        "Trading is overwhelmingly retail-driven (~99.4% by count in the last month), with effectively no institutional participation. This limits stable depth and makes larger orders disruptive.",
      retail_heavy:
        "Retail dominance implies many small trades (avg ~S$956; median ~S$73), which can raise noise and reduce depth consistency.",
      institutional_gap:
        "Near-zero institutional flow means less block liquidity and higher impact when larger orders appear.",
      peer_comparison:
        "Peers are also retail-heavy, but Oceanus remains at the extreme end of retail concentration."
    },

    price_moving: {
      overall:
        "About 9.4% of trades moved the price (446 of 4,729). This indicates a market where prints frequently change price levels, consistent with wide spreads and discrete ticks.",
      interpretation:
        "When spreads are wide, many trades move the price mechanically. This increases execution cost and makes outcomes timing-dependent.",
      asymmetry:
        "Positive price-moving trades are somewhat larger on average than negative movers, but overall the key issue is thin trading quality rather than direction."
    },

    short_selling: {
      overall:
        "Short participation is low on average (3M avg short ~0.8%) and was 0% in the most recent month. Shorting does not appear to explain returns in this sample.",
      level:
        "Average short ratios are low across 1M/3M/6M; episodic spikes occurred historically but are not persistent.",
      correlation:
        "Short% vs return correlation is ~0 (−0.01), indicating no reliable relationship here.",
      trend:
        "Short participation fell to 0% in 2026-01 (−100% vs prior month average).",
      peaks:
        "Peak short days are sporadic; treat them as context rather than a primary signal."
    },

    execution: {
      overall:
        "Execution conditions are challenging: spread is ~28.6% and a S$50K trade is ~319% of ADV. Depth is present but crossing the spread is costly. This limits institutional participation and increases investor friction.",
      concern:
        "Even moderate clip sizes can represent multiple days of natural notional volume; crossing the spread can dominate total cost.",
      peer_context:
        "Peer capacity metrics show that many similar small caps also struggle with large clips, but Oceanus is constrained by unusually wide spread and high volatility."
    },

    intraday: {
      overall:
        "Trading is highly concentrated (HHI ~0.47 over 6M). Liquidity is not evenly available throughout the day, which increases execution timing risk.",
      hhi_interpretation:
        "HHI above 0.25 indicates high concentration. Oceanus is well above that threshold — liquidity clusters in a few windows.",
      best_times:
        "The heaviest activity is in early buckets (08:30 and 09:00). Larger trades should target those windows when possible.",
      peer_ranking:
        "Oceanus is concentrated, but several peers are even more concentrated — this is a common small-cap pattern. The difference is Oceanus’ spread/volatility are unusually severe."
    },

    ofi: {
      overall:
        "Order flow is very one-sided (3M avg |OFI| ~77.7%). However, the relationship to same-day returns is weak (corr ~0.14).",
      daily_vs_intraday:
        "Daily OFI is more useful as a risk flag (one-sided tape) than as a reliable return predictor for Oceanus.",
      l2_signal:
        "L2 order-book OFI was computed from only 7 valid snapshots in the last 7 days, which is insufficient for robust inference (no Granger test). Treat L2 as limited.",
      day_breakdown:
        "Over ~3 months: ~42.6% net buying days and ~57.4% net selling days; almost no balanced days."
    },

    index: {
      overall:
        "Oceanus is not currently eligible for major indices primarily due to market-cap rank (#300) and low turnover/velocity (~0.04%).",
      hsci: "N/A for Singapore market (HSCI is Hong Kong-specific).",
      hsi_gap: "N/A (HSI is Hong Kong-specific).",
      tech_gap: "N/A (Hang Seng TECH is Hong Kong-specific).",
      recommendation:
        "Focus first on improving tradability (spread/impact) and predictable turnover. Index eligibility can be revisited once rank and velocity improve meaningfully."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA USED BY CHARTS
  // ============================================================================
  series: {
    peers_liquidity: {
      labels: ["579", "5EV", "AAJ", "BAC", "K03", "5EG", "Y03", "MV4", "TSH"],
      scores: [
        12.903225806451612,
        34.76702508960574,
        32.61648745519714,
        9.498207885304659,
        14.516129032258066,
        51.075268817204304,
        44.2652329749104,
        39.96415770609319,
        34.229390681003586
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [15666.015, 8163.125, 4892.35, 498.94, 141.75, 16607.545, 14439.9, 17784.575, 13683.625],
      total: 558
    },

    market_comparison: {
      sector_name: "Food Distribution",
      sector_count: 6,
      market_count: 558,
      company: {
        volatility: 0.19558977637847452,
        adv: 15666.015,
        spread_pct: 0.2857142857142857,
        turnover_ratio: 0.0001655221904542871,
        amihud: 3.798345282725554e-05,
        trades: 20.5
      },
      market: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.03677175318428749,
          median: 0.02180122208546431,
          min: 0.0,
          max: 0.5735393346764044,
          p5: 0.003829643111901724,
          p95: 0.11105126757996613,
          count: 558
        },
        adv: {
          direction: "higher_is_better",
          mean: 2838896.9851040817,
          median: 47331.287500000006,
          min: 0.0,
          max: 248734466.125,
          p5: 116.09075000000001,
          p95: 11233078.327499988,
          count: 558
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.08962986855941542,
          median: 0.02491123202662803,
          min: 0.00027705561584511667,
          max: 1.3004512749422004,
          p5: 0.003310555880223104,
          p95: 0.4534995231092726,
          count: 554
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.006467956195737241,
          median: 0.000955063642495161,
          min: 0.0,
          max: 1.25898095049766,
          p5: 8.677191360487493e-06,
          p95: 0.018437053747818902,
          count: 537
        },
        amihud: {
          direction: "lower_is_better",
          mean: 0.0030376437805295976,
          median: 1.0115424887811295e-06,
          min: 0.0,
          max: 0.5929869488617796,
          p5: 3.4600978610079273e-10,
          p95: 0.0012366420286004309,
          count: 548
        },
        trades: {
          direction: "higher_is_better",
          mean: 406.9058381582575,
          median: 18.55,
          min: 0.0,
          max: 9968.15,
          p5: 0.24250000000000008,
          p95: 2210.1949999999997,
          count: 558
        }
      },
      sector: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.0466631312510441,
          median: 0.0236125446183067,
          min: 0.0,
          max: 0.19558977637847452,
          p5: 0.001934657875283117,
          p95: 0.15404865488136693,
          count: 6
        },
        adv: {
          direction: "higher_is_better",
          mean: 474143.12166666664,
          median: 6527.7375,
          min: 141.75,
          max: 2815496.55,
          p5: 231.04749999999999,
          p95: 2115538.91625,
          count: 6
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.1574428431695502,
          median: 0.07752010885616709,
          min: 0.0055208620227818255,
          max: 0.4461268311247979,
          p5: 0.017204362127861778,
          p95: 0.4060236947721698,
          count: 6
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0005179476730908327,
          median: 0.0005956775462092163,
          min: 3.136067705611052e-05,
          max: 0.0008759098194897482,
          p5: 6.490105540565467e-05,
          p95: 0.0008678169293989157,
          count: 6
        },
        amihud: {
          direction: "lower_is_better",
          mean: 9.662658987794532e-06,
          median: 4.168803342173848e-06,
          min: 0.0,
          max: 3.798345282725554e-05,
          p5: 5.709760340989328e-10,
          p95: 3.140074224819855e-05,
          count: 6
        },
        trades: {
          direction: "higher_is_better",
          mean: 166.61666666666665,
          median: 3.775,
          min: 0.1,
          max: 971.25,
          p5: 0.15,
          p95: 733.5625,
          count: 6
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 9526.47625,
          median: 10923.375,
          min: 141.75,
          max: 17784.575,
          p5: 266.7665,
          p95: 17372.6145,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 4.9625,
          median: 3.825,
          min: 0.1,
          max: 14.4,
          p5: 0.17,
          p95: 12.142499999999997,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.017012488443022222,
          median: 0.01884300489084597,
          min: 0.0,
          max: 0.029425290390044195,
          p5: 0.00192048089546094,
          p95: 0.028463125597098096,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.09477404270093452,
          median: 0.043750444480543674,
          min: 0.011004329955178154,
          max: 0.4461268311247979,
          p5: 0.015583590445073216,
          p95: 0.32497781993802827,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0007072128744934141,
          median: 0.0003044254855983155,
          min: 3.136067705611052e-05,
          max: 0.0033280762484061473,
          p5: 3.3505391650152426e-05,
          p95: 0.002458487952158241,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 1.387289178671081e-05,
          median: 4.168803342173848e-06,
          min: 0.0,
          max: 6.835491164372246e-05,
          p5: 2.04115361266747e-07,
          p95: 5.121078486462122e-05,
          count: 8
        }
      }
    },

    returns: [
      { horizon: "1M", stock: 0.0, market: 0.06302207986016062, sector: -0.0052631578947368585, peers: 0.006663292847503222 },
      { horizon: "3M", stock: -0.19999999999999996, market: 0.16677365739434324, sector: -0.000048806226091602234, peers: 0.009047608183447409 },
      { horizon: "6M", stock: -0.19999999999999996, market: 0.5426412654874044, sector: -0.019660640558429865, peers: -0.006334176165658345 },
      { horizon: "YTD", stock: 0.0, market: 0.06302207986016062, sector: -0.0052631578947368585, peers: 0.006663292847503222 }
    ],

    drivers: {
      // Stored as percentages (0-100) for the UI pie
      share_market: 3.274265634893882,
      share_sector: 7.513042253226332,
      share_idio: 89.21269211187979,
      beta_market: 0.8517557506570085,
      beta_sector: 25.19706642629632,
      r_squared: 0.0512693192883138,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.11573869610615915,
          0.0774474053332138,
          -0.033563941495773325,
          -0.09622872478928515,
          0.010841817337813326,
          0.07757231308113641,
          -0.08786668642760102,
          -0.011339989776758288,
          0.08780614359614837,
          -0.0384706152590902,
          0.02082525202090443
        ],
        corr_sector: [
          -0.000004296928943697232,
          -0.14205985964357012,
          0.15172037153864545,
          -0.000009221818560337797,
          -0.04557284333253085,
          0.2251521553140783,
          -0.21312215813006832,
          0.09236373308502593,
          -0.000012762818302617569,
          -0.000008997324137172381,
          -0.04977692949714441
        ],
        best: { market: -5, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-01-17 to 2025-03-21",
          shares: { share_market: 0.024117600485274043, share_sector: 0.27751485484403227, share_idio: 0.6983675446706936 },
          regression: { r_squared: 0.31698945717544813 }
        },
        p2: {
          valid: true,
          period_label: "2025-03-21 to 2025-05-23",
          shares: { share_market: 0.07889955808478065, share_sector: 0.0578013534195289, share_idio: 0.8632990884956906 },
          regression: { r_squared: 0.04054309770716924 }
        },
        p3: {
          valid: true,
          period_label: "2025-05-23 to 2025-07-25",
          shares: { share_market: 0.021669712123236037, share_sector: 0.06965173698780472, share_idio: 0.9086785508889592 },
          regression: { r_squared: 0.06534651739571551 }
        },
        p4: {
          valid: true,
          period_label: "2025-07-25 to 2025-09-26",
          shares: { share_market: 0.2229083595806845, share_sector: 0.09435222484177197, share_idio: 0.6827394155775435 },
          regression: { r_squared: 0.1452016448367287 }
        },
        p5: {
          valid: true,
          period_label: "2025-09-26 to 2025-11-28",
          shares: { share_market: 0.07246892131977771, share_sector: 0.20135279560352834, share_idio: 0.7261782830766941 },
          regression: { r_squared: 0.2019291585170756 }
        },
        p6: {
          valid: true,
          period_label: "2025-11-28 to 2026-01-30",
          shares: { share_market: 0.03274265634893882, share_sector: 0.07513042253226332, share_idio: 0.8921269211187979 },
          regression: { r_squared: 0.0512693192883138 }
        }
      },
      // Legacy fallback (not used when rolling_windows exists)
      rolling: {
        ordered: [
          "2025-01-17 to 2025-03-21",
          "2025-03-21 to 2025-05-23",
          "2025-05-23 to 2025-07-25",
          "2025-07-25 to 2025-09-26",
          "2025-09-26 to 2025-11-28",
          "2025-11-28 to 2026-01-30"
        ],
        market: [2.4, 7.9, 2.2, 22.3, 7.2, 3.3],
        sector: [27.8, 5.8, 7.0, 9.4, 20.1, 7.5],
        idio: [69.8, 86.3, 90.9, 68.3, 72.6, 89.2]
      },
      // UI expects % units for mean_ret/volatility and pct_time, and transitions as %.
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "Medium Vol", "High Vol"],
        pct_time: [16.666666666666664, 67.46031746031746, 15.873015873015872],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 25.75676134471392, volatility: 5.78440227247257, n_days: 21, pct_time: 16.666666666666664 },
          { id: 1, label: "Medium Vol", mean_ret: -2.2865146669248486, volatility: 7.348469228349533, n_days: 85, pct_time: 67.46031746031746 },
          { id: 2, label: "High Vol", mean_ret: -11.14639319876486, volatility: 11.06138177022503, n_days: 20, pct_time: 15.873015873015872 }
        ],
        transitions: [
          [4.762608260373141, 95.23739173962439, 0.0],
          [0.0, 77.72735251485476, 22.272647485145236],
          [94.59056191689889, 0.0, 5.4094380831011145]
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.003, quantity: 131509000.0, value: 394527.0 },
        { level: 2, price: 0.002, quantity: 80453000.0, value: 160906.0 },
        { level: 3, price: 0.001, quantity: 49751000.0, value: 49751.0 }
      ],
      asks: [
        { level: 1, price: 0.004, quantity: 259788500.0, value: 1039154.0 },
        { level: 2, price: 0.005, quantity: 86680800.0, value: 433404.0 },
        { level: 3, price: 0.006, quantity: 56384700.0, value: 338308.2 },
        { level: 4, price: 0.007, quantity: 54998500.0, value: 384989.5 },
        { level: 5, price: 0.008, quantity: 12210000.0, value: 97680.0 },
        { level: 6, price: 0.009, quantity: 1700000.0, value: 15300.0 },
        { level: 7, price: 0.01, quantity: 9120000.0, value: 91200.0 },
        { level: 8, price: 0.011, quantity: 1200000.0, value: 13200.0 },
        { level: 9, price: 0.012, quantity: 2015000.0, value: 24180.0 },
        { level: 10, price: 0.013, quantity: 500000.0, value: 6500.0 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 319.2,
      peers: [
        { ticker: "MV4", pct: 2811.4 },
        { ticker: "5EG", pct: 3010.7 },
        { ticker: "Y03", pct: 3462.6 },
        { ticker: "TSH", pct: 3654.0 },
        { ticker: "5EV", pct: 6125.1 },
        { ticker: "AAJ", pct: 10220.0 },
        { ticker: "BAC", pct: 100212.5 },
        { ticker: "K03", pct: 352733.7 }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 538,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: { retail_pct: 0.9944237918215614, mixed_pct: 0.0055762081784386614, instit_pct: 0.0 },
      trade_size: { avg: 956.1806691449814, median: 73.0 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 474, retail_pct: 0.9936708860759493, mixed_pct: 0.006329113924050633, instit_pct: 0.0, avg_trade_size: 1065.6042194092827 },
          { month: "2025-12", n_trades: 1129, retail_pct: 0.9946855624446412, mixed_pct: 0.005314437555358724, instit_pct: 0.0, avg_trade_size: 733.8335695305581 },
          { month: "2025-11", n_trades: 1023, retail_pct: 0.9902248289345064, mixed_pct: 0.008797653958944282, instit_pct: 0.0009775171065493646, avg_trade_size: 925.74477028348 },
          { month: "2025-10", n_trades: 647, retail_pct: 0.9845440494590417, mixed_pct: 0.015455950540958269, instit_pct: 0.0, avg_trade_size: 2114.421174652241 },
          { month: "2025-09", n_trades: 659, retail_pct: 0.9954476479514416, mixed_pct: 0.004552352048558422, instit_pct: 0.0, avg_trade_size: 821.5623672230652 },
          { month: "2025-08", n_trades: 798, retail_pct: 0.9862155388471178, mixed_pct: 0.013784461152882205, instit_pct: 0.0, avg_trade_size: 825.6611528822057 }
        ]
      },
      peer_comparison: [
        { ticker: "579", currency: "SGD", is_target: true, retail_pct: 0.9944237918215614, mixed_pct: 0.0055762081784386614, instit_pct: 0.0, avg_trade_size: 956.1806691449814, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5EG", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 967.9389873417722, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "AAJ", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 737.3227848101266, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "BAC", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 1620.05, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "K03", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 1417.5, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "Y03", currency: "SGD", is_target: false, retail_pct: 0.9918032786885246, mixed_pct: 0.00819672131147541, instit_pct: 0.0, avg_trade_size: 2286.311475409836, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5EV", currency: "SGD", is_target: false, retail_pct: 0.9878048780487805, mixed_pct: 0.012195121951219513, instit_pct: 0.0, avg_trade_size: 2101.1560975609764, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "MV4", currency: "SGD", is_target: false, retail_pct: 0.974025974025974, mixed_pct: 0.025974025974025976, instit_pct: 0.0, avg_trade_size: 2020.9383116883116, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "TSH", currency: "SGD", is_target: false, retail_pct: 0.9104477611940298, mixed_pct: 0.08955223880597014, instit_pct: 0.0, avg_trade_size: 3895.791044776119, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },

    price_moving_trades: {
      total_trades: 4729,
      price_moving_trades: 446,
      pct_price_moving: 9.431169380418693,
      all_movers: { count: 446, avg_size: 834.8834080717489, median_size: 60.0 },
      positive_movers: { count: 222, avg_size: 995.0288288288288, median_size: 100.0 },
      negative_movers: { count: 224, avg_size: 676.1678571428572, median_size: 36.55 }
    },

    short_selling: {
      data_available: true,
      security_name: "Oceanus",
      mapping: { ticker_to_security: "Oceanus", confidence: "high" },
      coverage: { n_days_short_data: 100, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.0, max_short_ratio: 0.0, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.007755595548409005, max_short_ratio: 0.25283171521035597, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.008834123444432202, max_short_ratio: 0.32876352039977647, interpretation: "Low short interest" } }
      },
      correlation: { valid: true, correlation: -0.011243850699874984, interpretation: "No clear relationship" },
      peaks: [
        { date: "2025-09-25", short_ratio: 0.32876352039977647, return_pct: 19.999999999999996 },
        { date: "2025-12-11", short_ratio: 0.25283171521035597, return_pct: 0.0 },
        { date: "2025-11-20", short_ratio: 0.2390628735357399, return_pct: 0.0 },
        { date: "2025-09-24", short_ratio: 0.17058733218471198, return_pct: 0.0 },
        { date: "2025-02-12", short_ratio: 0.16651556361438502, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0.0 },
          { month: "2025-12", avg_short_ratio: 0.011492350691379816 },
          { month: "2025-11", avg_short_ratio: 0.013727439104072819 },
          { month: "2025-10", avg_short_ratio: 0.006736684919690095 },
          { month: "2025-09", avg_short_ratio: 0.022697766026567655 },
          { month: "2025-08", avg_short_ratio: 0.0 },
          { month: "2025-07", avg_short_ratio: 0.0 },
          { month: "2025-06", avg_short_ratio: 0.00005124163098633571 },
          { month: "2025-05", avg_short_ratio: 0.0029988457396429354 },
          { month: "2025-04", avg_short_ratio: 0.00000003824552772097042 },
          { month: "2025-03", avg_short_ratio: 0.0 },
          { month: "2025-02", avg_short_ratio: 0.008339316740711759 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.011492350691379816, change_pct: null },
          { month: "2025-11", avg_short_ratio: 0.013727439104072819, change_pct: 19.448487717743404 },
          { month: "2025-10", avg_short_ratio: 0.006736684919690095, change_pct: -50.925406635449036 },
          { month: "2025-09", avg_short_ratio: 0.022697766026567655, change_pct: 236.92782573556687 },
          { month: "2025-08", avg_short_ratio: 0.0, change_pct: -100.0 },
          { month: "2025-07", avg_short_ratio: 0.0, change_pct: null },
          { month: "2025-06", avg_short_ratio: 0.00005124163098633571, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0.0029988457396429354, change_pct: 5752.361999255291 },
          { month: "2025-04", avg_short_ratio: 0.00000003824552772097042, change_pct: -99.99872465838388 },
          { month: "2025-03", avg_short_ratio: 0.0, change_pct: -100.0 },
          { month: "2025-02", avg_short_ratio: 0.008339316740711759, change_pct: null }
        ],
        interpretation: "Shorts covering significantly (-100% MoM) | YoY: -100% ⬇️"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0.0, short_vol: 0, total_vol: 6320400, return: 0.0 },
          { date: "2026-01-29", short_ratio: 0.0, short_vol: 0, total_vol: 5500000, return: 0.0 },
          { date: "2026-01-28", short_ratio: 0.0, short_vol: 0, total_vol: 261100, return: 0.33333333333333326 },
          { date: "2026-01-27", short_ratio: 0.0, short_vol: 0, total_vol: 1010300, return: 0.0 },
          { date: "2026-01-26", short_ratio: 0.0, short_vol: 0, total_vol: 1747600, return: 0.0 },
          { date: "2026-01-23", short_ratio: 0.0, short_vol: 0, total_vol: 1000300, return: 0.0 },
          { date: "2026-01-22", short_ratio: 0.0, short_vol: 0, total_vol: 1155200, return: -0.25 },
          { date: "2026-01-21", short_ratio: 0.0, short_vol: 0, total_vol: 1401900, return: 0.33333333333333326 },
          { date: "2026-01-20", short_ratio: 0.0, short_vol: 0, total_vol: 446600, return: -0.25 },
          { date: "2026-01-19", short_ratio: 0.0, short_vol: 0, total_vol: 4534600, return: 0.0 },
          { date: "2026-01-16", short_ratio: 0.0, short_vol: 0, total_vol: 2700800, return: 0.33333333333333326 },
          { date: "2026-01-15", short_ratio: 0.0, short_vol: 0, total_vol: 670700, return: 0.0 },
          { date: "2026-01-14", short_ratio: 0.0, short_vol: 0, total_vol: 5551100, return: 0.0 },
          { date: "2026-01-13", short_ratio: 0.0, short_vol: 0, total_vol: 5245100, return: -0.25 },
          { date: "2026-01-12", short_ratio: 0.0, short_vol: 0, total_vol: 11560300, return: 0.33333333333333326 },
          { date: "2026-01-09", short_ratio: 0.0, short_vol: 0, total_vol: 2741600, return: -0.25 },
          { date: "2026-01-08", short_ratio: 0.0, short_vol: 0, total_vol: 4535000, return: 0.0 },
          { date: "2026-01-07", short_ratio: 0.0, short_vol: 0, total_vol: 6147600, return: 0.0 },
          { date: "2026-01-06", short_ratio: 0.0, short_vol: 0, total_vol: 13979400, return: 0.0 },
          { date: "2026-01-05", short_ratio: 0.0, short_vol: 0, total_vol: 6712600, return: 0.0 },
          { date: "2026-01-02", short_ratio: 0.0, short_vol: 0, total_vol: 56196900, return: 0.0 },
          { date: "2025-12-31", short_ratio: 0.0, short_vol: 0, total_vol: 2644700, return: 0.0 },
          { date: "2025-12-30", short_ratio: 0.0, short_vol: 0, total_vol: 2725000, return: 0.0 },
          { date: "2025-12-29", short_ratio: 0.0, short_vol: 0, total_vol: 9141000, return: 0.0 },
          { date: "2025-12-26", short_ratio: 0.0, short_vol: 0, total_vol: 14712000, return: 0.33333333333333326 },
          { date: "2025-12-24", short_ratio: 0.0, short_vol: 0, total_vol: 6902400, return: -0.25 },
          { date: "2025-12-23", short_ratio: 0.0, short_vol: 0, total_vol: 4539200, return: 0.0 },
          { date: "2025-12-22", short_ratio: 0.0, short_vol: 0, total_vol: 62786200, return: -0.19999999999999996 },
          { date: "2025-12-19", short_ratio: 0.0, short_vol: 0, total_vol: 330000, return: 0.0 },
          { date: "2025-12-18", short_ratio: 0.0, short_vol: 0, total_vol: 1290100, return: 0.0 },
          { date: "2025-12-17", short_ratio: 0.0, short_vol: 0, total_vol: 11907900, return: 0.25 },
          { date: "2025-12-16", short_ratio: 0.0, short_vol: 0, total_vol: 3538200, return: 0.0 },
          { date: "2025-12-15", short_ratio: 0.0, short_vol: 0, total_vol: 1736500, return: 0.0 },
          { date: "2025-12-12", short_ratio: 0.0, short_vol: 0, total_vol: 5055100, return: 0.0 },
          { date: "2025-12-11", short_ratio: 0.25283171521035597, short_vol: 1000000, total_vol: 3955200, return: 0.0 },
          { date: "2025-12-10", short_ratio: 0.0, short_vol: 0, total_vol: 6582400, return: 0.0 },
          { date: "2025-12-09", short_ratio: 0.0, short_vol: 0, total_vol: 6366900, return: -0.19999999999999996 },
          { date: "2025-12-08", short_ratio: 0.0, short_vol: 0, total_vol: 19271200, return: 0.25 },
          { date: "2025-12-05", short_ratio: 0.0, short_vol: 0, total_vol: 325300, return: 0.33333333333333326 },
          { date: "2025-12-04", short_ratio: 0.0, short_vol: 0, total_vol: 1012900, return: -0.25 },
          { date: "2025-12-03", short_ratio: 0.0, short_vol: 0, total_vol: 3500200, return: 0.0 },
          { date: "2025-12-02", short_ratio: 0.0, short_vol: 0, total_vol: 14190600, return: 0.33333333333333326 },
          { date: "2025-12-01", short_ratio: 0.0, short_vol: 0, total_vol: 21689500, return: -0.25 },
          { date: "2025-11-28", short_ratio: 0.0, short_vol: 0, total_vol: 160186100, return: 0.0 },
          { date: "2025-11-27", short_ratio: 0.0, short_vol: 0, total_vol: 11224100, return: 0.0 },
          { date: "2025-11-26", short_ratio: 0.0, short_vol: 0, total_vol: 10672800, return: 0.0 },
          { date: "2025-11-25", short_ratio: 0.0, short_vol: 0, total_vol: 11589200, return: -0.19999999999999996 },
          { date: "2025-11-24", short_ratio: 0.0, short_vol: 0, total_vol: 63500, return: 0.0 },
          { date: "2025-11-21", short_ratio: 0.0, short_vol: 0, total_vol: 5021800, return: 0.0 },
          { date: "2025-11-20", short_ratio: 0.2390628735357399, short_vol: 500000, total_vol: 2091500, return: 0.0 },
          { date: "2025-11-19", short_ratio: 0.0, short_vol: 0, total_vol: 1578200, return: 0.25 },
          { date: "2025-11-18", short_ratio: 0.0, short_vol: 0, total_vol: 4658300, return: -0.19999999999999996 },
          { date: "2025-11-17", short_ratio: 0.035485908545716496, short_vol: 500000, total_vol: 14090100, return: 0.0 },
          { date: "2025-11-14", short_ratio: 0.0, short_vol: 0, total_vol: 1556200, return: 0.0 },
          { date: "2025-11-13", short_ratio: 0.0, short_vol: 0, total_vol: 100, return: 0.0 },
          { date: "2025-11-12", short_ratio: 0.0, short_vol: 0, total_vol: 371200, return: 0.0 },
          { date: "2025-11-11", short_ratio: 0.0, short_vol: 0, total_vol: 800000, return: 0.0 },
          { date: "2025-11-10", short_ratio: 0.0, short_vol: 0, total_vol: 1335600, return: 0.0 },
          { date: "2025-11-07", short_ratio: 0.0, short_vol: 0, total_vol: 571100, return: 0.0 },
          { date: "2025-11-06", short_ratio: 0.0, short_vol: 0, total_vol: 700800, return: 0.25 },
          { date: "2025-11-05", short_ratio: 0.0, short_vol: 0, total_vol: 1612100, return: 0.0 },
          { date: "2025-11-04", short_ratio: 0.0, short_vol: 0, total_vol: 521900, return: -0.19999999999999996 },
          { date: "2025-11-03", short_ratio: 0.0, short_vol: 0, total_vol: 881000, return: 0.0 },
          { date: "2025-10-31", short_ratio: 0.0, short_vol: 0, total_vol: 2102100, return: 0.0 },
          { date: "2025-10-30", short_ratio: 0.0, short_vol: 0, total_vol: 1200100, return: 0.0 },
          { date: "2025-10-29", short_ratio: 0.0, short_vol: 0, total_vol: 815000, return: 0.0 },
          { date: "2025-10-28", short_ratio: 0.0, short_vol: 0, total_vol: 163700, return: 0.0 },
          { date: "2025-10-27", short_ratio: 0.0, short_vol: 0, total_vol: 1726400, return: 0.0 },
          { date: "2025-10-24", short_ratio: 0.0, short_vol: 0, total_vol: 6702400, return: 0.0 },
          { date: "2025-10-23", short_ratio: 0.08556104801781238, short_vol: 611000, total_vol: 7141100, return: 0.0 },
          { date: "2025-10-22", short_ratio: 0.0, short_vol: 0, total_vol: 790000, return: 0.25 },
          { date: "2025-10-21", short_ratio: 0.0, short_vol: 0, total_vol: 3002800, return: -0.19999999999999996 },
          { date: "2025-10-17", short_ratio: 0.0, short_vol: 0, total_vol: 6511200, return: 0.0 },
          { date: "2025-10-16", short_ratio: 0.0, short_vol: 0, total_vol: 42609200, return: 0.0 },
          { date: "2025-10-15", short_ratio: 0.0, short_vol: 0, total_vol: 3005000, return: 0.0 },
          { date: "2025-10-14", short_ratio: 0.0, short_vol: 0, total_vol: 19658400, return: 0.0 },
          { date: "2025-10-13", short_ratio: 0.03027486550391, short_vol: 1000000, total_vol: 33030700, return: -0.16666666666666663 },
          { date: "2025-10-10", short_ratio: 0.0, short_vol: 0, total_vol: 10281300, return: 0.0 },
          { date: "2025-10-09", short_ratio: 0.0, short_vol: 0, total_vol: 5790100, return: 0.0 },
          { date: "2025-10-08", short_ratio: 0.0, short_vol: 0, total_vol: 2090800, return: 0.0 },
          { date: "2025-10-07", short_ratio: 0.0, short_vol: 0, total_vol: 70614200, return: 0.19999999999999996 },
          { date: "2025-10-06", short_ratio: 0.03237115471145971, short_vol: 1000000, total_vol: 30891700, return: 0.0 },
          { date: "2025-10-03", short_ratio: 0.0, short_vol: 0, total_vol: 8907700, return: 0.0 },
          { date: "2025-10-02", short_ratio: 0.0, short_vol: 0, total_vol: 15531500, return: 0.0 },
          { date: "2025-10-01", short_ratio: 0.0, short_vol: 0, total_vol: 388100, return: 0.0 },
          { date: "2025-09-30", short_ratio: 0.0, short_vol: 0, total_vol: 3770000, return: -0.16666666666666663 },
          { date: "2025-09-29", short_ratio: 0.0, short_vol: 0, total_vol: 16380600, return: 0.0 },
          { date: "2025-09-26", short_ratio: 0.0, short_vol: 0, total_vol: 7637400, return: 0.0 },
          { date: "2025-09-25", short_ratio: 0.32876352039977647, short_vol: 1000000, total_vol: 3041700, return: 0.19999999999999996 },
          { date: "2025-09-24", short_ratio: 0.17058733218471198, short_vol: 1000000, total_vol: 5862100, return: 0.0 },
          { date: "2025-09-23", short_ratio: 0.0, short_vol: 0, total_vol: 4089600, return: -0.16666666666666663 },
          { date: "2025-09-22", short_ratio: 0.0, short_vol: 0, total_vol: 76900, return: 0.0 },
          { date: "2025-09-19", short_ratio: 0.0, short_vol: 0, total_vol: 1740100, return: 0.19999999999999996 },
          { date: "2025-09-18", short_ratio: 0.0, short_vol: 0, total_vol: 31640000, return: 0.0 },
          { date: "2025-09-17", short_ratio: 0.0, short_vol: 0, total_vol: 1300500, return: -0.16666666666666663 },
          { date: "2025-09-16", short_ratio: 0.0, short_vol: 0, total_vol: 681900, return: 0.19999999999999996 },
          { date: "2025-09-15", short_ratio: 0.0, short_vol: 0, total_vol: 1281900, return: 0.0 },
          { date: "2025-09-12", short_ratio: 0.0, short_vol: 0, total_vol: 2907800, return: -0.16666666666666663 },
          { date: "2025-09-11", short_ratio: 0.0, short_vol: 0, total_vol: 216600, return: 0.0 },
          { date: "2025-09-10", short_ratio: 0.0, short_vol: 0, total_vol: 2002100, return: 0.0 }
        ]
      },
      peer_comparison: [
        { ticker: "579", avg_short_ratio: 0.007755595548409005, max_short_ratio: 0.25283171521035597, is_target: true },
        { ticker: "AAJ", avg_short_ratio: 0.00020796149673755064, max_short_ratio: 0.02969848611967005, is_target: false },
        { ticker: "5EG", avg_short_ratio: 0.0002528164023844869, max_short_ratio: 0.03628917286606703, is_target: false },
        { ticker: "TSH", avg_short_ratio: 0.00048758017561977495, max_short_ratio: 0.15753424657534246, is_target: false },
        { ticker: "MV4", avg_short_ratio: 0.005890361658284463, max_short_ratio: 1.0, is_target: false }
      ]
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.13502089252255575, continuous: 0.8076947496805787, closing: 0.014200805115655583, auctions: 0.19230525031942125, other: 0.0 },
        "3M": { opening: 0.07866606674633252, continuous: 0.8928201902080874, closing: 0.007371817982983112, auctions: 0.10717980979191248, other: 0.0 },
        "6M": { opening: 0.09267473903903782, continuous: 0.8509302954467226, closing: 0.024110901087663728, auctions: 0.14906970455327742, other: 0.0 }
      },
      hhi: { "1M": 0.40025420015695007, "3M": 0.49118888410457373, "6M": 0.46516960952898645 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.1856 },
        { time: "09:00", avg_share: 0.2652 },
        { time: "09:30", avg_share: 0.094 },
        { time: "10:00", avg_share: 0.0637 },
        { time: "10:30", avg_share: 0.0383 },
        { time: "11:00", avg_share: 0.0498 },
        { time: "11:30", avg_share: 0.0597 },
        { time: "12:00", avg_share: 0.004 },
        { time: "12:30", avg_share: 0.0343 },
        { time: "13:00", avg_share: 0.0611 },
        { time: "13:30", avg_share: 0.0204 },
        { time: "14:00", avg_share: 0.0452 },
        { time: "14:30", avg_share: 0.0077 },
        { time: "15:00", avg_share: 0.0117 },
        { time: "15:30", avg_share: 0.0046 },
        { time: "16:00", avg_share: 0.0207 },
        { time: "16:30", avg_share: 0.0079 },
        { time: "17:00", avg_share: 0.026 }
      ],
      peers_hhi_rows: [
        { ticker: "579", auctions_pct: 18.039843753704723, hhi: 0.44934568515925527, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400", you: true } },
        { ticker: "5EG", auctions_pct: 5.570946555265991, hhi: 0.43360780450129427, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "Y03", auctions_pct: 4.200202423023586, hhi: 0.6342741610623397, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "AAJ", auctions_pct: 5.257342130263716, hhi: 0.6496413336838986, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "MV4", auctions_pct: 4.279034630507312, hhi: 0.729783610506878, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "5EV", auctions_pct: 3.279789717894435, hhi: 0.7338418245388173, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "K03", auctions_pct: 0.7871077786859032, hhi: 0.7928326800941522, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "TSH", auctions_pct: 1.2946977033471325, hhi: 0.8193753141275154, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BAC", auctions_pct: 0.060039927738505944, hhi: 0.8404520868583559, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "77.7%", note_suffix: " - 3-month average absolute OFI (how one-sided trading is)." },
        { value: "0.14", note_suffix: " - Correlation between daily OFI and same-day returns (weak)." },
        { value: "Limited", note_suffix: " - Only 7 valid L2 snapshots in last 7 days (insufficient for Granger)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "-7.7%", avg_abs: "69.9%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "-14.9%", avg_abs: "77.7%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "-1.1%", avg_abs: "74.0%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.137",
      pie: { net_buy_days: 42.6, net_sell_days: 57.4, balanced_days: 0.0 },
      l2_compact_text:
        "Computed L2 order-book imbalance on the last 7 days, but only 7 valid snapshots remained after filtering. This is not enough to run a robust Granger test; treat L2 OFI as limited in this report.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-09-12", ofi: "-100%", direction: "SELL pressure", return: "-16.7%" },
        { date: "2025-09-16", ofi: "-100%", direction: "SELL pressure", return: "+20.0%" },
        { date: "2025-10-22", ofi: "+100%", direction: "BUY pressure", return: "+25.0%" },
        { date: "2024-10-21", ofi: "-100%", direction: "SELL pressure", return: "-12.5%" },
        { date: "2025-05-20", ofi: "+100%", direction: "BUY pressure", return: "+20.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#300", sub: "of 562 stocks" },
        { title: "Free Float", value: "97.6%", sub: "Float mcap ~ S$75.4M" },
        { title: "Avg Daily Turnover", value: "S$56.9K", sub: "Notional" },
        { title: "Velocity", value: "0.043%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #300 - outside top 30", gaps: ["Need rank ≤30 (currently #300)", "Need velocity ≥0.1% (currently 0.04%)"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Below top 98% coverage (Fledgling)", gaps: ["Need top 98% mcap (currently 99.6%)", "Need velocity ≥0.05% (currently 0.043%)"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #300 - below top 80", gaps: ["Need rank ≤80 (currently #300)"] }
      ],
      insight:
        "Oceanus is not eligible for major indices primarily due to size rank (#300) and low turnover/velocity (~0.043%). Index inclusion is unlikely to provide liquidity support until tradability improves.",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Increase predictable turnover by improving spread and execution quality",
        "Improve investor visibility and confidence through consistent communications",
        "Broaden the shareholder base over time to stabilize trading"
      ]
    }
  }
};

export default REPORT_DATA;

