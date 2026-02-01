// ============================================================================
// Oceanus (579.SI) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-20
//
// Notes (executive-friendly):
// - This file is intentionally "report-shaped": it matches the same `ReportData`
//   structure as the existing `xhkg_1828_2026-01-22.ts` report.
// - Most raw numbers come from the exported JSON in the user prompt; narrative
//   fields are written for CEO/CFO/exec readability, similar tone to 1828.
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
    "If many remain, choose the closest by ADV (liquidity)"
  ],
  peers: [
    { ticker: "AAJ", name: "SunMoonFood", marketCap: "S$22.6M" },
    { ticker: "5EV", name: "Hosen", marketCap: "S$21.4M" },
    { ticker: "K03", name: "Khong Guan", marketCap: "S$24.4M" },
    { ticker: "BAC", name: "Camsing Hc", marketCap: "S$3.9M" },
    { ticker: "BEW", name: "JB Foods", marketCap: "S$235.6M" },
    { ticker: "5EG", name: "Zhongxin Fruit", marketCap: "S$38.0M" },
    { ticker: "LGH", name: "Leong Guan Hldgs", marketCap: "S$23.3M" },
    { ticker: "5JS", name: "Indofood Agri", marketCap: "S$516.5M" }
  ]
};

// ============================================================================
// TECHNICAL TERMS GLOSSARY (for help tooltips)
// ============================================================================
export const GLOSSARY = {
  ofi: {
    term: "Order Flow Imbalance (OFI)",
    explanation:
      "Measures whether buyers or sellers are more active. Positive OFI means more buying pressure, negative means more selling pressure. The absolute value (|OFI|) shows how one-sided the trading is, regardless of direction.",
    plainLanguage: "Think of it as a scale: which side is heavier - buyers or sellers?"
  },
  adv: {
    term: "Average Daily Volume (ADV)",
    explanation:
      "The average notional value traded per day over the last 20 trading days. Higher ADV means more liquidity and easier to trade large amounts without moving the price.",
    plainLanguage: "How much of this stock trades on a typical day"
  },
  hhi: {
    term: "Herfindahl-Hirschman Index (HHI)",
    explanation:
      "Measures how concentrated trading is across different times of day. 0 = perfectly spread out, 1 = all trading happens at one time. Values above 0.25 indicate high concentration.",
    plainLanguage: "Are trades spread evenly through the day, or do they bunch up at certain times?"
  },
  spread: {
    term: "Bid-Ask Spread",
    explanation:
      "The difference between the highest price buyers are willing to pay (bid) and the lowest price sellers will accept (ask). Lower spreads mean lower trading costs.",
    plainLanguage: "The gap between what buyers offer and sellers ask - your immediate trading cost"
  },
  granger: {
    term: "Granger Causality",
    explanation:
      "A statistical test that checks if one time series can predict another. If OFI 'Granger-causes' price, it means order flow imbalance helps predict future price movements.",
    plainLanguage: "Does knowing the order imbalance help us guess where the price is heading?"
  },
  regime: {
    term: "Volatility Regime",
    explanation:
      "Different market states characterized by volatility levels. Markets can be calm (low vol), normal (medium vol), or turbulent (high vol). The model identifies which state we're in and how likely we are to switch.",
    plainLanguage: "Is the market currently calm, normal, or chaotic?"
  },
  kyle: {
    term: "Kyle's Lambda",
    explanation:
      "Measures how much the price moves when you trade. Higher lambda means your trades have more price impact - the market is less liquid.",
    plainLanguage: "How much does the price move when you buy or sell?"
  },
  amihud: {
    term: "Amihud Ratio",
    explanation:
      "Measures price impact per dollar traded. Lower values indicate better liquidity. It's calculated as the average of (|return| / dollar volume) over a period.",
    plainLanguage: "How much does the price bounce around relative to how much is being traded"
  },
  idiosyncratic: {
    term: "Idiosyncratic Risk",
    explanation:
      "Price movements specific to this company, not explained by the overall market or sector. High idiosyncratic share means the stock marches to its own drum.",
    plainLanguage: "How much of the price movement is just about this company, not the market"
  }
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "579",
    company: "Oceanus",
    asof_date: "2026-01-20",
    industry: "Consumer Defensive",
    sector: "Food Distribution",
    market_cap_display: "77.3M",
    market_cap_category: "small",
    universe_total: 556,
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
        text: "Liquidity score: 21% — BELOW AVG",
        bg: "bg-red-500/20",
        textColor: "text-red-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Company-led; market weak", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "HIGH crossing cost", bg: "bg-red-500/20", textColor: "text-red-300" },
      intraday: { text: "HIGH concentration", bg: "bg-red-500/20", textColor: "text-red-300" },
      ofi: { text: "One-sided; L2 unavailable", bg: "bg-amber-500/20", textColor: "text-amber-400" },
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
    action_plan_subtitle: "Practical steps to improve trading conditions and reduce costs",
    action_plan_icon: "",

    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar small-cap names in Singapore",

    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight:
      "Oceanus has underperformed over 1M/3M/6M while trading costs are high — execution quality is a separate problem from fundamentals.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Understanding whether price changes come from the market, your sector, or company-specific factors",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 86% of price moves are company-specific. The broader market contributes ~1% and the sector ~13%."
      },
      {
        title: "Market Sensitivity",
        text:
          "Market correlation is very low (~0.06). Macro moves matter less than company news and microstructure."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is modest (~0.30) — sector conditions can still influence timing, but it’s not the main driver."
      }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High idiosyncratic share means company events dominate the tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Lead-lag is weak; observed best market lag suggests stock may lead market in this sample.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share remains dominant across rolling windows.",
    drivers_bottom_line:
      "Bottom line: Oceanus trades like a microstructure-driven small cap — execution is sensitive to spread and auction concentration.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Use limit orders; market orders can be very expensive with wide spreads.",
      "Time trades around the most liquid windows (auctions / peak buckets).",
      "Break orders into smaller clips; avoid forcing size into thin continuous trading."
    ],

    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Understanding when markets are calm versus turbulent helps with trade timing",
    regime_badge_text: "Current: Medium Volatility Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "Med Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note:
      "Spreads are very wide (~28.6%). Depth exists, but crossing the spread is costly — execution must prioritize limit orders.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. Oceanus is difficult to trade in 50K clips (over 100% of ADV).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Based on latest order book snapshot. Results can vary materially day to day for small caps.",
    exec_check_insight:
      "Oceanus has very high spread and concentrated liquidity, so execution strategy matters more than usual. Split orders and avoid crossing the spread.",

    trader_composition_title: "Who's Trading Your Stock?",
    trader_composition_subtitle: "Breakdown of retail, mixed, and institutional traders",
    trader_retail_threshold: "Retail: Trades under S$13,500",
    trader_mixed_threshold: "Mixed: Trades S$13,500 - S$67,500",
    trader_instit_threshold: "Institutional: Trades over S$67,500",

    peer_trader_title: "How Your Traders Compare to Peers",
    peer_trader_subtitle: "Retail concentration across similar small-cap names",

    price_moving_title: "Which Trades Move the Price?",
    price_moving_subtitle: "Analysis of trades that caused price changes",

    intraday_title: "When Does Trading Happen?",
    intraday_subtitle: "Understanding when liquidity is available throughout the trading day",
    session_dist_title: "Trading by Session",
    session_period_label: "Period:",
    session_dist_note:
      "For Oceanus, auctions are a meaningful share of volume and liquidity is highly time-dependent.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template:
      "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note:
      "Liquidity is concentrated in early buckets; plan execution around the top buckets.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight:
      "Trading is highly concentrated (HHI ~0.46). Liquidity is mostly available in auctions and a few early buckets — avoid trading outside peaks when possible.",

    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does order imbalance predict price changes?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictive signal (if available)" }
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
    ofi_unusual_note: "Large imbalances can coincide with bigger price moves — useful as a risk flag.",

    index_title: "Index Visibility & Eligibility",
    index_subtitle: "What prevents index inclusion (and what levers exist)",

    // SHORT (XSES only, optional)
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
        value: "21.0",
        suffix: "/100",
        bar_pct: 21.0,
        color_value: "text-red-300",
        color_bar: "text-red-300",
        subtext: "Rank 440/556 • Peer median: 44.6",
        interpretation: { text: "BELOW AVERAGE", cls: "interpretation-bad", icon: "!" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Wider spreads = higher trading costs."
        },
        value: "27.7",
        suffix: "%",
        bar_pct: 100,
        color_value: "text-red-300",
        color_bar: "text-red-300",
        subtext: "~2,771 basis points • Very wide",
        interpretation: { text: "POOR", cls: "interpretation-bad", icon: "×" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body:
            "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade large amounts."
        },
        value: "43.8K",
        suffix: "SGD",
        bar_pct: 10,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 21.5K SGD • Higher than peers but still small in absolute terms",
        interpretation: { text: "THIN", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "85.8",
        suffix: "% company",
        bar_pct: 85.8,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 1.4% • Sector: 12.7%",
        interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Oceanus scores 21/100 on liquidity (rank 440/556). The key constraint is not just size — the spread is extremely wide (~27.7%).",
      "ADV is ~S$44K/day. Even a S$50K clip can exceed a full day’s volume (~114% of ADV), so execution must be broken into small clips.",
      "Price moves are mostly company-specific (~86%). Liquidity risk and fundamental news-flow risk should be managed separately."
    ],

    action_plan: {
      borderClass: "border-red-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-red-500/20", text: "text-red-300", textColor: "text-red-300", dot: "bg-red-500" },
          items: [
            {
              title: "Reduce trading friction (spread) through microstructure actions",
              bullets: [
                "Engage market makers / liquidity providers to tighten spreads and support continuous-session quoting.",
                "Encourage on-screen liquidity around auctions and top buckets to reduce price gaps."
              ]
            },
            {
              title: "Adopt an execution playbook for thin liquidity",
              bullets: [
                "Use limit orders; avoid crossing the spread unless necessary.",
                "Split orders into small clips; stage over multiple days for size."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Broaden participation beyond retail-heavy flow",
              bullets: [
                "Retail dominates trading (>99% by count). Target small-cap funds and local institutions to add depth.",
                "Improve investor communications cadence to reduce surprise-driven gaps."
              ]
            },
            {
              title: "Stabilize trading around company events",
              bullets: [
                "With ~86% idiosyncratic share, company disclosures have outsized impact — pre-brief key metrics where possible.",
                "Avoid clustering multiple announcements; spread information releases when feasible."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-slate-500/20", text: "text-slate-300", textColor: "text-slate-300", dot: "bg-slate-500" },
          items: [
            {
              title: "Build a measurable liquidity KPI dashboard for management",
              bullets: [
                "Track spread, ADV, trade count, auction concentration (HHI), and depth monthly versus peers.",
                "Treat liquidity as a strategic capability: it affects valuation and investor access."
              ]
            },
            {
              title: "Work toward index eligibility (when realistic)",
              bullets: [
                "Index inclusion is currently limited; prioritize liquidity and performance first.",
                "Over time, improving rank and turnover/velocity can expand eligibility."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      {
        title: "Daily Trades",
        value: "33",
        sub: "Small number of trades/day makes execution sensitive to timing",
        interp: { text: "THIN", cls: "interpretation-bad", icon: "!" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.04%",
        sub: "Very low turnover — shares change hands infrequently",
        interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "18.0%",
        sub: "Very high daily moves — execution risk is elevated",
        interp: { text: "HIGH", cls: "interpretation-bad", icon: "!" }
      }
    ],

    liq_insight:
      "Liquidity quality is weak. Even though ADV is higher than the peer median, the exceptionally wide spread and high volatility dominate execution cost and risk.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.0035", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "28.6%", note: "Immediate trading cost", color: "text-red-300" },
      { title: "Kyle's Lambda", value: "0.50 bps", note: "per S$10K traded", color: "text-white" }
    ],

    impact_summary_cards: [
      { title: "S$10K Sell", text: "Impact: −1428.6 bps • Fill: 100%", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$50K Sell", text: "Impact: −1428.6 bps • Fill: 100%", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$250K Sell", text: "Impact: −1428.6 bps • Fill: 100%", cls: "bg-red-500/10 border border-red-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided" },
      { cls: "bg-slate-500/20 text-slate-300", text: "Weak relationship" },
      { cls: "bg-amber-500/20 text-amber-400", text: "L2 unavailable" }
    ],

    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // INSIGHTS - EXECUTIVE NARRATIVE (CEO/CFO-friendly)
  // ============================================================================
  insights: {
    liquidity: {
      overall:
        "Oceanus screens as a low-liquidity small-cap in Singapore. The composite liquidity score is 21/100 (rank 440 of 556). The primary driver is an exceptionally wide spread (~27.7%) and very high daily volatility (~18%).",
      strengths: [
        "ADV (~S$44K/day) is above the peer median (~S$21.5K/day) — the name does trade, but in small absolute size",
        "Daily trade count (~33/day) is higher than the peer median (~14/day), which helps with small clip execution"
      ],
      concerns: [
        "Spread is extremely wide (~27.7%), materially increasing crossing cost and slippage",
        "High volatility (~18%) increases execution risk and makes outcomes timing-dependent",
        "Turnover is very low (~0.04%), indicating limited natural liquidity"
      ],
      peer_context:
        "Relative to peers, Oceanus has higher ADV but much worse spread and volatility. Improving trading quality likely requires microstructure intervention (quoting/depth), not just more volume."
    },

    market_comparison: {
      adv: {
        insight: "Oceanus ADV is small in absolute terms (~S$44K/day) but above peer/sector medians.",
        vs_market: "Above the market median ADV, but still far from the market mean (skewed by large caps).",
        vs_sector: "Above the sector median (~S$16K/day) but liquidity is not usable if spread remains wide.",
        vs_peers: "Above peer median (~S$21.5K/day)."
      },
      spread: {
        insight: "Spread is the dominant constraint (27.7%).",
        vs_market: "Much wider than the market median (~2.6%).",
        vs_sector: "Much wider than the sector median (~8.0%).",
        vs_peers: "Much wider than peer median (~3.7%)."
      },
      volatility: {
        insight: "Volatility is extremely high for the market and sector.",
        vs_market: "Much higher than market median (~2.1%).",
        vs_sector: "Much higher than sector median (~1.9%).",
        vs_peers: "Much higher than peer median (~2.5%)."
      },
      trades: {
        insight: "Trade count is low in absolute terms (~33/day) but above many peers.",
        vs_market: "Above market median (~15/day) but far below liquid names.",
        vs_sector: "Above sector median (~19/day).",
        vs_peers: "Above peer median (~14/day)."
      }
    },

    performance: {
      overall:
        "Oceanus has underperformed across key horizons. This underperformance is not explained by liquidity alone — fundamentals and sentiment likely dominate, but wide spreads amplify the pain for any investor needing to trade.",
      ytd: {
        stock: "-25.0%",
        market: "+3.9%",
        sector: "-0.5%",
        peers: "+2.1%",
        insight:
          "YTD, Oceanus is down 25% while the market is up ~4%. Liquidity is not the only issue — investors will need clear catalysts and communication."
      },
      three_month: {
        stock: "-25.0%",
        market: "+18.2%",
        sector: "+0.5%",
        peers: "+2.5%",
        insight:
          "Over 3 months, Oceanus is down 25% while the market is up ~18%. This suggests company-specific concerns are dominant."
      },
      six_month: {
        stock: "-50.0%",
        market: "+52.2%",
        sector: "-2.0%",
        peers: "+0.0%",
        insight:
          "Over 6 months, Oceanus is down 50% while the market is up strongly. This magnitude of divergence is material and will affect investor appetite."
      },
      conclusion:
        "Management should treat liquidity improvement and business performance as two parallel tracks: better liquidity reduces trading friction, but durable valuation requires improved fundamentals and investor confidence."
    },

    drivers: {
      overall:
        "Oceanus price movements are overwhelmingly company-specific: ~85.8% idiosyncratic share. Sector contributes ~12.7% and the overall market ~1.4%.",
      interpretation:
        "High idiosyncratic share means company news, microstructure, and positioning dominate the tape. This increases the value of consistent disclosure and reduces reliance on macro tailwinds.",
      rolling_change:
        "Across rolling windows, idiosyncratic share remains the majority driver; market influence stays low.",
      beta:
        "Market beta is negative in the sample (β≈−0.32) and sector beta is very high (β≈29.9), consistent with unstable small-cap regression dynamics. Treat betas as directional, not precise."
    },

    regime: {
      overall:
        "The regime model identifies three states: Low Vol (66%), Medium Vol (18%), and High Vol (16%). Current regime is Medium Vol.",
      current:
        "Current regime: Medium Vol. In this regime, execution risk is elevated versus Low Vol, and spreads can widen further.",
      transitions:
        "Transitions suggest instability: Medium Vol does not persist and can jump to Low or High Vol. Plan execution assuming regime can shift quickly.",
      trading_implications:
        "In higher-vol regimes, avoid forcing size. Use limit orders and consider spreading execution across sessions/days."
    },

    trader_composition: {
      overall:
        "Trading is retail-dominated (>99% by count). Institutional participation is near zero, which limits block liquidity and increases fragility during sell pressure.",
      retail_heavy:
        "Retail-heavy flow implies many small trades (avg ~S$1.3K, median ~S$396) and fragmented liquidity.",
      institutional_gap:
        "Near-zero institutional participation means less stable depth and higher impact when larger orders arrive.",
      peer_comparison:
        "Peers are also retail-heavy, but Oceanus remains at the extreme end. Improving investability may require tighter spreads and better continuous-session liquidity."
    },

    price_moving: {
      overall:
        "In the sample, 474 trades moved the price (~9.5% of trades). This indicates a market where prints frequently move the mid, consistent with wide spreads.",
      interpretation:
        "When spreads are wide, many trades cross at levels that move price mechanically. This increases execution cost and complicates best execution.",
      asymmetry:
        "Positive and negative movers are similar in count; focus should be on reducing spread and improving depth rather than directional flow."
    },

    short_selling: {
      overall:
        "Short interest is low on average (3M avg short ~0.94%), but spikes can be episodic (max ~32.9% over 6M). Overall, short activity does not appear to predict returns (correlation ~0).",
      level:
        "Average short participation is low across 1M/3M/6M, suggesting shorts are not a persistent pressure. However, occasional spikes warrant monitoring around event days.",
      correlation:
        "Short% vs return correlation is effectively zero (−0.005), indicating no reliable relationship in this sample.",
      trend:
        "Shorts appear to be covering recently: average short ratio fell to 0.0% in 2026-01 (−100% MoM versus 2025-12).",
      peaks:
        "Peak short days are sporadic. Treat them as context (risk flag) rather than a standalone signal."
    },

    execution: {
      overall:
        "Execution conditions are challenging: spread is ~28.6% and 50K is ~114% of ADV. This is the definition of 'thin liquidity' for any institutional-size order.",
      concern:
        "Even moderate clip sizes can represent multiple days of natural volume; crossing the spread can dominate total cost.",
      kyle:
        "Kyle’s Lambda is ~0.50 bps per S$10K (model-based). Treat this as a relative indicator; in thin names, realized impact can be much higher.",
      peer_context:
        "Some peers have effectively zero ADV at times, producing extreme %ADV comparisons. Focus comparisons on peers with stable trading activity."
    },

    intraday: {
      overall:
        "Trading is highly concentrated (HHI ~0.46). Auctions are a material share of volume (≈13% in 6M) and top time buckets dominate activity.",
      hhi_interpretation:
        "HHI above 0.25 indicates high concentration. Oceanus is well above that threshold — liquidity is not evenly available.",
      best_times:
        "Best liquidity is in early buckets (notably 09:00 and 08:30). Plan execution around these peaks.",
      peer_ranking:
        "Oceanus is among the more concentrated names in its peer set; several peers show even higher HHI, reinforcing that this is a small-cap microstructure pattern."
    },

    ofi: {
      overall:
        "Order flow is very one-sided (3M avg |OFI| ~77.8%). However, the correlation to same-day returns is weak (~0.11) and L2 OFI could not be computed reliably for the last 7 days.",
      daily_vs_intraday:
        "Daily OFI has a weak relationship with daily returns. OFI is more useful as a risk indicator (one-sided markets) than a return predictor here.",
      l2_signal:
        "L2 signal unavailable due to insufficient valid order book snapshots after filtering.",
      day_breakdown:
        "Over 3 months: 40% net buying days, 60% net selling days, 0% balanced — consistent with a sell-pressure skew."
    },

    index: {
      overall:
        "Oceanus is not currently eligible for major benchmark indices given rank and turnover constraints. Improving liquidity and turnover is a prerequisite before index targeting becomes practical.",
      hsci: "N/A for Singapore market (HSCI is Hong Kong-specific).",
      hsi_gap: "N/A (HSI is Hong Kong-specific).",
      tech_gap: "N/A (Hang Seng TECH is Hong Kong-specific).",
      recommendation:
        "Focus first on trading quality (spread, depth, turnover) and consistent investor communication. Index eligibility can be revisited after improvements in rank/velocity."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA USED BY CHARTS
  // ============================================================================
  series: {
    // Q01: PEERS LIQUIDITY (use PCA percentile-like score)
    peers_liquidity: {
      labels: ["579", "AAJ", "5EV", "K03", "BAC", "BEW", "5EG", "LGH", "5JS"],
      scores: [21.043165467625897, 56.4748201438849, 39.568345323741006, 16.906474820143885, 1.618705035971223, 56.65467625899281, 60.79136690647482, 24.100719424460433, 49.64028776978417],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [43816.685000000005, 20916.245000000003, 11416.2, 321.75, 0.0, 58242.975, 27081.35, 83949.1, 22065.775],
      total: 556
    },

    // Q01: MARKET COMPARISON
    market_comparison: {
      sector_name: "Food Distribution",
      sector_count: 6,
      market_count: 556,
      company: {
        volatility: 0.18002057495577387,
        adv: 43816.685000000005,
        spread_pct: 0.27712097395564983,
        turnover_ratio: 0.0004464581512313674,
        amihud: 1.5193672333497019e-05,
        trades: 33.35
      },
      market: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.0368207406206641,
          median: 0.02050609970204201,
          min: 0.0,
          max: 0.5339360629309895,
          p5: 0.003553584479349218,
          p95: 0.1086505536805541,
          count: 556
        },
        adv: {
          direction: "higher_is_better",
          mean: 2190039.635658198,
          median: 36354.7025,
          min: 0.0,
          max: 205551085.05,
          p5: 84.465,
          p95: 8471370.225,
          count: 556
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.09037177948227816,
          median: 0.026136012509374792,
          min: 0.0002818956718622906,
          max: 1.267605633802817,
          p5: 0.0034951211765480448,
          p95: 0.47016102171152185,
          count: 553
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.005730729356935601,
          median: 0.0008142003333107464,
          min: 0.0,
          max: 1.1630742864676027,
          p5: 5.944923374809722e-06,
          p95: 0.014997704480080282,
          count: 536
        },
        amihud: {
          direction: "lower_is_better",
          mean: 0.0037084748323391614,
          median: 1.5802473171245712e-06,
          min: 0.0,
          max: 1.3927443249701315,
          p5: 3.407323258923384e-10,
          p95: 0.0010680334080956832,
          count: 546
        },
        trades: {
          direction: "higher_is_better",
          mean: 325.9517985611511,
          median: 15.325,
          min: 0.0,
          max: 8139.85,
          p5: 0.25,
          p95: 1765.9875,
          count: 556
        }
      },
      sector: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.043781807520060466,
          median: 0.018936713781131702,
          min: 0.0,
          max: 0.18002057495577387,
          p5: 0.001845252754314754,
          p95: 0.14436938911309702,
          count: 6
        },
        adv: {
          direction: "higher_is_better",
          mean: 302732.005,
          median: 16166.222500000002,
          min: 0.0,
          max: 1739921.15,
          p5: 80.4375,
          p95: 1315895.03375,
          count: 6
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.16820414026360697,
          median: 0.07987923275694944,
          min: 0.00548361187283524,
          max: 0.522589159615457,
          p5: 0.015180866560576628,
          p95: 0.4612221132005052,
          count: 6
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0009095191728565035,
          median: 0.0004885943201305067,
          min: 0.0,
          max: 0.0031576811827469693,
          p5: 1.8293728282731138e-05,
          p95: 0.0026805284623102553,
          count: 6
        },
        amihud: {
          direction: "lower_is_better",
          mean: 1.255692747777583e-05,
          median: 1.3991855464655836e-05,
          min: 4.473795652103194e-09,
          max: 2.645502645502636e-05,
          p5: 1.4315009045312477e-06,
          p95: 2.420275563072049e-05,
          count: 5
        },
        trades: {
          direction: "higher_is_better",
          mean: 133.25,
          median: 18.650000000000002,
          min: 0.0,
          max: 725.65,
          p5: 0.0625,
          p95: 553.3125,
          count: 6
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 27999.174375000002,
          median: 21491.010000000002,
          min: 0.0,
          max: 83949.1,
          p5: 112.61250000000001,
          p95: 74951.95624999999,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 14.55,
          median: 13.8,
          min: 0.0,
          max: 36.3,
          p5: 0.08750000000000001,
          p95: 33.815,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.022811844222152065,
          median: 0.02511078641292041,
          min: 0.0,
          max: 0.04449244884744559,
          p5: 0.004014775342734817,
          p95: 0.04201563280561291,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.10358225599644333,
          median: 0.0372837316096856,
          min: 0.017035995279207572,
          max: 0.522589159615457,
          p5: 0.02011728639306145,
          p95: 0.3722853316281888,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 8.275654206640147e-06,
          median: 3.5609837002732956e-06,
          min: 1.7327080744596454e-06,
          max: 2.645502645502636e-05,
          p5: 1.7364385088480339e-06,
          p95: 2.2716075157915194e-05,
          count: 7
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0015948114378795469,
          median: 0.0011428600702122365,
          min: 0.0,
          max: 0.00539140162504671,
          p5: 2.195247393927737e-05,
          p95: 0.004721285492356786,
          count: 7
        }
      }
    },

    returns: [
      { horizon: "1M", stock: -0.3999999999999999, market: 0.0812593817628049, sector: 0.005270083102492773, peers: 0.04204870145461559 },
      { horizon: "3M", stock: -0.25, market: 0.1818965606528411, sector: 0.0050791486137744535, peers: 0.025266643715833315 },
      { horizon: "6M", stock: -0.4999999999999998, market: 0.5222246441017391, sector: -0.019660640558429865, peers: 0.0002978519942531399 },
      { horizon: "YTD", stock: -0.25, market: 0.039435520842878935, sector: -0.0052631578947368585, peers: 0.020782401424929375 }
    ],

    // Q02: DRIVERS
    drivers: {
      share_market: 1.4343098593741303,
      share_sector: 12.740802211354574,
      share_idio: 85.8248879292713,
      beta_market: -0.3167314021701488,
      beta_sector: 29.909443185009632,
      r_squared: 0.09287100531771941,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.12645305149139177,
          0.04915158749925855,
          -0.0032028503792419613,
          -0.03890114325671479,
          0.05110605473793443,
          0.056748238197080504,
          -0.10602074009489973,
          -0.016932093849262364,
          0.07350101632275158,
          -0.001781863086173965,
          -0.045403946283163854
        ],
        corr_sector: [
          -0.000006341853199923326,
          -0.15725047033071488,
          0.16793966911849012,
          -0.000011586315372999951,
          -0.05010124202705738,
          0.3045949139551958,
          -0.21377550853873903,
          0.09003263102123288,
          -0.0009879335048357393,
          -0.0010047057697456085,
          -0.04917647827489372
        ],
        best: { market: -5, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-01-07 to 2025-03-11",
          shares: { share_market: 0.0041235266459450064, share_sector: 0.2747044625907996, share_idio: 0.7211720107632553 },
          regression: { r_squared: 0.2726069725189678 }
        },
        p2: {
          valid: true,
          period_label: "2025-03-11 to 2025-05-13",
          shares: { share_market: 0.16110014405750492, share_sector: 0.12280019319092438, share_idio: 0.7160996627515707 },
          regression: { r_squared: 0.15488553659359738 }
        },
        p3: {
          valid: true,
          period_label: "2025-05-13 to 2025-07-15",
          shares: { share_market: 0.04310053062714356, share_sector: 0.10195565400876146, share_idio: 0.854943815364095 },
          regression: { r_squared: 0.0703498185262803 }
        },
        p4: {
          valid: true,
          period_label: "2025-07-15 to 2025-09-16",
          shares: { share_market: 0.22535546042683516, share_sector: 0.09414743238862584, share_idio: 0.680497107184539 },
          regression: { r_squared: 0.15414757454254047 }
        },
        p5: {
          valid: true,
          period_label: "2025-09-16 to 2025-11-18",
          shares: { share_market: 0.024973568451893274, share_sector: 0.17712768505827903, share_idio: 0.7978987464898276 },
          regression: { r_squared: 0.1369035408567697 }
        },
        p6: {
          valid: true,
          period_label: "2025-11-18 to 2026-01-20",
          shares: { share_market: 0.014343098593741303, share_sector: 0.12740802211354574, share_idio: 0.858248879292713 },
          regression: { r_squared: 0.09287100531771941 }
        }
      },
      rolling: {
        ordered: [
          "2025-01-07 to 2025-03-11",
          "2025-03-11 to 2025-05-13",
          "2025-05-13 to 2025-07-15",
          "2025-07-15 to 2025-09-16",
          "2025-09-16 to 2025-11-18",
          "2025-11-18 to 2026-01-20"
        ],
        market: [0.4, 16.1, 4.3, 22.5, 2.5, 1.4],
        sector: [27.5, 12.3, 10.2, 9.4, 17.7, 12.7],
        idio: [72.1, 71.6, 85.5, 68.0, 79.8, 85.8]
      },
      regime: {
        n_regimes: 3,
        labels: ["Low Vol", "Medium Vol", "High Vol"],
        pct_time: [65.87301587301587, 18.253968253968253, 15.873015873015872],
        current_regime: 1,
        regimes: [
          { id: 2, label: "Low Vol", mean_ret: 0.0, volatility: 0.0, n_days: 83, pct_time: 65.87301587301587 },
          { id: 1, label: "Medium Vol", mean_ret: -19.71, volatility: 3.43, n_days: 23, pct_time: 18.253968253968253 },
          { id: 0, label: "High Vol", mean_ret: 24.58, volatility: 5.45, n_days: 20, pct_time: 15.873015873015872 }
        ],
        transitions: [
          [5.0, 40.6, 12.0],
          [24.8, 0.0, 21.5],
          [70.3, 59.4, 66.5]
        ]
      }
    },

    // Q03: ORDER BOOK SNAPSHOT
    order_book: {
      bids: [
        { level: 1, price: 0.003, quantity: 147192200.0, value: 441576.60000000003 },
        { level: 2, price: 0.002, quantity: 81608000.0, value: 163216.0 },
        { level: 3, price: 0.001, quantity: 54751000.0, value: 54751.0 }
      ],
      asks: [
        { level: 1, price: 0.004, quantity: 179027100.0, value: 716108.4 },
        { level: 2, price: 0.005, quantity: 106745400.0, value: 533727.0 },
        { level: 3, price: 0.006, quantity: 107860100.0, value: 647160.6 },
        { level: 4, price: 0.007, quantity: 55197900.0, value: 386385.3 },
        { level: 5, price: 0.008, quantity: 14013000.0, value: 112104.0 },
        { level: 6, price: 0.009, quantity: 1700000.0, value: 15299.999999999998 },
        { level: 7, price: 0.01, quantity: 10120000.0, value: 101200.0 },
        { level: 8, price: 0.011, quantity: 600000.0, value: 6600.0 },
        { level: 9, price: 0.012, quantity: 1215000.0, value: 14580.0 },
        { level: 10, price: 0.013, quantity: 900000.0, value: 11700.0 }
      ]
    },

    // Q03: PEER CAPACITY (50K as % of ADV)
    peer_capacity: {
      bx_ticket_pct_adv_50k: 114.0,
      peers: [
        { ticker: "LGH", pct: 59.6 },
        { ticker: "BEW", pct: 85.8 },
        { ticker: "5EG", pct: 184.6 },
        { ticker: "5JS", pct: 226.6 },
        { ticker: "AAJ", pct: 239.0 },
        { ticker: "5EV", pct: 438.0 },
        { ticker: "K03", pct: 15540.0 },
        { ticker: "BAC", pct: 99999.0 }
      ]
    },

    // Q03: TRADER COMPOSITION (new schema; fractions 0-1)
    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 656,
      first_trade_date: "2025-12-22",
      last_trade_date: "2026-01-19",
      period_days: 28,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: { retail_pct: 0.9908536585365854, mixed_pct: 0.009146341463414634, instit_pct: 0.0 },
      trade_size: { avg: 1327.6702743902438, median: 396.0 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 407, retail_pct: 0.9926289926289926, mixed_pct: 0.007371007371007371, instit_pct: 0.0, avg_trade_size: 1127.2987714987714 },
          { month: "2025-12", n_trades: 1129, retail_pct: 0.9946855624446412, mixed_pct: 0.005314437555358724, instit_pct: 0.0, avg_trade_size: 733.8335695305581 },
          { month: "2025-11", n_trades: 1023, retail_pct: 0.9902248289345064, mixed_pct: 0.008797653958944282, instit_pct: 0.0009775171065493646, avg_trade_size: 925.74477028348 },
          { month: "2025-10", n_trades: 647, retail_pct: 0.9845440494590417, mixed_pct: 0.015455950540958269, instit_pct: 0.0, avg_trade_size: 2114.421174652241 },
          { month: "2025-09", n_trades: 659, retail_pct: 0.9954476479514416, mixed_pct: 0.004552352048558422, instit_pct: 0.0, avg_trade_size: 821.5623672230652 },
          { month: "2025-08", n_trades: 810, retail_pct: 0.9864197530864197, mixed_pct: 0.013580246913580247, instit_pct: 0.0, avg_trade_size: 851.3316049382714 }
        ]
      },
      peer_comparison: [
        { ticker: "579", currency: "SGD", is_target: true, retail_pct: 0.9908536585365854, mixed_pct: 0.009146341463414634, instit_pct: 0.0, avg_trade_size: 1327.6702743902438, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5EG", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 952.947256637168, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "AAJ", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 562.3363384188627, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "K03", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 1283.0, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5JS", currency: "SGD", is_target: false, retail_pct: 0.9663865546218487, mixed_pct: 0.03361344537815126, instit_pct: 0.0, avg_trade_size: 1713.5105042016808, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5EV", currency: "SGD", is_target: false, retail_pct: 0.961038961038961, mixed_pct: 0.03896103896103896, instit_pct: 0.0, avg_trade_size: 2961.5493506493513, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "BEW", currency: "SGD", is_target: false, retail_pct: 0.9379084967320261, mixed_pct: 0.058823529411764705, instit_pct: 0.0032679738562091504, avg_trade_size: 3807.4395424836603, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "LGH", currency: "SGD", is_target: false, retail_pct: 0.9335106382978723, mixed_pct: 0.06382978723404255, instit_pct: 0.0026595744680851063, avg_trade_size: 4452.623670212766, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },

    // Q03: PRICE-MOVING TRADES (legacy UI shape)
    price_moving_trades: {
      total_trades: 5001,
      price_moving_trades: 474,
      pct_price_moving: 9.478104379124176,
      all_movers: { count: 474, avg_size: 971.3759493670888, median_size: 72.0 },
      positive_movers: { count: 236, avg_size: 964.6953389830509, median_size: 98.30000000000001 },
      negative_movers: { count: 238, avg_size: 978.0004201680674, median_size: 46.75 }
    },

    // Q04: INTRADAY (session + HHI + buckets + peers)
    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        // Stored as fractions (0-1); UI normalizes via toPct().
        "1M": {
          opening: 0.08963794684562898,
          continuous: 0.8677384420964952,
          closing: 0.0028058304247761587,
          auctions: 0.13226155790350475,
          other: 0.0
        },
        "3M": {
          opening: 0.06715094175295465,
          continuous: 0.9068766989605206,
          closing: 0.004038149760585348,
          auctions: 0.09312330103947945,
          other: 0.0
        },
        "6M": {
          opening: 0.07521521144123301,
          continuous: 0.8713955823536268,
          closing: 0.02202995620678312,
          auctions: 0.12860441764637315,
          other: 0.0
        }
      },
      hhi: { "1M": 0.3332902285374988, "3M": 0.4815094877815714, "6M": 0.45777338464054596 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.1454 },
        { time: "09:00", avg_share: 0.2641 },
        { time: "09:30", avg_share: 0.0746 },
        { time: "10:00", avg_share: 0.1019 },
        { time: "10:30", avg_share: 0.0490 },
        { time: "11:00", avg_share: 0.0515 },
        { time: "11:30", avg_share: 0.0566 },
        { time: "12:00", avg_share: 0.0040 },
        { time: "12:30", avg_share: 0.0337 },
        { time: "13:00", avg_share: 0.0608 },
        { time: "13:30", avg_share: 0.0234 },
        { time: "14:00", avg_share: 0.0463 },
        { time: "14:30", avg_share: 0.0151 },
        { time: "15:00", avg_share: 0.0128 },
        { time: "15:30", avg_share: 0.0055 },
        { time: "16:00", avg_share: 0.0209 },
        { time: "16:30", avg_share: 0.0101 },
        { time: "17:00", avg_share: 0.0244 }
      ],
      peers_hhi_rows: [
        { ticker: "579", auctions_pct: 17.827414503312905, hhi: 0.44589584944351884, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400", you: true } },
        { ticker: "LGH", auctions_pct: 17.237136603913296, hhi: 0.4189243531893693, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "5EG", auctions_pct: 5.576533441978659, hhi: 0.4273642454393072, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        // Duplicate 579 appears in source peer table; keep single 'YOU' row above for UI clarity.
        { ticker: "5JS", auctions_pct: 4.474132487010708, hhi: 0.5651407138179649, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BEW", auctions_pct: 4.069987005263629, hhi: 0.6061029197342211, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "AAJ", auctions_pct: 5.321734725268064, hhi: 0.6490006804930615, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "5EV", auctions_pct: 3.1024835632430006, hhi: 0.7484557860518717, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "K03", auctions_pct: 0.7639128390029785, hhi: 0.7942815356352921, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BAC", auctions_pct: 0.06370822138229214, hhi: 0.8646466182415502, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    // Q05: OFI BLOCK (UI shape)
    ofi_block: {
      tiles_values: [
        { value: "77.8%", note_suffix: " - 3-month average absolute OFI (how one-sided trading is)." },
        { value: "0.11", note_suffix: " - Correlation between daily OFI and same-day returns (weak)." },
        { value: "No data", note_suffix: " - No valid L2 snapshots after filtering (signal unavailable)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "-4.9%", avg_abs: "64.8%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "-18.9%", avg_abs: "77.8%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "-0.7%", avg_abs: "73.6%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.11",
      pie: { net_buy_days: 40.0, net_sell_days: 60.0, balanced_days: 0.0 },
      l2_compact_text:
        "We attempted to compute L2 order book imbalance for the last 7 days, but no valid snapshots remained after filtering (all levels required). Treat L2 OFI as unavailable for this report.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    // Q06: SHORT SELLING (XSES only; optional)
    short_selling: {
      data_available: true,
      security_name: "Oceanus",
      mapping: { ticker_to_security: "Oceanus", confidence: "high" },
      coverage: { n_days_short_data: 100, window_days: 182 },
      periods: {
        "1M": {
          stats: { valid: true, avg_short_ratio: 0.0, max_short_ratio: 0.0, interpretation: "Low short interest" }
        },
        "3M": {
          stats: {
            valid: true,
            avg_short_ratio: 0.009429869927840381,
            max_short_ratio: 0.25283171521035597,
            interpretation: "Low short interest"
          }
        },
        "6M": {
          stats: {
            valid: true,
            avg_short_ratio: 0.008834123444432202,
            max_short_ratio: 0.32876352039977647,
            interpretation: "Low short interest"
          }
        }
      },
      correlation: {
        valid: true,
        correlation: -0.004552882197012454,
        interpretation: "No clear relationship"
      },
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
          { month: "2025-06", avg_short_ratio: 5.124163098633571e-05 },
          { month: "2025-05", avg_short_ratio: 0.0029988457396429354 },
          { month: "2025-04", avg_short_ratio: 3.824552772097042e-08 },
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
          { month: "2025-06", avg_short_ratio: 5.124163098633571e-05, change_pct: null },
          { month: "2025-05", avg_short_ratio: 0.0029988457396429354, change_pct: 5752.361999255291 },
          { month: "2025-04", avg_short_ratio: 3.824552772097042e-08, change_pct: -99.99872465838388 },
          { month: "2025-03", avg_short_ratio: 0.0, change_pct: -100.0 },
          { month: "2025-02", avg_short_ratio: 0.008339316740711759, change_pct: null }
        ],
        interpretation: "Shorts covering significantly (-100% MoM) | YoY: -100% ⬇️"
      },
      short_series: {
        valid: true,
        rows: [
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
          { date: "2025-09-10", short_ratio: 0.0, short_vol: 0, total_vol: 2002100, return: 0.0 },
          { date: "2025-09-09", short_ratio: 0.0, short_vol: 0, total_vol: 2587400, return: 0.0 },
          { date: "2025-09-08", short_ratio: 0.0, short_vol: 0, total_vol: 4364300, return: 0.0 },
          { date: "2025-09-05", short_ratio: 0.0, short_vol: 0, total_vol: 1576600, return: 0.0 },
          { date: "2025-09-04", short_ratio: 0.0, short_vol: 0, total_vol: 3116100, return: 0.19999999999999996 },
          { date: "2025-09-03", short_ratio: 0.0, short_vol: 0, total_vol: 3616200, return: 0.0 },
          { date: "2025-09-02", short_ratio: 0.0, short_vol: 0, total_vol: 2929600, return: 0.0 },
          { date: "2025-09-01", short_ratio: 0.0, short_vol: 0, total_vol: 822400, return: 0.0 },
          { date: "2025-08-29", short_ratio: 0.0, short_vol: 0, total_vol: 7930100, return: 0.0 }
        ]
      },
      peer_comparison: [
        { ticker: "579", avg_short_ratio: 0.009429869927840381, max_short_ratio: 0.25283171521035597, is_target: true },
        { ticker: "AAJ", avg_short_ratio: 0.00020796149673755064, max_short_ratio: 0.02969848611967005, is_target: false },
        { ticker: "LGH", avg_short_ratio: 0.00021485819198466876, max_short_ratio: 0.08035696380226612, is_target: false },
        { ticker: "5EG", avg_short_ratio: 0.0002528164023844869, max_short_ratio: 0.03628917286606703, is_target: false },
        { ticker: "BEW", avg_short_ratio: 0.0016334232399576102, max_short_ratio: 0.2384140061791967, is_target: false },
        { ticker: "5JS", avg_short_ratio: 0.0024952700204377253, max_short_ratio: 0.175, is_target: false }
      ]
    },

    // Q07: INDEX BLOCK
    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#300", sub: "of 562 stocks" },
        { title: "Free Float", value: "97.6%", sub: "Float mcap ~ S$75.4M" },
        { title: "Avg Daily Turnover", value: "S$59.3K", sub: "Notional" },
        { title: "Velocity", value: "0.044%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        {
          index: "STI",
          status: "ineligible",
          notes: "Rank #300 - outside top 30",
          gaps: ["Need rank ≤30 (currently #300)", "Need velocity ≥0.1% (currently 0.04%)"]
        },
        {
          index: "FTSE All-Share",
          status: "ineligible",
          notes: "Below top 98% coverage (Fledgling)",
          gaps: ["Need top 98% mcap (currently 99.6%)", "Need velocity ≥0.05% (currently 0.044%)"]
        },
        {
          index: "iEdge Next 50",
          status: "ineligible",
          notes: "Rank #300 - below top 80",
          gaps: ["Need rank ≤80 (currently #300)"]
        },
        // Note: Size band is "Fledgling", but major index eligibility is still constrained by rank/velocity.
      ],
      insight:
        "Oceanus is not eligible for major indices primarily due to size rank (#300) and low turnover/velocity (0.044%). Improving predictable turnover tends to tighten spreads over time, but it requires sustained effort and consistent investor engagement.",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Increase predictable liquidity (spread + depth) to support steadier turnover",
        "Improve information flow (regular updates, clearer investor materials) to reduce uncertainty-driven spread widening",
        "Broaden the shareholder base over time (target small-cap funds / local institutions) to improve turnover stability"
      ]
    }
  }
};

export default REPORT_DATA;

