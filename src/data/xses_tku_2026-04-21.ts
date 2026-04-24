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
      "marketCap": 145411520.025,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 283800000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 162821021.31,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68099809.4,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 102908899.2,
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
      "marketCap": 6352418.796,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 41999737.248,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 22100295.0,
      "sector": "Electronic Components",
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
    "asof_date": "2026-04-21",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "145.4M",
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
          "score_pca": 82.97491039426524,
          "score_pca_percentile": 82.97491039426524,
          "rank_pca": 96,
          "total": 558,
          "adv_notional_sgd": 1999888.5,
          "adv_volume_shares": 7842700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.013753301661767702,
          "votes": 128.0,
          "trades": 128.0,
          "spread_pct": 0.02103002371470761,
          "spread_ticks": 1.030701754385965,
          "amihud": 4.255556396205265e-08,
          "volatility": 0.7786867843083977
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5201677236251697,
          "loadings": {
            "log_adv": 0.5514808349603177,
            "log_trades": 0.5078747432124273,
            "log_turnover": 0.5138961370493252,
            "neg_spread": 0.3650104275716945,
            "neg_amihud": 0.04774729490730222,
            "neg_vol": -0.1957817095571683
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
          "peer_median_adv": 12757.0,
          "peer_median_score_pca": 44.623655913978496,
          "peer_median_trades": 9.0,
          "peer_median_volatility": 0.12199953608153802,
          "peer_median_spread_pct": 0.03939403473445763,
          "peer_median_spread_ticks": 1.5779816513761467,
          "peer_median_amihud": 8.927681317487726e-09,
          "peer_median_turnover_ratio": 0.0001608581918254479,
          "target_vs_peer": {
            "score_pca_delta": 38.35,
            "adv_delta_pct": 15576.8,
            "trades_delta_pct": 1322.22,
            "volatility_delta_pct": -538.27,
            "spread_pct_delta_pct": 46.62,
            "spread_ticks_delta_pct": -34.68,
            "amihud_delta_pct": -376.67,
            "turnover_ratio_delta_pct": 8449.95
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 1999888.5,
            "trades": 128.0,
            "volatility": 0.7786867843083977,
            "spread_pct": 0.02103002371470761,
            "spread_ticks": 1.030701754385965,
            "amihud": 4.255556396205265e-08,
            "turnover_ratio": 0.013753301661767702,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 87.81362007168458,
            "rank_pca": 69,
            "adv": 1570250.0000000002,
            "trades": 738.0,
            "volatility": 0.43941480475601025,
            "spread_pct": 0.009655079247142226,
            "spread_ticks": 1.0375747224594363,
            "amihud": 1.7855362634975453e-08,
            "turnover_ratio": 0.021142322263791015,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 40.14336917562724,
            "rank_pca": 335,
            "adv": 9114.0,
            "trades": 5.0,
            "volatility": 0.05139426766362599,
            "spread_pct": 0.010869565217391313,
            "spread_ticks": 2.0,
            "amihud": 5.930881506918313e-07,
            "turnover_ratio": 6.774809821928479e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 49.10394265232975,
            "rank_pca": 285,
            "adv": 16400.0,
            "trades": 13.0,
            "volatility": 0.19260480449945006,
            "spread_pct": 0.014243050769584209,
            "spread_ticks": 2.8181818181818183,
            "amihud": 0.0,
            "turnover_ratio": 0.00025396828543161105,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.043010752688172,
            "rank_pca": 436,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.04137931034482763,
            "spread_ticks": 3.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 13.620071684587815,
            "rank_pca": 483,
            "adv": 3.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-07,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 2.6881720430107525,
            "rank_pca": 544,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.7157894736842104,
            "spread_ticks": 34.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 79.92831541218638,
            "rank_pca": 113,
            "adv": 617425.2000000001,
            "trades": 128.0,
            "volatility": 0.6812621482457916,
            "spread_pct": 0.03740875912408763,
            "spread_ticks": 1.0379746835443038,
            "amihud": 0.0,
            "turnover_ratio": 0.026889870062841804,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 217545.30000000002,
            "trades": 83.0,
            "volatility": 1.2730366958631603,
            "spread_pct": 0.05147058823529412,
            "spread_ticks": 1.1559633027522935,
            "amihud": 3.9971684857880343e-07,
            "turnover_ratio": 0.017712716814542052,
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
              "mean": 0.26134674409359304,
              "median": 0.13119927769224105,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0294986899736356,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3718135.0091166436,
              "median": 19180.0,
              "min": 0.0,
              "max": 199570560.0,
              "p5": 0.0,
              "p95": 19633819.65,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11133620546487365,
              "median": 0.027958207803580777,
              "min": 0.0002366563546844375,
              "max": 1.2631578947368423,
              "p5": 0.003339571273178032,
              "p95": 0.5917338709677419,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013255502203697445,
              "median": 0.00045468242353972503,
              "min": 0.0,
              "max": 3.7543619847653016,
              "p5": 0.0,
              "p95": 0.019058272900743405,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.074211559425465e-05,
              "median": 1.0271944715452783e-08,
              "min": 0.0,
              "max": 0.010683760683760675,
              "p5": 0.0,
              "p95": 2.7508247694102132e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 474.89068100358423,
              "median": 10.0,
              "min": 0.0,
              "max": 12415.0,
              "p5": 0.0,
              "p95": 3028.9999999999977,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.20137360685395866,
              "median": 0.10014123063390577,
              "min": 0.0,
              "max": 0.7786867843083977,
              "p5": 0.0,
              "p95": 0.6599415914650619,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1325391.9375,
              "median": 12757.0,
              "min": 0.0,
              "max": 7007480.0,
              "p5": 0.0,
              "p95": 5254822.974999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1851185444965031,
              "median": 0.017636537242145908,
              "min": 0.0013151863274949596,
              "max": 0.7157894736842104,
              "p5": 0.004234148849371503,
              "p95": 0.6985964912280701,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004939347469064241,
              "median": 0.0001608581918254479,
              "min": 0.0,
              "max": 0.021142322263791015,
              "p5": 0.0,
              "p95": 0.01855616505308285,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.08990915724408e-07,
              "median": 9.150889846282032e-09,
              "min": 0.0,
              "max": 5.930881506918313e-07,
              "p5": 0.0,
              "p95": 4.5545500400938667e-07,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 349.875,
              "median": 9.0,
              "min": 0.0,
              "max": 1912.0,
              "p5": 0.0,
              "p95": 1501.0999999999995,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 303842.18750000006,
              "median": 12757.0,
              "min": 0.0,
              "max": 1570250.0000000002,
              "p5": 0.0,
              "p95": 1236761.3199999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 121.25,
              "median": 9.0,
              "min": 0.0,
              "max": 738.0,
              "p5": 0.0,
              "p95": 524.4999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3297140901285047,
              "median": 0.12199953608153802,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.0,
              "p95": 1.065915604197081,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.19343531166115052,
              "median": 0.03939403473445763,
              "min": 0.009655079247142226,
              "max": 0.7157894736842104,
              "p5": 0.010080149336729407,
              "p95": 0.6985964912280701,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.756211815867232,
              "median": 1.5779816513761467,
              "min": 1.0,
              "max": 34.0,
              "p5": 1.0131511528608026,
              "p95": 23.149999999999984,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6844339365093502e-07,
              "median": 8.927681317487726e-09,
              "min": 0.0,
              "max": 5.930881506918313e-07,
              "p5": 0.0,
              "p95": 5.447453251635744e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008258368842797554,
              "median": 0.0001608581918254479,
              "min": 0.0,
              "max": 0.026889870062841804,
              "p5": 0.0,
              "p95": 0.024878228333174025,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.08510638297872353,
            "market": 0.0021762559479174826,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.08293012703080604,
            "vs_sector": 0.08510638297872353,
            "vs_peers": 0.08510638297872353
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 70.25089605734766,
          "score_pca_percentile": 70.25089605734766,
          "rank_pca": 167,
          "total": 558,
          "adv_notional_sgd": 193687.0,
          "adv_volume_shares": 824200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001445353160216372,
          "votes": 71.0,
          "trades": 71.0,
          "spread_pct": 0.02238209432454039,
          "spread_ticks": 1.037037037037037,
          "amihud": 4.255556396205265e-08,
          "volatility": 0.9140050896952127
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5100268992881221,
          "loadings": {
            "log_adv": 0.5563687929757658,
            "log_trades": 0.511287196819402,
            "log_turnover": 0.5084144179369027,
            "neg_spread": 0.3981401886094505,
            "neg_amihud": 0.09426060851073449,
            "neg_vol": 0.05615403905637665
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
          "peer_median_adv": 25548.25,
          "peer_median_score_pca": 52.24014336917563,
          "peer_median_trades": 12.0,
          "peer_median_volatility": 0.40491733338563735,
          "peer_median_spread_pct": 0.04187679520042942,
          "peer_median_spread_ticks": 1.6392376681614351,
          "peer_median_amihud": 2.0823608708066677e-07,
          "peer_median_turnover_ratio": 0.0002571569785593266,
          "target_vs_peer": {
            "score_pca_delta": 18.01,
            "adv_delta_pct": 658.1,
            "trades_delta_pct": 491.67,
            "volatility_delta_pct": -125.73,
            "spread_pct_delta_pct": 46.55,
            "spread_ticks_delta_pct": -36.74,
            "amihud_delta_pct": 79.56,
            "turnover_ratio_delta_pct": 462.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.25089605734766,
            "rank_pca": 167,
            "adv": 193687.0,
            "trades": 71.0,
            "volatility": 0.9140050896952127,
            "spread_pct": 0.02238209432454039,
            "spread_ticks": 1.037037037037037,
            "amihud": 4.255556396205265e-08,
            "turnover_ratio": 0.001445353160216372,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1795400.0,
            "trades": 586.0,
            "volatility": 0.374065682647962,
            "spread_pct": 0.010043675720823408,
            "spread_ticks": 1.0784753363228698,
            "amihud": 1.4057264723185525e-08,
            "turnover_ratio": 0.02659119116806332,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 54.48028673835126,
            "rank_pca": 255,
            "adv": 35311.5,
            "trades": 14.0,
            "volatility": 0.4154650447084295,
            "spread_pct": 0.01417446845743286,
            "spread_ticks": 2.4545454545454546,
            "amihud": 5.969693062261526e-07,
            "turnover_ratio": 0.00027583154274994523,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 50.0,
            "rank_pca": 280,
            "adv": 15784.999999999998,
            "trades": 10.0,
            "volatility": 0.3943696220628452,
            "spread_pct": 0.016843647015745093,
            "spread_ticks": 2.2,
            "amihud": 5.27264709853314e-07,
            "turnover_ratio": 0.00023848241436870792,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.22222222222222,
            "rank_pca": 435,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.046082949308755804,
            "spread_ticks": 3.3333333333333335,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 9.67741935483871,
            "rank_pca": 505,
            "adv": 3.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-07,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 24.551971326164875,
            "rank_pca": 422,
            "adv": 116.0,
            "trades": 2.0,
            "volatility": 2.5821623351716814,
            "spread_pct": 0.5862068965517243,
            "spread_ticks": 22.857142857142858,
            "amihud": 0.00040263502253637683,
            "turnover_ratio": 3.890234504794787e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.04301075268818,
            "rank_pca": 157,
            "adv": 223662.6,
            "trades": 47.0,
            "volatility": 0.4973889013544547,
            "spread_pct": 0.037670641092103024,
            "spread_ticks": 1.0379746835443038,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.010101642365008637,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 74.01433691756273,
            "rank_pca": 146,
            "adv": 345664.7,
            "trades": 93.0,
            "volatility": 2.8370380826506882,
            "spread_pct": 0.047171620325982704,
            "spread_ticks": 1.0753968253968254,
            "amihud": 2.0823608708066677e-07,
            "turnover_ratio": 0.025696972742759748,
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
              "mean": 0.5158713582511102,
              "median": 0.2699389797909365,
              "min": 0.0,
              "max": 8.990301558366445,
              "p5": 0.0,
              "p95": 1.8581733481964222,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3344771.308669629,
              "median": 20639.0,
              "min": 0.0,
              "max": 234648645.0,
              "p5": 0.0,
              "p95": 14526141.299999977,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10576366256822436,
              "median": 0.02693406021392227,
              "min": 0.0002366563546844375,
              "max": 1.2394366197183098,
              "p5": 0.003290170758996562,
              "p95": 0.5357344358834213,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010397863959405403,
              "median": 0.0004089584082370467,
              "min": 0.0,
              "max": 3.7543619847653016,
              "p5": 0.0,
              "p95": 0.014547329331750562,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002614645049202005,
              "median": 5.472981541852012e-08,
              "min": 0.0,
              "max": 0.0980392156862745,
              "p5": 0.0,
              "p95": 0.00012950553692541743,
              "count": 504
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.9641577060932,
              "median": 10.0,
              "min": 0.0,
              "max": 12415.0,
              "p5": 0.0,
              "p95": 2873.6,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6176298678271921,
              "median": 0.3842176523554036,
              "min": 0.0,
              "max": 2.5821623351716814,
              "p5": 0.0,
              "p95": 1.9983072992549165,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2222724.8125,
              "median": 25548.25,
              "min": 0.0,
              "max": 15741496.0,
              "p5": 1.05,
              "p95": 10860362.399999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17045824728354184,
              "median": 0.01961287067014274,
              "min": 0.0012655802226460978,
              "max": 0.6666666666666666,
              "p5": 0.004337913647008156,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004780382198278321,
              "median": 0.0002571569785593266,
              "min": 0.0,
              "max": 0.02659119116806332,
              "p5": 1.1382614413096504e-07,
              "p95": 0.020662814367620116,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.768805892678057e-05,
              "median": 4.255556396205265e-08,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 1.6293189672959223e-10,
              "p95": 0.00028202360656733136,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 575.125,
              "median": 12.0,
              "min": 0.0,
              "max": 3917.0,
              "p5": 0.35000000000000003,
              "p95": 2751.1499999999983,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 301992.85,
              "median": 25548.25,
              "min": 0.0,
              "max": 1795400.0,
              "p5": 1.05,
              "p95": 1287992.644999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 94.125,
              "median": 12.0,
              "min": 0.0,
              "max": 586.0,
              "p5": 0.35000000000000003,
              "p95": 413.4499999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8875612085745075,
              "median": 0.40491733338563735,
              "min": 0.0,
              "max": 2.8370380826506882,
              "p5": 0.0,
              "p95": 2.7478315710330357,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17810757064240423,
              "median": 0.04187679520042942,
              "min": 0.010043675720823408,
              "max": 0.6666666666666666,
              "p5": 0.011489453178636717,
              "p95": 0.6385057471264368,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.379608561285705,
              "median": 1.6392376681614351,
              "min": 1.0,
              "max": 22.857142857142858,
              "p5": 1.0132911392405064,
              "p95": 16.02380952380951,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.77221342084681e-05,
              "median": 2.0823608708066677e-07,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 4.217179416955658e-09,
              "p95": 0.00028202360656733136,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007867918474444121,
              "median": 0.0002571569785593266,
              "min": 0.0,
              "max": 0.02659119116806332,
              "p5": 1.1382614413096504e-07,
              "p95": 0.02627821471920707,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.10869565217391286,
            "market": 0.0014757930449633694,
            "sector": 0.015624281576164245,
            "peers": 0.03722199863673281,
            "vs_market": 0.10721985912894949,
            "vs_sector": 0.09307137059774861,
            "vs_peers": 0.07147365353718005
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 68.63799283154121,
          "score_pca_percentile": 68.63799283154121,
          "rank_pca": 176,
          "total": 558,
          "adv_notional_sgd": 213905.5,
          "adv_volume_shares": 926950.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0016255400532183522,
          "votes": 45.5,
          "trades": 45.5,
          "spread_pct": 0.022791899302315108,
          "spread_ticks": 1.040906578220011,
          "amihud": 7.865999786644192e-08,
          "volatility": 0.7137707346950689
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5144888362836125,
          "loadings": {
            "log_adv": 0.5521876962256873,
            "log_trades": 0.505842756275447,
            "log_turnover": 0.49883660987257394,
            "neg_spread": 0.41038095279525116,
            "neg_amihud": 0.09494816562357554,
            "neg_vol": 0.11378141385588546
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
          "peer_median_adv": 20172.125,
          "peer_median_score_pca": 52.1505376344086,
          "peer_median_trades": 10.75,
          "peer_median_volatility": 0.3683060614835463,
          "peer_median_spread_pct": 0.039383608388943225,
          "peer_median_spread_ticks": 1.747138808903515,
          "peer_median_amihud": 4.805205698636374e-07,
          "peer_median_turnover_ratio": 0.00019328498401780805,
          "target_vs_peer": {
            "score_pca_delta": 16.49,
            "adv_delta_pct": 960.4,
            "trades_delta_pct": 323.26,
            "volatility_delta_pct": -93.8,
            "spread_pct_delta_pct": 42.13,
            "spread_ticks_delta_pct": -40.42,
            "amihud_delta_pct": 83.63,
            "turnover_ratio_delta_pct": 741.01
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.63799283154121,
            "rank_pca": 176,
            "adv": 213905.5,
            "trades": 45.5,
            "volatility": 0.7137707346950689,
            "spread_pct": 0.022791899302315108,
            "spread_ticks": 1.040906578220011,
            "amihud": 7.865999786644192e-08,
            "turnover_ratio": 0.0016255400532183522,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 969366.0,
            "trades": 283.5,
            "volatility": 0.40033915202571796,
            "spread_pct": 0.010419602755919079,
            "spread_ticks": 1.1079139814433931,
            "amihud": 1.7371858550634843e-08,
            "turnover_ratio": 0.01395763537751079,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.91397849462365,
            "rank_pca": 247,
            "adv": 32222.25,
            "trades": 14.5,
            "volatility": 0.37441802868057755,
            "spread_pct": 0.014617132353624157,
            "spread_ticks": 2.3863636363636367,
            "amihud": 4.902399212156739e-07,
            "turnover_ratio": 0.0002595858253198106,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.38709677419355,
            "rank_pca": 289,
            "adv": 8122.0,
            "trades": 7.0,
            "volatility": 0.362194094286515,
            "spread_pct": 0.01724906184330761,
            "spread_ticks": 2.769565217391304,
            "amihud": 5.27264709853314e-07,
            "turnover_ratio": 0.00012698414271580553,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.22222222222222,
            "rank_pca": 435,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.06876657752334894,
            "spread_pct": 0.03982826433268281,
            "spread_ticks": 2.8666666666666667,
            "amihud": 3.39663529307869e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 7.526881720430108,
            "rank_pca": 517,
            "adv": 1.5,
            "trades": 0.5,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.6260877732995005e-07,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.405017921146954,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.9168586803219179,
            "spread_pct": 0.5260089395607954,
            "spread_ticks": 22.60606060606061,
            "amihud": 0.00040263502253637683,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 75.44802867383513,
            "rank_pca": 138,
            "adv": 259039.34999999998,
            "trades": 64.5,
            "volatility": 0.3377804979686005,
            "spread_pct": 0.038938952445203644,
            "spread_ticks": 1.053450226244344,
            "amihud": 0.0,
            "turnover_ratio": 0.011699420789011216,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 68.27956989247312,
            "rank_pca": 178,
            "adv": 163001.0,
            "trades": 73.0,
            "volatility": 2.0393899896798064,
            "spread_pct": 0.05536492374727668,
            "spread_ticks": 1.0438807531380752,
            "amihud": 4.7080121851160084e-07,
            "turnover_ratio": 0.014492751343405432,
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
              "mean": 0.5932187550970763,
              "median": 0.3307992523127761,
              "min": 0.0,
              "max": 9.316651759081692,
              "p5": 0.0,
              "p95": 1.9993709742146208,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3293727.5690724566,
              "median": 16329.5,
              "min": 0.0,
              "max": 262321340.0,
              "p5": 0.0,
              "p95": 13730798.349999988,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10618974116526002,
              "median": 0.029549306520816748,
              "min": 0.00023310112230684924,
              "max": 1.2394366197183098,
              "p5": 0.0032497396389484,
              "p95": 0.5147180212047248,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006972056361148784,
              "median": 0.0003192953570077732,
              "min": 0.0,
              "max": 1.6929301739750588,
              "p5": 0.0,
              "p95": 0.013761863973380788,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005629184115393677,
              "median": 8.897705956389018e-08,
              "min": 0.0,
              "max": 0.22222222222222224,
              "p5": 0.0,
              "p95": 8.90501311022758e-05,
              "count": 531
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 485.4121863799283,
              "median": 8.0,
              "min": 0.0,
              "max": 11472.0,
              "p5": 0.0,
              "p95": 2836.2999999999984,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5162700942428455,
              "median": 0.3683060614835463,
              "min": 0.0,
              "max": 1.9168586803219179,
              "p5": 0.024068302133172133,
              "p95": 1.4957778993525201,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2437559.28125,
              "median": 20172.125,
              "min": 0.0,
              "max": 18276857.0,
              "p5": 0.0,
              "p95": 12219235.149999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16235684303204123,
              "median": 0.02002048057281136,
              "min": 0.0012731774410190632,
              "max": 0.6666666666666666,
              "p5": 0.004474426301234069,
              "p95": 0.6174364621796117,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003394705893238231,
              "median": 0.00019328498401780805,
              "min": 0.0,
              "max": 0.01395763537751079,
              "p5": 0.0,
              "p95": 0.012988171693809327,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.089321113482895e-05,
              "median": 2.844499595410579e-07,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 1.7316659150360248e-10,
              "p95": 0.00026290158700122227,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 544.0625,
              "median": 10.75,
              "min": 0.0,
              "max": 4001.5,
              "p5": 0.0,
              "p95": 2700.199999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 178969.0125,
              "median": 20172.125,
              "min": 0.0,
              "max": 969366.0,
              "p5": 0.0,
              "p95": 720751.6724999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 55.375,
              "median": 10.75,
              "min": 0.0,
              "max": 283.5,
              "p5": 0.0,
              "p95": 209.82499999999987,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6874683775608106,
              "median": 0.3683060614835463,
              "min": 0.0,
              "max": 2.0393899896798064,
              "p5": 0.024068302133172133,
              "p95": 1.9965040314045455,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17113669296318448,
              "median": 0.039383608388943225,
              "min": 0.010419602755919079,
              "max": 0.6666666666666666,
              "p5": 0.011888738115115857,
              "p95": 0.6174364621796117,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.3542376359135035,
              "median": 1.747138808903515,
              "min": 1.0,
              "max": 22.60606060606061,
              "p5": 1.0153582635983263,
              "p95": 15.697272727272718,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.094216694219834e-05,
              "median": 4.805205698636374e-07,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 0.0,
              "p95": 0.00026290158700122227,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005067067510842548,
              "median": 0.00019328498401780805,
              "min": 0.0,
              "max": 0.014492751343405432,
              "p5": 0.0,
              "p95": 0.014305460755342307,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": 0.1590909090909085,
            "market": 0.011486503255267566,
            "sector": 0.02919128406746796,
            "peers": 0.04432625890136821,
            "vs_market": 0.14760440583564094,
            "vs_sector": 0.12989962502344055,
            "vs_peers": 0.1147646501895403
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 69.53405017921148,
          "score_pca_percentile": 69.53405017921148,
          "rank_pca": 171,
          "total": 558,
          "adv_notional_sgd": 160644.0,
          "adv_volume_shares": 730200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001280510649830132,
          "votes": 39.0,
          "trades": 39.0,
          "spread_pct": 0.024966391396197374,
          "spread_ticks": 1.1071428571428572,
          "amihud": 9.383156015142504e-08,
          "volatility": 0.5701433222820275
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.526427902705686,
          "loadings": {
            "log_adv": 0.5451955175196238,
            "log_trades": 0.4988128365513369,
            "log_turnover": 0.4995997390427249,
            "neg_spread": 0.41456809808169526,
            "neg_amihud": 0.06466942361680451,
            "neg_vol": 0.16822265072978845
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
          "peer_median_adv": 7357.0,
          "peer_median_score_pca": 48.74551971326165,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.3970920586588203,
          "peer_median_spread_pct": 0.03746614621730058,
          "peer_median_spread_ticks": 1.7893518518518519,
          "peer_median_amihud": 9.678938331652841e-07,
          "peer_median_turnover_ratio": 8.44932128949802e-05,
          "target_vs_peer": {
            "score_pca_delta": 20.79,
            "adv_delta_pct": 2083.6,
            "trades_delta_pct": 500.0,
            "volatility_delta_pct": -43.58,
            "spread_pct_delta_pct": 33.36,
            "spread_ticks_delta_pct": -38.13,
            "amihud_delta_pct": 90.31,
            "turnover_ratio_delta_pct": 1415.52
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.53405017921148,
            "rank_pca": 171,
            "adv": 160644.0,
            "trades": 39.0,
            "volatility": 0.5701433222820275,
            "spread_pct": 0.024966391396197374,
            "spread_ticks": 1.1071428571428572,
            "amihud": 9.383156015142504e-08,
            "turnover_ratio": 0.001280510649830132,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 82.07885304659499,
            "rank_pca": 101,
            "adv": 611184.0,
            "trades": 222.0,
            "volatility": 0.3338589828979215,
            "spread_pct": 0.010351413670595463,
            "spread_ticks": 1.2037037037037037,
            "amihud": 1.7855362634975453e-08,
            "turnover_ratio": 0.008874591594020018,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.53763440860215,
            "rank_pca": 277,
            "adv": 9114.0,
            "trades": 9.0,
            "volatility": 0.3929213486835256,
            "spread_pct": 0.015331480077499801,
            "spread_ticks": 2.4545454545454546,
            "amihud": 1.9129517802174615e-06,
            "turnover_ratio": 8.226554783770296e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.95340501792115,
            "rank_pca": 297,
            "adv": 5600.0,
            "trades": 4.0,
            "volatility": 0.3579232310423917,
            "spread_pct": 0.014243050769584209,
            "spread_ticks": 2.375,
            "amihud": 1.3939020778861702e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 24.551971326164875,
            "rank_pca": 422,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.40126276863411503,
            "spread_pct": 0.034843205574912925,
            "spread_ticks": 2.5,
            "amihud": 2.2539148236729925e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.494623655913978,
            "rank_pca": 539,
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
            "score_pca": 4.480286738351254,
            "rank_pca": 534,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.3494613134999387,
            "spread_pct": 0.4901185770750986,
            "spread_ticks": 22.0,
            "amihud": 0.00040263502253637683,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 175013.8,
            "trades": 41.0,
            "volatility": 0.4436927019600566,
            "spread_pct": 0.04008908685968823,
            "spread_ticks": 1.075,
            "amihud": 0.0,
            "turnover_ratio": 0.008208453276465225,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 54.121863799283155,
            "rank_pca": 257,
            "adv": 21751.5,
            "trades": 16.0,
            "volatility": 1.537099381872727,
            "spread_pct": 0.06843124596513879,
            "spread_ticks": 1.0168067226890756,
            "amihud": 5.418855884443982e-07,
            "turnover_ratio": 0.0024794349669154704,
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
              "mean": 0.668174770993076,
              "median": 0.38756218162966455,
              "min": 0.0,
              "max": 10.387919701256179,
              "p5": 0.0,
              "p95": 1.9708802838519561,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3116163.2221016763,
              "median": 12795.5,
              "min": 0.0,
              "max": 256901995.0,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10868948856965904,
              "median": 0.03312728830288472,
              "min": 0.00026170922585241186,
              "max": 1.2507433102081267,
              "p5": 0.003382287234148161,
              "p95": 0.49520399556783024,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003921598655798779,
              "median": 0.00023173533297420035,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011339327567896278,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002598941040169018,
              "median": 1.4061617935597627e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011672215018358743,
              "count": 543
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.421146953405,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2827.699999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4630351438801751,
              "median": 0.37542228986295867,
              "min": 0.0,
              "max": 1.3494613134999387,
              "p5": 0.1045485644005183,
              "p95": 1.0767000165736693,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1862462.0000000002,
              "median": 7357.0,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9387464.499999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1572346111236777,
              "median": 0.02014893573684859,
              "min": 0.0013561037588665807,
              "max": 0.6666666666666666,
              "p5": 0.00450446222797169,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024232667402813803,
              "median": 8.44932128949802e-05,
              "min": 0.0,
              "max": 0.00906204525261093,
              "p5": 0.0,
              "p95": 0.008996436472104111,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.103855015749815e-05,
              "median": 7.438668190187977e-07,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 3.230916658863298e-10,
              "p95": 0.00026250163483693026,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 483.125,
              "median": 6.5,
              "min": 0.0,
              "max": 3591.0,
              "p5": 0.0,
              "p95": 2411.8499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 102832.9125,
              "median": 7357.0,
              "min": 0.0,
              "max": 611184.0,
              "p5": 0.0,
              "p95": 458524.42999999976,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 36.5,
              "median": 6.5,
              "min": 0.0,
              "max": 222.0,
              "p5": 0.0,
              "p95": 158.64999999999992,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6020274660738345,
              "median": 0.3970920586588203,
              "min": 0.0,
              "max": 1.537099381872727,
              "p5": 0.11685064401427253,
              "p95": 1.471426057942251,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16750934083239807,
              "median": 0.03746614621730058,
              "min": 0.010351413670595463,
              "max": 0.6666666666666666,
              "p5": 0.011713486655241525,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.203131985117279,
              "median": 1.7893518518518519,
              "min": 1.0,
              "max": 22.0,
              "p5": 1.0058823529411764,
              "p95": 15.17499999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.10944415211541e-05,
              "median": 9.678938331652841e-07,
              "min": 0.0,
              "max": 0.00040263502253637683,
              "p5": 0.0,
              "p95": 0.00026250163483693026,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002466433282898834,
              "median": 8.44932128949802e-05,
              "min": 0.0,
              "max": 0.008874591594020018,
              "p5": 0.0,
              "p95": 0.00864144318287584,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.10869565217391242,
            "market": 0.013354531880008791,
            "sector": 0.038931405854377266,
            "peers": 0.048781832701115135,
            "vs_market": 0.09534112029390363,
            "vs_sector": 0.06976424631953515,
            "vs_peers": 0.05991381947279728
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current trading access looks strong on score, but the lighter bid book means buy-side liquidity is less balanced today.",
        "market_comparison": "The stock is outperforming peers on the day, which matters because stronger price action can keep attention and trading interest elevated."
      },
      "1w": {
        "liquidity": "Weekly tradability remains strong, with liquidity still screening above peers and no clear sign of a broader break in access.",
        "market_comparison": "The stock has outperformed peers over the week, which supports a firmer trading backdrop than the peer group."
      },
      "2w": {
        "liquidity": "Two-week liquidity still reads as strong relative to size, keeping access ahead of most peers over this window.",
        "market_comparison": "Returns are well ahead of peers over two weeks, which matters because stronger performance often coincides with better market engagement."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong, with a 69.5 liquidity score compared with a peer median of 48.7, supporting solid access for the company’s size.",
        "market_comparison": "Primary average daily volume is S$160.6K compared with a peer median of S$7.4K, which reinforces that trading access is deeper than the peer set."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 59,
      "reporting_window_days": 59,
      "available_history_days": 59,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.27360164402943343,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "27.4%",
          "display_range": null,
          "display_text": "27.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "share_pct",
          "value_pct": 27.4,
          "plain_english": "Market explains about 27.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.6450537160549924,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "64.5%",
          "display_range": null,
          "display_text": "64.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "share_pct",
          "value_pct": 64.5,
          "plain_english": "Sector explains about 64.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.08134463991557411,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.1%",
          "display_range": null,
          "display_text": "8.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "share_pct",
          "value_pct": 8.1,
          "plain_english": "Company-specific explains about 8.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.20382555192153,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.20",
          "display_range": null,
          "display_text": "2.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.20% stock move in the same direction in this state.",
          "value_num": 2.2
        },
        "beta_stock_lag": {
          "median": 0.6193902069800895,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.62",
          "display_range": null,
          "display_text": "0.62",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "lag_beta",
          "value_num": 0.62
        },
        "beta_sector": {
          "median": -3.7353487581398364,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.74",
          "display_range": null,
          "display_text": "-3.74",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state.",
          "value_num": -3.74
        },
        "beta_market_lag": {
          "median": -28.579622179153027,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-28.58",
          "display_range": null,
          "display_text": "-28.58",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "lag_beta",
          "value_num": -28.58
        },
        "beta_sector_lag": {
          "median": -11.421418987736915,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-11.42",
          "display_range": null,
          "display_text": "-11.42",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "kind": "lag_beta",
          "value_num": -11.42
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 59 trading days relative to the 252-day target."
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
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6122920571459891,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22960801356295,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.0%",
              "display_range": null,
              "display_text": "23.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 23.0,
              "plain_english": "Market explains about 23.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15809992929106087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.8%",
              "display_range": null,
              "display_text": "15.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 15.8,
              "plain_english": "Sector explains about 15.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6122920571459891,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5087719298245614,
          "expected_duration_days": 5.8,
          "current_probability": 0.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.027609165187793168,
            "low": 0.027609165187793168,
            "high": 0.027609165187793168
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.49122807017543857,
          "expected_duration_days": 5.6,
          "current_probability": 1.0,
          "n_days_effective": 28.0,
          "volatility": {
            "median": 0.042160697229242323,
            "low": 0.042160697229242323,
            "high": 0.042160697229242323
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8275862068965517,
            0.1724137931034483
          ],
          [
            0.14814814814814814,
            0.8518518518518519
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            24.0,
            5.0
          ],
          [
            4.0,
            23.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 59,
        "reporting_window_days": 59,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "2.20",
        "sector_link_display": "-3.74",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.20% stock move in the same direction in this state. This is a point estimate from 59 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state. This is a point estimate from 59 trading days.",
        "stock_persistence_display": "0.62",
        "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
        "history_limited_note": "Read is based on 59 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 64.5,
        "driver_share_display": "64.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 59 trading days relative to the 252-day target.",
        "history_days": 59,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8518518518518519,
        "effective_days": 28.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.6 days.",
        "expected_duration_days": 5.6
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
          "pct_time": 0.5087719298245614,
          "expected_duration_days": 5.8,
          "current_probability": 0.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.027609165187793168,
            "low": 0.027609165187793168,
            "high": 0.027609165187793168
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.49122807017543857,
          "expected_duration_days": 5.6,
          "current_probability": 1.0,
          "n_days_effective": 28.0,
          "volatility": {
            "median": 0.042160697229242323,
            "low": 0.042160697229242323,
            "high": 0.042160697229242323
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8275862068965517,
          0.1724137931034483
        ],
        [
          0.14814814814814814,
          0.8518518518518519
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8275862068965517,
            0.1724137931034483
          ],
          [
            0.14814814814814814,
            0.8518518518518519
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            24.0,
            5.0
          ],
          [
            4.0,
            23.0
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
        "text": "Liquidity score: 69.5 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
    "liq_subtitle": "Monthly liquidity remains strong for the stock’s size, with a lighter bid side tempering the near-term picture.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance is ahead of peers and the market, giving the tape a firmer backdrop over the past month.",
    "perf_insight": "Returns have been strong, with the stock up 10.9% over 1M compared with 4.9% for peers and 1.3% for the market. That stronger backdrop supports trading interest, even as the lighter bid side points to less even buying access today.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, with broader market direction still shaping the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 64.5% of price changes. Other influences are market 27.4%, and company-specific 8.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 27.4%, sector 64.5%, and company-specific 8.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 27.4%, sector 64.5%, and company-specific 8.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector explains 64.5% of the current driver mix, so trading conditions are being set more by the wider backdrop than by company-specific news. That matters because liquidity and price action are likely to track sector direction closely.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 64.5% of recent price moves.",
      "The monthly pattern had been clearly company-driven from February through April, so the current read looks more balanced than the recent backdrop."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look supported by strong peer-relative liquidity and a firmer return backdrop.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 21, 2026 (61 trading days • 10,927 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side depth looks lighter than the monthly liquidity score suggests, with top-10 bid depth at 0.63x ask depth and a 1-tick spread. That means the screen is tradable at the touch, but buying access is thinner than the sell side today.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 10.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is usable, but the buy side is thinner than the sell side today.",
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
    "intraday_insight": "The order book is still tradeable with a 1-tick spread, but top-10 bid depth is only 0.63x ask",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current read is centered on liquidity, returns, and sector direction.",
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
    "exec_subtitle": "Liquidity screens well relative to peers, although the buy side of the book is lighter today.",
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
        "value": "69.5/100",
        "sub": "Peer median 48.7 (+20.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$160.6K",
        "sub": "Peer median S$7.4K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.11 ticks; peers 3.75%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity stands out positively relative to peers, with a 1M score of 69.5 against a peer median of 48.7. That supports the view that the stock is accessible for its size. The near-term picture is less even because top-10 bid depth is only 0.63x ask depth, so buying access may feel thinner than the monthly standing implies despite a 1-tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.253",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.98%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.63x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.06% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-7.05% with 71.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-7.05% with 28.5% fill.",
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
        "value": "70",
        "suffix": "/100",
        "bar_pct": 70,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 171/558",
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
        "value": "2.50",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.50% • 1.11 ticks vs peers 3.75%",
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
        "value": "160.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.4K",
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
        "value": "64.5",
        "suffix": "sector",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 27.4% • Company 8.1%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is strong for the stock’s size, with a 1M score of 69.5 compared with a peer median of 48.7. That peer gap points to better access than most names in its group.",
      "The near-term book is less supportive than the monthly picture. Top-10 bid depth is only 0.63x ask depth, so buying access looks thinner even though the spread is 1 tick.",
      "The tape has a firm backdrop and is being driven mainly by broader forces. The stock is up 10.9% over 1M compared with 4.9% for peers and 1.3% for the market, while sector accounts for 64.5% of the current driver mix."
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
      "overall": "1M liquidity is strong: score 69.5 vs peer median 48.7 (+20.8 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "1M score 69.5 vs peer median 48.7 (+20.8 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +20.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is 10.9%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 10.9% vs market 1.3%.",
        "vs_sector": "Better than sector: 10.9% vs sector 3.9%.",
        "vs_peers": "Better than peers: 10.9% vs peers 4.9%."
      },
      "adv": {
        "insight": "ADV is S$160.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$160.6K vs market S$12.8K.",
        "vs_sector": "Better than sector: S$160.6K vs sector S$7.4K.",
        "vs_peers": "Better than peers: S$160.6K vs peers S$7.4K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.50% vs market 3.31%.",
        "vs_sector": "Worse than sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 3.75%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 57.01%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 57.01% vs market 38.76%.",
        "vs_sector": "Worse than sector: 57.01% vs sector 37.54%.",
        "vs_peers": "Worse than peers: 57.01% vs peers 39.71%."
      },
      "trades": {
        "insight": "Trades is 39, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 39 vs market 6.",
        "vs_sector": "Better than sector: 39 vs sector 6.",
        "vs_peers": "Better than peers: 39 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 9.38e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 9.38e-08 vs market 1.41e-07.",
        "vs_sector": "Better than sector: 9.38e-08 vs sector 7.44e-07.",
        "vs_peers": "Better than peers: 9.38e-08 vs peers 9.68e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 1M return of +10.9% compared with +4.9% for peers and +1.3% for the market. Liquidity broadly confirms that move because the 1M liquidity score of 69.5 sits 20.8 points above the peer median, which supports the idea that the stock has been accessible during the rise.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "Sector moves are the clearest influence on the stock now, with 64.5% of recent price action tied to the sector. That matters because the tape is being shaped more by broader industry direction than by company-specific news, which can make day-to-day moves track the group more closely.",
      "beta": "Current trading conditions look mixed rather than fully settled. The spread is still 1 tick, but top-10 bid depth is only 0.63x of ask depth, so buying interest is thinner than selling interest even as the stock remains accessible relative to peers on the monthly liquidity score.",
      "rolling_change": "The recent shift stands out because the stock had been clearly company-driven through February, March, and April. That makes the current sector-led pattern look more temporary than deeply established, even with a strong 1M return of 10.9% compared with 4.9% for peers and 1.3% for the market."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, which matters because price moves are likely to stay larger even though the stock remains accessible for its size on a monthly view.",
      "current": "The stock is currently trading in a high-volatility state, while 1M performance remains firm at +10.9% compared with +4.9% for peers and +1.3% for the market.",
      "transitions": "This state looks fairly persistent, with a typical run length of about 5.6 days, although the read is mixed because the trade-size history is shorter than a full year.",
      "trading_implications": "Trading conditions may be viewed as steady but less forgiving, with a 1-tick spread offset by lighter immediate buy-side depth as top-10 bid depth stands at 0.63x ask depth."
    },
    "execution": {
      "overall": "Displayed liquidity looks orderly but bid-light, with a 1 tick spread alongside top-10 bid depth at 0.63x ask depth. That matters because the screen appears tradable at the touch, but buy-side support is thinner than the offer side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size on the bid than on the ask. Trade-size context may also be read with some care because the percentile history covers Jan 22, 2026 to Ap, 2026, spanning 61 trading days and 10,927 trades rather than a full year.",
      "peer_context": "The broader liquidity picture still stands out positively, with a 1M score of 69.5 compared with a peer median of 48.7, but the current book is less supportive than that ranking suggests. In practical terms, the stock screens well on monthly liquidity while the live book shows thinner immediate buy-side depth."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 36.4% of trade count and 41.2% of trade value, compared with retail-like trades at 29.7% of count and 5.3% of value. That gap in value matters because the larger share of money is coming from institution-like activity rather than retail tickets.",
      "institutional_gap": "The read is directionally clear but not fully clean, because 25.4% of trade count sits in ambiguous flow. That leaves the mix institution-like overall, but with some noise around the edges.",
      "peer_comparison": "The mix stands out as institution-leaning relative to the peer comparison shown in the report tables, which supports the view that trading support is not coming mainly from retail flow."
    },
    "price_moving": {
      "overall": "Price-moving trades are a minority of activity at 10.3% of total trades, so most flow is not aggressively shifting the price. Ambiguous or unclear flow is 25.4% of trade count, so the read is not fully clean. The balance between positive and negative price-moving trades is shown in the report tables, so the cleaner read here is that price-moving activity remains a relatively small share of total trading.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Low short interest Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short positioning has dropped sharply, with shorts covering significantly month on month. That reduces the case for short selling as a separate source of trading stress, although the signal is mixed enough that it does not change the broader read.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 98.6% of trading there compared with 1.0% at the open and 0.4% at the close. That points to access being available through the main session rather than depending on auction periods.",
      "hhi_interpretation": "Ambiguous or unclear flow is 25.4% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is clearly the best window for liquidity because it captures nearly all trading activity at 98.6%. That makes the intraday profile look steadier than one driven by the open or close.",
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
        "TKU",
        "ITS",
        "LVR",
        "U77",
        "NXR",
        "532",
        "KUX",
        "42F",
        "J03"
      ],
      "scores": [
        69.53405017921148,
        82.07885304659499,
        50.53763440860215,
        46.95340501792115,
        24.551971326164875,
        3.494623655913978,
        4.480286738351254,
        72.75985663082437,
        54.121863799283155
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
        160644.0,
        611184.0,
        9114.0,
        5600.0,
        0.0,
        0.0,
        0.0,
        175013.8,
        21751.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.5701433222820275,
        "adv": 160644.0,
        "spread_pct": 0.024966391396197374,
        "turnover_ratio": 0.001280510649830132,
        "amihud": 9.383156015142504e-08,
        "trades": 39.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.668174770993076,
          "median": 0.38756218162966455,
          "min": 0.0,
          "max": 10.387919701256179,
          "p5": 0.0,
          "p95": 1.9708802838519561,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3116163.2221016763,
          "median": 12795.5,
          "min": 0.0,
          "max": 256901995.0,
          "p5": 0.0,
          "p95": 12714416.099999962,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10868948856965904,
          "median": 0.03312728830288472,
          "min": 0.00026170922585241186,
          "max": 1.2507433102081267,
          "p5": 0.003382287234148161,
          "p95": 0.49520399556783024,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003921598655798779,
          "median": 0.00023173533297420035,
          "min": 0.0,
          "max": 0.659152330103487,
          "p5": 0.0,
          "p95": 0.011339327567896278,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002598941040169018,
          "median": 1.4061617935597627e-07,
          "min": 0.0,
          "max": 0.11111111111111112,
          "p5": 0.0,
          "p95": 0.00011672215018358743,
          "count": 543
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 469.421146953405,
          "median": 6.0,
          "min": 0.0,
          "max": 11222.0,
          "p5": 0.0,
          "p95": 2827.699999999999,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4630351438801751,
          "median": 0.37542228986295867,
          "min": 0.0,
          "max": 1.3494613134999387,
          "p5": 0.1045485644005183,
          "p95": 1.0767000165736693,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1862462.0000000002,
          "median": 7357.0,
          "min": 0.0,
          "max": 14113154.000000002,
          "p5": 0.0,
          "p95": 9387464.499999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1572346111236777,
          "median": 0.02014893573684859,
          "min": 0.0013561037588665807,
          "max": 0.6666666666666666,
          "p5": 0.00450446222797169,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0024232667402813803,
          "median": 8.44932128949802e-05,
          "min": 0.0,
          "max": 0.00906204525261093,
          "p5": 0.0,
          "p95": 0.008996436472104111,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.103855015749815e-05,
          "median": 7.438668190187977e-07,
          "min": 0.0,
          "max": 0.00040263502253637683,
          "p5": 3.230916658863298e-10,
          "p95": 0.00026250163483693026,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 483.125,
          "median": 6.5,
          "min": 0.0,
          "max": 3591.0,
          "p5": 0.0,
          "p95": 2411.8499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 102832.9125,
          "median": 7357.0,
          "min": 0.0,
          "max": 611184.0,
          "p5": 0.0,
          "p95": 458524.42999999976,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 36.5,
          "median": 6.5,
          "min": 0.0,
          "max": 222.0,
          "p5": 0.0,
          "p95": 158.64999999999992,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6020274660738345,
          "median": 0.3970920586588203,
          "min": 0.0,
          "max": 1.537099381872727,
          "p5": 0.11685064401427253,
          "p95": 1.471426057942251,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16750934083239807,
          "median": 0.03746614621730058,
          "min": 0.010351413670595463,
          "max": 0.6666666666666666,
          "p5": 0.011713486655241525,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.203131985117279,
          "median": 1.7893518518518519,
          "min": 1.0,
          "max": 22.0,
          "p5": 1.0058823529411764,
          "p95": 15.17499999999999,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.10944415211541e-05,
          "median": 9.678938331652841e-07,
          "min": 0.0,
          "max": 0.00040263502253637683,
          "p5": 0.0,
          "p95": 0.00026250163483693026,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002466433282898834,
          "median": 8.44932128949802e-05,
          "min": 0.0,
          "max": 0.008874591594020018,
          "p5": 0.0,
          "p95": 0.00864144318287584,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.10869565217391286,
        "market": 0.0014757930449633694,
        "sector": 0.015624281576164245,
        "peers": 0.03722199863673281
      },
      {
        "horizon": "2W",
        "stock": 0.1590909090909085,
        "market": 0.011486503255267566,
        "sector": 0.02919128406746796,
        "peers": 0.04432625890136821
      },
      {
        "horizon": "1M",
        "stock": 0.10869565217391242,
        "market": 0.013354531880008791,
        "sector": 0.038931405854377266,
        "peers": 0.048781832701115135
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
      "share_market": 0.27360164402943343,
      "share_sector": 0.6450537160549924,
      "share_idio": 0.08134463991557411,
      "beta_market": 2.20382555192153,
      "beta_sector": -3.7353487581398364,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 59,
        "reporting_window_days": 59,
        "available_history_days": 59,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.27360164402943343,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "27.4%",
            "display_range": null,
            "display_text": "27.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "share_pct",
            "value_pct": 27.4,
            "plain_english": "Market explains about 27.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.6450537160549924,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Sector explains about 64.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.08134463991557411,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.1%",
            "display_range": null,
            "display_text": "8.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "share_pct",
            "value_pct": 8.1,
            "plain_english": "Company-specific explains about 8.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.20382555192153,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.20",
            "display_range": null,
            "display_text": "2.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.20% stock move in the same direction in this state.",
            "value_num": 2.2
          },
          "beta_stock_lag": {
            "median": 0.6193902069800895,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.62",
            "display_range": null,
            "display_text": "0.62",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "lag_beta",
            "value_num": 0.62
          },
          "beta_sector": {
            "median": -3.7353487581398364,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.74",
            "display_range": null,
            "display_text": "-3.74",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state.",
            "value_num": -3.74
          },
          "beta_market_lag": {
            "median": -28.579622179153027,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-28.58",
            "display_range": null,
            "display_text": "-28.58",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "lag_beta",
            "value_num": -28.58
          },
          "beta_sector_lag": {
            "median": -11.421418987736915,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-11.42",
            "display_range": null,
            "display_text": "-11.42",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
            "kind": "lag_beta",
            "value_num": -11.42
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 59 trading days relative to the 252-day target."
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
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-21",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6122920571459891,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22960801356295,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.0%",
                "display_range": null,
                "display_text": "23.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 23.0,
                "plain_english": "Market explains about 23.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15809992929106087,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.8%",
                "display_range": null,
                "display_text": "15.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 15.8,
                "plain_english": "Sector explains about 15.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6122920571459891,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.2%",
                "display_range": null,
                "display_text": "61.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 61.2,
                "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5087719298245614,
            "expected_duration_days": 5.8,
            "current_probability": 0.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.027609165187793168,
              "low": 0.027609165187793168,
              "high": 0.027609165187793168
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.49122807017543857,
            "expected_duration_days": 5.6,
            "current_probability": 1.0,
            "n_days_effective": 28.0,
            "volatility": {
              "median": 0.042160697229242323,
              "low": 0.042160697229242323,
              "high": 0.042160697229242323
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8275862068965517,
              0.1724137931034483
            ],
            [
              0.14814814814814814,
              0.8518518518518519
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              24.0,
              5.0
            ],
            [
              4.0,
              23.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 59,
          "reporting_window_days": 59,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "2.20",
          "sector_link_display": "-3.74",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.20% stock move in the same direction in this state. This is a point estimate from 59 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state. This is a point estimate from 59 trading days.",
          "stock_persistence_display": "0.62",
          "point_estimate_note": "Point estimate only because the current state has 59 trading days.",
          "history_limited_note": "Read is based on 59 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 64.5,
          "driver_share_display": "64.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 59 trading days relative to the 252-day target.",
          "history_days": 59,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8518518518518519,
          "effective_days": 28.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.6 days.",
          "expected_duration_days": 5.6
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
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.22960801356295,
          "share_sector": 0.15809992929106087,
          "share_company": 0.6122920571459891,
          "share_market_display": "23.0%",
          "share_sector_display": "15.8%",
          "share_company_display": "61.2%",
          "dominant_share_display": "61.2%"
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
          0.5087719298245614,
          0.49122807017543857
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5087719298245614,
            "expected_duration_days": 5.8,
            "current_probability": 0.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.027609165187793168,
              "low": 0.027609165187793168,
              "high": 0.027609165187793168
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.49122807017543857,
            "expected_duration_days": 5.6,
            "current_probability": 1.0,
            "n_days_effective": 28.0,
            "volatility": {
              "median": 0.042160697229242323,
              "low": 0.042160697229242323,
              "high": 0.042160697229242323
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8275862068965517,
            0.1724137931034483
          ],
          [
            0.14814814814814814,
            0.8518518518518519
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 185200.0,
          "value": 46300.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 1103800.0,
          "value": 270431.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 121000.0,
          "value": 29040.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 384800.0,
          "value": 90428.0
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 470000.0,
          "value": 108100.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 217300.0,
          "value": 48892.5
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 245400.0,
          "value": 53988.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 198000.0,
          "value": 42570.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 84800.0,
          "value": 17808.0
        },
        {
          "level": 10,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 521300.0,
          "value": 132931.5
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 950700.0,
          "value": 247182.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 385000.0,
          "value": 102025.0
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 282000.0,
          "value": 76140.0
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 260000.0,
          "value": 71500.0
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 470000.0,
          "value": 131600.0
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 169000.0,
          "value": 48164.99999999999
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 51000.0,
          "value": 14789.999999999998
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 177200.0,
          "value": 52274.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 851000.0,
          "value": 255300.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-21 08:59:57.258600",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2525,
        "spread_pct": 0.01980198019801982,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 713557.5,
        "ask_depth_notional_top10": 1131907.5,
        "bid_ask_depth_ratio": 0.6304
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 90,
        "history_limited": true,
        "trade_days_used": 61,
        "n_trades_used": 10927,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-21",
        "window_label": "Jan 22, 2026 to Apr 21, 2026",
        "window_short_label": "Jan 22-Apr 21",
        "trade_days_label": "61 trading days",
        "trade_count_label": "10,927 trades",
        "window_detail_label": "61 trading days • 10,927 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 21, 2026 (61 trading days • 10,927 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9855.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.38,
            "pct_of_adv": 6.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.93,
            "pct_of_adv": 8.99
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 169044.29,
            "impact_pct": -0.024359000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 23.69,
            "pct_of_adv": 110.47
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-21",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8138989689077102592",
            "timestamp": "2026-04-20 22:59:01.813000000",
            "local_timestamp": "2026-04-21 06:59:01",
            "posted_price": 0.3,
            "size_shares": 500000.0,
            "notional": 150000.0,
            "impact_pct": -0.023676,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.02,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147834851328",
            "timestamp": "2026-04-20 22:59:01.813000000",
            "local_timestamp": "2026-04-21 06:59:01",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.014493,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 8.41,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8137619147834849280",
            "timestamp": "2026-04-20 22:59:01.813000000",
            "local_timestamp": "2026-04-21 06:59:01",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.013389,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.85,
            "price_vs_mid_pct": 10.891,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-21",
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
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 427537.0,
            "ask_depth_notional": 770520.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 427537.0,
            "ask_depth_notional": 773648.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 427537.0,
            "ask_depth_notional": 777051.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 427537.0,
            "ask_depth_notional": 788787.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 432237.0,
            "ask_depth_notional": 770995.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 427537.0,
            "ask_depth_notional": 744851.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 411958.0,
            "ask_depth_notional": 764366.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 421146.5,
            "ask_depth_notional": 762652.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 421146.5,
            "ask_depth_notional": 761452.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 442296.5,
            "ask_depth_notional": 761380.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 449346.5,
            "ask_depth_notional": 753700.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 724981.0,
            "ask_depth_notional": 1046296.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 694298.0,
            "ask_depth_notional": 1091037.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 713557.5,
            "ask_depth_notional": 1131907.5,
            "mid_price": 0.2525
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 427537.0,
          "median_ask_depth_notional": 770757.5,
          "tightest_bucket": "15:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:30",
          "thinnest_bid_bucket": "13:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 32.7,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 157.6
        },
        {
          "ticker": "42F",
          "pct": 501.7
        },
        {
          "ticker": "J03",
          "pct": 2549.0
        },
        {
          "ticker": "LVR",
          "pct": 9023.6
        },
        {
          "ticker": "U77",
          "pct": 18324.6
        },
        {
          "ticker": "NXR",
          "pct": null
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
          "n_trades": 125,
          "n_runs": 65,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.352,
            "mixed_pct": 0.136,
            "instit_pct": 0.248,
            "ambiguous_pct": 0.256,
            "unobservable_pct": 0.008,
            "unclear_pct": 0.264,
            "retail_qty_pct": 0.014439834024896266,
            "mixed_qty_pct": 0.01027768911586339,
            "instit_qty_pct": 0.11563357804021704,
            "ambiguous_qty_pct": 0.09360995850622407,
            "unobservable_qty_pct": 0.7660389403127993,
            "unclear_qty_pct": 0.8596488988190234,
            "retail_notional_pct": 0.014458837125605455,
            "mixed_notional_pct": 0.010341495759180029,
            "instit_notional_pct": 0.1166132460143995,
            "ambiguous_notional_pct": 0.09351350887159292,
            "unobservable_notional_pct": 0.7650729122292221,
            "unclear_notional_pct": 0.8585864211008151
          },
          "run_composition": {
            "retail_pct": 0.6615384615384615,
            "mixed_pct": 0.12307692307692308,
            "instit_pct": 0.09230769230769231,
            "ambiguous_pct": 0.1076923076923077,
            "unobservable_pct": 0.015384615384615385,
            "unclear_pct": 0.12307692307692308,
            "retail_notional_pct": 0.014458837125605455,
            "mixed_notional_pct": 0.010341495759180029,
            "instit_notional_pct": 0.1166132460143995,
            "unclear_notional_pct": 0.8585864211008151
          },
          "counts": {
            "trades": {
              "retail": 44,
              "mixed": 17,
              "institutional": 31,
              "ambiguous": 32,
              "unobservable": 1,
              "unclear": 33
            },
            "runs": {
              "retail": 43,
              "mixed": 8,
              "institutional": 6,
              "ambiguous": 7,
              "unobservable": 1,
              "unclear": 8
            }
          },
          "confidence": {
            "high": 0.24615384615384617,
            "medium": 0.4461538461538462,
            "low": 0.06153846153846154,
            "na": 0.24615384615384617
          },
          "confidence_counts": {
            "high": 16,
            "medium": 29,
            "low": 4,
            "na": 16
          },
          "trade_confidence": {
            "high": 0.192,
            "medium": 0.312,
            "low": 0.096,
            "na": 0.4
          },
          "trade_confidence_counts": {
            "high": 24,
            "medium": 39,
            "low": 12,
            "na": 50
          },
          "observability": {
            "avg_feature_coverage": 0.8546153846153846,
            "observable_run_pct": 0.9846153846153847,
            "ambiguous_run_pct": 0.1076923076923077,
            "unobservable_run_pct": 0.015384615384615385
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6615384615384615,
          "dominance_gap": 0.5384615384615384,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 70,
              "SINGLE_FILL": 55
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 92,
              "MOMENTUM_REACTIVE": 22,
              "PERSISTENT_POSITIVE_IMPACT": 10,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 65
            },
            "participant_confidence": {
              "MEDIUM": 29,
              "HIGH": 16,
              "NA": 16,
              "LOW": 4
            }
          },
          "trade_size": {
            "avg": 15371.084,
            "median": 750.0
          },
          "run_size": {
            "avg": 29559.776923076923,
            "median": 750.0,
            "avg_length": 1.0923076923076922
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-128",
              "timestamp": "2026-04-21T09:06:18.086700",
              "price": 0.255,
              "size": 3200.0,
              "notional": 816.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1247,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-124",
              "timestamp": "2026-04-21T08:59:16.085300",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1246,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-123",
              "timestamp": "2026-04-21T08:56:30.477700",
              "price": 0.255,
              "size": 4100.0,
              "notional": 1045.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1245,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-122",
              "timestamp": "2026-04-21T08:54:06.536200",
              "price": 0.255,
              "size": 13300.0,
              "notional": 3391.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1244,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-121",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 16800.0,
              "notional": 4200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-120",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 6300.0,
              "notional": 1575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-119",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 34300.0,
              "notional": 8575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-118",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-117",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 32600.0,
              "notional": 8150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-116",
              "timestamp": "2026-04-21T08:42:06.271700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-115",
              "timestamp": "2026-04-21T08:42:01.666500",
              "price": 0.25,
              "size": 2500.0,
              "notional": 625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-114",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 14900.0,
              "notional": 3725.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-113",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-112",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-111",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 9900.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-110",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 100000.0,
              "notional": 25000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-109",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200000.0,
              "notional": 50000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-108",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-107",
              "timestamp": "2026-04-21T08:41:09.305000",
              "price": 0.25,
              "size": 31400.0,
              "notional": 7850.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-106",
              "timestamp": "2026-04-21T08:33:26.613200",
              "price": 0.25,
              "size": 12800.0,
              "notional": 3200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-105",
              "timestamp": "2026-04-21T08:33:26.613100",
              "price": 0.25,
              "size": 7200.0,
              "notional": 1800.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-104",
              "timestamp": "2026-04-21T08:32:17.981700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1238,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-103",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 7800.0,
              "notional": 1950.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-102",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 2200.0,
              "notional": 550.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-04-21T08:27:00.663700",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1236,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-04-21T08:23:45.578200",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1235,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-04-21T08:12:16.727000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1234,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-04-21T08:09:53.772100",
              "price": 0.25,
              "size": 5700.0,
              "notional": 1425.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-04-21T08:09:53.772000",
              "price": 0.25,
              "size": 4300.0,
              "notional": 1075.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-04-21T08:05:30.574900",
              "price": 0.25,
              "size": 25700.0,
              "notional": 6425.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1232,
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
              "retail_pct": 0.352,
              "mixed_pct": 0.136,
              "instit_pct": 0.248,
              "ambiguous_pct": 0.256,
              "unobservable_pct": 0.008,
              "unclear_pct": 0.264,
              "retail_qty_pct": 0.014439834024896266,
              "mixed_qty_pct": 0.01027768911586339,
              "instit_qty_pct": 0.11563357804021704,
              "ambiguous_qty_pct": 0.09360995850622407,
              "unobservable_qty_pct": 0.7660389403127993,
              "unclear_qty_pct": 0.8596488988190234,
              "retail_notional_pct": 0.014458837125605455,
              "mixed_notional_pct": 0.010341495759180029,
              "instit_notional_pct": 0.1166132460143995,
              "ambiguous_notional_pct": 0.09351350887159292,
              "unobservable_notional_pct": 0.7650729122292221,
              "unclear_notional_pct": 0.8585864211008151,
              "run_retail_pct": 0.6615384615384615,
              "run_mixed_pct": 0.12307692307692308,
              "run_instit_pct": 0.09230769230769231,
              "run_unclear_pct": 0.12307692307692308,
              "avg_trade_size": 15371.084,
              "avg_run_notional": 29559.776923076923,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.24615384615384617,
              "medium_confidence_pct": 0.4461538461538462,
              "low_confidence_pct": 0.06153846153846154,
              "na_confidence_pct": 0.24615384615384617,
              "avg_feature_coverage": 0.8546153846153846,
              "observable_run_pct": 0.9846153846153847,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6104972375690608,
              "mixed_pct": 0.1574585635359116,
              "instit_pct": 0.16022099447513813,
              "ambiguous_pct": 0.0718232044198895,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0718232044198895,
              "retail_qty_pct": 0.08066719390322813,
              "mixed_qty_pct": 0.12236681285498598,
              "instit_qty_pct": 0.6627363577539722,
              "ambiguous_qty_pct": 0.13422963548781364,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.13422963548781364,
              "retail_notional_pct": 0.07952697463900173,
              "mixed_notional_pct": 0.121796409566537,
              "instit_notional_pct": 0.6632414629459049,
              "ambiguous_notional_pct": 0.13543515284855634,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.13543515284855634,
              "run_retail_pct": 0.8283018867924529,
              "run_mixed_pct": 0.1169811320754717,
              "run_instit_pct": 0.03018867924528302,
              "run_unclear_pct": 0.024528301886792454,
              "avg_trade_size": 2084.267955801105,
              "avg_run_notional": 2847.188679245283,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.44339622641509435,
              "medium_confidence_pct": 0.37358490566037733,
              "low_confidence_pct": 0.04150943396226415,
              "na_confidence_pct": 0.14150943396226415,
              "avg_feature_coverage": 0.8559433962264148,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.367816091954023,
              "mixed_pct": 0.28735632183908044,
              "instit_pct": 0.2988505747126437,
              "ambiguous_pct": 0.04597701149425287,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04597701149425287,
              "retail_qty_pct": 0.06339123671247084,
              "mixed_qty_pct": 0.3945452085987082,
              "instit_qty_pct": 0.5190055348265716,
              "ambiguous_qty_pct": 0.023058019862249327,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.023058019862249327,
              "retail_notional_pct": 0.06493895902184002,
              "mixed_notional_pct": 0.39652834227178435,
              "instit_notional_pct": 0.5151198775767072,
              "ambiguous_notional_pct": 0.023412821129668415,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.023412821129668415,
              "run_retail_pct": 0.6078431372549019,
              "run_mixed_pct": 0.21568627450980393,
              "run_instit_pct": 0.09803921568627451,
              "run_unclear_pct": 0.0784313725490196,
              "avg_trade_size": 5623.601149425288,
              "avg_run_notional": 9593.201960784314,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0196078431372549,
              "medium_confidence_pct": 0.5490196078431373,
              "low_confidence_pct": 0.13725490196078433,
              "na_confidence_pct": 0.29411764705882354,
              "avg_feature_coverage": 0.8529411764705884,
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
              "instit_pct": 0.4,
              "ambiguous_pct": 0.6,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.6,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.40816326530612246,
              "ambiguous_qty_pct": 0.5918367346938775,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5918367346938775,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.40845691603726775,
              "ambiguous_notional_pct": 0.5915430839627323,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5915430839627323,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 1813.9,
              "avg_run_notional": 3023.1666666666665,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.8000000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19718309859154928,
              "mixed_pct": 0.11267605633802817,
              "instit_pct": 0.323943661971831,
              "ambiguous_pct": 0.36619718309859156,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36619718309859156,
              "retail_qty_pct": 0.06901838709302731,
              "mixed_qty_pct": 0.1509995005401136,
              "instit_qty_pct": 0.37758005877365175,
              "ambiguous_qty_pct": 0.40240205359320735,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.40240205359320735,
              "retail_notional_pct": 0.06874114506906846,
              "mixed_notional_pct": 0.14916341985865844,
              "instit_notional_pct": 0.37795111656462416,
              "ambiguous_notional_pct": 0.404144318507649,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.404144318507649,
              "run_retail_pct": 0.34210526315789475,
              "run_mixed_pct": 0.13157894736842105,
              "run_instit_pct": 0.18421052631578946,
              "run_unclear_pct": 0.34210526315789475,
              "avg_trade_size": 2672.180281690141,
              "avg_run_notional": 4992.757894736842,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.34210526315789475,
              "low_confidence_pct": 0.18421052631578946,
              "na_confidence_pct": 0.47368421052631576,
              "avg_feature_coverage": 0.8460526315789477,
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
              "retail_pct": 0.3076923076923077,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.15384615384615385,
              "ambiguous_pct": 0.46153846153846156,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.46153846153846156,
              "retail_qty_pct": 0.15121951219512195,
              "mixed_qty_pct": 0.12195121951219512,
              "instit_qty_pct": 0.13170731707317074,
              "ambiguous_qty_pct": 0.5951219512195122,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5951219512195122,
              "retail_notional_pct": 0.14974369085173503,
              "mixed_notional_pct": 0.12322555205047318,
              "instit_notional_pct": 0.13108734227129337,
              "ambiguous_notional_pct": 0.5959434148264984,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5959434148264984,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.1111111111111111,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 1248.4923076923076,
              "avg_run_notional": 1803.3777777777777,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4444444444444444,
              "na_confidence_pct": 0.5555555555555556,
              "avg_feature_coverage": 0.8666666666666667,
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
              "avg_trade_size": 1.0,
              "avg_run_notional": 1.0,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 540,
          "n_runs": 218,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-15",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.2222222222222222,
            "mixed_pct": 0.12222222222222222,
            "instit_pct": 0.32407407407407407,
            "ambiguous_pct": 0.3296296296296296,
            "unobservable_pct": 0.001851851851851852,
            "unclear_pct": 0.33148148148148143,
            "retail_qty_pct": 0.04089781106747734,
            "mixed_qty_pct": 0.1218291813867451,
            "instit_qty_pct": 0.3029076261378052,
            "ambiguous_qty_pct": 0.23111913028975178,
            "unobservable_qty_pct": 0.30324625111822057,
            "unclear_qty_pct": 0.5343653814079723,
            "retail_notional_pct": 0.04064866854466542,
            "mixed_notional_pct": 0.12091128827022664,
            "instit_notional_pct": 0.3011180370268437,
            "ambiguous_notional_pct": 0.22954488662338873,
            "unobservable_notional_pct": 0.30777711953487547,
            "unclear_notional_pct": 0.5373220061582642
          },
          "run_composition": {
            "retail_pct": 0.5045871559633027,
            "mixed_pct": 0.13302752293577982,
            "instit_pct": 0.13302752293577982,
            "ambiguous_pct": 0.22477064220183487,
            "unobservable_pct": 0.0045871559633027525,
            "unclear_pct": 0.22935779816513763,
            "retail_notional_pct": 0.04064866854466542,
            "mixed_notional_pct": 0.12091128827022664,
            "instit_notional_pct": 0.3011180370268437,
            "unclear_notional_pct": 0.5373220061582642
          },
          "counts": {
            "trades": {
              "retail": 120,
              "mixed": 66,
              "institutional": 175,
              "ambiguous": 178,
              "unobservable": 1,
              "unclear": 179
            },
            "runs": {
              "retail": 110,
              "mixed": 29,
              "institutional": 29,
              "ambiguous": 49,
              "unobservable": 1,
              "unclear": 50
            }
          },
          "confidence": {
            "high": 0.09174311926605505,
            "medium": 0.3073394495412844,
            "low": 0.23853211009174313,
            "na": 0.3623853211009174
          },
          "confidence_counts": {
            "high": 20,
            "medium": 67,
            "low": 52,
            "na": 79
          },
          "trade_confidence": {
            "high": 0.05185185185185185,
            "medium": 0.26851851851851855,
            "low": 0.22592592592592592,
            "na": 0.4537037037037037
          },
          "trade_confidence_counts": {
            "high": 28,
            "medium": 145,
            "low": 122,
            "na": 245
          },
          "observability": {
            "avg_feature_coverage": 0.8499999999999998,
            "observable_run_pct": 0.9954128440366973,
            "ambiguous_run_pct": 0.22477064220183487,
            "unobservable_run_pct": 0.0045871559633027525
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5045871559633027,
          "dominance_gap": 0.2798165137614679,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 354,
              "SINGLE_FILL": 170,
              "WALK_BOOK": 16
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 398,
              "PERSISTENT_POSITIVE_IMPACT": 83,
              "MOMENTUM_REACTIVE": 48,
              "SHORT_HORIZON_POSITIVE_IMPACT": 10,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 216,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "NA": 79,
              "MEDIUM": 67,
              "LOW": 52,
              "HIGH": 20
            }
          },
          "trade_size": {
            "avg": 8844.784259259259,
            "median": 2350.0
          },
          "run_size": {
            "avg": 21909.09862385321,
            "median": 2475.0,
            "avg_length": 1.1697247706422018
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-128",
              "timestamp": "2026-04-21T09:06:18.086700",
              "price": 0.255,
              "size": 3200.0,
              "notional": 816.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1247,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-124",
              "timestamp": "2026-04-21T08:59:16.085300",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1246,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-123",
              "timestamp": "2026-04-21T08:56:30.477700",
              "price": 0.255,
              "size": 4100.0,
              "notional": 1045.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1245,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-122",
              "timestamp": "2026-04-21T08:54:06.536200",
              "price": 0.255,
              "size": 13300.0,
              "notional": 3391.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1244,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-121",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 16800.0,
              "notional": 4200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-120",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 6300.0,
              "notional": 1575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-119",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 34300.0,
              "notional": 8575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-118",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-117",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 32600.0,
              "notional": 8150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-116",
              "timestamp": "2026-04-21T08:42:06.271700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-115",
              "timestamp": "2026-04-21T08:42:01.666500",
              "price": 0.25,
              "size": 2500.0,
              "notional": 625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-114",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 14900.0,
              "notional": 3725.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-113",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-112",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-111",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 9900.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-110",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 100000.0,
              "notional": 25000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-109",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200000.0,
              "notional": 50000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-108",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-107",
              "timestamp": "2026-04-21T08:41:09.305000",
              "price": 0.25,
              "size": 31400.0,
              "notional": 7850.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-106",
              "timestamp": "2026-04-21T08:33:26.613200",
              "price": 0.25,
              "size": 12800.0,
              "notional": 3200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-105",
              "timestamp": "2026-04-21T08:33:26.613100",
              "price": 0.25,
              "size": 7200.0,
              "notional": 1800.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-104",
              "timestamp": "2026-04-21T08:32:17.981700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1238,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-103",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 7800.0,
              "notional": 1950.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-102",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 2200.0,
              "notional": 550.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-04-21T08:27:00.663700",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1236,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-04-21T08:23:45.578200",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1235,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-04-21T08:12:16.727000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1234,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-04-21T08:09:53.772100",
              "price": 0.25,
              "size": 5700.0,
              "notional": 1425.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-04-21T08:09:53.772000",
              "price": 0.25,
              "size": 4300.0,
              "notional": 1075.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-04-21T08:05:30.574900",
              "price": 0.25,
              "size": 25700.0,
              "notional": 6425.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1232,
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
              "retail_pct": 0.2222222222222222,
              "mixed_pct": 0.12222222222222222,
              "instit_pct": 0.32407407407407407,
              "ambiguous_pct": 0.3296296296296296,
              "unobservable_pct": 0.001851851851851852,
              "unclear_pct": 0.33148148148148143,
              "retail_qty_pct": 0.04089781106747734,
              "mixed_qty_pct": 0.1218291813867451,
              "instit_qty_pct": 0.3029076261378052,
              "ambiguous_qty_pct": 0.23111913028975178,
              "unobservable_qty_pct": 0.30324625111822057,
              "unclear_qty_pct": 0.5343653814079723,
              "retail_notional_pct": 0.04064866854466542,
              "mixed_notional_pct": 0.12091128827022664,
              "instit_notional_pct": 0.3011180370268437,
              "ambiguous_notional_pct": 0.22954488662338873,
              "unobservable_notional_pct": 0.30777711953487547,
              "unclear_notional_pct": 0.5373220061582642,
              "run_retail_pct": 0.5045871559633027,
              "run_mixed_pct": 0.13302752293577982,
              "run_instit_pct": 0.13302752293577982,
              "run_unclear_pct": 0.22935779816513763,
              "avg_trade_size": 8844.784259259259,
              "avg_run_notional": 21909.09862385321,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.09174311926605505,
              "medium_confidence_pct": 0.3073394495412844,
              "low_confidence_pct": 0.23853211009174313,
              "na_confidence_pct": 0.3623853211009174,
              "avg_feature_coverage": 0.8499999999999998,
              "observable_run_pct": 0.9954128440366973,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.30268199233716475,
              "mixed_pct": 0.1724137931034483,
              "instit_pct": 0.32567049808429116,
              "ambiguous_pct": 0.19923371647509577,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19923371647509577,
              "retail_qty_pct": 0.06527308676158763,
              "mixed_qty_pct": 0.20786738115981812,
              "instit_qty_pct": 0.5646266216329112,
              "ambiguous_qty_pct": 0.162232910445683,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.162232910445683,
              "retail_notional_pct": 0.06495526145834044,
              "mixed_notional_pct": 0.20939465100105198,
              "instit_notional_pct": 0.5651569655860387,
              "ambiguous_notional_pct": 0.16049312195456888,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.16049312195456888,
              "run_retail_pct": 0.5314685314685315,
              "run_mixed_pct": 0.15384615384615385,
              "run_instit_pct": 0.13286713286713286,
              "run_unclear_pct": 0.18181818181818182,
              "avg_trade_size": 5278.776245210728,
              "avg_run_notional": 9634.689510489512,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.006993006993006993,
              "medium_confidence_pct": 0.35664335664335667,
              "low_confidence_pct": 0.3006993006993007,
              "na_confidence_pct": 0.3356643356643357,
              "avg_feature_coverage": 0.8499999999999996,
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
              "retail_pct": 0.3664940828402367,
              "mixed_pct": 0.17566568047337278,
              "instit_pct": 0.27144970414201186,
              "ambiguous_pct": 0.1863905325443787,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1863905325443787,
              "retail_qty_pct": 0.0681678710533896,
              "mixed_qty_pct": 0.15195311032349368,
              "instit_qty_pct": 0.5367014415068819,
              "ambiguous_qty_pct": 0.2431775771162348,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2431775771162348,
              "retail_notional_pct": 0.06802667571215372,
              "mixed_notional_pct": 0.15081356916598615,
              "instit_notional_pct": 0.537468445679078,
              "ambiguous_notional_pct": 0.24369130944278214,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24369130944278214,
              "run_retail_pct": 0.6685393258426966,
              "run_mixed_pct": 0.14115168539325842,
              "run_instit_pct": 0.07654494382022473,
              "run_unclear_pct": 0.11376404494382023,
              "avg_trade_size": 3083.800480769231,
              "avg_run_notional": 5855.755969101124,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.18890449438202248,
              "medium_confidence_pct": 0.4276685393258427,
              "low_confidence_pct": 0.12851123595505617,
              "na_confidence_pct": 0.25491573033707865,
              "avg_feature_coverage": 0.8582162921348314,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19796954314720813,
              "mixed_pct": 0.09137055837563451,
              "instit_pct": 0.34517766497461927,
              "ambiguous_pct": 0.3532994923857868,
              "unobservable_pct": 0.012182741116751269,
              "unclear_pct": 0.36548223350253806,
              "retail_qty_pct": 0.07741353729663358,
              "mixed_qty_pct": 0.0861027466343132,
              "instit_qty_pct": 0.4020935960591133,
              "ambiguous_qty_pct": 0.4170318004414495,
              "unobservable_qty_pct": 0.017358319568490446,
              "unclear_qty_pct": 0.43439012000993993,
              "retail_notional_pct": 0.0772993923182518,
              "mixed_notional_pct": 0.08751324572513226,
              "instit_notional_pct": 0.4038163953098314,
              "ambiguous_notional_pct": 0.4132315265787467,
              "unobservable_notional_pct": 0.01813944006803788,
              "unclear_notional_pct": 0.43137096664678454,
              "run_retail_pct": 0.39770114942528734,
              "run_mixed_pct": 0.10574712643678161,
              "run_instit_pct": 0.14942528735632185,
              "run_unclear_pct": 0.3471264367816092,
              "avg_trade_size": 2609.1168527918776,
              "avg_run_notional": 5908.000229885057,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.029885057471264367,
              "medium_confidence_pct": 0.3425287356321839,
              "low_confidence_pct": 0.17471264367816092,
              "na_confidence_pct": 0.4528735632183908,
              "avg_feature_coverage": 0.8435632183908044,
              "observable_run_pct": 0.993103448275862,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07142857142857142,
              "mixed_pct": 0.014285714285714285,
              "instit_pct": 0.32857142857142857,
              "ambiguous_pct": 0.45714285714285713,
              "unobservable_pct": 0.12857142857142856,
              "unclear_pct": 0.5857142857142856,
              "retail_qty_pct": 0.044850498338870434,
              "mixed_qty_pct": 0.02547065337763012,
              "instit_qty_pct": 0.37375415282392027,
              "ambiguous_qty_pct": 0.43410852713178294,
              "unobservable_qty_pct": 0.12181616832779624,
              "unclear_qty_pct": 0.5559246954595791,
              "retail_notional_pct": 0.043520962878626744,
              "mixed_notional_pct": 0.024747582168728965,
              "instit_notional_pct": 0.36822975965568583,
              "ambiguous_notional_pct": 0.43834373866152865,
              "unobservable_notional_pct": 0.12515795663542983,
              "unclear_notional_pct": 0.5635016952969585,
              "run_retail_pct": 0.16129032258064516,
              "run_mixed_pct": 0.03225806451612903,
              "run_instit_pct": 0.1935483870967742,
              "run_unclear_pct": 0.6129032258064515,
              "avg_trade_size": 2283.6285714285714,
              "avg_run_notional": 5156.580645161291,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3548387096774194,
              "na_confidence_pct": 0.6451612903225806,
              "avg_feature_coverage": 0.8145161290322585,
              "observable_run_pct": 0.935483870967742,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.09615384615384616,
              "instit_pct": 0.19230769230769232,
              "ambiguous_pct": 0.46153846153846156,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.46153846153846156,
              "retail_qty_pct": 0.15773179077725272,
              "mixed_qty_pct": 0.04888381945576014,
              "instit_qty_pct": 0.22828743685839986,
              "ambiguous_qty_pct": 0.5650969529085873,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5650969529085873,
              "retail_notional_pct": 0.1574050964328885,
              "mixed_notional_pct": 0.04934610296288684,
              "instit_notional_pct": 0.22803282780086034,
              "ambiguous_notional_pct": 0.5652159728033643,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5652159728033643,
              "run_retail_pct": 0.32432432432432434,
              "run_mixed_pct": 0.08108108108108109,
              "run_instit_pct": 0.16216216216216217,
              "run_unclear_pct": 0.43243243243243246,
              "avg_trade_size": 2357.757692307692,
              "avg_run_notional": 3313.6054054054052,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4864864864864865,
              "na_confidence_pct": 0.5135135135135135,
              "avg_feature_coverage": 0.8216216216216219,
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
              "avg_trade_size": 334.1666666666667,
              "avg_run_notional": 334.1666666666667,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.5499999999999999,
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
              "avg_trade_size": 421.75000000000006,
              "avg_run_notional": 421.75000000000006,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
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
          "n_trades": 790,
          "n_runs": 367,
          "n_trade_days": 10,
          "first_trade_date": "2026-04-08",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.2949367088607595,
            "mixed_pct": 0.10632911392405063,
            "instit_pct": 0.3291139240506329,
            "ambiguous_pct": 0.2683544303797468,
            "unobservable_pct": 0.0012658227848101266,
            "unclear_pct": 0.26962025316455696,
            "retail_qty_pct": 0.04756063767359979,
            "mixed_qty_pct": 0.11846759470561387,
            "instit_qty_pct": 0.36476331746756213,
            "ambiguous_qty_pct": 0.22470170176696877,
            "unobservable_qty_pct": 0.24450674838625547,
            "unclear_qty_pct": 0.4692084501532242,
            "retail_notional_pct": 0.04704273634050912,
            "mixed_notional_pct": 0.11807432888792223,
            "instit_notional_pct": 0.35957310852869856,
            "ambiguous_notional_pct": 0.2239537860546301,
            "unobservable_notional_pct": 0.25135604018824004,
            "unclear_notional_pct": 0.4753098262428701
          },
          "run_composition": {
            "retail_pct": 0.5885558583106267,
            "mixed_pct": 0.10626702997275204,
            "instit_pct": 0.1307901907356948,
            "ambiguous_pct": 0.17166212534059946,
            "unobservable_pct": 0.0027247956403269754,
            "unclear_pct": 0.17438692098092645,
            "retail_notional_pct": 0.04704273634050912,
            "mixed_notional_pct": 0.11807432888792223,
            "instit_notional_pct": 0.35957310852869856,
            "unclear_notional_pct": 0.4753098262428701
          },
          "counts": {
            "trades": {
              "retail": 233,
              "mixed": 84,
              "institutional": 260,
              "ambiguous": 212,
              "unobservable": 1,
              "unclear": 213
            },
            "runs": {
              "retail": 216,
              "mixed": 39,
              "institutional": 48,
              "ambiguous": 63,
              "unobservable": 1,
              "unclear": 64
            }
          },
          "confidence": {
            "high": 0.11989100817438691,
            "medium": 0.29427792915531337,
            "low": 0.30517711171662126,
            "na": 0.28065395095367845
          },
          "confidence_counts": {
            "high": 44,
            "medium": 108,
            "low": 112,
            "na": 103
          },
          "trade_confidence": {
            "high": 0.06962025316455696,
            "medium": 0.2582278481012658,
            "low": 0.29620253164556964,
            "na": 0.3759493670886076
          },
          "trade_confidence_counts": {
            "high": 55,
            "medium": 204,
            "low": 234,
            "na": 297
          },
          "observability": {
            "avg_feature_coverage": 0.8483651226158035,
            "observable_run_pct": 0.997275204359673,
            "ambiguous_run_pct": 0.17166212534059946,
            "unobservable_run_pct": 0.0027247956403269754
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5885558583106267,
          "dominance_gap": 0.4168937329700273,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 483,
              "SINGLE_FILL": 291,
              "WALK_BOOK": 16
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 596,
              "PERSISTENT_POSITIVE_IMPACT": 120,
              "MOMENTUM_REACTIVE": 61,
              "SHORT_HORIZON_POSITIVE_IMPACT": 12,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 365,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 112,
              "MEDIUM": 108,
              "NA": 103,
              "HIGH": 44
            }
          },
          "trade_size": {
            "avg": 7402.883544303798,
            "median": 1931.0
          },
          "run_size": {
            "avg": 15935.362397820163,
            "median": 1840.0,
            "avg_length": 1.1280653950953679
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-128",
              "timestamp": "2026-04-21T09:06:18.086700",
              "price": 0.255,
              "size": 3200.0,
              "notional": 816.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1247,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-124",
              "timestamp": "2026-04-21T08:59:16.085300",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1246,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-123",
              "timestamp": "2026-04-21T08:56:30.477700",
              "price": 0.255,
              "size": 4100.0,
              "notional": 1045.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1245,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-122",
              "timestamp": "2026-04-21T08:54:06.536200",
              "price": 0.255,
              "size": 13300.0,
              "notional": 3391.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1244,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-121",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 16800.0,
              "notional": 4200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-120",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 6300.0,
              "notional": 1575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-119",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 34300.0,
              "notional": 8575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-118",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-117",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 32600.0,
              "notional": 8150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-116",
              "timestamp": "2026-04-21T08:42:06.271700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-115",
              "timestamp": "2026-04-21T08:42:01.666500",
              "price": 0.25,
              "size": 2500.0,
              "notional": 625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-114",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 14900.0,
              "notional": 3725.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-113",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-112",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-111",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 9900.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-110",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 100000.0,
              "notional": 25000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-109",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200000.0,
              "notional": 50000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-108",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-107",
              "timestamp": "2026-04-21T08:41:09.305000",
              "price": 0.25,
              "size": 31400.0,
              "notional": 7850.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-106",
              "timestamp": "2026-04-21T08:33:26.613200",
              "price": 0.25,
              "size": 12800.0,
              "notional": 3200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-105",
              "timestamp": "2026-04-21T08:33:26.613100",
              "price": 0.25,
              "size": 7200.0,
              "notional": 1800.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-104",
              "timestamp": "2026-04-21T08:32:17.981700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1238,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-103",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 7800.0,
              "notional": 1950.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-102",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 2200.0,
              "notional": 550.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-04-21T08:27:00.663700",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1236,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-04-21T08:23:45.578200",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1235,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-04-21T08:12:16.727000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1234,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-04-21T08:09:53.772100",
              "price": 0.25,
              "size": 5700.0,
              "notional": 1425.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-04-21T08:09:53.772000",
              "price": 0.25,
              "size": 4300.0,
              "notional": 1075.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-04-21T08:05:30.574900",
              "price": 0.25,
              "size": 25700.0,
              "notional": 6425.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1232,
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
              "retail_pct": 0.2949367088607595,
              "mixed_pct": 0.10632911392405063,
              "instit_pct": 0.3291139240506329,
              "ambiguous_pct": 0.2683544303797468,
              "unobservable_pct": 0.0012658227848101266,
              "unclear_pct": 0.26962025316455696,
              "retail_qty_pct": 0.04756063767359979,
              "mixed_qty_pct": 0.11846759470561387,
              "instit_qty_pct": 0.36476331746756213,
              "ambiguous_qty_pct": 0.22470170176696877,
              "unobservable_qty_pct": 0.24450674838625547,
              "unclear_qty_pct": 0.4692084501532242,
              "retail_notional_pct": 0.04704273634050912,
              "mixed_notional_pct": 0.11807432888792223,
              "instit_notional_pct": 0.35957310852869856,
              "ambiguous_notional_pct": 0.2239537860546301,
              "unobservable_notional_pct": 0.25135604018824004,
              "unclear_notional_pct": 0.4753098262428701,
              "run_retail_pct": 0.5885558583106267,
              "run_mixed_pct": 0.10626702997275204,
              "run_instit_pct": 0.1307901907356948,
              "run_unclear_pct": 0.17438692098092645,
              "avg_trade_size": 7402.883544303798,
              "avg_run_notional": 15935.362397820163,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11989100817438691,
              "medium_confidence_pct": 0.29427792915531337,
              "low_confidence_pct": 0.30517711171662126,
              "na_confidence_pct": 0.28065395095367845,
              "avg_feature_coverage": 0.8483651226158035,
              "observable_run_pct": 0.997275204359673,
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
              "instit_pct": 0.75,
              "ambiguous_pct": 0.25,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.9174311926605505,
              "ambiguous_qty_pct": 0.08256880733944955,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.08256880733944955,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.9192523364485982,
              "ambiguous_notional_pct": 0.08074766355140187,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08074766355140187,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.5,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 1003.125,
              "avg_run_notional": 2006.25,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
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
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25565217391304346,
              "mixed_pct": 0.12695652173913044,
              "instit_pct": 0.3234782608695652,
              "ambiguous_pct": 0.29043478260869565,
              "unobservable_pct": 0.0034782608695652175,
              "unclear_pct": 0.29391304347826086,
              "retail_qty_pct": 0.05092260172618001,
              "mixed_qty_pct": 0.12843455508064933,
              "instit_qty_pct": 0.5866038870627832,
              "ambiguous_qty_pct": 0.23394082251515486,
              "unobservable_qty_pct": 9.813361523266897e-05,
              "unclear_qty_pct": 0.23403895613038753,
              "retail_notional_pct": 0.05116897315731045,
              "mixed_notional_pct": 0.13003838761286182,
              "instit_notional_pct": 0.5847825316492855,
              "ambiguous_notional_pct": 0.23391244703042835,
              "unobservable_notional_pct": 9.766055011385975e-05,
              "unclear_notional_pct": 0.23401010758054222,
              "run_retail_pct": 0.46534653465346537,
              "run_mixed_pct": 0.1188118811881188,
              "run_instit_pct": 0.12211221122112212,
              "run_unclear_pct": 0.29372937293729373,
              "avg_trade_size": 4857.9982608695655,
              "avg_run_notional": 9218.973597359736,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.013201320132013201,
              "medium_confidence_pct": 0.33003300330033003,
              "low_confidence_pct": 0.24422442244224424,
              "na_confidence_pct": 0.41254125412541254,
              "avg_feature_coverage": 0.8422442244224422,
              "observable_run_pct": 0.9966996699669967,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3513364563240562,
              "mixed_pct": 0.16037475888674566,
              "instit_pct": 0.2725268669054836,
              "ambiguous_pct": 0.2143841278589143,
              "unobservable_pct": 0.0013777900248002205,
              "unclear_pct": 0.21576191788371452,
              "retail_qty_pct": 0.05980496656947295,
              "mixed_qty_pct": 0.13508751838899216,
              "instit_qty_pct": 0.5005681868233511,
              "ambiguous_qty_pct": 0.3027775086108933,
              "unobservable_qty_pct": 0.0017618196072904096,
              "unclear_qty_pct": 0.3045393282181837,
              "retail_notional_pct": 0.059895530699926786,
              "mixed_notional_pct": 0.13471497367211657,
              "instit_notional_pct": 0.5018762668597735,
              "ambiguous_notional_pct": 0.3017975392825428,
              "unobservable_notional_pct": 0.0017156894856402566,
              "unclear_notional_pct": 0.3035132287681831,
              "run_retail_pct": 0.6498940677966102,
              "run_mixed_pct": 0.13241525423728814,
              "run_instit_pct": 0.08209745762711865,
              "run_unclear_pct": 0.13559322033898305,
              "avg_trade_size": 3239.0349958666297,
              "avg_run_notional": 6225.878177966101,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1461864406779661,
              "medium_confidence_pct": 0.4518008474576271,
              "low_confidence_pct": 0.1340042372881356,
              "na_confidence_pct": 0.2680084745762712,
              "avg_feature_coverage": 0.8548199152542371,
              "observable_run_pct": 0.9994703389830508,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2001654259718776,
              "mixed_pct": 0.11827956989247312,
              "instit_pct": 0.3399503722084367,
              "ambiguous_pct": 0.3316790736145575,
              "unobservable_pct": 0.009925558312655087,
              "unclear_pct": 0.3416046319272126,
              "retail_qty_pct": 0.07377959944108058,
              "mixed_qty_pct": 0.12763483931066605,
              "instit_qty_pct": 0.3887731718677224,
              "ambiguous_qty_pct": 0.39565309734513276,
              "unobservable_qty_pct": 0.01415929203539823,
              "unclear_qty_pct": 0.409812389380531,
              "retail_notional_pct": 0.07468481195751488,
              "mixed_notional_pct": 0.11855352430381041,
              "instit_notional_pct": 0.3939803359539214,
              "ambiguous_notional_pct": 0.39712978226094164,
              "unobservable_notional_pct": 0.01565154552381175,
              "unclear_notional_pct": 0.4127813277847534,
              "run_retail_pct": 0.4059590316573557,
              "run_mixed_pct": 0.12849162011173185,
              "run_instit_pct": 0.14338919925512103,
              "run_unclear_pct": 0.3221601489757914,
              "avg_trade_size": 2463.599503722084,
              "avg_run_notional": 5546.539664804469,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.024208566108007448,
              "medium_confidence_pct": 0.2774674115456238,
              "low_confidence_pct": 0.24767225325884543,
              "na_confidence_pct": 0.4506517690875233,
              "avg_feature_coverage": 0.8436685288640595,
              "observable_run_pct": 0.994413407821229,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.12857142857142856,
              "mixed_pct": 0.05714285714285714,
              "instit_pct": 0.2785714285714286,
              "ambiguous_pct": 0.37857142857142856,
              "unobservable_pct": 0.15714285714285714,
              "unclear_pct": 0.5357142857142857,
              "retail_qty_pct": 0.0950363196125908,
              "mixed_qty_pct": 0.19657990314769977,
              "instit_qty_pct": 0.3294491525423729,
              "ambiguous_qty_pct": 0.2960048426150121,
              "unobservable_qty_pct": 0.08292978208232446,
              "unclear_qty_pct": 0.3789346246973365,
              "retail_notional_pct": 0.0921428454768257,
              "mixed_notional_pct": 0.18754353316879196,
              "instit_notional_pct": 0.3294561392215957,
              "ambiguous_notional_pct": 0.30414661538919735,
              "unobservable_notional_pct": 0.08671086674358927,
              "unclear_notional_pct": 0.3908574821327866,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.10294117647058823,
              "run_instit_pct": 0.16176470588235295,
              "run_unclear_pct": 0.4852941176470588,
              "avg_trade_size": 3717.4035714285715,
              "avg_run_notional": 7653.47794117647,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4117647058823529,
              "na_confidence_pct": 0.5882352941176471,
              "avg_feature_coverage": 0.8058823529411765,
              "observable_run_pct": 0.9117647058823529,
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
              "ambiguous_pct": 0.1875,
              "unobservable_pct": 0.625,
              "unclear_pct": 0.8125,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.2568322399250234,
              "ambiguous_qty_pct": 0.4304529834426742,
              "unobservable_qty_pct": 0.3127147766323024,
              "unclear_qty_pct": 0.7431677600749766,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.25683223992502346,
              "ambiguous_notional_pct": 0.43045298344267413,
              "unobservable_notional_pct": 0.3127147766323024,
              "unclear_notional_pct": 0.7431677600749765,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.09090909090909091,
              "run_unclear_pct": 0.9090909090909092,
              "avg_trade_size": 1000.3125,
              "avg_run_notional": 1455.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.09090909090909091,
              "na_confidence_pct": 0.9090909090909091,
              "avg_feature_coverage": 0.6045454545454545,
              "observable_run_pct": 0.2727272727272727,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19230769230769232,
              "mixed_pct": 0.10256410256410256,
              "instit_pct": 0.16666666666666666,
              "ambiguous_pct": 0.44871794871794873,
              "unobservable_pct": 0.08974358974358974,
              "unclear_pct": 0.5384615384615384,
              "retail_qty_pct": 0.1291783193501132,
              "mixed_qty_pct": 0.05593288054334798,
              "instit_qty_pct": 0.2036223198828073,
              "ambiguous_qty_pct": 0.5609268877347183,
              "unobservable_qty_pct": 0.05033959248901319,
              "unclear_qty_pct": 0.6112664802237315,
              "retail_notional_pct": 0.12895453711885035,
              "mixed_notional_pct": 0.05662937832385843,
              "instit_notional_pct": 0.2032842638747645,
              "ambiguous_notional_pct": 0.5608982545054432,
              "unobservable_notional_pct": 0.05023356617708351,
              "unclear_notional_pct": 0.6111318206825267,
              "run_retail_pct": 0.2641509433962264,
              "run_mixed_pct": 0.09433962264150944,
              "run_instit_pct": 0.1509433962264151,
              "run_unclear_pct": 0.49056603773584906,
              "avg_trade_size": 1922.5320512820513,
              "avg_run_notional": 2829.3867924528295,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.41509433962264153,
              "na_confidence_pct": 0.5849056603773585,
              "avg_feature_coverage": 0.8094339622641512,
              "observable_run_pct": 0.9622641509433962,
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
              "avg_trade_size": 421.75000000000006,
              "avg_run_notional": 421.75000000000006,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
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
          "n_trades": 1337,
          "n_runs": 650,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.29693343305908754,
            "mixed_pct": 0.08451757666417352,
            "instit_pct": 0.3642483171278983,
            "ambiguous_pct": 0.25355272999252054,
            "unobservable_pct": 0.0007479431563201197,
            "unclear_pct": 0.25430067314884064,
            "retail_qty_pct": 0.05325939035376349,
            "mixed_qty_pct": 0.1059980704971345,
            "instit_qty_pct": 0.4181973843096916,
            "ambiguous_qty_pct": 0.23087268475628844,
            "unobservable_qty_pct": 0.19167247008312197,
            "unclear_qty_pct": 0.4225451548394104,
            "retail_notional_pct": 0.05268692141531526,
            "mixed_notional_pct": 0.10621548217813769,
            "instit_notional_pct": 0.41184004080215497,
            "ambiguous_notional_pct": 0.2299647333048539,
            "unobservable_notional_pct": 0.1992928222995382,
            "unclear_notional_pct": 0.4292575556043921
          },
          "run_composition": {
            "retail_pct": 0.5707692307692308,
            "mixed_pct": 0.08923076923076922,
            "instit_pct": 0.1646153846153846,
            "ambiguous_pct": 0.17384615384615384,
            "unobservable_pct": 0.0015384615384615385,
            "unclear_pct": 0.1753846153846154,
            "retail_notional_pct": 0.05268692141531526,
            "mixed_notional_pct": 0.10621548217813769,
            "instit_notional_pct": 0.41184004080215497,
            "unclear_notional_pct": 0.4292575556043921
          },
          "counts": {
            "trades": {
              "retail": 397,
              "mixed": 113,
              "institutional": 487,
              "ambiguous": 339,
              "unobservable": 1,
              "unclear": 340
            },
            "runs": {
              "retail": 371,
              "mixed": 58,
              "institutional": 107,
              "ambiguous": 113,
              "unobservable": 1,
              "unclear": 114
            }
          },
          "confidence": {
            "high": 0.10307692307692308,
            "medium": 0.25384615384615383,
            "low": 0.37846153846153846,
            "na": 0.26461538461538464
          },
          "confidence_counts": {
            "high": 67,
            "medium": 165,
            "low": 246,
            "na": 172
          },
          "trade_confidence": {
            "high": 0.06656694091249066,
            "medium": 0.2236350037397158,
            "low": 0.3709798055347794,
            "na": 0.3388182498130142
          },
          "trade_confidence_counts": {
            "high": 89,
            "medium": 299,
            "low": 496,
            "na": 453
          },
          "observability": {
            "avg_feature_coverage": 0.8493076923076922,
            "observable_run_pct": 0.9984615384615385,
            "ambiguous_run_pct": 0.17384615384615384,
            "unobservable_run_pct": 0.0015384615384615385
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5707692307692308,
          "dominance_gap": 0.39692307692307693,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 779,
              "SINGLE_FILL": 542,
              "WALK_BOOK": 16
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 996,
              "PERSISTENT_POSITIVE_IMPACT": 229,
              "MOMENTUM_REACTIVE": 98,
              "SHORT_HORIZON_POSITIVE_IMPACT": 12,
              "UNOBSERVABLE": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 648,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 246,
              "NA": 172,
              "MEDIUM": 165,
              "HIGH": 67
            }
          },
          "trade_size": {
            "avg": 5516.8893044128645,
            "median": 1710.0
          },
          "run_size": {
            "avg": 11347.816923076924,
            "median": 1800.0,
            "avg_length": 1.146153846153846
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-128",
              "timestamp": "2026-04-21T09:06:18.086700",
              "price": 0.255,
              "size": 3200.0,
              "notional": 816.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1247,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-124",
              "timestamp": "2026-04-21T08:59:16.085300",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1246,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-123",
              "timestamp": "2026-04-21T08:56:30.477700",
              "price": 0.255,
              "size": 4100.0,
              "notional": 1045.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1245,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-122",
              "timestamp": "2026-04-21T08:54:06.536200",
              "price": 0.255,
              "size": 13300.0,
              "notional": 3391.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1244,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-121",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 16800.0,
              "notional": 4200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-120",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 6300.0,
              "notional": 1575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-119",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 34300.0,
              "notional": 8575.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-118",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-117",
              "timestamp": "2026-04-21T08:42:48.783700",
              "price": 0.25,
              "size": 32600.0,
              "notional": 8150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1243,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-116",
              "timestamp": "2026-04-21T08:42:06.271700",
              "price": 0.25,
              "size": 50000.0,
              "notional": 12500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-115",
              "timestamp": "2026-04-21T08:42:01.666500",
              "price": 0.25,
              "size": 2500.0,
              "notional": 625.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1242,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-114",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 14900.0,
              "notional": 3725.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-113",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 5000.0,
              "notional": 1250.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-112",
              "timestamp": "2026-04-21T08:41:42.514000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1241,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-111",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 9900.0,
              "notional": 2475.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-110",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 100000.0,
              "notional": 25000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-109",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200000.0,
              "notional": 50000.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-108",
              "timestamp": "2026-04-21T08:41:09.305100",
              "price": 0.25,
              "size": 200.0,
              "notional": 50.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-107",
              "timestamp": "2026-04-21T08:41:09.305000",
              "price": 0.25,
              "size": 31400.0,
              "notional": 7850.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 1240,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-106",
              "timestamp": "2026-04-21T08:33:26.613200",
              "price": 0.25,
              "size": 12800.0,
              "notional": 3200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-105",
              "timestamp": "2026-04-21T08:33:26.613100",
              "price": 0.25,
              "size": 7200.0,
              "notional": 1800.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1239,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-104",
              "timestamp": "2026-04-21T08:32:17.981700",
              "price": 0.25,
              "size": 10000.0,
              "notional": 2500.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1238,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-103",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 7800.0,
              "notional": 1950.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-102",
              "timestamp": "2026-04-21T08:31:21.887900",
              "price": 0.25,
              "size": 2200.0,
              "notional": 550.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1237,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-04-21T08:27:00.663700",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1236,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-04-21T08:23:45.578200",
              "price": 0.25,
              "size": 1000.0,
              "notional": 250.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 1235,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-04-21T08:12:16.727000",
              "price": 0.25,
              "size": 100.0,
              "notional": 25.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 1234,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-04-21T08:09:53.772100",
              "price": 0.25,
              "size": 5700.0,
              "notional": 1425.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-04-21T08:09:53.772000",
              "price": 0.25,
              "size": 4300.0,
              "notional": 1075.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1233,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-04-21T08:05:30.574900",
              "price": 0.25,
              "size": 25700.0,
              "notional": 6425.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1232,
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
              "retail_pct": 0.29693343305908754,
              "mixed_pct": 0.08451757666417352,
              "instit_pct": 0.3642483171278983,
              "ambiguous_pct": 0.25355272999252054,
              "unobservable_pct": 0.0007479431563201197,
              "unclear_pct": 0.25430067314884064,
              "retail_qty_pct": 0.05325939035376349,
              "mixed_qty_pct": 0.1059980704971345,
              "instit_qty_pct": 0.4181973843096916,
              "ambiguous_qty_pct": 0.23087268475628844,
              "unobservable_qty_pct": 0.19167247008312197,
              "unclear_qty_pct": 0.4225451548394104,
              "retail_notional_pct": 0.05268692141531526,
              "mixed_notional_pct": 0.10621548217813769,
              "instit_notional_pct": 0.41184004080215497,
              "ambiguous_notional_pct": 0.2299647333048539,
              "unobservable_notional_pct": 0.1992928222995382,
              "unclear_notional_pct": 0.4292575556043921,
              "run_retail_pct": 0.5707692307692308,
              "run_mixed_pct": 0.08923076923076922,
              "run_instit_pct": 0.1646153846153846,
              "run_unclear_pct": 0.1753846153846154,
              "avg_trade_size": 5516.8893044128645,
              "avg_run_notional": 11347.816923076924,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.10307692307692308,
              "medium_confidence_pct": 0.25384615384615383,
              "low_confidence_pct": 0.37846153846153846,
              "na_confidence_pct": 0.26461538461538464,
              "avg_feature_coverage": 0.8493076923076922,
              "observable_run_pct": 0.9984615384615385,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25,
              "mixed_pct": 0.1401098901098901,
              "instit_pct": 0.3021978021978022,
              "ambiguous_pct": 0.3058608058608059,
              "unobservable_pct": 0.0018315018315018315,
              "unclear_pct": 0.3076923076923077,
              "retail_qty_pct": 0.05442683670867633,
              "mixed_qty_pct": 0.13389328513149268,
              "instit_qty_pct": 0.5208228992132294,
              "ambiguous_qty_pct": 0.29079949643039266,
              "unobservable_qty_pct": 5.74825162089313e-05,
              "unclear_qty_pct": 0.29085697894660156,
              "retail_notional_pct": 0.05466327504182475,
              "mixed_notional_pct": 0.135094160601406,
              "instit_notional_pct": 0.5214815113922363,
              "ambiguous_notional_pct": 0.288703137439803,
              "unobservable_notional_pct": 5.791552472983352e-05,
              "unclear_notional_pct": 0.28876105296453286,
              "run_retail_pct": 0.43993231810490696,
              "run_mixed_pct": 0.1353637901861252,
              "run_instit_pct": 0.12351945854483926,
              "run_unclear_pct": 0.30118443316412863,
              "avg_trade_size": 4313.469505494506,
              "avg_run_notional": 7970.065482233503,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.00676818950930626,
              "medium_confidence_pct": 0.2707275803722504,
              "low_confidence_pct": 0.2859560067681895,
              "na_confidence_pct": 0.4365482233502538,
              "avg_feature_coverage": 0.8419627749576988,
              "observable_run_pct": 0.9983079526226735,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.316141498216409,
              "mixed_pct": 0.17404875148632581,
              "instit_pct": 0.3017241379310345,
              "ambiguous_pct": 0.20734244946492272,
              "unobservable_pct": 0.0007431629013079667,
              "unclear_pct": 0.2080856123662307,
              "retail_qty_pct": 0.060527069084176356,
              "mixed_qty_pct": 0.12978786900621836,
              "instit_qty_pct": 0.5169345457424585,
              "ambiguous_qty_pct": 0.2915324226053803,
              "unobservable_qty_pct": 0.0012180935617664792,
              "unclear_qty_pct": 0.2927505161671468,
              "retail_notional_pct": 0.06060199729400182,
              "mixed_notional_pct": 0.12981393741652697,
              "instit_notional_pct": 0.5173363214504774,
              "ambiguous_notional_pct": 0.2910480194061837,
              "unobservable_notional_pct": 0.001199724432810152,
              "unclear_notional_pct": 0.2922477438389938,
              "run_retail_pct": 0.6226646248085758,
              "run_mixed_pct": 0.1457886676875957,
              "run_instit_pct": 0.09739663093415007,
              "run_unclear_pct": 0.1341500765696784,
              "avg_trade_size": 2498.468118311534,
              "avg_run_notional": 5148.451301684533,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1329249617151608,
              "medium_confidence_pct": 0.4462480857580398,
              "low_confidence_pct": 0.14088820826952528,
              "na_confidence_pct": 0.2799387442572741,
              "avg_feature_coverage": 0.8611638591117917,
              "observable_run_pct": 0.9996937212863706,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14285714285714285,
              "mixed_pct": 0.09523809523809523,
              "instit_pct": 0.38095238095238093,
              "ambiguous_pct": 0.38095238095238093,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.38095238095238093,
              "retail_qty_pct": 0.03819095477386935,
              "mixed_qty_pct": 0.07085427135678392,
              "instit_qty_pct": 0.46130653266331656,
              "ambiguous_qty_pct": 0.4296482412060301,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4296482412060301,
              "retail_notional_pct": 0.038965616914475865,
              "mixed_notional_pct": 0.0704863828317224,
              "instit_notional_pct": 0.45780898599155406,
              "ambiguous_notional_pct": 0.4327390142622477,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4327390142622477,
              "run_retail_pct": 0.17647058823529413,
              "run_mixed_pct": 0.11764705882352941,
              "run_instit_pct": 0.29411764705882354,
              "run_unclear_pct": 0.4117647058823529,
              "avg_trade_size": 3377.214285714286,
              "avg_run_notional": 4171.85294117647,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47058823529411764,
              "na_confidence_pct": 0.5294117647058824,
              "avg_feature_coverage": 0.8323529411764706,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1998519615099926,
              "mixed_pct": 0.12213175425610659,
              "instit_pct": 0.3493708364174685,
              "ambiguous_pct": 0.31976313841598814,
              "unobservable_pct": 0.008882309400444115,
              "unclear_pct": 0.32864544781643223,
              "retail_qty_pct": 0.07192994545398043,
              "mixed_qty_pct": 0.12892560420154328,
              "instit_qty_pct": 0.4073062211106742,
              "ambiguous_qty_pct": 0.37900228209628584,
              "unobservable_qty_pct": 0.012835947137516231,
              "unclear_qty_pct": 0.39183822923380207,
              "retail_notional_pct": 0.07325392649696057,
              "mixed_notional_pct": 0.12029742555628671,
              "instit_notional_pct": 0.4070104991139919,
              "ambiguous_notional_pct": 0.3848340910048521,
              "unobservable_notional_pct": 0.014604057827908763,
              "unclear_notional_pct": 0.39943814883276085,
              "run_retail_pct": 0.40229885057471265,
              "run_mixed_pct": 0.1330049261083744,
              "run_instit_pct": 0.15599343185550082,
              "run_unclear_pct": 0.30870279146141216,
              "avg_trade_size": 2362.7879348630645,
              "avg_run_notional": 5241.587027914614,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.021346469622331693,
              "medium_confidence_pct": 0.24958949096880131,
              "low_confidence_pct": 0.28735632183908044,
              "na_confidence_pct": 0.44170771756978655,
              "avg_feature_coverage": 0.8466338259441706,
              "observable_run_pct": 0.9950738916256158,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1457286432160804,
              "mixed_pct": 0.05527638190954774,
              "instit_pct": 0.3417085427135678,
              "ambiguous_pct": 0.32663316582914576,
              "unobservable_pct": 0.1306532663316583,
              "unclear_pct": 0.45728643216080406,
              "retail_qty_pct": 0.09694201243497018,
              "mixed_qty_pct": 0.19160005075498032,
              "instit_qty_pct": 0.36315188427864487,
              "ambiguous_qty_pct": 0.27395000634437255,
              "unobservable_qty_pct": 0.07435604618703211,
              "unclear_qty_pct": 0.3483060525314047,
              "retail_notional_pct": 0.09441467618853162,
              "mixed_notional_pct": 0.1841983029518161,
              "instit_notional_pct": 0.36157001767656843,
              "ambiguous_notional_pct": 0.2818684612762759,
              "unobservable_notional_pct": 0.07794854190680796,
              "unclear_notional_pct": 0.35981700318308385,
              "run_retail_pct": 0.2545454545454545,
              "run_mixed_pct": 0.09090909090909091,
              "run_instit_pct": 0.23636363636363636,
              "run_unclear_pct": 0.4181818181818182,
              "avg_trade_size": 3088.721105527638,
              "avg_run_notional": 5587.777272727273,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4909090909090909,
              "na_confidence_pct": 0.509090909090909,
              "avg_feature_coverage": 0.8040909090909087,
              "observable_run_pct": 0.9272727272727272,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18518518518518517,
              "mixed_pct": 0.1037037037037037,
              "instit_pct": 0.2222222222222222,
              "ambiguous_pct": 0.4222222222222222,
              "unobservable_pct": 0.06666666666666667,
              "unclear_pct": 0.4888888888888889,
              "retail_qty_pct": 0.10747621205256004,
              "mixed_qty_pct": 0.07621205256003624,
              "instit_qty_pct": 0.2816492976891708,
              "ambiguous_qty_pct": 0.49587675577707296,
              "unobservable_qty_pct": 0.03878568192115994,
              "unclear_qty_pct": 0.534662437698233,
              "retail_notional_pct": 0.10736363069804214,
              "mixed_notional_pct": 0.0766873328520473,
              "instit_notional_pct": 0.28150410526062003,
              "ambiguous_notional_pct": 0.49563771990518024,
              "unobservable_notional_pct": 0.03880721128411024,
              "unclear_notional_pct": 0.5344449311892905,
              "run_retail_pct": 0.2441860465116279,
              "run_mixed_pct": 0.12790697674418605,
              "run_instit_pct": 0.16279069767441862,
              "run_unclear_pct": 0.46511627906976744,
              "avg_trade_size": 1628.3533333333332,
              "avg_run_notional": 2556.136046511628,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4069767441860465,
              "na_confidence_pct": 0.5930232558139535,
              "avg_feature_coverage": 0.8133720930232555,
              "observable_run_pct": 0.9651162790697675,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.08928571428571429,
              "mixed_pct": 0.05357142857142857,
              "instit_pct": 0.07142857142857142,
              "ambiguous_pct": 0.19642857142857142,
              "unobservable_pct": 0.5892857142857143,
              "unclear_pct": 0.7857142857142857,
              "retail_qty_pct": 0.02861052290714914,
              "mixed_qty_pct": 0.05698611697551343,
              "instit_qty_pct": 0.16224693560727518,
              "ambiguous_qty_pct": 0.2980865998495186,
              "unobservable_qty_pct": 0.4540698246605437,
              "unclear_qty_pct": 0.7521564245100623,
              "retail_notional_pct": 0.028616690635605457,
              "mixed_notional_pct": 0.056985755148559795,
              "instit_notional_pct": 0.1622459054385681,
              "ambiguous_notional_pct": 0.29808470718210994,
              "unobservable_notional_pct": 0.4540669415951567,
              "unclear_notional_pct": 0.7521516487772666,
              "run_retail_pct": 0.1388888888888889,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.05555555555555555,
              "run_unclear_pct": 0.7222222222222222,
              "avg_trade_size": 562.4839285714286,
              "avg_run_notional": 874.975,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.19444444444444445,
              "na_confidence_pct": 0.8055555555555556,
              "avg_feature_coverage": 0.6791666666666667,
              "observable_run_pct": 0.4722222222222222,
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
              "avg_trade_size": 421.75000000000006,
              "avg_run_notional": 421.75000000000006,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
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
      "n_trades": 1337,
      "n_runs": 650,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-23",
      "last_trade_date": "2026-04-21",
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
        "retail_pct": 0.29693343305908754,
        "mixed_pct": 0.08451757666417352,
        "instit_pct": 0.3642483171278983,
        "ambiguous_pct": 0.25355272999252054,
        "unobservable_pct": 0.0007479431563201197,
        "unclear_pct": 0.25430067314884064,
        "retail_qty_pct": 0.05325939035376349,
        "mixed_qty_pct": 0.1059980704971345,
        "instit_qty_pct": 0.4181973843096916,
        "ambiguous_qty_pct": 0.23087268475628844,
        "unobservable_qty_pct": 0.19167247008312197,
        "unclear_qty_pct": 0.4225451548394104,
        "retail_notional_pct": 0.05268692141531526,
        "mixed_notional_pct": 0.10621548217813769,
        "instit_notional_pct": 0.41184004080215497,
        "ambiguous_notional_pct": 0.2299647333048539,
        "unobservable_notional_pct": 0.1992928222995382,
        "unclear_notional_pct": 0.4292575556043921
      },
      "run_composition": {
        "retail_pct": 0.5707692307692308,
        "mixed_pct": 0.08923076923076922,
        "instit_pct": 0.1646153846153846,
        "ambiguous_pct": 0.17384615384615384,
        "unobservable_pct": 0.0015384615384615385,
        "unclear_pct": 0.1753846153846154
      },
      "trade_size": {
        "avg": 5516.8893044128645,
        "median": 1710.0
      },
      "run_size": {
        "avg": 11347.816923076924,
        "median": 1800.0,
        "avg_length": 1.146153846153846
      },
      "confidence": {
        "high": 0.10307692307692308,
        "medium": 0.25384615384615383,
        "low": 0.37846153846153846,
        "na": 0.26461538461538464
      },
      "confidence_counts": {
        "high": 67,
        "medium": 165,
        "low": 246,
        "na": 172
      },
      "trade_confidence": {
        "high": 0.06656694091249066,
        "medium": 0.2236350037397158,
        "low": 0.3709798055347794,
        "na": 0.3388182498130142
      },
      "trade_confidence_counts": {
        "high": 89,
        "medium": 299,
        "low": 496,
        "na": 453
      },
      "counts": {
        "trades": {
          "retail": 397,
          "mixed": 113,
          "institutional": 487,
          "ambiguous": 339,
          "unobservable": 1,
          "unclear": 340
        },
        "runs": {
          "retail": 371,
          "mixed": 58,
          "institutional": 107,
          "ambiguous": 113,
          "unobservable": 1,
          "unclear": 114
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8493076923076922,
        "observable_run_pct": 0.9984615384615385,
        "ambiguous_run_pct": 0.17384615384615384,
        "unobservable_run_pct": 0.0015384615384615385
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5707692307692308,
      "dominance_gap": 0.39692307692307693,
      "over_time": {
        "valid": true,
        "periods": [
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
            "n_trades": 1080,
            "n_runs": 503,
            "retail_pct": 0.29907407407407405,
            "mixed_pct": 0.08425925925925926,
            "instit_pct": 0.3416666666666667,
            "ambiguous_pct": 0.2740740740740741,
            "unobservable_pct": 0.000925925925925926,
            "unclear_pct": 0.275,
            "avg_trade_size": 6047.5462962962965,
            "avg_run_notional": 12984.791252485089,
            "retail_qty_pct": 0.048692071225566964,
            "mixed_qty_pct": 0.10716460762136767,
            "instit_qty_pct": 0.3968084797865553,
            "ambiguous_qty_pct": 0.22983005626123776,
            "unobservable_qty_pct": 0.21750478510527232,
            "unclear_qty_pct": 0.4473348413665101,
            "retail_notional_pct": 0.048247223009025696,
            "mixed_notional_pct": 0.10737956165264455,
            "instit_notional_pct": 0.39050732237592534,
            "ambiguous_notional_pct": 0.2287975686496666,
            "unobservable_notional_pct": 0.2250683243127378,
            "unclear_notional_pct": 0.4538658929624044,
            "run_retail_pct": 0.5984095427435387,
            "run_mixed_pct": 0.08548707753479125,
            "run_instit_pct": 0.14512922465208747,
            "run_ambiguous_pct": 0.16898608349900596,
            "run_unobservable_pct": 0.0019880715705765406,
            "run_unclear_pct": 0.1709741550695825,
            "avg_feature_coverage": 0.8473161033797215,
            "high_confidence_pct": 0.13320079522862824,
            "medium_confidence_pct": 0.32803180914512925,
            "low_confidence_pct": 0.2823061630218688,
            "na_confidence_pct": 0.25646123260437376,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.29693343305908754,
          "mixed_pct": 0.08451757666417352,
          "instit_pct": 0.3642483171278983,
          "ambiguous_pct": 0.25355272999252054,
          "unobservable_pct": 0.0007479431563201197,
          "unclear_pct": 0.25430067314884064,
          "retail_qty_pct": 0.05325939035376349,
          "mixed_qty_pct": 0.1059980704971345,
          "instit_qty_pct": 0.4181973843096916,
          "ambiguous_qty_pct": 0.23087268475628844,
          "unobservable_qty_pct": 0.19167247008312197,
          "unclear_qty_pct": 0.4225451548394104,
          "retail_notional_pct": 0.05268692141531526,
          "mixed_notional_pct": 0.10621548217813769,
          "instit_notional_pct": 0.41184004080215497,
          "ambiguous_notional_pct": 0.2299647333048539,
          "unobservable_notional_pct": 0.1992928222995382,
          "unclear_notional_pct": 0.4292575556043921,
          "run_retail_pct": 0.5707692307692308,
          "run_mixed_pct": 0.08923076923076922,
          "run_instit_pct": 0.1646153846153846,
          "run_unclear_pct": 0.1753846153846154,
          "avg_trade_size": 5516.8893044128645,
          "avg_run_notional": 11347.816923076924,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.10307692307692308,
          "medium_confidence_pct": 0.25384615384615383,
          "low_confidence_pct": 0.37846153846153846,
          "na_confidence_pct": 0.26461538461538464,
          "avg_feature_coverage": 0.8493076923076922,
          "observable_run_pct": 0.9984615384615385,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.25,
          "mixed_pct": 0.1401098901098901,
          "instit_pct": 0.3021978021978022,
          "ambiguous_pct": 0.3058608058608059,
          "unobservable_pct": 0.0018315018315018315,
          "unclear_pct": 0.3076923076923077,
          "retail_qty_pct": 0.05442683670867633,
          "mixed_qty_pct": 0.13389328513149268,
          "instit_qty_pct": 0.5208228992132294,
          "ambiguous_qty_pct": 0.29079949643039266,
          "unobservable_qty_pct": 5.74825162089313e-05,
          "unclear_qty_pct": 0.29085697894660156,
          "retail_notional_pct": 0.05466327504182475,
          "mixed_notional_pct": 0.135094160601406,
          "instit_notional_pct": 0.5214815113922363,
          "ambiguous_notional_pct": 0.288703137439803,
          "unobservable_notional_pct": 5.791552472983352e-05,
          "unclear_notional_pct": 0.28876105296453286,
          "run_retail_pct": 0.43993231810490696,
          "run_mixed_pct": 0.1353637901861252,
          "run_instit_pct": 0.12351945854483926,
          "run_unclear_pct": 0.30118443316412863,
          "avg_trade_size": 4313.469505494506,
          "avg_run_notional": 7970.065482233503,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.00676818950930626,
          "medium_confidence_pct": 0.2707275803722504,
          "low_confidence_pct": 0.2859560067681895,
          "na_confidence_pct": 0.4365482233502538,
          "avg_feature_coverage": 0.8419627749576988,
          "observable_run_pct": 0.9983079526226735,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.316141498216409,
          "mixed_pct": 0.17404875148632581,
          "instit_pct": 0.3017241379310345,
          "ambiguous_pct": 0.20734244946492272,
          "unobservable_pct": 0.0007431629013079667,
          "unclear_pct": 0.2080856123662307,
          "retail_qty_pct": 0.060527069084176356,
          "mixed_qty_pct": 0.12978786900621836,
          "instit_qty_pct": 0.5169345457424585,
          "ambiguous_qty_pct": 0.2915324226053803,
          "unobservable_qty_pct": 0.0012180935617664792,
          "unclear_qty_pct": 0.2927505161671468,
          "retail_notional_pct": 0.06060199729400182,
          "mixed_notional_pct": 0.12981393741652697,
          "instit_notional_pct": 0.5173363214504774,
          "ambiguous_notional_pct": 0.2910480194061837,
          "unobservable_notional_pct": 0.001199724432810152,
          "unclear_notional_pct": 0.2922477438389938,
          "run_retail_pct": 0.6226646248085758,
          "run_mixed_pct": 0.1457886676875957,
          "run_instit_pct": 0.09739663093415007,
          "run_unclear_pct": 0.1341500765696784,
          "avg_trade_size": 2498.468118311534,
          "avg_run_notional": 5148.451301684533,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.1329249617151608,
          "medium_confidence_pct": 0.4462480857580398,
          "low_confidence_pct": 0.14088820826952528,
          "na_confidence_pct": 0.2799387442572741,
          "avg_feature_coverage": 0.8611638591117917,
          "observable_run_pct": 0.9996937212863706,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.14285714285714285,
          "mixed_pct": 0.09523809523809523,
          "instit_pct": 0.38095238095238093,
          "ambiguous_pct": 0.38095238095238093,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.38095238095238093,
          "retail_qty_pct": 0.03819095477386935,
          "mixed_qty_pct": 0.07085427135678392,
          "instit_qty_pct": 0.46130653266331656,
          "ambiguous_qty_pct": 0.4296482412060301,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.4296482412060301,
          "retail_notional_pct": 0.038965616914475865,
          "mixed_notional_pct": 0.0704863828317224,
          "instit_notional_pct": 0.45780898599155406,
          "ambiguous_notional_pct": 0.4327390142622477,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.4327390142622477,
          "run_retail_pct": 0.17647058823529413,
          "run_mixed_pct": 0.11764705882352941,
          "run_instit_pct": 0.29411764705882354,
          "run_unclear_pct": 0.4117647058823529,
          "avg_trade_size": 3377.214285714286,
          "avg_run_notional": 4171.85294117647,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.47058823529411764,
          "na_confidence_pct": 0.5294117647058824,
          "avg_feature_coverage": 0.8323529411764706,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1998519615099926,
          "mixed_pct": 0.12213175425610659,
          "instit_pct": 0.3493708364174685,
          "ambiguous_pct": 0.31976313841598814,
          "unobservable_pct": 0.008882309400444115,
          "unclear_pct": 0.32864544781643223,
          "retail_qty_pct": 0.07192994545398043,
          "mixed_qty_pct": 0.12892560420154328,
          "instit_qty_pct": 0.4073062211106742,
          "ambiguous_qty_pct": 0.37900228209628584,
          "unobservable_qty_pct": 0.012835947137516231,
          "unclear_qty_pct": 0.39183822923380207,
          "retail_notional_pct": 0.07325392649696057,
          "mixed_notional_pct": 0.12029742555628671,
          "instit_notional_pct": 0.4070104991139919,
          "ambiguous_notional_pct": 0.3848340910048521,
          "unobservable_notional_pct": 0.014604057827908763,
          "unclear_notional_pct": 0.39943814883276085,
          "run_retail_pct": 0.40229885057471265,
          "run_mixed_pct": 0.1330049261083744,
          "run_instit_pct": 0.15599343185550082,
          "run_unclear_pct": 0.30870279146141216,
          "avg_trade_size": 2362.7879348630645,
          "avg_run_notional": 5241.587027914614,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.021346469622331693,
          "medium_confidence_pct": 0.24958949096880131,
          "low_confidence_pct": 0.28735632183908044,
          "na_confidence_pct": 0.44170771756978655,
          "avg_feature_coverage": 0.8466338259441706,
          "observable_run_pct": 0.9950738916256158,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1457286432160804,
          "mixed_pct": 0.05527638190954774,
          "instit_pct": 0.3417085427135678,
          "ambiguous_pct": 0.32663316582914576,
          "unobservable_pct": 0.1306532663316583,
          "unclear_pct": 0.45728643216080406,
          "retail_qty_pct": 0.09694201243497018,
          "mixed_qty_pct": 0.19160005075498032,
          "instit_qty_pct": 0.36315188427864487,
          "ambiguous_qty_pct": 0.27395000634437255,
          "unobservable_qty_pct": 0.07435604618703211,
          "unclear_qty_pct": 0.3483060525314047,
          "retail_notional_pct": 0.09441467618853162,
          "mixed_notional_pct": 0.1841983029518161,
          "instit_notional_pct": 0.36157001767656843,
          "ambiguous_notional_pct": 0.2818684612762759,
          "unobservable_notional_pct": 0.07794854190680796,
          "unclear_notional_pct": 0.35981700318308385,
          "run_retail_pct": 0.2545454545454545,
          "run_mixed_pct": 0.09090909090909091,
          "run_instit_pct": 0.23636363636363636,
          "run_unclear_pct": 0.4181818181818182,
          "avg_trade_size": 3088.721105527638,
          "avg_run_notional": 5587.777272727273,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4909090909090909,
          "na_confidence_pct": 0.509090909090909,
          "avg_feature_coverage": 0.8040909090909087,
          "observable_run_pct": 0.9272727272727272,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.18518518518518517,
          "mixed_pct": 0.1037037037037037,
          "instit_pct": 0.2222222222222222,
          "ambiguous_pct": 0.4222222222222222,
          "unobservable_pct": 0.06666666666666667,
          "unclear_pct": 0.4888888888888889,
          "retail_qty_pct": 0.10747621205256004,
          "mixed_qty_pct": 0.07621205256003624,
          "instit_qty_pct": 0.2816492976891708,
          "ambiguous_qty_pct": 0.49587675577707296,
          "unobservable_qty_pct": 0.03878568192115994,
          "unclear_qty_pct": 0.534662437698233,
          "retail_notional_pct": 0.10736363069804214,
          "mixed_notional_pct": 0.0766873328520473,
          "instit_notional_pct": 0.28150410526062003,
          "ambiguous_notional_pct": 0.49563771990518024,
          "unobservable_notional_pct": 0.03880721128411024,
          "unclear_notional_pct": 0.5344449311892905,
          "run_retail_pct": 0.2441860465116279,
          "run_mixed_pct": 0.12790697674418605,
          "run_instit_pct": 0.16279069767441862,
          "run_unclear_pct": 0.46511627906976744,
          "avg_trade_size": 1628.3533333333332,
          "avg_run_notional": 2556.136046511628,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4069767441860465,
          "na_confidence_pct": 0.5930232558139535,
          "avg_feature_coverage": 0.8133720930232555,
          "observable_run_pct": 0.9651162790697675,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.08928571428571429,
          "mixed_pct": 0.05357142857142857,
          "instit_pct": 0.07142857142857142,
          "ambiguous_pct": 0.19642857142857142,
          "unobservable_pct": 0.5892857142857143,
          "unclear_pct": 0.7857142857142857,
          "retail_qty_pct": 0.02861052290714914,
          "mixed_qty_pct": 0.05698611697551343,
          "instit_qty_pct": 0.16224693560727518,
          "ambiguous_qty_pct": 0.2980865998495186,
          "unobservable_qty_pct": 0.4540698246605437,
          "unclear_qty_pct": 0.7521564245100623,
          "retail_notional_pct": 0.028616690635605457,
          "mixed_notional_pct": 0.056985755148559795,
          "instit_notional_pct": 0.1622459054385681,
          "ambiguous_notional_pct": 0.29808470718210994,
          "unobservable_notional_pct": 0.4540669415951567,
          "unclear_notional_pct": 0.7521516487772666,
          "run_retail_pct": 0.1388888888888889,
          "run_mixed_pct": 0.08333333333333333,
          "run_instit_pct": 0.05555555555555555,
          "run_unclear_pct": 0.7222222222222222,
          "avg_trade_size": 562.4839285714286,
          "avg_run_notional": 874.975,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.19444444444444445,
          "na_confidence_pct": 0.8055555555555556,
          "avg_feature_coverage": 0.6791666666666667,
          "observable_run_pct": 0.4722222222222222,
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
          "avg_trade_size": 421.75000000000006,
          "avg_run_notional": 421.75000000000006,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.0,
          "na_confidence_pct": 1.0,
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
            "retail_pct": 0.352,
            "mixed_pct": 0.136,
            "instit_pct": 0.248,
            "ambiguous_pct": 0.256,
            "unobservable_pct": 0.008,
            "unclear_pct": 0.264,
            "retail_qty_pct": 0.014439834024896266,
            "mixed_qty_pct": 0.01027768911586339,
            "instit_qty_pct": 0.11563357804021704,
            "ambiguous_qty_pct": 0.09360995850622407,
            "unobservable_qty_pct": 0.7660389403127993,
            "unclear_qty_pct": 0.8596488988190234,
            "retail_notional_pct": 0.014458837125605455,
            "mixed_notional_pct": 0.010341495759180029,
            "instit_notional_pct": 0.1166132460143995,
            "ambiguous_notional_pct": 0.09351350887159292,
            "unobservable_notional_pct": 0.7650729122292221,
            "unclear_notional_pct": 0.8585864211008151,
            "run_retail_pct": 0.6615384615384615,
            "run_mixed_pct": 0.12307692307692308,
            "run_instit_pct": 0.09230769230769231,
            "run_unclear_pct": 0.12307692307692308,
            "avg_trade_size": 15371.084,
            "avg_run_notional": 29559.776923076923,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.24615384615384617,
            "medium_confidence_pct": 0.4461538461538462,
            "low_confidence_pct": 0.06153846153846154,
            "na_confidence_pct": 0.24615384615384617,
            "avg_feature_coverage": 0.8546153846153846,
            "observable_run_pct": 0.9846153846153847,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6104972375690608,
            "mixed_pct": 0.1574585635359116,
            "instit_pct": 0.16022099447513813,
            "ambiguous_pct": 0.0718232044198895,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0718232044198895,
            "retail_qty_pct": 0.08066719390322813,
            "mixed_qty_pct": 0.12236681285498598,
            "instit_qty_pct": 0.6627363577539722,
            "ambiguous_qty_pct": 0.13422963548781364,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13422963548781364,
            "retail_notional_pct": 0.07952697463900173,
            "mixed_notional_pct": 0.121796409566537,
            "instit_notional_pct": 0.6632414629459049,
            "ambiguous_notional_pct": 0.13543515284855634,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13543515284855634,
            "run_retail_pct": 0.8283018867924529,
            "run_mixed_pct": 0.1169811320754717,
            "run_instit_pct": 0.03018867924528302,
            "run_unclear_pct": 0.024528301886792454,
            "avg_trade_size": 2084.267955801105,
            "avg_run_notional": 2847.188679245283,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.44339622641509435,
            "medium_confidence_pct": 0.37358490566037733,
            "low_confidence_pct": 0.04150943396226415,
            "na_confidence_pct": 0.14150943396226415,
            "avg_feature_coverage": 0.8559433962264148,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.367816091954023,
            "mixed_pct": 0.28735632183908044,
            "instit_pct": 0.2988505747126437,
            "ambiguous_pct": 0.04597701149425287,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04597701149425287,
            "retail_qty_pct": 0.06339123671247084,
            "mixed_qty_pct": 0.3945452085987082,
            "instit_qty_pct": 0.5190055348265716,
            "ambiguous_qty_pct": 0.023058019862249327,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.023058019862249327,
            "retail_notional_pct": 0.06493895902184002,
            "mixed_notional_pct": 0.39652834227178435,
            "instit_notional_pct": 0.5151198775767072,
            "ambiguous_notional_pct": 0.023412821129668415,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.023412821129668415,
            "run_retail_pct": 0.6078431372549019,
            "run_mixed_pct": 0.21568627450980393,
            "run_instit_pct": 0.09803921568627451,
            "run_unclear_pct": 0.0784313725490196,
            "avg_trade_size": 5623.601149425288,
            "avg_run_notional": 9593.201960784314,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0196078431372549,
            "medium_confidence_pct": 0.5490196078431373,
            "low_confidence_pct": 0.13725490196078433,
            "na_confidence_pct": 0.29411764705882354,
            "avg_feature_coverage": 0.8529411764705884,
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
            "instit_pct": 0.4,
            "ambiguous_pct": 0.6,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.6,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.40816326530612246,
            "ambiguous_qty_pct": 0.5918367346938775,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5918367346938775,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.40845691603726775,
            "ambiguous_notional_pct": 0.5915430839627323,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5915430839627323,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 1813.9,
            "avg_run_notional": 3023.1666666666665,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.8000000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19718309859154928,
            "mixed_pct": 0.11267605633802817,
            "instit_pct": 0.323943661971831,
            "ambiguous_pct": 0.36619718309859156,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36619718309859156,
            "retail_qty_pct": 0.06901838709302731,
            "mixed_qty_pct": 0.1509995005401136,
            "instit_qty_pct": 0.37758005877365175,
            "ambiguous_qty_pct": 0.40240205359320735,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.40240205359320735,
            "retail_notional_pct": 0.06874114506906846,
            "mixed_notional_pct": 0.14916341985865844,
            "instit_notional_pct": 0.37795111656462416,
            "ambiguous_notional_pct": 0.404144318507649,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.404144318507649,
            "run_retail_pct": 0.34210526315789475,
            "run_mixed_pct": 0.13157894736842105,
            "run_instit_pct": 0.18421052631578946,
            "run_unclear_pct": 0.34210526315789475,
            "avg_trade_size": 2672.180281690141,
            "avg_run_notional": 4992.757894736842,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.34210526315789475,
            "low_confidence_pct": 0.18421052631578946,
            "na_confidence_pct": 0.47368421052631576,
            "avg_feature_coverage": 0.8460526315789477,
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
            "retail_pct": 0.3076923076923077,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.15384615384615385,
            "ambiguous_pct": 0.46153846153846156,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.46153846153846156,
            "retail_qty_pct": 0.15121951219512195,
            "mixed_qty_pct": 0.12195121951219512,
            "instit_qty_pct": 0.13170731707317074,
            "ambiguous_qty_pct": 0.5951219512195122,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5951219512195122,
            "retail_notional_pct": 0.14974369085173503,
            "mixed_notional_pct": 0.12322555205047318,
            "instit_notional_pct": 0.13108734227129337,
            "ambiguous_notional_pct": 0.5959434148264984,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5959434148264984,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.1111111111111111,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 1248.4923076923076,
            "avg_run_notional": 1803.3777777777777,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4444444444444444,
            "na_confidence_pct": 0.5555555555555556,
            "avg_feature_coverage": 0.8666666666666667,
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
            "avg_trade_size": 1.0,
            "avg_run_notional": 1.0,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2222222222222222,
            "mixed_pct": 0.12222222222222222,
            "instit_pct": 0.32407407407407407,
            "ambiguous_pct": 0.3296296296296296,
            "unobservable_pct": 0.001851851851851852,
            "unclear_pct": 0.33148148148148143,
            "retail_qty_pct": 0.04089781106747734,
            "mixed_qty_pct": 0.1218291813867451,
            "instit_qty_pct": 0.3029076261378052,
            "ambiguous_qty_pct": 0.23111913028975178,
            "unobservable_qty_pct": 0.30324625111822057,
            "unclear_qty_pct": 0.5343653814079723,
            "retail_notional_pct": 0.04064866854466542,
            "mixed_notional_pct": 0.12091128827022664,
            "instit_notional_pct": 0.3011180370268437,
            "ambiguous_notional_pct": 0.22954488662338873,
            "unobservable_notional_pct": 0.30777711953487547,
            "unclear_notional_pct": 0.5373220061582642,
            "run_retail_pct": 0.5045871559633027,
            "run_mixed_pct": 0.13302752293577982,
            "run_instit_pct": 0.13302752293577982,
            "run_unclear_pct": 0.22935779816513763,
            "avg_trade_size": 8844.784259259259,
            "avg_run_notional": 21909.09862385321,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.09174311926605505,
            "medium_confidence_pct": 0.3073394495412844,
            "low_confidence_pct": 0.23853211009174313,
            "na_confidence_pct": 0.3623853211009174,
            "avg_feature_coverage": 0.8499999999999998,
            "observable_run_pct": 0.9954128440366973,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.30268199233716475,
            "mixed_pct": 0.1724137931034483,
            "instit_pct": 0.32567049808429116,
            "ambiguous_pct": 0.19923371647509577,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19923371647509577,
            "retail_qty_pct": 0.06527308676158763,
            "mixed_qty_pct": 0.20786738115981812,
            "instit_qty_pct": 0.5646266216329112,
            "ambiguous_qty_pct": 0.162232910445683,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.162232910445683,
            "retail_notional_pct": 0.06495526145834044,
            "mixed_notional_pct": 0.20939465100105198,
            "instit_notional_pct": 0.5651569655860387,
            "ambiguous_notional_pct": 0.16049312195456888,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16049312195456888,
            "run_retail_pct": 0.5314685314685315,
            "run_mixed_pct": 0.15384615384615385,
            "run_instit_pct": 0.13286713286713286,
            "run_unclear_pct": 0.18181818181818182,
            "avg_trade_size": 5278.776245210728,
            "avg_run_notional": 9634.689510489512,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.006993006993006993,
            "medium_confidence_pct": 0.35664335664335667,
            "low_confidence_pct": 0.3006993006993007,
            "na_confidence_pct": 0.3356643356643357,
            "avg_feature_coverage": 0.8499999999999996,
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
            "retail_pct": 0.3664940828402367,
            "mixed_pct": 0.17566568047337278,
            "instit_pct": 0.27144970414201186,
            "ambiguous_pct": 0.1863905325443787,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1863905325443787,
            "retail_qty_pct": 0.0681678710533896,
            "mixed_qty_pct": 0.15195311032349368,
            "instit_qty_pct": 0.5367014415068819,
            "ambiguous_qty_pct": 0.2431775771162348,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2431775771162348,
            "retail_notional_pct": 0.06802667571215372,
            "mixed_notional_pct": 0.15081356916598615,
            "instit_notional_pct": 0.537468445679078,
            "ambiguous_notional_pct": 0.24369130944278214,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24369130944278214,
            "run_retail_pct": 0.6685393258426966,
            "run_mixed_pct": 0.14115168539325842,
            "run_instit_pct": 0.07654494382022473,
            "run_unclear_pct": 0.11376404494382023,
            "avg_trade_size": 3083.800480769231,
            "avg_run_notional": 5855.755969101124,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.18890449438202248,
            "medium_confidence_pct": 0.4276685393258427,
            "low_confidence_pct": 0.12851123595505617,
            "na_confidence_pct": 0.25491573033707865,
            "avg_feature_coverage": 0.8582162921348314,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19796954314720813,
            "mixed_pct": 0.09137055837563451,
            "instit_pct": 0.34517766497461927,
            "ambiguous_pct": 0.3532994923857868,
            "unobservable_pct": 0.012182741116751269,
            "unclear_pct": 0.36548223350253806,
            "retail_qty_pct": 0.07741353729663358,
            "mixed_qty_pct": 0.0861027466343132,
            "instit_qty_pct": 0.4020935960591133,
            "ambiguous_qty_pct": 0.4170318004414495,
            "unobservable_qty_pct": 0.017358319568490446,
            "unclear_qty_pct": 0.43439012000993993,
            "retail_notional_pct": 0.0772993923182518,
            "mixed_notional_pct": 0.08751324572513226,
            "instit_notional_pct": 0.4038163953098314,
            "ambiguous_notional_pct": 0.4132315265787467,
            "unobservable_notional_pct": 0.01813944006803788,
            "unclear_notional_pct": 0.43137096664678454,
            "run_retail_pct": 0.39770114942528734,
            "run_mixed_pct": 0.10574712643678161,
            "run_instit_pct": 0.14942528735632185,
            "run_unclear_pct": 0.3471264367816092,
            "avg_trade_size": 2609.1168527918776,
            "avg_run_notional": 5908.000229885057,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.029885057471264367,
            "medium_confidence_pct": 0.3425287356321839,
            "low_confidence_pct": 0.17471264367816092,
            "na_confidence_pct": 0.4528735632183908,
            "avg_feature_coverage": 0.8435632183908044,
            "observable_run_pct": 0.993103448275862,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07142857142857142,
            "mixed_pct": 0.014285714285714285,
            "instit_pct": 0.32857142857142857,
            "ambiguous_pct": 0.45714285714285713,
            "unobservable_pct": 0.12857142857142856,
            "unclear_pct": 0.5857142857142856,
            "retail_qty_pct": 0.044850498338870434,
            "mixed_qty_pct": 0.02547065337763012,
            "instit_qty_pct": 0.37375415282392027,
            "ambiguous_qty_pct": 0.43410852713178294,
            "unobservable_qty_pct": 0.12181616832779624,
            "unclear_qty_pct": 0.5559246954595791,
            "retail_notional_pct": 0.043520962878626744,
            "mixed_notional_pct": 0.024747582168728965,
            "instit_notional_pct": 0.36822975965568583,
            "ambiguous_notional_pct": 0.43834373866152865,
            "unobservable_notional_pct": 0.12515795663542983,
            "unclear_notional_pct": 0.5635016952969585,
            "run_retail_pct": 0.16129032258064516,
            "run_mixed_pct": 0.03225806451612903,
            "run_instit_pct": 0.1935483870967742,
            "run_unclear_pct": 0.6129032258064515,
            "avg_trade_size": 2283.6285714285714,
            "avg_run_notional": 5156.580645161291,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3548387096774194,
            "na_confidence_pct": 0.6451612903225806,
            "avg_feature_coverage": 0.8145161290322585,
            "observable_run_pct": 0.935483870967742,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.09615384615384616,
            "instit_pct": 0.19230769230769232,
            "ambiguous_pct": 0.46153846153846156,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.46153846153846156,
            "retail_qty_pct": 0.15773179077725272,
            "mixed_qty_pct": 0.04888381945576014,
            "instit_qty_pct": 0.22828743685839986,
            "ambiguous_qty_pct": 0.5650969529085873,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5650969529085873,
            "retail_notional_pct": 0.1574050964328885,
            "mixed_notional_pct": 0.04934610296288684,
            "instit_notional_pct": 0.22803282780086034,
            "ambiguous_notional_pct": 0.5652159728033643,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5652159728033643,
            "run_retail_pct": 0.32432432432432434,
            "run_mixed_pct": 0.08108108108108109,
            "run_instit_pct": 0.16216216216216217,
            "run_unclear_pct": 0.43243243243243246,
            "avg_trade_size": 2357.757692307692,
            "avg_run_notional": 3313.6054054054052,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4864864864864865,
            "na_confidence_pct": 0.5135135135135135,
            "avg_feature_coverage": 0.8216216216216219,
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
            "avg_trade_size": 334.1666666666667,
            "avg_run_notional": 334.1666666666667,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.5499999999999999,
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
            "avg_trade_size": 421.75000000000006,
            "avg_run_notional": 421.75000000000006,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.2949367088607595,
            "mixed_pct": 0.10632911392405063,
            "instit_pct": 0.3291139240506329,
            "ambiguous_pct": 0.2683544303797468,
            "unobservable_pct": 0.0012658227848101266,
            "unclear_pct": 0.26962025316455696,
            "retail_qty_pct": 0.04756063767359979,
            "mixed_qty_pct": 0.11846759470561387,
            "instit_qty_pct": 0.36476331746756213,
            "ambiguous_qty_pct": 0.22470170176696877,
            "unobservable_qty_pct": 0.24450674838625547,
            "unclear_qty_pct": 0.4692084501532242,
            "retail_notional_pct": 0.04704273634050912,
            "mixed_notional_pct": 0.11807432888792223,
            "instit_notional_pct": 0.35957310852869856,
            "ambiguous_notional_pct": 0.2239537860546301,
            "unobservable_notional_pct": 0.25135604018824004,
            "unclear_notional_pct": 0.4753098262428701,
            "run_retail_pct": 0.5885558583106267,
            "run_mixed_pct": 0.10626702997275204,
            "run_instit_pct": 0.1307901907356948,
            "run_unclear_pct": 0.17438692098092645,
            "avg_trade_size": 7402.883544303798,
            "avg_run_notional": 15935.362397820163,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11989100817438691,
            "medium_confidence_pct": 0.29427792915531337,
            "low_confidence_pct": 0.30517711171662126,
            "na_confidence_pct": 0.28065395095367845,
            "avg_feature_coverage": 0.8483651226158035,
            "observable_run_pct": 0.997275204359673,
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
            "instit_pct": 0.75,
            "ambiguous_pct": 0.25,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.9174311926605505,
            "ambiguous_qty_pct": 0.08256880733944955,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08256880733944955,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.9192523364485982,
            "ambiguous_notional_pct": 0.08074766355140187,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08074766355140187,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.5,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 1003.125,
            "avg_run_notional": 2006.25,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
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
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25565217391304346,
            "mixed_pct": 0.12695652173913044,
            "instit_pct": 0.3234782608695652,
            "ambiguous_pct": 0.29043478260869565,
            "unobservable_pct": 0.0034782608695652175,
            "unclear_pct": 0.29391304347826086,
            "retail_qty_pct": 0.05092260172618001,
            "mixed_qty_pct": 0.12843455508064933,
            "instit_qty_pct": 0.5866038870627832,
            "ambiguous_qty_pct": 0.23394082251515486,
            "unobservable_qty_pct": 9.813361523266897e-05,
            "unclear_qty_pct": 0.23403895613038753,
            "retail_notional_pct": 0.05116897315731045,
            "mixed_notional_pct": 0.13003838761286182,
            "instit_notional_pct": 0.5847825316492855,
            "ambiguous_notional_pct": 0.23391244703042835,
            "unobservable_notional_pct": 9.766055011385975e-05,
            "unclear_notional_pct": 0.23401010758054222,
            "run_retail_pct": 0.46534653465346537,
            "run_mixed_pct": 0.1188118811881188,
            "run_instit_pct": 0.12211221122112212,
            "run_unclear_pct": 0.29372937293729373,
            "avg_trade_size": 4857.9982608695655,
            "avg_run_notional": 9218.973597359736,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.013201320132013201,
            "medium_confidence_pct": 0.33003300330033003,
            "low_confidence_pct": 0.24422442244224424,
            "na_confidence_pct": 0.41254125412541254,
            "avg_feature_coverage": 0.8422442244224422,
            "observable_run_pct": 0.9966996699669967,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3513364563240562,
            "mixed_pct": 0.16037475888674566,
            "instit_pct": 0.2725268669054836,
            "ambiguous_pct": 0.2143841278589143,
            "unobservable_pct": 0.0013777900248002205,
            "unclear_pct": 0.21576191788371452,
            "retail_qty_pct": 0.05980496656947295,
            "mixed_qty_pct": 0.13508751838899216,
            "instit_qty_pct": 0.5005681868233511,
            "ambiguous_qty_pct": 0.3027775086108933,
            "unobservable_qty_pct": 0.0017618196072904096,
            "unclear_qty_pct": 0.3045393282181837,
            "retail_notional_pct": 0.059895530699926786,
            "mixed_notional_pct": 0.13471497367211657,
            "instit_notional_pct": 0.5018762668597735,
            "ambiguous_notional_pct": 0.3017975392825428,
            "unobservable_notional_pct": 0.0017156894856402566,
            "unclear_notional_pct": 0.3035132287681831,
            "run_retail_pct": 0.6498940677966102,
            "run_mixed_pct": 0.13241525423728814,
            "run_instit_pct": 0.08209745762711865,
            "run_unclear_pct": 0.13559322033898305,
            "avg_trade_size": 3239.0349958666297,
            "avg_run_notional": 6225.878177966101,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1461864406779661,
            "medium_confidence_pct": 0.4518008474576271,
            "low_confidence_pct": 0.1340042372881356,
            "na_confidence_pct": 0.2680084745762712,
            "avg_feature_coverage": 0.8548199152542371,
            "observable_run_pct": 0.9994703389830508,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2001654259718776,
            "mixed_pct": 0.11827956989247312,
            "instit_pct": 0.3399503722084367,
            "ambiguous_pct": 0.3316790736145575,
            "unobservable_pct": 0.009925558312655087,
            "unclear_pct": 0.3416046319272126,
            "retail_qty_pct": 0.07377959944108058,
            "mixed_qty_pct": 0.12763483931066605,
            "instit_qty_pct": 0.3887731718677224,
            "ambiguous_qty_pct": 0.39565309734513276,
            "unobservable_qty_pct": 0.01415929203539823,
            "unclear_qty_pct": 0.409812389380531,
            "retail_notional_pct": 0.07468481195751488,
            "mixed_notional_pct": 0.11855352430381041,
            "instit_notional_pct": 0.3939803359539214,
            "ambiguous_notional_pct": 0.39712978226094164,
            "unobservable_notional_pct": 0.01565154552381175,
            "unclear_notional_pct": 0.4127813277847534,
            "run_retail_pct": 0.4059590316573557,
            "run_mixed_pct": 0.12849162011173185,
            "run_instit_pct": 0.14338919925512103,
            "run_unclear_pct": 0.3221601489757914,
            "avg_trade_size": 2463.599503722084,
            "avg_run_notional": 5546.539664804469,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.024208566108007448,
            "medium_confidence_pct": 0.2774674115456238,
            "low_confidence_pct": 0.24767225325884543,
            "na_confidence_pct": 0.4506517690875233,
            "avg_feature_coverage": 0.8436685288640595,
            "observable_run_pct": 0.994413407821229,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.12857142857142856,
            "mixed_pct": 0.05714285714285714,
            "instit_pct": 0.2785714285714286,
            "ambiguous_pct": 0.37857142857142856,
            "unobservable_pct": 0.15714285714285714,
            "unclear_pct": 0.5357142857142857,
            "retail_qty_pct": 0.0950363196125908,
            "mixed_qty_pct": 0.19657990314769977,
            "instit_qty_pct": 0.3294491525423729,
            "ambiguous_qty_pct": 0.2960048426150121,
            "unobservable_qty_pct": 0.08292978208232446,
            "unclear_qty_pct": 0.3789346246973365,
            "retail_notional_pct": 0.0921428454768257,
            "mixed_notional_pct": 0.18754353316879196,
            "instit_notional_pct": 0.3294561392215957,
            "ambiguous_notional_pct": 0.30414661538919735,
            "unobservable_notional_pct": 0.08671086674358927,
            "unclear_notional_pct": 0.3908574821327866,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.10294117647058823,
            "run_instit_pct": 0.16176470588235295,
            "run_unclear_pct": 0.4852941176470588,
            "avg_trade_size": 3717.4035714285715,
            "avg_run_notional": 7653.47794117647,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4117647058823529,
            "na_confidence_pct": 0.5882352941176471,
            "avg_feature_coverage": 0.8058823529411765,
            "observable_run_pct": 0.9117647058823529,
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
            "ambiguous_pct": 0.1875,
            "unobservable_pct": 0.625,
            "unclear_pct": 0.8125,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.2568322399250234,
            "ambiguous_qty_pct": 0.4304529834426742,
            "unobservable_qty_pct": 0.3127147766323024,
            "unclear_qty_pct": 0.7431677600749766,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.25683223992502346,
            "ambiguous_notional_pct": 0.43045298344267413,
            "unobservable_notional_pct": 0.3127147766323024,
            "unclear_notional_pct": 0.7431677600749765,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.09090909090909091,
            "run_unclear_pct": 0.9090909090909092,
            "avg_trade_size": 1000.3125,
            "avg_run_notional": 1455.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.09090909090909091,
            "na_confidence_pct": 0.9090909090909091,
            "avg_feature_coverage": 0.6045454545454545,
            "observable_run_pct": 0.2727272727272727,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19230769230769232,
            "mixed_pct": 0.10256410256410256,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.44871794871794873,
            "unobservable_pct": 0.08974358974358974,
            "unclear_pct": 0.5384615384615384,
            "retail_qty_pct": 0.1291783193501132,
            "mixed_qty_pct": 0.05593288054334798,
            "instit_qty_pct": 0.2036223198828073,
            "ambiguous_qty_pct": 0.5609268877347183,
            "unobservable_qty_pct": 0.05033959248901319,
            "unclear_qty_pct": 0.6112664802237315,
            "retail_notional_pct": 0.12895453711885035,
            "mixed_notional_pct": 0.05662937832385843,
            "instit_notional_pct": 0.2032842638747645,
            "ambiguous_notional_pct": 0.5608982545054432,
            "unobservable_notional_pct": 0.05023356617708351,
            "unclear_notional_pct": 0.6111318206825267,
            "run_retail_pct": 0.2641509433962264,
            "run_mixed_pct": 0.09433962264150944,
            "run_instit_pct": 0.1509433962264151,
            "run_unclear_pct": 0.49056603773584906,
            "avg_trade_size": 1922.5320512820513,
            "avg_run_notional": 2829.3867924528295,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.41509433962264153,
            "na_confidence_pct": 0.5849056603773585,
            "avg_feature_coverage": 0.8094339622641512,
            "observable_run_pct": 0.9622641509433962,
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
            "avg_trade_size": 421.75000000000006,
            "avg_run_notional": 421.75000000000006,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
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
            "retail_pct": 0.29693343305908754,
            "mixed_pct": 0.08451757666417352,
            "instit_pct": 0.3642483171278983,
            "ambiguous_pct": 0.25355272999252054,
            "unobservable_pct": 0.0007479431563201197,
            "unclear_pct": 0.25430067314884064,
            "retail_qty_pct": 0.05325939035376349,
            "mixed_qty_pct": 0.1059980704971345,
            "instit_qty_pct": 0.4181973843096916,
            "ambiguous_qty_pct": 0.23087268475628844,
            "unobservable_qty_pct": 0.19167247008312197,
            "unclear_qty_pct": 0.4225451548394104,
            "retail_notional_pct": 0.05268692141531526,
            "mixed_notional_pct": 0.10621548217813769,
            "instit_notional_pct": 0.41184004080215497,
            "ambiguous_notional_pct": 0.2299647333048539,
            "unobservable_notional_pct": 0.1992928222995382,
            "unclear_notional_pct": 0.4292575556043921,
            "run_retail_pct": 0.5707692307692308,
            "run_mixed_pct": 0.08923076923076922,
            "run_instit_pct": 0.1646153846153846,
            "run_unclear_pct": 0.1753846153846154,
            "avg_trade_size": 5516.8893044128645,
            "avg_run_notional": 11347.816923076924,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.10307692307692308,
            "medium_confidence_pct": 0.25384615384615383,
            "low_confidence_pct": 0.37846153846153846,
            "na_confidence_pct": 0.26461538461538464,
            "avg_feature_coverage": 0.8493076923076922,
            "observable_run_pct": 0.9984615384615385,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25,
            "mixed_pct": 0.1401098901098901,
            "instit_pct": 0.3021978021978022,
            "ambiguous_pct": 0.3058608058608059,
            "unobservable_pct": 0.0018315018315018315,
            "unclear_pct": 0.3076923076923077,
            "retail_qty_pct": 0.05442683670867633,
            "mixed_qty_pct": 0.13389328513149268,
            "instit_qty_pct": 0.5208228992132294,
            "ambiguous_qty_pct": 0.29079949643039266,
            "unobservable_qty_pct": 5.74825162089313e-05,
            "unclear_qty_pct": 0.29085697894660156,
            "retail_notional_pct": 0.05466327504182475,
            "mixed_notional_pct": 0.135094160601406,
            "instit_notional_pct": 0.5214815113922363,
            "ambiguous_notional_pct": 0.288703137439803,
            "unobservable_notional_pct": 5.791552472983352e-05,
            "unclear_notional_pct": 0.28876105296453286,
            "run_retail_pct": 0.43993231810490696,
            "run_mixed_pct": 0.1353637901861252,
            "run_instit_pct": 0.12351945854483926,
            "run_unclear_pct": 0.30118443316412863,
            "avg_trade_size": 4313.469505494506,
            "avg_run_notional": 7970.065482233503,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.00676818950930626,
            "medium_confidence_pct": 0.2707275803722504,
            "low_confidence_pct": 0.2859560067681895,
            "na_confidence_pct": 0.4365482233502538,
            "avg_feature_coverage": 0.8419627749576988,
            "observable_run_pct": 0.9983079526226735,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.316141498216409,
            "mixed_pct": 0.17404875148632581,
            "instit_pct": 0.3017241379310345,
            "ambiguous_pct": 0.20734244946492272,
            "unobservable_pct": 0.0007431629013079667,
            "unclear_pct": 0.2080856123662307,
            "retail_qty_pct": 0.060527069084176356,
            "mixed_qty_pct": 0.12978786900621836,
            "instit_qty_pct": 0.5169345457424585,
            "ambiguous_qty_pct": 0.2915324226053803,
            "unobservable_qty_pct": 0.0012180935617664792,
            "unclear_qty_pct": 0.2927505161671468,
            "retail_notional_pct": 0.06060199729400182,
            "mixed_notional_pct": 0.12981393741652697,
            "instit_notional_pct": 0.5173363214504774,
            "ambiguous_notional_pct": 0.2910480194061837,
            "unobservable_notional_pct": 0.001199724432810152,
            "unclear_notional_pct": 0.2922477438389938,
            "run_retail_pct": 0.6226646248085758,
            "run_mixed_pct": 0.1457886676875957,
            "run_instit_pct": 0.09739663093415007,
            "run_unclear_pct": 0.1341500765696784,
            "avg_trade_size": 2498.468118311534,
            "avg_run_notional": 5148.451301684533,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1329249617151608,
            "medium_confidence_pct": 0.4462480857580398,
            "low_confidence_pct": 0.14088820826952528,
            "na_confidence_pct": 0.2799387442572741,
            "avg_feature_coverage": 0.8611638591117917,
            "observable_run_pct": 0.9996937212863706,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14285714285714285,
            "mixed_pct": 0.09523809523809523,
            "instit_pct": 0.38095238095238093,
            "ambiguous_pct": 0.38095238095238093,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38095238095238093,
            "retail_qty_pct": 0.03819095477386935,
            "mixed_qty_pct": 0.07085427135678392,
            "instit_qty_pct": 0.46130653266331656,
            "ambiguous_qty_pct": 0.4296482412060301,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4296482412060301,
            "retail_notional_pct": 0.038965616914475865,
            "mixed_notional_pct": 0.0704863828317224,
            "instit_notional_pct": 0.45780898599155406,
            "ambiguous_notional_pct": 0.4327390142622477,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4327390142622477,
            "run_retail_pct": 0.17647058823529413,
            "run_mixed_pct": 0.11764705882352941,
            "run_instit_pct": 0.29411764705882354,
            "run_unclear_pct": 0.4117647058823529,
            "avg_trade_size": 3377.214285714286,
            "avg_run_notional": 4171.85294117647,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47058823529411764,
            "na_confidence_pct": 0.5294117647058824,
            "avg_feature_coverage": 0.8323529411764706,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1998519615099926,
            "mixed_pct": 0.12213175425610659,
            "instit_pct": 0.3493708364174685,
            "ambiguous_pct": 0.31976313841598814,
            "unobservable_pct": 0.008882309400444115,
            "unclear_pct": 0.32864544781643223,
            "retail_qty_pct": 0.07192994545398043,
            "mixed_qty_pct": 0.12892560420154328,
            "instit_qty_pct": 0.4073062211106742,
            "ambiguous_qty_pct": 0.37900228209628584,
            "unobservable_qty_pct": 0.012835947137516231,
            "unclear_qty_pct": 0.39183822923380207,
            "retail_notional_pct": 0.07325392649696057,
            "mixed_notional_pct": 0.12029742555628671,
            "instit_notional_pct": 0.4070104991139919,
            "ambiguous_notional_pct": 0.3848340910048521,
            "unobservable_notional_pct": 0.014604057827908763,
            "unclear_notional_pct": 0.39943814883276085,
            "run_retail_pct": 0.40229885057471265,
            "run_mixed_pct": 0.1330049261083744,
            "run_instit_pct": 0.15599343185550082,
            "run_unclear_pct": 0.30870279146141216,
            "avg_trade_size": 2362.7879348630645,
            "avg_run_notional": 5241.587027914614,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.021346469622331693,
            "medium_confidence_pct": 0.24958949096880131,
            "low_confidence_pct": 0.28735632183908044,
            "na_confidence_pct": 0.44170771756978655,
            "avg_feature_coverage": 0.8466338259441706,
            "observable_run_pct": 0.9950738916256158,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1457286432160804,
            "mixed_pct": 0.05527638190954774,
            "instit_pct": 0.3417085427135678,
            "ambiguous_pct": 0.32663316582914576,
            "unobservable_pct": 0.1306532663316583,
            "unclear_pct": 0.45728643216080406,
            "retail_qty_pct": 0.09694201243497018,
            "mixed_qty_pct": 0.19160005075498032,
            "instit_qty_pct": 0.36315188427864487,
            "ambiguous_qty_pct": 0.27395000634437255,
            "unobservable_qty_pct": 0.07435604618703211,
            "unclear_qty_pct": 0.3483060525314047,
            "retail_notional_pct": 0.09441467618853162,
            "mixed_notional_pct": 0.1841983029518161,
            "instit_notional_pct": 0.36157001767656843,
            "ambiguous_notional_pct": 0.2818684612762759,
            "unobservable_notional_pct": 0.07794854190680796,
            "unclear_notional_pct": 0.35981700318308385,
            "run_retail_pct": 0.2545454545454545,
            "run_mixed_pct": 0.09090909090909091,
            "run_instit_pct": 0.23636363636363636,
            "run_unclear_pct": 0.4181818181818182,
            "avg_trade_size": 3088.721105527638,
            "avg_run_notional": 5587.777272727273,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4909090909090909,
            "na_confidence_pct": 0.509090909090909,
            "avg_feature_coverage": 0.8040909090909087,
            "observable_run_pct": 0.9272727272727272,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18518518518518517,
            "mixed_pct": 0.1037037037037037,
            "instit_pct": 0.2222222222222222,
            "ambiguous_pct": 0.4222222222222222,
            "unobservable_pct": 0.06666666666666667,
            "unclear_pct": 0.4888888888888889,
            "retail_qty_pct": 0.10747621205256004,
            "mixed_qty_pct": 0.07621205256003624,
            "instit_qty_pct": 0.2816492976891708,
            "ambiguous_qty_pct": 0.49587675577707296,
            "unobservable_qty_pct": 0.03878568192115994,
            "unclear_qty_pct": 0.534662437698233,
            "retail_notional_pct": 0.10736363069804214,
            "mixed_notional_pct": 0.0766873328520473,
            "instit_notional_pct": 0.28150410526062003,
            "ambiguous_notional_pct": 0.49563771990518024,
            "unobservable_notional_pct": 0.03880721128411024,
            "unclear_notional_pct": 0.5344449311892905,
            "run_retail_pct": 0.2441860465116279,
            "run_mixed_pct": 0.12790697674418605,
            "run_instit_pct": 0.16279069767441862,
            "run_unclear_pct": 0.46511627906976744,
            "avg_trade_size": 1628.3533333333332,
            "avg_run_notional": 2556.136046511628,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4069767441860465,
            "na_confidence_pct": 0.5930232558139535,
            "avg_feature_coverage": 0.8133720930232555,
            "observable_run_pct": 0.9651162790697675,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.08928571428571429,
            "mixed_pct": 0.05357142857142857,
            "instit_pct": 0.07142857142857142,
            "ambiguous_pct": 0.19642857142857142,
            "unobservable_pct": 0.5892857142857143,
            "unclear_pct": 0.7857142857142857,
            "retail_qty_pct": 0.02861052290714914,
            "mixed_qty_pct": 0.05698611697551343,
            "instit_qty_pct": 0.16224693560727518,
            "ambiguous_qty_pct": 0.2980865998495186,
            "unobservable_qty_pct": 0.4540698246605437,
            "unclear_qty_pct": 0.7521564245100623,
            "retail_notional_pct": 0.028616690635605457,
            "mixed_notional_pct": 0.056985755148559795,
            "instit_notional_pct": 0.1622459054385681,
            "ambiguous_notional_pct": 0.29808470718210994,
            "unobservable_notional_pct": 0.4540669415951567,
            "unclear_notional_pct": 0.7521516487772666,
            "run_retail_pct": 0.1388888888888889,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.05555555555555555,
            "run_unclear_pct": 0.7222222222222222,
            "avg_trade_size": 562.4839285714286,
            "avg_run_notional": 874.975,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.19444444444444445,
            "na_confidence_pct": 0.8055555555555556,
            "avg_feature_coverage": 0.6791666666666667,
            "observable_run_pct": 0.4722222222222222,
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
            "avg_trade_size": 421.75000000000006,
            "avg_run_notional": 421.75000000000006,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
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
          "trade_id": "BMLL-128",
          "timestamp": "2026-04-21T09:06:18.086700",
          "price": 0.255,
          "size": 3200.0,
          "notional": 816.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1247,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-124",
          "timestamp": "2026-04-21T08:59:16.085300",
          "price": 0.25,
          "size": 10000.0,
          "notional": 2500.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1246,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-123",
          "timestamp": "2026-04-21T08:56:30.477700",
          "price": 0.255,
          "size": 4100.0,
          "notional": 1045.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1245,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-122",
          "timestamp": "2026-04-21T08:54:06.536200",
          "price": 0.255,
          "size": 13300.0,
          "notional": 3391.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1244,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-121",
          "timestamp": "2026-04-21T08:42:48.783700",
          "price": 0.25,
          "size": 16800.0,
          "notional": 4200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1243,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-120",
          "timestamp": "2026-04-21T08:42:48.783700",
          "price": 0.25,
          "size": 6300.0,
          "notional": 1575.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1243,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-119",
          "timestamp": "2026-04-21T08:42:48.783700",
          "price": 0.25,
          "size": 34300.0,
          "notional": 8575.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1243,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-118",
          "timestamp": "2026-04-21T08:42:48.783700",
          "price": 0.25,
          "size": 10000.0,
          "notional": 2500.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1243,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-117",
          "timestamp": "2026-04-21T08:42:48.783700",
          "price": 0.25,
          "size": 32600.0,
          "notional": 8150.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1243,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-116",
          "timestamp": "2026-04-21T08:42:06.271700",
          "price": 0.25,
          "size": 50000.0,
          "notional": 12500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1242,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-115",
          "timestamp": "2026-04-21T08:42:01.666500",
          "price": 0.25,
          "size": 2500.0,
          "notional": 625.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1242,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-114",
          "timestamp": "2026-04-21T08:41:42.514000",
          "price": 0.25,
          "size": 14900.0,
          "notional": 3725.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1241,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-113",
          "timestamp": "2026-04-21T08:41:42.514000",
          "price": 0.25,
          "size": 5000.0,
          "notional": 1250.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1241,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-112",
          "timestamp": "2026-04-21T08:41:42.514000",
          "price": 0.25,
          "size": 100.0,
          "notional": 25.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1241,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-111",
          "timestamp": "2026-04-21T08:41:09.305100",
          "price": 0.25,
          "size": 9900.0,
          "notional": 2475.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1240,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-110",
          "timestamp": "2026-04-21T08:41:09.305100",
          "price": 0.25,
          "size": 100000.0,
          "notional": 25000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1240,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-109",
          "timestamp": "2026-04-21T08:41:09.305100",
          "price": 0.25,
          "size": 200000.0,
          "notional": 50000.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1240,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-108",
          "timestamp": "2026-04-21T08:41:09.305100",
          "price": 0.25,
          "size": 200.0,
          "notional": 50.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1240,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-107",
          "timestamp": "2026-04-21T08:41:09.305000",
          "price": 0.25,
          "size": 31400.0,
          "notional": 7850.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 1240,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-106",
          "timestamp": "2026-04-21T08:33:26.613200",
          "price": 0.25,
          "size": 12800.0,
          "notional": 3200.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1239,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-105",
          "timestamp": "2026-04-21T08:33:26.613100",
          "price": 0.25,
          "size": 7200.0,
          "notional": 1800.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1239,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-104",
          "timestamp": "2026-04-21T08:32:17.981700",
          "price": 0.25,
          "size": 10000.0,
          "notional": 2500.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1238,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-103",
          "timestamp": "2026-04-21T08:31:21.887900",
          "price": 0.25,
          "size": 7800.0,
          "notional": 1950.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1237,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-102",
          "timestamp": "2026-04-21T08:31:21.887900",
          "price": 0.25,
          "size": 2200.0,
          "notional": 550.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1237,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-101",
          "timestamp": "2026-04-21T08:27:00.663700",
          "price": 0.25,
          "size": 1000.0,
          "notional": 250.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1236,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-100",
          "timestamp": "2026-04-21T08:23:45.578200",
          "price": 0.25,
          "size": 1000.0,
          "notional": 250.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 1235,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-99",
          "timestamp": "2026-04-21T08:12:16.727000",
          "price": 0.25,
          "size": 100.0,
          "notional": 25.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 1234,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-98",
          "timestamp": "2026-04-21T08:09:53.772100",
          "price": 0.25,
          "size": 5700.0,
          "notional": 1425.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1233,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-97",
          "timestamp": "2026-04-21T08:09:53.772000",
          "price": 0.25,
          "size": 4300.0,
          "notional": 1075.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1233,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-96",
          "timestamp": "2026-04-21T08:05:30.574900",
          "price": 0.25,
          "size": 25700.0,
          "notional": 6425.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1232,
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
      "total_trades": 1336,
      "price_moving_trades": 138,
      "pct_price_moving": 10.32934131736527,
      "all_movers": {
        "count": 138,
        "avg_size": 2525.6123188405795,
        "median_size": 450.0,
        "retail_count": 92,
        "mixed_count": 13,
        "institutional_count": 20,
        "ambiguous_count": 13,
        "unobservable_count": 0,
        "retail_pct": 66.66666666666666,
        "mixed_pct": 9.420289855072465,
        "instit_pct": 14.492753623188406,
        "unclear_pct": 9.420289855072465
      },
      "positive_movers": {
        "count": 72,
        "avg_size": 2593.7638888888887,
        "median_size": 71.25,
        "retail_count": 55,
        "mixed_count": 7,
        "institutional_count": 7,
        "ambiguous_count": 3,
        "unobservable_count": 0,
        "retail_pct": 76.38888888888889,
        "mixed_pct": 9.722222222222223,
        "instit_pct": 9.722222222222223,
        "unclear_pct": 4.166666666666666
      },
      "negative_movers": {
        "count": 66,
        "avg_size": 2451.2651515151515,
        "median_size": 1079.0,
        "retail_count": 37,
        "mixed_count": 6,
        "institutional_count": 13,
        "ambiguous_count": 10,
        "unobservable_count": 0,
        "retail_pct": 56.060606060606055,
        "mixed_pct": 9.090909090909092,
        "instit_pct": 19.696969696969695,
        "unclear_pct": 15.151515151515152
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
            "avg_short_ratio": 0.0027449071709758593,
            "max_short_ratio": 0.03807390817469205,
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
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
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
          "ticker": "42F",
          "avg_short_ratio": 1.93407586373894e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.68229479730181e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00026504789261486085,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003094086108086766,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.00361056485986067,
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
          "opening": 0.0055643942913663445,
          "continuous": 0.9876665438729637,
          "closing": 0.0067690618356699515,
          "auctions": 0.012333456127036296,
          "other": 0.0
        },
        "1W": {
          "opening": 0.002311700964483867,
          "continuous": 0.9934385268644444,
          "closing": 0.004249772171071682,
          "auctions": 0.006561473135555549,
          "other": 0.0
        },
        "2W": {
          "opening": 0.008216158665352668,
          "continuous": 0.9867610485257738,
          "closing": 0.005005116047545303,
          "auctions": 0.013238951474226183,
          "other": 0.0
        },
        "1M": {
          "opening": 0.009851368494992812,
          "continuous": 0.9859169791866544,
          "closing": 0.004180728644277924,
          "auctions": 0.014083020813345571,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.5215823431082975,
        "1W": 0.45447303337944184,
        "2W": 0.39739808806393323,
        "1M": 0.3615210535821829
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0035
        },
        {
          "time": "09:00",
          "avg_share": 0.2247
        },
        {
          "time": "09:30",
          "avg_share": 0.131
        },
        {
          "time": "10:00",
          "avg_share": 0.0446
        },
        {
          "time": "10:30",
          "avg_share": 0.1034
        },
        {
          "time": "11:00",
          "avg_share": 0.0329
        },
        {
          "time": "11:30",
          "avg_share": 0.0366
        },
        {
          "time": "12:30",
          "avg_share": 0.0006
        },
        {
          "time": "13:00",
          "avg_share": 0.0289
        },
        {
          "time": "13:30",
          "avg_share": 0.0478
        },
        {
          "time": "14:00",
          "avg_share": 0.0327
        },
        {
          "time": "14:30",
          "avg_share": 0.054
        },
        {
          "time": "15:00",
          "avg_share": 0.0601
        },
        {
          "time": "15:30",
          "avg_share": 0.0337
        },
        {
          "time": "16:00",
          "avg_share": 0.0214
        },
        {
          "time": "16:30",
          "avg_share": 0.0742
        },
        {
          "time": "17:00",
          "avg_share": 0.0698
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 5.938863997178573,
          "hhi": 0.2616579427317444,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.7852051086257656,
          "hhi": 0.18088761572131504,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.501339888706334,
          "hhi": 0.4884510186917436,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 3.928769449834688,
          "hhi": 0.5553915351362125,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 1.1382959257803227,
          "hhi": 0.7913246868136653,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 9.098408469588538,
          "hhi": 0.8806172452160547,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 24.461670973298876,
          "hhi": 0.9173535308531967,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 6.102097384204557,
          "hhi": 0.4922094355657774,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 6.36015658076664,
          "hhi": 0.6118049438058095,
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
