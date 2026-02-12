// @ts-nocheck

// ============================================================================
// CapLand China T (AU8U) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-02-10
//
// Source:
// - All key numeric fields are taken from the console output + JSON provided in
//   the user prompt (as-of 2026-02-10).
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
    "Start with the same market-cap category as the company (mid cap)",
    "Prefer the same sector first, then the same industry",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "P40U", name: "StarhillGbl Reit", marketCap: "S$1,305.5M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "J69U", name: "Frasers Cpt Tr", marketCap: "S$4,089.4M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "B61", name: "Bukit Sembawang", marketCap: "S$1,315.3M", sector: "Real Estate - Development", industry: "Real Estate" },
    { ticker: "J85", name: "CDL HTrust", marketCap: "S$1,087.2M", sector: "REIT - Hotel & Motel", industry: "Real Estate" },
    { ticker: "F17", name: "GuocoLand", marketCap: "S$3,360.8M", sector: "Real Estate - Development", industry: "Real Estate" },
    { ticker: "TS0U", name: "OUEREIT", marketCap: "S$1,950.0M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "Z25", name: "Yanlord Land", marketCap: "S$1,419.7M", sector: "Real Estate - Development", industry: "Real Estate" },
    { ticker: "O5RU", name: "AIMS APAC Reit", marketCap: "S$1,252.9M", sector: "REIT - Industrial", industry: "Real Estate" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "AU8U",
    company: "CapLand China T",
    asof_date: "2026-02-10",
    industry: "Real Estate",
    sector: "REIT - Retail",
    market_cap_display: "1316.1M",
    market_cap_category: "mid",
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
        text: "Liquidity Health: ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300",
        dot: "bg-emerald-500"
      },
      liq_section: {
        text: "Liquidity score: 84.8% — ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Balanced: sector meaningful", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW crossing cost", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "One-sided; L2 signal significant", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "Elevated short interest", bg: "bg-red-500/20", textColor: "text-red-300" },
      index_status: { text: "Eligible: FTSE All-Share", bg: "bg-emerald-500/20", textColor: "text-emerald-300" }
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

    exec_title: "Executive Summary: What Matters for Trading",
    exec_subtitle: "Key metrics that explain your stock's trading experience",
    exec_takeaways_title: "Key Takeaways:",

    metric_liquidity_score: "Liquidity Score",
    metric_spread: "Trading Cost (Spread)",
    metric_adv: "Average Traded Volume",
    metric_drivers: "What Drives Price Changes",

    action_plan_title: "Action Plan (Prioritized)",
    action_plan_subtitle: "Practical actions to protect and improve tradability",
    action_plan_icon: "",

    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar mid-cap REIT/Real Estate names in Singapore",

    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight:
      "Recent 1–3M returns lag peers and the market; liquidity quality is strong, so performance is more about fundamentals and flow than tradability.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or company-specific factors?",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 67% of recent price moves are company-specific. Sector contributes ~30% and the broad market ~3%."
      },
      {
        title: "Market Link",
        text:
          "Market correlation is low (~0.17). Best signal is the stock leading the market by ~5 days — macro explains little of day-to-day changes."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is moderate (~0.51) and contemporaneous — sector conditions influence tape behavior."
      }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Higher company-specific share means the stock moves on its own tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Market lead-lag is weak; sector is mostly contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Company-specific share remains dominant; sector influence varies but stays meaningful.",
    drivers_bottom_line:
      "Bottom line: AU8U trades well with tight spreads and steady flow; price formation is mainly company/sector-driven, so execution timing and sector context matter.",

    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Limit orders remain appropriate; spread is tight (~0.63%) and depth is solid.",
      "Time larger clips around deeper windows (midday and close).",
      "Respect sector move days; sector correlation is meaningful."
    ],

    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Current: High Volatility Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note:
      "Spread is about 0.65%. Depth is solid; selling S$100K–S$2.5M moves the price by roughly 0.33%–1.19%.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. For AU8U, a S$50K clip is ~3.9% of ADV — manageable for most execution needs.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Price impact from mid to VWAP using latest order book snapshot (single-day). Results can vary by day and urgency.",
    exec_check_insight:
      "Trading conditions are strong: tight spread, steady prints, and contained impact. Staging helps on one-sided flow days.",

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
    session_dist_note:
      "Most volume occurs in continuous trading (~83–85%). Auctions remain meaningful (~14–17%), with activity clustering at 12:00 and into the close.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template:
      "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note:
      "Best depth typically at 12:00 and into the close (16:30–17:00).",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight:
      "Trading is moderately concentrated (HHI ~0.18). Liquidity is accessible through the day; largest clips should prefer the midday/close peaks.",

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
        value: "84.8",
        suffix: "/100",
        bar_pct: 84.8,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Rank 86/558 • Peer median: 84.6",
        interpretation: { text: "ABOVE AVERAGE", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Tighter spreads reduce trading costs and support larger orders."
        },
        value: "0.63",
        suffix: "%",
        bar_pct: 73,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "~63 basis points • Tight for SGX REITs",
        interpretation: { text: "GOOD", cls: "interpretation-good", icon: "●" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body:
            "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade larger amounts."
        },
        value: "1.29M",
        suffix: "SGD",
        bar_pct: 60,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Peer median: 1.30M SGD • In line with peers",
        interpretation: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "66.9",
        suffix: "% company",
        bar_pct: 66.9,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 2.7% • Sector: 30.4%",
        interpretation: { text: "Balanced", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Liquidity is strong (84.8/100; rank 86/558): ~S$1.29M ADV, ~801 trades/day, and a tight ~0.63% spread.",
      "Price impact is contained (−0.33% for S$100K; −1.19% for S$2.5M). A S$50K clip is ~3.9% of ADV — manageable.",
      "Order flow is often one-sided (~32% avg absolute OFI) and short interest is elevated (3M avg ~10.9%); monitor both as execution risk flags."
    ],

    action_plan: {
      borderClass: "border-emerald-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            {
              title: "Protect tight spreads and two-way depth",
              bullets: [
                "Maintain on-screen liquidity through midday and closing windows where activity clusters.",
                "Avoid spread slippage during corporate updates by coordinating disclosures with peak liquidity times."
              ]
            },
            {
              title: "Track short interest and lending pool as risk overhangs",
              bullets: [
                "3M avg short ~10.9% with spikes >40%; lending pool ~12.4 days of ADV — monitor weekly.",
                "Escalate when short spikes align with one-sided OFI to avoid forcing size."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Lift turnover/velocity without sacrificing spread quality",
              bullets: [
                "Turnover ratio (~0.13%) is below peer median (~0.20%). Encourage repeat participation and broaden coverage.",
                "Promote consistent trading outside peak buckets to reduce concentration risk."
              ]
            },
            {
              title: "Deepen institutional participation",
              bullets: [
                "Institutional share by count is ~0.3%; improve block friendliness via predictable depth/impact and IR cadence.",
                "Offer clearer forward guidance to reduce event-driven liquidity gaps."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            {
              title: "Strengthen index visibility over time",
              bullets: [
                "Eligible for FTSE All-Share. For STI/iEdge Next 50, market-cap rank must improve (current #91).",
                "Focus on fundamentals and steady velocity; index outcomes will follow."
              ]
            },
            {
              title: "Embed a monthly liquidity dashboard",
              bullets: [
                "Track: spread, ADV, trades, HHI, OFI, short ratio, and lending pool days of ADV.",
                "Use these to pre-empt periods of higher execution risk."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      {
        title: "Daily Trades",
        value: "801",
        sub: "Frequent prints support execution and price discovery",
        interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.13%",
        sub: "Below peer median (~0.20%) — room to improve repeat turnover",
        interp: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "0.62%",
        sub: "Low day-to-day movement — reduces execution risk",
        interp: { text: "LOW", cls: "interpretation-good", icon: "✓" }
      }
    ],

    liq_insight:
      "AU8U ranks above average for liquidity: tight spread, solid depth, and steady trading. The main structural gap versus peers is lower turnover/velocity; the main tactical risks are one-sided flow and elevated shorts on specific days.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.7675", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.65%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Depth", value: "Strong", note: "Displayed size at multiple levels", color: "text-emerald-300" }
    ],

    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −0.33% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −0.60% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −1.19% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate one-sidedness" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Strong relationship" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Significant (short-horizon)" }
    ],

    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // INSIGHTS - EXECUTIVE NARRATIVE (CEO/CFO-friendly)
  // ============================================================================
  insights: {
    liquidity: {
      overall:
        "AU8U screens as an above-average liquidity mid-cap REIT on SGX. The composite liquidity score is 84.8/100 (rank 86 of 558), supported by ~S$1.29M ADV, ~801 trades/day, a tight spread (~0.63%), and low volatility (~0.62%).",
      strengths: [
        "Tight spread and frequent trades support lower crossing cost and stable execution",
        "Impact is contained even for 7-figure tickets (−0.60% for S$1.0M; −1.19% for S$2.5M)",
        "ADV is in line with the peer median (~S$1.30M), far above the market median (~S$17.7K)"
      ],
      concerns: [
        "Turnover ratio (~0.13%) trails the peer median (~0.20%), suggesting room to improve repeat liquidity",
        "Order flow is often one-sided (3M avg |OFI| ~31.9%), which can raise timing risk",
        "Short interest is elevated (3M avg ~10.9%) with episodic spikes >40%"
      ],
      peer_context:
        "Versus peers, AU8U’s spread and volatility are favorable; ADV and trades are solid. The focus should be on sustaining two-way interest and lifting turnover without compromising spread quality."
    },

    market_comparison: {
      adv: {
        insight: "ADV is ~S$1.29M/day — in line with the peer median.",
        vs_market: "Well above the market median (~S$17.7K).",
        vs_sector: "Above the sector median (~S$645.1K).",
        vs_peers: "In line with the peer median (~S$1.30M; −0.4% delta)."
      },
      spread: {
        insight: "Spread is tight at ~0.63%, supporting lower trading cost.",
        vs_market: "Much tighter than market median (~2.28%).",
        vs_sector: "Slightly tighter than sector median (~0.79%).",
        vs_peers: "Comparable to peer median (~0.62%)."
      },
      volatility: {
        insight: "Volatility is low (~0.62%), which reduces execution risk.",
        vs_market: "In line with market median (~0.63%).",
        vs_sector: "Slightly above sector median (~0.52%).",
        vs_peers: "Lower than peer median (~0.81%)."
      },
      trades: {
        insight: "Trade count (~801/day) is strong for the peer set.",
        vs_market: "Far above the market median (~9/day).",
        vs_sector: "Above the sector median (~331/day).",
        vs_peers: "Above the peer median (~490/day; +64%)."
      }
    },

    performance: {
      overall:
        "Liquidity does not appear to be the performance bottleneck. Near-term returns lag the market and peers; execution quality is strong, so focus shifts to fundamentals and sector positioning.",
      ytd: {
        stock: "Not available",
        market: "Not available",
        sector: "Not available",
        peers: "Not available",
        insight:
          "YTD view is not shown here; use 1–3M/6M/Last Year for context."
      },
      three_month: {
        stock: "−5.0%",
        market: "+9.3%",
        sector: "−0.9%",
        peers: "+4.0%",
        insight:
          "Over 3 months, AU8U trails the market and peers, while sector is slightly negative."
      },
      six_month: {
        stock: "+6.3%",
        market: "+16.2%",
        sector: "+3.2%",
        peers: "+8.4%",
        insight:
          "Over 6 months, AU8U is positive but still below the market and slightly below the peer group."
      },
      last_year: {
        stock: "+7.6%",
        market: "+22.7%",
        sector: "+6.1%",
        peers: "+15.4%"
      },
      conclusion:
        "Prioritize fundamentals and investor messaging. Maintain liquidity quality and avoid urgency on one-sided flow days — the trading setup supports efficient execution."
    },

    drivers: {
      overall:
        "Recent price movements are ~66.9% company-specific, ~30.4% sector, and ~2.7% market. The model explains ~26% of moves (R²≈0.26).",
      interpretation:
        "Sector conditions are meaningful; macro is marginal. Execution should be time-aware and sector-sensitive.",
      rolling_change:
        "Across rolling windows, company-specific share remained dominant (54–69%), with sector influence varying (19–39%).",
      beta:
        "Market beta is very low (~0.05). Sector beta is ~1.05. Stock leads the market by ~5 days at best correlation; sector is contemporaneous."
    },

    regime: {
      overall:
        "Two regimes: Low Vol (~20% of time; σ≈0.60%) and High Vol (~80%; σ≈0.94%). Current regime is High Vol.",
      current:
        "Current regime: High Vol. Execution risk is manageable given tight spreads, but avoid urgency during one-sided flow.",
      transitions:
        "From High Vol, the model shows ~82% probability of staying High Vol; from Low Vol, ~76% chance to switch to High Vol.",
      trading_implications:
        "Use measured participation rates and target deeper windows; small imbalances can move price in the dominant regime."
    },

    trader_composition: {
      overall:
        "Trading is predominantly retail by count (~96.7% in the last month). By notional, retail ~39%, mixed ~43%, institutional ~18%.",
      retail_heavy:
        "Average trade size is small (~S$1,966; median ~S$239), which supports steady prints but can increase noise.",
      institutional_gap:
        "Institutional share by count is ~0.3%. For larger tickets, staging across deeper windows remains prudent.",
      peer_comparison:
        "Peer REITs also skew retail by count; several have higher institutional notional share. AU8U’s notional mix (~18% institutional) is within peer ranges."
    },

    price_moving: {
      overall:
        "About 29.9% of trades moved the price (19,016 of 63,590). Positive movers average ~S$1.5K; negative movers ~S$1.9K.",
      interpretation:
        "A higher share of price-moving trades signals sensitivity to order timing and local book conditions — consistent with small ticket flow and tight spreads.",
      asymmetry:
        "Negative movers are larger on average than positive, so selling pressure can be more disruptive."
    },

    short_selling: {
      overall:
        "Short interest is elevated: 1M avg ~14.1%, 3M avg ~10.9%, 6M avg ~15.3% (peaks >47%). Short% vs return shows a moderate negative correlation (~−0.13).",
      level:
        "Recent 14-day average short ratio is ~17.3% with 4 elevated days; several days exceeded 35–47%.",
      correlation:
        "No strong causality detected (p≈0.087), but elevated short episodes often coincide with weaker days.",
      trend:
        "Short activity is ~56% above the 3-month average in the last 14 days. Lending pool ~21.97M shares (~S$16.8M), ~12.4 days of ADV — a potential liquidity overhang in stress.",
      peaks:
        "Recent spikes: 2026-01-23 (~47.3%) and 2026-02-03 (~43.1%). Treat spikes as execution risk flags."
    },

    execution: {
      overall:
        "Tight spreads (~0.65%) and solid depth support efficient execution. Estimated sell impact: ~−0.33% (S$100K), ~−0.60% (S$1.0M), ~−1.19% (S$2.5M).",
      concern:
        "One-sided OFI and elevated short episodes can widen realized cost; avoid urgency and favor liquidity peaks.",
      peer_context:
        "Capacity is competitive: a S$50K clip is ~3.9% of ADV; comparable REIT peers range ~0.4–10.3%."
    },

    intraday: {
      overall:
        "Trading is moderately concentrated (HHI ~0.18 over 6M). Auctions account for ~14–17%; strongest activity at 12:00 and into the close.",
      hhi_interpretation:
        "HHI in the ~0.15–0.20 range indicates moderate concentration — timing matters, but liquidity is accessible through the session.",
      best_times:
        "Midday (12:00) and the close (16:30–17:00) offer the best depth for larger clips.",
      peer_ranking:
        "AU8U is more evenly traded than several peers; a few larger names are even more spread through the day."
    },

    ofi: {
      overall:
        "Order flow is one-sided on average (3M avg |OFI| ~31.9%). OFI vs same-day returns is strongly positive (~0.596).",
      daily_vs_intraday:
        "Daily OFI is a useful risk flag. Intraday L2 OFI significantly predicts mid-price at ~3-tick lag (p≈1.7e−14), with a negative direction (buy pressure → price down), indicating contrarian microstructure at short horizons.",
      day_breakdown:
        "Over ~3 months: ~34.8% net buying days, ~57.6% net selling, ~7.6% balanced."
    },

    index: {
      overall:
        "Eligible for FTSE All-Share. Ineligible for STI (rank #91) and iEdge Next 50 (need rank ≤80; current #91). Velocity is healthy (~0.276%).",
      hsci: "N/A for Singapore market (HSCI is Hong Kong-specific).",
      hsi_gap: "N/A (HSI is Hong Kong-specific).",
      tech_gap: "N/A (Hang Seng TECH is Hong Kong-specific).",
      recommendation:
        "Maintain liquidity quality and build market-cap rank through fundamentals and investor demand. Revisit STI/iEdge eligibility as rank improves."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA USED BY CHARTS
  // ============================================================================
  series: {
    peers_liquidity: {
      labels: ["AU8U", "P40U", "J69U", "B61", "J85", "F17", "TS0U", "Z25", "O5RU"],
      scores: [
        84.76702508960572,
        81.72043010752688,
        94.44444444444444,
        82.07885304659499,
        83.51254480286738,
        85.66308243727599,
        78.49462365591397,
        89.24731182795699,
        86.91756272401435
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [1293435.75, 745921.75, 11321314.5, 1096634.5, 1021300.5, 1892571.0, 483880.5, 1500510.25, 2177543.0],
      total: 558
    },

    market_comparison: {
      sector_name: "REIT - Retail",
      sector_count: 8,
      market_count: 558,
      company: {
        volatility: 0.006172839506172867,
        adv: 1293435.75,
        spread_pct: 0.006349284551755943,
        turnover_ratio: 0.0013422214886624467,
        amihud: 2.7029939758724216e-09,
        trades: 801.0
      },
      market: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.010437121033779468,
          median: 0.006289556962025322,
          min: 0.0,
          max: 0.5,
          p5: 0.0,
          p95: 0.03373643115597038,
          count: 558
        },
        adv: {
          direction: "higher_is_better",
          mean: 2673021.4187543523,
          median: 17695.95,
          min: 0.0,
          max: 255788441.5,
          p5: 0.0,
          p95: 11374771.874999993,
          count: 558
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.09128179641506293,
          median: 0.02282923581743886,
          min: 0.00026240346042774555,
          max: 1.3043478260869563,
          p5: 0.003289571438979436,
          p95: 0.48398804187238226,
          count: 554
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.00339542125703257,
          median: 0.000360388084888301,
          min: 0.0,
          max: 0.5784061696658098,
          p5: 0.0,
          p95: 0.010818968366183915,
          count: 551
        },
        amihud: {
          direction: "lower_is_better",
          mean: 0.00014844643601114735,
          median: 1.0817102271375183e-07,
          min: 0.0,
          max: 0.041666666666666664,
          p5: 0.0,
          p95: 0.00010014929450411983,
          count: 549
        },
        trades: {
          direction: "higher_is_better",
          mean: 384.5967741935484,
          median: 9.0,
          min: 0.0,
          max: 10945.0,
          p5: 0.0,
          p95: 2166.8499999999995,
          count: 558
        }
      },
      sector: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.004393846861100864,
          median: 0.0052050638208829825,
          min: 0.0,
          max: 0.00909090909090915,
          p5: 0.0,
          p95: 0.008850267379679172,
          count: 8
        },
        adv: {
          direction: "higher_is_better",
          mean: 9609660.176943384,
          median: 645105.5,
          min: 455.0,
          max: 62778080.0,
          p5: 28801.120441476054,
          p95: 44768212.07499997,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.0318942433290975,
          median: 0.007875267242695421,
          min: 0.004208170582826356,
          max: 0.13333333333333333,
          p5: 0.004299230925387064,
          p95: 0.11518288261128172,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0028791374023750247,
          median: 0.0015435876645298557,
          min: 1.924547717958787e-06,
          max: 0.007405386254036661,
          p5: 7.107995586540914e-05,
          p95: 0.0071898190590616055,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 2.010790792420792e-06,
          median: 3.830003466501808e-09,
          min: 0.0,
          max: 1.605361908775309e-05,
          p5: 0.0,
          p95: 1.044028004843533e-05,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 1128.1875,
          median: 331.25,
          min: 1.5,
          max: 5372.0,
          p5: 5.525,
          p95: 4232.2249999999985,
          count: 8
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 2529959.5,
          median: 1298572.375,
          min: 483880.5,
          max: 11321314.5,
          p5: 575594.9375,
          p95: 8120994.474999995,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 749.0,
          median: 489.5,
          min: 268.5,
          max: 2115.5,
          p5: 276.2,
          p95: 1755.1749999999995,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.008696239336644332,
          median: 0.008100316149851738,
          min: 0.0,
          max: 0.014285714285714235,
          p5: 0.002046783625731014,
          p95: 0.014080234833659477,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.006730499969300161,
          median: 0.006237551988661101,
          min: 0.00256938210289596,
          max: 0.013605442176870763,
          p5: 0.003234018413432306,
          p95: 0.011807655473557416,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.002572338926625232,
          median: 0.002034910168447059,
          min: 0.0008261971175438891,
          max: 0.006789479982679359,
          p5: 0.0008598226508395737,
          p95: 0.005579527049457879,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 7.244810304169424e-09,
          median: 6.606815688912721e-09,
          min: 0.0,
          max: 2.0096059162798305e-08,
          p5: 1.0929605341131961e-09,
          p95: 1.608276913114207e-08,
          count: 8
        }
      }
    },

    returns: [
      { horizon: "1M", stock: -0.037735849056603765, market: 0.04142633470475743, sector: -0.010282938389016616, peers: 0.005702605706661368 },
      { horizon: "3M", stock: -0.04968944099378947, market: 0.0929174819557832, sector: -0.008546315811294947, peers: 0.03985649290640625 },
      { horizon: "6M", stock: 0.06249999999999978, market: 0.16183690923560534, sector: 0.031564494971833, peers: 0.08371591397287337 },
      { horizon: "LAST_YEAR", stock: 0.07638888888888795, market: 0.22668968242253462, sector: 0.06131041377748181, peers: 0.15410054385795058 }
    ],

    drivers: {
      // Stored as percentages (0-100) for the UI pie
      share_market: 2.700140907619723,
      share_sector: 30.397882928574193,
      share_idio: 66.90197616380608,
      beta_market: 0.046518167058943696,
      beta_sector: 1.0484042770300552,
      r_squared: 26.32216798011815,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.43111427210833586,
          -0.2968959701080987,
          0.2751142879040712,
          -0.002778434240857005,
          0.06561590894241584,
          0.1684863916038084,
          -0.23151810268223844,
          0.1699746940562329,
          -0.048030237612728344,
          0.14857121096674097,
          -0.017573674570756325
        ],
        corr_sector: [
          0.25137925885321377,
          -0.1296281049447488,
          0.07255214308606873,
          0.09585882329987086,
          -0.2817030687610356,
          0.5120593668958259,
          -0.14543022537809186,
          0.17725378239012152,
          -0.011342467918166736,
          0.006369025616674115,
          0.093172844651892
        ],
        best: { market: -5, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-01-28 to 2025-04-01",
          shares: { share_market: 0.12750570910523168, share_sector: 0.3333732184316674, share_company: 0.5391210724631009 },
          regression: { r_squared: 0.2644970054435142 }
        },
        p2: {
          valid: true,
          period_label: "2025-04-01 to 2025-06-03",
          shares: { share_market: 0.08143704176495081, share_sector: 0.22583022017908208, share_company: 0.6927327380559671 },
          regression: { r_squared: 0.160459292304986 }
        },
        p3: {
          valid: true,
          period_label: "2025-06-03 to 2025-08-05",
          shares: { share_market: 0.12258675507904755, share_sector: 0.2729546145097826, share_company: 0.6044586304111699 },
          regression: { r_squared: 0.5278795997982826 }
        },
        p4: {
          valid: true,
          period_label: "2025-08-05 to 2025-10-07",
          shares: { share_market: 0.12761263446394952, share_sector: 0.2252995330675625, share_company: 0.6470878324684881 },
          regression: { r_squared: 0.21220925301676774 }
        },
        p5: {
          valid: true,
          period_label: "2025-10-07 to 2025-12-09",
          shares: { share_market: 0.04058884777557457, share_sector: 0.39290824339227587, share_company: 0.5665029088321496 },
          regression: { r_squared: 0.40071328622369917 }
        },
        p6: {
          valid: true,
          period_label: "2025-12-09 to 2026-02-10",
          shares: { share_market: 0.02700140907619723, share_sector: 0.30397882928574194, share_company: 0.6690197616380608 },
          regression: { r_squared: 0.2632216798011815 }
        }
      },
      // Legacy fallback (not used when rolling_windows exists)
      rolling: {
        ordered: [
          "2025-01-28 to 2025-04-01",
          "2025-04-01 to 2025-06-03",
          "2025-06-03 to 2025-08-05",
          "2025-08-05 to 2025-10-07",
          "2025-10-07 to 2025-12-09",
          "2025-12-09 to 2026-02-10"
        ],
        market: [12.8, 8.1, 12.3, 12.8, 4.1, 2.7],
        sector: [33.3, 22.6, 27.3, 22.5, 39.3, 30.4],
        idio: [53.9, 69.3, 60.4, 64.7, 56.7, 66.9]
      },
      // UI expects % units for mean_ret/volatility and pct_time, and transitions as %.
      regime: {
        n_regimes: 2,
        labels: ["Low Vol", "High Vol"],
        pct_time: [19.84126984126984, 80.15873015873017],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: -0.6329113924050667, volatility: 0.5976779811330757, n_days: 25, pct_time: 19.84126984126984 },
          { id: 1, label: "High Vol", mean_ret: 0.0, volatility: 0.9383544303797517, n_days: 101, pct_time: 80.15873015873017 }
        ],
        transitions: [
          [23.926922029188347, 76.07307797081165],
          [17.672895824750247, 82.32710417524975]
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.765, quantity: 757300.0, value: 579334.5 },
        { level: 2, price: 0.76, quantity: 1321700.0, value: 1004492.0 },
        { level: 3, price: 0.755, quantity: 604000.0, value: 456020.0 },
        { level: 4, price: 0.75, quantity: 692100.0, value: 519075.0 },
        { level: 5, price: 0.745, quantity: 562800.0, value: 419286.0 },
        { level: 6, price: 0.74, quantity: 537400.0, value: 397676.0 },
        { level: 7, price: 0.735, quantity: 486900.0, value: 357871.5 },
        { level: 8, price: 0.73, quantity: 512800.0, value: 374344.0 },
        { level: 9, price: 0.725, quantity: 478900.0, value: 347202.5 },
        { level: 10, price: 0.72, quantity: 496500.0, value: 357480.0 }
      ],
      asks: [
        { level: 1, price: 0.77, quantity: 313200.0, value: 241164.0 },
        { level: 2, price: 0.775, quantity: 748100.0, value: 579777.5 },
        { level: 3, price: 0.78, quantity: 796600.0, value: 621348.0 },
        { level: 4, price: 0.785, quantity: 819200.0, value: 643072.0 },
        { level: 5, price: 0.79, quantity: 898600.0, value: 709894.0 },
        { level: 6, price: 0.795, quantity: 924900.0, value: 735295.5 },
        { level: 7, price: 0.8, quantity: 1160000.0, value: 928000.0 },
        { level: 8, price: 0.805, quantity: 1221900.0, value: 983629.5 },
        { level: 9, price: 0.81, quantity: 721400.0, value: 584334.0 },
        { level: 10, price: 0.815, quantity: 713100.0, value: 581176.5 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 3.9,
      peers: [
        { ticker: "J69U", pct: 0.4 },
        { ticker: "O5RU", pct: 2.3 },
        { ticker: "F17", pct: 2.6 },
        { ticker: "Z25", pct: 3.3 },
        { ticker: "B61", pct: 4.6 },
        { ticker: "J85", pct: 4.9 },
        { ticker: "P40U", pct: 6.7 },
        { ticker: "TS0U", pct: 10.3 }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 13493,
      first_trade_date: "2026-01-12",
      last_trade_date: "2026-02-09",
      period_days: 28,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.9670199362632476,
        mixed_pct: 0.029941451122804417,
        instit_pct: 0.003038612613947973,
        retail_qty_pct: 0.3905492489666591,
        mixed_qty_pct: 0.4294945861276221,
        instit_qty_pct: 0.1799561649057188,
        retail_notional_pct: 0.3904126486872973,
        mixed_notional_pct: 0.42890071499806737,
        instit_notional_pct: 0.18068663631463533
      },
      trade_size: { avg: 1966.0027051063514, median: 238.5 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-02", n_trades: 5130, retail_pct: 0.967056530214425, mixed_pct: 0.030994152046783626, instit_pct: 0.001949317738791423, avg_trade_size: 1644.7888888888888, retail_qty_pct: 0.3889945340131367, mixed_qty_pct: 0.48817233935051213, instit_qty_pct: 0.12283312663635111, total_quantity: 10885500.0 },
          { month: "2026-01", n_trades: 11589, retail_pct: 0.9692812149452067, mixed_pct: 0.027180947450168264, instit_pct: 0.0035378376046250755, avg_trade_size: 2042.1396151522995, retail_qty_pct: 0.4181704037680994, mixed_qty_pct: 0.3782165985718554, instit_qty_pct: 0.20361299766004518, total_quantity: 29786900.0 },
          { month: "2025-12", n_trades: 10459, retail_pct: 0.9751410268668133, mixed_pct: 0.022851132995506264, instit_pct: 0.0020078401376804667, avg_trade_size: 1622.0610957070467, retail_qty_pct: 0.48542843917708145, mixed_qty_pct: 0.38273319309437714, instit_qty_pct: 0.13183836772854138, total_quantity: 21819900.0 },
          { month: "2025-11", n_trades: 9288, retail_pct: 0.9513350559862188, mixed_pct: 0.044142980189491816, instit_pct: 0.004521963824289405, avg_trade_size: 2729.479274332472, retail_qty_pct: 0.3119928455060835, mixed_qty_pct: 0.48689020290870205, instit_qty_pct: 0.20111695158521448, total_quantity: 31979900.0 },
          { month: "2025-10", n_trades: 10888, retail_pct: 0.940852314474651, mixed_pct: 0.0528104335047759, instit_pct: 0.006337252020573108, avg_trade_size: 3084.127387950037, retail_qty_pct: 0.3225163961246817, mixed_qty_pct: 0.4734129072949121, instit_qty_pct: 0.20407069658040622, total_quantity: 42174600.0 },
          { month: "2025-09", n_trades: 10743, retail_pct: 0.9300009308386856, mixed_pct: 0.06152843712184678, instit_pct: 0.00847063203946756, avg_trade_size: 3866.6521921251046, retail_qty_pct: 0.3044040574174192, mixed_qty_pct: 0.4510248813829507, instit_qty_pct: 0.24457106119963004, total_quantity: 53196400.0 }
        ]
      },
      peer_comparison: [
        { ticker: "AU8U", currency: "SGD", is_target: true, retail_pct: 0.9670199362632476, mixed_pct: 0.029941451122804417, instit_pct: 0.003038612613947973, retail_qty_pct: 0.3905492489666591, mixed_qty_pct: 0.4294945861276221, instit_qty_pct: 0.1799561649057188, retail_notional_pct: 0.3904126486872973, mixed_notional_pct: 0.42890071499806737, instit_notional_pct: 0.18068663631463533, avg_trade_size: 1966.0027051063514, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "P40U", currency: "SGD", is_target: false, retail_pct: 0.9756547399483585, mixed_pct: 0.021209885651051273, instit_pct: 0.003135374400590188, retail_qty_pct: 0.388189013410734, mixed_qty_pct: 0.3977196377220565, instit_qty_pct: 0.21409134886720954, retail_notional_pct: 0.38805724861768626, mixed_notional_pct: 0.39879518117321366, instit_notional_pct: 0.2131475702091001, avg_trade_size: 1603.6977591294726, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "O5RU", currency: "SGD", is_target: false, retail_pct: 0.9631161869246009, mixed_pct: 0.02767742687332479, instit_pct: 0.00920638620207435, retail_qty_pct: 0.2640235607883081, mixed_qty_pct: 0.28745702970562415, instit_qty_pct: 0.4485194095060678, retail_notional_pct: 0.2648631516073431, mixed_notional_pct: 0.28736767221696946, instit_notional_pct: 0.44776917617568746, avg_trade_size: 2639.3769956881483, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "J85", currency: "SGD", is_target: false, retail_pct: 0.9434047013025902, mixed_pct: 0.04686330288965414, instit_pct: 0.009731995807755653, retail_qty_pct: 0.30606741097711015, mixed_qty_pct: 0.3584253145457814, instit_qty_pct: 0.3355072744771084, retail_notional_pct: 0.30686284549931275, mixed_notional_pct: 0.35851715446204224, instit_notional_pct: 0.334620000038645, avg_trade_size: 3641.8570145231324, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "TS0U", currency: "SGD", is_target: false, retail_pct: 0.9418063314711359, mixed_pct: 0.048417132216014895, instit_pct: 0.009776536312849162, retail_qty_pct: 0.22540291272973528, mixed_qty_pct: 0.4269002076268769, instit_qty_pct: 0.3476968796433878, retail_notional_pct: 0.22673517752902755, mixed_notional_pct: 0.42654803864380514, instit_notional_pct: 0.3467167838271673, avg_trade_size: 3416.88489292365, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "J69U", currency: "SGD", is_target: false, retail_pct: 0.9318700764927503, mixed_pct: 0.05123301746774746, instit_pct: 0.016896906039502228, retail_qty_pct: 0.2639472911062349, mixed_qty_pct: 0.2699850347505945, instit_qty_pct: 0.46606767414317063, retail_notional_pct: 0.2638378207972094, mixed_notional_pct: 0.2699086767082455, instit_notional_pct: 0.46625350249454517, avg_trade_size: 5617.937863911406, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "Z25", currency: "SGD", is_target: false, retail_pct: 0.9209437720239008, mixed_pct: 0.07484296001225678, instit_pct: 0.0042132679638425, retail_qty_pct: 0.3420797114495383, mixed_qty_pct: 0.5445635966633275, instit_qty_pct: 0.11335669188713418, retail_notional_pct: 0.3413369172721325, mixed_notional_pct: 0.5439898071128763, instit_notional_pct: 0.11467327561499124, avg_trade_size: 3591.427685000766, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "F17", currency: "SGD", is_target: false, retail_pct: 0.8508789654475651, mixed_pct: 0.1319458476459891, instit_pct: 0.017175186906445747, retail_qty_pct: 0.27327667733284966, mixed_qty_pct: 0.4908409011413248, instit_qty_pct: 0.23588242152582556, retail_notional_pct: 0.2751963304877332, mixed_notional_pct: 0.4910101975183263, instit_notional_pct: 0.23379347199394052, avg_trade_size: 7791.803798747222, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "B61", currency: "SGD", is_target: false, retail_pct: 0.8147429679922406, mixed_pct: 0.1713546718396379, instit_pct: 0.013902360168121564, retail_qty_pct: 0.3072936214322735, mixed_qty_pct: 0.515700677354208, instit_qty_pct: 0.1770057012135185, retail_notional_pct: 0.3067318604034072, mixed_notional_pct: 0.5151729355653061, instit_notional_pct: 0.17809520403128667, avg_trade_size: 9238.184933721306, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },

    price_moving_trades: {
      total_trades: 63590,
      price_moving_trades: 19016,
      pct_price_moving: 29.904072967447714,
      all_movers: { count: 19016, avg_size: 1679.0912126630205, median_size: 316.0, retail_count: 18580, mixed_count: 394, institutional_count: 42, retail_pct: 97.70719394194363, mixed_pct: 2.0719394194362644, instit_pct: 0.22086663862010938 },
      positive_movers: { count: 9511, avg_size: 1502.1403637892965, median_size: 302.0, retail_count: 9313, mixed_count: 178, institutional_count: 20, retail_pct: 97.91819997897171, mixed_pct: 1.8715171906213857, instit_pct: 0.2102828304068973 },
      negative_movers: { count: 9505, avg_size: 1856.1537611783272, median_size: 320.0, retail_count: 9267, mixed_count: 216, institutional_count: 22, retail_pct: 97.49605470804839, mixed_pct: 2.272488164124145, instit_pct: 0.23145712782745922 }
    },

    short_selling: {
      data_available: true,
      security_name: "CapLand China T",
      mapping: { ticker_to_security: "CapLand China T", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.14111544091744382, max_short_ratio: 0.47345815437221134, interpretation: "Elevated short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.10897533862988797, max_short_ratio: 0.47345815437221134, interpretation: "Elevated short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.15321404217651227, max_short_ratio: 0.5314950980392157, interpretation: "Elevated short interest" } }
      },
      correlation: { valid: true, correlation: -0.1253407096470395, interpretation: "Moderate negative - shorts somewhat predict drops" },
      peaks: [
        { date: "2026-01-23", short_ratio: 0.47345815437221134, return_pct: -1.851851851851849 },
        { date: "2026-02-03", short_ratio: 0.4306044807665211, return_pct: 0.0 },
        { date: "2025-10-30", short_ratio: 0.36664880032789987, return_pct: -3.0674846625766805 },
        { date: "2025-10-07", short_ratio: 0.3577340920848422, return_pct: 0.0 },
        { date: "2026-02-02", short_ratio: 0.35185648727576135, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-02", avg_short_ratio: 0.15671425562567778 },
          { month: "2026-01", avg_short_ratio: 0.127317929259684 },
          { month: "2025-12", avg_short_ratio: 0.07442883932256616 },
          { month: "2025-11", avg_short_ratio: 0.1384166558919106 },
          { month: "2025-10", avg_short_ratio: 0.14829823059843739 },
          { month: "2025-09", avg_short_ratio: 0.2117736184364494 },
          { month: "2025-08", avg_short_ratio: 0.2231745757415432 },
          { month: "2025-07", avg_short_ratio: 0.21441485979823377 },
          { month: "2025-06", avg_short_ratio: 0.18827938478479642 },
          { month: "2025-05", avg_short_ratio: 0.21699080051250058 },
          { month: "2025-04", avg_short_ratio: 0.22433090294866434 },
          { month: "2025-03", avg_short_ratio: 0.17808311719185627 }
        ],
        mom_change: [
          { month: "2026-02", avg_short_ratio: 0.15671425562567778, change_pct: null },
          { month: "2026-01", avg_short_ratio: 0.127317929259684, change_pct: -18.7579146827643 },
          { month: "2025-12", avg_short_ratio: 0.07442883932256616, change_pct: -41.54095989830513 },
          { month: "2025-11", avg_short_ratio: 0.1384166558919106, change_pct: 85.97180495053601 },
          { month: "2025-10", avg_short_ratio: 0.14829823059843739, change_pct: 7.1390069662160425 },
          { month: "2025-09", avg_short_ratio: 0.2117736184364494, change_pct: 42.80252541238402 },
          { month: "2025-08", avg_short_ratio: 0.2231745757415432, change_pct: 5.383558815903731 },
          { month: "2025-07", avg_short_ratio: 0.21441485979823377, change_pct: -3.92505101183837 },
          { month: "2025-06", avg_short_ratio: 0.18827938478479642, change_pct: -12.189208825372951 },
          { month: "2025-05", avg_short_ratio: 0.21699080051250058, change_pct: 15.249367720486951 },
          { month: "2025-04", avg_short_ratio: 0.22433090294866434, change_pct: 3.382679090001746 },
          { month: "2025-03", avg_short_ratio: 0.17808311719185627, change_pct: -20.615878217809062 }
        ],
        interpretation: "Shorts building significantly (+23% MoM)"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-02-10", short_ratio: 0.0, short_vol: 0, total_vol: 2532200, close: 0.765, return: -0.012903225806451646 },
          { date: "2026-02-09", short_ratio: 0.0, short_vol: 0, total_vol: 2989000, close: 0.775, return: 0.013071895424836555 },
          { date: "2026-02-06", short_ratio: 0.0, short_vol: 0, total_vol: 3213200, close: 0.765, return: -0.019230769230769273 },
          { date: "2026-02-05", short_ratio: 0.1997414603572548, short_vol: 509900, total_vol: 2552800, close: 0.78, return: -0.006369426751592355 },
          { date: "2026-02-04", short_ratio: 0.11479736098020735, short_vol: 121800, total_vol: 1061000, close: 0.785, return: 0.0 },
          { date: "2026-02-03", short_ratio: 0.4306044807665211, short_vol: 611200, total_vol: 1419400, close: 0.785, return: 0.0 },
          { date: "2026-02-02", short_ratio: 0.35185648727576135, short_vol: 421700, total_vol: 1198500, close: 0.785, return: 0.0 },
          { date: "2026-01-30", short_ratio: 0.18481971079252776, short_vol: 297800, total_vol: 1611300, close: 0.785, return: -0.006329113924050667 },
          { date: "2026-01-29", short_ratio: 0.1430330897446424, short_vol: 174200, total_vol: 1217900, close: 0.79, return: 0.0 },
          { date: "2026-01-28", short_ratio: 0.28801149582592034, short_vol: 841800, total_vol: 2922800, close: 0.79, return: 0.0 },
          { date: "2026-01-27", short_ratio: 0.04137725739233975, short_vol: 83400, total_vol: 2015600, close: 0.79, return: 0.0 },
          { date: "2026-01-26", short_ratio: 0.17803780378037803, short_vol: 395600, total_vol: 2222000, close: 0.79, return: -0.0062893081761006275 },
          { date: "2026-01-23", short_ratio: 0.47345815437221134, short_vol: 1135400, total_vol: 2398100, close: 0.795, return: -0.01851851851851849 },
          { date: "2026-01-22", short_ratio: 0.018576615319538935, short_vol: 52700, total_vol: 2836900, close: 0.81, return: 0.006211180124223503 },
          { date: "2026-01-21", short_ratio: 0.03741652181868082, short_vol: 40900, total_vol: 1093100, close: 0.805, return: -0.006172839506172867 },
          { date: "2026-01-20", short_ratio: 0.14747870841247473, short_vol: 240700, total_vol: 1632100, close: 0.81, return: 0.006211180124223503 },
          { date: "2026-01-19", short_ratio: 0.0897573545200773, short_vol: 83600, total_vol: 931400, close: 0.805, return: 0.0 },
          { date: "2026-01-16", short_ratio: 0.0630268968285829, short_vol: 47100, total_vol: 747300, close: 0.805, return: 0.0 },
          { date: "2026-01-15", short_ratio: 0.11967516740276393, short_vol: 84000, total_vol: 701900, close: 0.805, return: 0.0 },
          { date: "2026-01-14", short_ratio: 0.14646782888748863, short_vol: 209200, total_vol: 1428300, close: 0.805, return: 0.0 },
          { date: "2026-01-13", short_ratio: 0.03534742264841883, short_vol: 113900, total_vol: 3222300, close: 0.805, return: 0.012578616352201255 },
          { date: "2026-01-12", short_ratio: 0.03993680884676146, short_vol: 63200, total_vol: 1582500, close: 0.795, return: 0.0 },
          { date: "2026-01-09", short_ratio: 0.14223451512865645, short_vol: 169700, total_vol: 1193100, close: 0.795, return: 0.006329113924050667 },
          { date: "2026-01-08", short_ratio: 0.13090676883780333, short_vol: 164000, total_vol: 1252800, close: 0.79, return: 0.006369426751592355 },
          { date: "2026-01-07", short_ratio: 0.029084734622336638, short_vol: 53100, total_vol: 1825700, close: 0.785, return: 0.0 },
          { date: "2026-01-06", short_ratio: 0.170118727792703, short_vol: 196300, total_vol: 1153900, close: 0.785, return: 0.0 },
          { date: "2026-01-05", short_ratio: 0.16373230503830738, short_vol: 322700, total_vol: 1970900, close: 0.785, return: 0.0 },
          { date: "2026-01-02", short_ratio: 0.031178626440749986, short_vol: 58700, total_vol: 1882700, close: 0.785, return: 0.012903225806451646 },
          { date: "2025-12-31", short_ratio: 0.009781635324102776, short_vol: 14200, total_vol: 1451700, close: 0.775, return: 0.006493506493506551 },
          { date: "2025-12-30", short_ratio: 0.16218883649522975, short_vol: 147900, total_vol: 911900, close: 0.77, return: -0.006451612903225823 },
          { date: "2025-12-29", short_ratio: 0.10156304759234597, short_vol: 144900, total_vol: 1426700, close: 0.775, return: 0.0 },
          { date: "2025-12-26", short_ratio: 0.0264911980857973, short_vol: 31000, total_vol: 1170200, close: 0.775, return: 0.006493506493506551 },
          { date: "2025-12-24", short_ratio: 0.02917053543794491, short_vol: 37700, total_vol: 1292400, close: 0.77, return: 0.0 },
          { date: "2025-12-23", short_ratio: 0.054744668362355704, short_vol: 139900, total_vol: 2555500, close: 0.77, return: 0.0 },
          { date: "2025-12-22", short_ratio: 0.05211267605633803, short_vol: 70300, total_vol: 1349000, close: 0.77, return: -0.006451612903225823 },
          { date: "2025-12-19", short_ratio: 0.014791601378878095, short_vol: 23600, total_vol: 1595500, close: 0.775, return: -0.0064102564102563875 },
          { date: "2025-12-18", short_ratio: 0.03508771929824561, short_vol: 23400, total_vol: 666900, close: 0.78, return: 0.006451612903225712 },
          { date: "2025-12-17", short_ratio: 0.08852270549913777, short_vol: 46200, total_vol: 521900, close: 0.775, return: -0.0064102564102563875 },
          { date: "2025-12-16", short_ratio: 0.08254963427377221, short_vol: 118500, total_vol: 1435500, close: 0.78, return: 0.0 },
          { date: "2025-12-15", short_ratio: 0.04229876851686597, short_vol: 47400, total_vol: 1120600, close: 0.78, return: 0.0 },
          { date: "2025-12-12", short_ratio: 0.07395069953364423, short_vol: 44400, total_vol: 600400, close: 0.78, return: -0.006369426751592355 },
          { date: "2025-12-11", short_ratio: 0.12357803999152123, short_vol: 174900, total_vol: 1415300, close: 0.785, return: 0.0064102564102563875 },
          { date: "2025-12-10", short_ratio: 0.11134220743205768, short_vol: 80300, total_vol: 721200, close: 0.78, return: 0.0 },
          { date: "2025-12-09", short_ratio: 0.05959727184150698, short_vol: 73400, total_vol: 1231600, close: 0.78, return: -0.006369426751592355 },
          { date: "2025-12-08", short_ratio: 0.1823004853820973, short_vol: 161500, total_vol: 885900, close: 0.785, return: -0.006329113924050667 },
          { date: "2025-12-05", short_ratio: 0.11973018549747048, short_vol: 92300, total_vol: 770900, close: 0.79, return: 0.012820512820512775 },
          { date: "2025-12-04", short_ratio: 0.11076806754457816, short_vol: 175800, total_vol: 1587100, close: 0.78, return: -0.006369426751592355 },
          { date: "2025-12-03", short_ratio: 0.030903383327520056, short_vol: 44300, total_vol: 1433500, close: 0.785, return: -0.006329113924050667 },
          { date: "2025-12-02", short_ratio: 0.06148065920929041, short_vol: 72000, total_vol: 1171100, close: 0.79, return: 0.006369426751592355 },
          { date: "2025-12-01", short_ratio: 0.064480439015755, short_vol: 145700, total_vol: 2259600, close: 0.785, return: -0.006329113924050667 },
          { date: "2025-11-28", short_ratio: 0.18918547055586132, short_vol: 137500, total_vol: 726800, close: 0.79, return: -0.0062893081761006275 },
          { date: "2025-11-27", short_ratio: 0.018335890130761926, short_vol: 25100, total_vol: 1368900, close: 0.795, return: 0.0 },
          { date: "2025-11-26", short_ratio: 0.021662245800176835, short_vol: 14700, total_vol: 678600, close: 0.795, return: 0.0 },
          { date: "2025-11-25", short_ratio: 0.10465470033465166, short_vol: 137600, total_vol: 1314800, close: 0.795, return: 0.006329113924050667 },
          { date: "2025-11-24", short_ratio: 0.22647664835164835, short_vol: 263800, total_vol: 1164800, close: 0.79, return: 0.0 },
          { date: "2025-11-21", short_ratio: 0.24997653243217874, short_vol: 532600, total_vol: 2130600, close: 0.79, return: -0.0062893081761006275 },
          { date: "2025-11-20", short_ratio: 0.05980582524271845, short_vol: 46200, total_vol: 772500, close: 0.795, return: 0.0 },
          { date: "2025-11-19", short_ratio: 0.13604471399690807, short_vol: 114400, total_vol: 840900, close: 0.795, return: 0.01273885350318471 },
          { date: "2025-11-18", short_ratio: 0.07387026846756711, short_vol: 88600, total_vol: 1199400, close: 0.785, return: -0.018750000000000044 },
          { date: "2025-11-17", short_ratio: 0.12168892913742359, short_vol: 107500, total_vol: 883400, close: 0.8, return: 0.0062893081761006275 },
          { date: "2025-11-14", short_ratio: 0.14841237942122187, short_vol: 147700, total_vol: 995200, close: 0.795, return: -0.012422360248447228 }
        ]
      },
      peer_comparison: [
        { ticker: "AU8U", avg_short_ratio: 0.10897533862988797, max_short_ratio: 0.47345815437221134, is_target: true },
        { ticker: "B61", avg_short_ratio: 0.008638923485712017, max_short_ratio: 0.4336283185840708, is_target: false },
        { ticker: "F17", avg_short_ratio: 0.009521574099648886, max_short_ratio: 0.34122581518062506, is_target: false },
        { ticker: "P40U", avg_short_ratio: 0.022975724728469222, max_short_ratio: 0.33623348017621146, is_target: false },
        { ticker: "J69U", avg_short_ratio: 0.044847858013528634, max_short_ratio: 0.44492177011887035, is_target: false },
        { ticker: "J85", avg_short_ratio: 0.052887143591814414, max_short_ratio: 0.49868519909842224, is_target: false },
        { ticker: "O5RU", avg_short_ratio: 0.07665499723892669, max_short_ratio: 0.6013429609529504, is_target: false },
        { ticker: "Z25", avg_short_ratio: 0.0806376810211667, max_short_ratio: 0.5945742904841402, is_target: false },
        { ticker: "TS0U", avg_short_ratio: 0.1124571287055341, max_short_ratio: 0.7360521098838856, is_target: false }
      ],
      sbl_pool: {
        valid: true,
        lending_pool: 21972861,
        lending_pool_value: 16809238.665,
        latest_price: 0.765,
        lending_rate_pct: 0.35,
        borrowing_rate_pct: 0.5,
        pool_as_pct_adv: 1239.7166005608183,
        days_to_liquidate: 12.397166005608183,
        estimated_impact_pct: 0.05,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Significant price impact if entire pool sold",
        timestamp: ""
      }
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.03048973318846248, continuous: 0.8547344619651769, closing: 0.10950234493782345, auctions: 0.1452655380348231, other: 0.0 },
        "3M": { opening: 0.02519395229773745, continuous: 0.8279469273988117, closing: 0.13177387503471058, auctions: 0.17205307260118832, other: 0.0 },
        "6M": { opening: 0.0200862847326449, continuous: 0.854463967687727, closing: 0.11063924064137871, auctions: 0.1419747541204358, other: 0.0035612781918371423 }
      },
      hhi: { "1M": 0.18185416536405433, "3M": 0.18103788033886523, "6M": 0.1755209488708509 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0154 },
        { time: "09:00", avg_share: 0.0876 },
        { time: "09:30", avg_share: 0.0374 },
        { time: "10:00", avg_share: 0.0584 },
        { time: "10:30", avg_share: 0.0422 },
        { time: "11:00", avg_share: 0.0383 },
        { time: "11:30", avg_share: 0.0384 },
        { time: "12:00", avg_share: 0.1421 },
        { time: "12:30", avg_share: 0.0089 },
        { time: "13:00", avg_share: 0.0316 },
        { time: "13:30", avg_share: 0.0258 },
        { time: "14:00", avg_share: 0.0433 },
        { time: "14:30", avg_share: 0.035 },
        { time: "15:00", avg_share: 0.0344 },
        { time: "15:30", avg_share: 0.0388 },
        { time: "16:00", avg_share: 0.0564 },
        { time: "16:30", avg_share: 0.1095 },
        { time: "17:00", avg_share: 0.1565 }
      ],
      peers_hhi_rows: [
        { ticker: "AU8U", auctions_pct: 13.024303060334669, hhi: 0.1764658359007698, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "P40U", auctions_pct: 23.00805201148659, hhi: 0.20868014675094582, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "J69U", auctions_pct: 16.76023618649856, hhi: 0.1435251102359515, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "B61", auctions_pct: 4.242177207697065, hhi: 0.23546835886251483, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "J85", auctions_pct: 18.617282301362028, hhi: 0.1786955625284006, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "F17", auctions_pct: 5.268235714385712, hhi: 0.2924614732596319, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "TS0U", auctions_pct: 19.95759974627921, hhi: 0.2422826330835562, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "Z25", auctions_pct: 5.98026574467193, hhi: 0.15823927414480032, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "O5RU", auctions_pct: 19.327350325350295, hhi: 0.21102841811627657, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "31.9%", note_suffix: " - 3-month average absolute OFI (one-sidedness)." },
        { value: "0.596", note_suffix: " - Correlation between daily OFI and same-day returns (strong positive)." },
        { value: "Significant (lag 3)", note_suffix: " - L2 OFI Granger-causality significant (p≈1.7e−14), direction negative." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−7.4%", avg_abs: "32.6%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "−7.0%", avg_abs: "31.9%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "−4.9%", avg_abs: "29.5%", interp: { text: "One-sided", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.596",
      pie: { net_buy_days: 34.85, net_sell_days: 57.58, balanced_days: 7.58 },
      l2_compact_text:
        "Over the last 7 days we analyzed 2,566 valid L2 snapshots (top 4 levels). Granger causality is significant (p≈1.7e−14) at lag 3. Direction: negative (buy pressure → price down), suggesting contrarian/mean-reversion microstructure — avoid urgency during extreme imbalances.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-12-12", ofi: "−82.6%", direction: "SELL pressure", return: "−0.64%" },
        { date: "2025-11-19", ofi: "+73.6%", direction: "BUY pressure", return: "+1.27%" },
        { date: "2025-11-28", ofi: "−66.9%", direction: "SELL pressure", return: "−0.63%" },
        { date: "2025-11-18", ofi: "−66.8%", direction: "SELL pressure", return: "−1.88%" },
        { date: "2026-01-21", ofi: "−66.2%", direction: "SELL pressure", return: "−0.62%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#91", sub: "of 562 stocks" },
        { title: "Free Float", value: "99.93%", sub: "Float mcap ~ S$1.315B" },
        { title: "Avg Daily Turnover", value: "S$1.44M", sub: "Notional" },
        { title: "Velocity", value: "0.276%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #91 - outside top 30", gaps: ["Need rank ≤30 (currently #91)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 95.3% - qualifies", gaps: [] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #91 - below top 80", gaps: ["Need rank ≤80 (currently #91)"] }
      ],
      insight:
        "AU8U is eligible for FTSE All-Share. STI and iEdge Next 50 would require a stronger market-cap rank; velocity is already above typical thresholds.",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Sustain tight spreads and steady turnover to support larger holders",
        "Emphasize fundamentals and predictable IR cadence to broaden ownership",
        "Track short/lending dynamics as potential overhangs and communicate proactively"
      ]
    }
  }
};

export default REPORT_DATA;
