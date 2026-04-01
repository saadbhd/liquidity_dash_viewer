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
      "ticker": "1A0",
      "name": "Katrina",
      "marketCap": 7555611.239999999,
      "sector": "Restaurants",
      "industry": "Consumer Cyclical"
    },
    {
      "ticker": "579",
      "name": "Oceanus",
      "marketCap": 103050985.456,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "LGH",
      "name": "Leong Guan Hldgs",
      "marketCap": 21762300.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "URR",
      "name": "Sim Leisure",
      "marketCap": 76894818.0,
      "sector": "Leisure",
      "industry": "Consumer Cyclical"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "1A0",
    "company": "Katrina",
    "asof_date": "2026-03-13",
    "industry": "Consumer Cyclical",
    "sector": "Restaurants",
    "market_cap_display": "7.6M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 3,
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
          "score_pca": 14.695340501792115,
          "score_pca_percentile": 14.695340501792115,
          "rank_pca": 477,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.16949152542372886,
          "spread_ticks": 5.0,
          "amihud": null,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5268983297938116,
          "loadings": {
            "log_adv": 0.5482301779370882,
            "log_trades": 0.5059532586104436,
            "log_turnover": 0.5170789344538662,
            "neg_spread": 0.36965424636469946,
            "neg_amihud": 0.034285909283390835,
            "neg_vol": -0.1956132976404033
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 3,
          "peer_median_adv": 322.5,
          "peer_median_score_pca": 38.17204301075269,
          "peer_median_trades": 2.0,
          "peer_median_volatility": 0.6429591093245105,
          "peer_median_spread_pct": 0.09187279151943459,
          "peer_median_spread_ticks": 2.5454545454545454,
          "peer_median_amihud": 6.890611541774342e-05,
          "peer_median_turnover_ratio": 1.4819205690574985e-05,
          "target_vs_peer": {
            "score_pca_delta": -23.48,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 100.0,
            "spread_pct_delta_pct": -84.49,
            "spread_ticks_delta_pct": 96.43,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 14.695340501792115,
            "rank_pca": 477,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.16949152542372886,
            "spread_ticks": 5.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 66.84587813620072,
            "rank_pca": 186,
            "adv": 9524.0,
            "trades": 15.0,
            "volatility": 2.7426497078697025,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 9.47123088482779e-05,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 38.17204301075269,
            "rank_pca": 346,
            "adv": 322.5,
            "trades": 2.0,
            "volatility": 0.6429591093245105,
            "spread_pct": 0.057026476578411464,
            "spread_ticks": 2.5454545454545454,
            "amihud": 0.00013781223083548683,
            "turnover_ratio": 1.4819205690574985e-05,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 20.967741935483872,
            "rank_pca": 442,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.09187279151943459,
            "spread_ticks": 8.666666666666666,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 18,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22320202311753023,
              "median": 0.10760414128112343,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8081163795519644,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2969328.1812179713,
              "median": 10424.0,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 12566088.899999954,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11318567677149338,
              "median": 0.03139717425431714,
              "min": 0.0002433041298153404,
              "max": 1.4382566585956416,
              "p5": 0.0038628620026989933,
              "p95": 0.5174663552976861,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009562553309578201,
              "median": 0.00021348010317063257,
              "min": 0.0,
              "max": 3.7275064267352187,
              "p5": 0.0,
              "p95": 0.011787366308130483,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0007686537362377945,
              "median": 8.350140496123931e-09,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 5.8914480189715755e-05,
              "count": 395
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 474.8297491039427,
              "median": 7.0,
              "min": 0.0,
              "max": 12505.0,
              "p5": 0.0,
              "p95": 2897.199999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2326211946881478,
              "median": 0.0,
              "min": 0.0,
              "max": 2.0979849694927175,
              "p5": 0.0,
              "p95": 1.1882349646796109,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 18325.894444444446,
              "median": 0.0,
              "min": 0.0,
              "max": 218612.0,
              "p5": 0.0,
              "p95": 72770.69999999975,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2467579702779945,
              "median": 0.15617433414043586,
              "min": 0.011473788328387746,
              "max": 0.9433962264150945,
              "p5": 0.012688810184742043,
              "p95": 0.7410770683044503,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0006539709845471467,
              "median": 0.0,
              "min": 0.0,
              "max": 0.006012080436077249,
              "p5": 0.0,
              "p95": 0.004567704850055265,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00020160767084428455,
              "median": 1.0024215731622785e-06,
              "min": 0.0,
              "max": 0.0012768130745658868,
              "p5": 0.0,
              "p95": 0.0009322078672580066,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.111111111111111,
              "median": 0.0,
              "min": 0.0,
              "max": 42.0,
              "p5": 0.0,
              "p95": 29.24999999999998,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3282.1666666666665,
              "median": 322.5,
              "min": 0.0,
              "max": 9524.0,
              "p5": 32.25,
              "p95": 8603.849999999999,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.666666666666667,
              "median": 2.0,
              "min": 0.0,
              "max": 15.0,
              "p5": 0.2,
              "p95": 13.7,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.128536272398071,
              "median": 0.6429591093245105,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.06429591093245106,
              "p95": 2.5326806480151833,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1448711846040439,
              "median": 0.09187279151943459,
              "min": 0.057026476578411464,
              "max": 0.2857142857142857,
              "p5": 0.060511108072513774,
              "p95": 0.26633013629480057,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.07070707070707,
              "median": 2.5454545454545454,
              "min": 1.0,
              "max": 8.666666666666666,
              "p5": 1.1545454545454545,
              "p95": 8.054545454545453,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.890611541774342e-05,
              "median": 6.890611541774342e-05,
              "min": 0.0,
              "max": 0.00013781223083548683,
              "p5": 6.890611541774342e-06,
              "p95": 0.0001309216192937125,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 3.651050484628429e-05,
              "median": 1.4819205690574985e-05,
              "min": 0.0,
              "max": 9.47123088482779e-05,
              "p5": 1.4819205690574986e-06,
              "p95": 8.67229985325076e-05,
              "count": 3
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.0026898394926001545,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0026898394926001545,
            "vs_sector": 0.0,
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
          "score_pca": 34.229390681003586,
          "score_pca_percentile": 34.229390681003586,
          "rank_pca": 368,
          "total": 558,
          "adv_notional_sgd": 850.0000000000001,
          "adv_volume_shares": 25000.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.00010424697984302499,
          "votes": 3.0,
          "trades": 3.0,
          "spread_pct": 0.0751879699248121,
          "spread_ticks": 2.8125,
          "amihud": 7.79655844096284e-06,
          "volatility": 0.8394270309300902
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5339279797874574,
          "loadings": {
            "log_adv": 0.5388200827263961,
            "log_trades": 0.489215410579364,
            "log_turnover": 0.49527568529035126,
            "neg_spread": 0.413080398643354,
            "neg_amihud": 0.1618339159614105,
            "neg_vol": 0.16798084403823912
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 3,
          "peer_median_adv": 2091.5,
          "peer_median_score_pca": 29.03225806451613,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.7957965400380688,
          "peer_median_spread_pct": 0.13487475915221575,
          "peer_median_spread_ticks": 2.0,
          "peer_median_amihud": 3.5118254453586887e-06,
          "peer_median_turnover_ratio": 8.792728709741157e-05,
          "target_vs_peer": {
            "score_pca_delta": 5.2,
            "adv_delta_pct": -59.4,
            "trades_delta_pct": 0.0,
            "volatility_delta_pct": -5.48,
            "spread_pct_delta_pct": 44.25,
            "spread_ticks_delta_pct": 40.62,
            "amihud_delta_pct": -122.01,
            "turnover_ratio_delta_pct": 18.56
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 34.229390681003586,
            "rank_pca": 368,
            "adv": 850.0000000000001,
            "trades": 3.0,
            "volatility": 0.8394270309300902,
            "spread_pct": 0.0751879699248121,
            "spread_ticks": 2.8125,
            "amihud": 7.79655844096284e-06,
            "turnover_ratio": 0.00010424697984302499,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 29.03225806451613,
            "rank_pca": 397,
            "adv": 15505.2,
            "trades": 20.0,
            "volatility": 3.464101615137754,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 2.551166189088356e-06,
            "turnover_ratio": 0.00018465519063611541,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 2091.5,
            "trades": 3.0,
            "volatility": 0.6145172958704733,
            "spread_pct": 0.04320987654320982,
            "spread_ticks": 2.0,
            "amihud": 1.0143028071467457e-05,
            "turnover_ratio": 8.792728709741157e-05,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 15.591397849462366,
            "rank_pca": 472,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7957965400380688,
            "spread_pct": 0.13487475915221575,
            "spread_ticks": 15.3125,
            "amihud": 3.5118254453586887e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 18,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6264388506293332,
              "median": 0.4344028396196831,
              "min": 0.0,
              "max": 7.784600182411427,
              "p5": 0.027576072067872867,
              "p95": 1.7933611590139857,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3733066.234676325,
              "median": 14096.25,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 15599784.749999937,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09804088968891381,
              "median": 0.02764749444581584,
              "min": 0.0002742695631217783,
              "max": 1.3777777777777778,
              "p5": 0.0037907610251629626,
              "p95": 0.4865165337777122,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010670267886644635,
              "median": 0.00031977321801776457,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.011489440966607313,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.086591074468789e-05,
              "median": 1.1289074346820647e-07,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 4.614579663070132e-05,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 509.84767025089604,
              "median": 7.0,
              "min": 0.0,
              "max": 12958.0,
              "p5": 0.0,
              "p95": 2911.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0051115478774193,
              "median": 0.5601093044679828,
              "min": 0.0,
              "max": 6.77495387438173,
              "p5": 0.06380695223067487,
              "p95": 2.955301868195912,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 20422.194444444445,
              "median": 9.55,
              "min": 0.0,
              "max": 235812.5,
              "p5": 0.0,
              "p95": 129400.57499999982,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17461845634526516,
              "median": 0.09433526011560697,
              "min": 0.012958963282937379,
              "max": 0.6666666666666666,
              "p5": 0.013526440715247218,
              "p95": 0.6474576271186441,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002810748234987812,
              "median": 1.7903217025697616e-06,
              "min": 0.0,
              "max": 0.0022551154539546736,
              "p5": 0.0,
              "p95": 0.0015527742611128078,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.887161933969232e-05,
              "median": 7.112590382435755e-06,
              "min": 0.0,
              "max": 0.0006427269506600953,
              "p5": 0.0,
              "p95": 0.0004929688454645651,
              "count": 17
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7.222222222222222,
              "median": 1.0,
              "min": 0.0,
              "max": 90.0,
              "p5": 0.0,
              "p95": 31.349999999999902,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5865.566666666667,
              "median": 2091.5,
              "min": 0.0,
              "max": 15505.2,
              "p5": 209.15,
              "p95": 14163.83,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7.666666666666667,
              "median": 3.0,
              "min": 0.0,
              "max": 20.0,
              "p5": 0.30000000000000004,
              "p95": 18.299999999999997,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.6248051503487655,
              "median": 0.7957965400380688,
              "min": 0.6145172958704733,
              "max": 3.464101615137754,
              "p5": 0.6326452202872329,
              "p95": 3.197271107627785,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15459964046990377,
              "median": 0.13487475915221575,
              "min": 0.04320987654320982,
              "max": 0.2857142857142857,
              "p5": 0.05237636480411041,
              "p95": 0.2706303330580787,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.104166666666667,
              "median": 2.0,
              "min": 1.0,
              "max": 15.3125,
              "p5": 1.1,
              "p95": 13.98125,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.4020065686381676e-06,
              "median": 3.5118254453586887e-06,
              "min": 2.551166189088356e-06,
              "max": 1.0143028071467457e-05,
              "p5": 2.6472321147153893e-06,
              "p95": 9.479907808856579e-06,
              "count": 3
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 9.086082591117567e-05,
              "median": 8.792728709741157e-05,
              "min": 0.0,
              "max": 0.00018465519063611541,
              "p5": 8.792728709741158e-06,
              "p95": 0.00017498240028224503,
              "count": 3
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.2499999999999999,
            "market": -0.024571683631716912,
            "sector": 0.0,
            "peers": -0.024002908331272943,
            "vs_market": -0.22542831636828298,
            "vs_sector": -0.2499999999999999,
            "vs_peers": -0.22599709166872695
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 19.53405017921147,
          "score_pca_percentile": 19.53405017921147,
          "rank_pca": 450,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.06728704366499631,
          "spread_ticks": 2.4285714285714284,
          "amihud": 3.975030026172969e-06,
          "volatility": 0.5940969703537443
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5501350441130107,
          "loadings": {
            "log_adv": 0.524223412967728,
            "log_trades": 0.47082611270338903,
            "log_turnover": 0.477730501937241,
            "neg_spread": 0.42637591942522457,
            "neg_amihud": 0.13087149141781648,
            "neg_vol": 0.2763374395195923
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 3,
          "peer_median_adv": 6182.0,
          "peer_median_score_pca": 26.523297491039425,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.6068307706446365,
          "peer_median_spread_pct": 0.1720430107526881,
          "peer_median_spread_ticks": 1.375,
          "peer_median_amihud": 1.8115942028985492e-06,
          "peer_median_turnover_ratio": 0.00016800794105484523,
          "target_vs_peer": {
            "score_pca_delta": -6.99,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 2.1,
            "spread_pct_delta_pct": 60.89,
            "spread_ticks_delta_pct": 76.62,
            "amihud_delta_pct": -119.42,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 19.53405017921147,
            "rank_pca": 450,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5940969703537443,
            "spread_pct": 0.06728704366499631,
            "spread_ticks": 2.4285714285714284,
            "amihud": 3.975030026172969e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 26.523297491039425,
            "rank_pca": 411,
            "adv": 15735.300000000001,
            "trades": 20.0,
            "volatility": 2.849284636372453,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016800794105484523,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 44.982078853046595,
            "rank_pca": 308,
            "adv": 6182.0,
            "trades": 5.0,
            "volatility": 0.6068307706446365,
            "spread_pct": 0.03030303030303026,
            "spread_ticks": 1.375,
            "amihud": 1.8115942028985492e-06,
            "turnover_ratio": 0.0002776131199367714,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 15.053763440860216,
            "rank_pca": 475,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4684602157115324,
            "spread_pct": 0.1720430107526881,
            "spread_ticks": 17.65,
            "amihud": 2.9126213592233e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 18,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6543268126225732,
              "median": 0.42442061144824095,
              "min": 0.0,
              "max": 8.04623734946161,
              "p5": 0.14394989677788117,
              "p95": 1.8768928544174406,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2621890.3815770634,
              "median": 14534.599999999999,
              "min": 0.0,
              "max": 253681920.0,
              "p5": 0.0,
              "p95": 10088185.14999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09369265357230896,
              "median": 0.026431718061673836,
              "min": 0.0002689112087055741,
              "max": 1.3033707865168538,
              "p5": 0.0035597771801051032,
              "p95": 0.504291497975707,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003682569702569623,
              "median": 0.00028281606379044496,
              "min": 0.0,
              "max": 0.9821369718541955,
              "p5": 0.0,
              "p95": 0.009750840111708533,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.335869152014564e-05,
              "median": 1.1772739045466328e-07,
              "min": 0.0,
              "max": 0.0071259534969212385,
              "p5": 0.0,
              "p95": 3.923991701912421e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 379.8351254480287,
              "median": 7.5,
              "min": 0.0,
              "max": 10826.0,
              "p5": 0.0,
              "p95": 2028.349999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8899949348252729,
              "median": 0.6301596893929686,
              "min": 0.19585155079827474,
              "max": 4.693089558673984,
              "p5": 0.2344905843377793,
              "p95": 1.9294504965793515,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15838.06111111111,
              "median": 0.0,
              "min": 0.0,
              "max": 194348.0,
              "p5": 0.0,
              "p95": 88974.09499999983,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17376065245859296,
              "median": 0.0924143617487212,
              "min": 0.01297793750623935,
              "max": 0.6666666666666666,
              "p5": 0.015371668689697249,
              "p95": 0.6198347107438016,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.000205501819992546,
              "median": 0.0,
              "min": 0.0,
              "max": 0.0016242164187809357,
              "p5": 0.0,
              "p95": 0.0012429810681908746,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.108968933232695e-05,
              "median": 3.5411519833901235e-06,
              "min": 0.0,
              "max": 0.0005342495604929061,
              "p5": 0.0,
              "p95": 0.0004748047879880777,
              "count": 18
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.944444444444445,
              "median": 0.0,
              "min": 0.0,
              "max": 72.0,
              "p5": 0.0,
              "p95": 26.099999999999923,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7305.766666666667,
              "median": 6182.0,
              "min": 0.0,
              "max": 15735.300000000001,
              "p5": 618.2,
              "p95": 14779.97,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8.333333333333334,
              "median": 5.0,
              "min": 0.0,
              "max": 20.0,
              "p5": 0.5,
              "p95": 18.5,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.308191874242874,
              "median": 0.6068307706446365,
              "min": 0.4684602157115324,
              "max": 2.849284636372453,
              "p5": 0.48229727120484284,
              "p95": 2.625039249799671,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16268677559000136,
              "median": 0.1720430107526881,
              "min": 0.03030303030303026,
              "max": 0.2857142857142857,
              "p5": 0.044477028347996043,
              "p95": 0.27434715821812594,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.675,
              "median": 1.375,
              "min": 1.0,
              "max": 17.65,
              "p5": 1.0375,
              "p95": 16.022499999999997,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.574738520707283e-06,
              "median": 1.8115942028985492e-06,
              "min": 0.0,
              "max": 2.9126213592233e-06,
              "p5": 1.8115942028985492e-07,
              "p95": 2.8025186435908248e-06,
              "count": 3
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0001485403536638722,
              "median": 0.00016800794105484523,
              "min": 0.0,
              "max": 0.0002776131199367714,
              "p5": 1.6800794105484523e-05,
              "p95": 0.0002666526020485788,
              "count": 3
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.16666666666666619,
            "market": 0.0732219518025845,
            "sector": 0.0,
            "peers": -0.03253932604266152,
            "vs_market": -0.2398886184692507,
            "vs_sector": -0.16666666666666619,
            "vs_peers": -0.13412734062400467
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 41.21863799283154,
          "score_pca_percentile": 41.21863799283154,
          "rank_pca": 329,
          "total": 558,
          "adv_notional_sgd": 4041.55,
          "adv_volume_shares": 114100.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.000475783216003566,
          "votes": 4.0,
          "trades": 4.0,
          "spread_pct": 0.0511850110538811,
          "spread_ticks": 1.9222011385199242,
          "amihud": 1.1750445909838207e-06,
          "volatility": 0.6032341909652286
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5659730384780369,
          "loadings": {
            "log_adv": 0.508825543742621,
            "log_trades": 0.4542118310956694,
            "log_turnover": 0.4586683958066296,
            "neg_spread": 0.43886266997007634,
            "neg_amihud": 0.1963703003442184,
            "neg_vol": 0.3053682093233929
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 3,
          "peer_median_adv": 6182.0,
          "peer_median_score_pca": 27.419354838709676,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.6068307706446365,
          "peer_median_spread_pct": 0.18181818181818177,
          "peer_median_spread_ticks": 1.375,
          "peer_median_amihud": 1.8115942028985492e-06,
          "peer_median_turnover_ratio": 0.00015565078912552246,
          "target_vs_peer": {
            "score_pca_delta": 13.8,
            "adv_delta_pct": -34.6,
            "trades_delta_pct": -20.0,
            "volatility_delta_pct": 0.59,
            "spread_pct_delta_pct": 71.85,
            "spread_ticks_delta_pct": 39.8,
            "amihud_delta_pct": 35.14,
            "turnover_ratio_delta_pct": 205.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 41.21863799283154,
            "rank_pca": 329,
            "adv": 4041.55,
            "trades": 4.0,
            "volatility": 0.6032341909652286,
            "spread_pct": 0.0511850110538811,
            "spread_ticks": 1.9222011385199242,
            "amihud": 1.1750445909838207e-06,
            "turnover_ratio": 0.000475783216003566,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 27.419354838709676,
            "rank_pca": 406,
            "adv": 15620.25,
            "trades": 20.0,
            "volatility": 2.499407929890597,
            "spread_pct": 0.2286888867543944,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00015565078912552246,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 44.80286738351255,
            "rank_pca": 309,
            "adv": 6182.0,
            "trades": 5.0,
            "volatility": 0.6068307706446365,
            "spread_pct": 0.03030303030303026,
            "spread_ticks": 1.375,
            "amihud": 1.8115942028985492e-06,
            "turnover_ratio": 0.0002776131199367714,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 15.232974910394265,
            "rank_pca": 474,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4165891440843798,
            "spread_pct": 0.18181818181818177,
            "spread_ticks": 18.58571428571429,
            "amihud": 2.329373398555785e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Restaurants",
          "sector_count": 18,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6925165820867089,
              "median": 0.4375265141565009,
              "min": 0.0,
              "max": 6.771705841219036,
              "p5": 0.1462312523082518,
              "p95": 2.0340814208263223,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2424868.9163451483,
              "median": 12732.5,
              "min": 0.0,
              "max": 234066402.0,
              "p5": 0.0,
              "p95": 9531439.987499984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09127087533522553,
              "median": 0.02724208660159353,
              "min": 0.0002766876520731792,
              "max": 1.267605633802817,
              "p5": 0.0035820850555747736,
              "p95": 0.4632900477885274,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029585775070378145,
              "median": 0.00029104434433359095,
              "min": 0.0,
              "max": 0.7827433919978907,
              "p5": 0.0,
              "p95": 0.00716369781558887,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5820972371251695e-05,
              "median": 1.6990646436753427e-07,
              "min": 0.0,
              "max": 0.0021718869365928185,
              "p5": 0.0,
              "p95": 4.531992313317251e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 349.9032258064516,
              "median": 7.0,
              "min": 0.0,
              "max": 9404.0,
              "p5": 0.0,
              "p95": 1991.5249999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8527974964946833,
              "median": 0.6288989055267314,
              "min": 0.22083517567351515,
              "max": 4.054133692911471,
              "p5": 0.24212740783354664,
              "p95": 1.5945371214946067,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11865.358333333334,
              "median": 0.25,
              "min": 0.0,
              "max": 112795.5,
              "p5": 0.0,
              "p95": 70579.39999999994,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15786746607654792,
              "median": 0.08692040903988166,
              "min": 0.013394627319688388,
              "max": 0.6306306306306305,
              "p5": 0.015732002573350078,
              "p95": 0.4776784038244136,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00023066012297331596,
              "median": 7.995281172259682e-08,
              "min": 0.0,
              "max": 0.0016016493633351128,
              "p5": 0.0,
              "p95": 0.000818859668726041,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.861068698541634e-05,
              "median": 4.531985363662602e-06,
              "min": 0.0,
              "max": 0.00035049827318660493,
              "p5": 0.0,
              "p95": 0.00016789711321746654,
              "count": 18
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.611111111111111,
              "median": 0.5,
              "min": 0.0,
              "max": 41.0,
              "p5": 0.0,
              "p95": 21.874999999999968,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7267.416666666667,
              "median": 6182.0,
              "min": 0.0,
              "max": 15620.25,
              "p5": 618.2,
              "p95": 14676.425,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8.333333333333334,
              "median": 5.0,
              "min": 0.0,
              "max": 20.0,
              "p5": 0.5,
              "p95": 18.5,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1742759482065377,
              "median": 0.6068307706446365,
              "min": 0.4165891440843798,
              "max": 2.499407929890597,
              "p5": 0.4356133067404055,
              "p95": 2.310150213966001,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14693669962520214,
              "median": 0.18181818181818177,
              "min": 0.03030303030303026,
              "max": 0.2286888867543944,
              "p5": 0.045454545454545414,
              "p95": 0.22400181626077312,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.986904761904763,
              "median": 1.375,
              "min": 1.0,
              "max": 18.58571428571429,
              "p5": 1.0375,
              "p95": 16.864642857142858,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3803225338181115e-06,
              "median": 1.8115942028985492e-06,
              "min": 0.0,
              "max": 2.329373398555785e-06,
              "p5": 1.8115942028985492e-07,
              "p95": 2.277595478990061e-06,
              "count": 3
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00014442130302076464,
              "median": 0.00015565078912552246,
              "min": 0.0,
              "max": 0.0002776131199367714,
              "p5": 1.5565078912552248e-05,
              "p95": 0.0002654168868556465,
              "count": 3
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.2857142857142846,
            "market": 0.11167821786562349,
            "sector": 0.0,
            "peers": -0.17876228063906352,
            "vs_market": -0.3973925035799081,
            "vs_sector": -0.2857142857142846,
            "vs_peers": -0.10695200507522107
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 14.7 vs peer median 38.2 (-23.5 pts).",
        "market_comparison": "Return 0.0% vs peers 0.0%."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid for the stock’s size, which supports a generally accessible market over the recent baseline.",
        "market_comparison": "The stock fell 25.0% over 1M compared with peers down 2.4% and the market down 2.5%, which matters because weaker price performance can leave trading conditions feeling less supported."
      },
      "3m": {
        "liquidity": "3M score 19.5 vs peer median 26.5 (-7.0 pts).",
        "market_comparison": "Return -16.7% vs peers -3.3%."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong for the company’s size, with a liquidity score of 41.2 compared with a peer median of 27.4, which supports good structural access.",
        "market_comparison": "Return -28.6% vs peers -17.9%."
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
          "median": 0.766809896430684,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "76.7%",
          "display_range": null,
          "display_text": "76.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 76.7,
          "plain_english": "Market explains about 76.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.07456799251327927,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "7.5%",
          "display_range": null,
          "display_text": "7.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 7.5,
          "plain_english": "Sector explains about 7.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.15862211105603688,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.9%",
          "display_range": null,
          "display_text": "15.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.9,
          "plain_english": "Company-specific explains about 15.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.89749338150102,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.90",
          "display_range": null,
          "display_text": "1.90",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 1.90% stock move in the same direction in this state.",
          "value_num": 1.9
        },
        "beta_stock_lag": {
          "median": -0.19753880341765487,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.20",
          "display_range": null,
          "display_text": "-0.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.2
        },
        "beta_sector": {
          "median": -0.109650434352181,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.11",
          "display_range": null,
          "display_text": "-0.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.11% stock move in the opposite direction in this state.",
          "value_num": -0.11
        },
        "beta_market_lag": {
          "median": -0.9531718062562423,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.95",
          "display_range": null,
          "display_text": "-0.95",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.95
        },
        "beta_sector_lag": {
          "median": -0.3485857625243793,
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-17 to 2025-03-28",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5865410105953923,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.7%",
            "display_range": null,
            "display_text": "58.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 58.7,
            "plain_english": "Market explains about 58.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5865410105953923,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Market explains about 58.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13898965159355592,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27446933781105187,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4614005876659976,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.1%",
            "display_range": null,
            "display_text": "46.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 46.1,
            "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3432953837681201,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.3%",
              "display_range": null,
              "display_text": "34.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.3,
              "plain_english": "Market explains about 34.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19530402856588222,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Sector explains about 19.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4614005876659976,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
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
            "median": 0.5967420960670816,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.7%",
            "display_range": null,
            "display_text": "59.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 59.7,
            "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2710803806422541,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.1%",
              "display_range": null,
              "display_text": "27.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.1,
              "plain_english": "Market explains about 27.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13217752329066437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.2%",
              "display_range": null,
              "display_text": "13.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.2,
              "plain_english": "Sector explains about 13.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5967420960670816,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.7%",
              "display_range": null,
              "display_text": "59.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.7,
              "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
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
            "median": 0.47410051869958314,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.40574781904222434,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.6%",
              "display_range": null,
              "display_text": "40.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 40.6,
              "plain_english": "Market explains about 40.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1201516622581925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.0%",
              "display_range": null,
              "display_text": "12.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.0,
              "plain_english": "Sector explains about 12.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47410051869958314,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly company-driven."
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
            "median": 0.622772996050116,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2611443558403713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.1%",
              "display_range": null,
              "display_text": "26.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 26.1,
              "plain_english": "Market explains about 26.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11608264810951256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.6%",
              "display_range": null,
              "display_text": "11.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 11.6,
              "plain_english": "Sector explains about 11.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.622772996050116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
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
            "median": 0.664520386692834,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.5%",
            "display_range": null,
            "display_text": "66.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 66.5,
            "plain_english": "Company-specific explains about 66.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16343872800182763,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.3%",
              "display_range": null,
              "display_text": "16.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.3,
              "plain_english": "Market explains about 16.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17204088530533845,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.2%",
              "display_range": null,
              "display_text": "17.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.2,
              "plain_english": "Sector explains about 17.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.664520386692834,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.5%",
              "display_range": null,
              "display_text": "66.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.5,
              "plain_english": "Company-specific explains about 66.5% of price moves in the current state."
            }
          },
          "summary": "Aug: Still clearly company-driven."
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
            "median": 0.8248828720802532,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.5%",
            "display_range": null,
            "display_text": "82.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 82.5,
            "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10331652708496011,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.3%",
              "display_range": null,
              "display_text": "10.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.3,
              "plain_english": "Market explains about 10.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07180060083478675,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.2%",
              "display_range": null,
              "display_text": "7.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 7.2,
              "plain_english": "Sector explains about 7.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8248828720802532,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.5%",
              "display_range": null,
              "display_text": "82.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 82.5,
              "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
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
            "median": 0.7834931528304391,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "78.3%",
            "display_range": null,
            "display_text": "78.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 78.3,
            "plain_english": "Company-specific explains about 78.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.08215471178922584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.2%",
              "display_range": null,
              "display_text": "8.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 8.2,
              "plain_english": "Market explains about 8.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13435213538033497,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.4%",
              "display_range": null,
              "display_text": "13.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.4,
              "plain_english": "Sector explains about 13.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7834931528304391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "78.3%",
              "display_range": null,
              "display_text": "78.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 78.3,
              "plain_english": "Company-specific explains about 78.3% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4988060361977759,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Market explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4988060361977759,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05498305840843262,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.5%",
              "display_range": null,
              "display_text": "5.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 5.5,
              "plain_english": "Sector explains about 5.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44621090539379143,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
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
            "median": 0.5743608829378678,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.4%",
            "display_range": null,
            "display_text": "57.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 57.4,
            "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2356378620216546,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.6%",
              "display_range": null,
              "display_text": "23.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.6,
              "plain_english": "Market explains about 23.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19000125504047752,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.0%",
              "display_range": null,
              "display_text": "19.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.0,
              "plain_english": "Sector explains about 19.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5743608829378678,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
            "median": 0.7058504483583226,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "70.6%",
            "display_range": null,
            "display_text": "70.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 70.6,
            "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17778045905461487,
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
              "plain_english": "Market explains about 17.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11636909258706248,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.6%",
              "display_range": null,
              "display_text": "11.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.6,
              "plain_english": "Sector explains about 11.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7058504483583226,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.6%",
              "display_range": null,
              "display_text": "70.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 70.6,
              "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
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
            "median": 0.539627871058575,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.0%",
            "display_range": null,
            "display_text": "54.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 54.0,
            "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2619510223305969,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.2%",
              "display_range": null,
              "display_text": "26.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.2,
              "plain_english": "Market explains about 26.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.198421106610828,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.8%",
              "display_range": null,
              "display_text": "19.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 19.8,
              "plain_english": "Sector explains about 19.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.539627871058575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly company-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4632927743279037,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Market explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4632927743279037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Market explains about 46.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2727963264577513,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Sector explains about 27.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2639108992143451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Company-specific explains about 26.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
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
            "median": 0.023584940327395436,
            "low": 0.023584940327395436,
            "high": 0.023584940327395436
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 13.777777777777779,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.05287693611287938,
            "low": 0.05287693611287938,
            "high": 0.05287693611287938
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
            0.06504065040650407,
            0.9349593495934959
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
            8.0,
            115.0
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
        "market_link_display": "1.90",
        "sector_link_display": "-0.11",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.90% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.11% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.20",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 76.7,
        "driver_share_display": "76.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9349593495934959,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 13.8 days.",
        "expected_duration_days": 13.8
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
            "median": 0.023584940327395436,
            "low": 0.023584940327395436,
            "high": 0.023584940327395436
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 13.777777777777779,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.05287693611287938,
            "low": 0.05287693611287938,
            "high": 0.05287693611287938
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
          0.06504065040650407,
          0.9349593495934959
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.928,
            0.072
          ],
          [
            0.06504065040650407,
            0.9349593495934959
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
            8.0,
            115.0
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
        "text": "Liquidity score: 41.2 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
        "text": "Liquidity Health: MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
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
    "liq_subtitle": "Structural liquidity remains strong for size, but the latest session and displayed bid depth give a thinner near-term read.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "1M -25.0% vs peers -2.4%; 3M -16.7% vs peers -3.3%; 6M -28.6% vs peers -17.9%",
    "perf_insight": "The sell-off is not being met by a strong near-term liquidity signal. The 6M liquidity score is 41.2 compared with a peer median of 27.4, but 1D average volume is down 100.0% from the 1M average and top-10 bid depth is only 0.25x ask depth. That matters because execution can feel worse when price performance is already under pressure.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main driver, with 76.7% of current price action explained by broader conditions, so the tape is moving largely with the market.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 76.7% of price changes. Other influences are sector 7.5%, and company-specific 15.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 76.7%, sector 7.5%, and company-specific 15.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 76.7%, sector 7.5%, and company-specific 15.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That backdrop matters because the shares are down 25.0% over 1M, far weaker than peers and the market, while the displayed bid remains thin. The move is therefore happening in a market-led tape without much visible buy-side support.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 76.7% of recent price moves.",
      "The pattern has shifted from company-driven in January to mostly market-driven in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market-led trading is the clearest current state, while price performance remains weak and the displayed bid is thin.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Mar 13, 2025 to Mar 12, 2026 (183 trading days • 4,596 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Evidence is mixed, with history limited, so the liquidity picture is still forming and near-term readings matter most.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trade-size history is available across 183 trading days and 4,596 trades, but the main near-term signal is still the thin displayed bid.",
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
    "intraday_insight": "Session split is open 1.2%, continuous 94.6%, and close 2.0%. Current trading concentration score is 0.612.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Snapshot unavailable.",
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
    "exec_subtitle": "Liquidity is strong for the company’s size, but the displayed book is offering thin buy-side support.",
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
        "value": "41.2/100",
        "sub": "Peer median 27.4 (+13.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$4.0K",
        "sub": "Peer median S$6.2K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "5.12%",
        "sub": "1.92 ticks; peers 18.18%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is strong for the company’s size, with a 6M score of 41.2 compared with a peer median of 27.4, which keeps the stock accessible relative to peers. The near-term picture is thinner, with 1D average volume down 100.0% from the 1M average and top-10 bid depth at only 0.25x ask depth. That matters because the structural liquidity profile looks better than the immediate buy-side support visible in the book.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.030",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "20.00%",
        "note": "6.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.25x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-61.07% with 20.5% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-61.07% with 2.1% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-61.07% with 0.8% fill.",
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
        "value": "41",
        "suffix": "/100",
        "bar_pct": 41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 329/558",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "5.12",
        "suffix": "%",
        "bar_pct": 51,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "5.12% • 1.92 ticks vs peers 18.18%",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "S$4.0K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$6.2K",
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
        "value": "76.7",
        "suffix": "market",
        "bar_pct": 77,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 7.5% • Company 15.9%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 6M score of 41.2 compared with a peer median of 27.4. That matters because the name still screens accessible relative to peers over a longer window.",
      "Recent flow gives a mixed read, with 1D average volume down 100.0% from the 1M average. That matters because the latest session does not reinforce the stronger monthly liquidity picture.",
      "The main watchpoint is execution on the downside, because top-10 bid depth is only 0.25x ask depth and the spread is 6 ticks. That matters more with the stock down 25.0% over 1M and market factors explaining 76.7% of current trading."
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
      "overall": "6M liquidity is strong: score 41.2 vs peer median 27.4 (+13.8 pts). 1D average volume down -100.0% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 41.2 vs peer median 27.4 (+13.8 pts)."
      ],
      "concerns": [
        "1D average volume down -100.0% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +13.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -28.6%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -28.6% vs market 11.2%.",
        "vs_sector": "Worse than sector: -28.6% vs sector 0.0%.",
        "vs_peers": "Worse than peers: -28.6% vs peers -17.9%."
      },
      "adv": {
        "insight": "ADV is S$4.0K, better than sector, but worse than market and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Worse than market: S$4.0K vs market S$12.7K.",
        "vs_sector": "Better than sector: S$4.0K vs sector S$0.",
        "vs_peers": "Worse than peers: S$4.0K vs peers S$6.2K."
      },
      "spread": {
        "insight": "Spread is 5.12%, better than sector and peers, but worse than market, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Worse than market: 5.12% vs market 2.72%.",
        "vs_sector": "Better than sector: 5.12% vs sector 8.69%.",
        "vs_peers": "Better than peers: 5.12% vs peers 18.18%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.05%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.05% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.05% vs sector 0.00%.",
        "vs_peers": "Better than peers: 0.05% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 60.32%, worse than market, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 60.32% vs market 43.75%.",
        "vs_sector": "In line with sector: 60.32% vs sector 62.89%.",
        "vs_peers": "In line with peers: 60.32% vs peers 60.68%."
      },
      "trades": {
        "insight": "Trades is 4, better than sector, but worse than market and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Worse than market: 4 vs market 7.",
        "vs_sector": "Better than sector: 4 vs sector 0.",
        "vs_peers": "Worse than peers: 4 vs peers 5."
      },
      "amihud": {
        "insight": "Price impact is 1.18e-06, better than sector and peers, but worse than market, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 1.18e-06 vs market 1.70e-07.",
        "vs_sector": "Better than sector: 1.18e-06 vs sector 4.53e-06.",
        "vs_peers": "Better than peers: 1.18e-06 vs peers 1.81e-06."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mixed but leans company-specific, because market factors are dominant at 76.7% while the stock has fallen far more than peers and the market."
    },
    "drivers": {
      "overall": "The market is the main force behind the stock right now, with 76.7% of recent price moves explained by broader conditions. That matters because the shares are moving less on company-specific signals and more with the wider tape.",
      "beta": "The current read looks mixed rather than fully settled. The stock is down 25.0% over the past month compared with declines of 2.4% for peers and 2.5% for the market, while today’s average volume has dropped 100.0% from the 1M average, so the latest move is not backed by strong trading activity.",
      "rolling_change": "Jan: Still clearly company-driven. | Feb: mostly market. | Mar: Mostly market-driven."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a high-volatility state, with broader market moves still explaining a meaningful share of trading at 76.7%. That points to a tape that is being driven more by external conditions than by a steadier company-specific pattern.",
      "transitions": "The state looks relatively persistent, with a typical run length of about 13.8 days, although evidence is mixed. That suggests the current backdrop is more likely to stay in place than to reverse quickly.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 13.8 days."
    },
    "execution": {
      "overall": "The displayed book looks thin buy-side because top-10 bid depth is only 0.25x ask depth and the spread is 6",
      "concern": "The clearest stress point is the imbalance in displayed depth, with bids at only a quarter of ask depth. Recent activity is also mixed, with 1D average volume down 100.0% from the 1M average, which leaves less evidence that the book can absorb selling cleanly.",
      "peer_context": "The broader liquidity picture still screens well, with a 6M score of 41.2 compared with a peer median of 27.4, but the current book does not show that strength evenly. Historical trade-size context is useful but limited to a 183-day, 4,596-trade sample, so the live depth imbalance carries more weight for the immediate read."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Retail-like activity is slightly higher by trade count, but it is much lighter by trade value. Retail-like trades are 24.6% of count against 23.1% for institution-like, while retail-like value is only 8.2% against 31.0%, so the count picture alone would overstate the retail share of meaningful flow.",
      "institutional_gap": "The institutional read is tempered by unclear flow making up 38.5% of trade",
      "peer_comparison": "Relative to peers, the trader mix comparison is available in the report tables. The current read points to institution-like value participation, but the peer context may be read alongside the mixed evidence."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with price-moving trades accounting fo% of total trades. That suggests the tape is being moved by a minority of trades rather than by broad participation. Ambiguous or unclear flow is 38.5% of trade count, so the read is not fully clean. Positive and negative price-moving trade asymmetry is available in the report data. The broader interpretation remains mixed because the unclear share of trading is still high.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is unlikely to be the main driver of current trading conditions. Evidence is mixed, but the primary read is low short interest and the recent share price drop of 25.0% over one month compared with declines of 2.4% for peers and 2.5% for the market points more to broader selling pressure than to a short-led dynamic.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, which suggests it is not adding a new source of pressure to the tape. History is limited to 183 trading days and 4,596 trades, so this read may be treated as steady rather than emphatic.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, which carries 94.6% of activity, while the open is 1.2% and the close is 2.0%. That points to a day that is mainly tradable between the auction windows rather than at the edges.",
      "hhi_interpretation": "The concentration score of 0.612 suggests activity is moderately concentrated rather than evenly spread through the day. That matters because liquidity looks present, but it may still be thinner outside the main trading window.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Peer concentration comparison is available in the report tables. On the current reading, intraday liquidity appears serviceable through the main session, though evidence is mixed."
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
        "1A0",
        "579",
        "LGH",
        "URR"
      ],
      "scores": [
        41.21863799283154,
        27.419354838709676,
        44.80286738351255,
        15.232974910394265
      ],
      "is_target": [
        true,
        false,
        false,
        false
      ],
      "adv": [
        4041.55,
        15620.25,
        6182.0,
        0.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Restaurants",
      "sector_count": 18,
      "market_count": 558,
      "company": {
        "volatility": 0.6032341909652286,
        "adv": 4041.55,
        "spread_pct": 0.0511850110538811,
        "turnover_ratio": 0.000475783216003566,
        "amihud": 1.1750445909838207e-06,
        "trades": 4.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6925165820867089,
          "median": 0.4375265141565009,
          "min": 0.0,
          "max": 6.771705841219036,
          "p5": 0.1462312523082518,
          "p95": 2.0340814208263223,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2424868.9163451483,
          "median": 12732.5,
          "min": 0.0,
          "max": 234066402.0,
          "p5": 0.0,
          "p95": 9531439.987499984,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09127087533522553,
          "median": 0.02724208660159353,
          "min": 0.0002766876520731792,
          "max": 1.267605633802817,
          "p5": 0.0035820850555747736,
          "p95": 0.4632900477885274,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0029585775070378145,
          "median": 0.00029104434433359095,
          "min": 0.0,
          "max": 0.7827433919978907,
          "p5": 0.0,
          "p95": 0.00716369781558887,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5820972371251695e-05,
          "median": 1.6990646436753427e-07,
          "min": 0.0,
          "max": 0.0021718869365928185,
          "p5": 0.0,
          "p95": 4.531992313317251e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 349.9032258064516,
          "median": 7.0,
          "min": 0.0,
          "max": 9404.0,
          "p5": 0.0,
          "p95": 1991.5249999999999,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8527974964946833,
          "median": 0.6288989055267314,
          "min": 0.22083517567351515,
          "max": 4.054133692911471,
          "p5": 0.24212740783354664,
          "p95": 1.5945371214946067,
          "count": 18
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 11865.358333333334,
          "median": 0.25,
          "min": 0.0,
          "max": 112795.5,
          "p5": 0.0,
          "p95": 70579.39999999994,
          "count": 18
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15786746607654792,
          "median": 0.08692040903988166,
          "min": 0.013394627319688388,
          "max": 0.6306306306306305,
          "p5": 0.015732002573350078,
          "p95": 0.4776784038244136,
          "count": 18
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00023066012297331596,
          "median": 7.995281172259682e-08,
          "min": 0.0,
          "max": 0.0016016493633351128,
          "p5": 0.0,
          "p95": 0.000818859668726041,
          "count": 18
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.861068698541634e-05,
          "median": 4.531985363662602e-06,
          "min": 0.0,
          "max": 0.00035049827318660493,
          "p5": 0.0,
          "p95": 0.00016789711321746654,
          "count": 18
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4.611111111111111,
          "median": 0.5,
          "min": 0.0,
          "max": 41.0,
          "p5": 0.0,
          "p95": 21.874999999999968,
          "count": 18
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 7267.416666666667,
          "median": 6182.0,
          "min": 0.0,
          "max": 15620.25,
          "p5": 618.2,
          "p95": 14676.425,
          "count": 3
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 8.333333333333334,
          "median": 5.0,
          "min": 0.0,
          "max": 20.0,
          "p5": 0.5,
          "p95": 18.5,
          "count": 3
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.1742759482065377,
          "median": 0.6068307706446365,
          "min": 0.4165891440843798,
          "max": 2.499407929890597,
          "p5": 0.4356133067404055,
          "p95": 2.310150213966001,
          "count": 3
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14693669962520214,
          "median": 0.18181818181818177,
          "min": 0.03030303030303026,
          "max": 0.2286888867543944,
          "p5": 0.045454545454545414,
          "p95": 0.22400181626077312,
          "count": 3
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 6.986904761904763,
          "median": 1.375,
          "min": 1.0,
          "max": 18.58571428571429,
          "p5": 1.0375,
          "p95": 16.864642857142858,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3803225338181115e-06,
          "median": 1.8115942028985492e-06,
          "min": 0.0,
          "max": 2.329373398555785e-06,
          "p5": 1.8115942028985492e-07,
          "p95": 2.277595478990061e-06,
          "count": 3
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00014442130302076464,
          "median": 0.00015565078912552246,
          "min": 0.0,
          "max": 0.0002776131199367714,
          "p5": 1.5565078912552248e-05,
          "p95": 0.0002654168868556465,
          "count": 3
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.2499999999999999,
        "market": -0.024571683631716912,
        "sector": 0.0,
        "peers": -0.024002908331272943
      },
      {
        "horizon": "3M",
        "stock": -0.16666666666666619,
        "market": 0.0732219518025845,
        "sector": 0.0,
        "peers": -0.03253932604266152
      },
      {
        "horizon": "6M",
        "stock": -0.2857142857142846,
        "market": 0.11167821786562349,
        "sector": 0.0,
        "peers": -0.17876228063906352
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
      "share_market": 0.766809896430684,
      "share_sector": 0.07456799251327927,
      "share_idio": 0.15862211105603688,
      "beta_market": 1.89749338150102,
      "beta_sector": -0.109650434352181,
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
            "median": 0.766809896430684,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.7%",
            "display_range": null,
            "display_text": "76.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 76.7,
            "plain_english": "Market explains about 76.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.07456799251327927,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "7.5%",
            "display_range": null,
            "display_text": "7.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 7.5,
            "plain_english": "Sector explains about 7.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.15862211105603688,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.9%",
            "display_range": null,
            "display_text": "15.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.9,
            "plain_english": "Company-specific explains about 15.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.89749338150102,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.90",
            "display_range": null,
            "display_text": "1.90",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 1.90% stock move in the same direction in this state.",
            "value_num": 1.9
          },
          "beta_stock_lag": {
            "median": -0.19753880341765487,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.20",
            "display_range": null,
            "display_text": "-0.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.2
          },
          "beta_sector": {
            "median": -0.109650434352181,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.11",
            "display_range": null,
            "display_text": "-0.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.11% stock move in the opposite direction in this state.",
            "value_num": -0.11
          },
          "beta_market_lag": {
            "median": -0.9531718062562423,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.95",
            "display_range": null,
            "display_text": "-0.95",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.95
          },
          "beta_sector_lag": {
            "median": -0.3485857625243793,
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
            "month_key": "2025-03",
            "month_label": "March 2025",
            "month_short_label": "Mar",
            "period_label": "2025-03-17 to 2025-03-28",
            "n_obs": 10,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5865410105953923,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Market explains about 58.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5865410105953923,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.7%",
                "display_range": null,
                "display_text": "58.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 58.7,
                "plain_english": "Market explains about 58.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13898965159355592,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27446933781105187,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4614005876659976,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3432953837681201,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.3%",
                "display_range": null,
                "display_text": "34.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.3,
                "plain_english": "Market explains about 34.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19530402856588222,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Sector explains about 19.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4614005876659976,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.1%",
                "display_range": null,
                "display_text": "46.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 46.1,
                "plain_english": "Company-specific explains about 46.1% of price moves in the current state."
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
              "median": 0.5967420960670816,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.7%",
              "display_range": null,
              "display_text": "59.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.7,
              "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2710803806422541,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.1%",
                "display_range": null,
                "display_text": "27.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.1,
                "plain_english": "Market explains about 27.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13217752329066437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.2%",
                "display_range": null,
                "display_text": "13.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.2,
                "plain_english": "Sector explains about 13.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5967420960670816,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.7%",
                "display_range": null,
                "display_text": "59.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 59.7,
                "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
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
              "median": 0.47410051869958314,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.40574781904222434,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.6%",
                "display_range": null,
                "display_text": "40.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 40.6,
                "plain_english": "Market explains about 40.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1201516622581925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.0%",
                "display_range": null,
                "display_text": "12.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.0,
                "plain_english": "Sector explains about 12.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47410051869958314,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly company-driven."
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
              "median": 0.622772996050116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2611443558403713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.1%",
                "display_range": null,
                "display_text": "26.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 26.1,
                "plain_english": "Market explains about 26.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11608264810951256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.6%",
                "display_range": null,
                "display_text": "11.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 11.6,
                "plain_english": "Sector explains about 11.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.622772996050116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
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
              "median": 0.664520386692834,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.5%",
              "display_range": null,
              "display_text": "66.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.5,
              "plain_english": "Company-specific explains about 66.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16343872800182763,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.3%",
                "display_range": null,
                "display_text": "16.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.3,
                "plain_english": "Market explains about 16.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17204088530533845,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.2%",
                "display_range": null,
                "display_text": "17.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.2,
                "plain_english": "Sector explains about 17.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.664520386692834,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.5%",
                "display_range": null,
                "display_text": "66.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 66.5,
                "plain_english": "Company-specific explains about 66.5% of price moves in the current state."
              }
            },
            "summary": "Aug: Still clearly company-driven."
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
              "median": 0.8248828720802532,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.5%",
              "display_range": null,
              "display_text": "82.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 82.5,
              "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10331652708496011,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.3%",
                "display_range": null,
                "display_text": "10.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.3,
                "plain_english": "Market explains about 10.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07180060083478675,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.2%",
                "display_range": null,
                "display_text": "7.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 7.2,
                "plain_english": "Sector explains about 7.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8248828720802532,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.5%",
                "display_range": null,
                "display_text": "82.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 82.5,
                "plain_english": "Company-specific explains about 82.5% of price moves in the current state."
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
              "median": 0.7834931528304391,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "78.3%",
              "display_range": null,
              "display_text": "78.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 78.3,
              "plain_english": "Company-specific explains about 78.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.08215471178922584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.2%",
                "display_range": null,
                "display_text": "8.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 8.2,
                "plain_english": "Market explains about 8.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13435213538033497,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.4%",
                "display_range": null,
                "display_text": "13.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.4,
                "plain_english": "Sector explains about 13.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7834931528304391,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "78.3%",
                "display_range": null,
                "display_text": "78.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 78.3,
                "plain_english": "Company-specific explains about 78.3% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4988060361977759,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4988060361977759,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Market explains about 49.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05498305840843262,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.5%",
                "display_range": null,
                "display_text": "5.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 5.5,
                "plain_english": "Sector explains about 5.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44621090539379143,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Company-specific explains about 44.6% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
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
              "median": 0.5743608829378678,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2356378620216546,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.6%",
                "display_range": null,
                "display_text": "23.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.6,
                "plain_english": "Market explains about 23.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19000125504047752,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.0%",
                "display_range": null,
                "display_text": "19.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.0,
                "plain_english": "Sector explains about 19.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5743608829378678,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.4%",
                "display_range": null,
                "display_text": "57.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 57.4,
                "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
              "median": 0.7058504483583226,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.6%",
              "display_range": null,
              "display_text": "70.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 70.6,
              "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17778045905461487,
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
                "plain_english": "Market explains about 17.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11636909258706248,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.6%",
                "display_range": null,
                "display_text": "11.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.6,
                "plain_english": "Sector explains about 11.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7058504483583226,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "70.6%",
                "display_range": null,
                "display_text": "70.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 70.6,
                "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
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
              "median": 0.539627871058575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2619510223305969,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.2%",
                "display_range": null,
                "display_text": "26.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.2,
                "plain_english": "Market explains about 26.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.198421106610828,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.8%",
                "display_range": null,
                "display_text": "19.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 19.8,
                "plain_english": "Sector explains about 19.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.539627871058575,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.0%",
                "display_range": null,
                "display_text": "54.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 54.0,
                "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly company-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-13",
            "n_obs": 10,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4632927743279037,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Market explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4632927743279037,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Market explains about 46.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2727963264577513,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Sector explains about 27.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2639108992143451,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Company-specific explains about 26.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
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
              "median": 0.023584940327395436,
              "low": 0.023584940327395436,
              "high": 0.023584940327395436
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 13.777777777777779,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.05287693611287938,
              "low": 0.05287693611287938,
              "high": 0.05287693611287938
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
              0.06504065040650407,
              0.9349593495934959
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
              8.0,
              115.0
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
          "market_link_display": "1.90",
          "sector_link_display": "-0.11",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.90% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.11% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.20",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 76.7,
          "driver_share_display": "76.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9349593495934959,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 13.8 days.",
          "expected_duration_days": 13.8
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-17 to 2025-03-28",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5865410105953923,
          "share_sector": 0.13898965159355592,
          "share_company": 0.27446933781105187,
          "share_market_display": "58.7%",
          "share_sector_display": "13.9%",
          "share_company_display": "27.4%",
          "dominant_share_display": "58.7%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.3432953837681201,
          "share_sector": 0.19530402856588222,
          "share_company": 0.4614005876659976,
          "share_market_display": "34.3%",
          "share_sector_display": "19.5%",
          "share_company_display": "46.1%",
          "dominant_share_display": "46.1%"
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
          "summary": "May: Mostly company-driven.",
          "share_market": 0.2710803806422541,
          "share_sector": 0.13217752329066437,
          "share_company": 0.5967420960670816,
          "share_market_display": "27.1%",
          "share_sector_display": "13.2%",
          "share_company_display": "59.7%",
          "dominant_share_display": "59.7%"
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
          "summary": "Jun: Mostly company-driven.",
          "share_market": 0.40574781904222434,
          "share_sector": 0.1201516622581925,
          "share_company": 0.47410051869958314,
          "share_market_display": "40.6%",
          "share_sector_display": "12.0%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          "share_market": 0.2611443558403713,
          "share_sector": 0.11608264810951256,
          "share_company": 0.622772996050116,
          "share_market_display": "26.1%",
          "share_sector_display": "11.6%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
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
          "summary": "Aug: Still clearly company-driven.",
          "share_market": 0.16343872800182763,
          "share_sector": 0.17204088530533845,
          "share_company": 0.664520386692834,
          "share_market_display": "16.3%",
          "share_sector_display": "17.2%",
          "share_company_display": "66.5%",
          "dominant_share_display": "66.5%"
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
          "share_market": 0.10331652708496011,
          "share_sector": 0.07180060083478675,
          "share_company": 0.8248828720802532,
          "share_market_display": "10.3%",
          "share_sector_display": "7.2%",
          "share_company_display": "82.5%",
          "dominant_share_display": "82.5%"
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
          "share_market": 0.08215471178922584,
          "share_sector": 0.13435213538033497,
          "share_company": 0.7834931528304391,
          "share_market_display": "8.2%",
          "share_sector_display": "13.4%",
          "share_company_display": "78.3%",
          "dominant_share_display": "78.3%"
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
          "summary": "Nov: Mostly market-driven.",
          "share_market": 0.4988060361977759,
          "share_sector": 0.05498305840843262,
          "share_company": 0.44621090539379143,
          "share_market_display": "49.9%",
          "share_sector_display": "5.5%",
          "share_company_display": "44.6%",
          "dominant_share_display": "49.9%"
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
          "share_market": 0.2356378620216546,
          "share_sector": 0.19000125504047752,
          "share_company": 0.5743608829378678,
          "share_market_display": "23.6%",
          "share_sector_display": "19.0%",
          "share_company_display": "57.4%",
          "dominant_share_display": "57.4%"
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
          "share_market": 0.17778045905461487,
          "share_sector": 0.11636909258706248,
          "share_company": 0.7058504483583226,
          "share_market_display": "17.8%",
          "share_sector_display": "11.6%",
          "share_company_display": "70.6%",
          "dominant_share_display": "70.6%"
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
          "share_market": 0.2619510223305969,
          "share_sector": 0.198421106610828,
          "share_company": 0.539627871058575,
          "share_market_display": "26.2%",
          "share_sector_display": "19.8%",
          "share_company_display": "54.0%",
          "dominant_share_display": "54.0%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-13",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.4632927743279037,
          "share_sector": 0.2727963264577513,
          "share_company": 0.2639108992143451,
          "share_market_display": "46.3%",
          "share_sector_display": "27.3%",
          "share_company_display": "26.4%",
          "dominant_share_display": "46.3%"
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
              "median": 0.023584940327395436,
              "low": 0.023584940327395436,
              "high": 0.023584940327395436
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 13.777777777777779,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.05287693611287938,
              "low": 0.05287693611287938,
              "high": 0.05287693611287938
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
            0.06504065040650407,
            0.9349593495934959
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.027,
          "quantity": 50000.0,
          "value": 1350.0
        },
        {
          "level": 2,
          "price": 0.026,
          "quantity": 106000.0,
          "value": 2756.0
        },
        {
          "level": 3,
          "price": 0.025,
          "quantity": 200000.0,
          "value": 5000.0
        },
        {
          "level": 4,
          "price": 0.023,
          "quantity": 70000.0,
          "value": 1610.0
        },
        {
          "level": 5,
          "price": 0.021,
          "quantity": 70000.0,
          "value": 1470.0
        },
        {
          "level": 6,
          "price": 0.019,
          "quantity": 70000.0,
          "value": 1330.0
        },
        {
          "level": 7,
          "price": 0.017,
          "quantity": 120000.0,
          "value": 2040.0000000000002
        },
        {
          "level": 8,
          "price": 0.015,
          "quantity": 220000.0,
          "value": 3300.0
        },
        {
          "level": 9,
          "price": 0.002,
          "quantity": 800000.0,
          "value": 1600.0
        },
        {
          "level": 10,
          "price": 0.001,
          "quantity": 50000.0,
          "value": 50.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.033,
          "quantity": 189500.0,
          "value": 6253.5
        },
        {
          "level": 2,
          "price": 0.034,
          "quantity": 121200.0,
          "value": 4120.8
        },
        {
          "level": 3,
          "price": 0.035,
          "quantity": 70000.0,
          "value": 2450.0000000000005
        },
        {
          "level": 4,
          "price": 0.037,
          "quantity": 200000.0,
          "value": 7400.0
        },
        {
          "level": 5,
          "price": 0.038,
          "quantity": 145500.0,
          "value": 5529.0
        },
        {
          "level": 6,
          "price": 0.039,
          "quantity": 135200.0,
          "value": 5272.8
        },
        {
          "level": 7,
          "price": 0.04,
          "quantity": 250000.0,
          "value": 10000.0
        },
        {
          "level": 8,
          "price": 0.05,
          "quantity": 550000.0,
          "value": 27500.0
        },
        {
          "level": 9,
          "price": 0.054,
          "quantity": 231600.0,
          "value": 12506.4
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-13 08:59:00.392800",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.03,
        "spread_pct": 0.20000000000000007,
        "spread_ticks": 6.0,
        "tick_size": 0.001,
        "bid_depth_notional_top10": 20506.0,
        "ask_depth_notional_top10": 81032.5,
        "bid_ask_depth_ratio": 0.2531
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 183,
        "n_trades_used": 4596,
        "first_trade_date": "2025-03-13",
        "last_trade_date": "2026-03-12",
        "window_label": "Mar 13, 2025 to Mar 12, 2026",
        "window_short_label": "Mar 13, 2025 to Mar 12, 2026",
        "trade_days_label": "183 trading days",
        "trade_count_label": "4,596 trades",
        "window_detail_label": "183 trading days • 4,596 trades",
        "history_note": "Trade-size percentiles use Mar 13, 2025 to Mar 12, 2026 history (183 trading days • 4,596 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 4800.0,
            "impact_pct": -0.129299,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 23.41,
            "pct_of_adv": 1037.84
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7805.2,
            "impact_pct": -0.144077,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 38.06,
            "pct_of_adv": 1687.61
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 34241.14,
            "impact_pct": -0.610744,
            "filled_pct": 59.9,
            "levels_consumed": 10,
            "pct_of_bid_depth": 166.98,
            "pct_of_adv": 7403.49
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8119594029086433280",
            "timestamp": "2026-03-12 22:59:01.927300000",
            "local_timestamp": "2026-03-13 06:59:01",
            "posted_price": 0.05,
            "size_shares": 500000.0,
            "notional": 25000.0,
            "impact_pct": -0.610744,
            "filled_pct": 82.0,
            "levels_consumed": 10,
            "pct_of_bid_depth": 121.92,
            "price_vs_mid_pct": 66.667,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8112682224115146752",
            "timestamp": "2026-03-12 22:59:01.927300000",
            "local_timestamp": "2026-03-13 06:59:01",
            "posted_price": 0.054,
            "size_shares": 231600.0,
            "notional": 12506.4,
            "impact_pct": -0.18715199999999999,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 60.99,
            "price_vs_mid_pct": 80.0,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8124161125509091328",
            "timestamp": "2026-03-13 00:30:06.137200000",
            "local_timestamp": "2026-03-13 08:30:06",
            "posted_price": 0.04,
            "size_shares": 250000.0,
            "notional": 10000.0,
            "impact_pct": -0.155839,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 48.77,
            "price_vs_mid_pct": 33.333,
            "executed_event_count": 0,
            "event_count": 6
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-13",
        "bucket_minutes": 30,
        "tick_size": 0.001,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.13793103448275865,
            "spread_ticks": 4.0,
            "bid_depth_notional": 20506.0,
            "ask_depth_notional": 78363.5,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.13793103448275865,
            "spread_ticks": 4.0,
            "bid_depth_notional": 20506.0,
            "ask_depth_notional": 80533.5,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.13793103448275865,
            "spread_ticks": 4.0,
            "bid_depth_notional": 20506.0,
            "ask_depth_notional": 80813.5,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.20000000000000007,
            "spread_ticks": 6.000000000000002,
            "bid_depth_notional": 20506.0,
            "ask_depth_notional": 81032.5,
            "mid_price": 0.03
          }
        ],
        "summary": {
          "median_spread_pct": 0.13793103448275865,
          "median_spread_ticks": 4.0,
          "median_bid_depth_notional": 20506.0,
          "median_ask_depth_notional": 80673.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 10810.8,
      "peers": [
        {
          "ticker": "579",
          "pct": 6172.9
        },
        {
          "ticker": "LGH",
          "pct": 46915.3
        },
        {
          "ticker": "URR",
          "pct": 185185.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": false,
          "currency": "SGD",
          "n_trades": 0,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": null,
          "last_trade_date": null,
          "period_days": 0,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": null,
            "mixed_qty_pct": null,
            "instit_qty_pct": null,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
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
            "avg": 0.0,
            "median": 0.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6,
              "mixed_pct": 0.4,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.00039984006397441024,
              "mixed_qty_pct": 0.9996001599360256,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.00038318644519600825,
              "mixed_notional_pct": 0.9996168135548039,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.75,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 600.23,
              "avg_run_notional": 750.2875,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.75,
              "na_confidence_pct": 0.25,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 1.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 1.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 1.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 1.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 46.0,
              "avg_run_notional": 46.0,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.8500000000000001,
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
          "n_trades": 70,
          "n_runs": 55,
          "n_trade_days": 12,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.3142857142857143,
            "mixed_pct": 0.11428571428571428,
            "instit_pct": 0.1,
            "ambiguous_pct": 0.4142857142857143,
            "unobservable_pct": 0.05714285714285714,
            "unclear_pct": 0.4714285714285715,
            "retail_qty_pct": 0.050837666088965915,
            "mixed_qty_pct": 0.05461898009558321,
            "instit_qty_pct": 0.10792500393886875,
            "ambiguous_qty_pct": 0.6231290373404759,
            "unobservable_qty_pct": 0.1634893125361063,
            "unclear_qty_pct": 0.7866183498765822,
            "retail_notional_pct": 0.048556550916400244,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.11753030926529708,
            "ambiguous_notional_pct": 0.6168956348327055,
            "unobservable_notional_pct": 0.16114716216643982,
            "unclear_notional_pct": 0.7780427969991452
          },
          "run_composition": {
            "retail_pct": 0.4,
            "mixed_pct": 0.12727272727272726,
            "instit_pct": 0.07272727272727272,
            "ambiguous_pct": 0.38181818181818183,
            "unobservable_pct": 0.01818181818181818,
            "unclear_pct": 0.4,
            "retail_notional_pct": 0.048556550916400244,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.11753030926529708,
            "unclear_notional_pct": 0.7780427969991452
          },
          "counts": {
            "trades": {
              "retail": 22,
              "mixed": 8,
              "institutional": 7,
              "ambiguous": 29,
              "unobservable": 4,
              "unclear": 33
            },
            "runs": {
              "retail": 22,
              "mixed": 7,
              "institutional": 4,
              "ambiguous": 21,
              "unobservable": 1,
              "unclear": 22
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4727272727272727,
            "na": 0.5272727272727272
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 26,
            "na": 29
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4142857142857143,
            "na": 0.5857142857142857
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 29,
            "na": 41
          },
          "observability": {
            "avg_feature_coverage": 0.8154545454545458,
            "observable_run_pct": 0.9818181818181818,
            "ambiguous_run_pct": 0.38181818181818183,
            "unobservable_run_pct": 0.01818181818181818
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.4,
          "dominance_gap": 0.018181818181818188,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44,
              "MULTI_FILL_SINGLE_PRICE": 19,
              "UNOBSERVABLE": 4,
              "WALK_BOOK": 3
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 68,
              "PERSISTENT_POSITIVE_IMPACT": 1,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 55
            },
            "participant_confidence": {
              "NA": 29,
              "LOW": 26
            }
          },
          "trade_size": {
            "avg": 902.6,
            "median": 278.5
          },
          "run_size": {
            "avg": 1148.7636363636364,
            "median": 267.0,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-12T03:31:57.222900",
              "price": 0.03,
              "size": 800.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1564,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-12T03:14:31.474000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1563,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-12T02:02:16.605200",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1562,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:22:44.848700",
              "price": 0.03,
              "size": 6000.0,
              "notional": 180.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1561,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:38:25.018700",
              "price": 0.03,
              "size": 100.0,
              "notional": 3.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T08:33:13.723400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T08:09:03.209400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1558,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T08:08:22.161800",
              "price": 0.03,
              "size": 2000.0,
              "notional": 60.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-10T08:44:08.824700",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:42:32.302400",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T05:00:02.481900",
              "price": 0.031,
              "size": 20000.0,
              "notional": 620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T03:30:32.799300",
              "price": 0.031,
              "size": 10000.0,
              "notional": 310.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1553,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T07:45:39.166400",
              "price": 0.029,
              "size": 2400.0,
              "notional": 69.60000000000001,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1552,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T07:43:29.199400",
              "price": 0.028,
              "size": 1600.0,
              "notional": 44.800000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 3500.0,
              "notional": 98.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 70000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-09T01:43:42.644500",
              "price": 0.03,
              "size": 5000.0,
              "notional": 150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1547,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-04T06:39:58.991500",
              "price": 0.03,
              "size": 8900.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1546,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-04T06:10:07.631100",
              "price": 0.03,
              "size": 41100.0,
              "notional": 1233.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1545,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-04T05:28:48.463000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 200000.0,
              "notional": 6000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 30000.0,
              "notional": 900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-04T02:45:34.980500",
              "price": 0.034,
              "size": 100.0,
              "notional": 3.4000000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1543,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 70000.0,
              "notional": 2240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3142857142857143,
              "mixed_pct": 0.11428571428571428,
              "instit_pct": 0.1,
              "ambiguous_pct": 0.4142857142857143,
              "unobservable_pct": 0.05714285714285714,
              "unclear_pct": 0.4714285714285715,
              "retail_qty_pct": 0.050837666088965915,
              "mixed_qty_pct": 0.05461898009558321,
              "instit_qty_pct": 0.10792500393886875,
              "ambiguous_qty_pct": 0.6231290373404759,
              "unobservable_qty_pct": 0.1634893125361063,
              "unclear_qty_pct": 0.7866183498765822,
              "retail_notional_pct": 0.048556550916400244,
              "mixed_notional_pct": 0.055870342819157356,
              "instit_notional_pct": 0.11753030926529708,
              "ambiguous_notional_pct": 0.6168956348327055,
              "unobservable_notional_pct": 0.16114716216643982,
              "unclear_notional_pct": 0.7780427969991452,
              "run_retail_pct": 0.4,
              "run_mixed_pct": 0.12727272727272726,
              "run_instit_pct": 0.07272727272727272,
              "run_unclear_pct": 0.4,
              "avg_trade_size": 902.6,
              "avg_run_notional": 1148.7636363636364,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4727272727272727,
              "na_confidence_pct": 0.5272727272727272,
              "avg_feature_coverage": 0.8154545454545458,
              "observable_run_pct": 0.9818181818181818,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3,
              "mixed_pct": 0.05,
              "instit_pct": 0.4166666666666667,
              "ambiguous_pct": 0.2,
              "unobservable_pct": 0.03333333333333333,
              "unclear_pct": 0.23333333333333334,
              "retail_qty_pct": 0.032648125755743655,
              "mixed_qty_pct": 0.044740024183796856,
              "instit_qty_pct": 0.49455864570737607,
              "ambiguous_qty_pct": 0.42724707779121324,
              "unobservable_qty_pct": 0.0008061265618702137,
              "unclear_qty_pct": 0.42805320435308347,
              "retail_notional_pct": 0.033623110092044585,
              "mixed_notional_pct": 0.04875332707775778,
              "instit_notional_pct": 0.5021997962678312,
              "ambiguous_notional_pct": 0.41455115028350903,
              "unobservable_notional_pct": 0.0008726162788574934,
              "unclear_notional_pct": 0.4154237665623665,
              "run_retail_pct": 0.391304347826087,
              "run_mixed_pct": 0.06521739130434782,
              "run_instit_pct": 0.2826086956521739,
              "run_unclear_pct": 0.2608695652173913,
              "avg_trade_size": 2282.4083333333333,
              "avg_run_notional": 2977.054347826087,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6739130434782609,
              "na_confidence_pct": 0.32608695652173914,
              "avg_feature_coverage": 0.8282608695652176,
              "observable_run_pct": 0.9782608695652174,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2127659574468085,
              "mixed_pct": 0.13829787234042554,
              "instit_pct": 0.23404255319148937,
              "ambiguous_pct": 0.4148936170212766,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4148936170212766,
              "retail_qty_pct": 0.03695450324976787,
              "mixed_qty_pct": 0.04726090993500464,
              "instit_qty_pct": 0.4624883936861653,
              "ambiguous_qty_pct": 0.4532961931290622,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4532961931290622,
              "retail_notional_pct": 0.03746781097490434,
              "mixed_notional_pct": 0.04856954329075741,
              "instit_notional_pct": 0.46644200405335345,
              "ambiguous_notional_pct": 0.4475206416809848,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4475206416809848,
              "run_retail_pct": 0.24358974358974358,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.1794871794871795,
              "run_unclear_pct": 0.41025641025641024,
              "avg_trade_size": 2482.840425531915,
              "avg_run_notional": 2992.141025641026,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4230769230769231,
              "na_confidence_pct": 0.5769230769230769,
              "avg_feature_coverage": 0.8211538461538463,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6451953537486801,
              "mixed_pct": 0.20802534318901794,
              "instit_pct": 0.1341077085533263,
              "ambiguous_pct": 0.012671594508975714,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.012671594508975714,
              "retail_qty_pct": 0.14119600799421153,
              "mixed_qty_pct": 0.39399187474743613,
              "instit_qty_pct": 0.41476294145334425,
              "ambiguous_qty_pct": 0.0500491758050081,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0500491758050081,
              "retail_notional_pct": 0.13960006296106986,
              "mixed_notional_pct": 0.41993523333016736,
              "instit_notional_pct": 0.39303716347626994,
              "ambiguous_notional_pct": 0.04742754023249282,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.04742754023249282,
              "run_retail_pct": 0.8388888888888889,
              "run_mixed_pct": 0.14583333333333334,
              "run_instit_pct": 0.009722222222222222,
              "run_unclear_pct": 0.005555555555555556,
              "avg_trade_size": 943.9130939809927,
              "avg_run_notional": 1241.5079166666667,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6305555555555555,
              "medium_confidence_pct": 0.03333333333333333,
              "low_confidence_pct": 0.18472222222222223,
              "na_confidence_pct": 0.15138888888888888,
              "avg_feature_coverage": 0.8527083333333331,
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
          "n_trades": 176,
          "n_runs": 125,
          "n_trade_days": 30,
          "first_trade_date": "2025-12-12",
          "last_trade_date": "2026-03-12",
          "period_days": 63,
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
            "retail_pct": 0.23863636363636365,
            "mixed_pct": 0.17045454545454544,
            "instit_pct": 0.16477272727272727,
            "ambiguous_pct": 0.4034090909090909,
            "unobservable_pct": 0.022727272727272728,
            "unclear_pct": 0.4261363636363636,
            "retail_qty_pct": 0.06571145514498218,
            "mixed_qty_pct": 0.1076757012524213,
            "instit_qty_pct": 0.22397196468970412,
            "ambiguous_qty_pct": 0.5566103298880658,
            "unobservable_qty_pct": 0.04603054902482663,
            "unclear_qty_pct": 0.6026408789128924,
            "retail_notional_pct": 0.06583827943965123,
            "mixed_notional_pct": 0.1121073092829525,
            "instit_notional_pct": 0.2299531582116319,
            "ambiguous_notional_pct": 0.5522679320561288,
            "unobservable_notional_pct": 0.03983332100963557,
            "unclear_notional_pct": 0.5921012530657643
          },
          "run_composition": {
            "retail_pct": 0.336,
            "mixed_pct": 0.152,
            "instit_pct": 0.112,
            "ambiguous_pct": 0.392,
            "unobservable_pct": 0.008,
            "unclear_pct": 0.4,
            "retail_notional_pct": 0.06583827943965123,
            "mixed_notional_pct": 0.1121073092829525,
            "instit_notional_pct": 0.22995315821163195,
            "unclear_notional_pct": 0.5921012530657643
          },
          "counts": {
            "trades": {
              "retail": 42,
              "mixed": 30,
              "institutional": 29,
              "ambiguous": 71,
              "unobservable": 4,
              "unclear": 75
            },
            "runs": {
              "retail": 42,
              "mixed": 19,
              "institutional": 14,
              "ambiguous": 49,
              "unobservable": 1,
              "unclear": 50
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.448,
            "na": 0.552
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 56,
            "na": 69
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.4034090909090909,
            "na": 0.5965909090909091
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 71,
            "na": 105
          },
          "observability": {
            "avg_feature_coverage": 0.8275999999999996,
            "observable_run_pct": 0.992,
            "ambiguous_run_pct": 0.392,
            "unobservable_run_pct": 0.008
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.392,
          "dominance_gap": 0.055999999999999994,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 97,
              "MULTI_FILL_SINGLE_PRICE": 72,
              "UNOBSERVABLE": 4,
              "WALK_BOOK": 3
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 174,
              "PERSISTENT_POSITIVE_IMPACT": 1,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 124,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 69,
              "LOW": 56
            }
          },
          "trade_size": {
            "avg": 1452.3017045454546,
            "median": 875.5
          },
          "run_size": {
            "avg": 2044.8408,
            "median": 969.6,
            "avg_length": 1.032
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-12T03:31:57.222900",
              "price": 0.03,
              "size": 800.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1564,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-12T03:14:31.474000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1563,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-12T02:02:16.605200",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1562,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:22:44.848700",
              "price": 0.03,
              "size": 6000.0,
              "notional": 180.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1561,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:38:25.018700",
              "price": 0.03,
              "size": 100.0,
              "notional": 3.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T08:33:13.723400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T08:09:03.209400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1558,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T08:08:22.161800",
              "price": 0.03,
              "size": 2000.0,
              "notional": 60.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-10T08:44:08.824700",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:42:32.302400",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T05:00:02.481900",
              "price": 0.031,
              "size": 20000.0,
              "notional": 620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T03:30:32.799300",
              "price": 0.031,
              "size": 10000.0,
              "notional": 310.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1553,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T07:45:39.166400",
              "price": 0.029,
              "size": 2400.0,
              "notional": 69.60000000000001,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1552,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T07:43:29.199400",
              "price": 0.028,
              "size": 1600.0,
              "notional": 44.800000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 3500.0,
              "notional": 98.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 70000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-09T01:43:42.644500",
              "price": 0.03,
              "size": 5000.0,
              "notional": 150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1547,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-04T06:39:58.991500",
              "price": 0.03,
              "size": 8900.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1546,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-04T06:10:07.631100",
              "price": 0.03,
              "size": 41100.0,
              "notional": 1233.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1545,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-04T05:28:48.463000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 200000.0,
              "notional": 6000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 30000.0,
              "notional": 900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-04T02:45:34.980500",
              "price": 0.034,
              "size": 100.0,
              "notional": 3.4000000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1543,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 70000.0,
              "notional": 2240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.23863636363636365,
              "mixed_pct": 0.17045454545454544,
              "instit_pct": 0.16477272727272727,
              "ambiguous_pct": 0.4034090909090909,
              "unobservable_pct": 0.022727272727272728,
              "unclear_pct": 0.4261363636363636,
              "retail_qty_pct": 0.06571145514498218,
              "mixed_qty_pct": 0.1076757012524213,
              "instit_qty_pct": 0.22397196468970412,
              "ambiguous_qty_pct": 0.5566103298880658,
              "unobservable_qty_pct": 0.04603054902482663,
              "unclear_qty_pct": 0.6026408789128924,
              "retail_notional_pct": 0.06583827943965123,
              "mixed_notional_pct": 0.1121073092829525,
              "instit_notional_pct": 0.2299531582116319,
              "ambiguous_notional_pct": 0.5522679320561288,
              "unobservable_notional_pct": 0.03983332100963557,
              "unclear_notional_pct": 0.5921012530657643,
              "run_retail_pct": 0.336,
              "run_mixed_pct": 0.152,
              "run_instit_pct": 0.112,
              "run_unclear_pct": 0.4,
              "avg_trade_size": 1452.3017045454546,
              "avg_run_notional": 2044.8408,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.448,
              "na_confidence_pct": 0.552,
              "avg_feature_coverage": 0.8275999999999996,
              "observable_run_pct": 0.992,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24050632911392406,
              "mixed_pct": 0.0379746835443038,
              "instit_pct": 0.4810126582278481,
              "ambiguous_pct": 0.21518987341772153,
              "unobservable_pct": 0.02531645569620253,
              "unclear_pct": 0.24050632911392406,
              "retail_qty_pct": 0.025600999063378083,
              "mixed_qty_pct": 0.034655010927255696,
              "instit_qty_pct": 0.5807055885107711,
              "ambiguous_qty_pct": 0.35841398688729315,
              "unobservable_qty_pct": 0.0006244146113019045,
              "unclear_qty_pct": 0.35903840149859506,
              "retail_notional_pct": 0.026878709498625898,
              "mixed_notional_pct": 0.03854703124639154,
              "instit_notional_pct": 0.5807198448072792,
              "ambiguous_notional_pct": 0.3531644765709799,
              "unobservable_notional_pct": 0.0006899378767234013,
              "unclear_notional_pct": 0.35385441444770327,
              "run_retail_pct": 0.30158730158730157,
              "run_mixed_pct": 0.047619047619047616,
              "run_instit_pct": 0.3968253968253968,
              "run_unclear_pct": 0.25396825396825395,
              "avg_trade_size": 2192.4556962025317,
              "avg_run_notional": 2749.2698412698414,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6984126984126984,
              "na_confidence_pct": 0.30158730158730157,
              "avg_feature_coverage": 0.8269841269841273,
              "observable_run_pct": 0.9841269841269842,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23502824858757063,
              "mixed_pct": 0.11299435028248588,
              "instit_pct": 0.24745762711864408,
              "ambiguous_pct": 0.4033898305084746,
              "unobservable_pct": 0.0011299435028248588,
              "unclear_pct": 0.40451977401129946,
              "retail_qty_pct": 0.07537352434825381,
              "mixed_qty_pct": 0.08820862026561731,
              "instit_qty_pct": 0.36356369896704377,
              "ambiguous_qty_pct": 0.4722008730939498,
              "unobservable_qty_pct": 0.000653283325135268,
              "unclear_qty_pct": 0.47285415641908507,
              "retail_notional_pct": 0.07553936751601005,
              "mixed_notional_pct": 0.08706758287981586,
              "instit_notional_pct": 0.36397933508353647,
              "ambiguous_notional_pct": 0.4727800695090338,
              "unobservable_notional_pct": 0.0006336450116038721,
              "unclear_notional_pct": 0.47341371452063763,
              "run_retail_pct": 0.34285714285714286,
              "run_mixed_pct": 0.11964285714285715,
              "run_instit_pct": 0.14107142857142857,
              "run_unclear_pct": 0.3964285714285714,
              "avg_trade_size": 3562.0293785310732,
              "avg_run_notional": 5629.278571428571,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.01607142857142857,
              "medium_confidence_pct": 0.11964285714285715,
              "low_confidence_pct": 0.3482142857142857,
              "na_confidence_pct": 0.5160714285714286,
              "avg_feature_coverage": 0.8250892857142857,
              "observable_run_pct": 0.9982142857142857,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6794582392776524,
              "mixed_pct": 0.20225733634311513,
              "instit_pct": 0.09661399548532731,
              "ambiguous_pct": 0.02167042889390519,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.02167042889390519,
              "retail_qty_pct": 0.16336857908534178,
              "mixed_qty_pct": 0.4547059374931591,
              "instit_qty_pct": 0.33452623673372855,
              "ambiguous_qty_pct": 0.04739924668777058,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.04739924668777058,
              "retail_notional_pct": 0.16049226096285374,
              "mixed_notional_pct": 0.47304570064812473,
              "instit_notional_pct": 0.31986228519232085,
              "ambiguous_notional_pct": 0.04659975319670067,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.04659975319670067,
              "run_retail_pct": 0.82847533632287,
              "run_mixed_pct": 0.14966367713004483,
              "run_instit_pct": 0.011210762331838564,
              "run_unclear_pct": 0.010650224215246636,
              "avg_trade_size": 844.1300677200903,
              "avg_run_notional": 1048.0650784753363,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5336322869955157,
              "medium_confidence_pct": 0.09753363228699552,
              "low_confidence_pct": 0.2085201793721973,
              "na_confidence_pct": 0.16031390134529147,
              "avg_feature_coverage": 0.8515134529147979,
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
          "n_trades": 1336,
          "n_runs": 810,
          "n_trade_days": 87,
          "first_trade_date": "2025-09-12",
          "last_trade_date": "2026-03-12",
          "period_days": 126,
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
            "retail_pct": 0.24550898203592814,
            "mixed_pct": 0.12949101796407186,
            "instit_pct": 0.23053892215568864,
            "ambiguous_pct": 0.3847305389221557,
            "unobservable_pct": 0.009730538922155689,
            "unclear_pct": 0.3944610778443114,
            "retail_qty_pct": 0.08232237595378147,
            "mixed_qty_pct": 0.11957229510632533,
            "instit_qty_pct": 0.30484188859657557,
            "ambiguous_qty_pct": 0.4778751103458523,
            "unobservable_qty_pct": 0.015388329997465323,
            "unclear_qty_pct": 0.4932634403433176,
            "retail_notional_pct": 0.08218746008975382,
            "mixed_notional_pct": 0.11953594557908466,
            "instit_notional_pct": 0.30957156795609814,
            "ambiguous_notional_pct": 0.4760954002145327,
            "unobservable_notional_pct": 0.012609626160530643,
            "unclear_notional_pct": 0.48870502637506336
          },
          "run_composition": {
            "retail_pct": 0.3728395061728395,
            "mixed_pct": 0.1345679012345679,
            "instit_pct": 0.11851851851851852,
            "ambiguous_pct": 0.3691358024691358,
            "unobservable_pct": 0.0049382716049382715,
            "unclear_pct": 0.37407407407407406,
            "retail_notional_pct": 0.08218746008975382,
            "mixed_notional_pct": 0.11953594557908466,
            "instit_notional_pct": 0.30957156795609814,
            "unclear_notional_pct": 0.48870502637506336
          },
          "counts": {
            "trades": {
              "retail": 328,
              "mixed": 173,
              "institutional": 308,
              "ambiguous": 514,
              "unobservable": 13,
              "unclear": 527
            },
            "runs": {
              "retail": 302,
              "mixed": 109,
              "institutional": 96,
              "ambiguous": 299,
              "unobservable": 4,
              "unclear": 303
            }
          },
          "confidence": {
            "high": 0.024691358024691357,
            "medium": 0.08765432098765433,
            "low": 0.3790123456790123,
            "na": 0.508641975308642
          },
          "confidence_counts": {
            "high": 20,
            "medium": 71,
            "low": 307,
            "na": 412
          },
          "trade_confidence": {
            "high": 0.014970059880239521,
            "medium": 0.1092814371257485,
            "low": 0.35179640718562877,
            "na": 0.5239520958083832
          },
          "trade_confidence_counts": {
            "high": 20,
            "medium": 146,
            "low": 470,
            "na": 700
          },
          "observability": {
            "avg_feature_coverage": 0.8377777777777776,
            "observable_run_pct": 0.9950617283950617,
            "ambiguous_run_pct": 0.3691358024691358,
            "unobservable_run_pct": 0.0049382716049382715
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.3728395061728395,
          "dominance_gap": 0.003703703703703709,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 698,
              "SINGLE_FILL": 601,
              "WALK_BOOK": 25,
              "UNOBSERVABLE": 12
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1322,
              "UNOBSERVABLE": 12,
              "PERSISTENT_POSITIVE_IMPACT": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 801,
              "ADAPTIVE": 9
            },
            "participant_confidence": {
              "NA": 412,
              "LOW": 307,
              "MEDIUM": 71,
              "HIGH": 20
            }
          },
          "trade_size": {
            "avg": 2902.2832335329344,
            "median": 2050.0
          },
          "run_size": {
            "avg": 4786.975802469136,
            "median": 3288.5,
            "avg_length": 1.1012345679012345
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-12T03:31:57.222900",
              "price": 0.03,
              "size": 800.0,
              "notional": 24.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1564,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-12T03:14:31.474000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1563,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-12T02:02:16.605200",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1562,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:22:44.848700",
              "price": 0.03,
              "size": 6000.0,
              "notional": 180.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1561,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:38:25.018700",
              "price": 0.03,
              "size": 100.0,
              "notional": 3.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T08:33:13.723400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T08:09:03.209400",
              "price": 0.03,
              "size": 200.0,
              "notional": 6.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1558,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T08:08:22.161800",
              "price": 0.03,
              "size": 2000.0,
              "notional": 60.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-10T08:44:08.824700",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:42:32.302400",
              "price": 0.031,
              "size": 5000.0,
              "notional": 155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T05:00:02.481900",
              "price": 0.031,
              "size": 20000.0,
              "notional": 620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T03:30:32.799300",
              "price": 0.031,
              "size": 10000.0,
              "notional": 310.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1553,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T07:45:39.166400",
              "price": 0.029,
              "size": 2400.0,
              "notional": 69.60000000000001,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1552,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T07:43:29.199400",
              "price": 0.028,
              "size": 1600.0,
              "notional": 44.800000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 3500.0,
              "notional": 98.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-09T02:26:46.144500",
              "price": 0.028,
              "size": 70000.0,
              "notional": 1960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1549,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-09T01:43:42.644500",
              "price": 0.03,
              "size": 5000.0,
              "notional": 150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1547,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-04T06:39:58.991500",
              "price": 0.03,
              "size": 8900.0,
              "notional": 267.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1546,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-04T06:10:07.631100",
              "price": 0.03,
              "size": 41100.0,
              "notional": 1233.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1545,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-04T05:28:48.463000",
              "price": 0.03,
              "size": 100000.0,
              "notional": 3000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 200000.0,
              "notional": 6000.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-04T05:28:48.462900",
              "price": 0.03,
              "size": 30000.0,
              "notional": 900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1544,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-04T02:45:34.980500",
              "price": 0.034,
              "size": 100.0,
              "notional": 3.4000000000000004,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1543,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 70000.0,
              "notional": 2240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 1542,
              "d1": "UNOBSERVABLE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.24550898203592814,
              "mixed_pct": 0.12949101796407186,
              "instit_pct": 0.23053892215568864,
              "ambiguous_pct": 0.3847305389221557,
              "unobservable_pct": 0.009730538922155689,
              "unclear_pct": 0.3944610778443114,
              "retail_qty_pct": 0.08232237595378147,
              "mixed_qty_pct": 0.11957229510632533,
              "instit_qty_pct": 0.30484188859657557,
              "ambiguous_qty_pct": 0.4778751103458523,
              "unobservable_qty_pct": 0.015388329997465323,
              "unclear_qty_pct": 0.4932634403433176,
              "retail_notional_pct": 0.08218746008975382,
              "mixed_notional_pct": 0.11953594557908466,
              "instit_notional_pct": 0.30957156795609814,
              "ambiguous_notional_pct": 0.4760954002145327,
              "unobservable_notional_pct": 0.012609626160530643,
              "unclear_notional_pct": 0.48870502637506336,
              "run_retail_pct": 0.3728395061728395,
              "run_mixed_pct": 0.1345679012345679,
              "run_instit_pct": 0.11851851851851852,
              "run_unclear_pct": 0.37407407407407406,
              "avg_trade_size": 2902.2832335329344,
              "avg_run_notional": 4786.975802469136,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.024691358024691357,
              "medium_confidence_pct": 0.08765432098765433,
              "low_confidence_pct": 0.3790123456790123,
              "na_confidence_pct": 0.508641975308642,
              "avg_feature_coverage": 0.8377777777777776,
              "observable_run_pct": 0.9950617283950617,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21641791044776118,
              "mixed_pct": 0.08955223880597014,
              "instit_pct": 0.4701492537313433,
              "ambiguous_pct": 0.208955223880597,
              "unobservable_pct": 0.014925373134328358,
              "unclear_pct": 0.22388059701492535,
              "retail_qty_pct": 0.029844195742813256,
              "mixed_qty_pct": 0.05595786701777485,
              "instit_qty_pct": 0.5635286372613562,
              "ambiguous_qty_pct": 0.35023041474654376,
              "unobservable_qty_pct": 0.00043888523151195964,
              "unclear_qty_pct": 0.35066929997805574,
              "retail_notional_pct": 0.03104542121399669,
              "mixed_notional_pct": 0.058318167055781266,
              "instit_notional_pct": 0.5635380219088879,
              "ambiguous_notional_pct": 0.3466102093048432,
              "unobservable_notional_pct": 0.00048818051649090127,
              "unclear_notional_pct": 0.3470983898213341,
              "run_retail_pct": 0.2761904761904762,
              "run_mixed_pct": 0.08571428571428572,
              "run_instit_pct": 0.38095238095238093,
              "run_unclear_pct": 0.2571428571428572,
              "avg_trade_size": 1826.7649253731342,
              "avg_run_notional": 2331.3,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6571428571428571,
              "na_confidence_pct": 0.34285714285714286,
              "avg_feature_coverage": 0.8233333333333333,
              "observable_run_pct": 0.9904761904761905,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23502824858757063,
              "mixed_pct": 0.11299435028248588,
              "instit_pct": 0.24745762711864408,
              "ambiguous_pct": 0.4033898305084746,
              "unobservable_pct": 0.0011299435028248588,
              "unclear_pct": 0.40451977401129946,
              "retail_qty_pct": 0.07537352434825381,
              "mixed_qty_pct": 0.08820862026561731,
              "instit_qty_pct": 0.36356369896704377,
              "ambiguous_qty_pct": 0.4722008730939498,
              "unobservable_qty_pct": 0.000653283325135268,
              "unclear_qty_pct": 0.47285415641908507,
              "retail_notional_pct": 0.07553936751601005,
              "mixed_notional_pct": 0.08706758287981586,
              "instit_notional_pct": 0.36397933508353647,
              "ambiguous_notional_pct": 0.4727800695090338,
              "unobservable_notional_pct": 0.0006336450116038721,
              "unclear_notional_pct": 0.47341371452063763,
              "run_retail_pct": 0.34285714285714286,
              "run_mixed_pct": 0.11964285714285715,
              "run_instit_pct": 0.14107142857142857,
              "run_unclear_pct": 0.3964285714285714,
              "avg_trade_size": 3562.0293785310732,
              "avg_run_notional": 5629.278571428571,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.01607142857142857,
              "medium_confidence_pct": 0.11964285714285715,
              "low_confidence_pct": 0.3482142857142857,
              "na_confidence_pct": 0.5160714285714286,
              "avg_feature_coverage": 0.8250892857142857,
              "observable_run_pct": 0.9982142857142857,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6764705882352942,
              "mixed_pct": 0.20361990950226244,
              "instit_pct": 0.09646236116824353,
              "ambiguous_pct": 0.023447141094199916,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.023447141094199916,
              "retail_qty_pct": 0.13164258551995597,
              "mixed_qty_pct": 0.4541676106648384,
              "instit_qty_pct": 0.3698633270029399,
              "ambiguous_qty_pct": 0.04432647681226572,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.04432647681226572,
              "retail_notional_pct": 0.1299394448946511,
              "mixed_notional_pct": 0.4698063226669043,
              "instit_notional_pct": 0.3544445025854593,
              "ambiguous_notional_pct": 0.045809729852985204,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.045809729852985204,
              "run_retail_pct": 0.8276923076923077,
              "run_mixed_pct": 0.1494871794871795,
              "run_instit_pct": 0.011025641025641025,
              "run_unclear_pct": 0.011794871794871795,
              "avg_trade_size": 931.94757301522,
              "avg_run_notional": 1161.8279743589744,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5748717948717949,
              "medium_confidence_pct": 0.09743589743589744,
              "low_confidence_pct": 0.16641025641025642,
              "na_confidence_pct": 0.16128205128205128,
              "avg_feature_coverage": 0.8514999999999998,
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
      "n_trades": 1336,
      "n_runs": 810,
      "n_trade_days": 87,
      "first_trade_date": "2025-09-12",
      "last_trade_date": "2026-03-12",
      "period_days": 126,
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
        "retail_pct": 0.24550898203592814,
        "mixed_pct": 0.12949101796407186,
        "instit_pct": 0.23053892215568864,
        "ambiguous_pct": 0.3847305389221557,
        "unobservable_pct": 0.009730538922155689,
        "unclear_pct": 0.3944610778443114,
        "retail_qty_pct": 0.08232237595378147,
        "mixed_qty_pct": 0.11957229510632533,
        "instit_qty_pct": 0.30484188859657557,
        "ambiguous_qty_pct": 0.4778751103458523,
        "unobservable_qty_pct": 0.015388329997465323,
        "unclear_qty_pct": 0.4932634403433176,
        "retail_notional_pct": 0.08218746008975382,
        "mixed_notional_pct": 0.11953594557908466,
        "instit_notional_pct": 0.30957156795609814,
        "ambiguous_notional_pct": 0.4760954002145327,
        "unobservable_notional_pct": 0.012609626160530643,
        "unclear_notional_pct": 0.48870502637506336
      },
      "run_composition": {
        "retail_pct": 0.3728395061728395,
        "mixed_pct": 0.1345679012345679,
        "instit_pct": 0.11851851851851852,
        "ambiguous_pct": 0.3691358024691358,
        "unobservable_pct": 0.0049382716049382715,
        "unclear_pct": 0.37407407407407406
      },
      "trade_size": {
        "avg": 2902.2832335329344,
        "median": 2050.0
      },
      "run_size": {
        "avg": 4786.975802469136,
        "median": 3288.5,
        "avg_length": 1.1012345679012345
      },
      "confidence": {
        "high": 0.024691358024691357,
        "medium": 0.08765432098765433,
        "low": 0.3790123456790123,
        "na": 0.508641975308642
      },
      "confidence_counts": {
        "high": 20,
        "medium": 71,
        "low": 307,
        "na": 412
      },
      "trade_confidence": {
        "high": 0.014970059880239521,
        "medium": 0.1092814371257485,
        "low": 0.35179640718562877,
        "na": 0.5239520958083832
      },
      "trade_confidence_counts": {
        "high": 20,
        "medium": 146,
        "low": 470,
        "na": 700
      },
      "counts": {
        "trades": {
          "retail": 328,
          "mixed": 173,
          "institutional": 308,
          "ambiguous": 514,
          "unobservable": 13,
          "unclear": 527
        },
        "runs": {
          "retail": 302,
          "mixed": 109,
          "institutional": 96,
          "ambiguous": 299,
          "unobservable": 4,
          "unclear": 303
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8377777777777776,
        "observable_run_pct": 0.9950617283950617,
        "ambiguous_run_pct": 0.3691358024691358,
        "unobservable_run_pct": 0.0049382716049382715
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Mixed, leaning retail-like",
      "dominant_share": 0.3728395061728395,
      "dominance_gap": 0.003703703703703709,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-10",
            "n_trades": 492,
            "n_runs": 277,
            "retail_pct": 0.23170731707317074,
            "mixed_pct": 0.13008130081300814,
            "instit_pct": 0.23373983739837398,
            "ambiguous_pct": 0.40447154471544716,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.40447154471544716,
            "avg_trade_size": 2654.60162601626,
            "avg_run_notional": 4715.03249097473,
            "retail_qty_pct": 0.0917111593277457,
            "mixed_qty_pct": 0.1417257023265455,
            "instit_qty_pct": 0.30726514728547405,
            "ambiguous_qty_pct": 0.4592979910602348,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4592979910602348,
            "retail_notional_pct": 0.09033401119700106,
            "mixed_notional_pct": 0.1422319273787502,
            "instit_notional_pct": 0.31348601599921594,
            "ambiguous_notional_pct": 0.45394804542503275,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45394804542503275,
            "run_retail_pct": 0.38267148014440433,
            "run_mixed_pct": 0.1444043321299639,
            "run_instit_pct": 0.11552346570397112,
            "run_ambiguous_pct": 0.3574007220216607,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.3574007220216607,
            "avg_feature_coverage": 0.8332129963898918,
            "high_confidence_pct": 0.01444043321299639,
            "medium_confidence_pct": 0.1371841155234657,
            "low_confidence_pct": 0.34657039711191334,
            "na_confidence_pct": 0.5018050541516246,
            "total_quantity": null
          },
          {
            "month": "2025-11",
            "n_trades": 312,
            "n_runs": 184,
            "retail_pct": 0.20833333333333334,
            "mixed_pct": 0.11858974358974358,
            "instit_pct": 0.27564102564102566,
            "ambiguous_pct": 0.3685897435897436,
            "unobservable_pct": 0.028846153846153848,
            "unclear_pct": 0.39743589743589747,
            "avg_trade_size": 3263.8528846153845,
            "avg_run_notional": 5534.359239130435,
            "retail_qty_pct": 0.07621656461488882,
            "mixed_qty_pct": 0.12656703190460844,
            "instit_qty_pct": 0.3443764099258782,
            "ambiguous_qty_pct": 0.40864083145343216,
            "unobservable_qty_pct": 0.044199162101192395,
            "unclear_qty_pct": 0.45283999355462456,
            "retail_notional_pct": 0.07659806263656657,
            "mixed_notional_pct": 0.12772874123030425,
            "instit_notional_pct": 0.34771817286495105,
            "ambiguous_notional_pct": 0.4099399394356658,
            "unobservable_notional_pct": 0.03801508383251233,
            "unclear_notional_pct": 0.44795502326817815,
            "run_retail_pct": 0.3423913043478261,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.14130434782608695,
            "run_ambiguous_pct": 0.375,
            "run_unobservable_pct": 0.016304347826086956,
            "run_unclear_pct": 0.391304347826087,
            "avg_feature_coverage": 0.8472826086956521,
            "high_confidence_pct": 0.010869565217391304,
            "medium_confidence_pct": 0.059782608695652176,
            "low_confidence_pct": 0.41304347826086957,
            "na_confidence_pct": 0.5163043478260869,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 35,
            "n_runs": 27,
            "retail_pct": 0.17142857142857143,
            "mixed_pct": 0.05714285714285714,
            "instit_pct": 0.4,
            "ambiguous_pct": 0.37142857142857144,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.37142857142857144,
            "avg_trade_size": 1553.7371428571428,
            "avg_run_notional": 2014.1037037037038,
            "retail_qty_pct": 0.05126825001682029,
            "mixed_qty_pct": 0.010159456368162552,
            "instit_qty_pct": 0.49888986072798225,
            "ambiguous_qty_pct": 0.4396824328870349,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4396824328870349,
            "retail_notional_pct": 0.050269580440155344,
            "mixed_notional_pct": 0.010272007767447335,
            "instit_notional_pct": 0.4991467576791809,
            "ambiguous_notional_pct": 0.44031165411321643,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.44031165411321643,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.07407407407407407,
            "run_instit_pct": 0.25925925925925924,
            "run_ambiguous_pct": 0.4444444444444444,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8166666666666669,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.48148148148148145,
            "na_confidence_pct": 0.5185185185185185,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 88,
            "n_runs": 56,
            "retail_pct": 0.19318181818181818,
            "mixed_pct": 0.22727272727272727,
            "instit_pct": 0.1590909090909091,
            "ambiguous_pct": 0.42045454545454547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.42045454545454547,
            "avg_trade_size": 1908.8136363636365,
            "avg_run_notional": 2999.5642857142857,
            "retail_qty_pct": 0.08266882483159173,
            "mixed_qty_pct": 0.14760419890028803,
            "instit_qty_pct": 0.21123039204017996,
            "ambiguous_qty_pct": 0.5584965842279404,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5584965842279404,
            "retail_notional_pct": 0.08185176894739474,
            "mixed_notional_pct": 0.14860253513010221,
            "instit_notional_pct": 0.21221296426385736,
            "ambiguous_notional_pct": 0.5573327316586456,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5573327316586456,
            "run_retail_pct": 0.30357142857142855,
            "run_mixed_pct": 0.17857142857142858,
            "run_instit_pct": 0.10714285714285714,
            "run_ambiguous_pct": 0.4107142857142857,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.4107142857142857,
            "avg_feature_coverage": 0.8392857142857143,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4107142857142857,
            "na_confidence_pct": 0.5892857142857143,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 36,
            "n_runs": 30,
            "retail_pct": 0.25,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.19444444444444445,
            "ambiguous_pct": 0.3888888888888889,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3888888888888889,
            "avg_trade_size": 799.8027777777777,
            "avg_run_notional": 959.7633333333332,
            "retail_qty_pct": 0.04399195575666164,
            "mixed_qty_pct": 0.08924082453494218,
            "instit_qty_pct": 0.2582956259426848,
            "ambiguous_qty_pct": 0.6084715937657114,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6084715937657114,
            "retail_notional_pct": 0.04196867977869544,
            "mixed_notional_pct": 0.08557665257754515,
            "instit_notional_pct": 0.2579038582428307,
            "ambiguous_notional_pct": 0.6145508094009287,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6145508094009287,
            "run_retail_pct": 0.3,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.13333333333333333,
            "run_ambiguous_pct": 0.4,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.4,
            "avg_feature_coverage": 0.8350000000000003,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.43333333333333335,
            "na_confidence_pct": 0.5666666666666667,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 35,
            "n_runs": 26,
            "retail_pct": 0.37142857142857144,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.42857142857142855,
            "unobservable_pct": 0.11428571428571428,
            "unclear_pct": 0.5428571428571428,
            "avg_trade_size": 987.1171428571428,
            "avg_run_notional": 1328.8115384615385,
            "retail_qty_pct": 0.05555056179775281,
            "mixed_qty_pct": 0.03325842696629214,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.631370786516854,
            "unobservable_qty_pct": 0.2798202247191011,
            "unclear_qty_pct": 0.9111910112359551,
            "retail_notional_pct": 0.05382195194664984,
            "mixed_notional_pct": 0.03548572900596542,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.6159928912764732,
            "unobservable_notional_pct": 0.29469942777091157,
            "unclear_notional_pct": 0.9106923190473848,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.11538461538461539,
            "run_instit_pct": 0.0,
            "run_ambiguous_pct": 0.34615384615384615,
            "run_unobservable_pct": 0.038461538461538464,
            "run_unclear_pct": 0.3846153846153846,
            "avg_feature_coverage": 0.7942307692307693,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "1A0",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.24550898203592814,
          "mixed_pct": 0.12949101796407186,
          "instit_pct": 0.23053892215568864,
          "ambiguous_pct": 0.3847305389221557,
          "unobservable_pct": 0.009730538922155689,
          "unclear_pct": 0.3944610778443114,
          "retail_qty_pct": 0.08232237595378147,
          "mixed_qty_pct": 0.11957229510632533,
          "instit_qty_pct": 0.30484188859657557,
          "ambiguous_qty_pct": 0.4778751103458523,
          "unobservable_qty_pct": 0.015388329997465323,
          "unclear_qty_pct": 0.4932634403433176,
          "retail_notional_pct": 0.08218746008975382,
          "mixed_notional_pct": 0.11953594557908466,
          "instit_notional_pct": 0.30957156795609814,
          "ambiguous_notional_pct": 0.4760954002145327,
          "unobservable_notional_pct": 0.012609626160530643,
          "unclear_notional_pct": 0.48870502637506336,
          "run_retail_pct": 0.3728395061728395,
          "run_mixed_pct": 0.1345679012345679,
          "run_instit_pct": 0.11851851851851852,
          "run_unclear_pct": 0.37407407407407406,
          "avg_trade_size": 2902.2832335329344,
          "avg_run_notional": 4786.975802469136,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.024691358024691357,
          "medium_confidence_pct": 0.08765432098765433,
          "low_confidence_pct": 0.3790123456790123,
          "na_confidence_pct": 0.508641975308642,
          "avg_feature_coverage": 0.8377777777777776,
          "observable_run_pct": 0.9950617283950617,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "URR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21641791044776118,
          "mixed_pct": 0.08955223880597014,
          "instit_pct": 0.4701492537313433,
          "ambiguous_pct": 0.208955223880597,
          "unobservable_pct": 0.014925373134328358,
          "unclear_pct": 0.22388059701492535,
          "retail_qty_pct": 0.029844195742813256,
          "mixed_qty_pct": 0.05595786701777485,
          "instit_qty_pct": 0.5635286372613562,
          "ambiguous_qty_pct": 0.35023041474654376,
          "unobservable_qty_pct": 0.00043888523151195964,
          "unclear_qty_pct": 0.35066929997805574,
          "retail_notional_pct": 0.03104542121399669,
          "mixed_notional_pct": 0.058318167055781266,
          "instit_notional_pct": 0.5635380219088879,
          "ambiguous_notional_pct": 0.3466102093048432,
          "unobservable_notional_pct": 0.00048818051649090127,
          "unclear_notional_pct": 0.3470983898213341,
          "run_retail_pct": 0.2761904761904762,
          "run_mixed_pct": 0.08571428571428572,
          "run_instit_pct": 0.38095238095238093,
          "run_unclear_pct": 0.2571428571428572,
          "avg_trade_size": 1826.7649253731342,
          "avg_run_notional": 2331.3,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institution-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.6571428571428571,
          "na_confidence_pct": 0.34285714285714286,
          "avg_feature_coverage": 0.8233333333333333,
          "observable_run_pct": 0.9904761904761905,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LGH",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23502824858757063,
          "mixed_pct": 0.11299435028248588,
          "instit_pct": 0.24745762711864408,
          "ambiguous_pct": 0.4033898305084746,
          "unobservable_pct": 0.0011299435028248588,
          "unclear_pct": 0.40451977401129946,
          "retail_qty_pct": 0.07537352434825381,
          "mixed_qty_pct": 0.08820862026561731,
          "instit_qty_pct": 0.36356369896704377,
          "ambiguous_qty_pct": 0.4722008730939498,
          "unobservable_qty_pct": 0.000653283325135268,
          "unclear_qty_pct": 0.47285415641908507,
          "retail_notional_pct": 0.07553936751601005,
          "mixed_notional_pct": 0.08706758287981586,
          "instit_notional_pct": 0.36397933508353647,
          "ambiguous_notional_pct": 0.4727800695090338,
          "unobservable_notional_pct": 0.0006336450116038721,
          "unclear_notional_pct": 0.47341371452063763,
          "run_retail_pct": 0.34285714285714286,
          "run_mixed_pct": 0.11964285714285715,
          "run_instit_pct": 0.14107142857142857,
          "run_unclear_pct": 0.3964285714285714,
          "avg_trade_size": 3562.0293785310732,
          "avg_run_notional": 5629.278571428571,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.01607142857142857,
          "medium_confidence_pct": 0.11964285714285715,
          "low_confidence_pct": 0.3482142857142857,
          "na_confidence_pct": 0.5160714285714286,
          "avg_feature_coverage": 0.8250892857142857,
          "observable_run_pct": 0.9982142857142857,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "579",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6764705882352942,
          "mixed_pct": 0.20361990950226244,
          "instit_pct": 0.09646236116824353,
          "ambiguous_pct": 0.023447141094199916,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.023447141094199916,
          "retail_qty_pct": 0.13164258551995597,
          "mixed_qty_pct": 0.4541676106648384,
          "instit_qty_pct": 0.3698633270029399,
          "ambiguous_qty_pct": 0.04432647681226572,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.04432647681226572,
          "retail_notional_pct": 0.1299394448946511,
          "mixed_notional_pct": 0.4698063226669043,
          "instit_notional_pct": 0.3544445025854593,
          "ambiguous_notional_pct": 0.045809729852985204,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.045809729852985204,
          "run_retail_pct": 0.8276923076923077,
          "run_mixed_pct": 0.1494871794871795,
          "run_instit_pct": 0.011025641025641025,
          "run_unclear_pct": 0.011794871794871795,
          "avg_trade_size": 931.94757301522,
          "avg_run_notional": 1161.8279743589744,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5748717948717949,
          "medium_confidence_pct": 0.09743589743589744,
          "low_confidence_pct": 0.16641025641025642,
          "na_confidence_pct": 0.16128205128205128,
          "avg_feature_coverage": 0.8514999999999998,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6,
            "mixed_pct": 0.4,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.00039984006397441024,
            "mixed_qty_pct": 0.9996001599360256,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.00038318644519600825,
            "mixed_notional_pct": 0.9996168135548039,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.75,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 600.23,
            "avg_run_notional": 750.2875,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.75,
            "na_confidence_pct": 0.25,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 1.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 1.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 46.0,
            "avg_run_notional": 46.0,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "1A0",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.3142857142857143,
            "mixed_pct": 0.11428571428571428,
            "instit_pct": 0.1,
            "ambiguous_pct": 0.4142857142857143,
            "unobservable_pct": 0.05714285714285714,
            "unclear_pct": 0.4714285714285715,
            "retail_qty_pct": 0.050837666088965915,
            "mixed_qty_pct": 0.05461898009558321,
            "instit_qty_pct": 0.10792500393886875,
            "ambiguous_qty_pct": 0.6231290373404759,
            "unobservable_qty_pct": 0.1634893125361063,
            "unclear_qty_pct": 0.7866183498765822,
            "retail_notional_pct": 0.048556550916400244,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.11753030926529708,
            "ambiguous_notional_pct": 0.6168956348327055,
            "unobservable_notional_pct": 0.16114716216643982,
            "unclear_notional_pct": 0.7780427969991452,
            "run_retail_pct": 0.4,
            "run_mixed_pct": 0.12727272727272726,
            "run_instit_pct": 0.07272727272727272,
            "run_unclear_pct": 0.4,
            "avg_trade_size": 902.6,
            "avg_run_notional": 1148.7636363636364,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4727272727272727,
            "na_confidence_pct": 0.5272727272727272,
            "avg_feature_coverage": 0.8154545454545458,
            "observable_run_pct": 0.9818181818181818,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3,
            "mixed_pct": 0.05,
            "instit_pct": 0.4166666666666667,
            "ambiguous_pct": 0.2,
            "unobservable_pct": 0.03333333333333333,
            "unclear_pct": 0.23333333333333334,
            "retail_qty_pct": 0.032648125755743655,
            "mixed_qty_pct": 0.044740024183796856,
            "instit_qty_pct": 0.49455864570737607,
            "ambiguous_qty_pct": 0.42724707779121324,
            "unobservable_qty_pct": 0.0008061265618702137,
            "unclear_qty_pct": 0.42805320435308347,
            "retail_notional_pct": 0.033623110092044585,
            "mixed_notional_pct": 0.04875332707775778,
            "instit_notional_pct": 0.5021997962678312,
            "ambiguous_notional_pct": 0.41455115028350903,
            "unobservable_notional_pct": 0.0008726162788574934,
            "unclear_notional_pct": 0.4154237665623665,
            "run_retail_pct": 0.391304347826087,
            "run_mixed_pct": 0.06521739130434782,
            "run_instit_pct": 0.2826086956521739,
            "run_unclear_pct": 0.2608695652173913,
            "avg_trade_size": 2282.4083333333333,
            "avg_run_notional": 2977.054347826087,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6739130434782609,
            "na_confidence_pct": 0.32608695652173914,
            "avg_feature_coverage": 0.8282608695652176,
            "observable_run_pct": 0.9782608695652174,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2127659574468085,
            "mixed_pct": 0.13829787234042554,
            "instit_pct": 0.23404255319148937,
            "ambiguous_pct": 0.4148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4148936170212766,
            "retail_qty_pct": 0.03695450324976787,
            "mixed_qty_pct": 0.04726090993500464,
            "instit_qty_pct": 0.4624883936861653,
            "ambiguous_qty_pct": 0.4532961931290622,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4532961931290622,
            "retail_notional_pct": 0.03746781097490434,
            "mixed_notional_pct": 0.04856954329075741,
            "instit_notional_pct": 0.46644200405335345,
            "ambiguous_notional_pct": 0.4475206416809848,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4475206416809848,
            "run_retail_pct": 0.24358974358974358,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.1794871794871795,
            "run_unclear_pct": 0.41025641025641024,
            "avg_trade_size": 2482.840425531915,
            "avg_run_notional": 2992.141025641026,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4230769230769231,
            "na_confidence_pct": 0.5769230769230769,
            "avg_feature_coverage": 0.8211538461538463,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6451953537486801,
            "mixed_pct": 0.20802534318901794,
            "instit_pct": 0.1341077085533263,
            "ambiguous_pct": 0.012671594508975714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.012671594508975714,
            "retail_qty_pct": 0.14119600799421153,
            "mixed_qty_pct": 0.39399187474743613,
            "instit_qty_pct": 0.41476294145334425,
            "ambiguous_qty_pct": 0.0500491758050081,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0500491758050081,
            "retail_notional_pct": 0.13960006296106986,
            "mixed_notional_pct": 0.41993523333016736,
            "instit_notional_pct": 0.39303716347626994,
            "ambiguous_notional_pct": 0.04742754023249282,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.04742754023249282,
            "run_retail_pct": 0.8388888888888889,
            "run_mixed_pct": 0.14583333333333334,
            "run_instit_pct": 0.009722222222222222,
            "run_unclear_pct": 0.005555555555555556,
            "avg_trade_size": 943.9130939809927,
            "avg_run_notional": 1241.5079166666667,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6305555555555555,
            "medium_confidence_pct": 0.03333333333333333,
            "low_confidence_pct": 0.18472222222222223,
            "na_confidence_pct": 0.15138888888888888,
            "avg_feature_coverage": 0.8527083333333331,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "1A0",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.23863636363636365,
            "mixed_pct": 0.17045454545454544,
            "instit_pct": 0.16477272727272727,
            "ambiguous_pct": 0.4034090909090909,
            "unobservable_pct": 0.022727272727272728,
            "unclear_pct": 0.4261363636363636,
            "retail_qty_pct": 0.06571145514498218,
            "mixed_qty_pct": 0.1076757012524213,
            "instit_qty_pct": 0.22397196468970412,
            "ambiguous_qty_pct": 0.5566103298880658,
            "unobservable_qty_pct": 0.04603054902482663,
            "unclear_qty_pct": 0.6026408789128924,
            "retail_notional_pct": 0.06583827943965123,
            "mixed_notional_pct": 0.1121073092829525,
            "instit_notional_pct": 0.2299531582116319,
            "ambiguous_notional_pct": 0.5522679320561288,
            "unobservable_notional_pct": 0.03983332100963557,
            "unclear_notional_pct": 0.5921012530657643,
            "run_retail_pct": 0.336,
            "run_mixed_pct": 0.152,
            "run_instit_pct": 0.112,
            "run_unclear_pct": 0.4,
            "avg_trade_size": 1452.3017045454546,
            "avg_run_notional": 2044.8408,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.448,
            "na_confidence_pct": 0.552,
            "avg_feature_coverage": 0.8275999999999996,
            "observable_run_pct": 0.992,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24050632911392406,
            "mixed_pct": 0.0379746835443038,
            "instit_pct": 0.4810126582278481,
            "ambiguous_pct": 0.21518987341772153,
            "unobservable_pct": 0.02531645569620253,
            "unclear_pct": 0.24050632911392406,
            "retail_qty_pct": 0.025600999063378083,
            "mixed_qty_pct": 0.034655010927255696,
            "instit_qty_pct": 0.5807055885107711,
            "ambiguous_qty_pct": 0.35841398688729315,
            "unobservable_qty_pct": 0.0006244146113019045,
            "unclear_qty_pct": 0.35903840149859506,
            "retail_notional_pct": 0.026878709498625898,
            "mixed_notional_pct": 0.03854703124639154,
            "instit_notional_pct": 0.5807198448072792,
            "ambiguous_notional_pct": 0.3531644765709799,
            "unobservable_notional_pct": 0.0006899378767234013,
            "unclear_notional_pct": 0.35385441444770327,
            "run_retail_pct": 0.30158730158730157,
            "run_mixed_pct": 0.047619047619047616,
            "run_instit_pct": 0.3968253968253968,
            "run_unclear_pct": 0.25396825396825395,
            "avg_trade_size": 2192.4556962025317,
            "avg_run_notional": 2749.2698412698414,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6984126984126984,
            "na_confidence_pct": 0.30158730158730157,
            "avg_feature_coverage": 0.8269841269841273,
            "observable_run_pct": 0.9841269841269842,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23502824858757063,
            "mixed_pct": 0.11299435028248588,
            "instit_pct": 0.24745762711864408,
            "ambiguous_pct": 0.4033898305084746,
            "unobservable_pct": 0.0011299435028248588,
            "unclear_pct": 0.40451977401129946,
            "retail_qty_pct": 0.07537352434825381,
            "mixed_qty_pct": 0.08820862026561731,
            "instit_qty_pct": 0.36356369896704377,
            "ambiguous_qty_pct": 0.4722008730939498,
            "unobservable_qty_pct": 0.000653283325135268,
            "unclear_qty_pct": 0.47285415641908507,
            "retail_notional_pct": 0.07553936751601005,
            "mixed_notional_pct": 0.08706758287981586,
            "instit_notional_pct": 0.36397933508353647,
            "ambiguous_notional_pct": 0.4727800695090338,
            "unobservable_notional_pct": 0.0006336450116038721,
            "unclear_notional_pct": 0.47341371452063763,
            "run_retail_pct": 0.34285714285714286,
            "run_mixed_pct": 0.11964285714285715,
            "run_instit_pct": 0.14107142857142857,
            "run_unclear_pct": 0.3964285714285714,
            "avg_trade_size": 3562.0293785310732,
            "avg_run_notional": 5629.278571428571,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.01607142857142857,
            "medium_confidence_pct": 0.11964285714285715,
            "low_confidence_pct": 0.3482142857142857,
            "na_confidence_pct": 0.5160714285714286,
            "avg_feature_coverage": 0.8250892857142857,
            "observable_run_pct": 0.9982142857142857,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6794582392776524,
            "mixed_pct": 0.20225733634311513,
            "instit_pct": 0.09661399548532731,
            "ambiguous_pct": 0.02167042889390519,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.02167042889390519,
            "retail_qty_pct": 0.16336857908534178,
            "mixed_qty_pct": 0.4547059374931591,
            "instit_qty_pct": 0.33452623673372855,
            "ambiguous_qty_pct": 0.04739924668777058,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.04739924668777058,
            "retail_notional_pct": 0.16049226096285374,
            "mixed_notional_pct": 0.47304570064812473,
            "instit_notional_pct": 0.31986228519232085,
            "ambiguous_notional_pct": 0.04659975319670067,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.04659975319670067,
            "run_retail_pct": 0.82847533632287,
            "run_mixed_pct": 0.14966367713004483,
            "run_instit_pct": 0.011210762331838564,
            "run_unclear_pct": 0.010650224215246636,
            "avg_trade_size": 844.1300677200903,
            "avg_run_notional": 1048.0650784753363,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5336322869955157,
            "medium_confidence_pct": 0.09753363228699552,
            "low_confidence_pct": 0.2085201793721973,
            "na_confidence_pct": 0.16031390134529147,
            "avg_feature_coverage": 0.8515134529147979,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "1A0",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.24550898203592814,
            "mixed_pct": 0.12949101796407186,
            "instit_pct": 0.23053892215568864,
            "ambiguous_pct": 0.3847305389221557,
            "unobservable_pct": 0.009730538922155689,
            "unclear_pct": 0.3944610778443114,
            "retail_qty_pct": 0.08232237595378147,
            "mixed_qty_pct": 0.11957229510632533,
            "instit_qty_pct": 0.30484188859657557,
            "ambiguous_qty_pct": 0.4778751103458523,
            "unobservable_qty_pct": 0.015388329997465323,
            "unclear_qty_pct": 0.4932634403433176,
            "retail_notional_pct": 0.08218746008975382,
            "mixed_notional_pct": 0.11953594557908466,
            "instit_notional_pct": 0.30957156795609814,
            "ambiguous_notional_pct": 0.4760954002145327,
            "unobservable_notional_pct": 0.012609626160530643,
            "unclear_notional_pct": 0.48870502637506336,
            "run_retail_pct": 0.3728395061728395,
            "run_mixed_pct": 0.1345679012345679,
            "run_instit_pct": 0.11851851851851852,
            "run_unclear_pct": 0.37407407407407406,
            "avg_trade_size": 2902.2832335329344,
            "avg_run_notional": 4786.975802469136,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.024691358024691357,
            "medium_confidence_pct": 0.08765432098765433,
            "low_confidence_pct": 0.3790123456790123,
            "na_confidence_pct": 0.508641975308642,
            "avg_feature_coverage": 0.8377777777777776,
            "observable_run_pct": 0.9950617283950617,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21641791044776118,
            "mixed_pct": 0.08955223880597014,
            "instit_pct": 0.4701492537313433,
            "ambiguous_pct": 0.208955223880597,
            "unobservable_pct": 0.014925373134328358,
            "unclear_pct": 0.22388059701492535,
            "retail_qty_pct": 0.029844195742813256,
            "mixed_qty_pct": 0.05595786701777485,
            "instit_qty_pct": 0.5635286372613562,
            "ambiguous_qty_pct": 0.35023041474654376,
            "unobservable_qty_pct": 0.00043888523151195964,
            "unclear_qty_pct": 0.35066929997805574,
            "retail_notional_pct": 0.03104542121399669,
            "mixed_notional_pct": 0.058318167055781266,
            "instit_notional_pct": 0.5635380219088879,
            "ambiguous_notional_pct": 0.3466102093048432,
            "unobservable_notional_pct": 0.00048818051649090127,
            "unclear_notional_pct": 0.3470983898213341,
            "run_retail_pct": 0.2761904761904762,
            "run_mixed_pct": 0.08571428571428572,
            "run_instit_pct": 0.38095238095238093,
            "run_unclear_pct": 0.2571428571428572,
            "avg_trade_size": 1826.7649253731342,
            "avg_run_notional": 2331.3,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6571428571428571,
            "na_confidence_pct": 0.34285714285714286,
            "avg_feature_coverage": 0.8233333333333333,
            "observable_run_pct": 0.9904761904761905,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23502824858757063,
            "mixed_pct": 0.11299435028248588,
            "instit_pct": 0.24745762711864408,
            "ambiguous_pct": 0.4033898305084746,
            "unobservable_pct": 0.0011299435028248588,
            "unclear_pct": 0.40451977401129946,
            "retail_qty_pct": 0.07537352434825381,
            "mixed_qty_pct": 0.08820862026561731,
            "instit_qty_pct": 0.36356369896704377,
            "ambiguous_qty_pct": 0.4722008730939498,
            "unobservable_qty_pct": 0.000653283325135268,
            "unclear_qty_pct": 0.47285415641908507,
            "retail_notional_pct": 0.07553936751601005,
            "mixed_notional_pct": 0.08706758287981586,
            "instit_notional_pct": 0.36397933508353647,
            "ambiguous_notional_pct": 0.4727800695090338,
            "unobservable_notional_pct": 0.0006336450116038721,
            "unclear_notional_pct": 0.47341371452063763,
            "run_retail_pct": 0.34285714285714286,
            "run_mixed_pct": 0.11964285714285715,
            "run_instit_pct": 0.14107142857142857,
            "run_unclear_pct": 0.3964285714285714,
            "avg_trade_size": 3562.0293785310732,
            "avg_run_notional": 5629.278571428571,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.01607142857142857,
            "medium_confidence_pct": 0.11964285714285715,
            "low_confidence_pct": 0.3482142857142857,
            "na_confidence_pct": 0.5160714285714286,
            "avg_feature_coverage": 0.8250892857142857,
            "observable_run_pct": 0.9982142857142857,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6764705882352942,
            "mixed_pct": 0.20361990950226244,
            "instit_pct": 0.09646236116824353,
            "ambiguous_pct": 0.023447141094199916,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.023447141094199916,
            "retail_qty_pct": 0.13164258551995597,
            "mixed_qty_pct": 0.4541676106648384,
            "instit_qty_pct": 0.3698633270029399,
            "ambiguous_qty_pct": 0.04432647681226572,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.04432647681226572,
            "retail_notional_pct": 0.1299394448946511,
            "mixed_notional_pct": 0.4698063226669043,
            "instit_notional_pct": 0.3544445025854593,
            "ambiguous_notional_pct": 0.045809729852985204,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.045809729852985204,
            "run_retail_pct": 0.8276923076923077,
            "run_mixed_pct": 0.1494871794871795,
            "run_instit_pct": 0.011025641025641025,
            "run_unclear_pct": 0.011794871794871795,
            "avg_trade_size": 931.94757301522,
            "avg_run_notional": 1161.8279743589744,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5748717948717949,
            "medium_confidence_pct": 0.09743589743589744,
            "low_confidence_pct": 0.16641025641025642,
            "na_confidence_pct": 0.16128205128205128,
            "avg_feature_coverage": 0.8514999999999998,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-12T03:31:57.222900",
          "price": 0.03,
          "size": 800.0,
          "notional": 24.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1564,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-12T03:14:31.474000",
          "price": 0.03,
          "size": 100000.0,
          "notional": 3000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1563,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-12T02:02:16.605200",
          "price": 0.03,
          "size": 200.0,
          "notional": 6.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1562,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-12T01:22:44.848700",
          "price": 0.03,
          "size": 6000.0,
          "notional": 180.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1561,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-11T08:38:25.018700",
          "price": 0.03,
          "size": 100.0,
          "notional": 3.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1560,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-11T08:33:13.723400",
          "price": 0.03,
          "size": 200.0,
          "notional": 6.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1559,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-11T08:09:03.209400",
          "price": 0.03,
          "size": 200.0,
          "notional": 6.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1558,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-11T08:08:22.161800",
          "price": 0.03,
          "size": 2000.0,
          "notional": 60.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1557,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-10T08:44:08.824700",
          "price": 0.031,
          "size": 5000.0,
          "notional": 155.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1556,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-10T07:42:32.302400",
          "price": 0.031,
          "size": 5000.0,
          "notional": 155.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1555,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-10T05:00:02.481900",
          "price": 0.031,
          "size": 20000.0,
          "notional": 620.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1554,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-10T03:30:32.799300",
          "price": 0.031,
          "size": 10000.0,
          "notional": 310.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1553,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-03-09T07:45:39.166400",
          "price": 0.029,
          "size": 2400.0,
          "notional": 69.60000000000001,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1552,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-03-09T07:43:29.199400",
          "price": 0.028,
          "size": 1600.0,
          "notional": 44.800000000000004,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1551,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-09T07:43:08.959200",
          "price": 0.028,
          "size": 39500.0,
          "notional": 1106.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1550,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-09T07:43:08.959200",
          "price": 0.028,
          "size": 26500.0,
          "notional": 742.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1550,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-09T02:26:46.144500",
          "price": 0.028,
          "size": 3500.0,
          "notional": 98.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1549,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-09T02:26:46.144500",
          "price": 0.028,
          "size": 70000.0,
          "notional": 1960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1549,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-09T02:18:16.458900",
          "price": 0.029,
          "size": 5000.0,
          "notional": 145.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1548,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-09T02:18:16.458900",
          "price": 0.029,
          "size": 10000.0,
          "notional": 290.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1548,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-09T01:43:42.644500",
          "price": 0.03,
          "size": 5000.0,
          "notional": 150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1547,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-03-04T06:39:58.991500",
          "price": 0.03,
          "size": 8900.0,
          "notional": 267.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1546,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-03-04T06:10:07.631100",
          "price": 0.03,
          "size": 41100.0,
          "notional": 1233.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1545,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-03-04T05:28:48.463000",
          "price": 0.03,
          "size": 100000.0,
          "notional": 3000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1544,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-04T05:28:48.462900",
          "price": 0.03,
          "size": 200000.0,
          "notional": 6000.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1544,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-04T05:28:48.462900",
          "price": 0.03,
          "size": 30000.0,
          "notional": 900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1544,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-04T02:45:34.980500",
          "price": 0.034,
          "size": 100.0,
          "notional": 3.4000000000000004,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1543,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-04T02:04:14.666900",
          "price": 0.032,
          "size": 70000.0,
          "notional": 2240.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 1542,
          "d1": "UNOBSERVABLE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-04T02:04:14.666900",
          "price": 0.032,
          "size": 31300.0,
          "notional": 1001.6,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 1542,
          "d1": "UNOBSERVABLE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-04T02:04:14.666900",
          "price": 0.033,
          "size": 200000.0,
          "notional": 6600.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 1542,
          "d1": "UNOBSERVABLE",
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
      "total_trades": 1335,
      "price_moving_trades": 270,
      "pct_price_moving": 20.224719101123593,
      "all_movers": {
        "count": 270,
        "avg_size": 2600.2196296296297,
        "median_size": 1488.6,
        "retail_count": 89,
        "mixed_count": 41,
        "institutional_count": 46,
        "ambiguous_count": 83,
        "unobservable_count": 11,
        "retail_pct": 32.96296296296296,
        "mixed_pct": 15.185185185185185,
        "instit_pct": 17.037037037037038,
        "unclear_pct": 34.81481481481482
      },
      "positive_movers": {
        "count": 131,
        "avg_size": 2302.2015267175575,
        "median_size": 380.0,
        "retail_count": 49,
        "mixed_count": 14,
        "institutional_count": 24,
        "ambiguous_count": 42,
        "unobservable_count": 2,
        "retail_pct": 37.404580152671755,
        "mixed_pct": 10.687022900763358,
        "instit_pct": 18.3206106870229,
        "unclear_pct": 33.587786259541986
      },
      "negative_movers": {
        "count": 139,
        "avg_size": 2881.0856115107918,
        "median_size": 2116.0,
        "retail_count": 40,
        "mixed_count": 27,
        "institutional_count": 22,
        "ambiguous_count": 41,
        "unobservable_count": 9,
        "retail_pct": 28.776978417266186,
        "mixed_pct": 19.424460431654676,
        "instit_pct": 15.827338129496402,
        "unclear_pct": 35.97122302158273
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Katrina",
      "mapping": {
        "ticker_to_security": "$ Katrina",
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
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 2.7021549685874483e-05,
            "max_short_ratio": 0.0035398230088495575,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.00016090104585679806
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.0
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.00016090104585679806,
            "change_pct": null
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": -100.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.03,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 107000,
            "close": 0.03,
            "return": 0.0
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2500,
            "close": 0.03,
            "return": -0.032258064516129115
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 40000,
            "close": 0.031,
            "return": 0.06896551724137923
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 163500,
            "close": 0.029,
            "return": -0.033333333333333215
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.03,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.03,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 691400,
            "close": 0.03,
            "return": -0.18918918918918914
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 108100,
            "close": 0.037,
            "return": 0.08823529411764697
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.034,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 120100,
            "close": 0.034,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 25000,
            "close": 0.034,
            "return": -0.08108108108108092
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 260500,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 207200,
            "close": 0.037,
            "return": -0.02631578947368418
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 78800,
            "close": 0.038,
            "return": -0.02564102564102566
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 141900,
            "close": 0.039,
            "return": -0.025000000000000022
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4000,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.04,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11000,
            "close": 0.04,
            "return": 0.08108108108108114
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6000,
            "close": 0.037,
            "return": -0.05128205128205132
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 78000,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 334000,
            "close": 0.039,
            "return": 0.026315789473684292
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100000,
            "close": 0.038,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100000,
            "close": 0.038,
            "return": -0.050000000000000044
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 549900,
            "close": 0.04,
            "return": 0.025641025641025772
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 679100,
            "close": 0.039,
            "return": -0.04878048780487809
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1746200,
            "close": 0.041,
            "return": 0.05128205128205132
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 680900,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 211200,
            "close": 0.039,
            "return": 0.08333333333333348
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1900,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100000,
            "close": 0.036,
            "return": 0.02857142857142847
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 120700,
            "close": 0.035,
            "return": -0.027777777777777568
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100,
            "close": 0.036,
            "return": -0.027027027027027084
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 220700,
            "close": 0.037,
            "return": 0.0277777777777779
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 60000,
            "close": 0.036,
            "return": 0.02857142857142847
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 70000,
            "close": 0.035,
            "return": 0.0
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 345300,
            "close": 0.035,
            "return": -0.027777777777777568
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2000,
            "close": 0.036,
            "return": -0.027027027027027084
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.037,
            "return": 0.0
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 105000,
            "close": 0.037,
            "return": 0.05714285714285694
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 330300,
            "close": 0.035,
            "return": -0.027777777777777568
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 302000,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 50300,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 45900,
            "close": 0.036,
            "return": -0.07692307692307698
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4544700,
            "close": 0.039,
            "return": 0.05405405405405417
          },
          {
            "date": "2025-11-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 363800,
            "close": 0.037,
            "return": -0.02631578947368418
          },
          {
            "date": "2025-11-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 129200,
            "close": 0.038,
            "return": 0.05555555555555558
          },
          {
            "date": "2025-11-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100100,
            "close": 0.036,
            "return": 0.0
          },
          {
            "date": "2025-11-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 170000,
            "close": 0.036,
            "return": -0.07692307692307698
          },
          {
            "date": "2025-11-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1101800,
            "close": 0.039,
            "return": 0.0
          },
          {
            "date": "2025-11-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 959100,
            "close": 0.039,
            "return": -0.04878048780487809
          },
          {
            "date": "2025-11-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2160400,
            "close": 0.041,
            "return": -0.023809523809523836
          },
          {
            "date": "2025-11-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1520600,
            "close": 0.042,
            "return": 0.024390243902439046
          },
          {
            "date": "2025-11-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1633200,
            "close": 0.041,
            "return": 0.0
          },
          {
            "date": "2025-11-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 984600,
            "close": 0.041,
            "return": -0.023809523809523836
          },
          {
            "date": "2025-11-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6267000,
            "close": 0.042,
            "return": 0.0
          },
          {
            "date": "2025-11-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 343600,
            "close": 0.042,
            "return": 0.050000000000000044
          },
          {
            "date": "2025-11-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 609900,
            "close": 0.04,
            "return": -0.04761904761904767
          },
          {
            "date": "2025-11-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2230400,
            "close": 0.042,
            "return": -0.02325581395348819
          },
          {
            "date": "2025-11-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1577200,
            "close": 0.043,
            "return": 0.023809523809523725
          },
          {
            "date": "2025-10-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500000,
            "close": 0.042,
            "return": -0.02325581395348819
          },
          {
            "date": "2025-10-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 691500,
            "close": 0.043,
            "return": 0.023809523809523725
          },
          {
            "date": "2025-10-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2280700,
            "close": 0.042,
            "return": -0.06666666666666654
          },
          {
            "date": "2025-10-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4610700,
            "close": 0.045,
            "return": 0.0714285714285714
          },
          {
            "date": "2025-10-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1487200,
            "close": 0.042,
            "return": 0.0
          },
          {
            "date": "2025-10-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1808300,
            "close": 0.042,
            "return": 0.0
          },
          {
            "date": "2025-10-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1267300,
            "close": 0.042,
            "return": 0.024390243902439046
          },
          {
            "date": "2025-10-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 230200,
            "close": 0.041,
            "return": -0.023809523809523836
          },
          {
            "date": "2025-10-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 140100,
            "close": 0.042,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "1A0",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "LGH",
          "avg_short_ratio": 0.001275507361940732,
          "max_short_ratio": 0.08035696380226612,
          "is_target": false
        },
        {
          "ticker": "579",
          "avg_short_ratio": 0.003149968949355182,
          "max_short_ratio": 0.32876352039977647,
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
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0,
          "continuous": 0.9747886713332027,
          "closing": 0.025211328666797293,
          "auctions": 0.025211328666797293,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0005323932515558114,
          "continuous": 0.9704158422964856,
          "closing": 0.029051764451958704,
          "auctions": 0.029584157703514514,
          "other": 0.0
        },
        "6M": {
          "opening": 0.01207521008955528,
          "continuous": 0.9458904743979766,
          "closing": 0.019667660565199006,
          "auctions": 0.0541095256020233,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.8327212507642588,
        "1M": 0.6392784958714518,
        "3M": 0.7272428362743085,
        "6M": 0.611832447872706
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0189
        },
        {
          "time": "09:00",
          "avg_share": 0.1498
        },
        {
          "time": "09:30",
          "avg_share": 0.087
        },
        {
          "time": "10:00",
          "avg_share": 0.0339
        },
        {
          "time": "10:30",
          "avg_share": 0.0214
        },
        {
          "time": "11:00",
          "avg_share": 0.0483
        },
        {
          "time": "11:30",
          "avg_share": 0.0201
        },
        {
          "time": "12:30",
          "avg_share": 0.0928
        },
        {
          "time": "13:00",
          "avg_share": 0.0995
        },
        {
          "time": "13:30",
          "avg_share": 0.0505
        },
        {
          "time": "14:00",
          "avg_share": 0.0481
        },
        {
          "time": "14:30",
          "avg_share": 0.0344
        },
        {
          "time": "15:00",
          "avg_share": 0.0778
        },
        {
          "time": "15:30",
          "avg_share": 0.0408
        },
        {
          "time": "16:00",
          "avg_share": 0.0948
        },
        {
          "time": "16:30",
          "avg_share": 0.067
        },
        {
          "time": "17:00",
          "avg_share": 0.015
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1A0",
          "auctions_pct": 4.843296276870382,
          "hhi": 0.492881301697022,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "579",
          "auctions_pct": 18.281105808297877,
          "hhi": 0.4494768738101879,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LGH",
          "auctions_pct": 16.38975356774238,
          "hhi": 0.5635927730700094,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "URR",
          "auctions_pct": 10.135971700708359,
          "hhi": 0.7902111083895094,
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
