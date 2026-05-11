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
      "marketCap": 838016708.0200001,
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
    "asof_date": "2026-05-04",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "838.0M",
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
          "score_pca": 75.98566308243727,
          "score_pca_percentile": 75.98566308243727,
          "rank_pca": 135,
          "total": 558,
          "adv_notional_sgd": 477935.5,
          "adv_volume_shares": 718700.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.00157243849927091,
          "votes": 344.0,
          "trades": 344.0,
          "spread_pct": 0.007490636704119858,
          "spread_ticks": 1.0,
          "amihud": 1.5614421961047465e-08,
          "volatility": 0.07141316959598021
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.511442356901798,
          "loadings": {
            "log_adv": 0.5577513663008947,
            "log_trades": 0.50886368740977,
            "log_turnover": 0.5133549103699443,
            "neg_spread": 0.3842196125406493,
            "neg_amihud": 0.05653945429561571,
            "neg_vol": -0.12496590123449966
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
          "peer_median_score_pca": 80.28673835125448,
          "peer_median_trades": 991.0,
          "peer_median_volatility": 0.1433653116071401,
          "peer_median_spread_pct": 0.007708502024291505,
          "peer_median_spread_ticks": 1.028395061728395,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -4.3,
            "adv_delta_pct": -36.0,
            "trades_delta_pct": -65.29,
            "volatility_delta_pct": 50.19,
            "spread_pct_delta_pct": 2.83,
            "spread_ticks_delta_pct": -2.76,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 69.16
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 477935.5,
            "trades": 344.0,
            "volatility": 0.07141316959598021,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 1.5614421961047465e-08,
            "turnover_ratio": 0.00157243849927091,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 80.28673835125448,
            "rank_pca": 111,
            "adv": 746861.5,
            "trades": 991.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007708502024291505,
            "spread_ticks": 1.028395061728395,
            "amihud": 0.0,
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
              "mean": 0.34458028717969874,
              "median": 0.17904420534906273,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.1454187587095166,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3670629.120650197,
              "median": 29446.75,
              "min": 0.0,
              "max": 319264520.0,
              "p5": 0.0,
              "p95": 16898143.70499997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10288929565494856,
              "median": 0.02862526881230793,
              "min": 0.00027741427863602243,
              "max": 1.4976744186046513,
              "p5": 0.0031960983598137197,
              "p95": 0.4914349619418904,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005031762879238168,
              "median": 0.0005945403700594198,
              "min": 0.0,
              "max": 0.20695887332136906,
              "p5": 0.0,
              "p95": 0.01933100442953734,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.852036430615261e-05,
              "median": 2.26690781125201e-08,
              "min": 0.0,
              "max": 0.013309671694764874,
              "p5": 0.0,
              "p95": 3.3013263600881625e-05,
              "count": 445
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 597.4283154121864,
              "median": 15.5,
              "min": 0.0,
              "max": 15215.0,
              "p5": 0.0,
              "p95": 4076.0999999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3755787862136354,
              "median": 0.16668600374296022,
              "min": 0.07141316959598021,
              "max": 1.469613012006543,
              "p5": 0.09042049124639646,
              "p95": 1.193690209690279,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9640542.85286202,
              "median": 612398.5,
              "min": 1566.0,
              "max": 61197396.0,
              "p5": 14942.273013653525,
              "p95": 44545160.399999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037710242889635426,
              "median": 0.008374464749404592,
              "min": 0.0042925414640382735,
              "max": 0.15384615384615383,
              "p5": 0.0043565658990548034,
              "p95": 0.1359085290482076,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029338508969641,
              "median": 0.0014112311417952257,
              "min": 6.928371784651632e-06,
              "max": 0.008025756909087071,
              "p5": 3.9818575455176875e-05,
              "p95": 0.007775492129758822,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8267639701573344e-06,
              "median": 5.744289996539756e-09,
              "min": 0.0,
              "max": 1.4349878743524651e-05,
              "p5": 0.0,
              "p95": 9.41041668881398e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1345.625,
              "median": 329.0,
              "min": 6.0,
              "max": 5848.0,
              "p5": 10.2,
              "p95": 4906.8499999999985,
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
              "mean": 991.0,
              "median": 991.0,
              "min": 991.0,
              "max": 991.0,
              "p5": 991.0,
              "p95": 991.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1433653116071401,
              "median": 0.1433653116071401,
              "min": 0.1433653116071401,
              "max": 0.1433653116071401,
              "p5": 0.1433653116071401,
              "p95": 0.1433653116071401,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007708502024291505,
              "median": 0.007708502024291505,
              "min": 0.007708502024291505,
              "max": 0.007708502024291505,
              "p5": 0.007708502024291505,
              "p95": 0.007708502024291505,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.028395061728395,
              "median": 1.028395061728395,
              "min": 1.028395061728395,
              "max": 1.028395061728395,
              "p5": 1.028395061728395,
              "p95": 1.028395061728395,
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
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.007462686567164201,
            "market": 0.0023653268018322127,
            "sector": -0.003731343283582156,
            "peers": 0.0,
            "vs_market": -0.009828013368996413,
            "vs_sector": -0.003731343283582045,
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
          "score_pca": 81.89964157706093,
          "score_pca_percentile": 81.89964157706093,
          "rank_pca": 102,
          "total": 558,
          "adv_notional_sgd": 623904.0,
          "adv_volume_shares": 931200.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002037365702686895,
          "votes": 344.0,
          "trades": 344.0,
          "spread_pct": 0.007722007722007728,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.1264727151016929
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5272634769589135,
          "loadings": {
            "log_adv": 0.5416523542081414,
            "log_trades": 0.4942888853823906,
            "log_turnover": 0.48906136159795793,
            "neg_spread": 0.4172331331523619,
            "neg_amihud": 0.11957283587484818,
            "neg_vol": 0.18635734243885704
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
          "peer_median_adv": 839596.0000000001,
          "peer_median_score_pca": 84.40860215053763,
          "peer_median_trades": 788.0,
          "peer_median_volatility": 0.18112090058456126,
          "peer_median_spread_pct": 0.007507761783799047,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 8.693788528045263e-09,
          "peer_median_turnover_ratio": 0.0010219158118342003,
          "target_vs_peer": {
            "score_pca_delta": -2.51,
            "adv_delta_pct": -25.7,
            "trades_delta_pct": -56.35,
            "volatility_delta_pct": 30.17,
            "spread_pct_delta_pct": -2.85,
            "spread_ticks_delta_pct": -0.81,
            "amihud_delta_pct": 38.96,
            "turnover_ratio_delta_pct": 99.37
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.89964157706093,
            "rank_pca": 102,
            "adv": 623904.0,
            "trades": 344.0,
            "volatility": 0.1264727151016929,
            "spread_pct": 0.007722007722007728,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002037365702686895,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 839596.0000000001,
            "trades": 788.0,
            "volatility": 0.18112090058456126,
            "spread_pct": 0.007507761783799047,
            "spread_ticks": 1.0081615120274914,
            "amihud": 8.693788528045263e-09,
            "turnover_ratio": 0.0010219158118342003,
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
              "mean": 0.6373587001861154,
              "median": 0.3969819697607195,
              "min": 0.0,
              "max": 7.784600182411426,
              "p5": 0.03327601539804331,
              "p95": 2.023330445637119,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3126504.5790225817,
              "median": 15191.400000000001,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 13962805.0,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10443199901352312,
              "median": 0.029921964818036564,
              "min": 0.00024072671116111928,
              "max": 1.2394366197183098,
              "p5": 0.0033119473274942518,
              "p95": 0.5355118211685886,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004005017880925449,
              "median": 0.0003090601432213137,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.013019871997280826,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.486922015785656e-05,
              "median": 9.102825769006315e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.703133455915119e-05,
              "count": 540
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 471.7078853046595,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 2683.45,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33977917291349713,
              "median": 0.15758694293642675,
              "min": 0.11411140367519748,
              "max": 1.6545135133888742,
              "p5": 0.11649624424526116,
              "p95": 1.1475042894860639,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9434289.935406147,
              "median": 680111.25,
              "min": 0.0,
              "max": 61197396.0,
              "p5": 2992.5000000000005,
              "p95": 43969618.649999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03930013307917631,
              "median": 0.008385890738831923,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004317902209208473,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002397762716156671,
              "median": 0.0009972370974068773,
              "min": 0.0,
              "max": 0.007310714682434931,
              "p5": 8.368796411960701e-05,
              "p95": 0.007254755218904031,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.996077083273587e-07,
              "median": 2.9599606474160375e-09,
              "min": 0.0,
              "max": 7.174939371762326e-06,
              "p5": 0.0,
              "p95": 4.666753417630324e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1195.5,
              "median": 354.5,
              "min": 0.0,
              "max": 6041.0,
              "p5": 3.5000000000000004,
              "p95": 4618.599999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 839596.0000000001,
              "median": 839596.0000000001,
              "min": 839596.0000000001,
              "max": 839596.0000000001,
              "p5": 839596.0000000001,
              "p95": 839596.0000000001,
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
              "mean": 0.18112090058456126,
              "median": 0.18112090058456126,
              "min": 0.18112090058456126,
              "max": 0.18112090058456126,
              "p5": 0.18112090058456126,
              "p95": 0.18112090058456126,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007507761783799047,
              "median": 0.007507761783799047,
              "min": 0.007507761783799047,
              "max": 0.007507761783799047,
              "p5": 0.007507761783799047,
              "p95": 0.007507761783799047,
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
              "mean": 8.693788528045263e-09,
              "median": 8.693788528045263e-09,
              "min": 8.693788528045263e-09,
              "max": 8.693788528045263e-09,
              "p5": 8.693788528045263e-09,
              "p95": 8.693788528045263e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010219158118342003,
              "median": 0.0010219158118342003,
              "min": 0.0010219158118342003,
              "max": 0.0010219158118342003,
              "p5": 0.0010219158118342003,
              "p95": 0.0010219158118342003,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0390625,
            "market": -0.010354055247534744,
            "sector": 0.024781511582851357,
            "peers": 0.02307692307692344,
            "vs_market": 0.049416555247534744,
            "vs_sector": 0.014280988417148643,
            "vs_peers": 0.01598557692307656
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
          "volatility": 0.1795534216118458
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.553460016836256,
          "loadings": {
            "log_adv": 0.5222078502713007,
            "log_trades": 0.4721016370078678,
            "log_turnover": 0.4737386083438201,
            "neg_spread": 0.4261365890396307,
            "neg_amihud": 0.18256173818617946,
            "neg_vol": 0.25508734905143565
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
          "peer_median_adv": 1264870.5,
          "peer_median_score_pca": 86.37992831541219,
          "peer_median_trades": 920.0,
          "peer_median_volatility": 0.20402885978308832,
          "peer_median_spread_pct": 0.0075084476641119,
          "peer_median_spread_ticks": 1.0038372985418265,
          "peer_median_amihud": 6.095702901292444e-09,
          "peer_median_turnover_ratio": 0.001546985376123191,
          "target_vs_peer": {
            "score_pca_delta": -2.33,
            "adv_delta_pct": -47.4,
            "trades_delta_pct": -57.5,
            "volatility_delta_pct": 12.0,
            "spread_pct_delta_pct": -1.41,
            "spread_ticks_delta_pct": -0.38,
            "amihud_delta_pct": 12.94,
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
            "volatility": 0.1795534216118458,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.37992831541219,
            "rank_pca": 77,
            "adv": 1264870.5,
            "trades": 920.0,
            "volatility": 0.20402885978308832,
            "spread_pct": 0.0075084476641119,
            "spread_ticks": 1.0038372985418265,
            "amihud": 6.095702901292444e-09,
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
              "mean": 0.6899426794737594,
              "median": 0.47148986029993056,
              "min": 0.0,
              "max": 7.564774051590233,
              "p5": 0.15564155645571875,
              "p95": 2.2398220796687123,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3285613.910734315,
              "median": 12473.8,
              "min": 0.0,
              "max": 290156410.0,
              "p5": 0.0,
              "p95": 13621181.09999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1004278895350987,
              "median": 0.030202364713511252,
              "min": 0.00026514881605562373,
              "max": 1.3542204201990415,
              "p5": 0.0035470187355088707,
              "p95": 0.4627088414079278,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005954785563079087,
              "median": 0.0002449970315369999,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.010408062133458396,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.841829261440864e-05,
              "median": 1.3179432704498753e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 4.30533467469172e-05,
              "count": 553
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 468.4121863799283,
              "median": 6.5,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2704.099999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35037832546471204,
              "median": 0.2000666699553456,
              "min": 0.13023182643117803,
              "max": 1.368671891272192,
              "p5": 0.14749438474441173,
              "p95": 1.0017007867860355,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10554965.759539425,
              "median": 740900.5,
              "min": 0.0,
              "max": 69800718.0,
              "p5": 7571.550000000001,
              "p95": 49490497.29999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037720226099286325,
              "median": 0.008332049010422329,
              "min": 0.004247569272483084,
              "max": 0.15384615384615383,
              "p5": 0.004341560280955303,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002637536477812335,
              "median": 0.0013274705052151712,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 8.529049960274842e-05,
              "p95": 0.007690793538031613,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1041992075008128e-06,
              "median": 5.44875254694933e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 3.611170376786596e-11,
              "p95": 5.720662144229969e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1221.875,
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
              "mean": 1264870.5,
              "median": 1264870.5,
              "min": 1264870.5,
              "max": 1264870.5,
              "p5": 1264870.5,
              "p95": 1264870.5,
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
              "mean": 0.20402885978308832,
              "median": 0.20402885978308832,
              "min": 0.20402885978308832,
              "max": 0.20402885978308832,
              "p5": 0.20402885978308832,
              "p95": 0.20402885978308832,
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
              "mean": 6.095702901292444e-09,
              "median": 6.095702901292444e-09,
              "min": 6.095702901292444e-09,
              "max": 6.095702901292444e-09,
              "p5": 6.095702901292444e-09,
              "p95": 6.095702901292444e-09,
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
            "stock": -0.036231884057971286,
            "market": -0.0011601809343464442,
            "sector": -0.01967491494474105,
            "peers": -0.1582278481012661,
            "vs_market": -0.03507170312362484,
            "vs_sector": -0.016556969113230235,
            "vs_peers": 0.12199596404329482
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
          "votes": 354.5,
          "trades": 354.5,
          "spread_pct": 0.0074349442379182205,
          "spread_ticks": 1.0,
          "amihud": 3.9140585202070595e-09,
          "volatility": 0.14256760903477322
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5772492039381493,
          "loadings": {
            "log_adv": 0.501907274562682,
            "log_trades": 0.447135108108735,
            "log_turnover": 0.4554501897116652,
            "neg_spread": 0.4347160044038936,
            "neg_amihud": 0.2637651105186202,
            "neg_vol": 0.2866607219649625
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
          "peer_median_adv": 1116959.5,
          "peer_median_score_pca": 87.09677419354838,
          "peer_median_trades": 749.5,
          "peer_median_volatility": 0.16920960712883296,
          "peer_median_spread_pct": 0.006696547555900304,
          "peer_median_spread_ticks": 1.0063465439173724,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0012073123793006789,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -48.8,
            "trades_delta_pct": -52.7,
            "volatility_delta_pct": 15.74,
            "spread_pct_delta_pct": -11.03,
            "spread_ticks_delta_pct": -0.63,
            "amihud_delta_pct": 28.29,
            "turnover_ratio_delta_pct": 54.15
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 571539.75,
            "trades": 354.5,
            "volatility": 0.14256760903477322,
            "spread_pct": 0.0074349442379182205,
            "spread_ticks": 1.0,
            "amihud": 3.9140585202070595e-09,
            "turnover_ratio": 0.001861130943933212,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1116959.5,
            "trades": 749.5,
            "volatility": 0.16920960712883296,
            "spread_pct": 0.006696547555900304,
            "spread_ticks": 1.0063465439173724,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0012073123793006789,
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
              "mean": 0.6894274639909456,
              "median": 0.45329816685415025,
              "min": 0.0,
              "max": 6.912950809089335,
              "p5": 0.15461775504429873,
              "p95": 2.0312003402442405,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2650366.2699173256,
              "median": 11977.3,
              "min": 0.0,
              "max": 251602868.5,
              "p5": 0.0,
              "p95": 10689058.124999989,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09571613279690724,
              "median": 0.0290128649043996,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.003595222836383144,
              "p95": 0.4829526351057452,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003294352140576203,
              "median": 0.00027543153281755795,
              "min": 0.0,
              "max": 0.8651374332608266,
              "p5": 0.0,
              "p95": 0.0072998076589477524,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.754492165894316e-06,
              "median": 1.6281929131169303e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.631154662463418e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 384.1218637992832,
              "median": 7.0,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 2131.3249999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35270913851112384,
              "median": 0.16844212583489582,
              "min": 0.12245630758964088,
              "max": 1.3328841135126952,
              "p5": 0.1294952630954372,
              "p95": 1.0618273639138338,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8818527.569316141,
              "median": 643123.625,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 12063.9225,
              "p95": 41026320.299999975,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03583602109149299,
              "median": 0.00808428434603335,
              "min": 0.004269437766509539,
              "max": 0.13333333333333333,
              "p5": 0.004339633174071997,
              "p95": 0.12579667946059614,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023205448028342426,
              "median": 0.0011638995327417742,
              "min": 0.0,
              "max": 0.006833889104561173,
              "p5": 8.128416089489489e-05,
              "p95": 0.006677436676072158,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.896734231133994e-07,
              "median": 4.686232901469962e-09,
              "min": 0.0,
              "max": 7.862776406832145e-06,
              "p5": 3.099796967904169e-11,
              "p95": 5.124181133588349e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1117.625,
              "median": 388.5,
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
              "mean": 1116959.5,
              "median": 1116959.5,
              "min": 1116959.5,
              "max": 1116959.5,
              "p5": 1116959.5,
              "p95": 1116959.5,
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
              "mean": 0.16920960712883296,
              "median": 0.16920960712883296,
              "min": 0.16920960712883296,
              "max": 0.16920960712883296,
              "p5": 0.16920960712883296,
              "p95": 0.16920960712883296,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006696547555900304,
              "median": 0.006696547555900304,
              "min": 0.006696547555900304,
              "max": 0.006696547555900304,
              "p5": 0.006696547555900304,
              "p95": 0.006696547555900304,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0063465439173724,
              "median": 1.0063465439173724,
              "min": 1.0063465439173724,
              "max": 1.0063465439173724,
              "p5": 1.0063465439173724,
              "p95": 1.0063465439173724,
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
              "mean": 0.0012073123793006789,
              "median": 0.0012073123793006789,
              "min": 0.0012073123793006789,
              "max": 0.0012073123793006789,
              "p5": 0.0012073123793006789,
              "p95": 0.0012073123793006789,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.0362318840579714,
            "market": 0.10971869447616944,
            "sector": -0.02012226413156737,
            "peers": -0.15822784810126667,
            "vs_market": -0.14595057853414084,
            "vs_sector": -0.01610961992640403,
            "vs_peers": 0.12199596404329527
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 76.0 vs peer median 80.3 (-4.3 pts).",
        "market_comparison": "The stock fell 0.7% on the day while peers were flat, which matters because weaker price action did not bring stronger trading support."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with a 1M liquidity score of 81.9 compared with a peer median of 84.4, so access is reasonable but not leading the group.",
        "market_comparison": "The stock returned 3.9% over 1M compared with 2.3% for peers, which matters because firmer performance has not translated into stronger relative liquidity."
      },
      "3m": {
        "liquidity": "Quarterly tradability remains broadly average, with a 3M liquidity score of 84.1 compared with a peer median of 86.4, keeping the stock slightly behind peers on access.",
        "market_comparison": "The stock returned -3.6% over 3M compared with -15.8% for peers, which matters because relative outperformance has not closed the liquidity gap."
      },
      "6m": {
        "liquidity": "Six-month tradability is average for its size, with a score of 85.1 compared with a peer median of 87.1, so liquidity is close to peers but not clearly stronger.",
        "market_comparison": "The stock returned -3.6% over 6M compared with -15.8% for peers, which matters because better relative returns sit alongside only middle-of-pack access."
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
          "median": 0.47461156564950197,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "47.5%",
          "display_range": null,
          "display_text": "47.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 47.5,
          "plain_english": "Market explains about 47.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.46105866595069156,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "46.1%",
          "display_range": null,
          "display_text": "46.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 46.1,
          "plain_english": "Sector explains about 46.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.06432976839980643,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.4%",
          "display_range": null,
          "display_text": "6.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 6.4,
          "plain_english": "Company-specific explains about 6.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.1904257394389403,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.19",
          "display_range": null,
          "display_text": "-0.19",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.19% stock move in the opposite direction in this state.",
          "value_num": -0.19
        },
        "beta_stock_lag": {
          "median": 0.17542283156289448,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.18",
          "display_range": null,
          "display_text": "0.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.18
        },
        "beta_sector": {
          "median": -2.0953394175837614,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.10",
          "display_range": null,
          "display_text": "-2.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.10% stock move in the opposite direction in this state.",
          "value_num": -2.1
        },
        "beta_market_lag": {
          "median": -0.5319057831448172,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.53",
          "display_range": null,
          "display_text": "-0.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.53
        },
        "beta_sector_lag": {
          "median": -0.20897803178798807,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.21",
          "display_range": null,
          "display_text": "-0.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.21
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
          "period_label": "2025-05-07 to 2025-05-30",
          "n_obs": 17,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5540193807090252,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.4%",
            "display_range": null,
            "display_text": "55.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 55.4,
            "plain_english": "Company-specific explains about 55.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3577687044457382,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.8%",
              "display_range": null,
              "display_text": "35.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 35.8,
              "plain_english": "Market explains about 35.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08821191484523659,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.8%",
              "display_range": null,
              "display_text": "8.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 8.8,
              "plain_english": "Sector explains about 8.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5540193807090252,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.4%",
              "display_range": null,
              "display_text": "55.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.4,
              "plain_english": "Company-specific explains about 55.4% of price moves in the current state."
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
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0055815000876977125,
            "low": 0.0055815000876977125,
            "high": 0.0055815000876977125
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010961439927584313,
            "low": 0.010961439927584313,
            "high": 0.010961439927584313
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
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
        "market_link_display": "-0.19",
        "sector_link_display": "-2.10",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.19% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.18",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 47.5,
        "driver_share_display": "47.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9193548387096774,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
        "expected_duration_days": 11.4
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
          "current_probability": 1.0,
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
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010961439927584313,
            "low": 0.010961439927584313,
            "high": 0.010961439927584313
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9193548387096774,
          0.08064516129032258
        ],
        [
          0.08870967741935484,
          0.9112903225806451
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
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
    "liq_subtitle": "Tradability is mixed for its size, with peer standing slightly below the group and near-term flow lighter than the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have outperformed over one month, with the stock up 3.9% compared with peers at 2.3% and the market at -1.0%.",
    "perf_insight": "Performance has been stronger than the main comparison groups, even as the six-month liquidity score sits 2.0 points below the peer median. That matters because the return backdrop is firmer than peers, while trading access remains broadly middle-of-the-pack.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main influence on trading now, pointing to a tape that is being led more by external factors than by stock-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 47.5% of price changes. Other influences are sector 46.1%, and company-specific 6.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 47.5%, sector 46.1%, and company-specific 6.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 47.5%, sector 46.1%, and company-specific 6.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market factors account for 47.5% of the current driver mix, while displayed depth remains balanced with bid depth at 0.94x ask depth and a 1 tick spread. That matters because trading conditions look orderly even with broader market moves playing a meaningful role.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market at 47.5%, so broader moves are setting the tone.",
      "The monthly pattern has shifted from clearly company-driven in February and mostly market in March and April to a more balanced mix now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look orderly, with balanced displayed depth and a 1 tick spread supporting a steady trading backdrop.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 5, 2025 to May 4, 2026 (253 trading days • 99,756 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks balanced, with displayed bid depth at 0.94x ask depth and a 1 tick spread. That matters because the order book is supporting orderly trading despite a mixed structural liquidity profile.",
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
    "intraday_subtitle": "Current trading conditions remain orderly, with balanced displayed depth and a mixed overall liquidity picture.",
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
    "intraday_insight": "The order book is balanced, with displayed bid depth at 0.94x ask depth and a 1 tick spread. That matters because immediate execution still looks orderly even as one-day average volume is 23.4% below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Broader market moves remain the main influence on the tape, with current execution still orderly.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with peer standing slightly below the group and current execution still orderly.",
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
    "liq_insight": "Liquidity is mixed for its size, with the 6M score at 85.1 compared with a peer median of 87.1. Recent flow is lighter, with 1D average volume down 23.4% from the 1M average. That leaves access broadly workable, but not as strong as the better-trading names in the peer group.",
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
        "value": "0.94x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.47% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.06% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.21% with 100.0% fill.",
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
        "value": "47.5",
        "suffix": "market",
        "bar_pct": 47,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 46.1% • Company 6.4%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for its size, with a 6M liquidity score of 85.1 compared with a peer median of 87.1. That leaves peer-relative access broadly workable, but without a clear advantage.",
      "Recent flow is lighter than the monthly average, with 1D average volume down 23.4% from 1M, but this does not indicate a clear deterioration versus the monthly baseline.",
      "Execution remains orderly, with a 1 tick spread and displayed bid depth at 0.94x ask depth, while market factors account for 47.5% of the current driver mix. That matters because immediate trading conditions are balanced even as broader market moves remain a meaningful influence."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). 1D average volume down -23.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 87.1 (-2.0 pts)."
      ],
      "concerns": [
        "1D average volume down -23.4% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -3.6%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -3.6% vs market 11.0%.",
        "vs_sector": "Worse than sector: -3.6% vs sector -2.0%.",
        "vs_peers": "Better than peers: -3.6% vs peers -15.8%."
      },
      "adv": {
        "insight": "ADV is S$571.5K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$571.5K vs market S$12.0K.",
        "vs_sector": "Worse than sector: S$571.5K vs sector S$643.1K.",
        "vs_peers": "Worse than peers: S$571.5K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.74% vs market 2.90%.",
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
        "insight": "Volatility is 14.26%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.26% vs market 45.33%.",
        "vs_sector": "Better than sector: 14.26% vs sector 16.84%.",
        "vs_peers": "Better than peers: 14.26% vs peers 16.92%."
      },
      "trades": {
        "insight": "Trades is 354, better than market, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 354 vs market 7.",
        "vs_sector": "In line with sector: 354 vs sector 388.",
        "vs_peers": "Worse than peers: 354 vs peers 750."
      },
      "amihud": {
        "insight": "Price impact is 3.91e-09, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.91e-09 vs market 1.63e-07.",
        "vs_sector": "Better than sector: 3.91e-09 vs sector 4.69e-09.",
        "vs_peers": "Better than peers: 3.91e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are ahead of both peers and the market, with the stock up 3.9% over one month compared with peers at 2.3% and the market at -1.0%. Liquidity gives a mixed read on that strength because the six-month liquidity score is 85.1, which is 2.0 points below the peer median, and one-day average volume is 23.4% below the monthly average.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "Broader market moves are the main influence on the stock now, with the market accounting for 47.5% of current price action. That matters because the tape is being shaped less by stock-specific news and more by the wider backdrop, which can make trading conditions feel more mixed.",
      "beta": "The current read looks more balanced than the recent monthly pattern, even with the stock up 3.9% over one month compared with peers at 2.3% and the market at -1.0%. That matters because relative outperformance is sitting alongside a market-led tape rather than a clearly company-led move.",
      "rolling_change": "The pattern has changed from clearly company-driven in February and mostly market in March and April to a market-led mix now. With average volume down 23.4% from the 1M average, that shift looks present but not yet deeply established."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the roughly 11.4-day typical run length suggests this is more than a one-day pause. That matters because conditions are more likely to stay orderly even with liquidity only mixed for the stock's size.",
      "current": "The stock is currently in a low-volatility state, which supports a calmer market backdrop than a high-volatility phase. That matters because price moves are less likely to disrupt trading conditions day to day.",
      "transitions": "The state looks reasonably stable, with a typical run length of about 11.4 days, although the 1D average volume is 23.4% below the 1M average. That matters because the backdrop appears settled, but participation is lighter than the recent monthly average.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.4 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth is close to ask depth at 0.94x and the spread is 1 tick. That matters because the book is showing orderly two-way interest rather than a strained entry point.",
      "concern": "Trade-size percentiles use May 5, 2025 to May 4, 2026 history (253 trading days • 99,756 trades).",
      "peer_context": "The current book is slightly better than the broader peer-relative liquidity standing implies, as the spread is tight and depth is broadly even even though the 6M liquidity score of 85.1 sits 2.0 points below the peer median of 87.1. That matters because the near-term execution picture is holding up despite only middling liquidity relative to peers."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value.",
      "retail_heavy": "Retail-like trades account for 37.4% of trade count but only 3.1% of trade value, while institution-like trades are 21.6% of count and 52.6% of value. That split shows frequent smaller tickets alongside a clear share of value coming from larger trades, so the mix looks balanced rather than dominated by one group.",
      "institutional_gap": "Institution-like activity carries a much larger share of trade value than trade count, which means larger tickets are an important part of turnover even though they are fewer in number.",
      "peer_comparison": "The mix stands out more for its balance between count and value than for a clearly retail-led or institution-led profile, leaving it broadly in line with a mixed peer pattern."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but the signal is mixed, as the trading base is split between high-count retail-like flow and high-value institution-like flow. Institution-like trades account for 52.6% of trade value on only 21.6% of count, while retail-like trades make up 37.4% of count and 3.1% of value. That points to larger tickets carrying more weight in price formation, but without a single dominant flow type across both count and value.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears immaterial to the current trading picture, with the average short ratio at 4.00%. That matters because the stock’s stronger 1M return of +3.9%, ahead of peers at +2.3% and the market at -1.0%, points to price strength rather than short pressure as the clearer backdrop.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is falling, with shorts covering by 22% month on month. That matters because a decline of that size suggests short activity is becoming less relevant to near-term trading conditions rather than adding a new source of pressure.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is strongest in the continuous session, which accounts for 86.9% of activity, while the open and close contribute 3.7% and 8.2% respectively. That distribution supports a steadier trading day rather than one driven mainly by the auction windows.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest source of liquidity, as it carries the large majority of trading activity through the day.",
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
        1116959.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14256760903477322,
        "adv": 571539.75,
        "spread_pct": 0.0074349442379182205,
        "turnover_ratio": 0.001861130943933212,
        "amihud": 3.9140585202070595e-09,
        "trades": 354.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6894274639909456,
          "median": 0.45329816685415025,
          "min": 0.0,
          "max": 6.912950809089335,
          "p5": 0.15461775504429873,
          "p95": 2.0312003402442405,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2650366.2699173256,
          "median": 11977.3,
          "min": 0.0,
          "max": 251602868.5,
          "p5": 0.0,
          "p95": 10689058.124999989,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09571613279690724,
          "median": 0.0290128649043996,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.003595222836383144,
          "p95": 0.4829526351057452,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003294352140576203,
          "median": 0.00027543153281755795,
          "min": 0.0,
          "max": 0.8651374332608266,
          "p5": 0.0,
          "p95": 0.0072998076589477524,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.754492165894316e-06,
          "median": 1.6281929131169303e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.631154662463418e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 384.1218637992832,
          "median": 7.0,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 2131.3249999999985,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35270913851112384,
          "median": 0.16844212583489582,
          "min": 0.12245630758964088,
          "max": 1.3328841135126952,
          "p5": 0.1294952630954372,
          "p95": 1.0618273639138338,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8818527.569316141,
          "median": 643123.625,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 12063.9225,
          "p95": 41026320.299999975,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03583602109149299,
          "median": 0.00808428434603335,
          "min": 0.004269437766509539,
          "max": 0.13333333333333333,
          "p5": 0.004339633174071997,
          "p95": 0.12579667946059614,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023205448028342426,
          "median": 0.0011638995327417742,
          "min": 0.0,
          "max": 0.006833889104561173,
          "p5": 8.128416089489489e-05,
          "p95": 0.006677436676072158,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.896734231133994e-07,
          "median": 4.686232901469962e-09,
          "min": 0.0,
          "max": 7.862776406832145e-06,
          "p5": 3.099796967904169e-11,
          "p95": 5.124181133588349e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1117.625,
          "median": 388.5,
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
          "mean": 1116959.5,
          "median": 1116959.5,
          "min": 1116959.5,
          "max": 1116959.5,
          "p5": 1116959.5,
          "p95": 1116959.5,
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
          "mean": 0.16920960712883296,
          "median": 0.16920960712883296,
          "min": 0.16920960712883296,
          "max": 0.16920960712883296,
          "p5": 0.16920960712883296,
          "p95": 0.16920960712883296,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006696547555900304,
          "median": 0.006696547555900304,
          "min": 0.006696547555900304,
          "max": 0.006696547555900304,
          "p5": 0.006696547555900304,
          "p95": 0.006696547555900304,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0063465439173724,
          "median": 1.0063465439173724,
          "min": 1.0063465439173724,
          "max": 1.0063465439173724,
          "p5": 1.0063465439173724,
          "p95": 1.0063465439173724,
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
          "mean": 0.0012073123793006789,
          "median": 0.0012073123793006789,
          "min": 0.0012073123793006789,
          "max": 0.0012073123793006789,
          "p5": 0.0012073123793006789,
          "p95": 0.0012073123793006789,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0390625,
        "market": -0.010354055247534744,
        "sector": 0.024781511582851357,
        "peers": 0.02307692307692344
      },
      {
        "horizon": "3M",
        "stock": -0.036231884057971286,
        "market": -0.0011601809343464442,
        "sector": -0.01967491494474105,
        "peers": -0.1582278481012661
      },
      {
        "horizon": "6M",
        "stock": -0.0362318840579714,
        "market": 0.10971869447616944,
        "sector": -0.02012226413156737,
        "peers": -0.15822784810126667
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
      "share_market": 0.47461156564950197,
      "share_sector": 0.46105866595069156,
      "share_idio": 0.06432976839980643,
      "beta_market": -0.1904257394389403,
      "beta_sector": -2.0953394175837614,
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
            "median": 0.47461156564950197,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.5%",
            "display_range": null,
            "display_text": "47.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 47.5,
            "plain_english": "Market explains about 47.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.46105866595069156,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.1%",
            "display_range": null,
            "display_text": "46.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 46.1,
            "plain_english": "Sector explains about 46.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.06432976839980643,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.4%",
            "display_range": null,
            "display_text": "6.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 6.4,
            "plain_english": "Company-specific explains about 6.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.1904257394389403,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.19",
            "display_range": null,
            "display_text": "-0.19",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.19% stock move in the opposite direction in this state.",
            "value_num": -0.19
          },
          "beta_stock_lag": {
            "median": 0.17542283156289448,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.18",
            "display_range": null,
            "display_text": "0.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.18
          },
          "beta_sector": {
            "median": -2.0953394175837614,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.10",
            "display_range": null,
            "display_text": "-2.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.10% stock move in the opposite direction in this state.",
            "value_num": -2.1
          },
          "beta_market_lag": {
            "median": -0.5319057831448172,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.53",
            "display_range": null,
            "display_text": "-0.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.53
          },
          "beta_sector_lag": {
            "median": -0.20897803178798807,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.21",
            "display_range": null,
            "display_text": "-0.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.21
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
            "period_label": "2025-05-07 to 2025-05-30",
            "n_obs": 17,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5540193807090252,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.4%",
              "display_range": null,
              "display_text": "55.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 55.4,
              "plain_english": "Company-specific explains about 55.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3577687044457382,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.8%",
                "display_range": null,
                "display_text": "35.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 35.8,
                "plain_english": "Market explains about 35.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08821191484523659,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.8%",
                "display_range": null,
                "display_text": "8.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 8.8,
                "plain_english": "Sector explains about 8.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5540193807090252,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.4%",
                "display_range": null,
                "display_text": "55.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 55.4,
                "plain_english": "Company-specific explains about 55.4% of price moves in the current state."
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
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0055815000876977125,
              "low": 0.0055815000876977125,
              "high": 0.0055815000876977125
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010961439927584313,
              "low": 0.010961439927584313,
              "high": 0.010961439927584313
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9193548387096774,
              0.08064516129032258
            ],
            [
              0.08870967741935484,
              0.9112903225806451
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              10.0
            ],
            [
              11.0,
              113.0
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
          "market_link_display": "-0.19",
          "sector_link_display": "-2.10",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.19% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.18",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 47.5,
          "driver_share_display": "47.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9193548387096774,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
          "expected_duration_days": 11.4
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
          "period_label": "2025-05-07 to 2025-05-30",
          "n_obs": 17,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.3577687044457382,
          "share_sector": 0.08821191484523659,
          "share_company": 0.5540193807090252,
          "share_market_display": "35.8%",
          "share_sector_display": "8.8%",
          "share_company_display": "55.4%",
          "dominant_share_display": "55.4%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
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
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010961439927584313,
              "low": 0.010961439927584313,
              "high": 0.010961439927584313
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 130800.0,
          "value": 86982.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1791000.0,
          "value": 1182060.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 691800.0,
          "value": 453129.0
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 357200.0,
          "value": 232180.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 129700.0,
          "value": 83656.5
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 182800.0,
          "value": 116992.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 119600.0,
          "value": 75946.0
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 466900.0,
          "value": 294147.0
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
          "quantity": 79700.0,
          "value": 49414.0
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
          "quantity": 41100.0,
          "value": 24660.0
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
          "quantity": 1039500.0,
          "value": 696465.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 566000.0,
          "value": 382050.0
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 353100.0,
          "value": 240108.00000000003
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 548200.0,
          "value": 375517.00000000006
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
        "snapshot_time": "2026-05-04 08:59:58.097900000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2747475.5,
        "ask_depth_notional_displayed": 2931824.5,
        "bid_depth_notional_top10": 2747475.5,
        "ask_depth_notional_top10": 2931824.5,
        "bid_ask_depth_ratio": 0.9371
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 253,
        "n_trades_used": 99756,
        "first_trade_date": "2025-05-05",
        "last_trade_date": "2026-05-04",
        "window_label": "May 5, 2025 to May 4, 2026",
        "window_short_label": "May 5, 2025 to May 4, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "99,756 trades",
        "window_detail_label": "253 trading days • 99,756 trades",
        "history_note": "Trade-size percentiles use May 5, 2025 to May 4, 2026 history (253 trading days • 99,756 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.12,
            "pct_of_adv": 0.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7948.5,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.29,
            "pct_of_adv": 1.23
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.00933,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.37,
            "pct_of_adv": 52.73
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-04",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-03 22:59:01.578800000",
            "local_timestamp": "2026-05-04 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.010298,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 25.11,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8144531227681138688",
            "timestamp": "2026-05-04 00:45:09.861100000",
            "local_timestamp": "2026-05-04 08:45:09",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.008032000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.37,
            "price_vs_mid_pct": 1.124,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8140389917135064064",
            "timestamp": "2026-05-03 22:59:01.578800000",
            "local_timestamp": "2026-05-04 06:59:01",
            "posted_price": 0.67,
            "size_shares": 295500.0,
            "notional": 197985.0,
            "impact_pct": -0.007959,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.21,
            "price_vs_mid_pct": 0.375,
            "executed_event_count": 0,
            "event_count": 128
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-04",
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
            "bid_depth_notional": 2628188.5,
            "ask_depth_notional": 3050022.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2757956.0,
            "ask_depth_notional": 3020566.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2756933.0,
            "ask_depth_notional": 2999167.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2822474.0,
            "ask_depth_notional": 3006529.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2860354.5,
            "ask_depth_notional": 3029560.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2855965.5,
            "ask_depth_notional": 3040918.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2845626.0,
            "ask_depth_notional": 3010833.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2842572.0,
            "ask_depth_notional": 3012127.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2846567.5,
            "ask_depth_notional": 3015473.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2899055.5,
            "ask_depth_notional": 3020067.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2877022.5,
            "ask_depth_notional": 3008476.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2874196.0,
            "ask_depth_notional": 2992174.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2866382.0,
            "ask_depth_notional": 2981337.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2747475.5,
            "ask_depth_notional": 2931824.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2846096.75,
          "median_ask_depth_notional": 3011480.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "09:00"
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
          "n_trades": 285,
          "n_runs": 219,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-04",
          "last_trade_date": "2026-05-04",
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
            "retail_pct": 0.45614035087719296,
            "mixed_pct": 0.2771929824561403,
            "instit_pct": 0.07368421052631578,
            "ambiguous_pct": 0.19298245614035087,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19298245614035087,
            "retail_qty_pct": 0.12001897533206832,
            "mixed_qty_pct": 0.22983870967741934,
            "instit_qty_pct": 0.21987666034155598,
            "ambiguous_qty_pct": 0.43026565464895633,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.43026565464895633,
            "retail_notional_pct": 0.12019702681556299,
            "mixed_notional_pct": 0.22942599046873888,
            "instit_notional_pct": 0.21972402020058326,
            "ambiguous_notional_pct": 0.43065296251511487,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.43065296251511487
          },
          "run_composition": {
            "retail_pct": 0.5753424657534246,
            "mixed_pct": 0.2465753424657534,
            "instit_pct": 0.0410958904109589,
            "ambiguous_pct": 0.136986301369863,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.136986301369863,
            "retail_notional_pct": 0.12019702681556299,
            "mixed_notional_pct": 0.22942599046873888,
            "instit_notional_pct": 0.21972402020058326,
            "unclear_notional_pct": 0.43065296251511487
          },
          "counts": {
            "trades": {
              "retail": 130,
              "mixed": 79,
              "institutional": 21,
              "ambiguous": 55,
              "unobservable": 0,
              "unclear": 55
            },
            "runs": {
              "retail": 126,
              "mixed": 54,
              "institutional": 9,
              "ambiguous": 30,
              "unobservable": 0,
              "unclear": 30
            }
          },
          "confidence": {
            "high": 0.6164383561643836,
            "medium": 0.2465753424657534,
            "low": 0.136986301369863,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 135,
            "medium": 54,
            "low": 30,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5298245614035088,
            "medium": 0.2771929824561403,
            "low": 0.19298245614035087,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 151,
            "medium": 79,
            "low": 55,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8726027397260272,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.136986301369863,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5753424657534246,
          "dominance_gap": 0.3287671232876712,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 285
            },
            "d2_information": {
              "UNOBSERVABLE": 285
            },
            "d3_urgency": {
              "UNOBSERVABLE": 219
            },
            "participant_confidence": {
              "HIGH": 135,
              "MEDIUM": 54,
              "LOW": 30
            }
          },
          "trade_size": {
            "avg": 986.5964912280701,
            "median": 335.0
          },
          "run_size": {
            "avg": 1283.9269406392693,
            "median": 603.0,
            "avg_length": 1.1963470319634704
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-04T08:59:39.868800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-04T08:59:39.657100",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-04T08:59:35.519300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-04T08:59:35.156900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-04T08:59:10.181700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47714,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-04T08:59:09.606100",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-04T08:59:04.734300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-04T08:59:01.702400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47712,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-04T08:58:38.439700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47711,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-04T08:58:29.323000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47710,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-04T08:58:22.265100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47709,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-04T08:58:21.751400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47708,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-04T08:58:01.665600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47707,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-04T08:57:37.065700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47706,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-04T08:57:30.847700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47705,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-04T08:57:30.574500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47704,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-04T08:57:20.794200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47703,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-04T08:56:44.080300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47702,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-04T08:56:31.676900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-04T08:56:18.305700",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-04T08:56:04.938700",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-04T08:56:03.221500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-04T08:55:22.282300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-04T08:55:21.377600",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-04T08:54:58.864200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-04T08:54:54.940700",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-04T08:54:51.984500",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-04T08:54:51.109500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-04T08:54:00.578100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-04T08:53:51.319000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
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
              "retail_pct": 0.45614035087719296,
              "mixed_pct": 0.2771929824561403,
              "instit_pct": 0.07368421052631578,
              "ambiguous_pct": 0.19298245614035087,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19298245614035087,
              "retail_qty_pct": 0.12001897533206832,
              "mixed_qty_pct": 0.22983870967741934,
              "instit_qty_pct": 0.21987666034155598,
              "ambiguous_qty_pct": 0.43026565464895633,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.43026565464895633,
              "retail_notional_pct": 0.12019702681556299,
              "mixed_notional_pct": 0.22942599046873888,
              "instit_notional_pct": 0.21972402020058326,
              "ambiguous_notional_pct": 0.43065296251511487,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.43065296251511487,
              "run_retail_pct": 0.5753424657534246,
              "run_mixed_pct": 0.2465753424657534,
              "run_instit_pct": 0.0410958904109589,
              "run_unclear_pct": 0.136986301369863,
              "avg_trade_size": 986.5964912280701,
              "avg_run_notional": 1283.9269406392693,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6164383561643836,
              "medium_confidence_pct": 0.2465753424657534,
              "low_confidence_pct": 0.136986301369863,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8726027397260272,
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
              "retail_pct": 0.5735607675906184,
              "mixed_pct": 0.03411513859275053,
              "instit_pct": 0.39232409381663114,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.20397823231375492,
              "mixed_qty_pct": 0.003659223118784012,
              "instit_qty_pct": 0.792362544567461,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20438420739167962,
              "mixed_notional_pct": 0.0036572608066952864,
              "instit_notional_pct": 0.7919585318016251,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8207705192629816,
              "run_mixed_pct": 0.02680067001675042,
              "run_instit_pct": 0.152428810720268,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 757.1759061833689,
              "avg_run_notional": 1189.6666666666667,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6733668341708543,
              "low_confidence_pct": 0.32663316582914576,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.47713567839195986,
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
          "n_trades": 8081,
          "n_runs": 4465,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-02",
          "last_trade_date": "2026-05-04",
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
            "retail_pct": 0.3344883059027348,
            "mixed_pct": 0.2776884049003836,
            "instit_pct": 0.2514540279668358,
            "ambiguous_pct": 0.13636926123004578,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13636926123004578,
            "retail_qty_pct": 0.028218753094161525,
            "mixed_qty_pct": 0.1834438980384391,
            "instit_qty_pct": 0.530320032564331,
            "ambiguous_qty_pct": 0.2580173163030683,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2580173163030683,
            "retail_notional_pct": 0.02824967675215567,
            "mixed_notional_pct": 0.18390039898067478,
            "instit_notional_pct": 0.5295905504982361,
            "ambiguous_notional_pct": 0.25825937376893343,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25825937376893343
          },
          "run_composition": {
            "retail_pct": 0.5988801791713326,
            "mixed_pct": 0.24860022396416573,
            "instit_pct": 0.05800671892497201,
            "ambiguous_pct": 0.09451287793952967,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09451287793952967,
            "retail_notional_pct": 0.02824967675215567,
            "mixed_notional_pct": 0.18390039898067478,
            "instit_notional_pct": 0.5295905504982361,
            "unclear_notional_pct": 0.25825937376893343
          },
          "counts": {
            "trades": {
              "retail": 2703,
              "mixed": 2244,
              "institutional": 2032,
              "ambiguous": 1102,
              "unobservable": 0,
              "unclear": 1102
            },
            "runs": {
              "retail": 2674,
              "mixed": 1110,
              "institutional": 259,
              "ambiguous": 422,
              "unobservable": 0,
              "unclear": 422
            }
          },
          "confidence": {
            "high": 0.6568868980963046,
            "medium": 0.24860022396416573,
            "low": 0.09451287793952967,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2933,
            "medium": 1110,
            "low": 422,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5859423338695706,
            "medium": 0.2776884049003836,
            "low": 0.13636926123004578,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4735,
            "medium": 2244,
            "low": 1102,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8810862262038073,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09451287793952967,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5988801791713326,
          "dominance_gap": 0.3502799552071669,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7867,
              "WALK_BOOK": 210,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 8081
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4465
            },
            "participant_confidence": {
              "HIGH": 2933,
              "MEDIUM": 1110,
              "LOW": 422
            }
          },
          "trade_size": {
            "avg": 1478.2752134636803,
            "median": 130.0
          },
          "run_size": {
            "avg": 2675.462933930571,
            "median": 133.0,
            "avg_length": 1.5088465845464725
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-04T08:59:39.868800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-04T08:59:39.657100",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-04T08:59:35.519300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-04T08:59:35.156900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-04T08:59:10.181700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47714,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-04T08:59:09.606100",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-04T08:59:04.734300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-04T08:59:01.702400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47712,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-04T08:58:38.439700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47711,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-04T08:58:29.323000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47710,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-04T08:58:22.265100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47709,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-04T08:58:21.751400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47708,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-04T08:58:01.665600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47707,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-04T08:57:37.065700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47706,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-04T08:57:30.847700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47705,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-04T08:57:30.574500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47704,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-04T08:57:20.794200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47703,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-04T08:56:44.080300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47702,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-04T08:56:31.676900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-04T08:56:18.305700",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-04T08:56:04.938700",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-04T08:56:03.221500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-04T08:55:22.282300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-04T08:55:21.377600",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-04T08:54:58.864200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-04T08:54:54.940700",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-04T08:54:51.984500",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-04T08:54:51.109500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-04T08:54:00.578100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-04T08:53:51.319000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
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
              "retail_pct": 0.3344883059027348,
              "mixed_pct": 0.2776884049003836,
              "instit_pct": 0.2514540279668358,
              "ambiguous_pct": 0.13636926123004578,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13636926123004578,
              "retail_qty_pct": 0.028218753094161525,
              "mixed_qty_pct": 0.1834438980384391,
              "instit_qty_pct": 0.530320032564331,
              "ambiguous_qty_pct": 0.2580173163030683,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2580173163030683,
              "retail_notional_pct": 0.02824967675215567,
              "mixed_notional_pct": 0.18390039898067478,
              "instit_notional_pct": 0.5295905504982361,
              "ambiguous_notional_pct": 0.25825937376893343,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25825937376893343,
              "run_retail_pct": 0.5988801791713326,
              "run_mixed_pct": 0.24860022396416573,
              "run_instit_pct": 0.05800671892497201,
              "run_unclear_pct": 0.09451287793952967,
              "avg_trade_size": 1478.2752134636803,
              "avg_run_notional": 2675.462933930571,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6568868980963046,
              "medium_confidence_pct": 0.24860022396416573,
              "low_confidence_pct": 0.09451287793952967,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8810862262038073,
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
              "retail_pct": 0.4872356884992264,
              "mixed_pct": 0.037325941206807635,
              "instit_pct": 0.4733754512635379,
              "ambiguous_pct": 0.0020629190304280558,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0020629190304280558,
              "retail_qty_pct": 0.20601109834280876,
              "mixed_qty_pct": 0.007975988871416475,
              "instit_qty_pct": 0.7858919499213741,
              "ambiguous_qty_pct": 0.00012096286440062901,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00012096286440062901,
              "retail_notional_pct": 0.2065808630385769,
              "mixed_notional_pct": 0.0079570575761495,
              "instit_notional_pct": 0.7853388444606308,
              "ambiguous_notional_pct": 0.000123234924642715,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.000123234924642715,
              "run_retail_pct": 0.7915093260098409,
              "run_mixed_pct": 0.029637258267536333,
              "run_instit_pct": 0.1770225426250143,
              "run_unclear_pct": 0.001830873097608422,
              "avg_trade_size": 1146.671318978855,
              "avg_run_notional": 2035.377674791166,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7275431971621467,
              "low_confidence_pct": 0.2724568028378533,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48233779608650884,
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
          "n_trades": 22894,
          "n_runs": 13570,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-30",
          "last_trade_date": "2026-05-04",
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
            "retail_pct": 0.358521883462916,
            "mixed_pct": 0.2882851402114091,
            "instit_pct": 0.2224600331964707,
            "ambiguous_pct": 0.13073294312920417,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13073294312920417,
            "retail_qty_pct": 0.022670783402327133,
            "mixed_qty_pct": 0.1789479529078951,
            "instit_qty_pct": 0.5528704879442282,
            "ambiguous_qty_pct": 0.2455107757455495,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2455107757455495,
            "retail_notional_pct": 0.0226323898095612,
            "mixed_notional_pct": 0.18003823286943674,
            "instit_notional_pct": 0.5516628515170576,
            "ambiguous_notional_pct": 0.24566652580394438,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24566652580394438
          },
          "run_composition": {
            "retail_pct": 0.5994104642593957,
            "mixed_pct": 0.2518054532056006,
            "instit_pct": 0.05114222549742078,
            "ambiguous_pct": 0.09764185703758291,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09764185703758291,
            "retail_notional_pct": 0.0226323898095612,
            "mixed_notional_pct": 0.18003823286943674,
            "instit_notional_pct": 0.5516628515170576,
            "unclear_notional_pct": 0.24566652580394438
          },
          "counts": {
            "trades": {
              "retail": 8208,
              "mixed": 6600,
              "institutional": 5093,
              "ambiguous": 2993,
              "unobservable": 0,
              "unclear": 2993
            },
            "runs": {
              "retail": 8134,
              "mixed": 3417,
              "institutional": 694,
              "ambiguous": 1325,
              "unobservable": 0,
              "unclear": 1325
            }
          },
          "confidence": {
            "high": 0.650478997789241,
            "medium": 0.2518791451731761,
            "low": 0.09764185703758291,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8827,
            "medium": 3418,
            "low": 1325,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5808945575259894,
            "medium": 0.2883724993448065,
            "low": 0.13073294312920417,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13299,
            "medium": 6602,
            "low": 2993,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8773655121591746,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09764185703758291,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5994104642593957,
          "dominance_gap": 0.3476050110537951,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 22126,
              "WALK_BOOK": 762,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 22894
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13570
            },
            "participant_confidence": {
              "HIGH": 8827,
              "MEDIUM": 3418,
              "LOW": 1325
            }
          },
          "trade_size": {
            "avg": 1986.9797982004018,
            "median": 132.0
          },
          "run_size": {
            "avg": 3352.2413780397937,
            "median": 135.0,
            "avg_length": 1.3562269712601327
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-04T08:59:39.868800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-04T08:59:39.657100",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-04T08:59:35.519300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-04T08:59:35.156900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-04T08:59:10.181700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47714,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-04T08:59:09.606100",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-04T08:59:04.734300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-04T08:59:01.702400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47712,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-04T08:58:38.439700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47711,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-04T08:58:29.323000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47710,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-04T08:58:22.265100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47709,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-04T08:58:21.751400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47708,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-04T08:58:01.665600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47707,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-04T08:57:37.065700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47706,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-04T08:57:30.847700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47705,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-04T08:57:30.574500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47704,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-04T08:57:20.794200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47703,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-04T08:56:44.080300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47702,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-04T08:56:31.676900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-04T08:56:18.305700",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-04T08:56:04.938700",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-04T08:56:03.221500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-04T08:55:22.282300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-04T08:55:21.377600",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-04T08:54:58.864200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-04T08:54:54.940700",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-04T08:54:51.984500",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-04T08:54:51.109500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-04T08:54:00.578100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-04T08:53:51.319000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
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
              "retail_pct": 0.358521883462916,
              "mixed_pct": 0.2882851402114091,
              "instit_pct": 0.2224600331964707,
              "ambiguous_pct": 0.13073294312920417,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13073294312920417,
              "retail_qty_pct": 0.022670783402327133,
              "mixed_qty_pct": 0.1789479529078951,
              "instit_qty_pct": 0.5528704879442282,
              "ambiguous_qty_pct": 0.2455107757455495,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2455107757455495,
              "retail_notional_pct": 0.0226323898095612,
              "mixed_notional_pct": 0.18003823286943674,
              "instit_notional_pct": 0.5516628515170576,
              "ambiguous_notional_pct": 0.24566652580394438,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24566652580394438,
              "run_retail_pct": 0.5994104642593957,
              "run_mixed_pct": 0.2518054532056006,
              "run_instit_pct": 0.05114222549742078,
              "run_unclear_pct": 0.09764185703758291,
              "avg_trade_size": 1986.9797982004018,
              "avg_run_notional": 3352.2413780397937,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.650478997789241,
              "medium_confidence_pct": 0.2518791451731761,
              "low_confidence_pct": 0.09764185703758291,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8773655121591746,
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
              "retail_pct": 0.4565600824266979,
              "mixed_pct": 0.0499275273736968,
              "instit_pct": 0.49124216335155335,
              "ambiguous_pct": 0.002270226848051971,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002270226848051971,
              "retail_qty_pct": 0.21651998173539475,
              "mixed_qty_pct": 0.034757415172484755,
              "instit_qty_pct": 0.7481092274843721,
              "ambiguous_qty_pct": 0.0006133756077483086,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0006133756077483086,
              "retail_notional_pct": 0.21732715577855985,
              "mixed_notional_pct": 0.0356782551613101,
              "instit_notional_pct": 0.746385266037561,
              "ambiguous_notional_pct": 0.0006093230225690837,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0006093230225690837,
              "run_retail_pct": 0.7813432318046208,
              "run_mixed_pct": 0.03815999444945535,
              "run_instit_pct": 0.17848470131131616,
              "run_unclear_pct": 0.002012072434607646,
              "avg_trade_size": 1496.890479017865,
              "avg_run_notional": 2973.580777770069,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7045028793450357,
              "low_confidence_pct": 0.29549712065496425,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48705508915562346,
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
          "n_trades": 45377,
          "n_runs": 27778,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-31",
          "last_trade_date": "2026-05-04",
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
            "retail_pct": 0.3736254049408291,
            "mixed_pct": 0.28435110298168675,
            "instit_pct": 0.21585825418163387,
            "ambiguous_pct": 0.12616523789585032,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12616523789585032,
            "retail_qty_pct": 0.03093035285737303,
            "mixed_qty_pct": 0.191940503548926,
            "instit_qty_pct": 0.5276960389406646,
            "ambiguous_qty_pct": 0.2494331046530363,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2494331046530363,
            "retail_notional_pct": 0.03100713903695814,
            "mixed_notional_pct": 0.19285790220591292,
            "instit_notional_pct": 0.5263978198769992,
            "ambiguous_notional_pct": 0.24973713888012974,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24973713888012974
          },
          "run_composition": {
            "retail_pct": 0.6029591763265894,
            "mixed_pct": 0.25016199870401035,
            "instit_pct": 0.0542515659874721,
            "ambiguous_pct": 0.09262725898192814,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09262725898192814,
            "retail_notional_pct": 0.031006313468617347,
            "mixed_notional_pct": 0.1928580665181434,
            "instit_notional_pct": 0.5263982683605662,
            "unclear_notional_pct": 0.24973735165267297
          },
          "counts": {
            "trades": {
              "retail": 16954,
              "mixed": 12903,
              "institutional": 9795,
              "ambiguous": 5725,
              "unobservable": 0,
              "unclear": 5725
            },
            "runs": {
              "retail": 16749,
              "mixed": 6949,
              "institutional": 1507,
              "ambiguous": 2573,
              "unobservable": 0,
              "unclear": 2573
            }
          },
          "confidence": {
            "high": 0.6571747426020592,
            "medium": 0.25019799841601265,
            "low": 0.09262725898192814,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18255,
            "medium": 6950,
            "low": 2573,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5894175463340459,
            "medium": 0.28439517817396476,
            "low": 0.12618727549198933,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26746,
            "medium": 12905,
            "low": 5726,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8769601843185253,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09262725898192814,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6029591763265894,
          "dominance_gap": 0.352797177622579,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44307,
              "WALK_BOOK": 1063,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 45377
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27778
            },
            "participant_confidence": {
              "HIGH": 18255,
              "MEDIUM": 6950,
              "LOW": 2573
            }
          },
          "trade_size": {
            "avg": 1745.9665138726668,
            "median": 136.0
          },
          "run_size": {
            "avg": 2852.136762905897,
            "median": 138.0,
            "avg_length": 1.3478652170782635
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-319",
              "timestamp": "2026-05-04T08:59:39.868800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-318",
              "timestamp": "2026-05-04T08:59:39.657100",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-317",
              "timestamp": "2026-05-04T08:59:35.519300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-316",
              "timestamp": "2026-05-04T08:59:35.156900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47715,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-315",
              "timestamp": "2026-05-04T08:59:10.181700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47714,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-314",
              "timestamp": "2026-05-04T08:59:09.606100",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-313",
              "timestamp": "2026-05-04T08:59:04.734300",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47713,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-312",
              "timestamp": "2026-05-04T08:59:01.702400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47712,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-311",
              "timestamp": "2026-05-04T08:58:38.439700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47711,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-310",
              "timestamp": "2026-05-04T08:58:29.323000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47710,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-309",
              "timestamp": "2026-05-04T08:58:22.265100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47709,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-308",
              "timestamp": "2026-05-04T08:58:21.751400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47708,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-307",
              "timestamp": "2026-05-04T08:58:01.665600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47707,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-306",
              "timestamp": "2026-05-04T08:57:37.065700",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47706,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-305",
              "timestamp": "2026-05-04T08:57:30.847700",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47705,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-304",
              "timestamp": "2026-05-04T08:57:30.574500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47704,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-303",
              "timestamp": "2026-05-04T08:57:20.794200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47703,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-302",
              "timestamp": "2026-05-04T08:56:44.080300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47702,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-05-04T08:56:31.676900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47701,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-05-04T08:56:18.305700",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-05-04T08:56:04.938700",
              "price": 0.665,
              "size": 800.0,
              "notional": 532.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-05-04T08:56:03.221500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47700,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-05-04T08:55:22.282300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47699,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-05-04T08:55:21.377600",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47698,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-05-04T08:54:58.864200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-05-04T08:54:54.940700",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47697,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-05-04T08:54:51.984500",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-05-04T08:54:51.109500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47696,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-05-04T08:54:00.578100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47695,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-05-04T08:53:51.319000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47694,
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
              "retail_pct": 0.3736254049408291,
              "mixed_pct": 0.28435110298168675,
              "instit_pct": 0.21585825418163387,
              "ambiguous_pct": 0.12616523789585032,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12616523789585032,
              "retail_qty_pct": 0.03093035285737303,
              "mixed_qty_pct": 0.191940503548926,
              "instit_qty_pct": 0.5276960389406646,
              "ambiguous_qty_pct": 0.2494331046530363,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2494331046530363,
              "retail_notional_pct": 0.03100713903695814,
              "mixed_notional_pct": 0.19285790220591292,
              "instit_notional_pct": 0.5263978198769992,
              "ambiguous_notional_pct": 0.24973713888012974,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24973713888012974,
              "run_retail_pct": 0.6029591763265894,
              "run_mixed_pct": 0.25016199870401035,
              "run_instit_pct": 0.0542515659874721,
              "run_unclear_pct": 0.09262725898192814,
              "avg_trade_size": 1745.9665138726668,
              "avg_run_notional": 2852.136762905897,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6571747426020592,
              "medium_confidence_pct": 0.25019799841601265,
              "low_confidence_pct": 0.09262725898192814,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8769601843185253,
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
              "retail_pct": 0.47493641044729823,
              "mixed_pct": 0.04721136546932192,
              "instit_pct": 0.4762599003246686,
              "ambiguous_pct": 0.0015923237587112517,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0015923237587112517,
              "retail_qty_pct": 0.22818118259290138,
              "mixed_qty_pct": 0.026609421437169198,
              "instit_qty_pct": 0.7447990370500287,
              "ambiguous_qty_pct": 0.00041035891990072584,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00041035891990072584,
              "retail_notional_pct": 0.22943984034699744,
              "mixed_notional_pct": 0.02649727561229223,
              "instit_notional_pct": 0.7436710186453933,
              "ambiguous_notional_pct": 0.00039186539531702605,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00039186539531702605,
              "run_retail_pct": 0.7913590537429547,
              "run_mixed_pct": 0.03606017305707708,
              "run_instit_pct": 0.1712312455346511,
              "run_unclear_pct": 0.001349527665317139,
              "avg_trade_size": 1569.651027772608,
              "avg_run_notional": 3012.7655294911488,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7170754941652775,
              "low_confidence_pct": 0.28292450583472256,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4850916884972613,
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
      "n_trades": 45377,
      "n_runs": 27778,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-31",
      "last_trade_date": "2026-05-04",
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
        "retail_pct": 0.3736254049408291,
        "mixed_pct": 0.28435110298168675,
        "instit_pct": 0.21585825418163387,
        "ambiguous_pct": 0.12616523789585032,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12616523789585032,
        "retail_qty_pct": 0.03093035285737303,
        "mixed_qty_pct": 0.191940503548926,
        "instit_qty_pct": 0.5276960389406646,
        "ambiguous_qty_pct": 0.2494331046530363,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2494331046530363,
        "retail_notional_pct": 0.03100713903695814,
        "mixed_notional_pct": 0.19285790220591292,
        "instit_notional_pct": 0.5263978198769992,
        "ambiguous_notional_pct": 0.24973713888012974,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24973713888012974
      },
      "run_composition": {
        "retail_pct": 0.6029591763265894,
        "mixed_pct": 0.25016199870401035,
        "instit_pct": 0.0542515659874721,
        "ambiguous_pct": 0.09262725898192814,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09262725898192814
      },
      "trade_size": {
        "avg": 1745.9665138726668,
        "median": 136.0
      },
      "run_size": {
        "avg": 2852.136762905897,
        "median": 138.0,
        "avg_length": 1.3478652170782635
      },
      "confidence": {
        "high": 0.6571747426020592,
        "medium": 0.25019799841601265,
        "low": 0.09262725898192814,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 18255,
        "medium": 6950,
        "low": 2573,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5894175463340459,
        "medium": 0.28439517817396476,
        "low": 0.12618727549198933,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 26746,
        "medium": 12905,
        "low": 5726,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16954,
          "mixed": 12903,
          "institutional": 9795,
          "ambiguous": 5725,
          "unobservable": 0,
          "unclear": 5725
        },
        "runs": {
          "retail": 16749,
          "mixed": 6949,
          "institutional": 1507,
          "ambiguous": 2573,
          "unobservable": 0,
          "unclear": 2573
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8769601843185253,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09262725898192814,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6029591763265894,
      "dominance_gap": 0.352797177622579,
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
            "n_trades": 285,
            "n_runs": 219,
            "retail_pct": 0.45614035087719296,
            "mixed_pct": 0.2771929824561403,
            "instit_pct": 0.07368421052631578,
            "ambiguous_pct": 0.19298245614035087,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19298245614035087,
            "avg_trade_size": 986.5964912280701,
            "avg_run_notional": 1283.9269406392693,
            "retail_qty_pct": 0.12001897533206832,
            "mixed_qty_pct": 0.22983870967741934,
            "instit_qty_pct": 0.21987666034155598,
            "ambiguous_qty_pct": 0.43026565464895633,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.43026565464895633,
            "retail_notional_pct": 0.12019702681556299,
            "mixed_notional_pct": 0.22942599046873888,
            "instit_notional_pct": 0.21972402020058326,
            "ambiguous_notional_pct": 0.43065296251511487,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.43065296251511487,
            "run_retail_pct": 0.5753424657534246,
            "run_mixed_pct": 0.2465753424657534,
            "run_instit_pct": 0.0410958904109589,
            "run_ambiguous_pct": 0.136986301369863,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.136986301369863,
            "avg_feature_coverage": 0.8726027397260272,
            "high_confidence_pct": 0.6164383561643836,
            "medium_confidence_pct": 0.2465753424657534,
            "low_confidence_pct": 0.136986301369863,
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
          "retail_pct": 0.3736254049408291,
          "mixed_pct": 0.28435110298168675,
          "instit_pct": 0.21585825418163387,
          "ambiguous_pct": 0.12616523789585032,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12616523789585032,
          "retail_qty_pct": 0.03093035285737303,
          "mixed_qty_pct": 0.191940503548926,
          "instit_qty_pct": 0.5276960389406646,
          "ambiguous_qty_pct": 0.2494331046530363,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2494331046530363,
          "retail_notional_pct": 0.03100713903695814,
          "mixed_notional_pct": 0.19285790220591292,
          "instit_notional_pct": 0.5263978198769992,
          "ambiguous_notional_pct": 0.24973713888012974,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24973713888012974,
          "run_retail_pct": 0.6029591763265894,
          "run_mixed_pct": 0.25016199870401035,
          "run_instit_pct": 0.0542515659874721,
          "run_unclear_pct": 0.09262725898192814,
          "avg_trade_size": 1745.9665138726668,
          "avg_run_notional": 2852.136762905897,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6571747426020592,
          "medium_confidence_pct": 0.25019799841601265,
          "low_confidence_pct": 0.09262725898192814,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8769601843185253,
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
          "retail_pct": 0.47493641044729823,
          "mixed_pct": 0.04721136546932192,
          "instit_pct": 0.4762599003246686,
          "ambiguous_pct": 0.0015923237587112517,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0015923237587112517,
          "retail_qty_pct": 0.22818118259290138,
          "mixed_qty_pct": 0.026609421437169198,
          "instit_qty_pct": 0.7447990370500287,
          "ambiguous_qty_pct": 0.00041035891990072584,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.00041035891990072584,
          "retail_notional_pct": 0.22943984034699744,
          "mixed_notional_pct": 0.02649727561229223,
          "instit_notional_pct": 0.7436710186453933,
          "ambiguous_notional_pct": 0.00039186539531702605,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00039186539531702605,
          "run_retail_pct": 0.7913590537429547,
          "run_mixed_pct": 0.03606017305707708,
          "run_instit_pct": 0.1712312455346511,
          "run_unclear_pct": 0.001349527665317139,
          "avg_trade_size": 1569.651027772608,
          "avg_run_notional": 3012.7655294911488,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7170754941652775,
          "low_confidence_pct": 0.28292450583472256,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4850916884972613,
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
            "retail_pct": 0.45614035087719296,
            "mixed_pct": 0.2771929824561403,
            "instit_pct": 0.07368421052631578,
            "ambiguous_pct": 0.19298245614035087,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19298245614035087,
            "retail_qty_pct": 0.12001897533206832,
            "mixed_qty_pct": 0.22983870967741934,
            "instit_qty_pct": 0.21987666034155598,
            "ambiguous_qty_pct": 0.43026565464895633,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.43026565464895633,
            "retail_notional_pct": 0.12019702681556299,
            "mixed_notional_pct": 0.22942599046873888,
            "instit_notional_pct": 0.21972402020058326,
            "ambiguous_notional_pct": 0.43065296251511487,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.43065296251511487,
            "run_retail_pct": 0.5753424657534246,
            "run_mixed_pct": 0.2465753424657534,
            "run_instit_pct": 0.0410958904109589,
            "run_unclear_pct": 0.136986301369863,
            "avg_trade_size": 986.5964912280701,
            "avg_run_notional": 1283.9269406392693,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6164383561643836,
            "medium_confidence_pct": 0.2465753424657534,
            "low_confidence_pct": 0.136986301369863,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8726027397260272,
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
            "retail_pct": 0.5735607675906184,
            "mixed_pct": 0.03411513859275053,
            "instit_pct": 0.39232409381663114,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.20397823231375492,
            "mixed_qty_pct": 0.003659223118784012,
            "instit_qty_pct": 0.792362544567461,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20438420739167962,
            "mixed_notional_pct": 0.0036572608066952864,
            "instit_notional_pct": 0.7919585318016251,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8207705192629816,
            "run_mixed_pct": 0.02680067001675042,
            "run_instit_pct": 0.152428810720268,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 757.1759061833689,
            "avg_run_notional": 1189.6666666666667,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6733668341708543,
            "low_confidence_pct": 0.32663316582914576,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.47713567839195986,
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
            "retail_pct": 0.3344883059027348,
            "mixed_pct": 0.2776884049003836,
            "instit_pct": 0.2514540279668358,
            "ambiguous_pct": 0.13636926123004578,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13636926123004578,
            "retail_qty_pct": 0.028218753094161525,
            "mixed_qty_pct": 0.1834438980384391,
            "instit_qty_pct": 0.530320032564331,
            "ambiguous_qty_pct": 0.2580173163030683,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2580173163030683,
            "retail_notional_pct": 0.02824967675215567,
            "mixed_notional_pct": 0.18390039898067478,
            "instit_notional_pct": 0.5295905504982361,
            "ambiguous_notional_pct": 0.25825937376893343,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25825937376893343,
            "run_retail_pct": 0.5988801791713326,
            "run_mixed_pct": 0.24860022396416573,
            "run_instit_pct": 0.05800671892497201,
            "run_unclear_pct": 0.09451287793952967,
            "avg_trade_size": 1478.2752134636803,
            "avg_run_notional": 2675.462933930571,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6568868980963046,
            "medium_confidence_pct": 0.24860022396416573,
            "low_confidence_pct": 0.09451287793952967,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8810862262038073,
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
            "retail_pct": 0.4872356884992264,
            "mixed_pct": 0.037325941206807635,
            "instit_pct": 0.4733754512635379,
            "ambiguous_pct": 0.0020629190304280558,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0020629190304280558,
            "retail_qty_pct": 0.20601109834280876,
            "mixed_qty_pct": 0.007975988871416475,
            "instit_qty_pct": 0.7858919499213741,
            "ambiguous_qty_pct": 0.00012096286440062901,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00012096286440062901,
            "retail_notional_pct": 0.2065808630385769,
            "mixed_notional_pct": 0.0079570575761495,
            "instit_notional_pct": 0.7853388444606308,
            "ambiguous_notional_pct": 0.000123234924642715,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.000123234924642715,
            "run_retail_pct": 0.7915093260098409,
            "run_mixed_pct": 0.029637258267536333,
            "run_instit_pct": 0.1770225426250143,
            "run_unclear_pct": 0.001830873097608422,
            "avg_trade_size": 1146.671318978855,
            "avg_run_notional": 2035.377674791166,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7275431971621467,
            "low_confidence_pct": 0.2724568028378533,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48233779608650884,
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
            "retail_pct": 0.358521883462916,
            "mixed_pct": 0.2882851402114091,
            "instit_pct": 0.2224600331964707,
            "ambiguous_pct": 0.13073294312920417,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13073294312920417,
            "retail_qty_pct": 0.022670783402327133,
            "mixed_qty_pct": 0.1789479529078951,
            "instit_qty_pct": 0.5528704879442282,
            "ambiguous_qty_pct": 0.2455107757455495,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2455107757455495,
            "retail_notional_pct": 0.0226323898095612,
            "mixed_notional_pct": 0.18003823286943674,
            "instit_notional_pct": 0.5516628515170576,
            "ambiguous_notional_pct": 0.24566652580394438,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24566652580394438,
            "run_retail_pct": 0.5994104642593957,
            "run_mixed_pct": 0.2518054532056006,
            "run_instit_pct": 0.05114222549742078,
            "run_unclear_pct": 0.09764185703758291,
            "avg_trade_size": 1986.9797982004018,
            "avg_run_notional": 3352.2413780397937,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.650478997789241,
            "medium_confidence_pct": 0.2518791451731761,
            "low_confidence_pct": 0.09764185703758291,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8773655121591746,
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
            "retail_pct": 0.4565600824266979,
            "mixed_pct": 0.0499275273736968,
            "instit_pct": 0.49124216335155335,
            "ambiguous_pct": 0.002270226848051971,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002270226848051971,
            "retail_qty_pct": 0.21651998173539475,
            "mixed_qty_pct": 0.034757415172484755,
            "instit_qty_pct": 0.7481092274843721,
            "ambiguous_qty_pct": 0.0006133756077483086,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0006133756077483086,
            "retail_notional_pct": 0.21732715577855985,
            "mixed_notional_pct": 0.0356782551613101,
            "instit_notional_pct": 0.746385266037561,
            "ambiguous_notional_pct": 0.0006093230225690837,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0006093230225690837,
            "run_retail_pct": 0.7813432318046208,
            "run_mixed_pct": 0.03815999444945535,
            "run_instit_pct": 0.17848470131131616,
            "run_unclear_pct": 0.002012072434607646,
            "avg_trade_size": 1496.890479017865,
            "avg_run_notional": 2973.580777770069,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7045028793450357,
            "low_confidence_pct": 0.29549712065496425,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48705508915562346,
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
            "retail_pct": 0.3736254049408291,
            "mixed_pct": 0.28435110298168675,
            "instit_pct": 0.21585825418163387,
            "ambiguous_pct": 0.12616523789585032,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12616523789585032,
            "retail_qty_pct": 0.03093035285737303,
            "mixed_qty_pct": 0.191940503548926,
            "instit_qty_pct": 0.5276960389406646,
            "ambiguous_qty_pct": 0.2494331046530363,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2494331046530363,
            "retail_notional_pct": 0.03100713903695814,
            "mixed_notional_pct": 0.19285790220591292,
            "instit_notional_pct": 0.5263978198769992,
            "ambiguous_notional_pct": 0.24973713888012974,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24973713888012974,
            "run_retail_pct": 0.6029591763265894,
            "run_mixed_pct": 0.25016199870401035,
            "run_instit_pct": 0.0542515659874721,
            "run_unclear_pct": 0.09262725898192814,
            "avg_trade_size": 1745.9665138726668,
            "avg_run_notional": 2852.136762905897,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6571747426020592,
            "medium_confidence_pct": 0.25019799841601265,
            "low_confidence_pct": 0.09262725898192814,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8769601843185253,
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
            "retail_pct": 0.47493641044729823,
            "mixed_pct": 0.04721136546932192,
            "instit_pct": 0.4762599003246686,
            "ambiguous_pct": 0.0015923237587112517,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0015923237587112517,
            "retail_qty_pct": 0.22818118259290138,
            "mixed_qty_pct": 0.026609421437169198,
            "instit_qty_pct": 0.7447990370500287,
            "ambiguous_qty_pct": 0.00041035891990072584,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00041035891990072584,
            "retail_notional_pct": 0.22943984034699744,
            "mixed_notional_pct": 0.02649727561229223,
            "instit_notional_pct": 0.7436710186453933,
            "ambiguous_notional_pct": 0.00039186539531702605,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00039186539531702605,
            "run_retail_pct": 0.7913590537429547,
            "run_mixed_pct": 0.03606017305707708,
            "run_instit_pct": 0.1712312455346511,
            "run_unclear_pct": 0.001349527665317139,
            "avg_trade_size": 1569.651027772608,
            "avg_run_notional": 3012.7655294911488,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7170754941652775,
            "low_confidence_pct": 0.28292450583472256,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4850916884972613,
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
          "trade_id": "BMLL-319",
          "timestamp": "2026-05-04T08:59:39.868800",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47715,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-318",
          "timestamp": "2026-05-04T08:59:39.657100",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47715,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-317",
          "timestamp": "2026-05-04T08:59:35.519300",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47715,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-316",
          "timestamp": "2026-05-04T08:59:35.156900",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47715,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-315",
          "timestamp": "2026-05-04T08:59:10.181700",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47714,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-314",
          "timestamp": "2026-05-04T08:59:09.606100",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47713,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-313",
          "timestamp": "2026-05-04T08:59:04.734300",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47713,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-312",
          "timestamp": "2026-05-04T08:59:01.702400",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47712,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-311",
          "timestamp": "2026-05-04T08:58:38.439700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47711,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-310",
          "timestamp": "2026-05-04T08:58:29.323000",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47710,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-309",
          "timestamp": "2026-05-04T08:58:22.265100",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47709,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-308",
          "timestamp": "2026-05-04T08:58:21.751400",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47708,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-307",
          "timestamp": "2026-05-04T08:58:01.665600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47707,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-306",
          "timestamp": "2026-05-04T08:57:37.065700",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47706,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-305",
          "timestamp": "2026-05-04T08:57:30.847700",
          "price": 0.665,
          "size": 600.0,
          "notional": 399.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47705,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-304",
          "timestamp": "2026-05-04T08:57:30.574500",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47704,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-303",
          "timestamp": "2026-05-04T08:57:20.794200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47703,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-302",
          "timestamp": "2026-05-04T08:56:44.080300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47702,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-301",
          "timestamp": "2026-05-04T08:56:31.676900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47701,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-300",
          "timestamp": "2026-05-04T08:56:18.305700",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47700,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-299",
          "timestamp": "2026-05-04T08:56:04.938700",
          "price": 0.665,
          "size": 800.0,
          "notional": 532.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47700,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-298",
          "timestamp": "2026-05-04T08:56:03.221500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47700,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-297",
          "timestamp": "2026-05-04T08:55:22.282300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47699,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-296",
          "timestamp": "2026-05-04T08:55:21.377600",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47698,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-295",
          "timestamp": "2026-05-04T08:54:58.864200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47697,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-294",
          "timestamp": "2026-05-04T08:54:54.940700",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47697,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-293",
          "timestamp": "2026-05-04T08:54:51.984500",
          "price": 0.665,
          "size": 1100.0,
          "notional": 731.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47696,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-292",
          "timestamp": "2026-05-04T08:54:51.109500",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47696,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-291",
          "timestamp": "2026-05-04T08:54:00.578100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47695,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-290",
          "timestamp": "2026-05-04T08:53:51.319000",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47694,
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
      "total_trades": 45376,
      "price_moving_trades": 10793,
      "pct_price_moving": 23.785701692524682,
      "all_movers": {
        "count": 10793,
        "avg_size": 1425.3478180302047,
        "median_size": 192.0,
        "retail_count": 5747,
        "mixed_count": 3170,
        "institutional_count": 678,
        "ambiguous_count": 1198,
        "unobservable_count": 0,
        "retail_pct": 53.247475215417396,
        "mixed_pct": 29.370888538867785,
        "instit_pct": 6.281849346798851,
        "unclear_pct": 11.099786898915964
      },
      "positive_movers": {
        "count": 5389,
        "avg_size": 1453.1238634254964,
        "median_size": 138.0,
        "retail_count": 2759,
        "mixed_count": 1628,
        "institutional_count": 335,
        "ambiguous_count": 667,
        "unobservable_count": 0,
        "retail_pct": 51.19688253850436,
        "mixed_pct": 30.209686398218594,
        "instit_pct": 6.216366672852106,
        "unclear_pct": 12.37706439042494
      },
      "negative_movers": {
        "count": 5404,
        "avg_size": 1397.6488712065136,
        "median_size": 198.0,
        "retail_count": 2988,
        "mixed_count": 1542,
        "institutional_count": 343,
        "ambiguous_count": 531,
        "unobservable_count": 0,
        "retail_pct": 55.292376017764624,
        "mixed_pct": 28.53441894892672,
        "instit_pct": 6.347150259067358,
        "unclear_pct": 9.826054774241303
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
            "avg_short_ratio": 0.03999836089816722,
            "max_short_ratio": 0.1613056945437217,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06946974899125681,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06220078829953657,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12605186574724903,
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
            "avg_short_ratio": 0.03047168498678169
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
            "avg_short_ratio": 0.03047168498678169,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 28.80337590850166
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
        "interpretation": "Shorts covering significantly (-22% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.1941747572815534,
            "short_vol": 98000,
            "total_vol": 504700,
            "close": 0.675,
            "return": -0.007352941176470562
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06946974899125681,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.061652691478387346,
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
          "opening": 0.005833924280132804,
          "continuous": 0.7262222677109106,
          "closing": 0.19238059828533174,
          "auctions": 0.2737777322890894,
          "other": 0.0
        },
        "1M": {
          "opening": 0.03373908639977998,
          "continuous": 0.8779122824824833,
          "closing": 0.07495174576425337,
          "auctions": 0.1220877175175167,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04701002291484262,
          "continuous": 0.8706108412880499,
          "closing": 0.06790653901138863,
          "auctions": 0.1293891587119502,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03718265629562524,
          "continuous": 0.8693070372473294,
          "closing": 0.08205243817127109,
          "auctions": 0.13069296275267073,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.15842866120831475,
        "1M": 0.2372041273677836,
        "3M": 0.23291970335556628,
        "6M": 0.23128430164853922
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.018
        },
        {
          "time": "09:00",
          "avg_share": 0.0953
        },
        {
          "time": "09:30",
          "avg_share": 0.0408
        },
        {
          "time": "10:00",
          "avg_share": 0.044
        },
        {
          "time": "10:30",
          "avg_share": 0.0347
        },
        {
          "time": "11:00",
          "avg_share": 0.0304
        },
        {
          "time": "11:30",
          "avg_share": 0.04
        },
        {
          "time": "12:00",
          "avg_share": 0.2367
        },
        {
          "time": "12:30",
          "avg_share": 0.0095
        },
        {
          "time": "13:00",
          "avg_share": 0.021
        },
        {
          "time": "13:30",
          "avg_share": 0.0194
        },
        {
          "time": "14:00",
          "avg_share": 0.0325
        },
        {
          "time": "14:30",
          "avg_share": 0.0344
        },
        {
          "time": "15:00",
          "avg_share": 0.0289
        },
        {
          "time": "15:30",
          "avg_share": 0.0503
        },
        {
          "time": "16:00",
          "avg_share": 0.0405
        },
        {
          "time": "16:30",
          "avg_share": 0.1034
        },
        {
          "time": "17:00",
          "avg_share": 0.1202
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.763104575517337,
          "hhi": 0.22773455927929603,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.959536701137651,
          "hhi": 0.17333704910403616,
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
