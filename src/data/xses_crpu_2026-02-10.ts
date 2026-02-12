// @ts-nocheck

// ============================================================================
// Sasseur REIT (CRPU) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-02-10
//
// Source:
// - Key numeric fields are based on the console output + JSON in the user prompt
//   (as-of 2026-02-10).
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
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector first, then the same industry",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "D5IU", name: "Lippo Malls Tr", marketCap: "S$53.9M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "ODBU", name: "UtdHampshReitUSD", marketCap: "S$321.4M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "BMGU", name: "BHG Retail Reit", marketCap: "S$228.6M", sector: "REIT - Retail", industry: "Real Estate" },
    { ticker: "OXMU", name: "Prime US ReitUSD", marketCap: "S$287.8M", sector: "REIT - Office", industry: "Real Estate" },
    { ticker: "H30", name: "Hong Fok", marketCap: "S$560.3M", sector: "Real Estate Services", industry: "Real Estate" },
    { ticker: "CTO", name: "Hong Lai Huat", marketCap: "S$35.9M", sector: "Real Estate - Development", industry: "Real Estate" },
    { ticker: "41O", name: "LHN", marketCap: "S$294.9M", sector: "Real Estate Services", industry: "Real Estate" },
    { ticker: "CMOU", name: "KOREReitUSD", marketCap: "S$240.2M", sector: "REIT - Office", industry: "Real Estate" }
  ]
};

