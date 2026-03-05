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
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 264160573.89999998,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    },
    {
      "ticker": "BN2",
      "name": "Valuetronics",
      "marketCap": 360647783.76,
      "sector": "Electronic Components",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-02-26",
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
          "score_pca": 71.32616487455196,
          "score_pca_percentile": 71.32616487455196,
          "rank_pca": 161,
          "total": 558,
          "adv_notional_sgd": 430575.0,
          "adv_volume_shares": 1722300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0030203005918959685,
          "votes": 114.0,
          "trades": 114.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.2608695652173914,
          "amihud": 0.0,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5143867189581618,
          "loadings": {
            "log_adv": 0.555467065939067,
            "log_trades": 0.5082460096270535,
            "log_turnover": 0.5169582540699952,
            "neg_spread": 0.37894800312437243,
            "neg_amihud": 0.04082686444030465,
            "neg_vol": -0.14362476796203205
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
          "peer_median_adv": 30296.5,
          "peer_median_score_pca": 41.75627240143369,
          "peer_median_trades": 10.5,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.029422128259337592,
          "peer_median_amihud": 8.775440000561638e-09,
          "peer_median_turnover_ratio": 0.00023430347127915624,
          "target_vs_peer": {
            "score_pca_delta": 29.57,
            "adv_delta_pct": 1321.2,
            "trades_delta_pct": 985.71,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 15.16,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 1189.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.32616487455196,
            "rank_pca": 161,
            "adv": 430575.0,
            "trades": 114.0,
            "volatility": 0.0,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.2608695652173914,
            "amihud": 0.0,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 89.42652329749103,
            "rank_pca": 60,
            "adv": 2713200.0,
            "trades": 779.0,
            "volatility": 0.04761904761904767,
            "spread_pct": 0.011930068275406743,
            "spread_ticks": 1.2287735849056605,
            "amihud": 1.7550880001123276e-08,
            "turnover_ratio": 0.040184482498156066,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.017921146953405,
            "rank_pca": 252,
            "adv": 60120.0,
            "trades": 19.0,
            "volatility": 0.01098901098901095,
            "spread_pct": 0.013389711064129683,
            "spread_ticks": 2.4516129032258065,
            "amihud": 1.8278461392233783e-07,
            "turnover_ratio": 0.0004617931592906351,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.627240143369175,
            "rank_pca": 416,
            "adv": 41.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": 0.0,
            "turnover_ratio": 1.7799074647467968e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 28.49462365591398,
            "rank_pca": 400,
            "adv": 473.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0,
            "amihud": 0.0,
            "turnover_ratio": 6.81378326767737e-06,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
            "rank_pca": 544,
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
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5730994152046784,
            "spread_ticks": 24.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 86.37992831541219,
            "rank_pca": 77,
            "adv": 2190320.0,
            "trades": 402.0,
            "volatility": 0.07954545454545459,
            "spread_pct": 0.007303562033856344,
            "spread_ticks": 1.3485714285714285,
            "amihud": 3.631681879609125e-08,
            "turnover_ratio": 0.009513106296823918,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 1124370.0,
            "trades": 235.0,
            "volatility": 0.0,
            "spread_pct": 0.005722441119631802,
            "spread_ticks": 1.0320197044334976,
            "amihud": 0.0,
            "turnover_ratio": 0.004445023577998335,
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
              "mean": 0.0213726192917042,
              "median": 0.00600606016881905,
              "min": 0.0,
              "max": 0.5,
              "p5": 0.0,
              "p95": 0.08919191919191906,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4315694.438356561,
              "median": 26415.0,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 23017304.195397075,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09419102434500713,
              "median": 0.023452514310966798,
              "min": 0.00023463548528764247,
              "max": 1.3777777777777778,
              "p5": 0.0038045047231289996,
              "p95": 0.503048513580684,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.01541635010795609,
              "median": 0.0005377471899209525,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.02040573455649377,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00013292425610952254,
              "median": 1.9000491675723243e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 2.7304394711025137e-05,
              "count": 431
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 566.4014336917563,
              "median": 10.0,
              "min": 0.0,
              "max": 14843.0,
              "p5": 0.0,
              "p95": 2847.4999999999945,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008260836385836398,
              "median": 0.0,
              "min": 0.0,
              "max": 0.04761904761904767,
              "p5": 0.0,
              "p95": 0.0347985347985348,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2331593.75,
              "median": 30296.5,
              "min": 0.0,
              "max": 15448340.999999998,
              "p5": 0.0,
              "p95": 10991041.649999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17319461193270594,
              "median": 0.03520805969315041,
              "min": 0.0012744270595871114,
              "max": 0.6666666666666666,
              "p5": 0.0050039014851239825,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006677962280367349,
              "median": 0.00023430347127915624,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.029531898529803723,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.346993329803383e-08,
              "median": 2.4205293237094405e-10,
              "min": 0.0,
              "max": 1.8278461392233783e-07,
              "p5": 0.0,
              "p95": 1.4147618044203418e-07,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 496.875,
              "median": 10.5,
              "min": 0.0,
              "max": 3060.0,
              "p5": 0.0,
              "p95": 2261.6499999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 761065.5,
              "median": 30296.5,
              "min": 0.0,
              "max": 2713200.0,
              "p5": 0.0,
              "p95": 2530191.9999999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 179.75,
              "median": 10.5,
              "min": 0.0,
              "max": 779.0,
              "p5": 0.0,
              "p95": 647.0499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.01726918914418915,
              "median": 0.0,
              "min": 0.0,
              "max": 0.07954545454545459,
              "p5": 0.0,
              "p95": 0.06837121212121215,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17154336220297414,
              "median": 0.029422128259337592,
              "min": 0.005722441119631802,
              "max": 0.6666666666666666,
              "p5": 0.006275833439610392,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.944205211992539e-08,
              "median": 8.775440000561638e-09,
              "min": 0.0,
              "max": 1.8278461392233783e-07,
              "p5": 0.0,
              "p95": 1.4616766514077618e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006826624902875172,
              "median": 0.00023430347127915624,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.0294495008276898,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.00865663640518255,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.00865663640518255,
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
          "score_pca": 73.65591397849462,
          "score_pca_percentile": 73.65591397849462,
          "rank_pca": 148,
          "total": 558,
          "adv_notional_sgd": 405925.0,
          "adv_volume_shares": 1623700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002847391320363168,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.024100349578449535,
          "spread_ticks": 1.2107438016528926,
          "amihud": 4.8304103312816265e-08,
          "volatility": 0.019230769230769273
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5252704793739453,
          "loadings": {
            "log_adv": 0.5467174425495432,
            "log_trades": 0.49311662406709567,
            "log_turnover": 0.5068464550680919,
            "neg_spread": 0.38877133805852715,
            "neg_amihud": 0.08868257239381135,
            "neg_vol": -0.20502427203496115
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
          "peer_median_adv": 32287.5,
          "peer_median_score_pca": 46.86379928315412,
          "peer_median_trades": 10.5,
          "peer_median_volatility": 0.008256936433732043,
          "peer_median_spread_pct": 0.022640185828192418,
          "peer_median_amihud": 3.743030944260651e-08,
          "peer_median_turnover_ratio": 0.00032879149020639137,
          "target_vs_peer": {
            "score_pca_delta": 26.79,
            "adv_delta_pct": 1157.2,
            "trades_delta_pct": 747.62,
            "volatility_delta_pct": -132.9,
            "spread_pct_delta_pct": -6.45,
            "amihud_delta_pct": -29.05,
            "turnover_ratio_delta_pct": 766.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.65591397849462,
            "rank_pca": 148,
            "adv": 405925.0,
            "trades": 89.0,
            "volatility": 0.019230769230769273,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.2107438016528926,
            "amihud": 4.8304103312816265e-08,
            "turnover_ratio": 0.002847391320363168,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 91.75627240143369,
            "rank_pca": 47,
            "adv": 1293400.5,
            "trades": 595.0,
            "volatility": 0.041884816753926746,
            "spread_pct": 0.007803421043522128,
            "spread_ticks": 1.2865064695009243,
            "amihud": 1.7550880001123276e-08,
            "turnover_ratio": 0.019252472651980344,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.34767025089605,
            "rank_pca": 239,
            "adv": 60120.0,
            "trades": 19.0,
            "volatility": 0.005524861878453136,
            "spread_pct": 0.013389711064129683,
            "spread_ticks": 2.4516129032258065,
            "amihud": 1.8278461392233783e-07,
            "turnover_ratio": 0.0004617931592906351,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.37992831541219,
            "rank_pca": 356,
            "adv": 4455.0,
            "trades": 1.0,
            "volatility": 0.012345679012345734,
            "spread_pct": 0.049999999999999906,
            "spread_ticks": 4.0,
            "amihud": 3.007620106301339e-08,
            "turnover_ratio": 0.00019578982112214766,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 30.107526881720432,
            "rank_pca": 391,
            "adv": 1147.5,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4,
            "amihud": 2.9959180616410186e-06,
            "turnover_ratio": 1.5795588484161175e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.240143369175627,
            "rank_pca": 545,
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
            "score_pca": 2.867383512544803,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5730994152046784,
            "spread_ticks": 24.5,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 369750.0,
            "trades": 82.0,
            "volatility": 0.016949152542372947,
            "spread_pct": 0.007680260871430724,
            "spread_ticks": 1.3485714285714285,
            "amihud": 3.743030944260651e-08,
            "turnover_ratio": 0.0017535869952073932,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.49462365591397,
            "rank_pca": 121,
            "adv": 875511.0,
            "trades": 235.0,
            "volatility": 0.01098901098901095,
            "spread_pct": 0.005827606021256288,
            "spread_ticks": 1.0412287793047696,
            "amihud": 1.4426007205790612e-08,
            "turnover_ratio": 0.003423162718636195,
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
              "mean": 0.011232126709920052,
              "median": 0.005633847521107127,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.04094387755102044,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3476942.4706579833,
              "median": 18674.2,
              "min": 0.0,
              "max": 280084950.0,
              "p5": 0.0,
              "p95": 13078268.399999976,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09608681232836441,
              "median": 0.0231846019247594,
              "min": 0.0002627883086550121,
              "max": 1.3868092691622103,
              "p5": 0.0035490611698493464,
              "p95": 0.534917720422657,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013657299836590793,
              "median": 0.00035248809760375015,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.011352292417318815,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00012127287407359296,
              "median": 3.984137735225313e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 5.137721116115486e-05,
              "count": 512
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 477.89247311827955,
              "median": 9.0,
              "min": 0.0,
              "max": 12008.0,
              "p5": 0.0,
              "p95": 2538.4499999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.010808094919265931,
              "median": 0.006501747178542849,
              "min": 0.0,
              "max": 0.041884816753926746,
              "p5": 0.0,
              "p95": 0.03395590012082162,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3178919.75,
              "median": 32287.5,
              "min": 0.0,
              "max": 23666310.0,
              "p5": 0.0,
              "p95": 15835791.674999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17102452423325892,
              "median": 0.027995505085352347,
              "min": 0.0012459697163697393,
              "max": 0.6666666666666666,
              "p5": 0.003541077680873076,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004717482844656909,
              "median": 0.00032879149020639137,
              "min": 0.0,
              "max": 0.019252472651980344,
              "p5": 0.0,
              "p95": 0.01775242429939241,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002700096383368325,
              "median": 4.8304103312816265e-08,
              "min": 3.8166770387155183e-10,
              "max": 0.0018867924528301833,
              "p5": 5.53243139304707e-09,
              "p95": 0.0013216534923996192,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 642.75,
              "median": 10.5,
              "min": 0.0,
              "max": 4436.0,
              "p5": 0.0,
              "p95": 3091.649999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 325548.0,
              "median": 32287.5,
              "min": 0.0,
              "max": 1293400.5,
              "p5": 0.0,
              "p95": 1147139.1749999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 116.75,
              "median": 10.5,
              "min": 0.0,
              "max": 595.0,
              "p5": 0.0,
              "p95": 468.9999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.010961690147013689,
              "median": 0.008256936433732043,
              "min": 0.0,
              "max": 0.041884816753926746,
              "p5": 0.0,
              "p95": 0.033157334279882905,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16954471768299237,
              "median": 0.022640185828192418,
              "min": 0.005827606021256288,
              "max": 0.6666666666666666,
              "p5": 0.006476035218817341,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00027001009127192274,
              "median": 3.743030944260651e-08,
              "min": 1.4426007205790612e-08,
              "max": 0.0018867924528301833,
              "p5": 1.536346904439041e-08,
              "p95": 0.0013216534923996192,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003137825116840109,
              "median": 0.00032879149020639137,
              "min": 0.0,
              "max": 0.019252472651980344,
              "p5": 0.0,
              "p95": 0.013712214175309885,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.020408163265306145,
            "market": -0.007433715749822212,
            "sector": -0.001612903225806539,
            "peers": 0.002873563218390718,
            "vs_market": 0.027841879015128357,
            "vs_sector": 0.022021066491112684,
            "vs_peers": 0.017534600046915427
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 76.70250896057348,
          "score_pca_percentile": 76.70250896057348,
          "rank_pca": 131,
          "total": 558,
          "adv_notional_sgd": 418250.0,
          "adv_volume_shares": 1673000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0029338459561295683,
          "votes": 110.5,
          "trades": 110.5,
          "spread_pct": 0.025183772822347014,
          "spread_ticks": 1.2158691383955071,
          "amihud": 4.34059440714335e-08,
          "volatility": 0.01941930618401211
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5359027809934307,
          "loadings": {
            "log_adv": 0.5400471949931067,
            "log_trades": 0.48673999384799105,
            "log_turnover": 0.5023634644069327,
            "neg_spread": 0.38808364567686265,
            "neg_amihud": 0.06955492043965003,
            "neg_vol": -0.25222480488403504
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
          "peer_median_adv": 12179.125,
          "peer_median_score_pca": 45.07168458781362,
          "peer_median_trades": 8.5,
          "peer_median_volatility": 0.00591930367707208,
          "peer_median_spread_pct": 0.023201765578354402,
          "peer_median_amihud": 2.2321244069431397e-07,
          "peer_median_turnover_ratio": 0.00013390868414187522,
          "target_vs_peer": {
            "score_pca_delta": 31.63,
            "adv_delta_pct": 3334.2,
            "trades_delta_pct": 1200.0,
            "volatility_delta_pct": -228.07,
            "spread_pct_delta_pct": -8.54,
            "amihud_delta_pct": 80.55,
            "turnover_ratio_delta_pct": 2090.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 76.70250896057348,
            "rank_pca": 131,
            "adv": 418250.0,
            "trades": 110.5,
            "volatility": 0.01941930618401211,
            "spread_pct": 0.025183772822347014,
            "spread_ticks": 1.2158691383955071,
            "amihud": 4.34059440714335e-08,
            "turnover_ratio": 0.0029338459561295683,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 84.58781362007169,
            "rank_pca": 87,
            "adv": 1163601.25,
            "trades": 279.5,
            "volatility": 0.015585361904247919,
            "spread_pct": 0.006919651091442052,
            "spread_ticks": 1.260419447284522,
            "amihud": 1.7357109608558024e-08,
            "turnover_ratio": 0.01743815778170756,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.1505376344086,
            "rank_pca": 268,
            "adv": 21957.25,
            "trades": 15.0,
            "volatility": 0.0054798222435743504,
            "spread_pct": 0.012990951952284308,
            "spread_ticks": 2.39247311827957,
            "amihud": 4.0956446601342105e-07,
            "turnover_ratio": 0.00016280282786368947,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.51254480286738,
            "rank_pca": 372,
            "adv": 2401.0,
            "trades": 1.0,
            "volatility": 0.006172839506172867,
            "spread_pct": 0.06105529655379255,
            "spread_ticks": 4.927631578947368,
            "amihud": 6.57570277823443e-07,
            "turnover_ratio": 0.000105014540420061,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 37.992831541218635,
            "rank_pca": 347,
            "adv": 1233.75,
            "trades": 2.0,
            "volatility": 0.021980676328502424,
            "spread_pct": 0.033412579204424496,
            "spread_ticks": 1.4857142857142858,
            "amihud": 6.397972902765055e-06,
            "turnover_ratio": 1.7189316879822455e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.881720430107527,
            "rank_pca": 547,
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
            "score_pca": 5.376344086021505,
            "rank_pca": 529,
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
            "ticker": "5DD",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 505017.5,
            "trades": 175.0,
            "volatility": 0.014288529759558577,
            "spread_pct": 0.007348109727863347,
            "spread_ticks": 1.3147542769968399,
            "amihud": 3.686041537520689e-08,
            "turnover_ratio": 0.0025181509251178164,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 74.19354838709677,
            "rank_pca": 145,
            "adv": 297038.25,
            "trades": 226.5,
            "volatility": 0.0056657678479712925,
            "spread_pct": 0.0059230217088972,
            "spread_ticks": 1.0560474605185266,
            "amihud": 1.6464414581840726e-08,
            "turnover_ratio": 0.0012006509296370272,
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
              "mean": 0.0097110271839006,
              "median": 0.006473096862755906,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.03291080820279401,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3365993.3987880885,
              "median": 14536.099999999999,
              "min": 0.0,
              "max": 320364966.5,
              "p5": 0.0,
              "p95": 11596058.174999975,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0965134107103713,
              "median": 0.02432239952991728,
              "min": 0.00025298863132990377,
              "max": 1.382293523469994,
              "p5": 0.003519895613245341,
              "p95": 0.48210940580512884,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010479329190577213,
              "median": 0.000317354435969606,
              "min": 0.0,
              "max": 4.417968492518621,
              "p5": 0.0,
              "p95": 0.011061420080779195,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005150924131307339,
              "median": 8.166686433962364e-08,
              "min": 0.0,
              "max": 0.2083333333333333,
              "p5": 0.0,
              "p95": 5.8608114936768726e-05,
              "count": 531
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 443.3163082437276,
              "median": 7.0,
              "min": 0.0,
              "max": 12631.5,
              "p5": 0.0,
              "p95": 2309.4999999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.00942369998774572,
              "median": 0.006462216620814476,
              "min": 0.0,
              "max": 0.021980676328502424,
              "p5": 0.0,
              "p95": 0.021084196777930813,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3031494.78125,
              "median": 12179.125,
              "min": 0.0,
              "max": 22644515.0,
              "p5": 0.0,
              "p95": 15126195.187499989,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15206853339636484,
              "median": 0.029298176013385753,
              "min": 0.001228439789052409,
              "max": 0.6666666666666666,
              "p5": 0.003220363744888784,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004321856671796003,
              "median": 0.00013390868414187522,
              "min": 0.0,
              "max": 0.01743815778170756,
              "p5": 0.0,
              "p95": 0.016206047591088475,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002367898313791077,
              "median": 2.2648520504242728e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.146258387510088e-10,
              "p95": 0.0012286543848555858,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 664.25,
              "median": 8.5,
              "min": 0.0,
              "max": 4906.0,
              "p5": 0.0,
              "p95": 3286.7249999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 248906.125,
              "median": 12179.125,
              "min": 0.0,
              "max": 1163601.25,
              "p5": 0.0,
              "p95": 933096.9374999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 87.375,
              "median": 8.5,
              "min": 0.0,
              "max": 279.5,
              "p5": 0.0,
              "p95": 260.95,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008646624698753429,
              "median": 0.00591930367707208,
              "min": 0.0,
              "max": 0.021980676328502424,
              "p5": 0.0,
              "p95": 0.019742316280013345,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15042589824953495,
              "median": 0.023201765578354402,
              "min": 0.0059230217088972,
              "max": 0.6666666666666666,
              "p5": 0.006271841992787898,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023679103030204386,
              "median": 2.2321244069431397e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 5.762545103644255e-09,
              "p95": 0.0012286543848555858,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026802457902032474,
              "median": 0.00013390868414187522,
              "min": 0.0,
              "max": 0.01743815778170756,
              "p5": 0.0,
              "p95": 0.012216155381901142,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": 0.13636363636363646,
            "market": 2.6163632472098186e-05,
            "sector": 0.001085440278988603,
            "peers": 0.002873563218390718,
            "vs_market": 0.13633747273116437,
            "vs_sector": 0.13527819608464786,
            "vs_peers": 0.13349007314524575
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 80.82437275985663,
          "score_pca_percentile": 80.82437275985663,
          "rank_pca": 108,
          "total": 558,
          "adv_notional_sgd": 602462.0,
          "adv_volume_shares": 2423300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004249604844882716,
          "votes": 171.0,
          "trades": 171.0,
          "spread_pct": 0.02202090592334495,
          "spread_ticks": 1.082051282051282,
          "amihud": 3.850778483005074e-08,
          "volatility": 0.020000000000000018
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5596716358794178,
          "loadings": {
            "log_adv": 0.5251972699670885,
            "log_trades": 0.471064064037807,
            "log_turnover": 0.4952761722342145,
            "neg_spread": 0.3841630854989586,
            "neg_amihud": 0.11020573232755186,
            "neg_vol": -0.3118355475413217
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
          "peer_median_adv": 16648.0,
          "peer_median_score_pca": 49.01433691756272,
          "peer_median_trades": 8.0,
          "peer_median_volatility": 0.008303983483118782,
          "peer_median_spread_pct": 0.021134715352102953,
          "peer_median_amihud": 1.1119606313221315e-07,
          "peer_median_turnover_ratio": 0.00017962823785960417,
          "target_vs_peer": {
            "score_pca_delta": 31.81,
            "adv_delta_pct": 3518.8,
            "trades_delta_pct": 2037.5,
            "volatility_delta_pct": -140.85,
            "spread_pct_delta_pct": -4.19,
            "amihud_delta_pct": 65.37,
            "turnover_ratio_delta_pct": 2265.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 602462.0,
            "trades": 171.0,
            "volatility": 0.020000000000000018,
            "spread_pct": 0.02202090592334495,
            "spread_ticks": 1.082051282051282,
            "amihud": 3.850778483005074e-08,
            "turnover_ratio": 0.004249604844882716,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 1001222.0,
            "trades": 183.0,
            "volatility": 0.015075376884422176,
            "spread_pct": 0.007159140269054322,
            "spread_ticks": 1.2343324250681198,
            "amihud": 1.716333921599277e-08,
            "turnover_ratio": 0.015527573142808056,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.0,
            "rank_pca": 280,
            "adv": 30294.0,
            "trades": 12.0,
            "volatility": 0.005434782608695676,
            "spread_pct": 0.0120361083249749,
            "spread_ticks": 2.1785714285714284,
            "amihud": 1.9347404313542508e-07,
            "turnover_ratio": 0.00022398350839845176,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.15412186379928,
            "rank_pca": 374,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": 6.57570277823443e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.028673835125446,
            "rank_pca": 291,
            "adv": 2346.0,
            "trades": 4.0,
            "volatility": 0.021739130434782594,
            "spread_pct": 0.030233322379231004,
            "spread_ticks": 1.3636363636363635,
            "amihud": 7.536481771274498e-07,
            "turnover_ratio": 3.159117696832235e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5089605734767026,
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
            "score_pca": 5.913978494623656,
            "rank_pca": 526,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.38181818181818183,
            "spread_ticks": 16.8,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.01433691756273,
            "rank_pca": 146,
            "adv": 457994.0,
            "trades": 129.0,
            "volatility": 0.012269938650306678,
            "spread_pct": 0.007313949671519523,
            "spread_ticks": 1.2133333333333334,
            "amihud": 2.891808312900122e-08,
            "turnover_ratio": 0.002123284394667587,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 76.52329749103941,
            "rank_pca": 132,
            "adv": 403071.0,
            "trades": 316.0,
            "volatility": 0.011173184357541888,
            "spread_pct": 0.006256397281227363,
            "spread_ticks": 1.103448275862069,
            "amihud": 1.8502821957890842e-08,
            "turnover_ratio": 0.0016484266578777145,
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
              "mean": 0.008732155238370067,
              "median": 0.006192484662576603,
              "min": 0.0,
              "max": 0.10000000000000009,
              "p5": 0.0,
              "p95": 0.028368794326240954,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3138144.4183211196,
              "median": 15030.0,
              "min": 0.0,
              "max": 309150489.0,
              "p5": 0.0,
              "p95": 11868702.199999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0963768644827935,
              "median": 0.023809523809523832,
              "min": 0.00025777693161299257,
              "max": 1.3043478260869563,
              "p5": 0.0034951267658177927,
              "p95": 0.5112253436939627,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004972007735504595,
              "median": 0.00032052915615159166,
              "min": 0.0,
              "max": 1.4501351262276712,
              "p5": 0.0,
              "p95": 0.009990112257664944,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002211116233322482,
              "median": 1.0914916494041928e-07,
              "min": 0.0,
              "max": 0.04901960784313725,
              "p5": 0.0,
              "p95": 6.776450892848033e-05,
              "count": 548
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 423.2867383512545,
              "median": 8.0,
              "min": 0.0,
              "max": 12008.0,
              "p5": 0.0,
              "p95": 2169.35,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008715990300816628,
              "median": 0.00645670754366412,
              "min": 0.0,
              "max": 0.021739130434782594,
              "p5": 0.0,
              "p95": 0.021130434782608693,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2907755.75,
              "median": 16648.0,
              "min": 0.0,
              "max": 21622720.0,
              "p5": 0.0,
              "p95": 14405195.699999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14623953283054272,
              "median": 0.026127114151287975,
              "min": 0.0012014494580102973,
              "max": 0.6666666666666666,
              "p5": 0.003286641241875706,
              "p95": 0.5669696969696968,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004129636415887266,
              "median": 0.00017962823785960417,
              "min": 0.0,
              "max": 0.015527573142808056,
              "p5": 0.0,
              "p95": 0.014597095533177177,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023605665104825305,
              "median": 1.1599091398273791e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.371767980752788e-10,
              "p95": 0.0012266788712016127,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 645.125,
              "median": 8.0,
              "min": 0.0,
              "max": 4790.0,
              "p5": 0.0,
              "p95": 3177.5499999999975,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 237241.125,
              "median": 16648.0,
              "min": 0.0,
              "max": 1001222.0,
              "p5": 0.0,
              "p95": 811092.1999999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 80.625,
              "median": 8.0,
              "min": 0.0,
              "max": 316.0,
              "p5": 0.0,
              "p95": 269.44999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008211551616968626,
              "median": 0.008303983483118782,
              "min": 0.0,
              "max": 0.021739130434782594,
              "p5": 0.0,
              "p95": 0.019406816692156444,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14503303177696666,
              "median": 0.021134715352102953,
              "min": 0.006256397281227363,
              "max": 0.6666666666666666,
              "p5": 0.006572357326966798,
              "p95": 0.5669696969696968,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023605771619657155,
              "median": 1.1119606313221315e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.00716872559747e-09,
              "p95": 0.0012266788712016127,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024612664810051113,
              "median": 0.00017962823785960417,
              "min": 0.0,
              "max": 0.015527573142808056,
              "p5": 0.0,
              "p95": 0.010836072080958884,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.03846153846153888,
            "market": 0.021281874721565064,
            "sector": -0.026139939734661555,
            "peers": -0.002628314638406737,
            "vs_market": -0.059743413183103944,
            "vs_sector": -0.012321598726877325,
            "vs_peers": -0.03583322382313214
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Latest snapshot: notional ADV was S$430,575, which is 28.53% below the 30d baseline (S$602,462), signaling a recent slowdown in trading depth. Spread was 2.50%, 13.35% worse than the 30d baseline (2.20%), implying higher trading cost per trade today despite...",
        "market_comparison": "Versus peers, ADV is far higher (S$430,575 vs peer median S$30,296.5; +1321.20%), but spread is better (2.50% vs 2.94%; -15.16%), which supports better day-to-day tradability than most peers. Versus the market median, ADV is also much higher (S$430,575 vs S..."
      },
      "1w": {
        "liquidity": "Over 1w, notional ADV was S$405,925, down 32.62% vs the 30d baseline (S$602,462), showing softer participation recently. Spread widened to 2.41% (+9.44% vs 30d), meaning trading cost worsened even as trades stayed elevated at 89 vs a market median of 9.",
        "market_comparison": "Against peers, TKU remains a volume leader (S$405,925 vs S$32,287.5; +1157.22%), but spread is worse (2.41% vs 2.26%; +6.45%), so size is easy to find yet costs run higher than peer norms. Versus market, ADV is far higher (S$405,925 vs S$18,674.2) while spr..."
      },
      "2w": {
        "liquidity": "Over 2w, notional ADV was S$418,250, down 30.58% vs the 30d baseline, confirming the recent slowdown persists beyond a single week. Spread was 2.52% (+14.36% vs 30d), a clear deterioration in trading cost; trades stayed high at 110.5, but each trade is happ...",
        "market_comparison": "Versus peers, ADV is extremely strong (S$418,250 vs S$12,179.125; +3334.15%), but spread is worse (2.52% vs 2.32%; +8.54%), indicating liquidity quantity is strong but quality (cost) lags peers. Versus market, ADV is much higher (S$418,250 vs S$14,536.1) wh..."
      },
      "30d": {
        "liquidity": "Primary (30d): notional ADV is S$602,462 with 171 trades and 0.4250% turnover, supporting consistent day-to-day liquidity for a S$131.2M small cap. Spread is 2.20%; this is better than market (2.38%) and sector (2.61%), but still higher than peers (2.11%)...",
        "market_comparison": "Versus peers, TKU is a clear liquidity leader on activity (S$602,462 vs S$16,648; +3518.83% ADV) and engagement (171 trades vs peer median 8), which improves reliability for larger tickets. The trade-off is cost: spread is 2.20% vs pee% (+4.19%), and volati..."
      }
    }
  },
  "q02": {
    "regime_switching": {
      "valid": true,
      "regime_method": "activity_day_clustering",
      "n_regimes": 3,
      "current_regime": 0,
      "regimes": [
        {
          "id": 0,
          "label": "Low Activity",
          "liquidity_score": null,
          "pct_time": 0.375
        },
        {
          "id": 1,
          "label": "Medium Activity",
          "liquidity_score": null,
          "pct_time": 0.4583333333333333
        },
        {
          "id": 2,
          "label": "High Activity",
          "liquidity_score": null,
          "pct_time": 0.16666666666666666
        }
      ],
      "transitions": [
        [
          0.625,
          0.25,
          0.125
        ],
        [
          0.36363636363636365,
          0.6363636363636364,
          0.0
        ],
        [
          0.0,
          0.5,
          0.5
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
        "text": "Liquidity score: 80.82% — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "drivers": {
        "text": "Company-driven",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "exec_check": {
        "text": "High impact risk",
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
      "action_plan": "border-emerald-400/30",
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
      "As of: 2026-02-26",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "Strong 30d liquidity score, but recent trading slowed and spreads widened—expect higher trading costs if current conditions persist.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "30d liquidity is strong for a S$131.2M small cap, but the last 1–2 weeks show lower activity and higher trading cost vs the 30d baseline.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "TKU trades far more than market/sector/peers on notional and trade count, while spreads are better than market/sector but slightly worse than peers.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "As of 2026-02-26 | TKU (XSES) | 131.2M small cap | Sector: Software - Application",
    "perf_insight": "Short-term surge (2w +13.64%) vs flat market (+0.00%), modestly positive sector (+0.11%) and peers (+0.29%), but 30d is down (-3.85%) while market is up (+2.13%).",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Decomposes TKU moves into broad market, software sector rotation, and company-specific drivers (news, fundamentals, liquidity shocks).",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "67.9% of TKU’s moves are company-specific, vs 12.5% market and 19.6% sector. This means headlines, guidance, and single-name liquidity events will dominate—prioritize clear, proactive IR messaging."
      },
      {
        "title": "Market Link",
        "text": "Market influence is modest at 12.5%, and the market beta is -0.81 (often moves opposite the market). In broad sell-offs, TKU may not reliably drop with the index—risk monitoring must be name-specific."
      },
      {
        "title": "Sector Link",
        "text": "Sector explains 19.6% of moves, but sector beta is +5.61 (very sensitive when the software sector moves). If software sentiment swings, TKU can amplify it—prepare comms for sector-driven days."
      }
    ],
    "drivers_pie_title": "Driver Mix (Latest Window)",
    "drivers_pie_note": "Shares show what portion of price movement is typically explained by market, sector, vs TKU-specific forces ove-12-25 to 2026-02-26.",
    "lead_lag_title": "Lead–Lag vs Market and Sector",
    "lead_lag_note": "Best lag indicates whether TKU tends to react after (positive lag) or move with (zero lag) the benchmark; use this to time communications, not trading.",
    "rolling_title": "How Drivers Evolved Over Time",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Only one rolling window was provided, so trend in correlation over time is unavailable; treat the latest mix as the current baseline.",
    "drivers_bottom_line": "TKU is mostly “its own story” (67.9% company-driven), with a meaningful but secondary sector link (19.6%) and limited market tie (12.5%).",
    "drivers_wtd_title": "What This Means for Trading",
    "drivers_wtd_list": [
      "Communication: Because 67.9% is company-driven, tighten disclosure cadence around results, guidance, and material updates to reduce rumor-driven volatility and protect credibility.",
      "Liquidity planning: With a negative market link (beta -0.81) and large sector sensitivity (beta +5.61), stress-test cash and funding narratives for software-sector shock days, not just index drawdowns.",
      "Risk monitoring: Set alerts for sector moves because 19.6% is sector-driven and amplified (beta +5.61); separate sector-wide pressure from TKU-specific issues when responding publicly."
    ],
    "regime_title": "Trading Activity Regimes",
    "regime_subtitle": "Regimes classify days into Low/Medium/High activity to understand how stable the liquidity backdrop is; current regime indicates the present environment for liquidity planning.",
    "regime_badge_text": "Current: Low Activity (Regime 0)",
    "regime_pie_title": "Time Spent in Each Activity Regime",
    "transition_title": "Regime Stability (Transition Probabilities)",
    "transition_cols": [
      "From \\ To",
      "Low Activity",
      "Medium Activity"
    ],
    "transition_note_template": "Stability check: from {from_regime}, probability of staying is {stay_prob}; probability of shifting to {to_regime} is {shift_prob}.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Small-cap (131.2M) with wide spread (1.98%) and limited displayed liquidity; sell impact rises quickly beyond ~S$100K.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Displayed depth is based on TOP 10 levels per side (L2): bid S$617,384 vs ask S$1,677,806. This is displayed liquidity only; full-orderbook coverage is planned soon.",
    "peer_capacity_title": "Peer Liquidity Capacity (Relative)",
    "peer_capacity_note": "Peer capacity data is shown for impact at a 50k-size as % of ADV; TKU’s %ADV metrics are unavailable here, so comparison is directional only.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "At 1.98% spread and only S$617,384 of displayed bid value (top 10 levels), sell orders above S$100K show steep impact and incomplete immediate fill, raising execution cost and headline risk for IR.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "30d view (3,098 trades): mostly retail by trade count, but most notional is Mixed + Institutional.",
    "trader_retail_threshold": "Retail: <S$13.5K per trade",
    "trader_mixed_threshold": "Mixed: S$13.5K–S$67.5K per trade",
    "trader_instit_threshold": "Institutional: ≥S$67.5K per trade",
    "peer_trader_title": "Peer Comparison: Trader Mix (30d)",
    "peer_trader_subtitle": "TKU has more institutional notional than most peers, despite similar retail-heavy trade counts.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Across 4,437 trades, 898 (20.2%) changed the price; most trades do not move the quote.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Most activity is in continuous trading (94.2%); auctions are 5.8% and concentration is moderate (HHI 0.196).",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Session split is based on notional activity: Opening + Closing are auction windows; Continuous is regular trading.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI summarizes how concentrated trading is across the day (higher = more clustered into a few time intervals).",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Peak time highlights where the largest share of daily notional clusters; clustering increases short bursts of volatility risk.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Lower HHI suggests steadier liquidity through the day; higher auction share suggests more trading in auction windows.",
    "intraday_insight": "Trading is overwhelmingly in the continuous session (94.2%) with a measurable open/close presence (auctions 5.8%). Peak activity is at 09:00 (13.4%), so price jumps can cluster early. HHI 0.196 implies moderate clustering; versus peers, TKU’s HHI (~0.190) i...",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is minimal (1M avg short ratio 0.32%, max 2.10%) and the position is easily unwound (days-to-cover max 0.004; current near zero). Shorts are covering sharply (-78% MoM: 0.91% in 2026-01 to 0.20% in 2026-02), reducing downside pressure and eas...",
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
          "body": "Composite liquidity score across volume, trading activity and trading cost; higher is better. TKU scores 80.8 with rank 108/558."
        },
        "value": "81",
        "suffix": "/100",
        "bar_pct": 81,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "Rank 108/558 • Above-average liquidity for a small cap",
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
          "body": "Average bid-ask spread over the selected window; lower means lower trading friction. TKU spread is 2.20% vs peer median 2.11%."
        },
        "value": "2.20",
        "suffix": "%",
        "bar_pct": 22,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "2.20% vs peers 2.11% (wider/worse) • Recent costs worsened: +13.35% (1d) and +9.44% (1w) vs 30d",
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
          "body": "Average daily traded value in local currency over the selected window; higher supports larger turnover with less disruption. TKU ADV is S$602,462 vs peer median S$16,648."
        },
        "value": "S$602K",
        "suffix": "",
        "bar_pct": 80,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500/20",
        "subtext": "S$602K/day vs peers S$16.6K/day (+3518.8%) • Recent slowdown: -28.53% (1d), -32.62% (1w), -30.58% (2w) vs 30d",
        "interpretation": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Price-change drivers",
          "body": "Share of price moves explained by company vs sector vs market; higher company-specific means moves are driven more by stock-specific factors than broad conditions. TKU: 67.9% company, 19.6% sector, 12.5% market."
        },
        "value": "67.9",
        "suffix": "company-specific",
        "bar_pct": 68,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500/20",
        "subtext": "67.9% company-driven vs 19.6% sector and 12.5% market • Liquidity perception can shift on TKU-specific news flow",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is strong on a 30d basis (score 80.8; rank 108/558), supported by S$602K/day ADV and 171 trades/day—this gives the company credibility with liquidity-sensitive investors despite a 131.2M small-cap size.",
      "Trading quality is slipping short-term: ADV is down -32.62% (1w) vs 30d and spread is up +9.44% (1w) vs 30d, implying higher friction and potentially more investor reluctance if the pattern persists.",
      "Costs are also worse than peers on spread (2.20% vs 2.11% median), even though volume is far higher (+3518.8% ADV vs peers); prioritize actions that improve quote quality and reduce perceived risk around TKU-specific catalysts (67.9% company-driven moves)."
    ],
    "perf_badge": "Context",
    "footer": "Liquidity Analysis Report • Generated by Deltablock",
    "liq_tiles": [
      {
        "title": "Liquidity Score (30d)",
        "value": "80.82% (Rank 108/558)",
        "sub": "Down to 71.33% on latest 1d snapshot (161/558), reflecting weaker recent conditions vs the 30d baseline.",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Notional ADV (30d)",
        "value": "S$602,462",
        "sub": "Recent slowdown: 1w S$405,925 (-32.62%) and 1d S$430,575 (-28.53%) vs 30d baseline.",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (30d)",
        "value": "2.20%",
        "sub": "Cost worsened recently: 1d 2.50% (+13.35%), 1w 2.41% (+9.44%), 2w 2.52% (+14.36%) vs 30d baseline.",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Over 30d, TKU has strong, reliable liquidity (S$602,462 ADV; 171 trades; 0.4250% turnover), making it easier to support consistent trading interest. The red flag is recent deterioration versus that baseline: ADV is down ~29–33% and spread is up ~9–14%, incr...",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.2525",
        "note": "Reference price at snapshot; impact estimates below are measured versus this level.",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.98%",
        "note": "Wide gap between buyers and sellers; this raises trading cost and makes price moves look larger on small notional trades.",
        "color": "text-red-500"
      },
      {
        "title": "Depth",
        "value": "Bid S$617K / Ask S$1.68M",
        "note": "Top-10 displayed liquidity is ask-heavy; sells hit the thinner bid side first, increasing downside impact risk.",
        "color": "text-red-500"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.15% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.94% with 61.7% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.94% with 24.7% fill.",
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
      "overall": "Liquidity is strong on a 30d view (score 80.82%, rank 108/558), but recent periods show deteriorating conditions versus that baseline: lower ADV and wider spreads raise trading friction.",
      "strengths": [
        "Scale of activity is a standout: 30d notional ADV S$602,462 vs peer median S$16,648 (+3518.83%), supporting larger day-to-day capacity.",
        "High trade frequency: 30d trades 171 vs peer median 8 and market median 8, improving continuity of price discovery (more frequent prints)."
      ],
      "concerns": [
        "Recent slowdown: ADV fell from S$602,462 (30d) to S$405,925 (1w, -32.62%) and S$430,575 (1d, -28.53%), which can make larger orders move the price more than expected.",
        "Recent cost deterioration: spread increased from 2.20% (30d) to 2.41% (1w, +9.44%) and 2.50% (1d, +13.35%), directly increasing implementation cost.",
        "Trading quality vs peers is mixed: 30d spread is worse than peers (2.20% vs 2.11%, +4.19%) while volatility is higher (2.00% vs 0.83%), increasing uncertainty around achieved prices."
      ],
      "peer_context": "TKU is a liquidity leader on volume and trade count across all windows (e.g., 1d ADV S$430,575 vs peers S$30,296.5; 30d ADV S$602,462 vs peers S$16,648), but it is not a cost leader because spreads are typically wider than peers outside the 1d snapshot."
    },
    "market_comparison": {
      "adv": "TKU’s notional trading activity is far above market, sector, and peer medians, but recent weeks are materially below the 30d baseline, which is the main near-term watch item.",
      "spread": "Spreads are competitive versus the market and sector on the 30d view, but generally worse than peers and have widened versus the 30d baseline in recent periods—this is a direct cost headwind.",
      "volatility": "Price movement is elevated versus market/sector/peers in multi-day windows, which can increase uncertainty in achieved prices even when volume is strong.",
      "trades": "Trade counts are consistently far above market/sector/peer medians, supporting continuous two-way activity; however, recent wider spreads mean those trades are occurring at higher cost than the 30d baseline."
    },
    "performance": {
      "overall": "Mixed",
      "conclusion": "Momentum improved from 1w (+2.04%) to 2w (+13.64%), beating market (-0.74% / +0.00%), sector (-0.16% / +0.11%), and peers (+0.29% / +0.29%); this supports an IR message that recent news-flow or execution is being rewarded. However, 30d is still negative (-3..."
    },
    "drivers": {
      "overall": "Variance decomposition shows TKU is primarily company-driven (67.9%), not a market proxy (12.5%) and only partly sector-rotational (19.6%). Practical implication: CEO/CFO messaging and company events will move the stock more than macro news.",
      "interpretation": "Strong",
      "rolling_change": "Trend over rolling windows is unavailable because only 2025-12-25 to 2026-02-26 is provided; use 67.9% company / 19.6% sector / 12.5% market as the current correlation baseline.",
      "beta": "Directional sensitivities: market beta is -0.81 (often opposite-market), while sector beta is +5.61 (large amplification of software-sector moves). Practical implication: manage narratives separately for sector shocks vs idiosyncratic TKU news."
    },
    "regime": {
      "overall": "Activity regimes: Medium Activity dominates (45.8% of days), Low Activity is also frequent (37.5%), and High Activity is less common (16.7%). This mix suggests liquidity conditions can shift, but extreme activity is not the norm.",
      "current": "Current regime is 0 (Low Activity). Practical implication: plan disclosures and investor engagement assuming thinner day-to-day activity; surprises can translate into larger price jumps when activity is low.",
      "transitions": "Regime persistence is moderate: Low Activity stays Low 62.5% of the time and shifts to Medium 25.0% (to High 12.5%). High Activity is fragile (stays High 50.0% and shifts to Medium 50.0%), while Medium stays Medium 63.6% and shifts to Low 36.4%.",
      "trading_implications": "Liquidity backdrop is somewhat stable within Low/Medium (62.5% and 63.6% stay rates), but High Activity does not persist (50% chance of dropping to Medium). Practical implication: treat the current Low Activity as normal-but-fragile for sudden news; keep in..."
    },
    "execution": {
      "overall": "Spread 1.98% plus limited bid depth (S$617,384 across top 10 levels) makes execution costs high and sell-side market impact material beyond ~S$100K.",
      "concern": "A S$1.0M sell shows ≈-6.94% impact with 61.7% fill, and S$2.5M shows the same ≈-6.94% with only 24.7% fill—sizes this large can distort the tape and complicate capital markets messaging.",
      "peer_context": "Peers show wide dispersion in 50k capacity (%ADV): from 98.3 (ITS) and 207.8 (5DD) up to 54,555.4 (U77); TKU’s %ADV is unavailable, but the observed -6.94% at S$1.0M suggests weaker practical capacity than the more liquid peer set."
    },
    "trader_composition": {
      "overall": "In the last 30d, retail is 90.0% of trades but only 36.7% of notional; Mixed is 9.2% of trades yet 50.0% of notional, and Institutional is 0.8% of trades but 13.3% of notional. This means many small tickets set the “noise,” while larger tickets drive most c...",
      "retail_heavy": "Trade flow is retail-dominated by count (90.0% in 30d; 93.1% in 1d), but retail’s notional share can swing (36.7% in 30d vs 49.2% in 1d). This variability can make headline activity look strong even when larger-money participation is inconsistent—IR should...",
      "institutional_gap": "Institutional participation is small by trade count (0.8% over 30d; 1.4% in 1d) but meaningful by notional (13.3% over 30d; 21.3% in 1d), implying infrequent but larger trades. Practical implication: liquidity perception can change quickly day-to-day; manag...",
      "peer_comparison": "Versus peers that are often 0.0% institutional by notional (e.g., 532, KUX, U77, LVR), TKU stands out with 13.3% institutional notional while still being retail-heavy by trade count (90.0%). This is a relative advantage for price quality and credibility wit..."
    },
    "price_moving": {
      "overall": "Only 898 of 4,437 trades moved the price (20.2%), so most prints are liquidity-taking without changing the quote. Business implication: reducing unnecessary micro-volatility is more about the minority of impactful trades than overall trade noise.",
      "interpretation": "Moderate",
      "asymmetry": "Price-moving trades are roughly balanced: 448 positive vs 450 negative movers. However, the negative side shows higher institutional share (institutional index 200.0% vs 67.0% on positives), suggesting down-moves are more tied to larger players—monitor sell..."
    },
    "intraday": {
      "overall": "In 1M, 94.2% of notional trades in continuous, with 5.8% in auctions (open 1.7%, close 3.2%). Peak trading is at 09:00 with 13.4% of volume, meaning early-session prints can disproportionately shape the day’s price narrative.",
      "hhi_interpretation": "HHI is 0.196 in 1M (moderately concentrated), improving versus 1W (0.284) and 2W (0.248), but worse than 1D (0.235 is higher concentration than 1M, so 1D is more clustered). Practical implication: liquidity has recently been less evenly distributed intra-da...",
      "best_times": "Activity is concentrated at 09:00 (13.4% of volume), and auctions are non-trivial (5.8% in 1M). Implication: opening prints can amplify perceived momentum; IR should be cautious interpreting “early moves” as fundamental signal without broader-day confirmation.",
      "peer_ranking": "Against peers, TKU’s HHI is ~0.190, lower than ITS (0.253), LVR (0.341), 5DD (0.372) and far below NXR/U77/532/KUX (0.506–0.801), indicating steadier liquidity than most. Despite higher auction % levels shown in the peer table, TKU’s lower HHI suggests less..."
    },
    "short_selling": {
      "overall": "Short ratio is low versus trading volume: 1W and 2W average short ratio is near zero; 1M average is 0.32% with a 2.10% peak. This signals limited bearish positioning and low risk of forced covering-driven volatility; management can prioritize operating upda...",
      "level": "Days-to-cover is near zero (max 0.004), meaning the short position can be covered quickly and is not building into a crowded trade. Practical implication: low probability that lending constraints amplify price moves, but continue monitoring for any jump fro...",
      "correlation": "N/A (no Granger-causality or short-vs-returns relationship data provided). Practical implication: do not attribute recent price moves to short flows without additional data; focus IR messaging on fundamentals and liquidity disclosure.",
      "trend": "Short interest is decreasing materially: -78% MoM from 0.91% (2026-01) to 0.20% (2026-02). This suggests shorts are stepping back rather than pressing; IR should watch for any reversal toward January levels as an early warning of renewed negative positioning."
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
        "5DD",
        "BN2"
      ],
      "scores": [
        80.82437275985663,
        82.25806451612904,
        50.0,
        33.15412186379928,
        48.028673835125446,
        2.5089605734767026,
        5.913978494623656,
        74.01433691756273,
        76.52329749103941
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
        602462.0,
        1001222.0,
        30294.0,
        3002.0,
        2346.0,
        0.0,
        0.0,
        457994.0,
        403071.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.020000000000000018,
        "adv": 602462.0,
        "spread_pct": 0.02202090592334495,
        "turnover_ratio": 0.004249604844882716,
        "amihud": 3.850778483005074e-08,
        "trades": 171.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.008732155238370067,
          "median": 0.006192484662576603,
          "min": 0.0,
          "max": 0.10000000000000009,
          "p5": 0.0,
          "p95": 0.028368794326240954,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3138144.4183211196,
          "median": 15030.0,
          "min": 0.0,
          "max": 309150489.0,
          "p5": 0.0,
          "p95": 11868702.199999984,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0963768644827935,
          "median": 0.023809523809523832,
          "min": 0.00025777693161299257,
          "max": 1.3043478260869563,
          "p5": 0.0034951267658177927,
          "p95": 0.5112253436939627,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004972007735504595,
          "median": 0.00032052915615159166,
          "min": 0.0,
          "max": 1.4501351262276712,
          "p5": 0.0,
          "p95": 0.009990112257664944,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002211116233322482,
          "median": 1.0914916494041928e-07,
          "min": 0.0,
          "max": 0.04901960784313725,
          "p5": 0.0,
          "p95": 6.776450892848033e-05,
          "count": 548
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 423.2867383512545,
          "median": 8.0,
          "min": 0.0,
          "max": 12008.0,
          "p5": 0.0,
          "p95": 2169.35,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.008715990300816628,
          "median": 0.00645670754366412,
          "min": 0.0,
          "max": 0.021739130434782594,
          "p5": 0.0,
          "p95": 0.021130434782608693,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2907755.75,
          "median": 16648.0,
          "min": 0.0,
          "max": 21622720.0,
          "p5": 0.0,
          "p95": 14405195.699999988,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14623953283054272,
          "median": 0.026127114151287975,
          "min": 0.0012014494580102973,
          "max": 0.6666666666666666,
          "p5": 0.003286641241875706,
          "p95": 0.5669696969696968,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004129636415887266,
          "median": 0.00017962823785960417,
          "min": 0.0,
          "max": 0.015527573142808056,
          "p5": 0.0,
          "p95": 0.014597095533177177,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023605665104825305,
          "median": 1.1599091398273791e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.371767980752788e-10,
          "p95": 0.0012266788712016127,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 645.125,
          "median": 8.0,
          "min": 0.0,
          "max": 4790.0,
          "p5": 0.0,
          "p95": 3177.5499999999975,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 237241.125,
          "median": 16648.0,
          "min": 0.0,
          "max": 1001222.0,
          "p5": 0.0,
          "p95": 811092.1999999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 80.625,
          "median": 8.0,
          "min": 0.0,
          "max": 316.0,
          "p5": 0.0,
          "p95": 269.44999999999993,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.008211551616968626,
          "median": 0.008303983483118782,
          "min": 0.0,
          "max": 0.021739130434782594,
          "p5": 0.0,
          "p95": 0.019406816692156444,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14503303177696666,
          "median": 0.021134715352102953,
          "min": 0.006256397281227363,
          "max": 0.6666666666666666,
          "p5": 0.006572357326966798,
          "p95": 0.5669696969696968,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023605771619657155,
          "median": 1.1119606313221315e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 6.00716872559747e-09,
          "p95": 0.0012266788712016127,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0024612664810051113,
          "median": 0.00017962823785960417,
          "min": 0.0,
          "max": 0.015527573142808056,
          "p5": 0.0,
          "p95": 0.010836072080958884,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.020408163265306145,
        "market": -0.007433715749822212,
        "sector": -0.001612903225806539,
        "peers": 0.002873563218390718
      },
      {
        "horizon": "2W",
        "stock": 0.13636363636363646,
        "market": 2.6163632472098186e-05,
        "sector": 0.001085440278988603,
        "peers": 0.002873563218390718
      },
      {
        "horizon": "1M",
        "stock": -0.03846153846153888,
        "market": 0.021281874721565064,
        "sector": -0.026139939734661555,
        "peers": -0.002628314638406737
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
      "share_market": 0.12503498553946285,
      "share_sector": 0.19552724760991846,
      "share_idio": 0.6794377668506187,
      "beta_market": -0.8089187103739899,
      "beta_sector": 5.6064961162447755,
      "r_squared": 0.22993070535415516,
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
          0.12028557937318606,
          0.19435912886545909,
          -0.13539770271865018,
          -0.10262033825974361,
          0.08025803783373041,
          0.018459641016772194,
          -0.30238045064191976,
          0.265468814611466,
          -0.151154106159956,
          -0.4414991238447154,
          0.573019970190628
        ],
        "corr_sector": [
          -0.2603484773202062,
          0.09168754773046978,
          0.011694066703481266,
          0.19859066727112065,
          -0.17118466093669465,
          0.4585655575901818,
          0.1621618517146872,
          0.09952448130194616,
          -0.13766746028271606,
          0.11077609209465317,
          0.2317006092720929
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
          "period_label": "2025-12-25 to 2026-02-26",
          "shares": {
            "share_market": 0.12503498553946285,
            "share_sector": 0.19552724760991846,
            "share_company": 0.6794377668506187
          },
          "regression": {
            "r_squared": 0.22993070535415516
          }
        }
      },
      "rolling": {
        "ordered": [
          "2025-12-25 to 2026-02-26"
        ],
        "market": [
          12.5
        ],
        "sector": [
          19.6
        ],
        "idio": [
          67.9
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "activity_day_clustering",
        "n_regimes": 3,
        "labels": [
          "Low Activity",
          "Medium Activity",
          "High Activity"
        ],
        "pct_time": [
          0.375,
          0.4583333333333333,
          0.16666666666666666
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Activity",
            "liquidity_score": null,
            "pct_time": 0.375
          },
          {
            "id": 1,
            "label": "Medium Activity",
            "liquidity_score": null,
            "pct_time": 0.4583333333333333
          },
          {
            "id": 2,
            "label": "High Activity",
            "liquidity_score": null,
            "pct_time": 0.16666666666666666
          }
        ],
        "transitions": [
          [
            0.625,
            0.25,
            0.125
          ],
          [
            0.36363636363636365,
            0.6363636363636364,
            0.0
          ],
          [
            0.0,
            0.5,
            0.5
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 368800.0,
          "value": 92200.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 410000.0,
          "value": 100450.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 832200.0,
          "value": 199728.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 166500.0,
          "value": 39127.5
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 68500.0,
          "value": 15755.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 30000.0,
          "value": 6750.0
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 565400.0,
          "value": 124388.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 85000.0,
          "value": 18275.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 51000.0,
          "value": 10710.0
        },
        {
          "level": 10,
          "price": 0.2,
          "quantity": 50000.0,
          "value": 10000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 422600.0,
          "value": 107763.0
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 741100.0,
          "value": 192686.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 959200.0,
          "value": 254188.0
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 835500.0,
          "value": 225585.00000000003
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 849500.0,
          "value": 233612.50000000003
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 579700.0,
          "value": 162316.00000000003
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 674000.0,
          "value": 192089.99999999997
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 376500.0,
          "value": 109184.99999999999
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 280000.0,
          "value": 82600.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 392600.0,
          "value": 117780.0
        }
      ]
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 8.3,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 98.3
        },
        {
          "ticker": "5DD",
          "pct": 207.8
        },
        {
          "ticker": "BN2",
          "pct": 245.4
        },
        {
          "ticker": "LVR",
          "pct": 3416.6
        },
        {
          "ticker": "NXR",
          "pct": 53995.7
        },
        {
          "ticker": "U77",
          "pct": 54555.4
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
          "n_trades": 72,
          "first_trade_date": "2026-02-26",
          "last_trade_date": "2026-02-26",
          "period_days": 0,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9305555555555556,
            "mixed_pct": 0.05555555555555555,
            "instit_pct": 0.013888888888888888,
            "retail_qty_pct": 0.49423344000966124,
            "mixed_qty_pct": 0.2938228367852183,
            "instit_qty_pct": 0.21194372320512048,
            "retail_notional_pct": 0.4921982298184038,
            "mixed_notional_pct": 0.294385682130322,
            "instit_notional_pct": 0.21341608805127424
          },
          "trade_size": {
            "avg": 5824.888888888889,
            "median": 2500.0
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9305555555555556,
              "mixed_pct": 0.05555555555555555,
              "instit_pct": 0.013888888888888888,
              "retail_qty_pct": 0.49423344000966124,
              "mixed_qty_pct": 0.2938228367852183,
              "instit_qty_pct": 0.21194372320512048,
              "retail_notional_pct": 0.4921982298184038,
              "mixed_notional_pct": 0.294385682130322,
              "instit_notional_pct": 0.21341608805127424,
              "avg_trade_size": 5824.888888888889,
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
              "avg_trade_size": 3915.269230769231,
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
              "avg_trade_size": 41.0,
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
              "avg_trade_size": 215.0,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9249448123620309,
              "mixed_pct": 0.06181015452538632,
              "instit_pct": 0.013245033112582781,
              "retail_qty_pct": 0.4595165922144225,
              "mixed_qty_pct": 0.29395341416719845,
              "instit_qty_pct": 0.24652999361837907,
              "retail_notional_pct": 0.45813253582469754,
              "mixed_notional_pct": 0.2961052272346932,
              "instit_notional_pct": 0.24576223694060928,
              "avg_trade_size": 5711.679911699779,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8865248226950354,
              "mixed_pct": 0.0851063829787234,
              "instit_pct": 0.028368794326241134,
              "retail_qty_pct": 0.1291414752116082,
              "mixed_qty_pct": 0.3739621120515921,
              "instit_qty_pct": 0.4968964127367997,
              "retail_notional_pct": 0.12908074594609556,
              "mixed_notional_pct": 0.37399402946695115,
              "instit_notional_pct": 0.4969252245869533,
              "avg_trade_size": 7943.265957446809,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7794871794871795,
              "mixed_pct": 0.2,
              "instit_pct": 0.020512820512820513,
              "retail_qty_pct": 0.2856019570155513,
              "mixed_qty_pct": 0.4723921020443823,
              "instit_qty_pct": 0.2420059409400664,
              "retail_notional_pct": 0.28503703815628934,
              "mixed_notional_pct": 0.4740747071511406,
              "instit_notional_pct": 0.24088825469257008,
              "avg_trade_size": 10860.594871794872,
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
          "n_trades": 304,
          "first_trade_date": "2026-02-20",
          "last_trade_date": "2026-02-26",
          "period_days": 6,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.875,
            "mixed_pct": 0.1118421052631579,
            "instit_pct": 0.013157894736842105,
            "retail_qty_pct": 0.37773776637726914,
            "mixed_qty_pct": 0.41965518942383584,
            "instit_qty_pct": 0.20260704419889503,
            "retail_notional_pct": 0.37595551430533036,
            "mixed_notional_pct": 0.421647826962912,
            "instit_notional_pct": 0.2023966587317577
          },
          "trade_size": {
            "avg": 6726.881578947368,
            "median": 2450.0
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.875,
              "mixed_pct": 0.1118421052631579,
              "instit_pct": 0.013157894736842105,
              "retail_qty_pct": 0.37773776637726914,
              "mixed_qty_pct": 0.41965518942383584,
              "instit_qty_pct": 0.20260704419889503,
              "retail_notional_pct": 0.37595551430533036,
              "mixed_notional_pct": 0.421647826962912,
              "instit_notional_pct": 0.2023966587317577,
              "avg_trade_size": 6726.881578947368,
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
              "avg_trade_size": 3390.75,
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
              "avg_trade_size": 1285.75,
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
              "retail_pct": 0.9373531714956931,
              "mixed_pct": 0.050117462803445575,
              "instit_pct": 0.012529365700861394,
              "retail_qty_pct": 0.27776459420977695,
              "mixed_qty_pct": 0.3556681808936199,
              "instit_qty_pct": 0.36656722489660315,
              "retail_notional_pct": 0.2774657729237299,
              "mixed_notional_pct": 0.355578654632978,
              "instit_notional_pct": 0.3669555724432921,
              "avg_trade_size": 4160.424823805794,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9152542372881356,
              "mixed_pct": 0.0847457627118644,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.5974477958236659,
              "mixed_qty_pct": 0.4025522041763341,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.5990131284594833,
              "mixed_notional_pct": 0.4009868715405167,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5303.525423728814,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8805031446540881,
              "mixed_pct": 0.09905660377358491,
              "instit_pct": 0.020440251572327043,
              "retail_qty_pct": 0.31230409585303337,
              "mixed_qty_pct": 0.39533362899043123,
              "instit_qty_pct": 0.2923622751565354,
              "retail_notional_pct": 0.3095762503590417,
              "mixed_notional_pct": 0.39677453059778967,
              "instit_notional_pct": 0.29364921904316865,
              "avg_trade_size": 7115.340932914046,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8249336870026526,
              "mixed_pct": 0.16180371352785147,
              "instit_pct": 0.013262599469496022,
              "retail_qty_pct": 0.3426451576639874,
              "mixed_qty_pct": 0.47709516047439715,
              "instit_qty_pct": 0.18025968186161542,
              "retail_notional_pct": 0.34056899878395813,
              "mixed_notional_pct": 0.47809671829435135,
              "instit_notional_pct": 0.1813342829216905,
              "avg_trade_size": 8581.1299734748,
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
          "n_trades": 770,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-02-26",
          "period_days": 15,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8974025974025974,
            "mixed_pct": 0.09610389610389611,
            "instit_pct": 0.006493506493506494,
            "retail_qty_pct": 0.4162473944204906,
            "mixed_qty_pct": 0.46994089260729277,
            "instit_qty_pct": 0.11381171297221666,
            "retail_notional_pct": 0.4136585479479838,
            "mixed_notional_pct": 0.4704286003015903,
            "instit_notional_pct": 0.11591285175042593
          },
          "trade_size": {
            "avg": 5519.658441558441,
            "median": 1237.5
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8974025974025974,
              "mixed_pct": 0.09610389610389611,
              "instit_pct": 0.006493506493506494,
              "retail_qty_pct": 0.4162473944204906,
              "mixed_qty_pct": 0.46994089260729277,
              "instit_qty_pct": 0.11381171297221666,
              "retail_notional_pct": 0.4136585479479838,
              "mixed_notional_pct": 0.4704286003015903,
              "instit_notional_pct": 0.11591285175042593,
              "avg_trade_size": 5519.658441558441,
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
              "avg_trade_size": 2179.659090909091,
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
              "avg_trade_size": 60.0,
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
              "retail_pct": 0.946865037194474,
              "mixed_pct": 0.044633368756641874,
              "instit_pct": 0.008501594048884165,
              "retail_qty_pct": 0.3078151986183074,
              "mixed_qty_pct": 0.38092976396085204,
              "instit_qty_pct": 0.31125503742084054,
              "retail_notional_pct": 0.30698434652217715,
              "mixed_notional_pct": 0.38041998082017253,
              "instit_notional_pct": 0.3125956726576503,
              "avg_trade_size": 3313.900637619554,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9411764705882353,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6323101053103294,
              "mixed_qty_pct": 0.3676898946896706,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6340905177714918,
              "mixed_notional_pct": 0.36590948222850816,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 3985.7843137254904,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8722710980775497,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.016617790811339198,
              "retail_qty_pct": 0.3137846301650793,
              "mixed_qty_pct": 0.44267027556327426,
              "instit_qty_pct": 0.24354509427164645,
              "retail_notional_pct": 0.3125171509702975,
              "mixed_notional_pct": 0.4409766135334578,
              "instit_notional_pct": 0.24650623549624467,
              "avg_trade_size": 6991.36917562724,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8594040968342644,
              "mixed_pct": 0.1303538175046555,
              "instit_pct": 0.010242085661080074,
              "retail_qty_pct": 0.3618586033950617,
              "mixed_qty_pct": 0.4909818672839506,
              "instit_qty_pct": 0.14715952932098766,
              "retail_notional_pct": 0.3591740668327871,
              "mixed_notional_pct": 0.49156500827348193,
              "instit_notional_pct": 0.149260924893731,
              "avg_trade_size": 6724.835195530726,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8333333333333334,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.4216439976345358,
              "mixed_qty_pct": 0.5783560023654643,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.4291572504003472,
              "mixed_notional_pct": 0.5708427495996528,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 5568.083333333333,
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
          "n_trades": 3098,
          "first_trade_date": "2026-01-27",
          "last_trade_date": "2026-02-26",
          "period_days": 30,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.9002582311168495,
            "mixed_pct": 0.09199483537766301,
            "instit_pct": 0.007746933505487412,
            "retail_qty_pct": 0.36964843945903475,
            "mixed_qty_pct": 0.4991618655671883,
            "instit_qty_pct": 0.13118969497377694,
            "retail_notional_pct": 0.36728242735238964,
            "mixed_notional_pct": 0.5000193532423735,
            "instit_notional_pct": 0.13269821940523688
          },
          "trade_size": {
            "avg": 5353.895416397676,
            "median": 892.5
          },
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9002582311168495,
              "mixed_pct": 0.09199483537766301,
              "instit_pct": 0.007746933505487412,
              "retail_qty_pct": 0.36964843945903475,
              "mixed_qty_pct": 0.4991618655671883,
              "instit_qty_pct": 0.13118969497377694,
              "retail_notional_pct": 0.36728242735238964,
              "mixed_notional_pct": 0.5000193532423735,
              "instit_notional_pct": 0.13269821940523688,
              "avg_trade_size": 5353.895416397676,
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
              "avg_trade_size": 410.2375,
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
              "retail_pct": 0.972972972972973,
              "mixed_pct": 0.02702702702702703,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.7672503398097066,
              "mixed_qty_pct": 0.23274966019029344,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.761989252762851,
              "mixed_notional_pct": 0.23801074723714893,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 2576.8198198198197,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "BN2",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9560083352627923,
              "mixed_pct": 0.03866635795322992,
              "instit_pct": 0.005325306783977773,
              "retail_qty_pct": 0.37224372175828485,
              "mixed_qty_pct": 0.3756911912251718,
              "instit_qty_pct": 0.25206508701654334,
              "retail_notional_pct": 0.3713412758436085,
              "mixed_notional_pct": 0.37562734217659904,
              "instit_notional_pct": 0.25303138197979247,
              "avg_trade_size": 2724.681639268349,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9455252918287937,
              "mixed_pct": 0.054474708171206226,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.6746184879845641,
              "mixed_qty_pct": 0.3253815120154359,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.6730336720207998,
              "mixed_notional_pct": 0.3269663279792002,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 4147.007782101167,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8707865168539326,
              "mixed_pct": 0.12104187946884576,
              "instit_pct": 0.008171603677221655,
              "retail_qty_pct": 0.3883516946179216,
              "mixed_qty_pct": 0.4776647252824363,
              "instit_qty_pct": 0.13398358009964212,
              "retail_notional_pct": 0.38572737840377486,
              "mixed_notional_pct": 0.4781870614282239,
              "instit_notional_pct": 0.1360855601680012,
              "avg_trade_size": 6212.927987742594,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8701298701298701,
              "mixed_pct": 0.11486789072995969,
              "instit_pct": 0.015002239140170175,
              "retail_qty_pct": 0.3152220206875806,
              "mixed_qty_pct": 0.4601631537093791,
              "instit_qty_pct": 0.2246148256030403,
              "retail_notional_pct": 0.3143373492030234,
              "mixed_notional_pct": 0.4571221130669028,
              "instit_notional_pct": 0.22854053773007382,
              "avg_trade_size": 7071.381325570981,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8275862068965517,
              "mixed_pct": 0.1724137931034483,
              "instit_pct": 0.0,
              "retail_qty_pct": 0.3533116178067318,
              "mixed_qty_pct": 0.6466883821932682,
              "instit_qty_pct": 0.0,
              "retail_notional_pct": 0.35431441368361594,
              "mixed_notional_pct": 0.6456855863163841,
              "instit_notional_pct": 0.0,
              "avg_trade_size": 6440.120689655172,
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
      "n_trades": 3098,
      "first_trade_date": "2026-01-27",
      "last_trade_date": "2026-02-26",
      "period_days": 30,
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.9002582311168495,
        "mixed_pct": 0.09199483537766301,
        "instit_pct": 0.007746933505487412,
        "retail_qty_pct": 0.36964843945903475,
        "mixed_qty_pct": 0.4991618655671883,
        "instit_qty_pct": 0.13118969497377694,
        "retail_notional_pct": 0.36728242735238964,
        "mixed_notional_pct": 0.5000193532423735,
        "instit_notional_pct": 0.13269821940523688
      },
      "trade_size": {
        "avg": 5353.895416397676,
        "median": 892.5
      },
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1961,
            "retail_pct": 0.903110657827639,
            "mixed_pct": 0.0912799592044875,
            "instit_pct": 0.0056093829678735335,
            "avg_trade_size": 5282.70907700153,
            "retail_qty_pct": 0.40413626793897806,
            "mixed_qty_pct": 0.49252532769396706,
            "instit_qty_pct": 0.10333840436705492,
            "total_quantity": 42463400.0
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
          "retail_pct": 0.9002582311168495,
          "mixed_pct": 0.09199483537766301,
          "instit_pct": 0.007746933505487412,
          "retail_qty_pct": 0.36964843945903475,
          "mixed_qty_pct": 0.4991618655671883,
          "instit_qty_pct": 0.13118969497377694,
          "retail_notional_pct": 0.36728242735238964,
          "mixed_notional_pct": 0.5000193532423735,
          "instit_notional_pct": 0.13269821940523688,
          "avg_trade_size": 5353.895416397676,
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
          "avg_trade_size": 410.2375,
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
          "retail_pct": 0.972972972972973,
          "mixed_pct": 0.02702702702702703,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.7672503398097066,
          "mixed_qty_pct": 0.23274966019029344,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.761989252762851,
          "mixed_notional_pct": 0.23801074723714893,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2576.8198198198197,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BN2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9560083352627923,
          "mixed_pct": 0.03866635795322992,
          "instit_pct": 0.005325306783977773,
          "retail_qty_pct": 0.37224372175828485,
          "mixed_qty_pct": 0.3756911912251718,
          "instit_qty_pct": 0.25206508701654334,
          "retail_notional_pct": 0.3713412758436085,
          "mixed_notional_pct": 0.37562734217659904,
          "instit_notional_pct": 0.25303138197979247,
          "avg_trade_size": 2724.681639268349,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9455252918287937,
          "mixed_pct": 0.054474708171206226,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.6746184879845641,
          "mixed_qty_pct": 0.3253815120154359,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.6730336720207998,
          "mixed_notional_pct": 0.3269663279792002,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 4147.007782101167,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8707865168539326,
          "mixed_pct": 0.12104187946884576,
          "instit_pct": 0.008171603677221655,
          "retail_qty_pct": 0.3883516946179216,
          "mixed_qty_pct": 0.4776647252824363,
          "instit_qty_pct": 0.13398358009964212,
          "retail_notional_pct": 0.38572737840377486,
          "mixed_notional_pct": 0.4781870614282239,
          "instit_notional_pct": 0.1360855601680012,
          "avg_trade_size": 6212.927987742594,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8701298701298701,
          "mixed_pct": 0.11486789072995969,
          "instit_pct": 0.015002239140170175,
          "retail_qty_pct": 0.3152220206875806,
          "mixed_qty_pct": 0.4601631537093791,
          "instit_qty_pct": 0.2246148256030403,
          "retail_notional_pct": 0.3143373492030234,
          "mixed_notional_pct": 0.4571221130669028,
          "instit_notional_pct": 0.22854053773007382,
          "avg_trade_size": 7071.381325570981,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8275862068965517,
          "mixed_pct": 0.1724137931034483,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.3533116178067318,
          "mixed_qty_pct": 0.6466883821932682,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.35431441368361594,
          "mixed_notional_pct": 0.6456855863163841,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 6440.120689655172,
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
            "retail_pct": 0.9305555555555556,
            "mixed_pct": 0.05555555555555555,
            "instit_pct": 0.013888888888888888,
            "retail_qty_pct": 0.49423344000966124,
            "mixed_qty_pct": 0.2938228367852183,
            "instit_qty_pct": 0.21194372320512048,
            "retail_notional_pct": 0.4921982298184038,
            "mixed_notional_pct": 0.294385682130322,
            "instit_notional_pct": 0.21341608805127424,
            "avg_trade_size": 5824.888888888889,
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
            "avg_trade_size": 3915.269230769231,
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
            "avg_trade_size": 41.0,
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
            "avg_trade_size": 215.0,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9249448123620309,
            "mixed_pct": 0.06181015452538632,
            "instit_pct": 0.013245033112582781,
            "retail_qty_pct": 0.4595165922144225,
            "mixed_qty_pct": 0.29395341416719845,
            "instit_qty_pct": 0.24652999361837907,
            "retail_notional_pct": 0.45813253582469754,
            "mixed_notional_pct": 0.2961052272346932,
            "instit_notional_pct": 0.24576223694060928,
            "avg_trade_size": 5711.679911699779,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8865248226950354,
            "mixed_pct": 0.0851063829787234,
            "instit_pct": 0.028368794326241134,
            "retail_qty_pct": 0.1291414752116082,
            "mixed_qty_pct": 0.3739621120515921,
            "instit_qty_pct": 0.4968964127367997,
            "retail_notional_pct": 0.12908074594609556,
            "mixed_notional_pct": 0.37399402946695115,
            "instit_notional_pct": 0.4969252245869533,
            "avg_trade_size": 7943.265957446809,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7794871794871795,
            "mixed_pct": 0.2,
            "instit_pct": 0.020512820512820513,
            "retail_qty_pct": 0.2856019570155513,
            "mixed_qty_pct": 0.4723921020443823,
            "instit_qty_pct": 0.2420059409400664,
            "retail_notional_pct": 0.28503703815628934,
            "mixed_notional_pct": 0.4740747071511406,
            "instit_notional_pct": 0.24088825469257008,
            "avg_trade_size": 10860.594871794872,
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
            "retail_pct": 0.875,
            "mixed_pct": 0.1118421052631579,
            "instit_pct": 0.013157894736842105,
            "retail_qty_pct": 0.37773776637726914,
            "mixed_qty_pct": 0.41965518942383584,
            "instit_qty_pct": 0.20260704419889503,
            "retail_notional_pct": 0.37595551430533036,
            "mixed_notional_pct": 0.421647826962912,
            "instit_notional_pct": 0.2023966587317577,
            "avg_trade_size": 6726.881578947368,
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
            "avg_trade_size": 3390.75,
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
            "avg_trade_size": 1285.75,
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
            "retail_pct": 0.9373531714956931,
            "mixed_pct": 0.050117462803445575,
            "instit_pct": 0.012529365700861394,
            "retail_qty_pct": 0.27776459420977695,
            "mixed_qty_pct": 0.3556681808936199,
            "instit_qty_pct": 0.36656722489660315,
            "retail_notional_pct": 0.2774657729237299,
            "mixed_notional_pct": 0.355578654632978,
            "instit_notional_pct": 0.3669555724432921,
            "avg_trade_size": 4160.424823805794,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9152542372881356,
            "mixed_pct": 0.0847457627118644,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.5974477958236659,
            "mixed_qty_pct": 0.4025522041763341,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.5990131284594833,
            "mixed_notional_pct": 0.4009868715405167,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5303.525423728814,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8805031446540881,
            "mixed_pct": 0.09905660377358491,
            "instit_pct": 0.020440251572327043,
            "retail_qty_pct": 0.31230409585303337,
            "mixed_qty_pct": 0.39533362899043123,
            "instit_qty_pct": 0.2923622751565354,
            "retail_notional_pct": 0.3095762503590417,
            "mixed_notional_pct": 0.39677453059778967,
            "instit_notional_pct": 0.29364921904316865,
            "avg_trade_size": 7115.340932914046,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8249336870026526,
            "mixed_pct": 0.16180371352785147,
            "instit_pct": 0.013262599469496022,
            "retail_qty_pct": 0.3426451576639874,
            "mixed_qty_pct": 0.47709516047439715,
            "instit_qty_pct": 0.18025968186161542,
            "retail_notional_pct": 0.34056899878395813,
            "mixed_notional_pct": 0.47809671829435135,
            "instit_notional_pct": 0.1813342829216905,
            "avg_trade_size": 8581.1299734748,
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
            "retail_pct": 0.8974025974025974,
            "mixed_pct": 0.09610389610389611,
            "instit_pct": 0.006493506493506494,
            "retail_qty_pct": 0.4162473944204906,
            "mixed_qty_pct": 0.46994089260729277,
            "instit_qty_pct": 0.11381171297221666,
            "retail_notional_pct": 0.4136585479479838,
            "mixed_notional_pct": 0.4704286003015903,
            "instit_notional_pct": 0.11591285175042593,
            "avg_trade_size": 5519.658441558441,
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
            "avg_trade_size": 2179.659090909091,
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
            "avg_trade_size": 60.0,
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
            "retail_pct": 0.946865037194474,
            "mixed_pct": 0.044633368756641874,
            "instit_pct": 0.008501594048884165,
            "retail_qty_pct": 0.3078151986183074,
            "mixed_qty_pct": 0.38092976396085204,
            "instit_qty_pct": 0.31125503742084054,
            "retail_notional_pct": 0.30698434652217715,
            "mixed_notional_pct": 0.38041998082017253,
            "instit_notional_pct": 0.3125956726576503,
            "avg_trade_size": 3313.900637619554,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9411764705882353,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6323101053103294,
            "mixed_qty_pct": 0.3676898946896706,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6340905177714918,
            "mixed_notional_pct": 0.36590948222850816,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 3985.7843137254904,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8722710980775497,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.016617790811339198,
            "retail_qty_pct": 0.3137846301650793,
            "mixed_qty_pct": 0.44267027556327426,
            "instit_qty_pct": 0.24354509427164645,
            "retail_notional_pct": 0.3125171509702975,
            "mixed_notional_pct": 0.4409766135334578,
            "instit_notional_pct": 0.24650623549624467,
            "avg_trade_size": 6991.36917562724,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8594040968342644,
            "mixed_pct": 0.1303538175046555,
            "instit_pct": 0.010242085661080074,
            "retail_qty_pct": 0.3618586033950617,
            "mixed_qty_pct": 0.4909818672839506,
            "instit_qty_pct": 0.14715952932098766,
            "retail_notional_pct": 0.3591740668327871,
            "mixed_notional_pct": 0.49156500827348193,
            "instit_notional_pct": 0.149260924893731,
            "avg_trade_size": 6724.835195530726,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.4216439976345358,
            "mixed_qty_pct": 0.5783560023654643,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.4291572504003472,
            "mixed_notional_pct": 0.5708427495996528,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 5568.083333333333,
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
            "retail_pct": 0.9002582311168495,
            "mixed_pct": 0.09199483537766301,
            "instit_pct": 0.007746933505487412,
            "retail_qty_pct": 0.36964843945903475,
            "mixed_qty_pct": 0.4991618655671883,
            "instit_qty_pct": 0.13118969497377694,
            "retail_notional_pct": 0.36728242735238964,
            "mixed_notional_pct": 0.5000193532423735,
            "instit_notional_pct": 0.13269821940523688,
            "avg_trade_size": 5353.895416397676,
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
            "avg_trade_size": 410.2375,
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
            "retail_pct": 0.972972972972973,
            "mixed_pct": 0.02702702702702703,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.7672503398097066,
            "mixed_qty_pct": 0.23274966019029344,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.761989252762851,
            "mixed_notional_pct": 0.23801074723714893,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 2576.8198198198197,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "BN2",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9560083352627923,
            "mixed_pct": 0.03866635795322992,
            "instit_pct": 0.005325306783977773,
            "retail_qty_pct": 0.37224372175828485,
            "mixed_qty_pct": 0.3756911912251718,
            "instit_qty_pct": 0.25206508701654334,
            "retail_notional_pct": 0.3713412758436085,
            "mixed_notional_pct": 0.37562734217659904,
            "instit_notional_pct": 0.25303138197979247,
            "avg_trade_size": 2724.681639268349,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9455252918287937,
            "mixed_pct": 0.054474708171206226,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.6746184879845641,
            "mixed_qty_pct": 0.3253815120154359,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.6730336720207998,
            "mixed_notional_pct": 0.3269663279792002,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 4147.007782101167,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8707865168539326,
            "mixed_pct": 0.12104187946884576,
            "instit_pct": 0.008171603677221655,
            "retail_qty_pct": 0.3883516946179216,
            "mixed_qty_pct": 0.4776647252824363,
            "instit_qty_pct": 0.13398358009964212,
            "retail_notional_pct": 0.38572737840377486,
            "mixed_notional_pct": 0.4781870614282239,
            "instit_notional_pct": 0.1360855601680012,
            "avg_trade_size": 6212.927987742594,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8701298701298701,
            "mixed_pct": 0.11486789072995969,
            "instit_pct": 0.015002239140170175,
            "retail_qty_pct": 0.3152220206875806,
            "mixed_qty_pct": 0.4601631537093791,
            "instit_qty_pct": 0.2246148256030403,
            "retail_notional_pct": 0.3143373492030234,
            "mixed_notional_pct": 0.4571221130669028,
            "instit_notional_pct": 0.22854053773007382,
            "avg_trade_size": 7071.381325570981,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8275862068965517,
            "mixed_pct": 0.1724137931034483,
            "instit_pct": 0.0,
            "retail_qty_pct": 0.3533116178067318,
            "mixed_qty_pct": 0.6466883821932682,
            "instit_qty_pct": 0.0,
            "retail_notional_pct": 0.35431441368361594,
            "mixed_notional_pct": 0.6456855863163841,
            "instit_notional_pct": 0.0,
            "avg_trade_size": 6440.120689655172,
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
      "total_trades": 4437,
      "price_moving_trades": 898,
      "pct_price_moving": 20.238900157764256,
      "all_movers": {
        "count": 898,
        "avg_size": 7196.827951002228,
        "median_size": 1000.0,
        "retail_count": 749,
        "mixed_count": 137,
        "institutional_count": 12,
        "retail_pct": 83.40757238307349,
        "mixed_pct": 15.256124721603564,
        "instit_pct": 1.3363028953229399
      },
      "positive_movers": {
        "count": 448,
        "avg_size": 5420.411830357143,
        "median_size": 208.0,
        "retail_count": 392,
        "mixed_count": 53,
        "institutional_count": 3,
        "retail_pct": 87.5,
        "mixed_pct": 11.830357142857142,
        "instit_pct": 0.6696428571428571
      },
      "negative_movers": {
        "count": 450,
        "avg_size": 8965.34888888889,
        "median_size": 2400.0,
        "retail_count": 357,
        "mixed_count": 84,
        "institutional_count": 9,
        "retail_pct": 79.33333333333333,
        "mixed_pct": 18.666666666666668,
        "instit_pct": 2.0
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
        "n_days_short_data": 22,
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
            "avg_short_ratio": 0.003207329923319448,
            "max_short_ratio": 0.021019119182513736,
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
            "month": "2026-02",
            "avg_short_ratio": 0.0020261586756208623
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0020261586756208623,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": 347.60472773439596
          }
        ],
        "interpretation": "Shorts covering significantly (-78% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "return": 0.03921568627450989
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.012090950356951265,
            "short_vol": 29300,
            "total_vol": 2423300,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2401500,
            "close": 0.25,
            "return": -0.03846153846153855
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3285000,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.021019119182513736,
            "short_vol": 122800,
            "total_vol": 5842300,
            "close": 0.26,
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
          "avg_short_ratio": 0.0035971775652326424,
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
          "avg_short_ratio": 0.01964104089024786,
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
          "opening": 0.04645790733542232,
          "continuous": 0.9336311504314339,
          "closing": 0.007595403348266609,
          "auctions": 0.06636884956856615,
          "other": 0.0
        },
        "1W": {
          "opening": 0.02427243586666659,
          "continuous": 0.9645666897631938,
          "closing": 0.0035749734540526878,
          "auctions": 0.03543331023680622,
          "other": 0.0
        },
        "2W": {
          "opening": 0.017883253444682116,
          "continuous": 0.9679184105242362,
          "closing": 0.004413565679402734,
          "auctions": 0.03208158947576382,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01707196742369423,
          "continuous": 0.9418104718608639,
          "closing": 0.03223167178672465,
          "auctions": 0.05818952813913605,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.235459052832771,
        "1W": 0.2841200941341422,
        "2W": 0.24779775855219746,
        "1M": 0.19603095899124395
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.007
        },
        {
          "time": "09:00",
          "avg_share": 0.1335
        },
        {
          "time": "09:30",
          "avg_share": 0.1155
        },
        {
          "time": "10:00",
          "avg_share": 0.0523
        },
        {
          "time": "10:30",
          "avg_share": 0.0393
        },
        {
          "time": "11:00",
          "avg_share": 0.0317
        },
        {
          "time": "11:30",
          "avg_share": 0.0529
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0207
        },
        {
          "time": "13:00",
          "avg_share": 0.1044
        },
        {
          "time": "13:30",
          "avg_share": 0.046
        },
        {
          "time": "14:00",
          "avg_share": 0.1044
        },
        {
          "time": "14:30",
          "avg_share": 0.044
        },
        {
          "time": "15:00",
          "avg_share": 0.037
        },
        {
          "time": "15:30",
          "avg_share": 0.048
        },
        {
          "time": "16:00",
          "avg_share": 0.0486
        },
        {
          "time": "16:30",
          "avg_share": 0.0808
        },
        {
          "time": "17:00",
          "avg_share": 0.0315
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.5728779231802354,
          "hhi": 0.1899378454191701,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 6.086839809330271,
          "hhi": 0.2533180364906859,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.7070544854781478,
          "hhi": 0.34079774016160697,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.5400417114572265,
          "hhi": 0.6539083068595315,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.32341889359198,
          "hhi": 0.5058677028340526,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.898867032772322,
          "hhi": 0.7852268587512621,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.951038654326811,
          "hhi": 0.8010133190718127,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5DD",
          "auctions_pct": 6.83186761110021,
          "hhi": 0.3722255674890539,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BN2",
          "auctions_pct": 5.49817310677428,
          "hhi": 0.23334190750773526,
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
