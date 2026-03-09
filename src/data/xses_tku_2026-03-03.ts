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
      "marketCap": 125453076.1,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 281220000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 149153790.69,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 107080881.60000001,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 74946750.34,
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
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 11609592.972,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "BN2",
      "name": "Valuetronics",
      "marketCap": 346303837.815,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 258599298.66000003,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-03",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "125.5M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 69.89247311827957,
          "score_pca_percentile": 69.89247311827957,
          "rank_pca": 169,
          "total": 558,
          "adv_notional_sgd": 258704.0,
          "adv_volume_shares": 1124800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0019724984647068373,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.025399671298371417,
          "spread_ticks": 1.1888111888111887,
          "amihud": 1.6105922856494924e-07,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.612740006678382,
          "loadings": {
            "log_adv": 0.5587851169542926,
            "log_trades": 0.5167762738783443,
            "log_turnover": 0.5154944609136178,
            "neg_spread": 0.39072397097678985,
            "neg_amihud": 0.047976193036766854,
            "neg_vol": 0.0
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
          "peer_median_adv": 7961.0,
          "peer_median_score_pca": 42.47311827956989,
          "peer_median_trades": 6.0,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.020116712400992193,
          "peer_median_spread_ticks": 2.0420567696620058,
          "peer_median_amihud": 4.540619748474346e-08,
          "peer_median_turnover_ratio": 0.0001767610636325997,
          "target_vs_peer": {
            "score_pca_delta": 27.42,
            "adv_delta_pct": 3149.6,
            "trades_delta_pct": 1383.33,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": -26.26,
            "spread_ticks_delta_pct": -41.78,
            "amihud_delta_pct": -254.71,
            "turnover_ratio_delta_pct": 1015.91
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.89247311827957,
            "rank_pca": 169,
            "adv": 258704.0,
            "trades": 89.0,
            "volatility": null,
            "spread_pct": 0.025399671298371417,
            "spread_ticks": 1.1888111888111887,
            "amihud": 1.6105922856494924e-07,
            "turnover_ratio": 0.0019724984647068373,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 86.20071684587813,
            "rank_pca": 78,
            "adv": 1867135.9999999998,
            "trades": 610.0,
            "volatility": null,
            "spread_pct": 0.011266735778723733,
            "spread_ticks": 1.2668650793650793,
            "amihud": 3.96725648662304e-08,
            "turnover_ratio": 0.02383935685870264,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 31.899641577060933,
            "rank_pca": 381,
            "adv": 880.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.016704013037278483,
            "spread_ticks": 2.9285714285714284,
            "amihud": 6.420133538777674e-06,
            "turnover_ratio": 6.913071246865795e-06,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 38.70967741935484,
            "rank_pca": 343,
            "adv": 4141.0,
            "trades": 3.0,
            "volatility": null,
            "spread_pct": 0.038647342995169046,
            "spread_ticks": 3.076923076923077,
            "amihud": 0.0,
            "turnover_ratio": 0.00017977065393942648,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 11781.0,
            "trades": 9.0,
            "volatility": null,
            "spread_pct": 0.023529411764705903,
            "spread_ticks": 1.0,
            "amihud": 1.974010181944522e-06,
            "turnover_ratio": 0.00017375147332577293,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.7921146953405016,
            "rank_pca": 546,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.584229390681003,
            "rank_pca": 539,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.5013979496738118,
            "spread_ticks": 20.692307692307693,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.49462365591397,
            "rank_pca": 121,
            "adv": 723536.0,
            "trades": 251.0,
            "volatility": null,
            "spread_pct": 0.006560379990841034,
            "spread_ticks": 1.1600753295668549,
            "amihud": 0.0,
            "turnover_ratio": 0.0029253969309455145,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.73118279569893,
            "rank_pca": 142,
            "adv": 403180.0,
            "trades": 212.0,
            "volatility": null,
            "spread_pct": 0.014568776944804313,
            "spread_ticks": 2.817248459958932,
            "amihud": 5.1139830103256524e-08,
            "turnover_ratio": 0.001751111342978865,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5269593.552277072,
              "median": 28828.6,
              "min": 0.0,
              "max": 556895160.0,
              "p5": 0.0,
              "p95": 24509192.399999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10116297367620346,
              "median": 0.02946460653970532,
              "min": 0.0002965388309958632,
              "max": 1.3747779751332152,
              "p5": 0.003636184109404978,
              "p95": 0.47367300183924266,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009818438322833844,
              "median": 0.0005671848593110349,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.01947519589440732,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017582933087488553,
              "median": 1.3881996477637723e-08,
              "min": 0.0,
              "max": 0.04140786749482397,
              "p5": 0.0,
              "p95": 3.095852480042193e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 638.905017921147,
              "median": 12.0,
              "min": 0.0,
              "max": 21604.0,
              "p5": 0.0,
              "p95": 3761.349999999992,
              "count": 558
            }
          },
          "sector": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3317705.25,
              "median": 7961.0,
              "min": 0.0,
              "max": 24399000.0,
              "p5": 0.0,
              "p95": 16512847.599999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16063308449882177,
              "median": 0.02446454153153866,
              "min": 0.0014528847758469578,
              "max": 0.6666666666666666,
              "p5": 0.00488773262685383,
              "p95": 0.6088226157191674,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005258145569334209,
              "median": 0.0001767610636325997,
              "min": 0.0,
              "max": 0.02383935685870264,
              "p5": 0.0,
              "p95": 0.021058087869619956,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4325394363328788e-06,
              "median": 1.0036589671558983e-07,
              "min": 0.0,
              "max": 6.420133538777674e-06,
              "p5": 9.027596097406274e-11,
              "p95": 5.308602699569386e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 737.0,
              "median": 6.0,
              "min": 0.0,
              "max": 5184.0,
              "p5": 0.0,
              "p95": 3583.0999999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 376331.75,
              "median": 7961.0,
              "min": 0.0,
              "max": 1867135.9999999998,
              "p5": 0.0,
              "p95": 1466875.9999999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 135.75,
              "median": 6.0,
              "min": 0.0,
              "max": 610.0,
              "p5": 0.0,
              "p95": 484.3499999999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15991765960650012,
              "median": 0.020116712400992193,
              "min": 0.006560379990841034,
              "max": 0.6666666666666666,
              "p5": 0.008207604516599978,
              "p95": 0.6088226157191674,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.242748883336633,
              "median": 2.0420567696620058,
              "min": 1.0,
              "max": 20.692307692307693,
              "p5": 1.0,
              "p95": 14.526923076923069,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4141593526152804e-06,
              "median": 4.540619748474346e-08,
              "min": 0.0,
              "max": 6.420133538777674e-06,
              "p5": 0.0,
              "p95": 5.308602699569386e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036095375413923857,
              "median": 0.0001767610636325997,
              "min": 0.0,
              "max": 0.02383935685870264,
              "p5": 0.0,
              "p95": 0.016519470883987634,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.04166666666666663,
            "market": 0.005273109388416852,
            "sector": -0.0028248587570621764,
            "peers": 0.0,
            "vs_market": -0.04693977605508348,
            "vs_sector": -0.03884180790960445,
            "vs_peers": -0.04166666666666663
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 72.75985663082437,
          "score_pca_percentile": 72.75985663082437,
          "rank_pca": 153,
          "total": 558,
          "adv_notional_sgd": 430575.0,
          "adv_volume_shares": 1722300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0030203005918959685,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.1888111888111887,
          "amihud": 8.557943697288424e-08,
          "volatility": 0.6969064975191972
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5143332806278997,
          "loadings": {
            "log_adv": 0.555615200307699,
            "log_trades": 0.5061789255038978,
            "log_turnover": 0.5157481409112247,
            "neg_spread": 0.39718600397507586,
            "neg_amihud": 0.09789758549513528,
            "neg_vol": -0.04168741668542482
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
          "peer_median_adv": 5758.75,
          "peer_median_score_pca": 36.46953405017921,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.2020294659718305,
          "peer_median_spread_pct": 0.02460785763334713,
          "peer_median_spread_ticks": 1.4505857898715042,
          "peer_median_amihud": 1.798091146438942e-08,
          "peer_median_turnover_ratio": 0.00014242162840435557,
          "target_vs_peer": {
            "score_pca_delta": 36.29,
            "adv_delta_pct": 7376.9,
            "trades_delta_pct": 2125.0,
            "volatility_delta_pct": -244.95,
            "spread_pct_delta_pct": -1.44,
            "spread_ticks_delta_pct": -18.05,
            "amihud_delta_pct": -375.95,
            "turnover_ratio_delta_pct": 2020.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 430575.0,
            "trades": 89.0,
            "volatility": 0.6969064975191972,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.1888111888111887,
            "amihud": 8.557943697288424e-08,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 88.88888888888889,
            "rank_pca": 63,
            "adv": 2713200.0,
            "trades": 779.0,
            "volatility": 1.174471189495898,
            "spread_pct": 0.011631496413004568,
            "spread_ticks": 1.2775768535262206,
            "amihud": 1.798091146438942e-08,
            "turnover_ratio": 0.040184482498156066,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 30.46594982078853,
            "rank_pca": 389,
            "adv": 1890.0,
            "trades": 2.0,
            "volatility": 0.1389876263822561,
            "spread_pct": 0.014037680088659044,
            "spread_ticks": 2.533333333333333,
            "amihud": 1.8278461392233783e-07,
            "turnover_ratio": 1.4517449618418169e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.61648745519714,
            "rank_pca": 377,
            "adv": 4100.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": 0.0,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 40.32258064516129,
            "rank_pca": 334,
            "adv": 7417.5,
            "trades": 6.0,
            "volatility": 0.41021824821038566,
            "spread_pct": 0.035178035178035215,
            "spread_ticks": 1.5185185185185186,
            "amihud": 1.974010181944522e-06,
            "turnover_ratio": 0.00010685251033403148,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.240143369175627,
            "rank_pca": 543,
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
            "ticker": "KUX",
            "score_pca": 3.942652329749104,
            "rank_pca": 537,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5706940874035991,
            "spread_ticks": 24.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 723888.0,
            "trades": 245.0,
            "volatility": 0.2650713055614049,
            "spread_pct": 0.006560379990841034,
            "spread_ticks": 1.1600753295668549,
            "amihud": 1.2049750527989901e-08,
            "turnover_ratio": 0.002926820135485016,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 79.21146953405018,
            "rank_pca": 117,
            "adv": 820620.0,
            "trades": 212.0,
            "volatility": 0.7139627449072641,
            "spread_pct": 0.007775402757255375,
            "spread_ticks": 1.3826530612244898,
            "amihud": 3.631681879609125e-08,
            "turnover_ratio": 0.003490669642224599,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5411246022400131,
              "median": 0.3369225969406081,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.6882362555748547,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4725603.155742784,
              "median": 25052.75,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 16353208.32499993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0954649531963627,
              "median": 0.025751072961373415,
              "min": 0.00028584167598335404,
              "max": 1.3890746934225195,
              "p5": 0.0037907610251629626,
              "p95": 0.48775257196336624,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014172524876643954,
              "median": 0.0005005100128029418,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.016222279428473887,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002882598230906249,
              "median": 7.078134727068366e-08,
              "min": 0.0,
              "max": 0.06617038875103391,
              "p5": 0.0,
              "p95": 6.529332322196646e-05,
              "count": 510
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 582.4193548387096,
              "median": 10.0,
              "min": 0.0,
              "max": 13837.0,
              "p5": 0.0,
              "p95": 3239.449999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3262279641703061,
              "median": 0.16411388906848395,
              "min": 0.0,
              "max": 1.174471189495898,
              "p5": 0.0,
              "p95": 1.0073235473040525,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3491353.1874999995,
              "median": 5758.75,
              "min": 0.0,
              "max": 24773642.999999996,
              "p5": 0.0,
              "p95": 17052487.949999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17166215486076203,
              "median": 0.030069804554895274,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004946711154225595,
              "p95": 0.6330762639245929,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0074246272286539105,
              "median": 0.00014242162840435557,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.03168241953526467,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.229624017154293e-07,
              "median": 1.798091146438942e-08,
              "min": 0.0,
              "max": 1.974010181944522e-06,
              "p5": 0.0,
              "p95": 1.4366425115378654e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 664.125,
              "median": 4.0,
              "min": 0.0,
              "max": 4436.0,
              "p5": 0.0,
              "p95": 3156.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 533889.4375,
              "median": 5758.75,
              "min": 0.0,
              "max": 2713200.0,
              "p5": 0.0,
              "p95": 2050796.999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 155.625,
              "median": 4.0,
              "min": 0.0,
              "max": 779.0,
              "p5": 0.0,
              "p95": 592.0999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3378388893196511,
              "median": 0.2020294659718305,
              "min": 0.0,
              "max": 1.174471189495898,
              "p5": 0.0,
              "p95": 1.013293233889876,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17016552953786734,
              "median": 0.02460785763334713,
              "min": 0.006560379990841034,
              "max": 0.6666666666666666,
              "p5": 0.006985637959086054,
              "p95": 0.6330762639245929,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.659019637021178,
              "median": 1.4505857898715042,
              "min": 1.0,
              "max": 24.5,
              "p5": 1.0560263653483992,
              "p95": 17.28999999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.1759175380790435e-07,
              "median": 1.798091146438942e-08,
              "min": 0.0,
              "max": 1.974010181944522e-06,
              "p5": 0.0,
              "p95": 1.4366425115378654e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005862666622786602,
              "median": 0.00014242162840435557,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.027341647998580035,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.0980392156862746,
            "market": -0.02074178284862016,
            "sector": -0.022405199483477523,
            "peers": -0.012981200897867584,
            "vs_market": -0.07729743283765445,
            "vs_sector": -0.07563401620279708,
            "vs_peers": -0.08505801478840702
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 72.75985663082437,
          "score_pca_percentile": 72.75985663082437,
          "rank_pca": 153,
          "total": 558,
          "adv_notional_sgd": 418250.0,
          "adv_volume_shares": 1673000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0029338459561295683,
          "votes": 96.5,
          "trades": 96.5,
          "spread_pct": 0.02490419468975198,
          "spread_ticks": 1.2158691383955071,
          "amihud": 6.517387626349488e-08,
          "volatility": 0.779592499065206
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5180644650242759,
          "loadings": {
            "log_adv": 0.5511326622665066,
            "log_trades": 0.4990967823988369,
            "log_turnover": 0.501636172071491,
            "neg_spread": 0.4147484490350094,
            "neg_amihud": 0.11183418886656113,
            "neg_vol": 0.10484836419913578
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
          "peer_median_adv": 5502.0,
          "peer_median_score_pca": 42.562724014336915,
          "peer_median_trades": 4.25,
          "peer_median_volatility": 0.30076369182618345,
          "peer_median_spread_pct": 0.023624021730769773,
          "peer_median_spread_ticks": 1.4124357520786093,
          "peer_median_amihud": 2.8440911856282975e-08,
          "peer_median_turnover_ratio": 0.00013163934874993753,
          "target_vs_peer": {
            "score_pca_delta": 30.2,
            "adv_delta_pct": 7501.8,
            "trades_delta_pct": 2170.59,
            "volatility_delta_pct": -159.2,
            "spread_pct_delta_pct": -5.42,
            "spread_ticks_delta_pct": -13.92,
            "amihud_delta_pct": -129.16,
            "turnover_ratio_delta_pct": 2128.7
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 418250.0,
            "trades": 96.5,
            "volatility": 0.779592499065206,
            "spread_pct": 0.02490419468975198,
            "spread_ticks": 1.2158691383955071,
            "amihud": 6.517387626349488e-08,
            "turnover_ratio": 0.0029338459561295683,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 86.20071684587813,
            "rank_pca": 78,
            "adv": 1580268.25,
            "trades": 602.5,
            "volatility": 0.8729273632781643,
            "spread_pct": 0.00929560520641535,
            "spread_ticks": 1.2820416615135724,
            "amihud": 1.9464663014101422e-08,
            "turnover_ratio": 0.02154591475534149,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 43.01075268817204,
            "rank_pca": 319,
            "adv": 5095.25,
            "trades": 4.5,
            "volatility": 0.14421915550791808,
            "spread_pct": 0.013713695576394362,
            "spread_ticks": 2.4924731182795696,
            "amihud": 1.494937043578777e-07,
            "turnover_ratio": 3.802189185776187e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.73835125448029,
            "rank_pca": 354,
            "adv": 4120.5,
            "trades": 1.0,
            "volatility": 0.23637223488954212,
            "spread_pct": 0.05009410288582176,
            "spread_ticks": 4.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0001788807002070531,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 42.11469534050179,
            "rank_pca": 324,
            "adv": 5908.75,
            "trades": 4.0,
            "volatility": 0.370681799792854,
            "spread_pct": 0.033534347885145185,
            "spread_ticks": 1.4592592592592593,
            "amihud": 1.974010181944522e-06,
            "turnover_ratio": 8.439799729282196e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.7777777777777777,
            "rank_pca": 542,
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
            "ticker": "KUX",
            "score_pca": 3.763440860215054,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3011976095522664,
            "spread_pct": 0.5360460185387054,
            "spread_ticks": 22.596153846153847,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 723712.0,
            "trades": 240.0,
            "volatility": 0.3003297741001006,
            "spread_pct": 0.006028735546436563,
            "spread_ticks": 1.0725683493807305,
            "amihud": 1.6464414581840726e-08,
            "turnover_ratio": 0.002926108533215265,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 78.67383512544804,
            "rank_pca": 120,
            "adv": 639307.0,
            "trades": 212.0,
            "volatility": 0.5396414510470063,
            "spread_pct": 0.00772783181434305,
            "spread_ticks": 1.3656122448979593,
            "amihud": 3.741716069846453e-08,
            "turnover_ratio": 0.002806977018446093,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5706917852073936,
              "median": 0.36517003469239795,
              "min": 0.0,
              "max": 6.48074069840786,
              "p5": 0.0,
              "p95": 1.678896500570317,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3689575.359827805,
              "median": 17125.875,
              "min": 0.0,
              "max": 294617719.5,
              "p5": 0.0,
              "p95": 13470972.049999958,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09612280690733598,
              "median": 0.025119220709855897,
              "min": 0.00026685148825340474,
              "max": 1.387941981292365,
              "p5": 0.003665474392298249,
              "p95": 0.495570836908324,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.012968738078015437,
              "median": 0.00038541473759190736,
              "min": 0.0,
              "max": 5.569837189374464,
              "p5": 0.0,
              "p95": 0.012441918188192392,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017401108571541714,
              "median": 7.115114340137752e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 6.503972503675729e-05,
              "count": 532
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.08870967741933,
              "median": 7.5,
              "min": 0.0,
              "max": 12156.5,
              "p5": 0.0,
              "p95": 2597.9749999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3561871069507415,
              "median": 0.2687849222209042,
              "min": 0.0,
              "max": 0.8729273632781643,
              "p5": 0.050476704427771336,
              "p95": 0.8402601608036289,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3289578.21875,
              "median": 5502.0,
              "min": 0.0,
              "max": 24302983.0,
              "p5": 0.0,
              "p95": 16350032.837499987,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16693935372960989,
              "median": 0.029219271287448584,
              "min": 0.0012601983879784253,
              "max": 0.6666666666666666,
              "p5": 0.004072590774431349,
              "p95": 0.6209494398218801,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005020268848500477,
              "median": 0.00013163934874993753,
              "min": 0.0,
              "max": 0.02154591475534149,
              "p5": 0.0,
              "p95": 0.019388225911483255,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023612511679916537,
              "median": 4.231926963879815e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 0.0,
              "p95": 0.0012271059979032987,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 682.4375,
              "median": 4.25,
              "min": 0.0,
              "max": 4751.0,
              "p5": 0.0,
              "p95": 3299.024999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 369801.46875,
              "median": 5502.0,
              "min": 0.0,
              "max": 1580268.25,
              "p5": 0.0,
              "p95": 1280473.5624999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 133.0,
              "median": 4.25,
              "min": 0.0,
              "max": 602.5,
              "p5": 0.0,
              "p95": 475.6249999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3456711735209815,
              "median": 0.30076369182618345,
              "min": 0.0,
              "max": 0.8729273632781643,
              "p5": 0.050476704427771336,
              "p95": 0.7562772939972588,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16538837551499103,
              "median": 0.023624021730769773,
              "min": 0.006028735546436563,
              "max": 0.6666666666666666,
              "p5": 0.006623419240203834,
              "p95": 0.6209494398218801,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.408513559935617,
              "median": 1.4124357520786093,
              "min": 1.0,
              "max": 22.596153846153847,
              "p5": 1.0253989222832558,
              "p95": 16.08749999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023612366286934752,
              "median": 2.8440911856282975e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 0.0,
              "p95": 0.0012271059979032987,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034475376120450606,
              "median": 0.00013163934874993753,
              "min": 0.0,
              "max": 0.02154591475534149,
              "p5": 0.0,
              "p95": 0.015028982577597301,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -2.220446049250313e-16,
            "market": -0.004279227452795631,
            "sector": -0.021344078710467063,
            "peers": -0.010144939980907597,
            "vs_market": 0.004279227452795409,
            "vs_sector": 0.02134407871046684,
            "vs_peers": 0.010144939980907375
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 75.26881720430107,
          "score_pca_percentile": 75.26881720430107,
          "rank_pca": 139,
          "total": 558,
          "adv_notional_sgd": 519375.5,
          "adv_volume_shares": 1992800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003494661220188287,
          "votes": 131.0,
          "trades": 131.0,
          "spread_pct": 0.024100349578449535,
          "spread_ticks": 1.1699029126213591,
          "amihud": 4.9741695520304396e-08,
          "volatility": 0.699463112082589
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5323172838534191,
          "loadings": {
            "log_adv": 0.5385132128413819,
            "log_trades": 0.48895928354087115,
            "log_turnover": 0.4937598927387766,
            "neg_spread": 0.4194844358450894,
            "neg_amihud": 0.09956549858940722,
            "neg_vol": 0.2030837918973648
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
          "peer_median_adv": 15029.5,
          "peer_median_score_pca": 46.95340501792114,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.2601112051988531,
          "peer_median_spread_pct": 0.021804439166545897,
          "peer_median_spread_ticks": 1.3525528169014085,
          "peer_median_amihud": 1.0244570578781913e-07,
          "peer_median_turnover_ratio": 0.00016856732386461888,
          "target_vs_peer": {
            "score_pca_delta": 28.32,
            "adv_delta_pct": 3355.7,
            "trades_delta_pct": 2083.33,
            "volatility_delta_pct": -168.91,
            "spread_pct_delta_pct": -10.53,
            "spread_ticks_delta_pct": -13.5,
            "amihud_delta_pct": 51.45,
            "turnover_ratio_delta_pct": 1973.15
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 75.26881720430107,
            "rank_pca": 139,
            "adv": 519375.5,
            "trades": 131.0,
            "volatility": 0.699463112082589,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.1699029126213591,
            "amihud": 4.9741695520304396e-08,
            "turnover_ratio": 0.003494661220188287,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 1368170.5,
            "trades": 244.0,
            "volatility": 0.6875155576727794,
            "spread_pct": 0.0071618542200274,
            "spread_ticks": 1.2668650793650793,
            "amihud": 1.7550880001123276e-08,
            "turnover_ratio": 0.02336097016229602,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 56.272401433691755,
            "rank_pca": 245,
            "adv": 26864.0,
            "trades": 10.0,
            "volatility": 0.14562871186146564,
            "spread_pct": 0.011718217740836636,
            "spread_ticks": 2.1785714285714284,
            "amihud": 1.7558423899683558e-07,
            "turnover_ratio": 0.00020186168040848122,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.2574030728607395,
            "spread_pct": 0.04808877928483345,
            "spread_ticks": 3.9,
            "amihud": 4.831061265660419e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 3195.0,
            "trades": 2.0,
            "volatility": 0.36859913450432,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4375,
            "amihud": 3.1608590623317324e-06,
            "turnover_ratio": 4.397987381864484e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 4.032258064516129,
            "rank_pca": 535,
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
            "ticker": "KUX",
            "score_pca": 7.526881720430108,
            "rank_pca": 517,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.2078460969082647,
            "spread_pct": 0.409090909090909,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 81.36200716845879,
            "rank_pca": 105,
            "adv": 484225.0,
            "trades": 280.0,
            "volatility": 0.2628193375369668,
            "spread_pct": 0.006343575731428668,
            "spread_ticks": 1.1136044880785414,
            "amihud": 2.1645763785494516e-08,
            "turnover_ratio": 0.0019690034804004473,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 78.85304659498208,
            "rank_pca": 119,
            "adv": 504640.0,
            "trades": 189.0,
            "volatility": 0.4151396577443265,
            "spread_pct": 0.007342660859594248,
            "spread_ticks": 1.267605633802817,
            "amihud": 2.930717257880268e-08,
            "turnover_ratio": 0.0025086609249084586,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5965613702704161,
              "median": 0.38270122929098843,
              "min": 0.0,
              "max": 7.784600182411426,
              "p5": 0.07826050969072744,
              "p95": 1.6713736228018605,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3387313.515627962,
              "median": 15458.900000000001,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 12232352.6,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09680028078262673,
              "median": 0.025178346621905188,
              "min": 0.00025777693161299257,
              "max": 1.3747779751332152,
              "p5": 0.0035371409391183367,
              "p95": 0.5020920502092043,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0070504328731464455,
              "median": 0.00031355747542606896,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.010434033199013185,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001315011487065716,
              "median": 9.433973656119139e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 4.750825090799997e-05,
              "count": 545
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 444.24014336917566,
              "median": 7.0,
              "min": 0.0,
              "max": 12305.0,
              "p5": 0.0,
              "p95": 2264.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32831414180825136,
              "median": 0.25873026071829586,
              "min": 0.0,
              "max": 0.699463112082589,
              "p5": 0.05097004915151298,
              "p95": 0.6952814680391557,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2942915.875,
              "median": 15029.5,
              "min": 0.0,
              "max": 21622720.0,
              "p5": 0.0,
              "p95": 14533627.67499999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14998996486001764,
              "median": 0.027995505085352347,
              "min": 0.0012022817061633669,
              "max": 0.6666666666666666,
              "p5": 0.0032881320860157787,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005013226448844002,
              "median": 0.00016856732386461888,
              "min": 0.0,
              "max": 0.02336097016229602,
              "p5": 0.0,
              "p95": 0.019688803595844347,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002363349595626629,
              "median": 1.1266296725856998e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.3358369635504314e-10,
              "p95": 0.0012275213950114342,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 631.375,
              "median": 6.0,
              "min": 0.0,
              "max": 4663.0,
              "p5": 0.0,
              "p95": 3116.3499999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 298762.0625,
              "median": 15029.5,
              "min": 0.0,
              "max": 1368170.5,
              "p5": 0.0,
              "p95": 1065934.8249999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 90.75,
              "median": 6.0,
              "min": 0.0,
              "max": 280.0,
              "p5": 0.0,
              "p95": 267.4,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2931189461361078,
              "median": 0.2601112051988531,
              "min": 0.0,
              "max": 0.6875155576727794,
              "p5": 0.05097004915151298,
              "p95": 0.5921839926978207,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1485379155233189,
              "median": 0.021804439166545897,
              "min": 0.006343575731428668,
              "max": 0.6666666666666666,
              "p5": 0.006629973202438225,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.7705183287272335,
              "median": 1.3525528169014085,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0397615708274894,
              "p95": 13.064999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002363350632593054,
              "median": 1.0244570578781913e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.142808000393147e-09,
              "p95": 0.0012275213950114342,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035274686361441007,
              "median": 0.00016856732386461888,
              "min": 0.0,
              "max": 0.02336097016229602,
              "p5": 0.0,
              "p95": 0.01606266192921036,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.0980392156862746,
            "market": -0.0027139557762475564,
            "sector": -0.04447214070024941,
            "peers": -0.010044921557368025,
            "vs_market": -0.09532525991002705,
            "vs_sector": -0.0535670749860252,
            "vs_peers": -0.08799429412890658
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Latest snapshot: volatility is unavailable for this period. Notional ADV fell to S$258.7K vs S$519.4K over 30d (-50.19%), and spread worsened to 2.54% from 2.41% (+5.39%), signaling higher cost alongside lower activity.",
        "market_comparison": "Despite the slowdown, activity is still far above peers: S$258.7K ADV vs peer median S$8.0K (+3149.64%) and 89 trades vs 6. Spread is worse than peers at 2.54% vs 2.01% (+26.26%), even though it is only 1.19 ticks vs peers’ 2.04 ticks (tick-based quoting is."
      },
      "1w": {
        "liquidity": "Over 1w, notional ADV is S$430.6K, down vs the 30d baseline S$519.4K (-17.10%), indicating a recent slowdown from the month’s average. Spread widened/worsened to 2.50% vs 2.41% (+3.57%), and volatility is elevated at 69.69%, implying more variable day-to-day.",
        "market_comparison": "Liquidity depth remains a peer standout: S$430.6K ADV vs peer median S$5.8K (+7376.88%) and 89 trades vs 4. Trading cost is slightly worse than peers (2.50% vs 2.46%, +1.44%) while tick spread is lower (1.19 vs 1.45), suggesting the percent spread penalty."
      },
      "2w": {
        "liquidity": "Over 2w, notional ADV is S$418.3K vs S$519.4K over 30d (-19.47%), reinforcing that recent activity is below the monthly run-rate. Spread worsened to 2.49% vs 2.41% (+3.34%) and volatility is very high at 77.96%, which can increase trading cost uncertainty.",
        "market_comparison": "Versus peers, TKU remains a volume leader: S$418.3K ADV vs S$5.5K (+7501.78%) and 96.5 trades vs 4.25. Costs are worse than peers (2.49% vs 2.36%, +5.42%) though tick spread is lower (1.22 vs 1.41), pointing to generally continuous quoting but less favorable."
      },
      "30d": {
        "liquidity": "30d (primary) shows the strongest liquidity in this set: S$519.4K notional ADV, 131 trades, and 0.3495% turnover, supporting more consistent day-to-day tradability for a small cap (S$125.5M). Spread is 2.41% (1.17 ticks) with very low measured price impact.",
        "market_comparison": "TKU is a clear activity outlier versus peers: S$519.4K ADV vs S$15.0K (+3355.71%) and 131 trades vs 6. Trading cost is better than market and sector medians (2.41% vs market 2.52% and secto%), but worse than peers (2.41% vs 2.18%, +10.53%) even with fewer."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "hybrid_markov_regression_pymc",
      "estimation_window_days": 25,
      "reporting_window_days": 25,
      "available_history_days": 25,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "Company-Led",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.26791941165039335,
          "low": 0.26791941165039335,
          "high": 0.26791941165039335
        },
        "sector_share": {
          "median": 0.37366288936024633,
          "low": 0.37366288936024633,
          "high": 0.37366288936024633
        },
        "company_share": {
          "median": 0.35841769898936043,
          "low": 0.35841769898936043,
          "high": 0.35841769898936043
        }
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.2527455758791124,
          "low": 0.2527455758791124,
          "high": 0.2527455758791124
        },
        "beta_sector": {
          "median": 9.406937867275602,
          "low": 9.406937867275602,
          "high": 9.406937867275602
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": 0.0,
          "high": 0.0
        }
      },
      "rolling_windows": {
        "p1": {
          "valid": false,
          "n_obs": 0
        },
        "p2": {
          "valid": false,
          "n_obs": 0
        },
        "p3": {
          "valid": false,
          "n_obs": 0
        },
        "p4": {
          "valid": false,
          "n_obs": 0
        },
        "p5": {
          "valid": false,
          "n_obs": 0
        },
        "p6": {
          "valid": true,
          "n_obs": 25,
          "period_label": "2026-01-26 to 2026-03-03",
          "shares": {
            "share_market": 0.26791941165039335,
            "share_sector": 0.37366288936024633,
            "share_idio": 0.35841769898936043
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "regimes": [
        {
          "id": 0,
          "label": "Mixed (Sector Tilt)",
          "pct_time": 0.11999999999999998,
          "dominant_driver": "sector",
          "dominant_driver_probability": 0.0,
          "expected_duration_days": 1.4999999999999998,
          "current_probability": 0.0,
          "n_days_effective": 2.9999999999999996,
          "shares": {
            "market": {
              "median": 0.4936481416258824,
              "low": 0.4936481416258824,
              "high": 0.4936481416258824
            },
            "sector": {
              "median": 0.5063518583741173,
              "low": 0.5063518583741173,
              "high": 0.5063518583741173
            },
            "company": {
              "median": 4.301038544072743e-16,
              "low": 4.301038544072743e-16,
              "high": 4.301038544072743e-16
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.0746345407818776,
              "low": 2.0746345407818776,
              "high": 2.0746345407818776
            },
            "beta_sector": {
              "median": -2.1031451415583735,
              "low": -2.1031451415583735,
              "high": -2.1031451415583735
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 1e-06,
            "low": 1e-06,
            "high": 1e-06
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Company-Led",
          "pct_time": 0.88,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 10.999999999999996,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "shares": {
            "market": {
              "median": 0.04219068167490429,
              "low": 0.04219068167490429,
              "high": 0.04219068167490429
            },
            "sector": {
              "median": 0.2409739203463753,
              "low": 0.2409739203463753,
              "high": 0.2409739203463753
            },
            "company": {
              "median": 0.7168353979787204,
              "low": 0.7168353979787204,
              "high": 0.7168353979787204
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 0.2527455758791124,
              "low": 0.2527455758791124,
              "high": 0.2527455758791124
            },
            "beta_sector": {
              "median": 9.406937867275602,
              "low": 9.406937867275602,
              "high": 9.406937867275602
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02934826714852991,
            "low": 0.02934826714852991,
            "high": 0.02934826714852991
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.40889046446633,
            0.5911095355336702
          ],
          [
            0.1322857078331237,
            0.8677142921668765
          ]
        ],
        "low": [
          [
            0.1700771081504696,
            0.3440238415965768
          ],
          [
            0.050851834303442436,
            0.7717086631955182
          ]
        ],
        "high": [
          [
            0.6559761584034232,
            0.8299228918495303
          ],
          [
            0.22829133680448185,
            0.9491481656965576
          ]
        ],
        "counts": [
          [
            1.0,
            2.0
          ],
          [
            2.0,
            19.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 25,
        "reporting_window_days": 25,
        "regime_inference": "hybrid_markov_bayesian_regression",
        "uncertainty_engine": "pymc_weighted_regime_regressions",
        "lead_horizon_days": 1,
        "distribution": "student_t",
        "history_limited": true
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hybrid_markov_regression_pymc",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "Mixed (Sector Tilt)",
          "pct_time": 0.11999999999999998,
          "dominant_driver": "sector",
          "dominant_driver_probability": 0.0,
          "expected_duration_days": 1.4999999999999998,
          "current_probability": 0.0,
          "n_days_effective": 2.9999999999999996,
          "shares": {
            "market": {
              "median": 0.4936481416258824,
              "low": 0.4936481416258824,
              "high": 0.4936481416258824
            },
            "sector": {
              "median": 0.5063518583741173,
              "low": 0.5063518583741173,
              "high": 0.5063518583741173
            },
            "company": {
              "median": 4.301038544072743e-16,
              "low": 4.301038544072743e-16,
              "high": 4.301038544072743e-16
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.0746345407818776,
              "low": 2.0746345407818776,
              "high": 2.0746345407818776
            },
            "beta_sector": {
              "median": -2.1031451415583735,
              "low": -2.1031451415583735,
              "high": -2.1031451415583735
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 1e-06,
            "low": 1e-06,
            "high": 1e-06
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Company-Led",
          "pct_time": 0.88,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 10.999999999999996,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "shares": {
            "market": {
              "median": 0.04219068167490429,
              "low": 0.04219068167490429,
              "high": 0.04219068167490429
            },
            "sector": {
              "median": 0.2409739203463753,
              "low": 0.2409739203463753,
              "high": 0.2409739203463753
            },
            "company": {
              "median": 0.7168353979787204,
              "low": 0.7168353979787204,
              "high": 0.7168353979787204
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 0.2527455758791124,
              "low": 0.2527455758791124,
              "high": 0.2527455758791124
            },
            "beta_sector": {
              "median": 9.406937867275602,
              "low": 9.406937867275602,
              "high": 9.406937867275602
            },
            "beta_market_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "beta_sector_lag": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "volatility": {
            "median": 0.02934826714852991,
            "low": 0.02934826714852991,
            "high": 0.02934826714852991
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        }
      ],
      "transitions": [
        [
          0.40889046446633,
          0.5911095355336702
        ],
        [
          0.1322857078331237,
          0.8677142921668765
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.40889046446633,
            0.5911095355336702
          ],
          [
            0.1322857078331237,
            0.8677142921668765
          ]
        ],
        "low": [
          [
            0.1700771081504696,
            0.3440238415965768
          ],
          [
            0.050851834303442436,
            0.7717086631955182
          ]
        ],
        "high": [
          [
            0.6559761584034232,
            0.8299228918495303
          ],
          [
            0.22829133680448185,
            0.9491481656965576
          ]
        ],
        "counts": [
          [
            1.0,
            2.0
          ],
          [
            2.0,
            19.0
          ]
        ]
      },
      "current_regime": 1,
      "current_regime_label": "Company-Led",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
      },
      "liq_section": {
        "text": "Liquidity score: 75.27% — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "drivers": {
        "text": "Company-Led",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "exec_check": {
        "text": "High cost / one-sided depth",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "intraday": {
        "text": "Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
      },
      "perf": {
        "text": "Context",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      }
    },
    "borders": {
      "action_plan": "border-amber-500/30",
      "index": "border-slate-700"
    },
    "colors": {
      "interpretation_good": "interpretation-good",
      "interpretation_neutral": "interpretation-neutral",
      "interpretation_bad": "interpretation-bad"
    }
  },
  "labels": {
    "header_title": "Liquidity Analysis Report",
    "header_meta_line1_tokens": [
      "Toku Ltd",
      "•",
      "TKU",
      "•",
      "Sector: Software - Application",
      "•",
      "Market Cap: 125.5M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-03-03",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "Liquidity ranks above most of the market, but recent trading slowed and costs widened versus the 30d baseline.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Now: Company-Led regime with company as main driver (prob=1.0), based on 25 days of history.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "Dominant driver is company-specific in a Company-Led regime (prob=1.0; stay prob=0.868; expected duration ~11 days)."
      },
      {
        "title": "Market Link",
        "text": "Market explains 26.8% of moves; market sensitivity is low (beta 0.253, range 0.253–0.253)."
      },
      {
        "title": "Sector Link",
        "text": "Sector explains 37.4% of moves; sector sensitivity is very high (beta 9.407, range 9.407–9.407), so Software-Application swings can transmit strongly when they occur."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Market / Sector / Company)",
    "drivers_pie_note": "Latest window (2026-01-26 to 2026-03-03): Market 26.8%, Sector 37.4%, Company 35.8%. Shares are point estimates (low=median=high) from limited 25-day history.",
    "lead_lag_title": "Who Tends to Lead (if any)?",
    "lead_lag_note": "No stable external lead signal in the current regime. In lag tests, sector aligns best at 0 days and market at 5 days, but this did not translate into a reliable lead regime.",
    "rolling_title": "How Drivers Changed Over Time (Rolling Windows)",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Only one rolling window is available (2026-01-26 to 2026-03-03), so trend comparisons across windows are unavailable.",
    "drivers_bottom_line": "Today’s price action is best described as company-led, with meaningful sector influence; the regime read is high within the model but is based on only 25 trading days.",
    "drivers_wtd_title": "Key Takeaways",
    "drivers_wtd_list": [
      "Current mix is balanced between sector (37.4%) and company-specific (35.8%), with a smaller market component (26.8%); this means broad index moves are not the primary explanation day-to-day.",
      "Regime classification is Company-Led (prob=1.0) and tends to persist (stay probability 0.868; expected duration ~11 days), but the history base is limited (25 days vs 252).",
      "No stable lead relationship is detected; sector contemporaneous fit (best lag 0) and market delayed fit (best lag 5) are observational and may not hold consistently."
    ],
    "regime_title": "Price Driver Regimes",
    "regime_subtitle": "Two regimes observed; most of the time has been Company-Led over the last 25 days of available history.",
    "regime_badge_text": "Company-Led (prob=1.0)",
    "regime_pie_title": "Time Spent in Each Regime (last 25 days)",
    "transition_title": "Regime Stickiness (Stay / Switch)",
    "transition_cols": [
      "From \\ To",
      "Mixed (Sector Tilt)",
      "Company-Led"
    ],
    "transition_note_template": "Stay probabilities suggest how sticky each regime is: Mixed (Sector Tilt) stays 0.409 vs switches 0.591; Company-Led stays 0.868 vs switches 0.132. Expected duration in the current regime is ~11 days.",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "30d liquidity score 75.27% (rank 139/558). Recent 1d–2w activity is lower than the 30d baseline and spreads are modestly worse.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "TKU trades far more notional value and prints more trades than market/sector/peers, but percent spreads are consistently wider than peer medians and volatility is elevated.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "As of 2026-03-03 | TKU (XSES) | Small-cap (125.5M) | Sector: Software - Application | Peers: 8",
    "perf_insight": "TKU is down -9.80% over 1w and 30d, materially underperforming the market (1w -2.07%, 30d -0.27%), sector (1w -2.24%, 30d -4.45%), and peers (1w -1.30%, 30d -1.00%); 2w is flat (~0%) but still behind market (-0.43%), sector (-2.13%), and peers (-1.01%).",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "TKU (XSES) as-of 2026-03-03 — small-cap (market cap 125.5M) with limited displayed liquidity and a wide quoted spread.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Displayed depth is based on the top 10 price levels per side (L2). Current snapshot shows only 7 total book levels available, so visible liquidity may be incomplete versus names with full 10x10 coverage.",
    "peer_capacity_title": "Capacity vs Peers (Universe: 558, Peers: 8)",
    "peer_capacity_note": "Peer comparison metrics are unavailable in the provided data; interpretation below is based only on TKU’s spread and displayed depth.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Impact estimates reflect selling into current displayed bids; values are approximate price % moves from the model/stress tests provided.",
    "exec_check_insight": "Current spread is 4.35% (2 ticks) and the displayed top-10 book is ask-heavy (857,210 vs 298,450 on bids), indicating higher near-term sell friction and limited immediate downside capacity.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "30d behavioral personas (run-based) across trades, notional, and runs; includes an 'unclear' bucket for not-observable flow.",
    "trader_retail_threshold": "Retail-like activity is indicated by higher trade-count and run share, often with lower notional share.",
    "trader_mixed_threshold": "Mixed indicates blended behavior within runs; can tilt retail-like or institution-like depending on run patterns.",
    "trader_instit_threshold": "Institution-like activity is indicated by higher notional/volume share and sustained run patterns.",
    "peer_trader_title": "How You Compare vs Peers",
    "peer_trader_subtitle": "Peer set: 8 stocks; comparison uses the same 30d persona_v3_2b run-based framework.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Share of trades that changed the last traded price; split into positive vs negative movers.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Session mix and time-of-day clustering using the selected period; higher HHI means activity is more concentrated in a few time buckets.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Session shares are based on trading activity split across Opening auction, Continuous session, and Closing auction; Auctions total = Opening + Closing.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI={hhi}. Higher means activity is concentrated in fewer time windows (less evenly distributed liquidity through the day).",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time is the single highest-volume time bucket within the trading day for the selected period.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Lower HHI generally indicates more stable liquidity through the day; higher auction share indicates more activity concentrated in auctions.",
    "intraday_insight": "Trading is overwhelmingly in the continuous session (95.3%), with auctions at 4.7% split between open (1.2%) and close (2.8%). Peak activity is at 13:00 (13.1% of volume), and the HHI read implies liquidity is not evenly distributed (more clustered at.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short ratio near zero (1W/2W); 1M avg 0.18% (max 1.47%) with days-to-cover near zero (max 0.004) and shorts covering (-100% MoM).",
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
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Liquidity Score (PCA)",
          "body": "Composite score summarizing volume, spreads, and trading activity over the selected 30d window; higher is better."
        },
        "value": "75.3",
        "suffix": "/100",
        "bar_pct": 75,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Rank 139/558 • Better than median liquidity in the universe",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Spread (Trading Cost)",
          "body": "Average bid-ask spread over 30d; higher spread usually means higher trading cost and lower trading quality."
        },
        "value": "2.41",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "30d spread is 1.17 ticks (1 tick = minimum price step); vs peers: 2.41% vs 2.18% (+10.53% wider/worse), while ticks are lower (1.17 vs 1.35).",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "ADV (Notional)",
          "body": "Average daily traded value over the selected 30d window; higher ADV generally supports larger trades with less price disruption."
        },
        "value": "S$519K",
        "suffix": "",
        "bar_pct": 100,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "30d ADV S$519K; vs peers median S$15.0K (+3355.7%), supported by ~131 trades/day and 0.3495% turnover.",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Drivers of Price Moves",
          "body": "Breakdown of what explains daily price changes: market, sector, and company-specific. Higher company-specific share implies moves are more idiosyncratic."
        },
        "value": "35.8",
        "suffix": "company-specific",
        "bar_pct": 36,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Price moves are led by sector (37.4%) and company (35.8%), with market at 26.8%—news flow can matter as much as broader tape.",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is strong for a small cap: 30d score 75.3 (rank 139/558) and ADV S$519K, far above peer median S$15.0K (+3355.7%), giving the stock more consistent tradability than most peers.",
      "Recent trading slowed and trading cost worsened versus 30d: ADV is down 17.10% (1w), 19.47% (2w), and 50.19% (1d) with spreads wider by 3.57% (1w), 3.34% (2w), and 5.39% (1d), indicating higher near-term friction.",
      "Trading cost is elevated versus peers despite fewer ticks: 30d spread is 2.41% vs pee% (+10.53% wider/worse), even though spread in ticks is lower (1.17 vs 1.35), pointing to price-level effects rather than just quote increments."
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "perf_badge": "Context",
    "liq_tiles": [
      {
        "title": "Liquidity Score (30d)",
        "value": "75.27% (139/558)",
        "sub": "Above-average ranking for a small cap; recent periods softened vs 30d.",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (30d)",
        "value": "S$519.4K",
        "sub": "Peer median S$15.0K (+3355.71%); 1d ADV S$258.7K (-50.19% vs 30d).",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (30d)",
        "value": "2.41% (1.17 ticks)",
        "sub": "Worse than peers 2.18% (+10.53%) but better than market 2.52%; 1d spread 2.54% (+5.39% vs 30d).",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is strongest on the 30d view (S$519.4K ADV; 131 trades; 0.3495% turnover), but the latest windows show a clear slowdown (1d ADV -50.19% vs 30d) and modestly higher cost (1d spread 2.54% vs 2.41%). Versus peers, TKU is a volume leader but pays a.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.230",
        "note": "As-of 2026-03-03 mid price.",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.35% (2 ticks)",
        "note": "Wider than the day’s median bucket spread of ~2.13%, implying quoted trading cost worsened versus typical intraday conditions.",
        "color": "text-red-400"
      },
      {
        "title": "Depth",
        "value": "Bid S$68.6K vs Ask S$197.2K (top-10)",
        "note": "Based on top-10 levels per side: bids 298,450 shares vs asks 857,210 shares; bid/ask depth ratio 0.3482 shows materially less visible support on the buy side.",
        "color": "text-amber-400"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-3.19% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.00% with 29.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.00% with 11.9% fill.",
        "cls": "warn"
      }
    ],
    "peers_hhi_header": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
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
    "drivers": {
      "overall": "Current drivers (2026-01-26 to 2026-03-03): company 35.8% and sector 37.4% are the largest contributors, with market at 26.8%. This points to stock-specific and Software-Application forces outweighing broad-market direction.",
      "beta": "Market sensitivity is low (beta 0.253), so index moves typically translate weakly. Sector sensitivity is very high (beta 9.407), so when the sector moves, TKU can amplify that move; company share still remains large (35.8%).",
      "rolling_change": "Rolling change is unavailable because only one window is provided (2026-01-26 to 2026-03-03).",
      "interpretation": "Strong"
    },
    "regime": {
      "overall": "Two regimes are detected: Company-Led dominates time-in-state (88.0%), while Mixed (Sector Tilt) appears less often (12.0%). This means stock-specific information has been the main driver most days in the available sample.",
      "current": "Current regime is Company-Led with probability 1.0. It is relatively sticky (stay probability 0.868) with expected duration ~11 days; the read is based on limited history (25 days vs 252).",
      "transitions": "Company-Led tends to persist (stay 0.868; switch to Mixed 0.132). Mixed (Sector Tilt) is less stable (stay 0.409; switch to Company-Led 0.591), so sector-tilt periods have tended to revert quickly to company-led behavior.",
      "trading_implications": "In the Company-Led regime, company-specific factors explain most moves (71.7% within that regime), while in Mixed (Sector Tilt) the move is almost entirely split between market (49.4%) and sector (50.6%) with near-zero company component; this changes what."
    },
    "liquidity": {
      "overall": "30d liquidity is solid for a S$125.5M small cap (S$519.4K ADV; 131 trades), but recent activity has cooled (1w/2w/1d ADV all below 30d by 17.10%/19.47%/50.19%) and spreads are slightly worse in those windows (+3.57%/+3.34%/+5.39% vs 30d).",
      "strengths": [
        "Consistently high trading activity versus peers: 30d ADV S$519.4K vs S$15.0K (+3355.71%) and 131 trades vs 6, supporting better day-to-day liquidity depth.",
        "Tick spread remains near ~1.2 ticks across periods (30d 1.17; 1d 1.19), indicating continuous quoting even when percent spread is higher."
      ],
      "concerns": [
        "Recent slowdown is material: 1d ADV S$258.7K is -50.19% vs 30d, which can raise the risk of larger price moves when trading size increases relative to daily flow.",
        "Percent spread is consistently worse than peers despite lower tick counts (30d 2.41% vs pee%; 1d 2.54% vs 2.01%), implying higher transaction cost vs the peer set.",
        "Volatility is elevated where available (30d 69.95%, 2w 77.96%, 1w 69.69%), which can make execution outcomes less predictable even when price impact is low (30d 4.97e-08)."
      ],
      "peer_context": "TKU is a liquidity leader on notional ADV and trade count (often thousands of percent above peer medians), but a trading-cost laggard on percent spread (1.44% to 26.26% wider than peers depending on window). Net: easier to find flow, but at a higher quoted."
    },
    "market_comparison": {
      "adv": "Across all periods, TKU’s notional ADV is far above the market/sector/peer medians, but the latest snapshot shows a sharp step-down versus the 30d run-rate (S$258.7K vs S$519.4K, -50.19%). This reduces near-term capacity even though absolute liquidity remains.",
      "spread": "Percent spreads are better than the overall market and sector medians, but consistently worse than peers (higher cost vs the names you are most directly compared against). Tick spreads are lower than peers (about 1.17–1.22 vs 1.35–2.04), so the disadvantage.",
      "volatility": "Where measured, volatility is materially higher than market/sector/peers, which can widen effective costs because prices move more during the trading day. 1d volatility is unavailable, so the latest snapshot cannot confirm whether volatility has eased or.",
      "trades": "Trade count is consistently far higher than market/sector/peers, supporting better continuity of liquidity (more frequent price points). The 30d level (131 trades) is notably higher than 1d/1w (both 89), aligning with the recent ADV slowdown."
    },
    "performance": {
      "overall": "Performance is consistently weaker than market/sector/peers across 1w (-9.80%), 2w (~0%), and 30d (-9.80%), signaling a company-specific drawdown rather than a broad tech selloff.",
      "conclusion": "The pattern (sharp 1w drop, flat 2w, still down over 30d) suggests a step-down repricing and only limited recovery, pointing to reduced near-term market confidence versus both the sector and the 8-stock peer set."
    },
    "execution": {
      "overall": "Current trading conditions look expensive with asymmetric downside liquidity: spread is 4.35% and bid-side displayed depth is only ~S$68.6K across the top-10, versus ~S$197.2K on the ask side. This raises the risk that sell flow moves price meaningfully even.",
      "concern": "Stress tests suggest even routine large prints from the past year (10.2K–14.0K shares) may carry ~-2.17% modeled impact, and the largest observed same-day sell orders (S$82.5K–S$84.0K notional) would each consume ~28% of visible bids if crossed. That.",
      "peer_context": "Peer/universe benchmarks are not provided, so relative ranking cannot be quantified here. On an absolute basis, a 4.35% spread and a bid/ask depth ratio of 0.3482 indicate higher-than-normal friction for a CEO/CFO lens (cost to enter/exit is meaningfully."
    },
    "trader_composition": {
      "overall": "Over the last 30d, institution-like flow dominates observable activity: 73.4% of trades and 77.7% of notional, while retail-like is 5.5% of trades and 1.9% of notional. Runs tell a different story: only 35.4% of runs are institution-like, with 29.7%.",
      "retail_heavy": "Retail-like presence is higher by runs than by notional: 29.7% of runs vs 1.9% of notional (30d), meaning retail-like behavior shows up frequently but in small ticket sizes. Recent periods show higher retail-like trade share (1w/2w at 9.8% trades; 1d at 9.0%).",
      "institutional_gap": "Institution-like share has eased versus January: trades fell from 84.6% (2026-01) to 71.0% (2026-02) and 70.0% (2026-03), while unclear rose from 11.8% to 23.3% then 20.9%. Classification strength is mixed: 88.0% of runs are observable with 0.75 coverage, but.",
      "peer_comparison": "Against peers, TKU’s institution-like share by trades (73.4%) is similar to U77 (74.7%) and higher than several (e.g., ITS 66.7%, BN2 54.1%), while unclear (21.0%) is mid-pack (far below NXR 55.8% and 532 81.2%). TKU is an outlier in run mix: retail-like runs."
    },
    "price_moving": {
      "overall": "11.0% of trades were price-moving (486 of 4427), meaning most prints do not change the last traded price. This is consistent with a market where a minority of trades set the price and the rest transact at the prevailing level.",
      "interpretation": "Weak",
      "asymmetry": "Direction is balanced: 242 positive movers vs 244 negative movers, so price-setting trades are not skewed to one side. The trader-type split for movers is not usable from the provided output (mover retail/instit values are internally inconsistent), so."
    },
    "intraday": {
      "overall": "In 1M, activity is concentrated in the continuous session (95.3%) with auctions totaling 4.7% (open 1.2%, close 2.8%). Peak trading time is 13:00 with 13.1% of volume, indicating a midday activity cluster rather than only at the open/close.",
      "hhi_interpretation": "1M HHI is 0.21127302606918585, labeled 'Concentrated - liquidity clustered at open/close', which means trading is not evenly spread through the day and can be patchier outside the main windows. HHI has varied by period (1D 0.18509206124048044 vs 1W.",
      "best_times": "Session mix is consistently continuous-led (1D 97.3% continuous; 1M 95.3%), while auctions fluctuate (1D 2.7% vs 1M 4.7%), which can change where liquidity concentrates. The 13:00 peak (13.1% of volume) indicates a recurring mid-session intensity point rather.",
      "peer_ranking": "On the peer HHI table, TKU shows HHI 0.19348770982256028, lower than ITS (0.2506965832468597), LVR (0.3466068291973578), U77 (0.5063002584193457), NXR (0.6549668152020773), 532 (0.7835497488291402), and KUX (0.809816672410905), and also lower than BN2."
    },
    "short_selling": {
      "overall": "Short activity is low: 1M average short ratio is 0.18% with a 1M max of 1.47%, and 1W/2W averages and maxima are near zero; this signals limited bearish positioning and low risk of short-driven volatility.",
      "level": {
        "value": 0.18,
        "unit": "%",
        "interpretation": "Weak"
      },
      "correlation": "N/A (returns series and short-flow/return test outputs not provided, so Granger-causality cannot be assessed).",
      "trend": "Shorts are covering: short ratio moved from 0.91% (2026-01) to 0.19% (2026-02) to near zero (2026-03), described as -100% MoM; days-to-cover remains near zero (max 0.004), so any remaining short position is easily unwound rather than building."
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
        "ITS",
        "LVR",
        "NXR",
        "U77",
        "532",
        "KUX",
        "BN2",
        "5DD"
      ],
      "scores": [
        75.26881720430107,
        83.51254480286738,
        56.272401433691755,
        36.91756272401434,
        37.634408602150536,
        4.032258064516129,
        7.526881720430108,
        81.36200716845879,
        78.85304659498208
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
        519375.5,
        1368170.5,
        26864.0,
        3002.0,
        3195.0,
        0.0,
        0.0,
        484225.0,
        504640.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.699463112082589,
        "adv": 519375.5,
        "spread_pct": 0.024100349578449535,
        "turnover_ratio": 0.003494661220188287,
        "amihud": 4.9741695520304396e-08,
        "trades": 131.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5965613702704161,
          "median": 0.38270122929098843,
          "min": 0.0,
          "max": 7.784600182411426,
          "p5": 0.07826050969072744,
          "p95": 1.6713736228018605,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3387313.515627962,
          "median": 15458.900000000001,
          "min": 0.0,
          "max": 331579444.0,
          "p5": 0.0,
          "p95": 12232352.6,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09680028078262673,
          "median": 0.025178346621905188,
          "min": 0.00025777693161299257,
          "max": 1.3747779751332152,
          "p5": 0.0035371409391183367,
          "p95": 0.5020920502092043,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0070504328731464455,
          "median": 0.00031355747542606896,
          "min": 0.0,
          "max": 2.570694087403599,
          "p5": 0.0,
          "p95": 0.010434033199013185,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0001315011487065716,
          "median": 9.433973656119139e-08,
          "min": 0.0,
          "max": 0.03921568627450985,
          "p5": 0.0,
          "p95": 4.750825090799997e-05,
          "count": 545
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 444.24014336917566,
          "median": 7.0,
          "min": 0.0,
          "max": 12305.0,
          "p5": 0.0,
          "p95": 2264.4499999999975,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.32831414180825136,
          "median": 0.25873026071829586,
          "min": 0.0,
          "max": 0.699463112082589,
          "p5": 0.05097004915151298,
          "p95": 0.6952814680391557,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2942915.875,
          "median": 15029.5,
          "min": 0.0,
          "max": 21622720.0,
          "p5": 0.0,
          "p95": 14533627.67499999,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14998996486001764,
          "median": 0.027995505085352347,
          "min": 0.0012022817061633669,
          "max": 0.6666666666666666,
          "p5": 0.0032881320860157787,
          "p95": 0.5765151515151513,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005013226448844002,
          "median": 0.00016856732386461888,
          "min": 0.0,
          "max": 0.02336097016229602,
          "p5": 0.0,
          "p95": 0.019688803595844347,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002363349595626629,
          "median": 1.1266296725856998e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.3358369635504314e-10,
          "p95": 0.0012275213950114342,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 631.375,
          "median": 6.0,
          "min": 0.0,
          "max": 4663.0,
          "p5": 0.0,
          "p95": 3116.3499999999976,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 298762.0625,
          "median": 15029.5,
          "min": 0.0,
          "max": 1368170.5,
          "p5": 0.0,
          "p95": 1065934.8249999995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 90.75,
          "median": 6.0,
          "min": 0.0,
          "max": 280.0,
          "p5": 0.0,
          "p95": 267.4,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.2931189461361078,
          "median": 0.2601112051988531,
          "min": 0.0,
          "max": 0.6875155576727794,
          "p5": 0.05097004915151298,
          "p95": 0.5921839926978207,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1485379155233189,
          "median": 0.021804439166545897,
          "min": 0.006343575731428668,
          "max": 0.6666666666666666,
          "p5": 0.006629973202438225,
          "p95": 0.5765151515151513,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.7705183287272335,
          "median": 1.3525528169014085,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0397615708274894,
          "p95": 13.064999999999992,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002363350632593054,
          "median": 1.0244570578781913e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 6.142808000393147e-09,
          "p95": 0.0012275213950114342,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035274686361441007,
          "median": 0.00016856732386461888,
          "min": 0.0,
          "max": 0.02336097016229602,
          "p5": 0.0,
          "p95": 0.01606266192921036,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.0980392156862746,
        "market": -0.02074178284862016,
        "sector": -0.022405199483477523,
        "peers": -0.012981200897867584
      },
      {
        "horizon": "2W",
        "stock": -2.220446049250313e-16,
        "market": -0.004279227452795631,
        "sector": -0.021344078710467063,
        "peers": -0.010144939980907597
      },
      {
        "horizon": "1M",
        "stock": -0.0980392156862746,
        "market": -0.0027139557762475564,
        "sector": -0.04447214070024941,
        "peers": -0.010044921557368025
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
      "share_market": 0.26791941165039335,
      "share_sector": 0.37366288936024633,
      "share_idio": 0.35841769898936043,
      "beta_market": 0.2527455758791124,
      "beta_sector": 9.406937867275602,
      "r_squared": 0.3182555180131732,
      "driver_model": {
        "valid": true,
        "model_method": "hybrid_markov_regression_pymc",
        "estimation_window_days": 25,
        "reporting_window_days": 25,
        "available_history_days": 25,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "Company-Led",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.26791941165039335,
            "low": 0.26791941165039335,
            "high": 0.26791941165039335
          },
          "sector_share": {
            "median": 0.37366288936024633,
            "low": 0.37366288936024633,
            "high": 0.37366288936024633
          },
          "company_share": {
            "median": 0.35841769898936043,
            "low": 0.35841769898936043,
            "high": 0.35841769898936043
          }
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.2527455758791124,
            "low": 0.2527455758791124,
            "high": 0.2527455758791124
          },
          "beta_sector": {
            "median": 9.406937867275602,
            "low": 9.406937867275602,
            "high": 9.406937867275602
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          }
        },
        "rolling_windows": {
          "p1": {
            "valid": false,
            "n_obs": 0
          },
          "p2": {
            "valid": false,
            "n_obs": 0
          },
          "p3": {
            "valid": false,
            "n_obs": 0
          },
          "p4": {
            "valid": false,
            "n_obs": 0
          },
          "p5": {
            "valid": false,
            "n_obs": 0
          },
          "p6": {
            "valid": true,
            "n_obs": 25,
            "period_label": "2026-01-26 to 2026-03-03",
            "shares": {
              "share_market": 0.26791941165039335,
              "share_sector": 0.37366288936024633,
              "share_idio": 0.35841769898936043
            },
            "regression": {
              "r_squared": null
            }
          }
        },
        "regimes": [
          {
            "id": 0,
            "label": "Mixed (Sector Tilt)",
            "pct_time": 0.11999999999999998,
            "dominant_driver": "sector",
            "dominant_driver_probability": 0.0,
            "expected_duration_days": 1.4999999999999998,
            "current_probability": 0.0,
            "n_days_effective": 2.9999999999999996,
            "shares": {
              "market": {
                "median": 0.4936481416258824,
                "low": 0.4936481416258824,
                "high": 0.4936481416258824
              },
              "sector": {
                "median": 0.5063518583741173,
                "low": 0.5063518583741173,
                "high": 0.5063518583741173
              },
              "company": {
                "median": 4.301038544072743e-16,
                "low": 4.301038544072743e-16,
                "high": 4.301038544072743e-16
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.0746345407818776,
                "low": 2.0746345407818776,
                "high": 2.0746345407818776
              },
              "beta_sector": {
                "median": -2.1031451415583735,
                "low": -2.1031451415583735,
                "high": -2.1031451415583735
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 1e-06,
              "low": 1e-06,
              "high": 1e-06
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Company-Led",
            "pct_time": 0.88,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 10.999999999999996,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "shares": {
              "market": {
                "median": 0.04219068167490429,
                "low": 0.04219068167490429,
                "high": 0.04219068167490429
              },
              "sector": {
                "median": 0.2409739203463753,
                "low": 0.2409739203463753,
                "high": 0.2409739203463753
              },
              "company": {
                "median": 0.7168353979787204,
                "low": 0.7168353979787204,
                "high": 0.7168353979787204
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 0.2527455758791124,
                "low": 0.2527455758791124,
                "high": 0.2527455758791124
              },
              "beta_sector": {
                "median": 9.406937867275602,
                "low": 9.406937867275602,
                "high": 9.406937867275602
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02934826714852991,
              "low": 0.02934826714852991,
              "high": 0.02934826714852991
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.40889046446633,
              0.5911095355336702
            ],
            [
              0.1322857078331237,
              0.8677142921668765
            ]
          ],
          "low": [
            [
              0.1700771081504696,
              0.3440238415965768
            ],
            [
              0.050851834303442436,
              0.7717086631955182
            ]
          ],
          "high": [
            [
              0.6559761584034232,
              0.8299228918495303
            ],
            [
              0.22829133680448185,
              0.9491481656965576
            ]
          ],
          "counts": [
            [
              1.0,
              2.0
            ],
            [
              2.0,
              19.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 25,
          "reporting_window_days": 25,
          "regime_inference": "hybrid_markov_bayesian_regression",
          "uncertainty_engine": "pymc_weighted_regime_regressions",
          "lead_horizon_days": 1,
          "distribution": "student_t",
          "history_limited": true
        }
      },
      "lead_lag": {
        "lags": [
          -5,
          -4,
          -3,
          -2,
          -1,
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "corr_market": [
          -0.11575459689109939,
          0.22905544560625488,
          -0.0716558827892395,
          -0.07733687852677901,
          -0.09329812380426186,
          0.19803709880318945,
          -0.21123075397870625,
          0.27784897320309043,
          -0.05786516706284004,
          -0.26379406937615885,
          0.5049871717350473
        ],
        "corr_sector": [
          -0.4161655961991228,
          0.13494354577108839,
          0.059193179011255065,
          0.1035582281719931,
          -0.2462207316136192,
          0.5472348764374213,
          0.22626159011128866,
          0.06378245964682101,
          -0.16488404653780026,
          0.10495176436804883,
          0.19307509140403023
        ],
        "best": {
          "market": 5,
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
          "valid": true,
          "period_label": "2026-01-26 to 2026-03-03",
          "shares": {
            "share_market": 0.26791941165039335,
            "share_sector": 0.37366288936024633,
            "share_company": 0.35841769898936043
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "rolling": {
        "ordered": [
          "2026-01-26 to 2026-03-03"
        ],
        "market": [
          26.8
        ],
        "sector": [
          37.4
        ],
        "idio": [
          35.8
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "hybrid_markov_regression_pymc",
        "n_regimes": 2,
        "current_regime_label": "Company-Led",
        "current_regime_probability": 1.0,
        "labels": [
          "Mixed (Sector Tilt)",
          "Company-Led"
        ],
        "pct_time": [
          0.11999999999999998,
          0.88
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Mixed (Sector Tilt)",
            "pct_time": 0.11999999999999998,
            "dominant_driver": "sector",
            "dominant_driver_probability": 0.0,
            "expected_duration_days": 1.4999999999999998,
            "current_probability": 0.0,
            "n_days_effective": 2.9999999999999996,
            "shares": {
              "market": {
                "median": 0.4936481416258824,
                "low": 0.4936481416258824,
                "high": 0.4936481416258824
              },
              "sector": {
                "median": 0.5063518583741173,
                "low": 0.5063518583741173,
                "high": 0.5063518583741173
              },
              "company": {
                "median": 4.301038544072743e-16,
                "low": 4.301038544072743e-16,
                "high": 4.301038544072743e-16
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.0746345407818776,
                "low": 2.0746345407818776,
                "high": 2.0746345407818776
              },
              "beta_sector": {
                "median": -2.1031451415583735,
                "low": -2.1031451415583735,
                "high": -2.1031451415583735
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 1e-06,
              "low": 1e-06,
              "high": 1e-06
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Company-Led",
            "pct_time": 0.88,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 10.999999999999996,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "shares": {
              "market": {
                "median": 0.04219068167490429,
                "low": 0.04219068167490429,
                "high": 0.04219068167490429
              },
              "sector": {
                "median": 0.2409739203463753,
                "low": 0.2409739203463753,
                "high": 0.2409739203463753
              },
              "company": {
                "median": 0.7168353979787204,
                "low": 0.7168353979787204,
                "high": 0.7168353979787204
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 0.2527455758791124,
                "low": 0.2527455758791124,
                "high": 0.2527455758791124
              },
              "beta_sector": {
                "median": 9.406937867275602,
                "low": 9.406937867275602,
                "high": 9.406937867275602
              },
              "beta_market_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              },
              "beta_sector_lag": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "volatility": {
              "median": 0.02934826714852991,
              "low": 0.02934826714852991,
              "high": 0.02934826714852991
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          }
        ],
        "transitions": [
          [
            0.40889046446633,
            0.5911095355336702
          ],
          [
            0.1322857078331237,
            0.8677142921668765
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 238800.0,
          "value": 53730.0
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 678500.0,
          "value": 149270.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 168000.0,
          "value": 36120.0
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 77000.0,
          "value": 16170.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 40000.0,
          "value": 8200.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 148100.0,
          "value": 29620.0
        },
        {
          "level": 7,
          "price": 0.178,
          "quantity": 30000.0,
          "value": 5340.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 149900.0,
          "value": 35226.5
        },
        {
          "level": 2,
          "price": 0.24,
          "quantity": 219500.0,
          "value": 52680.0
        },
        {
          "level": 3,
          "price": 0.245,
          "quantity": 171800.0,
          "value": 42091.0
        },
        {
          "level": 4,
          "price": 0.25,
          "quantity": 170000.0,
          "value": 42500.0
        },
        {
          "level": 5,
          "price": 0.255,
          "quantity": 185000.0,
          "value": 47175.0
        },
        {
          "level": 6,
          "price": 0.26,
          "quantity": 638800.0,
          "value": 166088.0
        },
        {
          "level": 7,
          "price": 0.265,
          "quantity": 693200.0,
          "value": 183698.0
        },
        {
          "level": 8,
          "price": 0.27,
          "quantity": 387200.0,
          "value": 104544.0
        },
        {
          "level": 9,
          "price": 0.275,
          "quantity": 290500.0,
          "value": 79887.5
        },
        {
          "level": 10,
          "price": 0.28,
          "quantity": 369000.0,
          "value": 103320.00000000001
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-03 08:59:57.899400",
        "mid_price": 0.22999999999999998,
        "spread_pct": 0.04347826086956514,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 298450.0,
        "ask_depth_notional_top10": 857210.0,
        "bid_ask_depth_ratio": 0.3482
      },
      "historical_trade_scenarios": {
        "valid": true,
        "lookback_calendar_days": 365,
        "trade_days_used": 26,
        "n_trades_used": 8458,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-02",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10200.0,
            "impact_pct": -0.021739,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.42,
            "pct_of_adv": 2.05
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14000.0,
            "impact_pct": -0.021739,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.69,
            "pct_of_adv": 2.81
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 114283.98,
            "impact_pct": -0.033379,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 38.29,
            "pct_of_adv": 22.93
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-03",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8118619586907360256",
            "timestamp": "2026-03-02 22:59:01.110700000",
            "posted_price": 0.28,
            "size_shares": 300000.0,
            "notional": 84000.0,
            "impact_pct": -0.029686,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 28.15,
            "price_vs_mid_pct": 21.739,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8118619586907361280",
            "timestamp": "2026-03-02 22:59:01.110700000",
            "posted_price": 0.275,
            "size_shares": 300000.0,
            "notional": 82500.0,
            "impact_pct": -0.029431,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 27.64,
            "price_vs_mid_pct": 19.565,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-02 22:59:01.110700000",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.024057,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 20.1,
            "price_vs_mid_pct": 30.435,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-03",
        "bucket_minutes": 30,
        "tick_size": 0.005,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 333485.5,
            "ask_depth_notional": 1168874.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 366186.0,
            "ask_depth_notional": 1065090.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 380033.5,
            "ask_depth_notional": 936336.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 381058.5,
            "ask_depth_notional": 936252.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 374758.5,
            "ask_depth_notional": 938552.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 365358.5,
            "ask_depth_notional": 923816.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 326184.0,
            "ask_depth_notional": 939176.5,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 294890.0,
            "ask_depth_notional": 857884.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 294890.0,
            "ask_depth_notional": 895171.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 224599.0,
            "ask_depth_notional": 776097.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 227821.5,
            "ask_depth_notional": 779424.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 307741.5,
            "ask_depth_notional": 768150.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.04347826086956514,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 313420.0,
            "ask_depth_notional": 878256.5,
            "mid_price": 0.22999999999999998
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.04347826086956514,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 298450.0,
            "ask_depth_notional": 857210.0,
            "mid_price": 0.22999999999999998
          }
        ],
        "summary": {
          "median_spread_pct": 0.021279003961516656,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 319802.0,
          "median_ask_depth_notional": 909494.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:00",
          "deepest_bid_bucket": "10:30",
          "thinnest_bid_bucket": "14:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 10.0,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 70.8
        },
        {
          "ticker": "BN2",
          "pct": 198.8
        },
        {
          "ticker": "5DD",
          "pct": 207.8
        },
        {
          "ticker": "LVR",
          "pct": 3868.2
        },
        {
          "ticker": "U77",
          "pct": 36094.6
        },
        {
          "ticker": "NXR",
          "pct": 53995.7
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 89,
          "n_runs": 24,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-03",
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
            "retail_pct": 0.0898876404494382,
            "mixed_pct": 0.0,
            "instit_pct": 0.7191011235955056,
            "ambiguous_pct": 0.15730337078651685,
            "unobservable_pct": 0.033707865168539325,
            "unclear_pct": 0.19101123595505617,
            "retail_qty_pct": 0.0017780938833570413,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8147226173541963,
            "ambiguous_qty_pct": 0.12304409672830725,
            "unobservable_qty_pct": 0.060455192034139404,
            "unclear_qty_pct": 0.18349928876244664,
            "retail_notional_pct": 0.0018141257118388428,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8155479558110327,
            "ambiguous_notional_pct": 0.12191345339570306,
            "unobservable_notional_pct": 0.06072446508142538,
            "unclear_notional_pct": 0.18263791847712843
          },
          "run_composition": {
            "retail_pct": 0.2916666666666667,
            "mixed_pct": 0.0,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.08333333333333333,
            "unclear_pct": 0.3333333333333333,
            "retail_notional_pct": 0.0018480400843594272,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8307943067123387,
            "unclear_notional_pct": 0.16735765320330193
          },
          "counts": {
            "trades": {
              "retail": 8,
              "mixed": 0,
              "institutional": 64,
              "ambiguous": 14,
              "unobservable": 3,
              "unclear": 17
            },
            "runs": {
              "retail": 7,
              "mixed": 0,
              "institutional": 9,
              "ambiguous": 6,
              "unobservable": 2,
              "unclear": 8
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6666666666666666,
            "na": 0.3333333333333333
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 16,
            "na": 8
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.8089887640449438,
            "na": 0.19101123595505617
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 72,
            "na": 17
          },
          "observability": {
            "avg_feature_coverage": 0.7562500000000001,
            "observable_run_pct": 0.9166666666666666,
            "ambiguous_run_pct": 0.25,
            "unobservable_run_pct": 0.08333333333333333
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.375,
          "dominance_gap": 0.08333333333333331,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 59,
              "SINGLE_FILL": 29,
              "UNOBSERVABLE": 1
            },
            "d2_information": {
              "UNOBSERVABLE": 89
            },
            "d3_urgency": {
              "IMMEDIATE": 24
            },
            "participant_confidence": {
              "LOW": 16,
              "NA": 8
            }
          },
          "trade_size": {
            "avg": 2938.8595505617977,
            "median": 1920.0
          },
          "run_size": {
            "avg": 10698.270833333334,
            "median": 3476.5,
            "avg_length": 1.9583333333333333
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-03T08:48:12.468100",
              "price": 0.23,
              "size": 8900.0,
              "notional": 2047.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-03T07:32:10.448200",
              "price": 0.23,
              "size": 5300.0,
              "notional": 1219.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-03T07:32:10.418100",
              "price": 0.23,
              "size": 25000.0,
              "notional": 5750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-03T07:07:30.089300",
              "price": 0.23,
              "size": 6000.0,
              "notional": 1380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.0898876404494382,
              "mixed_pct": 0.0,
              "instit_pct": 0.7191011235955056,
              "ambiguous_pct": 0.15730337078651685,
              "unobservable_pct": 0.033707865168539325,
              "unclear_pct": 0.19101123595505617,
              "retail_qty_pct": 0.0017780938833570413,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8147226173541963,
              "ambiguous_qty_pct": 0.12304409672830725,
              "unobservable_qty_pct": 0.060455192034139404,
              "unclear_qty_pct": 0.18349928876244664,
              "retail_notional_pct": 0.0018141257118388428,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8155479558110327,
              "ambiguous_notional_pct": 0.12191345339570306,
              "unobservable_notional_pct": 0.06072446508142538,
              "unclear_notional_pct": 0.18263791847712843,
              "run_retail_pct": 0.2916666666666667,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.375,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2938.8595505617977,
              "avg_run_notional": 10698.270833333334,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.7562500000000001,
              "observable_run_pct": 0.9166666666666666,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
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
              "avg_trade_size": 880.0,
              "avg_run_notional": 880.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.7000000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.04262295081967213,
              "mixed_pct": 0.0,
              "instit_pct": 0.6262295081967213,
              "ambiguous_pct": 0.16393442622950818,
              "unobservable_pct": 0.16721311475409836,
              "unclear_pct": 0.33114754098360655,
              "retail_qty_pct": 0.01758200795228628,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7339090457256461,
              "ambiguous_qty_pct": 0.12860337972167,
              "unobservable_qty_pct": 0.11990556660039761,
              "unclear_qty_pct": 0.2485089463220676,
              "retail_notional_pct": 0.017634735211511494,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7341913019693352,
              "ambiguous_notional_pct": 0.12868095732049964,
              "unobservable_notional_pct": 0.1194930054986536,
              "unclear_notional_pct": 0.24817396281915324,
              "run_retail_pct": 0.18072289156626506,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.37349397590361444,
              "run_unclear_pct": 0.4457831325301205,
              "avg_trade_size": 2972.7098360655737,
              "avg_run_notional": 20946.156626506025,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.26506024096385544,
              "low_confidence_pct": 0.2891566265060241,
              "na_confidence_pct": 0.4457831325301205,
              "avg_feature_coverage": 0.741566265060241,
              "observable_run_pct": 0.8192771084337349,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08018867924528301,
              "mixed_pct": 0.0,
              "instit_pct": 0.6556603773584906,
              "ambiguous_pct": 0.17452830188679244,
              "unobservable_pct": 0.08962264150943396,
              "unclear_pct": 0.2641509433962264,
              "retail_qty_pct": 0.026861451460885956,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6870876531573987,
              "ambiguous_qty_pct": 0.12723845428840716,
              "unobservable_qty_pct": 0.1588124410933082,
              "unclear_qty_pct": 0.28605089538171535,
              "retail_notional_pct": 0.02679042834028783,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6860111190861425,
              "ambiguous_notional_pct": 0.12723202880743542,
              "unobservable_notional_pct": 0.15996642376613424,
              "unclear_notional_pct": 0.2871984525735697,
              "run_retail_pct": 0.2727272727272727,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.32727272727272727,
              "run_unclear_pct": 0.39999999999999997,
              "avg_trade_size": 1938.7028301886792,
              "avg_run_notional": 7403.381818181818,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.32727272727272727,
              "low_confidence_pct": 0.2727272727272727,
              "na_confidence_pct": 0.4,
              "avg_feature_coverage": 0.7445454545454548,
              "observable_run_pct": 0.8545454545454545,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06772908366533864,
              "mixed_pct": 0.0,
              "instit_pct": 0.5776892430278885,
              "ambiguous_pct": 0.27091633466135456,
              "unobservable_pct": 0.08366533864541832,
              "unclear_pct": 0.35458167330677287,
              "retail_qty_pct": 0.02821697883726587,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6793967404524447,
              "ambiguous_qty_pct": 0.1537338846995865,
              "unobservable_qty_pct": 0.138652396010703,
              "unclear_qty_pct": 0.2923862807102895,
              "retail_notional_pct": 0.02813286558787881,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6798483337428515,
              "ambiguous_notional_pct": 0.15370145919237513,
              "unobservable_notional_pct": 0.13831734147689456,
              "unclear_notional_pct": 0.29201880066926966,
              "run_retail_pct": 0.3157894736842105,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2894736842105263,
              "run_unclear_pct": 0.39473684210526316,
              "avg_trade_size": 2894.276892430279,
              "avg_run_notional": 18258.657894736843,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed (Unclear Flow)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2894736842105263,
              "low_confidence_pct": 0.3157894736842105,
              "na_confidence_pct": 0.39473684210526316,
              "avg_feature_coverage": 0.7592105263157896,
              "observable_run_pct": 0.9473684210526316,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1111111111111111,
              "mixed_pct": 0.0,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.5555555555555556,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5555555555555556,
              "retail_qty_pct": 0.008912655971479501,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5543672014260249,
              "ambiguous_qty_pct": 0.43672014260249553,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.43672014260249553,
              "retail_notional_pct": 0.009067139001349528,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5508603238866396,
              "ambiguous_notional_pct": 0.4400725371120108,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4400725371120108,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.6,
              "avg_trade_size": 1317.3333333333333,
              "avg_run_notional": 2371.2,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4,
              "na_confidence_pct": 0.6,
              "avg_feature_coverage": 0.7300000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.009900990099009901,
              "unobservable_qty_pct": 0.9900990099009901,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.00989853996535511,
              "unobservable_notional_pct": 0.9901014600346449,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 1347.0,
              "avg_run_notional": 2020.5,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed (Unclear Flow)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.5750000000000001,
              "observable_run_pct": 0.5,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 500,
          "n_runs": 114,
          "n_trade_days": 5,
          "first_trade_date": "2026-02-25",
          "last_trade_date": "2026-03-03",
          "period_days": 5,
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
            "retail_pct": 0.098,
            "mixed_pct": 0.0,
            "instit_pct": 0.668,
            "ambiguous_pct": 0.164,
            "unobservable_pct": 0.07,
            "unclear_pct": 0.234,
            "retail_qty_pct": 0.025889105505975805,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.824903430488115,
            "ambiguous_qty_pct": 0.11215383311335263,
            "unobservable_qty_pct": 0.03705363089255658,
            "unclear_qty_pct": 0.1492074640059092,
            "retail_notional_pct": 0.026157466422590283,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8251068363794402,
            "ambiguous_notional_pct": 0.11216725995088325,
            "unobservable_notional_pct": 0.03656843724708628,
            "unclear_notional_pct": 0.14873569719796953
          },
          "run_composition": {
            "retail_pct": 0.3333333333333333,
            "mixed_pct": 0.0,
            "instit_pct": 0.3508771929824561,
            "ambiguous_pct": 0.21929824561403508,
            "unobservable_pct": 0.09649122807017543,
            "unclear_pct": 0.3157894736842105,
            "retail_notional_pct": 0.026703331802846706,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8423255245243847,
            "unclear_notional_pct": 0.13097114367276866
          },
          "counts": {
            "trades": {
              "retail": 49,
              "mixed": 0,
              "institutional": 334,
              "ambiguous": 82,
              "unobservable": 35,
              "unclear": 117
            },
            "runs": {
              "retail": 38,
              "mixed": 0,
              "institutional": 40,
              "ambiguous": 25,
              "unobservable": 11,
              "unclear": 36
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6842105263157895,
            "na": 0.3157894736842105
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 78,
            "na": 36
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.766,
            "na": 0.234
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 383,
            "na": 117
          },
          "observability": {
            "avg_feature_coverage": 0.7526315789473684,
            "observable_run_pct": 0.9035087719298246,
            "ambiguous_run_pct": 0.21929824561403508,
            "unobservable_run_pct": 0.09649122807017543
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.3508771929824561,
          "dominance_gap": 0.017543859649122806,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 291,
              "SINGLE_FILL": 181,
              "UNOBSERVABLE": 20,
              "WALK_BOOK": 8
            },
            "d2_information": {
              "UNOBSERVABLE": 500
            },
            "d3_urgency": {
              "IMMEDIATE": 108,
              "ADAPTIVE": 6
            },
            "participant_confidence": {
              "LOW": 78,
              "NA": 36
            }
          },
          "trade_size": {
            "avg": 4091.069,
            "median": 2300.0
          },
          "run_size": {
            "avg": 17576.491228070176,
            "median": 5436.0,
            "avg_length": 2.289473684210526
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-03T08:48:12.468100",
              "price": 0.23,
              "size": 8900.0,
              "notional": 2047.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-03T07:32:10.448200",
              "price": 0.23,
              "size": 5300.0,
              "notional": 1219.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-03T07:32:10.418100",
              "price": 0.23,
              "size": 25000.0,
              "notional": 5750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-03T07:07:30.089300",
              "price": 0.23,
              "size": 6000.0,
              "notional": 1380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.098,
              "mixed_pct": 0.0,
              "instit_pct": 0.668,
              "ambiguous_pct": 0.164,
              "unobservable_pct": 0.07,
              "unclear_pct": 0.234,
              "retail_qty_pct": 0.025889105505975805,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.824903430488115,
              "ambiguous_qty_pct": 0.11215383311335263,
              "unobservable_qty_pct": 0.03705363089255658,
              "unclear_qty_pct": 0.1492074640059092,
              "retail_notional_pct": 0.026157466422590283,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8251068363794402,
              "ambiguous_notional_pct": 0.11216725995088325,
              "unobservable_notional_pct": 0.03656843724708628,
              "unclear_notional_pct": 0.14873569719796953,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3508771929824561,
              "run_unclear_pct": 0.3157894736842105,
              "avg_trade_size": 4091.069,
              "avg_run_notional": 17576.491228070176,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6842105263157895,
              "na_confidence_pct": 0.3157894736842105,
              "avg_feature_coverage": 0.7526315789473684,
              "observable_run_pct": 0.9035087719298246,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.04,
              "mixed_pct": 0.0,
              "instit_pct": 0.76,
              "ambiguous_pct": 0.04,
              "unobservable_pct": 0.16,
              "unclear_pct": 0.2,
              "retail_qty_pct": 0.006776789495976281,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8204150783566285,
              "ambiguous_qty_pct": 0.028801355357899194,
              "unobservable_qty_pct": 0.14400677678949597,
              "unclear_qty_pct": 0.17280813214739515,
              "retail_notional_pct": 0.006810249221034236,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8162024878894228,
              "ambiguous_notional_pct": 0.029406257651628267,
              "unobservable_notional_pct": 0.14758100523791462,
              "unclear_notional_pct": 0.1769872628895429,
              "run_retail_pct": 0.14285714285714285,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5714285714285714,
              "run_unclear_pct": 0.2857142857142857,
              "avg_trade_size": 4165.78,
              "avg_run_notional": 14177.107142857143,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7142857142857143,
              "na_confidence_pct": 0.2857142857142857,
              "avg_feature_coverage": 0.725,
              "observable_run_pct": 0.8571428571428572,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.6666666666666666,
              "ambiguous_pct": 0.1111111111111111,
              "unobservable_pct": 0.2222222222222222,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.798804780876494,
              "ambiguous_qty_pct": 0.00199203187250996,
              "unobservable_qty_pct": 0.199203187250996,
              "unclear_qty_pct": 0.20119521912350596,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7986848004782544,
              "ambiguous_notional_pct": 0.001992726548099437,
              "unobservable_notional_pct": 0.1993224729736462,
              "unclear_notional_pct": 0.20131519952174562,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6666666666666666,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2230.3333333333335,
              "avg_run_notional": 3345.5,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.6583333333333334,
              "observable_run_pct": 0.8333333333333334,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.05848903330625508,
              "mixed_pct": 0.0,
              "instit_pct": 0.6709991876523151,
              "ambiguous_pct": 0.1462225832656377,
              "unobservable_pct": 0.12428919577579203,
              "unclear_pct": 0.27051177904142976,
              "retail_qty_pct": 0.014608030592734226,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7959082217973231,
              "ambiguous_qty_pct": 0.07659655831739962,
              "unobservable_qty_pct": 0.11288718929254302,
              "unclear_qty_pct": 0.18948374760994263,
              "retail_notional_pct": 0.014556277579933422,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7971846694278857,
              "ambiguous_notional_pct": 0.07620388022244587,
              "unobservable_notional_pct": 0.11205517276973498,
              "unclear_notional_pct": 0.18825905299218085,
              "run_retail_pct": 0.2423076923076923,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.38461538461538464,
              "run_unclear_pct": 0.3730769230769231,
              "avg_trade_size": 4029.348497156783,
              "avg_run_notional": 18656.973076923077,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.25384615384615383,
              "low_confidence_pct": 0.3730769230769231,
              "na_confidence_pct": 0.3730769230769231,
              "avg_feature_coverage": 0.7484615384615384,
              "observable_run_pct": 0.8576923076923078,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0643511613040699,
              "mixed_pct": 0.0,
              "instit_pct": 0.6720647773279352,
              "ambiguous_pct": 0.1546984871084594,
              "unobservable_pct": 0.10888557425953548,
              "unclear_pct": 0.2635840613679949,
              "retail_qty_pct": 0.021538702202755156,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7690773457435888,
              "ambiguous_qty_pct": 0.09453857510192509,
              "unobservable_qty_pct": 0.11484537695173101,
              "unclear_qty_pct": 0.20938395205365612,
              "retail_notional_pct": 0.021615617711051003,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7697821621295915,
              "ambiguous_notional_pct": 0.09465460052883257,
              "unobservable_notional_pct": 0.1139476196305249,
              "unclear_notional_pct": 0.20860222015935748,
              "run_retail_pct": 0.2774018944519621,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.36400541271989173,
              "run_unclear_pct": 0.35859269282814615,
              "avg_trade_size": 4600.7528233539315,
              "avg_run_notional": 28337.859269282813,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.02029769959404601,
              "medium_confidence_pct": 0.2625169147496617,
              "low_confidence_pct": 0.35859269282814615,
              "na_confidence_pct": 0.35859269282814615,
              "avg_feature_coverage": 0.7534506089309878,
              "observable_run_pct": 0.8673883626522327,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06936416184971098,
              "mixed_pct": 0.0,
              "instit_pct": 0.5664739884393064,
              "ambiguous_pct": 0.23864574731626756,
              "unobservable_pct": 0.1255161023947151,
              "unclear_pct": 0.36416184971098264,
              "retail_qty_pct": 0.026164254592428788,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7402404046154183,
              "ambiguous_qty_pct": 0.12099051956298032,
              "unobservable_qty_pct": 0.11260482122917259,
              "unclear_qty_pct": 0.2335953407921529,
              "retail_notional_pct": 0.026102178911360758,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7404992542059995,
              "ambiguous_notional_pct": 0.12053923032885824,
              "unobservable_notional_pct": 0.1128593365537815,
              "unclear_notional_pct": 0.23339856688263974,
              "run_retail_pct": 0.2875816993464052,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.33986928104575165,
              "run_unclear_pct": 0.37254901960784315,
              "avg_trade_size": 3378.151940545004,
              "avg_run_notional": 25523.238562091505,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0196078431372549,
              "medium_confidence_pct": 0.11764705882352941,
              "low_confidence_pct": 0.49019607843137253,
              "na_confidence_pct": 0.37254901960784315,
              "avg_feature_coverage": 0.7709150326797387,
              "observable_run_pct": 0.9084967320261438,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06896551724137931,
              "mixed_pct": 0.0,
              "instit_pct": 0.4827586206896552,
              "ambiguous_pct": 0.3448275862068966,
              "unobservable_pct": 0.10344827586206896,
              "unclear_pct": 0.4482758620689655,
              "retail_qty_pct": 0.020161290322580645,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7074780058651027,
              "ambiguous_qty_pct": 0.17631964809384165,
              "unobservable_qty_pct": 0.09604105571847507,
              "unclear_qty_pct": 0.2723607038123167,
              "retail_notional_pct": 0.02015304383393551,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7075976549185357,
              "ambiguous_notional_pct": 0.17624752880223601,
              "unobservable_notional_pct": 0.09600177244529279,
              "unclear_notional_pct": 0.2722493012475288,
              "run_retail_pct": 0.125,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.4375,
              "run_unclear_pct": 0.4375,
              "avg_trade_size": 2023.3103448275863,
              "avg_run_notional": 3651.125,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5625,
              "na_confidence_pct": 0.4375,
              "avg_feature_coverage": 0.7375,
              "observable_run_pct": 0.9375,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 1022,
          "n_runs": 256,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-16",
          "last_trade_date": "2026-03-03",
          "period_days": 10,
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
            "retail_pct": 0.09784735812133072,
            "mixed_pct": 0.0,
            "instit_pct": 0.6859099804305284,
            "ambiguous_pct": 0.12915851272015655,
            "unobservable_pct": 0.08708414872798434,
            "unclear_pct": 0.2162426614481409,
            "retail_qty_pct": 0.01924381852596993,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8388947750622017,
            "ambiguous_qty_pct": 0.07957643361388556,
            "unobservable_qty_pct": 0.06228497279794288,
            "unclear_qty_pct": 0.14186140641182843,
            "retail_notional_pct": 0.019395300884788014,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8387354659706792,
            "ambiguous_notional_pct": 0.07930029840031805,
            "unobservable_notional_pct": 0.06256893474421477,
            "unclear_notional_pct": 0.1418692331445328
          },
          "run_composition": {
            "retail_pct": 0.32421875,
            "mixed_pct": 0.0,
            "instit_pct": 0.34375,
            "ambiguous_pct": 0.1953125,
            "unobservable_pct": 0.13671875,
            "unclear_pct": 0.33203125,
            "retail_notional_pct": 0.019942192004300384,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8623853686292761,
            "unclear_notional_pct": 0.11767243936642358
          },
          "counts": {
            "trades": {
              "retail": 100,
              "mixed": 0,
              "institutional": 701,
              "ambiguous": 132,
              "unobservable": 89,
              "unclear": 221
            },
            "runs": {
              "retail": 83,
              "mixed": 0,
              "institutional": 88,
              "ambiguous": 50,
              "unobservable": 35,
              "unclear": 85
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.1015625,
            "low": 0.56640625,
            "na": 0.33203125
          },
          "confidence_counts": {
            "high": 0,
            "medium": 26,
            "low": 145,
            "na": 85
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.11545988258317025,
            "low": 0.6682974559686888,
            "na": 0.2162426614481409
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 118,
            "low": 683,
            "na": 221
          },
          "observability": {
            "avg_feature_coverage": 0.7398437499999999,
            "observable_run_pct": 0.86328125,
            "ambiguous_run_pct": 0.1953125,
            "unobservable_run_pct": 0.13671875
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.34375,
          "dominance_gap": 0.01953125,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 576,
              "SINGLE_FILL": 394,
              "UNOBSERVABLE": 44,
              "WALK_BOOK": 8
            },
            "d2_information": {
              "UNOBSERVABLE": 1022
            },
            "d3_urgency": {
              "IMMEDIATE": 246,
              "ADAPTIVE": 10
            },
            "participant_confidence": {
              "LOW": 145,
              "NA": 85,
              "MEDIUM": 26
            }
          },
          "trade_size": {
            "avg": 4078.171232876712,
            "median": 2301.5
          },
          "run_size": {
            "avg": 15834.341796875,
            "median": 4111.0,
            "avg_length": 2.17578125
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-03T08:48:12.468100",
              "price": 0.23,
              "size": 8900.0,
              "notional": 2047.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-03T07:32:10.448200",
              "price": 0.23,
              "size": 5300.0,
              "notional": 1219.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-03T07:32:10.418100",
              "price": 0.23,
              "size": 25000.0,
              "notional": 5750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-03T07:07:30.089300",
              "price": 0.23,
              "size": 6000.0,
              "notional": 1380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.09784735812133072,
              "mixed_pct": 0.0,
              "instit_pct": 0.6859099804305284,
              "ambiguous_pct": 0.12915851272015655,
              "unobservable_pct": 0.08708414872798434,
              "unclear_pct": 0.2162426614481409,
              "retail_qty_pct": 0.01924381852596993,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8388947750622017,
              "ambiguous_qty_pct": 0.07957643361388556,
              "unobservable_qty_pct": 0.06228497279794288,
              "unclear_qty_pct": 0.14186140641182843,
              "retail_notional_pct": 0.019395300884788014,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8387354659706792,
              "ambiguous_notional_pct": 0.07930029840031805,
              "unobservable_notional_pct": 0.06256893474421477,
              "unclear_notional_pct": 0.1418692331445328,
              "run_retail_pct": 0.32421875,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.34375,
              "run_unclear_pct": 0.33203125,
              "avg_trade_size": 4078.171232876712,
              "avg_run_notional": 15834.341796875,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.1015625,
              "low_confidence_pct": 0.56640625,
              "na_confidence_pct": 0.33203125,
              "avg_feature_coverage": 0.7398437499999999,
              "observable_run_pct": 0.86328125,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.072,
              "mixed_pct": 0.0,
              "instit_pct": 0.696,
              "ambiguous_pct": 0.136,
              "unobservable_pct": 0.096,
              "unclear_pct": 0.232,
              "retail_qty_pct": 0.011492087415222306,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7901281085154483,
              "ambiguous_qty_pct": 0.10908063300678221,
              "unobservable_qty_pct": 0.0892991710625471,
              "unclear_qty_pct": 0.1983798040693293,
              "retail_notional_pct": 0.011522422693413597,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7872366363437642,
              "ambiguous_notional_pct": 0.11047926720586504,
              "unobservable_notional_pct": 0.09076167375695718,
              "unclear_notional_pct": 0.20124094096282222,
              "run_retail_pct": 0.18604651162790697,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.46511627906976744,
              "run_unclear_pct": 0.3488372093023256,
              "avg_trade_size": 3806.144,
              "avg_run_notional": 10793.453488372093,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6511627906976745,
              "na_confidence_pct": 0.3488372093023256,
              "avg_feature_coverage": 0.7325581395348838,
              "observable_run_pct": 0.8837209302325582,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06310920204857096,
              "mixed_pct": 0.0,
              "instit_pct": 0.6722286469519246,
              "ambiguous_pct": 0.1597554931438956,
              "unobservable_pct": 0.10490665785560879,
              "unclear_pct": 0.2646621509995044,
              "retail_qty_pct": 0.022408975337959738,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7744585511575803,
              "ambiguous_qty_pct": 0.09613077006989956,
              "unobservable_qty_pct": 0.10700170343456042,
              "unclear_qty_pct": 0.20313247350445998,
              "retail_notional_pct": 0.022409447005862674,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7747806290609968,
              "ambiguous_notional_pct": 0.09606575574678869,
              "unobservable_notional_pct": 0.1067441681863519,
              "unclear_notional_pct": 0.2028099239331406,
              "run_retail_pct": 0.27800829875518673,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.35684647302904565,
              "run_unclear_pct": 0.36514522821576767,
              "avg_trade_size": 4111.969023624649,
              "avg_run_notional": 25043.57572614108,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.015560165975103735,
              "medium_confidence_pct": 0.24688796680497926,
              "low_confidence_pct": 0.3724066390041494,
              "na_confidence_pct": 0.3651452282157676,
              "avg_feature_coverage": 0.750414937759336,
              "observable_run_pct": 0.8765560165975104,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.05552776388194097,
              "mixed_pct": 0.0,
              "instit_pct": 0.6613306653326664,
              "ambiguous_pct": 0.14007003501750875,
              "unobservable_pct": 0.14307153576788395,
              "unclear_pct": 0.2831415707853927,
              "retail_qty_pct": 0.01420421195971169,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7648674664851032,
              "ambiguous_qty_pct": 0.0857887446293992,
              "unobservable_qty_pct": 0.13513957692578593,
              "unclear_qty_pct": 0.22092832155518513,
              "retail_notional_pct": 0.01417668741360262,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7690414751115151,
              "ambiguous_notional_pct": 0.08458944427354499,
              "unobservable_notional_pct": 0.13219239320133727,
              "unclear_notional_pct": 0.21678183747488228,
              "run_retail_pct": 0.22037914691943128,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3862559241706161,
              "run_unclear_pct": 0.39336492890995256,
              "avg_trade_size": 3893.1235617808907,
              "avg_run_notional": 17885.744075829385,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.014218009478672985,
              "medium_confidence_pct": 0.22985781990521326,
              "low_confidence_pct": 0.36255924170616116,
              "na_confidence_pct": 0.3933649289099526,
              "avg_feature_coverage": 0.7451421800947866,
              "observable_run_pct": 0.8341232227488151,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.060299756012547924,
              "mixed_pct": 0.0,
              "instit_pct": 0.5235273614499826,
              "ambiguous_pct": 0.286859532938306,
              "unobservable_pct": 0.12931334959916346,
              "unclear_pct": 0.4161728825374695,
              "retail_qty_pct": 0.025127901340944586,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7462114276482309,
              "ambiguous_qty_pct": 0.10970973127255103,
              "unobservable_qty_pct": 0.11895093973827346,
              "unclear_qty_pct": 0.2286606710108245,
              "retail_notional_pct": 0.02512115114643611,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7463840439868807,
              "ambiguous_notional_pct": 0.10929417823203334,
              "unobservable_notional_pct": 0.11920062663464982,
              "unclear_notional_pct": 0.22849480486668317,
              "run_retail_pct": 0.3583815028901734,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2514450867052023,
              "run_unclear_pct": 0.3901734104046243,
              "avg_trade_size": 2903.3023701638203,
              "avg_run_notional": 22813.085260115608,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.008670520231213872,
              "medium_confidence_pct": 0.20520231213872833,
              "low_confidence_pct": 0.3959537572254335,
              "na_confidence_pct": 0.3901734104046243,
              "avg_feature_coverage": 0.7643063583815031,
              "observable_run_pct": 0.9161849710982659,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.03508771929824561,
              "mixed_pct": 0.0,
              "instit_pct": 0.5789473684210527,
              "ambiguous_pct": 0.21052631578947367,
              "unobservable_pct": 0.17543859649122806,
              "unclear_pct": 0.38596491228070173,
              "retail_qty_pct": 0.01113811259619279,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7073714054272985,
              "ambiguous_qty_pct": 0.12170919400567032,
              "unobservable_qty_pct": 0.1597812879708384,
              "unclear_qty_pct": 0.2814904819765087,
              "retail_notional_pct": 0.011021530431540683,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7069577779849008,
              "ambiguous_notional_pct": 0.12099450088545065,
              "unobservable_notional_pct": 0.16102619069810792,
              "unclear_notional_pct": 0.2820206915835586,
              "run_retail_pct": 0.08695652173913043,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5217391304347826,
              "run_unclear_pct": 0.391304347826087,
              "avg_trade_size": 1882.280701754386,
              "avg_run_notional": 4157.108695652174,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6086956521739131,
              "na_confidence_pct": 0.391304347826087,
              "avg_feature_coverage": 0.7326086956521738,
              "observable_run_pct": 0.9130434782608696,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.4375,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.3125,
              "unclear_pct": 0.5625,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.04524110529167419,
              "ambiguous_qty_pct": 0.02501354524110529,
              "unobservable_qty_pct": 0.9297453494672205,
              "unclear_qty_pct": 0.9547588947083259,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.045438746168673175,
              "ambiguous_notional_pct": 0.02479810769696067,
              "unobservable_notional_pct": 0.9297631461343662,
              "unclear_notional_pct": 0.9545612538313268,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.38461538461538464,
              "run_unclear_pct": 0.6153846153846154,
              "avg_trade_size": 27691.125,
              "avg_run_notional": 34081.38461538462,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.38461538461538464,
              "na_confidence_pct": 0.6153846153846154,
              "avg_feature_coverage": 0.6461538461538462,
              "observable_run_pct": 0.6923076923076923,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 233.33333333333334,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 1.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 1.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 1.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.7000000000000001,
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
          "n_trades": 4428,
          "n_runs": 632,
          "n_trade_days": 21,
          "first_trade_date": "2026-01-30",
          "last_trade_date": "2026-03-03",
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
            "retail_pct": 0.055329719963866306,
            "mixed_pct": 0.0,
            "instit_pct": 0.7341915085817525,
            "ambiguous_pct": 0.12059620596205962,
            "unobservable_pct": 0.08988256549232158,
            "unclear_pct": 0.2104787714543812,
            "retail_qty_pct": 0.018624246364372737,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7722794828592675,
            "ambiguous_qty_pct": 0.08598045411967364,
            "unobservable_qty_pct": 0.12311581665668607,
            "unclear_qty_pct": 0.20909627077635973,
            "retail_notional_pct": 0.018955449669216754,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7772496697883532,
            "ambiguous_notional_pct": 0.08437587855251098,
            "unobservable_notional_pct": 0.11941900198991909,
            "unclear_notional_pct": 0.20379488054243006
          },
          "run_composition": {
            "retail_pct": 0.2974683544303797,
            "mixed_pct": 0.0,
            "instit_pct": 0.35443037974683544,
            "ambiguous_pct": 0.22784810126582278,
            "unobservable_pct": 0.12025316455696203,
            "unclear_pct": 0.3481012658227848,
            "retail_notional_pct": 0.019887650305111994,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8154736449021025,
            "unclear_notional_pct": 0.16463870479278547
          },
          "counts": {
            "trades": {
              "retail": 245,
              "mixed": 0,
              "institutional": 3251,
              "ambiguous": 534,
              "unobservable": 398,
              "unclear": 932
            },
            "runs": {
              "retail": 188,
              "mixed": 0,
              "institutional": 224,
              "ambiguous": 144,
              "unobservable": 76,
              "unclear": 220
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.11708860759493671,
            "low": 0.5348101265822784,
            "na": 0.34810126582278483
          },
          "confidence_counts": {
            "high": 0,
            "medium": 74,
            "low": 338,
            "na": 220
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.18066847335140018,
            "low": 0.6088527551942186,
            "na": 0.2104787714543812
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 800,
            "low": 2696,
            "na": 932
          },
          "observability": {
            "avg_feature_coverage": 0.752373417721519,
            "observable_run_pct": 0.879746835443038,
            "ambiguous_run_pct": 0.22784810126582278,
            "unobservable_run_pct": 0.12025316455696203
          },
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "dominant_share": 0.35443037974683544,
          "dominance_gap": 0.05696202531645572,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 2686,
              "SINGLE_FILL": 1509,
              "UNOBSERVABLE": 204,
              "WALK_BOOK": 29
            },
            "d2_information": {
              "UNOBSERVABLE": 4428
            },
            "d3_urgency": {
              "IMMEDIATE": 618,
              "ADAPTIVE": 14
            },
            "participant_confidence": {
              "LOW": 338,
              "NA": 220,
              "MEDIUM": 74
            }
          },
          "trade_size": {
            "avg": 3753.3926151761516,
            "median": 1398.25
          },
          "run_size": {
            "avg": 25064.852056962027,
            "median": 5937.5,
            "avg_length": 3.4177215189873418
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 631,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-03T08:48:12.468100",
              "price": 0.23,
              "size": 8900.0,
              "notional": 2047.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 630,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 629,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-03T07:32:10.448200",
              "price": 0.23,
              "size": 5300.0,
              "notional": 1219.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-03T07:32:10.418100",
              "price": 0.23,
              "size": 25000.0,
              "notional": 5750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 628,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-03T07:07:30.089300",
              "price": 0.23,
              "size": 6000.0,
              "notional": 1380.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 627,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.055329719963866306,
              "mixed_pct": 0.0,
              "instit_pct": 0.7341915085817525,
              "ambiguous_pct": 0.12059620596205962,
              "unobservable_pct": 0.08988256549232158,
              "unclear_pct": 0.2104787714543812,
              "retail_qty_pct": 0.018624246364372737,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7722794828592675,
              "ambiguous_qty_pct": 0.08598045411967364,
              "unobservable_qty_pct": 0.12311581665668607,
              "unclear_qty_pct": 0.20909627077635973,
              "retail_notional_pct": 0.018955449669216754,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7772496697883532,
              "ambiguous_notional_pct": 0.08437587855251098,
              "unobservable_notional_pct": 0.11941900198991909,
              "unclear_notional_pct": 0.20379488054243006,
              "run_retail_pct": 0.2974683544303797,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.35443037974683544,
              "run_unclear_pct": 0.3481012658227848,
              "avg_trade_size": 3753.3926151761516,
              "avg_run_notional": 25064.852056962027,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.11708860759493671,
              "low_confidence_pct": 0.5348101265822784,
              "na_confidence_pct": 0.34810126582278483,
              "avg_feature_coverage": 0.752373417721519,
              "observable_run_pct": 0.879746835443038,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.033707865168539325,
              "mixed_pct": 0.0,
              "instit_pct": 0.7471910112359551,
              "ambiguous_pct": 0.07303370786516854,
              "unobservable_pct": 0.14606741573033707,
              "unclear_pct": 0.2191011235955056,
              "retail_qty_pct": 0.012318786148877037,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8450386839930895,
              "ambiguous_qty_pct": 0.046571020806730264,
              "unobservable_qty_pct": 0.09607150905130324,
              "unclear_qty_pct": 0.1426425298580335,
              "retail_notional_pct": 0.012545295555570277,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8481994395606579,
              "ambiguous_notional_pct": 0.0444774201241446,
              "unobservable_notional_pct": 0.09477784475962717,
              "unclear_notional_pct": 0.13925526488377177,
              "run_retail_pct": 0.13636363636363635,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5454545454545454,
              "run_unclear_pct": 0.3181818181818182,
              "avg_trade_size": 1696.1011235955057,
              "avg_run_notional": 6509.920454545455,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6818181818181818,
              "na_confidence_pct": 0.3181818181818182,
              "avg_feature_coverage": 0.740909090909091,
              "observable_run_pct": 0.8636363636363636,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.060817805383022776,
              "mixed_pct": 0.0,
              "instit_pct": 0.6733954451345756,
              "ambiguous_pct": 0.12707039337474121,
              "unobservable_pct": 0.13871635610766045,
              "unclear_pct": 0.26578674948240166,
              "retail_qty_pct": 0.017164957947080853,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7691570998833569,
              "ambiguous_qty_pct": 0.0800049112898275,
              "unobservable_qty_pct": 0.13367303087973478,
              "unclear_qty_pct": 0.21367794216956226,
              "retail_notional_pct": 0.016992481750740883,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.772033530500702,
              "ambiguous_notional_pct": 0.07944455231631732,
              "unobservable_notional_pct": 0.1315294354322398,
              "unclear_notional_pct": 0.21097398774855713,
              "run_retail_pct": 0.2426367461430575,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.39831697054698456,
              "run_unclear_pct": 0.3590462833099579,
              "avg_trade_size": 3694.667701863354,
              "avg_run_notional": 18851.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.008415147265077139,
              "medium_confidence_pct": 0.21458625525946703,
              "low_confidence_pct": 0.4179523141654979,
              "na_confidence_pct": 0.3590462833099579,
              "avg_feature_coverage": 0.7516830294530155,
              "observable_run_pct": 0.8597475455820477,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08450704225352113,
              "mixed_pct": 0.0,
              "instit_pct": 0.6232394366197183,
              "ambiguous_pct": 0.15140845070422534,
              "unobservable_pct": 0.14084507042253522,
              "unclear_pct": 0.29225352112676056,
              "retail_qty_pct": 0.009392265193370166,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7714917127071823,
              "ambiguous_qty_pct": 0.10861878453038674,
              "unobservable_qty_pct": 0.11049723756906077,
              "unclear_qty_pct": 0.21911602209944753,
              "retail_notional_pct": 0.009374889619413828,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7691434953710189,
              "ambiguous_notional_pct": 0.1096711054379719,
              "unobservable_notional_pct": 0.11181050957159544,
              "unclear_notional_pct": 0.22148161500956734,
              "run_retail_pct": 0.2037037037037037,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.39814814814814814,
              "run_unclear_pct": 0.39814814814814814,
              "avg_trade_size": 2890.926056338028,
              "avg_run_notional": 7424.638888888889,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6018518518518519,
              "na_confidence_pct": 0.39814814814814814,
              "avg_feature_coverage": 0.7185185185185184,
              "observable_run_pct": 0.8611111111111112,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.06325027741349742,
              "mixed_pct": 0.0,
              "instit_pct": 0.6674064359931403,
              "ambiguous_pct": 0.14728134772520932,
              "unobservable_pct": 0.12206193886815293,
              "unclear_pct": 0.26934328659336226,
              "retail_qty_pct": 0.022031713261383284,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7534966289326226,
              "ambiguous_qty_pct": 0.09643590342985564,
              "unobservable_qty_pct": 0.12803575437613846,
              "unclear_qty_pct": 0.2244716578059941,
              "retail_notional_pct": 0.022276314924616607,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7562081465413091,
              "ambiguous_notional_pct": 0.09613632634805463,
              "unobservable_notional_pct": 0.1253792121860196,
              "unclear_notional_pct": 0.22151553853407424,
              "run_retail_pct": 0.29180327868852457,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3527868852459016,
              "run_unclear_pct": 0.35540983606557375,
              "avg_trade_size": 4244.804862302028,
              "avg_run_notional": 26500.73180327869,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.009836065573770493,
              "medium_confidence_pct": 0.21114754098360655,
              "low_confidence_pct": 0.42360655737704916,
              "na_confidence_pct": 0.35540983606557375,
              "avg_feature_coverage": 0.7487540983606559,
              "observable_run_pct": 0.880655737704918,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08713379643612201,
              "mixed_pct": 0.0,
              "instit_pct": 0.540773180308064,
              "ambiguous_pct": 0.24962247055270312,
              "unobservable_pct": 0.12247055270311084,
              "unclear_pct": 0.37209302325581395,
              "retail_qty_pct": 0.027178931309968284,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7498762160932461,
              "ambiguous_qty_pct": 0.09792979779731556,
              "unobservable_qty_pct": 0.12501505479947006,
              "unclear_qty_pct": 0.22294485259678562,
              "retail_notional_pct": 0.02716602501061645,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7498041821319669,
              "ambiguous_notional_pct": 0.09787124270112006,
              "unobservable_notional_pct": 0.1251585501562966,
              "unclear_notional_pct": 0.22302979285741664,
              "run_retail_pct": 0.41642228739002934,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.23460410557184752,
              "run_unclear_pct": 0.3489736070381232,
              "avg_trade_size": 2005.2734823316218,
              "avg_run_notional": 12200.778592375367,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.01270772238514174,
              "medium_confidence_pct": 0.26588465298142716,
              "low_confidence_pct": 0.3724340175953079,
              "na_confidence_pct": 0.3489736070381232,
              "avg_feature_coverage": 0.7627565982404692,
              "observable_run_pct": 0.9345063538611926,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.023255813953488372,
              "mixed_pct": 0.0,
              "instit_pct": 0.4186046511627907,
              "ambiguous_pct": 0.20930232558139536,
              "unobservable_pct": 0.3488372093023256,
              "unclear_pct": 0.5581395348837209,
              "retail_qty_pct": 0.0016060738793984522,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.10600087604029786,
              "ambiguous_qty_pct": 0.02744926266608264,
              "unobservable_qty_pct": 0.8649437874142211,
              "unclear_qty_pct": 0.8923930500803037,
              "retail_notional_pct": 0.0015449818642477152,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.10631828268060738,
              "ambiguous_notional_pct": 0.027234181492503555,
              "unobservable_notional_pct": 0.8649025539626414,
              "unclear_notional_pct": 0.8921367354551449,
              "run_retail_pct": 0.041666666666666664,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.375,
              "run_unclear_pct": 0.5833333333333333,
              "avg_trade_size": 12749.453488372093,
              "avg_run_notional": 22826.104166666668,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4166666666666667,
              "na_confidence_pct": 0.5833333333333334,
              "avg_feature_coverage": 0.6541666666666668,
              "observable_run_pct": 0.6666666666666667,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.1875,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.8125,
              "unclear_pct": 0.8125,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.017915600261889174,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9820843997381108,
              "unclear_qty_pct": 0.9820843997381108,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.017915600261889174,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9820843997381109,
              "unclear_notional_pct": 0.9820843997381109,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.4,
              "run_unclear_pct": 0.6,
              "avg_trade_size": 210.0125,
              "avg_run_notional": 332.04,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4,
              "na_confidence_pct": 0.6,
              "avg_feature_coverage": 0.64,
              "observable_run_pct": 0.4,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 1.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 1.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 1.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.7000000000000001,
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
      "n_trades": 4428,
      "n_runs": 632,
      "n_trade_days": 21,
      "first_trade_date": "2026-01-30",
      "last_trade_date": "2026-03-03",
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
        "retail_pct": 0.055329719963866306,
        "mixed_pct": 0.0,
        "instit_pct": 0.7341915085817525,
        "ambiguous_pct": 0.12059620596205962,
        "unobservable_pct": 0.08988256549232158,
        "unclear_pct": 0.2104787714543812,
        "retail_qty_pct": 0.018624246364372737,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.7722794828592675,
        "ambiguous_qty_pct": 0.08598045411967364,
        "unobservable_qty_pct": 0.12311581665668607,
        "unclear_qty_pct": 0.20909627077635973,
        "retail_notional_pct": 0.018955449669216754,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.7772496697883532,
        "ambiguous_notional_pct": 0.08437587855251098,
        "unobservable_notional_pct": 0.11941900198991909,
        "unclear_notional_pct": 0.20379488054243006
      },
      "run_composition": {
        "retail_pct": 0.2974683544303797,
        "mixed_pct": 0.0,
        "instit_pct": 0.35443037974683544,
        "ambiguous_pct": 0.22784810126582278,
        "unobservable_pct": 0.12025316455696203,
        "unclear_pct": 0.3481012658227848
      },
      "trade_size": {
        "avg": 3753.3926151761516,
        "median": 1398.25
      },
      "run_size": {
        "avg": 25064.852056962027,
        "median": 5937.5,
        "avg_length": 3.4177215189873418
      },
      "confidence": {
        "high": 0.0,
        "medium": 0.11708860759493671,
        "low": 0.5348101265822784,
        "na": 0.34810126582278483
      },
      "confidence_counts": {
        "high": 0,
        "medium": 74,
        "low": 338,
        "na": 220
      },
      "trade_confidence": {
        "high": 0.0,
        "medium": 0.18066847335140018,
        "low": 0.6088527551942186,
        "na": 0.2104787714543812
      },
      "trade_confidence_counts": {
        "high": 0,
        "medium": 800,
        "low": 2696,
        "na": 932
      },
      "counts": {
        "trades": {
          "retail": 245,
          "mixed": 0,
          "institutional": 3251,
          "ambiguous": 534,
          "unobservable": 398,
          "unclear": 932
        },
        "runs": {
          "retail": 188,
          "mixed": 0,
          "institutional": 224,
          "ambiguous": 144,
          "unobservable": 76,
          "unclear": 220
        }
      },
      "observability": {
        "avg_feature_coverage": 0.752373417721519,
        "observable_run_pct": 0.879746835443038,
        "ambiguous_run_pct": 0.22784810126582278,
        "unobservable_run_pct": 0.12025316455696203
      },
      "dominant_bucket": "INSTITUTIONAL",
      "dominant_label": "Mixed (Institutional Tilt)",
      "dominant_share": 0.35443037974683544,
      "dominance_gap": 0.05696202531645572,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 812,
            "n_runs": 62,
            "retail_pct": 0.03571428571428571,
            "mixed_pct": 0.0,
            "instit_pct": 0.8460591133004927,
            "ambiguous_pct": 0.0603448275862069,
            "unobservable_pct": 0.05788177339901478,
            "unclear_pct": 0.11822660098522167,
            "avg_trade_size": 4925.6921182266005,
            "avg_run_notional": 62690.217741935485,
            "retail_qty_pct": 0.023505295524427743,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8577656303382303,
            "ambiguous_qty_pct": 0.05052955244277417,
            "unobservable_qty_pct": 0.06819952169456782,
            "unclear_qty_pct": 0.11872907413734199,
            "retail_notional_pct": 0.024057657872090188,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8582096437148939,
            "ambiguous_notional_pct": 0.05040313406482847,
            "unobservable_notional_pct": 0.06732956434818742,
            "unclear_notional_pct": 0.1177326984130159,
            "run_retail_pct": 0.3225806451612903,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.41935483870967744,
            "run_ambiguous_pct": 0.1935483870967742,
            "run_unobservable_pct": 0.06451612903225806,
            "run_unclear_pct": 0.25806451612903225,
            "avg_feature_coverage": 0.7709677419354841,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.12903225806451613,
            "low_confidence_pct": 0.6129032258064516,
            "na_confidence_pct": 0.25806451612903225,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3396,
            "n_runs": 515,
            "retail_pct": 0.05771495877502945,
            "mixed_pct": 0.0,
            "instit_pct": 0.709658421672556,
            "ambiguous_pct": 0.13457008244994112,
            "unobservable_pct": 0.0980565371024735,
            "unclear_pct": 0.23262661955241462,
            "avg_trade_size": 3499.3803003533567,
            "avg_run_notional": 21820.209708737864,
            "retail_qty_pct": 0.01756695237683255,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7426651588091221,
            "ambiguous_qty_pct": 0.09550382423160032,
            "unobservable_qty_pct": 0.144264064582445,
            "unclear_qty_pct": 0.23976788881404532,
            "retail_notional_pct": 0.017662306101564086,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.746553602730687,
            "ambiguous_notional_pct": 0.09463336327721832,
            "unobservable_notional_pct": 0.14115072789053051,
            "unclear_notional_pct": 0.23578409116774884,
            "run_retail_pct": 0.29320388349514565,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.34563106796116505,
            "run_ambiguous_pct": 0.23300970873786409,
            "run_unobservable_pct": 0.12815533980582525,
            "run_unclear_pct": 0.36116504854368936,
            "avg_feature_coverage": 0.7501941747572815,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.12815533980582525,
            "low_confidence_pct": 0.5106796116504855,
            "na_confidence_pct": 0.3611650485436893,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 220,
            "n_runs": 55,
            "retail_pct": 0.09090909090909091,
            "mixed_pct": 0.0,
            "instit_pct": 0.7,
            "ambiguous_pct": 0.12727272727272726,
            "unobservable_pct": 0.08181818181818182,
            "unclear_pct": 0.20909090909090908,
            "avg_trade_size": 3347.568181818182,
            "avg_run_notional": 13032.454545454546,
            "retail_qty_pct": 0.012168496757207988,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8321774866756566,
            "ambiguous_qty_pct": 0.10412251974571374,
            "unobservable_qty_pct": 0.05153149682142169,
            "unclear_qty_pct": 0.15565401656713543,
            "retail_notional_pct": 0.012112591908644674,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8328888677669679,
            "ambiguous_notional_pct": 0.10335929066554418,
            "unobservable_notional_pct": 0.051639249658843256,
            "unclear_notional_pct": 0.15499854032438742,
            "run_retail_pct": 0.3090909090909091,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.36363636363636365,
            "run_ambiguous_pct": 0.21818181818181817,
            "run_unobservable_pct": 0.10909090909090909,
            "run_unclear_pct": 0.32727272727272727,
            "avg_feature_coverage": 0.7518181818181819,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6727272727272727,
            "na_confidence_pct": 0.32727272727272727,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.055329719963866306,
          "mixed_pct": 0.0,
          "instit_pct": 0.7341915085817525,
          "ambiguous_pct": 0.12059620596205962,
          "unobservable_pct": 0.08988256549232158,
          "unclear_pct": 0.2104787714543812,
          "retail_qty_pct": 0.018624246364372737,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7722794828592675,
          "ambiguous_qty_pct": 0.08598045411967364,
          "unobservable_qty_pct": 0.12311581665668607,
          "unclear_qty_pct": 0.20909627077635973,
          "retail_notional_pct": 0.018955449669216754,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7772496697883532,
          "ambiguous_notional_pct": 0.08437587855251098,
          "unobservable_notional_pct": 0.11941900198991909,
          "unclear_notional_pct": 0.20379488054243006,
          "run_retail_pct": 0.2974683544303797,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.35443037974683544,
          "run_unclear_pct": 0.3481012658227848,
          "avg_trade_size": 3753.3926151761516,
          "avg_run_notional": 25064.852056962027,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.11708860759493671,
          "low_confidence_pct": 0.5348101265822784,
          "na_confidence_pct": 0.34810126582278483,
          "avg_feature_coverage": 0.752373417721519,
          "observable_run_pct": 0.879746835443038,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.033707865168539325,
          "mixed_pct": 0.0,
          "instit_pct": 0.7471910112359551,
          "ambiguous_pct": 0.07303370786516854,
          "unobservable_pct": 0.14606741573033707,
          "unclear_pct": 0.2191011235955056,
          "retail_qty_pct": 0.012318786148877037,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.8450386839930895,
          "ambiguous_qty_pct": 0.046571020806730264,
          "unobservable_qty_pct": 0.09607150905130324,
          "unclear_qty_pct": 0.1426425298580335,
          "retail_notional_pct": 0.012545295555570277,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.8481994395606579,
          "ambiguous_notional_pct": 0.0444774201241446,
          "unobservable_notional_pct": 0.09477784475962717,
          "unclear_notional_pct": 0.13925526488377177,
          "run_retail_pct": 0.13636363636363635,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.5454545454545454,
          "run_unclear_pct": 0.3181818181818182,
          "avg_trade_size": 1696.1011235955057,
          "avg_run_notional": 6509.920454545455,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.6818181818181818,
          "na_confidence_pct": 0.3181818181818182,
          "avg_feature_coverage": 0.740909090909091,
          "observable_run_pct": 0.8636363636363636,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.060817805383022776,
          "mixed_pct": 0.0,
          "instit_pct": 0.6733954451345756,
          "ambiguous_pct": 0.12707039337474121,
          "unobservable_pct": 0.13871635610766045,
          "unclear_pct": 0.26578674948240166,
          "retail_qty_pct": 0.017164957947080853,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7691570998833569,
          "ambiguous_qty_pct": 0.0800049112898275,
          "unobservable_qty_pct": 0.13367303087973478,
          "unclear_qty_pct": 0.21367794216956226,
          "retail_notional_pct": 0.016992481750740883,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.772033530500702,
          "ambiguous_notional_pct": 0.07944455231631732,
          "unobservable_notional_pct": 0.1315294354322398,
          "unclear_notional_pct": 0.21097398774855713,
          "run_retail_pct": 0.2426367461430575,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.39831697054698456,
          "run_unclear_pct": 0.3590462833099579,
          "avg_trade_size": 3694.667701863354,
          "avg_run_notional": 18851.0,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.008415147265077139,
          "medium_confidence_pct": 0.21458625525946703,
          "low_confidence_pct": 0.4179523141654979,
          "na_confidence_pct": 0.3590462833099579,
          "avg_feature_coverage": 0.7516830294530155,
          "observable_run_pct": 0.8597475455820477,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08450704225352113,
          "mixed_pct": 0.0,
          "instit_pct": 0.6232394366197183,
          "ambiguous_pct": 0.15140845070422534,
          "unobservable_pct": 0.14084507042253522,
          "unclear_pct": 0.29225352112676056,
          "retail_qty_pct": 0.009392265193370166,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7714917127071823,
          "ambiguous_qty_pct": 0.10861878453038674,
          "unobservable_qty_pct": 0.11049723756906077,
          "unclear_qty_pct": 0.21911602209944753,
          "retail_notional_pct": 0.009374889619413828,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7691434953710189,
          "ambiguous_notional_pct": 0.1096711054379719,
          "unobservable_notional_pct": 0.11181050957159544,
          "unclear_notional_pct": 0.22148161500956734,
          "run_retail_pct": 0.2037037037037037,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.39814814814814814,
          "run_unclear_pct": 0.39814814814814814,
          "avg_trade_size": 2890.926056338028,
          "avg_run_notional": 7424.638888888889,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Institutional Tilt",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.6018518518518519,
          "na_confidence_pct": 0.39814814814814814,
          "avg_feature_coverage": 0.7185185185185184,
          "observable_run_pct": 0.8611111111111112,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.06325027741349742,
          "mixed_pct": 0.0,
          "instit_pct": 0.6674064359931403,
          "ambiguous_pct": 0.14728134772520932,
          "unobservable_pct": 0.12206193886815293,
          "unclear_pct": 0.26934328659336226,
          "retail_qty_pct": 0.022031713261383284,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7534966289326226,
          "ambiguous_qty_pct": 0.09643590342985564,
          "unobservable_qty_pct": 0.12803575437613846,
          "unclear_qty_pct": 0.2244716578059941,
          "retail_notional_pct": 0.022276314924616607,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7562081465413091,
          "ambiguous_notional_pct": 0.09613632634805463,
          "unobservable_notional_pct": 0.1253792121860196,
          "unclear_notional_pct": 0.22151553853407424,
          "run_retail_pct": 0.29180327868852457,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3527868852459016,
          "run_unclear_pct": 0.35540983606557375,
          "avg_trade_size": 4244.804862302028,
          "avg_run_notional": 26500.73180327869,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "high_confidence_pct": 0.009836065573770493,
          "medium_confidence_pct": 0.21114754098360655,
          "low_confidence_pct": 0.42360655737704916,
          "na_confidence_pct": 0.35540983606557375,
          "avg_feature_coverage": 0.7487540983606559,
          "observable_run_pct": 0.880655737704918,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BN2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08713379643612201,
          "mixed_pct": 0.0,
          "instit_pct": 0.540773180308064,
          "ambiguous_pct": 0.24962247055270312,
          "unobservable_pct": 0.12247055270311084,
          "unclear_pct": 0.37209302325581395,
          "retail_qty_pct": 0.027178931309968284,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.7498762160932461,
          "ambiguous_qty_pct": 0.09792979779731556,
          "unobservable_qty_pct": 0.12501505479947006,
          "unclear_qty_pct": 0.22294485259678562,
          "retail_notional_pct": 0.02716602501061645,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.7498041821319669,
          "ambiguous_notional_pct": 0.09787124270112006,
          "unobservable_notional_pct": 0.1251585501562966,
          "unclear_notional_pct": 0.22302979285741664,
          "run_retail_pct": 0.41642228739002934,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.23460410557184752,
          "run_unclear_pct": 0.3489736070381232,
          "avg_trade_size": 2005.2734823316218,
          "avg_run_notional": 12200.778592375367,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
          "high_confidence_pct": 0.01270772238514174,
          "medium_confidence_pct": 0.26588465298142716,
          "low_confidence_pct": 0.3724340175953079,
          "na_confidence_pct": 0.3489736070381232,
          "avg_feature_coverage": 0.7627565982404692,
          "observable_run_pct": 0.9345063538611926,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.023255813953488372,
          "mixed_pct": 0.0,
          "instit_pct": 0.4186046511627907,
          "ambiguous_pct": 0.20930232558139536,
          "unobservable_pct": 0.3488372093023256,
          "unclear_pct": 0.5581395348837209,
          "retail_qty_pct": 0.0016060738793984522,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.10600087604029786,
          "ambiguous_qty_pct": 0.02744926266608264,
          "unobservable_qty_pct": 0.8649437874142211,
          "unclear_qty_pct": 0.8923930500803037,
          "retail_notional_pct": 0.0015449818642477152,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.10631828268060738,
          "ambiguous_notional_pct": 0.027234181492503555,
          "unobservable_notional_pct": 0.8649025539626414,
          "unclear_notional_pct": 0.8921367354551449,
          "run_retail_pct": 0.041666666666666664,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.375,
          "run_unclear_pct": 0.5833333333333333,
          "avg_trade_size": 12749.453488372093,
          "avg_run_notional": 22826.104166666668,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4166666666666667,
          "na_confidence_pct": 0.5833333333333334,
          "avg_feature_coverage": 0.6541666666666668,
          "observable_run_pct": 0.6666666666666667,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.1875,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.8125,
          "unclear_pct": 0.8125,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.017915600261889174,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.9820843997381108,
          "unclear_qty_pct": 0.9820843997381108,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.017915600261889174,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.9820843997381109,
          "unclear_notional_pct": 0.9820843997381109,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.4,
          "run_unclear_pct": 0.6,
          "avg_trade_size": 210.0125,
          "avg_run_notional": 332.04,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4,
          "na_confidence_pct": 0.6,
          "avg_feature_coverage": 0.64,
          "observable_run_pct": 0.4,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": 1.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 1.0,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 1.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 1.0,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 1.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 1.0,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 1.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclear Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.0,
          "na_confidence_pct": 1.0,
          "avg_feature_coverage": 0.7000000000000001,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.0898876404494382,
            "mixed_pct": 0.0,
            "instit_pct": 0.7191011235955056,
            "ambiguous_pct": 0.15730337078651685,
            "unobservable_pct": 0.033707865168539325,
            "unclear_pct": 0.19101123595505617,
            "retail_qty_pct": 0.0017780938833570413,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8147226173541963,
            "ambiguous_qty_pct": 0.12304409672830725,
            "unobservable_qty_pct": 0.060455192034139404,
            "unclear_qty_pct": 0.18349928876244664,
            "retail_notional_pct": 0.0018141257118388428,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8155479558110327,
            "ambiguous_notional_pct": 0.12191345339570306,
            "unobservable_notional_pct": 0.06072446508142538,
            "unclear_notional_pct": 0.18263791847712843,
            "run_retail_pct": 0.2916666666666667,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.375,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2938.8595505617977,
            "avg_run_notional": 10698.270833333334,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.7562500000000001,
            "observable_run_pct": 0.9166666666666666,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
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
            "avg_trade_size": 880.0,
            "avg_run_notional": 880.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.7000000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.04262295081967213,
            "mixed_pct": 0.0,
            "instit_pct": 0.6262295081967213,
            "ambiguous_pct": 0.16393442622950818,
            "unobservable_pct": 0.16721311475409836,
            "unclear_pct": 0.33114754098360655,
            "retail_qty_pct": 0.01758200795228628,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7339090457256461,
            "ambiguous_qty_pct": 0.12860337972167,
            "unobservable_qty_pct": 0.11990556660039761,
            "unclear_qty_pct": 0.2485089463220676,
            "retail_notional_pct": 0.017634735211511494,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7341913019693352,
            "ambiguous_notional_pct": 0.12868095732049964,
            "unobservable_notional_pct": 0.1194930054986536,
            "unclear_notional_pct": 0.24817396281915324,
            "run_retail_pct": 0.18072289156626506,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.37349397590361444,
            "run_unclear_pct": 0.4457831325301205,
            "avg_trade_size": 2972.7098360655737,
            "avg_run_notional": 20946.156626506025,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.26506024096385544,
            "low_confidence_pct": 0.2891566265060241,
            "na_confidence_pct": 0.4457831325301205,
            "avg_feature_coverage": 0.741566265060241,
            "observable_run_pct": 0.8192771084337349,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08018867924528301,
            "mixed_pct": 0.0,
            "instit_pct": 0.6556603773584906,
            "ambiguous_pct": 0.17452830188679244,
            "unobservable_pct": 0.08962264150943396,
            "unclear_pct": 0.2641509433962264,
            "retail_qty_pct": 0.026861451460885956,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6870876531573987,
            "ambiguous_qty_pct": 0.12723845428840716,
            "unobservable_qty_pct": 0.1588124410933082,
            "unclear_qty_pct": 0.28605089538171535,
            "retail_notional_pct": 0.02679042834028783,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6860111190861425,
            "ambiguous_notional_pct": 0.12723202880743542,
            "unobservable_notional_pct": 0.15996642376613424,
            "unclear_notional_pct": 0.2871984525735697,
            "run_retail_pct": 0.2727272727272727,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.32727272727272727,
            "run_unclear_pct": 0.39999999999999997,
            "avg_trade_size": 1938.7028301886792,
            "avg_run_notional": 7403.381818181818,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.32727272727272727,
            "low_confidence_pct": 0.2727272727272727,
            "na_confidence_pct": 0.4,
            "avg_feature_coverage": 0.7445454545454548,
            "observable_run_pct": 0.8545454545454545,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06772908366533864,
            "mixed_pct": 0.0,
            "instit_pct": 0.5776892430278885,
            "ambiguous_pct": 0.27091633466135456,
            "unobservable_pct": 0.08366533864541832,
            "unclear_pct": 0.35458167330677287,
            "retail_qty_pct": 0.02821697883726587,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6793967404524447,
            "ambiguous_qty_pct": 0.1537338846995865,
            "unobservable_qty_pct": 0.138652396010703,
            "unclear_qty_pct": 0.2923862807102895,
            "retail_notional_pct": 0.02813286558787881,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6798483337428515,
            "ambiguous_notional_pct": 0.15370145919237513,
            "unobservable_notional_pct": 0.13831734147689456,
            "unclear_notional_pct": 0.29201880066926966,
            "run_retail_pct": 0.3157894736842105,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2894736842105263,
            "run_unclear_pct": 0.39473684210526316,
            "avg_trade_size": 2894.276892430279,
            "avg_run_notional": 18258.657894736843,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed (Unclear Flow)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2894736842105263,
            "low_confidence_pct": 0.3157894736842105,
            "na_confidence_pct": 0.39473684210526316,
            "avg_feature_coverage": 0.7592105263157896,
            "observable_run_pct": 0.9473684210526316,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1111111111111111,
            "mixed_pct": 0.0,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.5555555555555556,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5555555555555556,
            "retail_qty_pct": 0.008912655971479501,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5543672014260249,
            "ambiguous_qty_pct": 0.43672014260249553,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.43672014260249553,
            "retail_notional_pct": 0.009067139001349528,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5508603238866396,
            "ambiguous_notional_pct": 0.4400725371120108,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4400725371120108,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.6,
            "avg_trade_size": 1317.3333333333333,
            "avg_run_notional": 2371.2,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4,
            "na_confidence_pct": 0.6,
            "avg_feature_coverage": 0.7300000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.009900990099009901,
            "unobservable_qty_pct": 0.9900990099009901,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.00989853996535511,
            "unobservable_notional_pct": 0.9901014600346449,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 1347.0,
            "avg_run_notional": 2020.5,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed (Unclear Flow)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.5750000000000001,
            "observable_run_pct": 0.5,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.098,
            "mixed_pct": 0.0,
            "instit_pct": 0.668,
            "ambiguous_pct": 0.164,
            "unobservable_pct": 0.07,
            "unclear_pct": 0.234,
            "retail_qty_pct": 0.025889105505975805,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.824903430488115,
            "ambiguous_qty_pct": 0.11215383311335263,
            "unobservable_qty_pct": 0.03705363089255658,
            "unclear_qty_pct": 0.1492074640059092,
            "retail_notional_pct": 0.026157466422590283,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8251068363794402,
            "ambiguous_notional_pct": 0.11216725995088325,
            "unobservable_notional_pct": 0.03656843724708628,
            "unclear_notional_pct": 0.14873569719796953,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3508771929824561,
            "run_unclear_pct": 0.3157894736842105,
            "avg_trade_size": 4091.069,
            "avg_run_notional": 17576.491228070176,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6842105263157895,
            "na_confidence_pct": 0.3157894736842105,
            "avg_feature_coverage": 0.7526315789473684,
            "observable_run_pct": 0.9035087719298246,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.04,
            "mixed_pct": 0.0,
            "instit_pct": 0.76,
            "ambiguous_pct": 0.04,
            "unobservable_pct": 0.16,
            "unclear_pct": 0.2,
            "retail_qty_pct": 0.006776789495976281,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8204150783566285,
            "ambiguous_qty_pct": 0.028801355357899194,
            "unobservable_qty_pct": 0.14400677678949597,
            "unclear_qty_pct": 0.17280813214739515,
            "retail_notional_pct": 0.006810249221034236,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8162024878894228,
            "ambiguous_notional_pct": 0.029406257651628267,
            "unobservable_notional_pct": 0.14758100523791462,
            "unclear_notional_pct": 0.1769872628895429,
            "run_retail_pct": 0.14285714285714285,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5714285714285714,
            "run_unclear_pct": 0.2857142857142857,
            "avg_trade_size": 4165.78,
            "avg_run_notional": 14177.107142857143,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7142857142857143,
            "na_confidence_pct": 0.2857142857142857,
            "avg_feature_coverage": 0.725,
            "observable_run_pct": 0.8571428571428572,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.6666666666666666,
            "ambiguous_pct": 0.1111111111111111,
            "unobservable_pct": 0.2222222222222222,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.798804780876494,
            "ambiguous_qty_pct": 0.00199203187250996,
            "unobservable_qty_pct": 0.199203187250996,
            "unclear_qty_pct": 0.20119521912350596,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7986848004782544,
            "ambiguous_notional_pct": 0.001992726548099437,
            "unobservable_notional_pct": 0.1993224729736462,
            "unclear_notional_pct": 0.20131519952174562,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6666666666666666,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2230.3333333333335,
            "avg_run_notional": 3345.5,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.6583333333333334,
            "observable_run_pct": 0.8333333333333334,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.05848903330625508,
            "mixed_pct": 0.0,
            "instit_pct": 0.6709991876523151,
            "ambiguous_pct": 0.1462225832656377,
            "unobservable_pct": 0.12428919577579203,
            "unclear_pct": 0.27051177904142976,
            "retail_qty_pct": 0.014608030592734226,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7959082217973231,
            "ambiguous_qty_pct": 0.07659655831739962,
            "unobservable_qty_pct": 0.11288718929254302,
            "unclear_qty_pct": 0.18948374760994263,
            "retail_notional_pct": 0.014556277579933422,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7971846694278857,
            "ambiguous_notional_pct": 0.07620388022244587,
            "unobservable_notional_pct": 0.11205517276973498,
            "unclear_notional_pct": 0.18825905299218085,
            "run_retail_pct": 0.2423076923076923,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.38461538461538464,
            "run_unclear_pct": 0.3730769230769231,
            "avg_trade_size": 4029.348497156783,
            "avg_run_notional": 18656.973076923077,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.25384615384615383,
            "low_confidence_pct": 0.3730769230769231,
            "na_confidence_pct": 0.3730769230769231,
            "avg_feature_coverage": 0.7484615384615384,
            "observable_run_pct": 0.8576923076923078,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0643511613040699,
            "mixed_pct": 0.0,
            "instit_pct": 0.6720647773279352,
            "ambiguous_pct": 0.1546984871084594,
            "unobservable_pct": 0.10888557425953548,
            "unclear_pct": 0.2635840613679949,
            "retail_qty_pct": 0.021538702202755156,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7690773457435888,
            "ambiguous_qty_pct": 0.09453857510192509,
            "unobservable_qty_pct": 0.11484537695173101,
            "unclear_qty_pct": 0.20938395205365612,
            "retail_notional_pct": 0.021615617711051003,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7697821621295915,
            "ambiguous_notional_pct": 0.09465460052883257,
            "unobservable_notional_pct": 0.1139476196305249,
            "unclear_notional_pct": 0.20860222015935748,
            "run_retail_pct": 0.2774018944519621,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.36400541271989173,
            "run_unclear_pct": 0.35859269282814615,
            "avg_trade_size": 4600.7528233539315,
            "avg_run_notional": 28337.859269282813,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.02029769959404601,
            "medium_confidence_pct": 0.2625169147496617,
            "low_confidence_pct": 0.35859269282814615,
            "na_confidence_pct": 0.35859269282814615,
            "avg_feature_coverage": 0.7534506089309878,
            "observable_run_pct": 0.8673883626522327,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06936416184971098,
            "mixed_pct": 0.0,
            "instit_pct": 0.5664739884393064,
            "ambiguous_pct": 0.23864574731626756,
            "unobservable_pct": 0.1255161023947151,
            "unclear_pct": 0.36416184971098264,
            "retail_qty_pct": 0.026164254592428788,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7402404046154183,
            "ambiguous_qty_pct": 0.12099051956298032,
            "unobservable_qty_pct": 0.11260482122917259,
            "unclear_qty_pct": 0.2335953407921529,
            "retail_notional_pct": 0.026102178911360758,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7404992542059995,
            "ambiguous_notional_pct": 0.12053923032885824,
            "unobservable_notional_pct": 0.1128593365537815,
            "unclear_notional_pct": 0.23339856688263974,
            "run_retail_pct": 0.2875816993464052,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.33986928104575165,
            "run_unclear_pct": 0.37254901960784315,
            "avg_trade_size": 3378.151940545004,
            "avg_run_notional": 25523.238562091505,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0196078431372549,
            "medium_confidence_pct": 0.11764705882352941,
            "low_confidence_pct": 0.49019607843137253,
            "na_confidence_pct": 0.37254901960784315,
            "avg_feature_coverage": 0.7709150326797387,
            "observable_run_pct": 0.9084967320261438,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06896551724137931,
            "mixed_pct": 0.0,
            "instit_pct": 0.4827586206896552,
            "ambiguous_pct": 0.3448275862068966,
            "unobservable_pct": 0.10344827586206896,
            "unclear_pct": 0.4482758620689655,
            "retail_qty_pct": 0.020161290322580645,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7074780058651027,
            "ambiguous_qty_pct": 0.17631964809384165,
            "unobservable_qty_pct": 0.09604105571847507,
            "unclear_qty_pct": 0.2723607038123167,
            "retail_notional_pct": 0.02015304383393551,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7075976549185357,
            "ambiguous_notional_pct": 0.17624752880223601,
            "unobservable_notional_pct": 0.09600177244529279,
            "unclear_notional_pct": 0.2722493012475288,
            "run_retail_pct": 0.125,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.4375,
            "run_unclear_pct": 0.4375,
            "avg_trade_size": 2023.3103448275863,
            "avg_run_notional": 3651.125,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5625,
            "na_confidence_pct": 0.4375,
            "avg_feature_coverage": 0.7375,
            "observable_run_pct": 0.9375,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.09784735812133072,
            "mixed_pct": 0.0,
            "instit_pct": 0.6859099804305284,
            "ambiguous_pct": 0.12915851272015655,
            "unobservable_pct": 0.08708414872798434,
            "unclear_pct": 0.2162426614481409,
            "retail_qty_pct": 0.01924381852596993,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8388947750622017,
            "ambiguous_qty_pct": 0.07957643361388556,
            "unobservable_qty_pct": 0.06228497279794288,
            "unclear_qty_pct": 0.14186140641182843,
            "retail_notional_pct": 0.019395300884788014,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8387354659706792,
            "ambiguous_notional_pct": 0.07930029840031805,
            "unobservable_notional_pct": 0.06256893474421477,
            "unclear_notional_pct": 0.1418692331445328,
            "run_retail_pct": 0.32421875,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.34375,
            "run_unclear_pct": 0.33203125,
            "avg_trade_size": 4078.171232876712,
            "avg_run_notional": 15834.341796875,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.1015625,
            "low_confidence_pct": 0.56640625,
            "na_confidence_pct": 0.33203125,
            "avg_feature_coverage": 0.7398437499999999,
            "observable_run_pct": 0.86328125,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.072,
            "mixed_pct": 0.0,
            "instit_pct": 0.696,
            "ambiguous_pct": 0.136,
            "unobservable_pct": 0.096,
            "unclear_pct": 0.232,
            "retail_qty_pct": 0.011492087415222306,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7901281085154483,
            "ambiguous_qty_pct": 0.10908063300678221,
            "unobservable_qty_pct": 0.0892991710625471,
            "unclear_qty_pct": 0.1983798040693293,
            "retail_notional_pct": 0.011522422693413597,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7872366363437642,
            "ambiguous_notional_pct": 0.11047926720586504,
            "unobservable_notional_pct": 0.09076167375695718,
            "unclear_notional_pct": 0.20124094096282222,
            "run_retail_pct": 0.18604651162790697,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.46511627906976744,
            "run_unclear_pct": 0.3488372093023256,
            "avg_trade_size": 3806.144,
            "avg_run_notional": 10793.453488372093,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6511627906976745,
            "na_confidence_pct": 0.3488372093023256,
            "avg_feature_coverage": 0.7325581395348838,
            "observable_run_pct": 0.8837209302325582,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06310920204857096,
            "mixed_pct": 0.0,
            "instit_pct": 0.6722286469519246,
            "ambiguous_pct": 0.1597554931438956,
            "unobservable_pct": 0.10490665785560879,
            "unclear_pct": 0.2646621509995044,
            "retail_qty_pct": 0.022408975337959738,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7744585511575803,
            "ambiguous_qty_pct": 0.09613077006989956,
            "unobservable_qty_pct": 0.10700170343456042,
            "unclear_qty_pct": 0.20313247350445998,
            "retail_notional_pct": 0.022409447005862674,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7747806290609968,
            "ambiguous_notional_pct": 0.09606575574678869,
            "unobservable_notional_pct": 0.1067441681863519,
            "unclear_notional_pct": 0.2028099239331406,
            "run_retail_pct": 0.27800829875518673,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.35684647302904565,
            "run_unclear_pct": 0.36514522821576767,
            "avg_trade_size": 4111.969023624649,
            "avg_run_notional": 25043.57572614108,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.015560165975103735,
            "medium_confidence_pct": 0.24688796680497926,
            "low_confidence_pct": 0.3724066390041494,
            "na_confidence_pct": 0.3651452282157676,
            "avg_feature_coverage": 0.750414937759336,
            "observable_run_pct": 0.8765560165975104,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.05552776388194097,
            "mixed_pct": 0.0,
            "instit_pct": 0.6613306653326664,
            "ambiguous_pct": 0.14007003501750875,
            "unobservable_pct": 0.14307153576788395,
            "unclear_pct": 0.2831415707853927,
            "retail_qty_pct": 0.01420421195971169,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7648674664851032,
            "ambiguous_qty_pct": 0.0857887446293992,
            "unobservable_qty_pct": 0.13513957692578593,
            "unclear_qty_pct": 0.22092832155518513,
            "retail_notional_pct": 0.01417668741360262,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7690414751115151,
            "ambiguous_notional_pct": 0.08458944427354499,
            "unobservable_notional_pct": 0.13219239320133727,
            "unclear_notional_pct": 0.21678183747488228,
            "run_retail_pct": 0.22037914691943128,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3862559241706161,
            "run_unclear_pct": 0.39336492890995256,
            "avg_trade_size": 3893.1235617808907,
            "avg_run_notional": 17885.744075829385,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.014218009478672985,
            "medium_confidence_pct": 0.22985781990521326,
            "low_confidence_pct": 0.36255924170616116,
            "na_confidence_pct": 0.3933649289099526,
            "avg_feature_coverage": 0.7451421800947866,
            "observable_run_pct": 0.8341232227488151,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.060299756012547924,
            "mixed_pct": 0.0,
            "instit_pct": 0.5235273614499826,
            "ambiguous_pct": 0.286859532938306,
            "unobservable_pct": 0.12931334959916346,
            "unclear_pct": 0.4161728825374695,
            "retail_qty_pct": 0.025127901340944586,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7462114276482309,
            "ambiguous_qty_pct": 0.10970973127255103,
            "unobservable_qty_pct": 0.11895093973827346,
            "unclear_qty_pct": 0.2286606710108245,
            "retail_notional_pct": 0.02512115114643611,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7463840439868807,
            "ambiguous_notional_pct": 0.10929417823203334,
            "unobservable_notional_pct": 0.11920062663464982,
            "unclear_notional_pct": 0.22849480486668317,
            "run_retail_pct": 0.3583815028901734,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2514450867052023,
            "run_unclear_pct": 0.3901734104046243,
            "avg_trade_size": 2903.3023701638203,
            "avg_run_notional": 22813.085260115608,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.008670520231213872,
            "medium_confidence_pct": 0.20520231213872833,
            "low_confidence_pct": 0.3959537572254335,
            "na_confidence_pct": 0.3901734104046243,
            "avg_feature_coverage": 0.7643063583815031,
            "observable_run_pct": 0.9161849710982659,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.03508771929824561,
            "mixed_pct": 0.0,
            "instit_pct": 0.5789473684210527,
            "ambiguous_pct": 0.21052631578947367,
            "unobservable_pct": 0.17543859649122806,
            "unclear_pct": 0.38596491228070173,
            "retail_qty_pct": 0.01113811259619279,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7073714054272985,
            "ambiguous_qty_pct": 0.12170919400567032,
            "unobservable_qty_pct": 0.1597812879708384,
            "unclear_qty_pct": 0.2814904819765087,
            "retail_notional_pct": 0.011021530431540683,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7069577779849008,
            "ambiguous_notional_pct": 0.12099450088545065,
            "unobservable_notional_pct": 0.16102619069810792,
            "unclear_notional_pct": 0.2820206915835586,
            "run_retail_pct": 0.08695652173913043,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5217391304347826,
            "run_unclear_pct": 0.391304347826087,
            "avg_trade_size": 1882.280701754386,
            "avg_run_notional": 4157.108695652174,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6086956521739131,
            "na_confidence_pct": 0.391304347826087,
            "avg_feature_coverage": 0.7326086956521738,
            "observable_run_pct": 0.9130434782608696,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.4375,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.3125,
            "unclear_pct": 0.5625,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.04524110529167419,
            "ambiguous_qty_pct": 0.02501354524110529,
            "unobservable_qty_pct": 0.9297453494672205,
            "unclear_qty_pct": 0.9547588947083259,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.045438746168673175,
            "ambiguous_notional_pct": 0.02479810769696067,
            "unobservable_notional_pct": 0.9297631461343662,
            "unclear_notional_pct": 0.9545612538313268,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.38461538461538464,
            "run_unclear_pct": 0.6153846153846154,
            "avg_trade_size": 27691.125,
            "avg_run_notional": 34081.38461538462,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.38461538461538464,
            "na_confidence_pct": 0.6153846153846154,
            "avg_feature_coverage": 0.6461538461538462,
            "observable_run_pct": 0.6923076923076923,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 233.33333333333334,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 1.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 1.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 1.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.7000000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.055329719963866306,
            "mixed_pct": 0.0,
            "instit_pct": 0.7341915085817525,
            "ambiguous_pct": 0.12059620596205962,
            "unobservable_pct": 0.08988256549232158,
            "unclear_pct": 0.2104787714543812,
            "retail_qty_pct": 0.018624246364372737,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7722794828592675,
            "ambiguous_qty_pct": 0.08598045411967364,
            "unobservable_qty_pct": 0.12311581665668607,
            "unclear_qty_pct": 0.20909627077635973,
            "retail_notional_pct": 0.018955449669216754,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7772496697883532,
            "ambiguous_notional_pct": 0.08437587855251098,
            "unobservable_notional_pct": 0.11941900198991909,
            "unclear_notional_pct": 0.20379488054243006,
            "run_retail_pct": 0.2974683544303797,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.35443037974683544,
            "run_unclear_pct": 0.3481012658227848,
            "avg_trade_size": 3753.3926151761516,
            "avg_run_notional": 25064.852056962027,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.11708860759493671,
            "low_confidence_pct": 0.5348101265822784,
            "na_confidence_pct": 0.34810126582278483,
            "avg_feature_coverage": 0.752373417721519,
            "observable_run_pct": 0.879746835443038,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.033707865168539325,
            "mixed_pct": 0.0,
            "instit_pct": 0.7471910112359551,
            "ambiguous_pct": 0.07303370786516854,
            "unobservable_pct": 0.14606741573033707,
            "unclear_pct": 0.2191011235955056,
            "retail_qty_pct": 0.012318786148877037,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8450386839930895,
            "ambiguous_qty_pct": 0.046571020806730264,
            "unobservable_qty_pct": 0.09607150905130324,
            "unclear_qty_pct": 0.1426425298580335,
            "retail_notional_pct": 0.012545295555570277,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8481994395606579,
            "ambiguous_notional_pct": 0.0444774201241446,
            "unobservable_notional_pct": 0.09477784475962717,
            "unclear_notional_pct": 0.13925526488377177,
            "run_retail_pct": 0.13636363636363635,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5454545454545454,
            "run_unclear_pct": 0.3181818181818182,
            "avg_trade_size": 1696.1011235955057,
            "avg_run_notional": 6509.920454545455,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6818181818181818,
            "na_confidence_pct": 0.3181818181818182,
            "avg_feature_coverage": 0.740909090909091,
            "observable_run_pct": 0.8636363636363636,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.060817805383022776,
            "mixed_pct": 0.0,
            "instit_pct": 0.6733954451345756,
            "ambiguous_pct": 0.12707039337474121,
            "unobservable_pct": 0.13871635610766045,
            "unclear_pct": 0.26578674948240166,
            "retail_qty_pct": 0.017164957947080853,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7691570998833569,
            "ambiguous_qty_pct": 0.0800049112898275,
            "unobservable_qty_pct": 0.13367303087973478,
            "unclear_qty_pct": 0.21367794216956226,
            "retail_notional_pct": 0.016992481750740883,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.772033530500702,
            "ambiguous_notional_pct": 0.07944455231631732,
            "unobservable_notional_pct": 0.1315294354322398,
            "unclear_notional_pct": 0.21097398774855713,
            "run_retail_pct": 0.2426367461430575,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.39831697054698456,
            "run_unclear_pct": 0.3590462833099579,
            "avg_trade_size": 3694.667701863354,
            "avg_run_notional": 18851.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.008415147265077139,
            "medium_confidence_pct": 0.21458625525946703,
            "low_confidence_pct": 0.4179523141654979,
            "na_confidence_pct": 0.3590462833099579,
            "avg_feature_coverage": 0.7516830294530155,
            "observable_run_pct": 0.8597475455820477,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08450704225352113,
            "mixed_pct": 0.0,
            "instit_pct": 0.6232394366197183,
            "ambiguous_pct": 0.15140845070422534,
            "unobservable_pct": 0.14084507042253522,
            "unclear_pct": 0.29225352112676056,
            "retail_qty_pct": 0.009392265193370166,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7714917127071823,
            "ambiguous_qty_pct": 0.10861878453038674,
            "unobservable_qty_pct": 0.11049723756906077,
            "unclear_qty_pct": 0.21911602209944753,
            "retail_notional_pct": 0.009374889619413828,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7691434953710189,
            "ambiguous_notional_pct": 0.1096711054379719,
            "unobservable_notional_pct": 0.11181050957159544,
            "unclear_notional_pct": 0.22148161500956734,
            "run_retail_pct": 0.2037037037037037,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.39814814814814814,
            "run_unclear_pct": 0.39814814814814814,
            "avg_trade_size": 2890.926056338028,
            "avg_run_notional": 7424.638888888889,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6018518518518519,
            "na_confidence_pct": 0.39814814814814814,
            "avg_feature_coverage": 0.7185185185185184,
            "observable_run_pct": 0.8611111111111112,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.06325027741349742,
            "mixed_pct": 0.0,
            "instit_pct": 0.6674064359931403,
            "ambiguous_pct": 0.14728134772520932,
            "unobservable_pct": 0.12206193886815293,
            "unclear_pct": 0.26934328659336226,
            "retail_qty_pct": 0.022031713261383284,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7534966289326226,
            "ambiguous_qty_pct": 0.09643590342985564,
            "unobservable_qty_pct": 0.12803575437613846,
            "unclear_qty_pct": 0.2244716578059941,
            "retail_notional_pct": 0.022276314924616607,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7562081465413091,
            "ambiguous_notional_pct": 0.09613632634805463,
            "unobservable_notional_pct": 0.1253792121860196,
            "unclear_notional_pct": 0.22151553853407424,
            "run_retail_pct": 0.29180327868852457,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3527868852459016,
            "run_unclear_pct": 0.35540983606557375,
            "avg_trade_size": 4244.804862302028,
            "avg_run_notional": 26500.73180327869,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.009836065573770493,
            "medium_confidence_pct": 0.21114754098360655,
            "low_confidence_pct": 0.42360655737704916,
            "na_confidence_pct": 0.35540983606557375,
            "avg_feature_coverage": 0.7487540983606559,
            "observable_run_pct": 0.880655737704918,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08713379643612201,
            "mixed_pct": 0.0,
            "instit_pct": 0.540773180308064,
            "ambiguous_pct": 0.24962247055270312,
            "unobservable_pct": 0.12247055270311084,
            "unclear_pct": 0.37209302325581395,
            "retail_qty_pct": 0.027178931309968284,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7498762160932461,
            "ambiguous_qty_pct": 0.09792979779731556,
            "unobservable_qty_pct": 0.12501505479947006,
            "unclear_qty_pct": 0.22294485259678562,
            "retail_notional_pct": 0.02716602501061645,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7498041821319669,
            "ambiguous_notional_pct": 0.09787124270112006,
            "unobservable_notional_pct": 0.1251585501562966,
            "unclear_notional_pct": 0.22302979285741664,
            "run_retail_pct": 0.41642228739002934,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.23460410557184752,
            "run_unclear_pct": 0.3489736070381232,
            "avg_trade_size": 2005.2734823316218,
            "avg_run_notional": 12200.778592375367,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.01270772238514174,
            "medium_confidence_pct": 0.26588465298142716,
            "low_confidence_pct": 0.3724340175953079,
            "na_confidence_pct": 0.3489736070381232,
            "avg_feature_coverage": 0.7627565982404692,
            "observable_run_pct": 0.9345063538611926,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.023255813953488372,
            "mixed_pct": 0.0,
            "instit_pct": 0.4186046511627907,
            "ambiguous_pct": 0.20930232558139536,
            "unobservable_pct": 0.3488372093023256,
            "unclear_pct": 0.5581395348837209,
            "retail_qty_pct": 0.0016060738793984522,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.10600087604029786,
            "ambiguous_qty_pct": 0.02744926266608264,
            "unobservable_qty_pct": 0.8649437874142211,
            "unclear_qty_pct": 0.8923930500803037,
            "retail_notional_pct": 0.0015449818642477152,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.10631828268060738,
            "ambiguous_notional_pct": 0.027234181492503555,
            "unobservable_notional_pct": 0.8649025539626414,
            "unclear_notional_pct": 0.8921367354551449,
            "run_retail_pct": 0.041666666666666664,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.375,
            "run_unclear_pct": 0.5833333333333333,
            "avg_trade_size": 12749.453488372093,
            "avg_run_notional": 22826.104166666668,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4166666666666667,
            "na_confidence_pct": 0.5833333333333334,
            "avg_feature_coverage": 0.6541666666666668,
            "observable_run_pct": 0.6666666666666667,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.1875,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.8125,
            "unclear_pct": 0.8125,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.017915600261889174,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9820843997381108,
            "unclear_qty_pct": 0.9820843997381108,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.017915600261889174,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9820843997381109,
            "unclear_notional_pct": 0.9820843997381109,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.4,
            "run_unclear_pct": 0.6,
            "avg_trade_size": 210.0125,
            "avg_run_notional": 332.04,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4,
            "na_confidence_pct": 0.6,
            "avg_feature_coverage": 0.64,
            "observable_run_pct": 0.4,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 1.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 1.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 1.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.7000000000000001,
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
          "trade_id": "BMLL-89",
          "timestamp": "2026-03-03T08:48:33.256400",
          "price": 0.23,
          "size": 1100.0,
          "notional": 253.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 631,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-88",
          "timestamp": "2026-03-03T08:48:33.256400",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 631,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-87",
          "timestamp": "2026-03-03T08:48:12.468100",
          "price": 0.23,
          "size": 8900.0,
          "notional": 2047.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 630,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-86",
          "timestamp": "2026-03-03T08:42:02.732400",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 630,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-85",
          "timestamp": "2026-03-03T08:25:03.031000",
          "price": 0.23,
          "size": 3100.0,
          "notional": 713.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-84",
          "timestamp": "2026-03-03T08:25:02.970700",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-83",
          "timestamp": "2026-03-03T08:25:02.940500",
          "price": 0.23,
          "size": 8100.0,
          "notional": 1863.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-82",
          "timestamp": "2026-03-03T08:25:02.940400",
          "price": 0.23,
          "size": 6200.0,
          "notional": 1426.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-81",
          "timestamp": "2026-03-03T08:25:02.849900",
          "price": 0.23,
          "size": 12500.0,
          "notional": 2875.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-80",
          "timestamp": "2026-03-03T08:25:02.849800",
          "price": 0.23,
          "size": 20000.0,
          "notional": 4600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-79",
          "timestamp": "2026-03-03T08:25:02.849800",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-78",
          "timestamp": "2026-03-03T08:13:42.444100",
          "price": 0.23,
          "size": 4100.0,
          "notional": 943.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-77",
          "timestamp": "2026-03-03T08:13:42.414000",
          "price": 0.23,
          "size": 95900.0,
          "notional": 22057.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-76",
          "timestamp": "2026-03-03T08:13:42.414000",
          "price": 0.23,
          "size": 4100.0,
          "notional": 943.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 629,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-75",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-74",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-73",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 15900.0,
          "notional": 3657.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-72",
          "timestamp": "2026-03-03T08:00:00.028000",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-71",
          "timestamp": "2026-03-03T07:56:47.115100",
          "price": 0.23,
          "size": 2000.0,
          "notional": 460.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-70",
          "timestamp": "2026-03-03T07:56:36.228500",
          "price": 0.23,
          "size": 1500.0,
          "notional": 345.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-69",
          "timestamp": "2026-03-03T07:52:06.021200",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-68",
          "timestamp": "2026-03-03T07:52:06.021200",
          "price": 0.23,
          "size": 4700.0,
          "notional": 1081.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-67",
          "timestamp": "2026-03-03T07:47:03.720800",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-66",
          "timestamp": "2026-03-03T07:47:03.720800",
          "price": 0.23,
          "size": 9700.0,
          "notional": 2231.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-65",
          "timestamp": "2026-03-03T07:32:10.448200",
          "price": 0.23,
          "size": 5300.0,
          "notional": 1219.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-64",
          "timestamp": "2026-03-03T07:32:10.418100",
          "price": 0.23,
          "size": 25000.0,
          "notional": 5750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-63",
          "timestamp": "2026-03-03T07:26:55.754300",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-62",
          "timestamp": "2026-03-03T07:10:36.001300",
          "price": 0.235,
          "size": 100.0,
          "notional": 23.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 628,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-61",
          "timestamp": "2026-03-03T07:09:00.033700",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 627,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-60",
          "timestamp": "2026-03-03T07:07:30.089300",
          "price": 0.23,
          "size": 6000.0,
          "notional": 1380.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 627,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
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
        "unclear": "Ambiguous + unobservable"
      }
    },
    "price_moving_trades": {
      "total_trades": 4427,
      "price_moving_trades": 486,
      "pct_price_moving": 10.97808899932234,
      "all_movers": {
        "count": 486,
        "avg_size": 3658.383744855967,
        "median_size": 772.75,
        "retail_count": 154,
        "mixed_count": 0,
        "institutional_count": 185,
        "ambiguous_count": 88,
        "unobservable_count": 59,
        "retail_pct": 31.68724279835391,
        "mixed_pct": 0.0,
        "instit_pct": 38.065843621399175,
        "unclear_pct": 30.246913580246915
      },
      "positive_movers": {
        "count": 242,
        "avg_size": 2283.2293388429753,
        "median_size": 26.0,
        "retail_count": 103,
        "mixed_count": 0,
        "institutional_count": 89,
        "ambiguous_count": 41,
        "unobservable_count": 9,
        "retail_pct": 42.561983471074385,
        "mixed_pct": 0.0,
        "instit_pct": 36.77685950413223,
        "unclear_pct": 20.661157024793386
      },
      "negative_movers": {
        "count": 244,
        "avg_size": 5022.266393442623,
        "median_size": 2325.0,
        "retail_count": 51,
        "mixed_count": 0,
        "institutional_count": 96,
        "ambiguous_count": 47,
        "unobservable_count": 50,
        "retail_pct": 20.901639344262296,
        "mixed_pct": 0.0,
        "instit_pct": 39.34426229508197,
        "unclear_pct": 39.75409836065574
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
        "n_days_short_data": 21,
        "window_days": 21
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
        "2W": {
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
            "avg_short_ratio": 0.0017833899415982315,
            "max_short_ratio": 0.014653168944735494,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": ""
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
            "avg_short_ratio": 0.0019135943047530368
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
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
            "avg_short_ratio": 0.0019135943047530368,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": 373.9344176011251
          }
        ],
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5132900,
            "close": 0.235,
            "return": -0.06000000000000005
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.009976720984369804,
            "short_vol": 30000,
            "total_vol": 3007000,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.014653168944735494,
            "short_vol": 37200,
            "total_vol": 2538700,
            "close": 0.25,
            "return": -0.05660377358490576
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0029329962073324904,
            "short_vol": 5800,
            "total_vol": 1977500,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.006881811349116873,
            "short_vol": 58600,
            "total_vol": 8515200,
            "close": 0.255,
            "return": -0.037735849056603765
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0030064912880081993,
            "short_vol": 44000,
            "total_vol": 14635000,
            "close": 0.265,
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
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0008358152750363119,
          "max_short_ratio": 0.12345679012345678,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003290042837570699,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "5DD",
          "avg_short_ratio": 0.004208011395139728,
          "max_short_ratio": 0.36517719568567025,
          "is_target": false
        },
        {
          "ticker": "BN2",
          "avg_short_ratio": 0.018959294993341726,
          "max_short_ratio": 0.2235388632255473,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 0.026722247493092,
          "continuous": 0.973277752506908,
          "closing": 0.0,
          "auctions": 0.026722247493092,
          "other": 0.0
        },
        "1W": {
          "opening": 0.024882734389585215,
          "continuous": 0.9674631033302439,
          "closing": 0.0029198241414317237,
          "auctions": 0.03253689666975609,
          "other": 0.0
        },
        "2W": {
          "opening": 0.0201909071038566,
          "continuous": 0.9725761782157931,
          "closing": 0.0023983352731633337,
          "auctions": 0.027423821784206926,
          "other": 0.0
        },
        "1M": {
          "opening": 0.012204947375973768,
          "continuous": 0.9531266579211911,
          "closing": 0.027616508942752634,
          "auctions": 0.04687334207880886,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.18509206124048044,
        "1W": 0.27209377289114717,
        "2W": 0.2671672326126267,
        "1M": 0.21127302606918585
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0134
        },
        {
          "time": "09:00",
          "avg_share": 0.119
        },
        {
          "time": "09:30",
          "avg_share": 0.1283
        },
        {
          "time": "10:00",
          "avg_share": 0.0477
        },
        {
          "time": "10:30",
          "avg_share": 0.0307
        },
        {
          "time": "11:00",
          "avg_share": 0.0216
        },
        {
          "time": "11:30",
          "avg_share": 0.0479
        },
        {
          "time": "12:00",
          "avg_share": 0.0022
        },
        {
          "time": "12:30",
          "avg_share": 0.0202
        },
        {
          "time": "13:00",
          "avg_share": 0.1314
        },
        {
          "time": "13:30",
          "avg_share": 0.0564
        },
        {
          "time": "14:00",
          "avg_share": 0.0997
        },
        {
          "time": "14:30",
          "avg_share": 0.0492
        },
        {
          "time": "15:00",
          "avg_share": 0.0471
        },
        {
          "time": "15:30",
          "avg_share": 0.0459
        },
        {
          "time": "16:00",
          "avg_share": 0.0446
        },
        {
          "time": "16:30",
          "avg_share": 0.0693
        },
        {
          "time": "17:00",
          "avg_share": 0.0254
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.35309313848275,
          "hhi": 0.19348770982256028,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.777414611097077,
          "hhi": 0.2506965832468597,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.676882066152416,
          "hhi": 0.3466068291973578,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.534201052699793,
          "hhi": 0.6549668152020773,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.312203994136908,
          "hhi": 0.5063002584193457,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.900694426359804,
          "hhi": 0.7835497488291402,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.7349585146742155,
          "hhi": 0.809816672410905,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BN2",
          "auctions_pct": 5.482314156854509,
          "hhi": 0.23237921763174313,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "5DD",
          "auctions_pct": 6.640253969571094,
          "hhi": 0.3692702444081968,
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
