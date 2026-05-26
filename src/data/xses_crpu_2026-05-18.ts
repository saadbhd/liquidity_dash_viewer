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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 831762851.99,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1144044274.45,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-05-18",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
    "market_cap_category": "small",
    "universe_total": 556,
    "peers_count": 1,
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
          "score_pca": 76.61870503597122,
          "score_pca_percentile": 76.61870503597122,
          "rank_pca": 131,
          "total": 556,
          "adv_notional_sgd": 588259.0,
          "adv_volume_shares": 884600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019354099018436717,
          "votes": 232.0,
          "trades": 232.0,
          "spread_pct": 0.008399046396479008,
          "spread_ticks": 1.1170731707317074,
          "amihud": 1.268605591612572e-08,
          "volatility": 0.21424752335923616
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.509225620042896,
          "loadings": {
            "log_adv": 0.5582010845158807,
            "log_trades": 0.5108544933659523,
            "log_turnover": 0.5171603289417308,
            "neg_spread": 0.3353056737086063,
            "neg_amihud": 0.037050700814896635,
            "neg_vol": -0.2148994666580961
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 861102.0,
          "peer_median_score_pca": 80.75539568345323,
          "peer_median_trades": 1022.0,
          "peer_median_volatility": 0.14555417938472365,
          "peer_median_spread_pct": 0.007920913542635744,
          "peer_median_spread_ticks": 1.0341697810998398,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.001079852239167475,
          "target_vs_peer": {
            "score_pca_delta": -4.14,
            "adv_delta_pct": -31.7,
            "trades_delta_pct": -77.3,
            "volatility_delta_pct": -47.19,
            "spread_pct_delta_pct": -6.04,
            "spread_ticks_delta_pct": 8.02,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 79.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 76.61870503597122,
            "rank_pca": 131,
            "adv": 588259.0,
            "trades": 232.0,
            "volatility": 0.21424752335923616,
            "spread_pct": 0.008399046396479008,
            "spread_ticks": 1.1170731707317074,
            "amihud": 1.268605591612572e-08,
            "turnover_ratio": 0.0019354099018436717,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 80.75539568345323,
            "rank_pca": 108,
            "adv": 861102.0,
            "trades": 1022.0,
            "volatility": 0.14555417938472365,
            "spread_pct": 0.007920913542635744,
            "spread_ticks": 1.0341697810998398,
            "amihud": 0.0,
            "turnover_ratio": 0.001079852239167475,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30692882216504064,
              "median": 0.16160214643757717,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0340743174083704,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3461381.0044624857,
              "median": 20145.6,
              "min": 0.0,
              "max": 278505612.0,
              "p5": 0.0,
              "p95": 16390810.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10122083912945845,
              "median": 0.030010003334444844,
              "min": 0.0002805689255457263,
              "max": 1.7037037037037037,
              "p5": 0.003245852844055783,
              "p95": 0.43451335787784195,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010647882909083506,
              "median": 0.0004904231261749721,
              "min": 0.0,
              "max": 4.02082921363127,
              "p5": 0.0,
              "p95": 0.015569356810609078,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.218624476127013e-05,
              "median": 5.3434788184499446e-08,
              "min": 0.0,
              "max": 0.02777777777777779,
              "p5": 0.0,
              "p95": 5.685618729096985e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 590.9442446043165,
              "median": 10.0,
              "min": 0.0,
              "max": 11954.0,
              "p5": 0.0,
              "p95": 3927.0,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4631654661508162,
              "median": 0.1737461998975346,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.0,
              "p95": 1.8721052816945347,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 14239053.376279961,
              "median": 739711.7,
              "min": 0.0,
              "max": 103210425.0,
              "p5": 20415.01358389362,
              "p95": 69786987.39999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.048830551368077305,
              "median": 0.008801456010020456,
              "min": 0.004518055621325119,
              "max": 0.2005037783375315,
              "p5": 0.0045402764755409115,
              "p95": 0.18135251286700366,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006162649882191759,
              "median": 0.0015076310705055733,
              "min": 0.0,
              "max": 0.027459953655808673,
              "p5": 5.246819878137064e-05,
              "p95": 0.022375318363009017,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.1301752559216484e-08,
              "median": 8.536514298070788e-11,
              "min": 0.0,
              "max": 2.0517834019258194e-07,
              "p5": 0.0,
              "p95": 1.4743065490964494e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1479.5,
              "median": 379.5,
              "min": 0.0,
              "max": 7862.0,
              "p5": 3.1500000000000004,
              "p95": 5815.199999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 861102.0,
              "median": 861102.0,
              "min": 861102.0,
              "max": 861102.0,
              "p5": 861102.0,
              "p95": 861102.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1022.0,
              "median": 1022.0,
              "min": 1022.0,
              "max": 1022.0,
              "p5": 1022.0,
              "p95": 1022.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14555417938472365,
              "median": 0.14555417938472365,
              "min": 0.14555417938472365,
              "max": 0.14555417938472365,
              "p5": 0.14555417938472365,
              "p95": 0.14555417938472365,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007920913542635744,
              "median": 0.007920913542635744,
              "min": 0.007920913542635744,
              "max": 0.007920913542635744,
              "p5": 0.007920913542635744,
              "p95": 0.007920913542635744,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0341697810998398,
              "median": 1.0341697810998398,
              "min": 1.0341697810998398,
              "max": 1.0341697810998398,
              "p5": 1.0341697810998398,
              "p95": 1.0341697810998398,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0,
              "median": 0.0,
              "min": 0.0,
              "max": 0.0,
              "p5": 0.0,
              "p95": 0.0,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001079852239167475,
              "median": 0.001079852239167475,
              "min": 0.001079852239167475,
              "max": 0.001079852239167475,
              "p5": 0.001079852239167475,
              "p95": 0.001079852239167475,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.007462686567164201,
            "market": 0.001537341905700984,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.009000028472865185,
            "vs_sector": -0.007462686567164201,
            "vs_peers": -0.007462686567164201
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.11510791366906,
          "score_pca_percentile": 81.11510791366906,
          "rank_pca": 106,
          "total": 556,
          "adv_notional_sgd": 558847.0,
          "adv_volume_shares": 834100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018249213193848141,
          "votes": 326.0,
          "trades": 326.0,
          "spread_pct": 0.007547169811320759,
          "spread_ticks": 1.0006325110689438,
          "amihud": 1.268605591612572e-08,
          "volatility": 0.11566401268837027
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5269575965436494,
          "loadings": {
            "log_adv": 0.5394708230842016,
            "log_trades": 0.4900247943225048,
            "log_turnover": 0.4893551602038654,
            "neg_spread": 0.41458439160024824,
            "neg_amihud": 0.17055675880505258,
            "neg_vol": 0.16854860853551212
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 746861.5,
          "peer_median_score_pca": 83.09352517985612,
          "peer_median_trades": 788.0,
          "peer_median_volatility": 0.1324479481525253,
          "peer_median_spread_pct": 0.007476106194690273,
          "peer_median_spread_ticks": 1.007915567282322,
          "peer_median_amihud": 8.056633687561787e-09,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -1.98,
            "adv_delta_pct": -25.2,
            "trades_delta_pct": -58.63,
            "volatility_delta_pct": 12.67,
            "spread_pct_delta_pct": -0.95,
            "spread_ticks_delta_pct": -0.72,
            "amihud_delta_pct": -57.46,
            "turnover_ratio_delta_pct": 96.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.11510791366906,
            "rank_pca": 106,
            "adv": 558847.0,
            "trades": 326.0,
            "volatility": 0.11566401268837027,
            "spread_pct": 0.007547169811320759,
            "spread_ticks": 1.0006325110689438,
            "amihud": 1.268605591612572e-08,
            "turnover_ratio": 0.0018249213193848141,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.09352517985612,
            "rank_pca": 95,
            "adv": 746861.5,
            "trades": 788.0,
            "volatility": 0.1324479481525253,
            "spread_pct": 0.007476106194690273,
            "spread_ticks": 1.007915567282322,
            "amihud": 8.056633687561787e-09,
            "turnover_ratio": 0.0009295485934000085,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6350136853887897,
              "median": 0.4041084218615929,
              "min": 0.0,
              "max": 5.196152422706633,
              "p5": 0.08286813140447317,
              "p95": 1.8918061115215097,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3474887.3506967435,
              "median": 19174.95,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 14980107.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09971918509145239,
              "median": 0.028544243577545224,
              "min": 0.0002805689255457263,
              "max": 1.4782608695652175,
              "p5": 0.003307186885310123,
              "p95": 0.4780169182996021,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006595807646509541,
              "median": 0.0003703410631331521,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.015185067826221033,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.810155173953832e-05,
              "median": 9.04291158260726e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.271602456762155e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 520.7715827338129,
              "median": 8.5,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 3031.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2958746094278907,
              "median": 0.13688409272201343,
              "min": 0.08959750609718171,
              "max": 1.4284970218717992,
              "p5": 0.0987207834040977,
              "p95": 0.9917589319670836,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11100588.401226152,
              "median": 547754.25,
              "min": 0.0,
              "max": 78488037.0,
              "p5": 4886.525000000001,
              "p95": 53945464.04999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04028534352163985,
              "median": 0.008298471783488437,
              "min": 0.00428922705674426,
              "max": 0.15384615384615383,
              "p5": 0.004347082004297699,
              "p95": 0.14400465657741554,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002281913302613116,
              "median": 0.0008256992381788491,
              "min": 0.0,
              "max": 0.008914690180689036,
              "p5": 8.368796411960701e-05,
              "p95": 0.007543111615985124,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0923751925557192e-06,
              "median": 4.334906970345108e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 0.0,
              "p95": 5.664488883067674e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1293.25,
              "median": 285.5,
              "min": 0.0,
              "max": 6615.0,
              "p5": 11.55,
              "p95": 5102.299999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 746861.5,
              "median": 746861.5,
              "min": 746861.5,
              "max": 746861.5,
              "p5": 746861.5,
              "p95": 746861.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 788.0,
              "median": 788.0,
              "min": 788.0,
              "max": 788.0,
              "p5": 788.0,
              "p95": 788.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1324479481525253,
              "median": 0.1324479481525253,
              "min": 0.1324479481525253,
              "max": 0.1324479481525253,
              "p5": 0.1324479481525253,
              "p95": 0.1324479481525253,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007476106194690273,
              "median": 0.007476106194690273,
              "min": 0.007476106194690273,
              "max": 0.007476106194690273,
              "p5": 0.007476106194690273,
              "p95": 0.007476106194690273,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.007915567282322,
              "median": 1.007915567282322,
              "min": 1.007915567282322,
              "max": 1.007915567282322,
              "p5": 1.007915567282322,
              "p95": 1.007915567282322,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.056633687561787e-09,
              "median": 8.056633687561787e-09,
              "min": 8.056633687561787e-09,
              "max": 8.056633687561787e-09,
              "p5": 8.056633687561787e-09,
              "p95": 8.056633687561787e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009295485934000085,
              "median": 0.0009295485934000085,
              "min": 0.0009295485934000085,
              "max": 0.0009295485934000085,
              "p5": 0.0009295485934000085,
              "p95": 0.0009295485934000085,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.007462686567164312,
            "market": -0.002212550735976593,
            "sector": -0.0053855446401429585,
            "peers": -0.03649635036496357,
            "vs_market": -0.005250135831187719,
            "vs_sector": -0.002077141927021353,
            "vs_peers": 0.02903366379779926
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.81294964028777,
          "score_pca_percentile": 83.81294964028777,
          "rank_pca": 91,
          "total": 556,
          "adv_notional_sgd": 684382.5,
          "adv_volume_shares": 1013900.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022183044307927864,
          "votes": 402.0,
          "trades": 402.0,
          "spread_pct": 0.007673300545499049,
          "spread_ticks": 1.0,
          "amihud": 7.01906746522696e-09,
          "volatility": 0.18118782951393553
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5580250697331032,
          "loadings": {
            "log_adv": 0.5210530387494514,
            "log_trades": 0.4690567819114946,
            "log_turnover": 0.4763017462368887,
            "neg_spread": 0.416162357044051,
            "neg_amihud": 0.22801683432807013,
            "neg_vol": 0.23757804723297157
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1096435.5,
          "peer_median_score_pca": 85.97122302158273,
          "peer_median_trades": 840.0,
          "peer_median_volatility": 0.18506654650906773,
          "peer_median_spread_pct": 0.00755900731108807,
          "peer_median_spread_ticks": 1.0052830188679245,
          "peer_median_amihud": 6.1955971199717675e-09,
          "peer_median_turnover_ratio": 0.0013941159742881081,
          "target_vs_peer": {
            "score_pca_delta": -2.16,
            "adv_delta_pct": -37.6,
            "trades_delta_pct": -52.14,
            "volatility_delta_pct": 2.1,
            "spread_pct_delta_pct": -1.51,
            "spread_ticks_delta_pct": -0.53,
            "amihud_delta_pct": -13.29,
            "turnover_ratio_delta_pct": 59.12
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.81294964028777,
            "rank_pca": 91,
            "adv": 684382.5,
            "trades": 402.0,
            "volatility": 0.18118782951393553,
            "spread_pct": 0.007673300545499049,
            "spread_ticks": 1.0,
            "amihud": 7.01906746522696e-09,
            "turnover_ratio": 0.0022183044307927864,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.97122302158273,
            "rank_pca": 79,
            "adv": 1096435.5,
            "trades": 840.0,
            "volatility": 0.18506654650906773,
            "spread_pct": 0.00755900731108807,
            "spread_ticks": 1.0052830188679245,
            "amihud": 6.1955971199717675e-09,
            "turnover_ratio": 0.0013941159742881081,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.694368840715762,
              "median": 0.48455231386687236,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15806343322813482,
              "p95": 2.2222291745399905,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3340011.1986094397,
              "median": 14281.5,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 13478239.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10054938381144313,
              "median": 0.03141361256544505,
              "min": 0.00027741427863602243,
              "max": 1.2905982905982905,
              "p5": 0.0035051980962374756,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006727303244470469,
              "median": 0.0002904700533079706,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011937527588959215,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2466686521590052e-05,
              "median": 1.5279973532496166e-07,
              "min": 0.0,
              "max": 0.0007142857142857141,
              "p5": 0.0,
              "p95": 3.166820316572009e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 489.580035971223,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2851.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3418374091586558,
              "median": 0.1856085395059186,
              "min": 0.13206870732587808,
              "max": 1.3975478017204905,
              "p5": 0.1492604000916982,
              "p95": 1.0009111888689688,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10904667.711364077,
              "median": 733773.75,
              "min": 0.0,
              "max": 74036464.0,
              "p5": 3987.69,
              "p95": 51794214.599999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03824311479293927,
              "median": 0.008361537150577584,
              "min": 0.0043011219327491025,
              "max": 0.15384615384615383,
              "p5": 0.004375640395157306,
              "p95": 0.13808487486398255,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025895069999396555,
              "median": 0.0012024701957407628,
              "min": 0.0,
              "max": 0.008880210331949037,
              "p5": 0.00012090239922811311,
              "p95": 0.007989017778590714,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.5762456431241e-07,
              "median": 6.230571459044194e-09,
              "min": 0.0,
              "max": 7.609262899160584e-06,
              "p5": 3.043148676397958e-11,
              "p95": 4.957067389213164e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1243.625,
              "median": 455.0,
              "min": 0.0,
              "max": 6130.0,
              "p5": 6.300000000000001,
              "p95": 4689.399999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1096435.5,
              "median": 1096435.5,
              "min": 1096435.5,
              "max": 1096435.5,
              "p5": 1096435.5,
              "p95": 1096435.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 840.0,
              "median": 840.0,
              "min": 840.0,
              "max": 840.0,
              "p5": 840.0,
              "p95": 840.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.18506654650906773,
              "median": 0.18506654650906773,
              "min": 0.18506654650906773,
              "max": 0.18506654650906773,
              "p5": 0.18506654650906773,
              "p95": 0.18506654650906773,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00755900731108807,
              "median": 0.00755900731108807,
              "min": 0.00755900731108807,
              "max": 0.00755900731108807,
              "p5": 0.00755900731108807,
              "p95": 0.00755900731108807,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0052830188679245,
              "median": 1.0052830188679245,
              "min": 1.0052830188679245,
              "max": 1.0052830188679245,
              "p5": 1.0052830188679245,
              "p95": 1.0052830188679245,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.1955971199717675e-09,
              "median": 6.1955971199717675e-09,
              "min": 6.1955971199717675e-09,
              "max": 6.1955971199717675e-09,
              "p5": 6.1955971199717675e-09,
              "p95": 6.1955971199717675e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013941159742881081,
              "median": 0.0013941159742881081,
              "min": 0.0013941159742881081,
              "max": 0.0013941159742881081,
              "p5": 0.0013941159742881081,
              "p95": 0.0013941159742881081,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.022058823529411464,
            "market": -0.003988583579804916,
            "sector": -0.021292259957020665,
            "peers": -0.09589041095890383,
            "vs_market": -0.018070239949606548,
            "vs_sector": -0.0007665635723907993,
            "vs_peers": 0.07383158742949236
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 84.89208633093526,
          "score_pca_percentile": 84.89208633093526,
          "rank_pca": 85,
          "total": 556,
          "adv_notional_sgd": 563782.0,
          "adv_volume_shares": 845950.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018508478481400114,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.0074579331648325226,
          "spread_ticks": 1.0,
          "amihud": 5.896301886011478e-09,
          "volatility": 0.14208531639803237
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5759946497709829,
          "loadings": {
            "log_adv": 0.503996525450618,
            "log_trades": 0.44878687454442956,
            "log_turnover": 0.4584824927660032,
            "neg_spread": 0.43287703414108314,
            "neg_amihud": 0.2596839121968916,
            "neg_vol": 0.28205209883416044
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1091829.5,
          "peer_median_score_pca": 86.6906474820144,
          "peer_median_trades": 742.5,
          "peer_median_volatility": 0.1630073296946524,
          "peer_median_spread_pct": 0.007000262213502924,
          "peer_median_spread_ticks": 1.003866068939852,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0011872829287083182,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -48.4,
            "trades_delta_pct": -53.8,
            "volatility_delta_pct": 12.84,
            "spread_pct_delta_pct": -6.54,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": -8.02,
            "turnover_ratio_delta_pct": 55.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.89208633093526,
            "rank_pca": 85,
            "adv": 563782.0,
            "trades": 343.0,
            "volatility": 0.14208531639803237,
            "spread_pct": 0.0074579331648325226,
            "spread_ticks": 1.0,
            "amihud": 5.896301886011478e-09,
            "turnover_ratio": 0.0018508478481400114,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.6906474820144,
            "rank_pca": 75,
            "adv": 1091829.5,
            "trades": 742.5,
            "volatility": 0.1630073296946524,
            "spread_pct": 0.007000262213502924,
            "spread_ticks": 1.003866068939852,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0011872829287083182,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6884797315688055,
              "median": 0.45967927248420537,
              "min": 0.0,
              "max": 7.033791454274304,
              "p5": 0.15235957194712155,
              "p95": 1.9367962238397058,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2716793.32195963,
              "median": 12156.8,
              "min": 0.0,
              "max": 253464908.5,
              "p5": 0.0,
              "p95": 11186443.125,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09500474470398933,
              "median": 0.028726142058772216,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.003639024015347768,
              "p95": 0.46604249856410274,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003701969554488717,
              "median": 0.0002784742463960508,
              "min": 0.0,
              "max": 1.0464043240392855,
              "p5": 0.0,
              "p95": 0.0075896540086628425,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0190140306143371e-05,
              "median": 1.5786804052556762e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.5862854169705944e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 400.1852517985611,
              "median": 7.0,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 2300.0,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3576695872103011,
              "median": 0.16494057783106847,
              "min": 0.11462618480271378,
              "max": 1.3876019947539668,
              "p5": 0.12423688086107529,
              "p95": 1.0977005607869121,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8788610.18693953,
              "median": 636709.75,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 13255.060000000001,
              "p95": 40952467.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.035663767532301514,
              "median": 0.008135074672354897,
              "min": 0.004274986168547341,
              "max": 0.13333333333333333,
              "p5": 0.0043451830476433344,
              "p95": 0.12517362181317188,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002312643449478318,
              "median": 0.0012178553747374523,
              "min": 0.0,
              "max": 0.006862744480837043,
              "p5": 8.48750274404525e-05,
              "p95": 0.006628735871452848,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.337985556298931e-07,
              "median": 5.677354584372172e-09,
              "min": 0.0,
              "max": 7.421899249138285e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 4.834957231619178e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1124.1875,
              "median": 383.75,
              "min": 0.0,
              "max": 5579.0,
              "p5": 8.575000000000001,
              "p95": 4272.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1091829.5,
              "median": 1091829.5,
              "min": 1091829.5,
              "max": 1091829.5,
              "p5": 1091829.5,
              "p95": 1091829.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 742.5,
              "median": 742.5,
              "min": 742.5,
              "max": 742.5,
              "p5": 742.5,
              "p95": 742.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1630073296946524,
              "median": 0.1630073296946524,
              "min": 0.1630073296946524,
              "max": 0.1630073296946524,
              "p5": 0.1630073296946524,
              "p95": 0.1630073296946524,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007000262213502924,
              "median": 0.007000262213502924,
              "min": 0.007000262213502924,
              "max": 0.007000262213502924,
              "p5": 0.007000262213502924,
              "p95": 0.007000262213502924,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.003866068939852,
              "median": 1.003866068939852,
              "min": 1.003866068939852,
              "max": 1.003866068939852,
              "p5": 1.003866068939852,
              "p95": 1.003866068939852,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.458407282732866e-09,
              "median": 5.458407282732866e-09,
              "min": 5.458407282732866e-09,
              "max": 5.458407282732866e-09,
              "p5": 5.458407282732866e-09,
              "p95": 5.458407282732866e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011872829287083182,
              "median": 0.0011872829287083182,
              "min": 0.0011872829287083182,
              "max": 0.0011872829287083182,
              "p5": 0.0011872829287083182,
              "p95": 0.0011872829287083182,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.022058823529411242,
            "market": 0.09196855475302312,
            "sector": -0.025492041465023263,
            "peers": -0.18012422360248492,
            "vs_market": -0.11402737828243437,
            "vs_sector": 0.0034332179356120207,
            "vs_peers": 0.15806540007307368
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term liquidity is thinner, with trades down 28.8% from the 1M average and bid depth lighter than ask depth. That matters because access can feel less reliable intraday, especially for buyers.",
        "market_comparison": "Return -0.7% vs peers 0.0%."
      },
      "30d": {
        "liquidity": "Medium-term liquidity remains broadly steady, with the main signal still pointing to average access rather than a clear deterioration. That matters because the stock’s trading profile is holding around its usual range.",
        "market_comparison": "Market factors account for 42.1% of the current driver mix. That matters because broader moves are still shaping the tape, which can keep liquidity conditions tied to the wider market."
      },
      "6m": {
        "liquidity": "Six-month tradability is average relative to size, with a liquidity score of 84.9 compared with a peer median of 86.7. That matters because peer-relative access is serviceable, but not a clear strength.",
        "market_comparison": "Average daily volume is S$563.8K compared with a peer median of S$1.1M. That matters because the stock offers less natural trading capacity than the typical peer."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 4,
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 1.0,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.42058754261637676,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "42.1%",
          "display_range": null,
          "display_text": "42.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 42.1,
          "plain_english": "Market explains about 42.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.40773245632039457,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "40.8%",
          "display_range": null,
          "display_text": "40.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 40.8,
          "plain_english": "Sector explains about 40.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1716800010632287,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.2%",
          "display_range": null,
          "display_text": "17.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 17.2,
          "plain_english": "Company-specific explains about 17.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.871897445783851,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.87",
          "display_range": null,
          "display_text": "0.87",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.87% stock move in the same direction in this state.",
          "value_num": 0.87
        },
        "beta_stock_lag": {
          "median": -0.3531831191211056,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.35",
          "display_range": null,
          "display_text": "-0.35",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.35
        },
        "beta_sector": {
          "median": 0.5195014863397576,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.52",
          "display_range": null,
          "display_text": "0.52",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state.",
          "value_num": 0.52
        },
        "beta_market_lag": {
          "median": 0.8991267186587406,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.90",
          "display_range": null,
          "display_text": "0.90",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.9
        },
        "beta_sector_lag": {
          "median": 1.863266407481956,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.86",
          "display_range": null,
          "display_text": "1.86",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.86
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-22 to 2025-05-30",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46174113179887166,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Market explains about 46.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46174113179887166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Market explains about 46.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26409428235590043,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Sector explains about 26.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27416458584522796,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven, though based on only 7 trading days."
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
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19863657260917886,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17795870306504713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
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
            "median": 0.61564463497127,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889714,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.228630215299833,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.61564463497127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Still clearly company-driven."
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
            "median": 0.45398748742406814,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078132,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45398748742406814,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.4759438052069962,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30647222578631633,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21758396900668756,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4759438052069962,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
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
            "median": 0.48281505654789286,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.3%",
            "display_range": null,
            "display_text": "48.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.3,
            "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31423525143745373,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.4%",
              "display_range": null,
              "display_text": "31.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.4,
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20294969201465327,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.3%",
              "display_range": null,
              "display_text": "20.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.3,
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48281505654789286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly company-driven."
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.42191465124627753,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.42191465124627753,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759022888224927,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.30049511987147315,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
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
            "median": 0.7687417314818246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730312,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10746859170087227,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Sector explains about 10.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            }
          },
          "summary": "Dec: Still clearly company-driven."
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
            "median": 0.6344784334204318,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433794,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523025,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6344784334204318,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
            "median": 0.8241639016384484,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384484,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            }
          },
          "summary": "Feb: Still clearly company-driven."
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
            "median": 0.4594963935612946,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921916,
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
              "median": 0.3101476013894862,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4594963935612946,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47906534683171226,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23814695940556418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Market explains about 23.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28278769376272356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Sector explains about 28.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47906534683171226,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-18",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4606149758129017,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.1%",
            "display_range": null,
            "display_text": "46.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 46.1,
            "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2949938317092395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.5%",
              "display_range": null,
              "display_text": "29.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 29.5,
              "plain_english": "Market explains about 29.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2443911924778588,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.4%",
              "display_range": null,
              "display_text": "24.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 24.4,
              "plain_english": "Sector explains about 24.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4606149758129017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.33864504881661456,
          "expected_duration_days": 1.8907376868398396,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 84.99990725297026,
          "volatility": {
            "median": 1.8132523750126737e-127,
            "low": 1.8132523750126737e-127,
            "high": 1.8132523750126737e-127
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10163174931980339,
          "jump_rate": 0.0,
          "risk_score": 0.024404280831682428,
          "metrics": {
            "rolling_vol_10d": 0.006491906052798504,
            "downside_vol_10d": 0.0035653028346818425,
            "drawdown_21d": 0.008855604608802713,
            "amihud_stress": 1.03790348278229e-250,
            "spread_rel": 75.99054214992303,
            "spread_ticks": 1.017622731858872,
            "log_notional": 13.093335703881252,
            "log_trade_count": 5.704491702178818
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.34626303654918505,
          "expected_duration_days": 1.775573372532002,
          "current_probability": 3.962615140136354e-35,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.91202217384544,
          "volatility": {
            "median": 0.007437840591984626,
            "low": 0.007437840591984626,
            "high": 0.007437840591984626
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22606569499462129,
          "jump_rate": 5.516120019522428e-187,
          "risk_score": 0.1534850927441318,
          "metrics": {
            "rolling_vol_10d": 0.006710567133305159,
            "downside_vol_10d": 0.0036545399388685385,
            "drawdown_21d": 0.009964289730894534,
            "amihud_stress": 0.9052308424236152,
            "spread_rel": 74.68927194205777,
            "spread_ticks": 1.0039112600046676,
            "log_notional": 13.231208783598357,
            "log_trade_count": 5.826295053728456
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1477612373433637,
          "expected_duration_days": 1.4950026982829276,
          "current_probability": 1.0,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 37.08807057318428,
          "volatility": {
            "median": 0.01220863025357874,
            "low": 0.01220863025357874,
            "high": 0.01220863025357874
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3274533399139241,
          "jump_rate": 0.13481423872222517,
          "risk_score": 0.5253487722881037,
          "metrics": {
            "rolling_vol_10d": 0.00852303409245693,
            "downside_vol_10d": 0.004532154001801258,
            "drawdown_21d": 0.007645923986073646,
            "amihud_stress": 0.9358357916845829,
            "spread_rel": 77.79715762129369,
            "spread_ticks": 1.0527779608654086,
            "log_notional": 13.64522007542362,
            "log_trade_count": 5.792052652299202
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 3.958584218384122e-23,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19124081994165726,
          "jump_rate": 0.047619047619047616,
          "risk_score": 0.7643772893746318,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193388,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.47110590381715506,
            0.4209529786689471,
            0.1078236637799012,
            0.00011745373399651254
          ],
          [
            0.3683707288280192,
            0.43680164645971203,
            0.184303585432961,
            0.010524039279307918
          ],
          [
            0.3299275403029579,
            0.3084986725806886,
            0.331104886199509,
            0.030468900916844503
          ],
          [
            0.00023730422401518835,
            0.04769732257064456,
            0.00023813068042334096,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            40.0,
            36.0,
            9.0,
            0.0
          ],
          [
            32.0,
            38.0,
            16.0,
            1.0
          ],
          [
            12.0,
            11.0,
            12.0,
            1.0
          ],
          [
            0.0,
            2.0,
            0.0,
            40.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 3.962615140136354e-35,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.0,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 3.958584218384122e-23,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.3274533399139241,
        "current_score": 0.8757172360184056,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 10988.901593411641,
        "loglik": -4966.770041018735,
        "n_params": 191,
        "bic_delta_vs_next_best": 522.3451308306994,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13312.906040682845,
            "loglik": -6405.044911610927,
            "n_params": 91,
            "converged": true,
            "iterations": 9,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11511.24672424234,
            "loglik": -5368.8416563819455,
            "n_params": 140,
            "converged": true,
            "iterations": 32,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.24672424234,
                "loglik": -5368.8416563819455,
                "n_params": 140,
                "converged": true,
                "iterations": 32
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.246727209096,
                "loglik": -5368.841657865323,
                "n_params": 140,
                "converged": true,
                "iterations": 31
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.246732638883,
                "loglik": -5368.841660580217,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 10988.901593411641,
            "loglik": -4966.770041018735,
            "n_params": 191,
            "converged": true,
            "iterations": 24,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 10988.901593411641,
                "loglik": -4966.770041018735,
                "n_params": 191,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12687.371870616862,
                "loglik": -5816.005179621346,
                "n_params": 191,
                "converged": true,
                "iterations": 62
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12684.918206891658,
                "loglik": -5814.778347758744,
                "n_params": 191,
                "converged": true,
                "iterations": 47
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 10988.901593411641,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 11511.246727209096,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11511.246732638883,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 1,
            "3": 2
          },
          "selected_state_share": 0.3333333333333333,
          "stable": false,
          "majority_support": false
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 6399.805240578769,
                "3": 6168.793945762381,
                "4": 6013.621016770048
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 10288.204464902388,
                "3": 9940.545790091614,
                "4": 8820.920908163675
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13312.906040682845,
                "3": 11511.246750692455,
                "4": 10988.901593411641
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 522.3451308306994,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 522.35 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 37.08807057318428,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 84.99990725297026,
              "pct_time": 0.33864504881661456,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 86.91202217384544,
              "pct_time": 0.34626303654918505,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 37.08807057318428,
              "pct_time": 0.1477612373433637,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.0,
              "pct_time": 0.16733067729083664,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.47110590381715506,
            0.43680164645971203,
            0.331104886199509,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.8907376868398396,
            1.775573372532002,
            1.4950026982829276,
            20.758620689655157
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            0,
            1,
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 10988.901593411641,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 11511.246727209096,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11511.246732638883,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 1,
            "3": 2
          },
          "selected_state_share": 0.3333333333333333,
          "stable": false,
          "majority_support": false
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 6399.805240578769,
                "3": 6168.793945762381,
                "4": 6013.621016770048
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 10288.204464902388,
                "3": 9940.545790091614,
                "4": 8820.920908163675
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13312.906040682845,
                "3": 11511.246750692455,
                "4": 10988.901593411641
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.024404280831682428,
            "jump_probability": 0.10163174931980339,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006491906052798504,
            "downside_vol_10d": 0.0035653028346818425,
            "drawdown_21d": 0.008855604608802713,
            "amihud_stress": 1.03790348278229e-250,
            "spread_rel": 75.99054214992303,
            "spread_ticks": 1.017622731858872,
            "log_notional": 13.093335703881252,
            "log_trade_count": 5.704491702178818
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1534850927441318,
            "jump_probability": 0.22606569499462129,
            "jump_rate": 5.516120019522428e-187,
            "rolling_vol_10d": 0.006710567133305159,
            "downside_vol_10d": 0.0036545399388685385,
            "drawdown_21d": 0.009964289730894534,
            "amihud_stress": 0.9052308424236152,
            "spread_rel": 74.68927194205777,
            "spread_ticks": 1.0039112600046676,
            "log_notional": 13.231208783598357,
            "log_trade_count": 5.826295053728456
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5253487722881037,
            "jump_probability": 0.3274533399139241,
            "jump_rate": 0.13481423872222517,
            "rolling_vol_10d": 0.00852303409245693,
            "downside_vol_10d": 0.004532154001801258,
            "drawdown_21d": 0.007645923986073646,
            "amihud_stress": 0.9358357916845829,
            "spread_rel": 77.79715762129369,
            "spread_ticks": 1.0527779608654086,
            "log_notional": 13.64522007542362,
            "log_trade_count": 5.792052652299202
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7643772893746318,
            "jump_probability": 0.19124081994165726,
            "jump_rate": 0.047619047619047616,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193388,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-05",
          "state": 1,
          "probabilities": [
            0.0,
            0.9998189692944766,
            0.00018103070552342722,
            4.258926269999932e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9997438298473548,
            0.0002561701526452569,
            3.901215542170255e-23
          ],
          "jump_probability": 0.16374858975375833,
          "jump_score": 0.8320895343072666
        },
        {
          "trade_date": "2026-05-06",
          "state": 1,
          "probabilities": [
            0.0,
            0.9996686175063262,
            0.000331382493673845,
            8.087117202203733e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9998155116650271,
            0.0001844883349728696,
            6.245490910009641e-23
          ],
          "jump_probability": 0.20092536308881123,
          "jump_score": 1.049547092934568
        },
        {
          "trade_date": "2026-05-07",
          "state": 2,
          "probabilities": [
            0.0,
            2.7857197643409605e-05,
            0.9999721428023566,
            2.7381792312147903e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            1.9674832759513374e-05,
            0.9999803251672406,
            1.771032070635629e-20
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999960640723874,
            3.935927612635739e-06,
            1.1834788536627091e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999944309081307,
            5.56909186934949e-06,
            1.0842706662180107e-24
          ],
          "jump_probability": 0.17038219268765661,
          "jump_score": 0.8735469428739161
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9995628382029496,
            0.000437161797050367,
            2.2761876271489245e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9993811389607623,
            0.000618861039237712,
            2.084107224634231e-22
          ],
          "jump_probability": 0.1556674833035616,
          "jump_score": 0.7797181051414109
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999983959679344,
            1.6040320656298314e-06,
            2.0551992731173102e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999977288879441,
            2.2711120558799715e-06,
            1.882119598222508e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999923024394972,
            7.697560502762223e-06,
            2.77317298662953e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999891012015639,
            1.0898798436096813e-05,
            2.5396182535180462e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999939332954687,
            6.066704531324294e-06,
            6.220892100460719e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999991410297634,
            8.589702365948464e-06,
            5.696981154453618e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999931392995169,
            6.860700483066136e-06,
            6.753543912745864e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999961811027365,
            3.818897263535461e-06,
            5.2269877256076365e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            3.962615140136354e-35,
            1.0,
            3.958584218384122e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            3.962615140136354e-35,
            1.0,
            3.958584218384122e-23
          ],
          "jump_probability": 0.17073527479564135,
          "jump_score": 0.8757172360184056
        }
      ],
      "methodology": {
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_aware",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
        "current_state_probability_basis": "filtered",
        "historical_state_probability_basis": "smoothed",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.87",
        "sector_link_display": "0.52",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.87% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.35",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Stressed / Illiquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 42.1,
        "driver_share_display": "42.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Stressed / Illiquid",
        "jump_risk_label": "Watch",
        "jump_risk_probability": 32.7,
        "jump_risk_score": 0.88,
        "jump_risk_note": "Jump risk is watch based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.331104886199509,
        "effective_days": 37.1,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.5 days.",
        "expected_duration_days": 1.5
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 4,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.33864504881661456,
          "expected_duration_days": 1.8907376868398396,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 84.99990725297026,
          "volatility": {
            "median": 1.8132523750126737e-127,
            "low": 1.8132523750126737e-127,
            "high": 1.8132523750126737e-127
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10163174931980339,
          "jump_rate": 0.0,
          "risk_score": 0.024404280831682428,
          "metrics": {
            "rolling_vol_10d": 0.006491906052798504,
            "downside_vol_10d": 0.0035653028346818425,
            "drawdown_21d": 0.008855604608802713,
            "amihud_stress": 1.03790348278229e-250,
            "spread_rel": 75.99054214992303,
            "spread_ticks": 1.017622731858872,
            "log_notional": 13.093335703881252,
            "log_trade_count": 5.704491702178818
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.34626303654918505,
          "expected_duration_days": 1.775573372532002,
          "current_probability": 3.962615140136354e-35,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.91202217384544,
          "volatility": {
            "median": 0.007437840591984626,
            "low": 0.007437840591984626,
            "high": 0.007437840591984626
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22606569499462129,
          "jump_rate": 5.516120019522428e-187,
          "risk_score": 0.1534850927441318,
          "metrics": {
            "rolling_vol_10d": 0.006710567133305159,
            "downside_vol_10d": 0.0036545399388685385,
            "drawdown_21d": 0.009964289730894534,
            "amihud_stress": 0.9052308424236152,
            "spread_rel": 74.68927194205777,
            "spread_ticks": 1.0039112600046676,
            "log_notional": 13.231208783598357,
            "log_trade_count": 5.826295053728456
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1477612373433637,
          "expected_duration_days": 1.4950026982829276,
          "current_probability": 1.0,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 37.08807057318428,
          "volatility": {
            "median": 0.01220863025357874,
            "low": 0.01220863025357874,
            "high": 0.01220863025357874
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3274533399139241,
          "jump_rate": 0.13481423872222517,
          "risk_score": 0.5253487722881037,
          "metrics": {
            "rolling_vol_10d": 0.00852303409245693,
            "downside_vol_10d": 0.004532154001801258,
            "drawdown_21d": 0.007645923986073646,
            "amihud_stress": 0.9358357916845829,
            "spread_rel": 77.79715762129369,
            "spread_ticks": 1.0527779608654086,
            "log_notional": 13.64522007542362,
            "log_trade_count": 5.792052652299202
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 3.958584218384122e-23,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19124081994165726,
          "jump_rate": 0.047619047619047616,
          "risk_score": 0.7643772893746318,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193388,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": [
        [
          0.47110590381715506,
          0.4209529786689471,
          0.1078236637799012,
          0.00011745373399651254
        ],
        [
          0.3683707288280192,
          0.43680164645971203,
          0.184303585432961,
          0.010524039279307918
        ],
        [
          0.3299275403029579,
          0.3084986725806886,
          0.331104886199509,
          0.030468900916844503
        ],
        [
          0.00023730422401518835,
          0.04769732257064456,
          0.00023813068042334096,
          0.9518272425249169
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.47110590381715506,
            0.4209529786689471,
            0.1078236637799012,
            0.00011745373399651254
          ],
          [
            0.3683707288280192,
            0.43680164645971203,
            0.184303585432961,
            0.010524039279307918
          ],
          [
            0.3299275403029579,
            0.3084986725806886,
            0.331104886199509,
            0.030468900916844503
          ],
          [
            0.00023730422401518835,
            0.04769732257064456,
            0.00023813068042334096,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            40.0,
            36.0,
            9.0,
            0.0
          ],
          [
            32.0,
            38.0,
            16.0,
            1.0
          ],
          [
            12.0,
            11.0,
            12.0,
            1.0
          ],
          [
            0.0,
            2.0,
            0.0,
            40.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 1.0,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 3.962615140136354e-35,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.0,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 3.958584218384122e-23,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.3274533399139241,
        "current_score": 0.8757172360184056,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 10988.901593411641,
        "loglik": -4966.770041018735,
        "n_params": 191,
        "bic_delta_vs_next_best": 522.3451308306994,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13312.906040682845,
            "loglik": -6405.044911610927,
            "n_params": 91,
            "converged": true,
            "iterations": 9,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13312.906040682845,
                "loglik": -6405.044911610927,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11511.24672424234,
            "loglik": -5368.8416563819455,
            "n_params": 140,
            "converged": true,
            "iterations": 32,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.24672424234,
                "loglik": -5368.8416563819455,
                "n_params": 140,
                "converged": true,
                "iterations": 32
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.246727209096,
                "loglik": -5368.841657865323,
                "n_params": 140,
                "converged": true,
                "iterations": 31
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11511.246732638883,
                "loglik": -5368.841660580217,
                "n_params": 140,
                "converged": true,
                "iterations": 26
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 10988.901593411641,
            "loglik": -4966.770041018735,
            "n_params": 191,
            "converged": true,
            "iterations": 24,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 10988.901593411641,
                "loglik": -4966.770041018735,
                "n_params": 191,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12687.371870616862,
                "loglik": -5816.005179621346,
                "n_params": 191,
                "converged": true,
                "iterations": 62
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12684.918206891658,
                "loglik": -5814.778347758744,
                "n_params": 191,
                "converged": true,
                "iterations": 47
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 10988.901593411641,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 11511.246727209096,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11511.246732638883,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 1,
            "3": 2
          },
          "selected_state_share": 0.3333333333333333,
          "stable": false,
          "majority_support": false
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 6399.805240578769,
                "3": 6168.793945762381,
                "4": 6013.621016770048
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 10288.204464902388,
                "3": 9940.545790091614,
                "4": 8820.920908163675
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13312.906040682845,
                "3": 11511.246750692455,
                "4": 10988.901593411641
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 522.3451308306994,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 522.35 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 37.08807057318428,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 84.99990725297026,
              "pct_time": 0.33864504881661456,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 86.91202217384544,
              "pct_time": 0.34626303654918505,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 37.08807057318428,
              "pct_time": 0.1477612373433637,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.0,
              "pct_time": 0.16733067729083664,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.47110590381715506,
            0.43680164645971203,
            0.331104886199509,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.8907376868398396,
            1.775573372532002,
            1.4950026982829276,
            20.758620689655157
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            0,
            1,
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 10988.901593411641,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 3,
              "bic": 11511.246727209096,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11511.246732638883,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 1,
            "3": 2
          },
          "selected_state_share": 0.3333333333333333,
          "stable": false,
          "majority_support": false
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 6399.805240578769,
                "3": 6168.793945762381,
                "4": 6013.621016770048
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 10288.204464902388,
                "3": 9940.545790091614,
                "4": 8820.920908163675
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13312.906040682845,
                "3": 11511.246750692455,
                "4": 10988.901593411641
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.024404280831682428,
            "jump_probability": 0.10163174931980339,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006491906052798504,
            "downside_vol_10d": 0.0035653028346818425,
            "drawdown_21d": 0.008855604608802713,
            "amihud_stress": 1.03790348278229e-250,
            "spread_rel": 75.99054214992303,
            "spread_ticks": 1.017622731858872,
            "log_notional": 13.093335703881252,
            "log_trade_count": 5.704491702178818
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1534850927441318,
            "jump_probability": 0.22606569499462129,
            "jump_rate": 5.516120019522428e-187,
            "rolling_vol_10d": 0.006710567133305159,
            "downside_vol_10d": 0.0036545399388685385,
            "drawdown_21d": 0.009964289730894534,
            "amihud_stress": 0.9052308424236152,
            "spread_rel": 74.68927194205777,
            "spread_ticks": 1.0039112600046676,
            "log_notional": 13.231208783598357,
            "log_trade_count": 5.826295053728456
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5253487722881037,
            "jump_probability": 0.3274533399139241,
            "jump_rate": 0.13481423872222517,
            "rolling_vol_10d": 0.00852303409245693,
            "downside_vol_10d": 0.004532154001801258,
            "drawdown_21d": 0.007645923986073646,
            "amihud_stress": 0.9358357916845829,
            "spread_rel": 77.79715762129369,
            "spread_ticks": 1.0527779608654086,
            "log_notional": 13.64522007542362,
            "log_trade_count": 5.792052652299202
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7643772893746318,
            "jump_probability": 0.19124081994165726,
            "jump_rate": 0.047619047619047616,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193388,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-05",
          "state": 1,
          "probabilities": [
            0.0,
            0.9998189692944766,
            0.00018103070552342722,
            4.258926269999932e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9997438298473548,
            0.0002561701526452569,
            3.901215542170255e-23
          ],
          "jump_probability": 0.16374858975375833,
          "jump_score": 0.8320895343072666
        },
        {
          "trade_date": "2026-05-06",
          "state": 1,
          "probabilities": [
            0.0,
            0.9996686175063262,
            0.000331382493673845,
            8.087117202203733e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9998155116650271,
            0.0001844883349728696,
            6.245490910009641e-23
          ],
          "jump_probability": 0.20092536308881123,
          "jump_score": 1.049547092934568
        },
        {
          "trade_date": "2026-05-07",
          "state": 2,
          "probabilities": [
            0.0,
            2.7857197643409605e-05,
            0.9999721428023566,
            2.7381792312147903e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            1.9674832759513374e-05,
            0.9999803251672406,
            1.771032070635629e-20
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999960640723874,
            3.935927612635739e-06,
            1.1834788536627091e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999944309081307,
            5.56909186934949e-06,
            1.0842706662180107e-24
          ],
          "jump_probability": 0.17038219268765661,
          "jump_score": 0.8735469428739161
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9995628382029496,
            0.000437161797050367,
            2.2761876271489245e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9993811389607623,
            0.000618861039237712,
            2.084107224634231e-22
          ],
          "jump_probability": 0.1556674833035616,
          "jump_score": 0.7797181051414109
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999983959679344,
            1.6040320656298314e-06,
            2.0551992731173102e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999977288879441,
            2.2711120558799715e-06,
            1.882119598222508e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999923024394972,
            7.697560502762223e-06,
            2.77317298662953e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999891012015639,
            1.0898798436096813e-05,
            2.5396182535180462e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999939332954687,
            6.066704531324294e-06,
            6.220892100460719e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999991410297634,
            8.589702365948464e-06,
            5.696981154453618e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999931392995169,
            6.860700483066136e-06,
            6.753543912745864e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999961811027365,
            3.818897263535461e-06,
            5.2269877256076365e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            3.962615140136354e-35,
            1.0,
            3.958584218384122e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            3.962615140136354e-35,
            1.0,
            3.958584218384122e-23
          ],
          "jump_probability": 0.17073527479564135,
          "jump_score": 0.8757172360184056
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 84.9 — Strong",
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
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low short interest",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Trading access sits near the peer middle for its size, while the near-term book is thinner on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has outperformed peers over one month but still trails the market slightly.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main influence at present, with 42.1% of trading explained by the broader tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 42.1% of price changes. Other influences are sector 40.8%, and company-specific 17.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 42.1%, sector 40.8%, and company-specific 17.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 42.1%, sector 40.8%, and company-specific 17.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because market-led trading can feel less supportive when displayed bid depth is only 0.68x of ask depth and the spread is 2 ticks.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Market moves are the main driver now, accounting for 42.1% of recent price action.",
      "The monthly pattern was mostly market from March through May, so the mix is more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state looks balanced overall, but immediate buy-side support is lighter than the broader liquidity profile.",
    "regime_badge_text": "Stressed / Illiquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Stressed / Illiquid",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 19, 2025 to May 18, 2026 (254 trading days • 101,220 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest near-term watchpoint is lighter buy-side depth, with displayed bid depth at 0.68x of ask depth and a 2-tick",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 24.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current trading conditions look mixed, with flow lighter than the monthly average and the order book less supportive on the bid side.",
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
    "intraday_insight": "Recent activity is quieter, with 1D trades down 28.8% compared with the 1M average. That matters because day-to-day access can feel thinner when lighter flow meets weaker displayed bid depth.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Near-term trading conditions are defined more by market direction and order-book balance than by a clear change in overall liquidity.",
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
    "exec_subtitle": "Liquidity is broadly in line with size, but the current book is less supportive than the medium-term profile.",
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
        "value": "84.9/100",
        "sub": "Peer median 86.7 (-1.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$563.8K",
        "sub": "Peer median S$1.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "sub": "1.00 ticks; peers 0.70%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is broadly average for its size, with a 6M score of 84.9 compared with a peer median of 86.7. Near-term conditions are less supportive, with 1D trades down 28.8% compared with the 1M average and displayed bid depth at just 0.68x of ask depth. That matters because access is still available, but buying liquidity may feel weaker than the medium-term score implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.665",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.50%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.68x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.75% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.98% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.85% with 70.9% fill.",
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
        "value": "85",
        "suffix": "/100",
        "bar_pct": 85,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 85/556",
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
        "value": "0.75",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.75% • 1.00 ticks vs peers 0.70%",
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
        "value": "563.8K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$1.1M",
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
        "value": "42.1",
        "suffix": "market",
        "bar_pct": 42,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 40.8% • Company 17.2%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is middle of the pack for its size, with a 6M liquidity score of 84.9 compared with a peer median of 86.7. That leaves access broadly serviceable rather than clearly strong in peer terms.",
      "Recent flow is quieter rather than broken, with 1D trades down 28.8% compared with the 1M average. That matters because day-to-day trading may feel thinner even though the broader liquidity profile is still broadly steady.",
      "The main near-term constraint is on the buy side, with displayed bid depth at 0.68x of ask depth and a 2-tick spread. That matters because immediate execution can feel less supportive while market factors still account for 42.1% of trading."
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
      "overall": "6M liquidity is strong: score 84.9 vs peer median 86.7 (-1.8 pts). 1D trades down -28.8% vs 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 84.9 vs peer median 86.7 (-1.8 pts)."
      ],
      "concerns": [
        "1D trades down -28.8% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 9.2%.",
        "vs_sector": "Better than sector: -2.2% vs sector -2.5%.",
        "vs_peers": "Better than peers: -2.2% vs peers -18.0%."
      },
      "adv": {
        "insight": "ADV is S$563.8K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$563.8K vs market S$12.2K.",
        "vs_sector": "Worse than sector: S$563.8K vs sector S$636.7K.",
        "vs_peers": "Worse than peers: S$563.8K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.87%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.70%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.21%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.21% vs market 45.97%.",
        "vs_sector": "Better than sector: 14.21% vs sector 16.49%.",
        "vs_peers": "Better than peers: 14.21% vs peers 16.30%."
      },
      "trades": {
        "insight": "Trades is 343, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 343 vs market 7.",
        "vs_sector": "Worse than sector: 343 vs sector 384.",
        "vs_peers": "Worse than peers: 343 vs peers 742."
      },
      "amihud": {
        "insight": "Price impact is 5.90e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.90e-09 vs market 1.58e-07.",
        "vs_sector": "In line with sector: 5.90e-09 vs sector 5.68e-09.",
        "vs_peers": "In line with peers: 5.90e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are mixed rather than decisively weak, with the stock down 0.7% over one month compared with peers down 3.6% but slightly behind the market at down 0.2%. Liquidity only partly supports that move because the six-month liquidity score is 84.9 against a peer median of 86.7, and the order book is less supportive on the buy side with displayed bid depth at 0.68x ask depth despite a 2-tick spread.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "Broader market moves are the clearest influence on the stock now, accounting for 42.1% of recent price action. That matters because the tape is being shaped more by external conditions than by stock-specific news, which can make day-to-day trading feel less anchored.",
      "beta": "The current read looks mixed rather than fully established, because trading activity is down 28.8% on the day compared with the 1M average while buy-side depth is lighter, with displayed bid depth at 0.68x of ask depth. That combination can make market-led moves show through more clearly in trading.",
      "rolling_change": "The monthly picture had been mostly market from March through May, so the stock has shifted away from a stock-specific pattern and into a more balanced mix. That matters because recent price moves are now more exposed to the broader tape than they were over the last few months."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The active state is stressed and illiquid, pointing to a thinner trading backdrop than the recent monthly picture would suggest.",
      "transitions": "This state looks changeable rather than entrenched because its typical run length is about 1.5 days, while 1D trades are down 28.8% compared with the 1M average.",
      "trading_implications": "That combination points to less steady day-to-day access, where conditions can feel thin now but may also shift quickly rather than persist as a long regime."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light rather than balanced, because bid depth is only 0.68x of ask depth while the spread is 2",
      "concern": "The clearest stress point is the imbalance on the bid side, with materially less displayed buying interest than selling interest. With 1D trades down 28.8% compared with the 1M average, that thinner bid may be felt more acutely in today's tape.",
      "peer_context": "This book does not contradict the broader view that liquidity is mixed for its size, but it does lean to the weaker side of that range. The 6M liquidity score of 84.9 sits 1.8 points below the peer median of 86.7, and the current bid-light book reinforces that peer-relative access is not especially strong today."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so the trading base does not read as clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades account for 37.7% of trade count but only 2.7% of trade value, while institution-like trades are 17.7% of count and 42.5% of value. That split shows many smaller trades alongside fewer higher-value trades, which makes the flow base mixed.",
      "institutional_gap": "Institution-like activity carries a much larger share of trade value than trade count, which means higher-value participation is present even though it is not dominant by number of trades.",
      "peer_comparison": "Relative to peers, the trader mix is best read through the same count-and-value split: many retail-like trades by number, but a much larger institutional share of value."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the signal is mixed rather than clean. Ambiguous or unclear flow is 19.9% of trade count, so the read is not fully clean. The cleaner read is that mixed count-and-value participation, rather than one-sided price-moving flow, is shaping trading conditions.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity is not material enough to define the current trading picture. The average short ratio is 4.56%, and the stock has outperformed peers over one month despite a -0.7% return, which suggests short pressure is not the main reason liquidity feels mixed.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is building, with shorts up 37% month on month and 118% year on year. That makes it a trend worth watching, but with 1D trades down 28.8% compared with the 1M average it still does not look like the main driver of current trading conditions.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 86.7% of activity there compared with 3.9% at the open and 8.3% at the close.",
      "hhi_interpretation": "A trading concentration score of 0.234 suggests activity is reasonably distributed through the day, which makes access look steadier than a market dominated by a few short windows.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Compared with peers, the intraday pattern is best judged by the same feature: most liquidity sits in the continuous session rather than being concentrated at the open or close."
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
        "CRPU",
        "AU8U"
      ],
      "scores": [
        84.89208633093526,
        86.6906474820144
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        563782.0,
        1091829.5
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.14208531639803237,
        "adv": 563782.0,
        "spread_pct": 0.0074579331648325226,
        "turnover_ratio": 0.0018508478481400114,
        "amihud": 5.896301886011478e-09,
        "trades": 343.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6884797315688055,
          "median": 0.45967927248420537,
          "min": 0.0,
          "max": 7.033791454274304,
          "p5": 0.15235957194712155,
          "p95": 1.9367962238397058,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2716793.32195963,
          "median": 12156.8,
          "min": 0.0,
          "max": 253464908.5,
          "p5": 0.0,
          "p95": 11186443.125,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09500474470398933,
          "median": 0.028726142058772216,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.003639024015347768,
          "p95": 0.46604249856410274,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003701969554488717,
          "median": 0.0002784742463960508,
          "min": 0.0,
          "max": 1.0464043240392855,
          "p5": 0.0,
          "p95": 0.0075896540086628425,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0190140306143371e-05,
          "median": 1.5786804052556762e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.5862854169705944e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 400.1852517985611,
          "median": 7.0,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 2300.0,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3576695872103011,
          "median": 0.16494057783106847,
          "min": 0.11462618480271378,
          "max": 1.3876019947539668,
          "p5": 0.12423688086107529,
          "p95": 1.0977005607869121,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8788610.18693953,
          "median": 636709.75,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 13255.060000000001,
          "p95": 40952467.149999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.035663767532301514,
          "median": 0.008135074672354897,
          "min": 0.004274986168547341,
          "max": 0.13333333333333333,
          "p5": 0.0043451830476433344,
          "p95": 0.12517362181317188,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002312643449478318,
          "median": 0.0012178553747374523,
          "min": 0.0,
          "max": 0.006862744480837043,
          "p5": 8.48750274404525e-05,
          "p95": 0.006628735871452848,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.337985556298931e-07,
          "median": 5.677354584372172e-09,
          "min": 0.0,
          "max": 7.421899249138285e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 4.834957231619178e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1124.1875,
          "median": 383.75,
          "min": 0.0,
          "max": 5579.0,
          "p5": 8.575000000000001,
          "p95": 4272.449999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1091829.5,
          "median": 1091829.5,
          "min": 1091829.5,
          "max": 1091829.5,
          "p5": 1091829.5,
          "p95": 1091829.5,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 742.5,
          "median": 742.5,
          "min": 742.5,
          "max": 742.5,
          "p5": 742.5,
          "p95": 742.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.1630073296946524,
          "median": 0.1630073296946524,
          "min": 0.1630073296946524,
          "max": 0.1630073296946524,
          "p5": 0.1630073296946524,
          "p95": 0.1630073296946524,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.007000262213502924,
          "median": 0.007000262213502924,
          "min": 0.007000262213502924,
          "max": 0.007000262213502924,
          "p5": 0.007000262213502924,
          "p95": 0.007000262213502924,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.003866068939852,
          "median": 1.003866068939852,
          "min": 1.003866068939852,
          "max": 1.003866068939852,
          "p5": 1.003866068939852,
          "p95": 1.003866068939852,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.458407282732866e-09,
          "median": 5.458407282732866e-09,
          "min": 5.458407282732866e-09,
          "max": 5.458407282732866e-09,
          "p5": 5.458407282732866e-09,
          "p95": 5.458407282732866e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0011872829287083182,
          "median": 0.0011872829287083182,
          "min": 0.0011872829287083182,
          "max": 0.0011872829287083182,
          "p5": 0.0011872829287083182,
          "p95": 0.0011872829287083182,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.007462686567164312,
        "market": -0.002212550735976593,
        "sector": -0.0053855446401429585,
        "peers": -0.03649635036496357
      },
      {
        "horizon": "3M",
        "stock": -0.022058823529411464,
        "market": -0.003988583579804916,
        "sector": -0.021292259957020665,
        "peers": -0.09589041095890383
      },
      {
        "horizon": "6M",
        "stock": -0.022058823529411242,
        "market": 0.09196855475302312,
        "sector": -0.025492041465023263,
        "peers": -0.18012422360248492
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
      "share_market": 0.42058754261637676,
      "share_sector": 0.40773245632039457,
      "share_idio": 0.1716800010632287,
      "beta_market": 0.871897445783851,
      "beta_sector": 0.5195014863397576,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 2,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 1.0,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.42058754261637676,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.1%",
            "display_range": null,
            "display_text": "42.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 42.1,
            "plain_english": "Market explains about 42.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.40773245632039457,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.8%",
            "display_range": null,
            "display_text": "40.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 40.8,
            "plain_english": "Sector explains about 40.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1716800010632287,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.2%",
            "display_range": null,
            "display_text": "17.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 17.2,
            "plain_english": "Company-specific explains about 17.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.871897445783851,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.87",
            "display_range": null,
            "display_text": "0.87",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 0.87% stock move in the same direction in this state.",
            "value_num": 0.87
          },
          "beta_stock_lag": {
            "median": -0.3531831191211056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.35",
            "display_range": null,
            "display_text": "-0.35",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.35
          },
          "beta_sector": {
            "median": 0.5195014863397576,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.52",
            "display_range": null,
            "display_text": "0.52",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state.",
            "value_num": 0.52
          },
          "beta_market_lag": {
            "median": 0.8991267186587406,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.90",
            "display_range": null,
            "display_text": "0.90",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.9
          },
          "beta_sector_lag": {
            "median": 1.863266407481956,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.86",
            "display_range": null,
            "display_text": "1.86",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.86
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-22 to 2025-05-30",
            "n_obs": 7,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46174113179887166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Market explains about 46.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46174113179887166,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.2%",
                "display_range": null,
                "display_text": "46.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 46.2,
                "plain_english": "Market explains about 46.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26409428235590043,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Sector explains about 26.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27416458584522796,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven, though based on only 7 trading days."
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
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19863657260917886,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17795870306504713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
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
              "median": 0.61564463497127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889714,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.228630215299833,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.61564463497127,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Still clearly company-driven."
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
              "median": 0.45398748742406814,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078132,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45398748742406814,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.4759438052069962,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30647222578631633,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21758396900668756,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4759438052069962,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
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
              "median": 0.48281505654789286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31423525143745373,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.4%",
                "display_range": null,
                "display_text": "31.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.4,
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20294969201465327,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.3%",
                "display_range": null,
                "display_text": "20.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.3,
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48281505654789286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.3%",
                "display_range": null,
                "display_text": "48.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.3,
                "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly company-driven."
          },
          {
            "month_key": "2025-11",
            "month_label": "November 2025",
            "month_short_label": "Nov",
            "period_label": "2025-11-03 to 2025-11-28",
            "n_obs": 20,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.42191465124627753,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.42191465124627753,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759022888224927,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.30049511987147315,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
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
              "median": 0.7687417314818246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730312,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10746859170087227,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Sector explains about 10.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7687417314818246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
              }
            },
            "summary": "Dec: Still clearly company-driven."
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
              "median": 0.6344784334204318,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433794,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523025,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6344784334204318,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
              "median": 0.8241639016384484,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384484,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
              }
            },
            "summary": "Feb: Still clearly company-driven."
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
              "median": 0.4594963935612946,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921916,
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
                "median": 0.3101476013894862,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4594963935612946,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47906534683171226,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23814695940556418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Market explains about 23.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28278769376272356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Sector explains about 28.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47906534683171226,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-18",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4606149758129017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2949938317092395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.5%",
                "display_range": null,
                "display_text": "29.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 29.5,
                "plain_english": "Market explains about 29.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2443911924778588,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.4%",
                "display_range": null,
                "display_text": "24.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 24.4,
                "plain_english": "Sector explains about 24.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4606149758129017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.1%",
                "display_range": null,
                "display_text": "46.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 46.1,
                "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.33864504881661456,
            "expected_duration_days": 1.8907376868398396,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 84.99990725297026,
            "volatility": {
              "median": 1.8132523750126737e-127,
              "low": 1.8132523750126737e-127,
              "high": 1.8132523750126737e-127
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10163174931980339,
            "jump_rate": 0.0,
            "risk_score": 0.024404280831682428,
            "metrics": {
              "rolling_vol_10d": 0.006491906052798504,
              "downside_vol_10d": 0.0035653028346818425,
              "drawdown_21d": 0.008855604608802713,
              "amihud_stress": 1.03790348278229e-250,
              "spread_rel": 75.99054214992303,
              "spread_ticks": 1.017622731858872,
              "log_notional": 13.093335703881252,
              "log_trade_count": 5.704491702178818
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.34626303654918505,
            "expected_duration_days": 1.775573372532002,
            "current_probability": 3.962615140136354e-35,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.91202217384544,
            "volatility": {
              "median": 0.007437840591984626,
              "low": 0.007437840591984626,
              "high": 0.007437840591984626
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22606569499462129,
            "jump_rate": 5.516120019522428e-187,
            "risk_score": 0.1534850927441318,
            "metrics": {
              "rolling_vol_10d": 0.006710567133305159,
              "downside_vol_10d": 0.0036545399388685385,
              "drawdown_21d": 0.009964289730894534,
              "amihud_stress": 0.9052308424236152,
              "spread_rel": 74.68927194205777,
              "spread_ticks": 1.0039112600046676,
              "log_notional": 13.231208783598357,
              "log_trade_count": 5.826295053728456
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1477612373433637,
            "expected_duration_days": 1.4950026982829276,
            "current_probability": 1.0,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 37.08807057318428,
            "volatility": {
              "median": 0.01220863025357874,
              "low": 0.01220863025357874,
              "high": 0.01220863025357874
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3274533399139241,
            "jump_rate": 0.13481423872222517,
            "risk_score": 0.5253487722881037,
            "metrics": {
              "rolling_vol_10d": 0.00852303409245693,
              "downside_vol_10d": 0.004532154001801258,
              "drawdown_21d": 0.007645923986073646,
              "amihud_stress": 0.9358357916845829,
              "spread_rel": 77.79715762129369,
              "spread_ticks": 1.0527779608654086,
              "log_notional": 13.64522007542362,
              "log_trade_count": 5.792052652299202
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 3.958584218384122e-23,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19124081994165726,
            "jump_rate": 0.047619047619047616,
            "risk_score": 0.7643772893746318,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193388,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.47110590381715506,
              0.4209529786689471,
              0.1078236637799012,
              0.00011745373399651254
            ],
            [
              0.3683707288280192,
              0.43680164645971203,
              0.184303585432961,
              0.010524039279307918
            ],
            [
              0.3299275403029579,
              0.3084986725806886,
              0.331104886199509,
              0.030468900916844503
            ],
            [
              0.00023730422401518835,
              0.04769732257064456,
              0.00023813068042334096,
              0.9518272425249169
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              40.0,
              36.0,
              9.0,
              0.0
            ],
            [
              32.0,
              38.0,
              16.0,
              1.0
            ],
            [
              12.0,
              11.0,
              12.0,
              1.0
            ],
            [
              0.0,
              2.0,
              0.0,
              40.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.0,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 3.962615140136354e-35,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 1.0,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 3.958584218384122e-23,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.3274533399139241,
          "current_score": 0.8757172360184056,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 10988.901593411641,
          "loglik": -4966.770041018735,
          "n_params": 191,
          "bic_delta_vs_next_best": 522.3451308306994,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 13312.906040682845,
              "loglik": -6405.044911610927,
              "n_params": 91,
              "converged": true,
              "iterations": 9,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13312.906040682845,
                  "loglik": -6405.044911610927,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13312.906040682845,
                  "loglik": -6405.044911610927,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13312.906040682845,
                  "loglik": -6405.044911610927,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 11511.24672424234,
              "loglik": -5368.8416563819455,
              "n_params": 140,
              "converged": true,
              "iterations": 32,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11511.24672424234,
                  "loglik": -5368.8416563819455,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 32
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11511.246727209096,
                  "loglik": -5368.841657865323,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 31
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11511.246732638883,
                  "loglik": -5368.841660580217,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 26
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 10988.901593411641,
              "loglik": -4966.770041018735,
              "n_params": 191,
              "converged": true,
              "iterations": 24,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 10988.901593411641,
                  "loglik": -4966.770041018735,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 24
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12687.371870616862,
                  "loglik": -5816.005179621346,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 62
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12684.918206891658,
                  "loglik": -5814.778347758744,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 47
                }
              ]
            }
          ],
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 10988.901593411641,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 11511.246727209096,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 11511.246732638883,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 1,
              "3": 2
            },
            "selected_state_share": 0.3333333333333333,
            "stable": false,
            "majority_support": false
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 6399.805240578769,
                  "3": 6168.793945762381,
                  "4": 6013.621016770048
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 10288.204464902388,
                  "3": 9940.545790091614,
                  "4": 8820.920908163675
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 13312.906040682845,
                  "3": 11511.246750692455,
                  "4": 10988.901593411641
                },
                "valid": true
              }
            ],
            "stable": true
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 251,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 522.3451308306994,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 522.35 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 37.08807057318428,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 84.99990725297026,
                "pct_time": 0.33864504881661456,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 86.91202217384544,
                "pct_time": 0.34626303654918505,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 37.08807057318428,
                "pct_time": 0.1477612373433637,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 42.0,
                "pct_time": 0.16733067729083664,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.47110590381715506,
              0.43680164645971203,
              0.331104886199509,
              0.9518272425249169
            ],
            "expected_duration_days": [
              1.8907376868398396,
              1.775573372532002,
              1.4950026982829276,
              20.758620689655157
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [
              0,
              1,
              2
            ],
            "warnings": [
              "fast_switching_states"
            ]
          },
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 10988.901593411641,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 3,
                "bic": 11511.246727209096,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 11511.246732638883,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 1,
              "3": 2
            },
            "selected_state_share": 0.3333333333333333,
            "stable": false,
            "majority_support": false
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 6399.805240578769,
                  "3": 6168.793945762381,
                  "4": 6013.621016770048
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 10288.204464902388,
                  "3": 9940.545790091614,
                  "4": 8820.920908163675
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 13312.906040682845,
                  "3": 11511.246750692455,
                  "4": 10988.901593411641
                },
                "valid": true
              }
            ],
            "stable": true
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.024404280831682428,
              "jump_probability": 0.10163174931980339,
              "jump_rate": 0.0,
              "rolling_vol_10d": 0.006491906052798504,
              "downside_vol_10d": 0.0035653028346818425,
              "drawdown_21d": 0.008855604608802713,
              "amihud_stress": 1.03790348278229e-250,
              "spread_rel": 75.99054214992303,
              "spread_ticks": 1.017622731858872,
              "log_notional": 13.093335703881252,
              "log_trade_count": 5.704491702178818
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.1534850927441318,
              "jump_probability": 0.22606569499462129,
              "jump_rate": 5.516120019522428e-187,
              "rolling_vol_10d": 0.006710567133305159,
              "downside_vol_10d": 0.0036545399388685385,
              "drawdown_21d": 0.009964289730894534,
              "amihud_stress": 0.9052308424236152,
              "spread_rel": 74.68927194205777,
              "spread_ticks": 1.0039112600046676,
              "log_notional": 13.231208783598357,
              "log_trade_count": 5.826295053728456
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.5253487722881037,
              "jump_probability": 0.3274533399139241,
              "jump_rate": 0.13481423872222517,
              "rolling_vol_10d": 0.00852303409245693,
              "downside_vol_10d": 0.004532154001801258,
              "drawdown_21d": 0.007645923986073646,
              "amihud_stress": 0.9358357916845829,
              "spread_rel": 77.79715762129369,
              "spread_ticks": 1.0527779608654086,
              "log_notional": 13.64522007542362,
              "log_trade_count": 5.792052652299202
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.7643772893746318,
              "jump_probability": 0.19124081994165726,
              "jump_rate": 0.047619047619047616,
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193388,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
            }
          ],
          "jump_model_definition": {
            "type": "jump_score_feature_overlay",
            "method_name": "hmm_jump_aware",
            "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
          },
          "probability_basis": {
            "current_state": "filtered_forward_probability",
            "historical_states": "smoothed_forward_backward_probability",
            "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
          }
        },
        "feature_columns": [
          "stock_ret",
          "market_ret",
          "sector_ret",
          "abs_stock_ret",
          "residual_ret",
          "abs_residual_ret",
          "rolling_vol_5d",
          "rolling_vol_10d",
          "rolling_vol_21d",
          "downside_vol_10d",
          "rolling_skew_21d",
          "rolling_kurtosis_21d",
          "drawdown_21d",
          "market_corr_21d",
          "sector_corr_21d",
          "log_notional",
          "log_volume",
          "log_trade_count",
          "amihud_stress",
          "spread_rel",
          "spread_ticks",
          "jump_score"
        ],
        "smoothed_probability_tail": [
          {
            "trade_date": "2026-05-05",
            "state": 1,
            "probabilities": [
              0.0,
              0.9998189692944766,
              0.00018103070552342722,
              4.258926269999932e-24
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9997438298473548,
              0.0002561701526452569,
              3.901215542170255e-23
            ],
            "jump_probability": 0.16374858975375833,
            "jump_score": 0.8320895343072666
          },
          {
            "trade_date": "2026-05-06",
            "state": 1,
            "probabilities": [
              0.0,
              0.9996686175063262,
              0.000331382493673845,
              8.087117202203733e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9998155116650271,
              0.0001844883349728696,
              6.245490910009641e-23
            ],
            "jump_probability": 0.20092536308881123,
            "jump_score": 1.049547092934568
          },
          {
            "trade_date": "2026-05-07",
            "state": 2,
            "probabilities": [
              0.0,
              2.7857197643409605e-05,
              0.9999721428023566,
              2.7381792312147903e-21
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              1.9674832759513374e-05,
              0.9999803251672406,
              1.771032070635629e-20
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-08",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999960640723874,
              3.935927612635739e-06,
              1.1834788536627091e-25
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999944309081307,
              5.56909186934949e-06,
              1.0842706662180107e-24
            ],
            "jump_probability": 0.17038219268765661,
            "jump_score": 0.8735469428739161
          },
          {
            "trade_date": "2026-05-11",
            "state": 1,
            "probabilities": [
              0.0,
              0.9995628382029496,
              0.000437161797050367,
              2.2761876271489245e-23
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9993811389607623,
              0.000618861039237712,
              2.084107224634231e-22
            ],
            "jump_probability": 0.1556674833035616,
            "jump_score": 0.7797181051414109
          },
          {
            "trade_date": "2026-05-12",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999983959679344,
              1.6040320656298314e-06,
              2.0551992731173102e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999977288879441,
              2.2711120558799715e-06,
              1.882119598222508e-25
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999923024394972,
              7.697560502762223e-06,
              2.77317298662953e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999891012015639,
              1.0898798436096813e-05,
              2.5396182535180462e-26
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999939332954687,
              6.066704531324294e-06,
              6.220892100460719e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.999991410297634,
              8.589702365948464e-06,
              5.696981154453618e-25
            ],
            "jump_probability": 0.14041641997052026,
            "jump_score": 0.6744907594765851
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999931392995169,
              6.860700483066136e-06,
              6.753543912745864e-28
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999961811027365,
              3.818897263535461e-06,
              5.2269877256076365e-25
            ],
            "jump_probability": 0.139724352328269,
            "jump_score": 0.6694945316286194
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              0.0,
              3.962615140136354e-35,
              1.0,
              3.958584218384122e-23
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              3.962615140136354e-35,
              1.0,
              3.958584218384122e-23
            ],
            "jump_probability": 0.17073527479564135,
            "jump_score": 0.8757172360184056
          }
        ],
        "methodology": {
          "estimation_window_days": 251,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_aware",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
          "current_state_probability_basis": "filtered",
          "historical_state_probability_basis": "smoothed",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.87",
          "sector_link_display": "0.52",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 0.87% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.35",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Stressed / Illiquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 42.1,
          "driver_share_display": "42.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Stressed / Illiquid",
          "jump_risk_label": "Watch",
          "jump_risk_probability": 32.7,
          "jump_risk_score": 0.88,
          "jump_risk_note": "Jump risk is watch based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.331104886199509,
          "effective_days": 37.1,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.5 days.",
          "expected_duration_days": 1.5
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
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-22 to 2025-05-30",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven, though based on only 7 trading days.",
          "share_market": 0.46174113179887166,
          "share_sector": 0.26409428235590043,
          "share_company": 0.27416458584522796,
          "share_market_display": "46.2%",
          "share_sector_display": "26.4%",
          "share_company_display": "27.4%",
          "dominant_share_display": "46.2%"
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
          "share_market": 0.19863657260917886,
          "share_sector": 0.17795870306504713,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
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
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889714,
          "share_sector": 0.228630215299833,
          "share_company": 0.61564463497127,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078132,
          "share_sector": 0.20793658426811862,
          "share_company": 0.45398748742406814,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "summary": "Sep: Mostly company-driven.",
          "share_market": 0.30647222578631633,
          "share_sector": 0.21758396900668756,
          "share_company": 0.4759438052069962,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
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
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.31423525143745373,
          "share_sector": 0.20294969201465327,
          "share_company": 0.48281505654789286,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.42191465124627753,
          "share_sector": 0.27759022888224927,
          "share_company": 0.30049511987147315,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
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
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.12378967681730312,
          "share_sector": 0.10746859170087227,
          "share_company": 0.7687417314818246,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "share_market": 0.20419511848433794,
          "share_sector": 0.16132644809523025,
          "share_company": 0.6344784334204318,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179603,
          "share_company": 0.8241639016384484,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921916,
          "share_sector": 0.3101476013894862,
          "share_company": 0.4594963935612946,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.23814695940556418,
          "share_sector": 0.28278769376272356,
          "share_company": 0.47906534683171226,
          "share_market_display": "23.8%",
          "share_sector_display": "28.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-18",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.2949938317092395,
          "share_sector": 0.2443911924778588,
          "share_company": 0.4606149758129017,
          "share_market_display": "29.5%",
          "share_sector_display": "24.4%",
          "share_company_display": "46.1%",
          "dominant_share_display": "46.1%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 1.0,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.33864504881661456,
          0.34626303654918505,
          0.1477612373433637,
          0.16733067729083664
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.33864504881661456,
            "expected_duration_days": 1.8907376868398396,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 84.99990725297026,
            "volatility": {
              "median": 1.8132523750126737e-127,
              "low": 1.8132523750126737e-127,
              "high": 1.8132523750126737e-127
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10163174931980339,
            "jump_rate": 0.0,
            "risk_score": 0.024404280831682428,
            "metrics": {
              "rolling_vol_10d": 0.006491906052798504,
              "downside_vol_10d": 0.0035653028346818425,
              "drawdown_21d": 0.008855604608802713,
              "amihud_stress": 1.03790348278229e-250,
              "spread_rel": 75.99054214992303,
              "spread_ticks": 1.017622731858872,
              "log_notional": 13.093335703881252,
              "log_trade_count": 5.704491702178818
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.34626303654918505,
            "expected_duration_days": 1.775573372532002,
            "current_probability": 3.962615140136354e-35,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.91202217384544,
            "volatility": {
              "median": 0.007437840591984626,
              "low": 0.007437840591984626,
              "high": 0.007437840591984626
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22606569499462129,
            "jump_rate": 5.516120019522428e-187,
            "risk_score": 0.1534850927441318,
            "metrics": {
              "rolling_vol_10d": 0.006710567133305159,
              "downside_vol_10d": 0.0036545399388685385,
              "drawdown_21d": 0.009964289730894534,
              "amihud_stress": 0.9052308424236152,
              "spread_rel": 74.68927194205777,
              "spread_ticks": 1.0039112600046676,
              "log_notional": 13.231208783598357,
              "log_trade_count": 5.826295053728456
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1477612373433637,
            "expected_duration_days": 1.4950026982829276,
            "current_probability": 1.0,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 37.08807057318428,
            "volatility": {
              "median": 0.01220863025357874,
              "low": 0.01220863025357874,
              "high": 0.01220863025357874
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3274533399139241,
            "jump_rate": 0.13481423872222517,
            "risk_score": 0.5253487722881037,
            "metrics": {
              "rolling_vol_10d": 0.00852303409245693,
              "downside_vol_10d": 0.004532154001801258,
              "drawdown_21d": 0.007645923986073646,
              "amihud_stress": 0.9358357916845829,
              "spread_rel": 77.79715762129369,
              "spread_ticks": 1.0527779608654086,
              "log_notional": 13.64522007542362,
              "log_trade_count": 5.792052652299202
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 3.958584218384122e-23,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19124081994165726,
            "jump_rate": 0.047619047619047616,
            "risk_score": 0.7643772893746318,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193388,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": [
          [
            0.47110590381715506,
            0.4209529786689471,
            0.1078236637799012,
            0.00011745373399651254
          ],
          [
            0.3683707288280192,
            0.43680164645971203,
            0.184303585432961,
            0.010524039279307918
          ],
          [
            0.3299275403029579,
            0.3084986725806886,
            0.331104886199509,
            0.030468900916844503
          ],
          [
            0.00023730422401518835,
            0.04769732257064456,
            0.00023813068042334096,
            0.9518272425249169
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.66,
          "quantity": 1132100.0,
          "value": 747186.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 308000.0,
          "value": 201740.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 367600.0,
          "value": 238940.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 69800.0,
          "value": 45021.0
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 133000.0,
          "value": 85120.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 104300.0,
          "value": 66230.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 319400.0,
          "value": 201222.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 114400.0,
          "value": 71500.0
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 46800.0,
          "value": 29016.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 11500.0,
          "value": 7072.5
        },
        {
          "level": 11,
          "price": 0.61,
          "quantity": 41000.0,
          "value": 25010.0
        },
        {
          "level": 12,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 13,
          "price": 0.6,
          "quantity": 31800.0,
          "value": 19080.0
        },
        {
          "level": 14,
          "price": 0.58,
          "quantity": 1400.0,
          "value": 812.0
        },
        {
          "level": 15,
          "price": 0.57,
          "quantity": 23000.0,
          "value": 13109.999999999998
        },
        {
          "level": 16,
          "price": 0.565,
          "quantity": 10500.0,
          "value": 5932.499999999999
        },
        {
          "level": 17,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 18,
          "price": 0.525,
          "quantity": 5500.0,
          "value": 2887.5
        },
        {
          "level": 19,
          "price": 0.52,
          "quantity": 12000.0,
          "value": 6240.0
        },
        {
          "level": 20,
          "price": 0.515,
          "quantity": 6000.0,
          "value": 3090.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 394500.0,
          "value": 264315.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 432500.0,
          "value": 291937.5
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 642800.0,
          "value": 437104.00000000006
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 114400.0,
          "value": 78364.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1134600.0,
          "value": 782873.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 215300.0,
          "value": 149633.5
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 133800.0,
          "value": 93660.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 109300.0,
          "value": 77056.5
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 99900.0,
          "value": 70929.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 11,
          "price": 0.72,
          "quantity": 20200.0,
          "value": 14544.0
        },
        {
          "level": 12,
          "price": 0.75,
          "quantity": 10000.0,
          "value": 7500.0
        },
        {
          "level": 13,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 14,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 15,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 16,
          "price": 0.825,
          "quantity": 3400.0,
          "value": 2805.0
        },
        {
          "level": 17,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 18,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-18 08:59:57.695400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.665,
        "spread_pct": 0.015037593984962419,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1772770.0,
        "ask_depth_notional_displayed": 2619936.5,
        "bid_depth_notional_top10": 1772770.0,
        "ask_depth_notional_top10": 2619936.5,
        "bid_ask_depth_ratio": 0.6766
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 101220,
        "first_trade_date": "2025-05-19",
        "last_trade_date": "2026-05-18",
        "window_label": "May 19, 2025 to May 18, 2026",
        "window_short_label": "May 19, 2025 to May 18, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "101,220 trades",
        "window_detail_label": "254 trading days • 101,220 trades",
        "history_note": "Trade-size percentiles use May 19, 2025 to May 18, 2026 history (254 trading days • 101,220 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.19,
            "pct_of_adv": 0.66
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7920.67,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.45,
            "pct_of_adv": 1.53
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339085.75,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 19.13,
            "pct_of_adv": 65.41
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-18",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8149098049227054080",
            "timestamp": "2026-05-17 22:59:01.154300000",
            "local_timestamp": "2026-05-18 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 38.92,
            "price_vs_mid_pct": 3.759,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8150072766285059072",
            "timestamp": "2026-05-18 00:30:00.106900000",
            "local_timestamp": "2026-05-18 08:30:00",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 11.51,
            "price_vs_mid_pct": 2.256,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 3,
            "order_id": "8145931455739072512",
            "timestamp": "2026-05-17 22:59:01.182400000",
            "local_timestamp": "2026-05-18 06:59:01",
            "posted_price": 0.8,
            "size_shares": 210000.0,
            "notional": 168000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.48,
            "price_vs_mid_pct": 20.301,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-18",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.01492537313432837,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1914762.5,
            "ask_depth_notional": 2288266.0,
            "mid_price": 0.67
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1982862.5,
            "ask_depth_notional": 2344299.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2053846.0,
            "ask_depth_notional": 2334852.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2084648.0,
            "ask_depth_notional": 2408986.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2077789.0,
            "ask_depth_notional": 2467305.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2077457.5,
            "ask_depth_notional": 2505253.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1862421.5,
            "ask_depth_notional": 2682443.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1781105.0,
            "ask_depth_notional": 2678785.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1785263.0,
            "ask_depth_notional": 2634999.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1812983.0,
            "ask_depth_notional": 2638619.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1803777.0,
            "ask_depth_notional": 2618536.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1801269.0,
            "ask_depth_notional": 2618207.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1805068.5,
            "ask_depth_notional": 2617609.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1772770.0,
            "ask_depth_notional": 2619936.5,
            "mid_price": 0.665
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 1837702.25,
          "median_ask_depth_notional": 2617908.25,
          "tightest_bucket": "09:30",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "10:30",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 9.6,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 128.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 204,
          "n_runs": 93,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-18",
          "last_trade_date": "2026-05-18",
          "period_days": 1,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.28431372549019607,
            "mixed_pct": 0.38235294117647056,
            "instit_pct": 0.20098039215686275,
            "ambiguous_pct": 0.1323529411764706,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1323529411764706,
            "retail_qty_pct": 0.03743876836948915,
            "mixed_qty_pct": 0.6141824119430838,
            "instit_qty_pct": 0.22614882202006065,
            "ambiguous_qty_pct": 0.12222999766736646,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12222999766736646,
            "retail_notional_pct": 0.03739943294669016,
            "mixed_notional_pct": 0.6141560245693922,
            "instit_notional_pct": 0.22626810119424334,
            "ambiguous_notional_pct": 0.12217644128967425,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12217644128967425
          },
          "run_composition": {
            "retail_pct": 0.5806451612903226,
            "mixed_pct": 0.25806451612903225,
            "instit_pct": 0.053763440860215055,
            "ambiguous_pct": 0.10752688172043011,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10752688172043011,
            "retail_notional_pct": 0.03739943294669016,
            "mixed_notional_pct": 0.6141560245693922,
            "instit_notional_pct": 0.22626810119424334,
            "unclear_notional_pct": 0.12217644128967425
          },
          "counts": {
            "trades": {
              "retail": 58,
              "mixed": 78,
              "institutional": 41,
              "ambiguous": 27,
              "unobservable": 0,
              "unclear": 27
            },
            "runs": {
              "retail": 54,
              "mixed": 24,
              "institutional": 5,
              "ambiguous": 10,
              "unobservable": 0,
              "unclear": 10
            }
          },
          "confidence": {
            "high": 0.6344086021505376,
            "medium": 0.25806451612903225,
            "low": 0.10752688172043011,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 59,
            "medium": 24,
            "low": 10,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.4852941176470588,
            "medium": 0.38235294117647056,
            "low": 0.1323529411764706,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 99,
            "medium": 78,
            "low": 27,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8580645161290318,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10752688172043011,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5806451612903226,
          "dominance_gap": 0.32258064516129037,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 165,
              "WALK_BOOK": 39
            },
            "d2_information": {
              "UNOBSERVABLE": 204
            },
            "d3_urgency": {
              "UNOBSERVABLE": 93
            },
            "participant_confidence": {
              "HIGH": 59,
              "MEDIUM": 24,
              "LOW": 10
            }
          },
          "trade_size": {
            "avg": 2799.9926470588234,
            "median": 530.0
          },
          "run_size": {
            "avg": 6141.919354838709,
            "median": 598.5,
            "avg_length": 1.064516129032258
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-211",
              "timestamp": "2026-05-18T08:59:30.040000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47877,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-210",
              "timestamp": "2026-05-18T08:59:27.035200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-209",
              "timestamp": "2026-05-18T08:59:20.176900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-208",
              "timestamp": "2026-05-18T08:59:19.841000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-207",
              "timestamp": "2026-05-18T08:59:00.215700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47875,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-206",
              "timestamp": "2026-05-18T08:58:34.317200",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47874,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-205",
              "timestamp": "2026-05-18T08:58:08.974200",
              "price": 0.66,
              "size": 900.0,
              "notional": 594.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47873,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-204",
              "timestamp": "2026-05-18T08:56:16.136200",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47872,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-203",
              "timestamp": "2026-05-18T08:55:52.792900",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47871,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-202",
              "timestamp": "2026-05-18T08:55:40.689600",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47870,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-201",
              "timestamp": "2026-05-18T08:54:46.082500",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47869,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-200",
              "timestamp": "2026-05-18T08:54:09.096400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47868,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-199",
              "timestamp": "2026-05-18T08:54:03.395900",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47867,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-198",
              "timestamp": "2026-05-18T08:52:45.360000",
              "price": 0.665,
              "size": 5800.0,
              "notional": 3857.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47866,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-197",
              "timestamp": "2026-05-18T08:50:42.804100",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47865,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-196",
              "timestamp": "2026-05-18T08:48:50.502800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47864,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-195",
              "timestamp": "2026-05-18T08:44:55.124200",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-194",
              "timestamp": "2026-05-18T08:44:42.637200",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-193",
              "timestamp": "2026-05-18T08:44:20.619800",
              "price": 0.665,
              "size": 1600.0,
              "notional": 1064.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47862,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-192",
              "timestamp": "2026-05-18T08:42:39.662900",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47861,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-191",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-190",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-189",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-188",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-187",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-186",
              "timestamp": "2026-05-18T08:42:38.607600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-185",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-184",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-183",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-182",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 1900.0,
              "notional": 1263.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.28431372549019607,
              "mixed_pct": 0.38235294117647056,
              "instit_pct": 0.20098039215686275,
              "ambiguous_pct": 0.1323529411764706,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1323529411764706,
              "retail_qty_pct": 0.03743876836948915,
              "mixed_qty_pct": 0.6141824119430838,
              "instit_qty_pct": 0.22614882202006065,
              "ambiguous_qty_pct": 0.12222999766736646,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12222999766736646,
              "retail_notional_pct": 0.03739943294669016,
              "mixed_notional_pct": 0.6141560245693922,
              "instit_notional_pct": 0.22626810119424334,
              "ambiguous_notional_pct": 0.12217644128967425,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12217644128967425,
              "run_retail_pct": 0.5806451612903226,
              "run_mixed_pct": 0.25806451612903225,
              "run_instit_pct": 0.053763440860215055,
              "run_unclear_pct": 0.10752688172043011,
              "avg_trade_size": 2799.9926470588234,
              "avg_run_notional": 6141.919354838709,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6344086021505376,
              "medium_confidence_pct": 0.25806451612903225,
              "low_confidence_pct": 0.10752688172043011,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8580645161290318,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.45284974093264246,
              "mixed_pct": 0.05077720207253886,
              "instit_pct": 0.49637305699481865,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.18536162841056736,
              "mixed_qty_pct": 0.005023819835426591,
              "instit_qty_pct": 0.8096145517540061,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.18509928398898648,
              "mixed_notional_pct": 0.004996504434894686,
              "instit_notional_pct": 0.8099042115761188,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8159090909090909,
              "run_mixed_pct": 0.04772727272727273,
              "run_instit_pct": 0.13636363636363635,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 781.8937823834196,
              "avg_run_notional": 1714.8352272727273,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.8636363636363636,
              "low_confidence_pct": 0.13636363636363635,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.46909090909090917,
              "observable_run_pct": 1.0,
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
          "n_trades": 6759,
          "n_runs": 3921,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-05-18",
          "period_days": 21,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.3444296493564137,
            "mixed_pct": 0.27548453913300786,
            "instit_pct": 0.16185826305666517,
            "ambiguous_pct": 0.2182275484539133,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2182275484539133,
            "retail_qty_pct": 0.02625494776851101,
            "mixed_qty_pct": 0.2417295098834324,
            "instit_qty_pct": 0.3775858521056008,
            "ambiguous_qty_pct": 0.3544296902424558,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3544296902424558,
            "retail_notional_pct": 0.026241769748853207,
            "mixed_notional_pct": 0.24182501487319494,
            "instit_notional_pct": 0.3774137411505058,
            "ambiguous_notional_pct": 0.354519474227446,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.354519474227446
          },
          "run_composition": {
            "retail_pct": 0.5781688344809998,
            "mixed_pct": 0.24789594491201225,
            "instit_pct": 0.039275694975771484,
            "ambiguous_pct": 0.13465952563121653,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13465952563121653,
            "retail_notional_pct": 0.026241769748853207,
            "mixed_notional_pct": 0.24182501487319494,
            "instit_notional_pct": 0.3774137411505058,
            "unclear_notional_pct": 0.354519474227446
          },
          "counts": {
            "trades": {
              "retail": 2328,
              "mixed": 1862,
              "institutional": 1094,
              "ambiguous": 1475,
              "unobservable": 0,
              "unclear": 1475
            },
            "runs": {
              "retail": 2267,
              "mixed": 972,
              "institutional": 154,
              "ambiguous": 528,
              "unobservable": 0,
              "unclear": 528
            }
          },
          "confidence": {
            "high": 0.6174445294567712,
            "medium": 0.24789594491201225,
            "low": 0.13465952563121653,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2421,
            "medium": 972,
            "low": 528,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5062879124130789,
            "medium": 0.27548453913300786,
            "low": 0.2182275484539133,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3422,
            "medium": 1862,
            "low": 1475,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8629431267533791,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13465952563121653,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5781688344809998,
          "dominance_gap": 0.3302728895689875,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6266,
              "WALK_BOOK": 489,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 6759
            },
            "d3_urgency": {
              "UNOBSERVABLE": 3921
            },
            "participant_confidence": {
              "HIGH": 2421,
              "MEDIUM": 972,
              "LOW": 528
            }
          },
          "trade_size": {
            "avg": 1627.657197810327,
            "median": 133.0
          },
          "run_size": {
            "avg": 2805.747258352461,
            "median": 134.0,
            "avg_length": 1.1428207090028053
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-211",
              "timestamp": "2026-05-18T08:59:30.040000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47877,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-210",
              "timestamp": "2026-05-18T08:59:27.035200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-209",
              "timestamp": "2026-05-18T08:59:20.176900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-208",
              "timestamp": "2026-05-18T08:59:19.841000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-207",
              "timestamp": "2026-05-18T08:59:00.215700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47875,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-206",
              "timestamp": "2026-05-18T08:58:34.317200",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47874,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-205",
              "timestamp": "2026-05-18T08:58:08.974200",
              "price": 0.66,
              "size": 900.0,
              "notional": 594.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47873,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-204",
              "timestamp": "2026-05-18T08:56:16.136200",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47872,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-203",
              "timestamp": "2026-05-18T08:55:52.792900",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47871,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-202",
              "timestamp": "2026-05-18T08:55:40.689600",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47870,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-201",
              "timestamp": "2026-05-18T08:54:46.082500",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47869,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-200",
              "timestamp": "2026-05-18T08:54:09.096400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47868,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-199",
              "timestamp": "2026-05-18T08:54:03.395900",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47867,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-198",
              "timestamp": "2026-05-18T08:52:45.360000",
              "price": 0.665,
              "size": 5800.0,
              "notional": 3857.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47866,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-197",
              "timestamp": "2026-05-18T08:50:42.804100",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47865,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-196",
              "timestamp": "2026-05-18T08:48:50.502800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47864,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-195",
              "timestamp": "2026-05-18T08:44:55.124200",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-194",
              "timestamp": "2026-05-18T08:44:42.637200",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-193",
              "timestamp": "2026-05-18T08:44:20.619800",
              "price": 0.665,
              "size": 1600.0,
              "notional": 1064.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47862,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-192",
              "timestamp": "2026-05-18T08:42:39.662900",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47861,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-191",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-190",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-189",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-188",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-187",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-186",
              "timestamp": "2026-05-18T08:42:38.607600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-185",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-184",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-183",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-182",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 1900.0,
              "notional": 1263.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3444296493564137,
              "mixed_pct": 0.27548453913300786,
              "instit_pct": 0.16185826305666517,
              "ambiguous_pct": 0.2182275484539133,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2182275484539133,
              "retail_qty_pct": 0.02625494776851101,
              "mixed_qty_pct": 0.2417295098834324,
              "instit_qty_pct": 0.3775858521056008,
              "ambiguous_qty_pct": 0.3544296902424558,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3544296902424558,
              "retail_notional_pct": 0.026241769748853207,
              "mixed_notional_pct": 0.24182501487319494,
              "instit_notional_pct": 0.3774137411505058,
              "ambiguous_notional_pct": 0.354519474227446,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.354519474227446,
              "run_retail_pct": 0.5781688344809998,
              "run_mixed_pct": 0.24789594491201225,
              "run_instit_pct": 0.039275694975771484,
              "run_unclear_pct": 0.13465952563121653,
              "avg_trade_size": 1627.657197810327,
              "avg_run_notional": 2805.747258352461,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6174445294567712,
              "medium_confidence_pct": 0.24789594491201225,
              "low_confidence_pct": 0.13465952563121653,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8629431267533791,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5565747352868752,
              "mixed_pct": 0.01834523516375277,
              "instit_pct": 0.4250800295493721,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.21952563852179763,
              "mixed_qty_pct": 0.0022828374888787624,
              "instit_qty_pct": 0.7781915239893236,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.22010828859395412,
              "mixed_notional_pct": 0.0022789801290375223,
              "instit_notional_pct": 0.7776127312770084,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8406808330690347,
              "run_mixed_pct": 0.014272121788772598,
              "run_instit_pct": 0.14504704514219263,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 953.6395284412706,
              "avg_run_notional": 1637.691140712549,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.8208055819854108,
              "low_confidence_pct": 0.17919441801458927,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4674754202346971,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 23495,
          "n_runs": 13565,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-13",
          "last_trade_date": "2026-05-18",
          "period_days": 63,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.34790380932113213,
            "mixed_pct": 0.24971270483081506,
            "instit_pct": 0.19608427324962757,
            "ambiguous_pct": 0.2062992125984252,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2062992125984252,
            "retail_qty_pct": 0.021439032271149835,
            "mixed_qty_pct": 0.20153697453249425,
            "instit_qty_pct": 0.45250807443164254,
            "ambiguous_qty_pct": 0.32451591876471336,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32451591876471336,
            "retail_notional_pct": 0.021399615804768263,
            "mixed_notional_pct": 0.20220425832437933,
            "instit_notional_pct": 0.45128719020446556,
            "ambiguous_notional_pct": 0.3251089356663868,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3251089356663868
          },
          "run_composition": {
            "retail_pct": 0.5884260965720605,
            "mixed_pct": 0.23685956505713232,
            "instit_pct": 0.04039808330261703,
            "ambiguous_pct": 0.1343162550681902,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1343162550681902,
            "retail_notional_pct": 0.021399615804768263,
            "mixed_notional_pct": 0.20220425832437933,
            "instit_notional_pct": 0.45128719020446556,
            "unclear_notional_pct": 0.3251089356663868
          },
          "counts": {
            "trades": {
              "retail": 8174,
              "mixed": 5867,
              "institutional": 4607,
              "ambiguous": 4847,
              "unobservable": 0,
              "unclear": 4847
            },
            "runs": {
              "retail": 7982,
              "mixed": 3213,
              "institutional": 548,
              "ambiguous": 1822,
              "unobservable": 0,
              "unclear": 1822
            }
          },
          "confidence": {
            "high": 0.6287504607445632,
            "medium": 0.2369332841872466,
            "low": 0.1343162550681902,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8529,
            "medium": 3214,
            "low": 1822,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5439029580761864,
            "medium": 0.24979782932538838,
            "low": 0.2062992125984252,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 12779,
            "medium": 5869,
            "low": 4847,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8654220420199039,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1343162550681902,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5884260965720605,
          "dominance_gap": 0.3515665315149281,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22198,
              "WALK_BOOK": 1291,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23495
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13565
            },
            "participant_confidence": {
              "HIGH": 8529,
              "MEDIUM": 3214,
              "LOW": 1822
            }
          },
          "trade_size": {
            "avg": 2019.0619706320495,
            "median": 132.0
          },
          "run_size": {
            "avg": 3497.0778474014005,
            "median": 135.0,
            "avg_length": 1.1803169922594914
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-211",
              "timestamp": "2026-05-18T08:59:30.040000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47877,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-210",
              "timestamp": "2026-05-18T08:59:27.035200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-209",
              "timestamp": "2026-05-18T08:59:20.176900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-208",
              "timestamp": "2026-05-18T08:59:19.841000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-207",
              "timestamp": "2026-05-18T08:59:00.215700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47875,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-206",
              "timestamp": "2026-05-18T08:58:34.317200",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47874,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-205",
              "timestamp": "2026-05-18T08:58:08.974200",
              "price": 0.66,
              "size": 900.0,
              "notional": 594.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47873,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-204",
              "timestamp": "2026-05-18T08:56:16.136200",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47872,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-203",
              "timestamp": "2026-05-18T08:55:52.792900",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47871,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-202",
              "timestamp": "2026-05-18T08:55:40.689600",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47870,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-201",
              "timestamp": "2026-05-18T08:54:46.082500",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47869,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-200",
              "timestamp": "2026-05-18T08:54:09.096400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47868,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-199",
              "timestamp": "2026-05-18T08:54:03.395900",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47867,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-198",
              "timestamp": "2026-05-18T08:52:45.360000",
              "price": 0.665,
              "size": 5800.0,
              "notional": 3857.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47866,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-197",
              "timestamp": "2026-05-18T08:50:42.804100",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47865,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-196",
              "timestamp": "2026-05-18T08:48:50.502800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47864,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-195",
              "timestamp": "2026-05-18T08:44:55.124200",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-194",
              "timestamp": "2026-05-18T08:44:42.637200",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-193",
              "timestamp": "2026-05-18T08:44:20.619800",
              "price": 0.665,
              "size": 1600.0,
              "notional": 1064.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47862,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-192",
              "timestamp": "2026-05-18T08:42:39.662900",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47861,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-191",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-190",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-189",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-188",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-187",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-186",
              "timestamp": "2026-05-18T08:42:38.607600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-185",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-184",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-183",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-182",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 1900.0,
              "notional": 1263.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.34790380932113213,
              "mixed_pct": 0.24971270483081506,
              "instit_pct": 0.19608427324962757,
              "ambiguous_pct": 0.2062992125984252,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2062992125984252,
              "retail_qty_pct": 0.021439032271149835,
              "mixed_qty_pct": 0.20153697453249425,
              "instit_qty_pct": 0.45250807443164254,
              "ambiguous_qty_pct": 0.32451591876471336,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32451591876471336,
              "retail_notional_pct": 0.021399615804768263,
              "mixed_notional_pct": 0.20220425832437933,
              "instit_notional_pct": 0.45128719020446556,
              "ambiguous_notional_pct": 0.3251089356663868,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3251089356663868,
              "run_retail_pct": 0.5884260965720605,
              "run_mixed_pct": 0.23685956505713232,
              "run_instit_pct": 0.04039808330261703,
              "run_unclear_pct": 0.1343162550681902,
              "avg_trade_size": 2019.0619706320495,
              "avg_run_notional": 3497.0778474014005,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6287504607445632,
              "medium_confidence_pct": 0.2369332841872466,
              "low_confidence_pct": 0.1343162550681902,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8654220420199039,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5094837755350422,
              "mixed_pct": 0.02883517141947685,
              "instit_pct": 0.4611942254760612,
              "ambiguous_pct": 0.00048682756941973896,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.00048682756941973896,
              "retail_qty_pct": 0.21807551988005933,
              "mixed_qty_pct": 0.021225188239229774,
              "instit_qty_pct": 0.7605521684073359,
              "ambiguous_qty_pct": 0.00014712347337503,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00014712347337503,
              "retail_notional_pct": 0.2182394334472074,
              "mixed_notional_pct": 0.021124961492961187,
              "instit_notional_pct": 0.7604884320037957,
              "ambiguous_notional_pct": 0.0001471730560357814,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0001471730560357814,
              "run_retail_pct": 0.8348527480772838,
              "run_mixed_pct": 0.01691990245732508,
              "run_instit_pct": 0.14781466891765146,
              "run_unclear_pct": 0.0004126805477396361,
              "avg_trade_size": 1438.091261445129,
              "avg_run_notional": 2881.415869442881,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7789908084787094,
              "low_confidence_pct": 0.22100919152129056,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.46953854811480034,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 44053,
          "n_runs": 27186,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-14",
          "last_trade_date": "2026-05-18",
          "period_days": 126,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.3770685310875536,
            "mixed_pct": 0.24672553515084103,
            "instit_pct": 0.17730915034163394,
            "ambiguous_pct": 0.19889678341997138,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19889678341997138,
            "retail_qty_pct": 0.02731334454200137,
            "mixed_qty_pct": 0.2153958320360338,
            "instit_qty_pct": 0.4269006303146038,
            "ambiguous_qty_pct": 0.33039019310736106,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.33039019310736106,
            "retail_notional_pct": 0.02735484385581711,
            "mixed_notional_pct": 0.21619814957723818,
            "instit_notional_pct": 0.425406269929191,
            "ambiguous_notional_pct": 0.33104073663775374,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33104073663775374
          },
          "run_composition": {
            "retail_pct": 0.5960788641212389,
            "mixed_pct": 0.2332818362392408,
            "instit_pct": 0.04171264621496359,
            "ambiguous_pct": 0.12892665342455675,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12892665342455675,
            "retail_notional_pct": 0.02735399646574185,
            "mixed_notional_pct": 0.2161983379338707,
            "instit_notional_pct": 0.4254066405525872,
            "unclear_notional_pct": 0.33104102504780025
          },
          "counts": {
            "trades": {
              "retail": 16611,
              "mixed": 10869,
              "institutional": 7811,
              "ambiguous": 8762,
              "unobservable": 0,
              "unclear": 8762
            },
            "runs": {
              "retail": 16205,
              "mixed": 6342,
              "institutional": 1134,
              "ambiguous": 3505,
              "unobservable": 0,
              "unclear": 3505
            }
          },
          "confidence": {
            "high": 0.6377547266975649,
            "medium": 0.23331861987787833,
            "low": 0.12892665342455675,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17338,
            "medium": 6343,
            "low": 3505,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5543095816402969,
            "medium": 0.24677093501010147,
            "low": 0.1989194833496016,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 24419,
            "medium": 10871,
            "low": 8763,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8645203413521664,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12892665342455675,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5960788641212389,
          "dominance_gap": 0.3627970278819981,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42390,
              "WALK_BOOK": 1656,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 44053
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27186
            },
            "participant_confidence": {
              "HIGH": 17338,
              "MEDIUM": 6343,
              "LOW": 3505
            }
          },
          "trade_size": {
            "avg": 1758.7322089301524,
            "median": 135.0
          },
          "run_size": {
            "avg": 2849.89930478923,
            "median": 137.0,
            "avg_length": 1.1595674244096226
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-211",
              "timestamp": "2026-05-18T08:59:30.040000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47877,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-210",
              "timestamp": "2026-05-18T08:59:27.035200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-209",
              "timestamp": "2026-05-18T08:59:20.176900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-208",
              "timestamp": "2026-05-18T08:59:19.841000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47876,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-207",
              "timestamp": "2026-05-18T08:59:00.215700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47875,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-206",
              "timestamp": "2026-05-18T08:58:34.317200",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47874,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-205",
              "timestamp": "2026-05-18T08:58:08.974200",
              "price": 0.66,
              "size": 900.0,
              "notional": 594.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47873,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-204",
              "timestamp": "2026-05-18T08:56:16.136200",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47872,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-203",
              "timestamp": "2026-05-18T08:55:52.792900",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47871,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-202",
              "timestamp": "2026-05-18T08:55:40.689600",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47870,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-201",
              "timestamp": "2026-05-18T08:54:46.082500",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47869,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-200",
              "timestamp": "2026-05-18T08:54:09.096400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47868,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-199",
              "timestamp": "2026-05-18T08:54:03.395900",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47867,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-198",
              "timestamp": "2026-05-18T08:52:45.360000",
              "price": 0.665,
              "size": 5800.0,
              "notional": 3857.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47866,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-197",
              "timestamp": "2026-05-18T08:50:42.804100",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47865,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-196",
              "timestamp": "2026-05-18T08:48:50.502800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47864,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-195",
              "timestamp": "2026-05-18T08:44:55.124200",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-194",
              "timestamp": "2026-05-18T08:44:42.637200",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47863,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-193",
              "timestamp": "2026-05-18T08:44:20.619800",
              "price": 0.665,
              "size": 1600.0,
              "notional": 1064.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47862,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-192",
              "timestamp": "2026-05-18T08:42:39.662900",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47861,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-191",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-190",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-189",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-188",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-187",
              "timestamp": "2026-05-18T08:42:39.632600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-186",
              "timestamp": "2026-05-18T08:42:38.607600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47860,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-185",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-184",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-183",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-182",
              "timestamp": "2026-05-18T08:41:23.635000",
              "price": 0.665,
              "size": 1900.0,
              "notional": 1263.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47859,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3770685310875536,
              "mixed_pct": 0.24672553515084103,
              "instit_pct": 0.17730915034163394,
              "ambiguous_pct": 0.19889678341997138,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19889678341997138,
              "retail_qty_pct": 0.02731334454200137,
              "mixed_qty_pct": 0.2153958320360338,
              "instit_qty_pct": 0.4269006303146038,
              "ambiguous_qty_pct": 0.33039019310736106,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.33039019310736106,
              "retail_notional_pct": 0.02735484385581711,
              "mixed_notional_pct": 0.21619814957723818,
              "instit_notional_pct": 0.425406269929191,
              "ambiguous_notional_pct": 0.33104073663775374,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.33104073663775374,
              "run_retail_pct": 0.5960788641212389,
              "run_mixed_pct": 0.2332818362392408,
              "run_instit_pct": 0.04171264621496359,
              "run_unclear_pct": 0.12892665342455675,
              "avg_trade_size": 1758.7322089301524,
              "avg_run_notional": 2849.89930478923,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6377547266975649,
              "medium_confidence_pct": 0.23331861987787833,
              "low_confidence_pct": 0.12892665342455675,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8645203413521664,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5385216033315982,
              "mixed_pct": 0.027058823529411764,
              "instit_pct": 0.43409682457053617,
              "ambiguous_pct": 0.00032274856845393023,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.00032274856845393023,
              "retail_qty_pct": 0.24169341816187354,
              "mixed_qty_pct": 0.01866561533205389,
              "instit_qty_pct": 0.7395495535062248,
              "ambiguous_qty_pct": 9.141299984781523e-05,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 9.141299984781523e-05,
              "retail_notional_pct": 0.24383189882699233,
              "mixed_notional_pct": 0.018329917511245804,
              "instit_notional_pct": 0.7377514685458975,
              "ambiguous_notional_pct": 8.671511586440046e-05,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 8.671511586440046e-05,
              "run_retail_pct": 0.8412486239974839,
              "run_mixed_pct": 0.016728259160245323,
              "run_instit_pct": 0.14176757351784872,
              "run_unclear_pct": 0.00025554332442207894,
              "avg_trade_size": 1463.7434513274336,
              "avg_run_notional": 2763.6530606227393,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7873682969020286,
              "low_confidence_pct": 0.2126317030979714,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4686674398490331,
              "observable_run_pct": 1.0,
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
      "n_trades": 44053,
      "n_runs": 27186,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-14",
      "last_trade_date": "2026-05-18",
      "period_days": 126,
      "method": {
        "key": "persona_v4_l2_only",
        "name": "Trader persona v4 — L2-only",
        "version": "4.0",
        "unit_of_classification": "runs"
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.3770685310875536,
        "mixed_pct": 0.24672553515084103,
        "instit_pct": 0.17730915034163394,
        "ambiguous_pct": 0.19889678341997138,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.19889678341997138,
        "retail_qty_pct": 0.02731334454200137,
        "mixed_qty_pct": 0.2153958320360338,
        "instit_qty_pct": 0.4269006303146038,
        "ambiguous_qty_pct": 0.33039019310736106,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.33039019310736106,
        "retail_notional_pct": 0.02735484385581711,
        "mixed_notional_pct": 0.21619814957723818,
        "instit_notional_pct": 0.425406269929191,
        "ambiguous_notional_pct": 0.33104073663775374,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.33104073663775374
      },
      "run_composition": {
        "retail_pct": 0.5960788641212389,
        "mixed_pct": 0.2332818362392408,
        "instit_pct": 0.04171264621496359,
        "ambiguous_pct": 0.12892665342455675,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12892665342455675
      },
      "trade_size": {
        "avg": 1758.7322089301524,
        "median": 135.0
      },
      "run_size": {
        "avg": 2849.89930478923,
        "median": 137.0,
        "avg_length": 1.1595674244096226
      },
      "confidence": {
        "high": 0.6377547266975649,
        "medium": 0.23331861987787833,
        "low": 0.12892665342455675,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17338,
        "medium": 6343,
        "low": 3505,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5543095816402969,
        "medium": 0.24677093501010147,
        "low": 0.1989194833496016,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 24419,
        "medium": 10871,
        "low": 8763,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16611,
          "mixed": 10869,
          "institutional": 7811,
          "ambiguous": 8762,
          "unobservable": 0,
          "unclear": 8762
        },
        "runs": {
          "retail": 16205,
          "mixed": 6342,
          "institutional": 1134,
          "ambiguous": 3505,
          "unobservable": 0,
          "unclear": 3505
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8645203413521664,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.12892665342455675,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5960788641212389,
      "dominance_gap": 0.3627970278819981,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 7482,
            "n_runs": 4659,
            "retail_pct": 0.37837476610531945,
            "mixed_pct": 0.26263031275060145,
            "instit_pct": 0.17201283079390536,
            "ambiguous_pct": 0.18698209035017374,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18698209035017374,
            "avg_trade_size": 971.4749398556536,
            "avg_run_notional": 1560.1004507405023,
            "retail_qty_pct": 0.041282360582722465,
            "mixed_qty_pct": 0.2150969657604157,
            "instit_qty_pct": 0.37574464136587177,
            "ambiguous_qty_pct": 0.3678760322909901,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3678760322909901,
            "retail_notional_pct": 0.04127954645308424,
            "mixed_notional_pct": 0.21538078540974087,
            "instit_notional_pct": 0.375480725212251,
            "ambiguous_notional_pct": 0.3678589429249239,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3678589429249239,
            "run_retail_pct": 0.5851040995921871,
            "run_mixed_pct": 0.25005365958360165,
            "run_instit_pct": 0.042927666881305004,
            "run_ambiguous_pct": 0.12191457394290621,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12191457394290621,
            "avg_feature_coverage": 0.8661300708306502,
            "high_confidence_pct": 0.6280317664734921,
            "medium_confidence_pct": 0.25005365958360165,
            "low_confidence_pct": 0.12191457394290621,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4966,
            "n_runs": 3378,
            "retail_pct": 0.4311316955296013,
            "mixed_pct": 0.21908981071284736,
            "instit_pct": 0.1121627064035441,
            "ambiguous_pct": 0.23761578735400726,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23761578735400726,
            "avg_trade_size": 2388.3777688280306,
            "avg_run_notional": 3511.1557134399054,
            "retail_qty_pct": 0.02147239263803681,
            "mixed_qty_pct": 0.24888140596891,
            "instit_qty_pct": 0.35579939111582637,
            "ambiguous_qty_pct": 0.3738468102772268,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3738468102772268,
            "retail_notional_pct": 0.02152299985397132,
            "mixed_notional_pct": 0.24963467536948122,
            "instit_notional_pct": 0.3535686896303788,
            "ambiguous_notional_pct": 0.3752736351461686,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3752736351461686,
            "run_retail_pct": 0.6299585553582001,
            "run_mixed_pct": 0.1965660153937241,
            "run_instit_pct": 0.03167554766133807,
            "run_ambiguous_pct": 0.1417998815867377,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1417998815867377,
            "avg_feature_coverage": 0.8590586145648311,
            "high_confidence_pct": 0.6616341030195382,
            "medium_confidence_pct": 0.1965660153937241,
            "low_confidence_pct": 0.1417998815867377,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4495,
            "n_runs": 3123,
            "retail_pct": 0.41735261401557283,
            "mixed_pct": 0.25739710789766407,
            "instit_pct": 0.1296996662958843,
            "ambiguous_pct": 0.19555061179087876,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19555061179087876,
            "avg_trade_size": 2441.2621802002222,
            "avg_run_notional": 3513.7603266090296,
            "retail_qty_pct": 0.019590694420150427,
            "mixed_qty_pct": 0.2699405282490817,
            "instit_qty_pct": 0.35798620655188784,
            "ambiguous_qty_pct": 0.35248257077888,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35248257077888,
            "retail_notional_pct": 0.01958750800282153,
            "mixed_notional_pct": 0.27015415857157715,
            "instit_notional_pct": 0.3575303207320818,
            "ambiguous_notional_pct": 0.3527280126935195,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3527280126935195,
            "run_retail_pct": 0.5965417867435159,
            "run_mixed_pct": 0.23503041946845982,
            "run_instit_pct": 0.037784181876400896,
            "run_ambiguous_pct": 0.13064361191162344,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13064361191162344,
            "avg_feature_coverage": 0.8630643611911621,
            "high_confidence_pct": 0.6343259686199167,
            "medium_confidence_pct": 0.23503041946845982,
            "low_confidence_pct": 0.13064361191162344,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9697,
            "n_runs": 5554,
            "retail_pct": 0.34722078993503147,
            "mixed_pct": 0.23914612766835103,
            "instit_pct": 0.18830566154480768,
            "ambiguous_pct": 0.22532742085180985,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22532742085180985,
            "avg_trade_size": 2161.422347117665,
            "avg_run_notional": 3773.732895210659,
            "retail_qty_pct": 0.020596205962059622,
            "mixed_qty_pct": 0.17062141551648075,
            "instit_qty_pct": 0.49486985567530095,
            "ambiguous_qty_pct": 0.31391252284615867,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.31391252284615867,
            "retail_notional_pct": 0.02051935148159082,
            "mixed_notional_pct": 0.17032937029780915,
            "instit_notional_pct": 0.4948807600440138,
            "ambiguous_notional_pct": 0.3142705181765862,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3142705181765862,
            "run_retail_pct": 0.5923658624414836,
            "run_mixed_pct": 0.23046453006841916,
            "run_instit_pct": 0.03312927619733525,
            "run_ambiguous_pct": 0.14404033129276198,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14404033129276198,
            "avg_feature_coverage": 0.8644850558156283,
            "high_confidence_pct": 0.6253150882247029,
            "medium_confidence_pct": 0.2306445804825351,
            "low_confidence_pct": 0.14404033129276198,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 8271,
            "n_runs": 4562,
            "retail_pct": 0.33563051626163704,
            "mixed_pct": 0.23515898923951153,
            "instit_pct": 0.2422923467537178,
            "ambiguous_pct": 0.1869181477451336,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1869181477451336,
            "avg_trade_size": 1583.4353161649135,
            "avg_run_notional": 2870.800854888207,
            "retail_qty_pct": 0.02187209546367643,
            "mixed_qty_pct": 0.1744570703285062,
            "instit_qty_pct": 0.47708352072277355,
            "ambiguous_qty_pct": 0.32658731348504383,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32658731348504383,
            "retail_notional_pct": 0.021910010416067355,
            "mixed_notional_pct": 0.17493587168296856,
            "instit_notional_pct": 0.4761817643649091,
            "ambiguous_notional_pct": 0.326972353536055,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.326972353536055,
            "run_retail_pct": 0.5922840859272249,
            "run_mixed_pct": 0.23323103901797457,
            "run_instit_pct": 0.052389302937308195,
            "run_ambiguous_pct": 0.12209557211749233,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12209557211749233,
            "avg_feature_coverage": 0.8682924156071897,
            "high_confidence_pct": 0.6446733888645331,
            "medium_confidence_pct": 0.23323103901797457,
            "low_confidence_pct": 0.12209557211749233,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 3443,
            "n_runs": 2073,
            "retail_pct": 0.3514376996805112,
            "mixed_pct": 0.31484170781295384,
            "instit_pct": 0.14464130119082197,
            "ambiguous_pct": 0.18907929131571305,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18907929131571305,
            "avg_trade_size": 1674.3844031367994,
            "avg_run_notional": 2780.9481427882297,
            "retail_qty_pct": 0.028841705985752614,
            "mixed_qty_pct": 0.2774077157923952,
            "instit_qty_pct": 0.39434730317328154,
            "ambiguous_qty_pct": 0.2994032750485706,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2994032750485706,
            "retail_notional_pct": 0.028835685164310152,
            "mixed_notional_pct": 0.2773436615743311,
            "instit_notional_pct": 0.39401036148814583,
            "ambiguous_notional_pct": 0.29981029177321294,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.29981029177321294,
            "run_retail_pct": 0.5682585624698504,
            "run_mixed_pct": 0.26386878919440426,
            "run_instit_pct": 0.038109020742884706,
            "run_ambiguous_pct": 0.1297636275928606,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1297636275928606,
            "avg_feature_coverage": 0.8632416787264832,
            "high_confidence_pct": 0.6063675832127352,
            "medium_confidence_pct": 0.26386878919440426,
            "low_confidence_pct": 0.1297636275928606,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.3770685310875536,
          "mixed_pct": 0.24672553515084103,
          "instit_pct": 0.17730915034163394,
          "ambiguous_pct": 0.19889678341997138,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.19889678341997138,
          "retail_qty_pct": 0.02731334454200137,
          "mixed_qty_pct": 0.2153958320360338,
          "instit_qty_pct": 0.4269006303146038,
          "ambiguous_qty_pct": 0.33039019310736106,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.33039019310736106,
          "retail_notional_pct": 0.02735484385581711,
          "mixed_notional_pct": 0.21619814957723818,
          "instit_notional_pct": 0.425406269929191,
          "ambiguous_notional_pct": 0.33104073663775374,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.33104073663775374,
          "run_retail_pct": 0.5960788641212389,
          "run_mixed_pct": 0.2332818362392408,
          "run_instit_pct": 0.04171264621496359,
          "run_unclear_pct": 0.12892665342455675,
          "avg_trade_size": 1758.7322089301524,
          "avg_run_notional": 2849.89930478923,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6377547266975649,
          "medium_confidence_pct": 0.23331861987787833,
          "low_confidence_pct": 0.12892665342455675,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8645203413521664,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5385216033315982,
          "mixed_pct": 0.027058823529411764,
          "instit_pct": 0.43409682457053617,
          "ambiguous_pct": 0.00032274856845393023,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.00032274856845393023,
          "retail_qty_pct": 0.24169341816187354,
          "mixed_qty_pct": 0.01866561533205389,
          "instit_qty_pct": 0.7395495535062248,
          "ambiguous_qty_pct": 9.141299984781523e-05,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 9.141299984781523e-05,
          "retail_notional_pct": 0.24383189882699233,
          "mixed_notional_pct": 0.018329917511245804,
          "instit_notional_pct": 0.7377514685458975,
          "ambiguous_notional_pct": 8.671511586440046e-05,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 8.671511586440046e-05,
          "run_retail_pct": 0.8412486239974839,
          "run_mixed_pct": 0.016728259160245323,
          "run_instit_pct": 0.14176757351784872,
          "run_unclear_pct": 0.00025554332442207894,
          "avg_trade_size": 1463.7434513274336,
          "avg_run_notional": 2763.6530606227393,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7873682969020286,
          "low_confidence_pct": 0.2126317030979714,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4686674398490331,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.28431372549019607,
            "mixed_pct": 0.38235294117647056,
            "instit_pct": 0.20098039215686275,
            "ambiguous_pct": 0.1323529411764706,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1323529411764706,
            "retail_qty_pct": 0.03743876836948915,
            "mixed_qty_pct": 0.6141824119430838,
            "instit_qty_pct": 0.22614882202006065,
            "ambiguous_qty_pct": 0.12222999766736646,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12222999766736646,
            "retail_notional_pct": 0.03739943294669016,
            "mixed_notional_pct": 0.6141560245693922,
            "instit_notional_pct": 0.22626810119424334,
            "ambiguous_notional_pct": 0.12217644128967425,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12217644128967425,
            "run_retail_pct": 0.5806451612903226,
            "run_mixed_pct": 0.25806451612903225,
            "run_instit_pct": 0.053763440860215055,
            "run_unclear_pct": 0.10752688172043011,
            "avg_trade_size": 2799.9926470588234,
            "avg_run_notional": 6141.919354838709,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6344086021505376,
            "medium_confidence_pct": 0.25806451612903225,
            "low_confidence_pct": 0.10752688172043011,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8580645161290318,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.45284974093264246,
            "mixed_pct": 0.05077720207253886,
            "instit_pct": 0.49637305699481865,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.18536162841056736,
            "mixed_qty_pct": 0.005023819835426591,
            "instit_qty_pct": 0.8096145517540061,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.18509928398898648,
            "mixed_notional_pct": 0.004996504434894686,
            "instit_notional_pct": 0.8099042115761188,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8159090909090909,
            "run_mixed_pct": 0.04772727272727273,
            "run_instit_pct": 0.13636363636363635,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 781.8937823834196,
            "avg_run_notional": 1714.8352272727273,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.8636363636363636,
            "low_confidence_pct": 0.13636363636363635,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.46909090909090917,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3444296493564137,
            "mixed_pct": 0.27548453913300786,
            "instit_pct": 0.16185826305666517,
            "ambiguous_pct": 0.2182275484539133,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2182275484539133,
            "retail_qty_pct": 0.02625494776851101,
            "mixed_qty_pct": 0.2417295098834324,
            "instit_qty_pct": 0.3775858521056008,
            "ambiguous_qty_pct": 0.3544296902424558,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3544296902424558,
            "retail_notional_pct": 0.026241769748853207,
            "mixed_notional_pct": 0.24182501487319494,
            "instit_notional_pct": 0.3774137411505058,
            "ambiguous_notional_pct": 0.354519474227446,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.354519474227446,
            "run_retail_pct": 0.5781688344809998,
            "run_mixed_pct": 0.24789594491201225,
            "run_instit_pct": 0.039275694975771484,
            "run_unclear_pct": 0.13465952563121653,
            "avg_trade_size": 1627.657197810327,
            "avg_run_notional": 2805.747258352461,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6174445294567712,
            "medium_confidence_pct": 0.24789594491201225,
            "low_confidence_pct": 0.13465952563121653,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8629431267533791,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5565747352868752,
            "mixed_pct": 0.01834523516375277,
            "instit_pct": 0.4250800295493721,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.21952563852179763,
            "mixed_qty_pct": 0.0022828374888787624,
            "instit_qty_pct": 0.7781915239893236,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.22010828859395412,
            "mixed_notional_pct": 0.0022789801290375223,
            "instit_notional_pct": 0.7776127312770084,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8406808330690347,
            "run_mixed_pct": 0.014272121788772598,
            "run_instit_pct": 0.14504704514219263,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 953.6395284412706,
            "avg_run_notional": 1637.691140712549,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.8208055819854108,
            "low_confidence_pct": 0.17919441801458927,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4674754202346971,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.34790380932113213,
            "mixed_pct": 0.24971270483081506,
            "instit_pct": 0.19608427324962757,
            "ambiguous_pct": 0.2062992125984252,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2062992125984252,
            "retail_qty_pct": 0.021439032271149835,
            "mixed_qty_pct": 0.20153697453249425,
            "instit_qty_pct": 0.45250807443164254,
            "ambiguous_qty_pct": 0.32451591876471336,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32451591876471336,
            "retail_notional_pct": 0.021399615804768263,
            "mixed_notional_pct": 0.20220425832437933,
            "instit_notional_pct": 0.45128719020446556,
            "ambiguous_notional_pct": 0.3251089356663868,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3251089356663868,
            "run_retail_pct": 0.5884260965720605,
            "run_mixed_pct": 0.23685956505713232,
            "run_instit_pct": 0.04039808330261703,
            "run_unclear_pct": 0.1343162550681902,
            "avg_trade_size": 2019.0619706320495,
            "avg_run_notional": 3497.0778474014005,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6287504607445632,
            "medium_confidence_pct": 0.2369332841872466,
            "low_confidence_pct": 0.1343162550681902,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8654220420199039,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5094837755350422,
            "mixed_pct": 0.02883517141947685,
            "instit_pct": 0.4611942254760612,
            "ambiguous_pct": 0.00048682756941973896,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00048682756941973896,
            "retail_qty_pct": 0.21807551988005933,
            "mixed_qty_pct": 0.021225188239229774,
            "instit_qty_pct": 0.7605521684073359,
            "ambiguous_qty_pct": 0.00014712347337503,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00014712347337503,
            "retail_notional_pct": 0.2182394334472074,
            "mixed_notional_pct": 0.021124961492961187,
            "instit_notional_pct": 0.7604884320037957,
            "ambiguous_notional_pct": 0.0001471730560357814,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0001471730560357814,
            "run_retail_pct": 0.8348527480772838,
            "run_mixed_pct": 0.01691990245732508,
            "run_instit_pct": 0.14781466891765146,
            "run_unclear_pct": 0.0004126805477396361,
            "avg_trade_size": 1438.091261445129,
            "avg_run_notional": 2881.415869442881,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7789908084787094,
            "low_confidence_pct": 0.22100919152129056,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.46953854811480034,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3770685310875536,
            "mixed_pct": 0.24672553515084103,
            "instit_pct": 0.17730915034163394,
            "ambiguous_pct": 0.19889678341997138,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19889678341997138,
            "retail_qty_pct": 0.02731334454200137,
            "mixed_qty_pct": 0.2153958320360338,
            "instit_qty_pct": 0.4269006303146038,
            "ambiguous_qty_pct": 0.33039019310736106,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.33039019310736106,
            "retail_notional_pct": 0.02735484385581711,
            "mixed_notional_pct": 0.21619814957723818,
            "instit_notional_pct": 0.425406269929191,
            "ambiguous_notional_pct": 0.33104073663775374,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33104073663775374,
            "run_retail_pct": 0.5960788641212389,
            "run_mixed_pct": 0.2332818362392408,
            "run_instit_pct": 0.04171264621496359,
            "run_unclear_pct": 0.12892665342455675,
            "avg_trade_size": 1758.7322089301524,
            "avg_run_notional": 2849.89930478923,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6377547266975649,
            "medium_confidence_pct": 0.23331861987787833,
            "low_confidence_pct": 0.12892665342455675,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8645203413521664,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5385216033315982,
            "mixed_pct": 0.027058823529411764,
            "instit_pct": 0.43409682457053617,
            "ambiguous_pct": 0.00032274856845393023,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00032274856845393023,
            "retail_qty_pct": 0.24169341816187354,
            "mixed_qty_pct": 0.01866561533205389,
            "instit_qty_pct": 0.7395495535062248,
            "ambiguous_qty_pct": 9.141299984781523e-05,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 9.141299984781523e-05,
            "retail_notional_pct": 0.24383189882699233,
            "mixed_notional_pct": 0.018329917511245804,
            "instit_notional_pct": 0.7377514685458975,
            "ambiguous_notional_pct": 8.671511586440046e-05,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 8.671511586440046e-05,
            "run_retail_pct": 0.8412486239974839,
            "run_mixed_pct": 0.016728259160245323,
            "run_instit_pct": 0.14176757351784872,
            "run_unclear_pct": 0.00025554332442207894,
            "avg_trade_size": 1463.7434513274336,
            "avg_run_notional": 2763.6530606227393,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7873682969020286,
            "low_confidence_pct": 0.2126317030979714,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4686674398490331,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [
        {
          "trade_id": "BMLL-211",
          "timestamp": "2026-05-18T08:59:30.040000",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47877,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-210",
          "timestamp": "2026-05-18T08:59:27.035200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47876,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-209",
          "timestamp": "2026-05-18T08:59:20.176900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47876,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-208",
          "timestamp": "2026-05-18T08:59:19.841000",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47876,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-207",
          "timestamp": "2026-05-18T08:59:00.215700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47875,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-206",
          "timestamp": "2026-05-18T08:58:34.317200",
          "price": 0.66,
          "size": 300.0,
          "notional": 198.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47874,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-205",
          "timestamp": "2026-05-18T08:58:08.974200",
          "price": 0.66,
          "size": 900.0,
          "notional": 594.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47873,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-204",
          "timestamp": "2026-05-18T08:56:16.136200",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47872,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-203",
          "timestamp": "2026-05-18T08:55:52.792900",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47871,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-202",
          "timestamp": "2026-05-18T08:55:40.689600",
          "price": 0.66,
          "size": 600.0,
          "notional": 396.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47870,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-201",
          "timestamp": "2026-05-18T08:54:46.082500",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47869,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-200",
          "timestamp": "2026-05-18T08:54:09.096400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47868,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-199",
          "timestamp": "2026-05-18T08:54:03.395900",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47867,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-198",
          "timestamp": "2026-05-18T08:52:45.360000",
          "price": 0.665,
          "size": 5800.0,
          "notional": 3857.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47866,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-197",
          "timestamp": "2026-05-18T08:50:42.804100",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47865,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-196",
          "timestamp": "2026-05-18T08:48:50.502800",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47864,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-195",
          "timestamp": "2026-05-18T08:44:55.124200",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47863,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-194",
          "timestamp": "2026-05-18T08:44:42.637200",
          "price": 0.665,
          "size": 1300.0,
          "notional": 864.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47863,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-193",
          "timestamp": "2026-05-18T08:44:20.619800",
          "price": 0.665,
          "size": 1600.0,
          "notional": 1064.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47862,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-192",
          "timestamp": "2026-05-18T08:42:39.662900",
          "price": 0.66,
          "size": 800.0,
          "notional": 528.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47861,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-191",
          "timestamp": "2026-05-18T08:42:39.632600",
          "price": 0.665,
          "size": 900.0,
          "notional": 598.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-190",
          "timestamp": "2026-05-18T08:42:39.632600",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-189",
          "timestamp": "2026-05-18T08:42:39.632600",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-188",
          "timestamp": "2026-05-18T08:42:39.632600",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-187",
          "timestamp": "2026-05-18T08:42:39.632600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-186",
          "timestamp": "2026-05-18T08:42:38.607600",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47860,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-185",
          "timestamp": "2026-05-18T08:41:23.635000",
          "price": 0.665,
          "size": 800.0,
          "notional": 532.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47859,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-184",
          "timestamp": "2026-05-18T08:41:23.635000",
          "price": 0.665,
          "size": 700.0,
          "notional": 465.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47859,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-183",
          "timestamp": "2026-05-18T08:41:23.635000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47859,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-182",
          "timestamp": "2026-05-18T08:41:23.635000",
          "price": 0.665,
          "size": 1900.0,
          "notional": 1263.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47859,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
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
      "total_trades": 44052,
      "price_moving_trades": 10577,
      "pct_price_moving": 24.010260601107785,
      "all_movers": {
        "count": 10577,
        "avg_size": 1468.5174435095018,
        "median_size": 137.0,
        "retail_count": 5505,
        "mixed_count": 2882,
        "institutional_count": 485,
        "ambiguous_count": 1705,
        "unobservable_count": 0,
        "retail_pct": 52.04689420440579,
        "mixed_pct": 27.247801834168477,
        "instit_pct": 4.58542119693675,
        "unclear_pct": 16.119882764488985
      },
      "positive_movers": {
        "count": 5282,
        "avg_size": 1440.4437712987506,
        "median_size": 137.0,
        "retail_count": 2672,
        "mixed_count": 1458,
        "institutional_count": 245,
        "ambiguous_count": 907,
        "unobservable_count": 0,
        "retail_pct": 50.586898901931086,
        "mixed_pct": 27.603180613404017,
        "instit_pct": 4.638394547519878,
        "unclear_pct": 17.17152593714502
      },
      "negative_movers": {
        "count": 5295,
        "avg_size": 1496.5221907459868,
        "median_size": 137.0,
        "retail_count": 2833,
        "mixed_count": 1424,
        "institutional_count": 240,
        "ambiguous_count": 798,
        "unobservable_count": 0,
        "retail_pct": 53.50330500472143,
        "mixed_pct": 26.893295561850806,
        "instit_pct": 4.53257790368272,
        "unclear_pct": 15.070821529745043
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
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
            "avg_short_ratio": 0.04563289658592888,
            "max_short_ratio": 0.18750749310634215,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.07590468224832723,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06389509118493109,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.1550315861114704,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.053628225602769634
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.053628225602769634,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": -26.813616303665487
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 270.35362296811655
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          }
        ],
        "interpretation": "Shorts building significantly (+37% MoM) | YoY: +118% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-18",
            "short_ratio": 0.17024643906850553,
            "short_vol": 150600,
            "total_vol": 884600,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.18750749310634215,
            "short_vol": 156400,
            "total_vol": 834100,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-05-14",
            "short_ratio": 0.022219765642272828,
            "short_vol": 20100,
            "total_vol": 904600,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.08621014902848519,
            "short_vol": 45700,
            "total_vol": 530100,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.006099110546378653,
            "short_vol": 2400,
            "total_vol": 393500,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.03959219414560921,
            "short_vol": 63300,
            "total_vol": 1598800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.008327781479013991,
            "short_vol": 5000,
            "total_vol": 600400,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.023456589021013195,
            "short_vol": 14400,
            "total_vol": 613900,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.010781990521327015,
            "short_vol": 9100,
            "total_vol": 844000,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.004997284084736557,
            "short_vol": 9200,
            "total_vol": 1841000,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.03047168498678169,
            "short_vol": 21900,
            "total_vol": 718700,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.11554982817869416,
            "short_vol": 107600,
            "total_vol": 931200,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.05085158150851581,
            "short_vol": 20900,
            "total_vol": 411000,
            "close": 0.665,
            "return": 0.007575757575757569
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.1365038753856573,
            "short_vol": 181400,
            "total_vol": 1328900,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.03616133518776078,
            "short_vol": 13000,
            "total_vol": 359500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.028525382755842064,
            "short_vol": 17700,
            "total_vol": 620500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.001321003963011889,
            "short_vol": 800,
            "total_vol": 605600,
            "close": 0.66,
            "return": -0.014925373134328401
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0046252848907360235,
            "short_vol": 6900,
            "total_vol": 1491800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.023340669523919843,
            "short_vol": 40300,
            "total_vol": 1726600,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0030158914279085954,
            "short_vol": 2600,
            "total_vol": 862100,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.006643180674383493,
            "short_vol": 6600,
            "total_vol": 993500,
            "close": 0.67,
            "return": 0.015151515151515138
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.008671713695801789,
            "short_vol": 18900,
            "total_vol": 2179500,
            "close": 0.66,
            "return": 0.007633587786259444
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.04148936170212766,
            "short_vol": 35100,
            "total_vol": 846000,
            "close": 0.655,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.05741664069803677,
            "short_vol": 73700,
            "total_vol": 1283600,
            "close": 0.655,
            "return": 0.015503875968992276
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.016528313074414467,
            "short_vol": 22300,
            "total_vol": 1349200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.00303905181583346,
            "short_vol": 4000,
            "total_vol": 1316200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.010373267579287476,
            "short_vol": 12200,
            "total_vol": 1176100,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.043985045084671215,
            "short_vol": 20000,
            "total_vol": 454700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.07590468224832723,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06289619789956377,
          "max_short_ratio": 0.583009889700239,
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
          "opening": 0.01088004044914843,
          "continuous": 0.9691481925135141,
          "closing": 0.01985808864200128,
          "auctions": 0.030851807486485843,
          "other": 0.0
        },
        "1M": {
          "opening": 0.023702738154182227,
          "continuous": 0.8946251055983534,
          "closing": 0.0716042196908106,
          "auctions": 0.10537489440164659,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04706868890230517,
          "continuous": 0.873309570992577,
          "closing": 0.0658516310290895,
          "auctions": 0.12669042900742306,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03863916419800148,
          "continuous": 0.866830552002157,
          "closing": 0.0828789234598827,
          "auctions": 0.13316944799784305,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.21972394386664112,
        "1M": 0.22670043563992703,
        "3M": 0.22166247162610736,
        "6M": 0.23432977449514347
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.019
        },
        {
          "time": "09:00",
          "avg_share": 0.1018
        },
        {
          "time": "09:30",
          "avg_share": 0.04
        },
        {
          "time": "10:00",
          "avg_share": 0.0461
        },
        {
          "time": "10:30",
          "avg_share": 0.0343
        },
        {
          "time": "11:00",
          "avg_share": 0.0298
        },
        {
          "time": "11:30",
          "avg_share": 0.0375
        },
        {
          "time": "12:00",
          "avg_share": 0.2377
        },
        {
          "time": "12:30",
          "avg_share": 0.0095
        },
        {
          "time": "13:00",
          "avg_share": 0.0214
        },
        {
          "time": "13:30",
          "avg_share": 0.02
        },
        {
          "time": "14:00",
          "avg_share": 0.032
        },
        {
          "time": "14:30",
          "avg_share": 0.0317
        },
        {
          "time": "15:00",
          "avg_share": 0.0326
        },
        {
          "time": "15:30",
          "avg_share": 0.0473
        },
        {
          "time": "16:00",
          "avg_share": 0.0426
        },
        {
          "time": "16:30",
          "avg_share": 0.0993
        },
        {
          "time": "17:00",
          "avg_share": 0.1174
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 12.043151157982079,
          "hhi": 0.2257630207245162,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.043694260968392,
          "hhi": 0.17131008413506713,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
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
