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
        "liquidity": "Volatility is unavailable for this period, so trading-risk comparisons are incomplete. Latest snapshot shows notional ADV fell to S$258.7K vs S$519.4K over 30d (-50.19%), while spread widened to 2.54% vs 2.41% (+5.39%), indicating higher trading cost.",
        "market_comparison": "Despite the slowdown, TKU still trades far above typical names: S$258.7K ADV vs market median S$28.8K and sector median S$8.0K, with 89 trades vs market 12 and sector 6. Spread is 2.54% vs market 2.95% (better than market) but worse than peers at 2.01%."
      },
      "1w": {
        "liquidity": "Over 1w, notional ADV is S$430.6K vs S$519.4K over 30d (-17.10%), showing a recent slowdown from the 30d pace. Spread is 2.50% vs 2.41% (+3.57% wider), so trading cost worsened even as activity cooled.",
        "market_comparison": "Liquidity remains a scale outlier: S$430.6K ADV vs market median S$25.1K and sector median S$5.8K, with 89 trades vs market 10 and sector 4. Spread at 2.50% is slightly better than market 2.58% and better than sector 3.01%, but still worse than peers 2.46%."
      },
      "2w": {
        "liquidity": "Over 2w, notional ADV is S$418.3K vs S$519.4K over 30d (-19.47%), continuing the pattern of lower recent activity versus the 30d baseline. Spread is 2.49% vs 2.41% (+3.34% wider), meaning costs worsened modestly as liquidity cooled.",
        "market_comparison": "TKU remains substantially more active than typical names: S$418.3K ADV vs market median S$17.1K and sector median S$5.5K, with 96.5 trades vs market 7.5 and sector 4.25. Spread at 2.49% is close to market 2.51% and better than secto%, but worse than peers."
      },
      "30d": {
        "liquidity": "Over 30d (primary), TKU shows strong liquidity for a small cap: S$519.4K notional ADV, 131 trades, and 0.3495% turnover, supporting more consistent daily activity. Trading cost is moderate at a 2.41% spread (1.17 ticks), and price impact is near zero at.",
        "market_comparison": "TKU is a liquidity leader on activity: S$519.4K ADV vs market median S$15.5K and sector median S$15.0K, and 131 trades vs market 7 and sector 6. Spread is 2.41% vs market 2.52% (better) and secto% (better) but worse than peers at 2.18% (+10.53% wider); tick."
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
          "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
          "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
          "label": "Mixed (Company Tilt) (More Volatile)",
          "pct_time": 0.5378637688600828,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
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
          "label": "Mixed (Company Tilt) (Calmer)",
          "pct_time": 0.27999999999998904,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.0,
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
          "label": "Mixed (Company Tilt) (More Volatile)",
          "pct_time": 0.5378637688600828,
          "dominant_driver": "company",
          "dominant_driver_probability": 1.0,
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
          "label": "Mixed (Company Tilt) (Calmer)",
          "pct_time": 0.27999999999998904,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.0,
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
        "text": "Liquidity score: 75.27% — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "drivers": {
        "text": "Market-Led (High, limited history)",
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
      "action_plan": "border-emerald-500/30",
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
      "Universe: 558 stocks",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "30d liquidity is strong versus peers on volume and overall score, but trading costs are slightly worse and conditions have slowed recently.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market-Led is active: market explains 61.4% of moves; confidence is High but based on only 25 days (limited history).",
    "drivers_strip": [
      {
        "title": "Current Driver",
        "text": "Market is the main driver now (61.4%), with sector at 26.3% and company-specific at 12.3%; this points to externally-driven price action rather than news-led trading."
      },
      {
        "title": "External Links",
        "text": "Market beta is 2.81 (a 1% market move has lined up with ~2.81% TKU move in the same direction in this state); sector beta is -1.55 (a 1% sector move has lined up with ~1.55% TKU move in the opposite direction)."
      },
      {
        "title": "Read Reliability",
        "text": "Model is based on 25 trading days vs a 252-day target; the current state is not sticky (30% stay probability) with ~1.26 expected days, so the driver mix can change quickly."
      }
    ],
    "drivers_pie_title": "Driver Mix (Active Regime vs Recent Aggregate)",
    "drivers_pie_note": "Active regime shows what is driving price now; reporting-window mix is the recent average and can differ from the current state.",
    "lead_lag_title": "Who Leads: Market / Sector / Company?",
    "lead_lag_note": "No stable lead signal is detected in any regime (moves tend to happen at the same time rather than reliably leading by ~1 day).",
    "rolling_title": "Monthly Driver Mix (Market / Sector / Company)",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Month-by-month shares show how the dominant driver has rotated; note the sample sizes: Jan (5 days), Feb (18 days), Mar-to-date (2 days).",
    "drivers_bottom_line": "Today’s price action is primarily market-driven (61.4%), but the short history (25 days) and low state persistence (30%) mean monitoring for fast shifts back toward company-driven regimes is warranted.",
    "drivers_wtd_title": "Key Takeaways",
    "drivers_wtd_list": [
      "Driver leadership shifted from company-led in Jan 2026 (company-specific 56.8% over 5 days) to market-led in Feb (market 47.1% over 18 days) and remains market-led in early Mar (market 51.4% over 2 days).",
      "Active state sensitivity is asymmetric: strong positive market link (beta 2.81) but negative sector link (beta -1.55), so market rallies/selloffs have aligned with amplified TKU moves while sector moves have tended to go the other way."
    ],
    "regime_title": "Price Driver Regimes (How the Stock Behaves in Different States)",
    "regime_subtitle": "Three regimes identified; TKU is currently in Market-Led, but it has been in company-tilted mixed regimes most of the time (53.8% + 28.0% = 81.8%).",
    "regime_badge_text": "Current: Market-Led (30% stay; ~1.26 days expected)",
    "regime_pie_title": "Time Spent in Each Regime (last 25 days)",
    "transition_title": "Regime Stickiness & Switching (Mean Probabilities)",
    "transition_cols": [
      "From \\ To",
      "Mixed (Company Tilt) (Calmer)",
      "Market-Led"
    ],
    "transition_note_template": "Probabilities reflect the next-state tendency; the current Market-Led regime has a 30.3% chance to stay Market-Led, and more often shifts to Mixed (Company Tilt) (Calmer) at 54.3%.",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "30d liquidity score 75.27% (rank 139/558). Recent 1d–2w activity is below the 30d baseline, and spreads are modestly wider versus 30d.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Activity is far above market/sector medians, while percent spreads are better than market/sector but worse than peer median; volatility is elevated where available.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "As of 2026-03-03 (Toku Ltd, TKU, XSES) | Small-cap (125.5M) | Software - Application",
    "perf_insight": "Mixed relative story: materially lagged market and peers over 1W/30D, but held up versus a falling sector over 2W.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests calibrated on available history from Jan 22, 2026 to Mar 3, 2026 (27 trading days • 8,547 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Displayed top-10 levels per side: bid depth 298,450 vs ask depth 857,210 (bid/ask 0.3482). Only 7 price levels are currently visible, so depth is concentrated and may thin quickly if a larger sell order hits bids. Depth shown is based on top 10 bid and top 10 ask levels. Full-orderbook coverage is planned in a coming update.",
    "peer_capacity_title": "Liquidity Capacity (History-Limited)",
    "peer_capacity_note": "Trade-size stress test uses only Jan 22, 2026 to Mar 3, 2026 (27 trading days • 8,547 trades), not a full-year sample; large-trade inferences are therefore less stable for leadership reporting.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Impacts are approximate price percent moves if sold into displayed bids; all scenarios show 100% fill in the model but at meaningful price concession for larger sizes.",
    "exec_check_insight": "Current spread is 4.35% (2 ticks), versus an intraday median of 2.13% (1 tick), indicating cost worsened into the close; displayed bid depth is materially lighter than ask depth, raising downside price risk for sell pressure.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Behavioral mix of retail-like, mixed, institution-like, and unclear trading.",
    "trader_retail_threshold": "Retail-like",
    "trader_mixed_threshold": "Mixed",
    "trader_instit_threshold": "Institution-like",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How TKU compares vs 8 software/application peers (30d)",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Share of trades that change the last price; split by direction",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Mostly continuous trading with small auction share; activity clusters around specific times",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Session shares are based on notional activity, shown for the selected period and recent windows.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI ranges from 0 to 1; higher means trading is more concentrated into fewer time buckets. TKU: {hhi}.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time shows the single busiest time bucket by notional share.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Lower HHI suggests trading is spread more evenly through the day; higher HHI implies liquidity is clustered and can be less predictable.",
    "intraday_insight": "Trading is overwhelmingly in the continuous session (95.3%), with 4.7% in auctions split between open (1.2%) and close (2.8%). Peak activity is at 13:00 (13.1% of notional), where short-term price sensitivity can be higher.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is near zero vs notional ADV; days-to-cover near zero and MoM short interest fell from 0.19% (2026-02) to near zero (2026-03).",
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
          "title": "Liquidity Score (30d PCA)",
          "body": "Composite liquidity score for the 30d window, combining volume, spread, trades/day, turnover, and volatility."
        },
        "value": "75.3",
        "suffix": "/100",
        "bar_pct": 75.3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Rank 139/558 • Above-average liquidity in the universe",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Spread (30d)",
          "body": "Average bid-ask spread for the 30d window; higher spread generally means higher trading cost."
        },
        "value": "2.41",
        "suffix": "%",
        "bar_pct": 2.41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Avg spread 1.17 ticks (1 tick = minimum price step); spread is higher than peers (2.41% vs 2.18%) and has worsened vs 30d in recent windows (+5.39% 1d, +3.57% 1w).",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "ADV (Notional, 30d)",
          "body": "Average daily traded value (notional) over the 30d window; higher ADV typically supports easier trading."
        },
        "value": "S$519K",
        "suffix": "",
        "bar_pct": 100,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "30d ADV S$519K vs peer median S$15K (+3355.7%); however, recent activity slowed (1d -50.19%, 1w -17.10%, 2w -19.47% vs 30d).",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Dominant Driver (Current State)",
          "body": "Shows whether recent price moves are mostly driven by the overall market, the sector, or company-specific factors."
        },
        "value": "61.4",
        "suffix": "market",
        "bar_pct": 61.4,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Market-led regime: 61.4% of moves are explained by the broader market (based on 25 trading days vs a 252-day target, so confidence is lower).",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is strong for a small cap: score 75.3 (rank 139/558) and 30d ADV S$519K vs peer median S$15K (+3355.7%), supporting capacity relative to peers.",
      "Trading costs are slightly worse than peers despite fewer ticks: spread is 2.41% vs 2.18% peer median (+10.53% wider/worse); the spread averages 1.17 ticks (1 tick = minimum price step) vs 1.35 ticks for peers.",
      "Near-term conditions weakened versus the 30d baseline: ADV slowed (1d -50.19%, 1w -17.10%, 2w -19.47%) while spreads widened (+5.39% 1d, +3.57% 1w, +3.34% 2w), indicating higher recent trading friction."
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "perf_badge": "Context",
    "liq_tiles": [
      {
        "title": "Liquidity Score (30d)",
        "value": "75.27%",
        "sub": "Rank 139/558 (higher is better)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (30d)",
        "value": "S$519.4K",
        "sub": "Vs 1d S$258.7K (-50.19% vs 30d)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (30d)",
        "value": "2.41% (1.17 ticks)",
        "sub": "1d 2.54% (+5.39% wider vs 30d); peers 2.18% (1.35 ticks)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Core liquidity is strong over 30d (S$519.4K ADV; 131 trades; score 75.27%), but the latest 1d–2w windows show a clear activity slowdown (ADV down 17%–50% vs 30d) alongside modestly wider spreads (+3%–5% vs 30d). Versus peers, TKU is a volume leader (+3356%.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.23",
        "note": "Mid based on current displayed book snapshot (top-10 per side coverage; 7 levels visible).",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.35%",
        "note": "2 ticks at 0.005 tick size; wider than intraday median spread 2.13% (1 tick), with the widest bucket at 16:00.",
        "color": "text-red-400"
      },
      {
        "title": "Depth",
        "value": "Bid 298,450 vs Ask 857,210",
        "note": "Displayed depth imbalance (bid/ask 0.3482) means less visible support on the buy side if selling arrives; based on top-10 levels per side only.",
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
      "overall": "Current driver mix is Market-Led: market 61.4%, secto%, company 12.3%. This indicates TKU’s near-term moves are more aligned with broad market forces than company-specific catalysts, despite the recent aggregate mix showing higher company influence (company.",
      "beta": "In the current Market-Led state, TKU has a high market link (market beta 2.81: a 1% market move has lined up with ~2.81% TKU move in the same direction). Sector link is also strong but opposite (sector beta -1.55: a 1% sector move has lined up with ~1.55% TKU.",
      "rolling_change": "Month-by-month, leadership rotated: Jan 2026 was company-led (company 56.8%, market 32.6%, sector 10.6; 5 days), Feb flipped to market-led (market 47.1%, company 34.4%, sector 18.5; 18 days), and Mar-to-date remains market-led (market 51.4%, sector 34.1%.",
      "interpretation": "Moderate"
    },
    "regime": {
      "overall": "Across the 25-day history, TKU spent 81.8% of time in company-tilted mixed regimes (Mixed More Volatile 53.8% with company 42.9% share; Mixed Calme% with company 48.4% share) and 18.2% in Market-Led (market 61.4% share). This mix suggests the stock often.",
      "current": "Current regime is Market-Led with High confidence but limited history (25 days vs 252-day target). The state is not persistent: 30.0% stay probability with ~1.26 expected days, so leadership can rotate quickly even if today is market-driven.",
      "transitions": "Market-Led is more likely to switch than to persist: 30.3% chance to remain Market-Led, 54.3% chance to shift to Mixed (Company Tilt) (Calmer), and 15.3% chance to shift to Mixed (Company Tilt) (More Volatile). Mixed regimes also show moderate persistence.",
      "trading_implications": "Regimes differ mainly by what dominates: Market-Led concentrates moves in broad market factors (61.4% market share), while the two Mixed (Company Tilt) regimes shift influence back toward company-specific forces (42.9%–48.4% company share) with one labeled."
    },
    "liquidity": {
      "overall": "TKU’s liquidity profile is strong for its size on a 30d view, but near-term conditions are deteriorating: ADV is down (1d -50.19%, 1w -17.10%, 2w -19.47% vs 30d) and spreads are wider (+3.34% to +5.39% vs 30d), increasing trading cost as activity cools.",
      "strengths": [
        "Activity leadership vs peers: 30d notional ADV S$519.4K vs peer median S$15.0K (+3355.71%) and 131 trades vs peers 6, supporting day-to-day tradability.",
        "Tick-based spread remains near 1 tick (30d 1.17 ticks; 1d 1.19 ticks), which typically signals continuous quoting even when the percent spread is higher.",
        "Price impact is near zero and improves with longer windows (1d 1.61e-07 vs 30d 4.97e-08), indicating lower slippage under the 30d trading regime."
      ],
      "concerns": [
        "Recent activity slowdown: 1d ADV S$258.7K vs 30d S$519.4K (-50.19%), reducing immediate liquidity available on a typical day.",
        "Trading cost worsened versus the 30d baseline: spread widened to 2.54% in 1d vs 2.41% (+5.39%), and 1w/2w are also wider (+3.57%/+3.34%).",
        "Peer cost gap persists: 30d spread 2.41% vs peer median 2.18% (+10.53% wider), so trading is more expensive than comparable names despite higher volume."
      ],
      "peer_context": "TKU is a clear liquidity leader on activity (ADV and trades multiples above peers across all periods), but a relative laggard on percent spread (1d +26.26% wider; 30d +10.53% wider vs peer median), pointing to higher transaction costs than peers even with."
    },
    "market_comparison": {
      "adv": "TKU’s notional ADV is consistently far above market, sector, and peer medians, although the latest snapshot is materially below the 30d baseline (S$258.7K vs S$519.4K, -50.19%).",
      "spread": "Percent spreads are better than the broad market and sector but worse than peers, meaning TKU is active yet comparatively more expensive to trade; tick spread stays near 1 tick (30d 1.17), which is mechanically tight.",
      "volatility": "Where reported, volatility is materially higher than market/sector/peers (more day-to-day price movement), which can raise execution uncertainty even when volume is high; 1d volatility is unavailable.",
      "trades": "Trade count is consistently far above market/sector/peers, supporting steadier two-way flow; 30d is strongest at 131 trades, while 1d/1w hold at 89 trades."
    },
    "performance": {
      "overall": "1W and 30D show clear relative underperformance: stock -9.8% vs market -2.1% (1W) and -0.3% (30D), and vs peers -1.3% (1W) and -1.0% (30D), signaling weaker near-term confidence in the company-specific narrative than comparables.",
      "conclusion": "The trajectory points to company-specific pressure rather than a broad tape: despite sector weakness (sector -2.2% 1W, -4.4% 30D), TKU fell more (-9.8% in both 1W and 30D), while the 2W flat return (~0.0%) versus sector -2.1% suggests intermittent support but."
    },
    "execution": {
      "overall": "Current trading conditions show high visible transaction cost: spread is 4.35% (2 ticks) and materially above the intraday median 2.13% (1 tick), which raises the expected cost of any immediate liquidity-taking sell.",
      "concern": "Displayed depth is skewed to the sell side (bid 298,450 vs ask 857,210; bid/ask 0.3482) and only 7 levels are visible; larger sells would likely move price by roughly 2.4%–3.3% based on both historical and observed large-order scenarios.",
      "peer_context": "Peer/universe comparisons are unavailable in the data provided (Universe 558, Peers 8 listed without metrics); the only robust reference is intraday self-history, which shows spreads widest at 16:00 and bid depth thinnest at 14:30 versus deepest at 10:30."
    },
    "trader_composition": {
      "overall": "30d: Retail-like is 27.7% of trades but only 8.9% of notional; institution-like is 34.5% of trades and 50.1% of notional, with unclear still 24.0% of trades and 29.3% of notional. Run-share flips the story: retail-like is 58.0% of runs vs 13.1%.",
      "retail_heavy": "Retail-like presence is persistent by frequency (27.7% of trades; 58.0% of runs), but it contributes limited value (8.9% of notional), consistent with smaller ticket behavior. Coverage is strong (avg 0.85; 100% observable runs) but only 4.1% of runs are.",
      "institutional_gap": "Institution-like flow is the main source of value: 50.1% of 30d notional on 34.5% of trades, while retail-like is 8.9% notional on 27.7% of trades. Over time, institution-like notional fell from 62.4% (2026-01) to 44.6% (2026-02) then rebounded to 69.7%.",
      "peer_comparison": "TKU’s unclear share (30d notional 29.3%; trades 24.0%) is lower than several peers with very high unclear flow (e.g., 532: 96.4% notional unclear; NXR: 86.3%), making TKU more interpretable than the most opaque names. TKU’s retail-like runs (58.0%) are higher."
    },
    "price_moving": {
      "overall": "11.2% of trades are price-moving (472 of 4232), meaning most activity does not change the last traded price. This is a moderate rate for a small-cap tape and indicates meaningful but not constant price sensitivity.",
      "interpretation": "Moderate",
      "asymmetry": "Price-moving trades are balanced by direction (235 positive vs 237 negative), so there is no clear one-sided pressure in count terms. The provided mover breakdown by persona shows implausible percentages (e.g., retail=6228.8%), so attribution of movers to."
    },
    "intraday": {
      "overall": "1M session mix is heavily continuous (95.3% of notional), with 4.7% in auctions (open 1.2%, close 2.8%). Peak trading time is 13:00 with 13.1% of notional, indicating a midday liquidity bulge rather than a purely open/close-driven tape.",
      "hhi_interpretation": "HHI is 0.2113 (labeled concentrated), meaning trading is somewhat clustered into fewer time buckets rather than evenly spread; this can make displayed liquidity less consistent across the day. The pattern varies by window: HHI rose to 0.2721 in 1W vs 0.1851.",
      "best_times": "Activity concentrates most at 13:00 (13.1% of notional), so price response to flow can be more noticeable around the busiest bucket even if spreads are unchanged. Auctions remain a minority (4.7% total), but the close (2.8%) is larger than the open (1.2%), so.",
      "peer_ranking": "TKU’s peer HHI is 0.1935, lower (more even) than most listed peers shown (ITS 0.2507, LVR 0.3466, U77 0.5063, NXR 0.6550, 532 0.7835), indicating comparatively steadier intraday distribution. BN2 is close at 0.2324, implying TKU is among the less concentrated."
    },
    "short_selling": {
      "overall": "Short selling is minimal: 1M avg short ratio 0.18% with a 1.47% max spike, and 1W/2W averages are near zero; this signals limited bearish positioning and little risk of short-driven pressure.",
      "level": "Low — 1M avg short ratio 0.18% and current near zero; relative to peers, TKU is an outlier on the low side versus BN2 avg 1.90% and 5DD avg 0.42%.",
      "correlation": "N/A — no Granger-causality or return linkage data provided, so any lead/lag between shorts and returns is unavailable.",
      "trend": "Decreasing — short interest is reported as covering significantly (-100% MoM) with ratio moving from 0.19% (2026-02) to near zero (2026-03); days-to-cover is near zero (max 0.004), meaning any short position is easily unwound rather than building."
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
            "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
            "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
            "label": "Mixed (Company Tilt) (More Volatile)",
            "pct_time": 0.5378637688600828,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
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
            "label": "Mixed (Company Tilt) (Calmer)",
            "pct_time": 0.27999999999998904,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.0,
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
          "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
          "regime_label": "Mixed (Company Tilt) (More Volatile)",
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
          "Mixed (Company Tilt) (More Volatile)",
          "Mixed (Company Tilt) (Calmer)",
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
            "label": "Mixed (Company Tilt) (More Volatile)",
            "pct_time": 0.5378637688600828,
            "dominant_driver": "company",
            "dominant_driver_probability": 1.0,
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
            "label": "Mixed (Company Tilt) (Calmer)",
            "pct_time": 0.27999999999998904,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.0,
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
          "dominant_label": "Retail Tilt",
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
              "dominant_label": "Retail Tilt",
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
              "dominant_label": "Institutional Tilt",
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
              "instit_pct": 0.3875598086124402,
              "ambiguous_pct": 0.22966507177033493,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22966507177033493,
              "retail_qty_pct": 0.06422454804947669,
              "mixed_qty_pct": 0.06517602283539486,
              "instit_qty_pct": 0.5237868696479543,
              "ambiguous_qty_pct": 0.3468125594671741,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3468125594671741,
              "retail_notional_pct": 0.06394620640198828,
              "mixed_notional_pct": 0.06445457358553584,
              "instit_notional_pct": 0.5256025501859102,
              "ambiguous_notional_pct": 0.34599666982656574,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.34599666982656574,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.11403508771929824,
              "run_instit_pct": 0.18421052631578946,
              "run_unclear_pct": 0.20175438596491227,
              "avg_trade_size": 1948.2583732057417,
              "avg_run_notional": 3571.8070175438597,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.34210526315789475,
              "low_confidence_pct": 0.34210526315789475,
              "na_confidence_pct": 0.3157894736842105,
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
              "retail_pct": 0.1501766784452297,
              "mixed_pct": 0.11837455830388692,
              "instit_pct": 0.3674911660777385,
              "ambiguous_pct": 0.36395759717314485,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36395759717314485,
              "retail_qty_pct": 0.05662455458373826,
              "mixed_qty_pct": 0.11597019760285067,
              "instit_qty_pct": 0.4898607061872368,
              "ambiguous_qty_pct": 0.33754454162617425,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.33754454162617425,
              "retail_notional_pct": 0.05699006805170572,
              "mixed_notional_pct": 0.11619752538206106,
              "instit_notional_pct": 0.49151956450589607,
              "ambiguous_notional_pct": 0.33529284206033716,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.33529284206033716,
              "run_retail_pct": 0.423728813559322,
              "run_mixed_pct": 0.12994350282485875,
              "run_instit_pct": 0.15819209039548024,
              "run_unclear_pct": 0.288135593220339,
              "avg_trade_size": 3071.6095406360423,
              "avg_run_notional": 9822.209039548023,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3163841807909605,
              "low_confidence_pct": 0.2655367231638418,
              "na_confidence_pct": 0.4180790960451977,
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
              "mixed_pct": 0.10084033613445378,
              "instit_pct": 0.28991596638655465,
              "ambiguous_pct": 0.25210084033613445,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25210084033613445,
              "retail_qty_pct": 0.05755762129122628,
              "mixed_qty_pct": 0.09512288297465936,
              "instit_qty_pct": 0.4240417674773972,
              "ambiguous_qty_pct": 0.42327772825671717,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.42327772825671717,
              "retail_notional_pct": 0.05786872557935745,
              "mixed_notional_pct": 0.09539454245930913,
              "instit_notional_pct": 0.4236987788057288,
              "ambiguous_notional_pct": 0.4230379531556046,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4230379531556046,
              "run_retail_pct": 0.6507936507936508,
              "run_mixed_pct": 0.10317460317460317,
              "run_instit_pct": 0.12698412698412698,
              "run_unclear_pct": 0.11904761904761904,
              "avg_trade_size": 2915.247899159664,
              "avg_run_notional": 5506.579365079365,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "dominant_label": "Mixed (Unclear Flow)",
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
            "mixed_pct": 0.14791666666666667,
            "instit_pct": 0.42291666666666666,
            "ambiguous_pct": 0.14166666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14166666666666666,
            "retail_qty_pct": 0.06280754679656785,
            "mixed_qty_pct": 0.13822605771370639,
            "instit_qty_pct": 0.6500457456541628,
            "ambiguous_qty_pct": 0.1489206498355629,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1489206498355629,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.1372212684407003,
            "instit_notional_pct": 0.6495066675982673,
            "ambiguous_notional_pct": 0.14990367915676842,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14990367915676842
          },
          "run_composition": {
            "retail_pct": 0.5362903225806451,
            "mixed_pct": 0.1532258064516129,
            "instit_pct": 0.1774193548387097,
            "ambiguous_pct": 0.13306451612903225,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13306451612903225,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.1372212684407003,
            "instit_notional_pct": 0.6495066675982673,
            "unclear_notional_pct": 0.14990367915676842
          },
          "counts": {
            "trades": {
              "retail": 138,
              "mixed": 71,
              "institutional": 203,
              "ambiguous": 68,
              "unobservable": 0,
              "unclear": 68
            },
            "runs": {
              "retail": 133,
              "mixed": 38,
              "institutional": 44,
              "ambiguous": 33,
              "unobservable": 0,
              "unclear": 33
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
            "ambiguous_run_pct": 0.13306451612903225,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
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
              "mixed_pct": 0.14791666666666667,
              "instit_pct": 0.42291666666666666,
              "ambiguous_pct": 0.14166666666666666,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14166666666666666,
              "retail_qty_pct": 0.06280754679656785,
              "mixed_qty_pct": 0.13822605771370639,
              "instit_qty_pct": 0.6500457456541628,
              "ambiguous_qty_pct": 0.1489206498355629,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1489206498355629,
              "retail_notional_pct": 0.06336838480426407,
              "mixed_notional_pct": 0.1372212684407003,
              "instit_notional_pct": 0.6495066675982673,
              "ambiguous_notional_pct": 0.14990367915676842,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14990367915676842,
              "run_retail_pct": 0.5362903225806451,
              "run_mixed_pct": 0.1532258064516129,
              "run_instit_pct": 0.1774193548387097,
              "run_unclear_pct": 0.13306451612903225,
              "avg_trade_size": 4174.416666666667,
              "avg_run_notional": 8079.5161290322585,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "mixed_pct": 0.0,
              "instit_pct": 0.5555555555555556,
              "ambiguous_pct": 0.2222222222222222,
              "unobservable_pct": 0.2222222222222222,
              "unclear_pct": 0.4444444444444444,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.796812749003984,
              "ambiguous_qty_pct": 0.00398406374501992,
              "unobservable_qty_pct": 0.199203187250996,
              "unclear_qty_pct": 0.20318725099601592,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7966422557664524,
              "ambiguous_notional_pct": 0.00403527125990136,
              "unobservable_notional_pct": 0.1993224729736462,
              "unclear_notional_pct": 0.20335774423354755,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 2230.3333333333335,
              "avg_run_notional": 3345.5,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institutional Tilt",
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
              "mixed_pct": 0.0,
              "instit_pct": 0.40425531914893614,
              "ambiguous_pct": 0.3191489361702128,
              "unobservable_pct": 0.06382978723404255,
              "unclear_pct": 0.3829787234042553,
              "retail_qty_pct": 0.0852575488454707,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.6753996447602132,
              "ambiguous_qty_pct": 0.2211367673179396,
              "unobservable_qty_pct": 0.018206039076376555,
              "unclear_qty_pct": 0.23934280639431615,
              "retail_notional_pct": 0.08730120742948264,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.6724976634866573,
              "ambiguous_notional_pct": 0.22207331235719557,
              "unobservable_notional_pct": 0.018127816726664466,
              "unclear_notional_pct": 0.24020112908386004,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.23333333333333334,
              "run_unclear_pct": 0.43333333333333335,
              "avg_trade_size": 4222.968085106383,
              "avg_run_notional": 6615.983333333334,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed (Unclear Flow)",
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
              "mixed_pct": 0.11357586512866016,
              "instit_pct": 0.3513753327417924,
              "ambiguous_pct": 0.22715173025732033,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22715173025732033,
              "retail_qty_pct": 0.046446019404114774,
              "mixed_qty_pct": 0.10259409619486685,
              "instit_qty_pct": 0.5616183857427922,
              "ambiguous_qty_pct": 0.2893414986582261,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2893414986582261,
              "retail_notional_pct": 0.04652866009202686,
              "mixed_notional_pct": 0.10252786420064965,
              "instit_notional_pct": 0.5612388863615383,
              "ambiguous_notional_pct": 0.28970458934578525,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.28970458934578525,
              "run_retail_pct": 0.6459143968871596,
              "run_mixed_pct": 0.12062256809338522,
              "run_instit_pct": 0.10894941634241245,
              "run_unclear_pct": 0.1245136186770428,
              "avg_trade_size": 3465.0004436557233,
              "avg_run_notional": 7597.384241245136,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "retail_pct": 0.20337552742616033,
              "mixed_pct": 0.09282700421940929,
              "instit_pct": 0.32489451476793246,
              "ambiguous_pct": 0.35358649789029534,
              "unobservable_pct": 0.02531645569620253,
              "unclear_pct": 0.3789029535864979,
              "retail_qty_pct": 0.05696746950265874,
              "mixed_qty_pct": 0.06486549890522365,
              "instit_qty_pct": 0.48741007194244607,
              "ambiguous_qty_pct": 0.35787456990928995,
              "unobservable_qty_pct": 0.03288238974038161,
              "unclear_qty_pct": 0.39075695964967155,
              "retail_notional_pct": 0.05708218395555549,
              "mixed_notional_pct": 0.06491963305944798,
              "instit_notional_pct": 0.4847684295395432,
              "ambiguous_notional_pct": 0.3603894852264971,
              "unobservable_notional_pct": 0.03284026821895629,
              "unclear_notional_pct": 0.3932297534454534,
              "run_retail_pct": 0.4180790960451977,
              "run_mixed_pct": 0.09416195856873823,
              "run_instit_pct": 0.15065913370998116,
              "run_unclear_pct": 0.3370998116760829,
              "avg_trade_size": 4093.5130801687765,
              "avg_run_notional": 9135.241054613936,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3446327683615819,
              "low_confidence_pct": 0.224105461393597,
              "na_confidence_pct": 0.4312617702448211,
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
              "retail_pct": 0.23327386262265834,
              "mixed_pct": 0.14139161462979483,
              "instit_pct": 0.3436663693131133,
              "ambiguous_pct": 0.2816681534344335,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2816681534344335,
              "retail_qty_pct": 0.08582676371554732,
              "mixed_qty_pct": 0.08373490332076537,
              "instit_qty_pct": 0.4822317882129968,
              "ambiguous_qty_pct": 0.34820654475069057,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34820654475069057,
              "retail_notional_pct": 0.08637497912058432,
              "mixed_notional_pct": 0.08461726419439741,
              "instit_notional_pct": 0.4835364912018989,
              "ambiguous_notional_pct": 0.34547126548311935,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.34547126548311935,
              "run_retail_pct": 0.5224056603773585,
              "run_mixed_pct": 0.1391509433962264,
              "run_instit_pct": 0.13738207547169812,
              "run_unclear_pct": 0.20106132075471697,
              "avg_trade_size": 4670.311775200714,
              "avg_run_notional": 12347.6875,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.018278301886792452,
              "medium_confidence_pct": 0.392688679245283,
              "low_confidence_pct": 0.24882075471698112,
              "na_confidence_pct": 0.3402122641509434,
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
              "mixed_pct": 0.21428571428571427,
              "instit_pct": 0.07142857142857142,
              "ambiguous_pct": 0.6071428571428571,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.6071428571428571,
              "retail_qty_pct": 0.0062592047128129605,
              "mixed_qty_pct": 0.06995581737849779,
              "instit_qty_pct": 0.25773195876288657,
              "ambiguous_qty_pct": 0.6660530191458026,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6660530191458026,
              "retail_notional_pct": 0.0061624841658392965,
              "mixed_notional_pct": 0.06958471703926872,
              "instit_notional_pct": 0.2593378753124037,
              "ambiguous_notional_pct": 0.6649149234824883,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6649149234824883,
              "run_retail_pct": 0.09090909090909091,
              "run_mixed_pct": 0.13636363636363635,
              "run_instit_pct": 0.09090909090909091,
              "run_unclear_pct": 0.6818181818181818,
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
            "mixed_pct": 0.12883435582822086,
            "instit_pct": 0.3721881390593047,
            "ambiguous_pct": 0.20756646216768918,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20756646216768918,
            "retail_qty_pct": 0.06705947857584268,
            "mixed_qty_pct": 0.1099200303480852,
            "instit_qty_pct": 0.5360842404106781,
            "ambiguous_qty_pct": 0.286936250665394,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.286936250665394,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.10933600487370274,
            "instit_notional_pct": 0.5347107620489139,
            "ambiguous_notional_pct": 0.2886231876102957,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2886231876102957
          },
          "run_composition": {
            "retail_pct": 0.5362035225048923,
            "mixed_pct": 0.12720156555772993,
            "instit_pct": 0.17025440313111545,
            "ambiguous_pct": 0.16634050880626222,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16634050880626222,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.10933600487370274,
            "instit_notional_pct": 0.5347107620489139,
            "unclear_notional_pct": 0.2886231876102957
          },
          "counts": {
            "trades": {
              "retail": 285,
              "mixed": 126,
              "institutional": 364,
              "ambiguous": 203,
              "unobservable": 0,
              "unclear": 203
            },
            "runs": {
              "retail": 274,
              "mixed": 65,
              "institutional": 87,
              "ambiguous": 85,
              "unobservable": 0,
              "unclear": 85
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
            "ambiguous_run_pct": 0.16634050880626222,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
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
              "mixed_pct": 0.12883435582822086,
              "instit_pct": 0.3721881390593047,
              "ambiguous_pct": 0.20756646216768918,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20756646216768918,
              "retail_qty_pct": 0.06705947857584268,
              "mixed_qty_pct": 0.1099200303480852,
              "instit_qty_pct": 0.5360842404106781,
              "ambiguous_qty_pct": 0.286936250665394,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.286936250665394,
              "retail_notional_pct": 0.06733004546708764,
              "mixed_notional_pct": 0.10933600487370274,
              "instit_notional_pct": 0.5347107620489139,
              "ambiguous_notional_pct": 0.2886231876102957,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2886231876102957,
              "run_retail_pct": 0.5362035225048923,
              "run_mixed_pct": 0.12720156555772993,
              "run_instit_pct": 0.17025440313111545,
              "run_unclear_pct": 0.16634050880626222,
              "avg_trade_size": 4144.776584867076,
              "avg_run_notional": 7932.664383561644,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "mixed_pct": 0.0,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.4214876033057851,
              "unobservable_pct": 0.024793388429752067,
              "unclear_pct": 0.44628099173553715,
              "retail_qty_pct": 0.05889167793010234,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5410310870824484,
              "ambiguous_qty_pct": 0.39216064877389456,
              "unobservable_qty_pct": 0.00791658621355474,
              "unclear_qty_pct": 0.4000772349874493,
              "retail_notional_pct": 0.05962162680436139,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5378367809083241,
              "ambiguous_notional_pct": 0.3947892617941323,
              "unobservable_notional_pct": 0.007752330493182237,
              "unclear_notional_pct": 0.40254159228731456,
              "run_retail_pct": 0.2987012987012987,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2077922077922078,
              "run_unclear_pct": 0.4935064935064935,
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
              "retail_pct": 0.26717425160062297,
              "mixed_pct": 0.13479840802907078,
              "instit_pct": 0.33690949991347985,
              "ambiguous_pct": 0.26111784045682646,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.26111784045682646,
              "retail_qty_pct": 0.09162167774086379,
              "mixed_qty_pct": 0.08319490586932447,
              "instit_qty_pct": 0.49152131782945735,
              "ambiguous_qty_pct": 0.3336620985603544,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3336620985603544,
              "retail_notional_pct": 0.09181249926735585,
              "mixed_notional_pct": 0.08400792858688177,
              "instit_notional_pct": 0.4919448287791483,
              "ambiguous_notional_pct": 0.33223474336661407,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.33223474336661407,
              "run_retail_pct": 0.5593916974928073,
              "run_mixed_pct": 0.1302918207973695,
              "run_instit_pct": 0.1319358816276202,
              "run_unclear_pct": 0.17838060008220305,
              "avg_trade_size": 4177.540577954664,
              "avg_run_notional": 9922.73201808467,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.08795725441841348,
              "medium_confidence_pct": 0.39457459926017263,
              "low_confidence_pct": 0.20879572544184136,
              "na_confidence_pct": 0.30867242087957253,
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
              "mixed_pct": 0.10703479576399395,
              "instit_pct": 0.23562783661119516,
              "ambiguous_pct": 0.21482602118003025,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21482602118003025,
              "retail_qty_pct": 0.08967656885696752,
              "mixed_qty_pct": 0.0740732322658363,
              "instit_qty_pct": 0.4830102052412665,
              "ambiguous_qty_pct": 0.3532399936359297,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3532399936359297,
              "retail_notional_pct": 0.08978247766863848,
              "mixed_notional_pct": 0.07404032076459516,
              "instit_notional_pct": 0.48267147156886625,
              "ambiguous_notional_pct": 0.35350572999790014,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35350572999790014,
              "run_retail_pct": 0.7554527428949108,
              "run_mixed_pct": 0.08724388631857237,
              "run_instit_pct": 0.054196959682749506,
              "run_unclear_pct": 0.10310641110376735,
              "avg_trade_size": 2985.373487140696,
              "avg_run_notional": 5217.004296100463,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "retail_pct": 0.2153846153846154,
              "mixed_pct": 0.09389920424403184,
              "instit_pct": 0.3076923076923077,
              "ambiguous_pct": 0.35649867374005306,
              "unobservable_pct": 0.026525198938992044,
              "unclear_pct": 0.3830238726790451,
              "retail_qty_pct": 0.06546062191223481,
              "mixed_qty_pct": 0.05945461590622881,
              "instit_qty_pct": 0.4386563983338177,
              "ambiguous_qty_pct": 0.4009977719655139,
              "unobservable_qty_pct": 0.035430591882204786,
              "unclear_qty_pct": 0.43642836384771866,
              "retail_notional_pct": 0.06479438203319014,
              "mixed_notional_pct": 0.05998581835410234,
              "instit_notional_pct": 0.44042224843742217,
              "ambiguous_notional_pct": 0.3998475579057376,
              "unobservable_notional_pct": 0.03494999326954772,
              "unclear_notional_pct": 0.43479755117528535,
              "run_retail_pct": 0.42045454545454547,
              "run_mixed_pct": 0.09204545454545454,
              "run_instit_pct": 0.1431818181818182,
              "run_unclear_pct": 0.3443181818181818,
              "avg_trade_size": 4004.1294429708223,
              "avg_run_notional": 8577.027272727273,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3386363636363636,
              "low_confidence_pct": 0.225,
              "na_confidence_pct": 0.43636363636363634,
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
              "mixed_pct": 0.12,
              "instit_pct": 0.2,
              "ambiguous_pct": 0.54,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.54,
              "retail_qty_pct": 0.028804717623043773,
              "mixed_qty_pct": 0.043093672034474936,
              "instit_qty_pct": 0.29394420503515534,
              "ambiguous_qty_pct": 0.6341574053073259,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6341574053073259,
              "retail_notional_pct": 0.02907539207329509,
              "mixed_notional_pct": 0.042514916826598755,
              "instit_notional_pct": 0.2950054124156108,
              "ambiguous_notional_pct": 0.6334042786844953,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6334042786844953,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.1388888888888889,
              "run_unclear_pct": 0.6111111111111112,
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
              "mixed_pct": 0.0625,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.1875,
              "unclear_pct": 0.4375,
              "retail_qty_pct": 0.01553187646740112,
              "mixed_qty_pct": 0.008127144663175004,
              "instit_qty_pct": 0.04515080368430558,
              "ambiguous_qty_pct": 0.019143940762145567,
              "unobservable_qty_pct": 0.9120462344229727,
              "unclear_qty_pct": 0.9311901751851183,
              "retail_notional_pct": 0.01552844097161094,
              "mixed_notional_pct": 0.00812534702002898,
              "instit_notional_pct": 0.0453462074942784,
              "ambiguous_notional_pct": 0.019153248558879423,
              "unobservable_notional_pct": 0.9118467559552023,
              "unclear_notional_pct": 0.9310000045140817,
              "run_retail_pct": 0.15384615384615385,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.3076923076923077,
              "run_unclear_pct": 0.46153846153846156,
              "avg_trade_size": 27691.125,
              "avg_run_notional": 34081.38461538462,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
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
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.8333333333333334,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8333333333333334,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.7910447761194029,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.7910447761194029,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
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
            "mixed_pct": 0.13701866288684147,
            "instit_pct": 0.3453815261044177,
            "ambiguous_pct": 0.24025513819985825,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24025513819985825,
            "retail_qty_pct": 0.08915546675490439,
            "mixed_qty_pct": 0.11896736523296186,
            "instit_qty_pct": 0.49900495070666706,
            "ambiguous_qty_pct": 0.2928722173054667,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2928722173054667,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.11782208134575457,
            "instit_notional_pct": 0.5005910458922492,
            "ambiguous_notional_pct": 0.2925839561822744,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2925839561822744
          },
          "run_composition": {
            "retail_pct": 0.5797180043383948,
            "mixed_pct": 0.1279826464208243,
            "instit_pct": 0.13123644251626898,
            "ambiguous_pct": 0.16106290672451193,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.16106290672451193,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.11782208134575457,
            "instit_notional_pct": 0.5005910458922492,
            "unclear_notional_pct": 0.2925839561822744
          },
          "counts": {
            "trades": {
              "retail": 1174,
              "mixed": 580,
              "institutional": 1462,
              "ambiguous": 1017,
              "unobservable": 0,
              "unclear": 1017
            },
            "runs": {
              "retail": 1069,
              "mixed": 236,
              "institutional": 242,
              "ambiguous": 297,
              "unobservable": 0,
              "unclear": 297
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
            "ambiguous_run_pct": 0.16106290672451193,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
          "dominant_share": 0.5797180043383948,
          "dominance_gap": 0.41865509761388287,
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
              "mixed_pct": 0.13701866288684147,
              "instit_pct": 0.3453815261044177,
              "ambiguous_pct": 0.24025513819985825,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24025513819985825,
              "retail_qty_pct": 0.08915546675490439,
              "mixed_qty_pct": 0.11896736523296186,
              "instit_qty_pct": 0.49900495070666706,
              "ambiguous_qty_pct": 0.2928722173054667,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2928722173054667,
              "retail_notional_pct": 0.08900291657972186,
              "mixed_notional_pct": 0.11782208134575457,
              "instit_notional_pct": 0.5005910458922492,
              "ambiguous_notional_pct": 0.2925839561822744,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2925839561822744,
              "run_retail_pct": 0.5797180043383948,
              "run_mixed_pct": 0.1279826464208243,
              "run_instit_pct": 0.13123644251626898,
              "run_unclear_pct": 0.16106290672451193,
              "avg_trade_size": 3742.259981100874,
              "avg_run_notional": 8590.556670281996,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "mixed_pct": 0.05904059040590406,
              "instit_pct": 0.3173431734317343,
              "ambiguous_pct": 0.3948339483394834,
              "unobservable_pct": 0.02952029520295203,
              "unclear_pct": 0.4243542435424354,
              "retail_qty_pct": 0.06097285067873303,
              "mixed_qty_pct": 0.02828054298642534,
              "instit_qty_pct": 0.5294117647058824,
              "ambiguous_qty_pct": 0.36957013574660635,
              "unobservable_qty_pct": 0.011764705882352941,
              "unclear_qty_pct": 0.3813348416289593,
              "retail_notional_pct": 0.06143458779015316,
              "mixed_notional_pct": 0.028560436285091806,
              "instit_notional_pct": 0.527401257823987,
              "ambiguous_notional_pct": 0.3708217509019643,
              "unobservable_notional_pct": 0.011781967198803783,
              "unclear_notional_pct": 0.3826037181007681,
              "run_retail_pct": 0.3076923076923077,
              "run_mixed_pct": 0.0650887573964497,
              "run_instit_pct": 0.1952662721893491,
              "run_unclear_pct": 0.4319526627218935,
              "avg_trade_size": 2958.8966789667898,
              "avg_run_notional": 4744.739644970414,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclear Flow",
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25625,
              "mixed_pct": 0.10625,
              "instit_pct": 0.28125,
              "ambiguous_pct": 0.35625,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.35625,
              "retail_qty_pct": 0.05618957045490569,
              "mixed_qty_pct": 0.05262323664606118,
              "instit_qty_pct": 0.48525915359010935,
              "ambiguous_qty_pct": 0.40592803930892374,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.40592803930892374,
              "retail_notional_pct": 0.056827604023928516,
              "mixed_notional_pct": 0.053114739217941846,
              "instit_notional_pct": 0.49086970410544745,
              "ambiguous_notional_pct": 0.3991879526526822,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3991879526526822,
              "run_retail_pct": 0.3564356435643564,
              "run_mixed_pct": 0.07920792079207921,
              "run_instit_pct": 0.13861386138613863,
              "run_unclear_pct": 0.42574257425742573,
              "avg_trade_size": 1790.228125,
              "avg_run_notional": 2836.0049504950493,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed (Unclear Flow)",
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
              "mixed_pct": 0.12919051512673754,
              "instit_pct": 0.26034341782502046,
              "ambiguous_pct": 0.18250204415372037,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18250204415372037,
              "retail_qty_pct": 0.08772129642152919,
              "mixed_qty_pct": 0.07020978224503306,
              "instit_qty_pct": 0.48459200307519273,
              "ambiguous_qty_pct": 0.357476918258245,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.357476918258245,
              "retail_notional_pct": 0.08779778769146546,
              "mixed_notional_pct": 0.07032326070243823,
              "instit_notional_pct": 0.48441522549179494,
              "ambiguous_notional_pct": 0.3574637261143014,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3574637261143014,
              "run_retail_pct": 0.7500729075532225,
              "run_mixed_pct": 0.10323709536307961,
              "run_instit_pct": 0.058326042578011085,
              "run_unclear_pct": 0.08836395450568679,
              "avg_trade_size": 2041.111447260834,
              "avg_run_notional": 3639.9523184601926,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2585434173669468,
              "mixed_pct": 0.11288515406162465,
              "instit_pct": 0.3179271708683473,
              "ambiguous_pct": 0.2966386554621849,
              "unobservable_pct": 0.014005602240896359,
              "unclear_pct": 0.31064425770308124,
              "retail_qty_pct": 0.07263007933499759,
              "mixed_qty_pct": 0.07083948713256917,
              "instit_qty_pct": 0.47832337833775534,
              "ambiguous_qty_pct": 0.35908562167531466,
              "unobservable_qty_pct": 0.01912143351936323,
              "unclear_qty_pct": 0.3782070551946779,
              "retail_notional_pct": 0.07179942091085156,
              "mixed_notional_pct": 0.07036676414873173,
              "instit_notional_pct": 0.47782428720750453,
              "ambiguous_notional_pct": 0.36038303777843567,
              "unobservable_notional_pct": 0.019626489954476543,
              "unclear_notional_pct": 0.3800095277329122,
              "run_retail_pct": 0.47891392258809934,
              "run_mixed_pct": 0.10745233968804159,
              "run_instit_pct": 0.13807047949162335,
              "run_unclear_pct": 0.2755632582322357,
              "avg_trade_size": 3764.9196078431373,
              "avg_run_notional": 7764.738879260543,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.10283073367995378,
              "medium_confidence_pct": 0.3073367995378394,
              "low_confidence_pct": 0.20681686886192951,
              "na_confidence_pct": 0.3830155979202773,
              "avg_feature_coverage": 0.8531484690930097,
              "observable_run_pct": 0.9971114962449451,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24705387205387205,
              "mixed_pct": 0.13552188552188552,
              "instit_pct": 0.3088173400673401,
              "ambiguous_pct": 0.30860690235690236,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.30860690235690236,
              "retail_qty_pct": 0.09020279644352222,
              "mixed_qty_pct": 0.08553160174204678,
              "instit_qty_pct": 0.4278944638139243,
              "ambiguous_qty_pct": 0.39637113800050666,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.39637113800050666,
              "retail_notional_pct": 0.09007883630111198,
              "mixed_notional_pct": 0.08577171119753303,
              "instit_notional_pct": 0.4355744113568061,
              "ambiguous_notional_pct": 0.3885750411445489,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3885750411445489,
              "run_retail_pct": 0.5387305002689619,
              "run_mixed_pct": 0.13851533082302314,
              "run_instit_pct": 0.12506724045185583,
              "run_unclear_pct": 0.19768692845615923,
              "avg_trade_size": 4252.274410774411,
              "avg_run_notional": 10869.71920387305,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail Tilt",
              "high_confidence_pct": 0.06616460462614308,
              "medium_confidence_pct": 0.39698762775685853,
              "low_confidence_pct": 0.20064550833781603,
              "na_confidence_pct": 0.33620225927918235,
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
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.40476190476190477,
              "ambiguous_pct": 0.21428571428571427,
              "unobservable_pct": 0.14285714285714285,
              "unclear_pct": 0.3571428571428571,
              "retail_qty_pct": 0.018337229690239626,
              "mixed_qty_pct": 0.02396259497369959,
              "instit_qty_pct": 0.09409701928696669,
              "ambiguous_qty_pct": 0.12017825832846289,
              "unobservable_qty_pct": 0.7434248977206313,
              "unclear_qty_pct": 0.8636031560490941,
              "retail_notional_pct": 0.01842827975645574,
              "mixed_notional_pct": 0.024818076526053414,
              "instit_notional_pct": 0.09353143741677337,
              "ambiguous_notional_pct": 0.12024427441899944,
              "unobservable_notional_pct": 0.742977931881718,
              "unclear_notional_pct": 0.8632222063007174,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.2962962962962963,
              "run_unclear_pct": 0.37037037037037035,
              "avg_trade_size": 13043.488095238095,
              "avg_run_notional": 20289.87037037037,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed (Institutional Tilt)",
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
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.8333333333333334,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8333333333333334,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.7910447761194029,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.7910447761194029,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed (Retail Tilt)",
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
        "mixed_pct": 0.13701866288684147,
        "instit_pct": 0.3453815261044177,
        "ambiguous_pct": 0.24025513819985825,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.24025513819985825,
        "retail_qty_pct": 0.08915546675490439,
        "mixed_qty_pct": 0.11896736523296186,
        "instit_qty_pct": 0.49900495070666706,
        "ambiguous_qty_pct": 0.2928722173054667,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2928722173054667,
        "retail_notional_pct": 0.08900291657972186,
        "mixed_notional_pct": 0.11782208134575457,
        "instit_notional_pct": 0.5005910458922492,
        "ambiguous_notional_pct": 0.2925839561822744,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2925839561822744
      },
      "run_composition": {
        "retail_pct": 0.5797180043383948,
        "mixed_pct": 0.1279826464208243,
        "instit_pct": 0.13123644251626898,
        "ambiguous_pct": 0.16106290672451193,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.16106290672451193
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
          "mixed": 580,
          "institutional": 1462,
          "ambiguous": 1017,
          "unobservable": 0,
          "unclear": 1017
        },
        "runs": {
          "retail": 1069,
          "mixed": 236,
          "institutional": 242,
          "ambiguous": 297,
          "unobservable": 0,
          "unclear": 297
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8531724511930583,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.16106290672451193,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail Tilt",
      "dominant_share": 0.5797180043383948,
      "dominance_gap": 0.41865509761388287,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 786,
            "n_runs": 310,
            "retail_pct": 0.27608142493638677,
            "mixed_pct": 0.11323155216284987,
            "instit_pct": 0.41348600508905853,
            "ambiguous_pct": 0.19720101781170485,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19720101781170485,
            "avg_trade_size": 4945.02989821883,
            "avg_run_notional": 12538.043548387097,
            "retail_qty_pct": 0.08379711388949475,
            "mixed_qty_pct": 0.0890880819537181,
            "instit_qty_pct": 0.6251152122367708,
            "ambiguous_qty_pct": 0.20199959192001632,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20199959192001632,
            "retail_notional_pct": 0.08311311110302104,
            "mixed_notional_pct": 0.08950050986758108,
            "instit_notional_pct": 0.6235925577214225,
            "ambiguous_notional_pct": 0.20379382130797533,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20379382130797533,
            "run_retail_pct": 0.6258064516129033,
            "run_mixed_pct": 0.11935483870967742,
            "run_instit_pct": 0.12903225806451613,
            "run_ambiguous_pct": 0.12580645161290321,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12580645161290321,
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
            "mixed_pct": 0.13967861557478367,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.26081582200247216,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26081582200247216,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.12507949090972445,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.3342668978073576,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3342668978073576,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.12453325535568345,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.3361214169673291,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3361214169673291,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.12658227848101267,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.1729957805907173,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1729957805907173,
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
          "mixed_pct": 0.13701866288684147,
          "instit_pct": 0.3453815261044177,
          "ambiguous_pct": 0.24025513819985825,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.24025513819985825,
          "retail_qty_pct": 0.08915546675490439,
          "mixed_qty_pct": 0.11896736523296186,
          "instit_qty_pct": 0.49900495070666706,
          "ambiguous_qty_pct": 0.2928722173054667,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2928722173054667,
          "retail_notional_pct": 0.08900291657972186,
          "mixed_notional_pct": 0.11782208134575457,
          "instit_notional_pct": 0.5005910458922492,
          "ambiguous_notional_pct": 0.2925839561822744,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2925839561822744,
          "run_retail_pct": 0.5797180043383948,
          "run_mixed_pct": 0.1279826464208243,
          "run_instit_pct": 0.13123644251626898,
          "run_unclear_pct": 0.16106290672451193,
          "avg_trade_size": 3742.259981100874,
          "avg_run_notional": 8590.556670281996,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
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
          "mixed_pct": 0.05904059040590406,
          "instit_pct": 0.3173431734317343,
          "ambiguous_pct": 0.3948339483394834,
          "unobservable_pct": 0.02952029520295203,
          "unclear_pct": 0.4243542435424354,
          "retail_qty_pct": 0.06097285067873303,
          "mixed_qty_pct": 0.02828054298642534,
          "instit_qty_pct": 0.5294117647058824,
          "ambiguous_qty_pct": 0.36957013574660635,
          "unobservable_qty_pct": 0.011764705882352941,
          "unclear_qty_pct": 0.3813348416289593,
          "retail_notional_pct": 0.06143458779015316,
          "mixed_notional_pct": 0.028560436285091806,
          "instit_notional_pct": 0.527401257823987,
          "ambiguous_notional_pct": 0.3708217509019643,
          "unobservable_notional_pct": 0.011781967198803783,
          "unclear_notional_pct": 0.3826037181007681,
          "run_retail_pct": 0.3076923076923077,
          "run_mixed_pct": 0.0650887573964497,
          "run_instit_pct": 0.1952662721893491,
          "run_unclear_pct": 0.4319526627218935,
          "avg_trade_size": 2958.8966789667898,
          "avg_run_notional": 4744.739644970414,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclear Flow",
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.25625,
          "mixed_pct": 0.10625,
          "instit_pct": 0.28125,
          "ambiguous_pct": 0.35625,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.35625,
          "retail_qty_pct": 0.05618957045490569,
          "mixed_qty_pct": 0.05262323664606118,
          "instit_qty_pct": 0.48525915359010935,
          "ambiguous_qty_pct": 0.40592803930892374,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.40592803930892374,
          "retail_notional_pct": 0.056827604023928516,
          "mixed_notional_pct": 0.053114739217941846,
          "instit_notional_pct": 0.49086970410544745,
          "ambiguous_notional_pct": 0.3991879526526822,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3991879526526822,
          "run_retail_pct": 0.3564356435643564,
          "run_mixed_pct": 0.07920792079207921,
          "run_instit_pct": 0.13861386138613863,
          "run_unclear_pct": 0.42574257425742573,
          "avg_trade_size": 1790.228125,
          "avg_run_notional": 2836.0049504950493,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed (Unclear Flow)",
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
          "mixed_pct": 0.12919051512673754,
          "instit_pct": 0.26034341782502046,
          "ambiguous_pct": 0.18250204415372037,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.18250204415372037,
          "retail_qty_pct": 0.08772129642152919,
          "mixed_qty_pct": 0.07020978224503306,
          "instit_qty_pct": 0.48459200307519273,
          "ambiguous_qty_pct": 0.357476918258245,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.357476918258245,
          "retail_notional_pct": 0.08779778769146546,
          "mixed_notional_pct": 0.07032326070243823,
          "instit_notional_pct": 0.48441522549179494,
          "ambiguous_notional_pct": 0.3574637261143014,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3574637261143014,
          "run_retail_pct": 0.7500729075532225,
          "run_mixed_pct": 0.10323709536307961,
          "run_instit_pct": 0.058326042578011085,
          "run_unclear_pct": 0.08836395450568679,
          "avg_trade_size": 2041.111447260834,
          "avg_run_notional": 3639.9523184601926,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
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
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2585434173669468,
          "mixed_pct": 0.11288515406162465,
          "instit_pct": 0.3179271708683473,
          "ambiguous_pct": 0.2966386554621849,
          "unobservable_pct": 0.014005602240896359,
          "unclear_pct": 0.31064425770308124,
          "retail_qty_pct": 0.07263007933499759,
          "mixed_qty_pct": 0.07083948713256917,
          "instit_qty_pct": 0.47832337833775534,
          "ambiguous_qty_pct": 0.35908562167531466,
          "unobservable_qty_pct": 0.01912143351936323,
          "unclear_qty_pct": 0.3782070551946779,
          "retail_notional_pct": 0.07179942091085156,
          "mixed_notional_pct": 0.07036676414873173,
          "instit_notional_pct": 0.47782428720750453,
          "ambiguous_notional_pct": 0.36038303777843567,
          "unobservable_notional_pct": 0.019626489954476543,
          "unclear_notional_pct": 0.3800095277329122,
          "run_retail_pct": 0.47891392258809934,
          "run_mixed_pct": 0.10745233968804159,
          "run_instit_pct": 0.13807047949162335,
          "run_unclear_pct": 0.2755632582322357,
          "avg_trade_size": 3764.9196078431373,
          "avg_run_notional": 7764.738879260543,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
          "high_confidence_pct": 0.10283073367995378,
          "medium_confidence_pct": 0.3073367995378394,
          "low_confidence_pct": 0.20681686886192951,
          "na_confidence_pct": 0.3830155979202773,
          "avg_feature_coverage": 0.8531484690930097,
          "observable_run_pct": 0.9971114962449451,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24705387205387205,
          "mixed_pct": 0.13552188552188552,
          "instit_pct": 0.3088173400673401,
          "ambiguous_pct": 0.30860690235690236,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.30860690235690236,
          "retail_qty_pct": 0.09020279644352222,
          "mixed_qty_pct": 0.08553160174204678,
          "instit_qty_pct": 0.4278944638139243,
          "ambiguous_qty_pct": 0.39637113800050666,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.39637113800050666,
          "retail_notional_pct": 0.09007883630111198,
          "mixed_notional_pct": 0.08577171119753303,
          "instit_notional_pct": 0.4355744113568061,
          "ambiguous_notional_pct": 0.3885750411445489,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3885750411445489,
          "run_retail_pct": 0.5387305002689619,
          "run_mixed_pct": 0.13851533082302314,
          "run_instit_pct": 0.12506724045185583,
          "run_unclear_pct": 0.19768692845615923,
          "avg_trade_size": 4252.274410774411,
          "avg_run_notional": 10869.71920387305,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail Tilt",
          "high_confidence_pct": 0.06616460462614308,
          "medium_confidence_pct": 0.39698762775685853,
          "low_confidence_pct": 0.20064550833781603,
          "na_confidence_pct": 0.33620225927918235,
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
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.40476190476190477,
          "ambiguous_pct": 0.21428571428571427,
          "unobservable_pct": 0.14285714285714285,
          "unclear_pct": 0.3571428571428571,
          "retail_qty_pct": 0.018337229690239626,
          "mixed_qty_pct": 0.02396259497369959,
          "instit_qty_pct": 0.09409701928696669,
          "ambiguous_qty_pct": 0.12017825832846289,
          "unobservable_qty_pct": 0.7434248977206313,
          "unclear_qty_pct": 0.8636031560490941,
          "retail_notional_pct": 0.01842827975645574,
          "mixed_notional_pct": 0.024818076526053414,
          "instit_notional_pct": 0.09353143741677337,
          "ambiguous_notional_pct": 0.12024427441899944,
          "unobservable_notional_pct": 0.742977931881718,
          "unclear_notional_pct": 0.8632222063007174,
          "run_retail_pct": 0.2222222222222222,
          "run_mixed_pct": 0.1111111111111111,
          "run_instit_pct": 0.2962962962962963,
          "run_unclear_pct": 0.37037037037037035,
          "avg_trade_size": 13043.488095238095,
          "avg_run_notional": 20289.87037037037,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed (Institutional Tilt)",
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
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.5,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.5,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.8333333333333334,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.8333333333333334,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.7910447761194029,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.7910447761194029,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.5,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed (Retail Tilt)",
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
            "dominant_label": "Retail Tilt",
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
            "dominant_label": "Institutional Tilt",
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
            "instit_pct": 0.3875598086124402,
            "ambiguous_pct": 0.22966507177033493,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22966507177033493,
            "retail_qty_pct": 0.06422454804947669,
            "mixed_qty_pct": 0.06517602283539486,
            "instit_qty_pct": 0.5237868696479543,
            "ambiguous_qty_pct": 0.3468125594671741,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3468125594671741,
            "retail_notional_pct": 0.06394620640198828,
            "mixed_notional_pct": 0.06445457358553584,
            "instit_notional_pct": 0.5256025501859102,
            "ambiguous_notional_pct": 0.34599666982656574,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.34599666982656574,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.11403508771929824,
            "run_instit_pct": 0.18421052631578946,
            "run_unclear_pct": 0.20175438596491227,
            "avg_trade_size": 1948.2583732057417,
            "avg_run_notional": 3571.8070175438597,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.34210526315789475,
            "low_confidence_pct": 0.34210526315789475,
            "na_confidence_pct": 0.3157894736842105,
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
            "retail_pct": 0.1501766784452297,
            "mixed_pct": 0.11837455830388692,
            "instit_pct": 0.3674911660777385,
            "ambiguous_pct": 0.36395759717314485,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36395759717314485,
            "retail_qty_pct": 0.05662455458373826,
            "mixed_qty_pct": 0.11597019760285067,
            "instit_qty_pct": 0.4898607061872368,
            "ambiguous_qty_pct": 0.33754454162617425,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.33754454162617425,
            "retail_notional_pct": 0.05699006805170572,
            "mixed_notional_pct": 0.11619752538206106,
            "instit_notional_pct": 0.49151956450589607,
            "ambiguous_notional_pct": 0.33529284206033716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33529284206033716,
            "run_retail_pct": 0.423728813559322,
            "run_mixed_pct": 0.12994350282485875,
            "run_instit_pct": 0.15819209039548024,
            "run_unclear_pct": 0.288135593220339,
            "avg_trade_size": 3071.6095406360423,
            "avg_run_notional": 9822.209039548023,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3163841807909605,
            "low_confidence_pct": 0.2655367231638418,
            "na_confidence_pct": 0.4180790960451977,
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
            "mixed_pct": 0.10084033613445378,
            "instit_pct": 0.28991596638655465,
            "ambiguous_pct": 0.25210084033613445,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25210084033613445,
            "retail_qty_pct": 0.05755762129122628,
            "mixed_qty_pct": 0.09512288297465936,
            "instit_qty_pct": 0.4240417674773972,
            "ambiguous_qty_pct": 0.42327772825671717,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.42327772825671717,
            "retail_notional_pct": 0.05786872557935745,
            "mixed_notional_pct": 0.09539454245930913,
            "instit_notional_pct": 0.4236987788057288,
            "ambiguous_notional_pct": 0.4230379531556046,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4230379531556046,
            "run_retail_pct": 0.6507936507936508,
            "run_mixed_pct": 0.10317460317460317,
            "run_instit_pct": 0.12698412698412698,
            "run_unclear_pct": 0.11904761904761904,
            "avg_trade_size": 2915.247899159664,
            "avg_run_notional": 5506.579365079365,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "dominant_label": "Mixed (Unclear Flow)",
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
            "mixed_pct": 0.14791666666666667,
            "instit_pct": 0.42291666666666666,
            "ambiguous_pct": 0.14166666666666666,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14166666666666666,
            "retail_qty_pct": 0.06280754679656785,
            "mixed_qty_pct": 0.13822605771370639,
            "instit_qty_pct": 0.6500457456541628,
            "ambiguous_qty_pct": 0.1489206498355629,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1489206498355629,
            "retail_notional_pct": 0.06336838480426407,
            "mixed_notional_pct": 0.1372212684407003,
            "instit_notional_pct": 0.6495066675982673,
            "ambiguous_notional_pct": 0.14990367915676842,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14990367915676842,
            "run_retail_pct": 0.5362903225806451,
            "run_mixed_pct": 0.1532258064516129,
            "run_instit_pct": 0.1774193548387097,
            "run_unclear_pct": 0.13306451612903225,
            "avg_trade_size": 4174.416666666667,
            "avg_run_notional": 8079.5161290322585,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "mixed_pct": 0.0,
            "instit_pct": 0.5555555555555556,
            "ambiguous_pct": 0.2222222222222222,
            "unobservable_pct": 0.2222222222222222,
            "unclear_pct": 0.4444444444444444,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.796812749003984,
            "ambiguous_qty_pct": 0.00398406374501992,
            "unobservable_qty_pct": 0.199203187250996,
            "unclear_qty_pct": 0.20318725099601592,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7966422557664524,
            "ambiguous_notional_pct": 0.00403527125990136,
            "unobservable_notional_pct": 0.1993224729736462,
            "unclear_notional_pct": 0.20335774423354755,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 2230.3333333333335,
            "avg_run_notional": 3345.5,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institutional Tilt",
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
            "mixed_pct": 0.0,
            "instit_pct": 0.40425531914893614,
            "ambiguous_pct": 0.3191489361702128,
            "unobservable_pct": 0.06382978723404255,
            "unclear_pct": 0.3829787234042553,
            "retail_qty_pct": 0.0852575488454707,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6753996447602132,
            "ambiguous_qty_pct": 0.2211367673179396,
            "unobservable_qty_pct": 0.018206039076376555,
            "unclear_qty_pct": 0.23934280639431615,
            "retail_notional_pct": 0.08730120742948264,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6724976634866573,
            "ambiguous_notional_pct": 0.22207331235719557,
            "unobservable_notional_pct": 0.018127816726664466,
            "unclear_notional_pct": 0.24020112908386004,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.23333333333333334,
            "run_unclear_pct": 0.43333333333333335,
            "avg_trade_size": 4222.968085106383,
            "avg_run_notional": 6615.983333333334,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed (Unclear Flow)",
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
            "mixed_pct": 0.11357586512866016,
            "instit_pct": 0.3513753327417924,
            "ambiguous_pct": 0.22715173025732033,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22715173025732033,
            "retail_qty_pct": 0.046446019404114774,
            "mixed_qty_pct": 0.10259409619486685,
            "instit_qty_pct": 0.5616183857427922,
            "ambiguous_qty_pct": 0.2893414986582261,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2893414986582261,
            "retail_notional_pct": 0.04652866009202686,
            "mixed_notional_pct": 0.10252786420064965,
            "instit_notional_pct": 0.5612388863615383,
            "ambiguous_notional_pct": 0.28970458934578525,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.28970458934578525,
            "run_retail_pct": 0.6459143968871596,
            "run_mixed_pct": 0.12062256809338522,
            "run_instit_pct": 0.10894941634241245,
            "run_unclear_pct": 0.1245136186770428,
            "avg_trade_size": 3465.0004436557233,
            "avg_run_notional": 7597.384241245136,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "retail_pct": 0.20337552742616033,
            "mixed_pct": 0.09282700421940929,
            "instit_pct": 0.32489451476793246,
            "ambiguous_pct": 0.35358649789029534,
            "unobservable_pct": 0.02531645569620253,
            "unclear_pct": 0.3789029535864979,
            "retail_qty_pct": 0.05696746950265874,
            "mixed_qty_pct": 0.06486549890522365,
            "instit_qty_pct": 0.48741007194244607,
            "ambiguous_qty_pct": 0.35787456990928995,
            "unobservable_qty_pct": 0.03288238974038161,
            "unclear_qty_pct": 0.39075695964967155,
            "retail_notional_pct": 0.05708218395555549,
            "mixed_notional_pct": 0.06491963305944798,
            "instit_notional_pct": 0.4847684295395432,
            "ambiguous_notional_pct": 0.3603894852264971,
            "unobservable_notional_pct": 0.03284026821895629,
            "unclear_notional_pct": 0.3932297534454534,
            "run_retail_pct": 0.4180790960451977,
            "run_mixed_pct": 0.09416195856873823,
            "run_instit_pct": 0.15065913370998116,
            "run_unclear_pct": 0.3370998116760829,
            "avg_trade_size": 4093.5130801687765,
            "avg_run_notional": 9135.241054613936,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3446327683615819,
            "low_confidence_pct": 0.224105461393597,
            "na_confidence_pct": 0.4312617702448211,
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
            "retail_pct": 0.23327386262265834,
            "mixed_pct": 0.14139161462979483,
            "instit_pct": 0.3436663693131133,
            "ambiguous_pct": 0.2816681534344335,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2816681534344335,
            "retail_qty_pct": 0.08582676371554732,
            "mixed_qty_pct": 0.08373490332076537,
            "instit_qty_pct": 0.4822317882129968,
            "ambiguous_qty_pct": 0.34820654475069057,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34820654475069057,
            "retail_notional_pct": 0.08637497912058432,
            "mixed_notional_pct": 0.08461726419439741,
            "instit_notional_pct": 0.4835364912018989,
            "ambiguous_notional_pct": 0.34547126548311935,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.34547126548311935,
            "run_retail_pct": 0.5224056603773585,
            "run_mixed_pct": 0.1391509433962264,
            "run_instit_pct": 0.13738207547169812,
            "run_unclear_pct": 0.20106132075471697,
            "avg_trade_size": 4670.311775200714,
            "avg_run_notional": 12347.6875,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.018278301886792452,
            "medium_confidence_pct": 0.392688679245283,
            "low_confidence_pct": 0.24882075471698112,
            "na_confidence_pct": 0.3402122641509434,
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
            "mixed_pct": 0.21428571428571427,
            "instit_pct": 0.07142857142857142,
            "ambiguous_pct": 0.6071428571428571,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.6071428571428571,
            "retail_qty_pct": 0.0062592047128129605,
            "mixed_qty_pct": 0.06995581737849779,
            "instit_qty_pct": 0.25773195876288657,
            "ambiguous_qty_pct": 0.6660530191458026,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6660530191458026,
            "retail_notional_pct": 0.0061624841658392965,
            "mixed_notional_pct": 0.06958471703926872,
            "instit_notional_pct": 0.2593378753124037,
            "ambiguous_notional_pct": 0.6649149234824883,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6649149234824883,
            "run_retail_pct": 0.09090909090909091,
            "run_mixed_pct": 0.13636363636363635,
            "run_instit_pct": 0.09090909090909091,
            "run_unclear_pct": 0.6818181818181818,
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
            "mixed_pct": 0.12883435582822086,
            "instit_pct": 0.3721881390593047,
            "ambiguous_pct": 0.20756646216768918,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20756646216768918,
            "retail_qty_pct": 0.06705947857584268,
            "mixed_qty_pct": 0.1099200303480852,
            "instit_qty_pct": 0.5360842404106781,
            "ambiguous_qty_pct": 0.286936250665394,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.286936250665394,
            "retail_notional_pct": 0.06733004546708764,
            "mixed_notional_pct": 0.10933600487370274,
            "instit_notional_pct": 0.5347107620489139,
            "ambiguous_notional_pct": 0.2886231876102957,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2886231876102957,
            "run_retail_pct": 0.5362035225048923,
            "run_mixed_pct": 0.12720156555772993,
            "run_instit_pct": 0.17025440313111545,
            "run_unclear_pct": 0.16634050880626222,
            "avg_trade_size": 4144.776584867076,
            "avg_run_notional": 7932.664383561644,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "mixed_pct": 0.0,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.4214876033057851,
            "unobservable_pct": 0.024793388429752067,
            "unclear_pct": 0.44628099173553715,
            "retail_qty_pct": 0.05889167793010234,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5410310870824484,
            "ambiguous_qty_pct": 0.39216064877389456,
            "unobservable_qty_pct": 0.00791658621355474,
            "unclear_qty_pct": 0.4000772349874493,
            "retail_notional_pct": 0.05962162680436139,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5378367809083241,
            "ambiguous_notional_pct": 0.3947892617941323,
            "unobservable_notional_pct": 0.007752330493182237,
            "unclear_notional_pct": 0.40254159228731456,
            "run_retail_pct": 0.2987012987012987,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2077922077922078,
            "run_unclear_pct": 0.4935064935064935,
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
            "retail_pct": 0.26717425160062297,
            "mixed_pct": 0.13479840802907078,
            "instit_pct": 0.33690949991347985,
            "ambiguous_pct": 0.26111784045682646,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26111784045682646,
            "retail_qty_pct": 0.09162167774086379,
            "mixed_qty_pct": 0.08319490586932447,
            "instit_qty_pct": 0.49152131782945735,
            "ambiguous_qty_pct": 0.3336620985603544,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3336620985603544,
            "retail_notional_pct": 0.09181249926735585,
            "mixed_notional_pct": 0.08400792858688177,
            "instit_notional_pct": 0.4919448287791483,
            "ambiguous_notional_pct": 0.33223474336661407,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33223474336661407,
            "run_retail_pct": 0.5593916974928073,
            "run_mixed_pct": 0.1302918207973695,
            "run_instit_pct": 0.1319358816276202,
            "run_unclear_pct": 0.17838060008220305,
            "avg_trade_size": 4177.540577954664,
            "avg_run_notional": 9922.73201808467,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.08795725441841348,
            "medium_confidence_pct": 0.39457459926017263,
            "low_confidence_pct": 0.20879572544184136,
            "na_confidence_pct": 0.30867242087957253,
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
            "mixed_pct": 0.10703479576399395,
            "instit_pct": 0.23562783661119516,
            "ambiguous_pct": 0.21482602118003025,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21482602118003025,
            "retail_qty_pct": 0.08967656885696752,
            "mixed_qty_pct": 0.0740732322658363,
            "instit_qty_pct": 0.4830102052412665,
            "ambiguous_qty_pct": 0.3532399936359297,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3532399936359297,
            "retail_notional_pct": 0.08978247766863848,
            "mixed_notional_pct": 0.07404032076459516,
            "instit_notional_pct": 0.48267147156886625,
            "ambiguous_notional_pct": 0.35350572999790014,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35350572999790014,
            "run_retail_pct": 0.7554527428949108,
            "run_mixed_pct": 0.08724388631857237,
            "run_instit_pct": 0.054196959682749506,
            "run_unclear_pct": 0.10310641110376735,
            "avg_trade_size": 2985.373487140696,
            "avg_run_notional": 5217.004296100463,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "retail_pct": 0.2153846153846154,
            "mixed_pct": 0.09389920424403184,
            "instit_pct": 0.3076923076923077,
            "ambiguous_pct": 0.35649867374005306,
            "unobservable_pct": 0.026525198938992044,
            "unclear_pct": 0.3830238726790451,
            "retail_qty_pct": 0.06546062191223481,
            "mixed_qty_pct": 0.05945461590622881,
            "instit_qty_pct": 0.4386563983338177,
            "ambiguous_qty_pct": 0.4009977719655139,
            "unobservable_qty_pct": 0.035430591882204786,
            "unclear_qty_pct": 0.43642836384771866,
            "retail_notional_pct": 0.06479438203319014,
            "mixed_notional_pct": 0.05998581835410234,
            "instit_notional_pct": 0.44042224843742217,
            "ambiguous_notional_pct": 0.3998475579057376,
            "unobservable_notional_pct": 0.03494999326954772,
            "unclear_notional_pct": 0.43479755117528535,
            "run_retail_pct": 0.42045454545454547,
            "run_mixed_pct": 0.09204545454545454,
            "run_instit_pct": 0.1431818181818182,
            "run_unclear_pct": 0.3443181818181818,
            "avg_trade_size": 4004.1294429708223,
            "avg_run_notional": 8577.027272727273,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3386363636363636,
            "low_confidence_pct": 0.225,
            "na_confidence_pct": 0.43636363636363634,
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
            "mixed_pct": 0.12,
            "instit_pct": 0.2,
            "ambiguous_pct": 0.54,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.54,
            "retail_qty_pct": 0.028804717623043773,
            "mixed_qty_pct": 0.043093672034474936,
            "instit_qty_pct": 0.29394420503515534,
            "ambiguous_qty_pct": 0.6341574053073259,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6341574053073259,
            "retail_notional_pct": 0.02907539207329509,
            "mixed_notional_pct": 0.042514916826598755,
            "instit_notional_pct": 0.2950054124156108,
            "ambiguous_notional_pct": 0.6334042786844953,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6334042786844953,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.1388888888888889,
            "run_unclear_pct": 0.6111111111111112,
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
            "mixed_pct": 0.0625,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.1875,
            "unclear_pct": 0.4375,
            "retail_qty_pct": 0.01553187646740112,
            "mixed_qty_pct": 0.008127144663175004,
            "instit_qty_pct": 0.04515080368430558,
            "ambiguous_qty_pct": 0.019143940762145567,
            "unobservable_qty_pct": 0.9120462344229727,
            "unclear_qty_pct": 0.9311901751851183,
            "retail_notional_pct": 0.01552844097161094,
            "mixed_notional_pct": 0.00812534702002898,
            "instit_notional_pct": 0.0453462074942784,
            "ambiguous_notional_pct": 0.019153248558879423,
            "unobservable_notional_pct": 0.9118467559552023,
            "unclear_notional_pct": 0.9310000045140817,
            "run_retail_pct": 0.15384615384615385,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.3076923076923077,
            "run_unclear_pct": 0.46153846153846156,
            "avg_trade_size": 27691.125,
            "avg_run_notional": 34081.38461538462,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
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
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.8333333333333334,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8333333333333334,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.7910447761194029,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.7910447761194029,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
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
            "mixed_pct": 0.13701866288684147,
            "instit_pct": 0.3453815261044177,
            "ambiguous_pct": 0.24025513819985825,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24025513819985825,
            "retail_qty_pct": 0.08915546675490439,
            "mixed_qty_pct": 0.11896736523296186,
            "instit_qty_pct": 0.49900495070666706,
            "ambiguous_qty_pct": 0.2928722173054667,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2928722173054667,
            "retail_notional_pct": 0.08900291657972186,
            "mixed_notional_pct": 0.11782208134575457,
            "instit_notional_pct": 0.5005910458922492,
            "ambiguous_notional_pct": 0.2925839561822744,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2925839561822744,
            "run_retail_pct": 0.5797180043383948,
            "run_mixed_pct": 0.1279826464208243,
            "run_instit_pct": 0.13123644251626898,
            "run_unclear_pct": 0.16106290672451193,
            "avg_trade_size": 3742.259981100874,
            "avg_run_notional": 8590.556670281996,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "mixed_pct": 0.05904059040590406,
            "instit_pct": 0.3173431734317343,
            "ambiguous_pct": 0.3948339483394834,
            "unobservable_pct": 0.02952029520295203,
            "unclear_pct": 0.4243542435424354,
            "retail_qty_pct": 0.06097285067873303,
            "mixed_qty_pct": 0.02828054298642534,
            "instit_qty_pct": 0.5294117647058824,
            "ambiguous_qty_pct": 0.36957013574660635,
            "unobservable_qty_pct": 0.011764705882352941,
            "unclear_qty_pct": 0.3813348416289593,
            "retail_notional_pct": 0.06143458779015316,
            "mixed_notional_pct": 0.028560436285091806,
            "instit_notional_pct": 0.527401257823987,
            "ambiguous_notional_pct": 0.3708217509019643,
            "unobservable_notional_pct": 0.011781967198803783,
            "unclear_notional_pct": 0.3826037181007681,
            "run_retail_pct": 0.3076923076923077,
            "run_mixed_pct": 0.0650887573964497,
            "run_instit_pct": 0.1952662721893491,
            "run_unclear_pct": 0.4319526627218935,
            "avg_trade_size": 2958.8966789667898,
            "avg_run_notional": 4744.739644970414,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclear Flow",
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25625,
            "mixed_pct": 0.10625,
            "instit_pct": 0.28125,
            "ambiguous_pct": 0.35625,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35625,
            "retail_qty_pct": 0.05618957045490569,
            "mixed_qty_pct": 0.05262323664606118,
            "instit_qty_pct": 0.48525915359010935,
            "ambiguous_qty_pct": 0.40592803930892374,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.40592803930892374,
            "retail_notional_pct": 0.056827604023928516,
            "mixed_notional_pct": 0.053114739217941846,
            "instit_notional_pct": 0.49086970410544745,
            "ambiguous_notional_pct": 0.3991879526526822,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3991879526526822,
            "run_retail_pct": 0.3564356435643564,
            "run_mixed_pct": 0.07920792079207921,
            "run_instit_pct": 0.13861386138613863,
            "run_unclear_pct": 0.42574257425742573,
            "avg_trade_size": 1790.228125,
            "avg_run_notional": 2836.0049504950493,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed (Unclear Flow)",
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
            "mixed_pct": 0.12919051512673754,
            "instit_pct": 0.26034341782502046,
            "ambiguous_pct": 0.18250204415372037,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18250204415372037,
            "retail_qty_pct": 0.08772129642152919,
            "mixed_qty_pct": 0.07020978224503306,
            "instit_qty_pct": 0.48459200307519273,
            "ambiguous_qty_pct": 0.357476918258245,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.357476918258245,
            "retail_notional_pct": 0.08779778769146546,
            "mixed_notional_pct": 0.07032326070243823,
            "instit_notional_pct": 0.48441522549179494,
            "ambiguous_notional_pct": 0.3574637261143014,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3574637261143014,
            "run_retail_pct": 0.7500729075532225,
            "run_mixed_pct": 0.10323709536307961,
            "run_instit_pct": 0.058326042578011085,
            "run_unclear_pct": 0.08836395450568679,
            "avg_trade_size": 2041.111447260834,
            "avg_run_notional": 3639.9523184601926,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2585434173669468,
            "mixed_pct": 0.11288515406162465,
            "instit_pct": 0.3179271708683473,
            "ambiguous_pct": 0.2966386554621849,
            "unobservable_pct": 0.014005602240896359,
            "unclear_pct": 0.31064425770308124,
            "retail_qty_pct": 0.07263007933499759,
            "mixed_qty_pct": 0.07083948713256917,
            "instit_qty_pct": 0.47832337833775534,
            "ambiguous_qty_pct": 0.35908562167531466,
            "unobservable_qty_pct": 0.01912143351936323,
            "unclear_qty_pct": 0.3782070551946779,
            "retail_notional_pct": 0.07179942091085156,
            "mixed_notional_pct": 0.07036676414873173,
            "instit_notional_pct": 0.47782428720750453,
            "ambiguous_notional_pct": 0.36038303777843567,
            "unobservable_notional_pct": 0.019626489954476543,
            "unclear_notional_pct": 0.3800095277329122,
            "run_retail_pct": 0.47891392258809934,
            "run_mixed_pct": 0.10745233968804159,
            "run_instit_pct": 0.13807047949162335,
            "run_unclear_pct": 0.2755632582322357,
            "avg_trade_size": 3764.9196078431373,
            "avg_run_notional": 7764.738879260543,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.10283073367995378,
            "medium_confidence_pct": 0.3073367995378394,
            "low_confidence_pct": 0.20681686886192951,
            "na_confidence_pct": 0.3830155979202773,
            "avg_feature_coverage": 0.8531484690930097,
            "observable_run_pct": 0.9971114962449451,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24705387205387205,
            "mixed_pct": 0.13552188552188552,
            "instit_pct": 0.3088173400673401,
            "ambiguous_pct": 0.30860690235690236,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.30860690235690236,
            "retail_qty_pct": 0.09020279644352222,
            "mixed_qty_pct": 0.08553160174204678,
            "instit_qty_pct": 0.4278944638139243,
            "ambiguous_qty_pct": 0.39637113800050666,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.39637113800050666,
            "retail_notional_pct": 0.09007883630111198,
            "mixed_notional_pct": 0.08577171119753303,
            "instit_notional_pct": 0.4355744113568061,
            "ambiguous_notional_pct": 0.3885750411445489,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3885750411445489,
            "run_retail_pct": 0.5387305002689619,
            "run_mixed_pct": 0.13851533082302314,
            "run_instit_pct": 0.12506724045185583,
            "run_unclear_pct": 0.19768692845615923,
            "avg_trade_size": 4252.274410774411,
            "avg_run_notional": 10869.71920387305,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail Tilt",
            "high_confidence_pct": 0.06616460462614308,
            "medium_confidence_pct": 0.39698762775685853,
            "low_confidence_pct": 0.20064550833781603,
            "na_confidence_pct": 0.33620225927918235,
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
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.40476190476190477,
            "ambiguous_pct": 0.21428571428571427,
            "unobservable_pct": 0.14285714285714285,
            "unclear_pct": 0.3571428571428571,
            "retail_qty_pct": 0.018337229690239626,
            "mixed_qty_pct": 0.02396259497369959,
            "instit_qty_pct": 0.09409701928696669,
            "ambiguous_qty_pct": 0.12017825832846289,
            "unobservable_qty_pct": 0.7434248977206313,
            "unclear_qty_pct": 0.8636031560490941,
            "retail_notional_pct": 0.01842827975645574,
            "mixed_notional_pct": 0.024818076526053414,
            "instit_notional_pct": 0.09353143741677337,
            "ambiguous_notional_pct": 0.12024427441899944,
            "unobservable_notional_pct": 0.742977931881718,
            "unclear_notional_pct": 0.8632222063007174,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.2962962962962963,
            "run_unclear_pct": 0.37037037037037035,
            "avg_trade_size": 13043.488095238095,
            "avg_run_notional": 20289.87037037037,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed (Institutional Tilt)",
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
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.8333333333333334,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8333333333333334,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.7910447761194029,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.7910447761194029,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed (Retail Tilt)",
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
        "mixed_count": 52,
        "institutional_count": 68,
        "ambiguous_count": 58,
        "unobservable_count": 0,
        "retail_pct": 62.28813559322034,
        "mixed_pct": 11.016949152542372,
        "instit_pct": 14.40677966101695,
        "unclear_pct": 12.288135593220339
      },
      "positive_movers": {
        "count": 235,
        "avg_size": 2258.3808510638296,
        "median_size": 26.0,
        "retail_count": 173,
        "mixed_count": 22,
        "institutional_count": 25,
        "ambiguous_count": 15,
        "unobservable_count": 0,
        "retail_pct": 73.61702127659574,
        "mixed_pct": 9.361702127659575,
        "instit_pct": 10.638297872340425,
        "unclear_pct": 6.382978723404255
      },
      "negative_movers": {
        "count": 237,
        "avg_size": 5183.611814345992,
        "median_size": 2350.0,
        "retail_count": 121,
        "mixed_count": 30,
        "institutional_count": 43,
        "ambiguous_count": 43,
        "unobservable_count": 0,
        "retail_pct": 51.0548523206751,
        "mixed_pct": 12.658227848101266,
        "instit_pct": 18.143459915611814,
        "unclear_pct": 18.143459915611814
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
