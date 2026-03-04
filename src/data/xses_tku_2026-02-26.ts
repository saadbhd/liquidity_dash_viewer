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
      "marketCap": 136857901.2,
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
      "marketCap": 154387257.03,
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
      "marketCap": 73243415.105,
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
      "marketCap": 269721849.14,
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
    "market_cap_display": "136.9M",
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
          "score_pca": 73.11827956989248,
          "score_pca_percentile": 73.11827956989248,
          "rank_pca": 151,
          "total": 558,
          "adv_notional_sgd": 430575.0,
          "adv_volume_shares": 1722300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0030203005918959685,
          "votes": 114.0,
          "trades": 114.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.2608695652173914,
          "amihud": null,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.7593201965596207,
          "loadings": {
            "log_adv": 0.5609794812952118,
            "log_trades": 0.5142026549855334,
            "log_turnover": 0.5179794346025931,
            "neg_spread": 0.39063404421576176,
            "neg_amihud": 0.0,
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
          "peer_median_adv": 30296.5,
          "peer_median_score_pca": 43.63799283154122,
          "peer_median_trades": 10.5,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.029422128259337592,
          "peer_median_amihud": null,
          "peer_median_turnover_ratio": 0.00023430347127915624,
          "target_vs_peer": {
            "score_pca_delta": 29.48,
            "adv_delta_pct": 1321.2,
            "trades_delta_pct": 985.71,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 15.16,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 1189.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.11827956989248,
            "rank_pca": 151,
            "adv": 430575.0,
            "trades": 114.0,
            "volatility": null,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.2608695652173914,
            "amihud": null,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 87.99283154121864,
            "rank_pca": 68,
            "adv": 2713200.0,
            "trades": 779.0,
            "volatility": null,
            "spread_pct": 0.011930068275406743,
            "spread_ticks": 1.2287735849056605,
            "amihud": null,
            "turnover_ratio": 0.040184482498156066,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.70609318996416,
            "rank_pca": 237,
            "adv": 60120.0,
            "trades": 19.0,
            "volatility": null,
            "spread_pct": 0.013389711064129683,
            "spread_ticks": 2.4516129032258065,
            "amihud": null,
            "turnover_ratio": 0.0004617931592906351,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 26.344086021505376,
            "rank_pca": 412,
            "adv": 41.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": null,
            "turnover_ratio": 1.7799074647467968e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 29.56989247311828,
            "rank_pca": 394,
            "adv": 473.0,
            "trades": 2.0,
            "volatility": null,
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 6.81378326767737e-06,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
            "rank_pca": 544,
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
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.5730994152046784,
            "spread_ticks": 24.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 2190320.0,
            "trades": 402.0,
            "volatility": null,
            "spread_pct": 0.007303562033856344,
            "spread_ticks": 1.3485714285714285,
            "amihud": null,
            "turnover_ratio": 0.009513106296823918,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 79.92831541218638,
            "rank_pca": 113,
            "adv": 1124370.0,
            "trades": 235.0,
            "volatility": null,
            "spread_pct": 0.005722441119631802,
            "spread_ticks": 1.0320197044334976,
            "amihud": null,
            "turnover_ratio": 0.004445023577998335,
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
              "mean": 0.01541635045367677,
              "median": 0.0005377471899209525,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.02040573455649377,
              "count": 551
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
          "score_pca": 73.29749103942652,
          "score_pca_percentile": 73.29749103942652,
          "rank_pca": 150,
          "total": 558,
          "adv_notional_sgd": 405925.0,
          "adv_volume_shares": 1623700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.002847391320363168,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.024100349578449535,
          "spread_ticks": 1.2107438016528926,
          "amihud": 5.0149976813997214e-08,
          "volatility": 0.01941930618401211
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.514721247325359,
          "loadings": {
            "log_adv": 0.5549111400581538,
            "log_trades": 0.5024210660388783,
            "log_turnover": 0.5128421505253027,
            "neg_spread": 0.3945785904853462,
            "neg_amihud": 0.09439311967108321,
            "neg_vol": -0.10971464156464042
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
          "peer_median_score_pca": 46.95340501792114,
          "peer_median_trades": 10.5,
          "peer_median_volatility": 0.005833672500339171,
          "peer_median_spread_pct": 0.022640185828192418,
          "peer_median_amihud": 1.6066670276969584e-08,
          "peer_median_turnover_ratio": 0.00032879149020639137,
          "target_vs_peer": {
            "score_pca_delta": 26.34,
            "adv_delta_pct": 1157.2,
            "trades_delta_pct": 747.62,
            "volatility_delta_pct": -232.88,
            "spread_pct_delta_pct": -6.45,
            "amihud_delta_pct": -212.14,
            "turnover_ratio_delta_pct": 766.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.29749103942652,
            "rank_pca": 150,
            "adv": 405925.0,
            "trades": 89.0,
            "volatility": 0.01941930618401211,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.2107438016528926,
            "amihud": 5.0149976813997214e-08,
            "turnover_ratio": 0.002847391320363168,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 88.88888888888889,
            "rank_pca": 63,
            "adv": 1293400.5,
            "trades": 595.0,
            "volatility": 0.04475193218648721,
            "spread_pct": 0.007803421043522128,
            "spread_ticks": 1.2865064695009243,
            "amihud": 1.6066670276969584e-08,
            "turnover_ratio": 0.019252472651980344,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 58.96057347670251,
            "rank_pca": 230,
            "adv": 60120.0,
            "trades": 19.0,
            "volatility": 0.008256936433732043,
            "spread_pct": 0.013389711064129683,
            "spread_ticks": 2.4516129032258065,
            "amihud": 4.5925710928901706e-07,
            "turnover_ratio": 0.0004617931592906351,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.946236559139784,
            "rank_pca": 364,
            "adv": 4455.0,
            "trades": 1.0,
            "volatility": 0.006172839506172867,
            "spread_pct": 0.049999999999999906,
            "spread_ticks": 4.0,
            "amihud": 1.5038100531506693e-08,
            "turnover_ratio": 0.00019578982112214766,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 30.64516129032258,
            "rank_pca": 388,
            "adv": 1147.5,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4,
            "amihud": 0.0,
            "turnover_ratio": 1.5795588484161175e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
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
            "score_pca": 3.046594982078853,
            "rank_pca": 542,
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
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 369750.0,
            "trades": 82.0,
            "volatility": 0.014189406099518465,
            "spread_pct": 0.007680260871430724,
            "spread_ticks": 1.3485714285714285,
            "amihud": 3.741716069846453e-08,
            "turnover_ratio": 0.0017535869952073932,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.85304659498208,
            "rank_pca": 119,
            "adv": 875511.0,
            "trades": 235.0,
            "volatility": 0.005494505494505475,
            "spread_pct": 0.005827606021256288,
            "spread_ticks": 1.0412287793047696,
            "amihud": 7.213003602895306e-09,
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
              "mean": 0.014562640860378739,
              "median": 0.007984383000512019,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.04893089824221901,
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
              "mean": 0.013657300431677306,
              "median": 0.00035248809760375015,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.011352292417318815,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017293236693665127,
              "median": 6.365245403642363e-08,
              "min": 0.0,
              "max": 0.03921568627450985,
              "p5": 0.0,
              "p95": 8.710523628880853e-05,
              "count": 503
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
              "mean": 0.010560207271605851,
              "median": 0.006026741684307724,
              "min": 0.0,
              "max": 0.04475193218648721,
              "p5": 0.0,
              "p95": 0.03588551308562091,
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
              "mean": 0.0002696190382790475,
              "median": 1.6066670276969584e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 9.097987120013675e-11,
              "p95": 0.0013208924941139136,
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
              "mean": 0.009858202465052007,
              "median": 0.005833672500339171,
              "min": 0.0,
              "max": 0.04475193218648721,
              "p5": 0.0,
              "p95": 0.03405504805604813,
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
              "mean": 0.0002696182064106546,
              "median": 1.6066670276969584e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 2.163901080868592e-09,
              "p95": 0.0013208924941139136,
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
          "score_pca": 76.88172043010752,
          "score_pca_percentile": 76.88172043010752,
          "rank_pca": 130,
          "total": 558,
          "adv_notional_sgd": 418250.0,
          "adv_volume_shares": 1673000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0029338459561295683,
          "votes": 110.5,
          "trades": 110.5,
          "spread_pct": 0.025183772822347014,
          "spread_ticks": 1.2158691383955071,
          "amihud": 3.850778483005074e-08,
          "volatility": 0.019230769230769273
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5336716383482515,
          "loadings": {
            "log_adv": 0.5413139169789386,
            "log_trades": 0.48857562046536296,
            "log_turnover": 0.5029091472344966,
            "neg_spread": 0.389726053024562,
            "neg_amihud": 0.06922549223170976,
            "neg_vol": -0.24223321576292775
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
          "peer_median_volatility": 0.005558300395256899,
          "peer_median_spread_pct": 0.023201765578354402,
          "peer_median_amihud": 1.9135354223053154e-07,
          "peer_median_turnover_ratio": 0.00013390868414187522,
          "target_vs_peer": {
            "score_pca_delta": 31.81,
            "adv_delta_pct": 3334.2,
            "trades_delta_pct": 1200.0,
            "volatility_delta_pct": -245.98,
            "spread_pct_delta_pct": -8.54,
            "amihud_delta_pct": 79.88,
            "turnover_ratio_delta_pct": 2090.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 76.88172043010752,
            "rank_pca": 130,
            "adv": 418250.0,
            "trades": 110.5,
            "volatility": 0.019230769230769273,
            "spread_pct": 0.025183772822347014,
            "spread_ticks": 1.2158691383955071,
            "amihud": 3.850778483005074e-08,
            "turnover_ratio": 0.0029338459561295683,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 1163601.25,
            "trades": 279.5,
            "volatility": 0.015463917525773252,
            "spread_pct": 0.006919651091442052,
            "spread_ticks": 1.260419447284522,
            "amihud": 1.7550880001123276e-08,
            "turnover_ratio": 0.01743815778170756,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.508960573476706,
            "rank_pca": 266,
            "adv": 21957.25,
            "trades": 15.0,
            "volatility": 0.005434782608695565,
            "spread_pct": 0.012990951952284308,
            "spread_ticks": 2.39247311827957,
            "amihud": 3.4530307250674056e-07,
            "turnover_ratio": 0.00016280282786368947,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.437275985663085,
            "rank_pca": 378,
            "adv": 2401.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.06105529655379255,
            "spread_ticks": 4.927631578947368,
            "amihud": 1.5394283444339402e-06,
            "turnover_ratio": 0.000105014540420061,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 1233.75,
            "trades": 2.0,
            "volatility": 0.022222222222222254,
            "spread_pct": 0.033412579204424496,
            "spread_ticks": 1.4857142857142858,
            "amihud": 5.991836123282037e-06,
            "turnover_ratio": 1.7189316879822455e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.7921146953405016,
            "rank_pca": 548,
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
            "score_pca": 77.95698924731182,
            "rank_pca": 124,
            "adv": 505017.5,
            "trades": 175.0,
            "volatility": 0.016949152542372947,
            "spread_pct": 0.007348109727863347,
            "spread_ticks": 1.3147542769968399,
            "amihud": 3.7404011954322536e-08,
            "turnover_ratio": 0.0025181509251178164,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 297038.25,
            "trades": 226.5,
            "volatility": 0.005681818181818232,
            "spread_pct": 0.0059230217088972,
            "spread_ticks": 1.0560474605185266,
            "amihud": 1.8502821957890842e-08,
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
              "mean": 0.009633999481161283,
              "median": 0.005681818181818232,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.033505747126436634,
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
              "mean": 0.01047932966344555,
              "median": 0.000317354435969606,
              "min": 0.0,
              "max": 4.417968492518621,
              "p5": 0.0,
              "p95": 0.011061420080779195,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005119674925496257,
              "median": 8.003954593885718e-08,
              "min": 0.0,
              "max": 0.2083333333333333,
              "p5": 0.0,
              "p95": 6.018727406362101e-05,
              "count": 529
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
              "mean": 0.008682286321528995,
              "median": 0.006270690796733591,
              "min": 0.0,
              "max": 0.022222222222222254,
              "p5": 0.0,
              "p95": 0.02117521367521371,
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
              "mean": 0.00023684067710859436,
              "median": 1.9190542866839565e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.1824173115292046e-10,
              "p95": 0.001228512236982767,
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
              "mean": 0.008218986635110281,
              "median": 0.005558300395256899,
              "min": 0.0,
              "max": 0.022222222222222254,
              "p5": 0.0,
              "p95": 0.020376647834274994,
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
              "mean": 0.0002368428097605399,
              "median": 1.9135354223053154e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.142808000393147e-09,
              "p95": 0.001228512236982767,
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
          "score_pca": 85.66308243727599,
          "score_pca_percentile": 85.66308243727599,
          "rank_pca": 81,
          "total": 558,
          "adv_notional_sgd": 602462.0,
          "adv_volume_shares": 2423300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004249604844882716,
          "votes": 171.0,
          "trades": 171.0,
          "spread_pct": 0.02202090592334495,
          "spread_ticks": 1.082051282051282,
          "amihud": 4.34059440714335e-08,
          "volatility": 0.02886792452830189
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5595699997332219,
          "loadings": {
            "log_adv": 0.5251378192212217,
            "log_trades": 0.4706901624561012,
            "log_turnover": 0.49571490686345177,
            "neg_spread": 0.3843667246926748,
            "neg_amihud": 0.10980348008644891,
            "neg_vol": -0.31169406413006784
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
          "peer_median_score_pca": 49.10394265232975,
          "peer_median_trades": 8.0,
          "peer_median_volatility": 0.008335546150795431,
          "peer_median_spread_pct": 0.021134715352102953,
          "peer_median_amihud": 1.0997027783701744e-07,
          "peer_median_turnover_ratio": 0.00017962823785960417,
          "target_vs_peer": {
            "score_pca_delta": 36.56,
            "adv_delta_pct": 3518.8,
            "trades_delta_pct": 2037.5,
            "volatility_delta_pct": -246.32,
            "spread_pct_delta_pct": -4.19,
            "amihud_delta_pct": 60.53,
            "turnover_ratio_delta_pct": 2265.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 85.66308243727599,
            "rank_pca": 81,
            "adv": 602462.0,
            "trades": 171.0,
            "volatility": 0.02886792452830189,
            "spread_pct": 0.02202090592334495,
            "spread_ticks": 1.082051282051282,
            "amihud": 4.34059440714335e-08,
            "turnover_ratio": 0.004249604844882716,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 1001222.0,
            "trades": 183.0,
            "volatility": 0.015269647205097714,
            "spread_pct": 0.007159140269054322,
            "spread_ticks": 1.2343324250681198,
            "amihud": 1.7357109608558024e-08,
            "turnover_ratio": 0.015527573142808056,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.0,
            "rank_pca": 280,
            "adv": 30294.0,
            "trades": 12.0,
            "volatility": 0.005434782608695621,
            "spread_pct": 0.0120361083249749,
            "spread_ticks": 2.1785714285714284,
            "amihud": 1.8812932852888147e-07,
            "turnover_ratio": 0.00022398350839845176,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 32.97491039426524,
            "rank_pca": 375,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": 4.831061265660419e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.2078853046595,
            "rank_pca": 290,
            "adv": 2346.0,
            "trades": 4.0,
            "volatility": 0.02198067632850237,
            "spread_pct": 0.030233322379231004,
            "spread_ticks": 1.3636363636363635,
            "amihud": 8.1067496797834e-07,
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
            "score_pca": 73.83512544802868,
            "rank_pca": 147,
            "adv": 457994.0,
            "trades": 129.0,
            "volatility": 0.012346149449376842,
            "spread_pct": 0.007313949671519523,
            "spread_ticks": 1.2133333333333334,
            "amihud": 3.18112271451534e-08,
            "turnover_ratio": 0.002123284394667587,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 76.34408602150538,
            "rank_pca": 133,
            "adv": 403071.0,
            "trades": 316.0,
            "volatility": 0.011236309692895241,
            "spread_pct": 0.006256397281227363,
            "spread_ticks": 1.103448275862069,
            "amihud": 2.007429287169268e-08,
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
              "mean": 0.00891351814209521,
              "median": 0.006462623465185724,
              "min": 0.0,
              "max": 0.10555555555555557,
              "p5": 0.0,
              "p95": 0.029343811223911595,
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
              "mean": 0.004972008628528722,
              "median": 0.00032052915615159166,
              "min": 0.0,
              "max": 1.4501351262276712,
              "p5": 0.0,
              "p95": 0.009990112257664944,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00021947905849592863,
              "median": 9.807055030311168e-08,
              "min": 0.0,
              "max": 0.04901960784313725,
              "p5": 0.0,
              "p95": 8.92403056348297e-05,
              "count": 547
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
              "mean": 0.009867747743301278,
              "median": 0.006411866942254124,
              "min": 0.0,
              "max": 0.02886792452830189,
              "p5": 0.0,
              "p95": 0.026457387658372054,
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
              "mean": 0.00023604193913845536,
              "median": 1.1576763630015749e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.3538024721516097e-10,
              "p95": 0.0012266988305784105,
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
              "mean": 0.008283445660570973,
              "median": 0.008335546150795431,
              "min": 0.0,
              "max": 0.02198067632850237,
              "p5": 0.0,
              "p95": 0.019631816135310735,
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
              "mean": 0.00023604295073536026,
              "median": 1.0997027783701744e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.074988362995309e-09,
              "p95": 0.0012266988305784105,
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
        "liquidity": "Based on 1 day of trading, liquidity score stands at a healthy 73 with an ADV of S$430.6K and 114 trades, indicating robust daily activity.",
        "market_comparison": "The 1d spread at 2.50% is slightly wider than the peer median of 2.11%, but still in a reasonable range compared to market standards."
      },
      "1w": {
        "liquidity": "Over the past week, liquidity remains strong with a score of 73, supported by an ADV of S$405.9K and 89 trades, reflecting sustained market interest.",
        "market_comparison": "The weekly spread of 2.41% is marginally higher than peer median but shows stable trading costs relative to market peers."
      },
      "2w": {
        "liquidity": "Liquidity over two weeks slightly improves to a score of 77 with an ADV of S$418.3K and 110.5 trades, signaling consistent buying and selling activity.",
        "market_comparison": "The spread at 2.52% is consistent with the 1d and 1w metrics but remains just above peer norms by approximately 19 basis points."
      },
      "30d": {
        "liquidity": "For the 30-day horizon, liquidity is very strong at a PCA score of 86, ranking 81st in a 558-stock universe, driven by a notable ADV of S$602K and 171 daily trades.",
        "market_comparison": "This score is substantially above peer median by 37 points and ADV is more than 35 times higher than peers, with spreads 4% tighter than peer median."
      }
    }
  },
  "q02": {
    "regime_switching": {
      "valid": true,
      "regime_method": "liquidity_score_markov",
      "n_regimes": 2,
      "current_regime": 1,
      "regimes": [
        {
          "id": 0,
          "label": "Low Liquidity",
          "liquidity_score": 10.416666666666668,
          "pct_time": 0.16666666666666666
        },
        {
          "id": 1,
          "label": "Medium Liquidity",
          "liquidity_score": 60.41666666666667,
          "pct_time": 0.8333333333333334
        }
      ],
      "transitions": [
        [
          0.7501373069452079,
          0.2498626930547921
        ],
        [
          0.05001760710623382,
          0.9499823928937662
        ]
      ]
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Robust",
        "bg": "bg-emerald",
        "textColor": "text-emerald",
        "dot": "bg-emerald"
      },
      "liq_section": {
        "text": "Liquidity score: 86 — Very Strong",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "perf": {
        "text": "Returns weaker than market and peers",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      },
      "drivers": {
        "text": "Company-driven",
        "bg": "bg-amber",
        "textColor": "text-amber"
      },
      "exec_check": {
        "text": "Low price impact on small trades",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "intraday": {
        "text": "Active during continuous hours",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "ofi": {
        "text": "Balanced order flow",
        "bg": "bg-amber",
        "textColor": "text-amber"
      },
      "short": {
        "text": "Low short interest",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "index_status": {
        "text": "Medium liquidity regime",
        "bg": "bg-amber",
        "textColor": "text-amber"
      }
    },
    "borders": {
      "action_plan": "border-emerald",
      "index": "border-amber"
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
      "Market Cap: S$136.9M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-02-26",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "Liquidity at TKU is strong with exceptionally high traded volume relative to peers but with somewhat wider spreads.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "TKU demonstrates strong liquidity relative to peer group, with high turnover and robust activity.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Trading volumes significantly exceed peers; spreads are slightly wider than sector median but tighter than broader market.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have lagged market and sector over the past 30 days.",
    "perf_insight": "Stock return of -3.85% underperformed market's +2.13% and sector's -2.61%.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Company factors dominate price changes over the past quarter.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "67.9% of price moves are company-driven"
      },
      {
        "title": "Market Link",
        "text": "Negative beta (-0.81) indicates inverse relation to market"
      },
      {
        "title": "Sector Link",
        "text": "High sensitivity to sector changes with beta 5.61"
      }
    ],
    "drivers_pie_title": "Return Drivers Proportion",
    "drivers_pie_note": "Breakdown of influence from company, sector, and market.",
    "lead_lag_title": "Lead/Lag Analysis",
    "lead_lag_note": "Examines directional relationships between TKU and market factors.",
    "rolling_title": "Rolling Liquidity Trends",
    "rolling_latest_label": "Latest: 30d",
    "rolling_note": "Shows liquidity score changes over last two months.",
    "drivers_bottom_line": "Trading decisions should consider strong company factor influence and low market correlation.",
    "drivers_wtd_title": "What This Means for Trading",
    "drivers_wtd_list": [
      "Focus on company news and events for trade timing.",
      "Lower reliance on market trends for execution strategies.",
      "Prepare for increased sector volatility impact."
    ],
    "regime_title": "Liquidity Regime Analysis",
    "regime_subtitle": "Current market states based on liquidity scores.",
    "regime_badge_text": "Medium Liquidity",
    "regime_pie_title": "Time Distribution of Liquidity States",
    "transition_title": "Liquidity Regime Transitions",
    "transition_cols": [
      "From \\ To",
      "Low Liquidity",
      "Medium Liquidity"
    ],
    "transition_note_template": "Shows percent of time moving between liquidity states in latest quarter.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Current spreads and price impacts measured at multiple trade sizes.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Liquidity sufficient for full execution of 100K shares with minimal impact.",
    "peer_capacity_title": "Peer Liquidity Capacity",
    "peer_capacity_note": "TKU's order fill rates and price impacts compare favorably to peers.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Impact increases with order size; notable fill drop at 1M shares.",
    "exec_check_insight": "Price impact at 100K shares is low (-1.15%), but substantial at 1M (-6.94%) and 2.5M shares with reduced fills.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Predominantly retail traders with minimal institutional activity.",
    "trader_retail_threshold": "Retail typically above 50% considered high.",
    "trader_mixed_threshold": "Mixed traders under 10% minimal.",
    "trader_instit_threshold": "Institutional participation below 5% is low.",
    "peer_trader_title": "Peer Trader Composition",
    "peer_trader_subtitle": "Comparison against peer stock trader breakdowns.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "About 20% of trades are price-moving, indicating active price discovery.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading dominated by continuous session with few auctions.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Continuous sessions account for 94.2% of trading volume.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "HHI of 0.196 indicates moderate concentration in trading activity.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Volume distribution shows consistent activity throughout trading hours.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "Benchmarking TKU against peer stock liquidity and concentration.",
    "intraday_insight": "Daytime continuous trading sustains liquidity with limited auction activity.",
    "ofi_title": "Order Flow Balance",
    "ofi_subtitle": "Order flow trends and imbalances assessed for trade timing.",
    "ofi_tiles": [
      {
        "title": "Order Flow Imbalance",
        "note": "Measured daily to detect buying/selling pressure."
      },
      {
        "title": "OFI vs Daily Prices",
        "note": "Correlation examining OFI influence on price changes."
      },
      {
        "title": "Short-Term Order Book Signal",
        "note": "Analyzes OFI as a trading signal intraday."
      }
    ],
    "ofi_table_title": "Order Flow Summary",
    "ofi_table_note": "Statistics on average and absolute OFI values per period.",
    "ofi_table_cols": [
      "Period",
      "Avg OFI",
      "Avg |OFI|",
      "Interpretation"
    ],
    "ofi_corr_note_template": "Correlation between OFI metrics and price returns across time.",
    "ofi_pie_title": "Order Flow Balance Distribution",
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
    "ofi_unusual_note": "Highlight days with atypical order imbalance and price effects.",
    "index_title": "Index Visibility & Eligibility",
    "index_subtitle": "Liquidity regime impacts index inclusion considerations.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Average short interest is low, indicating limited shorting pressure.",
    "footer": "Liquidity Analysis Report • Generated by Deltablock"
  },
  "content": {
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Liquidity Score",
          "body": "Composite score reflecting volume, spreads, turnover, and trade count."
        },
        "value": "86",
        "suffix": "/100",
        "bar_pct": 86,
        "color_value": "text-emerald",
        "color_bar": "bg-emerald",
        "subtext": "Rank 81/558 • Top 15% by liquidity",
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
          "body": "Average bid-ask spread as a percentage of mid price."
        },
        "value": "2.2",
        "suffix": "%",
        "bar_pct": 11,
        "color_value": "text-amber",
        "color_bar": "bg-amber",
        "subtext": "Slightly wider than peer median (2.11%)",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Daily Volume",
          "body": "Average daily traded value in local currency."
        },
        "value": "S$602K",
        "suffix": "",
        "bar_pct": 94,
        "color_value": "text-emerald",
        "color_bar": "bg-emerald",
        "subtext": "36x above peer median ADV",
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
          "body": "Percentage of price variation due to company-specific factors."
        },
        "value": "67.9",
        "suffix": "company-specific",
        "bar_pct": 68,
        "color_value": "text-amber",
        "color_bar": "bg-amber",
        "subtext": "Dominant company-specific influence over returns",
        "interpretation": {
          "text": "Company-driven",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "TKU's liquidity is robust with high volume and significant trade frequency.",
      "Trading spreads are slightly wider than peers, suggesting room for cost optimization.",
      "Price moves are largely driven by company-specific news and less by market trends."
    ],
    "liq_tiles": [
      {
        "title": "Liquidity Score",
        "value": "86",
        "sub": "Top 15% in universe, indicating strong trading activity",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Average Volume",
        "value": "S$602K",
        "sub": "36x peer median, reflecting deep liquidity",
        "interp": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.2%",
        "sub": "Slightly wider than peer median by 4%",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity metrics confirm TKU trades well above peer group with volume and turnover but spreads remain moderately elevated.",
    "perf_badge": "Returns lag market and sector this month",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.2525",
        "note": "Current representative share price",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.0%",
        "note": "Tight for small trades but slightly wider vs peers",
        "color": "text-amber"
      },
      {
        "title": "Depth",
        "value": "High up to 100K shares",
        "note": "Full fill with minimal impact at 100K; impact grows above",
        "color": "text-emerald"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "Price Impact",
        "text": "Low for 100K shares (-1.15%), rises significantly at 1M shares (-6.94%)",
        "cls": "interpretation-neutral"
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
        "text": "Balanced order flow with no strong directional bias"
      },
      {
        "cls": "interpretation-neutral",
        "text": "Order flow shows stable relation with prices"
      },
      {
        "cls": "interpretation-good",
        "text": "Short-term signals available from order book imbalance"
      }
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock"
  },
  "insights": {
    "liquidity": {
      "overall": "TKU exhibits strong liquidity with a 30-day PCA score of 86, placing it in the upper quintile of the 558-stock universe.",
      "strengths": [
        "Average daily volume of S$602K is 36 times the peer median, supporting tight execution capability.",
        "High number of trades (171/day) sustains market depth and timely order fills."
      ],
      "concerns": [
        "Spreads at 2.2% are slightly wider than peers by 4%, indicating potential trading cost improvements."
      ],
      "peer_context": "Liquidity substantially outperforms peers on volume and trade counts but lags slightly in spread efficiency."
    },
    "market_comparison": {
      "adv": {
        "insight": "ADV at S$602K is drastically higher than peer median of S$16.6K, indicating superior liquidity.",
        "vs_market": "ADV is well above general market norms for small caps.",
        "vs_sector": "Volume outstrips sector peers by over 3500%.",
        "vs_peers": "ADV surpasses peers by 36 times, reinforcing dominant trading interest."
      },
      "spread": {
        "insight": "Spread of 2.2% is marginally wider than peer median 2.11%, adding modest trading cost.",
        "vs_market": "Spread slightly above average market levels for similar size stocks.",
        "vs_sector": "Sector typical spread is close but slightly lower than TKU.",
        "vs_peers": "Peers maintain marginally narrower spreads, signaling cost efficiency opportunity."
      },
      "volatility": {
        "insight": "Volatility at 2.89% is typical for sector, supporting active price discovery.",
        "vs_market": "Elevated relative to general market volatility, reflecting stock's beta characteristics.",
        "vs_sector": "Consistent with sector volatility profile indicating normal risk environment.",
        "vs_peers": "Peers show similar volatility, confirming comparable trading dynamics."
      },
      "trades": {
        "insight": "171 daily trades well exceed peer median of 8, ensuring ample liquidity and price continuity.",
        "vs_market": "Trade frequency supports competitive liquidity status against market standards.",
        "vs_sector": "Trade counts are notably higher than typical sector stock.",
        "vs_peers": "Peers record substantially fewer daily trades, highlighting TKU's greater market interest."
      }
    },
    "performance": {
      "overall": "TKU's 30-day return of -3.85% trails market +2.13% and sector -2.61%, underperforming peers who lost only -0.26%.",
      "conclusion": "Recent weakness suggests stock-specific or sector pressures impacting relative value."
    },
    "drivers": {
      "overall": "Price changes are predominantly driven by company-specific information, accounting for 67.9% of variation.",
      "interpretation": "Stock price largely influenced by internal fundamentals rather than market or sector moves.",
      "rolling_change": "Consistent dominance of company factors observed over last quarters.",
      "beta": "Negative market beta (-0.81) implies inverse relationship to market trends; high sector beta (5.61) shows sensitivity to sector swings."
    },
    "regime": {
      "overall": "Liquidity regimes indicate TKU spends 83% of time in medium liquidity state with a mean score around 60.",
      "current": "Presently in medium liquidity regime consistent with recent periods.",
      "transitions": "Low liquidity state occurs roughly 17% of time, with transitions mostly back to medium liquidity.",
      "trading_implications": "Stable liquidity regime favored for execution strategies with monitoring for low liquidity episodes."
    },
    "trader_composition": {
      "overall": "Trading activity is heavily retail-driven at 90%, with marginal institutional presence at 0.8%.",
      "retail_heavy": "Retail dominance is much greater than typical peer stocks, implying retail investor reliance.",
      "institutional_gap": "Minimal institutional activity may impact liquidity resilience during volatility.",
      "peer_comparison": "Peers generally show higher institutional proportions; TKU's profile is retail concentrated."
    },
    "price_moving": {
      "overall": "20% of trades move prices, reflecting active trading that contributes to price formation.",
      "interpretation": "Liquidity is thus dynamic but could allow for meaningful price shifts on size.",
      "asymmetry": "No noted asymmetry in price-moving trades reported."
    },
    "short_selling": {
      "overall": "Short interest is low at 0.32% with no significant correlation to returns observed.",
      "level": "Short ratio indicates limited short selling pressure on TKU.",
      "correlation": "No notable relationship between short activity and stock price changes.",
      "trend": "Stable low short ratios suggest little downward speculation."
    },
    "execution": {
      "overall": "Small size orders up to 100K shares execute fully with low price impact (-1.15%).",
      "concern": "Larger orders (1M+) suffer significant price impact (-6.9%) and reduced fill rates, impacting large trade execution.",
      "peer_context": "Execution quality is good for retail-sized trades; institutional size fills may face challenges."
    },
    "intraday": {
      "overall": "Trading is predominantly continuous session (94.2%), ensuring liquidity through market hours.",
      "hhi_interpretation": "HHI of 0.196 shows moderate concentration, indicating neither overly scattered nor concentrated trading.",
      "best_times": "Continuous hours are optimal for trade execution; auction participation is low at 5.8%.",
      "peer_ranking": "Intraday liquidity profile aligns well with peer activity patterns."
    },
    "ofi": {
      "overall": "Order flow shows balanced buying and selling pressure on average with no extreme imbalances detected.",
      "daily_vs_intraday": "Daily OFI aggregates versus intraday patterns suggest consistent order book dynamics.",
      "l2_signal": "Short-term L2 order book signals provide actionable information for trade timing.",
      "day_breakdown": "No atypical days with unusual order imbalance reported recently."
    },
    "index": {
      "overall": "Medium liquidity regime and strong volume favor index inclusion, though wider spread may affect eligibility.",
      "recommendation": "Maintain focus on cost management and stable liquidity to support index eligibility."
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
        85.66308243727599,
        82.25806451612904,
        50.0,
        32.97491039426524,
        48.2078853046595,
        2.5089605734767026,
        5.913978494623656,
        73.83512544802868,
        76.34408602150538
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
        "volatility": 0.02886792452830189,
        "adv": 602462.0,
        "spread_pct": 0.02202090592334495,
        "turnover_ratio": 0.004249604844882716,
        "amihud": 4.34059440714335e-08,
        "trades": 171.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.00891351814209521,
          "median": 0.006462623465185724,
          "min": 0.0,
          "max": 0.10555555555555557,
          "p5": 0.0,
          "p95": 0.029343811223911595,
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
          "mean": 0.004972008628528722,
          "median": 0.00032052915615159166,
          "min": 0.0,
          "max": 1.4501351262276712,
          "p5": 0.0,
          "p95": 0.009990112257664944,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00021947905849592863,
          "median": 9.807055030311168e-08,
          "min": 0.0,
          "max": 0.04901960784313725,
          "p5": 0.0,
          "p95": 8.92403056348297e-05,
          "count": 547
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
          "mean": 0.009867747743301278,
          "median": 0.006411866942254124,
          "min": 0.0,
          "max": 0.02886792452830189,
          "p5": 0.0,
          "p95": 0.026457387658372054,
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
          "mean": 0.00023604193913845536,
          "median": 1.1576763630015749e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.3538024721516097e-10,
          "p95": 0.0012266988305784105,
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
          "mean": 0.008283445660570973,
          "median": 0.008335546150795431,
          "min": 0.0,
          "max": 0.02198067632850237,
          "p5": 0.0,
          "p95": 0.019631816135310735,
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
          "mean": 0.00023604295073536026,
          "median": 1.0997027783701744e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 6.074988362995309e-09,
          "p95": 0.0012266988305784105,
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
        "regime_method": "liquidity_score_markov",
        "n_regimes": 2,
        "labels": [
          "Low Liquidity",
          "Medium Liquidity"
        ],
        "pct_time": [
          0.16666666666666666,
          0.8333333333333334
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Liquidity",
            "liquidity_score": 10.416666666666668,
            "pct_time": 0.16666666666666666
          },
          {
            "id": 1,
            "label": "Medium Liquidity",
            "liquidity_score": 60.41666666666667,
            "pct_time": 0.8333333333333334
          }
        ],
        "transitions": [
          [
            0.7501373069452079,
            0.2498626930547921
          ],
          [
            0.05001760710623382,
            0.9499823928937662
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
