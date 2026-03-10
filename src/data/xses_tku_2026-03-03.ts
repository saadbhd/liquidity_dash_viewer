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
      "marketCap": 278640000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 148281546.29999998,
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
      "marketCap": 71540079.87,
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
      "marketCap": 348352972.95,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 262770255.08999997,
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
          "variance_explained": 0.6127400592748997,
          "loadings": {
            "log_adv": 0.558785148815273,
            "log_trades": 0.51677660384672,
            "log_turnover": 0.5154940953681628,
            "neg_spread": 0.3907239735349782,
            "neg_amihud": 0.04797617456342943,
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
              "mean": 5270062.889928555,
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
              "mean": 0.00017582928372278793,
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
          "variance_explained": 0.5143333874667191,
          "loadings": {
            "log_adv": 0.5556152686732032,
            "log_trades": 0.5061795035212496,
            "log_turnover": 0.5157477036244449,
            "neg_spread": 0.3971857783840883,
            "neg_amihud": 0.09789776435776869,
            "neg_vol": -0.0416866264103148
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
              "mean": 4726056.305615341,
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
              "mean": 0.000288260846400275,
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
          "variance_explained": 0.5180646722904139,
          "loadings": {
            "log_adv": 0.5511327440914373,
            "log_trades": 0.4990970413990773,
            "log_turnover": 0.5016356296001088,
            "neg_spread": 0.414748384952415,
            "neg_amihud": 0.1118345743167366,
            "neg_vol": 0.10484913895397664
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
              "mean": 3690016.417927406,
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
              "mean": 0.00017401206703660977,
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
          "variance_explained": 0.5323174037645918,
          "loadings": {
            "log_adv": 0.5385132707436967,
            "log_trades": 0.48895955378657197,
            "log_turnover": 0.49375949369148137,
            "neg_spread": 0.4194843112734368,
            "neg_amihud": 0.09956569239746504,
            "neg_vol": 0.20308412019692254
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
              "mean": 3387755.9069706434,
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
              "mean": 0.000131501678012951,
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
        "liquidity": "Latest snapshot: volatility is unavailable for this period. Liquidity softened versus the 30d baseline, with ADV down 50.19% to S$258.7K and spread wider at 2.54% versus 2.41%; turnover also sits lower at 0.1972% versus 0.3495%, which means current trading.",
        "market_comparison": "Even with the recent slowdown, TKU still trades well above its comparators on activity, with S$258.7K ADV versus S$28.8K market median and S$8.0K sector and peer medians, plus 89 trades versus 12 market and 6 peer median. Cost is mixed: the 2.54% spread is."
      },
      "1w": {
        "liquidity": "Liquidity remains solid but has eased versus the 30d baseline. ADV is down 17.10% to S$430.6K and spread is 3.57% wider at 2.50% versus 2.41%, while turnover at 0.3020% stays below the 30d level of 0.3495%; this points to slightly weaker depth and higher.",
        "market_comparison": "Against the market and sector, TKU is a clear activity leader, with S$430.6K ADV versus S$25.1K market and S$5.8K sector medians, and 89 trades versus 10 market and 4 sector medians. Cost is acceptable but not peer-leading: spread is better than market at."
      },
      "2w": {
        "liquidity": "Liquidity is still healthy in trend context, but it is running below the 30d baseline. ADV is down 19.47% to S$418.3K and spread is 3.34% wider at 2.49% versus 2.41%, while turnover at 0.2934% also trails the 30d 0.3495%; that combination means less depth and.",
        "market_comparison": "TKU continues to stand out on activity, with S$418.3K ADV versus S$17.1K market and S$5.5K sector and peer medians, and 96.5 trades versus 7.5 market and 4.25 peer medians. Spread is still competitive versus the market and sector at 2.49% versus 2.51% and."
      },
      "30d": {
        "liquidity": "The 30d window shows TKU at its strongest recent liquidity level, with a score of 75.27 and rank 139/558. ADV is S$519.4K, turnover is 0.3495%, and trades are 131, while spread is 2.41%; this means the stock is consistently active and easier to trade than.",
        "market_comparison": "Versus the broader market and sector, TKU is materially more liquid, with S$519.4K ADV against S$15.5K market and S$15.0K sector medians, and 131 trades against 7 market and 6 sector medians. Spread is better than market and sector at 2.41% versus 2.52% and."
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
      "n_regimes": 3,
      "current_regime": 2,
      "current_regime_label": "Market-Led",
      "current_regime_probability": 0.9790628979434484,
      "current_driver_mix": {
        "market_share": {
          "median": 0.6144650461089618,
          "low": 0.6144650461089618,
          "high": 0.6144650461089618,
          "value_pct": 61.4,
          "range_collapsed": true,
          "display_value": "61.4%",
          "display_range": null,
          "display_text": "61.4%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
          "plain_english": "Market explains about 61.4% of price moves in the current state. This is a point estimate from 25 trading days."
        },
        "sector_share": {
          "median": 0.26286024471563535,
          "low": 0.26286024471563535,
          "high": 0.26286024471563535,
          "value_pct": 26.3,
          "range_collapsed": true,
          "display_value": "26.3%",
          "display_range": null,
          "display_text": "26.3%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
          "plain_english": "Sector explains about 26.3% of price moves in the current state. This is a point estimate from 25 trading days."
        },
        "company_share": {
          "median": 0.12267470917540278,
          "low": 0.12267470917540278,
          "high": 0.12267470917540278,
          "value_pct": 12.3,
          "range_collapsed": true,
          "display_value": "12.3%",
          "display_range": null,
          "display_text": "12.3%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
          "plain_english": "Company-specific explains about 12.3% of price moves in the current state. This is a point estimate from 25 trading days."
        },
        "basis": "current_state"
      },
      "reporting_window_driver_mix": {
        "market_share": {
          "median": 0.4621756420316752,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "46.2%",
          "display_range": null,
          "display_text": "46.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "share_pct",
          "value_pct": 46.2,
          "plain_english": "Market explains about 46.2% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.19284508149841909,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.3%",
          "display_range": null,
          "display_text": "19.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "share_pct",
          "value_pct": 19.3,
          "plain_english": "Sector explains about 19.3% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3449792764699056,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.5%",
          "display_range": null,
          "display_text": "34.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "share_pct",
          "value_pct": 34.5,
          "plain_english": "Company-specific explains about 34.5% of price moves in the current state."
        },
        "basis": "reporting_window"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.8052494135420396,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.81",
          "display_range": null,
          "display_text": "2.81",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.81% stock move in the same direction in this state.",
          "value_num": 2.81
        },
        "beta_sector": {
          "median": -1.5517092123477279,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.55",
          "display_range": null,
          "display_text": "-1.55",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state.",
          "value_num": -1.55
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "posterior_source": "deterministic_markov_fallback",
        "intervals_collapsed": true,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 25 trading days versus the 252-day target."
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
            "share_market": 0.4621756420316752,
            "share_sector": 0.19284508149841909,
            "share_idio": 0.3449792764699056
          },
          "regression": {
            "r_squared": null
          }
        }
      },
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": 0,
          "regime_label": "Mixed, mostly company-driven (More Volatile)",
          "dominant_share": {
            "median": 0.5679018487788356,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.8%",
            "display_range": null,
            "display_text": "56.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 56.8,
            "plain_english": "Company-specific explains about 56.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32585174367018727,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Market explains about 32.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10624640755097713,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Sector explains about 10.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5679018487788356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.8%",
              "display_range": null,
              "display_text": "56.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 56.8,
              "plain_english": "Company-specific explains about 56.8% of price moves in the current state."
            }
          },
          "summary": "January 2026: Company-specific led at 56.8%; market 32.6%, sector 10.6%, company-specific 56.8%. Based on 5 trading days."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": 0,
          "regime_label": "Mixed, mostly company-driven (More Volatile)",
          "dominant_share": {
            "median": 0.470902015574664,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Market explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.470902015574664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18499540326386807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.5%",
              "display_range": null,
              "display_text": "18.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 18.5,
              "plain_english": "Sector explains about 18.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3441025811614679,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Company-specific explains about 34.4% of price moves in the current state."
            }
          },
          "summary": "February 2026: Market led at 47.1%; market 47.1%, sector 18.5%, company-specific 34.4%. Based on 18 trading days."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-03",
          "n_obs": 2,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": 2,
          "regime_label": "Market-Led",
          "dominant_share": {
            "median": 0.5140977597781343,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.4%",
            "display_range": null,
            "display_text": "51.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
            "kind": "share_pct",
            "value_pct": 51.4,
            "plain_english": "Market explains about 51.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5140977597781343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Market explains about 51.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.341479166596512,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.1%",
              "display_range": null,
              "display_text": "34.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
              "kind": "share_pct",
              "value_pct": 34.1,
              "plain_english": "Sector explains about 34.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14442307362535375,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.4%",
              "display_range": null,
              "display_text": "14.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
              "kind": "share_pct",
              "value_pct": 14.4,
              "plain_english": "Company-specific explains about 14.4% of price moves in the current state."
            }
          },
          "summary": "March 2026: Market led at 51.4%; market 51.4%, sector 34.1%, company-specific 14.4%. Based on 2 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Mixed, mostly company-driven (More Volatile)",
          "pct_time": 0.5378637688600828,
          "dominant_driver": "company",
          "dominant_driver_probability": null,
          "expected_duration_days": 1.9794332340823484,
          "current_probability": 0.02093710205655179,
          "n_days_effective": 13.44659422150207,
          "shares": {
            "market": {
              "median": 0.3150197943400304,
              "low": 0.3150197943400304,
              "high": 0.3150197943400304,
              "value_pct": 31.5,
              "range_collapsed": true,
              "display_value": "31.5%",
              "display_range": null,
              "display_text": "31.5%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Market explains about 31.5% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "sector": {
              "median": 0.25640013327206,
              "low": 0.25640013327206,
              "high": 0.25640013327206,
              "value_pct": 25.6,
              "range_collapsed": true,
              "display_value": "25.6%",
              "display_range": null,
              "display_text": "25.6%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Sector explains about 25.6% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "company": {
              "median": 0.4285800723879095,
              "low": 0.4285800723879095,
              "high": 0.4285800723879095,
              "value_pct": 42.9,
              "range_collapsed": true,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Company-specific explains about 42.9% of price moves in the current state. This is a point estimate from 25 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 3.404345156542199,
              "low": 3.404345156542199,
              "high": 3.404345156542199,
              "value_num": 3.4,
              "range_collapsed": true,
              "display_value": "3.40",
              "display_range": null,
              "display_text": "3.40",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "Very high",
              "plain_english": "Very high market link: a 1% market move has lined up with about a 3.40% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
            },
            "beta_sector": {
              "median": 2.342799533233813,
              "low": 2.342799533233813,
              "high": 2.342799533233813,
              "value_num": 2.34,
              "range_collapsed": true,
              "display_value": "2.34",
              "display_range": null,
              "display_text": "2.34",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "High",
              "plain_english": "High sector link: a 1% sector move has lined up with about a 2.34% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
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
            "median": 0.032791384334876786,
            "low": 0.032791384334876786,
            "high": 0.032791384334876786
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          },
          "dominant_driver_label": "Company-specific",
          "current_probability_display": 2.1
        },
        {
          "id": 1,
          "label": "Mixed, mostly company-driven (Calmer)",
          "pct_time": 0.27999999999998904,
          "dominant_driver": "company",
          "dominant_driver_probability": null,
          "expected_duration_days": 1.094392046397348,
          "current_probability": 0.0,
          "n_days_effective": 6.999999999999726,
          "shares": {
            "market": {
              "median": 0.45704208564603344,
              "low": 0.45704208564603344,
              "high": 0.45704208564603344,
              "value_pct": 45.7,
              "range_collapsed": true,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Market explains about 45.7% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "sector": {
              "median": 0.05927486650756194,
              "low": 0.05927486650756194,
              "high": 0.05927486650756194,
              "value_pct": 5.9,
              "range_collapsed": true,
              "display_value": "5.9%",
              "display_range": null,
              "display_text": "5.9%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Sector explains about 5.9% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "company": {
              "median": 0.48368304784640465,
              "low": 0.48368304784640465,
              "high": 0.48368304784640465,
              "value_pct": 48.4,
              "range_collapsed": true,
              "display_value": "48.4%",
              "display_range": null,
              "display_text": "48.4%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Company-specific explains about 48.4% of price moves in the current state. This is a point estimate from 25 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.385624646693455e-14,
              "low": 2.385624646693455e-14,
              "high": 2.385624646693455e-14,
              "value_num": 0.0,
              "range_collapsed": true,
              "display_value": "0.00",
              "display_range": null,
              "display_text": "0.00",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "Weak",
              "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
            },
            "beta_sector": {
              "median": -5.265490676744324e-15,
              "low": -5.265490676744324e-15,
              "high": -5.265490676744324e-15,
              "value_num": -0.0,
              "range_collapsed": true,
              "display_value": "-0.00",
              "display_range": null,
              "display_text": "-0.00",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "Weak",
              "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the opposite direction in this state. Shown as a point estimate because only 25 trading days are available."
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
          },
          "dominant_driver_label": "Company-specific",
          "current_probability_display": 0.0
        },
        {
          "id": 2,
          "label": "Market-Led",
          "pct_time": 0.1821362311399283,
          "dominant_driver": "market",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.2570917129521302,
          "current_probability": 0.9790628979434484,
          "n_days_effective": 4.553405778498208,
          "shares": {
            "market": {
              "median": 0.6144650461089618,
              "low": 0.6144650461089618,
              "high": 0.6144650461089618,
              "value_pct": 61.4,
              "range_collapsed": true,
              "display_value": "61.4%",
              "display_range": null,
              "display_text": "61.4%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Market explains about 61.4% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "sector": {
              "median": 0.26286024471563535,
              "low": 0.26286024471563535,
              "high": 0.26286024471563535,
              "value_pct": 26.3,
              "range_collapsed": true,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Sector explains about 26.3% of price moves in the current state. This is a point estimate from 25 trading days."
            },
            "company": {
              "median": 0.12267470917540278,
              "low": 0.12267470917540278,
              "high": 0.12267470917540278,
              "value_pct": 12.3,
              "range_collapsed": true,
              "display_value": "12.3%",
              "display_range": null,
              "display_text": "12.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "plain_english": "Company-specific explains about 12.3% of price moves in the current state. This is a point estimate from 25 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.8052494135420396,
              "low": 2.8052494135420396,
              "high": 2.8052494135420396,
              "value_num": 2.81,
              "range_collapsed": true,
              "display_value": "2.81",
              "display_range": null,
              "display_text": "2.81",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "High",
              "plain_english": "High market link: a 1% market move has lined up with about a 2.81% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
            },
            "beta_sector": {
              "median": -1.5517092123477279,
              "low": -1.5517092123477279,
              "high": -1.5517092123477279,
              "value_num": -1.55,
              "range_collapsed": true,
              "display_value": "-1.55",
              "display_range": null,
              "display_text": "-1.55",
              "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
              "strength_label": "High",
              "plain_english": "High sector link: a 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state. Shown as a point estimate because only 25 trading days are available."
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
            "median": 0.006616220650171933,
            "low": 0.006616220650171933,
            "high": 0.006616220650171933
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          },
          "dominant_driver_label": "Market",
          "current_probability_display": 97.9
        }
      ],
      "transitions": {
        "mean": [
          [
            0.4438198224830437,
            0.2616709426012612,
            0.294509234915695
          ],
          [
            0.679478363513139,
            0.20257418344967026,
            0.11794745303719092
          ],
          [
            0.1534358463317694,
            0.5434111504247688,
            0.3031530032434616
          ]
        ],
        "low": [
          [
            0.31044297635591817,
            0.12251671298481287,
            0.16700113907044062
          ],
          [
            0.5001072983351506,
            0.06342246662415073,
            0.008607670909091574
          ],
          [
            0.025348176814709477,
            0.3094235278187971,
            0.10608363039463992
          ]
        ],
        "high": [
          [
            0.5800924249223927,
            0.39738414756472307,
            0.4208681673150318
          ],
          [
            0.8468513796503194,
            0.35034238054143924,
            0.28077987519638875
          ],
          [
            0.31325005634018616,
            0.7735355997817969,
            0.4821086527194723
          ]
        ],
        "counts": [
          [
            6.0,
            3.0,
            4.0
          ],
          [
            6.0,
            1.0,
            0.0
          ],
          [
            0.0,
            3.0,
            1.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 25,
        "reporting_window_days": 25,
        "regime_inference": "hybrid_markov_bayesian_regression",
        "uncertainty_engine": "deterministic_markov_fallback",
        "random_seed": 42,
        "lead_horizon_days": 1,
        "distribution": "student_t",
        "history_limited": true,
        "current_driver_mix_basis": "active_regime",
        "reporting_window_driver_mix_basis": "regime_weighted_recent_average",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "2.81",
        "sector_link_display": "-1.55",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.81% stock move in the same direction in this state. This is a point estimate from 25 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state. This is a point estimate from 25 trading days.",
        "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
        "history_limited_note": "Read is based on 25 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Market-Led",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 61.4,
        "driver_share_display": "61.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 97.9,
        "display_confidence_pct": 97.9,
        "confidence_note": "Based on 25 trading days versus the 252-day target.",
        "history_days": 25,
        "history_limited": true,
        "state_term": "state",
        "stay_probability": 0.3031530032434616,
        "effective_days": 4.6,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: next-day stay probability is 30% and the typical run length is about 1.3 days. It is inferred from about 4.6 effective trading days in this state.",
        "expected_duration_days": 1.3
      },
      "display_notes": {
        "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hybrid_markov_regression_pymc",
      "n_regimes": 3,
      "regimes": [
        {
          "id": 0,
          "label": "Mixed, mostly company-driven (More Volatile)",
          "pct_time": 0.5378637688600828,
          "dominant_driver": "company",
          "dominant_driver_probability": null,
          "expected_duration_days": 1.9794332340823484,
          "current_probability": 0.02093710205655179,
          "n_days_effective": 13.44659422150207,
          "shares": {
            "market": {
              "median": 0.3150197943400304,
              "low": 0.3150197943400304,
              "high": 0.3150197943400304
            },
            "sector": {
              "median": 0.25640013327206,
              "low": 0.25640013327206,
              "high": 0.25640013327206
            },
            "company": {
              "median": 0.4285800723879095,
              "low": 0.4285800723879095,
              "high": 0.4285800723879095
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 3.404345156542199,
              "low": 3.404345156542199,
              "high": 3.404345156542199
            },
            "beta_sector": {
              "median": 2.342799533233813,
              "low": 2.342799533233813,
              "high": 2.342799533233813
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
            "median": 0.032791384334876786,
            "low": 0.032791384334876786,
            "high": 0.032791384334876786
          },
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": null
          }
        },
        {
          "id": 1,
          "label": "Mixed, mostly company-driven (Calmer)",
          "pct_time": 0.27999999999998904,
          "dominant_driver": "company",
          "dominant_driver_probability": null,
          "expected_duration_days": 1.094392046397348,
          "current_probability": 0.0,
          "n_days_effective": 6.999999999999726,
          "shares": {
            "market": {
              "median": 0.45704208564603344,
              "low": 0.45704208564603344,
              "high": 0.45704208564603344
            },
            "sector": {
              "median": 0.05927486650756194,
              "low": 0.05927486650756194,
              "high": 0.05927486650756194
            },
            "company": {
              "median": 0.48368304784640465,
              "low": 0.48368304784640465,
              "high": 0.48368304784640465
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.385624646693455e-14,
              "low": 2.385624646693455e-14,
              "high": 2.385624646693455e-14
            },
            "beta_sector": {
              "median": -5.265490676744324e-15,
              "low": -5.265490676744324e-15,
              "high": -5.265490676744324e-15
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
          "id": 2,
          "label": "Market-Led",
          "pct_time": 0.1821362311399283,
          "dominant_driver": "market",
          "dominant_driver_probability": 1.0,
          "expected_duration_days": 1.2570917129521302,
          "current_probability": 0.9790628979434484,
          "n_days_effective": 4.553405778498208,
          "shares": {
            "market": {
              "median": 0.6144650461089618,
              "low": 0.6144650461089618,
              "high": 0.6144650461089618
            },
            "sector": {
              "median": 0.26286024471563535,
              "low": 0.26286024471563535,
              "high": 0.26286024471563535
            },
            "company": {
              "median": 0.12267470917540278,
              "low": 0.12267470917540278,
              "high": 0.12267470917540278
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 2.8052494135420396,
              "low": 2.8052494135420396,
              "high": 2.8052494135420396
            },
            "beta_sector": {
              "median": -1.5517092123477279,
              "low": -1.5517092123477279,
              "high": -1.5517092123477279
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
            "median": 0.006616220650171933,
            "low": 0.006616220650171933,
            "high": 0.006616220650171933
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
          0.4438198224830437,
          0.2616709426012612,
          0.294509234915695
        ],
        [
          0.679478363513139,
          0.20257418344967026,
          0.11794745303719092
        ],
        [
          0.1534358463317694,
          0.5434111504247688,
          0.3031530032434616
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.4438198224830437,
            0.2616709426012612,
            0.294509234915695
          ],
          [
            0.679478363513139,
            0.20257418344967026,
            0.11794745303719092
          ],
          [
            0.1534358463317694,
            0.5434111504247688,
            0.3031530032434616
          ]
        ],
        "low": [
          [
            0.31044297635591817,
            0.12251671298481287,
            0.16700113907044062
          ],
          [
            0.5001072983351506,
            0.06342246662415073,
            0.008607670909091574
          ],
          [
            0.025348176814709477,
            0.3094235278187971,
            0.10608363039463992
          ]
        ],
        "high": [
          [
            0.5800924249223927,
            0.39738414756472307,
            0.4208681673150318
          ],
          [
            0.8468513796503194,
            0.35034238054143924,
            0.28077987519638875
          ],
          [
            0.31325005634018616,
            0.7735355997817969,
            0.4821086527194723
          ]
        ],
        "counts": [
          [
            6.0,
            3.0,
            4.0
          ],
          [
            6.0,
            1.0,
            0.0
          ],
          [
            0.0,
            3.0,
            1.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Market-Led",
      "current_regime_probability": 0.9790628979434484
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400",
        "dot": "bg-emerald-400"
      },
      "liq_section": {
        "text": "Liquidity score: 75.3% — MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "drivers": {
        "text": "High, limited history",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "intraday": {
        "text": "Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Low short interest",
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
      "action_plan": "border-emerald-500/20",
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
    "exec_subtitle": "Liquidity is strong versus peers, but recent activity slowed and trading cost moved higher than the 30d baseline.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market-Led is active now, with market share at 61.4% and a high-confidence read based on limited 25-day history.",
    "drivers_strip": [
      {
        "title": "Current Driver",
        "text": "Market-Led is the current pattern: market explains 61.4% of moves now, versus 26.3% for sector and 12.3% company-specific. Confidence is high, but only 25 trading days are available."
      },
      {
        "title": "External Links",
        "text": "Market link is strong: a 1% market move has lined up with about a 2.81% stock move in the same direction in this state. Sector link is also strong but opposite: a 1% sector move has lined up with about a 1.55% stock move in the opposite direction."
      },
      {
        "title": "Read Reliability",
        "text": "The read uses 25 trading days and about 4.6 effective days in this state, so it is informative but not deep. This pattern is short-lived: next-day stay probability is 30% and typical duration is about 1.3 days."
      }
    ],
    "drivers_pie_title": "Current Driver Mix",
    "drivers_pie_note": "Current state is Market-Led: market 61.4%, secto%, company-specific 12.3%. The recent aggregate mix was less market-heavy at 46.2% market, 19.3% sector, and 34.5% company-specific.",
    "lead_lag_title": "Who Tends to Lead?",
    "lead_lag_note": "No stable external lead is present in any state. Market or sector moves are linked to the stock, but the data does not show a consistent one-day leader.",
    "rolling_title": "Driver Mix Over Time",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "The mix shifted from company-specific in January to market-led in February and stayed market-led in early March. March is only 2 trading days, so that latest reading is early.",
    "drivers_bottom_line": "The stock is currently being driven more by broad market moves than by company news, but the pattern is short-lived and the history is limited.",
    "drivers_wtd_title": "Key Takeaways",
    "drivers_wtd_list": [
      "Current conditions are market-led: market share is 61.4%, well above sector at 26.3% and company-specific at 12.3%, so broad market moves are the main explanation for recent price changes.",
      "The pattern has changed quickly month to month: January was company-specific at 56.8%, February turned market-led at 47.1%, and March remains market-led at 51.4% so far, based on only 2 trading days."
    ],
    "regime_title": "Price Driver States",
    "regime_subtitle": "Three states appear in the data, with company-driven conditions most common overall but Market-Led active now.",
    "regime_badge_text": "Market-Led",
    "regime_pie_title": "Time Spent in Each State",
    "transition_title": "How States Change",
    "transition_cols": [
      "From \\ To",
      "Mixed / Company-Driven",
      "Market-Led"
    ],
    "transition_note_template": "State changes are fairly frequent. Market-Led stays in place 30% of the next day, while the calmer company-driven state is more persistent at about 68%.",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "30d liquidity is strong for a small cap, but recent weeks show lower notional volume and slightly wider spread than the 30d baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "TKU leads on trading activity versus market, sector, and peers, while spread is better than market and sector but consistently worse than peers.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Short-term performance is weak versus all comparison groups.",
    "perf_insight": "TKU fell 9.8% over 1 week and 30 days, versus market declines of 2.1% and 0.3%, sector declines of 2.2% and 4.4%, and peer declines of 1.3% and 1.0%. Over 2 weeks, the stock was flat while market, sector, and peers were down 0.4%, 2.1%, and 1.0%, so the.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 3, 2026 (27 trading days • 8,547 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Based on top 10 displayed levels per side, the ask side is about 2.9x the bid side and only 7 price levels are visible. That means visible buying support is thin relative to available sell interest.",
    "peer_capacity_title": "Historical Trade Size Capacity",
    "peer_capacity_note": "History is limited to Jan 22, 2026 to Mar 3, 2026, covering 27 trading days and 8,547 trades, so stress tests reflect a short post-listing window rather than a full year.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Main takeaway: trading conditions look expensive for immediate selling. The spread is wider than the day’s 2.13% median, and visible bid depth remains materially smaller than ask depth.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclear.",
    "trader_retail_threshold": "Retail-like",
    "trader_mixed_threshold": "Mixed",
    "trader_instit_threshold": "Institution-like",
    "peer_trader_title": "How Trader Mix Compares to Peers",
    "peer_trader_subtitle": "TKU is more observable than several peers, but still has a meaningful unclear share.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Only a minority of trades changed price, so most activity provided liquidity rather than moving the market.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading is concentrated in the continuous session, with limited auction activity and a midday peak.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Most trading sits in the continuous session across all reported periods; auction activity is small but higher in the 1M view than in 1D, 1W, and 2W.",
    "hhi_title": "Trading Concentration (concentration score)",
    "hhi_note_template": "Higher concentration score means turnover is packed into fewer parts of the day, making liquidity less even.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak activity was at 13:00, when 13.1% of volume traded, showing activity clusters around a narrow midday window.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "concentration score",
      "Interpretation"
    ],
    "peers_hhi_note": "TKU's concentration score is lower than most listed peers shown here, indicating a more even trading day than several comparables.",
    "intraday_insight": "Most trading happens in continuous trading, with only 4.7% in auctions. The busiest point is 13:00, so liquidity is less even around that window. TKU's concentration score is lower than most peers, meaning its day is relatively more balanced.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is minimal and falling, with days to cover near zero; the stock is not a short-selling outlier versus peers.",
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
          "title": "Liquidity Score",
          "body": "Overall liquidity score based on trading activity and trading cost over the primary 30d window."
        },
        "value": "75.3",
        "suffix": "/100",
        "bar_pct": 75.3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 139/558 • Well above peer median score of 47.0",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost",
          "body": "Spread is the gap between buy and sell prices; higher values mean higher trading cost."
        },
        "value": "2.41",
        "suffix": "%",
        "bar_pct": 2.41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "1.17 ticks, where 1 tick = minimum price step • Better than peers on ticks (1.35) but wider than peer spread of 2.18% and 30d recent baseline worsened by 3.57% in 1w",
        "interpretation": {
          "text": "Mixed",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily traded value in local currency over the primary 30d window."
        },
        "value": "S$519K",
        "suffix": "",
        "bar_pct": 100,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "About 34.6x peer median of S$15.0K • Recent slowdown: 1w ADV is 17.1% below the 30d window",
        "interpretation": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Price Drivers",
          "body": "Shows whether recent price moves are driven more by the company, sector, or broad market."
        },
        "value": "61.4",
        "suffix": "market",
        "bar_pct": 61.4,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market-led trading is dominant in the last 25 trading days, so price moves are currently shaped more by broad market conditions than company factors",
        "interpretation": {
          "text": "Market-led",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is strong for a small-cap name. TKU scores 75.3 and ranks 139/558, with S$519K ADV versus a peer median of S$15.0K, which supports better capacity for regular trading than most direct comparators.",
      "Recent trading softened and costs worsened versus the 30d window. ADV fell 17.1% over 1w and 50.2% in 1d, while spread widened 3.57% in 1w and 5.39% in 1d, indicating less efficient trading conditions near term.",
      "Trading is currently market-led rather than company-led. The market accounts for 61.4% of price movement based on 25 trading days, which means near-term share moves may reflect broader market swings more than company-specific developments."
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "perf_badge": "Context",
    "liq_tiles": [
      {
        "title": "Liquidity Score",
        "value": "75.3%",
        "sub": "30d rank 139/558; down 3.33% in 1w and 2w, down 7.14% in 1d vs 30d",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$519.4K ADV",
        "sub": "30d ADV is 3355.71% above peer median S$15.0K; latest 1d snapshot slowed to S$258.7K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.41%",
        "sub": "30d spread is 1.17 ticks vs peers at 1.35 ticks, but 10.53% wider than peer median 2.18%",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Main message: TKU is liquid for its size because trading activity is far above market, sector, and peers across all reported windows. The softer point is trend direction: versus the 30d baseline, ADV is down 17.10% in 1w, 19.47% in 2w, and 50.19% in the.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.23",
        "note": "Current reference price from the latest displayed book.",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.35%",
        "note": "Wider than the intraday median of 2.13%, indicating higher immediate transaction cost.",
        "color": "text-red-400"
      },
      {
        "title": "Depth",
        "value": "298,450 / 857,210",
        "note": "Top-10 bid/ask depth; bid depth is only 34.82% of ask depth, so sell-side pressure would meet limited visible support.",
        "color": "text-red-400"
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
      "concentration score",
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
      "overall": "Market moves dominate now: the active Market-Led state assigns 61.4% to market, versus 26.3% sector and 12.3% company-specific. That is more externally driven than the recent aggregate mix, where company-specific influence was still 34.5%, so the stock is.",
      "beta": "External links are strong in the current state. A 1% market move has lined up with about a 2.81% stock move in the same direction, while a 1% sector move has lined up with about a 1.55% move in the opposite direction, which means broad market sentiment.",
      "rolling_change": "The mix has rotated quickly. January was mainly company-specific at 56.8% on 5 trading days, February shifted to market-led at 47.1% on 18 days, and early March remains market-led at 51.4% with sector influence rising to 34.1%, but that March read is based on.",
      "interpretation": "Moderate"
    },
    "regime": {
      "overall": "Company-driven states have been more common overall, accounting for 53.8% in the more volatile version and 28.0% in the calmer version, while Market-Led has appeared 18.2% of the time. That means the current market-led pattern is real, but not the stock's.",
      "current": "Current regime is Market-Led with a high-confidence read, but history is limited to 25 trading days. It looks changeable rather than sticky: next-day stay probability is 30% and expected duration is about 1.3 days, based on about 4.6 effective days in this.",
      "transitions": "Market-Led is not sticky: it stays in place only 30.3% of the next day and most often shifts to the calmer company-driven state at 54.3%. The calmer company-driven state is the stickiest pattern, with a 67.9% stay probability, while the more volatile.",
      "trading_implications": "The states differ mainly in who dominates the stock. In the two company-driven states, company-specific factors account for 42.9% to 48.4% of moves, while in Market-Led the market share rises to 61.4%; the 'calmer' and 'more volatile' labels only separate two."
    },
    "liquidity": {
      "overall": "TKU's overall liquidity is good in the 30d primary window, with a 75.27 score, rank 139/558, S$519.4K ADV, 131 trades, and 0.3495% turnover. The recent pattern is weaker than that baseline, as ADV fell to S$430.6K in 1w, S$418.3K in 2w, and S$258.7K in 1d.",
      "strengths": [
        "Activity is consistently high for the peer set: 30d ADV is S$519.4K versus peer median S$15.0K, and 30d trades are 131 versus 6 for peers, which supports reliable day-to-day tradability.",
        "Spread remains better than the broader market and sector in the 30d window at 2.41% versus 2.52% market and 2.80% sector, so cost is competitive in the wider listed universe.",
        "Tick-based trading stays near one tick across periods, with 30d spread at 1.17 ticks and 1d at 1.19 ticks, which shows the order book is still functioning efficiently even when the percentage spread looks elevated."
      ],
      "concerns": [
        "Recent slowdown is clear versus the 30d baseline: ADV is down 50.19% in 1d, 17.10% in 1w, and 19.47% in 2w, which indicates lighter near-term participation.",
        "Trading cost has deteriorated in the shorter windows, with spread 5.39% wider in 1d, 3.57% wider in 1w, and 3.34% wider in 2w versus 30d; that raises friction even though activity remains high.",
        "Peer-relative spread is a persistent weak spot: 30d spread is 2.41% versus peer median 2.18%, 2w is 2.49% versus 2.36%, 1w is 2.50% versus 2.46%, and 1d is 2.54% versus 2.01%."
      ],
      "peer_context": "TKU is a liquidity leader on volume and trade count but not on spread. In the 30d window, ADV is 3355.71% above peers and trades are 131 versus a 6 trade peer median, but spread is 10.53% wider than peers at 2.41% versus 2.18%; that means access is strong."
    },
    "market_comparison": {
      "adv": "TKU is well above normal market activity levels in every reported window, which is the clearest sign of strong liquidity for a small cap. In the 30d primary period, ADV is S$519.4K and remains high even in the latest 1d snapshot at S$258.7K.",
      "spread": "Spread is competitive versus the market and sector, but consistently worse than peers, so trading cost is acceptable in the broad universe without being peer-leading. The 30d spread is 2.41%, and recent windows are slightly worse at 2.49% to 2.54%.",
      "volatility": "Where available, TKU's price movement is much higher than market, sector, and peers, which can make trading conditions less stable even when volume is strong. Volatility is unavailable in the latest 1d snapshot, so only the longer windows can be assessed.",
      "trades": "Trade count is a major strength and confirms that liquidity is broad-based, not driven by very few prints. In the 30d window, TKU records 131 trades, and even in 1d and 1w it holds 89 trades."
    },
    "performance": {
      "overall": "Main point: TKU has lagged badly over 1 week and 30 days, down 9.8% in both periods versus peers down about 1.3% and 1.0%. That gap points to weaker company-specific confidence, not just a sector or market move.",
      "conclusion": "The trajectory is mixed but skewed negative: flat over 2 weeks while comparators fell suggests brief relative stability, yet the repeated 9.8% drop over 1 week and 30 days shows confidence remains fragile. For a small-cap S$125.5M company, that level of."
    },
    "execution": {
      "overall": "Weak",
      "concern": "Current trading conditions look costly and shallow for immediate selling. The spread is 4.35%, above the 2.13% intraday median, and top-10 bid depth of 298,450 is well below ask depth of 857,210.",
      "peer_context": "Peer comparison is unavailable in the provided data. Based on this stock alone, the short trading history and visible book imbalance suggest elevated execution risk relative to a more mature, deeper name."
    },
    "trader_composition": {
      "overall": "TKU looks retail-led by trading pattern, but the money flow is more institution-like. In the 30d view, retail-like activity is 27.7% of trades and 58.0% of runs, yet only 8.9% of notional, while institution-like flow is 34.5% of trades and 50.1% of notional.",
      "retail_heavy": "Retail-like participation has been stable by trade count at 27.6% in Jan, 27.8% in Feb, and 27.5% in Mar, but its notional share stayed small at 8.3%, 9.4%, and 4.6%. That means smaller tickets are persistent, while larger value traded is coming from.",
      "institutional_gap": "Institution-like flow weakened from 62.4% of notional in Jan to 44.6% in Feb, then rebounded to 69.7% in Mar; unclear notional rose from 17.7% to 27.1% before dropping to 9.1%. That points to a mixed trend, with February less cleanly observable and March.",
      "peer_comparison": "Against peers, TKU has a lower unclear share than names like LVR at 37.9%, U77 at 37.5%, and 532 at 96.4%, but it is not the cleanest read. TKU's 24.0% unclear notional and 4.1% high-confidence runs mean the signal is usable but not strong."
    },
    "price_moving": {
      "overall": "Only 11.2% of trades moved price, with 472 price-moving trades out of 4,232 total. That means nearly 9 in 10 trades did not shift the quote, so observed price formation comes from a relatively small subset of activity.",
      "interpretation": "Weak",
      "asymmetry": "Positive and negative movers were balanced in count, at 235 versus 237, so direction was not one-sided. The reported trader split on movers is unreliable because the source percentages are not interpretable, so there is no clean read on whether retail-like."
    },
    "intraday": {
      "overall": "Trading is overwhelmingly in the continuous session at 95.3%, with 1.2% at the open and 2.8% at the close; auctions are 4.7% in total. Activity peaks at 13:00 with 13.1% of volume, so liquidity clusters around a narrow midday period.",
      "hhi_interpretation": "The 1M concentration score is 0.211, which indicates liquidity is somewhat clustered rather than evenly spread through the day. Recent periods were less even at 0.272 in 1W and 0.267 in 2W, while 1D improved to 0.185, so day-to-day conditions are not fully.",
      "best_times": "The day is most balanced outside the peak cluster, because 13:00 alone accounts for 13.1% of volume. Open and close activity remain small at 1.2% and 2.8% in 1M, so the main liquidity risk is concentration around specific continuous-session windows rather.",
      "peer_ranking": "TKU's peer concentration score of 0.193 is lower than ITS at 0.251, LVR at 0.347, U77 at 0.506, NXR at 0.655, and 532 at 0.784, indicating a more even trading day than most peers shown. That relative advantage is tempered by auction activity still measuring."
    },
    "short_selling": {
      "overall": "Main point: short pressure is very low. Over 1M, average short ratio was 0.18% with a 1.47% max, and days to cover stayed near zero, so any short position appears easy to unwind and not a clear overhang on the stock.",
      "level": "Short selling is low relative to trading. The 1W and 2W average short ratio were both near zero, and 1M remained low at 0.18%, which signals limited negative positioning in a small-cap name.",
      "correlation": "Lead/lag test is unavailable. With 21 days of coverage and short ratios near zero in 1W and 2W, there is not enough evidence here to link short activity with subsequent returns.",
      "trend": "Short interest is decreasing sharply. Monthly short ratio moved from 0.91% in 2026-01 to 0.19% in 2026-02 and near zero in 2026-03, a 100% month-on-month unwind, which points to shorts covering rather than building; the 1M max spike of 1.47% looks isolated."
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
          "mean": 3387755.9069706434,
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
          "mean": 0.000131501678012951,
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
      "share_market": 0.6144650461089618,
      "share_sector": 0.26286024471563535,
      "share_idio": 0.12267470917540278,
      "beta_market": 2.8052494135420396,
      "beta_sector": -1.5517092123477279,
      "driver_model": {
        "valid": true,
        "model_method": "hybrid_markov_regression_pymc",
        "estimation_window_days": 25,
        "reporting_window_days": 25,
        "available_history_days": 25,
        "n_regimes": 3,
        "current_regime": 2,
        "current_regime_label": "Market-Led",
        "current_regime_probability": 0.9790628979434484,
        "current_driver_mix": {
          "market_share": {
            "median": 0.6144650461089618,
            "low": 0.6144650461089618,
            "high": 0.6144650461089618,
            "value_pct": 61.4,
            "range_collapsed": true,
            "display_value": "61.4%",
            "display_range": null,
            "display_text": "61.4%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
            "plain_english": "Market explains about 61.4% of price moves in the current state. This is a point estimate from 25 trading days."
          },
          "sector_share": {
            "median": 0.26286024471563535,
            "low": 0.26286024471563535,
            "high": 0.26286024471563535,
            "value_pct": 26.3,
            "range_collapsed": true,
            "display_value": "26.3%",
            "display_range": null,
            "display_text": "26.3%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
            "plain_english": "Sector explains about 26.3% of price moves in the current state. This is a point estimate from 25 trading days."
          },
          "company_share": {
            "median": 0.12267470917540278,
            "low": 0.12267470917540278,
            "high": 0.12267470917540278,
            "value_pct": 12.3,
            "range_collapsed": true,
            "display_value": "12.3%",
            "display_range": null,
            "display_text": "12.3%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
            "plain_english": "Company-specific explains about 12.3% of price moves in the current state. This is a point estimate from 25 trading days."
          },
          "basis": "current_state"
        },
        "reporting_window_driver_mix": {
          "market_share": {
            "median": 0.4621756420316752,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Market explains about 46.2% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.19284508149841909,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.3%",
            "display_range": null,
            "display_text": "19.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "share_pct",
            "value_pct": 19.3,
            "plain_english": "Sector explains about 19.3% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3449792764699056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.5%",
            "display_range": null,
            "display_text": "34.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "share_pct",
            "value_pct": 34.5,
            "plain_english": "Company-specific explains about 34.5% of price moves in the current state."
          },
          "basis": "reporting_window"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.8052494135420396,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.81",
            "display_range": null,
            "display_text": "2.81",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.81% stock move in the same direction in this state.",
            "value_num": 2.81
          },
          "beta_sector": {
            "median": -1.5517092123477279,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.55",
            "display_range": null,
            "display_text": "-1.55",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state.",
            "value_num": -1.55
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "posterior_source": "deterministic_markov_fallback",
          "intervals_collapsed": true,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 25 trading days versus the 252-day target."
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
              "share_market": 0.4621756420316752,
              "share_sector": 0.19284508149841909,
              "share_idio": 0.3449792764699056
            },
            "regression": {
              "r_squared": null
            }
          }
        },
        "monthly_history": [
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-26 to 2026-01-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": 0,
            "regime_label": "Mixed, mostly company-driven (More Volatile)",
            "dominant_share": {
              "median": 0.5679018487788356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.8%",
              "display_range": null,
              "display_text": "56.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 56.8,
              "plain_english": "Company-specific explains about 56.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32585174367018727,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Market explains about 32.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10624640755097713,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Sector explains about 10.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5679018487788356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.8%",
                "display_range": null,
                "display_text": "56.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 56.8,
                "plain_english": "Company-specific explains about 56.8% of price moves in the current state."
              }
            },
            "summary": "January 2026: Company-specific led at 56.8%; market 32.6%, sector 10.6%, company-specific 56.8%. Based on 5 trading days."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 18,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": 0,
            "regime_label": "Mixed, mostly company-driven (More Volatile)",
            "dominant_share": {
              "median": 0.470902015574664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Market explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.470902015574664,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Market explains about 47.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18499540326386807,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.5%",
                "display_range": null,
                "display_text": "18.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 18.5,
                "plain_english": "Sector explains about 18.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3441025811614679,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Company-specific explains about 34.4% of price moves in the current state."
              }
            },
            "summary": "February 2026: Market led at 47.1%; market 47.1%, sector 18.5%, company-specific 34.4%. Based on 18 trading days."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-03",
            "n_obs": 2,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": 2,
            "regime_label": "Market-Led",
            "dominant_share": {
              "median": 0.5140977597781343,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.4%",
              "display_range": null,
              "display_text": "51.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
              "kind": "share_pct",
              "value_pct": 51.4,
              "plain_english": "Market explains about 51.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5140977597781343,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
                "kind": "share_pct",
                "value_pct": 51.4,
                "plain_english": "Market explains about 51.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.341479166596512,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.1%",
                "display_range": null,
                "display_text": "34.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
                "kind": "share_pct",
                "value_pct": 34.1,
                "plain_english": "Sector explains about 34.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14442307362535375,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.4%",
                "display_range": null,
                "display_text": "14.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 2 trading days.",
                "kind": "share_pct",
                "value_pct": 14.4,
                "plain_english": "Company-specific explains about 14.4% of price moves in the current state."
              }
            },
            "summary": "March 2026: Market led at 51.4%; market 51.4%, sector 34.1%, company-specific 14.4%. Based on 2 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Mixed, mostly company-driven (More Volatile)",
            "pct_time": 0.5378637688600828,
            "dominant_driver": "company",
            "dominant_driver_probability": null,
            "expected_duration_days": 1.9794332340823484,
            "current_probability": 0.02093710205655179,
            "n_days_effective": 13.44659422150207,
            "shares": {
              "market": {
                "median": 0.3150197943400304,
                "low": 0.3150197943400304,
                "high": 0.3150197943400304,
                "value_pct": 31.5,
                "range_collapsed": true,
                "display_value": "31.5%",
                "display_range": null,
                "display_text": "31.5%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Market explains about 31.5% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "sector": {
                "median": 0.25640013327206,
                "low": 0.25640013327206,
                "high": 0.25640013327206,
                "value_pct": 25.6,
                "range_collapsed": true,
                "display_value": "25.6%",
                "display_range": null,
                "display_text": "25.6%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Sector explains about 25.6% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "company": {
                "median": 0.4285800723879095,
                "low": 0.4285800723879095,
                "high": 0.4285800723879095,
                "value_pct": 42.9,
                "range_collapsed": true,
                "display_value": "42.9%",
                "display_range": null,
                "display_text": "42.9%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Company-specific explains about 42.9% of price moves in the current state. This is a point estimate from 25 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 3.404345156542199,
                "low": 3.404345156542199,
                "high": 3.404345156542199,
                "value_num": 3.4,
                "range_collapsed": true,
                "display_value": "3.40",
                "display_range": null,
                "display_text": "3.40",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "Very high",
                "plain_english": "Very high market link: a 1% market move has lined up with about a 3.40% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
              },
              "beta_sector": {
                "median": 2.342799533233813,
                "low": 2.342799533233813,
                "high": 2.342799533233813,
                "value_num": 2.34,
                "range_collapsed": true,
                "display_value": "2.34",
                "display_range": null,
                "display_text": "2.34",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "High",
                "plain_english": "High sector link: a 1% sector move has lined up with about a 2.34% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
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
              "median": 0.032791384334876786,
              "low": 0.032791384334876786,
              "high": 0.032791384334876786
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            },
            "dominant_driver_label": "Company-specific",
            "current_probability_display": 2.1
          },
          {
            "id": 1,
            "label": "Mixed, mostly company-driven (Calmer)",
            "pct_time": 0.27999999999998904,
            "dominant_driver": "company",
            "dominant_driver_probability": null,
            "expected_duration_days": 1.094392046397348,
            "current_probability": 0.0,
            "n_days_effective": 6.999999999999726,
            "shares": {
              "market": {
                "median": 0.45704208564603344,
                "low": 0.45704208564603344,
                "high": 0.45704208564603344,
                "value_pct": 45.7,
                "range_collapsed": true,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Market explains about 45.7% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "sector": {
                "median": 0.05927486650756194,
                "low": 0.05927486650756194,
                "high": 0.05927486650756194,
                "value_pct": 5.9,
                "range_collapsed": true,
                "display_value": "5.9%",
                "display_range": null,
                "display_text": "5.9%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Sector explains about 5.9% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "company": {
                "median": 0.48368304784640465,
                "low": 0.48368304784640465,
                "high": 0.48368304784640465,
                "value_pct": 48.4,
                "range_collapsed": true,
                "display_value": "48.4%",
                "display_range": null,
                "display_text": "48.4%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Company-specific explains about 48.4% of price moves in the current state. This is a point estimate from 25 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.385624646693455e-14,
                "low": 2.385624646693455e-14,
                "high": 2.385624646693455e-14,
                "value_num": 0.0,
                "range_collapsed": true,
                "display_value": "0.00",
                "display_range": null,
                "display_text": "0.00",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "Weak",
                "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
              },
              "beta_sector": {
                "median": -5.265490676744324e-15,
                "low": -5.265490676744324e-15,
                "high": -5.265490676744324e-15,
                "value_num": -0.0,
                "range_collapsed": true,
                "display_value": "-0.00",
                "display_range": null,
                "display_text": "-0.00",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "Weak",
                "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the opposite direction in this state. Shown as a point estimate because only 25 trading days are available."
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
            },
            "dominant_driver_label": "Company-specific",
            "current_probability_display": 0.0
          },
          {
            "id": 2,
            "label": "Market-Led",
            "pct_time": 0.1821362311399283,
            "dominant_driver": "market",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.2570917129521302,
            "current_probability": 0.9790628979434484,
            "n_days_effective": 4.553405778498208,
            "shares": {
              "market": {
                "median": 0.6144650461089618,
                "low": 0.6144650461089618,
                "high": 0.6144650461089618,
                "value_pct": 61.4,
                "range_collapsed": true,
                "display_value": "61.4%",
                "display_range": null,
                "display_text": "61.4%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Market explains about 61.4% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "sector": {
                "median": 0.26286024471563535,
                "low": 0.26286024471563535,
                "high": 0.26286024471563535,
                "value_pct": 26.3,
                "range_collapsed": true,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Sector explains about 26.3% of price moves in the current state. This is a point estimate from 25 trading days."
              },
              "company": {
                "median": 0.12267470917540278,
                "low": 0.12267470917540278,
                "high": 0.12267470917540278,
                "value_pct": 12.3,
                "range_collapsed": true,
                "display_value": "12.3%",
                "display_range": null,
                "display_text": "12.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "plain_english": "Company-specific explains about 12.3% of price moves in the current state. This is a point estimate from 25 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.8052494135420396,
                "low": 2.8052494135420396,
                "high": 2.8052494135420396,
                "value_num": 2.81,
                "range_collapsed": true,
                "display_value": "2.81",
                "display_range": null,
                "display_text": "2.81",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "High",
                "plain_english": "High market link: a 1% market move has lined up with about a 2.81% stock move in the same direction in this state. Shown as a point estimate because only 25 trading days are available."
              },
              "beta_sector": {
                "median": -1.5517092123477279,
                "low": -1.5517092123477279,
                "high": -1.5517092123477279,
                "value_num": -1.55,
                "range_collapsed": true,
                "display_value": "-1.55",
                "display_range": null,
                "display_text": "-1.55",
                "uncertainty_note": "Point estimate only; current-state history is limited to 25 trading days.",
                "strength_label": "High",
                "plain_english": "High sector link: a 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state. Shown as a point estimate because only 25 trading days are available."
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
              "median": 0.006616220650171933,
              "low": 0.006616220650171933,
              "high": 0.006616220650171933
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            },
            "dominant_driver_label": "Market",
            "current_probability_display": 97.9
          }
        ],
        "transitions": {
          "mean": [
            [
              0.4438198224830437,
              0.2616709426012612,
              0.294509234915695
            ],
            [
              0.679478363513139,
              0.20257418344967026,
              0.11794745303719092
            ],
            [
              0.1534358463317694,
              0.5434111504247688,
              0.3031530032434616
            ]
          ],
          "low": [
            [
              0.31044297635591817,
              0.12251671298481287,
              0.16700113907044062
            ],
            [
              0.5001072983351506,
              0.06342246662415073,
              0.008607670909091574
            ],
            [
              0.025348176814709477,
              0.3094235278187971,
              0.10608363039463992
            ]
          ],
          "high": [
            [
              0.5800924249223927,
              0.39738414756472307,
              0.4208681673150318
            ],
            [
              0.8468513796503194,
              0.35034238054143924,
              0.28077987519638875
            ],
            [
              0.31325005634018616,
              0.7735355997817969,
              0.4821086527194723
            ]
          ],
          "counts": [
            [
              6.0,
              3.0,
              4.0
            ],
            [
              6.0,
              1.0,
              0.0
            ],
            [
              0.0,
              3.0,
              1.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 25,
          "reporting_window_days": 25,
          "regime_inference": "hybrid_markov_bayesian_regression",
          "uncertainty_engine": "deterministic_markov_fallback",
          "random_seed": 42,
          "lead_horizon_days": 1,
          "distribution": "student_t",
          "history_limited": true,
          "current_driver_mix_basis": "active_regime",
          "reporting_window_driver_mix_basis": "regime_weighted_recent_average",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "2.81",
          "sector_link_display": "-1.55",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.81% stock move in the same direction in this state. This is a point estimate from 25 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.55% stock move in the opposite direction in this state. This is a point estimate from 25 trading days.",
          "point_estimate_note": "Point estimate only because the current state has 25 trading days.",
          "history_limited_note": "Read is based on 25 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Market-Led",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 61.4,
          "driver_share_display": "61.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 97.9,
          "display_confidence_pct": 97.9,
          "confidence_note": "Based on 25 trading days versus the 252-day target.",
          "history_days": 25,
          "history_limited": true,
          "state_term": "state",
          "stay_probability": 0.3031530032434616,
          "effective_days": 4.6,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: next-day stay probability is 30% and the typical run length is about 1.3 days. It is inferred from about 4.6 effective trading days in this state.",
          "expected_duration_days": 1.3
        },
        "display_notes": {
          "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
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
          "valid": true,
          "period_label": "2026-01-26 to 2026-03-03",
          "shares": {
            "share_market": 0.4621756420316752,
            "share_sector": 0.19284508149841909,
            "share_company": 0.3449792764699056
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
          46.2
        ],
        "sector": [
          19.3
        ],
        "idio": [
          34.5
        ]
      },
      "monthly_history": [
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": "Mixed, mostly company-driven (More Volatile)",
          "summary": "January 2026: Company-specific led at 56.8%; market 32.6%, sector 10.6%, company-specific 56.8%. Based on 5 trading days.",
          "share_market": 0.32585174367018727,
          "share_sector": 0.10624640755097713,
          "share_company": 0.5679018487788356,
          "share_market_display": "32.6%",
          "share_sector_display": "10.6%",
          "share_company_display": "56.8%",
          "dominant_share_display": "56.8%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": "Mixed, mostly company-driven (More Volatile)",
          "summary": "February 2026: Market led at 47.1%; market 47.1%, sector 18.5%, company-specific 34.4%. Based on 18 trading days.",
          "share_market": 0.470902015574664,
          "share_sector": 0.18499540326386807,
          "share_company": 0.3441025811614679,
          "share_market_display": "47.1%",
          "share_sector_display": "18.5%",
          "share_company_display": "34.4%",
          "dominant_share_display": "47.1%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-03",
          "n_obs": 2,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": "Market-Led",
          "summary": "March 2026: Market led at 51.4%; market 51.4%, sector 34.1%, company-specific 14.4%. Based on 2 trading days.",
          "share_market": 0.5140977597781343,
          "share_sector": 0.341479166596512,
          "share_company": 0.14442307362535375,
          "share_market_display": "51.4%",
          "share_sector_display": "34.1%",
          "share_company_display": "14.4%",
          "dominant_share_display": "51.4%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hybrid_markov_regression_pymc",
        "n_regimes": 3,
        "current_regime_label": "Market-Led",
        "current_regime_probability": 0.9790628979434484,
        "labels": [
          "Mixed, mostly company-driven (More Volatile)",
          "Mixed, mostly company-driven (Calmer)",
          "Market-Led"
        ],
        "pct_time": [
          0.5378637688600828,
          0.27999999999998904,
          0.1821362311399283
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Mixed, mostly company-driven (More Volatile)",
            "pct_time": 0.5378637688600828,
            "dominant_driver": "company",
            "dominant_driver_probability": null,
            "expected_duration_days": 1.9794332340823484,
            "current_probability": 0.02093710205655179,
            "n_days_effective": 13.44659422150207,
            "shares": {
              "market": {
                "median": 0.3150197943400304,
                "low": 0.3150197943400304,
                "high": 0.3150197943400304
              },
              "sector": {
                "median": 0.25640013327206,
                "low": 0.25640013327206,
                "high": 0.25640013327206
              },
              "company": {
                "median": 0.4285800723879095,
                "low": 0.4285800723879095,
                "high": 0.4285800723879095
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 3.404345156542199,
                "low": 3.404345156542199,
                "high": 3.404345156542199
              },
              "beta_sector": {
                "median": 2.342799533233813,
                "low": 2.342799533233813,
                "high": 2.342799533233813
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
              "median": 0.032791384334876786,
              "low": 0.032791384334876786,
              "high": 0.032791384334876786
            },
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": null
            }
          },
          {
            "id": 1,
            "label": "Mixed, mostly company-driven (Calmer)",
            "pct_time": 0.27999999999998904,
            "dominant_driver": "company",
            "dominant_driver_probability": null,
            "expected_duration_days": 1.094392046397348,
            "current_probability": 0.0,
            "n_days_effective": 6.999999999999726,
            "shares": {
              "market": {
                "median": 0.45704208564603344,
                "low": 0.45704208564603344,
                "high": 0.45704208564603344
              },
              "sector": {
                "median": 0.05927486650756194,
                "low": 0.05927486650756194,
                "high": 0.05927486650756194
              },
              "company": {
                "median": 0.48368304784640465,
                "low": 0.48368304784640465,
                "high": 0.48368304784640465
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.385624646693455e-14,
                "low": 2.385624646693455e-14,
                "high": 2.385624646693455e-14
              },
              "beta_sector": {
                "median": -5.265490676744324e-15,
                "low": -5.265490676744324e-15,
                "high": -5.265490676744324e-15
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
            "id": 2,
            "label": "Market-Led",
            "pct_time": 0.1821362311399283,
            "dominant_driver": "market",
            "dominant_driver_probability": 1.0,
            "expected_duration_days": 1.2570917129521302,
            "current_probability": 0.9790628979434484,
            "n_days_effective": 4.553405778498208,
            "shares": {
              "market": {
                "median": 0.6144650461089618,
                "low": 0.6144650461089618,
                "high": 0.6144650461089618
              },
              "sector": {
                "median": 0.26286024471563535,
                "low": 0.26286024471563535,
                "high": 0.26286024471563535
              },
              "company": {
                "median": 0.12267470917540278,
                "low": 0.12267470917540278,
                "high": 0.12267470917540278
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 2.8052494135420396,
                "low": 2.8052494135420396,
                "high": 2.8052494135420396
              },
              "beta_sector": {
                "median": -1.5517092123477279,
                "low": -1.5517092123477279,
                "high": -1.5517092123477279
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
              "median": 0.006616220650171933,
              "low": 0.006616220650171933,
              "high": 0.006616220650171933
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
            0.4438198224830437,
            0.2616709426012612,
            0.294509234915695
          ],
          [
            0.679478363513139,
            0.20257418344967026,
            0.11794745303719092
          ],
          [
            0.1534358463317694,
            0.5434111504247688,
            0.3031530032434616
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
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
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
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 41,
        "history_limited": true,
        "trade_days_used": 27,
        "n_trades_used": 8547,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-03",
        "window_label": "Jan 22, 2026 to Mar 3, 2026",
        "window_short_label": "Jan 22-Mar 3",
        "trade_days_label": "27 trading days",
        "trade_count_label": "8,547 trades",
        "window_detail_label": "27 trading days • 8,547 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 3, 2026 (27 trading days • 8,547 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10185.0,
            "impact_pct": -0.021739,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.41,
            "pct_of_adv": 2.04
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
            "trade_notional": 113687.11,
            "impact_pct": -0.033325999999999995,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 38.09,
            "pct_of_adv": 22.81
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
            "local_timestamp": "2026-03-03 06:59:01",
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
            "local_timestamp": "2026-03-03 06:59:01",
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
            "local_timestamp": "2026-03-03 06:59:01",
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
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
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
          "n_trades": 88,
          "n_runs": 45,
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
            "retail_pct": 0.26136363636363635,
            "mixed_pct": 0.20454545454545456,
            "instit_pct": 0.4659090909090909,
            "ambiguous_pct": 0.06818181818181818,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06818181818181818,
            "retail_qty_pct": 0.04073135409123824,
            "mixed_qty_pct": 0.2329833454018827,
            "instit_qty_pct": 0.6407494569152787,
            "ambiguous_qty_pct": 0.08553584359160028,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08553584359160028,
            "retail_notional_pct": 0.04099766901582615,
            "mixed_notional_pct": 0.2333476788499699,
            "instit_notional_pct": 0.6410031216103849,
            "ambiguous_notional_pct": 0.08465153052381907,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08465153052381907
          },
          "run_composition": {
            "retail_pct": 0.5111111111111111,
            "mixed_pct": 0.17777777777777778,
            "instit_pct": 0.2222222222222222,
            "ambiguous_pct": 0.08888888888888889,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08888888888888889,
            "retail_notional_pct": 0.04099766901582615,
            "mixed_notional_pct": 0.2333476788499699,
            "instit_notional_pct": 0.6410031216103849,
            "unclear_notional_pct": 0.08465153052381907
          },
          "counts": {
            "trades": {
              "retail": 23,
              "mixed": 18,
              "institutional": 41,
              "ambiguous": 6,
              "unobservable": 0,
              "unclear": 6
            },
            "runs": {
              "retail": 23,
              "mixed": 8,
              "institutional": 10,
              "ambiguous": 4,
              "unobservable": 0,
              "unclear": 4
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.5111111111111111,
            "low": 0.2222222222222222,
            "na": 0.26666666666666666
          },
          "confidence_counts": {
            "high": 0,
            "medium": 23,
            "low": 10,
            "na": 12
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.5340909090909091,
            "low": 0.19318181818181818,
            "na": 0.2727272727272727
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 47,
            "low": 17,
            "na": 24
          },
          "observability": {
            "avg_feature_coverage": 0.8566666666666668,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.08888888888888889,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5111111111111111,
          "dominance_gap": 0.28888888888888886,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 53,
              "SINGLE_FILL": 35
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 51,
              "PERSISTENT_POSITIVE_IMPACT": 33,
              "MOMENTUM_REACTIVE": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 45
            },
            "participant_confidence": {
              "MEDIUM": 23,
              "NA": 12,
              "LOW": 10
            }
          },
          "trade_size": {
            "avg": 2917.7102272727275,
            "median": 1891.5
          },
          "run_size": {
            "avg": 5705.7444444444445,
            "median": 2047.0,
            "avg_length": 1.2222222222222223
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "run_id": 1842,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1841,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1837,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1836,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1835,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1831,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1830,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1829,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1828,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.26136363636363635,
              "mixed_pct": 0.20454545454545456,
              "instit_pct": 0.4659090909090909,
              "ambiguous_pct": 0.06818181818181818,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.06818181818181818,
              "retail_qty_pct": 0.04073135409123824,
              "mixed_qty_pct": 0.2329833454018827,
              "instit_qty_pct": 0.6407494569152787,
              "ambiguous_qty_pct": 0.08553584359160028,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.08553584359160028,
              "retail_notional_pct": 0.04099766901582615,
              "mixed_notional_pct": 0.2333476788499699,
              "instit_notional_pct": 0.6410031216103849,
              "ambiguous_notional_pct": 0.08465153052381907,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08465153052381907,
              "run_retail_pct": 0.5111111111111111,
              "run_mixed_pct": 0.17777777777777778,
              "run_instit_pct": 0.2222222222222222,
              "run_unclear_pct": 0.08888888888888889,
              "avg_trade_size": 2917.7102272727275,
              "avg_run_notional": 5705.7444444444445,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.5111111111111111,
              "low_confidence_pct": 0.2222222222222222,
              "na_confidence_pct": 0.26666666666666666,
              "avg_feature_coverage": 0.8566666666666668,
              "observable_run_pct": 1.0,
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2727272727272727,
              "mixed_pct": 0.11004784688995216,
              "instit_pct": 0.40669856459330145,
              "ambiguous_pct": 0.21052631578947367,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21052631578947367,
              "retail_qty_pct": 0.06422454804947669,
              "mixed_qty_pct": 0.06517602283539486,
              "instit_qty_pct": 0.5466222645099905,
              "ambiguous_qty_pct": 0.323977164605138,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.323977164605138,
              "retail_notional_pct": 0.06394620640198828,
              "mixed_notional_pct": 0.06445457358553584,
              "instit_notional_pct": 0.5482752353961089,
              "ambiguous_notional_pct": 0.32332398461636697,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32332398461636697,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.11403508771929824,
              "run_instit_pct": 0.20175438596491227,
              "run_unclear_pct": 0.18421052631578946,
              "avg_trade_size": 1948.2583732057417,
              "avg_run_notional": 3571.8070175438597,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3333333333333333,
              "low_confidence_pct": 0.3684210526315789,
              "na_confidence_pct": 0.2982456140350877,
              "avg_feature_coverage": 0.8618421052631576,
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
              "retail_pct": 0.13250883392226148,
              "mixed_pct": 0.11837455830388692,
              "instit_pct": 0.4028268551236749,
              "ambiguous_pct": 0.3462897526501767,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3462897526501767,
              "retail_qty_pct": 0.04969225785552316,
              "mixed_qty_pct": 0.11597019760285067,
              "instit_qty_pct": 0.5303530936183998,
              "ambiguous_qty_pct": 0.30398445092322646,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.30398445092322646,
              "retail_notional_pct": 0.05004397390670629,
              "mixed_notional_pct": 0.11619752538206106,
              "instit_notional_pct": 0.5314665082187203,
              "ambiguous_notional_pct": 0.3022919924925124,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3022919924925124,
              "run_retail_pct": 0.3728813559322034,
              "run_mixed_pct": 0.12994350282485875,
              "run_instit_pct": 0.1977401129943503,
              "run_unclear_pct": 0.2994350282485876,
              "avg_trade_size": 3071.6095406360423,
              "avg_run_notional": 9822.209039548023,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3220338983050847,
              "low_confidence_pct": 0.24858757062146894,
              "na_confidence_pct": 0.4293785310734463,
              "avg_feature_coverage": 0.8694915254237287,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.35714285714285715,
              "mixed_pct": 0.15126050420168066,
              "instit_pct": 0.28991596638655465,
              "ambiguous_pct": 0.20168067226890757,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20168067226890757,
              "retail_qty_pct": 0.05755762129122628,
              "mixed_qty_pct": 0.15077040621418566,
              "instit_qty_pct": 0.4240417674773972,
              "ambiguous_qty_pct": 0.3676302050171909,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3676302050171909,
              "retail_notional_pct": 0.05786872557935745,
              "mixed_notional_pct": 0.1508203029853177,
              "instit_notional_pct": 0.4236987788057288,
              "ambiguous_notional_pct": 0.36761219262959605,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36761219262959605,
              "run_retail_pct": 0.6507936507936508,
              "run_mixed_pct": 0.11904761904761904,
              "run_instit_pct": 0.12698412698412698,
              "run_unclear_pct": 0.10317460317460317,
              "avg_trade_size": 2915.247899159664,
              "avg_run_notional": 5506.579365079365,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.16666666666666666,
              "medium_confidence_pct": 0.4603174603174603,
              "low_confidence_pct": 0.15079365079365079,
              "na_confidence_pct": 0.2222222222222222,
              "avg_feature_coverage": 0.8547619047619043,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2222222222222222,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.4444444444444444,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4444444444444444,
              "retail_qty_pct": 0.0196078431372549,
              "mixed_qty_pct": 0.17825311942959002,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.8021390374331551,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8021390374331551,
              "retail_notional_pct": 0.019483805668016194,
              "mixed_notional_pct": 0.1771255060728745,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.8033906882591093,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.8033906882591093,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 1317.3333333333333,
              "avg_run_notional": 1976.0,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.16666666666666666,
              "na_confidence_pct": 0.8333333333333334,
              "avg_feature_coverage": 0.8250000000000001,
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
              "dominant_label": "Mixed, mostly unclear",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.7250000000000001,
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
          "n_trades": 480,
          "n_runs": 248,
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
            "retail_pct": 0.2875,
            "mixed_pct": 0.16458333333333333,
            "instit_pct": 0.42291666666666666,
            "ambiguous_pct": 0.125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.125,
            "retail_qty_pct": 0.06280754679656785,
            "mixed_qty_pct": 0.1733389382062758,
            "instit_qty_pct": 0.6500457456541628,
            "ambiguous_qty_pct": 0.1138077693429935,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1138077693429935,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.17305461840975786,
            "instit_notional_pct": 0.6495066675982673,
            "ambiguous_notional_pct": 0.11407032918771086,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11407032918771086
          },
          "run_composition": {
            "retail_pct": 0.5362903225806451,
            "mixed_pct": 0.16532258064516128,
            "instit_pct": 0.1774193548387097,
            "ambiguous_pct": 0.12096774193548387,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12096774193548387,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.17305461840975786,
            "instit_notional_pct": 0.6495066675982673,
            "unclear_notional_pct": 0.11407032918771086
          },
          "counts": {
            "trades": {
              "retail": 138,
              "mixed": 79,
              "institutional": 203,
              "ambiguous": 60,
              "unobservable": 0,
              "unclear": 60
            },
            "runs": {
              "retail": 133,
              "mixed": 41,
              "institutional": 44,
              "ambiguous": 30,
              "unobservable": 0,
              "unclear": 30
            }
          },
          "confidence": {
            "high": 0.0846774193548387,
            "medium": 0.40725806451612906,
            "low": 0.2217741935483871,
            "na": 0.2862903225806452
          },
          "confidence_counts": {
            "high": 21,
            "medium": 101,
            "low": 55,
            "na": 71
          },
          "trade_confidence": {
            "high": 0.05625,
            "medium": 0.44583333333333336,
            "low": 0.20833333333333334,
            "na": 0.28958333333333336
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 214,
            "low": 100,
            "na": 139
          },
          "observability": {
            "avg_feature_coverage": 0.8530241935483869,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12096774193548387,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5362903225806451,
          "dominance_gap": 0.35887096774193544,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 265,
              "SINGLE_FILL": 207,
              "WALK_BOOK": 8
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 354,
              "PERSISTENT_POSITIVE_IMPACT": 101,
              "MOMENTUM_REACTIVE": 25
            },
            "d3_urgency": {
              "IMMEDIATE": 247,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "MEDIUM": 101,
              "NA": 71,
              "LOW": 55,
              "HIGH": 21
            }
          },
          "trade_size": {
            "avg": 4174.416666666667,
            "median": 2307.0
          },
          "run_size": {
            "avg": 8079.5161290322585,
            "median": 2350.0,
            "avg_length": 1.1733870967741935
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "run_id": 1842,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1841,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1837,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1836,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1835,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1831,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1830,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1829,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1828,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2875,
              "mixed_pct": 0.16458333333333333,
              "instit_pct": 0.42291666666666666,
              "ambiguous_pct": 0.125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.125,
              "retail_qty_pct": 0.06280754679656785,
              "mixed_qty_pct": 0.1733389382062758,
              "instit_qty_pct": 0.6500457456541628,
              "ambiguous_qty_pct": 0.1138077693429935,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1138077693429935,
              "retail_notional_pct": 0.06336838480426407,
              "mixed_notional_pct": 0.17305461840975786,
              "instit_notional_pct": 0.6495066675982673,
              "ambiguous_notional_pct": 0.11407032918771086,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11407032918771086,
              "run_retail_pct": 0.5362903225806451,
              "run_mixed_pct": 0.16532258064516128,
              "run_instit_pct": 0.1774193548387097,
              "run_unclear_pct": 0.12096774193548387,
              "avg_trade_size": 4174.416666666667,
              "avg_run_notional": 8079.5161290322585,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0846774193548387,
              "medium_confidence_pct": 0.40725806451612906,
              "low_confidence_pct": 0.2217741935483871,
              "na_confidence_pct": 0.2862903225806452,
              "avg_feature_coverage": 0.8530241935483869,
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
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.5555555555555556,
              "ambiguous_pct": 0.1111111111111111,
              "unobservable_pct": 0.2222222222222222,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.00199203187250996,
              "instit_qty_pct": 0.796812749003984,
              "ambiguous_qty_pct": 0.00199203187250996,
              "unobservable_qty_pct": 0.199203187250996,
              "unclear_qty_pct": 0.20119521912350596,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.002042544711801923,
              "instit_notional_pct": 0.7966422557664524,
              "ambiguous_notional_pct": 0.001992726548099437,
              "unobservable_notional_pct": 0.1993224729736462,
              "unclear_notional_pct": 0.20131519952174562,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2230.3333333333335,
              "avg_run_notional": 3345.5,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.7833333333333333,
              "observable_run_pct": 0.8333333333333334,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2127659574468085,
              "mixed_pct": 0.02127659574468085,
              "instit_pct": 0.40425531914893614,
              "ambiguous_pct": 0.2978723404255319,
              "unobservable_pct": 0.06382978723404255,
              "unclear_pct": 0.36170212765957444,
              "retail_qty_pct": 0.0852575488454707,
              "mixed_qty_pct": 0.0004440497335701599,
              "instit_qty_pct": 0.6753996447602132,
              "ambiguous_qty_pct": 0.22069271758436945,
              "unobservable_qty_pct": 0.018206039076376555,
              "unclear_qty_pct": 0.238898756660746,
              "retail_notional_pct": 0.08730120742948264,
              "mixed_notional_pct": 0.0004584856370557161,
              "instit_notional_pct": 0.6724976634866573,
              "ambiguous_notional_pct": 0.22161482672013985,
              "unobservable_notional_pct": 0.018127816726664466,
              "unclear_notional_pct": 0.23974264344680432,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.03333333333333333,
              "run_instit_pct": 0.23333333333333334,
              "run_unclear_pct": 0.39999999999999997,
              "avg_trade_size": 4222.968085106383,
              "avg_run_notional": 6615.983333333334,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclear",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5666666666666667,
              "na_confidence_pct": 0.43333333333333335,
              "avg_feature_coverage": 0.806666666666667,
              "observable_run_pct": 0.9666666666666667,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.30789707187222715,
              "mixed_pct": 0.14108251996450755,
              "instit_pct": 0.3513753327417924,
              "ambiguous_pct": 0.19964507542147295,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19964507542147295,
              "retail_qty_pct": 0.046446019404114774,
              "mixed_qty_pct": 0.14312254868230923,
              "instit_qty_pct": 0.5616183857427922,
              "ambiguous_qty_pct": 0.24881304617078373,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24881304617078373,
              "retail_notional_pct": 0.04652866009202686,
              "mixed_notional_pct": 0.1430922044513836,
              "instit_notional_pct": 0.5612388863615383,
              "ambiguous_notional_pct": 0.24914024909505128,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24914024909505128,
              "run_retail_pct": 0.6459143968871596,
              "run_mixed_pct": 0.13424124513618677,
              "run_instit_pct": 0.10894941634241245,
              "run_unclear_pct": 0.11089494163424124,
              "avg_trade_size": 3465.0004436557233,
              "avg_run_notional": 7597.384241245136,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.24708171206225682,
              "medium_confidence_pct": 0.37937743190661477,
              "low_confidence_pct": 0.12840466926070038,
              "na_confidence_pct": 0.245136186770428,
              "avg_feature_coverage": 0.8540856031128402,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19324894514767932,
              "mixed_pct": 0.09535864978902954,
              "instit_pct": 0.3527426160337553,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.02531645569620253,
              "unclear_pct": 0.35864978902953587,
              "retail_qty_pct": 0.052901157335001565,
              "mixed_qty_pct": 0.0707694713794182,
              "instit_qty_pct": 0.5230294025649046,
              "ambiguous_qty_pct": 0.32041757898029405,
              "unobservable_qty_pct": 0.03288238974038161,
              "unclear_qty_pct": 0.35329996872067565,
              "retail_notional_pct": 0.05300967075003716,
              "mixed_notional_pct": 0.07100954005029672,
              "instit_notional_pct": 0.5206920984173169,
              "ambiguous_notional_pct": 0.32244842256339296,
              "unobservable_notional_pct": 0.03284026821895629,
              "unclear_notional_pct": 0.35528869078234926,
              "run_retail_pct": 0.3973634651600753,
              "run_mixed_pct": 0.096045197740113,
              "run_instit_pct": 0.17890772128060264,
              "run_unclear_pct": 0.3276836158192091,
              "avg_trade_size": 4093.5130801687765,
              "avg_run_notional": 9135.241054613936,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0018832391713747645,
              "medium_confidence_pct": 0.3446327683615819,
              "low_confidence_pct": 0.2297551789077213,
              "na_confidence_pct": 0.423728813559322,
              "avg_feature_coverage": 0.8425612052730697,
              "observable_run_pct": 0.992467043314501,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2247992863514719,
              "mixed_pct": 0.14763603925066904,
              "instit_pct": 0.37444246208742193,
              "ambiguous_pct": 0.25312221231043713,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25312221231043713,
              "retail_qty_pct": 0.08364417202653386,
              "mixed_qty_pct": 0.12101034336754239,
              "instit_qty_pct": 0.507828094441196,
              "ambiguous_qty_pct": 0.2875173901647277,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2875173901647277,
              "retail_notional_pct": 0.08417181278405675,
              "mixed_notional_pct": 0.12163640850556484,
              "instit_notional_pct": 0.5089482323240764,
              "ambiguous_notional_pct": 0.285243546386302,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.285243546386302,
              "run_retail_pct": 0.5023584905660378,
              "run_mixed_pct": 0.14622641509433962,
              "run_instit_pct": 0.15978773584905662,
              "run_unclear_pct": 0.19162735849056603,
              "avg_trade_size": 4670.311775200714,
              "avg_run_notional": 12347.6875,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.01179245283018868,
              "medium_confidence_pct": 0.3915094339622642,
              "low_confidence_pct": 0.25884433962264153,
              "na_confidence_pct": 0.33785377358490565,
              "avg_feature_coverage": 0.8612323113207546,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10714285714285714,
              "mixed_pct": 0.25,
              "instit_pct": 0.07142857142857142,
              "ambiguous_pct": 0.5714285714285714,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5714285714285714,
              "retail_qty_pct": 0.0062592047128129605,
              "mixed_qty_pct": 0.07363770250368189,
              "instit_qty_pct": 0.25773195876288657,
              "ambiguous_qty_pct": 0.6623711340206185,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6623711340206185,
              "retail_notional_pct": 0.0061624841658392965,
              "mixed_notional_pct": 0.07326508952720052,
              "instit_notional_pct": 0.2593378753124037,
              "ambiguous_notional_pct": 0.6612345509945565,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6612345509945565,
              "run_retail_pct": 0.09090909090909091,
              "run_mixed_pct": 0.18181818181818182,
              "run_instit_pct": 0.09090909090909091,
              "run_unclear_pct": 0.6363636363636364,
              "avg_trade_size": 2086.3571428571427,
              "avg_run_notional": 2655.3636363636365,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.18181818181818182,
              "na_confidence_pct": 0.8181818181818182,
              "avg_feature_coverage": 0.8295454545454546,
              "observable_run_pct": 1.0,
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
          "n_trades": 978,
          "n_runs": 511,
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
            "retail_pct": 0.29141104294478526,
            "mixed_pct": 0.18200408997955012,
            "instit_pct": 0.3721881390593047,
            "ambiguous_pct": 0.15439672801635992,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15439672801635992,
            "retail_qty_pct": 0.06705947857584268,
            "mixed_qty_pct": 0.19289389795456352,
            "instit_qty_pct": 0.5360842404106781,
            "ambiguous_qty_pct": 0.20396238305891567,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20396238305891567,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.19300255094772129,
            "instit_notional_pct": 0.5347107620489139,
            "ambiguous_notional_pct": 0.20495664153627716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20495664153627716
          },
          "run_composition": {
            "retail_pct": 0.5362035225048923,
            "mixed_pct": 0.1487279843444227,
            "instit_pct": 0.17025440313111545,
            "ambiguous_pct": 0.14481409001956946,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14481409001956946,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.19300255094772129,
            "instit_notional_pct": 0.5347107620489139,
            "unclear_notional_pct": 0.20495664153627716
          },
          "counts": {
            "trades": {
              "retail": 285,
              "mixed": 178,
              "institutional": 364,
              "ambiguous": 151,
              "unobservable": 0,
              "unclear": 151
            },
            "runs": {
              "retail": 274,
              "mixed": 76,
              "institutional": 87,
              "ambiguous": 74,
              "unobservable": 0,
              "unclear": 74
            }
          },
          "confidence": {
            "high": 0.05675146771037182,
            "medium": 0.38943248532289626,
            "low": 0.2602739726027397,
            "na": 0.29354207436399216
          },
          "confidence_counts": {
            "high": 29,
            "medium": 199,
            "low": 133,
            "na": 150
          },
          "trade_confidence": {
            "high": 0.03578732106339468,
            "medium": 0.3946830265848671,
            "low": 0.2331288343558282,
            "na": 0.33640081799591004
          },
          "trade_confidence_counts": {
            "high": 35,
            "medium": 386,
            "low": 228,
            "na": 329
          },
          "observability": {
            "avg_feature_coverage": 0.8520547945205479,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14481409001956946,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5362035225048923,
          "dominance_gap": 0.3659491193737769,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 513,
              "SINGLE_FILL": 457,
              "WALK_BOOK": 8
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 740,
              "PERSISTENT_POSITIVE_IMPACT": 185,
              "MOMENTUM_REACTIVE": 51,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 506,
              "ADAPTIVE": 5
            },
            "participant_confidence": {
              "MEDIUM": 199,
              "NA": 150,
              "LOW": 133,
              "HIGH": 29
            }
          },
          "trade_size": {
            "avg": 4144.776584867076,
            "median": 2308.5
          },
          "run_size": {
            "avg": 7932.664383561644,
            "median": 2350.0,
            "avg_length": 1.2015655577299413
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "run_id": 1842,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1841,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1837,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1836,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1835,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1831,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1830,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1829,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1828,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.29141104294478526,
              "mixed_pct": 0.18200408997955012,
              "instit_pct": 0.3721881390593047,
              "ambiguous_pct": 0.15439672801635992,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15439672801635992,
              "retail_qty_pct": 0.06705947857584268,
              "mixed_qty_pct": 0.19289389795456352,
              "instit_qty_pct": 0.5360842404106781,
              "ambiguous_qty_pct": 0.20396238305891567,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20396238305891567,
              "retail_notional_pct": 0.06733004546708764,
              "mixed_notional_pct": 0.19300255094772129,
              "instit_notional_pct": 0.5347107620489139,
              "ambiguous_notional_pct": 0.20495664153627716,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.20495664153627716,
              "run_retail_pct": 0.5362035225048923,
              "run_mixed_pct": 0.1487279843444227,
              "run_instit_pct": 0.17025440313111545,
              "run_unclear_pct": 0.14481409001956946,
              "avg_trade_size": 4144.776584867076,
              "avg_run_notional": 7932.664383561644,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.05675146771037182,
              "medium_confidence_pct": 0.38943248532289626,
              "low_confidence_pct": 0.2602739726027397,
              "na_confidence_pct": 0.29354207436399216,
              "avg_feature_coverage": 0.8520547945205479,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19008264462809918,
              "mixed_pct": 0.01652892561983471,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.4049586776859504,
              "unobservable_pct": 0.024793388429752067,
              "unclear_pct": 0.4297520661157025,
              "retail_qty_pct": 0.05889167793010234,
              "mixed_qty_pct": 0.005985711527321877,
              "instit_qty_pct": 0.5410310870824484,
              "ambiguous_qty_pct": 0.3861749372465727,
              "unobservable_qty_pct": 0.00791658621355474,
              "unclear_qty_pct": 0.39409152346012744,
              "retail_notional_pct": 0.05962162680436139,
              "mixed_notional_pct": 0.00620746641213397,
              "instit_notional_pct": 0.5378367809083241,
              "ambiguous_notional_pct": 0.38858179538199833,
              "unobservable_notional_pct": 0.007752330493182237,
              "unclear_notional_pct": 0.3963341258751806,
              "run_retail_pct": 0.2987012987012987,
              "run_mixed_pct": 0.025974025974025976,
              "run_instit_pct": 0.2077922077922078,
              "run_unclear_pct": 0.4675324675324675,
              "avg_trade_size": 3835.690082644628,
              "avg_run_notional": 6027.512987012987,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5064935064935064,
              "na_confidence_pct": 0.4935064935064935,
              "avg_feature_coverage": 0.8155844155844157,
              "observable_run_pct": 0.987012987012987,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26059871950164387,
              "mixed_pct": 0.1431043433119917,
              "instit_pct": 0.3607890638518775,
              "ambiguous_pct": 0.23550787333448694,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23550787333448694,
              "retail_qty_pct": 0.0897485811184939,
              "mixed_qty_pct": 0.12016369047619048,
              "instit_qty_pct": 0.5134880260243633,
              "ambiguous_qty_pct": 0.2765997023809524,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2765997023809524,
              "retail_notional_pct": 0.08990139055133237,
              "mixed_notional_pct": 0.12075406572452738,
              "instit_notional_pct": 0.5139879215510127,
              "ambiguous_notional_pct": 0.2753566221731275,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2753566221731275,
              "run_retail_pct": 0.5454171804356761,
              "run_mixed_pct": 0.1389231401561858,
              "run_instit_pct": 0.14755445951500207,
              "run_unclear_pct": 0.16810521989313604,
              "avg_trade_size": 4177.540577954664,
              "avg_run_notional": 9922.73201808467,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.083436087135224,
              "medium_confidence_pct": 0.3937525688450473,
              "low_confidence_pct": 0.2157829839704069,
              "na_confidence_pct": 0.3070283600493218,
              "avg_feature_coverage": 0.8618988902589396,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.44251134644478063,
              "mixed_pct": 0.15658093797276854,
              "instit_pct": 0.23562783661119516,
              "ambiguous_pct": 0.16527987897125568,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.16527987897125568,
              "retail_qty_pct": 0.08967656885696752,
              "mixed_qty_pct": 0.18576266563629337,
              "instit_qty_pct": 0.4830102052412665,
              "ambiguous_qty_pct": 0.24155056026547264,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24155056026547264,
              "retail_notional_pct": 0.08978247766863848,
              "mixed_notional_pct": 0.18661445379024247,
              "instit_notional_pct": 0.48267147156886625,
              "ambiguous_notional_pct": 0.24093159697225283,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24093159697225283,
              "run_retail_pct": 0.7554527428949108,
              "run_mixed_pct": 0.12888301387970919,
              "run_instit_pct": 0.054196959682749506,
              "run_unclear_pct": 0.061467283542630535,
              "avg_trade_size": 2985.373487140696,
              "avg_run_notional": 5217.004296100463,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3767349636483807,
              "medium_confidence_pct": 0.35756774619960346,
              "low_confidence_pct": 0.07534699272967614,
              "na_confidence_pct": 0.19035029742233972,
              "avg_feature_coverage": 0.8562458691341703,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2053050397877984,
              "mixed_pct": 0.09814323607427056,
              "instit_pct": 0.33156498673740054,
              "ambiguous_pct": 0.3384615384615385,
              "unobservable_pct": 0.026525198938992044,
              "unclear_pct": 0.3649867374005305,
              "retail_qty_pct": 0.062384965610772065,
              "mixed_qty_pct": 0.06684103458297007,
              "instit_qty_pct": 0.46888017049307373,
              "ambiguous_qty_pct": 0.36646323743097936,
              "unobservable_qty_pct": 0.035430591882204786,
              "unclear_qty_pct": 0.4018938293131841,
              "retail_notional_pct": 0.06164829306191062,
              "mixed_notional_pct": 0.06735433870391627,
              "instit_notional_pct": 0.47127382023650916,
              "ambiguous_notional_pct": 0.36477355472811623,
              "unobservable_notional_pct": 0.03494999326954772,
              "unclear_notional_pct": 0.39972354799766396,
              "run_retail_pct": 0.4011363636363636,
              "run_mixed_pct": 0.09431818181818181,
              "run_instit_pct": 0.16590909090909092,
              "run_unclear_pct": 0.3386363636363636,
              "avg_trade_size": 4004.1294429708223,
              "avg_run_notional": 8577.027272727273,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0011363636363636363,
              "medium_confidence_pct": 0.3409090909090909,
              "low_confidence_pct": 0.225,
              "na_confidence_pct": 0.4329545454545455,
              "avg_feature_coverage": 0.8440340909090908,
              "observable_run_pct": 0.9943181818181818,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14,
              "mixed_pct": 0.14,
              "instit_pct": 0.2,
              "ambiguous_pct": 0.52,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.52,
              "retail_qty_pct": 0.028804717623043773,
              "mixed_qty_pct": 0.04536176003628941,
              "instit_qty_pct": 0.29394420503515534,
              "ambiguous_qty_pct": 0.6318893173055115,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6318893173055115,
              "retail_notional_pct": 0.02907539207329509,
              "mixed_notional_pct": 0.04476355326392194,
              "instit_notional_pct": 0.2950054124156108,
              "ambiguous_notional_pct": 0.6311556422471722,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6311556422471722,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.1388888888888889,
              "run_unclear_pct": 0.5833333333333334,
              "avg_trade_size": 1912.27,
              "avg_run_notional": 2655.9305555555557,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3055555555555556,
              "na_confidence_pct": 0.6944444444444444,
              "avg_feature_coverage": 0.8041666666666668,
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
              "retail_pct": 0.125,
              "mixed_pct": 0.125,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.1875,
              "unobservable_pct": 0.1875,
              "unclear_pct": 0.375,
              "retail_qty_pct": 0.01553187646740112,
              "mixed_qty_pct": 0.008217446270543615,
              "instit_qty_pct": 0.04515080368430558,
              "ambiguous_qty_pct": 0.019053639154776956,
              "unobservable_qty_pct": 0.9120462344229727,
              "unclear_qty_pct": 0.9310998735777497,
              "retail_notional_pct": 0.01552844097161094,
              "mixed_notional_pct": 0.008217885694423754,
              "instit_notional_pct": 0.0453462074942784,
              "ambiguous_notional_pct": 0.01906070988448465,
              "unobservable_notional_pct": 0.9118467559552023,
              "unclear_notional_pct": 0.9309074658396869,
              "run_retail_pct": 0.15384615384615385,
              "run_mixed_pct": 0.15384615384615385,
              "run_instit_pct": 0.3076923076923077,
              "run_unclear_pct": 0.38461538461538464,
              "avg_trade_size": 27691.125,
              "avg_run_notional": 34081.38461538462,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.46153846153846156,
              "na_confidence_pct": 0.5384615384615384,
              "avg_feature_coverage": 0.7615384615384614,
              "observable_run_pct": 0.8461538461538461,
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
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
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
          "n_trades": 4233,
          "n_runs": 1844,
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
            "retail_pct": 0.2773446728088826,
            "mixed_pct": 0.15922513583746753,
            "instit_pct": 0.3453815261044177,
            "ambiguous_pct": 0.21804866524923222,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21804866524923222,
            "retail_qty_pct": 0.08915546675490439,
            "mixed_qty_pct": 0.17048511225770907,
            "instit_qty_pct": 0.49900495070666706,
            "ambiguous_qty_pct": 0.24135447028071946,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24135447028071946,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.17074889875071858,
            "instit_notional_pct": 0.5005910458922492,
            "ambiguous_notional_pct": 0.23965713877731037,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23965713877731037
          },
          "run_composition": {
            "retail_pct": 0.5797180043383948,
            "mixed_pct": 0.1442516268980477,
            "instit_pct": 0.13123644251626898,
            "ambiguous_pct": 0.1447939262472885,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1447939262472885,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.17074889875071858,
            "instit_notional_pct": 0.5005910458922492,
            "unclear_notional_pct": 0.23965713877731037
          },
          "counts": {
            "trades": {
              "retail": 1174,
              "mixed": 674,
              "institutional": 1462,
              "ambiguous": 923,
              "unobservable": 0,
              "unclear": 923
            },
            "runs": {
              "retail": 1069,
              "mixed": 266,
              "institutional": 242,
              "ambiguous": 267,
              "unobservable": 0,
              "unclear": 267
            }
          },
          "confidence": {
            "high": 0.04121475054229935,
            "medium": 0.4463123644251627,
            "low": 0.22342733188720174,
            "na": 0.2890455531453362
          },
          "confidence_counts": {
            "high": 76,
            "medium": 823,
            "low": 412,
            "na": 533
          },
          "trade_confidence": {
            "high": 0.026931254429482635,
            "medium": 0.3635719347980156,
            "low": 0.23222300968580203,
            "na": 0.3772738010866997
          },
          "trade_confidence_counts": {
            "high": 114,
            "medium": 1539,
            "low": 983,
            "na": 1597
          },
          "observability": {
            "avg_feature_coverage": 0.8531724511930583,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1447939262472885,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5797180043383948,
          "dominance_gap": 0.43492407809110634,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 2419,
              "SINGLE_FILL": 1792,
              "WALK_BOOK": 22
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 3324,
              "PERSISTENT_POSITIVE_IMPACT": 520,
              "MOMENTUM_REACTIVE": 369,
              "SHORT_HORIZON_POSITIVE_IMPACT": 18,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 1818,
              "ADAPTIVE": 26
            },
            "participant_confidence": {
              "MEDIUM": 823,
              "NA": 533,
              "LOW": 412,
              "HIGH": 76
            }
          },
          "trade_size": {
            "avg": 3742.259981100874,
            "median": 1375.0
          },
          "run_size": {
            "avg": 8590.556670281996,
            "median": 2400.0,
            "avg_length": 1.3101952277657267
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 1100.0,
              "notional": 253.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-03T08:48:33.256400",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1843,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
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
              "run_id": 1842,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-03T08:42:02.732400",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1841,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-03T08:25:03.031000",
              "price": 0.23,
              "size": 3100.0,
              "notional": 713.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-03T08:25:02.970700",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-03T08:25:02.940500",
              "price": 0.23,
              "size": 8100.0,
              "notional": 1863.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-03T08:25:02.940400",
              "price": 0.23,
              "size": 6200.0,
              "notional": 1426.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-03T08:25:02.849900",
              "price": 0.23,
              "size": 12500.0,
              "notional": 2875.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 20000.0,
              "notional": 4600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-03T08:25:02.849800",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1840,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-03T08:13:42.444100",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 95900.0,
              "notional": 22057.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-03T08:13:42.414000",
              "price": 0.23,
              "size": 4100.0,
              "notional": 943.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1839,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-03T08:01:50.011500",
              "price": 0.23,
              "size": 15900.0,
              "notional": 3657.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1838,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-03T08:00:00.028000",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1837,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-03T07:56:47.115100",
              "price": 0.23,
              "size": 2000.0,
              "notional": 460.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1836,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-03T07:56:36.228500",
              "price": 0.23,
              "size": 1500.0,
              "notional": 345.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1835,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-03T07:52:06.021200",
              "price": 0.23,
              "size": 4700.0,
              "notional": 1081.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1834,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-03T07:47:03.720800",
              "price": 0.23,
              "size": 9700.0,
              "notional": 2231.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1833,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1832,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-03T07:26:55.754300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1831,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-03T07:10:36.001300",
              "price": 0.235,
              "size": 100.0,
              "notional": 23.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1830,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-03T07:09:00.033700",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1829,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
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
              "run_id": 1828,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2773446728088826,
              "mixed_pct": 0.15922513583746753,
              "instit_pct": 0.3453815261044177,
              "ambiguous_pct": 0.21804866524923222,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21804866524923222,
              "retail_qty_pct": 0.08915546675490439,
              "mixed_qty_pct": 0.17048511225770907,
              "instit_qty_pct": 0.49900495070666706,
              "ambiguous_qty_pct": 0.24135447028071946,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24135447028071946,
              "retail_notional_pct": 0.08900291657972186,
              "mixed_notional_pct": 0.17074889875071858,
              "instit_notional_pct": 0.5005910458922492,
              "ambiguous_notional_pct": 0.23965713877731037,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23965713877731037,
              "run_retail_pct": 0.5797180043383948,
              "run_mixed_pct": 0.1442516268980477,
              "run_instit_pct": 0.13123644251626898,
              "run_unclear_pct": 0.1447939262472885,
              "avg_trade_size": 3742.259981100874,
              "avg_run_notional": 8590.556670281996,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.04121475054229935,
              "medium_confidence_pct": 0.4463123644251627,
              "low_confidence_pct": 0.22342733188720174,
              "na_confidence_pct": 0.2890455531453362,
              "avg_feature_coverage": 0.8531724511930583,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1992619926199262,
              "mixed_pct": 0.06642066420664207,
              "instit_pct": 0.3173431734317343,
              "ambiguous_pct": 0.3874538745387454,
              "unobservable_pct": 0.02952029520295203,
              "unclear_pct": 0.41697416974169743,
              "retail_qty_pct": 0.06097285067873303,
              "mixed_qty_pct": 0.03178733031674208,
              "instit_qty_pct": 0.5294117647058824,
              "ambiguous_qty_pct": 0.36606334841628957,
              "unobservable_qty_pct": 0.011764705882352941,
              "unclear_qty_pct": 0.3778280542986425,
              "retail_notional_pct": 0.06143458779015316,
              "mixed_notional_pct": 0.03215332831999561,
              "instit_notional_pct": 0.527401257823987,
              "ambiguous_notional_pct": 0.3672288588670605,
              "unobservable_notional_pct": 0.011781967198803783,
              "unclear_notional_pct": 0.37901082606586434,
              "run_retail_pct": 0.3076923076923077,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.1952662721893491,
              "run_unclear_pct": 0.42011834319526625,
              "avg_trade_size": 2958.8966789667898,
              "avg_run_notional": 4744.739644970414,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclear",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5029585798816568,
              "na_confidence_pct": 0.4970414201183432,
              "avg_feature_coverage": 0.8162721893491124,
              "observable_run_pct": 0.9822485207100592,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2515406162464986,
              "mixed_pct": 0.11792717086834734,
              "instit_pct": 0.3322128851540616,
              "ambiguous_pct": 0.28431372549019607,
              "unobservable_pct": 0.014005602240896359,
              "unclear_pct": 0.29831932773109243,
              "retail_qty_pct": 0.07066957692357961,
              "mixed_qty_pct": 0.08322986237273072,
              "instit_qty_pct": 0.4959156199762126,
              "ambiguous_qty_pct": 0.33106350720811384,
              "unobservable_qty_pct": 0.01912143351936323,
              "unclear_qty_pct": 0.3501849407274771,
              "retail_notional_pct": 0.06974864447799578,
              "mixed_notional_pct": 0.08252701130136735,
              "instit_notional_pct": 0.49635768445586015,
              "ambiguous_notional_pct": 0.3317401698103002,
              "unobservable_notional_pct": 0.019626489954476543,
              "unclear_notional_pct": 0.3513666597647767,
              "run_retail_pct": 0.4662045060658579,
              "run_mixed_pct": 0.11149624494511842,
              "run_instit_pct": 0.15135759676487578,
              "run_unclear_pct": 0.2709416522241479,
              "avg_trade_size": 3764.9196078431373,
              "avg_run_notional": 7764.738879260543,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.09647602541883304,
              "medium_confidence_pct": 0.31080300404390526,
              "low_confidence_pct": 0.21028307336799537,
              "na_confidence_pct": 0.3824378971692663,
              "avg_feature_coverage": 0.8531484690930097,
              "observable_run_pct": 0.9971114962449451,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25625,
              "mixed_pct": 0.1375,
              "instit_pct": 0.28125,
              "ambiguous_pct": 0.325,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.325,
              "retail_qty_pct": 0.05618957045490569,
              "mixed_qty_pct": 0.0771913139958789,
              "instit_qty_pct": 0.48525915359010935,
              "ambiguous_qty_pct": 0.38135996195910604,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.38135996195910604,
              "retail_notional_pct": 0.056827604023928516,
              "mixed_notional_pct": 0.07743077436011123,
              "instit_notional_pct": 0.49086970410544745,
              "ambiguous_notional_pct": 0.3748719175105128,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3748719175105128,
              "run_retail_pct": 0.3564356435643564,
              "run_mixed_pct": 0.1188118811881188,
              "run_instit_pct": 0.13861386138613863,
              "run_unclear_pct": 0.38613861386138615,
              "avg_trade_size": 1790.228125,
              "avg_run_notional": 2836.0049504950493,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclear",
              "high_confidence_pct": 0.039603960396039604,
              "medium_confidence_pct": 0.13861386138613863,
              "low_confidence_pct": 0.31683168316831684,
              "na_confidence_pct": 0.504950495049505,
              "avg_feature_coverage": 0.8217821782178215,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4279640228945217,
              "mixed_pct": 0.18103025347506133,
              "instit_pct": 0.26034341782502046,
              "ambiguous_pct": 0.13066230580539656,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13066230580539656,
              "retail_qty_pct": 0.08772129642152919,
              "mixed_qty_pct": 0.18246143551705238,
              "instit_qty_pct": 0.48459200307519273,
              "ambiguous_qty_pct": 0.2452252649862257,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2452252649862257,
              "retail_notional_pct": 0.08779778769146546,
              "mixed_notional_pct": 0.18310595292762313,
              "instit_notional_pct": 0.48441522549179494,
              "ambiguous_notional_pct": 0.2446810338891165,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2446810338891165,
              "run_retail_pct": 0.7500729075532225,
              "run_mixed_pct": 0.1388159813356664,
              "run_instit_pct": 0.058326042578011085,
              "run_unclear_pct": 0.05278506853310003,
              "avg_trade_size": 2041.111447260834,
              "avg_run_notional": 3639.9523184601926,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4199475065616798,
              "medium_confidence_pct": 0.3441236512102654,
              "low_confidence_pct": 0.04432779235928842,
              "na_confidence_pct": 0.19160104986876642,
              "avg_feature_coverage": 0.8594050743657042,
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
              "retail_pct": 0.24305555555555555,
              "mixed_pct": 0.14257154882154882,
              "instit_pct": 0.32333754208754206,
              "ambiguous_pct": 0.29103535353535354,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.29103535353535354,
              "retail_qty_pct": 0.08915805093435958,
              "mixed_qty_pct": 0.11130762085147966,
              "instit_qty_pct": 0.44014669867657524,
              "ambiguous_qty_pct": 0.3593876295375855,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3593876295375855,
              "retail_notional_pct": 0.08893719136639493,
              "mixed_notional_pct": 0.11231829638802922,
              "instit_notional_pct": 0.44874236198018014,
              "ambiguous_notional_pct": 0.3500021502653957,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3500021502653957,
              "run_retail_pct": 0.5295857988165681,
              "run_mixed_pct": 0.14550833781603012,
              "run_instit_pct": 0.135287789133943,
              "run_unclear_pct": 0.18961807423345886,
              "avg_trade_size": 4252.274410774411,
              "avg_run_notional": 10869.71920387305,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.06320602474448628,
              "medium_confidence_pct": 0.39644970414201186,
              "low_confidence_pct": 0.2052178590640129,
              "na_confidence_pct": 0.33512641204948895,
              "avg_feature_coverage": 0.8651559978483054,
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
              "retail_pct": 0.16666666666666666,
              "mixed_pct": 0.11904761904761904,
              "instit_pct": 0.40476190476190477,
              "ambiguous_pct": 0.16666666666666666,
              "unobservable_pct": 0.14285714285714285,
              "unclear_pct": 0.30952380952380953,
              "retail_qty_pct": 0.018337229690239626,
              "mixed_qty_pct": 0.025350672121566335,
              "instit_qty_pct": 0.09409701928696669,
              "ambiguous_qty_pct": 0.11879018118059614,
              "unobservable_qty_pct": 0.7434248977206313,
              "unclear_qty_pct": 0.8622150789012274,
              "retail_notional_pct": 0.01842827975645574,
              "mixed_notional_pct": 0.02617434534473962,
              "instit_notional_pct": 0.09353143741677337,
              "ambiguous_notional_pct": 0.11888800560031323,
              "unobservable_notional_pct": 0.742977931881718,
              "unclear_notional_pct": 0.8618659374820312,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.18518518518518517,
              "run_instit_pct": 0.2962962962962963,
              "run_unclear_pct": 0.2962962962962963,
              "avg_trade_size": 13043.488095238095,
              "avg_run_notional": 20289.87037037037,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5185185185185185,
              "na_confidence_pct": 0.48148148148148145,
              "avg_feature_coverage": 0.7814814814814817,
              "observable_run_pct": 0.8888888888888888,
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
              "instit_pct": 0.14285714285714285,
              "ambiguous_pct": 0.2857142857142857,
              "unobservable_pct": 0.5714285714285714,
              "unclear_pct": 0.8571428571428571,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.03614022406938923,
              "ambiguous_qty_pct": 0.00012046741356463077,
              "unobservable_qty_pct": 0.9637393085170461,
              "unclear_qty_pct": 0.9638597759306108,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.03614022406938923,
              "ambiguous_notional_pct": 0.00012046741356463077,
              "unobservable_notional_pct": 0.9637393085170461,
              "unclear_notional_pct": 0.9638597759306108,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.8333333333333333,
              "avg_trade_size": 237.17142857142858,
              "avg_run_notional": 276.7,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.16666666666666666,
              "na_confidence_pct": 0.8333333333333334,
              "avg_feature_coverage": 0.625,
              "observable_run_pct": 0.5,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
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
      "n_trades": 4233,
      "n_runs": 1844,
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
        "retail_pct": 0.2773446728088826,
        "mixed_pct": 0.15922513583746753,
        "instit_pct": 0.3453815261044177,
        "ambiguous_pct": 0.21804866524923222,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.21804866524923222,
        "retail_qty_pct": 0.08915546675490439,
        "mixed_qty_pct": 0.17048511225770907,
        "instit_qty_pct": 0.49900495070666706,
        "ambiguous_qty_pct": 0.24135447028071946,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.24135447028071946,
        "retail_notional_pct": 0.08900291657972186,
        "mixed_notional_pct": 0.17074889875071858,
        "instit_notional_pct": 0.5005910458922492,
        "ambiguous_notional_pct": 0.23965713877731037,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.23965713877731037
      },
      "run_composition": {
        "retail_pct": 0.5797180043383948,
        "mixed_pct": 0.1442516268980477,
        "instit_pct": 0.13123644251626898,
        "ambiguous_pct": 0.1447939262472885,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1447939262472885
      },
      "trade_size": {
        "avg": 3742.259981100874,
        "median": 1375.0
      },
      "run_size": {
        "avg": 8590.556670281996,
        "median": 2400.0,
        "avg_length": 1.3101952277657267
      },
      "confidence": {
        "high": 0.04121475054229935,
        "medium": 0.4463123644251627,
        "low": 0.22342733188720174,
        "na": 0.2890455531453362
      },
      "confidence_counts": {
        "high": 76,
        "medium": 823,
        "low": 412,
        "na": 533
      },
      "trade_confidence": {
        "high": 0.026931254429482635,
        "medium": 0.3635719347980156,
        "low": 0.23222300968580203,
        "na": 0.3772738010866997
      },
      "trade_confidence_counts": {
        "high": 114,
        "medium": 1539,
        "low": 983,
        "na": 1597
      },
      "counts": {
        "trades": {
          "retail": 1174,
          "mixed": 674,
          "institutional": 1462,
          "ambiguous": 923,
          "unobservable": 0,
          "unclear": 923
        },
        "runs": {
          "retail": 1069,
          "mixed": 266,
          "institutional": 242,
          "ambiguous": 267,
          "unobservable": 0,
          "unclear": 267
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8531724511930583,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.1447939262472885,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5797180043383948,
      "dominance_gap": 0.43492407809110634,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 786,
            "n_runs": 310,
            "retail_pct": 0.27608142493638677,
            "mixed_pct": 0.11959287531806616,
            "instit_pct": 0.41348600508905853,
            "ambiguous_pct": 0.19083969465648856,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19083969465648856,
            "avg_trade_size": 4945.02989821883,
            "avg_run_notional": 12538.043548387097,
            "retail_qty_pct": 0.08379711388949475,
            "mixed_qty_pct": 0.11547256365695953,
            "instit_qty_pct": 0.6251152122367708,
            "ambiguous_qty_pct": 0.1756151102167749,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1756151102167749,
            "retail_notional_pct": 0.08311311110302104,
            "mixed_notional_pct": 0.11677234718026569,
            "instit_notional_pct": 0.6235925577214225,
            "ambiguous_notional_pct": 0.17652198399529073,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17652198399529073,
            "run_retail_pct": 0.6258064516129033,
            "run_mixed_pct": 0.12580645161290321,
            "run_instit_pct": 0.12903225806451613,
            "run_ambiguous_pct": 0.11935483870967742,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11935483870967742,
            "avg_feature_coverage": 0.856290322580645,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.532258064516129,
            "low_confidence_pct": 0.22258064516129034,
            "na_confidence_pct": 0.24516129032258063,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3236,
            "n_runs": 1422,
            "retail_pct": 0.2778121137206428,
            "mixed_pct": 0.16718170580964153,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.23331273176761433,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23331273176761433,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.18777930710060717,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.27156708161647486,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27156708161647486,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.18970958427423834,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.27094508804877426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27094508804877426,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.14627285513361463,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.15330520393811534,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15330520393811534,
            "avg_feature_coverage": 0.85210970464135,
            "high_confidence_pct": 0.053445850914205346,
            "medium_confidence_pct": 0.4310829817158931,
            "low_confidence_pct": 0.2158931082981716,
            "na_confidence_pct": 0.29957805907172996,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 211,
            "n_runs": 112,
            "retail_pct": 0.27488151658767773,
            "mixed_pct": 0.1848341232227488,
            "instit_pct": 0.4549763033175355,
            "ambiguous_pct": 0.08530805687203792,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.08530805687203792,
            "avg_trade_size": 3397.0853080568722,
            "avg_run_notional": 6399.866071428572,
            "retail_qty_pct": 0.045835256875288534,
            "mixed_qty_pct": 0.16645782496867376,
            "instit_qty_pct": 0.6957066543559981,
            "ambiguous_qty_pct": 0.09200026380003958,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09200026380003958,
            "retail_notional_pct": 0.045807320186666854,
            "mixed_notional_pct": 0.1661823280342083,
            "instit_notional_pct": 0.6965177842728294,
            "ambiguous_notional_pct": 0.09149256750629547,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09149256750629547,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.16964285714285715,
            "run_instit_pct": 0.22321428571428573,
            "run_ambiguous_pct": 0.10714285714285714,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10714285714285714,
            "avg_feature_coverage": 0.8580357142857142,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.4017857142857143,
            "low_confidence_pct": 0.32142857142857145,
            "na_confidence_pct": 0.2767857142857143,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2773446728088826,
          "mixed_pct": 0.15922513583746753,
          "instit_pct": 0.3453815261044177,
          "ambiguous_pct": 0.21804866524923222,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.21804866524923222,
          "retail_qty_pct": 0.08915546675490439,
          "mixed_qty_pct": 0.17048511225770907,
          "instit_qty_pct": 0.49900495070666706,
          "ambiguous_qty_pct": 0.24135447028071946,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.24135447028071946,
          "retail_notional_pct": 0.08900291657972186,
          "mixed_notional_pct": 0.17074889875071858,
          "instit_notional_pct": 0.5005910458922492,
          "ambiguous_notional_pct": 0.23965713877731037,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.23965713877731037,
          "run_retail_pct": 0.5797180043383948,
          "run_mixed_pct": 0.1442516268980477,
          "run_instit_pct": 0.13123644251626898,
          "run_unclear_pct": 0.1447939262472885,
          "avg_trade_size": 3742.259981100874,
          "avg_run_notional": 8590.556670281996,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.04121475054229935,
          "medium_confidence_pct": 0.4463123644251627,
          "low_confidence_pct": 0.22342733188720174,
          "na_confidence_pct": 0.2890455531453362,
          "avg_feature_coverage": 0.8531724511930583,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1992619926199262,
          "mixed_pct": 0.06642066420664207,
          "instit_pct": 0.3173431734317343,
          "ambiguous_pct": 0.3874538745387454,
          "unobservable_pct": 0.02952029520295203,
          "unclear_pct": 0.41697416974169743,
          "retail_qty_pct": 0.06097285067873303,
          "mixed_qty_pct": 0.03178733031674208,
          "instit_qty_pct": 0.5294117647058824,
          "ambiguous_qty_pct": 0.36606334841628957,
          "unobservable_qty_pct": 0.011764705882352941,
          "unclear_qty_pct": 0.3778280542986425,
          "retail_notional_pct": 0.06143458779015316,
          "mixed_notional_pct": 0.03215332831999561,
          "instit_notional_pct": 0.527401257823987,
          "ambiguous_notional_pct": 0.3672288588670605,
          "unobservable_notional_pct": 0.011781967198803783,
          "unclear_notional_pct": 0.37901082606586434,
          "run_retail_pct": 0.3076923076923077,
          "run_mixed_pct": 0.07692307692307693,
          "run_instit_pct": 0.1952662721893491,
          "run_unclear_pct": 0.42011834319526625,
          "avg_trade_size": 2958.8966789667898,
          "avg_run_notional": 4744.739644970414,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclear",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5029585798816568,
          "na_confidence_pct": 0.4970414201183432,
          "avg_feature_coverage": 0.8162721893491124,
          "observable_run_pct": 0.9822485207100592,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2515406162464986,
          "mixed_pct": 0.11792717086834734,
          "instit_pct": 0.3322128851540616,
          "ambiguous_pct": 0.28431372549019607,
          "unobservable_pct": 0.014005602240896359,
          "unclear_pct": 0.29831932773109243,
          "retail_qty_pct": 0.07066957692357961,
          "mixed_qty_pct": 0.08322986237273072,
          "instit_qty_pct": 0.4959156199762126,
          "ambiguous_qty_pct": 0.33106350720811384,
          "unobservable_qty_pct": 0.01912143351936323,
          "unclear_qty_pct": 0.3501849407274771,
          "retail_notional_pct": 0.06974864447799578,
          "mixed_notional_pct": 0.08252701130136735,
          "instit_notional_pct": 0.49635768445586015,
          "ambiguous_notional_pct": 0.3317401698103002,
          "unobservable_notional_pct": 0.019626489954476543,
          "unclear_notional_pct": 0.3513666597647767,
          "run_retail_pct": 0.4662045060658579,
          "run_mixed_pct": 0.11149624494511842,
          "run_instit_pct": 0.15135759676487578,
          "run_unclear_pct": 0.2709416522241479,
          "avg_trade_size": 3764.9196078431373,
          "avg_run_notional": 7764.738879260543,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.09647602541883304,
          "medium_confidence_pct": 0.31080300404390526,
          "low_confidence_pct": 0.21028307336799537,
          "na_confidence_pct": 0.3824378971692663,
          "avg_feature_coverage": 0.8531484690930097,
          "observable_run_pct": 0.9971114962449451,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.25625,
          "mixed_pct": 0.1375,
          "instit_pct": 0.28125,
          "ambiguous_pct": 0.325,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.325,
          "retail_qty_pct": 0.05618957045490569,
          "mixed_qty_pct": 0.0771913139958789,
          "instit_qty_pct": 0.48525915359010935,
          "ambiguous_qty_pct": 0.38135996195910604,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.38135996195910604,
          "retail_notional_pct": 0.056827604023928516,
          "mixed_notional_pct": 0.07743077436011123,
          "instit_notional_pct": 0.49086970410544745,
          "ambiguous_notional_pct": 0.3748719175105128,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3748719175105128,
          "run_retail_pct": 0.3564356435643564,
          "run_mixed_pct": 0.1188118811881188,
          "run_instit_pct": 0.13861386138613863,
          "run_unclear_pct": 0.38613861386138615,
          "avg_trade_size": 1790.228125,
          "avg_run_notional": 2836.0049504950493,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclear",
          "high_confidence_pct": 0.039603960396039604,
          "medium_confidence_pct": 0.13861386138613863,
          "low_confidence_pct": 0.31683168316831684,
          "na_confidence_pct": 0.504950495049505,
          "avg_feature_coverage": 0.8217821782178215,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BN2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4279640228945217,
          "mixed_pct": 0.18103025347506133,
          "instit_pct": 0.26034341782502046,
          "ambiguous_pct": 0.13066230580539656,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13066230580539656,
          "retail_qty_pct": 0.08772129642152919,
          "mixed_qty_pct": 0.18246143551705238,
          "instit_qty_pct": 0.48459200307519273,
          "ambiguous_qty_pct": 0.2452252649862257,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2452252649862257,
          "retail_notional_pct": 0.08779778769146546,
          "mixed_notional_pct": 0.18310595292762313,
          "instit_notional_pct": 0.48441522549179494,
          "ambiguous_notional_pct": 0.2446810338891165,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2446810338891165,
          "run_retail_pct": 0.7500729075532225,
          "run_mixed_pct": 0.1388159813356664,
          "run_instit_pct": 0.058326042578011085,
          "run_unclear_pct": 0.05278506853310003,
          "avg_trade_size": 2041.111447260834,
          "avg_run_notional": 3639.9523184601926,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4199475065616798,
          "medium_confidence_pct": 0.3441236512102654,
          "low_confidence_pct": 0.04432779235928842,
          "na_confidence_pct": 0.19160104986876642,
          "avg_feature_coverage": 0.8594050743657042,
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
          "retail_pct": 0.24305555555555555,
          "mixed_pct": 0.14257154882154882,
          "instit_pct": 0.32333754208754206,
          "ambiguous_pct": 0.29103535353535354,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.29103535353535354,
          "retail_qty_pct": 0.08915805093435958,
          "mixed_qty_pct": 0.11130762085147966,
          "instit_qty_pct": 0.44014669867657524,
          "ambiguous_qty_pct": 0.3593876295375855,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3593876295375855,
          "retail_notional_pct": 0.08893719136639493,
          "mixed_notional_pct": 0.11231829638802922,
          "instit_notional_pct": 0.44874236198018014,
          "ambiguous_notional_pct": 0.3500021502653957,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3500021502653957,
          "run_retail_pct": 0.5295857988165681,
          "run_mixed_pct": 0.14550833781603012,
          "run_instit_pct": 0.135287789133943,
          "run_unclear_pct": 0.18961807423345886,
          "avg_trade_size": 4252.274410774411,
          "avg_run_notional": 10869.71920387305,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.06320602474448628,
          "medium_confidence_pct": 0.39644970414201186,
          "low_confidence_pct": 0.2052178590640129,
          "na_confidence_pct": 0.33512641204948895,
          "avg_feature_coverage": 0.8651559978483054,
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
          "retail_pct": 0.16666666666666666,
          "mixed_pct": 0.11904761904761904,
          "instit_pct": 0.40476190476190477,
          "ambiguous_pct": 0.16666666666666666,
          "unobservable_pct": 0.14285714285714285,
          "unclear_pct": 0.30952380952380953,
          "retail_qty_pct": 0.018337229690239626,
          "mixed_qty_pct": 0.025350672121566335,
          "instit_qty_pct": 0.09409701928696669,
          "ambiguous_qty_pct": 0.11879018118059614,
          "unobservable_qty_pct": 0.7434248977206313,
          "unclear_qty_pct": 0.8622150789012274,
          "retail_notional_pct": 0.01842827975645574,
          "mixed_notional_pct": 0.02617434534473962,
          "instit_notional_pct": 0.09353143741677337,
          "ambiguous_notional_pct": 0.11888800560031323,
          "unobservable_notional_pct": 0.742977931881718,
          "unclear_notional_pct": 0.8618659374820312,
          "run_retail_pct": 0.2222222222222222,
          "run_mixed_pct": 0.18518518518518517,
          "run_instit_pct": 0.2962962962962963,
          "run_unclear_pct": 0.2962962962962963,
          "avg_trade_size": 13043.488095238095,
          "avg_run_notional": 20289.87037037037,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5185185185185185,
          "na_confidence_pct": 0.48148148148148145,
          "avg_feature_coverage": 0.7814814814814817,
          "observable_run_pct": 0.8888888888888888,
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
          "instit_pct": 0.14285714285714285,
          "ambiguous_pct": 0.2857142857142857,
          "unobservable_pct": 0.5714285714285714,
          "unclear_pct": 0.8571428571428571,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.03614022406938923,
          "ambiguous_qty_pct": 0.00012046741356463077,
          "unobservable_qty_pct": 0.9637393085170461,
          "unclear_qty_pct": 0.9638597759306108,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.03614022406938923,
          "ambiguous_notional_pct": 0.00012046741356463077,
          "unobservable_notional_pct": 0.9637393085170461,
          "unclear_notional_pct": 0.9638597759306108,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.16666666666666666,
          "run_unclear_pct": 0.8333333333333333,
          "avg_trade_size": 237.17142857142858,
          "avg_run_notional": 276.7,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.16666666666666666,
          "na_confidence_pct": 0.8333333333333334,
          "avg_feature_coverage": 0.625,
          "observable_run_pct": 0.5,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5,
          "mixed_pct": 0.5,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.8333333333333334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.7910447761194029,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.5,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8500000000000001,
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
            "retail_pct": 0.26136363636363635,
            "mixed_pct": 0.20454545454545456,
            "instit_pct": 0.4659090909090909,
            "ambiguous_pct": 0.06818181818181818,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06818181818181818,
            "retail_qty_pct": 0.04073135409123824,
            "mixed_qty_pct": 0.2329833454018827,
            "instit_qty_pct": 0.6407494569152787,
            "ambiguous_qty_pct": 0.08553584359160028,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08553584359160028,
            "retail_notional_pct": 0.04099766901582615,
            "mixed_notional_pct": 0.2333476788499699,
            "instit_notional_pct": 0.6410031216103849,
            "ambiguous_notional_pct": 0.08465153052381907,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08465153052381907,
            "run_retail_pct": 0.5111111111111111,
            "run_mixed_pct": 0.17777777777777778,
            "run_instit_pct": 0.2222222222222222,
            "run_unclear_pct": 0.08888888888888889,
            "avg_trade_size": 2917.7102272727275,
            "avg_run_notional": 5705.7444444444445,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.5111111111111111,
            "low_confidence_pct": 0.2222222222222222,
            "na_confidence_pct": 0.26666666666666666,
            "avg_feature_coverage": 0.8566666666666668,
            "observable_run_pct": 1.0,
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2727272727272727,
            "mixed_pct": 0.11004784688995216,
            "instit_pct": 0.40669856459330145,
            "ambiguous_pct": 0.21052631578947367,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21052631578947367,
            "retail_qty_pct": 0.06422454804947669,
            "mixed_qty_pct": 0.06517602283539486,
            "instit_qty_pct": 0.5466222645099905,
            "ambiguous_qty_pct": 0.323977164605138,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.323977164605138,
            "retail_notional_pct": 0.06394620640198828,
            "mixed_notional_pct": 0.06445457358553584,
            "instit_notional_pct": 0.5482752353961089,
            "ambiguous_notional_pct": 0.32332398461636697,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32332398461636697,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.11403508771929824,
            "run_instit_pct": 0.20175438596491227,
            "run_unclear_pct": 0.18421052631578946,
            "avg_trade_size": 1948.2583732057417,
            "avg_run_notional": 3571.8070175438597,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3333333333333333,
            "low_confidence_pct": 0.3684210526315789,
            "na_confidence_pct": 0.2982456140350877,
            "avg_feature_coverage": 0.8618421052631576,
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
            "retail_pct": 0.13250883392226148,
            "mixed_pct": 0.11837455830388692,
            "instit_pct": 0.4028268551236749,
            "ambiguous_pct": 0.3462897526501767,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3462897526501767,
            "retail_qty_pct": 0.04969225785552316,
            "mixed_qty_pct": 0.11597019760285067,
            "instit_qty_pct": 0.5303530936183998,
            "ambiguous_qty_pct": 0.30398445092322646,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.30398445092322646,
            "retail_notional_pct": 0.05004397390670629,
            "mixed_notional_pct": 0.11619752538206106,
            "instit_notional_pct": 0.5314665082187203,
            "ambiguous_notional_pct": 0.3022919924925124,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3022919924925124,
            "run_retail_pct": 0.3728813559322034,
            "run_mixed_pct": 0.12994350282485875,
            "run_instit_pct": 0.1977401129943503,
            "run_unclear_pct": 0.2994350282485876,
            "avg_trade_size": 3071.6095406360423,
            "avg_run_notional": 9822.209039548023,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3220338983050847,
            "low_confidence_pct": 0.24858757062146894,
            "na_confidence_pct": 0.4293785310734463,
            "avg_feature_coverage": 0.8694915254237287,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.35714285714285715,
            "mixed_pct": 0.15126050420168066,
            "instit_pct": 0.28991596638655465,
            "ambiguous_pct": 0.20168067226890757,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20168067226890757,
            "retail_qty_pct": 0.05755762129122628,
            "mixed_qty_pct": 0.15077040621418566,
            "instit_qty_pct": 0.4240417674773972,
            "ambiguous_qty_pct": 0.3676302050171909,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3676302050171909,
            "retail_notional_pct": 0.05786872557935745,
            "mixed_notional_pct": 0.1508203029853177,
            "instit_notional_pct": 0.4236987788057288,
            "ambiguous_notional_pct": 0.36761219262959605,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36761219262959605,
            "run_retail_pct": 0.6507936507936508,
            "run_mixed_pct": 0.11904761904761904,
            "run_instit_pct": 0.12698412698412698,
            "run_unclear_pct": 0.10317460317460317,
            "avg_trade_size": 2915.247899159664,
            "avg_run_notional": 5506.579365079365,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.16666666666666666,
            "medium_confidence_pct": 0.4603174603174603,
            "low_confidence_pct": 0.15079365079365079,
            "na_confidence_pct": 0.2222222222222222,
            "avg_feature_coverage": 0.8547619047619043,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2222222222222222,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.4444444444444444,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4444444444444444,
            "retail_qty_pct": 0.0196078431372549,
            "mixed_qty_pct": 0.17825311942959002,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.8021390374331551,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8021390374331551,
            "retail_notional_pct": 0.019483805668016194,
            "mixed_notional_pct": 0.1771255060728745,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.8033906882591093,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.8033906882591093,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 1317.3333333333333,
            "avg_run_notional": 1976.0,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.16666666666666666,
            "na_confidence_pct": 0.8333333333333334,
            "avg_feature_coverage": 0.8250000000000001,
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
            "dominant_label": "Mixed, mostly unclear",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.7250000000000001,
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
            "retail_pct": 0.2875,
            "mixed_pct": 0.16458333333333333,
            "instit_pct": 0.42291666666666666,
            "ambiguous_pct": 0.125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.125,
            "retail_qty_pct": 0.06280754679656785,
            "mixed_qty_pct": 0.1733389382062758,
            "instit_qty_pct": 0.6500457456541628,
            "ambiguous_qty_pct": 0.1138077693429935,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1138077693429935,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.17305461840975786,
            "instit_notional_pct": 0.6495066675982673,
            "ambiguous_notional_pct": 0.11407032918771086,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11407032918771086,
            "run_retail_pct": 0.5362903225806451,
            "run_mixed_pct": 0.16532258064516128,
            "run_instit_pct": 0.1774193548387097,
            "run_unclear_pct": 0.12096774193548387,
            "avg_trade_size": 4174.416666666667,
            "avg_run_notional": 8079.5161290322585,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0846774193548387,
            "medium_confidence_pct": 0.40725806451612906,
            "low_confidence_pct": 0.2217741935483871,
            "na_confidence_pct": 0.2862903225806452,
            "avg_feature_coverage": 0.8530241935483869,
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
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.5555555555555556,
            "ambiguous_pct": 0.1111111111111111,
            "unobservable_pct": 0.2222222222222222,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.00199203187250996,
            "instit_qty_pct": 0.796812749003984,
            "ambiguous_qty_pct": 0.00199203187250996,
            "unobservable_qty_pct": 0.199203187250996,
            "unclear_qty_pct": 0.20119521912350596,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.002042544711801923,
            "instit_notional_pct": 0.7966422557664524,
            "ambiguous_notional_pct": 0.001992726548099437,
            "unobservable_notional_pct": 0.1993224729736462,
            "unclear_notional_pct": 0.20131519952174562,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2230.3333333333335,
            "avg_run_notional": 3345.5,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.7833333333333333,
            "observable_run_pct": 0.8333333333333334,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2127659574468085,
            "mixed_pct": 0.02127659574468085,
            "instit_pct": 0.40425531914893614,
            "ambiguous_pct": 0.2978723404255319,
            "unobservable_pct": 0.06382978723404255,
            "unclear_pct": 0.36170212765957444,
            "retail_qty_pct": 0.0852575488454707,
            "mixed_qty_pct": 0.0004440497335701599,
            "instit_qty_pct": 0.6753996447602132,
            "ambiguous_qty_pct": 0.22069271758436945,
            "unobservable_qty_pct": 0.018206039076376555,
            "unclear_qty_pct": 0.238898756660746,
            "retail_notional_pct": 0.08730120742948264,
            "mixed_notional_pct": 0.0004584856370557161,
            "instit_notional_pct": 0.6724976634866573,
            "ambiguous_notional_pct": 0.22161482672013985,
            "unobservable_notional_pct": 0.018127816726664466,
            "unclear_notional_pct": 0.23974264344680432,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.03333333333333333,
            "run_instit_pct": 0.23333333333333334,
            "run_unclear_pct": 0.39999999999999997,
            "avg_trade_size": 4222.968085106383,
            "avg_run_notional": 6615.983333333334,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclear",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5666666666666667,
            "na_confidence_pct": 0.43333333333333335,
            "avg_feature_coverage": 0.806666666666667,
            "observable_run_pct": 0.9666666666666667,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.30789707187222715,
            "mixed_pct": 0.14108251996450755,
            "instit_pct": 0.3513753327417924,
            "ambiguous_pct": 0.19964507542147295,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19964507542147295,
            "retail_qty_pct": 0.046446019404114774,
            "mixed_qty_pct": 0.14312254868230923,
            "instit_qty_pct": 0.5616183857427922,
            "ambiguous_qty_pct": 0.24881304617078373,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24881304617078373,
            "retail_notional_pct": 0.04652866009202686,
            "mixed_notional_pct": 0.1430922044513836,
            "instit_notional_pct": 0.5612388863615383,
            "ambiguous_notional_pct": 0.24914024909505128,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24914024909505128,
            "run_retail_pct": 0.6459143968871596,
            "run_mixed_pct": 0.13424124513618677,
            "run_instit_pct": 0.10894941634241245,
            "run_unclear_pct": 0.11089494163424124,
            "avg_trade_size": 3465.0004436557233,
            "avg_run_notional": 7597.384241245136,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.24708171206225682,
            "medium_confidence_pct": 0.37937743190661477,
            "low_confidence_pct": 0.12840466926070038,
            "na_confidence_pct": 0.245136186770428,
            "avg_feature_coverage": 0.8540856031128402,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19324894514767932,
            "mixed_pct": 0.09535864978902954,
            "instit_pct": 0.3527426160337553,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.02531645569620253,
            "unclear_pct": 0.35864978902953587,
            "retail_qty_pct": 0.052901157335001565,
            "mixed_qty_pct": 0.0707694713794182,
            "instit_qty_pct": 0.5230294025649046,
            "ambiguous_qty_pct": 0.32041757898029405,
            "unobservable_qty_pct": 0.03288238974038161,
            "unclear_qty_pct": 0.35329996872067565,
            "retail_notional_pct": 0.05300967075003716,
            "mixed_notional_pct": 0.07100954005029672,
            "instit_notional_pct": 0.5206920984173169,
            "ambiguous_notional_pct": 0.32244842256339296,
            "unobservable_notional_pct": 0.03284026821895629,
            "unclear_notional_pct": 0.35528869078234926,
            "run_retail_pct": 0.3973634651600753,
            "run_mixed_pct": 0.096045197740113,
            "run_instit_pct": 0.17890772128060264,
            "run_unclear_pct": 0.3276836158192091,
            "avg_trade_size": 4093.5130801687765,
            "avg_run_notional": 9135.241054613936,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0018832391713747645,
            "medium_confidence_pct": 0.3446327683615819,
            "low_confidence_pct": 0.2297551789077213,
            "na_confidence_pct": 0.423728813559322,
            "avg_feature_coverage": 0.8425612052730697,
            "observable_run_pct": 0.992467043314501,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2247992863514719,
            "mixed_pct": 0.14763603925066904,
            "instit_pct": 0.37444246208742193,
            "ambiguous_pct": 0.25312221231043713,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25312221231043713,
            "retail_qty_pct": 0.08364417202653386,
            "mixed_qty_pct": 0.12101034336754239,
            "instit_qty_pct": 0.507828094441196,
            "ambiguous_qty_pct": 0.2875173901647277,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2875173901647277,
            "retail_notional_pct": 0.08417181278405675,
            "mixed_notional_pct": 0.12163640850556484,
            "instit_notional_pct": 0.5089482323240764,
            "ambiguous_notional_pct": 0.285243546386302,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.285243546386302,
            "run_retail_pct": 0.5023584905660378,
            "run_mixed_pct": 0.14622641509433962,
            "run_instit_pct": 0.15978773584905662,
            "run_unclear_pct": 0.19162735849056603,
            "avg_trade_size": 4670.311775200714,
            "avg_run_notional": 12347.6875,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.01179245283018868,
            "medium_confidence_pct": 0.3915094339622642,
            "low_confidence_pct": 0.25884433962264153,
            "na_confidence_pct": 0.33785377358490565,
            "avg_feature_coverage": 0.8612323113207546,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10714285714285714,
            "mixed_pct": 0.25,
            "instit_pct": 0.07142857142857142,
            "ambiguous_pct": 0.5714285714285714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5714285714285714,
            "retail_qty_pct": 0.0062592047128129605,
            "mixed_qty_pct": 0.07363770250368189,
            "instit_qty_pct": 0.25773195876288657,
            "ambiguous_qty_pct": 0.6623711340206185,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6623711340206185,
            "retail_notional_pct": 0.0061624841658392965,
            "mixed_notional_pct": 0.07326508952720052,
            "instit_notional_pct": 0.2593378753124037,
            "ambiguous_notional_pct": 0.6612345509945565,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6612345509945565,
            "run_retail_pct": 0.09090909090909091,
            "run_mixed_pct": 0.18181818181818182,
            "run_instit_pct": 0.09090909090909091,
            "run_unclear_pct": 0.6363636363636364,
            "avg_trade_size": 2086.3571428571427,
            "avg_run_notional": 2655.3636363636365,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.18181818181818182,
            "na_confidence_pct": 0.8181818181818182,
            "avg_feature_coverage": 0.8295454545454546,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.29141104294478526,
            "mixed_pct": 0.18200408997955012,
            "instit_pct": 0.3721881390593047,
            "ambiguous_pct": 0.15439672801635992,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15439672801635992,
            "retail_qty_pct": 0.06705947857584268,
            "mixed_qty_pct": 0.19289389795456352,
            "instit_qty_pct": 0.5360842404106781,
            "ambiguous_qty_pct": 0.20396238305891567,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20396238305891567,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.19300255094772129,
            "instit_notional_pct": 0.5347107620489139,
            "ambiguous_notional_pct": 0.20495664153627716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20495664153627716,
            "run_retail_pct": 0.5362035225048923,
            "run_mixed_pct": 0.1487279843444227,
            "run_instit_pct": 0.17025440313111545,
            "run_unclear_pct": 0.14481409001956946,
            "avg_trade_size": 4144.776584867076,
            "avg_run_notional": 7932.664383561644,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.05675146771037182,
            "medium_confidence_pct": 0.38943248532289626,
            "low_confidence_pct": 0.2602739726027397,
            "na_confidence_pct": 0.29354207436399216,
            "avg_feature_coverage": 0.8520547945205479,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19008264462809918,
            "mixed_pct": 0.01652892561983471,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.4049586776859504,
            "unobservable_pct": 0.024793388429752067,
            "unclear_pct": 0.4297520661157025,
            "retail_qty_pct": 0.05889167793010234,
            "mixed_qty_pct": 0.005985711527321877,
            "instit_qty_pct": 0.5410310870824484,
            "ambiguous_qty_pct": 0.3861749372465727,
            "unobservable_qty_pct": 0.00791658621355474,
            "unclear_qty_pct": 0.39409152346012744,
            "retail_notional_pct": 0.05962162680436139,
            "mixed_notional_pct": 0.00620746641213397,
            "instit_notional_pct": 0.5378367809083241,
            "ambiguous_notional_pct": 0.38858179538199833,
            "unobservable_notional_pct": 0.007752330493182237,
            "unclear_notional_pct": 0.3963341258751806,
            "run_retail_pct": 0.2987012987012987,
            "run_mixed_pct": 0.025974025974025976,
            "run_instit_pct": 0.2077922077922078,
            "run_unclear_pct": 0.4675324675324675,
            "avg_trade_size": 3835.690082644628,
            "avg_run_notional": 6027.512987012987,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5064935064935064,
            "na_confidence_pct": 0.4935064935064935,
            "avg_feature_coverage": 0.8155844155844157,
            "observable_run_pct": 0.987012987012987,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26059871950164387,
            "mixed_pct": 0.1431043433119917,
            "instit_pct": 0.3607890638518775,
            "ambiguous_pct": 0.23550787333448694,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23550787333448694,
            "retail_qty_pct": 0.0897485811184939,
            "mixed_qty_pct": 0.12016369047619048,
            "instit_qty_pct": 0.5134880260243633,
            "ambiguous_qty_pct": 0.2765997023809524,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2765997023809524,
            "retail_notional_pct": 0.08990139055133237,
            "mixed_notional_pct": 0.12075406572452738,
            "instit_notional_pct": 0.5139879215510127,
            "ambiguous_notional_pct": 0.2753566221731275,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2753566221731275,
            "run_retail_pct": 0.5454171804356761,
            "run_mixed_pct": 0.1389231401561858,
            "run_instit_pct": 0.14755445951500207,
            "run_unclear_pct": 0.16810521989313604,
            "avg_trade_size": 4177.540577954664,
            "avg_run_notional": 9922.73201808467,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.083436087135224,
            "medium_confidence_pct": 0.3937525688450473,
            "low_confidence_pct": 0.2157829839704069,
            "na_confidence_pct": 0.3070283600493218,
            "avg_feature_coverage": 0.8618988902589396,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.44251134644478063,
            "mixed_pct": 0.15658093797276854,
            "instit_pct": 0.23562783661119516,
            "ambiguous_pct": 0.16527987897125568,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16527987897125568,
            "retail_qty_pct": 0.08967656885696752,
            "mixed_qty_pct": 0.18576266563629337,
            "instit_qty_pct": 0.4830102052412665,
            "ambiguous_qty_pct": 0.24155056026547264,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24155056026547264,
            "retail_notional_pct": 0.08978247766863848,
            "mixed_notional_pct": 0.18661445379024247,
            "instit_notional_pct": 0.48267147156886625,
            "ambiguous_notional_pct": 0.24093159697225283,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24093159697225283,
            "run_retail_pct": 0.7554527428949108,
            "run_mixed_pct": 0.12888301387970919,
            "run_instit_pct": 0.054196959682749506,
            "run_unclear_pct": 0.061467283542630535,
            "avg_trade_size": 2985.373487140696,
            "avg_run_notional": 5217.004296100463,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3767349636483807,
            "medium_confidence_pct": 0.35756774619960346,
            "low_confidence_pct": 0.07534699272967614,
            "na_confidence_pct": 0.19035029742233972,
            "avg_feature_coverage": 0.8562458691341703,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2053050397877984,
            "mixed_pct": 0.09814323607427056,
            "instit_pct": 0.33156498673740054,
            "ambiguous_pct": 0.3384615384615385,
            "unobservable_pct": 0.026525198938992044,
            "unclear_pct": 0.3649867374005305,
            "retail_qty_pct": 0.062384965610772065,
            "mixed_qty_pct": 0.06684103458297007,
            "instit_qty_pct": 0.46888017049307373,
            "ambiguous_qty_pct": 0.36646323743097936,
            "unobservable_qty_pct": 0.035430591882204786,
            "unclear_qty_pct": 0.4018938293131841,
            "retail_notional_pct": 0.06164829306191062,
            "mixed_notional_pct": 0.06735433870391627,
            "instit_notional_pct": 0.47127382023650916,
            "ambiguous_notional_pct": 0.36477355472811623,
            "unobservable_notional_pct": 0.03494999326954772,
            "unclear_notional_pct": 0.39972354799766396,
            "run_retail_pct": 0.4011363636363636,
            "run_mixed_pct": 0.09431818181818181,
            "run_instit_pct": 0.16590909090909092,
            "run_unclear_pct": 0.3386363636363636,
            "avg_trade_size": 4004.1294429708223,
            "avg_run_notional": 8577.027272727273,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0011363636363636363,
            "medium_confidence_pct": 0.3409090909090909,
            "low_confidence_pct": 0.225,
            "na_confidence_pct": 0.4329545454545455,
            "avg_feature_coverage": 0.8440340909090908,
            "observable_run_pct": 0.9943181818181818,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14,
            "mixed_pct": 0.14,
            "instit_pct": 0.2,
            "ambiguous_pct": 0.52,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.52,
            "retail_qty_pct": 0.028804717623043773,
            "mixed_qty_pct": 0.04536176003628941,
            "instit_qty_pct": 0.29394420503515534,
            "ambiguous_qty_pct": 0.6318893173055115,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6318893173055115,
            "retail_notional_pct": 0.02907539207329509,
            "mixed_notional_pct": 0.04476355326392194,
            "instit_notional_pct": 0.2950054124156108,
            "ambiguous_notional_pct": 0.6311556422471722,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6311556422471722,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.1388888888888889,
            "run_unclear_pct": 0.5833333333333334,
            "avg_trade_size": 1912.27,
            "avg_run_notional": 2655.9305555555557,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3055555555555556,
            "na_confidence_pct": 0.6944444444444444,
            "avg_feature_coverage": 0.8041666666666668,
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
            "retail_pct": 0.125,
            "mixed_pct": 0.125,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.1875,
            "unobservable_pct": 0.1875,
            "unclear_pct": 0.375,
            "retail_qty_pct": 0.01553187646740112,
            "mixed_qty_pct": 0.008217446270543615,
            "instit_qty_pct": 0.04515080368430558,
            "ambiguous_qty_pct": 0.019053639154776956,
            "unobservable_qty_pct": 0.9120462344229727,
            "unclear_qty_pct": 0.9310998735777497,
            "retail_notional_pct": 0.01552844097161094,
            "mixed_notional_pct": 0.008217885694423754,
            "instit_notional_pct": 0.0453462074942784,
            "ambiguous_notional_pct": 0.01906070988448465,
            "unobservable_notional_pct": 0.9118467559552023,
            "unclear_notional_pct": 0.9309074658396869,
            "run_retail_pct": 0.15384615384615385,
            "run_mixed_pct": 0.15384615384615385,
            "run_instit_pct": 0.3076923076923077,
            "run_unclear_pct": 0.38461538461538464,
            "avg_trade_size": 27691.125,
            "avg_run_notional": 34081.38461538462,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.46153846153846156,
            "na_confidence_pct": 0.5384615384615384,
            "avg_feature_coverage": 0.7615384615384614,
            "observable_run_pct": 0.8461538461538461,
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
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2773446728088826,
            "mixed_pct": 0.15922513583746753,
            "instit_pct": 0.3453815261044177,
            "ambiguous_pct": 0.21804866524923222,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21804866524923222,
            "retail_qty_pct": 0.08915546675490439,
            "mixed_qty_pct": 0.17048511225770907,
            "instit_qty_pct": 0.49900495070666706,
            "ambiguous_qty_pct": 0.24135447028071946,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24135447028071946,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.17074889875071858,
            "instit_notional_pct": 0.5005910458922492,
            "ambiguous_notional_pct": 0.23965713877731037,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23965713877731037,
            "run_retail_pct": 0.5797180043383948,
            "run_mixed_pct": 0.1442516268980477,
            "run_instit_pct": 0.13123644251626898,
            "run_unclear_pct": 0.1447939262472885,
            "avg_trade_size": 3742.259981100874,
            "avg_run_notional": 8590.556670281996,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.04121475054229935,
            "medium_confidence_pct": 0.4463123644251627,
            "low_confidence_pct": 0.22342733188720174,
            "na_confidence_pct": 0.2890455531453362,
            "avg_feature_coverage": 0.8531724511930583,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1992619926199262,
            "mixed_pct": 0.06642066420664207,
            "instit_pct": 0.3173431734317343,
            "ambiguous_pct": 0.3874538745387454,
            "unobservable_pct": 0.02952029520295203,
            "unclear_pct": 0.41697416974169743,
            "retail_qty_pct": 0.06097285067873303,
            "mixed_qty_pct": 0.03178733031674208,
            "instit_qty_pct": 0.5294117647058824,
            "ambiguous_qty_pct": 0.36606334841628957,
            "unobservable_qty_pct": 0.011764705882352941,
            "unclear_qty_pct": 0.3778280542986425,
            "retail_notional_pct": 0.06143458779015316,
            "mixed_notional_pct": 0.03215332831999561,
            "instit_notional_pct": 0.527401257823987,
            "ambiguous_notional_pct": 0.3672288588670605,
            "unobservable_notional_pct": 0.011781967198803783,
            "unclear_notional_pct": 0.37901082606586434,
            "run_retail_pct": 0.3076923076923077,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.1952662721893491,
            "run_unclear_pct": 0.42011834319526625,
            "avg_trade_size": 2958.8966789667898,
            "avg_run_notional": 4744.739644970414,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclear",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5029585798816568,
            "na_confidence_pct": 0.4970414201183432,
            "avg_feature_coverage": 0.8162721893491124,
            "observable_run_pct": 0.9822485207100592,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2515406162464986,
            "mixed_pct": 0.11792717086834734,
            "instit_pct": 0.3322128851540616,
            "ambiguous_pct": 0.28431372549019607,
            "unobservable_pct": 0.014005602240896359,
            "unclear_pct": 0.29831932773109243,
            "retail_qty_pct": 0.07066957692357961,
            "mixed_qty_pct": 0.08322986237273072,
            "instit_qty_pct": 0.4959156199762126,
            "ambiguous_qty_pct": 0.33106350720811384,
            "unobservable_qty_pct": 0.01912143351936323,
            "unclear_qty_pct": 0.3501849407274771,
            "retail_notional_pct": 0.06974864447799578,
            "mixed_notional_pct": 0.08252701130136735,
            "instit_notional_pct": 0.49635768445586015,
            "ambiguous_notional_pct": 0.3317401698103002,
            "unobservable_notional_pct": 0.019626489954476543,
            "unclear_notional_pct": 0.3513666597647767,
            "run_retail_pct": 0.4662045060658579,
            "run_mixed_pct": 0.11149624494511842,
            "run_instit_pct": 0.15135759676487578,
            "run_unclear_pct": 0.2709416522241479,
            "avg_trade_size": 3764.9196078431373,
            "avg_run_notional": 7764.738879260543,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.09647602541883304,
            "medium_confidence_pct": 0.31080300404390526,
            "low_confidence_pct": 0.21028307336799537,
            "na_confidence_pct": 0.3824378971692663,
            "avg_feature_coverage": 0.8531484690930097,
            "observable_run_pct": 0.9971114962449451,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25625,
            "mixed_pct": 0.1375,
            "instit_pct": 0.28125,
            "ambiguous_pct": 0.325,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.325,
            "retail_qty_pct": 0.05618957045490569,
            "mixed_qty_pct": 0.0771913139958789,
            "instit_qty_pct": 0.48525915359010935,
            "ambiguous_qty_pct": 0.38135996195910604,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.38135996195910604,
            "retail_notional_pct": 0.056827604023928516,
            "mixed_notional_pct": 0.07743077436011123,
            "instit_notional_pct": 0.49086970410544745,
            "ambiguous_notional_pct": 0.3748719175105128,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3748719175105128,
            "run_retail_pct": 0.3564356435643564,
            "run_mixed_pct": 0.1188118811881188,
            "run_instit_pct": 0.13861386138613863,
            "run_unclear_pct": 0.38613861386138615,
            "avg_trade_size": 1790.228125,
            "avg_run_notional": 2836.0049504950493,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclear",
            "high_confidence_pct": 0.039603960396039604,
            "medium_confidence_pct": 0.13861386138613863,
            "low_confidence_pct": 0.31683168316831684,
            "na_confidence_pct": 0.504950495049505,
            "avg_feature_coverage": 0.8217821782178215,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4279640228945217,
            "mixed_pct": 0.18103025347506133,
            "instit_pct": 0.26034341782502046,
            "ambiguous_pct": 0.13066230580539656,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13066230580539656,
            "retail_qty_pct": 0.08772129642152919,
            "mixed_qty_pct": 0.18246143551705238,
            "instit_qty_pct": 0.48459200307519273,
            "ambiguous_qty_pct": 0.2452252649862257,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2452252649862257,
            "retail_notional_pct": 0.08779778769146546,
            "mixed_notional_pct": 0.18310595292762313,
            "instit_notional_pct": 0.48441522549179494,
            "ambiguous_notional_pct": 0.2446810338891165,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2446810338891165,
            "run_retail_pct": 0.7500729075532225,
            "run_mixed_pct": 0.1388159813356664,
            "run_instit_pct": 0.058326042578011085,
            "run_unclear_pct": 0.05278506853310003,
            "avg_trade_size": 2041.111447260834,
            "avg_run_notional": 3639.9523184601926,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4199475065616798,
            "medium_confidence_pct": 0.3441236512102654,
            "low_confidence_pct": 0.04432779235928842,
            "na_confidence_pct": 0.19160104986876642,
            "avg_feature_coverage": 0.8594050743657042,
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
            "retail_pct": 0.24305555555555555,
            "mixed_pct": 0.14257154882154882,
            "instit_pct": 0.32333754208754206,
            "ambiguous_pct": 0.29103535353535354,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.29103535353535354,
            "retail_qty_pct": 0.08915805093435958,
            "mixed_qty_pct": 0.11130762085147966,
            "instit_qty_pct": 0.44014669867657524,
            "ambiguous_qty_pct": 0.3593876295375855,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3593876295375855,
            "retail_notional_pct": 0.08893719136639493,
            "mixed_notional_pct": 0.11231829638802922,
            "instit_notional_pct": 0.44874236198018014,
            "ambiguous_notional_pct": 0.3500021502653957,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3500021502653957,
            "run_retail_pct": 0.5295857988165681,
            "run_mixed_pct": 0.14550833781603012,
            "run_instit_pct": 0.135287789133943,
            "run_unclear_pct": 0.18961807423345886,
            "avg_trade_size": 4252.274410774411,
            "avg_run_notional": 10869.71920387305,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.06320602474448628,
            "medium_confidence_pct": 0.39644970414201186,
            "low_confidence_pct": 0.2052178590640129,
            "na_confidence_pct": 0.33512641204948895,
            "avg_feature_coverage": 0.8651559978483054,
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
            "retail_pct": 0.16666666666666666,
            "mixed_pct": 0.11904761904761904,
            "instit_pct": 0.40476190476190477,
            "ambiguous_pct": 0.16666666666666666,
            "unobservable_pct": 0.14285714285714285,
            "unclear_pct": 0.30952380952380953,
            "retail_qty_pct": 0.018337229690239626,
            "mixed_qty_pct": 0.025350672121566335,
            "instit_qty_pct": 0.09409701928696669,
            "ambiguous_qty_pct": 0.11879018118059614,
            "unobservable_qty_pct": 0.7434248977206313,
            "unclear_qty_pct": 0.8622150789012274,
            "retail_notional_pct": 0.01842827975645574,
            "mixed_notional_pct": 0.02617434534473962,
            "instit_notional_pct": 0.09353143741677337,
            "ambiguous_notional_pct": 0.11888800560031323,
            "unobservable_notional_pct": 0.742977931881718,
            "unclear_notional_pct": 0.8618659374820312,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.18518518518518517,
            "run_instit_pct": 0.2962962962962963,
            "run_unclear_pct": 0.2962962962962963,
            "avg_trade_size": 13043.488095238095,
            "avg_run_notional": 20289.87037037037,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5185185185185185,
            "na_confidence_pct": 0.48148148148148145,
            "avg_feature_coverage": 0.7814814814814817,
            "observable_run_pct": 0.8888888888888888,
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
            "instit_pct": 0.14285714285714285,
            "ambiguous_pct": 0.2857142857142857,
            "unobservable_pct": 0.5714285714285714,
            "unclear_pct": 0.8571428571428571,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.03614022406938923,
            "ambiguous_qty_pct": 0.00012046741356463077,
            "unobservable_qty_pct": 0.9637393085170461,
            "unclear_qty_pct": 0.9638597759306108,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.03614022406938923,
            "ambiguous_notional_pct": 0.00012046741356463077,
            "unobservable_notional_pct": 0.9637393085170461,
            "unclear_notional_pct": 0.9638597759306108,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.8333333333333333,
            "avg_trade_size": 237.17142857142858,
            "avg_run_notional": 276.7,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.16666666666666666,
            "na_confidence_pct": 0.8333333333333334,
            "avg_feature_coverage": 0.625,
            "observable_run_pct": 0.5,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
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
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1843,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-88",
          "timestamp": "2026-03-03T08:48:33.256400",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1843,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
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
          "run_id": 1842,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-86",
          "timestamp": "2026-03-03T08:42:02.732400",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1841,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-85",
          "timestamp": "2026-03-03T08:25:03.031000",
          "price": 0.23,
          "size": 3100.0,
          "notional": 713.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-84",
          "timestamp": "2026-03-03T08:25:02.970700",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-83",
          "timestamp": "2026-03-03T08:25:02.940500",
          "price": 0.23,
          "size": 8100.0,
          "notional": 1863.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-82",
          "timestamp": "2026-03-03T08:25:02.940400",
          "price": 0.23,
          "size": 6200.0,
          "notional": 1426.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-81",
          "timestamp": "2026-03-03T08:25:02.849900",
          "price": 0.23,
          "size": 12500.0,
          "notional": 2875.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-80",
          "timestamp": "2026-03-03T08:25:02.849800",
          "price": 0.23,
          "size": 20000.0,
          "notional": 4600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-79",
          "timestamp": "2026-03-03T08:25:02.849800",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1840,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-78",
          "timestamp": "2026-03-03T08:13:42.444100",
          "price": 0.23,
          "size": 4100.0,
          "notional": 943.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1839,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-77",
          "timestamp": "2026-03-03T08:13:42.414000",
          "price": 0.23,
          "size": 95900.0,
          "notional": 22057.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1839,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-76",
          "timestamp": "2026-03-03T08:13:42.414000",
          "price": 0.23,
          "size": 4100.0,
          "notional": 943.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1839,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-75",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1838,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-74",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1838,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-73",
          "timestamp": "2026-03-03T08:01:50.011500",
          "price": 0.23,
          "size": 15900.0,
          "notional": 3657.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1838,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-72",
          "timestamp": "2026-03-03T08:00:00.028000",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1837,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-71",
          "timestamp": "2026-03-03T07:56:47.115100",
          "price": 0.23,
          "size": 2000.0,
          "notional": 460.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1836,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-70",
          "timestamp": "2026-03-03T07:56:36.228500",
          "price": 0.23,
          "size": 1500.0,
          "notional": 345.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1835,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-69",
          "timestamp": "2026-03-03T07:52:06.021200",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1834,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-68",
          "timestamp": "2026-03-03T07:52:06.021200",
          "price": 0.23,
          "size": 4700.0,
          "notional": 1081.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1834,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-67",
          "timestamp": "2026-03-03T07:47:03.720800",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1833,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-66",
          "timestamp": "2026-03-03T07:47:03.720800",
          "price": 0.23,
          "size": 9700.0,
          "notional": 2231.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1833,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
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
          "run_id": 1832,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
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
          "run_id": 1832,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-63",
          "timestamp": "2026-03-03T07:26:55.754300",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1831,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-62",
          "timestamp": "2026-03-03T07:10:36.001300",
          "price": 0.235,
          "size": 100.0,
          "notional": 23.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1830,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-61",
          "timestamp": "2026-03-03T07:09:00.033700",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1829,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
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
          "run_id": 1828,
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
        "unclear": "Ambiguous + unobservable"
      }
    },
    "price_moving_trades": {
      "total_trades": 4232,
      "price_moving_trades": 472,
      "pct_price_moving": 11.153119092627598,
      "all_movers": {
        "count": 472,
        "avg_size": 3727.1938559322034,
        "median_size": 912.0,
        "retail_count": 294,
        "mixed_count": 61,
        "institutional_count": 68,
        "ambiguous_count": 49,
        "unobservable_count": 0,
        "retail_pct": 62.28813559322034,
        "mixed_pct": 12.923728813559322,
        "instit_pct": 14.40677966101695,
        "unclear_pct": 10.38135593220339
      },
      "positive_movers": {
        "count": 235,
        "avg_size": 2258.3808510638296,
        "median_size": 26.0,
        "retail_count": 173,
        "mixed_count": 26,
        "institutional_count": 25,
        "ambiguous_count": 11,
        "unobservable_count": 0,
        "retail_pct": 73.61702127659574,
        "mixed_pct": 11.063829787234042,
        "instit_pct": 10.638297872340425,
        "unclear_pct": 4.680851063829787
      },
      "negative_movers": {
        "count": 237,
        "avg_size": 5183.611814345992,
        "median_size": 2350.0,
        "retail_count": 121,
        "mixed_count": 35,
        "institutional_count": 43,
        "ambiguous_count": 38,
        "unobservable_count": 0,
        "retail_pct": 51.0548523206751,
        "mixed_pct": 14.767932489451477,
        "instit_pct": 18.143459915611814,
        "unclear_pct": 16.033755274261605
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