// ============================================================================
// MAIN REPORT DATA
// ============================================================================
export const REPORT_DATA: ReportData = {
  meta: {
    market: "XSES",
    ticker: "CRPU",
    company: "Sasseur Reit",
    asof_date: "2026-02-10",
    industry: "Real Estate",
    sector: "REIT - Retail",
    market_cap_display: "856.8M",
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
        text: "Liquidity Health: ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300",
        dot: "bg-emerald-500"
      },
      liq_section: {
        text: "Liquidity score: 78.9% — ABOVE AVG",
        bg: "bg-emerald-500/20",
        textColor: "text-emerald-300"
      },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Balanced: sector meaningful", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW crossing cost", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "One-sided; L2 signal significant", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "Short data available", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
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
    liq_subtitle: "How your stock compares to similar small-cap real-estate names in Singapore",

    market_comparison_title: "How You Compare to the Market",
    market_comparison_subtitle: "Your metrics versus peers, sector, and the overall market",

    perf_title: "Stock Performance",
    perf_subtitle: "Returns compared to market, sector, and peer group",
    perf_insight:
      "CRPU continues to trade well versus peers. It outperforms peers over 3–6 months but lags the broader market. Execution quality remains solid; timing and flow conditions are the key variables.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or company-specific factors?",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 63% of recent moves are company-specific. Sector contributes ~31% and the overall market ~6%."
      },
      {
        title: "Market Link",
        text:
          "Market correlation is low (ρ≈0.07) and best correlation occurs when the stock leads the market by ~5 days — macro is not the main driver."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is stronger (ρ≈0.50) and contemporaneous. Retail REIT sentiment meaningfully influences the tape."
      }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Higher company-specific share means the stock moves on its own tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "CRPU leads the market at best correlation; sector is contemporaneous.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Sector share has remained meaningful; company-specific share stays dominant.",
    drivers_bottom_line:
      "Bottom line: CRPU is tradable, but price moves are still heavily company/sector-driven — flow and sentiment matter as much as macro.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Liquidity is good for a small-cap REIT — limit orders are still preferred, but you can trade in size with planning.",
      "Because sector correlation is meaningful, avoid forcing trades on big sector-move days.",
      "Watch the order-flow signal: the order book imbalance has predictive power over short horizons."
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
      "Spread is moderate (~0.73%) and displayed depth is meaningful. Execution quality is generally strong, but larger clips should still be staged to reduce impact.",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. For CRPU, a S$50K clip is ~9% of ADV — comparatively easy for this peer set.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Price impact from mid to VWAP using latest order book snapshot (single-day). Real results vary by day and by urgency.",
    exec_check_insight:
      "CRPU combines solid activity (ADV ~S$544K; ~236 trades/day) with low volatility (~0.72%) and a manageable spread (~0.73%). Depth is meaningful; for institutional-sized tickets, staging and timing — not basic liquidity — drive outcomes.",

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
      "Most liquidity is during continuous trading (~86–89%). Auctions remain meaningful (~11–16%), so closing auctions can be useful for larger rebalances.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template:
      "HHI measures how spread out trading is. 0 = perfectly even, 1 = all at one time. Your value: {value}.",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note:
      "Liquidity clusters at 12:00 and into the close (16:30–17:00). Use these windows for larger clips when possible.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight:
      "Key insight: Trading is moderately concentrated (HHI ~0.23). Liquidity is accessible throughout the day, but best depth is typically around midday and the close.",

    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does imbalance explain daily returns?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note:
      "OFI measures buyer-initiated minus seller-initiated volume. Positive = more buying pressure. |OFI| shows how one-sided the tape is.",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger moves — useful as a risk flag.",

    index_title: "Index Eligibility",
    index_subtitle: "Which indices could include CRPU, and what's needed to qualify",

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
        value: "78.9",
        suffix: "/100",
        bar_pct: 78.9,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Rank 119/558 • Peer median: 76.3",
        interpretation: { text: "ABOVE AVERAGE", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Trading Cost (Spread)",
        tooltip: {
          title: "Why this matters",
          body: "The spread is your immediate cost to buy or sell. Wider spreads = higher trading costs."
        },
        value: "0.73",
        suffix: "%",
        bar_pct: 73,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "~73 basis points • Competitive for small-cap SGX",
        interpretation: { text: "GOOD", cls: "interpretation-good", icon: "●" }
      },
      {
        title: "Average Traded Volume",
        tooltip: {
          title: "What this means",
          body:
            "Average daily trading value over the last 20 days. Higher means more liquidity and easier to trade large amounts without moving the price."
        },
        value: "544.3K",
        suffix: "SGD",
        bar_pct: 30,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 426.9K SGD • +27.5% vs peers",
        interpretation: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "63.0",
        suffix: "% company",
        bar_pct: 63.0,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 5.8% • Sector: 31.3%",
        interpretation: { text: "Balanced", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "CRPU is an above-average liquidity small-cap on SGX (78.9/100; rank 119/558). This supports larger tickets with planning.",
      "Trading cost is manageable: spread ~0.73% and low volatility (~0.72%). ADV is ~S$544K/day (about +27.5% vs peers).",
      "Order flow is often one-sided (3M avg |OFI| ~44%), and the order-book imbalance is statistically significant as a short-horizon signal."
    ],

    action_plan: {
      borderClass: "border-emerald-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            {
              title: "Protect two-way liquidity (keep spreads tight in continuous trading)",
              bullets: [
                "Tight spreads are a key advantage versus small-cap peers — protect it during volatile or news-driven periods.",
                "Monitor the bid/ask queue health around key levels (0.68–0.70) where depth clusters."
              ]
            },
            {
              title: "Use OFI as an execution risk flag (not as a narrative KPI)",
              bullets: [
                "Order flow is often one-sided; avoid forcing size on extreme-imbalance days.",
                "Because L2 OFI predicts short-horizon mid-price moves, execution desks can use it to time clips."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Increase turnover/velocity without widening spreads",
              bullets: [
                "Turnover ratio is below peers (~0.17% vs peer median ~0.26%). Focus on repeat participation (investor engagement + liquidity support).",
                "Target smoother liquidity outside peak buckets to reduce concentration."
              ]
            },
            {
              title: "Raise the institutional share of trading",
              bullets: [
                "Institutions are ~1.2% of trades. Improving block friendliness (depth/impact predictability) helps attract larger holders.",
                "Provide predictable disclosure cadence to reduce event-driven liquidity gaps."
              ]
            }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            {
              title: "Treat index inclusion as an outcome (not a lever)",
              bullets: [
                "CRPU is eligible for FTSE All-Share; STI and iEdge Next 50 require a material rank improvement (current rank #117).",
                "Focus on stable turnover and predictable execution quality; index progress will follow."
              ]
            },
            {
              title: "Monitor lending pool / short mechanics as a liquidity risk",
              bullets: [
                "The lending pool is large versus daily volume (~7.9 days of ADV). Large borrow/return or pool sell events can move price.",
                "Add a monthly “lending + short” dashboard alongside spread/ADV and OFI."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      {
        title: "Daily Trades",
        value: "236",
        sub: "Active name with frequent prints — supports better execution",
        interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.17%",
        sub: "Below peers (median ~0.26%) — room to improve repeat turnover",
        interp: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "0.72%",
        sub: "Low day-to-day movement — reduces execution risk",
        interp: { text: "LOW", cls: "interpretation-good", icon: "✓" }
      }
    ],

    liq_insight:
      "CRPU ranks well for a small-cap SGX name. Liquidity is supported by solid ADV and trade count, while spread and volatility remain controlled. The main improvement lever is turnover/velocity (repeat trading) rather than basic liquidity quality.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.6825", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.73%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Depth", value: "Strong", note: "Meaningful size at multiple levels", color: "text-emerald-300" }
    ],

    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −0.37% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −1.22% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −2.59% • Fill: 58.5% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
    ],

    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],

    ofi_tiles_interpretations: [
      { cls: "bg-red-500/20 text-red-300", text: "One-sided" },
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate relationship" },
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
        "CRPU screens as an above-average liquidity small-cap on SGX. The composite liquidity score is 78.9/100 (rank 119 of 558), supported by solid ADV (~S$544K/day), frequent trading (~236 trades/day), a manageable spread (~0.73%), and low volatility (~0.72%).",
      strengths: [
        "ADV is above peers (+27.5% vs peer median), which supports larger tickets and improves investor experience",
        "Low-to-moderate volatility (~0.72%) versus peer median (~1.05%) reduces execution risk and makes the tape more predictable",
        "Spread is competitive (~0.73%) for small-cap SGX — crossing cost is not a major blocker"
      ],
      concerns: [
        "Turnover/velocity is below peers (turnover ratio ~0.17% vs peer median ~0.26%), suggesting repeat liquidity could be improved",
        "Retail-dominant trading (institutions ~1.2% of trades) can limit block depth on stressful days",
        "Order flow is often one-sided (3M avg |OFI| ~44%), which raises timing risk even when headline liquidity looks good"
      ],
      peer_context:
        "Compared to the peer set, CRPU’s liquidity quality is strong on ADV, spread, and volatility. The main differentiator to improve is repeat turnover and block friendliness, not basic tradability."
    },

    market_comparison: {
      adv: {
        insight: "CRPU ADV is ~S$544.3K/day — above peers and near sector median; far above the SGX market median.",
        vs_market: "Market median ADV is ~S$17.7K — CRPU sits well above the typical SGX name.",
        vs_sector: "Sector median ADV is ~S$645.1K — CRPU is modestly below the sector median but within range.",
        vs_peers: "Peer median ADV is ~S$426.9K — CRPU is meaningfully higher (+27.5%)."
      },
      spread: {
        insight: "Spread is relatively tight at ~0.73%, which keeps crossing cost manageable.",
        vs_market: "Market median spread is ~2.28% — CRPU is tighter than the typical SGX stock.",
        vs_sector: "Sector median spread is ~0.79% — CRPU is slightly tighter.",
        vs_peers: "Peer median spread is ~1.84% — CRPU is materially tighter (better)."
      },
      volatility: {
        insight: "Volatility is low (~0.72%), supporting steady execution.",
        vs_market: "Market median volatility is ~0.63% — CRPU is slightly higher than the broader market median.",
        vs_sector: "Sector median volatility is ~0.52% — CRPU is a bit higher than sector typical.",
        vs_peers: "Peer median volatility is ~1.05% — CRPU is substantially less volatile."
      },
      trades: {
        insight: "Trade count is strong (~236/day), supporting more continuous price discovery.",
        vs_market: "Market median trades is ~9/day — CRPU is far more active than typical SGX stocks.",
        vs_sector: "Sector median trades is ~331/day — CRPU is below sector typical but still high.",
        vs_peers: "Peer median trades is ~81/day — CRPU is materially higher (+191%)."
      }
    },

    performance: {
      overall:
        "CRPU has been stable to slightly down recently, outperforming its peer group over 3–6 months but lagging the broader market rally. With good liquidity, performance is more about fundamentals and sector sentiment than tradability constraints.",
      ytd: {
        stock: "N/A",
        market: "N/A",
        sector: "N/A",
        peers: "N/A",
        insight:
          "YTD detail is not separately reported in this dataset. Over the last month, the stock is flat while the market is up modestly."
      },
      three_month: {
        stock: "−0.7%",
        market: "+9.3%",
        sector: "−0.9%",
        peers: "−5.1%",
        insight:
          "Over 3 months, CRPU is slightly down (−0.7%), lags the market, outperforms peers, and roughly tracks sector softness."
      },
      six_month: {
        stock: "−1.4%",
        market: "+16.2%",
        sector: "+3.2%",
        peers: "−5.6%",
        insight:
          "Over 6 months, CRPU is modestly down while the market is up strongly; it still outperforms peers."
      },
      conclusion:
        "If the goal is broader investor demand, liquidity is not the bottleneck. Focus on fundamentals communication and on maintaining execution quality during volatile sector days."
    },

    drivers: {
      overall:
        "CRPU’s moves are split between company-specific drivers (~63%) and sector/market factors (~37% combined). Sector influence is meaningful (~31%), suggesting REIT sentiment and sector flows matter for timing.",
      interpretation:
        "This is not a pure ‘microstructure-only’ small-cap: market impact is small (~6%), sector conditions contribute meaningfully, so execution timing should respect sector tape.",
      rolling_change:
        "Across rolling windows, company-specific share stays dominant; sector share oscillates but remains material. This is consistent with a sector-sensitive REIT tape.",
      beta:
        "Market sensitivity is low/near-zero (β≈−0.08) and sector sensitivity is higher (β≈0.87). Directionally: sector tape matters more than broad macro for CRPU."
    },

    regime: {
      overall:
        "A two-regime model identifies Low Vol (~77% of time) and High Vol (~23%). Even the ‘High Vol’ regime is modest in absolute terms (~0.80% daily volatility).",
      current:
        "Current regime: Low Vol (σ≈0.00%, mean return ≈0.00%). Execution conditions are typically stable.",
      transitions:
        "Regime persistence is high: from High Vol there is ~72.7% probability of staying High Vol; from Low Vol there is ~94.2% probability of staying Low Vol. The environment is usually calm.",
      trading_implications:
        "In the dominant low-vol regime, execution is predictable. Still, avoid urgency during one-sided flow days."
    },

    trader_composition: {
      overall:
        "Trading is retail-heavy (~95.2% of trades), with limited institutional participation (~1.2% by count; ~49% by notional). This can constrain block liquidity during stress.",
      retail_heavy:
        "Retail dominance implies many small trades (median ~S$137), which can increase noise and make order flow signals more important for execution.",
      institutional_gap:
        "Low institutional presence by count reduces natural block liquidity. Larger trades should be staged and timed into deeper windows.",
      peer_comparison:
        "Peers are also retail-heavy. CRPU sits near the high end of retail concentration by count; by value, institutions are close to half of notional."
    },

    price_moving: {
      overall:
        "About 30.0% of trades moved the price (12,763 of 42,581). This indicates a tape that is still microstructure-sensitive despite good headline liquidity.",
      interpretation:
        "A higher share of price-moving trades means execution outcomes depend on how you trade (timing, limit discipline, and avoiding urgency).",
      asymmetry:
        "Negative price-moving trades are larger on average than positive movers (~2.05K vs ~1.85K SGD), suggesting selling pressure tends to be more disruptive."
    },

    short_selling: {
      overall:
        "Short participation is moderate on a 3–6 month view (~5–6% average short ratio) and lower recently (1M avg ~1.7%). This points to reduced short pressure into early February.",
      level:
        "3M avg short ratio: ~5.17% (max ~23.54%). 6M avg short ratio: ~5.64% (max ~29.21%).",
      correlation:
        "Short% vs daily return correlation is weak (≈−0.07); no clear relationship in this sample.",
      trend:
        "Short activity is trending down (−44% MoM; ~−69% vs 3M average over the last 14 days). Separately, the SBL lending pool is large versus daily volume (~7.9 days of ADV), which is the more important ‘liquidity overhang’ metric in a stress scenario.",
      peaks:
        "Peak shorting episodes were episodic (e.g., 2025-12-02 ~23.5%); they did not consistently coincide with large down days. The more relevant risk is the lending pool size versus daily volume."
    },

    execution: {
      overall:
        "Execution conditions are generally good: spread ~0.73%, low volatility, and meaningful displayed depth around 0.68–0.70. Estimated price impact: ~0.37% for S$100K, ~1.22% for S$1M, and ~2.59% for S$2.5M (partial fill).",
      concern:
        "The key risk is not crossing cost; it is concentration of flow. One-sided order flow can create short windows of poor execution even in a generally liquid name.",
      peer_context:
        "A S$50K ticket is ~9% of CRPU’s ADV — materially easier than many peers where 50K can exceed 100% of ADV."
    },

    intraday: {
      overall:
        "Trading is moderately concentrated (HHI ~0.23 over 6 months). Liquidity is present through the day, with meaningful activity in auctions and clustered buckets.",
      hhi_interpretation:
        "HHI between 0.15 and 0.25 is considered moderate concentration. CRPU sits near that range, meaning timing still matters but liquidity is not limited to a single window.",
      best_times:
        "The strongest buckets are around 12:00 and into the close (16:30–17:00). These windows are generally better for larger clips.",
      peer_ranking:
        "CRPU’s concentration is moderate relative to peers; several peers are much more concentrated (higher HHI), which makes CRPU comparatively easier to trade intraday."
    },

    ofi: {
      overall:
        "Order flow is often one-sided (3M avg |OFI| ~43.9%), and daily OFI has a moderate relationship with same-day returns (corr ~0.241). Crucially, order-book imbalance (L2 OFI) significantly predicts mid-price moves at short horizons (p≈3.19e-35; negative direction).",
      daily_vs_intraday:
        "Use daily OFI primarily as a ‘stress flag’ (one-sided tape). The stronger, actionable signal is intraday: L2 imbalance predicts short-horizon price changes.",
      l2_signal:
        "Over 1,242 valid L2 snapshots, OFI% → mid-price was statistically significant at a short lag (best lag=4), with a negative correlation (buy pressure → price down). This suggests contrarian/mean-reversion microstructure and warrants careful execution logic.",
      day_breakdown:
        "Over the 3M window: net buying days ~34.8%, net selling days ~63.6%, and balanced days ~1.5% — the tape is rarely neutral."
    },

    index: {
      overall:
        "CRPU is eligible for FTSE All-Share. It is not eligible for STI (rank #117; needs top 30) or iEdge Next 50 (needs rank ≤80).",
      hsci: "N/A for Singapore market (HSCI is Hong Kong-specific).",
      hsi_gap: "N/A (HSI is Hong Kong-specific).",
      tech_gap: "N/A (Hang Seng TECH is Hong Kong-specific).",
      recommendation:
        "Index visibility is already reasonable via FTSE All-Share. The next step is not chasing STI rank, but maintaining liquidity quality and improving velocity/turnover to support larger ownership over time."
    }
  },

  // ============================================================================
  // SERIES - RAW DATA USED BY CHARTS
  // ============================================================================
  series: {
    peers_liquidity: {
      labels: ["CRPU", "D5IU", "ODBU", "BMGU", "OXMU", "CTO", "41O", "CMOU", "H30"],
      scores: [
        78.85304659498208,
        62.903225806451616,
        55.017921146953405,
        24.731182795698924,
        80.64516129032258,
        83.15412186379928,
        84.22939068100358,
        73.65591397849462,
        79.03225806451613
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [
        544289.25,
        112341.25,
        81443.91554707443,
        455.0,
        683825.7259621363,
        415512.30000000005,
        821584.5,
        438245.3199875546,
        465655.5
      ],
      total: 558
    },

    market_comparison: {
      sector_name: "REIT - Retail",
      sector_count: 8,
      market_count: 558,
      company: {
        volatility: 0.007246376811594013,
        adv: 544289.25,
        spread_pct: 0.007281625746558211,
        turnover_ratio: 0.0017449538403972648,
        amihud: 9.451132207361107e-09,
        trades: 236.5
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
          mean: 377382.9389370957,
          median: 426878.8099937773,
          min: 455.0,
          max: 821584.5,
          p5: 28801.120441476054,
          p95: 773368.9290867476,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 152.1875,
          median: 81.25,
          min: 1.5,
          max: 625.5,
          p5: 5.525,
          p95: 488.4749999999998,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.013460345014653943,
          median: 0.010462614308768214,
          min: 0.0,
          max: 0.0348837209302324,
          p5: 0.0,
          p95: 0.0306289640591965,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.03725055503980029,
          median: 0.01836374182850282,
          min: 0.006511554830961768,
          max: 0.13333333333333333,
          p5: 0.006881978143715009,
          p95: 0.11518288261128172,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 2.028782456793851e-06,
          median: 2.1167219195734194e-08,
          min: 0.0,
          max: 1.605361908775309e-05,
          p5: 4.1299847322724165e-09,
          p95: 1.0459884318554696e-05,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.005423963194844253,
          median: 0.0025902117780194148,
          min: 1.924547717958787e-06,
          max: 0.025781774398846366,
          p5: 7.107995586540914e-05,
          p95: 0.018874376406699356,
          count: 8
        }
      }
    },

    returns: [
      { horizon: "1M", stock: 0.0, market: 4.142633470475743, sector: -1.0282938389016616, peers: -1.2482376314051358 },
      { horizon: "3M", stock: -0.7246376811594346, market: 9.29174819557832, sector: -0.8546315811294947, peers: -5.107865710471782 },
      { horizon: "6M", stock: -1.4388489208632893, market: 16.183690923560535, sector: 3.1564494971833, peers: -5.617474095724662 },
      { horizon: "LAST_YEAR", stock: 0.0, market: 22.668968242253463, sector: 6.131041377748181, peers: -18.816834667231197 }
    ],

    drivers: {
      // Stored as percentages (0-100) for the UI pie
      share_market: 5.779992080865823,
      share_sector: 31.270384192321975,
      share_idio: 62.9496237268122,
      beta_market: -0.08053907773982313,
      beta_sector: 0.8722920337710461,
      r_squared: 25.81881356679492,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.3076766175679213,
          -0.15221318955471663,
          0.2503334712332575,
          -0.10537569058483154,
          -0.0106163410978476,
          0.06905965017233617,
          -0.13084194587900663,
          0.13146905312819646,
          -0.06891915460431208,
          0.17335281344409434,
          -0.05084590745855151
        ],
        corr_sector: [
          0.14752384204024238,
          -0.003811361969628513,
          -0.10320797329607459,
          0.20503348015819772,
          -0.2904957423185365,
          0.503424679713664,
          -0.24327772982228074,
          0.16905417527411487,
          -0.1415018185001883,
          0.06421631753384215,
          0.027478395195811776
        ],
        best: { market: -5, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-01-28 to 2025-04-01",
          shares: { share_market: 0.03795099494865445, share_sector: 0.3365486025374348, share_idio: 0.6255004025139107 },
          regression: { r_squared: 0.23090735248954775 }
        },
        p2: {
          valid: true,
          period_label: "2025-04-01 to 2025-06-03",
          shares: { share_market: 0.14996843924097936, share_sector: 0.1635499614086749, share_idio: 0.6864815993503458 },
          regression: { r_squared: 0.1346017050053241 }
        },
        p3: {
          valid: true,
          period_label: "2025-06-03 to 2025-08-05",
          shares: { share_market: 0.277995274422007, share_sector: 0.14103057122284274, share_idio: 0.5809741543551504 },
          regression: { r_squared: 0.4259354483290032 }
        },
        p4: {
          valid: true,
          period_label: "2025-08-05 to 2025-10-07",
          shares: { share_market: 0.04488908785470913, share_sector: 0.3216153417059079, share_idio: 0.633495570439383 },
          regression: { r_squared: 0.30903261000252846 }
        },
        p5: {
          valid: true,
          period_label: "2025-10-07 to 2025-12-09",
          shares: { share_market: 0.021397330964874752, share_sector: 0.39929491320614485, share_idio: 0.5793077558289804 },
          regression: { r_squared: 0.3296873197133048 }
        },
        p6: {
          valid: true,
          period_label: "2025-12-09 to 2026-02-10",
          shares: { share_market: 0.05779992080865823, share_sector: 0.31270384192321976, share_idio: 0.629496237268122 },
          regression: { r_squared: 0.2581881356679492 }
        }
      },
      rolling: {
        ordered: [
          "2025-01-28 to 2025-04-01",
          "2025-04-01 to 2025-06-03",
          "2025-06-03 to 2025-08-05",
          "2025-08-05 to 2025-10-07",
          "2025-10-07 to 2025-12-09",
          "2025-12-09 to 2026-02-10"
        ],
        market: [3.8, 15.0, 28.0, 4.5, 2.1, 5.8],
        sector: [33.7, 16.4, 14.1, 32.2, 39.9, 31.3],
        idio: [62.6, 68.6, 58.1, 63.3, 57.9, 62.9]
      },
      regime: {
        n_regimes: 2,
        labels: ["High Vol", "Low Vol"],
        pct_time: [23.015873015873016, 76.98412698412699],
        current_regime: 1,
        regimes: [
          { id: 0, label: "High Vol", mean_ret: -0.7299270072992692, volatility: 0.795727780162905, n_days: 29, pct_time: 23.015873015873016 },
          { id: 1, label: "Low Vol", mean_ret: 0.0, volatility: 0.0001, n_days: 97, pct_time: 76.98412698412699 }
        ],
        transitions: [
          [72.71747494003102, 27.28252505996898],
          [94.19420557476881, 5.805794425231197]
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.68, quantity: 404300.0, value: 274924.0 },
        { level: 2, price: 0.675, quantity: 581700.0, value: 392647.5 },
        { level: 3, price: 0.67, quantity: 384000.0, value: 257280.00000000003 },
        { level: 4, price: 0.665, quantity: 77100.0, value: 51271.5 },
        { level: 5, price: 0.66, quantity: 139900.0, value: 92334.0 },
        { level: 6, price: 0.655, quantity: 64200.0, value: 42051.0 },
        { level: 7, price: 0.65, quantity: 199200.0, value: 129480.0 },
        { level: 8, price: 0.645, quantity: 64600.0, value: 41667.0 },
        { level: 9, price: 0.64, quantity: 134700.0, value: 86208.0 },
        { level: 10, price: 0.63, quantity: 150000.0, value: 94500.0 }
      ],
      asks: [
        { level: 1, price: 0.685, quantity: 330500.0, value: 226392.50000000003 },
        { level: 2, price: 0.69, quantity: 1582200.0, value: 1091718.0 },
        { level: 3, price: 0.695, quantity: 425600.0, value: 295792.0 },
        { level: 4, price: 0.7, quantity: 236400.0, value: 165480.0 },
        { level: 5, price: 0.705, quantity: 74200.0, value: 52311.0 },
        { level: 6, price: 0.71, quantity: 143600.0, value: 101956.0 },
        { level: 7, price: 0.715, quantity: 160500.0, value: 114757.5 },
        { level: 8, price: 0.72, quantity: 94400.0, value: 67968.0 },
        { level: 9, price: 0.725, quantity: 95200.0, value: 69020.0 },
        { level: 10, price: 0.73, quantity: 74700.0, value: 54531.0 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 9.2,
      peers: [
        { ticker: "41O", pct: 121.7 },
        { ticker: "OXMU", pct: 146.2 },
        { ticker: "H30", pct: 214.8 },
        { ticker: "CMOU", pct: 228.2 },
        { ticker: "CTO", pct: 240.7 },
        { ticker: "D5IU", pct: 890.1 },
        { ticker: "ODBU", pct: 1227.8 },
        { ticker: "BMGU", pct: 219780.2 }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 3888,
      first_trade_date: "2026-01-12",
      last_trade_date: "2026-02-09",
      period_days: 28,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.9516460905349794,
        mixed_pct: 0.036265432098765434,
        instit_pct: 0.012088477366255145,
        retail_qty_pct: 0.20503934895367554,
        mixed_qty_pct: 0.30248949204077985,
        instit_qty_pct: 0.4924711590055446,
        retail_notional_pct: 0.20516975288221295,
        mixed_notional_pct: 0.3023976453300831,
        instit_notional_pct: 0.4924326017877039
      },
      trade_size: { avg: 3158.5075874485597, median: 137.0 },
      over_time: {
        valid: true,
        periods: [
          {
            month: "2026-02",
            n_trades: 878,
            retail_pct: 0.9544419134396356,
            mixed_pct: 0.03644646924829157,
            instit_pct: 0.009111617312072893,
            avg_trade_size: 2612.871867881549,
            retail_qty_pct: 0.21991589872058692,
            mixed_qty_pct: 0.3505114670006859,
            instit_qty_pct: 0.42957263427872716,
            total_quantity: 3353100.0
          },
          {
            month: "2026-01",
            n_trades: 4399,
            retail_pct: 0.9581723118890657,
            mixed_pct: 0.031370766083200725,
            instit_pct: 0.010456922027733576,
            avg_trade_size: 2736.767219822687,
            retail_qty_pct: 0.21909625644065478,
            mixed_qty_pct: 0.30213510555834205,
            instit_qty_pct: 0.47876863800100317,
            total_quantity: 17544800.0
          },
          {
            month: "2025-12",
            n_trades: 6567,
            retail_pct: 0.979442667884879,
            mixed_pct: 0.019186843307446324,
            instit_pct: 0.0013704888076747374,
            avg_trade_size: 1122.695523069895,
            retail_qty_pct: 0.4231022558867117,
            mixed_qty_pct: 0.46414000036591835,
            instit_qty_pct: 0.11275774374736997,
            total_quantity: 10931400.0
          },
          {
            month: "2025-11",
            n_trades: 8665,
            retail_pct: 0.9749567224466243,
            mixed_pct: 0.020657818811309868,
            instit_pct: 0.004385458742065782,
            avg_trade_size: 1786.9442008078477,
            retail_qty_pct: 0.32405704279091513,
            mixed_qty_pct: 0.31817279572311397,
            instit_qty_pct: 0.3577701614859709,
            total_quantity: 22670700.0
          },
          {
            month: "2025-10",
            n_trades: 10556,
            retail_pct: 0.9761273209549072,
            mixed_pct: 0.019041303524062143,
            instit_pct: 0.004831375521030693,
            avg_trade_size: 1713.3567639257294,
            retail_qty_pct: 0.31143762170387307,
            mixed_qty_pct: 0.30180300639168967,
            instit_qty_pct: 0.38675937190443727,
            total_quantity: 26550100.0
          },
          {
            month: "2025-09",
            n_trades: 9024,
            retail_pct: 0.9504654255319149,
            mixed_pct: 0.04111258865248227,
            instit_pct: 0.008421985815602837,
            avg_trade_size: 3115.2004100177305,
            retail_qty_pct: 0.2801681092908633,
            mixed_qty_pct: 0.38332090190238066,
            instit_qty_pct: 0.3365109888067561,
            total_quantity: 40354700.0
          }
        ]
      },
      peer_comparison: [
        {
          ticker: "CRPU",
          currency: "SGD",
          is_target: true,
          retail_pct: 0.9516460905349794,
          mixed_pct: 0.036265432098765434,
          instit_pct: 0.012088477366255145,
          retail_qty_pct: 0.20503934895367554,
          mixed_qty_pct: 0.30248949204077985,
          instit_qty_pct: 0.4924711590055446,
          retail_notional_pct: 0.20516975288221295,
          mixed_notional_pct: 0.3023976453300831,
          instit_notional_pct: 0.4924326017877039,
          avg_trade_size: 3158.5075874485597,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "BMGU",
          currency: "SGD",
          is_target: false,
          retail_pct: 1.0,
          mixed_pct: 0.0,
          instit_pct: 0.0,
          retail_qty_pct: 1.0,
          mixed_qty_pct: 0.0,
          instit_qty_pct: 0.0,
          retail_notional_pct: 1.0,
          mixed_notional_pct: 0.0,
          instit_notional_pct: 0.0,
          avg_trade_size: 810.7121212121212,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "41O",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9527896995708155,
          mixed_pct: 0.044284042138119394,
          instit_pct: 0.002926258291065158,
          retail_qty_pct: 0.3969192537826382,
          mixed_qty_pct: 0.482468121855145,
          instit_qty_pct: 0.1206126243622168,
          retail_notional_pct: 0.39555363267133814,
          mixed_notional_pct: 0.48223045952589394,
          instit_notional_pct: 0.1222159078027679,
          avg_trade_size: 2316.86631876707,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "D5IU",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.950786056049214,
          mixed_pct: 0.0430622009569378,
          instit_pct: 0.006151742993848257,
          retail_qty_pct: 0.3415696436827434,
          mixed_qty_pct: 0.4183791412322018,
          instit_qty_pct: 0.24005121508505475,
          retail_notional_pct: 0.3566310644871697,
          mixed_notional_pct: 0.41837664580968287,
          instit_notional_pct: 0.2249922897031476,
          avg_trade_size: 2744.640874914559,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "H30",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.9034070951879171,
          mixed_pct: 0.09097295398665262,
          instit_pct: 0.005619950825430277,
          retail_qty_pct: 0.3618930467434935,
          mixed_qty_pct: 0.5305192282791661,
          instit_qty_pct: 0.10758772497734041,
          retail_notional_pct: 0.3608026664719673,
          mixed_notional_pct: 0.5318972660428553,
          instit_notional_pct: 0.10730006748517748,
          avg_trade_size: 4632.793466807166,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "CTO",
          currency: "SGD",
          is_target: false,
          retail_pct: 0.8631159780985564,
          mixed_pct: 0.13091090094574415,
          instit_pct: 0.005973120955699353,
          retail_qty_pct: 0.4129926424089822,
          mixed_qty_pct: 0.504771143987355,
          instit_qty_pct: 0.08223621360366277,
          retail_notional_pct: 0.4090693431067591,
          mixed_notional_pct: 0.5098361942255007,
          instit_notional_pct: 0.0810944626677402,
          avg_trade_size: 6259.616774514684,
          thresholds: { retail_max: 13500.0, instit_min: 67500.0 }
        },
        {
          ticker: "OXMU",
          currency: "USD",
          is_target: false,
          retail_pct: 0.8062659846547314,
          mixed_pct: 0.1489769820971867,
          instit_pct: 0.04475703324808184,
          retail_qty_pct: 0.1178071254052155,
          mixed_qty_pct: 0.40759968700595645,
          instit_qty_pct: 0.474593187588828,
          retail_notional_pct: 0.11651158163948319,
          mixed_notional_pct: 0.4070841741977251,
          instit_notional_pct: 0.47640424416279176,
          avg_trade_size: 8476.718414322251,
          thresholds: { retail_max: 10000.0, instit_min: 50000.0 }
        },
        {
          ticker: "ODBU",
          currency: "USD",
          is_target: false,
          retail_pct: 0.725,
          mixed_pct: 0.235,
          instit_pct: 0.04,
          retail_qty_pct: 0.17680539002262058,
          mixed_qty_pct: 0.4214482037311799,
          instit_qty_pct: 0.4017464062461995,
          retail_notional_pct: 0.17630840404430778,
          mixed_notional_pct: 0.42325033674147916,
          instit_notional_pct: 0.40044125921421303,
          avg_trade_size: 10996.9375,
          thresholds: { retail_max: 10000.0, instit_min: 50000.0 }
        },
        {
          ticker: "CMOU",
          currency: "USD",
          is_target: false,
          retail_pct: 0.7112676056338029,
          mixed_pct: 0.2414486921529175,
          instit_pct: 0.047283702213279676,
          retail_qty_pct: 0.12421521724883675,
          mixed_qty_pct: 0.48700002184503133,
          instit_qty_pct: 0.3887847609061319,
          retail_notional_pct: 0.1242273504921832,
          mixed_notional_pct: 0.4855716033056633,
          instit_notional_pct: 0.3902010462021535,
          avg_trade_size: 10782.605130784708,
          thresholds: { retail_max: 10000.0, instit_min: 50000.0 }
        }
      ],
      currency_thresholds: {
        SGD: { retail_max: 13500.0, instit_min: 67500.0 },
        USD: { retail_max: 10000.0, instit_min: 50000.0 }
      },
      classification_legend: {
        retail_heavy: ">70% retail",
        institutional: ">20% institutional",
        mixed: "otherwise"
      }
    },

    price_moving_trades: {
      total_trades: 42581,
      price_moving_trades: 12763,
      pct_price_moving: 29.97346234235927,
      all_movers: { count: 12763, avg_size: 1950.978492517433, median_size: 208.49999999999997 },
      positive_movers: { count: 6383, avg_size: 1853.2305342315526, median_size: 204.00000000000003 },
      negative_movers: { count: 6380, avg_size: 2048.7724137931036, median_size: 272.0 }
    },

    short_selling: {
      data_available: true,
      security_name: "Sasseur Reit",
      mapping: { ticker_to_security: "Sasseur Reit", confidence: "high" },
      coverage: { n_days_short_data: 88, window_days: 182 },
      sbl_pool: {
        valid: true,
        lending_pool: 7949950,
        lending_pool_value: 5445715.75,
        latest_price: 0.685,
        lending_rate_pct: 2.97,
        borrowing_rate_pct: 4.25,
        pool_as_pct_adv: 787.6852805960685,
        days_to_liquidate: 7.876852805960685,
        estimated_impact_pct: 0.05,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Significant price impact if entire pool sold",
        timestamp: ""
      },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.016997876316325492, max_short_ratio: 0.09597292724196277, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.051710561002457, max_short_ratio: 0.23535638673253353, interpretation: "Moderate short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.05640903407319397, max_short_ratio: 0.2921143320494628, interpretation: "Moderate short interest" } }
      },
      correlation: { valid: true, correlation: -0.0741778351248829, interpretation: "No clear relationship" },
      peaks: [
        { date: "2025-12-02", short_ratio: 0.23535638673253353, return_pct: 0.0 },
        { date: "2025-12-04", short_ratio: 0.20565704183853858, return_pct: 0.0 },
        { date: "2025-12-08", short_ratio: 0.1941747572815534, return_pct: -0.7352941176470562 },
        { date: "2025-11-18", short_ratio: 0.18656074147633234, return_pct: -0.7352941176470562 },
        { date: "2025-10-08", short_ratio: 0.17972831765935215, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-02", avg_short_ratio: 0.009514013568657147 },
          { month: "2026-01", avg_short_ratio: 0.016982764014565978 },
          { month: "2025-12", avg_short_ratio: 0.07871316646993508 },
          { month: "2025-11", avg_short_ratio: 0.0668994704724344 },
          { month: "2025-10", avg_short_ratio: 0.06470348255473901 },
          { month: "2025-09", avg_short_ratio: 0.06966288440475607 },
          { month: "2025-08", avg_short_ratio: 0.05367218265667169 },
          { month: "2025-07", avg_short_ratio: 0.023438723514618575 },
          { month: "2025-06", avg_short_ratio: 0.02462641566210631 },
          { month: "2025-05", avg_short_ratio: 0.03425148828958405 },
          { month: "2025-04", avg_short_ratio: 0.06319827529014274 },
          { month: "2025-03", avg_short_ratio: 0.06313884452952731 }
        ],
        mom_change: [
          { month: "2026-02", avg_short_ratio: 0.009514013568657147, change_pct: null },
          { month: "2026-01", avg_short_ratio: 0.016982764014565978, change_pct: 78.5026255429548 },
          { month: "2025-12", avg_short_ratio: 0.07871316646993508, change_pct: 363.4885487569835 },
          { month: "2025-11", avg_short_ratio: 0.0668994704724344, change_pct: -15.008538631225035 },
          { month: "2025-10", avg_short_ratio: 0.06470348255473901, change_pct: -3.2825191323453518 },
          { month: "2025-09", avg_short_ratio: 0.06966288440475607, change_pct: 7.664814402874552 },
          { month: "2025-08", avg_short_ratio: 0.05367218265667169, change_pct: -22.95440661798473 },
          { month: "2025-07", avg_short_ratio: 0.023438723514618575, change_pct: -56.329848434615435 },
          { month: "2025-06", avg_short_ratio: 0.02462641566210631, change_pct: 5.067221970287669 },
          { month: "2025-05", avg_short_ratio: 0.03425148828958405, change_pct: 39.08434243757299 },
          { month: "2025-04", avg_short_ratio: 0.06319827529014274, change_pct: 84.51249404354051 },
          { month: "2025-03", avg_short_ratio: 0.06313884452952731, change_pct: -0.09403857991786144 }
        ],
        interpretation: "Shorts covering significantly (-44% MoM) | YoY: -85% ⬇️"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-02-10", short_ratio: 0.0, short_vol: 0, total_vol: 726400, return: 0.007352941176470562 },
          { date: "2026-02-09", short_ratio: 0.0, short_vol: 0, total_vol: 813000, return: -0.007299270072992692 },
          { date: "2026-02-06", short_ratio: 0.0, short_vol: 0, total_vol: 617100, return: 0.007352941176470562 },
          { date: "2026-02-05", short_ratio: 0.01563966218329684, short_vol: 10000, total_vol: 639400, return: -0.007299270072992692 },
          { date: "2026-02-03", short_ratio: 0.025183823529411765, short_vol: 13700, total_vol: 544000, return: -0.007246376811594013 }
        ]
      },
      peer_comparison: [
        { ticker: "CRPU", avg_short_ratio: 0.051710561002457, max_short_ratio: 0.23535638673253353, is_target: true },
        { ticker: "BMGU", avg_short_ratio: 1.9607843137254903e-05, max_short_ratio: 0.007352941176470588, is_target: false },
        { ticker: "ODBU", avg_short_ratio: 0.0005026243865356618, max_short_ratio: 0.08671839342765861, is_target: false },
        { ticker: "CMOU", avg_short_ratio: 0.001113657511584361, max_short_ratio: 0.08992053534086157, is_target: false },
        { ticker: "CTO", avg_short_ratio: 0.0017927252386862947, max_short_ratio: 0.2660722230461219, is_target: false },
        { ticker: "D5IU", avg_short_ratio: 0.002010721790067592, max_short_ratio: 0.2702329197017246, is_target: false },
        { ticker: "OXMU", avg_short_ratio: 0.008412551499940558, max_short_ratio: 0.8547942828637733, is_target: false },
        { ticker: "H30", avg_short_ratio: 0.07732842215888919, max_short_ratio: 0.7515389876880985, is_target: false }
      ]
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.03131469040608897, continuous: 0.8350604807620846, closing: 0.1250402049211134, auctions: 0.1649395192379154, other: 0.0 },
        "3M": { opening: 0.026448292131311685, continuous: 0.8581659158438274, closing: 0.10649807912710273, auctions: 0.14183408415617269, other: 0.0 },
        "6M": { opening: 0.026612179206777525, continuous: 0.8876339699604197, closing: 0.07693286367774925, auctions: 0.11236603003958025, other: 0.0 }
      },
      hhi: { "1M": 0.28398989625202786, "3M": 0.2441949319717111, "6M": 0.2325695760144972 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0198 },
        { time: "09:00", avg_share: 0.0935 },
        { time: "09:30", avg_share: 0.0439 },
        { time: "10:00", avg_share: 0.0465 },
        { time: "10:30", avg_share: 0.0467 },
        { time: "11:00", avg_share: 0.0467 },
        { time: "11:30", avg_share: 0.0451 },
        { time: "12:00", avg_share: 0.1622 },
        { time: "12:30", avg_share: 0.0111 },
        { time: "13:00", avg_share: 0.0228 },
        { time: "13:30", avg_share: 0.0246 },
        { time: "14:00", avg_share: 0.0382 },
        { time: "14:30", avg_share: 0.0376 },
        { time: "15:00", avg_share: 0.0355 },
        { time: "15:30", avg_share: 0.0517 },
        { time: "16:00", avg_share: 0.0453 },
        { time: "16:30", avg_share: 0.1055 },
        { time: "17:00", avg_share: 0.1233 }
      ],
      peers_hhi_rows: [
        { ticker: "CRPU", auctions_pct: 11.57730909510177, hhi: 0.23208368849802113, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "OXMU", auctions_pct: 9.401713415143881, hhi: 0.19212341015837633, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "H30", auctions_pct: 25.372729896748098, hhi: 0.20504957306676624, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "41O", auctions_pct: 5.491192178492109, hhi: 0.2038612288792439, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "CMOU", auctions_pct: 9.123113629209694, hhi: 0.28201211067988774, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "ODBU", auctions_pct: 4.091211257332761, hhi: 0.4074801461635423, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "D5IU", auctions_pct: 11.067381341751462, hhi: 0.4576798005636026, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "CTO", auctions_pct: 5.775283186133438, hhi: 0.5996682995485784, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BMGU", auctions_pct: 1.6304600384323173, hhi: 0.7474088406621257, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "43.9%", note_suffix: " - 3-month average absolute OFI (how one-sided trading is)." },
        { value: "0.241", note_suffix: " - Correlation between daily OFI and same-day returns (moderate)." },
        { value: "Significant (short-horizon)", note_suffix: " - L2 OFI Granger-causality is significant (p≈3.19e-35) at a short lag." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−3.0%", avg_abs: "50.4%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "−12.4%", avg_abs: "43.9%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "−4.5%", avg_abs: "38.6%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.241",
      pie: { net_buy_days: 34.8, net_sell_days: 63.6, balanced_days: 1.5 },
      l2_compact_text:
        "Over the last 7 days we analyzed 1,242 valid L2 snapshots (top 4 levels). Average L2 OFI was −0.076% of book value (abs: 2.041%). The key finding: OFI% Granger-causes mid-price changes with a short lag (p≈3.19e-35). Direction is negative (buy pressure → price down), suggesting contrarian/mean-reversion microstructure and the need to avoid urgency during extreme imbalances.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [
        { date: "2026-01-15", ofi: "+88.9%", direction: "BUY pressure", return: "+0.7%" },
        { date: "2025-11-11", ofi: "−84.8%", direction: "SELL pressure", return: "+0.7%" },
        { date: "2026-01-13", ofi: "+84.0%", direction: "BUY pressure", return: "+0.7%" },
        { date: "2025-12-12", ofi: "−82.6%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2026-01-20", ofi: "−81.9%", direction: "SELL pressure", return: "+0.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#117", sub: "of 562 stocks" },
        { title: "Free Float", value: "38.2%", sub: "Float mcap ~ S$327M" },
        { title: "Avg Daily Turnover", value: "S$530K", sub: "Notional value" },
        { title: "Velocity", value: "0.156%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #117 - outside top 30", gaps: ["Need rank ≤30 (currently #117)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 96.8% - qualifies", gaps: [] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #117 - below top 80", gaps: ["Need rank ≤80 (currently #117)"] }
      ],
      insight:
        "💡 Key insight: CRPU is already eligible for FTSE All-Share. The main gaps are STI and iEdge Next 50, constrained by market-cap rank (#117).",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Improve relative market-cap rank over time (business performance + investor demand)",
        "Maintain healthy velocity/turnover through cycles (support repeat participation)",
        "Protect tradability (spread/depth) so new ownership can build positions efficiently"
      ]
    }
  }
};

export default REPORT_DATA;
