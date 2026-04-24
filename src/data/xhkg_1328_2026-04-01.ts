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
      "ticker": "1328",
      "name": "GOLDSTREAM INV",
      "marketCap": 739457118.72,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6959",
      "name": "CHANGJIU HLDGS",
      "marketCap": 1010800000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1483",
      "name": "NET-A-GO TECH",
      "marketCap": 983340000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "8418",
      "name": "OPTIMA AUTO",
      "marketCap": 918000000.0000001,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1463",
      "name": "C-LINK SQ",
      "marketCap": 876646706.585,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2180",
      "name": "MANPOWER GRC",
      "marketCap": 1110151750.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6100",
      "name": "TONGDAO LIEPIN",
      "marketCap": 1337998711.1,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1586",
      "name": "LEON INSPECTION",
      "marketCap": 979676806.06,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2521",
      "name": "SHENGHUI CLEAN",
      "marketCap": 2047221750.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1328",
    "company": "GOLDSTREAM INV",
    "asof_date": "2026-04-01",
    "industry": "Consumer Discretionary - Support Services",
    "sector": "Other Support Services",
    "market_cap_display": "739.5M",
    "market_cap_category": "mid",
    "universe_total": 2607,
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
          "score_pca": 47.44917529727656,
          "score_pca_percentile": 47.44917529727656,
          "rank_pca": 1371,
          "total": 2607,
          "adv_notional_sgd": 362850.0,
          "adv_volume_shares": 123000.0,
          "free_float_shares": 55265787.0,
          "turnover_ratio": 0.0022256084039841864,
          "votes": 18.0,
          "trades": 18.0,
          "spread_pct": 0.0518356617538471,
          "spread_ticks": 14.936170212765957,
          "amihud": 6.698513312816751e-08,
          "volatility": 0.463530841102323
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5495416588409058,
          "loadings": {
            "log_adv": 0.5356484085715254,
            "log_trades": 0.4964819672465921,
            "log_turnover": 0.5004793728776782,
            "neg_spread": 0.4022061112581351,
            "neg_amihud": 0.049081029685999394,
            "neg_vol": -0.22787745063802015
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
          "peer_median_adv": 163502.5,
          "peer_median_score_pca": 36.93901035673188,
          "peer_median_trades": 15.5,
          "peer_median_volatility": 0.42062374307910655,
          "peer_median_spread_pct": 0.058669910420861796,
          "peer_median_spread_ticks": 9.975877192982455,
          "peer_median_amihud": 8.822906345518712e-08,
          "peer_median_turnover_ratio": 0.00033539035759638607,
          "target_vs_peer": {
            "score_pca_delta": 10.51,
            "adv_delta_pct": 121.9,
            "trades_delta_pct": 16.13,
            "volatility_delta_pct": -10.2,
            "spread_pct_delta_pct": 11.65,
            "spread_ticks_delta_pct": 49.72,
            "amihud_delta_pct": 24.08,
            "turnover_ratio_delta_pct": 563.59
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 47.44917529727656,
            "rank_pca": 1371,
            "adv": 362850.0,
            "trades": 18.0,
            "volatility": 0.463530841102323,
            "spread_pct": 0.0518356617538471,
            "spread_ticks": 14.936170212765957,
            "amihud": 6.698513312816751e-08,
            "turnover_ratio": 0.0022256084039841864,
            "is_target": true
          },
          {
            "ticker": "6959",
            "score_pca": 31.56885308784043,
            "rank_pca": 1785,
            "adv": 30380.000000000004,
            "trades": 8.0,
            "volatility": 0.6305513182370958,
            "spread_pct": 0.05877093874342977,
            "spread_ticks": 28.21698113207547,
            "amihud": 6.583278472679362e-07,
            "turnover_ratio": 9.974259974259975e-05,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 29.842731108553895,
            "rank_pca": 1830,
            "adv": 547200.0,
            "trades": 14.0,
            "volatility": 0.0,
            "spread_pct": 0.1242829827915871,
            "spread_ticks": 15.757575757575758,
            "amihud": 0.0,
            "turnover_ratio": 0.0010563722878336491,
            "is_target": false
          },
          {
            "ticker": "8418",
            "score_pca": 60.98964326812428,
            "rank_pca": 1018,
            "adv": 236220.0,
            "trades": 33.0,
            "volatility": 3.4178779232790166,
            "spread_pct": 0.14113410453099184,
            "spread_ticks": 18.222929936305732,
            "amihud": 7.447545759289045e-07,
            "turnover_ratio": 0.00034309746919501216,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 2.9535864978902953,
            "rank_pca": 2531,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.1824918943955535,
            "spread_ticks": 10.368421052631579,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 42.309167625623324,
            "rank_pca": 1505,
            "adv": 90785.0,
            "trades": 17.0,
            "volatility": 0.21069616792111728,
            "spread_pct": 0.01397857263779056,
            "spread_ticks": 7.605263157894737,
            "amihud": 1.4412196012042592e-07,
            "turnover_ratio": 0.00032768324599776,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 80.36056770233986,
            "rank_pca": 513,
            "adv": 4510548.0,
            "trades": 848.0,
            "volatility": 1.0791565768593168,
            "spread_pct": 0.00575788527405535,
            "spread_ticks": 1.6515711645101663,
            "amihud": 2.426178864833074e-08,
            "turnover_ratio": 0.0069595901707741985,
            "is_target": false
          },
          {
            "ticker": "1586",
            "score_pca": 12.31300345224396,
            "rank_pca": 2287,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.05856888209829383,
            "spread_ticks": 9.583333333333334,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 65.86114307633295,
            "rank_pca": 891,
            "adv": 1767150.0,
            "trades": 111.0,
            "volatility": 0.9174008719547184,
            "spread_pct": 0.022748706810322674,
            "spread_ticks": 2.327485380116959,
            "amihud": 3.233616678994831e-08,
            "turnover_ratio": 0.002051865645906614,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4815050482238079,
              "median": 0.343149098399249,
              "min": 0.0,
              "max": 10.150540723275236,
              "p5": 0.0,
              "p95": 1.4498345274708844,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 86183438.37309761,
              "median": 286000.0,
              "min": 0.0,
              "max": 10561587990.2,
              "p5": 0.0,
              "p95": 301975342.42199993,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05029979686568031,
              "median": 0.027869940278699424,
              "min": 0.0005061340649462837,
              "max": 0.7648559970834851,
              "p5": 0.0013698726131500202,
              "p95": 0.1722648239018552,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0064885491965258795,
              "median": 0.0011941199235876348,
              "min": 0.0,
              "max": 0.6098615669688484,
              "p5": 0.0,
              "p95": 0.024815763803591302,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.434243215363578e-06,
              "median": 1.0601641751867905e-08,
              "min": 0.0,
              "max": 0.003349282296650716,
              "p5": 0.0,
              "p95": 6.334044895486184e-06,
              "count": 2216
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1503.1388569236672,
              "median": 25.0,
              "min": 0.0,
              "max": 84077.0,
              "p5": 0.0,
              "p95": 8087.199999999979,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.600501447134955,
              "median": 0.2797365643282662,
              "min": 0.0,
              "max": 3.4178779232790166,
              "p5": 0.0,
              "p95": 2.0046011288349845,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 760807.2761904763,
              "median": 60058.5,
              "min": 0.0,
              "max": 10622523.6,
              "p5": 0.0,
              "p95": 4148003.749999998,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06871598771282669,
              "median": 0.05171001952836056,
              "min": 0.004196460359554002,
              "max": 0.19527760051052961,
              "p5": 0.008846508961176756,
              "p95": 0.18146573368025,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006045169245882596,
              "median": 0.00036586250019374255,
              "min": 0.0,
              "max": 0.1665388068503643,
              "p5": 0.0,
              "p95": 0.008665935482373745,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1323116780106735e-05,
              "median": 1.2599764938785304e-07,
              "min": 0.0,
              "max": 0.0003289473684210525,
              "p5": 0.0,
              "p95": 5.84453361095298e-06,
              "count": 31
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 72.76190476190476,
              "median": 13.5,
              "min": 0.0,
              "max": 848.0,
              "p5": 0.0,
              "p95": 269.84999999999997,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 897785.375,
              "median": 163502.5,
              "min": 0.0,
              "max": 4510548.0,
              "p5": 0.0,
              "p95": 3550358.6999999983,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 128.875,
              "median": 15.5,
              "min": 0.0,
              "max": 848.0,
              "p5": 0.0,
              "p95": 590.0499999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7819603572814081,
              "median": 0.42062374307910655,
              "min": 0.0,
              "max": 3.4178779232790166,
              "p5": 0.0,
              "p95": 2.5993254520321205,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07596674591025307,
              "median": 0.058669910420861796,
              "min": 0.00575788527405535,
              "max": 0.1824918943955535,
              "p5": 0.008635125851362674,
              "p95": 0.1680166679429569,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 11.716695114305466,
              "median": 9.975877192982455,
              "min": 1.6515711645101663,
              "max": 28.21698113207547,
              "p5": 1.8881411399725438,
              "p95": 24.71906321355606,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.673003897925909e-07,
              "median": 8.822906345518712e-08,
              "min": 0.0,
              "max": 7.447545759289045e-07,
              "p5": 6.065447162082685e-09,
              "p95": 7.231478937636625e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013547939274312292,
              "median": 0.00033539035759638607,
              "min": 0.0,
              "max": 0.0069595901707741985,
              "p5": 0.0,
              "p95": 0.005241886587070542,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.02430555555555558,
            "market": 0.013147967527018523,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.011157588028537058,
            "vs_sector": 0.02430555555555558,
            "vs_peers": 0.02430555555555558
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 44.61066359800537,
          "score_pca_percentile": 44.61066359800537,
          "rank_pca": 1445,
          "total": 2607,
          "adv_notional_sgd": 88740.0,
          "adv_volume_shares": 31000.0,
          "free_float_shares": 55265787.0,
          "turnover_ratio": 0.0005609256953130877,
          "votes": 13.0,
          "trades": 13.0,
          "spread_pct": 0.0301199620264089,
          "spread_ticks": 9.037383177570094,
          "amihud": 1.224369857646601e-07,
          "volatility": 0.7231305085966441
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5724814763823942,
          "loadings": {
            "log_adv": 0.5214752824918063,
            "log_trades": 0.4763550371692524,
            "log_turnover": 0.48014363818837885,
            "neg_spread": 0.4554944926057694,
            "neg_amihud": 0.2436592042531785,
            "neg_vol": 0.06137144620520919
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
          "peer_median_adv": 114470.0,
          "peer_median_score_pca": 36.49789029535865,
          "peer_median_trades": 11.5,
          "peer_median_volatility": 0.7267382010946362,
          "peer_median_spread_pct": 0.045450020190291124,
          "peer_median_spread_ticks": 7.3,
          "peer_median_amihud": 1.2184342619990885e-07,
          "peer_median_turnover_ratio": 0.0002259654620536645,
          "target_vs_peer": {
            "score_pca_delta": 8.11,
            "adv_delta_pct": -22.5,
            "trades_delta_pct": 13.04,
            "volatility_delta_pct": 0.5,
            "spread_pct_delta_pct": 33.73,
            "spread_ticks_delta_pct": 23.8,
            "amihud_delta_pct": -0.49,
            "turnover_ratio_delta_pct": 148.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 44.61066359800537,
            "rank_pca": 1445,
            "adv": 88740.0,
            "trades": 13.0,
            "volatility": 0.7231305085966441,
            "spread_pct": 0.0301199620264089,
            "spread_ticks": 9.037383177570094,
            "amihud": 1.224369857646601e-07,
            "turnover_ratio": 0.0005609256953130877,
            "is_target": true
          },
          {
            "ticker": "6959",
            "score_pca": 37.05408515535098,
            "rank_pca": 1642,
            "adv": 63603.00000000001,
            "trades": 7.0,
            "volatility": 0.6045827644698478,
            "spread_pct": 0.0418804325374451,
            "spread_ticks": 23.450704225352112,
            "amihud": 1.1963547184715176e-07,
            "turnover_ratio": 0.00017857142857142857,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 35.94169543536632,
            "rank_pca": 1671,
            "adv": 138060.0,
            "trades": 7.0,
            "volatility": 1.6052656513288555,
            "spread_pct": 0.04901960784313716,
            "spread_ticks": 5.571428571428571,
            "amihud": 1.1783337418223684e-07,
            "turnover_ratio": 0.00027335949553590044,
            "is_target": false
          },
          {
            "ticker": "8418",
            "score_pca": 21.86421173762946,
            "rank_pca": 2038,
            "adv": 90880.0,
            "trades": 16.0,
            "volatility": 1.4003170926598412,
            "spread_pct": 0.13665293897416697,
            "spread_ticks": 11.154761904761905,
            "amihud": 4.5723691730870404e-07,
            "turnover_ratio": 0.00015494724415258615,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 15.420023014959725,
            "rank_pca": 2206,
            "adv": 2500.0,
            "trades": 2.0,
            "volatility": 0.9074143552383019,
            "spread_pct": 0.10222752585521082,
            "spread_ticks": 5.933333333333334,
            "amihud": 2.86805889415536e-07,
            "turnover_ratio": 8.315787022715405e-06,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 54.04679708477177,
            "rank_pca": 1199,
            "adv": 215175.0,
            "trades": 39.0,
            "volatility": 0.8042185135019648,
            "spread_pct": 0.022566128446179518,
            "spread_ticks": 12.267175572519085,
            "amihud": 1.2405138055266597e-07,
            "turnover_ratio": 0.000738510002174056,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 73.53279631760644,
            "rank_pca": 691,
            "adv": 2244600.0,
            "trades": 637.0,
            "volatility": 0.6492578886873076,
            "spread_pct": 0.005948571330689187,
            "spread_ticks": 1.7197930142302718,
            "amihud": 1.1325042359703088e-08,
            "turnover_ratio": 0.0033940590312692316,
            "is_target": false
          },
          {
            "ticker": "1586",
            "score_pca": 11.238971998465669,
            "rank_pca": 2315,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.21621480944066665,
            "spread_pct": 0.05154894671623293,
            "spread_ticks": 8.666666666666666,
            "amihud": 7.04105871814723e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 69.12159570387418,
            "rank_pca": 806,
            "adv": 4857450.0,
            "trades": 119.0,
            "volatility": 0.6042711108767753,
            "spread_pct": 0.01917685853028097,
            "spread_ticks": 2.174484052532833,
            "amihud": 5.494294175498747e-09,
            "turnover_ratio": 0.0052589833781640115,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6705629443083656,
              "median": 0.5505121850438891,
              "min": 0.0,
              "max": 12.575339065692916,
              "p5": 0.2137048460675019,
              "p95": 1.530535888280091,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 71755060.10210612,
              "median": 221400.0,
              "min": 0.0,
              "max": 13520726500.0,
              "p5": 0.0,
              "p95": 253237799.44399986,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04631721433300971,
              "median": 0.029033677110318085,
              "min": 0.0005766037246855124,
              "max": 0.8484231943031536,
              "p5": 0.0014499608623189312,
              "p95": 0.14580575733118092,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004612597812088855,
              "median": 0.0008804158222755281,
              "min": 0.0,
              "max": 0.8831474735556349,
              "p5": 0.0,
              "p95": 0.01625981097505356,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2059373702050112e-06,
              "median": 4.786843640975599e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.5895116541956826e-11,
              "p95": 4.939319395129787e-06,
              "count": 2600
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1234.9733410049867,
              "median": 20.0,
              "min": 0.0,
              "max": 108394.0,
              "p5": 0.0,
              "p95": 6115.399999999976,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7676188860149715,
              "median": 0.6453283288735986,
              "min": 0.0,
              "max": 2.4502506202984278,
              "p5": 0.21708210050529747,
              "p95": 1.532264498379394,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1181145.6,
              "median": 29680.0,
              "min": 0.0,
              "max": 14508000.0,
              "p5": 0.0,
              "p95": 6951088.499999991,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06400935633158385,
              "median": 0.04939689914593675,
              "min": 0.0041700192772400144,
              "max": 0.2201884253028265,
              "p5": 0.00632841834091115,
              "p95": 0.15959845779605766,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014593487685410989,
              "median": 0.000322691572083893,
              "min": 0.0,
              "max": 0.012802319589258133,
              "p5": 0.0,
              "p95": 0.006024909456622379,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3557914507340973e-06,
              "median": 1.2324418315866305e-07,
              "min": 0.0,
              "max": 1.6996752382054402e-05,
              "p5": 2.263045906483625e-11,
              "p95": 7.072158205335623e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 90.52380952380952,
              "median": 6.5,
              "min": 0.0,
              "max": 1048.0,
              "p5": 0.0,
              "p95": 622.6499999999995,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 951533.5,
              "median": 114470.0,
              "min": 0.0,
              "max": 4857450.0,
              "p5": 875.0000000000001,
              "p95": 3942952.4999999986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 103.375,
              "median": 11.5,
              "min": 0.0,
              "max": 637.0,
              "p5": 0.7000000000000001,
              "p95": 455.6999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8489427732754451,
              "median": 0.7267382010946362,
              "min": 0.21621480944066665,
              "max": 1.6052656513288555,
              "p5": 0.35203451494330473,
              "p95": 1.5335336557947004,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05362762627916783,
              "median": 0.045450020190291124,
              "min": 0.005948571330689187,
              "max": 0.13665293897416697,
              "p5": 0.010578471850546311,
              "p95": 0.1246040443825323,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.867293417603097,
              "median": 7.3,
              "min": 1.7197930142302718,
              "max": 23.450704225352112,
              "p5": 1.878934877636168,
              "p95": 19.536469196860548,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2831103020702744e-07,
              "median": 1.2184342619990885e-07,
              "min": 5.494294175498747e-09,
              "max": 7.04105871814723e-07,
              "p5": 7.535056039970266e-09,
              "p95": 6.177017377376162e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001250843295861241,
              "median": 0.0002259654620536645,
              "min": 0.0,
              "max": 0.0052589833781640115,
              "p5": 2.910525457950392e-06,
              "p95": 0.0046062598567508375,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.042402826855123976,
            "market": -0.01934411605736608,
            "sector": -0.007343763820231386,
            "peers": -0.057025010111583785,
            "vs_market": 0.061746942912490055,
            "vs_sector": 0.04974659067535536,
            "vs_peers": 0.09942783696670776
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 46.95051783659379,
          "score_pca_percentile": 46.95051783659379,
          "rank_pca": 1384,
          "total": 2607,
          "adv_notional_sgd": 142500.0,
          "adv_volume_shares": 49000.0,
          "free_float_shares": 55265787.0,
          "turnover_ratio": 0.0008866244861400418,
          "votes": 15.0,
          "trades": 15.0,
          "spread_pct": 0.02797580054718508,
          "spread_ticks": 8.724770642201834,
          "amihud": 1.236858379715524e-07,
          "volatility": 0.8802090644425372
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6196774910555123,
          "loadings": {
            "log_adv": 0.49851203593978743,
            "log_trades": 0.4508471222417868,
            "log_turnover": 0.45203761050946806,
            "neg_spread": 0.46020974856788227,
            "neg_amihud": 0.33459393092888134,
            "neg_vol": 0.14191021733125717
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
          "peer_median_adv": 141530.0,
          "peer_median_score_pca": 36.26774069812045,
          "peer_median_trades": 13.0,
          "peer_median_volatility": 0.6603108854950506,
          "peer_median_spread_pct": 0.04634881385864045,
          "peer_median_spread_ticks": 8.208083926658686,
          "peer_median_amihud": 9.893563102917607e-08,
          "peer_median_turnover_ratio": 0.00023813330048690545,
          "target_vs_peer": {
            "score_pca_delta": 10.68,
            "adv_delta_pct": 0.7,
            "trades_delta_pct": 15.38,
            "volatility_delta_pct": -33.3,
            "spread_pct_delta_pct": 39.64,
            "spread_ticks_delta_pct": 6.29,
            "amihud_delta_pct": -25.02,
            "turnover_ratio_delta_pct": 272.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 46.95051783659379,
            "rank_pca": 1384,
            "adv": 142500.0,
            "trades": 15.0,
            "volatility": 0.8802090644425372,
            "spread_pct": 0.02797580054718508,
            "spread_ticks": 8.724770642201834,
            "amihud": 1.236858379715524e-07,
            "turnover_ratio": 0.0008866244861400418,
            "is_target": true
          },
          {
            "ticker": "6959",
            "score_pca": 37.782892213271964,
            "rank_pca": 1623,
            "adv": 42048.0,
            "trades": 6.0,
            "volatility": 0.4077286692038454,
            "spread_pct": 0.034157904333556206,
            "spread_ticks": 19.422131147540984,
            "amihud": 1.1613886210902625e-07,
            "turnover_ratio": 0.00011743886743886744,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 34.75258918296893,
            "rank_pca": 1702,
            "adv": 138060.0,
            "trades": 8.0,
            "volatility": 0.9781789507948068,
            "spread_pct": 0.0585397233837247,
            "spread_ticks": 6.271186440677966,
            "amihud": 6.41359501061751e-08,
            "turnover_ratio": 0.00027335949553590044,
            "is_target": false
          },
          {
            "ticker": "8418",
            "score_pca": 26.237054085155354,
            "rank_pca": 1924,
            "adv": 145600.0,
            "trades": 18.0,
            "volatility": 1.6358296827635248,
            "spread_pct": 0.09209282789037067,
            "spread_ticks": 10.144981412639405,
            "amihud": 2.2658636104014253e-07,
            "turnover_ratio": 0.00020290710543791044,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 7.633294975067127,
            "rank_pca": 2409,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7485159378785631,
            "spread_pct": 0.10222752585521082,
            "spread_ticks": 6.176470588235294,
            "amihud": 3.1531559239457176e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 50.210970464135016,
            "rank_pca": 1299,
            "adv": 145000.0,
            "trades": 18.0,
            "volatility": 0.5365571528153827,
            "spread_pct": 0.022528075656505955,
            "spread_ticks": 11.49367088607595,
            "amihud": 8.173239994932589e-08,
            "turnover_ratio": 0.0005673321871005994,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 75.22056003068661,
            "rank_pca": 647,
            "adv": 3890096.0,
            "trades": 687.0,
            "volatility": 0.5721058331115381,
            "spread_pct": 0.005370542324390787,
            "spread_ticks": 1.8541076487252124,
            "amihud": 4.483701670446851e-09,
            "turnover_ratio": 0.0046932551106003036,
            "is_target": false
          },
          {
            "ticker": "1586",
            "score_pca": 9.359416954353664,
            "rank_pca": 2364,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.514270177561288,
            "spread_pct": 0.06461617989144489,
            "spread_ticks": 13.0,
            "amihud": 2.742430890741545e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.12696586114308,
            "rank_pca": 858,
            "adv": 4708800.0,
            "trades": 149.0,
            "volatility": 1.1638889976579188,
            "spread_pct": 0.022748706810322674,
            "spread_ticks": 2.153973509933775,
            "amihud": 5.494294175498747e-09,
            "turnover_ratio": 0.005103800262087041,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7059322862146338,
              "median": 0.575564587224027,
              "min": 0.0,
              "max": 8.183697405562258,
              "p5": 0.22330552283354,
              "p95": 1.5782313809539008,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66215616.09624845,
              "median": 228456.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 242448277.40299994,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04325488702652863,
              "median": 0.027397260273972525,
              "min": 0.0005617553716258445,
              "max": 0.5518881068100528,
              "p5": 0.0014262511987463344,
              "p95": 0.13685612377246612,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003847582234451719,
              "median": 0.0008899112114782459,
              "min": 0.0,
              "max": 0.3433986721729665,
              "p5": 0.0,
              "p95": 0.015306235491922626,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.138111373489436e-07,
              "median": 4.705466057591155e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.3395212257094994e-11,
              "p95": 3.527007194011162e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1117.2721518987341,
              "median": 20.0,
              "min": 0.0,
              "max": 103821.0,
              "p5": 0.0,
              "p95": 5842.899999999999,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8574189193281894,
              "median": 0.6586319730634481,
              "min": 0.17326626539147355,
              "max": 2.4896285387870596,
              "p5": 0.2602794143473075,
              "p95": 2.154459690064783,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1401360.4352380952,
              "median": 54210.0,
              "min": 0.0,
              "max": 17515799.28,
              "p5": 0.0,
              "p95": 6726979.199999998,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06056660870439965,
              "median": 0.05106204423003127,
              "min": 0.00409656135702108,
              "max": 0.22673434856175978,
              "p5": 0.005383665705786427,
              "p95": 0.12987208966024835,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018833878990070982,
              "median": 0.0002989143576467208,
              "min": 0.0,
              "max": 0.014457630479822415,
              "p5": 0.0,
              "p95": 0.011888400225642666,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1380700831975414e-06,
              "median": 2.2127628873223506e-07,
              "min": 0.0,
              "max": 1.6033349366682706e-05,
              "p5": 1.1788657147248896e-09,
              "p95": 5.245601863111225e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 112.95238095238095,
              "median": 7.0,
              "min": 0.0,
              "max": 1583.0,
              "p5": 0.0,
              "p95": 681.1999999999995,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1133700.5,
              "median": 141530.0,
              "min": 0.0,
              "max": 4708800.0,
              "p5": 0.0,
              "p95": 4422253.6,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 110.75,
              "median": 13.0,
              "min": 0.0,
              "max": 687.0,
              "p5": 0.0,
              "p95": 498.6999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8196344252233584,
              "median": 0.6603108854950506,
              "min": 0.4077286692038454,
              "max": 1.6358296827635248,
              "p5": 0.4450181971289503,
              "p95": 1.4706504429765626,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05028518576819084,
              "median": 0.04634881385864045,
              "min": 0.005370542324390787,
              "max": 0.10222752585521082,
              "p5": 0.011375678990631095,
              "p95": 0.09868038156751677,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.814565204228572,
              "median": 8.208083926658686,
              "min": 1.8541076487252124,
              "max": 19.422131147540984,
              "p5": 1.9590607001482092,
              "p95": 17.174385245901636,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.360162813149177e-07,
              "median": 9.893563102917607e-08,
              "min": 4.483701670446851e-09,
              "max": 3.1531559239457176e-07,
              "p5": 4.837409047215015e-09,
              "p95": 3.009402162324257e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013697616285250778,
              "median": 0.00023813330048690545,
              "min": 0.0,
              "max": 0.005103800262087041,
              "p5": 0.0,
              "p95": 0.004960109459066683,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.003401360544218024,
            "market": 0.0744907328886586,
            "sector": -0.007343763820231386,
            "peers": -0.04034316494176515,
            "vs_market": -0.07108937234444057,
            "vs_sector": 0.01074512436444941,
            "vs_peers": 0.04374452548598318
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 53.01112389719984,
          "score_pca_percentile": 53.01112389719984,
          "rank_pca": 1226,
          "total": 2607,
          "adv_notional_sgd": 268262.8,
          "adv_volume_shares": 79500.0,
          "free_float_shares": 55265787.0,
          "turnover_ratio": 0.0014385029928190474,
          "votes": 28.0,
          "trades": 28.0,
          "spread_pct": 0.02734067547056791,
          "spread_ticks": 9.71134974732636,
          "amihud": 8.598314975930844e-08,
          "volatility": 0.9178047909961828
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6229304169078096,
          "loadings": {
            "log_adv": 0.49875508928466344,
            "log_trades": 0.45372832787823847,
            "log_turnover": 0.45012640281174693,
            "neg_spread": 0.46229051949270444,
            "neg_amihud": 0.3395679405145867,
            "neg_vol": 0.11722318988608826
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
          "peer_median_adv": 79694.5,
          "peer_median_score_pca": 34.88684311469122,
          "peer_median_trades": 9.5,
          "peer_median_volatility": 0.529657695246219,
          "peer_median_spread_pct": 0.04209256494172867,
          "peer_median_spread_ticks": 7.887530193236714,
          "peer_median_amihud": 1.239137056450938e-07,
          "peer_median_turnover_ratio": 0.00021933686553604652,
          "target_vs_peer": {
            "score_pca_delta": 18.12,
            "adv_delta_pct": 236.6,
            "trades_delta_pct": 194.74,
            "volatility_delta_pct": -73.28,
            "spread_pct_delta_pct": 35.05,
            "spread_ticks_delta_pct": 23.12,
            "amihud_delta_pct": 30.61,
            "turnover_ratio_delta_pct": 555.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 53.01112389719984,
            "rank_pca": 1226,
            "adv": 268262.8,
            "trades": 28.0,
            "volatility": 0.9178047909961828,
            "spread_pct": 0.02734067547056791,
            "spread_ticks": 9.71134974732636,
            "amihud": 8.598314975930844e-08,
            "turnover_ratio": 0.0014385029928190474,
            "is_target": true
          },
          {
            "ticker": "6959",
            "score_pca": 41.657077100115075,
            "rank_pca": 1522,
            "adv": 78439.0,
            "trades": 9.0,
            "volatility": 0.4082665109276581,
            "spread_pct": 0.030856990257553066,
            "spread_ticks": 18.41138097149739,
            "amihud": 1.2270729597948667e-07,
            "turnover_ratio": 0.00020994208494208493,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 24.28078250863061,
            "rank_pca": 1975,
            "adv": 36360.0,
            "trades": 3.0,
            "volatility": 0.8010640481754429,
            "spread_pct": 0.07621212418268623,
            "spread_ticks": 8.194444444444443,
            "amihud": 1.4665423038792965e-07,
            "turnover_ratio": 7.41313886199052e-05,
            "is_target": false
          },
          {
            "ticker": "8418",
            "score_pca": 28.116609129267356,
            "rank_pca": 1875,
            "adv": 80950.0,
            "trades": 15.0,
            "volatility": 1.328975203198319,
            "spread_pct": 0.08435463777907554,
            "spread_ticks": 7.580615942028985,
            "amihud": 3.601722351722355e-07,
            "turnover_ratio": 0.00022873164613000812,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 8.553893364019945,
            "rank_pca": 2385,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5736986050363364,
            "spread_pct": 0.0727921438230313,
            "spread_ticks": 6.0549019607843135,
            "amihud": 3.0222963094714087e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 45.684695051783656,
            "rank_pca": 1417,
            "adv": 102007.5,
            "trades": 10.0,
            "volatility": 0.43297239318893255,
            "spread_pct": 0.024042457390515266,
            "spread_ticks": 12.477777777777778,
            "amihud": 9.537794655859218e-08,
            "turnover_ratio": 0.00037170039844522027,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 75.98772535481396,
            "rank_pca": 627,
            "adv": 4024856.0,
            "trades": 798.0,
            "volatility": 0.48561678545610154,
            "spread_pct": 0.005056693035712649,
            "spread_ticks": 1.8063132573057734,
            "amihud": 4.234768990429982e-09,
            "turnover_ratio": 0.005113316412786258,
            "is_target": false
          },
          {
            "ticker": "1586",
            "score_pca": 27.617951668584578,
            "rank_pca": 1888,
            "adv": 23800.0,
            "trades": 2.0,
            "volatility": 0.4379717977339572,
            "spread_pct": 0.05332813962590428,
            "spread_ticks": 11.395794681508967,
            "amihud": 1.2512011531070094e-07,
            "turnover_ratio": 7.161095130762641e-05,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.12696586114308,
            "rank_pca": 858,
            "adv": 3847375.0,
            "trades": 134.5,
            "volatility": 1.0872606829078453,
            "spread_pct": 0.02437581838866981,
            "spread_ticks": 1.9479535229109335,
            "amihud": 7.274399246701434e-09,
            "turnover_ratio": 0.006901338023311953,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2607,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7396079631025353,
              "median": 0.598586141375593,
              "min": 0.026427624109509794,
              "max": 33.692481563841405,
              "p5": 0.22513373713696208,
              "p95": 1.5576225875696148,
              "count": 2607
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 63437686.65700392,
              "median": 219920.0,
              "min": 0.0,
              "max": 13711894082.25,
              "p5": 0.0,
              "p95": 228498387.5579998,
              "count": 2607
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04214684744415255,
              "median": 0.026717477958095707,
              "min": 0.000558678699550006,
              "max": 0.5518881068100528,
              "p5": 0.0013636630694224892,
              "p95": 0.1346544414496083,
              "count": 2607
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035181285746970483,
              "median": 0.0008772740160740871,
              "min": 0.0,
              "max": 0.1465769815616509,
              "p5": 0.0,
              "p95": 0.014294882844372893,
              "count": 2584
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.309446460702591e-07,
              "median": 4.7383929462885906e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.59368247619184e-11,
              "p95": 3.4430568123930607e-06,
              "count": 2607
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.711162255466,
              "median": 21.0,
              "min": 0.0,
              "max": 113413.5,
              "p5": 0.0,
              "p95": 5806.59999999998,
              "count": 2607
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8337566667273395,
              "median": 0.7415963198003839,
              "min": 0.2161049920951255,
              "max": 1.9503128951541966,
              "p5": 0.2498790013895026,
              "p95": 1.8640183868209488,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1433203.9218214285,
              "median": 32209.75,
              "min": 0.0,
              "max": 19624112.34,
              "p5": 0.0,
              "p95": 7286177.499999997,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.058817915029462285,
              "median": 0.05350883875928507,
              "min": 0.003965531524368195,
              "max": 0.1844283589367848,
              "p5": 0.005043778036573468,
              "p95": 0.12171722680609683,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018657996371987816,
              "median": 0.00023636582306500406,
              "min": 0.0,
              "max": 0.017518920024544898,
              "p5": 0.0,
              "p95": 0.006877850967717788,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.547515071129007e-07,
              "median": 1.8226014790070966e-07,
              "min": 0.0,
              "max": 1.0359876754030898e-05,
              "p5": 1.450780631799843e-09,
              "p95": 4.7916921661538245e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 119.30952380952381,
              "median": 6.25,
              "min": 0.0,
              "max": 1729.5,
              "p5": 0.0,
              "p95": 633.4499999999997,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1024223.4375,
              "median": 79694.5,
              "min": 0.0,
              "max": 4024856.0,
              "p5": 8330.0,
              "p95": 3962737.65,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 121.4375,
              "median": 9.5,
              "min": 0.0,
              "max": 798.0,
              "p5": 0.7000000000000001,
              "p95": 565.7749999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6944782533280741,
              "median": 0.529657695246219,
              "min": 0.4082665109276581,
              "max": 1.328975203198319,
              "p5": 0.41691356971910415,
              "p95": 1.2443751210966532,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04637737556039352,
              "median": 0.04209256494172867,
              "min": 0.005056693035712649,
              "max": 0.08435463777907554,
              "p5": 0.011701710559893566,
              "p95": 0.08150475802033928,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.483647819782323,
              "median": 7.887530193236714,
              "min": 1.8063132573057734,
              "max": 18.41138097149739,
              "p5": 1.8558873502675794,
              "p95": 16.33461985369552,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4547132782415214e-07,
              "median": 1.239137056450938e-07,
              "min": 4.234768990429982e-09,
              "max": 3.601722351722355e-07,
              "p5": 5.29863958012499e-09,
              "p95": 3.3989232369345234e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016213463631928819,
              "median": 0.00021933686553604652,
              "min": 0.0,
              "max": 0.006901338023311953,
              "p5": 2.5063832957669246e-05,
              "p95": 0.006275530459627959,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.6371463714637144,
            "market": 0.09749550653948869,
            "sector": -0.010566673677957938,
            "peers": -0.0480034220267459,
            "vs_market": -0.7346418780032031,
            "vs_sector": -0.6265796977857565,
            "vs_peers": -0.5891429494369685
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity is still serviceable today, but trading quality is weaker because the spread is 72.1% above the 1M baseline and the bid side is lighter.",
        "market_comparison": "The stock rose 2.4% compared with peers at 0.0%, which matters because firmer price action can help keep attention on the name even as execution is less smooth."
      },
      "30d": {
        "liquidity": "Liquidity looks solid over the past month, with a score of 44.6 compared with a peer median of 36.5, which supports reasonable access for its size.",
        "market_comparison": "The stock returned 4.2% compared with peers at -5.7%, which matters because stronger performance gives the tape a firmer backdrop than the peer group."
      },
      "3m": {
        "liquidity": "Liquidity has stayed solid over three months, with a score of 47.0 compared with a peer median of 36.3, pointing to consistent accessibility.",
        "market_comparison": "The stock returned 0.3% compared with peers at -4.0%, which matters because relative resilience supports steadier trading interest."
      },
      "6m": {
        "liquidity": "Liquidity is strong over six months, with a score of 53.0 compared with a peer median of 34.9, showing the name trades better than most peers of similar size.",
        "market_comparison": "The stock returned -63.7% compared with peers at -4.8%, which matters because the liquidity profile has remained comparatively strong despite much weaker share-price performance."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 213,
      "reporting_window_days": 63,
      "available_history_days": 213,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.610482500585789,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "61.0%",
          "display_range": null,
          "display_text": "61.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "share_pct",
          "value_pct": 61.0,
          "plain_english": "Market explains about 61.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.29201644908313984,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.2%",
          "display_range": null,
          "display_text": "29.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "share_pct",
          "value_pct": 29.2,
          "plain_english": "Sector explains about 29.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.09750105033107118,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.8%",
          "display_range": null,
          "display_text": "9.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "share_pct",
          "value_pct": 9.8,
          "plain_english": "Company-specific explains about 9.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 3.804228705807759,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.80",
          "display_range": null,
          "display_text": "3.80",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 3.80% stock move in the same direction in this state.",
          "value_num": 3.8
        },
        "beta_stock_lag": {
          "median": -0.5007030226049376,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.50",
          "display_range": null,
          "display_text": "-0.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "lag_beta",
          "value_num": -0.5
        },
        "beta_sector": {
          "median": 3.758832815386329,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.76",
          "display_range": null,
          "display_text": "3.76",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.76% stock move in the same direction in this state.",
          "value_num": 3.76
        },
        "beta_market_lag": {
          "median": 4.890492782990143,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.89",
          "display_range": null,
          "display_text": "4.89",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "lag_beta",
          "value_num": 4.89
        },
        "beta_sector_lag": {
          "median": -7.447107520065901,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.45",
          "display_range": null,
          "display_text": "-7.45",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "kind": "lag_beta",
          "value_num": -7.45
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 213 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45578527831751475,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.6%",
            "display_range": null,
            "display_text": "45.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 45.6,
            "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21173622969268205,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Market explains about 21.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33247849198980334,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.2%",
              "display_range": null,
              "display_text": "33.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 33.2,
              "plain_english": "Sector explains about 33.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45578527831751475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.6%",
              "display_range": null,
              "display_text": "45.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 45.6,
              "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4975999804688979,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.8%",
            "display_range": null,
            "display_text": "49.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 49.8,
            "plain_english": "Market explains about 49.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4975999804688979,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Market explains about 49.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05774228424736717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.8%",
              "display_range": null,
              "display_text": "5.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 5.8,
              "plain_english": "Sector explains about 5.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.444657735283735,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Company-specific explains about 44.5% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly market-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.40694969301044637,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.7%",
            "display_range": null,
            "display_text": "40.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 40.7,
            "plain_english": "Sector explains about 40.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2084944196721819,
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
              "median": 0.40694969301044637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.7%",
              "display_range": null,
              "display_text": "40.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.7,
              "plain_english": "Sector explains about 40.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3845558873173717,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.5%",
              "display_range": null,
              "display_text": "38.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.5,
              "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
            "median": 0.534483153267602,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.4%",
            "display_range": null,
            "display_text": "53.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.4,
            "plain_english": "Company-specific explains about 53.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27774695390502246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Market explains about 27.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1877698928273754,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.8%",
              "display_range": null,
              "display_text": "18.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.8,
              "plain_english": "Sector explains about 18.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.534483153267602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.4%",
              "display_range": null,
              "display_text": "53.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.4,
              "plain_english": "Company-specific explains about 53.4% of price moves in the current state."
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
            "median": 0.52732792269889,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.7%",
            "display_range": null,
            "display_text": "52.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.7,
            "plain_english": "Company-specific explains about 52.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26731850165595106,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Market explains about 26.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20535357564515905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.5%",
              "display_range": null,
              "display_text": "20.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.5,
              "plain_english": "Sector explains about 20.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.52732792269889,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Company-specific explains about 52.7% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
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
            "median": 0.622441773930888,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.2%",
            "display_range": null,
            "display_text": "62.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 62.2,
            "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24172730812889706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Market explains about 24.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13583091794021498,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.6%",
              "display_range": null,
              "display_text": "13.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.6,
              "plain_english": "Sector explains about 13.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.622441773930888,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.2%",
              "display_range": null,
              "display_text": "62.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.2,
              "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
            }
          },
          "summary": "Oct: Still clearly company-driven."
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
            "median": 0.5766252540222664,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.7%",
            "display_range": null,
            "display_text": "57.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.7,
            "plain_english": "Company-specific explains about 57.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14850703887509542,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Market explains about 14.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.274867707102638,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Sector explains about 27.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5766252540222664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.7%",
              "display_range": null,
              "display_text": "57.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.7,
              "plain_english": "Company-specific explains about 57.7% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly company-driven."
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
            "median": 0.5929627792477352,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.3%",
            "display_range": null,
            "display_text": "59.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 59.3,
            "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27555261938847214,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.6%",
              "display_range": null,
              "display_text": "27.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.6,
              "plain_english": "Market explains about 27.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13148460136379267,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.1%",
              "display_range": null,
              "display_text": "13.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 13.1,
              "plain_english": "Sector explains about 13.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5929627792477352,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
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
            "median": 0.7806740631059652,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "78.1%",
            "display_range": null,
            "display_text": "78.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 78.1,
            "plain_english": "Company-specific explains about 78.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10448435209302395,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.4%",
              "display_range": null,
              "display_text": "10.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 10.4,
              "plain_english": "Market explains about 10.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11484158480101081,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.5%",
              "display_range": null,
              "display_text": "11.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 11.5,
              "plain_english": "Sector explains about 11.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7806740631059652,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "78.1%",
              "display_range": null,
              "display_text": "78.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 78.1,
              "plain_english": "Company-specific explains about 78.1% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.5451644875807077,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.5%",
            "display_range": null,
            "display_text": "54.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 54.5,
            "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2416151109918564,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Market explains about 24.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21322040142743587,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.3%",
              "display_range": null,
              "display_text": "21.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 21.3,
              "plain_english": "Sector explains about 21.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5451644875807077,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
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
            "median": 0.4288549566163119,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.9%",
            "display_range": null,
            "display_text": "42.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.9,
            "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19434515221333554,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.4%",
              "display_range": null,
              "display_text": "19.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.4,
              "plain_english": "Market explains about 19.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37679989117035245,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.7%",
              "display_range": null,
              "display_text": "37.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.7,
              "plain_english": "Sector explains about 37.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4288549566163119,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5023696682464455,
          "expected_duration_days": 9.636363636363637,
          "current_probability": 0.0,
          "n_days_effective": 106.0,
          "volatility": {
            "median": 0.030834408094836986,
            "low": 0.030834408094836986,
            "high": 0.030834408094836986
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4976303317535545,
          "expected_duration_days": 8.75,
          "current_probability": 1.0,
          "n_days_effective": 105.0,
          "volatility": {
            "median": 0.23542368693942461,
            "low": 0.23542368693942461,
            "high": 0.23542368693942461
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8962264150943396,
            0.10377358490566038
          ],
          [
            0.10576923076923077,
            0.8942307692307693
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            95.0,
            11.0
          ],
          [
            11.0,
            93.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 213,
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
        "market_link_display": "3.80",
        "sector_link_display": "3.76",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.80% stock move in the same direction in this state. This is a point estimate from 213 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.76% stock move in the same direction in this state. This is a point estimate from 213 trading days.",
        "stock_persistence_display": "-0.50",
        "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
        "history_limited_note": "Read is based on 213 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 61.0,
        "driver_share_display": "61.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 213 trading days relative to the 252-day target.",
        "history_days": 213,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8942307692307693,
        "effective_days": 105.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.8 days.",
        "expected_duration_days": 8.8
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
          "pct_time": 0.5023696682464455,
          "expected_duration_days": 9.636363636363637,
          "current_probability": 0.0,
          "n_days_effective": 106.0,
          "volatility": {
            "median": 0.030834408094836986,
            "low": 0.030834408094836986,
            "high": 0.030834408094836986
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4976303317535545,
          "expected_duration_days": 8.75,
          "current_probability": 1.0,
          "n_days_effective": 105.0,
          "volatility": {
            "median": 0.23542368693942461,
            "low": 0.23542368693942461,
            "high": 0.23542368693942461
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8962264150943396,
          0.10377358490566038
        ],
        [
          0.10576923076923077,
          0.8942307692307693
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8962264150943396,
            0.10377358490566038
          ],
          [
            0.10576923076923077,
            0.8942307692307693
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            95.0,
            11.0
          ],
          [
            11.0,
            93.0
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
        "text": "Liquidity score: 53.0 — Strong",
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
        "text": "Short interest: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "header_health": {
        "text": "Liquidity Health: MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
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
    "liq_subtitle": "Liquidity screens well relative to peers, although today’s spread and bid depth point to a less supportive entry point.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firm, with the stock up 4.2% over one month while peers are down 5.7% and the market is down 1.9%.",
    "perf_insight": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is being driven mainly by broader market moves, with market factors accounting for 61.0% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 61.0% of price changes. Other influences are secto%, and company-specific 9.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 61.0%, secto%, and company-specific 9.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 61.0%, secto%, and company-specific 9.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market factors are the main influence on the tape, while the order book is less supportive on the buy side with bid depth at 0.60x ask depth and a 7-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 61.0% of price moves.",
      "The pattern has shifted from clearly company-driven in January to more mixed by March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is the main force in the tape, and current trading conditions look less even because the buy side of the book is thinner.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from May 14, 2025 to Apr 1, 2026 (196 trading days • 66,290 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks less supportive than the medium-term profile, with top-10 bid depth at 0.60x ask depth and the spread at 7 ticks.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 48.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading access is better judged through the medium-term liquidity profile and the current order book, which shows a thinner buy side today.",
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
    "intraday_insight": "The clearest intraday read is a lighter buy-side book, with top-10 bid depth at 0.60x ask depth and a 7-tick spread. That matters because immediate execution can feel less accommodating even though the stock remains liquid for its size.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is better explained by market direction and order-book balance than by short activity.",
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
    "exec_subtitle": "Trading access remains strong for the stock’s size, with a solid medium-term liquidity profile and a thinner buy-side book today.",
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
        "value": "53.0/100",
        "sub": "Peer median 34.9 (+18.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$268.3K",
        "sub": "Peer median HK$79.7K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.73%",
        "sub": "9.71 ticks; peers 4.21%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong relative to peers, with a 6M score of 53.0 compared with a peer median of 34.9. Near-term execution is less supportive because the 1D spread is 72.1% above the 1M average and top-10 bid depth is only 0.60x ask depth. That means the stock still screens as accessible for its size, but day-to-day buy-side access is thinner than the medium-term profile implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "2.915",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.40%",
        "note": "7.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.60x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-5.55% with 71.6% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-5.55% with 7.2% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-5.55% with 2.9% fill.",
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
        "value": "53",
        "suffix": "/100",
        "bar_pct": 53,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1226/2607",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "2.73",
        "suffix": "%",
        "bar_pct": 27,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.73% • 9.71 ticks vs peers 4.21%",
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
        "value": "268.3K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$79.7K",
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
        "value": "61.0",
        "suffix": "market",
        "bar_pct": 61,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Secto% • Company 9.8%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 6M liquidity score of 53.0 compared with a peer median of 34.9. That gap supports the name’s standing as more accessible than much of its peer group.",
      "Recent trading conditions are less supportive, with the 1D spread 72.1% above the 1M average. That matters because near-term execution can feel more expensive even while the broader liquidity profile remains solid.",
      "The tape has a firmer backdrop, with a 1M return of +4.2% compared with peers at -5.7% and the market at -1.9%, while market factors explain 61.0% of trading. That combination points to strength that is being carried more by the broader backdrop than by stock-specific news."
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
      "overall": "6M liquidity is strong: score 53.0 vs peer median 34.9 (+18.1 pts). 1D spread up 72.1% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 53.0 vs peer median 34.9 (+18.1 pts)."
      ],
      "concerns": [
        "1D spread up 72.1% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +18.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -63.7%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -63.7% vs market 9.7%.",
        "vs_sector": "Worse than sector: -63.7% vs sector -1.1%.",
        "vs_peers": "Worse than peers: -63.7% vs peers -4.8%."
      },
      "adv": {
        "insight": "ADV is HK$268.3K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$268.3K vs market HK$219.9K.",
        "vs_sector": "Better than sector: HK$268.3K vs sector HK$32.2K.",
        "vs_peers": "Better than peers: HK$268.3K vs peers HK$79.7K."
      },
      "spread": {
        "insight": "Spread is 2.73%, better than sector and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.73% vs market 2.67%.",
        "vs_sector": "Better than sector: 2.73% vs sector 5.35%.",
        "vs_peers": "Better than peers: 2.73% vs peers 4.21%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.14%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.14% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.14% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.14% vs peers 0.02%."
      },
      "volatility": {
        "insight": "Volatility is 91.78%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 91.78% vs market 59.86%.",
        "vs_sector": "Worse than sector: 91.78% vs sector 74.16%.",
        "vs_peers": "Worse than peers: 91.78% vs peers 52.97%."
      },
      "trades": {
        "insight": "Trades is 28, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 28 vs market 21.",
        "vs_sector": "Better than sector: 28 vs sector 6.",
        "vs_peers": "Better than peers: 28 vs peers 10."
      },
      "amihud": {
        "insight": "Price impact is 8.60e-08, better than sector and peers, but worse than market, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 8.60e-08 vs market 4.74e-08.",
        "vs_sector": "Better than sector: 8.60e-08 vs sector 1.82e-07.",
        "vs_peers": "Better than peers: 8.60e-08 vs peers 1.24e-07."
      }
    },
    "performance": {
      "overall": "Performance is weak relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The move looks mainly broad-market, with solid underlying liquidity but a weaker latest trading session."
    },
    "drivers": {
      "overall": "The stock is moving mainly with the market now, with 61.0% of recent price action explained by broader market factors. That matters because near-term trading is being shaped more by the external backdrop than by stock-specific news.",
      "beta": "This market-led pattern sits alongside a firmer return backdrop, with the stock up 4.2% over one month while peers fell 5.7% and the market fell 1.9%. That combination suggests the name has been participating in broader moves while still holding up better than the main comparison groups.",
      "rolling_change": "The monthly pattern has become more mixed. January was clearly company-driven, February was mostly market, and March still leaned company-driven but with a broader set of influences coming through."
    },
    "regime": {
      "overall": "The active backdrop is higher volatility, and that matters because price moves and execution conditions are less steady when this state holds for several days at a time.",
      "current": "The stock is currently in a high-volatility state, while broader market moves still account for 61.0% of the tape, keeping the backdrop more reactive than calm.",
      "transitions": "This looks more persistent than short-lived, with a typical spell of about 8.8 days, although the picture is still mixed rather than fully settled.",
      "trading_implications": "Trading conditions look workable but less even day to day, as the spread is 72.1% above the 1M level and top-10 bid depth is only 0.60x ask depth."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed and currently bid-light because buy-side depth is materially thinner than sell-side depth, with top-10 bids at 0.60x ask depth and a 7-tick",
      "concern": "Trade-size percentiles use available history from May 14, 2025 to Apr 1, 2026 (196 trading days • 66,290 trades), not a full year.",
      "peer_context": "The broader standing still looks solid, with a 6M liquidity score of 53.0 compared with a peer median of 34.9, but the current book is less supportive than that relative ranking implies. In practical terms, the stock screens well on medium-term liquidity while the displayed depth is currently less even."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 41.6% of trade count and 55.0% of trade value, compared with retail-like trades at 5.6% of count and 2.5% of value. That gap shows the observed flow is being set more by larger-value participants than by retail activity.",
      "institutional_gap": "The read is not fully clean because 16.7% of trade count is classified as ambiguous or unclear. That leaves the overall mix institution-like, but with some noise in the signal.",
      "peer_comparison": "The trader mix stands out as institution-like relative to the peer set, with the comparison available in the report tables. That matters because it suggests this name is drawing a more durable flow base than a retail-driven tape."
    },
    "price_moving": {
      "overall": "Price-moving activity is meaningful, with 48.7% of total trades moving price. That indicates the tape is active enough for individual trades to influence execution quality. The signal is mixed because 16.7% of trade count is ambiguous or unclear. That means the price-moving read is useful, but not clean enough to treat as one-sided. The balance between positive and negative price-moving trades is shown in the report tables. That matters because it helps separate active two-way trading from a more directional tape.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising enough to change the picture. The more visible near-term shift is a 72.1% jump in the 1D spread from the 1M level, which matters more for current execution than any short-driven read.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.1%, continuous 99.4%, and close 0.5%. Current trading concentration score is 0.319.",
      "hhi_interpretation": "A trading concentration score of 0.319 suggests activity is not overly concentrated in a narrow part of the day. That matters because access looks more consistent across the session.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Peer concentration comparisons are shown in the report tables. That context matters because it indicates whether this intraday liquidity profile is stronger or weaker than comparable names."
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
        "1328",
        "6959",
        "1483",
        "8418",
        "1463",
        "2180",
        "6100",
        "1586",
        "2521"
      ],
      "scores": [
        53.01112389719984,
        41.657077100115075,
        24.28078250863061,
        28.116609129267356,
        8.553893364019945,
        45.684695051783656,
        75.98772535481396,
        27.617951668584578,
        67.12696586114308
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
        268262.8,
        78439.0,
        36360.0,
        80950.0,
        0.0,
        102007.5,
        4024856.0,
        23800.0,
        3847375.0
      ],
      "total": 2607
    },
    "market_comparison": {
      "sector_name": "Other Support Services",
      "sector_count": 42,
      "market_count": 2607,
      "company": {
        "volatility": 0.9178047909961828,
        "adv": 268262.8,
        "spread_pct": 0.02734067547056791,
        "turnover_ratio": 0.0014385029928190474,
        "amihud": 8.598314975930844e-08,
        "trades": 28.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7396079631025353,
          "median": 0.598586141375593,
          "min": 0.026427624109509794,
          "max": 33.692481563841405,
          "p5": 0.22513373713696208,
          "p95": 1.5576225875696148,
          "count": 2607
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 63437686.65700392,
          "median": 219920.0,
          "min": 0.0,
          "max": 13711894082.25,
          "p5": 0.0,
          "p95": 228498387.5579998,
          "count": 2607
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04214684744415255,
          "median": 0.026717477958095707,
          "min": 0.000558678699550006,
          "max": 0.5518881068100528,
          "p5": 0.0013636630694224892,
          "p95": 0.1346544414496083,
          "count": 2607
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035181285746970483,
          "median": 0.0008772740160740871,
          "min": 0.0,
          "max": 0.1465769815616509,
          "p5": 0.0,
          "p95": 0.014294882844372893,
          "count": 2584
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.309446460702591e-07,
          "median": 4.7383929462885906e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.59368247619184e-11,
          "p95": 3.4430568123930607e-06,
          "count": 2607
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1090.711162255466,
          "median": 21.0,
          "min": 0.0,
          "max": 113413.5,
          "p5": 0.0,
          "p95": 5806.59999999998,
          "count": 2607
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8337566667273395,
          "median": 0.7415963198003839,
          "min": 0.2161049920951255,
          "max": 1.9503128951541966,
          "p5": 0.2498790013895026,
          "p95": 1.8640183868209488,
          "count": 42
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1433203.9218214285,
          "median": 32209.75,
          "min": 0.0,
          "max": 19624112.34,
          "p5": 0.0,
          "p95": 7286177.499999997,
          "count": 42
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.058817915029462285,
          "median": 0.05350883875928507,
          "min": 0.003965531524368195,
          "max": 0.1844283589367848,
          "p5": 0.005043778036573468,
          "p95": 0.12171722680609683,
          "count": 42
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0018657996371987816,
          "median": 0.00023636582306500406,
          "min": 0.0,
          "max": 0.017518920024544898,
          "p5": 0.0,
          "p95": 0.006877850967717788,
          "count": 42
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.547515071129007e-07,
          "median": 1.8226014790070966e-07,
          "min": 0.0,
          "max": 1.0359876754030898e-05,
          "p5": 1.450780631799843e-09,
          "p95": 4.7916921661538245e-06,
          "count": 42
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 119.30952380952381,
          "median": 6.25,
          "min": 0.0,
          "max": 1729.5,
          "p5": 0.0,
          "p95": 633.4499999999997,
          "count": 42
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1024223.4375,
          "median": 79694.5,
          "min": 0.0,
          "max": 4024856.0,
          "p5": 8330.0,
          "p95": 3962737.65,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 121.4375,
          "median": 9.5,
          "min": 0.0,
          "max": 798.0,
          "p5": 0.7000000000000001,
          "p95": 565.7749999999996,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6944782533280741,
          "median": 0.529657695246219,
          "min": 0.4082665109276581,
          "max": 1.328975203198319,
          "p5": 0.41691356971910415,
          "p95": 1.2443751210966532,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04637737556039352,
          "median": 0.04209256494172867,
          "min": 0.005056693035712649,
          "max": 0.08435463777907554,
          "p5": 0.011701710559893566,
          "p95": 0.08150475802033928,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 8.483647819782323,
          "median": 7.887530193236714,
          "min": 1.8063132573057734,
          "max": 18.41138097149739,
          "p5": 1.8558873502675794,
          "p95": 16.33461985369552,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.4547132782415214e-07,
          "median": 1.239137056450938e-07,
          "min": 4.234768990429982e-09,
          "max": 3.601722351722355e-07,
          "p5": 5.29863958012499e-09,
          "p95": 3.3989232369345234e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0016213463631928819,
          "median": 0.00021933686553604652,
          "min": 0.0,
          "max": 0.006901338023311953,
          "p5": 2.5063832957669246e-05,
          "p95": 0.006275530459627959,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.042402826855123976,
        "market": -0.01934411605736608,
        "sector": -0.007343763820231386,
        "peers": -0.057025010111583785
      },
      {
        "horizon": "3M",
        "stock": 0.003401360544218024,
        "market": 0.0744907328886586,
        "sector": -0.007343763820231386,
        "peers": -0.04034316494176515
      },
      {
        "horizon": "6M",
        "stock": -0.6371463714637144,
        "market": 0.09749550653948869,
        "sector": -0.010566673677957938,
        "peers": -0.0480034220267459
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
      "share_market": 0.610482500585789,
      "share_sector": 0.29201644908313984,
      "share_idio": 0.09750105033107118,
      "beta_market": 3.804228705807759,
      "beta_sector": 3.758832815386329,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 213,
        "reporting_window_days": 63,
        "available_history_days": 213,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.610482500585789,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.0%",
            "display_range": null,
            "display_text": "61.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "share_pct",
            "value_pct": 61.0,
            "plain_english": "Market explains about 61.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.29201644908313984,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.2%",
            "display_range": null,
            "display_text": "29.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "share_pct",
            "value_pct": 29.2,
            "plain_english": "Sector explains about 29.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.09750105033107118,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.8%",
            "display_range": null,
            "display_text": "9.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "share_pct",
            "value_pct": 9.8,
            "plain_english": "Company-specific explains about 9.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 3.804228705807759,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.80",
            "display_range": null,
            "display_text": "3.80",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 3.80% stock move in the same direction in this state.",
            "value_num": 3.8
          },
          "beta_stock_lag": {
            "median": -0.5007030226049376,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.50",
            "display_range": null,
            "display_text": "-0.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "lag_beta",
            "value_num": -0.5
          },
          "beta_sector": {
            "median": 3.758832815386329,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.76",
            "display_range": null,
            "display_text": "3.76",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.76% stock move in the same direction in this state.",
            "value_num": 3.76
          },
          "beta_market_lag": {
            "median": 4.890492782990143,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.89",
            "display_range": null,
            "display_text": "4.89",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "lag_beta",
            "value_num": 4.89
          },
          "beta_sector_lag": {
            "median": -7.447107520065901,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.45",
            "display_range": null,
            "display_text": "-7.45",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
            "kind": "lag_beta",
            "value_num": -7.45
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 213 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-16 to 2025-05-30",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45578527831751475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.6%",
              "display_range": null,
              "display_text": "45.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 45.6,
              "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21173622969268205,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Market explains about 21.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33247849198980334,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.2%",
                "display_range": null,
                "display_text": "33.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 33.2,
                "plain_english": "Sector explains about 33.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45578527831751475,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.6%",
                "display_range": null,
                "display_text": "45.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 45.6,
                "plain_english": "Company-specific explains about 45.6% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4975999804688979,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.8%",
              "display_range": null,
              "display_text": "49.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 49.8,
              "plain_english": "Market explains about 49.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4975999804688979,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.8%",
                "display_range": null,
                "display_text": "49.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 49.8,
                "plain_english": "Market explains about 49.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05774228424736717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.8%",
                "display_range": null,
                "display_text": "5.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 5.8,
                "plain_english": "Sector explains about 5.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.444657735283735,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Company-specific explains about 44.5% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly market-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.40694969301044637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.7%",
              "display_range": null,
              "display_text": "40.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.7,
              "plain_english": "Sector explains about 40.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2084944196721819,
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
                "median": 0.40694969301044637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.7%",
                "display_range": null,
                "display_text": "40.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.7,
                "plain_english": "Sector explains about 40.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3845558873173717,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.5%",
                "display_range": null,
                "display_text": "38.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.5,
                "plain_english": "Company-specific explains about 38.5% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
              "median": 0.534483153267602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.4%",
              "display_range": null,
              "display_text": "53.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.4,
              "plain_english": "Company-specific explains about 53.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27774695390502246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Market explains about 27.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1877698928273754,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.8%",
                "display_range": null,
                "display_text": "18.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.8,
                "plain_english": "Sector explains about 18.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.534483153267602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.4%",
                "display_range": null,
                "display_text": "53.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.4,
                "plain_english": "Company-specific explains about 53.4% of price moves in the current state."
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
              "median": 0.52732792269889,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Company-specific explains about 52.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26731850165595106,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Market explains about 26.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20535357564515905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.5%",
                "display_range": null,
                "display_text": "20.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.5,
                "plain_english": "Sector explains about 20.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.52732792269889,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.7%",
                "display_range": null,
                "display_text": "52.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.7,
                "plain_english": "Company-specific explains about 52.7% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
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
              "median": 0.622441773930888,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.2%",
              "display_range": null,
              "display_text": "62.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 62.2,
              "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24172730812889706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Market explains about 24.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13583091794021498,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.6%",
                "display_range": null,
                "display_text": "13.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.6,
                "plain_english": "Sector explains about 13.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.622441773930888,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.2%",
                "display_range": null,
                "display_text": "62.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 62.2,
                "plain_english": "Company-specific explains about 62.2% of price moves in the current state."
              }
            },
            "summary": "Oct: Still clearly company-driven."
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
              "median": 0.5766252540222664,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.7%",
              "display_range": null,
              "display_text": "57.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.7,
              "plain_english": "Company-specific explains about 57.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14850703887509542,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Market explains about 14.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.274867707102638,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Sector explains about 27.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5766252540222664,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.7%",
                "display_range": null,
                "display_text": "57.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.7,
                "plain_english": "Company-specific explains about 57.7% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly company-driven."
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
              "median": 0.5929627792477352,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27555261938847214,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.6%",
                "display_range": null,
                "display_text": "27.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.6,
                "plain_english": "Market explains about 27.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13148460136379267,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.1%",
                "display_range": null,
                "display_text": "13.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 13.1,
                "plain_english": "Sector explains about 13.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5929627792477352,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.3%",
                "display_range": null,
                "display_text": "59.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 59.3,
                "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
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
              "median": 0.7806740631059652,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "78.1%",
              "display_range": null,
              "display_text": "78.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 78.1,
              "plain_english": "Company-specific explains about 78.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10448435209302395,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.4%",
                "display_range": null,
                "display_text": "10.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 10.4,
                "plain_english": "Market explains about 10.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11484158480101081,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.5%",
                "display_range": null,
                "display_text": "11.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 11.5,
                "plain_english": "Sector explains about 11.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7806740631059652,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "78.1%",
                "display_range": null,
                "display_text": "78.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 78.1,
                "plain_english": "Company-specific explains about 78.1% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.5451644875807077,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2416151109918564,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Market explains about 24.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21322040142743587,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.3%",
                "display_range": null,
                "display_text": "21.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 21.3,
                "plain_english": "Sector explains about 21.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5451644875807077,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.5%",
                "display_range": null,
                "display_text": "54.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 54.5,
                "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
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
              "median": 0.4288549566163119,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19434515221333554,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.4%",
                "display_range": null,
                "display_text": "19.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.4,
                "plain_english": "Market explains about 19.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37679989117035245,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.7%",
                "display_range": null,
                "display_text": "37.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.7,
                "plain_english": "Sector explains about 37.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4288549566163119,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.9%",
                "display_range": null,
                "display_text": "42.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.9,
                "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5023696682464455,
            "expected_duration_days": 9.636363636363637,
            "current_probability": 0.0,
            "n_days_effective": 106.0,
            "volatility": {
              "median": 0.030834408094836986,
              "low": 0.030834408094836986,
              "high": 0.030834408094836986
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4976303317535545,
            "expected_duration_days": 8.75,
            "current_probability": 1.0,
            "n_days_effective": 105.0,
            "volatility": {
              "median": 0.23542368693942461,
              "low": 0.23542368693942461,
              "high": 0.23542368693942461
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8962264150943396,
              0.10377358490566038
            ],
            [
              0.10576923076923077,
              0.8942307692307693
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              95.0,
              11.0
            ],
            [
              11.0,
              93.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 213,
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
          "market_link_display": "3.80",
          "sector_link_display": "3.76",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.80% stock move in the same direction in this state. This is a point estimate from 213 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.76% stock move in the same direction in this state. This is a point estimate from 213 trading days.",
          "stock_persistence_display": "-0.50",
          "point_estimate_note": "Point estimate only because the current state has 213 trading days.",
          "history_limited_note": "Read is based on 213 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 61.0,
          "driver_share_display": "61.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 213 trading days relative to the 252-day target.",
          "history_days": 213,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8942307692307693,
          "effective_days": 105.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.8 days.",
          "expected_duration_days": 8.8
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
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.21173622969268205,
          "share_sector": 0.33247849198980334,
          "share_company": 0.45578527831751475,
          "share_market_display": "21.2%",
          "share_sector_display": "33.2%",
          "share_company_display": "45.6%",
          "dominant_share_display": "45.6%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jun: Mostly market-driven.",
          "share_market": 0.4975999804688979,
          "share_sector": 0.05774228424736717,
          "share_company": 0.444657735283735,
          "share_market_display": "49.8%",
          "share_sector_display": "5.8%",
          "share_company_display": "44.5%",
          "dominant_share_display": "49.8%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jul: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2084944196721819,
          "share_sector": 0.40694969301044637,
          "share_company": 0.3845558873173717,
          "share_market_display": "20.8%",
          "share_sector_display": "40.7%",
          "share_company_display": "38.5%",
          "dominant_share_display": "40.7%"
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
          "share_market": 0.27774695390502246,
          "share_sector": 0.1877698928273754,
          "share_company": 0.534483153267602,
          "share_market_display": "27.8%",
          "share_sector_display": "18.8%",
          "share_company_display": "53.4%",
          "dominant_share_display": "53.4%"
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
          "share_market": 0.26731850165595106,
          "share_sector": 0.20535357564515905,
          "share_company": 0.52732792269889,
          "share_market_display": "26.7%",
          "share_sector_display": "20.5%",
          "share_company_display": "52.7%",
          "dominant_share_display": "52.7%"
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
          "summary": "Oct: Still clearly company-driven.",
          "share_market": 0.24172730812889706,
          "share_sector": 0.13583091794021498,
          "share_company": 0.622441773930888,
          "share_market_display": "24.2%",
          "share_sector_display": "13.6%",
          "share_company_display": "62.2%",
          "dominant_share_display": "62.2%"
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
          "share_market": 0.14850703887509542,
          "share_sector": 0.274867707102638,
          "share_company": 0.5766252540222664,
          "share_market_display": "14.9%",
          "share_sector_display": "27.5%",
          "share_company_display": "57.7%",
          "dominant_share_display": "57.7%"
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
          "share_market": 0.27555261938847214,
          "share_sector": 0.13148460136379267,
          "share_company": 0.5929627792477352,
          "share_market_display": "27.6%",
          "share_sector_display": "13.1%",
          "share_company_display": "59.3%",
          "dominant_share_display": "59.3%"
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
          "share_market": 0.10448435209302395,
          "share_sector": 0.11484158480101081,
          "share_company": 0.7806740631059652,
          "share_market_display": "10.4%",
          "share_sector_display": "11.5%",
          "share_company_display": "78.1%",
          "dominant_share_display": "78.1%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.2416151109918564,
          "share_sector": 0.21322040142743587,
          "share_company": 0.5451644875807077,
          "share_market_display": "24.2%",
          "share_sector_display": "21.3%",
          "share_company_display": "54.5%",
          "dominant_share_display": "54.5%"
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
          "summary": "Mar: More mixed, though company-driven still has the largest share.",
          "share_market": 0.19434515221333554,
          "share_sector": 0.37679989117035245,
          "share_company": 0.4288549566163119,
          "share_market_display": "19.4%",
          "share_sector_display": "37.7%",
          "share_company_display": "42.9%",
          "dominant_share_display": "42.9%"
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
          0.5023696682464455,
          0.4976303317535545
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5023696682464455,
            "expected_duration_days": 9.636363636363637,
            "current_probability": 0.0,
            "n_days_effective": 106.0,
            "volatility": {
              "median": 0.030834408094836986,
              "low": 0.030834408094836986,
              "high": 0.030834408094836986
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4976303317535545,
            "expected_duration_days": 8.75,
            "current_probability": 1.0,
            "n_days_effective": 105.0,
            "volatility": {
              "median": 0.23542368693942461,
              "low": 0.23542368693942461,
              "high": 0.23542368693942461
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8962264150943396,
            0.10377358490566038
          ],
          [
            0.10576923076923077,
            0.8942307692307693
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 2.88,
          "quantity": 12000.0,
          "value": 34560.0
        },
        {
          "level": 2,
          "price": 2.71,
          "quantity": 3000.0,
          "value": 8130.0
        },
        {
          "level": 3,
          "price": 2.7,
          "quantity": 1000.0,
          "value": 2700.0
        },
        {
          "level": 4,
          "price": 2.63,
          "quantity": 6000.0,
          "value": 15780.0
        },
        {
          "level": 5,
          "price": 2.62,
          "quantity": 1000.0,
          "value": 2620.0
        },
        {
          "level": 6,
          "price": 2.61,
          "quantity": 2000.0,
          "value": 5220.0
        },
        {
          "level": 7,
          "price": 2.57,
          "quantity": 1000.0,
          "value": 2570.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 2.95,
          "quantity": 25000.0,
          "value": 73750.0
        },
        {
          "level": 2,
          "price": 3.0,
          "quantity": 1000.0,
          "value": 3000.0
        },
        {
          "level": 3,
          "price": 3.18,
          "quantity": 3000.0,
          "value": 9540.0
        },
        {
          "level": 4,
          "price": 3.2,
          "quantity": 1000.0,
          "value": 3200.0
        },
        {
          "level": 5,
          "price": 3.21,
          "quantity": 9000.0,
          "value": 28890.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-01 07:58:30.540000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 2.915,
        "spread_pct": 0.02401372212692977,
        "spread_ticks": 7.0,
        "tick_size": 0.01,
        "bid_depth_notional_top10": 71580.0,
        "ask_depth_notional_top10": 118380.0,
        "bid_ask_depth_ratio": 0.6047
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 323,
        "history_limited": true,
        "trade_days_used": 196,
        "n_trades_used": 66290,
        "first_trade_date": "2025-05-14",
        "last_trade_date": "2026-04-01",
        "window_label": "May 14, 2025 to Apr 1, 2026",
        "window_short_label": "May 14, 2025 to Apr 1, 2026",
        "trade_days_label": "196 trading days",
        "trade_count_label": "66,290 trades",
        "window_detail_label": "196 trading days • 66,290 trades",
        "history_note": "Trade-size percentiles use available history from May 14, 2025 to Apr 1, 2026 (196 trading days • 66,290 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 50000.0,
            "impact_pct": -0.033808,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 69.85,
            "pct_of_adv": 56.37
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 76000.0,
            "impact_pct": -0.055548,
            "filled_pct": 94.2,
            "levels_consumed": 7,
            "pct_of_bid_depth": 106.17,
            "pct_of_adv": 85.68
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1018181.87,
            "impact_pct": -0.055548,
            "filled_pct": 7.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 1422.44,
            "pct_of_adv": 1147.89
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
            "order_id": "2751685123.0",
            "timestamp": "2026-04-01 03:40:17.384000000",
            "local_timestamp": "2026-04-01 11:40:17",
            "posted_price": 3.0,
            "size_shares": 80000.0,
            "notional": 240000.0,
            "impact_pct": -0.055548,
            "filled_pct": 29.8,
            "levels_consumed": 7,
            "pct_of_bid_depth": 335.29,
            "price_vs_mid_pct": 2.916,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "2453408771.0",
            "timestamp": "2026-04-01 03:11:40.697000000",
            "local_timestamp": "2026-04-01 11:11:40",
            "posted_price": 3.0,
            "size_shares": 79000.0,
            "notional": 237000.0,
            "impact_pct": -0.055548,
            "filled_pct": 30.2,
            "levels_consumed": 7,
            "pct_of_bid_depth": 331.1,
            "price_vs_mid_pct": 2.916,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2125334275.0",
            "timestamp": "2026-04-01 02:49:32.904000000",
            "local_timestamp": "2026-04-01 10:49:32",
            "posted_price": 2.98,
            "size_shares": 49000.0,
            "notional": 146020.0,
            "impact_pct": -0.055548,
            "filled_pct": 49.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 204.0,
            "price_vs_mid_pct": 2.23,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-01",
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
            "spread_pct": 0.09122807017543852,
            "spread_ticks": 25.99999999999998,
            "bid_depth_notional": 39960.0,
            "ask_depth_notional": 12320.0,
            "mid_price": 2.85
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.03412969283276454,
            "spread_ticks": 10.000000000000009,
            "bid_depth_notional": 106260.0,
            "ask_depth_notional": 28240.0,
            "mid_price": 2.9299999999999997
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.07304347826086956,
            "spread_ticks": 20.999999999999996,
            "bid_depth_notional": 136440.0,
            "ask_depth_notional": 28240.0,
            "mid_price": 2.875
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.010398613518197507,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 206450.0,
            "ask_depth_notional": 271540.0,
            "mid_price": 2.885
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.08480565371024743,
            "spread_ticks": 24.00000000000002,
            "bid_depth_notional": 71870.0,
            "ask_depth_notional": 184430.0,
            "mid_price": 2.83
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.048611111111111154,
            "spread_ticks": 14.000000000000012,
            "bid_depth_notional": 331430.0,
            "ask_depth_notional": 184430.0,
            "mid_price": 2.88
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.03448275862068968,
            "spread_ticks": 10.000000000000009,
            "bid_depth_notional": 356790.0,
            "ask_depth_notional": 249850.0,
            "mid_price": 2.9000000000000004
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.03448275862068968,
            "spread_ticks": 10.000000000000009,
            "bid_depth_notional": 362050.0,
            "ask_depth_notional": 249850.0,
            "mid_price": 2.9000000000000004
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.003395585738539976,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 304960.0,
            "ask_depth_notional": 243950.0,
            "mid_price": 2.9450000000000003
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.003395585738539976,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 303520.0,
            "ask_depth_notional": 235100.0,
            "mid_price": 2.9450000000000003
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02401372212692977,
            "spread_ticks": 7.000000000000028,
            "bid_depth_notional": 71580.0,
            "ask_depth_notional": 118380.0,
            "mid_price": 2.915
          }
        ],
        "summary": {
          "median_spread_pct": 0.03448275862068968,
          "median_spread_ticks": 10.000000000000009,
          "median_bid_depth_notional": 206450.0,
          "median_ask_depth_notional": 184430.0,
          "tightest_bucket": "14:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 56.4,
      "peers": [
        {
          "ticker": "2521",
          "pct": 20.9
        },
        {
          "ticker": "6100",
          "pct": 47.4
        },
        {
          "ticker": "2180",
          "pct": 519.4
        },
        {
          "ticker": "1483",
          "pct": 709.5
        },
        {
          "ticker": "6959",
          "pct": 1048.8
        },
        {
          "ticker": "8418",
          "pct": 1135.3
        },
        {
          "ticker": "1463",
          "pct": 33333.3
        },
        {
          "ticker": "1586",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 18,
          "n_runs": 17,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.2222222222222222,
            "unobservable_pct": 0.7777777777777778,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.032520325203252036,
            "unobservable_qty_pct": 0.967479674796748,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.032601951604715435,
            "unobservable_notional_pct": 0.9673980483952845,
            "unclear_notional_pct": 1.0
          },
          "run_composition": {
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.17647058823529413,
            "unobservable_pct": 0.8235294117647058,
            "unclear_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "unclear_notional_pct": 1.0
          },
          "counts": {
            "trades": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 4,
              "unobservable": 14,
              "unclear": 18
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 3,
              "unobservable": 14,
              "unclear": 17
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.0,
            "na": 1.0
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 17
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.0,
            "na": 1.0
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 18
          },
          "observability": {
            "avg_feature_coverage": 0.5764705882352942,
            "observable_run_pct": 0.17647058823529416,
            "ambiguous_run_pct": 0.17647058823529413,
            "unobservable_run_pct": 0.8235294117647058
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.8235294117647058,
          "dominance_gap": 0.6470588235294117,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 18
            },
            "d2_information": {
              "UNOBSERVABLE": 18
            },
            "d3_urgency": {
              "IMMEDIATE": 17
            },
            "participant_confidence": {
              "NA": 17
            }
          },
          "trade_size": {
            "avg": 19698.88888888889,
            "median": 4400.0
          },
          "run_size": {
            "avg": 20857.647058823528,
            "median": 5880.0,
            "avg_length": 1.0588235294117647
          },
          "recent_trades": [
            {
              "trade_id": "18",
              "timestamp": "2026-04-01T07:58:22.319186",
              "price": 2.95,
              "size": 11000.0,
              "notional": 32450.000000000004,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17109,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-01T07:31:00.773399",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17107,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-01T07:09:05.779541",
              "price": 2.94,
              "size": 2000.0,
              "notional": 5880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17106,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-01T07:07:26.769325",
              "price": 2.95,
              "size": 3000.0,
              "notional": 8850.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17105,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-01T06:49:45.900532",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17104,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-01T06:08:48.767533",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17103,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-01T05:04:03.758939",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17102,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-01T03:58:08.756630",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17101,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-01T03:52:20.085481",
              "price": 2.95,
              "size": 15000.0,
              "notional": 44250.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17100,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-01T03:33:53.773662",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17099,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-01T02:53:49.734145",
              "price": 2.81,
              "size": 30000.0,
              "notional": 84300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17098,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-01T02:49:18.674349",
              "price": 2.88,
              "size": 44000.0,
              "notional": 126720.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17097,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-01T02:32:37.899246",
              "price": 2.87,
              "size": 5000.0,
              "notional": 14350.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17096,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-01T02:30:47.702340",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17095,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-01T01:48:08.893381",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17094,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T01:30:31.580051",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17093,
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
          "n_trades": 406,
          "n_runs": 261,
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
            "retail_pct": 0.05172413793103448,
            "mixed_pct": 0.0,
            "instit_pct": 0.27832512315270935,
            "ambiguous_pct": 0.18472906403940886,
            "unobservable_pct": 0.4852216748768473,
            "unclear_pct": 0.6699507389162562,
            "retail_qty_pct": 0.018444666001994018,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.35559986706547025,
            "ambiguous_qty_pct": 0.1503821867730143,
            "unobservable_qty_pct": 0.47557328015952144,
            "unclear_qty_pct": 0.6259554669325358,
            "retail_notional_pct": 0.01834509741488261,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.3545635658415998,
            "ambiguous_notional_pct": 0.1510456820023183,
            "unobservable_notional_pct": 0.4760456547411993,
            "unclear_notional_pct": 0.6270913367435176
          },
          "run_composition": {
            "retail_pct": 0.08045977011494253,
            "mixed_pct": 0.0,
            "instit_pct": 0.16091954022988506,
            "ambiguous_pct": 0.23754789272030652,
            "unobservable_pct": 0.5210727969348659,
            "unclear_pct": 0.7586206896551724,
            "retail_notional_pct": 0.01834509741488261,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.3545635658415998,
            "unclear_notional_pct": 0.6270913367435176
          },
          "counts": {
            "trades": {
              "retail": 21,
              "mixed": 0,
              "institutional": 113,
              "ambiguous": 75,
              "unobservable": 197,
              "unclear": 272
            },
            "runs": {
              "retail": 21,
              "mixed": 0,
              "institutional": 42,
              "ambiguous": 62,
              "unobservable": 136,
              "unclear": 198
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.2413793103448276,
            "na": 0.7586206896551724
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 63,
            "na": 198
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.33004926108374383,
            "na": 0.6699507389162561
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 134,
            "na": 272
          },
          "observability": {
            "avg_feature_coverage": 0.6275862068965518,
            "observable_run_pct": 0.47892720306513414,
            "ambiguous_run_pct": 0.23754789272030652,
            "unobservable_run_pct": 0.5210727969348659
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5210727969348659,
          "dominance_gap": 0.28352490421455934,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 406
            },
            "d2_information": {
              "UNOBSERVABLE": 406
            },
            "d3_urgency": {
              "IMMEDIATE": 259,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 198,
              "LOW": 63
            }
          },
          "trade_size": {
            "avg": 9035.04433497537,
            "median": 3300.0
          },
          "run_size": {
            "avg": 14054.513409961686,
            "median": 6520.0,
            "avg_length": 1.5555555555555556
          },
          "recent_trades": [
            {
              "trade_id": "18",
              "timestamp": "2026-04-01T07:58:22.319186",
              "price": 2.95,
              "size": 11000.0,
              "notional": 32450.000000000004,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17109,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-01T07:31:00.773399",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17107,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-01T07:09:05.779541",
              "price": 2.94,
              "size": 2000.0,
              "notional": 5880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17106,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-01T07:07:26.769325",
              "price": 2.95,
              "size": 3000.0,
              "notional": 8850.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17105,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-01T06:49:45.900532",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17104,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-01T06:08:48.767533",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17103,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-01T05:04:03.758939",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17102,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-01T03:58:08.756630",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17101,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-01T03:52:20.085481",
              "price": 2.95,
              "size": 15000.0,
              "notional": 44250.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17100,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-01T03:33:53.773662",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17099,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-01T02:53:49.734145",
              "price": 2.81,
              "size": 30000.0,
              "notional": 84300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17098,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-01T02:49:18.674349",
              "price": 2.88,
              "size": 44000.0,
              "notional": 126720.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17097,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-01T02:32:37.899246",
              "price": 2.87,
              "size": 5000.0,
              "notional": 14350.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17096,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-01T02:30:47.702340",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17095,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-01T01:48:08.893381",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17094,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T01:30:31.580051",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17093,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "18",
              "timestamp": "2026-03-31T06:47:07.565520",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17092,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-03-31T02:26:51.858034",
              "price": 2.9,
              "size": 4000.0,
              "notional": 11600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17090,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-03-31T02:12:07.241323",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17088,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.89,
              "size": 1000.0,
              "notional": 2890.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
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
          "n_trades": 1581,
          "n_runs": 994,
          "n_trade_days": 63,
          "first_trade_date": "2025-12-30",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.06072106261859583,
            "mixed_pct": 0.0,
            "instit_pct": 0.3377609108159393,
            "ambiguous_pct": 0.17710309930423782,
            "unobservable_pct": 0.4244149272612271,
            "unclear_pct": 0.6015180265654649,
            "retail_qty_pct": 0.022250791139240507,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.44719145569620256,
            "ambiguous_qty_pct": 0.14042721518987342,
            "unobservable_qty_pct": 0.39013053797468356,
            "unclear_qty_pct": 0.530557753164557,
            "retail_notional_pct": 0.02222894950330053,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4426277115593688,
            "ambiguous_notional_pct": 0.14161251318319837,
            "unobservable_notional_pct": 0.3935308257541323,
            "unclear_notional_pct": 0.5351433389373307
          },
          "run_composition": {
            "retail_pct": 0.096579476861167,
            "mixed_pct": 0.0,
            "instit_pct": 0.1851106639839034,
            "ambiguous_pct": 0.2152917505030181,
            "unobservable_pct": 0.5030181086519114,
            "unclear_pct": 0.7183098591549295,
            "retail_notional_pct": 0.02222894950330053,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4426277115593688,
            "unclear_notional_pct": 0.5351433389373307
          },
          "counts": {
            "trades": {
              "retail": 96,
              "mixed": 0,
              "institutional": 534,
              "ambiguous": 280,
              "unobservable": 671,
              "unclear": 951
            },
            "runs": {
              "retail": 96,
              "mixed": 0,
              "institutional": 184,
              "ambiguous": 214,
              "unobservable": 500,
              "unclear": 714
            }
          },
          "confidence": {
            "high": 0.0030181086519114686,
            "medium": 0.029175050301810865,
            "low": 0.24949698189134809,
            "na": 0.7183098591549296
          },
          "confidence_counts": {
            "high": 3,
            "medium": 29,
            "low": 248,
            "na": 714
          },
          "trade_confidence": {
            "high": 0.0018975332068311196,
            "medium": 0.05249841872232764,
            "low": 0.34408602150537637,
            "na": 0.6015180265654649
          },
          "trade_confidence_counts": {
            "high": 3,
            "medium": 83,
            "low": 544,
            "na": 951
          },
          "observability": {
            "avg_feature_coverage": 0.636317907444668,
            "observable_run_pct": 0.49698189134808857,
            "ambiguous_run_pct": 0.2152917505030181,
            "unobservable_run_pct": 0.5030181086519114
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.5030181086519114,
          "dominance_gap": 0.28772635814889336,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1581
            },
            "d2_information": {
              "UNOBSERVABLE": 1581
            },
            "d3_urgency": {
              "IMMEDIATE": 992,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 714,
              "LOW": 248,
              "MEDIUM": 29,
              "HIGH": 3
            }
          },
          "trade_size": {
            "avg": 9957.953194180898,
            "median": 5500.0
          },
          "run_size": {
            "avg": 15838.55533199195,
            "median": 6910.0,
            "avg_length": 1.590543259557344
          },
          "recent_trades": [
            {
              "trade_id": "18",
              "timestamp": "2026-04-01T07:58:22.319186",
              "price": 2.95,
              "size": 11000.0,
              "notional": 32450.000000000004,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17109,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-01T07:31:00.773399",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17107,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-01T07:09:05.779541",
              "price": 2.94,
              "size": 2000.0,
              "notional": 5880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17106,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-01T07:07:26.769325",
              "price": 2.95,
              "size": 3000.0,
              "notional": 8850.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17105,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-01T06:49:45.900532",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17104,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-01T06:08:48.767533",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17103,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-01T05:04:03.758939",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17102,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-01T03:58:08.756630",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17101,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-01T03:52:20.085481",
              "price": 2.95,
              "size": 15000.0,
              "notional": 44250.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17100,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-01T03:33:53.773662",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17099,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-01T02:53:49.734145",
              "price": 2.81,
              "size": 30000.0,
              "notional": 84300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17098,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-01T02:49:18.674349",
              "price": 2.88,
              "size": 44000.0,
              "notional": 126720.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17097,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-01T02:32:37.899246",
              "price": 2.87,
              "size": 5000.0,
              "notional": 14350.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17096,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-01T02:30:47.702340",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17095,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-01T01:48:08.893381",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17094,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T01:30:31.580051",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17093,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "18",
              "timestamp": "2026-03-31T06:47:07.565520",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17092,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-03-31T02:26:51.858034",
              "price": 2.9,
              "size": 4000.0,
              "notional": 11600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17090,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-03-31T02:12:07.241323",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17088,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.89,
              "size": 1000.0,
              "notional": 2890.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
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
          "n_trades": 6728,
          "n_runs": 3462,
          "n_trade_days": 125,
          "first_trade_date": "2025-09-17",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.05618311533888228,
            "mixed_pct": 0.0,
            "instit_pct": 0.4164684898929845,
            "ambiguous_pct": 0.16676575505350774,
            "unobservable_pct": 0.36058263971462545,
            "unclear_pct": 0.5273483947681332,
            "retail_qty_pct": 0.024410106212270823,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5298820652457703,
            "ambiguous_qty_pct": 0.13173419415553822,
            "unobservable_qty_pct": 0.3139736343864207,
            "unclear_qty_pct": 0.4457078285419589,
            "retail_notional_pct": 0.0250471914249484,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.550125250473651,
            "ambiguous_notional_pct": 0.12903527999689862,
            "unobservable_notional_pct": 0.295792278104502,
            "unclear_notional_pct": 0.4248275581014006
          },
          "run_composition": {
            "retail_pct": 0.10831889081455806,
            "mixed_pct": 0.0,
            "instit_pct": 0.22039283651068747,
            "ambiguous_pct": 0.18659734257654534,
            "unobservable_pct": 0.4846909300982091,
            "unclear_pct": 0.6712882726747544,
            "retail_notional_pct": 0.0250471914249484,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.550125250473651,
            "unclear_notional_pct": 0.4248275581014006
          },
          "counts": {
            "trades": {
              "retail": 378,
              "mixed": 0,
              "institutional": 2802,
              "ambiguous": 1122,
              "unobservable": 2426,
              "unclear": 3548
            },
            "runs": {
              "retail": 375,
              "mixed": 0,
              "institutional": 763,
              "ambiguous": 646,
              "unobservable": 1678,
              "unclear": 2324
            }
          },
          "confidence": {
            "high": 0.017908723281340265,
            "medium": 0.10283073367995378,
            "low": 0.20797227036395147,
            "na": 0.6712882726747544
          },
          "confidence_counts": {
            "high": 62,
            "medium": 356,
            "low": 720,
            "na": 2324
          },
          "trade_confidence": {
            "high": 0.045630202140309155,
            "medium": 0.17523781212841855,
            "low": 0.2517835909631391,
            "na": 0.5273483947681332
          },
          "trade_confidence_counts": {
            "high": 307,
            "medium": 1179,
            "low": 1694,
            "na": 3548
          },
          "observability": {
            "avg_feature_coverage": 0.6462305025996534,
            "observable_run_pct": 0.5153090699017908,
            "ambiguous_run_pct": 0.18659734257654534,
            "unobservable_run_pct": 0.4846909300982091
          },
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "dominant_share": 0.4846909300982091,
          "dominance_gap": 0.26429809358752165,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6728
            },
            "d2_information": {
              "UNOBSERVABLE": 6728
            },
            "d3_urgency": {
              "IMMEDIATE": 3436,
              "ADAPTIVE": 26
            },
            "participant_confidence": {
              "NA": 2324,
              "LOW": 720,
              "MEDIUM": 356,
              "HIGH": 62
            }
          },
          "trade_size": {
            "avg": 12537.475639120094,
            "median": 7010.0
          },
          "run_size": {
            "avg": 24365.14618717504,
            "median": 11220.0,
            "avg_length": 1.9433853264009244
          },
          "recent_trades": [
            {
              "trade_id": "18",
              "timestamp": "2026-04-01T07:58:22.319186",
              "price": 2.95,
              "size": 11000.0,
              "notional": 32450.000000000004,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17109,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-04-01T07:35:22.866569",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17108,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-04-01T07:31:00.773399",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17107,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-04-01T07:09:05.779541",
              "price": 2.94,
              "size": 2000.0,
              "notional": 5880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17106,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-04-01T07:07:26.769325",
              "price": 2.95,
              "size": 3000.0,
              "notional": 8850.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17105,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-04-01T06:49:45.900532",
              "price": 2.95,
              "size": 2000.0,
              "notional": 5900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17104,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-04-01T06:08:48.767533",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17103,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-04-01T05:04:03.758939",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17102,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-04-01T03:58:08.756630",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17101,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-04-01T03:52:20.085481",
              "price": 2.95,
              "size": 15000.0,
              "notional": 44250.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17100,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-04-01T03:33:53.773662",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17099,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "6",
              "timestamp": "2026-04-01T02:53:49.734145",
              "price": 2.81,
              "size": 30000.0,
              "notional": 84300.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17098,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "5",
              "timestamp": "2026-04-01T02:49:18.674349",
              "price": 2.88,
              "size": 44000.0,
              "notional": 126720.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17097,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4",
              "timestamp": "2026-04-01T02:32:37.899246",
              "price": 2.87,
              "size": 5000.0,
              "notional": 14350.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17096,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "3",
              "timestamp": "2026-04-01T02:30:47.702340",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17095,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "2",
              "timestamp": "2026-04-01T01:48:08.893381",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17094,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "1",
              "timestamp": "2026-04-01T01:30:31.580051",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 17093,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "18",
              "timestamp": "2026-03-31T06:47:07.565520",
              "price": 2.92,
              "size": 1000.0,
              "notional": 2920.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17092,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "17",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "16",
              "timestamp": "2026-03-31T02:29:41.597075",
              "price": 2.93,
              "size": 1000.0,
              "notional": 2930.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17091,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "15",
              "timestamp": "2026-03-31T02:26:51.858034",
              "price": 2.9,
              "size": 4000.0,
              "notional": 11600.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17090,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "14",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.9,
              "size": 1000.0,
              "notional": 2900.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "13",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "12",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "11",
              "timestamp": "2026-03-31T02:25:12.999863",
              "price": 2.87,
              "size": 1000.0,
              "notional": 2870.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17089,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10",
              "timestamp": "2026-03-31T02:12:07.241323",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17088,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "9",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.89,
              "size": 1000.0,
              "notional": 2890.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "8",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "7",
              "timestamp": "2026-03-31T02:08:10.862363",
              "price": 2.88,
              "size": 1000.0,
              "notional": 2880.0,
              "bucket": "UNOBSERVABLE",
              "confidence": "NA",
              "run_id": 17087,
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
      "n_trades": 6728,
      "n_runs": 3462,
      "n_trade_days": 125,
      "first_trade_date": "2025-09-17",
      "last_trade_date": "2026-04-01",
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
        "retail_pct": 0.05618311533888228,
        "mixed_pct": 0.0,
        "instit_pct": 0.4164684898929845,
        "ambiguous_pct": 0.16676575505350774,
        "unobservable_pct": 0.36058263971462545,
        "unclear_pct": 0.5273483947681332,
        "retail_qty_pct": 0.024410106212270823,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.5298820652457703,
        "ambiguous_qty_pct": 0.13173419415553822,
        "unobservable_qty_pct": 0.3139736343864207,
        "unclear_qty_pct": 0.4457078285419589,
        "retail_notional_pct": 0.0250471914249484,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.550125250473651,
        "ambiguous_notional_pct": 0.12903527999689862,
        "unobservable_notional_pct": 0.295792278104502,
        "unclear_notional_pct": 0.4248275581014006
      },
      "run_composition": {
        "retail_pct": 0.10831889081455806,
        "mixed_pct": 0.0,
        "instit_pct": 0.22039283651068747,
        "ambiguous_pct": 0.18659734257654534,
        "unobservable_pct": 0.4846909300982091,
        "unclear_pct": 0.6712882726747544
      },
      "trade_size": {
        "avg": 12537.475639120094,
        "median": 7010.0
      },
      "run_size": {
        "avg": 24365.14618717504,
        "median": 11220.0,
        "avg_length": 1.9433853264009244
      },
      "confidence": {
        "high": 0.017908723281340265,
        "medium": 0.10283073367995378,
        "low": 0.20797227036395147,
        "na": 0.6712882726747544
      },
      "confidence_counts": {
        "high": 62,
        "medium": 356,
        "low": 720,
        "na": 2324
      },
      "trade_confidence": {
        "high": 0.045630202140309155,
        "medium": 0.17523781212841855,
        "low": 0.2517835909631391,
        "na": 0.5273483947681332
      },
      "trade_confidence_counts": {
        "high": 307,
        "medium": 1179,
        "low": 1694,
        "na": 3548
      },
      "counts": {
        "trades": {
          "retail": 378,
          "mixed": 0,
          "institutional": 2802,
          "ambiguous": 1122,
          "unobservable": 2426,
          "unclear": 3548
        },
        "runs": {
          "retail": 375,
          "mixed": 0,
          "institutional": 763,
          "ambiguous": 646,
          "unobservable": 1678,
          "unclear": 2324
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6462305025996534,
        "observable_run_pct": 0.5153090699017908,
        "ambiguous_run_pct": 0.18659734257654534,
        "unobservable_run_pct": 0.4846909300982091
      },
      "dominant_bucket": "UNOBSERVABLE",
      "dominant_label": "Not Observable",
      "dominant_share": 0.4846909300982091,
      "dominance_gap": 0.26429809358752165,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 1844,
            "n_runs": 889,
            "retail_pct": 0.05314533622559653,
            "mixed_pct": 0.0,
            "instit_pct": 0.4235357917570499,
            "ambiguous_pct": 0.18926247288503253,
            "unobservable_pct": 0.33405639913232105,
            "unclear_pct": 0.5233188720173536,
            "avg_trade_size": 10378.17928416486,
            "avg_run_notional": 21526.842069741284,
            "retail_qty_pct": 0.023482779369691602,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5558649907952337,
            "ambiguous_qty_pct": 0.15356189785952834,
            "unobservable_qty_pct": 0.26709033197554644,
            "unclear_qty_pct": 0.4206522298350748,
            "retail_notional_pct": 0.02334148175673904,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5591633614132387,
            "ambiguous_notional_pct": 0.15658923659626953,
            "unobservable_notional_pct": 0.2609059202337526,
            "unclear_notional_pct": 0.41749515683002214,
            "run_retail_pct": 0.10798650168728909,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2283464566929134,
            "run_ambiguous_pct": 0.19910011248593926,
            "run_unobservable_pct": 0.4645669291338583,
            "run_unclear_pct": 0.6636670416197975,
            "avg_feature_coverage": 0.6542744656917886,
            "high_confidence_pct": 0.020247469066366704,
            "medium_confidence_pct": 0.16197975253093364,
            "low_confidence_pct": 0.15410573678290213,
            "na_confidence_pct": 0.6636670416197975,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 286,
            "n_runs": 193,
            "retail_pct": 0.045454545454545456,
            "mixed_pct": 0.0,
            "instit_pct": 0.3531468531468531,
            "ambiguous_pct": 0.12937062937062938,
            "unobservable_pct": 0.47202797202797203,
            "unclear_pct": 0.6013986013986015,
            "avg_trade_size": 8991.286713286714,
            "avg_run_notional": 13323.875647668394,
            "retail_qty_pct": 0.01647834274952919,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4500941619585687,
            "ambiguous_qty_pct": 0.11181732580037665,
            "unobservable_qty_pct": 0.4216101694915254,
            "unclear_qty_pct": 0.533427495291902,
            "retail_notional_pct": 0.016414492974550342,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4511430646920017,
            "ambiguous_notional_pct": 0.10965550175227921,
            "unobservable_notional_pct": 0.4227869405811687,
            "unclear_notional_pct": 0.532442442333448,
            "run_retail_pct": 0.06735751295336788,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20725388601036268,
            "run_ambiguous_pct": 0.15025906735751296,
            "run_unobservable_pct": 0.5751295336787565,
            "run_unclear_pct": 0.7253886010362695,
            "avg_feature_coverage": 0.6269430051813472,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.27461139896373055,
            "na_confidence_pct": 0.7253886010362695,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 565,
            "n_runs": 360,
            "retail_pct": 0.0743362831858407,
            "mixed_pct": 0.0,
            "instit_pct": 0.3486725663716814,
            "ambiguous_pct": 0.184070796460177,
            "unobservable_pct": 0.3929203539823009,
            "unclear_pct": 0.5769911504424778,
            "avg_trade_size": 10552.102654867256,
            "avg_run_notional": 16560.93888888889,
            "retail_qty_pct": 0.027517302969412814,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4454119223040857,
            "ambiguous_qty_pct": 0.1501451216789462,
            "unobservable_qty_pct": 0.37692565304755526,
            "unclear_qty_pct": 0.5270707747265014,
            "retail_notional_pct": 0.027269320814808876,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.4385889286336087,
            "ambiguous_notional_pct": 0.1529552974217444,
            "unobservable_notional_pct": 0.381186453129838,
            "unclear_notional_pct": 0.5341417505515824,
            "run_retail_pct": 0.11666666666666667,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18888888888888888,
            "run_ambiguous_pct": 0.21944444444444444,
            "run_unobservable_pct": 0.475,
            "run_unclear_pct": 0.6944444444444444,
            "avg_feature_coverage": 0.63875,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.022222222222222223,
            "low_confidence_pct": 0.2833333333333333,
            "na_confidence_pct": 0.6944444444444444,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 506,
            "n_runs": 300,
            "retail_pct": 0.05138339920948617,
            "mixed_pct": 0.0,
            "instit_pct": 0.3814229249011858,
            "ambiguous_pct": 0.17193675889328064,
            "unobservable_pct": 0.3952569169960474,
            "unclear_pct": 0.5671936758893281,
            "avg_trade_size": 10376.99209486166,
            "avg_run_notional": 17502.52666666667,
            "retail_qty_pct": 0.01917870036101083,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5223375451263538,
            "ambiguous_qty_pct": 0.12691787003610108,
            "unobservable_qty_pct": 0.3315658844765343,
            "unclear_qty_pct": 0.45848375451263534,
            "retail_notional_pct": 0.018974403314721416,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.518734628409841,
            "ambiguous_notional_pct": 0.12535332993826795,
            "unobservable_notional_pct": 0.3369376383371696,
            "unclear_notional_pct": 0.4622909682754376,
            "run_retail_pct": 0.08666666666666667,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.20666666666666667,
            "run_ambiguous_pct": 0.20666666666666667,
            "run_unobservable_pct": 0.5,
            "run_unclear_pct": 0.7066666666666667,
            "avg_feature_coverage": 0.6445000000000001,
            "high_confidence_pct": 0.01,
            "medium_confidence_pct": 0.07,
            "low_confidence_pct": 0.21333333333333335,
            "na_confidence_pct": 0.7066666666666667,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 448,
            "n_runs": 289,
            "retail_pct": 0.05803571428571429,
            "mixed_pct": 0.0,
            "instit_pct": 0.29017857142857145,
            "ambiguous_pct": 0.17410714285714285,
            "unobservable_pct": 0.47767857142857145,
            "unclear_pct": 0.6517857142857143,
            "avg_trade_size": 8378.83482142857,
            "avg_run_notional": 12988.643598615918,
            "retail_qty_pct": 0.0220850925625203,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3873010717765508,
            "ambiguous_qty_pct": 0.15264696329977265,
            "unobservable_qty_pct": 0.4379668723611562,
            "unclear_qty_pct": 0.5906138356609288,
            "retail_notional_pct": 0.021747504740633153,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.38449345422325276,
            "ambiguous_notional_pct": 0.153061577880917,
            "unobservable_notional_pct": 0.44069746315519703,
            "unclear_notional_pct": 0.593759041036114,
            "run_retail_pct": 0.08996539792387544,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1695501730103806,
            "run_ambiguous_pct": 0.22837370242214533,
            "run_unobservable_pct": 0.5121107266435986,
            "run_unclear_pct": 0.740484429065744,
            "avg_feature_coverage": 0.6283737024221454,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25951557093425603,
            "na_confidence_pct": 0.740484429065744,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 18,
            "n_runs": 17,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.2222222222222222,
            "unobservable_pct": 0.7777777777777778,
            "unclear_pct": 1.0,
            "avg_trade_size": 19698.88888888889,
            "avg_run_notional": 20857.647058823528,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.032520325203252036,
            "unobservable_qty_pct": 0.967479674796748,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.032601951604715435,
            "unobservable_notional_pct": 0.9673980483952845,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_ambiguous_pct": 0.17647058823529413,
            "run_unobservable_pct": 0.8235294117647058,
            "run_unclear_pct": 1.0,
            "avg_feature_coverage": 0.5764705882352942,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
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
          "trade_id": "18",
          "timestamp": "2026-04-01T07:58:22.319186",
          "price": 2.95,
          "size": 11000.0,
          "notional": 32450.000000000004,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17109,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "17",
          "timestamp": "2026-04-01T07:35:22.866569",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 17108,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "16",
          "timestamp": "2026-04-01T07:35:22.866569",
          "price": 2.92,
          "size": 1000.0,
          "notional": 2920.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 17108,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "15",
          "timestamp": "2026-04-01T07:31:00.773399",
          "price": 2.95,
          "size": 2000.0,
          "notional": 5900.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17107,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "14",
          "timestamp": "2026-04-01T07:09:05.779541",
          "price": 2.94,
          "size": 2000.0,
          "notional": 5880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17106,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "13",
          "timestamp": "2026-04-01T07:07:26.769325",
          "price": 2.95,
          "size": 3000.0,
          "notional": 8850.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17105,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "12",
          "timestamp": "2026-04-01T06:49:45.900532",
          "price": 2.95,
          "size": 2000.0,
          "notional": 5900.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17104,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "11",
          "timestamp": "2026-04-01T06:08:48.767533",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17103,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10",
          "timestamp": "2026-04-01T05:04:03.758939",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 17102,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "9",
          "timestamp": "2026-04-01T03:58:08.756630",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17101,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "8",
          "timestamp": "2026-04-01T03:52:20.085481",
          "price": 2.95,
          "size": 15000.0,
          "notional": 44250.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17100,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "7",
          "timestamp": "2026-04-01T03:33:53.773662",
          "price": 2.9,
          "size": 1000.0,
          "notional": 2900.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17099,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "6",
          "timestamp": "2026-04-01T02:53:49.734145",
          "price": 2.81,
          "size": 30000.0,
          "notional": 84300.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17098,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "5",
          "timestamp": "2026-04-01T02:49:18.674349",
          "price": 2.88,
          "size": 44000.0,
          "notional": 126720.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17097,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4",
          "timestamp": "2026-04-01T02:32:37.899246",
          "price": 2.87,
          "size": 5000.0,
          "notional": 14350.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17096,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "3",
          "timestamp": "2026-04-01T02:30:47.702340",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17095,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "2",
          "timestamp": "2026-04-01T01:48:08.893381",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17094,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "1",
          "timestamp": "2026-04-01T01:30:31.580051",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 17093,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "18",
          "timestamp": "2026-03-31T06:47:07.565520",
          "price": 2.92,
          "size": 1000.0,
          "notional": 2920.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17092,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "17",
          "timestamp": "2026-03-31T02:29:41.597075",
          "price": 2.93,
          "size": 1000.0,
          "notional": 2930.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17091,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "16",
          "timestamp": "2026-03-31T02:29:41.597075",
          "price": 2.93,
          "size": 1000.0,
          "notional": 2930.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17091,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "15",
          "timestamp": "2026-03-31T02:26:51.858034",
          "price": 2.9,
          "size": 4000.0,
          "notional": 11600.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17090,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "14",
          "timestamp": "2026-03-31T02:25:12.999863",
          "price": 2.9,
          "size": 1000.0,
          "notional": 2900.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17089,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "13",
          "timestamp": "2026-03-31T02:25:12.999863",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17089,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "12",
          "timestamp": "2026-03-31T02:25:12.999863",
          "price": 2.87,
          "size": 1000.0,
          "notional": 2870.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17089,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "11",
          "timestamp": "2026-03-31T02:25:12.999863",
          "price": 2.87,
          "size": 1000.0,
          "notional": 2870.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17089,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10",
          "timestamp": "2026-03-31T02:12:07.241323",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17088,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "9",
          "timestamp": "2026-03-31T02:08:10.862363",
          "price": 2.89,
          "size": 1000.0,
          "notional": 2890.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17087,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "8",
          "timestamp": "2026-03-31T02:08:10.862363",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17087,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "7",
          "timestamp": "2026-03-31T02:08:10.862363",
          "price": 2.88,
          "size": 1000.0,
          "notional": 2880.0,
          "bucket": "UNOBSERVABLE",
          "confidence": "NA",
          "run_id": 17087,
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
      "total_trades": 6727,
      "price_moving_trades": 3276,
      "pct_price_moving": 48.69927159209157,
      "all_movers": {
        "count": 3276,
        "avg_size": 11996.41211843712,
        "median_size": 6930.0,
        "retail_count": 207,
        "mixed_count": 0,
        "institutional_count": 1200,
        "ambiguous_count": 551,
        "unobservable_count": 1318,
        "retail_pct": 6.318681318681318,
        "mixed_pct": 0.0,
        "instit_pct": 36.63003663003663,
        "unclear_pct": 57.05128205128205
      },
      "positive_movers": {
        "count": 1590,
        "avg_size": 11789.24182389937,
        "median_size": 6945.0,
        "retail_count": 64,
        "mixed_count": 0,
        "institutional_count": 511,
        "ambiguous_count": 247,
        "unobservable_count": 768,
        "retail_pct": 4.0251572327044025,
        "mixed_pct": 0.0,
        "instit_pct": 32.13836477987421,
        "unclear_pct": 63.83647798742138
      },
      "negative_movers": {
        "count": 1686,
        "avg_size": 12191.786239620404,
        "median_size": 6915.0,
        "retail_count": 143,
        "mixed_count": 0,
        "institutional_count": 689,
        "ambiguous_count": 304,
        "unobservable_count": 550,
        "retail_pct": 8.48161328588375,
        "mixed_pct": 0.0,
        "instit_pct": 40.865954922894424,
        "unclear_pct": 50.65243179122183
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
          "opening": 0.0,
          "continuous": 0.988069099797009,
          "closing": 0.01193090020299101,
          "auctions": 0.01193090020299101,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0007747893738730337,
          "continuous": 0.9978262179008891,
          "closing": 0.0013989927252378287,
          "auctions": 0.0021737820991108623,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0003731530184114832,
          "continuous": 0.998487251507148,
          "closing": 0.0011395954744404656,
          "auctions": 0.0015127484928519489,
          "other": 0.0
        },
        "6M": {
          "opening": 0.000886029664556246,
          "continuous": 0.99388932043912,
          "closing": 0.005224649896323678,
          "auctions": 0.006110679560879924,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.507116281088387,
        "1M": 0.3498764470866967,
        "3M": 0.37952741127634343,
        "6M": 0.31881272627097734
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0118
        },
        {
          "time": "09:30",
          "avg_share": 0.0925
        },
        {
          "time": "10:00",
          "avg_share": 0.1086
        },
        {
          "time": "10:30",
          "avg_share": 0.1106
        },
        {
          "time": "11:00",
          "avg_share": 0.0596
        },
        {
          "time": "11:30",
          "avg_share": 0.0596
        },
        {
          "time": "13:00",
          "avg_share": 0.0802
        },
        {
          "time": "13:30",
          "avg_share": 0.1064
        },
        {
          "time": "14:00",
          "avg_share": 0.0605
        },
        {
          "time": "14:30",
          "avg_share": 0.08
        },
        {
          "time": "15:00",
          "avg_share": 0.1108
        },
        {
          "time": "15:30",
          "avg_share": 0.103
        },
        {
          "time": "16:00",
          "avg_share": 0.0165
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1328",
          "auctions_pct": 0.9115307969999671,
          "hhi": 0.326736393293513,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "6959",
          "auctions_pct": 1.0808325708997817,
          "hhi": 0.3505471052252044,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1483",
          "auctions_pct": 0.8441594212864204,
          "hhi": 0.6363721226167438,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "8418",
          "auctions_pct": 0.7733327964775948,
          "hhi": 0.29357816716781887,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1463",
          "auctions_pct": 0.28759893330596026,
          "hhi": 0.6597544524266257,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2180",
          "auctions_pct": 1.1653028176735187,
          "hhi": 0.5688227941126041,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6100",
          "auctions_pct": 0.6179638173477641,
          "hhi": 0.16048830799826158,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1586",
          "auctions_pct": 2.1660770658776003,
          "hhi": 0.5601978446904841,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2521",
          "auctions_pct": 0.5242164984180313,
          "hhi": 0.4191912933105617,
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
