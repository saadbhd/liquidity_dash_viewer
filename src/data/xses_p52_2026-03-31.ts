// @ts-nocheck
import type { ReportData } from '@/types/report';

export const PEER_METHODOLOGY = {
  "title": "How We Select Peers",
  "steps": [
    "Peers are selected based on sector and industry similarity.",
    "Market capitalization proximity is used for closer comparison.",
    "Final peer group includes companies with closest ADV to the target."
  ],
  "peers": [
    {
      "ticker": "P52",
      "name": "PanUnited",
      "marketCap": 1155623906.25,
      "sector": "Building Materials",
      "industry": "Basic Materials"
    },
    {
      "ticker": "A7RU",
      "name": "Kep Infra Tr",
      "marketCap": 3072087269.64,
      "sector": "Specialty Chemicals",
      "industry": "Basic Materials"
    },
    {
      "ticker": "BEC",
      "name": "BRC Asia",
      "marketCap": 1297675920.97,
      "sector": "Steel",
      "industry": "Basic Materials"
    },
    {
      "ticker": "KUO",
      "name": "Intl Cement",
      "marketCap": 298206108.148,
      "sector": "Building Materials",
      "industry": "Basic Materials"
    },
    {
      "ticker": "QES",
      "name": "ChinaSunsine",
      "marketCap": 600631164.0,
      "sector": "Specialty Chemicals",
      "industry": "Basic Materials"
    },
    {
      "ticker": "S20",
      "name": "Straits Trading",
      "marketCap": 754898923.59,
      "sector": "Other Industrial Metals & Mining",
      "industry": "Basic Materials"
    },
    {
      "ticker": "5TP",
      "name": "CNMC Goldmine",
      "marketCap": 559298958.0,
      "sector": "Gold",
      "industry": "Basic Materials"
    },
    {
      "ticker": "5F7",
      "name": "Wilton Resources",
      "marketCap": 28863813.836,
      "sector": "Gold",
      "industry": "Basic Materials"
    },
    {
      "ticker": "NC2",
      "name": "Sri Trang Agro",
      "marketCap": 990719998.71,
      "sector": "Specialty Chemicals",
      "industry": "Basic Materials"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "P52",
    "company": "PanUnited",
    "asof_date": "2026-03-31",
    "industry": "Basic Materials",
    "sector": "Building Materials",
    "market_cap_display": "1.2B",
    "market_cap_category": "mid",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "6m",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 91.39784946236558,
          "score_pca_percentile": 91.39784946236558,
          "rank_pca": 49,
          "total": 558,
          "adv_notional_sgd": 3902745.0,
          "adv_volume_shares": 2517900.0,
          "free_float_shares": 200312165.0,
          "turnover_ratio": 0.012569880616087395,
          "votes": 1067.0,
          "trades": 1067.0,
          "spread_pct": 0.009426670251377875,
          "spread_ticks": 1.4743758212877793,
          "amihud": 1.4061397498552363e-08,
          "volatility": 0.8453039203262002
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5111768071008719,
          "loadings": {
            "log_adv": 0.5586640083098889,
            "log_trades": 0.5134794330982279,
            "log_turnover": 0.5206345340744422,
            "neg_spread": 0.36320647438089654,
            "neg_amihud": 0.03833776142064052,
            "neg_vol": -0.14065686101428967
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
          "peer_median_adv": 340179.0,
          "peer_median_score_pca": 77.8673835125448,
          "peer_median_trades": 128.5,
          "peer_median_volatility": 0.2693244366568788,
          "peer_median_spread_pct": 0.010503204850423921,
          "peer_median_spread_ticks": 1.2737962273517,
          "peer_median_amihud": 3.0807901795499948e-09,
          "peer_median_turnover_ratio": 0.0012155344742914682,
          "target_vs_peer": {
            "score_pca_delta": 13.53,
            "adv_delta_pct": 1047.3,
            "trades_delta_pct": 730.35,
            "volatility_delta_pct": -213.86,
            "spread_pct_delta_pct": 10.25,
            "spread_ticks_delta_pct": 15.75,
            "amihud_delta_pct": -356.42,
            "turnover_ratio_delta_pct": 934.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "P52",
            "score_pca": 91.39784946236558,
            "rank_pca": 49,
            "adv": 3902745.0,
            "trades": 1067.0,
            "volatility": 0.8453039203262002,
            "spread_pct": 0.009426670251377875,
            "spread_ticks": 1.4743758212877793,
            "amihud": 1.4061397498552363e-08,
            "turnover_ratio": 0.012569880616087395,
            "is_target": true
          },
          {
            "ticker": "A7RU",
            "score_pca": 90.86021505376344,
            "rank_pca": 52,
            "adv": 6491841.0,
            "trades": 2414.0,
            "volatility": 0.18693958878551895,
            "spread_pct": 0.009811428988903298,
            "spread_ticks": 1.0,
            "amihud": 3.0807901795499948e-09,
            "turnover_ratio": 0.0025620014809395446,
            "is_target": false
          },
          {
            "ticker": "BEC",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 377336.0,
            "trades": 118.0,
            "volatility": 0.2045918334730566,
            "spread_pct": 0.006905428320428252,
            "spread_ticks": 3.219047619047619,
            "amihud": 1.1301313217116639e-08,
            "turnover_ratio": 0.00029924223791744466,
            "is_target": false
          },
          {
            "ticker": "KUO",
            "score_pca": 77.95698924731182,
            "rank_pca": 124,
            "adv": 366730.0,
            "trades": 131.0,
            "volatility": 0.3891811206428322,
            "spread_pct": 0.025128680584417647,
            "spread_ticks": 1.2436708860759493,
            "amihud": 0.0,
            "turnover_ratio": 0.001390345142913275,
            "is_target": false
          },
          {
            "ticker": "QES",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 171171.0,
            "trades": 205.0,
            "volatility": 0.3002961195058443,
            "spread_pct": 0.011194980711944545,
            "spread_ticks": 1.4155555555555555,
            "amihud": 0.0,
            "turnover_ratio": 0.000885872590713068,
            "is_target": false
          },
          {
            "ticker": "S20",
            "score_pca": 77.06093189964157,
            "rank_pca": 129,
            "adv": 313628.0,
            "trades": 126.0,
            "volatility": 0.2383527538079133,
            "spread_pct": 0.008102592220293029,
            "spread_ticks": 1.303921568627451,
            "amihud": 1.9682042120514965e-08,
            "turnover_ratio": 0.0010407238056696613,
            "is_target": false
          },
          {
            "ticker": "5TP",
            "score_pca": 95.16129032258065,
            "rank_pca": 28,
            "adv": 9317007.0,
            "trades": 2025.0,
            "volatility": 0.5154559940369705,
            "spread_pct": 0.007873355468174564,
            "spread_ticks": 1.1553042899900232,
            "amihud": 1.440679264483357e-09,
            "turnover_ratio": 0.028558192985374077,
            "is_target": false
          },
          {
            "ticker": "5F7",
            "score_pca": 20.07168458781362,
            "rank_pca": 447,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.09523809523809515,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "NC2",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 55835.0,
            "trades": 28.0,
            "volatility": 1.1228979462706443,
            "spread_pct": 0.04585204443394001,
            "spread_ticks": 5.938775510204081,
            "amihud": 2.7136232025638286e-07,
            "turnover_ratio": 2.831059257794476,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Building Materials",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2798639707161481,
              "median": 0.10157822315543699,
              "min": 0.0,
              "max": 8.077810374016591,
              "p5": 0.0,
              "p95": 1.0062528773738866,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3457113.453391799,
              "median": 9469.5,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 10840780.999999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.116710446037682,
              "median": 0.035057716973065305,
              "min": 0.00030302922513514774,
              "max": 1.3546483030004917,
              "p5": 0.0037003182267889797,
              "p95": 0.5506878178910859,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008271351812146116,
              "median": 0.00023450572013625616,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.0,
              "p95": 0.01160934633286968,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0022198447606821482,
              "median": 1.1537500198445003e-08,
              "min": 0.0,
              "max": 0.8333333333333331,
              "p5": 0.0,
              "p95": 5.545029682960719e-05,
              "count": 397
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 498.60931899641577,
              "median": 6.0,
              "min": 0.0,
              "max": 14064.0,
              "p5": 0.0,
              "p95": 3069.849999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3197182026825789,
              "median": 0.24155455382122085,
              "min": 0.0,
              "max": 0.8453039203262002,
              "p5": 0.0,
              "p95": 0.7814519872763579,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 715884.1666666666,
              "median": 12915.0,
              "min": 0.0,
              "max": 3902745.0,
              "p5": 0.0,
              "p95": 3018741.25,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07857450375566967,
              "median": 0.03853161968929053,
              "min": 0.009426670251377875,
              "max": 0.2857142857142857,
              "p5": 0.013352172834637818,
              "p95": 0.2328142509370532,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025757384883884067,
              "median": 0.0007471025856648857,
              "min": 0.0,
              "max": 0.012569880616087395,
              "p5": 0.0,
              "p95": 0.009774996747793864,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4970962743281118e-06,
              "median": 1.6575225453195527e-06,
              "min": 0.0,
              "max": 6.673340006673343e-06,
              "p5": 2.1092096247828546e-09,
              "p95": 6.167486559643423e-06,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 202.16666666666666,
              "median": 7.5,
              "min": 0.0,
              "max": 1067.0,
              "p5": 0.0,
              "p95": 833.0,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2136693.5,
              "median": 340179.0,
              "min": 0.0,
              "max": 9317007.0,
              "p5": 19542.250000000004,
              "p95": 8328198.8999999985,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 630.875,
              "median": 128.5,
              "min": 0.0,
              "max": 2414.0,
              "p5": 9.8,
              "p95": 2277.85,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3697144195653475,
              "median": 0.2693244366568788,
              "min": 0.0,
              "max": 1.1228979462706443,
              "p5": 0.06542885607493164,
              "p95": 0.9102932629888582,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.026263325745774564,
              "median": 0.010503204850423921,
              "min": 0.006905428320428252,
              "max": 0.09523809523809515,
              "p5": 0.0072442028221394615,
              "p95": 0.07795297745664083,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.034534428687585,
              "median": 1.2737962273517,
              "min": 1.0,
              "max": 5.938775510204081,
              "p5": 1.0,
              "p95": 4.986870748299318,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.3838163576863974e-08,
              "median": 3.0807901795499948e-09,
              "min": 0.0,
              "max": 2.7136232025638286e-07,
              "p5": 0.0,
              "p95": 1.958582368156223e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.3582244545047504,
              "median": 0.0012155344742914682,
              "min": 0.0,
              "max": 2.831059257794476,
              "p5": 0.00010473478327110564,
              "p95": 1.850183885111289,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.05487804878048774,
            "market": -0.0024114649574837888,
            "sector": 0.0,
            "peers": -0.002132196162046962,
            "vs_market": -0.052466583823003954,
            "vs_sector": -0.05487804878048774,
            "vs_peers": -0.05274585261844078
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.87096774193549,
          "score_pca_percentile": 83.87096774193549,
          "rank_pca": 91,
          "total": 558,
          "adv_notional_sgd": 1411602.0,
          "adv_volume_shares": 990800.0,
          "free_float_shares": 200312165.0,
          "turnover_ratio": 0.004946279722951424,
          "votes": 440.0,
          "trades": 440.0,
          "spread_pct": 0.009576642335766373,
          "spread_ticks": 1.4098765432098765,
          "amihud": 1.4061397498552363e-08,
          "volatility": 0.5810389045461194
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5329228479510596,
          "loadings": {
            "log_adv": 0.5429532782968726,
            "log_trades": 0.4965269533076617,
            "log_turnover": 0.5009689190570722,
            "neg_spread": 0.41987252005811243,
            "neg_amihud": 0.07968080254943524,
            "neg_vol": 0.15827476415906247
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
          "peer_median_adv": 491491.0,
          "peer_median_score_pca": 80.91397849462365,
          "peer_median_trades": 370.5,
          "peer_median_volatility": 0.47138760684557446,
          "peer_median_spread_pct": 0.009432646481637236,
          "peer_median_spread_ticks": 1.1976323467739776,
          "peer_median_amihud": 2.3226538474421968e-08,
          "peer_median_turnover_ratio": 0.0038698340933155705,
          "target_vs_peer": {
            "score_pca_delta": 2.96,
            "adv_delta_pct": 187.2,
            "trades_delta_pct": 18.76,
            "volatility_delta_pct": -23.26,
            "spread_pct_delta_pct": -1.53,
            "spread_ticks_delta_pct": 17.72,
            "amihud_delta_pct": 39.46,
            "turnover_ratio_delta_pct": 27.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "P52",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 1411602.0,
            "trades": 440.0,
            "volatility": 0.5810389045461194,
            "spread_pct": 0.009576642335766373,
            "spread_ticks": 1.4098765432098765,
            "amihud": 1.4061397498552363e-08,
            "turnover_ratio": 0.004946279722951424,
            "is_target": true
          },
          {
            "ticker": "A7RU",
            "score_pca": 88.17204301075269,
            "rank_pca": 67,
            "adv": 4488019.0,
            "trades": 1239.0,
            "volatility": 0.2618384411237611,
            "spread_pct": 0.009756097560975618,
            "spread_ticks": 1.0,
            "amihud": 2.241459641746406e-09,
            "turnover_ratio": 0.0017539981700038301,
            "is_target": false
          },
          {
            "ticker": "BEC",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 392084.00000000006,
            "trades": 121.0,
            "volatility": 0.2604327630251621,
            "spread_pct": 0.006905428320428252,
            "spread_ticks": 3.096045197740113,
            "amihud": 2.1117319039780355e-08,
            "turnover_ratio": 0.00030961201843933634,
            "is_target": false
          },
          {
            "ticker": "KUO",
            "score_pca": 84.94623655913979,
            "rank_pca": 85,
            "adv": 1700203.0,
            "trades": 576.0,
            "volatility": 0.6264692695312409,
            "spread_pct": 0.017890214500699785,
            "spread_ticks": 1.0503597122302157,
            "amihud": 1.5085024136378045e-08,
            "turnover_ratio": 0.0054625441037455145,
            "is_target": false
          },
          {
            "ticker": "QES",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 590898.0,
            "trades": 746.0,
            "volatility": 0.34423217891659924,
            "spread_pct": 0.009109195402298856,
            "spread_ticks": 1.2544529262086515,
            "amihud": 2.5335757909063577e-08,
            "turnover_ratio": 0.0029191083197107463,
            "is_target": false
          },
          {
            "ticker": "S20",
            "score_pca": 77.41935483870968,
            "rank_pca": 127,
            "adv": 233640.0,
            "trades": 165.0,
            "volatility": 0.2102469023608673,
            "spread_pct": 0.007417880028643306,
            "spread_ticks": 1.2081545064377683,
            "amihud": 3.189117608151592e-08,
            "turnover_ratio": 0.0007565014932383164,
            "is_target": false
          },
          {
            "ticker": "5TP",
            "score_pca": 93.54838709677419,
            "rank_pca": 37,
            "adv": 11149488.0,
            "trades": 2326.0,
            "volatility": 0.910938366738522,
            "spread_pct": 0.0070523727630612525,
            "spread_ticks": 1.187110187110187,
            "amihud": 2.7596989896962776e-09,
            "turnover_ratio": 0.03090841678448913,
            "is_target": false
          },
          {
            "ticker": "5F7",
            "score_pca": 61.111111111111114,
            "rank_pca": 218,
            "adv": 105941.0,
            "trades": 28.0,
            "volatility": 1.5329975196093264,
            "spread_pct": 0.09523809523809516,
            "spread_ticks": 1.0064516129032257,
            "amihud": 2.739117530532356e-07,
            "turnover_ratio": 0.004820559866920394,
            "is_target": false
          },
          {
            "ticker": "NC2",
            "score_pca": 76.88172043010752,
            "rank_pca": 130,
            "adv": 62811.0,
            "trades": 21.0,
            "volatility": 0.5985430347745497,
            "spread_pct": 0.021554169030062412,
            "spread_ticks": 2.533333333333333,
            "amihud": 3.0598584815452176e-07,
            "turnover_ratio": 3.285874365565882,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Building Materials",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6387603156631075,
              "median": 0.4106526996582804,
              "min": 0.0,
              "max": 10.408727571384148,
              "p5": 0.0,
              "p95": 1.883390087539288,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3639156.49834667,
              "median": 8463.2,
              "min": 0.0,
              "max": 334670700.0,
              "p5": 0.0,
              "p95": 14720399.549999963,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10952581843079258,
              "median": 0.03564177757726132,
              "min": 0.00028762032467161244,
              "max": 1.3716475095785439,
              "p5": 0.0037811797695343047,
              "p95": 0.5110230680934571,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00837220715774432,
              "median": 0.00022431504081324395,
              "min": 0.0,
              "max": 3.285874365565882,
              "p5": 0.0,
              "p95": 0.010089903237664306,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0051292504034659335,
              "median": 1.5177950081240075e-07,
              "min": 0.0,
              "max": 2.5,
              "p5": 0.0,
              "p95": 6.414741663117114e-05,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 514.3637992831541,
              "median": 6.0,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3077.6499999999933,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44841809864375487,
              "median": 0.4640912223100159,
              "min": 0.0,
              "max": 0.929588903364412,
              "p5": 0.05156699358671104,
              "p95": 0.8538089949061193,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 520195.4166666667,
              "median": 4683.75,
              "min": 0.0,
              "max": 1700203.0,
              "p5": 0.0,
              "p95": 1628052.75,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09076998952769531,
              "median": 0.050298836560046495,
              "min": 0.009576642335766373,
              "max": 0.2857142857142857,
              "p5": 0.011655035376999726,
              "p95": 0.24699599465954603,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001771601909177397,
              "median": 0.0001103938141837226,
              "min": 0.0,
              "max": 0.0054625441037455145,
              "p5": 0.0,
              "p95": 0.005333478008546992,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.631354581692294e-06,
              "median": 5.647650426865472e-07,
              "min": 1.4061397498552363e-08,
              "max": 6.673340006673343e-06,
              "p5": 1.42661228261175e-08,
              "p95": 5.516576292832004e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 170.0,
              "median": 2.0,
              "min": 0.0,
              "max": 576.0,
              "p5": 0.0,
              "p95": 542.0,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2340385.5,
              "median": 491491.0,
              "min": 62811.0,
              "max": 11149488.0,
              "p5": 77906.5,
              "p95": 8817973.849999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 652.75,
              "median": 370.5,
              "min": 21.0,
              "max": 2326.0,
              "p5": 23.45,
              "p95": 1945.5499999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5932123095100036,
              "median": 0.47138760684557446,
              "min": 0.2102469023608673,
              "max": 1.5329975196093264,
              "p5": 0.22781195359337048,
              "p95": 1.3152768161045445,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02186543160553308,
              "median": 0.009432646481637236,
              "min": 0.006905428320428252,
              "max": 0.09523809523809516,
              "p5": 0.006956858875349803,
              "p95": 0.06944872106528366,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.5419884344954369,
              "median": 1.1976323467739776,
              "min": 1.0,
              "max": 3.096045197740113,
              "p5": 1.002258064516129,
              "p95": 2.89909604519774,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.479100462574224e-08,
              "median": 2.3226538474421968e-08,
              "min": 2.241459641746406e-09,
              "max": 3.0598584815452176e-07,
              "p5": 2.4228434135288612e-09,
              "p95": 2.947599148690716e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.4166006382903037,
              "median": 0.0038698340933155705,
              "min": 0.00030961201843933634,
              "max": 3.285874365565882,
              "p5": 0.0004660233346189794,
              "p95": 2.146636283492393,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.11510791366906514,
            "market": -0.0011060770743737125,
            "sector": -0.03661486549870996,
            "peers": -0.0589579319548551,
            "vs_market": 0.11621399074343886,
            "vs_sector": 0.1517227791677751,
            "vs_peers": 0.17406584562392025
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 81.72043010752688,
          "score_pca_percentile": 81.72043010752688,
          "rank_pca": 103,
          "total": 558,
          "adv_notional_sgd": 422212.0,
          "adv_volume_shares": 354800.0,
          "free_float_shares": 200312165.0,
          "turnover_ratio": 0.0017712354114888629,
          "votes": 259.0,
          "trades": 259.0,
          "spread_pct": 0.009576642335766373,
          "spread_ticks": 1.2099276111685626,
          "amihud": 2.255260281844384e-08,
          "volatility": 0.3994387042530152
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5486707886091272,
          "loadings": {
            "log_adv": 0.5270558684600999,
            "log_trades": 0.4751879445768462,
            "log_turnover": 0.4818995094748979,
            "neg_spread": 0.424874015012729,
            "neg_amihud": 0.10930241610877456,
            "neg_vol": 0.26779926216889144
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
          "peer_median_adv": 525930.0,
          "peer_median_score_pca": 81.63082437275986,
          "peer_median_trades": 324.0,
          "peer_median_volatility": 0.37947461680415295,
          "peer_median_spread_pct": 0.008895387147245469,
          "peer_median_spread_ticks": 1.111773616182113,
          "peer_median_amihud": 1.8244155657834173e-08,
          "peer_median_turnover_ratio": 0.004031263302317253,
          "target_vs_peer": {
            "score_pca_delta": 0.09,
            "adv_delta_pct": -19.7,
            "trades_delta_pct": -20.06,
            "volatility_delta_pct": -5.26,
            "spread_pct_delta_pct": -7.66,
            "spread_ticks_delta_pct": 8.83,
            "amihud_delta_pct": -23.62,
            "turnover_ratio_delta_pct": -56.06
          }
        },
        "peer_liquidity": [
          {
            "ticker": "P52",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 422212.0,
            "trades": 259.0,
            "volatility": 0.3994387042530152,
            "spread_pct": 0.009576642335766373,
            "spread_ticks": 1.2099276111685626,
            "amihud": 2.255260281844384e-08,
            "turnover_ratio": 0.0017712354114888629,
            "is_target": true
          },
          {
            "ticker": "A7RU",
            "score_pca": 90.68100358422939,
            "rank_pca": 53,
            "adv": 5198823.0,
            "trades": 1125.0,
            "volatility": 0.23964226674642367,
            "spread_pct": 0.0096627075884213,
            "spread_ticks": 1.0,
            "amihud": 1.7301226340335026e-09,
            "turnover_ratio": 0.0019761613421574835,
            "is_target": false
          },
          {
            "ticker": "BEC",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 369728.0,
            "trades": 112.0,
            "volatility": 0.20790420607863966,
            "spread_pct": 0.004329112034433862,
            "spread_ticks": 1.8802395209580838,
            "amihud": 1.3504296526982832e-08,
            "turnover_ratio": 0.00029924223791744466,
            "is_target": false
          },
          {
            "ticker": "KUO",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 1584726.0,
            "trades": 482.0,
            "volatility": 0.7279259381714659,
            "spread_pct": 0.019182584799418076,
            "spread_ticks": 1.0505464480874316,
            "amihud": 1.8059751810375212e-08,
            "turnover_ratio": 0.0050279972701602615,
            "is_target": false
          },
          {
            "ticker": "QES",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 682132.0,
            "trades": 509.0,
            "volatility": 0.32670948858985305,
            "spread_pct": 0.0073299521769419574,
            "spread_ticks": 1.1137206427688504,
            "amihud": 1.8428559505293135e-08,
            "turnover_ratio": 0.003034529334474245,
            "is_target": false
          },
          {
            "ticker": "S20",
            "score_pca": 78.85304659498208,
            "rank_pca": 119,
            "adv": 313628.0,
            "trades": 166.0,
            "volatility": 0.2743620253893926,
            "spread_pct": 0.006522378351406506,
            "spread_ticks": 1.1098265895953756,
            "amihud": 2.6257718456340475e-08,
            "turnover_ratio": 0.0009263937777367519,
            "is_target": false
          },
          {
            "ticker": "5TP",
            "score_pca": 93.54838709677419,
            "rank_pca": 37,
            "adv": 10316010.0,
            "trades": 2027.0,
            "volatility": 0.8507710865836,
            "spread_pct": 0.008128066706069637,
            "spread_ticks": 1.1207332490518331,
            "amihud": 3.294517859274517e-09,
            "turnover_ratio": 0.031997017378557764,
            "is_target": false
          },
          {
            "ticker": "5F7",
            "score_pca": 55.91397849462365,
            "rank_pca": 247,
            "adv": 105941.0,
            "trades": 51.0,
            "volatility": 1.7216706805896498,
            "spread_pct": 0.10303687635574843,
            "spread_ticks": 1.0052910052910053,
            "amihud": 2.4214384519645393e-07,
            "turnover_ratio": 0.006540314995853193,
            "is_target": false
          },
          {
            "ticker": "NC2",
            "score_pca": 70.96774193548387,
            "rank_pca": 163,
            "adv": 28297.5,
            "trades": 11.0,
            "volatility": 0.4322397450184529,
            "spread_pct": 0.0235324374718704,
            "spread_ticks": 2.533333333333333,
            "amihud": 4.1707232361027736e-07,
            "turnover_ratio": 1.7764155296288973,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Building Materials",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6713440294260211,
              "median": 0.44743135312491267,
              "min": 0.0,
              "max": 8.24425508675489,
              "p5": 0.1480083286152434,
              "p95": 1.9253066836598782,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2935260.882324481,
              "median": 13926.5,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12292585.35,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09528083070662549,
              "median": 0.026522744795682267,
              "min": 0.0002723380347285615,
              "max": 1.3542204201990415,
              "p5": 0.003553276347615921,
              "p95": 0.4737678855325904,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0052974817834745775,
              "median": 0.0002986080081124768,
              "min": 0.0,
              "max": 1.7764155296288973,
              "p5": 0.0,
              "p95": 0.00930163659148074,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.528236898646514e-05,
              "median": 1.4083059065758076e-07,
              "min": 0.0,
              "max": 0.007072115384615384,
              "p5": 0.0,
              "p95": 4.725612672458079e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 418.5044802867383,
              "median": 8.0,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2206.8499999999963,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6856758527156467,
              "median": 0.5636823212122406,
              "min": 0.24492353868898445,
              "max": 1.4844112309292736,
              "p5": 0.26437253407689726,
              "p95": 1.3469674691995817,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 336349.8333333333,
              "median": 5580.5,
              "min": 0.0,
              "max": 1584726.0,
              "p5": 0.0,
              "p95": 1294097.5,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08586453909388404,
              "median": 0.03548047701137125,
              "min": 0.009576642335766373,
              "max": 0.2857142857142857,
              "p5": 0.01170603950062046,
              "p95": 0.24699599465954603,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011766469340510164,
              "median": 0.000130324461328487,
              "min": 0.0,
              "max": 0.0050279972701602615,
              "p5": 0.0,
              "p95": 0.004213806805492412,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.7973610489497957e-06,
              "median": 1.2596479578099585e-07,
              "min": 0.0,
              "max": 9.546634328622608e-06,
              "p5": 4.514937952593803e-09,
              "p95": 7.401861401892906e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 124.16666666666667,
              "median": 2.0,
              "min": 0.0,
              "max": 482.0,
              "p5": 0.0,
              "p95": 426.25,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2324910.6875,
              "median": 525930.0,
              "min": 28297.5,
              "max": 10316010.0,
              "p5": 55472.725000000006,
              "p95": 8524994.549999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 560.375,
              "median": 324.0,
              "min": 11.0,
              "max": 2027.0,
              "p5": 25.0,
              "p95": 1711.2999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5976531796459347,
              "median": 0.37947461680415295,
              "min": 0.20790420607863966,
              "max": 1.7216706805896498,
              "p5": 0.21901252731236406,
              "p95": 1.4168558226875319,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02271551443553877,
              "median": 0.008895387147245469,
              "min": 0.004329112034433862,
              "max": 0.10303687635574843,
              "p5": 0.005096755245374287,
              "p95": 0.07521032274639107,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3517113486357393,
              "median": 1.111773616182113,
              "min": 1.0,
              "max": 2.533333333333333,
              "p5": 1.0018518518518518,
              "p95": 2.3047504990019956,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.256139194987887e-08,
              "median": 1.8244155657834173e-08,
              "min": 1.7301226340335026e-09,
              "max": 4.1707232361027736e-07,
              "p5": 2.277660962867858e-09,
              "p95": 3.558473561654391e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.22827714824571932,
              "median": 0.004031263302317253,
              "min": 0.00029924223791744466,
              "max": 1.7764155296288973,
              "p5": 0.0005187452768542023,
              "p95": 1.1658690503412776,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.3478260869565206,
            "market": 0.054343896194767316,
            "sector": 0.02941586412883601,
            "peers": 0.03435556511668203,
            "vs_market": 0.2934821907617533,
            "vs_sector": 0.3184102228276846,
            "vs_peers": 0.3134705218398386
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 81.54121863799283,
          "score_pca_percentile": 81.54121863799283,
          "rank_pca": 104,
          "total": 558,
          "adv_notional_sgd": 332456.0,
          "adv_volume_shares": 295700.0,
          "free_float_shares": 200312165.0,
          "turnover_ratio": 0.0014761959165086153,
          "votes": 205.0,
          "trades": 205.0,
          "spread_pct": 0.010030999166565408,
          "spread_ticks": 1.1961186679174483,
          "amihud": 2.9635364097178995e-08,
          "volatility": 0.34941394099920303
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.572081801301022,
          "loadings": {
            "log_adv": 0.5081086531591842,
            "log_trades": 0.45340345720254227,
            "log_turnover": 0.4618838991691354,
            "neg_spread": 0.4319414239573847,
            "neg_amihud": 0.2080333155972238,
            "neg_vol": 0.3050621430809654
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
          "peer_median_adv": 476476.25,
          "peer_median_score_pca": 79.65949820788529,
          "peer_median_trades": 171.75,
          "peer_median_volatility": 0.3423866476940497,
          "peer_median_spread_pct": 0.009557613613055016,
          "peer_median_spread_ticks": 1.1099961485945684,
          "peer_median_amihud": 1.9409156494107606e-08,
          "peer_median_turnover_ratio": 0.0028902114838326347,
          "target_vs_peer": {
            "score_pca_delta": 1.88,
            "adv_delta_pct": -30.2,
            "trades_delta_pct": 19.36,
            "volatility_delta_pct": -2.05,
            "spread_pct_delta_pct": -4.95,
            "spread_ticks_delta_pct": 7.76,
            "amihud_delta_pct": -52.69,
            "turnover_ratio_delta_pct": -48.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "P52",
            "score_pca": 81.54121863799283,
            "rank_pca": 104,
            "adv": 332456.0,
            "trades": 205.0,
            "volatility": 0.34941394099920303,
            "spread_pct": 0.010030999166565408,
            "spread_ticks": 1.1961186679174483,
            "amihud": 2.9635364097178995e-08,
            "turnover_ratio": 0.0014761959165086153,
            "is_target": true
          },
          {
            "ticker": "A7RU",
            "score_pca": 89.96415770609319,
            "rank_pca": 57,
            "adv": 3576672.75,
            "trades": 883.5,
            "volatility": 0.19820439311835716,
            "spread_pct": 0.010256410256410265,
            "spread_ticks": 1.0,
            "amihud": 1.6778269582687299e-09,
            "turnover_ratio": 0.0015106813926741042,
            "is_target": false
          },
          {
            "ticker": "BEC",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 307992.5,
            "trades": 99.0,
            "volatility": 0.18766387765317913,
            "spread_pct": 0.004612387654130685,
            "spread_ticks": 2.0156377066955815,
            "amihud": 1.967940253771506e-08,
            "turnover_ratio": 0.0002714660400909492,
            "is_target": false
          },
          {
            "ticker": "KUO",
            "score_pca": 81.18279569892472,
            "rank_pca": 106,
            "adv": 721033.2,
            "trades": 228.5,
            "volatility": 0.6409876118221105,
            "spread_pct": 0.02298348020480762,
            "spread_ticks": 1.0442616529573052,
            "amihud": 1.9138910450500152e-08,
            "turnover_ratio": 0.0030473250686397658,
            "is_target": false
          },
          {
            "ticker": "QES",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 644960.0,
            "trades": 412.0,
            "volatility": 0.30950423551840806,
            "spread_pct": 0.007263248118645273,
            "spread_ticks": 1.104563554911987,
            "amihud": 1.838613687516839e-08,
            "turnover_ratio": 0.0027330978990255032,
            "is_target": false
          },
          {
            "ticker": "S20",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 199800.0,
            "trades": 115.0,
            "volatility": 0.22002935447600994,
            "spread_pct": 0.006810183703978618,
            "spread_ticks": 1.1286872520269107,
            "amihud": 3.3812697075916386e-08,
            "turnover_ratio": 0.0006515208834774908,
            "is_target": false
          },
          {
            "ticker": "5TP",
            "score_pca": 93.54838709677419,
            "rank_pca": 37,
            "adv": 8119696.25,
            "trades": 1745.5,
            "volatility": 0.7539070833519456,
            "spread_pct": 0.008858816969699769,
            "spread_ticks": 1.11542874227715,
            "amihud": 3.704942294214616e-09,
            "turnover_ratio": 0.028669936754963904,
            "is_target": false
          },
          {
            "ticker": "5F7",
            "score_pca": 53.584229390681,
            "rank_pca": 260,
            "adv": 74656.05,
            "trades": 32.5,
            "volatility": 1.4379767391352778,
            "spread_pct": 0.08872327693039872,
            "spread_ticks": 1.0,
            "amihud": 1.986887812048677e-07,
            "turnover_ratio": 0.003229940284209739,
            "is_target": false
          },
          {
            "ticker": "NC2",
            "score_pca": 67.02508960573476,
            "rank_pca": 185,
            "adv": 14061.75,
            "trades": 6.0,
            "volatility": 0.37526905986969133,
            "spread_pct": 0.025148992204012496,
            "spread_ticks": 2.60327868852459,
            "amihud": 5.936913173238538e-07,
            "turnover_ratio": 0.8816162415134138,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Building Materials",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6896945769447083,
              "median": 0.4369861367271677,
              "min": 0.0,
              "max": 6.587260432076449,
              "p5": 0.15223538001764644,
              "p95": 2.109255800676964,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2499841.4168989942,
              "median": 10851.9,
              "min": 0.0,
              "max": 239003387.5,
              "p5": 0.0,
              "p95": 10413137.6625,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09239591246660694,
              "median": 0.02875899768677068,
              "min": 0.00027866261388545424,
              "max": 1.267605633802817,
              "p5": 0.0035892244580833293,
              "p95": 0.4617204885872369,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0031809162541457806,
              "median": 0.000281634890421791,
              "min": 0.0,
              "max": 0.8816162415134138,
              "p5": 0.0,
              "p95": 0.007034169028560881,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.288260393715334e-05,
              "median": 1.9502529478073237e-07,
              "min": 0.0,
              "max": 0.0012875000252631538,
              "p5": 0.0,
              "p95": 4.798772032449556e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 362.67293906810033,
              "median": 6.75,
              "min": 0.0,
              "max": 10150.0,
              "p5": 0.0,
              "p95": 2011.9749999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7378457019781384,
              "median": 0.49520077641065674,
              "min": 0.2019712009482271,
              "max": 1.765865227020454,
              "p5": 0.23266840589826868,
              "p95": 1.6104179728479509,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 177768.57499999998,
              "median": 6533.0,
              "min": 0.0,
              "max": 721033.2,
              "p5": 14.0625,
              "p95": 623888.8999999999,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08477136211586334,
              "median": 0.03252840323123283,
              "min": 0.010030999166565408,
              "max": 0.2857142857142857,
              "p5": 0.0120534141136963,
              "p95": 0.24671206988490785,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008076268240848919,
              "median": 0.0001587061648427152,
              "min": 0.0,
              "max": 0.0030473250686397658,
              "p5": 1.2069074188850076e-06,
              "p95": 0.002654542780606978,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.976059816301688e-06,
              "median": 5.383011831731333e-07,
              "min": 1.9138910450500152e-08,
              "max": 1.9875183845450564e-05,
              "p5": 2.176302386216986e-08,
              "p95": 1.862033748695433e-05,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 73.16666666666667,
              "median": 2.25,
              "min": 0.0,
              "max": 228.5,
              "p5": 0.25,
              "p95": 222.625,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1707359.0625,
              "median": 476476.25,
              "min": 14061.75,
              "max": 8119696.25,
              "p5": 35269.755000000005,
              "p95": 6529638.024999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 440.25,
              "median": 171.75,
              "min": 6.0,
              "max": 1745.5,
              "p5": 15.275,
              "p95": 1443.7999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5154427943681223,
              "median": 0.3423866476940497,
              "min": 0.18766387765317913,
              "max": 1.4379767391352778,
              "p5": 0.19135305806599145,
              "p95": 1.1985523596111112,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02183209950526043,
              "median": 0.009557613613055016,
              "min": 0.004612387654130685,
              "max": 0.08872327693039872,
              "p5": 0.0053816162715774616,
              "p95": 0.0664722772761635,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3764821996741907,
              "median": 1.1099961485945684,
              "min": 1.0,
              "max": 2.60327868852459,
              "p5": 1.0,
              "p95": 2.397604344884437,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.110975018400631e-07,
              "median": 1.9409156494107606e-08,
              "min": 1.6778269582687299e-09,
              "max": 5.936913173238538e-07,
              "p5": 2.38731732584979e-09,
              "p95": 4.5544042968220846e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.1152162762295619,
              "median": 0.0028902114838326347,
              "min": 0.0002714660400909492,
              "max": 0.8816162415134138,
              "p5": 0.00040448523527623876,
              "p95": 0.5830850348479559,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.35964912280701644,
            "market": 0.14413889939975522,
            "sector": -0.014864501753526493,
            "peers": -0.06220637328959322,
            "vs_market": 0.21551022340726123,
            "vs_sector": 0.37451362456054293,
            "vs_peers": 0.42185549609660966
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks firm, with a 1 tick spread and bid depth close to ask depth. That supports orderly access on the day.",
        "market_comparison": "The stock fell 5.5% on the day compared with a 0.2% drop for peers. That matters because price pressure was weaker than the peer group even as displayed trading conditions stayed orderly."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average for its size. The 1M liquidity score of 83.9 is 3.0 points above the peer median, but average daily volume remains below the peer median, so access is solid rather than deep.",
        "market_comparison": "The stock returned 11.5% over the month compared with a 5.9% fall for peers and a 0.1% fall for the market. That matters because stronger price performance gives the tape a firmer backdrop than the main comparison groups."
      },
      "3m": {
        "liquidity": "3M score 81.7 vs peer median 81.6 (+0.1 pts).",
        "market_comparison": "The stock rose 34.8% over three months compared with 3.4% for peers. That matters because trading has been supported by much stronger price momentum than the peer set."
      },
      "6m": {
        "liquidity": "6M score 81.5 vs peer median 79.7 (+1.9 pts).",
        "market_comparison": "The stock rose 36.0% over six months compared with a 6.2% fall for peers. That matters because the shares have traded against a much stronger return backdrop than the peer group."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.5326937352778056,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "53.3%",
          "display_range": null,
          "display_text": "53.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 53.3,
          "plain_english": "Market explains about 53.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.19421641528002506,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.4%",
          "display_range": null,
          "display_text": "19.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.4,
          "plain_english": "Sector explains about 19.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2730898494421694,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "27.3%",
          "display_range": null,
          "display_text": "27.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 27.3,
          "plain_english": "Company-specific explains about 27.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 8.804829225416523,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.80",
          "display_range": null,
          "display_text": "8.80",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 8.80% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 8.8
        },
        "beta_stock_lag": {
          "median": 0.6689014046895192,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.67",
          "display_range": null,
          "display_text": "0.67",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.67
        },
        "beta_sector": {
          "median": -0.069173497321871,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.07",
          "display_range": null,
          "display_text": "-0.07",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.07% stock move in the opposite direction in this state.",
          "value_num": -0.07
        },
        "beta_market_lag": {
          "median": -1.765632222762695,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.77",
          "display_range": null,
          "display_text": "-1.77",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.77
        },
        "beta_sector_lag": {
          "median": 1.6008829587916382,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.60",
          "display_range": null,
          "display_text": "1.60",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.6
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-03 to 2025-04-30",
          "n_obs": 19,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5477848194154297,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2438378939058182,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.4%",
              "display_range": null,
              "display_text": "24.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.4,
              "plain_english": "Market explains about 24.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20837728667875197,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5477848194154297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6229198120729915,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26898844993849813,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1080917379885103,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.8%",
              "display_range": null,
              "display_text": "10.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 10.8,
              "plain_english": "Sector explains about 10.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6229198120729915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6690854196016123,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.9%",
            "display_range": null,
            "display_text": "66.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 66.9,
            "plain_english": "Company-specific explains about 66.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25464386887984825,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.5%",
              "display_range": null,
              "display_text": "25.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.5,
              "plain_english": "Market explains about 25.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0762707115185395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.6%",
              "display_range": null,
              "display_text": "7.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 7.6,
              "plain_english": "Sector explains about 7.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6690854196016123,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.9%",
              "display_range": null,
              "display_text": "66.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.9,
              "plain_english": "Company-specific explains about 66.9% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4479676352150542,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.8%",
            "display_range": null,
            "display_text": "44.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 44.8,
            "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32225109040116906,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.2%",
              "display_range": null,
              "display_text": "32.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 32.2,
              "plain_english": "Market explains about 32.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22978127438377668,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.0%",
              "display_range": null,
              "display_text": "23.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 23.0,
              "plain_english": "Sector explains about 23.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4479676352150542,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5244361029857159,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.4%",
            "display_range": null,
            "display_text": "52.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.4,
            "plain_english": "Company-specific explains about 52.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31555445145911165,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.6%",
              "display_range": null,
              "display_text": "31.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.6,
              "plain_english": "Market explains about 31.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1600094455551724,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.0%",
              "display_range": null,
              "display_text": "16.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.0,
              "plain_english": "Sector explains about 16.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5244361029857159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.4%",
              "display_range": null,
              "display_text": "52.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.4,
              "plain_english": "Company-specific explains about 52.4% of price moves in the current state."
            }
          },
          "summary": "Aug: Mostly company-driven."
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6571106733751566,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.7%",
            "display_range": null,
            "display_text": "65.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 65.7,
            "plain_english": "Company-specific explains about 65.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2964875572054656,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.6%",
              "display_range": null,
              "display_text": "29.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.6,
              "plain_english": "Market explains about 29.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04640176941937768,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6571106733751566,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.7%",
              "display_range": null,
              "display_text": "65.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 65.7,
              "plain_english": "Company-specific explains about 65.7% of price moves in the current state."
            }
          },
          "summary": "Sep: Still clearly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6131886471416146,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.3%",
            "display_range": null,
            "display_text": "61.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 61.3,
            "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2685321804300703,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11827917242831507,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Sector explains about 11.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6131886471416146,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            }
          },
          "summary": "Oct: Still clearly company-driven."
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6316929765628295,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.2%",
            "display_range": null,
            "display_text": "63.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 63.2,
            "plain_english": "Company-specific explains about 63.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34487429796225977,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Market explains about 34.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.02343272547491077,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.3%",
              "display_range": null,
              "display_text": "2.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 2.3,
              "plain_english": "Sector explains about 2.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6316929765628295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.2%",
              "display_range": null,
              "display_text": "63.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 63.2,
              "plain_english": "Company-specific explains about 63.2% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4844512237083973,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.4%",
            "display_range": null,
            "display_text": "48.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.4,
            "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.38548752905623673,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Market explains about 38.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.130061247235366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4844512237083973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly company-driven."
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6132960646937203,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.3%",
            "display_range": null,
            "display_text": "61.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 61.3,
            "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3059955472709048,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08070838803537492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.1%",
              "display_range": null,
              "display_text": "8.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.1,
              "plain_english": "Sector explains about 8.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6132960646937203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46567123360084756,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.6%",
            "display_range": null,
            "display_text": "46.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 46.6,
            "plain_english": "Company-specific explains about 46.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34848262268422575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.8%",
              "display_range": null,
              "display_text": "34.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 34.8,
              "plain_english": "Market explains about 34.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18584614371492672,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46567123360084756,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Company-specific explains about 46.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly company-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5154355314662685,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.5%",
            "display_range": null,
            "display_text": "51.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.5,
            "plain_english": "Company-specific explains about 51.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.38550587709786,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Market explains about 38.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09905859143587137,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.9%",
              "display_range": null,
              "display_text": "9.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 9.9,
              "plain_english": "Sector explains about 9.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5154355314662685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.5%",
              "display_range": null,
              "display_text": "51.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.5,
              "plain_english": "Company-specific explains about 51.5% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 13.88888888888889,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.014859781401980925,
            "low": 0.014859781401980925,
            "high": 0.014859781401980925
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.029029382850194407,
            "low": 0.029029382850194407,
            "high": 0.029029382850194407
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.928,
            0.072
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            116.0,
            9.0
          ],
          [
            9.0,
            114.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "8.80",
        "sector_link_display": "-0.07",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 8.80% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.07% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.67",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 53.3,
        "driver_share_display": "53.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.926829268292683,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 12.4 days.",
        "expected_duration_days": 12.4
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "ols_with_volatility_regimes",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 13.88888888888889,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.014859781401980925,
            "low": 0.014859781401980925,
            "high": 0.014859781401980925
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 12.4,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.029029382850194407,
            "low": 0.029029382850194407,
            "high": 0.029029382850194407
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.928,
          0.072
        ],
        [
          0.07317073170731707,
          0.926829268292683
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.928,
            0.072
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            116.0,
            9.0
          ],
          [
            9.0,
            114.0
          ]
        ]
      },
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 81.5 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "drivers": {
        "text": "Drivers: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Execution: balanced",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low short interest",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "header_health": {
        "text": "Liquidity Health: STRONG",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400",
        "dot": "bg-emerald-500"
      },
      "ofi": {
        "text": "Order Flow: N/A",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      },
      "index_status": {
        "text": "Index: N/A",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      }
    },
    "borders": {
      "action_plan": "border-slate-700",
      "index": "border-slate-700"
    },
    "colors": {
      "interpretation_good": "interpretation-good",
      "interpretation_neutral": "interpretation-neutral",
      "interpretation_bad": "interpretation-bad"
    }
  },
  "labels": {
    "action_plan_title": "Action Plan (Prioritized)",
    "action_plan_subtitle": "Observational summary only; no execution instructions.",
    "action_plan_icon": "",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "Liquidity is around average for its size, with a small six-month edge to peers and orderly displayed depth.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have materially outpaced both peers and the market over the past month, giving the stock a firmer trading backdrop.",
    "perf_insight": "The stock has risen 11.5% over 1M, compared with peers down 5.9% and the market down 0.1%. That outperformance sits alongside a 6M liquidity score of 81.5 against a peer median of 79.7 and a 1-tick spread, which keeps access credible as the tape strengthens.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves remain the main influence on trading, with 53.3% of the tape explained by market factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 53.3% of price changes. Other influences are sector 19.4%, and company-specific 27.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 53.3%, sector 19.4%, and company-specific 27.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 53.3%, sector 19.4%, and company-specific 27.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because current trading conditions are being shaped more by the wider market than by company-specific news, even as the spread stays at 1 tick and top-10 bid depth is 0.94x of ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 53.3% of recent price moves.",
      "The monthly pattern had been mostly market from January through March, so the current mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock is trading with a firm return backdrop relative to peers and the market.",
    "regime_badge_text": "High Volatility",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Low Volatility",
      "High Volatility"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 1, 2025 to Mar 31, 2026 (253 trading days • 62,829 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book looks balanced, with top-10 bid depth at 0.94x of ask depth and a 1-tick spread. That supports a steady near-term execution picture.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 27.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks orderly through the book, with bid and ask depth closely matched.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Shows the share of volume in the opening, continuous, and closing sessions.",
    "hhi_title": "Trading Concentration (concentration score)",
    "hhi_note_template": "Current concentration score: {value}.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak buckets show where activity clusters through the day.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "concentration score",
      "Interpretation"
    ],
    "peers_hhi_note": "Peer comparison uses auction share and concentration score.",
    "intraday_insight": "Session split is open 1.0%, continuous 94.5%, and close 3.5%. Current trading concentration score is 0.213.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Price strength is the clearer near-term feature than any sign of execution strain.",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "header_title": "Liquidity Analysis Report",
    "header_meta_line1_tokens": [
      "{company}",
      "•",
      "{ticker}",
      "•",
      "Sector: {sector}",
      "•",
      "Market Cap: {mcap} ({mcap_cat} cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: {asof}",
      "•",
      "Universe: {univ}",
      "•",
      "Peers: {peers}"
    ],
    "exec_title": "Executive Summary",
    "exec_subtitle": "Trading access is broadly in line with peers, with stronger recent returns and a balanced near-term book.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 6 months of trading data, except for price driver mix which uses the last 5 trading days.",
    "ofi_title": "Order Flow Balance",
    "ofi_subtitle": "Order flow imbalance data is not yet available for this report.",
    "ofi_tiles": [
      {
        "title": "Order Flow Imbalance",
        "note": "Data not available"
      },
      {
        "title": "OFI vs Daily Prices",
        "note": "Data not available"
      },
      {
        "title": "Short-Term Order Book Signal",
        "note": "Data not available"
      }
    ],
    "ofi_table_title": "Order Flow Summary",
    "ofi_table_note": "Data not available for this report.",
    "ofi_table_cols": [
      "Period",
      "Avg OFI",
      "Avg |OFI|",
      "Interpretation"
    ],
    "ofi_corr_note_template": "N/A",
    "ofi_pie_title": "Day Classification",
    "ofi_pie_stats": [
      "Net Buying Days",
      "Net Selling Days"
    ],
    "l2_compact_title": "Order Book Imbalance Analysis (Last 7 Days)",
    "ofi_unusual_title": "Unusual Imbalance Days",
    "ofi_unusual_cols": [
      "Date",
      "Direction",
      "Return"
    ],
    "ofi_unusual_note": "No unusual imbalance days detected.",
    "index_title": "Index Visibility & Eligibility",
    "index_subtitle": "Index eligibility data is not yet available for this report."
  },
  "content": {
    "action_plan": {
      "borderClass": "border-slate-700",
      "columns": []
    },
    "liq_tiles": [
      {
        "title": "Liquidity Score",
        "value": "81.5/100",
        "sub": "Peer median 79.7 (+1.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$332.5K",
        "sub": "Peer median S$476.5K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "1.00%",
        "sub": "1.20 ticks; peers 0.96%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks balanced rather than standout. The 6M liquidity score is 81.5, modestly above the peer median of 79.7, while the displayed book remains orderly with a 1-tick spread and top-10 bid depth at 0.94x of ask depth. That keeps trading access credible for the stock’s size without pointing to a clear liquidity premium.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "1.545",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.65%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.94x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.69% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-2.79% with 51.3% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.79% with 20.5% fill.",
        "cls": "warn"
      }
    ],
    "peers_hhi_header": [
      "Ticker",
      "% Auctions",
      "concentration score",
      "Interpretation"
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Liquidity Score",
          "body": "Overall liquidity read for the selected window."
        },
        "value": "82",
        "suffix": "/100",
        "bar_pct": 82,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 104/558",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "1.00",
        "suffix": "%",
        "bar_pct": 10,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "1.00% • 1.20 ticks vs peers 0.96%",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "332.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$476.5K",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "What Drives Price Changes",
          "body": "Shows whether market, sector, or company-specific factors are the main source of recent moves."
        },
        "value": "53.3",
        "suffix": "market",
        "bar_pct": 53,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 19.4% • Company 27.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is broadly in line with peers for the company’s size, with a 6M score of 81.5 compared with a peer median of 79.7. That points to credible access, but not a clearly superior liquidity position.",
      "The strongest recent signal is price performance, with the stock up 11.5% over 1M while peers are down 5.9% and the market is down 0.1%. That gives trading a firmer backdrop than the main comparison groups.",
      "Near-term execution looks balanced, with a 1-tick spread and top-10 bid depth at 0.94x of ask depth, while market factors account for 53.3% of trading. That means current conditions remain orderly but are still being shaped mainly by broader market moves."
    ],
    "ofi_tiles_interpretations": [
      {
        "cls": "interpretation-neutral",
        "text": "N/A"
      },
      {
        "cls": "interpretation-neutral",
        "text": "N/A"
      },
      {
        "cls": "interpretation-neutral",
        "text": "N/A"
      }
    ]
  },
  "insights": {
    "liquidity": {
      "overall": "6M liquidity is strong: score 81.5 vs peer median 79.7 (+1.9 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 81.5 vs peer median 79.7 (+1.9 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +1.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 36.0%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 36.0% vs market 14.4%.",
        "vs_sector": "Better than sector: 36.0% vs sector -1.5%.",
        "vs_peers": "Better than peers: 36.0% vs peers -6.2%."
      },
      "adv": {
        "insight": "ADV is S$332.5K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$332.5K vs market S$10.9K.",
        "vs_sector": "Better than sector: S$332.5K vs sector S$6.5K.",
        "vs_peers": "Worse than peers: S$332.5K vs peers S$476.5K."
      },
      "spread": {
        "insight": "Spread is 1.00%, better than market and sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 1.00% vs market 2.88%.",
        "vs_sector": "Better than sector: 1.00% vs sector 3.25%.",
        "vs_peers": "In line with peers: 1.00% vs peers 0.96%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.15%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.15% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.15% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.15% vs peers 0.29%."
      },
      "volatility": {
        "insight": "Volatility is 34.94%, better than market and sector, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 34.94% vs market 43.70%.",
        "vs_sector": "Better than sector: 34.94% vs sector 49.52%.",
        "vs_peers": "In line with peers: 34.94% vs peers 34.24%."
      },
      "trades": {
        "insight": "Trades is 205, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 205 vs market 7.",
        "vs_sector": "Better than sector: 205 vs sector 2.",
        "vs_peers": "Better than peers: 205 vs peers 172."
      },
      "amihud": {
        "insight": "Price impact is 2.96e-08, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 2.96e-08 vs market 1.95e-07.",
        "vs_sector": "Better than sector: 2.96e-08 vs sector 5.38e-07.",
        "vs_peers": "Worse than peers: 2.96e-08 vs peers 1.94e-08."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to both peers and the market, with the stock up 11.5% over 1M compared with peers down 5.9% and the market down 0.1%. Liquidity broadly confirms that move rather than contradicting it, as the 6M liquidity score sits 1.9 points above the peer median and the spread is 1 tick, which suggests the stronger tape is being supported by workable trading conditions.",
      "conclusion": "The move looks stronger than the market and peers, but with market factors still driving 53.3% of trading it reads as market-linked with a clear stock-specific element."
    },
    "drivers": {
      "overall": "The market is the main driver now, accounting for 53.3% of recent price moves. That means the stock is reacting more to broader conditions than to company-specific news in the near term, which matters for how investors read day-to-day price action.",
      "beta": "This externally led pattern is showing up alongside orderly trading conditions, with a 1-tick spread and top-10 bid depth at 0.94x of ask depth. That matters because current price moves are being absorbed without a clear imbalance in displayed liquidity.",
      "rolling_change": "The monthly picture had been mostly market through January, February, and March. That makes the current market-led read look more temporary than deeply established, rather than a full reset in how the stock is trading."
    },
    "regime": {
      "overall": "The market backdrop is currently more changeable, but it matters that this phase has tended to persist for about 12.4 days because trading conditions are more likely to stay uneven than reset quickly.",
      "current": "The stock is in a high-volatility state, even as the displayed book remains orderly with a 1-tick spread and top-10 bid depth at 0.94x of ask depth.",
      "transitions": "This looks like a relatively settled phase because high volatility has shown a typical run length of about 12.4 days, although the picture is still mixed rather than one-way.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 12.4 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced overall because top-10 bid depth is close to ask depth at 0.94x and the spread is 1 tick. That matters because the book is showing orderly two-way interest rather than a thin market at the touch.",
      "concern": "The main watchpoint is that the bid side is slightly lighter than the ask side, with top-10 bid depth at 0.94x of ask depth. That matters because selling pressure would meet a marginally thinner buy-side cushion than buying pressure meets on the offer.",
      "peer_context": "The current book supports the broader liquidity read because the spread is tight and depth is broadly even, while the 6M liquidity score of 81.5 sits 1.9 points above the peer median of 79.7. That matters because the near-term screen is consistent with a stock that is holding up reasonably well relative to peers rather than showing a disconnect between headline liquidity and displayed depth."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on both trade count and trade value, which makes day-to-day activity look broad rather than driven by a small institutional base.",
      "retail_heavy": "Retail-like trades account for 92.8% of trade count and 41.8% of trade value, compared with institution-like trades at 0.5% of count and 13.8% of value. That leaves the tape led by a large number of smaller tickets, which supports regular turnover.",
      "institutional_gap": "Institution-like participation is present in value terms at 13.8% but remains sparse in count at 0.5%. That points to some larger tickets, while the overall flow base still sits with retail-like activity.",
      "peer_comparison": "The mix stands out as retail-leaning, and the peer comparison in the report tables is the right reference for how unusual that is. What matters here is that the stock’s activity is being supported by breadth of participation rather than a narrow set of larger trades."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that the tape is being set by broad retail-like participation rather than a dominant institutional flow. Because retail-like trades dominate both count and value share relative to institution-like trades, price formation looks broad-based. That matters because trading conditions are less reliant on a small number of larger participants. The stronger read is breadth rather than one-sided pressure.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks modest and does not appear to be driving the current trading picture. The clearest read is low short interest, while the stock has still returned 11.5% over one month compared with peers at -5.9%, which suggests short positioning is not overwhelming the tape.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short interest is building, but only modestly, with shorts up 19% month on month. That is worth watching, though it does not yet change the broader picture given the still-low starting level.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.0%, continuous 94.5%, and close 3.5%. Current trading concentration score is 0.213.",
      "hhi_interpretation": "A trading concentration score of 0.213 indicates activity is not heavily concentrated into a narrow part of the session. That supports a more usable intraday profile for investors seeking access during market hours.",
      "best_times": "The clearest liquidity window is the continuous session, with only 1.0% of activity at the open and 3.5% at the close. In practice, that means the main body of the day carries the flow.",
      "peer_ranking": "Peer concentration score comparison is available in this report."
    },
    "ofi": {
      "overall": "Order flow imbalance data not available.",
      "daily_vs_intraday": "N/A",
      "l2_signal": "N/A",
      "day_breakdown": "N/A"
    },
    "index": {
      "overall": "Index eligibility data not available.",
      "recommendation": "N/A"
    }
  },
  "series": {
    "peers_liquidity": {
      "labels": [
        "P52",
        "A7RU",
        "BEC",
        "KUO",
        "QES",
        "S20",
        "5TP",
        "5F7",
        "NC2"
      ],
      "scores": [
        81.54121863799283,
        89.96415770609319,
        77.77777777777779,
        81.18279569892472,
        85.12544802867383,
        78.13620071684588,
        93.54838709677419,
        53.584229390681,
        67.02508960573476
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "adv": [
        332456.0,
        3576672.75,
        307992.5,
        721033.2,
        644960.0,
        199800.0,
        8119696.25,
        74656.05,
        14061.75
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Building Materials",
      "sector_count": 6,
      "market_count": 558,
      "company": {
        "volatility": 0.34941394099920303,
        "adv": 332456.0,
        "spread_pct": 0.010030999166565408,
        "turnover_ratio": 0.0014761959165086153,
        "amihud": 2.9635364097178995e-08,
        "trades": 205.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6896945769447083,
          "median": 0.4369861367271677,
          "min": 0.0,
          "max": 6.587260432076449,
          "p5": 0.15223538001764644,
          "p95": 2.109255800676964,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2499841.4168989942,
          "median": 10851.9,
          "min": 0.0,
          "max": 239003387.5,
          "p5": 0.0,
          "p95": 10413137.6625,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09239591246660694,
          "median": 0.02875899768677068,
          "min": 0.00027866261388545424,
          "max": 1.267605633802817,
          "p5": 0.0035892244580833293,
          "p95": 0.4617204885872369,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0031809162541457806,
          "median": 0.000281634890421791,
          "min": 0.0,
          "max": 0.8816162415134138,
          "p5": 0.0,
          "p95": 0.007034169028560881,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.288260393715334e-05,
          "median": 1.9502529478073237e-07,
          "min": 0.0,
          "max": 0.0012875000252631538,
          "p5": 0.0,
          "p95": 4.798772032449556e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 362.67293906810033,
          "median": 6.75,
          "min": 0.0,
          "max": 10150.0,
          "p5": 0.0,
          "p95": 2011.9749999999995,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7378457019781384,
          "median": 0.49520077641065674,
          "min": 0.2019712009482271,
          "max": 1.765865227020454,
          "p5": 0.23266840589826868,
          "p95": 1.6104179728479509,
          "count": 6
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 177768.57499999998,
          "median": 6533.0,
          "min": 0.0,
          "max": 721033.2,
          "p5": 14.0625,
          "p95": 623888.8999999999,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.08477136211586334,
          "median": 0.03252840323123283,
          "min": 0.010030999166565408,
          "max": 0.2857142857142857,
          "p5": 0.0120534141136963,
          "p95": 0.24671206988490785,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0008076268240848919,
          "median": 0.0001587061648427152,
          "min": 0.0,
          "max": 0.0030473250686397658,
          "p5": 1.2069074188850076e-06,
          "p95": 0.002654542780606978,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.976059816301688e-06,
          "median": 5.383011831731333e-07,
          "min": 1.9138910450500152e-08,
          "max": 1.9875183845450564e-05,
          "p5": 2.176302386216986e-08,
          "p95": 1.862033748695433e-05,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 73.16666666666667,
          "median": 2.25,
          "min": 0.0,
          "max": 228.5,
          "p5": 0.25,
          "p95": 222.625,
          "count": 6
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1707359.0625,
          "median": 476476.25,
          "min": 14061.75,
          "max": 8119696.25,
          "p5": 35269.755000000005,
          "p95": 6529638.024999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 440.25,
          "median": 171.75,
          "min": 6.0,
          "max": 1745.5,
          "p5": 15.275,
          "p95": 1443.7999999999995,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5154427943681223,
          "median": 0.3423866476940497,
          "min": 0.18766387765317913,
          "max": 1.4379767391352778,
          "p5": 0.19135305806599145,
          "p95": 1.1985523596111112,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02183209950526043,
          "median": 0.009557613613055016,
          "min": 0.004612387654130685,
          "max": 0.08872327693039872,
          "p5": 0.0053816162715774616,
          "p95": 0.0664722772761635,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.3764821996741907,
          "median": 1.1099961485945684,
          "min": 1.0,
          "max": 2.60327868852459,
          "p5": 1.0,
          "p95": 2.397604344884437,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.110975018400631e-07,
          "median": 1.9409156494107606e-08,
          "min": 1.6778269582687299e-09,
          "max": 5.936913173238538e-07,
          "p5": 2.38731732584979e-09,
          "p95": 4.5544042968220846e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.1152162762295619,
          "median": 0.0028902114838326347,
          "min": 0.0002714660400909492,
          "max": 0.8816162415134138,
          "p5": 0.00040448523527623876,
          "p95": 0.5830850348479559,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.11510791366906514,
        "market": -0.0011060770743737125,
        "sector": -0.03661486549870996,
        "peers": -0.0589579319548551
      },
      {
        "horizon": "3M",
        "stock": 0.3478260869565206,
        "market": 0.054343896194767316,
        "sector": 0.02941586412883601,
        "peers": 0.03435556511668203
      },
      {
        "horizon": "6M",
        "stock": 0.35964912280701644,
        "market": 0.14413889939975522,
        "sector": -0.014864501753526493,
        "peers": -0.06220637328959322
      },
      {
        "horizon": "LAST_YEAR",
        "stock": null,
        "market": null,
        "sector": null,
        "peers": null
      }
    ],
    "drivers": {
      "share_market": 0.5326937352778056,
      "share_sector": 0.19421641528002506,
      "share_idio": 0.2730898494421694,
      "beta_market": 8.804829225416523,
      "beta_sector": -0.069173497321871,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.5326937352778056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.3%",
            "display_range": null,
            "display_text": "53.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 53.3,
            "plain_english": "Market explains about 53.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.19421641528002506,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.4%",
            "display_range": null,
            "display_text": "19.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.4,
            "plain_english": "Sector explains about 19.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2730898494421694,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "27.3%",
            "display_range": null,
            "display_text": "27.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 27.3,
            "plain_english": "Company-specific explains about 27.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 8.804829225416523,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.80",
            "display_range": null,
            "display_text": "8.80",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 8.80% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 8.8
          },
          "beta_stock_lag": {
            "median": 0.6689014046895192,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.67",
            "display_range": null,
            "display_text": "0.67",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.67
          },
          "beta_sector": {
            "median": -0.069173497321871,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.07",
            "display_range": null,
            "display_text": "-0.07",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.07% stock move in the opposite direction in this state.",
            "value_num": -0.07
          },
          "beta_market_lag": {
            "median": -1.765632222762695,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.77",
            "display_range": null,
            "display_text": "-1.77",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.77
          },
          "beta_sector_lag": {
            "median": 1.6008829587916382,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.60",
            "display_range": null,
            "display_text": "1.60",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.6
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-03 to 2025-04-30",
            "n_obs": 19,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5477848194154297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2438378939058182,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.4%",
                "display_range": null,
                "display_text": "24.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.4,
                "plain_english": "Market explains about 24.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20837728667875197,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5477848194154297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.8%",
                "display_range": null,
                "display_text": "54.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 54.8,
                "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-02 to 2025-05-30",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6229198120729915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26898844993849813,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1080917379885103,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.8%",
                "display_range": null,
                "display_text": "10.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 10.8,
                "plain_english": "Sector explains about 10.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6229198120729915,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6690854196016123,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.9%",
              "display_range": null,
              "display_text": "66.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.9,
              "plain_english": "Company-specific explains about 66.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25464386887984825,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.5%",
                "display_range": null,
                "display_text": "25.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.5,
                "plain_english": "Market explains about 25.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0762707115185395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.6%",
                "display_range": null,
                "display_text": "7.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 7.6,
                "plain_english": "Sector explains about 7.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6690854196016123,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.9%",
                "display_range": null,
                "display_text": "66.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 66.9,
                "plain_english": "Company-specific explains about 66.9% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4479676352150542,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32225109040116906,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.2%",
                "display_range": null,
                "display_text": "32.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 32.2,
                "plain_english": "Market explains about 32.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22978127438377668,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.0%",
                "display_range": null,
                "display_text": "23.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 23.0,
                "plain_english": "Sector explains about 23.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4479676352150542,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.8%",
                "display_range": null,
                "display_text": "44.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 44.8,
                "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-08",
            "month_label": "August 2025",
            "month_short_label": "Aug",
            "period_label": "2025-08-01 to 2025-08-29",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5244361029857159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.4%",
              "display_range": null,
              "display_text": "52.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.4,
              "plain_english": "Company-specific explains about 52.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31555445145911165,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.6%",
                "display_range": null,
                "display_text": "31.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.6,
                "plain_english": "Market explains about 31.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1600094455551724,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.0%",
                "display_range": null,
                "display_text": "16.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.0,
                "plain_english": "Sector explains about 16.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5244361029857159,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.4%",
                "display_range": null,
                "display_text": "52.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.4,
                "plain_english": "Company-specific explains about 52.4% of price moves in the current state."
              }
            },
            "summary": "Aug: Mostly company-driven."
          },
          {
            "month_key": "2025-09",
            "month_label": "September 2025",
            "month_short_label": "Sep",
            "period_label": "2025-09-01 to 2025-09-30",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6571106733751566,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.7%",
              "display_range": null,
              "display_text": "65.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 65.7,
              "plain_english": "Company-specific explains about 65.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2964875572054656,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.6%",
                "display_range": null,
                "display_text": "29.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.6,
                "plain_english": "Market explains about 29.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04640176941937768,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6571106733751566,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.7%",
                "display_range": null,
                "display_text": "65.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 65.7,
                "plain_english": "Company-specific explains about 65.7% of price moves in the current state."
              }
            },
            "summary": "Sep: Still clearly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-01 to 2025-10-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6131886471416146,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2685321804300703,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11827917242831507,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Sector explains about 11.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6131886471416146,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.3%",
                "display_range": null,
                "display_text": "61.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 61.3,
                "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
              }
            },
            "summary": "Oct: Still clearly company-driven."
          },
          {
            "month_key": "2025-11",
            "month_label": "November 2025",
            "month_short_label": "Nov",
            "period_label": "2025-11-03 to 2025-11-28",
            "n_obs": 20,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6316929765628295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.2%",
              "display_range": null,
              "display_text": "63.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 63.2,
              "plain_english": "Company-specific explains about 63.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34487429796225977,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.5%",
                "display_range": null,
                "display_text": "34.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.5,
                "plain_english": "Market explains about 34.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.02343272547491077,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.3%",
                "display_range": null,
                "display_text": "2.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 2.3,
                "plain_english": "Sector explains about 2.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6316929765628295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.2%",
                "display_range": null,
                "display_text": "63.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 63.2,
                "plain_english": "Company-specific explains about 63.2% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4844512237083973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.4,
              "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.38548752905623673,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Market explains about 38.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.130061247235366,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4844512237083973,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.4%",
                "display_range": null,
                "display_text": "48.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.4,
                "plain_english": "Company-specific explains about 48.4% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly company-driven."
          },
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-02 to 2026-01-30",
            "n_obs": 21,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6132960646937203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.3%",
              "display_range": null,
              "display_text": "61.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 61.3,
              "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3059955472709048,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08070838803537492,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.1%",
                "display_range": null,
                "display_text": "8.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.1,
                "plain_english": "Sector explains about 8.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6132960646937203,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.3%",
                "display_range": null,
                "display_text": "61.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 61.3,
                "plain_english": "Company-specific explains about 61.3% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 18,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46567123360084756,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Company-specific explains about 46.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34848262268422575,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 34.8,
                "plain_english": "Market explains about 34.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18584614371492672,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46567123360084756,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 46.6,
                "plain_english": "Company-specific explains about 46.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly company-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5154355314662685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.5%",
              "display_range": null,
              "display_text": "51.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.5,
              "plain_english": "Company-specific explains about 51.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.38550587709786,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Market explains about 38.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09905859143587137,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.9%",
                "display_range": null,
                "display_text": "9.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 9.9,
                "plain_english": "Sector explains about 9.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5154355314662685,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.5%",
                "display_range": null,
                "display_text": "51.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.5,
                "plain_english": "Company-specific explains about 51.5% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 13.88888888888889,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.014859781401980925,
              "low": 0.014859781401980925,
              "high": 0.014859781401980925
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.029029382850194407,
              "low": 0.029029382850194407,
              "high": 0.029029382850194407
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.928,
              0.072
            ],
            [
              0.07317073170731707,
              0.926829268292683
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              116.0,
              9.0
            ],
            [
              9.0,
              114.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 251,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "8.80",
          "sector_link_display": "-0.07",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 8.80% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.07% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.67",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 53.3,
          "driver_share_display": "53.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.926829268292683,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 12.4 days.",
          "expected_duration_days": 12.4
        },
        "display_notes": {
          "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
        }
      },
      "lead_lag": {
        "lags": [],
        "corr_market": [],
        "corr_sector": [],
        "best": {
          "market": 0,
          "sector": 0
        }
      },
      "rolling_windows": {
        "p1": {
          "valid": false
        },
        "p2": {
          "valid": false
        },
        "p3": {
          "valid": false
        },
        "p4": {
          "valid": false
        },
        "p5": {
          "valid": false
        },
        "p6": {
          "valid": false
        }
      },
      "rolling": {
        "ordered": [],
        "market": [],
        "sector": [],
        "idio": []
      },
      "monthly_history": [
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-03 to 2025-04-30",
          "n_obs": 19,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.2438378939058182,
          "share_sector": 0.20837728667875197,
          "share_company": 0.5477848194154297,
          "share_market_display": "24.4%",
          "share_sector_display": "20.8%",
          "share_company_display": "54.8%",
          "dominant_share_display": "54.8%"
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.26898844993849813,
          "share_sector": 0.1080917379885103,
          "share_company": 0.6229198120729915,
          "share_market_display": "26.9%",
          "share_sector_display": "10.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jun: Still clearly company-driven.",
          "share_market": 0.25464386887984825,
          "share_sector": 0.0762707115185395,
          "share_company": 0.6690854196016123,
          "share_market_display": "25.5%",
          "share_sector_display": "7.6%",
          "share_company_display": "66.9%",
          "dominant_share_display": "66.9%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: More mixed, though company-driven still has the largest share.",
          "share_market": 0.32225109040116906,
          "share_sector": 0.22978127438377668,
          "share_company": 0.4479676352150542,
          "share_market_display": "32.2%",
          "share_sector_display": "23.0%",
          "share_company_display": "44.8%",
          "dominant_share_display": "44.8%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Aug: Mostly company-driven.",
          "share_market": 0.31555445145911165,
          "share_sector": 0.1600094455551724,
          "share_company": 0.5244361029857159,
          "share_market_display": "31.6%",
          "share_sector_display": "16.0%",
          "share_company_display": "52.4%",
          "dominant_share_display": "52.4%"
        },
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-01 to 2025-09-30",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Sep: Still clearly company-driven.",
          "share_market": 0.2964875572054656,
          "share_sector": 0.04640176941937768,
          "share_company": 0.6571106733751566,
          "share_market_display": "29.6%",
          "share_sector_display": "4.6%",
          "share_company_display": "65.7%",
          "dominant_share_display": "65.7%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Still clearly company-driven.",
          "share_market": 0.2685321804300703,
          "share_sector": 0.11827917242831507,
          "share_company": 0.6131886471416146,
          "share_market_display": "26.9%",
          "share_sector_display": "11.8%",
          "share_company_display": "61.3%",
          "dominant_share_display": "61.3%"
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.34487429796225977,
          "share_sector": 0.02343272547491077,
          "share_company": 0.6316929765628295,
          "share_market_display": "34.5%",
          "share_sector_display": "2.3%",
          "share_company_display": "63.2%",
          "dominant_share_display": "63.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.38548752905623673,
          "share_sector": 0.130061247235366,
          "share_company": 0.4844512237083973,
          "share_market_display": "38.5%",
          "share_sector_display": "13.0%",
          "share_company_display": "48.4%",
          "dominant_share_display": "48.4%"
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jan: Still clearly company-driven.",
          "share_market": 0.3059955472709048,
          "share_sector": 0.08070838803537492,
          "share_company": 0.6132960646937203,
          "share_market_display": "30.6%",
          "share_sector_display": "8.1%",
          "share_company_display": "61.3%",
          "dominant_share_display": "61.3%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.34848262268422575,
          "share_sector": 0.18584614371492672,
          "share_company": 0.46567123360084756,
          "share_market_display": "34.8%",
          "share_sector_display": "18.6%",
          "share_company_display": "46.6%",
          "dominant_share_display": "46.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.38550587709786,
          "share_sector": 0.09905859143587137,
          "share_company": 0.5154355314662685,
          "share_market_display": "38.6%",
          "share_sector_display": "9.9%",
          "share_company_display": "51.5%",
          "dominant_share_display": "51.5%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "ols_with_volatility_regimes",
        "n_regimes": 2,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "labels": [
          "Low Volatility",
          "High Volatility"
        ],
        "pct_time": [
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 13.88888888888889,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.014859781401980925,
              "low": 0.014859781401980925,
              "high": 0.014859781401980925
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 12.4,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.029029382850194407,
              "low": 0.029029382850194407,
              "high": 0.029029382850194407
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.928,
            0.072
          ],
          [
            0.07317073170731707,
            0.926829268292683
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 1.54,
          "quantity": 27900.0,
          "value": 42966.0
        },
        {
          "level": 2,
          "price": 1.53,
          "quantity": 57900.0,
          "value": 88587.0
        },
        {
          "level": 3,
          "price": 1.52,
          "quantity": 40200.0,
          "value": 61104.0
        },
        {
          "level": 4,
          "price": 1.51,
          "quantity": 38700.0,
          "value": 58437.0
        },
        {
          "level": 5,
          "price": 1.5,
          "quantity": 72500.0,
          "value": 108750.0
        },
        {
          "level": 6,
          "price": 1.49,
          "quantity": 21300.0,
          "value": 31737.0
        },
        {
          "level": 7,
          "price": 1.48,
          "quantity": 26100.0,
          "value": 38628.0
        },
        {
          "level": 8,
          "price": 1.47,
          "quantity": 100.0,
          "value": 147.0
        },
        {
          "level": 9,
          "price": 1.46,
          "quantity": 19600.0,
          "value": 28616.0
        },
        {
          "level": 10,
          "price": 1.45,
          "quantity": 37600.0,
          "value": 54520.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 1.55,
          "quantity": 45100.0,
          "value": 69905.0
        },
        {
          "level": 2,
          "price": 1.56,
          "quantity": 32000.0,
          "value": 49920.0
        },
        {
          "level": 3,
          "price": 1.57,
          "quantity": 33600.0,
          "value": 52752.0
        },
        {
          "level": 4,
          "price": 1.58,
          "quantity": 18000.0,
          "value": 28440.0
        },
        {
          "level": 5,
          "price": 1.59,
          "quantity": 25400.0,
          "value": 40386.0
        },
        {
          "level": 6,
          "price": 1.6,
          "quantity": 105200.0,
          "value": 168320.0
        },
        {
          "level": 7,
          "price": 1.62,
          "quantity": 17500.0,
          "value": 28350.000000000004
        },
        {
          "level": 8,
          "price": 1.63,
          "quantity": 4400.0,
          "value": 7171.999999999999
        },
        {
          "level": 9,
          "price": 1.64,
          "quantity": 32600.0,
          "value": 53464.0
        },
        {
          "level": 10,
          "price": 1.65,
          "quantity": 27700.0,
          "value": 45705.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-31 08:59:59.064900",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 1.545,
        "spread_pct": 0.00647249190938512,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 513492.0,
        "ask_depth_notional_top10": 544414.0,
        "bid_ask_depth_ratio": 0.9432
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 253,
        "n_trades_used": 62829,
        "first_trade_date": "2025-04-01",
        "last_trade_date": "2026-03-31",
        "window_label": "Apr 1, 2025 to Mar 31, 2026",
        "window_short_label": "Apr 1, 2025 to Mar 31, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "62,829 trades",
        "window_detail_label": "253 trading days • 62,829 trades",
        "history_note": "Trade-size percentiles use Apr 1, 2025 to Mar 31, 2026 history (253 trading days • 62,829 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 6666.6,
            "impact_pct": -0.003236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.3,
            "pct_of_adv": 0.47
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 11232.0,
            "impact_pct": -0.003236,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.19,
            "pct_of_adv": 0.79
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 280389.2,
            "impact_pct": -0.014919,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 54.6,
            "pct_of_adv": 19.69
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-31",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8131285960859278336",
            "timestamp": "2026-03-31 05:22:49.359000000",
            "local_timestamp": "2026-03-31 13:22:49",
            "posted_price": 1.64,
            "size_shares": 100000.0,
            "notional": 164000.0,
            "impact_pct": -0.009313,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 31.94,
            "price_vs_mid_pct": 6.149,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8131285960857714688",
            "timestamp": "2026-03-31 02:25:04.565800000",
            "local_timestamp": "2026-03-31 10:25:04",
            "posted_price": 1.56,
            "size_shares": 100000.0,
            "notional": 156000.0,
            "impact_pct": -0.008958,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 30.38,
            "price_vs_mid_pct": 0.971,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8131285960857078784",
            "timestamp": "2026-03-31 00:30:07.153000000",
            "local_timestamp": "2026-03-31 08:30:07",
            "posted_price": 1.75,
            "size_shares": 50000.0,
            "notional": 87500.0,
            "impact_pct": -0.006541,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 17.04,
            "price_vs_mid_pct": 13.269,
            "executed_event_count": 0,
            "event_count": 5
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-31",
        "bucket_minutes": 30,
        "tick_size": 0.01,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.012345679012345552,
            "spread_ticks": 1.9999999999999796,
            "bid_depth_notional": 273758.0,
            "ask_depth_notional": 447828.0,
            "mid_price": 1.62
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.012738853503184724,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 412568.0,
            "ask_depth_notional": 197706.0,
            "mid_price": 1.57
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.006309148264984233,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 529798.0,
            "ask_depth_notional": 177611.0,
            "mid_price": 1.585
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.012738853503184724,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 344222.0,
            "ask_depth_notional": 193366.0,
            "mid_price": 1.57
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.006349206349206354,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 425996.0,
            "ask_depth_notional": 195832.0,
            "mid_price": 1.5750000000000002
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.006349206349206354,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 443697.0,
            "ask_depth_notional": 192645.0,
            "mid_price": 1.5750000000000002
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.012578616352201269,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 471536.0,
            "ask_depth_notional": 367502.0,
            "mid_price": 1.59
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.006389776357827482,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 361739.0,
            "ask_depth_notional": 444277.0,
            "mid_price": 1.565
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00647249190938512,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 314445.0,
            "ask_depth_notional": 403817.0,
            "mid_price": 1.545
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.012903225806451623,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 378667.0,
            "ask_depth_notional": 454427.0,
            "mid_price": 1.55
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0065146579804560316,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 309475.0,
            "ask_depth_notional": 408959.0,
            "mid_price": 1.5350000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00647249190938512,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 408329.0,
            "ask_depth_notional": 463714.0,
            "mid_price": 1.545
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00647249190938512,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 484589.0,
            "ask_depth_notional": 474044.0,
            "mid_price": 1.545
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.00647249190938512,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 513492.0,
            "ask_depth_notional": 544414.0,
            "mid_price": 1.545
          }
        ],
        "summary": {
          "median_spread_pct": 0.00647249190938512,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 410448.5,
          "median_ask_depth_notional": 406388.0,
          "tightest_bucket": "10:00",
          "widest_bucket": "14:30",
          "deepest_bid_bucket": "10:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 3.5,
      "peers": [
        {
          "ticker": "5TP",
          "pct": 9.0
        },
        {
          "ticker": "A7RU",
          "pct": 23.0
        },
        {
          "ticker": "KUO",
          "pct": 60.8
        },
        {
          "ticker": "QES",
          "pct": 179.5
        },
        {
          "ticker": "BEC",
          "pct": 259.5
        },
        {
          "ticker": "S20",
          "pct": 461.1
        },
        {
          "ticker": "5F7",
          "pct": 1062.2
        },
        {
          "ticker": "NC2",
          "pct": 1537.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 458,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-31",
          "last_trade_date": "2026-03-31",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7947598253275109,
            "mixed_pct": 0.20087336244541484,
            "instit_pct": 0.004366812227074236,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.33486108294463596,
            "mixed_qty_pct": 0.5989048874467654,
            "instit_qty_pct": 0.06623402960859866,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.33515605977549684,
            "mixed_notional_pct": 0.5982757969653922,
            "instit_notional_pct": 0.06656814325911092,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 8384.355895196506,
            "median": 3850.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "P52",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7947598253275109,
              "mixed_pct": 0.20087336244541484,
              "instit_pct": 0.004366812227074236,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.33486108294463596,
              "mixed_qty_pct": 0.5989048874467654,
              "instit_qty_pct": 0.06623402960859866,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.33515605977549684,
              "mixed_notional_pct": 0.5982757969653922,
              "instit_notional_pct": 0.06656814325911092,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8384.355895196506,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "QES",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.983739837398374,
              "mixed_pct": 0.016260162601626018,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6204933586337761,
              "mixed_qty_pct": 0.3795066413662239,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6197798315654592,
              "mixed_notional_pct": 0.38022016843454076,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1357.7926829268292,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "A7RU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9781542576905929,
              "mixed_pct": 0.013820775746767721,
              "instit_pct": 0.008024966562639322,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2776289639678562,
              "mixed_qty_pct": 0.14455197442322648,
              "instit_qty_pct": 0.5778190616089173,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27856067863861717,
              "mixed_notional_pct": 0.14467088955275942,
              "instit_notional_pct": 0.5767684318086235,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2627.904146232724,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NC2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9473684210526315,
              "mixed_pct": 0.05263157894736842,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.617046818727491,
              "mixed_qty_pct": 0.382953181272509,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6215860541412195,
              "mixed_notional_pct": 0.3784139458587806,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2839.5526315789475,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BEC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.92,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.013333333333333334,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.37659033078880405,
              "mixed_qty_pct": 0.42748091603053434,
              "instit_qty_pct": 0.19592875318066158,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3772516193105857,
              "mixed_notional_pct": 0.4277872059457483,
              "instit_notional_pct": 0.19496117474366595,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4886.8533333333335,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8961038961038961,
              "mixed_pct": 0.1038961038961039,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5073552183338494,
              "mixed_qty_pct": 0.4926447816661505,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5069188187554975,
              "mixed_notional_pct": 0.49308118124450245,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4153.268831168832,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S20",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8775510204081632,
              "mixed_pct": 0.12244897959183673,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3064853556485356,
              "mixed_qty_pct": 0.6935146443514645,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3080518938244783,
              "mixed_notional_pct": 0.6919481061755217,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6256.102040816327,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5TP",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8188647746243739,
              "mixed_pct": 0.1652754590984975,
              "instit_pct": 0.015859766277128547,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.27055224601513445,
              "mixed_qty_pct": 0.525020125583642,
              "instit_qty_pct": 0.20442762840122364,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27016986212732014,
              "mixed_notional_pct": 0.5239438737767412,
              "instit_notional_pct": 0.20588626409593858,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7626.680300500835,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 4424,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-31",
          "period_days": 28,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8569168173598554,
            "mixed_pct": 0.1306509945750452,
            "instit_pct": 0.012432188065099457,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.33661286386279565,
            "mixed_qty_pct": 0.4898814679408345,
            "instit_qty_pct": 0.17350566819636987,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3360462494953035,
            "mixed_notional_pct": 0.4899605629746737,
            "instit_notional_pct": 0.17399318753002277,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 7057.913878842676,
            "median": 1922.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "P52",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8569168173598554,
              "mixed_pct": 0.1306509945750452,
              "instit_pct": 0.012432188065099457,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.33661286386279565,
              "mixed_qty_pct": 0.4898814679408345,
              "instit_qty_pct": 0.17350566819636987,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3360462494953035,
              "mixed_notional_pct": 0.4899605629746737,
              "instit_notional_pct": 0.17399318753002277,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7057.913878842676,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "QES",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9790501553484243,
              "mixed_pct": 0.02068353306702175,
              "instit_pct": 0.0002663115845539281,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5709477421830572,
              "mixed_qty_pct": 0.4079142644468383,
              "instit_qty_pct": 0.02113799337010444,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5697305159655712,
              "mixed_notional_pct": 0.4096178985881075,
              "instit_notional_pct": 0.020651585446321303,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1270.3419884598313,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "A7RU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9590682196339434,
              "mixed_pct": 0.028910149750415972,
              "instit_pct": 0.0120216306156406,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21010649032161977,
              "mixed_qty_pct": 0.23782876392665225,
              "instit_qty_pct": 0.552064745751728,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21037048042928344,
              "mixed_notional_pct": 0.23725531458762278,
              "instit_notional_pct": 0.5523742049830938,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3756.5946547420963,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NC2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9483695652173914,
              "mixed_pct": 0.051630434782608696,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7437132784958872,
              "mixed_qty_pct": 0.2562867215041128,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7493735382421981,
              "mixed_notional_pct": 0.2506264617578019,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4132.183423913043,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S20",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9448909299655568,
              "mixed_pct": 0.0539609644087256,
              "instit_pct": 0.001148105625717566,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5887831718920158,
              "mixed_qty_pct": 0.3811256949618846,
              "instit_qty_pct": 0.030091133146099618,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5892283799270803,
              "mixed_notional_pct": 0.38127418244418204,
              "instit_notional_pct": 0.02949743762873762,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3291.9242250287025,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BEC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9108858057630737,
              "mixed_pct": 0.08537886872998933,
              "instit_pct": 0.003735325506937033,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.48077651515151515,
              "mixed_qty_pct": 0.4570075757575758,
              "instit_qty_pct": 0.06221590909090909,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4800813552306679,
              "mixed_notional_pct": 0.45636883561719466,
              "instit_notional_pct": 0.06354980915213745,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5074.39007470651,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9034774560359645,
              "mixed_pct": 0.0909691921195293,
              "instit_pct": 0.005553351844506148,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36058454115317434,
              "mixed_qty_pct": 0.5359198657523749,
              "instit_qty_pct": 0.10349559309445071,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3589283200823121,
              "mixed_notional_pct": 0.5359637997839825,
              "instit_notional_pct": 0.10510788013370531,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4560.921221737406,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5F7",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8815566835871405,
              "mixed_pct": 0.116751269035533,
              "instit_pct": 0.001692047377326565,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.468440153797248,
              "mixed_qty_pct": 0.5046592038671329,
              "instit_qty_pct": 0.0269006423356191,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4631995408007963,
              "mixed_notional_pct": 0.5133050347058821,
              "instit_notional_pct": 0.023495424493321725,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6142.968020304569,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5TP",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7833569775255731,
              "mixed_pct": 0.19230194877921303,
              "instit_pct": 0.02434107369521392,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20035666473514896,
              "mixed_qty_pct": 0.5388859472096229,
              "instit_qty_pct": 0.2607573880552281,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19984562538331535,
              "mixed_notional_pct": 0.5360642541164692,
              "instit_notional_pct": 0.2640901205002154,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10053.642313148659,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 9465,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-12-30",
          "last_trade_date": "2026-03-31",
          "period_days": 91,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9019545694664554,
            "mixed_pct": 0.09054410987849974,
            "instit_pct": 0.0075013206550449026,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.40339048408354483,
            "mixed_qty_pct": 0.4584549153673936,
            "instit_qty_pct": 0.1381546005490616,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3945579475337216,
            "mixed_notional_pct": 0.4630814228164693,
            "instit_notional_pct": 0.1423606296498091,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 5089.8146856840995,
            "median": 1192.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "P52",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9019545694664554,
              "mixed_pct": 0.09054410987849974,
              "instit_pct": 0.0075013206550449026,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.40339048408354483,
              "mixed_qty_pct": 0.4584549153673936,
              "instit_qty_pct": 0.1381546005490616,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3945579475337216,
              "mixed_notional_pct": 0.4630814228164693,
              "instit_notional_pct": 0.1423606296498091,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5089.8146856840995,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "QES",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9609688805939871,
              "mixed_pct": 0.03598815271635493,
              "instit_pct": 0.0030429666896579707,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4061667198905754,
              "mixed_qty_pct": 0.44490336328002467,
              "instit_qty_pct": 0.14892991682939993,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3968141229244271,
              "mixed_notional_pct": 0.4471745532971601,
              "instit_notional_pct": 0.15601132377841279,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2107.4595894023614,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "A7RU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9551469815090202,
              "mixed_pct": 0.03067309569945774,
              "instit_pct": 0.014179922791522089,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.18107110173527732,
              "mixed_qty_pct": 0.18963247230263994,
              "instit_qty_pct": 0.6292964259620827,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.18073937918023805,
              "mixed_notional_pct": 0.18865445217873378,
              "instit_notional_pct": 0.6306061686410281,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5060.756109834318,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NC2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9510309278350515,
              "mixed_pct": 0.04896907216494845,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7634884465452628,
              "mixed_qty_pct": 0.2365115534547372,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7638686811856833,
              "mixed_notional_pct": 0.23613131881431665,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3939.6134020618556,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5F7",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9127340823970037,
              "mixed_pct": 0.08689138576779026,
              "instit_pct": 0.0003745318352059925,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5291778276260094,
              "mixed_qty_pct": 0.46378985081832563,
              "instit_qty_pct": 0.0070323215556649474,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5301788770862399,
              "mixed_notional_pct": 0.46316552311290066,
              "instit_notional_pct": 0.00665559980085946,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4800.103146067416,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S20",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9071539927247532,
              "mixed_pct": 0.08903516369305386,
              "instit_pct": 0.0038108435821929674,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4762514655655809,
              "mixed_qty_pct": 0.4368978437069888,
              "instit_qty_pct": 0.08685069072743029,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4746691853176568,
              "mixed_notional_pct": 0.4393013302673687,
              "instit_notional_pct": 0.08602948441497456,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4765.097176511346,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BEC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8913535536441829,
              "mixed_pct": 0.10140334993209597,
              "instit_pct": 0.007243096423721141,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4063115700794891,
              "mixed_qty_pct": 0.4709389224811468,
              "instit_qty_pct": 0.12274950743936408,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.40701174542516877,
              "mixed_notional_pct": 0.47111407809382394,
              "instit_notional_pct": 0.1218741764810073,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5868.114078768674,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8807196339434277,
              "mixed_pct": 0.10820507487520799,
              "instit_pct": 0.011075291181364393,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.293762529435397,
              "mixed_qty_pct": 0.5208188955615382,
              "instit_qty_pct": 0.18541857500306483,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2867539649914382,
              "mixed_notional_pct": 0.5187311200606013,
              "instit_notional_pct": 0.19451491494796047,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5695.289111896839,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5TP",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.809822164008804,
              "mixed_pct": 0.16422485382880753,
              "instit_pct": 0.025952982162388432,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.20566067418645043,
              "mixed_qty_pct": 0.4979594577688928,
              "instit_qty_pct": 0.29637986804465677,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2013564373713206,
              "mixed_notional_pct": 0.4989510565827021,
              "instit_notional_pct": 0.29969250604597725,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9552.667229296352,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 17989,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-09-30",
          "last_trade_date": "2026-03-31",
          "period_days": 182,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9283450997832009,
            "mixed_pct": 0.0663738951581522,
            "instit_pct": 0.005281005058646951,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4268790348146207,
            "mixed_qty_pct": 0.4377802495423469,
            "instit_qty_pct": 0.1353407156430324,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4182152032107059,
            "mixed_notional_pct": 0.44350173510721197,
            "instit_notional_pct": 0.1382830616820821,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 3911.146367224415,
            "median": 580.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "P52",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9283450997832009,
              "mixed_pct": 0.0663738951581522,
              "instit_pct": 0.005281005058646951,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4268790348146207,
              "mixed_qty_pct": 0.4377802495423469,
              "instit_qty_pct": 0.1353407156430324,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4182152032107059,
              "mixed_notional_pct": 0.44350173510721197,
              "instit_notional_pct": 0.1382830616820821,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3911.146367224415,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NC2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9569789674952199,
              "mixed_pct": 0.043021032504780114,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7976679831278042,
              "mixed_qty_pct": 0.2023320168721958,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7941711158383687,
              "mixed_notional_pct": 0.20582888416163125,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3922.0353728489486,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "A7RU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9562214656039619,
              "mixed_pct": 0.030681730248394337,
              "instit_pct": 0.013096804147643736,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.19093660730968062,
              "mixed_qty_pct": 0.20000698978426487,
              "instit_qty_pct": 0.6090564029060546,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.19000132365681177,
              "mixed_notional_pct": 0.1984819811558667,
              "instit_notional_pct": 0.6115166951873215,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4731.340594289251,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "QES",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9469901168014375,
              "mixed_pct": 0.048784633690294066,
              "instit_pct": 0.0042252495082683765,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34985305635144726,
              "mixed_qty_pct": 0.48983764273061536,
              "instit_qty_pct": 0.1603093009179374,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.34354367414201026,
              "mixed_notional_pct": 0.49204935142379935,
              "instit_notional_pct": 0.16440697443419036,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2627.123127170297,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "S20",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9116653070737676,
              "mixed_pct": 0.08448898729751778,
              "instit_pct": 0.003845705628714602,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4700803574962944,
              "mixed_qty_pct": 0.43975386943116396,
              "instit_qty_pct": 0.09016577307254166,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.46930240751864494,
              "mixed_notional_pct": 0.4414091239579471,
              "instit_notional_pct": 0.08928846852340791,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4549.265470224916,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5F7",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9060114503816794,
              "mixed_pct": 0.09208015267175572,
              "instit_pct": 0.0019083969465648854,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4843600147919667,
              "mixed_qty_pct": 0.4897888068215616,
              "instit_qty_pct": 0.025851178386471683,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.47058442996053435,
              "mixed_notional_pct": 0.49671474021942674,
              "instit_notional_pct": 0.0327008298200389,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4820.724713740458,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BEC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8914987321500066,
              "mixed_pct": 0.10249566261844388,
              "instit_pct": 0.006005605231549446,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4150824461698551,
              "mixed_qty_pct": 0.48544184743456337,
              "instit_qty_pct": 0.09947570639558152,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4156196623921792,
              "mixed_notional_pct": 0.4847164789284648,
              "instit_notional_pct": 0.09966385867935601,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5725.99372747898,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "KUO",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8818138494812859,
              "mixed_pct": 0.10858169287730489,
              "instit_pct": 0.009604457641409143,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31160609374781173,
              "mixed_qty_pct": 0.5308403496273125,
              "instit_qty_pct": 0.15755355662487575,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3025776008980072,
              "mixed_notional_pct": 0.5276771584709811,
              "instit_notional_pct": 0.16974524063101173,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5595.02406979728,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5TP",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8171423562971109,
              "mixed_pct": 0.15548756195120397,
              "instit_pct": 0.027370081751685232,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2130754280720848,
              "mixed_qty_pct": 0.47385996598727487,
              "instit_qty_pct": 0.31306460594064034,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20807810992203102,
              "mixed_notional_pct": 0.4763705182846042,
              "instit_notional_pct": 0.3155513717933648,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9680.824456980765,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 17989,
      "n_runs": 0,
      "n_trade_days": 0,
      "first_trade_date": "2025-09-30",
      "last_trade_date": "2026-03-31",
      "period_days": 182,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.9283450997832009,
        "mixed_pct": 0.0663738951581522,
        "instit_pct": 0.005281005058646951,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.4182152032107059,
        "mixed_notional_pct": 0.44350173510721197,
        "instit_notional_pct": 0.1382830616820821,
        "ambiguous_notional_pct": null,
        "unobservable_notional_pct": null,
        "unclear_notional_pct": null
      },
      "run_composition": {
        "retail_pct": null,
        "mixed_pct": null,
        "instit_pct": null,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null
      },
      "trade_size": {
        "avg": 3911.146367224415,
        "median": 580.0
      },
      "run_size": {
        "avg": null,
        "median": null,
        "avg_length": null
      },
      "confidence": {
        "high": null,
        "medium": null,
        "low": null,
        "na": null
      },
      "confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 0,
        "na": 0
      },
      "trade_confidence": {
        "high": null,
        "medium": null,
        "low": null,
        "na": null
      },
      "trade_confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 0,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 0,
          "mixed": 0,
          "institutional": 0,
          "ambiguous": 0,
          "unobservable": 0,
          "unclear": 0
        },
        "runs": {
          "retail": 0,
          "mixed": 0,
          "institutional": 0,
          "ambiguous": 0,
          "unobservable": 0,
          "unclear": 0
        }
      },
      "observability": {
        "avg_feature_coverage": null,
        "observable_run_pct": null,
        "ambiguous_run_pct": null,
        "unobservable_run_pct": null
      },
      "dominant_bucket": null,
      "dominant_label": null,
      "dominant_share": null,
      "dominance_gap": null,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-03",
            "n_trades": 4221,
            "n_runs": 0,
            "retail_pct": 0.8685145700071073,
            "mixed_pct": 0.11892916370528311,
            "instit_pct": 0.012556266287609572,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 6711.242596541104,
            "avg_run_notional": null,
            "retail_qty_pct": 0.3463549291061943,
            "mixed_qty_pct": 0.472620143042369,
            "instit_qty_pct": 0.1810249278514367,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 19127200.0
          },
          {
            "month": "2026-02",
            "n_trades": 2118,
            "n_runs": 0,
            "retail_pct": 0.9249291784702549,
            "mixed_pct": 0.07176581680830972,
            "instit_pct": 0.0033050047214353163,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3894.1100094428707,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4506818181818182,
            "mixed_qty_pct": 0.47893939393939394,
            "instit_qty_pct": 0.07037878787878787,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 6600000.0
          },
          {
            "month": "2026-01",
            "n_trades": 2531,
            "n_runs": 0,
            "retail_pct": 0.9569340181746345,
            "mixed_pct": 0.039510075069142635,
            "instit_pct": 0.0035559067562228367,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2858.209798498617,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5555428065631812,
            "mixed_qty_pct": 0.3279787565361352,
            "instit_qty_pct": 0.11647843690068353,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 6100700.0
          },
          {
            "month": "2025-12",
            "n_trades": 2122,
            "n_runs": 0,
            "retail_pct": 0.943449575871819,
            "mixed_pct": 0.051837888784165884,
            "instit_pct": 0.00471253534401508,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3193.273327049953,
            "avg_run_notional": null,
            "retail_qty_pct": 0.38694335674313163,
            "mixed_qty_pct": 0.4298102379555795,
            "instit_qty_pct": 0.18324640530128886,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 6307900.0
          },
          {
            "month": "2025-11",
            "n_trades": 2438,
            "n_runs": 0,
            "retail_pct": 0.9639048400328137,
            "mixed_pct": 0.034044298605414275,
            "instit_pct": 0.002050861361771944,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2311.5701394585726,
            "avg_run_notional": null,
            "retail_qty_pct": 0.498341413625925,
            "mixed_qty_pct": 0.42608985808781674,
            "instit_qty_pct": 0.07556872828625827,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 5094700.0
          },
          {
            "month": "2025-10",
            "n_trades": 3697,
            "n_runs": 0,
            "retail_pct": 0.9607790100081147,
            "mixed_pct": 0.03732756288882878,
            "instit_pct": 0.0018934271030565323,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2375.2117933459563,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4985622855022725,
            "mixed_qty_pct": 0.3945168086713398,
            "instit_qty_pct": 0.10692090582638769,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 7546700.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "P52",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9283450997832009,
          "mixed_pct": 0.0663738951581522,
          "instit_pct": 0.005281005058646951,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4268790348146207,
          "mixed_qty_pct": 0.4377802495423469,
          "instit_qty_pct": 0.1353407156430324,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4182152032107059,
          "mixed_notional_pct": 0.44350173510721197,
          "instit_notional_pct": 0.1382830616820821,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3911.146367224415,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NC2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9569789674952199,
          "mixed_pct": 0.043021032504780114,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7976679831278042,
          "mixed_qty_pct": 0.2023320168721958,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7941711158383687,
          "mixed_notional_pct": 0.20582888416163125,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3922.0353728489486,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "A7RU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9562214656039619,
          "mixed_pct": 0.030681730248394337,
          "instit_pct": 0.013096804147643736,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.19093660730968062,
          "mixed_qty_pct": 0.20000698978426487,
          "instit_qty_pct": 0.6090564029060546,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.19000132365681177,
          "mixed_notional_pct": 0.1984819811558667,
          "instit_notional_pct": 0.6115166951873215,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4731.340594289251,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "QES",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9469901168014375,
          "mixed_pct": 0.048784633690294066,
          "instit_pct": 0.0042252495082683765,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.34985305635144726,
          "mixed_qty_pct": 0.48983764273061536,
          "instit_qty_pct": 0.1603093009179374,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.34354367414201026,
          "mixed_notional_pct": 0.49204935142379935,
          "instit_notional_pct": 0.16440697443419036,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2627.123127170297,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "S20",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9116653070737676,
          "mixed_pct": 0.08448898729751778,
          "instit_pct": 0.003845705628714602,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4700803574962944,
          "mixed_qty_pct": 0.43975386943116396,
          "instit_qty_pct": 0.09016577307254166,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.46930240751864494,
          "mixed_notional_pct": 0.4414091239579471,
          "instit_notional_pct": 0.08928846852340791,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4549.265470224916,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5F7",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9060114503816794,
          "mixed_pct": 0.09208015267175572,
          "instit_pct": 0.0019083969465648854,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4843600147919667,
          "mixed_qty_pct": 0.4897888068215616,
          "instit_qty_pct": 0.025851178386471683,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.47058442996053435,
          "mixed_notional_pct": 0.49671474021942674,
          "instit_notional_pct": 0.0327008298200389,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4820.724713740458,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BEC",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8914987321500066,
          "mixed_pct": 0.10249566261844388,
          "instit_pct": 0.006005605231549446,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4150824461698551,
          "mixed_qty_pct": 0.48544184743456337,
          "instit_qty_pct": 0.09947570639558152,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4156196623921792,
          "mixed_notional_pct": 0.4847164789284648,
          "instit_notional_pct": 0.09966385867935601,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5725.99372747898,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "KUO",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8818138494812859,
          "mixed_pct": 0.10858169287730489,
          "instit_pct": 0.009604457641409143,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.31160609374781173,
          "mixed_qty_pct": 0.5308403496273125,
          "instit_qty_pct": 0.15755355662487575,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3025776008980072,
          "mixed_notional_pct": 0.5276771584709811,
          "instit_notional_pct": 0.16974524063101173,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5595.02406979728,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5TP",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8171423562971109,
          "mixed_pct": 0.15548756195120397,
          "instit_pct": 0.027370081751685232,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2130754280720848,
          "mixed_qty_pct": 0.47385996598727487,
          "instit_qty_pct": 0.31306460594064034,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.20807810992203102,
          "mixed_notional_pct": 0.4763705182846042,
          "instit_notional_pct": 0.3155513717933648,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9680.824456980765,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "P52",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7947598253275109,
            "mixed_pct": 0.20087336244541484,
            "instit_pct": 0.004366812227074236,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.33486108294463596,
            "mixed_qty_pct": 0.5989048874467654,
            "instit_qty_pct": 0.06623402960859866,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.33515605977549684,
            "mixed_notional_pct": 0.5982757969653922,
            "instit_notional_pct": 0.06656814325911092,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8384.355895196506,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "QES",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.983739837398374,
            "mixed_pct": 0.016260162601626018,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6204933586337761,
            "mixed_qty_pct": 0.3795066413662239,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6197798315654592,
            "mixed_notional_pct": 0.38022016843454076,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1357.7926829268292,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "A7RU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9781542576905929,
            "mixed_pct": 0.013820775746767721,
            "instit_pct": 0.008024966562639322,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2776289639678562,
            "mixed_qty_pct": 0.14455197442322648,
            "instit_qty_pct": 0.5778190616089173,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27856067863861717,
            "mixed_notional_pct": 0.14467088955275942,
            "instit_notional_pct": 0.5767684318086235,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2627.904146232724,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NC2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9473684210526315,
            "mixed_pct": 0.05263157894736842,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.617046818727491,
            "mixed_qty_pct": 0.382953181272509,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6215860541412195,
            "mixed_notional_pct": 0.3784139458587806,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2839.5526315789475,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BEC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.92,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.013333333333333334,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.37659033078880405,
            "mixed_qty_pct": 0.42748091603053434,
            "instit_qty_pct": 0.19592875318066158,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3772516193105857,
            "mixed_notional_pct": 0.4277872059457483,
            "instit_notional_pct": 0.19496117474366595,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4886.8533333333335,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8961038961038961,
            "mixed_pct": 0.1038961038961039,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5073552183338494,
            "mixed_qty_pct": 0.4926447816661505,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5069188187554975,
            "mixed_notional_pct": 0.49308118124450245,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4153.268831168832,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S20",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8775510204081632,
            "mixed_pct": 0.12244897959183673,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3064853556485356,
            "mixed_qty_pct": 0.6935146443514645,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3080518938244783,
            "mixed_notional_pct": 0.6919481061755217,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6256.102040816327,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5TP",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8188647746243739,
            "mixed_pct": 0.1652754590984975,
            "instit_pct": 0.015859766277128547,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27055224601513445,
            "mixed_qty_pct": 0.525020125583642,
            "instit_qty_pct": 0.20442762840122364,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27016986212732014,
            "mixed_notional_pct": 0.5239438737767412,
            "instit_notional_pct": 0.20588626409593858,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7626.680300500835,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "P52",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8569168173598554,
            "mixed_pct": 0.1306509945750452,
            "instit_pct": 0.012432188065099457,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.33661286386279565,
            "mixed_qty_pct": 0.4898814679408345,
            "instit_qty_pct": 0.17350566819636987,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3360462494953035,
            "mixed_notional_pct": 0.4899605629746737,
            "instit_notional_pct": 0.17399318753002277,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7057.913878842676,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "QES",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9790501553484243,
            "mixed_pct": 0.02068353306702175,
            "instit_pct": 0.0002663115845539281,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5709477421830572,
            "mixed_qty_pct": 0.4079142644468383,
            "instit_qty_pct": 0.02113799337010444,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5697305159655712,
            "mixed_notional_pct": 0.4096178985881075,
            "instit_notional_pct": 0.020651585446321303,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1270.3419884598313,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "A7RU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9590682196339434,
            "mixed_pct": 0.028910149750415972,
            "instit_pct": 0.0120216306156406,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21010649032161977,
            "mixed_qty_pct": 0.23782876392665225,
            "instit_qty_pct": 0.552064745751728,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21037048042928344,
            "mixed_notional_pct": 0.23725531458762278,
            "instit_notional_pct": 0.5523742049830938,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3756.5946547420963,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NC2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9483695652173914,
            "mixed_pct": 0.051630434782608696,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7437132784958872,
            "mixed_qty_pct": 0.2562867215041128,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7493735382421981,
            "mixed_notional_pct": 0.2506264617578019,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4132.183423913043,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S20",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9448909299655568,
            "mixed_pct": 0.0539609644087256,
            "instit_pct": 0.001148105625717566,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5887831718920158,
            "mixed_qty_pct": 0.3811256949618846,
            "instit_qty_pct": 0.030091133146099618,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5892283799270803,
            "mixed_notional_pct": 0.38127418244418204,
            "instit_notional_pct": 0.02949743762873762,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3291.9242250287025,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BEC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9108858057630737,
            "mixed_pct": 0.08537886872998933,
            "instit_pct": 0.003735325506937033,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.48077651515151515,
            "mixed_qty_pct": 0.4570075757575758,
            "instit_qty_pct": 0.06221590909090909,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4800813552306679,
            "mixed_notional_pct": 0.45636883561719466,
            "instit_notional_pct": 0.06354980915213745,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5074.39007470651,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9034774560359645,
            "mixed_pct": 0.0909691921195293,
            "instit_pct": 0.005553351844506148,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36058454115317434,
            "mixed_qty_pct": 0.5359198657523749,
            "instit_qty_pct": 0.10349559309445071,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3589283200823121,
            "mixed_notional_pct": 0.5359637997839825,
            "instit_notional_pct": 0.10510788013370531,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4560.921221737406,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5F7",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8815566835871405,
            "mixed_pct": 0.116751269035533,
            "instit_pct": 0.001692047377326565,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.468440153797248,
            "mixed_qty_pct": 0.5046592038671329,
            "instit_qty_pct": 0.0269006423356191,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4631995408007963,
            "mixed_notional_pct": 0.5133050347058821,
            "instit_notional_pct": 0.023495424493321725,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6142.968020304569,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5TP",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7833569775255731,
            "mixed_pct": 0.19230194877921303,
            "instit_pct": 0.02434107369521392,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20035666473514896,
            "mixed_qty_pct": 0.5388859472096229,
            "instit_qty_pct": 0.2607573880552281,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19984562538331535,
            "mixed_notional_pct": 0.5360642541164692,
            "instit_notional_pct": 0.2640901205002154,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10053.642313148659,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "P52",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9019545694664554,
            "mixed_pct": 0.09054410987849974,
            "instit_pct": 0.0075013206550449026,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.40339048408354483,
            "mixed_qty_pct": 0.4584549153673936,
            "instit_qty_pct": 0.1381546005490616,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3945579475337216,
            "mixed_notional_pct": 0.4630814228164693,
            "instit_notional_pct": 0.1423606296498091,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5089.8146856840995,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "QES",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9609688805939871,
            "mixed_pct": 0.03598815271635493,
            "instit_pct": 0.0030429666896579707,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4061667198905754,
            "mixed_qty_pct": 0.44490336328002467,
            "instit_qty_pct": 0.14892991682939993,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3968141229244271,
            "mixed_notional_pct": 0.4471745532971601,
            "instit_notional_pct": 0.15601132377841279,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2107.4595894023614,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "A7RU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9551469815090202,
            "mixed_pct": 0.03067309569945774,
            "instit_pct": 0.014179922791522089,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.18107110173527732,
            "mixed_qty_pct": 0.18963247230263994,
            "instit_qty_pct": 0.6292964259620827,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18073937918023805,
            "mixed_notional_pct": 0.18865445217873378,
            "instit_notional_pct": 0.6306061686410281,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5060.756109834318,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NC2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9510309278350515,
            "mixed_pct": 0.04896907216494845,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7634884465452628,
            "mixed_qty_pct": 0.2365115534547372,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7638686811856833,
            "mixed_notional_pct": 0.23613131881431665,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3939.6134020618556,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5F7",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9127340823970037,
            "mixed_pct": 0.08689138576779026,
            "instit_pct": 0.0003745318352059925,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5291778276260094,
            "mixed_qty_pct": 0.46378985081832563,
            "instit_qty_pct": 0.0070323215556649474,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5301788770862399,
            "mixed_notional_pct": 0.46316552311290066,
            "instit_notional_pct": 0.00665559980085946,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4800.103146067416,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S20",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9071539927247532,
            "mixed_pct": 0.08903516369305386,
            "instit_pct": 0.0038108435821929674,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4762514655655809,
            "mixed_qty_pct": 0.4368978437069888,
            "instit_qty_pct": 0.08685069072743029,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4746691853176568,
            "mixed_notional_pct": 0.4393013302673687,
            "instit_notional_pct": 0.08602948441497456,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4765.097176511346,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BEC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8913535536441829,
            "mixed_pct": 0.10140334993209597,
            "instit_pct": 0.007243096423721141,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4063115700794891,
            "mixed_qty_pct": 0.4709389224811468,
            "instit_qty_pct": 0.12274950743936408,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.40701174542516877,
            "mixed_notional_pct": 0.47111407809382394,
            "instit_notional_pct": 0.1218741764810073,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5868.114078768674,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8807196339434277,
            "mixed_pct": 0.10820507487520799,
            "instit_pct": 0.011075291181364393,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.293762529435397,
            "mixed_qty_pct": 0.5208188955615382,
            "instit_qty_pct": 0.18541857500306483,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2867539649914382,
            "mixed_notional_pct": 0.5187311200606013,
            "instit_notional_pct": 0.19451491494796047,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5695.289111896839,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5TP",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.809822164008804,
            "mixed_pct": 0.16422485382880753,
            "instit_pct": 0.025952982162388432,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.20566067418645043,
            "mixed_qty_pct": 0.4979594577688928,
            "instit_qty_pct": 0.29637986804465677,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2013564373713206,
            "mixed_notional_pct": 0.4989510565827021,
            "instit_notional_pct": 0.29969250604597725,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9552.667229296352,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "P52",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9283450997832009,
            "mixed_pct": 0.0663738951581522,
            "instit_pct": 0.005281005058646951,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4268790348146207,
            "mixed_qty_pct": 0.4377802495423469,
            "instit_qty_pct": 0.1353407156430324,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4182152032107059,
            "mixed_notional_pct": 0.44350173510721197,
            "instit_notional_pct": 0.1382830616820821,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3911.146367224415,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NC2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9569789674952199,
            "mixed_pct": 0.043021032504780114,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7976679831278042,
            "mixed_qty_pct": 0.2023320168721958,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7941711158383687,
            "mixed_notional_pct": 0.20582888416163125,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3922.0353728489486,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "A7RU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9562214656039619,
            "mixed_pct": 0.030681730248394337,
            "instit_pct": 0.013096804147643736,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.19093660730968062,
            "mixed_qty_pct": 0.20000698978426487,
            "instit_qty_pct": 0.6090564029060546,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19000132365681177,
            "mixed_notional_pct": 0.1984819811558667,
            "instit_notional_pct": 0.6115166951873215,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4731.340594289251,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "QES",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9469901168014375,
            "mixed_pct": 0.048784633690294066,
            "instit_pct": 0.0042252495082683765,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34985305635144726,
            "mixed_qty_pct": 0.48983764273061536,
            "instit_qty_pct": 0.1603093009179374,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.34354367414201026,
            "mixed_notional_pct": 0.49204935142379935,
            "instit_notional_pct": 0.16440697443419036,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2627.123127170297,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "S20",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9116653070737676,
            "mixed_pct": 0.08448898729751778,
            "instit_pct": 0.003845705628714602,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4700803574962944,
            "mixed_qty_pct": 0.43975386943116396,
            "instit_qty_pct": 0.09016577307254166,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.46930240751864494,
            "mixed_notional_pct": 0.4414091239579471,
            "instit_notional_pct": 0.08928846852340791,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4549.265470224916,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5F7",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9060114503816794,
            "mixed_pct": 0.09208015267175572,
            "instit_pct": 0.0019083969465648854,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4843600147919667,
            "mixed_qty_pct": 0.4897888068215616,
            "instit_qty_pct": 0.025851178386471683,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.47058442996053435,
            "mixed_notional_pct": 0.49671474021942674,
            "instit_notional_pct": 0.0327008298200389,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4820.724713740458,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BEC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8914987321500066,
            "mixed_pct": 0.10249566261844388,
            "instit_pct": 0.006005605231549446,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4150824461698551,
            "mixed_qty_pct": 0.48544184743456337,
            "instit_qty_pct": 0.09947570639558152,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4156196623921792,
            "mixed_notional_pct": 0.4847164789284648,
            "instit_notional_pct": 0.09966385867935601,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5725.99372747898,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "KUO",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8818138494812859,
            "mixed_pct": 0.10858169287730489,
            "instit_pct": 0.009604457641409143,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31160609374781173,
            "mixed_qty_pct": 0.5308403496273125,
            "instit_qty_pct": 0.15755355662487575,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3025776008980072,
            "mixed_notional_pct": 0.5276771584709811,
            "instit_notional_pct": 0.16974524063101173,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5595.02406979728,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5TP",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8171423562971109,
            "mixed_pct": 0.15548756195120397,
            "instit_pct": 0.027370081751685232,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2130754280720848,
            "mixed_qty_pct": 0.47385996598727487,
            "instit_qty_pct": 0.31306460594064034,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20807810992203102,
            "mixed_notional_pct": 0.4763705182846042,
            "instit_notional_pct": 0.3155513717933648,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9680.824456980765,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "recent_trades": [],
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
        }
      },
      "classification_legend": {
        "retail": "Retail-like behavior",
        "mixed": "Mixed investor behavior",
        "institutional": "Institution-like behavior",
        "ambiguous": "Behavior seen but not clearly one type",
        "unobservable": "Not enough market evidence to classify",
        "unclear": "Unclassified (ambiguous + unobservable)"
      }
    },
    "price_moving_trades": {
      "total_trades": 17126,
      "price_moving_trades": 4721,
      "pct_price_moving": 27.566273502277237,
      "all_movers": {
        "count": 4721,
        "avg_size": 4455.095106968863,
        "median_size": 580.0,
        "retail_count": 4339,
        "mixed_count": 341,
        "institutional_count": 41,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 91.9084939631434,
        "mixed_pct": 7.223045964837958,
        "instit_pct": 0.8684600720186401,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 2373,
        "avg_size": 4203.7130214917825,
        "median_size": 585.0,
        "retail_count": 2218,
        "mixed_count": 128,
        "institutional_count": 27,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 93.46818373367046,
        "mixed_pct": 5.39401601348504,
        "instit_pct": 1.1378002528445006,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 2348,
        "avg_size": 4709.153747870528,
        "median_size": 579.9999999999999,
        "retail_count": 2121,
        "mixed_count": 213,
        "institutional_count": 14,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 90.33219761499149,
        "mixed_pct": 9.071550255536627,
        "instit_pct": 0.596252129471891,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "PanUnited",
      "mapping": {
        "ticker_to_security": "PanUnited",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 100,
        "window_days": 126
      },
      "periods": {
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.01599196622685714,
            "max_short_ratio": 0.0477292965271594,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.01834996164770033,
            "max_short_ratio": 0.22555066079295155,
            "interpretation": "Low short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06337797630912792,
            "max_short_ratio": 0.44476744186046513,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.17498553069980707,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2025-11-14",
          "short_ratio": 0.44476744186046513,
          "return_pct": -0.8928571428571397
        },
        {
          "date": "2025-12-16",
          "short_ratio": 0.40962761126248864,
          "return_pct": -0.9174311926605561
        },
        {
          "date": "2025-11-05",
          "short_ratio": 0.3831431726168568,
          "return_pct": 0.0
        },
        {
          "date": "2025-10-29",
          "short_ratio": 0.37161789066813916,
          "return_pct": 0.8771929824561431
        },
        {
          "date": "2025-11-17",
          "short_ratio": 0.3695231958762887,
          "return_pct": -2.7027027027027084
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.015848839832385535
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01331575764631838
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.028143189781525805
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.03971879813395957
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.16678131794809928
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.097753728975667
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.0760553464304651
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.007996589535707957
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.009716126281421994
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02485630811334772
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.022466401295460927
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.018238578922039814
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.015848839832385535,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01331575764631838,
            "change_pct": -15.982760964566332
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.028143189781525805,
            "change_pct": 111.35252329638938
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.03971879813395957,
            "change_pct": 41.13111712742814
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.16678131794809928,
            "change_pct": 319.9052483551894
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.097753728975667,
            "change_pct": -41.38808220349535
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.0760553464304651,
            "change_pct": -22.19698703320371
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.007996589535707957,
            "change_pct": -89.48582853012314
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.009716126281421994,
            "change_pct": 21.503376383589778
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02485630811334772,
            "change_pct": 155.82528873543936
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.022466401295460927,
            "change_pct": -9.614890542024721
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.018238578922039814,
            "change_pct": -18.81842275413862
          }
        ],
        "interpretation": "Shorts slightly building (+19% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-31",
            "short_ratio": 0.030739902299535327,
            "short_vol": 77400,
            "total_vol": 2517900,
            "close": 1.55,
            "return": -0.05487804878048774
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0009415513869776201,
            "short_vol": 1300,
            "total_vol": 1380700,
            "close": 1.64,
            "return": -0.0060606060606061
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 411900,
            "close": 1.65,
            "return": 0.012269938650306678
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1339400,
            "close": 1.63,
            "return": 0.018749999999999822
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0018920166128287956,
            "short_vol": 4100,
            "total_vol": 2167000,
            "close": 1.6,
            "return": 0.08108108108108114
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1164800,
            "close": 1.48,
            "return": 0.020689655172413834
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.014735567218409367,
            "short_vol": 14600,
            "total_vol": 990800,
            "close": 1.45,
            "return": -0.039735099337748325
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.028641171684296175,
            "short_vol": 17600,
            "total_vol": 614500,
            "close": 1.51,
            "return": 0.020270270270270396
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0029231995748073346,
            "short_vol": 1100,
            "total_vol": 376300,
            "close": 1.48,
            "return": -0.006711409395973145
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.004197271773347324,
            "short_vol": 2400,
            "total_vol": 571800,
            "close": 1.49,
            "return": 0.04929577464788748
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.03018223234624146,
            "short_vol": 5300,
            "total_vol": 175600,
            "close": 1.42,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.03339100346020761,
            "short_vol": 19300,
            "total_vol": 578000,
            "close": 1.42,
            "return": -0.006993006993006978
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.026406826568265682,
            "short_vol": 22900,
            "total_vol": 867200,
            "close": 1.43,
            "return": -0.052980132450331174
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0040879199004680376,
            "short_vol": 6900,
            "total_vol": 1687900,
            "close": 1.51,
            "return": 0.027210884353741527
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.008812902088657796,
            "short_vol": 10000,
            "total_vol": 1134700,
            "close": 1.47,
            "return": 0.0652173913043479
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.011731352038322417,
            "short_vol": 12000,
            "total_vol": 1022900,
            "close": 1.38,
            "return": -0.007194244604316502
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.012559549588566478,
            "short_vol": 11600,
            "total_vol": 923600,
            "close": 1.39,
            "return": -0.027972027972028024
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.01659919028340081,
            "short_vol": 20500,
            "total_vol": 1235000,
            "close": 1.43,
            "return": -0.01379310344827589
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.021143984220907297,
            "short_vol": 26800,
            "total_vol": 1267500,
            "close": 1.45,
            "return": 0.058394160583941535
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.007208157524613221,
            "short_vol": 4100,
            "total_vol": 568800,
            "close": 1.37,
            "return": -0.014388489208632893
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0477292965271594,
            "short_vol": 26800,
            "total_vol": 561500,
            "close": 1.39,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.044751381215469614,
            "short_vol": 32400,
            "total_vol": 724000,
            "close": 1.39,
            "return": 0.02962962962962945
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.019140746905232497,
            "short_vol": 18400,
            "total_vol": 961300,
            "close": 1.35,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1322500,
            "close": 1.32,
            "return": 0.03937007874015741
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.009920318725099601,
            "short_vol": 24900,
            "total_vol": 2510000,
            "close": 1.27,
            "return": 0.05833333333333335
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.004337539432176656,
            "short_vol": 1100,
            "total_vol": 253600,
            "close": 1.2,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.03925619834710744,
            "short_vol": 9500,
            "total_vol": 242000,
            "close": 1.2,
            "return": 0.008403361344537785
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.002536640360766629,
            "short_vol": 900,
            "total_vol": 354800,
            "close": 1.19,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.001514386673397274,
            "short_vol": 300,
            "total_vol": 198100,
            "close": 1.19,
            "return": 0.017094017094017033
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.005720823798627002,
            "short_vol": 500,
            "total_vol": 87400,
            "close": 1.17,
            "return": 0.008620689655172376
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.006265664160401002,
            "short_vol": 1000,
            "total_vol": 159600,
            "close": 1.16,
            "return": -0.008547008547008517
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.03017241379310345,
            "short_vol": 3500,
            "total_vol": 116000,
            "close": 1.17,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0058848255569567045,
            "short_vol": 1400,
            "total_vol": 237900,
            "close": 1.17,
            "return": -0.008474576271186418
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.008108108108108109,
            "short_vol": 300,
            "total_vol": 37000,
            "close": 1.18,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.007112375533428165,
            "short_vol": 500,
            "total_vol": 70300,
            "close": 1.18,
            "return": 0.01724137931034475
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.018326693227091632,
            "short_vol": 2300,
            "total_vol": 125500,
            "close": 1.16,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.036115569823434994,
            "short_vol": 4500,
            "total_vol": 124600,
            "close": 1.16,
            "return": -0.016949152542372947
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 90000,
            "close": 1.18,
            "return": 0.008547008547008517
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.02684903748733536,
            "short_vol": 5300,
            "total_vol": 197400,
            "close": 1.17,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.018422295701464336,
            "short_vol": 3900,
            "total_vol": 211700,
            "close": 1.17,
            "return": 0.01739130434782621
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.03828140908165343,
            "short_vol": 18800,
            "total_vol": 491100,
            "close": 1.15,
            "return": -0.04958677685950419
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.027359781121751026,
            "short_vol": 4000,
            "total_vol": 146200,
            "close": 1.21,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.06952185391610442,
            "short_vol": 23700,
            "total_vol": 340900,
            "close": 1.21,
            "return": -0.016260162601625994
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0017211703958691911,
            "short_vol": 500,
            "total_vol": 290500,
            "close": 1.23,
            "return": 0.016528925619834656
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0027659039476992707,
            "short_vol": 1100,
            "total_vol": 397700,
            "close": 1.21,
            "return": 0.01680672268907557
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.017340720221606647,
            "short_vol": 3130,
            "total_vol": 180500,
            "close": 1.19,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.07087529047250193,
            "short_vol": 18300,
            "total_vol": 258200,
            "close": 1.19,
            "return": -0.008333333333333304
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.01109391124871001,
            "short_vol": 4300,
            "total_vol": 387600,
            "close": 1.2,
            "return": 0.008403361344537785
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0011476664116296864,
            "short_vol": 300,
            "total_vol": 261400,
            "close": 1.19,
            "return": 0.008474576271186418
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.01486013986013986,
            "short_vol": 1700,
            "total_vol": 114400,
            "close": 1.18,
            "return": -0.01666666666666672
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.010950503723171266,
            "short_vol": 2500,
            "total_vol": 228300,
            "close": 1.2,
            "return": 0.008403361344537785
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.018005540166204988,
            "short_vol": 5200,
            "total_vol": 288800,
            "close": 1.19,
            "return": 0.0
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.01666245897500631,
            "short_vol": 6600,
            "total_vol": 396100,
            "close": 1.19,
            "return": -0.008333333333333304
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.009439305267132339,
            "short_vol": 5000,
            "total_vol": 529700,
            "close": 1.2,
            "return": 0.016949152542372836
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.004471918979350256,
            "short_vol": 3400,
            "total_vol": 760300,
            "close": 1.18,
            "return": 0.026086956521739202
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.22555066079295155,
            "short_vol": 25600,
            "total_vol": 113500,
            "close": 1.15,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 50900,
            "close": 1.15,
            "return": -0.008620689655172376
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.008083480305702528,
            "short_vol": 5500,
            "total_vol": 680400,
            "close": 1.16,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 167900,
            "close": 1.16,
            "return": 0.008695652173912993
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0010548523206751054,
            "short_vol": 200,
            "total_vol": 189600,
            "close": 1.15,
            "return": -0.017094017094017144
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.041820418204182044,
            "short_vol": 13600,
            "total_vol": 325200,
            "close": 1.17,
            "return": 0.008620689655172376
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.008643617021276596,
            "short_vol": 1300,
            "total_vol": 150400,
            "close": 1.16,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0003056234718826406,
            "short_vol": 100,
            "total_vol": 327200,
            "close": 1.16,
            "return": 0.008695652173912993
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.003219575016097875,
            "short_vol": 1000,
            "total_vol": 310600,
            "close": 1.15,
            "return": 0.017699115044247815
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0012135922330097086,
            "short_vol": 200,
            "total_vol": 164800,
            "close": 1.13,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.015779092702169626,
            "short_vol": 800,
            "total_vol": 50700,
            "close": 1.13,
            "return": -0.017391304347826098
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.013392857142857142,
            "short_vol": 2400,
            "total_vol": 179200,
            "close": 1.15,
            "return": 0.00877192982456143
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.03731958762886598,
            "short_vol": 18100,
            "total_vol": 485000,
            "close": 1.14,
            "return": 0.02702702702702675
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0024067388688327317,
            "short_vol": 1200,
            "total_vol": 498600,
            "close": 1.11,
            "return": 0.01834862385321112
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.01522140221402214,
            "short_vol": 6600,
            "total_vol": 433600,
            "close": 1.09,
            "return": -0.00909090909090915
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.1188783570300158,
            "short_vol": 30100,
            "total_vol": 253200,
            "close": 1.1,
            "return": 0.0185185185185186
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.40962761126248864,
            "short_vol": 45100,
            "total_vol": 110100,
            "close": 1.08,
            "return": -0.00917431192660556
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.02761946514686541,
            "short_vol": 6300,
            "total_vol": 228100,
            "close": 1.09,
            "return": 0.0092592592592593
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.011661807580174927,
            "short_vol": 6000,
            "total_vol": 514500,
            "close": 1.08,
            "return": 0.028571428571428692
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.0178988326848249,
            "short_vol": 6900,
            "total_vol": 385500,
            "close": 1.05,
            "return": 0.01941747572815533
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.10527754990429314,
            "short_vol": 38500,
            "total_vol": 365700,
            "close": 1.03,
            "return": 0.0
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.047691785471826204,
            "short_vol": 28100,
            "total_vol": 589200,
            "close": 1.03,
            "return": 0.01980198019801982
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0016273393002441008,
            "short_vol": 200,
            "total_vol": 122900,
            "close": 1.01,
            "return": 0.010000000000000009
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.022468251383914034,
            "short_vol": 6900,
            "total_vol": 307100,
            "close": 1.0,
            "return": -0.00990099009900991
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0005305039787798408,
            "short_vol": 100,
            "total_vol": 188500,
            "close": 1.01,
            "return": -0.009803921568627416
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0019076688286913392,
            "short_vol": 1000,
            "total_vol": 524200,
            "close": 1.02,
            "return": 0.0
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0008833922261484099,
            "short_vol": 100,
            "total_vol": 113200,
            "close": 1.02,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.010238907849829351,
            "short_vol": 1800,
            "total_vol": 175800,
            "close": 1.02,
            "return": -0.009708737864077666
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.031228784792939578,
            "short_vol": 9200,
            "total_vol": 294600,
            "close": 1.03,
            "return": -0.009615384615384581
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.31636726546906185,
            "short_vol": 31700,
            "total_vol": 100200,
            "close": 1.04,
            "return": 0.009708737864077666
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.08143547273982056,
            "short_vol": 11800,
            "total_vol": 144900,
            "close": 1.03,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.05902578796561605,
            "short_vol": 10300,
            "total_vol": 174500,
            "close": 1.03,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.0024600246002460025,
            "short_vol": 200,
            "total_vol": 81300,
            "close": 1.03,
            "return": -0.009615384615384581
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.17097791798107256,
            "short_vol": 54200,
            "total_vol": 317000,
            "close": 1.04,
            "return": -0.028037383177570097
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.01771756122980719,
            "short_vol": 3400,
            "total_vol": 191900,
            "close": 1.07,
            "return": 0.009433962264151052
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.14195183776932827,
            "short_vol": 22400,
            "total_vol": 157800,
            "close": 1.06,
            "return": 0.0
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.1061138439915671,
            "short_vol": 30200,
            "total_vol": 284600,
            "close": 1.06,
            "return": -0.01851851851851849
          },
          {
            "date": "2025-11-17",
            "short_ratio": 0.3695231958762887,
            "short_vol": 114700,
            "total_vol": 310400,
            "close": 1.08,
            "return": -0.027027027027027084
          },
          {
            "date": "2025-11-14",
            "short_ratio": 0.44476744186046513,
            "short_vol": 91800,
            "total_vol": 206400,
            "close": 1.11,
            "return": -0.008928571428571397
          },
          {
            "date": "2025-11-13",
            "short_ratio": 0.018783542039355994,
            "short_vol": 2100,
            "total_vol": 111800,
            "close": 1.12,
            "return": 0.009009009009008917
          },
          {
            "date": "2025-11-12",
            "short_ratio": 0.0225752508361204,
            "short_vol": 5400,
            "total_vol": 239200,
            "close": 1.11,
            "return": 0.0
          },
          {
            "date": "2025-11-11",
            "short_ratio": 0.252,
            "short_vol": 50400,
            "total_vol": 200000,
            "close": 1.11,
            "return": 0.0
          },
          {
            "date": "2025-11-10",
            "short_ratio": 0.15355979525360633,
            "short_vol": 33000,
            "total_vol": 214900,
            "close": 1.11,
            "return": 0.0
          },
          {
            "date": "2025-11-07",
            "short_ratio": 0.20047732696897375,
            "short_vol": 58800,
            "total_vol": 293300,
            "close": 1.11,
            "return": -0.017699115044247593
          },
          {
            "date": "2025-11-06",
            "short_ratio": 0.3140495867768595,
            "short_vol": 3800,
            "total_vol": 12100,
            "close": 1.13,
            "return": 0.008928571428571175
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "P52",
          "avg_short_ratio": 0.01834996164770033,
          "max_short_ratio": 0.22555066079295155,
          "is_target": true
        },
        {
          "ticker": "5F7",
          "avg_short_ratio": 0.00021276882617899182,
          "max_short_ratio": 0.06248927880020585,
          "is_target": false
        },
        {
          "ticker": "KUO",
          "avg_short_ratio": 0.0015883252684595164,
          "max_short_ratio": 0.05891595731599011,
          "is_target": false
        },
        {
          "ticker": "NC2",
          "avg_short_ratio": 0.0022263028989704093,
          "max_short_ratio": 0.45227272727272727,
          "is_target": false
        },
        {
          "ticker": "S20",
          "avg_short_ratio": 0.01313973110544083,
          "max_short_ratio": 0.2222222222222222,
          "is_target": false
        },
        {
          "ticker": "BEC",
          "avg_short_ratio": 0.023522228303730654,
          "max_short_ratio": 0.4350282485875706,
          "is_target": false
        },
        {
          "ticker": "5TP",
          "avg_short_ratio": 0.036256056299558706,
          "max_short_ratio": 0.26256657789613846,
          "is_target": false
        },
        {
          "ticker": "QES",
          "avg_short_ratio": 0.05106840739947273,
          "max_short_ratio": 0.5506605365768492,
          "is_target": false
        },
        {
          "ticker": "A7RU",
          "avg_short_ratio": 0.13566264882498819,
          "max_short_ratio": 0.8043244019826162,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "3M",
        "6M"
      ],
      "session": {
        "1D": {
          "opening": 0.00021118910071373558,
          "continuous": 0.9752032815636094,
          "closing": 0.016227648349896304,
          "auctions": 0.024796718436390617,
          "other": 0.0
        },
        "1M": {
          "opening": 0.005953263889464967,
          "continuous": 0.9621862294019135,
          "closing": 0.025868375631758575,
          "auctions": 0.037813770598086535,
          "other": 0.0
        },
        "3M": {
          "opening": 0.01043216493140749,
          "continuous": 0.9562708949372737,
          "closing": 0.0256099471967759,
          "auctions": 0.04372910506272631,
          "other": 0.0
        },
        "6M": {
          "opening": 0.010361281684341011,
          "continuous": 0.9449445958688152,
          "closing": 0.03499070716755903,
          "auctions": 0.05340217347143317,
          "other": 0.0016532306597516423
        }
      },
      "hhi": {
        "1D": 0.11944292823789074,
        "1M": 0.13450784997327817,
        "3M": 0.1990792476345541,
        "6M": 0.2130890883987757
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0047
        },
        {
          "time": "09:00",
          "avg_share": 0.0624
        },
        {
          "time": "09:30",
          "avg_share": 0.0856
        },
        {
          "time": "10:00",
          "avg_share": 0.0625
        },
        {
          "time": "10:30",
          "avg_share": 0.0653
        },
        {
          "time": "11:00",
          "avg_share": 0.0512
        },
        {
          "time": "11:30",
          "avg_share": 0.0501
        },
        {
          "time": "12:00",
          "avg_share": 0.1205
        },
        {
          "time": "12:30",
          "avg_share": 0.0057
        },
        {
          "time": "13:00",
          "avg_share": 0.0492
        },
        {
          "time": "13:30",
          "avg_share": 0.0488
        },
        {
          "time": "14:00",
          "avg_share": 0.0354
        },
        {
          "time": "14:30",
          "avg_share": 0.0535
        },
        {
          "time": "15:00",
          "avg_share": 0.0588
        },
        {
          "time": "15:30",
          "avg_share": 0.0528
        },
        {
          "time": "16:00",
          "avg_share": 0.0421
        },
        {
          "time": "16:30",
          "avg_share": 0.1225
        },
        {
          "time": "17:00",
          "avg_share": 0.029
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "P52",
          "auctions_pct": 5.120900940865392,
          "hhi": 0.2638109472050737,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "A7RU",
          "auctions_pct": 19.72811031591261,
          "hhi": 0.21644352074143086,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "BEC",
          "auctions_pct": 4.249455777377684,
          "hhi": 0.2654530844830992,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUO",
          "auctions_pct": 6.1292178159759905,
          "hhi": 0.4422650536382034,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "QES",
          "auctions_pct": 4.892870012657142,
          "hhi": 0.23894523118941918,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "S20",
          "auctions_pct": 5.306553441734918,
          "hhi": 0.2652767921547242,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5TP",
          "auctions_pct": 5.351447659422565,
          "hhi": 0.2076666741092879,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "5F7",
          "auctions_pct": 6.502841692682352,
          "hhi": 0.5405207942408082,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NC2",
          "auctions_pct": 3.1123036487347133,
          "hhi": 0.5958452054889792,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        }
      ]
    },
    "ofi_block": {
      "tiles_values": [
        {
          "value": "N/A",
          "note_suffix": " - Data not available in this report."
        },
        {
          "value": "N/A",
          "note_suffix": " - Correlation between daily OFI and same-day returns."
        },
        {
          "value": "Limited",
          "note_suffix": " - L2 snapshots insufficient for robust testing."
        }
      ],
      "table_rows": [
        {
          "period": "1M",
          "avg_ofi": "N/A",
          "avg_abs": "N/A",
          "interp": {
            "text": "Unavailable",
            "cls": "bg-slate-500/20 text-slate-300"
          }
        },
        {
          "period": "3M",
          "avg_ofi": "N/A",
          "avg_abs": "N/A",
          "interp": {
            "text": "Unavailable",
            "cls": "bg-slate-500/20 text-slate-300"
          }
        },
        {
          "period": "6M",
          "avg_ofi": "N/A",
          "avg_abs": "N/A",
          "interp": {
            "text": "Unavailable",
            "cls": "bg-slate-500/20 text-slate-300"
          }
        }
      ],
      "corr_value": "N/A",
      "pie": {
        "net_buy_days": null,
        "net_sell_days": null,
        "balanced_days": null
      },
      "l2_compact_text": "L2 order-book imbalance data is limited in this report.",
      "unusual_header": [
        "Date",
        "OFI%",
        "Direction",
        "Return"
      ],
      "unusual_rows": [],
      "ofi_series": {
        "rows": [],
        "window_options": [
          30,
          60,
          100
        ]
      }
    },
    "index_block": {
      "tiles": [
        {
          "title": "Market Cap Rank",
          "value": "N/A",
          "sub": "Rank data not available"
        },
        {
          "title": "Free Float",
          "value": "N/A",
          "sub": "Float data not available"
        },
        {
          "title": "Avg Daily Turnover",
          "value": "N/A",
          "sub": "Notional"
        },
        {
          "title": "Velocity",
          "value": "N/A",
          "sub": "Turnover / float"
        }
      ],
      "table_header": [
        "Index",
        "Status",
        "Notes",
        "What's Needed"
      ],
      "table_rows": [],
      "insight": "Index eligibility data not available for this security.",
      "levers_title": "How to Improve Index Eligibility",
      "levers": []
    }
  }
};

export default REPORT_DATA;
