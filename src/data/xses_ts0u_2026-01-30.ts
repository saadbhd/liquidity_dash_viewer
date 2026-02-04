// @ts-nocheck

// ============================================================================
// OUE REIT (TS0U) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-01-30
//
// Source:
// - Key numeric fields are based on the console output + JSON in the user prompt
//   (as-of 2026-01-30).
// - Narrative fields are written for CEO/CFO readability: plain-language, candid,
//   and action-oriented.
// ============================================================================

import type { ReportData } from '@/types/report';

// ============================================================================
// PEER SELECTION METHODOLOGY
// ============================================================================
export const PEER_METHODOLOGY = {
  title: "How We Select Peers",
  steps: [
    "Start with the same market-cap category as the company (mid cap)",
    "Prefer the same sector first (REIT - Office), then the same industry (Real Estate)",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "K71U", name: "Keppel Reit", marketCap: "S$3.7B", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "AJBU", name: "Keppel DC Reit", marketCap: "S$4.6B", sector: "REIT - Industrial", industry: "Real Estate" },
    { ticker: "P40U", name: "StarhillGbl Reit", marketCap: "S$1.35B", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "TQ5", name: "Frasers Property", marketCap: "S$4.63B", sector: "Real Estate Development", industry: "Real Estate" },
    { ticker: "H13", name: "Ho Bee Land", marketCap: "S$1.53B", sector: "Real Estate Development", industry: "Real Estate" },
    { ticker: "W05", name: "Wing Tai", marketCap: "S$1.24B", sector: "Real Estate Development", industry: "Real Estate" },
    { ticker: "Q5T", name: "Far East HTrust", marketCap: "S$1.23B", sector: "REIT - Diversified", industry: "Real Estate" },
    { ticker: "U06", name: "SingaporeLandGrp", marketCap: "S$4.94B", sector: "Real Estate Development", industry: "Real Estate" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "TS0U",
    company: "OUEREIT",
    asof_date: "2026-01-30",
    industry: "Real Estate",
    sector: "REIT - Office",
    market_cap_display: "2004.9M",
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
        text: "Liquidity score: 80.8% — ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Mostly company-led", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW–MOD crossing cost", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "One-sided; L2 signal significant", bg: "bg-red-500/20", textColor: "text-red-300" },
      short: { text: "Short data available", bg: "bg-red-500/20", textColor: "text-red-300" },
      index_status: { text: "Eligible: FTSE All-Share, iEdge Next 50", bg: "bg-emerald-500/20", textColor: "text-emerald-300" }
    },
    borders: {
      action_plan: "border-amber-500",
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
    action_plan_subtitle: "Practical actions to reduce trading friction and protect liquidity",
    action_plan_icon: "",

    liq_title: "Liquidity Health & Peer Comparison",
    liq_subtitle: "How your stock compares to similar Real Estate / REIT names in Singapore",

    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight:
      "TS0U has delivered strong positive returns across 1M/3M/6M and outperformed the market recently. Liquidity is decent, but short activity and one-sided flow are notable — execution should be more timing-aware.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or mostly company-specific factors?",
    drivers_strip: [
      { title: "Key Insight", text: "About 84% of recent price moves are company-specific. Market contributes ~14% and sector ~2%." },
      { title: "Market Link", text: "Market correlation is low (~0.12). In high-volatility regimes, market causality becomes more relevant." },
      { title: "Sector Link", text: "Sector correlation is near zero (~0.02) in the latest window — TS0U is not trading as a pure sector proxy right now." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High company-specific share means the stock moves on its own tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Lead-lag suggests market can lead by ~3 days in this sample; treat as directional, not deterministic.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Recent window shows a sharp drop in measured sector share; company-specific share rises materially.",
    drivers_bottom_line:
      "Bottom line: TS0U is currently driven more by company-specific factors than sector moves — communications cadence and execution conditions matter disproportionately.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Use limit orders; spreads can widen versus peers even when headline liquidity is good.",
      "Execution should consider one-sided order flow conditions (OFI) as a timing signal.",
      "In high-vol regimes, market moves can matter more — avoid urgent trades on macro shock days."
    ],

    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Current: Low Volatility Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note:
      "Spread is ~1.33% (higher than peer median ~0.6%). Depth is present, but crossing cost is non-trivial — execution benefits from staging and patience.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. For TS0U, a S$50K clip is ~7.5% of ADV — generally manageable. Several peers are far less scalable (50K is >100% of ADV).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Price impact from mid to VWAP using latest order book snapshot (single-day). Real results vary by day and by urgency.",
    exec_check_insight:
      "Liquidity is adequate for an SGX REIT (ADV below peers); spread is relatively wide versus peers. Depth is present; price impact remains contained for S$100K–S$1M sells (~0.66–0.71%), rising to ~1.56% for S$2.5M.",

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
      "TS0U liquidity is time-dependent: continuous trading dominates (~78–82%), but auctions are meaningful (~18–24%). The heaviest buckets are midday (12:00) and the close (17:00).",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template:
      "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note:
      "Liquidity clusters at 12:00 and into the close. Larger clips should target these windows where possible.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight:
      "Key insight: Trading is moderately concentrated (HHI ~0.245). Liquidity is accessible throughout the day, but best depth is typically around midday and at the close.",

    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does imbalance explain daily returns?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note:
      "OFI measures buyer-initiated minus seller-initiated volume. Negative = more selling pressure. |OFI| shows how one-sided the tape is.",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger moves — useful as a risk flag.",

    index_title: "Index Eligibility",
    index_subtitle: "Which indices could include TS0U, and what's needed to qualify",

    // XSES-only
    short_title: "Short Selling & Lending",
    short_subtitle: "Short participation and lending context for execution risk",

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
        value: "80.8",
        suffix: "/100",
        bar_pct: 80.8,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Rank 108/558 • Peer median: 81.9 (slightly below)",
        interpretation: { text: "SLIGHTLY BELOW PEERS", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Wider spreads = higher trading costs."
        },
        value: "1.33",
        suffix: "%",
        bar_pct: 85,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Higher than peer median (~0.6%)",
        interpretation: { text: "WATCH", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body:
            "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade large amounts without moving the price."
        },
        value: "665.6K",
        suffix: "SGD",
        bar_pct: 30,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 729.4K SGD • -8.7% vs peers",
        interpretation: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "84.2",
        suffix: "% company",
        bar_pct: 84.2,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 13.9% • Sector: 1.9%",
        interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Liquidity score is respectable (80.8/100; rank 108/558) but slightly below peer median — the biggest gaps are spread (TS0U ~1.3% vs peers ~0.6%) and ADV (−8.7% vs peers).",
      "Execution impact is manageable for staged tickets: ~0.66% (S$100K), ~0.71% (S$1M), ~1.56% (S$2.5M), based on the latest order book snapshot.",
      "Short participation is very high (~31% average short ratio) and the SBL lending pool is large (~15.2 days of ADV). Treat this as a potential liquidity overhang in stress scenarios."
    ],

    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Tighten spread versus peers (core trading friction)",
              bullets: [
                "Spread is the clearest relative weakness (1.3% vs peer median ~0.6%). This is direct, visible friction for investors.",
                "Aim for more consistent two-way quoting depth around the touch, especially during continuous trading."
              ]
            },
            {
              title: "Increase average traded volume through targeted outreach",
              bullets: [
                "ADV is below peer median (−8.7%); targeted outreach to institutional and active traders can help grow daily flow.",
                "Consider investor education, roadshows, or analyst coverage to improve visibility and trading interest.",
                "Use peak liquidity windows (12:00, 17:00) and limit-order messaging to support staged execution once flow improves."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            {
              title: "Improve repeat liquidity (turnover/velocity) without widening spreads",
              bullets: [
                "Turnover ratio is low (~0.11%) — focus on repeat participation and predictable liquidity.",
                "Reduce intraday concentration by supporting depth outside the biggest buckets."
              ]
            },
            {
              title: "Monitor short + lending mechanics as a governance KPI",
              bullets: [
                "Short ratios are structurally high; focus less on the ‘direction’ and more on how it affects execution and investor confidence.",
                "Track lending pool vs ADV monthly — it is a better stress indicator than short correlation."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            {
              title: "Build index visibility leverage (already eligible for iEdge Next 50)",
              bullets: [
                "TS0U is eligible for FTSE All-Share and iEdge Next 50 — this supports passive visibility.",
                "STI is constrained by rank; treat it as an outcome of sustained market-cap and liquidity improvement."
              ]
            },
            {
              title: "Establish monthly liquidity monitoring",
              bullets: [
                "Track spread, ADV, trades/day, concentration (HHI), OFI/imbalance, short ratio, and SBL pool vs ADV.",
                "Use peer benchmarking to keep the focus on what investors actually feel (friction and scalability)."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      { title: "Daily Trades", value: "278", sub: "Healthy activity supports price discovery", interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" } },
      { title: "Turnover (Volume/Free Float)", value: "0.11%", sub: "Low turnover — room to increase repeat liquidity", interp: { text: "LOW", cls: "interpretation-neutral", icon: "◆" } },
      { title: "Daily Volatility", value: "1.62%", sub: "Below market median (~2.2%), but above peer/sector medians (~1.1%)", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } }
    ],

    liq_insight:
      "TS0U is tradable and active, but spreads are wider than direct peers. The clearest investor-experience lever is tightening the spread and improving top-of-book resilience.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.3775", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "1.33%", note: "Immediate trading cost", color: "text-amber-300" },
      { title: "Depth", value: "Present", note: "Multiple levels; staging helps for larger clips", color: "text-amber-300" }
    ],

    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −0.66% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −0.71% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −1.56% • Fill: 100% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Meaningful relationship" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Significant (1-min)" }
    ],

    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  // ============================================================================
  // INSIGHTS - EXECUTIVE NARRATIVE (CEO/CFO-friendly)
  // ============================================================================
  insights: {
    liquidity: {
      overall:
        "TS0U has adequate liquidity for an SGX REIT, scoring 80.8/100 (rank 108/558) but slightly below peer median. Activity is healthy (~278 trades/day), but ADV is below peers (~S$666K vs peer median ~S$729K) and spread is the main weakness (~1.36% vs peer median ~0.61%).",
      strengths: [
        "Healthy trade count supports continuous price discovery",
        "A S$50K clip is ~7–8% of ADV (manageable in size), though ADV itself is below peer median (−8.7%)",
        "Volatility is below the overall market median (~2.2%), reducing execution risk versus typical SGX stocks"
      ],
      concerns: [
        "Spread is high versus peers (~1.36% vs ~0.61%), increasing visible friction for investors",
        "ADV is below peer median (−8.7%); peers AJBU and K71U have higher ADV and tighter spreads",
        "Turnover/velocity is low (~0.11%), implying shares change hands infrequently for a name of this size",
        "Short activity is structurally high (~31% average) — relevant for execution conditions and investor perception"
      ],
      peer_context:
        "Peers AJBU and K71U are far more scalable (high ADV, tighter spreads). TS0U’s main improvement lever is reducing spread and improving top-of-book resilience, not necessarily increasing raw trade count."
    },

    market_comparison: {
      adv: {
        insight: "ADV is ~S$665.6K/day — above sector median (~S$560K) but below peer median (~S$729K, −8.7%). So versus direct comparables, traded volume is a relative weakness, not a strength.",
        vs_market: "Market median ADV is ~S$47.3K — TS0U sits in a more liquid tier than typical SGX stocks.",
        vs_sector: "Sector median ADV is ~S$560.4K — TS0U is above the sector typical.",
        vs_peers: "Peer median ADV is ~S$729.4K — TS0U is modestly lower (−8.7%); treat ADV as below peers."
      },
      spread: {
        insight: "Spread is ~1.36% — in-line with sector median (~1.4%) but worse than peer median (~0.6%).",
        vs_market: "Market median spread is ~2.5% — TS0U is better than typical small SGX names.",
        vs_sector: "Sector median is ~1.4% — TS0U is essentially in-line with sector typical.",
        vs_peers: "Peer median is ~0.6% — TS0U is materially wider (worse) than direct comparables."
      },
      volatility: {
        insight: "Volatility is ~1.6% — above peer/sector medians (~1.1%) but below market median (~2.2%).",
        vs_market: "Market median volatility is ~2.2% — TS0U is calmer than the typical SGX stock.",
        vs_sector: "Sector median volatility is ~1.1% — TS0U is more volatile than sector typical.",
        vs_peers: "Peer median volatility is ~1.1% — TS0U is more volatile than peers."
      },
      trades: {
        insight: "Trades/day is high (~278), supporting liquidity access across the day.",
        vs_market: "Market median trades is ~19/day — TS0U is much more active than typical SGX names.",
        vs_sector: "Sector median trades is ~108/day — TS0U is materially higher.",
        vs_peers: "Peer median trades is ~261/day — TS0U is slightly higher."
      }
    },

    performance: {
      overall:
        "TS0U has delivered strong positive returns over 1M/3M/6M and outperformed the market and peer set. This suggests current demand is strong; protecting execution quality (spread/top-of-book) is important to sustain investor confidence.",
      ytd: {
        stock: "+4.2%",
        market: "+6.3%",
        sector: "+0.5%",
        peers: "+2.5%",
        insight:
          "YTD, TS0U is up ~4.2% — strong relative to sector and peers, slightly behind the market."
      },
      three_month: {
        stock: "+8.7%",
        market: "+16.7%",
        sector: "−2.4%",
        peers: "+4.0%",
        insight:
          "Over 3 months, TS0U is up ~8.7%, significantly outperforming the sector (down ~2.4%) and peers (+4.0%)."
      },
      six_month: {
        stock: "+23.0%",
        market: "+54.3%",
        sector: "+0.7%",
        peers: "+8.1%",
        insight:
          "Over 6 months, TS0U is up ~23.0% and outperforms peers and sector, but lags a very strong market rally."
      },
      conclusion:
        "Strong performance helps liquidity, but investors still feel spread first. The highest ROI microstructure lever is tightening spread without sacrificing depth."
    },

    drivers: {
      overall:
        "TS0U is currently company-driven: ~84.2% idiosyncratic share. Market contributes ~13.9% and sector ~1.9%.",
      interpretation:
        "This means TS0U is not trading as a sector proxy right now. Company-specific news, positioning, and microstructure conditions dominate outcomes.",
      rolling_change:
        "Across rolling windows, sector share has historically been meaningful, but in the latest window it drops sharply to ~1.9% while idiosyncratic share rises to ~84.2%.",
      beta:
        "Two-factor sensitivity is moderate to market (β≈0.39) and negative to sector (β≈−0.26). With low R² (~1.5%), treat betas as directional rather than precise."
    },

    regime: {
      overall:
        "A two-regime model identifies Low Vol (39% of time; σ≈0.93%) and High Vol (61% of time; σ≈1.19%). The market is more often in the higher-volatility state.",
      current:
        "Current regime: Low Vol. This is generally a better environment for staged execution, but the model suggests low-vol can flip to high-vol.",
      transitions:
        "From Low Vol the model estimates a high probability of switching to High Vol (near-100% in the fitted matrix). This is a warning to avoid urgency even when conditions look calm.",
      trading_implications:
        "In High Vol, market causality becomes significant (market → stock). Execution should be more conservative on macro shock days."
    },

    trader_composition: {
      overall:
        "Trading is retail-dominated (~96.6% of trades) with limited institutional participation (~0.5%). This reduces natural block liquidity and increases sensitivity to order-flow conditions.",
      retail_heavy:
        "Retail dominance implies many small trades (median ~S$146), which can increase noise and make timing more important.",
      institutional_gap:
        "Low institutional share limits block depth. Larger trades should be staged and timed to peak buckets (12:00, 17:00).",
      peer_comparison:
        "Peers are also retail-heavy, but some (e.g., K71U, AJBU) have higher institutional presence, which supports tighter spreads and better scalability."
    },

    price_moving: {
      overall:
        "About 22.2% of trades moved the price (7,408 of 33,311). Retail traders drive the vast majority of price-moving trades in both directions.",
      interpretation:
        "A meaningful share of trades move the price, so execution outcomes depend on how you trade (limit discipline and avoiding urgency).",
      asymmetry:
        "Sell trades that move prices are ~1.1x larger on average than buy trades that move prices; the main takeaway is that retail activity dominates price impact.",
      by_trader_type:
        "Retail traders are the ones moving the price most: ~96.9% of positive price movers and ~95.7% of negative price movers are retail. Mixed and institutional together account for only ~3–4% of price-moving trades, so microstructure sensitivity is largely driven by retail flow."
    },

    short_selling: {
      overall:
        "Short participation is structurally high (~30–33% average short ratio across 1M/3M/6M). This does not necessarily imply negative fundamentals, but it does change the trading microstructure and can amplify moves in stress.",
      level:
        "3M avg short ratio is ~30.7% (max ~73.6%). This is high versus most SGX equities and most peers.",
      correlation:
        "Short% vs daily return correlation is weak to modest (+0.16) and unusual in sign (shorts during up days?). Treat it as context, not a prediction tool.",
      trend:
        "Shorts have been covering slightly (−19% MoM), but recent 14-day activity is near historical (avg ~28.4%). The larger governance KPI is the SBL lending pool size versus ADV (~15.2 days), which represents a potential liquidity overhang.",
      peaks:
        "Peak shorting episodes are episodic (max days >70%). Use them as stress flags rather than directional signals."
    },

    execution: {
      overall:
        "Execution impact is manageable for staged tickets, but crossing cost is non-trivial due to spread. Depth is present; price impact is ~0.66% for S$100K sells, ~0.71% for S$1M, and ~1.56% for S$2.5M (single-day snapshot).",
      concern:
        "The main execution risk is spread (immediate cost) and one-sided flow days (timing risk), not lack of trades.",
      peer_context:
        "TS0U’s 50K clip is ~7–8% of ADV (manageable), while several peers exceed 100% of ADV for the same clip. That scalability is a plus, but ADV is still below peer median (−8.7%) and spreads need improvement."
    },

    intraday: {
      overall:
        "Trading is moderately concentrated (HHI ~0.245 over 6 months), with strong clustering at 12:00 and 17:00.",
      hhi_interpretation:
        "HHI between 0.15 and 0.25 indicates moderate concentration; TS0U is near the upper end of that band.",
      best_times:
        "Best liquidity windows are midday (12:00) and the close (17:00). Auctions are meaningful (~18–24%), which can be used for rebalancing.",
      peer_ranking:
        "TS0U is more concentrated than AJBU (HHI ~0.139) and K71U (~0.174), but less extreme than names with HHI >0.26."
    },

    ofi: {
      overall:
        "Order flow is persistently one-sided (3M avg |OFI| ~43.9%). Daily OFI correlates with same-day returns (corr ~0.404). L2 order-book imbalance is statistically significant for short-horizon mid-price moves (p≈0.0000) at ~1-minute lag.",
      daily_vs_intraday:
        "Use daily OFI as a stress flag. The more actionable signal is intraday: L2 imbalance predicts near-term price changes and can improve execution timing.",
      l2_signal:
        "Over 1,496 valid L2 snapshots, OFI% Granger-causes mid-price at 1-minute lag with a negative correlation (buy pressure → price down), indicating contrarian/mean-reversion microstructure.",
      day_breakdown:
        "Over the 3M window: net selling days dominate (~54.4%), net buying is ~32.4%, and balanced ~13.2%."
    },

    index: {
      overall:
        "TS0U is eligible for FTSE All-Share and iEdge Next 50 (rank #72). STI remains out of reach due to rank (needs ≤30).",
      hsci: "N/A for Singapore market (HSCI is Hong Kong-specific).",
      hsi_gap: "N/A (HSI is Hong Kong-specific).",
      tech_gap: "N/A (Hang Seng TECH is Hong Kong-specific).",
      recommendation:
        "Maintain iEdge Next 50 eligibility and focus on tightening spread and improving turnover. STI inclusion should be treated as a long-term outcome."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA USED BY CHARTS
  // ============================================================================
  series: {
    peers_liquidity: {
      labels: ["TS0U", "K71U", "AJBU", "P40U", "TQ5", "H13", "W05", "Q5T", "U06"],
      scores: [
        80.82437275985663,
        96.415770609319,
        97.84946236559139,
        82.79569892473118,
        76.16487455197132,
        81.18279569892472,
        78.85304659498208,
        82.61648745519713,
        77.77777777777779
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [
        665600.075,
        15187143.575,
        27516338.3305,
        679141.7,
        714197.05,
        721125.95,
        737690.85,
        570826.8,
        854467.35
      ],
      total: 558
    },

    market_comparison: {
      sector_name: "REIT - Office",
      sector_count: 10,
      market_count: 558,
      company: {
        volatility: 0.016150104933300147,
        adv: 665600.075,
        spread_pct: 0.013632651076925061,
        turnover_ratio: 0.0011155113700359058,
        amihud: 2.47356989857933e-08,
        trades: 278.5
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
          mean: 0.012323541247618372,
          median: 0.010776103363432533,
          min: 0.0,
          max: 0.022959716105505713,
          p5: 0.0027914645394545687,
          p95: 0.02288583020025443,
          count: 10
        },
        adv: {
          direction: "higher_is_better",
          mean: 5693757.050739634,
          median: 560437.5869940293,
          min: 0.0,
          max: 27516338.3305,
          p5: 69688.11375,
          p95: 21968200.690524988,
          count: 10
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.015450850930333137,
          median: 0.014308587352205724,
          min: 0.0044867003763618555,
          max: 0.04104275685870418,
          p5: 0.004815490366517498,
          p95: 0.0328850930629913,
          count: 10
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0032328565539452973,
          median: 0.0021322406624594034,
          min: 0.0,
          max: 0.007563913171937159,
          p5: 0.00044620454801436236,
          p95: 0.007201746346336819,
          count: 9
        },
        amihud: {
          direction: "lower_is_better",
          mean: 4.259936026192454e-08,
          median: 4.01231297904325e-08,
          min: 2.40702787256172e-10,
          max: 1.1017087035995444e-07,
          p5: 2.8264850035501267e-10,
          p95: 1.016699261170698e-07,
          count: 9
        },
        trades: {
          direction: "higher_is_better",
          mean: 911.595,
          median: 108.425,
          min: 0.0,
          max: 3314.1,
          p5: 14.4675,
          p95: 3168.2774999999997,
          count: 10
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 5872616.4506875,
          median: 729408.3999999999,
          min: 570826.8,
          max: 27516338.3305,
          p5: 608737.015,
          p95: 23201120.16607499,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 963.31875,
          median: 261.125,
          min: 153.15,
          max: 3314.1,
          p5: 156.335,
          p95: 3200.6825,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.01109784373870196,
          median: 0.01134743045388141,
          min: 0.006656667029241704,
          max: 0.01671403753586717,
          p5: 0.0067501393867644265,
          p95: 0.016106340309738502,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.006425396959584086,
          median: 0.006083900857357763,
          min: 0.00374828885992047,
          max: 0.00902051284760163,
          p5: 0.004006732890674955,
          p95: 0.008844018510877268,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 1.0065212191052827e-08,
          median: 1.2251484506732665e-08,
          min: 2.40702787256172e-10,
          max: 1.7676655153064478e-08,
          p5: 2.774052862176576e-10,
          p95: 1.6150517460709173e-08,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.002257687286907564,
          median: 0.0011865414239152182,
          min: 0.00017740067604806814,
          max: 0.007563913171937159,
          p5: 0.0002047780348718158,
          p95: 0.006531326399520601,
          count: 8
        }
      }
    },

    returns: [
      { horizon: "1M", stock: 4.16666666666663, market: 6.302207986016062, sector: 0.4526615781395238, peers: 2.452698707171286 },
      { horizon: "3M", stock: 8.695652173912971, market: 16.677365739434324, sector: -2.4047275637469334, peers: 3.956505450768666 },
      { horizon: "6M", stock: 22.950819672131262, market: 54.26412654874044, sector: 0.7149998135729252, peers: 8.062325945810533 },
      { horizon: "YTD", stock: 4.16666666666663, market: 6.302207986016062, sector: 0.4526615781395238, peers: 2.452698707171286 }
    ],

    drivers: {
      share_market: 13.9,
      share_sector: 1.9,
      share_idio: 84.2,
      beta_market: 0.38675900203819497,
      beta_sector: -0.26017560137888174,
      r_squared: 1.5,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          -0.07713248359456645,
          -0.06766218499525946,
          0.10318760440973224,
          -0.15580639198586008,
          -0.011865147121271808,
          0.1151060479586743,
          -0.028718357338253907,
          0.11519837292443413,
          -0.20391634933312994,
          0.0996832543421484,
          0.1266039471367689
        ],
        corr_sector: [
          -0.07973765234925168,
          -0.2424010959410337,
          0.189108137560446,
          -0.20177192472050998,
          0.12609086861421404,
          0.015723824189616036,
          0.07670875812558607,
          -0.06320238044005173,
          -0.007073009028705739,
          0.06795452401512225,
          -0.06157665859863713
        ],
        best: { market: 3, sector: -4 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 0.06426936967207707, share_sector: 0.30960415922521245, share_idio: 0.6261264711027105 }, regression: { r_squared: 0.24567797132987035 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 0.03584964884552796, share_sector: 0.2260717231476445, share_idio: 0.7380786280068276 }, regression: { r_squared: 0.1300242292113376 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 0.11520781001835037, share_sector: 0.35777729506200945, share_idio: 0.5270148949196402 }, regression: { r_squared: 0.4835600835874011 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 0.13546724041961203, share_sector: 0.14760355506477424, share_idio: 0.7169292045156137 }, regression: { r_squared: 0.05354526094862955 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 0.08590331667886011, share_sector: 0.3651109682038369, share_idio: 0.548985715117303 }, regression: { r_squared: 0.3735079623289125 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 0.13910789340338325, share_sector: 0.019389653779520597, share_idio: 0.8415024528170961 }, regression: { r_squared: 0.015140121657019612 } }
      },
      rolling: {
        ordered: [
          "2025-01-17 to 2025-03-21",
          "2025-03-21 to 2025-05-23",
          "2025-05-23 to 2025-07-25",
          "2025-07-25 to 2025-09-26",
          "2025-09-26 to 2025-11-28",
          "2025-11-28 to 2026-01-30"
        ],
        market: [6.4, 3.6, 11.5, 13.5, 8.6, 13.9],
        sector: [31.0, 22.6, 35.8, 14.8, 36.5, 1.9],
        idio: [62.6, 73.8, 52.7, 71.7, 54.9, 84.2]
      },
      regime: {
        n_regimes: 2,
        labels: ["Low Vol", "High Vol"],
        pct_time: [38.9, 61.1],
        current_regime: 0,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: -1.01, volatility: 0.93, n_days: 49, pct_time: 38.88888888888889 },
          { id: 1, label: "High Vol", mean_ret: 0.85, volatility: 1.19, n_days: 77, pct_time: 61.111111111111114 }
        ],
        transitions: [
          [0.0, 100.0],
          [56.7, 43.3]
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.375, quantity: 2575700.0, value: 965887.5 },
        { level: 2, price: 0.37, quantity: 3751400.0, value: 1388018.0 },
        { level: 3, price: 0.365, quantity: 2890900.0, value: 1055178.5 },
        { level: 4, price: 0.36, quantity: 2859500.0, value: 1029420.0 },
        { level: 5, price: 0.355, quantity: 2331100.0, value: 827540.5 },
        { level: 6, price: 0.35, quantity: 769600.0, value: 269360.0 },
        { level: 7, price: 0.345, quantity: 1955500.0, value: 674647.5 },
        { level: 8, price: 0.34, quantity: 1666100.0, value: 566474.0 },
        { level: 9, price: 0.335, quantity: 989800.0, value: 331583.0 },
        { level: 10, price: 0.33, quantity: 1218400.0, value: 402072.0 }
      ],
      asks: [
        { level: 1, price: 0.38, quantity: 1698300.0, value: 645354.0 },
        { level: 2, price: 0.385, quantity: 2423900.0, value: 933201.5 },
        { level: 3, price: 0.39, quantity: 1590300.0, value: 620217.0 },
        { level: 4, price: 0.395, quantity: 875400.0, value: 345783.0 },
        { level: 5, price: 0.4, quantity: 1920800.0, value: 768320.0 },
        { level: 6, price: 0.405, quantity: 21700.0, value: 8788.5 },
        { level: 7, price: 0.41, quantity: 203600.0, value: 83476.0 },
        { level: 8, price: 0.415, quantity: 29600.0, value: 12284.0 },
        { level: 9, price: 0.42, quantity: 2400.0, value: 1008.0 },
        { level: 10, price: 0.425, quantity: 102300.0, value: 43477.5 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 7.5,
      peers: [
        { ticker: "AJBU", pct: 3.6 },
        { ticker: "K71U", pct: 6.6 },
        { ticker: "U06", pct: 117.0 },
        { ticker: "W05", pct: 135.6 },
        { ticker: "H13", pct: 138.7 },
        { ticker: "TQ5", pct: 140.0 },
        { ticker: "P40U", pct: 147.2 },
        { ticker: "Q5T", pct: 175.2 }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 4550,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.9621978021978022,
        mixed_pct: 0.03098901098901099,
        instit_pct: 0.006813186813186814,
        retail_qty_pct: 0.29244692375874054,
        mixed_qty_pct: 0.38553610872715505,
        instit_qty_pct: 0.3220169675141044,
        retail_notional_pct: 0.2916927862872591,
        mixed_notional_pct: 0.3852035844475814,
        instit_notional_pct: 0.3231036292651595
      },
      trade_size: { avg: 2292.565934065934, median: 142.0 },
      over_time: {
        valid: true,
        periods: [
          {
            month: "2026-01",
            n_trades: 4271,
            retail_pct: 0.963942870522126,
            mixed_pct: 0.02926715055022243,
            instit_pct: 0.0067899789276516034,
            avg_trade_size: 2246.8279091547647,
            retail_qty_pct: 0.294255896696623,
            mixed_qty_pct: 0.3705832285372512,
            instit_qty_pct: 0.3351608747661258,
            total_quantity: 26082400.0
          },
          {
            month: "2025-12",
            n_trades: 5755,
            retail_pct: 0.9770634231103389,
            mixed_pct: 0.017549956559513465,
            instit_pct: 0.005386620330147697,
            avg_trade_size: 1554.2202432667245,
            retail_qty_pct: 0.2873635336930606,
            mixed_qty_pct: 0.3324366294390764,
            instit_qty_pct: 0.38019983686786296,
            total_quantity: 25500800.0
          },
          {
            month: "2025-11",
            n_trades: 6042,
            retail_pct: 0.9688844753392917,
            mixed_pct: 0.025157232704402517,
            instit_pct: 0.005958291956305859,
            avg_trade_size: 2451.1213174445547,
            retail_qty_pct: 0.35227720899766823,
            mixed_qty_pct: 0.27553456232889506,
            instit_qty_pct: 0.37218822867343665,
            total_quantity: 43357900.0
          },
          {
            month: "2025-10",
            n_trades: 6302,
            retail_pct: 0.9676293240241193,
            mixed_pct: 0.024595366550301492,
            instit_pct: 0.0077753094255791815,
            avg_trade_size: 2595.5161853379877,
            retail_qty_pct: 0.2931504994647836,
            mixed_qty_pct: 0.2646063303617894,
            instit_qty_pct: 0.442243170173427,
            total_quantity: 47270600.0
          },
          {
            month: "2025-09",
            n_trades: 5239,
            retail_pct: 0.9452185531589998,
            mixed_pct: 0.0419927467073869,
            instit_pct: 0.012788700133613285,
            avg_trade_size: 4004.0340713876694,
            retail_qty_pct: 0.21269050285897156,
            mixed_qty_pct: 0.2950406395214039,
            instit_qty_pct: 0.4922688576196245,
            total_quantity: 61245800.0
          },
          {
            month: "2025-08",
            n_trades: 5703,
            retail_pct: 0.951779765035946,
            mixed_pct: 0.038050149044362616,
            instit_pct: 0.010170085919691391,
            avg_trade_size: 3422.4712432053307,
            retail_qty_pct: 0.2284567440678463,
            mixed_qty_pct: 0.3467772677068638,
            instit_qty_pct: 0.4247659882252899,
            total_quantity: 61385800.0
          }
        ]
      },
      peer_comparison: [
        {
          ticker: "TS0U",
          currency: "SGD",
          is_target: true,
          retail_pct: 0.9621978021978022,
          mixed_pct: 0.03098901098901099,
          instit_pct: 0.006813186813186814,
          retail_qty_pct: 0.29244692375874054,
          mixed_qty_pct: 0.38553610872715505,
          instit_qty_pct: 0.3220169675141044,
          retail_notional_pct: 0.2916927862872591,
          mixed_notional_pct: 0.3852035844475814,
          instit_notional_pct: 0.3231036292651595,
          avg_trade_size: 2292.565934065934,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "Q5T",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9715549936788875,
          mixed_pct: 0.025916561314791402,
          instit_pct: 0.0025284450063211127,
          retail_qty_pct: 0.38500921717454417,
          mixed_qty_pct: 0.47386725775996535,
          instit_qty_pct: 0.14112352506549045,
          retail_notional_pct: 0.38476776678797886,
          mixed_notional_pct: 0.47388682942353294,
          instit_notional_pct: 0.14134540378848823,
          avg_trade_size: 1728.0430889169827,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "P40U",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9713943131209318,
          mixed_pct: 0.026207605344295993,
          instit_pct: 0.002398081534772182,
          retail_qty_pct: 0.37638927521859544,
          mixed_qty_pct: 0.4448280866399797,
          instit_qty_pct: 0.1787826381414249,
          retail_notional_pct: 0.3763650103737579,
          mixed_notional_pct: 0.4448452617199826,
          instit_notional_pct: 0.1787897279062595,
          avg_trade_size: 1681.1697499143543,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "K71U",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9547622711186337,
          mixed_pct: 0.03171641791044776,
          instit_pct: 0.013521310970918602,
          retail_qty_pct: 0.22115689956267176,
          mixed_qty_pct: 0.1957821712159455,
          instit_qty_pct: 0.5830609292213828,
          retail_notional_pct: 0.22141566360205844,
          mixed_notional_pct: 0.19598961284847188,
          instit_notional_pct: 0.5825947235494697,
          avg_trade_size: 4708.522791967995,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "AJBU",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9333690566971002,
          mixed_pct: 0.04490839018157087,
          instit_pct: 0.02172255312132891,
          retail_qty_pct: 0.19360231177463252,
          mixed_qty_pct: 0.17209100908633665,
          instit_qty_pct: 0.6343066791390308,
          retail_notional_pct: 0.19376821412604503,
          mixed_notional_pct: 0.17221303076438885,
          instit_notional_pct: 0.6340187551095661,
          avg_trade_size: 7803.536159600997,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "U06",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.8551123337918386,
          mixed_pct: 0.1325080238422742,
          instit_pct: 0.012379642365887207,
          retail_qty_pct: 0.31926438305098787,
          mixed_qty_pct: 0.4968935095058609,
          instit_qty_pct: 0.18384210744315121,
          retail_notional_pct: 0.3189948221234721,
          mixed_notional_pct: 0.4968262357545088,
          instit_notional_pct: 0.1841789421220191,
          avg_trade_size: 7459.787712058689,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "TQ5",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.8462557985420809,
          mixed_pct: 0.13850231941683233,
          instit_pct: 0.015241882041086813,
          retail_qty_pct: 0.27739669541763284,
          mixed_qty_pct: 0.4960269334135385,
          instit_qty_pct: 0.22657637116882864,
          retail_notional_pct: 0.2764088170812077,
          mixed_notional_pct: 0.49528711107039647,
          instit_notional_pct: 0.22830407184839582,
          avg_trade_size: 8015.257123923128,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "H13",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.8398999374609131,
          mixed_pct: 0.13633520950594122,
          instit_pct: 0.023764853033145718,
          retail_qty_pct: 0.2693929243946741,
          mixed_qty_pct: 0.42770251128997316,
          instit_qty_pct: 0.3029045643153527,
          retail_notional_pct: 0.2691286648914425,
          mixed_notional_pct: 0.4264201324071422,
          instit_notional_pct: 0.30445120270141524,
          avg_trade_size: 8776.44340212633,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "W05",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.7645327446651949,
          mixed_pct: 0.21339220014716703,
          instit_pct: 0.02207505518763797,
          retail_qty_pct: 0.24207032631134734,
          mixed_qty_pct: 0.5399819793104235,
          instit_qty_pct: 0.2179476943782292,
          retail_notional_pct: 0.24383526601452227,
          mixed_notional_pct: 0.5385196266490895,
          instit_notional_pct: 0.21764510733638828,
          avg_trade_size: 10125.27225901398,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },

    price_moving_trades: {
      total_trades: 33311,
      price_moving_trades: 7408,
      pct_price_moving: 22.238900063042237,
      all_movers: {
        count: 7408,
        avg_size: 2522.319856911447,
        median_size: 172.5,
        retail_count: 7134,
        mixed_count: 220,
        institutional_count: 54,
        retail_pct: 96.3012958963283,
        mixed_pct: 2.9697624190064795,
        instit_pct: 0.7289416846652268
      },
      positive_movers: {
        count: 3712,
        avg_size: 2390.7064924568967,
        median_size: 175.0,
        retail_count: 3597,
        mixed_count: 91,
        institutional_count: 24,
        retail_pct: 96.90193965517241,
        mixed_pct: 2.4515086206896552,
        instit_pct: 0.646551724137931
      },
      negative_movers: {
        count: 3696,
        avg_size: 2654.502976190476,
        median_size: 167.5,
        retail_count: 3537,
        mixed_count: 129,
        institutional_count: 30,
        retail_pct: 95.69805194805194,
        mixed_pct: 3.49025974025974,
        instit_pct: 0.8116883116883116
      }
    },

    short_selling: {
      data_available: true,
      security_name: "OUEREIT",
      mapping: { ticker_to_security: "OUEREIT", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      sbl_pool: {
        valid: true,
        lending_pool: 29003024,
        lending_pool_value: 10876134.0,
        latest_price: 0.375,
        lending_rate_pct: 0.52,
        borrowing_rate_pct: 0.75,
        pool_as_pct_adv: 1520.6617509555576,
        days_to_liquidate: 15.206617509555576,
        estimated_impact_pct: 0.05,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Significant price impact if entire pool sold",
        timestamp: ""
      },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.3266395901515206, max_short_ratio: 0.7360521098838856, interpretation: "High short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.307228720886851, max_short_ratio: 0.7360521098838856, interpretation: "High short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.30800291898012416, max_short_ratio: 0.7360521098838856, interpretation: "High short interest" } }
      },
      correlation: { valid: true, correlation: 0.1593109920610938, interpretation: "Positive - unusual (shorts during up days?)" },
      peaks: [
        { date: "2026-01-02", short_ratio: 0.7360521098838856, return_pct: 0.0 },
        { date: "2025-09-26", short_ratio: 0.6667966718668746, return_pct: 0.0 },
        { date: "2025-11-26", short_ratio: 0.6591005216410546, return_pct: 0.0 },
        { date: "2025-12-29", short_ratio: 0.6590625354670299, return_pct: 0.0 },
        { date: "2025-11-10", short_ratio: 0.6124026137220407, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-01", avg_short_ratio: 0.31361597929051543 },
          { month: "2025-12", avg_short_ratio: 0.38680101926033666 },
          { month: "2025-11", avg_short_ratio: 0.2658505129331559 },
          { month: "2025-10", avg_short_ratio: 0.24940642023770912 },
          { month: "2025-09", avg_short_ratio: 0.3249362727605496 },
          { month: "2025-08", avg_short_ratio: 0.293935278438484 },
          { month: "2025-07", avg_short_ratio: 0.32060405138701936 },
          { month: "2025-06", avg_short_ratio: 0.3127330635998734 },
          { month: "2025-05", avg_short_ratio: 0.27413284425091533 },
          { month: "2025-04", avg_short_ratio: 0.19816007447836195 },
          { month: "2025-03", avg_short_ratio: 0.32087888357195393 },
          { month: "2025-02", avg_short_ratio: 0.3455536444137458 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0.31361597929051543, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.38680101926033666, change_pct: 23.3358772519773 },
          { month: "2025-11", avg_short_ratio: 0.2658505129331559, change_pct: -31.269438368717157 },
          { month: "2025-10", avg_short_ratio: 0.24940642023770912, change_pct: -6.185465852225541 },
          { month: "2025-09", avg_short_ratio: 0.3249362727605496, change_pct: 30.283844518057318 },
          { month: "2025-08", avg_short_ratio: 0.293935278438484, change_pct: -9.540638248445319 },
          { month: "2025-07", avg_short_ratio: 0.32060405138701936, change_pct: 9.073008551478356 },
          { month: "2025-06", avg_short_ratio: 0.3127330635998734, change_pct: -2.455049383528981 },
          { month: "2025-05", avg_short_ratio: 0.27413284425091533, change_pct: -12.342864839627305 },
          { month: "2025-04", avg_short_ratio: 0.19816007447836195, change_pct: -27.71385164742065 },
          { month: "2025-03", avg_short_ratio: 0.32087888357195393, change_pct: 61.92912947607528 },
          { month: "2025-02", avg_short_ratio: 0.3455536444137458, change_pct: 7.689742798627883 }
        ],
        interpretation: "Shorts covering slightly (-19% MoM)"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0.31901447151492945, short_vol: 1044900, total_vol: 3275400, close: 0.375, return: -0.013157894736842146 },
          { date: "2026-01-29", short_ratio: 0.5079037800687285, short_vol: 886800, total_vol: 1746000, close: 0.38, return: 0.01333333333333342 },
          { date: "2026-01-28", short_ratio: 0.34687528593649924, short_vol: 1516400, total_vol: 4371600, close: 0.375, return: -0.013157894736842146 },
          { date: "2026-01-27", short_ratio: 0.3297940864795229, short_vol: 1587200, total_vol: 4812700, close: 0.38, return: 0.041095890410958846 },
          { date: "2026-01-26", short_ratio: 0.4979323507581381, short_vol: 469600, total_vol: 943100, close: 0.365, return: -0.013513513513513487 },
          { date: "2026-01-23", short_ratio: 0.0, short_vol: 0, total_vol: 807600, close: 0.37, return: 0.013698630136986356 },
          { date: "2026-01-22", short_ratio: 0.02107598447032723, short_vol: 22800, total_vol: 1081800, close: 0.365, return: -0.013513513513513487 },
          { date: "2026-01-21", short_ratio: 0.12400942385949883, short_vol: 115800, total_vol: 933800, close: 0.37, return: 0.013698630136986356 },
          { date: "2026-01-20", short_ratio: 0.2861741509737647, short_vol: 177800, total_vol: 621300, close: 0.365, return: 0.01388888888888884 },
          { date: "2026-01-19", short_ratio: 0.3676636923463617, short_vol: 585100, total_vol: 1591400, close: 0.36, return: -0.013698630136986356 },
          { date: "2026-01-16", short_ratio: 0.2905763639473234, short_vol: 849500, total_vol: 2923500, close: 0.365, return: -0.013513513513513487 },
          { date: "2026-01-15", short_ratio: 0.3792095955712748, short_vol: 246600, total_vol: 650300, close: 0.37, return: 0.0 },
          { date: "2026-01-14", short_ratio: 0.26446621970087675, short_vol: 256400, total_vol: 969500, close: 0.37, return: 0.0277777777777779 },
          { date: "2026-01-13", short_ratio: 0.23938939621098543, short_vol: 878200, total_vol: 3668500, close: 0.36, return: -0.013698630136986356 },
          { date: "2026-01-12", short_ratio: 0.31548033847685414, short_vol: 316900, total_vol: 1004500, close: 0.365, return: 0.0 },
          { date: "2026-01-09", short_ratio: 0.46390916463909165, short_vol: 514800, total_vol: 1109700, close: 0.365, return: 0.0 },
          { date: "2026-01-08", short_ratio: 0.24734709627628787, short_vol: 512800, total_vol: 2073200, close: 0.365, return: 0.01388888888888884 },
          { date: "2026-01-07", short_ratio: 0.4564420637158162, short_vol: 323800, total_vol: 709400, close: 0.36, return: 0.0 },
          { date: "2026-01-06", short_ratio: 0.3013554568824492, short_vol: 257900, total_vol: 855800, close: 0.36, return: 0.014084507042253502 },
          { date: "2026-01-05", short_ratio: 0.09126453338820867, short_vol: 177400, total_vol: 1943800, close: 0.355, return: -0.01388888888888895 },
          { date: "2026-01-02", short_ratio: 0.7360521098838856, short_vol: 779700, total_vol: 1059300, close: 0.36, return: 0.0 },
          { date: "2025-12-31", short_ratio: 0.46612200435729845, short_vol: 1283700, total_vol: 2754000, close: 0.36, return: 0.014084507042253502 },
          { date: "2025-12-30", short_ratio: 0.12823005871134213, short_vol: 342900, total_vol: 2674100, close: 0.355, return: 0.0 },
          { date: "2025-12-29", short_ratio: 0.6590625354670299, short_vol: 580700, total_vol: 881100, close: 0.355, return: 0.0 },
          { date: "2025-12-26", short_ratio: 0.5267241379310345, short_vol: 183300, total_vol: 348000, close: 0.355, return: 0.0 },
          { date: "2025-12-24", short_ratio: 0.49421965317919075, short_vol: 51300, total_vol: 103800, close: 0.355, return: 0.014285714285714235 },
          { date: "2025-12-23", short_ratio: 0.050116831842720165, short_vol: 62200, total_vol: 1241100, close: 0.35, return: -0.014084507042253502 },
          { date: "2025-12-22", short_ratio: 0.20224336026729398, short_vol: 593200, total_vol: 2933100, close: 0.355, return: 0.0 },
          { date: "2025-12-19", short_ratio: 0.3335316241940436, short_vol: 1738100, total_vol: 5211200, close: 0.355, return: 0.02898550724637694 },
          { date: "2025-12-18", short_ratio: 0.25371877631209655, short_vol: 994400, total_vol: 3919300, close: 0.345, return: -0.028169014084507116 },
          { date: "2025-12-17", short_ratio: 0.35767511177347244, short_vol: 552000, total_vol: 1543300, close: 0.355, return: 0.0 },
          { date: "2025-12-16", short_ratio: 0.5860560843838436, short_vol: 683400, total_vol: 1166100, close: 0.355, return: 0.0 },
          { date: "2025-12-15", short_ratio: 0.41675208068549874, short_vol: 1016500, total_vol: 2439100, close: 0.355, return: 0.014285714285714235 },
          { date: "2025-12-12", short_ratio: 0.42113865431762465, short_vol: 773000, total_vol: 1835500, close: 0.35, return: 0.0 },
          { date: "2025-12-11", short_ratio: 0.48980238824896966, short_vol: 463500, total_vol: 946300, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-12-10", short_ratio: 0.3286527810281613, short_vol: 421300, total_vol: 1281900, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-12-09", short_ratio: 0.4522068778770647, short_vol: 334000, total_vol: 738600, close: 0.35, return: 0.0 },
          { date: "2025-12-08", short_ratio: 0.45830279935512236, short_vol: 1250800, total_vol: 2729200, close: 0.35, return: 0.0 },
          { date: "2025-12-05", short_ratio: 0.5527992408838281, short_vol: 407800, total_vol: 737700, close: 0.35, return: 0.0 },
          { date: "2025-12-04", short_ratio: 0.3454217591664997, short_vol: 172400, total_vol: 499100, close: 0.35, return: 0.0 },
          { date: "2025-12-03", short_ratio: 0.5060627674750356, short_vol: 283800, total_vol: 560800, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-12-02", short_ratio: 0.05688518903919528, short_vol: 16400, total_vol: 288300, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-12-01", short_ratio: 0.4238977072310406, short_vol: 480700, total_vol: 1134000, close: 0.35, return: 0.0 },
          { date: "2025-11-28", short_ratio: 0.34027980180705336, short_vol: 233500, total_vol: 686200, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-11-27", short_ratio: 0.24883875248838752, short_vol: 37500, total_vol: 150700, close: 0.345, return: 0.0 },
          { date: "2025-11-26", short_ratio: 0.6591005216410546, short_vol: 467500, total_vol: 709300, close: 0.345, return: 0.0 },
          { date: "2025-11-25", short_ratio: 0.15344590614569018, short_vol: 156300, total_vol: 1018600, close: 0.345, return: 0.0 },
          { date: "2025-11-24", short_ratio: 0.1363005459424447, short_vol: 147300, total_vol: 1080700, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-11-21", short_ratio: 0.36473111988688994, short_vol: 1496200, total_vol: 4102200, close: 0.35, return: 0.0 },
          { date: "2025-11-20", short_ratio: 0.14191506198892112, short_vol: 53800, total_vol: 379100, close: 0.35, return: 0.0 },
          { date: "2025-11-19", short_ratio: 0.30319110792398707, short_vol: 422800, total_vol: 1394500, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-11-18", short_ratio: 0.4806873802936795, short_vol: 903500, total_vol: 1879600, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-11-17", short_ratio: 0.35280703209221326, short_vol: 850900, total_vol: 2411800, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-11-14", short_ratio: 0.023303423643174493, short_vol: 53500, total_vol: 2295800, close: 0.345, return: 0.014705882352941124 },
          { date: "2025-11-13", short_ratio: 0.021740300274444384, short_vol: 40400, total_vol: 1858300, close: 0.34, return: -0.014492753623188248 },
          { date: "2025-11-12", short_ratio: 0.12695993593883192, short_vol: 491500, total_vol: 3871300, close: 0.345, return: 0.014705882352941124 },
          { date: "2025-11-11", short_ratio: 0.34462166172106823, short_vol: 929100, total_vol: 2696000, close: 0.34, return: 0.0 },
          { date: "2025-11-10", short_ratio: 0.6124026137220407, short_vol: 1949400, total_vol: 3183200, close: 0.34, return: 0.0 },
          { date: "2025-11-07", short_ratio: 0.38798394711992445, short_vol: 986100, total_vol: 2541600, close: 0.34, return: 0.014925373134328401 },
          { date: "2025-11-06", short_ratio: 0.05240701233651795, short_vol: 169500, total_vol: 3234300, close: 0.335, return: 0.0 },
          { date: "2025-11-05", short_ratio: 0.14783223955391975, short_vol: 2277400, total_vol: 15405300, close: 0.335, return: -0.02898550724637672 },
          { date: "2025-11-04", short_ratio: 0.1954512504530627, short_vol: 215700, total_vol: 1103600, close: 0.345, return: 0.0 },
          { date: "2025-11-03", short_ratio: 0.22301064368981247, short_vol: 44000, total_vol: 197300, close: 0.345, return: 0.0 },
          { date: "2025-10-31", short_ratio: 0.029749085991886613, short_vol: 59400, total_vol: 1996700, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-10-30", short_ratio: 0.20021824984410724, short_vol: 770600, total_vol: 3848800, close: 0.35, return: 0.0 },
          { date: "2025-10-29", short_ratio: 0.13030847559149447, short_vol: 870200, total_vol: 6678000, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-10-28", short_ratio: 0.1120603015075377, short_vol: 223000, total_vol: 1990000, close: 0.345, return: 0.0 },
          { date: "2025-10-27", short_ratio: 0.0066486598794930395, short_vol: 9600, total_vol: 1443900, close: 0.345, return: 0.0 },
          { date: "2025-10-24", short_ratio: 0.00957375449722544, short_vol: 15700, total_vol: 1639900, close: 0.345, return: 0.0 },
          { date: "2025-10-23", short_ratio: 0.181719750969954, short_vol: 604200, total_vol: 3324900, close: 0.345, return: 0.0 },
          { date: "2025-10-22", short_ratio: 0.5464879702890361, short_vol: 1692200, total_vol: 3096500, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-10-21", short_ratio: 0.11152842474940858, short_vol: 457300, total_vol: 4100300, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-10-17", short_ratio: 0.4959635990019081, short_vol: 2365300, total_vol: 4769100, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-10-16", short_ratio: 0.5380189921674637, short_vol: 2328600, total_vol: 4328100, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-10-15", short_ratio: 0.12100721277691912, short_vol: 187900, total_vol: 1552800, close: 0.345, return: 0.014705882352941124 },
          { date: "2025-10-14", short_ratio: 0.07529997736019924, short_vol: 166300, total_vol: 2208500, close: 0.34, return: -0.014492753623188248 },
          { date: "2025-10-13", short_ratio: 0.294279690794097, short_vol: 1046900, total_vol: 3557500, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-10-10", short_ratio: 0.5112571108084288, short_vol: 638100, total_vol: 1248100, close: 0.35, return: 0.0 },
          { date: "2025-10-09", short_ratio: 0.09771035522472439, short_vol: 103700, total_vol: 1061300, close: 0.35, return: 0.01449275362318847 },
          { date: "2025-10-08", short_ratio: 0.4229575366277626, short_vol: 1362600, total_vol: 3221600, close: 0.345, return: -0.014285714285714346 },
          { date: "2025-10-07", short_ratio: 0.27670250896057347, short_vol: 308800, total_vol: 1116000, close: 0.35, return: 0.0 },
          { date: "2025-10-06", short_ratio: 0.0397189254038305, short_vol: 92700, total_vol: 2333900, close: 0.35, return: 0.02941176470588225 },
          { date: "2025-10-03", short_ratio: 0.4232824832761123, short_vol: 1195900, total_vol: 2825300, close: 0.34, return: 0.0 },
          { date: "2025-10-02", short_ratio: 0.5457734651987312, short_vol: 1462400, total_vol: 2679500, close: 0.34, return: 0.0 },
          { date: "2025-10-01", short_ratio: 0.31667471430870753, short_vol: 787000, total_vol: 2485200, close: 0.34, return: 0.0 },
          { date: "2025-09-30", short_ratio: 0.4183288409703504, short_vol: 310400, total_vol: 742000, close: 0.34, return: 0.014925373134328401 },
          { date: "2025-09-29", short_ratio: 0.37387442200048676, short_vol: 614500, total_vol: 1643600, close: 0.335, return: -0.014705882352941235 },
          { date: "2025-09-26", short_ratio: 0.6667966718668746, short_vol: 1025800, total_vol: 1538400, close: 0.34, return: 0 }
        ],
      },
      peer_comparison: [
        { ticker: "TS0U", avg_short_ratio: 0.307228720886851, max_short_ratio: 0.7360521098838856, is_target: true },
        { ticker: "TQ5", avg_short_ratio: 0.003348281903111815, max_short_ratio: 0.2781814794112167, is_target: false },
        { ticker: "W05", avg_short_ratio: 0.008279936390061674, max_short_ratio: 0.19682539682539682, is_target: false },
        { ticker: "U06", avg_short_ratio: 0.009442761833940508, max_short_ratio: 0.47467876039304613, is_target: false },
        { ticker: "H13", avg_short_ratio: 0.013106725507589834, max_short_ratio: 0.2734877734877735, is_target: false },
        { ticker: "P40U", avg_short_ratio: 0.023002528897305793, max_short_ratio: 0.33623348017621146, is_target: false },
        { ticker: "Q5T", avg_short_ratio: 0.023180560601948147, max_short_ratio: 0.40568532393124723, is_target: false },
        { ticker: "AJBU", avg_short_ratio: 0.07713523871125609, max_short_ratio: 0.5545730500197967, is_target: false },
        { ticker: "K71U", avg_short_ratio: 0.14327422658696137, max_short_ratio: 0.693583379990525, is_target: false }
      ]
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.06162850443479244, continuous: 0.7642441142938663, closing: 0.15236102300395724, auctions: 0.2357558857061337, other: 0.0 },
        "3M": { opening: 0.037084320840497884, continuous: 0.7798076488485918, closing: 0.16858115941906343, auctions: 0.22019235115140823, other: 0.0 },
        "6M": { opening: 0.03822244143869585, continuous: 0.8174229734963124, closing: 0.12519377993691572, auctions: 0.18257702650368754, other: 0.0 }
      },
      hhi: { "1M": 0.20618292946997885, "3M": 0.2359579989368995, "6M": 0.24465395493157674 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0341 },
        { time: "09:00", avg_share: 0.0455 },
        { time: "09:30", avg_share: 0.0438 },
        { time: "10:00", avg_share: 0.0288 },
        { time: "10:30", avg_share: 0.0352 },
        { time: "11:00", avg_share: 0.0354 },
        { time: "11:30", avg_share: 0.0358 },
        { time: "12:00", avg_share: 0.2448 },
        { time: "12:30", avg_share: 0.0087 },
        { time: "13:00", avg_share: 0.03 },
        { time: "13:30", avg_share: 0.0231 },
        { time: "14:00", avg_share: 0.0249 },
        { time: "14:30", avg_share: 0.0271 },
        { time: "15:00", avg_share: 0.0479 },
        { time: "15:30", avg_share: 0.024 },
        { time: "16:00", avg_share: 0.0419 },
        { time: "16:30", avg_share: 0.0642 },
        { time: "17:00", avg_share: 0.2048 }
      ],
      peers_hhi_rows: [
        { ticker: "AJBU", auctions_pct: 18.257449250334073, hhi: 0.13900077991672283, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "K71U", auctions_pct: 16.869661103947568, hhi: 0.1735568453749998, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "P40U", auctions_pct: 23.227320080412063, hhi: 0.21088159595245845, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "Q5T", auctions_pct: 20.136616197139166, hhi: 0.21960368980136888, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "TS0U", auctions_pct: 20.231855626859442, hhi: 0.24242917829129712, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "W05", auctions_pct: 6.415756969247682, hhi: 0.24961420191993783, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "TQ5", auctions_pct: 6.0417638840915, hhi: 0.262273829341602, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "U06", auctions_pct: 3.5401637414987466, hhi: 0.28980992223468954, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "H13", auctions_pct: 4.000436884671623, hhi: 0.37251124430015947, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "43.9%", note_suffix: " - 3-month average absolute OFI (how one-sided trading is)." },
        { value: "0.404", note_suffix: " - Correlation between daily OFI and same-day returns (moderate)." },
        { value: "Significant (1-min)", note_suffix: " - L2 OFI Granger-causality is significant (p≈0.0000) at ~1-minute lag." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "-8.3%", avg_abs: "40.3%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "-12.4%", avg_abs: "43.9%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "-4.5%", avg_abs: "45.2%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.404",
      pie: { net_buy_days: 32.4, net_sell_days: 54.4, balanced_days: 13.2 },
      l2_compact_text:
        "Over the last 7 days we analyzed 1,496 valid L2 snapshots (top 4 levels). Average L2 OFI was +0.512% of book value (abs: 3.986%). The key finding: OFI% Granger-causes mid-price changes with a ~1-minute lag (p≈0.0000). Direction is negative (buy pressure → price down), suggesting contrarian/mean-reversion microstructure and the need to avoid urgency during extreme imbalances.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [
        { date: "2025-05-14", ofi: "-100%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2025-04-15", ofi: "-98%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2025-10-31", ofi: "+96%", direction: "BUY pressure", return: "-1.4%" },
        { date: "2025-11-06", ofi: "+96%", direction: "BUY pressure", return: "+0.0%" },
        { date: "2025-09-09", ofi: "+95%", direction: "BUY pressure", return: "+0.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#72", sub: "of 562 stocks" },
        { title: "Free Float", value: "30.0%", sub: "Float mcap ~ S$602M" },
        { title: "Avg Daily Turnover", value: "S$742K", sub: "Notional value" },
        { title: "Velocity", value: "0.14%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #72 - outside top 30", gaps: ["Need rank ≤30 (currently #72)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 93.7% - qualifies", gaps: [] },
        { index: "iEdge Next 50", status: "eligible", notes: "Rank #72 - within 31-80 range", gaps: [] },
        { index: "FTSE Small/Mid Cap", status: "eligible", notes: "Small/Mid Cap band (86-98%)", gaps: [] }
      ],
      insight:
        "💡 Key insight: TS0U is eligible for FTSE All-Share and iEdge Next 50. STI is constrained mainly by market-cap rank (#72 vs required ≤30).",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Maintain iEdge Next 50 eligibility by protecting velocity and turnover stability",
        "Improve spread and block-friendliness to support larger ownership",
        "Sustain market-cap rank improvement over time (performance + investor demand)"
      ]
    }
  }
};

export default REPORT_DATA;

