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
      "ticker": "TKU",
      "name": "Toku Ltd",
      "marketCap": 131155488.65,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 252840000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 100127577.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 127347680.94,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68122409.4,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "532",
      "name": "DISA",
      "marketCap": 14089803.417,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 11609592.972,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "S69",
      "name": "Serial System",
      "marketCap": 61529250.152,
      "sector": "Electronics & Computer Distribution",
      "industry": "Technology"
    },
    {
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 53420610.0,
      "sector": "Semiconductors",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-31",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "131.2M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 71.86379928315412,
          "score_pca_percentile": 71.86379928315412,
          "rank_pca": 158,
          "total": 558,
          "adv_notional_sgd": 130072.5,
          "adv_volume_shares": 578100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0010137814388753756,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.028046210855191482,
          "spread_ticks": 1.261437908496732,
          "amihud": 0.0,
          "volatility": 0.42378592656177866
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5111765365076888,
          "loadings": {
            "log_adv": 0.5586638391788546,
            "log_trades": 0.513480285866176,
            "log_turnover": 0.5206338615861998,
            "neg_spread": 0.3632068597700291,
            "neg_amihud": 0.038337726586950706,
            "neg_vol": -0.14065592318389117
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
          "peer_median_adv": 6310.0,
          "peer_median_score_pca": 41.935483870967744,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.032099830270174864,
          "peer_median_spread_pct": 0.03438974159631341,
          "peer_median_spread_ticks": 2.7666666666666666,
          "peer_median_amihud": 5.271375691999859e-07,
          "peer_median_turnover_ratio": 0.00028991835814160644,
          "target_vs_peer": {
            "score_pca_delta": 29.93,
            "adv_delta_pct": 1961.4,
            "trades_delta_pct": 1433.33,
            "volatility_delta_pct": -1220.21,
            "spread_pct_delta_pct": 18.45,
            "spread_ticks_delta_pct": -54.41,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 249.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 130072.5,
            "trades": 46.0,
            "volatility": 0.42378592656177866,
            "spread_pct": 0.028046210855191482,
            "spread_ticks": 1.261437908496732,
            "amihud": 0.0,
            "turnover_ratio": 0.0010137814388753756,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.79569892473118,
            "rank_pca": 97,
            "adv": 329373.0,
            "trades": 531.0,
            "volatility": 0.19358256087827527,
            "spread_pct": 0.007213692611302121,
            "spread_ticks": 1.417560975609756,
            "amihud": 0.0,
            "turnover_ratio": 0.004927531080324532,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 11130.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.05007085498346713,
            "spread_ticks": 3.533333333333333,
            "amihud": 2.495757212738346e-06,
            "turnover_ratio": 0.0005660105737894814,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 37.992831541218635,
            "rank_pca": 347,
            "adv": 1490.0,
            "trades": 4.0,
            "volatility": 0.06419966054034973,
            "spread_pct": 0.02532790592492087,
            "spread_ticks": 3.7333333333333334,
            "amihud": 9.131169246221988e-06,
            "turnover_ratio": 1.382614249373159e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 28.85304659498208,
            "rank_pca": 398,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5985663082437274,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 6.272401433691756,
            "rank_pca": 524,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4408945686900958,
            "spread_ticks": 17.25,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 61.111111111111114,
            "rank_pca": 218,
            "adv": 28314.0,
            "trades": 13.0,
            "volatility": 0.14555417938472365,
            "spread_pct": 0.024842606772162688,
            "spread_ticks": 1.6222222222222222,
            "amihud": 5.271375691999859e-07,
            "turnover_ratio": 0.0007231787186054949,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 62.365591397849464,
            "rank_pca": 211,
            "adv": 28028.0,
            "trades": 13.0,
            "volatility": 0.42854916101679064,
            "spread_pct": 0.043451577267705946,
            "spread_ticks": 3.847826086956522,
            "amihud": 3.9642896785753787e-07,
            "turnover_ratio": 0.0013113834147679016,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
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
              "mean": 3457909.1552392067,
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
              "mean": 0.0022198446951705456,
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
              "mean": 0.10240022850175887,
              "median": 0.032099830270174864,
              "min": 0.0,
              "max": 0.42378592656177866,
              "p5": 0.0,
              "p95": 0.34321474857255235,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1281410.6875,
              "median": 6310.0,
              "min": 0.0,
              "max": 9779220.0,
              "p5": 0.0,
              "p95": 6471773.549999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15373059195400882,
              "median": 0.026687058390056174,
              "min": 0.0015745846441448808,
              "max": 0.6666666666666666,
              "p5": 0.003548272432649915,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016131582164820087,
              "median": 0.00028991835814160644,
              "min": 0.0,
              "max": 0.006384116496372948,
              "p5": 0.0,
              "p95": 0.005874311600756002,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3254985339230415e-06,
              "median": 5.662106548737246e-10,
              "min": 0.0,
              "max": 9.131169246221988e-06,
              "p5": 0.0,
              "p95": 7.80408683952526e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 460.75,
              "median": 3.0,
              "min": 0.0,
              "max": 3103.0,
              "p5": 0.0,
              "p95": 2202.7999999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 49791.875,
              "median": 6310.0,
              "min": 0.0,
              "max": 329373.0,
              "p5": 0.0,
              "p95": 224002.34999999986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 70.375,
              "median": 3.0,
              "min": 0.0,
              "max": 531.0,
              "p5": 0.0,
              "p95": 349.6999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.10398569522751741,
              "median": 0.032099830270174864,
              "min": 0.0,
              "max": 0.42854916101679064,
              "p5": 0.0,
              "p95": 0.34631085096831016,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15856476552157533,
              "median": 0.03438974159631341,
              "min": 0.007213692611302121,
              "max": 0.6666666666666666,
              "p5": 0.008206488137044873,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.300534493931895,
              "median": 2.7666666666666666,
              "min": 1.0,
              "max": 17.25,
              "p5": 1.1461463414634145,
              "p95": 12.559239130434776,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5100985992035717e-06,
              "median": 5.271375691999859e-07,
              "min": 0.0,
              "max": 9.131169246221988e-06,
              "p5": 7.928579357150758e-08,
              "p95": 7.80408683952526e-06,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009427412412476428,
              "median": 0.00028991835814160644,
              "min": 0.0,
              "max": 0.004927531080324532,
              "p5": 0.0,
              "p95": 0.0036618793973797097,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.0024114649574837888,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0024114649574837888,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 69.71326164874552,
          "score_pca_percentile": 69.71326164874552,
          "rank_pca": 170,
          "total": 558,
          "adv_notional_sgd": 105478.0,
          "adv_volume_shares": 463200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.00081228777458411,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.02723044397462999,
          "spread_ticks": 1.248062015503876,
          "amihud": 0.0,
          "volatility": 0.18702514553932562
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.515785389407579,
          "loadings": {
            "log_adv": 0.5525906886763177,
            "log_trades": 0.5096081958587739,
            "log_turnover": 0.5116380166595638,
            "neg_spread": 0.4004727734943137,
            "neg_amihud": 0.07837047140224684,
            "neg_vol": 0.08154253069673761
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
          "peer_median_adv": 8248.5,
          "peer_median_score_pca": 52.1505376344086,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.23055734168427885,
          "peer_median_spread_pct": 0.02182815204671899,
          "peer_median_spread_ticks": 1.8103070175438596,
          "peer_median_amihud": 2.2312410638795387e-07,
          "peer_median_turnover_ratio": 0.00025774509645236517,
          "target_vs_peer": {
            "score_pca_delta": 17.56,
            "adv_delta_pct": 1178.8,
            "trades_delta_pct": 609.09,
            "volatility_delta_pct": 18.88,
            "spread_pct_delta_pct": -24.75,
            "spread_ticks_delta_pct": -31.06,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 215.15
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.71326164874552,
            "rank_pca": 170,
            "adv": 105478.0,
            "trades": 39.0,
            "volatility": 0.18702514553932562,
            "spread_pct": 0.02723044397462999,
            "spread_ticks": 1.248062015503876,
            "amihud": 0.0,
            "turnover_ratio": 0.00081228777458411,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 431830.0,
            "trades": 371.0,
            "volatility": 0.21873881805792053,
            "spread_pct": 0.007830406492688735,
            "spread_ticks": 1.418703506907545,
            "amihud": 1.2668234898431595e-08,
            "turnover_ratio": 0.006427858397537864,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 51.075268817204304,
            "rank_pca": 274,
            "adv": 9000.0,
            "trades": 2.0,
            "volatility": 0.24237586531063718,
            "spread_pct": 0.02336448598130843,
            "spread_ticks": 1.6666666666666667,
            "amihud": 1.5649452269170559e-06,
            "turnover_ratio": 0.0004449768661866992,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.2258064516129,
            "rank_pca": 262,
            "adv": 7497.0,
            "trades": 9.0,
            "volatility": 0.32903715896670555,
            "spread_pct": 0.01418962498848246,
            "spread_ticks": 2.1538461538461537,
            "amihud": 1.9903468179330256e-06,
            "turnover_ratio": 7.051332671803111e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 43.727598566308245,
            "rank_pca": 315,
            "adv": 3306.6000000000004,
            "trades": 1.0,
            "volatility": 0.35747827133698257,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 3.6147344935991292e-06,
            "turnover_ratio": 5.172280935009639e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.867383512544803,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 7.078853046594983,
            "rank_pca": 519,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4,
            "spread_ticks": 15.666666666666666,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 68.63799283154121,
            "rank_pca": 176,
            "adv": 71576.1,
            "trades": 24.0,
            "volatility": 0.10373602880137248,
            "spread_pct": 0.0206766917293233,
            "spread_ticks": 1.434782608695652,
            "amihud": 2.0545799998800206e-07,
            "turnover_ratio": 0.0018008667251427743,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 74.19354838709677,
            "rank_pca": 145,
            "adv": 119025.0,
            "trades": 64.0,
            "volatility": 0.6388699648070965,
            "spread_pct": 0.02297961236411468,
            "spread_ticks": 1.9539473684210527,
            "amihud": 2.2312410638795387e-07,
            "turnover_ratio": 0.005630858980618669,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5107252738530391,
              "median": 0.25005542577554507,
              "min": 0.0,
              "max": 10.648943609579309,
              "p5": 0.0,
              "p95": 1.5392369975618208,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3167926.1878655776,
              "median": 7827.200000000001,
              "min": 0.0,
              "max": 257790312.0,
              "p5": 0.0,
              "p95": 16043872.500000002,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11396636148331321,
              "median": 0.033875565990273214,
              "min": 0.0003001135972839129,
              "max": 1.3614536015574303,
              "p5": 0.003690836711676727,
              "p95": 0.5544445263865101,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007897082297899137,
              "median": 0.00018268071193964944,
              "min": 0.0,
              "max": 2.6201305121613605,
              "p5": 0.0,
              "p95": 0.009808982700735346,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.010813695149275663,
              "median": 1.2775828185231596e-07,
              "min": 0.0,
              "max": 5.0,
              "p5": 0.0,
              "p95": 0.00014900406710649793,
              "count": 497
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.163082437276,
              "median": 5.0,
              "min": 0.0,
              "max": 10632.0,
              "p5": 0.0,
              "p95": 3119.3499999999963,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2129769075051268,
              "median": 0.23055734168427885,
              "min": 0.0,
              "max": 0.36916000082944295,
              "p5": 0.0,
              "p95": 0.3650713955070818,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2118175.075,
              "median": 8248.5,
              "min": 0.0,
              "max": 16388289.0,
              "p5": 0.0,
              "p95": 10803528.34999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14384002304964522,
              "median": 0.018777055484895444,
              "min": 0.0013883050371040282,
              "max": 0.6666666666666666,
              "p5": 0.003643040546558676,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023088020702650472,
              "median": 0.00025774509645236517,
              "min": 0.0,
              "max": 0.010663057387743577,
              "p5": 0.0,
              "p95": 0.009180737741171575,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0262311274847188e-06,
              "median": 1.2668234898431595e-08,
              "min": 0.0,
              "max": 3.6147344935991292e-06,
              "p5": 0.0,
              "p95": 3.127418190899297e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 501.125,
              "median": 5.5,
              "min": 0.0,
              "max": 3587.0,
              "p5": 0.0,
              "p95": 2461.3999999999983,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 80279.3375,
              "median": 8248.5,
              "min": 0.0,
              "max": 431830.0,
              "p5": 0.0,
              "p95": 322348.2499999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 58.875,
              "median": 5.5,
              "min": 0.0,
              "max": 371.0,
              "p5": 0.0,
              "p95": 263.54999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23627951341008935,
              "median": 0.23055734168427885,
              "min": 0.0,
              "max": 0.6388699648070965,
              "p5": 0.0,
              "p95": 0.5403828720925564,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1457197174348582,
              "median": 0.02182815204671899,
              "min": 0.007830406492688735,
              "max": 0.6666666666666666,
              "p5": 0.008607352159946173,
              "p95": 0.5733333333333331,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.4118266214004667,
              "median": 1.8103070175438596,
              "min": 1.0,
              "max": 15.666666666666666,
              "p5": 1.1465462274176408,
              "p95": 10.93717948717948,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0873252685319425e-06,
              "median": 2.2312410638795387e-07,
              "min": 0.0,
              "max": 3.6147344935991292e-06,
              "p5": 3.800470469529479e-09,
              "p95": 3.127418190899297e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018033496381942666,
              "median": 0.00025774509645236517,
              "min": 0.0,
              "max": 0.006427858397537864,
              "p5": 0.0,
              "p95": 0.006148908601616145,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.04255319148936165,
            "market": 0.004734262230830177,
            "sector": 0.0,
            "peers": -0.012887022397891967,
            "vs_market": -0.04728745372019183,
            "vs_sector": -0.04255319148936165,
            "vs_peers": -0.029666169091469685
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 69.53405017921148,
          "score_pca_percentile": 69.53405017921148,
          "rank_pca": 171,
          "total": 558,
          "adv_notional_sgd": 132506.75,
          "adv_volume_shares": 580000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0010171133619576507,
          "votes": 40.5,
          "trades": 40.5,
          "spread_pct": 0.025277416566792492,
          "spread_ticks": 1.178928029395319,
          "amihud": 1.3741890269888457e-07,
          "volatility": 0.3342596624243009
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5206218988891063,
          "loadings": {
            "log_adv": 0.5509525259224111,
            "log_trades": 0.5026221405050098,
            "log_turnover": 0.5097527281196977,
            "neg_spread": 0.41733160881295156,
            "neg_amihud": 0.07656989188085123,
            "neg_vol": 0.06281587515390628
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
          "peer_median_adv": 8172.5,
          "peer_median_score_pca": 49.2831541218638,
          "peer_median_trades": 5.25,
          "peer_median_volatility": 0.3347090848580725,
          "peer_median_spread_pct": 0.02189762928334088,
          "peer_median_spread_ticks": 1.8996574770258983,
          "peer_median_amihud": 3.042004542597556e-07,
          "peer_median_turnover_ratio": 0.00023843430842294814,
          "target_vs_peer": {
            "score_pca_delta": 20.25,
            "adv_delta_pct": 1521.4,
            "trades_delta_pct": 671.43,
            "volatility_delta_pct": 0.13,
            "spread_pct_delta_pct": -15.43,
            "spread_ticks_delta_pct": -37.94,
            "amihud_delta_pct": 54.83,
            "turnover_ratio_delta_pct": 326.58
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 132506.75,
            "trades": 40.5,
            "volatility": 0.3342596624243009,
            "spread_pct": 0.025277416566792492,
            "spread_ticks": 1.178928029395319,
            "amihud": 1.3741890269888457e-07,
            "turnover_ratio": 0.0010171133619576507,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 597768.5,
            "trades": 338.0,
            "volatility": 0.3351165167412242,
            "spread_pct": 0.012699403904063272,
            "spread_ticks": 1.4200900084873296,
            "amihud": 1.468361112717436e-08,
            "turnover_ratio": 0.008765732701803652,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 47.491039426523294,
            "rank_pca": 294,
            "adv": 8134.0,
            "trades": 2.5,
            "volatility": 0.5997635677306439,
            "spread_pct": 0.04601444847075457,
            "spread_ticks": 3.2666666666666666,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 0.00040047917956802925,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.075268817204304,
            "rank_pca": 274,
            "adv": 8211.0,
            "trades": 7.0,
            "volatility": 0.31171020266383487,
            "spread_pct": 0.019744062742914174,
            "spread_ticks": 3.0,
            "amihud": 1.5052191410425802e-06,
            "turnover_ratio": 7.638943727786704e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 4720.0,
            "trades": 3.5,
            "volatility": 0.3343016529749207,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 1.9722222222222223,
            "amihud": 1.3235323869320423e-06,
            "turnover_ratio": 7.30933114169027e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.4193548387096775,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 8.064516129032258,
            "rank_pca": 514,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3896551724137931,
            "spread_ticks": 15.333333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 102032.40000000001,
            "trades": 47.0,
            "volatility": 0.5426699669618578,
            "spread_pct": 0.021545102401936266,
            "spread_ticks": 1.5086929199832426,
            "amihud": 2.043052965151192e-07,
            "turnover_ratio": 0.002479626424551871,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 74.55197132616487,
            "rank_pca": 143,
            "adv": 151353.5,
            "trades": 64.5,
            "volatility": 0.9255314331751588,
            "spread_pct": 0.022250156164745495,
            "spread_ticks": 1.827092731829574,
            "amihud": 3.042004542597556e-07,
            "turnover_ratio": 0.007455299867722713,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5953138093651297,
              "median": 0.3427390712193571,
              "min": 0.0,
              "max": 14.98577085336591,
              "p5": 0.0,
              "p95": 1.7834554592361112,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3451359.0597605538,
              "median": 8417.1,
              "min": 0.0,
              "max": 264260256.0,
              "p5": 0.0,
              "p95": 14837042.599999996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11230020057626537,
              "median": 0.03462390759181312,
              "min": 0.0003015714112095303,
              "max": 1.3716475095785439,
              "p5": 0.0036697557078471904,
              "p95": 0.5517276847658632,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00804290200829525,
              "median": 0.000254803717540036,
              "min": 0.0,
              "max": 2.8294113769692175,
              "p5": 0.0,
              "p95": 0.011302305738215439,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.010473089847788046,
              "median": 1.6401506155383436e-07,
              "min": 0.0,
              "max": 5.0,
              "p5": 0.0,
              "p95": 0.0001232061536029949,
              "count": 518
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 484.74014336917566,
              "median": 5.5,
              "min": 0.0,
              "max": 11017.5,
              "p5": 0.0,
              "p95": 2997.474999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2790396721259069,
              "median": 0.3257127184483158,
              "min": 0.0,
              "max": 0.5997635677306439,
              "p5": 0.0,
              "p95": 0.5071370998843469,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1388098.03125,
              "median": 8172.5,
              "min": 0.0,
              "max": 10353444.0,
              "p5": 0.0,
              "p95": 6938957.574999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1464371511112526,
              "median": 0.022510739654853333,
              "min": 0.0013897868687551746,
              "max": 0.6666666666666666,
              "p5": 0.004420949404389359,
              "p95": 0.5697126436781608,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021596341941107463,
              "median": 0.00023843430842294814,
              "min": 0.0,
              "max": 0.008765732701803652,
              "p5": 0.0,
              "p95": 0.008128219202474026,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.134521651707735e-07,
              "median": 1.3741890269888457e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 3.716039361283001e-10,
              "p95": 1.860016446538121e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 460.0,
              "median": 5.25,
              "min": 0.0,
              "max": 3288.5,
              "p5": 0.0,
              "p95": 2255.8249999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 109027.425,
              "median": 8172.5,
              "min": 0.0,
              "max": 597768.5,
              "p5": 0.0,
              "p95": 441523.24999999977,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 57.8125,
              "median": 5.25,
              "min": 0.0,
              "max": 338.0,
              "p5": 0.0,
              "p95": 242.27499999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.381136667530955,
              "median": 0.3347090848580725,
              "min": 0.0,
              "max": 0.9255314331751588,
              "p5": 0.0,
              "p95": 0.8115126802695785,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14857815800264437,
              "median": 0.02189762928334088,
              "min": 0.010050251256281416,
              "max": 0.6666666666666666,
              "p5": 0.010977454683005065,
              "p95": 0.5697126436781608,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.666012235315296,
              "median": 1.8996574770258983,
              "min": 1.0,
              "max": 15.333333333333332,
              "p5": 1.1470315029705653,
              "p95": 11.109999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.66287617783473e-07,
              "median": 3.042004542597556e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 4.405083338152308e-09,
              "p95": 1.860016446538121e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024063276152926296,
              "median": 0.00023843430842294814,
              "min": 0.0,
              "max": 0.008765732701803652,
              "p5": 0.0,
              "p95": 0.008307081209875323,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.08163265306122458,
            "market": -0.01023507382182387,
            "sector": -0.011118684275518542,
            "peers": -0.019617453309574984,
            "vs_market": -0.07139757923940071,
            "vs_sector": -0.07051396878570604,
            "vs_peers": -0.0620151997516496
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.60931899641577,
          "score_pca_percentile": 70.60931899641577,
          "rank_pca": 165,
          "total": 558,
          "adv_notional_sgd": 161216.0,
          "adv_volume_shares": 732800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0012850701235216663,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.025405786873676804,
          "spread_ticks": 1.1720430107526882,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.48067139796429736
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5329226689912212,
          "loadings": {
            "log_adv": 0.5429531508755652,
            "log_trades": 0.49652762560203323,
            "log_turnover": 0.5009683341990003,
            "neg_spread": 0.41987249946687105,
            "neg_amihud": 0.07968078646188201,
            "neg_vol": 0.15827500610784775
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
          "peer_median_adv": 9771.75,
          "peer_median_score_pca": 52.15053763440861,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.4183777695924463,
          "peer_median_spread_pct": 0.02725208113235666,
          "peer_median_spread_ticks": 1.7537518037518036,
          "peer_median_amihud": 3.990258779851174e-07,
          "peer_median_turnover_ratio": 0.00015600999640830952,
          "target_vs_peer": {
            "score_pca_delta": 18.46,
            "adv_delta_pct": 1549.8,
            "trades_delta_pct": 607.69,
            "volatility_delta_pct": -14.89,
            "spread_pct_delta_pct": 6.77,
            "spread_ticks_delta_pct": -33.17,
            "amihud_delta_pct": 74.0,
            "turnover_ratio_delta_pct": 723.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.60931899641577,
            "rank_pca": 165,
            "adv": 161216.0,
            "trades": 46.0,
            "volatility": 0.48067139796429736,
            "spread_pct": 0.025405786873676804,
            "spread_ticks": 1.1720430107526882,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.0012850701235216663,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 534786.0,
            "trades": 305.0,
            "volatility": 0.5108571574697703,
            "spread_pct": 0.013327127878008061,
            "spread_ticks": 1.4385964912280702,
            "amihud": 3.6499536747879674e-08,
            "turnover_ratio": 0.007559398447242686,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.86021505376344,
            "rank_pca": 331,
            "adv": 4141.0,
            "trades": 1.0,
            "volatility": 0.4806376527009898,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 0.00017977065393942648,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.40501792114696,
            "rank_pca": 261,
            "adv": 10790.0,
            "trades": 8.0,
            "volatility": 0.3139265142470284,
            "spread_pct": 0.01609538002980627,
            "spread_ticks": 2.75,
            "amihud": 1.0611205432937245e-06,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 50.89605734767025,
            "rank_pca": 275,
            "adv": 8753.5,
            "trades": 5.0,
            "volatility": 0.3561178864839028,
            "spread_pct": 0.024420456556361606,
            "spread_ticks": 1.5,
            "amihud": 1.365669336393555e-06,
            "turnover_ratio": 0.00013224933887719258,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.405017921146954,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 8.960573476702509,
            "rank_pca": 509,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4183673469387756,
            "spread_ticks": 16.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 70.25089605734766,
            "rank_pca": 167,
            "adv": 128234.59999999999,
            "trades": 45.0,
            "volatility": 0.7534012868330598,
            "spread_pct": 0.02241351307454923,
            "spread_ticks": 1.551948051948052,
            "amihud": 2.0545799998800206e-07,
            "turnover_ratio": 0.002921203733033711,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 67.74193548387096,
            "rank_pca": 181,
            "adv": 95472.0,
            "trades": 29.0,
            "volatility": 0.7089418321070864,
            "spread_pct": 0.030083705708351716,
            "spread_ticks": 1.9555555555555555,
            "amihud": 3.990258779851174e-07,
            "turnover_ratio": 0.0049176878053796315,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
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
              "mean": 3639859.921975738,
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
              "mean": 0.00512925083519181,
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
              "mean": 0.30445316874579265,
              "median": 0.3350222003654656,
              "min": 0.0,
              "max": 0.5108571574697703,
              "p5": 0.0,
              "p95": 0.5002921416428547,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1900453.6875,
              "median": 9771.75,
              "min": 0.0,
              "max": 14483943.0,
              "p5": 0.0,
              "p95": 9601738.049999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15249402773357065,
              "median": 0.024913121715019207,
              "min": 0.001411732735368141,
              "max": 0.6666666666666666,
              "p5": 0.005582121035292114,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023715762252656007,
              "median": 0.00015600999640830952,
              "min": 0.0,
              "max": 0.00972625131233458,
              "p5": 0.0,
              "p95": 0.008967852809552417,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.09512477974948e-07,
              "median": 1.0373766818469451e-07,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 3.5143981253794957e-10,
              "p95": 1.5985729575321587e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 479.875,
              "median": 6.5,
              "min": 0.0,
              "max": 3474.0,
              "p5": 0.0,
              "p95": 2364.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 97772.1375,
              "median": 9771.75,
              "min": 0.0,
              "max": 534786.0,
              "p5": 0.0,
              "p95": 392493.0099999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 49.125,
              "median": 6.5,
              "min": 0.0,
              "max": 305.0,
              "p5": 0.0,
              "p95": 213.99999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3904852912302297,
              "median": 0.4183777695924463,
              "min": 0.0,
              "max": 0.7534012868330598,
              "p5": 0.0,
              "p95": 0.7378404776789691,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15570399013030264,
              "median": 0.02725208113235666,
              "min": 0.013327127878008061,
              "max": 0.6666666666666666,
              "p5": 0.014296016131137436,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8245125123414594,
              "median": 1.7537518037518036,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.1535087719298245,
              "p95": 12.059999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.808802985101812e-07,
              "median": 3.990258779851174e-07,
              "min": 0.0,
              "max": 1.6983887951629893e-06,
              "p5": 1.0949861024363904e-08,
              "p95": 1.5985729575321587e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001975022488085238,
              "median": 0.00015600999640830952,
              "min": 0.0,
              "max": 0.007559398447242686,
              "p5": 0.0,
              "p95": 0.006634799722590615,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06249999999999989,
            "market": -0.0011060770743737125,
            "sector": -0.054814727293590826,
            "peers": -0.07020285170914764,
            "vs_market": -0.061393922925626176,
            "vs_sector": -0.007685272706409063,
            "vs_peers": 0.007702851709147751
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 71.9 vs peer median 41.9 (+29.9 pts).",
        "market_comparison": "The 1D score is well above the peer median of 41.9, which supports better access than most comparable names."
      },
      "1w": {
        "liquidity": "Liquidity is still solid over the week, but it has pulled back as average volume sits 34.6% below the 1M average.",
        "market_comparison": "The 1W score remains above the peer median at 69.7 compared with 52.2, so relative standing is still healthy even as activity has eased."
      },
      "2w": {
        "liquidity": "Liquidity remains strong over two weeks, with a 2W score of 69.5 indicating access is still holding up.",
        "market_comparison": "The 2W score is 20.3 points above the peer median, which keeps the stock in a stronger tradability position than peers."
      },
      "30d": {
        "liquidity": "Liquidity is strong on the monthly view, with a 1M score of 70.6 showing the stock is broadly accessible for its size.",
        "market_comparison": "The 1M score is 18.5 points above the peer median and the stock’s average daily volume is far above the peer median, which reinforces its stronger structural liquidity position."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 45,
      "reporting_window_days": 45,
      "available_history_days": 45,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.1787185493341981,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.9%",
          "display_range": null,
          "display_text": "17.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "share_pct",
          "value_pct": 17.9,
          "plain_english": "Market explains about 17.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4941782283224008,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "49.4%",
          "display_range": null,
          "display_text": "49.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "share_pct",
          "value_pct": 49.4,
          "plain_english": "Sector explains about 49.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.327103222343401,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.7%",
          "display_range": null,
          "display_text": "32.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "share_pct",
          "value_pct": 32.7,
          "plain_english": "Company-specific explains about 32.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.17623395485033125,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.18",
          "display_range": null,
          "display_text": "0.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.18% stock move in the same direction in this state.",
          "value_num": 0.18
        },
        "beta_stock_lag": {
          "median": -0.387252221418781,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.39",
          "display_range": null,
          "display_text": "-0.39",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "lag_beta",
          "value_num": -0.39
        },
        "beta_sector": {
          "median": -0.5924771078782165,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.59",
          "display_range": null,
          "display_text": "-0.59",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.59% stock move in the opposite direction in this state.",
          "value_num": -0.59
        },
        "beta_market_lag": {
          "median": -0.8281956607569358,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.83",
          "display_range": null,
          "display_text": "-0.83",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "lag_beta",
          "value_num": -0.83
        },
        "beta_sector_lag": {
          "median": 0.8210522636299857,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.82",
          "display_range": null,
          "display_text": "0.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "kind": "lag_beta",
          "value_num": 0.82
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 45 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47931948471963925,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2984396411024003,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22224087417796046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
            "median": 0.5656898926629687,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2647931795787311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Market explains about 26.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1695169277583002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
            "median": 0.5379214653603349,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655406,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.0%",
              "display_range": null,
              "display_text": "23.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.0,
              "plain_english": "Market explains about 23.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.23225785396311108,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5116279069767442,
          "expected_duration_days": 5.5,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.030794281395814097,
            "low": 0.030794281395814097,
            "high": 0.030794281395814097
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4883720930232558,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 21.0,
          "volatility": {
            "median": 0.04328441598715077,
            "low": 0.04328441598715077,
            "high": 0.04328441598715077
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            18.0,
            3.0
          ],
          [
            3.0,
            18.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 45,
        "reporting_window_days": 45,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.18",
        "sector_link_display": "-0.59",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.18% stock move in the same direction in this state. This is a point estimate from 45 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.59% stock move in the opposite direction in this state. This is a point estimate from 45 trading days.",
        "stock_persistence_display": "-0.39",
        "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
        "history_limited_note": "Read is based on 45 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 49.4,
        "driver_share_display": "49.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 45 trading days relative to the 252-day target.",
        "history_days": 45,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8571428571428571,
        "effective_days": 22.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.5 days.",
        "expected_duration_days": 5.5
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
          "pct_time": 0.5116279069767442,
          "expected_duration_days": 5.5,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.030794281395814097,
            "low": 0.030794281395814097,
            "high": 0.030794281395814097
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4883720930232558,
          "expected_duration_days": 7.0,
          "current_probability": 0.0,
          "n_days_effective": 21.0,
          "volatility": {
            "median": 0.04328441598715077,
            "low": 0.04328441598715077,
            "high": 0.04328441598715077
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8571428571428571,
          0.14285714285714285
        ],
        [
          0.14285714285714285,
          0.8571428571428571
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            18.0,
            3.0
          ],
          [
            3.0,
            18.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 70.6 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "drivers": {
        "text": "Drivers: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Monthly liquidity remains strong relative to peers, but recent average volume has dropped and current buy-side depth is lighter.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "One-month performance is weak in absolute terms, although the stock has held up slightly better than peers.",
    "perf_insight": "The stock is down 6.2% over one month, compared with a 7.0% drop for peers and a 0.1% drop for the market. That leaves performance weak overall, even if relative peer performance is slightly better.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main force in the tape, pointing to trading that is being led more by the group than by company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 49.4% of price changes. Other influences are market 17.9%, and company-specific 32.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 17.9%, sector 49.4%, and company-specific 32.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 17.9%, sector 49.4%, and company-specific 32.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector explains 49.4% of the tape, while 1W average volume is 34.6% below the 1M average. That matters because broader market moves are carrying more of the trading while day-to-day access is thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves account for 49.4% of current price action.",
      "Monthly change: the pattern moved from mostly market-driven in January to mostly sector in February and March, so the current sector lead looks more like a recent shift than a settled regime."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state looks orderly on spread, but weaker recent volume and lighter bid depth make current conditions less supportive than the monthly profile.",
    "regime_badge_text": "Low Volatility",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 31, 2026 (47 trading days • 9,817 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The book is currently bid-light, with top-10 bid depth at 0.49x ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 13.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Near-term trading conditions look thinner than the monthly liquidity profile, with lighter recent volume and a less supported bid.",
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
    "intraday_insight": "Session split is open 1.1%, continuous 97.9%, and close 0.7%. Current trading concentration score is 0.253.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Displayed liquidity remains the clearer near-term watchpoint than short activity.",
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
    "exec_subtitle": "Liquidity still screens well for the stock’s size, but recent trading has pulled back and the near-term book is less supportive.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "70.6/100",
        "sub": "Peer median 52.2 (+18.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$161.2K",
        "sub": "Peer median S$9.8K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.17 ticks; peers 2.73%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is still strong for the stock’s size, with a 1M score of 70.6 versus a peer median of 52.2, but recent trading has softened: 1W average volume is 34.6% below the 1M average, top-10 bid depth is 0.49x ask depth with a 1-tick spread, sector moves account for 49.4% of the tape, and 1M return is -6.2% versus peers at -7.0% and the market at -0.1%.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.228",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.20%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.49x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-3.32% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.02% with 25.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.02% with 10.3% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 165/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.17 ticks vs peers 2.73%",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "S$161.2K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$9.8K",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "What Drives Price Changes",
          "body": "Shows whether market, sector, or company-specific factors are the main source of recent moves."
        },
        "value": "49.4",
        "suffix": "sector",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 17.9% • Company 32.7%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for size, with a 1M liquidity score of 70.6 compared with a peer median of 52.2. That keeps the stock looking accessible relative to peers.",
      "Recent trading has pulled back, with 1W average volume down 34.6% from the 1M average. That matters because day-to-day access may feel weaker than the monthly score implies.",
      "The current tape is less supportive on the buy side, with top-10 bid depth at 0.49x ask depth and sector accounting for 49.4% of trading. That matters because broader market moves are driving the stock while displayed demand is lighter."
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
      "overall": "1M liquidity is strong: score 70.6 vs peer median 52.2 (+18.5",
      "strengths": [
        "1M score 70.6 vs peer median 52.2 (+18.5 pts)."
      ],
      "concerns": [
        "1W average volume down -34.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +18.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -6.2%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -6.2% vs market -0.1%.",
        "vs_sector": "Worse than sector: -6.2% vs sector -5.5%.",
        "vs_peers": "Better than peers: -6.2% vs peers -7.0%."
      },
      "adv": {
        "insight": "ADV is S$161.2K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$161.2K vs market S$8.5K.",
        "vs_sector": "Better than sector: S$161.2K vs sector S$9.8K.",
        "vs_peers": "Better than peers: S$161.2K vs peers S$9.8K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.54% vs market 3.56%.",
        "vs_sector": "In line with sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.73%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 48.07%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 48.07% vs market 41.07%.",
        "vs_sector": "Worse than sector: 48.07% vs sector 33.50%.",
        "vs_peers": "Worse than peers: 48.07% vs peers 41.84%."
      },
      "trades": {
        "insight": "Trades is 46, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 46 vs market 6.",
        "vs_sector": "Better than sector: 46 vs sector 6.",
        "vs_peers": "Better than peers: 46 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.04e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.04e-07 vs market 1.52e-07.",
        "vs_sector": "In line with sector: 1.04e-07 vs sector 1.04e-07.",
        "vs_peers": "Better than peers: 1.04e-07 vs peers 3.99e-07."
      }
    },
    "performance": {
      "overall": "Returns look weak relative to the market, although the stock has held up slightly better than peers, falling 6.2% over one month compared with peers at -7.0% and the market at",
      "conclusion": "The move looks mixed but mainly sector-linked, with weaker recent trading activity reinforcing the pressure rather than offsetting it."
    },
    "drivers": {
      "overall": "Sector moves are driving the stock now, with the sector accounting for 49.4% of current price action. That matters because the tape is being shaped more by broader group moves than by company-specific news, which can make trading conditions move with the sector rather than with the stock alone.",
      "beta": "The current read is mixed rather than fully settled, because sector influence is now the largest driver while 1W average volume is 34.6% below the 1M average. That combination points to a market that is still taking its cue from the group, but with less trading activity behind it than the monthly picture would imply.",
      "rolling_change": "The monthly pattern had been mostly sector in February and March after a mostly market-driven January, so the current sector-led read marks a recent change in what is moving the stock. That matters because the near-term tape is being set by a different influence than the one that dominated most of the last two months."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and that matters because calmer price moves usually make access feel more predictable. The offset is that 1W average volume is down 34.6% from the 1M average, so stability in price does not fully translate into stronger day-to-day liquidity.",
      "current": "The stock is currently in a Low Volatility state, which signals a calmer market backdrop than a high-volatility phase. That matters because trading conditions may feel more orderly while this state holds.",
      "transitions": "This looks reasonably settled rather than short-lived, with a typical run length of about 5.5 days. Even so, the recent drop in average volume means the backdrop is stable but not especially deep.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.5 days."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed, with a clean 1 tick spread but a clearly lighter buy side. Top-10 bid depth is only 0.49x ask depth, which means the book does not visible support two-way access evenly right now.",
      "concern": "The clearest stress point is the thin buy side, as bid depth sits at roughly half of ask depth. With 1W average volume down 34.6% from the 1M average, that imbalance matters more for near-term access.",
      "peer_context": "The broader liquidity standing still screens well, with a 1M score of 70.6 compared with a peer median of 52.2, but the current book is less supportive than that ranking implies. In practice, the stock can look liquid for its size while still showing thinner immediate depth on the bid side."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 38.9% of trade count and 50.6% of trade value, compared with retail-like at 27.0% of count and 7.1% of value. That matters because the larger share of value sits with institution-like flow rather than smaller tickets.",
      "institutional_gap": "The read is directionally clear but not fully clean, as unclear flow still represents 20.1% of trade count.",
      "peer_comparison": "The mix appears more institution-like than retail-like, and peer comparison in the report tables shows how unusual that balance is relative to the group."
    },
    "price_moving": {
      "overall": "The price-moving signal is mixed rather than clean, even with an institution-like lean in the observed flow. Ambiguous or unclear flow is 20.1% of trade count, so the read is not fully clean. Positive and negative price-moving trade asymmetry is shown in the report tables, which helps frame whether moves are being driven more by buying or selling pressure.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture, with the average short ratio at 0.67%. That matters because the recent trading backdrop looks more influenced by weaker volume and broader market moves than by short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship",
      "trend": "Short positioning is falling, with shorts covering by 53% month on month. That reduces the chance that short activity is a separate source of pressure in the near-term tape.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.1%, continuous 97.9%, and close 0.7%. Current trading concentration score is 0.253.",
      "hhi_interpretation": "Ambiguous or unclear flow is 20.1% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity, as it captures nearly all trading activity while the open and close contribute only 1.1% and 0.7% respectively.",
      "peer_ranking": "Peer concentration comparison in the report tables shows whether this intraday liquidity profile is broader or narrower than the sector norm."
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
        "TKU",
        "ITS",
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "S69",
        "S71"
      ],
      "scores": [
        70.60931899641577,
        82.25806451612904,
        40.86021505376344,
        53.40501792114696,
        50.89605734767025,
        3.405017921146954,
        8.960573476702509,
        70.25089605734766,
        67.74193548387096
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
        161216.0,
        534786.0,
        4141.0,
        10790.0,
        8753.5,
        0.0,
        0.0,
        128234.59999999999,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.48067139796429736,
        "adv": 161216.0,
        "spread_pct": 0.025405786873676804,
        "turnover_ratio": 0.0012850701235216663,
        "amihud": 1.0373766818469451e-07,
        "trades": 46.0
      },
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
          "mean": 3639859.921975738,
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
          "mean": 0.00512925083519181,
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
          "mean": 0.30445316874579265,
          "median": 0.3350222003654656,
          "min": 0.0,
          "max": 0.5108571574697703,
          "p5": 0.0,
          "p95": 0.5002921416428547,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1900453.6875,
          "median": 9771.75,
          "min": 0.0,
          "max": 14483943.0,
          "p5": 0.0,
          "p95": 9601738.049999993,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15249402773357065,
          "median": 0.024913121715019207,
          "min": 0.001411732735368141,
          "max": 0.6666666666666666,
          "p5": 0.005582121035292114,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023715762252656007,
          "median": 0.00015600999640830952,
          "min": 0.0,
          "max": 0.00972625131233458,
          "p5": 0.0,
          "p95": 0.008967852809552417,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.09512477974948e-07,
          "median": 1.0373766818469451e-07,
          "min": 0.0,
          "max": 1.6983887951629893e-06,
          "p5": 3.5143981253794957e-10,
          "p95": 1.5985729575321587e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 479.875,
          "median": 6.5,
          "min": 0.0,
          "max": 3474.0,
          "p5": 0.0,
          "p95": 2364.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 97772.1375,
          "median": 9771.75,
          "min": 0.0,
          "max": 534786.0,
          "p5": 0.0,
          "p95": 392493.0099999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 49.125,
          "median": 6.5,
          "min": 0.0,
          "max": 305.0,
          "p5": 0.0,
          "p95": 213.99999999999986,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3904852912302297,
          "median": 0.4183777695924463,
          "min": 0.0,
          "max": 0.7534012868330598,
          "p5": 0.0,
          "p95": 0.7378404776789691,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15570399013030264,
          "median": 0.02725208113235666,
          "min": 0.013327127878008061,
          "max": 0.6666666666666666,
          "p5": 0.014296016131137436,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.8245125123414594,
          "median": 1.7537518037518036,
          "min": 1.0,
          "max": 16.4,
          "p5": 1.1535087719298245,
          "p95": 12.059999999999992,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.808802985101812e-07,
          "median": 3.990258779851174e-07,
          "min": 0.0,
          "max": 1.6983887951629893e-06,
          "p5": 1.0949861024363904e-08,
          "p95": 1.5985729575321587e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001975022488085238,
          "median": 0.00015600999640830952,
          "min": 0.0,
          "max": 0.007559398447242686,
          "p5": 0.0,
          "p95": 0.006634799722590615,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.04255319148936165,
        "market": 0.004734262230830177,
        "sector": 0.0,
        "peers": -0.012887022397891967
      },
      {
        "horizon": "2W",
        "stock": -0.08163265306122458,
        "market": -0.01023507382182387,
        "sector": -0.011118684275518542,
        "peers": -0.019617453309574984
      },
      {
        "horizon": "1M",
        "stock": -0.06249999999999989,
        "market": -0.0011060770743737125,
        "sector": -0.054814727293590826,
        "peers": -0.07020285170914764
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
      "share_market": 0.1787185493341981,
      "share_sector": 0.4941782283224008,
      "share_idio": 0.327103222343401,
      "beta_market": 0.17623395485033125,
      "beta_sector": -0.5924771078782165,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 45,
        "reporting_window_days": 45,
        "available_history_days": 45,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.1787185493341981,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.9%",
            "display_range": null,
            "display_text": "17.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "share_pct",
            "value_pct": 17.9,
            "plain_english": "Market explains about 17.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4941782283224008,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Sector explains about 49.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.327103222343401,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.7%",
            "display_range": null,
            "display_text": "32.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "share_pct",
            "value_pct": 32.7,
            "plain_english": "Company-specific explains about 32.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.17623395485033125,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.18",
            "display_range": null,
            "display_text": "0.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.18% stock move in the same direction in this state.",
            "value_num": 0.18
          },
          "beta_stock_lag": {
            "median": -0.387252221418781,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.39",
            "display_range": null,
            "display_text": "-0.39",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "lag_beta",
            "value_num": -0.39
          },
          "beta_sector": {
            "median": -0.5924771078782165,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.59",
            "display_range": null,
            "display_text": "-0.59",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.59% stock move in the opposite direction in this state.",
            "value_num": -0.59
          },
          "beta_market_lag": {
            "median": -0.8281956607569358,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.83",
            "display_range": null,
            "display_text": "-0.83",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "lag_beta",
            "value_num": -0.83
          },
          "beta_sector_lag": {
            "median": 0.8210522636299857,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.82",
            "display_range": null,
            "display_text": "0.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
            "kind": "lag_beta",
            "value_num": 0.82
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 45 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-26 to 2026-01-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47931948471963925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47931948471963925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2984396411024003,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22224087417796046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
              "median": 0.5656898926629687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2647931795787311,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Market explains about 26.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1695169277583002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5656898926629687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655406,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.0%",
                "display_range": null,
                "display_text": "23.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.0,
                "plain_english": "Market explains about 23.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.23225785396311108,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5379214653603349,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5116279069767442,
            "expected_duration_days": 5.5,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.030794281395814097,
              "low": 0.030794281395814097,
              "high": 0.030794281395814097
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4883720930232558,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 21.0,
            "volatility": {
              "median": 0.04328441598715077,
              "low": 0.04328441598715077,
              "high": 0.04328441598715077
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8571428571428571,
              0.14285714285714285
            ],
            [
              0.14285714285714285,
              0.8571428571428571
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              18.0,
              3.0
            ],
            [
              3.0,
              18.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 45,
          "reporting_window_days": 45,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.18",
          "sector_link_display": "-0.59",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.18% stock move in the same direction in this state. This is a point estimate from 45 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.59% stock move in the opposite direction in this state. This is a point estimate from 45 trading days.",
          "stock_persistence_display": "-0.39",
          "point_estimate_note": "Point estimate only because the current state has 45 trading days.",
          "history_limited_note": "Read is based on 45 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 49.4,
          "driver_share_display": "49.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 45 trading days relative to the 252-day target.",
          "history_days": 45,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8571428571428571,
          "effective_days": 22.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.5 days.",
          "expected_duration_days": 5.5
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
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
          "share_market_display": "47.9%",
          "share_sector_display": "29.8%",
          "share_company_display": "22.2%",
          "dominant_share_display": "47.9%"
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
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "ols_with_volatility_regimes",
        "n_regimes": 2,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "labels": [
          "Low Volatility",
          "High Volatility"
        ],
        "pct_time": [
          0.5116279069767442,
          0.4883720930232558
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5116279069767442,
            "expected_duration_days": 5.5,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.030794281395814097,
              "low": 0.030794281395814097,
              "high": 0.030794281395814097
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4883720930232558,
            "expected_duration_days": 7.0,
            "current_probability": 0.0,
            "n_days_effective": 21.0,
            "volatility": {
              "median": 0.04328441598715077,
              "low": 0.04328441598715077,
              "high": 0.04328441598715077
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8571428571428571,
            0.14285714285714285
          ],
          [
            0.14285714285714285,
            0.8571428571428571
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 14300.0,
          "value": 3217.5
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 422000.0,
          "value": 92840.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 406300.0,
          "value": 87354.5
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 163800.0,
          "value": 34398.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 25000.0,
          "value": 5125.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 165000.0,
          "value": 33000.0
        },
        {
          "level": 7,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 225600.0,
          "value": 51888.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 312300.0,
          "value": 73390.5
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 77000.0,
          "value": 18480.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 70500.0,
          "value": 17272.5
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 217600.0,
          "value": 54400.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 300000.0,
          "value": 76500.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 444500.0,
          "value": 115570.0
        },
        {
          "level": 8,
          "price": 0.265,
          "quantity": 200500.0,
          "value": 53132.5
        },
        {
          "level": 9,
          "price": 0.27,
          "quantity": 89000.0,
          "value": 24030.0
        },
        {
          "level": 10,
          "price": 0.275,
          "quantity": 134000.0,
          "value": 36850.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-31 08:59:47.847400",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2275,
        "spread_pct": 0.021978021978021997,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 257925.0,
        "ask_depth_notional_top10": 521513.5,
        "bid_ask_depth_ratio": 0.4946
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 69,
        "history_limited": true,
        "trade_days_used": 47,
        "n_trades_used": 9817,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-31",
        "window_label": "Jan 22, 2026 to Mar 31, 2026",
        "window_short_label": "Jan 22-Mar 31",
        "trade_days_label": "47 trading days",
        "trade_count_label": "9,817 trades",
        "window_detail_label": "47 trading days • 9,817 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 31, 2026 (47 trading days • 9,817 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9659.0,
            "impact_pct": -0.025755,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 3.74,
            "pct_of_adv": 6.2
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.027912,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.33,
            "pct_of_adv": 8.83
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 105169.98,
            "impact_pct": -0.034256,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 40.78,
            "pct_of_adv": 67.53
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
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-30 22:59:01.528500000",
            "local_timestamp": "2026-03-31 06:59:01",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.031730999999999995,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.71,
            "price_vs_mid_pct": 23.077,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8123765301325001728",
            "timestamp": "2026-03-30 22:59:01.528500000",
            "local_timestamp": "2026-03-31 06:59:01",
            "posted_price": 0.3,
            "size_shares": 140000.0,
            "notional": 42000.0,
            "impact_pct": -0.031318,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 16.28,
            "price_vs_mid_pct": 31.868,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8126536070628204544",
            "timestamp": "2026-03-30 22:59:01.528500000",
            "local_timestamp": "2026-03-31 06:59:01",
            "posted_price": 0.365,
            "size_shares": 100000.0,
            "notional": 36500.0,
            "impact_pct": -0.031069,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.15,
            "price_vs_mid_pct": 60.44,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-31",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 230184.5,
            "ask_depth_notional": 470366.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 242218.5,
            "ask_depth_notional": 462941.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 244858.5,
            "ask_depth_notional": 462941.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 240678.5,
            "ask_depth_notional": 462941.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 245521.5,
            "ask_depth_notional": 500851.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.04444444444444448,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 256806.5,
            "ask_depth_notional": 504286.5,
            "mid_price": 0.225
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 292556.5,
            "ask_depth_notional": 505766.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 267704.5,
            "ask_depth_notional": 475894.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 270124.5,
            "ask_depth_notional": 496064.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.04444444444444448,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 263846.5,
            "ask_depth_notional": 527947.5,
            "mid_price": 0.225
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 280026.5,
            "ask_depth_notional": 533927.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 267876.5,
            "ask_depth_notional": 533927.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 257925.0,
            "ask_depth_notional": 521513.5,
            "mid_price": 0.2275
          }
        ],
        "summary": {
          "median_spread_pct": 0.02247191011235957,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 257925.0,
          "median_ask_depth_notional": 500851.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "13:00",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 32.1,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 189.5
        },
        {
          "ticker": "S69",
          "pct": 882.7
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "LVR",
          "pct": 8484.6
        },
        {
          "ticker": "U77",
          "pct": 13742.4
        },
        {
          "ticker": "NXR",
          "pct": 18264.8
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 46,
          "n_runs": 29,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-31",
          "last_trade_date": "2026-03-31",
          "period_days": 1,
          "method": {
            "key": "persona_v3_2b",
            "name": "Behavioral persona classification",
            "version": "3.2b",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.2826086956521739,
            "mixed_pct": 0.08695652173913043,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.13043478260869565,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13043478260869565,
            "retail_qty_pct": 0.1705587268638644,
            "mixed_qty_pct": 0.1731534336619962,
            "instit_qty_pct": 0.4770800899498357,
            "ambiguous_qty_pct": 0.17920774952430377,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17920774952430377,
            "retail_notional_pct": 0.17004827201569322,
            "mixed_notional_pct": 0.17325999576898668,
            "instit_notional_pct": 0.47737369463622903,
            "ambiguous_notional_pct": 0.1793180375790911,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1793180375790911
          },
          "run_composition": {
            "retail_pct": 0.41379310344827586,
            "mixed_pct": 0.13793103448275862,
            "instit_pct": 0.27586206896551724,
            "ambiguous_pct": 0.1724137931034483,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1724137931034483,
            "retail_notional_pct": 0.17004827201569322,
            "mixed_notional_pct": 0.17325999576898668,
            "instit_notional_pct": 0.47737369463622903,
            "unclear_notional_pct": 0.1793180375790911
          },
          "counts": {
            "trades": {
              "retail": 13,
              "mixed": 4,
              "institutional": 23,
              "ambiguous": 6,
              "unobservable": 0,
              "unclear": 6
            },
            "runs": {
              "retail": 12,
              "mixed": 4,
              "institutional": 8,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6896551724137931,
            "na": 0.3103448275862069
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 20,
            "na": 9
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.782608695652174,
            "na": 0.21739130434782608
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 36,
            "na": 10
          },
          "observability": {
            "avg_feature_coverage": 0.8758620689655173,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1724137931034483,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.41379310344827586,
          "dominance_gap": 0.13793103448275862,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 32,
              "MULTI_FILL_SINGLE_PRICE": 14
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 29,
              "PERSISTENT_POSITIVE_IMPACT": 17
            },
            "d3_urgency": {
              "IMMEDIATE": 29
            },
            "participant_confidence": {
              "LOW": 20,
              "NA": 9
            }
          },
          "trade_size": {
            "avg": 2825.9239130434785,
            "median": 2250.0
          },
          "run_size": {
            "avg": 4482.5,
            "median": 4500.0,
            "avg_length": 1.3103448275862069
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-31T08:29:14.951700",
              "price": 0.225,
              "size": 4500.0,
              "notional": 1012.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 2900.0,
              "notional": 652.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 6600.0,
              "notional": 1485.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-31T08:29:14.860600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-31T08:27:59.277100",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1507,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-31T07:43:48.350100",
              "price": 0.23,
              "size": 4000.0,
              "notional": 920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1506,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 3400.0,
              "notional": 765.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 13600.0,
              "notional": 3060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-31T07:28:47.858500",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-31T07:28:47.828300",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-31T07:28:43.577700",
              "price": 0.225,
              "size": 11700.0,
              "notional": 2632.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-31T07:28:07.134900",
              "price": 0.225,
              "size": 3600.0,
              "notional": 810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 6400.0,
              "notional": 1440.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-31T07:22:50.994400",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1502,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-31T07:22:04.730200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1501,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-31T07:17:09.522100",
              "price": 0.225,
              "size": 1400.0,
              "notional": 315.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1500,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-31T07:16:57.473000",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-31T07:16:57.412900",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-31T07:00:00.008700",
              "price": 0.225,
              "size": 8700.0,
              "notional": 1957.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1498,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-31T06:56:10.742100",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1497,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 7400.0,
              "notional": 1665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-31T06:43:39.421900",
              "price": 0.225,
              "size": 1900.0,
              "notional": 427.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1495,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-31T06:43:39.421800",
              "price": 0.225,
              "size": 20700.0,
              "notional": 4657.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1494,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-31T06:43:31.919500",
              "price": 0.225,
              "size": 9300.0,
              "notional": 2092.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1493,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-31T06:28:59.291200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1492,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-31T06:24:27.936000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-31T06:24:27.875500",
              "price": 0.225,
              "size": 29000.0,
              "notional": 6525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-31T06:03:47.594600",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1490,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2826086956521739,
              "mixed_pct": 0.08695652173913043,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.13043478260869565,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13043478260869565,
              "retail_qty_pct": 0.1705587268638644,
              "mixed_qty_pct": 0.1731534336619962,
              "instit_qty_pct": 0.4770800899498357,
              "ambiguous_qty_pct": 0.17920774952430377,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.17920774952430377,
              "retail_notional_pct": 0.17004827201569322,
              "mixed_notional_pct": 0.17325999576898668,
              "instit_notional_pct": 0.47737369463622903,
              "ambiguous_notional_pct": 0.1793180375790911,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1793180375790911,
              "run_retail_pct": 0.41379310344827586,
              "run_mixed_pct": 0.13793103448275862,
              "run_instit_pct": 0.27586206896551724,
              "run_unclear_pct": 0.1724137931034483,
              "avg_trade_size": 2825.9239130434785,
              "avg_run_notional": 4482.5,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6896551724137931,
              "na_confidence_pct": 0.3103448275862069,
              "avg_feature_coverage": 0.8758620689655173,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 1.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 1.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 1.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 1.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 5565.0,
              "avg_run_notional": 11130.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.75,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.75,
              "ambiguous_qty_pct": 0.25,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7508417508417509,
              "ambiguous_notional_pct": 0.24915824915824916,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24915824915824916,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6666666666666666,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 371.25,
              "avg_run_notional": 495.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3333333333333333,
              "mixed_pct": 0.0,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.16666666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16666666666666666,
              "retail_qty_pct": 0.10586319218241043,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6742671009771987,
              "ambiguous_qty_pct": 0.21986970684039087,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.21986970684039087,
              "retail_notional_pct": 0.10466944566330262,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6805982155916338,
              "ambiguous_notional_pct": 0.21473233874506362,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.21473233874506362,
              "run_retail_pct": 0.4444444444444444,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.2222222222222222,
              "avg_trade_size": 2279.0,
              "avg_run_notional": 3038.6666666666665,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7777777777777778,
              "na_confidence_pct": 0.2222222222222222,
              "avg_feature_coverage": 0.7999999999999999,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3076923076923077,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.3076923076923077,
              "ambiguous_pct": 0.3076923076923077,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3076923076923077,
              "retail_qty_pct": 0.04079254079254079,
              "mixed_qty_pct": 0.046620046620046623,
              "instit_qty_pct": 0.6223776223776224,
              "ambiguous_qty_pct": 0.2902097902097902,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2902097902097902,
              "retail_notional_pct": 0.04115859109601287,
              "mixed_notional_pct": 0.04720185946719113,
              "instit_notional_pct": 0.6205971750402288,
              "ambiguous_notional_pct": 0.29104237439656716,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.29104237439656716,
              "run_retail_pct": 0.36363636363636365,
              "run_mixed_pct": 0.09090909090909091,
              "run_instit_pct": 0.18181818181818182,
              "run_unclear_pct": 0.36363636363636365,
              "avg_trade_size": 2151.153846153846,
              "avg_run_notional": 2542.2727272727275,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5454545454545454,
              "na_confidence_pct": 0.45454545454545453,
              "avg_feature_coverage": 0.7954545454545454,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3231357552581262,
              "mixed_pct": 0.3403441682600382,
              "instit_pct": 0.1931166347992352,
              "ambiguous_pct": 0.14340344168260039,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14340344168260039,
              "retail_qty_pct": 0.08487420430433465,
              "mixed_qty_pct": 0.22612913003940588,
              "instit_qty_pct": 0.5659290694149742,
              "ambiguous_qty_pct": 0.12306759624128524,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12306759624128524,
              "retail_notional_pct": 0.08515327280662657,
              "mixed_notional_pct": 0.22635980747016976,
              "instit_notional_pct": 0.5655509786110524,
              "ambiguous_notional_pct": 0.12293594111215125,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12293594111215125,
              "run_retail_pct": 0.5800711743772242,
              "run_mixed_pct": 0.26334519572953735,
              "run_instit_pct": 0.07473309608540925,
              "run_unclear_pct": 0.08185053380782918,
              "avg_trade_size": 619.9034416826004,
              "avg_run_notional": 1153.7704626334519,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.4555160142348754,
              "low_confidence_pct": 0.199288256227758,
              "na_confidence_pct": 0.34519572953736655,
              "avg_feature_coverage": 0.890035587188612,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 187,
          "n_runs": 109,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-25",
          "last_trade_date": "2026-03-31",
          "period_days": 5,
          "method": {
            "key": "persona_v3_2b",
            "name": "Behavioral persona classification",
            "version": "3.2b",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.2994652406417112,
            "mixed_pct": 0.10160427807486631,
            "instit_pct": 0.44385026737967914,
            "ambiguous_pct": 0.15508021390374332,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15508021390374332,
            "retail_qty_pct": 0.11225753198514239,
            "mixed_qty_pct": 0.13140734626496078,
            "instit_qty_pct": 0.5045398266611638,
            "ambiguous_qty_pct": 0.251795295088733,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.251795295088733,
            "retail_notional_pct": 0.11211948418917422,
            "mixed_notional_pct": 0.13132346772187184,
            "instit_notional_pct": 0.5055496334445319,
            "ambiguous_notional_pct": 0.2510074146444221,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2510074146444221
          },
          "run_composition": {
            "retail_pct": 0.47706422018348627,
            "mixed_pct": 0.11926605504587157,
            "instit_pct": 0.22018348623853212,
            "ambiguous_pct": 0.1834862385321101,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1834862385321101,
            "retail_notional_pct": 0.11211948418917422,
            "mixed_notional_pct": 0.13132346772187184,
            "instit_notional_pct": 0.5055496334445319,
            "unclear_notional_pct": 0.2510074146444221
          },
          "counts": {
            "trades": {
              "retail": 56,
              "mixed": 19,
              "institutional": 83,
              "ambiguous": 29,
              "unobservable": 0,
              "unclear": 29
            },
            "runs": {
              "retail": 52,
              "mixed": 13,
              "institutional": 24,
              "ambiguous": 20,
              "unobservable": 0,
              "unclear": 20
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6972477064220184,
            "na": 0.30275229357798167
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 76,
            "na": 33
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7433155080213903,
            "na": 0.25668449197860965
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 139,
            "na": 48
          },
          "observability": {
            "avg_feature_coverage": 0.8555045871559632,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1834862385321101,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.47706422018348627,
          "dominance_gap": 0.25688073394495414,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 112,
              "MULTI_FILL_SINGLE_PRICE": 75
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 142,
              "PERSISTENT_POSITIVE_IMPACT": 42,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 109
            },
            "participant_confidence": {
              "LOW": 76,
              "NA": 33
            }
          },
          "trade_size": {
            "avg": 2944.743315508021,
            "median": 2092.5
          },
          "run_size": {
            "avg": 5051.9908256880735,
            "median": 3375.0,
            "avg_length": 1.2844036697247707
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-31T08:29:14.951700",
              "price": 0.225,
              "size": 4500.0,
              "notional": 1012.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 2900.0,
              "notional": 652.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 6600.0,
              "notional": 1485.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-31T08:29:14.860600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-31T08:27:59.277100",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1507,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-31T07:43:48.350100",
              "price": 0.23,
              "size": 4000.0,
              "notional": 920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1506,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 3400.0,
              "notional": 765.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 13600.0,
              "notional": 3060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-31T07:28:47.858500",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-31T07:28:47.828300",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-31T07:28:43.577700",
              "price": 0.225,
              "size": 11700.0,
              "notional": 2632.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-31T07:28:07.134900",
              "price": 0.225,
              "size": 3600.0,
              "notional": 810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 6400.0,
              "notional": 1440.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-31T07:22:50.994400",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1502,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-31T07:22:04.730200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1501,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-31T07:17:09.522100",
              "price": 0.225,
              "size": 1400.0,
              "notional": 315.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1500,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-31T07:16:57.473000",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-31T07:16:57.412900",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-31T07:00:00.008700",
              "price": 0.225,
              "size": 8700.0,
              "notional": 1957.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1498,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-31T06:56:10.742100",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1497,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 7400.0,
              "notional": 1665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-31T06:43:39.421900",
              "price": 0.225,
              "size": 1900.0,
              "notional": 427.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1495,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-31T06:43:39.421800",
              "price": 0.225,
              "size": 20700.0,
              "notional": 4657.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1494,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-31T06:43:31.919500",
              "price": 0.225,
              "size": 9300.0,
              "notional": 2092.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1493,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-31T06:28:59.291200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1492,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-31T06:24:27.936000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-31T06:24:27.875500",
              "price": 0.225,
              "size": 29000.0,
              "notional": 6525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-31T06:03:47.594600",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1490,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2994652406417112,
              "mixed_pct": 0.10160427807486631,
              "instit_pct": 0.44385026737967914,
              "ambiguous_pct": 0.15508021390374332,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15508021390374332,
              "retail_qty_pct": 0.11225753198514239,
              "mixed_qty_pct": 0.13140734626496078,
              "instit_qty_pct": 0.5045398266611638,
              "ambiguous_qty_pct": 0.251795295088733,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.251795295088733,
              "retail_notional_pct": 0.11211948418917422,
              "mixed_notional_pct": 0.13132346772187184,
              "instit_notional_pct": 0.5055496334445319,
              "ambiguous_notional_pct": 0.2510074146444221,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2510074146444221,
              "run_retail_pct": 0.47706422018348627,
              "run_mixed_pct": 0.11926605504587157,
              "run_instit_pct": 0.22018348623853212,
              "run_unclear_pct": 0.1834862385321101,
              "avg_trade_size": 2944.743315508021,
              "avg_run_notional": 5051.9908256880735,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6972477064220184,
              "na_confidence_pct": 0.30275229357798167,
              "avg_feature_coverage": 0.8555045871559632,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25084745762711863,
              "mixed_pct": 0.0847457627118644,
              "instit_pct": 0.33559322033898303,
              "ambiguous_pct": 0.3288135593220339,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3288135593220339,
              "retail_qty_pct": 0.04183139905624283,
              "mixed_qty_pct": 0.02008672363218977,
              "instit_qty_pct": 0.6341027930110955,
              "ambiguous_qty_pct": 0.3039790843004719,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3039790843004719,
              "retail_notional_pct": 0.04169506767554688,
              "mixed_notional_pct": 0.019818653591701367,
              "instit_notional_pct": 0.6355093279414376,
              "ambiguous_notional_pct": 0.30297695079131415,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.30297695079131415,
              "run_retail_pct": 0.4,
              "run_mixed_pct": 0.05,
              "run_instit_pct": 0.21666666666666667,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2367.227118644068,
              "avg_run_notional": 3879.6222222222223,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.011111111111111112,
              "medium_confidence_pct": 0.25,
              "low_confidence_pct": 0.35555555555555557,
              "na_confidence_pct": 0.38333333333333336,
              "avg_feature_coverage": 0.8416666666666666,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.306158357771261,
              "mixed_pct": 0.20175953079178885,
              "instit_pct": 0.3249266862170088,
              "ambiguous_pct": 0.16715542521994134,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16715542521994134,
              "retail_qty_pct": 0.056986004793937985,
              "mixed_qty_pct": 0.11830201809324982,
              "instit_qty_pct": 0.5792932807546586,
              "ambiguous_qty_pct": 0.24541869635815355,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24541869635815355,
              "retail_notional_pct": 0.05693789805166503,
              "mixed_notional_pct": 0.11916676740535867,
              "instit_notional_pct": 0.5791501469811583,
              "ambiguous_notional_pct": 0.24474518756181804,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24474518756181804,
              "run_retail_pct": 0.6157635467980296,
              "run_mixed_pct": 0.16995073891625614,
              "run_instit_pct": 0.11330049261083744,
              "run_unclear_pct": 0.10098522167487685,
              "avg_trade_size": 1506.46715542522,
              "avg_run_notional": 3163.2099753694583,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.16625615763546797,
              "medium_confidence_pct": 0.41379310344827586,
              "low_confidence_pct": 0.14901477832512317,
              "na_confidence_pct": 0.270935960591133,
              "avg_feature_coverage": 0.8760467980295565,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.19047619047619047,
              "instit_pct": 0.38095238095238093,
              "ambiguous_pct": 0.42857142857142855,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.42857142857142855,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.1821983273596177,
              "instit_qty_pct": 0.517921146953405,
              "ambiguous_qty_pct": 0.2998805256869773,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2998805256869773,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.18206880879336435,
              "instit_notional_pct": 0.5184759922735129,
              "ambiguous_notional_pct": 0.29945519893312283,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.29945519893312283,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.36363636363636365,
              "run_instit_pct": 0.2727272727272727,
              "run_unclear_pct": 0.36363636363636365,
              "avg_trade_size": 1592.5428571428572,
              "avg_run_notional": 3040.309090909091,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2727272727272727,
              "na_confidence_pct": 0.7272727272727273,
              "avg_feature_coverage": 0.85,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.0,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.375,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.375,
              "retail_qty_pct": 0.012835472578763127,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.4982497082847141,
              "ambiguous_qty_pct": 0.48891481913652274,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.48891481913652274,
              "retail_notional_pct": 0.012866286052748482,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.4953684660820349,
              "ambiguous_notional_pct": 0.4917652478652166,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4917652478652166,
              "run_retail_pct": 0.2857142857142857,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2857142857142857,
              "run_unclear_pct": 0.42857142857142855,
              "avg_trade_size": 3798.6875,
              "avg_run_notional": 4341.357142857143,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5714285714285714,
              "na_confidence_pct": 0.42857142857142855,
              "avg_feature_coverage": 0.8285714285714286,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23684210526315788,
              "mixed_pct": 0.07894736842105263,
              "instit_pct": 0.42105263157894735,
              "ambiguous_pct": 0.18421052631578946,
              "unobservable_pct": 0.07894736842105263,
              "unclear_pct": 0.2631578947368421,
              "retail_qty_pct": 0.1339764201500536,
              "mixed_qty_pct": 0.22615219721329047,
              "instit_qty_pct": 0.4480171489817792,
              "ambiguous_qty_pct": 0.1564844587352626,
              "unobservable_qty_pct": 0.03536977491961415,
              "unclear_qty_pct": 0.19185423365487675,
              "retail_notional_pct": 0.13425401527693068,
              "mixed_notional_pct": 0.2267433417559757,
              "instit_notional_pct": 0.44865092503848275,
              "ambiguous_notional_pct": 0.15529609944526734,
              "unobservable_notional_pct": 0.0350556184833435,
              "unclear_notional_pct": 0.19035171792861083,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.2962962962962963,
              "run_unclear_pct": 0.25925925925925924,
              "avg_trade_size": 1812.157894736842,
              "avg_run_notional": 2550.4444444444443,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6296296296296297,
              "na_confidence_pct": 0.37037037037037035,
              "avg_feature_coverage": 0.801851851851852,
              "observable_run_pct": 0.962962962962963,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19021739130434784,
              "mixed_pct": 0.03260869565217391,
              "instit_pct": 0.41304347826086957,
              "ambiguous_pct": 0.34782608695652173,
              "unobservable_pct": 0.016304347826086956,
              "unclear_pct": 0.3641304347826087,
              "retail_qty_pct": 0.099184691058554,
              "mixed_qty_pct": 0.02326325719291153,
              "instit_qty_pct": 0.4274813017990701,
              "ambiguous_qty_pct": 0.4348763560406981,
              "unobservable_qty_pct": 0.015194393908766255,
              "unclear_qty_pct": 0.45007074994946433,
              "retail_notional_pct": 0.0988249460161409,
              "mixed_notional_pct": 0.02314887764133119,
              "instit_notional_pct": 0.43053471386713904,
              "ambiguous_notional_pct": 0.4319940820240499,
              "unobservable_notional_pct": 0.015497380451338933,
              "unclear_notional_pct": 0.4474914624753888,
              "run_retail_pct": 0.36585365853658536,
              "run_mixed_pct": 0.036585365853658534,
              "run_instit_pct": 0.21951219512195122,
              "run_unclear_pct": 0.3780487804878049,
              "avg_trade_size": 2214.329347826087,
              "avg_run_notional": 4968.739024390244,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.08536585365853659,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.4146341463414634,
              "avg_feature_coverage": 0.8268292682926828,
              "observable_run_pct": 0.9878048780487805,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 0.1,
              "avg_run_notional": 0.1,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 397,
          "n_runs": 226,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-18",
          "last_trade_date": "2026-03-31",
          "period_days": 10,
          "method": {
            "key": "persona_v3_2b",
            "name": "Behavioral persona classification",
            "version": "3.2b",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.2871536523929471,
            "mixed_pct": 0.08312342569269521,
            "instit_pct": 0.4357682619647355,
            "ambiguous_pct": 0.19395465994962216,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19395465994962216,
            "retail_qty_pct": 0.07549216904366086,
            "mixed_qty_pct": 0.0973138507305976,
            "instit_qty_pct": 0.5649313150756846,
            "ambiguous_qty_pct": 0.26226266515005686,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26226266515005686,
            "retail_notional_pct": 0.07494655199260764,
            "mixed_notional_pct": 0.09678986134016498,
            "instit_notional_pct": 0.5660302157886342,
            "ambiguous_notional_pct": 0.26223337087859316,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26223337087859316
          },
          "run_composition": {
            "retail_pct": 0.48672566371681414,
            "mixed_pct": 0.09734513274336283,
            "instit_pct": 0.22123893805309736,
            "ambiguous_pct": 0.19469026548672566,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19469026548672566,
            "retail_notional_pct": 0.07494655199260764,
            "mixed_notional_pct": 0.09678986134016498,
            "instit_notional_pct": 0.5660302157886342,
            "unclear_notional_pct": 0.26223337087859316
          },
          "counts": {
            "trades": {
              "retail": 114,
              "mixed": 33,
              "institutional": 173,
              "ambiguous": 77,
              "unobservable": 0,
              "unclear": 77
            },
            "runs": {
              "retail": 110,
              "mixed": 22,
              "institutional": 50,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.10176991150442478,
            "low": 0.6061946902654868,
            "na": 0.2920353982300885
          },
          "confidence_counts": {
            "high": 0,
            "medium": 23,
            "low": 137,
            "na": 66
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.09571788413098237,
            "low": 0.6272040302267002,
            "na": 0.2770780856423174
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 38,
            "low": 249,
            "na": 110
          },
          "observability": {
            "avg_feature_coverage": 0.8612831858407078,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.19469026548672566,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.48672566371681414,
          "dominance_gap": 0.2654867256637168,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 229,
              "MULTI_FILL_SINGLE_PRICE": 168
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 314,
              "PERSISTENT_POSITIVE_IMPACT": 80,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 226
            },
            "participant_confidence": {
              "LOW": 137,
              "NA": 66,
              "MEDIUM": 23
            }
          },
          "trade_size": {
            "avg": 3324.2833753148616,
            "median": 1880.0
          },
          "run_size": {
            "avg": 5839.559734513275,
            "median": 2300.0,
            "avg_length": 1.2787610619469028
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-31T08:29:14.951700",
              "price": 0.225,
              "size": 4500.0,
              "notional": 1012.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 2900.0,
              "notional": 652.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 6600.0,
              "notional": 1485.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-31T08:29:14.860600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-31T08:27:59.277100",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1507,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-31T07:43:48.350100",
              "price": 0.23,
              "size": 4000.0,
              "notional": 920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1506,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 3400.0,
              "notional": 765.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 13600.0,
              "notional": 3060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-31T07:28:47.858500",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-31T07:28:47.828300",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-31T07:28:43.577700",
              "price": 0.225,
              "size": 11700.0,
              "notional": 2632.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-31T07:28:07.134900",
              "price": 0.225,
              "size": 3600.0,
              "notional": 810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 6400.0,
              "notional": 1440.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-31T07:22:50.994400",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1502,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-31T07:22:04.730200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1501,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-31T07:17:09.522100",
              "price": 0.225,
              "size": 1400.0,
              "notional": 315.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1500,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-31T07:16:57.473000",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-31T07:16:57.412900",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-31T07:00:00.008700",
              "price": 0.225,
              "size": 8700.0,
              "notional": 1957.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1498,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-31T06:56:10.742100",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1497,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 7400.0,
              "notional": 1665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-31T06:43:39.421900",
              "price": 0.225,
              "size": 1900.0,
              "notional": 427.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1495,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-31T06:43:39.421800",
              "price": 0.225,
              "size": 20700.0,
              "notional": 4657.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1494,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-31T06:43:31.919500",
              "price": 0.225,
              "size": 9300.0,
              "notional": 2092.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1493,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-31T06:28:59.291200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1492,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-31T06:24:27.936000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-31T06:24:27.875500",
              "price": 0.225,
              "size": 29000.0,
              "notional": 6525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-31T06:03:47.594600",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1490,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2871536523929471,
              "mixed_pct": 0.08312342569269521,
              "instit_pct": 0.4357682619647355,
              "ambiguous_pct": 0.19395465994962216,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19395465994962216,
              "retail_qty_pct": 0.07549216904366086,
              "mixed_qty_pct": 0.0973138507305976,
              "instit_qty_pct": 0.5649313150756846,
              "ambiguous_qty_pct": 0.26226266515005686,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.26226266515005686,
              "retail_notional_pct": 0.07494655199260764,
              "mixed_notional_pct": 0.09678986134016498,
              "instit_notional_pct": 0.5660302157886342,
              "ambiguous_notional_pct": 0.26223337087859316,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.26223337087859316,
              "run_retail_pct": 0.48672566371681414,
              "run_mixed_pct": 0.09734513274336283,
              "run_instit_pct": 0.22123893805309736,
              "run_unclear_pct": 0.19469026548672566,
              "avg_trade_size": 3324.2833753148616,
              "avg_run_notional": 5839.559734513275,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.10176991150442478,
              "low_confidence_pct": 0.6061946902654868,
              "na_confidence_pct": 0.2920353982300885,
              "avg_feature_coverage": 0.8612831858407078,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1111111111111111,
              "mixed_pct": 0.05555555555555555,
              "instit_pct": 0.3888888888888889,
              "ambiguous_pct": 0.4444444444444444,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4444444444444444,
              "retail_qty_pct": 0.0006145251396648044,
              "mixed_qty_pct": 0.0032960893854748602,
              "instit_qty_pct": 0.9445251396648044,
              "ambiguous_qty_pct": 0.051564245810055864,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.051564245810055864,
              "retail_notional_pct": 0.0005919188692684352,
              "mixed_notional_pct": 0.00303680115537719,
              "instit_notional_pct": 0.9451233681546134,
              "ambiguous_notional_pct": 0.05124791182074093,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.05124791182074093,
              "run_retail_pct": 0.125,
              "run_mixed_pct": 0.0625,
              "run_instit_pct": 0.375,
              "run_unclear_pct": 0.4375,
              "avg_trade_size": 36697.97222222222,
              "avg_run_notional": 41285.21875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.83125,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.2,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.8,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.909008271975275,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.09099172802472502,
              "unclear_qty_pct": 0.09099172802472502,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.909008271975275,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.09099172802472502,
              "unclear_notional_pct": 0.09099172802472502,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.01999999999998,
              "avg_run_notional": 366.7,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28291062801932365,
              "mixed_pct": 0.17602657004830918,
              "instit_pct": 0.3451086956521739,
              "ambiguous_pct": 0.19384057971014493,
              "unobservable_pct": 0.002113526570048309,
              "unclear_pct": 0.19595410628019325,
              "retail_qty_pct": 0.06764666080249002,
              "mixed_qty_pct": 0.11839434332498816,
              "instit_qty_pct": 0.5426449692130726,
              "ambiguous_qty_pct": 0.2698423438662968,
              "unobservable_qty_pct": 0.001471682793152446,
              "unclear_qty_pct": 0.27131402665944926,
              "retail_notional_pct": 0.06787026578162227,
              "mixed_notional_pct": 0.1185846913971109,
              "instit_notional_pct": 0.5421645097286913,
              "ambiguous_notional_pct": 0.2698922861351392,
              "unobservable_notional_pct": 0.0014882469574363046,
              "unclear_notional_pct": 0.27138053309257554,
              "run_retail_pct": 0.5853820598006645,
              "run_mixed_pct": 0.1568106312292359,
              "run_instit_pct": 0.11960132890365449,
              "run_unclear_pct": 0.1382059800664452,
              "avg_trade_size": 1800.5410628019324,
              "avg_run_notional": 3962.3867109634552,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.10498338870431893,
              "medium_confidence_pct": 0.4425249169435216,
              "low_confidence_pct": 0.1574750830564784,
              "na_confidence_pct": 0.2950166112956811,
              "avg_feature_coverage": 0.86578073089701,
              "observable_run_pct": 0.9993355481727575,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24651810584958217,
              "mixed_pct": 0.10863509749303621,
              "instit_pct": 0.2994428969359331,
              "ambiguous_pct": 0.34540389972144847,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.34540389972144847,
              "retail_qty_pct": 0.04678468208092486,
              "mixed_qty_pct": 0.0279985549132948,
              "instit_qty_pct": 0.5144508670520231,
              "ambiguous_qty_pct": 0.41076589595375723,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.41076589595375723,
              "retail_notional_pct": 0.04656903585893357,
              "mixed_notional_pct": 0.027831921508713473,
              "instit_notional_pct": 0.5217761877983852,
              "ambiguous_notional_pct": 0.40382285483396774,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.40382285483396774,
              "run_retail_pct": 0.4250614250614251,
              "run_mixed_pct": 0.07862407862407862,
              "run_instit_pct": 0.18427518427518427,
              "run_unclear_pct": 0.31203931203931207,
              "avg_trade_size": 2252.5786908077994,
              "avg_run_notional": 3973.8366093366094,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.004914004914004914,
              "medium_confidence_pct": 0.3194103194103194,
              "low_confidence_pct": 0.28501228501228504,
              "na_confidence_pct": 0.3906633906633907,
              "avg_feature_coverage": 0.8448402948402947,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.15789473684210525,
              "mixed_pct": 0.14035087719298245,
              "instit_pct": 0.3508771929824561,
              "ambiguous_pct": 0.3508771929824561,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3508771929824561,
              "retail_qty_pct": 0.07176639934196997,
              "mixed_qty_pct": 0.13469052025498662,
              "instit_qty_pct": 0.44704914661731443,
              "ambiguous_qty_pct": 0.34649393378572896,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34649393378572896,
              "retail_notional_pct": 0.07158827748744749,
              "mixed_notional_pct": 0.1370939645455477,
              "instit_notional_pct": 0.44553335382723636,
              "ambiguous_notional_pct": 0.3457844041397684,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3457844041397684,
              "run_retail_pct": 0.25806451612903225,
              "run_mixed_pct": 0.1935483870967742,
              "run_instit_pct": 0.1935483870967742,
              "run_unclear_pct": 0.3548387096774194,
              "avg_trade_size": 1712.1052631578948,
              "avg_run_notional": 3148.064516129032,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.45161290322580644,
              "na_confidence_pct": 0.5483870967741935,
              "avg_feature_coverage": 0.8112903225806456,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2589118198874296,
              "mixed_pct": 0.08442776735459662,
              "instit_pct": 0.324577861163227,
              "ambiguous_pct": 0.3151969981238274,
              "unobservable_pct": 0.016885553470919325,
              "unclear_pct": 0.3320825515947467,
              "retail_qty_pct": 0.07284233284949926,
              "mixed_qty_pct": 0.060774822813485,
              "instit_qty_pct": 0.42939565278123615,
              "ambiguous_qty_pct": 0.4275372440892279,
              "unobservable_qty_pct": 0.00944994746655168,
              "unclear_qty_pct": 0.4369871915557796,
              "retail_notional_pct": 0.07188011835534273,
              "mixed_notional_pct": 0.06177317423083274,
              "instit_notional_pct": 0.42842121127129007,
              "ambiguous_notional_pct": 0.4284493616892723,
              "unobservable_notional_pct": 0.00947613445326224,
              "unclear_notional_pct": 0.4379254961425345,
              "run_retail_pct": 0.44755244755244755,
              "run_mixed_pct": 0.06643356643356643,
              "run_instit_pct": 0.17832167832167833,
              "run_unclear_pct": 0.3076923076923077,
              "avg_trade_size": 2186.0585365853663,
              "avg_run_notional": 4074.018181818182,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11538461538461539,
              "medium_confidence_pct": 0.17832167832167833,
              "low_confidence_pct": 0.3321678321678322,
              "na_confidence_pct": 0.3741258741258741,
              "avg_feature_coverage": 0.8297202797202797,
              "observable_run_pct": 0.986013986013986,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.225,
              "mixed_pct": 0.0375,
              "instit_pct": 0.325,
              "ambiguous_pct": 0.375,
              "unobservable_pct": 0.0375,
              "unclear_pct": 0.4125,
              "retail_qty_pct": 0.10539845758354756,
              "mixed_qty_pct": 0.13560411311053985,
              "instit_qty_pct": 0.4087403598971722,
              "ambiguous_qty_pct": 0.32904884318766064,
              "unobservable_qty_pct": 0.021208226221079693,
              "unclear_qty_pct": 0.35025706940874035,
              "retail_notional_pct": 0.10533302402309516,
              "mixed_notional_pct": 0.13415472385469293,
              "instit_notional_pct": 0.4081262673127814,
              "ambiguous_notional_pct": 0.3316450149499948,
              "unobservable_notional_pct": 0.02074096985943568,
              "unclear_notional_pct": 0.3523859848094305,
              "run_retail_pct": 0.3050847457627119,
              "run_mixed_pct": 0.05084745762711865,
              "run_instit_pct": 0.23728813559322035,
              "run_unclear_pct": 0.4067796610169492,
              "avg_trade_size": 1454.85,
              "avg_run_notional": 1972.677966101695,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5423728813559322,
              "na_confidence_pct": 0.4576271186440678,
              "avg_feature_coverage": 0.8152542372881356,
              "observable_run_pct": 0.9830508474576272,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 1308,
          "n_runs": 678,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-31",
          "period_days": 21,
          "method": {
            "key": "persona_v3_2b",
            "name": "Behavioral persona classification",
            "version": "3.2b",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.2698776758409786,
            "mixed_pct": 0.13990825688073394,
            "instit_pct": 0.38914373088685017,
            "ambiguous_pct": 0.20107033639143732,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20107033639143732,
            "retail_qty_pct": 0.07120352510620005,
            "mixed_qty_pct": 0.16736901051536013,
            "instit_qty_pct": 0.5053481834277019,
            "ambiguous_qty_pct": 0.2560792809507379,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2560792809507379,
            "retail_notional_pct": 0.07073978445450044,
            "mixed_notional_pct": 0.16852311421480926,
            "instit_notional_pct": 0.5064836057962795,
            "ambiguous_notional_pct": 0.2542534955344108,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2542534955344108
          },
          "run_composition": {
            "retail_pct": 0.4970501474926254,
            "mixed_pct": 0.13421828908554573,
            "instit_pct": 0.19469026548672566,
            "ambiguous_pct": 0.17404129793510326,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17404129793510326,
            "retail_notional_pct": 0.07073978445450044,
            "mixed_notional_pct": 0.16852311421480926,
            "instit_notional_pct": 0.5064836057962795,
            "unclear_notional_pct": 0.2542534955344108
          },
          "counts": {
            "trades": {
              "retail": 353,
              "mixed": 183,
              "institutional": 509,
              "ambiguous": 263,
              "unobservable": 0,
              "unclear": 263
            },
            "runs": {
              "retail": 337,
              "mixed": 91,
              "institutional": 132,
              "ambiguous": 118,
              "unobservable": 0,
              "unclear": 118
            }
          },
          "confidence": {
            "high": 0.03982300884955752,
            "medium": 0.22271386430678466,
            "low": 0.42920353982300885,
            "na": 0.308259587020649
          },
          "confidence_counts": {
            "high": 27,
            "medium": 151,
            "low": 291,
            "na": 209
          },
          "trade_confidence": {
            "high": 0.020642201834862386,
            "medium": 0.1918960244648318,
            "low": 0.44648318042813456,
            "na": 0.3409785932721712
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 251,
            "low": 584,
            "na": 446
          },
          "observability": {
            "avg_feature_coverage": 0.859513274336283,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.17404129793510326,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4970501474926254,
          "dominance_gap": 0.3023598820058997,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 686,
              "SINGLE_FILL": 620,
              "WALK_BOOK": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1007,
              "PERSISTENT_POSITIVE_IMPACT": 224,
              "MOMENTUM_REACTIVE": 74,
              "UNOBSERVABLE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 676,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 291,
              "NA": 209,
              "MEDIUM": 151,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 3132.901758409786,
            "median": 1380.0
          },
          "run_size": {
            "avg": 6044.005162241888,
            "median": 2250.0,
            "avg_length": 1.2418879056047198
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-03-31T08:29:14.951700",
              "price": 0.225,
              "size": 4500.0,
              "notional": 1012.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 2900.0,
              "notional": 652.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-03-31T08:29:14.860700",
              "price": 0.225,
              "size": 6600.0,
              "notional": 1485.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-03-31T08:29:14.860600",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1508,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-03-31T08:27:59.277100",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1507,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-03-31T07:43:48.350100",
              "price": 0.23,
              "size": 4000.0,
              "notional": 920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1506,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 3400.0,
              "notional": 765.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-03-31T07:28:53.973300",
              "price": 0.225,
              "size": 13600.0,
              "notional": 3060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1505,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-03-31T07:28:47.858500",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-37",
              "timestamp": "2026-03-31T07:28:47.828300",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-03-31T07:28:43.577700",
              "price": 0.225,
              "size": 11700.0,
              "notional": 2632.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1504,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-03-31T07:28:07.134900",
              "price": 0.225,
              "size": 3600.0,
              "notional": 810.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 6400.0,
              "notional": 1440.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-03-31T07:28:07.134800",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1503,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-03-31T07:22:50.994400",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1502,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-03-31T07:22:04.730200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1501,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-03-31T07:17:09.522100",
              "price": 0.225,
              "size": 1400.0,
              "notional": 315.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1500,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-03-31T07:16:57.473000",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-03-31T07:16:57.412900",
              "price": 0.225,
              "size": 15600.0,
              "notional": 3510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1499,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-03-31T07:00:00.008700",
              "price": 0.225,
              "size": 8700.0,
              "notional": 1957.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1498,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-03-31T06:56:10.742100",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1497,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 7400.0,
              "notional": 1665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-31T06:46:39.014200",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1496,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-31T06:43:39.421900",
              "price": 0.225,
              "size": 1900.0,
              "notional": 427.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1495,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-31T06:43:39.421800",
              "price": 0.225,
              "size": 20700.0,
              "notional": 4657.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1494,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-31T06:43:31.919500",
              "price": 0.225,
              "size": 9300.0,
              "notional": 2092.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1493,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-31T06:28:59.291200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1492,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-31T06:24:27.936000",
              "price": 0.225,
              "size": 1000.0,
              "notional": 225.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-31T06:24:27.875500",
              "price": 0.225,
              "size": 29000.0,
              "notional": 6525.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1491,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-31T06:03:47.594600",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1490,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2698776758409786,
              "mixed_pct": 0.13990825688073394,
              "instit_pct": 0.38914373088685017,
              "ambiguous_pct": 0.20107033639143732,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20107033639143732,
              "retail_qty_pct": 0.07120352510620005,
              "mixed_qty_pct": 0.16736901051536013,
              "instit_qty_pct": 0.5053481834277019,
              "ambiguous_qty_pct": 0.2560792809507379,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2560792809507379,
              "retail_notional_pct": 0.07073978445450044,
              "mixed_notional_pct": 0.16852311421480926,
              "instit_notional_pct": 0.5064836057962795,
              "ambiguous_notional_pct": 0.2542534955344108,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2542534955344108,
              "run_retail_pct": 0.4970501474926254,
              "run_mixed_pct": 0.13421828908554573,
              "run_instit_pct": 0.19469026548672566,
              "run_unclear_pct": 0.17404129793510326,
              "avg_trade_size": 3132.901758409786,
              "avg_run_notional": 6044.005162241888,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.03982300884955752,
              "medium_confidence_pct": 0.22271386430678466,
              "low_confidence_pct": 0.42920353982300885,
              "na_confidence_pct": 0.308259587020649,
              "avg_feature_coverage": 0.859513274336283,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06818181818181818,
              "mixed_pct": 0.06818181818181818,
              "instit_pct": 0.4318181818181818,
              "ambiguous_pct": 0.38636363636363635,
              "unobservable_pct": 0.045454545454545456,
              "unclear_pct": 0.4318181818181818,
              "retail_qty_pct": 0.0023289960002025214,
              "mixed_qty_pct": 0.008050225305047846,
              "instit_qty_pct": 0.9101817629487114,
              "ambiguous_qty_pct": 0.07437598096298921,
              "unobservable_qty_pct": 0.005063034783048959,
              "unclear_qty_pct": 0.07943901574603816,
              "retail_notional_pct": 0.0023790495844018644,
              "mixed_notional_pct": 0.007999956209613633,
              "instit_notional_pct": 0.9093956379301379,
              "ambiguous_notional_pct": 0.07475018953026599,
              "unobservable_notional_pct": 0.005475166745580592,
              "unclear_notional_pct": 0.08022535627584658,
              "run_retail_pct": 0.08823529411764706,
              "run_mixed_pct": 0.058823529411764705,
              "run_instit_pct": 0.38235294117647056,
              "run_unclear_pct": 0.47058823529411764,
              "avg_trade_size": 16608.045454545456,
              "avg_run_notional": 21492.764705882353,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47058823529411764,
              "na_confidence_pct": 0.5294117647058824,
              "avg_feature_coverage": 0.8250000000000002,
              "observable_run_pct": 0.9705882352941176,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.2,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.8,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.909008271975275,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.09099172802472502,
              "unclear_qty_pct": 0.09099172802472502,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.909008271975275,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.09099172802472502,
              "unclear_notional_pct": 0.09099172802472502,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.01999999999998,
              "avg_run_notional": 366.7,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.30649588289112534,
              "mixed_pct": 0.17490088441598048,
              "instit_pct": 0.32235437633424824,
              "ambiguous_pct": 0.19365660262275083,
              "unobservable_pct": 0.00259225373589509,
              "unclear_pct": 0.19624885635864592,
              "retail_qty_pct": 0.0647332425909998,
              "mixed_qty_pct": 0.13136205356024483,
              "instit_qty_pct": 0.5307340943441918,
              "ambiguous_qty_pct": 0.26945462744148374,
              "unobservable_qty_pct": 0.003715982063079839,
              "unclear_qty_pct": 0.27317060950456357,
              "retail_notional_pct": 0.06476665644951256,
              "mixed_notional_pct": 0.13179148212459524,
              "instit_notional_pct": 0.5298726772736185,
              "ambiguous_notional_pct": 0.26990001080657955,
              "unobservable_notional_pct": 0.0036691733456941204,
              "unclear_notional_pct": 0.27356918415227366,
              "run_retail_pct": 0.6160685932041918,
              "run_mixed_pct": 0.15020641473483645,
              "run_instit_pct": 0.11114639568116863,
              "run_unclear_pct": 0.12257859637980312,
              "avg_trade_size": 1897.1476822201892,
              "avg_run_notional": 3950.9350587488093,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22991425849476024,
              "medium_confidence_pct": 0.3753572562718323,
              "low_confidence_pct": 0.12194347411876787,
              "na_confidence_pct": 0.27278501111463954,
              "avg_feature_coverage": 0.866560812956494,
              "observable_run_pct": 0.9993648777389648,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24358974358974358,
              "mixed_pct": 0.09188034188034189,
              "instit_pct": 0.30128205128205127,
              "ambiguous_pct": 0.36217948717948717,
              "unobservable_pct": 0.0010683760683760685,
              "unclear_pct": 0.36324786324786323,
              "retail_qty_pct": 0.060673225934335245,
              "mixed_qty_pct": 0.032489998918802034,
              "instit_qty_pct": 0.4987025624391826,
              "ambiguous_qty_pct": 0.40687281507910766,
              "unobservable_qty_pct": 0.0012613976285724582,
              "unclear_qty_pct": 0.40813421270768013,
              "retail_notional_pct": 0.05736365274538408,
              "mixed_notional_pct": 0.031116727656576595,
              "instit_notional_pct": 0.5067118390890766,
              "ambiguous_notional_pct": 0.4038136581699861,
              "unobservable_notional_pct": 0.0009941223389766268,
              "unclear_notional_pct": 0.4048077805089627,
              "run_retail_pct": 0.4101123595505618,
              "run_mixed_pct": 0.07116104868913857,
              "run_instit_pct": 0.1891385767790262,
              "run_unclear_pct": 0.32958801498127344,
              "avg_trade_size": 2294.469017094017,
              "avg_run_notional": 4021.765917602996,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.003745318352059925,
              "medium_confidence_pct": 0.24344569288389514,
              "low_confidence_pct": 0.352059925093633,
              "na_confidence_pct": 0.40074906367041196,
              "avg_feature_coverage": 0.8370786516853932,
              "observable_run_pct": 0.99812734082397,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23416666666666666,
              "mixed_pct": 0.07833333333333334,
              "instit_pct": 0.34,
              "ambiguous_pct": 0.3325,
              "unobservable_pct": 0.015,
              "unclear_pct": 0.34750000000000003,
              "retail_qty_pct": 0.08157083692282177,
              "mixed_qty_pct": 0.06549299992168389,
              "instit_qty_pct": 0.4831666428647112,
              "ambiguous_qty_pct": 0.35411090482749724,
              "unobservable_qty_pct": 0.01565861546328587,
              "unclear_qty_pct": 0.36976952029078314,
              "retail_notional_pct": 0.08175057765568684,
              "mixed_notional_pct": 0.06624405386989934,
              "instit_notional_pct": 0.4838051267782254,
              "ambiguous_notional_pct": 0.35313084714889376,
              "unobservable_notional_pct": 0.015069394547294725,
              "unclear_notional_pct": 0.3682002416961885,
              "run_retail_pct": 0.4031496062992126,
              "run_mixed_pct": 0.06929133858267716,
              "run_instit_pct": 0.19370078740157481,
              "run_unclear_pct": 0.33385826771653543,
              "avg_trade_size": 2597.8205833333336,
              "avg_run_notional": 4909.267244094489,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.06456692913385827,
              "medium_confidence_pct": 0.19370078740157481,
              "low_confidence_pct": 0.33858267716535434,
              "na_confidence_pct": 0.4031496062992126,
              "avg_feature_coverage": 0.8278740157480315,
              "observable_run_pct": 0.988976377952756,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5977011494252874,
              "mixed_pct": 0.1425287356321839,
              "instit_pct": 0.12643678160919541,
              "ambiguous_pct": 0.13333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13333333333333333,
              "retail_qty_pct": 0.0853986264556584,
              "mixed_qty_pct": 0.09495371752762019,
              "instit_qty_pct": 0.4369214690952523,
              "ambiguous_qty_pct": 0.3827261869214691,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3827261869214691,
              "retail_notional_pct": 0.08589567730530269,
              "mixed_notional_pct": 0.09628503524613613,
              "instit_notional_pct": 0.4370396179773633,
              "ambiguous_notional_pct": 0.38077966947119796,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.38077966947119796,
              "run_retail_pct": 0.6994535519125683,
              "run_mixed_pct": 0.14207650273224043,
              "run_instit_pct": 0.04918032786885246,
              "run_unclear_pct": 0.1092896174863388,
              "avg_trade_size": 626.7908045977011,
              "avg_run_notional": 744.9562841530054,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5382513661202186,
              "medium_confidence_pct": 0.1284153005464481,
              "low_confidence_pct": 0.08196721311475409,
              "na_confidence_pct": 0.25136612021857924,
              "avg_feature_coverage": 0.8446721311475406,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1881720430107527,
              "mixed_pct": 0.05913978494623656,
              "instit_pct": 0.2956989247311828,
              "ambiguous_pct": 0.43010752688172044,
              "unobservable_pct": 0.026881720430107527,
              "unclear_pct": 0.45698924731182794,
              "retail_qty_pct": 0.0815039111784002,
              "mixed_qty_pct": 0.07847590209437295,
              "instit_qty_pct": 0.3946505172848852,
              "ambiguous_qty_pct": 0.42417360585415087,
              "unobservable_qty_pct": 0.021196063588190765,
              "unclear_qty_pct": 0.44536966944234163,
              "retail_notional_pct": 0.08073154946550916,
              "mixed_notional_pct": 0.07573414779556403,
              "instit_notional_pct": 0.3962501155698951,
              "ambiguous_notional_pct": 0.4258471671826132,
              "unobservable_notional_pct": 0.021437019986418546,
              "unclear_notional_pct": 0.44728418716903173,
              "run_retail_pct": 0.26515151515151514,
              "run_mixed_pct": 0.05303030303030303,
              "run_instit_pct": 0.21212121212121213,
              "run_unclear_pct": 0.46969696969696967,
              "avg_trade_size": 1686.3602150537633,
              "avg_run_notional": 2376.2348484848485,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4772727272727273,
              "na_confidence_pct": 0.5227272727272727,
              "avg_feature_coverage": 0.8234848484848486,
              "observable_run_pct": 0.9848484848484849,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "SGD",
      "n_trades": 1308,
      "n_runs": 678,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-03",
      "last_trade_date": "2026-03-31",
      "period_days": 21,
      "method": {
        "key": "persona_v3_2b",
        "name": "Behavioral persona classification",
        "version": "3.2b",
        "unit_of_classification": "runs"
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.2698776758409786,
        "mixed_pct": 0.13990825688073394,
        "instit_pct": 0.38914373088685017,
        "ambiguous_pct": 0.20107033639143732,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.20107033639143732,
        "retail_qty_pct": 0.07120352510620005,
        "mixed_qty_pct": 0.16736901051536013,
        "instit_qty_pct": 0.5053481834277019,
        "ambiguous_qty_pct": 0.2560792809507379,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2560792809507379,
        "retail_notional_pct": 0.07073978445450044,
        "mixed_notional_pct": 0.16852311421480926,
        "instit_notional_pct": 0.5064836057962795,
        "ambiguous_notional_pct": 0.2542534955344108,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2542534955344108
      },
      "run_composition": {
        "retail_pct": 0.4970501474926254,
        "mixed_pct": 0.13421828908554573,
        "instit_pct": 0.19469026548672566,
        "ambiguous_pct": 0.17404129793510326,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.17404129793510326
      },
      "trade_size": {
        "avg": 3132.901758409786,
        "median": 1380.0
      },
      "run_size": {
        "avg": 6044.005162241888,
        "median": 2250.0,
        "avg_length": 1.2418879056047198
      },
      "confidence": {
        "high": 0.03982300884955752,
        "medium": 0.22271386430678466,
        "low": 0.42920353982300885,
        "na": 0.308259587020649
      },
      "confidence_counts": {
        "high": 27,
        "medium": 151,
        "low": 291,
        "na": 209
      },
      "trade_confidence": {
        "high": 0.020642201834862386,
        "medium": 0.1918960244648318,
        "low": 0.44648318042813456,
        "na": 0.3409785932721712
      },
      "trade_confidence_counts": {
        "high": 27,
        "medium": 251,
        "low": 584,
        "na": 446
      },
      "counts": {
        "trades": {
          "retail": 353,
          "mixed": 183,
          "institutional": 509,
          "ambiguous": 263,
          "unobservable": 0,
          "unclear": 263
        },
        "runs": {
          "retail": 337,
          "mixed": 91,
          "institutional": 132,
          "ambiguous": 118,
          "unobservable": 0,
          "unclear": 118
        }
      },
      "observability": {
        "avg_feature_coverage": 0.859513274336283,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.17404129793510326,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4970501474926254,
      "dominance_gap": 0.3023598820058997,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1551,
            "n_runs": 764,
            "retail_pct": 0.2978723404255319,
            "mixed_pct": 0.15860735009671179,
            "instit_pct": 0.3520309477756286,
            "ambiguous_pct": 0.19148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19148936170212766,
            "avg_trade_size": 4037.716956802063,
            "avg_run_notional": 8196.988219895287,
            "retail_qty_pct": 0.08204026661274384,
            "mixed_qty_pct": 0.18223370201790898,
            "instit_qty_pct": 0.45190249634685603,
            "ambiguous_qty_pct": 0.28382353502249114,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.28382353502249114,
            "retail_notional_pct": 0.08168959388256988,
            "mixed_notional_pct": 0.1837088516900362,
            "instit_notional_pct": 0.4538614696784782,
            "ambiguous_notional_pct": 0.2807400847489157,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2807400847489157,
            "run_retail_pct": 0.5798429319371727,
            "run_mixed_pct": 0.13612565445026178,
            "run_instit_pct": 0.13612565445026178,
            "run_ambiguous_pct": 0.14790575916230367,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14790575916230367,
            "avg_feature_coverage": 0.8446989528795811,
            "high_confidence_pct": 0.06282722513089005,
            "medium_confidence_pct": 0.4175392670157068,
            "low_confidence_pct": 0.2356020942408377,
            "na_confidence_pct": 0.28403141361256545,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2698776758409786,
          "mixed_pct": 0.13990825688073394,
          "instit_pct": 0.38914373088685017,
          "ambiguous_pct": 0.20107033639143732,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.20107033639143732,
          "retail_qty_pct": 0.07120352510620005,
          "mixed_qty_pct": 0.16736901051536013,
          "instit_qty_pct": 0.5053481834277019,
          "ambiguous_qty_pct": 0.2560792809507379,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2560792809507379,
          "retail_notional_pct": 0.07073978445450044,
          "mixed_notional_pct": 0.16852311421480926,
          "instit_notional_pct": 0.5064836057962795,
          "ambiguous_notional_pct": 0.2542534955344108,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2542534955344108,
          "run_retail_pct": 0.4970501474926254,
          "run_mixed_pct": 0.13421828908554573,
          "run_instit_pct": 0.19469026548672566,
          "run_unclear_pct": 0.17404129793510326,
          "avg_trade_size": 3132.901758409786,
          "avg_run_notional": 6044.005162241888,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.03982300884955752,
          "medium_confidence_pct": 0.22271386430678466,
          "low_confidence_pct": 0.42920353982300885,
          "na_confidence_pct": 0.308259587020649,
          "avg_feature_coverage": 0.859513274336283,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.06818181818181818,
          "mixed_pct": 0.06818181818181818,
          "instit_pct": 0.4318181818181818,
          "ambiguous_pct": 0.38636363636363635,
          "unobservable_pct": 0.045454545454545456,
          "unclear_pct": 0.4318181818181818,
          "retail_qty_pct": 0.0023289960002025214,
          "mixed_qty_pct": 0.008050225305047846,
          "instit_qty_pct": 0.9101817629487114,
          "ambiguous_qty_pct": 0.07437598096298921,
          "unobservable_qty_pct": 0.005063034783048959,
          "unclear_qty_pct": 0.07943901574603816,
          "retail_notional_pct": 0.0023790495844018644,
          "mixed_notional_pct": 0.007999956209613633,
          "instit_notional_pct": 0.9093956379301379,
          "ambiguous_notional_pct": 0.07475018953026599,
          "unobservable_notional_pct": 0.005475166745580592,
          "unclear_notional_pct": 0.08022535627584658,
          "run_retail_pct": 0.08823529411764706,
          "run_mixed_pct": 0.058823529411764705,
          "run_instit_pct": 0.38235294117647056,
          "run_unclear_pct": 0.47058823529411764,
          "avg_trade_size": 16608.045454545456,
          "avg_run_notional": 21492.764705882353,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.47058823529411764,
          "na_confidence_pct": 0.5294117647058824,
          "avg_feature_coverage": 0.8250000000000002,
          "observable_run_pct": 0.9705882352941176,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.2,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.8,
          "unclear_pct": 0.8,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.909008271975275,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.09099172802472502,
          "unclear_qty_pct": 0.09099172802472502,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.909008271975275,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.09099172802472502,
          "unclear_notional_pct": 0.09099172802472502,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.01999999999998,
          "avg_run_notional": 366.7,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.30649588289112534,
          "mixed_pct": 0.17490088441598048,
          "instit_pct": 0.32235437633424824,
          "ambiguous_pct": 0.19365660262275083,
          "unobservable_pct": 0.00259225373589509,
          "unclear_pct": 0.19624885635864592,
          "retail_qty_pct": 0.0647332425909998,
          "mixed_qty_pct": 0.13136205356024483,
          "instit_qty_pct": 0.5307340943441918,
          "ambiguous_qty_pct": 0.26945462744148374,
          "unobservable_qty_pct": 0.003715982063079839,
          "unclear_qty_pct": 0.27317060950456357,
          "retail_notional_pct": 0.06476665644951256,
          "mixed_notional_pct": 0.13179148212459524,
          "instit_notional_pct": 0.5298726772736185,
          "ambiguous_notional_pct": 0.26990001080657955,
          "unobservable_notional_pct": 0.0036691733456941204,
          "unclear_notional_pct": 0.27356918415227366,
          "run_retail_pct": 0.6160685932041918,
          "run_mixed_pct": 0.15020641473483645,
          "run_instit_pct": 0.11114639568116863,
          "run_unclear_pct": 0.12257859637980312,
          "avg_trade_size": 1897.1476822201892,
          "avg_run_notional": 3950.9350587488093,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22991425849476024,
          "medium_confidence_pct": 0.3753572562718323,
          "low_confidence_pct": 0.12194347411876787,
          "na_confidence_pct": 0.27278501111463954,
          "avg_feature_coverage": 0.866560812956494,
          "observable_run_pct": 0.9993648777389648,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24358974358974358,
          "mixed_pct": 0.09188034188034189,
          "instit_pct": 0.30128205128205127,
          "ambiguous_pct": 0.36217948717948717,
          "unobservable_pct": 0.0010683760683760685,
          "unclear_pct": 0.36324786324786323,
          "retail_qty_pct": 0.060673225934335245,
          "mixed_qty_pct": 0.032489998918802034,
          "instit_qty_pct": 0.4987025624391826,
          "ambiguous_qty_pct": 0.40687281507910766,
          "unobservable_qty_pct": 0.0012613976285724582,
          "unclear_qty_pct": 0.40813421270768013,
          "retail_notional_pct": 0.05736365274538408,
          "mixed_notional_pct": 0.031116727656576595,
          "instit_notional_pct": 0.5067118390890766,
          "ambiguous_notional_pct": 0.4038136581699861,
          "unobservable_notional_pct": 0.0009941223389766268,
          "unclear_notional_pct": 0.4048077805089627,
          "run_retail_pct": 0.4101123595505618,
          "run_mixed_pct": 0.07116104868913857,
          "run_instit_pct": 0.1891385767790262,
          "run_unclear_pct": 0.32958801498127344,
          "avg_trade_size": 2294.469017094017,
          "avg_run_notional": 4021.765917602996,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.003745318352059925,
          "medium_confidence_pct": 0.24344569288389514,
          "low_confidence_pct": 0.352059925093633,
          "na_confidence_pct": 0.40074906367041196,
          "avg_feature_coverage": 0.8370786516853932,
          "observable_run_pct": 0.99812734082397,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S69",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23416666666666666,
          "mixed_pct": 0.07833333333333334,
          "instit_pct": 0.34,
          "ambiguous_pct": 0.3325,
          "unobservable_pct": 0.015,
          "unclear_pct": 0.34750000000000003,
          "retail_qty_pct": 0.08157083692282177,
          "mixed_qty_pct": 0.06549299992168389,
          "instit_qty_pct": 0.4831666428647112,
          "ambiguous_qty_pct": 0.35411090482749724,
          "unobservable_qty_pct": 0.01565861546328587,
          "unclear_qty_pct": 0.36976952029078314,
          "retail_notional_pct": 0.08175057765568684,
          "mixed_notional_pct": 0.06624405386989934,
          "instit_notional_pct": 0.4838051267782254,
          "ambiguous_notional_pct": 0.35313084714889376,
          "unobservable_notional_pct": 0.015069394547294725,
          "unclear_notional_pct": 0.3682002416961885,
          "run_retail_pct": 0.4031496062992126,
          "run_mixed_pct": 0.06929133858267716,
          "run_instit_pct": 0.19370078740157481,
          "run_unclear_pct": 0.33385826771653543,
          "avg_trade_size": 2597.8205833333336,
          "avg_run_notional": 4909.267244094489,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.06456692913385827,
          "medium_confidence_pct": 0.19370078740157481,
          "low_confidence_pct": 0.33858267716535434,
          "na_confidence_pct": 0.4031496062992126,
          "avg_feature_coverage": 0.8278740157480315,
          "observable_run_pct": 0.988976377952756,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5977011494252874,
          "mixed_pct": 0.1425287356321839,
          "instit_pct": 0.12643678160919541,
          "ambiguous_pct": 0.13333333333333333,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13333333333333333,
          "retail_qty_pct": 0.0853986264556584,
          "mixed_qty_pct": 0.09495371752762019,
          "instit_qty_pct": 0.4369214690952523,
          "ambiguous_qty_pct": 0.3827261869214691,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3827261869214691,
          "retail_notional_pct": 0.08589567730530269,
          "mixed_notional_pct": 0.09628503524613613,
          "instit_notional_pct": 0.4370396179773633,
          "ambiguous_notional_pct": 0.38077966947119796,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.38077966947119796,
          "run_retail_pct": 0.6994535519125683,
          "run_mixed_pct": 0.14207650273224043,
          "run_instit_pct": 0.04918032786885246,
          "run_unclear_pct": 0.1092896174863388,
          "avg_trade_size": 626.7908045977011,
          "avg_run_notional": 744.9562841530054,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5382513661202186,
          "medium_confidence_pct": 0.1284153005464481,
          "low_confidence_pct": 0.08196721311475409,
          "na_confidence_pct": 0.25136612021857924,
          "avg_feature_coverage": 0.8446721311475406,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1881720430107527,
          "mixed_pct": 0.05913978494623656,
          "instit_pct": 0.2956989247311828,
          "ambiguous_pct": 0.43010752688172044,
          "unobservable_pct": 0.026881720430107527,
          "unclear_pct": 0.45698924731182794,
          "retail_qty_pct": 0.0815039111784002,
          "mixed_qty_pct": 0.07847590209437295,
          "instit_qty_pct": 0.3946505172848852,
          "ambiguous_qty_pct": 0.42417360585415087,
          "unobservable_qty_pct": 0.021196063588190765,
          "unclear_qty_pct": 0.44536966944234163,
          "retail_notional_pct": 0.08073154946550916,
          "mixed_notional_pct": 0.07573414779556403,
          "instit_notional_pct": 0.3962501155698951,
          "ambiguous_notional_pct": 0.4258471671826132,
          "unobservable_notional_pct": 0.021437019986418546,
          "unclear_notional_pct": 0.44728418716903173,
          "run_retail_pct": 0.26515151515151514,
          "run_mixed_pct": 0.05303030303030303,
          "run_instit_pct": 0.21212121212121213,
          "run_unclear_pct": 0.46969696969696967,
          "avg_trade_size": 1686.3602150537633,
          "avg_run_notional": 2376.2348484848485,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4772727272727273,
          "na_confidence_pct": 0.5227272727272727,
          "avg_feature_coverage": 0.8234848484848486,
          "observable_run_pct": 0.9848484848484849,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2826086956521739,
            "mixed_pct": 0.08695652173913043,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.13043478260869565,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13043478260869565,
            "retail_qty_pct": 0.1705587268638644,
            "mixed_qty_pct": 0.1731534336619962,
            "instit_qty_pct": 0.4770800899498357,
            "ambiguous_qty_pct": 0.17920774952430377,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17920774952430377,
            "retail_notional_pct": 0.17004827201569322,
            "mixed_notional_pct": 0.17325999576898668,
            "instit_notional_pct": 0.47737369463622903,
            "ambiguous_notional_pct": 0.1793180375790911,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1793180375790911,
            "run_retail_pct": 0.41379310344827586,
            "run_mixed_pct": 0.13793103448275862,
            "run_instit_pct": 0.27586206896551724,
            "run_unclear_pct": 0.1724137931034483,
            "avg_trade_size": 2825.9239130434785,
            "avg_run_notional": 4482.5,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6896551724137931,
            "na_confidence_pct": 0.3103448275862069,
            "avg_feature_coverage": 0.8758620689655173,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 1.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 1.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 1.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 5565.0,
            "avg_run_notional": 11130.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.75,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.75,
            "ambiguous_qty_pct": 0.25,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7508417508417509,
            "ambiguous_notional_pct": 0.24915824915824916,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24915824915824916,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6666666666666666,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 371.25,
            "avg_run_notional": 495.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3333333333333333,
            "mixed_pct": 0.0,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.16666666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16666666666666666,
            "retail_qty_pct": 0.10586319218241043,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6742671009771987,
            "ambiguous_qty_pct": 0.21986970684039087,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21986970684039087,
            "retail_notional_pct": 0.10466944566330262,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6805982155916338,
            "ambiguous_notional_pct": 0.21473233874506362,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21473233874506362,
            "run_retail_pct": 0.4444444444444444,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.2222222222222222,
            "avg_trade_size": 2279.0,
            "avg_run_notional": 3038.6666666666665,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7777777777777778,
            "na_confidence_pct": 0.2222222222222222,
            "avg_feature_coverage": 0.7999999999999999,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3076923076923077,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.3076923076923077,
            "ambiguous_pct": 0.3076923076923077,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3076923076923077,
            "retail_qty_pct": 0.04079254079254079,
            "mixed_qty_pct": 0.046620046620046623,
            "instit_qty_pct": 0.6223776223776224,
            "ambiguous_qty_pct": 0.2902097902097902,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2902097902097902,
            "retail_notional_pct": 0.04115859109601287,
            "mixed_notional_pct": 0.04720185946719113,
            "instit_notional_pct": 0.6205971750402288,
            "ambiguous_notional_pct": 0.29104237439656716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.29104237439656716,
            "run_retail_pct": 0.36363636363636365,
            "run_mixed_pct": 0.09090909090909091,
            "run_instit_pct": 0.18181818181818182,
            "run_unclear_pct": 0.36363636363636365,
            "avg_trade_size": 2151.153846153846,
            "avg_run_notional": 2542.2727272727275,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5454545454545454,
            "na_confidence_pct": 0.45454545454545453,
            "avg_feature_coverage": 0.7954545454545454,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3231357552581262,
            "mixed_pct": 0.3403441682600382,
            "instit_pct": 0.1931166347992352,
            "ambiguous_pct": 0.14340344168260039,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14340344168260039,
            "retail_qty_pct": 0.08487420430433465,
            "mixed_qty_pct": 0.22612913003940588,
            "instit_qty_pct": 0.5659290694149742,
            "ambiguous_qty_pct": 0.12306759624128524,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12306759624128524,
            "retail_notional_pct": 0.08515327280662657,
            "mixed_notional_pct": 0.22635980747016976,
            "instit_notional_pct": 0.5655509786110524,
            "ambiguous_notional_pct": 0.12293594111215125,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12293594111215125,
            "run_retail_pct": 0.5800711743772242,
            "run_mixed_pct": 0.26334519572953735,
            "run_instit_pct": 0.07473309608540925,
            "run_unclear_pct": 0.08185053380782918,
            "avg_trade_size": 619.9034416826004,
            "avg_run_notional": 1153.7704626334519,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.4555160142348754,
            "low_confidence_pct": 0.199288256227758,
            "na_confidence_pct": 0.34519572953736655,
            "avg_feature_coverage": 0.890035587188612,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2994652406417112,
            "mixed_pct": 0.10160427807486631,
            "instit_pct": 0.44385026737967914,
            "ambiguous_pct": 0.15508021390374332,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15508021390374332,
            "retail_qty_pct": 0.11225753198514239,
            "mixed_qty_pct": 0.13140734626496078,
            "instit_qty_pct": 0.5045398266611638,
            "ambiguous_qty_pct": 0.251795295088733,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.251795295088733,
            "retail_notional_pct": 0.11211948418917422,
            "mixed_notional_pct": 0.13132346772187184,
            "instit_notional_pct": 0.5055496334445319,
            "ambiguous_notional_pct": 0.2510074146444221,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2510074146444221,
            "run_retail_pct": 0.47706422018348627,
            "run_mixed_pct": 0.11926605504587157,
            "run_instit_pct": 0.22018348623853212,
            "run_unclear_pct": 0.1834862385321101,
            "avg_trade_size": 2944.743315508021,
            "avg_run_notional": 5051.9908256880735,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6972477064220184,
            "na_confidence_pct": 0.30275229357798167,
            "avg_feature_coverage": 0.8555045871559632,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25084745762711863,
            "mixed_pct": 0.0847457627118644,
            "instit_pct": 0.33559322033898303,
            "ambiguous_pct": 0.3288135593220339,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3288135593220339,
            "retail_qty_pct": 0.04183139905624283,
            "mixed_qty_pct": 0.02008672363218977,
            "instit_qty_pct": 0.6341027930110955,
            "ambiguous_qty_pct": 0.3039790843004719,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3039790843004719,
            "retail_notional_pct": 0.04169506767554688,
            "mixed_notional_pct": 0.019818653591701367,
            "instit_notional_pct": 0.6355093279414376,
            "ambiguous_notional_pct": 0.30297695079131415,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.30297695079131415,
            "run_retail_pct": 0.4,
            "run_mixed_pct": 0.05,
            "run_instit_pct": 0.21666666666666667,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2367.227118644068,
            "avg_run_notional": 3879.6222222222223,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.011111111111111112,
            "medium_confidence_pct": 0.25,
            "low_confidence_pct": 0.35555555555555557,
            "na_confidence_pct": 0.38333333333333336,
            "avg_feature_coverage": 0.8416666666666666,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.306158357771261,
            "mixed_pct": 0.20175953079178885,
            "instit_pct": 0.3249266862170088,
            "ambiguous_pct": 0.16715542521994134,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16715542521994134,
            "retail_qty_pct": 0.056986004793937985,
            "mixed_qty_pct": 0.11830201809324982,
            "instit_qty_pct": 0.5792932807546586,
            "ambiguous_qty_pct": 0.24541869635815355,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24541869635815355,
            "retail_notional_pct": 0.05693789805166503,
            "mixed_notional_pct": 0.11916676740535867,
            "instit_notional_pct": 0.5791501469811583,
            "ambiguous_notional_pct": 0.24474518756181804,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24474518756181804,
            "run_retail_pct": 0.6157635467980296,
            "run_mixed_pct": 0.16995073891625614,
            "run_instit_pct": 0.11330049261083744,
            "run_unclear_pct": 0.10098522167487685,
            "avg_trade_size": 1506.46715542522,
            "avg_run_notional": 3163.2099753694583,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.16625615763546797,
            "medium_confidence_pct": 0.41379310344827586,
            "low_confidence_pct": 0.14901477832512317,
            "na_confidence_pct": 0.270935960591133,
            "avg_feature_coverage": 0.8760467980295565,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.19047619047619047,
            "instit_pct": 0.38095238095238093,
            "ambiguous_pct": 0.42857142857142855,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.42857142857142855,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.1821983273596177,
            "instit_qty_pct": 0.517921146953405,
            "ambiguous_qty_pct": 0.2998805256869773,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2998805256869773,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.18206880879336435,
            "instit_notional_pct": 0.5184759922735129,
            "ambiguous_notional_pct": 0.29945519893312283,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.29945519893312283,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.36363636363636365,
            "run_instit_pct": 0.2727272727272727,
            "run_unclear_pct": 0.36363636363636365,
            "avg_trade_size": 1592.5428571428572,
            "avg_run_notional": 3040.309090909091,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2727272727272727,
            "na_confidence_pct": 0.7272727272727273,
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.0,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.375,
            "retail_qty_pct": 0.012835472578763127,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4982497082847141,
            "ambiguous_qty_pct": 0.48891481913652274,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.48891481913652274,
            "retail_notional_pct": 0.012866286052748482,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4953684660820349,
            "ambiguous_notional_pct": 0.4917652478652166,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4917652478652166,
            "run_retail_pct": 0.2857142857142857,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2857142857142857,
            "run_unclear_pct": 0.42857142857142855,
            "avg_trade_size": 3798.6875,
            "avg_run_notional": 4341.357142857143,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5714285714285714,
            "na_confidence_pct": 0.42857142857142855,
            "avg_feature_coverage": 0.8285714285714286,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23684210526315788,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.42105263157894735,
            "ambiguous_pct": 0.18421052631578946,
            "unobservable_pct": 0.07894736842105263,
            "unclear_pct": 0.2631578947368421,
            "retail_qty_pct": 0.1339764201500536,
            "mixed_qty_pct": 0.22615219721329047,
            "instit_qty_pct": 0.4480171489817792,
            "ambiguous_qty_pct": 0.1564844587352626,
            "unobservable_qty_pct": 0.03536977491961415,
            "unclear_qty_pct": 0.19185423365487675,
            "retail_notional_pct": 0.13425401527693068,
            "mixed_notional_pct": 0.2267433417559757,
            "instit_notional_pct": 0.44865092503848275,
            "ambiguous_notional_pct": 0.15529609944526734,
            "unobservable_notional_pct": 0.0350556184833435,
            "unclear_notional_pct": 0.19035171792861083,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.2962962962962963,
            "run_unclear_pct": 0.25925925925925924,
            "avg_trade_size": 1812.157894736842,
            "avg_run_notional": 2550.4444444444443,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6296296296296297,
            "na_confidence_pct": 0.37037037037037035,
            "avg_feature_coverage": 0.801851851851852,
            "observable_run_pct": 0.962962962962963,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19021739130434784,
            "mixed_pct": 0.03260869565217391,
            "instit_pct": 0.41304347826086957,
            "ambiguous_pct": 0.34782608695652173,
            "unobservable_pct": 0.016304347826086956,
            "unclear_pct": 0.3641304347826087,
            "retail_qty_pct": 0.099184691058554,
            "mixed_qty_pct": 0.02326325719291153,
            "instit_qty_pct": 0.4274813017990701,
            "ambiguous_qty_pct": 0.4348763560406981,
            "unobservable_qty_pct": 0.015194393908766255,
            "unclear_qty_pct": 0.45007074994946433,
            "retail_notional_pct": 0.0988249460161409,
            "mixed_notional_pct": 0.02314887764133119,
            "instit_notional_pct": 0.43053471386713904,
            "ambiguous_notional_pct": 0.4319940820240499,
            "unobservable_notional_pct": 0.015497380451338933,
            "unclear_notional_pct": 0.4474914624753888,
            "run_retail_pct": 0.36585365853658536,
            "run_mixed_pct": 0.036585365853658534,
            "run_instit_pct": 0.21951219512195122,
            "run_unclear_pct": 0.3780487804878049,
            "avg_trade_size": 2214.329347826087,
            "avg_run_notional": 4968.739024390244,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.08536585365853659,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.4146341463414634,
            "avg_feature_coverage": 0.8268292682926828,
            "observable_run_pct": 0.9878048780487805,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 0.1,
            "avg_run_notional": 0.1,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2871536523929471,
            "mixed_pct": 0.08312342569269521,
            "instit_pct": 0.4357682619647355,
            "ambiguous_pct": 0.19395465994962216,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19395465994962216,
            "retail_qty_pct": 0.07549216904366086,
            "mixed_qty_pct": 0.0973138507305976,
            "instit_qty_pct": 0.5649313150756846,
            "ambiguous_qty_pct": 0.26226266515005686,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26226266515005686,
            "retail_notional_pct": 0.07494655199260764,
            "mixed_notional_pct": 0.09678986134016498,
            "instit_notional_pct": 0.5660302157886342,
            "ambiguous_notional_pct": 0.26223337087859316,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26223337087859316,
            "run_retail_pct": 0.48672566371681414,
            "run_mixed_pct": 0.09734513274336283,
            "run_instit_pct": 0.22123893805309736,
            "run_unclear_pct": 0.19469026548672566,
            "avg_trade_size": 3324.2833753148616,
            "avg_run_notional": 5839.559734513275,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.10176991150442478,
            "low_confidence_pct": 0.6061946902654868,
            "na_confidence_pct": 0.2920353982300885,
            "avg_feature_coverage": 0.8612831858407078,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1111111111111111,
            "mixed_pct": 0.05555555555555555,
            "instit_pct": 0.3888888888888889,
            "ambiguous_pct": 0.4444444444444444,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4444444444444444,
            "retail_qty_pct": 0.0006145251396648044,
            "mixed_qty_pct": 0.0032960893854748602,
            "instit_qty_pct": 0.9445251396648044,
            "ambiguous_qty_pct": 0.051564245810055864,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.051564245810055864,
            "retail_notional_pct": 0.0005919188692684352,
            "mixed_notional_pct": 0.00303680115537719,
            "instit_notional_pct": 0.9451233681546134,
            "ambiguous_notional_pct": 0.05124791182074093,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.05124791182074093,
            "run_retail_pct": 0.125,
            "run_mixed_pct": 0.0625,
            "run_instit_pct": 0.375,
            "run_unclear_pct": 0.4375,
            "avg_trade_size": 36697.97222222222,
            "avg_run_notional": 41285.21875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.83125,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.2,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.8,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.909008271975275,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.09099172802472502,
            "unclear_qty_pct": 0.09099172802472502,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.909008271975275,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.09099172802472502,
            "unclear_notional_pct": 0.09099172802472502,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.01999999999998,
            "avg_run_notional": 366.7,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28291062801932365,
            "mixed_pct": 0.17602657004830918,
            "instit_pct": 0.3451086956521739,
            "ambiguous_pct": 0.19384057971014493,
            "unobservable_pct": 0.002113526570048309,
            "unclear_pct": 0.19595410628019325,
            "retail_qty_pct": 0.06764666080249002,
            "mixed_qty_pct": 0.11839434332498816,
            "instit_qty_pct": 0.5426449692130726,
            "ambiguous_qty_pct": 0.2698423438662968,
            "unobservable_qty_pct": 0.001471682793152446,
            "unclear_qty_pct": 0.27131402665944926,
            "retail_notional_pct": 0.06787026578162227,
            "mixed_notional_pct": 0.1185846913971109,
            "instit_notional_pct": 0.5421645097286913,
            "ambiguous_notional_pct": 0.2698922861351392,
            "unobservable_notional_pct": 0.0014882469574363046,
            "unclear_notional_pct": 0.27138053309257554,
            "run_retail_pct": 0.5853820598006645,
            "run_mixed_pct": 0.1568106312292359,
            "run_instit_pct": 0.11960132890365449,
            "run_unclear_pct": 0.1382059800664452,
            "avg_trade_size": 1800.5410628019324,
            "avg_run_notional": 3962.3867109634552,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.10498338870431893,
            "medium_confidence_pct": 0.4425249169435216,
            "low_confidence_pct": 0.1574750830564784,
            "na_confidence_pct": 0.2950166112956811,
            "avg_feature_coverage": 0.86578073089701,
            "observable_run_pct": 0.9993355481727575,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24651810584958217,
            "mixed_pct": 0.10863509749303621,
            "instit_pct": 0.2994428969359331,
            "ambiguous_pct": 0.34540389972144847,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.34540389972144847,
            "retail_qty_pct": 0.04678468208092486,
            "mixed_qty_pct": 0.0279985549132948,
            "instit_qty_pct": 0.5144508670520231,
            "ambiguous_qty_pct": 0.41076589595375723,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.41076589595375723,
            "retail_notional_pct": 0.04656903585893357,
            "mixed_notional_pct": 0.027831921508713473,
            "instit_notional_pct": 0.5217761877983852,
            "ambiguous_notional_pct": 0.40382285483396774,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40382285483396774,
            "run_retail_pct": 0.4250614250614251,
            "run_mixed_pct": 0.07862407862407862,
            "run_instit_pct": 0.18427518427518427,
            "run_unclear_pct": 0.31203931203931207,
            "avg_trade_size": 2252.5786908077994,
            "avg_run_notional": 3973.8366093366094,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.004914004914004914,
            "medium_confidence_pct": 0.3194103194103194,
            "low_confidence_pct": 0.28501228501228504,
            "na_confidence_pct": 0.3906633906633907,
            "avg_feature_coverage": 0.8448402948402947,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.15789473684210525,
            "mixed_pct": 0.14035087719298245,
            "instit_pct": 0.3508771929824561,
            "ambiguous_pct": 0.3508771929824561,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3508771929824561,
            "retail_qty_pct": 0.07176639934196997,
            "mixed_qty_pct": 0.13469052025498662,
            "instit_qty_pct": 0.44704914661731443,
            "ambiguous_qty_pct": 0.34649393378572896,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34649393378572896,
            "retail_notional_pct": 0.07158827748744749,
            "mixed_notional_pct": 0.1370939645455477,
            "instit_notional_pct": 0.44553335382723636,
            "ambiguous_notional_pct": 0.3457844041397684,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3457844041397684,
            "run_retail_pct": 0.25806451612903225,
            "run_mixed_pct": 0.1935483870967742,
            "run_instit_pct": 0.1935483870967742,
            "run_unclear_pct": 0.3548387096774194,
            "avg_trade_size": 1712.1052631578948,
            "avg_run_notional": 3148.064516129032,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.45161290322580644,
            "na_confidence_pct": 0.5483870967741935,
            "avg_feature_coverage": 0.8112903225806456,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2589118198874296,
            "mixed_pct": 0.08442776735459662,
            "instit_pct": 0.324577861163227,
            "ambiguous_pct": 0.3151969981238274,
            "unobservable_pct": 0.016885553470919325,
            "unclear_pct": 0.3320825515947467,
            "retail_qty_pct": 0.07284233284949926,
            "mixed_qty_pct": 0.060774822813485,
            "instit_qty_pct": 0.42939565278123615,
            "ambiguous_qty_pct": 0.4275372440892279,
            "unobservable_qty_pct": 0.00944994746655168,
            "unclear_qty_pct": 0.4369871915557796,
            "retail_notional_pct": 0.07188011835534273,
            "mixed_notional_pct": 0.06177317423083274,
            "instit_notional_pct": 0.42842121127129007,
            "ambiguous_notional_pct": 0.4284493616892723,
            "unobservable_notional_pct": 0.00947613445326224,
            "unclear_notional_pct": 0.4379254961425345,
            "run_retail_pct": 0.44755244755244755,
            "run_mixed_pct": 0.06643356643356643,
            "run_instit_pct": 0.17832167832167833,
            "run_unclear_pct": 0.3076923076923077,
            "avg_trade_size": 2186.0585365853663,
            "avg_run_notional": 4074.018181818182,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11538461538461539,
            "medium_confidence_pct": 0.17832167832167833,
            "low_confidence_pct": 0.3321678321678322,
            "na_confidence_pct": 0.3741258741258741,
            "avg_feature_coverage": 0.8297202797202797,
            "observable_run_pct": 0.986013986013986,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.225,
            "mixed_pct": 0.0375,
            "instit_pct": 0.325,
            "ambiguous_pct": 0.375,
            "unobservable_pct": 0.0375,
            "unclear_pct": 0.4125,
            "retail_qty_pct": 0.10539845758354756,
            "mixed_qty_pct": 0.13560411311053985,
            "instit_qty_pct": 0.4087403598971722,
            "ambiguous_qty_pct": 0.32904884318766064,
            "unobservable_qty_pct": 0.021208226221079693,
            "unclear_qty_pct": 0.35025706940874035,
            "retail_notional_pct": 0.10533302402309516,
            "mixed_notional_pct": 0.13415472385469293,
            "instit_notional_pct": 0.4081262673127814,
            "ambiguous_notional_pct": 0.3316450149499948,
            "unobservable_notional_pct": 0.02074096985943568,
            "unclear_notional_pct": 0.3523859848094305,
            "run_retail_pct": 0.3050847457627119,
            "run_mixed_pct": 0.05084745762711865,
            "run_instit_pct": 0.23728813559322035,
            "run_unclear_pct": 0.4067796610169492,
            "avg_trade_size": 1454.85,
            "avg_run_notional": 1972.677966101695,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5423728813559322,
            "na_confidence_pct": 0.4576271186440678,
            "avg_feature_coverage": 0.8152542372881356,
            "observable_run_pct": 0.9830508474576272,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2698776758409786,
            "mixed_pct": 0.13990825688073394,
            "instit_pct": 0.38914373088685017,
            "ambiguous_pct": 0.20107033639143732,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20107033639143732,
            "retail_qty_pct": 0.07120352510620005,
            "mixed_qty_pct": 0.16736901051536013,
            "instit_qty_pct": 0.5053481834277019,
            "ambiguous_qty_pct": 0.2560792809507379,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2560792809507379,
            "retail_notional_pct": 0.07073978445450044,
            "mixed_notional_pct": 0.16852311421480926,
            "instit_notional_pct": 0.5064836057962795,
            "ambiguous_notional_pct": 0.2542534955344108,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2542534955344108,
            "run_retail_pct": 0.4970501474926254,
            "run_mixed_pct": 0.13421828908554573,
            "run_instit_pct": 0.19469026548672566,
            "run_unclear_pct": 0.17404129793510326,
            "avg_trade_size": 3132.901758409786,
            "avg_run_notional": 6044.005162241888,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.03982300884955752,
            "medium_confidence_pct": 0.22271386430678466,
            "low_confidence_pct": 0.42920353982300885,
            "na_confidence_pct": 0.308259587020649,
            "avg_feature_coverage": 0.859513274336283,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06818181818181818,
            "mixed_pct": 0.06818181818181818,
            "instit_pct": 0.4318181818181818,
            "ambiguous_pct": 0.38636363636363635,
            "unobservable_pct": 0.045454545454545456,
            "unclear_pct": 0.4318181818181818,
            "retail_qty_pct": 0.0023289960002025214,
            "mixed_qty_pct": 0.008050225305047846,
            "instit_qty_pct": 0.9101817629487114,
            "ambiguous_qty_pct": 0.07437598096298921,
            "unobservable_qty_pct": 0.005063034783048959,
            "unclear_qty_pct": 0.07943901574603816,
            "retail_notional_pct": 0.0023790495844018644,
            "mixed_notional_pct": 0.007999956209613633,
            "instit_notional_pct": 0.9093956379301379,
            "ambiguous_notional_pct": 0.07475018953026599,
            "unobservable_notional_pct": 0.005475166745580592,
            "unclear_notional_pct": 0.08022535627584658,
            "run_retail_pct": 0.08823529411764706,
            "run_mixed_pct": 0.058823529411764705,
            "run_instit_pct": 0.38235294117647056,
            "run_unclear_pct": 0.47058823529411764,
            "avg_trade_size": 16608.045454545456,
            "avg_run_notional": 21492.764705882353,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47058823529411764,
            "na_confidence_pct": 0.5294117647058824,
            "avg_feature_coverage": 0.8250000000000002,
            "observable_run_pct": 0.9705882352941176,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.2,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.8,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.909008271975275,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.09099172802472502,
            "unclear_qty_pct": 0.09099172802472502,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.909008271975275,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.09099172802472502,
            "unclear_notional_pct": 0.09099172802472502,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.01999999999998,
            "avg_run_notional": 366.7,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.30649588289112534,
            "mixed_pct": 0.17490088441598048,
            "instit_pct": 0.32235437633424824,
            "ambiguous_pct": 0.19365660262275083,
            "unobservable_pct": 0.00259225373589509,
            "unclear_pct": 0.19624885635864592,
            "retail_qty_pct": 0.0647332425909998,
            "mixed_qty_pct": 0.13136205356024483,
            "instit_qty_pct": 0.5307340943441918,
            "ambiguous_qty_pct": 0.26945462744148374,
            "unobservable_qty_pct": 0.003715982063079839,
            "unclear_qty_pct": 0.27317060950456357,
            "retail_notional_pct": 0.06476665644951256,
            "mixed_notional_pct": 0.13179148212459524,
            "instit_notional_pct": 0.5298726772736185,
            "ambiguous_notional_pct": 0.26990001080657955,
            "unobservable_notional_pct": 0.0036691733456941204,
            "unclear_notional_pct": 0.27356918415227366,
            "run_retail_pct": 0.6160685932041918,
            "run_mixed_pct": 0.15020641473483645,
            "run_instit_pct": 0.11114639568116863,
            "run_unclear_pct": 0.12257859637980312,
            "avg_trade_size": 1897.1476822201892,
            "avg_run_notional": 3950.9350587488093,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22991425849476024,
            "medium_confidence_pct": 0.3753572562718323,
            "low_confidence_pct": 0.12194347411876787,
            "na_confidence_pct": 0.27278501111463954,
            "avg_feature_coverage": 0.866560812956494,
            "observable_run_pct": 0.9993648777389648,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24358974358974358,
            "mixed_pct": 0.09188034188034189,
            "instit_pct": 0.30128205128205127,
            "ambiguous_pct": 0.36217948717948717,
            "unobservable_pct": 0.0010683760683760685,
            "unclear_pct": 0.36324786324786323,
            "retail_qty_pct": 0.060673225934335245,
            "mixed_qty_pct": 0.032489998918802034,
            "instit_qty_pct": 0.4987025624391826,
            "ambiguous_qty_pct": 0.40687281507910766,
            "unobservable_qty_pct": 0.0012613976285724582,
            "unclear_qty_pct": 0.40813421270768013,
            "retail_notional_pct": 0.05736365274538408,
            "mixed_notional_pct": 0.031116727656576595,
            "instit_notional_pct": 0.5067118390890766,
            "ambiguous_notional_pct": 0.4038136581699861,
            "unobservable_notional_pct": 0.0009941223389766268,
            "unclear_notional_pct": 0.4048077805089627,
            "run_retail_pct": 0.4101123595505618,
            "run_mixed_pct": 0.07116104868913857,
            "run_instit_pct": 0.1891385767790262,
            "run_unclear_pct": 0.32958801498127344,
            "avg_trade_size": 2294.469017094017,
            "avg_run_notional": 4021.765917602996,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.003745318352059925,
            "medium_confidence_pct": 0.24344569288389514,
            "low_confidence_pct": 0.352059925093633,
            "na_confidence_pct": 0.40074906367041196,
            "avg_feature_coverage": 0.8370786516853932,
            "observable_run_pct": 0.99812734082397,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23416666666666666,
            "mixed_pct": 0.07833333333333334,
            "instit_pct": 0.34,
            "ambiguous_pct": 0.3325,
            "unobservable_pct": 0.015,
            "unclear_pct": 0.34750000000000003,
            "retail_qty_pct": 0.08157083692282177,
            "mixed_qty_pct": 0.06549299992168389,
            "instit_qty_pct": 0.4831666428647112,
            "ambiguous_qty_pct": 0.35411090482749724,
            "unobservable_qty_pct": 0.01565861546328587,
            "unclear_qty_pct": 0.36976952029078314,
            "retail_notional_pct": 0.08175057765568684,
            "mixed_notional_pct": 0.06624405386989934,
            "instit_notional_pct": 0.4838051267782254,
            "ambiguous_notional_pct": 0.35313084714889376,
            "unobservable_notional_pct": 0.015069394547294725,
            "unclear_notional_pct": 0.3682002416961885,
            "run_retail_pct": 0.4031496062992126,
            "run_mixed_pct": 0.06929133858267716,
            "run_instit_pct": 0.19370078740157481,
            "run_unclear_pct": 0.33385826771653543,
            "avg_trade_size": 2597.8205833333336,
            "avg_run_notional": 4909.267244094489,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.06456692913385827,
            "medium_confidence_pct": 0.19370078740157481,
            "low_confidence_pct": 0.33858267716535434,
            "na_confidence_pct": 0.4031496062992126,
            "avg_feature_coverage": 0.8278740157480315,
            "observable_run_pct": 0.988976377952756,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5977011494252874,
            "mixed_pct": 0.1425287356321839,
            "instit_pct": 0.12643678160919541,
            "ambiguous_pct": 0.13333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13333333333333333,
            "retail_qty_pct": 0.0853986264556584,
            "mixed_qty_pct": 0.09495371752762019,
            "instit_qty_pct": 0.4369214690952523,
            "ambiguous_qty_pct": 0.3827261869214691,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3827261869214691,
            "retail_notional_pct": 0.08589567730530269,
            "mixed_notional_pct": 0.09628503524613613,
            "instit_notional_pct": 0.4370396179773633,
            "ambiguous_notional_pct": 0.38077966947119796,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38077966947119796,
            "run_retail_pct": 0.6994535519125683,
            "run_mixed_pct": 0.14207650273224043,
            "run_instit_pct": 0.04918032786885246,
            "run_unclear_pct": 0.1092896174863388,
            "avg_trade_size": 626.7908045977011,
            "avg_run_notional": 744.9562841530054,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5382513661202186,
            "medium_confidence_pct": 0.1284153005464481,
            "low_confidence_pct": 0.08196721311475409,
            "na_confidence_pct": 0.25136612021857924,
            "avg_feature_coverage": 0.8446721311475406,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1881720430107527,
            "mixed_pct": 0.05913978494623656,
            "instit_pct": 0.2956989247311828,
            "ambiguous_pct": 0.43010752688172044,
            "unobservable_pct": 0.026881720430107527,
            "unclear_pct": 0.45698924731182794,
            "retail_qty_pct": 0.0815039111784002,
            "mixed_qty_pct": 0.07847590209437295,
            "instit_qty_pct": 0.3946505172848852,
            "ambiguous_qty_pct": 0.42417360585415087,
            "unobservable_qty_pct": 0.021196063588190765,
            "unclear_qty_pct": 0.44536966944234163,
            "retail_notional_pct": 0.08073154946550916,
            "mixed_notional_pct": 0.07573414779556403,
            "instit_notional_pct": 0.3962501155698951,
            "ambiguous_notional_pct": 0.4258471671826132,
            "unobservable_notional_pct": 0.021437019986418546,
            "unclear_notional_pct": 0.44728418716903173,
            "run_retail_pct": 0.26515151515151514,
            "run_mixed_pct": 0.05303030303030303,
            "run_instit_pct": 0.21212121212121213,
            "run_unclear_pct": 0.46969696969696967,
            "avg_trade_size": 1686.3602150537633,
            "avg_run_notional": 2376.2348484848485,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4772727272727273,
            "na_confidence_pct": 0.5227272727272727,
            "avg_feature_coverage": 0.8234848484848486,
            "observable_run_pct": 0.9848484848484849,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-46",
          "timestamp": "2026-03-31T08:29:14.951700",
          "price": 0.225,
          "size": 4500.0,
          "notional": 1012.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1508,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-45",
          "timestamp": "2026-03-31T08:29:14.860700",
          "price": 0.225,
          "size": 2900.0,
          "notional": 652.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1508,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-44",
          "timestamp": "2026-03-31T08:29:14.860700",
          "price": 0.225,
          "size": 6600.0,
          "notional": 1485.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1508,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-43",
          "timestamp": "2026-03-31T08:29:14.860600",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1508,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-42",
          "timestamp": "2026-03-31T08:27:59.277100",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1507,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-41",
          "timestamp": "2026-03-31T07:43:48.350100",
          "price": 0.23,
          "size": 4000.0,
          "notional": 920.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1506,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-40",
          "timestamp": "2026-03-31T07:28:53.973300",
          "price": 0.225,
          "size": 3400.0,
          "notional": 765.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1505,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-39",
          "timestamp": "2026-03-31T07:28:53.973300",
          "price": 0.225,
          "size": 13600.0,
          "notional": 3060.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1505,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-38",
          "timestamp": "2026-03-31T07:28:47.858500",
          "price": 0.225,
          "size": 300.0,
          "notional": 67.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1504,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-37",
          "timestamp": "2026-03-31T07:28:47.828300",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1504,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-36",
          "timestamp": "2026-03-31T07:28:43.577700",
          "price": 0.225,
          "size": 11700.0,
          "notional": 2632.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1504,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-35",
          "timestamp": "2026-03-31T07:28:07.134900",
          "price": 0.225,
          "size": 3600.0,
          "notional": 810.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1503,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-03-31T07:28:07.134800",
          "price": 0.225,
          "size": 6400.0,
          "notional": 1440.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1503,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-03-31T07:28:07.134800",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1503,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-03-31T07:22:50.994400",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1502,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-03-31T07:22:04.730200",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1501,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-30",
          "timestamp": "2026-03-31T07:17:09.522100",
          "price": 0.225,
          "size": 1400.0,
          "notional": 315.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1500,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-29",
          "timestamp": "2026-03-31T07:16:57.473000",
          "price": 0.225,
          "size": 4400.0,
          "notional": 990.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1499,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-28",
          "timestamp": "2026-03-31T07:16:57.412900",
          "price": 0.225,
          "size": 15600.0,
          "notional": 3510.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1499,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-03-31T07:00:00.008700",
          "price": 0.225,
          "size": 8700.0,
          "notional": 1957.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1498,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-03-31T06:56:10.742100",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1497,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-03-31T06:46:39.014200",
          "price": 0.225,
          "size": 7400.0,
          "notional": 1665.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1496,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-03-31T06:46:39.014200",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1496,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-03-31T06:43:39.421900",
          "price": 0.225,
          "size": 1900.0,
          "notional": 427.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1495,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-03-31T06:43:39.421800",
          "price": 0.225,
          "size": 20700.0,
          "notional": 4657.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1494,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-03-31T06:43:31.919500",
          "price": 0.225,
          "size": 9300.0,
          "notional": 2092.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1493,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-03-31T06:28:59.291200",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1492,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-03-31T06:24:27.936000",
          "price": 0.225,
          "size": 1000.0,
          "notional": 225.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1491,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-03-31T06:24:27.875500",
          "price": 0.225,
          "size": 29000.0,
          "notional": 6525.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1491,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-03-31T06:03:47.594600",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1490,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        }
      ],
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
      "total_trades": 1307,
      "price_moving_trades": 178,
      "pct_price_moving": 13.618974751338945,
      "all_movers": {
        "count": 178,
        "avg_size": 2689.6404494382023,
        "median_size": 693.0,
        "retail_count": 99,
        "mixed_count": 27,
        "institutional_count": 31,
        "ambiguous_count": 21,
        "unobservable_count": 0,
        "retail_pct": 55.61797752808989,
        "mixed_pct": 15.168539325842698,
        "instit_pct": 17.415730337078653,
        "unclear_pct": 11.797752808988763
      },
      "positive_movers": {
        "count": 89,
        "avg_size": 2030.191011235955,
        "median_size": 98.0,
        "retail_count": 63,
        "mixed_count": 12,
        "institutional_count": 9,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 70.78651685393258,
        "mixed_pct": 13.48314606741573,
        "instit_pct": 10.112359550561797,
        "unclear_pct": 5.617977528089887
      },
      "negative_movers": {
        "count": 89,
        "avg_size": 3349.0898876404494,
        "median_size": 2025.0,
        "retail_count": 36,
        "mixed_count": 15,
        "institutional_count": 22,
        "ambiguous_count": 16,
        "unobservable_count": 0,
        "retail_pct": 40.44943820224719,
        "mixed_pct": 16.853932584269664,
        "instit_pct": 24.719101123595504,
        "unclear_pct": 17.97752808988764
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Toku Ltd",
      "mapping": {
        "ticker_to_security": "$ Toku Ltd",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 23,
        "window_days": 21
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.008626851108781272,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "2W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.011343649617005923,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.006692525408673298,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.012676880491184253,
        "interpretation": "No clear relationship"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Shorts covering significantly (-53% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
            "total_vol": 795000,
            "close": 0.235,
            "return": 0.06818181818181812
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 732800,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1332500,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 682900,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 791200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
            "total_vol": 1985700,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1124800,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1989800,
            "close": 0.24,
            "return": -0.07692307692307698
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1797700,
            "close": 0.26,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.011343649617005923,
          "max_short_ratio": 0.07371154614462645,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "S69",
          "avg_short_ratio": 0.00011381540561362179,
          "max_short_ratio": 0.02815622161671208,
          "is_target": false
        },
        {
          "ticker": "S71",
          "avg_short_ratio": 0.00036975177747255886,
          "max_short_ratio": 0.05687909469922573,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003324496775710248,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036008850613087648,
          "max_short_ratio": 1.0,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 9.80005752207676e-05,
          "continuous": 0.9999019994247792,
          "closing": 0.0,
          "auctions": 9.80005752207676e-05,
          "other": 0.0
        },
        "1W": {
          "opening": 0.026246431747462527,
          "continuous": 0.9737011214960812,
          "closing": 0.0,
          "auctions": 0.026298878503918807,
          "other": 0.0
        },
        "2W": {
          "opening": 0.013407955445782133,
          "continuous": 0.9805693581993887,
          "closing": 0.005995893997658172,
          "auctions": 0.01943064180061128,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01078642147499223,
          "continuous": 0.9793829196218418,
          "closing": 0.007471659994908326,
          "auctions": 0.020617080378158285,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.21707300952435904,
        "1W": 0.30250504828820596,
        "2W": 0.3118791918573253,
        "1M": 0.2534165416039159
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0128
        },
        {
          "time": "09:00",
          "avg_share": 0.0755
        },
        {
          "time": "09:30",
          "avg_share": 0.0769
        },
        {
          "time": "10:00",
          "avg_share": 0.0426
        },
        {
          "time": "10:30",
          "avg_share": 0.0502
        },
        {
          "time": "11:00",
          "avg_share": 0.0779
        },
        {
          "time": "11:30",
          "avg_share": 0.0815
        },
        {
          "time": "12:30",
          "avg_share": 0.0022
        },
        {
          "time": "13:00",
          "avg_share": 0.0421
        },
        {
          "time": "13:30",
          "avg_share": 0.0488
        },
        {
          "time": "14:00",
          "avg_share": 0.038
        },
        {
          "time": "14:30",
          "avg_share": 0.0996
        },
        {
          "time": "15:00",
          "avg_share": 0.1542
        },
        {
          "time": "15:30",
          "avg_share": 0.0377
        },
        {
          "time": "16:00",
          "avg_share": 0.0662
        },
        {
          "time": "16:30",
          "avg_share": 0.0644
        },
        {
          "time": "17:00",
          "avg_share": 0.0294
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.792014279172568,
          "hhi": 0.2210018882329819,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.586052283971099,
          "hhi": 0.2424270153101952,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.4637088126316202,
          "hhi": 0.6560993229977041,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.7392826001071056,
          "hhi": 0.35241198090165393,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.261580834317,
          "hhi": 0.5091192518742012,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.773217000353111,
          "hhi": 0.7800699156694875,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.988060157704368,
          "hhi": 0.8066141419943307,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S69",
          "auctions_pct": 4.968792249601078,
          "hhi": 0.4655395152299596,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 2.0728303901963123,
          "hhi": 0.6916226087043165,
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
