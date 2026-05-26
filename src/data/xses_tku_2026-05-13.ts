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
      "marketCap": 145411520.025,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 67747171.353,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 31571850.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 114034185.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 37968515.550000004,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 157692000.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 251550000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-05-13",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "145.4M",
    "market_cap_category": "small",
    "universe_total": 557,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "3m",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 74.68581687612208,
          "score_pca_percentile": 74.68581687612208,
          "rank_pca": 142,
          "total": 557,
          "adv_notional_sgd": 720512.0,
          "adv_volume_shares": 2771200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004859697497684555,
          "votes": 91.0,
          "trades": 91.0,
          "spread_pct": 0.020834715679118855,
          "spread_ticks": 1.0753424657534247,
          "amihud": 0.0,
          "volatility": 0.5555132528145118
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5216046283367142,
          "loadings": {
            "log_adv": 0.5499658037124315,
            "log_trades": 0.5077640265199378,
            "log_turnover": 0.5144044596028471,
            "neg_spread": 0.36333183532509683,
            "neg_amihud": 0.047314780218891746,
            "neg_vol": -0.20212038262391013
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
          "peer_median_adv": 26603.100000000002,
          "peer_median_score_pca": 47.12746858168761,
          "peer_median_trades": 16.5,
          "peer_median_volatility": 0.07240858389173101,
          "peer_median_spread_pct": 0.03908565392176997,
          "peer_median_spread_ticks": 1.6015334435326762,
          "peer_median_amihud": 2.678888767547984e-08,
          "peer_median_turnover_ratio": 0.000528673135231556,
          "target_vs_peer": {
            "score_pca_delta": 27.56,
            "adv_delta_pct": 2608.4,
            "trades_delta_pct": 451.52,
            "volatility_delta_pct": -667.19,
            "spread_pct_delta_pct": 46.69,
            "spread_ticks_delta_pct": -32.86,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 819.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.68581687612208,
            "rank_pca": 142,
            "adv": 720512.0,
            "trades": 91.0,
            "volatility": 0.5555132528145118,
            "spread_pct": 0.020834715679118855,
            "spread_ticks": 1.0753424657534247,
            "amihud": 0.0,
            "turnover_ratio": 0.004859697497684555,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.5906642728904847,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5531914893617021,
            "spread_ticks": 23.833333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.333931777378815,
            "rank_pca": 542,
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
            "ticker": "U77",
            "score_pca": 57.63016157989228,
            "rank_pca": 237,
            "adv": 45511.200000000004,
            "trades": 32.0,
            "volatility": 0.14481716778346201,
            "spread_pct": 0.009435338748115373,
            "spread_ticks": 1.8653846153846154,
            "amihud": 2.219455892397927e-07,
            "turnover_ratio": 0.0007191638521612206,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 89.22800718132855,
            "rank_pca": 61,
            "adv": 978740.4,
            "trades": 421.0,
            "volatility": 1.4255777671424195,
            "spread_pct": 0.03281254367086841,
            "spread_ticks": 1.0910780669144982,
            "amihud": 3.1928793375648945e-08,
            "turnover_ratio": 0.05071172043083411,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.62477558348294,
            "rank_pca": 354,
            "adv": 7695.000000000001,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.040435458786936135,
            "spread_ticks": 3.25,
            "amihud": 0.0,
            "turnover_ratio": 0.0003381824183018914,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 63.73429084380611,
            "rank_pca": 203,
            "adv": 68715.0,
            "trades": 36.0,
            "volatility": 0.35980170274396134,
            "spread_pct": 0.03773584905660381,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 19.210053859964095,
            "rank_pca": 451,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.060393258426966336,
            "spread_ticks": 10.75,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.99640933572711,
            "rank_pca": 79,
            "adv": 1326408.0,
            "trades": 724.0,
            "volatility": 0.4697311410933915,
            "spread_pct": 0.012750427790481104,
            "spread_ticks": 1.3376822716807368,
            "amihud": 2.678888767547984e-08,
            "turnover_ratio": 0.019259878018797784,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30359478577715987,
              "median": 0.12222748909926467,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.168843160802253,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4738813.758338722,
              "median": 22550.0,
              "min": 0.0,
              "max": 433759860.0,
              "p5": 0.0,
              "p95": 19979671.19999996,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09736772104440564,
              "median": 0.026439232409381692,
              "min": 0.0002623059441542142,
              "max": 1.2388663967611337,
              "p5": 0.0031874827929876687,
              "p95": 0.499241387887078,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013647989210609812,
              "median": 0.0004935244322677773,
              "min": 0.0,
              "max": 3.01891767187397,
              "p5": 0.0,
              "p95": 0.02555943444438863,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.490012712895328e-05,
              "median": 1.8339523118353393e-08,
              "min": 0.0,
              "max": 0.004418522446094022,
              "p5": 0.0,
              "p95": 4.9146855738446046e-05,
              "count": 422
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 643.2315978456014,
              "median": 11.0,
              "min": 0.0,
              "max": 21044.0,
              "p5": 0.0,
              "p95": 3710.599999999985,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16128221359226624,
              "median": 0.06009807352338233,
              "min": 0.0,
              "max": 0.5555132528145118,
              "p5": 0.0,
              "p95": 0.5254895137121196,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1378128.025,
              "median": 26603.100000000002,
              "min": 0.0,
              "max": 8924898.0,
              "p5": 0.0,
              "p95": 6265426.499999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1706302697357767,
              "median": 0.030635087233027495,
              "min": 0.0013348024262270612,
              "max": 0.6666666666666666,
              "p5": 0.004169990138887971,
              "p95": 0.626950354609929,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039014551592458572,
              "median": 0.000528673135231556,
              "min": 0.0,
              "max": 0.019259878018797784,
              "p5": 0.0,
              "p95": 0.014631072532676044,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.977277208015704e-08,
              "median": 1.2938348551270597e-10,
              "min": 0.0,
              "max": 2.219455892397927e-07,
              "p5": 0.0,
              "p95": 1.8291424892693012e-07,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 270.625,
              "median": 16.5,
              "min": 0.0,
              "max": 1317.0,
              "p5": 0.0,
              "p95": 1109.4499999999996,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 303383.7,
              "median": 26603.100000000002,
              "min": 0.0,
              "max": 1326408.0,
              "p5": 0.0,
              "p95": 1204724.3399999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 151.75,
              "median": 16.5,
              "min": 0.0,
              "max": 724.0,
              "p5": 0.0,
              "p95": 617.9499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2999909723454043,
              "median": 0.07240858389173101,
              "min": 0.0,
              "max": 1.4255777671424195,
              "p5": 0.0,
              "p95": 1.0910314480252592,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1766776290635425,
              "median": 0.03908565392176997,
              "min": 0.009435338748115373,
              "max": 0.6666666666666666,
              "p5": 0.01059561991294338,
              "p95": 0.626950354609929,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.515934785914148,
              "median": 1.6015334435326762,
              "min": 1.0,
              "max": 23.833333333333332,
              "p5": 1.0,
              "p95": 19.25416666666666,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009266554179411472,
              "median": 0.000528673135231556,
              "min": 0.0,
              "max": 0.05071172043083411,
              "p5": 0.0,
              "p95": 0.03970357558662138,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.61326540581843e-08,
              "median": 2.678888767547984e-08,
              "min": 0.0,
              "max": 2.219455892397927e-07,
              "p5": 0.0,
              "p95": 1.8394223006696392e-07,
              "count": 5
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.01171855255509513,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.01171855255509513,
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
          "score_pca": 73.78815080789947,
          "score_pca_percentile": 73.78815080789947,
          "rank_pca": 147,
          "total": 557,
          "adv_notional_sgd": 432900.0,
          "adv_volume_shares": 1731600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003036609478561841,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.020911158878894772,
          "spread_ticks": 1.0753424657534247,
          "amihud": 8.855297792595651e-09,
          "volatility": 0.17400090641642213
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5172882287325462,
          "loadings": {
            "log_adv": 0.5515932816344776,
            "log_trades": 0.5062427856191689,
            "log_turnover": 0.512017228120874,
            "neg_spread": 0.38841369137646237,
            "neg_amihud": 0.16124939892895934,
            "neg_vol": 0.020853955692575404
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
          "peer_median_adv": 7744.5,
          "peer_median_score_pca": 43.53680430879713,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.3258710477366158,
          "peer_median_spread_pct": 0.042032634343730516,
          "peer_median_spread_ticks": 1.6688411358403683,
          "peer_median_amihud": 1.3388326150764117e-07,
          "peer_median_turnover_ratio": 0.0002702986407313453,
          "target_vs_peer": {
            "score_pca_delta": 30.25,
            "adv_delta_pct": 5489.8,
            "trades_delta_pct": 2025.0,
            "volatility_delta_pct": 46.6,
            "spread_pct_delta_pct": 50.25,
            "spread_ticks_delta_pct": -35.56,
            "amihud_delta_pct": 93.39,
            "turnover_ratio_delta_pct": 1023.43
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.78815080789947,
            "rank_pca": 147,
            "adv": 432900.0,
            "trades": 85.0,
            "volatility": 0.17400090641642213,
            "spread_pct": 0.020911158878894772,
            "spread_ticks": 1.0753424657534247,
            "amihud": 8.855297792595651e-09,
            "turnover_ratio": 0.003036609478561841,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 4.129263913824058,
            "rank_pca": 535,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6178489702517164,
            "spread_ticks": 28.375,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.96229802513465,
            "rank_pca": 539,
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
            "ticker": "U77",
            "score_pca": 42.908438061041295,
            "rank_pca": 319,
            "adv": 5544.0,
            "trades": 5.0,
            "volatility": 0.15460127542481192,
            "spread_pct": 0.010701920050361986,
            "spread_ticks": 2.0,
            "amihud": 7.460583245599705e-07,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 73.07001795332137,
            "rank_pca": 151,
            "adv": 218727.69999999998,
            "trades": 79.0,
            "volatility": 2.172384071438585,
            "spread_pct": 0.041850220264317214,
            "spread_ticks": 1.043010752688172,
            "amihud": 1.3388326150764117e-07,
            "turnover_ratio": 0.01626038107156019,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 44.165170556552965,
            "rank_pca": 312,
            "adv": 9945.0,
            "trades": 3.0,
            "volatility": 0.4116140606377546,
            "spread_pct": 0.04221504842314381,
            "spread_ticks": 3.25,
            "amihud": 7.540812763881332e-07,
            "turnover_ratio": 0.00045387640351043316,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.81149012567326,
            "rank_pca": 197,
            "adv": 68715.0,
            "trades": 35.0,
            "volatility": 0.40835627837488075,
            "spread_pct": 0.0363636363636364,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 21.18491921005386,
            "rank_pca": 440,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.302097691051895,
            "spread_pct": 0.060905349794238735,
            "spread_ticks": 10.882352941176471,
            "amihud": 4.72813238770685e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 80.96947935368043,
            "rank_pca": 107,
            "adv": 544292.0,
            "trades": 340.0,
            "volatility": 0.34964440442133665,
            "spread_pct": 0.009513832305125525,
            "spread_ticks": 1.3376822716807368,
            "amihud": 1.4590318448290466e-08,
            "turnover_ratio": 0.00822588146081228,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5147725167185645,
              "median": 0.28816317925945595,
              "min": 0.0,
              "max": 7.09929573971954,
              "p5": 0.0,
              "p95": 1.7399867053272375,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4082296.265342162,
              "median": 18200.0,
              "min": 0.0,
              "max": 417027024.0,
              "p5": 0.0,
              "p95": 18233148.599999882,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09797859461851723,
              "median": 0.02873938602220773,
              "min": 0.0002879945579246963,
              "max": 1.2847682119205297,
              "p5": 0.003441502951951946,
              "p95": 0.4963002114164902,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007360151837845105,
              "median": 0.0003821319229093816,
              "min": 0.0,
              "max": 1.9543866587568388,
              "p5": 0.0,
              "p95": 0.01771595140408656,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00010633847138828615,
              "median": 5.5007379703763236e-08,
              "min": 0.0,
              "max": 0.009557215849965505,
              "p5": 0.0,
              "p95": 6.911466546725101e-05,
              "count": 518
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 567.3339317773788,
              "median": 9.0,
              "min": 0.0,
              "max": 15141.0,
              "p5": 0.0,
              "p95": 3485.799999999988,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.18654451270052352,
              "median": 0.164301090920617,
              "min": 0.0,
              "max": 0.4116140606377546,
              "p5": 0.0,
              "p95": 0.3899246809620083,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1239697.375,
              "median": 7744.5,
              "min": 0.0,
              "max": 8924898.0,
              "p5": 0.0,
              "p95": 5991685.899999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17876429525464652,
              "median": 0.03156310365101929,
              "min": 0.0013514156670242764,
              "max": 0.6666666666666666,
              "p5": 0.004208261490359714,
              "p95": 0.6495804729214341,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002229725963482277,
              "median": 0.0002702986407313453,
              "min": 0.0,
              "max": 0.00822588146081228,
              "p5": 0.0,
              "p95": 0.007458974769985473,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.931807166468934e-07,
              "median": 1.4590318448290466e-08,
              "min": 0.0,
              "max": 4.72813238770685e-06,
              "p5": 1.6422348972392993e-10,
              "p95": 3.5359170543112322e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 237.5,
              "median": 4.0,
              "min": 0.0,
              "max": 1467.0,
              "p5": 0.0,
              "p95": 1072.5499999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 105902.9625,
              "median": 7744.5,
              "min": 0.0,
              "max": 544292.0,
              "p5": 0.0,
              "p95": 430344.4949999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 57.75,
              "median": 4.0,
              "min": 0.0,
              "max": 340.0,
              "p5": 0.0,
              "p95": 248.64999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47483722266865797,
              "median": 0.3258710477366158,
              "min": 0.0,
              "max": 2.172384071438585,
              "p5": 0.0,
              "p95": 1.5561145676582933,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18575820551490083,
              "median": 0.042032634343730516,
              "min": 0.009513832305125525,
              "max": 0.6666666666666666,
              "p5": 0.009929663015958287,
              "p95": 0.6495804729214341,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.1110057456931735,
              "median": 1.6688411358403683,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.0,
              "p95": 22.252573529411755,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003516293566128991,
              "median": 0.0002702986407313453,
              "min": 0.0,
              "max": 0.01626038107156019,
              "p5": 0.0,
              "p95": 0.013448306207798418,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.109636526586979e-07,
              "median": 1.3388326150764117e-07,
              "min": 0.0,
              "max": 4.72813238770685e-06,
              "p5": 0.0,
              "p95": 3.5359170543112322e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.061224489795918435,
            "market": 0.015541744283229297,
            "sector": 0.00729189498074323,
            "peers": 0.010082677664974726,
            "vs_market": 0.04568274551268914,
            "vs_sector": 0.053932594815175205,
            "vs_peers": 0.05114181213094371
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 69.83842010771993,
          "score_pca_percentile": 69.83842010771993,
          "rank_pca": 169,
          "total": 557,
          "adv_notional_sgd": 193687.0,
          "adv_volume_shares": 824200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001445353160216372,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.023280423280423297,
          "spread_ticks": 1.1176470588235294,
          "amihud": 4.7142904285761484e-08,
          "volatility": 0.5325947245286118
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5310270173037331,
          "loadings": {
            "log_adv": 0.5361818052810416,
            "log_trades": 0.4877909619256122,
            "log_turnover": 0.48525412006385676,
            "neg_spread": 0.4169254545180222,
            "neg_amihud": 0.17847550525261033,
            "neg_vol": 0.18280357630545957
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
          "peer_median_adv": 5294.25,
          "peer_median_score_pca": 44.34470377019748,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.5045826757180225,
          "peer_median_spread_pct": 0.03807666293878484,
          "peer_median_spread_ticks": 1.6530612244897958,
          "peer_median_amihud": 5.454825030834006e-07,
          "peer_median_turnover_ratio": 0.0001240453927985876,
          "target_vs_peer": {
            "score_pca_delta": 25.49,
            "adv_delta_pct": 3558.4,
            "trades_delta_pct": 1011.11,
            "volatility_delta_pct": -5.55,
            "spread_pct_delta_pct": 38.86,
            "spread_ticks_delta_pct": -32.39,
            "amihud_delta_pct": 91.36,
            "turnover_ratio_delta_pct": 1065.18
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.83842010771993,
            "rank_pca": 169,
            "adv": 193687.0,
            "trades": 50.0,
            "volatility": 0.5325947245286118,
            "spread_pct": 0.023280423280423297,
            "spread_ticks": 1.1176470588235294,
            "amihud": 4.7142904285761484e-08,
            "turnover_ratio": 0.001445353160216372,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.333931777378815,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730358,
            "spread_pct": 0.5862068965517243,
            "spread_ticks": 28.375,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 14.003590664272892,
            "rank_pca": 480,
            "adv": 1500.0,
            "trades": 3.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016260877732995004,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.14003590664273,
            "rank_pca": 301,
            "adv": 5544.0,
            "trades": 4.0,
            "volatility": 0.25228540954412104,
            "spread_pct": 0.01418439716312058,
            "spread_ticks": 2.142857142857143,
            "amihud": 9.064079415838249e-07,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 64.27289048473968,
            "rank_pca": 200,
            "adv": 217545.30000000002,
            "trades": 75.0,
            "volatility": 1.9047302718759413,
            "spread_pct": 0.04493984430290163,
            "spread_ticks": 1.0655737704918034,
            "amihud": 1.8455706458297627e-07,
            "turnover_ratio": 0.01626038107156019,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.75224416517056,
            "rank_pca": 370,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.3211951179630725,
            "spread_pct": 0.03912543153049486,
            "spread_ticks": 2.8333333333333335,
            "amihud": 2.055557611113171e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.5314183123878,
            "rank_pca": 154,
            "adv": 207399.30000000002,
            "trades": 50.0,
            "volatility": 0.5306860827878794,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0048309178743962,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.00872110815106983,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 42.549371633752244,
            "rank_pca": 321,
            "adv": 5044.5,
            "trades": 5.0,
            "volatility": 0.4784792686481656,
            "spread_pct": 0.02132895816242824,
            "spread_ticks": 3.9,
            "amihud": 1.1500201253521925e-06,
            "turnover_ratio": 3.940450610713503e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.63734290843806,
            "rank_pca": 81,
            "adv": 1094460.0,
            "trades": 495.0,
            "volatility": 0.3443313583058223,
            "spread_pct": 0.01013835115561731,
            "spread_ticks": 1.163265306122449,
            "amihud": 1.2112369650917102e-08,
            "turnover_ratio": 0.0158919171902261,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6387346635177905,
              "median": 0.40161051765101724,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.081225315036818,
              "p95": 1.8417947843686011,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3444412.880805821,
              "median": 16152.9,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 14827633.399999956,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1009875630704394,
              "median": 0.029053788771103147,
              "min": 0.00027741427863602243,
              "max": 1.2631578947368423,
              "p5": 0.003324168185140111,
              "p95": 0.4906699205931012,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0062589044493718896,
              "median": 0.00034029516650419114,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.014135967236243059,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.823024662363418e-05,
              "median": 8.772932362322438e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.794651661841225e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 504.5062836624776,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 3002.7999999999843,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.2652817616617626,
              "median": 0.41140531347699394,
              "min": 0.2293118919476507,
              "max": 4.014372790730358,
              "p5": 0.2373526231064153,
              "p95": 3.991731550043938,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1652657.1875,
              "median": 5294.25,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 223.65000000000003,
              "p95": 8131309.949999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17027458809164014,
              "median": 0.02230469072142577,
              "min": 0.0012655802226460978,
              "max": 0.6666666666666666,
              "p5": 0.004371050049186022,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003190365822458108,
              "median": 0.0001240453927985876,
              "min": 0.0,
              "max": 0.0158919171902261,
              "p5": 1.1213417027904821e-05,
              "p95": 0.013082889084750384,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.022618612819776e-05,
              "median": 4.767754229347932e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 1.5987990958441108e-10,
              "p95": 0.0002071840094918949,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 388.625,
              "median": 4.5,
              "min": 0.0,
              "max": 2551.0,
              "p5": 0.35000000000000003,
              "p95": 1831.399999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 191516.5125,
              "median": 5294.25,
              "min": 0.0,
              "max": 1094460.0,
              "p5": 223.65000000000003,
              "p95": 787539.8549999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 79.125,
              "median": 4.5,
              "min": 0.0,
              "max": 495.0,
              "p5": 0.35000000000000003,
              "p95": 347.9999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4744704789352077,
              "median": 0.5045826757180225,
              "min": 0.25228540954412104,
              "max": 4.014372790730358,
              "p5": 0.27640380749075405,
              "p95": 3.991731550043938,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17745230498500356,
              "median": 0.03807666293878484,
              "min": 0.01013835115561731,
              "max": 0.6666666666666666,
              "p5": 0.011554467258243453,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.18560755883489,
              "median": 1.6530612244897958,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.0016908212560387,
              "p95": 19.808749999999986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.025247949264427e-05,
              "median": 5.454825030834006e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 4.2393293778209865e-09,
              "p95": 0.0002071840094918949,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005149117504865734,
              "median": 0.0001240453927985876,
              "min": 0.0,
              "max": 0.01626038107156019,
              "p5": 1.1213417027904821e-05,
              "p95": 0.01613141871309326,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.18181818181818166,
            "market": 0.003970578726789187,
            "sector": -0.00557050949089255,
            "peers": 0.004681296454256634,
            "vs_market": 0.17784760309139247,
            "vs_sector": 0.1873886913090742,
            "vs_peers": 0.17713688536392502
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.35188509874327,
          "score_pca_percentile": 72.35188509874327,
          "rank_pca": 155,
          "total": 557,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 62.0,
          "trades": 62.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.17,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5303681455781305
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5627755326766404,
          "loadings": {
            "log_adv": 0.51756440851798,
            "log_trades": 0.4650095819648573,
            "log_turnover": 0.47422361128139245,
            "neg_spread": 0.4172377592124681,
            "neg_amihud": 0.24715799641168265,
            "neg_vol": 0.23628524142793647
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
          "peer_median_adv": 7114.15,
          "peer_median_score_pca": 46.678635547576306,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.5649148423055074,
          "peer_median_spread_pct": 0.04314579055195506,
          "peer_median_spread_ticks": 1.6154754569726844,
          "peer_median_amihud": 5.58013487756469e-07,
          "peer_median_turnover_ratio": 7.816623405176616e-05,
          "target_vs_peer": {
            "score_pca_delta": 25.67,
            "adv_delta_pct": 3111.6,
            "trades_delta_pct": 1027.27,
            "volatility_delta_pct": 6.12,
            "spread_pct_delta_pct": 42.15,
            "spread_ticks_delta_pct": -27.58,
            "amihud_delta_pct": 85.96,
            "turnover_ratio_delta_pct": 1950.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.35188509874327,
            "rank_pca": 155,
            "adv": 228475.0,
            "trades": 62.0,
            "volatility": 0.5303681455781305,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.17,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.0771992818671454,
            "rank_pca": 552,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.46341463414634154,
            "spread_ticks": 20.0,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.859964093357271,
            "rank_pca": 536,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.03770197486535,
            "rank_pca": 296,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.3266682214794533,
            "spread_pct": 0.018976512676932587,
            "spread_ticks": 1.9444444444444444,
            "amihud": 1.4642717688402982e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 46.319569120287255,
            "rank_pca": 300,
            "adv": 11145.4,
            "trades": 10.0,
            "volatility": 1.2981954772149567,
            "spread_pct": 0.06896551724137927,
            "spread_ticks": 1.0910780669144982,
            "amihud": 2.065152016524035e-07,
            "turnover_ratio": 0.0013612014186341673,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 35.00897666068223,
            "rank_pca": 363,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.361552134469432,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.6790372046077726e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.27289048473968,
            "rank_pca": 200,
            "adv": 64287.5,
            "trades": 24.0,
            "volatility": 0.5962248566462605,
            "spread_pct": 0.04301491958922694,
            "spread_ticks": 1.0434782608695652,
            "amihud": 0.0,
            "turnover_ratio": 0.0029391074661560897,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.987432675044886,
            "rank_pca": 274,
            "adv": 9114.0,
            "trades": 7.0,
            "volatility": 0.35914057325014537,
            "spread_pct": 0.017596050382935643,
            "spread_ticks": 3.0,
            "amihud": 9.095117738605346e-07,
            "turnover_ratio": 7.673509084021033e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.84201077199282,
            "rank_pca": 91,
            "adv": 809414.0,
            "trades": 369.0,
            "volatility": 0.5336048279647543,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.2865064695009243,
            "amihud": 1.8048675400492878e-08,
            "turnover_ratio": 0.011869321934992728,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6855183801840733,
              "median": 0.4757225112446752,
              "min": 0.0,
              "max": 7.107469945927176,
              "p5": 0.15851840193107378,
              "p95": 2.2201923505837455,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3380674.938775532,
              "median": 11830.0,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13106383.599999947,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10046219388938141,
              "median": 0.031003217315004293,
              "min": 0.0002742695631217783,
              "max": 1.3400402414486918,
              "p5": 0.0035508696516023982,
              "p95": 0.4604419557292643,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006534990778711877,
              "median": 0.0002797779694726035,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011416608981406598,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.211569616881281e-05,
              "median": 1.4611760212736376e-07,
              "min": 0.0,
              "max": 0.0005935746352413022,
              "p5": 0.0,
              "p95": 3.99537792703361e-05,
              "count": 552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 482.0125673249551,
              "median": 6.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2831.999999999998,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8640502078080105,
              "median": 0.44596014002378126,
              "min": 0.26552100836144127,
              "max": 2.28509876728461,
              "p5": 0.2869225329527455,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1971622.1624999999,
              "median": 7114.15,
              "min": 0.0,
              "max": 14720220.999999998,
              "p5": 0.0,
              "p95": 9851438.549999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1558672867928876,
              "median": 0.02196904330434396,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004620331678174671,
              "p95": 0.5955284552845528,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029233248815463235,
              "median": 7.816623405176616e-05,
              "min": 0.0,
              "max": 0.011869321934992728,
              "p5": 0.0,
              "p95": 0.011119247217062376,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.553577430508643e-05,
              "median": 4.939318380361731e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 1.9817372920580365e-10,
              "p95": 0.0002346763275099377,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 503.75,
              "median": 5.5,
              "min": 0.0,
              "max": 3587.0,
              "p5": 0.0,
              "p95": 2460.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 112464.275,
              "median": 7114.15,
              "min": 0.0,
              "max": 809414.0,
              "p5": 0.0,
              "p95": 548619.7249999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 51.875,
              "median": 5.5,
              "min": 0.0,
              "max": 369.0,
              "p5": 0.0,
              "p95": 248.24999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0013666052982162,
              "median": 0.5649148423055074,
              "min": 0.3266682214794533,
              "max": 2.28509876728461,
              "p5": 0.33803354459919555,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16657624323030668,
              "median": 0.04314579055195506,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013112956989814444,
              "p95": 0.5955284552845528,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.076938405216179,
              "median": 1.6154754569726844,
              "min": 1.0,
              "max": 20.0,
              "p5": 1.0152173913043478,
              "p95": 14.137499999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5551723941184646e-05,
              "median": 5.58013487756469e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.0002346763275099377,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002044750202781495,
              "median": 7.816623405176616e-05,
              "min": 0.0,
              "max": 0.011869321934992728,
              "p5": 0.0,
              "p95": 0.0087437468708999,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.18181818181818077,
            "market": 0.008694085895560644,
            "sector": -0.0698069342412716,
            "peers": -0.021046100711363147,
            "vs_market": 0.17312409592262012,
            "vs_sector": 0.25162511605945237,
            "vs_peers": 0.20286428252954392
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 74.7 vs peer median 47.1 (+27.6 pts).",
        "market_comparison": "Return 0.0% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 73.8 vs peer median 43.5 (+30.3 pts).",
        "market_comparison": "Company-specific factors are the biggest current driver at 45.6%. That matters because tradability is more exposed to stock news than to broader market moves right now."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong for the company’s size, supported by a 1M liquidity score of 69.8 compared with a peer median of 44.3. That keeps the name accessible relative to its peer set.",
        "market_comparison": "The stock has materially outperformed over the month, rising 18.2% compared with 0.5% for peers. That matters because the return backdrop is firmer than the sector comparison."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong and looks stable, with a 3M score of 72.4 compared with the peer median of 46.7. That supports good accessibility relative to companies of similar size.",
        "market_comparison": "Primary average daily volume is S$228.5K compared with a peer median of S$7.1K. That matters because the stock screens as meaningfully easier to access than most peers."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 74,
      "reporting_window_days": 63,
      "available_history_days": 74,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.1804860793715825,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "18.0%",
          "display_range": null,
          "display_text": "18.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "share_pct",
          "value_pct": 18.0,
          "plain_english": "Market explains about 18.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.36378444930326737,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "36.4%",
          "display_range": null,
          "display_text": "36.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "share_pct",
          "value_pct": 36.4,
          "plain_english": "Sector explains about 36.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.45572947132515007,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "45.6%",
          "display_range": null,
          "display_text": "45.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "share_pct",
          "value_pct": 45.6,
          "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.4441819480415253,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.44",
          "display_range": null,
          "display_text": "-0.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.44% stock move in the opposite direction in this state.",
          "value_num": -0.44
        },
        "beta_stock_lag": {
          "median": -0.6220172739391734,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.62",
          "display_range": null,
          "display_text": "-0.62",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "lag_beta",
          "value_num": -0.62
        },
        "beta_sector": {
          "median": 0.8075334954109037,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.81",
          "display_range": null,
          "display_text": "0.81",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.81% stock move in the same direction in this state.",
          "value_num": 0.81
        },
        "beta_market_lag": {
          "median": 0.7089572755963158,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.71",
          "display_range": null,
          "display_text": "0.71",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "lag_beta",
          "value_num": 0.71
        },
        "beta_sector_lag": {
          "median": 0.8910911741900435,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.89",
          "display_range": null,
          "display_text": "0.89",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "kind": "lag_beta",
          "value_num": 0.89
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 74 trading days relative to the 252-day target."
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
            "median": 0.47931948471963903,
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
              "median": 0.47931948471963903,
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
              "median": 0.2984396411024004,
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
              "median": 0.2222408741779605,
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
            "median": 0.5656898926629685,
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
              "median": 0.26479317957873116,
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
              "median": 0.16951692775830024,
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
              "median": 0.5656898926629685,
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
            "median": 0.537921465360335,
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
              "median": 0.22982068067655398,
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
              "median": 0.537921465360335,
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
            "median": 0.5202476822091704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34425966677405034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1354926510167792,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6264972346730672,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.6%",
            "display_range": null,
            "display_text": "62.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
            "kind": "share_pct",
            "value_pct": 62.6,
            "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.181101169273125,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.1%",
              "display_range": null,
              "display_text": "18.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 18.1,
              "plain_english": "Market explains about 18.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19240159605380797,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.2%",
              "display_range": null,
              "display_text": "19.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 19.2,
              "plain_english": "Sector explains about 19.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6264972346730672,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.142857142857143,
          "current_probability": 1.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.02699320524079106,
            "low": 0.02699320524079106,
            "high": 0.02699320524079106
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.04240249322200865,
            "low": 0.04240249322200865,
            "high": 0.04240249322200865
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8285714285714286,
            0.17142857142857143
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.000000000000004,
            6.0
          ],
          [
            6.0,
            30.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 74,
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
        "market_link_display": "-0.44",
        "sector_link_display": "0.81",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.44% stock move in the opposite direction in this state. This is a point estimate from 74 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.81% stock move in the same direction in this state. This is a point estimate from 74 trading days.",
        "stock_persistence_display": "-0.62",
        "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
        "history_limited_note": "Read is based on 74 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 45.6,
        "driver_share_display": "45.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 74 trading days relative to the 252-day target.",
        "history_days": 74,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8285714285714286,
        "effective_days": 36.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.1 days.",
        "expected_duration_days": 5.1
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
          "pct_time": 0.5,
          "expected_duration_days": 5.142857142857143,
          "current_probability": 1.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.02699320524079106,
            "low": 0.02699320524079106,
            "high": 0.02699320524079106
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 36.0,
          "volatility": {
            "median": 0.04240249322200865,
            "low": 0.04240249322200865,
            "high": 0.04240249322200865
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8285714285714286,
          0.17142857142857143
        ],
        [
          0.16666666666666666,
          0.8333333333333334
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8285714285714286,
            0.17142857142857143
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.000000000000004,
            6.0
          ],
          [
            6.0,
            30.0
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
        "text": "Liquidity score: 72.4 — Strong",
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
    "liq_subtitle": "Structural liquidity is strong for the stock’s size, although the current book is less supportive for sellers.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "One-month performance is well ahead of peers and the market, giving the stock a firmer recent backdrop.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 45.6% of price changes. Other influences are market 18.0%, and sector 36.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 18.0%, sector 36.4%, and company-specific 45.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 18.0%, sector 36.4%, and company-specific 45.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific drivers account for 45.6% of the current mix, so stock news is likely to matter more than broader market moves. That matters more because bid depth is only 0.39x ask depth, which can make downside trading feel thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily company-driven, with company-specific factors at 45.6%.",
      "Monthly change: the stock has remained company-driven from March to May rather than shifting back toward broader market influences."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is supportive in price terms, but the displayed book remains uneven.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 13, 2026 (76 trading days • 12,148 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key watchpoint is thin buy-side",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The displayed book is the main near-term execution signal.",
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
    "intraday_insight": "The clearest near-term read is the imbalance in displayed depth. Bid depth is only 0.39x ask depth while the spread is 1 tick, which means trading can feel orderly on the spread but thinner when selling into the book.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current trading picture.",
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
    "exec_subtitle": "Liquid for its size, but the displayed book shows thin buy-side support.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 3 months of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "72.4/100",
        "sub": "Peer median 46.7 (+25.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$228.5K",
        "sub": "Peer median S$7.1K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.17 ticks; peers 4.31%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong on a structural basis, with a 3M score of 72.4 compared with a peer median of 46.7. The near-term caveat is the displayed book, where bid depth is only 0.39x ask depth even with a 1 tick spread. That matters because access screens well overall, but sell-side execution can feel thinner than the headline liquidity score implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.258",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.94%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.39x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.97% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.40% with 98.2% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.40% with 39.3% fill.",
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
        "value": "72",
        "suffix": "/100",
        "bar_pct": 72,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 155/557",
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
        "value": "2.50",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.50% • 1.17 ticks vs peers 4.31%",
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
        "value": "228.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.1K",
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
        "value": "45.6",
        "suffix": "company-specific",
        "bar_pct": 46,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 18.0% • Sector 36.4%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size. The 3M liquidity score is 72.4 compared with a peer median of 46.7, which means the name screens as accessible relative to peers.",
      "Recent price performance is notably stronger. The stock returned 18.2% over 1M compared with 0.5% for peers and 0.4% for the market, which gives the tape a firmer backdrop.",
      "The main watchpoint is the displayed book. Bid depth is only 0.39x ask depth despite a 1 tick spread, and company-specific factors account for 45.6% of the current driver mix, so downside execution can feel thinner if stock news turns sentiment."
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
      "overall": "3M liquidity is strong: score 72.4 vs peer median 46.7 (+25.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 72.4 vs peer median 46.7 (+25.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +25.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 18.2%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 18.2% vs market 0.9%.",
        "vs_sector": "Better than sector: 18.2% vs sector -7.0%.",
        "vs_peers": "Better than peers: 18.2% vs peers -2.1%."
      },
      "adv": {
        "insight": "ADV is S$228.5K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$228.5K vs market S$11.8K.",
        "vs_sector": "Better than sector: S$228.5K vs sector S$7.1K.",
        "vs_peers": "Better than peers: S$228.5K vs peers S$7.1K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.50% vs market 3.10%.",
        "vs_sector": "Worse than sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 4.31%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.16% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 53.04%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 53.04% vs market 47.57%.",
        "vs_sector": "Worse than sector: 53.04% vs sector 44.60%.",
        "vs_peers": "In line with peers: 53.04% vs peers 56.49%."
      },
      "trades": {
        "insight": "Trades is 62, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 62 vs market 6.",
        "vs_sector": "Better than sector: 62 vs sector 6.",
        "vs_peers": "Better than peers: 62 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.46e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 4.94e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 5.58e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 1M return of 18.2% compared with 0.5% for peers and 0.4% for the market. Liquidity partly confirms that move because the stock’s 3M liquidity score of 72.4 sits well above the peer median of 46.7, which supports access for its size.",
      "conclusion": "The move looks mainly company-specific rather than broad-market or sector-led, and liquidity supports access overall even as the buy side remains thinner in the displayed book."
    },
    "drivers": {
      "overall": "Price moves are being led mainly by company-specific factors, with 45.6% of the current driver mix coming from stock-specific influences. That matters because the name is reacting more to its own news flow than to broader market moves, which fits with its stronger 1M return of 18.2% compared with 0.5% for peers and 0.4% for the market.",
      "beta": "Based on the last 5 trading days, current mix is market 18.0%, sector 36.4%, and company-specific 45.6%.",
      "rolling_change": "This looks more stable than temporary, as the stock was mostly company-driven in March and April and is still clearly company-driven in May. The read may still be taken as directional because it is based on available history from late January to mid-May rather than a full year."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.0% of the time. Based on 74 trading days relative to the 252-day target.",
      "transitions": "This state looks fairly stable because it typically lasts about 5.1 days, although the read is based on a shorter history and may be treated as mixed rather than definitive.",
      "trading_implications": "Trading conditions may feel more orderly while this calmer state holds, but thin displayed bid depth at 0.39x of ask depth means buy-side support can still give way quickly."
    },
    "execution": {
      "overall": "The displayed book reads as thin buy-side because bid depth is only 0.39x ask depth while the spread remains 1 tick. That means quoted pricing looks orderly, but immediate visible support on the buy side is materially lighter than the sell side.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to May 13, 2026 (76 trading days • 12,148 trades), not a full year.",
      "peer_context": "The broader liquidity picture still screens well, with a 3M score of 72.4 compared with a peer median of 46.7, but the current book is less supportive than that ranking implies. Trade-size context is based on 76 trading days and 12,148 trades, so the displayed imbalance carries more weight in the near-term read."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on the observed trade mix, which makes day-to-day activity look broad but still mixed in depth.",
      "retail_heavy": "Retail-like trades account for 88.2% of trade count and 36.1% of trade value, compared with institution-like trades at 1.1% of count and 16.9% of value. That shows participation is dominated by many smaller tickets, while larger value still sits outside the retail bucket.",
      "institutional_gap": "Institution-like activity is sparse by count at 1.1% of trades, even though it contributes 16.9% of value. That leaves the tape supported by broad participation rather than a deep pool of larger orders.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price action is being driven more by stock-specific factors than by the market, which makes trading flow more sensitive to company news. Company-specific drivers account for 45.6% of the current move, while the stock is up 18.2% over one month compared with 0.5% for peers and 0.4% for the market. That gives the tape a firm backdrop, but it also means flow can react quickly to stock-level developments.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not a meaningful driver of current trading conditions. The stronger one-month share price gain of 18.2%, compared with 0.5% for peers and 0.4% for the market, points more to positive stock-specific demand than to short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest looks stable rather than rising, so it does not add a new source of stress to the broader liquidity picture.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity appears through the day rather than only at the edges, with 95.8% of trading in the continuous session and a concentration score of 0.289. That points to a steadier intraday market even though the opening and closing auctions are light.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 2.0% and close at 1.5% contribute relatively little. That means trading conditions are most reliable away from the auction windows.",
      "peer_ranking": "Relative to peers, the intraday pattern looks more anchored in continuous trading, which supports a steadier flow profile through the session."
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
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        72.35188509874327,
        1.0771992818671454,
        3.859964093357271,
        47.03770197486535,
        46.319569120287255,
        35.00897666068223,
        64.27289048473968,
        50.987432675044886,
        83.84201077199282
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
        228475.0,
        0.0,
        0.0,
        5114.3,
        11145.4,
        639.0,
        64287.5,
        9114.0,
        809414.0
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.5303681455781305,
        "adv": 228475.0,
        "spread_pct": 0.02496157393175533,
        "turnover_ratio": 0.001602655002574305,
        "amihud": 7.83519022118116e-08,
        "trades": 62.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6855183801840733,
          "median": 0.4757225112446752,
          "min": 0.0,
          "max": 7.107469945927176,
          "p5": 0.15851840193107378,
          "p95": 2.2201923505837455,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3380674.938775532,
          "median": 11830.0,
          "min": 0.0,
          "max": 306786193.7,
          "p5": 0.0,
          "p95": 13106383.599999947,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10046219388938141,
          "median": 0.031003217315004293,
          "min": 0.0002742695631217783,
          "max": 1.3400402414486918,
          "p5": 0.0035508696516023982,
          "p95": 0.4604419557292643,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006534990778711877,
          "median": 0.0002797779694726035,
          "min": 0.0,
          "max": 2.3103289170127215,
          "p5": 0.0,
          "p95": 0.011416608981406598,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.211569616881281e-05,
          "median": 1.4611760212736376e-07,
          "min": 0.0,
          "max": 0.0005935746352413022,
          "p5": 0.0,
          "p95": 3.99537792703361e-05,
          "count": 552
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 482.0125673249551,
          "median": 6.0,
          "min": 0.0,
          "max": 11430.0,
          "p5": 0.0,
          "p95": 2831.999999999998,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8640502078080105,
          "median": 0.44596014002378126,
          "min": 0.26552100836144127,
          "max": 2.28509876728461,
          "p5": 0.2869225329527455,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1971622.1624999999,
          "median": 7114.15,
          "min": 0.0,
          "max": 14720220.999999998,
          "p5": 0.0,
          "p95": 9851438.549999991,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1558672867928876,
          "median": 0.02196904330434396,
          "min": 0.0013472113994984552,
          "max": 0.6666666666666666,
          "p5": 0.004620331678174671,
          "p95": 0.5955284552845528,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0029233248815463235,
          "median": 7.816623405176616e-05,
          "min": 0.0,
          "max": 0.011869321934992728,
          "p5": 0.0,
          "p95": 0.011119247217062376,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.553577430508643e-05,
          "median": 4.939318380361731e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 1.9817372920580365e-10,
          "p95": 0.0002346763275099377,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 503.75,
          "median": 5.5,
          "min": 0.0,
          "max": 3587.0,
          "p5": 0.0,
          "p95": 2460.699999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 112464.275,
          "median": 7114.15,
          "min": 0.0,
          "max": 809414.0,
          "p5": 0.0,
          "p95": 548619.7249999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 51.875,
          "median": 5.5,
          "min": 0.0,
          "max": 369.0,
          "p5": 0.0,
          "p95": 248.24999999999983,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0013666052982162,
          "median": 0.5649148423055074,
          "min": 0.3266682214794533,
          "max": 2.28509876728461,
          "p5": 0.33803354459919555,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16657624323030668,
          "median": 0.04314579055195506,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013112956989814444,
          "p95": 0.5955284552845528,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.076938405216179,
          "median": 1.6154754569726844,
          "min": 1.0,
          "max": 20.0,
          "p5": 1.0152173913043478,
          "p95": 14.137499999999992,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5551723941184646e-05,
          "median": 5.58013487756469e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.0002346763275099377,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002044750202781495,
          "median": 7.816623405176616e-05,
          "min": 0.0,
          "max": 0.011869321934992728,
          "p5": 0.0,
          "p95": 0.0087437468708999,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.061224489795918435,
        "market": 0.015541744283229297,
        "sector": 0.00729189498074323,
        "peers": 0.010082677664974726
      },
      {
        "horizon": "1M",
        "stock": 0.18181818181818166,
        "market": 0.003970578726789187,
        "sector": -0.00557050949089255,
        "peers": 0.004681296454256634
      },
      {
        "horizon": "3M",
        "stock": 0.18181818181818077,
        "market": 0.008694085895560644,
        "sector": -0.0698069342412716,
        "peers": -0.021046100711363147
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
      "share_market": 0.1804860793715825,
      "share_sector": 0.36378444930326737,
      "share_idio": 0.45572947132515007,
      "beta_market": -0.4441819480415253,
      "beta_sector": 0.8075334954109037,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 74,
        "reporting_window_days": 63,
        "available_history_days": 74,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.1804860793715825,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "18.0%",
            "display_range": null,
            "display_text": "18.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "share_pct",
            "value_pct": 18.0,
            "plain_english": "Market explains about 18.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.36378444930326737,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.4%",
            "display_range": null,
            "display_text": "36.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "share_pct",
            "value_pct": 36.4,
            "plain_english": "Sector explains about 36.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.45572947132515007,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.6%",
            "display_range": null,
            "display_text": "45.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "share_pct",
            "value_pct": 45.6,
            "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.4441819480415253,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.44",
            "display_range": null,
            "display_text": "-0.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.44% stock move in the opposite direction in this state.",
            "value_num": -0.44
          },
          "beta_stock_lag": {
            "median": -0.6220172739391734,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.62",
            "display_range": null,
            "display_text": "-0.62",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "lag_beta",
            "value_num": -0.62
          },
          "beta_sector": {
            "median": 0.8075334954109037,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.81",
            "display_range": null,
            "display_text": "0.81",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.81% stock move in the same direction in this state.",
            "value_num": 0.81
          },
          "beta_market_lag": {
            "median": 0.7089572755963158,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.71",
            "display_range": null,
            "display_text": "0.71",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "lag_beta",
            "value_num": 0.71
          },
          "beta_sector_lag": {
            "median": 0.8910911741900435,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.89",
            "display_range": null,
            "display_text": "0.89",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
            "kind": "lag_beta",
            "value_num": 0.89
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 74 trading days relative to the 252-day target."
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
              "median": 0.47931948471963903,
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
                "median": 0.47931948471963903,
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
                "median": 0.2984396411024004,
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
                "median": 0.2222408741779605,
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
              "median": 0.5656898926629685,
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
                "median": 0.26479317957873116,
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
                "median": 0.16951692775830024,
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
                "median": 0.5656898926629685,
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
              "median": 0.537921465360335,
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
                "median": 0.22982068067655398,
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
                "median": 0.537921465360335,
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
              "median": 0.5202476822091704,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34425966677405034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1354926510167792,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202476822091704,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-13",
            "n_obs": 8,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6264972346730672,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.181101169273125,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.1%",
                "display_range": null,
                "display_text": "18.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 18.1,
                "plain_english": "Market explains about 18.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19240159605380797,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.2%",
                "display_range": null,
                "display_text": "19.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 19.2,
                "plain_english": "Sector explains about 19.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6264972346730672,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.6%",
                "display_range": null,
                "display_text": "62.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 8 trading days.",
                "kind": "share_pct",
                "value_pct": 62.6,
                "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.142857142857143,
            "current_probability": 1.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.02699320524079106,
              "low": 0.02699320524079106,
              "high": 0.02699320524079106
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.04240249322200865,
              "low": 0.04240249322200865,
              "high": 0.04240249322200865
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8285714285714286,
              0.17142857142857143
            ],
            [
              0.16666666666666666,
              0.8333333333333334
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              29.000000000000004,
              6.0
            ],
            [
              6.0,
              30.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 74,
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
          "market_link_display": "-0.44",
          "sector_link_display": "0.81",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.44% stock move in the opposite direction in this state. This is a point estimate from 74 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.81% stock move in the same direction in this state. This is a point estimate from 74 trading days.",
          "stock_persistence_display": "-0.62",
          "point_estimate_note": "Point estimate only because the current state has 74 trading days.",
          "history_limited_note": "Read is based on 74 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 45.6,
          "driver_share_display": "45.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 74 trading days relative to the 252-day target.",
          "history_days": 74,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8285714285714286,
          "effective_days": 36.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.1 days.",
          "expected_duration_days": 5.1
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
          "share_market": 0.47931948471963903,
          "share_sector": 0.2984396411024004,
          "share_company": 0.2222408741779605,
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
          "share_market": 0.26479317957873116,
          "share_sector": 0.16951692775830024,
          "share_company": 0.5656898926629685,
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
          "share_market": 0.22982068067655398,
          "share_sector": 0.23225785396311108,
          "share_company": 0.537921465360335,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
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
          "share_market": 0.34425966677405034,
          "share_sector": 0.1354926510167792,
          "share_company": 0.5202476822091704,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-13",
          "n_obs": 8,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.181101169273125,
          "share_sector": 0.19240159605380797,
          "share_company": 0.6264972346730672,
          "share_market_display": "18.1%",
          "share_sector_display": "19.2%",
          "share_company_display": "62.6%",
          "dominant_share_display": "62.6%"
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
          0.5,
          0.5
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.142857142857143,
            "current_probability": 1.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.02699320524079106,
              "low": 0.02699320524079106,
              "high": 0.02699320524079106
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 36.0,
            "volatility": {
              "median": 0.04240249322200865,
              "low": 0.04240249322200865,
              "high": 0.04240249322200865
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8285714285714286,
            0.17142857142857143
          ],
          [
            0.16666666666666666,
            0.8333333333333334
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 868600.0,
          "value": 221493.0
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 842700.0,
          "value": 210675.0
        },
        {
          "level": 3,
          "price": 0.245,
          "quantity": 395000.0,
          "value": 96775.0
        },
        {
          "level": 4,
          "price": 0.24,
          "quantity": 879000.0,
          "value": 210960.0
        },
        {
          "level": 5,
          "price": 0.235,
          "quantity": 218000.0,
          "value": 51230.0
        },
        {
          "level": 6,
          "price": 0.23,
          "quantity": 46100.0,
          "value": 10603.0
        },
        {
          "level": 7,
          "price": 0.225,
          "quantity": 255000.0,
          "value": 57375.0
        },
        {
          "level": 8,
          "price": 0.22,
          "quantity": 160000.0,
          "value": 35200.0
        },
        {
          "level": 9,
          "price": 0.215,
          "quantity": 372800.0,
          "value": 80152.0
        },
        {
          "level": 10,
          "price": 0.21,
          "quantity": 7000.0,
          "value": 1470.0
        },
        {
          "level": 11,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.26,
          "quantity": 113300.0,
          "value": 29458.0
        },
        {
          "level": 2,
          "price": 0.265,
          "quantity": 1424600.0,
          "value": 377519.0
        },
        {
          "level": 3,
          "price": 0.27,
          "quantity": 920800.0,
          "value": 248616.00000000003
        },
        {
          "level": 4,
          "price": 0.275,
          "quantity": 764100.0,
          "value": 210127.50000000003
        },
        {
          "level": 5,
          "price": 0.28,
          "quantity": 420900.0,
          "value": 117852.00000000001
        },
        {
          "level": 6,
          "price": 0.285,
          "quantity": 304000.0,
          "value": 86639.99999999999
        },
        {
          "level": 7,
          "price": 0.29,
          "quantity": 362000.0,
          "value": 104980.0
        },
        {
          "level": 8,
          "price": 0.295,
          "quantity": 397200.0,
          "value": 117174.0
        },
        {
          "level": 9,
          "price": 0.3,
          "quantity": 3514000.0,
          "value": 1054200.0
        },
        {
          "level": 10,
          "price": 0.305,
          "quantity": 222000.0,
          "value": 67710.0
        },
        {
          "level": 11,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 12,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 13,
          "price": 0.35,
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 14,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        },
        {
          "level": 15,
          "price": 0.36,
          "quantity": 2000.0,
          "value": 720.0
        },
        {
          "level": 16,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-13 08:59:48.348500000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2575,
        "spread_pct": 0.019417475728155355,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 981933.0,
        "ask_depth_notional_displayed": 2492186.5,
        "bid_depth_notional_top10": 981933.0,
        "ask_depth_notional_top10": 2492186.5,
        "bid_ask_depth_ratio": 0.394
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 112,
        "history_limited": true,
        "trade_days_used": 76,
        "n_trades_used": 12148,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-13",
        "window_label": "Jan 22, 2026 to May 13, 2026",
        "window_short_label": "Jan 22-May 13",
        "trade_days_label": "76 trading days",
        "trade_count_label": "12,148 trades",
        "window_detail_label": "76 trading days • 12,148 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 13, 2026 (76 trading days • 12,148 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10582.5,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.08,
            "pct_of_adv": 4.93
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14250.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.45,
            "pct_of_adv": 6.63
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 166465.54,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.95,
            "pct_of_adv": 77.5
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-12 22:59:01.208200000",
            "local_timestamp": "2026-05-13 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.064029,
            "filled_pct": 99.7,
            "levels_consumed": 11,
            "pct_of_bid_depth": 100.33,
            "price_vs_mid_pct": 16.505,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8148306400857847808",
            "timestamp": "2026-05-13 07:27:35.076300000",
            "local_timestamp": "2026-05-13 15:27:35",
            "posted_price": 0.275,
            "size_shares": 540000.0,
            "notional": 148500.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.12,
            "price_vs_mid_pct": 6.796,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8148306400858108928",
            "timestamp": "2026-05-13 08:06:02.465400000",
            "local_timestamp": "2026-05-13 16:06:02",
            "posted_price": 0.265,
            "size_shares": 400000.0,
            "notional": 106000.0,
            "impact_pct": -0.009709,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.8,
            "price_vs_mid_pct": 2.913,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-13",
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
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 715077.5,
            "ask_depth_notional": 2440762.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 710177.5,
            "ask_depth_notional": 2451122.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 658427.5,
            "ask_depth_notional": 2465733.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 648427.5,
            "ask_depth_notional": 2465733.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 654292.5,
            "ask_depth_notional": 2465733.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 655992.5,
            "ask_depth_notional": 2465733.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 655992.5,
            "ask_depth_notional": 2468392.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 655992.5,
            "ask_depth_notional": 2460592.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 655992.5,
            "ask_depth_notional": 2460847.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 785892.5,
            "ask_depth_notional": 2445497.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 954983.0,
            "ask_depth_notional": 2547813.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1021038.0,
            "ask_depth_notional": 2559789.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.019047619047619063,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1095906.0,
            "ask_depth_notional": 2463897.0,
            "mid_price": 0.2625
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 981933.0,
            "ask_depth_notional": 2492186.5,
            "mid_price": 0.2575
          }
        ],
        "summary": {
          "median_spread_pct": 0.01980198019801982,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 684302.5,
          "median_ask_depth_notional": 2465733.0,
          "tightest_bucket": "16:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "10:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 23.3,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 91.3
        },
        {
          "ticker": "J03",
          "pct": 458.4
        },
        {
          "ticker": "42F",
          "pct": 566.5
        },
        {
          "ticker": "U77",
          "pct": 17854.0
        },
        {
          "ticker": "LVR",
          "pct": 20577.2
        },
        {
          "ticker": "532",
          "pct": 79678.1
        },
        {
          "ticker": "NXR",
          "pct": 312989.0
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 42,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-13",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.7619047619047619,
            "mixed_pct": 0.19047619047619047,
            "instit_pct": 0.047619047619047616,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3107371328874673,
            "mixed_qty_pct": 0.33378162256469907,
            "instit_qty_pct": 0.3554812445478337,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.31023118090923985,
            "mixed_notional_pct": 0.33216513504714396,
            "instit_notional_pct": 0.3576036840436162,
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
              "retail": 32,
              "mixed": 8,
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
            "avg": 16930.154761904763,
            "median": 10200.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7619047619047619,
              "mixed_pct": 0.19047619047619047,
              "instit_pct": 0.047619047619047616,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3107371328874673,
              "mixed_qty_pct": 0.33378162256469907,
              "instit_qty_pct": 0.3554812445478337,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.31023118090923985,
              "mixed_notional_pct": 0.33216513504714396,
              "instit_notional_pct": 0.3576036840436162,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 16930.154761904763,
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
              "ticker": "42F",
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
              "avg_trade_size": 2504.266666666667,
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
              "ticker": "NXR",
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
              "avg_trade_size": 7695.000000000001,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9523809523809523,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5730337078651685,
              "mixed_qty_pct": 0.42696629213483145,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5733229277874112,
              "mixed_notional_pct": 0.4266770722125888,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2172.22380952381,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.95,
              "mixed_pct": 0.05,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46518912992403477,
              "mixed_qty_pct": 0.5348108700759653,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4660202724990981,
              "mixed_notional_pct": 0.533979727500902,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2696.797916666667,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9181818181818182,
              "mixed_pct": 0.08181818181818182,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5826909411110425,
              "mixed_qty_pct": 0.41730905888895753,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5845233492998319,
              "mixed_notional_pct": 0.4154766507001682,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3934.1845454545455,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 277,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-07",
          "last_trade_date": "2026-05-13",
          "period_days": 6,
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
            "retail_pct": 0.7725631768953068,
            "mixed_pct": 0.19494584837545126,
            "instit_pct": 0.032490974729241874,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2401661627229604,
            "mixed_qty_pct": 0.47856389913728536,
            "instit_qty_pct": 0.2812699381397542,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23965140785365158,
            "mixed_notional_pct": 0.47875753053996783,
            "instit_notional_pct": 0.28159106160638053,
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
              "retail": 214,
              "mixed": 54,
              "institutional": 9,
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
            "avg": 13317.31227436823,
            "median": 5000.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7725631768953068,
              "mixed_pct": 0.19494584837545126,
              "instit_pct": 0.032490974729241874,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2401661627229604,
              "mixed_qty_pct": 0.47856389913728536,
              "instit_qty_pct": 0.2812699381397542,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23965140785365158,
              "mixed_notional_pct": 0.47875753053996783,
              "instit_notional_pct": 0.28159106160638053,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 13317.31227436823,
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
              "ticker": "LVR",
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
              "avg_trade_size": 2295.0,
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
              "ticker": "532",
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
              "avg_trade_size": 770.03,
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
              "ticker": "NXR",
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
              "avg_trade_size": 3375.5,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9666666666666667,
              "mixed_pct": 0.03333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7532467532467533,
              "mixed_qty_pct": 0.24675324675324675,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7544635592161949,
              "mixed_notional_pct": 0.2455364407838052,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2642.3233333333337,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9559532002752925,
              "mixed_pct": 0.042670337233310394,
              "instit_pct": 0.0013764624913971094,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4251089487194794,
              "mixed_qty_pct": 0.5269536147095696,
              "instit_qty_pct": 0.04793743657095099,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4260213270290684,
              "mixed_notional_pct": 0.5269545225710013,
              "instit_notional_pct": 0.04702415039993029,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2306.2346868547834,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9064748201438849,
              "mixed_pct": 0.08633093525179857,
              "instit_pct": 0.007194244604316547,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4812250351667025,
              "mixed_qty_pct": 0.4158308331776245,
              "instit_qty_pct": 0.10294413165567304,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.48035930141300326,
              "mixed_notional_pct": 0.4148566362907186,
              "instit_notional_pct": 0.10478406229627814,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5412.982014388488,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8913649025069638,
              "mixed_pct": 0.10863509749303621,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5364390983242024,
              "mixed_qty_pct": 0.46356090167579755,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5425308686429733,
              "mixed_notional_pct": 0.4574691313570266,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5103.697632311978,
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
          "n_trades": 955,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-14",
          "last_trade_date": "2026-05-13",
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
            "retail_pct": 0.8157068062827225,
            "mixed_pct": 0.1581151832460733,
            "instit_pct": 0.02617801047120419,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.262407384974425,
            "mixed_qty_pct": 0.46198612103427217,
            "instit_qty_pct": 0.27560649399130277,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2617677761146306,
            "mixed_notional_pct": 0.46204870660425046,
            "instit_notional_pct": 0.2761835172811189,
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
              "retail": 779,
              "mixed": 151,
              "institutional": 25,
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
            "avg": 10541.632460732984,
            "median": 2600.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8157068062827225,
              "mixed_pct": 0.1581151832460733,
              "instit_pct": 0.02617801047120419,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.262407384974425,
              "mixed_qty_pct": 0.46198612103427217,
              "instit_qty_pct": 0.27560649399130277,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2617677761146306,
              "mixed_notional_pct": 0.46204870660425046,
              "instit_notional_pct": 0.2761835172811189,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10541.632460732984,
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
              "ticker": "532",
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
              "avg_trade_size": 399.9235521235521,
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
              "ticker": "NXR",
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
              "avg_trade_size": 2861.897435897436,
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
              "ticker": "KUX",
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
              "avg_trade_size": 510.14,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9803921568627451,
              "mixed_pct": 0.0196078431372549,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8391715880592185,
              "mixed_qty_pct": 0.16082841194078148,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8400061780581387,
              "mixed_notional_pct": 0.15999382194186124,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2412.0784313725494,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9523809523809523,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7639282341831917,
              "mixed_qty_pct": 0.2360717658168083,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7570224240958242,
              "mixed_notional_pct": 0.24297757590417574,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3322.0535714285716,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9291034482758621,
              "mixed_pct": 0.06468965517241379,
              "instit_pct": 0.006206896551724138,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35953078070987365,
              "mixed_qty_pct": 0.4761366856192977,
              "instit_qty_pct": 0.1643325336708287,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36100481890440284,
              "mixed_notional_pct": 0.47456773251874296,
              "instit_notional_pct": 0.1644274485768542,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3716.8557241379312,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9128233970753655,
              "mixed_pct": 0.08717660292463442,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6111654910754344,
              "mixed_qty_pct": 0.38883450892456567,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6082577157273207,
              "mixed_notional_pct": 0.3917422842726794,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4952.003655793026,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8685503685503686,
              "mixed_pct": 0.12407862407862408,
              "instit_pct": 0.007371007371007371,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.41716160536163666,
              "mixed_qty_pct": 0.47137722260614834,
              "instit_qty_pct": 0.11146117203221502,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.41971936462321163,
              "mixed_notional_pct": 0.4676355321713614,
              "instit_notional_pct": 0.112645103205427,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6376.413390663391,
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
          "n_trades": 3226,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-10",
          "last_trade_date": "2026-05-13",
          "period_days": 92,
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
            "retail_pct": 0.8818970861748295,
            "mixed_pct": 0.10756354618722877,
            "instit_pct": 0.010539367637941723,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3646685185473486,
            "mixed_qty_pct": 0.4694473048019162,
            "instit_qty_pct": 0.16588417665073515,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3605085220267547,
            "mixed_notional_pct": 0.4700614510483345,
            "instit_notional_pct": 0.16943002692491077,
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
              "retail": 2845,
              "mixed": 347,
              "institutional": 34,
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
            "avg": 6724.2873527588345,
            "median": 1768.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8818970861748295,
              "mixed_pct": 0.10756354618722877,
              "instit_pct": 0.010539367637941723,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3646685185473486,
              "mixed_qty_pct": 0.4694473048019162,
              "instit_qty_pct": 0.16588417665073515,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3605085220267547,
              "mixed_notional_pct": 0.4700614510483345,
              "instit_notional_pct": 0.16943002692491077,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6724.2873527588345,
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
              "ticker": "532",
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
              "avg_trade_size": 420.66541095890415,
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
              "ticker": "KUX",
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
              "avg_trade_size": 452.0941176470588,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9927140255009107,
              "mixed_pct": 0.007285974499089253,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8833112214988739,
              "mixed_qty_pct": 0.11668877850112616,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8835681347439143,
              "mixed_notional_pct": 0.11643186525608583,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1198.9876138433515,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.967741935483871,
              "mixed_pct": 0.021505376344086023,
              "instit_pct": 0.010752688172043012,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3279499663539564,
              "mixed_qty_pct": 0.03871274195463722,
              "instit_qty_pct": 0.6333372916914064,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.330696731084096,
              "mixed_notional_pct": 0.04051240082868689,
              "instit_notional_pct": 0.6287908680872171,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10123.543010752688,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9336734693877551,
              "mixed_pct": 0.0663265306122449,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5889076362053013,
              "mixed_qty_pct": 0.41109236379469877,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5943405314307341,
              "mixed_notional_pct": 0.4056594685692659,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3906.0420918367345,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9210656142081894,
              "mixed_pct": 0.07893438579181056,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6402341759994655,
              "mixed_qty_pct": 0.3597658240005345,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.626606327133357,
              "mixed_notional_pct": 0.37339367286664304,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4660.225900345337,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9179496151154654,
              "mixed_pct": 0.07446932586890599,
              "instit_pct": 0.0075810590156286444,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3555585501685137,
              "mixed_qty_pct": 0.46516583188124255,
              "instit_qty_pct": 0.17927561795024377,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3572099039356554,
              "mixed_notional_pct": 0.4637049490619137,
              "instit_notional_pct": 0.17908514700243092,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4418.970258922323,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8989715668481548,
              "mixed_pct": 0.09437386569872959,
              "instit_pct": 0.006654567453115548,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46010183381585396,
              "mixed_qty_pct": 0.40363415795102625,
              "instit_qty_pct": 0.1362640082331198,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4536244582465546,
              "mixed_notional_pct": 0.4088167928407122,
              "instit_notional_pct": 0.1375587489127331,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5502.566727162734,
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
      "n_trades": 3226,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-10",
      "last_trade_date": "2026-05-13",
      "period_days": 92,
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
        "retail_pct": 0.8818970861748295,
        "mixed_pct": 0.10756354618722877,
        "instit_pct": 0.010539367637941723,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3605085220267547,
        "mixed_notional_pct": 0.4700614510483345,
        "instit_notional_pct": 0.16943002692491077,
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
        "avg": 6724.2873527588345,
        "median": 1768.0
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
            "month": "2026-05",
            "n_trades": 316,
            "n_runs": 0,
            "retail_pct": 0.8132911392405063,
            "mixed_pct": 0.16455696202531644,
            "instit_pct": 0.022151898734177215,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 10714.106012658227,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2703204691326588,
            "mixed_qty_pct": 0.49917242722227634,
            "instit_qty_pct": 0.23050710364506488,
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
            "total_quantity": 13352300.0
          },
          {
            "month": "2026-04",
            "n_trades": 913,
            "n_runs": 0,
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
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
            "total_quantity": 31633800.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8818970861748295,
          "mixed_pct": 0.10756354618722877,
          "instit_pct": 0.010539367637941723,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3646685185473486,
          "mixed_qty_pct": 0.4694473048019162,
          "instit_qty_pct": 0.16588417665073515,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3605085220267547,
          "mixed_notional_pct": 0.4700614510483345,
          "instit_notional_pct": 0.16943002692491077,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6724.2873527588345,
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
          "ticker": "532",
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
          "avg_trade_size": 420.66541095890415,
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
          "ticker": "KUX",
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
          "avg_trade_size": 452.0941176470588,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9927140255009107,
          "mixed_pct": 0.007285974499089253,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8833112214988739,
          "mixed_qty_pct": 0.11668877850112616,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8835681347439143,
          "mixed_notional_pct": 0.11643186525608583,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1198.9876138433515,
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
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.967741935483871,
          "mixed_pct": 0.021505376344086023,
          "instit_pct": 0.010752688172043012,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3279499663539564,
          "mixed_qty_pct": 0.03871274195463722,
          "instit_qty_pct": 0.6333372916914064,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.330696731084096,
          "mixed_notional_pct": 0.04051240082868689,
          "instit_notional_pct": 0.6287908680872171,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 10123.543010752688,
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
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9336734693877551,
          "mixed_pct": 0.0663265306122449,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5889076362053013,
          "mixed_qty_pct": 0.41109236379469877,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5943405314307341,
          "mixed_notional_pct": 0.4056594685692659,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3906.0420918367345,
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
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9210656142081894,
          "mixed_pct": 0.07893438579181056,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6402341759994655,
          "mixed_qty_pct": 0.3597658240005345,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.626606327133357,
          "mixed_notional_pct": 0.37339367286664304,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4660.225900345337,
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
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9179496151154654,
          "mixed_pct": 0.07446932586890599,
          "instit_pct": 0.0075810590156286444,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3555585501685137,
          "mixed_qty_pct": 0.46516583188124255,
          "instit_qty_pct": 0.17927561795024377,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3572099039356554,
          "mixed_notional_pct": 0.4637049490619137,
          "instit_notional_pct": 0.17908514700243092,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4418.970258922323,
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
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8989715668481548,
          "mixed_pct": 0.09437386569872959,
          "instit_pct": 0.006654567453115548,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46010183381585396,
          "mixed_qty_pct": 0.40363415795102625,
          "instit_qty_pct": 0.1362640082331198,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4536244582465546,
          "mixed_notional_pct": 0.4088167928407122,
          "instit_notional_pct": 0.1375587489127331,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5502.566727162734,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7619047619047619,
            "mixed_pct": 0.19047619047619047,
            "instit_pct": 0.047619047619047616,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3107371328874673,
            "mixed_qty_pct": 0.33378162256469907,
            "instit_qty_pct": 0.3554812445478337,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.31023118090923985,
            "mixed_notional_pct": 0.33216513504714396,
            "instit_notional_pct": 0.3576036840436162,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 16930.154761904763,
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
            "ticker": "42F",
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
            "avg_trade_size": 2504.266666666667,
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
            "ticker": "NXR",
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
            "avg_trade_size": 7695.000000000001,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9523809523809523,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5730337078651685,
            "mixed_qty_pct": 0.42696629213483145,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5733229277874112,
            "mixed_notional_pct": 0.4266770722125888,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2172.22380952381,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.95,
            "mixed_pct": 0.05,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46518912992403477,
            "mixed_qty_pct": 0.5348108700759653,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4660202724990981,
            "mixed_notional_pct": 0.533979727500902,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2696.797916666667,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9181818181818182,
            "mixed_pct": 0.08181818181818182,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5826909411110425,
            "mixed_qty_pct": 0.41730905888895753,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5845233492998319,
            "mixed_notional_pct": 0.4154766507001682,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3934.1845454545455,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7725631768953068,
            "mixed_pct": 0.19494584837545126,
            "instit_pct": 0.032490974729241874,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2401661627229604,
            "mixed_qty_pct": 0.47856389913728536,
            "instit_qty_pct": 0.2812699381397542,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23965140785365158,
            "mixed_notional_pct": 0.47875753053996783,
            "instit_notional_pct": 0.28159106160638053,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 13317.31227436823,
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
            "ticker": "LVR",
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
            "avg_trade_size": 2295.0,
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
            "ticker": "532",
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
            "avg_trade_size": 770.03,
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
            "ticker": "NXR",
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
            "avg_trade_size": 3375.5,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9666666666666667,
            "mixed_pct": 0.03333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7532467532467533,
            "mixed_qty_pct": 0.24675324675324675,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7544635592161949,
            "mixed_notional_pct": 0.2455364407838052,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2642.3233333333337,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9559532002752925,
            "mixed_pct": 0.042670337233310394,
            "instit_pct": 0.0013764624913971094,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4251089487194794,
            "mixed_qty_pct": 0.5269536147095696,
            "instit_qty_pct": 0.04793743657095099,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4260213270290684,
            "mixed_notional_pct": 0.5269545225710013,
            "instit_notional_pct": 0.04702415039993029,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2306.2346868547834,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9064748201438849,
            "mixed_pct": 0.08633093525179857,
            "instit_pct": 0.007194244604316547,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4812250351667025,
            "mixed_qty_pct": 0.4158308331776245,
            "instit_qty_pct": 0.10294413165567304,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.48035930141300326,
            "mixed_notional_pct": 0.4148566362907186,
            "instit_notional_pct": 0.10478406229627814,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5412.982014388488,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8913649025069638,
            "mixed_pct": 0.10863509749303621,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5364390983242024,
            "mixed_qty_pct": 0.46356090167579755,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5425308686429733,
            "mixed_notional_pct": 0.4574691313570266,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5103.697632311978,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8157068062827225,
            "mixed_pct": 0.1581151832460733,
            "instit_pct": 0.02617801047120419,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.262407384974425,
            "mixed_qty_pct": 0.46198612103427217,
            "instit_qty_pct": 0.27560649399130277,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2617677761146306,
            "mixed_notional_pct": 0.46204870660425046,
            "instit_notional_pct": 0.2761835172811189,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10541.632460732984,
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
            "ticker": "532",
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
            "avg_trade_size": 399.9235521235521,
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
            "ticker": "NXR",
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
            "avg_trade_size": 2861.897435897436,
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
            "ticker": "KUX",
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
            "avg_trade_size": 510.14,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9803921568627451,
            "mixed_pct": 0.0196078431372549,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8391715880592185,
            "mixed_qty_pct": 0.16082841194078148,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8400061780581387,
            "mixed_notional_pct": 0.15999382194186124,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2412.0784313725494,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9523809523809523,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7639282341831917,
            "mixed_qty_pct": 0.2360717658168083,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7570224240958242,
            "mixed_notional_pct": 0.24297757590417574,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3322.0535714285716,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9291034482758621,
            "mixed_pct": 0.06468965517241379,
            "instit_pct": 0.006206896551724138,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35953078070987365,
            "mixed_qty_pct": 0.4761366856192977,
            "instit_qty_pct": 0.1643325336708287,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36100481890440284,
            "mixed_notional_pct": 0.47456773251874296,
            "instit_notional_pct": 0.1644274485768542,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3716.8557241379312,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9128233970753655,
            "mixed_pct": 0.08717660292463442,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6111654910754344,
            "mixed_qty_pct": 0.38883450892456567,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6082577157273207,
            "mixed_notional_pct": 0.3917422842726794,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4952.003655793026,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8685503685503686,
            "mixed_pct": 0.12407862407862408,
            "instit_pct": 0.007371007371007371,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.41716160536163666,
            "mixed_qty_pct": 0.47137722260614834,
            "instit_qty_pct": 0.11146117203221502,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.41971936462321163,
            "mixed_notional_pct": 0.4676355321713614,
            "instit_notional_pct": 0.112645103205427,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6376.413390663391,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8818970861748295,
            "mixed_pct": 0.10756354618722877,
            "instit_pct": 0.010539367637941723,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3646685185473486,
            "mixed_qty_pct": 0.4694473048019162,
            "instit_qty_pct": 0.16588417665073515,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3605085220267547,
            "mixed_notional_pct": 0.4700614510483345,
            "instit_notional_pct": 0.16943002692491077,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6724.2873527588345,
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
            "ticker": "532",
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
            "avg_trade_size": 420.66541095890415,
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
            "ticker": "KUX",
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
            "avg_trade_size": 452.0941176470588,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9927140255009107,
            "mixed_pct": 0.007285974499089253,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8833112214988739,
            "mixed_qty_pct": 0.11668877850112616,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8835681347439143,
            "mixed_notional_pct": 0.11643186525608583,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1198.9876138433515,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.967741935483871,
            "mixed_pct": 0.021505376344086023,
            "instit_pct": 0.010752688172043012,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3279499663539564,
            "mixed_qty_pct": 0.03871274195463722,
            "instit_qty_pct": 0.6333372916914064,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.330696731084096,
            "mixed_notional_pct": 0.04051240082868689,
            "instit_notional_pct": 0.6287908680872171,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10123.543010752688,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9336734693877551,
            "mixed_pct": 0.0663265306122449,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5889076362053013,
            "mixed_qty_pct": 0.41109236379469877,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5943405314307341,
            "mixed_notional_pct": 0.4056594685692659,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3906.0420918367345,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9210656142081894,
            "mixed_pct": 0.07893438579181056,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6402341759994655,
            "mixed_qty_pct": 0.3597658240005345,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.626606327133357,
            "mixed_notional_pct": 0.37339367286664304,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4660.225900345337,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9179496151154654,
            "mixed_pct": 0.07446932586890599,
            "instit_pct": 0.0075810590156286444,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3555585501685137,
            "mixed_qty_pct": 0.46516583188124255,
            "instit_qty_pct": 0.17927561795024377,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3572099039356554,
            "mixed_notional_pct": 0.4637049490619137,
            "instit_notional_pct": 0.17908514700243092,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4418.970258922323,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8989715668481548,
            "mixed_pct": 0.09437386569872959,
            "instit_pct": 0.006654567453115548,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46010183381585396,
            "mixed_qty_pct": 0.40363415795102625,
            "instit_qty_pct": 0.1362640082331198,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4536244582465546,
            "mixed_notional_pct": 0.4088167928407122,
            "instit_notional_pct": 0.1375587489127331,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5502.566727162734,
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
      "total_trades": 6815,
      "price_moving_trades": 1342,
      "pct_price_moving": 19.691856199559794,
      "all_movers": {
        "count": 1342,
        "avg_size": 7063.930700447094,
        "median_size": 931.75,
        "retail_count": 1139,
        "mixed_count": 185,
        "institutional_count": 18,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.87332339791355,
        "mixed_pct": 13.785394932935915,
        "instit_pct": 1.3412816691505216,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 673,
        "avg_size": 5231.641158989599,
        "median_size": 73.5,
        "retail_count": 595,
        "mixed_count": 72,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.41010401188707,
        "mixed_pct": 10.698365527488855,
        "instit_pct": 0.8915304606240713,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 669,
        "avg_size": 8907.175635276531,
        "median_size": 2400.0,
        "retail_count": 544,
        "mixed_count": 113,
        "institutional_count": 12,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.31539611360239,
        "mixed_pct": 16.89088191330344,
        "instit_pct": 1.7937219730941705,
        "unclear_pct": null
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
        "n_days_short_data": 64,
        "window_days": 63
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
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
            "avg_short_ratio": 0.0048339324531777896,
            "max_short_ratio": 0.0924792304328815,
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
            "month": "2026-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
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
            "month": "2026-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
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
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2771200,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1212000,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 925100,
            "close": 0.255,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8857000,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1731600,
            "close": 0.25,
            "return": 0.020408163265306145
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 439300,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 570000,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 674700,
            "close": 0.245,
            "return": 0.042553191489361764
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 757800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 460300,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
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
            "return": 0.040000000000000036
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1722300,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1623700,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1450400,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3005400,
            "close": 0.26,
            "return": 0.061224489795918435
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 655800,
            "close": 0.245,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2119900,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1310400,
            "close": 0.25,
            "return": 0.08695652173913038
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2619400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
            "total_vol": 1588200,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1992800,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3371800,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42F",
          "avg_short_ratio": 2.4900385074969807e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.741077330155511e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00043798783600433843,
          "max_short_ratio": 0.04373162853885592,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0033299183715099975,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.005505717737124192,
          "max_short_ratio": 0.28210566910914,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "3M",
        "1W"
      ],
      "session": {
        "1D": {
          "opening": 0.008395550596919668,
          "continuous": 0.9875459367922471,
          "closing": 0.0040585126108332046,
          "auctions": 0.012454063207752872,
          "other": 0.0
        },
        "1W": {
          "opening": 0.06073611756298335,
          "continuous": 0.9328703947905723,
          "closing": 0.00615547134635793,
          "auctions": 0.06712960520942766,
          "other": 0.0
        },
        "1M": {
          "opening": 0.02594743397414546,
          "continuous": 0.9494597049832406,
          "closing": 0.015936351361284108,
          "auctions": 0.05054029501675939,
          "other": 0.0
        },
        "3M": {
          "opening": 0.020132374077054947,
          "continuous": 0.9579441461896381,
          "closing": 0.01542700922101255,
          "auctions": 0.04205585381036192,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.27891976080767367,
        "1W": 0.3128697594028354,
        "1M": 0.34160482300668127,
        "3M": 0.2889872466119212
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0141
        },
        {
          "time": "09:00",
          "avg_share": 0.1087
        },
        {
          "time": "09:30",
          "avg_share": 0.097
        },
        {
          "time": "10:00",
          "avg_share": 0.049
        },
        {
          "time": "10:30",
          "avg_share": 0.0811
        },
        {
          "time": "11:00",
          "avg_share": 0.0734
        },
        {
          "time": "11:30",
          "avg_share": 0.0556
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0027
        },
        {
          "time": "13:00",
          "avg_share": 0.0958
        },
        {
          "time": "13:30",
          "avg_share": 0.059
        },
        {
          "time": "14:00",
          "avg_share": 0.0567
        },
        {
          "time": "14:30",
          "avg_share": 0.0549
        },
        {
          "time": "15:00",
          "avg_share": 0.0424
        },
        {
          "time": "15:30",
          "avg_share": 0.0625
        },
        {
          "time": "16:00",
          "avg_share": 0.0392
        },
        {
          "time": "16:30",
          "avg_share": 0.0736
        },
        {
          "time": "17:00",
          "avg_share": 0.0321
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.264857588995507,
          "hhi": 0.2670411760411488,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 3.2801850519491573,
          "hhi": 0.6756866005597023,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 10.677436590719086,
          "hhi": 0.8192821260298468,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.569386508039581,
          "hhi": 0.5546100685883338,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.794120342712792,
          "hhi": 0.5394296402331128,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.4912237888267574,
          "hhi": 0.7661197447127782,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 8.90013593172505,
          "hhi": 0.4597963069229825,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.916246721137795,
          "hhi": 0.4654672047820977,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.193677639949949,
          "hhi": 0.19144909306484867,
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
