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
    { ticker: "S61", name: "SBS Transit", marketCap: "S$1.0B" },
    { ticker: "S59", name: "SIA Engineering", marketCap: "S$3.8B" },
    { ticker: "NS8U", name: "HPH Trust USD", marketCap: "S$1.8B" },
    { ticker: "P7VU", name: "HPH Trust SGD", marketCap: "S$2.3B" },
    { ticker: "558", name: "UMS", marketCap: "S$1.2B" },
    { ticker: "YF8", name: "YZJ Fin Hldg", marketCap: "S$1.2B" },
    { ticker: "V03", name: "Venture", marketCap: "S$4.8B" },
    { ticker: "BUOU", name: "Frasers L&C Tr", marketCap: "S$3.9B" }
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
      liq_section: { text: "Liquidity score: 95.9% — ABOVE AVG", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      perf: { text: "Context", bg: "bg-slate-700/40", textColor: "text-slate-300" },
      drivers: { text: "Sector-driven", bg: "bg-purple-500/20", textColor: "text-purple-300" },
      exec_check: { text: "LOW crossing cost", bg: "bg-emerald-500/20", textColor: "text-emerald-300" },
      intraday: { text: "MODERATE concentration", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      ofi: { text: "Moderate imbalance", bg: "bg-amber-500/20", textColor: "text-amber-400" },
      short: { text: "High short interest", bg: "bg-red-500/20", textColor: "text-red-300" },
      index_status: { text: "Eligible: FTSE All-Share, iEdge Next 50", bg: "bg-emerald-500/20", textColor: "text-emerald-300" }
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
    metric_adv: "Average Traded Volume",
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
    perf_insight: "C52 has mixed returns (1M/3M/6M) with strong liquidity (rank 24/558). Sector drives ~48% of moves; high short interest and SBL pool warrant monitoring for execution risk.",
    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or mostly company-specific factors?",
    drivers_strip: [
      { title: "Key Insight", text: "About 48% of recent price moves come from the sector; 38% idiosyncratic and ~14% market." },
      { title: "Market Link", text: "Market correlation is moderate (~0.46). Sector correlation is strong (~0.79)." },
      { title: "Sector Link", text: "Sector volatility Granger-causes stock volatility (p=0.038); sector is a key driver." }
    ],
    drivers_pie_title: "What Drives Price Changes (Last 3 Months)",
    drivers_pie_note: "High sector share means the stock moves with Railroads/Industrials.",
    lead_lag_title: "Do Other Markets Move First?",
    lead_lag_note: "Lead-lag suggests contemporaneous relationship with both market and sector.",
    rolling_title: "How This Has Changed Over Time",
    rolling_latest_label: "Latest: {period}",
    rolling_note: "Sector share has been stable in the 37–57% range across rolling windows.",
    drivers_bottom_line: "Bottom line: C52 is sector-driven with meaningful idiosyncratic component — sector conditions and company news both matter.",
    drivers_wtd_title: "What This Means for Trading",
    drivers_wtd_list: [
      "Use limit orders; spread is tight (0.7%) versus market median.",
      "Execution impact is low for typical clip sizes; 50K is ~0% of ADV.",
      "Monitor sector volatility; it predicts stock volatility (Granger)."
    ],
    regime_title: "Market Volatility Patterns",
    regime_subtitle: "Different volatility states help explain timing risk for trades",
    regime_badge_text: "Regime analysis unavailable",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Vol", "High Vol"],
    transition_note_template: "Rows sum to 100%. Regime model could not be fitted (statsmodels not available).",
    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note: "Spread is ~0.68%. Depth is strong; crossing cost is low for 100K–2.5M sells (~−0.34%).",
    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note: "C52 has the best scalability in the peer set (50K ≈ 0% of ADV).",
    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle: "Impact from mid to VWAP using latest order book (single-day).",
    exec_check_insight: "Liquidity is strong. Modeled impact is low (~−0.34%) for 100K–2.5M sells. Kyle's Lambda ~0.0004% per S$10K.",
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
    session_dist_note: "Continuous trading dominates (~82–83%); auctions ~15–17%. Peak at 12:00 (28.3%), then 09:00 and 17:00.",
    hhi_title: "Trading Concentration (HHI)",
    hhi_note_template: "HHI measures how spread out trading is. Your value: {value} (moderate concentration).",
    intraday_intensity_title: "Trading Activity by Time of Day",
    intraday_intensity_note: "Liquidity clusters at 12:00 and open/close. Larger clips should target these windows.",
    peers_hhi_title: "Peer Comparison: Trading Concentration",
    peers_hhi_cols: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    peers_hhi_note: "Lower HHI means more even trading throughout the day.",
    intraday_insight: "Trading is moderately concentrated (HHI ~0.21). Best depth around midday and close.",
    ofi_title: "Order Flow Balance",
    ofi_subtitle: "Is trading one-sided? Does imbalance explain daily returns?",
    ofi_tiles: [
      { title: "Order Flow Imbalance (3-Month Avg |OFI|)", note: "How one-sided is trading?" },
      { title: "OFI vs Daily Prices", note: "Correlation with same-day returns" },
      { title: "Short-Term Order Book Signal", note: "L2 predictiveness test" }
    ],
    ofi_table_title: "Order Flow Summary",
    ofi_table_note: "OFI measures buyer-initiated minus seller-initiated volume. 3M avg |OFI| ~28% (moderate).",
    ofi_table_cols: ["Period", "Avg OFI", "Avg |OFI|", "Interpretation"],
    ofi_corr_note_template: "Correlation between order flow and same-day returns: {corr}.",
    ofi_pie_title: "Trading Days Breakdown (3 Months)",
    ofi_pie_stats: ["Net Buying Days", "Net Selling Days"],
    l2_compact_title: "Order Book Imbalance Analysis (Last 7 Days)",
    ofi_unusual_title: "Unusual Imbalance Days",
    ofi_unusual_cols: ["Date", "Direction", "Return"],
    ofi_unusual_note: "Large imbalances can coincide with bigger moves.",
    index_title: "Index Eligibility",
    index_subtitle: "Which indices could include C52, and what's needed to qualify",
    short_title: "Short Selling & Lending",
    short_subtitle: "Short participation and lending context for execution risk",
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  content: {
    exec_metrics: [
      { title: "Liquidity Score", tooltip: { title: "What this means", body: "Composite score (0-100) from volume, trades, spread, impact, volatility. Higher is better." }, value: "95.9", suffix: "/100", bar_pct: 95.9, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Rank 24/558 • Above peer median", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "✓" } },
      { title: "Trading Cost (Spread)", tooltip: { title: "Why this matters", body: "Spread is immediate cost to trade. Tighter is better." }, value: "0.68", suffix: "%", bar_pct: 95, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Below peer median (~0.9%)", interpretation: { text: "STRONG", cls: "interpretation-good", icon: "✓" } },
      { title: "Average Traded Volume", tooltip: { title: "What this means", body: "Average daily trading value (20D). Higher = more liquidity." }, value: "10.8M", suffix: "SGD", bar_pct: 85, color_value: "text-emerald-300", color_bar: "text-emerald-300", subtext: "Peer median: 6.2M • +73% vs peers", interpretation: { text: "ABOVE PEERS", cls: "interpretation-good", icon: "✓" } },
      { title: "What Drives Price Changes", tooltip: { title: "What this means", body: "Share of moves from market/sector vs company-specific." }, value: "48.0", suffix: "% sector", bar_pct: 48, color_value: "text-white", color_bar: "text-purple-400", subtext: "Market: 13.8% • Idio: 38.1%", interpretation: { text: "Sector-driven", cls: "interpretation-neutral", icon: "◆" } }
    ],
    exec_takeaways: [
      "Liquidity score is strong (95.9/100; rank 24/558) with ADV +73% vs peer median and tight spread (0.68%).",
      "Execution impact is low: ~−0.34% for 100K–2.5M sells. 50K clip is ~0% of ADV (best in peer set).",
      "Short interest is high (~42.5% avg); SBL pool is 21.5M shares (~333% of ADV, ~3.3 days). Monitor for stress scenarios."
    ],
    action_plan: {
      borderClass: "border-amber-500",
      columns: [
        {
          priority: "HIGH PRIORITY (0–3 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            { title: "Monitor short interest and SBL pool as execution risk", bullets: ["Short ratio ~42.5% (high vs peers). SBL pool ~3.3 days of ADV.", "Track lending pool vs ADV monthly; use as stress indicator."] },
            { title: "Maintain liquidity and spread discipline", bullets: ["Spread and ADV are strengths; keep two-way depth and visibility."] }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-sky-500/20", text: "text-sky-300", textColor: "text-sky-300", dot: "bg-sky-500" },
          items: [
            { title: "Leverage sector-driven profile for investor communication", bullets: ["~48% sector-driven; messaging aligned with Railroads/Industrials helps."] },
            { title: "Track OFI and unusual imbalance days", bullets: ["3M |OFI| ~28%; use large imbalance days as timing/risk flags."] }
          ]
        },
        {
          priority: "LONGER-TERM (9–24 months)",
          badge: { bg: "bg-emerald-500/20", text: "text-emerald-300", textColor: "text-emerald-300", dot: "bg-emerald-500" },
          items: [
            { title: "Build on index eligibility (FTSE All-Share, iEdge Next 50)", bullets: ["STI would require rank ≤30 (currently #58)."] },
            { title: "Establish monthly liquidity monitoring", bullets: ["Track spread, ADV, HHI, OFI, short ratio, SBL pool vs ADV."] }
          ]
        }
      ]
    },
    liq_tiles: [
      { title: "Daily Trades", value: "2.9K", sub: "Strong activity", interp: { text: "STRONG", cls: "interpretation-good", icon: "✓" } },
      { title: "Turnover (Volume/Free Float)", value: "0.34%", sub: "Above peer median", interp: { text: "MODERATE", cls: "interpretation-neutral", icon: "■" } },
      { title: "Daily Volatility", value: "0.66%", sub: "Below peer median (~1.5%)", interp: { text: "LOW", cls: "interpretation-good", icon: "✓" } }
    ],
    liq_insight: "C52 has strong liquidity versus peers (rank 24/558), with higher ADV and tighter spread. Main watchpoint is high short interest and SBL pool size.",
    perf_badge: "Context",
    exec_check_tiles: [
      { title: "Mid Price", value: "1.4750", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "0.68%", note: "Immediate trading cost", color: "text-emerald-300" },
      { title: "Kyle's Lambda", value: "0.0004%", note: "per S$10K traded", color: "text-white" }
    ],
    impact_summary_cards: [
      { title: "S$100K Sell", text: "Impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$1.0M Sell", text: "Impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" },
      { title: "S$2.5M Sell", text: "Impact: −0.34% • Fill: 100% • Mid→VWAP", cls: "bg-emerald-500/10 border border-emerald-500/30" }
    ],
    peers_hhi_header: ["Ticker", "% Auctions", "HHI", "Interpretation"],
    ofi_tiles_interpretations: [
      { cls: "bg-amber-500/20 text-amber-400", text: "Moderate" },
      { cls: "bg-emerald-500/20 text-emerald-300", text: "Moderate positive" },
      { cls: "bg-slate-500/20 text-slate-400", text: "N/A (statsmodels not installed)" }
    ],
    footer: "Liquidity Analysis Report • Generated by Deltablock"
  },

  insights: {
    liquidity: {
      overall: "C52 has strong liquidity (score 95.9, rank 24/558). ADV is 10.8M SGD (+73% vs peer median), spread 0.68% (tighter than peers), and trade count 2.9K/day.",
      strengths: ["High ADV and tight spread support execution", "50K clip is ~0% of ADV (best in peer set)", "Low volatility (0.66%) vs peer median 1.5%"],
      concerns: ["High short interest (~42.5%) and large SBL pool (~3.3 days ADV) are execution/stress risks"],
      peer_context: "C52 leads peers on ADV and spread. V03 and 558 are also liquid; S61 and P7VU are far less scalable."
    },
    market_comparison: {
      adv: { insight: "ADV 10.8M SGD — well above sector and peer medians.", vs_market: "Market median ADV ~47K; C52 is in a much more liquid tier.", vs_sector: "Sector median ~5.5M; C52 is above.", vs_peers: "Peer median ~6.2M; C52 is +73% above." },
      spread: { insight: "Spread 0.68% — better than peer median (~0.9%).", vs_market: "Market median ~2.5%; C52 is much tighter.", vs_sector: "Sector median ~0.5%; C52 is slightly wider.", vs_peers: "Peer median ~0.9%; C52 is tighter." },
      volatility: { insight: "Volatility 0.66% — below peer and market medians.", vs_market: "Market median ~2.2%; C52 is calmer.", vs_sector: "Sector median ~0.6%; in line.", vs_peers: "Peer median ~1.5%; C52 is lower." },
      trades: { insight: "~2.9K trades/day — above peer median (~1.7K).", vs_market: "Market median ~19; C52 is far more active.", vs_sector: "Sector median ~1.5K; C52 is higher.", vs_peers: "Peer median ~1.7K; C52 is higher." }
    },
    performance: {
      overall: "C52 has mixed returns (1M −0.68%, 3M +0.68%, 6M −3.29%). Liquidity is strong; main focus is short interest and SBL pool.",
      ytd: { stock: "−0.68%", market: "+6.3%", sector: "+0.75%", peers: "+1.9%", insight: "YTD C52 is down slightly; market and peers are up." },
      three_month: { stock: "+0.68%", market: "+16.7%", sector: "+1.7%", peers: "+1.8%", insight: "3M C52 is flat; market and sector/peers are positive." },
      six_month: { stock: "−3.29%", market: "+54.3%", sector: "+0.05%", peers: "+5.2%", insight: "6M C52 is down; market and peers are up." },
      conclusion: "Liquidity supports execution; protecting spread and monitoring short/SBL context is key."
    },
    drivers: {
      overall: "C52 is sector-driven: ~48% sector, ~38% idiosyncratic, ~14% market. R² 64.8%.",
      interpretation: "Sector (Railroads) and company-specific factors both matter. Sector volatility Granger-causes stock volatility.",
      rolling_change: "Rolling windows show sector share in 37–57% range; latest window 48% sector, 38% idio.",
      beta: "β_market ≈ 0.26, β_sector ≈ 1.09. Fama-French suggests large-cap style (β_SMB negative)."
    },
    regime: {
      overall: "Regime-switching model could not be fitted (statsmodels not available).",
      current: "N/A",
      transitions: "N/A",
      trading_implications: "Use sector volatility and OFI as timing/risk signals instead."
    },
    trader_composition: {
      overall: "96.2% of trades are retail (by count); by notional, institutional is 54.8%, retail 26.5%, mixed 18.7%.",
      retail_heavy: "By trade count, retail dominates; by volume, institutional share is meaningful.",
      institutional_gap: "Institutional notional share (55%) supports block liquidity; retail drives trade count.",
      peer_comparison: "C52 is among the most retail-heavy by count (96.2%); by notional, institutional share is in line with BUOU, NS8U."
    },
    price_moving: {
      overall: "33.9% of trades moved the price (63,729 of 187,965). Retail dominates both directions (~94–96%).",
      interpretation: "Meaningful share of trades move the price; limit discipline and timing matter.",
      asymmetry: "Positive movers avg ~1.2x larger than negative movers.",
      by_trader_type: "Retail drives most price-moving trades (positive and negative)."
    },
    short_selling: {
      overall: "Short participation is high (~42.5% average 3M). SBL pool 21.5M shares (~333% of ADV, ~3.3 days to liquidate).",
      level: "3M avg short ratio ~42.5% (max ~69.4%). High vs peers.",
      correlation: "Short% vs return correlation −0.16 (moderate negative — shorts somewhat predict drops).",
      trend: "Shorts slightly building (+9% MoM). Recent 14-day avg 49.7%.",
      peaks: "Peak shorting episodes (e.g. 69.4%) can be used as stress flags."
    },
    execution: {
      overall: "Execution impact is low. Modeled impact ~−0.34% for 100K–2.5M sells. 50K is ~0% of ADV.",
      concern: "Main risk is short/SBL overhang in stress, not day-to-day crossing cost.",
      kyle: "Kyle's Lambda ~0.0004% per S$10K traded.",
      peer_context: "C52 has best scalability in peer set (50K ≈ 0% ADV); S61 and P7VU are 300–600% of ADV for 50K."
    },
    intraday: {
      overall: "Trading moderately concentrated (HHI ~0.21). Continuous ~82–83%; auctions ~15–17%. Peak at 12:00 (28.3%).",
      hhi_interpretation: "HHI 0.15–0.25 = moderate concentration.",
      best_times: "Best windows: 12:00, 09:00, 17:00.",
      peer_ranking: "C52 is in the moderate band; V03 and S59 have lower HHI (more spread)."
    },
    ofi: {
      overall: "3M avg |OFI| ~28.1% (moderate). OFI–price correlation +0.42. Net buy days 47.1%, net sell 42.6%, balanced 10.3%.",
      daily_vs_intraday: "Daily OFI correlates with returns; L2 Granger test not run (statsmodels not available).",
      l2_signal: "L2 OFI analysis not available (statsmodels not installed).",
      day_breakdown: "Roughly balanced between net buying and net selling days over 3M."
    },
    index: {
      overall: "C52 is eligible for FTSE All-Share and iEdge Next 50 (rank #58). STI requires rank ≤30.",
      hsci: "N/A (Singapore).",
      hsi_gap: "N/A.",
      tech_gap: "N/A.",
      recommendation: "Maintain FTSE All-Share and iEdge Next 50 eligibility. STI is a long-term outcome of rank improvement."
    }
  },

  series: {
    peers_liquidity: {
      labels: ["C52", "S61", "S59", "NS8U", "P7VU", "558", "YF8", "V03", "BUOU"],
      scores: [95.878, 72.76, 90.68, 84.05, 58.24, 93.19, 94.09, 94.98, 94.80],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [10767807, 272535, 2687901, 1658648, 163362, 10721789, 9946703, 11811840, 9733348],
      total: 558
    },
    market_comparison: {
      sector_name: "Railroads",
      sector_count: 2,
      market_count: 558,
      company: { volatility: 0.00658, adv: 10767807.45, spread_pct: 0.00680, turnover_ratio: 0.00342, amihud: 5.06e-10, trades: 2862.4 },
      market: {
        volatility: { direction: "lower_is_better", mean: 0.0368, median: 0.0218, min: 0, max: 0.574, p5: 0.00383, p95: 0.111, count: 558 },
        adv: { direction: "higher_is_better", mean: 2838953, median: 47331, min: 0, max: 248734466, p5: 116, p95: 11233078, count: 558 },
        spread_pct: { direction: "lower_is_better", mean: 0.0896, median: 0.0249, min: 0.00028, max: 1.30, p5: 0.00331, p95: 0.453, count: 554 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00647, median: 0.000955, min: 0, max: 1.26, p5: 8.68e-06, p95: 0.0184, count: 537 },
        amihud: { direction: "lower_is_better", mean: 0.00304, median: 1.01e-06, min: 0, max: 0.593, p5: 3.46e-10, p95: 0.00124, count: 548 },
        trades: { direction: "higher_is_better", mean: 406.9, median: 18.55, min: 0, max: 9968, p5: 0.24, p95: 2210, count: 558 }
      },
      sector: {
        volatility: { direction: "lower_is_better", mean: 0.00588, median: 0.00588, min: 0.00517, max: 0.00658, p5: 0.00524, p95: 0.00651, count: 2 },
        adv: { direction: "higher_is_better", mean: 5520171, median: 5520171, min: 272535, max: 10767807, p5: 797298, p95: 10243044, count: 2 },
        spread_pct: { direction: "lower_is_better", mean: 0.00523, median: 0.00523, min: 0.00365, max: 0.00680, p5: 0.00381, p95: 0.00664, count: 2 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00224, median: 0.00224, min: 0.00107, max: 0.00342, p5: 0.00119, p95: 0.00330, count: 2 },
        amihud: { direction: "lower_is_better", mean: 1.04e-08, median: 1.04e-08, min: 5.06e-10, max: 2.03e-08, p5: 1.50e-09, p95: 1.93e-08, count: 2 },
        trades: { direction: "higher_is_better", mean: 1470.6, median: 1470.6, min: 78.8, max: 2862.4, p5: 218, p95: 2723, count: 2 }
      },
      peers: {
        adv: { direction: "higher_is_better", mean: 5874516, median: 6210624, min: 163362, max: 11811840, p5: 201572, p95: 11430322, count: 8 },
        trades: { direction: "higher_is_better", mean: 1349.85, median: 1715.3, min: 21.5, max: 2324.4, p5: 41.6, p95: 2298, count: 8 },
        volatility: { direction: "lower_is_better", mean: 0.0183, median: 0.0151, min: 0.00517, max: 0.0448, p5: 0.00657, p95: 0.0382, count: 8 },
        spread_pct: { direction: "lower_is_better", mean: 0.0104, median: 0.00868, min: 0.00093, max: 0.0239, p5: 0.00166, p95: 0.0228, count: 8 },
        amihud: { direction: "lower_is_better", mean: 5.57e-08, median: 3.13e-09, min: 4.79e-10, max: 3.92e-07, p5: 5.90e-10, p95: 2.63e-07, count: 8 },
        turnover_ratio: { direction: "higher_is_better", mean: 0.00421, median: 0.00287, min: 9.93e-05, max: 0.0116, p5: 0.00042, p95: 0.0102, count: 8 }
      }
    },
    returns: [
      { horizon: "1M", stock: -0.6757, market: 6.302, sector: 0.754, peers: 1.895 },
      { horizon: "3M", stock: 0.6849, market: 16.677, sector: 1.657, peers: 1.759 },
      { horizon: "6M", stock: -3.289, market: 54.264, sector: 0.054, peers: 5.220 },
      { horizon: "YTD", stock: -0.6757, market: 6.302, sector: 0.754, peers: 1.895 }
    ],
    drivers: {
      share_market: 13.8,
      share_sector: 48.0,
      share_idio: 38.1,
      beta_market: 0.2585,
      beta_sector: 1.093,
      r_squared: 64.8,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [-0.112, -0.104, 0.182, 0.092, -0.232, 0.457, -0.032, -0.060, -0.030, 0.040, 0.024],
        corr_sector: [0.036, -0.206, 0.047, -0.035, -0.302, 0.790, -0.121, 0.018, -0.127, 0.121, -0.008],
        best: { market: 0, sector: 0 }
      },
      rolling_windows: {
        p1: { valid: true, period_label: "2025-01-17 to 2025-03-21", shares: { share_market: 0.0197, share_sector: 0.5644, share_idio: 0.4160 }, regression: { r_squared: 0.638 } },
        p2: { valid: true, period_label: "2025-03-21 to 2025-05-23", shares: { share_market: 0.0696, share_sector: 0.5232, share_idio: 0.4071 }, regression: { r_squared: 0.600 } },
        p3: { valid: true, period_label: "2025-05-23 to 2025-07-25", shares: { share_market: 0.0960, share_sector: 0.3774, share_idio: 0.5266 }, regression: { r_squared: 0.503 } },
        p4: { valid: true, period_label: "2025-07-25 to 2025-09-26", shares: { share_market: 0.0910, share_sector: 0.5103, share_idio: 0.3987 }, regression: { r_squared: 0.789 } },
        p5: { valid: true, period_label: "2025-09-26 to 2025-11-28", shares: { share_market: 0.0582, share_sector: 0.5737, share_idio: 0.3681 }, regression: { r_squared: 0.693 } },
        p6: { valid: true, period_label: "2025-11-28 to 2026-01-30", shares: { share_market: 0.1383, share_sector: 0.4804, share_idio: 0.3814 }, regression: { r_squared: 0.648 } }
      },
      rolling: {
        ordered: ["2025-01-17 to 2025-03-21", "2025-03-21 to 2025-05-23", "2025-05-23 to 2025-07-25", "2025-07-25 to 2025-09-26", "2025-09-26 to 2025-11-28", "2025-11-28 to 2026-01-30"],
        market: [2.0, 7.0, 9.6, 9.1, 5.8, 13.8],
        sector: [56.4, 52.3, 37.7, 51.0, 57.4, 48.0],
        idio: [41.6, 40.7, 52.7, 39.9, 36.8, 38.1]
      },
      regime: {
        n_regimes: 0,
        labels: [],
        pct_time: [],
        current_regime: 0,
        regimes: [],
        transitions: []
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
      bx_ticket_pct_adv_50k: 0.5,
      peers: [
        { ticker: "V03", pct: 8.5 },
        { ticker: "558", pct: 9.3 },
        { ticker: "YF8", pct: 10.1 },
        { ticker: "BUOU", pct: 10.3 },
        { ticker: "S59", pct: 37.2 },
        { ticker: "NS8U", pct: 60.3 },
        { ticker: "S61", pct: 366.9 },
        { ticker: "P7VU", pct: 612.1 }
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
        { ticker: "BUOU", currency: "SGD", is_target: false, retail_pct: 0.9629, mixed_pct: 0.0245, instit_pct: 0.0125, retail_qty_pct: 0.2030, mixed_qty_pct: 0.1758, instit_qty_pct: 0.6212, retail_notional_pct: 0.2030, mixed_notional_pct: 0.1756, instit_notional_pct: 0.6214, avg_trade_size: 4144, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "NS8U", currency: "USD", is_target: false, retail_pct: 0.9596, mixed_pct: 0.0291, instit_pct: 0.0113, retail_qty_pct: 0.1263, mixed_qty_pct: 0.2842, instit_qty_pct: 0.5895, retail_notional_pct: 0.1258, mixed_notional_pct: 0.2842, instit_notional_pct: 0.5900, avg_trade_size: 2329, thresholds: { retail_max: 10000, instit_min: 50000 } },
        { ticker: "S59", currency: "SGD", is_target: false, retail_pct: 0.9365, mixed_pct: 0.0613, instit_pct: 0.0022, retail_qty_pct: 0.4998, mixed_qty_pct: 0.4458, instit_qty_pct: 0.0544, retail_notional_pct: 0.4987, mixed_notional_pct: 0.4465, instit_notional_pct: 0.0548, avg_trade_size: 3442, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "S61", currency: "SGD", is_target: false, retail_pct: 0.8919, mixed_pct: 0.1047, instit_pct: 0.0034, retail_qty_pct: 0.4160, mixed_qty_pct: 0.5224, instit_qty_pct: 0.0617, retail_notional_pct: 0.4169, mixed_notional_pct: 0.5218, instit_notional_pct: 0.0613, avg_trade_size: 5507, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "YF8", currency: "SGD", is_target: false, retail_pct: 0.8873, mixed_pct: 0.0886, instit_pct: 0.0241, retail_qty_pct: 0.1911, mixed_qty_pct: 0.3964, instit_qty_pct: 0.4125, retail_notional_pct: 0.1905, mixed_notional_pct: 0.3957, instit_notional_pct: 0.4138, avg_trade_size: 6912, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "558", currency: "SGD", is_target: false, retail_pct: 0.8814, mixed_pct: 0.0954, instit_pct: 0.0231, retail_qty_pct: 0.2066, mixed_qty_pct: 0.4065, instit_qty_pct: 0.3869, retail_notional_pct: 0.2061, mixed_notional_pct: 0.4055, instit_notional_pct: 0.3884, avg_trade_size: 7197, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "V03", currency: "SGD", is_target: false, retail_pct: 0.8418, mixed_pct: 0.1434, instit_pct: 0.0149, retail_qty_pct: 0.3457, mixed_qty_pct: 0.4528, instit_qty_pct: 0.2015, retail_notional_pct: 0.3452, mixed_notional_pct: 0.4535, instit_notional_pct: 0.2013, avg_trade_size: 8334, thresholds: { retail_max: 13500, instit_min: 67500 } },
        { ticker: "P7VU", currency: "SGD", is_target: false, retail_pct: 0.7944, mixed_pct: 0.1916, instit_pct: 0.0140, retail_qty_pct: 0.2138, mixed_qty_pct: 0.4709, instit_qty_pct: 0.3152, retail_notional_pct: 0.2120, mixed_notional_pct: 0.4782, instit_notional_pct: 0.3097, avg_trade_size: 12652, thresholds: { retail_max: 13500, instit_min: 67500 } }
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
        { ticker: "P7VU", avg_short_ratio: 0.0204, max_short_ratio: 0.8741, is_target: false },
        { ticker: "YF8", avg_short_ratio: 0.0756, max_short_ratio: 0.7216, is_target: false },
        { ticker: "S59", avg_short_ratio: 0.0767, max_short_ratio: 0.5148, is_target: false },
        { ticker: "558", avg_short_ratio: 0.0872, max_short_ratio: 0.5497, is_target: false },
        { ticker: "NS8U", avg_short_ratio: 0.1166, max_short_ratio: 0.8452, is_target: false },
        { ticker: "BUOU", avg_short_ratio: 0.1424, max_short_ratio: 0.7369, is_target: false }
      ]
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
        { ticker: "V03", auctions_pct: 18.13, hhi: 0.1264, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "S59", auctions_pct: 14.98, hhi: 0.1474, interp: { text: "Spread", cls: "bg-emerald-500/20 text-emerald-300" } },
        { ticker: "558", auctions_pct: 7.73, hhi: 0.1688, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "BUOU", auctions_pct: 15.76, hhi: 0.1723, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "YF8", auctions_pct: 7.01, hhi: 0.2030, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "NS8U", auctions_pct: 25.42, hhi: 0.2257, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { ticker: "S61", auctions_pct: 5.86, hhi: 0.2300, interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ]
    },
    ofi_block: {
      tiles_values: [
        { value: "28.1%", note_suffix: " - 3-month average absolute OFI (moderate one-sidedness)." },
        { value: "0.42", note_suffix: " - Correlation between daily OFI and same-day returns (moderate positive)." },
        { value: "N/A", note_suffix: " - L2 Granger test not run (statsmodels not installed)." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "−1.4%", avg_abs: "27.3%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "3M", avg_ofi: "+2.2%", avg_abs: "28.1%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } },
        { period: "6M", avg_ofi: "+4.2%", avg_abs: "24.5%", interp: { text: "Moderate", cls: "bg-amber-500/20 text-amber-400" } }
      ],
      corr_value: "0.42",
      pie: { net_buy_days: 47.1, net_sell_days: 42.6, balanced_days: 10.3 },
      l2_compact_text: "Valid L2 snapshots: 2,739. Avg L2 OFI +0.017% (abs 1.21%). Granger test not run (statsmodels not installed).",
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
        { title: "Avg Daily Turnover", value: "S$15.4M", sub: "Notional value" },
        { title: "Velocity", value: "0.49%", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Rank #58 - outside top 30", gaps: ["Need rank ≤30 (currently #58)"] },
        { index: "FTSE All-Share", status: "eligible", notes: "Top 91.8% - qualifies", gaps: [] },
        { index: "iEdge Next 50", status: "eligible", notes: "Rank #58 - within 31-80 range", gaps: [] },
        { index: "FTSE Small Cap", status: "eligible", notes: "Small Cap (86-98%)", gaps: [] }
      ],
      insight: "C52 is eligible for FTSE All-Share and iEdge Next 50. STI would require rank ≤30.",
      levers_title: "How to Improve Index Eligibility",
      levers: ["Maintain velocity and turnover for current indices", "Improve market-cap rank for STI consideration (need ≤30)"]
    }
  }
};

export default REPORT_DATA;
