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
      "marketCap": 1152646111.1000001,
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
    "asof_date": "2026-05-11",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 80.82437275985663,
          "score_pca_percentile": 80.82437275985663,
          "rank_pca": 108,
          "total": 558,
          "adv_notional_sgd": 1071196.0,
          "adv_volume_shares": 1598800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0034980028838657727,
          "votes": 607.0,
          "trades": 607.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0186813186813186,
          "amihud": 7.01906746522696e-09,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5129145562873185,
          "loadings": {
            "log_adv": 0.555944113859297,
            "log_trades": 0.5128044975190234,
            "log_turnover": 0.5168931373893724,
            "neg_spread": 0.3565467837202957,
            "neg_amihud": 0.053149929313673246,
            "neg_vol": -0.17558089344202515
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
          "peer_median_adv": 1077435.0,
          "peer_median_score_pca": 79.03225806451613,
          "peer_median_trades": 615.0,
          "peer_median_volatility": 0.1412413027839655,
          "peer_median_spread_pct": 0.0074269230895736985,
          "peer_median_spread_ticks": 1.0,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0013211160758481823,
          "target_vs_peer": {
            "score_pca_delta": 1.79,
            "adv_delta_pct": -0.6,
            "trades_delta_pct": -1.3,
            "volatility_delta_pct": -1.5,
            "spread_pct_delta_pct": -3.25,
            "spread_ticks_delta_pct": 1.87,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 164.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 1071196.0,
            "trades": 607.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0186813186813186,
            "amihud": 7.01906746522696e-09,
            "turnover_ratio": 0.0034980028838657727,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 1077435.0,
            "trades": 615.0,
            "volatility": 0.1412413027839655,
            "spread_pct": 0.0074269230895736985,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0013211160758481823,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30236814079863567,
              "median": 0.14229626195419176,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.1500757493172897,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4423025.809913381,
              "median": 24847.4,
              "min": 0.0,
              "max": 518604111.0,
              "p5": 0.0,
              "p95": 14833673.15,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09930364172704968,
              "median": 0.027513697702785018,
              "min": 0.00028924782024520836,
              "max": 1.2847682119205297,
              "p5": 0.0034870115840025424,
              "p95": 0.4976033233915637,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.012531807749467303,
              "median": 0.00042933273587905744,
              "min": 0.0,
              "max": 4.040603783534375,
              "p5": 0.0,
              "p95": 0.017690051632661366,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005367192070390459,
              "median": 1.5093076132826707e-08,
              "min": 0.0,
              "max": 0.1388888888888889,
              "p5": 0.0,
              "p95": 4.1261681875373877e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 595.0358422939069,
              "median": 12.0,
              "min": 0.0,
              "max": 20498.0,
              "p5": 0.0,
              "p95": 3326.1999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3039578628773646,
              "median": 0.15605311995410376,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.030197172130689967,
              "p95": 0.957073238907328,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 13213158.046412576,
              "median": 1074315.5,
              "min": 4500.0,
              "max": 93433820.0,
              "p5": 7811.525,
              "p95": 63660222.999999955,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03905765811851297,
              "median": 0.008359030192893722,
              "min": 0.0043671405405195365,
              "max": 0.13643254168772098,
              "p5": 0.004396784650123022,
              "p95": 0.1353478187636853,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032501985696153286,
              "median": 0.0024095594798569774,
              "min": 1.924547717958787e-05,
              "max": 0.0114528919648772,
              "p5": 0.00017743470149690483,
              "p95": 0.00919294277570743,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1226898617382136e-06,
              "median": 3.105700355881638e-10,
              "min": 0.0,
              "max": 8.953192708519857e-06,
              "p5": 0.0,
              "p95": 5.826815352785209e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1560.875,
              "median": 462.5,
              "min": 2.0,
              "max": 8178.0,
              "p5": 12.850000000000001,
              "p95": 6208.199999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1077435.0,
              "median": 1077435.0,
              "min": 1077435.0,
              "max": 1077435.0,
              "p5": 1077435.0,
              "p95": 1077435.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 615.0,
              "median": 615.0,
              "min": 615.0,
              "max": 615.0,
              "p5": 615.0,
              "p95": 615.0,
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
              "mean": 0.0074269230895736985,
              "median": 0.0074269230895736985,
              "min": 0.0074269230895736985,
              "max": 0.0074269230895736985,
              "p5": 0.0074269230895736985,
              "p95": 0.0074269230895736985,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0,
              "median": 1.0,
              "min": 1.0,
              "max": 1.0,
              "p5": 1.0,
              "p95": 1.0,
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
              "mean": 0.0013211160758481823,
              "median": 0.0013211160758481823,
              "min": 0.0013211160758481823,
              "max": 0.0013211160758481823,
              "p5": 0.0013211160758481823,
              "p95": 0.0013211160758481823,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": 0.004240256324099967,
            "sector": -0.0022123893805309214,
            "peers": 0.0,
            "vs_market": 0.003278540668381291,
            "vs_sector": 0.00973118637301218,
            "vs_peers": 0.007518796992481258
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.18279569892472,
          "score_pca_percentile": 81.18279569892472,
          "rank_pca": 106,
          "total": 558,
          "adv_notional_sgd": 573296.5,
          "adv_volume_shares": 862100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018861823155996262,
          "votes": 344.0,
          "trades": 344.0,
          "spread_pct": 0.007614324265188542,
          "spread_ticks": 1.0006325110689438,
          "amihud": 7.522513113959554e-09,
          "volatility": 0.12512410319024195
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5270794684754931,
          "loadings": {
            "log_adv": 0.5392529414067864,
            "log_trades": 0.49127809857936466,
            "log_turnover": 0.4864805767908172,
            "neg_spread": 0.4151376912374711,
            "neg_amihud": 0.1534432810749687,
            "neg_vol": 0.18789518421880494
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
          "peer_median_score_pca": 83.33333333333334,
          "peer_median_trades": 788.0,
          "peer_median_volatility": 0.14242858888898205,
          "peer_median_spread_pct": 0.007490636704119858,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 7.185644060414797e-09,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -2.15,
            "adv_delta_pct": -23.2,
            "trades_delta_pct": -56.35,
            "volatility_delta_pct": 12.15,
            "spread_pct_delta_pct": -1.65,
            "spread_ticks_delta_pct": -0.75,
            "amihud_delta_pct": -4.69,
            "turnover_ratio_delta_pct": 102.91
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.18279569892472,
            "rank_pca": 106,
            "adv": 573296.5,
            "trades": 344.0,
            "volatility": 0.12512410319024195,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0006325110689438,
            "amihud": 7.522513113959554e-09,
            "turnover_ratio": 0.0018861823155996262,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.33333333333334,
            "rank_pca": 94,
            "adv": 746861.5,
            "trades": 788.0,
            "volatility": 0.14242858888898205,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0081615120274914,
            "amihud": 7.185644060414797e-09,
            "turnover_ratio": 0.0009295485934000085,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6336636825399498,
              "median": 0.38516683142960784,
              "min": 0.0,
              "max": 5.55877684387492,
              "p5": 0.07600395769320081,
              "p95": 1.8316303964988099,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3305123.414284709,
              "median": 16249.4,
              "min": 0.0,
              "max": 268652400.0,
              "p5": 0.0,
              "p95": 14298816.299999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1027829924945668,
              "median": 0.02981189731057282,
              "min": 0.0002705286818559187,
              "max": 1.2631578947368423,
              "p5": 0.0033722613348105427,
              "p95": 0.5061197356587026,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004639561397343174,
              "median": 0.00034298567790598365,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.014110326446934664,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.350575207970881e-05,
              "median": 8.816201021844527e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 3.513893459681999e-05,
              "count": 545
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.7508960573477,
              "median": 8.0,
              "min": 0.0,
              "max": 12747.0,
              "p5": 0.0,
              "p95": 2815.5499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.324736061689091,
              "median": 0.14314929356749984,
              "min": 0.11531201953912673,
              "max": 1.6081478339326627,
              "p5": 0.11702996097256463,
              "p95": 1.1098250001433334,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11213916.645250274,
              "median": 654807.5,
              "min": 0.0,
              "max": 75572756.0,
              "p5": 4812.360000000001,
              "p95": 53313602.64999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038233191236766884,
              "median": 0.008330963496588928,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004310572679192477,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025759067656631494,
              "median": 0.0009510534881897813,
              "min": 0.0,
              "max": 0.008886751071857197,
              "p5": 8.368796411960701e-05,
              "p95": 0.008279178872028503,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0929779609877275e-06,
              "median": 3.881408954137632e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 0.0,
              "p95": 5.667288855744337e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1247.75,
              "median": 354.5,
              "min": 0.0,
              "max": 6138.0,
              "p5": 3.8500000000000005,
              "p95": 4792.249999999998,
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
              "mean": 0.14242858888898205,
              "median": 0.14242858888898205,
              "min": 0.14242858888898205,
              "max": 0.14242858888898205,
              "p5": 0.14242858888898205,
              "p95": 0.14242858888898205,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007490636704119858,
              "median": 0.007490636704119858,
              "min": 0.007490636704119858,
              "max": 0.007490636704119858,
              "p5": 0.007490636704119858,
              "p95": 0.007490636704119858,
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
              "mean": 7.185644060414797e-09,
              "median": 7.185644060414797e-09,
              "min": 7.185644060414797e-09,
              "max": 7.185644060414797e-09,
              "p5": 7.185644060414797e-09,
              "p95": 7.185644060414797e-09,
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
            "stock": 0.03875968992248047,
            "market": -0.006893611928115995,
            "sector": 0.019827251123420986,
            "peers": 0.015037593984962516,
            "vs_market": 0.04565330185059646,
            "vs_sector": 0.01893243879905948,
            "vs_peers": 0.02372209593751795
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.05017921146953,
          "score_pca_percentile": 84.05017921146953,
          "rank_pca": 90,
          "total": 558,
          "adv_notional_sgd": 684382.5,
          "adv_volume_shares": 1013900.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022183044307927864,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.18050944898385748
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5525976077920575,
          "loadings": {
            "log_adv": 0.5226735439867005,
            "log_trades": 0.4717439163649624,
            "log_turnover": 0.47510716337193,
            "neg_spread": 0.42578378300947267,
            "neg_amihud": 0.18369651676207538,
            "neg_vol": 0.2520059264329533
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
          "peer_median_adv": 1240987.5,
          "peer_median_score_pca": 86.20071684587813,
          "peer_median_trades": 877.0,
          "peer_median_volatility": 0.20567625575672566,
          "peer_median_spread_pct": 0.007534888173234059,
          "peer_median_spread_ticks": 1.0052830188679245,
          "peer_median_amihud": 6.59491400232141e-09,
          "peer_median_turnover_ratio": 0.001521658880746074,
          "target_vs_peer": {
            "score_pca_delta": -2.15,
            "adv_delta_pct": -44.9,
            "trades_delta_pct": -53.71,
            "volatility_delta_pct": 12.24,
            "spread_pct_delta_pct": -1.77,
            "spread_ticks_delta_pct": -0.53,
            "amihud_delta_pct": 7.57,
            "turnover_ratio_delta_pct": 45.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 684382.5,
            "trades": 406.0,
            "volatility": 0.18050944898385748,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.0022183044307927864,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.20071684587813,
            "rank_pca": 78,
            "adv": 1240987.5,
            "trades": 877.0,
            "volatility": 0.20567625575672566,
            "spread_pct": 0.007534888173234059,
            "spread_ticks": 1.0052830188679245,
            "amihud": 6.59491400232141e-09,
            "turnover_ratio": 0.001521658880746074,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6931449971804232,
              "median": 0.47366130867405953,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.16109197823379615,
              "p95": 2.233353574586954,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3372078.2203803444,
              "median": 13514.5,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13424509.399999987,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10102734679409033,
              "median": 0.03144310246184567,
              "min": 0.0002709146678517975,
              "max": 1.3542204201990415,
              "p5": 0.0035544589348858063,
              "p95": 0.4801396414984653,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006430084174459412,
              "median": 0.0002837326975699041,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.011182811623954,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.884220814389684e-05,
              "median": 1.4351502470005683e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 3.933617224214761e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 477.7795698924731,
              "median": 7.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2817.999999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3404456802020349,
              "median": 0.20035801891098434,
              "min": 0.1314877747141878,
              "max": 1.3443253023788733,
              "p5": 0.14864536070857218,
              "p95": 0.9711438122751302,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11204739.055635136,
              "median": 738052.0,
              "min": 0.0,
              "max": 75024274.0,
              "p5": 4812.360000000001,
              "p95": 52885808.699999966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03773546013895143,
              "median": 0.008359030192893722,
              "min": 0.004289845789352878,
              "max": 0.15384615384615383,
              "p5": 0.004368757541155808,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026668864551006965,
              "median": 0.001293291776603684,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 0.00010190938609458527,
              "p95": 0.008094006189451915,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0948175519950019e-06,
              "median": 5.84320523723408e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 3.3185605965670984e-11,
              "p95": 5.6711856841035e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1234.25,
              "median": 457.0,
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
              "mean": 1240987.5,
              "median": 1240987.5,
              "min": 1240987.5,
              "max": 1240987.5,
              "p5": 1240987.5,
              "p95": 1240987.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 877.0,
              "median": 877.0,
              "min": 877.0,
              "max": 877.0,
              "p5": 877.0,
              "p95": 877.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20567625575672566,
              "median": 0.20567625575672566,
              "min": 0.20567625575672566,
              "max": 0.20567625575672566,
              "p5": 0.20567625575672566,
              "p95": 0.20567625575672566,
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
              "mean": 0.001521658880746074,
              "median": 0.001521658880746074,
              "min": 0.001521658880746074,
              "max": 0.001521658880746074,
              "p5": 0.001521658880746074,
              "p95": 0.001521658880746074,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.014705882352940902,
            "market": -0.0066521225186154664,
            "sector": -0.0077545487211930775,
            "peers": -0.13461538461538414,
            "vs_market": -0.008053759834325436,
            "vs_sector": -0.006951333631747825,
            "vs_peers": 0.11990950226244323
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.12544802867383,
          "score_pca_percentile": 85.12544802867383,
          "rank_pca": 84,
          "total": 558,
          "adv_notional_sgd": 568043.5,
          "adv_volume_shares": 847800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001854895449675633,
          "votes": 348.5,
          "trades": 348.5,
          "spread_pct": 0.007453092738608056,
          "spread_ticks": 1.0,
          "amihud": 5.4491452128808115e-09,
          "volatility": 0.1426771070207857
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5788107745163339,
          "loadings": {
            "log_adv": 0.5008623341006291,
            "log_trades": 0.4463012027356076,
            "log_turnover": 0.45540770106751755,
            "neg_spread": 0.43335203586265003,
            "neg_amihud": 0.2700038005368608,
            "neg_vol": 0.2861117705264259
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
          "peer_median_adv": 1095909.5,
          "peer_median_score_pca": 87.09677419354838,
          "peer_median_trades": 730.5,
          "peer_median_volatility": 0.16430111280784498,
          "peer_median_spread_pct": 0.006915284289912262,
          "peer_median_spread_ticks": 1.0044129029036526,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0011872829287083182,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -48.2,
            "trades_delta_pct": -52.29,
            "volatility_delta_pct": 13.16,
            "spread_pct_delta_pct": -7.78,
            "spread_ticks_delta_pct": -0.44,
            "amihud_delta_pct": 0.17,
            "turnover_ratio_delta_pct": 56.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 568043.5,
            "trades": 348.5,
            "volatility": 0.1426771070207857,
            "spread_pct": 0.007453092738608056,
            "spread_ticks": 1.0,
            "amihud": 5.4491452128808115e-09,
            "turnover_ratio": 0.001854895449675633,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1095909.5,
            "trades": 730.5,
            "volatility": 0.16430111280784498,
            "spread_pct": 0.006915284289912262,
            "spread_ticks": 1.0044129029036526,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0011872829287083182,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.689698341771711,
              "median": 0.4589330888826322,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.15215336061051565,
              "p95": 2.0327051721936935,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2681569.052689906,
              "median": 11404.8,
              "min": 0.0,
              "max": 254635655.60000002,
              "p5": 0.0,
              "p95": 11026497.774999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09584698996590349,
              "median": 0.028862152800279553,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.00361164649377225,
              "p95": 0.4842107894295187,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003363398313565149,
              "median": 0.00026713472720175507,
              "min": 0.0,
              "max": 0.8832641223386725,
              "p5": 0.0,
              "p95": 0.007410214570572808,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.70365494524762e-06,
              "median": 1.7123592611923244e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.937763288528176e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 391.3198924731183,
              "median": 6.75,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2177.3,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3534283896458266,
              "median": 0.16582671568380003,
              "min": 0.11513324246816618,
              "max": 1.348762795826435,
              "p5": 0.12477359506158302,
              "p95": 1.0724550814840164,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8741777.304175619,
              "median": 641375.5,
              "min": 0.0,
              "max": 56980400.5,
              "p5": 12598.705000000002,
              "p95": 40693202.649999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.035529899300482934,
              "median": 0.008095915303858978,
              "min": 0.0042712193330027145,
              "max": 0.13333333333333333,
              "p5": 0.004341220892293637,
              "p95": 0.12485378567011218,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023001545832938494,
              "median": 0.0011641626926714003,
              "min": 0.0,
              "max": 0.006798887688199187,
              "p5": 8.386602361773384e-05,
              "p95": 0.006609259984767035,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.34005592743234e-07,
              "median": 5.453776247806839e-09,
              "min": 0.0,
              "max": 7.421899249138285e-06,
              "p5": 3.229281837465633e-11,
              "p95": 4.835563711458106e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1118.75,
              "median": 386.5,
              "min": 0.0,
              "max": 5573.5,
              "p5": 7.875000000000001,
              "p95": 4257.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1095909.5,
              "median": 1095909.5,
              "min": 1095909.5,
              "max": 1095909.5,
              "p5": 1095909.5,
              "p95": 1095909.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 730.5,
              "median": 730.5,
              "min": 730.5,
              "max": 730.5,
              "p5": 730.5,
              "p95": 730.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16430111280784498,
              "median": 0.16430111280784498,
              "min": 0.16430111280784498,
              "max": 0.16430111280784498,
              "p5": 0.16430111280784498,
              "p95": 0.16430111280784498,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006915284289912262,
              "median": 0.006915284289912262,
              "min": 0.006915284289912262,
              "max": 0.006915284289912262,
              "p5": 0.006915284289912262,
              "p95": 0.006915284289912262,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0044129029036526,
              "median": 1.0044129029036526,
              "min": 1.0044129029036526,
              "max": 1.0044129029036526,
              "p5": 1.0044129029036526,
              "p95": 1.0044129029036526,
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
            "stock": -0.03597122302158273,
            "market": 0.10206929362914119,
            "sector": -0.01808340182908008,
            "peers": -0.16149068322981408,
            "vs_market": -0.13804051665072392,
            "vs_sector": -0.01788782119250265,
            "vs_peers": 0.12551946020823135
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Today’s trading looks orderly, with a 2-tick spread and displayed depth that is reasonably balanced despite the bid side being lighter.",
        "market_comparison": "The stock rose 0.8% compared with peers at 0.0%, which supports a firmer tape without changing the broader access picture."
      },
      "30d": {
        "liquidity": "Monthly tradability is average for its size, with a 1M liquidity score of 81.2 sitting 2.2 points below the peer median.",
        "market_comparison": "The stock returned 3.9% compared with peers at 1.5%, which matters because stronger price performance can help keep trading interest engaged."
      },
      "3m": {
        "liquidity": "Quarterly liquidity remains middle-of-the-pack, with a 3M score of 84.1 still 2.2 points below the peer median.",
        "market_comparison": "Return -1.5% vs peers -13.5%."
      },
      "6m": {
        "liquidity": "Over six months, tradability has been steady but not leading, with a score of 85.1 compared with the peer median of 87.1.",
        "market_comparison": "The stock fell 3.6% while peers fell 16.1%, which suggests the shares have traded against a stronger return backdrop than the group."
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
          "median": 0.013258584964681285,
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
          "median": 0.011166066527697145,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.1%",
          "display_range": null,
          "display_text": "1.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 1.1,
          "plain_english": "Sector explains about 1.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.9755753485076216,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "97.6%",
          "display_range": null,
          "display_text": "97.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 97.6,
          "plain_english": "Company-specific explains about 97.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.014196067461552012,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.01",
          "display_range": null,
          "display_text": "0.01",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.01% stock move in the same direction in this state.",
          "value_num": 0.01
        },
        "beta_stock_lag": {
          "median": -0.9904693266761179,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.99",
          "display_range": null,
          "display_text": "-0.99",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.99
        },
        "beta_sector": {
          "median": 0.03759230439461588,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.04",
          "display_range": null,
          "display_text": "0.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.04% stock move in the same direction in this state.",
          "value_num": 0.04
        },
        "beta_market_lag": {
          "median": -0.02725837474933223,
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
          "median": -0.08415523001090057,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.08",
          "display_range": null,
          "display_text": "-0.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.08
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
          "period_label": "2025-05-15 to 2025-05-30",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.619028158922175,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.9%",
            "display_range": null,
            "display_text": "61.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 61.9,
            "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2626659124640426,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Market explains about 26.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1183059286137824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Sector explains about 11.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.619028158922175,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
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
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.9999999999999992,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "100.0%",
            "display_range": null,
            "display_text": "100.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 100.0,
            "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 3.0744311359234196e-16,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Market explains about 0.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 4.2446781597751677e-16,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Sector explains about 0.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.9999999999999992,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "100.0%",
              "display_range": null,
              "display_text": "100.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 100.0,
              "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven, though based on only 6 trading days."
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
            "median": 0.005572531679475251,
            "low": 0.005572531679475251,
            "high": 0.005572531679475251
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
            "median": 0.010721204835100933,
            "low": 0.010721204835100933,
            "high": 0.010721204835100933
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
        "market_link_display": "0.01",
        "sector_link_display": "0.04",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.04% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.99",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 97.6,
        "driver_share_display": "97.6%",
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
            "median": 0.005572531679475251,
            "low": 0.005572531679475251,
            "high": 0.005572531679475251
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
            "median": 0.010721204835100933,
            "low": 0.010721204835100933,
            "high": 0.010721204835100933
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
    "liq_subtitle": "Liquidity looks mixed for the company’s size, with a 6M score 2.0 points below the peer median and a still-orderly 2-tick spread.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have outperformed both peers and the market, with the stock up 3.9% over one month compared with peers at 1.5% and the market at -0.7%.",
    "perf_insight": "Price performance is stronger than the main comparison groups, while current moves are being driven mainly by company-specific factors at 97.6%.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price moves are being driven overwhelmingly by company-specific factors, with stock-specific drivers accounting for 97.6% of the current move.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 97.6% of price changes. Other influences are market 1.3%, and sector 1.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 1.3%, sector 1.1%, and company-specific 97.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 1.3%, sector 1.1%, and company-specific 97.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because company developments are likely to matter more than broader market moves right now, while a 2-tick spread and bid depth at 0.77x of ask depth keep execution orderly but not especially deep.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price action is overwhelmingly company-driven at 97.6%.",
      "Monthly change: the pattern has stayed company-driven from March through"
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look orderly, with a 2-tick spread and displayed depth that is broadly balanced overall.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from May 13, 2025 to May 11, 2026 (253 trading days • 100,702 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book looks orderly because the spread is 2 ticks, although the bid side is lighter at 0.77x of ask depth, which keeps the liquidity picture balanced rather than strong.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Execution conditions look orderly on screen, with a 2-tick spread and displayed depth that remains broadly balanced.",
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
    "intraday_insight": "Immediate trading access looks steady because the spread is 2 ticks, although bid depth at 0.77x of ask depth shows buying interest is somewhat thinner on screen. That matters because execution is still orderly, but liquidity is not especially deep on the bid side.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Price action is being driven mainly by company-specific factors.",
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
    "exec_subtitle": "Trading access looks serviceable for the company’s size, with peer standing slightly below median and current execution still orderly.",
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
        "value": "0.75%",
        "sub": "1.00 ticks; peers 0.69%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks mixed rather than standout for the company’s size. The 6M liquidity score of 85.1 sits 2.0 points below the peer median of 87.1, which matters because peer-relative access is not clearly strong or weak. Near-term execution remains orderly with a 2-tick spread, although displayed bid depth at 0.77x of ask depth shows buying interest is somewhat thinner on screen. That leaves tradability serviceable overall, but still a step behind stronger peer liquidity.",
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
        "value": "0.77x",
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
        "text": "Estimated impact ~-0.76% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.69% with 82.9% fill.",
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
        "subtext": "Rank 84/558",
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
        "subtext": "0.75% • 1.00 ticks vs peers 0.69%",
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
        "value": "97.6",
        "suffix": "company-specific",
        "bar_pct": 98,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 1.3% • Sector 1.1%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity looks mixed for the company’s size. The 6M liquidity score is 85.1 compared with a peer median of 87.1, which matters because peer-relative access looks serviceable rather than clearly strong.",
      "Recent performance is firmer than the main comparison groups. The stock returned 3.9% over 1M, ahead of peers at 1.5% and the market at -0.7%, which matters because the return backdrop is stronger even as liquidity remains only middle-of-the-pack for its size.",
      "Near-term execution looks orderly, but the bid side is thinner than the ask. Displayed bid depth is 0.77x ask depth and spread is 2 ticks, while company-specific factors account for 97.6% of current price moves, which matters because stock news is likely to drive trading outcomes more than broader market moves."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 87.1 (-2.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -3.6%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -3.6% vs market 10.2%.",
        "vs_sector": "Worse than sector: -3.6% vs sector -1.8%.",
        "vs_peers": "Better than peers: -3.6% vs peers -16.1%."
      },
      "adv": {
        "insight": "ADV is S$568.0K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$568.0K vs market S$11.4K.",
        "vs_sector": "Worse than sector: S$568.0K vs sector S$641.4K.",
        "vs_peers": "Worse than peers: S$568.0K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.89%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.69%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.27%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.27% vs market 45.89%.",
        "vs_sector": "Better than sector: 14.27% vs sector 16.58%.",
        "vs_peers": "Better than peers: 14.27% vs peers 16.43%."
      },
      "trades": {
        "insight": "Trades is 348, better than market, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 348 vs market 7.",
        "vs_sector": "In line with sector: 348 vs sector 386.",
        "vs_peers": "Worse than peers: 348 vs peers 730."
      },
      "amihud": {
        "insight": "Price impact is 5.45e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.45e-09 vs market 1.71e-07.",
        "vs_sector": "In line with sector: 5.45e-09 vs sector 5.45e-09.",
        "vs_peers": "In line with peers: 5.45e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 3.9% one-month gain compared with 1.5% for peers and -0.7% for the market. Liquidity gives a mixed read on that strength because the six-month liquidity score of 85.1 is 2.0 points below the peer median of 87.1, even though the current spread is 2 ticks with displayed bid depth at 0.77x of ask depth. The move looks company-specific rather than broad-market, with stock-specific drivers accounting for 97.6% of current price action.",
      "conclusion": "The recent outperformance looks company-specific, with liquidity broadly supportive in the near term but not clearly stronger than peers overall."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors, with 97.6% of the current move tied to stock-level drivers. That matters because near-term trading is more likely to respond to company developments than to market direction, even as the 1M return of +3.9% sits ahead of peers at +1.5% and the market at -0.7%.",
      "beta": "Broader market and sector influences are currently minor relative to the company-specific driver. For trading conditions, that leaves the tape broadly balanced rather than stressed, with a 2-tick spread and displayed bid depth at 0.77x of ask depth.",
      "rolling_change": "This looks more persistent than temporary because the stock was mostly company-driven in March and April and remains clearly company-driven in May. The monthly pattern has therefore stayed consistent rather than shifting to a more market-led move."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Low Volatility is the active state now, pointing to a calmer tape than a higher-volatility backdrop would imply.",
      "transitions": "This state looks reasonably persistent rather than short-lived, with a typical run length of about 10.4 days.",
      "trading_implications": "Trading conditions look fairly steady at the moment, although the lighter bid side relative to the ask means depth is not fully even despite the calmer state."
    },
    "execution": {
      "overall": "displayed bid depth is 0.77x ask depth; spread is 2 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The clearest stress point is the thinner buy side, with displayed bid depth at 0.77x of ask depth. That imbalance matters because selling pressure would meet less visible support than buying interest.",
      "peer_context": "Immediate displayed depth broadly matches the stronger monthly liquidity read."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base is not clearly dominated by one participant type. That matters because count and value point in different directions.",
      "retail_heavy": "Retail-like trades account for 37.2% of individual trade count but only 2.9% of trade value, while institution-like trades are 21.7% of count and 53.2% of value. That mix shows broad participation by count, but most value is coming from larger institutional-style tickets.",
      "institutional_gap": "",
      "peer_comparison": "The mix looks balanced rather than extreme relative to peers, with retail-like activity prominent by count and institution-like activity dominant by value. That matters because the shareholder flow base appears broad rather than unusually concentrated in one segment."
    },
    "price_moving": {
      "overall": "Price moves are being driven mainly by company-specific factors, with 97.6% of the current driver mix tied to stock-specific news. That matters because trading signals are more likely to reflect company developments than broader market moves. The signal is reasonably clean because stock-specific drivers dominate, while the trade mix itself is split between higher retail-like count and higher institution-like value. That leaves price formation supported by company news, but with a mixed underlying participant base.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture. The 1M average short ratio is 2.99%, and the stock has outperformed peers by 1.5% over the past month, which points away from short pressure as a key influence on trading conditions.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning has fallen quickly, with shorts covering by 50% month on month. That reduces the chance that short activity is adding separate pressure to liquidity, although the signal is mixed rather than decisive.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.8%, continuous 86.7%, and close 8.3%. Current trading concentration score is 0.231.",
      "hhi_interpretation": "The concentration score of 0.231 indicates trading is spread across the session rather than packed into a narrow part of the day. That supports a steadier intraday flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity, accounting for 86.7% of activity. That matters because access appears strongest during regular market hours rather than at the open or close.",
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
        85.12544802867383,
        87.09677419354838
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        568043.5,
        1095909.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.1426771070207857,
        "adv": 568043.5,
        "spread_pct": 0.007453092738608056,
        "turnover_ratio": 0.001854895449675633,
        "amihud": 5.4491452128808115e-09,
        "trades": 348.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.689698341771711,
          "median": 0.4589330888826322,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.15215336061051565,
          "p95": 2.0327051721936935,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2681569.052689906,
          "median": 11404.8,
          "min": 0.0,
          "max": 254635655.60000002,
          "p5": 0.0,
          "p95": 11026497.774999997,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09584698996590349,
          "median": 0.028862152800279553,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.00361164649377225,
          "p95": 0.4842107894295187,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003363398313565149,
          "median": 0.00026713472720175507,
          "min": 0.0,
          "max": 0.8832641223386725,
          "p5": 0.0,
          "p95": 0.007410214570572808,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.70365494524762e-06,
          "median": 1.7123592611923244e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.937763288528176e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 391.3198924731183,
          "median": 6.75,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2177.3,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3534283896458266,
          "median": 0.16582671568380003,
          "min": 0.11513324246816618,
          "max": 1.348762795826435,
          "p5": 0.12477359506158302,
          "p95": 1.0724550814840164,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8741777.304175619,
          "median": 641375.5,
          "min": 0.0,
          "max": 56980400.5,
          "p5": 12598.705000000002,
          "p95": 40693202.649999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.035529899300482934,
          "median": 0.008095915303858978,
          "min": 0.0042712193330027145,
          "max": 0.13333333333333333,
          "p5": 0.004341220892293637,
          "p95": 0.12485378567011218,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023001545832938494,
          "median": 0.0011641626926714003,
          "min": 0.0,
          "max": 0.006798887688199187,
          "p5": 8.386602361773384e-05,
          "p95": 0.006609259984767035,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.34005592743234e-07,
          "median": 5.453776247806839e-09,
          "min": 0.0,
          "max": 7.421899249138285e-06,
          "p5": 3.229281837465633e-11,
          "p95": 4.835563711458106e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1118.75,
          "median": 386.5,
          "min": 0.0,
          "max": 5573.5,
          "p5": 7.875000000000001,
          "p95": 4257.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1095909.5,
          "median": 1095909.5,
          "min": 1095909.5,
          "max": 1095909.5,
          "p5": 1095909.5,
          "p95": 1095909.5,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 730.5,
          "median": 730.5,
          "min": 730.5,
          "max": 730.5,
          "p5": 730.5,
          "p95": 730.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.16430111280784498,
          "median": 0.16430111280784498,
          "min": 0.16430111280784498,
          "max": 0.16430111280784498,
          "p5": 0.16430111280784498,
          "p95": 0.16430111280784498,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006915284289912262,
          "median": 0.006915284289912262,
          "min": 0.006915284289912262,
          "max": 0.006915284289912262,
          "p5": 0.006915284289912262,
          "p95": 0.006915284289912262,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0044129029036526,
          "median": 1.0044129029036526,
          "min": 1.0044129029036526,
          "max": 1.0044129029036526,
          "p5": 1.0044129029036526,
          "p95": 1.0044129029036526,
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
        "stock": 0.03875968992248047,
        "market": -0.006893611928115995,
        "sector": 0.019827251123420986,
        "peers": 0.015037593984962516
      },
      {
        "horizon": "3M",
        "stock": -0.014705882352940902,
        "market": -0.0066521225186154664,
        "sector": -0.0077545487211930775,
        "peers": -0.13461538461538414
      },
      {
        "horizon": "6M",
        "stock": -0.03597122302158273,
        "market": 0.10206929362914119,
        "sector": -0.01808340182908008,
        "peers": -0.16149068322981408
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
      "share_market": 0.013258584964681285,
      "share_sector": 0.011166066527697145,
      "share_idio": 0.9755753485076216,
      "beta_market": 0.014196067461552012,
      "beta_sector": 0.03759230439461588,
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
            "median": 0.013258584964681285,
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
            "median": 0.011166066527697145,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.1%",
            "display_range": null,
            "display_text": "1.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 1.1,
            "plain_english": "Sector explains about 1.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.9755753485076216,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "97.6%",
            "display_range": null,
            "display_text": "97.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 97.6,
            "plain_english": "Company-specific explains about 97.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.014196067461552012,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.01",
            "display_range": null,
            "display_text": "0.01",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.01% stock move in the same direction in this state.",
            "value_num": 0.01
          },
          "beta_stock_lag": {
            "median": -0.9904693266761179,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.99",
            "display_range": null,
            "display_text": "-0.99",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.99
          },
          "beta_sector": {
            "median": 0.03759230439461588,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.04",
            "display_range": null,
            "display_text": "0.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.04% stock move in the same direction in this state.",
            "value_num": 0.04
          },
          "beta_market_lag": {
            "median": -0.02725837474933223,
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
            "median": -0.08415523001090057,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.08",
            "display_range": null,
            "display_text": "-0.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.08
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
            "period_label": "2025-05-15 to 2025-05-30",
            "n_obs": 12,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.619028158922175,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.9%",
              "display_range": null,
              "display_text": "61.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 61.9,
              "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2626659124640426,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Market explains about 26.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1183059286137824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Sector explains about 11.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.619028158922175,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.9%",
                "display_range": null,
                "display_text": "61.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 61.9,
                "plain_english": "Company-specific explains about 61.9% of price moves in the current state."
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
            "period_label": "2026-05-04 to 2026-05-11",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.9999999999999992,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "100.0%",
              "display_range": null,
              "display_text": "100.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 100.0,
              "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 3.0744311359234196e-16,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Market explains about 0.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 4.2446781597751677e-16,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Sector explains about 0.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.9999999999999992,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "100.0%",
                "display_range": null,
                "display_text": "100.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 100.0,
                "plain_english": "Company-specific explains about 100.0% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven, though based on only 6 trading days."
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
              "median": 0.005572531679475251,
              "low": 0.005572531679475251,
              "high": 0.005572531679475251
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
              "median": 0.010721204835100933,
              "low": 0.010721204835100933,
              "high": 0.010721204835100933
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
          "market_link_display": "0.01",
          "sector_link_display": "0.04",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.01% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.04% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.99",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 97.6,
          "driver_share_display": "97.6%",
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
          "period_label": "2025-05-15 to 2025-05-30",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.2626659124640426,
          "share_sector": 0.1183059286137824,
          "share_company": 0.619028158922175,
          "share_market_display": "26.3%",
          "share_sector_display": "11.8%",
          "share_company_display": "61.9%",
          "dominant_share_display": "61.9%"
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
          "period_label": "2026-05-04 to 2026-05-11",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven, though based on only 6 trading days.",
          "share_market": 3.0744311359234196e-16,
          "share_sector": 4.2446781597751677e-16,
          "share_company": 0.9999999999999992,
          "share_market_display": "0.0%",
          "share_sector_display": "0.0%",
          "share_company_display": "100.0%",
          "dominant_share_display": "100.0%"
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
              "median": 0.005572531679475251,
              "low": 0.005572531679475251,
              "high": 0.005572531679475251
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
              "median": 0.010721204835100933,
              "low": 0.010721204835100933,
              "high": 0.010721204835100933
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
          "price": 0.66,
          "quantity": 1507000.0,
          "value": 994620.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 258100.0,
          "value": 169055.5
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 361600.0,
          "value": 235040.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 123200.0,
          "value": 79464.0
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 166800.0,
          "value": 106752.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 109400.0,
          "value": 69469.0
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 352400.0,
          "value": 222012.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 96400.0,
          "value": 60250.0
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 74200.0,
          "value": 46004.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 8600.0,
          "value": 5289.0
        },
        {
          "level": 11,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
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
          "quantity": 11800.0,
          "value": 7080.0
        },
        {
          "level": 14,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 15,
          "price": 0.57,
          "quantity": 34000.0,
          "value": 19380.0
        },
        {
          "level": 16,
          "price": 0.565,
          "quantity": 10500.0,
          "value": 5932.499999999999
        },
        {
          "level": 17,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 18,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 19,
          "price": 0.52,
          "quantity": 3000.0,
          "value": 1560.0
        },
        {
          "level": 20,
          "price": 0.515,
          "quantity": 7000.0,
          "value": 3605.0
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
          "quantity": 594300.0,
          "value": 398181.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 301500.0,
          "value": 203512.5
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 389600.0,
          "value": 264928.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 415800.0,
          "value": 284823.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1170200.0,
          "value": 807437.9999999999
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
          "quantity": 142400.0,
          "value": 99680.0
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
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 17,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
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
        "snapshot_time": "2026-05-11 08:59:48.379000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.665,
        "spread_pct": 0.015037593984962419,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2072933.0,
        "ask_depth_notional_displayed": 2694653.0,
        "bid_depth_notional_top10": 2072933.0,
        "ask_depth_notional_top10": 2694653.0,
        "bid_ask_depth_ratio": 0.7693
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 364,
        "history_limited": true,
        "trade_days_used": 253,
        "n_trades_used": 100702,
        "first_trade_date": "2025-05-13",
        "last_trade_date": "2026-05-11",
        "window_label": "May 13, 2025 to May 11, 2026",
        "window_short_label": "May 13, 2025 to May 11, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "100,702 trades",
        "window_detail_label": "253 trading days • 100,702 trades",
        "history_note": "Trade-size percentiles use available history from May 13, 2025 to May 11, 2026 (253 trading days • 100,702 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.16,
            "pct_of_adv": 0.6
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7937.97,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.38,
            "pct_of_adv": 1.4
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339474.25,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.38,
            "pct_of_adv": 59.84
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-11",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8145139807368471552",
            "timestamp": "2026-05-10 22:59:01.740400000",
            "local_timestamp": "2026-05-11 06:59:01",
            "posted_price": 0.67,
            "size_shares": 2025600.0,
            "notional": 1357152.0,
            "impact_pct": -0.010629999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 65.47,
            "price_vs_mid_pct": 0.752,
            "executed_event_count": 0,
            "event_count": 4
          },
          {
            "rank": 2,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-10 22:59:01.740400000",
            "local_timestamp": "2026-05-11 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 33.29,
            "price_vs_mid_pct": 3.759,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8145931455742038016",
            "timestamp": "2026-05-10 22:59:01.740400000",
            "local_timestamp": "2026-05-11 06:59:01",
            "posted_price": 0.675,
            "size_shares": 500000.0,
            "notional": 337500.0,
            "impact_pct": -0.0075190000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.28,
            "price_vs_mid_pct": 1.504,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-11",
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
            "bid_depth_notional": 2503467.5,
            "ask_depth_notional": 4254495.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2505870.5,
            "ask_depth_notional": 4270760.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2027117.5,
            "ask_depth_notional": 2611981.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2070892.0,
            "ask_depth_notional": 2665590.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2110357.5,
            "ask_depth_notional": 2659024.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2032065.5,
            "ask_depth_notional": 2742551.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2075757.5,
            "ask_depth_notional": 2749123.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2046732.5,
            "ask_depth_notional": 2761219.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2132388.5,
            "ask_depth_notional": 2760528.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2094438.5,
            "ask_depth_notional": 2762795.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2090610.5,
            "ask_depth_notional": 2765389.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2089554.5,
            "ask_depth_notional": 2766770.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2094326.5,
            "ask_depth_notional": 2778208.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2072933.0,
            "ask_depth_notional": 2694653.0,
            "mid_price": 0.665
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2090082.5,
          "median_ask_depth_notional": 2760873.75,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "09:30",
          "thinnest_bid_bucket": "10:00"
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
          "n_trades": 564,
          "n_runs": 381,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-11",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.41134751773049644,
            "mixed_pct": 0.22872340425531915,
            "instit_pct": 0.20390070921985815,
            "ambiguous_pct": 0.15602836879432624,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15602836879432624,
            "retail_qty_pct": 0.03856450329209175,
            "mixed_qty_pct": 0.08653498299688879,
            "instit_qty_pct": 0.7516098690398668,
            "ambiguous_qty_pct": 0.1232906446711526,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1232906446711526,
            "retail_notional_pct": 0.03846815375722418,
            "mixed_notional_pct": 0.0862132967275807,
            "instit_notional_pct": 0.7520495483972102,
            "ambiguous_notional_pct": 0.12326900111798497,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12326900111798497
          },
          "run_composition": {
            "retail_pct": 0.5879265091863517,
            "mixed_pct": 0.24671916010498687,
            "instit_pct": 0.06299212598425197,
            "ambiguous_pct": 0.10236220472440945,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10236220472440945,
            "retail_notional_pct": 0.03846815375722418,
            "mixed_notional_pct": 0.0862132967275807,
            "instit_notional_pct": 0.7520495483972102,
            "unclear_notional_pct": 0.12326900111798497
          },
          "counts": {
            "trades": {
              "retail": 232,
              "mixed": 129,
              "institutional": 115,
              "ambiguous": 88,
              "unobservable": 0,
              "unclear": 88
            },
            "runs": {
              "retail": 224,
              "mixed": 94,
              "institutional": 24,
              "ambiguous": 39,
              "unobservable": 0,
              "unclear": 39
            }
          },
          "confidence": {
            "high": 0.6509186351706037,
            "medium": 0.24671916010498687,
            "low": 0.10236220472440945,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 248,
            "medium": 94,
            "low": 39,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.6152482269503546,
            "medium": 0.22872340425531915,
            "low": 0.15602836879432624,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 347,
            "medium": 129,
            "low": 88,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8751968503937007,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10236220472440945,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5879265091863517,
          "dominance_gap": 0.34120734908136485,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 535,
              "WALK_BOOK": 29
            },
            "d2_information": {
              "UNOBSERVABLE": 564
            },
            "d3_urgency": {
              "UNOBSERVABLE": 381
            },
            "participant_confidence": {
              "HIGH": 248,
              "MEDIUM": 94,
              "LOW": 39
            }
          },
          "trade_size": {
            "avg": 1628.7535460992908,
            "median": 133.0
          },
          "run_size": {
            "avg": 2411.0682414698163,
            "median": 264.0,
            "avg_length": 1.2230971128608923
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-05-11T08:59:29.043400",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-05-11T08:59:23.018000",
              "price": 0.66,
              "size": 1600.0,
              "notional": 1056.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-573",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2400.0,
              "notional": 1596.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-572",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-571",
              "timestamp": "2026-05-11T08:59:08.814600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-570",
              "timestamp": "2026-05-11T08:59:00.618200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-569",
              "timestamp": "2026-05-11T08:58:35.510800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-568",
              "timestamp": "2026-05-11T08:58:16.299700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-567",
              "timestamp": "2026-05-11T08:58:08.027700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-566",
              "timestamp": "2026-05-11T08:57:40.487000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-565",
              "timestamp": "2026-05-11T08:57:13.534400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47675,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-564",
              "timestamp": "2026-05-11T08:56:45.055600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47674,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-563",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-562",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-561",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-560",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-559",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-558",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 15700.0,
              "notional": 10440.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-557",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-556",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 10000.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-555",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-554",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-553",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 25000.0,
              "notional": 16625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-552",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-551",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-550",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 1000.0,
              "notional": 665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-549",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-548",
              "timestamp": "2026-05-11T08:56:11.418500",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.41134751773049644,
              "mixed_pct": 0.22872340425531915,
              "instit_pct": 0.20390070921985815,
              "ambiguous_pct": 0.15602836879432624,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15602836879432624,
              "retail_qty_pct": 0.03856450329209175,
              "mixed_qty_pct": 0.08653498299688879,
              "instit_qty_pct": 0.7516098690398668,
              "ambiguous_qty_pct": 0.1232906446711526,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1232906446711526,
              "retail_notional_pct": 0.03846815375722418,
              "mixed_notional_pct": 0.0862132967275807,
              "instit_notional_pct": 0.7520495483972102,
              "ambiguous_notional_pct": 0.12326900111798497,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12326900111798497,
              "run_retail_pct": 0.5879265091863517,
              "run_mixed_pct": 0.24671916010498687,
              "run_instit_pct": 0.06299212598425197,
              "run_unclear_pct": 0.10236220472440945,
              "avg_trade_size": 1628.7535460992908,
              "avg_run_notional": 2411.0682414698163,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6509186351706037,
              "medium_confidence_pct": 0.24671916010498687,
              "low_confidence_pct": 0.10236220472440945,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8751968503937007,
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
              "retail_pct": 0.5492424242424242,
              "mixed_pct": 0.0,
              "instit_pct": 0.45075757575757575,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.1107262804366079,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8892737195633921,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.11074154563765504,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.889258454362345,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.811965811965812,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.18803418803418803,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1214.8560606060605,
              "avg_run_notional": 1827.4757834757834,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.811965811965812,
              "low_confidence_pct": 0.18803418803418803,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4773504273504274,
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
          "n_trades": 8434,
          "n_runs": 4531,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.31953995731562723,
            "mixed_pct": 0.2774484230495613,
            "instit_pct": 0.24922930993597345,
            "ambiguous_pct": 0.15378230969883805,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15378230969883805,
            "retail_qty_pct": 0.02832452692678102,
            "mixed_qty_pct": 0.17497071761368074,
            "instit_qty_pct": 0.5567557718837034,
            "ambiguous_qty_pct": 0.23994898357583488,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23994898357583488,
            "retail_notional_pct": 0.028313485989257477,
            "mixed_notional_pct": 0.17493169951068435,
            "instit_notional_pct": 0.5565613758562749,
            "ambiguous_notional_pct": 0.24019343864378329,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24019343864378329
          },
          "run_composition": {
            "retail_pct": 0.584859854336791,
            "mixed_pct": 0.255131317589936,
            "instit_pct": 0.05694107261090267,
            "ambiguous_pct": 0.10306775546237033,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10306775546237033,
            "retail_notional_pct": 0.028313485989257477,
            "mixed_notional_pct": 0.17493169951068435,
            "instit_notional_pct": 0.5565613758562749,
            "unclear_notional_pct": 0.24019343864378329
          },
          "counts": {
            "trades": {
              "retail": 2695,
              "mixed": 2340,
              "institutional": 2102,
              "ambiguous": 1297,
              "unobservable": 0,
              "unclear": 1297
            },
            "runs": {
              "retail": 2650,
              "mixed": 1156,
              "institutional": 258,
              "ambiguous": 467,
              "unobservable": 0,
              "unclear": 467
            }
          },
          "confidence": {
            "high": 0.6418009269476936,
            "medium": 0.255131317589936,
            "low": 0.10306775546237033,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2908,
            "medium": 1156,
            "low": 467,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5687692672516007,
            "medium": 0.2774484230495613,
            "low": 0.15378230969883805,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4797,
            "medium": 2340,
            "low": 1297,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8815272566762303,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10306775546237033,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.584859854336791,
          "dominance_gap": 0.329728536746855,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 8077,
              "WALK_BOOK": 353,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 8434
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4531
            },
            "participant_confidence": {
              "HIGH": 2908,
              "MEDIUM": 1156,
              "LOW": 467
            }
          },
          "trade_size": {
            "avg": 1509.2970120939056,
            "median": 132.0
          },
          "run_size": {
            "avg": 2809.4043257559038,
            "median": 133.0,
            "avg_length": 1.49746192893401
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-05-11T08:59:29.043400",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-05-11T08:59:23.018000",
              "price": 0.66,
              "size": 1600.0,
              "notional": 1056.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-573",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2400.0,
              "notional": 1596.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-572",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-571",
              "timestamp": "2026-05-11T08:59:08.814600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-570",
              "timestamp": "2026-05-11T08:59:00.618200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-569",
              "timestamp": "2026-05-11T08:58:35.510800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-568",
              "timestamp": "2026-05-11T08:58:16.299700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-567",
              "timestamp": "2026-05-11T08:58:08.027700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-566",
              "timestamp": "2026-05-11T08:57:40.487000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-565",
              "timestamp": "2026-05-11T08:57:13.534400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47675,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-564",
              "timestamp": "2026-05-11T08:56:45.055600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47674,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-563",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-562",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-561",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-560",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-559",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-558",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 15700.0,
              "notional": 10440.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-557",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-556",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 10000.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-555",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-554",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-553",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 25000.0,
              "notional": 16625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-552",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-551",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-550",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 1000.0,
              "notional": 665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-549",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-548",
              "timestamp": "2026-05-11T08:56:11.418500",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.31953995731562723,
              "mixed_pct": 0.2774484230495613,
              "instit_pct": 0.24922930993597345,
              "ambiguous_pct": 0.15378230969883805,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15378230969883805,
              "retail_qty_pct": 0.02832452692678102,
              "mixed_qty_pct": 0.17497071761368074,
              "instit_qty_pct": 0.5567557718837034,
              "ambiguous_qty_pct": 0.23994898357583488,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23994898357583488,
              "retail_notional_pct": 0.028313485989257477,
              "mixed_notional_pct": 0.17493169951068435,
              "instit_notional_pct": 0.5565613758562749,
              "ambiguous_notional_pct": 0.24019343864378329,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24019343864378329,
              "run_retail_pct": 0.584859854336791,
              "run_mixed_pct": 0.255131317589936,
              "run_instit_pct": 0.05694107261090267,
              "run_unclear_pct": 0.10306775546237033,
              "avg_trade_size": 1509.2970120939056,
              "avg_run_notional": 2809.4043257559038,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6418009269476936,
              "medium_confidence_pct": 0.255131317589936,
              "low_confidence_pct": 0.10306775546237033,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8815272566762303,
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
              "retail_pct": 0.5042919861083809,
              "mixed_pct": 0.03459799488893257,
              "instit_pct": 0.45888211781665683,
              "ambiguous_pct": 0.002227901186029749,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002227901186029749,
              "retail_qty_pct": 0.21385629451258087,
              "mixed_qty_pct": 0.004971124216884681,
              "instit_qty_pct": 0.78103381425627,
              "ambiguous_qty_pct": 0.0001387670142644328,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0001387670142644328,
              "retail_notional_pct": 0.21438361996061692,
              "mixed_notional_pct": 0.004978540041176581,
              "instit_notional_pct": 0.7804972853803196,
              "ambiguous_notional_pct": 0.00014055461788692265,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00014055461788692265,
              "run_retail_pct": 0.7935789938217123,
              "run_mixed_pct": 0.027471315092674316,
              "run_instit_pct": 0.17707413945278022,
              "run_unclear_pct": 0.0018755516328331863,
              "avg_trade_size": 1084.3802503112508,
              "avg_run_notional": 1825.7642321270962,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7308031774051191,
              "low_confidence_pct": 0.26919682259488087,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48162511032656674,
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
          "n_trades": 23930,
          "n_runs": 14043,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-06",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.3543669034684496,
            "mixed_pct": 0.2849561220225658,
            "instit_pct": 0.22553280401170078,
            "ambiguous_pct": 0.13514417049728375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13514417049728375,
            "retail_qty_pct": 0.02296778040945378,
            "mixed_qty_pct": 0.1748940922311799,
            "instit_qty_pct": 0.5615446500402252,
            "ambiguous_qty_pct": 0.24059347731914105,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24059347731914105,
            "retail_notional_pct": 0.022932654980226615,
            "mixed_notional_pct": 0.17596689762893136,
            "instit_notional_pct": 0.5604070927655773,
            "ambiguous_notional_pct": 0.24069335462526473,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24069335462526473
          },
          "run_composition": {
            "retail_pct": 0.597735526596881,
            "mixed_pct": 0.2514419995727409,
            "instit_pct": 0.0510574663533433,
            "ambiguous_pct": 0.09976500747703482,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09976500747703482,
            "retail_notional_pct": 0.022932654980226615,
            "mixed_notional_pct": 0.17596689762893136,
            "instit_notional_pct": 0.5604070927655773,
            "unclear_notional_pct": 0.24069335462526473
          },
          "counts": {
            "trades": {
              "retail": 8480,
              "mixed": 6819,
              "institutional": 5397,
              "ambiguous": 3234,
              "unobservable": 0,
              "unclear": 3234
            },
            "runs": {
              "retail": 8394,
              "mixed": 3531,
              "institutional": 717,
              "ambiguous": 1401,
              "unobservable": 0,
              "unclear": 1401
            }
          },
          "confidence": {
            "high": 0.6487217830947803,
            "medium": 0.25151320942818484,
            "low": 0.09976500747703482,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9110,
            "medium": 3532,
            "low": 1401,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5798161303802758,
            "medium": 0.2850396991224404,
            "low": 0.13514417049728375,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13875,
            "medium": 6821,
            "low": 3234,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8776187424339527,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09976500747703482,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.597735526596881,
          "dominance_gap": 0.3462935270241401,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23039,
              "WALK_BOOK": 885,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23930
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14043
            },
            "participant_confidence": {
              "HIGH": 9110,
              "MEDIUM": 3532,
              "LOW": 1401
            }
          },
          "trade_size": {
            "avg": 1973.1670079398245,
            "median": 132.0
          },
          "run_size": {
            "avg": 3362.37887203589,
            "median": 135.0,
            "avg_length": 1.360749127679271
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-05-11T08:59:29.043400",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-05-11T08:59:23.018000",
              "price": 0.66,
              "size": 1600.0,
              "notional": 1056.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-573",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2400.0,
              "notional": 1596.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-572",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-571",
              "timestamp": "2026-05-11T08:59:08.814600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-570",
              "timestamp": "2026-05-11T08:59:00.618200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-569",
              "timestamp": "2026-05-11T08:58:35.510800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-568",
              "timestamp": "2026-05-11T08:58:16.299700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-567",
              "timestamp": "2026-05-11T08:58:08.027700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-566",
              "timestamp": "2026-05-11T08:57:40.487000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-565",
              "timestamp": "2026-05-11T08:57:13.534400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47675,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-564",
              "timestamp": "2026-05-11T08:56:45.055600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47674,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-563",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-562",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-561",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-560",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-559",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-558",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 15700.0,
              "notional": 10440.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-557",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-556",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 10000.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-555",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-554",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-553",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 25000.0,
              "notional": 16625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-552",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-551",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-550",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 1000.0,
              "notional": 665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-549",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-548",
              "timestamp": "2026-05-11T08:56:11.418500",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3543669034684496,
              "mixed_pct": 0.2849561220225658,
              "instit_pct": 0.22553280401170078,
              "ambiguous_pct": 0.13514417049728375,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13514417049728375,
              "retail_qty_pct": 0.02296778040945378,
              "mixed_qty_pct": 0.1748940922311799,
              "instit_qty_pct": 0.5615446500402252,
              "ambiguous_qty_pct": 0.24059347731914105,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24059347731914105,
              "retail_notional_pct": 0.022932654980226615,
              "mixed_notional_pct": 0.17596689762893136,
              "instit_notional_pct": 0.5604070927655773,
              "ambiguous_notional_pct": 0.24069335462526473,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24069335462526473,
              "run_retail_pct": 0.597735526596881,
              "run_mixed_pct": 0.2514419995727409,
              "run_instit_pct": 0.0510574663533433,
              "run_unclear_pct": 0.09976500747703482,
              "avg_trade_size": 1973.1670079398245,
              "avg_run_notional": 3362.37887203589,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6487217830947803,
              "medium_confidence_pct": 0.25151320942818484,
              "low_confidence_pct": 0.09976500747703482,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8776187424339527,
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
              "retail_pct": 0.45262628801206334,
              "mixed_pct": 0.04855850357232614,
              "instit_pct": 0.4964815280221161,
              "ambiguous_pct": 0.002333680393494417,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002333680393494417,
              "retail_qty_pct": 0.2155369308912405,
              "mixed_qty_pct": 0.03398865962479039,
              "instit_qty_pct": 0.7498583670573951,
              "ambiguous_qty_pct": 0.0006160424265740736,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0006160424265740736,
              "retail_notional_pct": 0.216184371573754,
              "mixed_notional_pct": 0.03502115613808823,
              "instit_notional_pct": 0.7481783450468931,
              "ambiguous_notional_pct": 0.0006161272412646592,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0006161272412646592,
              "run_retail_pct": 0.7801158231718284,
              "run_mixed_pct": 0.03726484658825222,
              "run_instit_pct": 0.18053307434984353,
              "run_unclear_pct": 0.0020862558900758966,
              "avg_trade_size": 1511.8298477722328,
              "avg_run_notional": 3029.315258443941,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6968814071436279,
              "low_confidence_pct": 0.30311859285637205,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4871317578504371,
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
          "n_trades": 45556,
          "n_runs": 27864,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-07",
          "last_trade_date": "2026-05-11",
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
            "retail_pct": 0.37226709983317235,
            "mixed_pct": 0.2840240583018702,
            "instit_pct": 0.21716129598735623,
            "ambiguous_pct": 0.1265475458776012,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1265475458776012,
            "retail_qty_pct": 0.029400062343033672,
            "mixed_qty_pct": 0.1901378051366267,
            "instit_qty_pct": 0.533358169176016,
            "ambiguous_qty_pct": 0.2471039633443236,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2471039633443236,
            "retail_notional_pct": 0.029446447319056553,
            "mixed_notional_pct": 0.19112310782236278,
            "instit_notional_pct": 0.5319953899819763,
            "ambiguous_notional_pct": 0.24743505487660442,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24743505487660442
          },
          "run_composition": {
            "retail_pct": 0.6015288544358312,
            "mixed_pct": 0.2513996554694229,
            "instit_pct": 0.05404823428079242,
            "ambiguous_pct": 0.09302325581395349,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09302325581395349,
            "retail_notional_pct": 0.02944562248827808,
            "mixed_notional_pct": 0.1911232702494863,
            "instit_notional_pct": 0.5319958421014606,
            "unclear_notional_pct": 0.2474352651607751
          },
          "counts": {
            "trades": {
              "retail": 16959,
              "mixed": 12939,
              "institutional": 9893,
              "ambiguous": 5765,
              "unobservable": 0,
              "unclear": 5765
            },
            "runs": {
              "retail": 16761,
              "mixed": 7005,
              "institutional": 1506,
              "ambiguous": 2592,
              "unobservable": 0,
              "unclear": 2592
            }
          },
          "confidence": {
            "high": 0.6555412001148435,
            "medium": 0.251435544071203,
            "low": 0.09302325581395349,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18266,
            "medium": 7006,
            "low": 2592,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5893625428044604,
            "medium": 0.2840679603125823,
            "low": 0.12656949688295724,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26849,
            "medium": 12941,
            "low": 5766,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8769092736146998,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09302325581395349,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6015288544358312,
          "dominance_gap": 0.35012919896640826,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44409,
              "WALK_BOOK": 1140,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 45556
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27864
            },
            "participant_confidence": {
              "HIGH": 18266,
              "MEDIUM": 7006,
              "LOW": 2592
            }
          },
          "trade_size": {
            "avg": 1743.4648783914304,
            "median": 135.0
          },
          "run_size": {
            "avg": 2850.460038041918,
            "median": 137.0,
            "avg_length": 1.3473298880275624
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-05-11T08:59:29.043400",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-05-11T08:59:23.018000",
              "price": 0.66,
              "size": 1600.0,
              "notional": 1056.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-05-11T08:59:16.395100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-573",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2400.0,
              "notional": 1596.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-572",
              "timestamp": "2026-05-11T08:59:08.875000",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-571",
              "timestamp": "2026-05-11T08:59:08.814600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47680,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-570",
              "timestamp": "2026-05-11T08:59:00.618200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47679,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-569",
              "timestamp": "2026-05-11T08:58:35.510800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47678,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-568",
              "timestamp": "2026-05-11T08:58:16.299700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-567",
              "timestamp": "2026-05-11T08:58:08.027700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47677,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-566",
              "timestamp": "2026-05-11T08:57:40.487000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47676,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-565",
              "timestamp": "2026-05-11T08:57:13.534400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47675,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-564",
              "timestamp": "2026-05-11T08:56:45.055600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47674,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-563",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-562",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-561",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-560",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-559",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-558",
              "timestamp": "2026-05-11T08:56:11.418700",
              "price": 0.665,
              "size": 15700.0,
              "notional": 10440.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-557",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-556",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 10000.0,
              "notional": 6650.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-555",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-554",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-553",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 25000.0,
              "notional": 16625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-552",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-551",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-550",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 1000.0,
              "notional": 665.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-549",
              "timestamp": "2026-05-11T08:56:11.418600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-548",
              "timestamp": "2026-05-11T08:56:11.418500",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47673,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.37226709983317235,
              "mixed_pct": 0.2840240583018702,
              "instit_pct": 0.21716129598735623,
              "ambiguous_pct": 0.1265475458776012,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1265475458776012,
              "retail_qty_pct": 0.029400062343033672,
              "mixed_qty_pct": 0.1901378051366267,
              "instit_qty_pct": 0.533358169176016,
              "ambiguous_qty_pct": 0.2471039633443236,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2471039633443236,
              "retail_notional_pct": 0.029446447319056553,
              "mixed_notional_pct": 0.19112310782236278,
              "instit_notional_pct": 0.5319953899819763,
              "ambiguous_notional_pct": 0.24743505487660442,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24743505487660442,
              "run_retail_pct": 0.6015288544358312,
              "run_mixed_pct": 0.2513996554694229,
              "run_instit_pct": 0.05404823428079242,
              "run_unclear_pct": 0.09302325581395349,
              "avg_trade_size": 1743.4648783914304,
              "avg_run_notional": 2850.460038041918,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6555412001148435,
              "medium_confidence_pct": 0.251435544071203,
              "low_confidence_pct": 0.09302325581395349,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8769092736146998,
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
              "retail_pct": 0.48043113721933367,
              "mixed_pct": 0.04727955367595102,
              "instit_pct": 0.47064406922663177,
              "ambiguous_pct": 0.0016452398780835065,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016452398780835065,
              "retail_qty_pct": 0.23343908710288186,
              "mixed_qty_pct": 0.02729211739432905,
              "instit_qty_pct": 0.7388325293498564,
              "ambiguous_qty_pct": 0.00043626615293269216,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00043626615293269216,
              "retail_notional_pct": 0.23528448522318343,
              "mixed_notional_pct": 0.027337204802956806,
              "instit_notional_pct": 0.7369577916296692,
              "ambiguous_notional_pct": 0.000420518344190576,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.000420518344190576,
              "run_retail_pct": 0.792079996812876,
              "run_mixed_pct": 0.03577546711286403,
              "run_instit_pct": 0.17077008884108202,
              "run_unclear_pct": 0.001374447233177961,
              "avg_trade_size": 1495.2927366877946,
              "avg_run_notional": 2824.2333373172382,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7179992828970957,
              "low_confidence_pct": 0.28200071710290425,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48489602007888133,
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
      "n_trades": 45556,
      "n_runs": 27864,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-07",
      "last_trade_date": "2026-05-11",
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
        "retail_pct": 0.37226709983317235,
        "mixed_pct": 0.2840240583018702,
        "instit_pct": 0.21716129598735623,
        "ambiguous_pct": 0.1265475458776012,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1265475458776012,
        "retail_qty_pct": 0.029400062343033672,
        "mixed_qty_pct": 0.1901378051366267,
        "instit_qty_pct": 0.533358169176016,
        "ambiguous_qty_pct": 0.2471039633443236,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2471039633443236,
        "retail_notional_pct": 0.029446447319056553,
        "mixed_notional_pct": 0.19112310782236278,
        "instit_notional_pct": 0.5319953899819763,
        "ambiguous_notional_pct": 0.24743505487660442,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24743505487660442
      },
      "run_composition": {
        "retail_pct": 0.6015288544358312,
        "mixed_pct": 0.2513996554694229,
        "instit_pct": 0.05404823428079242,
        "ambiguous_pct": 0.09302325581395349,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09302325581395349
      },
      "trade_size": {
        "avg": 1743.4648783914304,
        "median": 135.0
      },
      "run_size": {
        "avg": 2850.460038041918,
        "median": 137.0,
        "avg_length": 1.3473298880275624
      },
      "confidence": {
        "high": 0.6555412001148435,
        "medium": 0.251435544071203,
        "low": 0.09302325581395349,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 18266,
        "medium": 7006,
        "low": 2592,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5893625428044604,
        "medium": 0.2840679603125823,
        "low": 0.12656949688295724,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 26849,
        "medium": 12941,
        "low": 5766,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16959,
          "mixed": 12939,
          "institutional": 9893,
          "ambiguous": 5765,
          "unobservable": 0,
          "unclear": 5765
        },
        "runs": {
          "retail": 16761,
          "mixed": 7005,
          "institutional": 1506,
          "ambiguous": 2592,
          "unobservable": 0,
          "unclear": 2592
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8769092736146998,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09302325581395349,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6015288544358312,
      "dominance_gap": 0.35012919896640826,
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
            "n_trades": 2170,
            "n_runs": 1299,
            "retail_pct": 0.3511520737327189,
            "mixed_pct": 0.2631336405529954,
            "instit_pct": 0.21474654377880184,
            "ambiguous_pct": 0.17096774193548386,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17096774193548386,
            "avg_trade_size": 1676.831797235023,
            "avg_run_notional": 2801.1739799846036,
            "retail_qty_pct": 0.03210874894800395,
            "mixed_qty_pct": 0.11983607157232244,
            "instit_qty_pct": 0.6386073401880786,
            "ambiguous_qty_pct": 0.20944783929159502,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20944783929159502,
            "retail_notional_pct": 0.0321031405231228,
            "mixed_notional_pct": 0.11991137005407114,
            "instit_notional_pct": 0.6383859731087125,
            "ambiguous_notional_pct": 0.20959951631409354,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20959951631409354,
            "run_retail_pct": 0.5712086220169361,
            "run_mixed_pct": 0.2602001539645881,
            "run_instit_pct": 0.05157813702848345,
            "run_ambiguous_pct": 0.1170130869899923,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1170130869899923,
            "avg_feature_coverage": 0.876096997690531,
            "high_confidence_pct": 0.6227867590454196,
            "medium_confidence_pct": 0.2602001539645881,
            "low_confidence_pct": 0.1170130869899923,
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
          "retail_pct": 0.37226709983317235,
          "mixed_pct": 0.2840240583018702,
          "instit_pct": 0.21716129598735623,
          "ambiguous_pct": 0.1265475458776012,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.1265475458776012,
          "retail_qty_pct": 0.029400062343033672,
          "mixed_qty_pct": 0.1901378051366267,
          "instit_qty_pct": 0.533358169176016,
          "ambiguous_qty_pct": 0.2471039633443236,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2471039633443236,
          "retail_notional_pct": 0.029446447319056553,
          "mixed_notional_pct": 0.19112310782236278,
          "instit_notional_pct": 0.5319953899819763,
          "ambiguous_notional_pct": 0.24743505487660442,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24743505487660442,
          "run_retail_pct": 0.6015288544358312,
          "run_mixed_pct": 0.2513996554694229,
          "run_instit_pct": 0.05404823428079242,
          "run_unclear_pct": 0.09302325581395349,
          "avg_trade_size": 1743.4648783914304,
          "avg_run_notional": 2850.460038041918,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6555412001148435,
          "medium_confidence_pct": 0.251435544071203,
          "low_confidence_pct": 0.09302325581395349,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8769092736146998,
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
          "retail_pct": 0.48043113721933367,
          "mixed_pct": 0.04727955367595102,
          "instit_pct": 0.47064406922663177,
          "ambiguous_pct": 0.0016452398780835065,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016452398780835065,
          "retail_qty_pct": 0.23343908710288186,
          "mixed_qty_pct": 0.02729211739432905,
          "instit_qty_pct": 0.7388325293498564,
          "ambiguous_qty_pct": 0.00043626615293269216,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.00043626615293269216,
          "retail_notional_pct": 0.23528448522318343,
          "mixed_notional_pct": 0.027337204802956806,
          "instit_notional_pct": 0.7369577916296692,
          "ambiguous_notional_pct": 0.000420518344190576,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.000420518344190576,
          "run_retail_pct": 0.792079996812876,
          "run_mixed_pct": 0.03577546711286403,
          "run_instit_pct": 0.17077008884108202,
          "run_unclear_pct": 0.001374447233177961,
          "avg_trade_size": 1495.2927366877946,
          "avg_run_notional": 2824.2333373172382,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7179992828970957,
          "low_confidence_pct": 0.28200071710290425,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48489602007888133,
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
            "retail_pct": 0.41134751773049644,
            "mixed_pct": 0.22872340425531915,
            "instit_pct": 0.20390070921985815,
            "ambiguous_pct": 0.15602836879432624,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15602836879432624,
            "retail_qty_pct": 0.03856450329209175,
            "mixed_qty_pct": 0.08653498299688879,
            "instit_qty_pct": 0.7516098690398668,
            "ambiguous_qty_pct": 0.1232906446711526,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1232906446711526,
            "retail_notional_pct": 0.03846815375722418,
            "mixed_notional_pct": 0.0862132967275807,
            "instit_notional_pct": 0.7520495483972102,
            "ambiguous_notional_pct": 0.12326900111798497,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12326900111798497,
            "run_retail_pct": 0.5879265091863517,
            "run_mixed_pct": 0.24671916010498687,
            "run_instit_pct": 0.06299212598425197,
            "run_unclear_pct": 0.10236220472440945,
            "avg_trade_size": 1628.7535460992908,
            "avg_run_notional": 2411.0682414698163,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6509186351706037,
            "medium_confidence_pct": 0.24671916010498687,
            "low_confidence_pct": 0.10236220472440945,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8751968503937007,
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
            "retail_pct": 0.5492424242424242,
            "mixed_pct": 0.0,
            "instit_pct": 0.45075757575757575,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.1107262804366079,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8892737195633921,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.11074154563765504,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.889258454362345,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.811965811965812,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18803418803418803,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1214.8560606060605,
            "avg_run_notional": 1827.4757834757834,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.811965811965812,
            "low_confidence_pct": 0.18803418803418803,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4773504273504274,
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
            "retail_pct": 0.31953995731562723,
            "mixed_pct": 0.2774484230495613,
            "instit_pct": 0.24922930993597345,
            "ambiguous_pct": 0.15378230969883805,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15378230969883805,
            "retail_qty_pct": 0.02832452692678102,
            "mixed_qty_pct": 0.17497071761368074,
            "instit_qty_pct": 0.5567557718837034,
            "ambiguous_qty_pct": 0.23994898357583488,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23994898357583488,
            "retail_notional_pct": 0.028313485989257477,
            "mixed_notional_pct": 0.17493169951068435,
            "instit_notional_pct": 0.5565613758562749,
            "ambiguous_notional_pct": 0.24019343864378329,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24019343864378329,
            "run_retail_pct": 0.584859854336791,
            "run_mixed_pct": 0.255131317589936,
            "run_instit_pct": 0.05694107261090267,
            "run_unclear_pct": 0.10306775546237033,
            "avg_trade_size": 1509.2970120939056,
            "avg_run_notional": 2809.4043257559038,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6418009269476936,
            "medium_confidence_pct": 0.255131317589936,
            "low_confidence_pct": 0.10306775546237033,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8815272566762303,
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
            "retail_pct": 0.5042919861083809,
            "mixed_pct": 0.03459799488893257,
            "instit_pct": 0.45888211781665683,
            "ambiguous_pct": 0.002227901186029749,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002227901186029749,
            "retail_qty_pct": 0.21385629451258087,
            "mixed_qty_pct": 0.004971124216884681,
            "instit_qty_pct": 0.78103381425627,
            "ambiguous_qty_pct": 0.0001387670142644328,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0001387670142644328,
            "retail_notional_pct": 0.21438361996061692,
            "mixed_notional_pct": 0.004978540041176581,
            "instit_notional_pct": 0.7804972853803196,
            "ambiguous_notional_pct": 0.00014055461788692265,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00014055461788692265,
            "run_retail_pct": 0.7935789938217123,
            "run_mixed_pct": 0.027471315092674316,
            "run_instit_pct": 0.17707413945278022,
            "run_unclear_pct": 0.0018755516328331863,
            "avg_trade_size": 1084.3802503112508,
            "avg_run_notional": 1825.7642321270962,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7308031774051191,
            "low_confidence_pct": 0.26919682259488087,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48162511032656674,
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
            "retail_pct": 0.3543669034684496,
            "mixed_pct": 0.2849561220225658,
            "instit_pct": 0.22553280401170078,
            "ambiguous_pct": 0.13514417049728375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13514417049728375,
            "retail_qty_pct": 0.02296778040945378,
            "mixed_qty_pct": 0.1748940922311799,
            "instit_qty_pct": 0.5615446500402252,
            "ambiguous_qty_pct": 0.24059347731914105,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24059347731914105,
            "retail_notional_pct": 0.022932654980226615,
            "mixed_notional_pct": 0.17596689762893136,
            "instit_notional_pct": 0.5604070927655773,
            "ambiguous_notional_pct": 0.24069335462526473,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24069335462526473,
            "run_retail_pct": 0.597735526596881,
            "run_mixed_pct": 0.2514419995727409,
            "run_instit_pct": 0.0510574663533433,
            "run_unclear_pct": 0.09976500747703482,
            "avg_trade_size": 1973.1670079398245,
            "avg_run_notional": 3362.37887203589,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6487217830947803,
            "medium_confidence_pct": 0.25151320942818484,
            "low_confidence_pct": 0.09976500747703482,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8776187424339527,
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
            "retail_pct": 0.45262628801206334,
            "mixed_pct": 0.04855850357232614,
            "instit_pct": 0.4964815280221161,
            "ambiguous_pct": 0.002333680393494417,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002333680393494417,
            "retail_qty_pct": 0.2155369308912405,
            "mixed_qty_pct": 0.03398865962479039,
            "instit_qty_pct": 0.7498583670573951,
            "ambiguous_qty_pct": 0.0006160424265740736,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0006160424265740736,
            "retail_notional_pct": 0.216184371573754,
            "mixed_notional_pct": 0.03502115613808823,
            "instit_notional_pct": 0.7481783450468931,
            "ambiguous_notional_pct": 0.0006161272412646592,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0006161272412646592,
            "run_retail_pct": 0.7801158231718284,
            "run_mixed_pct": 0.03726484658825222,
            "run_instit_pct": 0.18053307434984353,
            "run_unclear_pct": 0.0020862558900758966,
            "avg_trade_size": 1511.8298477722328,
            "avg_run_notional": 3029.315258443941,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6968814071436279,
            "low_confidence_pct": 0.30311859285637205,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4871317578504371,
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
            "retail_pct": 0.37226709983317235,
            "mixed_pct": 0.2840240583018702,
            "instit_pct": 0.21716129598735623,
            "ambiguous_pct": 0.1265475458776012,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1265475458776012,
            "retail_qty_pct": 0.029400062343033672,
            "mixed_qty_pct": 0.1901378051366267,
            "instit_qty_pct": 0.533358169176016,
            "ambiguous_qty_pct": 0.2471039633443236,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2471039633443236,
            "retail_notional_pct": 0.029446447319056553,
            "mixed_notional_pct": 0.19112310782236278,
            "instit_notional_pct": 0.5319953899819763,
            "ambiguous_notional_pct": 0.24743505487660442,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24743505487660442,
            "run_retail_pct": 0.6015288544358312,
            "run_mixed_pct": 0.2513996554694229,
            "run_instit_pct": 0.05404823428079242,
            "run_unclear_pct": 0.09302325581395349,
            "avg_trade_size": 1743.4648783914304,
            "avg_run_notional": 2850.460038041918,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6555412001148435,
            "medium_confidence_pct": 0.251435544071203,
            "low_confidence_pct": 0.09302325581395349,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8769092736146998,
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
            "retail_pct": 0.48043113721933367,
            "mixed_pct": 0.04727955367595102,
            "instit_pct": 0.47064406922663177,
            "ambiguous_pct": 0.0016452398780835065,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016452398780835065,
            "retail_qty_pct": 0.23343908710288186,
            "mixed_qty_pct": 0.02729211739432905,
            "instit_qty_pct": 0.7388325293498564,
            "ambiguous_qty_pct": 0.00043626615293269216,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00043626615293269216,
            "retail_notional_pct": 0.23528448522318343,
            "mixed_notional_pct": 0.027337204802956806,
            "instit_notional_pct": 0.7369577916296692,
            "ambiguous_notional_pct": 0.000420518344190576,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.000420518344190576,
            "run_retail_pct": 0.792079996812876,
            "run_mixed_pct": 0.03577546711286403,
            "run_instit_pct": 0.17077008884108202,
            "run_unclear_pct": 0.001374447233177961,
            "avg_trade_size": 1495.2927366877946,
            "avg_run_notional": 2824.2333373172382,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7179992828970957,
            "low_confidence_pct": 0.28200071710290425,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48489602007888133,
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
          "trade_id": "BMLL-577",
          "timestamp": "2026-05-11T08:59:29.043400",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-576",
          "timestamp": "2026-05-11T08:59:23.018000",
          "price": 0.66,
          "size": 1600.0,
          "notional": 1056.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-575",
          "timestamp": "2026-05-11T08:59:16.395100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-574",
          "timestamp": "2026-05-11T08:59:16.395100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-573",
          "timestamp": "2026-05-11T08:59:08.875000",
          "price": 0.665,
          "size": 2400.0,
          "notional": 1596.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-572",
          "timestamp": "2026-05-11T08:59:08.875000",
          "price": 0.665,
          "size": 2300.0,
          "notional": 1529.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-571",
          "timestamp": "2026-05-11T08:59:08.814600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47680,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-570",
          "timestamp": "2026-05-11T08:59:00.618200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47679,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-569",
          "timestamp": "2026-05-11T08:58:35.510800",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47678,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-568",
          "timestamp": "2026-05-11T08:58:16.299700",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47677,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-567",
          "timestamp": "2026-05-11T08:58:08.027700",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47677,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-566",
          "timestamp": "2026-05-11T08:57:40.487000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47676,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-565",
          "timestamp": "2026-05-11T08:57:13.534400",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47675,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-564",
          "timestamp": "2026-05-11T08:56:45.055600",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47674,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-563",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 700.0,
          "notional": 465.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-562",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-561",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 1300.0,
          "notional": 864.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-560",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 1500.0,
          "notional": 997.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-559",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-558",
          "timestamp": "2026-05-11T08:56:11.418700",
          "price": 0.665,
          "size": 15700.0,
          "notional": 10440.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-557",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-556",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 10000.0,
          "notional": 6650.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-555",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 2200.0,
          "notional": 1463.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-554",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-553",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 25000.0,
          "notional": 16625.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-552",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 2100.0,
          "notional": 1396.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-551",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-550",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 1000.0,
          "notional": 665.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-549",
          "timestamp": "2026-05-11T08:56:11.418600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-548",
          "timestamp": "2026-05-11T08:56:11.418500",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47673,
          "d1": "WALK_BOOK",
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
      "total_trades": 45555,
      "price_moving_trades": 10903,
      "pct_price_moving": 23.93370650861596,
      "all_movers": {
        "count": 10903,
        "avg_size": 1452.2324130973127,
        "median_size": 137.0,
        "retail_count": 5762,
        "mixed_count": 3233,
        "institutional_count": 683,
        "ambiguous_count": 1225,
        "unobservable_count": 0,
        "retail_pct": 52.847840044024586,
        "mixed_pct": 29.652389250664957,
        "instit_pct": 6.264330918095936,
        "unclear_pct": 11.235439787214528
      },
      "positive_movers": {
        "count": 5443,
        "avg_size": 1457.4085981995224,
        "median_size": 137.0,
        "retail_count": 2776,
        "mixed_count": 1649,
        "institutional_count": 336,
        "ambiguous_count": 682,
        "unobservable_count": 0,
        "retail_pct": 51.00128605548411,
        "mixed_pct": 30.29579276134485,
        "instit_pct": 6.173066323718538,
        "unclear_pct": 12.529854859452508
      },
      "negative_movers": {
        "count": 5460,
        "avg_size": 1447.0723443223444,
        "median_size": 189.75,
        "retail_count": 2986,
        "mixed_count": 1584,
        "institutional_count": 347,
        "ambiguous_count": 543,
        "unobservable_count": 0,
        "retail_pct": 54.68864468864469,
        "mixed_pct": 29.010989010989015,
        "instit_pct": 6.355311355311355,
        "unclear_pct": 9.945054945054945
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
            "avg_short_ratio": 0.02994481129475751,
            "max_short_ratio": 0.1365038753856573,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06938835385404264,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06090869381191674,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.1302468781391546,
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
            "avg_short_ratio": 0.019604587373080278
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
            "avg_short_ratio": 0.019604587373080278,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 100.20089284343933
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
        "interpretation": "Shorts covering significantly (-50% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06938835385404264,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06302315670928454,
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
          "opening": 0.04897640608984305,
          "continuous": 0.8638408516000414,
          "closing": 0.0861276459690994,
          "auctions": 0.1361591483999586,
          "other": 0.0
        },
        "1M": {
          "opening": 0.013976575597129228,
          "continuous": 0.9043367460904165,
          "closing": 0.07350747448910547,
          "auctions": 0.09566325390958351,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0464629623368245,
          "continuous": 0.8729592167518903,
          "closing": 0.06686412177161313,
          "auctions": 0.12704078324810975,
          "other": 0.0
        },
        "6M": {
          "opening": 0.037644941275555795,
          "continuous": 0.8674514695622506,
          "closing": 0.08329173288730994,
          "auctions": 0.13254853043774947,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3056136461372428,
        "1M": 0.23290308570239848,
        "3M": 0.2258100723021942,
        "6M": 0.23077053423775667
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0182
        },
        {
          "time": "09:00",
          "avg_share": 0.0999
        },
        {
          "time": "09:30",
          "avg_share": 0.0391
        },
        {
          "time": "10:00",
          "avg_share": 0.0463
        },
        {
          "time": "10:30",
          "avg_share": 0.0344
        },
        {
          "time": "11:00",
          "avg_share": 0.0301
        },
        {
          "time": "11:30",
          "avg_share": 0.0396
        },
        {
          "time": "12:00",
          "avg_share": 0.2348
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
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
          "avg_share": 0.0322
        },
        {
          "time": "14:30",
          "avg_share": 0.0326
        },
        {
          "time": "15:00",
          "avg_share": 0.0304
        },
        {
          "time": "15:30",
          "avg_share": 0.0512
        },
        {
          "time": "16:00",
          "avg_share": 0.043
        },
        {
          "time": "16:30",
          "avg_share": 0.0984
        },
        {
          "time": "17:00",
          "avg_share": 0.1192
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.969833391320469,
          "hhi": 0.2272710699957596,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.090540470258137,
          "hhi": 0.17226602302035982,
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
