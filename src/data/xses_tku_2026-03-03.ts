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
      "marketCap": 131155488.65,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 299280000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 153515012.64000002,
      "sector": "Software - Application",
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
      "marketCap": 360647783.76,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 264160573.89999998,
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
    "market_cap_display": "131.2M",
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
          "score_pca": 72.22222222222221,
          "score_pca_percentile": 72.22222222222221,
          "rank_pca": 156,
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
          "volatility": 0.04166666666666663
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5232902573048411,
          "loadings": {
            "log_adv": 0.5494299058199308,
            "log_trades": 0.503994966488596,
            "log_turnover": 0.5144837545273447,
            "neg_spread": 0.3792426799091001,
            "neg_amihud": 0.029530659919131817,
            "neg_vol": -0.18634711839041762
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
          "peer_median_score_pca": 40.94982078853047,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.0028248587570621764,
          "peer_median_spread_pct": 0.020116712400992193,
          "peer_median_amihud": 4.540619748474346e-08,
          "peer_median_turnover_ratio": 0.0001767610636325997,
          "target_vs_peer": {
            "score_pca_delta": 31.27,
            "adv_delta_pct": 3149.6,
            "trades_delta_pct": 1383.33,
            "volatility_delta_pct": -1375.0,
            "spread_pct_delta_pct": -26.26,
            "amihud_delta_pct": -254.71,
            "turnover_ratio_delta_pct": 1015.91
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 258704.0,
            "trades": 89.0,
            "volatility": 0.04166666666666663,
            "spread_pct": 0.025399671298371417,
            "spread_ticks": 1.1888111888111887,
            "amihud": 1.6105922856494924e-07,
            "turnover_ratio": 0.0019724984647068373,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 91.21863799283155,
            "rank_pca": 50,
            "adv": 1867135.9999999998,
            "trades": 610.0,
            "volatility": 0.07407407407407396,
            "spread_pct": 0.011266735778723733,
            "spread_ticks": 1.2668650793650793,
            "amihud": 3.96725648662304e-08,
            "turnover_ratio": 0.02383935685870264,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 30.64516129032258,
            "rank_pca": 388,
            "adv": 880.0,
            "trades": 1.0,
            "volatility": 0.005649717514124353,
            "spread_pct": 0.016704013037278483,
            "spread_ticks": 2.9285714285714284,
            "amihud": 6.420133538777674e-06,
            "turnover_ratio": 6.913071246865795e-06,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 4141.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.038647342995169046,
            "spread_ticks": 3.076923076923077,
            "amihud": 0.0,
            "turnover_ratio": 0.00017977065393942648,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 44.982078853046595,
            "rank_pca": 308,
            "adv": 11781.0,
            "trades": 9.0,
            "volatility": 0.023255813953488413,
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
            "volatility": 0.0,
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
            "volatility": 0.0,
            "spread_pct": 0.5013979496738118,
            "spread_ticks": 20.692307692307693,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 74.73118279569893,
            "rank_pca": 142,
            "adv": 723536.0,
            "trades": 251.0,
            "volatility": 0.0,
            "spread_pct": 0.006560379990841034,
            "spread_ticks": 1.1600753295668549,
            "amihud": 0.0,
            "turnover_ratio": 0.0029253969309455145,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.01433691756273,
            "rank_pca": 146,
            "adv": 403180.0,
            "trades": 212.0,
            "volatility": 0.020618556701030966,
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
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.018013698120345673,
              "median": 0.0058333333333333015,
              "min": 0.0,
              "max": 0.33333333333333326,
              "p5": 0.0,
              "p95": 0.0770043336944747,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 5269457.870292205,
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
              "mean": 0.009818437980670015,
              "median": 0.0005671848593110349,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.01947519589440732,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001758293223643207,
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
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.019182105611947248,
              "median": 0.00723014510067449,
              "min": 0.0,
              "max": 0.07407407407407396,
              "p5": 0.0,
              "p95": 0.06273148148148137,
              "count": 8
            },
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
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.015449770280339711,
              "median": 0.0028248587570621764,
              "min": 0.0,
              "max": 0.07407407407407396,
              "p5": 0.0,
              "p95": 0.05628768303186899,
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
          "score_pca": 76.16487455197132,
          "score_pca_percentile": 76.16487455197132,
          "rank_pca": 134,
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
          "volatility": 0.040000000000000036
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5361167911768492,
          "loadings": {
            "log_adv": 0.5402474356286762,
            "log_trades": 0.48996104775467153,
            "log_turnover": 0.5063400299780743,
            "neg_spread": 0.3811211155327969,
            "neg_amihud": 0.09585255215554943,
            "neg_vol": -0.23926896489493166
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
          "peer_median_score_pca": 37.81362007168459,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.008319364251567651,
          "peer_median_spread_pct": 0.02460785763334713,
          "peer_median_amihud": 1.798091146438942e-08,
          "peer_median_turnover_ratio": 0.00014242162840435557,
          "target_vs_peer": {
            "score_pca_delta": 38.35,
            "adv_delta_pct": 7376.9,
            "trades_delta_pct": 2125.0,
            "volatility_delta_pct": -380.81,
            "spread_pct_delta_pct": -1.44,
            "amihud_delta_pct": -375.95,
            "turnover_ratio_delta_pct": 2020.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 76.16487455197132,
            "rank_pca": 134,
            "adv": 430575.0,
            "trades": 89.0,
            "volatility": 0.040000000000000036,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.1888111888111887,
            "amihud": 8.557943697288424e-08,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 96.415770609319,
            "rank_pca": 21,
            "adv": 2713200.0,
            "trades": 779.0,
            "volatility": 0.0714285714285714,
            "spread_pct": 0.011631496413004568,
            "spread_ticks": 1.2775768535262206,
            "amihud": 1.798091146438942e-08,
            "turnover_ratio": 0.040184482498156066,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 30.824372759856633,
            "rank_pca": 387,
            "adv": 1890.0,
            "trades": 2.0,
            "volatility": 0.005649717514124353,
            "spread_pct": 0.014037680088659044,
            "spread_ticks": 2.533333333333333,
            "amihud": 1.8278461392233783e-07,
            "turnover_ratio": 1.4517449618418169e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.899641577060933,
            "rank_pca": 381,
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
            "score_pca": 43.727598566308245,
            "rank_pca": 315,
            "adv": 7417.5,
            "trades": 6.0,
            "volatility": 0.023255813953488413,
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
            "score_pca": 4.121863799283155,
            "rank_pca": 536,
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
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 723888.0,
            "trades": 245.0,
            "volatility": 0.01098901098901095,
            "spread_pct": 0.006560379990841034,
            "spread_ticks": 1.1600753295668549,
            "amihud": 1.2049750527989901e-08,
            "turnover_ratio": 0.002926820135485016,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 820620.0,
            "trades": 212.0,
            "volatility": 0.020618556701030966,
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
              "mean": 0.01472958463195551,
              "median": 0.008474576271186363,
              "min": 0.0,
              "max": 0.33333333333333326,
              "p5": 0.0,
              "p95": 0.050127118644067825,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4725471.4100430515,
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
              "mean": 0.014172524769221567,
              "median": 0.0005005100128029418,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.016222279428473887,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00028826036394179313,
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
              "mean": 0.018643084447926103,
              "median": 0.00723014510067449,
              "min": 0.0,
              "max": 0.0714285714285714,
              "p5": 0.0,
              "p95": 0.0604285714285714,
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
              "mean": 0.01649270882327826,
              "median": 0.008319364251567651,
              "min": 0.0,
              "max": 0.0714285714285714,
              "p5": 0.0,
              "p95": 0.05456810631229232,
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
          "score_pca": 78.49462365591397,
          "score_pca_percentile": 78.49462365591397,
          "rank_pca": 121,
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
          "volatility": 0.030000000000000027
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5437524595124054,
          "loadings": {
            "log_adv": 0.535243965087107,
            "log_trades": 0.48189507725707226,
            "log_turnover": 0.4985154269132683,
            "neg_spread": 0.3857389210219704,
            "neg_amihud": 0.10597116924937255,
            "neg_vol": -0.26972022093169223
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
          "peer_median_score_pca": 43.01075268817204,
          "peer_median_trades": 4.25,
          "peer_median_volatility": 0.008257597345995127,
          "peer_median_spread_pct": 0.023624021730769773,
          "peer_median_amihud": 2.8440911856282975e-08,
          "peer_median_turnover_ratio": 0.00013163934874993753,
          "target_vs_peer": {
            "score_pca_delta": 35.48,
            "adv_delta_pct": 7501.8,
            "trades_delta_pct": 2170.59,
            "volatility_delta_pct": -263.3,
            "spread_pct_delta_pct": -5.42,
            "amihud_delta_pct": -129.16,
            "turnover_ratio_delta_pct": 2128.7
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 78.49462365591397,
            "rank_pca": 121,
            "adv": 418250.0,
            "trades": 96.5,
            "volatility": 0.030000000000000027,
            "spread_pct": 0.02490419468975198,
            "spread_ticks": 1.2158691383955071,
            "amihud": 6.517387626349488e-08,
            "turnover_ratio": 0.0029338459561295683,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 95.16129032258065,
            "rank_pca": 28,
            "adv": 1580268.25,
            "trades": 602.5,
            "volatility": 0.03879955123410622,
            "spread_pct": 0.00929560520641535,
            "spread_ticks": 1.2820416615135724,
            "amihud": 1.9464663014101422e-08,
            "turnover_ratio": 0.02154591475534149,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 39.784946236559136,
            "rank_pca": 337,
            "adv": 5095.25,
            "trades": 4.5,
            "volatility": 0.005465133641929243,
            "spread_pct": 0.013713695576394362,
            "spread_ticks": 2.4924731182795696,
            "amihud": 1.494937043578777e-07,
            "turnover_ratio": 3.802189185776187e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.87096774193548,
            "rank_pca": 370,
            "adv": 4120.5,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.05009410288582176,
            "spread_ticks": 4.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0001788807002070531,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 5908.75,
            "trades": 4.0,
            "volatility": 0.022727272727272707,
            "spread_pct": 0.033534347885145185,
            "spread_ticks": 1.4592592592592593,
            "amihud": 1.974010181944522e-06,
            "turnover_ratio": 8.439799729282196e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5089605734767026,
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
            "score_pca": 3.584229390681003,
            "rank_pca": 539,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5360460185387054,
            "spread_ticks": 22.596153846153847,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 77.06093189964157,
            "rank_pca": 129,
            "adv": 723712.0,
            "trades": 240.0,
            "volatility": 0.01105006105006101,
            "spread_pct": 0.006028735546436563,
            "spread_ticks": 1.0725683493807305,
            "amihud": 1.6464414581840726e-08,
            "turnover_ratio": 0.002926108533215265,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 639307.0,
            "trades": 212.0,
            "volatility": 0.018672438672438674,
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
              "mean": 0.010768680523760173,
              "median": 0.006770221869619453,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.035536570347891136,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3689447.110643347,
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
              "mean": 0.012968737968841064,
              "median": 0.00038541473759190736,
              "min": 0.0,
              "max": 5.569837189374464,
              "p5": 0.0,
              "p95": 0.012441918188192392,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017401160442237252,
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
              "mean": 0.012991196010711845,
              "median": 0.0062013720621579005,
              "min": 0.0,
              "max": 0.03879955123410622,
              "p5": 0.0,
              "p95": 0.03571970830216905,
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
              "mean": 0.012089307165725982,
              "median": 0.008257597345995127,
              "min": 0.0,
              "max": 0.03879955123410622,
              "p5": 0.0,
              "p95": 0.033174253756714484,
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
          "score_pca": 89.96415770609319,
          "score_pca_percentile": 89.96415770609319,
          "rank_pca": 57,
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
          "volatility": 0.03921568627450989
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5610392536785992,
          "loadings": {
            "log_adv": 0.5254547092400185,
            "log_trades": 0.47206912592410244,
            "log_turnover": 0.4955020237101012,
            "neg_spread": 0.38175391429993266,
            "neg_amihud": 0.09413965605293458,
            "neg_vol": -0.31769089924146515
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
          "peer_median_score_pca": 47.40143369175627,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.00836710881847208,
          "peer_median_spread_pct": 0.021804439166545897,
          "peer_median_amihud": 1.0244570578781913e-07,
          "peer_median_turnover_ratio": 0.00016856732386461888,
          "target_vs_peer": {
            "score_pca_delta": 42.56,
            "adv_delta_pct": 3355.7,
            "trades_delta_pct": 2083.33,
            "volatility_delta_pct": -368.69,
            "spread_pct_delta_pct": -10.53,
            "amihud_delta_pct": 51.45,
            "turnover_ratio_delta_pct": 1973.15
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 89.96415770609319,
            "rank_pca": 57,
            "adv": 519375.5,
            "trades": 131.0,
            "volatility": 0.03921568627450989,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.1699029126213591,
            "amihud": 4.9741695520304396e-08,
            "turnover_ratio": 0.003494661220188287,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 1368170.5,
            "trades": 244.0,
            "volatility": 0.015463917525773252,
            "spread_pct": 0.0071618542200274,
            "spread_ticks": 1.2668650793650793,
            "amihud": 1.7550880001123276e-08,
            "turnover_ratio": 0.02336097016229602,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.10394265232975,
            "rank_pca": 285,
            "adv": 26864.0,
            "trades": 10.0,
            "volatility": 0.005434782608695565,
            "spread_pct": 0.011718217740836636,
            "spread_ticks": 2.1785714285714284,
            "amihud": 1.7558423899683558e-07,
            "turnover_ratio": 0.00020186168040848122,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.97491039426524,
            "rank_pca": 375,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.04808877928483345,
            "spread_ticks": 3.9,
            "amihud": 4.831061265660419e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.69892473118279,
            "rank_pca": 304,
            "adv": 3195.0,
            "trades": 2.0,
            "volatility": 0.022222222222222254,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4375,
            "amihud": 3.1608590623317324e-06,
            "turnover_ratio": 4.397987381864484e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.4193548387096775,
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
            "score_pca": 5.197132616487455,
            "rank_pca": 530,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.409090909090909,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 484225.0,
            "trades": 280.0,
            "volatility": 0.011299435028248594,
            "spread_pct": 0.006343575731428668,
            "spread_ticks": 1.1136044880785414,
            "amihud": 2.1645763785494516e-08,
            "turnover_ratio": 0.0019690034804004473,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 504640.0,
            "trades": 189.0,
            "volatility": 0.016949152542372947,
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
              "mean": 0.009209138840152157,
              "median": 0.006666666666666599,
              "min": 0.0,
              "max": 0.11111111111111105,
              "p5": 0.0,
              "p95": 0.03125,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3387185.047117872,
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
              "mean": 0.0070504327066834,
              "median": 0.00031355747542606896,
              "min": 0.0,
              "max": 2.570694087403599,
              "p5": 0.0,
              "p95": 0.010434033199013185,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00013150143114132242,
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
              "mean": 0.01122690513872919,
              "median": 0.006456707543664064,
              "min": 0.0,
              "max": 0.03921568627450989,
              "p5": 0.0,
              "p95": 0.03326797385620921,
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
              "mean": 0.008921188740914077,
              "median": 0.00836710881847208,
              "min": 0.0,
              "max": 0.022222222222222254,
              "p5": 0.0,
              "p95": 0.020376647834274994,
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
        "liquidity": "Latest snapshot shows S$258.7K notional ADV and a 2.54% spread; versus the 30d baseline, ADV is down 50.19% and spread is wider by 5.39%, so trading cost/consistency deteriorated. Turnover is 0.1972% with 89 trades, implying activity remains present but cap...",
        "market_comparison": "ADV (S$258.7K) is far above the market median (S$28.8K) and peer median (S$8.0K), so accessibility is strong even on a weaker day. But spread at 2.54% is worse than peers (2.01%) and volatility is 4.17% vs peer 0.28%, meaning realized trading costs and shor..."
      },
      "1w": {
        "liquidity": "Over 1w, notional ADV is S$430.6K with a 2.50% spread and 89 trades; versus 30d, ADV is down 17.10% and spread is wider by 3.57%, indicating a recent liquidity slowdown and slightly higher friction. Turnover is 0.3020%, supportive for participation but belo...",
        "market_comparison": "ADV (S$430.6K) is well above market median (S$25.1K) and peer median (S$5.8K), and trades (89) exceed market median (10) and peers (4), so it remains easier to access than most small caps. However, spread (2.50%) is marginally worse than peers (2.46%) and v..."
      },
      "2w": {
        "liquidity": "Over 2w, notional ADV is S$418.3K and spread is 2.49% with 96.5 trades; versus 30d, ADV is down 19.47% and spread is wider by 3.34%, signaling softer demand and slightly higher trading costs. Turnover is 0.2934%, again below the 30d level (0.3495%), consist...",
        "market_comparison": "ADV (S$418.3K) remains far above market median (S$17.1K) and peer median (S$5.5K), and trades (96.5) are well above market (7.5) and peers (4.25), so it is still highly accessible. The trade-off is cost/quality: spread (2.49%) is worse than peers (2.36%) an..."
      },
      "30d": {
        "liquidity": "Primary 30d view is strong: liquidity score 89.96 (rank 57/558) with S$519.4K notional ADV, 131 trades, and 0.3495% turnover, indicating strong capacity for a S$131.2M small cap. The main weakness is a 2.41% spread, which is a meaningful cost headwind despi...",
        "market_comparison": "TKU’s ADV (S$519.4K) is far above market median (S$15.5K) and peer median (S$15.0K), and trades (131) dwarf market (7) and peers (6), placing it as an activity leader. But spread (2.41%) is worse than peers (2.18%) and volatility (3.92%) is far above market..."
      }
    }
  },
  "q02": {
    "regime_switching": {
      "valid": true,
      "regime_method": "activity_day_clustering",
      "n_regimes": 2,
      "current_regime": 0,
      "regimes": [
        {
          "id": 0,
          "label": "Low Activity",
          "liquidity_score": null,
          "pct_time": 0.8148148148148148
        },
        {
          "id": 1,
          "label": "Medium Activity",
          "liquidity_score": null,
          "pct_time": 0.18518518518518517
        }
      ],
      "transitions": [
        [
          0.9523809523809523,
          0.047619047619047616
        ],
        [
          0.4,
          0.6
        ]
      ]
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
        "text": "Liquidity score: 90% — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "drivers": {
        "text": "Company-led",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "exec_check": {
        "text": "Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-500"
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
      "Market Cap: 131.2M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-03-03",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "30d liquidity is strong for a small cap (Score 90.0; Rank 57/558) with high notional ADV (S$519K), but trading cost is above peers (2.41% spread vs 2.18%) and recent liquidity has slowed.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "30d liquidity is strong for a S$131.2M small cap, but recent periods show lower ADV and slightly wider spreads versus the 30d baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "TKU is an activity leader (ADV and trades) versus market/sector/peers, but trading cost and short-term price swings are higher than peers.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "As of 2026-03-03 | Toku Ltd (TKU) vs Market, Sector, and 8 peers",
    "perf_insight": "TKU is down -9.80% over 1W and 30D, lagging the market (1W -2.07%, 30D -0.27%), the sector (1W -2.24%, 30D -4.45%), and peers (1W -1.30%, 30D -1.00%); 2W is near flat (TKU ~0%) but still behind peers (-1.01%) and sector (-2.13%).",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Most moves are driven by company-specific forces, with meaningful sector rotation influence and limited market pull.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "61.2% of TKU’s moves are company-specific vs 38.8% macro (sector+market). This means headlines, earnings, and guidance can dominate day-to-day moves; prioritize clear, consistent communications."
      },
      {
        "title": "Market Link",
        "text": "Market explains 12.9% of moves and the market sensitivity is negative (beta -0.84). TKU can fall when the market rises (and vice versa), so don’t rely on “market up = stock up” in planning narratives."
      },
      {
        "title": "Sector Link",
        "text": "Sector explains 25.9% and sensitivity is very high (beta 5.41). When Software - Application sentiment shifts, TKU can amplify that move; align IR messaging to sector themes to reduce surprise."
      }
    ],
    "drivers_pie_title": "Price Driver Mix (Variance Decomposition)",
    "drivers_pie_note": "Shares show how much of TKU’s price movement is explained by market, sector rotation, or company-specific forces ove-12-30 to 2026-03-03.",
    "lead_lag_title": "Lead–Lag vs Market and Sector",
    "lead_lag_note": "TKU follows the market with about a 5-day delay (best lag 5) but moves in sync with the sector (best lag 0). Practical read: sector news can hit immediately; broader market effects may show up later.",
    "rolling_title": "How Drivers Are Evolving (Rolling Windows)",
    "rolling_latest_label": "Latest: 2025-12-30 to 2026-03-03",
    "rolling_note": "Only the latest window is available here; trend (more/less correlated over time) is unavailable without additional historical windows.",
    "drivers_bottom_line": "TKU is mostly “dancing to its own tune” (61.2% company-driven), but sector rotation is the main external force (25.9%) and market influence is smaller (12.9%) and inversely signed.",
    "drivers_wtd_title": "What This Means for Trading",
    "drivers_wtd_list": [
      "Communication: Because 61.2% of moves are company-driven, tighten the cadence and clarity of earnings/guidance updates to reduce avoidable volatility around company events.",
      "Risk monitoring: Track Software - Application sector signals closely—25.9% explained and beta 5.41 means sector narratives can swing TKU disproportionately; prepare consistent talking points tied to sector KPIs.",
      "Liquidity planning: Current regime is Low Activity; plan funding and corporate actions assuming thinner participation and higher fragility during transitions (4.76% chance Low→Medium next step; 40% chance Medium→Low)."
    ],
    "regime_title": "Market Activity Regimes",
    "regime_subtitle": "Two activity regimes detected; TKU is currently in the Low Activity regime that dominates the sample.",
    "regime_badge_text": "Low Activity (Current)",
    "regime_pie_title": "Time Spent in Each Regime",
    "transition_title": "Regime Transition Probabilities",
    "transition_cols": [
      "From \\ To",
      "Low Activity",
      "Medium Activity"
    ],
    "transition_note_template": "Stability is high in Low Activity (95.24% stay Low), while Medium Activity is less stable (60% stay Medium). This backdrop can shift quickly back to Low (40% Medium→Low), which can make liquidity conditions fragile.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "TKU (XSES) — small cap (S$131.2M) with wide spread and lopsided displayed depth as of 2026-03-03.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Displayed L2 only: top 10 levels per side (7 levels present). Bid value S$298,450 vs ask value S$857,210, so sell-side support is materially thinner; full-orderbook coverage is planned soon.",
    "peer_capacity_title": "Peer Trading Capacity (Impact vs ADV)",
    "peer_capacity_note": "Peer metric shown is impact for a 50k order as % of ADV; TKU’s comparable peer-style capacity metric is not provided here (N/A), so benchmarking is directional only.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Wide spread (4.35%) plus limited bid depth (S$298,450 across top 10 levels) means meaningful execution cost and market-impact risk for any material sell program.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "30d view for TKU (XSES): trade count vs notional shows who sets the tone vs who moves size.",
    "trader_retail_threshold": "Retail: < S$13.5K per trade",
    "trader_mixed_threshold": "Mixed: S$13.5K–S$67.5K per trade",
    "trader_instit_threshold": "Institutional: ≥ S$67.5K per trade",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "Peers (8) show whether TKU is unusually retail-led or has meaningful institutional notional support.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Share of trades that change the last price; higher means more jumpy pricing and higher trading costs.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Session split and concentration (HHI) show whether liquidity is steady or clustered into a few windows.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Most trading is in continuous market; auctions (open/close) are smaller but can concentrate liquidity.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI ranges 0–1: higher means trading is more concentrated in fewer time buckets (less even liquidity).",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time highlights where activity clusters; concentration can raise price sensitivity to single flows.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Lower HHI generally means more even liquidity through the day; higher HHI means liquidity comes in bursts.",
    "intraday_insight": "Trading is overwhelmingly in the continuous session (95.3%), with smaller open/close auctions (4.7% total). Peak volume occurs at 13:00 (13.1%), so midday flows can sway pricing.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Shorting is negligible (1M avg short ratio 0.18%, max 1.47%; days-to-cover max 0.004), with shorts largely gone MoM (-100%).",
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
          "title": "Liquidity Score (30d)",
          "body": "Composite liquidity score for the selected window; higher means easier to trade with lower friction versus the broader universe."
        },
        "value": "90.0",
        "suffix": "/100",
        "bar_pct": 90,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Rank 57/558 • Strong vs universe; +42.56 score vs peer median (47.40)",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Bid-ask spread (30d)",
          "body": "Spread is the typical buy vs sell price gap; higher spread generally means higher trading cost."
        },
        "value": "2.41",
        "suffix": "%",
        "bar_pct": null,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Worse than peers: 2.41% vs 2.18% (about 10.53% wider); also widened vs 30d: +5.39% (1d), +3.57% (1w)",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Notional ADV (30d)",
          "body": "Average daily traded value in local currency; higher ADV generally supports larger trades with less disruption."
        },
        "value": "S$519K",
        "suffix": "",
        "bar_pct": null,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Far above peers: S$519K vs peer median S$15K (+3355.7%); recent slowdown vs 30d: -17.10% (1w), -19.47% (2w), -50.19% (1d)",
        "interpretation": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Return drivers (factor exposure)",
          "body": "Share of price moves explained by market/sector vs company-specific drivers; higher company share means news and fundamentals matter more than broad market moves."
        },
        "value": "61.2",
        "suffix": "company-specific",
        "bar_pct": 61,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "Price action is mainly company-led (61.2%) vs sector (25.9%) and market (12.9%), so earnings/news flow can outweigh broader market conditions",
        "interpretation": {
          "text": "Company-driven",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is a relative strength: 30d Score 90.0 (Rank 57/558) and S$519K notional ADV vs peer median S$15K (+3355.7%), supporting credible participation despite small-cap size (S$131.2M mcap).",
      "Trading cost is the main gap versus peers: 2.41% spread vs 2.18% peer median (~10.53% wider), and costs worsened recently (+3.57% spread vs 30d over 1w; +5.39% over 1d). Prioritize actions that reduce spread (e.g., consistent disclosure and liquidity support).",
      "Momentum has cooled: ADV is down vs 30d across near-term windows (-17.10% 1w, -19.47% 2w, -50.19% 1d), raising the risk that planned capital markets activity faces higher friction if the slowdown persists; monitor whether this becomes a sustained trend."
    ],
    "perf_badge": "Context",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "liq_tiles": [
      {
        "title": "Liquidity Score (30d)",
        "value": "89.96 (Rank 57/558)",
        "sub": "Down to 78.49 (2w), 76.16 (1w), 72.22 (1d) vs 30d baseline",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (30d)",
        "value": "S$519.4K",
        "sub": "Recent slowdown: S$418.3K (2w), S$430.6K (1w), S$258.7K (1d)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (30d)",
        "value": "2.41%",
        "sub": "Worse vs peers: 2.41% vs 2.18% (+10.53% wider); also wider in 1d/1w/2w vs 30d",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Over 30d, TKU has high trading capacity (S$519.4K ADV, 131 trades, 0.3495% turnover) and ranks 57/558, making it unusually accessible for its size. The near-term picture is weaker: 1d ADV fell to S$258.7K (−50.19% vs 30d) and spreads are wider in 1d/1w/2w v...",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.23",
        "note": "Reference price for impact/spread estimates (as of 2026-03-03).",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "4.35%",
        "note": "High upfront trading cost; even small trades can face visible slippage from the quote gap.",
        "color": "text-red-500"
      },
      {
        "title": "Depth",
        "value": "Bid S$298K / Ask S$857K",
        "note": "Top-10 displayed depth is skewed to the ask; sells lean on a thinner bid stack, increasing downside price pressure.",
        "color": "text-red-500"
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
    "liquidity": {
      "overall": "Liquidity is strong on the 30d primary view (score 89.96; S$519.4K ADV; 131 trades), but it is deteriorating in the most recent windows with lower ADV and wider spreads versus the 30d baseline.",
      "strengths": [
        "High activity for a small cap: 30d notional ADV S$519.4K with 131 trades and 0.3495% turnover, supporting capacity for larger day-to-day participation.",
        "Clear peer outperformance on volume: 30d ADV is +3355.71% higher than the peer median (S$519.4K vs S$15.0K), indicating strong baseline attention/liquidity."
      ],
      "concerns": [
        "Recent demand softened: 1d ADV S$258.7K is −50.19% vs the 30d baseline, reducing available capacity and making outcomes less predictable day-to-day.",
        "Trading cost is consistently high vs peers: 30d spread 2.41% vs pee% (+10.53% wider), and spreads are wider in 1d/1w/2w vs the 30d baseline.",
        "Price swings are elevated: 30d volatility 3.92% vs market 0.67% and peers 0.84%, increasing the risk that the price moves while orders are being worked."
      ],
      "peer_context": "TKU is a liquidity leader on activity (ADV and trades) but a laggard on trading quality: spreads are wider than peers in every reported period (e.g., 1d 2.54% vs 2.01%; 30d 2.41% vs 2.18%), and volatility is materially higher."
    },
    "market_comparison": {
      "adv": "TKU’s notional ADV is exceptionally high versus all benchmarks, supporting better access and capacity despite recent cooling versus its own 30d baseline.",
      "spread": "Costs are mixed: better than the overall market/sector medians in most windows, but consistently worse than direct peers, which matters most for competitive trading quality.",
      "volatility": "Short-term price swings are far higher than market, sector, and peers, which can increase effective cost even when headline spread looks acceptable.",
      "trades": "Trade count is a clear strength, indicating frequent prints and typically better ability to find the other side, even when ADV softens."
    },
    "performance": {
      "overall": "Weak",
      "conclusion": "Recent performance is consistently weaker than benchmarks: TKU fell -9.80% in 1W vs market -2.07% (underperforming by ~7.73pp), sector -2.24% (~7.56pp), and peers -1.30% (~8.50pp). The 2W reading is ~0% for TKU versus market -0.43% and peers -1.01%, suggest..."
    },
    "drivers": {
      "overall": "Variance decomposition shows TKU is primarily company-driven (61.2%), with sector rotation a meaningful secondary driver (25.9%) and a smaller market component (12.9%). CEO takeaway: your actions and disclosures will often matter more than the index.",
      "interpretation": "Strong",
      "rolling_change": "Only one rolling window is provided (2025-12-30 to 2026-03-03), so whether correlation is rising or falling over time is unavailable. Treat the current mix (61.2/25.9/12.9) as the baseline to monitor.",
      "beta": "Market sensitivity is negative (beta -0.84), while sector sensitivity is very high (beta 5.41). Practical implication: sector sentiment can overwhelm broader market direction; investor messaging should explicitly separate sector tailwinds/headwinds from com..."
    },
    "regime": {
      "overall": "Two regimes are identified; Low Activity dominates (81.5% of the time) and is also the current regime (0). This suggests the typical backdrop is quieter participation, which can make price moves more event-sensitive.",
      "current": "Current regime is Low Activity with 81.5% time share; average volatility is unavailable (N/A). Implication: assume liquidity may be more fragile around announcements because fewer participants are active.",
      "transitions": "Low Activity is very persistent (95.24% probability of staying Low; 4.76% chance to shift to Medium). Medium Activity is less stable (60% stay Medium; 40% revert to Low), so activity spikes may fade quickly—plan communications to avoid relying on sustained...",
      "trading_implications": "Because the stock is currently in Low Activity and company-specific forces explain 61.2% of moves, prioritize predictable news flow and rapid clarification during rumors; monitor sector shocks closely due to the 5.41 sector sensitivity and same-day linkage..."
    },
    "execution": {
      "overall": "Liquidity is fragile: 4.35% spread and only S$298,450 bid depth across the top 10 displayed levels, with sell impact estimated at -3.19% even for S$100K fully filled.",
      "concern": "Capacity breaks quickly: at S$1.0M and S$2.5M sells, modeled fills drop to 29.8% and 11.9% (impact ≈ -6.00%), indicating meaningful market-impact and completion risk on visible liquidity.",
      "peer_context": "Peer capacity data is available only as impact_50k_pct_adv (e.g., 70.8 to 53,995.7 across peers), but TKU’s ADV-based capacity is not provided (N/A); leadership should assume below-peer execution quality until ADV-based comparisons are produced."
    },
    "trader_composition": {
      "overall": "TKU is retail-led by activity but not by value: retail is 89.3% of trades yet only 36.8% of notional (30d), while Mixed is 9.9% of trades and 49.0% of notional. This mix implies many small orders but price can still be driven by fewer larger tickets, so hea...",
      "retail_heavy": "Recent day is more retail-dominant: 1d retail is 93.3% of trades and 66.9% of notional versus 30d retail at 89.3% of trades and 36.8% of notional. This shift matters because price quality typically worsens when the tape is dominated by small, reactive flow...",
      "institutional_gap": "Institutional presence is small by trade count (0.9% of trades in 30d) but meaningful by notional (14.2%), indicating few but larger trades. Practical implication: management/IR can influence liquidity most by sustaining these larger participants, because s...",
      "peer_comparison": "Versus peers, TKU has more institutional notional than the fully retail names (e.g., 532/KUX: 0.0% institutional notional) but less than BN2 (22.4% institutional notional vs TKU 14.2%). The split (89.3% trades retail vs 36.8% notional retail) makes TKU less..."
    },
    "price_moving": {
      "overall": "21.0% of trades are price-moving (979 of 4,652), meaning roughly 1 in 5 prints changes price and increases perceived volatility. Business implication: this can raise the cost of capital narrative risk—IR messaging should emphasize stability drivers when liq...",
      "interpretation": "Moderate",
      "asymmetry": "Direction is balanced by count (489 positive vs 490 negative movers), but negative movers show higher institutional share (204.1% vs 61.3% on positive), suggesting downside price changes are more associated with larger participant flow. Practical implicatio..."
    },
    "intraday": {
      "overall": "Trading is concentrated in the continuous session (95.3%), with auctions at 4.7% (open 1.2%, close 2.8%). Peak activity is at 13:00 (13.1% of volume), so pricing can be most sensitive around midday when flow clusters.",
      "hhi_interpretation": "HHI is 0.2113 (1M), indicating liquidity is clustered rather than evenly distributed across the day; the pattern varies by window (1w HHI 0.2721 vs 1d HHI 0.1851). This instability matters because uneven liquidity makes single orders more likely to move pri...",
      "best_times": "Activity is not evenly spread: a single time bucket (13:00) accounts for 13.1% of volume, and auctions contribute 4.7% overall, with close (2.8%) larger than open (1.2%). Practical implication: expect higher short-term price sensitivity when volume is conce...",
      "peer_ranking": "On peer HHI, TKU (0.1935) is less concentrated than ITS (0.2507), BN2 (0.2324), and far less than 532 (0.7835) and KUX (0.8098), implying comparatively steadier intraday liquidity. This relative steadiness is a positioning point for IR versus the most retai..."
    },
    "short_selling": {
      "overall": "Short pressure is low: 1W and 2W average and max short ratios are near zero; 1M average is 0.18% (max 1.47%). This signals little bearish positioning and limited short-driven volatility risk.",
      "level": "Days-to-cover is near zero (1M max 0.004), so any short position can be unwound easily and is not “building.” Practical implication: IR should focus on fundamental narrative, not short-squeeze concerns.",
      "correlation": "N/A",
      "trend": "Shorts are covering significantly: MoM short ratio is down -100% with 2026-03 near zero versus 2026-02 at 0.19% (and 2026-01 at 0.91%). Implication: recent selling pressure from shorts has likely faded; monitor for re-acceleration if it returns toward Janua..."
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
        89.96415770609319,
        83.87096774193549,
        49.10394265232975,
        32.97491039426524,
        45.69892473118279,
        2.4193548387096775,
        5.197132616487455,
        75.80645161290323,
        78.13620071684588
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
        "volatility": 0.03921568627450989,
        "adv": 519375.5,
        "spread_pct": 0.024100349578449535,
        "turnover_ratio": 0.003494661220188287,
        "amihud": 4.9741695520304396e-08,
        "trades": 131.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.009209138840152157,
          "median": 0.006666666666666599,
          "min": 0.0,
          "max": 0.11111111111111105,
          "p5": 0.0,
          "p95": 0.03125,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3387185.047117872,
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
          "mean": 0.0070504327066834,
          "median": 0.00031355747542606896,
          "min": 0.0,
          "max": 2.570694087403599,
          "p5": 0.0,
          "p95": 0.010434033199013185,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00013150143114132242,
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
          "mean": 0.01122690513872919,
          "median": 0.006456707543664064,
          "min": 0.0,
          "max": 0.03921568627450989,
          "p5": 0.0,
          "p95": 0.03326797385620921,
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
          "mean": 0.008921188740914077,
          "median": 0.00836710881847208,
          "min": 0.0,
          "max": 0.022222222222222254,
          "p5": 0.0,
          "p95": 0.020376647834274994,
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
      "share_market": 0.12869064468440897,
      "share_sector": 0.2588901269832362,
      "share_idio": 0.6124192283323548,
      "beta_market": -0.8433172269237614,
      "beta_sector": 5.414308144838802,
      "r_squared": 0.3182555180131732,
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
          "period_label": "2025-12-30 to 2026-03-03",
          "shares": {
            "share_market": 0.12869064468440897,
            "share_sector": 0.2588901269832362,
            "share_company": 0.6124192283323548
          },
          "regression": {
            "r_squared": 0.3182555180131732
          }
        }
      },
      "rolling": {
        "ordered": [
          "2025-12-30 to 2026-03-03"
        ],
        "market": [
          12.9
        ],
        "sector": [
          25.9
        ],
        "idio": [
          61.2
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "activity_day_clustering",
        "n_regimes": 2,
        "labels": [
          "Low Activity",
          "Medium Activity"
        ],
        "pct_time": [
          0.8148148148148148,
          0.18518518518518517
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Activity",
            "liquidity_score": null,
            "pct_time": 0.8148148148148148
          },
          {
            "id": 1,
            "label": "Medium Activity",
            "liquidity_score": null,
            "pct_time": 0.18518518518518517
          }
        ],
        "transitions": [
          [
            0.9523809523809523,
            0.047619047619047616
          ],
          [
            0.4,
            0.6
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
          "n_trades": 60,
          "first_trade_date": "2026-03-03",
          "last_trade_date": "2026-03-03",
          "period_days": 0,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6678131788559015,
            "mixed_qty_pct": 0.3321868211440985,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6686380392469967,
            "mixed_notional_pct": 0.3313619607530033,
            "instit_notional_pct": 0.0
          },
          "trade_size": {
            "avg": 4279.308333333333,
            "median": 1955.0
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6678131788559015,
              "mixed_qty_pct": 0.3321868211440985,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6686380392469967,
              "mixed_notional_pct": 0.3313619607530033,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4279.308333333333,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 880.0,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 1693.7142857142858,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2020.5,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.958904109589041,
              "mixed_pct": 0.0410958904109589,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.681255946717412,
              "mixed_qty_pct": 0.31874405328258804,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6793799393888788,
              "mixed_notional_pct": 0.3206200606111212,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2788.945205479452,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9281045751633987,
              "mixed_pct": 0.06535947712418301,
              "instit_pct": 0.006535947712418301,
              "retail_qty_pct": 0.43779447344963707,
              "mixed_qty_pct": 0.41143512033617724,
              "instit_qty_pct": 0.15077040621418566,
              "retail_notional_pct": 0.4381619966879447,
              "mixed_notional_pct": 0.4108152008636134,
              "instit_notional_pct": 0.1510228024484419,
              "avg_trade_size": 4534.830065359477,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8813559322033898,
              "mixed_pct": 0.11864406779661017,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.5006802721088436,
              "mixed_qty_pct": 0.4993197278911565,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.5004017759821366,
              "mixed_notional_pct": 0.49959822401786336,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5893.325423728814,
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
          "n_trades": 320,
          "first_trade_date": "2026-02-25",
          "last_trade_date": "2026-03-03",
          "period_days": 6,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.89375,
            "mixed_pct": 0.1,
            "instit_pct": 0.00625,
            "retail_qty_pct": 0.40540540540540543,
            "mixed_qty_pct": 0.4893672263297149,
            "instit_qty_pct": 0.1052273682648797,
            "retail_notional_pct": 0.40088285788433514,
            "mixed_notional_pct": 0.49454714231529356,
            "instit_notional_pct": 0.10456999980037131
          },
          "trade_size": {
            "avg": 6261.625,
            "median": 1880.5
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.89375,
              "mixed_pct": 0.1,
              "instit_pct": 0.00625,
              "retail_qty_pct": 0.40540540540540543,
              "mixed_qty_pct": 0.4893672263297149,
              "instit_qty_pct": 0.1052273682648797,
              "retail_notional_pct": 0.40088285788433514,
              "mixed_notional_pct": 0.49454714231529356,
              "instit_notional_pct": 0.10456999980037131,
              "avg_trade_size": 6261.625,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2539.913043478261,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 3345.5,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 300.0,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.90625,
              "mixed_pct": 0.09375,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.40408525754884544,
              "mixed_qty_pct": 0.5959147424511545,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.41175788935381236,
              "mixed_notional_pct": 0.5882421106461876,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 6202.484375,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8926974664679582,
              "mixed_pct": 0.09687034277198212,
              "instit_pct": 0.010432190760059613,
              "retail_qty_pct": 0.30213995733847104,
              "mixed_qty_pct": 0.49097456363678066,
              "instit_qty_pct": 0.20688547902474827,
              "retail_notional_pct": 0.30102606736319115,
              "mixed_notional_pct": 0.4909882842894294,
              "instit_notional_pct": 0.20798564834737945,
              "avg_trade_size": 5819.754843517138,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8678678678678678,
              "mixed_pct": 0.12312312312312312,
              "instit_pct": 0.009009009009009009,
              "retail_qty_pct": 0.408429777916797,
              "mixed_qty_pct": 0.4390835157960588,
              "instit_qty_pct": 0.1524867062871442,
              "retail_notional_pct": 0.4081884830439763,
              "mixed_notional_pct": 0.4406791191497178,
              "instit_notional_pct": 0.15113239780630586,
              "avg_trade_size": 7283.503003003003,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8617475728155339,
              "mixed_pct": 0.11805825242718447,
              "instit_pct": 0.020194174757281552,
              "retail_qty_pct": 0.30522511442224326,
              "mixed_qty_pct": 0.4209427989596145,
              "instit_qty_pct": 0.27383208661814223,
              "retail_notional_pct": 0.3074825713584174,
              "mixed_notional_pct": 0.4218654063919806,
              "instit_notional_pct": 0.27065202224960194,
              "avg_trade_size": 8132.690485436893,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 668,
          "first_trade_date": "2026-02-16",
          "last_trade_date": "2026-03-03",
          "period_days": 15,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8922155688622755,
            "mixed_pct": 0.10029940119760479,
            "instit_pct": 0.0074850299401197605,
            "retail_qty_pct": 0.40247312420076237,
            "mixed_qty_pct": 0.46640601577366203,
            "instit_qty_pct": 0.1311208600255756,
            "retail_notional_pct": 0.39932070116093343,
            "mixed_notional_pct": 0.46896412724370473,
            "instit_notional_pct": 0.13171517159536178
          },
          "trade_size": {
            "avg": 6068.250748502994,
            "median": 1847.0
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8922155688622755,
              "mixed_pct": 0.10029940119760479,
              "instit_pct": 0.0074850299401197605,
              "retail_qty_pct": 0.40247312420076237,
              "mixed_qty_pct": 0.46640601577366203,
              "instit_qty_pct": 0.1311208600255756,
              "retail_notional_pct": 0.39932070116093343,
              "mixed_notional_pct": 0.46896412724370473,
              "instit_notional_pct": 0.13171517159536178,
              "avg_trade_size": 6068.250748502994,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 1.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2584.1486486486488,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 3588.1666666666665,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 300.0,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 16.75,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9287292817679558,
              "mixed_pct": 0.06132596685082873,
              "instit_pct": 0.009944751381215469,
              "retail_qty_pct": 0.31214628270109324,
              "mixed_qty_pct": 0.4201081891947178,
              "instit_qty_pct": 0.26774552810418895,
              "retail_notional_pct": 0.3114736465704736,
              "mixed_notional_pct": 0.4196608464554397,
              "instit_notional_pct": 0.2688655069740867,
              "avg_trade_size": 4360.954419889503,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9,
              "mixed_pct": 0.1,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.47287121065842824,
              "mixed_qty_pct": 0.5271287893415717,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.47809449526360187,
              "mixed_notional_pct": 0.5219055047363982,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5801.48125,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.887319966111268,
              "mixed_pct": 0.09714769839028523,
              "instit_pct": 0.015532335498446766,
              "retail_qty_pct": 0.3419244878183832,
              "mixed_qty_pct": 0.4075347799003322,
              "instit_qty_pct": 0.2505407322812846,
              "retail_notional_pct": 0.3413259924910137,
              "mixed_notional_pct": 0.40917049688536666,
              "instit_notional_pct": 0.24950351062361964,
              "avg_trade_size": 6817.850042360915,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8711111111111111,
              "mixed_pct": 0.12,
              "instit_pct": 0.008888888888888889,
              "retail_qty_pct": 0.41768381284510314,
              "mixed_qty_pct": 0.4411992637799089,
              "instit_qty_pct": 0.14111692337498788,
              "retail_notional_pct": 0.41609232590651773,
              "mixed_notional_pct": 0.4430643484233253,
              "instit_notional_pct": 0.14084332567015695,
              "avg_trade_size": 6709.141333333333,
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
          "n_trades": 2700,
          "first_trade_date": "2026-01-30",
          "last_trade_date": "2026-03-03",
          "period_days": 32,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8925925925925926,
            "mixed_pct": 0.09851851851851852,
            "instit_pct": 0.008888888888888889,
            "retail_qty_pct": 0.3707267105427729,
            "mixed_qty_pct": 0.48899112925824895,
            "instit_qty_pct": 0.14028216019897818,
            "retail_notional_pct": 0.36784369458303623,
            "mixed_notional_pct": 0.4901066925345843,
            "instit_notional_pct": 0.14204961288237952
          },
          "trade_size": {
            "avg": 5867.032037037037,
            "median": 1225.0
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8925925925925926,
              "mixed_pct": 0.09851851851851852,
              "instit_pct": 0.008888888888888889,
              "retail_qty_pct": 0.3707267105427729,
              "mixed_qty_pct": 0.48899112925824895,
              "instit_qty_pct": 0.14028216019897818,
              "retail_notional_pct": 0.36784369458303623,
              "mixed_notional_pct": 0.4901066925345843,
              "instit_notional_pct": 0.14204961288237952,
              "avg_trade_size": 5867.032037037037,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 276.7,
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
              "retail_qty_pct": 1.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 1.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 16.75,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9724770642201835,
              "mixed_pct": 0.027522935779816515,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.7692978284989698,
              "mixed_qty_pct": 0.23070217150103028,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.7623295215518971,
              "mixed_notional_pct": 0.2376704784481028,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2627.8577981651374,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9497847919655668,
              "mixed_pct": 0.04495456719273075,
              "instit_pct": 0.0052606408417025345,
              "retail_qty_pct": 0.37088105695513207,
              "mixed_qty_pct": 0.40607492934887063,
              "instit_qty_pct": 0.22304401369599727,
              "retail_notional_pct": 0.3696984147567141,
              "mixed_notional_pct": 0.4062086321831055,
              "instit_notional_pct": 0.2240929530601804,
              "avg_trade_size": 2984.5520086083216,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9447513812154696,
              "mixed_pct": 0.055248618784530384,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6286199095022624,
              "mixed_qty_pct": 0.37138009049773757,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6338960243733016,
              "mixed_notional_pct": 0.3661039756266984,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4430.171270718232,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8888888888888888,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.46366594360086766,
              "mixed_qty_pct": 0.5363340563991323,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.4680114864384938,
              "mixed_notional_pct": 0.5319885135615062,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5475.055555555556,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8806767586821015,
              "mixed_pct": 0.11219946571682991,
              "instit_pct": 0.007123775601068566,
              "retail_qty_pct": 0.4100978944204101,
              "mixed_qty_pct": 0.4637372403968057,
              "instit_qty_pct": 0.12616486518278416,
              "retail_notional_pct": 0.40859525608776825,
              "mixed_notional_pct": 0.4640627916733596,
              "instit_notional_pct": 0.12734195223887215,
              "avg_trade_size": 5984.311219946571,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8731553056921996,
              "mixed_pct": 0.11226282501756851,
              "instit_pct": 0.014581869290231905,
              "retail_qty_pct": 0.3215885922476505,
              "mixed_qty_pct": 0.45055072323895234,
              "instit_qty_pct": 0.2278606845133971,
              "retail_notional_pct": 0.3229702212244507,
              "mixed_notional_pct": 0.44803756238986386,
              "instit_notional_pct": 0.22899221638568545,
              "avg_trade_size": 7100.073085031623,
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
      "n_trades": 2700,
      "first_trade_date": "2026-01-30",
      "last_trade_date": "2026-03-03",
      "period_days": 32,
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.8925925925925926,
        "mixed_pct": 0.09851851851851852,
        "instit_pct": 0.008888888888888889,
        "retail_qty_pct": 0.3707267105427729,
        "mixed_qty_pct": 0.48899112925824895,
        "instit_qty_pct": 0.14028216019897818,
        "retail_notional_pct": 0.36784369458303623,
        "mixed_notional_pct": 0.4901066925345843,
        "instit_notional_pct": 0.14204961288237952
      },
      "trade_size": {
        "avg": 5867.032037037037,
        "median": 1225.0
      },
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-03",
            "n_trades": 92,
            "retail_pct": 0.9239130434782609,
            "mixed_pct": 0.06521739130434782,
            "instit_pct": 0.010869565217391304,
            "avg_trade_size": 5000.288043478261,
            "retail_qty_pct": 0.43811598713559496,
            "mixed_qty_pct": 0.30246913580246915,
            "instit_qty_pct": 0.2594148770619359,
            "total_quantity": 1927800.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "avg_trade_size": 5392.230326295586,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "avg_trade_size": 7226.47779572063,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8925925925925926,
          "mixed_pct": 0.09851851851851852,
          "instit_pct": 0.008888888888888889,
          "retail_qty_pct": 0.3707267105427729,
          "mixed_qty_pct": 0.48899112925824895,
          "instit_qty_pct": 0.14028216019897818,
          "retail_notional_pct": 0.36784369458303623,
          "mixed_notional_pct": 0.4901066925345843,
          "instit_notional_pct": 0.14204961288237952,
          "avg_trade_size": 5867.032037037037,
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
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 276.7,
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
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 16.75,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9724770642201835,
          "mixed_pct": 0.027522935779816515,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.7692978284989698,
          "mixed_qty_pct": 0.23070217150103028,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.7623295215518971,
          "mixed_notional_pct": 0.2376704784481028,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2627.8577981651374,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BN2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9497847919655668,
          "mixed_pct": 0.04495456719273075,
          "instit_pct": 0.0052606408417025345,
          "retail_qty_pct": 0.37088105695513207,
          "mixed_qty_pct": 0.40607492934887063,
          "instit_qty_pct": 0.22304401369599727,
          "retail_notional_pct": 0.3696984147567141,
          "mixed_notional_pct": 0.4062086321831055,
          "instit_notional_pct": 0.2240929530601804,
          "avg_trade_size": 2984.5520086083216,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9447513812154696,
          "mixed_pct": 0.055248618784530384,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.6286199095022624,
          "mixed_qty_pct": 0.37138009049773757,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.6338960243733016,
          "mixed_notional_pct": 0.3661039756266984,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 4430.171270718232,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8888888888888888,
          "mixed_pct": 0.1111111111111111,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.46366594360086766,
          "mixed_qty_pct": 0.5363340563991323,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.4680114864384938,
          "mixed_notional_pct": 0.5319885135615062,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 5475.055555555556,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8806767586821015,
          "mixed_pct": 0.11219946571682991,
          "instit_pct": 0.007123775601068566,
          "retail_qty_pct": 0.4100978944204101,
          "mixed_qty_pct": 0.4637372403968057,
          "instit_qty_pct": 0.12616486518278416,
          "retail_notional_pct": 0.40859525608776825,
          "mixed_notional_pct": 0.4640627916733596,
          "instit_notional_pct": 0.12734195223887215,
          "avg_trade_size": 5984.311219946571,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8731553056921996,
          "mixed_pct": 0.11226282501756851,
          "instit_pct": 0.014581869290231905,
          "retail_qty_pct": 0.3215885922476505,
          "mixed_qty_pct": 0.45055072323895234,
          "instit_qty_pct": 0.2278606845133971,
          "retail_notional_pct": 0.3229702212244507,
          "mixed_notional_pct": 0.44803756238986386,
          "instit_notional_pct": 0.22899221638568545,
          "avg_trade_size": 7100.073085031623,
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
            "retail_pct": 0.9333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6678131788559015,
            "mixed_qty_pct": 0.3321868211440985,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6686380392469967,
            "mixed_notional_pct": 0.3313619607530033,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4279.308333333333,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 880.0,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 1693.7142857142858,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2020.5,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.958904109589041,
            "mixed_pct": 0.0410958904109589,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.681255946717412,
            "mixed_qty_pct": 0.31874405328258804,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6793799393888788,
            "mixed_notional_pct": 0.3206200606111212,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2788.945205479452,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9281045751633987,
            "mixed_pct": 0.06535947712418301,
            "instit_pct": 0.006535947712418301,
            "retail_qty_pct": 0.43779447344963707,
            "mixed_qty_pct": 0.41143512033617724,
            "instit_qty_pct": 0.15077040621418566,
            "retail_notional_pct": 0.4381619966879447,
            "mixed_notional_pct": 0.4108152008636134,
            "instit_notional_pct": 0.1510228024484419,
            "avg_trade_size": 4534.830065359477,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8813559322033898,
            "mixed_pct": 0.11864406779661017,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.5006802721088436,
            "mixed_qty_pct": 0.4993197278911565,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.5004017759821366,
            "mixed_notional_pct": 0.49959822401786336,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5893.325423728814,
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
            "retail_pct": 0.89375,
            "mixed_pct": 0.1,
            "instit_pct": 0.00625,
            "retail_qty_pct": 0.40540540540540543,
            "mixed_qty_pct": 0.4893672263297149,
            "instit_qty_pct": 0.1052273682648797,
            "retail_notional_pct": 0.40088285788433514,
            "mixed_notional_pct": 0.49454714231529356,
            "instit_notional_pct": 0.10456999980037131,
            "avg_trade_size": 6261.625,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2539.913043478261,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 3345.5,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 300.0,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.90625,
            "mixed_pct": 0.09375,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.40408525754884544,
            "mixed_qty_pct": 0.5959147424511545,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.41175788935381236,
            "mixed_notional_pct": 0.5882421106461876,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 6202.484375,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8926974664679582,
            "mixed_pct": 0.09687034277198212,
            "instit_pct": 0.010432190760059613,
            "retail_qty_pct": 0.30213995733847104,
            "mixed_qty_pct": 0.49097456363678066,
            "instit_qty_pct": 0.20688547902474827,
            "retail_notional_pct": 0.30102606736319115,
            "mixed_notional_pct": 0.4909882842894294,
            "instit_notional_pct": 0.20798564834737945,
            "avg_trade_size": 5819.754843517138,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8678678678678678,
            "mixed_pct": 0.12312312312312312,
            "instit_pct": 0.009009009009009009,
            "retail_qty_pct": 0.408429777916797,
            "mixed_qty_pct": 0.4390835157960588,
            "instit_qty_pct": 0.1524867062871442,
            "retail_notional_pct": 0.4081884830439763,
            "mixed_notional_pct": 0.4406791191497178,
            "instit_notional_pct": 0.15113239780630586,
            "avg_trade_size": 7283.503003003003,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8617475728155339,
            "mixed_pct": 0.11805825242718447,
            "instit_pct": 0.020194174757281552,
            "retail_qty_pct": 0.30522511442224326,
            "mixed_qty_pct": 0.4209427989596145,
            "instit_qty_pct": 0.27383208661814223,
            "retail_notional_pct": 0.3074825713584174,
            "mixed_notional_pct": 0.4218654063919806,
            "instit_notional_pct": 0.27065202224960194,
            "avg_trade_size": 8132.690485436893,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8922155688622755,
            "mixed_pct": 0.10029940119760479,
            "instit_pct": 0.0074850299401197605,
            "retail_qty_pct": 0.40247312420076237,
            "mixed_qty_pct": 0.46640601577366203,
            "instit_qty_pct": 0.1311208600255756,
            "retail_notional_pct": 0.39932070116093343,
            "mixed_notional_pct": 0.46896412724370473,
            "instit_notional_pct": 0.13171517159536178,
            "avg_trade_size": 6068.250748502994,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2584.1486486486488,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 3588.1666666666665,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 300.0,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 16.75,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9287292817679558,
            "mixed_pct": 0.06132596685082873,
            "instit_pct": 0.009944751381215469,
            "retail_qty_pct": 0.31214628270109324,
            "mixed_qty_pct": 0.4201081891947178,
            "instit_qty_pct": 0.26774552810418895,
            "retail_notional_pct": 0.3114736465704736,
            "mixed_notional_pct": 0.4196608464554397,
            "instit_notional_pct": 0.2688655069740867,
            "avg_trade_size": 4360.954419889503,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9,
            "mixed_pct": 0.1,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.47287121065842824,
            "mixed_qty_pct": 0.5271287893415717,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.47809449526360187,
            "mixed_notional_pct": 0.5219055047363982,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5801.48125,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.887319966111268,
            "mixed_pct": 0.09714769839028523,
            "instit_pct": 0.015532335498446766,
            "retail_qty_pct": 0.3419244878183832,
            "mixed_qty_pct": 0.4075347799003322,
            "instit_qty_pct": 0.2505407322812846,
            "retail_notional_pct": 0.3413259924910137,
            "mixed_notional_pct": 0.40917049688536666,
            "instit_notional_pct": 0.24950351062361964,
            "avg_trade_size": 6817.850042360915,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8711111111111111,
            "mixed_pct": 0.12,
            "instit_pct": 0.008888888888888889,
            "retail_qty_pct": 0.41768381284510314,
            "mixed_qty_pct": 0.4411992637799089,
            "instit_qty_pct": 0.14111692337498788,
            "retail_notional_pct": 0.41609232590651773,
            "mixed_notional_pct": 0.4430643484233253,
            "instit_notional_pct": 0.14084332567015695,
            "avg_trade_size": 6709.141333333333,
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
            "retail_pct": 0.8925925925925926,
            "mixed_pct": 0.09851851851851852,
            "instit_pct": 0.008888888888888889,
            "retail_qty_pct": 0.3707267105427729,
            "mixed_qty_pct": 0.48899112925824895,
            "instit_qty_pct": 0.14028216019897818,
            "retail_notional_pct": 0.36784369458303623,
            "mixed_notional_pct": 0.4901066925345843,
            "instit_notional_pct": 0.14204961288237952,
            "avg_trade_size": 5867.032037037037,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 276.7,
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
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 16.75,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9724770642201835,
            "mixed_pct": 0.027522935779816515,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.7692978284989698,
            "mixed_qty_pct": 0.23070217150103028,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.7623295215518971,
            "mixed_notional_pct": 0.2376704784481028,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2627.8577981651374,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9497847919655668,
            "mixed_pct": 0.04495456719273075,
            "instit_pct": 0.0052606408417025345,
            "retail_qty_pct": 0.37088105695513207,
            "mixed_qty_pct": 0.40607492934887063,
            "instit_qty_pct": 0.22304401369599727,
            "retail_notional_pct": 0.3696984147567141,
            "mixed_notional_pct": 0.4062086321831055,
            "instit_notional_pct": 0.2240929530601804,
            "avg_trade_size": 2984.5520086083216,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9447513812154696,
            "mixed_pct": 0.055248618784530384,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6286199095022624,
            "mixed_qty_pct": 0.37138009049773757,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6338960243733016,
            "mixed_notional_pct": 0.3661039756266984,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4430.171270718232,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8888888888888888,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.46366594360086766,
            "mixed_qty_pct": 0.5363340563991323,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.4680114864384938,
            "mixed_notional_pct": 0.5319885135615062,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5475.055555555556,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8806767586821015,
            "mixed_pct": 0.11219946571682991,
            "instit_pct": 0.007123775601068566,
            "retail_qty_pct": 0.4100978944204101,
            "mixed_qty_pct": 0.4637372403968057,
            "instit_qty_pct": 0.12616486518278416,
            "retail_notional_pct": 0.40859525608776825,
            "mixed_notional_pct": 0.4640627916733596,
            "instit_notional_pct": 0.12734195223887215,
            "avg_trade_size": 5984.311219946571,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8731553056921996,
            "mixed_pct": 0.11226282501756851,
            "instit_pct": 0.014581869290231905,
            "retail_qty_pct": 0.3215885922476505,
            "mixed_qty_pct": 0.45055072323895234,
            "instit_qty_pct": 0.2278606845133971,
            "retail_notional_pct": 0.3229702212244507,
            "mixed_notional_pct": 0.44803756238986386,
            "instit_notional_pct": 0.22899221638568545,
            "avg_trade_size": 7100.073085031623,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
        }
      },
      "classification_legend": {
        "retail_heavy": ">70% retail",
        "institutional": ">20% institutional",
        "mixed": "otherwise"
      }
    },
    "price_moving_trades": {
      "total_trades": 4652,
      "price_moving_trades": 979,
      "pct_price_moving": 21.04471195184867,
      "all_movers": {
        "count": 979,
        "avg_size": 7040.208886618999,
        "median_size": 925.0,
        "retail_count": 825,
        "mixed_count": 141,
        "institutional_count": 13,
        "retail_pct": 84.26966292134831,
        "mixed_pct": 14.402451481103167,
        "instit_pct": 1.3278855975485189
      },
      "positive_movers": {
        "count": 489,
        "avg_size": 4983.393660531698,
        "median_size": 30.0,
        "retail_count": 433,
        "mixed_count": 53,
        "institutional_count": 3,
        "retail_pct": 88.5480572597137,
        "mixed_pct": 10.838445807770961,
        "instit_pct": 0.6134969325153374
      },
      "negative_movers": {
        "count": 490,
        "avg_size": 9092.826530612245,
        "median_size": 2434.0,
        "retail_count": 392,
        "mixed_count": 88,
        "institutional_count": 10,
        "retail_pct": 80.0,
        "mixed_pct": 17.959183673469386,
        "instit_pct": 2.0408163265306123
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
