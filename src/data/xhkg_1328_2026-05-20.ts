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
      "marketCap": 1276333881.1200001,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6100",
      "name": "TONGDAO LIEPIN",
      "marketCap": 1262262935.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2443",
      "name": "AUTOSTREETS",
      "marketCap": 1398872879.04,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1483",
      "name": "NET-A-GO TECH",
      "marketCap": 1147230000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "331",
      "name": "FSE LIFESTYLE",
      "marketCap": 2452500000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2521",
      "name": "SHENGHUI CLEAN",
      "marketCap": 2242195250.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2508",
      "name": "SAINT BELLA GP",
      "marketCap": 2407900455.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6959",
      "name": "CHANGJIU HLDGS",
      "marketCap": 784380800.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1463",
      "name": "C-LINK SQ",
      "marketCap": 919760479.04,
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
    "asof_date": "2026-05-20",
    "industry": "Consumer Discretionary - Support Services",
    "sector": "Other Support Services",
    "market_cap_display": "1.3B",
    "market_cap_category": "mid",
    "universe_total": 2570,
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
          "score_pca": 51.245136186770424,
          "score_pca_percentile": 51.245136186770424,
          "rank_pca": 1254,
          "total": 2570,
          "adv_notional_sgd": 189240.00000000003,
          "adv_volume_shares": 38000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.000693357436870672,
          "votes": 29.0,
          "trades": 29.0,
          "spread_pct": 0.01329855836748734,
          "spread_ticks": 6.444444444444445,
          "amihud": 1.9816106531388756e-07,
          "volatility": 0.3708526064542435
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5502813418519003,
          "loadings": {
            "log_adv": 0.5350611583441586,
            "log_trades": 0.49691547907135625,
            "log_turnover": 0.5014634894702156,
            "neg_spread": 0.39964956938798574,
            "neg_amihud": 0.05312299889769208,
            "neg_vol": -0.2297326726766546
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
          "peer_median_adv": 679650.0,
          "peer_median_score_pca": 60.038910505836576,
          "peer_median_trades": 64.0,
          "peer_median_volatility": 0.46332199468736446,
          "peer_median_spread_pct": 0.020296773498324892,
          "peer_median_spread_ticks": 4.236961339916956,
          "peer_median_amihud": 3.38318895328479e-08,
          "peer_median_turnover_ratio": 0.0008852628412894397,
          "target_vs_peer": {
            "score_pca_delta": -8.79,
            "adv_delta_pct": -72.2,
            "trades_delta_pct": -54.69,
            "volatility_delta_pct": 19.96,
            "spread_pct_delta_pct": 34.48,
            "spread_ticks_delta_pct": 52.1,
            "amihud_delta_pct": -485.72,
            "turnover_ratio_delta_pct": -21.68
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 51.245136186770424,
            "rank_pca": 1254,
            "adv": 189240.00000000003,
            "trades": 29.0,
            "volatility": 0.3708526064542435,
            "spread_pct": 0.01329855836748734,
            "spread_ticks": 6.444444444444445,
            "amihud": 1.9816106531388756e-07,
            "turnover_ratio": 0.000693357436870672,
            "is_target": true
          },
          {
            "ticker": "6100",
            "score_pca": 62.72373540856031,
            "rank_pca": 959,
            "adv": 450500.0,
            "trades": 302.0,
            "volatility": 0.45049074392034494,
            "spread_pct": 0.019128045124658342,
            "spread_ticks": 4.825192802056555,
            "amihud": 3.4956784674945536e-08,
            "turnover_ratio": 0.0006639457565307079,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 59.80544747081712,
            "rank_pca": 1034,
            "adv": 994896.0,
            "trades": 118.0,
            "volatility": 0.22700152333948884,
            "spread_pct": 0.015122686987982704,
            "spread_ticks": 2.548172757475083,
            "amihud": 1.1825060993664564e-08,
            "turnover_ratio": 0.0011065799260481716,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 60.27237354085603,
            "rank_pca": 1022,
            "adv": 1512000.0,
            "trades": 22.0,
            "volatility": 1.0044664411209447,
            "spread_pct": 0.0341212744090442,
            "spread_ticks": 4.446428571428571,
            "amihud": 5.087505087505084e-08,
            "turnover_ratio": 0.0025019343659218006,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 40.97276264591439,
            "rank_pca": 1518,
            "adv": 277950.0,
            "trades": 11.0,
            "volatility": 0.05233469810220835,
            "spread_pct": 0.005393702282827475,
            "spread_ticks": 2.9583333333333335,
            "amihud": 3.2706994390750276e-08,
            "turnover_ratio": 0.00011333333333333333,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 52.25680933852141,
            "rank_pca": 1228,
            "adv": 431249.99999999994,
            "trades": 34.0,
            "volatility": 0.41277501458124294,
            "spread_pct": 0.021465501871991446,
            "spread_ticks": 2.4672131147540983,
            "amihud": 1.9990004997501164e-08,
            "turnover_ratio": 0.000431064211324919,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 73.26848249027236,
            "rank_pca": 688,
            "adv": 4842941.22,
            "trades": 559.0,
            "volatility": 0.47615324545438403,
            "spread_pct": 0.01053954797323897,
            "spread_ticks": 4.0274941084053415,
            "amihud": 1.0072492229190859e-08,
            "turnover_ratio": 0.005859875474731223,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 31.439688715953306,
            "rank_pca": 1763,
            "adv": 43068.0,
            "trades": 4.0,
            "volatility": 0.503209860608254,
            "spread_pct": 0.05406148978609261,
            "spread_ticks": 20.68421052631579,
            "amihud": 5.968919121862228e-08,
            "turnover_ratio": 0.00017857142857142857,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 61.16731517509728,
            "rank_pca": 999,
            "adv": 908800.0,
            "trades": 94.0,
            "volatility": 1.945766257460927,
            "spread_pct": 0.11731326713131442,
            "spread_ticks": 7.044444444444444,
            "amihud": 1.8005761843790007e-07,
            "turnover_ratio": 0.0023616835144511746,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4607468868158824,
              "median": 0.3126054996063373,
              "min": 0.0,
              "max": 5.197984003613531,
              "p5": 0.0,
              "p95": 1.4931458902138883,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 70770066.38516714,
              "median": 246300.0,
              "min": 0.0,
              "max": 19427078128.050003,
              "p5": 0.0,
              "p95": 281617146.57999945,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0479597041881861,
              "median": 0.02788735717654246,
              "min": 0.0004649470857657017,
              "max": 0.7662226887999475,
              "p5": 0.0013949511880232718,
              "p95": 0.15842293255545944,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006637080591520298,
              "median": 0.0010699107756735504,
              "min": 0.0,
              "max": 1.0615469704283622,
              "p5": 0.0,
              "p95": 0.02327147986814193,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.352439084355239e-06,
              "median": 6.348045563731802e-09,
              "min": 0.0,
              "max": 0.0016339869281045726,
              "p5": 0.0,
              "p95": 5.267441813848235e-06,
              "count": 2199
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1271.7501945525291,
              "median": 24.0,
              "min": 0.0,
              "max": 149367.0,
              "p5": 0.0,
              "p95": 6804.999999999989,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.39682708326593735,
              "median": 0.28898585841219815,
              "min": 0.0,
              "max": 2.1971949050546864,
              "p5": 0.0,
              "p95": 1.7038748901372431,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 351082.61838095234,
              "median": 41034.0,
              "min": 0.0,
              "max": 4842941.22,
              "p5": 0.0,
              "p95": 1486144.7999999977,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06727035273749375,
              "median": 0.05451488865625982,
              "min": 0.005393702282827475,
              "max": 0.20689223841390963,
              "p5": 0.010677498492951389,
              "p95": 0.16277812150405935,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010176055223747708,
              "median": 0.00043036495958533873,
              "min": 0.0,
              "max": 0.010308856616895071,
              "p5": 0.0,
              "p95": 0.00413305494033725,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.597151800628677e-07,
              "median": 1.874539334865275e-07,
              "min": 0.0,
              "max": 5.9171597633135815e-06,
              "p5": 1.0861148173204026e-08,
              "p95": 2.559936986166498e-06,
              "count": 30
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 41.57142857142857,
              "median": 5.0,
              "min": 0.0,
              "max": 559.0,
              "p5": 0.0,
              "p95": 277.5999999999993,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1182675.6524999999,
              "median": 679650.0,
              "min": 43068.0,
              "max": 4842941.22,
              "p5": 125276.70000000001,
              "p95": 3677111.7929999977,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 143.0,
              "median": 64.0,
              "min": 4.0,
              "max": 559.0,
              "p5": 6.45,
              "p95": 469.04999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6340247230734743,
              "median": 0.46332199468736446,
              "min": 0.05233469810220835,
              "max": 1.945766257460927,
              "p5": 0.11346808693525653,
              "p95": 1.6163113217419327,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03464318944589377,
              "median": 0.020296773498324892,
              "min": 0.005393702282827475,
              "max": 0.11731326713131442,
              "p5": 0.007194748274471498,
              "p95": 0.09517514506048674,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.125186207276652,
              "median": 4.236961339916956,
              "min": 2.4672131147540983,
              "max": 20.68421052631579,
              "p5": 2.495548989706443,
              "p95": 15.910292397660813,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.0021649727203196e-08,
              "median": 3.38318895328479e-08,
              "min": 1.0072492229190859e-08,
              "max": 1.8005761843790007e-07,
              "p5": 1.0685891296756655e-08,
              "p95": 1.379286689111528e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016521235013640947,
              "median": 0.0008852628412894397,
              "min": 0.00011333333333333333,
              "max": 0.005859875474731223,
              "p5": 0.00013616666666666665,
              "p95": 0.004684596086647923,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.03750000000000009,
            "market": -0.003547814367408031,
            "sector": 0.0,
            "peers": -0.0055956918712880555,
            "vs_market": 0.04104781436740812,
            "vs_sector": 0.03750000000000009,
            "vs_peers": 0.043095691871288144
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 58.32684824902724,
          "score_pca_percentile": 58.32684824902724,
          "rank_pca": 1072,
          "total": 2570,
          "adv_notional_sgd": 648870.0,
          "adv_volume_shares": 131000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0023902585323699486,
          "votes": 59.0,
          "trades": 59.0,
          "spread_pct": 0.02304675970822617,
          "spread_ticks": 10.47653429602888,
          "amihud": 4.9972130926983415e-08,
          "volatility": 1.5335367709564867
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5688709427000682,
          "loadings": {
            "log_adv": 0.5229845807340547,
            "log_trades": 0.4802835549715877,
            "log_turnover": 0.47170379200532275,
            "neg_spread": 0.45545356808837106,
            "neg_amihud": 0.2398202087148972,
            "neg_vol": 0.09142583088817526
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
          "peer_median_adv": 803340.0,
          "peer_median_score_pca": 61.47859922178988,
          "peer_median_trades": 45.0,
          "peer_median_volatility": 0.40246836912003014,
          "peer_median_spread_pct": 0.016341263082489794,
          "peer_median_spread_ticks": 2.930889662027833,
          "peer_median_amihud": 1.1040498221836089e-08,
          "peer_median_turnover_ratio": 0.0010791595010465384,
          "target_vs_peer": {
            "score_pca_delta": -3.15,
            "adv_delta_pct": -19.2,
            "trades_delta_pct": 31.11,
            "volatility_delta_pct": -281.03,
            "spread_pct_delta_pct": -41.03,
            "spread_ticks_delta_pct": 257.45,
            "amihud_delta_pct": -352.63,
            "turnover_ratio_delta_pct": 121.49
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 58.32684824902724,
            "rank_pca": 1072,
            "adv": 648870.0,
            "trades": 59.0,
            "volatility": 1.5335367709564867,
            "spread_pct": 0.02304675970822617,
            "spread_ticks": 10.47653429602888,
            "amihud": 4.9972130926983415e-08,
            "turnover_ratio": 0.0023902585323699486,
            "is_target": true
          },
          {
            "ticker": "6100",
            "score_pca": 69.72762645914396,
            "rank_pca": 779,
            "adv": 1001879.9999999999,
            "trades": 284.0,
            "volatility": 0.3111358260251549,
            "spread_pct": 0.00776644918185727,
            "spread_ticks": 1.9162929745889388,
            "amihud": 1.1920656112912467e-08,
            "turnover_ratio": 0.0014590594871596023,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 65.6420233463035,
            "rank_pca": 884,
            "adv": 1006600.0,
            "trades": 118.0,
            "volatility": 0.27646800182228853,
            "spread_pct": 0.012448965932668445,
            "spread_ticks": 2.325,
            "amihud": 1.0160340330759711e-08,
            "turnover_ratio": 0.0011065799260481716,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 50.856031128404666,
            "rank_pca": 1264,
            "adv": 604800.0,
            "trades": 17.0,
            "volatility": 0.4118392595396606,
            "spread_pct": 0.04147250698974841,
            "spread_ticks": 5.235294117647059,
            "amihud": 3.2779720279720306e-08,
            "turnover_ratio": 0.001051739076044905,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 57.66536964980544,
            "rank_pca": 1089,
            "adv": 546518.84,
            "trades": 21.0,
            "volatility": 0.06671479054227253,
            "spread_pct": 0.003923870210446962,
            "spread_ticks": 2.1666666666666665,
            "amihud": 3.448506555266246e-09,
            "turnover_ratio": 0.00021961777777777778,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 65.29182879377431,
            "rank_pca": 893,
            "adv": 2371875.0,
            "trades": 69.0,
            "volatility": 0.3949121498180724,
            "spread_pct": 0.020233560232311147,
            "spread_ticks": 2.2526041666666665,
            "amihud": 4.807972002217435e-09,
            "turnover_ratio": 0.0022932616042485687,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 73.26848249027236,
            "rank_pca": 688,
            "adv": 3577348.4999999995,
            "trades": 427.0,
            "volatility": 0.4780309361948479,
            "spread_pct": 0.008744785308266783,
            "spread_ticks": 3.536779324055666,
            "amihud": 4.6132438663394364e-09,
            "turnover_ratio": 0.00400751469000616,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 27.315175097276263,
            "rank_pca": 1869,
            "adv": 17730.0,
            "trades": 3.0,
            "volatility": 0.41002458842198786,
            "spread_pct": 0.046572819365872944,
            "spread_ticks": 17.7,
            "amihud": 1.606374092398662e-07,
            "turnover_ratio": 7.239382239382239e-05,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 1.3618677042801557,
            "rank_pca": 2536,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.4391349503577382,
            "spread_pct": 0.199421965317919,
            "spread_ticks": 11.5,
            "amihud": 7.541478129713441e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6715294854390154,
              "median": 0.5022840954788743,
              "min": 0.0,
              "max": 12.716269334404805,
              "p5": 0.16720681306353216,
              "p95": 1.6713677432925578,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61493670.80147341,
              "median": 221406.0,
              "min": 0.0,
              "max": 12214990420.0,
              "p5": 0.0,
              "p95": 255279270.25199974,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04369335707278293,
              "median": 0.02823258916804223,
              "min": 0.0004644488055358157,
              "max": 0.5912209998910793,
              "p5": 0.001428450818730307,
              "p95": 0.13850979779937872,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004308608814045892,
              "median": 0.0009751414348347415,
              "min": 0.0,
              "max": 0.2531131591700725,
              "p5": 0.0,
              "p95": 0.01693603156896355,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.93114515345098e-07,
              "median": 4.676515253409587e-08,
              "min": 0.0,
              "max": 0.00018237082066869308,
              "p5": 2.7452315734562228e-11,
              "p95": 4.1840515782900976e-06,
              "count": 2563
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1103.5110894941633,
              "median": 21.0,
              "min": 0.0,
              "max": 71810.0,
              "p5": 0.0,
              "p95": 6110.549999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7340700549175697,
              "median": 0.5187596658767136,
              "min": 0.06671479054227253,
              "max": 2.1474262501871384,
              "p5": 0.15176179211526802,
              "p95": 1.845474859960434,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 421912.5064285714,
              "median": 39939.0,
              "min": 0.0,
              "max": 3577348.4999999995,
              "p5": 0.0,
              "p95": 2593153.749999999,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06417710542048304,
              "median": 0.046859258305486866,
              "min": 0.003923870210446962,
              "max": 0.2119205298013244,
              "p5": 0.007815365988177746,
              "p95": 0.18972882169426428,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014054112421110737,
              "median": 0.000298901794704436,
              "min": 0.0,
              "max": 0.020787748140495707,
              "p5": 0.0,
              "p95": 0.003930032714400895,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6785020972370892e-06,
              "median": 2.556369417304352e-07,
              "min": 3.225469229672036e-09,
              "max": 2.8248587570621557e-05,
              "p5": 4.6229802731333364e-09,
              "p95": 6.6872588487638375e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 40.357142857142854,
              "median": 6.0,
              "min": 0.0,
              "max": 427.0,
              "p5": 0.0,
              "p95": 277.24999999999943,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1140844.0425,
              "median": 803340.0,
              "min": 0.0,
              "max": 3577348.4999999995,
              "p5": 6205.500000000001,
              "p95": 3155432.774999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 117.375,
              "median": 45.0,
              "min": 0.0,
              "max": 427.0,
              "p5": 1.05,
              "p95": 376.94999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4735325628402528,
              "median": 0.40246836912003014,
              "min": 0.06671479054227253,
              "max": 1.4391349503577382,
              "p5": 0.14012841449027813,
              "p95": 1.102748545400726,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04257311531738637,
              "median": 0.016341263082489794,
              "min": 0.003923870210446962,
              "max": 0.199421965317919,
              "p5": 0.00526877285044057,
              "p95": 0.1459247642347028,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.829079656203125,
              "median": 2.930889662027833,
              "min": 1.9162929745889388,
              "max": 17.7,
              "p5": 2.0039237668161434,
              "p95": 15.529999999999996,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.712307472625653e-07,
              "median": 1.1040498221836089e-08,
              "min": 3.448506555266246e-09,
              "max": 7.541478129713441e-06,
              "p5": 3.856164614141863e-09,
              "p95": 4.9581838775476865e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001276270797959876,
              "median": 0.0010791595010465384,
              "min": 0.0,
              "max": 0.00400751469000616,
              "p5": 2.533783783783784e-05,
              "p95": 0.003407526109991002,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.551401869158878,
            "market": 0.01655570232671688,
            "sector": -0.0018069339253068417,
            "peers": -0.04719155709890521,
            "vs_market": 0.5348461668321611,
            "vs_sector": 0.5532088030841849,
            "vs_peers": 0.5985934262577832
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 51.20622568093385,
          "score_pca_percentile": 51.20622568093385,
          "rank_pca": 1255,
          "total": 2570,
          "adv_notional_sgd": 274560.0,
          "adv_volume_shares": 82400.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0015034908631090362,
          "votes": 25.0,
          "trades": 25.0,
          "spread_pct": 0.02865531933682143,
          "spread_ticks": 9.578947368421053,
          "amihud": 7.6071080817916e-08,
          "volatility": 1.187590635159495
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6070361177986145,
          "loadings": {
            "log_adv": 0.5056164741043646,
            "log_trades": 0.4604726020166664,
            "log_turnover": 0.4570616655455383,
            "neg_spread": 0.46276733113223634,
            "neg_amihud": 0.3073770239355957,
            "neg_vol": 0.12156216594094399
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
          "peer_median_adv": 1070879.42,
          "peer_median_score_pca": 63.59922178988327,
          "peer_median_trades": 65.5,
          "peer_median_volatility": 0.5831352504454327,
          "peer_median_spread_pct": 0.015218615653248994,
          "peer_median_spread_ticks": 3.491176139323375,
          "peer_median_amihud": 8.29524695662317e-09,
          "peer_median_turnover_ratio": 0.0010624274472014134,
          "target_vs_peer": {
            "score_pca_delta": -12.39,
            "adv_delta_pct": -74.4,
            "trades_delta_pct": -61.83,
            "volatility_delta_pct": -103.66,
            "spread_pct_delta_pct": -88.29,
            "spread_ticks_delta_pct": 174.38,
            "amihud_delta_pct": -817.04,
            "turnover_ratio_delta_pct": 41.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 51.20622568093385,
            "rank_pca": 1255,
            "adv": 274560.0,
            "trades": 25.0,
            "volatility": 1.187590635159495,
            "spread_pct": 0.02865531933682143,
            "spread_ticks": 9.578947368421053,
            "amihud": 7.6071080817916e-08,
            "turnover_ratio": 0.0015034908631090362,
            "is_target": true
          },
          {
            "ticker": "6100",
            "score_pca": 72.60700389105058,
            "rank_pca": 705,
            "adv": 1748976.0000000002,
            "trades": 508.0,
            "volatility": 0.4723822211569155,
            "spread_pct": 0.006432945770835203,
            "spread_ticks": 1.8040685224839401,
            "amihud": 8.854446609483149e-09,
            "turnover_ratio": 0.0024030267614280117,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 68.79377431906615,
            "rank_pca": 803,
            "adv": 1595240.0,
            "trades": 182.0,
            "volatility": 0.5907912748667242,
            "spread_pct": 0.010013630701354278,
            "spread_ticks": 1.9545454545454546,
            "amihud": 7.736047303763193e-09,
            "turnover_ratio": 0.0015688694797535375,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 43.540856031128406,
            "rank_pca": 1452,
            "adv": 283800.0,
            "trades": 15.0,
            "volatility": 0.9693479719378956,
            "spread_pct": 0.04518072289156618,
            "spread_ticks": 5.354166666666667,
            "amihud": 3.757816257816255e-08,
            "turnover_ratio": 0.000555985414649289,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 59.221789883268485,
            "rank_pca": 1049,
            "adv": 546518.84,
            "trades": 20.0,
            "volatility": 0.10728367038364842,
            "spread_pct": 0.005393702282827475,
            "spread_ticks": 3.0136986301369864,
            "amihud": 7.174881308145439e-09,
            "turnover_ratio": 0.00022,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.97665369649806,
            "rank_pca": 824,
            "adv": 3646050.0000000005,
            "trades": 111.0,
            "volatility": 0.651244489021948,
            "spread_pct": 0.02042360060514371,
            "spread_ticks": 2.192622950819672,
            "amihud": 5.71368169650641e-09,
            "turnover_ratio": 0.003965790744189255,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 76.69260700389106,
            "rank_pca": 600,
            "adv": 8494300.0,
            "trades": 566.0,
            "volatility": 0.4599280363925466,
            "spread_pct": 0.008697554134554752,
            "spread_ticks": 3.9686536485097634,
            "amihud": 2.0207468360016873e-09,
            "turnover_ratio": 0.008100955702054342,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 35.447470817120625,
            "rank_pca": 1660,
            "adv": 42048.0,
            "trades": 5.0,
            "volatility": 0.5754792260241411,
            "spread_pct": 0.03978469459396209,
            "spread_ticks": 18.925925925925927,
            "amihud": 1.3912390897539185e-07,
            "turnover_ratio": 0.000148005148005148,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 4.124513618677042,
            "rank_pca": 2465,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.0624178497885413,
            "spread_pct": 0.16371681415929196,
            "spread_ticks": 9.727941176470589,
            "amihud": 3.8609245788443057e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7196460852017147,
              "median": 0.5812854371406497,
              "min": 0.0,
              "max": 16.15738820474862,
              "p5": 0.2214873247536304,
              "p95": 1.6584354579762783,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59017183.756557405,
              "median": 219744.0,
              "min": 0.0,
              "max": 12307843080.0,
              "p5": 0.0,
              "p95": 234558909.2199998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04313643407672629,
              "median": 0.02876493065556507,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014449401568078955,
              "p95": 0.1331169221520889,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038550792784433022,
              "median": 0.0008788385287665518,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.014650219493673951,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.939396995815482e-07,
              "median": 4.819284733514202e-08,
              "min": 0.0,
              "max": 6.966637265889136e-05,
              "p5": 4.956422516864857e-11,
              "p95": 3.4821132579018315e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1070.2317120622567,
              "median": 20.0,
              "min": 0.0,
              "max": 68317.0,
              "p5": 0.0,
              "p95": 5871.399999999998,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7874591434087054,
              "median": 0.6907745319475525,
              "min": 0.10728367038364842,
              "max": 1.6909688946082797,
              "p5": 0.259032418163383,
              "p95": 1.4602275116434638,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 583380.2247619048,
              "median": 39284.0,
              "min": 0.0,
              "max": 8494300.0,
              "p5": 0.0,
              "p95": 3551196.2999999924,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0644667164700288,
              "median": 0.049630873012949744,
              "min": 0.005064359364373799,
              "max": 0.2160454832596336,
              "p5": 0.0065461761890211806,
              "p95": 0.16265086320787298,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012511493228581955,
              "median": 0.00028762194211207775,
              "min": 0.0,
              "max": 0.010349764778073225,
              "p5": 0.0,
              "p95": 0.00789419745416107,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1527103502327846e-06,
              "median": 2.771938208094278e-07,
              "min": 2.0207468360016873e-09,
              "max": 1.0871928680147858e-05,
              "p5": 5.786741677088362e-09,
              "p95": 5.717262077432396e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 51.04761904761905,
              "median": 8.0,
              "min": 0.0,
              "max": 566.0,
              "p5": 0.0,
              "p95": 373.8999999999991,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2044616.605,
              "median": 1070879.42,
              "min": 0.0,
              "max": 8494300.0,
              "p5": 14716.800000000001,
              "p95": 6797412.499999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 175.875,
              "median": 65.5,
              "min": 0.0,
              "max": 566.0,
              "p5": 1.7500000000000002,
              "p95": 545.6999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6111093424465451,
              "median": 0.5831352504454327,
              "min": 0.10728367038364842,
              "max": 1.0624178497885413,
              "p5": 0.23070919848676277,
              "p95": 1.0298433925408153,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03745545814244196,
              "median": 0.015218615653248994,
              "min": 0.005393702282827475,
              "max": 0.16371681415929196,
              "p5": 0.00575743750363018,
              "p95": 0.12222918221558787,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.867702871944875,
              "median": 3.491176139323375,
              "min": 1.8040685224839401,
              "max": 18.925925925925927,
              "p5": 1.8567354487054701,
              "p95": 15.706631263616554,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.428679164898561e-08,
              "median": 8.29524695662317e-09,
              "min": 2.0207468360016873e-09,
              "max": 3.8609245788443057e-07,
              "p5": 3.3132740371783404e-09,
              "p95": 2.996534657662669e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002120329156259948,
              "median": 0.0010624274472014134,
              "min": 0.0,
              "max": 0.008100955702054342,
              "p5": 5.180180180180181e-05,
              "p95": 0.006653647966801559,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.8175182481751824,
            "market": 0.024009398025444995,
            "sector": -0.023664524847017865,
            "peers": -0.15858681862263757,
            "vs_market": 0.7935088501497374,
            "vs_sector": 0.8411827730222002,
            "vs_peers": 0.9761050667978199
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 51.36186770428015,
          "score_pca_percentile": 51.36186770428015,
          "rank_pca": 1251,
          "total": 2570,
          "adv_notional_sgd": 237320.0,
          "adv_volume_shares": 70000.0,
          "free_float_shares": 54805787.0,
          "turnover_ratio": 0.0012772373837091327,
          "votes": 25.0,
          "trades": 25.0,
          "spread_pct": 0.02767971574641715,
          "spread_ticks": 9.062417824526491,
          "amihud": 1.0621583567645438e-07,
          "volatility": 1.0741569108954658
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6304259807871022,
          "loadings": {
            "log_adv": 0.49580526868262037,
            "log_trades": 0.4490790677276847,
            "log_turnover": 0.44837881735388746,
            "neg_spread": 0.4594979579114632,
            "neg_amihud": 0.354048191095558,
            "neg_vol": 0.12236448700859119
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
          "peer_median_adv": 1873580.5,
          "peer_median_score_pca": 62.0817120622568,
          "peer_median_trades": 70.25,
          "peer_median_volatility": 0.5594147130459015,
          "peer_median_spread_pct": 0.016261543049474803,
          "peer_median_spread_ticks": 3.654110192870973,
          "peer_median_amihud": 6.931040250419156e-09,
          "peer_median_turnover_ratio": 0.0019129967353350551,
          "target_vs_peer": {
            "score_pca_delta": -10.72,
            "adv_delta_pct": -87.3,
            "trades_delta_pct": -64.41,
            "volatility_delta_pct": -92.01,
            "spread_pct_delta_pct": -70.22,
            "spread_ticks_delta_pct": 148.01,
            "amihud_delta_pct": -1432.47,
            "turnover_ratio_delta_pct": -33.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 51.36186770428015,
            "rank_pca": 1251,
            "adv": 237320.0,
            "trades": 25.0,
            "volatility": 1.0741569108954658,
            "spread_pct": 0.02767971574641715,
            "spread_ticks": 9.062417824526491,
            "amihud": 1.0621583567645438e-07,
            "turnover_ratio": 0.0012772373837091327,
            "is_target": true
          },
          {
            "ticker": "6100",
            "score_pca": 74.74708171206225,
            "rank_pca": 650,
            "adv": 3255211.0,
            "trades": 673.0,
            "volatility": 0.4801539193586653,
            "spread_pct": 0.0053831467945972804,
            "spread_ticks": 1.7954694652593062,
            "amihud": 5.730492787319929e-09,
            "turnover_ratio": 0.003559583792817326,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 74.6692607003891,
            "rank_pca": 652,
            "adv": 5807904.0,
            "trades": 491.0,
            "volatility": 0.5869789838782443,
            "spread_pct": 0.005702077540409381,
            "spread_ticks": 1.535563863326816,
            "amihud": 2.2950737857801668e-09,
            "turnover_ratio": 0.00395151058698762,
            "is_target": false
          },
          {
            "ticker": "1483",
            "score_pca": 34.59143968871595,
            "rank_pca": 1682,
            "adv": 136110.0,
            "trades": 7.0,
            "volatility": 0.7755094811953305,
            "spread_pct": 0.06256874783087392,
            "spread_ticks": 7.2063492063492065,
            "amihud": 5.939568454714328e-08,
            "turnover_ratio": 0.0002664096778527843,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 57.081712062256805,
            "rank_pca": 1104,
            "adv": 491950.0,
            "trades": 18.0,
            "volatility": 0.10073437372188168,
            "spread_pct": 0.005339545696086024,
            "spread_ticks": 3.0346270928462706,
            "amihud": 6.9567862986557384e-09,
            "turnover_ratio": 0.0001911111111111111,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.0817120622568,
            "rank_pca": 847,
            "adv": 3945112.5,
            "trades": 122.5,
            "volatility": 1.0004629168019263,
            "spread_pct": 0.023024942758919212,
            "spread_ticks": 2.015431260747579,
            "amihud": 6.905294202182574e-09,
            "turnover_ratio": 0.005263294020277261,
            "is_target": false
          },
          {
            "ticker": "2508",
            "score_pca": 75.68093385214007,
            "rank_pca": 626,
            "adv": 7226430.0,
            "trades": 560.0,
            "volatility": 0.5318504422135587,
            "spread_pct": 0.009498143340030393,
            "spread_ticks": 4.273593292895676,
            "amihud": 2.2634295913480702e-09,
            "turnover_ratio": 0.007183159564711768,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 36.92607003891051,
            "rank_pca": 1622,
            "adv": 45054.0,
            "trades": 6.5,
            "volatility": 0.4910238739465621,
            "spread_pct": 0.039866626546195584,
            "spread_ticks": 20.340909090909093,
            "amihud": 1.5541667859212978e-07,
            "turnover_ratio": 0.00015444015444015445,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 7.470817120622568,
            "rank_pca": 2379,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.8457829414694216,
            "spread_pct": 0.09506098284284653,
            "spread_ticks": 6.201871657754011,
            "amihud": 3.164476848687375e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7483147301179937,
              "median": 0.605061240008339,
              "min": 0.0,
              "max": 33.69063316055627,
              "p5": 0.22420189997375514,
              "p95": 1.620966664417821,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 55789391.36964397,
              "median": 212763.0,
              "min": 0.0,
              "max": 11892751420.0,
              "p5": 0.0,
              "p95": 221462819.30399984,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042062614687010925,
              "median": 0.027786432019735404,
              "min": 0.0005759578485903171,
              "max": 0.586235634471959,
              "p5": 0.0014171090838533925,
              "p95": 0.13293266374782126,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035345008282309082,
              "median": 0.0008306667028089253,
              "min": 0.0,
              "max": 0.18523236964248901,
              "p5": 0.0,
              "p95": 0.014471303919301359,
              "count": 2554
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.129067217651611e-07,
              "median": 4.734371574929171e-08,
              "min": 0.0,
              "max": 1.9124298969909754e-05,
              "p5": 5.2975151998027814e-11,
              "p95": 3.1600228288865187e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1018.3235408560312,
              "median": 19.0,
              "min": 0.0,
              "max": 80079.0,
              "p5": 0.0,
              "p95": 5558.874999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8584264329895054,
              "median": 0.7806332082606112,
              "min": 0.10073437372188168,
              "max": 1.9639758393675537,
              "p5": 0.24682050489391502,
              "p95": 1.8307404918800083,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 746728.3176785714,
              "median": 36283.901249999995,
              "min": 0.0,
              "max": 7226430.0,
              "p5": 0.0,
              "p95": 5136186.874999994,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06119133972498566,
              "median": 0.05469883071973301,
              "min": 0.004643426425290164,
              "max": 0.21009110060003078,
              "p5": 0.005399093331887886,
              "p95": 0.12702852509924853,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015447109391355897,
              "median": 0.0002423697559029563,
              "min": 0.0,
              "max": 0.014326691286017311,
              "p5": 0.0,
              "p95": 0.007087166287490035,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1121987053368178e-06,
              "median": 2.727212532489328e-07,
              "min": 2.2634295913480702e-09,
              "max": 1.5472092753312613e-05,
              "p5": 3.343159239740306e-09,
              "p95": 3.2400117596049377e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 66.5,
              "median": 7.0,
              "min": 0.0,
              "max": 673.0,
              "p5": 0.0,
              "p95": 486.5999999999996,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2613471.4375,
              "median": 1873580.5,
              "min": 0.0,
              "max": 7226430.0,
              "p5": 15768.900000000001,
              "p95": 6729945.899999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 234.75,
              "median": 70.25,
              "min": 0.0,
              "max": 673.0,
              "p5": 2.2750000000000004,
              "p95": 633.4499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6015621165731988,
              "median": 0.5594147130459015,
              "min": 0.10073437372188168,
              "max": 1.0004629168019263,
              "p5": 0.23353121469475596,
              "p95": 0.9463249254355496,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03080552666874479,
              "median": 0.016261543049474803,
              "min": 0.005339545696086024,
              "max": 0.09506098284284653,
              "p5": 0.005354806080564964,
              "p95": 0.0836887005886561,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.800476866260995,
              "median": 3.654110192870973,
              "min": 1.535563863326816,
              "max": 20.340909090909093,
              "p5": 1.6265308240031877,
              "p95": 15.743813131313125,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.942639058416214e-08,
              "median": 6.931040250419156e-09,
              "min": 2.2634295913480702e-09,
              "max": 3.164476848687375e-07,
              "p5": 2.274505059399304e-09,
              "p95": 2.600868326719247e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002571188613524753,
              "median": 0.0019129967353350551,
              "min": 0.0,
              "max": 0.007183159564711768,
              "p5": 5.405405405405406e-05,
              "p95": 0.0065112066241596895,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.023529411764706243,
            "market": 0.13602925408451405,
            "sector": -0.023664524847017865,
            "peers": -0.17312232062189503,
            "vs_market": -0.1595586658492203,
            "vs_sector": 0.000135113082311622,
            "vs_peers": 0.1495929088571888
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term liquidity looks weak, with today’s average volume down 70.8% from the 1M average and bid depth at 0.58x of ask depth. That matters because immediate access can feel thinner on the buy side.",
        "market_comparison": "Return 3.8% vs peers -0.6%."
      },
      "30d": {
        "liquidity": "Monthly tradability is below where it may be for the company’s size, with primary average daily volume at HK$237.3K compared with a peer median of HK$1.9M. That matters because access screens weaker than peers even before day-to-day conditions are considered.",
        "market_comparison": "The stock has materially outperformed, returning 55.1% over 1M compared with peers at -4.7% and the market at 1.7%. That matters because the return backdrop is firmer than peers despite weaker structural liquidity."
      },
      "3m": {
        "liquidity": "Liquidity looks weak over the medium term, with the broader profile still anchored by a 6M score of 51.4 compared with a peer median of 62.1. That matters because access has been below peer standards for more than just a single session.",
        "market_comparison": "Recent price leadership remains notable, with the 1M return well ahead of peers and the market. That matters because trading interest may be supported by performance even though access remains below peer levels."
      },
      "6m": {
        "liquidity": "Structural liquidity is weak, with a 6M score of 51.4 compared with a peer median of 62.1. That matters because the stock screens as less accessible than peers on a sustained basis.",
        "market_comparison": "The stock’s recent return backdrop is much stronger than peers, with 1M performance at 55.1% compared with peers at -4.7%. That matters because relative strength can help sustain attention, but it does not close the structural liquidity gap."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 244,
      "reporting_window_days": 63,
      "available_history_days": 244,
      "n_regimes": 4,
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.999999993336713,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.2938039082148405,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.4%",
          "display_range": null,
          "display_text": "29.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "share_pct",
          "value_pct": 29.4,
          "plain_english": "Market explains about 29.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3035225785860593,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "30.4%",
          "display_range": null,
          "display_text": "30.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "share_pct",
          "value_pct": 30.4,
          "plain_english": "Sector explains about 30.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.4026735131991003,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "40.3%",
          "display_range": null,
          "display_text": "40.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "share_pct",
          "value_pct": 40.3,
          "plain_english": "Company-specific explains about 40.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 4.997879012451772,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "5.00",
          "display_range": null,
          "display_text": "5.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 5.00% stock move in the same direction in this state.",
          "value_num": 5.0
        },
        "beta_stock_lag": {
          "median": 1.9332510161921694,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.93",
          "display_range": null,
          "display_text": "1.93",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "lag_beta",
          "value_num": 1.93
        },
        "beta_sector": {
          "median": -7.559125905985019,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.56",
          "display_range": null,
          "display_text": "-7.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 7.56% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 244 trading days of history.",
          "value_num": -7.56
        },
        "beta_market_lag": {
          "median": -2.800358837460369,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.80",
          "display_range": null,
          "display_text": "-2.80",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "lag_beta",
          "value_num": -2.8
        },
        "beta_sector_lag": {
          "median": -11.04980148666234,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-11.05",
          "display_range": null,
          "display_text": "-11.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "kind": "lag_beta",
          "value_num": -11.05
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 244 trading days relative to the 252-day target."
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
            "median": 0.38553464997407166,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.6%",
            "display_range": null,
            "display_text": "38.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 38.6,
            "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23641828271040313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.6%",
              "display_range": null,
              "display_text": "23.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 23.6,
              "plain_english": "Market explains about 23.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37804706731552523,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.8%",
              "display_range": null,
              "display_text": "37.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 37.8,
              "plain_english": "Sector explains about 37.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38553464997407166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
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
            "median": 0.47582682422873646,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Market explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47582682422873646,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Market explains about 47.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07479712193549541,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.5%",
              "display_range": null,
              "display_text": "7.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 7.5,
              "plain_english": "Sector explains about 7.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.449376053835768,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.9%",
              "display_range": null,
              "display_text": "44.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.9,
              "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
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
            "median": 0.37617946182954914,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Sector explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24846880739118377,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.8%",
              "display_range": null,
              "display_text": "24.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.8,
              "plain_english": "Market explains about 24.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37617946182954914,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3753517307792672,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
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
            "median": 0.5386532238403463,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.9%",
            "display_range": null,
            "display_text": "53.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.9,
            "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2814937043231073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.1%",
              "display_range": null,
              "display_text": "28.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.1,
              "plain_english": "Market explains about 28.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1798530718365465,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.0%",
              "display_range": null,
              "display_text": "18.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.0,
              "plain_english": "Sector explains about 18.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5386532238403463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.9%",
              "display_range": null,
              "display_text": "53.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.9,
              "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
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
            "median": 0.5447594983701284,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.5%",
            "display_range": null,
            "display_text": "54.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 54.5,
            "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2427575822804555,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Market explains about 24.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21248291934941613,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.2%",
              "display_range": null,
              "display_text": "21.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.2,
              "plain_english": "Sector explains about 21.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5447594983701284,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
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
            "median": 0.5726944510904456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.3%",
            "display_range": null,
            "display_text": "57.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.3,
            "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2920225673004428,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.2%",
              "display_range": null,
              "display_text": "29.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.2,
              "plain_english": "Market explains about 29.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1352829816091115,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5726944510904456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly company-driven."
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
            "median": 0.6807245311412256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.1%",
            "display_range": null,
            "display_text": "68.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 68.1,
            "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.06288289959006914,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.3%",
              "display_range": null,
              "display_text": "6.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 6.3,
              "plain_english": "Market explains about 6.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2563925692687054,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.6%",
              "display_range": null,
              "display_text": "25.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.6,
              "plain_english": "Sector explains about 25.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6807245311412256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
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
            "median": 0.5789504633587718,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.9%",
            "display_range": null,
            "display_text": "57.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 57.9,
            "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23780366401210667,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Market explains about 23.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18324587262912154,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5789504633587718,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.9%",
              "display_range": null,
              "display_text": "57.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 57.9,
              "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
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
            "median": 0.8259040528095414,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.6%",
            "display_range": null,
            "display_text": "82.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 82.6,
            "plain_english": "Company-specific explains about 82.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.04319703091178863,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.3%",
              "display_range": null,
              "display_text": "4.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.3,
              "plain_english": "Market explains about 4.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13089891627866995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.1%",
              "display_range": null,
              "display_text": "13.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.1,
              "plain_english": "Sector explains about 13.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8259040528095414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.6%",
              "display_range": null,
              "display_text": "82.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.6,
              "plain_english": "Company-specific explains about 82.6% of price moves in the current state."
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
            "median": 0.6058802497999994,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.6%",
            "display_range": null,
            "display_text": "60.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 60.6,
            "plain_english": "Company-specific explains about 60.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2158883576172272,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Market explains about 21.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1782313925827734,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6058802497999994,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.6%",
              "display_range": null,
              "display_text": "60.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 60.6,
              "plain_english": "Company-specific explains about 60.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Still clearly company-driven."
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
            "median": 0.42016370203749687,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.0%",
            "display_range": null,
            "display_text": "42.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.0,
            "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1615050100714235,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.2%",
              "display_range": null,
              "display_text": "16.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 16.2,
              "plain_english": "Market explains about 16.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.41833128789107965,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Sector explains about 41.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42016370203749687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.0%",
              "display_range": null,
              "display_text": "42.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.0,
              "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4668406498909942,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.7%",
            "display_range": null,
            "display_text": "46.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 46.7,
            "plain_english": "Company-specific explains about 46.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3648358013209242,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Market explains about 36.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16832354878808156,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.8%",
              "display_range": null,
              "display_text": "16.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 16.8,
              "plain_english": "Sector explains about 16.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4668406498909942,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.7%",
              "display_range": null,
              "display_text": "46.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.7,
              "plain_english": "Company-specific explains about 46.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5807952371997285,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.1%",
            "display_range": null,
            "display_text": "58.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 58.1,
            "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15173905722786005,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.2%",
              "display_range": null,
              "display_text": "15.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 15.2,
              "plain_english": "Market explains about 15.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2674657055724114,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Sector explains about 26.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5807952371997285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.1%",
              "display_range": null,
              "display_text": "58.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 58.1,
              "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.4999836369784801,
          "expected_duration_days": 40.30728479436142,
          "current_probability": 2.8667146568041334e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 121.99600742274914,
          "volatility": {
            "median": 0.037979337449140144,
            "low": 0.037979337449140144,
            "high": 0.037979337449140144
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.2417800522692534,
          "jump_rate": 0.049181460180731745,
          "risk_score": 0.14346059071235534,
          "metrics": {
            "rolling_vol_10d": 0.03811127869391985,
            "downside_vol_10d": 0.022689253390440048,
            "drawdown_21d": 0.1753243198097826,
            "amihud_stress": 1.71812906873746,
            "spread_rel": 252.04807893011173,
            "spread_ticks": 11.345329884409718,
            "log_notional": 13.148908038641338,
            "log_trade_count": 3.7559659302968833
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.10655649685499352,
          "expected_duration_days": 2.894747476277517,
          "current_probability": 7.433350939089083e-117,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.999785232618418,
          "volatility": {
            "median": 0.002484107418386516,
            "low": 0.002484107418386516,
            "high": 0.002484107418386516
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.17378561366414283,
          "jump_rate": 0.07692246820660391,
          "risk_score": 0.16533103225216603,
          "metrics": {
            "rolling_vol_10d": 0.058358490743513354,
            "downside_vol_10d": 0.017536336007803098,
            "drawdown_21d": 0.07466733363869989,
            "amihud_stress": 0.6580450939506235,
            "spread_rel": 926.7817352108262,
            "spread_ticks": 17.086869639491194,
            "log_notional": 2.3990547323793967,
            "log_trade_count": 0.29529143231640687
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.22487275614182559,
          "expected_duration_days": 8.939799663971666,
          "current_probability": 0.999999993336713,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 54.868952498605445,
          "volatility": {
            "median": 0.04796274358095418,
            "low": 0.04796274358095418,
            "high": 0.04796274358095418
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.2749630697873785,
          "jump_rate": 0.12482578487561653,
          "risk_score": 0.26780565092386704,
          "metrics": {
            "rolling_vol_10d": 0.07827943137711937,
            "downside_vol_10d": 0.03236042855206151,
            "drawdown_21d": 0.18921148308241623,
            "amihud_stress": 2.253593766540451,
            "spread_rel": 270.3947769836928,
            "spread_ticks": 9.827771076707664,
            "log_notional": 12.48959073382921,
            "log_trade_count": 3.3915768272119524
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16858711002470075,
          "expected_duration_days": 3.164666743361633,
          "current_probability": 6.663000333313224e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 41.13525484602698,
          "volatility": {
            "median": 0.8289046476941991,
            "low": 0.8289046476941991,
            "high": 0.8289046476941991
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.4034578787553754,
          "jump_rate": 0.34401222401131204,
          "risk_score": 0.8449264245334009,
          "metrics": {
            "rolling_vol_10d": 0.5003452692562,
            "downside_vol_10d": 0.05793544377914643,
            "drawdown_21d": 0.13744842025562506,
            "amihud_stress": 2.2748531025516288,
            "spread_rel": 334.5165256969728,
            "spread_ticks": 8.843348090874041,
            "log_notional": 14.59706077951551,
            "log_trade_count": 5.287629489868675
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9751905888699333,
            8.187690659675833e-05,
            8.187595620121987e-05,
            0.0246456582672688
          ],
          [
            0.0003861640527881945,
            0.6545467236106053,
            0.03863842019096122,
            0.3064286921456452
          ],
          [
            0.05571326555319961,
            0.018701077938642792,
            0.8881406700834578,
            0.03744498642469986
          ],
          [
            0.0002665796267646533,
            0.16983722455103864,
            0.14588523387735725,
            0.6840109619448395
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            119.0,
            0.0,
            0.0,
            3.0
          ],
          [
            0.0,
            17.0,
            1.0,
            8.0
          ],
          [
            3.0,
            1.0,
            48.0,
            2.0
          ],
          [
            0.0,
            7.0,
            6.0,
            28.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 2.8667146568041334e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 7.433350939089083e-117,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.999999993336713,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 6.663000333313224e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2749630706435299,
        "current_score": 1.081758214120885,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 12719.396674905067,
        "loglik": -5834.718771937033,
        "n_params": 191,
        "bic_delta_vs_next_best": 820.36407033244,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 14270.574488905617,
            "loglik": -6885.166090201968,
            "n_params": 91,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.57450573256,
                "loglik": -6885.166098615439,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.574488905617,
                "loglik": -6885.166090201968,
                "n_params": 91,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.574496531894,
                "loglik": -6885.166094015106,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 13539.760745237507,
            "loglik": -6385.07859684823,
            "n_params": 140,
            "converged": true,
            "iterations": 27,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13539.760745237507,
                "loglik": -6385.07859684823,
                "n_params": 140,
                "converged": true,
                "iterations": 27
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13573.465002097397,
                "loglik": -6401.930725278175,
                "n_params": 140,
                "converged": true,
                "iterations": 22
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13539.760778356651,
                "loglik": -6385.078613407802,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 12719.396674905067,
            "loglik": -5834.718771937033,
            "n_params": 191,
            "converged": true,
            "iterations": 45,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12719.396674905067,
                "loglik": -5834.718771937033,
                "n_params": 191,
                "converged": true,
                "iterations": 45
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12725.77985516682,
                "loglik": -5837.910362067909,
                "n_params": 191,
                "converged": true,
                "iterations": 35
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12764.655176052092,
                "loglik": -5857.348022510545,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 12719.396674905067,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12725.77985516682,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12764.655176052092,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5997.693092292693,
                "3": 5596.8321857619085,
                "4": 5544.892787751301
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9077.365224321396,
                "3": 9031.765863761304,
                "4": 8317.049277403958
              },
              "valid": true
            },
            {
              "window_days": 244,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14270.57450573256,
                "3": 13539.760791854205,
                "4": 12719.396674905067
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 244,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 820.36407033244,
        "state_count_interpretation": "244 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 820.36 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.2774869109947644,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.319999999999999,
          "min_effective_days_observed": 25.999785232618418,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 121.99600742274914,
              "pct_time": 0.4999836369784801,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 25.999785232618418,
              "pct_time": 0.10655649685499352,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 54.868952498605445,
              "pct_time": 0.22487275614182559,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 41.13525484602698,
              "pct_time": 0.16858711002470075,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9751905888699333,
            0.6545467236106053,
            0.8881406700834578,
            0.6840109619448395
          ],
          "expected_duration_days": [
            40.30728479436142,
            2.894747476277517,
            8.939799663971666,
            3.164666743361633
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 12719.396674905067,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12725.77985516682,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12764.655176052092,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5997.693092292693,
                "3": 5596.8321857619085,
                "4": 5544.892787751301
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9077.365224321396,
                "3": 9031.765863761304,
                "4": 8317.049277403958
              },
              "valid": true
            },
            {
              "window_days": 244,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14270.57450573256,
                "3": 13539.760791854205,
                "4": 12719.396674905067
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.14346059071235534,
            "jump_probability": 0.2417800522692534,
            "jump_rate": 0.049181460180731745,
            "rolling_vol_10d": 0.03811127869391985,
            "downside_vol_10d": 0.022689253390440048,
            "drawdown_21d": 0.1753243198097826,
            "amihud_stress": 1.71812906873746,
            "spread_rel": 252.04807893011173,
            "spread_ticks": 11.345329884409718,
            "log_notional": 13.148908038641338,
            "log_trade_count": 3.7559659302968833
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.16533103225216603,
            "jump_probability": 0.17378561366414283,
            "jump_rate": 0.07692246820660391,
            "rolling_vol_10d": 0.058358490743513354,
            "downside_vol_10d": 0.017536336007803098,
            "drawdown_21d": 0.07466733363869989,
            "amihud_stress": 0.6580450939506235,
            "spread_rel": 926.7817352108262,
            "spread_ticks": 17.086869639491194,
            "log_notional": 2.3990547323793967,
            "log_trade_count": 0.29529143231640687
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.26780565092386704,
            "jump_probability": 0.2749630697873785,
            "jump_rate": 0.12482578487561653,
            "rolling_vol_10d": 0.07827943137711937,
            "downside_vol_10d": 0.03236042855206151,
            "drawdown_21d": 0.18921148308241623,
            "amihud_stress": 2.253593766540451,
            "spread_rel": 270.3947769836928,
            "spread_ticks": 9.827771076707664,
            "log_notional": 12.48959073382921,
            "log_trade_count": 3.3915768272119524
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8449264245334009,
            "jump_probability": 0.4034578787553754,
            "jump_rate": 0.34401222401131204,
            "rolling_vol_10d": 0.5003452692562,
            "downside_vol_10d": 0.05793544377914643,
            "drawdown_21d": 0.13744842025562506,
            "amihud_stress": 2.2748531025516288,
            "spread_rel": 334.5165256969728,
            "spread_ticks": 8.843348090874041,
            "log_notional": 14.59706077951551,
            "log_trade_count": 5.287629489868675
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 2,
          "probabilities": [
            6.260294136124915e-24,
            6.483026417895363e-20,
            0.9999999968464828,
            3.153517182011558e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.789558697017789e-20,
            1.4901779126919994e-18,
            0.999999980801628,
            1.9198372048709917e-08
          ],
          "jump_probability": 0.1730283428793917,
          "jump_score": 0.8897260784670444
        },
        {
          "trade_date": "2026-05-08",
          "state": 2,
          "probabilities": [
            3.4350563982626095e-14,
            1.4283979259238687e-103,
            0.9999999746594445,
            2.5340521283831266e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.2201421141294995e-14,
            1.7458549853839317e-104,
            0.9999999986124237,
            1.3875240416933603e-09
          ],
          "jump_probability": 0.10227111046728535,
          "jump_score": 0.36109488259397554
        },
        {
          "trade_date": "2026-05-11",
          "state": 3,
          "probabilities": [
            9.976038312875909e-25,
            0.0,
            0.00021918753976469393,
            0.9997808124602353
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.7777693274500784e-21,
            0.0,
            3.6010178411123625e-05,
            0.9999639898215889
          ],
          "jump_probability": 0.8867497114576637,
          "jump_score": 4.039532570491718
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            1.3496919933827789e-17,
            2.6820667311202533e-20,
            0.999999372975377,
            6.270246229186104e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.4640377745903835e-13,
            6.164962273329422e-19,
            0.9999961827241012,
            3.817275752465729e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            4.271679675321221e-15,
            4.63659277982923e-26,
            0.9999999979431518,
            2.0568441208985806e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.633656518871202e-11,
            1.065764724012191e-24,
            0.9999999874317184,
            1.2521945055397518e-08
          ],
          "jump_probability": 0.16638941052466089,
          "jump_score": 0.8487517508386118
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            8.275188882312709e-17,
            2.9502116510544942e-83,
            0.9999999999325258,
            6.74741021324013e-11
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.976198886530309e-13,
            6.781336368211312e-82,
            0.9999999995883242,
            4.107781823744096e-10
          ],
          "jump_probability": 0.25001700038027785,
          "jump_score": 1.2947638069318357
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.630487752048435e-21,
            0.0,
            0.9999999965094515,
            3.4905484763569224e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.5952714911666277e-17,
            0.0,
            0.9999999787853447,
            2.121465523868721e-08
          ],
          "jump_probability": 0.5490038310378872,
          "jump_score": 2.420997021539514
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            1.9434978083205675e-19,
            0.0,
            0.9999847749116961,
            1.5225088303843212e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.1079150396442816e-15,
            0.0,
            0.999907317817775,
            9.268218222289861e-05
          ],
          "jump_probability": 0.3025449863144955,
          "jump_score": 1.523732144692044
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            2.6715514734847165e-15,
            3.4961567517765142e-12,
            0.9999999926670772,
            7.329423942926203e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.897798764177728e-11,
            8.036236983182416e-11,
            0.999999955269595,
            4.4621064760533096e-08
          ],
          "jump_probability": 0.09568253601455604,
          "jump_score": 0.29683071243556247
        },
        {
          "trade_date": "2026-05-20",
          "state": 2,
          "probabilities": [
            2.8667146568041334e-13,
            7.433350939089083e-117,
            0.999999993336713,
            6.663000333313224e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8667146568041334e-13,
            7.433350939089083e-117,
            0.999999993336713,
            6.663000333313224e-09
          ],
          "jump_probability": 0.20693867573237767,
          "jump_score": 1.081758214120885
        }
      ],
      "methodology": {
        "estimation_window_days": 244,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_aware",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
        "current_state_probability_basis": "filtered",
        "historical_state_probability_basis": "smoothed",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "5.00",
        "sector_link_display": "-7.56",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.00% stock move in the same direction in this state. This is a point estimate from 244 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 7.56% stock move in the opposite direction in this state. This is a point estimate from 244 trading days.",
        "stock_persistence_display": "1.93",
        "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
        "history_limited_note": "Read is based on 244 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Stressed / Illiquid",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 40.3,
        "driver_share_display": "40.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 244 trading days relative to the 252-day target.",
        "history_days": 244,
        "history_limited": true,
        "volatility_label": "Stressed / Illiquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 27.5,
        "jump_risk_score": 1.08,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8881406700834578,
        "effective_days": 54.9,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 4,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.4999836369784801,
          "expected_duration_days": 40.30728479436142,
          "current_probability": 2.8667146568041334e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 121.99600742274914,
          "volatility": {
            "median": 0.037979337449140144,
            "low": 0.037979337449140144,
            "high": 0.037979337449140144
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.2417800522692534,
          "jump_rate": 0.049181460180731745,
          "risk_score": 0.14346059071235534,
          "metrics": {
            "rolling_vol_10d": 0.03811127869391985,
            "downside_vol_10d": 0.022689253390440048,
            "drawdown_21d": 0.1753243198097826,
            "amihud_stress": 1.71812906873746,
            "spread_rel": 252.04807893011173,
            "spread_ticks": 11.345329884409718,
            "log_notional": 13.148908038641338,
            "log_trade_count": 3.7559659302968833
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.10655649685499352,
          "expected_duration_days": 2.894747476277517,
          "current_probability": 7.433350939089083e-117,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 25.999785232618418,
          "volatility": {
            "median": 0.002484107418386516,
            "low": 0.002484107418386516,
            "high": 0.002484107418386516
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.17378561366414283,
          "jump_rate": 0.07692246820660391,
          "risk_score": 0.16533103225216603,
          "metrics": {
            "rolling_vol_10d": 0.058358490743513354,
            "downside_vol_10d": 0.017536336007803098,
            "drawdown_21d": 0.07466733363869989,
            "amihud_stress": 0.6580450939506235,
            "spread_rel": 926.7817352108262,
            "spread_ticks": 17.086869639491194,
            "log_notional": 2.3990547323793967,
            "log_trade_count": 0.29529143231640687
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.22487275614182559,
          "expected_duration_days": 8.939799663971666,
          "current_probability": 0.999999993336713,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 54.868952498605445,
          "volatility": {
            "median": 0.04796274358095418,
            "low": 0.04796274358095418,
            "high": 0.04796274358095418
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.2749630697873785,
          "jump_rate": 0.12482578487561653,
          "risk_score": 0.26780565092386704,
          "metrics": {
            "rolling_vol_10d": 0.07827943137711937,
            "downside_vol_10d": 0.03236042855206151,
            "drawdown_21d": 0.18921148308241623,
            "amihud_stress": 2.253593766540451,
            "spread_rel": 270.3947769836928,
            "spread_ticks": 9.827771076707664,
            "log_notional": 12.48959073382921,
            "log_trade_count": 3.3915768272119524
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16858711002470075,
          "expected_duration_days": 3.164666743361633,
          "current_probability": 6.663000333313224e-09,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 41.13525484602698,
          "volatility": {
            "median": 0.8289046476941991,
            "low": 0.8289046476941991,
            "high": 0.8289046476941991
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.4034578787553754,
          "jump_rate": 0.34401222401131204,
          "risk_score": 0.8449264245334009,
          "metrics": {
            "rolling_vol_10d": 0.5003452692562,
            "downside_vol_10d": 0.05793544377914643,
            "drawdown_21d": 0.13744842025562506,
            "amihud_stress": 2.2748531025516288,
            "spread_rel": 334.5165256969728,
            "spread_ticks": 8.843348090874041,
            "log_notional": 14.59706077951551,
            "log_trade_count": 5.287629489868675
          }
        }
      ],
      "transitions": [
        [
          0.9751905888699333,
          8.187690659675833e-05,
          8.187595620121987e-05,
          0.0246456582672688
        ],
        [
          0.0003861640527881945,
          0.6545467236106053,
          0.03863842019096122,
          0.3064286921456452
        ],
        [
          0.05571326555319961,
          0.018701077938642792,
          0.8881406700834578,
          0.03744498642469986
        ],
        [
          0.0002665796267646533,
          0.16983722455103864,
          0.14588523387735725,
          0.6840109619448395
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9751905888699333,
            8.187690659675833e-05,
            8.187595620121987e-05,
            0.0246456582672688
          ],
          [
            0.0003861640527881945,
            0.6545467236106053,
            0.03863842019096122,
            0.3064286921456452
          ],
          [
            0.05571326555319961,
            0.018701077938642792,
            0.8881406700834578,
            0.03744498642469986
          ],
          [
            0.0002665796267646533,
            0.16983722455103864,
            0.14588523387735725,
            0.6840109619448395
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            119.0,
            0.0,
            0.0,
            3.0
          ],
          [
            0.0,
            17.0,
            1.0,
            8.0
          ],
          [
            3.0,
            1.0,
            48.0,
            2.0
          ],
          [
            0.0,
            7.0,
            6.0,
            28.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.999999993336713,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 2.8667146568041334e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 7.433350939089083e-117,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.999999993336713,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 6.663000333313224e-09,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2749630706435299,
        "current_score": 1.081758214120885,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 12719.396674905067,
        "loglik": -5834.718771937033,
        "n_params": 191,
        "bic_delta_vs_next_best": 820.36407033244,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 14270.574488905617,
            "loglik": -6885.166090201968,
            "n_params": 91,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.57450573256,
                "loglik": -6885.166098615439,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.574488905617,
                "loglik": -6885.166090201968,
                "n_params": 91,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 14270.574496531894,
                "loglik": -6885.166094015106,
                "n_params": 91,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 13539.760745237507,
            "loglik": -6385.07859684823,
            "n_params": 140,
            "converged": true,
            "iterations": 27,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13539.760745237507,
                "loglik": -6385.07859684823,
                "n_params": 140,
                "converged": true,
                "iterations": 27
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13573.465002097397,
                "loglik": -6401.930725278175,
                "n_params": 140,
                "converged": true,
                "iterations": 22
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 13539.760778356651,
                "loglik": -6385.078613407802,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 12719.396674905067,
            "loglik": -5834.718771937033,
            "n_params": 191,
            "converged": true,
            "iterations": 45,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12719.396674905067,
                "loglik": -5834.718771937033,
                "n_params": 191,
                "converged": true,
                "iterations": 45
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12725.77985516682,
                "loglik": -5837.910362067909,
                "n_params": 191,
                "converged": true,
                "iterations": 35
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12764.655176052092,
                "loglik": -5857.348022510545,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 12719.396674905067,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12725.77985516682,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12764.655176052092,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5997.693092292693,
                "3": 5596.8321857619085,
                "4": 5544.892787751301
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9077.365224321396,
                "3": 9031.765863761304,
                "4": 8317.049277403958
              },
              "valid": true
            },
            {
              "window_days": 244,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14270.57450573256,
                "3": 13539.760791854205,
                "4": 12719.396674905067
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 244,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 820.36407033244,
        "state_count_interpretation": "244 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 820.36 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.2774869109947644,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.319999999999999,
          "min_effective_days_observed": 25.999785232618418,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 121.99600742274914,
              "pct_time": 0.4999836369784801,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 25.999785232618418,
              "pct_time": 0.10655649685499352,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 54.868952498605445,
              "pct_time": 0.22487275614182559,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 41.13525484602698,
              "pct_time": 0.16858711002470075,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9751905888699333,
            0.6545467236106053,
            0.8881406700834578,
            0.6840109619448395
          ],
          "expected_duration_days": [
            40.30728479436142,
            2.894747476277517,
            8.939799663971666,
            3.164666743361633
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [],
          "warnings": []
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 12719.396674905067,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 12725.77985516682,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 12764.655176052092,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "stable",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 5997.693092292693,
                "3": 5596.8321857619085,
                "4": 5544.892787751301
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9077.365224321396,
                "3": 9031.765863761304,
                "4": 8317.049277403958
              },
              "valid": true
            },
            {
              "window_days": 244,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 14270.57450573256,
                "3": 13539.760791854205,
                "4": 12719.396674905067
              },
              "valid": true
            }
          ],
          "stable": true
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.14346059071235534,
            "jump_probability": 0.2417800522692534,
            "jump_rate": 0.049181460180731745,
            "rolling_vol_10d": 0.03811127869391985,
            "downside_vol_10d": 0.022689253390440048,
            "drawdown_21d": 0.1753243198097826,
            "amihud_stress": 1.71812906873746,
            "spread_rel": 252.04807893011173,
            "spread_ticks": 11.345329884409718,
            "log_notional": 13.148908038641338,
            "log_trade_count": 3.7559659302968833
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.16533103225216603,
            "jump_probability": 0.17378561366414283,
            "jump_rate": 0.07692246820660391,
            "rolling_vol_10d": 0.058358490743513354,
            "downside_vol_10d": 0.017536336007803098,
            "drawdown_21d": 0.07466733363869989,
            "amihud_stress": 0.6580450939506235,
            "spread_rel": 926.7817352108262,
            "spread_ticks": 17.086869639491194,
            "log_notional": 2.3990547323793967,
            "log_trade_count": 0.29529143231640687
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.26780565092386704,
            "jump_probability": 0.2749630697873785,
            "jump_rate": 0.12482578487561653,
            "rolling_vol_10d": 0.07827943137711937,
            "downside_vol_10d": 0.03236042855206151,
            "drawdown_21d": 0.18921148308241623,
            "amihud_stress": 2.253593766540451,
            "spread_rel": 270.3947769836928,
            "spread_ticks": 9.827771076707664,
            "log_notional": 12.48959073382921,
            "log_trade_count": 3.3915768272119524
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8449264245334009,
            "jump_probability": 0.4034578787553754,
            "jump_rate": 0.34401222401131204,
            "rolling_vol_10d": 0.5003452692562,
            "downside_vol_10d": 0.05793544377914643,
            "drawdown_21d": 0.13744842025562506,
            "amihud_stress": 2.2748531025516288,
            "spread_rel": 334.5165256969728,
            "spread_ticks": 8.843348090874041,
            "log_notional": 14.59706077951551,
            "log_trade_count": 5.287629489868675
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
      },
      "feature_columns": [
        "stock_ret",
        "market_ret",
        "sector_ret",
        "abs_stock_ret",
        "residual_ret",
        "abs_residual_ret",
        "rolling_vol_5d",
        "rolling_vol_10d",
        "rolling_vol_21d",
        "downside_vol_10d",
        "rolling_skew_21d",
        "rolling_kurtosis_21d",
        "drawdown_21d",
        "market_corr_21d",
        "sector_corr_21d",
        "log_notional",
        "log_volume",
        "log_trade_count",
        "amihud_stress",
        "spread_rel",
        "spread_ticks",
        "jump_score"
      ],
      "smoothed_probability_tail": [
        {
          "trade_date": "2026-05-07",
          "state": 2,
          "probabilities": [
            6.260294136124915e-24,
            6.483026417895363e-20,
            0.9999999968464828,
            3.153517182011558e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            6.789558697017789e-20,
            1.4901779126919994e-18,
            0.999999980801628,
            1.9198372048709917e-08
          ],
          "jump_probability": 0.1730283428793917,
          "jump_score": 0.8897260784670444
        },
        {
          "trade_date": "2026-05-08",
          "state": 2,
          "probabilities": [
            3.4350563982626095e-14,
            1.4283979259238687e-103,
            0.9999999746594445,
            2.5340521283831266e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.2201421141294995e-14,
            1.7458549853839317e-104,
            0.9999999986124237,
            1.3875240416933603e-09
          ],
          "jump_probability": 0.10227111046728535,
          "jump_score": 0.36109488259397554
        },
        {
          "trade_date": "2026-05-11",
          "state": 3,
          "probabilities": [
            9.976038312875909e-25,
            0.0,
            0.00021918753976469393,
            0.9997808124602353
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.7777693274500784e-21,
            0.0,
            3.6010178411123625e-05,
            0.9999639898215889
          ],
          "jump_probability": 0.8867497114576637,
          "jump_score": 4.039532570491718
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            1.3496919933827789e-17,
            2.6820667311202533e-20,
            0.999999372975377,
            6.270246229186104e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.4640377745903835e-13,
            6.164962273329422e-19,
            0.9999961827241012,
            3.817275752465729e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            4.271679675321221e-15,
            4.63659277982923e-26,
            0.9999999979431518,
            2.0568441208985806e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.633656518871202e-11,
            1.065764724012191e-24,
            0.9999999874317184,
            1.2521945055397518e-08
          ],
          "jump_probability": 0.16638941052466089,
          "jump_score": 0.8487517508386118
        },
        {
          "trade_date": "2026-05-14",
          "state": 2,
          "probabilities": [
            8.275188882312709e-17,
            2.9502116510544942e-83,
            0.9999999999325258,
            6.74741021324013e-11
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.976198886530309e-13,
            6.781336368211312e-82,
            0.9999999995883242,
            4.107781823744096e-10
          ],
          "jump_probability": 0.25001700038027785,
          "jump_score": 1.2947638069318357
        },
        {
          "trade_date": "2026-05-15",
          "state": 2,
          "probabilities": [
            1.630487752048435e-21,
            0.0,
            0.9999999965094515,
            3.4905484763569224e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            1.5952714911666277e-17,
            0.0,
            0.9999999787853447,
            2.121465523868721e-08
          ],
          "jump_probability": 0.5490038310378872,
          "jump_score": 2.420997021539514
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            1.9434978083205675e-19,
            0.0,
            0.9999847749116961,
            1.5225088303843212e-05
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.1079150396442816e-15,
            0.0,
            0.999907317817775,
            9.268218222289861e-05
          ],
          "jump_probability": 0.3025449863144955,
          "jump_score": 1.523732144692044
        },
        {
          "trade_date": "2026-05-19",
          "state": 2,
          "probabilities": [
            2.6715514734847165e-15,
            3.4961567517765142e-12,
            0.9999999926670772,
            7.329423942926203e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.897798764177728e-11,
            8.036236983182416e-11,
            0.999999955269595,
            4.4621064760533096e-08
          ],
          "jump_probability": 0.09568253601455604,
          "jump_score": 0.29683071243556247
        },
        {
          "trade_date": "2026-05-20",
          "state": 2,
          "probabilities": [
            2.8667146568041334e-13,
            7.433350939089083e-117,
            0.999999993336713,
            6.663000333313224e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.8667146568041334e-13,
            7.433350939089083e-117,
            0.999999993336713,
            6.663000333313224e-09
          ],
          "jump_probability": 0.20693867573237767,
          "jump_score": 1.081758214120885
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 51.4 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity is weak for size, and the current book points to thinner buy-side access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is very strong, with the stock well ahead of peers and the market over one month.",
    "perf_insight": "The stock has outperformed sharply, rising 55.1% over one month compared with -4.7% for peers and 1.7% for the market. That strength matters because price leadership is clear even as liquidity remains below peer levels.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Company-specific factors are the main force behind current price moves.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 40.3% of price changes. Other influences are market 29.4%, and sector 30.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 29.4%, sector 30.4%, and company-specific 40.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 29.4%, sector 30.4%, and company-specific 40.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Company-specific drivers account for 40.3% of the move, and the one-month return is 55.1% compared with -4.7% for peers. That matters because the tape is being led more by stock-level developments than by the broader market.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price moves are primarily company-specific at 40.3%, ahead of broader market and sector influences.",
      "Liquidity looks weak for the stock’s size: the 6M score is 51.4 versus a peer median of 62.1, 10.7 points lower. Recent flow is broadly stable versus the monthly baseline, although 1D average volume is 70.8% below 1M. Near-term access may feel weaker, with displayed bid depth at 0.58x ask depth and a 2-tick spread. Price moves are mainly company-specific at 40.3%. The stock has outperformed, up 55.1% over 1M versus peers at -4.7% and the market at +1.7%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look below par rather than dislocated, with weaker access showing up most clearly in peer standing and book balance.",
    "regime_badge_text": "Stressed / Illiquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Stressed / Illiquid",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 20, 2025 to May 20, 2026 (224 trading days • 68,751 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The book is bid-light, with displayed bid depth at 0.58x of ask depth and a 2-tick spread. That matters because immediate buy-side access looks thinner than the monthly liquidity picture alone would suggest.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 52.4% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current execution conditions are defined more by book balance than by broad turnover strength.",
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
    "intraday_insight": "Displayed bid depth is only 0.58x of ask depth, while the spread is 2 ticks. That matters because buying interest looks lighter at the screen even with strong recent share-price performance.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by weak liquidity and company-specific price action.",
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
    "exec_subtitle": "Liquidity screens below peers for the company’s size, and today’s book adds some friction.",
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
        "value": "51.4/100",
        "sub": "Peer median 62.1 (-10.7 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$237.3K",
        "sub": "Peer median HK$1.9M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.77%",
        "sub": "9.06 ticks; peers 1.63%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is weak: score 51.4 vs peer median 62.1 (-10.7 pts). 1D average volume down -70.8% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "4.970",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.40%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.58x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.89% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-3.20% with 23.1% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-3.20% with 9.2% fill.",
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
        "value": "51",
        "suffix": "/100",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1251/2570",
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
        "value": "2.77",
        "suffix": "%",
        "bar_pct": 28,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.77% • 9.06 ticks vs peers 1.63%",
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
        "value": "237.3K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$1.9M",
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
        "value": "40.3",
        "suffix": "company-specific",
        "bar_pct": 40,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 29.4% • Sector 30.4%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a 6M score of 51.4 compared with a peer median of 62.1. That matters because the stock screens below peers before current trading conditions are considered.",
      "Recent price performance is very strong, with a 1M return of 55.1% compared with -4.7% for peers and 1.7% for the market. That matters because returns are leading peers even though liquidity remains below peer levels.",
      "Today’s book is less supportive on the buy side, with displayed bid depth at 0.58x of ask depth and a 2-tick spread. That matters because immediate access looks thinner than the monthly liquidity score alone would suggest."
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
      "overall": "6M liquidity is weak: score 51.4 vs peer median 62.1 (-10.7 pts). 1D average volume down -70.8% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 51.4 vs peer median 62.1 (-10.7 pts)."
      ],
      "concerns": [
        "1D average volume down -70.8% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -10.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.4%, better than peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.4% vs market 13.6%.",
        "vs_sector": "In line with sector: -2.4% vs sector -2.4%.",
        "vs_peers": "Better than peers: -2.4% vs peers -17.3%."
      },
      "adv": {
        "insight": "ADV is HK$237.3K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$237.3K vs market HK$212.8K.",
        "vs_sector": "Better than sector: HK$237.3K vs sector HK$36.3K.",
        "vs_peers": "Worse than peers: HK$237.3K vs peers HK$1.9M."
      },
      "spread": {
        "insight": "Spread is 2.77%, better than sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "In line with market: 2.77% vs market 2.78%.",
        "vs_sector": "Better than sector: 2.77% vs sector 5.47%.",
        "vs_peers": "Worse than peers: 2.77% vs peers 1.63%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.13% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.02%.",
        "vs_peers": "Worse than peers: 0.13% vs peers 0.19%."
      },
      "volatility": {
        "insight": "Volatility is 107.42%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 107.42% vs market 60.51%.",
        "vs_sector": "Worse than sector: 107.42% vs sector 78.06%.",
        "vs_peers": "Worse than peers: 107.42% vs peers 55.94%."
      },
      "trades": {
        "insight": "Trades is 25, better than market and sector, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 25 vs market 19.",
        "vs_sector": "Better than sector: 25 vs sector 7.",
        "vs_peers": "Worse than peers: 25 vs peers 70."
      },
      "amihud": {
        "insight": "Price impact is 1.06e-07, better than sector, but worse than market and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 1.06e-07 vs market 4.73e-08.",
        "vs_sector": "Better than sector: 1.06e-07 vs sectoe-07.",
        "vs_peers": "Worse than peers: 1.06e-07 vs peers 6.93e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to peers and the market, with 1M performance at +55.1% compared with -4.7% for peers and +1.7% for the market. Liquidity gives a mixed read on that move because the 6M liquidity score of 51.4 sits 10.7 points below the peer median and 1D average volume is 70.8% below the 1M average, so the price strength is not being matched by stronger trading access.",
      "conclusion": "The move looks company-specific rather than broad-market led, and liquidity is only partly confirming the strength in returns."
    },
    "drivers": {
      "overall": "Recent price action is mainly company-driven, with company-specific factors accounting for 40.3% of moves. That fits with the stock’s 55.1% gain over the past month, compared with -4.7% for peers and 1.7% for the market, which shows the move is being led by stock-level factors rather than a broad lift.",
      "beta": "The current read looks directionally stable rather than one-off because the stock has remained company-driven from March through May. Even so, today’s average volume is 70.8% below the 1M average, so the same driver mix is playing through a thinner trading backdrop.",
      "rolling_change": "The monthly pattern has become clearer over time: March was more mixed, while April and May were mostly company-driven. That matters because stock-specific news and positioning have been the main influence for more than a brief spell, even as day-to-day participation has pulled back."
    },
    "regime": {
      "overall": "The active backdrop is stressed and illiquid, and that matters because liquidity already screens weak for the stock's size, with a 6M score of 51.4 compared with a peer median of 62.1. That leaves less room for trading conditions to absorb pressure when activity is uneven.",
      "current": "Current market state is Stressed / Illiquid. Current-state posterior is >99.9% on a filtered basis. The market has been in this state about 22.5% of the time. Jump risk is 27% on the current read. Based on 244 trading days relative to the 252-day target.",
      "transitions": "This state looks more persistent, with a typical run length of about 8.9 days.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.9 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light today because buy-side depth is only 0.58x of the ask side while the spread is 2 ticks. That points to thinner immediate visible support on the bid and makes access look weaker at the screen than a stable monthly view would imply.",
      "concern": "The clearest stress point is the imbalance in the book, with materially less depth on the bid than on the ask. With 1D average volume down 70.8% from the 1M average, that thinner buy-side support matters more for near-term execution quality.",
      "peer_context": "This book does not offset the weaker structural standing, as the 6M liquidity score of 51.4 sits 10.7 points below the peer median of 62.1. The displayed imbalance therefore supports, rather than challenges, the view that liquidity is light for the company’s size."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like by both trade count and trade value, which makes participation breadth look broad but institutional support look thin.",
      "retail_heavy": "Retail-like trades account for 97.9% of trade count and 82.7% of trade value, compared with institution-like trades at 0.0% of count and 0.7% of value. That leaves the tape driven primarily by smaller individual activity rather than larger institutional participation.",
      "institutional_gap": "Institution-like activity is close to absent in the observed mix, at 0.0% of trade count and 0.7% of trade value. That matters because the flow base looks less anchored by larger participants.",
      "peer_comparison": "The mix stands out as heavily retail-like relative to peers, with retail-like activity dominating both count and value. That makes this trading base look less institutionally supported than a more balanced peer profile."
    },
    "price_moving": {
      "overall": "Price action is being driven more by stock-specific factors than broad market moves, with company-specific drivers at 40.3%. That makes trading responses more sensitive to name-level developments. The signal is mixed but still points to a retail-like tape, because trade count and trade value both lean heavily to retail-like activity. That matters because price moves can be more reactive when larger institutional participation is scarce.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a separate pressure point. The clearer signals are a 70.8% drop in 1D average volume from the 1M average and bid depth at 0.58x of ask depth, which matter more for near-term access than any short-driven effect.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short trend is not showing a clear change that alters the picture. What stands out instead is a stock that is up 55.1% over one month while peers are down 4.7%, so the current setup looks more tied to strong stock-specific performance than to rising short pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears during the continuous session rather than at the open or close, with 99.3% of activity in continuous trading, 0.1% at the open, and 0.6% at the close. That makes daytime access more relevant than auction liquidity.",
      "hhi_interpretation": "Intraday activity looks reasonably distributed through the session, with a concentration score of 0.327. That supports a steadier flow picture than one dominated by a few short windows.",
      "best_times": "The main trading window is the continuous session, which carries 99.3% of activity. That means liquidity is most available during regular daytime trading rather than around the open or close.",
      "peer_ranking": "Relative to peers, the key feature is the reliance on continuous-session trading rather than auction-driven liquidity. That points to a flow profile that depends on sustained daytime participation."
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
        "6100",
        "2443",
        "1483",
        "331",
        "2521",
        "2508",
        "6959",
        "1463"
      ],
      "scores": [
        51.36186770428015,
        74.74708171206225,
        74.6692607003891,
        34.59143968871595,
        57.081712062256805,
        67.0817120622568,
        75.68093385214007,
        36.92607003891051,
        7.470817120622568
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
        237320.0,
        3255211.0,
        5807904.0,
        136110.0,
        491950.0,
        3945112.5,
        7226430.0,
        45054.0,
        0.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Other Support Services",
      "sector_count": 42,
      "market_count": 2570,
      "company": {
        "volatility": 1.0741569108954658,
        "adv": 237320.0,
        "spread_pct": 0.02767971574641715,
        "turnover_ratio": 0.0012772373837091327,
        "amihud": 1.0621583567645438e-07,
        "trades": 25.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7483147301179937,
          "median": 0.605061240008339,
          "min": 0.0,
          "max": 33.69063316055627,
          "p5": 0.22420189997375514,
          "p95": 1.620966664417821,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 55789391.36964397,
          "median": 212763.0,
          "min": 0.0,
          "max": 11892751420.0,
          "p5": 0.0,
          "p95": 221462819.30399984,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042062614687010925,
          "median": 0.027786432019735404,
          "min": 0.0005759578485903171,
          "max": 0.586235634471959,
          "p5": 0.0014171090838533925,
          "p95": 0.13293266374782126,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035345008282309082,
          "median": 0.0008306667028089253,
          "min": 0.0,
          "max": 0.18523236964248901,
          "p5": 0.0,
          "p95": 0.014471303919301359,
          "count": 2554
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.129067217651611e-07,
          "median": 4.734371574929171e-08,
          "min": 0.0,
          "max": 1.9124298969909754e-05,
          "p5": 5.2975151998027814e-11,
          "p95": 3.1600228288865187e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1018.3235408560312,
          "median": 19.0,
          "min": 0.0,
          "max": 80079.0,
          "p5": 0.0,
          "p95": 5558.874999999999,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8584264329895054,
          "median": 0.7806332082606112,
          "min": 0.10073437372188168,
          "max": 1.9639758393675537,
          "p5": 0.24682050489391502,
          "p95": 1.8307404918800083,
          "count": 42
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 746728.3176785714,
          "median": 36283.901249999995,
          "min": 0.0,
          "max": 7226430.0,
          "p5": 0.0,
          "p95": 5136186.874999994,
          "count": 42
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.06119133972498566,
          "median": 0.05469883071973301,
          "min": 0.004643426425290164,
          "max": 0.21009110060003078,
          "p5": 0.005399093331887886,
          "p95": 0.12702852509924853,
          "count": 42
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0015447109391355897,
          "median": 0.0002423697559029563,
          "min": 0.0,
          "max": 0.014326691286017311,
          "p5": 0.0,
          "p95": 0.007087166287490035,
          "count": 42
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1121987053368178e-06,
          "median": 2.727212532489328e-07,
          "min": 2.2634295913480702e-09,
          "max": 1.5472092753312613e-05,
          "p5": 3.343159239740306e-09,
          "p95": 3.2400117596049377e-06,
          "count": 42
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 66.5,
          "median": 7.0,
          "min": 0.0,
          "max": 673.0,
          "p5": 0.0,
          "p95": 486.5999999999996,
          "count": 42
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 2613471.4375,
          "median": 1873580.5,
          "min": 0.0,
          "max": 7226430.0,
          "p5": 15768.900000000001,
          "p95": 6729945.899999999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 234.75,
          "median": 70.25,
          "min": 0.0,
          "max": 673.0,
          "p5": 2.2750000000000004,
          "p95": 633.4499999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6015621165731988,
          "median": 0.5594147130459015,
          "min": 0.10073437372188168,
          "max": 1.0004629168019263,
          "p5": 0.23353121469475596,
          "p95": 0.9463249254355496,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03080552666874479,
          "median": 0.016261543049474803,
          "min": 0.005339545696086024,
          "max": 0.09506098284284653,
          "p5": 0.005354806080564964,
          "p95": 0.0836887005886561,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 5.800476866260995,
          "median": 3.654110192870973,
          "min": 1.535563863326816,
          "max": 20.340909090909093,
          "p5": 1.6265308240031877,
          "p95": 15.743813131313125,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.942639058416214e-08,
          "median": 6.931040250419156e-09,
          "min": 2.2634295913480702e-09,
          "max": 3.164476848687375e-07,
          "p5": 2.274505059399304e-09,
          "p95": 2.600868326719247e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002571188613524753,
          "median": 0.0019129967353350551,
          "min": 0.0,
          "max": 0.007183159564711768,
          "p5": 5.405405405405406e-05,
          "p95": 0.0065112066241596895,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.551401869158878,
        "market": 0.01655570232671688,
        "sector": -0.0018069339253068417,
        "peers": -0.04719155709890521
      },
      {
        "horizon": "3M",
        "stock": 0.8175182481751824,
        "market": 0.024009398025444995,
        "sector": -0.023664524847017865,
        "peers": -0.15858681862263757
      },
      {
        "horizon": "6M",
        "stock": -0.023529411764706243,
        "market": 0.13602925408451405,
        "sector": -0.023664524847017865,
        "peers": -0.17312232062189503
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
      "share_market": 0.2938039082148405,
      "share_sector": 0.3035225785860593,
      "share_idio": 0.4026735131991003,
      "beta_market": 4.997879012451772,
      "beta_sector": -7.559125905985019,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 244,
        "reporting_window_days": 63,
        "available_history_days": 244,
        "n_regimes": 4,
        "current_regime": 2,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.999999993336713,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.2938039082148405,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.4%",
            "display_range": null,
            "display_text": "29.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "share_pct",
            "value_pct": 29.4,
            "plain_english": "Market explains about 29.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3035225785860593,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "30.4%",
            "display_range": null,
            "display_text": "30.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "share_pct",
            "value_pct": 30.4,
            "plain_english": "Sector explains about 30.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.4026735131991003,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.3%",
            "display_range": null,
            "display_text": "40.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "share_pct",
            "value_pct": 40.3,
            "plain_english": "Company-specific explains about 40.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 4.997879012451772,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "5.00",
            "display_range": null,
            "display_text": "5.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 5.00% stock move in the same direction in this state.",
            "value_num": 5.0
          },
          "beta_stock_lag": {
            "median": 1.9332510161921694,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.93",
            "display_range": null,
            "display_text": "1.93",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "lag_beta",
            "value_num": 1.93
          },
          "beta_sector": {
            "median": -7.559125905985019,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.56",
            "display_range": null,
            "display_text": "-7.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 7.56% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 244 trading days of history.",
            "value_num": -7.56
          },
          "beta_market_lag": {
            "median": -2.800358837460369,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.80",
            "display_range": null,
            "display_text": "-2.80",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "lag_beta",
            "value_num": -2.8
          },
          "beta_sector_lag": {
            "median": -11.04980148666234,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-11.05",
            "display_range": null,
            "display_text": "-11.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
            "kind": "lag_beta",
            "value_num": -11.05
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 244 trading days relative to the 252-day target."
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
              "median": 0.38553464997407166,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23641828271040313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.6%",
                "display_range": null,
                "display_text": "23.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 23.6,
                "plain_english": "Market explains about 23.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37804706731552523,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.8%",
                "display_range": null,
                "display_text": "37.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 37.8,
                "plain_english": "Sector explains about 37.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38553464997407166,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
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
              "median": 0.47582682422873646,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Market explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47582682422873646,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Market explains about 47.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07479712193549541,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.5%",
                "display_range": null,
                "display_text": "7.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 7.5,
                "plain_english": "Sector explains about 7.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.449376053835768,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.9%",
                "display_range": null,
                "display_text": "44.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.9,
                "plain_english": "Company-specific explains about 44.9% of price moves in the current state."
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
              "median": 0.37617946182954914,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24846880739118377,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.8%",
                "display_range": null,
                "display_text": "24.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.8,
                "plain_english": "Market explains about 24.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37617946182954914,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Sector explains about 37.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3753517307792672,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
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
              "median": 0.5386532238403463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.9%",
              "display_range": null,
              "display_text": "53.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.9,
              "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2814937043231073,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.1%",
                "display_range": null,
                "display_text": "28.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.1,
                "plain_english": "Market explains about 28.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1798530718365465,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.0%",
                "display_range": null,
                "display_text": "18.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.0,
                "plain_english": "Sector explains about 18.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5386532238403463,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.9%",
                "display_range": null,
                "display_text": "53.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.9,
                "plain_english": "Company-specific explains about 53.9% of price moves in the current state."
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
              "median": 0.5447594983701284,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.5%",
              "display_range": null,
              "display_text": "54.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.5,
              "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2427575822804555,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Market explains about 24.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21248291934941613,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.2%",
                "display_range": null,
                "display_text": "21.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.2,
                "plain_english": "Sector explains about 21.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5447594983701284,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.5%",
                "display_range": null,
                "display_text": "54.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 54.5,
                "plain_english": "Company-specific explains about 54.5% of price moves in the current state."
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
              "median": 0.5726944510904456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.3%",
              "display_range": null,
              "display_text": "57.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.3,
              "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2920225673004428,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.2%",
                "display_range": null,
                "display_text": "29.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.2,
                "plain_english": "Market explains about 29.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1352829816091115,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5726944510904456,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.3%",
                "display_range": null,
                "display_text": "57.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.3,
                "plain_english": "Company-specific explains about 57.3% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly company-driven."
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
              "median": 0.6807245311412256,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.1%",
              "display_range": null,
              "display_text": "68.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 68.1,
              "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.06288289959006914,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.3%",
                "display_range": null,
                "display_text": "6.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 6.3,
                "plain_english": "Market explains about 6.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2563925692687054,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.6%",
                "display_range": null,
                "display_text": "25.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.6,
                "plain_english": "Sector explains about 25.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6807245311412256,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.1%",
                "display_range": null,
                "display_text": "68.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 68.1,
                "plain_english": "Company-specific explains about 68.1% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
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
              "median": 0.5789504633587718,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.9%",
              "display_range": null,
              "display_text": "57.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 57.9,
              "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23780366401210667,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Market explains about 23.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18324587262912154,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5789504633587718,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.9%",
                "display_range": null,
                "display_text": "57.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 57.9,
                "plain_english": "Company-specific explains about 57.9% of price moves in the current state."
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
              "median": 0.8259040528095414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.6%",
              "display_range": null,
              "display_text": "82.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.6,
              "plain_english": "Company-specific explains about 82.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.04319703091178863,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.3%",
                "display_range": null,
                "display_text": "4.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.3,
                "plain_english": "Market explains about 4.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13089891627866995,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.1%",
                "display_range": null,
                "display_text": "13.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.1,
                "plain_english": "Sector explains about 13.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8259040528095414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.6%",
                "display_range": null,
                "display_text": "82.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 82.6,
                "plain_english": "Company-specific explains about 82.6% of price moves in the current state."
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
              "median": 0.6058802497999994,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.6%",
              "display_range": null,
              "display_text": "60.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 60.6,
              "plain_english": "Company-specific explains about 60.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2158883576172272,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Market explains about 21.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1782313925827734,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6058802497999994,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.6%",
                "display_range": null,
                "display_text": "60.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 60.6,
                "plain_english": "Company-specific explains about 60.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Still clearly company-driven."
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
              "median": 0.42016370203749687,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.0%",
              "display_range": null,
              "display_text": "42.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.0,
              "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1615050100714235,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.2%",
                "display_range": null,
                "display_text": "16.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 16.2,
                "plain_english": "Market explains about 16.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.41833128789107965,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.8%",
                "display_range": null,
                "display_text": "41.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.8,
                "plain_english": "Sector explains about 41.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42016370203749687,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.0%",
                "display_range": null,
                "display_text": "42.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.0,
                "plain_english": "Company-specific explains about 42.0% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4668406498909942,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.7%",
              "display_range": null,
              "display_text": "46.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 46.7,
              "plain_english": "Company-specific explains about 46.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3648358013209242,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Market explains about 36.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16832354878808156,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.8%",
                "display_range": null,
                "display_text": "16.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 16.8,
                "plain_english": "Sector explains about 16.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4668406498909942,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.7%",
                "display_range": null,
                "display_text": "46.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 46.7,
                "plain_english": "Company-specific explains about 46.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-20",
            "n_obs": 13,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5807952371997285,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.1%",
              "display_range": null,
              "display_text": "58.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 58.1,
              "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15173905722786005,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.2%",
                "display_range": null,
                "display_text": "15.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 15.2,
                "plain_english": "Market explains about 15.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2674657055724114,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Sector explains about 26.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5807952371997285,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.1%",
                "display_range": null,
                "display_text": "58.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 58.1,
                "plain_english": "Company-specific explains about 58.1% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.4999836369784801,
            "expected_duration_days": 40.30728479436142,
            "current_probability": 2.8667146568041334e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 121.99600742274914,
            "volatility": {
              "median": 0.037979337449140144,
              "low": 0.037979337449140144,
              "high": 0.037979337449140144
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.2417800522692534,
            "jump_rate": 0.049181460180731745,
            "risk_score": 0.14346059071235534,
            "metrics": {
              "rolling_vol_10d": 0.03811127869391985,
              "downside_vol_10d": 0.022689253390440048,
              "drawdown_21d": 0.1753243198097826,
              "amihud_stress": 1.71812906873746,
              "spread_rel": 252.04807893011173,
              "spread_ticks": 11.345329884409718,
              "log_notional": 13.148908038641338,
              "log_trade_count": 3.7559659302968833
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.10655649685499352,
            "expected_duration_days": 2.894747476277517,
            "current_probability": 7.433350939089083e-117,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.999785232618418,
            "volatility": {
              "median": 0.002484107418386516,
              "low": 0.002484107418386516,
              "high": 0.002484107418386516
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.17378561366414283,
            "jump_rate": 0.07692246820660391,
            "risk_score": 0.16533103225216603,
            "metrics": {
              "rolling_vol_10d": 0.058358490743513354,
              "downside_vol_10d": 0.017536336007803098,
              "drawdown_21d": 0.07466733363869989,
              "amihud_stress": 0.6580450939506235,
              "spread_rel": 926.7817352108262,
              "spread_ticks": 17.086869639491194,
              "log_notional": 2.3990547323793967,
              "log_trade_count": 0.29529143231640687
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.22487275614182559,
            "expected_duration_days": 8.939799663971666,
            "current_probability": 0.999999993336713,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 54.868952498605445,
            "volatility": {
              "median": 0.04796274358095418,
              "low": 0.04796274358095418,
              "high": 0.04796274358095418
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.2749630697873785,
            "jump_rate": 0.12482578487561653,
            "risk_score": 0.26780565092386704,
            "metrics": {
              "rolling_vol_10d": 0.07827943137711937,
              "downside_vol_10d": 0.03236042855206151,
              "drawdown_21d": 0.18921148308241623,
              "amihud_stress": 2.253593766540451,
              "spread_rel": 270.3947769836928,
              "spread_ticks": 9.827771076707664,
              "log_notional": 12.48959073382921,
              "log_trade_count": 3.3915768272119524
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16858711002470075,
            "expected_duration_days": 3.164666743361633,
            "current_probability": 6.663000333313224e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 41.13525484602698,
            "volatility": {
              "median": 0.8289046476941991,
              "low": 0.8289046476941991,
              "high": 0.8289046476941991
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.4034578787553754,
            "jump_rate": 0.34401222401131204,
            "risk_score": 0.8449264245334009,
            "metrics": {
              "rolling_vol_10d": 0.5003452692562,
              "downside_vol_10d": 0.05793544377914643,
              "drawdown_21d": 0.13744842025562506,
              "amihud_stress": 2.2748531025516288,
              "spread_rel": 334.5165256969728,
              "spread_ticks": 8.843348090874041,
              "log_notional": 14.59706077951551,
              "log_trade_count": 5.287629489868675
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9751905888699333,
              8.187690659675833e-05,
              8.187595620121987e-05,
              0.0246456582672688
            ],
            [
              0.0003861640527881945,
              0.6545467236106053,
              0.03863842019096122,
              0.3064286921456452
            ],
            [
              0.05571326555319961,
              0.018701077938642792,
              0.8881406700834578,
              0.03744498642469986
            ],
            [
              0.0002665796267646533,
              0.16983722455103864,
              0.14588523387735725,
              0.6840109619448395
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              119.0,
              0.0,
              0.0,
              3.0
            ],
            [
              0.0,
              17.0,
              1.0,
              8.0
            ],
            [
              3.0,
              1.0,
              48.0,
              2.0
            ],
            [
              0.0,
              7.0,
              6.0,
              28.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 2.8667146568041334e-13,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 7.433350939089083e-117,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 0.999999993336713,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 6.663000333313224e-09,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.2749630706435299,
          "current_score": 1.081758214120885,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 12719.396674905067,
          "loglik": -5834.718771937033,
          "n_params": 191,
          "bic_delta_vs_next_best": 820.36407033244,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 14270.574488905617,
              "loglik": -6885.166090201968,
              "n_params": 91,
              "converged": true,
              "iterations": 20,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14270.57450573256,
                  "loglik": -6885.166098615439,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 19
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14270.574488905617,
                  "loglik": -6885.166090201968,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 14270.574496531894,
                  "loglik": -6885.166094015106,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 19
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 13539.760745237507,
              "loglik": -6385.07859684823,
              "n_params": 140,
              "converged": true,
              "iterations": 27,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13539.760745237507,
                  "loglik": -6385.07859684823,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 27
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13573.465002097397,
                  "loglik": -6401.930725278175,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 22
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13539.760778356651,
                  "loglik": -6385.078613407802,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 24
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 12719.396674905067,
              "loglik": -5834.718771937033,
              "n_params": 191,
              "converged": true,
              "iterations": 45,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12719.396674905067,
                  "loglik": -5834.718771937033,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 45
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12725.77985516682,
                  "loglik": -5837.910362067909,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 35
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12764.655176052092,
                  "loglik": -5857.348022510545,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 23
                }
              ]
            }
          ],
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 12719.396674905067,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 12725.77985516682,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 12764.655176052092,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 5997.693092292693,
                  "3": 5596.8321857619085,
                  "4": 5544.892787751301
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9077.365224321396,
                  "3": 9031.765863761304,
                  "4": 8317.049277403958
                },
                "valid": true
              },
              {
                "window_days": 244,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 14270.57450573256,
                  "3": 13539.760791854205,
                  "4": 12719.396674905067
                },
                "valid": true
              }
            ],
            "stable": true
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 244,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 820.36407033244,
          "state_count_interpretation": "244 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 820.36 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.2774869109947644,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.319999999999999,
            "min_effective_days_observed": 25.999785232618418,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 121.99600742274914,
                "pct_time": 0.4999836369784801,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 25.999785232618418,
                "pct_time": 0.10655649685499352,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 54.868952498605445,
                "pct_time": 0.22487275614182559,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 41.13525484602698,
                "pct_time": 0.16858711002470075,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.9751905888699333,
              0.6545467236106053,
              0.8881406700834578,
              0.6840109619448395
            ],
            "expected_duration_days": [
              40.30728479436142,
              2.894747476277517,
              8.939799663971666,
              3.164666743361633
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [],
            "warnings": []
          },
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 12719.396674905067,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 12725.77985516682,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 12764.655176052092,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "stable",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 5997.693092292693,
                  "3": 5596.8321857619085,
                  "4": 5544.892787751301
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9077.365224321396,
                  "3": 9031.765863761304,
                  "4": 8317.049277403958
                },
                "valid": true
              },
              {
                "window_days": 244,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 14270.57450573256,
                  "3": 13539.760791854205,
                  "4": 12719.396674905067
                },
                "valid": true
              }
            ],
            "stable": true
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.14346059071235534,
              "jump_probability": 0.2417800522692534,
              "jump_rate": 0.049181460180731745,
              "rolling_vol_10d": 0.03811127869391985,
              "downside_vol_10d": 0.022689253390440048,
              "drawdown_21d": 0.1753243198097826,
              "amihud_stress": 1.71812906873746,
              "spread_rel": 252.04807893011173,
              "spread_ticks": 11.345329884409718,
              "log_notional": 13.148908038641338,
              "log_trade_count": 3.7559659302968833
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.16533103225216603,
              "jump_probability": 0.17378561366414283,
              "jump_rate": 0.07692246820660391,
              "rolling_vol_10d": 0.058358490743513354,
              "downside_vol_10d": 0.017536336007803098,
              "drawdown_21d": 0.07466733363869989,
              "amihud_stress": 0.6580450939506235,
              "spread_rel": 926.7817352108262,
              "spread_ticks": 17.086869639491194,
              "log_notional": 2.3990547323793967,
              "log_trade_count": 0.29529143231640687
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.26780565092386704,
              "jump_probability": 0.2749630697873785,
              "jump_rate": 0.12482578487561653,
              "rolling_vol_10d": 0.07827943137711937,
              "downside_vol_10d": 0.03236042855206151,
              "drawdown_21d": 0.18921148308241623,
              "amihud_stress": 2.253593766540451,
              "spread_rel": 270.3947769836928,
              "spread_ticks": 9.827771076707664,
              "log_notional": 12.48959073382921,
              "log_trade_count": 3.3915768272119524
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8449264245334009,
              "jump_probability": 0.4034578787553754,
              "jump_rate": 0.34401222401131204,
              "rolling_vol_10d": 0.5003452692562,
              "downside_vol_10d": 0.05793544377914643,
              "drawdown_21d": 0.13744842025562506,
              "amihud_stress": 2.2748531025516288,
              "spread_rel": 334.5165256969728,
              "spread_ticks": 8.843348090874041,
              "log_notional": 14.59706077951551,
              "log_trade_count": 5.287629489868675
            }
          ],
          "jump_model_definition": {
            "type": "jump_score_feature_overlay",
            "method_name": "hmm_jump_aware",
            "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
          },
          "probability_basis": {
            "current_state": "filtered_forward_probability",
            "historical_states": "smoothed_forward_backward_probability",
            "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
          }
        },
        "feature_columns": [
          "stock_ret",
          "market_ret",
          "sector_ret",
          "abs_stock_ret",
          "residual_ret",
          "abs_residual_ret",
          "rolling_vol_5d",
          "rolling_vol_10d",
          "rolling_vol_21d",
          "downside_vol_10d",
          "rolling_skew_21d",
          "rolling_kurtosis_21d",
          "drawdown_21d",
          "market_corr_21d",
          "sector_corr_21d",
          "log_notional",
          "log_volume",
          "log_trade_count",
          "amihud_stress",
          "spread_rel",
          "spread_ticks",
          "jump_score"
        ],
        "smoothed_probability_tail": [
          {
            "trade_date": "2026-05-07",
            "state": 2,
            "probabilities": [
              6.260294136124915e-24,
              6.483026417895363e-20,
              0.9999999968464828,
              3.153517182011558e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              6.789558697017789e-20,
              1.4901779126919994e-18,
              0.999999980801628,
              1.9198372048709917e-08
            ],
            "jump_probability": 0.1730283428793917,
            "jump_score": 0.8897260784670444
          },
          {
            "trade_date": "2026-05-08",
            "state": 2,
            "probabilities": [
              3.4350563982626095e-14,
              1.4283979259238687e-103,
              0.9999999746594445,
              2.5340521283831266e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.2201421141294995e-14,
              1.7458549853839317e-104,
              0.9999999986124237,
              1.3875240416933603e-09
            ],
            "jump_probability": 0.10227111046728535,
            "jump_score": 0.36109488259397554
          },
          {
            "trade_date": "2026-05-11",
            "state": 3,
            "probabilities": [
              9.976038312875909e-25,
              0.0,
              0.00021918753976469393,
              0.9997808124602353
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.7777693274500784e-21,
              0.0,
              3.6010178411123625e-05,
              0.9999639898215889
            ],
            "jump_probability": 0.8867497114576637,
            "jump_score": 4.039532570491718
          },
          {
            "trade_date": "2026-05-12",
            "state": 2,
            "probabilities": [
              1.3496919933827789e-17,
              2.6820667311202533e-20,
              0.999999372975377,
              6.270246229186104e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.4640377745903835e-13,
              6.164962273329422e-19,
              0.9999961827241012,
              3.817275752465729e-06
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 2,
            "probabilities": [
              4.271679675321221e-15,
              4.63659277982923e-26,
              0.9999999979431518,
              2.0568441208985806e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.633656518871202e-11,
              1.065764724012191e-24,
              0.9999999874317184,
              1.2521945055397518e-08
            ],
            "jump_probability": 0.16638941052466089,
            "jump_score": 0.8487517508386118
          },
          {
            "trade_date": "2026-05-14",
            "state": 2,
            "probabilities": [
              8.275188882312709e-17,
              2.9502116510544942e-83,
              0.9999999999325258,
              6.74741021324013e-11
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              8.976198886530309e-13,
              6.781336368211312e-82,
              0.9999999995883242,
              4.107781823744096e-10
            ],
            "jump_probability": 0.25001700038027785,
            "jump_score": 1.2947638069318357
          },
          {
            "trade_date": "2026-05-15",
            "state": 2,
            "probabilities": [
              1.630487752048435e-21,
              0.0,
              0.9999999965094515,
              3.4905484763569224e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              1.5952714911666277e-17,
              0.0,
              0.9999999787853447,
              2.121465523868721e-08
            ],
            "jump_probability": 0.5490038310378872,
            "jump_score": 2.420997021539514
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              1.9434978083205675e-19,
              0.0,
              0.9999847749116961,
              1.5225088303843212e-05
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.1079150396442816e-15,
              0.0,
              0.999907317817775,
              9.268218222289861e-05
            ],
            "jump_probability": 0.3025449863144955,
            "jump_score": 1.523732144692044
          },
          {
            "trade_date": "2026-05-19",
            "state": 2,
            "probabilities": [
              2.6715514734847165e-15,
              3.4961567517765142e-12,
              0.9999999926670772,
              7.329423942926203e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.897798764177728e-11,
              8.036236983182416e-11,
              0.999999955269595,
              4.4621064760533096e-08
            ],
            "jump_probability": 0.09568253601455604,
            "jump_score": 0.29683071243556247
          },
          {
            "trade_date": "2026-05-20",
            "state": 2,
            "probabilities": [
              2.8667146568041334e-13,
              7.433350939089083e-117,
              0.999999993336713,
              6.663000333313224e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.8667146568041334e-13,
              7.433350939089083e-117,
              0.999999993336713,
              6.663000333313224e-09
            ],
            "jump_probability": 0.20693867573237767,
            "jump_score": 1.081758214120885
          }
        ],
        "methodology": {
          "estimation_window_days": 244,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_aware",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
          "current_state_probability_basis": "filtered",
          "historical_state_probability_basis": "smoothed",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "5.00",
          "sector_link_display": "-7.56",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.00% stock move in the same direction in this state. This is a point estimate from 244 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 7.56% stock move in the opposite direction in this state. This is a point estimate from 244 trading days.",
          "stock_persistence_display": "1.93",
          "point_estimate_note": "Point estimate only because the current state has 244 trading days.",
          "history_limited_note": "Read is based on 244 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Stressed / Illiquid",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 40.3,
          "driver_share_display": "40.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 244 trading days relative to the 252-day target.",
          "history_days": 244,
          "history_limited": true,
          "volatility_label": "Stressed / Illiquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 27.5,
          "jump_risk_score": 1.08,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8881406700834578,
          "effective_days": 54.9,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
          "expected_duration_days": 8.9
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
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.23641828271040313,
          "share_sector": 0.37804706731552523,
          "share_company": 0.38553464997407166,
          "share_market_display": "23.6%",
          "share_sector_display": "37.8%",
          "share_company_display": "38.6%",
          "dominant_share_display": "38.6%"
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
          "share_market": 0.47582682422873646,
          "share_sector": 0.07479712193549541,
          "share_company": 0.449376053835768,
          "share_market_display": "47.6%",
          "share_sector_display": "7.5%",
          "share_company_display": "44.9%",
          "dominant_share_display": "47.6%"
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
          "share_market": 0.24846880739118377,
          "share_sector": 0.37617946182954914,
          "share_company": 0.3753517307792672,
          "share_market_display": "24.8%",
          "share_sector_display": "37.6%",
          "share_company_display": "37.5%",
          "dominant_share_display": "37.6%"
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
          "share_market": 0.2814937043231073,
          "share_sector": 0.1798530718365465,
          "share_company": 0.5386532238403463,
          "share_market_display": "28.1%",
          "share_sector_display": "18.0%",
          "share_company_display": "53.9%",
          "dominant_share_display": "53.9%"
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
          "share_market": 0.2427575822804555,
          "share_sector": 0.21248291934941613,
          "share_company": 0.5447594983701284,
          "share_market_display": "24.3%",
          "share_sector_display": "21.2%",
          "share_company_display": "54.5%",
          "dominant_share_display": "54.5%"
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
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.2920225673004428,
          "share_sector": 0.1352829816091115,
          "share_company": 0.5726944510904456,
          "share_market_display": "29.2%",
          "share_sector_display": "13.5%",
          "share_company_display": "57.3%",
          "dominant_share_display": "57.3%"
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
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.06288289959006914,
          "share_sector": 0.2563925692687054,
          "share_company": 0.6807245311412256,
          "share_market_display": "6.3%",
          "share_sector_display": "25.6%",
          "share_company_display": "68.1%",
          "dominant_share_display": "68.1%"
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
          "share_market": 0.23780366401210667,
          "share_sector": 0.18324587262912154,
          "share_company": 0.5789504633587718,
          "share_market_display": "23.8%",
          "share_sector_display": "18.3%",
          "share_company_display": "57.9%",
          "dominant_share_display": "57.9%"
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
          "share_market": 0.04319703091178863,
          "share_sector": 0.13089891627866995,
          "share_company": 0.8259040528095414,
          "share_market_display": "4.3%",
          "share_sector_display": "13.1%",
          "share_company_display": "82.6%",
          "dominant_share_display": "82.6%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.2158883576172272,
          "share_sector": 0.1782313925827734,
          "share_company": 0.6058802497999994,
          "share_market_display": "21.6%",
          "share_sector_display": "17.8%",
          "share_company_display": "60.6%",
          "dominant_share_display": "60.6%"
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
          "share_market": 0.1615050100714235,
          "share_sector": 0.41833128789107965,
          "share_company": 0.42016370203749687,
          "share_market_display": "16.2%",
          "share_sector_display": "41.8%",
          "share_company_display": "42.0%",
          "dominant_share_display": "42.0%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.3648358013209242,
          "share_sector": 0.16832354878808156,
          "share_company": 0.4668406498909942,
          "share_market_display": "36.5%",
          "share_sector_display": "16.8%",
          "share_company_display": "46.7%",
          "dominant_share_display": "46.7%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-20",
          "n_obs": 13,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.15173905722786005,
          "share_sector": 0.2674657055724114,
          "share_company": 0.5807952371997285,
          "share_market_display": "15.2%",
          "share_sector_display": "26.7%",
          "share_company_display": "58.1%",
          "dominant_share_display": "58.1%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.999999993336713,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.4999836369784801,
          0.10655649685499352,
          0.22487275614182559,
          0.16858711002470075
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.4999836369784801,
            "expected_duration_days": 40.30728479436142,
            "current_probability": 2.8667146568041334e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 121.99600742274914,
            "volatility": {
              "median": 0.037979337449140144,
              "low": 0.037979337449140144,
              "high": 0.037979337449140144
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.2417800522692534,
            "jump_rate": 0.049181460180731745,
            "risk_score": 0.14346059071235534,
            "metrics": {
              "rolling_vol_10d": 0.03811127869391985,
              "downside_vol_10d": 0.022689253390440048,
              "drawdown_21d": 0.1753243198097826,
              "amihud_stress": 1.71812906873746,
              "spread_rel": 252.04807893011173,
              "spread_ticks": 11.345329884409718,
              "log_notional": 13.148908038641338,
              "log_trade_count": 3.7559659302968833
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.10655649685499352,
            "expected_duration_days": 2.894747476277517,
            "current_probability": 7.433350939089083e-117,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 25.999785232618418,
            "volatility": {
              "median": 0.002484107418386516,
              "low": 0.002484107418386516,
              "high": 0.002484107418386516
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.17378561366414283,
            "jump_rate": 0.07692246820660391,
            "risk_score": 0.16533103225216603,
            "metrics": {
              "rolling_vol_10d": 0.058358490743513354,
              "downside_vol_10d": 0.017536336007803098,
              "drawdown_21d": 0.07466733363869989,
              "amihud_stress": 0.6580450939506235,
              "spread_rel": 926.7817352108262,
              "spread_ticks": 17.086869639491194,
              "log_notional": 2.3990547323793967,
              "log_trade_count": 0.29529143231640687
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.22487275614182559,
            "expected_duration_days": 8.939799663971666,
            "current_probability": 0.999999993336713,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 54.868952498605445,
            "volatility": {
              "median": 0.04796274358095418,
              "low": 0.04796274358095418,
              "high": 0.04796274358095418
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.2749630697873785,
            "jump_rate": 0.12482578487561653,
            "risk_score": 0.26780565092386704,
            "metrics": {
              "rolling_vol_10d": 0.07827943137711937,
              "downside_vol_10d": 0.03236042855206151,
              "drawdown_21d": 0.18921148308241623,
              "amihud_stress": 2.253593766540451,
              "spread_rel": 270.3947769836928,
              "spread_ticks": 9.827771076707664,
              "log_notional": 12.48959073382921,
              "log_trade_count": 3.3915768272119524
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16858711002470075,
            "expected_duration_days": 3.164666743361633,
            "current_probability": 6.663000333313224e-09,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 41.13525484602698,
            "volatility": {
              "median": 0.8289046476941991,
              "low": 0.8289046476941991,
              "high": 0.8289046476941991
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.4034578787553754,
            "jump_rate": 0.34401222401131204,
            "risk_score": 0.8449264245334009,
            "metrics": {
              "rolling_vol_10d": 0.5003452692562,
              "downside_vol_10d": 0.05793544377914643,
              "drawdown_21d": 0.13744842025562506,
              "amihud_stress": 2.2748531025516288,
              "spread_rel": 334.5165256969728,
              "spread_ticks": 8.843348090874041,
              "log_notional": 14.59706077951551,
              "log_trade_count": 5.287629489868675
            }
          }
        ],
        "transitions": [
          [
            0.9751905888699333,
            8.187690659675833e-05,
            8.187595620121987e-05,
            0.0246456582672688
          ],
          [
            0.0003861640527881945,
            0.6545467236106053,
            0.03863842019096122,
            0.3064286921456452
          ],
          [
            0.05571326555319961,
            0.018701077938642792,
            0.8881406700834578,
            0.03744498642469986
          ],
          [
            0.0002665796267646533,
            0.16983722455103864,
            0.14588523387735725,
            0.6840109619448395
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 4.96,
          "quantity": 1000.0,
          "value": 4960.0
        },
        {
          "level": 2,
          "price": 4.85,
          "quantity": 1000.0,
          "value": 4850.0
        },
        {
          "level": 3,
          "price": 4.84,
          "quantity": 5000.0,
          "value": 24200.0
        },
        {
          "level": 4,
          "price": 4.81,
          "quantity": 31000.0,
          "value": 149110.0
        },
        {
          "level": 5,
          "price": 4.8,
          "quantity": 3000.0,
          "value": 14400.0
        },
        {
          "level": 6,
          "price": 4.79,
          "quantity": 5000.0,
          "value": 23950.0
        },
        {
          "level": 7,
          "price": 4.74,
          "quantity": 1000.0,
          "value": 4740.0
        },
        {
          "level": 8,
          "price": 4.72,
          "quantity": 1000.0,
          "value": 4720.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 4.98,
          "quantity": 7000.0,
          "value": 34860.0
        },
        {
          "level": 2,
          "price": 5.0,
          "quantity": 30000.0,
          "value": 150000.0
        },
        {
          "level": 3,
          "price": 5.08,
          "quantity": 10000.0,
          "value": 50800.0
        },
        {
          "level": 4,
          "price": 5.1,
          "quantity": 3000.0,
          "value": 15299.999999999998
        },
        {
          "level": 5,
          "price": 5.17,
          "quantity": 25000.0,
          "value": 129250.0
        },
        {
          "level": 6,
          "price": 5.2,
          "quantity": 2000.0,
          "value": 10400.0
        },
        {
          "level": 7,
          "price": 5.3,
          "quantity": 1000.0,
          "value": 5300.0
        },
        {
          "level": 8,
          "price": 5.35,
          "quantity": 1000.0,
          "value": 5350.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-20 07:59:58.086000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 4.970000000000001,
        "spread_pct": 0.004024144869215384,
        "spread_ticks": 2.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 230930.0,
        "ask_depth_notional_displayed": 401260.0,
        "bid_depth_notional_top10": 230930.0,
        "ask_depth_notional_top10": 401260.0,
        "bid_ask_depth_ratio": 0.5755
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 224,
        "n_trades_used": 68751,
        "first_trade_date": "2025-05-20",
        "last_trade_date": "2026-05-20",
        "window_label": "May 20, 2025 to May 20, 2026",
        "window_short_label": "May 20, 2025 to May 20, 2026",
        "trade_days_label": "224 trading days",
        "trade_count_label": "68,751 trades",
        "window_detail_label": "224 trading days • 68,751 trades",
        "history_note": "Trade-size percentiles use May 20, 2025 to May 20, 2026 history (224 trading days • 68,751 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 49400.0,
            "impact_pct": -0.025485999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 21.39,
            "pct_of_adv": 7.57
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 74935.0,
            "impact_pct": -0.027782,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 32.45,
            "pct_of_adv": 11.48
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1012305.0,
            "impact_pct": -0.031984,
            "filled_pct": 22.8,
            "levels_consumed": 8,
            "pct_of_bid_depth": 438.36,
            "pct_of_adv": 155.12
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-20",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "389480961",
            "timestamp": "2026-05-20 01:38:16.702000000",
            "local_timestamp": "2026-05-20 09:38:16",
            "posted_price": 5.0,
            "size_shares": 30000.0,
            "notional": 150000.0,
            "impact_pct": -0.029994,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 64.95,
            "price_vs_mid_pct": 0.604,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "9585409",
            "timestamp": "2026-05-20 01:20:08.064000000",
            "local_timestamp": "2026-05-20 09:20:08",
            "posted_price": 5.17,
            "size_shares": 25000.0,
            "notional": 129250.0,
            "impact_pct": -0.029641,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 55.97,
            "price_vs_mid_pct": 4.024,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "975799809",
            "timestamp": "2026-05-20 01:56:25.867000000",
            "local_timestamp": "2026-05-20 09:56:25",
            "posted_price": 5.08,
            "size_shares": 10000.0,
            "notional": 50800.0,
            "impact_pct": -0.025672,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 22.0,
            "price_vs_mid_pct": 2.213,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-20",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 61490.0,
            "ask_depth_notional": 390600.0,
            "mid_price": 4.82
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.008264462809917363,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 56650.0,
            "ask_depth_notional": 390620.0,
            "mid_price": 4.84
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 23570.0,
            "ask_depth_notional": 400300.0,
            "mid_price": 4.82
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.008298755186721999,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 28360.0,
            "ask_depth_notional": 400300.0,
            "mid_price": 4.82
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.008264462809917363,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 292450.0,
            "ask_depth_notional": 390620.0,
            "mid_price": 4.84
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.010298661174047336,
            "spread_ticks": 4.999999999999982,
            "bid_depth_notional": 490010.0,
            "ask_depth_notional": 386120.0,
            "mid_price": 4.855
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.008230452674897127,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 456270.0,
            "ask_depth_notional": 386120.0,
            "mid_price": 4.859999999999999
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02851323828920582,
            "spread_ticks": 14.000000000000057,
            "bid_depth_notional": 461740.0,
            "ask_depth_notional": 376360.0,
            "mid_price": 4.91
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.010256410256410402,
            "spread_ticks": 5.000000000000071,
            "bid_depth_notional": 442550.0,
            "ask_depth_notional": 420980.0,
            "mid_price": 4.875
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.010256410256410402,
            "spread_ticks": 5.000000000000071,
            "bid_depth_notional": 442590.0,
            "ask_depth_notional": 420980.0,
            "mid_price": 4.875
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.004024144869215384,
            "spread_ticks": 2.000000000000046,
            "bid_depth_notional": 230930.0,
            "ask_depth_notional": 401260.0,
            "mid_price": 4.970000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.008298755186721999,
          "median_spread_ticks": 4.0000000000000036,
          "median_bid_depth_notional": 292450.0,
          "median_ask_depth_notional": 390620.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "14:00",
          "deepest_bid_bucket": "13:00",
          "thinnest_bid_bucket": "10:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.7,
      "peers": [
        {
          "ticker": "2508",
          "pct": 27.9
        },
        {
          "ticker": "2521",
          "pct": 42.1
        },
        {
          "ticker": "2443",
          "pct": 93.4
        },
        {
          "ticker": "6100",
          "pct": 96.1
        },
        {
          "ticker": "331",
          "pct": 163.9
        },
        {
          "ticker": "1483",
          "pct": 166.3
        },
        {
          "ticker": "6959",
          "pct": 5028.9
        },
        {
          "ticker": "1463",
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
          "n_trades": 25,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-20",
          "last_trade_date": "2026-05-20",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 1.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 25,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 6973.2,
            "median": 4860.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1646,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-05-20",
          "period_days": 29,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9708383961117861,
            "mixed_pct": 0.02916160388821385,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8079869089896247,
            "mixed_qty_pct": 0.1920130910103753,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8084887081371235,
            "mixed_notional_pct": 0.19151129186287652,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 1598,
              "mixed": 48,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 16894.17496962333,
            "median": 8770.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2538,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-12",
          "last_trade_date": "2026-05-20",
          "period_days": 97,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9755713159968479,
            "mixed_pct": 0.02442868400315209,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8184526289475877,
            "mixed_qty_pct": 0.1815473710524123,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8170207499273816,
            "mixed_notional_pct": 0.18297925007261842,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 2476,
              "mixed": 62,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 15599.09377462569,
            "median": 7280.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 4641,
          "n_runs": 0,
          "n_trade_days": 125,
          "first_trade_date": "2025-11-04",
          "last_trade_date": "2026-05-20",
          "period_days": 197,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9793148028442146,
            "mixed_pct": 0.020469726352079293,
            "instit_pct": 0.00021547080370609782,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8275174262982947,
            "mixed_qty_pct": 0.16675052442460936,
            "instit_qty_pct": 0.005732049277095947,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8268938450004905,
            "mixed_notional_pct": 0.16604248170295294,
            "instit_notional_pct": 0.007063673296556744,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null
          },
          "run_composition": {
            "retail_pct": null,
            "mixed_pct": null,
            "instit_pct": null,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "unclear_notional_pct": null
          },
          "counts": {
            "trades": {
              "retail": 4545,
              "mixed": 95,
              "institutional": 1,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 0,
              "mixed": 0,
              "institutional": 0,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "trade_confidence": {
            "high": null,
            "medium": null,
            "low": null,
            "na": null
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 0,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "ambiguous_run_pct": null,
            "unobservable_run_pct": null
          },
          "dominant_bucket": null,
          "dominant_label": null,
          "dominant_share": null,
          "dominance_gap": null,
          "diagnostics": {
            "d1_cluster_mechanic": {},
            "d2_information": {},
            "d3_urgency": {},
            "participant_confidence": {}
          },
          "trade_size": {
            "avg": 14797.52566257272,
            "median": 6880.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 4641,
      "n_runs": 0,
      "n_trade_days": 125,
      "first_trade_date": "2025-11-04",
      "last_trade_date": "2026-05-20",
      "period_days": 197,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 78000.0,
        "instit_min": 390000.0
      },
      "composition": {
        "retail_pct": 0.9793148028442146,
        "mixed_pct": 0.020469726352079293,
        "instit_pct": 0.00021547080370609782,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.8268938450004905,
        "mixed_notional_pct": 0.16604248170295294,
        "instit_notional_pct": 0.007063673296556744,
        "ambiguous_notional_pct": null,
        "unobservable_notional_pct": null,
        "unclear_notional_pct": null
      },
      "run_composition": {
        "retail_pct": null,
        "mixed_pct": null,
        "instit_pct": null,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null
      },
      "trade_size": {
        "avg": 14797.52566257272,
        "median": 6880.0
      },
      "run_size": {
        "avg": null,
        "median": null,
        "avg_length": null
      },
      "confidence": {
        "high": null,
        "medium": null,
        "low": null,
        "na": null
      },
      "confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 0,
        "na": 0
      },
      "trade_confidence": {
        "high": null,
        "medium": null,
        "low": null,
        "na": null
      },
      "trade_confidence_counts": {
        "high": 0,
        "medium": 0,
        "low": 0,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 0,
          "mixed": 0,
          "institutional": 0,
          "ambiguous": 0,
          "unobservable": 0,
          "unclear": 0
        },
        "runs": {
          "retail": 0,
          "mixed": 0,
          "institutional": 0,
          "ambiguous": 0,
          "unobservable": 0,
          "unclear": 0
        }
      },
      "observability": {
        "avg_feature_coverage": null,
        "observable_run_pct": null,
        "ambiguous_run_pct": null,
        "unobservable_run_pct": null
      },
      "dominant_bucket": null,
      "dominant_label": null,
      "dominant_share": null,
      "dominance_gap": null,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-05",
            "n_trades": 889,
            "n_runs": 0,
            "retail_pct": 0.9673790776152981,
            "mixed_pct": 0.03262092238470191,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 17785.745781777277,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7952218430034129,
            "mixed_qty_pct": 0.20477815699658702,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 2930000.0
          },
          {
            "month": "2026-04",
            "n_trades": 1035,
            "n_runs": 0,
            "retail_pct": 0.9748792270531401,
            "mixed_pct": 0.025120772946859903,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 15822.313043478262,
            "avg_run_notional": null,
            "retail_qty_pct": 0.800056322162771,
            "mixed_qty_pct": 0.19994367783722894,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 4261200.0
          },
          {
            "month": "2026-03",
            "n_trades": 327,
            "n_runs": 0,
            "retail_pct": 0.9938837920489296,
            "mixed_pct": 0.0061162079510703364,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11479.25993883792,
            "avg_run_notional": null,
            "retail_qty_pct": 0.9391036050665801,
            "mixed_qty_pct": 0.06089639493341994,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 1231600.0
          },
          {
            "month": "2026-02",
            "n_trades": 388,
            "n_runs": 0,
            "retail_pct": 0.979381443298969,
            "mixed_pct": 0.020618556701030927,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13532.88144329897,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7743682310469314,
            "mixed_qty_pct": 0.22563176895306858,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 1772800.0
          },
          {
            "month": "2026-01",
            "n_trades": 431,
            "n_runs": 0,
            "retail_pct": 0.9791183294663574,
            "mixed_pct": 0.02088167053364269,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13832.802784222738,
            "avg_run_notional": null,
            "retail_qty_pct": 0.828644786782764,
            "mixed_qty_pct": 0.17135521321723599,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 1791600.0
          },
          {
            "month": "2025-12",
            "n_trades": 238,
            "n_runs": 0,
            "retail_pct": 0.9915966386554622,
            "mixed_pct": 0.008403361344537815,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 10804.655462184874,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8952448210922788,
            "mixed_qty_pct": 0.10475517890772128,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": null,
            "mixed_notional_pct": null,
            "instit_notional_pct": null,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_ambiguous_pct": null,
            "run_unobservable_pct": null,
            "run_unclear_pct": null,
            "avg_feature_coverage": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "total_quantity": 849600.0
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
      "recent_trades": [],
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
      "total_trades": 3474,
      "price_moving_trades": 1819,
      "pct_price_moving": 52.360391479562466,
      "all_movers": {
        "count": 1819,
        "avg_size": 15030.223529411765,
        "median_size": 6600.0,
        "retail_count": 1773,
        "mixed_count": 46,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.47113798790544,
        "mixed_pct": 2.5288620120945575,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 900,
        "avg_size": 15223.131333333333,
        "median_size": 6930.0,
        "retail_count": 878,
        "mixed_count": 22,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.55555555555556,
        "mixed_pct": 2.4444444444444446,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 919,
        "avg_size": 14841.304026115344,
        "median_size": 6320.0,
        "retail_count": 895,
        "mixed_count": 24,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.38846572361263,
        "mixed_pct": 2.6115342763873777,
        "instit_pct": 0.0,
        "unclear_pct": null
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
          "continuous": 0.9922422656323021,
          "closing": 0.007757734367697916,
          "auctions": 0.007757734367697916,
          "other": 0.0
        },
        "1M": {
          "opening": 0.00031063671528881075,
          "continuous": 0.9964348188480934,
          "closing": 0.0032545444366178272,
          "auctions": 0.003565181151906638,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0003747231899833939,
          "continuous": 0.996311895022928,
          "closing": 0.003313381787088499,
          "auctions": 0.0036881049770718932,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0006528883200371306,
          "continuous": 0.9929863039351382,
          "closing": 0.006360807744824646,
          "auctions": 0.007013696064861776,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.24237171684382774,
        "1M": 0.23484272058418157,
        "3M": 0.30706871577843253,
        "6M": 0.32668290370284353
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0078
        },
        {
          "time": "09:30",
          "avg_share": 0.1069
        },
        {
          "time": "10:00",
          "avg_share": 0.1024
        },
        {
          "time": "10:30",
          "avg_share": 0.0937
        },
        {
          "time": "11:00",
          "avg_share": 0.0742
        },
        {
          "time": "11:30",
          "avg_share": 0.0645
        },
        {
          "time": "13:00",
          "avg_share": 0.0797
        },
        {
          "time": "13:30",
          "avg_share": 0.1193
        },
        {
          "time": "14:00",
          "avg_share": 0.0569
        },
        {
          "time": "14:30",
          "avg_share": 0.0799
        },
        {
          "time": "15:00",
          "avg_share": 0.078
        },
        {
          "time": "15:30",
          "avg_share": 0.1225
        },
        {
          "time": "16:00",
          "avg_share": 0.0142
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1328",
          "auctions_pct": 0.4707705287312871,
          "hhi": 0.29129046871145087,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "6100",
          "auctions_pct": 0.9609456135694958,
          "hhi": 0.16576330866035638,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2443",
          "auctions_pct": 1.3720448569692159,
          "hhi": 0.18335541663622196,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1483",
          "auctions_pct": 1.6119401744450232,
          "hhi": 0.5934623695950275,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "331",
          "auctions_pct": 0.922590518643459,
          "hhi": 0.31175029186590103,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2521",
          "auctions_pct": 0.500507255155012,
          "hhi": 0.3059323352309897,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2508",
          "auctions_pct": 3.6200976347041425,
          "hhi": 0.19139510750752628,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6959",
          "auctions_pct": 1.0162615598379157,
          "hhi": 0.4980684551475298,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1463",
          "auctions_pct": 0.07760765103187717,
          "hhi": 0.7266496874756138,
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
