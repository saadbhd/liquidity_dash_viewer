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
    "asof_date": "2026-05-05",
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
          "adv_notional_sgd": 1233470.0,
          "adv_volume_shares": 1841000.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.004027910501123898,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.00751680465501112,
          "spread_ticks": 1.002886002886003,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5146113042192526,
          "loadings": {
            "log_adv": 0.5541007471183053,
            "log_trades": 0.5083734983236375,
            "log_turnover": 0.5175569504260847,
            "neg_spread": 0.36626766203347483,
            "neg_amihud": 0.05134127054716015,
            "neg_vol": -0.17284566814909771
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
          "peer_median_adv": 601727.0,
          "peer_median_score_pca": 79.56989247311827,
          "peer_median_trades": 825.0,
          "peer_median_volatility": 0.07141316959598021,
          "peer_median_spread_pct": 0.007490636704119858,
          "peer_median_spread_ticks": 1.0,
          "peer_median_amihud": 1.2495362502399357e-08,
          "peer_median_turnover_ratio": 0.0007433243626859119,
          "target_vs_peer": {
            "score_pca_delta": 1.25,
            "adv_delta_pct": 105.0,
            "trades_delta_pct": -58.42,
            "volatility_delta_pct": -100.75,
            "spread_pct_delta_pct": -0.35,
            "spread_ticks_delta_pct": 0.29,
            "amihud_delta_pct": 51.22,
            "turnover_ratio_delta_pct": 441.88
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 1233470.0,
            "trades": 343.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.00751680465501112,
            "spread_ticks": 1.002886002886003,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.004027910501123898,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 601727.0,
            "trades": 825.0,
            "volatility": 0.07141316959598021,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 1.2495362502399357e-08,
            "turnover_ratio": 0.0007433243626859119,
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
              "mean": 0.26686185259131745,
              "median": 0.11843150514969562,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0469772646673634,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3008997.2062823926,
              "median": 19544.5,
              "min": 0.0,
              "max": 197407180.0,
              "p5": 0.0,
              "p95": 17555689.799999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10327075901714342,
              "median": 0.028071389487789773,
              "min": 0.0002935575658447305,
              "max": 1.4976744186046513,
              "p5": 0.0034905516765943723,
              "p95": 0.511182278212251,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0075210717917383735,
              "median": 0.0003552368337285009,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.01598887852255307,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00011371382324518449,
              "median": 1.820227795592876e-08,
              "min": 0.0,
              "max": 0.0308641975308642,
              "p5": 0.0,
              "p95": 6.752116389266041e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 499.2831541218638,
              "median": 11.0,
              "min": 0.0,
              "max": 9355.0,
              "p5": 0.0,
              "p95": 3493.449999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2583102371716895,
              "median": 0.08832215829401448,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.024994609358593076,
              "p95": 1.0054263168667512,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 6655786.328267352,
              "median": 623068.75,
              "min": 0.0,
              "max": 44874528.0,
              "p5": 1157.6341485860971,
              "p95": 31195762.19999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03650799800867292,
              "median": 0.008283289205333617,
              "min": 0.00428922705674426,
              "max": 0.15384615384615383,
              "p5": 0.004338221500216234,
              "p95": 0.13333333333333328,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023415128894428566,
              "median": 0.0021322386997313387,
              "min": 0.0,
              "max": 0.005338145936080458,
              "p5": 2.9083051360714495e-06,
              "p95": 0.004992272273982693,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.1401733429496166e-07,
              "median": 9.442524132160697e-11,
              "min": 0.0,
              "max": 2.8794359058987376e-06,
              "p5": 0.0,
              "p95": 2.019353742879834e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 926.0,
              "median": 486.0,
              "min": 0.0,
              "max": 3487.0,
              "p5": 2.8000000000000003,
              "p95": 2975.999999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 601727.0,
              "median": 601727.0,
              "min": 601727.0,
              "max": 601727.0,
              "p5": 601727.0,
              "p95": 601727.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 825.0,
              "median": 825.0,
              "min": 825.0,
              "max": 825.0,
              "p5": 825.0,
              "p95": 825.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.07141316959598021,
              "median": 0.07141316959598021,
              "min": 0.07141316959598021,
              "max": 0.07141316959598021,
              "p5": 0.07141316959598021,
              "p95": 0.07141316959598021,
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
              "mean": 1.2495362502399357e-08,
              "median": 1.2495362502399357e-08,
              "min": 1.2495362502399357e-08,
              "max": 1.2495362502399357e-08,
              "p5": 1.2495362502399357e-08,
              "p95": 1.2495362502399357e-08,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007433243626859119,
              "median": 0.0007433243626859119,
              "min": 0.0007433243626859119,
              "max": 0.0007433243626859119,
              "p5": 0.0007433243626859119,
              "p95": 0.0007433243626859119,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": -0.0007514139581934476,
            "sector": 0.0021186440677967155,
            "peers": 0.007518796992481258,
            "vs_market": 0.008270210950674706,
            "vs_sector": 0.0054001529246845426,
            "vs_peers": 0.0
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.89964157706093,
          "score_pca_percentile": 81.89964157706093,
          "rank_pca": 102,
          "total": 558,
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.00772030539296625,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.1228019336978895
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5262167290288435,
          "loadings": {
            "log_adv": 0.5428830643762578,
            "log_trades": 0.4946562283494583,
            "log_turnover": 0.4896579461154399,
            "neg_spread": 0.41777817154984953,
            "neg_amihud": 0.11714776282094502,
            "neg_vol": 0.18046077417836107
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
          "peer_median_score_pca": 83.87096774193549,
          "peer_median_trades": 788.0,
          "peer_median_volatility": 0.17942232090671867,
          "peer_median_spread_pct": 0.007503437438617174,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 9.311899426718526e-09,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -10.9,
            "trades_delta_pct": -56.47,
            "volatility_delta_pct": 31.56,
            "spread_pct_delta_pct": -2.89,
            "spread_ticks_delta_pct": -0.81,
            "amihud_delta_pct": 43.01,
            "turnover_ratio_delta_pct": 133.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.89964157706093,
            "rank_pca": 102,
            "adv": 665645.0,
            "trades": 343.0,
            "volatility": 0.1228019336978895,
            "spread_pct": 0.00772030539296625,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 746861.5,
            "trades": 788.0,
            "volatility": 0.17942232090671867,
            "spread_pct": 0.007503437438617174,
            "spread_ticks": 1.0081615120274914,
            "amihud": 9.311899426718526e-09,
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
              "mean": 0.6287944581781851,
              "median": 0.38466186324454466,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.03322637234498236,
              "p95": 1.9248817144894366,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3134370.8426512135,
              "median": 15642.75,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12946517.999999972,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1042704716001038,
              "median": 0.029336562722115007,
              "min": 0.00024072671116111928,
              "max": 1.2394366197183098,
              "p5": 0.0033111441414321657,
              "p95": 0.5357344358834213,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004426761808605036,
              "median": 0.0003198112468903873,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.012751057593026367,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.299051714902995e-05,
              "median": 9.383156015142504e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.654255319148936e-05,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 473.16129032258067,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 2637.549999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33448615627370526,
              "median": 0.15555542321042898,
              "min": 0.07784498011545535,
              "max": 1.6545135133888742,
              "p5": 0.09357991386930731,
              "p95": 1.1476061836536793,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9427915.747906147,
              "median": 700981.75,
              "min": 0.0,
              "max": 61197396.0,
              "p5": 2992.5000000000005,
              "p95": 43969618.649999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03929864560840961,
              "median": 0.008385039574311182,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004315846627039874,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002403255028424642,
              "median": 0.0009510534881897813,
              "min": 0.0,
              "max": 0.007310714682434931,
              "p5": 8.368796411960701e-05,
              "p95": 0.007254755218904031,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.774331740538684e-09,
              "median": 2.9599606474160375e-09,
              "min": 0.0,
              "max": 3.253395853905842e-08,
              "p5": 0.0,
              "p95": 2.4406237849739442e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1201.625,
              "median": 354.0,
              "min": 0.0,
              "max": 6041.0,
              "p5": 3.5000000000000004,
              "p95": 4636.099999999998,
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
              "mean": 0.17942232090671867,
              "median": 0.17942232090671867,
              "min": 0.17942232090671867,
              "max": 0.17942232090671867,
              "p5": 0.17942232090671867,
              "p95": 0.17942232090671867,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007503437438617174,
              "median": 0.007503437438617174,
              "min": 0.007503437438617174,
              "max": 0.007503437438617174,
              "p5": 0.007503437438617174,
              "p95": 0.007503437438617174,
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
              "mean": 9.311899426718526e-09,
              "median": 9.311899426718526e-09,
              "min": 9.311899426718526e-09,
              "max": 9.311899426718526e-09,
              "p5": 9.311899426718526e-09,
              "p95": 9.311899426718526e-09,
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
            "stock": 0.055118110236220375,
            "market": -0.005435095850177207,
            "sector": 0.02695265885315412,
            "peers": 0.03875968992248091,
            "vs_market": 0.06055320608639758,
            "vs_sector": 0.028165451383066253,
            "vs_peers": 0.016358420313739463
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
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.007614324265188542,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.17973387332925572
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5534908761851643,
          "loadings": {
            "log_adv": 0.5220867957160803,
            "log_trades": 0.4723204908428016,
            "log_turnover": 0.4738049158745058,
            "neg_spread": 0.4257241154644292,
            "neg_amihud": 0.18234018887204687,
            "neg_vol": 0.2556534106876322
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
          "peer_median_score_pca": 86.55913978494624,
          "peer_median_trades": 920.0,
          "peer_median_volatility": 0.2048914623657257,
          "peer_median_spread_pct": 0.0075084476641119,
          "peer_median_spread_ticks": 1.0038372985418265,
          "peer_median_amihud": 6.1955971199717675e-09,
          "peer_median_turnover_ratio": 0.001546985376123191,
          "target_vs_peer": {
            "score_pca_delta": -2.51,
            "adv_delta_pct": -47.3,
            "trades_delta_pct": -57.5,
            "volatility_delta_pct": 12.28,
            "spread_pct_delta_pct": -1.41,
            "spread_ticks_delta_pct": -0.38,
            "amihud_delta_pct": 14.35,
            "turnover_ratio_delta_pct": 40.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 665645.0,
            "trades": 391.0,
            "volatility": 0.17973387332925572,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.55913978494624,
            "rank_pca": 76,
            "adv": 1261923.0,
            "trades": 920.0,
            "volatility": 0.2048914623657257,
            "spread_pct": 0.0075084476641119,
            "spread_ticks": 1.0038372985418265,
            "amihud": 6.1955971199717675e-09,
            "turnover_ratio": 0.001546985376123191,
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
              "mean": 0.6885503770296926,
              "median": 0.46669781142851197,
              "min": 0.0,
              "max": 7.344078149840708,
              "p5": 0.15637620452022566,
              "p95": 2.2430208564033762,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3272839.3408551286,
              "median": 12783.8,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13752259.599999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10063986516865239,
              "median": 0.030272657629499336,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.0035701061829561623,
              "p95": 0.4756571865124839,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0059434793556758965,
              "median": 0.00025254119578256204,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.010620788735089955,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9209410817033517e-05,
              "median": 1.3179432704498753e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 3.8478927015254226e-05,
              "count": 553
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.3781362007168,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2764.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34752726699737596,
              "median": 0.20092999719577076,
              "min": 0.130231826431178,
              "max": 1.3443253023788735,
              "p5": 0.1475575428455052,
              "p95": 0.9858755040053784,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10242404.286821926,
              "median": 737595.0,
              "min": 0.0,
              "max": 68220088.0,
              "p5": 7571.550000000001,
              "p95": 48145887.349999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03772060762581865,
              "median": 0.008332049010422329,
              "min": 0.004250621484741657,
              "max": 0.15384615384615383,
              "p5": 0.004343544218923375,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025707626580400173,
              "median": 0.0013129924558718034,
              "min": 0.0,
              "max": 0.007967128679338773,
              "p5": 8.445955527815657e-05,
              "p95": 0.0074709891991405,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1042411322918997e-06,
              "median": 5.44875254694933e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 3.611170376786596e-11,
              "p95": 5.720744570668475e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1221.75,
              "median": 461.0,
              "min": 0.0,
              "max": 5927.0,
              "p5": 6.300000000000001,
              "p95": 4538.549999999997,
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
              "mean": 920.0,
              "median": 920.0,
              "min": 920.0,
              "max": 920.0,
              "p5": 920.0,
              "p95": 920.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2048914623657257,
              "median": 0.2048914623657257,
              "min": 0.2048914623657257,
              "max": 0.2048914623657257,
              "p5": 0.2048914623657257,
              "p95": 0.2048914623657257,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0075084476641119,
              "median": 0.0075084476641119,
              "min": 0.0075084476641119,
              "max": 0.0075084476641119,
              "p5": 0.0075084476641119,
              "p95": 0.0075084476641119,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0038372985418265,
              "median": 1.0038372985418265,
              "min": 1.0038372985418265,
              "max": 1.0038372985418265,
              "p5": 1.0038372985418265,
              "p95": 1.0038372985418265,
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
            "stock": -0.021897810218978186,
            "market": 0.0031558757542777816,
            "sector": -0.014479218368042002,
            "peers": -0.14649681528662395,
            "vs_market": -0.025053685973255968,
            "vs_sector": -0.007418591850936185,
            "vs_peers": 0.12459900506764576
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
          "adv_notional_sgd": 571539.75,
          "adv_volume_shares": 850650.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001861130943933212,
          "votes": 353.0,
          "trades": 353.0,
          "spread_pct": 0.0074349442379182205,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.14299031211982335
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5775137941944829,
          "loadings": {
            "log_adv": 0.5016729455251135,
            "log_trades": 0.4470060281165197,
            "log_turnover": 0.45628579645116923,
            "neg_spread": 0.43411571981072317,
            "neg_amihud": 0.2637797996808543,
            "neg_vol": 0.2868394979881925
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
          "peer_median_adv": 1112619.75,
          "peer_median_score_pca": 87.09677419354838,
          "peer_median_trades": 749.5,
          "peer_median_volatility": 0.1685089853544524,
          "peer_median_spread_pct": 0.006729532407325992,
          "peer_median_spread_ticks": 1.005774341514163,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.001194814664261644,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -48.6,
            "trades_delta_pct": -52.9,
            "volatility_delta_pct": 15.14,
            "spread_pct_delta_pct": -10.48,
            "spread_ticks_delta_pct": -0.57,
            "amihud_delta_pct": 16.8,
            "turnover_ratio_delta_pct": 55.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 571539.75,
            "trades": 353.0,
            "volatility": 0.14299031211982335,
            "spread_pct": 0.0074349442379182205,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.001861130943933212,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1112619.75,
            "trades": 749.5,
            "volatility": 0.1685089853544524,
            "spread_pct": 0.006729532407325992,
            "spread_ticks": 1.005774341514163,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.001194814664261644,
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
              "mean": 0.6886477998811863,
              "median": 0.45478987975751467,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.15465547174076782,
              "p95": 2.035916599623587,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2654112.125583996,
              "median": 11653.85,
              "min": 0.0,
              "max": 251602868.5,
              "p5": 0.0,
              "p95": 10780035.537499992,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.095748394520773,
              "median": 0.028680905466471195,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.0036014837025888655,
              "p95": 0.4847795163584637,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003300073596051155,
              "median": 0.00026597074665578606,
              "min": 0.0,
              "max": 0.8651374332608266,
              "p5": 0.0,
              "p95": 0.007217629168998251,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.712889516389303e-06,
              "median": 1.6633994684113067e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.631154662463418e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 385.241935483871,
              "median": 7.0,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 2137.2749999999983,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.351456169493887,
              "median": 0.16788883947225924,
              "min": 0.11731832640129272,
              "max": 1.3287700700664364,
              "p5": 0.12630352140277845,
              "p95": 1.0591532356737656,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8753250.600566141,
              "median": 640588.625,
              "min": 0.0,
              "max": 56980400.5,
              "p5": 12063.9225,
              "p95": 40721291.19999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03577158088811104,
              "median": 0.00808428434603335,
              "min": 0.004270141078540351,
              "max": 0.13333333333333333,
              "p5": 0.004340090326892025,
              "p95": 0.12560445603391693,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002309287869968315,
              "median": 0.0011576506752222567,
              "min": 0.0,
              "max": 0.006798887688199187,
              "p5": 8.128416089489489e-05,
              "p95": 0.006642318283712057,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.897320499828624e-07,
              "median": 4.99977123101207e-09,
              "min": 0.0,
              "max": 7.862776406832145e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 5.124181133588349e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1117.4375,
              "median": 387.75,
              "min": 0.0,
              "max": 5545.0,
              "p5": 7.3500000000000005,
              "p95": 4239.324999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1112619.75,
              "median": 1112619.75,
              "min": 1112619.75,
              "max": 1112619.75,
              "p5": 1112619.75,
              "p95": 1112619.75,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 749.5,
              "median": 749.5,
              "min": 749.5,
              "max": 749.5,
              "p5": 749.5,
              "p95": 749.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1685089853544524,
              "median": 0.1685089853544524,
              "min": 0.1685089853544524,
              "max": 0.1685089853544524,
              "p5": 0.1685089853544524,
              "p95": 0.1685089853544524,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006729532407325992,
              "median": 0.006729532407325992,
              "min": 0.006729532407325992,
              "max": 0.006729532407325992,
              "p5": 0.006729532407325992,
              "p95": 0.006729532407325992,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.005774341514163,
              "median": 1.005774341514163,
              "min": 1.005774341514163,
              "max": 1.005774341514163,
              "p5": 1.005774341514163,
              "p95": 1.005774341514163,
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
              "mean": 0.001194814664261644,
              "median": 0.001194814664261644,
              "min": 0.001194814664261644,
              "max": 0.001194814664261644,
              "p5": 0.001194814664261644,
              "p95": 0.001194814664261644,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.028985507246377162,
            "market": 0.11109323741368993,
            "sector": -0.01804625197930365,
            "peers": -0.16249999999999953,
            "vs_market": -0.1400787446600671,
            "vs_sector": -0.010939255267073511,
            "vs_peers": 0.13351449275362237
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks steady, with a 1 tick spread and displayed depth broadly balanced across the book. That supports clean access for immediate trading.",
        "market_comparison": "Return 0.8% vs peers 0.8%."
      },
      "30d": {
        "liquidity": "1M score 81.9 vs peer median 83.9 (-2.0 pts).",
        "market_comparison": "Return 5.5% vs peers 3.9%."
      },
      "3m": {
        "liquidity": "The medium-term picture remains middle of the pack. Current displayed depth is close on both sides of the book, which suggests access is holding up rather than becoming thinner.",
        "market_comparison": "Company-specific factors are the main driver at 44.8%. That matters because tradability is likely to respond more to stock news than to broader market moves."
      },
      "6m": {
        "liquidity": "Six-month tradability is average relative to peers. The liquidity score of 85.1 is 2.0 points below the peer median of 87.1, which indicates access is reasonable but not leading the group.",
        "market_comparison": "The stock has outperformed both peers and the market over the past month, rising 5.5% compared with 3.9% for peers and -0.5% for the market. That matters because a stronger return backdrop can help keep liquidity accessible."
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
          "median": 0.20928119837478135,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "20.9%",
          "display_range": null,
          "display_text": "20.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 20.9,
          "plain_english": "Market explains about 20.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3423413551145347,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.2%",
          "display_range": null,
          "display_text": "34.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 34.2,
          "plain_english": "Sector explains about 34.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.44837744651068395,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "44.8%",
          "display_range": null,
          "display_text": "44.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 44.8,
          "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.7855377994097157,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.79",
          "display_range": null,
          "display_text": "0.79",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.79% stock move in the same direction in this state.",
          "value_num": 0.79
        },
        "beta_stock_lag": {
          "median": -1.6137834515180363,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.61",
          "display_range": null,
          "display_text": "-1.61",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.61
        },
        "beta_sector": {
          "median": -2.407836613719821,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.41",
          "display_range": null,
          "display_text": "-2.41",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.41% stock move in the opposite direction in this state.",
          "value_num": -2.41
        },
        "beta_market_lag": {
          "median": 0.042195685695877214,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.04",
          "display_range": null,
          "display_text": "0.04",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.04
        },
        "beta_sector_lag": {
          "median": -0.3474816693455593,
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
          "period_label": "2025-05-08 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5574182685959428,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.7%",
            "display_range": null,
            "display_text": "55.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 55.7,
            "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3434317381521688,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.3%",
              "display_range": null,
              "display_text": "34.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 34.3,
              "plain_english": "Market explains about 34.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09914999325188843,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.9%",
              "display_range": null,
              "display_text": "9.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 9.9,
              "plain_english": "Sector explains about 9.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5574182685959428,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.7%",
              "display_range": null,
              "display_text": "55.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 55.7,
              "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
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
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0055815000876977125,
            "low": 0.0055815000876977125,
            "high": 0.0055815000876977125
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010925945929232118,
            "low": 0.010925945929232118,
            "high": 0.010925945929232118
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
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
        "market_link_display": "0.79",
        "sector_link_display": "-2.41",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.79% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.41% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.61",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 44.8,
        "driver_share_display": "44.8%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9105691056910569,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
        "expected_duration_days": 10.3
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
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0055815000876977125,
            "low": 0.0055815000876977125,
            "high": 0.0055815000876977125
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010925945929232118,
            "low": 0.010925945929232118,
            "high": 0.010925945929232118
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08943089430894309,
          0.9105691056910569
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
    "liq_subtitle": "Structural liquidity sits slightly below peers, while near-term execution conditions remain orderly.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of both peers and the market, giving the stock a firmer trading backdrop.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price moves are being led mainly by company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 44.8% of price changes. Other influences are market 20.9%, and sector 34.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 20.9%, sector 34.2%, and company-specific 44.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 20.9%, sector 34.2%, and company-specific 44.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific factors account for 44.8% of current price moves. That matters because stock news is likely to shape trading conditions more than broader market moves.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is company-specific, accounting for 44.8% of price moves.",
      "The monthly pattern has stayed company-driven from February through April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The trading backdrop is firm in price terms, while liquidity remains middle-of-the-pack for its size.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 5, 2025 to May 5, 2026 (254 trading days • 100,099 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks orderly, with a 1 tick spread and displayed bid depth at 0.92x of ask depth. That matters because the book is broadly balanced even though the six-month liquidity score sits slightly below the peer median.",
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
    "intraday_subtitle": "On-screen trading conditions are balanced, supporting steady access.",
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
    "intraday_insight": "Displayed depth is broadly balanced, with bid depth at 0.92x of ask depth, and the spread is 1 tick. That matters because immediate execution conditions look orderly rather than strained.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is defined more by balanced execution and stock-specific drivers than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for the company’s size, with stronger recent returns and orderly on-screen trading.",
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
        "value": "S$571.5K",
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
        "sub": "1.00 ticks; peers 0.67%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Structural liquidity looks slightly below peers rather than weak. The six-month liquidity score is 85.1, which is 2.0 points below the peer median of 87.1. That matters because access is broadly in line with the group, but not at the stronger end. Near-term execution remains orderly, with a 1 tick spread and displayed bid depth at 0.92x of ask depth. That matters because the visible book is balanced even without a standout structural liquidity profile.",
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
        "value": "0.92x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.04% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.11% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.34% with 100.0% fill.",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.67%",
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
        "value": "571.5K",
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
        "value": "44.8",
        "suffix": "company-specific",
        "bar_pct": 45,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 20.9% • Sector 34.2%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the company’s size, with a six-month liquidity score of 85.1 compared with a peer median of 87.1. That matters because peer-relative access looks serviceable rather than especially strong.",
      "Recent performance is stronger, with a 1M return of +5.5% compared with +3.9% for peers and -0.5% for the market. That matters because the stock is trading against a firmer return backdrop than its main comparison groups.",
      "Execution conditions on screen remain orderly, with a 1 tick spread and displayed bid depth at 0.92x of ask depth, while company-specific factors account for 44.8% of current price moves. That matters because trading looks balanced in the book, but stock news is likely to drive near-term moves."
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
        "insight": "6M return is -2.9%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.9% vs market 11.1%.",
        "vs_sector": "Worse than sector: -2.9% vs sector -1.8%.",
        "vs_peers": "Better than peers: -2.9% vs peers -16.2%."
      },
      "adv": {
        "insight": "ADV is S$571.5K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$571.5K vs market S$11.7K.",
        "vs_sector": "Worse than sector: S$571.5K vs sector S$640.6K.",
        "vs_peers": "Worse than peers: S$571.5K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.74% vs market 2.87%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Worse than peers: 0.74% vs peers 0.67%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.30%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.30% vs market 45.48%.",
        "vs_sector": "Better than sector: 14.30% vs sector 16.79%.",
        "vs_peers": "Better than peers: 14.30% vs peers 16.85%."
      },
      "trades": {
        "insight": "Trades is 353, better than market, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 353 vs market 7.",
        "vs_sector": "In line with sector: 353 vs sector 388.",
        "vs_peers": "Worse than peers: 353 vs peers 750."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.66e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 5.00e-09.",
        "vs_peers": "Better than peers: 4.54e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a one-month return of 5.5% compared with 3.9% for peers and -0.5% for the market. Liquidity gives a mixed read on that strength because the six-month liquidity score of 85.1 is 2.0 points below the peer median of 87.1, although current trading conditions look orderly with displayed bid depth at 0.92x ask depth and a 1 tick spread.",
      "conclusion": "The recent gain looks company-specific rather than broad-market, with liquidity broadly supportive in the moment but not clearly stronger than peers over time."
    },
    "drivers": {
      "overall": "Recent moves are mainly company-driven, with company-specific factors accounting for 44.8% of price action. That matters because the stock’s own news flow is carrying more weight than broader market direction at a time when the 1M return of 5.5% is ahead of peers at 3.9% and the market at -0.5%.",
      "beta": "Current trading conditions look orderly rather than stressed, with displayed bid depth at 0.92x ask depth and the spread at 1 tick. That matters because the market is showing broadly balanced immediate liquidity even as price moves are being led by stock-specific factors.",
      "rolling_change": "This does not look like a one-off shift, as the stock was still clearly company-driven in February and mostly company-driven in both March and April. That matters because the current pattern appears persistent over recent months rather than a temporary change."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and its typical run length of about 10.3 days suggests this is a meaningful trading condition rather than a one-day disturbance. That matters because liquidity can still function, but price moves are more likely to feel less steady while this state holds.",
      "current": "The stock is currently in a high-volatility state, even as displayed depth remains broadly balanced with bid depth at 0.92x ask depth and the spread at 1 tick.",
      "transitions": "This looks more settled than short-lived because high volatility typically persists for about 10.3 days, although the overall picture remains mixed.",
      "trading_implications": "Trading conditions look workable rather than impaired because the order book is balanced and the spread is 1 tick, but the high-volatility backdrop means execution can still feel less stable from trade to trade."
    },
    "execution": {
      "overall": "Current displayed liquidity looks balanced because the spread is 1 tick and bid depth is close to ask depth at 0.92x. That matters because the book is showing usable two-way interest rather than a clearly thin setup.",
      "concern": "Trade-size percentiles use May 5, 2025 to May 5, 2026 history (254 trading days • 100,099 trades).",
      "peer_context": "The current book is a little firmer than the broader peer-relative picture because displayed depth is balanced even though the six-month liquidity score of 85.1 sits 2.0 points below the peer median of 87.1. That matters because the near-term screen supports the view that access is serviceable rather than clearly weak."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so participation appears broad but the largest value still sits with institution-like trades.",
      "retail_heavy": "Retail-like trades account for 37.3% of trade count but only 3.1% of trade value, while institution-like trades are 21.8% of count and 53.1% of value. That split shows many smaller tickets alongside a much larger share of value from institution-like activity, which makes the flow base mixed rather than clearly one-sided.",
      "institutional_gap": "Institution-like trades carry more than half of trade value despite representing just 21.8% of trade count. That gap matters because value is concentrated in fewer trades even as overall participation remains broad.",
      "peer_comparison": "The mix looks mixed rather than unusual, with broad participation by count and a heavier institutional share of value. That places the stock in a middle ground relative to peers rather than at an extreme."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful but not dominant, with 23.8% of total trades moving price. That points to a market where a minority of trades set direction while the broader flow still provides continuity. The signal is mixed because trade count is spread across participants, but trade value is concentrated in institution-like activity. That matters because price formation is likely influenced more by larger value trades than by the highest trade counts.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Low short interest Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is falling, with shorts covering by 55% month on month. That matters because declining short pressure reduces the chance that short activity is a separate source of trading distortion right now.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is strongest in the continuous session, which carries 87.1% of activity, compared with 3.7% at the open and 8.1% at the close. That matters because most access appears during the main session rather than in short auction windows.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest window for liquidity because it captures the large majority of trading activity. The open and close are smaller parts of the day, so access is less centered on those periods.",
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
        571539.75,
        1112619.75
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14299031211982335,
        "adv": 571539.75,
        "spread_pct": 0.0074349442379182205,
        "turnover_ratio": 0.001861130943933212,
        "amihud": 4.541135179291274e-09,
        "trades": 353.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6886477998811863,
          "median": 0.45478987975751467,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.15465547174076782,
          "p95": 2.035916599623587,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2654112.125583996,
          "median": 11653.85,
          "min": 0.0,
          "max": 251602868.5,
          "p5": 0.0,
          "p95": 10780035.537499992,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.095748394520773,
          "median": 0.028680905466471195,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.0036014837025888655,
          "p95": 0.4847795163584637,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003300073596051155,
          "median": 0.00026597074665578606,
          "min": 0.0,
          "max": 0.8651374332608266,
          "p5": 0.0,
          "p95": 0.007217629168998251,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.712889516389303e-06,
          "median": 1.6633994684113067e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.631154662463418e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 385.241935483871,
          "median": 7.0,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 2137.2749999999983,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.351456169493887,
          "median": 0.16788883947225924,
          "min": 0.11731832640129272,
          "max": 1.3287700700664364,
          "p5": 0.12630352140277845,
          "p95": 1.0591532356737656,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8753250.600566141,
          "median": 640588.625,
          "min": 0.0,
          "max": 56980400.5,
          "p5": 12063.9225,
          "p95": 40721291.19999997,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03577158088811104,
          "median": 0.00808428434603335,
          "min": 0.004270141078540351,
          "max": 0.13333333333333333,
          "p5": 0.004340090326892025,
          "p95": 0.12560445603391693,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002309287869968315,
          "median": 0.0011576506752222567,
          "min": 0.0,
          "max": 0.006798887688199187,
          "p5": 8.128416089489489e-05,
          "p95": 0.006642318283712057,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.897320499828624e-07,
          "median": 4.99977123101207e-09,
          "min": 0.0,
          "max": 7.862776406832145e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 5.124181133588349e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1117.4375,
          "median": 387.75,
          "min": 0.0,
          "max": 5545.0,
          "p5": 7.3500000000000005,
          "p95": 4239.324999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1112619.75,
          "median": 1112619.75,
          "min": 1112619.75,
          "max": 1112619.75,
          "p5": 1112619.75,
          "p95": 1112619.75,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 749.5,
          "median": 749.5,
          "min": 749.5,
          "max": 749.5,
          "p5": 749.5,
          "p95": 749.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.1685089853544524,
          "median": 0.1685089853544524,
          "min": 0.1685089853544524,
          "max": 0.1685089853544524,
          "p5": 0.1685089853544524,
          "p95": 0.1685089853544524,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006729532407325992,
          "median": 0.006729532407325992,
          "min": 0.006729532407325992,
          "max": 0.006729532407325992,
          "p5": 0.006729532407325992,
          "p95": 0.006729532407325992,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.005774341514163,
          "median": 1.005774341514163,
          "min": 1.005774341514163,
          "max": 1.005774341514163,
          "p5": 1.005774341514163,
          "p95": 1.005774341514163,
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
          "mean": 0.001194814664261644,
          "median": 0.001194814664261644,
          "min": 0.001194814664261644,
          "max": 0.001194814664261644,
          "p5": 0.001194814664261644,
          "p95": 0.001194814664261644,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.055118110236220375,
        "market": -0.005435095850177207,
        "sector": 0.02695265885315412,
        "peers": 0.03875968992248091
      },
      {
        "horizon": "3M",
        "stock": -0.021897810218978186,
        "market": 0.0031558757542777816,
        "sector": -0.014479218368042002,
        "peers": -0.14649681528662395
      },
      {
        "horizon": "6M",
        "stock": -0.028985507246377162,
        "market": 0.11109323741368993,
        "sector": -0.01804625197930365,
        "peers": -0.16249999999999953
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
      "share_market": 0.20928119837478135,
      "share_sector": 0.3423413551145347,
      "share_idio": 0.44837744651068395,
      "beta_market": 0.7855377994097157,
      "beta_sector": -2.407836613719821,
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
            "median": 0.20928119837478135,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "20.9%",
            "display_range": null,
            "display_text": "20.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 20.9,
            "plain_english": "Market explains about 20.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3423413551145347,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.2%",
            "display_range": null,
            "display_text": "34.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 34.2,
            "plain_english": "Sector explains about 34.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.44837744651068395,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.8%",
            "display_range": null,
            "display_text": "44.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 44.8,
            "plain_english": "Company-specific explains about 44.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.7855377994097157,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.79",
            "display_range": null,
            "display_text": "0.79",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.79% stock move in the same direction in this state.",
            "value_num": 0.79
          },
          "beta_stock_lag": {
            "median": -1.6137834515180363,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.61",
            "display_range": null,
            "display_text": "-1.61",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.61
          },
          "beta_sector": {
            "median": -2.407836613719821,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.41",
            "display_range": null,
            "display_text": "-2.41",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.41% stock move in the opposite direction in this state.",
            "value_num": -2.41
          },
          "beta_market_lag": {
            "median": 0.042195685695877214,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.04",
            "display_range": null,
            "display_text": "0.04",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.04
          },
          "beta_sector_lag": {
            "median": -0.3474816693455593,
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
            "period_label": "2025-05-08 to 2025-05-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5574182685959428,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.7%",
              "display_range": null,
              "display_text": "55.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 55.7,
              "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3434317381521688,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.3%",
                "display_range": null,
                "display_text": "34.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 34.3,
                "plain_english": "Market explains about 34.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09914999325188843,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.9%",
                "display_range": null,
                "display_text": "9.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 9.9,
                "plain_english": "Sector explains about 9.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5574182685959428,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.7%",
                "display_range": null,
                "display_text": "55.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 55.7,
                "plain_english": "Company-specific explains about 55.7% of price moves in the current state."
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
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0055815000876977125,
              "low": 0.0055815000876977125,
              "high": 0.0055815000876977125
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010925945929232118,
              "low": 0.010925945929232118,
              "high": 0.010925945929232118
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
            ],
            [
              0.08943089430894309,
              0.9105691056910569
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              11.0
            ],
            [
              11.0,
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
          "market_link_display": "0.79",
          "sector_link_display": "-2.41",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.79% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.41% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.61",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 44.8,
          "driver_share_display": "44.8%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9105691056910569,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
          "expected_duration_days": 10.3
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
          "period_label": "2025-05-08 to 2025-05-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.3434317381521688,
          "share_sector": 0.09914999325188843,
          "share_company": 0.5574182685959428,
          "share_market_display": "34.3%",
          "share_sector_display": "9.9%",
          "share_company_display": "55.7%",
          "dominant_share_display": "55.7%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0055815000876977125,
              "low": 0.0055815000876977125,
              "high": 0.0055815000876977125
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010925945929232118,
              "low": 0.010925945929232118,
              "high": 0.010925945929232118
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 17800.0,
          "value": 11837.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1845500.0,
          "value": 1218030.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 679500.0,
          "value": 445072.5
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 331200.0,
          "value": 215280.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 139600.0,
          "value": 90042.0
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 192800.0,
          "value": 123392.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 119700.0,
          "value": 76009.5
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 467000.0,
          "value": 294210.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 108300.0,
          "value": 67687.5
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 74200.0,
          "value": 46004.0
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
          "quantity": 42800.0,
          "value": 25680.0
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
          "quantity": 10500.0,
          "value": 5932.499999999999
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
          "quantity": 3000.0,
          "value": 1560.0
        },
        {
          "level": 21,
          "price": 0.515,
          "quantity": 2000.0,
          "value": 1030.0
        },
        {
          "level": 22,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 1362100.0,
          "value": 912607.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 339700.0,
          "value": 229297.50000000003
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 348100.0,
          "value": 236708.00000000003
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 455200.0,
          "value": 311812.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1177200.0,
          "value": 812267.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 52700.0,
          "value": 36626.5
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
          "quantity": 15200.0,
          "value": 10944.0
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
          "quantity": 5000.0,
          "value": 4000.0
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
        "snapshot_time": "2026-05-05 08:59:46.843000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2693856.0,
        "ask_depth_notional_displayed": 2936309.0,
        "bid_depth_notional_top10": 2693856.0,
        "ask_depth_notional_top10": 2936309.0,
        "bid_ask_depth_ratio": 0.9174
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 100099,
        "first_trade_date": "2025-05-05",
        "last_trade_date": "2026-05-05",
        "window_label": "May 5, 2025 to May 5, 2026",
        "window_short_label": "May 5, 2025 to May 5, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "100,099 trades",
        "window_detail_label": "254 trading days • 100,099 trades",
        "history_note": "Trade-size percentiles use May 5, 2025 to May 5, 2026 history (254 trading days • 100,099 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.13,
            "pct_of_adv": 0.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7947.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.3,
            "pct_of_adv": 1.23
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339926.5,
            "impact_pct": -0.010976999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.62,
            "pct_of_adv": 52.72
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-05",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-04 22:59:01.329000000",
            "local_timestamp": "2026-05-05 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.011108,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 25.61,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8145139807368471552",
            "timestamp": "2026-05-05 05:20:02.704200000",
            "local_timestamp": "2026-05-05 13:20:02",
            "posted_price": 0.67,
            "size_shares": 500000.0,
            "notional": 335000.0,
            "impact_pct": -0.010973,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.44,
            "price_vs_mid_pct": 0.375,
            "executed_event_count": 0,
            "event_count": 16
          },
          {
            "rank": 3,
            "order_id": "8137619147833081856",
            "timestamp": "2026-05-04 22:59:01.329000000",
            "local_timestamp": "2026-05-05 06:59:01",
            "posted_price": 0.68,
            "size_shares": 208000.0,
            "notional": 141440.0,
            "impact_pct": -0.010613,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.25,
            "price_vs_mid_pct": 1.873,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-05",
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
            "bid_depth_notional": 2631355.0,
            "ask_depth_notional": 2871718.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2656137.5,
            "ask_depth_notional": 2932023.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2635151.5,
            "ask_depth_notional": 2875326.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2642642.0,
            "ask_depth_notional": 2897369.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2660691.0,
            "ask_depth_notional": 2858375.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2606617.5,
            "ask_depth_notional": 2898576.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3167687.0,
            "ask_depth_notional": 3166659.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3128244.5,
            "ask_depth_notional": 3178250.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3125784.0,
            "ask_depth_notional": 3213015.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3114412.5,
            "ask_depth_notional": 3203475.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3119564.5,
            "ask_depth_notional": 3199857.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3035575.0,
            "ask_depth_notional": 3212453.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2714188.5,
            "ask_depth_notional": 2955328.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2693856.0,
            "ask_depth_notional": 2936309.0,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2704022.25,
          "median_ask_depth_notional": 2945818.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "11:30",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.8,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 126.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 317,
          "n_runs": 71,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.12933753943217666,
            "mixed_pct": 0.12618296529968454,
            "instit_pct": 0.49842271293375395,
            "ambiguous_pct": 0.24605678233438485,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24605678233438485,
            "retail_qty_pct": 0.004784952150478495,
            "mixed_qty_pct": 0.03959960400395996,
            "instit_qty_pct": 0.8323066769332307,
            "ambiguous_qty_pct": 0.12330876691233088,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12330876691233088,
            "retail_notional_pct": 0.004805649332548704,
            "mixed_notional_pct": 0.03960272968480606,
            "instit_notional_pct": 0.8323011325507687,
            "ambiguous_notional_pct": 0.12329048843187661,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12329048843187661
          },
          "run_composition": {
            "retail_pct": 0.5492957746478874,
            "mixed_pct": 0.22535211267605634,
            "instit_pct": 0.07042253521126761,
            "ambiguous_pct": 0.15492957746478872,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15492957746478872,
            "retail_notional_pct": 0.004805649332548704,
            "mixed_notional_pct": 0.03960272968480606,
            "instit_notional_pct": 0.8323011325507687,
            "unclear_notional_pct": 0.12329048843187661
          },
          "counts": {
            "trades": {
              "retail": 41,
              "mixed": 40,
              "institutional": 158,
              "ambiguous": 78,
              "unobservable": 0,
              "unclear": 78
            },
            "runs": {
              "retail": 39,
              "mixed": 16,
              "institutional": 5,
              "ambiguous": 11,
              "unobservable": 0,
              "unclear": 11
            }
          },
          "confidence": {
            "high": 0.6197183098591549,
            "medium": 0.22535211267605634,
            "low": 0.15492957746478872,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 44,
            "medium": 16,
            "low": 11,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.6277602523659306,
            "medium": 0.12618296529968454,
            "low": 0.24605678233438485,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 199,
            "medium": 40,
            "low": 78,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8711267605633803,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15492957746478872,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5492957746478874,
          "dominance_gap": 0.323943661971831,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 209,
              "WALK_BOOK": 108
            },
            "d2_information": {
              "UNOBSERVABLE": 317
            },
            "d3_urgency": {
              "UNOBSERVABLE": 71
            },
            "participant_confidence": {
              "HIGH": 44,
              "MEDIUM": 16,
              "LOW": 11
            }
          },
          "trade_size": {
            "avg": 3819.4400630914824,
            "median": 67.0
          },
          "run_size": {
            "avg": 17052.99295774648,
            "median": 201.0,
            "avg_length": 1.2112676056338028
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-327",
              "timestamp": "2026-05-05T08:59:22.648200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47594,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-326",
              "timestamp": "2026-05-05T08:59:05.664900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-325",
              "timestamp": "2026-05-05T08:59:04.275700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-324",
              "timestamp": "2026-05-05T08:59:02.403300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-323",
              "timestamp": "2026-05-05T08:57:56.130800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-322",
              "timestamp": "2026-05-05T08:57:48.295500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-321",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-320",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 4000.0,
              "notional": 2660.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-05T08:57:31.833600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-05T08:51:42.806700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47589,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-05T08:10:28.408900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47588,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-05T08:09:28.396200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-05T08:09:21.678100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-05T08:08:48.414000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47586,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 3800.0,
              "notional": 2527.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-05T08:04:41.099100",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
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
              "retail_pct": 0.12933753943217666,
              "mixed_pct": 0.12618296529968454,
              "instit_pct": 0.49842271293375395,
              "ambiguous_pct": 0.24605678233438485,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24605678233438485,
              "retail_qty_pct": 0.004784952150478495,
              "mixed_qty_pct": 0.03959960400395996,
              "instit_qty_pct": 0.8323066769332307,
              "ambiguous_qty_pct": 0.12330876691233088,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12330876691233088,
              "retail_notional_pct": 0.004805649332548704,
              "mixed_notional_pct": 0.03960272968480606,
              "instit_notional_pct": 0.8323011325507687,
              "ambiguous_notional_pct": 0.12329048843187661,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12329048843187661,
              "run_retail_pct": 0.5492957746478874,
              "run_mixed_pct": 0.22535211267605634,
              "run_instit_pct": 0.07042253521126761,
              "run_unclear_pct": 0.15492957746478872,
              "avg_trade_size": 3819.4400630914824,
              "avg_run_notional": 17052.99295774648,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6197183098591549,
              "medium_confidence_pct": 0.22535211267605634,
              "low_confidence_pct": 0.15492957746478872,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8711267605633803,
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
              "retail_pct": 0.6145833333333334,
              "mixed_pct": 0.0546875,
              "instit_pct": 0.3307291666666667,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.6087165518346419,
              "mixed_qty_pct": 0.01682422688671687,
              "instit_qty_pct": 0.37445922127864123,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.6088066889648162,
              "mixed_notional_pct": 0.016759615626946438,
              "instit_notional_pct": 0.37443369540823734,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8021015761821366,
              "run_mixed_pct": 0.03677758318739054,
              "run_instit_pct": 0.16112084063047286,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 542.482421875,
              "avg_run_notional": 729.6436077057793,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6760070052539404,
              "low_confidence_pct": 0.3239929947460595,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48257443082311735,
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
          "n_trades": 7714,
          "n_runs": 4105,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-06",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.31747472128597354,
            "mixed_pct": 0.27534353124189787,
            "instit_pct": 0.2569354420534094,
            "ambiguous_pct": 0.15024630541871922,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15024630541871922,
            "retail_qty_pct": 0.024561935826443147,
            "mixed_qty_pct": 0.1710536296745809,
            "instit_qty_pct": 0.5618599711749981,
            "ambiguous_qty_pct": 0.24252446332397784,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24252446332397784,
            "retail_notional_pct": 0.024619972557223292,
            "mixed_notional_pct": 0.17128999644863607,
            "instit_notional_pct": 0.5613938004649812,
            "ambiguous_notional_pct": 0.24269623052915937,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24269623052915937
          },
          "run_composition": {
            "retail_pct": 0.5890377588306943,
            "mixed_pct": 0.2526187576126675,
            "instit_pct": 0.05797807551766139,
            "ambiguous_pct": 0.10036540803897685,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10036540803897685,
            "retail_notional_pct": 0.024619972557223292,
            "mixed_notional_pct": 0.17128999644863607,
            "instit_notional_pct": 0.5613938004649812,
            "unclear_notional_pct": 0.24269623052915937
          },
          "counts": {
            "trades": {
              "retail": 2449,
              "mixed": 2124,
              "institutional": 1982,
              "ambiguous": 1159,
              "unobservable": 0,
              "unclear": 1159
            },
            "runs": {
              "retail": 2418,
              "mixed": 1037,
              "institutional": 238,
              "ambiguous": 412,
              "unobservable": 0,
              "unclear": 412
            }
          },
          "confidence": {
            "high": 0.6470158343483556,
            "medium": 0.2526187576126675,
            "low": 0.10036540803897685,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2656,
            "medium": 1037,
            "low": 412,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.574410163339383,
            "medium": 0.27534353124189787,
            "low": 0.15024630541871922,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4431,
            "medium": 2124,
            "low": 1159,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8808160779537147,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10036540803897685,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5890377588306943,
          "dominance_gap": 0.3364190012180268,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7392,
              "WALK_BOOK": 318,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 7714
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4105
            },
            "participant_confidence": {
              "HIGH": 2656,
              "MEDIUM": 1037,
              "LOW": 412
            }
          },
          "trade_size": {
            "avg": 1687.1555613170858,
            "median": 132.0
          },
          "run_size": {
            "avg": 3170.4550548112056,
            "median": 133.0,
            "avg_length": 1.4957369062119366
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-327",
              "timestamp": "2026-05-05T08:59:22.648200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47594,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-326",
              "timestamp": "2026-05-05T08:59:05.664900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-325",
              "timestamp": "2026-05-05T08:59:04.275700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-324",
              "timestamp": "2026-05-05T08:59:02.403300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-323",
              "timestamp": "2026-05-05T08:57:56.130800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-322",
              "timestamp": "2026-05-05T08:57:48.295500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-321",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-320",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 4000.0,
              "notional": 2660.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-05T08:57:31.833600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-05T08:51:42.806700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47589,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-05T08:10:28.408900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47588,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-05T08:09:28.396200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-05T08:09:21.678100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-05T08:08:48.414000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47586,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 3800.0,
              "notional": 2527.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-05T08:04:41.099100",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
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
              "retail_pct": 0.31747472128597354,
              "mixed_pct": 0.27534353124189787,
              "instit_pct": 0.2569354420534094,
              "ambiguous_pct": 0.15024630541871922,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15024630541871922,
              "retail_qty_pct": 0.024561935826443147,
              "mixed_qty_pct": 0.1710536296745809,
              "instit_qty_pct": 0.5618599711749981,
              "ambiguous_qty_pct": 0.24252446332397784,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24252446332397784,
              "retail_notional_pct": 0.024619972557223292,
              "mixed_notional_pct": 0.17128999644863607,
              "instit_notional_pct": 0.5613938004649812,
              "ambiguous_notional_pct": 0.24269623052915937,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24269623052915937,
              "run_retail_pct": 0.5890377588306943,
              "run_mixed_pct": 0.2526187576126675,
              "run_instit_pct": 0.05797807551766139,
              "run_unclear_pct": 0.10036540803897685,
              "avg_trade_size": 1687.1555613170858,
              "avg_run_notional": 3170.4550548112056,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6470158343483556,
              "medium_confidence_pct": 0.2526187576126675,
              "low_confidence_pct": 0.10036540803897685,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8808160779537147,
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
              "retail_pct": 0.49224755700325734,
              "mixed_pct": 0.03798045602605863,
              "instit_pct": 0.4676872964169381,
              "ambiguous_pct": 0.002084690553745928,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002084690553745928,
              "retail_qty_pct": 0.21816136103513162,
              "mixed_qty_pct": 0.008434693204523851,
              "instit_qty_pct": 0.7732797920425226,
              "ambiguous_qty_pct": 0.00012415371782187822,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00012415371782187822,
              "retail_notional_pct": 0.2185896635083019,
              "mixed_notional_pct": 0.008404772628160861,
              "instit_notional_pct": 0.7728792538582174,
              "ambiguous_notional_pct": 0.00012631000531977175,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00012631000531977175,
              "run_retail_pct": 0.7928309665597801,
              "run_mixed_pct": 0.0298900595510765,
              "run_instit_pct": 0.17544663307375172,
              "run_unclear_pct": 0.0018323408153916628,
              "avg_trade_size": 1130.5620846905538,
              "avg_run_notional": 1987.4173156207055,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7242327072835547,
              "low_confidence_pct": 0.27576729271644523,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48215758131012376,
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
          "n_trades": 23065,
          "n_runs": 13529,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-02",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.35469325818339476,
            "mixed_pct": 0.2858877086494689,
            "instit_pct": 0.22644699761543463,
            "ambiguous_pct": 0.1329720355517017,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1329720355517017,
            "retail_qty_pct": 0.02219358451963905,
            "mixed_qty_pct": 0.1756399193064469,
            "instit_qty_pct": 0.5595543567089375,
            "ambiguous_qty_pct": 0.2426121394649766,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2426121394649766,
            "retail_notional_pct": 0.022155464541613844,
            "mixed_notional_pct": 0.1767097998633831,
            "instit_notional_pct": 0.558369987852022,
            "ambiguous_notional_pct": 0.24276474774298115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24276474774298115
          },
          "run_composition": {
            "retail_pct": 0.5990834503658807,
            "mixed_pct": 0.25145982703821423,
            "instit_pct": 0.05100155222115456,
            "ambiguous_pct": 0.09845517037475053,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09845517037475053,
            "retail_notional_pct": 0.022155464541613844,
            "mixed_notional_pct": 0.1767097998633831,
            "instit_notional_pct": 0.558369987852022,
            "unclear_notional_pct": 0.24276474774298115
          },
          "counts": {
            "trades": {
              "retail": 8181,
              "mixed": 6594,
              "institutional": 5223,
              "ambiguous": 3067,
              "unobservable": 0,
              "unclear": 3067
            },
            "runs": {
              "retail": 8105,
              "mixed": 3402,
              "institutional": 690,
              "ambiguous": 1332,
              "unobservable": 0,
              "unclear": 1332
            }
          },
          "confidence": {
            "high": 0.6500110872939611,
            "medium": 0.25153374233128833,
            "low": 0.09845517037475053,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8794,
            "medium": 3403,
            "low": 1332,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5810535443312378,
            "medium": 0.2859744201170605,
            "low": 0.1329720355517017,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13402,
            "medium": 6596,
            "low": 3067,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.877304309261586,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09845517037475053,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5990834503658807,
          "dominance_gap": 0.3476236233276665,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22189,
              "WALK_BOOK": 870,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23065
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13529
            },
            "participant_confidence": {
              "HIGH": 8794,
              "MEDIUM": 3403,
              "LOW": 1332
            }
          },
          "trade_size": {
            "avg": 2016.9660524604378,
            "median": 132.0
          },
          "run_size": {
            "avg": 3438.6371498262993,
            "median": 135.0,
            "avg_length": 1.3562717126173405
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-327",
              "timestamp": "2026-05-05T08:59:22.648200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47594,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-326",
              "timestamp": "2026-05-05T08:59:05.664900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-325",
              "timestamp": "2026-05-05T08:59:04.275700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-324",
              "timestamp": "2026-05-05T08:59:02.403300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-323",
              "timestamp": "2026-05-05T08:57:56.130800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-322",
              "timestamp": "2026-05-05T08:57:48.295500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-321",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-320",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 4000.0,
              "notional": 2660.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-05T08:57:31.833600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-05T08:51:42.806700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47589,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-05T08:10:28.408900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47588,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-05T08:09:28.396200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-05T08:09:21.678100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-05T08:08:48.414000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47586,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 3800.0,
              "notional": 2527.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-05T08:04:41.099100",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
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
              "retail_pct": 0.35469325818339476,
              "mixed_pct": 0.2858877086494689,
              "instit_pct": 0.22644699761543463,
              "ambiguous_pct": 0.1329720355517017,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1329720355517017,
              "retail_qty_pct": 0.02219358451963905,
              "mixed_qty_pct": 0.1756399193064469,
              "instit_qty_pct": 0.5595543567089375,
              "ambiguous_qty_pct": 0.2426121394649766,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2426121394649766,
              "retail_notional_pct": 0.022155464541613844,
              "mixed_notional_pct": 0.1767097998633831,
              "instit_notional_pct": 0.558369987852022,
              "ambiguous_notional_pct": 0.24276474774298115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24276474774298115,
              "run_retail_pct": 0.5990834503658807,
              "run_mixed_pct": 0.25145982703821423,
              "run_instit_pct": 0.05100155222115456,
              "run_unclear_pct": 0.09845517037475053,
              "avg_trade_size": 2016.9660524604378,
              "avg_run_notional": 3438.6371498262993,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6500110872939611,
              "medium_confidence_pct": 0.25153374233128833,
              "low_confidence_pct": 0.09845517037475053,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.877304309261586,
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
              "retail_pct": 0.45743566465309543,
              "mixed_pct": 0.04970494779845665,
              "instit_pct": 0.4906246726491847,
              "ambiguous_pct": 0.0022347148992632425,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0022347148992632425,
              "retail_qty_pct": 0.21821070107551815,
              "mixed_qty_pct": 0.03479934879541645,
              "instit_qty_pct": 0.7463804522683465,
              "ambiguous_qty_pct": 0.0006094978607188693,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0006094978607188693,
              "retail_notional_pct": 0.2189179660644222,
              "mixed_notional_pct": 0.03574366219177289,
              "instit_notional_pct": 0.7447329787691357,
              "ambiguous_notional_pct": 0.0006053929746692373,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0006053929746692373,
              "run_retail_pct": 0.7818364379198116,
              "run_mixed_pct": 0.037947510560210514,
              "run_instit_pct": 0.17824250398171873,
              "run_unclear_pct": 0.0019735475382591234,
              "avg_trade_size": 1492.5438213624777,
              "avg_run_notional": 2959.9724742053872,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7047642130046395,
              "low_confidence_pct": 0.2952357869953604,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4869624679731321,
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
          "n_trades": 45291,
          "n_runs": 27681,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-03",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.37292177253759023,
            "mixed_pct": 0.2827714115387163,
            "instit_pct": 0.21799032920447772,
            "ambiguous_pct": 0.12631648671921575,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12631648671921575,
            "retail_qty_pct": 0.030516208444718914,
            "mixed_qty_pct": 0.18977912165959107,
            "instit_qty_pct": 0.5318713704027911,
            "ambiguous_qty_pct": 0.24783329949289898,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24783329949289898,
            "retail_notional_pct": 0.030595712956003187,
            "mixed_notional_pct": 0.19072044665647622,
            "instit_notional_pct": 0.5305184862343181,
            "ambiguous_notional_pct": 0.24816535415320254,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24816535415320254
          },
          "run_composition": {
            "retail_pct": 0.6029045193453993,
            "mixed_pct": 0.2501715978468986,
            "instit_pct": 0.05429717134496586,
            "ambiguous_pct": 0.09262671146273617,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09262671146273617,
            "retail_notional_pct": 0.030594892079046282,
            "mixed_notional_pct": 0.19072060815567937,
            "instit_notional_pct": 0.5305189354693858,
            "unclear_notional_pct": 0.24816556429588857
          },
          "counts": {
            "trades": {
              "retail": 16890,
              "mixed": 12807,
              "institutional": 9873,
              "ambiguous": 5721,
              "unobservable": 0,
              "unclear": 5721
            },
            "runs": {
              "retail": 16689,
              "mixed": 6925,
              "institutional": 1503,
              "ambiguous": 2564,
              "unobservable": 0,
              "unclear": 2564
            }
          },
          "confidence": {
            "high": 0.6571655648278603,
            "medium": 0.2502077237094036,
            "low": 0.09262671146273617,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18191,
            "medium": 6926,
            "low": 2564,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5908458634165729,
            "medium": 0.2828155704223797,
            "low": 0.12633856616104744,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26760,
            "medium": 12809,
            "low": 5722,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8768649976518188,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09262671146273617,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6029045193453993,
          "dominance_gap": 0.3527329214985008,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44145,
              "WALK_BOOK": 1139,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 45291
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27681
            },
            "participant_confidence": {
              "HIGH": 18191,
              "MEDIUM": 6926,
              "LOW": 2564
            }
          },
          "trade_size": {
            "avg": 1760.0260758208033,
            "median": 136.0
          },
          "run_size": {
            "avg": 2879.710758281854,
            "median": 138.0,
            "avg_length": 1.3453993714099923
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-327",
              "timestamp": "2026-05-05T08:59:22.648200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47594,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-326",
              "timestamp": "2026-05-05T08:59:05.664900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-325",
              "timestamp": "2026-05-05T08:59:04.275700",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-324",
              "timestamp": "2026-05-05T08:59:02.403300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47593,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-323",
              "timestamp": "2026-05-05T08:57:56.130800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-322",
              "timestamp": "2026-05-05T08:57:48.295500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47592,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-321",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-320",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 4000.0,
              "notional": 2660.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-05T08:57:41.696200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47591,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-05T08:57:31.833600",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-05T08:51:42.806700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47589,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-05T08:10:28.408900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47588,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-05T08:09:28.396200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-05T08:09:21.678100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47587,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-05T08:08:48.414000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47586,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-05T08:04:41.129800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-05T08:04:41.129700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-05T08:04:41.129600",
              "price": 0.665,
              "size": 3800.0,
              "notional": 2527.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-05T08:04:41.099100",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47585,
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
              "retail_pct": 0.37292177253759023,
              "mixed_pct": 0.2827714115387163,
              "instit_pct": 0.21799032920447772,
              "ambiguous_pct": 0.12631648671921575,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12631648671921575,
              "retail_qty_pct": 0.030516208444718914,
              "mixed_qty_pct": 0.18977912165959107,
              "instit_qty_pct": 0.5318713704027911,
              "ambiguous_qty_pct": 0.24783329949289898,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24783329949289898,
              "retail_notional_pct": 0.030595712956003187,
              "mixed_notional_pct": 0.19072044665647622,
              "instit_notional_pct": 0.5305184862343181,
              "ambiguous_notional_pct": 0.24816535415320254,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24816535415320254,
              "run_retail_pct": 0.6029045193453993,
              "run_mixed_pct": 0.2501715978468986,
              "run_instit_pct": 0.05429717134496586,
              "run_unclear_pct": 0.09262671146273617,
              "avg_trade_size": 1760.0260758208033,
              "avg_run_notional": 2879.710758281854,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6571655648278603,
              "medium_confidence_pct": 0.2502077237094036,
              "low_confidence_pct": 0.09262671146273617,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8768649976518188,
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
              "retail_pct": 0.4759901169221863,
              "mixed_pct": 0.04712036472278794,
              "instit_pct": 0.47529747443942477,
              "ambiguous_pct": 0.0015920439156009965,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0015920439156009965,
              "retail_qty_pct": 0.22884261281502413,
              "mixed_qty_pct": 0.026702029331061628,
              "instit_qty_pct": 0.7440431688358073,
              "ambiguous_qty_pct": 0.0004121890181068747,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004121890181068747,
              "retail_notional_pct": 0.22996941397598125,
              "mixed_notional_pct": 0.02660213998456162,
              "instit_notional_pct": 0.743034473010874,
              "ambiguous_notional_pct": 0.0003939730285831512,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0003939730285831512,
              "run_retail_pct": 0.7916262879971521,
              "run_mixed_pct": 0.03593536775903328,
              "run_instit_pct": 0.17109348733263455,
              "run_unclear_pct": 0.001344856911180112,
              "avg_trade_size": 1560.9794998500997,
              "avg_run_notional": 2986.2766845321676,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7166702925063781,
              "low_confidence_pct": 0.2833297074936218,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4850562664398869,
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
      "n_trades": 45291,
      "n_runs": 27681,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-03",
      "last_trade_date": "2026-05-05",
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
        "retail_pct": 0.37292177253759023,
        "mixed_pct": 0.2827714115387163,
        "instit_pct": 0.21799032920447772,
        "ambiguous_pct": 0.12631648671921575,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12631648671921575,
        "retail_qty_pct": 0.030516208444718914,
        "mixed_qty_pct": 0.18977912165959107,
        "instit_qty_pct": 0.5318713704027911,
        "ambiguous_qty_pct": 0.24783329949289898,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.24783329949289898,
        "retail_notional_pct": 0.030595712956003187,
        "mixed_notional_pct": 0.19072044665647622,
        "instit_notional_pct": 0.5305184862343181,
        "ambiguous_notional_pct": 0.24816535415320254,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24816535415320254
      },
      "run_composition": {
        "retail_pct": 0.6029045193453993,
        "mixed_pct": 0.2501715978468986,
        "instit_pct": 0.05429717134496586,
        "ambiguous_pct": 0.09262671146273617,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09262671146273617
      },
      "trade_size": {
        "avg": 1760.0260758208033,
        "median": 136.0
      },
      "run_size": {
        "avg": 2879.710758281854,
        "median": 138.0,
        "avg_length": 1.3453993714099923
      },
      "confidence": {
        "high": 0.6571655648278603,
        "medium": 0.2502077237094036,
        "low": 0.09262671146273617,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 18191,
        "medium": 6926,
        "low": 2564,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5908458634165729,
        "medium": 0.2828155704223797,
        "low": 0.12633856616104744,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 26760,
        "medium": 12809,
        "low": 5722,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16890,
          "mixed": 12807,
          "institutional": 9873,
          "ambiguous": 5721,
          "unobservable": 0,
          "unclear": 5721
        },
        "runs": {
          "retail": 16689,
          "mixed": 6925,
          "institutional": 1503,
          "ambiguous": 2564,
          "unobservable": 0,
          "unclear": 2564
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8768649976518188,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09262671146273617,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6029045193453993,
      "dominance_gap": 0.3527329214985008,
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
            "n_trades": 602,
            "n_runs": 290,
            "retail_pct": 0.2840531561461794,
            "mixed_pct": 0.19767441860465115,
            "instit_pct": 0.2973421926910299,
            "ambiguous_pct": 0.22093023255813954,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22093023255813954,
            "avg_trade_size": 2478.309800664452,
            "avg_run_notional": 5144.629310344828,
            "retail_qty_pct": 0.026475578176622914,
            "mixed_qty_pct": 0.07540851861773373,
            "instit_qty_pct": 0.7170283060987588,
            "ambiguous_qty_pct": 0.18108759710688455,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18108759710688455,
            "retail_notional_pct": 0.026552967021182115,
            "mixed_notional_pct": 0.075377904979582,
            "instit_notional_pct": 0.7168513531855283,
            "ambiguous_notional_pct": 0.18121777481370763,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18121777481370763,
            "run_retail_pct": 0.5689655172413793,
            "run_mixed_pct": 0.2413793103448276,
            "run_instit_pct": 0.04827586206896552,
            "run_ambiguous_pct": 0.1413793103448276,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1413793103448276,
            "avg_feature_coverage": 0.8722413793103447,
            "high_confidence_pct": 0.6172413793103448,
            "medium_confidence_pct": 0.2413793103448276,
            "low_confidence_pct": 0.1413793103448276,
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
          "retail_pct": 0.37292177253759023,
          "mixed_pct": 0.2827714115387163,
          "instit_pct": 0.21799032920447772,
          "ambiguous_pct": 0.12631648671921575,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12631648671921575,
          "retail_qty_pct": 0.030516208444718914,
          "mixed_qty_pct": 0.18977912165959107,
          "instit_qty_pct": 0.5318713704027911,
          "ambiguous_qty_pct": 0.24783329949289898,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.24783329949289898,
          "retail_notional_pct": 0.030595712956003187,
          "mixed_notional_pct": 0.19072044665647622,
          "instit_notional_pct": 0.5305184862343181,
          "ambiguous_notional_pct": 0.24816535415320254,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24816535415320254,
          "run_retail_pct": 0.6029045193453993,
          "run_mixed_pct": 0.2501715978468986,
          "run_instit_pct": 0.05429717134496586,
          "run_unclear_pct": 0.09262671146273617,
          "avg_trade_size": 1760.0260758208033,
          "avg_run_notional": 2879.710758281854,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6571655648278603,
          "medium_confidence_pct": 0.2502077237094036,
          "low_confidence_pct": 0.09262671146273617,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8768649976518188,
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
          "retail_pct": 0.4759901169221863,
          "mixed_pct": 0.04712036472278794,
          "instit_pct": 0.47529747443942477,
          "ambiguous_pct": 0.0015920439156009965,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0015920439156009965,
          "retail_qty_pct": 0.22884261281502413,
          "mixed_qty_pct": 0.026702029331061628,
          "instit_qty_pct": 0.7440431688358073,
          "ambiguous_qty_pct": 0.0004121890181068747,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004121890181068747,
          "retail_notional_pct": 0.22996941397598125,
          "mixed_notional_pct": 0.02660213998456162,
          "instit_notional_pct": 0.743034473010874,
          "ambiguous_notional_pct": 0.0003939730285831512,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0003939730285831512,
          "run_retail_pct": 0.7916262879971521,
          "run_mixed_pct": 0.03593536775903328,
          "run_instit_pct": 0.17109348733263455,
          "run_unclear_pct": 0.001344856911180112,
          "avg_trade_size": 1560.9794998500997,
          "avg_run_notional": 2986.2766845321676,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7166702925063781,
          "low_confidence_pct": 0.2833297074936218,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4850562664398869,
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
            "retail_pct": 0.12933753943217666,
            "mixed_pct": 0.12618296529968454,
            "instit_pct": 0.49842271293375395,
            "ambiguous_pct": 0.24605678233438485,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24605678233438485,
            "retail_qty_pct": 0.004784952150478495,
            "mixed_qty_pct": 0.03959960400395996,
            "instit_qty_pct": 0.8323066769332307,
            "ambiguous_qty_pct": 0.12330876691233088,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12330876691233088,
            "retail_notional_pct": 0.004805649332548704,
            "mixed_notional_pct": 0.03960272968480606,
            "instit_notional_pct": 0.8323011325507687,
            "ambiguous_notional_pct": 0.12329048843187661,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12329048843187661,
            "run_retail_pct": 0.5492957746478874,
            "run_mixed_pct": 0.22535211267605634,
            "run_instit_pct": 0.07042253521126761,
            "run_unclear_pct": 0.15492957746478872,
            "avg_trade_size": 3819.4400630914824,
            "avg_run_notional": 17052.99295774648,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6197183098591549,
            "medium_confidence_pct": 0.22535211267605634,
            "low_confidence_pct": 0.15492957746478872,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8711267605633803,
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
            "retail_pct": 0.6145833333333334,
            "mixed_pct": 0.0546875,
            "instit_pct": 0.3307291666666667,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.6087165518346419,
            "mixed_qty_pct": 0.01682422688671687,
            "instit_qty_pct": 0.37445922127864123,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.6088066889648162,
            "mixed_notional_pct": 0.016759615626946438,
            "instit_notional_pct": 0.37443369540823734,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8021015761821366,
            "run_mixed_pct": 0.03677758318739054,
            "run_instit_pct": 0.16112084063047286,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 542.482421875,
            "avg_run_notional": 729.6436077057793,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6760070052539404,
            "low_confidence_pct": 0.3239929947460595,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48257443082311735,
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
            "retail_pct": 0.31747472128597354,
            "mixed_pct": 0.27534353124189787,
            "instit_pct": 0.2569354420534094,
            "ambiguous_pct": 0.15024630541871922,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15024630541871922,
            "retail_qty_pct": 0.024561935826443147,
            "mixed_qty_pct": 0.1710536296745809,
            "instit_qty_pct": 0.5618599711749981,
            "ambiguous_qty_pct": 0.24252446332397784,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24252446332397784,
            "retail_notional_pct": 0.024619972557223292,
            "mixed_notional_pct": 0.17128999644863607,
            "instit_notional_pct": 0.5613938004649812,
            "ambiguous_notional_pct": 0.24269623052915937,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24269623052915937,
            "run_retail_pct": 0.5890377588306943,
            "run_mixed_pct": 0.2526187576126675,
            "run_instit_pct": 0.05797807551766139,
            "run_unclear_pct": 0.10036540803897685,
            "avg_trade_size": 1687.1555613170858,
            "avg_run_notional": 3170.4550548112056,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6470158343483556,
            "medium_confidence_pct": 0.2526187576126675,
            "low_confidence_pct": 0.10036540803897685,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8808160779537147,
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
            "retail_pct": 0.49224755700325734,
            "mixed_pct": 0.03798045602605863,
            "instit_pct": 0.4676872964169381,
            "ambiguous_pct": 0.002084690553745928,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002084690553745928,
            "retail_qty_pct": 0.21816136103513162,
            "mixed_qty_pct": 0.008434693204523851,
            "instit_qty_pct": 0.7732797920425226,
            "ambiguous_qty_pct": 0.00012415371782187822,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00012415371782187822,
            "retail_notional_pct": 0.2185896635083019,
            "mixed_notional_pct": 0.008404772628160861,
            "instit_notional_pct": 0.7728792538582174,
            "ambiguous_notional_pct": 0.00012631000531977175,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00012631000531977175,
            "run_retail_pct": 0.7928309665597801,
            "run_mixed_pct": 0.0298900595510765,
            "run_instit_pct": 0.17544663307375172,
            "run_unclear_pct": 0.0018323408153916628,
            "avg_trade_size": 1130.5620846905538,
            "avg_run_notional": 1987.4173156207055,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7242327072835547,
            "low_confidence_pct": 0.27576729271644523,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48215758131012376,
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
            "retail_pct": 0.35469325818339476,
            "mixed_pct": 0.2858877086494689,
            "instit_pct": 0.22644699761543463,
            "ambiguous_pct": 0.1329720355517017,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1329720355517017,
            "retail_qty_pct": 0.02219358451963905,
            "mixed_qty_pct": 0.1756399193064469,
            "instit_qty_pct": 0.5595543567089375,
            "ambiguous_qty_pct": 0.2426121394649766,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2426121394649766,
            "retail_notional_pct": 0.022155464541613844,
            "mixed_notional_pct": 0.1767097998633831,
            "instit_notional_pct": 0.558369987852022,
            "ambiguous_notional_pct": 0.24276474774298115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24276474774298115,
            "run_retail_pct": 0.5990834503658807,
            "run_mixed_pct": 0.25145982703821423,
            "run_instit_pct": 0.05100155222115456,
            "run_unclear_pct": 0.09845517037475053,
            "avg_trade_size": 2016.9660524604378,
            "avg_run_notional": 3438.6371498262993,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6500110872939611,
            "medium_confidence_pct": 0.25153374233128833,
            "low_confidence_pct": 0.09845517037475053,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.877304309261586,
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
            "retail_pct": 0.45743566465309543,
            "mixed_pct": 0.04970494779845665,
            "instit_pct": 0.4906246726491847,
            "ambiguous_pct": 0.0022347148992632425,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0022347148992632425,
            "retail_qty_pct": 0.21821070107551815,
            "mixed_qty_pct": 0.03479934879541645,
            "instit_qty_pct": 0.7463804522683465,
            "ambiguous_qty_pct": 0.0006094978607188693,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0006094978607188693,
            "retail_notional_pct": 0.2189179660644222,
            "mixed_notional_pct": 0.03574366219177289,
            "instit_notional_pct": 0.7447329787691357,
            "ambiguous_notional_pct": 0.0006053929746692373,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0006053929746692373,
            "run_retail_pct": 0.7818364379198116,
            "run_mixed_pct": 0.037947510560210514,
            "run_instit_pct": 0.17824250398171873,
            "run_unclear_pct": 0.0019735475382591234,
            "avg_trade_size": 1492.5438213624777,
            "avg_run_notional": 2959.9724742053872,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7047642130046395,
            "low_confidence_pct": 0.2952357869953604,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4869624679731321,
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
            "retail_pct": 0.37292177253759023,
            "mixed_pct": 0.2827714115387163,
            "instit_pct": 0.21799032920447772,
            "ambiguous_pct": 0.12631648671921575,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12631648671921575,
            "retail_qty_pct": 0.030516208444718914,
            "mixed_qty_pct": 0.18977912165959107,
            "instit_qty_pct": 0.5318713704027911,
            "ambiguous_qty_pct": 0.24783329949289898,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24783329949289898,
            "retail_notional_pct": 0.030595712956003187,
            "mixed_notional_pct": 0.19072044665647622,
            "instit_notional_pct": 0.5305184862343181,
            "ambiguous_notional_pct": 0.24816535415320254,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24816535415320254,
            "run_retail_pct": 0.6029045193453993,
            "run_mixed_pct": 0.2501715978468986,
            "run_instit_pct": 0.05429717134496586,
            "run_unclear_pct": 0.09262671146273617,
            "avg_trade_size": 1760.0260758208033,
            "avg_run_notional": 2879.710758281854,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6571655648278603,
            "medium_confidence_pct": 0.2502077237094036,
            "low_confidence_pct": 0.09262671146273617,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8768649976518188,
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
            "retail_pct": 0.4759901169221863,
            "mixed_pct": 0.04712036472278794,
            "instit_pct": 0.47529747443942477,
            "ambiguous_pct": 0.0015920439156009965,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0015920439156009965,
            "retail_qty_pct": 0.22884261281502413,
            "mixed_qty_pct": 0.026702029331061628,
            "instit_qty_pct": 0.7440431688358073,
            "ambiguous_qty_pct": 0.0004121890181068747,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004121890181068747,
            "retail_notional_pct": 0.22996941397598125,
            "mixed_notional_pct": 0.02660213998456162,
            "instit_notional_pct": 0.743034473010874,
            "ambiguous_notional_pct": 0.0003939730285831512,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0003939730285831512,
            "run_retail_pct": 0.7916262879971521,
            "run_mixed_pct": 0.03593536775903328,
            "run_instit_pct": 0.17109348733263455,
            "run_unclear_pct": 0.001344856911180112,
            "avg_trade_size": 1560.9794998500997,
            "avg_run_notional": 2986.2766845321676,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7166702925063781,
            "low_confidence_pct": 0.2833297074936218,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4850562664398869,
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
          "trade_id": "BMLL-327",
          "timestamp": "2026-05-05T08:59:22.648200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47594,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-326",
          "timestamp": "2026-05-05T08:59:05.664900",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47593,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-325",
          "timestamp": "2026-05-05T08:59:04.275700",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47593,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-324",
          "timestamp": "2026-05-05T08:59:02.403300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47593,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-323",
          "timestamp": "2026-05-05T08:57:56.130800",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47592,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-322",
          "timestamp": "2026-05-05T08:57:48.295500",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47592,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-321",
          "timestamp": "2026-05-05T08:57:41.696200",
          "price": 0.665,
          "size": 900.0,
          "notional": 598.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47591,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-320",
          "timestamp": "2026-05-05T08:57:41.696200",
          "price": 0.665,
          "size": 4000.0,
          "notional": 2660.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47591,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-319",
          "timestamp": "2026-05-05T08:57:41.696200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47591,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-318",
          "timestamp": "2026-05-05T08:57:31.833600",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-317",
          "timestamp": "2026-05-05T08:51:42.806700",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47589,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-316",
          "timestamp": "2026-05-05T08:10:28.408900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47588,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-315",
          "timestamp": "2026-05-05T08:09:28.396200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47587,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-314",
          "timestamp": "2026-05-05T08:09:21.678100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47587,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-313",
          "timestamp": "2026-05-05T08:08:48.414000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47586,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-312",
          "timestamp": "2026-05-05T08:04:41.129800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-311",
          "timestamp": "2026-05-05T08:04:41.129800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-310",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-309",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-308",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 1300.0,
          "notional": 864.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-307",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-306",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-305",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-304",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-303",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-302",
          "timestamp": "2026-05-05T08:04:41.129700",
          "price": 0.665,
          "size": 600.0,
          "notional": 399.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-301",
          "timestamp": "2026-05-05T08:04:41.129600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-300",
          "timestamp": "2026-05-05T08:04:41.129600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-299",
          "timestamp": "2026-05-05T08:04:41.129600",
          "price": 0.665,
          "size": 3800.0,
          "notional": 2527.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-298",
          "timestamp": "2026-05-05T08:04:41.099100",
          "price": 0.665,
          "size": 9800.0,
          "notional": 6517.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47585,
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
      "total_trades": 45290,
      "price_moving_trades": 10769,
      "pct_price_moving": 23.777875910797086,
      "all_movers": {
        "count": 10769,
        "avg_size": 1458.5509796638498,
        "median_size": 192.0,
        "retail_count": 5730,
        "mixed_count": 3162,
        "institutional_count": 678,
        "ambiguous_count": 1199,
        "unobservable_count": 0,
        "retail_pct": 53.20828303463646,
        "mixed_pct": 29.362057758380537,
        "instit_pct": 6.295849196768502,
        "unclear_pct": 11.133810010214505
      },
      "positive_movers": {
        "count": 5377,
        "avg_size": 1458.4589920029757,
        "median_size": 138.0,
        "retail_count": 2749,
        "mixed_count": 1625,
        "institutional_count": 335,
        "ambiguous_count": 668,
        "unobservable_count": 0,
        "retail_pct": 51.125162730146926,
        "mixed_pct": 30.22131299981402,
        "instit_pct": 6.230239910730891,
        "unclear_pct": 12.423284359308164
      },
      "negative_movers": {
        "count": 5392,
        "avg_size": 1458.6427114243324,
        "median_size": 198.0,
        "retail_count": 2981,
        "mixed_count": 1537,
        "institutional_count": 343,
        "ambiguous_count": 531,
        "unobservable_count": 0,
        "retail_pct": 55.28560830860534,
        "mixed_pct": 28.50519287833828,
        "instit_pct": 6.361275964391691,
        "unclear_pct": 9.847922848664687
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
            "avg_short_ratio": 0.03772815716787533,
            "max_short_ratio": 0.1613056945437217,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0689636702212984,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.062185684333212136,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12870697851704938,
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
            "avg_short_ratio": 0.017734484535759123
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
            "avg_short_ratio": 0.017734484535759123,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 121.31209328379194
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
        "interpretation": "Shorts covering significantly (-55% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.04602865135203865,
            "short_vol": 54300,
            "total_vol": 1179700,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.16329378925331473,
            "short_vol": 23400,
            "total_vol": 143300,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.08530183727034121,
            "short_vol": 84500,
            "total_vol": 990600,
            "close": 0.675,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.0689636702212984,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.061721746207185055,
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
          "opening": 0.007651404722589652,
          "continuous": 0.9141577970242581,
          "closing": 0.05658044856096223,
          "auctions": 0.0858422029757418,
          "other": 0.0
        },
        "1M": {
          "opening": 0.014523712075379485,
          "continuous": 0.9074002990064324,
          "closing": 0.06537182656596167,
          "auctions": 0.0925997009935676,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04634989793301307,
          "continuous": 0.8735800675526735,
          "closing": 0.06584360367130841,
          "auctions": 0.1264199324473266,
          "other": 0.0
        },
        "6M": {
          "opening": 0.036549880704804284,
          "continuous": 0.8708126001406751,
          "closing": 0.08117186315418588,
          "auctions": 0.12918739985932506,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.223003854726801,
        "1M": 0.2352169049920969,
        "3M": 0.2336369184491574,
        "6M": 0.2315722724851784
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0176
        },
        {
          "time": "09:00",
          "avg_share": 0.0947
        },
        {
          "time": "09:30",
          "avg_share": 0.0409
        },
        {
          "time": "10:00",
          "avg_share": 0.0453
        },
        {
          "time": "10:30",
          "avg_share": 0.0348
        },
        {
          "time": "11:00",
          "avg_share": 0.0315
        },
        {
          "time": "11:30",
          "avg_share": 0.0401
        },
        {
          "time": "12:00",
          "avg_share": 0.2374
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
          "avg_share": 0.0325
        },
        {
          "time": "14:30",
          "avg_share": 0.0345
        },
        {
          "time": "15:00",
          "avg_share": 0.029
        },
        {
          "time": "15:30",
          "avg_share": 0.0504
        },
        {
          "time": "16:00",
          "avg_share": 0.043
        },
        {
          "time": "16:30",
          "avg_share": 0.0995
        },
        {
          "time": "17:00",
          "avg_share": 0.1178
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.696197177016902,
          "hhi": 0.22859074344027444,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.012982285445236,
          "hhi": 0.1732658758848002,
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
