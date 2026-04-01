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
      "ticker": "LGH",
      "name": "Leong Guan Hldgs",
      "marketCap": 21762300.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "Y03",
      "name": "Yeo Hiap Seng",
      "marketCap": 376309610.4,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "MV4",
      "name": "Mewah Intl",
      "marketCap": 450200232.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "OTS",
      "name": "OTS Holdings",
      "marketCap": 24182000.0,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "BQD",
      "name": "Envictus",
      "marketCap": 109505287.08,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "D03",
      "name": "Del Monte Pac",
      "marketCap": 174956402.16,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "5JS",
      "name": "Indofood Agri",
      "marketCap": 530443721.40000004,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "Q01",
      "name": "QAF",
      "marketCap": 572392097.8,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    },
    {
      "ticker": "42W",
      "name": "Zixin",
      "marketCap": 62324463.825,
      "sector": "Packaged Foods",
      "industry": "Consumer Defensive"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "LGH",
    "company": "Leong Guan Hldgs",
    "asof_date": "2026-03-16",
    "industry": "Consumer Defensive",
    "sector": "Packaged Foods",
    "market_cap_display": "21.8M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 40.50179211469534,
          "score_pca_percentile": 40.50179211469534,
          "rank_pca": 333,
          "total": 558,
          "adv_notional_sgd": 1075.0,
          "adv_volume_shares": 5000.0,
          "free_float_shares": null,
          "turnover_ratio": 4.939735230191662e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.03703703703703706,
          "spread_ticks": 1.6,
          "amihud": 0.0,
          "volatility": 0.2243306692630786
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5254624618612046,
          "loadings": {
            "log_adv": 0.549195800099134,
            "log_trades": 0.5050765786068774,
            "log_turnover": 0.5180414831304948,
            "neg_spread": 0.3895196059850174,
            "neg_amihud": 0.035494949492609985,
            "neg_vol": -0.14808521116571094
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
          "peer_median_adv": 74184.5,
          "peer_median_score_pca": 60.12544802867383,
          "peer_median_trades": 14.0,
          "peer_median_volatility": 0.1340407070771591,
          "peer_median_spread_pct": 0.028519800643468048,
          "peer_median_spread_ticks": 1.6136363636363638,
          "peer_median_amihud": 1.2498940089880368e-07,
          "peer_median_turnover_ratio": 0.0006318841873718424,
          "target_vs_peer": {
            "score_pca_delta": -19.62,
            "adv_delta_pct": -98.6,
            "trades_delta_pct": -85.71,
            "volatility_delta_pct": -67.36,
            "spread_pct_delta_pct": -29.86,
            "spread_ticks_delta_pct": -0.85,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -92.18
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 40.50179211469534,
            "rank_pca": 333,
            "adv": 1075.0,
            "trades": 2.0,
            "volatility": 0.2243306692630786,
            "spread_pct": 0.03703703703703706,
            "spread_ticks": 1.6,
            "amihud": 0.0,
            "turnover_ratio": 4.939735230191662e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 40.681003584229394,
            "rank_pca": 332,
            "adv": 2340.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 2.4873135687528007e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 23.835125448028673,
            "rank_pca": 426,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.05522682445759374,
            "spread_ticks": 3.2941176470588234,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 58.96057347670251,
            "rank_pca": 230,
            "adv": 70560.0,
            "trades": 8.0,
            "volatility": 0.1717814684523061,
            "spread_pct": 0.12275263484190949,
            "spread_ticks": 14.142857142857142,
            "amihud": 1.2541889912307126e-07,
            "turnover_ratio": 0.02179071231417365,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 2016.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.07457627118644074,
            "spread_ticks": 5.5,
            "amihud": 0.0,
            "turnover_ratio": 3.384826251851697e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 92715.9,
            "trades": 38.0,
            "volatility": 0.3306787060870082,
            "spread_pct": 0.01736892891605015,
            "spread_ticks": 1.5,
            "amihud": 3.595212184030283e-07,
            "turnover_ratio": 0.0017126237472302726,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 72.40143369175627,
            "rank_pca": 155,
            "adv": 126160.0,
            "trades": 39.0,
            "volatility": 0.839980640568884,
            "spread_pct": 0.019593315221865467,
            "spread_ticks": 1.5454545454545454,
            "amihud": 7.300670827353733e-07,
            "turnover_ratio": 0.000766560846724149,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 61.29032258064516,
            "rank_pca": 217,
            "adv": 77809.0,
            "trades": 20.0,
            "volatility": 0.09629994570201207,
            "spread_pct": 0.008516515134077576,
            "spread_ticks": 1.6818181818181819,
            "amihud": 0.0,
            "turnover_ratio": 0.0004972075280195358,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 75.08960573476703,
            "rank_pca": 140,
            "adv": 258086.4,
            "trades": 53.0,
            "volatility": 0.302679820871778,
            "spread_pct": 0.037446286065070625,
            "spread_ticks": 1.196078431372549,
            "amihud": 1.2498940089880368e-07,
            "turnover_ratio": 0.006230432480396794,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23563660560777125,
              "median": 0.09654436599596034,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8311000133470818,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3014236.902805025,
              "median": 8663.5,
              "min": 0.0,
              "max": 443535138.0,
              "p5": 0.0,
              "p95": 9278629.124999965,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1149237524438633,
              "median": 0.037446286065070625,
              "min": 0.0003309794755649865,
              "max": 1.4382566585956416,
              "p5": 0.003792408284779887,
              "p95": 0.5226194690265454,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014409150221971161,
              "median": 0.00018913545920913583,
              "min": 0.0,
              "max": 6.673917342297805,
              "p5": 0.0,
              "p95": 0.010362813892742866,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0021924399017792225,
              "median": 1.6491869942136736e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 0.00016725298511012743,
              "count": 400
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 486.0179211469534,
              "median": 7.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2852.1999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20066710053893422,
              "median": 0.1862482679681527,
              "min": 0.0,
              "max": 0.839980640568884,
              "p5": 0.0,
              "p95": 0.5664260535277881,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3381056.021428571,
              "median": 74184.5,
              "min": 0.0,
              "max": 39281290.0,
              "p5": 0.0,
              "p95": 18503448.49999999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20175088755718815,
              "median": 0.028315176129451267,
              "min": 0.0026843371953669255,
              "max": 1.3716475095785439,
              "p5": 0.003488568982176049,
              "p95": 1.1664120320791984,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024629488133213764,
              "median": 0.0002746906708421607,
              "min": 0.0,
              "max": 0.02179071231417365,
              "p5": 0.0,
              "p95": 0.011676530422218688,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2837038237465761e-07,
              "median": 5.610751064114623e-09,
              "min": 0.0,
              "max": 7.300670827353733e-07,
              "p5": 0.0,
              "p95": 5.447941505692008e-07,
              "count": 11
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 752.3571428571429,
              "median": 14.0,
              "min": 0.0,
              "max": 7501.0,
              "p5": 0.0,
              "p95": 4440.799999999998,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 78710.9125,
              "median": 74184.5,
              "min": 0.0,
              "max": 258086.4,
              "p5": 705.6,
              "p95": 211912.15999999992,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 20.125,
              "median": 14.0,
              "min": 0.0,
              "max": 53.0,
              "p5": 0.35000000000000003,
              "p95": 48.099999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2176775727102485,
              "median": 0.1340407070771591,
              "min": 0.0,
              "max": 0.839980640568884,
              "p5": 0.0,
              "p95": 0.6617249635002271,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042972441376216225,
              "median": 0.028519800643468048,
              "min": 0.008298755186721999,
              "max": 0.12275263484190949,
              "p5": 0.008374971168296452,
              "p95": 0.10589090756249539,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.732540743570155,
              "median": 1.6136363636363638,
              "min": 1.0,
              "max": 14.142857142857142,
              "p5": 1.0686274509803921,
              "p95": 11.117857142857138,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9142808588003952e-07,
              "median": 1.2498940089880368e-07,
              "min": 0.0,
              "max": 7.300670827353733e-07,
              "p5": 0.0,
              "p95": 6.189033234356695e-07,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038820322893438055,
              "median": 0.0006318841873718424,
              "min": 0.0,
              "max": 0.02179071231417365,
              "p5": 8.705597490634804e-06,
              "p95": 0.01634461437235174,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.00545610256520912,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.00545610256520912,
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
          "score_pca": 39.247311827956985,
          "score_pca_percentile": 39.247311827956985,
          "rank_pca": 340,
          "total": 558,
          "adv_notional_sgd": 1075.0,
          "adv_volume_shares": 5000.0,
          "free_float_shares": null,
          "turnover_ratio": 4.939735230191662e-05,
          "votes": 2.0,
          "trades": 2.0,
          "spread_pct": 0.050724637681159465,
          "spread_ticks": 2.210526315789474,
          "amihud": 2.246395938516145e-05,
          "volatility": 0.5559367038422915
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5209202281197785,
          "loadings": {
            "log_adv": 0.5522493391625247,
            "log_trades": 0.5083389459675663,
            "log_turnover": 0.517611765188593,
            "neg_spread": 0.4047415269788418,
            "neg_amihud": 0.06854256622703662,
            "neg_vol": 0.013283708041644138
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
          "peer_median_adv": 22182.75,
          "peer_median_score_pca": 52.777777777777786,
          "peer_median_trades": 11.0,
          "peer_median_volatility": 0.2652019670429965,
          "peer_median_spread_pct": 0.02781349510523206,
          "peer_median_spread_ticks": 1.8017550857598725,
          "peer_median_amihud": 1.2520415001093747e-07,
          "peer_median_turnover_ratio": 0.00023274420235896358,
          "target_vs_peer": {
            "score_pca_delta": -13.53,
            "adv_delta_pct": -95.2,
            "trades_delta_pct": -81.82,
            "volatility_delta_pct": -109.63,
            "spread_pct_delta_pct": -82.37,
            "spread_ticks_delta_pct": 22.69,
            "amihud_delta_pct": -17841.86,
            "turnover_ratio_delta_pct": -78.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 39.247311827956985,
            "rank_pca": 340,
            "adv": 1075.0,
            "trades": 2.0,
            "volatility": 0.5559367038422915,
            "spread_pct": 0.050724637681159465,
            "spread_ticks": 2.210526315789474,
            "amihud": 2.246395938516145e-05,
            "turnover_ratio": 4.939735230191662e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 39.784946236559136,
            "rank_pca": 337,
            "adv": 2340.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 2.4873135687528007e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 44.80286738351255,
            "rank_pca": 309,
            "adv": 4980.0,
            "trades": 6.0,
            "volatility": 0.24480330136963976,
            "spread_pct": 0.04724409448818902,
            "spread_ticks": 2.8125,
            "amihud": 0.0,
            "turnover_ratio": 2.2324408931653346e-05,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 37.45519713261648,
            "rank_pca": 350,
            "adv": 702.0,
            "trades": 1.0,
            "volatility": 0.2350136971881932,
            "spread_pct": 0.12594458438287154,
            "spread_ticks": 15.0,
            "amihud": 1.2541889912307126e-07,
            "turnover_ratio": 0.00020753059346832045,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 39.60573476702509,
            "rank_pca": 338,
            "adv": 2016.0,
            "trades": 2.0,
            "volatility": 0.09999008084112013,
            "spread_pct": 0.05128205128205133,
            "spread_ticks": 3.75,
            "amihud": 0.0,
            "turnover_ratio": 3.384826251851697e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 65.41218637992831,
            "rank_pca": 194,
            "adv": 45009.0,
            "trades": 25.0,
            "volatility": 0.5259207425035749,
            "spread_pct": 0.020717899301373185,
            "spread_ticks": 1.8695652173913044,
            "amihud": 7.210325185665848e-07,
            "turnover_ratio": 0.0008036812761470013,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 60.752688172043015,
            "rank_pca": 220,
            "adv": 39385.5,
            "trades": 16.0,
            "volatility": 0.6699843235058577,
            "spread_pct": 0.01664684898929847,
            "spread_ticks": 1.2727272727272727,
            "amihud": 6.675068352699934e-07,
            "turnover_ratio": 0.00025795781124960673,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 65.94982078853047,
            "rank_pca": 191,
            "adv": 77809.0,
            "trades": 20.0,
            "volatility": 0.2856006327163532,
            "spread_pct": 0.011006435966794154,
            "spread_ticks": 1.7339449541284404,
            "amihud": 1.6876706846842815e-07,
            "turnover_ratio": 0.0004972075280195358,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 70.07168458781362,
            "rank_pca": 168,
            "adv": 102315.0,
            "trades": 32.0,
            "volatility": 0.29031119271559375,
            "spread_pct": 0.03490909090909094,
            "spread_ticks": 1.0566037735849056,
            "amihud": 1.2498940089880368e-07,
            "turnover_ratio": 0.0026346389394427,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4643646525549893,
              "median": 0.2636527410330223,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.4413818400683864,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3125885.94248979,
              "median": 9825.995992802415,
              "min": 0.0,
              "max": 253247897.0,
              "p5": 0.0,
              "p95": 13973999.2,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11314134533644805,
              "median": 0.03636363636363639,
              "min": 0.00028468976419645744,
              "max": 1.4382566585956416,
              "p5": 0.0036672433548244916,
              "p95": 0.5161553804342993,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010443308388770521,
              "median": 0.00016542842898802302,
              "min": 0.0,
              "max": 4.482235844703711,
              "p5": 0.0,
              "p95": 0.00991019923403002,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0010575772254199712,
              "median": 6.953838576644673e-08,
              "min": 0.0,
              "max": 0.4166666666666666,
              "p5": 0.0,
              "p95": 0.0001459354012652064,
              "count": 490
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 501.8010752688172,
              "median": 6.0,
              "min": 0.0,
              "max": 11777.0,
              "p5": 0.0,
              "p95": 2952.349999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26422657045902154,
              "median": 0.2399084992789165,
              "min": 0.0,
              "max": 0.6699843235058577,
              "p5": 0.0,
              "p95": 0.5958533707245397,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3352553.6785714286,
              "median": 22182.75,
              "min": 0.0,
              "max": 39281290.0,
              "p5": 0.0,
              "p95": 18503448.49999999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17979473350960412,
              "median": 0.02781349510523206,
              "min": 0.002742781991177732,
              "max": 1.3716475095785439,
              "p5": 0.003707683938377642,
              "p95": 0.9716732670079524,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005672343834067954,
              "median": 0.00012846397288511854,
              "min": 0.0,
              "max": 0.0026346389394427,
              "p5": 0.0,
              "p95": 0.0020227806644175115,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.028376382391441e-06,
              "median": 9.552714782607011e-08,
              "min": 0.0,
              "max": 2.246395938516145e-05,
              "p5": 0.0,
              "p95": 1.050534960853426e-05,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 673.5,
              "median": 11.0,
              "min": 0.0,
              "max": 6378.0,
              "p5": 0.0,
              "p95": 4134.199999999999,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 34319.5625,
              "median": 22182.75,
              "min": 702.0,
              "max": 102315.0,
              "p5": 1161.9,
              "p95": 93737.9,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 12.875,
              "median": 11.0,
              "min": 1.0,
              "max": 32.0,
              "p5": 1.0,
              "p95": 29.549999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2939529963550416,
              "median": 0.2652019670429965,
              "min": 0.0,
              "max": 0.6699843235058577,
              "p5": 0.034996528294392044,
              "p95": 0.6195620701550586,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03950622006329883,
              "median": 0.02781349510523206,
              "min": 0.008298755186721999,
              "max": 0.12594458438287154,
              "p5": 0.009246443459747252,
              "p95": 0.09981269779758442,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.56191765222899,
              "median": 1.8017550857598725,
              "min": 1.0,
              "max": 15.0,
              "p5": 1.019811320754717,
              "p95": 11.062499999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2596434029086017e-07,
              "median": 1.2520415001093747e-07,
              "min": 0.0,
              "max": 7.210325185665848e-07,
              "p5": 0.0,
              "p95": 7.022985294127778e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005602577444331078,
              "median": 0.00023274420235896358,
              "min": 2.2324408931653346e-05,
              "max": 0.0026346389394427,
              "p5": 2.3216463296209477e-05,
              "p95": 0.0019938037572892046,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.04878048780487809,
            "market": 0.02356301680114714,
            "sector": 0.005984976855678781,
            "peers": 0.007042253521126751,
            "vs_market": 0.02521747100373095,
            "vs_sector": 0.04279551094919931,
            "vs_peers": 0.04173823428375134
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 37.81362007168459,
          "score_pca_percentile": 37.81362007168459,
          "rank_pca": 348,
          "total": 558,
          "adv_notional_sgd": 2091.5,
          "adv_volume_shares": 8900.0,
          "free_float_shares": null,
          "turnover_ratio": 8.792728709741157e-05,
          "votes": 3.0,
          "trades": 3.0,
          "spread_pct": 0.04320987654320982,
          "spread_ticks": 2.0,
          "amihud": 1.0143028071467457e-05,
          "volatility": 0.6145172958704733
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5332868832819975,
          "loadings": {
            "log_adv": 0.5394684300164172,
            "log_trades": 0.4913328083616615,
            "log_turnover": 0.49724023546315493,
            "neg_spread": 0.4129822449819891,
            "neg_amihud": 0.1499286616735812,
            "neg_vol": 0.16518200391694343
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
          "peer_median_adv": 21804.5,
          "peer_median_score_pca": 52.41935483870968,
          "peer_median_trades": 12.5,
          "peer_median_volatility": 0.3770745099274654,
          "peer_median_spread_pct": 0.0272158816289075,
          "peer_median_spread_ticks": 1.8792270531400965,
          "peer_median_amihud": 2.933678519433432e-07,
          "peer_median_turnover_ratio": 0.0002817484129872419,
          "target_vs_peer": {
            "score_pca_delta": -14.61,
            "adv_delta_pct": -90.4,
            "trades_delta_pct": -76.0,
            "volatility_delta_pct": -62.97,
            "spread_pct_delta_pct": -58.77,
            "spread_ticks_delta_pct": 6.43,
            "amihud_delta_pct": -3357.44,
            "turnover_ratio_delta_pct": -68.79
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 37.81362007168459,
            "rank_pca": 348,
            "adv": 2091.5,
            "trades": 3.0,
            "volatility": 0.6145172958704733,
            "spread_pct": 0.04320987654320982,
            "spread_ticks": 2.0,
            "amihud": 1.0143028071467457e-05,
            "turnover_ratio": 8.792728709741157e-05,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 45.16129032258064,
            "rank_pca": 307,
            "adv": 6000.0,
            "trades": 3.0,
            "volatility": 0.18548393314260825,
            "spread_pct": 0.015239802779022876,
            "spread_ticks": 1.8888888888888888,
            "amihud": 5.711939739035772e-07,
            "turnover_ratio": 6.377727099366155e-05,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 12789.0,
            "trades": 6.0,
            "volatility": 0.550633954112555,
            "spread_pct": 0.03889137237371473,
            "spread_ticks": 2.45,
            "amihud": 1.131718131383053e-06,
            "turnover_ratio": 5.9307616499151364e-05,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 35.842293906810035,
            "rank_pca": 359,
            "adv": 1210.0,
            "trades": 1.0,
            "volatility": 0.34262380264684866,
            "spread_pct": 0.09492635024549921,
            "spread_ticks": 11.6,
            "amihud": 8.922496960774443e-07,
            "turnover_ratio": 0.00034588432244720075,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 37.27598566308244,
            "rank_pca": 351,
            "adv": 2016.0,
            "trades": 2.0,
            "volatility": 0.2026982369053645,
            "spread_pct": 0.03454231433506048,
            "spread_ticks": 2.5,
            "amihud": 0.0,
            "turnover_ratio": 3.324382925925773e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 60.0358422939068,
            "rank_pca": 224,
            "adv": 30820.0,
            "trades": 19.0,
            "volatility": 0.4157416397615029,
            "spread_pct": 0.02138057422113621,
            "spread_ticks": 1.8695652173913044,
            "amihud": 4.4781497899834304e-07,
            "turnover_ratio": 0.0005383587832618385,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 58.96057347670251,
            "rank_pca": 230,
            "adv": 32362.5,
            "trades": 19.0,
            "volatility": 0.4115252172080821,
            "spread_pct": 0.01871415635375794,
            "spread_ticks": 1.3898305084745763,
            "amihud": 1.3892072488834333e-07,
            "turnover_ratio": 0.00021761250352728308,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 124032.0,
            "trades": 42.0,
            "volatility": 0.23267145568832728,
            "spread_pct": 0.011055540931824172,
            "spread_ticks": 1.423529411764706,
            "amihud": 9.059954520840292e-08,
            "turnover_ratio": 0.0007731513479178459,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 100780.8,
            "trades": 31.0,
            "volatility": 0.5018603368690825,
            "spread_pct": 0.033051189036678794,
            "spread_ticks": 1.0192307692307692,
            "amihud": 7.158770578512439e-08,
            "turnover_ratio": 0.0026346389394427,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6228609849590088,
              "median": 0.43165437753998714,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.017219218554778502,
              "p95": 1.7590689129227055,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3701181.8502413183,
              "median": 13605.099999999999,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 13938264.999999978,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09902554150655805,
              "median": 0.028434037215136966,
              "min": 0.0002766527981379454,
              "max": 1.3777777777777778,
              "p5": 0.0038123100994296,
              "p95": 0.49222720478325804,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010905283556384846,
              "median": 0.00029318927910370663,
              "min": 0.0,
              "max": 4.62395359567596,
              "p5": 0.0,
              "p95": 0.011495081200049202,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.296367931974312e-05,
              "median": 9.651814647323686e-08,
              "min": 0.0,
              "max": 0.006747638326585701,
              "p5": 0.0,
              "p95": 4.955459897320364e-05,
              "count": 543
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 512.5286738351255,
              "median": 7.0,
              "min": 0.0,
              "max": 12305.0,
              "p5": 0.0,
              "p95": 2911.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32553577949125617,
              "median": 0.31441873636512535,
              "min": 0.0,
              "max": 0.6259963311322426,
              "p5": 0.0,
              "p95": 0.6185349582120926,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3301278.271428571,
              "median": 21804.5,
              "min": 0.0,
              "max": 38528350.0,
              "p5": 0.0,
              "p95": 18239919.49999999,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.13755094887591973,
              "median": 0.0272158816289075,
              "min": 0.003023226492139868,
              "max": 1.3777777777777778,
              "p5": 0.004103360985161612,
              "p95": 0.6244487097462141,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005871743121712957,
              "median": 0.00015276989531234732,
              "min": 0.0,
              "max": 0.0026346389394427,
              "p5": 0.0,
              "p95": 0.002096451644489977,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1312248071967212e-06,
              "median": 1.1476013504837313e-07,
              "min": 0.0,
              "max": 1.0143028071467457e-05,
              "p5": 2.2107752892829682e-10,
              "p95": 5.186807604421029e-06,
              "count": 12
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 618.7857142857143,
              "median": 12.5,
              "min": 0.0,
              "max": 5376.0,
              "p5": 0.0,
              "p95": 3923.249999999999,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 38751.2875,
              "median": 21804.5,
              "min": 1210.0,
              "max": 124032.0,
              "p5": 1492.1,
              "p95": 115894.07999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 15.375,
              "median": 12.5,
              "min": 1.0,
              "max": 42.0,
              "p5": 1.35,
              "p95": 38.14999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3554048220417964,
              "median": 0.3770745099274654,
              "min": 0.18548393314260825,
              "max": 0.550633954112555,
              "p5": 0.19150893945957295,
              "p95": 0.5335631880773396,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0334751625345868,
              "median": 0.0272158816289075,
              "min": 0.011055540931824172,
              "max": 0.09492635024549921,
              "p5": 0.012520032578343719,
              "p95": 0.0753141079903746,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.017630599468781,
              "median": 1.8792270531400965,
              "min": 1.0192307692307692,
              "max": 11.6,
              "p5": 1.1489406779661018,
              "p95": 8.414999999999996,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.180105945305361e-07,
              "median": 2.933678519433432e-07,
              "min": 0.0,
              "max": 1.131718131383053e-06,
              "p5": 2.505569702479354e-08,
              "p95": 1.0479041790260899e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005832468266686173,
              "median": 0.0002817484129872419,
              "min": 3.324382925925773e-05,
              "max": 0.0026346389394427,
              "p5": 4.2366154793220506e-05,
              "p95": 0.001983118282409,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.06521739130434856,
            "market": -0.02324972914515666,
            "sector": -0.008766341306679748,
            "peers": -0.03427858617971735,
            "vs_market": -0.0419676621591919,
            "vs_sector": -0.05645104999766881,
            "vs_peers": -0.030938805124631208
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 44.44444444444444,
          "score_pca_percentile": 44.44444444444444,
          "rank_pca": 311,
          "total": 558,
          "adv_notional_sgd": 6075.0,
          "adv_volume_shares": 27000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0002667457024303497,
          "votes": 4.0,
          "trades": 4.0,
          "spread_pct": 0.03051181102362205,
          "spread_ticks": 1.380952380952381,
          "amihud": 1.7880670054583108e-06,
          "volatility": 0.60192081249642
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5497506614802673,
          "loadings": {
            "log_adv": 0.5247314069792196,
            "log_trades": 0.46999602897933257,
            "log_turnover": 0.4769771264230423,
            "neg_spread": 0.42797208900955847,
            "neg_amihud": 0.13069021645068998,
            "neg_vol": 0.27570539076222367
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
          "peer_median_adv": 16358.75,
          "peer_median_score_pca": 54.121863799283155,
          "peer_median_trades": 10.0,
          "peer_median_volatility": 0.33127388101883415,
          "peer_median_spread_pct": 0.024737965962669334,
          "peer_median_spread_ticks": 1.5624375624375624,
          "peer_median_amihud": 6.638275596248015e-08,
          "peer_median_turnover_ratio": 0.00012931692959356354,
          "target_vs_peer": {
            "score_pca_delta": -9.68,
            "adv_delta_pct": -62.9,
            "trades_delta_pct": -60.0,
            "volatility_delta_pct": -81.7,
            "spread_pct_delta_pct": -23.34,
            "spread_ticks_delta_pct": -11.62,
            "amihud_delta_pct": -2593.57,
            "turnover_ratio_delta_pct": 106.27
          }
        },
        "peer_liquidity": [
          {
            "ticker": "LGH",
            "score_pca": 44.44444444444444,
            "rank_pca": 311,
            "adv": 6075.0,
            "trades": 4.0,
            "volatility": 0.60192081249642,
            "spread_pct": 0.03051181102362205,
            "spread_ticks": 1.380952380952381,
            "amihud": 1.7880670054583108e-06,
            "turnover_ratio": 0.0002667457024303497,
            "is_target": true
          },
          {
            "ticker": "Y03",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 9740.5,
            "trades": 5.0,
            "volatility": 0.14054145212254052,
            "spread_pct": 0.01135646687697162,
            "spread_ticks": 1.3846153846153846,
            "amihud": 4.2559398996714794e-07,
            "turnover_ratio": 0.00010204363358985849,
            "is_target": false
          },
          {
            "ticker": "MV4",
            "score_pca": 36.37992831541219,
            "rank_pca": 356,
            "adv": 3566.9999999999995,
            "trades": 3.0,
            "volatility": 0.4055246709052404,
            "spread_pct": 0.03414381789963789,
            "spread_ticks": 2.1818181818181817,
            "amihud": 4.845528931591384e-07,
            "turnover_ratio": 1.6541580112008204e-05,
            "is_target": false
          },
          {
            "ticker": "OTS",
            "score_pca": 28.31541218637993,
            "rank_pca": 401,
            "adv": 110.0,
            "trades": 1.0,
            "volatility": 0.5439086093125229,
            "spread_pct": 0.12275263484190949,
            "spread_ticks": 14.2,
            "amihud": 0.0,
            "turnover_ratio": 3.458843224472007e-05,
            "is_target": false
          },
          {
            "ticker": "BQD",
            "score_pca": 37.27598566308244,
            "rank_pca": 351,
            "adv": 2062.5,
            "trades": 2.0,
            "volatility": 0.16340310143332812,
            "spread_pct": 0.03174603174603177,
            "spread_ticks": 2.4,
            "amihud": 0.0,
            "turnover_ratio": 3.384826251851697e-05,
            "is_target": false
          },
          {
            "ticker": "D03",
            "score_pca": 59.85663082437276,
            "rank_pca": 225,
            "adv": 24543.0,
            "trades": 18.0,
            "volatility": 0.34429057227013343,
            "spread_pct": 0.018777543590726208,
            "spread_ticks": 1.7402597402597402,
            "amihud": 3.956739229043613e-07,
            "turnover_ratio": 0.0004388829364442033,
            "is_target": false
          },
          {
            "ticker": "5JS",
            "score_pca": 57.52688172043011,
            "rank_pca": 238,
            "adv": 22977.0,
            "trades": 15.0,
            "volatility": 0.3182571897675348,
            "spread_pct": 0.01746071339486158,
            "spread_ticks": 1.2962962962962963,
            "amihud": 5.834400518118084e-08,
            "turnover_ratio": 0.00015659022559726858,
            "is_target": false
          },
          {
            "ticker": "Q01",
            "score_pca": 69.71326164874552,
            "rank_pca": 170,
            "adv": 108946.0,
            "trades": 32.0,
            "volatility": 0.1736516194074784,
            "spread_pct": 0.007705479452054802,
            "spread_ticks": 1.231578947368421,
            "amihud": 7.442150674377948e-08,
            "turnover_ratio": 0.0007267368344326462,
            "is_target": false
          },
          {
            "ticker": "42W",
            "score_pca": 68.45878136200717,
            "rank_pca": 177,
            "adv": 102315.0,
            "trades": 30.0,
            "volatility": 0.3652761953282079,
            "spread_pct": 0.030698388334612456,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.002555225104821762,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Packaged Foods",
          "sector_count": 14,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6545426802092349,
              "median": 0.4252373162776888,
              "min": 0.0,
              "max": 7.957548658045472,
              "p5": 0.14570631701104003,
              "p95": 1.8286491848156068,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2637319.1829914125,
              "median": 13953.3,
              "min": 0.0,
              "max": 256508784.0,
              "p5": 0.0,
              "p95": 10088185.14999998,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09343631148136465,
              "median": 0.026981961497650475,
              "min": 0.00027050510432176795,
              "max": 1.3043478260869563,
              "p5": 0.00355888863782512,
              "p95": 0.49577167019027446,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003853776017229118,
              "median": 0.00027309865628788454,
              "min": 0.0,
              "max": 1.0777140597192012,
              "p5": 0.0,
              "p95": 0.009660150108607546,
              "count": 552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.280206102858918e-05,
              "median": 1.2058317525305571e-07,
              "min": 0.0,
              "max": 0.0071259534969212385,
              "p5": 0.0,
              "p95": 3.9213493938340145e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 382.3279569892473,
              "median": 7.5,
              "min": 0.0,
              "max": 10856.0,
              "p5": 0.0,
              "p95": 2035.0999999999979,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34779249291353737,
              "median": 0.33127388101883415,
              "min": 0.14054145212254052,
              "max": 0.7922078416962738,
              "p5": 0.15540152417455247,
              "p95": 0.6685212727163687,
              "count": 14
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1725920.0,
              "median": 16358.75,
              "min": 0.0,
              "max": 21250986.0,
              "p5": 0.0,
              "p95": 9103008.599999994,
              "count": 14
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1389241871848636,
              "median": 0.02464467730717413,
              "min": 0.0031935654964243376,
              "max": 1.3043478260869563,
              "p5": 0.004380301426201797,
              "p95": 0.6637681159420286,
              "count": 14
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00044229459947780293,
              "median": 0.00012931692959356354,
              "min": 0.0,
              "max": 0.002555225104821762,
              "p5": 0.0,
              "p95": 0.001560630708618634,
              "count": 14
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8172942102899074e-05,
              "median": 7.024320074855801e-08,
              "min": 0.0,
              "max": 0.0003637301526001612,
              "p5": 0.0,
              "p95": 0.00014511182121632412,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 361.85714285714283,
              "median": 10.0,
              "min": 0.0,
              "max": 3552.0,
              "p5": 0.0,
              "p95": 2138.899999999999,
              "count": 14
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 34282.625,
              "median": 16358.75,
              "min": 110.0,
              "max": 108946.0,
              "p5": 793.3750000000001,
              "p95": 106625.15,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 13.25,
              "median": 10.0,
              "min": 1.0,
              "max": 32.0,
              "p5": 1.35,
              "p95": 31.299999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3068566763183733,
              "median": 0.33127388101883415,
              "min": 0.14054145212254052,
              "max": 0.5439086093125229,
              "p5": 0.14854302938131617,
              "p95": 0.495474230869974,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03433013451710072,
              "median": 0.024737965962669334,
              "min": 0.007705479452054802,
              "max": 0.12275263484190949,
              "p5": 0.008983325050775688,
              "p95": 0.09173954891211437,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.179321068794753,
              "median": 1.5624375624375624,
              "min": 1.0,
              "max": 14.2,
              "p5": 1.0810526315789475,
              "p95": 10.069999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.79823289744451e-07,
              "median": 6.638275596248015e-08,
              "min": 0.0,
              "max": 4.845528931591384e-07,
              "p5": 0.0,
              "p95": 4.6391727704194175e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0005080571262201229,
              "median": 0.00012931692959356354,
              "min": 1.6541580112008204e-05,
              "max": 0.002555225104821762,
              "p5": 2.2598918954286272e-05,
              "p95": 0.0019152542101855705,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.10416666666666785,
            "market": 0.07694601594615169,
            "sector": -0.0030021569861736763,
            "peers": -0.024016271569982206,
            "vs_market": -0.18111268261281954,
            "vs_sector": -0.10116450968049417,
            "vs_peers": -0.08015039509668564
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Today’s picture looks weak, with access likely thinner on a snapshot basis. A 1D score of 40.5 compared with a peer median of 60.1 points to below-peer tradability, which matters for immediate execution conditions.",
        "market_comparison": "Price was flat on the day, in line with peers. That leaves the main read on accessibility coming from liquidity rather than price direction."
      },
      "1w": {
        "liquidity": "Near-term liquidity looks weak and has pulled back. Average volume is down 48.6% from the 1M baseline, which matters because recent access is likely worse than the broader monthly picture.",
        "market_comparison": "The stock rose 4.9% over the week compared with 0.7% for peers. Even with stronger short-term price performance, trading access still looks thinner than the monthly baseline."
      },
      "30d": {
        "liquidity": "Monthly liquidity looks average to weak for the company’s size. The 1M score of 37.8 compared with a peer median of 52.4 suggests access is available but below peer standards.",
        "market_comparison": "Return -6.5% vs peers -3.4%."
      },
      "3m": {
        "liquidity": "The broader structural picture is mixed, but still below peers. The 3M score of 44.4 compared with a peer median of 54.1 suggests tradability is serviceable rather than strong, which matters for sustained access.",
        "market_comparison": "Over three months, the stock fell 10.4% compared with a 2.4% drop for peers. That relative underperformance matters because it sits alongside a below-peer liquidity profile rather than offsetting it."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 62,
      "reporting_window_days": 62,
      "available_history_days": 62,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.4543583553169085,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "45.4%",
          "display_range": null,
          "display_text": "45.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "share_pct",
          "value_pct": 45.4,
          "plain_english": "Market explains about 45.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5049994247152569,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.5%",
          "display_range": null,
          "display_text": "50.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "share_pct",
          "value_pct": 50.5,
          "plain_english": "Sector explains about 50.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.04064221996783456,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.1%",
          "display_range": null,
          "display_text": "4.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "share_pct",
          "value_pct": 4.1,
          "plain_english": "Company-specific explains about 4.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 4.926074720210736,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.93",
          "display_range": null,
          "display_text": "4.93",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 4.93% stock move in the same direction in this state.",
          "value_num": 4.93
        },
        "beta_stock_lag": {
          "median": 0.09419576996339703,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.09",
          "display_range": null,
          "display_text": "0.09",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "lag_beta",
          "value_num": 0.09
        },
        "beta_sector": {
          "median": 2.6598965187121326,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.66",
          "display_range": null,
          "display_text": "2.66",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.66% stock move in the same direction in this state.",
          "value_num": 2.66
        },
        "beta_market_lag": {
          "median": -1.2806615553303642,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.28",
          "display_range": null,
          "display_text": "-1.28",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "lag_beta",
          "value_num": -1.28
        },
        "beta_sector_lag": {
          "median": 4.244125980651931,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.24",
          "display_range": null,
          "display_text": "4.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "kind": "lag_beta",
          "value_num": 4.24
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 62 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-15 to 2025-12-31",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5639107275401654,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.4%",
            "display_range": null,
            "display_text": "56.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 56.4,
            "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.18245070546760514,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.2%",
              "display_range": null,
              "display_text": "18.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 18.2,
              "plain_english": "Market explains about 18.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2536385669922295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Sector explains about 25.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5639107275401654,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
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
            "median": 0.5932333656330495,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.3%",
            "display_range": null,
            "display_text": "59.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 59.3,
            "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1853112670224285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.5%",
              "display_range": null,
              "display_text": "18.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.5,
              "plain_english": "Market explains about 18.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22145536734452193,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.1%",
              "display_range": null,
              "display_text": "22.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.1,
              "plain_english": "Sector explains about 22.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5932333656330495,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly company-driven."
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
            "median": 0.3761964400033791,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3634321979530605,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Market explains about 36.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2603713620435603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.0%",
              "display_range": null,
              "display_text": "26.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.0,
              "plain_english": "Sector explains about 26.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3761964400033791,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-16",
          "n_obs": 11,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4737024352603138,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3435700018959466,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18272756284373962,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4737024352603138,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.029314601504705787,
            "low": 0.029314601504705787,
            "high": 0.029314601504705787
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.0,
          "current_probability": 1.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.045832530824868045,
            "low": 0.045832530824868045,
            "high": 0.045832530824868045
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.13793103448275862,
            0.8620689655172413
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            25.0,
            5.0
          ],
          [
            4.0,
            25.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 62,
        "reporting_window_days": 62,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "4.93",
        "sector_link_display": "2.66",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.93% stock move in the same direction in this state. This is a point estimate from 62 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.66% stock move in the same direction in this state. This is a point estimate from 62 trading days.",
        "stock_persistence_display": "0.09",
        "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
        "history_limited_note": "Read is based on 62 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.5,
        "driver_share_display": "50.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 62 trading days relative to the 252-day target.",
        "history_days": 62,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8620689655172413,
        "effective_days": 30.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.0 days.",
        "expected_duration_days": 6.0
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
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.029314601504705787,
            "low": 0.029314601504705787,
            "high": 0.029314601504705787
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.0,
          "current_probability": 1.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.045832530824868045,
            "low": 0.045832530824868045,
            "high": 0.045832530824868045
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8333333333333334,
          0.16666666666666666
        ],
        [
          0.13793103448275862,
          0.8620689655172413
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.13793103448275862,
            0.8620689655172413
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            25.0,
            5.0
          ],
          [
            4.0,
            25.0
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
        "text": "Liquidity score: 44.4 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity looks mixed relative to peers, and near-term trading is thinner. The 3M score is 44.4 compared with a peer median of 54.1, while 1W average volume is down 48.6% from 1M.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 6.5% over 1M compared with peers down 3.4% and the market down 2.3%.",
    "perf_insight": "Performance has been weaker than the broader tape, with the stock down 6.5% over 1M compared with peers down 3.4% and the market down 2.3%. Sector influence at 50.5% suggests the move is still being shaped meaningfully by broader market forces, which matters because the stock is not being supported by stronger relative momentum.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the tape, pointing to a broader market backdrop rather than a purely company-specific move.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.5% of price changes. Other influences are market 45.4%, and company-specific 4.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 45.4%, sector 50.5%, and company-specific 4.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 45.4%, sector 50.5%, and company-specific 4.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector factors explain 50.5% of trading, so broader market conditions are setting the tone. With 1W average volume down 48.6% from 1M, price moves may feel less supported in the near term.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 50.5% of recent price moves.",
      "Monthly change: the pattern was mostly sector in January and March, with a more mixed spell in February."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions look broadly orderly on screen, but recent volume has dropped and leaves the market thinner than the monthly picture",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Dec 11, 2025 to Mar 16, 2026 (63 trading days • 1,038 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed depth looks broadly balanced, with top-10 bid depth at 1.24x ask depth and a 3-tick spread. That matters because the live order book does not point to immediate fragility, even as recent average volume has pulled back.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 25.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trade-size history is limited, and the near-term liquidity read is weaker than the monthly backdrop.",
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
    "intraday_insight": "Trade-size history is limited, covering 63 trading days and 1,038 trades from Dec 11, 2025 to Mar 16",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Snapshot unavailable.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, and recent trading activity has pulled back.",
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
        "value": "44.4/100",
        "sub": "Peer median 54.1 (-9.7 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$6.1K",
        "sub": "Peer median S$16.4K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "3.05%",
        "sub": "1.38 ticks; peers 2.47%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks mixed rather than strong, and the recent trend is weaker. The main anchor is the 3M liquidity score of 44.4 compared with a peer median of 54.1, which places the stock below peers without pointing to a severe shortfall. Recent trading has then pulled back further, with 1W average volume down 48.6% from 1M, so near-term access may be thinner than the broader monthly profile suggests.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.223",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "6.74%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.24x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-13.06% with 94.1% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-13.06% with 9.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-13.06% with 3.8% fill.",
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
        "value": "44",
        "suffix": "/100",
        "bar_pct": 44,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 311/558",
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
        "value": "3.05",
        "suffix": "%",
        "bar_pct": 31,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "3.05% • 1.38 ticks vs peers 2.47%",
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
        "value": "S$6.1K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$16.4K",
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
        "value": "50.5",
        "suffix": "sector",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 45.4% • Company 4.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity looks mixed for the stock’s size, with a 3M score of 44.4 compared with a peer median of 54.1. That leaves peer-relative access neither clearly strong nor clearly weak, which matters for expectations on trading capacity.",
      "Recent activity has pulled back sharply, with 1W average volume down 48.6% from the 1M",
      "The stock has underperformed over 1M, down 6.5% compared with peers down 3.4% and the market down 2.3%. Sector factors explain 50.5% of trading, which matters because broader market moves still account for a meaningful share of the tape."
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
      "overall": "3M liquidity is mixed: score 44.4 vs peer median 54.1 (-9.7",
      "strengths": [
        "3M score 44.4 vs peer median 54.1 (-9.7 pts)."
      ],
      "concerns": [
        "1W average volume down -48.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -9.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -10.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -10.4% vs market 7.7%.",
        "vs_sector": "Worse than sector: -10.4% vs sector -0.3%.",
        "vs_peers": "Worse than peers: -10.4% vs peers -2.4%."
      },
      "adv": {
        "insight": "average daily volume is S$6.1K, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: S$6.1K vs market S$14.0K.",
        "vs_sector": "Worse than sector: S$6.1K vs sector S$16.4K.",
        "vs_peers": "Worse than peers: S$6.1K vs peers S$16.4K."
      },
      "spread": {
        "insight": "Spread is 3.05%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 3.05% vs market 2.70%.",
        "vs_sector": "Worse than sector: 3.05% vs secto%.",
        "vs_peers": "Worse than peers: 3.05% vs peers 2.47%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.03%, better than sector and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "In line with market: 0.03% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.03% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.03% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 60.19%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 60.19% vs market 42.52%.",
        "vs_sector": "Worse than sector: 60.19% vs sector 33.13%.",
        "vs_peers": "Worse than peers: 60.19% vs peers 33.13%."
      },
      "trades": {
        "insight": "Trades is 4, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 4 vs market 8.",
        "vs_sector": "Worse than sector: 4 vs sector 10.",
        "vs_peers": "Worse than peers: 4 vs peers 10."
      },
      "amihud": {
        "insight": "Price impact is 1.79e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 1.79e-06 vs market 1.21e-07.",
        "vs_sector": "Worse than sector: 1.79e-06 vs sector 7.02e-08.",
        "vs_peers": "Worse than peers: 1.79e-06 vs peers 6.64e-08."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with a 1M return of -6.5% compared with -3.4% for peers and -2.3% for the market. Liquidity broadly confirms that weaker move, as the 3M liquidity score is 44.4 against a peer median of 54.1 and 1W average volume has dropped 48.6% from the 1M average, which suggests thinner immediate trading conditions.",
      "conclusion": "The move looks mainly sector-linked, with weaker liquidity reinforcing the underperformance rather than offsetting it."
    },
    "drivers": {
      "overall": "The stock is moving mainly with its sector now, with sector factors explaining 50.5% of recent price action. That matters because the tape is being shaped more by broader industry moves than by company-specific news, and the recent 1M return of -6.5% trails both peers at -3.4% and the market at -2.3%.",
      "beta": "Based on the last 5 trading days, current mix is market 45.4%, sector 50.5%, and company-specific 4.1%.",
      "rolling_change": "The monthly pattern has not been fully stable. January and March were mostly sector, while February was more mixed, which suggests the current sector-led read may be a shorter-term shift rather than a settled regime."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and that matters because price moves are likely to stay less predictable even as the pattern shows some persistence. The evidence is mixed because this state typically lasts about 6.0 days, but 1W average volume is down 48.6% from 1M.",
      "current": "The stock is currently in a high-volatility state, with sector moves still explaining a meaningful share of trading at 50.5%. That points to a market-led backdrop rather than a fully settled stock-specific tape.",
      "transitions": "The current state looks more persistent than short-lived, with a typical run length of about 6.0 days. Even so, evidence is mixed because recent volume has pulled back sharply relative to the monthly average.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 6.0 days."
    },
    "execution": {
      "overall": "Current displayed liquidity looks balanced, with bid depth modestly stronger than ask depth at 1.24x and the spread at 3 ticks. That matters because the live book does not point to immediate stress even as broader trading activity has pulled back.",
      "concern": "The clearest watchpoint is that recent average volume is down 48.6% from the 1M level, so the book may be less resilient than the snapshot suggests. Historical trade-size context is also based on 63 trading days and 1,038 trades, so history is limited.",
      "peer_context": "The live book is steadier than the broader peer-relative picture, with balanced displayed depth despite a 3M liquidity score of 44.4 compared with a peer median of 54.1. That matters because current access looks more orderly than the weaker medium-term ranking alone would imply."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The count split alone is not retail-heavy, because retail-like trades are 24.6% of count compared with 22.3% for institution-like trades, while value is much more institution-like at 34.1% compared with 7.7%. That matters because trade value points to deeper participation even though trade count is close.",
      "institutional_gap": "The institutional read is not fully clean because 42.7% of trade count is unclear. That leaves the overall mix fully reflective of day-to-day access enough to note, but still mixed.",
      "peer_comparison": "Relative to peers, the trader mix comparison is available in the report tables. The current read is institution-like on count and value, but history is limited."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the signal is mixed because a large share of flow is unclear. Unclear flow accounts for 42.7% of trade count, which limits how firmly price-setting participation can be attributed. Ambiguous or unclear flow is 42.7% of trade count, so the read is not fully clean. Positive and negative price-moving trade asymmetry is available in the report tables. The broader interpretation remains mixed because unclear flow is still high.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main factor in current trading conditions. Recent volume is down 48.6% from the 1M average, while the stock is also down 6.5% over 1M compared with weaker declines in peers and the market, so the broader picture looks more tied to thinner trading and weaker price performance than to short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest looks stable rather than rising, and evidence is mixed. That suggests short activity is not adding a new source of stress to the tape, although history is limited.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 13.9%, continuous 83.6%, and close 1.5%. Current trading concentration score is 0.570.",
      "hhi_interpretation": "The concentration score of 0.570 suggests activity is reasonably concentrated rather than evenly spread through the day. That supports a usable intraday market, although the flow read is still mixed because 42.7% of trade count is unclear.",
      "best_times": "Peak buckets show where activity clusters through the day.",
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
        "LGH",
        "Y03",
        "MV4",
        "OTS",
        "BQD",
        "D03",
        "5JS",
        "Q01",
        "42W"
      ],
      "scores": [
        44.44444444444444,
        50.7168458781362,
        36.37992831541219,
        28.31541218637993,
        37.27598566308244,
        59.85663082437276,
        57.52688172043011,
        69.71326164874552,
        68.45878136200717
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
        6075.0,
        9740.5,
        3566.9999999999995,
        110.0,
        2062.5,
        24543.0,
        22977.0,
        108946.0,
        102315.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Packaged Foods",
      "sector_count": 14,
      "market_count": 558,
      "company": {
        "volatility": 0.60192081249642,
        "adv": 6075.0,
        "spread_pct": 0.03051181102362205,
        "turnover_ratio": 0.0002667457024303497,
        "amihud": 1.7880670054583108e-06,
        "trades": 4.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6545426802092349,
          "median": 0.4252373162776888,
          "min": 0.0,
          "max": 7.957548658045472,
          "p5": 0.14570631701104003,
          "p95": 1.8286491848156068,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2637319.1829914125,
          "median": 13953.3,
          "min": 0.0,
          "max": 256508784.0,
          "p5": 0.0,
          "p95": 10088185.14999998,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09343631148136465,
          "median": 0.026981961497650475,
          "min": 0.00027050510432176795,
          "max": 1.3043478260869563,
          "p5": 0.00355888863782512,
          "p95": 0.49577167019027446,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003853776017229118,
          "median": 0.00027309865628788454,
          "min": 0.0,
          "max": 1.0777140597192012,
          "p5": 0.0,
          "p95": 0.009660150108607546,
          "count": 552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.280206102858918e-05,
          "median": 1.2058317525305571e-07,
          "min": 0.0,
          "max": 0.0071259534969212385,
          "p5": 0.0,
          "p95": 3.9213493938340145e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 382.3279569892473,
          "median": 7.5,
          "min": 0.0,
          "max": 10856.0,
          "p5": 0.0,
          "p95": 2035.0999999999979,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.34779249291353737,
          "median": 0.33127388101883415,
          "min": 0.14054145212254052,
          "max": 0.7922078416962738,
          "p5": 0.15540152417455247,
          "p95": 0.6685212727163687,
          "count": 14
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1725920.0,
          "median": 16358.75,
          "min": 0.0,
          "max": 21250986.0,
          "p5": 0.0,
          "p95": 9103008.599999994,
          "count": 14
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1389241871848636,
          "median": 0.02464467730717413,
          "min": 0.0031935654964243376,
          "max": 1.3043478260869563,
          "p5": 0.004380301426201797,
          "p95": 0.6637681159420286,
          "count": 14
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00044229459947780293,
          "median": 0.00012931692959356354,
          "min": 0.0,
          "max": 0.002555225104821762,
          "p5": 0.0,
          "p95": 0.001560630708618634,
          "count": 14
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.8172942102899074e-05,
          "median": 7.024320074855801e-08,
          "min": 0.0,
          "max": 0.0003637301526001612,
          "p5": 0.0,
          "p95": 0.00014511182121632412,
          "count": 14
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 361.85714285714283,
          "median": 10.0,
          "min": 0.0,
          "max": 3552.0,
          "p5": 0.0,
          "p95": 2138.899999999999,
          "count": 14
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 34282.625,
          "median": 16358.75,
          "min": 110.0,
          "max": 108946.0,
          "p5": 793.3750000000001,
          "p95": 106625.15,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 13.25,
          "median": 10.0,
          "min": 1.0,
          "max": 32.0,
          "p5": 1.35,
          "p95": 31.299999999999997,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3068566763183733,
          "median": 0.33127388101883415,
          "min": 0.14054145212254052,
          "max": 0.5439086093125229,
          "p5": 0.14854302938131617,
          "p95": 0.495474230869974,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03433013451710072,
          "median": 0.024737965962669334,
          "min": 0.007705479452054802,
          "max": 0.12275263484190949,
          "p5": 0.008983325050775688,
          "p95": 0.09173954891211437,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.179321068794753,
          "median": 1.5624375624375624,
          "min": 1.0,
          "max": 14.2,
          "p5": 1.0810526315789475,
          "p95": 10.069999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.79823289744451e-07,
          "median": 6.638275596248015e-08,
          "min": 0.0,
          "max": 4.845528931591384e-07,
          "p5": 0.0,
          "p95": 4.6391727704194175e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0005080571262201229,
          "median": 0.00012931692959356354,
          "min": 1.6541580112008204e-05,
          "max": 0.002555225104821762,
          "p5": 2.2598918954286272e-05,
          "p95": 0.0019152542101855705,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.04878048780487809,
        "market": 0.02356301680114714,
        "sector": 0.005984976855678781,
        "peers": 0.007042253521126751
      },
      {
        "horizon": "1M",
        "stock": -0.06521739130434856,
        "market": -0.02324972914515666,
        "sector": -0.008766341306679748,
        "peers": -0.03427858617971735
      },
      {
        "horizon": "3M",
        "stock": -0.10416666666666785,
        "market": 0.07694601594615169,
        "sector": -0.0030021569861736763,
        "peers": -0.024016271569982206
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
      "share_market": 0.4543583553169085,
      "share_sector": 0.5049994247152569,
      "share_idio": 0.04064221996783456,
      "beta_market": 4.926074720210736,
      "beta_sector": 2.6598965187121326,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 62,
        "reporting_window_days": 62,
        "available_history_days": 62,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.4543583553169085,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Market explains about 45.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5049994247152569,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.5%",
            "display_range": null,
            "display_text": "50.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "share_pct",
            "value_pct": 50.5,
            "plain_english": "Sector explains about 50.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.04064221996783456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.1%",
            "display_range": null,
            "display_text": "4.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "share_pct",
            "value_pct": 4.1,
            "plain_english": "Company-specific explains about 4.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 4.926074720210736,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.93",
            "display_range": null,
            "display_text": "4.93",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 4.93% stock move in the same direction in this state.",
            "value_num": 4.93
          },
          "beta_stock_lag": {
            "median": 0.09419576996339703,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.09",
            "display_range": null,
            "display_text": "0.09",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "lag_beta",
            "value_num": 0.09
          },
          "beta_sector": {
            "median": 2.6598965187121326,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.66",
            "display_range": null,
            "display_text": "2.66",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.66% stock move in the same direction in this state.",
            "value_num": 2.66
          },
          "beta_market_lag": {
            "median": -1.2806615553303642,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.28",
            "display_range": null,
            "display_text": "-1.28",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "lag_beta",
            "value_num": -1.28
          },
          "beta_sector_lag": {
            "median": 4.244125980651931,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.24",
            "display_range": null,
            "display_text": "4.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
            "kind": "lag_beta",
            "value_num": 4.24
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 62 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-15 to 2025-12-31",
            "n_obs": 12,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5639107275401654,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.4%",
              "display_range": null,
              "display_text": "56.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 56.4,
              "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.18245070546760514,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.2%",
                "display_range": null,
                "display_text": "18.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 18.2,
                "plain_english": "Market explains about 18.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2536385669922295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Sector explains about 25.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5639107275401654,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.4%",
                "display_range": null,
                "display_text": "56.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 56.4,
                "plain_english": "Company-specific explains about 56.4% of price moves in the current state."
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
              "median": 0.5932333656330495,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1853112670224285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.5%",
                "display_range": null,
                "display_text": "18.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.5,
                "plain_english": "Market explains about 18.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22145536734452193,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.1%",
                "display_range": null,
                "display_text": "22.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.1,
                "plain_english": "Sector explains about 22.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5932333656330495,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.3%",
                "display_range": null,
                "display_text": "59.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 59.3,
                "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly company-driven."
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
              "median": 0.3761964400033791,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3634321979530605,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Market explains about 36.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2603713620435603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.0%",
                "display_range": null,
                "display_text": "26.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.0,
                "plain_english": "Sector explains about 26.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3761964400033791,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-16",
            "n_obs": 11,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4737024352603138,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3435700018959466,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18272756284373962,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4737024352603138,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Company-specific explains about 47.4% of price moves in the current state."
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
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.029314601504705787,
              "low": 0.029314601504705787,
              "high": 0.029314601504705787
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.0,
            "current_probability": 1.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.045832530824868045,
              "low": 0.045832530824868045,
              "high": 0.045832530824868045
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8333333333333334,
              0.16666666666666666
            ],
            [
              0.13793103448275862,
              0.8620689655172413
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              25.0,
              5.0
            ],
            [
              4.0,
              25.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 62,
          "reporting_window_days": 62,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "4.93",
          "sector_link_display": "2.66",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 4.93% stock move in the same direction in this state. This is a point estimate from 62 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.66% stock move in the same direction in this state. This is a point estimate from 62 trading days.",
          "stock_persistence_display": "0.09",
          "point_estimate_note": "Point estimate only because the current state has 62 trading days.",
          "history_limited_note": "Read is based on 62 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.5,
          "driver_share_display": "50.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 62 trading days relative to the 252-day target.",
          "history_days": 62,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8620689655172413,
          "effective_days": 30.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.0 days.",
          "expected_duration_days": 6.0
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
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-15 to 2025-12-31",
          "n_obs": 12,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.18245070546760514,
          "share_sector": 0.2536385669922295,
          "share_company": 0.5639107275401654,
          "share_market_display": "18.2%",
          "share_sector_display": "25.4%",
          "share_company_display": "56.4%",
          "dominant_share_display": "56.4%"
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
          "share_market": 0.1853112670224285,
          "share_sector": 0.22145536734452193,
          "share_company": 0.5932333656330495,
          "share_market_display": "18.5%",
          "share_sector_display": "22.1%",
          "share_company_display": "59.3%",
          "dominant_share_display": "59.3%"
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
          "summary": "Feb: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3634321979530605,
          "share_sector": 0.2603713620435603,
          "share_company": 0.3761964400033791,
          "share_market_display": "36.3%",
          "share_sector_display": "26.0%",
          "share_company_display": "37.6%",
          "dominant_share_display": "37.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-16",
          "n_obs": 11,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Mar: Mostly company-driven.",
          "share_market": 0.3435700018959466,
          "share_sector": 0.18272756284373962,
          "share_company": 0.4737024352603138,
          "share_market_display": "34.4%",
          "share_sector_display": "18.3%",
          "share_company_display": "47.4%",
          "dominant_share_display": "47.4%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.029314601504705787,
              "low": 0.029314601504705787,
              "high": 0.029314601504705787
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.0,
            "current_probability": 1.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.045832530824868045,
              "low": 0.045832530824868045,
              "high": 0.045832530824868045
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.13793103448275862,
            0.8620689655172413
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.215,
          "quantity": 8900.0,
          "value": 1913.5
        },
        {
          "level": 2,
          "price": 0.21,
          "quantity": 200.0,
          "value": 42.0
        },
        {
          "level": 3,
          "price": 0.205,
          "quantity": 69200.0,
          "value": 14186.0
        },
        {
          "level": 4,
          "price": 0.2,
          "quantity": 85000.0,
          "value": 17000.0
        },
        {
          "level": 5,
          "price": 0.19,
          "quantity": 300000.0,
          "value": 57000.0
        },
        {
          "level": 6,
          "price": 0.171,
          "quantity": 23000.0,
          "value": 3933.0000000000005
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 26200.0,
          "value": 6026.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 9700.0,
          "value": 2279.5
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 11000.0,
          "value": 2640.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 100000.0,
          "value": 24500.0
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 12000.0,
          "value": 3000.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 10000.0,
          "value": 2550.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 1000.0,
          "value": 260.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 2000.0,
          "value": 550.0
        },
        {
          "level": 9,
          "price": 0.32,
          "quantity": 100000.0,
          "value": 32000.0
        },
        {
          "level": 10,
          "price": 0.33,
          "quantity": 6100.0,
          "value": 2013.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-16 08:18:40.073600",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2225,
        "spread_pct": 0.0674157303370787,
        "spread_ticks": 3.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 94074.5,
        "ask_depth_notional_top10": 75818.5,
        "bid_ask_depth_ratio": 1.2408
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 96,
        "history_limited": true,
        "trade_days_used": 63,
        "n_trades_used": 1038,
        "first_trade_date": "2025-12-11",
        "last_trade_date": "2026-03-16",
        "window_label": "Dec 11, 2025 to Mar 16, 2026",
        "window_short_label": "Dec 11, 2025 to Mar 16, 2026",
        "trade_days_label": "63 trading days",
        "trade_count_label": "1,038 trades",
        "window_detail_label": "63 trading days • 1,038 trades",
        "history_note": "Trade-size percentiles use available history from Dec 11, 2025 to Mar 16, 2026 (63 trading days • 1,038 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 8145.0,
            "impact_pct": -0.068357,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 8.66,
            "pct_of_adv": 461.28
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 12537.5,
            "impact_pct": -0.07199,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 13.33,
            "pct_of_adv": 710.04
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 66203.75,
            "impact_pct": -0.117894,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 70.37,
            "pct_of_adv": 3749.33
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-16",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8120202883652961280",
            "timestamp": "2026-03-15 22:59:04.442500000",
            "local_timestamp": "2026-03-16 06:59:04",
            "posted_price": 0.32,
            "size_shares": 100000.0,
            "notional": 32000.0,
            "impact_pct": -0.087392,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 34.02,
            "price_vs_mid_pct": 43.82,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8125135567689222144",
            "timestamp": "2026-03-16 00:31:27.916300000",
            "local_timestamp": "2026-03-16 08:31:27",
            "posted_price": 0.245,
            "size_shares": 100000.0,
            "notional": 24500.0,
            "impact_pct": -0.083104,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 26.04,
            "price_vs_mid_pct": 10.112,
            "executed_event_count": 0,
            "event_count": 5
          },
          {
            "rank": 3,
            "order_id": "8125135567689244672",
            "timestamp": "2026-03-16 00:50:06.516100000",
            "local_timestamp": "2026-03-16 08:50:06",
            "posted_price": 0.23,
            "size_shares": 20000.0,
            "notional": 4600.0,
            "impact_pct": -0.060266,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 4.89,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-16",
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
            "spread_pct": 0.023529411764705903,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 88044.0,
            "ask_depth_notional": 42929.0,
            "mid_price": 0.2125
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.023529411764705903,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 93169.0,
            "ask_depth_notional": 42929.0,
            "mid_price": 0.2125
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.023529411764705903,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 92140.0,
            "ask_depth_notional": 41802.0,
            "mid_price": 0.2125
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 94074.5,
            "ask_depth_notional": 73780.5,
            "mid_price": 0.22
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.0674157303370787,
            "spread_ticks": 3.0000000000000027,
            "bid_depth_notional": 94074.5,
            "ask_depth_notional": 75818.5,
            "mid_price": 0.2225
          }
        ],
        "summary": {
          "median_spread_pct": 0.023529411764705903,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 93169.0,
          "median_ask_depth_notional": 42929.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:00",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 2831.7,
      "peers": [
        {
          "ticker": "Q01",
          "pct": 763.2
        },
        {
          "ticker": "42W",
          "pct": 1028.2
        },
        {
          "ticker": "5JS",
          "pct": 2908.0
        },
        {
          "ticker": "D03",
          "pct": 3092.2
        },
        {
          "ticker": "MV4",
          "pct": 8782.3
        },
        {
          "ticker": "Y03",
          "pct": 13428.7
        },
        {
          "ticker": "BQD",
          "pct": 50396.9
        },
        {
          "ticker": "OTS",
          "pct": 92850.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 2,
          "n_runs": 2,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-16",
          "last_trade_date": "2026-03-16",
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
            "retail_pct": 0.5,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.02,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.98,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.98,
            "retail_notional_pct": 0.020466444550214184,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.9795335554497858,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.9795335554497858
          },
          "run_composition": {
            "retail_pct": 0.5,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_notional_pct": 0.020466444550214184,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "unclear_notional_pct": 0.9795335554497858
          },
          "counts": {
            "trades": {
              "retail": 1,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            },
            "runs": {
              "retail": 1,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5,
            "na": 0.5
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 1,
            "na": 1
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.5,
            "na": 0.5
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 1,
            "na": 1
          },
          "observability": {
            "avg_feature_coverage": 0.775,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.5,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.5,
          "dominance_gap": 0.0,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1,
              "MOMENTUM_REACTIVE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 2
            },
            "participant_confidence": {
              "NA": 1,
              "LOW": 1
            }
          },
          "trade_size": {
            "avg": 525.25,
            "median": 525.25
          },
          "run_size": {
            "avg": 525.25,
            "median": 525.25,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-16T06:22:46.065200",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 561,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-16T03:54:11.261100",
              "price": 0.21,
              "size": 4900.0,
              "notional": 1029.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.02,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.98,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.98,
              "retail_notional_pct": 0.020466444550214184,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.9795335554497858,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.9795335554497858,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 525.25,
              "avg_run_notional": 525.25,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.775,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
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
              "avg_trade_size": 2016.0,
              "avg_run_notional": 2016.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
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
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23076923076923078,
              "mixed_pct": 0.17307692307692307,
              "instit_pct": 0.38461538461538464,
              "ambiguous_pct": 0.21153846153846154,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21153846153846154,
              "retail_qty_pct": 0.08607276665131505,
              "mixed_qty_pct": 0.16181431185352071,
              "instit_qty_pct": 0.44192733292672304,
              "ambiguous_qty_pct": 0.31018558856844125,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.31018558856844125,
              "retail_notional_pct": 0.08588423173614967,
              "mixed_notional_pct": 0.1621928472954343,
              "instit_notional_pct": 0.4429611423366999,
              "ambiguous_notional_pct": 0.3089617786317162,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3089617786317162,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.15,
              "run_instit_pct": 0.15,
              "run_unclear_pct": 0.2,
              "avg_trade_size": 4932.4,
              "avg_run_notional": 12824.240000000002,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.65,
              "na_confidence_pct": 0.35,
              "avg_feature_coverage": 0.8425,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.09375,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.53125,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.53125,
              "retail_qty_pct": 0.019422360873503068,
              "mixed_qty_pct": 0.05383918687732716,
              "instit_qty_pct": 0.40857401630270707,
              "ambiguous_qty_pct": 0.5181644359464627,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5181644359464627,
              "retail_notional_pct": 0.019517072766160746,
              "mixed_notional_pct": 0.05319418599625498,
              "instit_notional_pct": 0.41131051045999684,
              "ambiguous_notional_pct": 0.5159782307775873,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5159782307775873,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.125,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 2675.2218749999997,
              "avg_run_notional": 5350.44375,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.375,
              "na_confidence_pct": 0.625,
              "avg_feature_coverage": 0.8406250000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.0,
              "instit_pct": 0.25,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.08875739644970414,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.3698224852071006,
              "ambiguous_qty_pct": 0.5414201183431953,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5414201183431953,
              "retail_notional_pct": 0.08876800765138382,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.37173471217646004,
              "ambiguous_notional_pct": 0.5394972801721561,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5394972801721561,
              "run_retail_pct": 0.4444444444444444,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.1111111111111111,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 4182.25,
              "avg_run_notional": 7435.111111111111,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8166666666666667,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.375,
              "mixed_pct": 0.0,
              "instit_pct": 0.125,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.07777777777777778,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.31746031746031744,
              "ambiguous_qty_pct": 0.6047619047619047,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6047619047619047,
              "retail_notional_pct": 0.07784397163120567,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.3177304964539007,
              "ambiguous_notional_pct": 0.6044255319148936,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6044255319148936,
              "run_retail_pct": 0.42857142857142855,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.14285714285714285,
              "run_unclear_pct": 0.42857142857142855,
              "avg_trade_size": 8812.5,
              "avg_run_notional": 10071.42857142857,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5714285714285714,
              "na_confidence_pct": 0.42857142857142855,
              "avg_feature_coverage": 0.7642857142857143,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2564102564102564,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.23076923076923078,
              "ambiguous_pct": 0.4358974358974359,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4358974358974359,
              "retail_qty_pct": 0.06447368421052632,
              "mixed_qty_pct": 0.1401315789473684,
              "instit_qty_pct": 0.14868421052631578,
              "ambiguous_qty_pct": 0.6467105263157895,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6467105263157895,
              "retail_notional_pct": 0.06311200261994433,
              "mixed_notional_pct": 0.14299983625347962,
              "instit_notional_pct": 0.15014327820533813,
              "ambiguous_notional_pct": 0.6437448829212379,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.6437448829212379,
              "run_retail_pct": 0.2916666666666667,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.125,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 3131.7948717948716,
              "avg_run_notional": 5089.166666666667,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4166666666666667,
              "na_confidence_pct": 0.5833333333333334,
              "avg_feature_coverage": 0.8250000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.15384615384615385,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.8461538461538461,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8461538461538461,
              "retail_notional_pct": 0.15384615384615385,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.8461538461538461,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.8461538461538461,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 1170.0,
              "avg_run_notional": 1170.0,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 13,
          "n_runs": 13,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-10",
          "last_trade_date": "2026-03-16",
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
            "retail_pct": 0.15384615384615385,
            "mixed_pct": 0.3076923076923077,
            "instit_pct": 0.15384615384615385,
            "ambiguous_pct": 0.38461538461538464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38461538461538464,
            "retail_qty_pct": 0.003278688524590164,
            "mixed_qty_pct": 0.5770491803278689,
            "instit_qty_pct": 0.09836065573770492,
            "ambiguous_qty_pct": 0.32131147540983607,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32131147540983607,
            "retail_notional_pct": 0.0032275013135179766,
            "mixed_notional_pct": 0.5814005854537266,
            "instit_notional_pct": 0.09720033025594836,
            "ambiguous_notional_pct": 0.31817158297680703,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31817158297680703
          },
          "run_composition": {
            "retail_pct": 0.15384615384615385,
            "mixed_pct": 0.3076923076923077,
            "instit_pct": 0.15384615384615385,
            "ambiguous_pct": 0.38461538461538464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38461538461538464,
            "retail_notional_pct": 0.0032275013135179766,
            "mixed_notional_pct": 0.5814005854537266,
            "instit_notional_pct": 0.09720033025594836,
            "unclear_notional_pct": 0.31817158297680703
          },
          "counts": {
            "trades": {
              "retail": 2,
              "mixed": 4,
              "institutional": 2,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            },
            "runs": {
              "retail": 2,
              "mixed": 4,
              "institutional": 2,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.3076923076923077,
            "na": 0.6923076923076923
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 4,
            "na": 9
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.3076923076923077,
            "na": 0.6923076923076923
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 4,
            "na": 9
          },
          "observability": {
            "avg_feature_coverage": 0.8384615384615384,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.38461538461538464,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.38461538461538464,
          "dominance_gap": 0.07692307692307693,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 13
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 7,
              "PERSISTENT_POSITIVE_IMPACT": 4,
              "MOMENTUM_REACTIVE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 13
            },
            "participant_confidence": {
              "NA": 9,
              "LOW": 4
            }
          },
          "trade_size": {
            "avg": 1024.8461538461538,
            "median": 967.5
          },
          "run_size": {
            "avg": 1024.8461538461538,
            "median": 967.5,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-16T06:22:46.065200",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 561,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-16T03:54:11.261100",
              "price": 0.21,
              "size": 4900.0,
              "notional": 1029.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.15384615384615385,
              "mixed_pct": 0.3076923076923077,
              "instit_pct": 0.15384615384615385,
              "ambiguous_pct": 0.38461538461538464,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.38461538461538464,
              "retail_qty_pct": 0.003278688524590164,
              "mixed_qty_pct": 0.5770491803278689,
              "instit_qty_pct": 0.09836065573770492,
              "ambiguous_qty_pct": 0.32131147540983607,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32131147540983607,
              "retail_notional_pct": 0.0032275013135179766,
              "mixed_notional_pct": 0.5814005854537266,
              "instit_notional_pct": 0.09720033025594836,
              "ambiguous_notional_pct": 0.31817158297680703,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.31817158297680703,
              "run_retail_pct": 0.15384615384615385,
              "run_mixed_pct": 0.3076923076923077,
              "run_instit_pct": 0.15384615384615385,
              "run_unclear_pct": 0.38461538461538464,
              "avg_trade_size": 1024.8461538461538,
              "avg_run_notional": 1024.8461538461538,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3076923076923077,
              "na_confidence_pct": 0.6923076923076923,
              "avg_feature_coverage": 0.8384615384615384,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1111111111111111,
              "mixed_pct": 0.0,
              "instit_pct": 0.7777777777777778,
              "ambiguous_pct": 0.1111111111111111,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1111111111111111,
              "retail_qty_pct": 0.00404040404040404,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9777777777777777,
              "ambiguous_qty_pct": 0.01818181818181818,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.01818181818181818,
              "retail_notional_pct": 0.004039044092898014,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.977785257489061,
              "ambiguous_notional_pct": 0.018175698418041064,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.018175698418041064,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.6666666666666666,
              "run_unclear_pct": 0.16666666666666666,
              "avg_trade_size": 1980.6666666666667,
              "avg_run_notional": 2971.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8333333333333334,
              "na_confidence_pct": 0.16666666666666666,
              "avg_feature_coverage": 0.7999999999999999,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.0625,
              "instit_pct": 0.5625,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.0013306719893546241,
              "mixed_qty_pct": 0.01330671989354624,
              "instit_qty_pct": 0.9387890884896873,
              "ambiguous_qty_pct": 0.046573519627411845,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.046573519627411845,
              "retail_notional_pct": 0.0013505435384240706,
              "mixed_notional_pct": 0.012841233644032148,
              "instit_notional_pct": 0.9408639050634313,
              "ambiguous_notional_pct": 0.04494431775411251,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.04494431775411251,
              "run_retail_pct": 0.1111111111111111,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.4444444444444444,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 2822.9375,
              "avg_run_notional": 5018.555555555556,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8333333333333334,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24034334763948498,
              "mixed_pct": 0.08583690987124463,
              "instit_pct": 0.2832618025751073,
              "ambiguous_pct": 0.38197424892703863,
              "unobservable_pct": 0.008583690987124463,
              "unclear_pct": 0.3905579399141631,
              "retail_qty_pct": 0.07559958289885298,
              "mixed_qty_pct": 0.05995828988529719,
              "instit_qty_pct": 0.4937434827945777,
              "ambiguous_qty_pct": 0.3693952033368092,
              "unobservable_qty_pct": 0.0013034410844629822,
              "unclear_qty_pct": 0.3706986444212722,
              "retail_notional_pct": 0.07524474163750101,
              "mixed_notional_pct": 0.06088104359990429,
              "instit_notional_pct": 0.49551668555531303,
              "ambiguous_notional_pct": 0.3670572365428255,
              "unobservable_notional_pct": 0.0013002926644561253,
              "unclear_notional_pct": 0.36835752920728165,
              "run_retail_pct": 0.4857142857142857,
              "run_mixed_pct": 0.08571428571428572,
              "run_instit_pct": 0.13333333333333333,
              "run_unclear_pct": 0.29523809523809524,
              "avg_trade_size": 1632.1845493562232,
              "avg_run_notional": 3621.8952380952383,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.34285714285714286,
              "low_confidence_pct": 0.2761904761904762,
              "na_confidence_pct": 0.38095238095238093,
              "avg_feature_coverage": 0.8476190476190474,
              "observable_run_pct": 0.9904761904761905,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2893081761006289,
              "mixed_pct": 0.09433962264150944,
              "instit_pct": 0.2893081761006289,
              "ambiguous_pct": 0.3270440251572327,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3270440251572327,
              "retail_qty_pct": 0.10021431544972838,
              "mixed_qty_pct": 0.12159446583030534,
              "instit_qty_pct": 0.4536549264286412,
              "ambiguous_qty_pct": 0.3245362922913251,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3245362922913251,
              "retail_notional_pct": 0.1001171423726823,
              "mixed_notional_pct": 0.12262325680207589,
              "instit_notional_pct": 0.45646054535366043,
              "ambiguous_notional_pct": 0.32079905547158133,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32079905547158133,
              "run_retail_pct": 0.5064935064935064,
              "run_mixed_pct": 0.09090909090909091,
              "run_instit_pct": 0.1038961038961039,
              "run_unclear_pct": 0.2987012987012987,
              "avg_trade_size": 3813.0238993710695,
              "avg_run_notional": 7873.646753246754,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6103896103896104,
              "na_confidence_pct": 0.38961038961038963,
              "avg_feature_coverage": 0.8207792207792208,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2727272727272727,
              "mixed_pct": 0.0,
              "instit_pct": 0.18181818181818182,
              "ambiguous_pct": 0.5454545454545454,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5454545454545454,
              "retail_qty_pct": 0.05861244019138756,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.4366028708133971,
              "ambiguous_qty_pct": 0.5047846889952153,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5047846889952153,
              "retail_notional_pct": 0.058506215219291696,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.43757062749195114,
              "ambiguous_notional_pct": 0.5039231572887571,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5039231572887571,
              "run_retail_pct": 0.3,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 8527.454545454546,
              "avg_run_notional": 9380.2,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.775,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.45454545454545453,
              "mixed_pct": 0.09090909090909091,
              "instit_pct": 0.2727272727272727,
              "ambiguous_pct": 0.18181818181818182,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18181818181818182,
              "retail_qty_pct": 0.04738154613466334,
              "mixed_qty_pct": 0.0199501246882793,
              "instit_qty_pct": 0.3765586034912718,
              "ambiguous_qty_pct": 0.5561097256857855,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5561097256857855,
              "retail_notional_pct": 0.04740134244924253,
              "mixed_notional_pct": 0.019949710105775027,
              "instit_notional_pct": 0.3765507782465036,
              "ambiguous_notional_pct": 0.5560981691984789,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5560981691984789,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.1,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.2,
              "avg_trade_size": 2187.318181818182,
              "avg_run_notional": 2406.05,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7,
              "na_confidence_pct": 0.3,
              "avg_feature_coverage": 0.85,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17834394904458598,
              "mixed_pct": 0.07006369426751592,
              "instit_pct": 0.18471337579617833,
              "ambiguous_pct": 0.45222929936305734,
              "unobservable_pct": 0.11464968152866242,
              "unclear_pct": 0.5668789808917197,
              "retail_qty_pct": 0.04078140960163432,
              "mixed_qty_pct": 0.04604187946884576,
              "instit_qty_pct": 0.30822267620020427,
              "ambiguous_qty_pct": 0.5022471910112359,
              "unobservable_qty_pct": 0.10270684371807967,
              "unclear_qty_pct": 0.6049540347293156,
              "retail_notional_pct": 0.04085591698537374,
              "mixed_notional_pct": 0.046614576907787426,
              "instit_notional_pct": 0.3085292867815383,
              "ambiguous_notional_pct": 0.5031426574001727,
              "unobservable_notional_pct": 0.10085756192512783,
              "unclear_notional_pct": 0.6040002193253006,
              "run_retail_pct": 0.35,
              "run_mixed_pct": 0.0875,
              "run_instit_pct": 0.1,
              "run_unclear_pct": 0.46249999999999997,
              "avg_trade_size": 2323.2802547770702,
              "avg_run_notional": 4559.4375,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0625,
              "medium_confidence_pct": 0.125,
              "low_confidence_pct": 0.2625,
              "na_confidence_pct": 0.55,
              "avg_feature_coverage": 0.8168749999999999,
              "observable_run_pct": 0.9625,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23529411764705882,
              "mixed_pct": 0.07058823529411765,
              "instit_pct": 0.23529411764705882,
              "ambiguous_pct": 0.4,
              "unobservable_pct": 0.058823529411764705,
              "unclear_pct": 0.45882352941176474,
              "retail_qty_pct": 0.0703771849126035,
              "mixed_qty_pct": 0.08524992333639987,
              "instit_qty_pct": 0.1948788715118062,
              "ambiguous_qty_pct": 0.5561177552897885,
              "unobservable_qty_pct": 0.09337626494940203,
              "unclear_qty_pct": 0.6494940202391905,
              "retail_notional_pct": 0.06966193357979922,
              "mixed_notional_pct": 0.08783683016616824,
              "instit_notional_pct": 0.19429596314000674,
              "ambiguous_notional_pct": 0.5569893485922403,
              "unobservable_notional_pct": 0.09121592452178555,
              "unclear_notional_pct": 0.6482052731140258,
              "run_retail_pct": 0.3269230769230769,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.1346153846153846,
              "run_unclear_pct": 0.46153846153846156,
              "avg_trade_size": 2997.670588235294,
              "avg_run_notional": 4900.038461538462,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.46153846153846156,
              "na_confidence_pct": 0.5384615384615384,
              "avg_feature_coverage": 0.8009615384615387,
              "observable_run_pct": 0.9423076923076923,
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
          "n_trades": 95,
          "n_runs": 79,
          "n_trade_days": 20,
          "first_trade_date": "2026-02-12",
          "last_trade_date": "2026-03-16",
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
            "retail_pct": 0.22105263157894736,
            "mixed_pct": 0.12631578947368421,
            "instit_pct": 0.23157894736842105,
            "ambiguous_pct": 0.42105263157894735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.42105263157894735,
            "retail_qty_pct": 0.036910268270120256,
            "mixed_qty_pct": 0.04616096207215541,
            "instit_qty_pct": 0.46077705827937093,
            "ambiguous_qty_pct": 0.45615171137835336,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.45615171137835336,
            "retail_notional_pct": 0.03742834879327092,
            "mixed_notional_pct": 0.04741735426918438,
            "instit_notional_pct": 0.46480791605734234,
            "ambiguous_notional_pct": 0.4503463808802024,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4503463808802024
          },
          "run_composition": {
            "retail_pct": 0.25316455696202533,
            "mixed_pct": 0.1518987341772152,
            "instit_pct": 0.17721518987341772,
            "ambiguous_pct": 0.4177215189873418,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4177215189873418,
            "retail_notional_pct": 0.03742834879327092,
            "mixed_notional_pct": 0.04741735426918438,
            "instit_notional_pct": 0.46480791605734234,
            "unclear_notional_pct": 0.4503463808802024
          },
          "counts": {
            "trades": {
              "retail": 21,
              "mixed": 12,
              "institutional": 22,
              "ambiguous": 40,
              "unobservable": 0,
              "unclear": 40
            },
            "runs": {
              "retail": 20,
              "mixed": 12,
              "institutional": 14,
              "ambiguous": 33,
              "unobservable": 0,
              "unclear": 33
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.43037974683544306,
            "na": 0.569620253164557
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 34,
            "na": 45
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.45263157894736844,
            "na": 0.5473684210526316
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 43,
            "na": 52
          },
          "observability": {
            "avg_feature_coverage": 0.8196202531645571,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.4177215189873418,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4177215189873418,
          "dominance_gap": 0.16455696202531644,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 63,
              "MULTI_FILL_SINGLE_PRICE": 26,
              "WALK_BOOK": 6
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 54,
              "PERSISTENT_POSITIVE_IMPACT": 21,
              "MOMENTUM_REACTIVE": 13,
              "UNOBSERVABLE": 7
            },
            "d3_urgency": {
              "IMMEDIATE": 79
            },
            "participant_confidence": {
              "NA": 45,
              "LOW": 34
            }
          },
          "trade_size": {
            "avg": 2465.342105263158,
            "median": 864.0
          },
          "run_size": {
            "avg": 2964.6518987341774,
            "median": 1029.0,
            "avg_length": 1.0
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-16T06:22:46.065200",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 561,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-16T03:54:11.261100",
              "price": 0.21,
              "size": 4900.0,
              "notional": 1029.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-09T06:03:56.094900",
              "price": 0.205,
              "size": 17000.0,
              "notional": 3485.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 548,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-09T05:47:18.948300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 547,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 99800.0,
              "notional": 19960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-09T05:30:51.692300",
              "price": 0.205,
              "size": 22000.0,
              "notional": 4510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 545,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 5500.0,
              "notional": 1155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 544,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 14500.0,
              "notional": 3045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 543,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 50000.0,
              "notional": 10250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 100000.0,
              "notional": 20500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-09T03:43:11.952900",
              "price": 0.21,
              "size": 100.0,
              "notional": 21.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 541,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-09T03:30:52.634400",
              "price": 0.21,
              "size": 26000.0,
              "notional": 5460.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 300.0,
              "notional": 63.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 3700.0,
              "notional": 777.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T03:12:33.499500",
              "price": 0.21,
              "size": 2000.0,
              "notional": 420.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T03:11:39.140200",
              "price": 0.21,
              "size": 8800.0,
              "notional": 1848.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 537,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 6900.0,
              "notional": 1449.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 12000.0,
              "notional": 2520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.22105263157894736,
              "mixed_pct": 0.12631578947368421,
              "instit_pct": 0.23157894736842105,
              "ambiguous_pct": 0.42105263157894735,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.42105263157894735,
              "retail_qty_pct": 0.036910268270120256,
              "mixed_qty_pct": 0.04616096207215541,
              "instit_qty_pct": 0.46077705827937093,
              "ambiguous_qty_pct": 0.45615171137835336,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.45615171137835336,
              "retail_notional_pct": 0.03742834879327092,
              "mixed_notional_pct": 0.04741735426918438,
              "instit_notional_pct": 0.46480791605734234,
              "ambiguous_notional_pct": 0.4503463808802024,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4503463808802024,
              "run_retail_pct": 0.25316455696202533,
              "run_mixed_pct": 0.1518987341772152,
              "run_instit_pct": 0.17721518987341772,
              "run_unclear_pct": 0.4177215189873418,
              "avg_trade_size": 2465.342105263158,
              "avg_run_notional": 2964.6518987341774,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.43037974683544306,
              "na_confidence_pct": 0.569620253164557,
              "avg_feature_coverage": 0.8196202531645571,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.175,
              "mixed_pct": 0.1,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.225,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.225,
              "retail_qty_pct": 0.05866794902620822,
              "mixed_qty_pct": 0.14378456359701852,
              "instit_qty_pct": 0.653282038951671,
              "ambiguous_qty_pct": 0.1442654484251022,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1442654484251022,
              "retail_notional_pct": 0.05931938196753374,
              "mixed_notional_pct": 0.14620249038398853,
              "instit_notional_pct": 0.6518580089966751,
              "ambiguous_notional_pct": 0.1426201186518026,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1426201186518026,
              "run_retail_pct": 0.2692307692307692,
              "run_mixed_pct": 0.15384615384615385,
              "run_instit_pct": 0.34615384615384615,
              "run_unclear_pct": 0.23076923076923078,
              "avg_trade_size": 3834.75,
              "avg_run_notional": 5899.615384615385,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6153846153846154,
              "na_confidence_pct": 0.38461538461538464,
              "avg_feature_coverage": 0.8384615384615386,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.216,
              "mixed_pct": 0.08,
              "instit_pct": 0.44,
              "ambiguous_pct": 0.264,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.264,
              "retail_qty_pct": 0.049927141651967176,
              "mixed_qty_pct": 0.021550732418130224,
              "instit_qty_pct": 0.6536544213513307,
              "ambiguous_qty_pct": 0.27486770457857196,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.27486770457857196,
              "retail_notional_pct": 0.050070772519413775,
              "mixed_notional_pct": 0.022265398831719654,
              "instit_notional_pct": 0.6513520879463158,
              "ambiguous_notional_pct": 0.2763117407025507,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2763117407025507,
              "run_retail_pct": 0.3291139240506329,
              "run_mixed_pct": 0.10126582278481013,
              "run_instit_pct": 0.2911392405063291,
              "run_unclear_pct": 0.27848101265822783,
              "avg_trade_size": 3184.852,
              "avg_run_notional": 5039.322784810127,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.620253164556962,
              "na_confidence_pct": 0.379746835443038,
              "avg_feature_coverage": 0.8253164556962026,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.13157894736842105,
              "mixed_pct": 0.02631578947368421,
              "instit_pct": 0.3684210526315789,
              "ambiguous_pct": 0.39473684210526316,
              "unobservable_pct": 0.07894736842105263,
              "unclear_pct": 0.4736842105263158,
              "retail_qty_pct": 0.058336366945759006,
              "mixed_qty_pct": 0.0009100837277029487,
              "instit_qty_pct": 0.491354204586822,
              "ambiguous_qty_pct": 0.44202766654532216,
              "unobservable_qty_pct": 0.007371678194393884,
              "unclear_qty_pct": 0.44939934473971604,
              "retail_notional_pct": 0.05842912563129053,
              "mixed_notional_pct": 0.0009624968281354528,
              "instit_notional_pct": 0.4938340544105025,
              "ambiguous_notional_pct": 0.4390234395818468,
              "unobservable_notional_pct": 0.007750883548224671,
              "unclear_notional_pct": 0.4467743231300715,
              "run_retail_pct": 0.16129032258064516,
              "run_mixed_pct": 0.03225806451612903,
              "run_instit_pct": 0.2903225806451613,
              "run_unclear_pct": 0.5161290322580645,
              "avg_trade_size": 3308.2815789473684,
              "avg_run_notional": 4055.3129032258066,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.45161290322580644,
              "na_confidence_pct": 0.5483870967741935,
              "avg_feature_coverage": 0.7677419354838712,
              "observable_run_pct": 0.9032258064516129,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2986425339366516,
              "mixed_pct": 0.16515837104072398,
              "instit_pct": 0.2737556561085973,
              "ambiguous_pct": 0.22850678733031674,
              "unobservable_pct": 0.033936651583710405,
              "unclear_pct": 0.26244343891402716,
              "retail_qty_pct": 0.05023140759655283,
              "mixed_qty_pct": 0.08035429300989468,
              "instit_qty_pct": 0.3984599425470795,
              "ambiguous_qty_pct": 0.42654803702521543,
              "unobservable_qty_pct": 0.04440631982125758,
              "unclear_qty_pct": 0.470954356846473,
              "retail_notional_pct": 0.05083830380410447,
              "mixed_notional_pct": 0.0817307311958507,
              "instit_notional_pct": 0.3963553338526638,
              "ambiguous_notional_pct": 0.42762170027810725,
              "unobservable_notional_pct": 0.04345393086927376,
              "unclear_notional_pct": 0.471075631147381,
              "run_retail_pct": 0.4728682170542636,
              "run_mixed_pct": 0.13953488372093023,
              "run_instit_pct": 0.13178294573643412,
              "run_unclear_pct": 0.2558139534883721,
              "avg_trade_size": 2144.831447963801,
              "avg_run_notional": 3674.4786821705425,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6046511627906976,
              "na_confidence_pct": 0.3953488372093023,
              "avg_feature_coverage": 0.8381782945736433,
              "observable_run_pct": 0.9806201550387597,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23043478260869565,
              "mixed_pct": 0.1358695652173913,
              "instit_pct": 0.2717391304347826,
              "ambiguous_pct": 0.3282608695652174,
              "unobservable_pct": 0.03369565217391304,
              "unclear_pct": 0.3619565217391304,
              "retail_qty_pct": 0.08607760026084121,
              "mixed_qty_pct": 0.15422236713400717,
              "instit_qty_pct": 0.38727674528131,
              "ambiguous_qty_pct": 0.30569141035394704,
              "unobservable_qty_pct": 0.06673187696989458,
              "unclear_qty_pct": 0.3724232873238416,
              "retail_notional_pct": 0.08638877415396828,
              "mixed_notional_pct": 0.1552498618192478,
              "instit_notional_pct": 0.3870601140238362,
              "ambiguous_notional_pct": 0.305783528854336,
              "unobservable_notional_pct": 0.06551772114861175,
              "unclear_notional_pct": 0.3713012500029478,
              "run_retail_pct": 0.4473684210526316,
              "run_mixed_pct": 0.14114832535885166,
              "run_instit_pct": 0.1291866028708134,
              "run_unclear_pct": 0.2822966507177033,
              "avg_trade_size": 2996.036413043478,
              "avg_run_notional": 6594.147129186603,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.004784688995215311,
              "medium_confidence_pct": 0.15550239234449761,
              "low_confidence_pct": 0.41626794258373206,
              "na_confidence_pct": 0.423444976076555,
              "avg_feature_coverage": 0.8423444976076554,
              "observable_run_pct": 0.9904306220095693,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26863572433192684,
              "mixed_pct": 0.1631504922644163,
              "instit_pct": 0.27566807313642755,
              "ambiguous_pct": 0.29254571026722925,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.29254571026722925,
              "retail_qty_pct": 0.08998572860049191,
              "mixed_qty_pct": 0.2225177958712711,
              "instit_qty_pct": 0.35477332766525976,
              "ambiguous_qty_pct": 0.3327231478629772,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3327231478629772,
              "retail_notional_pct": 0.09047962558941515,
              "mixed_notional_pct": 0.2253985324115401,
              "instit_notional_pct": 0.3564659166363689,
              "ambiguous_notional_pct": 0.3276559253626758,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3276559253626758,
              "run_retail_pct": 0.5118343195266272,
              "run_mixed_pct": 0.15976331360946747,
              "run_instit_pct": 0.10059171597633136,
              "run_unclear_pct": 0.22781065088757396,
              "avg_trade_size": 4044.868635724332,
              "avg_run_notional": 8508.584615384616,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.005917159763313609,
              "medium_confidence_pct": 0.029585798816568046,
              "low_confidence_pct": 0.5769230769230769,
              "na_confidence_pct": 0.3875739644970414,
              "avg_feature_coverage": 0.8420118343195266,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2511961722488038,
              "mixed_pct": 0.06937799043062201,
              "instit_pct": 0.24162679425837322,
              "ambiguous_pct": 0.37320574162679426,
              "unobservable_pct": 0.0645933014354067,
              "unclear_pct": 0.43779904306220097,
              "retail_qty_pct": 0.05927985798282249,
              "mixed_qty_pct": 0.05353349819913189,
              "instit_qty_pct": 0.35125650313484447,
              "ambiguous_qty_pct": 0.43470185627943725,
              "unobservable_qty_pct": 0.10122828440376387,
              "unclear_qty_pct": 0.5359301406832011,
              "retail_notional_pct": 0.05922283871968644,
              "mixed_notional_pct": 0.053506070513717835,
              "instit_notional_pct": 0.35231960762110937,
              "ambiguous_notional_pct": 0.43685520017047547,
              "unobservable_notional_pct": 0.0980962829750109,
              "unclear_notional_pct": 0.5349514831454864,
              "run_retail_pct": 0.3944223107569721,
              "run_mixed_pct": 0.0796812749003984,
              "run_instit_pct": 0.11553784860557768,
              "run_unclear_pct": 0.41035856573705176,
              "avg_trade_size": 2146.543540669856,
              "avg_run_notional": 3574.721912350598,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0199203187250996,
              "medium_confidence_pct": 0.0398406374501992,
              "low_confidence_pct": 0.450199203187251,
              "na_confidence_pct": 0.4900398406374502,
              "avg_feature_coverage": 0.8215139442231075,
              "observable_run_pct": 0.9760956175298805,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2087912087912088,
              "mixed_pct": 0.14285714285714285,
              "instit_pct": 0.24175824175824176,
              "ambiguous_pct": 0.2967032967032967,
              "unobservable_pct": 0.10989010989010989,
              "unclear_pct": 0.4065934065934066,
              "retail_qty_pct": 0.03238664673642252,
              "mixed_qty_pct": 0.06851021425012456,
              "instit_qty_pct": 0.30019930244145493,
              "ambiguous_qty_pct": 0.5438465371200797,
              "unobservable_qty_pct": 0.055057299451918285,
              "unclear_qty_pct": 0.598903836571998,
              "retail_notional_pct": 0.03257190856378597,
              "mixed_notional_pct": 0.06857512171650859,
              "instit_notional_pct": 0.29941037832018985,
              "ambiguous_notional_pct": 0.5435651315843126,
              "unobservable_notional_pct": 0.055877459815202944,
              "unclear_notional_pct": 0.5994425913995156,
              "run_retail_pct": 0.2923076923076923,
              "run_mixed_pct": 0.15384615384615385,
              "run_instit_pct": 0.18461538461538463,
              "run_unclear_pct": 0.36923076923076925,
              "avg_trade_size": 2694.967032967033,
              "avg_run_notional": 3772.9538461538464,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47692307692307695,
              "na_confidence_pct": 0.5230769230769231,
              "avg_feature_coverage": 0.8346153846153846,
              "observable_run_pct": 0.9846153846153847,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 667,
          "n_runs": 463,
          "n_trade_days": 62,
          "first_trade_date": "2025-12-12",
          "last_trade_date": "2026-03-16",
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
            "retail_pct": 0.24587706146926536,
            "mixed_pct": 0.10194902548725637,
            "instit_pct": 0.22338830584707647,
            "ambiguous_pct": 0.4272863568215892,
            "unobservable_pct": 0.0014992503748125937,
            "unclear_pct": 0.4287856071964018,
            "retail_qty_pct": 0.07658355940231668,
            "mixed_qty_pct": 0.06789605132842441,
            "instit_qty_pct": 0.34160099900960256,
            "ambiguous_qty_pct": 0.5130043491366317,
            "unobservable_qty_pct": 0.0009150411230245877,
            "unclear_qty_pct": 0.5139193902596563,
            "retail_notional_pct": 0.07657516505365722,
            "mixed_notional_pct": 0.06557676923981491,
            "instit_notional_pct": 0.3406119065710808,
            "ambiguous_notional_pct": 0.516336183893214,
            "unobservable_notional_pct": 0.0008999752422330109,
            "unclear_notional_pct": 0.5172361591354471
          },
          "run_composition": {
            "retail_pct": 0.3304535637149028,
            "mixed_pct": 0.11231101511879049,
            "instit_pct": 0.14038876889848811,
            "ambiguous_pct": 0.4146868250539957,
            "unobservable_pct": 0.0021598272138228943,
            "unclear_pct": 0.4168466522678186,
            "retail_notional_pct": 0.07657516505365722,
            "mixed_notional_pct": 0.06557676923981491,
            "instit_notional_pct": 0.3406119065710808,
            "unclear_notional_pct": 0.5172361591354471
          },
          "counts": {
            "trades": {
              "retail": 164,
              "mixed": 68,
              "institutional": 149,
              "ambiguous": 285,
              "unobservable": 1,
              "unclear": 286
            },
            "runs": {
              "retail": 153,
              "mixed": 52,
              "institutional": 65,
              "ambiguous": 192,
              "unobservable": 1,
              "unclear": 193
            }
          },
          "confidence": {
            "high": 0.019438444924406047,
            "medium": 0.06479481641468683,
            "low": 0.38660907127429806,
            "na": 0.5291576673866091
          },
          "confidence_counts": {
            "high": 9,
            "medium": 30,
            "low": 179,
            "na": 245
          },
          "trade_confidence": {
            "high": 0.013493253373313344,
            "medium": 0.05997001499250375,
            "low": 0.39580209895052476,
            "na": 0.5307346326836582
          },
          "trade_confidence_counts": {
            "high": 9,
            "medium": 40,
            "low": 264,
            "na": 354
          },
          "observability": {
            "avg_feature_coverage": 0.8208423326133906,
            "observable_run_pct": 0.9978401727861771,
            "ambiguous_run_pct": 0.4146868250539957,
            "unobservable_run_pct": 0.0021598272138228943
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.4146868250539957,
          "dominance_gap": 0.08423326133909287,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 351,
              "MULTI_FILL_SINGLE_PRICE": 304,
              "WALK_BOOK": 12
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 432,
              "PERSISTENT_POSITIVE_IMPACT": 111,
              "MOMENTUM_REACTIVE": 101,
              "UNOBSERVABLE": 20,
              "SHORT_HORIZON_POSITIVE_IMPACT": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 463
            },
            "participant_confidence": {
              "NA": 245,
              "LOW": 179,
              "MEDIUM": 30,
              "HIGH": 9
            }
          },
          "trade_size": {
            "avg": 3327.5944527736133,
            "median": 1540.0
          },
          "run_size": {
            "avg": 4793.748380129589,
            "median": 2200.0,
            "avg_length": 1.0107991360691144
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-16T06:22:46.065200",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 561,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-16T03:54:11.261100",
              "price": 0.21,
              "size": 4900.0,
              "notional": 1029.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 560,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-13T07:03:08.239300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 559,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-12T01:40:31.414900",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 558,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-11T08:35:05.382000",
              "price": 0.22,
              "size": 5000.0,
              "notional": 1100.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 557,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-11T08:34:31.185000",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 556,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-03-11T08:34:03.641600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 555,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-11T06:45:55.766700",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 554,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-11T06:27:12.575100",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 553,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-11T05:26:56.368500",
              "price": 0.215,
              "size": 100.0,
              "notional": 21.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 552,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-03-10T07:46:25.970100",
              "price": 0.215,
              "size": 5500.0,
              "notional": 1182.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 551,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-03-10T03:10:50.514200",
              "price": 0.215,
              "size": 4500.0,
              "notional": 967.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 550,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-03-10T01:48:16.952200",
              "price": 0.205,
              "size": 100.0,
              "notional": 20.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 549,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-03-09T06:03:56.094900",
              "price": 0.205,
              "size": 17000.0,
              "notional": 3485.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 548,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-03-09T05:47:18.948300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 547,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 99800.0,
              "notional": 19960.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-03-09T05:39:02.070300",
              "price": 0.2,
              "size": 100.0,
              "notional": 20.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 546,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-03-09T05:30:51.692300",
              "price": 0.205,
              "size": 22000.0,
              "notional": 4510.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 545,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 5500.0,
              "notional": 1155.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 544,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-03-09T05:22:40.681200",
              "price": 0.21,
              "size": 14500.0,
              "notional": 3045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 543,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 50000.0,
              "notional": 10250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-03-09T05:22:39.595800",
              "price": 0.205,
              "size": 100000.0,
              "notional": 20500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 542,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-03-09T03:43:11.952900",
              "price": 0.21,
              "size": 100.0,
              "notional": 21.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 541,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-03-09T03:30:52.634400",
              "price": 0.21,
              "size": 26000.0,
              "notional": 5460.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 540,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 300.0,
              "notional": 63.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-03-09T03:14:03.184300",
              "price": 0.21,
              "size": 3700.0,
              "notional": 777.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 539,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-8",
              "timestamp": "2026-03-09T03:12:33.499500",
              "price": 0.21,
              "size": 2000.0,
              "notional": 420.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 538,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-03-09T03:11:39.140200",
              "price": 0.21,
              "size": 8800.0,
              "notional": 1848.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 537,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 6900.0,
              "notional": 1449.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-03-09T03:11:27.113500",
              "price": 0.21,
              "size": 12000.0,
              "notional": 2520.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 536,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "LGH",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.24587706146926536,
              "mixed_pct": 0.10194902548725637,
              "instit_pct": 0.22338830584707647,
              "ambiguous_pct": 0.4272863568215892,
              "unobservable_pct": 0.0014992503748125937,
              "unclear_pct": 0.4287856071964018,
              "retail_qty_pct": 0.07658355940231668,
              "mixed_qty_pct": 0.06789605132842441,
              "instit_qty_pct": 0.34160099900960256,
              "ambiguous_qty_pct": 0.5130043491366317,
              "unobservable_qty_pct": 0.0009150411230245877,
              "unclear_qty_pct": 0.5139193902596563,
              "retail_notional_pct": 0.07657516505365722,
              "mixed_notional_pct": 0.06557676923981491,
              "instit_notional_pct": 0.3406119065710808,
              "ambiguous_notional_pct": 0.516336183893214,
              "unobservable_notional_pct": 0.0008999752422330109,
              "unclear_notional_pct": 0.5172361591354471,
              "run_retail_pct": 0.3304535637149028,
              "run_mixed_pct": 0.11231101511879049,
              "run_instit_pct": 0.14038876889848811,
              "run_unclear_pct": 0.4168466522678186,
              "avg_trade_size": 3327.5944527736133,
              "avg_run_notional": 4793.748380129589,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.019438444924406047,
              "medium_confidence_pct": 0.06479481641468683,
              "low_confidence_pct": 0.38660907127429806,
              "na_confidence_pct": 0.5291576673866091,
              "avg_feature_coverage": 0.8208423326133906,
              "observable_run_pct": 0.9978401727861771,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "MV4",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22121212121212122,
              "mixed_pct": 0.10606060606060606,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.2878787878787879,
              "unobservable_pct": 0.021212121212121213,
              "unclear_pct": 0.30909090909090914,
              "retail_qty_pct": 0.03938793879387939,
              "mixed_qty_pct": 0.09612961296129613,
              "instit_qty_pct": 0.5721332133213322,
              "ambiguous_qty_pct": 0.25670567056705673,
              "unobservable_qty_pct": 0.03564356435643564,
              "unclear_qty_pct": 0.29234923492349235,
              "retail_notional_pct": 0.03904868079638408,
              "mixed_notional_pct": 0.09779933755775319,
              "instit_notional_pct": 0.572397739875782,
              "ambiguous_notional_pct": 0.2557623420672743,
              "unobservable_notional_pct": 0.034991899702806466,
              "unclear_notional_pct": 0.29075424177008075,
              "run_retail_pct": 0.32547169811320753,
              "run_mixed_pct": 0.12735849056603774,
              "run_instit_pct": 0.24056603773584906,
              "run_unclear_pct": 0.30660377358490565,
              "avg_trade_size": 2627.1015151515153,
              "avg_run_notional": 4089.3561320754716,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5660377358490566,
              "na_confidence_pct": 0.4339622641509434,
              "avg_feature_coverage": 0.8325471698113205,
              "observable_run_pct": 0.9952830188679245,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Y03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2182410423452769,
              "mixed_pct": 0.1791530944625407,
              "instit_pct": 0.2964169381107492,
              "ambiguous_pct": 0.2671009771986971,
              "unobservable_pct": 0.03908794788273615,
              "unclear_pct": 0.30618892508143325,
              "retail_qty_pct": 0.03440957036274762,
              "mixed_qty_pct": 0.08277591973244147,
              "instit_qty_pct": 0.5506817597118601,
              "ambiguous_qty_pct": 0.31695394906097246,
              "unobservable_qty_pct": 0.015178801131978389,
              "unclear_qty_pct": 0.33213275019295085,
              "retail_notional_pct": 0.034362644067724914,
              "mixed_notional_pct": 0.08265434638010509,
              "instit_notional_pct": 0.5504701004283831,
              "ambiguous_notional_pct": 0.31706002967274327,
              "unobservable_notional_pct": 0.015452879451043676,
              "unclear_notional_pct": 0.33251290912378695,
              "run_retail_pct": 0.3160377358490566,
              "run_mixed_pct": 0.18396226415094338,
              "run_instit_pct": 0.18396226415094338,
              "run_unclear_pct": 0.3160377358490566,
              "avg_trade_size": 3080.2899022801303,
              "avg_run_notional": 4460.608490566037,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8341981132075469,
              "observable_run_pct": 0.9905660377358491,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "OTS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.125,
              "mixed_pct": 0.0625,
              "instit_pct": 0.4375,
              "ambiguous_pct": 0.3375,
              "unobservable_pct": 0.0375,
              "unclear_pct": 0.375,
              "retail_qty_pct": 0.05119900771775083,
              "mixed_qty_pct": 0.025840683572216097,
              "instit_qty_pct": 0.5157111356119074,
              "ambiguous_qty_pct": 0.40166758544652703,
              "unobservable_qty_pct": 0.005581587651598677,
              "unclear_qty_pct": 0.4072491730981257,
              "retail_notional_pct": 0.05135599507858856,
              "mixed_notional_pct": 0.0258811585812767,
              "instit_notional_pct": 0.5183051694596815,
              "ambiguous_notional_pct": 0.39861814533745404,
              "unobservable_notional_pct": 0.005839531542999124,
              "unclear_notional_pct": 0.40445767688045314,
              "run_retail_pct": 0.14925373134328357,
              "run_mixed_pct": 0.07462686567164178,
              "run_instit_pct": 0.373134328358209,
              "run_unclear_pct": 0.40298507462686567,
              "avg_trade_size": 2085.78375,
              "avg_run_notional": 2490.4880597014926,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5223880597014925,
              "na_confidence_pct": 0.47761194029850745,
              "avg_feature_coverage": 0.7940298507462689,
              "observable_run_pct": 0.9552238805970149,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5JS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28888888888888886,
              "mixed_pct": 0.1388888888888889,
              "instit_pct": 0.2638888888888889,
              "ambiguous_pct": 0.29074074074074074,
              "unobservable_pct": 0.017592592592592594,
              "unclear_pct": 0.30833333333333335,
              "retail_qty_pct": 0.05868587879905263,
              "mixed_qty_pct": 0.09065252230148488,
              "instit_qty_pct": 0.3947611011047922,
              "ambiguous_qty_pct": 0.4378749414984896,
              "unobservable_qty_pct": 0.018025556296180738,
              "unclear_qty_pct": 0.45590049779467035,
              "retail_notional_pct": 0.05918494015340018,
              "mixed_notional_pct": 0.09068891251138612,
              "instit_notional_pct": 0.3955561725794499,
              "ambiguous_notional_pct": 0.43711020879571666,
              "unobservable_notional_pct": 0.017459765960047127,
              "unclear_notional_pct": 0.4545699747557638,
              "run_retail_pct": 0.4429223744292237,
              "run_mixed_pct": 0.1385083713850837,
              "run_instit_pct": 0.1324200913242009,
              "run_unclear_pct": 0.2861491628614916,
              "avg_trade_size": 2507.723148148148,
              "avg_run_notional": 4122.284627092847,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0015220700152207,
              "medium_confidence_pct": 0.0395738203957382,
              "low_confidence_pct": 0.5342465753424658,
              "na_confidence_pct": 0.4246575342465753,
              "avg_feature_coverage": 0.8335616438356164,
              "observable_run_pct": 0.9908675799086758,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "Q01",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2502034174125305,
              "mixed_pct": 0.17209113100081366,
              "instit_pct": 0.24654190398698128,
              "ambiguous_pct": 0.30105777054515864,
              "unobservable_pct": 0.030105777054515868,
              "unclear_pct": 0.33116354759967453,
              "retail_qty_pct": 0.10112501434967283,
              "mixed_qty_pct": 0.1708185053380783,
              "instit_qty_pct": 0.35850074618298705,
              "ambiguous_qty_pct": 0.31872345310526917,
              "unobservable_qty_pct": 0.050832281023992655,
              "unclear_qty_pct": 0.36955573412926185,
              "retail_notional_pct": 0.10107688609060507,
              "mixed_notional_pct": 0.17104996244324625,
              "instit_notional_pct": 0.3605729438275356,
              "ambiguous_notional_pct": 0.31835622222115906,
              "unobservable_notional_pct": 0.04894398541745408,
              "unclear_notional_pct": 0.36730020763861315,
              "run_retail_pct": 0.4691136974037601,
              "run_mixed_pct": 0.170993733213966,
              "run_instit_pct": 0.11727842435094002,
              "run_unclear_pct": 0.24261414503133394,
              "avg_trade_size": 3401.4157851912123,
              "avg_run_notional": 7484.941808415399,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.025962399283795883,
              "medium_confidence_pct": 0.12623097582811102,
              "low_confidence_pct": 0.4341987466427932,
              "na_confidence_pct": 0.41360787824529993,
              "avg_feature_coverage": 0.8486123545210384,
              "observable_run_pct": 0.9937332139659804,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2777777777777778,
              "mixed_pct": 0.07085346215780998,
              "instit_pct": 0.24798711755233493,
              "ambiguous_pct": 0.3695652173913043,
              "unobservable_pct": 0.033816425120772944,
              "unclear_pct": 0.40338164251207725,
              "retail_qty_pct": 0.05564493736014243,
              "mixed_qty_pct": 0.042606536759061134,
              "instit_qty_pct": 0.35441745749146564,
              "ambiguous_qty_pct": 0.4970762621890466,
              "unobservable_qty_pct": 0.050254806200284205,
              "unclear_qty_pct": 0.5473310683893308,
              "retail_notional_pct": 0.055815961333809,
              "mixed_notional_pct": 0.04279668486608065,
              "instit_notional_pct": 0.35232792157311066,
              "ambiguous_notional_pct": 0.5001929522512296,
              "unobservable_notional_pct": 0.04886647997577007,
              "unclear_notional_pct": 0.5490594322269997,
              "run_retail_pct": 0.44148936170212766,
              "run_mixed_pct": 0.07712765957446809,
              "run_instit_pct": 0.10505319148936171,
              "run_unclear_pct": 0.37632978723404253,
              "avg_trade_size": 1811.4165861513686,
              "avg_run_notional": 2991.727925531915,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.1077127659574468,
              "medium_confidence_pct": 0.03723404255319149,
              "low_confidence_pct": 0.4015957446808511,
              "na_confidence_pct": 0.45345744680851063,
              "avg_feature_coverage": 0.8271276595744681,
              "observable_run_pct": 0.988031914893617,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42W",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36860068259385664,
              "mixed_pct": 0.21084565794463406,
              "instit_pct": 0.19908987485779295,
              "ambiguous_pct": 0.22146378460371635,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22146378460371635,
              "retail_qty_pct": 0.09480405237719641,
              "mixed_qty_pct": 0.28257664551036804,
              "instit_qty_pct": 0.3067540438999339,
              "ambiguous_qty_pct": 0.3158652582125016,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3158652582125016,
              "retail_notional_pct": 0.09463979430749334,
              "mixed_notional_pct": 0.2861022761676994,
              "instit_notional_pct": 0.3046010308220625,
              "ambiguous_notional_pct": 0.3146568987027447,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3146568987027447,
              "run_retail_pct": 0.6109625668449198,
              "run_mixed_pct": 0.17446524064171123,
              "run_instit_pct": 0.05748663101604278,
              "run_unclear_pct": 0.1570855614973262,
              "avg_trade_size": 4152.953052711414,
              "avg_run_notional": 7320.41256684492,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.16510695187165775,
              "medium_confidence_pct": 0.1270053475935829,
              "low_confidence_pct": 0.37633689839572193,
              "na_confidence_pct": 0.3315508021390374,
              "avg_feature_coverage": 0.8468917112299464,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BQD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.16019417475728157,
              "mixed_pct": 0.12135922330097088,
              "instit_pct": 0.4368932038834951,
              "ambiguous_pct": 0.27184466019417475,
              "unobservable_pct": 0.009708737864077669,
              "unclear_pct": 0.2815533980582524,
              "retail_qty_pct": 0.007697903967910653,
              "mixed_qty_pct": 0.027311337449368832,
              "instit_qty_pct": 0.15969955562546698,
              "ambiguous_qty_pct": 0.057522906917299145,
              "unobservable_qty_pct": 0.7477682960399544,
              "unclear_qty_pct": 0.8052912029572535,
              "retail_notional_pct": 0.007473219140634522,
              "mixed_notional_pct": 0.02648759197875142,
              "instit_notional_pct": 0.15334563613651186,
              "ambiguous_notional_pct": 0.055919424350197575,
              "unobservable_notional_pct": 0.7567741283939046,
              "unclear_notional_pct": 0.8126935527441022,
              "run_retail_pct": 0.2558139534883721,
              "run_mixed_pct": 0.15503875968992248,
              "run_instit_pct": 0.3023255813953488,
              "run_unclear_pct": 0.28682170542635654,
              "avg_trade_size": 19515.64077669903,
              "avg_run_notional": 31164.511627906977,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5581395348837209,
              "na_confidence_pct": 0.4418604651162791,
              "avg_feature_coverage": 0.8267441860465117,
              "observable_run_pct": 0.9844961240310077,
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
      "n_trades": 667,
      "n_runs": 463,
      "n_trade_days": 62,
      "first_trade_date": "2025-12-12",
      "last_trade_date": "2026-03-16",
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
        "retail_pct": 0.24587706146926536,
        "mixed_pct": 0.10194902548725637,
        "instit_pct": 0.22338830584707647,
        "ambiguous_pct": 0.4272863568215892,
        "unobservable_pct": 0.0014992503748125937,
        "unclear_pct": 0.4287856071964018,
        "retail_qty_pct": 0.07658355940231668,
        "mixed_qty_pct": 0.06789605132842441,
        "instit_qty_pct": 0.34160099900960256,
        "ambiguous_qty_pct": 0.5130043491366317,
        "unobservable_qty_pct": 0.0009150411230245877,
        "unclear_qty_pct": 0.5139193902596563,
        "retail_notional_pct": 0.07657516505365722,
        "mixed_notional_pct": 0.06557676923981491,
        "instit_notional_pct": 0.3406119065710808,
        "ambiguous_notional_pct": 0.516336183893214,
        "unobservable_notional_pct": 0.0008999752422330109,
        "unclear_notional_pct": 0.5172361591354471
      },
      "run_composition": {
        "retail_pct": 0.3304535637149028,
        "mixed_pct": 0.11231101511879049,
        "instit_pct": 0.14038876889848811,
        "ambiguous_pct": 0.4146868250539957,
        "unobservable_pct": 0.0021598272138228943,
        "unclear_pct": 0.4168466522678186
      },
      "trade_size": {
        "avg": 3327.5944527736133,
        "median": 1540.0
      },
      "run_size": {
        "avg": 4793.748380129589,
        "median": 2200.0,
        "avg_length": 1.0107991360691144
      },
      "confidence": {
        "high": 0.019438444924406047,
        "medium": 0.06479481641468683,
        "low": 0.38660907127429806,
        "na": 0.5291576673866091
      },
      "confidence_counts": {
        "high": 9,
        "medium": 30,
        "low": 179,
        "na": 245
      },
      "trade_confidence": {
        "high": 0.013493253373313344,
        "medium": 0.05997001499250375,
        "low": 0.39580209895052476,
        "na": 0.5307346326836582
      },
      "trade_confidence_counts": {
        "high": 9,
        "medium": 40,
        "low": 264,
        "na": 354
      },
      "counts": {
        "trades": {
          "retail": 164,
          "mixed": 68,
          "institutional": 149,
          "ambiguous": 285,
          "unobservable": 1,
          "unclear": 286
        },
        "runs": {
          "retail": 153,
          "mixed": 52,
          "institutional": 65,
          "ambiguous": 192,
          "unobservable": 1,
          "unclear": 193
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8208423326133906,
        "observable_run_pct": 0.9978401727861771,
        "ambiguous_run_pct": 0.4146868250539957,
        "unobservable_run_pct": 0.0021598272138228943
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.4146868250539957,
      "dominance_gap": 0.08423326133909287,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 438,
            "n_runs": 233,
            "retail_pct": 0.2100456621004566,
            "mixed_pct": 0.13926940639269406,
            "instit_pct": 0.273972602739726,
            "ambiguous_pct": 0.3767123287671233,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3767123287671233,
            "avg_trade_size": 3539.1803652968038,
            "avg_run_notional": 6653.051502145922,
            "retail_qty_pct": 0.08395658165714374,
            "mixed_qty_pct": 0.13804369706260355,
            "instit_qty_pct": 0.3903005527941655,
            "ambiguous_qty_pct": 0.38769916848608726,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.38769916848608726,
            "retail_notional_pct": 0.08384000113536594,
            "mixed_notional_pct": 0.13818629161745136,
            "instit_notional_pct": 0.3920570185935525,
            "ambiguous_notional_pct": 0.38591668865363016,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38591668865363016,
            "run_retail_pct": 0.3648068669527897,
            "run_mixed_pct": 0.15450643776824036,
            "run_instit_pct": 0.13304721030042918,
            "run_ambiguous_pct": 0.34763948497854075,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.34763948497854075,
            "avg_feature_coverage": 0.8326180257510727,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.15879828326180256,
            "low_confidence_pct": 0.33905579399141633,
            "na_confidence_pct": 0.5021459227467812,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 336,
            "n_runs": 232,
            "retail_pct": 0.26785714285714285,
            "mixed_pct": 0.06547619047619048,
            "instit_pct": 0.22023809523809523,
            "ambiguous_pct": 0.44345238095238093,
            "unobservable_pct": 0.002976190476190476,
            "unclear_pct": 0.4464285714285714,
            "avg_trade_size": 4005.6369047619046,
            "avg_run_notional": 5801.267241379311,
            "retail_qty_pct": 0.07190685216873745,
            "mixed_qty_pct": 0.02981548991890484,
            "instit_qty_pct": 0.3127743471467897,
            "ambiguous_qty_pct": 0.583922327207797,
            "unobservable_qty_pct": 0.001580983557770999,
            "unclear_qty_pct": 0.585503310765568,
            "retail_notional_pct": 0.07179874492344865,
            "mixed_notional_pct": 0.028642671711145158,
            "instit_notional_pct": 0.3149144732051707,
            "ambiguous_notional_pct": 0.5831599665352546,
            "unobservable_notional_pct": 0.0014841436249808677,
            "unclear_notional_pct": 0.5846441101602354,
            "run_retail_pct": 0.35344827586206895,
            "run_mixed_pct": 0.0603448275862069,
            "run_instit_pct": 0.1336206896551724,
            "run_ambiguous_pct": 0.4482758620689655,
            "run_unobservable_pct": 0.004310344827586207,
            "run_unclear_pct": 0.4525862068965517,
            "avg_feature_coverage": 0.8183189655172413,
            "high_confidence_pct": 0.03879310344827586,
            "medium_confidence_pct": 0.12931034482758622,
            "low_confidence_pct": 0.31896551724137934,
            "na_confidence_pct": 0.5129310344827587,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 53,
            "n_runs": 46,
            "retail_pct": 0.2830188679245283,
            "mixed_pct": 0.18867924528301888,
            "instit_pct": 0.2641509433962264,
            "ambiguous_pct": 0.2641509433962264,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2641509433962264,
            "avg_trade_size": 1562.9622641509434,
            "avg_run_notional": 1800.804347826087,
            "retail_qty_pct": 0.06229143492769744,
            "mixed_qty_pct": 0.15628476084538376,
            "instit_qty_pct": 0.6270856507230256,
            "ambiguous_qty_pct": 0.1543381535038932,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1543381535038932,
            "retail_notional_pct": 0.062073711022852106,
            "mixed_notional_pct": 0.1565966898849548,
            "instit_notional_pct": 0.6262298248367275,
            "ambiguous_notional_pct": 0.15509977425546556,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15509977425546556,
            "run_retail_pct": 0.30434782608695654,
            "run_mixed_pct": 0.21739130434782608,
            "run_instit_pct": 0.1956521739130435,
            "run_ambiguous_pct": 0.2826086956521739,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.2826086956521739,
            "avg_feature_coverage": 0.8206521739130437,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 60,
            "n_runs": 51,
            "retail_pct": 0.2,
            "mixed_pct": 0.11666666666666667,
            "instit_pct": 0.18333333333333332,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "avg_trade_size": 2909.241666666667,
            "avg_run_notional": 3422.6372549019607,
            "retail_qty_pct": 0.03600535214694076,
            "mixed_qty_pct": 0.048290962170052305,
            "instit_qty_pct": 0.36820338158374893,
            "ambiguous_qty_pct": 0.547500304099258,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.547500304099258,
            "retail_notional_pct": 0.036724919724212206,
            "mixed_notional_pct": 0.0500617285718787,
            "instit_notional_pct": 0.36629820485865444,
            "ambiguous_notional_pct": 0.5469151468452547,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5469151468452547,
            "run_retail_pct": 0.23529411764705882,
            "run_mixed_pct": 0.13725490196078433,
            "run_instit_pct": 0.1568627450980392,
            "run_ambiguous_pct": 0.47058823529411764,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.47058823529411764,
            "avg_feature_coverage": 0.8235294117647061,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.39215686274509803,
            "na_confidence_pct": 0.6078431372549019,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "LGH",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.24587706146926536,
          "mixed_pct": 0.10194902548725637,
          "instit_pct": 0.22338830584707647,
          "ambiguous_pct": 0.4272863568215892,
          "unobservable_pct": 0.0014992503748125937,
          "unclear_pct": 0.4287856071964018,
          "retail_qty_pct": 0.07658355940231668,
          "mixed_qty_pct": 0.06789605132842441,
          "instit_qty_pct": 0.34160099900960256,
          "ambiguous_qty_pct": 0.5130043491366317,
          "unobservable_qty_pct": 0.0009150411230245877,
          "unclear_qty_pct": 0.5139193902596563,
          "retail_notional_pct": 0.07657516505365722,
          "mixed_notional_pct": 0.06557676923981491,
          "instit_notional_pct": 0.3406119065710808,
          "ambiguous_notional_pct": 0.516336183893214,
          "unobservable_notional_pct": 0.0008999752422330109,
          "unclear_notional_pct": 0.5172361591354471,
          "run_retail_pct": 0.3304535637149028,
          "run_mixed_pct": 0.11231101511879049,
          "run_instit_pct": 0.14038876889848811,
          "run_unclear_pct": 0.4168466522678186,
          "avg_trade_size": 3327.5944527736133,
          "avg_run_notional": 4793.748380129589,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.019438444924406047,
          "medium_confidence_pct": 0.06479481641468683,
          "low_confidence_pct": 0.38660907127429806,
          "na_confidence_pct": 0.5291576673866091,
          "avg_feature_coverage": 0.8208423326133906,
          "observable_run_pct": 0.9978401727861771,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "MV4",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.22121212121212122,
          "mixed_pct": 0.10606060606060606,
          "instit_pct": 0.36363636363636365,
          "ambiguous_pct": 0.2878787878787879,
          "unobservable_pct": 0.021212121212121213,
          "unclear_pct": 0.30909090909090914,
          "retail_qty_pct": 0.03938793879387939,
          "mixed_qty_pct": 0.09612961296129613,
          "instit_qty_pct": 0.5721332133213322,
          "ambiguous_qty_pct": 0.25670567056705673,
          "unobservable_qty_pct": 0.03564356435643564,
          "unclear_qty_pct": 0.29234923492349235,
          "retail_notional_pct": 0.03904868079638408,
          "mixed_notional_pct": 0.09779933755775319,
          "instit_notional_pct": 0.572397739875782,
          "ambiguous_notional_pct": 0.2557623420672743,
          "unobservable_notional_pct": 0.034991899702806466,
          "unclear_notional_pct": 0.29075424177008075,
          "run_retail_pct": 0.32547169811320753,
          "run_mixed_pct": 0.12735849056603774,
          "run_instit_pct": 0.24056603773584906,
          "run_unclear_pct": 0.30660377358490565,
          "avg_trade_size": 2627.1015151515153,
          "avg_run_notional": 4089.3561320754716,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5660377358490566,
          "na_confidence_pct": 0.4339622641509434,
          "avg_feature_coverage": 0.8325471698113205,
          "observable_run_pct": 0.9952830188679245,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "Y03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2182410423452769,
          "mixed_pct": 0.1791530944625407,
          "instit_pct": 0.2964169381107492,
          "ambiguous_pct": 0.2671009771986971,
          "unobservable_pct": 0.03908794788273615,
          "unclear_pct": 0.30618892508143325,
          "retail_qty_pct": 0.03440957036274762,
          "mixed_qty_pct": 0.08277591973244147,
          "instit_qty_pct": 0.5506817597118601,
          "ambiguous_qty_pct": 0.31695394906097246,
          "unobservable_qty_pct": 0.015178801131978389,
          "unclear_qty_pct": 0.33213275019295085,
          "retail_notional_pct": 0.034362644067724914,
          "mixed_notional_pct": 0.08265434638010509,
          "instit_notional_pct": 0.5504701004283831,
          "ambiguous_notional_pct": 0.31706002967274327,
          "unobservable_notional_pct": 0.015452879451043676,
          "unclear_notional_pct": 0.33251290912378695,
          "run_retail_pct": 0.3160377358490566,
          "run_mixed_pct": 0.18396226415094338,
          "run_instit_pct": 0.18396226415094338,
          "run_unclear_pct": 0.3160377358490566,
          "avg_trade_size": 3080.2899022801303,
          "avg_run_notional": 4460.608490566037,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8341981132075469,
          "observable_run_pct": 0.9905660377358491,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "OTS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.125,
          "mixed_pct": 0.0625,
          "instit_pct": 0.4375,
          "ambiguous_pct": 0.3375,
          "unobservable_pct": 0.0375,
          "unclear_pct": 0.375,
          "retail_qty_pct": 0.05119900771775083,
          "mixed_qty_pct": 0.025840683572216097,
          "instit_qty_pct": 0.5157111356119074,
          "ambiguous_qty_pct": 0.40166758544652703,
          "unobservable_qty_pct": 0.005581587651598677,
          "unclear_qty_pct": 0.4072491730981257,
          "retail_notional_pct": 0.05135599507858856,
          "mixed_notional_pct": 0.0258811585812767,
          "instit_notional_pct": 0.5183051694596815,
          "ambiguous_notional_pct": 0.39861814533745404,
          "unobservable_notional_pct": 0.005839531542999124,
          "unclear_notional_pct": 0.40445767688045314,
          "run_retail_pct": 0.14925373134328357,
          "run_mixed_pct": 0.07462686567164178,
          "run_instit_pct": 0.373134328358209,
          "run_unclear_pct": 0.40298507462686567,
          "avg_trade_size": 2085.78375,
          "avg_run_notional": 2490.4880597014926,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5223880597014925,
          "na_confidence_pct": 0.47761194029850745,
          "avg_feature_coverage": 0.7940298507462689,
          "observable_run_pct": 0.9552238805970149,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "5JS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.28888888888888886,
          "mixed_pct": 0.1388888888888889,
          "instit_pct": 0.2638888888888889,
          "ambiguous_pct": 0.29074074074074074,
          "unobservable_pct": 0.017592592592592594,
          "unclear_pct": 0.30833333333333335,
          "retail_qty_pct": 0.05868587879905263,
          "mixed_qty_pct": 0.09065252230148488,
          "instit_qty_pct": 0.3947611011047922,
          "ambiguous_qty_pct": 0.4378749414984896,
          "unobservable_qty_pct": 0.018025556296180738,
          "unclear_qty_pct": 0.45590049779467035,
          "retail_notional_pct": 0.05918494015340018,
          "mixed_notional_pct": 0.09068891251138612,
          "instit_notional_pct": 0.3955561725794499,
          "ambiguous_notional_pct": 0.43711020879571666,
          "unobservable_notional_pct": 0.017459765960047127,
          "unclear_notional_pct": 0.4545699747557638,
          "run_retail_pct": 0.4429223744292237,
          "run_mixed_pct": 0.1385083713850837,
          "run_instit_pct": 0.1324200913242009,
          "run_unclear_pct": 0.2861491628614916,
          "avg_trade_size": 2507.723148148148,
          "avg_run_notional": 4122.284627092847,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0015220700152207,
          "medium_confidence_pct": 0.0395738203957382,
          "low_confidence_pct": 0.5342465753424658,
          "na_confidence_pct": 0.4246575342465753,
          "avg_feature_coverage": 0.8335616438356164,
          "observable_run_pct": 0.9908675799086758,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "Q01",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2502034174125305,
          "mixed_pct": 0.17209113100081366,
          "instit_pct": 0.24654190398698128,
          "ambiguous_pct": 0.30105777054515864,
          "unobservable_pct": 0.030105777054515868,
          "unclear_pct": 0.33116354759967453,
          "retail_qty_pct": 0.10112501434967283,
          "mixed_qty_pct": 0.1708185053380783,
          "instit_qty_pct": 0.35850074618298705,
          "ambiguous_qty_pct": 0.31872345310526917,
          "unobservable_qty_pct": 0.050832281023992655,
          "unclear_qty_pct": 0.36955573412926185,
          "retail_notional_pct": 0.10107688609060507,
          "mixed_notional_pct": 0.17104996244324625,
          "instit_notional_pct": 0.3605729438275356,
          "ambiguous_notional_pct": 0.31835622222115906,
          "unobservable_notional_pct": 0.04894398541745408,
          "unclear_notional_pct": 0.36730020763861315,
          "run_retail_pct": 0.4691136974037601,
          "run_mixed_pct": 0.170993733213966,
          "run_instit_pct": 0.11727842435094002,
          "run_unclear_pct": 0.24261414503133394,
          "avg_trade_size": 3401.4157851912123,
          "avg_run_notional": 7484.941808415399,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.025962399283795883,
          "medium_confidence_pct": 0.12623097582811102,
          "low_confidence_pct": 0.4341987466427932,
          "na_confidence_pct": 0.41360787824529993,
          "avg_feature_coverage": 0.8486123545210384,
          "observable_run_pct": 0.9937332139659804,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2777777777777778,
          "mixed_pct": 0.07085346215780998,
          "instit_pct": 0.24798711755233493,
          "ambiguous_pct": 0.3695652173913043,
          "unobservable_pct": 0.033816425120772944,
          "unclear_pct": 0.40338164251207725,
          "retail_qty_pct": 0.05564493736014243,
          "mixed_qty_pct": 0.042606536759061134,
          "instit_qty_pct": 0.35441745749146564,
          "ambiguous_qty_pct": 0.4970762621890466,
          "unobservable_qty_pct": 0.050254806200284205,
          "unclear_qty_pct": 0.5473310683893308,
          "retail_notional_pct": 0.055815961333809,
          "mixed_notional_pct": 0.04279668486608065,
          "instit_notional_pct": 0.35232792157311066,
          "ambiguous_notional_pct": 0.5001929522512296,
          "unobservable_notional_pct": 0.04886647997577007,
          "unclear_notional_pct": 0.5490594322269997,
          "run_retail_pct": 0.44148936170212766,
          "run_mixed_pct": 0.07712765957446809,
          "run_instit_pct": 0.10505319148936171,
          "run_unclear_pct": 0.37632978723404253,
          "avg_trade_size": 1811.4165861513686,
          "avg_run_notional": 2991.727925531915,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.1077127659574468,
          "medium_confidence_pct": 0.03723404255319149,
          "low_confidence_pct": 0.4015957446808511,
          "na_confidence_pct": 0.45345744680851063,
          "avg_feature_coverage": 0.8271276595744681,
          "observable_run_pct": 0.988031914893617,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "42W",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.36860068259385664,
          "mixed_pct": 0.21084565794463406,
          "instit_pct": 0.19908987485779295,
          "ambiguous_pct": 0.22146378460371635,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.22146378460371635,
          "retail_qty_pct": 0.09480405237719641,
          "mixed_qty_pct": 0.28257664551036804,
          "instit_qty_pct": 0.3067540438999339,
          "ambiguous_qty_pct": 0.3158652582125016,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3158652582125016,
          "retail_notional_pct": 0.09463979430749334,
          "mixed_notional_pct": 0.2861022761676994,
          "instit_notional_pct": 0.3046010308220625,
          "ambiguous_notional_pct": 0.3146568987027447,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3146568987027447,
          "run_retail_pct": 0.6109625668449198,
          "run_mixed_pct": 0.17446524064171123,
          "run_instit_pct": 0.05748663101604278,
          "run_unclear_pct": 0.1570855614973262,
          "avg_trade_size": 4152.953052711414,
          "avg_run_notional": 7320.41256684492,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.16510695187165775,
          "medium_confidence_pct": 0.1270053475935829,
          "low_confidence_pct": 0.37633689839572193,
          "na_confidence_pct": 0.3315508021390374,
          "avg_feature_coverage": 0.8468917112299464,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BQD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.16019417475728157,
          "mixed_pct": 0.12135922330097088,
          "instit_pct": 0.4368932038834951,
          "ambiguous_pct": 0.27184466019417475,
          "unobservable_pct": 0.009708737864077669,
          "unclear_pct": 0.2815533980582524,
          "retail_qty_pct": 0.007697903967910653,
          "mixed_qty_pct": 0.027311337449368832,
          "instit_qty_pct": 0.15969955562546698,
          "ambiguous_qty_pct": 0.057522906917299145,
          "unobservable_qty_pct": 0.7477682960399544,
          "unclear_qty_pct": 0.8052912029572535,
          "retail_notional_pct": 0.007473219140634522,
          "mixed_notional_pct": 0.02648759197875142,
          "instit_notional_pct": 0.15334563613651186,
          "ambiguous_notional_pct": 0.055919424350197575,
          "unobservable_notional_pct": 0.7567741283939046,
          "unclear_notional_pct": 0.8126935527441022,
          "run_retail_pct": 0.2558139534883721,
          "run_mixed_pct": 0.15503875968992248,
          "run_instit_pct": 0.3023255813953488,
          "run_unclear_pct": 0.28682170542635654,
          "avg_trade_size": 19515.64077669903,
          "avg_run_notional": 31164.511627906977,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5581395348837209,
          "na_confidence_pct": 0.4418604651162791,
          "avg_feature_coverage": 0.8267441860465117,
          "observable_run_pct": 0.9844961240310077,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.02,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.98,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.98,
            "retail_notional_pct": 0.020466444550214184,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.9795335554497858,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.9795335554497858,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 525.25,
            "avg_run_notional": 525.25,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.775,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
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
            "avg_trade_size": 2016.0,
            "avg_run_notional": 2016.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
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
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23076923076923078,
            "mixed_pct": 0.17307692307692307,
            "instit_pct": 0.38461538461538464,
            "ambiguous_pct": 0.21153846153846154,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21153846153846154,
            "retail_qty_pct": 0.08607276665131505,
            "mixed_qty_pct": 0.16181431185352071,
            "instit_qty_pct": 0.44192733292672304,
            "ambiguous_qty_pct": 0.31018558856844125,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.31018558856844125,
            "retail_notional_pct": 0.08588423173614967,
            "mixed_notional_pct": 0.1621928472954343,
            "instit_notional_pct": 0.4429611423366999,
            "ambiguous_notional_pct": 0.3089617786317162,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3089617786317162,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.15,
            "run_instit_pct": 0.15,
            "run_unclear_pct": 0.2,
            "avg_trade_size": 4932.4,
            "avg_run_notional": 12824.240000000002,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.65,
            "na_confidence_pct": 0.35,
            "avg_feature_coverage": 0.8425,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.09375,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.53125,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.53125,
            "retail_qty_pct": 0.019422360873503068,
            "mixed_qty_pct": 0.05383918687732716,
            "instit_qty_pct": 0.40857401630270707,
            "ambiguous_qty_pct": 0.5181644359464627,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5181644359464627,
            "retail_notional_pct": 0.019517072766160746,
            "mixed_notional_pct": 0.05319418599625498,
            "instit_notional_pct": 0.41131051045999684,
            "ambiguous_notional_pct": 0.5159782307775873,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5159782307775873,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.125,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 2675.2218749999997,
            "avg_run_notional": 5350.44375,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.375,
            "na_confidence_pct": 0.625,
            "avg_feature_coverage": 0.8406250000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.0,
            "instit_pct": 0.25,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.08875739644970414,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.3698224852071006,
            "ambiguous_qty_pct": 0.5414201183431953,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5414201183431953,
            "retail_notional_pct": 0.08876800765138382,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.37173471217646004,
            "ambiguous_notional_pct": 0.5394972801721561,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5394972801721561,
            "run_retail_pct": 0.4444444444444444,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1111111111111111,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 4182.25,
            "avg_run_notional": 7435.111111111111,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8166666666666667,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.375,
            "mixed_pct": 0.0,
            "instit_pct": 0.125,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.07777777777777778,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.31746031746031744,
            "ambiguous_qty_pct": 0.6047619047619047,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6047619047619047,
            "retail_notional_pct": 0.07784397163120567,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.3177304964539007,
            "ambiguous_notional_pct": 0.6044255319148936,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6044255319148936,
            "run_retail_pct": 0.42857142857142855,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.14285714285714285,
            "run_unclear_pct": 0.42857142857142855,
            "avg_trade_size": 8812.5,
            "avg_run_notional": 10071.42857142857,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5714285714285714,
            "na_confidence_pct": 0.42857142857142855,
            "avg_feature_coverage": 0.7642857142857143,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2564102564102564,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.23076923076923078,
            "ambiguous_pct": 0.4358974358974359,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4358974358974359,
            "retail_qty_pct": 0.06447368421052632,
            "mixed_qty_pct": 0.1401315789473684,
            "instit_qty_pct": 0.14868421052631578,
            "ambiguous_qty_pct": 0.6467105263157895,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6467105263157895,
            "retail_notional_pct": 0.06311200261994433,
            "mixed_notional_pct": 0.14299983625347962,
            "instit_notional_pct": 0.15014327820533813,
            "ambiguous_notional_pct": 0.6437448829212379,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.6437448829212379,
            "run_retail_pct": 0.2916666666666667,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.125,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 3131.7948717948716,
            "avg_run_notional": 5089.166666666667,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4166666666666667,
            "na_confidence_pct": 0.5833333333333334,
            "avg_feature_coverage": 0.8250000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.15384615384615385,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.8461538461538461,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8461538461538461,
            "retail_notional_pct": 0.15384615384615385,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.8461538461538461,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.8461538461538461,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 1170.0,
            "avg_run_notional": 1170.0,
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
        "1w": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.15384615384615385,
            "mixed_pct": 0.3076923076923077,
            "instit_pct": 0.15384615384615385,
            "ambiguous_pct": 0.38461538461538464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38461538461538464,
            "retail_qty_pct": 0.003278688524590164,
            "mixed_qty_pct": 0.5770491803278689,
            "instit_qty_pct": 0.09836065573770492,
            "ambiguous_qty_pct": 0.32131147540983607,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32131147540983607,
            "retail_notional_pct": 0.0032275013135179766,
            "mixed_notional_pct": 0.5814005854537266,
            "instit_notional_pct": 0.09720033025594836,
            "ambiguous_notional_pct": 0.31817158297680703,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31817158297680703,
            "run_retail_pct": 0.15384615384615385,
            "run_mixed_pct": 0.3076923076923077,
            "run_instit_pct": 0.15384615384615385,
            "run_unclear_pct": 0.38461538461538464,
            "avg_trade_size": 1024.8461538461538,
            "avg_run_notional": 1024.8461538461538,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3076923076923077,
            "na_confidence_pct": 0.6923076923076923,
            "avg_feature_coverage": 0.8384615384615384,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1111111111111111,
            "mixed_pct": 0.0,
            "instit_pct": 0.7777777777777778,
            "ambiguous_pct": 0.1111111111111111,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1111111111111111,
            "retail_qty_pct": 0.00404040404040404,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9777777777777777,
            "ambiguous_qty_pct": 0.01818181818181818,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.01818181818181818,
            "retail_notional_pct": 0.004039044092898014,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.977785257489061,
            "ambiguous_notional_pct": 0.018175698418041064,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.018175698418041064,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.6666666666666666,
            "run_unclear_pct": 0.16666666666666666,
            "avg_trade_size": 1980.6666666666667,
            "avg_run_notional": 2971.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8333333333333334,
            "na_confidence_pct": 0.16666666666666666,
            "avg_feature_coverage": 0.7999999999999999,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.0625,
            "instit_pct": 0.5625,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.0013306719893546241,
            "mixed_qty_pct": 0.01330671989354624,
            "instit_qty_pct": 0.9387890884896873,
            "ambiguous_qty_pct": 0.046573519627411845,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.046573519627411845,
            "retail_notional_pct": 0.0013505435384240706,
            "mixed_notional_pct": 0.012841233644032148,
            "instit_notional_pct": 0.9408639050634313,
            "ambiguous_notional_pct": 0.04494431775411251,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.04494431775411251,
            "run_retail_pct": 0.1111111111111111,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.4444444444444444,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 2822.9375,
            "avg_run_notional": 5018.555555555556,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8333333333333334,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24034334763948498,
            "mixed_pct": 0.08583690987124463,
            "instit_pct": 0.2832618025751073,
            "ambiguous_pct": 0.38197424892703863,
            "unobservable_pct": 0.008583690987124463,
            "unclear_pct": 0.3905579399141631,
            "retail_qty_pct": 0.07559958289885298,
            "mixed_qty_pct": 0.05995828988529719,
            "instit_qty_pct": 0.4937434827945777,
            "ambiguous_qty_pct": 0.3693952033368092,
            "unobservable_qty_pct": 0.0013034410844629822,
            "unclear_qty_pct": 0.3706986444212722,
            "retail_notional_pct": 0.07524474163750101,
            "mixed_notional_pct": 0.06088104359990429,
            "instit_notional_pct": 0.49551668555531303,
            "ambiguous_notional_pct": 0.3670572365428255,
            "unobservable_notional_pct": 0.0013002926644561253,
            "unclear_notional_pct": 0.36835752920728165,
            "run_retail_pct": 0.4857142857142857,
            "run_mixed_pct": 0.08571428571428572,
            "run_instit_pct": 0.13333333333333333,
            "run_unclear_pct": 0.29523809523809524,
            "avg_trade_size": 1632.1845493562232,
            "avg_run_notional": 3621.8952380952383,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.34285714285714286,
            "low_confidence_pct": 0.2761904761904762,
            "na_confidence_pct": 0.38095238095238093,
            "avg_feature_coverage": 0.8476190476190474,
            "observable_run_pct": 0.9904761904761905,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2893081761006289,
            "mixed_pct": 0.09433962264150944,
            "instit_pct": 0.2893081761006289,
            "ambiguous_pct": 0.3270440251572327,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3270440251572327,
            "retail_qty_pct": 0.10021431544972838,
            "mixed_qty_pct": 0.12159446583030534,
            "instit_qty_pct": 0.4536549264286412,
            "ambiguous_qty_pct": 0.3245362922913251,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3245362922913251,
            "retail_notional_pct": 0.1001171423726823,
            "mixed_notional_pct": 0.12262325680207589,
            "instit_notional_pct": 0.45646054535366043,
            "ambiguous_notional_pct": 0.32079905547158133,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32079905547158133,
            "run_retail_pct": 0.5064935064935064,
            "run_mixed_pct": 0.09090909090909091,
            "run_instit_pct": 0.1038961038961039,
            "run_unclear_pct": 0.2987012987012987,
            "avg_trade_size": 3813.0238993710695,
            "avg_run_notional": 7873.646753246754,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6103896103896104,
            "na_confidence_pct": 0.38961038961038963,
            "avg_feature_coverage": 0.8207792207792208,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2727272727272727,
            "mixed_pct": 0.0,
            "instit_pct": 0.18181818181818182,
            "ambiguous_pct": 0.5454545454545454,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5454545454545454,
            "retail_qty_pct": 0.05861244019138756,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4366028708133971,
            "ambiguous_qty_pct": 0.5047846889952153,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5047846889952153,
            "retail_notional_pct": 0.058506215219291696,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.43757062749195114,
            "ambiguous_notional_pct": 0.5039231572887571,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5039231572887571,
            "run_retail_pct": 0.3,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 8527.454545454546,
            "avg_run_notional": 9380.2,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.775,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.45454545454545453,
            "mixed_pct": 0.09090909090909091,
            "instit_pct": 0.2727272727272727,
            "ambiguous_pct": 0.18181818181818182,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18181818181818182,
            "retail_qty_pct": 0.04738154613466334,
            "mixed_qty_pct": 0.0199501246882793,
            "instit_qty_pct": 0.3765586034912718,
            "ambiguous_qty_pct": 0.5561097256857855,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5561097256857855,
            "retail_notional_pct": 0.04740134244924253,
            "mixed_notional_pct": 0.019949710105775027,
            "instit_notional_pct": 0.3765507782465036,
            "ambiguous_notional_pct": 0.5560981691984789,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5560981691984789,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.1,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.2,
            "avg_trade_size": 2187.318181818182,
            "avg_run_notional": 2406.05,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7,
            "na_confidence_pct": 0.3,
            "avg_feature_coverage": 0.85,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17834394904458598,
            "mixed_pct": 0.07006369426751592,
            "instit_pct": 0.18471337579617833,
            "ambiguous_pct": 0.45222929936305734,
            "unobservable_pct": 0.11464968152866242,
            "unclear_pct": 0.5668789808917197,
            "retail_qty_pct": 0.04078140960163432,
            "mixed_qty_pct": 0.04604187946884576,
            "instit_qty_pct": 0.30822267620020427,
            "ambiguous_qty_pct": 0.5022471910112359,
            "unobservable_qty_pct": 0.10270684371807967,
            "unclear_qty_pct": 0.6049540347293156,
            "retail_notional_pct": 0.04085591698537374,
            "mixed_notional_pct": 0.046614576907787426,
            "instit_notional_pct": 0.3085292867815383,
            "ambiguous_notional_pct": 0.5031426574001727,
            "unobservable_notional_pct": 0.10085756192512783,
            "unclear_notional_pct": 0.6040002193253006,
            "run_retail_pct": 0.35,
            "run_mixed_pct": 0.0875,
            "run_instit_pct": 0.1,
            "run_unclear_pct": 0.46249999999999997,
            "avg_trade_size": 2323.2802547770702,
            "avg_run_notional": 4559.4375,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0625,
            "medium_confidence_pct": 0.125,
            "low_confidence_pct": 0.2625,
            "na_confidence_pct": 0.55,
            "avg_feature_coverage": 0.8168749999999999,
            "observable_run_pct": 0.9625,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23529411764705882,
            "mixed_pct": 0.07058823529411765,
            "instit_pct": 0.23529411764705882,
            "ambiguous_pct": 0.4,
            "unobservable_pct": 0.058823529411764705,
            "unclear_pct": 0.45882352941176474,
            "retail_qty_pct": 0.0703771849126035,
            "mixed_qty_pct": 0.08524992333639987,
            "instit_qty_pct": 0.1948788715118062,
            "ambiguous_qty_pct": 0.5561177552897885,
            "unobservable_qty_pct": 0.09337626494940203,
            "unclear_qty_pct": 0.6494940202391905,
            "retail_notional_pct": 0.06966193357979922,
            "mixed_notional_pct": 0.08783683016616824,
            "instit_notional_pct": 0.19429596314000674,
            "ambiguous_notional_pct": 0.5569893485922403,
            "unobservable_notional_pct": 0.09121592452178555,
            "unclear_notional_pct": 0.6482052731140258,
            "run_retail_pct": 0.3269230769230769,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.1346153846153846,
            "run_unclear_pct": 0.46153846153846156,
            "avg_trade_size": 2997.670588235294,
            "avg_run_notional": 4900.038461538462,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.46153846153846156,
            "na_confidence_pct": 0.5384615384615384,
            "avg_feature_coverage": 0.8009615384615387,
            "observable_run_pct": 0.9423076923076923,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.22105263157894736,
            "mixed_pct": 0.12631578947368421,
            "instit_pct": 0.23157894736842105,
            "ambiguous_pct": 0.42105263157894735,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.42105263157894735,
            "retail_qty_pct": 0.036910268270120256,
            "mixed_qty_pct": 0.04616096207215541,
            "instit_qty_pct": 0.46077705827937093,
            "ambiguous_qty_pct": 0.45615171137835336,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.45615171137835336,
            "retail_notional_pct": 0.03742834879327092,
            "mixed_notional_pct": 0.04741735426918438,
            "instit_notional_pct": 0.46480791605734234,
            "ambiguous_notional_pct": 0.4503463808802024,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4503463808802024,
            "run_retail_pct": 0.25316455696202533,
            "run_mixed_pct": 0.1518987341772152,
            "run_instit_pct": 0.17721518987341772,
            "run_unclear_pct": 0.4177215189873418,
            "avg_trade_size": 2465.342105263158,
            "avg_run_notional": 2964.6518987341774,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.43037974683544306,
            "na_confidence_pct": 0.569620253164557,
            "avg_feature_coverage": 0.8196202531645571,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.175,
            "mixed_pct": 0.1,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.225,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.225,
            "retail_qty_pct": 0.05866794902620822,
            "mixed_qty_pct": 0.14378456359701852,
            "instit_qty_pct": 0.653282038951671,
            "ambiguous_qty_pct": 0.1442654484251022,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1442654484251022,
            "retail_notional_pct": 0.05931938196753374,
            "mixed_notional_pct": 0.14620249038398853,
            "instit_notional_pct": 0.6518580089966751,
            "ambiguous_notional_pct": 0.1426201186518026,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1426201186518026,
            "run_retail_pct": 0.2692307692307692,
            "run_mixed_pct": 0.15384615384615385,
            "run_instit_pct": 0.34615384615384615,
            "run_unclear_pct": 0.23076923076923078,
            "avg_trade_size": 3834.75,
            "avg_run_notional": 5899.615384615385,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6153846153846154,
            "na_confidence_pct": 0.38461538461538464,
            "avg_feature_coverage": 0.8384615384615386,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.216,
            "mixed_pct": 0.08,
            "instit_pct": 0.44,
            "ambiguous_pct": 0.264,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.264,
            "retail_qty_pct": 0.049927141651967176,
            "mixed_qty_pct": 0.021550732418130224,
            "instit_qty_pct": 0.6536544213513307,
            "ambiguous_qty_pct": 0.27486770457857196,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27486770457857196,
            "retail_notional_pct": 0.050070772519413775,
            "mixed_notional_pct": 0.022265398831719654,
            "instit_notional_pct": 0.6513520879463158,
            "ambiguous_notional_pct": 0.2763117407025507,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2763117407025507,
            "run_retail_pct": 0.3291139240506329,
            "run_mixed_pct": 0.10126582278481013,
            "run_instit_pct": 0.2911392405063291,
            "run_unclear_pct": 0.27848101265822783,
            "avg_trade_size": 3184.852,
            "avg_run_notional": 5039.322784810127,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.620253164556962,
            "na_confidence_pct": 0.379746835443038,
            "avg_feature_coverage": 0.8253164556962026,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.13157894736842105,
            "mixed_pct": 0.02631578947368421,
            "instit_pct": 0.3684210526315789,
            "ambiguous_pct": 0.39473684210526316,
            "unobservable_pct": 0.07894736842105263,
            "unclear_pct": 0.4736842105263158,
            "retail_qty_pct": 0.058336366945759006,
            "mixed_qty_pct": 0.0009100837277029487,
            "instit_qty_pct": 0.491354204586822,
            "ambiguous_qty_pct": 0.44202766654532216,
            "unobservable_qty_pct": 0.007371678194393884,
            "unclear_qty_pct": 0.44939934473971604,
            "retail_notional_pct": 0.05842912563129053,
            "mixed_notional_pct": 0.0009624968281354528,
            "instit_notional_pct": 0.4938340544105025,
            "ambiguous_notional_pct": 0.4390234395818468,
            "unobservable_notional_pct": 0.007750883548224671,
            "unclear_notional_pct": 0.4467743231300715,
            "run_retail_pct": 0.16129032258064516,
            "run_mixed_pct": 0.03225806451612903,
            "run_instit_pct": 0.2903225806451613,
            "run_unclear_pct": 0.5161290322580645,
            "avg_trade_size": 3308.2815789473684,
            "avg_run_notional": 4055.3129032258066,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.45161290322580644,
            "na_confidence_pct": 0.5483870967741935,
            "avg_feature_coverage": 0.7677419354838712,
            "observable_run_pct": 0.9032258064516129,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2986425339366516,
            "mixed_pct": 0.16515837104072398,
            "instit_pct": 0.2737556561085973,
            "ambiguous_pct": 0.22850678733031674,
            "unobservable_pct": 0.033936651583710405,
            "unclear_pct": 0.26244343891402716,
            "retail_qty_pct": 0.05023140759655283,
            "mixed_qty_pct": 0.08035429300989468,
            "instit_qty_pct": 0.3984599425470795,
            "ambiguous_qty_pct": 0.42654803702521543,
            "unobservable_qty_pct": 0.04440631982125758,
            "unclear_qty_pct": 0.470954356846473,
            "retail_notional_pct": 0.05083830380410447,
            "mixed_notional_pct": 0.0817307311958507,
            "instit_notional_pct": 0.3963553338526638,
            "ambiguous_notional_pct": 0.42762170027810725,
            "unobservable_notional_pct": 0.04345393086927376,
            "unclear_notional_pct": 0.471075631147381,
            "run_retail_pct": 0.4728682170542636,
            "run_mixed_pct": 0.13953488372093023,
            "run_instit_pct": 0.13178294573643412,
            "run_unclear_pct": 0.2558139534883721,
            "avg_trade_size": 2144.831447963801,
            "avg_run_notional": 3674.4786821705425,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6046511627906976,
            "na_confidence_pct": 0.3953488372093023,
            "avg_feature_coverage": 0.8381782945736433,
            "observable_run_pct": 0.9806201550387597,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23043478260869565,
            "mixed_pct": 0.1358695652173913,
            "instit_pct": 0.2717391304347826,
            "ambiguous_pct": 0.3282608695652174,
            "unobservable_pct": 0.03369565217391304,
            "unclear_pct": 0.3619565217391304,
            "retail_qty_pct": 0.08607760026084121,
            "mixed_qty_pct": 0.15422236713400717,
            "instit_qty_pct": 0.38727674528131,
            "ambiguous_qty_pct": 0.30569141035394704,
            "unobservable_qty_pct": 0.06673187696989458,
            "unclear_qty_pct": 0.3724232873238416,
            "retail_notional_pct": 0.08638877415396828,
            "mixed_notional_pct": 0.1552498618192478,
            "instit_notional_pct": 0.3870601140238362,
            "ambiguous_notional_pct": 0.305783528854336,
            "unobservable_notional_pct": 0.06551772114861175,
            "unclear_notional_pct": 0.3713012500029478,
            "run_retail_pct": 0.4473684210526316,
            "run_mixed_pct": 0.14114832535885166,
            "run_instit_pct": 0.1291866028708134,
            "run_unclear_pct": 0.2822966507177033,
            "avg_trade_size": 2996.036413043478,
            "avg_run_notional": 6594.147129186603,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.004784688995215311,
            "medium_confidence_pct": 0.15550239234449761,
            "low_confidence_pct": 0.41626794258373206,
            "na_confidence_pct": 0.423444976076555,
            "avg_feature_coverage": 0.8423444976076554,
            "observable_run_pct": 0.9904306220095693,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26863572433192684,
            "mixed_pct": 0.1631504922644163,
            "instit_pct": 0.27566807313642755,
            "ambiguous_pct": 0.29254571026722925,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.29254571026722925,
            "retail_qty_pct": 0.08998572860049191,
            "mixed_qty_pct": 0.2225177958712711,
            "instit_qty_pct": 0.35477332766525976,
            "ambiguous_qty_pct": 0.3327231478629772,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3327231478629772,
            "retail_notional_pct": 0.09047962558941515,
            "mixed_notional_pct": 0.2253985324115401,
            "instit_notional_pct": 0.3564659166363689,
            "ambiguous_notional_pct": 0.3276559253626758,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3276559253626758,
            "run_retail_pct": 0.5118343195266272,
            "run_mixed_pct": 0.15976331360946747,
            "run_instit_pct": 0.10059171597633136,
            "run_unclear_pct": 0.22781065088757396,
            "avg_trade_size": 4044.868635724332,
            "avg_run_notional": 8508.584615384616,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.005917159763313609,
            "medium_confidence_pct": 0.029585798816568046,
            "low_confidence_pct": 0.5769230769230769,
            "na_confidence_pct": 0.3875739644970414,
            "avg_feature_coverage": 0.8420118343195266,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2511961722488038,
            "mixed_pct": 0.06937799043062201,
            "instit_pct": 0.24162679425837322,
            "ambiguous_pct": 0.37320574162679426,
            "unobservable_pct": 0.0645933014354067,
            "unclear_pct": 0.43779904306220097,
            "retail_qty_pct": 0.05927985798282249,
            "mixed_qty_pct": 0.05353349819913189,
            "instit_qty_pct": 0.35125650313484447,
            "ambiguous_qty_pct": 0.43470185627943725,
            "unobservable_qty_pct": 0.10122828440376387,
            "unclear_qty_pct": 0.5359301406832011,
            "retail_notional_pct": 0.05922283871968644,
            "mixed_notional_pct": 0.053506070513717835,
            "instit_notional_pct": 0.35231960762110937,
            "ambiguous_notional_pct": 0.43685520017047547,
            "unobservable_notional_pct": 0.0980962829750109,
            "unclear_notional_pct": 0.5349514831454864,
            "run_retail_pct": 0.3944223107569721,
            "run_mixed_pct": 0.0796812749003984,
            "run_instit_pct": 0.11553784860557768,
            "run_unclear_pct": 0.41035856573705176,
            "avg_trade_size": 2146.543540669856,
            "avg_run_notional": 3574.721912350598,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0199203187250996,
            "medium_confidence_pct": 0.0398406374501992,
            "low_confidence_pct": 0.450199203187251,
            "na_confidence_pct": 0.4900398406374502,
            "avg_feature_coverage": 0.8215139442231075,
            "observable_run_pct": 0.9760956175298805,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2087912087912088,
            "mixed_pct": 0.14285714285714285,
            "instit_pct": 0.24175824175824176,
            "ambiguous_pct": 0.2967032967032967,
            "unobservable_pct": 0.10989010989010989,
            "unclear_pct": 0.4065934065934066,
            "retail_qty_pct": 0.03238664673642252,
            "mixed_qty_pct": 0.06851021425012456,
            "instit_qty_pct": 0.30019930244145493,
            "ambiguous_qty_pct": 0.5438465371200797,
            "unobservable_qty_pct": 0.055057299451918285,
            "unclear_qty_pct": 0.598903836571998,
            "retail_notional_pct": 0.03257190856378597,
            "mixed_notional_pct": 0.06857512171650859,
            "instit_notional_pct": 0.29941037832018985,
            "ambiguous_notional_pct": 0.5435651315843126,
            "unobservable_notional_pct": 0.055877459815202944,
            "unclear_notional_pct": 0.5994425913995156,
            "run_retail_pct": 0.2923076923076923,
            "run_mixed_pct": 0.15384615384615385,
            "run_instit_pct": 0.18461538461538463,
            "run_unclear_pct": 0.36923076923076925,
            "avg_trade_size": 2694.967032967033,
            "avg_run_notional": 3772.9538461538464,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47692307692307695,
            "na_confidence_pct": 0.5230769230769231,
            "avg_feature_coverage": 0.8346153846153846,
            "observable_run_pct": 0.9846153846153847,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "LGH",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.24587706146926536,
            "mixed_pct": 0.10194902548725637,
            "instit_pct": 0.22338830584707647,
            "ambiguous_pct": 0.4272863568215892,
            "unobservable_pct": 0.0014992503748125937,
            "unclear_pct": 0.4287856071964018,
            "retail_qty_pct": 0.07658355940231668,
            "mixed_qty_pct": 0.06789605132842441,
            "instit_qty_pct": 0.34160099900960256,
            "ambiguous_qty_pct": 0.5130043491366317,
            "unobservable_qty_pct": 0.0009150411230245877,
            "unclear_qty_pct": 0.5139193902596563,
            "retail_notional_pct": 0.07657516505365722,
            "mixed_notional_pct": 0.06557676923981491,
            "instit_notional_pct": 0.3406119065710808,
            "ambiguous_notional_pct": 0.516336183893214,
            "unobservable_notional_pct": 0.0008999752422330109,
            "unclear_notional_pct": 0.5172361591354471,
            "run_retail_pct": 0.3304535637149028,
            "run_mixed_pct": 0.11231101511879049,
            "run_instit_pct": 0.14038876889848811,
            "run_unclear_pct": 0.4168466522678186,
            "avg_trade_size": 3327.5944527736133,
            "avg_run_notional": 4793.748380129589,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.019438444924406047,
            "medium_confidence_pct": 0.06479481641468683,
            "low_confidence_pct": 0.38660907127429806,
            "na_confidence_pct": 0.5291576673866091,
            "avg_feature_coverage": 0.8208423326133906,
            "observable_run_pct": 0.9978401727861771,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "MV4",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22121212121212122,
            "mixed_pct": 0.10606060606060606,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.2878787878787879,
            "unobservable_pct": 0.021212121212121213,
            "unclear_pct": 0.30909090909090914,
            "retail_qty_pct": 0.03938793879387939,
            "mixed_qty_pct": 0.09612961296129613,
            "instit_qty_pct": 0.5721332133213322,
            "ambiguous_qty_pct": 0.25670567056705673,
            "unobservable_qty_pct": 0.03564356435643564,
            "unclear_qty_pct": 0.29234923492349235,
            "retail_notional_pct": 0.03904868079638408,
            "mixed_notional_pct": 0.09779933755775319,
            "instit_notional_pct": 0.572397739875782,
            "ambiguous_notional_pct": 0.2557623420672743,
            "unobservable_notional_pct": 0.034991899702806466,
            "unclear_notional_pct": 0.29075424177008075,
            "run_retail_pct": 0.32547169811320753,
            "run_mixed_pct": 0.12735849056603774,
            "run_instit_pct": 0.24056603773584906,
            "run_unclear_pct": 0.30660377358490565,
            "avg_trade_size": 2627.1015151515153,
            "avg_run_notional": 4089.3561320754716,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5660377358490566,
            "na_confidence_pct": 0.4339622641509434,
            "avg_feature_coverage": 0.8325471698113205,
            "observable_run_pct": 0.9952830188679245,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Y03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2182410423452769,
            "mixed_pct": 0.1791530944625407,
            "instit_pct": 0.2964169381107492,
            "ambiguous_pct": 0.2671009771986971,
            "unobservable_pct": 0.03908794788273615,
            "unclear_pct": 0.30618892508143325,
            "retail_qty_pct": 0.03440957036274762,
            "mixed_qty_pct": 0.08277591973244147,
            "instit_qty_pct": 0.5506817597118601,
            "ambiguous_qty_pct": 0.31695394906097246,
            "unobservable_qty_pct": 0.015178801131978389,
            "unclear_qty_pct": 0.33213275019295085,
            "retail_notional_pct": 0.034362644067724914,
            "mixed_notional_pct": 0.08265434638010509,
            "instit_notional_pct": 0.5504701004283831,
            "ambiguous_notional_pct": 0.31706002967274327,
            "unobservable_notional_pct": 0.015452879451043676,
            "unclear_notional_pct": 0.33251290912378695,
            "run_retail_pct": 0.3160377358490566,
            "run_mixed_pct": 0.18396226415094338,
            "run_instit_pct": 0.18396226415094338,
            "run_unclear_pct": 0.3160377358490566,
            "avg_trade_size": 3080.2899022801303,
            "avg_run_notional": 4460.608490566037,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8341981132075469,
            "observable_run_pct": 0.9905660377358491,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "OTS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.125,
            "mixed_pct": 0.0625,
            "instit_pct": 0.4375,
            "ambiguous_pct": 0.3375,
            "unobservable_pct": 0.0375,
            "unclear_pct": 0.375,
            "retail_qty_pct": 0.05119900771775083,
            "mixed_qty_pct": 0.025840683572216097,
            "instit_qty_pct": 0.5157111356119074,
            "ambiguous_qty_pct": 0.40166758544652703,
            "unobservable_qty_pct": 0.005581587651598677,
            "unclear_qty_pct": 0.4072491730981257,
            "retail_notional_pct": 0.05135599507858856,
            "mixed_notional_pct": 0.0258811585812767,
            "instit_notional_pct": 0.5183051694596815,
            "ambiguous_notional_pct": 0.39861814533745404,
            "unobservable_notional_pct": 0.005839531542999124,
            "unclear_notional_pct": 0.40445767688045314,
            "run_retail_pct": 0.14925373134328357,
            "run_mixed_pct": 0.07462686567164178,
            "run_instit_pct": 0.373134328358209,
            "run_unclear_pct": 0.40298507462686567,
            "avg_trade_size": 2085.78375,
            "avg_run_notional": 2490.4880597014926,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5223880597014925,
            "na_confidence_pct": 0.47761194029850745,
            "avg_feature_coverage": 0.7940298507462689,
            "observable_run_pct": 0.9552238805970149,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5JS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28888888888888886,
            "mixed_pct": 0.1388888888888889,
            "instit_pct": 0.2638888888888889,
            "ambiguous_pct": 0.29074074074074074,
            "unobservable_pct": 0.017592592592592594,
            "unclear_pct": 0.30833333333333335,
            "retail_qty_pct": 0.05868587879905263,
            "mixed_qty_pct": 0.09065252230148488,
            "instit_qty_pct": 0.3947611011047922,
            "ambiguous_qty_pct": 0.4378749414984896,
            "unobservable_qty_pct": 0.018025556296180738,
            "unclear_qty_pct": 0.45590049779467035,
            "retail_notional_pct": 0.05918494015340018,
            "mixed_notional_pct": 0.09068891251138612,
            "instit_notional_pct": 0.3955561725794499,
            "ambiguous_notional_pct": 0.43711020879571666,
            "unobservable_notional_pct": 0.017459765960047127,
            "unclear_notional_pct": 0.4545699747557638,
            "run_retail_pct": 0.4429223744292237,
            "run_mixed_pct": 0.1385083713850837,
            "run_instit_pct": 0.1324200913242009,
            "run_unclear_pct": 0.2861491628614916,
            "avg_trade_size": 2507.723148148148,
            "avg_run_notional": 4122.284627092847,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0015220700152207,
            "medium_confidence_pct": 0.0395738203957382,
            "low_confidence_pct": 0.5342465753424658,
            "na_confidence_pct": 0.4246575342465753,
            "avg_feature_coverage": 0.8335616438356164,
            "observable_run_pct": 0.9908675799086758,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "Q01",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2502034174125305,
            "mixed_pct": 0.17209113100081366,
            "instit_pct": 0.24654190398698128,
            "ambiguous_pct": 0.30105777054515864,
            "unobservable_pct": 0.030105777054515868,
            "unclear_pct": 0.33116354759967453,
            "retail_qty_pct": 0.10112501434967283,
            "mixed_qty_pct": 0.1708185053380783,
            "instit_qty_pct": 0.35850074618298705,
            "ambiguous_qty_pct": 0.31872345310526917,
            "unobservable_qty_pct": 0.050832281023992655,
            "unclear_qty_pct": 0.36955573412926185,
            "retail_notional_pct": 0.10107688609060507,
            "mixed_notional_pct": 0.17104996244324625,
            "instit_notional_pct": 0.3605729438275356,
            "ambiguous_notional_pct": 0.31835622222115906,
            "unobservable_notional_pct": 0.04894398541745408,
            "unclear_notional_pct": 0.36730020763861315,
            "run_retail_pct": 0.4691136974037601,
            "run_mixed_pct": 0.170993733213966,
            "run_instit_pct": 0.11727842435094002,
            "run_unclear_pct": 0.24261414503133394,
            "avg_trade_size": 3401.4157851912123,
            "avg_run_notional": 7484.941808415399,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.025962399283795883,
            "medium_confidence_pct": 0.12623097582811102,
            "low_confidence_pct": 0.4341987466427932,
            "na_confidence_pct": 0.41360787824529993,
            "avg_feature_coverage": 0.8486123545210384,
            "observable_run_pct": 0.9937332139659804,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2777777777777778,
            "mixed_pct": 0.07085346215780998,
            "instit_pct": 0.24798711755233493,
            "ambiguous_pct": 0.3695652173913043,
            "unobservable_pct": 0.033816425120772944,
            "unclear_pct": 0.40338164251207725,
            "retail_qty_pct": 0.05564493736014243,
            "mixed_qty_pct": 0.042606536759061134,
            "instit_qty_pct": 0.35441745749146564,
            "ambiguous_qty_pct": 0.4970762621890466,
            "unobservable_qty_pct": 0.050254806200284205,
            "unclear_qty_pct": 0.5473310683893308,
            "retail_notional_pct": 0.055815961333809,
            "mixed_notional_pct": 0.04279668486608065,
            "instit_notional_pct": 0.35232792157311066,
            "ambiguous_notional_pct": 0.5001929522512296,
            "unobservable_notional_pct": 0.04886647997577007,
            "unclear_notional_pct": 0.5490594322269997,
            "run_retail_pct": 0.44148936170212766,
            "run_mixed_pct": 0.07712765957446809,
            "run_instit_pct": 0.10505319148936171,
            "run_unclear_pct": 0.37632978723404253,
            "avg_trade_size": 1811.4165861513686,
            "avg_run_notional": 2991.727925531915,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.1077127659574468,
            "medium_confidence_pct": 0.03723404255319149,
            "low_confidence_pct": 0.4015957446808511,
            "na_confidence_pct": 0.45345744680851063,
            "avg_feature_coverage": 0.8271276595744681,
            "observable_run_pct": 0.988031914893617,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42W",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36860068259385664,
            "mixed_pct": 0.21084565794463406,
            "instit_pct": 0.19908987485779295,
            "ambiguous_pct": 0.22146378460371635,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22146378460371635,
            "retail_qty_pct": 0.09480405237719641,
            "mixed_qty_pct": 0.28257664551036804,
            "instit_qty_pct": 0.3067540438999339,
            "ambiguous_qty_pct": 0.3158652582125016,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3158652582125016,
            "retail_notional_pct": 0.09463979430749334,
            "mixed_notional_pct": 0.2861022761676994,
            "instit_notional_pct": 0.3046010308220625,
            "ambiguous_notional_pct": 0.3146568987027447,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3146568987027447,
            "run_retail_pct": 0.6109625668449198,
            "run_mixed_pct": 0.17446524064171123,
            "run_instit_pct": 0.05748663101604278,
            "run_unclear_pct": 0.1570855614973262,
            "avg_trade_size": 4152.953052711414,
            "avg_run_notional": 7320.41256684492,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.16510695187165775,
            "medium_confidence_pct": 0.1270053475935829,
            "low_confidence_pct": 0.37633689839572193,
            "na_confidence_pct": 0.3315508021390374,
            "avg_feature_coverage": 0.8468917112299464,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BQD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.16019417475728157,
            "mixed_pct": 0.12135922330097088,
            "instit_pct": 0.4368932038834951,
            "ambiguous_pct": 0.27184466019417475,
            "unobservable_pct": 0.009708737864077669,
            "unclear_pct": 0.2815533980582524,
            "retail_qty_pct": 0.007697903967910653,
            "mixed_qty_pct": 0.027311337449368832,
            "instit_qty_pct": 0.15969955562546698,
            "ambiguous_qty_pct": 0.057522906917299145,
            "unobservable_qty_pct": 0.7477682960399544,
            "unclear_qty_pct": 0.8052912029572535,
            "retail_notional_pct": 0.007473219140634522,
            "mixed_notional_pct": 0.02648759197875142,
            "instit_notional_pct": 0.15334563613651186,
            "ambiguous_notional_pct": 0.055919424350197575,
            "unobservable_notional_pct": 0.7567741283939046,
            "unclear_notional_pct": 0.8126935527441022,
            "run_retail_pct": 0.2558139534883721,
            "run_mixed_pct": 0.15503875968992248,
            "run_instit_pct": 0.3023255813953488,
            "run_unclear_pct": 0.28682170542635654,
            "avg_trade_size": 19515.64077669903,
            "avg_run_notional": 31164.511627906977,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5581395348837209,
            "na_confidence_pct": 0.4418604651162791,
            "avg_feature_coverage": 0.8267441860465117,
            "observable_run_pct": 0.9844961240310077,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-16T06:22:46.065200",
          "price": 0.215,
          "size": 100.0,
          "notional": 21.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 561,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-16T03:54:11.261100",
          "price": 0.21,
          "size": 4900.0,
          "notional": 1029.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 560,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-13T07:03:08.239300",
          "price": 0.23,
          "size": 200.0,
          "notional": 46.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 559,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-12T01:40:31.414900",
          "price": 0.225,
          "size": 500.0,
          "notional": 112.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 558,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-11T08:35:05.382000",
          "price": 0.22,
          "size": 5000.0,
          "notional": 1100.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 557,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-11T08:34:31.185000",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 556,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-03-11T08:34:03.641600",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 555,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-11T06:45:55.766700",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 554,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-11T06:27:12.575100",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 553,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-11T05:26:56.368500",
          "price": 0.215,
          "size": 100.0,
          "notional": 21.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 552,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-03-10T07:46:25.970100",
          "price": 0.215,
          "size": 5500.0,
          "notional": 1182.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 551,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-03-10T03:10:50.514200",
          "price": 0.215,
          "size": 4500.0,
          "notional": 967.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 550,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-03-10T01:48:16.952200",
          "price": 0.205,
          "size": 100.0,
          "notional": 20.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 549,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-03-09T06:03:56.094900",
          "price": 0.205,
          "size": 17000.0,
          "notional": 3485.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 548,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-03-09T05:47:18.948300",
          "price": 0.2,
          "size": 100.0,
          "notional": 20.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 547,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-03-09T05:39:02.070300",
          "price": 0.2,
          "size": 99800.0,
          "notional": 19960.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 546,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-03-09T05:39:02.070300",
          "price": 0.2,
          "size": 100.0,
          "notional": 20.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 546,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-03-09T05:30:51.692300",
          "price": 0.205,
          "size": 22000.0,
          "notional": 4510.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 545,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-03-09T05:22:40.681200",
          "price": 0.21,
          "size": 5500.0,
          "notional": 1155.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 544,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-03-09T05:22:40.681200",
          "price": 0.21,
          "size": 14500.0,
          "notional": 3045.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 543,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-03-09T05:22:39.595800",
          "price": 0.205,
          "size": 50000.0,
          "notional": 10250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-03-09T05:22:39.595800",
          "price": 0.205,
          "size": 100000.0,
          "notional": 20500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 542,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-03-09T03:43:11.952900",
          "price": 0.21,
          "size": 100.0,
          "notional": 21.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 541,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-03-09T03:30:52.634400",
          "price": 0.21,
          "size": 26000.0,
          "notional": 5460.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 540,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-03-09T03:14:03.184300",
          "price": 0.21,
          "size": 300.0,
          "notional": 63.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-03-09T03:14:03.184300",
          "price": 0.21,
          "size": 3700.0,
          "notional": 777.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 539,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-8",
          "timestamp": "2026-03-09T03:12:33.499500",
          "price": 0.21,
          "size": 2000.0,
          "notional": 420.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 538,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-03-09T03:11:39.140200",
          "price": 0.21,
          "size": 8800.0,
          "notional": 1848.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 537,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-03-09T03:11:27.113500",
          "price": 0.21,
          "size": 6900.0,
          "notional": 1449.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-03-09T03:11:27.113500",
          "price": 0.21,
          "size": 12000.0,
          "notional": 2520.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 536,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
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
      "total_trades": 666,
      "price_moving_trades": 167,
      "pct_price_moving": 25.075075075075077,
      "all_movers": {
        "count": 167,
        "avg_size": 3614.3562874251497,
        "median_size": 1332.5,
        "retail_count": 44,
        "mixed_count": 19,
        "institutional_count": 37,
        "ambiguous_count": 66,
        "unobservable_count": 1,
        "retail_pct": 26.34730538922156,
        "mixed_pct": 11.377245508982035,
        "instit_pct": 22.15568862275449,
        "unclear_pct": 40.119760479041915
      },
      "positive_movers": {
        "count": 83,
        "avg_size": 2774.385542168675,
        "median_size": 893.0,
        "retail_count": 31,
        "mixed_count": 9,
        "institutional_count": 17,
        "ambiguous_count": 26,
        "unobservable_count": 0,
        "retail_pct": 37.34939759036144,
        "mixed_pct": 10.843373493975903,
        "instit_pct": 20.481927710843372,
        "unclear_pct": 31.32530120481928
      },
      "negative_movers": {
        "count": 84,
        "avg_size": 4444.327380952381,
        "median_size": 2048.75,
        "retail_count": 13,
        "mixed_count": 10,
        "institutional_count": 20,
        "ambiguous_count": 40,
        "unobservable_count": 1,
        "retail_pct": 15.476190476190476,
        "mixed_pct": 11.904761904761903,
        "instit_pct": 23.809523809523807,
        "unclear_pct": 48.80952380952381
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ Leong Guan Hldgs",
      "mapping": {
        "ticker_to_security": "$ Leong Guan Hldgs",
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
            "avg_short_ratio": 0.001255577559410408,
            "max_short_ratio": 0.08035696380226612,
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
            "month": "2026-03",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.005739783128733294
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
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.005739783128733294,
            "change_pct": null
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5000,
            "close": 0.215,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1500,
            "close": 0.215,
            "return": -0.04444444444444451
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 45200,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10100,
            "close": 0.215,
            "return": 0.04878048780487809
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 503800,
            "close": 0.205,
            "return": -0.06818181818181823
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2900,
            "close": 0.22,
            "return": -0.022222222222222254
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 21000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 28100,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 250700,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 500,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 155800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 6000,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 800,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 10000,
            "close": 0.225,
            "return": -0.04255319148936165
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 600,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1300,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 0,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 13000,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 63200,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1000,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 31600,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 73000,
            "close": 0.225,
            "return": -0.04255319148936165
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4500,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1500,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12500,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1100,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 22000,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 82400,
            "close": 0.235,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12600,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 100000,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 40000,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 28700,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2100,
            "close": 0.23,
            "return": -0.04166666666666663
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2000,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 17000,
            "close": 0.235,
            "return": -0.04081632653061229
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 12000,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 53400,
            "close": 0.24,
            "return": 0.02127659574468077
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 25500,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 510500,
            "close": 0.24,
            "return": -0.05882352941176472
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2793600,
            "close": 0.255,
            "return": -0.05555555555555558
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1360200,
            "close": 0.27,
            "return": 0.12500000000000022
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 651600,
            "close": 0.24,
            "return": 0.04347826086956519
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9500,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285000,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 63000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 31000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 112000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 485400,
            "close": 0.23,
            "return": 0.06976744186046524
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 80000,
            "close": 0.215,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 169200,
            "close": 0.215,
            "return": -0.022727272727272707
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 37500,
            "close": 0.22,
            "return": -0.022222222222222254
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 27000,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5300,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 113700,
            "close": 0.22,
            "return": 0.07317073170731714
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 293000,
            "close": 0.205,
            "return": -0.04651162790697683
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 597600,
            "close": 0.215,
            "return": -0.04444444444444451
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 242400,
            "close": 0.225,
            "return": -0.06249999999999989
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 533300,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 461400,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.08035696380226612,
            "short_vol": 400700,
            "total_vol": 4986500,
            "close": 0.24,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "LGH",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "42W",
          "avg_short_ratio": 0.0001441107704066295,
          "max_short_ratio": 0.009845620667926906,
          "is_target": false
        },
        {
          "ticker": "D03",
          "avg_short_ratio": 0.0008775771101767513,
          "max_short_ratio": 0.06804264005443411,
          "is_target": false
        },
        {
          "ticker": "BQD",
          "avg_short_ratio": 0.0010629135827618088,
          "max_short_ratio": 0.21058965102286403,
          "is_target": false
        },
        {
          "ticker": "Q01",
          "avg_short_ratio": 0.0013869496226981048,
          "max_short_ratio": 0.14655172413793102,
          "is_target": false
        },
        {
          "ticker": "OTS",
          "avg_short_ratio": 0.00159866501990277,
          "max_short_ratio": 0.4401114206128134,
          "is_target": false
        },
        {
          "ticker": "5JS",
          "avg_short_ratio": 0.00402562618995063,
          "max_short_ratio": 0.2,
          "is_target": false
        },
        {
          "ticker": "MV4",
          "avg_short_ratio": 0.005582224398178828,
          "max_short_ratio": 1.0,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "1M",
        "3M"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "1W": {
          "opening": 0.0,
          "continuous": 0.9530365507195909,
          "closing": 0.002373864558074749,
          "auctions": 0.046963449280409034,
          "other": 0.0
        },
        "1M": {
          "opening": 0.00036810041779397417,
          "continuous": 0.9579097622275802,
          "closing": 0.0018629971145017249,
          "auctions": 0.042090237772419874,
          "other": 0.0
        },
        "3M": {
          "opening": 0.1392018660459241,
          "continuous": 0.8361481169974946,
          "closing": 0.015128876647035569,
          "auctions": 0.16385188300250544,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.9599048616046255,
        "1W": 0.6800495318597376,
        "1M": 0.7325225280373246,
        "3M": 0.5698834411419875
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0404
        },
        {
          "time": "09:00",
          "avg_share": 0.0969
        },
        {
          "time": "09:30",
          "avg_share": 0.1104
        },
        {
          "time": "10:00",
          "avg_share": 0.0639
        },
        {
          "time": "10:30",
          "avg_share": 0.0782
        },
        {
          "time": "11:00",
          "avg_share": 0.0644
        },
        {
          "time": "11:30",
          "avg_share": 0.0327
        },
        {
          "time": "12:30",
          "avg_share": 0.0288
        },
        {
          "time": "13:00",
          "avg_share": 0.0615
        },
        {
          "time": "13:30",
          "avg_share": 0.0162
        },
        {
          "time": "14:00",
          "avg_share": 0.0158
        },
        {
          "time": "14:30",
          "avg_share": 0.0665
        },
        {
          "time": "15:00",
          "avg_share": 0.0549
        },
        {
          "time": "15:30",
          "avg_share": 0.0769
        },
        {
          "time": "16:00",
          "avg_share": 0.0074
        },
        {
          "time": "16:30",
          "avg_share": 0.1499
        },
        {
          "time": "17:00",
          "avg_share": 0.0353
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "LGH",
          "auctions_pct": 16.385188300250544,
          "hhi": 0.5698834411419875,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "Y03",
          "auctions_pct": 3.801227836910444,
          "hhi": 0.6329289666178579,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "MV4",
          "auctions_pct": 3.7736568334084697,
          "hhi": 0.7201359199139608,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "OTS",
          "auctions_pct": 5.45708578438774,
          "hhi": 0.7182158209627891,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BQD",
          "auctions_pct": 0.20838123682934032,
          "hhi": 0.676939128205981,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D03",
          "auctions_pct": 5.843292640578197,
          "hhi": 0.49534822537508566,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5JS",
          "auctions_pct": 4.750888961709414,
          "hhi": 0.5539079495889724,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "Q01",
          "auctions_pct": 2.8637725131376675,
          "hhi": 0.3627774893861957,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42W",
          "auctions_pct": 7.6116630033463135,
          "hhi": 0.3602634255661345,
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
