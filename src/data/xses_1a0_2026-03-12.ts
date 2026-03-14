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
      "marketCap": 22774500.0,
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
    "asof_date": "2026-03-12",
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
          "score_pca": 42.473118279569896,
          "score_pca_percentile": 42.473118279569896,
          "rank_pca": 322,
          "total": 558,
          "adv_notional_sgd": 3210.0,
          "adv_volume_shares": 107000.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.0004461770737281469,
          "votes": 4.0,
          "trades": 4.0,
          "spread_pct": 0.06696428571428571,
          "spread_ticks": 2.0,
          "amihud": 0.0,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.525261174907994,
          "loadings": {
            "log_adv": 0.5487294860767431,
            "log_trades": 0.5050222210527616,
            "log_turnover": 0.5141220699613235,
            "neg_spread": 0.36515611124188607,
            "neg_amihud": 0.04964299685884721,
            "neg_vol": -0.20910186947311038
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
          "peer_median_adv": 112.5,
          "peer_median_score_pca": 34.40860215053764,
          "peer_median_trades": 1.0,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.09122807017543855,
          "peer_median_spread_ticks": 2.6666666666666665,
          "peer_median_amihud": 0.00010631822711419115,
          "peer_median_turnover_ratio": 4.939735230191662e-06,
          "target_vs_peer": {
            "score_pca_delta": 8.06,
            "adv_delta_pct": 2753.3,
            "trades_delta_pct": 300.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 26.6,
            "spread_ticks_delta_pct": -25.0,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 8932.41
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 42.473118279569896,
            "rank_pca": 322,
            "adv": 3210.0,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.06696428571428571,
            "spread_ticks": 2.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0004461770737281469,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 31398.4,
            "trades": 31.0,
            "volatility": 2.7426497078697025,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 1.0616252208180457e-05,
            "turnover_ratio": 0.0003122443257183713,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 34.40860215053764,
            "rank_pca": 367,
            "adv": 112.5,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.06083650190114074,
            "spread_ticks": 2.6666666666666665,
            "amihud": 0.00020202020202020183,
            "turnover_ratio": 4.939735230191662e-06,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 21.14695340501792,
            "rank_pca": 441,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.09122807017543855,
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
              "mean": 0.2414122632082402,
              "median": 0.11464877407380544,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8672897785875878,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3304453.124298606,
              "median": 8809.75,
              "min": 0.0,
              "max": 228390176.0,
              "p5": 0.0,
              "p95": 15603030.099999953,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11379733351039764,
              "median": 0.033865967088003844,
              "min": 0.0002854442826014152,
              "max": 1.4382566585956416,
              "p5": 0.003772547160556751,
              "p95": 0.5154373303661484,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010869846269635946,
              "median": 0.0002461946108804993,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.013512085676905186,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0024628379534643555,
              "median": 1.0676256421824967e-08,
              "min": 0.0,
              "max": 0.8333333333333331,
              "p5": 0.0,
              "p95": 3.8805038805038656e-05,
              "count": 393
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 548.2150537634409,
              "median": 6.0,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3170.8999999999987,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6158648525989318,
              "median": 0.0,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 4.174754960034119,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 13901.844444444443,
              "median": 130.70000000000002,
              "min": 0.0,
              "max": 205590.0,
              "p5": 0.0,
              "p95": 44642.49999999973,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.21890328809155674,
              "median": 0.0989102580942532,
              "min": 0.015369836695485127,
              "max": 0.9367088607594939,
              "p5": 0.015999954848051997,
              "p95": 0.7071729957805903,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00021096426335488435,
              "median": 3.472418134228197e-05,
              "min": 0.0,
              "max": 0.0012538966747014752,
              "p5": 0.0,
              "p95": 0.0007941803213891221,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005610124051031397,
              "median": 6.2359612921411e-08,
              "min": 0.0,
              "max": 0.0044563279857397515,
              "p5": 0.0,
              "p95": 0.0030328577574814204,
              "count": 11
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10.5,
              "median": 1.5,
              "min": 0.0,
              "max": 160.0,
              "p5": 0.0,
              "p95": 29.09999999999978,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 10503.633333333333,
              "median": 112.5,
              "min": 0.0,
              "max": 31398.4,
              "p5": 11.25,
              "p95": 28269.809999999998,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10.666666666666666,
              "median": 1.0,
              "min": 0.0,
              "max": 31.0,
              "p5": 0.1,
              "p95": 27.999999999999996,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9142165692899008,
              "median": 0.0,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.0,
              "p95": 2.468384737082732,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14592628593028834,
              "median": 0.09122807017543855,
              "min": 0.06083650190114074,
              "max": 0.2857142857142857,
              "p5": 0.06387565872857053,
              "p95": 0.266265664160401,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.111111111111111,
              "median": 2.6666666666666665,
              "min": 1.0,
              "max": 8.666666666666666,
              "p5": 1.1666666666666667,
              "p95": 8.066666666666666,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00010631822711419115,
              "median": 0.00010631822711419115,
              "min": 1.0616252208180457e-05,
              "max": 0.00020202020202020183,
              "p5": 2.0186449698781525e-05,
              "p95": 0.00019245000452960075,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00010572802031618766,
              "median": 4.939735230191662e-06,
              "min": 0.0,
              "max": 0.0003122443257183713,
              "p5": 4.939735230191662e-07,
              "p95": 0.00028151386666955334,
              "count": 3
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.001743485121045607,
            "sector": 0.0,
            "peers": 0.022727272727272707,
            "vs_market": 0.001743485121045607,
            "vs_sector": 0.0,
            "vs_peers": -0.022727272727272707
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 33.51254480286738,
          "score_pca_percentile": 33.51254480286738,
          "rank_pca": 372,
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
          "variance_explained": 0.5348121513139358,
          "loadings": {
            "log_adv": 0.5380321275307328,
            "log_trades": 0.48816351407500047,
            "log_turnover": 0.49550959138800743,
            "neg_spread": 0.4152815832265003,
            "neg_amihud": 0.16538925175503283,
            "neg_vol": 0.16393797653378683
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
          "peer_median_score_pca": 29.39068100358423,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.7957965400380689,
          "peer_median_spread_pct": 0.13713268032056983,
          "peer_median_spread_ticks": 1.9333333333333333,
          "peer_median_amihud": 3.5118254453586887e-06,
          "peer_median_turnover_ratio": 8.792728709741157e-05,
          "target_vs_peer": {
            "score_pca_delta": 4.12,
            "adv_delta_pct": -59.4,
            "trades_delta_pct": 0.0,
            "volatility_delta_pct": -5.48,
            "spread_pct_delta_pct": 45.17,
            "spread_ticks_delta_pct": 45.47,
            "amihud_delta_pct": -122.01,
            "turnover_ratio_delta_pct": 18.56
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 33.51254480286738,
            "rank_pca": 372,
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
            "score_pca": 29.39068100358423,
            "rank_pca": 395,
            "adv": 16894.4,
            "trades": 29.0,
            "volatility": 3.464101615137754,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 2.551166189088356e-06,
            "turnover_ratio": 0.00020559054895062556,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 2091.5,
            "trades": 3.0,
            "volatility": 0.600397388897632,
            "spread_pct": 0.04104741684359516,
            "spread_ticks": 1.9333333333333333,
            "amihud": 1.0143028071467457e-05,
            "turnover_ratio": 8.792728709741157e-05,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 15.053763440860216,
            "rank_pca": 475,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7957965400380689,
            "spread_pct": 0.13713268032056983,
            "spread_ticks": 15.4,
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
              "mean": 0.627493133920931,
              "median": 0.4307721298992465,
              "min": 0.0,
              "max": 7.784600182411427,
              "p5": 0.070483863475354,
              "p95": 1.7340456068698364,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3774587.956380049,
              "median": 14171.25,
              "min": 0.0,
              "max": 369342000.0,
              "p5": 0.0,
              "p95": 15402791.549999967,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09799881375332058,
              "median": 0.027429934406678614,
              "min": 0.0002742695631217783,
              "max": 1.3868092691622103,
              "p5": 0.003768504163455663,
              "p95": 0.47917040907977393,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010589261474447062,
              "median": 0.0003281420996411105,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.01114930661718843,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.358462051476102e-05,
              "median": 1.1059626296268936e-07,
              "min": 0.0,
              "max": 0.0059715821812596145,
              "p5": 0.0,
              "p95": 5.3907365415301896e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 508.39426523297493,
              "median": 7.0,
              "min": 0.0,
              "max": 14972.0,
              "p5": 0.0,
              "p95": 2789.0999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0008652200924033,
              "median": 0.45423565008740613,
              "min": 0.0,
              "max": 6.77495387438173,
              "p5": 0.06380695223067487,
              "p95": 2.955301868195912,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 20437.155555555553,
              "median": 9.3,
              "min": 0.0,
              "max": 235812.5,
              "p5": 0.0,
              "p95": 129400.57499999982,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17184491355490927,
              "median": 0.09590397474204271,
              "min": 0.012996389891696766,
              "max": 0.6666666666666666,
              "p5": 0.013532054706561126,
              "p95": 0.6177105831533478,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002812419225491258,
              "median": 2.2409343337513093e-06,
              "min": 0.0,
              "max": 0.0022551154539546736,
              "p5": 0.0,
              "p95": 0.0015527742611128078,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.257284864115599e-05,
              "median": 7.112590382435755e-06,
              "min": 0.0,
              "max": 0.0004555293191656827,
              "p5": 0.0,
              "p95": 0.00040983096343473024,
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
              "mean": 6328.633333333334,
              "median": 2091.5,
              "min": 0.0,
              "max": 16894.4,
              "p5": 209.15,
              "p95": 15414.11,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10.666666666666666,
              "median": 3.0,
              "min": 0.0,
              "max": 29.0,
              "p5": 0.30000000000000004,
              "p95": 26.4,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.6200985146911515,
              "median": 0.7957965400380689,
              "min": 0.600397388897632,
              "max": 3.464101615137754,
              "p5": 0.6199373040116757,
              "p95": 3.197271107627785,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15463146095948355,
              "median": 0.13713268032056983,
              "min": 0.04104741684359516,
              "max": 0.2857142857142857,
              "p5": 0.05065594319129263,
              "p95": 0.2708561251749141,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.111111111111112,
              "median": 1.9333333333333333,
              "min": 1.0,
              "max": 15.4,
              "p5": 1.0933333333333333,
              "p95": 14.053333333333333,
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
              "mean": 9.783927868267905e-05,
              "median": 8.792728709741157e-05,
              "min": 0.0,
              "max": 0.00020559054895062556,
              "p5": 8.792728709741158e-06,
              "p95": 0.00019382422276530416,
              "count": 3
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.2499999999999999,
            "market": -0.02126660222957566,
            "sector": 0.0,
            "peers": -0.024002908331272943,
            "vs_market": -0.22873339777042423,
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
          "score_pca": 20.07168458781362,
          "score_pca_percentile": 20.07168458781362,
          "rank_pca": 447,
          "total": 558,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.06728704366499631,
          "spread_ticks": 2.4285714285714284,
          "amihud": 4.517446377911498e-06,
          "volatility": 0.5972601424017276
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.55633655005602,
          "loadings": {
            "log_adv": 0.5179479573779697,
            "log_trades": 0.4639469941949431,
            "log_turnover": 0.4725729758047793,
            "neg_spread": 0.4304540668879032,
            "neg_amihud": 0.18417481143552505,
            "neg_vol": 0.2719316415881647
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
          "peer_median_adv": 6463.25,
          "peer_median_score_pca": 26.881720430107524,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.605265262222319,
          "peer_median_spread_pct": 0.1736972704714641,
          "peer_median_spread_ticks": 1.3726851851851851,
          "peer_median_amihud": 1.7880670054583108e-06,
          "peer_median_turnover_ratio": 0.0001803790154151201,
          "target_vs_peer": {
            "score_pca_delta": -6.81,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 1.32,
            "spread_pct_delta_pct": 61.26,
            "spread_ticks_delta_pct": 76.92,
            "amihud_delta_pct": -152.64,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 20.07168458781362,
            "rank_pca": 447,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5972601424017276,
            "spread_pct": 0.06728704366499631,
            "spread_ticks": 2.4285714285714284,
            "amihud": 4.517446377911498e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 26.881720430107524,
            "rank_pca": 409,
            "adv": 15820.800000000001,
            "trades": 20.0,
            "volatility": 2.849284636372453,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0001803790154151201,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 45.340501792114694,
            "rank_pca": 306,
            "adv": 6463.25,
            "trades": 5.5,
            "volatility": 0.605265262222319,
            "spread_pct": 0.029761086939928214,
            "spread_ticks": 1.3726851851851851,
            "amihud": 1.7880670054583108e-06,
            "turnover_ratio": 0.0002805769610748864,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 15.053763440860216,
            "rank_pca": 475,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.46846021571153246,
            "spread_pct": 0.1736972704714641,
            "spread_ticks": 17.75,
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
              "mean": 0.653545441987865,
              "median": 0.4211053593563462,
              "min": 0.0,
              "max": 7.957548658045474,
              "p5": 0.14506677064607348,
              "p95": 1.9141355528269093,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2601909.817500717,
              "median": 14534.599999999999,
              "min": 0.0,
              "max": 253681920.0,
              "p5": 0.0,
              "p95": 10051597.899999985,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09346882371937447,
              "median": 0.026345502446368105,
              "min": 0.00027050510432176795,
              "max": 1.299773988083008,
              "p5": 0.00355888863782512,
              "p95": 0.49577167019027446,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003542578991425302,
              "median": 0.00028150186965878214,
              "min": 0.0,
              "max": 0.9129259771933294,
              "p5": 0.0,
              "p95": 0.009506372947779477,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0512092765426633e-05,
              "median": 1.1818892177939622e-07,
              "min": 0.0,
              "max": 0.0028758169934640513,
              "p5": 0.0,
              "p95": 3.923991701912421e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 376.6666666666667,
              "median": 8.0,
              "min": 0.0,
              "max": 10592.0,
              "p5": 0.0,
              "p95": 2021.549999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8887915722189448,
              "median": 0.6108908322093942,
              "min": 0.22114252656213765,
              "max": 4.693089558673984,
              "p5": 0.23707539283901002,
              "p95": 1.9294504965793515,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15663.505555555554,
              "median": 0.0,
              "min": 0.0,
              "max": 194348.0,
              "p5": 0.0,
              "p95": 85539.07499999982,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17349768365018414,
              "median": 0.09423378889869646,
              "min": 0.01297793750623935,
              "max": 0.6666666666666666,
              "p5": 0.015488910487858222,
              "p95": 0.6177105831533478,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00019352638581483596,
              "median": 0.0,
              "min": 0.0,
              "max": 0.0013954879977311314,
              "p5": 0.0,
              "p95": 0.0012086718050334042,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.125421111386919e-05,
              "median": 3.8123601592593883e-06,
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
              "max": 73.0,
              "p5": 0.0,
              "p95": 26.249999999999922,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7428.016666666667,
              "median": 6463.25,
              "min": 0.0,
              "max": 15820.800000000001,
              "p5": 646.325,
              "p95": 14885.045,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8.5,
              "median": 5.5,
              "min": 0.0,
              "max": 20.0,
              "p5": 0.55,
              "p95": 18.549999999999997,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.3076700381021016,
              "median": 0.605265262222319,
              "min": 0.46846021571153246,
              "max": 2.849284636372453,
              "p5": 0.48214072036261113,
              "p95": 2.6248826989574394,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16305754770855935,
              "median": 0.1736972704714641,
              "min": 0.029761086939928214,
              "max": 0.2857142857142857,
              "p5": 0.044154705293081804,
              "p95": 0.2745125841900035,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.707561728395061,
              "median": 1.3726851851851851,
              "min": 1.0,
              "max": 17.75,
              "p5": 1.0372685185185184,
              "p95": 16.112268518518515,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5668961215605368e-06,
              "median": 1.7880670054583108e-06,
              "min": 0.0,
              "max": 2.9126213592233e-06,
              "p5": 1.788067005458311e-07,
              "p95": 2.800165923846801e-06,
              "count": 3
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0001536519921633355,
              "median": 0.0001803790154151201,
              "min": 0.0,
              "max": 0.0002805769610748864,
              "p5": 1.803790154151201e-05,
              "p95": 0.00027055716650890973,
              "count": 3
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.14285714285714246,
            "market": 0.0757969498597666,
            "sector": 0.0,
            "peers": -0.03253932604266152,
            "vs_market": -0.21865409271690905,
            "vs_sector": -0.14285714285714246,
            "vs_peers": -0.11031781681448094
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 42.29390681003584,
          "score_pca_percentile": 42.29390681003584,
          "rank_pca": 323,
          "total": 558,
          "adv_notional_sgd": 4041.55,
          "adv_volume_shares": 114100.0,
          "free_float_shares": 239815101.0,
          "turnover_ratio": 0.000475783216003566,
          "votes": 4.0,
          "trades": 4.0,
          "spread_pct": 0.049372299564621594,
          "spread_ticks": 1.880184331797235,
          "amihud": 1.239582424042957e-06,
          "volatility": 0.6039799040922982
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5448546903491417,
          "loadings": {
            "log_adv": 0.5247318035651429,
            "log_trades": 0.4688798834208173,
            "log_turnover": 0.48052258897803635,
            "neg_spread": 0.4281845509350436,
            "neg_amihud": 0.20743545914842412,
            "neg_vol": 0.2180246576899842
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
          "peer_median_adv": 6463.25,
          "peer_median_score_pca": 32.25806451612903,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.605265262222319,
          "peer_median_spread_pct": 0.18181818181818177,
          "peer_median_spread_ticks": 1.3726851851851851,
          "peer_median_amihud": 1.7880670054583108e-06,
          "peer_median_turnover_ratio": 0.00015565078912552246,
          "target_vs_peer": {
            "score_pca_delta": 10.04,
            "adv_delta_pct": -37.5,
            "trades_delta_pct": -27.27,
            "volatility_delta_pct": 0.21,
            "spread_pct_delta_pct": 72.85,
            "spread_ticks_delta_pct": 36.97,
            "amihud_delta_pct": 30.67,
            "turnover_ratio_delta_pct": 205.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1A0",
            "score_pca": 42.29390681003584,
            "rank_pca": 323,
            "adv": 4041.55,
            "trades": 4.0,
            "volatility": 0.6039799040922982,
            "spread_pct": 0.049372299564621594,
            "spread_ticks": 1.880184331797235,
            "amihud": 1.239582424042957e-06,
            "turnover_ratio": 0.000475783216003566,
            "is_target": true
          },
          {
            "ticker": "579",
            "score_pca": 32.25806451612903,
            "rank_pca": 379,
            "adv": 15620.25,
            "trades": 20.0,
            "volatility": 2.499407929890597,
            "spread_pct": 0.22640125008492423,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00015565078912552246,
            "is_target": false
          },
          {
            "ticker": "LGH",
            "score_pca": 45.69892473118279,
            "rank_pca": 304,
            "adv": 6463.25,
            "trades": 5.5,
            "volatility": 0.605265262222319,
            "spread_pct": 0.029761086939928214,
            "spread_ticks": 1.3726851851851851,
            "amihud": 1.7880670054583108e-06,
            "turnover_ratio": 0.0002805769610748864,
            "is_target": false
          },
          {
            "ticker": "URR",
            "score_pca": 13.261648745519713,
            "rank_pca": 485,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4165891440843799,
            "spread_pct": 0.18181818181818177,
            "spread_ticks": 18.58571428571429,
            "amihud": 2.318408606149463e-06,
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
              "mean": 0.7512504811582468,
              "median": 0.4344921789925943,
              "min": 0.0,
              "max": 34.01037204797554,
              "p5": 0.1464973549208669,
              "p95": 2.0143373368819653,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2415823.684492943,
              "median": 12732.5,
              "min": 0.0,
              "max": 232087815.0,
              "p5": 0.0,
              "p95": 9507296.962499987,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0910494363008979,
              "median": 0.02705174958227125,
              "min": 0.00027720205153924216,
              "max": 1.267605633802817,
              "p5": 0.0035819112069952453,
              "p95": 0.46910047191077625,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028744315895222073,
              "median": 0.00028982430098630906,
              "min": 0.0,
              "max": 0.7382506097159054,
              "p5": 0.0,
              "p95": 0.00716369781558887,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5578107752547955e-05,
              "median": 1.6990646436753427e-07,
              "min": 0.0,
              "max": 0.0021718869365928185,
              "p5": 0.0,
              "p95": 4.5636732128814315e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 348.8727598566308,
              "median": 7.0,
              "min": 0.0,
              "max": 9404.0,
              "p5": 0.0,
              "p95": 1986.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8575798731720388,
              "median": 0.6182042801905568,
              "min": 0.22083517567351515,
              "max": 4.054133692911471,
              "p5": 0.24217443782090903,
              "p95": 1.5945371214946067,
              "count": 18
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12208.71111111111,
              "median": 0.5,
              "min": 0.0,
              "max": 119472.0,
              "p5": 0.0,
              "p95": 69909.68999999992,
              "count": 18
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15450318602713922,
              "median": 0.08692040903988166,
              "min": 0.01341719313444757,
              "max": 0.5759858218874613,
              "p5": 0.015735387445563957,
              "p95": 0.4694816825129383,
              "count": 18
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00023298406070061903,
              "median": 1.5990562344519365e-07,
              "min": 0.0,
              "max": 0.001549787945942002,
              "p5": 0.0,
              "p95": 0.0008372267847178253,
              "count": 18
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.59012854516089e-05,
              "median": 4.064967091426413e-06,
              "min": 0.0,
              "max": 0.00030259017187121766,
              "p5": 0.0,
              "p95": 0.0001607108980201585,
              "count": 18
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.611111111111111,
              "median": 0.5,
              "min": 0.0,
              "max": 41.0,
              "p5": 0.0,
              "p95": 21.449999999999967,
              "count": 18
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7361.166666666667,
              "median": 6463.25,
              "min": 0.0,
              "max": 15620.25,
              "p5": 646.325,
              "p95": 14704.55,
              "count": 3
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8.5,
              "median": 5.5,
              "min": 0.0,
              "max": 20.0,
              "p5": 0.55,
              "p95": 18.549999999999997,
              "count": 3
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.1737541120657655,
              "median": 0.605265262222319,
              "min": 0.4165891440843799,
              "max": 2.499407929890597,
              "p5": 0.43545675589817384,
              "p95": 2.309993663123769,
              "count": 3
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1459935062810114,
              "median": 0.18181818181818177,
              "min": 0.029761086939928214,
              "max": 0.22640125008492423,
              "p5": 0.04496679642775357,
              "p95": 0.22194294325824998,
              "count": 3
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.986133156966491,
              "median": 1.3726851851851851,
              "min": 1.0,
              "max": 18.58571428571429,
              "p5": 1.0372685185185184,
              "p95": 16.864411375661376,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3688252038692578e-06,
              "median": 1.7880670054583108e-06,
              "min": 0.0,
              "max": 2.318408606149463e-06,
              "p5": 1.788067005458311e-07,
              "p95": 2.2653744460803476e-06,
              "count": 3
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00014540925006680295,
              "median": 0.00015565078912552246,
              "min": 0.0,
              "max": 0.0002805769610748864,
              "p5": 1.5565078912552248e-05,
              "p95": 0.00026808434387995,
              "count": 3
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.30232558139534815,
            "market": 0.1170769135712324,
            "sector": 0.0,
            "peers": -0.17876228063906352,
            "vs_market": -0.41940249496658055,
            "vs_sector": -0.30232558139534815,
            "vs_peers": -0.12356330075628463
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current access looks reasonable on a snapshot basis, but the displayed book is uneven with much thinner bid depth than ask depth.",
        "market_comparison": "The stock was flat on the day while peers rose 2.3%, which matters because weaker tape can make thin buy-side support more noticeable."
      },
      "30d": {
        "liquidity": "Monthly tradability looks above peers, but the picture is mixed as price performance has dropped sharply and recent change relative to the monthly average is limited.",
        "market_comparison": "Return -25.0% vs peers -2.4%."
      },
      "3m": {
        "liquidity": "Tradability was weaker over 3M, with liquidity trailing peers, so access looked less robust through that window.",
        "market_comparison": "The stock fell 14.3% over 3M compared with a 3.3% drop for peers, which matters because sustained underperformance can coincide with thinner trading conditions."
      },
      "6m": {
        "liquidity": "Tradability is strong over 6M, with a liquidity score of 42.3 compared with a peer median of 32.3, so the stock screens accessible for its size.",
        "market_comparison": "The stock fell 30.2% over 6M compared with a 17.9% drop for peers, which matters because solid structural liquidity is sitting alongside weaker price performance."
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
          "median": 0.612429549462702,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "61.2%",
          "display_range": null,
          "display_text": "61.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 61.2,
          "plain_english": "Market explains about 61.2% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.08635196276446352,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.6%",
          "display_range": null,
          "display_text": "8.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 8.6,
          "plain_english": "Sector explains about 8.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3012184877728345,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.1%",
          "display_range": null,
          "display_text": "30.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 30.1,
          "plain_english": "Company-specific explains about 30.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.921232174372856,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.92",
          "display_range": null,
          "display_text": "1.92",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 1.92% stock move in the same direction in this state.",
          "value_num": 1.92
        },
        "beta_stock_lag": {
          "median": -0.4031469226581123,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.40",
          "display_range": null,
          "display_text": "-0.40",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.4
        },
        "beta_sector": {
          "median": 0.1786811652505556,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.18",
          "display_range": null,
          "display_text": "0.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.18% stock move in the same direction in this state.",
          "value_num": 0.18
        },
        "beta_market_lag": {
          "median": -0.5468686701991889,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.55",
          "display_range": null,
          "display_text": "-0.55",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.55
        },
        "beta_sector_lag": {
          "median": -0.6568474977639707,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.66",
          "display_range": null,
          "display_text": "-0.66",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.66
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
          "period_label": "2025-03-14 to 2025-03-28",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5906662359502208,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.1%",
            "display_range": null,
            "display_text": "59.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 59.1,
            "plain_english": "Market explains about 59.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5906662359502208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Market explains about 59.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14710886163015627,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.7%",
              "display_range": null,
              "display_text": "14.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 14.7,
              "plain_english": "Sector explains about 14.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.26222490241962293,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.2%",
              "display_range": null,
              "display_text": "26.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 26.2,
              "plain_english": "Company-specific explains about 26.2% of price moves in the current state."
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
          "period_label": "2026-03-02 to 2026-03-12",
          "n_obs": 9,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5498653713160947,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.0%",
            "display_range": null,
            "display_text": "55.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 55.0,
            "plain_english": "Market explains about 55.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5498653713160947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Market explains about 55.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2609273949688988,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.1%",
              "display_range": null,
              "display_text": "26.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 26.1,
              "plain_english": "Sector explains about 26.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.18920723371500645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.9%",
              "display_range": null,
              "display_text": "18.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 18.9,
              "plain_english": "Company-specific explains about 18.9% of price moves in the current state."
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
          "expected_duration_days": 10.416666666666666,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.024649310441857065,
            "low": 0.024649310441857065,
            "high": 0.024649310441857065
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.05309012172785409,
            "low": 0.05309012172785409,
            "high": 0.05309012172785409
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.904,
            0.096
          ],
          [
            0.0975609756097561,
            0.9024390243902439
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            12.0
          ],
          [
            12.0,
            111.0
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
        "market_link_display": "1.92",
        "sector_link_display": "0.18",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.92% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.18% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.40",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 61.2,
        "driver_share_display": "61.2%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9024390243902439,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 9.5 days.",
        "expected_duration_days": 9.5
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
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.024649310441857065,
            "low": 0.024649310441857065,
            "high": 0.024649310441857065
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.05309012172785409,
            "low": 0.05309012172785409,
            "high": 0.05309012172785409
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.904,
          0.096
        ],
        [
          0.0975609756097561,
          0.9024390243902439
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.904,
            0.096
          ],
          [
            0.0975609756097561,
            0.9024390243902439
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            113.0,
            12.0
          ],
          [
            12.0,
            111.0
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
        "text": "Liquidity score: 42.3 — Strong",
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
    "liq_subtitle": "Structural liquidity remains strong for size, but immediate trading support looks thinner on the buy side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has materially lagged, with the stock down 25.0% over 1M compared with peers down 2.4% and the market down 2.1%.",
    "perf_insight": "The stock has materially underperformed, with a 1M return of -25.0% compared with -2.4% for peers and -2.1% for the market. Liquidity still screens well on a 6M view at 42.3 compared with a 32.3 peer median, but thin buy-side depth and a market driver of 61.2% suggest the move is unfolding in a weaker market-led tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main driver, accounting for 61.2% of the tape, so broader moves still explain much of the trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 61.2% of price changes. Other influences are sector 8.6%, and company-specific 30.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 61.2%, sector 8.6%, and company-specific 30.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 61.2%, sector 8.6%, and company-specific 30.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Market at 61.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, at 61.2% of recent price moves.",
      "The pattern has shifted from company-driven in January to mostly market-driven in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market-led trading is the clearest current state, while price performance remains notably weak.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Mar 12, 2025 to Mar 12, 2026 (184 trading days • 4,643 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The longer-term liquidity profile is solid, but the displayed book looks less supportive because top-10 bid depth is only 0.23x of ask depth and the spread is 4 ticks.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "History is limited to trade-size context, while the clearest execution signal is thin buy-side depth in the displayed book.",
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
    "intraday_insight": "Session split is open 1.2%, continuous 94.6%, and close 2.0%. Current trading concentration score is 0.609.",
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
    "exec_subtitle": "Liquidity looks strong for the company’s size, but the displayed book shows thin buy-side support and the recent tape is weaker.",
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
        "value": "42.3/100",
        "sub": "Peer median 32.3 (+10.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$4.0K",
        "sub": "Peer median S$6.5K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "4.94%",
        "sub": "1.88 ticks; peers 18.18%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Structural liquidity remains strong, with a 6M score of 42.3 compared with a peer median of 32.3, so the stock still screens as accessible for its size. The near-term picture is less clear because recent trend context is limited, while top-10 bid depth is only 0.23x of ask depth and the spread is 4 ticks. That matters because a solid longer-term liquidity profile does not remove the risk of weaker downside execution when the displayed buy side is thin.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.028",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "14.29%",
        "note": "4.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.23x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-61.77% with 17.3% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-61.77% with 1.7% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-61.77% with 0.7% fill.",
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
        "value": "42",
        "suffix": "/100",
        "bar_pct": 42,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 323/558",
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
        "value": "4.94",
        "suffix": "%",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "4.94% • 1.88 ticks vs peers 18.18%",
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
        "value": "S$4.0K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$6.5K",
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
        "value": "61.2",
        "suffix": "market",
        "bar_pct": 61,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 8.6% • Company 30.1%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the company’s size, with a 6M score of 42.3 compared with a peer median of 32.3. That keeps the stock looking accessible relative to peers on a longer view.",
      "Recent change is harder to read because trend context relative to the 1M baseline is limited. That matters because the latest tape does not yet show clearly whether access has improved or worsened from the monthly average.",
      "top-10 bid depth is 0.23x ask depth; spread is 4 ticks. Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score suggests. Current driver: Market at 61.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone."
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
      "overall": "6M liquidity is strong: score 42.3 vs peer median 32.3 (+10.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 42.3 vs peer median 32.3 (+10.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +10.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -30.2%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -30.2% vs market 11.7%.",
        "vs_sector": "Worse than sector: -30.2% vs sector 0.0%.",
        "vs_peers": "Worse than peers: -30.2% vs peers -17.9%."
      },
      "adv": {
        "insight": "ADV is S$4.0K, better than sector, but worse than market and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Worse than market: S$4.0K vs market S$12.7K.",
        "vs_sector": "Better than sector: S$4.0K vs sector S$0.",
        "vs_peers": "Worse than peers: S$4.0K vs peers S$6.5K."
      },
      "spread": {
        "insight": "Spread is 4.94%, better than sector and peers, but worse than market, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Worse than market: 4.94% vs market 2.71%.",
        "vs_sector": "Better than sector: 4.94% vs sector 8.69%.",
        "vs_peers": "Better than peers: 4.94% vs peers 18.18%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.05%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.05% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.05% vs sector 0.00%.",
        "vs_peers": "Better than peers: 0.05% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 60.40%, worse than market, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 60.40% vs market 43.45%.",
        "vs_sector": "In line with sector: 60.40% vs sector 61.82%.",
        "vs_peers": "In line with peers: 60.40% vs peers 60.53%."
      },
      "trades": {
        "insight": "Trades is 4, better than sector, but worse than market and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Worse than market: 4 vs market 7.",
        "vs_sector": "Better than sector: 4 vs sector 0.",
        "vs_peers": "Worse than peers: 4 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.24e-06, better than sector and peers, but worse than market, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 1.24e-06 vs market 1.70e-07.",
        "vs_sector": "Better than sector: 1.24e-06 vs sector 4.06e-06.",
        "vs_peers": "Better than peers: 1.24e-06 vs peers 1.79e-06."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "Performance is weak relative to comparison groups."
    },
    "drivers": {
      "overall": "Current driver: Market at 61.2%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone.",
      "beta": "The current read points to a broader-market tape rather than a stock-specific one, but evidence is mixed. Thin buy-side depth, with top-10 bid depth at 0.23x of ask depth and a 4-tick spread, means price moves can feel sharper when sellers are active.",
      "rolling_change": "The driver mix has changed meaningfully over the quarter, moving from clearly company-driven in January to mostly market in February and mostly market-driven in March. That suggests the current pattern is more about the backdrop than a stable stock-specific trend."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a high-volatility state, while the recent tape is already under pressure with a 1M return of -25.0% compared with -2.4% for peers and -2.1% for the market. That leaves the market backdrop looking unsettled rather than cushioned by stronger price action.",
      "transitions": "This looks more settled than fleeting, as high volatility typically lasts about 9.5 days, although the broader read is still mixed. That suggests the current state can persist for a period rather than reversing quickly.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 9.5 days."
    },
    "execution": {
      "overall": "The displayed book reads as thin buy-side, with top-10 bid depth at 0.23x of ask depth and a 4-tick",
      "concern": "The clearest stress point is the lack of buy-side depth, as bids are materially thinner than offers at the top 10 levels. Trade-size history is available across 184 trading days and 4,643 trades, but evidence is mixed because that longer window does not change the current book imbalance.",
      "peer_context": "The broader liquidity picture still looks strong for size, with a 6M score of 42.3 compared with a peer median of 32.3. Even so, the current book shows thinner near-term visible support, so the headline liquidity advantage does not fully carry through to the displayed depth right now."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The observed flow is not retail-heavy. Retail-like trades make up 20.6% of trade count and 7.1% of trade value, while institution-like trades are higher on both measures at 30.5% and 39.7%, which means larger-value activity is contributing more than retail flow.",
      "institutional_gap": "The institution-like share is clearly ahead on trade value as well as count, but the picture is not fully clean. Ambiguous or unclear flow is 35.8% of trade count, which leaves the overall mix fully reflective of day-to-day access but mixed.",
      "peer_comparison": "The mix appears more institution-like on count and value, while peer comparison is available in the report tables. That matters because the current flow base looks supported by higher-value trading rather than broad retail participation alone."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades, so a meaningful minority of activity is driving the tape. That matters because trading conditions can still change quickly even when most trades are not moving price. Ambiguous or unclear flow is 35.8% of trade count, so the read is not fully clean. Price-moving trade asymmetry is available in the report tables. The current read is mixed, so the cleaner conclusion is that a minority of trades are moving price while a large unclear share limits confidence.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main driver of the current trading picture. The stock is down 25.0% over 1M compared with drops of 2.4% for peers and 2.1% for the market, but the short signal is mixed and does not point to a separate source of pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest looks stable rather than rising, so there is no clear sign that short activity is changing the near-term liquidity picture. History is limited, which matters because the broader weakness in the tape is more visible than any shift in short positioning.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.2%, continuous 94.6%, and close 2.0%. Current trading concentration score is 0.609.",
      "hhi_interpretation": "Activity shows a meaningful degree of concentration, with a score of 0.609. That matters because liquidity is present through the day but is not evenly distributed across the session.",
      "best_times": "The continuous session stands out as the main window for liquidity, with 94.6% of activity taking place there. That matters because the open and close contribute very little by comparison.",
      "peer_ranking": "Peer concentration comparison is available in the report tables. On the current session split, the main takeaway is that intraday liquidity is centered in continuous trading rather than at the open or close."
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
        42.29390681003584,
        32.25806451612903,
        45.69892473118279,
        13.261648745519713
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
        6463.25,
        0.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Restaurants",
      "sector_count": 18,
      "market_count": 558,
      "company": {
        "volatility": 0.6039799040922982,
        "adv": 4041.55,
        "spread_pct": 0.049372299564621594,
        "turnover_ratio": 0.000475783216003566,
        "amihud": 1.239582424042957e-06,
        "trades": 4.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7512504811582468,
          "median": 0.4344921789925943,
          "min": 0.0,
          "max": 34.01037204797554,
          "p5": 0.1464973549208669,
          "p95": 2.0143373368819653,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2415823.684492943,
          "median": 12732.5,
          "min": 0.0,
          "max": 232087815.0,
          "p5": 0.0,
          "p95": 9507296.962499987,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0910494363008979,
          "median": 0.02705174958227125,
          "min": 0.00027720205153924216,
          "max": 1.267605633802817,
          "p5": 0.0035819112069952453,
          "p95": 0.46910047191077625,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0028744315895222073,
          "median": 0.00028982430098630906,
          "min": 0.0,
          "max": 0.7382506097159054,
          "p5": 0.0,
          "p95": 0.00716369781558887,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.5578107752547955e-05,
          "median": 1.6990646436753427e-07,
          "min": 0.0,
          "max": 0.0021718869365928185,
          "p5": 0.0,
          "p95": 4.5636732128814315e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 348.8727598566308,
          "median": 7.0,
          "min": 0.0,
          "max": 9404.0,
          "p5": 0.0,
          "p95": 1986.75,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8575798731720388,
          "median": 0.6182042801905568,
          "min": 0.22083517567351515,
          "max": 4.054133692911471,
          "p5": 0.24217443782090903,
          "p95": 1.5945371214946067,
          "count": 18
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 12208.71111111111,
          "median": 0.5,
          "min": 0.0,
          "max": 119472.0,
          "p5": 0.0,
          "p95": 69909.68999999992,
          "count": 18
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15450318602713922,
          "median": 0.08692040903988166,
          "min": 0.01341719313444757,
          "max": 0.5759858218874613,
          "p5": 0.015735387445563957,
          "p95": 0.4694816825129383,
          "count": 18
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00023298406070061903,
          "median": 1.5990562344519365e-07,
          "min": 0.0,
          "max": 0.001549787945942002,
          "p5": 0.0,
          "p95": 0.0008372267847178253,
          "count": 18
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.59012854516089e-05,
          "median": 4.064967091426413e-06,
          "min": 0.0,
          "max": 0.00030259017187121766,
          "p5": 0.0,
          "p95": 0.0001607108980201585,
          "count": 18
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4.611111111111111,
          "median": 0.5,
          "min": 0.0,
          "max": 41.0,
          "p5": 0.0,
          "p95": 21.449999999999967,
          "count": 18
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 7361.166666666667,
          "median": 6463.25,
          "min": 0.0,
          "max": 15620.25,
          "p5": 646.325,
          "p95": 14704.55,
          "count": 3
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 8.5,
          "median": 5.5,
          "min": 0.0,
          "max": 20.0,
          "p5": 0.55,
          "p95": 18.549999999999997,
          "count": 3
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.1737541120657655,
          "median": 0.605265262222319,
          "min": 0.4165891440843799,
          "max": 2.499407929890597,
          "p5": 0.43545675589817384,
          "p95": 2.309993663123769,
          "count": 3
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1459935062810114,
          "median": 0.18181818181818177,
          "min": 0.029761086939928214,
          "max": 0.22640125008492423,
          "p5": 0.04496679642775357,
          "p95": 0.22194294325824998,
          "count": 3
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 6.986133156966491,
          "median": 1.3726851851851851,
          "min": 1.0,
          "max": 18.58571428571429,
          "p5": 1.0372685185185184,
          "p95": 16.864411375661376,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.3688252038692578e-06,
          "median": 1.7880670054583108e-06,
          "min": 0.0,
          "max": 2.318408606149463e-06,
          "p5": 1.788067005458311e-07,
          "p95": 2.2653744460803476e-06,
          "count": 3
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00014540925006680295,
          "median": 0.00015565078912552246,
          "min": 0.0,
          "max": 0.0002805769610748864,
          "p5": 1.5565078912552248e-05,
          "p95": 0.00026808434387995,
          "count": 3
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.2499999999999999,
        "market": -0.02126660222957566,
        "sector": 0.0,
        "peers": -0.024002908331272943
      },
      {
        "horizon": "3M",
        "stock": -0.14285714285714246,
        "market": 0.0757969498597666,
        "sector": 0.0,
        "peers": -0.03253932604266152
      },
      {
        "horizon": "6M",
        "stock": -0.30232558139534815,
        "market": 0.1170769135712324,
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
      "share_market": 0.612429549462702,
      "share_sector": 0.08635196276446352,
      "share_idio": 0.3012184877728345,
      "beta_market": 1.921232174372856,
      "beta_sector": 0.1786811652505556,
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
            "median": 0.612429549462702,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Market explains about 61.2% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.08635196276446352,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.6%",
            "display_range": null,
            "display_text": "8.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 8.6,
            "plain_english": "Sector explains about 8.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3012184877728345,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.1%",
            "display_range": null,
            "display_text": "30.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 30.1,
            "plain_english": "Company-specific explains about 30.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.921232174372856,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.92",
            "display_range": null,
            "display_text": "1.92",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 1.92% stock move in the same direction in this state.",
            "value_num": 1.92
          },
          "beta_stock_lag": {
            "median": -0.4031469226581123,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.40",
            "display_range": null,
            "display_text": "-0.40",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.4
          },
          "beta_sector": {
            "median": 0.1786811652505556,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.18",
            "display_range": null,
            "display_text": "0.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.18% stock move in the same direction in this state.",
            "value_num": 0.18
          },
          "beta_market_lag": {
            "median": -0.5468686701991889,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.55",
            "display_range": null,
            "display_text": "-0.55",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.55
          },
          "beta_sector_lag": {
            "median": -0.6568474977639707,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.66",
            "display_range": null,
            "display_text": "-0.66",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.66
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
            "period_label": "2025-03-14 to 2025-03-28",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5906662359502208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.1%",
              "display_range": null,
              "display_text": "59.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 59.1,
              "plain_english": "Market explains about 59.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5906662359502208,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.1%",
                "display_range": null,
                "display_text": "59.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 59.1,
                "plain_english": "Market explains about 59.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14710886163015627,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.7%",
                "display_range": null,
                "display_text": "14.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 14.7,
                "plain_english": "Sector explains about 14.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.26222490241962293,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.2%",
                "display_range": null,
                "display_text": "26.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 26.2,
                "plain_english": "Company-specific explains about 26.2% of price moves in the current state."
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
            "period_label": "2026-03-02 to 2026-03-12",
            "n_obs": 9,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5498653713160947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Market explains about 55.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5498653713160947,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.0%",
                "display_range": null,
                "display_text": "55.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 55.0,
                "plain_english": "Market explains about 55.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2609273949688988,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.1%",
                "display_range": null,
                "display_text": "26.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 26.1,
                "plain_english": "Sector explains about 26.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.18920723371500645,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.9%",
                "display_range": null,
                "display_text": "18.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 18.9,
                "plain_english": "Company-specific explains about 18.9% of price moves in the current state."
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
            "expected_duration_days": 10.416666666666666,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.024649310441857065,
              "low": 0.024649310441857065,
              "high": 0.024649310441857065
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.05309012172785409,
              "low": 0.05309012172785409,
              "high": 0.05309012172785409
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.904,
              0.096
            ],
            [
              0.0975609756097561,
              0.9024390243902439
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              113.0,
              12.0
            ],
            [
              12.0,
              111.0
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
          "market_link_display": "1.92",
          "sector_link_display": "0.18",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 1.92% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.18% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.40",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 61.2,
          "driver_share_display": "61.2%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9024390243902439,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 9.5 days.",
          "expected_duration_days": 9.5
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
          "period_label": "2025-03-14 to 2025-03-28",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5906662359502208,
          "share_sector": 0.14710886163015627,
          "share_company": 0.26222490241962293,
          "share_market_display": "59.1%",
          "share_sector_display": "14.7%",
          "share_company_display": "26.2%",
          "dominant_share_display": "59.1%"
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
          "period_label": "2026-03-02 to 2026-03-12",
          "n_obs": 9,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5498653713160947,
          "share_sector": 0.2609273949688988,
          "share_company": 0.18920723371500645,
          "share_market_display": "55.0%",
          "share_sector_display": "26.1%",
          "share_company_display": "18.9%",
          "dominant_share_display": "55.0%"
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
            "expected_duration_days": 10.416666666666666,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.024649310441857065,
              "low": 0.024649310441857065,
              "high": 0.024649310441857065
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.05309012172785409,
              "low": 0.05309012172785409,
              "high": 0.05309012172785409
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.904,
            0.096
          ],
          [
            0.0975609756097561,
            0.9024390243902439
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.026,
          "quantity": 20000.0,
          "value": 520.0
        },
        {
          "level": 2,
          "price": 0.025,
          "quantity": 270000.0,
          "value": 6750.0
        },
        {
          "level": 3,
          "price": 0.023,
          "quantity": 70000.0,
          "value": 1610.0
        },
        {
          "level": 4,
          "price": 0.021,
          "quantity": 70000.0,
          "value": 1470.0
        },
        {
          "level": 5,
          "price": 0.017,
          "quantity": 120000.0,
          "value": 2040.0000000000002
        },
        {
          "level": 6,
          "price": 0.015,
          "quantity": 220000.0,
          "value": 3300.0
        },
        {
          "level": 7,
          "price": 0.002,
          "quantity": 800000.0,
          "value": 1600.0
        },
        {
          "level": 8,
          "price": 0.001,
          "quantity": 50000.0,
          "value": 50.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.03,
          "quantity": 70000.0,
          "value": 2100.0
        },
        {
          "level": 2,
          "price": 0.032,
          "quantity": 80000.0,
          "value": 2560.0
        },
        {
          "level": 3,
          "price": 0.034,
          "quantity": 81200.0,
          "value": 2760.8
        },
        {
          "level": 4,
          "price": 0.035,
          "quantity": 40000.0,
          "value": 1400.0000000000002
        },
        {
          "level": 5,
          "price": 0.037,
          "quantity": 200000.0,
          "value": 7400.0
        },
        {
          "level": 6,
          "price": 0.038,
          "quantity": 145500.0,
          "value": 5529.0
        },
        {
          "level": 7,
          "price": 0.039,
          "quantity": 135200.0,
          "value": 5272.8
        },
        {
          "level": 8,
          "price": 0.04,
          "quantity": 250000.0,
          "value": 10000.0
        },
        {
          "level": 9,
          "price": 0.05,
          "quantity": 550000.0,
          "value": 27500.0
        },
        {
          "level": 10,
          "price": 0.054,
          "quantity": 231600.0,
          "value": 12506.4
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-12 08:59:11.586700",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.027999999999999997,
        "spread_pct": 0.14285714285714288,
        "spread_ticks": 4.0,
        "tick_size": 0.001,
        "bid_depth_notional_top10": 17340.0,
        "ask_depth_notional_top10": 77029.0,
        "bid_ask_depth_ratio": 0.2251
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 184,
        "n_trades_used": 4643,
        "first_trade_date": "2025-03-12",
        "last_trade_date": "2026-03-12",
        "window_label": "Mar 12, 2025 to Mar 12, 2026",
        "window_short_label": "Mar 12, 2025 to Mar 12, 2026",
        "trade_days_label": "184 trading days",
        "trade_count_label": "4,643 trades",
        "window_detail_label": "184 trading days • 4,643 trades",
        "history_note": "Trade-size percentiles use Mar 12, 2025 to Mar 12, 2026 history (184 trading days • 4,643 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 4798.8,
            "impact_pct": -0.103406,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 27.67,
            "pct_of_adv": 459.22
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7800.0,
            "impact_pct": -0.11011900000000001,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 44.98,
            "pct_of_adv": 746.41
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 34152.25,
            "impact_pct": -0.617725,
            "filled_pct": 50.8,
            "levels_consumed": 8,
            "pct_of_bid_depth": 196.96,
            "pct_of_adv": 3268.16
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-12",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8119594029086433280",
            "timestamp": "2026-03-11 22:59:01.865200000",
            "local_timestamp": "2026-03-12 06:59:01",
            "posted_price": 0.05,
            "size_shares": 500000.0,
            "notional": 25000.0,
            "impact_pct": -0.617725,
            "filled_pct": 69.4,
            "levels_consumed": 8,
            "pct_of_bid_depth": 144.18,
            "price_vs_mid_pct": 78.571,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8112682224115146752",
            "timestamp": "2026-03-11 22:59:01.865200000",
            "local_timestamp": "2026-03-12 06:59:01",
            "posted_price": 0.054,
            "size_shares": 231600.0,
            "notional": 12506.4,
            "impact_pct": -0.19919499999999998,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 72.12,
            "price_vs_mid_pct": 92.857,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8123765301323094016",
            "timestamp": "2026-03-12 00:30:12.130700000",
            "local_timestamp": "2026-03-12 08:30:12",
            "posted_price": 0.04,
            "size_shares": 250000.0,
            "notional": 10000.0,
            "impact_pct": -0.135945,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 57.67,
            "price_vs_mid_pct": 42.857,
            "executed_event_count": 0,
            "event_count": 3
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-12",
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
            "spread_pct": 0.03278688524590167,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 21515.0,
            "ask_depth_notional": 75192.5,
            "mid_price": 0.0305
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.03278688524590167,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 21515.0,
            "ask_depth_notional": 75198.7,
            "mid_price": 0.0305
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.03389830508474568,
            "spread_ticks": 0.9999999999999974,
            "bid_depth_notional": 18310.0,
            "ask_depth_notional": 65816.3,
            "mid_price": 0.0295
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.03278688524590167,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 21437.0,
            "ask_depth_notional": 78323.5,
            "mid_price": 0.0305
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.10169491525423727,
            "spread_ticks": 2.999999999999999,
            "bid_depth_notional": 18270.0,
            "ask_depth_notional": 78323.5,
            "mid_price": 0.0295
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.06896551724137925,
            "spread_ticks": 1.9999999999999982,
            "bid_depth_notional": 18270.0,
            "ask_depth_notional": 80314.0,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.06896551724137925,
            "spread_ticks": 1.9999999999999982,
            "bid_depth_notional": 17840.0,
            "ask_depth_notional": 80314.0,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.06896551724137925,
            "spread_ticks": 1.9999999999999982,
            "bid_depth_notional": 17630.0,
            "ask_depth_notional": 80314.0,
            "mid_price": 0.028999999999999998
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.14285714285714288,
            "spread_ticks": 4.0,
            "bid_depth_notional": 17340.0,
            "ask_depth_notional": 77029.0,
            "mid_price": 0.027999999999999997
          }
        ],
        "summary": {
          "median_spread_pct": 0.06896551724137925,
          "median_spread_ticks": 1.9999999999999982,
          "median_bid_depth_notional": 18270.0,
          "median_ask_depth_notional": 78323.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 4784.7,
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
          "valid": true,
          "currency": "SGD",
          "n_trades": 4,
          "n_runs": 4,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-12",
          "last_trade_date": "2026-03-12",
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
            "retail_pct": 0.5,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.009345794392523364,
            "mixed_qty_pct": 0.056074766355140186,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.9345794392523364,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.9345794392523364,
            "retail_notional_pct": 0.009345794392523364,
            "mixed_notional_pct": 0.056074766355140186,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.9345794392523364,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.9345794392523364
          },
          "run_composition": {
            "retail_pct": 0.5,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_notional_pct": 0.009345794392523364,
            "mixed_notional_pct": 0.056074766355140186,
            "instit_notional_pct": 0.0,
            "unclear_notional_pct": 0.9345794392523364
          },
          "counts": {
            "trades": {
              "retail": 2,
              "mixed": 1,
              "institutional": 0,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            },
            "runs": {
              "retail": 2,
              "mixed": 1,
              "institutional": 0,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5,
            "na": 0.5
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 2,
            "na": 2
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5,
            "na": 0.5
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 2,
            "na": 2
          },
          "observability": {
            "avg_feature_coverage": 0.8125,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.25,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5,
          "dominance_gap": 0.25,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 4
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 4
            },
            "participant_confidence": {
              "NA": 2,
              "LOW": 2
            }
          },
          "trade_size": {
            "avg": 802.5,
            "median": 102.0
          },
          "run_size": {
            "avg": 802.5,
            "median": 102.0,
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
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5,
              "mixed_pct": 0.25,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.009345794392523364,
              "mixed_qty_pct": 0.056074766355140186,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.9345794392523364,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.9345794392523364,
              "retail_notional_pct": 0.009345794392523364,
              "mixed_notional_pct": 0.056074766355140186,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.9345794392523364,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.9345794392523364,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.25,
              "avg_trade_size": 802.5,
              "avg_run_notional": 802.5,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8125,
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
              "avg_trade_size": 112.5,
              "avg_run_notional": 112.5,
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
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6785714285714286,
              "mixed_pct": 0.21428571428571427,
              "instit_pct": 0.10714285714285714,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0193527837941139,
              "mixed_qty_pct": 0.34362339151484267,
              "instit_qty_pct": 0.6370238246910435,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.02563832076594272,
              "mixed_notional_pct": 0.341420909831258,
              "instit_notional_pct": 0.6329407694027992,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8260869565217391,
              "run_mixed_pct": 0.13043478260869565,
              "run_instit_pct": 0.043478260869565216,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 846.3892857142857,
              "avg_run_notional": 1030.3869565217394,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8695652173913043,
              "na_confidence_pct": 0.13043478260869565,
              "avg_feature_coverage": 0.8500000000000003,
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
            "retail_pct": 0.24285714285714285,
            "mixed_pct": 0.11428571428571428,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.35714285714285715,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35714285714285715,
            "retail_qty_pct": 0.04527073157922378,
            "mixed_qty_pct": 0.05461898009558321,
            "instit_qty_pct": 0.473452024578541,
            "ambiguous_qty_pct": 0.42665826374665194,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.42665826374665194,
            "retail_notional_pct": 0.04301858124149283,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.4943148365040676,
            "ambiguous_notional_pct": 0.4067962394352822,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4067962394352822
          },
          "run_composition": {
            "retail_pct": 0.3090909090909091,
            "mixed_pct": 0.12727272727272726,
            "instit_pct": 0.21818181818181817,
            "ambiguous_pct": 0.34545454545454546,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.34545454545454546,
            "retail_notional_pct": 0.04301858124149283,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.4943148365040676,
            "unclear_notional_pct": 0.4067962394352822
          },
          "counts": {
            "trades": {
              "retail": 17,
              "mixed": 8,
              "institutional": 20,
              "ambiguous": 25,
              "unobservable": 0,
              "unclear": 25
            },
            "runs": {
              "retail": 17,
              "mixed": 7,
              "institutional": 12,
              "ambiguous": 19,
              "unobservable": 0,
              "unclear": 19
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5272727272727272,
            "na": 0.4727272727272727
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 29,
            "na": 26
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5285714285714286,
            "na": 0.4714285714285714
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 37,
            "na": 33
          },
          "observability": {
            "avg_feature_coverage": 0.8172727272727276,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.34545454545454546,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.34545454545454546,
          "dominance_gap": 0.036363636363636376,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 46,
              "MULTI_FILL_SINGLE_PRICE": 21,
              "WALK_BOOK": 3
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 38,
              "PERSISTENT_POSITIVE_IMPACT": 17,
              "MOMENTUM_REACTIVE": 14,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 55
            },
            "participant_confidence": {
              "LOW": 29,
              "NA": 26
            }
          },
          "trade_size": {
            "avg": 902.6,
            "median": 278.5
          },
          "run_size": {
            "avg": 1148.7636363636364,
            "median": 267.0,
            "avg_length": 1.0363636363636364
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.24285714285714285,
              "mixed_pct": 0.11428571428571428,
              "instit_pct": 0.2857142857142857,
              "ambiguous_pct": 0.35714285714285715,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.35714285714285715,
              "retail_qty_pct": 0.04527073157922378,
              "mixed_qty_pct": 0.05461898009558321,
              "instit_qty_pct": 0.473452024578541,
              "ambiguous_qty_pct": 0.42665826374665194,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.42665826374665194,
              "retail_notional_pct": 0.04301858124149283,
              "mixed_notional_pct": 0.055870342819157356,
              "instit_notional_pct": 0.4943148365040676,
              "ambiguous_notional_pct": 0.4067962394352822,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4067962394352822,
              "run_retail_pct": 0.3090909090909091,
              "run_mixed_pct": 0.12727272727272726,
              "run_instit_pct": 0.21818181818181817,
              "run_unclear_pct": 0.34545454545454546,
              "avg_trade_size": 902.6,
              "avg_run_notional": 1148.7636363636364,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5272727272727272,
              "na_confidence_pct": 0.4727272727272727,
              "avg_feature_coverage": 0.8172727272727276,
              "observable_run_pct": 1.0,
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
              "retail_pct": 0.21052631578947367,
              "mixed_pct": 0.12631578947368421,
              "instit_pct": 0.23157894736842105,
              "ambiguous_pct": 0.43157894736842106,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.43157894736842106,
              "retail_qty_pct": 0.03692707366858415,
              "mixed_qty_pct": 0.047040267210985344,
              "instit_qty_pct": 0.46214511041009465,
              "ambiguous_qty_pct": 0.4538875487103359,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4538875487103359,
              "retail_notional_pct": 0.037438294993813445,
              "mixed_notional_pct": 0.048334339451387376,
              "instit_notional_pct": 0.46607455548848103,
              "ambiguous_notional_pct": 0.4481528100663182,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4481528100663182,
              "run_retail_pct": 0.24050632911392406,
              "run_mixed_pct": 0.1518987341772152,
              "run_instit_pct": 0.17721518987341772,
              "run_unclear_pct": 0.43037974683544306,
              "avg_trade_size": 2458.642105263158,
              "avg_run_notional": 2956.5949367088606,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4177215189873418,
              "na_confidence_pct": 0.5822784810126582,
              "avg_feature_coverage": 0.8215189873417722,
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
              "retail_pct": 0.6730593607305936,
              "mixed_pct": 0.19908675799086759,
              "instit_pct": 0.11598173515981736,
              "ambiguous_pct": 0.011872146118721462,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.011872146118721462,
              "retail_qty_pct": 0.1385020936601235,
              "mixed_qty_pct": 0.405693616507029,
              "instit_qty_pct": 0.4066822796968794,
              "ambiguous_qty_pct": 0.0491220101359681,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0491220101359681,
              "retail_notional_pct": 0.13669093816139677,
              "mixed_notional_pct": 0.4321461182014749,
              "instit_notional_pct": 0.3846965303978764,
              "ambiguous_notional_pct": 0.046466413239251964,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.046466413239251964,
              "run_retail_pct": 0.8478513356562137,
              "run_mixed_pct": 0.13821138211382114,
              "run_instit_pct": 0.008130081300813009,
              "run_unclear_pct": 0.005807200929152149,
              "avg_trade_size": 834.0329680365296,
              "avg_run_notional": 1060.703948896632,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6178861788617886,
              "medium_confidence_pct": 0.09059233449477352,
              "low_confidence_pct": 0.14750290360046459,
              "na_confidence_pct": 0.1440185830429733,
              "avg_feature_coverage": 0.8522648083623692,
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
          "n_trades": 177,
          "n_runs": 126,
          "n_trade_days": 31,
          "first_trade_date": "2025-12-10",
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
            "retail_pct": 0.1864406779661017,
            "mixed_pct": 0.1638418079096045,
            "instit_pct": 0.2937853107344633,
            "ambiguous_pct": 0.3559322033898305,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3559322033898305,
            "retail_qty_pct": 0.06059007167040408,
            "mixed_qty_pct": 0.1057028536252913,
            "instit_qty_pct": 0.42092072285978105,
            "ambiguous_qty_pct": 0.4127863518445236,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4127863518445236,
            "retail_notional_pct": 0.0608414405208463,
            "mixed_notional_pct": 0.11013593384053931,
            "instit_notional_pct": 0.4204859385541332,
            "ambiguous_notional_pct": 0.40853668708448115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40853668708448115
          },
          "run_composition": {
            "retail_pct": 0.2619047619047619,
            "mixed_pct": 0.14285714285714285,
            "instit_pct": 0.23809523809523808,
            "ambiguous_pct": 0.35714285714285715,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35714285714285715,
            "retail_notional_pct": 0.0608414405208463,
            "mixed_notional_pct": 0.11013593384053931,
            "instit_notional_pct": 0.4204859385541332,
            "unclear_notional_pct": 0.40853668708448115
          },
          "counts": {
            "trades": {
              "retail": 33,
              "mixed": 29,
              "institutional": 52,
              "ambiguous": 63,
              "unobservable": 0,
              "unclear": 63
            },
            "runs": {
              "retail": 33,
              "mixed": 18,
              "institutional": 30,
              "ambiguous": 45,
              "unobservable": 0,
              "unclear": 45
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5,
            "na": 0.5
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 63,
            "na": 63
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.480225988700565,
            "na": 0.519774011299435
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 85,
            "na": 92
          },
          "observability": {
            "avg_feature_coverage": 0.8285714285714283,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.35714285714285715,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.35714285714285715,
          "dominance_gap": 0.09523809523809523,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 100,
              "MULTI_FILL_SINGLE_PRICE": 74,
              "WALK_BOOK": 3
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 111,
              "PERSISTENT_POSITIVE_IMPACT": 44,
              "MOMENTUM_REACTIVE": 21,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 125,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "LOW": 63,
              "NA": 63
            }
          },
          "trade_size": {
            "avg": 1456.3,
            "median": 900.0
          },
          "run_size": {
            "avg": 2045.754761904762,
            "median": 977.8000000000001,
            "avg_length": 1.0476190476190477
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.1864406779661017,
              "mixed_pct": 0.1638418079096045,
              "instit_pct": 0.2937853107344633,
              "ambiguous_pct": 0.3559322033898305,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3559322033898305,
              "retail_qty_pct": 0.06059007167040408,
              "mixed_qty_pct": 0.1057028536252913,
              "instit_qty_pct": 0.42092072285978105,
              "ambiguous_qty_pct": 0.4127863518445236,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4127863518445236,
              "retail_notional_pct": 0.0608414405208463,
              "mixed_notional_pct": 0.11013593384053931,
              "instit_notional_pct": 0.4204859385541332,
              "ambiguous_notional_pct": 0.40853668708448115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.40853668708448115,
              "run_retail_pct": 0.2619047619047619,
              "run_mixed_pct": 0.14285714285714285,
              "run_instit_pct": 0.23809523809523808,
              "run_unclear_pct": 0.35714285714285715,
              "avg_trade_size": 1456.3,
              "avg_run_notional": 2045.754761904762,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8285714285714283,
              "observable_run_pct": 1.0,
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
              "retail_pct": 0.23529411764705882,
              "mixed_pct": 0.11199095022624435,
              "instit_pct": 0.24773755656108598,
              "ambiguous_pct": 0.40384615384615385,
              "unobservable_pct": 0.0011312217194570137,
              "unclear_pct": 0.40497737556561086,
              "retail_qty_pct": 0.07537468296057183,
              "mixed_qty_pct": 0.08819460456536776,
              "instit_qty_pct": 0.3635692875259396,
              "ambiguous_qty_pct": 0.47220813158096997,
              "unobservable_qty_pct": 0.0006532933671508723,
              "unclear_qty_pct": 0.47286142494812083,
              "retail_notional_pct": 0.0755404698082383,
              "mixed_notional_pct": 0.08705426110679335,
              "instit_notional_pct": 0.36398464637492667,
              "ambiguous_notional_pct": 0.47278696845210716,
              "unobservable_notional_pct": 0.0006336542579345567,
              "unclear_notional_pct": 0.4734206227100417,
              "run_retail_pct": 0.3434704830053667,
              "run_mixed_pct": 0.11806797853309481,
              "run_instit_pct": 0.1413237924865832,
              "run_unclear_pct": 0.39713774597495527,
              "avg_trade_size": 3566.006787330317,
              "avg_run_notional": 5639.266547406082,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.016100178890876567,
              "medium_confidence_pct": 0.11985688729874776,
              "low_confidence_pct": 0.3488372093023256,
              "na_confidence_pct": 0.5152057245080501,
              "avg_feature_coverage": 0.8250447227191413,
              "observable_run_pct": 0.998211091234347,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6769574944071588,
              "mixed_pct": 0.20089485458612977,
              "instit_pct": 0.10335570469798658,
              "ambiguous_pct": 0.01879194630872483,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.01879194630872483,
              "retail_qty_pct": 0.1618984479789661,
              "mixed_qty_pct": 0.45048068930277024,
              "instit_qty_pct": 0.34411908780699996,
              "ambiguous_qty_pct": 0.0435017749112637,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0435017749112637,
              "retail_notional_pct": 0.1588098522809511,
              "mixed_notional_pct": 0.4681645069538089,
              "instit_notional_pct": 0.330886088965296,
              "ambiguous_notional_pct": 0.04213955179994408,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.04213955179994408,
              "run_retail_pct": 0.8278551532033426,
              "run_mixed_pct": 0.14930362116991644,
              "run_instit_pct": 0.013370473537604457,
              "run_unclear_pct": 0.00947075208913649,
              "avg_trade_size": 845.895033557047,
              "avg_run_notional": 1053.245348189415,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5298050139275766,
              "medium_confidence_pct": 0.09693593314763231,
              "low_confidence_pct": 0.21448467966573817,
              "na_confidence_pct": 0.15877437325905291,
              "avg_feature_coverage": 0.8515041782729803,
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
          "n_trades": 1337,
          "n_runs": 811,
          "n_trade_days": 88,
          "first_trade_date": "2025-09-11",
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
            "retail_pct": 0.20643231114435304,
            "mixed_pct": 0.1256544502617801,
            "instit_pct": 0.3051608077786088,
            "ambiguous_pct": 0.3582647718773373,
            "unobservable_pct": 0.004487658937920718,
            "unclear_pct": 0.362752430815258,
            "retail_qty_pct": 0.07156822908474458,
            "mixed_qty_pct": 0.11536487006064419,
            "instit_qty_pct": 0.394318320837484,
            "ambiguous_qty_pct": 0.4082002918610951,
            "unobservable_qty_pct": 0.010548288156032088,
            "unclear_qty_pct": 0.41874858001712717,
            "retail_notional_pct": 0.07129096732432763,
            "mixed_notional_pct": 0.11527313543547212,
            "instit_notional_pct": 0.3969961764793246,
            "ambiguous_notional_pct": 0.4076791790569419,
            "unobservable_notional_pct": 0.008760541703933753,
            "unclear_notional_pct": 0.41643972076087565
          },
          "run_composition": {
            "retail_pct": 0.3094944512946979,
            "mixed_pct": 0.13070283600493218,
            "instit_pct": 0.18495684340320592,
            "ambiguous_pct": 0.3723797780517879,
            "unobservable_pct": 0.002466091245376079,
            "unclear_pct": 0.37484586929716396,
            "retail_notional_pct": 0.07129096732432763,
            "mixed_notional_pct": 0.11527313543547212,
            "instit_notional_pct": 0.3969961764793246,
            "unclear_notional_pct": 0.41643972076087565
          },
          "counts": {
            "trades": {
              "retail": 276,
              "mixed": 168,
              "institutional": 408,
              "ambiguous": 479,
              "unobservable": 6,
              "unclear": 485
            },
            "runs": {
              "retail": 251,
              "mixed": 106,
              "institutional": 150,
              "ambiguous": 302,
              "unobservable": 2,
              "unclear": 304
            }
          },
          "confidence": {
            "high": 0.040690505548705305,
            "medium": 0.08138101109741061,
            "low": 0.3723797780517879,
            "na": 0.5055487053020962
          },
          "confidence_counts": {
            "high": 33,
            "medium": 66,
            "low": 302,
            "na": 410
          },
          "trade_confidence": {
            "high": 0.03889304412864622,
            "medium": 0.1024682124158564,
            "low": 0.37023186237845923,
            "na": 0.48840688107703817
          },
          "trade_confidence_counts": {
            "high": 52,
            "medium": 137,
            "low": 495,
            "na": 653
          },
          "observability": {
            "avg_feature_coverage": 0.8382244143033291,
            "observable_run_pct": 0.9975339087546239,
            "ambiguous_run_pct": 0.3723797780517879,
            "unobservable_run_pct": 0.002466091245376079
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3723797780517879,
          "dominance_gap": 0.06288532675709002,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 702,
              "SINGLE_FILL": 605,
              "WALK_BOOK": 25,
              "UNOBSERVABLE": 5
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 881,
              "PERSISTENT_POSITIVE_IMPACT": 265,
              "MOMENTUM_REACTIVE": 166,
              "SHORT_HORIZON_POSITIVE_IMPACT": 13,
              "UNOBSERVABLE": 12
            },
            "d3_urgency": {
              "IMMEDIATE": 802,
              "ADAPTIVE": 9
            },
            "participant_confidence": {
              "NA": 410,
              "LOW": 302,
              "MEDIUM": 66,
              "HIGH": 33
            }
          },
          "trade_size": {
            "avg": 2900.7557217651456,
            "median": 2050.0
          },
          "run_size": {
            "avg": 4782.1336621455,
            "median": 3280.0,
            "avg_length": 1.1048088779284833
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 39500.0,
              "notional": 1106.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T07:43:08.959200",
              "price": 0.028,
              "size": 26500.0,
              "notional": 742.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1550,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "d2": "MOMENTUM_REACTIVE",
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
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 5000.0,
              "notional": 145.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-09T02:18:16.458900",
              "price": 0.029,
              "size": 10000.0,
              "notional": 290.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1548,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.032,
              "size": 31300.0,
              "notional": 1001.6,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-04T02:04:14.666900",
              "price": 0.033,
              "size": 200000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1542,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "1A0",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.20643231114435304,
              "mixed_pct": 0.1256544502617801,
              "instit_pct": 0.3051608077786088,
              "ambiguous_pct": 0.3582647718773373,
              "unobservable_pct": 0.004487658937920718,
              "unclear_pct": 0.362752430815258,
              "retail_qty_pct": 0.07156822908474458,
              "mixed_qty_pct": 0.11536487006064419,
              "instit_qty_pct": 0.394318320837484,
              "ambiguous_qty_pct": 0.4082002918610951,
              "unobservable_qty_pct": 0.010548288156032088,
              "unclear_qty_pct": 0.41874858001712717,
              "retail_notional_pct": 0.07129096732432763,
              "mixed_notional_pct": 0.11527313543547212,
              "instit_notional_pct": 0.3969961764793246,
              "ambiguous_notional_pct": 0.4076791790569419,
              "unobservable_notional_pct": 0.008760541703933753,
              "unclear_notional_pct": 0.41643972076087565,
              "run_retail_pct": 0.3094944512946979,
              "run_mixed_pct": 0.13070283600493218,
              "run_instit_pct": 0.18495684340320592,
              "run_unclear_pct": 0.37484586929716396,
              "avg_trade_size": 2900.7557217651456,
              "avg_run_notional": 4782.1336621455,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.040690505548705305,
              "medium_confidence_pct": 0.08138101109741061,
              "low_confidence_pct": 0.3723797780517879,
              "na_confidence_pct": 0.5055487053020962,
              "avg_feature_coverage": 0.8382244143033291,
              "observable_run_pct": 0.9975339087546239,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "URR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21323529411764705,
              "mixed_pct": 0.08823529411764706,
              "instit_pct": 0.47794117647058826,
              "ambiguous_pct": 0.20588235294117646,
              "unobservable_pct": 0.014705882352941176,
              "unclear_pct": 0.22058823529411764,
              "retail_qty_pct": 0.029469122426868905,
              "mixed_qty_pct": 0.0552546045503792,
              "instit_qty_pct": 0.5690140845070423,
              "ambiguous_qty_pct": 0.3458288190682557,
              "unobservable_qty_pct": 0.0004333694474539545,
              "unclear_qty_pct": 0.34626218851570967,
              "retail_notional_pct": 0.03061025148378859,
              "mixed_notional_pct": 0.05750070992260333,
              "instit_notional_pct": 0.5696559946670211,
              "ambiguous_notional_pct": 0.34175170633170404,
              "unobservable_notional_pct": 0.00048133759488291813,
              "unclear_notional_pct": 0.34223304392658693,
              "run_retail_pct": 0.27358490566037735,
              "run_mixed_pct": 0.08490566037735849,
              "run_instit_pct": 0.3867924528301887,
              "run_unclear_pct": 0.25471698113207547,
              "avg_trade_size": 1825.4889705882354,
              "avg_run_notional": 2342.1367924528304,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.660377358490566,
              "na_confidence_pct": 0.33962264150943394,
              "avg_feature_coverage": 0.8235849056603772,
              "observable_run_pct": 0.9905660377358491,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23529411764705882,
              "mixed_pct": 0.11199095022624435,
              "instit_pct": 0.24773755656108598,
              "ambiguous_pct": 0.40384615384615385,
              "unobservable_pct": 0.0011312217194570137,
              "unclear_pct": 0.40497737556561086,
              "retail_qty_pct": 0.07537468296057183,
              "mixed_qty_pct": 0.08819460456536776,
              "instit_qty_pct": 0.3635692875259396,
              "ambiguous_qty_pct": 0.47220813158096997,
              "unobservable_qty_pct": 0.0006532933671508723,
              "unclear_qty_pct": 0.47286142494812083,
              "retail_notional_pct": 0.0755404698082383,
              "mixed_notional_pct": 0.08705426110679335,
              "instit_notional_pct": 0.36398464637492667,
              "ambiguous_notional_pct": 0.47278696845210716,
              "unobservable_notional_pct": 0.0006336542579345567,
              "unclear_notional_pct": 0.4734206227100417,
              "run_retail_pct": 0.3434704830053667,
              "run_mixed_pct": 0.11806797853309481,
              "run_instit_pct": 0.1413237924865832,
              "run_unclear_pct": 0.39713774597495527,
              "avg_trade_size": 3566.006787330317,
              "avg_run_notional": 5639.266547406082,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.016100178890876567,
              "medium_confidence_pct": 0.11985688729874776,
              "low_confidence_pct": 0.3488372093023256,
              "na_confidence_pct": 0.5152057245080501,
              "avg_feature_coverage": 0.8250447227191413,
              "observable_run_pct": 0.998211091234347,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "579",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6759373712402142,
              "mixed_pct": 0.20333745364647712,
              "instit_pct": 0.0984754841367944,
              "ambiguous_pct": 0.022249690976514216,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.022249690976514216,
              "retail_qty_pct": 0.13165060333787515,
              "mixed_qty_pct": 0.4535239202531916,
              "instit_qty_pct": 0.37269275410885927,
              "ambiguous_qty_pct": 0.04213272230007401,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.04213272230007401,
              "retail_notional_pct": 0.12990432284765732,
              "mixed_notional_pct": 0.4692357064090839,
              "instit_notional_pct": 0.3573557347812388,
              "ambiguous_notional_pct": 0.043504235962020056,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.043504235962020056,
              "run_retail_pct": 0.8269131997945557,
              "run_mixed_pct": 0.14946070878274267,
              "run_instit_pct": 0.012069851052901901,
              "run_unclear_pct": 0.011556240369799691,
              "avg_trade_size": 932.5112896580141,
              "avg_run_notional": 1162.4062146892657,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.576271186440678,
              "medium_confidence_pct": 0.0968156137647663,
              "low_confidence_pct": 0.16589625064201335,
              "na_confidence_pct": 0.16101694915254236,
              "avg_feature_coverage": 0.8515023112480737,
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
      "n_trades": 1337,
      "n_runs": 811,
      "n_trade_days": 88,
      "first_trade_date": "2025-09-11",
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
        "retail_pct": 0.20643231114435304,
        "mixed_pct": 0.1256544502617801,
        "instit_pct": 0.3051608077786088,
        "ambiguous_pct": 0.3582647718773373,
        "unobservable_pct": 0.004487658937920718,
        "unclear_pct": 0.362752430815258,
        "retail_qty_pct": 0.07156822908474458,
        "mixed_qty_pct": 0.11536487006064419,
        "instit_qty_pct": 0.394318320837484,
        "ambiguous_qty_pct": 0.4082002918610951,
        "unobservable_qty_pct": 0.010548288156032088,
        "unclear_qty_pct": 0.41874858001712717,
        "retail_notional_pct": 0.07129096732432763,
        "mixed_notional_pct": 0.11527313543547212,
        "instit_notional_pct": 0.3969961764793246,
        "ambiguous_notional_pct": 0.4076791790569419,
        "unobservable_notional_pct": 0.008760541703933753,
        "unclear_notional_pct": 0.41643972076087565
      },
      "run_composition": {
        "retail_pct": 0.3094944512946979,
        "mixed_pct": 0.13070283600493218,
        "instit_pct": 0.18495684340320592,
        "ambiguous_pct": 0.3723797780517879,
        "unobservable_pct": 0.002466091245376079,
        "unclear_pct": 0.37484586929716396
      },
      "trade_size": {
        "avg": 2900.7557217651456,
        "median": 2050.0
      },
      "run_size": {
        "avg": 4782.1336621455,
        "median": 3280.0,
        "avg_length": 1.1048088779284833
      },
      "confidence": {
        "high": 0.040690505548705305,
        "medium": 0.08138101109741061,
        "low": 0.3723797780517879,
        "na": 0.5055487053020962
      },
      "confidence_counts": {
        "high": 33,
        "medium": 66,
        "low": 302,
        "na": 410
      },
      "trade_confidence": {
        "high": 0.03889304412864622,
        "medium": 0.1024682124158564,
        "low": 0.37023186237845923,
        "na": 0.48840688107703817
      },
      "trade_confidence_counts": {
        "high": 52,
        "medium": 137,
        "low": 495,
        "na": 653
      },
      "counts": {
        "trades": {
          "retail": 276,
          "mixed": 168,
          "institutional": 408,
          "ambiguous": 479,
          "unobservable": 6,
          "unclear": 485
        },
        "runs": {
          "retail": 251,
          "mixed": 106,
          "institutional": 150,
          "ambiguous": 302,
          "unobservable": 2,
          "unclear": 304
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8382244143033291,
        "observable_run_pct": 0.9975339087546239,
        "ambiguous_run_pct": 0.3723797780517879,
        "unobservable_run_pct": 0.002466091245376079
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.3723797780517879,
      "dominance_gap": 0.06288532675709002,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-10",
            "n_trades": 492,
            "n_runs": 277,
            "retail_pct": 0.1951219512195122,
            "mixed_pct": 0.12804878048780488,
            "instit_pct": 0.2886178861788618,
            "ambiguous_pct": 0.3882113821138211,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3882113821138211,
            "avg_trade_size": 2654.60162601626,
            "avg_run_notional": 4715.03249097473,
            "retail_qty_pct": 0.07718821983665036,
            "mixed_qty_pct": 0.14072273689207757,
            "instit_qty_pct": 0.3754500807387175,
            "ambiguous_qty_pct": 0.4066389625325546,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4066389625325546,
            "retail_notional_pct": 0.07567600056352522,
            "mixed_notional_pct": 0.14126719670705265,
            "instit_notional_pct": 0.3817628385745262,
            "ambiguous_notional_pct": 0.40129396415489593,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40129396415489593,
            "run_retail_pct": 0.3176895306859206,
            "run_mixed_pct": 0.1407942238267148,
            "run_instit_pct": 0.1624548736462094,
            "run_ambiguous_pct": 0.37906137184115524,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.37906137184115524,
            "avg_feature_coverage": 0.8332129963898918,
            "high_confidence_pct": 0.04693140794223827,
            "medium_confidence_pct": 0.11191335740072202,
            "low_confidence_pct": 0.3212996389891697,
            "na_confidence_pct": 0.51985559566787,
            "total_quantity": null
          },
          {
            "month": "2025-11",
            "n_trades": 312,
            "n_runs": 184,
            "retail_pct": 0.18269230769230768,
            "mixed_pct": 0.11217948717948718,
            "instit_pct": 0.38782051282051283,
            "ambiguous_pct": 0.2980769230769231,
            "unobservable_pct": 0.019230769230769232,
            "unclear_pct": 0.3173076923076923,
            "avg_trade_size": 3263.8528846153845,
            "avg_run_notional": 5534.359239130435,
            "retail_qty_pct": 0.07099983886561392,
            "mixed_qty_pct": 0.1198880116016758,
            "instit_qty_pct": 0.45366580728327427,
            "ambiguous_qty_pct": 0.3165444730905575,
            "unobservable_qty_pct": 0.038901869158878506,
            "unclear_qty_pct": 0.355446342249436,
            "retail_notional_pct": 0.07123374814314645,
            "mixed_notional_pct": 0.12089043339037815,
            "instit_notional_pct": 0.4552140231465074,
            "ambiguous_notional_pct": 0.3192970082845104,
            "unobservable_notional_pct": 0.033364787035457644,
            "unclear_notional_pct": 0.35266179531996805,
            "run_retail_pct": 0.29891304347826086,
            "run_mixed_pct": 0.11956521739130435,
            "run_instit_pct": 0.23369565217391305,
            "run_ambiguous_pct": 0.33695652173913043,
            "run_unobservable_pct": 0.010869565217391304,
            "run_unclear_pct": 0.34782608695652173,
            "avg_feature_coverage": 0.8486413043478259,
            "high_confidence_pct": 0.02717391304347826,
            "medium_confidence_pct": 0.04891304347826087,
            "low_confidence_pct": 0.45652173913043476,
            "na_confidence_pct": 0.4673913043478261,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 35,
            "n_runs": 27,
            "retail_pct": 0.14285714285714285,
            "mixed_pct": 0.05714285714285714,
            "instit_pct": 0.4857142857142857,
            "ambiguous_pct": 0.3142857142857143,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3142857142857143,
            "avg_trade_size": 1553.7371428571428,
            "avg_run_notional": 2014.1037037037038,
            "retail_qty_pct": 0.051200968848819216,
            "mixed_qty_pct": 0.010159456368162552,
            "instit_qty_pct": 0.6497342393863957,
            "ambiguous_qty_pct": 0.2889053353966225,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2889053353966225,
            "retail_notional_pct": 0.050199702836295164,
            "mixed_notional_pct": 0.010272007767447335,
            "instit_notional_pct": 0.651726344592209,
            "ambiguous_notional_pct": 0.2878019448040484,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2878019448040484,
            "run_retail_pct": 0.18518518518518517,
            "run_mixed_pct": 0.07407407407407407,
            "run_instit_pct": 0.37037037037037035,
            "run_ambiguous_pct": 0.37037037037037035,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.37037037037037035,
            "avg_feature_coverage": 0.8166666666666669,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 88,
            "n_runs": 56,
            "retail_pct": 0.1590909090909091,
            "mixed_pct": 0.2159090909090909,
            "instit_pct": 0.23863636363636365,
            "ambiguous_pct": 0.38636363636363635,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38636363636363635,
            "avg_trade_size": 1908.8136363636365,
            "avg_run_notional": 2999.5642857142857,
            "retail_qty_pct": 0.0778367570398229,
            "mixed_qty_pct": 0.1459379686272643,
            "instit_qty_pct": 0.32477208350194,
            "ambiguous_qty_pct": 0.45145319083097285,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.45145319083097285,
            "retail_notional_pct": 0.07713620311521437,
            "mixed_notional_pct": 0.1470189718030476,
            "instit_notional_pct": 0.3255984797792061,
            "ambiguous_notional_pct": 0.45024634530253205,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45024634530253205,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.16071428571428573,
            "run_instit_pct": 0.19642857142857142,
            "run_ambiguous_pct": 0.39285714285714285,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.39285714285714285,
            "avg_feature_coverage": 0.8392857142857143,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.44642857142857145,
            "na_confidence_pct": 0.5535714285714286,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 36,
            "n_runs": 30,
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "avg_trade_size": 799.8027777777777,
            "avg_run_notional": 959.7633333333332,
            "retail_qty_pct": 0.032931121166415285,
            "mixed_qty_pct": 0.08924082453494218,
            "instit_qty_pct": 0.6400201106083458,
            "ambiguous_qty_pct": 0.23780794369029662,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23780794369029662,
            "retail_notional_pct": 0.03158070218699749,
            "mixed_notional_pct": 0.08557665257754515,
            "instit_notional_pct": 0.6517995755898155,
            "ambiguous_notional_pct": 0.2310430696456418,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2310430696456418,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.3,
            "run_ambiguous_pct": 0.3333333333333333,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8350000000000003,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 35,
            "n_runs": 26,
            "retail_pct": 0.3142857142857143,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.22857142857142856,
            "ambiguous_pct": 0.37142857142857144,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.37142857142857144,
            "avg_trade_size": 987.1171428571428,
            "avg_run_notional": 1328.8115384615385,
            "retail_qty_pct": 0.05393258426966292,
            "mixed_qty_pct": 0.03325842696629214,
            "instit_qty_pct": 0.3526292134831461,
            "ambiguous_qty_pct": 0.5601797752808989,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5601797752808989,
            "retail_notional_pct": 0.052351580793710974,
            "mixed_notional_pct": 0.03548572900596542,
            "instit_notional_pct": 0.36077929671105763,
            "ambiguous_notional_pct": 0.551383393489266,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.551383393489266,
            "run_retail_pct": 0.4230769230769231,
            "run_mixed_pct": 0.11538461538461539,
            "run_instit_pct": 0.11538461538461539,
            "run_ambiguous_pct": 0.34615384615384615,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.34615384615384615,
            "avg_feature_coverage": 0.7980769230769232,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5384615384615384,
            "na_confidence_pct": 0.46153846153846156,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "1A0",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.20643231114435304,
          "mixed_pct": 0.1256544502617801,
          "instit_pct": 0.3051608077786088,
          "ambiguous_pct": 0.3582647718773373,
          "unobservable_pct": 0.004487658937920718,
          "unclear_pct": 0.362752430815258,
          "retail_qty_pct": 0.07156822908474458,
          "mixed_qty_pct": 0.11536487006064419,
          "instit_qty_pct": 0.394318320837484,
          "ambiguous_qty_pct": 0.4082002918610951,
          "unobservable_qty_pct": 0.010548288156032088,
          "unclear_qty_pct": 0.41874858001712717,
          "retail_notional_pct": 0.07129096732432763,
          "mixed_notional_pct": 0.11527313543547212,
          "instit_notional_pct": 0.3969961764793246,
          "ambiguous_notional_pct": 0.4076791790569419,
          "unobservable_notional_pct": 0.008760541703933753,
          "unclear_notional_pct": 0.41643972076087565,
          "run_retail_pct": 0.3094944512946979,
          "run_mixed_pct": 0.13070283600493218,
          "run_instit_pct": 0.18495684340320592,
          "run_unclear_pct": 0.37484586929716396,
          "avg_trade_size": 2900.7557217651456,
          "avg_run_notional": 4782.1336621455,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.040690505548705305,
          "medium_confidence_pct": 0.08138101109741061,
          "low_confidence_pct": 0.3723797780517879,
          "na_confidence_pct": 0.5055487053020962,
          "avg_feature_coverage": 0.8382244143033291,
          "observable_run_pct": 0.9975339087546239,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "URR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21323529411764705,
          "mixed_pct": 0.08823529411764706,
          "instit_pct": 0.47794117647058826,
          "ambiguous_pct": 0.20588235294117646,
          "unobservable_pct": 0.014705882352941176,
          "unclear_pct": 0.22058823529411764,
          "retail_qty_pct": 0.029469122426868905,
          "mixed_qty_pct": 0.0552546045503792,
          "instit_qty_pct": 0.5690140845070423,
          "ambiguous_qty_pct": 0.3458288190682557,
          "unobservable_qty_pct": 0.0004333694474539545,
          "unclear_qty_pct": 0.34626218851570967,
          "retail_notional_pct": 0.03061025148378859,
          "mixed_notional_pct": 0.05750070992260333,
          "instit_notional_pct": 0.5696559946670211,
          "ambiguous_notional_pct": 0.34175170633170404,
          "unobservable_notional_pct": 0.00048133759488291813,
          "unclear_notional_pct": 0.34223304392658693,
          "run_retail_pct": 0.27358490566037735,
          "run_mixed_pct": 0.08490566037735849,
          "run_instit_pct": 0.3867924528301887,
          "run_unclear_pct": 0.25471698113207547,
          "avg_trade_size": 1825.4889705882354,
          "avg_run_notional": 2342.1367924528304,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institution-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.660377358490566,
          "na_confidence_pct": 0.33962264150943394,
          "avg_feature_coverage": 0.8235849056603772,
          "observable_run_pct": 0.9905660377358491,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LGH",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23529411764705882,
          "mixed_pct": 0.11199095022624435,
          "instit_pct": 0.24773755656108598,
          "ambiguous_pct": 0.40384615384615385,
          "unobservable_pct": 0.0011312217194570137,
          "unclear_pct": 0.40497737556561086,
          "retail_qty_pct": 0.07537468296057183,
          "mixed_qty_pct": 0.08819460456536776,
          "instit_qty_pct": 0.3635692875259396,
          "ambiguous_qty_pct": 0.47220813158096997,
          "unobservable_qty_pct": 0.0006532933671508723,
          "unclear_qty_pct": 0.47286142494812083,
          "retail_notional_pct": 0.0755404698082383,
          "mixed_notional_pct": 0.08705426110679335,
          "instit_notional_pct": 0.36398464637492667,
          "ambiguous_notional_pct": 0.47278696845210716,
          "unobservable_notional_pct": 0.0006336542579345567,
          "unclear_notional_pct": 0.4734206227100417,
          "run_retail_pct": 0.3434704830053667,
          "run_mixed_pct": 0.11806797853309481,
          "run_instit_pct": 0.1413237924865832,
          "run_unclear_pct": 0.39713774597495527,
          "avg_trade_size": 3566.006787330317,
          "avg_run_notional": 5639.266547406082,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.016100178890876567,
          "medium_confidence_pct": 0.11985688729874776,
          "low_confidence_pct": 0.3488372093023256,
          "na_confidence_pct": 0.5152057245080501,
          "avg_feature_coverage": 0.8250447227191413,
          "observable_run_pct": 0.998211091234347,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "579",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6759373712402142,
          "mixed_pct": 0.20333745364647712,
          "instit_pct": 0.0984754841367944,
          "ambiguous_pct": 0.022249690976514216,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.022249690976514216,
          "retail_qty_pct": 0.13165060333787515,
          "mixed_qty_pct": 0.4535239202531916,
          "instit_qty_pct": 0.37269275410885927,
          "ambiguous_qty_pct": 0.04213272230007401,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.04213272230007401,
          "retail_notional_pct": 0.12990432284765732,
          "mixed_notional_pct": 0.4692357064090839,
          "instit_notional_pct": 0.3573557347812388,
          "ambiguous_notional_pct": 0.043504235962020056,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.043504235962020056,
          "run_retail_pct": 0.8269131997945557,
          "run_mixed_pct": 0.14946070878274267,
          "run_instit_pct": 0.012069851052901901,
          "run_unclear_pct": 0.011556240369799691,
          "avg_trade_size": 932.5112896580141,
          "avg_run_notional": 1162.4062146892657,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.576271186440678,
          "medium_confidence_pct": 0.0968156137647663,
          "low_confidence_pct": 0.16589625064201335,
          "na_confidence_pct": 0.16101694915254236,
          "avg_feature_coverage": 0.8515023112480737,
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
            "ticker": "1A0",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.009345794392523364,
            "mixed_qty_pct": 0.056074766355140186,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.9345794392523364,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.9345794392523364,
            "retail_notional_pct": 0.009345794392523364,
            "mixed_notional_pct": 0.056074766355140186,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.9345794392523364,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.9345794392523364,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.25,
            "avg_trade_size": 802.5,
            "avg_run_notional": 802.5,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8125,
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
            "avg_trade_size": 112.5,
            "avg_run_notional": 112.5,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6785714285714286,
            "mixed_pct": 0.21428571428571427,
            "instit_pct": 0.10714285714285714,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0193527837941139,
            "mixed_qty_pct": 0.34362339151484267,
            "instit_qty_pct": 0.6370238246910435,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.02563832076594272,
            "mixed_notional_pct": 0.341420909831258,
            "instit_notional_pct": 0.6329407694027992,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8260869565217391,
            "run_mixed_pct": 0.13043478260869565,
            "run_instit_pct": 0.043478260869565216,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 846.3892857142857,
            "avg_run_notional": 1030.3869565217394,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8695652173913043,
            "na_confidence_pct": 0.13043478260869565,
            "avg_feature_coverage": 0.8500000000000003,
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
            "retail_pct": 0.24285714285714285,
            "mixed_pct": 0.11428571428571428,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.35714285714285715,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35714285714285715,
            "retail_qty_pct": 0.04527073157922378,
            "mixed_qty_pct": 0.05461898009558321,
            "instit_qty_pct": 0.473452024578541,
            "ambiguous_qty_pct": 0.42665826374665194,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.42665826374665194,
            "retail_notional_pct": 0.04301858124149283,
            "mixed_notional_pct": 0.055870342819157356,
            "instit_notional_pct": 0.4943148365040676,
            "ambiguous_notional_pct": 0.4067962394352822,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4067962394352822,
            "run_retail_pct": 0.3090909090909091,
            "run_mixed_pct": 0.12727272727272726,
            "run_instit_pct": 0.21818181818181817,
            "run_unclear_pct": 0.34545454545454546,
            "avg_trade_size": 902.6,
            "avg_run_notional": 1148.7636363636364,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5272727272727272,
            "na_confidence_pct": 0.4727272727272727,
            "avg_feature_coverage": 0.8172727272727276,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.21052631578947367,
            "mixed_pct": 0.12631578947368421,
            "instit_pct": 0.23157894736842105,
            "ambiguous_pct": 0.43157894736842106,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.43157894736842106,
            "retail_qty_pct": 0.03692707366858415,
            "mixed_qty_pct": 0.047040267210985344,
            "instit_qty_pct": 0.46214511041009465,
            "ambiguous_qty_pct": 0.4538875487103359,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4538875487103359,
            "retail_notional_pct": 0.037438294993813445,
            "mixed_notional_pct": 0.048334339451387376,
            "instit_notional_pct": 0.46607455548848103,
            "ambiguous_notional_pct": 0.4481528100663182,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4481528100663182,
            "run_retail_pct": 0.24050632911392406,
            "run_mixed_pct": 0.1518987341772152,
            "run_instit_pct": 0.17721518987341772,
            "run_unclear_pct": 0.43037974683544306,
            "avg_trade_size": 2458.642105263158,
            "avg_run_notional": 2956.5949367088606,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4177215189873418,
            "na_confidence_pct": 0.5822784810126582,
            "avg_feature_coverage": 0.8215189873417722,
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
            "retail_pct": 0.6730593607305936,
            "mixed_pct": 0.19908675799086759,
            "instit_pct": 0.11598173515981736,
            "ambiguous_pct": 0.011872146118721462,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.011872146118721462,
            "retail_qty_pct": 0.1385020936601235,
            "mixed_qty_pct": 0.405693616507029,
            "instit_qty_pct": 0.4066822796968794,
            "ambiguous_qty_pct": 0.0491220101359681,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0491220101359681,
            "retail_notional_pct": 0.13669093816139677,
            "mixed_notional_pct": 0.4321461182014749,
            "instit_notional_pct": 0.3846965303978764,
            "ambiguous_notional_pct": 0.046466413239251964,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.046466413239251964,
            "run_retail_pct": 0.8478513356562137,
            "run_mixed_pct": 0.13821138211382114,
            "run_instit_pct": 0.008130081300813009,
            "run_unclear_pct": 0.005807200929152149,
            "avg_trade_size": 834.0329680365296,
            "avg_run_notional": 1060.703948896632,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6178861788617886,
            "medium_confidence_pct": 0.09059233449477352,
            "low_confidence_pct": 0.14750290360046459,
            "na_confidence_pct": 0.1440185830429733,
            "avg_feature_coverage": 0.8522648083623692,
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
            "retail_pct": 0.1864406779661017,
            "mixed_pct": 0.1638418079096045,
            "instit_pct": 0.2937853107344633,
            "ambiguous_pct": 0.3559322033898305,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3559322033898305,
            "retail_qty_pct": 0.06059007167040408,
            "mixed_qty_pct": 0.1057028536252913,
            "instit_qty_pct": 0.42092072285978105,
            "ambiguous_qty_pct": 0.4127863518445236,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4127863518445236,
            "retail_notional_pct": 0.0608414405208463,
            "mixed_notional_pct": 0.11013593384053931,
            "instit_notional_pct": 0.4204859385541332,
            "ambiguous_notional_pct": 0.40853668708448115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40853668708448115,
            "run_retail_pct": 0.2619047619047619,
            "run_mixed_pct": 0.14285714285714285,
            "run_instit_pct": 0.23809523809523808,
            "run_unclear_pct": 0.35714285714285715,
            "avg_trade_size": 1456.3,
            "avg_run_notional": 2045.754761904762,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8285714285714283,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.23529411764705882,
            "mixed_pct": 0.11199095022624435,
            "instit_pct": 0.24773755656108598,
            "ambiguous_pct": 0.40384615384615385,
            "unobservable_pct": 0.0011312217194570137,
            "unclear_pct": 0.40497737556561086,
            "retail_qty_pct": 0.07537468296057183,
            "mixed_qty_pct": 0.08819460456536776,
            "instit_qty_pct": 0.3635692875259396,
            "ambiguous_qty_pct": 0.47220813158096997,
            "unobservable_qty_pct": 0.0006532933671508723,
            "unclear_qty_pct": 0.47286142494812083,
            "retail_notional_pct": 0.0755404698082383,
            "mixed_notional_pct": 0.08705426110679335,
            "instit_notional_pct": 0.36398464637492667,
            "ambiguous_notional_pct": 0.47278696845210716,
            "unobservable_notional_pct": 0.0006336542579345567,
            "unclear_notional_pct": 0.4734206227100417,
            "run_retail_pct": 0.3434704830053667,
            "run_mixed_pct": 0.11806797853309481,
            "run_instit_pct": 0.1413237924865832,
            "run_unclear_pct": 0.39713774597495527,
            "avg_trade_size": 3566.006787330317,
            "avg_run_notional": 5639.266547406082,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.016100178890876567,
            "medium_confidence_pct": 0.11985688729874776,
            "low_confidence_pct": 0.3488372093023256,
            "na_confidence_pct": 0.5152057245080501,
            "avg_feature_coverage": 0.8250447227191413,
            "observable_run_pct": 0.998211091234347,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6769574944071588,
            "mixed_pct": 0.20089485458612977,
            "instit_pct": 0.10335570469798658,
            "ambiguous_pct": 0.01879194630872483,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.01879194630872483,
            "retail_qty_pct": 0.1618984479789661,
            "mixed_qty_pct": 0.45048068930277024,
            "instit_qty_pct": 0.34411908780699996,
            "ambiguous_qty_pct": 0.0435017749112637,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0435017749112637,
            "retail_notional_pct": 0.1588098522809511,
            "mixed_notional_pct": 0.4681645069538089,
            "instit_notional_pct": 0.330886088965296,
            "ambiguous_notional_pct": 0.04213955179994408,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.04213955179994408,
            "run_retail_pct": 0.8278551532033426,
            "run_mixed_pct": 0.14930362116991644,
            "run_instit_pct": 0.013370473537604457,
            "run_unclear_pct": 0.00947075208913649,
            "avg_trade_size": 845.895033557047,
            "avg_run_notional": 1053.245348189415,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5298050139275766,
            "medium_confidence_pct": 0.09693593314763231,
            "low_confidence_pct": 0.21448467966573817,
            "na_confidence_pct": 0.15877437325905291,
            "avg_feature_coverage": 0.8515041782729803,
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
            "retail_pct": 0.20643231114435304,
            "mixed_pct": 0.1256544502617801,
            "instit_pct": 0.3051608077786088,
            "ambiguous_pct": 0.3582647718773373,
            "unobservable_pct": 0.004487658937920718,
            "unclear_pct": 0.362752430815258,
            "retail_qty_pct": 0.07156822908474458,
            "mixed_qty_pct": 0.11536487006064419,
            "instit_qty_pct": 0.394318320837484,
            "ambiguous_qty_pct": 0.4082002918610951,
            "unobservable_qty_pct": 0.010548288156032088,
            "unclear_qty_pct": 0.41874858001712717,
            "retail_notional_pct": 0.07129096732432763,
            "mixed_notional_pct": 0.11527313543547212,
            "instit_notional_pct": 0.3969961764793246,
            "ambiguous_notional_pct": 0.4076791790569419,
            "unobservable_notional_pct": 0.008760541703933753,
            "unclear_notional_pct": 0.41643972076087565,
            "run_retail_pct": 0.3094944512946979,
            "run_mixed_pct": 0.13070283600493218,
            "run_instit_pct": 0.18495684340320592,
            "run_unclear_pct": 0.37484586929716396,
            "avg_trade_size": 2900.7557217651456,
            "avg_run_notional": 4782.1336621455,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.040690505548705305,
            "medium_confidence_pct": 0.08138101109741061,
            "low_confidence_pct": 0.3723797780517879,
            "na_confidence_pct": 0.5055487053020962,
            "avg_feature_coverage": 0.8382244143033291,
            "observable_run_pct": 0.9975339087546239,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "URR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21323529411764705,
            "mixed_pct": 0.08823529411764706,
            "instit_pct": 0.47794117647058826,
            "ambiguous_pct": 0.20588235294117646,
            "unobservable_pct": 0.014705882352941176,
            "unclear_pct": 0.22058823529411764,
            "retail_qty_pct": 0.029469122426868905,
            "mixed_qty_pct": 0.0552546045503792,
            "instit_qty_pct": 0.5690140845070423,
            "ambiguous_qty_pct": 0.3458288190682557,
            "unobservable_qty_pct": 0.0004333694474539545,
            "unclear_qty_pct": 0.34626218851570967,
            "retail_notional_pct": 0.03061025148378859,
            "mixed_notional_pct": 0.05750070992260333,
            "instit_notional_pct": 0.5696559946670211,
            "ambiguous_notional_pct": 0.34175170633170404,
            "unobservable_notional_pct": 0.00048133759488291813,
            "unclear_notional_pct": 0.34223304392658693,
            "run_retail_pct": 0.27358490566037735,
            "run_mixed_pct": 0.08490566037735849,
            "run_instit_pct": 0.3867924528301887,
            "run_unclear_pct": 0.25471698113207547,
            "avg_trade_size": 1825.4889705882354,
            "avg_run_notional": 2342.1367924528304,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.660377358490566,
            "na_confidence_pct": 0.33962264150943394,
            "avg_feature_coverage": 0.8235849056603772,
            "observable_run_pct": 0.9905660377358491,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23529411764705882,
            "mixed_pct": 0.11199095022624435,
            "instit_pct": 0.24773755656108598,
            "ambiguous_pct": 0.40384615384615385,
            "unobservable_pct": 0.0011312217194570137,
            "unclear_pct": 0.40497737556561086,
            "retail_qty_pct": 0.07537468296057183,
            "mixed_qty_pct": 0.08819460456536776,
            "instit_qty_pct": 0.3635692875259396,
            "ambiguous_qty_pct": 0.47220813158096997,
            "unobservable_qty_pct": 0.0006532933671508723,
            "unclear_qty_pct": 0.47286142494812083,
            "retail_notional_pct": 0.0755404698082383,
            "mixed_notional_pct": 0.08705426110679335,
            "instit_notional_pct": 0.36398464637492667,
            "ambiguous_notional_pct": 0.47278696845210716,
            "unobservable_notional_pct": 0.0006336542579345567,
            "unclear_notional_pct": 0.4734206227100417,
            "run_retail_pct": 0.3434704830053667,
            "run_mixed_pct": 0.11806797853309481,
            "run_instit_pct": 0.1413237924865832,
            "run_unclear_pct": 0.39713774597495527,
            "avg_trade_size": 3566.006787330317,
            "avg_run_notional": 5639.266547406082,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.016100178890876567,
            "medium_confidence_pct": 0.11985688729874776,
            "low_confidence_pct": 0.3488372093023256,
            "na_confidence_pct": 0.5152057245080501,
            "avg_feature_coverage": 0.8250447227191413,
            "observable_run_pct": 0.998211091234347,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "579",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6759373712402142,
            "mixed_pct": 0.20333745364647712,
            "instit_pct": 0.0984754841367944,
            "ambiguous_pct": 0.022249690976514216,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.022249690976514216,
            "retail_qty_pct": 0.13165060333787515,
            "mixed_qty_pct": 0.4535239202531916,
            "instit_qty_pct": 0.37269275410885927,
            "ambiguous_qty_pct": 0.04213272230007401,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.04213272230007401,
            "retail_notional_pct": 0.12990432284765732,
            "mixed_notional_pct": 0.4692357064090839,
            "instit_notional_pct": 0.3573557347812388,
            "ambiguous_notional_pct": 0.043504235962020056,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.043504235962020056,
            "run_retail_pct": 0.8269131997945557,
            "run_mixed_pct": 0.14946070878274267,
            "run_instit_pct": 0.012069851052901901,
            "run_unclear_pct": 0.011556240369799691,
            "avg_trade_size": 932.5112896580141,
            "avg_run_notional": 1162.4062146892657,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.576271186440678,
            "medium_confidence_pct": 0.0968156137647663,
            "low_confidence_pct": 0.16589625064201335,
            "na_confidence_pct": 0.16101694915254236,
            "avg_feature_coverage": 0.8515023112480737,
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
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
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
          "d2": "MOMENTUM_REACTIVE",
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
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1551,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-09T07:43:08.959200",
          "price": 0.028,
          "size": 39500.0,
          "notional": 1106.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1550,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-09T07:43:08.959200",
          "price": 0.028,
          "size": 26500.0,
          "notional": 742.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1550,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
          "d2": "MOMENTUM_REACTIVE",
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
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-09T02:18:16.458900",
          "price": 0.029,
          "size": 5000.0,
          "notional": 145.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1548,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-09T02:18:16.458900",
          "price": 0.029,
          "size": 10000.0,
          "notional": 290.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1548,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-04T02:04:14.666900",
          "price": 0.032,
          "size": 31300.0,
          "notional": 1001.6,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-04T02:04:14.666900",
          "price": 0.033,
          "size": 200000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1542,
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
      "total_trades": 1336,
      "price_moving_trades": 271,
      "pct_price_moving": 20.28443113772455,
      "all_movers": {
        "count": 271,
        "avg_size": 2606.122878228782,
        "median_size": 1518.0,
        "retail_count": 82,
        "mixed_count": 40,
        "institutional_count": 67,
        "ambiguous_count": 76,
        "unobservable_count": 6,
        "retail_pct": 30.25830258302583,
        "mixed_pct": 14.760147601476014,
        "instit_pct": 24.723247232472325,
        "unclear_pct": 30.258302583025827
      },
      "positive_movers": {
        "count": 131,
        "avg_size": 2302.2015267175575,
        "median_size": 380.0,
        "retail_count": 48,
        "mixed_count": 13,
        "institutional_count": 33,
        "ambiguous_count": 35,
        "unobservable_count": 2,
        "retail_pct": 36.6412213740458,
        "mixed_pct": 9.923664122137405,
        "instit_pct": 25.190839694656486,
        "unclear_pct": 28.24427480916031
      },
      "negative_movers": {
        "count": 140,
        "avg_size": 2890.506428571429,
        "median_size": 2158.0,
        "retail_count": 34,
        "mixed_count": 27,
        "institutional_count": 34,
        "ambiguous_count": 41,
        "unobservable_count": 4,
        "retail_pct": 24.285714285714285,
        "mixed_pct": 19.28571428571429,
        "instit_pct": 24.285714285714285,
        "unclear_pct": 32.142857142857146
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
          },
          {
            "date": "2025-10-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8531900,
            "close": 0.042,
            "return": -0.0454545454545453
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
          "avg_short_ratio": 0.0012960800613268729,
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
          "opening": 0.012037590810162216,
          "continuous": 0.9460590479752768,
          "closing": 0.019606387658779752,
          "auctions": 0.05394095202472303,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.6697308338428393,
        "1M": 0.6392784958714518,
        "3M": 0.7272428362743085,
        "6M": 0.6092846958637844
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0189
        },
        {
          "time": "09:00",
          "avg_share": 0.1502
        },
        {
          "time": "09:30",
          "avg_share": 0.0869
        },
        {
          "time": "10:00",
          "avg_share": 0.0397
        },
        {
          "time": "10:30",
          "avg_share": 0.0231
        },
        {
          "time": "11:00",
          "avg_share": 0.0482
        },
        {
          "time": "11:30",
          "avg_share": 0.02
        },
        {
          "time": "12:30",
          "avg_share": 0.0927
        },
        {
          "time": "13:00",
          "avg_share": 0.0994
        },
        {
          "time": "13:30",
          "avg_share": 0.0472
        },
        {
          "time": "14:00",
          "avg_share": 0.0481
        },
        {
          "time": "14:30",
          "avg_share": 0.0343
        },
        {
          "time": "15:00",
          "avg_share": 0.0777
        },
        {
          "time": "15:30",
          "avg_share": 0.0407
        },
        {
          "time": "16:00",
          "avg_share": 0.0947
        },
        {
          "time": "16:30",
          "avg_share": 0.0632
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
          "auctions_pct": 18.28471900897753,
          "hhi": 0.4490399147774932,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LGH",
          "auctions_pct": 16.383754891551,
          "hhi": 0.5604172253142731,
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
