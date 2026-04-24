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
      "ticker": "142",
      "name": "FIRST PACIFIC",
      "marketCap": 23569523760.370003,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "151",
      "name": "WANT WANT CHINA",
      "marketCap": 52635453262.1,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "9985",
      "name": "WL DELICIOUS",
      "marketCap": 22706899698.52,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1768",
      "name": "BUSYMING",
      "marketCap": 84855518943.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "2517",
      "name": "GUOQUAN",
      "marketCap": 11752566912.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "288",
      "name": "WH GROUP",
      "marketCap": 136898442598.5,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1475",
      "name": "NISSIN FOODS",
      "marketCap": 7671132378.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "2460",
      "name": "CR BEVERAGE",
      "marketCap": 21895534958.0,
      "sector": "Non-alcoholic Beverages",
      "industry": "Consumer Staples - Food & Beverages"
    },
    {
      "ticker": "1117",
      "name": "CH MODERN D",
      "marketCap": 11398553349.119999,
      "sector": "Dairy Products",
      "industry": "Consumer Staples - Food & Beverages"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "142",
    "company": "FIRST PACIFIC",
    "asof_date": "2026-04-17",
    "industry": "Consumer Staples - Food & Beverages",
    "sector": "Packaged Foods",
    "market_cap_display": "23.6B",
    "market_cap_category": "large",
    "universe_total": 2575,
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
          "score_pca": 75.92233009708738,
          "score_pca_percentile": 75.92233009708738,
          "rank_pca": 621,
          "total": 2575,
          "adv_notional_sgd": 18758440.0,
          "adv_volume_shares": 3386000.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.0016972188235030994,
          "votes": 751.0,
          "trades": 751.0,
          "spread_pct": 0.002628118160275704,
          "spread_ticks": 1.4506314580941446,
          "amihud": 6.651788933446165e-10,
          "volatility": 0.2917805244252582
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5414164227370362,
          "loadings": {
            "log_adv": 0.5411431316364753,
            "log_trades": 0.5028440244640013,
            "log_turnover": 0.5022157258266974,
            "neg_spread": 0.4030272109250826,
            "neg_amihud": 0.029431837528738278,
            "neg_vol": -0.19696242552707743
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
          "peer_median_adv": 32275080.0,
          "peer_median_score_pca": 78.27184466019418,
          "peer_median_trades": 987.5,
          "peer_median_volatility": 0.2328092367746955,
          "peer_median_spread_pct": 0.003306211347277187,
          "peer_median_spread_ticks": 1.6541143654114365,
          "peer_median_amihud": 3.8955827226166957e-10,
          "peer_median_turnover_ratio": 0.004105546963180046,
          "target_vs_peer": {
            "score_pca_delta": -2.35,
            "adv_delta_pct": -41.9,
            "trades_delta_pct": -23.95,
            "volatility_delta_pct": -25.33,
            "spread_pct_delta_pct": 20.51,
            "spread_ticks_delta_pct": -12.3,
            "amihud_delta_pct": -70.75,
            "turnover_ratio_delta_pct": -58.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 75.92233009708738,
            "rank_pca": 621,
            "adv": 18758440.0,
            "trades": 751.0,
            "volatility": 0.2917805244252582,
            "spread_pct": 0.002628118160275704,
            "spread_ticks": 1.4506314580941446,
            "amihud": 6.651788933446165e-10,
            "turnover_ratio": 0.0016972188235030994,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 74.83495145631068,
            "rank_pca": 649,
            "adv": 16985634.080000002,
            "trades": 1064.0,
            "volatility": 0.21233870093552296,
            "spread_pct": 0.0031188222679049173,
            "spread_ticks": 1.3929088277858177,
            "amihud": 1.308295122664108e-10,
            "turnover_ratio": 0.0007761904474019109,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 87.72815533980582,
            "rank_pca": 317,
            "adv": 46589382.0,
            "trades": 3302.0,
            "volatility": 0.261211231942709,
            "spread_pct": 0.0018254269975419937,
            "spread_ticks": 1.6541143654114365,
            "amihud": 4.4231913767711846e-10,
            "turnover_ratio": 0.009791946381264788,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 78.5242718446602,
            "rank_pca": 554,
            "adv": 61732160.0,
            "trades": 876.0,
            "volatility": 0.2074656532077736,
            "spread_pct": 0.004589808396836348,
            "spread_ticks": 9.29428708593375,
            "amihud": 6.402771537494316e-11,
            "turnover_ratio": 0.001897224370737576,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 99.22330097087378,
            "rank_pca": 21,
            "adv": 331795461.40000004,
            "trades": 16905.0,
            "volatility": 1.3120290347311565,
            "spread_pct": 0.003493600426649457,
            "spread_ticks": 1.1025280898876404,
            "amihud": 3.367974068462207e-10,
            "turnover_ratio": 0.09444937928911709,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 92.42718446601941,
            "rank_pca": 196,
            "adv": 236031885.17999998,
            "trades": 7931.0,
            "volatility": 0.2532797726138681,
            "spread_pct": 0.0010899526150390689,
            "spread_ticks": null,
            "amihud": 5.553747207591477e-11,
            "turnover_ratio": 0.003148770440926012,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 57.0873786407767,
            "rank_pca": 1106,
            "adv": 904050.0,
            "trades": 54.0,
            "volatility": 0.2098266498446407,
            "spread_pct": 0.010417945525018816,
            "spread_ticks": 7.5508474576271185,
            "amihud": 1.6805895874947012e-08,
            "turnover_ratio": 0.0006541527424316655,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 78.01941747572816,
            "rank_pca": 567,
            "adv": 17960778.0,
            "trades": 911.0,
            "volatility": 0.17101110656239488,
            "spread_pct": 0.0019880955249777306,
            "spread_ticks": 1.7678571428571428,
            "amihud": 6.179453436980922e-10,
            "turnover_ratio": 0.00506232348543408,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 76.62135922330097,
            "rank_pca": 603,
            "adv": 13987569.999999998,
            "trades": 675.0,
            "volatility": 0.2704752629538463,
            "spread_pct": 0.00809529772096407,
            "spread_ticks": 1.1331232768806616,
            "amihud": 1.9997775147526003e-09,
            "turnover_ratio": 0.006903927237296896,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4606083327846296,
              "median": 0.29743321154702856,
              "min": 0.0,
              "max": 14.47512907154,
              "p5": 0.0,
              "p95": 1.5351663917752916,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61874683.598444775,
              "median": 259600.0,
              "min": 0.0,
              "max": 7015444150.0,
              "p5": 0.0,
              "p95": 272825684.62999994,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.046854686613493,
              "median": 0.027648554974235982,
              "min": 0.0005202294325766778,
              "max": 0.7648559970834851,
              "p5": 0.001340978222259295,
              "p95": 0.15664967142989358,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006784061498978354,
              "median": 0.0010535360233514944,
              "min": 0.0,
              "max": 1.8839653158976088,
              "p5": 0.0,
              "p95": 0.020805457425247174,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5493919141099805e-05,
              "median": 8.679816414938958e-09,
              "min": 0.0,
              "max": 0.021212121212121206,
              "p5": 0.0,
              "p95": 6.919964849284608e-06,
              "count": 2187
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1143.6753398058252,
              "median": 23.0,
              "min": 0.0,
              "max": 56653.0,
              "p5": 0.0,
              "p95": 6264.49999999998,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.46642433008602635,
              "median": 0.261211231942709,
              "min": 0.0,
              "max": 2.452263394263455,
              "p5": 0.0,
              "p95": 1.758833782952074,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 21722101.74971429,
              "median": 295260.0,
              "min": 0.0,
              "max": 331795461.40000004,
              "p5": 0.0,
              "p95": 114022077.5539995,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04163363810011504,
              "median": 0.03488372093023243,
              "min": 0.0010899526150390689,
              "max": 0.20577164366373896,
              "p5": 0.002387310811455591,
              "p95": 0.104345842506786,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005900319062712363,
              "median": 0.001536388140161725,
              "min": 0.0,
              "max": 0.09444937928911709,
              "p5": 0.0,
              "p95": 0.018444113628156237,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0233934334320605e-05,
              "median": 1.7320790087208503e-08,
              "min": 0.0,
              "max": 0.0009448223733938027,
              "p5": 0.0,
              "p95": 0.0001411089421986034,
              "count": 30
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 990.3714285714286,
              "median": 23.0,
              "min": 0.0,
              "max": 16905.0,
              "p5": 0.0,
              "p95": 4690.699999999987,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 90748365.0825,
              "median": 32275080.0,
              "min": 904050.0,
              "max": 331795461.40000004,
              "p5": 5483282.0,
              "p95": 298278209.723,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3964.75,
              "median": 987.5,
              "min": 54.0,
              "max": 16905.0,
              "p5": 271.35,
              "p95": 13764.099999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36220467659898903,
              "median": 0.2328092367746955,
              "min": 0.17101110656239488,
              "max": 1.3120290347311565,
              "p5": 0.18377019788827742,
              "p95": 0.9474852146090973,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.004327368684366549,
              "median": 0.003306211347277187,
              "min": 0.0010899526150390689,
              "max": 0.010417945525018816,
              "p5": 0.0013473686489150925,
              "p95": 0.009605018793599653,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.4136666066262236,
              "median": 1.6541143654114365,
              "min": 1.1025280898876404,
              "max": 9.29428708593375,
              "p5": 1.1117066459855467,
              "p95": 8.771255197441759,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5566412472047887e-09,
              "median": 3.8955827226166957e-10,
              "min": 5.553747207591477e-11,
              "max": 1.6805895874947012e-08,
              "p5": 5.850905723057471e-11,
              "p95": 1.162375444887896e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.015335489299326252,
              "median": 0.004105546963180046,
              "min": 0.0006541527424316655,
              "max": 0.09444937928911709,
              "p5": 0.0006968659391712514,
              "p95": 0.06481927777136874,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.012477718360071388,
            "market": -0.0014824289551570446,
            "sector": 0.0,
            "peers": -0.012103696683252396,
            "vs_market": -0.010995289404914343,
            "vs_sector": -0.012477718360071388,
            "vs_peers": -0.0003740216768189919
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 79.2233009708738,
          "score_pca_percentile": 79.2233009708738,
          "rank_pca": 536,
          "total": 2575,
          "adv_notional_sgd": 24889501.0,
          "adv_volume_shares": 4336150.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.002173477673222966,
          "votes": 970.0,
          "trades": 970.0,
          "spread_pct": 0.0025967880275649916,
          "spread_ticks": 1.431980906921241,
          "amihud": 3.469566779890472e-10,
          "volatility": 0.21269442888105444
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5729524789918395,
          "loadings": {
            "log_adv": 0.5194355292760027,
            "log_trades": 0.4741854328731592,
            "log_turnover": 0.4775783830728823,
            "neg_spread": 0.4657318053078168,
            "neg_amihud": 0.22886004968897103,
            "neg_vol": 0.08927909822141523
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
          "peer_median_adv": 32615439.8,
          "peer_median_score_pca": 82.46601941747574,
          "peer_median_trades": 1664.0,
          "peer_median_volatility": 0.4620177558980373,
          "peer_median_spread_pct": 0.0033231043078183345,
          "peer_median_spread_ticks": 1.5297071945822047,
          "peer_median_amihud": 4.3110994677751434e-10,
          "peer_median_turnover_ratio": 0.004881123913021585,
          "target_vs_peer": {
            "score_pca_delta": -3.24,
            "adv_delta_pct": -23.7,
            "trades_delta_pct": -41.71,
            "volatility_delta_pct": 53.96,
            "spread_pct_delta_pct": 21.86,
            "spread_ticks_delta_pct": -6.39,
            "amihud_delta_pct": 19.52,
            "turnover_ratio_delta_pct": -55.47
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 79.2233009708738,
            "rank_pca": 536,
            "adv": 24889501.0,
            "trades": 970.0,
            "volatility": 0.21269442888105444,
            "spread_pct": 0.0025967880275649916,
            "spread_ticks": 1.431980906921241,
            "amihud": 3.469566779890472e-10,
            "turnover_ratio": 0.002173477673222966,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 79.53398058252428,
            "rank_pca": 528,
            "adv": 24258169.6,
            "trades": 1602.0,
            "volatility": 0.31303603211701814,
            "spread_pct": 0.0032814199352199543,
            "spread_ticks": 1.4647816208028275,
            "amihud": 4.3639874776002595e-10,
            "turnover_ratio": 0.0011109969962607494,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 88.11650485436893,
            "rank_pca": 307,
            "adv": 40972710.0,
            "trades": 3765.0,
            "volatility": 0.5300612495742199,
            "spread_pct": 0.0022514714107568835,
            "spread_ticks": 2.055596062029762,
            "amihud": 4.4782669744787725e-10,
            "turnover_ratio": 0.008078915640533386,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 80.31067961165049,
            "rank_pca": 508,
            "adv": 61732160.0,
            "trades": 1022.0,
            "volatility": 0.591211554254458,
            "spread_pct": 0.003657423382456353,
            "spread_ticks": 7.23432518597237,
            "amihud": 3.2862236883299944e-10,
            "turnover_ratio": 0.0019259512703603307,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 90.25242718446603,
            "rank_pca": 252,
            "adv": 65193087.84,
            "trades": 4555.0,
            "volatility": 0.9317851377686854,
            "spread_pct": 0.0033647886804167144,
            "spread_ticks": 1.4576926535383508,
            "amihud": 3.8732328933797787e-10,
            "turnover_ratio": 0.012581099640100587,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 95.22330097087378,
            "rank_pca": 124,
            "adv": 289999807.62,
            "trades": 8629.0,
            "volatility": 0.39397426222185467,
            "spread_pct": 0.001132746497945235,
            "spread_ticks": 1.1465328353264428,
            "amihud": 5.553747207591477e-11,
            "turnover_ratio": 0.0038983152861872283,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 59.728155339805824,
            "rank_pca": 1038,
            "adv": 524690.0,
            "trades": 42.0,
            "volatility": 0.1745012670979946,
            "spread_pct": 0.008111976074804766,
            "spread_ticks": 5.962264150943396,
            "amihud": 9.518763219479915e-09,
            "turnover_ratio": 0.00037760036351746544,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 83.26213592233009,
            "rank_pca": 432,
            "adv": 21038331.98,
            "trades": 1726.0,
            "volatility": 0.24754446925467619,
            "spread_pct": 0.0017775643411758121,
            "spread_ticks": 1.594632768361582,
            "amihud": 4.2582114579500274e-10,
            "turnover_ratio": 0.005863932539855941,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 81.66990291262137,
            "rank_pca": 473,
            "adv": 18008640.0,
            "trades": 1527.0,
            "volatility": 0.5732402346177429,
            "spread_pct": 0.00809529772096407,
            "spread_ticks": 1.1461162411732755,
            "amihud": 1.331188309738559e-09,
            "turnover_ratio": 0.008850309188227165,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7064911540105824,
              "median": 0.5531049931225953,
              "min": 0.0,
              "max": 27.90380296291469,
              "p5": 0.20476969274917517,
              "p95": 1.5952550843872353,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 63273664.234980494,
              "median": 232050.0,
              "min": 0.0,
              "max": 11658608500.0,
              "p5": 0.0,
              "p95": 246716315.15999973,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04629142011845388,
              "median": 0.029277218664226883,
              "min": 0.0005981764858699591,
              "max": 0.6003953685399606,
              "p5": 0.0014515642388116738,
              "p95": 0.15000290131432553,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004403236095258407,
              "median": 0.0008991717874780955,
              "min": 0.0,
              "max": 0.5801635442500266,
              "p5": 0.0,
              "p95": 0.01624085006975813,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2916770441973411e-06,
              "median": 5.000980192117637e-08,
              "min": 0.0,
              "max": 0.00030847461286986937,
              "p5": 4.120537003427931e-11,
              "p95": 4.910239764639181e-06,
              "count": 2569
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1152.2533980582525,
              "median": 20.0,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6058.69999999999,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5953316574495333,
              "median": 0.542352417615592,
              "min": 0.1745012670979946,
              "max": 1.2321335924731738,
              "p5": 0.22555814972638188,
              "p95": 1.0206417201568074,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 16085984.716000002,
              "median": 157760.0,
              "min": 0.0,
              "max": 289999807.62,
              "p5": 0.0,
              "p95": 62770438.35199999,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.040135546224623064,
              "median": 0.03250591016548467,
              "min": 0.001132746497945235,
              "max": 0.15513626834381541,
              "p5": 0.002493193042522559,
              "p95": 0.09622661406716056,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021718080786662327,
              "median": 0.0008992805755395684,
              "min": 0.0,
              "max": 0.016412636870779755,
              "p5": 0.0,
              "p95": 0.009429570840403533,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.194123792910619e-07,
              "median": 7.400555041628094e-08,
              "min": 0.0,
              "max": 9.071117561683567e-06,
              "p5": 2.2147461059825013e-10,
              "p95": 5.382731428615356e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 688.9714285714285,
              "median": 10.0,
              "min": 0.0,
              "max": 8629.0,
              "p5": 0.0,
              "p95": 4001.9999999999977,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 65215949.63,
              "median": 32615439.8,
              "min": 524690.0,
              "max": 289999807.62,
              "p5": 6644072.500000001,
              "p95": 211317455.69699988,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2858.5,
              "median": 1664.0,
              "min": 42.0,
              "max": 8629.0,
              "p5": 385.00000000000006,
              "p95": 7203.099999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4694192758633312,
              "median": 0.4620177558980373,
              "min": 0.1745012670979946,
              "max": 0.9317851377686854,
              "p5": 0.20006638785283315,
              "p95": 0.8125843835387057,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003959086005467473,
              "median": 0.0033231043078183345,
              "min": 0.001132746497945235,
              "max": 0.008111976074804766,
              "p5": 0.001358432743075937,
              "p95": 0.008106138650960522,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.757742689768501,
              "median": 1.5297071945822047,
              "min": 1.1461162411732755,
              "max": 7.23432518597237,
              "p5": 1.146262049126884,
              "p95": 6.789103823712228,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6164351563085338e-09,
              "median": 4.3110994677751434e-10,
              "min": 5.553747207591477e-11,
              "max": 9.518763219479915e-09,
              "p5": 1.5111718594089444e-10,
              "p95": 6.653112001070436e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005335890115630357,
              "median": 0.004881123913021585,
              "min": 0.00037760036351746544,
              "max": 0.012581099640100587,
              "p5": 0.0006342891849776148,
              "p95": 0.011275322981944887,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.04317789291882557,
            "market": 0.009680127313925535,
            "sector": -0.037812813469041306,
            "peers": -0.04154883999896941,
            "vs_market": -0.0528580202327511,
            "vs_sector": -0.00536507944978426,
            "vs_peers": -0.0016290529198561554
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 79.2621359223301,
          "score_pca_percentile": 79.2621359223301,
          "rank_pca": 535,
          "total": 2575,
          "adv_notional_sgd": 24485097.0,
          "adv_volume_shares": 4114290.0,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.0020622712443445265,
          "votes": 938.0,
          "trades": 938.0,
          "spread_pct": 0.002574488364459398,
          "spread_ticks": 1.4987080103359174,
          "amihud": 3.5853472029884773e-10,
          "volatility": 0.2168212304101303
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6165821905537313,
          "loadings": {
            "log_adv": 0.49972857525770853,
            "log_trades": 0.4521821298918113,
            "log_turnover": 0.4549959404472896,
            "neg_spread": 0.45768235410466174,
            "neg_amihud": 0.33788976054738906,
            "neg_vol": 0.12303958351821509
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
          "peer_median_adv": 33700695.0,
          "peer_median_score_pca": 83.86407766990291,
          "peer_median_trades": 1678.5,
          "peer_median_volatility": 0.35327359361832766,
          "peer_median_spread_pct": 0.0030770642373968717,
          "peer_median_spread_ticks": 1.4806190310724885,
          "peer_median_amihud": 3.8032510551720887e-10,
          "peer_median_turnover_ratio": 0.005498780859130635,
          "target_vs_peer": {
            "score_pca_delta": -4.6,
            "adv_delta_pct": -27.3,
            "trades_delta_pct": -44.12,
            "volatility_delta_pct": 38.63,
            "spread_pct_delta_pct": 16.33,
            "spread_ticks_delta_pct": 1.22,
            "amihud_delta_pct": 5.73,
            "turnover_ratio_delta_pct": -62.5
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 79.2621359223301,
            "rank_pca": 535,
            "adv": 24485097.0,
            "trades": 938.0,
            "volatility": 0.2168212304101303,
            "spread_pct": 0.002574488364459398,
            "spread_ticks": 1.4987080103359174,
            "amihud": 3.5853472029884773e-10,
            "turnover_ratio": 0.0020622712443445265,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 80.3495145631068,
            "rank_pca": 507,
            "adv": 26410690.0,
            "trades": 1635.0,
            "volatility": 0.2444735131448779,
            "spread_pct": 0.0028201005094935345,
            "spread_ticks": 1.3536121673003803,
            "amihud": 3.699244005090666e-10,
            "turnover_ratio": 0.0011567215427531583,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 88.07766990291263,
            "rank_pca": 308,
            "adv": 40972710.0,
            "trades": 3493.0,
            "volatility": 0.40398868301321533,
            "spread_pct": 0.0028271092225506922,
            "spread_ticks": 2.055596062029762,
            "amihud": 3.98412789741563e-10,
            "turnover_ratio": 0.006965996045624351,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 82.64077669902913,
            "rank_pca": 448,
            "adv": 80328100.0,
            "trades": 1404.5,
            "volatility": 0.5721813268725846,
            "spread_pct": 0.0036189586716155312,
            "spread_ticks": 7.2245252303488225,
            "amihud": 2.5987342516282064e-10,
            "turnover_ratio": 0.0024711378653747822,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 89.4368932038835,
            "rank_pca": 273,
            "adv": 56413010.65,
            "trades": 3882.0,
            "volatility": 0.6807873832743585,
            "spread_pct": 0.003327019252243051,
            "spread_ticks": 1.3770934629929767,
            "amihud": 3.9072581052535115e-10,
            "turnover_ratio": 0.011898769487969887,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 95.53398058252426,
            "rank_pca": 116,
            "adv": 276159879.5,
            "trades": 8021.0,
            "volatility": 0.30255850422343994,
            "spread_pct": 0.0011607045095703924,
            "spread_ticks": 1.0995179673964977,
            "amihud": 4.639448781239513e-11,
            "turnover_ratio": 0.004087407287007963,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 65.94174757281553,
            "rank_pca": 878,
            "adv": 1267500.0,
            "trades": 63.0,
            "volatility": 0.14799739803699744,
            "spread_pct": 0.006071959175763845,
            "spread_ticks": 4.253521126760563,
            "amihud": 4.498729109026709e-09,
            "turnover_ratio": 0.0008987952314711502,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 85.0873786407767,
            "rank_pca": 385,
            "adv": 26428680.0,
            "trades": 1705.0,
            "volatility": 0.2165861939106072,
            "spread_pct": 0.0016351939110607631,
            "spread_ticks": 1.5841445991520002,
            "amihud": 3.1896834101557936e-10,
            "turnover_ratio": 0.006910154431253306,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 82.29126213592232,
            "rank_pca": 457,
            "adv": 21186950.0,
            "trades": 1652.0,
            "volatility": 0.5024470496420058,
            "spread_pct": 0.007793076782841615,
            "spread_ticks": 1.156177924217463,
            "amihud": 8.637670347059977e-10,
            "turnover_ratio": 0.009675651975315327,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7228119263418495,
              "median": 0.5771587045701507,
              "min": 0.0,
              "max": 24.034972130139103,
              "p5": 0.2253849949870918,
              "p95": 1.5808301587048426,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61041944.23143736,
              "median": 228000.0,
              "min": 0.0,
              "max": 13677295520.0,
              "p5": 0.0,
              "p95": 237526051.6619994,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042886035774932545,
              "median": 0.027540007443245144,
              "min": 0.0005607359268088029,
              "max": 0.5829822478408243,
              "p5": 0.0014363912227576864,
              "p95": 0.1336789418129749,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0040330489838989285,
              "median": 0.0008739248598721349,
              "min": 0.0,
              "max": 0.4102056640783613,
              "p5": 0.0,
              "p95": 0.015967261319439482,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.044529089518911e-07,
              "median": 4.3344457189984584e-08,
              "min": 0.0,
              "max": 3.0007966099973762e-05,
              "p5": 4.598927450103271e-11,
              "p95": 3.6661953808616382e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1083.5190291262136,
              "median": 20.0,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 5932.799999999998,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5624833386434772,
              "median": 0.5343490068244956,
              "min": 0.13424044983777877,
              "max": 1.172909988244474,
              "p5": 0.19617408069819045,
              "p95": 1.0170227512033336,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15835378.166714286,
              "median": 109190.0,
              "min": 0.0,
              "max": 276159879.5,
              "p5": 0.0,
              "p95": 63587537.45499993,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03551648306785883,
              "median": 0.03423755596523573,
              "min": 0.0011607045095703924,
              "max": 0.08219178082191789,
              "p5": 0.0027464168659832935,
              "p95": 0.07911052151160365,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002241427874461926,
              "median": 0.0008987952314711502,
              "min": 0.0,
              "max": 0.016270356471683237,
              "p5": 0.0,
              "p95": 0.011026469399844177,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.332397516456839e-07,
              "median": 5.6722100893298815e-08,
              "min": 4.639448781239513e-11,
              "max": 7.2004435112428855e-06,
              "p5": 3.289363317580396e-10,
              "p95": 3.2487960452243914e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 638.7285714285714,
              "median": 10.0,
              "min": 0.0,
              "max": 8021.0,
              "p5": 0.0,
              "p95": 3609.699999999999,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 66145940.01875,
              "median": 33700695.0,
              "min": 1267500.0,
              "max": 276159879.5,
              "p5": 8239307.500000001,
              "p95": 207618756.6749999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2731.9375,
              "median": 1678.5,
              "min": 63.0,
              "max": 8021.0,
              "p5": 532.5250000000001,
              "p95": 6572.349999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3838775065147608,
              "median": 0.35327359361832766,
              "min": 0.14799739803699744,
              "max": 0.6807873832743585,
              "p5": 0.17200347659276086,
              "p95": 0.6427752635337376,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0036567652543924283,
              "median": 0.0030770642373968717,
              "min": 0.0011607045095703924,
              "max": 0.007793076782841615,
              "p5": 0.0013267758000920222,
              "p95": 0.007190685620364395,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.513023567524808,
              "median": 1.4806190310724885,
              "min": 1.0995179673964977,
              "max": 7.2245252303488225,
              "p5": 1.1193489522838356,
              "p95": 6.18467379409293,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.933494248124354e-10,
              "median": 3.8032510551720887e-10,
              "min": 4.639448781239513e-11,
              "max": 4.498729109026709e-09,
              "p5": 1.2111211588504406e-10,
              "p95": 3.2264923830144583e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005508079233346241,
              "median": 0.005498780859130635,
              "min": 0.0008987952314711502,
              "max": 0.011898769487969887,
              "p5": 0.000989069440419853,
              "p95": 0.01112067835854079,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.06418918918918881,
            "market": 0.058075957564720726,
            "sector": -0.052977889926573374,
            "peers": -0.06991899562414639,
            "vs_market": -0.12226514675390954,
            "vs_sector": -0.011211299262615437,
            "vs_peers": 0.005729806434957574
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 78.87378640776699,
          "score_pca_percentile": 78.87378640776699,
          "rank_pca": 545,
          "total": 2575,
          "adv_notional_sgd": 23476243.0,
          "adv_volume_shares": 3942268.5,
          "free_float_shares": 1995028545.0,
          "turnover_ratio": 0.0019760461622868658,
          "votes": 931.0,
          "trades": 931.0,
          "spread_pct": 0.002547162920593226,
          "spread_ticks": 1.5258612109230536,
          "amihud": 3.527456991439475e-10,
          "volatility": 0.21957547467091948
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6217433466698178,
          "loadings": {
            "log_adv": 0.4987009174781396,
            "log_trades": 0.45276555136308905,
            "log_turnover": 0.4531018404213017,
            "neg_spread": 0.464048292430124,
            "neg_amihud": 0.3355580770284081,
            "neg_vol": 0.11427787119933726
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
          "peer_median_adv": 34002150.905,
          "peer_median_score_pca": 84.23300970873785,
          "peer_median_trades": 1682.75,
          "peer_median_volatility": 0.3535676367667041,
          "peer_median_spread_pct": 0.003072722312852883,
          "peer_median_spread_ticks": 1.4539963904081257,
          "peer_median_amihud": 3.260586592871619e-10,
          "peer_median_turnover_ratio": 0.005365866213213986,
          "target_vs_peer": {
            "score_pca_delta": -5.36,
            "adv_delta_pct": -31.0,
            "trades_delta_pct": -44.67,
            "volatility_delta_pct": 37.9,
            "spread_pct_delta_pct": 17.1,
            "spread_ticks_delta_pct": 4.94,
            "amihud_delta_pct": -8.18,
            "turnover_ratio_delta_pct": -63.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "142",
            "score_pca": 78.87378640776699,
            "rank_pca": 545,
            "adv": 23476243.0,
            "trades": 931.0,
            "volatility": 0.21957547467091948,
            "spread_pct": 0.002547162920593226,
            "spread_ticks": 1.5258612109230536,
            "amihud": 3.527456991439475e-10,
            "turnover_ratio": 0.0019760461622868658,
            "is_target": true
          },
          {
            "ticker": "151",
            "score_pca": 80.69902912621359,
            "rank_pca": 498,
            "adv": 28100181.64,
            "trades": 1692.5,
            "volatility": 0.2490087900358704,
            "spread_pct": 0.002715405338199672,
            "spread_ticks": 1.3236322966968743,
            "amihud": 2.8639265314034084e-10,
            "turnover_ratio": 0.0011654027680702615,
            "is_target": false
          },
          {
            "ticker": "9985",
            "score_pca": 88.46601941747572,
            "rank_pca": 298,
            "adv": 39904120.17,
            "trades": 3412.5,
            "volatility": 0.41451146415719176,
            "spread_pct": 0.002250369786474284,
            "spread_ticks": 2.055596062029762,
            "amihud": 4.0302412163092164e-10,
            "turnover_ratio": 0.006671486091840596,
            "is_target": false
          },
          {
            "ticker": "1768",
            "score_pca": 83.14563106796116,
            "rank_pca": 435,
            "adv": 80328100.0,
            "trades": 1404.5,
            "volatility": 0.5721813268725846,
            "spread_pct": 0.0036189586716155312,
            "spread_ticks": 7.2245252303488225,
            "amihud": 2.5987342516282064e-10,
            "turnover_ratio": 0.0024711378653747822,
            "is_target": false
          },
          {
            "ticker": "2517",
            "score_pca": 90.56310679611651,
            "rank_pca": 244,
            "adv": 56005828.445,
            "trades": 3651.0,
            "volatility": 0.6148830840340169,
            "spread_pct": 0.0034300392875060938,
            "spread_ticks": 1.3238481816642511,
            "amihud": 3.6572466543398295e-10,
            "turnover_ratio": 0.012300745552701565,
            "is_target": false
          },
          {
            "ticker": "288",
            "score_pca": 95.18446601941748,
            "rank_pca": 125,
            "adv": 250894518.82500002,
            "trades": 7196.5,
            "volatility": 0.28897108619647627,
            "spread_pct": 0.0012387720293120762,
            "spread_ticks": 1.087010411502231,
            "amihud": 4.5321598636088045e-11,
            "turnover_ratio": 0.004060246334587376,
            "is_target": false
          },
          {
            "ticker": "1475",
            "score_pca": 66.83495145631068,
            "rank_pca": 855,
            "adv": 1590045.0,
            "trades": 94.5,
            "volatility": 0.2926238093762165,
            "spread_pct": 0.00571250099008369,
            "spread_ticks": 3.9103442861706217,
            "amihud": 3.70729135622227e-09,
            "turnover_ratio": 0.0011859842403435887,
            "is_target": false
          },
          {
            "ticker": "2460",
            "score_pca": 85.32038834951456,
            "rank_pca": 379,
            "adv": 27164190.0,
            "trades": 1673.0,
            "volatility": 0.18747418883292963,
            "spread_pct": 0.0014919109351133344,
            "spread_ticks": 1.5841445991520002,
            "amihud": 2.3330863888471593e-10,
            "turnover_ratio": 0.0068104549360793135,
            "is_target": false
          },
          {
            "ticker": "1117",
            "score_pca": 81.7864077669903,
            "rank_pca": 470,
            "adv": 20009946.549999997,
            "trades": 1401.5,
            "volatility": 0.4560189859772058,
            "spread_pct": 0.008232760501534514,
            "spread_ticks": 1.1239380716469027,
            "amihud": 8.499583274502476e-10,
            "turnover_ratio": 0.010044757893397979,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 35,
          "market_count": 2575,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7540133520615108,
              "median": 0.5976277286183745,
              "min": 0.0,
              "max": 33.692394544883975,
              "p5": 0.22336945501400846,
              "p95": 1.5604949140568722,
              "count": 2575
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55827774.69277448,
              "median": 220236.0,
              "min": 0.0,
              "max": 11376396450.0,
              "p5": 0.0,
              "p95": 210566672.92099893,
              "count": 2575
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042107107468483534,
              "median": 0.02693923596623619,
              "min": 0.000558678699550006,
              "max": 0.5829822478408243,
              "p5": 0.0013880202374732715,
              "p95": 0.13431608871504397,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003609729674655513,
              "median": 0.00085232857389328,
              "min": 0.0,
              "max": 0.17288963574235222,
              "p5": 0.0,
              "p95": 0.014297673271822983,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.474392564885838e-07,
              "median": 4.6035326051001614e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0722288733653126e-11,
              "p95": 3.4190744476366987e-06,
              "count": 2575
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1027.5460194174757,
              "median": 20.5,
              "min": 0.0,
              "max": 90976.0,
              "p5": 0.0,
              "p95": 5617.94999999999,
              "count": 2575
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6346424103957506,
              "median": 0.5450123813746246,
              "min": 0.15774100413411424,
              "max": 2.5070860541315483,
              "p5": 0.24017879542638512,
              "p95": 1.1677379774295953,
              "count": 35
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15015080.577000001,
              "median": 87570.0,
              "min": 0.0,
              "max": 250894518.82500002,
              "p5": 0.0,
              "p95": 63302509.91149993,
              "count": 35
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.036075123795583385,
              "median": 0.037870986122261883,
              "min": 0.0012387720293120762,
              "max": 0.08219178082191789,
              "p5": 0.0024581249803575437,
              "p95": 0.0807357452186959,
              "count": 35
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022904019757581176,
              "median": 0.0008806400586154023,
              "min": 0.0,
              "max": 0.0165960126342099,
              "p5": 0.0,
              "p95": 0.013294659400896813,
              "count": 35
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.973732568197345e-07,
              "median": 8.282507381681144e-08,
              "min": 4.5321598636088045e-11,
              "max": 4.451566951566947e-06,
              "p5": 2.7843688474708477e-10,
              "p95": 3.1860732394885164e-06,
              "count": 35
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 604.4285714285714,
              "median": 10.5,
              "min": 0.0,
              "max": 7196.5,
              "p5": 0.0,
              "p95": 3484.0499999999993,
              "count": 35
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 62999616.32875,
              "median": 34002150.905,
              "min": 1590045.0,
              "max": 250894518.82500002,
              "p5": 8037010.5424999995,
              "p95": 191196272.23624992,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2565.75,
              "median": 1682.75,
              "min": 94.5,
              "max": 7196.5,
              "p5": 551.95,
              "p95": 5955.574999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3844590919353115,
              "median": 0.3535676367667041,
              "min": 0.18747418883292963,
              "max": 0.6148830840340169,
              "p5": 0.2090112992539589,
              "p95": 0.5999374690275155,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0035863396924798994,
              "median": 0.003072722312852883,
              "min": 0.0012387720293120762,
              "max": 0.008232760501534514,
              "p5": 0.0013273706463425166,
              "p95": 0.007350669672526724,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.454129892401433,
              "median": 1.4539963904081257,
              "min": 1.087010411502231,
              "max": 7.2245252303488225,
              "p5": 1.0999350925528661,
              "p95": 6.064561899886451,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.688618483201735e-10,
              "median": 3.260586592871619e-10,
              "min": 4.5321598636088045e-11,
              "max": 3.70729135622227e-09,
              "p5": 1.1111706272310781e-10,
              "p95": 2.7072247961520604e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005588776960299433,
              "median": 0.005365866213213986,
              "min": 0.0011654027680702615,
              "max": 0.012300745552701565,
              "p5": 0.001172606283365926,
              "p95": 0.01151114987194531,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.14900153609830946,
            "market": 0.12119934339494498,
            "sector": -0.0757037405220905,
            "peers": -0.07605149390739241,
            "vs_market": -0.27020087949325444,
            "vs_sector": -0.07329779557621896,
            "vs_peers": -0.07295004219091705
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is a little thinner, with average volume down 24.6% from the 1M average. That matters because immediate access is weaker than the recent monthly pace.",
        "market_comparison": "The stock fell 1.2%, in line with peers. That matters because the weaker day’s flow sits alongside a move that was not company-specific."
      },
      "30d": {
        "liquidity": "Monthly tradability is average for its size, with a 1M score of 79.2 and access that is serviceable rather than standout. That matters because investors can trade, but with less depth than stronger peers.",
        "market_comparison": "The stock returned -4.3%, broadly in line with peers at -4.2% and behind the market at +1.0%. That matters because weaker price performance has not been offset by stronger trading support.",
        "liquidity_extra": ""
      },
      "3m": {
        "liquidity": "Quarterly tradability remains average, with the liquidity score at 79.3 and still below stronger peer levels. That matters because access has been steady but not especially deep over the medium term.",
        "market_comparison": "The stock returned -6.4% compared with peers at -7.0%. That matters because relative performance was slightly better, but not enough to change the overall access profile."
      },
      "6m": {
        "liquidity": "Six-month tradability is mixed for the company’s size, with a score of 78.9 compared with a peer median of 84.2. That matters because peer-relative access is respectable, but not a clear strength.",
        "market_comparison": "Return -14.9% vs peers -7.6%."
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
          "median": 0.6512142825866198,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "65.1%",
          "display_range": null,
          "display_text": "65.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 65.1,
          "plain_english": "Market explains about 65.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.19806456487882787,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.8%",
          "display_range": null,
          "display_text": "19.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.8,
          "plain_english": "Sector explains about 19.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.15072115253455237,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.1%",
          "display_range": null,
          "display_text": "15.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.1,
          "plain_english": "Company-specific explains about 15.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 3.631499147168628,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.63",
          "display_range": null,
          "display_text": "3.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 3.63% stock move in the same direction in this state.",
          "value_num": 3.63
        },
        "beta_stock_lag": {
          "median": -2.49845305152116,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.50",
          "display_range": null,
          "display_text": "-2.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -2.5
        },
        "beta_sector": {
          "median": -3.703875147054823,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.70",
          "display_range": null,
          "display_text": "-3.70",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.70% stock move in the opposite direction in this state.",
          "value_num": -3.7
        },
        "beta_market_lag": {
          "median": 2.1067222122674565,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.11",
          "display_range": null,
          "display_text": "2.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 2.11
        },
        "beta_sector_lag": {
          "median": 0.8420935969684921,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.84",
          "display_range": null,
          "display_text": "0.84",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.84
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
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4659978521285973,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.6%",
            "display_range": null,
            "display_text": "46.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 46.6,
            "plain_english": "Market explains about 46.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4659978521285973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.182427112558283,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Sector explains about 18.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3515750353131196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.49844767371537807,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.8%",
            "display_range": null,
            "display_text": "49.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.8,
            "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3442060434875674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15734628279705462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Sector explains about 15.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.49844767371537807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
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
            "median": 0.6400047964481521,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.0%",
            "display_range": null,
            "display_text": "64.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 64.0,
            "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22356856772924144,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13642663582260645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.6%",
              "display_range": null,
              "display_text": "13.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.6,
              "plain_english": "Sector explains about 13.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6400047964481521,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.366218736205271,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.6%",
            "display_range": null,
            "display_text": "36.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.6,
            "plain_english": "Market explains about 36.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.366218736205271,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2815751399035154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Sector explains about 28.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3522061238912136,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.2%",
              "display_range": null,
              "display_text": "35.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.2,
              "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
            }
          },
          "summary": "Jul: Much more balanced across company, sector, and market factors."
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
            "median": 0.6641324686220595,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.4%",
            "display_range": null,
            "display_text": "66.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 66.4,
            "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25318309225113056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.3%",
              "display_range": null,
              "display_text": "25.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.3,
              "plain_english": "Market explains about 25.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08268443912680991,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.3%",
              "display_range": null,
              "display_text": "8.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.3,
              "plain_english": "Sector explains about 8.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6641324686220595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.4%",
              "display_range": null,
              "display_text": "66.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.4,
              "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
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
            "median": 0.6261953301645041,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.6%",
            "display_range": null,
            "display_text": "62.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 62.6,
            "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20790720835285637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Market explains about 20.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16589746148263937,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.6%",
              "display_range": null,
              "display_text": "16.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.6,
              "plain_english": "Sector explains about 16.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6261953301645041,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Still clearly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.520858474748058,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3379752479744315,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14116627727751052,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Sector explains about 14.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.520858474748058,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
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
            "median": 0.5271459228035038,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.7%",
            "display_range": null,
            "display_text": "52.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 52.7,
            "plain_english": "Market explains about 52.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5271459228035038,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Market explains about 52.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15715914893700186,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Sector explains about 15.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3156949282594944,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.6%",
              "display_range": null,
              "display_text": "31.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 31.6,
              "plain_english": "Company-specific explains about 31.6% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45203008997245403,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.2%",
            "display_range": null,
            "display_text": "45.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 45.2,
            "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.42700633225638757,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.7%",
              "display_range": null,
              "display_text": "42.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 42.7,
              "plain_english": "Market explains about 42.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1209635777711584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.1%",
              "display_range": null,
              "display_text": "12.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 12.1,
              "plain_english": "Sector explains about 12.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45203008997245403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
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
            "median": 0.5227456333780107,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.3%",
            "display_range": null,
            "display_text": "52.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.3,
            "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31110037529807905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.1%",
              "display_range": null,
              "display_text": "31.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.1,
              "plain_english": "Market explains about 31.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16615399132391034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.6%",
              "display_range": null,
              "display_text": "16.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.6,
              "plain_english": "Sector explains about 16.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5227456333780107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.3%",
              "display_range": null,
              "display_text": "52.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.3,
              "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly company-driven."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6109456423726158,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.1%",
            "display_range": null,
            "display_text": "61.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 61.1,
            "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.16185668436642353,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2271976732609607,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.7%",
              "display_range": null,
              "display_text": "22.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 22.7,
              "plain_english": "Sector explains about 22.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6109456423726158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5708680925260462,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.1%",
            "display_range": null,
            "display_text": "57.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 57.1,
            "plain_english": "Market explains about 57.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5708680925260462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.1%",
              "display_range": null,
              "display_text": "57.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.1,
              "plain_english": "Market explains about 57.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20623690024332217,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Sector explains about 20.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2228950072306317,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.3%",
              "display_range": null,
              "display_text": "22.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.3,
              "plain_english": "Company-specific explains about 22.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46866297997354894,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.9%",
            "display_range": null,
            "display_text": "46.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 46.9,
            "plain_english": "Market explains about 46.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.46866297997354894,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18197350278967928,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Sector explains about 18.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34936351723677184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 6.578947368421052,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011763374240959718,
            "low": 0.011763374240959718,
            "high": 0.011763374240959718
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.021230371102654782,
            "low": 0.021230371102654782,
            "high": 0.021230371102654782
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            106.0,
            18.0
          ],
          [
            19.0,
            105.0
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
        "market_link_display": "3.63",
        "sector_link_display": "-3.70",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.70% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-2.50",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 65.1,
        "driver_share_display": "65.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8548387096774194,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
        "expected_duration_days": 6.6
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
          "expected_duration_days": 6.578947368421052,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.011763374240959718,
            "low": 0.011763374240959718,
            "high": 0.011763374240959718
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.021230371102654782,
            "low": 0.021230371102654782,
            "high": 0.021230371102654782
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8548387096774194,
          0.14516129032258066
        ],
        [
          0.1532258064516129,
          0.8467741935483871
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            106.0,
            18.0
          ],
          [
            19.0,
            105.0
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
        "text": "Liquidity score: 78.9 — Strong",
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
        "text": "Execution: balanced",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "short": {
        "text": "Short interest: N/A",
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
    "liq_subtitle": "Monthly liquidity is serviceable rather than strong, and recent activity is lighter than the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "One-month performance is weak relative to the market and broadly in line with peers, with the shares down 4.3% while the market is up 1.0%.",
    "perf_insight": "The recent price move is weak, with a one-month return of -4.3% compared with peers at -4.2% and the market at +1.0%. That matters because the tape is not being supported by stronger momentum while market factors still explain 65.1% of trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Trading is being led mainly by broader market moves, with market factors accounting for 65.1% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 65.1% of price changes. Other influences are sector 19.8%, and company-specific 15.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 65.1%, sector 19.8%, and company-specific 15.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 65.1%, sector 19.8%, and company-specific 15.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Market at 65.1%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market moves account for 65.1% of recent price action.",
      "Monthly change: the pattern has shifted from clearly company-driven in February to mostly market-driven in March and April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market-led trading is the clearest feature of the current backdrop.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 17, 2025 to Apr 17, 2026 (239 trading days • 224,326 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks orderly, with top-10 bid depth at 2.28x ask depth and a 3-tick spread. That matters because near-term trading conditions are supportive even though the six-month liquidity score remains below the peer median.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 22.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans institution-like.",
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
    "intraday_insight": "The order book is holding up well, with top-10 bid depth at 2.28x ask depth and a 3-tick spread. That matters because immediate execution conditions look orderly despite a broader liquidity profile that sits below the peer median.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and displayed depth.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with peer standing a little weaker and recent activity still broadly steady.",
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
        "value": "78.9/100",
        "sub": "Peer median 84.2 (-5.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$23.5M",
        "sub": "Peer median HK$34.0M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.25%",
        "sub": "1.53 ticks; peers 0.31%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is serviceable but not a peer leader, with a 6M score of 78.9 compared with a peer median of 84.2. Recent activity is also lighter, with 1D average volume down 24.6% from the 1M average. That matters because access remains workable, but the stock is not matching peer liquidity and near-term flow is thinner than the monthly picture.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "5.535",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.54%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "2.28x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.27% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.47% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.57% with 100.0% fill.",
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
        "value": "79",
        "suffix": "/100",
        "bar_pct": 79,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 545/2575",
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
        "value": "0.25",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.25% • 1.53 ticks vs peers 0.31%",
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
        "value": "23.5M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$34.0M",
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
        "value": "65.1",
        "suffix": "market",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 19.8% • Company 15.1%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed relative to peers, with a six-month liquidity score of 78.9 compared with a peer median of 84.2. That matters because access looks serviceable rather than clearly strong for a stock of this size.",
      "Recent activity has pulled back from the monthly average, with one-day average volume 24.6% below one month. That matters because day-to-day liquidity is likely to feel thinner than the recent average.",
      "Immediate execution conditions are supportive, with top-10 bid depth at 2.28x ask depth and a 3-tick spread. Market factors account for 65.1% of the tape, which means near-term trading is being shaped more by the broader market than by stock-specific flow."
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
      "overall": "6M liquidity is strong: score 78.9 vs peer median 84.2 (-5.4 pts). 1D average volume down -24.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 78.9 vs peer median 84.2 (-5.4 pts)."
      ],
      "concerns": [
        "1D average volume down -24.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -5.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -14.9%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -14.9% vs market 12.1%.",
        "vs_sector": "Worse than sector: -14.9% vs sector -7.6%.",
        "vs_peers": "Worse than peers: -14.9% vs peers -7.6%."
      },
      "adv": {
        "insight": "ADV is HK$23.5M, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$23.5M vs market HK$220.2K.",
        "vs_sector": "Better than sector: HK$23.5M vs sector HK$87.6K.",
        "vs_peers": "Worse than peers: HK$23.5M vs peers HK$34.0M."
      },
      "spread": {
        "insight": "Spread is 0.25%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.25% vs market 2.69%.",
        "vs_sector": "Better than sector: 0.25% vs sector 3.79%.",
        "vs_peers": "Better than peers: 0.25% vs peers 0.31%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.20%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.20% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.20% vs sector 0.09%.",
        "vs_peers": "Worse than peers: 0.20% vs peers 0.54%."
      },
      "volatility": {
        "insight": "Volatility is 21.96%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 21.96% vs market 59.76%.",
        "vs_sector": "Better than sector: 21.96% vs sector 54.50%.",
        "vs_peers": "Better than peers: 21.96% vs peers 35.36%."
      },
      "trades": {
        "insight": "Trades is 931, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 931 vs market 20.",
        "vs_sector": "Better than sector: 931 vs sector 10.",
        "vs_peers": "Worse than peers: 931 vs peers 1683."
      },
      "amihud": {
        "insight": "Price impact is 3.53e-10, better than market and sector, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.53e-10 vs market 4.60e-08.",
        "vs_sector": "Better than sector: 3.53e-10 vs sector 8.28e-08.",
        "vs_peers": "In line with peers: 3.53e-10 vs peers 3.26e-10."
      }
    },
    "performance": {
      "overall": "Recent performance looks weak against the market rather than uniquely weak against peers, with the stock down 4.3% over one month compared with peers down 4.2% and the market up 1.0%. Liquidity gives a mixed read on that move because the six-month liquidity score is 78.9 against a peer median of 84.2, while the latest average volume is down 24.6% from the one-month average rather than showing a sharper break in trading conditions.",
      "conclusion": "The move looks mainly broad-market rather than company-specific, with returns lagging the market while staying close to peers."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market now, with 65.1% of recent moves tied to broader conditions. That matters because the shares are reacting more to the wider tape than to company-specific developments, which fits a period where the stock is not setting its own direction.",
      "beta": "The current pattern looks steady rather than abrupt, but it is not especially strong because 1D average volume is 24.6% below the 1M average. That leaves trading conditions stable overall, while participation is lighter than the recent monthly average.",
      "rolling_change": "The monthly picture has changed meaningfully, moving from clearly company-driven in February to mostly market-driven in March and April. That shift matters because the stock is now trading more in line with external conditions than it was earlier in the quarter."
    },
    "regime": {
      "overall": "The market is in a calmer state, which usually supports steadier trading conditions, but the picture is mixed because 1D average volume is 24.6% below the 1M average. That matters because lower volatility can help execution even as lighter activity makes conditions less robust.",
      "current": "Low Volatility is the active state, pointing to a calmer trading backdrop than a stressed market phase.",
      "transitions": "This state looks fairly stable, with a typical run length of about 6.6 days, so the backdrop appears more settled than fleeting.",
      "trading_implications": "Trading conditions look broadly steady under a low-volatility backdrop, though the drop in 1D average volume compared with the 1M average means liquidity can still feel thinner at times."
    },
    "execution": {
      "overall": "top-10 bid depth is 2.28x ask depth; spread is 3 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The main watchpoint is that recent average volume is down 24.6% from the 1M average, so the supportive book may be less durable if activity stays lighter. That matters because lower flow can make current depth less representative of sustained trading conditions.",
      "peer_context": "The displayed book is firmer than the longer-term peer standing suggests, with visible depth supportive even though the 6M liquidity score of 78.9 sits 5.4 points below the peer median of 84.2. That matters because the current screen does not point to a weaker execution backdrop than the broader peer comparison implies."
    },
    "trader_composition": {
      "overall": "Flow looks mainly institution-like on both trade count and trade value, which gives the mix a firmer base than a count-only signal.",
      "retail_heavy": "Institution-like trades account for 52.4% of trade count and 64.8% of trade value, compared with retail-like trades at 6.9% of count and 3.4% of value. That gap suggests the tape is being set more by larger participants than by retail flow.",
      "institutional_gap": "The read is not fully clean because unclear flow still represents 18.9% of trade count. That leaves the overall mix institution-like, but not unequivocal.",
      "peer_comparison": "The mix looks institution-like rather than unusually retail-heavy, which is the more relevant peer read for dependability."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful at 22.6% of total trades, so trading is active enough for individual prints to matter. The signal is mixed rather than fully clean because unclear flow accounts for 18.9% of trade count. That means price-setting activity is present, but not all of it can be tied neatly to one trader type. Price performance has been weak over one month at -4.3%, compared with -4.2% for peers and +1.0% for the market. That points to a tape that is not being supported by stronger momentum.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing in a way that alters the picture. Recent trading is better explained by weaker near-term volume and a 1M share price move of -4.3%, broadly in line with peers at -4.2%, which suggests the stock is moving with wider conditions rather than a rising short overhang.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session, which carries 83.8% of activity, while the open contributes 0.7% and the close 10.7%. That makes the day look more usable in the main session than at the edges.",
      "hhi_interpretation": "A concentration score of 0.134 indicates activity is spread across the session rather than packed into a narrow window. That supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it captures the large majority of trading activity. That matters more than the open or close for judging day-to-day dependability.",
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
        "142",
        "151",
        "9985",
        "1768",
        "2517",
        "288",
        "1475",
        "2460",
        "1117"
      ],
      "scores": [
        78.87378640776699,
        80.69902912621359,
        88.46601941747572,
        83.14563106796116,
        90.56310679611651,
        95.18446601941748,
        66.83495145631068,
        85.32038834951456,
        81.7864077669903
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
        23476243.0,
        28100181.64,
        39904120.17,
        80328100.0,
        56005828.445,
        250894518.82500002,
        1590045.0,
        27164190.0,
        20009946.549999997
      ],
      "total": 2575
    },
    "market_comparison": {
      "sector_name": "Packaged Foods",
      "sector_count": 35,
      "market_count": 2575,
      "company": {
        "volatility": 0.21957547467091948,
        "adv": 23476243.0,
        "spread_pct": 0.002547162920593226,
        "turnover_ratio": 0.0019760461622868658,
        "amihud": 3.527456991439475e-10,
        "trades": 931.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7540133520615108,
          "median": 0.5976277286183745,
          "min": 0.0,
          "max": 33.692394544883975,
          "p5": 0.22336945501400846,
          "p95": 1.5604949140568722,
          "count": 2575
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55827774.69277448,
          "median": 220236.0,
          "min": 0.0,
          "max": 11376396450.0,
          "p5": 0.0,
          "p95": 210566672.92099893,
          "count": 2575
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042107107468483534,
          "median": 0.02693923596623619,
          "min": 0.000558678699550006,
          "max": 0.5829822478408243,
          "p5": 0.0013880202374732715,
          "p95": 0.13431608871504397,
          "count": 2575
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003609729674655513,
          "median": 0.00085232857389328,
          "min": 0.0,
          "max": 0.17288963574235222,
          "p5": 0.0,
          "p95": 0.014297673271822983,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.474392564885838e-07,
          "median": 4.6035326051001614e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0722288733653126e-11,
          "p95": 3.4190744476366987e-06,
          "count": 2575
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1027.5460194174757,
          "median": 20.5,
          "min": 0.0,
          "max": 90976.0,
          "p5": 0.0,
          "p95": 5617.94999999999,
          "count": 2575
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6346424103957506,
          "median": 0.5450123813746246,
          "min": 0.15774100413411424,
          "max": 2.5070860541315483,
          "p5": 0.24017879542638512,
          "p95": 1.1677379774295953,
          "count": 35
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 15015080.577000001,
          "median": 87570.0,
          "min": 0.0,
          "max": 250894518.82500002,
          "p5": 0.0,
          "p95": 63302509.91149993,
          "count": 35
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.036075123795583385,
          "median": 0.037870986122261883,
          "min": 0.0012387720293120762,
          "max": 0.08219178082191789,
          "p5": 0.0024581249803575437,
          "p95": 0.0807357452186959,
          "count": 35
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0022904019757581176,
          "median": 0.0008806400586154023,
          "min": 0.0,
          "max": 0.0165960126342099,
          "p5": 0.0,
          "p95": 0.013294659400896813,
          "count": 35
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.973732568197345e-07,
          "median": 8.282507381681144e-08,
          "min": 4.5321598636088045e-11,
          "max": 4.451566951566947e-06,
          "p5": 2.7843688474708477e-10,
          "p95": 3.1860732394885164e-06,
          "count": 35
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 604.4285714285714,
          "median": 10.5,
          "min": 0.0,
          "max": 7196.5,
          "p5": 0.0,
          "p95": 3484.0499999999993,
          "count": 35
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 62999616.32875,
          "median": 34002150.905,
          "min": 1590045.0,
          "max": 250894518.82500002,
          "p5": 8037010.5424999995,
          "p95": 191196272.23624992,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2565.75,
          "median": 1682.75,
          "min": 94.5,
          "max": 7196.5,
          "p5": 551.95,
          "p95": 5955.574999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3844590919353115,
          "median": 0.3535676367667041,
          "min": 0.18747418883292963,
          "max": 0.6148830840340169,
          "p5": 0.2090112992539589,
          "p95": 0.5999374690275155,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0035863396924798994,
          "median": 0.003072722312852883,
          "min": 0.0012387720293120762,
          "max": 0.008232760501534514,
          "p5": 0.0013273706463425166,
          "p95": 0.007350669672526724,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.454129892401433,
          "median": 1.4539963904081257,
          "min": 1.087010411502231,
          "max": 7.2245252303488225,
          "p5": 1.0999350925528661,
          "p95": 6.064561899886451,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.688618483201735e-10,
          "median": 3.260586592871619e-10,
          "min": 4.5321598636088045e-11,
          "max": 3.70729135622227e-09,
          "p5": 1.1111706272310781e-10,
          "p95": 2.7072247961520604e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005588776960299433,
          "median": 0.005365866213213986,
          "min": 0.0011654027680702615,
          "max": 0.012300745552701565,
          "p5": 0.001172606283365926,
          "p95": 0.01151114987194531,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.04317789291882557,
        "market": 0.009680127313925535,
        "sector": -0.037812813469041306,
        "peers": -0.04154883999896941
      },
      {
        "horizon": "3M",
        "stock": -0.06418918918918881,
        "market": 0.058075957564720726,
        "sector": -0.052977889926573374,
        "peers": -0.06991899562414639
      },
      {
        "horizon": "6M",
        "stock": -0.14900153609830946,
        "market": 0.12119934339494498,
        "sector": -0.0757037405220905,
        "peers": -0.07605149390739241
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
      "share_market": 0.6512142825866198,
      "share_sector": 0.19806456487882787,
      "share_idio": 0.15072115253455237,
      "beta_market": 3.631499147168628,
      "beta_sector": -3.703875147054823,
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
            "median": 0.6512142825866198,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.1%",
            "display_range": null,
            "display_text": "65.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 65.1,
            "plain_english": "Market explains about 65.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.19806456487882787,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.8%",
            "display_range": null,
            "display_text": "19.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.8,
            "plain_english": "Sector explains about 19.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.15072115253455237,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.1%",
            "display_range": null,
            "display_text": "15.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.1,
            "plain_english": "Company-specific explains about 15.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 3.631499147168628,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.63",
            "display_range": null,
            "display_text": "3.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 3.63% stock move in the same direction in this state.",
            "value_num": 3.63
          },
          "beta_stock_lag": {
            "median": -2.49845305152116,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.50",
            "display_range": null,
            "display_text": "-2.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -2.5
          },
          "beta_sector": {
            "median": -3.703875147054823,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.70",
            "display_range": null,
            "display_text": "-3.70",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.70% stock move in the opposite direction in this state.",
            "value_num": -3.7
          },
          "beta_market_lag": {
            "median": 2.1067222122674565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.11",
            "display_range": null,
            "display_text": "2.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 2.11
          },
          "beta_sector_lag": {
            "median": 0.8420935969684921,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.84",
            "display_range": null,
            "display_text": "0.84",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.84
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
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4659978521285973,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4659978521285973,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.6,
                "plain_english": "Market explains about 46.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.182427112558283,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Sector explains about 18.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3515750353131196,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.49844767371537807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3442060434875674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15734628279705462,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Sector explains about 15.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.49844767371537807,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.8%",
                "display_range": null,
                "display_text": "49.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.8,
                "plain_english": "Company-specific explains about 49.8% of price moves in the current state."
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
              "median": 0.6400047964481521,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22356856772924144,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13642663582260645,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.6%",
                "display_range": null,
                "display_text": "13.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.6,
                "plain_english": "Sector explains about 13.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6400047964481521,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.0%",
                "display_range": null,
                "display_text": "64.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 64.0,
                "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.366218736205271,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.366218736205271,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2815751399035154,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Sector explains about 28.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3522061238912136,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.2%",
                "display_range": null,
                "display_text": "35.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.2,
                "plain_english": "Company-specific explains about 35.2% of price moves in the current state."
              }
            },
            "summary": "Jul: Much more balanced across company, sector, and market factors."
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
              "median": 0.6641324686220595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.4%",
              "display_range": null,
              "display_text": "66.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 66.4,
              "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25318309225113056,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.3%",
                "display_range": null,
                "display_text": "25.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.3,
                "plain_english": "Market explains about 25.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08268443912680991,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.3%",
                "display_range": null,
                "display_text": "8.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.3,
                "plain_english": "Sector explains about 8.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6641324686220595,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.4%",
                "display_range": null,
                "display_text": "66.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 66.4,
                "plain_english": "Company-specific explains about 66.4% of price moves in the current state."
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
              "median": 0.6261953301645041,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.6%",
              "display_range": null,
              "display_text": "62.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 62.6,
              "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20790720835285637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Market explains about 20.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16589746148263937,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.6%",
                "display_range": null,
                "display_text": "16.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.6,
                "plain_english": "Sector explains about 16.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6261953301645041,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.6%",
                "display_range": null,
                "display_text": "62.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 62.6,
                "plain_english": "Company-specific explains about 62.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Still clearly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-02 to 2025-10-31",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.520858474748058,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3379752479744315,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14116627727751052,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Sector explains about 14.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.520858474748058,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Company-specific explains about 52.1% of price moves in the current state."
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
              "median": 0.5271459228035038,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Market explains about 52.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5271459228035038,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.7%",
                "display_range": null,
                "display_text": "52.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 52.7,
                "plain_english": "Market explains about 52.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15715914893700186,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Sector explains about 15.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3156949282594944,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.6%",
                "display_range": null,
                "display_text": "31.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 31.6,
                "plain_english": "Company-specific explains about 31.6% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45203008997245403,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.42700633225638757,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.7%",
                "display_range": null,
                "display_text": "42.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 42.7,
                "plain_english": "Market explains about 42.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1209635777711584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.1%",
                "display_range": null,
                "display_text": "12.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 12.1,
                "plain_english": "Sector explains about 12.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45203008997245403,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
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
              "median": 0.5227456333780107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.3%",
              "display_range": null,
              "display_text": "52.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.3,
              "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31110037529807905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.1%",
                "display_range": null,
                "display_text": "31.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.1,
                "plain_english": "Market explains about 31.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16615399132391034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.6%",
                "display_range": null,
                "display_text": "16.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.6,
                "plain_english": "Sector explains about 16.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5227456333780107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.3%",
                "display_range": null,
                "display_text": "52.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.3,
                "plain_english": "Company-specific explains about 52.3% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly company-driven."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6109456423726158,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 61.1,
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.16185668436642353,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2271976732609607,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.7%",
                "display_range": null,
                "display_text": "22.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 22.7,
                "plain_english": "Sector explains about 22.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6109456423726158,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.1%",
                "display_range": null,
                "display_text": "61.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 61.1,
                "plain_english": "Company-specific explains about 61.1% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5708680925260462,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.1%",
              "display_range": null,
              "display_text": "57.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 57.1,
              "plain_english": "Market explains about 57.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5708680925260462,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.1%",
                "display_range": null,
                "display_text": "57.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 57.1,
                "plain_english": "Market explains about 57.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20623690024332217,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Sector explains about 20.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2228950072306317,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.3%",
                "display_range": null,
                "display_text": "22.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.3,
                "plain_english": "Company-specific explains about 22.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-17",
            "n_obs": 10,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46866297997354894,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.9%",
              "display_range": null,
              "display_text": "46.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 46.9,
              "plain_english": "Market explains about 46.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.46866297997354894,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.9%",
                "display_range": null,
                "display_text": "46.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 46.9,
                "plain_english": "Market explains about 46.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18197350278967928,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Sector explains about 18.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34936351723677184,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 6.578947368421052,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011763374240959718,
              "low": 0.011763374240959718,
              "high": 0.011763374240959718
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.021230371102654782,
              "low": 0.021230371102654782,
              "high": 0.021230371102654782
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8548387096774194,
              0.14516129032258066
            ],
            [
              0.1532258064516129,
              0.8467741935483871
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              106.0,
              18.0
            ],
            [
              19.0,
              105.0
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
          "market_link_display": "3.63",
          "sector_link_display": "-3.70",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.70% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-2.50",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 65.1,
          "driver_share_display": "65.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8548387096774194,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
          "expected_duration_days": 6.6
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
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.4659978521285973,
          "share_sector": 0.182427112558283,
          "share_company": 0.3515750353131196,
          "share_market_display": "46.6%",
          "share_sector_display": "18.2%",
          "share_company_display": "35.2%",
          "dominant_share_display": "46.6%"
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
          "share_market": 0.3442060434875674,
          "share_sector": 0.15734628279705462,
          "share_company": 0.49844767371537807,
          "share_market_display": "34.4%",
          "share_sector_display": "15.7%",
          "share_company_display": "49.8%",
          "dominant_share_display": "49.8%"
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
          "share_market": 0.22356856772924144,
          "share_sector": 0.13642663582260645,
          "share_company": 0.6400047964481521,
          "share_market_display": "22.4%",
          "share_sector_display": "13.6%",
          "share_company_display": "64.0%",
          "dominant_share_display": "64.0%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: Much more balanced across company, sector, and market factors.",
          "share_market": 0.366218736205271,
          "share_sector": 0.2815751399035154,
          "share_company": 0.3522061238912136,
          "share_market_display": "36.6%",
          "share_sector_display": "28.2%",
          "share_company_display": "35.2%",
          "dominant_share_display": "36.6%"
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
          "share_market": 0.25318309225113056,
          "share_sector": 0.08268443912680991,
          "share_company": 0.6641324686220595,
          "share_market_display": "25.3%",
          "share_sector_display": "8.3%",
          "share_company_display": "66.4%",
          "dominant_share_display": "66.4%"
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
          "share_market": 0.20790720835285637,
          "share_sector": 0.16589746148263937,
          "share_company": 0.6261953301645041,
          "share_market_display": "20.8%",
          "share_sector_display": "16.6%",
          "share_company_display": "62.6%",
          "dominant_share_display": "62.6%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.3379752479744315,
          "share_sector": 0.14116627727751052,
          "share_company": 0.520858474748058,
          "share_market_display": "33.8%",
          "share_sector_display": "14.1%",
          "share_company_display": "52.1%",
          "dominant_share_display": "52.1%"
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
          "share_market": 0.5271459228035038,
          "share_sector": 0.15715914893700186,
          "share_company": 0.3156949282594944,
          "share_market_display": "52.7%",
          "share_sector_display": "15.7%",
          "share_company_display": "31.6%",
          "dominant_share_display": "52.7%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.42700633225638757,
          "share_sector": 0.1209635777711584,
          "share_company": 0.45203008997245403,
          "share_market_display": "42.7%",
          "share_sector_display": "12.1%",
          "share_company_display": "45.2%",
          "dominant_share_display": "45.2%"
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
          "summary": "Jan: Mostly company-driven.",
          "share_market": 0.31110037529807905,
          "share_sector": 0.16615399132391034,
          "share_company": 0.5227456333780107,
          "share_market_display": "31.1%",
          "share_sector_display": "16.6%",
          "share_company_display": "52.3%",
          "dominant_share_display": "52.3%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.16185668436642353,
          "share_sector": 0.2271976732609607,
          "share_company": 0.6109456423726158,
          "share_market_display": "16.2%",
          "share_sector_display": "22.7%",
          "share_company_display": "61.1%",
          "dominant_share_display": "61.1%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5708680925260462,
          "share_sector": 0.20623690024332217,
          "share_company": 0.2228950072306317,
          "share_market_display": "57.1%",
          "share_sector_display": "20.6%",
          "share_company_display": "22.3%",
          "dominant_share_display": "57.1%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 10,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.46866297997354894,
          "share_sector": 0.18197350278967928,
          "share_company": 0.34936351723677184,
          "share_market_display": "46.9%",
          "share_sector_display": "18.2%",
          "share_company_display": "34.9%",
          "dominant_share_display": "46.9%"
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
            "expected_duration_days": 6.578947368421052,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.011763374240959718,
              "low": 0.011763374240959718,
              "high": 0.011763374240959718
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.021230371102654782,
              "low": 0.021230371102654782,
              "high": 0.021230371102654782
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8548387096774194,
            0.14516129032258066
          ],
          [
            0.1532258064516129,
            0.8467741935483871
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 5.52,
          "quantity": 38000.0,
          "value": 209759.99999999997
        },
        {
          "level": 2,
          "price": 5.51,
          "quantity": 84000.0,
          "value": 462840.0
        },
        {
          "level": 3,
          "price": 5.5,
          "quantity": 342000.0,
          "value": 1881000.0
        },
        {
          "level": 4,
          "price": 5.49,
          "quantity": 110000.0,
          "value": 603900.0
        },
        {
          "level": 5,
          "price": 5.48,
          "quantity": 166000.0,
          "value": 909680.0000000001
        },
        {
          "level": 6,
          "price": 5.47,
          "quantity": 106000.0,
          "value": 579820.0
        },
        {
          "level": 7,
          "price": 5.46,
          "quantity": 68000.0,
          "value": 371280.0
        },
        {
          "level": 8,
          "price": 5.45,
          "quantity": 80000.0,
          "value": 436000.0
        },
        {
          "level": 9,
          "price": 5.44,
          "quantity": 116000.0,
          "value": 631040.0
        },
        {
          "level": 10,
          "price": 5.43,
          "quantity": 14000.0,
          "value": 76020.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 5.55,
          "quantity": 44000.0,
          "value": 244200.0
        },
        {
          "level": 2,
          "price": 5.56,
          "quantity": 76000.0,
          "value": 422559.99999999994
        },
        {
          "level": 3,
          "price": 5.57,
          "quantity": 56000.0,
          "value": 311920.0
        },
        {
          "level": 4,
          "price": 5.58,
          "quantity": 154000.0,
          "value": 859320.0
        },
        {
          "level": 5,
          "price": 5.59,
          "quantity": 84000.0,
          "value": 469560.0
        },
        {
          "level": 6,
          "price": 5.6,
          "quantity": 4000.0,
          "value": 22400.0
        },
        {
          "level": 7,
          "price": 5.61,
          "quantity": 4000.0,
          "value": 22440.0
        },
        {
          "level": 8,
          "price": 5.62,
          "quantity": 16000.0,
          "value": 89920.0
        },
        {
          "level": 9,
          "price": 5.63,
          "quantity": 10000.0,
          "value": 56300.0
        },
        {
          "level": 10,
          "price": 5.64,
          "quantity": 36000.0,
          "value": 203040.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-17 07:59:58.011000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 5.535,
        "spread_pct": 0.0054200542005420505,
        "spread_ticks": 3.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 6161340.0,
        "ask_depth_notional_top10": 2701660.0,
        "bid_ask_depth_ratio": 2.2806
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 239,
        "n_trades_used": 224326,
        "first_trade_date": "2025-04-17",
        "last_trade_date": "2026-04-17",
        "window_label": "Apr 17, 2025 to Apr 17, 2026",
        "window_short_label": "Apr 17, 2025 to Apr 17, 2026",
        "trade_days_label": "239 trading days",
        "trade_count_label": "224,326 trades",
        "window_detail_label": "239 trading days • 224,326 trades",
        "history_note": "Trade-size percentiles use Apr 17, 2025 to Apr 17, 2026 history (239 trading days • 224,326 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 50480.0,
            "impact_pct": -0.00271,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.82,
            "pct_of_adv": 0.2
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 77760.0,
            "impact_pct": -0.00271,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.26,
            "pct_of_adv": 0.31
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3750766.37,
            "impact_pct": -0.006764,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 60.88,
            "pct_of_adv": 15.16
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-17",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "3682108161.0",
            "timestamp": "2026-04-17 07:46:50.990000000",
            "local_timestamp": "2026-04-17 15:46:50",
            "posted_price": 5.8,
            "size_shares": 100000.0,
            "notional": 580000.0,
            "impact_pct": -0.0038640000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 9.41,
            "price_vs_mid_pct": 4.788,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3695389697.0",
            "timestamp": "2026-04-17 07:48:42.314000000",
            "local_timestamp": "2026-04-17 15:48:42",
            "posted_price": 5.72,
            "size_shares": 62000.0,
            "notional": 354640.0,
            "impact_pct": -0.003449,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.76,
            "price_vs_mid_pct": 3.342,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "3737516801.0",
            "timestamp": "2026-04-17 07:54:04.181000000",
            "local_timestamp": "2026-04-17 15:54:04",
            "posted_price": 5.71,
            "size_shares": 58000.0,
            "notional": 331180.0,
            "impact_pct": -0.0033729999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 5.38,
            "price_vs_mid_pct": 3.162,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-17",
        "bucket_minutes": 30,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0018132366273798345,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4087380.0,
            "ask_depth_notional": 3426000.0,
            "mid_price": 5.515
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0018165304268846117,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 5042440.0,
            "ask_depth_notional": 3451240.0,
            "mid_price": 5.505
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0018132366273798345,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 7213240.0,
            "ask_depth_notional": 3356040.0,
            "mid_price": 5.515
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0018165304268846117,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 6994880.0,
            "ask_depth_notional": 4091100.0,
            "mid_price": 5.505
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0018132366273798345,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 6285180.0,
            "ask_depth_notional": 2053960.0,
            "mid_price": 5.515
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.003623188405797185,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 7944440.0,
            "ask_depth_notional": 3305160.0,
            "mid_price": 5.52
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0018066847335139634,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 7568500.0,
            "ask_depth_notional": 3599940.0,
            "mid_price": 5.535
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.003616636528029017,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 6979340.0,
            "ask_depth_notional": 3702080.0,
            "mid_price": 5.529999999999999
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0018066847335139634,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 6812760.0,
            "ask_depth_notional": 3768600.0,
            "mid_price": 5.535
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0018099547511313439,
            "spread_ticks": 1.0000000000000675,
            "bid_depth_notional": 7397980.0,
            "ask_depth_notional": 4021560.0,
            "mid_price": 5.525
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0054200542005420505,
            "spread_ticks": 3.000000000000025,
            "bid_depth_notional": 6161340.0,
            "ask_depth_notional": 2701660.0,
            "mid_price": 5.535
          }
        ],
        "summary": {
          "median_spread_pct": 0.0018132366273798345,
          "median_spread_ticks": 0.9999999999999787,
          "median_bid_depth_notional": 6979340.0,
          "median_ask_depth_notional": 3451240.0,
          "tightest_bucket": "13:30",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.2,
      "peers": [
        {
          "ticker": "288",
          "pct": 0.3
        },
        {
          "ticker": "2517",
          "pct": 1.6
        },
        {
          "ticker": "1768",
          "pct": 1.6
        },
        {
          "ticker": "9985",
          "pct": 2.4
        },
        {
          "ticker": "151",
          "pct": 4.1
        },
        {
          "ticker": "2460",
          "pct": 4.8
        },
        {
          "ticker": "1117",
          "pct": 5.4
        },
        {
          "ticker": "1475",
          "pct": 188.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 667,
          "n_runs": 216,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.13193403298350825,
            "mixed_pct": 0.0,
            "instit_pct": 0.5247376311844077,
            "ambiguous_pct": 0.1904047976011994,
            "unobservable_pct": 0.15292353823088456,
            "unclear_pct": 0.343328335832084,
            "retail_qty_pct": 0.0882943143812709,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6434782608695652,
            "ambiguous_qty_pct": 0.13244147157190636,
            "unobservable_qty_pct": 0.13578595317725753,
            "unclear_qty_pct": 0.2682274247491639,
            "retail_notional_pct": 0.08817557041837752,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6437056676328713,
            "ambiguous_notional_pct": 0.13240640725829428,
            "unobservable_notional_pct": 0.1357123546904569,
            "unclear_notional_pct": 0.26811876194875117
          },
          "run_composition": {
            "retail_pct": 0.37962962962962965,
            "mixed_pct": 0.0,
            "instit_pct": 0.20833333333333334,
            "ambiguous_pct": 0.21296296296296297,
            "unobservable_pct": 0.19907407407407407,
            "unclear_pct": 0.41203703703703703,
            "retail_notional_pct": 0.08817557041837752,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6437056676328713,
            "unclear_notional_pct": 0.26811876194875117
          },
          "counts": {
            "trades": {
              "retail": 88,
              "mixed": 0,
              "institutional": 350,
              "ambiguous": 127,
              "unobservable": 102,
              "unclear": 229
            },
            "runs": {
              "retail": 82,
              "mixed": 0,
              "institutional": 45,
              "ambiguous": 46,
              "unobservable": 43,
              "unclear": 89
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.18518518518518517,
            "low": 0.4027777777777778,
            "na": 0.41203703703703703
          },
          "confidence_counts": {
            "high": 0,
            "medium": 40,
            "low": 87,
            "na": 89
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.18290854572713644,
            "low": 0.4737631184407796,
            "na": 0.34332833583208394
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 122,
            "low": 316,
            "na": 229
          },
          "observability": {
            "avg_feature_coverage": 0.698611111111111,
            "observable_run_pct": 0.8009259259259259,
            "ambiguous_run_pct": 0.21296296296296297,
            "unobservable_run_pct": 0.19907407407407407
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.37962962962962965,
          "dominance_gap": 0.16666666666666669,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 667
            },
            "d2_information": {
              "UNOBSERVABLE": 667
            },
            "d3_urgency": {
              "IMMEDIATE": 215,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "NA": 89,
              "LOW": 87,
              "MEDIUM": 40
            }
          },
          "trade_size": {
            "avg": 24733.943028485755,
            "median": 22000.0
          },
          "run_size": {
            "avg": 76377.5,
            "median": 22120.0,
            "avg_length": 3.087962962962963
          },
          "recent_trades": [
            {
              "trade_id": "709",
              "timestamp": "2026-04-17T07:59:53.204236",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59614,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "708",
              "timestamp": "2026-04-17T07:59:30.175101",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59613,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "705",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "704",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 2000.0,
              "notional": 11040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "703",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "702",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 8000.0,
              "notional": 44160.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "701",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "700",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "699",
              "timestamp": "2026-04-17T07:57:56.387660",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59610,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "697",
              "timestamp": "2026-04-17T07:56:52.960892",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "696",
              "timestamp": "2026-04-17T07:56:50.172603",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "695",
              "timestamp": "2026-04-17T07:56:50.010430",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "694",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 16000.0,
              "notional": 88640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "693",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 8000.0,
              "notional": 44320.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "692",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "691",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "690",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "689",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "688",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "687",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "686",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "685",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "684",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "683",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "682",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "681",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "680",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "679",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "678",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 12000.0,
              "notional": 66360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "677",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 19911,
          "n_runs": 6166,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-17",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.0660941188287881,
            "mixed_pct": 0.0,
            "instit_pct": 0.5525588870473608,
            "ambiguous_pct": 0.1942142534277535,
            "unobservable_pct": 0.18713274069609764,
            "unclear_pct": 0.38134699412385115,
            "retail_qty_pct": 0.03286277315574961,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6879838404592805,
            "ambiguous_qty_pct": 0.14486888162669448,
            "unobservable_qty_pct": 0.13428450475827539,
            "unclear_qty_pct": 0.2791533863849699,
            "retail_notional_pct": 0.03276451433945926,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6879988673086097,
            "ambiguous_notional_pct": 0.14485012719331766,
            "unobservable_notional_pct": 0.1343864911586133,
            "unclear_notional_pct": 0.279236618351931
          },
          "run_composition": {
            "retail_pct": 0.2100227051573143,
            "mixed_pct": 0.0,
            "instit_pct": 0.19104768083036003,
            "ambiguous_pct": 0.21034706454751864,
            "unobservable_pct": 0.388582549464807,
            "unclear_pct": 0.5989296140123257,
            "retail_notional_pct": 0.03276451433945926,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6879988673086097,
            "unclear_notional_pct": 0.279236618351931
          },
          "counts": {
            "trades": {
              "retail": 1316,
              "mixed": 0,
              "institutional": 11002,
              "ambiguous": 3867,
              "unobservable": 3726,
              "unclear": 7593
            },
            "runs": {
              "retail": 1295,
              "mixed": 0,
              "institutional": 1178,
              "ambiguous": 1297,
              "unobservable": 2396,
              "unclear": 3693
            }
          },
          "confidence": {
            "high": 0.04589685371391502,
            "medium": 0.21521245540058384,
            "low": 0.13996107687317547,
            "na": 0.5989296140123257
          },
          "confidence_counts": {
            "high": 283,
            "medium": 1327,
            "low": 863,
            "na": 3693
          },
          "trade_confidence": {
            "high": 0.09733313243935512,
            "medium": 0.2957159359148209,
            "low": 0.22560393752197277,
            "na": 0.38134699412385115
          },
          "trade_confidence_counts": {
            "high": 1938,
            "medium": 5888,
            "low": 4492,
            "na": 7593
          },
          "observability": {
            "avg_feature_coverage": 0.6728267920856308,
            "observable_run_pct": 0.611417450535193,
            "ambiguous_run_pct": 0.21034706454751864,
            "unobservable_run_pct": 0.388582549464807
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.388582549464807,
          "dominance_gap": 0.17823548491728838,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 19911
            },
            "d2_information": {
              "UNOBSERVABLE": 19911
            },
            "d3_urgency": {
              "IMMEDIATE": 6003,
              "ADAPTIVE": 163
            },
            "participant_confidence": {
              "NA": 3693,
              "MEDIUM": 1327,
              "LOW": 863,
              "HIGH": 283
            }
          },
          "trade_size": {
            "avg": 25199.706450203405,
            "median": 11300.0
          },
          "run_size": {
            "avg": 81373.88179208562,
            "median": 22120.0,
            "avg_length": 3.2291599091793706
          },
          "recent_trades": [
            {
              "trade_id": "709",
              "timestamp": "2026-04-17T07:59:53.204236",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59614,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "708",
              "timestamp": "2026-04-17T07:59:30.175101",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59613,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "705",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "704",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 2000.0,
              "notional": 11040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "703",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "702",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 8000.0,
              "notional": 44160.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "701",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "700",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "699",
              "timestamp": "2026-04-17T07:57:56.387660",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59610,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "697",
              "timestamp": "2026-04-17T07:56:52.960892",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "696",
              "timestamp": "2026-04-17T07:56:50.172603",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "695",
              "timestamp": "2026-04-17T07:56:50.010430",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "694",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 16000.0,
              "notional": 88640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "693",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 8000.0,
              "notional": 44320.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "692",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "691",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "690",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "689",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "688",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "687",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "686",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "685",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "684",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "683",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "682",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "681",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "680",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "679",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "678",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 12000.0,
              "notional": 66360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "677",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 54833,
          "n_runs": 18322,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-13",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.059307351412470594,
            "mixed_pct": 0.0,
            "instit_pct": 0.5258329837871355,
            "ambiguous_pct": 0.19092517279740304,
            "unobservable_pct": 0.2239344920029909,
            "unclear_pct": 0.41485966480039393,
            "retail_qty_pct": 0.030775487924317346,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6426841274035097,
            "ambiguous_qty_pct": 0.15300409769103937,
            "unobservable_qty_pct": 0.17353628698113358,
            "unclear_qty_pct": 0.32654038467217295,
            "retail_notional_pct": 0.030665726708343884,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6406946928943157,
            "ambiguous_notional_pct": 0.15346007256887273,
            "unobservable_notional_pct": 0.17517950782846775,
            "unclear_notional_pct": 0.3286395803973405
          },
          "run_composition": {
            "retail_pct": 0.17356183822726776,
            "mixed_pct": 0.0,
            "instit_pct": 0.19533893679729286,
            "ambiguous_pct": 0.18928064621766183,
            "unobservable_pct": 0.4418185787577775,
            "unclear_pct": 0.6310992249754394,
            "retail_notional_pct": 0.030665726708343884,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6406946928943157,
            "unclear_notional_pct": 0.3286395803973405
          },
          "counts": {
            "trades": {
              "retail": 3252,
              "mixed": 0,
              "institutional": 28833,
              "ambiguous": 10469,
              "unobservable": 12279,
              "unclear": 22748
            },
            "runs": {
              "retail": 3180,
              "mixed": 0,
              "institutional": 3579,
              "ambiguous": 3468,
              "unobservable": 8095,
              "unclear": 11563
            }
          },
          "confidence": {
            "high": 0.05190481388494706,
            "medium": 0.19495688243641524,
            "low": 0.12203907870319834,
            "na": 0.6310992249754394
          },
          "confidence_counts": {
            "high": 951,
            "medium": 3572,
            "low": 2236,
            "na": 11563
          },
          "trade_confidence": {
            "high": 0.07933178925099849,
            "medium": 0.3120748454397899,
            "low": 0.1937337005088177,
            "na": 0.41485966480039393
          },
          "trade_confidence_counts": {
            "high": 4350,
            "medium": 17112,
            "low": 10623,
            "na": 22748
          },
          "observability": {
            "avg_feature_coverage": 0.6607275406615,
            "observable_run_pct": 0.5581814212422225,
            "ambiguous_run_pct": 0.18928064621766183,
            "unobservable_run_pct": 0.4418185787577775
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4418185787577775,
          "dominance_gap": 0.24647964196048466,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 54833
            },
            "d2_information": {
              "UNOBSERVABLE": 54833
            },
            "d3_urgency": {
              "IMMEDIATE": 17924,
              "ADAPTIVE": 398
            },
            "participant_confidence": {
              "NA": 11563,
              "MEDIUM": 3572,
              "LOW": 2236,
              "HIGH": 951
            }
          },
          "trade_size": {
            "avg": 25347.45628417194,
            "median": 12540.0
          },
          "run_size": {
            "avg": 75858.37083451588,
            "median": 22440.0,
            "avg_length": 2.992740967143325
          },
          "recent_trades": [
            {
              "trade_id": "709",
              "timestamp": "2026-04-17T07:59:53.204236",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59614,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "708",
              "timestamp": "2026-04-17T07:59:30.175101",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59613,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "705",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "704",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 2000.0,
              "notional": 11040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "703",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "702",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 8000.0,
              "notional": 44160.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "701",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "700",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "699",
              "timestamp": "2026-04-17T07:57:56.387660",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59610,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "697",
              "timestamp": "2026-04-17T07:56:52.960892",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "696",
              "timestamp": "2026-04-17T07:56:50.172603",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "695",
              "timestamp": "2026-04-17T07:56:50.010430",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "694",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 16000.0,
              "notional": 88640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "693",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 8000.0,
              "notional": 44320.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "692",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "691",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "690",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "689",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "688",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "687",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "686",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "685",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "684",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "683",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "682",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "681",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "680",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "679",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "678",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 12000.0,
              "notional": 66360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "677",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 107623,
          "n_runs": 36875,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-30",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.06876782843815912,
            "mixed_pct": 0.0,
            "instit_pct": 0.5242188008139524,
            "ambiguous_pct": 0.18896518402200274,
            "unobservable_pct": 0.21804818672588572,
            "unclear_pct": 0.40701337074788846,
            "retail_qty_pct": 0.03452181083222594,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6491584177653312,
            "ambiguous_qty_pct": 0.14883844571142413,
            "unobservable_qty_pct": 0.16748132569101865,
            "unclear_qty_pct": 0.3163197714024428,
            "retail_notional_pct": 0.034389874406961306,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6482076612071791,
            "ambiguous_notional_pct": 0.1491146858635742,
            "unobservable_notional_pct": 0.16828777852228544,
            "unclear_notional_pct": 0.3174024643858596
          },
          "run_composition": {
            "retail_pct": 0.19655593220338982,
            "mixed_pct": 0.0,
            "instit_pct": 0.2007322033898305,
            "ambiguous_pct": 0.18728135593220338,
            "unobservable_pct": 0.4154305084745763,
            "unclear_pct": 0.6027118644067797,
            "retail_notional_pct": 0.034389874406961306,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6482076612071791,
            "unclear_notional_pct": 0.3174024643858596
          },
          "counts": {
            "trades": {
              "retail": 7401,
              "mixed": 0,
              "institutional": 56418,
              "ambiguous": 20337,
              "unobservable": 23467,
              "unclear": 43804
            },
            "runs": {
              "retail": 7248,
              "mixed": 0,
              "institutional": 7402,
              "ambiguous": 6906,
              "unobservable": 15319,
              "unclear": 22225
            }
          },
          "confidence": {
            "high": 0.04740338983050847,
            "medium": 0.2038237288135593,
            "low": 0.14606101694915255,
            "na": 0.6027118644067797
          },
          "confidence_counts": {
            "high": 1748,
            "medium": 7516,
            "low": 5386,
            "na": 22225
          },
          "trade_confidence": {
            "high": 0.06367598004144095,
            "medium": 0.31168988041589624,
            "low": 0.21762076879477435,
            "na": 0.40701337074788846
          },
          "trade_confidence_counts": {
            "high": 6853,
            "medium": 33545,
            "low": 23421,
            "na": 43804
          },
          "observability": {
            "avg_feature_coverage": 0.6659444067796612,
            "observable_run_pct": 0.5845694915254237,
            "ambiguous_run_pct": 0.18728135593220338,
            "unobservable_run_pct": 0.4154305084745763
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4154305084745763,
          "dominance_gap": 0.2146983050847458,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 107623
            },
            "d2_information": {
              "UNOBSERVABLE": 107623
            },
            "d3_urgency": {
              "IMMEDIATE": 35995,
              "ADAPTIVE": 880
            },
            "participant_confidence": {
              "NA": 22225,
              "MEDIUM": 7516,
              "LOW": 5386,
              "HIGH": 1748
            }
          },
          "trade_size": {
            "avg": 25945.590726982155,
            "median": 12660.0
          },
          "run_size": {
            "avg": 75724.53724230509,
            "median": 22800.0,
            "avg_length": 2.9185898305084748
          },
          "recent_trades": [
            {
              "trade_id": "709",
              "timestamp": "2026-04-17T07:59:53.204236",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 59614,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "708",
              "timestamp": "2026-04-17T07:59:30.175101",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59613,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "705",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "704",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 2000.0,
              "notional": 11040.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "703",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 4000.0,
              "notional": 22080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "702",
              "timestamp": "2026-04-17T07:59:15.162705",
              "price": 5.52,
              "size": 8000.0,
              "notional": 44160.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 59612,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "701",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "700",
              "timestamp": "2026-04-17T07:58:23.450629",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59611,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "699",
              "timestamp": "2026-04-17T07:57:56.387660",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 59610,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "697",
              "timestamp": "2026-04-17T07:56:52.960892",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "696",
              "timestamp": "2026-04-17T07:56:50.172603",
              "price": 5.54,
              "size": 4000.0,
              "notional": 22160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "695",
              "timestamp": "2026-04-17T07:56:50.010430",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "694",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 16000.0,
              "notional": 88640.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "693",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 8000.0,
              "notional": 44320.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "692",
              "timestamp": "2026-04-17T07:56:49.990730",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59609,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "691",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "690",
              "timestamp": "2026-04-17T07:56:28.809530",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "689",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "688",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "687",
              "timestamp": "2026-04-17T07:56:25.578100",
              "price": 5.54,
              "size": 2000.0,
              "notional": 11080.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "686",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "685",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "684",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "683",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 6000.0,
              "notional": 33180.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "682",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "681",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 2000.0,
              "notional": 11060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "680",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 4000.0,
              "notional": 22120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "679",
              "timestamp": "2026-04-17T07:56:23.827374",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "678",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 12000.0,
              "notional": 66360.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "677",
              "timestamp": "2026-04-17T07:56:23.827045",
              "price": 5.53,
              "size": 8000.0,
              "notional": 44240.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 59608,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 107623,
      "n_runs": 36875,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-30",
      "last_trade_date": "2026-04-17",
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
        "retail_pct": 0.06876782843815912,
        "mixed_pct": 0.0,
        "instit_pct": 0.5242188008139524,
        "ambiguous_pct": 0.18896518402200274,
        "unobservable_pct": 0.21804818672588572,
        "unclear_pct": 0.40701337074788846,
        "retail_qty_pct": 0.03452181083222594,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6491584177653312,
        "ambiguous_qty_pct": 0.14883844571142413,
        "unobservable_qty_pct": 0.16748132569101865,
        "unclear_qty_pct": 0.3163197714024428,
        "retail_notional_pct": 0.034389874406961306,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6482076612071791,
        "ambiguous_notional_pct": 0.1491146858635742,
        "unobservable_notional_pct": 0.16828777852228544,
        "unclear_notional_pct": 0.3174024643858596
      },
      "run_composition": {
        "retail_pct": 0.19655593220338982,
        "mixed_pct": 0.0,
        "instit_pct": 0.2007322033898305,
        "ambiguous_pct": 0.18728135593220338,
        "unobservable_pct": 0.4154305084745763,
        "unclear_pct": 0.6027118644067797
      },
      "trade_size": {
        "avg": 25945.590726982155,
        "median": 12660.0
      },
      "run_size": {
        "avg": 75724.53724230509,
        "median": 22800.0,
        "avg_length": 2.9185898305084748
      },
      "confidence": {
        "high": 0.04740338983050847,
        "medium": 0.2038237288135593,
        "low": 0.14606101694915255,
        "na": 0.6027118644067797
      },
      "confidence_counts": {
        "high": 1748,
        "medium": 7516,
        "low": 5386,
        "na": 22225
      },
      "trade_confidence": {
        "high": 0.06367598004144095,
        "medium": 0.31168988041589624,
        "low": 0.21762076879477435,
        "na": 0.40701337074788846
      },
      "trade_confidence_counts": {
        "high": 6853,
        "medium": 33545,
        "low": 23421,
        "na": 43804
      },
      "counts": {
        "trades": {
          "retail": 7401,
          "mixed": 0,
          "institutional": 56418,
          "ambiguous": 20337,
          "unobservable": 23467,
          "unclear": 43804
        },
        "runs": {
          "retail": 7248,
          "mixed": 0,
          "institutional": 7402,
          "ambiguous": 6906,
          "unobservable": 15319,
          "unclear": 22225
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6659444067796612,
        "observable_run_pct": 0.5845694915254237,
        "ambiguous_run_pct": 0.18728135593220338,
        "unobservable_run_pct": 0.4154305084745763
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.4154305084745763,
      "dominance_gap": 0.2146983050847458,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 15682,
            "n_runs": 5509,
            "retail_pct": 0.07161076393317178,
            "mixed_pct": 0.0,
            "instit_pct": 0.5311184797857416,
            "ambiguous_pct": 0.17676316796327,
            "unobservable_pct": 0.2205075883178166,
            "unclear_pct": 0.3972707562810866,
            "avg_trade_size": 29687.758494452242,
            "avg_run_notional": 84509.60768015974,
            "retail_qty_pct": 0.030776682926869418,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6875090968927278,
            "ambiguous_qty_pct": 0.12159269323857887,
            "unobservable_qty_pct": 0.1601215269418239,
            "unclear_qty_pct": 0.28171422018040276,
            "retail_notional_pct": 0.030499813718927106,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6873913797669523,
            "ambiguous_notional_pct": 0.12213012722573134,
            "unobservable_notional_pct": 0.15997867928838935,
            "unclear_notional_pct": 0.2821088065141207,
            "run_retail_pct": 0.19931021964058812,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.21092757306226176,
            "run_ambiguous_pct": 0.1833363586857869,
            "run_unobservable_pct": 0.4064258486113632,
            "run_unclear_pct": 0.5897622072971501,
            "avg_feature_coverage": 0.6672989653294609,
            "high_confidence_pct": 0.050462878925394805,
            "medium_confidence_pct": 0.23797422399709567,
            "low_confidence_pct": 0.1218006897803594,
            "na_confidence_pct": 0.5897622072971501,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 14575,
            "n_runs": 5261,
            "retail_pct": 0.07958833619210978,
            "mixed_pct": 0.0,
            "instit_pct": 0.5441509433962264,
            "ambiguous_pct": 0.1674785591766724,
            "unobservable_pct": 0.20878216123499144,
            "unclear_pct": 0.3762607204116638,
            "avg_trade_size": 23681.456909090914,
            "avg_run_notional": 65606.77332256225,
            "retail_qty_pct": 0.04262122399630213,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6666948497589698,
            "ambiguous_qty_pct": 0.13967092139292264,
            "unobservable_qty_pct": 0.15101300485180544,
            "unclear_qty_pct": 0.29068392624472805,
            "retail_notional_pct": 0.04250923517040018,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6667037039704152,
            "ambiguous_notional_pct": 0.13971748897815983,
            "unobservable_notional_pct": 0.1510695718810248,
            "unclear_notional_pct": 0.2907870608591846,
            "run_retail_pct": 0.21820946588101123,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20281315339289108,
            "run_ambiguous_pct": 0.157194449724387,
            "run_unobservable_pct": 0.4217829310017107,
            "run_unclear_pct": 0.5789773807260977,
            "avg_feature_coverage": 0.6653582969017298,
            "high_confidence_pct": 0.08325413419501995,
            "medium_confidence_pct": 0.19901159475384908,
            "low_confidence_pct": 0.13875689032503327,
            "na_confidence_pct": 0.5789773807260977,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 15988,
            "n_runs": 5452,
            "retail_pct": 0.06398548911683763,
            "mixed_pct": 0.0,
            "instit_pct": 0.4934325744308231,
            "ambiguous_pct": 0.20853139854891167,
            "unobservable_pct": 0.23405053790342756,
            "unclear_pct": 0.44258193645233923,
            "avg_trade_size": 24935.02959657243,
            "avg_run_notional": 73122.02002751284,
            "retail_qty_pct": 0.03368731729033399,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6053245190594322,
            "ambiguous_qty_pct": 0.16973955491863627,
            "unobservable_qty_pct": 0.19124860873159755,
            "unclear_qty_pct": 0.3609881636502338,
            "retail_notional_pct": 0.03354353545270859,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6047970289831216,
            "ambiguous_notional_pct": 0.17003703170945728,
            "unobservable_notional_pct": 0.19162240385471258,
            "unclear_notional_pct": 0.36165943556416985,
            "run_retail_pct": 0.1814013206162876,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19479090242112987,
            "run_ambiguous_pct": 0.20432868672046955,
            "run_unobservable_pct": 0.419479090242113,
            "run_unclear_pct": 0.6238077769625825,
            "avg_feature_coverage": 0.6627476155539253,
            "high_confidence_pct": 0.03411592076302274,
            "medium_confidence_pct": 0.2087307410124725,
            "low_confidence_pct": 0.13334556126192224,
            "na_confidence_pct": 0.6238077769625825,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 15114,
            "n_runs": 5265,
            "retail_pct": 0.057562524811433105,
            "mixed_pct": 0.0,
            "instit_pct": 0.5175995765515417,
            "ambiguous_pct": 0.18281063914251688,
            "unobservable_pct": 0.2420272594945084,
            "unclear_pct": 0.42483789863702526,
            "avg_trade_size": 25710.578672753738,
            "avg_run_notional": 73806.20817853752,
            "retail_qty_pct": 0.03131907640160732,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6176772101601751,
            "ambiguous_qty_pct": 0.15714994960533396,
            "unobservable_qty_pct": 0.1938537638328837,
            "unclear_qty_pct": 0.3510037134382177,
            "retail_notional_pct": 0.03130887680874131,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6167044935747413,
            "ambiguous_notional_pct": 0.1575315486385506,
            "unobservable_notional_pct": 0.19445508097796682,
            "unclear_notional_pct": 0.3519866296165174,
            "run_retail_pct": 0.16296296296296298,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.19544159544159545,
            "run_ambiguous_pct": 0.16676163342830008,
            "run_unobservable_pct": 0.4748338081671415,
            "run_unclear_pct": 0.6415954415954416,
            "avg_feature_coverage": 0.6543304843304844,
            "high_confidence_pct": 0.06419753086419754,
            "medium_confidence_pct": 0.1754985754985755,
            "low_confidence_pct": 0.11870845204178537,
            "na_confidence_pct": 0.6415954415954416,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 18999,
            "n_runs": 6324,
            "retail_pct": 0.04537080898994684,
            "mixed_pct": 0.0,
            "instit_pct": 0.5423969682614874,
            "ambiguous_pct": 0.18174640770566872,
            "unobservable_pct": 0.230485815042897,
            "unclear_pct": 0.41223222274856575,
            "avg_trade_size": 25477.853256487182,
            "avg_run_notional": 76542.3361827957,
            "retail_qty_pct": 0.022157595480082393,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6735762085846989,
            "ambiguous_qty_pct": 0.13831557316710172,
            "unobservable_qty_pct": 0.165950622768117,
            "unclear_qty_pct": 0.30426619593521875,
            "retail_notional_pct": 0.022337360669039387,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6729493940574396,
            "ambiguous_notional_pct": 0.1380320115395275,
            "unobservable_notional_pct": 0.16668123373399363,
            "unclear_notional_pct": 0.3047132452735211,
            "run_retail_pct": 0.13377609108159394,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20066413662239088,
            "run_ambiguous_pct": 0.18896268184693232,
            "run_unobservable_pct": 0.4765970904490829,
            "run_unclear_pct": 0.6655597722960152,
            "avg_feature_coverage": 0.6559772296015179,
            "high_confidence_pct": 0.06246046805819102,
            "medium_confidence_pct": 0.17710309930423782,
            "low_confidence_pct": 0.09487666034155598,
            "na_confidence_pct": 0.6655597722960152,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 9028,
            "n_runs": 2945,
            "retail_pct": 0.1035666814355339,
            "mixed_pct": 0.0,
            "instit_pct": 0.5356668143553389,
            "ambiguous_pct": 0.19007532122286222,
            "unobservable_pct": 0.17069118298626496,
            "unclear_pct": 0.36076650420912715,
            "avg_trade_size": 25406.315813026144,
            "avg_run_notional": 77883.94538539898,
            "retail_qty_pct": 0.05121862174357162,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6765459042879178,
            "ambiguous_qty_pct": 0.14557665703734868,
            "unobservable_qty_pct": 0.12665881693116188,
            "unclear_qty_pct": 0.27223547396851056,
            "retail_notional_pct": 0.05130963946574681,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6763864380085638,
            "ambiguous_notional_pct": 0.14549207537213893,
            "unobservable_notional_pct": 0.12681184715355054,
            "unclear_notional_pct": 0.27230392252568947,
            "run_retail_pct": 0.3134125636672326,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17792869269949066,
            "run_ambiguous_pct": 0.20135823429541597,
            "run_unobservable_pct": 0.3073005093378608,
            "run_unclear_pct": 0.5086587436332768,
            "avg_feature_coverage": 0.6848217317487267,
            "high_confidence_pct": 0.011205432937181663,
            "medium_confidence_pct": 0.2461799660441426,
            "low_confidence_pct": 0.23395585738539898,
            "na_confidence_pct": 0.5086587436332768,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "30d": [],
        "3m": [],
        "6m": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [
        {
          "trade_id": "709",
          "timestamp": "2026-04-17T07:59:53.204236",
          "price": 5.53,
          "size": 2000.0,
          "notional": 11060.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 59614,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "708",
          "timestamp": "2026-04-17T07:59:30.175101",
          "price": 5.53,
          "size": 8000.0,
          "notional": 44240.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59613,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "705",
          "timestamp": "2026-04-17T07:59:15.162705",
          "price": 5.52,
          "size": 4000.0,
          "notional": 22080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59612,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "704",
          "timestamp": "2026-04-17T07:59:15.162705",
          "price": 5.52,
          "size": 2000.0,
          "notional": 11040.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59612,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "703",
          "timestamp": "2026-04-17T07:59:15.162705",
          "price": 5.52,
          "size": 4000.0,
          "notional": 22080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59612,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "702",
          "timestamp": "2026-04-17T07:59:15.162705",
          "price": 5.52,
          "size": 8000.0,
          "notional": 44160.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 59612,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "701",
          "timestamp": "2026-04-17T07:58:23.450629",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59611,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "700",
          "timestamp": "2026-04-17T07:58:23.450629",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59611,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "699",
          "timestamp": "2026-04-17T07:57:56.387660",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 59610,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "697",
          "timestamp": "2026-04-17T07:56:52.960892",
          "price": 5.54,
          "size": 4000.0,
          "notional": 22160.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "696",
          "timestamp": "2026-04-17T07:56:50.172603",
          "price": 5.54,
          "size": 4000.0,
          "notional": 22160.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "695",
          "timestamp": "2026-04-17T07:56:50.010430",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "694",
          "timestamp": "2026-04-17T07:56:49.990730",
          "price": 5.54,
          "size": 16000.0,
          "notional": 88640.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "693",
          "timestamp": "2026-04-17T07:56:49.990730",
          "price": 5.54,
          "size": 8000.0,
          "notional": 44320.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "692",
          "timestamp": "2026-04-17T07:56:49.990730",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59609,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "691",
          "timestamp": "2026-04-17T07:56:28.809530",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "690",
          "timestamp": "2026-04-17T07:56:28.809530",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "689",
          "timestamp": "2026-04-17T07:56:25.578100",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "688",
          "timestamp": "2026-04-17T07:56:25.578100",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "687",
          "timestamp": "2026-04-17T07:56:25.578100",
          "price": 5.54,
          "size": 2000.0,
          "notional": 11080.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "686",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 6000.0,
          "notional": 33180.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "685",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 4000.0,
          "notional": 22120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "684",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 6000.0,
          "notional": 33180.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "683",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 6000.0,
          "notional": 33180.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "682",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 4000.0,
          "notional": 22120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "681",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 2000.0,
          "notional": 11060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "680",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 4000.0,
          "notional": 22120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "679",
          "timestamp": "2026-04-17T07:56:23.827374",
          "price": 5.53,
          "size": 8000.0,
          "notional": 44240.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "678",
          "timestamp": "2026-04-17T07:56:23.827045",
          "price": 5.53,
          "size": 12000.0,
          "notional": 66360.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "677",
          "timestamp": "2026-04-17T07:56:23.827045",
          "price": 5.53,
          "size": 8000.0,
          "notional": 44240.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 59608,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        }
      ],
      "currency_thresholds": {
        "HKD": {
          "retail_max": 78000.0,
          "instit_min": 390000.0
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
      "total_trades": 107622,
      "price_moving_trades": 24336,
      "pct_price_moving": 22.612477002843285,
      "all_movers": {
        "count": 24336,
        "avg_size": 25642.160514875082,
        "median_size": 12580.0,
        "retail_count": 3153,
        "mixed_count": 0,
        "institutional_count": 9665,
        "ambiguous_count": 5572,
        "unobservable_count": 5946,
        "retail_pct": 12.956114398422091,
        "mixed_pct": 0.0,
        "instit_pct": 39.71482577251808,
        "unclear_pct": 47.32905982905983
      },
      "positive_movers": {
        "count": 11980,
        "avg_size": 24965.258186978295,
        "median_size": 12580.0,
        "retail_count": 189,
        "mixed_count": 0,
        "institutional_count": 4607,
        "ambiguous_count": 2156,
        "unobservable_count": 5028,
        "retail_pct": 1.5776293823038399,
        "mixed_pct": 0.0,
        "instit_pct": 38.45575959933222,
        "unclear_pct": 59.966611018363935
      },
      "negative_movers": {
        "count": 12356,
        "avg_size": 26298.4643258336,
        "median_size": 12580.0,
        "retail_count": 2964,
        "mixed_count": 0,
        "institutional_count": 5058,
        "ambiguous_count": 3416,
        "unobservable_count": 918,
        "retail_pct": 23.988345742958884,
        "mixed_pct": 0.0,
        "instit_pct": 40.93557785691162,
        "unclear_pct": 35.076076400129494
      }
    },
    "short_selling": {
      "data_available": false
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
          "opening": 0.003490044233326142,
          "continuous": 0.872185736957413,
          "closing": 0.08313473770158764,
          "auctions": 0.08662478193491378,
          "other": 0.04118948110767336
        },
        "1M": {
          "opening": 0.009536019747491957,
          "continuous": 0.8473808147229601,
          "closing": 0.08688832426507133,
          "auctions": 0.09642434401256328,
          "other": 0.05619484126447664
        },
        "3M": {
          "opening": 0.00889929605081608,
          "continuous": 0.8358378055956158,
          "closing": 0.11858237323709278,
          "auctions": 0.12748166928790886,
          "other": 0.036680525116475377
        },
        "6M": {
          "opening": 0.00705317310853686,
          "continuous": 0.8382209832506499,
          "closing": 0.10735086086920247,
          "auctions": 0.11440403397773932,
          "other": 0.04737498277161082
        }
      },
      "hhi": {
        "1D": 0.11418582176027602,
        "1M": 0.13478370906844817,
        "3M": 0.12780744759508006,
        "6M": 0.13387252769496066
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0064
        },
        {
          "time": "09:30",
          "avg_share": 0.1586
        },
        {
          "time": "10:00",
          "avg_share": 0.0882
        },
        {
          "time": "10:30",
          "avg_share": 0.0623
        },
        {
          "time": "11:00",
          "avg_share": 0.0535
        },
        {
          "time": "11:30",
          "avg_share": 0.0426
        },
        {
          "time": "12:00",
          "avg_share": 0.0534
        },
        {
          "time": "13:00",
          "avg_share": 0.072
        },
        {
          "time": "13:30",
          "avg_share": 0.0566
        },
        {
          "time": "14:00",
          "avg_share": 0.0544
        },
        {
          "time": "14:30",
          "avg_share": 0.063
        },
        {
          "time": "15:00",
          "avg_share": 0.0742
        },
        {
          "time": "15:30",
          "avg_share": 0.1307
        },
        {
          "time": "16:00",
          "avg_share": 0.0841
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "142",
          "auctions_pct": 9.911616995635686,
          "hhi": 0.13555908095135638,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "151",
          "auctions_pct": 19.112069450743174,
          "hhi": 0.15744178088304256,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "9985",
          "auctions_pct": 3.0575168380646245,
          "hhi": 0.13574862426598813,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1768",
          "auctions_pct": 2.683842341370392,
          "hhi": 0.13278787394153854,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2517",
          "auctions_pct": 1.7308674021222732,
          "hhi": 0.1387131154819422,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "288",
          "auctions_pct": 25.627243877285366,
          "hhi": 0.14014875680067515,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1475",
          "auctions_pct": 12.810656379034754,
          "hhi": 0.316247727863673,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2460",
          "auctions_pct": 3.17677451229883,
          "hhi": 0.137625482676377,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1117",
          "auctions_pct": 2.121481134842703,
          "hhi": 0.15583745721466383,
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
