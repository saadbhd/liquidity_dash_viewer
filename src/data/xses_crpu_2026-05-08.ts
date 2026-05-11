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
      "marketCap": 1161247947.75,
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
    "asof_date": "2026-05-08",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
    "market_cap_category": "small",
    "universe_total": 557,
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
          "score_pca": 77.737881508079,
          "score_pca_percentile": 77.737881508079,
          "rank_pca": 125,
          "total": 557,
          "adv_notional_sgd": 399266.0,
          "adv_volume_shares": 600400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0013136107902633287,
          "votes": 322.0,
          "trades": 322.0,
          "spread_pct": 0.007490636704119858,
          "spread_ticks": 1.0,
          "amihud": 1.869101442938843e-08,
          "volatility": 0.07141316959598021
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5012539841257782,
          "loadings": {
            "log_adv": 0.5640414617425991,
            "log_trades": 0.5243567546391843,
            "log_turnover": 0.5230557804438739,
            "neg_spread": 0.3589291409946924,
            "neg_amihud": 0.06096546160555764,
            "neg_vol": -0.027802123656626085
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
          "peer_median_adv": 497475.00000000006,
          "peer_median_score_pca": 77.37881508078995,
          "peer_median_trades": 325.0,
          "peer_median_volatility": 0.1412413027839655,
          "peer_median_spread_pct": 0.007539610471803512,
          "peer_median_spread_ticks": 1.0148148148148148,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0006099878134946187,
          "target_vs_peer": {
            "score_pca_delta": 0.36,
            "adv_delta_pct": -19.7,
            "trades_delta_pct": -0.92,
            "volatility_delta_pct": 49.44,
            "spread_pct_delta_pct": 0.65,
            "spread_ticks_delta_pct": -1.46,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 115.35
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 77.737881508079,
            "rank_pca": 125,
            "adv": 399266.0,
            "trades": 322.0,
            "volatility": 0.07141316959598021,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 1.869101442938843e-08,
            "turnover_ratio": 0.0013136107902633287,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 77.37881508078995,
            "rank_pca": 127,
            "adv": 497475.00000000006,
            "trades": 325.0,
            "volatility": 0.1412413027839655,
            "spread_pct": 0.007539610471803512,
            "spread_ticks": 1.0148148148148148,
            "amihud": 0.0,
            "turnover_ratio": 0.0006099878134946187,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3112459244578871,
              "median": 0.11301621754974246,
              "min": 0.0,
              "max": 35.85782843759051,
              "p5": 0.0,
              "p95": 0.9115861012629628,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4178028.1218900494,
              "median": 19825.0,
              "min": 0.0,
              "max": 417027024.0,
              "p5": 0.0,
              "p95": 15806579.399999976,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1040296831544397,
              "median": 0.029704984740589874,
              "min": 0.00029332562692606454,
              "max": 1.5471698113207548,
              "p5": 0.0036355278502263645,
              "p95": 0.5058282208588948,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005207877590601519,
              "median": 0.00037457513990092346,
              "min": 0.0,
              "max": 0.6097159053457254,
              "p5": 0.0,
              "p95": 0.015467691626938293,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00013268384813239236,
              "median": 1.0657444992663314e-08,
              "min": 0.0,
              "max": 0.015166835187057663,
              "p5": 0.0,
              "p95": 1.636626472542144e-05,
              "count": 403
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 549.5170556552962,
              "median": 9.0,
              "min": 0.0,
              "max": 15141.0,
              "p5": 0.0,
              "p95": 3042.1999999999916,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26623360839709054,
              "median": 0.15536611509285847,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.024994609358593076,
              "p95": 0.8998577047407861,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 13080816.292906215,
              "median": 368103.25,
              "min": 45.0,
              "max": 89773096.0,
              "p5": 4841.610000000001,
              "p95": 63014982.79999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.029754082260133298,
              "median": 0.008293606599896412,
              "min": 0.004357836551727306,
              "max": 0.13333333333333333,
              "p5": 0.004391678176036679,
              "p95": 0.1084699453551912,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028145295663455695,
              "median": 0.0006931636126637844,
              "min": 1.9245477179587867e-07,
              "max": 0.010909305731389119,
              "p5": 0.0001558905798915675,
              "p95": 0.009862867179194337,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.2195519255621555e-09,
              "median": 0.0,
              "min": 0.0,
              "max": 3.097019418234087e-08,
              "p5": 0.0,
              "p95": 2.6672481268807507e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1217.75,
              "median": 323.5,
              "min": 1.0,
              "max": 6204.0,
              "p5": 13.600000000000001,
              "p95": 4835.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 497475.00000000006,
              "median": 497475.00000000006,
              "min": 497475.00000000006,
              "max": 497475.00000000006,
              "p5": 497475.00000000006,
              "p95": 497475.00000000006,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 325.0,
              "median": 325.0,
              "min": 325.0,
              "max": 325.0,
              "p5": 325.0,
              "p95": 325.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1412413027839655,
              "median": 0.1412413027839655,
              "min": 0.1412413027839655,
              "max": 0.1412413027839655,
              "p5": 0.1412413027839655,
              "p95": 0.1412413027839655,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007539610471803512,
              "median": 0.007539610471803512,
              "min": 0.007539610471803512,
              "max": 0.007539610471803512,
              "p5": 0.007539610471803512,
              "p95": 0.007539610471803512,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0148148148148148,
              "median": 1.0148148148148148,
              "min": 1.0148148148148148,
              "max": 1.0148148148148148,
              "p5": 1.0148148148148148,
              "p95": 1.0148148148148148,
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
              "mean": 0.0006099878134946187,
              "median": 0.0006099878134946187,
              "min": 0.0006099878134946187,
              "max": 0.0006099878134946187,
              "p5": 0.0006099878134946187,
              "p95": 0.0006099878134946187,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.007462686567164201,
            "market": -0.004059130133046374,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.003403556434117827,
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
          "score_pca": 80.96947935368043,
          "score_pca_percentile": 80.96947935368043,
          "rank_pca": 107,
          "total": 557,
          "adv_notional_sgd": 573296.5,
          "adv_volume_shares": 862100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018861823155996262,
          "votes": 344.0,
          "trades": 344.0,
          "spread_pct": 0.007614324265188542,
          "spread_ticks": 1.0,
          "amihud": 7.522513113959554e-09,
          "volatility": 0.12352663959247331
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5286596009677178,
          "loadings": {
            "log_adv": 0.5389301427904062,
            "log_trades": 0.489922032416946,
            "log_turnover": 0.4868880372825646,
            "neg_spread": 0.41553034473488837,
            "neg_amihud": 0.1508689445866734,
            "neg_vol": 0.19246775485597772
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
          "peer_median_score_pca": 83.84201077199282,
          "peer_median_trades": 788.0,
          "peer_median_volatility": 0.1452416800769652,
          "peer_median_spread_pct": 0.007492249568866699,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 8.677764509283029e-09,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -2.87,
            "adv_delta_pct": -23.2,
            "trades_delta_pct": -56.35,
            "volatility_delta_pct": 14.95,
            "spread_pct_delta_pct": -1.63,
            "spread_ticks_delta_pct": -0.81,
            "amihud_delta_pct": 13.31,
            "turnover_ratio_delta_pct": 102.91
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 80.96947935368043,
            "rank_pca": 107,
            "adv": 573296.5,
            "trades": 344.0,
            "volatility": 0.12352663959247331,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0,
            "amihud": 7.522513113959554e-09,
            "turnover_ratio": 0.0018861823155996262,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.84201077199282,
            "rank_pca": 91,
            "adv": 746861.5,
            "trades": 788.0,
            "volatility": 0.1452416800769652,
            "spread_pct": 0.007492249568866699,
            "spread_ticks": 1.0081615120274914,
            "amihud": 8.677764509283029e-09,
            "turnover_ratio": 0.0009295485934000085,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6281920216469347,
              "median": 0.3805421491173954,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08037265342402455,
              "p95": 1.9178433474022847,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3290284.3133458956,
              "median": 15610.5,
              "min": 0.0,
              "max": 268652400.0,
              "p5": 0.0,
              "p95": 13799501.799999936,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10246077788577725,
              "median": 0.02947598253275106,
              "min": 0.0002620504005019638,
              "max": 1.2631578947368423,
              "p5": 0.0033289781322812803,
              "p95": 0.48891840108457263,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004068772239622605,
              "median": 0.0003635408308854712,
              "min": 0.0,
              "max": 0.6097159053457254,
              "p5": 0.0,
              "p95": 0.013811955915964177,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7102349671114585e-05,
              "median": 8.902925967240328e-08,
              "min": 0.0,
              "max": 0.007177033492822966,
              "p5": 0.0,
              "p95": 3.842310660874722e-05,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 493.3536804308797,
              "median": 8.0,
              "min": 0.0,
              "max": 12747.0,
              "p5": 0.0,
              "p95": 2879.799999999997,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.324671602119333,
              "median": 0.13438415983471924,
              "min": 0.1198930935193096,
              "max": 1.6284043356218723,
              "p5": 0.12000765905968348,
              "p95": 1.123930060033497,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11066490.917927314,
              "median": 654807.5,
              "min": 0.0,
              "max": 74036464.0,
              "p5": 4140.5,
              "p95": 52445330.099999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038233785254606245,
              "median": 0.008330963496588928,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004311671426481276,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025620324365252405,
              "median": 0.0009510534881897813,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 7.104573975260255e-05,
              "p95": 0.00821015696952902,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0913739566799589e-06,
              "median": 3.468958381653834e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 0.0,
              "p95": 5.663085981075278e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1230.125,
              "median": 378.0,
              "min": 0.0,
              "max": 6138.0,
              "p5": 3.8500000000000005,
              "p95": 4726.449999999998,
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
              "mean": 0.1452416800769652,
              "median": 0.1452416800769652,
              "min": 0.1452416800769652,
              "max": 0.1452416800769652,
              "p5": 0.1452416800769652,
              "p95": 0.1452416800769652,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007492249568866699,
              "median": 0.007492249568866699,
              "min": 0.007492249568866699,
              "max": 0.007492249568866699,
              "p5": 0.007492249568866699,
              "p95": 0.007492249568866699,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0081615120274914,
              "median": 1.0081615120274914,
              "min": 1.0081615120274914,
              "max": 1.0081615120274914,
              "p5": 1.0081615120274914,
              "p95": 1.0081615120274914,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.677764509283029e-09,
              "median": 8.677764509283029e-09,
              "min": 8.677764509283029e-09,
              "max": 8.677764509283029e-09,
              "p5": 8.677764509283029e-09,
              "p95": 8.677764509283029e-09,
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
            "stock": 0.03100775193798433,
            "market": -0.01484170599624135,
            "sector": 0.013670743501302818,
            "peers": 0.007462686567164312,
            "vs_market": 0.04584945793422568,
            "vs_sector": 0.01733700843668151,
            "vs_peers": 0.023545065370820017
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.84201077199282,
          "score_pca_percentile": 83.84201077199282,
          "rank_pca": 91,
          "total": 557,
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007614324265188542,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.18037682698796623
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5535253651253933,
          "loadings": {
            "log_adv": 0.5225777292733518,
            "log_trades": 0.471173834202942,
            "log_turnover": 0.47610600162495226,
            "neg_spread": 0.42503263871266594,
            "neg_amihud": 0.18779885333574603,
            "neg_vol": 0.24961902323628016
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
          "peer_median_adv": 1261923.0,
          "peer_median_score_pca": 86.53500897666068,
          "peer_median_trades": 884.0,
          "peer_median_volatility": 0.20579265200857286,
          "peer_median_spread_pct": 0.007534888173234059,
          "peer_median_spread_ticks": 1.0052830188679245,
          "peer_median_amihud": 6.59491400232141e-09,
          "peer_median_turnover_ratio": 0.001546985376123191,
          "target_vs_peer": {
            "score_pca_delta": -2.69,
            "adv_delta_pct": -47.3,
            "trades_delta_pct": -54.07,
            "volatility_delta_pct": 12.35,
            "spread_pct_delta_pct": -1.05,
            "spread_ticks_delta_pct": -0.53,
            "amihud_delta_pct": 7.57,
            "turnover_ratio_delta_pct": 40.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.84201077199282,
            "rank_pca": 91,
            "adv": 665645.0,
            "trades": 406.0,
            "volatility": 0.18037682698796623,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.53500897666068,
            "rank_pca": 76,
            "adv": 1261923.0,
            "trades": 884.0,
            "volatility": 0.20579265200857286,
            "spread_pct": 0.007534888173234059,
            "spread_ticks": 1.0052830188679245,
            "amihud": 6.59491400232141e-09,
            "turnover_ratio": 0.001546985376123191,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6857772975939581,
              "median": 0.47113695542018347,
              "min": 0.0,
              "max": 7.013811259728676,
              "p5": 0.15928649572804995,
              "p95": 2.2156654613240514,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3337185.7428127225,
              "median": 13673.0,
              "min": 0.0,
              "max": 290156410.0,
              "p5": 0.0,
              "p95": 13469855.999999957,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1000191771579588,
              "median": 0.031003217315004293,
              "min": 0.0002705286818559187,
              "max": 1.3542204201990415,
              "p5": 0.0035508696516023982,
              "p95": 0.449926928849013,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006008716965530666,
              "median": 0.0002710710295060269,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.011797294577046237,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.947731127760664e-05,
              "median": 1.4041732770947104e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 4.499116061909415e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 476.9631956912029,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2819.9999999999973,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3425709804549764,
              "median": 0.2010109391564855,
              "min": 0.1311559340645297,
              "max": 1.3443253023788733,
              "p5": 0.14838324658773247,
              "p95": 0.9711438122751302,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11082193.504109347,
              "median": 737595.0,
              "min": 0.0,
              "max": 74036464.0,
              "p5": 4812.360000000001,
              "p95": 52243732.199999966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03773073514754768,
              "median": 0.008332049010422329,
              "min": 0.00428922705674426,
              "max": 0.15384615384615383,
              "p5": 0.004368355364960206,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00263932949479009,
              "median": 0.0013129924558718034,
              "min": 0.0,
              "max": 0.008563350953380885,
              "p5": 8.612144392734027e-05,
              "p95": 0.007983431034306248,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0949126000016874e-06,
              "median": 6.180596110194884e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 3.3185605965670984e-11,
              "p95": 5.671215644911147e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1236.875,
              "median": 464.5,
              "min": 0.0,
              "max": 6075.0,
              "p5": 6.300000000000001,
              "p95": 4634.749999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1261923.0,
              "median": 1261923.0,
              "min": 1261923.0,
              "max": 1261923.0,
              "p5": 1261923.0,
              "p95": 1261923.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 884.0,
              "median": 884.0,
              "min": 884.0,
              "max": 884.0,
              "p5": 884.0,
              "p95": 884.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20579265200857286,
              "median": 0.20579265200857286,
              "min": 0.20579265200857286,
              "max": 0.20579265200857286,
              "p5": 0.20579265200857286,
              "p95": 0.20579265200857286,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007534888173234059,
              "median": 0.007534888173234059,
              "min": 0.007534888173234059,
              "max": 0.007534888173234059,
              "p5": 0.007534888173234059,
              "p95": 0.007534888173234059,
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
              "mean": 6.59491400232141e-09,
              "median": 6.59491400232141e-09,
              "min": 6.59491400232141e-09,
              "max": 6.59491400232141e-09,
              "p5": 6.59491400232141e-09,
              "p95": 6.59491400232141e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001546985376123191,
              "median": 0.001546985376123191,
              "min": 0.001546985376123191,
              "max": 0.001546985376123191,
              "p5": 0.001546985376123191,
              "p95": 0.001546985376123191,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.029197080291970767,
            "market": -0.008780605710653755,
            "sector": -0.01080190201866893,
            "peers": -0.1401273885350317,
            "vs_market": -0.020416474581317012,
            "vs_sector": -0.018395178273301838,
            "vs_peers": 0.11093030824306094
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.09874326750449,
          "score_pca_percentile": 85.09874326750449,
          "rank_pca": 84,
          "total": 557,
          "adv_notional_sgd": 568043.5,
          "adv_volume_shares": 847800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001854895449675633,
          "votes": 348.5,
          "trades": 348.5,
          "spread_pct": 0.007442719964624948,
          "spread_ticks": 1.0,
          "amihud": 5.4491452128808115e-09,
          "volatility": 0.14380112167559286
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5778143626307778,
          "loadings": {
            "log_adv": 0.501353881714883,
            "log_trades": 0.4468365617102804,
            "log_turnover": 0.4562676172104166,
            "neg_spread": 0.4330324606769158,
            "neg_amihud": 0.27025038443526367,
            "neg_vol": 0.2832822825489963
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
          "peer_median_adv": 1101064.0,
          "peer_median_score_pca": 87.07360861759426,
          "peer_median_trades": 737.0,
          "peer_median_volatility": 0.16678951699346717,
          "peer_median_spread_pct": 0.006867943693340792,
          "peer_median_spread_ticks": 1.0051069926686762,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0011872829287083182,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -48.4,
            "trades_delta_pct": -52.71,
            "volatility_delta_pct": 13.78,
            "spread_pct_delta_pct": -8.37,
            "spread_ticks_delta_pct": -0.51,
            "amihud_delta_pct": 0.17,
            "turnover_ratio_delta_pct": 56.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.09874326750449,
            "rank_pca": 84,
            "adv": 568043.5,
            "trades": 348.5,
            "volatility": 0.14380112167559286,
            "spread_pct": 0.007442719964624948,
            "spread_ticks": 1.0,
            "amihud": 5.4491452128808115e-09,
            "turnover_ratio": 0.001854895449675633,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.07360861759426,
            "rank_pca": 73,
            "adv": 1101064.0,
            "trades": 737.0,
            "volatility": 0.16678951699346717,
            "spread_pct": 0.006867943693340792,
            "spread_ticks": 1.0051069926686762,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0011872829287083182,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6835182603963973,
              "median": 0.4586122849019555,
              "min": 0.0,
              "max": 6.912950809089336,
              "p5": 0.15328491892084029,
              "p95": 1.9617977008587906,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2684015.44152022,
              "median": 11648.5,
              "min": 0.0,
              "max": 254635655.60000002,
              "p5": 0.0,
              "p95": 10996356.999999987,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09489862431730853,
              "median": 0.02830157824300735,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.003608168260894343,
              "p95": 0.4720555542425882,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003342965757690571,
              "median": 0.00026921359702549645,
              "min": 0.0,
              "max": 0.8750247182123789,
              "p5": 0.0,
              "p95": 0.007265712450929565,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.938323828139117e-06,
              "median": 1.7148068049801797e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.6934185471084037e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 391.08438061041295,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2180.699999999999,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3524113053935828,
              "median": 0.16731188083347948,
              "min": 0.11513027824533567,
              "max": 1.3413794585986687,
              "p5": 0.1251650734459257,
              "p95": 1.0676559122859681,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8746644.175630538,
              "median": 641375.5,
              "min": 0.0,
              "max": 56980400.5,
              "p5": 12730.042500000001,
              "p95": 40705203.62499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03552248876550981,
              "median": 0.008089943462252246,
              "min": 0.0042712193330027145,
              "max": 0.13333333333333333,
              "p5": 0.004341220892293637,
              "p95": 0.12485378567011218,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023078581964307747,
              "median": 0.0011641626926714003,
              "min": 0.0,
              "max": 0.006798887688199187,
              "p5": 8.300540271012086e-05,
              "p95": 0.006631690722458039,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.891742165662187e-07,
              "median": 5.453776247806839e-09,
              "min": 0.0,
              "max": 7.862776406832145e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 5.122247171104481e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1119.5,
              "median": 386.5,
              "min": 0.0,
              "max": 5573.5,
              "p5": 7.700000000000001,
              "p95": 4257.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1101064.0,
              "median": 1101064.0,
              "min": 1101064.0,
              "max": 1101064.0,
              "p5": 1101064.0,
              "p95": 1101064.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 737.0,
              "median": 737.0,
              "min": 737.0,
              "max": 737.0,
              "p5": 737.0,
              "p95": 737.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16678951699346717,
              "median": 0.16678951699346717,
              "min": 0.16678951699346717,
              "max": 0.16678951699346717,
              "p5": 0.16678951699346717,
              "p95": 0.16678951699346717,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006867943693340792,
              "median": 0.006867943693340792,
              "min": 0.006867943693340792,
              "max": 0.006867943693340792,
              "p5": 0.006867943693340792,
              "p95": 0.006867943693340792,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0051069926686762,
              "median": 1.0051069926686762,
              "min": 1.0051069926686762,
              "max": 1.0051069926686762,
              "p5": 1.0051069926686762,
              "p95": 1.0051069926686762,
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
            "stock": -0.0291970802919711,
            "market": 0.11427802997525371,
            "sector": -0.006606647763061413,
            "peers": -0.14556962025316544,
            "vs_market": -0.14347511026722481,
            "vs_sector": -0.022590432528909687,
            "vs_peers": 0.11637253996119434
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term liquidity is softer, with average volume down 30.4% from the 1M average and bid depth lighter than ask depth. That matters because day-to-day access can feel thinner even with a 1 tick spread.",
        "market_comparison": "The stock is being driven mainly by company-specific factors at 97.8%, so trading conditions are more likely to reflect stock news than broader market moves."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with a 1M score of 81.0 and recent access looking less full than that headline suggests. That matters because the monthly picture is serviceable, but current flow is not as supportive.",
        "market_comparison": "The 1M return is +3.1%, ahead of peers at +0.7% and the market at -1.5%. That firmer price backdrop can help keep attention on the stock even if liquidity is only middle of the pack."
      },
      "3m": {
        "liquidity": "Over three months, liquidity looks broadly average rather than standout, with peer-relative access sitting a little below the group. That matters because execution may be manageable, but not as easy as stronger-trading peers.",
        "market_comparison": "Share price performance has been stronger than peers over the recent period, which supports interest in the name even though trading depth is not leading the group."
      },
      "6m": {
        "liquidity": "Over six months, liquidity is average for the company’s size, with a score of 85.1 compared with a peer median of 87.1. That matters because access is credible, but peer-relative tradability is not a clear strength.",
        "market_comparison": "Primary average daily volume is S$568.0K compared with a peer median of S$1.1M. That lower trading base means larger orders are likely to face less natural liquidity than the peer group."
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
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.013467030567612117,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.3%",
          "display_range": null,
          "display_text": "1.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 1.3,
          "plain_english": "Market explains about 1.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.008953047360424633,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.9%",
          "display_range": null,
          "display_text": "0.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 0.9,
          "plain_english": "Sector explains about 0.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.9775799220719633,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "97.8%",
          "display_range": null,
          "display_text": "97.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 97.8,
          "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.0019482418851322293,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
          "value_num": 0.0
        },
        "beta_stock_lag": {
          "median": -0.9962137372485796,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.00",
          "display_range": null,
          "display_text": "-1.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.0
        },
        "beta_sector": {
          "median": 0.016112142874131548,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.02",
          "display_range": null,
          "display_text": "0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.02% stock move in the same direction in this state.",
          "value_num": 0.02
        },
        "beta_market_lag": {
          "median": -0.027193279139039135,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.03",
          "display_range": null,
          "display_text": "-0.03",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.03
        },
        "beta_sector_lag": {
          "median": -0.052621752072397644,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.05",
          "display_range": null,
          "display_text": "-0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.05
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
          "period_label": "2025-05-14 to 2025-05-30",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5183340849554905,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.8%",
            "display_range": null,
            "display_text": "51.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 51.8,
            "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34441871341208186,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13724720163242765,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.7%",
              "display_range": null,
              "display_text": "13.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 13.7,
              "plain_english": "Sector explains about 13.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5183340849554905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.8%",
              "display_range": null,
              "display_text": "51.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 51.8,
              "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
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
              "median": 0.19863657260917883,
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
              "median": 0.1779587030650471,
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
            "median": 0.6156446349712699,
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
              "median": 0.15572514972889706,
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
              "median": 0.22863021529983313,
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
              "median": 0.6156446349712699,
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
            "median": 0.4539874874240682,
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
              "median": 0.3380759283078133,
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
              "median": 0.20793658426811856,
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
              "median": 0.4539874874240682,
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
            "median": 0.47594380520699603,
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
              "median": 0.3064722257863164,
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
              "median": 0.21758396900668758,
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
              "median": 0.47594380520699603,
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
            "median": 0.4828150565478932,
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
              "median": 0.3142352514374536,
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
              "median": 0.2029496920146531,
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
              "median": 0.4828150565478932,
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
            "median": 0.4219146512462774,
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
              "median": 0.4219146512462774,
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
              "median": 0.2775902288822491,
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
              "median": 0.3004951198714734,
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
            "median": 0.7687417314818247,
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
              "median": 0.12378967681730305,
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
              "median": 0.1074685917008723,
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
              "median": 0.7687417314818247,
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
            "median": 0.634478433420432,
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
              "median": 0.20419511848433777,
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
              "median": 0.16132644809523028,
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
              "median": 0.634478433420432,
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
            "median": 0.8241639016384482,
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
              "median": 0.04613414376179617,
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
              "median": 0.8241639016384482,
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
            "median": 0.4594963935612947,
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
              "median": 0.23035600504921894,
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
              "median": 0.31014760138948644,
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
              "median": 0.4594963935612947,
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
            "median": 0.47906534683171254,
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
              "median": 0.2381469594055639,
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
              "median": 0.47906534683171254,
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
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.9775799220719633,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "97.8%",
            "display_range": null,
            "display_text": "97.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 97.8,
            "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.013467030567612117,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "1.3%",
              "display_range": null,
              "display_text": "1.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 1.3,
              "plain_english": "Market explains about 1.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.008953047360424633,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.9%",
              "display_range": null,
              "display_text": "0.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 0.9,
              "plain_english": "Sector explains about 0.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.9775799220719633,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "97.8%",
              "display_range": null,
              "display_text": "97.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 97.8,
              "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 10.416666666666666,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005575694209101486,
            "low": 0.005575694209101486,
            "high": 0.005575694209101486
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010900685259511707,
            "low": 0.010900685259511707,
            "high": 0.010900685259511707
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            11.0
          ],
          [
            12.0,
            112.0
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
        "market_link_display": "0.00",
        "sector_link_display": "0.02",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.02% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.00",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 97.8,
        "driver_share_display": "97.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9112903225806451,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.4 days.",
        "expected_duration_days": 10.4
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
          "expected_duration_days": 10.416666666666666,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005575694209101486,
            "low": 0.005575694209101486,
            "high": 0.005575694209101486
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010900685259511707,
            "low": 0.010900685259511707,
            "high": 0.010900685259511707
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9112903225806451,
          0.08870967741935484
        ],
        [
          0.0967741935483871,
          0.9032258064516129
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            11.0
          ],
          [
            12.0,
            112.0
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
        "text": "Liquidity score: 85.1 — Strong",
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
    "liq_subtitle": "Peer-relative liquidity is slightly below the group, and today’s buy-side depth looks lighter than the broader profile.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are stronger than peers and the market, with the stock up 3.1% over one month.",
    "perf_insight": "The return backdrop is firm, with the stock up 3.1% over one month compared with peers at 0.7% and the market at -1.5%. Trading conditions are less supportive, as the six-month liquidity score is 2.0 points below the peer median and one-day average volume is 30.4% below the one-month average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, with stock-level drivers accounting for 97.8% of the current move.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 97.8% of price changes. Other influences are market 1.3%, and sector 0.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 1.3%, sector 0.9%, and company-specific 97.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 1.3%, sector 0.9%, and company-specific 97.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company news is setting the tone, with company-specific factors driving 97.8% of the move. That matters more because displayed bid depth is only 0.56x ask depth, even with a 1 tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price action is overwhelmingly company-driven, with company-specific factors at 97.8%.",
      "Monthly change: the pattern has stayed company-driven from March through May, rather than shifting back toward a broader market-led move."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look mixed, with a firm price backdrop but thinner immediate buy-side depth.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 8, 2025 to May 8, 2026 (254 trading days • 100,973 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side support looks lighter than the broader liquidity picture, with displayed bid depth at 0.56x ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Near-term flow is lighter than the monthly average, even as the spread remains tight.",
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
    "intraday_insight": "Recent activity has pulled back, with one-day average volume 30.4% below the one-month average. With the spread still at 1 tick, the more relevant constraint is thinner displayed bid depth at 0.56x ask depth.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main near-term watchpoint is thinner buy-side depth rather than spread.",
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
    "exec_subtitle": "Liquidity is mixed for its size, and near-term buying interest looks thinner.",
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
        "value": "85.1/100",
        "sub": "Peer median 87.1 (-2.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$568.0K",
        "sub": "Peer median S$1.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.69%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). 1D average volume down -30.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.667",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.56x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.37% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.96% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.78% with 93.1% fill.",
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
        "subtext": "Rank 84/557",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.69%",
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
        "value": "568.0K",
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
        "value": "97.8",
        "suffix": "company-specific",
        "bar_pct": 98,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 1.3% • Sector 0.9%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for its size, with a six-month score of 85.1 compared with a peer median of 87.1. That leaves peer-relative access slightly below the group rather than a clear strength or weakness.",
      "Recent flow is lighter, with one-day average volume 30.4% below the one-month average. That points to thinner activity in the near term even if the broader liquidity profile remains broadly intact.",
      "The stock is trading on its own story, with company-specific factors driving 97.8% of the move and one-month returns at 3.1% compared with 0.7% for peers and -1.5% for the market. With displayed bid depth at 0.56x ask depth and a 1 tick spread, immediate buy-side support looks less robust than the price performance implies."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). 1D average volume down -30.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 87.1 (-2.0 pts)."
      ],
      "concerns": [
        "1D average volume down -30.4% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.9%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.9% vs market 11.4%.",
        "vs_sector": "Worse than sector: -2.9% vs sector -0.7%.",
        "vs_peers": "Better than peers: -2.9% vs peers -14.6%."
      },
      "adv": {
        "insight": "ADV is S$568.0K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$568.0K vs market S$11.6K.",
        "vs_sector": "Worse than sector: S$568.0K vs sector S$641.4K.",
        "vs_peers": "Worse than peers: S$568.0K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.83%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.74% vs peers 0.69%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.38%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.38% vs market 45.86%.",
        "vs_sector": "Better than sector: 14.38% vs sector 16.73%.",
        "vs_peers": "Better than peers: 14.38% vs peers 16.68%."
      },
      "trades": {
        "insight": "Trades is 348, better than market, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 348 vs market 7.",
        "vs_sector": "In line with sector: 348 vs sector 386.",
        "vs_peers": "Worse than peers: 348 vs peers 737."
      },
      "amihud": {
        "insight": "Price impact is 5.45e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.45e-09 vs market 1.71e-07.",
        "vs_sector": "In line with sector: 5.45e-09 vs sector 5.45e-09.",
        "vs_peers": "In line with peers: 5.45e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 3.1% over one month compared with peers at 0.7% and the market at -1.5%. Liquidity gives only mixed confirmation to that move because the six-month liquidity score is 85.1 against a peer median of 87.1 and one-day average volume is 30.4% below the one-month average, which means the stronger tape is not being matched by broader trading support.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors right now, with 97.8% of the current move tied to stock-level drivers. That matters because near-term price action is more likely to follow company developments than broader market or sector moves.",
      "beta": "That company-led pattern sits alongside a mixed trading backdrop: the stock is up 3.1% over one month, ahead of peers at 0.7% and the market at -1.5%, but average volume today is 30.4% below the 1M average. This means the return backdrop is firmer, while day-to-day trading can still feel thinner.",
      "rolling_change": "The driver mix looks stable rather than temporary, with March and April mostly company-driven and May still clearly company-driven. That matters because the current pattern is a continuation of the recent monthly picture, not a one-off shift."
    },
    "regime": {
      "overall": "The backdrop is relatively steady because the stock is in a Low Volatility state that typically lasts about 10.4 days, which matters because calmer price conditions usually make trading feel more predictable even when liquidity is mixed.",
      "current": "Low Volatility is in place now, while the stock has still outperformed over one month with a 3.1% return compared with 0.7% for peers and -1.5% for the market.",
      "transitions": "This state looks fairly stable because Low Volatility has a typical run length of about 10.4 days, although the recent average volume is 30.4% below the one-month average so conditions can still change day to day.",
      "trading_implications": "Trading conditions may feel steadier than in a higher-volatility phase, but the drop in recent average volume and lighter displayed bid depth mean that calm price action may still come with thinner buy-side support."
    },
    "execution": {
      "overall": "The current book looks bid-light rather than broadly balanced because bid depth is only 0.56x ask depth even with a 1 tick spread. That matters because the headline liquidity profile can still feel less supportive in the market if buy-side depth is thinner at the touch.",
      "concern": "Trade-size percentiles use May 8, 2025 to May 8, 2026 history (254 trading days • 100,973 trades).",
      "peer_context": "This book does not contradict the broader view so much as sharpen it: the 6M liquidity score of 85.1 sits 2.0 points below the peer median of 87.1, and the current bid-light depth shows why access can look less robust in the moment than the longer-term score alone"
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base appears balanced rather than clearly dominated by one group.",
      "retail_heavy": "Retail-like trades account for 37.1% of individual trade count but only 3.0% of trade value, while institution-like trades are 21.7% of count and 53.0% of value. That split shows broad participation by count, but most value is still coming from larger tickets.",
      "institutional_gap": "Institution-like activity carries a much larger share of value than count, which suggests depth is supported by fewer but larger trades.",
      "peer_comparison": "The mix looks mixed rather than unusual, with broad participation by count and a majority of value coming from institution-like trades."
    },
    "price_moving": {
      "overall": "Price action is being driven mainly by company-specific factors, with the current driver reading at 97.8%. That makes stock-specific flow more relevant than broader market moves in explaining trading conditions. The signal looks clean because the stock has returned 3.1% over one month, compared with 0.7% for peers and -1.5% for the market. Stronger relative performance supports the view that trading is responding to company-specific demand.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and does not appear material to the current trading picture. With shorts covering sharply and the stock up 3.1% over one month compared with peers at 0.7% and the market at -1.5%, short pressure is not the main force shaping trading conditions.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short activity is falling quickly, with shorts covering down 76% month on month and 62% year on year. That points to less short-driven flow in the market, so the broader liquidity picture is being shaped more by other factors than by short selling.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, where 86.8% of trading takes place, while the open and close account for 3.7% and 8.3% respectively. That points to usable access through most of the day rather than a market that depends on auction windows.",
      "hhi_interpretation": "A concentration score of 0.230 indicates activity is reasonably spread across the session, which supports a steadier flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it captures the large majority of trading activity. That matters more than the open or close for day-to-day access.",
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
        "CRPU",
        "AU8U"
      ],
      "scores": [
        85.09874326750449,
        87.07360861759426
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        568043.5,
        1101064.0
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.14380112167559286,
        "adv": 568043.5,
        "spread_pct": 0.007442719964624948,
        "turnover_ratio": 0.001854895449675633,
        "amihud": 5.4491452128808115e-09,
        "trades": 348.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6835182603963973,
          "median": 0.4586122849019555,
          "min": 0.0,
          "max": 6.912950809089336,
          "p5": 0.15328491892084029,
          "p95": 1.9617977008587906,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2684015.44152022,
          "median": 11648.5,
          "min": 0.0,
          "max": 254635655.60000002,
          "p5": 0.0,
          "p95": 10996356.999999987,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09489862431730853,
          "median": 0.02830157824300735,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.003608168260894343,
          "p95": 0.4720555542425882,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003342965757690571,
          "median": 0.00026921359702549645,
          "min": 0.0,
          "max": 0.8750247182123789,
          "p5": 0.0,
          "p95": 0.007265712450929565,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.938323828139117e-06,
          "median": 1.7148068049801797e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.6934185471084037e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 391.08438061041295,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2180.699999999999,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3524113053935828,
          "median": 0.16731188083347948,
          "min": 0.11513027824533567,
          "max": 1.3413794585986687,
          "p5": 0.1251650734459257,
          "p95": 1.0676559122859681,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8746644.175630538,
          "median": 641375.5,
          "min": 0.0,
          "max": 56980400.5,
          "p5": 12730.042500000001,
          "p95": 40705203.62499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03552248876550981,
          "median": 0.008089943462252246,
          "min": 0.0042712193330027145,
          "max": 0.13333333333333333,
          "p5": 0.004341220892293637,
          "p95": 0.12485378567011218,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023078581964307747,
          "median": 0.0011641626926714003,
          "min": 0.0,
          "max": 0.006798887688199187,
          "p5": 8.300540271012086e-05,
          "p95": 0.006631690722458039,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.891742165662187e-07,
          "median": 5.453776247806839e-09,
          "min": 0.0,
          "max": 7.862776406832145e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 5.122247171104481e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1119.5,
          "median": 386.5,
          "min": 0.0,
          "max": 5573.5,
          "p5": 7.700000000000001,
          "p95": 4257.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1101064.0,
          "median": 1101064.0,
          "min": 1101064.0,
          "max": 1101064.0,
          "p5": 1101064.0,
          "p95": 1101064.0,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 737.0,
          "median": 737.0,
          "min": 737.0,
          "max": 737.0,
          "p5": 737.0,
          "p95": 737.0,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.16678951699346717,
          "median": 0.16678951699346717,
          "min": 0.16678951699346717,
          "max": 0.16678951699346717,
          "p5": 0.16678951699346717,
          "p95": 0.16678951699346717,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006867943693340792,
          "median": 0.006867943693340792,
          "min": 0.006867943693340792,
          "max": 0.006867943693340792,
          "p5": 0.006867943693340792,
          "p95": 0.006867943693340792,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0051069926686762,
          "median": 1.0051069926686762,
          "min": 1.0051069926686762,
          "max": 1.0051069926686762,
          "p5": 1.0051069926686762,
          "p95": 1.0051069926686762,
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
        "stock": 0.03100775193798433,
        "market": -0.01484170599624135,
        "sector": 0.013670743501302818,
        "peers": 0.007462686567164312
      },
      {
        "horizon": "3M",
        "stock": -0.029197080291970767,
        "market": -0.008780605710653755,
        "sector": -0.01080190201866893,
        "peers": -0.1401273885350317
      },
      {
        "horizon": "6M",
        "stock": -0.0291970802919711,
        "market": 0.11427802997525371,
        "sector": -0.006606647763061413,
        "peers": -0.14556962025316544
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
      "share_market": 0.013467030567612117,
      "share_sector": 0.008953047360424633,
      "share_idio": 0.9775799220719633,
      "beta_market": 0.0019482418851322293,
      "beta_sector": 0.016112142874131548,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.013467030567612117,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.3%",
            "display_range": null,
            "display_text": "1.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 1.3,
            "plain_english": "Market explains about 1.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.008953047360424633,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.9%",
            "display_range": null,
            "display_text": "0.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 0.9,
            "plain_english": "Sector explains about 0.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.9775799220719633,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "97.8%",
            "display_range": null,
            "display_text": "97.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 97.8,
            "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.0019482418851322293,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
            "value_num": 0.0
          },
          "beta_stock_lag": {
            "median": -0.9962137372485796,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.00",
            "display_range": null,
            "display_text": "-1.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.0
          },
          "beta_sector": {
            "median": 0.016112142874131548,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.02",
            "display_range": null,
            "display_text": "0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.02% stock move in the same direction in this state.",
            "value_num": 0.02
          },
          "beta_market_lag": {
            "median": -0.027193279139039135,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.03",
            "display_range": null,
            "display_text": "-0.03",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.03
          },
          "beta_sector_lag": {
            "median": -0.052621752072397644,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.05",
            "display_range": null,
            "display_text": "-0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.05
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
            "period_label": "2025-05-14 to 2025-05-30",
            "n_obs": 13,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5183340849554905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.8%",
              "display_range": null,
              "display_text": "51.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 51.8,
              "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34441871341208186,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13724720163242765,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.7%",
                "display_range": null,
                "display_text": "13.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 13.7,
                "plain_english": "Sector explains about 13.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5183340849554905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.8%",
                "display_range": null,
                "display_text": "51.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 51.8,
                "plain_english": "Company-specific explains about 51.8% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
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
                "median": 0.19863657260917883,
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
                "median": 0.1779587030650471,
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
              "median": 0.6156446349712699,
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
                "median": 0.15572514972889706,
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
                "median": 0.22863021529983313,
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
                "median": 0.6156446349712699,
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
              "median": 0.4539874874240682,
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
                "median": 0.3380759283078133,
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
                "median": 0.20793658426811856,
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
                "median": 0.4539874874240682,
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
              "median": 0.47594380520699603,
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
                "median": 0.3064722257863164,
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
                "median": 0.21758396900668758,
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
                "median": 0.47594380520699603,
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
              "median": 0.4828150565478932,
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
                "median": 0.3142352514374536,
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
                "median": 0.2029496920146531,
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
                "median": 0.4828150565478932,
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
              "median": 0.4219146512462774,
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
                "median": 0.4219146512462774,
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
                "median": 0.2775902288822491,
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
                "median": 0.3004951198714734,
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
              "median": 0.7687417314818247,
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
                "median": 0.12378967681730305,
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
                "median": 0.1074685917008723,
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
                "median": 0.7687417314818247,
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
              "median": 0.634478433420432,
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
                "median": 0.20419511848433777,
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
                "median": 0.16132644809523028,
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
                "median": 0.634478433420432,
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
              "median": 0.8241639016384482,
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
                "median": 0.04613414376179617,
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
                "median": 0.8241639016384482,
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
              "median": 0.4594963935612947,
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
                "median": 0.23035600504921894,
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
                "median": 0.31014760138948644,
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
                "median": 0.4594963935612947,
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
              "median": 0.47906534683171254,
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
                "median": 0.2381469594055639,
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
                "median": 0.47906534683171254,
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
            "period_label": "2026-05-04 to 2026-05-08",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.9775799220719633,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "97.8%",
              "display_range": null,
              "display_text": "97.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 97.8,
              "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.013467030567612117,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "1.3%",
                "display_range": null,
                "display_text": "1.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 1.3,
                "plain_english": "Market explains about 1.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.008953047360424633,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.9%",
                "display_range": null,
                "display_text": "0.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 0.9,
                "plain_english": "Sector explains about 0.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.9775799220719633,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "97.8%",
                "display_range": null,
                "display_text": "97.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 97.8,
                "plain_english": "Company-specific explains about 97.8% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 10.416666666666666,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005575694209101486,
              "low": 0.005575694209101486,
              "high": 0.005575694209101486
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010900685259511707,
              "low": 0.010900685259511707,
              "high": 0.010900685259511707
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9112903225806451,
              0.08870967741935484
            ],
            [
              0.0967741935483871,
              0.9032258064516129
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              113.0,
              11.0
            ],
            [
              12.0,
              112.0
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
          "market_link_display": "0.00",
          "sector_link_display": "0.02",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.02% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.00",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 97.8,
          "driver_share_display": "97.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9112903225806451,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.4 days.",
          "expected_duration_days": 10.4
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
          "period_label": "2025-05-14 to 2025-05-30",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.34441871341208186,
          "share_sector": 0.13724720163242765,
          "share_company": 0.5183340849554905,
          "share_market_display": "34.4%",
          "share_sector_display": "13.7%",
          "share_company_display": "51.8%",
          "dominant_share_display": "51.8%"
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
          "share_market": 0.19863657260917883,
          "share_sector": 0.1779587030650471,
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
          "share_market": 0.15572514972889706,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712699,
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811856,
          "share_company": 0.4539874874240682,
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.21758396900668758,
          "share_company": 0.47594380520699603,
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
          "share_market": 0.3142352514374536,
          "share_sector": 0.2029496920146531,
          "share_company": 0.4828150565478932,
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
          "share_market": 0.4219146512462774,
          "share_sector": 0.2775902288822491,
          "share_company": 0.3004951198714734,
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
          "share_market": 0.12378967681730305,
          "share_sector": 0.1074685917008723,
          "share_company": 0.7687417314818247,
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
          "share_market": 0.20419511848433777,
          "share_sector": 0.16132644809523028,
          "share_company": 0.634478433420432,
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
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
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
          "share_market": 0.23035600504921894,
          "share_sector": 0.31014760138948644,
          "share_company": 0.4594963935612947,
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
          "share_market": 0.2381469594055639,
          "share_sector": 0.28278769376272356,
          "share_company": 0.47906534683171254,
          "share_market_display": "23.8%",
          "share_sector_display": "28.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven, though based on only 5 trading days.",
          "share_market": 0.013467030567612117,
          "share_sector": 0.008953047360424633,
          "share_company": 0.9775799220719633,
          "share_market_display": "1.3%",
          "share_sector_display": "0.9%",
          "share_company_display": "97.8%",
          "dominant_share_display": "97.8%"
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
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 10.416666666666666,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005575694209101486,
              "low": 0.005575694209101486,
              "high": 0.005575694209101486
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010900685259511707,
              "low": 0.010900685259511707,
              "high": 0.010900685259511707
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9112903225806451,
            0.08870967741935484
          ],
          [
            0.0967741935483871,
            0.9032258064516129
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 332100.0,
          "value": 220846.5
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1483700.0,
          "value": 979242.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 241700.0,
          "value": 158313.5
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 435500.0,
          "value": 283075.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 129400.0,
          "value": 83463.0
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 201200.0,
          "value": 128768.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 104400.0,
          "value": 66294.0
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 348400.0,
          "value": 219492.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 66400.0,
          "value": 41500.0
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 94200.0,
          "value": 58404.0
        },
        {
          "level": 11,
          "price": 0.615,
          "quantity": 8600.0,
          "value": 5289.0
        },
        {
          "level": 12,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
        },
        {
          "level": 13,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 14,
          "price": 0.6,
          "quantity": 12300.0,
          "value": 7380.0
        },
        {
          "level": 15,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 16,
          "price": 0.57,
          "quantity": 34000.0,
          "value": 19380.0
        },
        {
          "level": 17,
          "price": 0.565,
          "quantity": 10000.0,
          "value": 5649.999999999999
        },
        {
          "level": 18,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 19,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 20,
          "price": 0.52,
          "quantity": 5000.0,
          "value": 2600.0
        },
        {
          "level": 21,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 2309200.0,
          "value": 1547164.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 735400.0,
          "value": 496395.00000000006
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 401800.0,
          "value": 273224.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 425800.0,
          "value": 291673.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1182700.0,
          "value": 816062.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 221900.0,
          "value": 154220.5
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 136400.0,
          "value": 95480.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 46300.0,
          "value": 32873.0
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
          "quantity": 25200.0,
          "value": 18144.0
        },
        {
          "level": 12,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 13,
          "price": 0.75,
          "quantity": 10000.0,
          "value": 7500.0
        },
        {
          "level": 14,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 15,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 16,
          "price": 0.8,
          "quantity": 215000.0,
          "value": 172000.0
        },
        {
          "level": 17,
          "price": 0.82,
          "quantity": 13400.0,
          "value": 10988.0
        },
        {
          "level": 18,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 19,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-08 08:59:53.972800000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2327117.0,
        "ask_depth_notional_displayed": 4150929.5,
        "bid_depth_notional_top10": 2327117.0,
        "ask_depth_notional_top10": 4150929.5,
        "bid_ask_depth_ratio": 0.5606
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 100973,
        "first_trade_date": "2025-05-08",
        "last_trade_date": "2026-05-08",
        "window_label": "May 8, 2025 to May 8, 2026",
        "window_short_label": "May 8, 2025 to May 8, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "100,973 trades",
        "window_detail_label": "254 trading days • 100,973 trades",
        "history_note": "Trade-size percentiles use May 8, 2025 to May 8, 2026 history (254 trading days • 100,973 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.6
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7888.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.34,
            "pct_of_adv": 1.39
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339271.0,
            "impact_pct": -0.006373,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.58,
            "pct_of_adv": 59.81
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-08",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8145139807368471552",
            "timestamp": "2026-05-08 00:55:06.336600000",
            "local_timestamp": "2026-05-08 08:55:06",
            "posted_price": 0.67,
            "size_shares": 2025600.0,
            "notional": 1357152.0,
            "impact_pct": -0.0109,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 58.32,
            "price_vs_mid_pct": 0.375,
            "executed_event_count": 0,
            "event_count": 15
          },
          {
            "rank": 2,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-07 22:59:01.256500000",
            "local_timestamp": "2026-05-08 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.008851,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 29.65,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8145931455742038016",
            "timestamp": "2026-05-07 22:59:01.256500000",
            "local_timestamp": "2026-05-08 06:59:01",
            "posted_price": 0.675,
            "size_shares": 500000.0,
            "notional": 337500.0,
            "impact_pct": -0.006347,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.5,
            "price_vs_mid_pct": 1.124,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-08",
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
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2396138.5,
            "ask_depth_notional": 4277041.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2417067.5,
            "ask_depth_notional": 4274294.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2404033.5,
            "ask_depth_notional": 4260767.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2521801.5,
            "ask_depth_notional": 4266530.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2382021.5,
            "ask_depth_notional": 4276180.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2378496.5,
            "ask_depth_notional": 4273995.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2569129.5,
            "ask_depth_notional": 4270846.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2466882.5,
            "ask_depth_notional": 4261229.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2485718.5,
            "ask_depth_notional": 4231414.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2497954.5,
            "ask_depth_notional": 4228697.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2497622.0,
            "ask_depth_notional": 4212416.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2489703.0,
            "ask_depth_notional": 4342396.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2352488.5,
            "ask_depth_notional": 4179519.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2327117.0,
            "ask_depth_notional": 4150929.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2441975.0,
          "median_ask_depth_notional": 4263879.75,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 8.8,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 135.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 294,
          "n_runs": 202,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-08",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.3741496598639456,
            "mixed_pct": 0.3231292517006803,
            "instit_pct": 0.15306122448979592,
            "ambiguous_pct": 0.14965986394557823,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14965986394557823,
            "retail_qty_pct": 0.02227209944751381,
            "mixed_qty_pct": 0.21460635359116023,
            "instit_qty_pct": 0.4673687845303867,
            "ambiguous_qty_pct": 0.29575276243093923,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.29575276243093923,
            "retail_notional_pct": 0.022251168234887396,
            "mixed_notional_pct": 0.2146923745239985,
            "instit_notional_pct": 0.4662153850934653,
            "ambiguous_notional_pct": 0.2968410721476488,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2968410721476488
          },
          "run_composition": {
            "retail_pct": 0.5396039603960396,
            "mixed_pct": 0.29207920792079206,
            "instit_pct": 0.0297029702970297,
            "ambiguous_pct": 0.13861386138613863,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13861386138613863,
            "retail_notional_pct": 0.022251168234887396,
            "mixed_notional_pct": 0.2146923745239985,
            "instit_notional_pct": 0.4662153850934653,
            "unclear_notional_pct": 0.2968410721476488
          },
          "counts": {
            "trades": {
              "retail": 110,
              "mixed": 95,
              "institutional": 45,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            },
            "runs": {
              "retail": 109,
              "mixed": 59,
              "institutional": 6,
              "ambiguous": 28,
              "unobservable": 0,
              "unclear": 28
            }
          },
          "confidence": {
            "high": 0.5693069306930693,
            "medium": 0.29207920792079206,
            "low": 0.13861386138613863,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 115,
            "medium": 59,
            "low": 28,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5272108843537415,
            "medium": 0.3231292517006803,
            "low": 0.14965986394557823,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 155,
            "medium": 95,
            "low": 44,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8655940594059403,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13861386138613863,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5396039603960396,
          "dominance_gap": 0.24752475247524758,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 294
            },
            "d2_information": {
              "UNOBSERVABLE": 294
            },
            "d3_urgency": {
              "UNOBSERVABLE": 202
            },
            "participant_confidence": {
              "HIGH": 115,
              "MEDIUM": 59,
              "LOW": 28
            }
          },
          "trade_size": {
            "avg": 1313.4676870748299,
            "median": 66.5
          },
          "run_size": {
            "avg": 1911.680693069307,
            "median": 133.0,
            "avg_length": 1.1732673267326732
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-08T08:59:53.972800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-08T08:59:29.013100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-08T08:59:20.665200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-08T08:59:19.632200",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-08T08:59:11.433200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-08T08:59:10.948900",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-08T08:57:36.871600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-08T08:54:21.046100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-08T08:54:21.016000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-08T08:54:19.990300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-08T08:52:02.348600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-08T08:49:53.807600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-08T08:49:53.536400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-08T08:47:54.962700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-05-08T08:47:53.637200",
              "price": 0.67,
              "size": 4500.0,
              "notional": 3015.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-05-08T08:45:17.102300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-05-08T08:45:17.102200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-05-08T08:45:17.072000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-05-08T08:45:15.715400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-05-08T08:43:34.077000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-05-08T08:41:48.268800",
              "price": 0.67,
              "size": 1000.0,
              "notional": 670.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-05-08T08:38:20.717100",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-05-08T08:30:54.305700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-05-08T08:30:42.612000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
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
              "retail_pct": 0.3741496598639456,
              "mixed_pct": 0.3231292517006803,
              "instit_pct": 0.15306122448979592,
              "ambiguous_pct": 0.14965986394557823,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14965986394557823,
              "retail_qty_pct": 0.02227209944751381,
              "mixed_qty_pct": 0.21460635359116023,
              "instit_qty_pct": 0.4673687845303867,
              "ambiguous_qty_pct": 0.29575276243093923,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.29575276243093923,
              "retail_notional_pct": 0.022251168234887396,
              "mixed_notional_pct": 0.2146923745239985,
              "instit_notional_pct": 0.4662153850934653,
              "ambiguous_notional_pct": 0.2968410721476488,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2968410721476488,
              "run_retail_pct": 0.5396039603960396,
              "run_mixed_pct": 0.29207920792079206,
              "run_instit_pct": 0.0297029702970297,
              "run_unclear_pct": 0.13861386138613863,
              "avg_trade_size": 1313.4676870748299,
              "avg_run_notional": 1911.680693069307,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5693069306930693,
              "medium_confidence_pct": 0.29207920792079206,
              "low_confidence_pct": 0.13861386138613863,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8655940594059403,
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
              "retail_pct": 0.4548611111111111,
              "mixed_pct": 0.020833333333333332,
              "instit_pct": 0.5243055555555556,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.23789991796554552,
              "mixed_qty_pct": 0.004593929450369155,
              "instit_qty_pct": 0.7575061525840853,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.23787998326970047,
              "mixed_notional_pct": 0.004608148826501185,
              "instit_notional_pct": 0.7575118679037983,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.7891156462585034,
              "run_mixed_pct": 0.02040816326530612,
              "run_instit_pct": 0.19047619047619047,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1423.7309027777778,
              "avg_run_notional": 2789.3503401360545,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7142857142857143,
              "low_confidence_pct": 0.2857142857142857,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4836734693877552,
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
          "n_trades": 8186,
          "n_runs": 4359,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-09",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.3167603225018324,
            "mixed_pct": 0.283899340337161,
            "instit_pct": 0.2488394820425116,
            "ambiguous_pct": 0.15050085511849498,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15050085511849498,
            "retail_qty_pct": 0.02661688926280366,
            "mixed_qty_pct": 0.18707540225049954,
            "instit_qty_pct": 0.5384372699547797,
            "ambiguous_qty_pct": 0.24787043853191712,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24787043853191712,
            "retail_notional_pct": 0.02663085437528014,
            "mixed_notional_pct": 0.18692485197463465,
            "instit_notional_pct": 0.5382920125082835,
            "ambiguous_notional_pct": 0.24815228114180174,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24815228114180174
          },
          "run_composition": {
            "retail_pct": 0.5863730213351687,
            "mixed_pct": 0.25556320256939663,
            "instit_pct": 0.056434962147281484,
            "ambiguous_pct": 0.10162881394815325,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10162881394815325,
            "retail_notional_pct": 0.02663085437528014,
            "mixed_notional_pct": 0.18692485197463465,
            "instit_notional_pct": 0.5382920125082835,
            "unclear_notional_pct": 0.24815228114180174
          },
          "counts": {
            "trades": {
              "retail": 2593,
              "mixed": 2324,
              "institutional": 2037,
              "ambiguous": 1232,
              "unobservable": 0,
              "unclear": 1232
            },
            "runs": {
              "retail": 2556,
              "mixed": 1114,
              "institutional": 246,
              "ambiguous": 443,
              "unobservable": 0,
              "unclear": 443
            }
          },
          "confidence": {
            "high": 0.64280798348245,
            "medium": 0.25556320256939663,
            "low": 0.10162881394815325,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2802,
            "medium": 1114,
            "low": 443,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.565599804544344,
            "medium": 0.283899340337161,
            "low": 0.15050085511849498,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4630,
            "medium": 2324,
            "low": 1232,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8815668731360404,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10162881394815325,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5863730213351687,
          "dominance_gap": 0.33080981876577203,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7847,
              "WALK_BOOK": 335,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 8186
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4359
            },
            "participant_confidence": {
              "HIGH": 2802,
              "MEDIUM": 1114,
              "LOW": 443
            }
          },
          "trade_size": {
            "avg": 1536.8657463962863,
            "median": 132.0
          },
          "run_size": {
            "avg": 2886.1626519844,
            "median": 133.0,
            "avg_length": 1.5072264280798349
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-08T08:59:53.972800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-08T08:59:29.013100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-08T08:59:20.665200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-08T08:59:19.632200",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-08T08:59:11.433200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-08T08:59:10.948900",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-08T08:57:36.871600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-08T08:54:21.046100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-08T08:54:21.016000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-08T08:54:19.990300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-08T08:52:02.348600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-08T08:49:53.807600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-08T08:49:53.536400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-08T08:47:54.962700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-05-08T08:47:53.637200",
              "price": 0.67,
              "size": 4500.0,
              "notional": 3015.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-05-08T08:45:17.102300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-05-08T08:45:17.102200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-05-08T08:45:17.072000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-05-08T08:45:15.715400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-05-08T08:43:34.077000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-05-08T08:41:48.268800",
              "price": 0.67,
              "size": 1000.0,
              "notional": 670.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-05-08T08:38:20.717100",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-05-08T08:30:54.305700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-05-08T08:30:42.612000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
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
              "retail_pct": 0.3167603225018324,
              "mixed_pct": 0.283899340337161,
              "instit_pct": 0.2488394820425116,
              "ambiguous_pct": 0.15050085511849498,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15050085511849498,
              "retail_qty_pct": 0.02661688926280366,
              "mixed_qty_pct": 0.18707540225049954,
              "instit_qty_pct": 0.5384372699547797,
              "ambiguous_qty_pct": 0.24787043853191712,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24787043853191712,
              "retail_notional_pct": 0.02663085437528014,
              "mixed_notional_pct": 0.18692485197463465,
              "instit_notional_pct": 0.5382920125082835,
              "ambiguous_notional_pct": 0.24815228114180174,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24815228114180174,
              "run_retail_pct": 0.5863730213351687,
              "run_mixed_pct": 0.25556320256939663,
              "run_instit_pct": 0.056434962147281484,
              "run_unclear_pct": 0.10162881394815325,
              "avg_trade_size": 1536.8657463962863,
              "avg_run_notional": 2886.1626519844,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.64280798348245,
              "medium_confidence_pct": 0.25556320256939663,
              "low_confidence_pct": 0.10162881394815325,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8815668731360404,
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
              "retail_pct": 0.499967513481905,
              "mixed_pct": 0.037879280098759016,
              "instit_pct": 0.4599441231888766,
              "ambiguous_pct": 0.002209083230459359,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002209083230459359,
              "retail_qty_pct": 0.2172943386978188,
              "mixed_qty_pct": 0.008242790621681236,
              "instit_qty_pct": 0.7743239931378155,
              "ambiguous_qty_pct": 0.0001388775426844212,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0001388775426844212,
              "retail_notional_pct": 0.21782868982106912,
              "mixed_notional_pct": 0.008215744205474775,
              "instit_notional_pct": 0.7738148275055244,
              "ambiguous_notional_pct": 0.00014073846793168727,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00014073846793168727,
              "run_retail_pct": 0.7915468023899093,
              "run_mixed_pct": 0.029541934056207125,
              "run_instit_pct": 0.17703031644169065,
              "run_unclear_pct": 0.001880947112192963,
              "avg_trade_size": 1073.8164511727632,
              "avg_run_notional": 1828.6245850851958,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7220624031865457,
              "low_confidence_pct": 0.2779375968134543,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48234675813233024,
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
          "n_trades": 23500,
          "n_runs": 13762,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-05",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.35340425531914893,
            "mixed_pct": 0.28608510638297874,
            "instit_pct": 0.22591489361702127,
            "ambiguous_pct": 0.13459574468085106,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13459574468085106,
            "retail_qty_pct": 0.022547365965907312,
            "mixed_qty_pct": 0.17679359219048216,
            "instit_qty_pct": 0.5583025903729261,
            "ambiguous_qty_pct": 0.24235645147068444,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24235645147068444,
            "retail_notional_pct": 0.02251120486429258,
            "mixed_notional_pct": 0.17788907350551342,
            "instit_notional_pct": 0.5571494888187304,
            "ambiguous_notional_pct": 0.24245023281146363,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24245023281146363
          },
          "run_composition": {
            "retail_pct": 0.5978055515186746,
            "mixed_pct": 0.251852928353437,
            "instit_pct": 0.05064670832727801,
            "ambiguous_pct": 0.09969481180061038,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09969481180061038,
            "retail_notional_pct": 0.02251120486429258,
            "mixed_notional_pct": 0.17788907350551342,
            "instit_notional_pct": 0.5571494888187304,
            "unclear_notional_pct": 0.24245023281146363
          },
          "counts": {
            "trades": {
              "retail": 8305,
              "mixed": 6723,
              "institutional": 5309,
              "ambiguous": 3163,
              "unobservable": 0,
              "unclear": 3163
            },
            "runs": {
              "retail": 8227,
              "mixed": 3466,
              "institutional": 697,
              "ambiguous": 1372,
              "unobservable": 0,
              "unclear": 1372
            }
          },
          "confidence": {
            "high": 0.6483795959889551,
            "medium": 0.25192559221043453,
            "low": 0.09969481180061038,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8923,
            "medium": 3467,
            "low": 1372,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5792340425531914,
            "medium": 0.28617021276595744,
            "low": 0.13459574468085106,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13612,
            "medium": 6725,
            "low": 3163,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8775396018020635,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09969481180061038,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5978055515186746,
          "dominance_gap": 0.34595262316523767,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22638,
              "WALK_BOOK": 856,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23500
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13762
            },
            "participant_confidence": {
              "HIGH": 8923,
              "MEDIUM": 3467,
              "LOW": 1372
            }
          },
          "trade_size": {
            "avg": 1987.4679361702129,
            "median": 132.0
          },
          "run_size": {
            "avg": 3393.801518674611,
            "median": 134.0,
            "avg_length": 1.3623746548466793
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-08T08:59:53.972800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-08T08:59:29.013100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-08T08:59:20.665200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-08T08:59:19.632200",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-08T08:59:11.433200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-08T08:59:10.948900",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-08T08:57:36.871600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-08T08:54:21.046100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-08T08:54:21.016000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-08T08:54:19.990300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-08T08:52:02.348600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-08T08:49:53.807600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-08T08:49:53.536400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-08T08:47:54.962700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-05-08T08:47:53.637200",
              "price": 0.67,
              "size": 4500.0,
              "notional": 3015.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-05-08T08:45:17.102300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-05-08T08:45:17.102200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-05-08T08:45:17.072000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-05-08T08:45:15.715400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-05-08T08:43:34.077000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-05-08T08:41:48.268800",
              "price": 0.67,
              "size": 1000.0,
              "notional": 670.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-05-08T08:38:20.717100",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-05-08T08:30:54.305700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-05-08T08:30:42.612000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
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
              "retail_pct": 0.35340425531914893,
              "mixed_pct": 0.28608510638297874,
              "instit_pct": 0.22591489361702127,
              "ambiguous_pct": 0.13459574468085106,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13459574468085106,
              "retail_qty_pct": 0.022547365965907312,
              "mixed_qty_pct": 0.17679359219048216,
              "instit_qty_pct": 0.5583025903729261,
              "ambiguous_qty_pct": 0.24235645147068444,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24235645147068444,
              "retail_notional_pct": 0.02251120486429258,
              "mixed_notional_pct": 0.17788907350551342,
              "instit_notional_pct": 0.5571494888187304,
              "ambiguous_notional_pct": 0.24245023281146363,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24245023281146363,
              "run_retail_pct": 0.5978055515186746,
              "run_mixed_pct": 0.251852928353437,
              "run_instit_pct": 0.05064670832727801,
              "run_unclear_pct": 0.09969481180061038,
              "avg_trade_size": 1987.4679361702129,
              "avg_run_notional": 3393.801518674611,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6483795959889551,
              "medium_confidence_pct": 0.25192559221043453,
              "low_confidence_pct": 0.09969481180061038,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8775396018020635,
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
              "retail_pct": 0.45177655938479067,
              "mixed_pct": 0.04859726573625748,
              "instit_pct": 0.49731201936770153,
              "ambiguous_pct": 0.002314155511250356,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002314155511250356,
              "retail_qty_pct": 0.21602250970349646,
              "mixed_qty_pct": 0.03381914368399716,
              "instit_qty_pct": 0.7495490432974629,
              "ambiguous_qty_pct": 0.0006093033150435303,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0006093033150435303,
              "retail_notional_pct": 0.2165973648971257,
              "mixed_notional_pct": 0.034774461931180736,
              "instit_notional_pct": 0.7480204302760904,
              "ambiguous_notional_pct": 0.000607742895603084,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.000607742895603084,
              "run_retail_pct": 0.7798897479954181,
              "run_mixed_pct": 0.037442726231386024,
              "run_instit_pct": 0.1805913516609393,
              "run_unclear_pct": 0.0020761741122565865,
              "avg_trade_size": 1519.8635449302194,
              "avg_run_notional": 3056.266269329897,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6952319587628866,
              "low_confidence_pct": 0.30476804123711343,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4872207903780069,
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
          "n_trades": 45408,
          "n_runs": 27670,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-06",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.3707056025369979,
            "mixed_pct": 0.284707540521494,
            "instit_pct": 0.21729651162790697,
            "ambiguous_pct": 0.12729034531360112,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12729034531360112,
            "retail_qty_pct": 0.029475931155035634,
            "mixed_qty_pct": 0.19010269597956164,
            "instit_qty_pct": 0.531592039800995,
            "ambiguous_qty_pct": 0.2488293330644077,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2488293330644077,
            "retail_notional_pct": 0.02952715744725307,
            "mixed_notional_pct": 0.1910515665861514,
            "instit_notional_pct": 0.5302697721979371,
            "ambiguous_notional_pct": 0.24915150376865836,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24915150376865836
          },
          "run_composition": {
            "retail_pct": 0.6013733285146368,
            "mixed_pct": 0.25157209974701844,
            "instit_pct": 0.0540296349837369,
            "ambiguous_pct": 0.09302493675460788,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09302493675460788,
            "retail_notional_pct": 0.029526337361802026,
            "mixed_notional_pct": 0.1910517280317924,
            "instit_notional_pct": 0.5302702202955101,
            "unclear_notional_pct": 0.2491517143108955
          },
          "counts": {
            "trades": {
              "retail": 16833,
              "mixed": 12928,
              "institutional": 9867,
              "ambiguous": 5780,
              "unobservable": 0,
              "unclear": 5780
            },
            "runs": {
              "retail": 16640,
              "mixed": 6961,
              "institutional": 1495,
              "ambiguous": 2574,
              "unobservable": 0,
              "unclear": 2574
            }
          },
          "confidence": {
            "high": 0.6553668232743043,
            "medium": 0.25160823997108783,
            "low": 0.09302493675460788,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18134,
            "medium": 6962,
            "low": 2574,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5879360465116279,
            "medium": 0.28475158562367864,
            "low": 0.12731236786469344,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26697,
            "medium": 12930,
            "low": 5781,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8770166245030717,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09302493675460788,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6013733285146368,
          "dominance_gap": 0.3498012287676183,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44276,
              "WALK_BOOK": 1125,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 45408
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27670
            },
            "participant_confidence": {
              "HIGH": 18134,
              "MEDIUM": 6962,
              "LOW": 2574
            }
          },
          "trade_size": {
            "avg": 1759.1223462825933,
            "median": 135.0
          },
          "run_size": {
            "avg": 2886.814600650524,
            "median": 137.0,
            "avg_length": 1.3499096494398266
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-08T08:59:53.972800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-08T08:59:29.013100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-08T08:59:20.665200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47693,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-08T08:59:19.632200",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47692,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-08T08:59:11.433200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47691,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-08T08:59:10.948900",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47690,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-08T08:57:36.871600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47689,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-08T08:54:21.046100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-08T08:54:21.016000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47688,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-08T08:54:19.990300",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47687,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-08T08:52:02.348600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47686,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-08T08:49:53.807700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-08T08:49:53.807600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47685,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-08T08:49:53.536400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47684,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-08T08:47:54.962700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-05-08T08:47:54.962600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-05-08T08:47:54.932400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47683,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-05-08T08:47:53.637200",
              "price": 0.67,
              "size": 4500.0,
              "notional": 3015.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47682,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-05-08T08:45:17.102300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-05-08T08:45:17.102200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-05-08T08:45:17.072000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47681,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-05-08T08:45:15.715400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-05-08T08:43:34.077000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-05-08T08:41:48.268800",
              "price": 0.67,
              "size": 1000.0,
              "notional": 670.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-05-08T08:38:20.717100",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-05-08T08:30:54.305700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-05-08T08:30:42.612000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47676,
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
              "retail_pct": 0.3707056025369979,
              "mixed_pct": 0.284707540521494,
              "instit_pct": 0.21729651162790697,
              "ambiguous_pct": 0.12729034531360112,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12729034531360112,
              "retail_qty_pct": 0.029475931155035634,
              "mixed_qty_pct": 0.19010269597956164,
              "instit_qty_pct": 0.531592039800995,
              "ambiguous_qty_pct": 0.2488293330644077,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2488293330644077,
              "retail_notional_pct": 0.02952715744725307,
              "mixed_notional_pct": 0.1910515665861514,
              "instit_notional_pct": 0.5302697721979371,
              "ambiguous_notional_pct": 0.24915150376865836,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24915150376865836,
              "run_retail_pct": 0.6013733285146368,
              "run_mixed_pct": 0.25157209974701844,
              "run_instit_pct": 0.0540296349837369,
              "run_unclear_pct": 0.09302493675460788,
              "avg_trade_size": 1759.1223462825933,
              "avg_run_notional": 2886.814600650524,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6553668232743043,
              "medium_confidence_pct": 0.25160823997108783,
              "low_confidence_pct": 0.09302493675460788,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8770166245030717,
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
              "retail_pct": 0.4789147774979009,
              "mixed_pct": 0.047533585222502096,
              "instit_pct": 0.47191435768261963,
              "ambiguous_pct": 0.00163727959697733,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.00163727959697733,
              "retail_qty_pct": 0.23396808329185564,
              "mixed_qty_pct": 0.027398715471693598,
              "instit_qty_pct": 0.7382062885829791,
              "ambiguous_qty_pct": 0.0004269126534716078,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004269126534716078,
              "retail_notional_pct": 0.23571433302141023,
              "mixed_notional_pct": 0.02742458345517785,
              "instit_notional_pct": 0.7364508223775911,
              "ambiguous_notional_pct": 0.000410261145820874,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.000410261145820874,
              "run_retail_pct": 0.7916251841822309,
              "run_mixed_pct": 0.03603998247779858,
              "run_instit_pct": 0.17096093345545776,
              "run_unclear_pct": 0.0013738998845127634,
              "avg_trade_size": 1525.261833543241,
              "avg_run_notional": 2893.690962128151,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7167974194576082,
              "low_confidence_pct": 0.2832025805423918,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48500457966628174,
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
      "n_trades": 45408,
      "n_runs": 27670,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-06",
      "last_trade_date": "2026-05-08",
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
        "retail_pct": 0.3707056025369979,
        "mixed_pct": 0.284707540521494,
        "instit_pct": 0.21729651162790697,
        "ambiguous_pct": 0.12729034531360112,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12729034531360112,
        "retail_qty_pct": 0.029475931155035634,
        "mixed_qty_pct": 0.19010269597956164,
        "instit_qty_pct": 0.531592039800995,
        "ambiguous_qty_pct": 0.2488293330644077,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2488293330644077,
        "retail_notional_pct": 0.02952715744725307,
        "mixed_notional_pct": 0.1910515665861514,
        "instit_notional_pct": 0.5302697721979371,
        "ambiguous_notional_pct": 0.24915150376865836,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24915150376865836
      },
      "run_composition": {
        "retail_pct": 0.6013733285146368,
        "mixed_pct": 0.25157209974701844,
        "instit_pct": 0.0540296349837369,
        "ambiguous_pct": 0.09302493675460788,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09302493675460788
      },
      "trade_size": {
        "avg": 1759.1223462825933,
        "median": 135.0
      },
      "run_size": {
        "avg": 2886.814600650524,
        "median": 137.0,
        "avg_length": 1.3499096494398266
      },
      "confidence": {
        "high": 0.6553668232743043,
        "medium": 0.25160823997108783,
        "low": 0.09302493675460788,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 18134,
        "medium": 6962,
        "low": 2574,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5879360465116279,
        "medium": 0.28475158562367864,
        "low": 0.12731236786469344,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 26697,
        "medium": 12930,
        "low": 5781,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16833,
          "mixed": 12928,
          "institutional": 9867,
          "ambiguous": 5780,
          "unobservable": 0,
          "unclear": 5780
        },
        "runs": {
          "retail": 16640,
          "mixed": 6961,
          "institutional": 1495,
          "ambiguous": 2574,
          "unobservable": 0,
          "unclear": 2574
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8770166245030717,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09302493675460788,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6013733285146368,
      "dominance_gap": 0.3498012287676183,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 7482,
            "n_runs": 4659,
            "retail_pct": 0.3744987971130714,
            "mixed_pct": 0.3032611601176156,
            "instit_pct": 0.20395616145415665,
            "ambiguous_pct": 0.11828388131515638,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11828388131515638,
            "avg_trade_size": 971.4749398556536,
            "avg_run_notional": 1560.1004507405023,
            "retail_qty_pct": 0.04269277164331447,
            "mixed_qty_pct": 0.2121740744177415,
            "instit_qty_pct": 0.48862392131390925,
            "ambiguous_qty_pct": 0.2565092326250348,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2565092326250348,
            "retail_notional_pct": 0.042695917515061924,
            "mixed_notional_pct": 0.2125468050789319,
            "instit_notional_pct": 0.4882909312835782,
            "ambiguous_notional_pct": 0.25646634612242797,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25646634612242797,
            "run_retail_pct": 0.5908993346211633,
            "run_mixed_pct": 0.26915647134578236,
            "run_instit_pct": 0.0549474136080704,
            "run_ambiguous_pct": 0.0849967804249839,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0849967804249839,
            "avg_feature_coverage": 0.8789117836445588,
            "high_confidence_pct": 0.6458467482292337,
            "medium_confidence_pct": 0.26915647134578236,
            "low_confidence_pct": 0.0849967804249839,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4966,
            "n_runs": 3378,
            "retail_pct": 0.43254128070882,
            "mixed_pct": 0.27527184857027787,
            "instit_pct": 0.18344744260974627,
            "ambiguous_pct": 0.10873942811115586,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10873942811115586,
            "avg_trade_size": 2388.3777688280306,
            "avg_run_notional": 3511.1557134399054,
            "retail_qty_pct": 0.022452603902394022,
            "mixed_qty_pct": 0.12681627381336777,
            "instit_qty_pct": 0.5434002952165691,
            "ambiguous_qty_pct": 0.3073308270676692,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3073308270676692,
            "retail_notional_pct": 0.022507639525679968,
            "mixed_notional_pct": 0.1272717070954761,
            "instit_notional_pct": 0.5419302967687193,
            "ambiguous_notional_pct": 0.30829035661012466,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.30829035661012466,
            "run_retail_pct": 0.6343990526939017,
            "run_mixed_pct": 0.2285375962107756,
            "run_instit_pct": 0.05358200118413262,
            "run_ambiguous_pct": 0.08348134991119005,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08348134991119005,
            "avg_feature_coverage": 0.8710923623445824,
            "high_confidence_pct": 0.6879810538780343,
            "medium_confidence_pct": 0.2285375962107756,
            "low_confidence_pct": 0.08348134991119005,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4495,
            "n_runs": 3123,
            "retail_pct": 0.41757508342602895,
            "mixed_pct": 0.3087875417130145,
            "instit_pct": 0.16418242491657398,
            "ambiguous_pct": 0.10945494994438265,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10945494994438265,
            "avg_trade_size": 2441.2621802002222,
            "avg_run_notional": 3513.7603266090296,
            "retail_qty_pct": 0.02029660911067243,
            "mixed_qty_pct": 0.22378120392813414,
            "instit_qty_pct": 0.4950148679377296,
            "ambiguous_qty_pct": 0.26090731902346387,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26090731902346387,
            "retail_notional_pct": 0.02029052150169224,
            "mixed_notional_pct": 0.22405836219497866,
            "instit_notional_pct": 0.49469167625000415,
            "ambiguous_notional_pct": 0.26095944005332494,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26095944005332494,
            "run_retail_pct": 0.5997438360550752,
            "run_mixed_pct": 0.2580851745116875,
            "run_instit_pct": 0.051232788984950366,
            "run_ambiguous_pct": 0.0909382004482869,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0909382004482869,
            "avg_feature_coverage": 0.8714217098943322,
            "high_confidence_pct": 0.6509766250400256,
            "medium_confidence_pct": 0.2580851745116875,
            "low_confidence_pct": 0.0909382004482869,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9697,
            "n_runs": 5554,
            "retail_pct": 0.3459832938022069,
            "mixed_pct": 0.28740847684850984,
            "instit_pct": 0.2266680416623698,
            "ambiguous_pct": 0.1399401876869135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1399401876869135,
            "avg_trade_size": 2161.422347117665,
            "avg_run_notional": 3773.732895210659,
            "retail_qty_pct": 0.021510052309825424,
            "mixed_qty_pct": 0.16204071343039012,
            "instit_qty_pct": 0.5838469780046638,
            "ambiguous_qty_pct": 0.23260225625512068,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23260225625512068,
            "retail_notional_pct": 0.021441280576354783,
            "mixed_notional_pct": 0.1629021705745358,
            "instit_notional_pct": 0.583193341861762,
            "ambiguous_notional_pct": 0.23246320698734751,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23246320698734751,
            "run_retail_pct": 0.5966870723802665,
            "run_mixed_pct": 0.2511703276917537,
            "run_instit_pct": 0.045012603528988115,
            "run_ambiguous_pct": 0.10712999639899172,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10712999639899172,
            "avg_feature_coverage": 0.8779348217500899,
            "high_confidence_pct": 0.6415196254951386,
            "medium_confidence_pct": 0.25135037810586963,
            "low_confidence_pct": 0.10712999639899172,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 8271,
            "n_runs": 4562,
            "retail_pct": 0.33587232499093217,
            "mixed_pct": 0.2780800386893967,
            "instit_pct": 0.25486640067706445,
            "ambiguous_pct": 0.1311812356426067,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1311812356426067,
            "avg_trade_size": 1583.4353161649135,
            "avg_run_notional": 2870.800854888207,
            "retail_qty_pct": 0.024315653764279074,
            "mixed_qty_pct": 0.16991475029732458,
            "instit_qty_pct": 0.555032530806824,
            "ambiguous_qty_pct": 0.25073706513157235,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25073706513157235,
            "retail_notional_pct": 0.024360075007291017,
            "mixed_notional_pct": 0.17067781786156835,
            "instit_notional_pct": 0.5539449246859498,
            "ambiguous_notional_pct": 0.2510171824451908,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2510171824451908,
            "run_retail_pct": 0.6034633932485752,
            "run_mixed_pct": 0.2479175800087681,
            "run_instit_pct": 0.05830775975449364,
            "run_ambiguous_pct": 0.09031126698816308,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09031126698816308,
            "avg_feature_coverage": 0.8808855765015343,
            "high_confidence_pct": 0.6617711530030689,
            "medium_confidence_pct": 0.2479175800087681,
            "low_confidence_pct": 0.09031126698816308,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 1606,
            "n_runs": 918,
            "retail_pct": 0.3300124533001245,
            "mixed_pct": 0.2752179327521793,
            "instit_pct": 0.21855541718555418,
            "ambiguous_pct": 0.17621419676214198,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17621419676214198,
            "avg_trade_size": 1693.7160647571607,
            "avg_run_notional": 2963.0806100217865,
            "retail_qty_pct": 0.02992384357323016,
            "mixed_qty_pct": 0.13110659450988074,
            "instit_qty_pct": 0.6003624164360751,
            "ambiguous_qty_pct": 0.23860714548081396,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23860714548081396,
            "retail_notional_pct": 0.02995359007804102,
            "mixed_notional_pct": 0.13129166194871675,
            "instit_notional_pct": 0.6000002573427231,
            "ambiguous_notional_pct": 0.2387544906305191,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2387544906305191,
            "run_retail_pct": 0.5642701525054467,
            "run_mixed_pct": 0.2657952069716776,
            "run_instit_pct": 0.046840958605664486,
            "run_ambiguous_pct": 0.12309368191721133,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12309368191721133,
            "avg_feature_coverage": 0.876470588235294,
            "high_confidence_pct": 0.6111111111111112,
            "medium_confidence_pct": 0.2657952069716776,
            "low_confidence_pct": 0.12309368191721133,
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
          "retail_pct": 0.3707056025369979,
          "mixed_pct": 0.284707540521494,
          "instit_pct": 0.21729651162790697,
          "ambiguous_pct": 0.12729034531360112,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12729034531360112,
          "retail_qty_pct": 0.029475931155035634,
          "mixed_qty_pct": 0.19010269597956164,
          "instit_qty_pct": 0.531592039800995,
          "ambiguous_qty_pct": 0.2488293330644077,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2488293330644077,
          "retail_notional_pct": 0.02952715744725307,
          "mixed_notional_pct": 0.1910515665861514,
          "instit_notional_pct": 0.5302697721979371,
          "ambiguous_notional_pct": 0.24915150376865836,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24915150376865836,
          "run_retail_pct": 0.6013733285146368,
          "run_mixed_pct": 0.25157209974701844,
          "run_instit_pct": 0.0540296349837369,
          "run_unclear_pct": 0.09302493675460788,
          "avg_trade_size": 1759.1223462825933,
          "avg_run_notional": 2886.814600650524,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6553668232743043,
          "medium_confidence_pct": 0.25160823997108783,
          "low_confidence_pct": 0.09302493675460788,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8770166245030717,
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
          "retail_pct": 0.4789147774979009,
          "mixed_pct": 0.047533585222502096,
          "instit_pct": 0.47191435768261963,
          "ambiguous_pct": 0.00163727959697733,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.00163727959697733,
          "retail_qty_pct": 0.23396808329185564,
          "mixed_qty_pct": 0.027398715471693598,
          "instit_qty_pct": 0.7382062885829791,
          "ambiguous_qty_pct": 0.0004269126534716078,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004269126534716078,
          "retail_notional_pct": 0.23571433302141023,
          "mixed_notional_pct": 0.02742458345517785,
          "instit_notional_pct": 0.7364508223775911,
          "ambiguous_notional_pct": 0.000410261145820874,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.000410261145820874,
          "run_retail_pct": 0.7916251841822309,
          "run_mixed_pct": 0.03603998247779858,
          "run_instit_pct": 0.17096093345545776,
          "run_unclear_pct": 0.0013738998845127634,
          "avg_trade_size": 1525.261833543241,
          "avg_run_notional": 2893.690962128151,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7167974194576082,
          "low_confidence_pct": 0.2832025805423918,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48500457966628174,
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
            "retail_pct": 0.3741496598639456,
            "mixed_pct": 0.3231292517006803,
            "instit_pct": 0.15306122448979592,
            "ambiguous_pct": 0.14965986394557823,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14965986394557823,
            "retail_qty_pct": 0.02227209944751381,
            "mixed_qty_pct": 0.21460635359116023,
            "instit_qty_pct": 0.4673687845303867,
            "ambiguous_qty_pct": 0.29575276243093923,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.29575276243093923,
            "retail_notional_pct": 0.022251168234887396,
            "mixed_notional_pct": 0.2146923745239985,
            "instit_notional_pct": 0.4662153850934653,
            "ambiguous_notional_pct": 0.2968410721476488,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2968410721476488,
            "run_retail_pct": 0.5396039603960396,
            "run_mixed_pct": 0.29207920792079206,
            "run_instit_pct": 0.0297029702970297,
            "run_unclear_pct": 0.13861386138613863,
            "avg_trade_size": 1313.4676870748299,
            "avg_run_notional": 1911.680693069307,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5693069306930693,
            "medium_confidence_pct": 0.29207920792079206,
            "low_confidence_pct": 0.13861386138613863,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8655940594059403,
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
            "retail_pct": 0.4548611111111111,
            "mixed_pct": 0.020833333333333332,
            "instit_pct": 0.5243055555555556,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.23789991796554552,
            "mixed_qty_pct": 0.004593929450369155,
            "instit_qty_pct": 0.7575061525840853,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.23787998326970047,
            "mixed_notional_pct": 0.004608148826501185,
            "instit_notional_pct": 0.7575118679037983,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.7891156462585034,
            "run_mixed_pct": 0.02040816326530612,
            "run_instit_pct": 0.19047619047619047,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1423.7309027777778,
            "avg_run_notional": 2789.3503401360545,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7142857142857143,
            "low_confidence_pct": 0.2857142857142857,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4836734693877552,
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
            "retail_pct": 0.3167603225018324,
            "mixed_pct": 0.283899340337161,
            "instit_pct": 0.2488394820425116,
            "ambiguous_pct": 0.15050085511849498,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15050085511849498,
            "retail_qty_pct": 0.02661688926280366,
            "mixed_qty_pct": 0.18707540225049954,
            "instit_qty_pct": 0.5384372699547797,
            "ambiguous_qty_pct": 0.24787043853191712,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24787043853191712,
            "retail_notional_pct": 0.02663085437528014,
            "mixed_notional_pct": 0.18692485197463465,
            "instit_notional_pct": 0.5382920125082835,
            "ambiguous_notional_pct": 0.24815228114180174,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24815228114180174,
            "run_retail_pct": 0.5863730213351687,
            "run_mixed_pct": 0.25556320256939663,
            "run_instit_pct": 0.056434962147281484,
            "run_unclear_pct": 0.10162881394815325,
            "avg_trade_size": 1536.8657463962863,
            "avg_run_notional": 2886.1626519844,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.64280798348245,
            "medium_confidence_pct": 0.25556320256939663,
            "low_confidence_pct": 0.10162881394815325,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8815668731360404,
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
            "retail_pct": 0.499967513481905,
            "mixed_pct": 0.037879280098759016,
            "instit_pct": 0.4599441231888766,
            "ambiguous_pct": 0.002209083230459359,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002209083230459359,
            "retail_qty_pct": 0.2172943386978188,
            "mixed_qty_pct": 0.008242790621681236,
            "instit_qty_pct": 0.7743239931378155,
            "ambiguous_qty_pct": 0.0001388775426844212,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0001388775426844212,
            "retail_notional_pct": 0.21782868982106912,
            "mixed_notional_pct": 0.008215744205474775,
            "instit_notional_pct": 0.7738148275055244,
            "ambiguous_notional_pct": 0.00014073846793168727,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00014073846793168727,
            "run_retail_pct": 0.7915468023899093,
            "run_mixed_pct": 0.029541934056207125,
            "run_instit_pct": 0.17703031644169065,
            "run_unclear_pct": 0.001880947112192963,
            "avg_trade_size": 1073.8164511727632,
            "avg_run_notional": 1828.6245850851958,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7220624031865457,
            "low_confidence_pct": 0.2779375968134543,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48234675813233024,
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
            "retail_pct": 0.35340425531914893,
            "mixed_pct": 0.28608510638297874,
            "instit_pct": 0.22591489361702127,
            "ambiguous_pct": 0.13459574468085106,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13459574468085106,
            "retail_qty_pct": 0.022547365965907312,
            "mixed_qty_pct": 0.17679359219048216,
            "instit_qty_pct": 0.5583025903729261,
            "ambiguous_qty_pct": 0.24235645147068444,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24235645147068444,
            "retail_notional_pct": 0.02251120486429258,
            "mixed_notional_pct": 0.17788907350551342,
            "instit_notional_pct": 0.5571494888187304,
            "ambiguous_notional_pct": 0.24245023281146363,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24245023281146363,
            "run_retail_pct": 0.5978055515186746,
            "run_mixed_pct": 0.251852928353437,
            "run_instit_pct": 0.05064670832727801,
            "run_unclear_pct": 0.09969481180061038,
            "avg_trade_size": 1987.4679361702129,
            "avg_run_notional": 3393.801518674611,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6483795959889551,
            "medium_confidence_pct": 0.25192559221043453,
            "low_confidence_pct": 0.09969481180061038,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8775396018020635,
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
            "retail_pct": 0.45177655938479067,
            "mixed_pct": 0.04859726573625748,
            "instit_pct": 0.49731201936770153,
            "ambiguous_pct": 0.002314155511250356,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002314155511250356,
            "retail_qty_pct": 0.21602250970349646,
            "mixed_qty_pct": 0.03381914368399716,
            "instit_qty_pct": 0.7495490432974629,
            "ambiguous_qty_pct": 0.0006093033150435303,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0006093033150435303,
            "retail_notional_pct": 0.2165973648971257,
            "mixed_notional_pct": 0.034774461931180736,
            "instit_notional_pct": 0.7480204302760904,
            "ambiguous_notional_pct": 0.000607742895603084,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.000607742895603084,
            "run_retail_pct": 0.7798897479954181,
            "run_mixed_pct": 0.037442726231386024,
            "run_instit_pct": 0.1805913516609393,
            "run_unclear_pct": 0.0020761741122565865,
            "avg_trade_size": 1519.8635449302194,
            "avg_run_notional": 3056.266269329897,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6952319587628866,
            "low_confidence_pct": 0.30476804123711343,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4872207903780069,
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
            "retail_pct": 0.3707056025369979,
            "mixed_pct": 0.284707540521494,
            "instit_pct": 0.21729651162790697,
            "ambiguous_pct": 0.12729034531360112,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12729034531360112,
            "retail_qty_pct": 0.029475931155035634,
            "mixed_qty_pct": 0.19010269597956164,
            "instit_qty_pct": 0.531592039800995,
            "ambiguous_qty_pct": 0.2488293330644077,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2488293330644077,
            "retail_notional_pct": 0.02952715744725307,
            "mixed_notional_pct": 0.1910515665861514,
            "instit_notional_pct": 0.5302697721979371,
            "ambiguous_notional_pct": 0.24915150376865836,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24915150376865836,
            "run_retail_pct": 0.6013733285146368,
            "run_mixed_pct": 0.25157209974701844,
            "run_instit_pct": 0.0540296349837369,
            "run_unclear_pct": 0.09302493675460788,
            "avg_trade_size": 1759.1223462825933,
            "avg_run_notional": 2886.814600650524,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6553668232743043,
            "medium_confidence_pct": 0.25160823997108783,
            "low_confidence_pct": 0.09302493675460788,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8770166245030717,
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
            "retail_pct": 0.4789147774979009,
            "mixed_pct": 0.047533585222502096,
            "instit_pct": 0.47191435768261963,
            "ambiguous_pct": 0.00163727959697733,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00163727959697733,
            "retail_qty_pct": 0.23396808329185564,
            "mixed_qty_pct": 0.027398715471693598,
            "instit_qty_pct": 0.7382062885829791,
            "ambiguous_qty_pct": 0.0004269126534716078,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004269126534716078,
            "retail_notional_pct": 0.23571433302141023,
            "mixed_notional_pct": 0.02742458345517785,
            "instit_notional_pct": 0.7364508223775911,
            "ambiguous_notional_pct": 0.000410261145820874,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.000410261145820874,
            "run_retail_pct": 0.7916251841822309,
            "run_mixed_pct": 0.03603998247779858,
            "run_instit_pct": 0.17096093345545776,
            "run_unclear_pct": 0.0013738998845127634,
            "avg_trade_size": 1525.261833543241,
            "avg_run_notional": 2893.690962128151,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7167974194576082,
            "low_confidence_pct": 0.2832025805423918,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48500457966628174,
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
          "trade_id": "BMLL-306",
          "timestamp": "2026-05-08T08:59:53.972800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47695,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-305",
          "timestamp": "2026-05-08T08:59:29.013100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47694,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-304",
          "timestamp": "2026-05-08T08:59:20.665200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47693,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-303",
          "timestamp": "2026-05-08T08:59:19.632200",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47692,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-302",
          "timestamp": "2026-05-08T08:59:11.433200",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47691,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-301",
          "timestamp": "2026-05-08T08:59:10.948900",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47690,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-300",
          "timestamp": "2026-05-08T08:57:36.871600",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47689,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-299",
          "timestamp": "2026-05-08T08:54:21.046100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-298",
          "timestamp": "2026-05-08T08:54:21.016000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47688,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-297",
          "timestamp": "2026-05-08T08:54:19.990300",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47687,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-296",
          "timestamp": "2026-05-08T08:52:02.348600",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47686,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-295",
          "timestamp": "2026-05-08T08:49:53.807700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47685,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-294",
          "timestamp": "2026-05-08T08:49:53.807700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47685,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-293",
          "timestamp": "2026-05-08T08:49:53.807600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47685,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-292",
          "timestamp": "2026-05-08T08:49:53.536400",
          "price": 0.67,
          "size": 1300.0,
          "notional": 871.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47684,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-291",
          "timestamp": "2026-05-08T08:47:54.962700",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-290",
          "timestamp": "2026-05-08T08:47:54.962600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-289",
          "timestamp": "2026-05-08T08:47:54.962600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-288",
          "timestamp": "2026-05-08T08:47:54.932400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-287",
          "timestamp": "2026-05-08T08:47:54.932400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47683,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-286",
          "timestamp": "2026-05-08T08:47:53.637200",
          "price": 0.67,
          "size": 4500.0,
          "notional": 3015.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47682,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-285",
          "timestamp": "2026-05-08T08:45:17.102300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47681,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-284",
          "timestamp": "2026-05-08T08:45:17.102200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47681,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-283",
          "timestamp": "2026-05-08T08:45:17.072000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47681,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-282",
          "timestamp": "2026-05-08T08:45:15.715400",
          "price": 0.67,
          "size": 1300.0,
          "notional": 871.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-281",
          "timestamp": "2026-05-08T08:43:34.077000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47679,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-280",
          "timestamp": "2026-05-08T08:41:48.268800",
          "price": 0.67,
          "size": 1000.0,
          "notional": 670.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47678,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-279",
          "timestamp": "2026-05-08T08:38:20.717100",
          "price": 0.67,
          "size": 800.0,
          "notional": 536.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47677,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-278",
          "timestamp": "2026-05-08T08:30:54.305700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47676,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-277",
          "timestamp": "2026-05-08T08:30:42.612000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47676,
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
      "total_trades": 45407,
      "price_moving_trades": 10805,
      "pct_price_moving": 23.79589050146453,
      "all_movers": {
        "count": 10805,
        "avg_size": 1462.945765849144,
        "median_size": 138.0,
        "retail_count": 5713,
        "mixed_count": 3204,
        "institutional_count": 677,
        "ambiguous_count": 1211,
        "unobservable_count": 0,
        "retail_pct": 52.873669597408615,
        "mixed_pct": 29.652938454419246,
        "instit_pct": 6.265617769551134,
        "unclear_pct": 11.207774178621008
      },
      "positive_movers": {
        "count": 5395,
        "avg_size": 1473.2823911028731,
        "median_size": 138.0,
        "retail_count": 2726,
        "mixed_count": 1665,
        "institutional_count": 334,
        "ambiguous_count": 670,
        "unobservable_count": 0,
        "retail_pct": 50.528266913809084,
        "mixed_pct": 30.86190917516219,
        "instit_pct": 6.190917516218721,
        "unclear_pct": 12.418906394810008
      },
      "negative_movers": {
        "count": 5410,
        "avg_size": 1452.6378003696857,
        "median_size": 138.0,
        "retail_count": 2987,
        "mixed_count": 1539,
        "institutional_count": 343,
        "ambiguous_count": 541,
        "unobservable_count": 0,
        "retail_pct": 55.21256931608133,
        "mixed_pct": 28.44731977818854,
        "instit_pct": 6.34011090573013,
        "unclear_pct": 10.0
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
            "avg_short_ratio": 0.03346138712694621,
            "max_short_ratio": 0.1613056945437217,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06697631083046054,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06074879884713711,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12525040576341628,
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
            "avg_short_ratio": 0.009250191918569052
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
            "avg_short_ratio": 0.009250191918569052,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 324.2999421492046
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
        "interpretation": "Shorts covering significantly (-76% MoM) | YoY: -62% ⬇️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 600400,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
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
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.04323945307935024,
            "short_vol": 37000,
            "total_vol": 855700,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.01097147416716537,
            "short_vol": 5500,
            "total_vol": 501300,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.03396362760448031,
            "short_vol": 28200,
            "total_vol": 830300,
            "close": 0.67,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06697631083046054,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06185519707705125,
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
          "opening": 0.008552056423594022,
          "continuous": 0.8959903258006114,
          "closing": 0.09281996204108983,
          "auctions": 0.10400967419938856,
          "other": 0.0
        },
        "1M": {
          "opening": 0.014015582651644156,
          "continuous": 0.9064294220088319,
          "closing": 0.06770739413295897,
          "auctions": 0.09357057799116807,
          "other": 0.0
        },
        "3M": {
          "opening": 0.046060937027633,
          "continuous": 0.8737469246539086,
          "closing": 0.06606540751119634,
          "auctions": 0.12625307534609148,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03725466418927346,
          "continuous": 0.8683135731419712,
          "closing": 0.08279378089854461,
          "auctions": 0.13168642685802895,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.19992693589143654,
        "1M": 0.2308056588545144,
        "3M": 0.22662680459157386,
        "6M": 0.22955130347735747
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0176
        },
        {
          "time": "09:00",
          "avg_share": 0.1001
        },
        {
          "time": "09:30",
          "avg_share": 0.0404
        },
        {
          "time": "10:00",
          "avg_share": 0.0462
        },
        {
          "time": "10:30",
          "avg_share": 0.0344
        },
        {
          "time": "11:00",
          "avg_share": 0.0311
        },
        {
          "time": "11:30",
          "avg_share": 0.0396
        },
        {
          "time": "12:00",
          "avg_share": 0.2345
        },
        {
          "time": "12:30",
          "avg_share": 0.0094
        },
        {
          "time": "13:00",
          "avg_share": 0.0212
        },
        {
          "time": "13:30",
          "avg_share": 0.0201
        },
        {
          "time": "14:00",
          "avg_share": 0.0321
        },
        {
          "time": "14:30",
          "avg_share": 0.0338
        },
        {
          "time": "15:00",
          "avg_share": 0.0303
        },
        {
          "time": "15:30",
          "avg_share": 0.0512
        },
        {
          "time": "16:00",
          "avg_share": 0.0435
        },
        {
          "time": "16:30",
          "avg_share": 0.0983
        },
        {
          "time": "17:00",
          "avg_share": 0.1164
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.875434689812032,
          "hhi": 0.22721543385382462,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.032490393476246,
          "hhi": 0.17341392997971738,
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
