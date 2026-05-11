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
      "ticker": "579",
      "name": "Oceanus",
      "marketCap": 77288239.09200001,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5EV",
      "name": "Hosen",
      "marketCap": 22743059.220000003,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "AAJ",
      "name": "SunMoonFood",
      "marketCap": 21678541.752,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "K03",
      "name": "Khong Guan",
      "marketCap": 22844080.2,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BAC",
      "name": "Camsing Hc",
      "marketCap": 3420000.0,
      "sector": "Food Distribution",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "MV4",
      "name": "Mewah Intl",
      "marketCap": 450200232.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BNE",
      "name": "Kencana Agri",
      "marketCap": 156421091.465,
      "sector": "Farm Products",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5JS",
      "name": "Indofood Agri",
      "marketCap": 572320857.3,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BEW",
      "name": "JB Foods",
      "marketCap": 225234259.9,
      "sector": "Confectioners",
      "industry": "Consumer Defensive"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "579",
    "company": "Oceanus",
    "asof_date": "2026-04-22",
    "industry": "Consumer Defensive",
    "sector": "Food Distribution",
    "market_cap_display": "77.3M",
    "market_cap_category": "small",
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
          "score_pca": 39.42652329749104,
          "score_pca_percentile": 39.42652329749104,
          "rank_pca": 339,
          "total": 558,
          "adv_notional_sgd": 3760.5,
          "adv_volume_shares": 1253500.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 4.986219199551295e-05,
          "votes": 6.0,
          "trades": 6.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 2.7426497078697025
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5081368084926998,
          "loadings": {
            "log_adv": 0.5599042407126797,
            "log_trades": 0.5174042040327663,
            "log_turnover": 0.519897033859592,
            "neg_spread": 0.36894936125004163,
            "neg_amihud": 0.030917992040179598,
            "neg_vol": -0.10690019488553518
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
          "peer_median_adv": 4206.0,
          "peer_median_score_pca": 39.33691756272401,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.1515690783300552,
          "peer_median_spread_pct": 0.047444551591128294,
          "peer_median_spread_ticks": 2.3380952380952382,
          "peer_median_amihud": 2.3202071480942085e-07,
          "peer_median_turnover_ratio": 4.7804321977756704e-05,
          "target_vs_peer": {
            "score_pca_delta": 0.09,
            "adv_delta_pct": -10.6,
            "trades_delta_pct": 20.0,
            "volatility_delta_pct": -1709.5,
            "spread_pct_delta_pct": -502.21,
            "spread_ticks_delta_pct": -57.23,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 4.3
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 39.42652329749104,
            "rank_pca": 339,
            "adv": 3760.5,
            "trades": 6.0,
            "volatility": 2.7426497078697025,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 4.986219199551295e-05,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 65.94982078853047,
            "rank_pca": 191,
            "adv": 69765.90000000001,
            "trades": 26.0,
            "volatility": 0.28042061495463966,
            "spread_pct": 0.022603845589314563,
            "spread_ticks": 1.54,
            "amihud": 6.515295503182129e-07,
            "turnover_ratio": 0.007264300603038253,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 37.81362007168459,
            "rank_pca": 348,
            "adv": 322.0,
            "trades": 9.0,
            "volatility": 0.42378592656177866,
            "spread_pct": 0.058823529411764754,
            "spread_ticks": 1.3636363636363635,
            "amihud": 0.0,
            "turnover_ratio": 5.357482722453063e-05,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 18.817204301075268,
            "rank_pca": 454,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.06915254237288129,
            "spread_ticks": 12.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 1.4336917562724014,
            "rank_pca": 551,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.9447852760736196,
            "spread_ticks": 38.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 40.86021505376344,
            "rank_pca": 331,
            "adv": 6300.0,
            "trades": 4.0,
            "volatility": 0.15758397727538676,
            "spread_pct": 0.036065573770491834,
            "spread_ticks": 2.2,
            "amihud": 2.6021337496747362e-06,
            "turnover_ratio": 2.824172214245303e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 49.6415770609319,
            "rank_pca": 282,
            "adv": 20330.0,
            "trades": 6.0,
            "volatility": 0.27111628588657377,
            "spread_pct": 0.023402340234023426,
            "spread_ticks": 2.4761904761904763,
            "amihud": 4.640414296188417e-07,
            "turnover_ratio": 0.0005955871537179881,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 56.09318996415771,
            "rank_pca": 246,
            "adv": 40803.0,
            "trades": 26.0,
            "volatility": 0.10895676951592004,
            "spread_pct": 0.017320427916454422,
            "spread_ticks": 1.511111111111111,
            "amihud": 0.0,
            "turnover_ratio": 0.00023652436652212228,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 34.229390681003586,
            "rank_pca": 368,
            "adv": 2112.0,
            "trades": 2.0,
            "volatility": 0.14555417938472365,
            "spread_pct": 0.08348909657320874,
            "spread_ticks": 10.578947368421053,
            "amihud": 0.0,
            "turnover_ratio": 4.203381673098279e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31694019970444953,
              "median": 0.1297110289777006,
              "min": 0.0,
              "max": 10.025021556239816,
              "p5": 0.0,
              "p95": 1.189258443237123,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3583656.121909763,
              "median": 19551.35,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 18284898.56049743,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10935471772383583,
              "median": 0.027562238215492463,
              "min": 0.00019851775911168494,
              "max": 1.2605042016806725,
              "p5": 0.003258120054827317,
              "p95": 0.5726492177898828,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.017464840539835595,
              "median": 0.00036778028976088733,
              "min": 0.0,
              "max": 4.365217661180873,
              "p5": 0.0,
              "p95": 0.021538958870622384,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.000255961901168388,
              "median": 2.1845310781464287e-08,
              "min": 0.0,
              "max": 0.07246376811594203,
              "p5": 0.0,
              "p95": 4.879762526821346e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 506.0698924731183,
              "median": 9.0,
              "min": 0.0,
              "max": 14935.0,
              "p5": 0.0,
              "p95": 2811.3499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6070707351620134,
              "median": 0.23799438827029945,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.0,
              "p95": 2.1629337625427216,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1175028.0666666667,
              "median": 2041.25,
              "min": 0.0,
              "max": 6976320.0,
              "p5": 0.0,
              "p95": 5249681.475,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.23107787976629987,
              "median": 0.06398803589232302,
              "min": 0.005387799435933322,
              "max": 0.9447852760736196,
              "p5": 0.009691810974278632,
              "p95": 0.7800175284837861,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015679884511413465,
              "median": 5.171850961002179e-05,
              "min": 0.0,
              "max": 0.007264300603038253,
              "p5": 0.0,
              "p95": 0.005958273723426135,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6325374003688452e-07,
              "median": 7.427049146626138e-10,
              "min": 0.0,
              "max": 6.515295503182129e-07,
              "p5": 0.0,
              "p95": 5.540229292448795e-07,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 334.8333333333333,
              "median": 7.5,
              "min": 0.0,
              "max": 1968.0,
              "p5": 0.0,
              "p95": 1482.5,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 17454.112500000003,
              "median": 4206.0,
              "min": 0.0,
              "max": 69765.90000000001,
              "p5": 0.0,
              "p95": 59628.884999999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9.125,
              "median": 5.0,
              "min": 0.0,
              "max": 26.0,
              "p5": 0.0,
              "p95": 26.0,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1734272191973778,
              "median": 0.1515690783300552,
              "min": 0.0,
              "max": 0.42378592656177866,
              "p5": 0.0,
              "p95": 0.37360806749927994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1569553289927198,
              "median": 0.047444551591128294,
              "min": 0.017320427916454422,
              "max": 0.9447852760736196,
              "p5": 0.01916962410195547,
              "p95": 0.6433316132484754,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.864985664919876,
              "median": 2.3380952380952382,
              "min": 1.3636363636363635,
              "max": 38.5,
              "p5": 1.4152525252525252,
              "p95": 29.487499999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.196174549352985e-07,
              "median": 2.3202071480942085e-07,
              "min": 0.0,
              "max": 2.6021337496747362e-06,
              "p5": 0.0,
              "p95": 2.1144826998356055e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010275328111720413,
              "median": 4.7804321977756704e-05,
              "min": 0.0,
              "max": 0.007264300603038253,
              "p5": 0.0,
              "p95": 0.004930250895776157,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.0024406468225245392,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.0024406468225245392,
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
          "score_pca": 33.51254480286738,
          "score_pca_percentile": 33.51254480286738,
          "rank_pca": 372,
          "total": 558,
          "adv_notional_sgd": 20722.5,
          "adv_volume_shares": 6907500.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00027476911943279277,
          "votes": 17.0,
          "trades": 17.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 3.453259329966401
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5308884786443314,
          "loadings": {
            "log_adv": 0.54112514450416,
            "log_trades": 0.49501304412251546,
            "log_turnover": 0.492103716726118,
            "neg_spread": 0.4148180499518039,
            "neg_amihud": 0.08653010526553848,
            "neg_vol": 0.20104258861039945
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
          "peer_median_adv": 3797.25,
          "peer_median_score_pca": 44.53405017921148,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.4189044920744456,
          "peer_median_spread_pct": 0.045915995194120804,
          "peer_median_spread_ticks": 3.1097457627118645,
          "peer_median_amihud": 2.2158550122178557e-07,
          "peer_median_turnover_ratio": 0.00012176067811809895,
          "target_vs_peer": {
            "score_pca_delta": -11.02,
            "adv_delta_pct": 445.7,
            "trades_delta_pct": 385.71,
            "volatility_delta_pct": -724.35,
            "spread_pct_delta_pct": -522.25,
            "spread_ticks_delta_pct": -67.84,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 125.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 33.51254480286738,
            "rank_pca": 372,
            "adv": 20722.5,
            "trades": 17.0,
            "volatility": 3.453259329966401,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00027476911943279277,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 42.11469534050179,
            "rank_pca": 324,
            "adv": 1320.0,
            "trades": 2.0,
            "volatility": 0.2102205390522293,
            "spread_pct": 0.046124763705103995,
            "spread_ticks": 3.05,
            "amihud": 6.515295503182129e-07,
            "turnover_ratio": 0.00014369104150011377,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 45.51971326164875,
            "rank_pca": 305,
            "adv": 2692.5,
            "trades": 5.0,
            "volatility": 0.5048875444164649,
            "spread_pct": 0.0721649484536083,
            "spread_ticks": 1.6470588235294117,
            "amihud": 0.0,
            "turnover_ratio": 0.00041214349229156777,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 22.043010752688172,
            "rank_pca": 436,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5471846026847506,
            "spread_pct": 0.06520247083047355,
            "spread_ticks": 11.875,
            "amihud": 3.4583271577491355e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 1.971326164874552,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.9538461538461537,
            "spread_ticks": 39.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 44.2652329749104,
            "rank_pca": 312,
            "adv": 6300.0,
            "trades": 4.0,
            "volatility": 0.4490746026880129,
            "spread_pct": 0.04197390811117417,
            "spread_ticks": 2.642857142857143,
            "amihud": 9.077546941810745e-08,
            "turnover_ratio": 2.6358940666289495e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 62.903225806451616,
            "rank_pca": 208,
            "adv": 48222.0,
            "trades": 16.0,
            "volatility": 0.5146865908544362,
            "spread_pct": 0.03244954491491891,
            "spread_ticks": 3.169491525423729,
            "amihud": 2.2158550122178557e-07,
            "turnover_ratio": 0.0016080853150385677,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 62.00716845878136,
            "rank_pca": 213,
            "adv": 39440.0,
            "trades": 21.0,
            "volatility": 0.23677749841954124,
            "spread_pct": 0.017316017316017333,
            "spread_ticks": 1.434782608695652,
            "amihud": 9.901772405469945e-08,
            "turnover_ratio": 0.00023400278478947706,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 44.80286738351255,
            "rank_pca": 309,
            "adv": 4902.0,
            "trades": 3.0,
            "volatility": 0.38873438146087824,
            "spread_pct": 0.04570722668313762,
            "spread_ticks": 6.166666666666667,
            "amihud": 5.754249801190595e-07,
            "turnover_ratio": 9.983031473608412e-05,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6546032144529433,
              "median": 0.3644102249269763,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.034641016151377484,
              "p95": 2.1032251853534554,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3072000.303303545,
              "median": 12682.0,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10804473253907534,
              "median": 0.032305052955585445,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.0033102788450015434,
              "p95": 0.4878147774548017,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038737217776434996,
              "median": 0.00021428318677128654,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011497368421794506,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00033531729708592906,
              "median": 1.2973969211239899e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011077719705768502,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 464.3046594982079,
              "median": 6.0,
              "min": 0.0,
              "max": 10918.0,
              "p5": 0.0,
              "p95": 2735.899999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8403347214317637,
              "median": 0.4156719284436009,
              "min": 0.0,
              "max": 3.453259329966401,
              "p5": 0.05255513476305732,
              "p95": 2.7267406481459884,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 518764.75,
              "median": 2006.25,
              "min": 0.0,
              "max": 3087853.5,
              "p5": 0.0,
              "p95": 2321070.75,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.23817007860786243,
              "median": 0.06868370964204093,
              "min": 0.00596784909754957,
              "max": 0.9538461538461537,
              "p5": 0.016007077749438176,
              "p95": 0.7868131868131867,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003042443013704245,
              "median": 0.00020923008046645327,
              "min": 0.0,
              "max": 0.000994862154998073,
              "p5": 0.0,
              "p95": 0.0008491824893214466,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.047288957437938e-06,
              "median": 1.6436593801274125e-09,
              "min": 0.0,
              "max": 3.4583271577491355e-05,
              "p5": 0.0,
              "p95": 2.779692317205672e-05,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 218.5,
              "median": 3.5,
              "min": 0.0,
              "max": 1287.0,
              "p5": 0.0,
              "p95": 969.5,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 12859.5625,
              "median": 3797.25,
              "min": 0.0,
              "max": 48222.0,
              "p5": 0.0,
              "p95": 45148.299999999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6.375,
              "median": 3.5,
              "min": 0.0,
              "max": 21.0,
              "p5": 0.0,
              "p95": 19.249999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35644571994703916,
              "median": 0.4189044920744456,
              "min": 0.0,
              "max": 0.5471846026847506,
              "p5": 0.07357718866828025,
              "p95": 0.5358102985441405,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15934812923257347,
              "median": 0.045915995194120804,
              "min": 0.017316017316017333,
              "max": 0.9538461538461537,
              "p5": 0.022612751975632884,
              "p95": 0.6452577319587623,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.716982095896576,
              "median": 3.1097457627118645,
              "min": 1.434782608695652,
              "max": 39.75,
              "p5": 1.509079283887468,
              "p95": 29.993749999999984,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.174514971803316e-06,
              "median": 2.2158550122178557e-07,
              "min": 0.0,
              "max": 3.4583271577491355e-05,
              "p5": 2.7232640825432238e-08,
              "p95": 2.4403748969339388e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00031551398612776247,
              "median": 0.00012176067811809895,
              "min": 0.0,
              "max": 0.0016080853150385677,
              "p5": 0.0,
              "p95": 0.001189505677077117,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0,
            "market": 0.03334237016264918,
            "sector": -0.006894752011629257,
            "peers": 0.0005395985411023041,
            "vs_market": -0.03334237016264918,
            "vs_sector": 0.006894752011629257,
            "vs_peers": -0.0005395985411023041
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 28.136200716845877,
          "score_pca_percentile": 28.136200716845877,
          "rank_pca": 402,
          "total": 558,
          "adv_notional_sgd": 13926.300000000001,
          "adv_volume_shares": 3870700.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00015397015281773591,
          "votes": 17.0,
          "trades": 17.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 3.1851469809606243
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5702300451625517,
          "loadings": {
            "log_adv": 0.5103413219933719,
            "log_trades": 0.45829603514268935,
            "log_turnover": 0.46743992820008823,
            "neg_spread": 0.42817655500001306,
            "neg_amihud": 0.26415287674843,
            "neg_vol": 0.24063351432561012
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
          "peer_median_adv": 5437.5,
          "peer_median_score_pca": 42.1146953405018,
          "peer_median_trades": 3.0,
          "peer_median_volatility": 0.3844842646504236,
          "peer_median_spread_pct": 0.04245511988212189,
          "peer_median_spread_ticks": 2.89010989010989,
          "peer_median_amihud": 6.321077263240571e-07,
          "peer_median_turnover_ratio": 0.0001492102067321911,
          "target_vs_peer": {
            "score_pca_delta": -13.98,
            "adv_delta_pct": 156.1,
            "trades_delta_pct": 466.67,
            "volatility_delta_pct": -728.42,
            "spread_pct_delta_pct": -572.98,
            "spread_ticks_delta_pct": -65.4,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 3.19
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 28.136200716845877,
            "rank_pca": 402,
            "adv": 13926.300000000001,
            "trades": 17.0,
            "volatility": 3.1851469809606243,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00015397015281773591,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 42.29390681003584,
            "rank_pca": 323,
            "adv": 3250.0,
            "trades": 2.0,
            "volatility": 0.4086968266962082,
            "spread_pct": 0.04376243250923562,
            "spread_ticks": 2.923076923076923,
            "amihud": 1.461555076343199e-06,
            "turnover_ratio": 0.00035922760375028446,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 34.946236559139784,
            "rank_pca": 364,
            "adv": 322.0,
            "trades": 2.0,
            "volatility": 0.48179472265615486,
            "spread_pct": 0.0721649484536083,
            "spread_ticks": 1.6470588235294117,
            "amihud": 0.0,
            "turnover_ratio": 5.357482722453063e-05,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 20.967741935483872,
            "rank_pca": 442,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3560346027370948,
            "spread_pct": 0.07502534640081103,
            "spread_ticks": 13.8,
            "amihud": 7.083087846982873e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 2.5089605734767026,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.23255813953488363,
            "spread_pct": 0.9465930018416205,
            "spread_ticks": 38.75,
            "amihud": 1.1652610511027564e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 41.935483870967744,
            "rank_pca": 325,
            "adv": 7625.0,
            "trades": 4.0,
            "volatility": 0.47993608263999277,
            "spread_pct": 0.04114780725500816,
            "spread_ticks": 2.48,
            "amihud": 8.183043428945068e-07,
            "turnover_ratio": 3.362109778863456e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 55.7347670250896,
            "rank_pca": 248,
            "adv": 35301.0,
            "trades": 12.0,
            "volatility": 0.7693207261579594,
            "spread_pct": 0.03870967741935487,
            "spread_ticks": 2.857142857142857,
            "amihud": 4.4591110975360744e-07,
            "turnover_ratio": 0.0014999392266003015,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 60.752688172043015,
            "rank_pca": 220,
            "adv": 39440.0,
            "trades": 21.0,
            "volatility": 0.3529301837278487,
            "spread_pct": 0.018270401948842826,
            "spread_ticks": 1.4285714285714286,
            "amihud": 1.2690064118932018e-07,
            "turnover_ratio": 0.0002448455862398515,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 52.867383512544805,
            "rank_pca": 264,
            "adv": 19350.0,
            "trades": 5.0,
            "volatility": 0.36027170260463903,
            "spread_pct": 0.02400355608238258,
            "spread_ticks": 3.2222222222222223,
            "amihud": 4.175466462235825e-07,
            "turnover_ratio": 0.00039406703185296363,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6903837679229351,
              "median": 0.45994904950014914,
              "min": 0.0,
              "max": 8.153764220759754,
              "p5": 0.15786982120357024,
              "p95": 2.2148819314524486,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3222122.9176949575,
              "median": 11891.5,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13715674.299999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09930098808874607,
              "median": 0.029350274121331243,
              "min": 0.00026514881605562373,
              "max": 1.3542204201990415,
              "p5": 0.0035651151742438986,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005823629600362155,
              "median": 0.0002995529559330408,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.00995631739909109,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1482546665408028e-05,
              "median": 1.4181787687780857e-07,
              "min": 0.0,
              "max": 0.000575783139971117,
              "p5": 0.0,
              "p95": 4.264189909559507e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 458.8799283154122,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2604.4499999999944,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8324478721517719,
              "median": 0.3823657147166515,
              "min": 0.23255813953488363,
              "max": 3.1851469809606243,
              "p5": 0.25703259473257906,
              "p95": 2.509308916384507,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 569476.3833333333,
              "median": 1786.0,
              "min": 0.0,
              "max": 3399360.0,
              "p5": 0.0,
              "p95": 2553001.575,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2382114512066981,
              "median": 0.07359514742720966,
              "min": 0.006008692320627702,
              "max": 0.9465930018416205,
              "p5": 0.015447127367779683,
              "p95": 0.7813733228097868,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0002679568263820448,
              "median": 0.00010377249002113327,
              "min": 0.0,
              "max": 0.0010409683744997177,
              "p5": 0.0,
              "p95": 0.0008705331818123594,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.366588478931868e-06,
              "median": 7.319162577903864e-07,
              "min": 0.0,
              "max": 1.1652610511027564e-05,
              "p5": 0.0,
              "p95": 1.0510229845016391e-05,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 203.5,
              "median": 2.0,
              "min": 0.0,
              "max": 1200.0,
              "p5": 0.0,
              "p95": 904.25,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 13161.0,
              "median": 5437.5,
              "min": 0.0,
              "max": 39440.0,
              "p5": 0.0,
              "p95": 37991.35,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5.75,
              "median": 3.0,
              "min": 0.0,
              "max": 21.0,
              "p5": 0.0,
              "p95": 17.849999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43019287334434764,
              "median": 0.3844842646504236,
              "min": 0.23255813953488363,
              "max": 0.7693207261579594,
              "p5": 0.2746883550024214,
              "p95": 0.6686866249323277,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15745964648885796,
              "median": 0.04245511988212189,
              "min": 0.018270401948842826,
              "max": 0.9465930018416205,
              "p5": 0.02027700589558174,
              "p95": 0.6415443224373367,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.388509031817854,
              "median": 2.89010989010989,
              "min": 1.4285714285714286,
              "max": 38.75,
              "p5": 1.5050420168067227,
              "p95": 30.017499999999988,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7507395218018313e-06,
              "median": 6.321077263240571e-07,
              "min": 0.0,
              "max": 1.1652610511027564e-05,
              "p5": 4.441522441626206e-08,
              "p95": 1.005327757861192e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003231594216820708,
              "median": 0.0001492102067321911,
              "min": 0.0,
              "max": 0.0014999392266003015,
              "p5": 0.0,
              "p95": 0.0011128839584387327,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.0,
            "market": 0.03618894259398431,
            "sector": -0.02825028271305363,
            "peers": -0.019454165967596526,
            "vs_market": -0.03618894259398431,
            "vs_sector": 0.02825028271305363,
            "vs_peers": 0.019454165967596526
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 27.419354838709676,
          "score_pca_percentile": 27.419354838709676,
          "rank_pca": 406,
          "total": 558,
          "adv_notional_sgd": 14076.800000000001,
          "adv_volume_shares": 3784850.0,
          "free_float_shares": 25139287902.0,
          "turnover_ratio": 0.00015055517939706198,
          "votes": 20.0,
          "trades": 20.0,
          "spread_pct": 0.2857142857142857,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 2.8189990343303695
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5789990360140292,
          "loadings": {
            "log_adv": 0.5014457272241712,
            "log_trades": 0.4470090859536302,
            "log_turnover": 0.45540600036458434,
            "neg_spread": 0.43074208653452706,
            "neg_amihud": 0.2631837018960389,
            "neg_vol": 0.29417006730738704
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
          "peer_median_adv": 4190.625,
          "peer_median_score_pca": 42.56272401433692,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.4316650297978491,
          "peer_median_spread_pct": 0.04323549944514972,
          "peer_median_spread_ticks": 2.8244181883279627,
          "peer_median_amihud": 6.059343832664254e-07,
          "peer_median_turnover_ratio": 0.0001767364753074821,
          "target_vs_peer": {
            "score_pca_delta": -15.14,
            "adv_delta_pct": 235.9,
            "trades_delta_pct": 471.43,
            "volatility_delta_pct": -553.05,
            "spread_pct_delta_pct": -560.83,
            "spread_ticks_delta_pct": -64.59,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -14.81
          }
        },
        "peer_liquidity": [
          {
            "ticker": "579",
            "score_pca": 27.419354838709676,
            "rank_pca": 406,
            "adv": 14076.800000000001,
            "trades": 20.0,
            "volatility": 2.8189990343303695,
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00015055517939706198,
            "is_target": true
          },
          {
            "ticker": "5EV",
            "score_pca": 38.53046594982079,
            "rank_pca": 344,
            "adv": 1796.5,
            "trades": 2.0,
            "volatility": 0.4750242851469098,
            "spread_pct": 0.04480366203690172,
            "spread_ticks": 3.0,
            "amihud": 8.755098695175904e-07,
            "turnover_ratio": 0.0001939829060251536,
            "is_target": false
          },
          {
            "ticker": "AAJ",
            "score_pca": 47.491039426523294,
            "rank_pca": 294,
            "adv": 5076.25,
            "trades": 5.0,
            "volatility": 0.5613528298064293,
            "spread_pct": 0.04537972149308176,
            "spread_ticks": 1.1136950904392764,
            "amihud": 2.824036118692955e-07,
            "turnover_ratio": 0.0007871672828632821,
            "is_target": false
          },
          {
            "ticker": "K03",
            "score_pca": 22.58064516129032,
            "rank_pca": 433,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.27823637698824216,
            "spread_pct": 0.08405548195529945,
            "spread_ticks": 15.45,
            "amihud": 4.118751853438371e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BAC",
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.1644434374852436,
            "spread_pct": 0.8956521739130436,
            "spread_ticks": 45.25,
            "amihud": 5.826305255513782e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 37.27598566308244,
            "rank_pca": 351,
            "adv": 3305.0,
            "trades": 2.0,
            "volatility": 0.3883057744487884,
            "spread_pct": 0.0338983050847458,
            "spread_ticks": 2.111111111111111,
            "amihud": 4.930966469428008e-07,
            "turnover_ratio": 1.4322587657958322e-05,
            "is_target": false
          },
          {
            "ticker": "BNE",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 10787.5,
            "trades": 5.0,
            "volatility": 0.7589942963342916,
            "spread_pct": 0.04166733685339773,
            "spread_ticks": 2.7979591836734694,
            "amihud": 7.187721195900501e-07,
            "turnover_ratio": 0.0005242734287333342,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 59.49820788530465,
            "rank_pca": 227,
            "adv": 23930.75,
            "trades": 14.0,
            "volatility": 0.32134257221939866,
            "spread_pct": 0.017634558484613018,
            "spread_ticks": 1.3827838827838828,
            "amihud": 1.904948194246824e-07,
            "turnover_ratio": 0.0001594900445898106,
            "is_target": false
          },
          {
            "ticker": "BEW",
            "score_pca": 54.3010752688172,
            "rank_pca": 256,
            "adv": 24425.0,
            "trades": 7.0,
            "volatility": 0.5621471433563506,
            "spread_pct": 0.023348437678840678,
            "spread_ticks": 2.8508771929824563,
            "amihud": 4.0146582826467494e-07,
            "turnover_ratio": 0.0005208252604323336,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Food Distribution",
          "sector_count": 6,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6949400865545378,
              "median": 0.4396350808083983,
              "min": 0.0,
              "max": 6.936569757452165,
              "p5": 0.15291345812470414,
              "p95": 2.1117851247065706,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2573732.9411861487,
              "median": 11684.25,
              "min": 0.0,
              "max": 243597405.0,
              "p5": 0.0,
              "p95": 10437476.975,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09506844984635239,
              "median": 0.028978517356113388,
              "min": 0.00027198195406526475,
              "max": 1.267605633802817,
              "p5": 0.0035774720816924444,
              "p95": 0.48590812227394437,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032371918900120354,
              "median": 0.0002657375275951876,
              "min": 0.0,
              "max": 0.8552501483092743,
              "p5": 0.0,
              "p95": 0.007062166249711977,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.797909805196224e-06,
              "median": 1.7330836773744484e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.2565766376012296e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 375.32078853046596,
              "median": 6.75,
              "min": 0.0,
              "max": 10053.0,
              "p5": 0.0,
              "p95": 2022.8999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7596518652955302,
              "median": 0.376630331067576,
              "min": 0.1644434374852436,
              "max": 2.8189990343303695,
              "p5": 0.18829638511792948,
              "p95": 2.2545874831993844,
              "count": 6
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 387934.3,
              "median": 3436.375,
              "min": 0.0,
              "max": 2306656.25,
              "p5": 0.0,
              "p95": 1733511.3875,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2268768758001385,
              "median": 0.06471760172419061,
              "min": 0.005655929688218734,
              "max": 0.8956521739130436,
              "p5": 0.01544286277538948,
              "p95": 0.7431677018633541,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0003063328891654441,
              "median": 0.00017226904271110778,
              "min": 0.0,
              "max": 0.0007871672828632821,
              "p5": 0.0,
              "p95": 0.0007669484538242534,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8509751431570404e-06,
              "median": 5.78956740693443e-07,
              "min": 0.0,
              "max": 5.826305255513782e-06,
              "p5": 7.200671508010217e-10,
              "p95": 5.399416904994929e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 160.66666666666666,
              "median": 3.5,
              "min": 0.0,
              "max": 937.0,
              "p5": 0.0,
              "p95": 707.75,
              "count": 6
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 8665.125,
              "median": 4190.625,
              "min": 0.0,
              "max": 24425.0,
              "p5": 0.0,
              "p95": 24252.0125,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4.375,
              "median": 3.5,
              "min": 0.0,
              "max": 14.0,
              "p5": 0.0,
              "p95": 11.549999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4387308394732068,
              "median": 0.4316650297978491,
              "min": 0.1644434374852436,
              "max": 0.7589942963342916,
              "p5": 0.2042709663112931,
              "p95": 0.6900977927920122,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14830495968749047,
              "median": 0.04323549944514972,
              "min": 0.017634558484613018,
              "max": 0.8956521739130436,
              "p5": 0.019634416202592698,
              "p95": 0.6115933317278328,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 9.244553307623775,
              "median": 2.8244181883279627,
              "min": 1.1136950904392764,
              "max": 45.25,
              "p5": 1.2078761677598886,
              "p95": 34.819999999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.613350000570156e-06,
              "median": 6.059343832664254e-07,
              "min": 1.904948194246824e-07,
              "max": 5.826305255513782e-06,
              "p5": 2.22662896780297e-07,
              "p95": 5.228661564787387e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00027500768878773406,
              "median": 0.0001767364753074821,
              "min": 0.0,
              "max": 0.0007871672828632821,
              "p5": 0.0,
              "p95": 0.0006951544339178003,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.25,
            "market": 0.14189987283210126,
            "sector": -0.023314621483560005,
            "peers": -0.02315895893469011,
            "vs_market": -0.39189987283210126,
            "vs_sector": -0.22668537851644,
            "vs_peers": -0.2268410410653099
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 39.4 vs peer median 39.3 (+0.1 pts).",
        "market_comparison": "The stock was flat on the day, in line with peers, so the main issue is tradability rather than price divergence."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak for its size, and the recent drop in activity suggests current access is thinner than the 1M average implies.",
        "market_comparison": "Return 0.0% vs peers 0.1%."
      },
      "3m": {
        "liquidity": "Liquidity remains weak on a medium-term view, and sector moves still explain 56.9% of trading, keeping the tape tied to broader conditions.",
        "market_comparison": "Sector influence is still meaningful, which matters because trading conditions are being shaped more by the wider market backdrop than by stock-specific demand."
      },
      "6m": {
        "liquidity": "Structural liquidity is weak, with a 6M score of 27.4 against a peer median of 42.6, leaving access below what the company’s size would suggest.",
        "market_comparison": "Average daily volume is S$14.1K compared with a peer median of S$4.2K, but the lower liquidity score shows that trading quality still screens below peers overall."
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
          "median": 0.4130869372779346,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.3%",
          "display_range": null,
          "display_text": "41.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 41.3,
          "plain_english": "Market explains about 41.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5685204632319635,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "56.9%",
          "display_range": null,
          "display_text": "56.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 56.9,
          "plain_english": "Sector explains about 56.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.018392599490101975,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.8%",
          "display_range": null,
          "display_text": "1.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 1.8,
          "plain_english": "Company-specific explains about 1.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -13.100726314764701,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-13.10",
          "display_range": null,
          "display_text": "-13.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 13.10% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": -13.1
        },
        "beta_stock_lag": {
          "median": -0.07804949527090276,
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
        "beta_sector": {
          "median": 12.463512689775547,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.46",
          "display_range": null,
          "display_text": "12.46",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 12.46% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
          "value_num": 12.46
        },
        "beta_market_lag": {
          "median": -27.94616504144979,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-27.95",
          "display_range": null,
          "display_text": "-27.95",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -27.95
        },
        "beta_sector_lag": {
          "median": -9.48024706184231,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-9.48",
          "display_range": null,
          "display_text": "-9.48",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -9.48
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
          "period_label": "2025-04-25 to 2025-04-30",
          "n_obs": 4,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.721429558273088,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "72.1%",
            "display_range": null,
            "display_text": "72.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
            "kind": "share_pct",
            "value_pct": 72.1,
            "plain_english": "Company-specific explains about 72.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10334115420515194,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.3%",
              "display_range": null,
              "display_text": "10.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 10.3,
              "plain_english": "Market explains about 10.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17522928752176006,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.5%",
              "display_range": null,
              "display_text": "17.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 17.5,
              "plain_english": "Sector explains about 17.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.721429558273088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.1%",
              "display_range": null,
              "display_text": "72.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 72.1,
              "plain_english": "Company-specific explains about 72.1% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven, though based on only 4 trading days."
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
            "median": 0.6135593099793761,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.4%",
            "display_range": null,
            "display_text": "61.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.4,
            "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2604304767114263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.0%",
              "display_range": null,
              "display_text": "26.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.0,
              "plain_english": "Market explains about 26.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12601021330919765,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Sector explains about 12.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6135593099793761,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.4%",
              "display_range": null,
              "display_text": "61.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.4,
              "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
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
            "median": 0.6715995423629046,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.2%",
            "display_range": null,
            "display_text": "67.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 67.2,
            "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2094725799282419,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.9%",
              "display_range": null,
              "display_text": "20.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.9,
              "plain_english": "Market explains about 20.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11892787770885348,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.9%",
              "display_range": null,
              "display_text": "11.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.9,
              "plain_english": "Sector explains about 11.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6715995423629046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.2%",
              "display_range": null,
              "display_text": "67.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.2,
              "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
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
            "median": 0.6235136841327797,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.4%",
            "display_range": null,
            "display_text": "62.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 62.4,
            "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24691591286075637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Market explains about 24.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12957040300646389,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6235136841327797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.4%",
              "display_range": null,
              "display_text": "62.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.4,
              "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
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
            "median": 0.5744940719747174,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.4%",
            "display_range": null,
            "display_text": "57.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 57.4,
            "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36537368502395107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Market explains about 36.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.060132243001331506,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.0%",
              "display_range": null,
              "display_text": "6.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 6.0,
              "plain_english": "Sector explains about 6.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5744940719747174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
            "median": 0.569719406641122,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.0%",
            "display_range": null,
            "display_text": "57.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 57.0,
            "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2397324461796855,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.0%",
              "display_range": null,
              "display_text": "24.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.0,
              "plain_english": "Market explains about 24.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19054814717919258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.1%",
              "display_range": null,
              "display_text": "19.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.1,
              "plain_english": "Sector explains about 19.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.569719406641122,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
            "median": 0.5661041246896418,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3254941131966797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.5%",
              "display_range": null,
              "display_text": "32.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 32.5,
              "plain_english": "Market explains about 32.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10840176211367857,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.8%",
              "display_range": null,
              "display_text": "10.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.8,
              "plain_english": "Sector explains about 10.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5661041246896418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45974450789075616,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.0%",
            "display_range": null,
            "display_text": "46.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.0,
            "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4466716044739061,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.7%",
              "display_range": null,
              "display_text": "44.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.7,
              "plain_english": "Market explains about 44.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09358388763533772,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.4%",
              "display_range": null,
              "display_text": "9.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 9.4,
              "plain_english": "Sector explains about 9.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45974450789075616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly company-driven."
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
            "median": 0.6872568292805256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.7%",
            "display_range": null,
            "display_text": "68.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 68.7,
            "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20241674427181505,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.2%",
              "display_range": null,
              "display_text": "20.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.2,
              "plain_english": "Market explains about 20.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11032642644765941,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.0%",
              "display_range": null,
              "display_text": "11.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.0,
              "plain_english": "Sector explains about 11.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6872568292805256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.7%",
              "display_range": null,
              "display_text": "68.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 68.7,
              "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
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
            "median": 0.735420780866817,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "73.5%",
            "display_range": null,
            "display_text": "73.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 73.5,
            "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15854925435054204,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.9%",
              "display_range": null,
              "display_text": "15.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.9,
              "plain_english": "Market explains about 15.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10602996478264107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.735420780866817,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.5%",
              "display_range": null,
              "display_text": "73.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.5,
              "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
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
            "median": 0.48803397487736605,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.8%",
            "display_range": null,
            "display_text": "48.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 48.8,
            "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3003018761511369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Market explains about 30.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21166414897149713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48803397487736605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
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
            "median": 0.6970510110907701,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "69.7%",
            "display_range": null,
            "display_text": "69.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 69.7,
            "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19590182105558127,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.6%",
              "display_range": null,
              "display_text": "19.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.6,
              "plain_english": "Market explains about 19.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10704716785364865,
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
              "median": 0.6970510110907701,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.7%",
              "display_range": null,
              "display_text": "69.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.7,
              "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5187454651261819,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.9%",
            "display_range": null,
            "display_text": "51.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 51.9,
            "plain_english": "Market explains about 51.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5187454651261819,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.9%",
              "display_range": null,
              "display_text": "51.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 51.9,
              "plain_english": "Market explains about 51.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1180213700329728,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Sector explains about 11.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3632331648408453,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Company-specific explains about 36.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5180722891566265,
          "expected_duration_days": 18.428571428571427,
          "current_probability": 0.0,
          "n_days_effective": 129.0,
          "volatility": {
            "median": 0.11003206739173345,
            "low": 0.11003206739173345,
            "high": 0.11003206739173345
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4819277108433735,
          "expected_duration_days": 15.0,
          "current_probability": 1.0,
          "n_days_effective": 120.0,
          "volatility": {
            "median": 0.1911816641020105,
            "low": 0.1911816641020105,
            "high": 0.1911816641020105
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.058823529411764705,
            0.9411764705882353
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            122.0,
            7.0
          ],
          [
            7.0,
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
        "market_link_display": "-13.10",
        "sector_link_display": "12.46",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 13.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 12.46% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.08",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 56.9,
        "driver_share_display": "56.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9411764705882353,
        "effective_days": 120.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 15.0 days.",
        "expected_duration_days": 15.0
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
          "pct_time": 0.5180722891566265,
          "expected_duration_days": 18.428571428571427,
          "current_probability": 0.0,
          "n_days_effective": 129.0,
          "volatility": {
            "median": 0.11003206739173345,
            "low": 0.11003206739173345,
            "high": 0.11003206739173345
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4819277108433735,
          "expected_duration_days": 15.0,
          "current_probability": 1.0,
          "n_days_effective": 120.0,
          "volatility": {
            "median": 0.1911816641020105,
            "low": 0.1911816641020105,
            "high": 0.1911816641020105
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9457364341085271,
          0.05426356589147287
        ],
        [
          0.058823529411764705,
          0.9411764705882353
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.058823529411764705,
            0.9411764705882353
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            122.0,
            7.0
          ],
          [
            7.0,
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
        "text": "Liquidity score: 27.4 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
        "text": "Liquidity Health: WEAK",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400",
        "dot": "bg-red-500"
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
    "liq_subtitle": "Structural liquidity is weak for size, and the displayed book points to thinner buy-side support in the near term.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The one-month return backdrop is firm, with the stock flat while peers are up 0.1% and the market is up 3.3%.",
    "perf_insight": "Returns have held up better than the market backdrop, but trading conditions remain the constraint. The stock was flat over one month while the market rose 3.3%, and the 6M liquidity score of 27.4 sits well below the 42.6 peer median, which keeps access below peer standard.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, accounting for 56.9% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 56.9% of price changes. Other influences are market 41.3%, and company-specific 1.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 41.3%, sector 56.9%, and company-specific 1.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 41.3%, sector 56.9%, and company-specific 1.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector direction is doing much of the work in the tape, while the displayed book remains less supportive on the buy side with bid depth at 0.20x ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are leading, accounting for 56.9% of recent price moves.",
      "Monthly change: the pattern has shifted from mostly sector in February and March to mostly market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The current market state is defined by weak structural liquidity and thin displayed buy-side support.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 22, 2025 to Apr 22, 2026 (254 trading days • 9,254 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks less supportive than the spread alone suggests. The spread is 1 tick, but displayed bid depth is only 0.20x ask depth, which leaves downside selling conditions thinner than the headline spread implies.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 12.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current read is driven by structural liquidity, recent volume, and the displayed order book.",
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
    "intraday_insight": "Session split is open 6.8%, continuous 89.6%, and close 0.9%. Current trading concentration score is 0.488.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by weak liquidity for size and thin displayed buy-side depth.",
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
    "exec_subtitle": "Liquidity screens below peers for the stock’s size, and the current book shows thin buy-side support.",
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
        "value": "27.4/100",
        "sub": "Peer median 42.6 (-15.1 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$14.1K",
        "sub": "Peer median S$4.2K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "28.57%",
        "sub": "1.00 ticks; peers 4.32%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, with a 6M score of 27.4 compared with a 42.6 peer median. The current book adds a near-term constraint because displayed bid depth is only 0.20x ask depth even with a 1 tick spread, which leaves buy-side support thin. Recent trading is also much lighter, with 1D average volume down 81.9% from the 1M average, so day-to-day access looks less robust than the monthly profile.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.004",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "28.57%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.20x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-32.37% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-49.78% with 44.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-49.78% with 17.8% fill.",
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
        "value": "27",
        "suffix": "/100",
        "bar_pct": 27,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 406/558",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "28.57",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "28.57% • 1.00 ticks vs peers 4.32%",
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
        "value": "14.1K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$4.2K",
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
        "value": "56.9",
        "suffix": "sector",
        "bar_pct": 57,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 41.3% • Company 1.8%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the stock’s size. The 6M liquidity score is 27.4 compared with a 42.6 peer median, which leaves access below peer standard before current trading conditions are considered.",
      "1D average volume down -81.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "Immediate execution looks less supportive than the spread alone suggests. Displayed bid depth is only 0.20x ask depth with a 1 tick spread, and sector moves account for 56.9% of the tape, which leaves the stock more exposed to broader moves when buy-side support is thin."
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
      "overall": "6M liquidity is weak: score 27.4 vs peer median 42.6 (-15.1 pts). 1D average volume down -81.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 27.4 vs peer median 42.6 (-15.1 pts)."
      ],
      "concerns": [
        "1D average volume down -81.9% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -15.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -25.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -25.0% vs market 14.2%.",
        "vs_sector": "Worse than sector: -25.0% vs sector -2.3%.",
        "vs_peers": "Worse than peers: -25.0% vs peers -2.3%."
      },
      "adv": {
        "insight": "ADV is S$14.1K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$14.1K vs market S$11.7K.",
        "vs_sector": "Better than sector: S$14.1K vs sector S$3.4K.",
        "vs_peers": "Better than peers: S$14.1K vs peers S$4.2K."
      },
      "spread": {
        "insight": "Spread is 28.57%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 28.57% vs market 2.90%.",
        "vs_sector": "Worse than sector: 28.57% vs sector 6.47%.",
        "vs_peers": "Worse than peers: 28.57% vs peers 4.32%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.02%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.02% vs market 0.03%.",
        "vs_sector": "Worse than sector: 0.02% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.02% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 281.90%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 281.90% vs market 43.96%.",
        "vs_sector": "Worse than sector: 281.90% vs sector 37.66%.",
        "vs_peers": "Worse than peers: 281.90% vs peers 43.17%."
      },
      "trades": {
        "insight": "Trades is 20, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 20 vs market 7.",
        "vs_sector": "Better than sector: 20 vs sector 4.",
        "vs_peers": "Better than peers: 20 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 0.00e+00, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 0.00e+00 vs market 1.73e-07.",
        "vs_sector": "Better than sector: 0.00e+00 vs sector 5.79e-07.",
        "vs_peers": "Better than peers: 0.00e+00 vs peers 6.06e-07."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mixed and mainly sector-linked, with weak liquidity providing only limited confirmation."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the stock now, accounting for 56.9% of recent price moves, which means the shares are currently moving more with the group than on stock-specific news. That matters because the stock already screens weak on liquidity for its size, with a 6M score of 27.4 compared with a peer median of 42.6, so broader sector moves can carry through more noticeably.",
      "beta": "The current read looks mixed rather than fully settled because sector direction is dominant, but trading activity has dropped sharply, with 1D average volume down 81.9% from the 1M average. That combination can make the tape feel more reactive to external moves even when participation is thinner.",
      "rolling_change": "The driver mix has changed materially over the last three months, moving from mostly sector in February and still clearly company-driven in March to mostly market-driven in April. That shift matters because the stock is now trading in a more top-down way than it was earlier in the quarter."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "High volatility is the active market state, while sector moves still explain 56.9% of the tape. That points to a market backdrop being driven more by broader trading conditions than by stock-specific calm.",
      "transitions": "The state looks relatively persistent, with a typical run length of about 15 days, although the picture is mixed because 1-day average volume is 81.9% below the 1-month average. That suggests the backdrop is established, but day-to-day trading conditions can still shift quickly.",
      "trading_implications": "A persistent high-volatility state combined with sharply lower recent average volume leaves trading conditions less steady. Even with a 1-tick spread, liquidity can feel thinner when activity drops this far below the monthly average."
    },
    "execution": {
      "overall": "Displayed liquidity looks thin buy-side, with bid depth at 0.20x of ask depth while the spread remains 1 tick. That combination suggests the quoted market looks orderly on spread but does not offer much visible support on the buy side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, as buyers are materially thinner than sellers at the top of book. With 1D average volume down 81.9% from the 1M average, that imbalance matters more because there is less recent flow to absorb selling interest.",
      "peer_context": "This book supports the view that liquidity is weak for size and adds a more cautious near-term read, because the 6M liquidity score of 27.4 already sits 15.1 points below the peer median of 42.6. The current depth imbalance suggests immediate execution conditions can feel worse than that longer-period comparison implies."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like, based on both trade count and trade value. That points to a trading base that is broad in participation but lighter on institutional presence.",
      "retail_heavy": "Retail-like trades account for 98.6% of trade count and 64.0% of trade value, compared with institution-like trades at 0.1% of count and 5.5% of value. That makes the observed flow read clearly retail-like on both measures.",
      "institutional_gap": "Institution-like participation is small in both count and value, at 0.1% and 5.5% respectively. That leaves the flow looking less anchored by larger participants.",
      "peer_comparison": "The mix stands out as retail-leaning relative to the peer comparison in the report tables. That matters because the stock appears to rely more on broad individual participation than peers do."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that overall flow still leans retail-like on both count and value. That makes the read on who is driving moves more mixed than institution-led. Retail-like trades dominate observed activity at 98.6% of count and 64.0% of value, while institution-like trades contribute 0.1% of count and 5.5% of value. That suggests price formation is being shaped mainly by broad smaller-ticket participation rather than deep institutional flow.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and does not look like a meaningful driver of current trading conditions. The stock’s 1M return is flat and short interest is described as stable, which points away from short pressure as the main reason liquidity feels constrained.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "The short backdrop looks stable, with short interest down 100% year on year rather than building. That matters because the current picture is more consistent with thinner trading flow, with 1D average volume down 81.9% from 1M, than with rising short pressure.",
      "peaks": "2 notable peak days identified."
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, which accounts for 89.6% of activity, while the open contributes 6.8% and the close 0.9%. That points to liquidity being available through the day rather than relying on auction windows.",
      "hhi_interpretation": "A concentration score of 0.488 indicates activity is not confined to a narrow part of the session. That makes the intraday profile look more usable and steadier.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "The intraday profile looks more balanced when activity is spread through continuous trading rather than concentrated in auctions. That supports a steadier liquidity picture through the session."
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
        "579",
        "5EV",
        "AAJ",
        "K03",
        "BAC",
        "MV4",
        "BNE",
        "5JS",
        "BEW"
      ],
      "scores": [
        27.419354838709676,
        38.53046594982079,
        47.491039426523294,
        22.58064516129032,
        3.046594982078853,
        37.27598566308244,
        46.59498207885305,
        59.49820788530465,
        54.3010752688172
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
        14076.800000000001,
        1796.5,
        5076.25,
        0.0,
        0.0,
        3305.0,
        10787.5,
        23930.75,
        24425.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Food Distribution",
      "sector_count": 6,
      "market_count": 558,
      "company": {
        "volatility": 2.8189990343303695,
        "adv": 14076.800000000001,
        "spread_pct": 0.2857142857142857,
        "turnover_ratio": 0.00015055517939706198,
        "amihud": 0.0,
        "trades": 20.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6949400865545378,
          "median": 0.4396350808083983,
          "min": 0.0,
          "max": 6.936569757452165,
          "p5": 0.15291345812470414,
          "p95": 2.1117851247065706,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2573732.9411861487,
          "median": 11684.25,
          "min": 0.0,
          "max": 243597405.0,
          "p5": 0.0,
          "p95": 10437476.975,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09506844984635239,
          "median": 0.028978517356113388,
          "min": 0.00027198195406526475,
          "max": 1.267605633802817,
          "p5": 0.0035774720816924444,
          "p95": 0.48590812227394437,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032371918900120354,
          "median": 0.0002657375275951876,
          "min": 0.0,
          "max": 0.8552501483092743,
          "p5": 0.0,
          "p95": 0.007062166249711977,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.797909805196224e-06,
          "median": 1.7330836773744484e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.2565766376012296e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 375.32078853046596,
          "median": 6.75,
          "min": 0.0,
          "max": 10053.0,
          "p5": 0.0,
          "p95": 2022.8999999999985,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7596518652955302,
          "median": 0.376630331067576,
          "min": 0.1644434374852436,
          "max": 2.8189990343303695,
          "p5": 0.18829638511792948,
          "p95": 2.2545874831993844,
          "count": 6
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 387934.3,
          "median": 3436.375,
          "min": 0.0,
          "max": 2306656.25,
          "p5": 0.0,
          "p95": 1733511.3875,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.2268768758001385,
          "median": 0.06471760172419061,
          "min": 0.005655929688218734,
          "max": 0.8956521739130436,
          "p5": 0.01544286277538948,
          "p95": 0.7431677018633541,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0003063328891654441,
          "median": 0.00017226904271110778,
          "min": 0.0,
          "max": 0.0007871672828632821,
          "p5": 0.0,
          "p95": 0.0007669484538242534,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.8509751431570404e-06,
          "median": 5.78956740693443e-07,
          "min": 0.0,
          "max": 5.826305255513782e-06,
          "p5": 7.200671508010217e-10,
          "p95": 5.399416904994929e-06,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 160.66666666666666,
          "median": 3.5,
          "min": 0.0,
          "max": 937.0,
          "p5": 0.0,
          "p95": 707.75,
          "count": 6
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 8665.125,
          "median": 4190.625,
          "min": 0.0,
          "max": 24425.0,
          "p5": 0.0,
          "p95": 24252.0125,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4.375,
          "median": 3.5,
          "min": 0.0,
          "max": 14.0,
          "p5": 0.0,
          "p95": 11.549999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4387308394732068,
          "median": 0.4316650297978491,
          "min": 0.1644434374852436,
          "max": 0.7589942963342916,
          "p5": 0.2042709663112931,
          "p95": 0.6900977927920122,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14830495968749047,
          "median": 0.04323549944514972,
          "min": 0.017634558484613018,
          "max": 0.8956521739130436,
          "p5": 0.019634416202592698,
          "p95": 0.6115933317278328,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 9.244553307623775,
          "median": 2.8244181883279627,
          "min": 1.1136950904392764,
          "max": 45.25,
          "p5": 1.2078761677598886,
          "p95": 34.819999999999986,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.613350000570156e-06,
          "median": 6.059343832664254e-07,
          "min": 1.904948194246824e-07,
          "max": 5.826305255513782e-06,
          "p5": 2.22662896780297e-07,
          "p95": 5.228661564787387e-06,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00027500768878773406,
          "median": 0.0001767364753074821,
          "min": 0.0,
          "max": 0.0007871672828632821,
          "p5": 0.0,
          "p95": 0.0006951544339178003,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0,
        "market": 0.03334237016264918,
        "sector": -0.006894752011629257,
        "peers": 0.0005395985411023041
      },
      {
        "horizon": "3M",
        "stock": 0.0,
        "market": 0.03618894259398431,
        "sector": -0.02825028271305363,
        "peers": -0.019454165967596526
      },
      {
        "horizon": "6M",
        "stock": -0.25,
        "market": 0.14189987283210126,
        "sector": -0.023314621483560005,
        "peers": -0.02315895893469011
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
      "share_market": 0.4130869372779346,
      "share_sector": 0.5685204632319635,
      "share_idio": 0.018392599490101975,
      "beta_market": -13.100726314764701,
      "beta_sector": 12.463512689775547,
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
            "median": 0.4130869372779346,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.3%",
            "display_range": null,
            "display_text": "41.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 41.3,
            "plain_english": "Market explains about 41.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5685204632319635,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.9%",
            "display_range": null,
            "display_text": "56.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 56.9,
            "plain_english": "Sector explains about 56.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.018392599490101975,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.8%",
            "display_range": null,
            "display_text": "1.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 1.8,
            "plain_english": "Company-specific explains about 1.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -13.100726314764701,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-13.10",
            "display_range": null,
            "display_text": "-13.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 13.10% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": -13.1
          },
          "beta_stock_lag": {
            "median": -0.07804949527090276,
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
          "beta_sector": {
            "median": 12.463512689775547,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.46",
            "display_range": null,
            "display_text": "12.46",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 12.46% stock move in the same direction in this state. The multiplier is unusually large and comes from only 251 trading days of history.",
            "value_num": 12.46
          },
          "beta_market_lag": {
            "median": -27.94616504144979,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-27.95",
            "display_range": null,
            "display_text": "-27.95",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -27.95
          },
          "beta_sector_lag": {
            "median": -9.48024706184231,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-9.48",
            "display_range": null,
            "display_text": "-9.48",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -9.48
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
            "period_label": "2025-04-25 to 2025-04-30",
            "n_obs": 4,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.721429558273088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.1%",
              "display_range": null,
              "display_text": "72.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 72.1,
              "plain_english": "Company-specific explains about 72.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10334115420515194,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.3%",
                "display_range": null,
                "display_text": "10.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 10.3,
                "plain_english": "Market explains about 10.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17522928752176006,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.5%",
                "display_range": null,
                "display_text": "17.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 17.5,
                "plain_english": "Sector explains about 17.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.721429558273088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "72.1%",
                "display_range": null,
                "display_text": "72.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 72.1,
                "plain_english": "Company-specific explains about 72.1% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven, though based on only 4 trading days."
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
              "median": 0.6135593099793761,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.4%",
              "display_range": null,
              "display_text": "61.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.4,
              "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2604304767114263,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.0%",
                "display_range": null,
                "display_text": "26.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.0,
                "plain_english": "Market explains about 26.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12601021330919765,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Sector explains about 12.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6135593099793761,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.4%",
                "display_range": null,
                "display_text": "61.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.4,
                "plain_english": "Company-specific explains about 61.4% of price moves in the current state."
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
              "median": 0.6715995423629046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.2%",
              "display_range": null,
              "display_text": "67.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.2,
              "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2094725799282419,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.9%",
                "display_range": null,
                "display_text": "20.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.9,
                "plain_english": "Market explains about 20.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11892787770885348,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.9%",
                "display_range": null,
                "display_text": "11.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.9,
                "plain_english": "Sector explains about 11.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6715995423629046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.2%",
                "display_range": null,
                "display_text": "67.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 67.2,
                "plain_english": "Company-specific explains about 67.2% of price moves in the current state."
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
              "median": 0.6235136841327797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.4%",
              "display_range": null,
              "display_text": "62.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 62.4,
              "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24691591286075637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Market explains about 24.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12957040300646389,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6235136841327797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.4%",
                "display_range": null,
                "display_text": "62.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 62.4,
                "plain_english": "Company-specific explains about 62.4% of price moves in the current state."
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
              "median": 0.5744940719747174,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.4%",
              "display_range": null,
              "display_text": "57.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 57.4,
              "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36537368502395107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Market explains about 36.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.060132243001331506,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.0%",
                "display_range": null,
                "display_text": "6.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 6.0,
                "plain_english": "Sector explains about 6.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5744940719747174,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.4%",
                "display_range": null,
                "display_text": "57.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 57.4,
                "plain_english": "Company-specific explains about 57.4% of price moves in the current state."
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
              "median": 0.569719406641122,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.0%",
              "display_range": null,
              "display_text": "57.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.0,
              "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2397324461796855,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.0%",
                "display_range": null,
                "display_text": "24.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.0,
                "plain_english": "Market explains about 24.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19054814717919258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.1%",
                "display_range": null,
                "display_text": "19.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.1,
                "plain_english": "Sector explains about 19.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.569719406641122,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.0%",
                "display_range": null,
                "display_text": "57.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 57.0,
                "plain_english": "Company-specific explains about 57.0% of price moves in the current state."
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
              "median": 0.5661041246896418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3254941131966797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.5%",
                "display_range": null,
                "display_text": "32.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 32.5,
                "plain_english": "Market explains about 32.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10840176211367857,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.8%",
                "display_range": null,
                "display_text": "10.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.8,
                "plain_english": "Sector explains about 10.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5661041246896418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45974450789075616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.0%",
              "display_range": null,
              "display_text": "46.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.0,
              "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4466716044739061,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.7,
                "plain_english": "Market explains about 44.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09358388763533772,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.4%",
                "display_range": null,
                "display_text": "9.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 9.4,
                "plain_english": "Sector explains about 9.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45974450789075616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.0%",
                "display_range": null,
                "display_text": "46.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.0,
                "plain_english": "Company-specific explains about 46.0% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly company-driven."
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
              "median": 0.6872568292805256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.7%",
              "display_range": null,
              "display_text": "68.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 68.7,
              "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20241674427181505,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.2%",
                "display_range": null,
                "display_text": "20.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.2,
                "plain_english": "Market explains about 20.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11032642644765941,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.0%",
                "display_range": null,
                "display_text": "11.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.0,
                "plain_english": "Sector explains about 11.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6872568292805256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.7%",
                "display_range": null,
                "display_text": "68.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 68.7,
                "plain_english": "Company-specific explains about 68.7% of price moves in the current state."
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
              "median": 0.735420780866817,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "73.5%",
              "display_range": null,
              "display_text": "73.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 73.5,
              "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15854925435054204,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.9%",
                "display_range": null,
                "display_text": "15.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.9,
                "plain_english": "Market explains about 15.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10602996478264107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.735420780866817,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "73.5%",
                "display_range": null,
                "display_text": "73.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 73.5,
                "plain_english": "Company-specific explains about 73.5% of price moves in the current state."
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
              "median": 0.48803397487736605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.8%",
              "display_range": null,
              "display_text": "48.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 48.8,
              "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3003018761511369,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Market explains about 30.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21166414897149713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48803397487736605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.8%",
                "display_range": null,
                "display_text": "48.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 48.8,
                "plain_english": "Company-specific explains about 48.8% of price moves in the current state."
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
              "median": 0.6970510110907701,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.7%",
              "display_range": null,
              "display_text": "69.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 69.7,
              "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19590182105558127,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.6%",
                "display_range": null,
                "display_text": "19.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.6,
                "plain_english": "Market explains about 19.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10704716785364865,
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
                "median": 0.6970510110907701,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "69.7%",
                "display_range": null,
                "display_text": "69.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 69.7,
                "plain_english": "Company-specific explains about 69.7% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-22",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5187454651261819,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.9%",
              "display_range": null,
              "display_text": "51.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 51.9,
              "plain_english": "Market explains about 51.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5187454651261819,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.9%",
                "display_range": null,
                "display_text": "51.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 51.9,
                "plain_english": "Market explains about 51.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1180213700329728,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Sector explains about 11.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3632331648408453,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Company-specific explains about 36.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5180722891566265,
            "expected_duration_days": 18.428571428571427,
            "current_probability": 0.0,
            "n_days_effective": 129.0,
            "volatility": {
              "median": 0.11003206739173345,
              "low": 0.11003206739173345,
              "high": 0.11003206739173345
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4819277108433735,
            "expected_duration_days": 15.0,
            "current_probability": 1.0,
            "n_days_effective": 120.0,
            "volatility": {
              "median": 0.1911816641020105,
              "low": 0.1911816641020105,
              "high": 0.1911816641020105
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9457364341085271,
              0.05426356589147287
            ],
            [
              0.058823529411764705,
              0.9411764705882353
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              122.0,
              7.0
            ],
            [
              7.0,
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
          "market_link_display": "-13.10",
          "sector_link_display": "12.46",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 13.10% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 12.46% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.08",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 56.9,
          "driver_share_display": "56.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9411764705882353,
          "effective_days": 120.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 15.0 days.",
          "expected_duration_days": 15.0
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
          "period_label": "2025-04-25 to 2025-04-30",
          "n_obs": 4,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven, though based on only 4 trading days.",
          "share_market": 0.10334115420515194,
          "share_sector": 0.17522928752176006,
          "share_company": 0.721429558273088,
          "share_market_display": "10.3%",
          "share_sector_display": "17.5%",
          "share_company_display": "72.1%",
          "dominant_share_display": "72.1%"
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
          "share_market": 0.2604304767114263,
          "share_sector": 0.12601021330919765,
          "share_company": 0.6135593099793761,
          "share_market_display": "26.0%",
          "share_sector_display": "12.6%",
          "share_company_display": "61.4%",
          "dominant_share_display": "61.4%"
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
          "share_market": 0.2094725799282419,
          "share_sector": 0.11892787770885348,
          "share_company": 0.6715995423629046,
          "share_market_display": "20.9%",
          "share_sector_display": "11.9%",
          "share_company_display": "67.2%",
          "dominant_share_display": "67.2%"
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
          "share_market": 0.24691591286075637,
          "share_sector": 0.12957040300646389,
          "share_company": 0.6235136841327797,
          "share_market_display": "24.7%",
          "share_sector_display": "13.0%",
          "share_company_display": "62.4%",
          "dominant_share_display": "62.4%"
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
          "share_market": 0.36537368502395107,
          "share_sector": 0.060132243001331506,
          "share_company": 0.5744940719747174,
          "share_market_display": "36.5%",
          "share_sector_display": "6.0%",
          "share_company_display": "57.4%",
          "dominant_share_display": "57.4%"
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
          "share_market": 0.2397324461796855,
          "share_sector": 0.19054814717919258,
          "share_company": 0.569719406641122,
          "share_market_display": "24.0%",
          "share_sector_display": "19.1%",
          "share_company_display": "57.0%",
          "dominant_share_display": "57.0%"
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
          "share_market": 0.3254941131966797,
          "share_sector": 0.10840176211367857,
          "share_company": 0.5661041246896418,
          "share_market_display": "32.5%",
          "share_sector_display": "10.8%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "summary": "Nov: Mostly company-driven.",
          "share_market": 0.4466716044739061,
          "share_sector": 0.09358388763533772,
          "share_company": 0.45974450789075616,
          "share_market_display": "44.7%",
          "share_sector_display": "9.4%",
          "share_company_display": "46.0%",
          "dominant_share_display": "46.0%"
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
          "share_market": 0.20241674427181505,
          "share_sector": 0.11032642644765941,
          "share_company": 0.6872568292805256,
          "share_market_display": "20.2%",
          "share_sector_display": "11.0%",
          "share_company_display": "68.7%",
          "dominant_share_display": "68.7%"
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
          "share_market": 0.15854925435054204,
          "share_sector": 0.10602996478264107,
          "share_company": 0.735420780866817,
          "share_market_display": "15.9%",
          "share_sector_display": "10.6%",
          "share_company_display": "73.5%",
          "dominant_share_display": "73.5%"
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
          "share_market": 0.3003018761511369,
          "share_sector": 0.21166414897149713,
          "share_company": 0.48803397487736605,
          "share_market_display": "30.0%",
          "share_sector_display": "21.2%",
          "share_company_display": "48.8%",
          "dominant_share_display": "48.8%"
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
          "summary": "Mar: Still clearly company-driven.",
          "share_market": 0.19590182105558127,
          "share_sector": 0.10704716785364865,
          "share_company": 0.6970510110907701,
          "share_market_display": "19.6%",
          "share_sector_display": "10.7%",
          "share_company_display": "69.7%",
          "dominant_share_display": "69.7%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.5187454651261819,
          "share_sector": 0.1180213700329728,
          "share_company": 0.3632331648408453,
          "share_market_display": "51.9%",
          "share_sector_display": "11.8%",
          "share_company_display": "36.3%",
          "dominant_share_display": "51.9%"
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
          0.5180722891566265,
          0.4819277108433735
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5180722891566265,
            "expected_duration_days": 18.428571428571427,
            "current_probability": 0.0,
            "n_days_effective": 129.0,
            "volatility": {
              "median": 0.11003206739173345,
              "low": 0.11003206739173345,
              "high": 0.11003206739173345
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4819277108433735,
            "expected_duration_days": 15.0,
            "current_probability": 1.0,
            "n_days_effective": 120.0,
            "volatility": {
              "median": 0.1911816641020105,
              "low": 0.1911816641020105,
              "high": 0.1911816641020105
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9457364341085271,
            0.05426356589147287
          ],
          [
            0.058823529411764705,
            0.9411764705882353
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.003,
          "quantity": 15501100.0,
          "value": 46503.3
        },
        {
          "level": 2,
          "price": 0.002,
          "quantity": 160412800.0,
          "value": 320825.60000000003
        },
        {
          "level": 3,
          "price": 0.001,
          "quantity": 76712200.0,
          "value": 76712.2
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.004,
          "quantity": 195219400.0,
          "value": 780877.6
        },
        {
          "level": 2,
          "price": 0.005,
          "quantity": 68731300.0,
          "value": 343656.5
        },
        {
          "level": 3,
          "price": 0.006,
          "quantity": 35985000.0,
          "value": 215910.0
        },
        {
          "level": 4,
          "price": 0.007,
          "quantity": 3940000.0,
          "value": 27580.0
        },
        {
          "level": 5,
          "price": 0.008,
          "quantity": 55995400.0,
          "value": 447963.2
        },
        {
          "level": 6,
          "price": 0.009,
          "quantity": 400000.0,
          "value": 3599.9999999999995
        },
        {
          "level": 7,
          "price": 0.01,
          "quantity": 11420000.0,
          "value": 114200.0
        },
        {
          "level": 8,
          "price": 0.011,
          "quantity": 484500.0,
          "value": 5329.5
        },
        {
          "level": 9,
          "price": 0.012,
          "quantity": 1250500.0,
          "value": 15006.0
        },
        {
          "level": 10,
          "price": 0.013,
          "quantity": 1700000.0,
          "value": 22100.0
        },
        {
          "level": 11,
          "price": 0.014,
          "quantity": 12000000.0,
          "value": 168000.0
        },
        {
          "level": 12,
          "price": 0.015,
          "quantity": 928000.0,
          "value": 13920.0
        },
        {
          "level": 13,
          "price": 0.019,
          "quantity": 500000.0,
          "value": 9500.0
        },
        {
          "level": 14,
          "price": 0.02,
          "quantity": 500000.0,
          "value": 10000.0
        },
        {
          "level": 15,
          "price": 0.022,
          "quantity": 300000.0,
          "value": 6600.0
        },
        {
          "level": 16,
          "price": 0.025,
          "quantity": 112000.0,
          "value": 2800.0
        },
        {
          "level": 17,
          "price": 0.033,
          "quantity": 200000.0,
          "value": 6600.0
        },
        {
          "level": 18,
          "price": 0.034,
          "quantity": 850000.0,
          "value": 28900.000000000004
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-22 08:55:54.494100000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.0035,
        "spread_pct": 0.2857142857142857,
        "spread_ticks": 1.0,
        "tick_size": 0.001,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 444041.1,
        "ask_depth_notional_displayed": 2222542.8,
        "bid_depth_notional_top10": 444041.1,
        "ask_depth_notional_top10": 2222542.8,
        "bid_ask_depth_ratio": 0.1998
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 9254,
        "first_trade_date": "2025-04-22",
        "last_trade_date": "2026-04-22",
        "window_label": "Apr 22, 2025 to Apr 22, 2026",
        "window_short_label": "Apr 22, 2025 to Apr 22, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "9,254 trades",
        "window_detail_label": "254 trading days • 9,254 trades",
        "history_note": "Trade-size percentiles use Apr 22, 2025 to Apr 22, 2026 history (254 trading days • 9,254 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3026.2,
            "impact_pct": -0.142857,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.68,
            "pct_of_adv": 16.66
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 5807.86,
            "impact_pct": -0.142857,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.31,
            "pct_of_adv": 31.97
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 42767.13,
            "impact_pct": -0.142857,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.63,
            "pct_of_adv": 235.42
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-22",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8135244202717102080",
            "timestamp": "2026-04-21 22:59:05.921000000",
            "local_timestamp": "2026-04-22 06:59:05",
            "posted_price": 0.008,
            "size_shares": 23000000.0,
            "notional": 184000.0,
            "impact_pct": -0.376003,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 41.44,
            "price_vs_mid_pct": 128.571,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8136218919775183872",
            "timestamp": "2026-04-21 22:59:05.921000000",
            "local_timestamp": "2026-04-22 06:59:05",
            "posted_price": 0.008,
            "size_shares": 18000000.0,
            "notional": 144000.0,
            "impact_pct": -0.35963900000000004,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 32.43,
            "price_vs_mid_pct": 128.571,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8134056730159067136",
            "timestamp": "2026-04-21 22:59:05.921000000",
            "local_timestamp": "2026-04-22 06:59:05",
            "posted_price": 0.014,
            "size_shares": 10000000.0,
            "notional": 140000.0,
            "impact_pct": -0.357424,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 31.53,
            "price_vs_mid_pct": 300.0,
            "executed_event_count": 0,
            "event_count": 5
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-22",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.001,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 399070.3,
            "ask_depth_notional": 2202535.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 401470.3,
            "ask_depth_notional": 2203535.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 403470.3,
            "ask_depth_notional": 2206663.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 409770.3,
            "ask_depth_notional": 2206663.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 412170.3,
            "ask_depth_notional": 2209463.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 413520.0,
            "ask_depth_notional": 2212463.2,
            "mid_price": 0.0035
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 424983.30000000005,
            "ask_depth_notional": 2212462.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 427983.30000000005,
            "ask_depth_notional": 2212462.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 445683.60000000003,
            "ask_depth_notional": 2220542.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 443883.60000000003,
            "ask_depth_notional": 2220542.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 444040.50000000006,
            "ask_depth_notional": 2220542.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 444040.50000000006,
            "ask_depth_notional": 2222542.8,
            "mid_price": 0.0035
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.2857142857142857,
            "spread_ticks": 1.0,
            "bid_depth_notional": 444041.10000000003,
            "ask_depth_notional": 2222542.8,
            "mid_price": 0.0035
          }
        ],
        "summary": {
          "median_spread_pct": 0.2857142857142857,
          "median_spread_ticks": 1.0,
          "median_bid_depth_notional": 424983.30000000005,
          "median_ask_depth_notional": 2212462.8,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 275.2,
      "peers": [
        {
          "ticker": "BNE",
          "pct": 1838.2
        },
        {
          "ticker": "5JS",
          "pct": 2492.4
        },
        {
          "ticker": "MV4",
          "pct": 15664.2
        },
        {
          "ticker": "BEW",
          "pct": 18335.2
        },
        {
          "ticker": "AAJ",
          "pct": 36613.3
        },
        {
          "ticker": "5EV",
          "pct": 86580.1
        },
        {
          "ticker": "K03",
          "pct": null
        },
        {
          "ticker": "BAC",
          "pct": null
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
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
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
              "retail": 4,
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
            "avg": 931.5,
            "median": 600.0
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
              "is_target": true,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 931.5,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2395.21875,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2093.3333333333335,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1041.0,
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
              "ticker": "AAJ",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 79.25,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4591.160000000001,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.75,
              "mixed_pct": 0.25,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.06578947368421052,
              "mixed_qty_pct": 0.9342105263157895,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.06558069081969656,
              "mixed_notional_pct": 0.9344193091803035,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5033.875,
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
          "n_trades": 371,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-24",
          "last_trade_date": "2026-04-22",
          "period_days": 29,
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
            "retail_pct": 0.9622641509433962,
            "mixed_pct": 0.03773584905660377,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5734291820159377,
            "mixed_qty_pct": 0.42657081798406227,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5775489988822508,
            "mixed_notional_pct": 0.4224510011177492,
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
              "retail": 357,
              "mixed": 14,
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
            "avg": 1792.6862533692722,
            "median": 75.0
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
              "is_target": true,
              "retail_pct": 0.9622641509433962,
              "mixed_pct": 0.03773584905660377,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5734291820159377,
              "mixed_qty_pct": 0.42657081798406227,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5775489988822508,
              "mixed_notional_pct": 0.4224510011177492,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1792.6862533692722,
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
              "ticker": "AAJ",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1018.0918604651164,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2343.562962962963,
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
              "ticker": "K03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1027.7941176470588,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9634146341463414,
              "mixed_pct": 0.036585365853658534,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7357591922270909,
              "mixed_qty_pct": 0.26424080777290915,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7353507368150048,
              "mixed_notional_pct": 0.26464926318499515,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4168.40243902439,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9308755760368663,
              "mixed_pct": 0.06912442396313365,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5709419136662025,
              "mixed_qty_pct": 0.4290580863337975,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5728809299440413,
              "mixed_notional_pct": 0.4271190700559587,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3877.9400921658985,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9259259259259259,
              "mixed_pct": 0.04938271604938271,
              "instit_pct": 0.024691358024691357,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.33647507210548,
              "mixed_qty_pct": 0.1946332921302019,
              "instit_qty_pct": 0.4688916357643181,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.34413092617702035,
              "mixed_notional_pct": 0.19325060109743156,
              "instit_notional_pct": 0.4626184727255481,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7288.623456790124,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8740740740740741,
              "mixed_pct": 0.1259259259259259,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5683719980951085,
              "mixed_qty_pct": 0.4316280019048915,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5665023056475884,
              "mixed_notional_pct": 0.4334976943524116,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5563.633333333333,
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
          "n_trades": 1744,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-21",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.9845183486238532,
            "mixed_pct": 0.01548165137614679,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6650484020672582,
            "mixed_qty_pct": 0.3349515979327417,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6656193550207069,
            "mixed_notional_pct": 0.33438064497929304,
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
              "retail": 1717,
              "mixed": 27,
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
            "avg": 993.9530389908257,
            "median": 0.9
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
              "is_target": true,
              "retail_pct": 0.9845183486238532,
              "mixed_pct": 0.01548165137614679,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6650484020672582,
              "mixed_qty_pct": 0.3349515979327417,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6656193550207069,
              "mixed_notional_pct": 0.33438064497929304,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 993.9530389908257,
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
              "ticker": "AAJ",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1086.169375,
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
              "ticker": "K03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1203.5555555555557,
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
              "ticker": "BAC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1620.05,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9852216748768473,
              "mixed_pct": 0.014778325123152709,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9082261737710198,
              "mixed_qty_pct": 0.09177382622898024,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9064223433151022,
              "mixed_notional_pct": 0.09357765668489776,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2934.4137931034484,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9225746268656716,
              "mixed_pct": 0.07742537313432836,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5666310022321017,
              "mixed_qty_pct": 0.43336899776789833,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5674837617209173,
              "mixed_notional_pct": 0.4325162382790827,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4043.5307835820895,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9207547169811321,
              "mixed_pct": 0.07169811320754717,
              "instit_pct": 0.007547169811320755,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4744917882163776,
              "mixed_qty_pct": 0.3163891122085678,
              "instit_qty_pct": 0.20911909957505456,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4804151770525999,
              "mixed_notional_pct": 0.31648047652777234,
              "instit_notional_pct": 0.20310434641962777,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5074.443396226415,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8979591836734694,
              "mixed_pct": 0.10058309037900874,
              "instit_pct": 0.0014577259475218659,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5137387361064036,
              "mixed_qty_pct": 0.4560489007842358,
              "instit_qty_pct": 0.03021236310936057,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5291347988141779,
              "mixed_notional_pct": 0.44362248750139827,
              "instit_notional_pct": 0.02724271368442384,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4841.212099125364,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8938271604938272,
              "mixed_pct": 0.10617283950617284,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5728729697751963,
              "mixed_qty_pct": 0.4271270302248037,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.568044427168176,
              "mixed_notional_pct": 0.43195557283182395,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6263.101234567901,
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
          "n_trades": 3844,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-22",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.9856919875130072,
            "mixed_pct": 0.013787721123829344,
            "instit_pct": 0.0005202913631633715,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6419535742727485,
            "mixed_qty_pct": 0.30853506821898363,
            "instit_qty_pct": 0.049511357508267885,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6395574879482546,
            "mixed_notional_pct": 0.30505582482388743,
            "instit_notional_pct": 0.05538668722785788,
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
              "retail": 3789,
              "mixed": 53,
              "institutional": 2,
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
            "avg": 1001.4859781477628,
            "median": 0.6
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
              "is_target": true,
              "retail_pct": 0.9856919875130072,
              "mixed_pct": 0.013787721123829344,
              "instit_pct": 0.0005202913631633715,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6419535742727485,
              "mixed_qty_pct": 0.30853506821898363,
              "instit_qty_pct": 0.049511357508267885,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6395574879482546,
              "mixed_notional_pct": 0.30505582482388743,
              "instit_notional_pct": 0.05538668722785788,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1001.4859781477628,
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
              "ticker": "K03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1269.904761904762,
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
              "ticker": "BAC",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3552.03,
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
              "ticker": "AAJ",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.973404255319149,
              "mixed_pct": 0.026595744680851064,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7064184432220545,
              "mixed_qty_pct": 0.2935815567779455,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.700814248613511,
              "mixed_notional_pct": 0.29918575138648895,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2030.5329787234045,
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
              "ticker": "5EV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.970276008492569,
              "mixed_pct": 0.029723991507430998,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8049527494856727,
              "mixed_qty_pct": 0.19504725051432723,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8068048132332049,
              "mixed_notional_pct": 0.19319518676679515,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3151.5908704883227,
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
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.940149625935162,
              "mixed_pct": 0.05486284289276808,
              "instit_pct": 0.004987531172069825,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5531020740874921,
              "mixed_qty_pct": 0.2819853274159949,
              "instit_qty_pct": 0.164912598496513,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5560285320172921,
              "mixed_notional_pct": 0.2832117913973678,
              "instit_notional_pct": 0.16075967658534016,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4236.7418952618455,
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
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.931282722513089,
              "mixed_pct": 0.06871727748691099,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5938237349589333,
              "mixed_qty_pct": 0.4061762650410667,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5926597300621114,
              "mixed_notional_pct": 0.4073402699378887,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3711.247382198953,
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
              "ticker": "BNE",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9046015712682379,
              "mixed_pct": 0.09427609427609428,
              "instit_pct": 0.001122334455667789,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5300100121199347,
              "mixed_qty_pct": 0.4472870668001616,
              "instit_qty_pct": 0.022702921079903744,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5377724991566609,
              "mixed_notional_pct": 0.4401512337150167,
              "instit_notional_pct": 0.022076267128322342,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4599.654882154882,
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
              "ticker": "BEW",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8912515188335358,
              "mixed_pct": 0.10753341433778858,
              "instit_pct": 0.001215066828675577,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.552311781055365,
              "mixed_qty_pct": 0.43170152766225073,
              "instit_qty_pct": 0.015986691282384207,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5550580291563048,
              "mixed_notional_pct": 0.4281268295344727,
              "instit_notional_pct": 0.016815141309222553,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5978.815613608748,
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
      "n_trades": 3844,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-22",
      "last_trade_date": "2026-04-22",
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
        "retail_pct": 0.9856919875130072,
        "mixed_pct": 0.013787721123829344,
        "instit_pct": 0.0005202913631633715,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.6395574879482546,
        "mixed_notional_pct": 0.30505582482388743,
        "instit_notional_pct": 0.05538668722785788,
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
        "avg": 1001.4859781477628,
        "median": 0.6
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
            "month": "2026-04",
            "n_trades": 186,
            "n_runs": 0,
            "retail_pct": 0.9354838709677419,
            "mixed_pct": 0.06451612903225806,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2786.185483870968,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5564864804972294,
            "mixed_qty_pct": 0.4435135195027706,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 171478200.0
          },
          {
            "month": "2026-03",
            "n_trades": 459,
            "n_runs": 0,
            "retail_pct": 0.9738562091503268,
            "mixed_pct": 0.026143790849673203,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2010.1882352941177,
            "avg_run_notional": null,
            "retail_qty_pct": 0.677324498663556,
            "mixed_qty_pct": 0.3226755013364439,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 301509100.0
          },
          {
            "month": "2026-02",
            "n_trades": 978,
            "n_runs": 0,
            "retail_pct": 0.9979550102249489,
            "mixed_pct": 0.002044989775051125,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 256.08333333333337,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8725423690408247,
            "mixed_qty_pct": 0.1274576309591753,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 70611700.0
          },
          {
            "month": "2026-01",
            "n_trades": 428,
            "n_runs": 0,
            "retail_pct": 0.9883177570093458,
            "mixed_pct": 0.011682242990654205,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 996.8665887850468,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8156438673940559,
            "mixed_qty_pct": 0.18435613260594408,
            "instit_qty_pct": 0.0,
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
            "total_quantity": 113373500.0
          },
          {
            "month": "2025-12",
            "n_trades": 906,
            "n_runs": 0,
            "retail_pct": 0.9911699779249448,
            "mixed_pct": 0.00772626931567329,
            "instit_pct": 0.0011037527593818985,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 789.3853200883002,
            "avg_run_notional": null,
            "retail_qty_pct": 0.6784188981749958,
            "mixed_qty_pct": 0.20487179487179488,
            "instit_qty_pct": 0.1167093069532094,
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
            "total_quantity": 175890000.0
          },
          {
            "month": "2025-11",
            "n_trades": 818,
            "n_runs": 0,
            "retail_pct": 0.980440097799511,
            "mixed_pct": 0.018337408312958436,
            "instit_pct": 0.0012224938875305623,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1118.2067237163815,
            "avg_run_notional": null,
            "retail_qty_pct": 0.43579622077728514,
            "mixed_qty_pct": 0.41705678171693716,
            "instit_qty_pct": 0.14714699750577764,
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
            "total_quantity": 222754800.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "579",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9856919875130072,
          "mixed_pct": 0.013787721123829344,
          "instit_pct": 0.0005202913631633715,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6419535742727485,
          "mixed_qty_pct": 0.30853506821898363,
          "instit_qty_pct": 0.049511357508267885,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6395574879482546,
          "mixed_notional_pct": 0.30505582482388743,
          "instit_notional_pct": 0.05538668722785788,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1001.4859781477628,
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
          "ticker": "K03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1269.904761904762,
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
          "ticker": "BAC",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3552.03,
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
          "ticker": "AAJ",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.973404255319149,
          "mixed_pct": 0.026595744680851064,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7064184432220545,
          "mixed_qty_pct": 0.2935815567779455,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.700814248613511,
          "mixed_notional_pct": 0.29918575138648895,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 2030.5329787234045,
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
          "ticker": "5EV",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.970276008492569,
          "mixed_pct": 0.029723991507430998,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8049527494856727,
          "mixed_qty_pct": 0.19504725051432723,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8068048132332049,
          "mixed_notional_pct": 0.19319518676679515,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3151.5908704883227,
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
          "ticker": "MV4",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.940149625935162,
          "mixed_pct": 0.05486284289276808,
          "instit_pct": 0.004987531172069825,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5531020740874921,
          "mixed_qty_pct": 0.2819853274159949,
          "instit_qty_pct": 0.164912598496513,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5560285320172921,
          "mixed_notional_pct": 0.2832117913973678,
          "instit_notional_pct": 0.16075967658534016,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4236.7418952618455,
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
          "ticker": "5JS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.931282722513089,
          "mixed_pct": 0.06871727748691099,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5938237349589333,
          "mixed_qty_pct": 0.4061762650410667,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5926597300621114,
          "mixed_notional_pct": 0.4073402699378887,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3711.247382198953,
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
          "ticker": "BNE",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9046015712682379,
          "mixed_pct": 0.09427609427609428,
          "instit_pct": 0.001122334455667789,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5300100121199347,
          "mixed_qty_pct": 0.4472870668001616,
          "instit_qty_pct": 0.022702921079903744,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5377724991566609,
          "mixed_notional_pct": 0.4401512337150167,
          "instit_notional_pct": 0.022076267128322342,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4599.654882154882,
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
          "ticker": "BEW",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8912515188335358,
          "mixed_pct": 0.10753341433778858,
          "instit_pct": 0.001215066828675577,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.552311781055365,
          "mixed_qty_pct": 0.43170152766225073,
          "instit_qty_pct": 0.015986691282384207,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5550580291563048,
          "mixed_notional_pct": 0.4281268295344727,
          "instit_notional_pct": 0.016815141309222553,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5978.815613608748,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 931.5,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2395.21875,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2093.3333333333335,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1041.0,
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
            "ticker": "AAJ",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 79.25,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4591.160000000001,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.75,
            "mixed_pct": 0.25,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.06578947368421052,
            "mixed_qty_pct": 0.9342105263157895,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.06558069081969656,
            "mixed_notional_pct": 0.9344193091803035,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5033.875,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9622641509433962,
            "mixed_pct": 0.03773584905660377,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5734291820159377,
            "mixed_qty_pct": 0.42657081798406227,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5775489988822508,
            "mixed_notional_pct": 0.4224510011177492,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1792.6862533692722,
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
            "ticker": "AAJ",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1018.0918604651164,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2343.562962962963,
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
            "ticker": "K03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1027.7941176470588,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9634146341463414,
            "mixed_pct": 0.036585365853658534,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7357591922270909,
            "mixed_qty_pct": 0.26424080777290915,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7353507368150048,
            "mixed_notional_pct": 0.26464926318499515,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4168.40243902439,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9308755760368663,
            "mixed_pct": 0.06912442396313365,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5709419136662025,
            "mixed_qty_pct": 0.4290580863337975,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5728809299440413,
            "mixed_notional_pct": 0.4271190700559587,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3877.9400921658985,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9259259259259259,
            "mixed_pct": 0.04938271604938271,
            "instit_pct": 0.024691358024691357,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.33647507210548,
            "mixed_qty_pct": 0.1946332921302019,
            "instit_qty_pct": 0.4688916357643181,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.34413092617702035,
            "mixed_notional_pct": 0.19325060109743156,
            "instit_notional_pct": 0.4626184727255481,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7288.623456790124,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8740740740740741,
            "mixed_pct": 0.1259259259259259,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5683719980951085,
            "mixed_qty_pct": 0.4316280019048915,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5665023056475884,
            "mixed_notional_pct": 0.4334976943524116,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5563.633333333333,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9845183486238532,
            "mixed_pct": 0.01548165137614679,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6650484020672582,
            "mixed_qty_pct": 0.3349515979327417,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6656193550207069,
            "mixed_notional_pct": 0.33438064497929304,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 993.9530389908257,
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
            "ticker": "AAJ",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1086.169375,
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
            "ticker": "K03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1203.5555555555557,
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
            "ticker": "BAC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1620.05,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9852216748768473,
            "mixed_pct": 0.014778325123152709,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9082261737710198,
            "mixed_qty_pct": 0.09177382622898024,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9064223433151022,
            "mixed_notional_pct": 0.09357765668489776,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2934.4137931034484,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9225746268656716,
            "mixed_pct": 0.07742537313432836,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5666310022321017,
            "mixed_qty_pct": 0.43336899776789833,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5674837617209173,
            "mixed_notional_pct": 0.4325162382790827,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4043.5307835820895,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9207547169811321,
            "mixed_pct": 0.07169811320754717,
            "instit_pct": 0.007547169811320755,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4744917882163776,
            "mixed_qty_pct": 0.3163891122085678,
            "instit_qty_pct": 0.20911909957505456,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4804151770525999,
            "mixed_notional_pct": 0.31648047652777234,
            "instit_notional_pct": 0.20310434641962777,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5074.443396226415,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8979591836734694,
            "mixed_pct": 0.10058309037900874,
            "instit_pct": 0.0014577259475218659,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5137387361064036,
            "mixed_qty_pct": 0.4560489007842358,
            "instit_qty_pct": 0.03021236310936057,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5291347988141779,
            "mixed_notional_pct": 0.44362248750139827,
            "instit_notional_pct": 0.02724271368442384,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4841.212099125364,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8938271604938272,
            "mixed_pct": 0.10617283950617284,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5728729697751963,
            "mixed_qty_pct": 0.4271270302248037,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.568044427168176,
            "mixed_notional_pct": 0.43195557283182395,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6263.101234567901,
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
            "ticker": "579",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9856919875130072,
            "mixed_pct": 0.013787721123829344,
            "instit_pct": 0.0005202913631633715,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6419535742727485,
            "mixed_qty_pct": 0.30853506821898363,
            "instit_qty_pct": 0.049511357508267885,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6395574879482546,
            "mixed_notional_pct": 0.30505582482388743,
            "instit_notional_pct": 0.05538668722785788,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1001.4859781477628,
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
            "ticker": "K03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1269.904761904762,
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
            "ticker": "BAC",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3552.03,
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
            "ticker": "AAJ",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.973404255319149,
            "mixed_pct": 0.026595744680851064,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7064184432220545,
            "mixed_qty_pct": 0.2935815567779455,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.700814248613511,
            "mixed_notional_pct": 0.29918575138648895,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2030.5329787234045,
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
            "ticker": "5EV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.970276008492569,
            "mixed_pct": 0.029723991507430998,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8049527494856727,
            "mixed_qty_pct": 0.19504725051432723,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8068048132332049,
            "mixed_notional_pct": 0.19319518676679515,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3151.5908704883227,
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
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.940149625935162,
            "mixed_pct": 0.05486284289276808,
            "instit_pct": 0.004987531172069825,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5531020740874921,
            "mixed_qty_pct": 0.2819853274159949,
            "instit_qty_pct": 0.164912598496513,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5560285320172921,
            "mixed_notional_pct": 0.2832117913973678,
            "instit_notional_pct": 0.16075967658534016,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4236.7418952618455,
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
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.931282722513089,
            "mixed_pct": 0.06871727748691099,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5938237349589333,
            "mixed_qty_pct": 0.4061762650410667,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5926597300621114,
            "mixed_notional_pct": 0.4073402699378887,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3711.247382198953,
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
            "ticker": "BNE",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9046015712682379,
            "mixed_pct": 0.09427609427609428,
            "instit_pct": 0.001122334455667789,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5300100121199347,
            "mixed_qty_pct": 0.4472870668001616,
            "instit_qty_pct": 0.022702921079903744,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5377724991566609,
            "mixed_notional_pct": 0.4401512337150167,
            "instit_notional_pct": 0.022076267128322342,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4599.654882154882,
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
            "ticker": "BEW",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8912515188335358,
            "mixed_pct": 0.10753341433778858,
            "instit_pct": 0.001215066828675577,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.552311781055365,
            "mixed_qty_pct": 0.43170152766225073,
            "instit_qty_pct": 0.015986691282384207,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5550580291563048,
            "mixed_notional_pct": 0.4281268295344727,
            "instit_notional_pct": 0.016815141309222553,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5978.815613608748,
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
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
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
      "total_trades": 3815,
      "price_moving_trades": 488,
      "pct_price_moving": 12.791612057667104,
      "all_movers": {
        "count": 488,
        "avg_size": 1802.26618852459,
        "median_size": 60.0,
        "retail_count": 474,
        "mixed_count": 13,
        "institutional_count": 1,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.1311475409836,
        "mixed_pct": 2.663934426229508,
        "instit_pct": 0.20491803278688525,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 242,
        "avg_size": 1460.4826446280995,
        "median_size": 160.0,
        "retail_count": 238,
        "mixed_count": 4,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 98.34710743801654,
        "mixed_pct": 1.6528925619834711,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 246,
        "avg_size": 2138.4922764227636,
        "median_size": 30.0,
        "retail_count": 236,
        "mixed_count": 9,
        "institutional_count": 1,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 95.9349593495935,
        "mixed_pct": 3.6585365853658534,
        "instit_pct": 0.40650406504065045,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Oceanus",
      "mapping": {
        "ticker_to_security": "Oceanus",
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
            "avg_short_ratio": 0.004714934963920191,
            "max_short_ratio": 0.25283171521035597,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [
        {
          "date": "2025-12-11",
          "short_ratio": 0.25283171521035597,
          "return_pct": 0.0
        },
        {
          "date": "2025-11-20",
          "short_ratio": 0.2390628735357399,
          "return_pct": 0.0
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
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
            "avg_short_ratio": 0.011492350691379816
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.013727439104072819
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.006736684919690095
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.022697766026567655
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
            "avg_short_ratio": 5.124163098633571e-05
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0029988457396429354
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
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
            "avg_short_ratio": 0.011492350691379816,
            "change_pct": null
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.013727439104072819,
            "change_pct": 19.448487717743404
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.006736684919690095,
            "change_pct": -50.925406635449036
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.022697766026567655,
            "change_pct": 236.92782573556687
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
            "avg_short_ratio": 5.124163098633571e-05,
            "change_pct": null
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.0029988457396429354,
            "change_pct": 5752.361999255291
          }
        ],
        "interpretation": "Short interest stable | YoY: -100% ⬇️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1253500,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 49357100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5203500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 300100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 55110100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 360100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2152500,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13813100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1900600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3130300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 15024800,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2983300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6907500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10800000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21066500,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14575800,
            "close": 0.003,
            "return": 0.5
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13610400,
            "close": 0.002,
            "return": -0.5
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 909700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3276300,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13651000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11507900,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11383400,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3699000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4050100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1539300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2330000,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2381000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7849600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6226000,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4642100,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 186592900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5913900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2175300,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5343600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2526400,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 32664800,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4223600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8545000,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9881000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 501300,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 410800,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3870700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2142700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1590500,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5168400,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 17872100,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2876800,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8343700,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 151900,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 605100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1736400,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8290300,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4048000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3151700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6320400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5500000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 261100,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1010300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1747600,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000300,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1155200,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1401900,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 446600,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4534600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2700800,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 670700,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5551100,
            "close": 0.003,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5245100,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11560300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2741600,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4535000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6147600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13979400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6712600,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 56196900,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2644700,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2725000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9141000,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14712000,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6902400,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4539200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 62786200,
            "close": 0.004,
            "return": -0.19999999999999996
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 330000,
            "close": 0.005,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1290100,
            "close": 0.005,
            "return": 0.0
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11907900,
            "close": 0.005,
            "return": 0.25
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3538200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1736500,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5055100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.25283171521035597,
            "short_vol": 1000000,
            "total_vol": 3955200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6582400,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6366900,
            "close": 0.004,
            "return": -0.19999999999999996
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 19271200,
            "close": 0.005,
            "return": 0.25
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 325300,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1012900,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3500200,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 14190600,
            "close": 0.004,
            "return": 0.33333333333333326
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21689500,
            "close": 0.003,
            "return": -0.25
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 160186100,
            "close": 0.004,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 11224100,
            "close": 0.004,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "579",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "K03",
          "avg_short_ratio": 9.775171065493646e-05,
          "max_short_ratio": 0.03636363636363636,
          "is_target": false
        },
        {
          "ticker": "AAJ",
          "avg_short_ratio": 0.00014715309291716197,
          "max_short_ratio": 0.02969848611967005,
          "is_target": false
        },
        {
          "ticker": "BNE",
          "avg_short_ratio": 0.005419716781704164,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "5JS",
          "avg_short_ratio": 0.006607884721285904,
          "max_short_ratio": 0.3663003663003663,
          "is_target": false
        },
        {
          "ticker": "BEW",
          "avg_short_ratio": 0.007151357671099214,
          "max_short_ratio": 0.9375,
          "is_target": false
        },
        {
          "ticker": "MV4",
          "avg_short_ratio": 0.007577866316526749,
          "max_short_ratio": 1.0,
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
          "opening": 0.002588492831866004,
          "continuous": 0.8689979396980131,
          "closing": 0.0,
          "auctions": 0.13100206030198686,
          "other": 0.0
        },
        "1M": {
          "opening": 0.06547632978642216,
          "continuous": 0.8830353717642535,
          "closing": 0.006238724048139221,
          "auctions": 0.11696462823574665,
          "other": 0.0
        },
        "3M": {
          "opening": 0.07632082008816725,
          "continuous": 0.8758280087080849,
          "closing": 0.01592556876458605,
          "auctions": 0.12417199129191506,
          "other": 0.0
        },
        "6M": {
          "opening": 0.06758932668107098,
          "continuous": 0.8957446951590372,
          "closing": 0.00894791848500537,
          "auctions": 0.10425530484096289,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.5514478562681443,
        "1M": 0.5062089738225001,
        "3M": 0.49595286983077946,
        "6M": 0.4875697516327609
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.1491
        },
        {
          "time": "09:00",
          "avg_share": 0.2129
        },
        {
          "time": "09:30",
          "avg_share": 0.1859
        },
        {
          "time": "10:00",
          "avg_share": 0.1149
        },
        {
          "time": "10:30",
          "avg_share": 0.046
        },
        {
          "time": "11:00",
          "avg_share": 0.0732
        },
        {
          "time": "11:30",
          "avg_share": 0.0499
        },
        {
          "time": "12:00",
          "avg_share": 0.0153
        },
        {
          "time": "12:30",
          "avg_share": 0.0176
        },
        {
          "time": "13:00",
          "avg_share": 0.0465
        },
        {
          "time": "13:30",
          "avg_share": 0.0163
        },
        {
          "time": "14:00",
          "avg_share": 0.0275
        },
        {
          "time": "14:30",
          "avg_share": 0.0038
        },
        {
          "time": "15:00",
          "avg_share": 0.0058
        },
        {
          "time": "15:30",
          "avg_share": 0.0046
        },
        {
          "time": "16:00",
          "avg_share": 0.0119
        },
        {
          "time": "16:30",
          "avg_share": 0.0163
        },
        {
          "time": "17:00",
          "avg_share": 0.0027
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "579",
          "auctions_pct": 15.195187623707959,
          "hhi": 0.4800960444503857,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "5EV",
          "auctions_pct": 1.3547781338725802,
          "hhi": 0.6752711460217029,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AAJ",
          "auctions_pct": 4.482128162168242,
          "hhi": 0.5591533226665253,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "K03",
          "auctions_pct": 3.305572308547188,
          "hhi": 0.871563098083815,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BAC",
          "auctions_pct": 0.0,
          "hhi": 0.8694796102781565,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "MV4",
          "auctions_pct": 2.939913968194331,
          "hhi": 0.643543219641371,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BNE",
          "auctions_pct": 3.5422516286478327,
          "hhi": 0.5527071698396707,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5JS",
          "auctions_pct": 5.782905537853302,
          "hhi": 0.458418707848213,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BEW",
          "auctions_pct": 4.368727064528356,
          "hhi": 0.48665005356218616,
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
