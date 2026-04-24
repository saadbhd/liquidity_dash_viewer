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
      "marketCap": 258000000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 98736916.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 129092169.72,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68122409.4,
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
      "ticker": "S69",
      "name": "Serial System",
      "marketCap": 62434092.06600001,
      "sector": "Electronics & Computer Distribution",
      "industry": "Technology"
    },
    {
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 54034640.0,
      "sector": "Semiconductors",
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
    "asof_date": "2026-04-01",
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
          "score_pca": 66.12903225806451,
          "score_pca_percentile": 66.12903225806451,
          "rank_pca": 190,
          "total": 558,
          "adv_notional_sgd": 145406.0,
          "adv_volume_shares": 632200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011086535645338392,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.024966391396197374,
          "spread_ticks": 1.1504424778761062,
          "amihud": 1.528287843845656e-07,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5207402233075185,
          "loadings": {
            "log_adv": 0.55108440090857,
            "log_trades": 0.5085080095068486,
            "log_turnover": 0.5131696214960182,
            "neg_spread": 0.36322463581271613,
            "neg_amihud": 0.06923028404319433,
            "neg_vol": -0.1940555555151064
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
          "peer_median_adv": 8895.0,
          "peer_median_score_pca": 45.6989247311828,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.09630240224972503,
          "peer_median_spread_pct": 0.025320057461939403,
          "peer_median_spread_ticks": 2.0875,
          "peer_median_amihud": 5.893979768272263e-07,
          "peer_median_turnover_ratio": 0.00019925477520521,
          "target_vs_peer": {
            "score_pca_delta": 20.43,
            "adv_delta_pct": 1534.7,
            "trades_delta_pct": 1150.0,
            "volatility_delta_pct": 100.0,
            "spread_pct_delta_pct": 1.4,
            "spread_ticks_delta_pct": -44.89,
            "amihud_delta_pct": 74.07,
            "turnover_ratio_delta_pct": 456.4
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 66.12903225806451,
            "rank_pca": 190,
            "adv": 145406.0,
            "trades": 50.0,
            "volatility": 0.0,
            "spread_pct": 0.024966391396197374,
            "spread_ticks": 1.1504424778761062,
            "amihud": 1.528287843845656e-07,
            "turnover_ratio": 0.0011086535645338392,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 496000.0,
            "trades": 434.0,
            "volatility": 0.3813954006810153,
            "spread_pct": 0.008025887601009186,
            "spread_ticks": 1.180821917808219,
            "amihud": 2.036493971977856e-08,
            "turnover_ratio": 0.0073461238829004155,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 3550.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.025352112676056363,
            "spread_ticks": 1.8,
            "amihud": 4.024144869215278e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.842293906810035,
            "rank_pca": 359,
            "adv": 1850.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.025288002247822447,
            "spread_ticks": 3.75,
            "amihud": 3.627788862688186e-06,
            "turnover_ratio": 1.7282678117164487e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 53.04659498207885,
            "rank_pca": 263,
            "adv": 14240.0,
            "trades": 12.0,
            "volatility": 0.19260480449945006,
            "spread_pct": 0.011994949494949505,
            "spread_ticks": 2.375,
            "amihud": 7.093405969810509e-07,
            "turnover_ratio": 0.00022051880393574033,
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
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 1.4336917562724014,
            "rank_pca": 551,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.7791563275434245,
            "spread_ticks": 39.25,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 99477.3,
            "trades": 30.0,
            "volatility": 0.560962589095136,
            "spread_pct": 0.022995899332636505,
            "spread_ticks": 1.5714285714285714,
            "amihud": 4.569338477677361e-07,
            "turnover_ratio": 0.002430318784646951,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 58.602150537634415,
            "rank_pca": 232,
            "adv": 70224.0,
            "trades": 6.0,
            "volatility": 0.31959239150087276,
            "spread_pct": 0.06000000000000006,
            "spread_ticks": 5.28,
            "amihud": 4.694553566734017e-07,
            "turnover_ratio": 0.0033976752109895632,
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
              "mean": 0.2757920382686606,
              "median": 0.11573599515651103,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0044664411209465,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3942531.8073347965,
              "median": 14871.0,
              "min": 0.0,
              "max": 308705792.0,
              "p5": 0.0,
              "p95": 15294898.949999992,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11545436071807097,
              "median": 0.03351720366652368,
              "min": 0.00024245657871967925,
              "max": 1.3378196500672945,
              "p5": 0.0033924608653348614,
              "p95": 0.6238132911392404,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008321667426575773,
              "median": 0.00030719272044492103,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.018169850629390274,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012774578843538255,
              "median": 6.561364885005748e-08,
              "min": 0.0,
              "max": 0.15873015873015867,
              "p5": 0.0,
              "p95": 0.00024061610672372892,
              "count": 412
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 531.0573476702509,
              "median": 8.0,
              "min": 0.0,
              "max": 15028.0,
              "p5": 0.0,
              "p95": 3098.599999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0847884674772044,
              "median": 0.0,
              "min": 0.0,
              "max": 0.3813954006810153,
              "p5": 0.0,
              "p95": 0.3153186920174674,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1846775.0000000002,
              "median": 8895.0,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9347150.099999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.19285080517312408,
              "median": 0.02512719682200991,
              "min": 0.0013561037588665807,
              "max": 0.7791563275434245,
              "p5": 0.0036905281036164928,
              "p95": 0.7397849462365591,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022415768660715963,
              "median": 0.00019925477520521,
              "min": 0.0,
              "max": 0.00906204525261093,
              "p5": 0.0,
              "p95": 0.008461472773212249,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4226086024204022e-06,
              "median": 4.310846906828083e-07,
              "min": 1.1835615335549299e-09,
              "max": 4.024144869215278e-06,
              "p5": 5.9789060801108375e-09,
              "p95": 3.925055867583505e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 523.75,
              "median": 7.0,
              "min": 0.0,
              "max": 3691.0,
              "p5": 0.0,
              "p95": 2551.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 85667.6625,
              "median": 8895.0,
              "min": 0.0,
              "max": 496000.0,
              "p5": 0.0,
              "p95": 357217.0549999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 60.625,
              "median": 4.0,
              "min": 0.0,
              "max": 434.0,
              "p5": 0.0,
              "p95": 292.5999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.18181939822205925,
              "median": 0.09630240224972503,
              "min": 0.0,
              "max": 0.560962589095136,
              "p5": 0.0,
              "p95": 0.4981140731501936,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.19993498069532065,
              "median": 0.025320057461939403,
              "min": 0.008025887601009186,
              "max": 0.7791563275434245,
              "p5": 0.009415059263888297,
              "p95": 0.7397849462365591,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.025906311154599,
              "median": 2.0875,
              "min": 1.0,
              "max": 39.25,
              "p5": 1.0632876712328767,
              "p95": 27.36049999999998,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.551338078840905e-06,
              "median": 5.893979768272263e-07,
              "min": 2.036493971977856e-08,
              "max": 4.024144869215278e-06,
              "p5": 1.2950716673176795e-07,
              "p95": 3.925055867583505e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016987387633830642,
              "median": 0.00019925477520521,
              "min": 0.0,
              "max": 0.0073461238829004155,
              "p5": 0.0,
              "p95": 0.005964166847731616,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.022222222222222143,
            "market": 0.018499806404580266,
            "sector": 0.010101010101010166,
            "peers": 0.005050505050505194,
            "vs_market": 0.0037224158176418776,
            "vs_sector": 0.012121212121211977,
            "vs_peers": 0.01717171717171695
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 69.53405017921148,
          "score_pca_percentile": 69.53405017921148,
          "rank_pca": 171,
          "total": 558,
          "adv_notional_sgd": 109664.0,
          "adv_volume_shares": 476800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0008361373292782895,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.02723044397462999,
          "spread_ticks": 1.248062015503876,
          "amihud": 0.0,
          "volatility": 0.24674141819365403
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5146428246268584,
          "loadings": {
            "log_adv": 0.5532365314492839,
            "log_trades": 0.5088260475067704,
            "log_turnover": 0.5105818451277802,
            "neg_spread": 0.4018019177620484,
            "neg_amihud": 0.08363041870552453,
            "neg_vol": 0.07676421708317771
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
          "peer_median_adv": 8248.5,
          "peer_median_score_pca": 51.702508960573475,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.28234699984601747,
          "peer_median_spread_pct": 0.023901456741954714,
          "peer_median_spread_ticks": 1.9,
          "peer_median_amihud": 4.569338477677361e-07,
          "peer_median_turnover_ratio": 0.00026739745917576864,
          "target_vs_peer": {
            "score_pca_delta": 17.83,
            "adv_delta_pct": 1229.5,
            "trades_delta_pct": 550.0,
            "volatility_delta_pct": 12.61,
            "spread_pct_delta_pct": -13.93,
            "spread_ticks_delta_pct": -34.31,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 212.69
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 109664.0,
            "trades": 39.0,
            "volatility": 0.24674141819365403,
            "spread_pct": 0.02723044397462999,
            "spread_ticks": 1.248062015503876,
            "amihud": 0.0,
            "turnover_ratio": 0.0008361373292782895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.15412186379928,
            "rank_pca": 95,
            "adv": 431830.0,
            "trades": 434.0,
            "volatility": 0.24590207031368858,
            "spread_pct": 0.007830406492688735,
            "spread_ticks": 1.418703506907545,
            "amihud": 2.036493971977856e-08,
            "turnover_ratio": 0.006427858397537864,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 9000.0,
            "trades": 2.0,
            "volatility": 0.27195836415816127,
            "spread_pct": 0.025352112676056363,
            "spread_ticks": 1.8,
            "amihud": 2.030351219827701e-06,
            "turnover_ratio": 0.0004449768661866992,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.68817204301075,
            "rank_pca": 265,
            "adv": 7497.0,
            "trades": 9.0,
            "volatility": 0.29273563553387366,
            "spread_pct": 0.01981599433828735,
            "spread_ticks": 3.0,
            "amihud": 1.9903468179330256e-06,
            "turnover_ratio": 7.051332671803111e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.31182795698925,
            "rank_pca": 295,
            "adv": 5800.0,
            "trades": 3.0,
            "volatility": 0.35693850448947334,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 2.7643734264348948e-06,
            "turnover_ratio": 8.981805216483805e-05,
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
            "score_pca": 6.451612903225806,
            "rank_pca": 523,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4408945686900958,
            "spread_ticks": 17.25,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 67.56272401433692,
            "rank_pca": 182,
            "adv": 71576.1,
            "trades": 24.0,
            "volatility": 0.4135630192240843,
            "spread_pct": 0.022450800807853062,
            "spread_ticks": 1.551948051948052,
            "amihud": 4.569338477677361e-07,
            "turnover_ratio": 0.0018008667251427743,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 70.78853046594982,
            "rank_pca": 164,
            "adv": 100485.0,
            "trades": 29.0,
            "volatility": 0.4637879214791412,
            "spread_pct": 0.030083705708351716,
            "spread_ticks": 2.6853932584269664,
            "amihud": 2.8971021735509115e-07,
            "turnover_ratio": 0.0049176878053796315,
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
              "mean": 0.5496488372582399,
              "median": 0.2880482618922638,
              "min": 0.0,
              "max": 9.763177595803025,
              "p5": 0.0,
              "p95": 1.7329611587791163,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3473357.665074294,
              "median": 9565.45,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 14139643.399999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11409514665751673,
              "median": 0.03335991394543228,
              "min": 0.0003001135972839129,
              "max": 1.36041598960026,
              "p5": 0.003669254804043489,
              "p95": 0.5524941519935261,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0069852807856999564,
              "median": 0.00021351451011052862,
              "min": 0.0,
              "max": 2.2707797772065126,
              "p5": 0.0,
              "p95": 0.01020502555957576,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.005744005283215442,
              "median": 1.6323918785239312e-07,
              "min": 0.0,
              "max": 2.500113631198582,
              "p5": 0.0,
              "p95": 0.0001486267027757875,
              "count": 495
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.06272401433694,
              "median": 5.0,
              "min": 0.0,
              "max": 10632.0,
              "p5": 0.0,
              "p95": 3245.9999999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21920098643554484,
              "median": 0.2593498911759077,
              "min": 0.0,
              "max": 0.35693850448947334,
              "p5": 0.0,
              "p95": 0.35077619249658537,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1834618.1250000002,
              "median": 8248.5,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9324690.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14990150793548102,
              "median": 0.022584053507171856,
              "min": 0.0013716193891417522,
              "max": 0.6666666666666666,
              "p5": 0.0036321948753831965,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021164186530620815,
              "median": 0.00026739745917576864,
              "min": 0.0,
              "max": 0.00906204525261093,
              "p5": 0.0,
              "p95": 0.008140079853335355,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.723370747086843e-07,
              "median": 2.036493971977856e-08,
              "min": 0.0,
              "max": 2.7643734264348948e-06,
              "p5": 0.0,
              "p95": 2.544166764452736e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 522.25,
              "median": 6.0,
              "min": 0.0,
              "max": 3691.0,
              "p5": 0.0,
              "p95": 2551.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 78273.5125,
              "median": 8248.5,
              "min": 0.0,
              "max": 431830.0,
              "p5": 0.0,
              "p95": 315859.2499999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 62.625,
              "median": 6.0,
              "min": 0.0,
              "max": 434.0,
              "p5": 0.0,
              "p95": 292.2499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2556106893998028,
              "median": 0.28234699984601747,
              "min": 0.0,
              "max": 0.4637879214791412,
              "p5": 0.0,
              "p95": 0.44620920568987127,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15289306332953514,
              "median": 0.023901456741954714,
              "min": 0.007830406492688735,
              "max": 0.6666666666666666,
              "p5": 0.008607352159946173,
              "p95": 0.5876464323748667,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8382556021603205,
              "median": 1.9,
              "min": 1.0,
              "max": 17.25,
              "p5": 1.1465462274176408,
              "p95": 12.262499999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0788686384340325e-06,
              "median": 4.569338477677361e-07,
              "min": 0.0,
              "max": 2.7643734264348948e-06,
              "p5": 6.109481915933569e-09,
              "p95": 2.544166764452736e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017189651466412298,
              "median": 0.00026739745917576864,
              "min": 0.0,
              "max": 0.006427858397537864,
              "p5": 0.0,
              "p95": 0.005899298690282481,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -1.1102230246251565e-16,
            "market": 0.014535519843799305,
            "sector": 0.010101010101010166,
            "peers": -0.007901603319093287,
            "vs_market": -0.014535519843799416,
            "vs_sector": -0.010101010101010277,
            "vs_peers": 0.007901603319093176
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 68.99641577060932,
          "score_pca_percentile": 68.99641577060932,
          "rank_pca": 174,
          "total": 558,
          "adv_notional_sgd": 132506.75,
          "adv_volume_shares": 580000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0010171133619576507,
          "votes": 40.5,
          "trades": 40.5,
          "spread_pct": 0.025277416566792492,
          "spread_ticks": 1.1712357217030114,
          "amihud": 1.5258940703117583e-07,
          "volatility": 0.35858047565417756
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5193587287197154,
          "loadings": {
            "log_adv": 0.5514312100966579,
            "log_trades": 0.5029910658541831,
            "log_turnover": 0.5096466136576927,
            "neg_spread": 0.4163775432164779,
            "neg_amihud": 0.08013942881484222,
            "neg_vol": 0.05823530581782395
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
          "peer_median_adv": 8130.5,
          "peer_median_score_pca": 48.74551971326164,
          "peer_median_trades": 5.25,
          "peer_median_volatility": 0.3272407254457641,
          "peer_median_spread_pct": 0.022640867283688963,
          "peer_median_spread_ticks": 1.9656296992481204,
          "peer_median_amihud": 3.3119592387786906e-07,
          "peer_median_turnover_ratio": 0.00023843430842294814,
          "target_vs_peer": {
            "score_pca_delta": 20.25,
            "adv_delta_pct": 1529.7,
            "trades_delta_pct": 671.43,
            "volatility_delta_pct": -9.58,
            "spread_pct_delta_pct": -11.65,
            "spread_ticks_delta_pct": -40.41,
            "amihud_delta_pct": 53.93,
            "turnover_ratio_delta_pct": 326.58
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 132506.75,
            "trades": 40.5,
            "volatility": 0.35858047565417756,
            "spread_pct": 0.025277416566792492,
            "spread_ticks": 1.1712357217030114,
            "amihud": 1.5258940703117583e-07,
            "turnover_ratio": 0.0010171133619576507,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 563070.5,
            "trades": 338.0,
            "volatility": 0.2553289114276012,
            "spread_pct": 0.012699403904063272,
            "spread_ticks": 1.4200900084873296,
            "amihud": 1.468361112717436e-08,
            "turnover_ratio": 0.00821847609399484,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 46.236559139784944,
            "rank_pca": 301,
            "adv": 8050.0,
            "trades": 1.5,
            "volatility": 0.5562593092636959,
            "spread_pct": 0.033655077317049184,
            "spread_ticks": 2.4,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 0.00040047917956802925,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.25448028673835,
            "rank_pca": 273,
            "adv": 8211.0,
            "trades": 7.0,
            "volatility": 0.3116498137353898,
            "spread_pct": 0.019744062742914174,
            "spread_ticks": 3.0,
            "amihud": 1.969832278362231e-06,
            "turnover_ratio": 7.638943727786704e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.0573476702509,
            "rank_pca": 302,
            "adv": 4720.0,
            "trades": 3.5,
            "volatility": 0.34283163715613835,
            "spread_pct": 0.010050251256281416,
            "spread_ticks": 2.0,
            "amihud": 1.3235323869320423e-06,
            "turnover_ratio": 7.30933114169027e-05,
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
            "score_pca": 7.706093189964158,
            "rank_pca": 516,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3896551724137931,
            "spread_ticks": 15.333333333333332,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 68.27956989247312,
            "rank_pca": 178,
            "adv": 87318.15,
            "trades": 34.5,
            "volatility": 0.5050389158358217,
            "spread_pct": 0.022432156941201147,
            "spread_ticks": 1.55943859290316,
            "amihud": 3.3119592387786906e-07,
            "turnover_ratio": 0.0021201442293476242,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 133388.5,
            "trades": 56.5,
            "volatility": 0.8731725403601911,
            "spread_pct": 0.022849577626176783,
            "spread_ticks": 1.9312593984962407,
            "amihud": 3.042004542597556e-07,
            "turnover_ratio": 0.006389800843223793,
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
              "mean": 0.6066129217074785,
              "median": 0.3575389350854399,
              "min": 0.0,
              "max": 14.968683140216205,
              "p5": 0.0,
              "p95": 1.778326231729793,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3451525.409265025,
              "median": 8659.201431778092,
              "min": 0.0,
              "max": 264260256.0,
              "p5": 0.0,
              "p95": 15017777.449999968,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11212163321790079,
              "median": 0.03400435583572636,
              "min": 0.0003015714112095303,
              "max": 1.3701355930953352,
              "p5": 0.0035587024494727294,
              "p95": 0.5595808574531979,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007881573747567058,
              "median": 0.0002456085914207219,
              "min": 0.0,
              "max": 2.72394700415266,
              "p5": 0.0,
              "p95": 0.011311683245907542,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.005409167268121388,
              "median": 1.6279853118392772e-07,
              "min": 0.0,
              "max": 2.500113631198582,
              "p5": 0.0,
              "p95": 0.00013286101432442886,
              "count": 522
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 486.48566308243727,
              "median": 5.5,
              "min": 0.0,
              "max": 11208.5,
              "p5": 0.0,
              "p95": 3025.599999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26533236507812713,
              "median": 0.3048292935617021,
              "min": 0.0,
              "max": 0.5562593092636959,
              "p5": 0.0,
              "p95": 0.4870717175003644,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1383750.28125,
              "median": 8130.5,
              "min": 0.0,
              "max": 10353444.0,
              "p5": 0.0,
              "p95": 6926813.274999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14489222971703944,
              "median": 0.022510739654853333,
              "min": 0.0013897868687551746,
              "max": 0.6666666666666666,
              "p5": 0.004420949404389359,
              "p95": 0.5697126436781608,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002091227118134645,
              "median": 0.00023843430842294814,
              "min": 0.0,
              "max": 0.00821847609399484,
              "p5": 0.0,
              "p95": 0.0077725024073983,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.819879901843991e-07,
              "median": 1.5258940703117583e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 3.617439691594115e-10,
              "p95": 1.9994003877340164e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 459.875,
              "median": 5.25,
              "min": 0.0,
              "max": 3288.5,
              "p5": 0.0,
              "p95": 2255.8249999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 100594.76875,
              "median": 8130.5,
              "min": 0.0,
              "max": 563070.5,
              "p5": 0.0,
              "p95": 412681.7999999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 55.125,
              "median": 5.25,
              "min": 0.0,
              "max": 338.0,
              "p5": 0.0,
              "p95": 239.47499999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3555351409723548,
              "median": 0.3272407254457641,
              "min": 0.0,
              "max": 0.8731725403601911,
              "p5": 0.0,
              "p95": 0.7622529094764177,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14721904610851821,
              "median": 0.022640867283688963,
              "min": 0.010050251256281416,
              "max": 0.6666666666666666,
              "p5": 0.010977454683005065,
              "p95": 0.5697126436781608,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.580515166652508,
              "median": 1.9656296992481204,
              "min": 1.0,
              "max": 15.333333333333332,
              "p5": 1.1470315029705653,
              "p95": 11.016666666666659,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.507881555952446e-07,
              "median": 3.3119592387786906e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 4.405083338152308e-09,
              "p95": 1.9994003877340164e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002159797886853632,
              "median": 0.00023843430842294814,
              "min": 0.0,
              "max": 0.00821847609399484,
              "p5": 0.0,
              "p95": 0.007578439756224973,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.04166666666666685,
            "market": -0.005265683525626064,
            "sector": -0.0011299841166853009,
            "peers": -0.03361475656943247,
            "vs_market": -0.03640098314104079,
            "vs_sector": -0.04053668254998155,
            "vs_peers": -0.008051910097234383
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.60931899641577,
          "score_pca_percentile": 70.60931899641577,
          "rank_pca": 165,
          "total": 558,
          "adv_notional_sgd": 150238.0,
          "adv_volume_shares": 682900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001197563301518758,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.025405786873676804,
          "spread_ticks": 1.170940170940171,
          "amihud": 1.0373766818469451e-07,
          "volatility": 0.4660397259715721
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5310614492954936,
          "loadings": {
            "log_adv": 0.5438717194272584,
            "log_trades": 0.4979881592572769,
            "log_turnover": 0.5012782015725934,
            "neg_spread": 0.418576489057566,
            "neg_amihud": 0.07397836310358988,
            "neg_vol": 0.15573193402667437
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
          "peer_median_adv": 9771.75,
          "peer_median_score_pca": 52.32974910394265,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.39080716111929825,
          "peer_median_spread_pct": 0.02725208113235666,
          "peer_median_spread_ticks": 1.8527777777777779,
          "peer_median_amihud": 4.0428760489677053e-07,
          "peer_median_turnover_ratio": 0.00015512004267593613,
          "target_vs_peer": {
            "score_pca_delta": 18.28,
            "adv_delta_pct": 1437.5,
            "trades_delta_pct": 607.69,
            "volatility_delta_pct": -19.25,
            "spread_pct_delta_pct": 6.77,
            "spread_ticks_delta_pct": -36.8,
            "amihud_delta_pct": 74.34,
            "turnover_ratio_delta_pct": 672.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.60931899641577,
            "rank_pca": 165,
            "adv": 150238.0,
            "trades": 46.0,
            "volatility": 0.4660397259715721,
            "spread_pct": 0.025405786873676804,
            "spread_ticks": 1.170940170940171,
            "amihud": 1.0373766818469451e-07,
            "turnover_ratio": 0.001197563301518758,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.43727598566308,
            "rank_pca": 99,
            "adv": 520608.0,
            "trades": 305.0,
            "volatility": 0.4298867851079014,
            "spread_pct": 0.013327127878008061,
            "spread_ticks": 1.4385964912280702,
            "amihud": 3.427976331880202e-08,
            "turnover_ratio": 0.007477939412250847,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 40.681003584229394,
            "rank_pca": 332,
            "adv": 3850.0,
            "trades": 1.0,
            "volatility": 0.48579811039173604,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 2.012072434607639e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.40501792114696,
            "rank_pca": 261,
            "adv": 10790.0,
            "trades": 8.0,
            "volatility": 0.3138488580976339,
            "spread_pct": 0.01609538002980627,
            "spread_ticks": 2.75,
            "amihud": 1.0611205432937245e-06,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 51.25448028673835,
            "rank_pca": 273,
            "adv": 8753.5,
            "trades": 5.0,
            "volatility": 0.35172753713069516,
            "spread_pct": 0.024420456556361606,
            "spread_ticks": 1.75,
            "amihud": 1.0164364919565467e-06,
            "turnover_ratio": 0.00013224933887719258,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.867383512544803,
            "rank_pca": 541,
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
            "score_pca": 8.781362007168457,
            "rank_pca": 510,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4183673469387756,
            "spread_ticks": 16.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "S69",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 99477.3,
            "trades": 45.0,
            "volatility": 0.7729178231593427,
            "spread_pct": 0.022450800807853062,
            "spread_ticks": 1.5669291338582678,
            "amihud": 2.8141509603554625e-07,
            "turnover_ratio": 0.002430318784646951,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 67.74193548387096,
            "rank_pca": 181,
            "adv": 95472.0,
            "trades": 29.0,
            "volatility": 0.7291944371528872,
            "spread_pct": 0.030083705708351716,
            "spread_ticks": 1.9555555555555555,
            "amihud": 4.0428760489677053e-07,
            "turnover_ratio": 0.0049176878053796315,
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
              "mean": 0.6527176249376457,
              "median": 0.4165660207609925,
              "min": 0.0,
              "max": 10.404045897366142,
              "p5": 0.0,
              "p95": 1.8976777876479516,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3542305.153776927,
              "median": 8696.75,
              "min": 0.0,
              "max": 308705792.0,
              "p5": 0.0,
              "p95": 14334514.549999967,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1098270534583233,
              "median": 0.036329541330146264,
              "min": 0.0002854442826014152,
              "max": 1.3716475095785439,
              "p5": 0.0037493215762315416,
              "p95": 0.4969237893622651,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008280743636461783,
              "median": 0.00021957765523088072,
              "min": 0.0,
              "max": 3.285874365565882,
              "p5": 0.0,
              "p95": 0.009829031859304097,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005257027923386977,
              "median": 1.731411946837609e-07,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 8.346060206759251e-05,
              "count": 540
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 510.5967741935484,
              "median": 5.5,
              "min": 0.0,
              "max": 11866.0,
              "p5": 0.0,
              "p95": 3094.0999999999967,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29309329531546063,
              "median": 0.33278819761416456,
              "min": 0.0,
              "max": 0.48579811039173604,
              "p5": 0.0,
              "p95": 0.47888267584467864,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1850924.1875000002,
              "median": 9771.75,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9355762.899999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15249296432654408,
              "median": 0.024913121715019207,
              "min": 0.001403225479155513,
              "max": 0.6666666666666666,
              "p5": 0.005576591318753906,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022858202590663843,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.009210949347200346,
              "p5": 0.0,
              "p95": 0.00860439586996802,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.041186375564232e-07,
              "median": 1.0373766818469451e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 3.55068460066479e-10,
              "p95": 1.726786867213464e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 479.875,
              "median": 6.5,
              "min": 0.0,
              "max": 3474.0,
              "p5": 0.0,
              "p95": 2364.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 92368.85,
              "median": 9771.75,
              "min": 0.0,
              "max": 520608.0,
              "p5": 0.0,
              "p95": 373212.2549999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 49.125,
              "median": 6.5,
              "min": 0.0,
              "max": 305.0,
              "p5": 0.0,
              "p95": 213.99999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.38542169388002456,
              "median": 0.39080716111929825,
              "min": 0.0,
              "max": 0.7729178231593427,
              "p5": 0.0,
              "p95": 0.7576146380570832,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15570865109696563,
              "median": 0.02725208113235666,
              "min": 0.013327127878008061,
              "max": 0.6666666666666666,
              "p5": 0.014296016131137436,
              "p95": 0.5797619047619046,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.857635147580236,
              "median": 1.8527777777777779,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.1535087719298245,
              "p95": 12.059999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.870874191584329e-07,
              "median": 4.0428760489677053e-07,
              "min": 0.0,
              "max": 2.012072434607639e-06,
              "p5": 1.0283928995640608e-08,
              "p95": 1.726786867213464e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019032570017298196,
              "median": 0.00015512004267593613,
              "min": 0.0,
              "max": 0.007477939412250847,
              "p5": 0.0,
              "p95": 0.00658185134984592,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -3.3306690738754696e-16,
            "market": 0.012036686963015297,
            "sector": -0.04256277638118022,
            "peers": -0.06550690651575941,
            "vs_market": -0.01203668696301563,
            "vs_sector": 0.04256277638117989,
            "vs_peers": 0.06550690651575908
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access still looks solid, but the lighter bid side means buying liquidity is less robust intraday.",
        "market_comparison": "The stock outperformed peers on the day, which matters because stronger price action can help keep attention and trading interest in the name."
      },
      "1w": {
        "liquidity": "Liquidity is still good, but it has pulled back, with average volume running 27.0% below the 1M average.",
        "market_comparison": "The stock broadly kept pace with peers over the week, so the softer trading activity reflects thinner flow rather than a sharp relative price break."
      },
      "2w": {
        "liquidity": "Tradability remains healthy over two weeks, though the recent slowdown suggests access is not as firm as the broader monthly picture.",
        "market_comparison": "The stock lagged peers over two weeks, which matters because weaker relative performance can coincide with less consistent trading interest."
      },
      "30d": {
        "liquidity": "Liquidity is strong on a monthly view, with a score of 70.6 compared with a peer median of 52.3, supporting good accessibility for the company’s size.",
        "market_comparison": "The stock was flat over the month while peers fell 6.6%, which matters because relative resilience helps support tradability even without broader market support."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 46,
      "reporting_window_days": 46,
      "available_history_days": 46,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.5100593923639365,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "51.0%",
          "display_range": null,
          "display_text": "51.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "share_pct",
          "value_pct": 51.0,
          "plain_english": "Market explains about 51.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.376801726454487,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.7%",
          "display_range": null,
          "display_text": "37.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "share_pct",
          "value_pct": 37.7,
          "plain_english": "Sector explains about 37.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.11313888118157646,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.3%",
          "display_range": null,
          "display_text": "11.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "share_pct",
          "value_pct": 11.3,
          "plain_english": "Company-specific explains about 11.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.3133635159057857,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.31",
          "display_range": null,
          "display_text": "1.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.31% stock move in the same direction in this state.",
          "value_num": 1.31
        },
        "beta_stock_lag": {
          "median": -0.2649259284796256,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.26",
          "display_range": null,
          "display_text": "-0.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "lag_beta",
          "value_num": -0.26
        },
        "beta_sector": {
          "median": -0.013864295850007632,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.01",
          "display_range": null,
          "display_text": "-0.01",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the opposite direction in this state.",
          "value_num": -0.01
        },
        "beta_market_lag": {
          "median": -0.9737512571328374,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.97",
          "display_range": null,
          "display_text": "-0.97",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "lag_beta",
          "value_num": -0.97
        },
        "beta_sector_lag": {
          "median": 1.231456900568322,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.23",
          "display_range": null,
          "display_text": "1.23",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "kind": "lag_beta",
          "value_num": 1.23
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 46 trading days relative to the 252-day target."
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
            "median": 0.47931948471963925,
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
              "median": 0.47931948471963925,
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
              "median": 0.2984396411024003,
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
              "median": 0.22224087417796046,
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
            "median": 0.5656898926629687,
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
              "median": 0.2647931795787311,
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
              "median": 0.1695169277583002,
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
              "median": 0.5656898926629687,
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
            "median": 0.5379214653603349,
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
              "median": 0.22982068067655406,
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
              "median": 0.5379214653603349,
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
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 7.333333333333333,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.030134425137346942,
            "low": 0.030134425137346942,
            "high": 0.030134425137346942
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 11.0,
          "current_probability": 0.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.04300354637129311,
            "low": 0.04300354637129311,
            "high": 0.04300354637129311
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9047619047619048,
            0.09523809523809523
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            19.0,
            2.0
          ],
          [
            2.0,
            20.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 46,
        "reporting_window_days": 46,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "1.31",
        "sector_link_display": "-0.01",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.31% stock move in the same direction in this state. This is a point estimate from 46 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the opposite direction in this state. This is a point estimate from 46 trading days.",
        "stock_persistence_display": "-0.26",
        "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
        "history_limited_note": "Read is based on 46 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 51.0,
        "driver_share_display": "51.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 46 trading days relative to the 252-day target.",
        "history_days": 46,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9047619047619048,
        "effective_days": 22.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 7.3 days.",
        "expected_duration_days": 7.3
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
          "expected_duration_days": 7.333333333333333,
          "current_probability": 1.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.030134425137346942,
            "low": 0.030134425137346942,
            "high": 0.030134425137346942
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 11.0,
          "current_probability": 0.0,
          "n_days_effective": 22.0,
          "volatility": {
            "median": 0.04300354637129311,
            "low": 0.04300354637129311,
            "high": 0.04300354637129311
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9047619047619048,
          0.09523809523809523
        ],
        [
          0.09090909090909091,
          0.9090909090909091
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9047619047619048,
            0.09523809523809523
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            19.0,
            2.0
          ],
          [
            2.0,
            20.0
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
        "text": "Liquidity score: 70.6 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is mixed",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "drivers": {
        "text": "Drivers: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "exec_check": {
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity remains strong for the stock’s size, but recent average volume has dropped below the monthly pace.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock was flat over 1M, ahead of peers but behind the market.",
    "perf_insight": "Relative performance has held up against peers, with a 1M return of -0.0% compared with peers at -6.6%, but it lagged the market at +1.2%. That matters because price visible support has been better than the peer group, even as broader market conditions still shape trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main current driver, so the tape is still moving largely with broader conditions.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 51.0% of price changes. Other influences are sector 37.7%, and company-specific 11.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 51.0%, sector 37.7%, and company-specific 11.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 51.0%, sector 37.7%, and company-specific 11.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because market factors account for 51.0% of the current driver mix, while recent average volume is 27.0% below the monthly average. Day-to-day access can therefore feel less consistent even with a solid structural liquidity profile.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 51.0% of recent price moves.",
      "The mix was mostly market through February and March, so the current read looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions look orderly on spread, but lighter recent volume and a bid-light book make the tape less robust than the monthly profile",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 1, 2026 (48 trading days • 9,867 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The book is bid-light, with top-10 bid depth at 0.56x ask depth and a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 12.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading conditions are best judged through the current liquidity profile and displayed depth.",
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
    "intraday_insight": "The clearest intraday signal is a bid-light book, with top-10 bid depth at 0.56x ask depth and a 1-tick spread. That matters because execution can still feel less forgiving on the buy side even when quoted spread remains tight.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current tape.",
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
    "exec_subtitle": "Trading access is strong relative to peers, although recent volume and the near-side book point to a thinner tape day to day.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "70.6/100",
        "sub": "Peer median 52.3 (+18.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$150.2K",
        "sub": "Peer median S$9.8K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.17 ticks; peers 2.73%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong in relative terms, with a 1M score of 70.6 compared with a peer median of 52.3. Near-term conditions are less supportive, with 1W average volume down 27.0% from the 1M average and top-10 bid depth at 0.56x ask depth. That keeps the stock accessible relative to peers, but day-to-day trading can feel thinner than the monthly profile implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.228",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.20%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.56x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.01% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.03% with 26.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.03% with 10.4% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 165/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.17 ticks vs peers 2.73%",
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
        "value": "150.2K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$9.8K",
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
        "value": "51.0",
        "suffix": "market",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 37.7% • Company 11.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 1M liquidity score of 70.6 compared with a peer median of 52.3. That leaves the name screening as more accessible than its peer group.",
      "Recent trading activity has pulled back, with 1W average volume down 27.0% from the 1M average. That matters because current access is weaker than the monthly profile alone would suggest.",
      "Near-term conditions are less supportive, with top-10 bid depth at 0.56x ask depth and market factors making up 51.0% of the current driver mix. That matters because buy-side liquidity is thinner while broader market moves still shape the tape."
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
      "overall": "1M liquidity is strong: score 70.6 vs peer median 52.3 (+18.3",
      "strengths": [
        "1M score 70.6 vs peer median 52.3 (+18.3 pts)."
      ],
      "concerns": [
        "1W average volume down -27.0% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +18.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -0.0%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -0.0% vs market 1.2%.",
        "vs_sector": "Better than sector: -0.0% vs sector -4.3%.",
        "vs_peers": "Better than peers: -0.0% vs peers -6.6%."
      },
      "adv": {
        "insight": "ADV is S$150.2K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$150.2K vs market S$8.7K.",
        "vs_sector": "Better than sector: S$150.2K vs sector S$9.8K.",
        "vs_peers": "Better than peers: S$150.2K vs peers S$9.8K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.54% vs market 3.63%.",
        "vs_sector": "In line with sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.73%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.12%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.12% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.12% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.12% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 46.60%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 46.60% vs market 41.66%.",
        "vs_sector": "Worse than sector: 46.60% vs sector 33.28%.",
        "vs_peers": "Worse than peers: 46.60% vs peers 39.08%."
      },
      "trades": {
        "insight": "Trades is 46, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 46 vs market 6.",
        "vs_sector": "Better than sector: 46 vs sector 6.",
        "vs_peers": "Better than peers: 46 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.04e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.04e-07 vs market 1.73e-07.",
        "vs_sector": "In line with sector: 1.04e-07 vs sector 1.04e-07.",
        "vs_peers": "Better than peers: 1.04e-07 vs peers 4.04e-07."
      }
    },
    "performance": {
      "overall": "Returns are mixed, with the stock flat over 1M compared with peers down 6.6% but lagging a market that rose 1.2%. That relative resilience is only partly confirmed by trading conditions because the 1M liquidity score remains strong at 70.6 compared with a 52.3 peer median, yet 1W average volume has dropped 27.0% from the 1M average. With market factors driving 51.0% of the tape, the move still looks meaningfully linked to broader conditions rather than standing on company-specific momentum.",
      "conclusion": "The move looks mixed but still mainly broad-market in character, with weaker recent activity limiting confirmation from liquidity."
    },
    "drivers": {
      "overall": "The stock is currently being driven mainly by the market, with 51.0% of recent moves explained by broader conditions. That matters because the tape is responding more to the wider backdrop than to company-specific news, and the recent drop in average volume points to less consistent day-to-day trading conditions.",
      "beta": "This market-led pattern looks meaningful but not fully settled. Recent average volume is down 27.0% compared with the monthly average, so the current read is playing out in a thinner trading environment.",
      "rolling_change": "The monthly pattern has changed. January was mostly market-driven, while February and March were mostly market, so the current setup looks more balanced than the last two months."
    },
    "regime": {
      "overall": "The backdrop is calmer than a high-volatility phase, which usually supports steadier trading conditions. That matters because a more settled tape can help liquidity hold up, even as recent activity has pulled back from the monthly average.",
      "current": "The stock is currently in a Low Volatility state, pointing to a calmer trading backdrop at present.",
      "transitions": "This state looks fairly stable rather than short-lived, with a typical run length of about 7.3 days, although the signal is mixed.",
      "trading_implications": "Trading conditions may feel steadier while this lower-volatility state holds, but the 27.0% drop in 1W average volume compared with 1M means day-to-day access can still feel less resilient than the calmer price action implies."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed because the spread is still 1 tick, but top-10 bid depth is only 0.56x of ask depth. That means access is available on screen, yet buy-side support is thinner than a strong monthly score would imply.",
      "concern": "The clearest stress point is the imbalance in the book, with materially lighter bid depth than ask depth. With 1W average volume down 27.0% from the 1M average, that thinner buy side matters more for immediate trading conditions.",
      "peer_context": "Liquidity still looks strong for the stock’s size, with a 1M score of 70.6 versus a peer median of 52.3, but recent trading has softened, with 1W average volume down 27.0% versus 1M, and near-term buying depth looks lighter, with top-10 bid depth at 0.56x ask depth and the spread at 1 tick. Market factors still account for 51.0% of moves, while 1M return is -0.0% versus peers at -6.6% and the market at +1.2%."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 39.1% of trade count and 50.5% of trade value, compared with retail-like trades at 26.8% of count and 7.2% of value. That gap shows the larger share of activity is coming from institution-like flow rather than retail-sized participation.",
      "institutional_gap": "The read is directionally clear, although 21.1% of trade count is ambiguous or unclear, so the signal is not fully clean.",
      "peer_comparison": "The mix stands out as institution-leaning, with peer comparison framed in the report tables."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 12.6% of total trades, so most activity is transacting without shifting the price. That points to a reasonably orderly tape, although 21.1% of trade count is ambiguous or unclear, which makes the read mixed rather than fully clean. The balance between positive and negative price-moving trades is shown in the report tables.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and does not appear to be shaping current trading conditions. The clearer signals are a 27.0% drop in 1W average volume from the 1M average and a bid book that is lighter than the ask, which matter more for day-to-day access.",
      "level": "Low short interest",
      "correlation": "Positive - unusual (shorts during up days?)",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month. That points away from short pressure as a driver, so the broader picture is better explained by weaker recent volume and a market-led tape.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.1%, continuous 97.8%, and close 0.8%. Current trading concentration score is 0.252.",
      "hhi_interpretation": "The concentration score of 0.252 suggests activity is not heavily concentrated into a narrow part of the day, which supports a more usable trading profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries nearly all trading activity at 97.8% of volume.",
      "peer_ranking": "Peer concentration comparison is shown in the report tables."
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
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "S69",
        "S71"
      ],
      "scores": [
        70.60931899641577,
        82.43727598566308,
        40.681003584229394,
        53.40501792114696,
        51.25448028673835,
        2.867383512544803,
        8.781362007168457,
        69.53405017921148,
        67.74193548387096
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
        150238.0,
        520608.0,
        3850.0,
        10790.0,
        8753.5,
        0.0,
        0.0,
        99477.3,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.4660397259715721,
        "adv": 150238.0,
        "spread_pct": 0.025405786873676804,
        "turnover_ratio": 0.001197563301518758,
        "amihud": 1.0373766818469451e-07,
        "trades": 46.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6527176249376457,
          "median": 0.4165660207609925,
          "min": 0.0,
          "max": 10.404045897366142,
          "p5": 0.0,
          "p95": 1.8976777876479516,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3542305.153776927,
          "median": 8696.75,
          "min": 0.0,
          "max": 308705792.0,
          "p5": 0.0,
          "p95": 14334514.549999967,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1098270534583233,
          "median": 0.036329541330146264,
          "min": 0.0002854442826014152,
          "max": 1.3716475095785439,
          "p5": 0.0037493215762315416,
          "p95": 0.4969237893622651,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.008280743636461783,
          "median": 0.00021957765523088072,
          "min": 0.0,
          "max": 3.285874365565882,
          "p5": 0.0,
          "p95": 0.009829031859304097,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0005257027923386977,
          "median": 1.731411946837609e-07,
          "min": 0.0,
          "max": 0.25,
          "p5": 0.0,
          "p95": 8.346060206759251e-05,
          "count": 540
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 510.5967741935484,
          "median": 5.5,
          "min": 0.0,
          "max": 11866.0,
          "p5": 0.0,
          "p95": 3094.0999999999967,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.29309329531546063,
          "median": 0.33278819761416456,
          "min": 0.0,
          "max": 0.48579811039173604,
          "p5": 0.0,
          "p95": 0.47888267584467864,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1850924.1875000002,
          "median": 9771.75,
          "min": 0.0,
          "max": 14113154.000000002,
          "p5": 0.0,
          "p95": 9355762.899999995,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15249296432654408,
          "median": 0.024913121715019207,
          "min": 0.001403225479155513,
          "max": 0.6666666666666666,
          "p5": 0.005576591318753906,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0022858202590663843,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.009210949347200346,
          "p5": 0.0,
          "p95": 0.00860439586996802,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.041186375564232e-07,
          "median": 1.0373766818469451e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 3.55068460066479e-10,
          "p95": 1.726786867213464e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 479.875,
          "median": 6.5,
          "min": 0.0,
          "max": 3474.0,
          "p5": 0.0,
          "p95": 2364.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 92368.85,
          "median": 9771.75,
          "min": 0.0,
          "max": 520608.0,
          "p5": 0.0,
          "p95": 373212.2549999998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 49.125,
          "median": 6.5,
          "min": 0.0,
          "max": 305.0,
          "p5": 0.0,
          "p95": 213.99999999999986,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.38542169388002456,
          "median": 0.39080716111929825,
          "min": 0.0,
          "max": 0.7729178231593427,
          "p5": 0.0,
          "p95": 0.7576146380570832,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15570865109696563,
          "median": 0.02725208113235666,
          "min": 0.013327127878008061,
          "max": 0.6666666666666666,
          "p5": 0.014296016131137436,
          "p95": 0.5797619047619046,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.857635147580236,
          "median": 1.8527777777777779,
          "min": 1.0,
          "max": 16.4,
          "p5": 1.1535087719298245,
          "p95": 12.059999999999992,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.870874191584329e-07,
          "median": 4.0428760489677053e-07,
          "min": 0.0,
          "max": 2.012072434607639e-06,
          "p5": 1.0283928995640608e-08,
          "p95": 1.726786867213464e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019032570017298196,
          "median": 0.00015512004267593613,
          "min": 0.0,
          "max": 0.007477939412250847,
          "p5": 0.0,
          "p95": 0.00658185134984592,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -1.1102230246251565e-16,
        "market": 0.014535519843799305,
        "sector": 0.010101010101010166,
        "peers": -0.007901603319093287
      },
      {
        "horizon": "2W",
        "stock": -0.04166666666666685,
        "market": -0.005265683525626064,
        "sector": -0.0011299841166853009,
        "peers": -0.03361475656943247
      },
      {
        "horizon": "1M",
        "stock": -3.3306690738754696e-16,
        "market": 0.012036686963015297,
        "sector": -0.04256277638118022,
        "peers": -0.06550690651575941
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
      "share_market": 0.5100593923639365,
      "share_sector": 0.376801726454487,
      "share_idio": 0.11313888118157646,
      "beta_market": 1.3133635159057857,
      "beta_sector": -0.013864295850007632,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 46,
        "reporting_window_days": 46,
        "available_history_days": 46,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.5100593923639365,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Market explains about 51.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.376801726454487,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.7%",
            "display_range": null,
            "display_text": "37.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "share_pct",
            "value_pct": 37.7,
            "plain_english": "Sector explains about 37.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.11313888118157646,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.3%",
            "display_range": null,
            "display_text": "11.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "share_pct",
            "value_pct": 11.3,
            "plain_english": "Company-specific explains about 11.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.3133635159057857,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.31",
            "display_range": null,
            "display_text": "1.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.31% stock move in the same direction in this state.",
            "value_num": 1.31
          },
          "beta_stock_lag": {
            "median": -0.2649259284796256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.26",
            "display_range": null,
            "display_text": "-0.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "lag_beta",
            "value_num": -0.26
          },
          "beta_sector": {
            "median": -0.013864295850007632,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.01",
            "display_range": null,
            "display_text": "-0.01",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.01% stock move in the opposite direction in this state.",
            "value_num": -0.01
          },
          "beta_market_lag": {
            "median": -0.9737512571328374,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.97",
            "display_range": null,
            "display_text": "-0.97",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "lag_beta",
            "value_num": -0.97
          },
          "beta_sector_lag": {
            "median": 1.231456900568322,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.23",
            "display_range": null,
            "display_text": "1.23",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
            "kind": "lag_beta",
            "value_num": 1.23
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 46 trading days relative to the 252-day target."
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
              "median": 0.47931948471963925,
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
                "median": 0.47931948471963925,
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
                "median": 0.2984396411024003,
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
                "median": 0.22224087417796046,
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
              "median": 0.5656898926629687,
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
                "median": 0.2647931795787311,
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
                "median": 0.1695169277583002,
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
                "median": 0.5656898926629687,
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
              "median": 0.5379214653603349,
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
                "median": 0.22982068067655406,
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
                "median": 0.5379214653603349,
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
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 7.333333333333333,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.030134425137346942,
              "low": 0.030134425137346942,
              "high": 0.030134425137346942
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 11.0,
            "current_probability": 0.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.04300354637129311,
              "low": 0.04300354637129311,
              "high": 0.04300354637129311
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9047619047619048,
              0.09523809523809523
            ],
            [
              0.09090909090909091,
              0.9090909090909091
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              19.0,
              2.0
            ],
            [
              2.0,
              20.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 46,
          "reporting_window_days": 46,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "1.31",
          "sector_link_display": "-0.01",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.31% stock move in the same direction in this state. This is a point estimate from 46 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.01% stock move in the opposite direction in this state. This is a point estimate from 46 trading days.",
          "stock_persistence_display": "-0.26",
          "point_estimate_note": "Point estimate only because the current state has 46 trading days.",
          "history_limited_note": "Read is based on 46 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 51.0,
          "driver_share_display": "51.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 46 trading days relative to the 252-day target.",
          "history_days": 46,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9047619047619048,
          "effective_days": 22.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 7.3 days.",
          "expected_duration_days": 7.3
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
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
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
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
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
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
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
            "expected_duration_days": 7.333333333333333,
            "current_probability": 1.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.030134425137346942,
              "low": 0.030134425137346942,
              "high": 0.030134425137346942
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 11.0,
            "current_probability": 0.0,
            "n_days_effective": 22.0,
            "volatility": {
              "median": 0.04300354637129311,
              "low": 0.04300354637129311,
              "high": 0.04300354637129311
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9047619047619048,
            0.09523809523809523
          ],
          [
            0.09090909090909091,
            0.9090909090909091
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 262500.0,
          "value": 59062.5
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 347000.0,
          "value": 76340.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 286300.0,
          "value": 61554.5
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 143800.0,
          "value": 30198.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 25000.0,
          "value": 5125.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 131000.0,
          "value": 26200.0
        },
        {
          "level": 7,
          "price": 0.199,
          "quantity": 10000.0,
          "value": 1990.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 2000.0,
          "value": 460.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 342300.0,
          "value": 80440.5
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 140800.0,
          "value": 33792.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 94100.0,
          "value": 23054.5
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 100000.0,
          "value": 25000.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 300000.0,
          "value": 76500.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 339500.0,
          "value": 88270.0
        },
        {
          "level": 8,
          "price": 0.265,
          "quantity": 300500.0,
          "value": 79632.5
        },
        {
          "level": 9,
          "price": 0.27,
          "quantity": 89000.0,
          "value": 24030.0
        },
        {
          "level": 10,
          "price": 0.275,
          "quantity": 134000.0,
          "value": 36850.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-01 08:59:59.388200",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2275,
        "spread_pct": 0.021978021978021997,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 260470.0,
        "ask_depth_notional_top10": 468029.5,
        "bid_ask_depth_ratio": 0.5565
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 70,
        "history_limited": true,
        "trade_days_used": 48,
        "n_trades_used": 9867,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-01",
        "window_label": "Jan 22, 2026 to Apr 1, 2026",
        "window_short_label": "Jan 22-Apr 1",
        "trade_days_label": "48 trading days",
        "trade_count_label": "9,867 trades",
        "window_detail_label": "48 trading days • 9,867 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 1, 2026 (48 trading days • 9,867 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9646.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.7,
            "pct_of_adv": 6.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 5.28,
            "pct_of_adv": 9.3
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 104834.66,
            "impact_pct": -0.020707,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 40.25,
            "pct_of_adv": 70.92
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-01",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8123765301325001728",
            "timestamp": "2026-03-31 22:59:00.926400000",
            "local_timestamp": "2026-04-01 06:59:00",
            "posted_price": 0.3,
            "size_shares": 140000.0,
            "notional": 42000.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 16.12,
            "price_vs_mid_pct": 31.868,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8126536070628204544",
            "timestamp": "2026-03-31 22:59:00.926400000",
            "local_timestamp": "2026-04-01 06:59:00",
            "posted_price": 0.365,
            "size_shares": 100000.0,
            "notional": 36500.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 14.01,
            "price_vs_mid_pct": 60.44,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8123765301323656192",
            "timestamp": "2026-03-31 22:59:00.926400000",
            "local_timestamp": "2026-04-01 06:59:00",
            "posted_price": 0.255,
            "size_shares": 140000.0,
            "notional": 35700.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 13.71,
            "price_vs_mid_pct": 12.088,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-01",
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
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 218576.5,
            "ask_depth_notional": 460422.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 274657.5,
            "ask_depth_notional": 433458.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 274818.5,
            "ask_depth_notional": 482908.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.04347826086956514,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 267084.0,
            "ask_depth_notional": 488630.0,
            "mid_price": 0.22999999999999998
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 278830.5,
            "ask_depth_notional": 480658.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 271102.5,
            "ask_depth_notional": 485558.5,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 287714.5,
            "ask_depth_notional": 487929.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 287714.5,
            "ask_depth_notional": 487929.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.021505376344085923,
            "spread_ticks": 0.9999999999999953,
            "bid_depth_notional": 293284.5,
            "ask_depth_notional": 487929.0,
            "mid_price": 0.23249999999999998
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.04347826086956514,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 273967.5,
            "ask_depth_notional": 483129.0,
            "mid_price": 0.22999999999999998
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.04347826086956514,
            "spread_ticks": 1.9999999999999962,
            "bid_depth_notional": 274417.5,
            "ask_depth_notional": 498384.0,
            "mid_price": 0.22999999999999998
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 260470.0,
            "ask_depth_notional": 468029.5,
            "mid_price": 0.2275
          }
        ],
        "summary": {
          "median_spread_pct": 0.021505376344085923,
          "median_spread_ticks": 0.9999999999999953,
          "median_bid_depth_notional": 274537.5,
          "median_ask_depth_notional": 484343.75,
          "tightest_bucket": "09:30",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 33.8,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 193.9
        },
        {
          "ticker": "S69",
          "pct": 1014.5
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "LVR",
          "pct": 8484.6
        },
        {
          "ticker": "U77",
          "pct": 13742.4
        },
        {
          "ticker": "NXR",
          "pct": 18779.3
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
          "n_trades": 49,
          "n_runs": 16,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.20408163265306123,
            "mixed_pct": 0.0,
            "instit_pct": 0.5714285714285714,
            "ambiguous_pct": 0.22448979591836735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22448979591836735,
            "retail_qty_pct": 0.06638149556400506,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7118187579214195,
            "ambiguous_qty_pct": 0.2217997465145754,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2217997465145754,
            "retail_notional_pct": 0.06638149556400506,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7118187579214195,
            "ambiguous_notional_pct": 0.2217997465145754,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2217997465145754
          },
          "run_composition": {
            "retail_pct": 0.375,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.375,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.375,
            "retail_notional_pct": 0.06638149556400506,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7118187579214195,
            "unclear_notional_pct": 0.2217997465145754
          },
          "counts": {
            "trades": {
              "retail": 10,
              "mixed": 0,
              "institutional": 28,
              "ambiguous": 11,
              "unobservable": 0,
              "unclear": 11
            },
            "runs": {
              "retail": 6,
              "mixed": 0,
              "institutional": 4,
              "ambiguous": 6,
              "unobservable": 0,
              "unclear": 6
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.625,
            "na": 0.375
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 10,
            "na": 6
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7755102040816326,
            "na": 0.22448979591836735
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 38,
            "na": 11
          },
          "observability": {
            "avg_feature_coverage": 0.8687500000000001,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.375,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.375,
          "dominance_gap": 0.0,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 37,
              "SINGLE_FILL": 12
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 38,
              "PERSISTENT_POSITIVE_IMPACT": 11
            },
            "d3_urgency": {
              "IMMEDIATE": 16
            },
            "participant_confidence": {
              "LOW": 10,
              "NA": 6
            }
          },
          "trade_size": {
            "avg": 2962.7755102040815,
            "median": 2300.0
          },
          "run_size": {
            "avg": 9073.5,
            "median": 4025.0,
            "avg_length": 1.375
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-01T08:32:46.398500",
              "price": 0.23,
              "size": 8000.0,
              "notional": 1840.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1524,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 400.0,
              "notional": 92.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-04-01T07:54:35.262300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 48600.0,
              "notional": 11178.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11000.0,
              "notional": 2530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 24000.0,
              "notional": 5520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 1700.0,
              "notional": 391.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11700.0,
              "notional": 2691.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 7300.0,
              "notional": 1679.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 12800.0,
              "notional": 2944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 9900.0,
              "notional": 2277.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-01T03:17:17.338500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1520,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-01T03:04:49.104100",
              "price": 0.23,
              "size": 14000.0,
              "notional": 3220.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1518,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 3900.0,
              "notional": 897.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-01T02:53:20.661500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-01T02:53:20.631400",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-01T02:16:35.799100",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-01T02:16:35.738800",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-01T02:16:35.708800",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-01T02:16:35.708500",
              "price": 0.23,
              "size": 26300.0,
              "notional": 6049.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.20408163265306123,
              "mixed_pct": 0.0,
              "instit_pct": 0.5714285714285714,
              "ambiguous_pct": 0.22448979591836735,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22448979591836735,
              "retail_qty_pct": 0.06638149556400506,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7118187579214195,
              "ambiguous_qty_pct": 0.2217997465145754,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2217997465145754,
              "retail_notional_pct": 0.06638149556400506,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7118187579214195,
              "ambiguous_notional_pct": 0.2217997465145754,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2217997465145754,
              "run_retail_pct": 0.375,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.375,
              "avg_trade_size": 2962.7755102040815,
              "avg_run_notional": 9073.5,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.625,
              "na_confidence_pct": 0.375,
              "avg_feature_coverage": 0.8687500000000001,
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
              "avg_trade_size": 3550.0,
              "avg_run_notional": 3550.0,
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
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.0,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.015693659761456372,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9416195856873822,
              "ambiguous_qty_pct": 0.04268675455116133,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.04268675455116133,
              "retail_notional_pct": 0.016196436072132874,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9397492578116657,
              "ambiguous_notional_pct": 0.04405430611620142,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.04405430611620142,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.25,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 17557.875,
              "avg_run_notional": 17557.875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.7750000000000001,
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
              "instit_pct": 0.5,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.5,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.8,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.2,
              "unclear_qty_pct": 0.2,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.8,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.2,
              "unclear_notional_pct": 0.2,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 925.0,
              "avg_run_notional": 925.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.7000000000000001,
              "observable_run_pct": 0.5,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24759615384615385,
              "mixed_pct": 0.20192307692307693,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.17548076923076922,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17548076923076922,
              "retail_qty_pct": 0.06033376123234917,
              "mixed_qty_pct": 0.17736414206247325,
              "instit_qty_pct": 0.5485665382969619,
              "ambiguous_qty_pct": 0.21373555840821565,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.21373555840821565,
              "retail_notional_pct": 0.060510535244774094,
              "mixed_notional_pct": 0.17763370422586436,
              "instit_notional_pct": 0.5493677141652993,
              "ambiguous_notional_pct": 0.2124880463640623,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2124880463640623,
              "run_retail_pct": 0.6258064516129033,
              "run_mixed_pct": 0.16129032258064516,
              "run_instit_pct": 0.0967741935483871,
              "run_unclear_pct": 0.11612903225806452,
              "avg_trade_size": 1123.6322115384614,
              "avg_run_notional": 3015.6838709677418,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.535483870967742,
              "low_confidence_pct": 0.1870967741935484,
              "na_confidence_pct": 0.27741935483870966,
              "avg_feature_coverage": 0.8638709677419354,
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
              "retail_pct": 0.18181818181818182,
              "mixed_pct": 0.0,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.45454545454545453,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.45454545454545453,
              "retail_qty_pct": 0.1420534458509142,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.4641350210970464,
              "ambiguous_qty_pct": 0.39381153305203936,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.39381153305203936,
              "retail_notional_pct": 0.14313996382333252,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.46531170329435556,
              "ambiguous_notional_pct": 0.39154833288231183,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.39154833288231183,
              "run_retail_pct": 0.4,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.4,
              "avg_trade_size": 1276.5636363636363,
              "avg_run_notional": 2808.44,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6,
              "na_confidence_pct": 0.4,
              "avg_feature_coverage": 0.79,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3,
              "mixed_pct": 0.03333333333333333,
              "instit_pct": 0.2,
              "ambiguous_pct": 0.43333333333333335,
              "unobservable_pct": 0.03333333333333333,
              "unclear_pct": 0.4666666666666667,
              "retail_qty_pct": 0.04466948741069571,
              "mixed_qty_pct": 0.018935978358881875,
              "instit_qty_pct": 0.34036207255323575,
              "ambiguous_qty_pct": 0.5297912187001457,
              "unobservable_qty_pct": 0.066241242977041,
              "unclear_qty_pct": 0.5960324616771867,
              "retail_notional_pct": 0.04351438152842365,
              "mixed_notional_pct": 0.018254764292878634,
              "instit_notional_pct": 0.34135841869041467,
              "ambiguous_notional_pct": 0.5301115467614966,
              "unobservable_notional_pct": 0.06676088872678641,
              "unclear_notional_pct": 0.5968724354882831,
              "run_retail_pct": 0.391304347826087,
              "run_mixed_pct": 0.043478260869565216,
              "run_instit_pct": 0.13043478260869565,
              "run_unclear_pct": 0.4347826086956522,
              "avg_trade_size": 3290.1,
              "avg_run_notional": 4291.434782608696,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5217391304347826,
              "na_confidence_pct": 0.4782608695652174,
              "avg_feature_coverage": 0.7847826086956522,
              "observable_run_pct": 0.9565217391304348,
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
          "n_trades": 194,
          "n_runs": 102,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-26",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.28350515463917525,
            "mixed_pct": 0.08247422680412371,
            "instit_pct": 0.4845360824742268,
            "ambiguous_pct": 0.14948453608247422,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14948453608247422,
            "retail_qty_pct": 0.11423860106607354,
            "mixed_qty_pct": 0.11362503355447329,
            "instit_qty_pct": 0.5639835870690647,
            "ambiguous_qty_pct": 0.20815277831038848,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20815277831038848,
            "retail_notional_pct": 0.11401889620560149,
            "mixed_notional_pct": 0.11324671168971151,
            "instit_notional_pct": 0.564992337100224,
            "ambiguous_notional_pct": 0.207742055004463,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.207742055004463
          },
          "run_composition": {
            "retail_pct": 0.46078431372549017,
            "mixed_pct": 0.10784313725490197,
            "instit_pct": 0.24509803921568626,
            "ambiguous_pct": 0.18627450980392157,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18627450980392157,
            "retail_notional_pct": 0.11401889620560149,
            "mixed_notional_pct": 0.11324671168971151,
            "instit_notional_pct": 0.564992337100224,
            "unclear_notional_pct": 0.207742055004463
          },
          "counts": {
            "trades": {
              "retail": 55,
              "mixed": 16,
              "institutional": 94,
              "ambiguous": 29,
              "unobservable": 0,
              "unclear": 29
            },
            "runs": {
              "retail": 47,
              "mixed": 11,
              "institutional": 25,
              "ambiguous": 19,
              "unobservable": 0,
              "unclear": 19
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7058823529411765,
            "na": 0.29411764705882354
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 72,
            "na": 30
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7680412371134021,
            "na": 0.23195876288659795
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 149,
            "na": 45
          },
          "observability": {
            "avg_feature_coverage": 0.8573529411764703,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18627450980392157,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.46078431372549017,
          "dominance_gap": 0.2156862745098039,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 100,
              "SINGLE_FILL": 94
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 153,
              "PERSISTENT_POSITIVE_IMPACT": 38,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 102
            },
            "participant_confidence": {
              "LOW": 72,
              "NA": 30
            }
          },
          "trade_size": {
            "avg": 3060.6701030927834,
            "median": 2300.0
          },
          "run_size": {
            "avg": 5821.274509803921,
            "median": 4419.5,
            "avg_length": 1.2647058823529411
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-01T08:32:46.398500",
              "price": 0.23,
              "size": 8000.0,
              "notional": 1840.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1524,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 400.0,
              "notional": 92.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-04-01T07:54:35.262300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 48600.0,
              "notional": 11178.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11000.0,
              "notional": 2530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 24000.0,
              "notional": 5520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 1700.0,
              "notional": 391.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11700.0,
              "notional": 2691.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 7300.0,
              "notional": 1679.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 12800.0,
              "notional": 2944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 9900.0,
              "notional": 2277.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-01T03:17:17.338500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1520,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-01T03:04:49.104100",
              "price": 0.23,
              "size": 14000.0,
              "notional": 3220.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1518,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 3900.0,
              "notional": 897.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-01T02:53:20.661500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-01T02:53:20.631400",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-01T02:16:35.799100",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-01T02:16:35.738800",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-01T02:16:35.708800",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-01T02:16:35.708500",
              "price": 0.23,
              "size": 26300.0,
              "notional": 6049.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.28350515463917525,
              "mixed_pct": 0.08247422680412371,
              "instit_pct": 0.4845360824742268,
              "ambiguous_pct": 0.14948453608247422,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14948453608247422,
              "retail_qty_pct": 0.11423860106607354,
              "mixed_qty_pct": 0.11362503355447329,
              "instit_qty_pct": 0.5639835870690647,
              "ambiguous_qty_pct": 0.20815277831038848,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20815277831038848,
              "retail_notional_pct": 0.11401889620560149,
              "mixed_notional_pct": 0.11324671168971151,
              "instit_notional_pct": 0.564992337100224,
              "ambiguous_notional_pct": 0.207742055004463,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.207742055004463,
              "run_retail_pct": 0.46078431372549017,
              "run_mixed_pct": 0.10784313725490197,
              "run_instit_pct": 0.24509803921568626,
              "run_unclear_pct": 0.18627450980392157,
              "avg_trade_size": 3060.6701030927834,
              "avg_run_notional": 5821.274509803921,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7058823529411765,
              "na_confidence_pct": 0.29411764705882354,
              "avg_feature_coverage": 0.8573529411764703,
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
              "retail_pct": 0.2964509394572025,
              "mixed_pct": 0.20250521920668058,
              "instit_pct": 0.32620041753653445,
              "ambiguous_pct": 0.17484342379958245,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17484342379958245,
              "retail_qty_pct": 0.06350546975546975,
              "mixed_qty_pct": 0.10983751608751609,
              "instit_qty_pct": 0.5750482625482626,
              "ambiguous_qty_pct": 0.2516087516087516,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2516087516087516,
              "retail_notional_pct": 0.06359826242827255,
              "mixed_notional_pct": 0.11012050802374278,
              "instit_notional_pct": 0.5750889805532002,
              "ambiguous_notional_pct": 0.2511922489947844,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2511922489947844,
              "run_retail_pct": 0.6208476517754868,
              "run_mixed_pct": 0.16838487972508592,
              "run_instit_pct": 0.10423825887743414,
              "run_unclear_pct": 0.10652920962199312,
              "avg_trade_size": 1284.3374217118999,
              "avg_run_notional": 2818.774914089347,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1466208476517755,
              "medium_confidence_pct": 0.4146620847651776,
              "low_confidence_pct": 0.16380297823596793,
              "na_confidence_pct": 0.27491408934707906,
              "avg_feature_coverage": 0.8754868270332186,
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
              "retail_pct": 0.2222222222222222,
              "mixed_pct": 0.0,
              "instit_pct": 0.4444444444444444,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.011494252873563218,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.5506792058516197,
              "ambiguous_qty_pct": 0.4378265412748171,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4378265412748171,
              "retail_notional_pct": 0.011520499712724112,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.5481518584540137,
              "ambiguous_notional_pct": 0.4403276418332621,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4403276418332621,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.375,
              "run_unclear_pct": 0.375,
              "avg_trade_size": 3771.0555555555557,
              "avg_run_notional": 4242.4375,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.625,
              "na_confidence_pct": 0.375,
              "avg_feature_coverage": 0.83125,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2254335260115607,
              "mixed_pct": 0.09248554913294797,
              "instit_pct": 0.28901734104046245,
              "ambiguous_pct": 0.3930635838150289,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3930635838150289,
              "retail_qty_pct": 0.03900606761051719,
              "mixed_qty_pct": 0.01810652027352403,
              "instit_qty_pct": 0.5368390638543773,
              "ambiguous_qty_pct": 0.4060483482615814,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4060483482615814,
              "retail_notional_pct": 0.03877351416555277,
              "mixed_notional_pct": 0.017991936447907496,
              "instit_notional_pct": 0.5360262554472446,
              "ambiguous_notional_pct": 0.40720829393929514,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.40720829393929514,
              "run_retail_pct": 0.3486238532110092,
              "run_mixed_pct": 0.03669724770642202,
              "run_instit_pct": 0.21100917431192662,
              "run_unclear_pct": 0.4036697247706422,
              "avg_trade_size": 2659.508670520231,
              "avg_run_notional": 4221.05504587156,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.01834862385321101,
              "medium_confidence_pct": 0.21100917431192662,
              "low_confidence_pct": 0.3302752293577982,
              "na_confidence_pct": 0.44036697247706424,
              "avg_feature_coverage": 0.8279816513761467,
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
              "retail_pct": 0.06451612903225806,
              "mixed_pct": 0.12903225806451613,
              "instit_pct": 0.3548387096774194,
              "ambiguous_pct": 0.45161290322580644,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.45161290322580644,
              "retail_qty_pct": 0.045536519386834985,
              "mixed_qty_pct": 0.1375112714156898,
              "instit_qty_pct": 0.4643823264201984,
              "ambiguous_qty_pct": 0.3525698827772768,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3525698827772768,
              "retail_notional_pct": 0.04549672921523801,
              "mixed_notional_pct": 0.13782566377690758,
              "instit_notional_pct": 0.46553792525860704,
              "ambiguous_notional_pct": 0.35113968174924737,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35113968174924737,
              "run_retail_pct": 0.13333333333333333,
              "run_mixed_pct": 0.26666666666666666,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.4,
              "avg_trade_size": 1425.1290322580646,
              "avg_run_notional": 2945.2666666666673,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.8299999999999998,
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
              "retail_pct": 0.23684210526315788,
              "mixed_pct": 0.07894736842105263,
              "instit_pct": 0.42105263157894735,
              "ambiguous_pct": 0.15789473684210525,
              "unobservable_pct": 0.10526315789473684,
              "unclear_pct": 0.2631578947368421,
              "retail_qty_pct": 0.1339764201500536,
              "mixed_qty_pct": 0.22615219721329047,
              "instit_qty_pct": 0.4480171489817792,
              "ambiguous_qty_pct": 0.15112540192926044,
              "unobservable_qty_pct": 0.04072883172561629,
              "unclear_qty_pct": 0.19185423365487672,
              "retail_notional_pct": 0.13439551094280378,
              "mixed_notional_pct": 0.22698231561502846,
              "instit_notional_pct": 0.4482515500185348,
              "ambiguous_notional_pct": 0.1498993305664382,
              "unobservable_notional_pct": 0.04047129285719477,
              "unclear_notional_pct": 0.19037062342363298,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.2962962962962963,
              "run_unclear_pct": 0.25925925925925924,
              "avg_trade_size": 1810.25,
              "avg_run_notional": 2547.759259259259,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6296296296296297,
              "na_confidence_pct": 0.37037037037037035,
              "avg_feature_coverage": 0.790740740740741,
              "observable_run_pct": 0.9259259259259259,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25735294117647056,
              "mixed_pct": 0.051470588235294115,
              "instit_pct": 0.27941176470588236,
              "ambiguous_pct": 0.38235294117647056,
              "unobservable_pct": 0.029411764705882353,
              "unclear_pct": 0.4117647058823529,
              "retail_qty_pct": 0.06957107335267303,
              "mixed_qty_pct": 0.02856057466500898,
              "instit_qty_pct": 0.3889522033430032,
              "ambiguous_qty_pct": 0.48085025556016026,
              "unobservable_qty_pct": 0.03206589307915458,
              "unclear_qty_pct": 0.5129161486393148,
              "retail_notional_pct": 0.0685921627673402,
              "mixed_notional_pct": 0.028412503980431582,
              "instit_notional_pct": 0.39423813085256226,
              "ambiguous_notional_pct": 0.47612031918318887,
              "unobservable_notional_pct": 0.03263688321647705,
              "unclear_notional_pct": 0.5087572023996659,
              "run_retail_pct": 0.3855421686746988,
              "run_mixed_pct": 0.04819277108433735,
              "run_instit_pct": 0.18072289156626506,
              "run_unclear_pct": 0.3855421686746988,
              "avg_trade_size": 2907.144852941177,
              "avg_run_notional": 4763.514457831326,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.08433734939759036,
              "low_confidence_pct": 0.4819277108433735,
              "na_confidence_pct": 0.43373493975903615,
              "avg_feature_coverage": 0.8126506024096384,
              "observable_run_pct": 0.9759036144578314,
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
              "avg_trade_size": 0.1,
              "avg_run_notional": 0.1,
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
          "n_trades": 392,
          "n_runs": 210,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-19",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.27040816326530615,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.45663265306122447,
            "ambiguous_pct": 0.20153061224489796,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20153061224489796,
            "retail_qty_pct": 0.07731622444541104,
            "mixed_qty_pct": 0.09408075975061621,
            "instit_qty_pct": 0.5686167899086559,
            "ambiguous_qty_pct": 0.2599862258953168,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2599862258953168,
            "retail_notional_pct": 0.07700888838060203,
            "mixed_notional_pct": 0.09400567548882928,
            "instit_notional_pct": 0.5685168264274694,
            "ambiguous_notional_pct": 0.2604686097030994,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2604686097030994
          },
          "run_composition": {
            "retail_pct": 0.4666666666666667,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.22380952380952382,
            "ambiguous_pct": 0.22380952380952382,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22380952380952382,
            "retail_notional_pct": 0.07700888838060203,
            "mixed_notional_pct": 0.09400567548882928,
            "instit_notional_pct": 0.5685168264274694,
            "unclear_notional_pct": 0.2604686097030994
          },
          "counts": {
            "trades": {
              "retail": 106,
              "mixed": 28,
              "institutional": 179,
              "ambiguous": 79,
              "unobservable": 0,
              "unclear": 79
            },
            "runs": {
              "retail": 98,
              "mixed": 18,
              "institutional": 47,
              "ambiguous": 47,
              "unobservable": 0,
              "unclear": 47
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.6904761904761905,
            "na": 0.30952380952380953
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 145,
            "na": 65
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.7270408163265306,
            "na": 0.2729591836734694
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 285,
            "na": 107
          },
          "observability": {
            "avg_feature_coverage": 0.8607142857142855,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.22380952380952382,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4666666666666667,
          "dominance_gap": 0.24285714285714285,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 211,
              "MULTI_FILL_SINGLE_PRICE": 181
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 307,
              "PERSISTENT_POSITIVE_IMPACT": 82,
              "MOMENTUM_REACTIVE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 210
            },
            "participant_confidence": {
              "LOW": 145,
              "NA": 65
            }
          },
          "trade_size": {
            "avg": 3223.223214285714,
            "median": 2185.0
          },
          "run_size": {
            "avg": 6016.683333333333,
            "median": 2877.0,
            "avg_length": 1.3047619047619048
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-01T08:32:46.398500",
              "price": 0.23,
              "size": 8000.0,
              "notional": 1840.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1524,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 400.0,
              "notional": 92.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-04-01T07:54:35.262300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 48600.0,
              "notional": 11178.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11000.0,
              "notional": 2530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 24000.0,
              "notional": 5520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 1700.0,
              "notional": 391.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11700.0,
              "notional": 2691.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 7300.0,
              "notional": 1679.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 12800.0,
              "notional": 2944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 9900.0,
              "notional": 2277.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-01T03:17:17.338500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1520,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-01T03:04:49.104100",
              "price": 0.23,
              "size": 14000.0,
              "notional": 3220.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1518,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 3900.0,
              "notional": 897.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-01T02:53:20.661500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-01T02:53:20.631400",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-01T02:16:35.799100",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-01T02:16:35.738800",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-01T02:16:35.708800",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-01T02:16:35.708500",
              "price": 0.23,
              "size": 26300.0,
              "notional": 6049.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.27040816326530615,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.45663265306122447,
              "ambiguous_pct": 0.20153061224489796,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20153061224489796,
              "retail_qty_pct": 0.07731622444541104,
              "mixed_qty_pct": 0.09408075975061621,
              "instit_qty_pct": 0.5686167899086559,
              "ambiguous_qty_pct": 0.2599862258953168,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2599862258953168,
              "retail_notional_pct": 0.07700888838060203,
              "mixed_notional_pct": 0.09400567548882928,
              "instit_notional_pct": 0.5685168264274694,
              "ambiguous_notional_pct": 0.2604686097030994,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2604686097030994,
              "run_retail_pct": 0.4666666666666667,
              "run_mixed_pct": 0.08571428571428572,
              "run_instit_pct": 0.22380952380952382,
              "run_unclear_pct": 0.22380952380952382,
              "avg_trade_size": 3223.223214285714,
              "avg_run_notional": 6016.683333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6904761904761905,
              "na_confidence_pct": 0.30952380952380953,
              "avg_feature_coverage": 0.8607142857142855,
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
              "instit_pct": 0.5,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.5,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9999000099990001,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 9.999000099990002e-05,
              "unclear_qty_pct": 9.999000099990002e-05,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9999000099990001,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 9.999000099990002e-05,
              "unclear_notional_pct": 9.999000099990002e-05,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 500.05,
              "avg_run_notional": 500.05,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.625,
              "observable_run_pct": 0.5,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.4666666666666667,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3333333333333333,
              "retail_qty_pct": 0.0006174225415356983,
              "mixed_qty_pct": 0.0033116299955096543,
              "instit_qty_pct": 0.9501010327795241,
              "ambiguous_qty_pct": 0.045969914683430625,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.045969914683430625,
              "retail_notional_pct": 0.0005952693593851218,
              "mixed_notional_pct": 0.003053990626410625,
              "instit_notional_pct": 0.9510668795021051,
              "ambiguous_notional_pct": 0.045283860512099115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.045283860512099115,
              "run_retail_pct": 0.14285714285714285,
              "run_mixed_pct": 0.07142857142857142,
              "run_instit_pct": 0.42857142857142855,
              "run_unclear_pct": 0.35714285714285715,
              "avg_trade_size": 43789.7,
              "avg_run_notional": 46917.53571428572,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5714285714285714,
              "na_confidence_pct": 0.42857142857142855,
              "avg_feature_coverage": 0.8392857142857142,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2591973244147157,
              "mixed_pct": 0.10869565217391304,
              "instit_pct": 0.31270903010033446,
              "ambiguous_pct": 0.3193979933110368,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3193979933110368,
              "retail_qty_pct": 0.04787156124571529,
              "mixed_qty_pct": 0.026924091055576714,
              "instit_qty_pct": 0.5450150880379692,
              "ambiguous_qty_pct": 0.38018925966073885,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.38018925966073885,
              "retail_notional_pct": 0.04729744397463512,
              "mixed_notional_pct": 0.026585365265359186,
              "instit_notional_pct": 0.5483771707815279,
              "ambiguous_notional_pct": 0.37774001997847784,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.37774001997847784,
              "run_retail_pct": 0.4355300859598854,
              "run_mixed_pct": 0.07736389684813753,
              "run_instit_pct": 0.19197707736389685,
              "run_unclear_pct": 0.29512893982808025,
              "avg_trade_size": 2426.524247491639,
              "avg_run_notional": 4157.769340974212,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0057306590257879654,
              "medium_confidence_pct": 0.2979942693409742,
              "low_confidence_pct": 0.3237822349570201,
              "na_confidence_pct": 0.37249283667621774,
              "avg_feature_coverage": 0.8414040114613179,
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
              "retail_pct": 0.2756370416407707,
              "mixed_pct": 0.18614045991298944,
              "instit_pct": 0.3430702299564947,
              "ambiguous_pct": 0.19515226848974518,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19515226848974518,
              "retail_qty_pct": 0.0676702853655379,
              "mixed_qty_pct": 0.1244844741173642,
              "instit_qty_pct": 0.5451351001461042,
              "ambiguous_qty_pct": 0.2627101403709937,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2627101403709937,
              "retail_notional_pct": 0.06790391249902283,
              "mixed_notional_pct": 0.12482659912298427,
              "instit_notional_pct": 0.544587071761598,
              "ambiguous_notional_pct": 0.26268241661639485,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.26268241661639485,
              "run_retail_pct": 0.5860857343640197,
              "run_mixed_pct": 0.16303583977512298,
              "run_instit_pct": 0.11806043569922699,
              "run_unclear_pct": 0.13281799016163034,
              "avg_trade_size": 1685.4717215661901,
              "avg_run_notional": 3811.5586788475052,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11033028812368235,
              "medium_confidence_pct": 0.4378074490513001,
              "low_confidence_pct": 0.15600843288826424,
              "na_confidence_pct": 0.29585382993675335,
              "avg_feature_coverage": 0.8681658468025297,
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
              "retail_pct": 0.1346153846153846,
              "mixed_pct": 0.09615384615384616,
              "instit_pct": 0.40384615384615385,
              "ambiguous_pct": 0.36538461538461536,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36538461538461536,
              "retail_qty_pct": 0.07505175983436853,
              "mixed_qty_pct": 0.09187370600414078,
              "instit_qty_pct": 0.5121635610766045,
              "ambiguous_qty_pct": 0.32091097308488614,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32091097308488614,
              "retail_notional_pct": 0.0749993180463131,
              "mixed_notional_pct": 0.0919533361823843,
              "instit_notional_pct": 0.5132656229094872,
              "ambiguous_notional_pct": 0.3197817228618154,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3197817228618154,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.17857142857142858,
              "run_instit_pct": 0.21428571428571427,
              "run_unclear_pct": 0.35714285714285715,
              "avg_trade_size": 1480.4750000000001,
              "avg_run_notional": 2749.453571428571,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4642857142857143,
              "na_confidence_pct": 0.5357142857142857,
              "avg_feature_coverage": 0.8071428571428573,
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
              "retail_pct": 0.22784810126582278,
              "mixed_pct": 0.0379746835443038,
              "instit_pct": 0.34177215189873417,
              "ambiguous_pct": 0.34177215189873417,
              "unobservable_pct": 0.05063291139240506,
              "unclear_pct": 0.3924050632911392,
              "retail_qty_pct": 0.10642439974042829,
              "mixed_qty_pct": 0.13692407527579495,
              "instit_qty_pct": 0.42569759896171316,
              "ambiguous_qty_pct": 0.3062946138870863,
              "unobservable_qty_pct": 0.02465931213497729,
              "unclear_qty_pct": 0.3309539260220636,
              "retail_notional_pct": 0.10645808367634033,
              "mixed_notional_pct": 0.13558762743361294,
              "instit_notional_pct": 0.42533736258010735,
              "ambiguous_notional_pct": 0.3084414456659546,
              "unobservable_notional_pct": 0.024175480643984785,
              "unclear_notional_pct": 0.3326169263099394,
              "run_retail_pct": 0.3103448275862069,
              "run_mixed_pct": 0.05172413793103448,
              "run_instit_pct": 0.25862068965517243,
              "run_unclear_pct": 0.37931034482758624,
              "avg_trade_size": 1457.6962025316457,
              "avg_run_notional": 1985.4827586206898,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5689655172413793,
              "na_confidence_pct": 0.43103448275862066,
              "avg_feature_coverage": 0.8120689655172414,
              "observable_run_pct": 0.9655172413793104,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28051391862955033,
              "mixed_pct": 0.07922912205567452,
              "instit_pct": 0.29764453961456105,
              "ambiguous_pct": 0.32119914346895073,
              "unobservable_pct": 0.021413276231263382,
              "unclear_pct": 0.3426124197002141,
              "retail_qty_pct": 0.07931515929315865,
              "mixed_qty_pct": 0.045411595470122836,
              "instit_qty_pct": 0.4057638879095153,
              "ambiguous_qty_pct": 0.45180306598784326,
              "unobservable_qty_pct": 0.017706291339360008,
              "unclear_qty_pct": 0.4695093573272033,
              "retail_notional_pct": 0.078573817032632,
              "mixed_notional_pct": 0.04641641117096634,
              "instit_notional_pct": 0.4064434847209452,
              "ambiguous_notional_pct": 0.45078207154014105,
              "unobservable_notional_pct": 0.017784215535315402,
              "unclear_notional_pct": 0.46856628707545644,
              "run_retail_pct": 0.4749034749034749,
              "run_mixed_pct": 0.05405405405405406,
              "run_instit_pct": 0.16602316602316602,
              "run_unclear_pct": 0.305019305019305,
              "avg_trade_size": 2122.855460385439,
              "avg_run_notional": 3827.6969111969115,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.12355212355212356,
              "medium_confidence_pct": 0.13513513513513514,
              "low_confidence_pct": 0.38223938223938225,
              "na_confidence_pct": 0.3590733590733591,
              "avg_feature_coverage": 0.8252895752895751,
              "observable_run_pct": 0.9806949806949807,
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
          "n_trades": 1269,
          "n_runs": 649,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-04",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.26792750197005516,
            "mixed_pct": 0.13002364066193853,
            "instit_pct": 0.3908589440504334,
            "ambiguous_pct": 0.2111899133175729,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2111899133175729,
            "retail_qty_pct": 0.07298332490569766,
            "mixed_qty_pct": 0.15701557078342138,
            "instit_qty_pct": 0.5042283482415302,
            "ambiguous_qty_pct": 0.26577275606935075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26577275606935075,
            "retail_notional_pct": 0.07249677830283226,
            "mixed_notional_pct": 0.15821022900453133,
            "instit_notional_pct": 0.5052972051698675,
            "ambiguous_notional_pct": 0.26399578752276887,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26399578752276887
          },
          "run_composition": {
            "retail_pct": 0.4930662557781202,
            "mixed_pct": 0.12788906009244994,
            "instit_pct": 0.1941448382126348,
            "ambiguous_pct": 0.18489984591679506,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18489984591679506,
            "retail_notional_pct": 0.07249677830283226,
            "mixed_notional_pct": 0.15821022900453133,
            "instit_notional_pct": 0.5052972051698675,
            "unclear_notional_pct": 0.26399578752276887
          },
          "counts": {
            "trades": {
              "retail": 340,
              "mixed": 165,
              "institutional": 496,
              "ambiguous": 268,
              "unobservable": 0,
              "unclear": 268
            },
            "runs": {
              "retail": 320,
              "mixed": 83,
              "institutional": 126,
              "ambiguous": 120,
              "unobservable": 0,
              "unclear": 120
            }
          },
          "confidence": {
            "high": 0.04160246533127889,
            "medium": 0.19722650231124808,
            "low": 0.44838212634822805,
            "na": 0.31278890600924497
          },
          "confidence_counts": {
            "high": 27,
            "medium": 128,
            "low": 291,
            "na": 203
          },
          "trade_confidence": {
            "high": 0.02127659574468085,
            "medium": 0.1607565011820331,
            "low": 0.47675334909377465,
            "na": 0.3412135539795114
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 204,
            "low": 605,
            "na": 433
          },
          "observability": {
            "avg_feature_coverage": 0.8599383667180278,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.18489984591679506,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4930662557781202,
          "dominance_gap": 0.2989214175654854,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 670,
              "SINGLE_FILL": 597,
              "WALK_BOOK": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 994,
              "PERSISTENT_POSITIVE_IMPACT": 202,
              "MOMENTUM_REACTIVE": 70,
              "UNOBSERVABLE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 647,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 291,
              "NA": 203,
              "MEDIUM": 128,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 3141.255319148936,
            "median": 1395.0
          },
          "run_size": {
            "avg": 6142.146379044684,
            "median": 2250.0,
            "avg_length": 1.2465331278890601
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-01T08:32:46.398500",
              "price": 0.23,
              "size": 8000.0,
              "notional": 1840.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1524,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-49",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-48",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-47",
              "timestamp": "2026-04-01T07:55:19.246000",
              "price": 0.23,
              "size": 400.0,
              "notional": 92.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1523,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-46",
              "timestamp": "2026-04-01T07:54:35.262300",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-45",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 48600.0,
              "notional": 11178.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-44",
              "timestamp": "2026-04-01T07:54:35.111700",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-43",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11000.0,
              "notional": 2530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-42",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 13000.0,
              "notional": 2990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-41",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 24000.0,
              "notional": 5520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-40",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 1700.0,
              "notional": 391.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-39",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-38",
              "timestamp": "2026-04-01T07:54:35.111600",
              "price": 0.23,
              "size": 11700.0,
              "notional": 2691.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1522,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-36",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 7300.0,
              "notional": 1679.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-35",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 12800.0,
              "notional": 2944.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-34",
              "timestamp": "2026-04-01T03:45:53.395400",
              "price": 0.23,
              "size": 9900.0,
              "notional": 2277.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1521,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-33",
              "timestamp": "2026-04-01T03:17:17.338500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1520,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-32",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-31",
              "timestamp": "2026-04-01T03:05:46.594300",
              "price": 0.23,
              "size": 10000.0,
              "notional": 2300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1519,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-30",
              "timestamp": "2026-04-01T03:04:49.104100",
              "price": 0.23,
              "size": 14000.0,
              "notional": 3220.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1518,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-29",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 3900.0,
              "notional": 897.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-01T02:55:42.699200",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1517,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-01T02:55:35.860600",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1516,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-01T02:53:20.661500",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-01T02:53:20.631400",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1515,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-01T02:16:35.799100",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-01T02:16:35.738800",
              "price": 0.23,
              "size": 100.0,
              "notional": 23.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-01T02:16:35.708800",
              "price": 0.23,
              "size": 600.0,
              "notional": 138.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-01T02:16:35.708500",
              "price": 0.23,
              "size": 26300.0,
              "notional": 6049.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1514,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.26792750197005516,
              "mixed_pct": 0.13002364066193853,
              "instit_pct": 0.3908589440504334,
              "ambiguous_pct": 0.2111899133175729,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2111899133175729,
              "retail_qty_pct": 0.07298332490569766,
              "mixed_qty_pct": 0.15701557078342138,
              "instit_qty_pct": 0.5042283482415302,
              "ambiguous_qty_pct": 0.26577275606935075,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.26577275606935075,
              "retail_notional_pct": 0.07249677830283226,
              "mixed_notional_pct": 0.15821022900453133,
              "instit_notional_pct": 0.5052972051698675,
              "ambiguous_notional_pct": 0.26399578752276887,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.26399578752276887,
              "run_retail_pct": 0.4930662557781202,
              "run_mixed_pct": 0.12788906009244994,
              "run_instit_pct": 0.1941448382126348,
              "run_unclear_pct": 0.18489984591679506,
              "avg_trade_size": 3141.255319148936,
              "avg_run_notional": 6142.146379044684,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.04160246533127889,
              "medium_confidence_pct": 0.19722650231124808,
              "low_confidence_pct": 0.44838212634822805,
              "na_confidence_pct": 0.31278890600924497,
              "avg_feature_coverage": 0.8599383667180278,
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
              "retail_pct": 0.07142857142857142,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.47619047619047616,
              "ambiguous_pct": 0.38095238095238093,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.38095238095238093,
              "retail_qty_pct": 0.0023291139240506327,
              "mixed_qty_pct": 0.008050632911392405,
              "instit_qty_pct": 0.9152911392405063,
              "ambiguous_qty_pct": 0.07432911392405063,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07432911392405063,
              "retail_notional_pct": 0.002380649163383603,
              "mixed_notional_pct": 0.008005335064216591,
              "instit_notional_pct": 0.9148683419535154,
              "ambiguous_notional_pct": 0.07474567381888443,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07474567381888443,
              "run_retail_pct": 0.09090909090909091,
              "run_mixed_pct": 0.06060606060606061,
              "run_instit_pct": 0.42424242424242425,
              "run_unclear_pct": 0.42424242424242425,
              "avg_trade_size": 17387.214285714286,
              "avg_run_notional": 22129.18181818182,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5151515151515151,
              "na_confidence_pct": 0.48484848484848486,
              "avg_feature_coverage": 0.8318181818181819,
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
              "instit_pct": 0.2,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.8,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.909008271975275,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.09099172802472502,
              "unclear_qty_pct": 0.09099172802472502,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.909008271975275,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.09099172802472502,
              "unclear_notional_pct": 0.09099172802472502,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.01999999999998,
              "avg_run_notional": 366.7,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.31647940074906367,
              "mixed_pct": 0.18039950062421972,
              "instit_pct": 0.32256554307116103,
              "ambiguous_pct": 0.17790262172284643,
              "unobservable_pct": 0.0026529338327091136,
              "unclear_pct": 0.18055555555555555,
              "retail_qty_pct": 0.06569289489136818,
              "mixed_qty_pct": 0.13568885789782736,
              "instit_qty_pct": 0.5368100411039343,
              "ambiguous_qty_pct": 0.25772533763945976,
              "unobservable_qty_pct": 0.004082868467410452,
              "unclear_qty_pct": 0.2618082061068702,
              "retail_notional_pct": 0.06579888472157362,
              "mixed_notional_pct": 0.1363000653199849,
              "instit_notional_pct": 0.5362020114867027,
              "ambiguous_notional_pct": 0.2576123430555653,
              "unobservable_notional_pct": 0.004086695416173529,
              "unclear_notional_pct": 0.2616990384717388,
              "run_retail_pct": 0.6274384393987847,
              "run_mixed_pct": 0.1509433962264151,
              "run_instit_pct": 0.10809082187400064,
              "run_unclear_pct": 0.11352734250079949,
              "avg_trade_size": 1743.1951466916355,
              "avg_run_notional": 3572.2400063959067,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.23121202430444515,
              "medium_confidence_pct": 0.3869523504956828,
              "low_confidence_pct": 0.1173648864726575,
              "na_confidence_pct": 0.2644707387272146,
              "avg_feature_coverage": 0.8662615925807481,
              "observable_run_pct": 0.9993604093380236,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24190064794816415,
              "mixed_pct": 0.09287257019438445,
              "instit_pct": 0.2991360691144708,
              "ambiguous_pct": 0.3650107991360691,
              "unobservable_pct": 0.0010799136069114472,
              "unclear_pct": 0.36609071274298055,
              "retail_qty_pct": 0.06005899285688902,
              "mixed_qty_pct": 0.032037385834606774,
              "instit_qty_pct": 0.4940651764455027,
              "ambiguous_qty_pct": 0.4125946195671488,
              "unobservable_qty_pct": 0.001243825295852731,
              "unclear_qty_pct": 0.41383844486300153,
              "retail_notional_pct": 0.05653219638841524,
              "mixed_notional_pct": 0.03047596723241807,
              "instit_notional_pct": 0.5007513303906417,
              "ambiguous_notional_pct": 0.4112668547690896,
              "unobservable_notional_pct": 0.0009736512194354464,
              "unclear_notional_pct": 0.412240505988525,
              "run_retail_pct": 0.4079696394686907,
              "run_mixed_pct": 0.07210626185958255,
              "run_instit_pct": 0.18785578747628084,
              "run_unclear_pct": 0.33206831119544594,
              "avg_trade_size": 2368.009719222462,
              "avg_run_notional": 4160.867172675522,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.003795066413662239,
              "medium_confidence_pct": 0.24667931688804554,
              "low_confidence_pct": 0.34535104364326374,
              "na_confidence_pct": 0.40417457305502846,
              "avg_feature_coverage": 0.8366223908918404,
              "observable_run_pct": 0.9981024667931688,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S69",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23578595317725753,
              "mixed_pct": 0.07441471571906355,
              "instit_pct": 0.33695652173913043,
              "ambiguous_pct": 0.33695652173913043,
              "unobservable_pct": 0.01588628762541806,
              "unclear_pct": 0.3528428093645485,
              "retail_qty_pct": 0.08093435924550003,
              "mixed_qty_pct": 0.055437288104149565,
              "instit_qty_pct": 0.476798708797707,
              "ambiguous_qty_pct": 0.3688506722692973,
              "unobservable_qty_pct": 0.017978971583346087,
              "unclear_qty_pct": 0.3868296438526434,
              "retail_notional_pct": 0.0811792672767216,
              "mixed_notional_pct": 0.05603358206816571,
              "instit_notional_pct": 0.47822861863393146,
              "ambiguous_notional_pct": 0.367212667034978,
              "unobservable_notional_pct": 0.01734586498620322,
              "unclear_notional_pct": 0.38455853202118123,
              "run_retail_pct": 0.40282131661442006,
              "run_mixed_pct": 0.06426332288401254,
              "run_instit_pct": 0.19278996865203762,
              "run_unclear_pct": 0.3401253918495298,
              "avg_trade_size": 2582.0636287625416,
              "avg_run_notional": 4840.357523510972,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.06426332288401254,
              "medium_confidence_pct": 0.19278996865203762,
              "low_confidence_pct": 0.3385579937304075,
              "na_confidence_pct": 0.4043887147335423,
              "avg_feature_coverage": 0.8253918495297804,
              "observable_run_pct": 0.987460815047022,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5949656750572082,
              "mixed_pct": 0.13501144164759726,
              "instit_pct": 0.13501144164759726,
              "ambiguous_pct": 0.13501144164759726,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13501144164759726,
              "retail_qty_pct": 0.09109700280525616,
              "mixed_qty_pct": 0.08652000590580244,
              "instit_qty_pct": 0.45644470692455336,
              "ambiguous_qty_pct": 0.365938284364388,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.365938284364388,
              "retail_notional_pct": 0.09168527748124182,
              "mixed_notional_pct": 0.08787833803060832,
              "instit_notional_pct": 0.45733702711612056,
              "ambiguous_notional_pct": 0.36309935737202925,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36309935737202925,
              "run_retail_pct": 0.7041095890410959,
              "run_mixed_pct": 0.13972602739726028,
              "run_instit_pct": 0.052054794520547946,
              "run_unclear_pct": 0.10410958904109589,
              "avg_trade_size": 628.9249427917621,
              "avg_run_notional": 752.9868493150684,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5397260273972603,
              "medium_confidence_pct": 0.12876712328767123,
              "low_confidence_pct": 0.08767123287671233,
              "na_confidence_pct": 0.24383561643835616,
              "avg_feature_coverage": 0.8442465753424655,
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
              "retail_pct": 0.18716577540106952,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.29411764705882354,
              "ambiguous_pct": 0.42780748663101603,
              "unobservable_pct": 0.03208556149732621,
              "unclear_pct": 0.45989304812834225,
              "retail_qty_pct": 0.0811965811965812,
              "mixed_qty_pct": 0.07817998994469583,
              "instit_qty_pct": 0.39567621920563095,
              "ambiguous_qty_pct": 0.4225741578682755,
              "unobservable_qty_pct": 0.02237305178481649,
              "unclear_qty_pct": 0.444947209653092,
              "retail_notional_pct": 0.08048265757247333,
              "mixed_notional_pct": 0.075500662676833,
              "instit_notional_pct": 0.3969354772067774,
              "ambiguous_notional_pct": 0.4245342986908557,
              "unobservable_notional_pct": 0.02254690385306055,
              "unclear_notional_pct": 0.44708120254391626,
              "run_retail_pct": 0.2631578947368421,
              "run_mixed_pct": 0.05263157894736842,
              "run_instit_pct": 0.21052631578947367,
              "run_unclear_pct": 0.47368421052631576,
              "avg_trade_size": 1682.5294117647059,
              "avg_run_notional": 2365.6616541353383,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47368421052631576,
              "na_confidence_pct": 0.5263157894736842,
              "avg_feature_coverage": 0.8214285714285715,
              "observable_run_pct": 0.9774436090225564,
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
      "n_trades": 1269,
      "n_runs": 649,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-04",
      "last_trade_date": "2026-04-01",
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
        "retail_pct": 0.26792750197005516,
        "mixed_pct": 0.13002364066193853,
        "instit_pct": 0.3908589440504334,
        "ambiguous_pct": 0.2111899133175729,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.2111899133175729,
        "retail_qty_pct": 0.07298332490569766,
        "mixed_qty_pct": 0.15701557078342138,
        "instit_qty_pct": 0.5042283482415302,
        "ambiguous_qty_pct": 0.26577275606935075,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.26577275606935075,
        "retail_notional_pct": 0.07249677830283226,
        "mixed_notional_pct": 0.15821022900453133,
        "instit_notional_pct": 0.5052972051698675,
        "ambiguous_notional_pct": 0.26399578752276887,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.26399578752276887
      },
      "run_composition": {
        "retail_pct": 0.4930662557781202,
        "mixed_pct": 0.12788906009244994,
        "instit_pct": 0.1941448382126348,
        "ambiguous_pct": 0.18489984591679506,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.18489984591679506
      },
      "trade_size": {
        "avg": 3141.255319148936,
        "median": 1395.0
      },
      "run_size": {
        "avg": 6142.146379044684,
        "median": 2250.0,
        "avg_length": 1.2465331278890601
      },
      "confidence": {
        "high": 0.04160246533127889,
        "medium": 0.19722650231124808,
        "low": 0.44838212634822805,
        "na": 0.31278890600924497
      },
      "confidence_counts": {
        "high": 27,
        "medium": 128,
        "low": 291,
        "na": 203
      },
      "trade_confidence": {
        "high": 0.02127659574468085,
        "medium": 0.1607565011820331,
        "low": 0.47675334909377465,
        "na": 0.3412135539795114
      },
      "trade_confidence_counts": {
        "high": 27,
        "medium": 204,
        "low": 605,
        "na": 433
      },
      "counts": {
        "trades": {
          "retail": 340,
          "mixed": 165,
          "institutional": 496,
          "ambiguous": 268,
          "unobservable": 0,
          "unclear": 268
        },
        "runs": {
          "retail": 320,
          "mixed": 83,
          "institutional": 126,
          "ambiguous": 120,
          "unobservable": 0,
          "unclear": 120
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8599383667180278,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.18489984591679506,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.4930662557781202,
      "dominance_gap": 0.2989214175654854,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1551,
            "n_runs": 764,
            "retail_pct": 0.2978723404255319,
            "mixed_pct": 0.15860735009671179,
            "instit_pct": 0.3520309477756286,
            "ambiguous_pct": 0.19148936170212766,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19148936170212766,
            "avg_trade_size": 4037.716956802063,
            "avg_run_notional": 8196.988219895287,
            "retail_qty_pct": 0.08204026661274384,
            "mixed_qty_pct": 0.18223370201790898,
            "instit_qty_pct": 0.45190249634685603,
            "ambiguous_qty_pct": 0.28382353502249114,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.28382353502249114,
            "retail_notional_pct": 0.08168959388256988,
            "mixed_notional_pct": 0.1837088516900362,
            "instit_notional_pct": 0.4538614696784782,
            "ambiguous_notional_pct": 0.2807400847489157,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2807400847489157,
            "run_retail_pct": 0.5798429319371727,
            "run_mixed_pct": 0.13612565445026178,
            "run_instit_pct": 0.13612565445026178,
            "run_ambiguous_pct": 0.14790575916230367,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14790575916230367,
            "avg_feature_coverage": 0.8446989528795811,
            "high_confidence_pct": 0.06282722513089005,
            "medium_confidence_pct": 0.4175392670157068,
            "low_confidence_pct": 0.2356020942408377,
            "na_confidence_pct": 0.28403141361256545,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 49,
            "n_runs": 16,
            "retail_pct": 0.20408163265306123,
            "mixed_pct": 0.0,
            "instit_pct": 0.5714285714285714,
            "ambiguous_pct": 0.22448979591836735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22448979591836735,
            "avg_trade_size": 2962.7755102040815,
            "avg_run_notional": 9073.5,
            "retail_qty_pct": 0.06638149556400506,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7118187579214195,
            "ambiguous_qty_pct": 0.2217997465145754,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2217997465145754,
            "retail_notional_pct": 0.06638149556400506,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7118187579214195,
            "ambiguous_notional_pct": 0.2217997465145754,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2217997465145754,
            "run_retail_pct": 0.375,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_ambiguous_pct": 0.375,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.375,
            "avg_feature_coverage": 0.8687500000000001,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.625,
            "na_confidence_pct": 0.375,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.26792750197005516,
          "mixed_pct": 0.13002364066193853,
          "instit_pct": 0.3908589440504334,
          "ambiguous_pct": 0.2111899133175729,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.2111899133175729,
          "retail_qty_pct": 0.07298332490569766,
          "mixed_qty_pct": 0.15701557078342138,
          "instit_qty_pct": 0.5042283482415302,
          "ambiguous_qty_pct": 0.26577275606935075,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.26577275606935075,
          "retail_notional_pct": 0.07249677830283226,
          "mixed_notional_pct": 0.15821022900453133,
          "instit_notional_pct": 0.5052972051698675,
          "ambiguous_notional_pct": 0.26399578752276887,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.26399578752276887,
          "run_retail_pct": 0.4930662557781202,
          "run_mixed_pct": 0.12788906009244994,
          "run_instit_pct": 0.1941448382126348,
          "run_unclear_pct": 0.18489984591679506,
          "avg_trade_size": 3141.255319148936,
          "avg_run_notional": 6142.146379044684,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.04160246533127889,
          "medium_confidence_pct": 0.19722650231124808,
          "low_confidence_pct": 0.44838212634822805,
          "na_confidence_pct": 0.31278890600924497,
          "avg_feature_coverage": 0.8599383667180278,
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
          "retail_pct": 0.07142857142857142,
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.47619047619047616,
          "ambiguous_pct": 0.38095238095238093,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.38095238095238093,
          "retail_qty_pct": 0.0023291139240506327,
          "mixed_qty_pct": 0.008050632911392405,
          "instit_qty_pct": 0.9152911392405063,
          "ambiguous_qty_pct": 0.07432911392405063,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07432911392405063,
          "retail_notional_pct": 0.002380649163383603,
          "mixed_notional_pct": 0.008005335064216591,
          "instit_notional_pct": 0.9148683419535154,
          "ambiguous_notional_pct": 0.07474567381888443,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07474567381888443,
          "run_retail_pct": 0.09090909090909091,
          "run_mixed_pct": 0.06060606060606061,
          "run_instit_pct": 0.42424242424242425,
          "run_unclear_pct": 0.42424242424242425,
          "avg_trade_size": 17387.214285714286,
          "avg_run_notional": 22129.18181818182,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5151515151515151,
          "na_confidence_pct": 0.48484848484848486,
          "avg_feature_coverage": 0.8318181818181819,
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
          "instit_pct": 0.2,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.8,
          "unclear_pct": 0.8,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.909008271975275,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.09099172802472502,
          "unclear_qty_pct": 0.09099172802472502,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.909008271975275,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.09099172802472502,
          "unclear_notional_pct": 0.09099172802472502,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.01999999999998,
          "avg_run_notional": 366.7,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.31647940074906367,
          "mixed_pct": 0.18039950062421972,
          "instit_pct": 0.32256554307116103,
          "ambiguous_pct": 0.17790262172284643,
          "unobservable_pct": 0.0026529338327091136,
          "unclear_pct": 0.18055555555555555,
          "retail_qty_pct": 0.06569289489136818,
          "mixed_qty_pct": 0.13568885789782736,
          "instit_qty_pct": 0.5368100411039343,
          "ambiguous_qty_pct": 0.25772533763945976,
          "unobservable_qty_pct": 0.004082868467410452,
          "unclear_qty_pct": 0.2618082061068702,
          "retail_notional_pct": 0.06579888472157362,
          "mixed_notional_pct": 0.1363000653199849,
          "instit_notional_pct": 0.5362020114867027,
          "ambiguous_notional_pct": 0.2576123430555653,
          "unobservable_notional_pct": 0.004086695416173529,
          "unclear_notional_pct": 0.2616990384717388,
          "run_retail_pct": 0.6274384393987847,
          "run_mixed_pct": 0.1509433962264151,
          "run_instit_pct": 0.10809082187400064,
          "run_unclear_pct": 0.11352734250079949,
          "avg_trade_size": 1743.1951466916355,
          "avg_run_notional": 3572.2400063959067,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.23121202430444515,
          "medium_confidence_pct": 0.3869523504956828,
          "low_confidence_pct": 0.1173648864726575,
          "na_confidence_pct": 0.2644707387272146,
          "avg_feature_coverage": 0.8662615925807481,
          "observable_run_pct": 0.9993604093380236,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24190064794816415,
          "mixed_pct": 0.09287257019438445,
          "instit_pct": 0.2991360691144708,
          "ambiguous_pct": 0.3650107991360691,
          "unobservable_pct": 0.0010799136069114472,
          "unclear_pct": 0.36609071274298055,
          "retail_qty_pct": 0.06005899285688902,
          "mixed_qty_pct": 0.032037385834606774,
          "instit_qty_pct": 0.4940651764455027,
          "ambiguous_qty_pct": 0.4125946195671488,
          "unobservable_qty_pct": 0.001243825295852731,
          "unclear_qty_pct": 0.41383844486300153,
          "retail_notional_pct": 0.05653219638841524,
          "mixed_notional_pct": 0.03047596723241807,
          "instit_notional_pct": 0.5007513303906417,
          "ambiguous_notional_pct": 0.4112668547690896,
          "unobservable_notional_pct": 0.0009736512194354464,
          "unclear_notional_pct": 0.412240505988525,
          "run_retail_pct": 0.4079696394686907,
          "run_mixed_pct": 0.07210626185958255,
          "run_instit_pct": 0.18785578747628084,
          "run_unclear_pct": 0.33206831119544594,
          "avg_trade_size": 2368.009719222462,
          "avg_run_notional": 4160.867172675522,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.003795066413662239,
          "medium_confidence_pct": 0.24667931688804554,
          "low_confidence_pct": 0.34535104364326374,
          "na_confidence_pct": 0.40417457305502846,
          "avg_feature_coverage": 0.8366223908918404,
          "observable_run_pct": 0.9981024667931688,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S69",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23578595317725753,
          "mixed_pct": 0.07441471571906355,
          "instit_pct": 0.33695652173913043,
          "ambiguous_pct": 0.33695652173913043,
          "unobservable_pct": 0.01588628762541806,
          "unclear_pct": 0.3528428093645485,
          "retail_qty_pct": 0.08093435924550003,
          "mixed_qty_pct": 0.055437288104149565,
          "instit_qty_pct": 0.476798708797707,
          "ambiguous_qty_pct": 0.3688506722692973,
          "unobservable_qty_pct": 0.017978971583346087,
          "unclear_qty_pct": 0.3868296438526434,
          "retail_notional_pct": 0.0811792672767216,
          "mixed_notional_pct": 0.05603358206816571,
          "instit_notional_pct": 0.47822861863393146,
          "ambiguous_notional_pct": 0.367212667034978,
          "unobservable_notional_pct": 0.01734586498620322,
          "unclear_notional_pct": 0.38455853202118123,
          "run_retail_pct": 0.40282131661442006,
          "run_mixed_pct": 0.06426332288401254,
          "run_instit_pct": 0.19278996865203762,
          "run_unclear_pct": 0.3401253918495298,
          "avg_trade_size": 2582.0636287625416,
          "avg_run_notional": 4840.357523510972,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.06426332288401254,
          "medium_confidence_pct": 0.19278996865203762,
          "low_confidence_pct": 0.3385579937304075,
          "na_confidence_pct": 0.4043887147335423,
          "avg_feature_coverage": 0.8253918495297804,
          "observable_run_pct": 0.987460815047022,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5949656750572082,
          "mixed_pct": 0.13501144164759726,
          "instit_pct": 0.13501144164759726,
          "ambiguous_pct": 0.13501144164759726,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13501144164759726,
          "retail_qty_pct": 0.09109700280525616,
          "mixed_qty_pct": 0.08652000590580244,
          "instit_qty_pct": 0.45644470692455336,
          "ambiguous_qty_pct": 0.365938284364388,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.365938284364388,
          "retail_notional_pct": 0.09168527748124182,
          "mixed_notional_pct": 0.08787833803060832,
          "instit_notional_pct": 0.45733702711612056,
          "ambiguous_notional_pct": 0.36309935737202925,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.36309935737202925,
          "run_retail_pct": 0.7041095890410959,
          "run_mixed_pct": 0.13972602739726028,
          "run_instit_pct": 0.052054794520547946,
          "run_unclear_pct": 0.10410958904109589,
          "avg_trade_size": 628.9249427917621,
          "avg_run_notional": 752.9868493150684,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5397260273972603,
          "medium_confidence_pct": 0.12876712328767123,
          "low_confidence_pct": 0.08767123287671233,
          "na_confidence_pct": 0.24383561643835616,
          "avg_feature_coverage": 0.8442465753424655,
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
          "retail_pct": 0.18716577540106952,
          "mixed_pct": 0.058823529411764705,
          "instit_pct": 0.29411764705882354,
          "ambiguous_pct": 0.42780748663101603,
          "unobservable_pct": 0.03208556149732621,
          "unclear_pct": 0.45989304812834225,
          "retail_qty_pct": 0.0811965811965812,
          "mixed_qty_pct": 0.07817998994469583,
          "instit_qty_pct": 0.39567621920563095,
          "ambiguous_qty_pct": 0.4225741578682755,
          "unobservable_qty_pct": 0.02237305178481649,
          "unclear_qty_pct": 0.444947209653092,
          "retail_notional_pct": 0.08048265757247333,
          "mixed_notional_pct": 0.075500662676833,
          "instit_notional_pct": 0.3969354772067774,
          "ambiguous_notional_pct": 0.4245342986908557,
          "unobservable_notional_pct": 0.02254690385306055,
          "unclear_notional_pct": 0.44708120254391626,
          "run_retail_pct": 0.2631578947368421,
          "run_mixed_pct": 0.05263157894736842,
          "run_instit_pct": 0.21052631578947367,
          "run_unclear_pct": 0.47368421052631576,
          "avg_trade_size": 1682.5294117647059,
          "avg_run_notional": 2365.6616541353383,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.47368421052631576,
          "na_confidence_pct": 0.5263157894736842,
          "avg_feature_coverage": 0.8214285714285715,
          "observable_run_pct": 0.9774436090225564,
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
            "retail_pct": 0.20408163265306123,
            "mixed_pct": 0.0,
            "instit_pct": 0.5714285714285714,
            "ambiguous_pct": 0.22448979591836735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22448979591836735,
            "retail_qty_pct": 0.06638149556400506,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7118187579214195,
            "ambiguous_qty_pct": 0.2217997465145754,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2217997465145754,
            "retail_notional_pct": 0.06638149556400506,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7118187579214195,
            "ambiguous_notional_pct": 0.2217997465145754,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2217997465145754,
            "run_retail_pct": 0.375,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.375,
            "avg_trade_size": 2962.7755102040815,
            "avg_run_notional": 9073.5,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.625,
            "na_confidence_pct": 0.375,
            "avg_feature_coverage": 0.8687500000000001,
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
            "avg_trade_size": 3550.0,
            "avg_run_notional": 3550.0,
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
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.015693659761456372,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9416195856873822,
            "ambiguous_qty_pct": 0.04268675455116133,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.04268675455116133,
            "retail_notional_pct": 0.016196436072132874,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9397492578116657,
            "ambiguous_notional_pct": 0.04405430611620142,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.04405430611620142,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.25,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 17557.875,
            "avg_run_notional": 17557.875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.7750000000000001,
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
            "instit_pct": 0.5,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.5,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.2,
            "unclear_qty_pct": 0.2,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.2,
            "unclear_notional_pct": 0.2,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 925.0,
            "avg_run_notional": 925.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.7000000000000001,
            "observable_run_pct": 0.5,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24759615384615385,
            "mixed_pct": 0.20192307692307693,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.17548076923076922,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17548076923076922,
            "retail_qty_pct": 0.06033376123234917,
            "mixed_qty_pct": 0.17736414206247325,
            "instit_qty_pct": 0.5485665382969619,
            "ambiguous_qty_pct": 0.21373555840821565,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21373555840821565,
            "retail_notional_pct": 0.060510535244774094,
            "mixed_notional_pct": 0.17763370422586436,
            "instit_notional_pct": 0.5493677141652993,
            "ambiguous_notional_pct": 0.2124880463640623,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2124880463640623,
            "run_retail_pct": 0.6258064516129033,
            "run_mixed_pct": 0.16129032258064516,
            "run_instit_pct": 0.0967741935483871,
            "run_unclear_pct": 0.11612903225806452,
            "avg_trade_size": 1123.6322115384614,
            "avg_run_notional": 3015.6838709677418,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.535483870967742,
            "low_confidence_pct": 0.1870967741935484,
            "na_confidence_pct": 0.27741935483870966,
            "avg_feature_coverage": 0.8638709677419354,
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
            "retail_pct": 0.18181818181818182,
            "mixed_pct": 0.0,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.45454545454545453,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.45454545454545453,
            "retail_qty_pct": 0.1420534458509142,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4641350210970464,
            "ambiguous_qty_pct": 0.39381153305203936,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.39381153305203936,
            "retail_notional_pct": 0.14313996382333252,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.46531170329435556,
            "ambiguous_notional_pct": 0.39154833288231183,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.39154833288231183,
            "run_retail_pct": 0.4,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.4,
            "avg_trade_size": 1276.5636363636363,
            "avg_run_notional": 2808.44,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6,
            "na_confidence_pct": 0.4,
            "avg_feature_coverage": 0.79,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3,
            "mixed_pct": 0.03333333333333333,
            "instit_pct": 0.2,
            "ambiguous_pct": 0.43333333333333335,
            "unobservable_pct": 0.03333333333333333,
            "unclear_pct": 0.4666666666666667,
            "retail_qty_pct": 0.04466948741069571,
            "mixed_qty_pct": 0.018935978358881875,
            "instit_qty_pct": 0.34036207255323575,
            "ambiguous_qty_pct": 0.5297912187001457,
            "unobservable_qty_pct": 0.066241242977041,
            "unclear_qty_pct": 0.5960324616771867,
            "retail_notional_pct": 0.04351438152842365,
            "mixed_notional_pct": 0.018254764292878634,
            "instit_notional_pct": 0.34135841869041467,
            "ambiguous_notional_pct": 0.5301115467614966,
            "unobservable_notional_pct": 0.06676088872678641,
            "unclear_notional_pct": 0.5968724354882831,
            "run_retail_pct": 0.391304347826087,
            "run_mixed_pct": 0.043478260869565216,
            "run_instit_pct": 0.13043478260869565,
            "run_unclear_pct": 0.4347826086956522,
            "avg_trade_size": 3290.1,
            "avg_run_notional": 4291.434782608696,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5217391304347826,
            "na_confidence_pct": 0.4782608695652174,
            "avg_feature_coverage": 0.7847826086956522,
            "observable_run_pct": 0.9565217391304348,
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
            "retail_pct": 0.28350515463917525,
            "mixed_pct": 0.08247422680412371,
            "instit_pct": 0.4845360824742268,
            "ambiguous_pct": 0.14948453608247422,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14948453608247422,
            "retail_qty_pct": 0.11423860106607354,
            "mixed_qty_pct": 0.11362503355447329,
            "instit_qty_pct": 0.5639835870690647,
            "ambiguous_qty_pct": 0.20815277831038848,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20815277831038848,
            "retail_notional_pct": 0.11401889620560149,
            "mixed_notional_pct": 0.11324671168971151,
            "instit_notional_pct": 0.564992337100224,
            "ambiguous_notional_pct": 0.207742055004463,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.207742055004463,
            "run_retail_pct": 0.46078431372549017,
            "run_mixed_pct": 0.10784313725490197,
            "run_instit_pct": 0.24509803921568626,
            "run_unclear_pct": 0.18627450980392157,
            "avg_trade_size": 3060.6701030927834,
            "avg_run_notional": 5821.274509803921,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7058823529411765,
            "na_confidence_pct": 0.29411764705882354,
            "avg_feature_coverage": 0.8573529411764703,
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
            "retail_pct": 0.2964509394572025,
            "mixed_pct": 0.20250521920668058,
            "instit_pct": 0.32620041753653445,
            "ambiguous_pct": 0.17484342379958245,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17484342379958245,
            "retail_qty_pct": 0.06350546975546975,
            "mixed_qty_pct": 0.10983751608751609,
            "instit_qty_pct": 0.5750482625482626,
            "ambiguous_qty_pct": 0.2516087516087516,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2516087516087516,
            "retail_notional_pct": 0.06359826242827255,
            "mixed_notional_pct": 0.11012050802374278,
            "instit_notional_pct": 0.5750889805532002,
            "ambiguous_notional_pct": 0.2511922489947844,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2511922489947844,
            "run_retail_pct": 0.6208476517754868,
            "run_mixed_pct": 0.16838487972508592,
            "run_instit_pct": 0.10423825887743414,
            "run_unclear_pct": 0.10652920962199312,
            "avg_trade_size": 1284.3374217118999,
            "avg_run_notional": 2818.774914089347,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1466208476517755,
            "medium_confidence_pct": 0.4146620847651776,
            "low_confidence_pct": 0.16380297823596793,
            "na_confidence_pct": 0.27491408934707906,
            "avg_feature_coverage": 0.8754868270332186,
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
            "retail_pct": 0.2222222222222222,
            "mixed_pct": 0.0,
            "instit_pct": 0.4444444444444444,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.011494252873563218,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5506792058516197,
            "ambiguous_qty_pct": 0.4378265412748171,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4378265412748171,
            "retail_notional_pct": 0.011520499712724112,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5481518584540137,
            "ambiguous_notional_pct": 0.4403276418332621,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4403276418332621,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.375,
            "run_unclear_pct": 0.375,
            "avg_trade_size": 3771.0555555555557,
            "avg_run_notional": 4242.4375,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.625,
            "na_confidence_pct": 0.375,
            "avg_feature_coverage": 0.83125,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2254335260115607,
            "mixed_pct": 0.09248554913294797,
            "instit_pct": 0.28901734104046245,
            "ambiguous_pct": 0.3930635838150289,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3930635838150289,
            "retail_qty_pct": 0.03900606761051719,
            "mixed_qty_pct": 0.01810652027352403,
            "instit_qty_pct": 0.5368390638543773,
            "ambiguous_qty_pct": 0.4060483482615814,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4060483482615814,
            "retail_notional_pct": 0.03877351416555277,
            "mixed_notional_pct": 0.017991936447907496,
            "instit_notional_pct": 0.5360262554472446,
            "ambiguous_notional_pct": 0.40720829393929514,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40720829393929514,
            "run_retail_pct": 0.3486238532110092,
            "run_mixed_pct": 0.03669724770642202,
            "run_instit_pct": 0.21100917431192662,
            "run_unclear_pct": 0.4036697247706422,
            "avg_trade_size": 2659.508670520231,
            "avg_run_notional": 4221.05504587156,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.01834862385321101,
            "medium_confidence_pct": 0.21100917431192662,
            "low_confidence_pct": 0.3302752293577982,
            "na_confidence_pct": 0.44036697247706424,
            "avg_feature_coverage": 0.8279816513761467,
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
            "retail_pct": 0.06451612903225806,
            "mixed_pct": 0.12903225806451613,
            "instit_pct": 0.3548387096774194,
            "ambiguous_pct": 0.45161290322580644,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.45161290322580644,
            "retail_qty_pct": 0.045536519386834985,
            "mixed_qty_pct": 0.1375112714156898,
            "instit_qty_pct": 0.4643823264201984,
            "ambiguous_qty_pct": 0.3525698827772768,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3525698827772768,
            "retail_notional_pct": 0.04549672921523801,
            "mixed_notional_pct": 0.13782566377690758,
            "instit_notional_pct": 0.46553792525860704,
            "ambiguous_notional_pct": 0.35113968174924737,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35113968174924737,
            "run_retail_pct": 0.13333333333333333,
            "run_mixed_pct": 0.26666666666666666,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.4,
            "avg_trade_size": 1425.1290322580646,
            "avg_run_notional": 2945.2666666666673,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.8299999999999998,
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
            "retail_pct": 0.23684210526315788,
            "mixed_pct": 0.07894736842105263,
            "instit_pct": 0.42105263157894735,
            "ambiguous_pct": 0.15789473684210525,
            "unobservable_pct": 0.10526315789473684,
            "unclear_pct": 0.2631578947368421,
            "retail_qty_pct": 0.1339764201500536,
            "mixed_qty_pct": 0.22615219721329047,
            "instit_qty_pct": 0.4480171489817792,
            "ambiguous_qty_pct": 0.15112540192926044,
            "unobservable_qty_pct": 0.04072883172561629,
            "unclear_qty_pct": 0.19185423365487672,
            "retail_notional_pct": 0.13439551094280378,
            "mixed_notional_pct": 0.22698231561502846,
            "instit_notional_pct": 0.4482515500185348,
            "ambiguous_notional_pct": 0.1498993305664382,
            "unobservable_notional_pct": 0.04047129285719477,
            "unclear_notional_pct": 0.19037062342363298,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.2962962962962963,
            "run_unclear_pct": 0.25925925925925924,
            "avg_trade_size": 1810.25,
            "avg_run_notional": 2547.759259259259,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6296296296296297,
            "na_confidence_pct": 0.37037037037037035,
            "avg_feature_coverage": 0.790740740740741,
            "observable_run_pct": 0.9259259259259259,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25735294117647056,
            "mixed_pct": 0.051470588235294115,
            "instit_pct": 0.27941176470588236,
            "ambiguous_pct": 0.38235294117647056,
            "unobservable_pct": 0.029411764705882353,
            "unclear_pct": 0.4117647058823529,
            "retail_qty_pct": 0.06957107335267303,
            "mixed_qty_pct": 0.02856057466500898,
            "instit_qty_pct": 0.3889522033430032,
            "ambiguous_qty_pct": 0.48085025556016026,
            "unobservable_qty_pct": 0.03206589307915458,
            "unclear_qty_pct": 0.5129161486393148,
            "retail_notional_pct": 0.0685921627673402,
            "mixed_notional_pct": 0.028412503980431582,
            "instit_notional_pct": 0.39423813085256226,
            "ambiguous_notional_pct": 0.47612031918318887,
            "unobservable_notional_pct": 0.03263688321647705,
            "unclear_notional_pct": 0.5087572023996659,
            "run_retail_pct": 0.3855421686746988,
            "run_mixed_pct": 0.04819277108433735,
            "run_instit_pct": 0.18072289156626506,
            "run_unclear_pct": 0.3855421686746988,
            "avg_trade_size": 2907.144852941177,
            "avg_run_notional": 4763.514457831326,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.08433734939759036,
            "low_confidence_pct": 0.4819277108433735,
            "na_confidence_pct": 0.43373493975903615,
            "avg_feature_coverage": 0.8126506024096384,
            "observable_run_pct": 0.9759036144578314,
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
            "avg_trade_size": 0.1,
            "avg_run_notional": 0.1,
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
            "retail_pct": 0.27040816326530615,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.45663265306122447,
            "ambiguous_pct": 0.20153061224489796,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20153061224489796,
            "retail_qty_pct": 0.07731622444541104,
            "mixed_qty_pct": 0.09408075975061621,
            "instit_qty_pct": 0.5686167899086559,
            "ambiguous_qty_pct": 0.2599862258953168,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2599862258953168,
            "retail_notional_pct": 0.07700888838060203,
            "mixed_notional_pct": 0.09400567548882928,
            "instit_notional_pct": 0.5685168264274694,
            "ambiguous_notional_pct": 0.2604686097030994,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2604686097030994,
            "run_retail_pct": 0.4666666666666667,
            "run_mixed_pct": 0.08571428571428572,
            "run_instit_pct": 0.22380952380952382,
            "run_unclear_pct": 0.22380952380952382,
            "avg_trade_size": 3223.223214285714,
            "avg_run_notional": 6016.683333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6904761904761905,
            "na_confidence_pct": 0.30952380952380953,
            "avg_feature_coverage": 0.8607142857142855,
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
            "instit_pct": 0.5,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.5,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9999000099990001,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 9.999000099990002e-05,
            "unclear_qty_pct": 9.999000099990002e-05,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9999000099990001,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 9.999000099990002e-05,
            "unclear_notional_pct": 9.999000099990002e-05,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 500.05,
            "avg_run_notional": 500.05,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.625,
            "observable_run_pct": 0.5,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.4666666666666667,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3333333333333333,
            "retail_qty_pct": 0.0006174225415356983,
            "mixed_qty_pct": 0.0033116299955096543,
            "instit_qty_pct": 0.9501010327795241,
            "ambiguous_qty_pct": 0.045969914683430625,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.045969914683430625,
            "retail_notional_pct": 0.0005952693593851218,
            "mixed_notional_pct": 0.003053990626410625,
            "instit_notional_pct": 0.9510668795021051,
            "ambiguous_notional_pct": 0.045283860512099115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.045283860512099115,
            "run_retail_pct": 0.14285714285714285,
            "run_mixed_pct": 0.07142857142857142,
            "run_instit_pct": 0.42857142857142855,
            "run_unclear_pct": 0.35714285714285715,
            "avg_trade_size": 43789.7,
            "avg_run_notional": 46917.53571428572,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5714285714285714,
            "na_confidence_pct": 0.42857142857142855,
            "avg_feature_coverage": 0.8392857142857142,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2591973244147157,
            "mixed_pct": 0.10869565217391304,
            "instit_pct": 0.31270903010033446,
            "ambiguous_pct": 0.3193979933110368,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3193979933110368,
            "retail_qty_pct": 0.04787156124571529,
            "mixed_qty_pct": 0.026924091055576714,
            "instit_qty_pct": 0.5450150880379692,
            "ambiguous_qty_pct": 0.38018925966073885,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.38018925966073885,
            "retail_notional_pct": 0.04729744397463512,
            "mixed_notional_pct": 0.026585365265359186,
            "instit_notional_pct": 0.5483771707815279,
            "ambiguous_notional_pct": 0.37774001997847784,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.37774001997847784,
            "run_retail_pct": 0.4355300859598854,
            "run_mixed_pct": 0.07736389684813753,
            "run_instit_pct": 0.19197707736389685,
            "run_unclear_pct": 0.29512893982808025,
            "avg_trade_size": 2426.524247491639,
            "avg_run_notional": 4157.769340974212,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0057306590257879654,
            "medium_confidence_pct": 0.2979942693409742,
            "low_confidence_pct": 0.3237822349570201,
            "na_confidence_pct": 0.37249283667621774,
            "avg_feature_coverage": 0.8414040114613179,
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
            "retail_pct": 0.2756370416407707,
            "mixed_pct": 0.18614045991298944,
            "instit_pct": 0.3430702299564947,
            "ambiguous_pct": 0.19515226848974518,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19515226848974518,
            "retail_qty_pct": 0.0676702853655379,
            "mixed_qty_pct": 0.1244844741173642,
            "instit_qty_pct": 0.5451351001461042,
            "ambiguous_qty_pct": 0.2627101403709937,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2627101403709937,
            "retail_notional_pct": 0.06790391249902283,
            "mixed_notional_pct": 0.12482659912298427,
            "instit_notional_pct": 0.544587071761598,
            "ambiguous_notional_pct": 0.26268241661639485,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26268241661639485,
            "run_retail_pct": 0.5860857343640197,
            "run_mixed_pct": 0.16303583977512298,
            "run_instit_pct": 0.11806043569922699,
            "run_unclear_pct": 0.13281799016163034,
            "avg_trade_size": 1685.4717215661901,
            "avg_run_notional": 3811.5586788475052,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11033028812368235,
            "medium_confidence_pct": 0.4378074490513001,
            "low_confidence_pct": 0.15600843288826424,
            "na_confidence_pct": 0.29585382993675335,
            "avg_feature_coverage": 0.8681658468025297,
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
            "retail_pct": 0.1346153846153846,
            "mixed_pct": 0.09615384615384616,
            "instit_pct": 0.40384615384615385,
            "ambiguous_pct": 0.36538461538461536,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36538461538461536,
            "retail_qty_pct": 0.07505175983436853,
            "mixed_qty_pct": 0.09187370600414078,
            "instit_qty_pct": 0.5121635610766045,
            "ambiguous_qty_pct": 0.32091097308488614,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32091097308488614,
            "retail_notional_pct": 0.0749993180463131,
            "mixed_notional_pct": 0.0919533361823843,
            "instit_notional_pct": 0.5132656229094872,
            "ambiguous_notional_pct": 0.3197817228618154,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3197817228618154,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.17857142857142858,
            "run_instit_pct": 0.21428571428571427,
            "run_unclear_pct": 0.35714285714285715,
            "avg_trade_size": 1480.4750000000001,
            "avg_run_notional": 2749.453571428571,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4642857142857143,
            "na_confidence_pct": 0.5357142857142857,
            "avg_feature_coverage": 0.8071428571428573,
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
            "retail_pct": 0.22784810126582278,
            "mixed_pct": 0.0379746835443038,
            "instit_pct": 0.34177215189873417,
            "ambiguous_pct": 0.34177215189873417,
            "unobservable_pct": 0.05063291139240506,
            "unclear_pct": 0.3924050632911392,
            "retail_qty_pct": 0.10642439974042829,
            "mixed_qty_pct": 0.13692407527579495,
            "instit_qty_pct": 0.42569759896171316,
            "ambiguous_qty_pct": 0.3062946138870863,
            "unobservable_qty_pct": 0.02465931213497729,
            "unclear_qty_pct": 0.3309539260220636,
            "retail_notional_pct": 0.10645808367634033,
            "mixed_notional_pct": 0.13558762743361294,
            "instit_notional_pct": 0.42533736258010735,
            "ambiguous_notional_pct": 0.3084414456659546,
            "unobservable_notional_pct": 0.024175480643984785,
            "unclear_notional_pct": 0.3326169263099394,
            "run_retail_pct": 0.3103448275862069,
            "run_mixed_pct": 0.05172413793103448,
            "run_instit_pct": 0.25862068965517243,
            "run_unclear_pct": 0.37931034482758624,
            "avg_trade_size": 1457.6962025316457,
            "avg_run_notional": 1985.4827586206898,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5689655172413793,
            "na_confidence_pct": 0.43103448275862066,
            "avg_feature_coverage": 0.8120689655172414,
            "observable_run_pct": 0.9655172413793104,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28051391862955033,
            "mixed_pct": 0.07922912205567452,
            "instit_pct": 0.29764453961456105,
            "ambiguous_pct": 0.32119914346895073,
            "unobservable_pct": 0.021413276231263382,
            "unclear_pct": 0.3426124197002141,
            "retail_qty_pct": 0.07931515929315865,
            "mixed_qty_pct": 0.045411595470122836,
            "instit_qty_pct": 0.4057638879095153,
            "ambiguous_qty_pct": 0.45180306598784326,
            "unobservable_qty_pct": 0.017706291339360008,
            "unclear_qty_pct": 0.4695093573272033,
            "retail_notional_pct": 0.078573817032632,
            "mixed_notional_pct": 0.04641641117096634,
            "instit_notional_pct": 0.4064434847209452,
            "ambiguous_notional_pct": 0.45078207154014105,
            "unobservable_notional_pct": 0.017784215535315402,
            "unclear_notional_pct": 0.46856628707545644,
            "run_retail_pct": 0.4749034749034749,
            "run_mixed_pct": 0.05405405405405406,
            "run_instit_pct": 0.16602316602316602,
            "run_unclear_pct": 0.305019305019305,
            "avg_trade_size": 2122.855460385439,
            "avg_run_notional": 3827.6969111969115,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.12355212355212356,
            "medium_confidence_pct": 0.13513513513513514,
            "low_confidence_pct": 0.38223938223938225,
            "na_confidence_pct": 0.3590733590733591,
            "avg_feature_coverage": 0.8252895752895751,
            "observable_run_pct": 0.9806949806949807,
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
            "retail_pct": 0.26792750197005516,
            "mixed_pct": 0.13002364066193853,
            "instit_pct": 0.3908589440504334,
            "ambiguous_pct": 0.2111899133175729,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2111899133175729,
            "retail_qty_pct": 0.07298332490569766,
            "mixed_qty_pct": 0.15701557078342138,
            "instit_qty_pct": 0.5042283482415302,
            "ambiguous_qty_pct": 0.26577275606935075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26577275606935075,
            "retail_notional_pct": 0.07249677830283226,
            "mixed_notional_pct": 0.15821022900453133,
            "instit_notional_pct": 0.5052972051698675,
            "ambiguous_notional_pct": 0.26399578752276887,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26399578752276887,
            "run_retail_pct": 0.4930662557781202,
            "run_mixed_pct": 0.12788906009244994,
            "run_instit_pct": 0.1941448382126348,
            "run_unclear_pct": 0.18489984591679506,
            "avg_trade_size": 3141.255319148936,
            "avg_run_notional": 6142.146379044684,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.04160246533127889,
            "medium_confidence_pct": 0.19722650231124808,
            "low_confidence_pct": 0.44838212634822805,
            "na_confidence_pct": 0.31278890600924497,
            "avg_feature_coverage": 0.8599383667180278,
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
            "retail_pct": 0.07142857142857142,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.47619047619047616,
            "ambiguous_pct": 0.38095238095238093,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38095238095238093,
            "retail_qty_pct": 0.0023291139240506327,
            "mixed_qty_pct": 0.008050632911392405,
            "instit_qty_pct": 0.9152911392405063,
            "ambiguous_qty_pct": 0.07432911392405063,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07432911392405063,
            "retail_notional_pct": 0.002380649163383603,
            "mixed_notional_pct": 0.008005335064216591,
            "instit_notional_pct": 0.9148683419535154,
            "ambiguous_notional_pct": 0.07474567381888443,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07474567381888443,
            "run_retail_pct": 0.09090909090909091,
            "run_mixed_pct": 0.06060606060606061,
            "run_instit_pct": 0.42424242424242425,
            "run_unclear_pct": 0.42424242424242425,
            "avg_trade_size": 17387.214285714286,
            "avg_run_notional": 22129.18181818182,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5151515151515151,
            "na_confidence_pct": 0.48484848484848486,
            "avg_feature_coverage": 0.8318181818181819,
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
            "instit_pct": 0.2,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.8,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.909008271975275,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.09099172802472502,
            "unclear_qty_pct": 0.09099172802472502,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.909008271975275,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.09099172802472502,
            "unclear_notional_pct": 0.09099172802472502,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.01999999999998,
            "avg_run_notional": 366.7,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.31647940074906367,
            "mixed_pct": 0.18039950062421972,
            "instit_pct": 0.32256554307116103,
            "ambiguous_pct": 0.17790262172284643,
            "unobservable_pct": 0.0026529338327091136,
            "unclear_pct": 0.18055555555555555,
            "retail_qty_pct": 0.06569289489136818,
            "mixed_qty_pct": 0.13568885789782736,
            "instit_qty_pct": 0.5368100411039343,
            "ambiguous_qty_pct": 0.25772533763945976,
            "unobservable_qty_pct": 0.004082868467410452,
            "unclear_qty_pct": 0.2618082061068702,
            "retail_notional_pct": 0.06579888472157362,
            "mixed_notional_pct": 0.1363000653199849,
            "instit_notional_pct": 0.5362020114867027,
            "ambiguous_notional_pct": 0.2576123430555653,
            "unobservable_notional_pct": 0.004086695416173529,
            "unclear_notional_pct": 0.2616990384717388,
            "run_retail_pct": 0.6274384393987847,
            "run_mixed_pct": 0.1509433962264151,
            "run_instit_pct": 0.10809082187400064,
            "run_unclear_pct": 0.11352734250079949,
            "avg_trade_size": 1743.1951466916355,
            "avg_run_notional": 3572.2400063959067,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.23121202430444515,
            "medium_confidence_pct": 0.3869523504956828,
            "low_confidence_pct": 0.1173648864726575,
            "na_confidence_pct": 0.2644707387272146,
            "avg_feature_coverage": 0.8662615925807481,
            "observable_run_pct": 0.9993604093380236,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24190064794816415,
            "mixed_pct": 0.09287257019438445,
            "instit_pct": 0.2991360691144708,
            "ambiguous_pct": 0.3650107991360691,
            "unobservable_pct": 0.0010799136069114472,
            "unclear_pct": 0.36609071274298055,
            "retail_qty_pct": 0.06005899285688902,
            "mixed_qty_pct": 0.032037385834606774,
            "instit_qty_pct": 0.4940651764455027,
            "ambiguous_qty_pct": 0.4125946195671488,
            "unobservable_qty_pct": 0.001243825295852731,
            "unclear_qty_pct": 0.41383844486300153,
            "retail_notional_pct": 0.05653219638841524,
            "mixed_notional_pct": 0.03047596723241807,
            "instit_notional_pct": 0.5007513303906417,
            "ambiguous_notional_pct": 0.4112668547690896,
            "unobservable_notional_pct": 0.0009736512194354464,
            "unclear_notional_pct": 0.412240505988525,
            "run_retail_pct": 0.4079696394686907,
            "run_mixed_pct": 0.07210626185958255,
            "run_instit_pct": 0.18785578747628084,
            "run_unclear_pct": 0.33206831119544594,
            "avg_trade_size": 2368.009719222462,
            "avg_run_notional": 4160.867172675522,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.003795066413662239,
            "medium_confidence_pct": 0.24667931688804554,
            "low_confidence_pct": 0.34535104364326374,
            "na_confidence_pct": 0.40417457305502846,
            "avg_feature_coverage": 0.8366223908918404,
            "observable_run_pct": 0.9981024667931688,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S69",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23578595317725753,
            "mixed_pct": 0.07441471571906355,
            "instit_pct": 0.33695652173913043,
            "ambiguous_pct": 0.33695652173913043,
            "unobservable_pct": 0.01588628762541806,
            "unclear_pct": 0.3528428093645485,
            "retail_qty_pct": 0.08093435924550003,
            "mixed_qty_pct": 0.055437288104149565,
            "instit_qty_pct": 0.476798708797707,
            "ambiguous_qty_pct": 0.3688506722692973,
            "unobservable_qty_pct": 0.017978971583346087,
            "unclear_qty_pct": 0.3868296438526434,
            "retail_notional_pct": 0.0811792672767216,
            "mixed_notional_pct": 0.05603358206816571,
            "instit_notional_pct": 0.47822861863393146,
            "ambiguous_notional_pct": 0.367212667034978,
            "unobservable_notional_pct": 0.01734586498620322,
            "unclear_notional_pct": 0.38455853202118123,
            "run_retail_pct": 0.40282131661442006,
            "run_mixed_pct": 0.06426332288401254,
            "run_instit_pct": 0.19278996865203762,
            "run_unclear_pct": 0.3401253918495298,
            "avg_trade_size": 2582.0636287625416,
            "avg_run_notional": 4840.357523510972,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.06426332288401254,
            "medium_confidence_pct": 0.19278996865203762,
            "low_confidence_pct": 0.3385579937304075,
            "na_confidence_pct": 0.4043887147335423,
            "avg_feature_coverage": 0.8253918495297804,
            "observable_run_pct": 0.987460815047022,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5949656750572082,
            "mixed_pct": 0.13501144164759726,
            "instit_pct": 0.13501144164759726,
            "ambiguous_pct": 0.13501144164759726,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13501144164759726,
            "retail_qty_pct": 0.09109700280525616,
            "mixed_qty_pct": 0.08652000590580244,
            "instit_qty_pct": 0.45644470692455336,
            "ambiguous_qty_pct": 0.365938284364388,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.365938284364388,
            "retail_notional_pct": 0.09168527748124182,
            "mixed_notional_pct": 0.08787833803060832,
            "instit_notional_pct": 0.45733702711612056,
            "ambiguous_notional_pct": 0.36309935737202925,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36309935737202925,
            "run_retail_pct": 0.7041095890410959,
            "run_mixed_pct": 0.13972602739726028,
            "run_instit_pct": 0.052054794520547946,
            "run_unclear_pct": 0.10410958904109589,
            "avg_trade_size": 628.9249427917621,
            "avg_run_notional": 752.9868493150684,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5397260273972603,
            "medium_confidence_pct": 0.12876712328767123,
            "low_confidence_pct": 0.08767123287671233,
            "na_confidence_pct": 0.24383561643835616,
            "avg_feature_coverage": 0.8442465753424655,
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
            "retail_pct": 0.18716577540106952,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.29411764705882354,
            "ambiguous_pct": 0.42780748663101603,
            "unobservable_pct": 0.03208556149732621,
            "unclear_pct": 0.45989304812834225,
            "retail_qty_pct": 0.0811965811965812,
            "mixed_qty_pct": 0.07817998994469583,
            "instit_qty_pct": 0.39567621920563095,
            "ambiguous_qty_pct": 0.4225741578682755,
            "unobservable_qty_pct": 0.02237305178481649,
            "unclear_qty_pct": 0.444947209653092,
            "retail_notional_pct": 0.08048265757247333,
            "mixed_notional_pct": 0.075500662676833,
            "instit_notional_pct": 0.3969354772067774,
            "ambiguous_notional_pct": 0.4245342986908557,
            "unobservable_notional_pct": 0.02254690385306055,
            "unclear_notional_pct": 0.44708120254391626,
            "run_retail_pct": 0.2631578947368421,
            "run_mixed_pct": 0.05263157894736842,
            "run_instit_pct": 0.21052631578947367,
            "run_unclear_pct": 0.47368421052631576,
            "avg_trade_size": 1682.5294117647059,
            "avg_run_notional": 2365.6616541353383,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47368421052631576,
            "na_confidence_pct": 0.5263157894736842,
            "avg_feature_coverage": 0.8214285714285715,
            "observable_run_pct": 0.9774436090225564,
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
          "trade_id": "BMLL-50",
          "timestamp": "2026-04-01T08:32:46.398500",
          "price": 0.23,
          "size": 8000.0,
          "notional": 1840.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1524,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-49",
          "timestamp": "2026-04-01T07:55:19.246000",
          "price": 0.23,
          "size": 200.0,
          "notional": 46.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1523,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-48",
          "timestamp": "2026-04-01T07:55:19.246000",
          "price": 0.23,
          "size": 13000.0,
          "notional": 2990.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1523,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-47",
          "timestamp": "2026-04-01T07:55:19.246000",
          "price": 0.23,
          "size": 400.0,
          "notional": 92.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1523,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-46",
          "timestamp": "2026-04-01T07:54:35.262300",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-45",
          "timestamp": "2026-04-01T07:54:35.111700",
          "price": 0.23,
          "size": 48600.0,
          "notional": 11178.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-44",
          "timestamp": "2026-04-01T07:54:35.111700",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-43",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 11000.0,
          "notional": 2530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-42",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 13000.0,
          "notional": 2990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-41",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 24000.0,
          "notional": 5520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-40",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 1700.0,
          "notional": 391.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-39",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-38",
          "timestamp": "2026-04-01T07:54:35.111600",
          "price": 0.23,
          "size": 11700.0,
          "notional": 2691.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1522,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-36",
          "timestamp": "2026-04-01T03:45:53.395400",
          "price": 0.23,
          "size": 7300.0,
          "notional": 1679.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1521,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-35",
          "timestamp": "2026-04-01T03:45:53.395400",
          "price": 0.23,
          "size": 12800.0,
          "notional": 2944.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1521,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-34",
          "timestamp": "2026-04-01T03:45:53.395400",
          "price": 0.23,
          "size": 9900.0,
          "notional": 2277.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1521,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-33",
          "timestamp": "2026-04-01T03:17:17.338500",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1520,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-32",
          "timestamp": "2026-04-01T03:05:46.594300",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1519,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-31",
          "timestamp": "2026-04-01T03:05:46.594300",
          "price": 0.23,
          "size": 10000.0,
          "notional": 2300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1519,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-30",
          "timestamp": "2026-04-01T03:04:49.104100",
          "price": 0.23,
          "size": 14000.0,
          "notional": 3220.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1518,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-29",
          "timestamp": "2026-04-01T02:55:42.699200",
          "price": 0.23,
          "size": 3900.0,
          "notional": 897.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1517,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-28",
          "timestamp": "2026-04-01T02:55:42.699200",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1517,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-04-01T02:55:35.860600",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1516,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-04-01T02:55:35.860600",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1516,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-04-01T02:53:20.661500",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1515,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-04-01T02:53:20.631400",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1515,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-04-01T02:16:35.799100",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1514,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-04-01T02:16:35.738800",
          "price": 0.23,
          "size": 100.0,
          "notional": 23.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1514,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-04-01T02:16:35.708800",
          "price": 0.23,
          "size": 600.0,
          "notional": 138.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1514,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-04-01T02:16:35.708500",
          "price": 0.23,
          "size": 26300.0,
          "notional": 6049.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1514,
          "d1": "MULTI_FILL_SINGLE_PRICE",
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
      "total_trades": 1268,
      "price_moving_trades": 160,
      "pct_price_moving": 12.618296529968454,
      "all_movers": {
        "count": 160,
        "avg_size": 2853.05625,
        "median_size": 727.5,
        "retail_count": 88,
        "mixed_count": 23,
        "institutional_count": 28,
        "ambiguous_count": 21,
        "unobservable_count": 0,
        "retail_pct": 55.00000000000001,
        "mixed_pct": 14.374999999999998,
        "instit_pct": 17.5,
        "unclear_pct": 13.125
      },
      "positive_movers": {
        "count": 82,
        "avg_size": 2229.2134146341464,
        "median_size": 123.75,
        "retail_count": 57,
        "mixed_count": 12,
        "institutional_count": 8,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 69.51219512195121,
        "mixed_pct": 14.634146341463413,
        "instit_pct": 9.75609756097561,
        "unclear_pct": 6.097560975609756
      },
      "negative_movers": {
        "count": 78,
        "avg_size": 3508.891025641026,
        "median_size": 2087.5,
        "retail_count": 31,
        "mixed_count": 11,
        "institutional_count": 20,
        "ambiguous_count": 16,
        "unobservable_count": 0,
        "retail_pct": 39.743589743589745,
        "mixed_pct": 14.102564102564102,
        "instit_pct": 25.64102564102564,
        "unclear_pct": 20.51282051282051
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
        "n_days_short_data": 23,
        "window_days": 21
      },
      "periods": {
        "1W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.008626851108781272,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "2W": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.011343649617005923,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        },
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.006692525408673298,
            "max_short_ratio": 0.07371154614462645,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": 0.17420254577857244,
        "interpretation": "Positive - unusual (shorts during up days?)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
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
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.011343649617005923,
          "max_short_ratio": 0.07371154614462645,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "S69",
          "avg_short_ratio": 0.00011381540561362179,
          "max_short_ratio": 0.02815622161671208,
          "is_target": false
        },
        {
          "ticker": "S71",
          "avg_short_ratio": 0.00036975177747255886,
          "max_short_ratio": 0.05687909469922573,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0033069068456800348,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0036008850613087648,
          "max_short_ratio": 1.0,
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
          "opening": 6.051063079701709e-05,
          "continuous": 0.9993343830612328,
          "closing": 0.0,
          "auctions": 0.000665616938767188,
          "other": 0.0
        },
        "1W": {
          "opening": 2.7554050864777895e-05,
          "continuous": 0.9996423963398636,
          "closing": 0.0,
          "auctions": 0.0003576036601363566,
          "other": 0.0
        },
        "2W": {
          "opening": 0.014118233540508231,
          "continuous": 0.9793974236238907,
          "closing": 0.006313522750383183,
          "auctions": 0.020602576376109245,
          "other": 0.0
        },
        "1M": {
          "opening": 0.011488976465471465,
          "continuous": 0.9779922333113358,
          "closing": 0.007958313703810489,
          "auctions": 0.02200776668866421,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.23163494536567045,
        "1W": 0.26746283656557074,
        "2W": 0.2763207005353204,
        "1M": 0.2519071096204467
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.012
        },
        {
          "time": "09:00",
          "avg_share": 0.0766
        },
        {
          "time": "09:30",
          "avg_share": 0.0721
        },
        {
          "time": "10:00",
          "avg_share": 0.0517
        },
        {
          "time": "10:30",
          "avg_share": 0.0618
        },
        {
          "time": "11:00",
          "avg_share": 0.0866
        },
        {
          "time": "11:30",
          "avg_share": 0.0765
        },
        {
          "time": "12:30",
          "avg_share": 0.0019
        },
        {
          "time": "13:00",
          "avg_share": 0.0382
        },
        {
          "time": "13:30",
          "avg_share": 0.0457
        },
        {
          "time": "14:00",
          "avg_share": 0.0356
        },
        {
          "time": "14:30",
          "avg_share": 0.0901
        },
        {
          "time": "15:00",
          "avg_share": 0.1467
        },
        {
          "time": "15:30",
          "avg_share": 0.0476
        },
        {
          "time": "16:00",
          "avg_share": 0.0773
        },
        {
          "time": "16:30",
          "avg_share": 0.0518
        },
        {
          "time": "17:00",
          "avg_share": 0.0276
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.765438369970307,
          "hhi": 0.22183015758330085,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.586679892303165,
          "hhi": 0.24170356469682147,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.462761214907187,
          "hhi": 0.6583843286223173,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.737413839973674,
          "hhi": 0.3538173647293001,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.255937387879,
          "hhi": 0.5093881634789648,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.773217000353111,
          "hhi": 0.7800699156694875,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.988060157704368,
          "hhi": 0.8066141419943307,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S69",
          "auctions_pct": 4.962872901193092,
          "hhi": 0.464066839179064,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 2.040256443681777,
          "hhi": 0.6923621838165108,
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
