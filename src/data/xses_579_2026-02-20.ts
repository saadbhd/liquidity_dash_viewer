// @ts-nocheck

// ============================================================================
// Oceanus (579) Liquidity Analysis Report
// Market: XSES (Singapore Exchange)
// Generated: 2026-02-20
//
// Source:
// - All key numeric fields are taken from the console output + JSON provided in
//   the user prompt (as-of 2026-02-20).
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
    { ticker: "5EV", name: "Hosen", marketCap: "S$23.1M", sector: "Food Distribution", industry: "Consumer Defensive" },
    { ticker: "AAJ", name: "SunMoonFood", marketCap: "S$21.7M", sector: "Food Distribution", industry: "Consumer Defensive" },
    { ticker: "K03", name: "Khong Guan", marketCap: "S$22.3M", sector: "Food Distribution", industry: "Consumer Defensive" },
    { ticker: "BAC", name: "Camsing Hc", marketCap: "S$3.4M", sector: "Food Distribution", industry: "Consumer Defensive" },
    { ticker: "BNE", name: "Kencana Agri", marketCap: "S$74.6M", sector: "Farm Products", industry: "Consumer Defensive" },
    { ticker: "Y03", name: "Yeo Hiap Seng", marketCap: "S$392.0M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "MV4", name: "Mewah Intl", marketCap: "S$480.2M", sector: "Packaged Foods", industry: "Consumer Defensive" },
    { ticker: "RQ1", name: "Overseas Edu", marketCap: "S$69.8M", sector: "Education & Training Services", industry: "Consumer Defensive" }
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
    asof_date: "2026-02-20",
    industry: "Consumer Defensive",
    sector: "Food Distribution",
    market_cap_display: "77.3M",
    market_cap_category: "small",
    universe_total: 627,
    peers_count: 8,
    page_title_template: "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },

  q01: {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 43.0622009569378,
          "score_pca_percentile": 43.0622009569378,
          "rank_pca": 358,
          "total": 627,
          "adv_notional_sgd": 15482.800000000001,
          "adv_volume_shares": 3870700,
          "free_float_shares": 25139287902,
          "turnover_ratio": 0.00015397015281773591,
          "votes": 19,
          "trades": 19,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1,
          "amihud": null,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.7056689646984783,
          "loadings": {
            "log_adv": 0.5777216895085734,
            "log_trades": 0.5436722141018345,
            "log_turnover": 0.5119029286827461,
            "neg_spread": 0.32956572135311096,
            "neg_amihud": 0,
            "neg_vol": 0
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 8,
          "peer_median_adv": 2576.25,
          "peer_median_score_pca": 32.535885167464116,
          "peer_median_trades": 0.5,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.04501364592188273,
          "peer_median_amihud": null,
          "peer_median_turnover_ratio": 0.000046876294180341243,
          "target_vs_peer": {
            "score_pca_delta": 10.53,
            "adv_delta_pct": 501,
            "trades_delta_pct": 3700,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": -534.73,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 228.46
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 43.0622009569378,
            "rank_pca": 358,
            "adv": 15482.800000000001,
            "trades": 19,
            "volatility": null,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1,
            "amihud": null,
            "turnover_ratio": 0.00015397015281773591,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 55.661881977671456,
            "rank_pca": 279,
            "adv": 12068.1,
            "trades": 6,
            "volatility": null,
            "spread_pct": 0.03174603174603177,
            "spread_ticks": 2.1666666666666665,
            "amihud": null,
            "turnover_ratio": 0.001256578157918495,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 43.54066985645933,
            "rank_pca": 355,
            "adv": 5152.5,
            "trades": 1,
            "volatility": null,
            "spread_pct": 0.05159332321699535,
            "spread_ticks": 1.3076923076923077,
            "amihud": null,
            "turnover_ratio": 0.0007886979922125544,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 14.832535885167463,
            "rank_pca": 535,
            "adv": 0,
            "trades": 0,
            "volatility": null,
            "spread_pct": 0.08475509080902587,
            "spread_ticks": 15.4,
            "amihud": null,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 0.7974481658692184,
            "rank_pca": 623,
            "adv": 0,
            "trades": 0,
            "volatility": null,
            "spread_pct": 0.7955390334572492,
            "spread_ticks": 35.666666666666664,
            "amihud": null,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 57.25677830940988,
            "rank_pca": 269,
            "adv": 25551,
            "trades": 5,
            "volatility": null,
            "spread_pct": 0.03870967741935487,
            "spread_ticks": 2,
            "amihud": null,
            "turnover_ratio": 0.0015704692842774318,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 18.022328548644335,
            "rank_pca": 515,
            "adv": 0,
            "trades": 0,
            "volatility": null,
            "spread_pct": 0.05131761442441059,
            "spread_ticks": 3.3636363636363638,
            "amihud": null,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "RQ1",
            "score_pca": 21.5311004784689,
            "rank_pca": 493,
            "adv": 0,
            "trades": 0,
            "volatility": null,
            "spread_pct": 0.02012808783165601,
            "spread_ticks": 3.6666666666666665,
            "amihud": null,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "Y03",
            "score_pca": 49.601275917065394,
            "rank_pca": 317,
            "adv": 8893.5,
            "trades": 5,
            "volatility": null,
            "spread_pct": 0.01779722830051059,
            "spread_ticks": 2.1785714285714284,
            "amihud": null,
            "turnover_ratio": 0.00009375258836068249,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 627,
          "market": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3037359.7633863743,
              "median": 13013,
              "min": 0,
              "max": 309150489,
              "p5": 0,
              "p95": 9506910.599999998,
              "count": 627
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08540788278050386,
              "median": 0.021537318975120703,
              "min": 0.0002627883086550121,
              "max": 1.3868092691622103,
              "p5": 0.003232317322880706,
              "p95": 0.4,
              "count": 581
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005118904736783423,
              "median": 0.0002364740281431185,
              "min": 0,
              "max": 0.9129259771933294,
              "p5": 0,
              "p95": 0.011944872243672093,
              "count": 588
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 386.08931419457736,
              "median": 7,
              "min": 0,
              "max": 12008,
              "p5": 0,
              "p95": 2150.499999999994,
              "count": 627
            }
          },
          "sector": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 349052.5666666667,
              "median": 8610.3,
              "min": 0,
              "max": 2061612,
              "p5": 0,
              "p95": 1550079.7,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20919518153811692,
              "median": 0.06817420701301061,
              "min": 0.0058233242851135035,
              "max": 0.7955390334572492,
              "p5": 0.01230400115034307,
              "p95": 0.6680828465215083,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0004702158891482236,
              "median": 0.00038800959237914626,
              "min": 0,
              "max": 0.001256578157918495,
              "p5": 0,
              "p95": 0.00113960811649201,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 99.5,
              "median": 3.5,
              "min": 0,
              "max": 571,
              "p5": 0,
              "p95": 433,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6458.1375,
              "median": 2576.25,
              "min": 0,
              "max": 25551,
              "p5": 0,
              "p95": 20831.984999999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2.125,
              "median": 0.5,
              "min": 0,
              "max": 6,
              "p5": 0,
              "p95": 5.6499999999999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1364482609006543,
              "median": 0.04501364592188273,
              "min": 0.01779722830051059,
              "max": 0.7955390334572492,
              "p5": 0.018613029136411486,
              "p95": 0.5467646535303706,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00046368725284614545,
              "median": 0.000046876294180341243,
              "min": 0,
              "max": 0.0015704692842774318,
              "p5": 0,
              "p95": 0.0014606073900518038,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0,
            "market": 0.0032070071886749485,
            "sector": 0,
            "peers": 0,
            "vs_market": -0.0032070071886749485,
            "vs_sector": 0,
            "vs_peers": 0
          }
        }
      },
      "30d": {
        "label": "30D",
        "window_days": 30,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 30,
          "score_pca": 36.36363636363637,
          "score_pca_percentile": 36.36363636363637,
          "rank_pca": 400,
          "total": 627,
          "adv_notional_sgd": 9716.8,
          "adv_volume_shares": 2809200,
          "free_float_shares": 25139287902,
          "turnover_ratio": 0.00011174540865879137,
          "votes": 17.5,
          "trades": 17.5,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1,
          "amihud": 0,
          "volatility": 0
        },
        "pca": {
          "valid": true,
          "window_days": 30,
          "variance_explained": 0.5186375078112618,
          "loadings": {
            "log_adv": 0.5406285537840252,
            "log_trades": 0.49357751507468794,
            "log_turnover": 0.48382735603827504,
            "neg_spread": 0.3557302955151529,
            "neg_amihud": 0.09911465541242204,
            "neg_vol": -0.30601525277391306
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 8,
          "peer_median_adv": 2346.875,
          "peer_median_score_pca": 36.52312599681021,
          "peer_median_trades": 1.5,
          "peer_median_volatility": 0,
          "peer_median_spread_pct": 0.04395866628380612,
          "peer_median_amihud": 6.174664217229079e-7,
          "peer_median_turnover_ratio": 0.00006691043567514946,
          "target_vs_peer": {
            "score_pca_delta": -0.16,
            "adv_delta_pct": 314,
            "trades_delta_pct": 1066.67,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": -549.96,
            "amihud_delta_pct": 100,
            "turnover_ratio_delta_pct": 67.01
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 36.36363636363637,
            "rank_pca": 400,
            "adv": 9716.8,
            "trades": 17.5,
            "volatility": 0,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1,
            "amihud": 0,
            "turnover_ratio": 0.00011174540865879137,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 31.57894736842105,
            "rank_pca": 430,
            "adv": 330,
            "trades": 1,
            "volatility": 0,
            "spread_pct": 0.04356257646755283,
            "spread_ticks": 2.9615384615384617,
            "amihud": 9.126435816514869e-7,
            "turnover_ratio": 0.000035922760375028443,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 36.84210526315789,
            "rank_pca": 397,
            "adv": 1406.25,
            "trades": 2,
            "volatility": 0,
            "spread_pct": 0.04435475610005941,
            "spread_ticks": 1.0958333333333332,
            "amihud": 0,
            "turnover_ratio": 0.0002152560022414177,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 15.629984051036683,
            "rank_pca": 530,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.08435965139212476,
            "spread_ticks": 15.325,
            "amihud": 0,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 0.7974481658692184,
            "rank_pca": 623,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.9465930018416205,
            "spread_ticks": 42.833333333333336,
            "amihud": 0.000011652610511027564,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 36.20414673046252,
            "rank_pca": 401,
            "adv": 3287.5,
            "trades": 1,
            "volatility": 0,
            "spread_pct": 0.061405444325730536,
            "spread_ticks": 3.1875,
            "amihud": 0.0000026322704730594885,
            "turnover_ratio": 0.00021550850956900884,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 44.65709728867623,
            "rank_pca": 348,
            "adv": 3738.25,
            "trades": 2.5,
            "volatility": 0.015151515151515138,
            "spread_pct": 0.03371125130885448,
            "spread_ticks": 2.165909090909091,
            "amihud": 4.542415256700955e-7,
            "turnover_ratio": 0.000016339853525276397,
            "is_target": false
          },
          {
            "ticker": "RQ1",
            "score_pca": 47.52791068580542,
            "rank_pca": 330,
            "adv": 9149.25,
            "trades": 3,
            "volatility": 0.010638297872340496,
            "spread_pct": 0.01973927729548525,
            "spread_ticks": 3.6666666666666665,
            "amihud": 7.806913177757202e-7,
            "turnover_ratio": 0.00012286892368771718,
            "is_target": false
          },
          {
            "ticker": "Y03",
            "score_pca": 48.644338118022326,
            "rank_pca": 323,
            "adv": 9317,
            "trades": 5.5,
            "volatility": 0.008196721311475419,
            "spread_pct": 0.011626635658266054,
            "spread_ticks": 1.4083333333333332,
            "amihud": 3.337019627682035e-7,
            "turnover_ratio": 0.00009789811097527048,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 627,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.00866377423898187,
              "median": 0.006211180124223503,
              "min": 0,
              "max": 0.10000000000000009,
              "p5": 0,
              "p95": 0.028802642444260916,
              "count": 627
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2444757.7199933617,
              "median": 13790,
              "min": 0,
              "max": 276850195.5,
              "p5": 0,
              "p95": 9290600.749999996,
              "count": 627
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08797074424664217,
              "median": 0.02227348264999878,
              "min": 0.00026240346042774555,
              "max": 1.3043478260869563,
              "p5": 0.0031413801048232205,
              "p95": 0.43404255319148943,
              "count": 601
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038161167428499743,
              "median": 0.0002664505620370697,
              "min": 0,
              "max": 1.0332212774372158,
              "p5": 0,
              "p95": 0.010839008030372297,
              "count": 588
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.599211439778784e-05,
              "median": 1.200749845273457e-07,
              "min": 0,
              "max": 0.014102564102564101,
              "p5": 0,
              "p95": 4.674752963121062e-05,
              "count": 588
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 341.0311004784689,
              "median": 6.5,
              "min": 0,
              "max": 11120,
              "p5": 0,
              "p95": 1874.4999999999977,
              "count": 627
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0009208103130755226,
              "median": 0,
              "min": 0,
              "max": 0.005524861878453136,
              "p5": 0,
              "p95": 0.004143646408839852,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 472416.6333333333,
              "median": 868.125,
              "min": 0,
              "max": 2823046.75,
              "p5": 0,
              "p95": 2119714.2625,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.23503781854275174,
              "median": 0.06435720374609208,
              "min": 0.0056426397408671026,
              "max": 0.9465930018416205,
              "p5": 0.015122623922538533,
              "p95": 0.7813733228097868,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002060127903155198,
              "median": 0.00007383408451690991,
              "min": 0,
              "max": 0.0008731525706178812,
              "p5": 0,
              "p95": 0.0007086784285237653,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.000002094637777931643,
              "median": 1.2862874554044366e-9,
              "min": 0,
              "max": 0.000011652610511027564,
              "p5": 0,
              "p95": 0.000008967618778683544,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 170.25,
              "median": 1.5,
              "min": 0,
              "max": 1001,
              "p5": 0,
              "p95": 755.125,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3403.53125,
              "median": 2346.875,
              "min": 0,
              "max": 9317,
              "p5": 0,
              "p95": 9258.2875,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1.875,
              "median": 1.5,
              "min": 0,
              "max": 5.5,
              "p5": 0,
              "p95": 4.624999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.004248316791916382,
              "median": 0,
              "min": 0,
              "max": 0.015151515151515138,
              "p5": 0,
              "p95": 0.01357188910380401,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15566907429871174,
              "median": 0.04395866628380612,
              "min": 0.011626635658266054,
              "max": 0.9465930018416205,
              "p5": 0.014466060231292772,
              "p95": 0.6448113291842965,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00000209576992149407,
              "median": 6.174664217229079e-7,
              "min": 0,
              "max": 0.000011652610511027564,
              "p5": 0,
              "p95": 0.000008495491497738732,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 8.797427004671488e-05,
              "median": 6.691043567514946e-05,
              "min": 0,
              "max": 0.00021550850956900884,
              "p5": 0,
              "p95": 0.00021542013200435194,
              "count": 8
            }
          },
          "returns": {
            "window_days": 30,
            "n_obs": 30,
            "stock": 0,
            "market": 0.05686638227253282,
            "sector": -0.008057362507392196,
            "peers": 0.0027314814814813904,
            "vs_market": -0.05686638227253282,
            "vs_sector": 0.008057362507392196,
            "vs_peers": -0.0027314814814813904
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 40.66985645933015,
          "score_pca_percentile": 40.66985645933015,
          "rank_pca": 373,
          "total": 627,
          "adv_notional_sgd": 15820.800000000001,
          "adv_volume_shares": 4534600,
          "free_float_shares": 25139287902,
          "turnover_ratio": 0.0001803790154151201,
          "votes": 24,
          "trades": 24,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1,
          "amihud": 0,
          "volatility": 0
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5342554693606368,
          "loadings": {
            "log_adv": 0.5296901604760336,
            "log_trades": 0.48088945346722933,
            "log_turnover": 0.4712920954333399,
            "neg_spread": 0.35640676989820547,
            "neg_amihud": 0.1766468308330133,
            "neg_vol": -0.32837103975273935
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 8,
          "peer_median_adv": 2230,
          "peer_median_score_pca": 37.71929824561404,
          "peer_median_trades": 1.5,
          "peer_median_volatility": 0,
          "peer_median_spread_pct": 0.04782346349452637,
          "peer_median_amihud": 4.4771884870426146e-7,
          "peer_median_turnover_ratio": 0.000044263596267453685,
          "target_vs_peer": {
            "score_pca_delta": 2.95,
            "adv_delta_pct": 609.5,
            "trades_delta_pct": 1500,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": -497.44,
            "amihud_delta_pct": 100,
            "turnover_ratio_delta_pct": 307.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 40.66985645933015,
            "rank_pca": 373,
            "adv": 15820.800000000001,
            "trades": 24,
            "volatility": 0,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1,
            "amihud": 0,
            "turnover_ratio": 0.0001803790154151201,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 34.29027113237639,
            "rank_pca": 413,
            "adv": 300,
            "trades": 1,
            "volatility": 0,
            "spread_pct": 0.05120248254460825,
            "spread_ticks": 3.325,
            "amihud": 1.4655550021619816e-7,
            "turnover_ratio": 0.000035922760375028443,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 45.933014354066984,
            "rank_pca": 340,
            "adv": 5250,
            "trades": 4,
            "volatility": 0,
            "spread_pct": 0.04444444444444449,
            "spread_ticks": 1.0289855072463767,
            "amihud": 1.3074151356835366e-7,
            "turnover_ratio": 0.0008036224083679594,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 16.905901116427433,
            "rank_pca": 522,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.09849246231155778,
            "spread_ticks": 17.818181818181817,
            "amihud": 5.289997672401037e-7,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 1.2759170653907497,
            "rank_pca": 620,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.8956521739130436,
            "spread_ticks": 51.9,
            "amihud": 0.000005826305255513782,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 39.07496012759171,
            "rank_pca": 383,
            "adv": 3375,
            "trades": 1,
            "volatility": 0,
            "spread_pct": 0.052434456928838996,
            "spread_ticks": 2.8,
            "amihud": 0.0000020343065455847086,
            "turnover_ratio": 0.00019591682688091712,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 36.36363636363637,
            "rank_pca": 400,
            "adv": 1085,
            "trades": 2,
            "volatility": 0,
            "spread_pct": 0.03223070398642921,
            "spread_ticks": 2,
            "amihud": 3.1928611912894393e-7,
            "turnover_ratio": 0.000004706953690408839,
            "is_target": false
          },
          {
            "ticker": "RQ1",
            "score_pca": 44.81658692185008,
            "rank_pca": 347,
            "adv": 3906,
            "trades": 2,
            "volatility": 0.00540540540540535,
            "spread_pct": 0.019590382902938575,
            "spread_ticks": 3.6666666666666665,
            "amihud": 8.473130573201632e-7,
            "turnover_ratio": 0.00005260443215987892,
            "is_target": false
          },
          {
            "ticker": "Y03",
            "score_pca": 52.791068580542266,
            "rank_pca": 297,
            "adv": 8893.5,
            "trades": 5,
            "volatility": 0.008130081300813052,
            "spread_pct": 0.011276268580215285,
            "spread_ticks": 1.375,
            "amihud": 3.664379301684192e-7,
            "turnover_ratio": 0.00009311481565074587,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 627,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.006657747619372645,
              "median": 0.004385964912280715,
              "min": 0,
              "max": 0.10000000000000009,
              "p5": 0,
              "p95": 0.023082974897329234,
              "count": 627
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2029537.7156554242,
              "median": 9922,
              "min": 0,
              "max": 223932693,
              "p5": 0,
              "p95": 7021251.899999977,
              "count": 627
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0875736736115483,
              "median": 0.024110695409466098,
              "min": 0.00026819922622936467,
              "max": 1.267605633802817,
              "p5": 0.0032573111793357317,
              "p95": 0.4081818181818179,
              "count": 603
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024012468610387495,
              "median": 0.00017466100866121164,
              "min": 0,
              "max": 0.5075472941796849,
              "p5": 0,
              "p95": 0.006825801179162455,
              "count": 588
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00001684242966871771,
              "median": 1.3334081665171932e-7,
              "min": 0,
              "max": 0.0023263235642515707,
              "p5": 0,
              "p95": 0.00004355975626503284,
              "count": 590
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 298.4864433811802,
              "median": 5,
              "min": 0,
              "max": 8682,
              "p5": 0,
              "p95": 1757.7999999999977,
              "count": 627
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0008818342151675577,
              "median": 0,
              "min": 0,
              "max": 0.005291005291005346,
              "p5": 0,
              "p95": 0.00396825396825401,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 307499.13333333336,
              "median": 2775,
              "min": 0,
              "max": 1823624,
              "p5": 0,
              "p95": 1371673.2,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.23017329564403344,
              "median": 0.07484747242808301,
              "min": 0.005533924936260959,
              "max": 0.8956521739130436,
              "p5": 0.015261554813306842,
              "p95": 0.7431677018633541,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00026208574930174544,
              "median": 0.00010815088789507428,
              "min": 0,
              "max": 0.0008036224083679594,
              "p5": 0,
              "p95": 0.0007408643841890607,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0000011058896996400432,
              "median": 1.386485068922759e-7,
              "min": 0,
              "max": 0.000005826305255513782,
              "p5": 6.840403254553826e-10,
              "p95": 0.000004501978883445362,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 139.83333333333334,
              "median": 2.5,
              "min": 0,
              "max": 810,
              "p5": 0,
              "p95": 613.5,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2851.1875,
              "median": 2230,
              "min": 0,
              "max": 8893.5,
              "p5": 0,
              "p95": 7618.274999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1.875,
              "median": 1.5,
              "min": 0,
              "max": 5,
              "p5": 0,
              "p95": 4.6499999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0016919358382773003,
              "median": 0,
              "min": 0,
              "max": 0.008130081300813052,
              "p5": 0,
              "p95": 0.007176444737420355,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15066542195150953,
              "median": 0.04782346349452637,
              "min": 0.011276268580215285,
              "max": 0.8956521739130436,
              "p5": 0.014186208593168437,
              "p95": 0.6166462748525232,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.000001274993211092584,
              "median": 4.4771884870426146e-7,
              "min": 1.3074151356835366e-7,
              "max": 0.000005826305255513782,
              "p5": 1.3627640889509923e-7,
              "p95": 0.000004499105707038604,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00014823602464061731,
              "median": 0.000044263596267453685,
              "min": 0,
              "max": 0.0008036224083679594,
              "p5": 0,
              "p95": 0.0005909254548474943,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.19999999999999996,
            "market": 0.11373026364489736,
            "sector": 0.0024462907342273077,
            "peers": -0.009480449436079397,
            "vs_market": -0.3137302636448973,
            "vs_sector": -0.20244629073422726,
            "vs_peers": -0.19051955056392056
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 40.66985645933015,
          "score_pca_percentile": 40.66985645933015,
          "rank_pca": 373,
          "total": 627,
          "adv_notional_sgd": 15469.150000000001,
          "adv_volume_shares": 3133900,
          "free_float_shares": 25139287902,
          "turnover_ratio": 0.0001246614467449047,
          "votes": 20,
          "trades": 20,
          "spread_pct": 0.2222222222222222,
          "spread_ticks": 1,
          "amihud": 0,
          "volatility": 0
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5409192970953527,
          "loadings": {
            "log_adv": 0.5243599882037433,
            "log_trades": 0.47443389597451846,
            "log_turnover": 0.46595664101844225,
            "neg_spread": 0.364876999551961,
            "neg_amihud": 0.18245502705378813,
            "neg_vol": -0.34120144799367436
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 8,
          "peer_median_adv": 2620.625,
          "peer_median_score_pca": 39.39393939393939,
          "peer_median_trades": 2.25,
          "peer_median_volatility": 0.0026315789473684292,
          "peer_median_spread_pct": 0.04321865753910879,
          "peer_median_amihud": 6.786875240932221e-7,
          "peer_median_turnover_ratio": 0.000039311318617309027,
          "target_vs_peer": {
            "score_pca_delta": 1.28,
            "adv_delta_pct": 490.3,
            "trades_delta_pct": 788.89,
            "volatility_delta_pct": 100,
            "spread_pct_delta_pct": -414.18,
            "amihud_delta_pct": 100,
            "turnover_ratio_delta_pct": 217.11
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 40.66985645933015,
            "rank_pca": 373,
            "adv": 15469.150000000001,
            "trades": 20,
            "volatility": 0,
            "spread_pct": 0.2222222222222222,
            "spread_ticks": 1,
            "amihud": 0,
            "turnover_ratio": 0.0001246614467449047,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 35.88516746411483,
            "rank_pca": 403,
            "adv": 860,
            "trades": 1,
            "volatility": 0,
            "spread_pct": 0.04618806790105607,
            "spread_ticks": 2.8,
            "amihud": 7.004548006694015e-7,
            "turnover_ratio": 0.00010776828112508533,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 78.30940988835727,
            "rank_pca": 137,
            "adv": 10352,
            "trades": 8,
            "volatility": 0.0357142857142857,
            "spread_pct": 0.04444444444444449,
            "spread_ticks": 1.0315659243548958,
            "amihud": 3.319361923230257e-7,
            "turnover_ratio": 0.0018085330961652268,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 15.311004784688995,
            "rank_pca": 532,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.11379407826216334,
            "spread_ticks": 20.444444444444443,
            "amihud": 0.000004161464835622149,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 0.6379585326953748,
            "rank_pca": 624,
            "adv": 0,
            "trades": 0,
            "volatility": 0,
            "spread_pct": 0.8492011200790645,
            "spread_ticks": 54.375,
            "amihud": 0.0001521845093898807,
            "turnover_ratio": 0,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 58.53269537480064,
            "rank_pca": 261,
            "adv": 8628.25,
            "trades": 4,
            "volatility": 0.01754385964912286,
            "spread_pct": 0.041992870633773105,
            "spread_ticks": 2.321428571428571,
            "amihud": 0.0000010868287671847148,
            "turnover_ratio": 0.00047882072489696144,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 38.27751196172249,
            "rank_pca": 388,
            "adv": 3371.25,
            "trades": 2.5,
            "volatility": 0,
            "spread_pct": 0.029695755344508364,
            "spread_ticks": 1.8333333333333333,
            "amihud": 4.7117832722841666e-7,
            "turnover_ratio": 0.00001452431424469013,
            "is_target": false
          },
          {
            "ticker": "RQ1",
            "score_pca": 40.5103668261563,
            "rank_pca": 374,
            "adv": 1870,
            "trades": 2,
            "volatility": 0.0052631578947368585,
            "spread_pct": 0.020097488731881528,
            "spread_ticks": 3.7182539682539684,
            "amihud": 6.569202475170429e-7,
            "turnover_ratio": 0.00002504972959994234,
            "is_target": false
          },
          {
            "ticker": "Y03",
            "score_pca": 48.803827751196174,
            "rank_pca": 322,
            "adv": 5103,
            "trades": 4,
            "volatility": 0.008130081300813052,
            "spread_pct": 0.013600573216727446,
            "spread_ticks": 1.6527777777777777,
            "amihud": 5.685411365036766e-7,
            "turnover_ratio": 0.000053572907634675705,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 627,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.007225075789676386,
              "median": 0.005235602094240788,
              "min": 0,
              "max": 0.06666666666666665,
              "p5": 0,
              "p95": 0.02544871794871789,
              "count": 627
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2036204.5195734361,
              "median": 9983.650000000001,
              "min": 0,
              "max": 207477328.5,
              "p5": 0,
              "p95": 8235107.749999925,
              "count": 627
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08729536967936002,
              "median": 0.02487911739203353,
              "min": 0.00028131928408385907,
              "max": 1.267605633802817,
              "p5": 0.0034367885997602966,
              "p95": 0.4364859190795027,
              "count": 604
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024510330396698464,
              "median": 0.0002060025121339762,
              "min": 0,
              "max": 0.6377298793751236,
              "p5": 0,
              "p95": 0.006666586081524959,
              "count": 588
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.000013538275555645514,
              "median": 1.8095894898922627e-7,
              "min": 0,
              "max": 0.002016644478507272,
              "p5": 0,
              "p95": 0.00004352825462600781,
              "count": 595
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 291.1977671451356,
              "median": 5,
              "min": 0,
              "max": 8734,
              "p5": 0,
              "p95": 1714.549999999996,
              "count": 627
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0068342151675485074,
              "median": 0,
              "min": 0,
              "max": 0.0357142857142857,
              "p5": 0,
              "p95": 0.02810846560846561,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 312575.23333333334,
              "median": 5606,
              "min": 0,
              "max": 1848770.25,
              "p5": 0,
              "p95": 1390444.975,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.21356853647872232,
              "median": 0.0799910730816097,
              "min": 0.005561285963383357,
              "max": 0.8492011200790645,
              "p5": 0.015282075583648639,
              "p95": 0.692456395614854,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00043230162609589096,
              "median": 0.000116214863934995,
              "min": 0,
              "max": 0.0018085330961652268,
              "p5": 0,
              "p95": 0.0014946115552589524,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.000026230205499320544,
              "median": 5.161954964962136e-7,
              "min": 0,
              "max": 0.0001521845093898807,
              "p5": 7.169443569963489e-10,
              "p95": 0.00011517874825131606,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 118.75,
              "median": 4.5,
              "min": 0,
              "max": 683.5,
              "p5": 0,
              "p95": 517.625,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3773.0625,
              "median": 2620.625,
              "min": 0,
              "max": 10352,
              "p5": 0,
              "p95": 9748.6875,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2.6875,
              "median": 2.25,
              "min": 0,
              "max": 8,
              "p5": 0,
              "p95": 6.599999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008331423069869809,
              "median": 0.0026315789473684292,
              "min": 0,
              "max": 0.0357142857142857,
              "p5": 0,
              "p95": 0.029354636591478696,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14487679982670237,
              "median": 0.04321865753910879,
              "min": 0.013600573216727446,
              "max": 0.8492011200790645,
              "p5": 0.015874493647031376,
              "p95": 0.5918086554431488,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00002002022921211614,
              "median": 6.786875240932221e-7,
              "min": 3.319361923230257e-7,
              "max": 0.0001521845093898807,
              "p5": 3.806709395399125e-7,
              "p95": 0.00010037644379589012,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003110336317083227,
              "median": 0.000039311318617309027,
              "min": 0,
              "max": 0.0018085330961652268,
              "p5": 0,
              "p95": 0.0013431337662213332,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.19999999999999996,
            "market": 0.18594157589894733,
            "sector": -0.024366612928054754,
            "peers": -0.006890727484266446,
            "vs_market": -0.3859415758989473,
            "vs_sector": -0.1756333870719452,
            "vs_peers": -0.1931092725157335
          }
        }
      }
    },
    "methodology": {
      "recent_window_days": 30,
      "primary_liquidity_period": "30d",
      "liquidity_windows_days": {
        "1d": 1,
        "30d": 30,
        "3m": 63,
        "6m": 126
      },
      "peer_selection_k": 8,
      "peer_distance": "abs(log(ADV_peer)-log(ADV_target))",
      "return_horizons": [
        "1M",
        "3M",
        "6M",
        "LAST_YEAR"
      ],
      "liquidity_metric_aggregation": "median"
    }
  },

  q02: {
    regime_switching: {
      valid: true,
      regime_method: "liquidity_score_markov",
      current_regime: 0,
      regimes: [
        {
          id: 0,
          label: "Low Liquidity",
          pct_time: 0.6111111111111112,
          mean_ret_pct: 0.06957328385899797,
          volatility_pct: 13.272453703165569,
          mean_ret: 0.06957328385899797,
          volatility: 13.272453703165569,
          activity_score: -0.37039410338832623,
          spread_mode_ticks: 1.0,
          l2_depth_notional_top4: 1774376.5499999998,
          l2_updates: 1114.0,
          l3_events: 591.5,
          l3_executed_events: 0.0,
          metrics_median: {
            adv_notional: 12532.6,
            trades: 14.0,
            volume: 2672750.0,
            spread_mode_ticks: 1.0,
            l2_depth_notional_top4: 1774376.5499999998,
            l2_updates: 1114.0,
            l3_events: 591.5,
            l3_executed_events: 0.0
          },
          n_days: 154
        },
        {
          id: 1,
          label: "Medium Liquidity",
          pct_time: 0.3888888888888889,
          mean_ret_pct: 1.7152575315840621,
          volatility_pct: 13.459375753284164,
          mean_ret: 1.7152575315840621,
          volatility: 13.459375753284164,
          activity_score: 0.6056240764073966,
          spread_mode_ticks: 1.0,
          l2_depth_notional_top4: 2350773.3,
          l2_updates: 1600.0,
          l3_events: 849.5,
          l3_executed_events: 0.0,
          metrics_median: {
            adv_notional: 59538.0,
            trades: 55.0,
            volume: 11553450.0,
            spread_mode_ticks: 1.0,
            l2_depth_notional_top4: 2350773.3,
            l2_updates: 1600.0,
            l3_events: 849.5,
            l3_executed_events: 0.0
          },
          n_days: 98
        }
      ],
      transitions: [
        [0.7581699346405228, 0.24183006535947713],
        [0.37755102040816324, 0.6224489795918368]
      ],
      methodology: {
        window_days: 252,
        clustering: "markov_regression",
        spread_unit: "ticks",
        tick_size_inferred: 0.001,
        regime_metric_aggregation: "median",
        liquidity_score_metric: "pca_time_series",
        liquidity_score_scale: "percentile_0_100"
      },
      feature_columns: [
        "log_notional",
        "log_trade_count",
        "log_turnover",
        "neg_spread_mode",
        "neg_amihud",
        "neg_volatility"
      ]
    }
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
        text: "Liquidity score: 36.4% — BELOW AVG",
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
      "Returns are mixed. Trading friction is driven by a very wide spread; volume and trade count are modest but above peer medians.",

    drivers_title: "What Moves Your Stock Price?",
    drivers_subtitle: "Is the stock driven by market/sector moves, or mostly company-specific factors?",
    drivers_strip: [
      {
        title: "Key Insight",
        text:
          "About 94% of recent price moves are company-specific. Market contribution is ~0.6% and sector ~5.3%."
      },
      {
        title: "Market Link",
        text:
          "Market correlation is near zero (~0.00). Best signal shows the stock leading the market by ~4 days, but explanatory power is very low."
      },
      {
        title: "Sector Link",
        text:
          "Sector correlation is weak (~0.16). Moves are contemporaneous in this sample."
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

    regime_title: "Trading Activity Regimes",
    regime_subtitle: "Different activity states help explain timing risk for trades",
    regime_badge_text: "Current: Low Activity Regime",
    regime_pie_title: "Time Spent in Each Market Condition",
    transition_title: "How Likely is the Market to Change State?",
    transition_cols: ["From \\ To", "Low Activity", "Medium Activity"],
    transition_note_template: "Rows sum to 100%. Shows probability of switching between market states.",

    exec_check_title: "Trading Costs & Market Depth",
    exec_check_subtitle: "Order book depth and estimated price impact for different trade sizes",
    order_book_title: "Order Book Depth (Available Liquidity)",
    order_book_note:
      "Spread is very wide (~28.6%). Snapshot shows displayed depth, but it is thin relative to potential order size — execution should be staged.",

    peer_capacity_title: "How Much Can You Trade? (50K as % of Daily Volume)",
    peer_capacity_note:
      "Lower is better. For Oceanus, a S$50K clip is ~581% of ADV — multi-day staging is required.",

    impact_summary_title: "Estimated Price Impact (Sell Orders)",
    impact_summary_subtitle:
      "Price impact from mid to VWAP using latest model snapshot (single-day). Results can vary materially day to day.",
    exec_check_insight:
      "Oceanus combines very wide spreads with thin depth. Even moderate orders can create outsized slippage, which limits institutional participation.",

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
        value: "36.4",
        suffix: "/100",
        bar_pct: 36.36363636363637,
        color_value: "text-red-300",
        color_bar: "text-red-300",
        subtext: "Rank 400/627 • Peer median: 36.5",
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
            "Average daily trading value over the last 30 days. Higher means more liquidity and easier to trade larger amounts."
        },
        value: "9.7K",
        suffix: "SGD",
        bar_pct: 6,
        color_value: "text-amber-300",
        color_bar: "text-amber-300",
        subtext: "Peer median: 2.35K SGD • Above peers, but very small in absolute terms",
        interpretation: { text: "THIN", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "What Drives Price Changes",
        tooltip: {
          title: "What this means",
          body: "How much of price movement comes from company-specific factors vs. the overall market or sector."
        },
        value: "94.1",
        suffix: "% company",
        bar_pct: 94.0903886252686,
        color_value: "text-white",
        color_bar: "text-purple-400",
        subtext: "Market: 0.6% • Sector: 5.3%",
        interpretation: { text: "Company-driven", cls: "interpretation-neutral", icon: "◆" }
      }
    ],

    exec_takeaways: [
      "Liquidity is below average (36.4/100; rank 400/627). The binding constraint is an exceptionally wide spread (~28.6%).",
      "ADV is ~S$9.7K/day. A S$50K clip is ~581% of ADV — size must be staged over multiple days.",
      "Price moves are overwhelmingly company-specific (~94%), so order timing and flow shape outcomes."
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
                "Tighten bid-ask gaps to lower immediate trading cost and widen the investable audience."
              ]
            },
            {
              title: "Stabilize trading around disclosures",
              bullets: [
                "Keep cadence and clarity of updates to avoid abrupt repricing in a thin book.",
                "Coordinate releases with peak liquidity windows to reduce slippage."
              ]
            }
          ]
        },
        {
          priority: "MEDIUM (3–9 months)",
          badge: { bg: "bg-amber-500/20", text: "text-amber-400", textColor: "text-amber-400", dot: "bg-amber-500" },
          items: [
            {
              title: "Lift average traded value and repeat participation",
              bullets: [
                "Broaden investor participation to build steadier turnover (beyond episodic spikes).",
                "Encourage more trading outside a few concentrated time buckets."
              ]
            },
            {
              title: "Lay groundwork for institutional participation",
              bullets: [
                "Lower realized trading cost (spread/impact) and improve predictability of depth.",
                "Use a simple liquidity KPI pack with counterparties to track progress."
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
                "Track spread, ADV, trades, concentration (HHI), OFI, and short activity versus peers.",
                "Flag slippage from the plan and respond quickly."
              ]
            },
            {
              title: "Revisit index visibility only after tradability improves",
              bullets: [
                "Eligibility is constrained by size/velocity; treat it as an outcome, not a near-term lever.",
                "Focus first on tighter spreads and more predictable turnover."
              ]
            }
          ]
        }
      ]
    },

    liq_tiles: [
      {
        title: "Daily Trades",
        value: "17.5",
        sub: "Many trades are small, which limits depth despite activity",
        interp: { text: "FRAGMENTED", cls: "interpretation-neutral", icon: "■" }
      },
      {
        title: "Turnover (Volume/Free Float)",
        value: "0.011%",
        sub: "Very low turnover — shares change hands infrequently",
        interp: { text: "LOW", cls: "interpretation-bad", icon: "◆" }
      },
      {
        title: "Daily Volatility",
        value: "N/A",
        sub: "Volatility signal is not informative in this sample",
        interp: { text: "UNAVAILABLE", cls: "interpretation-neutral", icon: "■" }
      }
    ],

    liq_insight:
      "Liquidity quality is weak. ADV is above the peer median, but a very wide spread dominates trading cost and deters larger tickets. Improving two-way depth and timing around liquid windows will matter more than raw volume growth.",

    perf_badge: "Context",

    exec_check_tiles: [
      { title: "Mid Price", value: "0.0035", note: "SGD (snapshot)", color: "text-white" },
      { title: "Spread", value: "28.6%", note: "Immediate trading cost", color: "text-red-300" },
      { title: "Depth", value: "Thin", note: "Displayed, but shallow vs. order size", color: "text-slate-300" }
    ],

    impact_summary_cards: [
      { title: "S$100K Sell", text: "Price impact: −14.29% • Fill: 100% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$1.0M Sell", text: "Price impact: −34.32% • Fill: 61.1% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" },
      { title: "S$2.5M Sell", text: "Price impact: −34.32% • Fill: 24.4% • Mid→VWAP", cls: "bg-red-500/10 border border-red-500/30" }
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
        "Oceanus screens as a below-average liquidity small-cap on SGX. The composite liquidity score is 36.4/100 (rank 400 of 627). The main driver is an exceptionally wide spread (~28.6%).",
      strengths: [
        "ADV (~S$9.7K/day) is above the peer median (~S$2.35K) — the name trades, but in very small absolute size",
        "Daily trades (~18/day) are above sector and market medians, indicating activity is present (albeit in small clips)"
      ],
      concerns: [
        "Spread is extremely wide (~28.6%), materially increasing crossing cost and slippage",
        "Turnover is very low (~0.011%), indicating limited natural liquidity and participation depth"
      ],
      peer_context:
        "Versus peers, volume and trade count are higher, but spread is far worse. Improving liquidity quality will require tighter two-way trading conditions, not only more prints."
    },

    market_comparison: {
      adv: {
        insight: "Oceanus ADV is ~S$9.7K/day.",
        vs_market: "Below the market median (~S$13.8K).",
        vs_sector: "Above the sector median (~S$0.87K).",
        vs_peers: "Above peer median (~S$2.35K)."
      },
      spread: {
        insight: "Spread is the dominant constraint (~28.6%).",
        vs_market: "Much wider than market median (~2.23%).",
        vs_sector: "Much wider than sector median (~6.44%).",
        vs_peers: "Much wider than peer median (~4.40%)."
      },
      volatility: {
        insight: "Volatility signal is not informative in this sample.",
        vs_market: "N/A.",
        vs_sector: "N/A.",
        vs_peers: "N/A."
      },
      trades: {
        insight: "Trade count is modest (~18/day) but above medians.",
        vs_market: "Above the market median (~7/day).",
        vs_sector: "Above sector median (~1.5/day).",
        vs_peers: "Above peer median (~1.5/day)."
      }
    },

    performance: {
      overall:
        "Near-term returns are mixed: flat over 1M, weak over 3–6M. Liquidity does not explain performance, but wide spreads amplify friction when investors need to trade.",
      ytd: {
        stock: "Not available",
        market: "Not available",
        sector: "Not available",
        peers: "Not available",
        insight:
          "YTD view is not shown here; use 1–3M/6M for context."
      },
      three_month: {
        stock: "-20.0%",
        market: "+11.4%",
        sector: "+0.2%",
        peers: "-0.9%",
        insight:
          "Over 3 months, Oceanus is down ~20% while the market is up. This reinforces that company-specific factors dominate."
      },
      six_month: {
        stock: "-20.0%",
        market: "+18.6%",
        sector: "-2.4%",
        peers: "-0.7%",
        insight:
          "Over 6 months, Oceanus trails the market by a wide margin, consistent with microstructure headwinds."
      },
      last_year: {
        stock: "Not available",
        market: "Not available",
        sector: "Not available",
        peers: "Not available"
      },
      conclusion:
        "Treat liquidity improvement and fundamentals as parallel tracks. Lower trading friction broadens participation; durable valuation needs fundamentals and consistent messaging."
    },

    drivers: {
      overall:
        "Oceanus price movements are overwhelmingly company-specific: ~94.1% idiosyncratic share. Sector contributes ~5.3% and the market ~0.6%. The model fit is low (R²≈2.5%).",
      interpretation:
        "High company-specific share means the tape is driven by Oceanus-specific information, trading conditions, and positioning rather than macro tailwinds.",
      rolling_change:
        "Across rolling windows, company-specific share remains dominant while sector and market shares vary at the margin.",
      beta:
        "Market beta is ~0.16 in the sample. Sector beta is large (β≈20.6), which is common in thin small-cap regressions; treat betas as directional, not precise."
    },

    regime: {
      overall:
        "The activity model identifies two states: Low Activity (~61% of time) and Medium Activity (~39%). Current regime is Low Activity, with intermittent medium-activity periods. Method: k-means clustering over 252 trading days using activity features (notional, trade count, volume, L2 depth/updates, L3 order events, and spread in ticks; tick size 0.001). Regime medians — Low Activity: notional ~S$12.5K, trades ~14/day, volume ~2.67M shares, top-4 L2 depth ~S$1.77M; Medium Activity: notional ~S$59.5K, trades ~55/day, volume ~11.55M shares, top-4 L2 depth ~S$2.35M.",
      current:
        "Current regime: Low Activity. Execution risk remains elevated given wide spreads and thin depth.",
      transitions:
        "Low Activity tends to persist (~75.8% stay). From Medium Activity, staying medium is ~62.2% (switch to low ~37.8%).",
      trading_implications:
        "Avoid urgency; stage orders and time to deeper windows. Small changes in flow can move the price materially during higher-activity days."
    },

    trader_composition: {
      overall:
        "Trading is overwhelmingly retail-driven (~99.8% by count in the last month). By notional: retail ~85.6%, mixed ~14.4%, institutional ~0%.",
      retail_heavy:
        "Average trade size is very small (~S$212; median ~S$0.60), which raises noise and reduces depth consistency.",
      institutional_gap:
        "Near-zero institutional flow means less block liquidity and higher impact when larger orders appear.",
      peer_comparison:
        "Peers are also retail-heavy, but Oceanus remains at the extreme end of retail concentration."
    },

    price_moving: {
      overall:
        "About 11.6% of trades moved the price (453 of 3,917). This is consistent with wide spreads and discrete ticks.",
      interpretation:
        "When spreads are wide, many trades move the price mechanically. This increases execution cost and makes outcomes timing-dependent.",
      asymmetry:
        "Negative price-moving trades are larger on average than positive movers (~S$2.1K vs ~S$1.4K), so selling pressure can be more disruptive."
    },

    short_selling: {
      overall:
        "Short participation is low on average (3M avg short ~0.8%; 6M ~0.9%) and 0% in the most recent month. Shorting does not appear to explain returns (corr ≈ −0.01).",
      level:
        "Average short ratios are low across 1M/3M/6M; episodic spikes occurred historically but are not persistent.",
      correlation:
        "Short% vs return correlation is ~0 (−0.01), indicating no reliable relationship here.",
      trend:
        "Recent activity is -100% versus the 3M average over the last 14 days — effectively no shorting.",
      peaks:
        "Peak short days were sporadic (e.g., 2025-12-11 and 2025-11-20). Treat spikes as context rather than a primary signal."
    },

    execution: {
      overall:
        "Execution conditions are challenging: spread is ~28.6% and even a S$50K trade is ~581% of ADV. Depth snapshot is available but thin; modelled impact can be material for urgent flow.",
      concern:
        "Even moderate clip sizes can represent many days of natural notional volume; crossing the spread can dominate total cost.",
      peer_context:
        "Peer capacity comparisons show similarly high percentages for 50K relative to ADV across small caps — Oceanus sits in a difficult tier for size."
    },

    intraday: {
      overall:
        "Trading is highly concentrated (HHI ~0.47 over 6M). Liquidity is not evenly available throughout the day, which increases execution timing risk.",
      hhi_interpretation:
        "HHI above 0.25 indicates high concentration. Oceanus is well above that threshold — liquidity clusters in a few windows.",
      best_times:
        "The heaviest activity is at 08:30–09:00 and early morning buckets. Larger trades should target those windows when possible.",
      peer_ranking:
        "Oceanus is concentrated; many peers are also concentrated, though several are even more so. The spread/impact combination is the key differentiator."
    },

    ofi: {
      overall:
        "Order flow appears one-sided at times. The relationship to same-day returns is weak in this sample, and recent L2 snapshots were limited — treat OFI as a risk flag rather than a predictive signal here.",
      daily_vs_intraday:
        "Daily OFI can flag one-sided tapes; with limited recent L2 data, intraday predictiveness is not established in this report.",
      l2_signal:
        "Recent L2 coverage was insufficient for a robust test; treat L2 OFI as limited in this report.",
      day_breakdown:
        "Breakdown by net buying/selling days is not shown due to data limitations."
    },

    index: {
      overall:
        "Oceanus is not currently eligible for major indices due to size/velocity constraints.",
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
      labels: ["579", "5EV", "AAJ", "K03", "BAC", "BNE", "MV4", "RQ1", "Y03"],
      scores: [
        36.36363636363637,
        31.57894736842105,
        36.84210526315789,
        15.629984051036683,
        0.7974481658692184,
        36.20414673046252,
        44.65709728867623,
        47.52791068580542,
        48.644338118022326
      ],
      is_target: [true, false, false, false, false, false, false, false, false],
      adv: [9716.8, 330.0, 1406.25, 0.0, 0.0, 3287.5, 3738.25, 9149.25, 9317.0],
      total: 627
    },

    market_comparison: {
      sector_name: "Food Distribution",
      sector_count: 6,
      market_count: 627,
      company: {
        volatility: 0.0,
        adv: 9716.8,
        spread_pct: 0.2857142857142857,
        turnover_ratio: 0.00011174540865879137,
        amihud: 0.0,
        trades: 17.5
      },
      market: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.00866377423898187,
          median: 0.006211180124223503,
          min: 0.0,
          max: 0.10000000000000009,
          p5: 0.0,
          p95: 0.028802642444260916,
          count: 627
        },
        adv: {
          direction: "higher_is_better",
          mean: 2444757.7199933617,
          median: 13790.0,
          min: 0.0,
          max: 276850195.5,
          p5: 0.0,
          p95: 9290600.749999996,
          count: 627
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.08797074424664217,
          median: 0.02227348264999878,
          min: 0.00026240346042774555,
          max: 1.3043478260869563,
          p5: 0.0031413801048232205,
          p95: 0.43404255319148943,
          count: 601
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0038161167428499743,
          median: 0.0002664505620370697,
          min: 0.0,
          max: 1.0332212774372158,
          p5: 0.0,
          p95: 0.010839008030372297,
          count: 588
        },
        amihud: {
          direction: "lower_is_better",
          mean: 4.599211439778784e-05,
          median: 1.200749845273457e-07,
          min: 0.0,
          max: 0.014102564102564101,
          p5: 0.0,
          p95: 4.674752963121062e-05,
          count: 588
        },
        trades: {
          direction: "higher_is_better",
          mean: 341.0311004784689,
          median: 6.5,
          min: 0.0,
          max: 11120.0,
          p5: 0.0,
          p95: 1874.4999999999977,
          count: 627
        }
      },
      sector: {
        volatility: {
          direction: "lower_is_better",
          mean: 0.0009208103130755226,
          median: 0.0,
          min: 0.0,
          max: 0.005524861878453136,
          p5: 0.0,
          p95: 0.004143646408839852,
          count: 6
        },
        adv: {
          direction: "higher_is_better",
          mean: 472416.6333333333,
          median: 868.125,
          min: 0.0,
          max: 2823046.75,
          p5: 0.0,
          p95: 2119714.2625,
          count: 6
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.23503781854275174,
          median: 0.06435720374609208,
          min: 0.0056426397408671026,
          max: 0.9465930018416205,
          p5: 0.015122623922538533,
          p95: 0.7813733228097868,
          count: 6
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 0.0002060127903155198,
          median: 7.383408451690991e-05,
          min: 0.0,
          max: 0.0008731525706178812,
          p5: 0.0,
          p95: 0.0007086784285237653,
          count: 6
        },
        amihud: {
          direction: "lower_is_better",
          mean: 2.094637777931643e-06,
          median: 1.2862874554044366e-09,
          min: 0.0,
          max: 1.1652610511027564e-05,
          p5: 0.0,
          p95: 8.967618778683544e-06,
          count: 6
        },
        trades: {
          direction: "higher_is_better",
          mean: 170.25,
          median: 1.5,
          min: 0.0,
          max: 1001.0,
          p5: 0.0,
          p95: 755.125,
          count: 6
        }
      },
      peers: {
        adv: {
          direction: "higher_is_better",
          mean: 3403.53125,
          median: 2346.875,
          min: 0.0,
          max: 9317.0,
          p5: 0.0,
          p95: 9258.2875,
          count: 8
        },
        trades: {
          direction: "higher_is_better",
          mean: 1.875,
          median: 1.5,
          min: 0.0,
          max: 5.5,
          p5: 0.0,
          p95: 4.624999999999998,
          count: 8
        },
        volatility: {
          direction: "lower_is_better",
          mean: 0.004248316791916382,
          median: 0.0,
          min: 0.0,
          max: 0.015151515151515138,
          p5: 0.0,
          p95: 0.01357188910380401,
          count: 8
        },
        spread_pct: {
          direction: "lower_is_better",
          mean: 0.15566907429871174,
          median: 0.04395866628380612,
          min: 0.011626635658266054,
          max: 0.9465930018416205,
          p5: 0.014466060231292772,
          p95: 0.6448113291842965,
          count: 8
        },
        amihud: {
          direction: "lower_is_better",
          mean: 2.09576992149407e-06,
          median: 6.174664217229079e-07,
          min: 0.0,
          max: 1.1652610511027564e-05,
          p5: 0.0,
          p95: 8.495491497738732e-06,
          count: 8
        },
        turnover_ratio: {
          direction: "higher_is_better",
          mean: 8.797427004671488e-05,
          median: 6.691043567514946e-05,
          min: 0.0,
          max: 0.00021550850956900884,
          p5: 0.0,
          p95: 0.00021542013200435194,
          count: 8
        }
      }
    },

    returns: [
      { horizon: "1M", stock: 0.0, market: 0.05686638227253282, sector: -0.008057362507392196, peers: 0.0027314814814813904 },
      { horizon: "3M", stock: -0.19999999999999996, market: 0.11373026364489736, sector: 0.0024462907342273077, peers: -0.009480449436079397 },
      { horizon: "6M", stock: -0.19999999999999996, market: 0.18594157589894733, sector: -0.024366612928054754, peers: -0.006890727484266446 },
      { horizon: "LAST_YEAR", stock: null, market: null, sector: null, peers: null }
    ],

    drivers: {
      // Stored as percentages (0-100) for the UI pie
      share_market: 0.5879288310838362,
      share_sector: 5.321682543647567,
      share_idio: 94.0903886252686,
      beta_market: 0.15695599849194106,
      beta_sector: 20.588977460210952,
      r_squared: 0.02477087238668807,
      lead_lag: {
        lags: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5],
        corr_market: [
          0.07827285441110203,
          0.323915824942855,
          -0.20276850276733238,
          -0.014686691379253691,
          -0.0839583929920889,
          -0.001500183942468999,
          -0.14032587869597607,
          -0.017360357653073883,
          0.311493836447315,
          0.02709105347035679,
          -0.0847909708839672
        ],
        corr_sector: [
          -0.0007928372687349561,
          -0.15327811774212274,
          0.08751813371448902,
          -0.0019305755880502627,
          -0.04965324252873089,
          0.15730446714097107,
          -0.12924304089337071,
          0.1445561127181022,
          -0.001962830616784182,
          -0.0026437037044963144,
          -0.13168263565945068
        ],
        best: { market: -4, sector: 0 }
      },
      rolling_windows: {
        p1: {
          valid: true,
          period_label: "2025-02-07 to 2025-04-11",
          shares: { share_market: 0.0065286430833783726, share_sector: 0.23238654125668068, share_idio: 0.761084815659941 },
          regression: { r_squared: 0.22700994878298686 }
        },
        p2: {
          valid: true,
          period_label: "2025-04-11 to 2025-06-13",
          shares: { share_market: 0.053468962004040894, share_sector: 0.05415211750496186, share_idio: 0.8923789204909973 },
          regression: { r_squared: 0.031233450595083867 }
        },
        p3: {
          valid: true,
          period_label: "2025-06-13 to 2025-08-15",
          shares: { share_market: 0.0591821501709528, share_sector: 0.08900418736330079, share_idio: 0.8518136624657464 },
          regression: { r_squared: 0.06933203732333315 }
        },
        p4: {
          valid: true,
          period_label: "2025-08-15 to 2025-10-17",
          shares: { share_market: 0.1927488122030588, share_sector: 0.11237424152303094, share_idio: 0.6948769462739103 },
          regression: { r_squared: 0.16456054842231904 }
        },
        p5: {
          valid: true,
          period_label: "2025-10-17 to 2025-12-19",
          shares: { share_market: 0.12361560773085759, share_sector: 0.17289520772467995, share_idio: 0.7034891845444625 },
          regression: { r_squared: 0.19815933307386402 }
        },
        p6: {
          valid: true,
          period_label: "2025-12-19 to 2026-02-20",
          shares: { share_market: 0.005879288310838362, share_sector: 0.05321682543647567, share_idio: 0.940903886252686 },
          regression: { r_squared: 0.02477087238668807 }
        }
      },
      // Legacy fallback (not used when rolling_windows exists)
      rolling: {
        ordered: [
          "2025-02-07 to 2025-04-11",
          "2025-04-11 to 2025-06-13",
          "2025-06-13 to 2025-08-15",
          "2025-08-15 to 2025-10-17",
          "2025-10-17 to 2025-12-19",
          "2025-12-19 to 2026-02-20"
        ],
        market: [0.7, 5.3, 5.9, 19.3, 12.4, 0.6],
        sector: [23.2, 5.4, 8.9, 11.2, 17.3, 5.3],
        idio: [76.1, 89.2, 85.2, 69.5, 70.3, 94.1]
      },
      // New Q02 regime contract used by activity-regime UI (units noted inline).
      regime: {
        valid: true,
        regime_method: "liquidity_score_markov",
        n_regimes: 2,
        labels: ["Low Liquidity", "Medium Liquidity"],
        pct_time: [0.6111111111111112, 0.3888888888888889],
        current_regime: 0,
        regimes: [
          {
            id: 0,
            label: "Low Liquidity",
            pct_time: 0.6111111111111112,
            mean_ret_pct: 0.06957328385899797,
            volatility_pct: 13.272453703165569,
            mean_ret: 0.06957328385899797,
            volatility: 13.272453703165569,
            activity_score: -0.37039410338832623,
            spread_mode_ticks: 1.0,
            l2_depth_notional_top4: 1774376.5499999998,
            l2_updates: 1114.0,
            l3_events: 591.5,
            l3_executed_events: 0.0,
            metrics_median: {
              adv_notional: 12532.6,
              trades: 14.0,
              volume: 2672750.0,
              spread_mode_ticks: 1.0,
              l2_depth_notional_top4: 1774376.5499999998,
              l2_updates: 1114.0,
              l3_events: 591.5,
              l3_executed_events: 0.0
            },
            n_days: 154
          },
          {
            id: 1,
            label: "Medium Liquidity",
            pct_time: 0.3888888888888889,
            mean_ret_pct: 1.7152575315840621,
            volatility_pct: 13.459375753284164,
            mean_ret: 1.7152575315840621,
            volatility: 13.459375753284164,
            activity_score: 0.6056240764073966,
            spread_mode_ticks: 1.0,
            l2_depth_notional_top4: 2350773.3,
            l2_updates: 1600.0,
            l3_events: 849.5,
            l3_executed_events: 0.0,
            metrics_median: {
              adv_notional: 59538.0,
              trades: 55.0,
              volume: 11553450.0,
              spread_mode_ticks: 1.0,
              l2_depth_notional_top4: 2350773.3,
              l2_updates: 1600.0,
              l3_events: 849.5,
              l3_executed_events: 0.0
            },
            n_days: 98
          }
        ],
        transitions: [
          [0.7581699346405228, 0.24183006535947713],
          [0.37755102040816324, 0.6224489795918368]
        ],
        methodology: {
          window_days: 252,
          clustering: "markov_regression",
          spread_unit: "ticks",
          tick_size_inferred: 0.001,
          regime_metric_aggregation: "median",
          liquidity_score_metric: "pca_time_series",
          liquidity_score_scale: "percentile_0_100"
        },
        feature_columns: [
          "log_notional",
          "log_trade_count",
          "log_turnover",
          "neg_spread_mode"
        ]
      }
    },

    order_book: {
      bids: [
        { level: 1, price: 0.003, quantity: 136646900.0, value: 409940.7 },
        { level: 2, price: 0.002, quantity: 71796000.0, value: 143592.0 },
        { level: 3, price: 0.001, quantity: 57291000.0, value: 57291.0 }
      ],
      asks: [
        { level: 1, price: 0.004, quantity: 260292200.0, value: 1041168.8 },
        { level: 2, price: 0.005, quantity: 105794100.0, value: 528970.5 },
        { level: 3, price: 0.006, quantity: 52223400.0, value: 313340.4 },
        { level: 4, price: 0.007, quantity: 48278500.0, value: 337949.5 },
        { level: 5, price: 0.008, quantity: 7960000.0, value: 63680.0 },
        { level: 6, price: 0.009, quantity: 2800000.0, value: 25200.0 },
        { level: 7, price: 0.01, quantity: 10270000.0, value: 102700.0 },
        { level: 8, price: 0.011, quantity: 1200000.0, value: 13200.0 },
        { level: 9, price: 0.012, quantity: 2015000.0, value: 24180.0 },
        { level: 10, price: 0.013, quantity: 5350000.0, value: 69550.0 }
      ]
    },

    peer_capacity: {
      bx_ticket_pct_adv_50k: 581.3,
      peers: [
        { ticker: "MV4", pct: 9065.4 },
        { ticker: "RQ1", pct: 9192.7 },
        { ticker: "Y03", pct: 10733.1 },
        { ticker: "BNE", pct: 23761.4 },
        { ticker: "5EV", pct: 37383.2 },
        { ticker: "AAJ", pct: 90481.4 },
        { ticker: "K03", pct: null },
        { ticker: "BAC", pct: null }
      ]
    },

    trader_composition: {
      valid: true,
      currency: "SGD",
      n_trades: 1000,
      first_trade_date: "2026-01-21",
      last_trade_date: "2026-02-19",
      period_days: 29,
      thresholds: { retail_max: 13500.0, instit_min: 67500.0 },
      composition: {
        retail_pct: 0.998,
        mixed_pct: 0.002,
        instit_pct: 0.0,
        retail_qty_pct: 0.8742863245405779,
        mixed_qty_pct: 0.12571367545942216,
        instit_qty_pct: 0.0,
        retail_notional_pct: 0.8559304760752611,
        mixed_notional_pct: 0.1440695239247389,
        instit_notional_pct: 0.0
      },
      trade_size: { avg: 212.43909999999997, median: 0.6 },
      over_time: {
        valid: true,
        periods: [
          { month: "2026-02", n_trades: 883, retail_pct: 0.9988674971687429, mixed_pct: 0.0011325028312570782, instit_pct: 0.0, avg_trade_size: 197.13182332955836, retail_qty_pct: 0.9206653007875952, mixed_qty_pct: 0.07933469921240477, instit_qty_pct: 0.0, total_quantity: 50419300.0 },
          { month: "2026-01", n_trades: 428, retail_pct: 0.9883177570093458, mixed_pct: 0.011682242990654205, instit_pct: 0.0, avg_trade_size: 996.8665887850468, retail_qty_pct: 0.8156438673940559, mixed_qty_pct: 0.18435613260594408, instit_qty_pct: 0.0, total_quantity: 113373500.0 },
          { month: "2025-12", n_trades: 906, retail_pct: 0.9911699779249448, mixed_pct: 0.00772626931567329, instit_pct: 0.0011037527593818985, avg_trade_size: 789.3853200883002, retail_qty_pct: 0.6784188981749958, mixed_qty_pct: 0.20487179487179488, instit_qty_pct: 0.1167093069532094, total_quantity: 175890000.0 },
          { month: "2025-11", n_trades: 818, retail_pct: 0.980440097799511, mixed_pct: 0.018337408312958436, instit_pct: 0.0012224938875305623, avg_trade_size: 1118.2067237163815, retail_qty_pct: 0.43579622077728514, mixed_qty_pct: 0.41705678171693716, instit_qty_pct: 0.14714699750577764, total_quantity: 222754800.0 },
          { month: "2025-10", n_trades: 350, retail_pct: 0.9342857142857143, mixed_pct: 0.06571428571428571, instit_pct: 0.0, avg_trade_size: 3361.5242857142857, retail_qty_pct: 0.5824223056384322, mixed_qty_pct: 0.41757769436156783, instit_qty_pct: 0.0, total_quantity: 234753200.0 },
          { month: "2025-09", n_trades: 503, retail_pct: 0.9821073558648111, mixed_pct: 0.017892644135188866, instit_pct: 0.0, avg_trade_size: 850.6135188866799, retail_qty_pct: 0.5808771852223189, mixed_qty_pct: 0.4191228147776811, instit_qty_pct: 0.0, total_quantity: 81387600.0 }
        ]
      },
      peer_comparison: [
        { ticker: "579", currency: "SGD", is_target: true, retail_pct: 0.998, mixed_pct: 0.002, instit_pct: 0.0, retail_qty_pct: 0.8742863245405779, mixed_qty_pct: 0.12571367545942216, instit_qty_pct: 0.0, retail_notional_pct: 0.8559304760752611, mixed_notional_pct: 0.1440695239247389, instit_notional_pct: 0.0, avg_trade_size: 212.43909999999997, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "AAJ", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, retail_qty_pct: 1.0, mixed_qty_pct: 0.0, instit_qty_pct: 0.0, retail_notional_pct: 1.0, mixed_notional_pct: 0.0, instit_notional_pct: 0.0, avg_trade_size: 1135.1974358974355, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "K03", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, retail_qty_pct: 1.0, mixed_qty_pct: 0.0, instit_qty_pct: 0.0, retail_notional_pct: 1.0, mixed_notional_pct: 0.0, instit_notional_pct: 0.0, avg_trade_size: 1719.5833333333333, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "BAC", currency: "SGD", is_target: false, retail_pct: 1.0, mixed_pct: 0.0, instit_pct: 0.0, retail_qty_pct: 1.0, mixed_qty_pct: 0.0, instit_qty_pct: 0.0, retail_notional_pct: 1.0, mixed_notional_pct: 0.0, instit_notional_pct: 0.0, avg_trade_size: 1620.05, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "5EV", currency: "SGD", is_target: false, retail_pct: 0.9824561403508771, mixed_pct: 0.017543859649122806, instit_pct: 0.0, retail_qty_pct: 0.8504717596417235, mixed_qty_pct: 0.14952824035827644, instit_qty_pct: 0.0, retail_notional_pct: 0.8452447275435344, mixed_notional_pct: 0.1547552724564656, instit_notional_pct: 0.0, avg_trade_size: 2768.0263157894738, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "MV4", currency: "SGD", is_target: false, retail_pct: 0.9423076923076923, mixed_pct: 0.057692307692307696, instit_pct: 0.0, retail_qty_pct: 0.6618698910081744, mixed_qty_pct: 0.3381301089918256, instit_qty_pct: 0.0, retail_notional_pct: 0.6599503757247808, mixed_notional_pct: 0.34004962427521923, instit_notional_pct: 0.0, avg_trade_size: 3664.0721153846152, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "BNE", currency: "SGD", is_target: false, retail_pct: 0.9285714285714286, mixed_pct: 0.07142857142857142, instit_pct: 0.0, retail_qty_pct: 0.6824540704533962, mixed_qty_pct: 0.31754592954660377, instit_qty_pct: 0.0, retail_notional_pct: 0.6781100734120968, mixed_notional_pct: 0.32188992658790316, instit_notional_pct: 0.0, avg_trade_size: 4311.278571428571, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "Y03", currency: "SGD", is_target: false, retail_pct: 0.8961038961038961, mixed_pct: 0.1038961038961039, instit_pct: 0.0, retail_qty_pct: 0.39790794979079497, mixed_qty_pct: 0.602092050209205, instit_qty_pct: 0.0, retail_notional_pct: 0.3974035332510224, mixed_notional_pct: 0.6025964667489776, instit_notional_pct: 0.0, avg_trade_size: 5659.038961038961, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } },
        { ticker: "RQ1", currency: "SGD", is_target: false, retail_pct: 0.875, mixed_pct: 0.125, instit_pct: 0.0, retail_qty_pct: 0.4276474198574194, mixed_qty_pct: 0.5723525801425806, instit_qty_pct: 0.0, retail_notional_pct: 0.425504802671148, mixed_notional_pct: 0.574495197328852, instit_notional_pct: 0.0, avg_trade_size: 5954.36875, thresholds: { retail_max: 13500.0, instit_min: 67500.0 } }
      ],
      currency_thresholds: { SGD: { retail_max: 13500.0, instit_min: 67500.0 } },
      classification_legend: { retail_heavy: ">70% retail", institutional: ">20% institutional", mixed: "otherwise" }
    },

    price_moving_trades: {
      total_trades: 3917,
      price_moving_trades: 453,
      pct_price_moving: 11.564973193770744,
      all_movers: { count: 453, avg_size: 1725.4434878587194, median_size: 66.0, retail_count: 440, mixed_count: 12, institutional_count: 1, retail_pct: 97.13024282560706, mixed_pct: 2.6490066225165565, instit_pct: 0.22075055187637968 },
      positive_movers: { count: 225, avg_size: 1358.958222222222, median_size: 200.0, retail_count: 223, mixed_count: 2, institutional_count: 0, retail_pct: 99.11111111111111, mixed_pct: 0.8888888888888888, instit_pct: 0.0 },
      negative_movers: { count: 228, avg_size: 2087.1065789473682, median_size: 20.5, retail_count: 217, mixed_count: 10, institutional_count: 1, retail_pct: 95.17543859649122, mixed_pct: 4.385964912280701, instit_pct: 0.43859649122807015 }
    },

    short_selling: {
      data_available: true,
      security_name: "Oceanus",
      mapping: { ticker_to_security: "Oceanus", confidence: "high" },
      coverage: { n_days_short_data: 86, window_days: 182 },
      periods: {
        "1M": { stats: { valid: true, avg_short_ratio: 0.0, max_short_ratio: 0.0, interpretation: "Low short interest" } },
        "3M": { stats: { valid: true, avg_short_ratio: 0.00799061359533049, max_short_ratio: 0.25283171521035597, interpretation: "Low short interest" } },
        "6M": { stats: { valid: true, avg_short_ratio: 0.008968995558087655, max_short_ratio: 0.32876352039977647, interpretation: "Low short interest" } }
      },
      correlation: { valid: true, correlation: -0.011445313014413292, interpretation: "No clear relationship" },
      peaks: [
        { date: "2025-12-11", short_ratio: 0.25283171521035597, return_pct: 0.0 },
        { date: "2025-11-20", short_ratio: 0.2390628735357399, return_pct: 0.0 }
      ],
      short_interest_change: {
        valid: true,
        monthly_data: [
          { month: "2026-02", avg_short_ratio: 0.0 },
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
          { month: "2025-03", avg_short_ratio: 0.0 }
        ],
        mom_change: [
          { month: "2026-02", avg_short_ratio: 0.0, change_pct: null },
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
          { month: "2025-03", avg_short_ratio: 0.0, change_pct: -100.0 }
        ],
        interpretation: "Short interest stable"
      },
      short_series: {
        valid: true,
        rows: [
          { date: "2026-02-20", short_ratio: 0.0, short_vol: 0, total_vol: 3870700, close: 0.004, return: 0.0 },
          { date: "2026-02-19", short_ratio: 0.0, short_vol: 0, total_vol: 2142700, close: 0.004, return: 0.0 },
          { date: "2026-02-16", short_ratio: 0.0, short_vol: 0, total_vol: 1590500, close: 0.004, return: 0.33333333333333326 },
          { date: "2026-02-13", short_ratio: 0.0, short_vol: 0, total_vol: 5168400, close: 0.003, return: -0.25 },
          { date: "2026-02-12", short_ratio: 0.0, short_vol: 0, total_vol: 17872100, close: 0.004, return: 0.33333333333333326 },
          { date: "2026-02-11", short_ratio: 0.0, short_vol: 0, total_vol: 2876800, close: 0.003, return: 0.0 },
          { date: "2026-02-10", short_ratio: 0.0, short_vol: 0, total_vol: 8343700, close: 0.003, return: 0.0 },
          { date: "2026-02-09", short_ratio: 0.0, short_vol: 0, total_vol: 151900, close: 0.003, return: 0.0 },
          { date: "2026-02-06", short_ratio: 0.0, short_vol: 0, total_vol: 605100, close: 0.003, return: 0.0 },
          { date: "2026-02-05", short_ratio: 0.0, short_vol: 0, total_vol: 1736400, close: 0.003, return: 0.0 },
          { date: "2026-02-04", short_ratio: 0.0, short_vol: 0, total_vol: 8290300, close: 0.003, return: -0.25 },
          { date: "2026-02-03", short_ratio: 0.0, short_vol: 0, total_vol: 4048000, close: 0.004, return: 0.0 },
          { date: "2026-02-02", short_ratio: 0.0, short_vol: 0, total_vol: 3151700, close: 0.004, return: 0.0 },
          { date: "2026-01-30", short_ratio: 0.0, short_vol: 0, total_vol: 6320400, close: 0.004, return: 0.0 }
        ]
      },
      peer_comparison: [
        { ticker: "579", avg_short_ratio: 0.00799061359533049, max_short_ratio: 0.25283171521035597, is_target: true },
        { ticker: "AAJ", avg_short_ratio: 0.0002085190342623162, max_short_ratio: 0.02969848611967005, is_target: false },
        { ticker: "BNE", avg_short_ratio: 0.005275447548214131, max_short_ratio: 1.0, is_target: false },
        { ticker: "MV4", avg_short_ratio: 0.0059019425725740406, max_short_ratio: 1.0, is_target: false }
      ]
    },

    intraday: {
      session_periods: ["1M", "3M", "6M"],
      session: {
        "1M": { opening: 0.14214033663988265, continuous: 0.8166373919475478, closing: 0.03322948619959862, auctions: 0.18336260805245228, other: 0.0 },
        "3M": { opening: 0.0788318525218562, continuous: 0.8935644974167378, closing: 0.007428153270864718, auctions: 0.10643550258326227, other: 0.0 },
        "6M": { opening: 0.09883446060741032, continuous: 0.8492640307841167, closing: 0.02005932081085459, auctions: 0.15073596921588328, other: 0.0 }
      },
      hhi: { "1M": 0.4441615974844764, "3M": 0.4476899854260967, "6M": 0.4704213992841485 },
      profile_buckets: [
        { time: "08:30", avg_share: 0.1757 },
        { time: "09:00", avg_share: 0.2448 },
        { time: "09:30", avg_share: 0.1124 },
        { time: "10:00", avg_share: 0.1064 },
        { time: "10:30", avg_share: 0.0418 },
        { time: "11:00", avg_share: 0.0624 },
        { time: "11:30", avg_share: 0.0489 },
        { time: "12:00", avg_share: 0.0167 },
        { time: "12:30", avg_share: 0.019 },
        { time: "13:00", avg_share: 0.0648 },
        { time: "13:30", avg_share: 0.0172 },
        { time: "14:00", avg_share: 0.0316 },
        { time: "14:30", avg_share: 0.0042 },
        { time: "15:00", avg_share: 0.0063 },
        { time: "15:30", avg_share: 0.0046 },
        { time: "16:00", avg_share: 0.015 },
        { time: "16:30", avg_share: 0.0072 },
        { time: "17:00", avg_share: 0.0208 }
      ],
      peers_hhi_rows: [
        { ticker: "579", auctions_pct: 18.31836239471789, hhi: 0.44902234051906964, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400", you: true } },
        { ticker: "5EV", auctions_pct: 3.3691603064959406, hhi: 0.7363366836503964, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "AAJ", auctions_pct: 5.324785122862674, hhi: 0.6505232152265394, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "K03", auctions_pct: 0.7875759211551328, hhi: 0.7975041904560217, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BAC", auctions_pct: 0.0747169504852541, hhi: 0.8411433273334072, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "BNE", auctions_pct: 5.384330677735809, hhi: 0.7273788475749419, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "MV4", auctions_pct: 3.997629412339566, hhi: 0.7280868266150533, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "RQ1", auctions_pct: 4.1801611873025255, hhi: 0.6963691313788601, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } },
        { ticker: "Y03", auctions_pct: 3.874040471914528, hhi: 0.6323507123548131, interp: { text: "Concentrated", cls: "bg-red-500/20 text-red-400" } }
      ]
    },

    ofi_block: {
      tiles_values: [
        { value: "N/A", note_suffix: " - Data not available in this report." },
        { value: "N/A", note_suffix: " - Correlation between daily OFI and same-day returns." },
        { value: "Limited", note_suffix: " - L2 snapshots insufficient for robust testing." }
      ],
      table_rows: [
        { period: "1M", avg_ofi: "N/A", avg_abs: "N/A", interp: { text: "Unavailable", cls: "bg-slate-500/20 text-slate-300" } },
        { period: "3M", avg_ofi: "N/A", avg_abs: "N/A", interp: { text: "Unavailable", cls: "bg-slate-500/20 text-slate-300" } },
        { period: "6M", avg_ofi: "N/A", avg_abs: "N/A", interp: { text: "Unavailable", cls: "bg-slate-500/20 text-slate-300" } }
      ],
      corr_value: "N/A",
      pie: { net_buy_days: null, net_sell_days: null, balanced_days: null },
      l2_compact_text:
        "Computed L2 order-book imbalance on the last 7 days, but valid snapshots were insufficient for a robust test. Treat L2 OFI as limited in this report.",
      unusual_header: ["Date", "OFI%", "Direction", "Return"],
      unusual_rows: [],
      ofi_series: { rows: [], window_options: [30, 60, 100] }
    },

    index_block: {
      tiles: [
        { title: "Market Cap Rank", value: "N/A", sub: "Rank data not available" },
        { title: "Free Float", value: "N/A", sub: "Float data not available" },
        { title: "Avg Daily Turnover", value: "N/A", sub: "Notional" },
        { title: "Velocity", value: "N/A", sub: "Turnover / float" }
      ],
      table_header: ["Index", "Status", "Notes", "What's Needed"],
      table_rows: [
        { index: "STI", status: "ineligible", notes: "Below size/velocity thresholds", gaps: ["Size/velocity improvements required"] },
        { index: "FTSE All-Share", status: "ineligible", notes: "Insufficient rank/velocity", gaps: ["Improve market-cap rank and velocity"] },
        { index: "iEdge Next 50", status: "ineligible", notes: "Rank below inclusion range", gaps: ["Need material rank improvement"] }
      ],
      insight:
        "Index inclusion is unlikely near term given size/velocity. Focus on tradability (spread/impact) and predictable turnover first.",
      levers_title: "How to Improve Index Eligibility",
      levers: [
        "Tighten spread and improve two-way depth to lift steady turnover",
        "Improve investor visibility and confidence through consistent communications",
        "Broaden the shareholder base over time to stabilize trading"
      ]
    }
  }
};

export default REPORT_DATA;
