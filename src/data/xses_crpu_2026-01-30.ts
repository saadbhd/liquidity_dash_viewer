// @ts-nocheck

// ============================================================================
// Sasseur REIT (CRPU) Liquidity Analysis Report
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
    "Start with the same market-cap category as the company (small cap)",
    "Prefer the same sector first, then the same industry",
    "Select a small set (typically 6–10) for practical comparison"
  ],
  peers: [
    { ticker: "D5IU", name: "Lippo Malls Tr", marketCap: "S$69.3M" },
    { ticker: "ODBU", name: "UtdHampshReitUSD", marketCap: "S$315.5M" },
    { ticker: "BMGU", name: "BHG Retail Reit", marketCap: "S$252.0M" },
    { ticker: "OXMU", name: "Prime US ReitUSD", marketCap: "S$260.3M" },
    { ticker: "CTO", name: "Hong Lai Huat", marketCap: "S$45.1M" },
    { ticker: "41O", name: "LHN", marketCap: "S$297.0M" },
    { ticker: "W8W", name: "Coliwoo Hldgs", marketCap: "S$293.3M" },
    { ticker: "H30", name: "Hong Fok", marketCap: "S$522.1M" }
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
    asof_date: "2026-01-30",
    industry: "Real Estate",
    sector: "REIT - Retail",
    market_cap_display: "863.0M",
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
        text: "Liquidity score: 83% — ABOVE AVG",
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
      "CRPU has held up better than its peer set recently, but still lags the broader market rally. Liquidity quality is good, so execution is more about timing and flow conditions than basic tradability.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or company-specific factors?",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 53% of recent moves are company-specific. Sector contributes ~31% and the overall market ~16%."
      },
      {
        title: "Market Link",
        text:
          "Market correlation is moderate (ρ≈0.37) and mostly contemporaneous — timing matters, but macro is not the full story."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is stronger (ρ≈0.60). Retail REIT sentiment materially influences the tape."
      }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "Higher company-specific share means the stock moves on its own tape.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "CRPU moves largely contemporaneously with market and sector.",
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
    regime_badge_text: "Current: High Volatility Regime",
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
      "Lower is better. For CRPU, a S$50K clip is ~6% of ADV — comparatively easy for this peer set.",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Impact is measured from mid-price to simulated VWAP using the latest order book snapshot (single-day). Real results vary by day and by urgency.",
    exec_check_insight:
      "CRPU combines strong activity (ADV ~S$837K; ~282 trades/day) with low volatility (~0.6%) and a manageable spread (~0.7%). For institutional-sized tickets, the key variable is staging and timing — not basic liquidity.",

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
      "Most liquidity is during continuous trading (~87–89%). Auctions remain meaningful (~11–19%), so closing auctions can be useful for larger rebalances.",
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
        value: "83.3",
        suffix: "/100",
        bar_pct: 83.3,
        color_value: "text-emerald-300",
        color_bar: "text-emerald-300",
        subtext: "Rank 94/558 • Peer median: 69.4",
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
        value: "836.7K",
        suffix: "SGD",
        bar_pct: 35,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 561.0K SGD • +49% vs peers",
        interpretation: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "53.0",
        suffix: "% company",
        bar_pct: 53.0,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 15.8% • Sector: 31.2%",
        interpretation: { text: "Balanced", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "CRPU screens as an above-average liquidity small-cap on SGX (83.3/100; rank 94/558). This supports larger tickets with planning.",
      "Trading cost is manageable: spread ~0.7% and low volatility (~0.6%). ADV is ~S$837K/day (about +49% vs peers).",
      "Order flow is often one-sided (3M avg |OFI| ~41.5%), and the order-book imbalance has statistically significant predictive power at ~5-minute horizons."
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
                "Turnover ratio is lower than peers (~0.27% vs peer median ~0.67%). Focus on repeat participation (investor engagement + liquidity support).",
                "Target smoother liquidity outside peak buckets to reduce concentration."
              ]
            },
            {
              title: "Raise the institutional share of trading",
              bullets: [
                "Institutions are ~0.7% of trades. Improving block friendliness (depth/impact predictability) helps attract larger holders.",
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
                "CRPU is eligible for FTSE All-Share and FTSE Small Cap; STI / iEdge Next 50 require a large rank improvement.",
                "Focus on stable turnover and predictable execution quality; index progress will follow."
              ]
            },
            {
              title: "Monitor lending pool / short mechanics as a liquidity risk",
              bullets: [
                "The lending pool is large versus daily volume (~8.2 days of ADV). Large borrow/return or pool sell events can move price.",
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
        value: "282",
        sub: "Active name with frequent prints — supports better execution",
        interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.27%",
        sub: "Below peers (median ~0.67%) — room to improve repeat turnover",
        interp: { text: "BELOW PEERS", cls: "interpretation-neutral", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "0.64%",
        sub: "Low day-to-day movement — reduces execution risk",
        interp: { text: "LOW", cls: "interpretation-good", icon: "✓" }
      }
    ],

    liq_insight:
      "CRPU ranks well for a small-cap SGX name. Liquidity is supported by solid ADV and trade count, while spread and volatility remain controlled. The main improvement lever is turnover/velocity (repeat trading) rather than basic liquidity quality.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.6875", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.73%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Kyle's Lambda", value: "0.19 bps", note: "per S$10K traded", color: "text-white" }
    ],

    impact_summary_cards: [
      { title: "S$100K Sell", text: "Impact: −0.36% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Impact: −0.70% • Fill: 100% • Mid→VWAP", cls: "bg-amber-500/10 border border-amber-500/30" },
      { title: "S$2.5M Sell", text: "Impact: −1.84% • Fill: 100% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
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
        "CRPU screens as an above-average liquidity small-cap on SGX. The composite liquidity score is 83.3/100 (rank 94 of 558), supported by solid ADV (~S$837K/day), frequent trading (~282 trades/day), a manageable spread (~0.7%), and low volatility (~0.6%).",
      strengths: [
        "Strong ADV versus peers (+49% vs peer median), which supports larger tickets and improves investor experience",
        "Low volatility (~0.6%) reduces execution risk and makes the tape more predictable",
        "Spread is competitive (~0.7%) for small-cap SGX — crossing cost is not a major blocker"
      ],
      concerns: [
        "Turnover/velocity is below peers (turnover ratio ~0.27% vs peer median ~0.67%), suggesting repeat liquidity could be improved",
        "Retail-dominant trading (institutions ~0.7% of trades) can limit block depth on stressful days",
        "Order flow is often one-sided (3M avg |OFI| ~41.5%), which raises timing risk even when headline liquidity looks good"
      ],
      peer_context:
        "Compared to the peer set, CRPU’s liquidity quality is strong on ADV, spread, and volatility. The main differentiator to improve is repeat turnover and block friendliness, not basic tradability."
    },

    market_comparison: {
      adv: {
        insight: "CRPU ADV is ~S$836.7K/day — above peers and broadly in-line with sector median, and far above the SGX market median.",
        vs_market: "Market median ADV is ~S$47.3K — CRPU sits well above the typical SGX name.",
        vs_sector: "Sector median ADV is ~S$757.9K — CRPU is slightly above sector typical liquidity.",
        vs_peers: "Peer median ADV is ~S$561.0K — CRPU is meaningfully higher (+49%)."
      },
      spread: {
        insight: "Spread is relatively tight at ~0.73%, which keeps crossing cost manageable.",
        vs_market: "Market median spread is ~2.49% — CRPU is tighter than the typical SGX stock.",
        vs_sector: "Sector median spread is ~0.79% — CRPU is slightly tighter than sector typical.",
        vs_peers: "Peer median spread is ~1.24% — CRPU is materially tighter (better)."
      },
      volatility: {
        insight: "Volatility is low (~0.64%), which materially reduces execution risk and improves marketability.",
        vs_market: "Market median volatility is ~2.18% — CRPU is far less volatile than typical SGX stocks.",
        vs_sector: "Sector median volatility is ~0.69% — CRPU is slightly calmer than sector typical.",
        vs_peers: "Peer median volatility is ~2.21% — CRPU is substantially less volatile."
      },
      trades: {
        insight: "Trade count is strong (~282/day), supporting more continuous price discovery.",
        vs_market: "Market median trades is ~19/day — CRPU is far more active than typical SGX stocks.",
        vs_sector: "Sector median trades is ~333/day — CRPU is slightly below sector typical but still high.",
        vs_peers: "Peer median trades is ~153/day — CRPU is materially higher (+85%)."
      }
    },

    performance: {
      overall:
        "CRPU has been stable to modestly positive, outperforming its peer group over 3–6 months, but it lags the broader market rally. Given good liquidity, this is primarily a fundamentals/sentiment story rather than a tradability constraint.",
      ytd: {
        stock: "+0.7%",
        market: "+6.3%",
        sector: "−0.5%",
        peers: "−0.5%",
        insight:
          "YTD, CRPU is modestly up (~+0.7%) while the market is up strongly (~+6.3%). Within sector/peers, CRPU is comparatively resilient."
      },
      three_month: {
        stock: "−0.7%",
        market: "+16.7%",
        sector: "−0.4%",
        peers: "−2.6%",
        insight:
          "Over 3 months, CRPU is flat to slightly down (−0.7%), while the market is up strongly. CRPU outperforms peers (−2.6%) and tracks sector weakness."
      },
      six_month: {
        stock: "+1.5%",
        market: "+54.3%",
        sector: "+3.9%",
        peers: "−3.7%",
        insight:
          "Over 6 months, CRPU is up (+1.5%) and outperforms peers (−3.7%), but still lags a very strong market (+54.3%)."
      },
      conclusion:
        "If the goal is broader investor demand, liquidity is not the bottleneck. Focus on fundamentals communication and on maintaining execution quality during volatile sector days."
    },

    drivers: {
      overall:
        "CRPU’s moves are split between company-specific drivers (53.0%) and sector/market factors (47.0% combined). Sector influence is meaningful (31.2%), suggesting REIT sentiment and sector flows matter for timing.",
      interpretation:
        "This is not a pure ‘microstructure-only’ small-cap: market and sector conditions contribute meaningfully, so execution timing should respect sector tape and market risk-on/off.",
      rolling_change:
        "Across rolling windows, company-specific share stays dominant, but sector share remains consistently material. This is consistent with a sector-sensitive REIT tape.",
      beta:
        "Two-factor sensitivity is moderate to market (β≈0.23) and higher to sector (β≈0.86). Directionally: sector tape matters more than broad macro for CRPU."
    },

    regime: {
      overall:
        "A two-regime model identifies Low Vol (26% of time) and High Vol (74%). Even the ‘High Vol’ regime is modest in absolute terms (~0.82% daily volatility), but it signals that timing risk is present most days.",
      current:
        "Current regime: High Vol (σ≈0.82%, mean return ≈−0.22%). Execution should avoid urgency and use limit/iceberg-style staging when possible.",
      transitions:
        "Regime persistence is high: from High Vol there is ~73% probability of staying High Vol; from Low Vol there is ~82% probability of switching to High Vol. The market environment is more often ‘active’ than ‘calm’.",
      trading_implications:
        "In the dominant regime, small changes in flow can move price. Use measured participation rates and prefer higher-liquidity windows to reduce impact."
    },

    trader_composition: {
      overall:
        "Trading is retail-heavy (~95.5% of trades), with limited institutional participation (~0.7%). This is common in SGX small caps, but it can constrain block liquidity during stress.",
      retail_heavy:
        "Retail dominance implies many small trades (median ~S$137), which can increase noise and make order flow signals more important for execution.",
      institutional_gap:
        "Low institutional presence reduces natural block liquidity. Larger trades should be staged and timed into deeper windows.",
      peer_comparison:
        "Peers are also retail-heavy, but CRPU remains at the high end of retail concentration. Improving block friendliness can help widen the investor base."
    },

    price_moving: {
      overall:
        "About 23.2% of trades moved the price (12,686 of 54,584). This indicates a tape that is still microstructure-sensitive despite good headline liquidity.",
      interpretation:
        "A higher share of price-moving trades means execution outcomes depend on how you trade (timing, limit discipline, and avoiding urgency).",
      asymmetry:
        "Negative price-moving trades are ~2.0x larger on average than positive movers (S$2.5K vs S$1.2K), suggesting selling pressure tends to be more disruptive."
    },

    short_selling: {
      overall:
        "Short participation is moderate on a 3–6 month view (~5–6% average short ratio), but recent shorting has been materially lower (last 14 days avg ~2.3%). This points to reduced short pressure into late January.",
      level:
        "3M avg short ratio: ~5.4% (max ~23.5%). 6M avg short ratio: ~5.7% (max ~29.2%). These are moderate levels for SGX.",
      correlation:
        "Short% vs daily return correlation is weak (≈−0.08) and there is no clear relationship in the sample.",
      trend:
        "Short activity dropped sharply from Dec to Jan (~−78% MoM) and remains below the 3M historical average, although it has been increasing over the last two weeks. Separately, the SBL lending pool is large versus daily volume (~8.2 days of ADV), which is the more important ‘liquidity overhang’ metric in a stress scenario.",
      peaks:
        "Peak shorting episodes were episodic and did not consistently coincide with large down days. The more relevant risk is the lending pool size versus daily volume."
    },

    execution: {
      overall:
        "Execution conditions are generally good: spread ~0.73%, low volatility, and meaningful displayed depth around 0.68–0.70. For staged sells, modeled impact is ~0.36% for S$100K, ~0.70% for S$1M, and ~1.84% for S$2.5M.",
      concern:
        "The key risk is not crossing cost; it is concentration of flow. One-sided order flow can create short windows of poor execution even in a generally liquid name.",
      kyle:
        "Kyle’s Lambda is ~0.19 bps per S$10K traded (based on this sample), indicating low incremental impact for typical clips.",
      peer_context:
        "CRPU’s 50K ticket is only ~6% of ADV, far better than most peers where 50K can be >50% of ADV. This is a material advantage for institutions."
    },

    intraday: {
      overall:
        "Trading is moderately concentrated (HHI ~0.23 over 6 months). Liquidity is present through the day, with meaningful activity in auctions and clustered buckets.",
      hhi_interpretation:
        "HHI between 0.15 and 0.25 is considered moderate concentration. CRPU sits near that range, meaning timing still matters but liquidity is not limited to a single window.",
      best_times:
        "The strongest buckets are around 12:00 and into the close (16:30–17:00). These windows are generally better for larger clips.",
      peer_ranking:
        "CRPU’s concentration is moderate relative to peers; some peers are much more concentrated (higher HHI), which makes CRPU comparatively easier to trade intraday."
    },

    ofi: {
      overall:
        "Order flow is often one-sided (3M avg |OFI| ~41.5%), and daily OFI has a moderate relationship with same-day returns (corr ~0.276). Crucially, order-book imbalance (L2 OFI) significantly predicts mid-price moves at ~5-minute lag (p≈0.0000).",
      daily_vs_intraday:
        "Use daily OFI primarily as a ‘stress flag’ (one-sided tape). The stronger, actionable signal is intraday: L2 imbalance predicts short-horizon price changes.",
      l2_signal:
        "Over 1,787 valid L2 snapshots, OFI% → mid-price was statistically significant at a 5-minute lag, with a negative correlation (buy pressure → price down). This suggests contrarian/mean-reversion microstructure and warrants careful execution logic.",
      day_breakdown:
        "Over the 3M window: net buying days ~58.8%, net selling days ~39.7%, and balanced days ~1.5% — the tape is rarely neutral."
    },

    index: {
      overall:
        "CRPU is eligible for FTSE All-Share and FTSE Small Cap. It is not eligible for STI or iEdge Next 50 primarily due to market-cap rank (#115).",
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
      labels: ["CRPU", "D5IU", "ODBU", "BMGU", "OXMU", "CTO", "41O", "W8W", "H30"],
      scores: [
        83.33333333333334,
        54.3010752688172,
        34.40860215053764,
        16.30824372759857,
        79.74910394265234,
        81.36200716845879,
        86.55913978494624,
        58.96057347670251,
        80.28673835125448
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [
        836672.5,
        244486.33500000002,
        160325.86959422848,
        6732.825,
        786595.255443924,
        592882.45,
        1313128.525,
        1320324.475,
        529132.375
      ],
      total: 558
    },

    market_comparison: {
      sector_name: "REIT - Retail",
      sector_count: 8,
      market_count: 558,
      company: {
        volatility: 0.006420846120596386,
        adv: 836672.5,
        spread_pct: 0.007328814025993486,
        turnover_ratio: 0.002671548287073518,
        amihud: 8.675469155025693e-09,
        trades: 282.4
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
          mean: 0.02857382912051861,
          median: 0.006853346675497364,
          min: 0.005303735680724582,
          max: 0.11066251721233092,
          p5: 0.005691145183607275,
          p95: 0.09871858196027955,
          count: 8
        },
        adv: {
          direction: "higher_is_better",
          mean: 9180642.966199279,
          median: 757907.1,
          min: 6732.825,
          max: 57629316.75,
          p5: 60490.39060797997,
          p95: 41846948.66249998,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.02940020782527935,
          median: 0.00792252867004847,
          min: 0.004196966112480829,
          max: 0.11705337816870959,
          p5: 0.0042823863978019554,
          p95: 0.10304212453898617,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.004698877548816771,
          median: 0.0047370110525422095,
          min: 0.0008373847167177656,
          max: 0.009042363526150114,
          p5: 0.0009793805515731936,
          p95: 0.008640304366814799,
          count: 6
        },
        amihud: {
          direction: "lower_is_better",
          mean: 3.358911229856036e-06,
          median: 9.982834621572302e-09,
          min: 8.964349456718078e-11,
          max: 2.5164765549414336e-05,
          p5: 1.9912798428150095e-10,
          p95: 1.6882240129252388e-05,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 1144.1187499999999,
          median: 333.04999999999995,
          min: 24.05,
          max: 5337.2,
          p5: 30.8575,
          p95: 4248.489999999998,
          count: 8
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 619201.0137547691,
          median: 561007.4125,
          min: 6732.825,
          max: 1320324.475,
          p5: 60490.39060797997,
          p95: 1317805.8925,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 225.175,
          median: 152.875,
          min: 24.05,
          max: 798.6,
          p5: 30.8575,
          p95: 620.2749999999997,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.03805962284373785,
          median: 0.022131752032251102,
          min: 0.009549232704071518,
          max: 0.11066251721233092,
          p5: 0.011599484876900856,
          p95: 0.09871858196027955,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.03211174608060795,
          median: 0.012377932745641236,
          min: 0.006762283979438183,
          max: 0.11705337816870959,
          p5: 0.007079750356255522,
          p95: 0.10304212453898617,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 3.3762938120084845e-06,
          median: 5.280463624001776e-08,
          min: 1.169748564480331e-08,
          max: 2.5164765549414336e-05,
          p5: 1.2456006996589365e-08,
          p95: 1.6882240129252388e-05,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.011362084700963952,
          median: 0.006658496107936309,
          min: 0.0017556756347765724,
          max: 0.03444331736355029,
          p5: 0.0023866546823025545,
          p95: 0.02936312659607025,
          count: 5
        }
      }
    },

    returns: [
      { horizon: "1M", stock: 0.7, market: 6.3, sector: -0.5, peers: -0.5 },
      { horizon: "3M", stock: -0.7, market: 16.7, sector: -0.4, peers: -2.6 },
      { horizon: "6M", stock: 1.5, market: 54.3, sector: 3.9, peers: -3.7 },
      { horizon: "YTD", stock: 0.7, market: 6.3, sector: -0.5, peers: -0.5 }
    ],

    drivers: {
      // Stored as percentages (0-100) for the UI pie
      share_market: 15.8,
      share_sector: 31.2,
      share_idio: 53.0,
      beta_market: 0.2267883046983961,
      beta_sector: 0.8556160306200169,
      r_squared: 38.9,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.16899987493294166,
          0.15046941619532306,
          -0.009925248383703074,
          0.09231295950985913,
          -0.1593636162652009,
          0.37341996783268194,
          -0.16910658367421094,
          -0.13018476809208399,
          0.1637006014150292,
          0.12225670517935194,
          -0.25906270917388513
        ],
        corr_sector: [
          0.07485944774636906,
          0.004196417330208542,
          -0.02131540881233477,
          0.15781542525924652,
          -0.37985587879335186,
          0.6002776582961628,
          -0.22485571204603813,
          -0.07794037945729865,
          0.03622123421528035,
          -0.06615905049852887,
          0.11054375090713242
        ],
        best: { market: 0, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-01-17 to 2025-03-21",
          shares: { share_market: 0.1354347588147927, share_sector: 0.33010773651147657, share_idio: 0.5344575046737308 },
          regression: { r_squared: 0.24772513786088135 }
        },
        p2: {
          valid: true,
          period_label: "2025-03-21 to 2025-05-23",
          shares: { share_market: 0.1113465106262767, share_sector: 0.19221133506998384, share_idio: 0.6964421543037395 },
          regression: { r_squared: 0.15244245904439846 }
        },
        p3: {
          valid: true,
          period_label: "2025-05-23 to 2025-07-25",
          shares: { share_market: 0.15497509795989503, share_sector: 0.24000051662201133, share_idio: 0.6050243854180938 },
          regression: { r_squared: 0.3931775909638806 }
        },
        p4: {
          valid: true,
          period_label: "2025-07-25 to 2025-09-26",
          shares: { share_market: 0.08935813788198792, share_sector: 0.272062944869818, share_idio: 0.638578917248194 },
          regression: { r_squared: 0.2551535773852953 }
        },
        p5: {
          valid: true,
          period_label: "2025-09-26 to 2025-11-28",
          shares: { share_market: 0.2695484587589633, share_sector: 0.2915018830908423, share_idio: 0.4389496581501944 },
          regression: { r_squared: 0.4810449556661778 }
        },
        p6: {
          valid: true,
          period_label: "2025-11-28 to 2026-01-30",
          shares: { share_market: 0.1580158825432852, share_sector: 0.31230937266907777, share_idio: 0.5296747447876371 },
          regression: { r_squared: 0.3889040853998439 }
        }
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
        market: [13.5, 11.1, 15.5, 8.9, 27.0, 15.8],
        sector: [33.0, 19.2, 24.0, 27.2, 29.2, 31.2],
        idio: [53.4, 69.6, 60.5, 63.9, 43.9, 53.0]
      },
      regime: {
        n_regimes: 2,
        labels: ["Low Vol", "High Vol"],
        pct_time: [26.19047619047619, 73.80952380952381],
        current_regime: 1,
        regimes: [
          { id: 0, label: "Low Vol", mean_ret: 0.73, volatility: 0.01, n_days: 33, pct_time: 26.19047619047619 },
          { id: 1, label: "High Vol", mean_ret: -0.22, volatility: 0.82, n_days: 93, pct_time: 73.80952380952381 }
        ],
        transitions: [
          [18.392162224780967, 81.60783777521903],
          [26.76445357245954, 73.23554642754047]
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.685, quantity: 785600.0, value: 538136.0 },
        { level: 2, price: 0.68, quantity: 791600.0, value: 538288.0 },
        { level: 3, price: 0.675, quantity: 1266000.0, value: 854550.0 },
        { level: 4, price: 0.67, quantity: 278100.0, value: 186327.0 },
        { level: 5, price: 0.665, quantity: 92100.0, value: 61246.5 },
        { level: 6, price: 0.66, quantity: 187800.0, value: 123948.0 },
        { level: 7, price: 0.655, quantity: 64300.0, value: 42116.5 },
        { level: 8, price: 0.65, quantity: 230200.0, value: 149630.0 },
        { level: 9, price: 0.645, quantity: 64300.0, value: 41473.5 },
        { level: 10, price: 0.64, quantity: 124100.0, value: 79424.0 }
      ],
      asks: [
        { level: 1, price: 0.69, quantity: 2326100.0, value: 1605008.9999999998 },
        { level: 2, price: 0.695, quantity: 597600.0, value: 415331.99999999994 },
        { level: 3, price: 0.7, quantity: 462000.0, value: 323400.0 },
        { level: 4, price: 0.705, quantity: 104900.0, value: 73954.5 },
        { level: 5, price: 0.71, quantity: 162200.0, value: 115162.0 },
        { level: 6, price: 0.715, quantity: 104500.0, value: 74717.5 },
        { level: 7, price: 0.72, quantity: 154800.0, value: 111456.0 },
        { level: 8, price: 0.725, quantity: 110600.0, value: 80185.0 },
        { level: 9, price: 0.73, quantity: 88100.0, value: 64313.0 },
        { level: 10, price: 0.735, quantity: 9900.0, value: 7276.5 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 6.0,
      peers: [
        { ticker: "W8W", pct: 75.7 },
        { ticker: "41O", pct: 76.2 },
        { ticker: "OXMU", pct: 127.1 },
        { ticker: "CTO", pct: 168.7 },
        { ticker: "H30", pct: 189.0 },
        { ticker: "D5IU", pct: 409.0 },
        { ticker: "ODBU", pct: 623.7 },
        { ticker: "BMGU", pct: 14852.6 }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 5816,
      first_trade_date: "2025-12-31",
      last_trade_date: "2026-01-29",
      period_days: 29,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.9552957359009628,
        mixed_pct: 0.03765474552957359,
        instit_pct: 0.007049518569463549
      },
      trade_size: { avg: 2838.9131705639616, median: 137.0 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-01", n_trades: 5657, retail_pct: 0.9550998762595015, mixed_pct: 0.03782923811207354, instit_pct: 0.00707088562842496, avg_trade_size: 2856.328796181722 },
          { month: "2025-12", n_trades: 8230, retail_pct: 0.9852976913730255, mixed_pct: 0.013851761846901579, instit_pct: 0.000850546780072904, avg_trade_size: 1048.4915431348725 },
          { month: "2025-11", n_trades: 10521, retail_pct: 0.9755726641954187, mixed_pct: 0.021480847828153217, instit_pct: 0.002946487976428096, avg_trade_size: 1617.9475335044197 },
          { month: "2025-10", n_trades: 12773, retail_pct: 0.9756517654427308, mixed_pct: 0.020903468253346904, instit_pct: 0.0034447663039223362, avg_trade_size: 1617.640139356455 },
          { month: "2025-09", n_trades: 12349, retail_pct: 0.9557858935946231, mixed_pct: 0.040489108429832374, instit_pct: 0.0037249979755445786, avg_trade_size: 2831.695562393716 },
          { month: "2025-08", n_trades: 5055, retail_pct: 0.9388724035608309, mixed_pct: 0.05262116716122651, instit_pct: 0.008506429277942632, avg_trade_size: 4080.574381800198 }
        ]
      },
      peer_comparison: [
        { ticker: "CRPU", currency: "SGD", is_target: true, retail_pct: 0.9552957359009628, mixed_pct: 0.03765474552957359, instit_pct: 0.007049518569463549, avg_trade_size: 2838.9131705639616, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "BMGU", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, avg_trade_size: 159.22471264367817, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "41O", currency: "SGD", is_target: false, retail_pct: 0.9732027351690999, mixed_pct: 0.026242838661984846, instit_pct: 0.0005544261689151728, avg_trade_size: 1619.8486108544323, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "D5IU", currency: "SGD", is_target: false, retail_pct: 0.9712230215827338, mixed_pct: 0.027338129496402876, instit_pct: 0.0014388489208633094, avg_trade_size: 2200.8197601918464, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "H30", currency: "SGD", is_target: false, retail_pct: 0.9691103789126854, mixed_pct: 0.03027182866556837, instit_pct: 0.0006177924217462932, avg_trade_size: 2125.8096169686987, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "CTO", currency: "SGD", is_target: false, retail_pct: 0.9483526268922529, mixed_pct: 0.051647373107747106, instit_pct: 0.0, avg_trade_size: 3439.422410210745, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "W8W", currency: "SGD", is_target: false, retail_pct: 0.9320118240306033, mixed_pct: 0.06590158233350722, instit_pct: 0.0020865936358894104, avg_trade_size: 4494.624847852548, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "ODBU", currency: "USD", is_target: false, retail_pct: 0.8953271028037383, mixed_pct: 0.09158878504672897, instit_pct: 0.013084112149532711, avg_trade_size: 4319.35046728972, thresholds: { retail_max: 10000.0, instit_min: 50000.0 } },
        { ticker: "OXMU", currency: "USD", is_target: false, retail_pct: 0.8943234559086041, mixed_pct: 0.09675116029989289, instit_pct: 0.008925383791503035, avg_trade_size: 3851.234237772224, thresholds: { retail_max: 10000.0, instit_min: 50000.0 } }
      ],
      currency_thresholds: {
        USD: { retail_max: 10000.0, instit_min: 50000.0 },
        SGD: { retail_max: 13500.0, instit_min: 67500.0 }
      },
      classification_legend: {
        retail_heavy: ">70% retail",
        institutional: ">20% institutional",
        mixed: "otherwise"
      }
    },

    price_moving_trades: {
      total_trades: 54584,
      price_moving_trades: 12686,
      pct_price_moving: 23.241242855049098,
      all_movers: { count: 12686, avg_size: 1865.7833753744285, median_size: 206.99999999999997 },
      positive_movers: { count: 6346, avg_size: 1233.6628427355815, median_size: 204.00000000000003 },
      negative_movers: { count: 6340, avg_size: 2498.5021293375394, median_size: 270.0 }
    },

    short_selling: {
      data_available: true,
      security_name: "Sasseur Reit",
      mapping: { ticker_to_security: "Sasseur Reit", confidence: "high" },
      coverage: { n_days_short_data: 100, window_days: 182 },
      sbl_pool: {
        valid: true,
        lending_pool: 7949950,
        lending_pool_value: 5445715.75,
        latest_price: 0.685,
        lending_rate_pct: 2.97,
        borrowing_rate_pct: 4.25,
        pool_as_pct_adv: 819.3910014154769,
        days_to_liquidate: 8.193910014154769,
        estimated_impact_pct: 0.05,
        liquidity_risk: "High - pool > 5 days of volume",
        impact_interpretation: "Significant price impact if entire pool sold",
        timestamp: ""
      },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.016430442040313256, max_short_ratio: 0.09597292724196277, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.05413890056963857, max_short_ratio: 0.23535638673253353, interpretation: "Moderate short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.05665669298592476, max_short_ratio: 0.2921143320494628, interpretation: "Moderate short interest" } }
      },
      correlation: { valid: true, correlation: -0.07652819389541783, interpretation: "No clear relationship" },
      peaks: [
        { date: "2024-11-27", short_ratio: 0.4969053934571176, return_pct: 0.0 },
        { date: "2024-11-08", short_ratio: 0.382089552238806, return_pct: 0.0 },
        { date: "2025-08-07", short_ratio: 0.2921143320494628, return_pct: 0.7352941176470562 },
        { date: "2024-12-09", short_ratio: 0.28955474656958835, return_pct: 0.0 },
        { date: "2024-11-19", short_ratio: 0.2630533484676504, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
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
          { month: "2025-03", avg_short_ratio: 0.06313884452952731 },
          { month: "2025-02", avg_short_ratio: 0.051022531746149416 }
        ],
        mom_change: [
          { month: "2026-01", avg_short_ratio: 0.016982764014565978, change_pct: null },
          { month: "2025-12", avg_short_ratio: 0.07871316646993508, change_pct: 363.4885487569835 },
          { month: "2025-11", avg_short_ratio: 0.0668994704724344, change_pct: -15.008538631225035 },
          { month: "2025-10", avg_short_ratio: 0.06470348255473901, change_pct: -3.2825191323453518 },
          { month: "2025-09", avg_short_ratio: 0.06966288440475607, change_pct: 7.664814402874552 },
          { month: "2025-08", avg_short_ratio: 0.05367218265667169, change_pct: -22.95440661798473 },
          { month: "2025-07", avg_short_ratio: 0.023438723514618575, change_pct: -56.329848434615435 },
          { month: "2025-06", avg_short_ratio: 0.02462641566210631, change_pct: 5.067221970287669 },
          { month: "2025-05", avg_short_ratio: 0.03425148828958405, change_pct: 39.08434243757299 },
          { month: "2025-04", avg_short_ratio: 0.06319827529014274, change_pct: 84.51249404354051 },
          { month: "2025-03", avg_short_ratio: 0.06313884452952731, change_pct: -0.09403857991786144 },
          { month: "2025-02", avg_short_ratio: 0.051022531746149416, change_pct: -19.1899501387163 }
        ],
        interpretation: "Shorts covering significantly (-78% MoM) | YoY: -67% ⬇️"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-01-30", short_ratio: 0.004020369874028411, short_vol: 4500, total_vol: 1119300, return: -0.007246376811594013 },
          { date: "2026-01-29", short_ratio: 0.03738632536207477, short_vol: 11100, total_vol: 296900, return: 0.007299270072992581 },
          { date: "2026-01-28", short_ratio: 0.0007983273141988215, short_vol: 2100, total_vol: 2630500, return: -0.007246376811594013 },
          { date: "2026-01-27", short_ratio: 0.025203641590800192, short_vol: 26300, total_vol: 1043500, return: 0.007299270072992581 },
          { date: "2026-01-26", short_ratio: 0.016331658291457288, short_vol: 3900, total_vol: 238800, return: 0.0 }
        ]
      },
      peer_comparison: [
        { ticker: "CRPU", avg_short_ratio: 0.05413890056963857, max_short_ratio: 0.23535638673253353, is_target: true },
        { ticker: "BMGU", avg_short_ratio: 1.9660270525322427e-05, max_short_ratio: 0.007352941176470588, is_target: false },
        { ticker: "ODBU", avg_short_ratio: 0.0005039683020076822, max_short_ratio: 0.08671839342765861, is_target: false },
        { ticker: "CTO", avg_short_ratio: 0.0017582664832503723, max_short_ratio: 0.2660722230461219, is_target: false },
        { ticker: "D5IU", avg_short_ratio: 0.002010475840276237, max_short_ratio: 0.2702329197017246, is_target: false },
        { ticker: "W8W", avg_short_ratio: 0.003544602493513122, max_short_ratio: 0.6341154090044389, is_target: false },
        { ticker: "OXMU", avg_short_ratio: 0.008419990574234619, max_short_ratio: 0.8547942828637733, is_target: false },
        { ticker: "H30", avg_short_ratio: 0.07923024381295812, max_short_ratio: 0.7515389876880985, is_target: false }
      ]
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.04235505987405333, continuous: 0.8141671575820126, closing: 0.1365878642690036, auctions: 0.1858328424179874, other: 0.0 },
        "3M": { opening: 0.024803106310894617, continuous: 0.8676953435870178, closing: 0.09982893234921782, auctions: 0.13230465641298217, other: 0.0 },
        "6M": { opening: 0.026518827968040067, continuous: 0.8891050934244146, closing: 0.07600596004924416, auctions: 0.11089490657558537, other: 0.0 }
      },
      hhi: { "1M": 0.25829916132145775, "3M": 0.23524926422332085, "6M": 0.22988598403233665 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.0203 },
        { time: "09:00", avg_share: 0.0936 },
        { time: "09:30", avg_share: 0.0369 },
        { time: "10:00", avg_share: 0.0501 },
        { time: "10:30", avg_share: 0.0458 },
        { time: "11:00", avg_share: 0.0491 },
        { time: "11:30", avg_share: 0.0454 },
        { time: "12:00", avg_share: 0.162 },
        { time: "12:30", avg_share: 0.011 },
        { time: "13:00", avg_share: 0.0241 },
        { time: "13:30", avg_share: 0.0254 },
        { time: "14:00", avg_share: 0.0382 },
        { time: "14:30", avg_share: 0.0387 },
        { time: "15:00", avg_share: 0.0331 },
        { time: "15:30", avg_share: 0.053 },
        { time: "16:00", avg_share: 0.0488 },
        { time: "16:30", avg_share: 0.1069 },
        { time: "17:00", avg_share: 0.1174 }
      ],
      peers_hhi_rows: [
        { ticker: "CRPU", auctions_pct: 11.513177567245132, hhi: 0.23068366368834214, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400", you: true } },
        { ticker: "OXMU", auctions_pct: 9.19540500202158, hhi: 0.18907301871523524, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "H30", auctions_pct: 26.46279587552837, hhi: 0.2061597677921171, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "41O", auctions_pct: 5.462934549986239, hhi: 0.21102731546375814, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "W8W", auctions_pct: 14.283088030340348, hhi: 0.22513295641227468, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "ODBU", auctions_pct: 4.075646593135087, hhi: 0.40317667084585823, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "D5IU", auctions_pct: 10.721422586105888, hhi: 0.4590552370669822, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "CTO", auctions_pct: 5.9165169252615595, hhi: 0.6111668839731755, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BMGU", auctions_pct: 1.7230962338145115, hhi: 0.7424432817742038, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "41.5%", note_suffix: " - 3-month average absolute OFI (how one-sided trading is)." },
        { value: "0.276", note_suffix: " - Correlation between daily OFI and same-day returns (moderate)." },
        { value: "Significant (5-min)", note_suffix: " - L2 OFI Granger-causality is significant (p≈0.0000) at ~5-minute lag." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "-7.0%", avg_abs: "48.2%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "3M", avg_ofi: "+10.2%", avg_abs: "41.5%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } },
        { period: "6M", avg_ofi: "+4.3%", avg_abs: "38.5%", interp: { text: "One-sided", cls: "bg-red-500/20 text-red-300" } }
      ],
      corr_value: "0.276",
      pie: { net_buy_days: 58.8, net_sell_days: 39.7, balanced_days: 1.5 },
      l2_compact_text:
        "Over the last 7 days we analyzed 1,787 valid L2 snapshots (top 4 levels). Average L2 OFI was −0.040% of book value (abs: 0.843%). The key finding: OFI% Granger-causes mid-price changes with a ~5-minute lag (p≈0.0000). Direction is negative (buy pressure → price down), suggesting contrarian/mean-reversion microstructure and the need to avoid urgency during extreme imbalances.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [
        { date: "2024-12-24", ofi: "-97%", direction: "SELL pressure", return: "-1.5%" },
        { date: "2024-12-12", ofi: "-96%", direction: "SELL pressure", return: "+0.0%" },
        { date: "2025-01-24", ofi: "+92%", direction: "BUY pressure", return: "+1.5%" },
        { date: "2025-01-23", ofi: "-92%", direction: "SELL pressure", return: "-0.7%" },
        { date: "2025-07-01", ofi: "-92%", direction: "SELL pressure", return: "+0.0%" }
      ],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "#115", sub: "of 562 stocks" },
        { title: "Free Float", value: "38.2%", sub: "Float mcap ~ S$330M" },
        { title: "Avg Daily Turnover", value: "S$704K", sub: "Notional value" },
        { title: "Velocity", value: "0.23%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #115 - outside top 30", gaps: ["Need rank ≤30 (currently #115)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 96.7% - qualifies", gaps: [] },
        { index: "FTSE Small Cap", status: "eligible", notes: "Small Cap band (86-98%)", gaps: [] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank #115 - below top 80", gaps: ["Need rank ≤80 (currently #115)"] }
      ],
      insight:
        "💡 Key insight: CRPU is already eligible for FTSE All-Share and FTSE Small Cap. The main gap is STI / iEdge Next 50, which are constrained by market-cap rank (#115).",
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

