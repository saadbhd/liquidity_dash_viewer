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
      "marketCap": 148262726.3,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 12923886.515999999,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 66737813.212000005,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 25257480.0,
      "sector": "Electronic Components",
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
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 40499746.632,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 163696403.145,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 281220000.0,
      "sector": "Software - Application",
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
    "asof_date": "2026-04-23",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "148.3M",
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
          "score_pca": 73.83512544802868,
          "score_pca_percentile": 73.83512544802868,
          "rank_pca": 147,
          "total": 558,
          "adv_notional_sgd": 462723.0,
          "adv_volume_shares": 1814600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003182161907945436,
          "votes": 74.0,
          "trades": 74.0,
          "spread_pct": 0.027859397105234548,
          "spread_ticks": 1.4143646408839778,
          "amihud": 4.15600029191747e-08,
          "volatility": 0.748118057313962
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5109092240535015,
          "loadings": {
            "log_adv": 0.5575995148932581,
            "log_trades": 0.5107034960040259,
            "log_turnover": 0.514757067948257,
            "neg_spread": 0.3681514960809051,
            "neg_amihud": 0.049046279179005725,
            "neg_vol": -0.1592131263102061
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
          "peer_median_adv": 12925.0,
          "peer_median_score_pca": 51.25448028673835,
          "peer_median_trades": 13.0,
          "peer_median_volatility": 0.25637532766159543,
          "peer_median_spread_pct": 0.03145130918876067,
          "peer_median_spread_ticks": 1.5591985428051003,
          "peer_median_amihud": 2.1630715616175003e-06,
          "peer_median_turnover_ratio": 0.0003883928440205178,
          "target_vs_peer": {
            "score_pca_delta": 22.58,
            "adv_delta_pct": 3480.1,
            "trades_delta_pct": 469.23,
            "volatility_delta_pct": -191.81,
            "spread_pct_delta_pct": 11.42,
            "spread_ticks_delta_pct": -9.29,
            "amihud_delta_pct": 98.08,
            "turnover_ratio_delta_pct": 719.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.83512544802868,
            "rank_pca": 147,
            "adv": 462723.0,
            "trades": 74.0,
            "volatility": 0.748118057313962,
            "spread_pct": 0.027859397105234548,
            "spread_ticks": 1.4143646408839778,
            "amihud": 4.15600029191747e-08,
            "turnover_ratio": 0.003182161907945436,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 48.74551971326165,
            "rank_pca": 287,
            "adv": 2794.5,
            "trades": 12.0,
            "volatility": 1.1932570373025109,
            "spread_pct": 0.1551020408163266,
            "spread_ticks": 7.037037037037037,
            "amihud": 8.49125552310683e-05,
            "turnover_ratio": 0.0006039589068693907,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.7777777777777777,
            "rank_pca": 541,
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
            "ticker": "U77",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 3600.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.01077973409989221,
            "spread_ticks": 2.142857142857143,
            "amihud": 5.668934240362818e-06,
            "turnover_ratio": 5.5749135826451206e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 71.86379928315412,
            "rank_pca": 158,
            "adv": 137406.6,
            "trades": 74.0,
            "volatility": 0.42378592656177866,
            "spread_pct": 0.054565296471444175,
            "spread_ticks": 1.2295081967213115,
            "amihud": 3.032362831673787e-07,
            "turnover_ratio": 0.010214909578199023,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.51254480286738,
            "rank_pca": 372,
            "adv": 639.0,
            "trades": 5.0,
            "volatility": 0.0,
            "spread_pct": 0.026194144838212658,
            "spread_ticks": 1.8888888888888888,
            "amihud": 6.344372541555645e-05,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 73.65591397849462,
            "rank_pca": 148,
            "adv": 406154.0,
            "trades": 69.0,
            "volatility": 0.3345470825098914,
            "spread_pct": 0.036708473539308686,
            "spread_ticks": 1.0344827586206897,
            "amihud": 9.118963998147742e-08,
            "turnover_ratio": 0.01768866623115391,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.76344086021505,
            "rank_pca": 259,
            "adv": 22250.0,
            "trades": 14.0,
            "volatility": 0.47810865794475677,
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.5384615384615383,
            "amihud": 2.1630715616175003e-06,
            "turnover_ratio": 0.00017282678117164487,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 81.36200716845879,
            "rank_pca": 105,
            "adv": 986968.0,
            "trades": 495.0,
            "volatility": 0.1782035728132994,
            "spread_pct": 0.010907525235612121,
            "spread_ticks": 1.163265306122449,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.013661420704813193,
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
              "mean": 0.29402090701850314,
              "median": 0.12799295118592058,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0322674825326292,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4040234.5637621707,
              "median": 18930.5,
              "min": 0.0,
              "max": 295171716.0,
              "p5": 0.0,
              "p95": 14505938.399999982,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10962241037493935,
              "median": 0.02650228383196805,
              "min": 0.00035714437390094487,
              "max": 1.2400835073068897,
              "p5": 0.003383064075278625,
              "p95": 0.5412542973226377,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008497223126687182,
              "median": 0.0003960011244902274,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.018071973134697862,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0009883848071073624,
              "median": 1.4696261200608526e-08,
              "min": 0.0,
              "max": 0.4166666666666667,
              "p5": 0.0,
              "p95": 3.1424421620499895e-05,
              "count": 429
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 570.5806451612904,
              "median": 9.5,
              "min": 0.0,
              "max": 18452.0,
              "p5": 0.0,
              "p95": 2930.149999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3521362236269561,
              "median": 0.19880301822720958,
              "min": 0.0,
              "max": 1.1932570373025109,
              "p5": 0.0,
              "p95": 1.0374583943065185,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1419164.9375,
              "median": 12925.0,
              "min": 0.0,
              "max": 9874345.0,
              "p5": 223.65000000000003,
              "p95": 6763763.049999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11481424368220454,
              "median": 0.022981043196931866,
              "min": 0.001236499140040441,
              "max": 0.6666666666666666,
              "p5": 0.004576631375988561,
              "p95": 0.48761904761904734,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029759934399777154,
              "median": 0.0003883928440205178,
              "min": 0.0,
              "max": 0.013661420704813193,
              "p5": 1.1213417027904821e-05,
              "p95": 0.01101485057021913,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.232137110950205e-05,
              "median": 2.1630715616175003e-06,
              "min": 1.1604145220096357e-09,
              "max": 8.49125552310683e-05,
              "p5": 6.389560305840177e-09,
              "p95": 7.847190628641473e-05,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 397.5,
              "median": 13.0,
              "min": 0.0,
              "max": 2577.0,
              "p5": 1.05,
              "p95": 1848.2999999999988,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 194976.5125,
              "median": 12925.0,
              "min": 0.0,
              "max": 986968.0,
              "p5": 223.65000000000003,
              "p95": 783683.0999999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 84.0,
              "median": 13.0,
              "min": 0.0,
              "max": 495.0,
              "p5": 1.05,
              "p95": 347.64999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32598778464152967,
              "median": 0.25637532766159543,
              "min": 0.0,
              "max": 1.1932570373025109,
              "p5": 0.0,
              "p95": 0.9429551045272966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.12258647790288926,
              "median": 0.03145130918876067,
              "min": 0.01077973409989221,
              "max": 0.6666666666666666,
              "p5": 0.010824460997394179,
              "p95": 0.48761904761904734,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3793126085886325,
              "median": 1.5591985428051003,
              "min": 1.0,
              "max": 7.037037037037037,
              "p5": 1.0120689655172415,
              "p95": 5.81253561253561,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.237161475317458e-05,
              "median": 2.1630715616175003e-06,
              "min": 1.8590900468111437e-08,
              "max": 8.49125552310683e-05,
              "p5": 4.0370522322121234e-08,
              "p95": 7.847190628641473e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0053036962090498825,
              "median": 0.0003883928440205178,
              "min": 0.0,
              "max": 0.01768866623115391,
              "p5": 1.1213417027904821e-05,
              "p95": 0.016279130296934657,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.019230769230769273,
            "market": -0.011715696470211423,
            "sector": -0.018789696541990142,
            "peers": -0.029444582196875846,
            "vs_market": -0.0075150727605578505,
            "vs_sector": -0.00044107268877913164,
            "vs_peers": 0.010213812966106572
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 75.08960573476703,
          "score_pca_percentile": 75.08960573476703,
          "rank_pca": 140,
          "total": 558,
          "adv_notional_sgd": 462723.0,
          "adv_volume_shares": 1814600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.003182161907945436,
          "votes": 74.0,
          "trades": 74.0,
          "spread_pct": 0.021688613477924105,
          "spread_ticks": 1.0896739130434783,
          "amihud": 4.255556396205265e-08,
          "volatility": 0.8620328939504106
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5129278912185234,
          "loadings": {
            "log_adv": 0.5559731549923549,
            "log_trades": 0.50757549124739,
            "log_turnover": 0.5099957192489111,
            "neg_spread": 0.39231920056900954,
            "neg_amihud": 0.13594589544261382,
            "neg_vol": 0.027743401698462376
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
          "peer_median_adv": 14125.0,
          "peer_median_score_pca": 48.655913978494624,
          "peer_median_trades": 8.5,
          "peer_median_volatility": 0.4377201130219286,
          "peer_median_spread_pct": 0.03939403473445763,
          "peer_median_spread_ticks": 1.6702479338842977,
          "peer_median_amihud": 4.5010279469676566e-07,
          "peer_median_turnover_ratio": 0.00013287100377453178,
          "target_vs_peer": {
            "score_pca_delta": 26.43,
            "adv_delta_pct": 3175.9,
            "trades_delta_pct": 770.59,
            "volatility_delta_pct": -96.94,
            "spread_pct_delta_pct": 44.94,
            "spread_ticks_delta_pct": -34.76,
            "amihud_delta_pct": 90.55,
            "turnover_ratio_delta_pct": 2294.93
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 75.08960573476703,
            "rank_pca": 140,
            "adv": 462723.0,
            "trades": 74.0,
            "volatility": 0.8620328939504106,
            "spread_pct": 0.021688613477924105,
            "spread_ticks": 1.0896739130434783,
            "amihud": 4.255556396205265e-08,
            "turnover_ratio": 0.003182161907945436,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 24.193548387096776,
            "rank_pca": 424,
            "adv": 168.0,
            "trades": 2.0,
            "volatility": 8.277688302404194,
            "spread_pct": 0.652232746955345,
            "spread_ticks": 30.125,
            "amihud": 0.0003127597823364351,
            "turnover_ratio": 5.8353517571921806e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 11.469534050179211,
            "rank_pca": 495,
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
            "ticker": "U77",
            "score_pca": 44.44444444444444,
            "rank_pca": 311,
            "adv": 6000.0,
            "trades": 4.0,
            "volatility": 0.28577962224455367,
            "spread_pct": 0.017821518818991904,
            "spread_ticks": 2.2,
            "amihud": 4.065040650406489e-06,
            "turnover_ratio": 9.291522637741868e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 74.73118279569893,
            "rank_pca": 142,
            "adv": 217545.30000000002,
            "trades": 83.0,
            "volatility": 1.6920380830873984,
            "spread_pct": 0.050810014727540494,
            "spread_ticks": 1.140495867768595,
            "amihud": 3.032362831673787e-07,
            "turnover_ratio": 0.017712716814542052,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 21.14695340501792,
            "rank_pca": 441,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.28780928674538697,
            "spread_pct": 0.04137931034482763,
            "spread_ticks": 3.0,
            "amihud": 6.344372541555645e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 76.34408602150538,
            "rank_pca": 133,
            "adv": 406154.0,
            "trades": 69.0,
            "volatility": 0.4844131342728892,
            "spread_pct": 0.03740875912408763,
            "spread_ticks": 1.0379746835443038,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.01768866623115391,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.867383512544805,
            "rank_pca": 264,
            "adv": 22250.0,
            "trades": 13.0,
            "volatility": 0.4650743620652577,
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.5384615384615383,
            "amihud": 5.969693062261526e-07,
            "turnover_ratio": 0.00017282678117164487,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 87.27598566308244,
            "rank_pca": 72,
            "adv": 1570250.0000000002,
            "trades": 738.0,
            "volatility": 0.4103658639785994,
            "spread_pct": 0.010043675720823408,
            "spread_ticks": 1.0607267297162768,
            "amihud": 1.6888354466294237e-08,
            "turnover_ratio": 0.021142322263791015,
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
              "mean": 0.48617839276332525,
              "median": 0.24491507038273042,
              "min": 0.0,
              "max": 8.777043004572494,
              "p5": 0.0,
              "p95": 1.7025292815840203,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3372237.953886806,
              "median": 17250.8,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 14829228.099999981,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10905712742620512,
              "median": 0.027805651778797937,
              "min": 0.00023213750933499092,
              "max": 1.2394366197183098,
              "p5": 0.0033255340215777797,
              "p95": 0.5848214285714285,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.012812554128678945,
              "median": 0.00033331319075972704,
              "min": 0.0,
              "max": 3.7543619847653016,
              "p5": 0.0,
              "p95": 0.016230391161950117,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.741418685720903e-05,
              "median": 4.696127334700698e-08,
              "min": 0.0,
              "max": 0.005743153934179269,
              "p5": 0.0,
              "p95": 9.323417476152281e-05,
              "count": 506
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 488.86559139784947,
              "median": 8.0,
              "min": 0.0,
              "max": 14935.0,
              "p5": 0.0,
              "p95": 2691.849999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.353703762774357,
              "median": 0.3490875753619932,
              "min": 0.0,
              "max": 8.277688302404194,
              "p5": 0.08430791978225864,
              "p95": 5.682208909445366,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1785634.25,
              "median": 14125.0,
              "min": 0.0,
              "max": 12223680.0,
              "p5": 1.05,
              "p95": 8494979.499999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1788546215850338,
              "median": 0.020728277516787588,
              "min": 0.001236499140040441,
              "max": 0.6666666666666666,
              "p5": 0.004319010943314479,
              "p95": 0.661614794767704,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004014181931430951,
              "median": 0.00013287100377453178,
              "min": 0.0,
              "max": 0.021142322263791015,
              "p5": 1.1382614413096504e-07,
              "p95": 0.016355102159426583,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.761568809167187e-05,
              "median": 3.1976243509410265e-07,
              "min": 0.0,
              "max": 0.0003127597823364351,
              "p5": 1.9008721285119093e-10,
              "p95": 0.00022549916241412744,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 426.125,
              "median": 8.5,
              "min": 0.0,
              "max": 2577.0,
              "p5": 0.35000000000000003,
              "p95": 1933.349999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 277796.28750000003,
              "median": 14125.0,
              "min": 0.0,
              "max": 1570250.0000000002,
              "p5": 1.05,
              "p95": 1162816.3999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 113.75,
              "median": 8.5,
              "min": 0.0,
              "max": 738.0,
              "p5": 0.35000000000000003,
              "p95": 508.74999999999966,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.487896081849785,
              "median": 0.4377201130219286,
              "min": 0.0,
              "max": 8.277688302404194,
              "p5": 0.10002286778559379,
              "p95": 5.972710725643312,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18701632923924175,
              "median": 0.03939403473445763,
              "min": 0.010043675720823408,
              "max": 0.6666666666666666,
              "p5": 0.012765920805182383,
              "p95": 0.661614794767704,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.387832352436339,
              "median": 1.6702479338842977,
              "min": 1.0,
              "max": 30.125,
              "p5": 1.0132911392405064,
              "p95": 20.819711538461526,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.76573789876593e-05,
              "median": 4.5010279469676566e-07,
              "min": 0.0,
              "max": 0.0003127597823364351,
              "p5": 5.9109240632029835e-09,
              "p95": 0.00022549916241412744,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007108515756520328,
              "median": 0.00013287100377453178,
              "min": 0.0,
              "max": 0.021142322263791015,
              "p5": 1.1382614413096504e-07,
              "p95": 0.019941960356553875,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.04081632653061229,
            "market": -0.012724116803022212,
            "sector": -0.008633139019070257,
            "peers": -0.007447103634030228,
            "vs_market": 0.0535404433336345,
            "vs_sector": 0.04944946554968255,
            "vs_peers": 0.04826343016464252
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 69.89247311827957,
          "score_pca_percentile": 69.89247311827957,
          "rank_pca": 169,
          "total": 558,
          "adv_notional_sgd": 178802.0,
          "adv_volume_shares": 777400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013632826337687547,
          "votes": 46.0,
          "trades": 46.0,
          "spread_pct": 0.024966391396197374,
          "spread_ticks": 1.1071428571428572,
          "amihud": 4.255556396205265e-08,
          "volatility": 0.553658921001579
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5360375276157268,
          "loadings": {
            "log_adv": 0.5373533254303077,
            "log_trades": 0.49066016150341707,
            "log_turnover": 0.48975022182833244,
            "neg_spread": 0.4103713890329911,
            "neg_amihud": 0.14732136295304019,
            "neg_vol": 0.2013466385672264
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
          "peer_median_adv": 9082.15,
          "peer_median_score_pca": 50.358422939068106,
          "peer_median_trades": 7.0,
          "peer_median_volatility": 0.3843234327907433,
          "peer_median_spread_pct": 0.03724539133371199,
          "peer_median_spread_ticks": 1.7691326530612246,
          "peer_median_amihud": 9.323897696854656e-07,
          "peer_median_turnover_ratio": 9.994240847939342e-05,
          "target_vs_peer": {
            "score_pca_delta": 19.53,
            "adv_delta_pct": 1868.7,
            "trades_delta_pct": 557.14,
            "volatility_delta_pct": -44.06,
            "spread_pct_delta_pct": 32.97,
            "spread_ticks_delta_pct": -37.42,
            "amihud_delta_pct": 95.44,
            "turnover_ratio_delta_pct": 1264.07
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.89247311827957,
            "rank_pca": 169,
            "adv": 178802.0,
            "trades": 46.0,
            "volatility": 0.553658921001579,
            "spread_pct": 0.024966391396197374,
            "spread_ticks": 1.1071428571428572,
            "amihud": 4.255556396205265e-08,
            "turnover_ratio": 0.0013632826337687547,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.5089605734767026,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730358,
            "spread_pct": 0.5116279069767442,
            "spread_ticks": 22.142857142857142,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 4.211469534050179,
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
            "ticker": "U77",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.37201380740717277,
            "spread_pct": 0.015800974953773757,
            "spread_ticks": 2.375,
            "amihud": 3.534780982313106e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 62.18637992831542,
            "rank_pca": 212,
            "adv": 56710.4,
            "trades": 46.0,
            "volatility": 1.551847403361633,
            "spread_pct": 0.06209987195902694,
            "spread_ticks": 1.0192307692307692,
            "amihud": 3.5147656587309107e-07,
            "turnover_ratio": 0.006060347077260322,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.806451612903224,
            "rank_pca": 415,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.21877369084589188,
            "spread_pct": 0.034843205574912925,
            "spread_ticks": 2.5,
            "amihud": 2.495757212738346e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 175013.8,
            "trades": 41.0,
            "volatility": 0.3966330581743139,
            "spread_pct": 0.03964757709251105,
            "spread_ticks": 1.0714285714285714,
            "amihud": 0.0,
            "turnover_ratio": 0.008208453276465225,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.94265232974911,
            "rank_pca": 258,
            "adv": 13050.0,
            "trades": 10.0,
            "volatility": 0.41671732183600974,
            "spread_pct": 0.015331480077499801,
            "spread_ticks": 2.757575757575758,
            "amihud": 1.51330297349784e-06,
            "turnover_ratio": 0.00012028743969546483,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 657712.0,
            "trades": 358.0,
            "volatility": 0.34453267047595826,
            "spread_pct": 0.010269651223321194,
            "spread_ticks": 1.163265306122449,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.009644749743033771,
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
              "mean": 0.6508818825268847,
              "median": 0.37636549800762253,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.03406439854584801,
              "p95": 2.18214876993533,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3102698.5501379534,
              "median": 11809.25,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12635258.149999961,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10690813564218452,
              "median": 0.03195239175916152,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.003329744753170141,
              "p95": 0.49255127041658764,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003898081818099749,
              "median": 0.00021506029331885872,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011486748035937303,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.205226250219744e-05,
              "median": 1.2628553387181644e-07,
              "min": 0.0,
              "max": 0.004342162396873648,
              "p5": 0.0,
              "p95": 0.00010566629384610838,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 467.90860215053766,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2744.599999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7769558133406187,
              "median": 0.3582732389415655,
              "min": 0.0,
              "max": 4.014372790730358,
              "p5": 0.07657079179606216,
              "p95": 2.8031229363252836,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1870979.0375000003,
              "median": 9082.15,
              "min": 0.0,
              "max": 14113154.000000002,
              "p5": 0.0,
              "p95": 9403749.299999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1601065436587747,
              "median": 0.020383683174985567,
              "min": 0.0013460724010818808,
              "max": 0.6666666666666666,
              "p5": 0.004469324988865641,
              "p95": 0.6124031007751937,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025337453057965305,
              "median": 9.994240847939342e-05,
              "min": 0.0,
              "max": 0.009644749743033771,
              "p5": 0.0,
              "p95": 0.009440803171385776,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.065546068874352e-05,
              "median": 7.779292687299464e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 3.1731108995151906e-10,
              "p95": 0.00020770173767181488,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 501.125,
              "median": 7.0,
              "min": 0.0,
              "max": 3591.0,
              "p5": 0.0,
              "p95": 2459.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 113450.0625,
              "median": 9082.15,
              "min": 0.0,
              "max": 657712.0,
              "p5": 0.0,
              "p95": 488767.6299999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 57.375,
              "median": 7.0,
              "min": 0.0,
              "max": 358.0,
              "p5": 0.0,
              "p95": 248.79999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9143613428539172,
              "median": 0.3843234327907433,
              "min": 0.0,
              "max": 4.014372790730358,
              "p5": 0.07657079179606216,
              "p95": 3.152488905151303,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16953591681555705,
              "median": 0.03724539133371199,
              "min": 0.010269651223321194,
              "max": 0.6666666666666666,
              "p5": 0.012041291322283708,
              "p95": 0.6124031007751937,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.253669693401836,
              "median": 1.7691326530612246,
              "min": 1.0,
              "max": 22.142857142857142,
              "p5": 1.0067307692307692,
              "p95": 15.358008658008647,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.069396248859313e-05,
              "median": 9.323897696854656e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 0.0,
              "p95": 0.00020770173767181488,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003014179364214763,
              "median": 9.994240847939342e-05,
              "min": 0.0,
              "max": 0.009644749743033771,
              "p5": 0.0,
              "p95": 0.009142045979734779,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.08510638297872286,
            "market": 0.016798120393960447,
            "sector": 0.01707669368812792,
            "peers": 0.006211567323279876,
            "vs_market": 0.06830826258476241,
            "vs_sector": 0.06802968929059494,
            "vs_peers": 0.07889481565544298
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 74.37275985663082,
          "score_pca_percentile": 74.37275985663082,
          "rank_pca": 144,
          "total": 558,
          "adv_notional_sgd": 327600.0,
          "adv_volume_shares": 1332500.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0023367302669113268,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.024100349578449535,
          "spread_ticks": 1.15,
          "amihud": 5.7742142948318474e-08,
          "volatility": 0.5988766475324522
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5677513998835781,
          "loadings": {
            "log_adv": 0.5120152485840302,
            "log_trades": 0.4600564704615723,
            "log_turnover": 0.46804381434416376,
            "neg_spread": 0.4284204316214362,
            "neg_amihud": 0.2551453767246291,
            "neg_vol": 0.24182677180864337
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
          "peer_median_adv": 5733.700000000001,
          "peer_median_score_pca": 42.831541218637994,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.45279058110959997,
          "peer_median_spread_pct": 0.04669569218788705,
          "peer_median_spread_ticks": 1.436011315417256,
          "peer_median_amihud": 5.457466156786389e-07,
          "peer_median_turnover_ratio": 0.00012631729393851825,
          "target_vs_peer": {
            "score_pca_delta": 31.54,
            "adv_delta_pct": 5613.6,
            "trades_delta_pct": 2125.0,
            "volatility_delta_pct": -32.26,
            "spread_pct_delta_pct": 48.39,
            "spread_ticks_delta_pct": -19.92,
            "amihud_delta_pct": 89.42,
            "turnover_ratio_delta_pct": 1749.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 327600.0,
            "trades": 89.0,
            "volatility": 0.5988766475324522,
            "spread_pct": 0.024100349578449535,
            "spread_ticks": 1.15,
            "amihud": 5.7742142948318474e-08,
            "turnover_ratio": 0.0023367302669113268,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.2544802867383513,
            "rank_pca": 552,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.4229765013054831,
            "spread_ticks": 17.25,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 6.182795698924731,
            "rank_pca": 524,
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
            "ticker": "U77",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 5600.0,
            "trades": 4.0,
            "volatility": 0.3488306771756956,
            "spread_pct": 0.024420456556361606,
            "spread_ticks": 1.5714285714285714,
            "amihud": 1.067103677455191e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 39.784946236559136,
            "rank_pca": 337,
            "adv": 5867.400000000001,
            "trades": 4.0,
            "volatility": 1.1042322746619035,
            "spread_pct": 0.07612456747404839,
            "spread_ticks": 1.125,
            "amihud": 5.436839519538654e-07,
            "turnover_ratio": 0.0007165927830041195,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 29.749103942652326,
            "rank_pca": 393,
            "adv": 80.0,
            "trades": 1.0,
            "volatility": 0.36363663621650755,
            "spread_pct": 0.04687975646879747,
            "spread_ticks": 3.533333333333333,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 59.85663082437276,
            "rank_pca": 225,
            "adv": 33255.9,
            "trades": 19.0,
            "volatility": 0.5987319901909208,
            "spread_pct": 0.046511627906976626,
            "spread_ticks": 1.0666666666666667,
            "amihud": 0.0,
            "turnover_ratio": 0.0017707567635902655,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.017921146953405,
            "rank_pca": 252,
            "adv": 18972.0,
            "trades": 11.0,
            "volatility": 0.33793569613061997,
            "spread_pct": 0.015033072760072139,
            "spread_ticks": 2.3333333333333335,
            "amihud": 5.478092794034125e-07,
            "turnover_ratio": 0.00016591370992477907,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.61648745519713,
            "rank_pca": 98,
            "adv": 734103.0,
            "trades": 278.0,
            "volatility": 0.5419445260026924,
            "spread_pct": 0.010043675720823408,
            "spread_ticks": 1.3005940594059406,
            "amihud": 2.0880650627709966e-08,
            "turnover_ratio": 0.01094068893608576,
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
              "mean": 0.6901665209178499,
              "median": 0.4572607987302596,
              "min": 0.0,
              "max": 7.957548658045471,
              "p5": 0.1555406459927586,
              "p95": 2.2155172716379976,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3239393.220597263,
              "median": 11930.4,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13584595.799999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09908096010890495,
              "median": 0.0295413398861675,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.003566278539362127,
              "p95": 0.48340715372179116,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005821201190947471,
              "median": 0.0003017604147856788,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.010301631636607375,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1812749926131573e-05,
              "median": 1.4133756633122515e-07,
              "min": 0.0,
              "max": 0.0007493839420353828,
              "p5": 0.0,
              "p95": 4.525046554154886e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 460.921146953405,
              "median": 6.5,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2625.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5975704358693233,
              "median": 0.3562336566961016,
              "min": 0.0,
              "max": 2.28509876728461,
              "p5": 0.10648418781420309,
              "p95": 1.694921025371354,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2208345.875,
              "median": 12286.0,
              "min": 0.0,
              "max": 16580412.000000002,
              "p5": 0.0,
              "p95": 11034203.849999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1514294581730186,
              "median": 0.02426040306740557,
              "min": 0.0013151863274949596,
              "max": 0.6666666666666666,
              "p5": 0.004370157615159917,
              "p95": 0.5813751087902522,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030363086060508334,
              "median": 0.00012631729393851825,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.010876347143366811,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.544114043818956e-05,
              "median": 3.027757111758655e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.772191811278055e-10,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 537.5,
              "median": 7.5,
              "min": 0.0,
              "max": 3917.0,
              "p5": 0.0,
              "p95": 2643.349999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 99734.7875,
              "median": 5733.700000000001,
              "min": 0.0,
              "max": 734103.0,
              "p5": 0.0,
              "p95": 488806.51499999966,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 39.625,
              "median": 4.0,
              "min": 0.0,
              "max": 278.0,
              "p5": 0.0,
              "p95": 187.34999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6975513209578688,
              "median": 0.45279058110959997,
              "min": 0.0,
              "max": 2.28509876728461,
              "p5": 0.118277493645717,
              "p95": 1.8717954948666622,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16358204060740367,
              "median": 0.04669569218788705,
              "min": 0.010043675720823408,
              "max": 0.6666666666666666,
              "p5": 0.011789964684560464,
              "p95": 0.5813751087902522,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.6475444955209806,
              "median": 1.436011315417256,
              "min": 1.0,
              "max": 17.25,
              "p5": 1.0233333333333334,
              "p95": 12.44916666666666,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.550178415746485e-05,
              "median": 5.457466156786389e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017105291106858343,
              "median": 0.00012631729393851825,
              "min": 0.0,
              "max": 0.01094068893608576,
              "p5": 0.0,
              "p95": 0.007731212675712332,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 62,
            "stock": -0.10526315789473772,
            "market": 0.023981435215145286,
            "sector": -0.08218607315135573,
            "peers": -0.017936857197909828,
            "vs_market": -0.129244593109883,
            "vs_sector": -0.023077084743381993,
            "vs_peers": -0.0873263006968279
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability still looks solid, but the order book is uneven because bid depth is only 0.40x ask depth. That matters because access can feel less reliable on the buy side even with a 1-tick spread.",
        "market_comparison": "The stock has outperformed peers and the market over 1M, up 8.5% compared with 0.6% for peers and 1.7% for the market. That firmer backdrop can help keep attention on the name."
      },
      "1w": {
        "liquidity": "Liquidity appears stable rather than weakening, with the broader profile still screening well for the company’s size. The main watchpoint is that displayed buy-side support remains thinner than sell-side depth.",
        "market_comparison": "Market factors account for 58.4% of the current tape. That means tradability is still being shaped meaningfully by broader market moves rather than company-specific trading alone."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong for the company’s size, supported by a 3M liquidity score of 74.4 compared with a peer median of 42.8. That keeps the name accessible relative to its peer set.",
        "market_comparison": "Average daily volume is S$327.6K compared with a peer median of S$5.7K. That stronger turnover base supports better access than most comparable names."
      },
      "3m": {
        "liquidity": "Three-month liquidity is clearly strong, with a score 31.5 points above the peer median. That indicates the stock has been structurally easier to access than peers over a meaningful window.",
        "market_comparison": "The stock’s recent return has been stronger than both peers and the market over 1M. That stronger price backdrop matters because it supports engagement even as the displayed book stays thinner on the bid side."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 61,
      "reporting_window_days": 61,
      "available_history_days": 61,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.584356562690309,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "58.4%",
          "display_range": null,
          "display_text": "58.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 58.4,
          "plain_english": "Market explains about 58.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.406320024622593,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "40.6%",
          "display_range": null,
          "display_text": "40.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 40.6,
          "plain_english": "Sector explains about 40.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.00932341268709798,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.9%",
          "display_range": null,
          "display_text": "0.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "share_pct",
          "value_pct": 0.9,
          "plain_english": "Company-specific explains about 0.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 14.310015431672253,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "14.31",
          "display_range": null,
          "display_text": "14.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 14.31% stock move in the same direction in this state. The multiplier is unusually large and comes from only 61 trading days of history.",
          "value_num": 14.31
        },
        "beta_stock_lag": {
          "median": -0.021168623767098094,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.02",
          "display_range": null,
          "display_text": "-0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": -0.02
        },
        "beta_sector": {
          "median": -3.7521363561553587,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.75",
          "display_range": null,
          "display_text": "-3.75",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.75% stock move in the opposite direction in this state.",
          "value_num": -3.75
        },
        "beta_market_lag": {
          "median": 5.335819352810714,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "5.34",
          "display_range": null,
          "display_text": "5.34",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": 5.34
        },
        "beta_sector_lag": {
          "median": -0.5706404994664542,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.57",
          "display_range": null,
          "display_text": "-0.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "kind": "lag_beta",
          "value_num": -0.57
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 61 trading days relative to the 252-day target."
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
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.601290027576666,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.1%",
            "display_range": null,
            "display_text": "60.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 60.1,
            "plain_english": "Company-specific explains about 60.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2687654191763156,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12994455324701837,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.601290027576666,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.1%",
              "display_range": null,
              "display_text": "60.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 60.1,
              "plain_english": "Company-specific explains about 60.1% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5084745762711864,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.027918972199645883,
            "low": 0.027918972199645883,
            "high": 0.027918972199645883
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4915254237288136,
          "expected_duration_days": 5.8,
          "current_probability": 1.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.04257382330574765,
            "low": 0.04257382330574765,
            "high": 0.04257382330574765
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
            0.14285714285714285,
            0.8571428571428571
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
            24.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 61,
        "reporting_window_days": 61,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "14.31",
        "sector_link_display": "-3.75",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 14.31% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.75% stock move in the opposite direction in this state. This is a point estimate from 61 trading days.",
        "stock_persistence_display": "-0.02",
        "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
        "history_limited_note": "Read is based on 61 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 58.4,
        "driver_share_display": "58.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 61 trading days relative to the 252-day target.",
        "history_days": 61,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8571428571428571,
        "effective_days": 29.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
        "expected_duration_days": 5.8
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
          "pct_time": 0.5084745762711864,
          "expected_duration_days": 6.0,
          "current_probability": 0.0,
          "n_days_effective": 30.0,
          "volatility": {
            "median": 0.027918972199645883,
            "low": 0.027918972199645883,
            "high": 0.027918972199645883
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4915254237288136,
          "expected_duration_days": 5.8,
          "current_probability": 1.0,
          "n_days_effective": 29.0,
          "volatility": {
            "median": 0.04257382330574765,
            "low": 0.04257382330574765,
            "high": 0.04257382330574765
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
          0.14285714285714285,
          0.8571428571428571
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.14285714285714285,
            0.8571428571428571
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
            24.0
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
        "text": "Liquidity score: 74.4 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Structural liquidity is strong for the company’s size, while the displayed bid remains the main watchpoint.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of both peers and the market, with a firmer 1M backdrop than the main comparison groups.",
    "perf_insight": "Performance has been strong, with a 1M return of 8.5% compared with 0.6% for peers and 1.7% for the market. That matters because the stock is trading against a firmer backdrop even as the displayed bid stays thin.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main driver of the tape, with 58.4% of current trading linked to market factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 58.4% of price changes. Other influences are sector 40.6%, and company-specific 0.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 58.4%, sector 40.6%, and company-specific 0.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 58.4%, sector 40.6%, and company-specific 0.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Market factors are setting most of the tone, which means the stock is moving more with broader conditions than on company-specific news. That matters more with bid depth at 0.40x of ask depth, because downside trading can feel thinner even with a 1-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors account for 58.4% of current price moves.",
      "Monthly change: the stock was mostly market through Feb to Apr, so the latest pattern looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The current setup combines strong structural liquidity with a thinner buy-side book, leaving access solid overall but less supported on weakness.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 23, 2026 (63 trading days • 11,273 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution point is the thin buy side, with displayed bid depth at 0.40x of ask depth despite a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans retail-like.",
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
    "intraday_insight": "The immediate trading picture is defined by book imbalance rather than spread, with bid depth at 0.40x of ask depth and the spread at 1 tick. That matters because screen liquidity can look orderly while buy-side support remains thin.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity screens well for the company’s size, but the displayed book is thin on the buy side.",
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
        "value": "74.4/100",
        "sub": "Peer median 42.8 (+31.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$327.6K",
        "sub": "Peer median S$5.7K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.41%",
        "sub": "1.15 ticks; peers 4.67%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong for the stock’s size, with a 3M score of 74.4 versus a peer median of 42.8, indicating better baseline access than peers. Near term, recent trend context versus the 1M baseline is limited. The displayed book is the main watchpoint: bid depth is 0.40x ask depth despite a 1-tick spread, so buy-side support looks thin relative to the broader liquidity profile.",
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
        "value": "0.40x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.13% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-8.60% with 71.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-8.60% with 28.7% fill.",
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
        "value": "74",
        "suffix": "/100",
        "bar_pct": 74,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 144/558",
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
        "value": "2.41",
        "suffix": "%",
        "bar_pct": 24,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.41% • 1.15 ticks vs peers 4.67%",
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
        "value": "327.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$5.7K",
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
        "value": "58.4",
        "suffix": "market",
        "bar_pct": 58,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 40.6% • Company 0.9%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the company’s size, with a 3M liquidity score of 74.4 compared with a peer median of 42.8. That supports the view that the stock remains accessible relative to peers.",
      "Price performance is also firm, with a 1M return of 8.5% compared with 0.6% for peers and 1.7% for the market. That matters because the recent tape has a stronger return backdrop than the main comparison groups.",
      "The main watchpoint is the displayed book, where bid depth is only 0.40x of ask depth even with a 1-tick spread. That matters because selling into weakness may feel worse than the broader liquidity score implies."
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
      "overall": "3M liquidity is strong: score 74.4 vs peer median 42.8 (+31.5 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 74.4 vs peer median 42.8 (+31.5 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +31.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -10.5%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -10.5% vs market 2.4%.",
        "vs_sector": "Worse than sector: -10.5% vs sector -8.2%.",
        "vs_peers": "Worse than peers: -10.5% vs peers -1.8%."
      },
      "adv": {
        "insight": "ADV is S$327.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$327.6K vs market S$11.9K.",
        "vs_sector": "Better than sector: S$327.6K vs sector S$12.3K.",
        "vs_peers": "Better than peers: S$327.6K vs peers S$5.7K."
      },
      "spread": {
        "insight": "Spread is 2.41%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.41% vs market 2.95%.",
        "vs_sector": "In line with sector: 2.41% vs secto%.",
        "vs_peers": "Better than peers: 2.41% vs peers 4.67%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.23%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.23% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.23% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.23% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 59.89%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 59.89% vs market 45.73%.",
        "vs_sector": "Worse than sector: 59.89% vs sector 35.62%.",
        "vs_peers": "Worse than peers: 59.89% vs peers 45.28%."
      },
      "trades": {
        "insight": "Trades is 89, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 89 vs market 6.",
        "vs_sector": "Better than sector: 89 vs sector 8.",
        "vs_peers": "Better than peers: 89 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 5.77e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.77e-08 vs market 1.41e-07.",
        "vs_sector": "Better than sector: 5.77e-08 vs sector 3.03e-07.",
        "vs_peers": "Better than peers: 5.77e-08 vs peers 5.46e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with the stock up 8.5% over 1M compared with 0.6% for peers and 1.7% for the market. That move is broadly confirmed by liquidity, as the 3M liquidity score of 74.4 sits 31.5 points above the peer median, which supports access for the stock's size. The read is mixed at the margin because market factors account for 58.4% of the current tape, while displayed bid depth at 0.40x of ask depth points to thinner buy-side support if the move reverses.",
      "conclusion": "The move looks mainly market-linked rather than purely company-specific, with strong relative returns supported by above-peer liquidity but tempered by thin buy-side depth."
    },
    "drivers": {
      "overall": "The stock is currently being driven mainly by the market, with 58.4% of recent price moves explained by broader factors. That matters because day-to-day trading conditions are being shaped more by the wider tape than by stock-specific news, and the thin bid side can make selling pressure feel sharper.",
      "beta": "The current read points to a market-led tape, while the stock has still outperformed with a 1M return of 8.5% compared with 0.6% for peers and 1.7% for the market. That combination suggests the name is participating in broader moves from a position of relative price strength.",
      "rolling_change": "The monthly pattern had been mostly market from February through April, so the latest market-led read marks a shift from the earlier backdrop. That matters because the stock now looks more exposed to broader swings than it did through most of the last three months."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility phase, and that matters because day-to-day conditions are likely to feel less even even though the name remains liquid for its size on a 3M basis.",
      "current": "High volatility is in place now, while the stock has still outperformed over 1M with a return of 8.5% compared with 0.6% for peers and 1.7% for the market.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 5.8 days, although the read is mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.8 days."
    },
    "execution": {
      "overall": "The current book reads as thin buy-side because displayed bid depth is only 0.40x ask depth while the spread remains 1 tick. That means quoted tightness is intact, but available visible support on the buy side is materially lighter than the sell side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with materially less size bid than offered. Trade-size percentile context is based on 63 trading days and 11,273 trades, so the historical sizing frame is useful but not as established as a full-year view.",
      "peer_context": "This matters because the stock still screens well on broader liquidity, with a 3M score of 74.4 compared with a peer median of 42.8. Even so, the current book suggests near-term sell-side pressure could meet thinner visible support than that stronger peer standing implies."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like, although the read is mixed once trade value is considered. Retail-like trades account for 87.5% of count and 33.9% of value, which means participation is broad but larger tickets still matter.",
      "retail_heavy": "The retail-like skew is clear in activity levels: 87.5% of trades are retail-like, compared with 0.9% for institution-like trades. Retail-like flow also represents 33.9% of trade value against 14.1% for institution-like, so the tape is driven more by many smaller decisions than by a concentrated institutional presence.",
      "institutional_gap": "Institution-like participation is limited in count at 0.9% of trades, even though it reaches 14.1% of value. That leaves the flow looking less anchored by large participants and more dependent on steady day-to-day activity.",
      "peer_comparison": "The mix looks more retail-leaning than a typical institution-driven tape, with count far more skewed than value. That matters because peer standing on trader mix will depend on how much institutional value peers attract relative to their trade count."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful rather than dominant, with 20.1% of total trades moving price. That suggests the tape is active enough to register new orders without every trade forcing a reset. The signal is mixed because overall flow is retail-like by count and value, while larger-value participation is still present in the background. That combination points to price formation being shaped by broad activity rather than by one clearly dominant investor group.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low, with a 1M average short ratio of 0.26%, so it does not look like a meaningful driver of current trading conditions. The stronger 1M share price performance, up 8.5% compared with peers at 0.6% and the market at 1.7%, also points away from short pressure shaping the near-term picture.",
      "level": "Low short interest",
      "correlation": "No clear relationship",
      "trend": "Short positioning has dropped sharply, with shorts covering by 100% month on month, which further reduces the chance that short activity is distorting trading. The signal is mixed, but the direction still suggests short selling is becoming less relevant to the broader picture.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.2%, continuous 94.0%, and close 2.3%. Current trading concentration score is 0.261.",
      "hhi_interpretation": "The concentration score points to activity being fairly well distributed through the day rather than heavily concentrated in a few windows. That supports a steadier liquidity profile during normal trading hours.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 3.2% and the close at 2.3% play a much smaller role. That matters because access depends more on regular daytime flow than on auction-driven bursts.",
      "peer_ranking": "Intraday liquidity looks credible because activity is sustained through continuous trading rather than concentrated at the open or close. Relative peer standing will hinge on whether peers show the same balance between session spread and concentration."
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
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        74.37275985663082,
        1.2544802867383513,
        6.182795698924731,
        45.878136200716845,
        39.784946236559136,
        29.749103942652326,
        59.85663082437276,
        55.017921146953405,
        82.61648745519713
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
        327600.0,
        0.0,
        0.0,
        5600.0,
        5867.400000000001,
        80.0,
        33255.9,
        18972.0,
        734103.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.5988766475324522,
        "adv": 327600.0,
        "spread_pct": 0.024100349578449535,
        "turnover_ratio": 0.0023367302669113268,
        "amihud": 5.7742142948318474e-08,
        "trades": 89.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6901665209178499,
          "median": 0.4572607987302596,
          "min": 0.0,
          "max": 7.957548658045471,
          "p5": 0.1555406459927586,
          "p95": 2.2155172716379976,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3239393.220597263,
          "median": 11930.4,
          "min": 0.0,
          "max": 285980477.7,
          "p5": 0.0,
          "p95": 13584595.799999997,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09908096010890495,
          "median": 0.0295413398861675,
          "min": 0.0002652156920799096,
          "max": 1.3542204201990415,
          "p5": 0.003566278539362127,
          "p95": 0.48340715372179116,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005821201190947471,
          "median": 0.0003017604147856788,
          "min": 0.0,
          "max": 1.9774569903104608,
          "p5": 0.0,
          "p95": 0.010301631636607375,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.1812749926131573e-05,
          "median": 1.4133756633122515e-07,
          "min": 0.0,
          "max": 0.0007493839420353828,
          "p5": 0.0,
          "p95": 4.525046554154886e-05,
          "count": 554
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 460.921146953405,
          "median": 6.5,
          "min": 0.0,
          "max": 11380.0,
          "p5": 0.0,
          "p95": 2625.0499999999943,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5975704358693233,
          "median": 0.3562336566961016,
          "min": 0.0,
          "max": 2.28509876728461,
          "p5": 0.10648418781420309,
          "p95": 1.694921025371354,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2208345.875,
          "median": 12286.0,
          "min": 0.0,
          "max": 16580412.000000002,
          "p5": 0.0,
          "p95": 11034203.849999994,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1514294581730186,
          "median": 0.02426040306740557,
          "min": 0.0013151863274949596,
          "max": 0.6666666666666666,
          "p5": 0.004370157615159917,
          "p95": 0.5813751087902522,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0030363086060508334,
          "median": 0.00012631729393851825,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.010876347143366811,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.544114043818956e-05,
          "median": 3.027757111758655e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.772191811278055e-10,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 537.5,
          "median": 7.5,
          "min": 0.0,
          "max": 3917.0,
          "p5": 0.0,
          "p95": 2643.349999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 99734.7875,
          "median": 5733.700000000001,
          "min": 0.0,
          "max": 734103.0,
          "p5": 0.0,
          "p95": 488806.51499999966,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 39.625,
          "median": 4.0,
          "min": 0.0,
          "max": 278.0,
          "p5": 0.0,
          "p95": 187.34999999999985,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6975513209578688,
          "median": 0.45279058110959997,
          "min": 0.0,
          "max": 2.28509876728461,
          "p5": 0.118277493645717,
          "p95": 1.8717954948666622,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16358204060740367,
          "median": 0.04669569218788705,
          "min": 0.010043675720823408,
          "max": 0.6666666666666666,
          "p5": 0.011789964684560464,
          "p95": 0.5813751087902522,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.6475444955209806,
          "median": 1.436011315417256,
          "min": 1.0,
          "max": 17.25,
          "p5": 1.0233333333333334,
          "p95": 12.44916666666666,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.550178415746485e-05,
          "median": 5.457466156786389e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0017105291106858343,
          "median": 0.00012631729393851825,
          "min": 0.0,
          "max": 0.01094068893608576,
          "p5": 0.0,
          "p95": 0.007731212675712332,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.04081632653061229,
        "market": -0.012724116803022212,
        "sector": -0.008633139019070257,
        "peers": -0.007447103634030228
      },
      {
        "horizon": "1M",
        "stock": 0.08510638297872286,
        "market": 0.016798120393960447,
        "sector": 0.01707669368812792,
        "peers": 0.006211567323279876
      },
      {
        "horizon": "3M",
        "stock": -0.10526315789473772,
        "market": 0.023981435215145286,
        "sector": -0.08218607315135573,
        "peers": -0.017936857197909828
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
      "share_market": 0.584356562690309,
      "share_sector": 0.406320024622593,
      "share_idio": 0.00932341268709798,
      "beta_market": 14.310015431672253,
      "beta_sector": -3.7521363561553587,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 61,
        "reporting_window_days": 61,
        "available_history_days": 61,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.584356562690309,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.4%",
            "display_range": null,
            "display_text": "58.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 58.4,
            "plain_english": "Market explains about 58.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.406320024622593,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.6%",
            "display_range": null,
            "display_text": "40.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 40.6,
            "plain_english": "Sector explains about 40.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.00932341268709798,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.9%",
            "display_range": null,
            "display_text": "0.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "share_pct",
            "value_pct": 0.9,
            "plain_english": "Company-specific explains about 0.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 14.310015431672253,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "14.31",
            "display_range": null,
            "display_text": "14.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 14.31% stock move in the same direction in this state. The multiplier is unusually large and comes from only 61 trading days of history.",
            "value_num": 14.31
          },
          "beta_stock_lag": {
            "median": -0.021168623767098094,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.02",
            "display_range": null,
            "display_text": "-0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": -0.02
          },
          "beta_sector": {
            "median": -3.7521363561553587,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.75",
            "display_range": null,
            "display_text": "-3.75",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.75% stock move in the opposite direction in this state.",
            "value_num": -3.75
          },
          "beta_market_lag": {
            "median": 5.335819352810714,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "5.34",
            "display_range": null,
            "display_text": "5.34",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": 5.34
          },
          "beta_sector_lag": {
            "median": -0.5706404994664542,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.57",
            "display_range": null,
            "display_text": "-0.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
            "kind": "lag_beta",
            "value_num": -0.57
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 61 trading days relative to the 252-day target."
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
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 16,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.601290027576666,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.1%",
              "display_range": null,
              "display_text": "60.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 60.1,
              "plain_english": "Company-specific explains about 60.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2687654191763156,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12994455324701837,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.601290027576666,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.1%",
                "display_range": null,
                "display_text": "60.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 60.1,
                "plain_english": "Company-specific explains about 60.1% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5084745762711864,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.027918972199645883,
              "low": 0.027918972199645883,
              "high": 0.027918972199645883
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4915254237288136,
            "expected_duration_days": 5.8,
            "current_probability": 1.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.04257382330574765,
              "low": 0.04257382330574765,
              "high": 0.04257382330574765
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
              0.14285714285714285,
              0.8571428571428571
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
              24.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 61,
          "reporting_window_days": 61,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "14.31",
          "sector_link_display": "-3.75",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 14.31% stock move in the same direction in this state. This is a point estimate from 61 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.75% stock move in the opposite direction in this state. This is a point estimate from 61 trading days.",
          "stock_persistence_display": "-0.02",
          "point_estimate_note": "Point estimate only because the current state has 61 trading days.",
          "history_limited_note": "Read is based on 61 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 58.4,
          "driver_share_display": "58.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 61 trading days relative to the 252-day target.",
          "history_days": 61,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8571428571428571,
          "effective_days": 29.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
          "expected_duration_days": 5.8
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
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 16,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.2687654191763156,
          "share_sector": 0.12994455324701837,
          "share_company": 0.601290027576666,
          "share_market_display": "26.9%",
          "share_sector_display": "13.0%",
          "share_company_display": "60.1%",
          "dominant_share_display": "60.1%"
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
          0.5084745762711864,
          0.4915254237288136
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5084745762711864,
            "expected_duration_days": 6.0,
            "current_probability": 0.0,
            "n_days_effective": 30.0,
            "volatility": {
              "median": 0.027918972199645883,
              "low": 0.027918972199645883,
              "high": 0.027918972199645883
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4915254237288136,
            "expected_duration_days": 5.8,
            "current_probability": 1.0,
            "n_days_effective": 29.0,
            "volatility": {
              "median": 0.04257382330574765,
              "low": 0.04257382330574765,
              "high": 0.04257382330574765
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
            0.14285714285714285,
            0.8571428571428571
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 172300.0,
          "value": 43075.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 375500.0,
          "value": 91997.5
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 317100.0,
          "value": 76104.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 1088800.0,
          "value": 255868.0
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 60100.0,
          "value": 13823.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 145000.0,
          "value": 32625.0
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 210000.0,
          "value": 46200.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 517800.0,
          "value": 111327.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 187000.0,
          "value": 39270.0
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
          "quantity": 186900.0,
          "value": 47659.5
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 428000.0,
          "value": 111280.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 652700.0,
          "value": 172965.5
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 1073800.0,
          "value": 289926.0
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 700000.0,
          "value": 192500.00000000003
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 662000.0,
          "value": 185360.00000000003
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 364000.0,
          "value": 103739.99999999999
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 358000.0,
          "value": 103820.0
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 237200.0,
          "value": 69974.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 1432800.0,
          "value": 429840.0
        },
        {
          "level": 11,
          "price": 0.305,
          "quantity": 97000.0,
          "value": 29585.0
        },
        {
          "level": 12,
          "price": 0.31,
          "quantity": 5000.0,
          "value": 1550.0
        },
        {
          "level": 13,
          "price": 0.35,
          "quantity": 136000.0,
          "value": 47600.0
        },
        {
          "level": 14,
          "price": 0.38,
          "quantity": 1000.0,
          "value": 380.0
        },
        {
          "level": 15,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 08:59:49.815900000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2525,
        "spread_pct": 0.01980198019801982,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 716289.5,
        "ask_depth_notional_displayed": 1794080.0,
        "bid_ask_depth_ratio": 0.3993
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 92,
        "history_limited": true,
        "trade_days_used": 63,
        "n_trades_used": 11273,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-23",
        "window_label": "Jan 22, 2026 to Apr 23, 2026",
        "window_short_label": "Jan 22-Apr 23",
        "trade_days_label": "63 trading days",
        "trade_count_label": "11,273 trades",
        "window_detail_label": "63 trading days • 11,273 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 23, 2026 (63 trading days • 11,273 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10068.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.41,
            "pct_of_adv": 5.49
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14000.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.95,
            "pct_of_adv": 7.63
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 168313.54,
            "impact_pct": -0.028727999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 23.5,
            "pct_of_adv": 91.7
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-23",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8139994092949080064",
            "timestamp": "2026-04-22 22:59:01.965500000",
            "local_timestamp": "2026-04-23 06:59:01",
            "posted_price": 0.3,
            "size_shares": 532800.0,
            "notional": 159840.0,
            "impact_pct": -0.027601,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 22.31,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8138989689077102592",
            "timestamp": "2026-04-22 22:59:01.965500000",
            "local_timestamp": "2026-04-23 06:59:01",
            "posted_price": 0.3,
            "size_shares": 500000.0,
            "notional": 150000.0,
            "impact_pct": -0.026129,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 20.94,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8140389917136486400",
            "timestamp": "2026-04-23 03:25:25.986900000",
            "local_timestamp": "2026-04-23 11:25:25",
            "posted_price": 0.255,
            "size_shares": 400000.0,
            "notional": 102000.0,
            "impact_pct": -0.021438000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.24,
            "price_vs_mid_pct": 0.99,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.005,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 695802.5,
            "ask_depth_notional": 1828862.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 693002.5,
            "ask_depth_notional": 1806232.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 659640.0,
            "ask_depth_notional": 1815872.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 677299.0,
            "ask_depth_notional": 1878836.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.040000000000000036,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 659240.5,
            "ask_depth_notional": 1945071.0,
            "mid_price": 0.25
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.040000000000000036,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 634990.5,
            "ask_depth_notional": 1949870.0,
            "mid_price": 0.25
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 688372.5,
            "ask_depth_notional": 1931907.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 698422.5,
            "ask_depth_notional": 1932162.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 710922.5,
            "ask_depth_notional": 1932722.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 699422.5,
            "ask_depth_notional": 1932722.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 711922.5,
            "ask_depth_notional": 1830622.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 718947.5,
            "ask_depth_notional": 1802212.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 716289.5,
            "ask_depth_notional": 1794080.0,
            "mid_price": 0.2525
          }
        ],
        "summary": {
          "median_spread_pct": 0.01980198019801982,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 695802.5,
          "median_ask_depth_notional": 1878836.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "11:00",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 27.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 136.3
        },
        {
          "ticker": "42F",
          "pct": 628.7
        },
        {
          "ticker": "J03",
          "pct": 1226.2
        },
        {
          "ticker": "LVR",
          "pct": 6245.7
        },
        {
          "ticker": "U77",
          "pct": 18324.6
        },
        {
          "ticker": "KUX",
          "pct": null
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "NXR",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 39,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7692307692307693,
            "mixed_pct": 0.23076923076923078,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35909530720851474,
            "mixed_qty_pct": 0.6409046927914852,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35773190377127007,
            "mixed_notional_pct": 0.6422680962287299,
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
            "avg": 10815.576923076924,
            "median": 5100.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7692307692307693,
              "mixed_pct": 0.23076923076923078,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35909530720851474,
              "mixed_qty_pct": 0.6409046927914852,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35773190377127007,
              "mixed_notional_pct": 0.6422680962287299,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10815.576923076924,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2210.5,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1800.0,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 314.9777777777778,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 201.16666666666666,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9767441860465116,
              "mixed_pct": 0.023255813953488372,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8908800806180719,
              "mixed_qty_pct": 0.10911991938192811,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8928889644924076,
              "mixed_notional_pct": 0.10711103550759227,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3103.36511627907,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9619883040935673,
              "mixed_pct": 0.03216374269005848,
              "instit_pct": 0.005847953216374269,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4933964340744002,
              "mixed_qty_pct": 0.3530706581554039,
              "instit_qty_pct": 0.1535329077701959,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.493367287426491,
              "mixed_notional_pct": 0.3533231691266868,
              "instit_notional_pct": 0.15330954344682218,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2832.62865497076,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6857142857142857,
              "mixed_pct": 0.2857142857142857,
              "instit_pct": 0.02857142857142857,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1673610867966808,
              "mixed_qty_pct": 0.6139981093098981,
              "instit_qty_pct": 0.2186408038934211,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16788823879573547,
              "mixed_notional_pct": 0.6142734941149003,
              "instit_notional_pct": 0.21783826708936427,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11466.488571428572,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
          "n_trades": 308,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-04-23",
          "period_days": 6,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8571428571428571,
            "mixed_pct": 0.12337662337662338,
            "instit_pct": 0.01948051948051948,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28972407231208375,
            "mixed_qty_pct": 0.4374603552172534,
            "instit_qty_pct": 0.27281557247066285,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2867735186889888,
            "mixed_notional_pct": 0.43725765357563634,
            "instit_notional_pct": 0.27596882773537484,
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
            "avg": 8292.003246753247,
            "median": 1321.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8571428571428571,
              "mixed_pct": 0.12337662337662338,
              "instit_pct": 0.01948051948051948,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.28972407231208375,
              "mixed_qty_pct": 0.4374603552172534,
              "instit_qty_pct": 0.27281557247066285,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2867735186889888,
              "mixed_notional_pct": 0.43725765357563634,
              "instit_notional_pct": 0.27596882773537484,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8292.003246753247,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1808.172,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 523.7384615384615,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 562.1666666666666,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 201.16666666666666,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9450229071220325,
              "mixed_pct": 0.04789670970428988,
              "instit_pct": 0.007080383173677634,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3979665839167666,
              "mixed_qty_pct": 0.3887618197539818,
              "instit_qty_pct": 0.21327159632925163,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39785306904420836,
              "mixed_notional_pct": 0.3889941520115374,
              "instit_notional_pct": 0.2131527789442542,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3178.7576009995837,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9333333333333333,
              "mixed_pct": 0.06666666666666667,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7393894266567387,
              "mixed_qty_pct": 0.2606105733432614,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7366808552357453,
              "mixed_notional_pct": 0.2633191447642546,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4079.9666666666667,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9197080291970803,
              "mixed_pct": 0.08029197080291971,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6365250678763554,
              "mixed_qty_pct": 0.36347493212364457,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.640549015105382,
              "mixed_notional_pct": 0.359450984894618,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4863.520072992701,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7734806629834254,
              "mixed_pct": 0.20994475138121546,
              "instit_pct": 0.016574585635359115,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2001707087863295,
              "mixed_qty_pct": 0.595146007742247,
              "instit_qty_pct": 0.20468328347142353,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.201068434404822,
              "mixed_notional_pct": 0.5949691144479559,
              "instit_notional_pct": 0.20396245114722217,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8863.591160220994,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
          "n_trades": 951,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-25",
          "last_trade_date": "2026-04-23",
          "period_days": 29,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8654048370136698,
            "mixed_pct": 0.11777076761303891,
            "instit_pct": 0.016824395373291272,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3067387427262195,
            "mixed_qty_pct": 0.4559309788197925,
            "instit_qty_pct": 0.23733027845398805,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3030779775176894,
            "mixed_notional_pct": 0.455076420254226,
            "instit_notional_pct": 0.24184560222808466,
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
            "avg": 7724.731861198738,
            "median": 1608.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8654048370136698,
              "mixed_pct": 0.11777076761303891,
              "instit_pct": 0.016824395373291272,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3067387427262195,
              "mixed_qty_pct": 0.4559309788197925,
              "instit_qty_pct": 0.23733027845398805,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3030779775176894,
              "mixed_notional_pct": 0.455076420254226,
              "instit_notional_pct": 0.24184560222808466,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7724.731861198738,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 510.14,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 826.0756097560975,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3259.9411764705883,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9893617021276596,
              "mixed_pct": 0.010638297872340425,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9086340794883508,
              "mixed_qty_pct": 0.09136592051164916,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9087161825566258,
              "mixed_notional_pct": 0.09128381744337422,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2319.163829787234,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9377203290246768,
              "mixed_pct": 0.06227967097532315,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6921481048890042,
              "mixed_qty_pct": 0.30785189511099575,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6864641611477643,
              "mixed_notional_pct": 0.31353583885223574,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4323.672620446534,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9346955128205128,
              "mixed_pct": 0.05929487179487179,
              "instit_pct": 0.006009615384615385,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.383256487399047,
              "mixed_qty_pct": 0.4622980198078555,
              "instit_qty_pct": 0.15444549279309752,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3833771221800971,
              "mixed_notional_pct": 0.4605161190373211,
              "instit_notional_pct": 0.15610675878258176,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3478.291266025641,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8760330578512396,
              "mixed_pct": 0.12396694214876033,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4796522615597833,
              "mixed_qty_pct": 0.5203477384402168,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4903576600848391,
              "mixed_notional_pct": 0.509642339915161,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5147.322314049587,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.84,
              "mixed_pct": 0.14608695652173914,
              "instit_pct": 0.01391304347826087,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3218559945966611,
              "mixed_qty_pct": 0.4565363574908007,
              "instit_qty_pct": 0.2216076479125382,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.32226316859137266,
              "mixed_notional_pct": 0.4593256733675964,
              "instit_notional_pct": 0.218411158041031,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7912.836695652173,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 6390,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-01-22",
          "last_trade_date": "2026-04-23",
          "period_days": 91,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8751173708920188,
            "mixed_pct": 0.11564945226917057,
            "instit_pct": 0.009233176838810642,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3445871866288264,
            "mixed_qty_pct": 0.5150863626168083,
            "instit_qty_pct": 0.14032645075436526,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.33908956152357395,
            "mixed_notional_pct": 0.5202483669843243,
            "instit_notional_pct": 0.14066207149210172,
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
            "avg": 6336.589749608764,
            "median": 1275.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8751173708920188,
              "mixed_pct": 0.11564945226917057,
              "instit_pct": 0.009233176838810642,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3445871866288264,
              "mixed_qty_pct": 0.5150863626168083,
              "instit_qty_pct": 0.14032645075436526,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.33908956152357395,
              "mixed_notional_pct": 0.5202483669843243,
              "instit_notional_pct": 0.14066207149210172,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6336.589749608764,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 452.0941176470588,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 663.7205882352941,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9897959183673469,
              "mixed_pct": 0.01020408163265306,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8496508103834497,
              "mixed_qty_pct": 0.15034918961655028,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8441190178544205,
              "mixed_notional_pct": 0.15588098214557952,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1366.5416666666667,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9464816650148662,
              "mixed_pct": 0.053518334985133795,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7241226612942478,
              "mixed_qty_pct": 0.27587733870575215,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7095268269619439,
              "mixed_notional_pct": 0.2904731730380561,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3982.5453914767095,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9318181818181818,
              "mixed_pct": 0.06818181818181818,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6034346624555863,
              "mixed_qty_pct": 0.39656533754441375,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6079932783713339,
              "mixed_notional_pct": 0.3920067216286662,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4190.452651515152,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9259259259259259,
              "mixed_pct": 0.06172839506172839,
              "instit_pct": 0.012345679012345678,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2538334512856806,
              "mixed_qty_pct": 0.11708736337186443,
              "instit_qty_pct": 0.629079185342455,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2562097295243583,
              "mixed_notional_pct": 0.1258703850413286,
              "instit_notional_pct": 0.6179198854343131,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11827.814814814816,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9115845358017969,
              "mixed_pct": 0.0803158181323169,
              "instit_pct": 0.008099646065886196,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36382938949295074,
              "mixed_qty_pct": 0.460613213469603,
              "instit_qty_pct": 0.17555739703744624,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3644735654575209,
              "mixed_notional_pct": 0.4583972265970632,
              "instit_notional_pct": 0.1771292079454159,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4801.7078001633545,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
              "thresholds": {
                "retail_max": 13500.0,
                "instit_min": 67500.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9077429983525536,
              "mixed_pct": 0.085667215815486,
              "instit_pct": 0.006589785831960461,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.45362295475027076,
              "mixed_qty_pct": 0.39229522699274916,
              "instit_qty_pct": 0.1540818182569801,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.43899702159175114,
              "mixed_notional_pct": 0.40268291734410083,
              "instit_notional_pct": 0.15832006106414803,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5170.353459637561,
              "avg_run_notional": null,
              "dominant_bucket": null,
              "dominant_label": null,
              "high_confidence_pct": null,
              "medium_confidence_pct": null,
              "low_confidence_pct": null,
              "na_confidence_pct": null,
              "avg_feature_coverage": null,
              "observable_run_pct": null,
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
      "n_trades": 6390,
      "n_runs": 0,
      "n_trade_days": 0,
      "first_trade_date": "2026-01-22",
      "last_trade_date": "2026-04-23",
      "period_days": 91,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.8751173708920188,
        "mixed_pct": 0.11564945226917057,
        "instit_pct": 0.009233176838810642,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.33908956152357395,
        "mixed_notional_pct": 0.5202483669843243,
        "instit_notional_pct": 0.14066207149210172,
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
        "avg": 6336.589749608764,
        "median": 1275.0
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
            "month": "2026-04",
            "n_trades": 764,
            "n_runs": 0,
            "retail_pct": 0.8520942408376964,
            "mixed_pct": 0.12696335078534032,
            "instit_pct": 0.020942408376963352,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8342.598821989528,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2593714118468154,
            "mixed_qty_pct": 0.46699461917734203,
            "instit_qty_pct": 0.2736339689758426,
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
            "total_quantity": 26650200.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8751173708920188,
          "mixed_pct": 0.11564945226917057,
          "instit_pct": 0.009233176838810642,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3445871866288264,
          "mixed_qty_pct": 0.5150863626168083,
          "instit_qty_pct": 0.14032645075436526,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.33908956152357395,
          "mixed_notional_pct": 0.5202483669843243,
          "instit_notional_pct": 0.14066207149210172,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6336.589749608764,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
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
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 452.0941176470588,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
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
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 663.7205882352941,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9897959183673469,
          "mixed_pct": 0.01020408163265306,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8496508103834497,
          "mixed_qty_pct": 0.15034918961655028,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8441190178544205,
          "mixed_notional_pct": 0.15588098214557952,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1366.5416666666667,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9464816650148662,
          "mixed_pct": 0.053518334985133795,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7241226612942478,
          "mixed_qty_pct": 0.27587733870575215,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.7095268269619439,
          "mixed_notional_pct": 0.2904731730380561,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3982.5453914767095,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9318181818181818,
          "mixed_pct": 0.06818181818181818,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6034346624555863,
          "mixed_qty_pct": 0.39656533754441375,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6079932783713339,
          "mixed_notional_pct": 0.3920067216286662,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4190.452651515152,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9259259259259259,
          "mixed_pct": 0.06172839506172839,
          "instit_pct": 0.012345679012345678,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2538334512856806,
          "mixed_qty_pct": 0.11708736337186443,
          "instit_qty_pct": 0.629079185342455,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2562097295243583,
          "mixed_notional_pct": 0.1258703850413286,
          "instit_notional_pct": 0.6179198854343131,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11827.814814814816,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9115845358017969,
          "mixed_pct": 0.0803158181323169,
          "instit_pct": 0.008099646065886196,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.36382938949295074,
          "mixed_qty_pct": 0.460613213469603,
          "instit_qty_pct": 0.17555739703744624,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3644735654575209,
          "mixed_notional_pct": 0.4583972265970632,
          "instit_notional_pct": 0.1771292079454159,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4801.7078001633545,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9077429983525536,
          "mixed_pct": 0.085667215815486,
          "instit_pct": 0.006589785831960461,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.45362295475027076,
          "mixed_qty_pct": 0.39229522699274916,
          "instit_qty_pct": 0.1540818182569801,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.43899702159175114,
          "mixed_notional_pct": 0.40268291734410083,
          "instit_notional_pct": 0.15832006106414803,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5170.353459637561,
          "avg_run_notional": null,
          "dominant_bucket": null,
          "dominant_label": null,
          "high_confidence_pct": null,
          "medium_confidence_pct": null,
          "low_confidence_pct": null,
          "na_confidence_pct": null,
          "avg_feature_coverage": null,
          "observable_run_pct": null,
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
            "retail_pct": 0.7692307692307693,
            "mixed_pct": 0.23076923076923078,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35909530720851474,
            "mixed_qty_pct": 0.6409046927914852,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35773190377127007,
            "mixed_notional_pct": 0.6422680962287299,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10815.576923076924,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2210.5,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1800.0,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 314.9777777777778,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 201.16666666666666,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9767441860465116,
            "mixed_pct": 0.023255813953488372,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8908800806180719,
            "mixed_qty_pct": 0.10911991938192811,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8928889644924076,
            "mixed_notional_pct": 0.10711103550759227,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3103.36511627907,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9619883040935673,
            "mixed_pct": 0.03216374269005848,
            "instit_pct": 0.005847953216374269,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4933964340744002,
            "mixed_qty_pct": 0.3530706581554039,
            "instit_qty_pct": 0.1535329077701959,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.493367287426491,
            "mixed_notional_pct": 0.3533231691266868,
            "instit_notional_pct": 0.15330954344682218,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2832.62865497076,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6857142857142857,
            "mixed_pct": 0.2857142857142857,
            "instit_pct": 0.02857142857142857,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1673610867966808,
            "mixed_qty_pct": 0.6139981093098981,
            "instit_qty_pct": 0.2186408038934211,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16788823879573547,
            "mixed_notional_pct": 0.6142734941149003,
            "instit_notional_pct": 0.21783826708936427,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11466.488571428572,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "retail_pct": 0.8571428571428571,
            "mixed_pct": 0.12337662337662338,
            "instit_pct": 0.01948051948051948,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28972407231208375,
            "mixed_qty_pct": 0.4374603552172534,
            "instit_qty_pct": 0.27281557247066285,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2867735186889888,
            "mixed_notional_pct": 0.43725765357563634,
            "instit_notional_pct": 0.27596882773537484,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8292.003246753247,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1808.172,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 523.7384615384615,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 562.1666666666666,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 201.16666666666666,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9450229071220325,
            "mixed_pct": 0.04789670970428988,
            "instit_pct": 0.007080383173677634,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3979665839167666,
            "mixed_qty_pct": 0.3887618197539818,
            "instit_qty_pct": 0.21327159632925163,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39785306904420836,
            "mixed_notional_pct": 0.3889941520115374,
            "instit_notional_pct": 0.2131527789442542,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3178.7576009995837,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9333333333333333,
            "mixed_pct": 0.06666666666666667,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7393894266567387,
            "mixed_qty_pct": 0.2606105733432614,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7366808552357453,
            "mixed_notional_pct": 0.2633191447642546,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4079.9666666666667,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9197080291970803,
            "mixed_pct": 0.08029197080291971,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6365250678763554,
            "mixed_qty_pct": 0.36347493212364457,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.640549015105382,
            "mixed_notional_pct": 0.359450984894618,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4863.520072992701,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7734806629834254,
            "mixed_pct": 0.20994475138121546,
            "instit_pct": 0.016574585635359115,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2001707087863295,
            "mixed_qty_pct": 0.595146007742247,
            "instit_qty_pct": 0.20468328347142353,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.201068434404822,
            "mixed_notional_pct": 0.5949691144479559,
            "instit_notional_pct": 0.20396245114722217,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8863.591160220994,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "retail_pct": 0.8654048370136698,
            "mixed_pct": 0.11777076761303891,
            "instit_pct": 0.016824395373291272,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3067387427262195,
            "mixed_qty_pct": 0.4559309788197925,
            "instit_qty_pct": 0.23733027845398805,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3030779775176894,
            "mixed_notional_pct": 0.455076420254226,
            "instit_notional_pct": 0.24184560222808466,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7724.731861198738,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 510.14,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 826.0756097560975,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3259.9411764705883,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9893617021276596,
            "mixed_pct": 0.010638297872340425,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9086340794883508,
            "mixed_qty_pct": 0.09136592051164916,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9087161825566258,
            "mixed_notional_pct": 0.09128381744337422,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2319.163829787234,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9377203290246768,
            "mixed_pct": 0.06227967097532315,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6921481048890042,
            "mixed_qty_pct": 0.30785189511099575,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6864641611477643,
            "mixed_notional_pct": 0.31353583885223574,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4323.672620446534,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9346955128205128,
            "mixed_pct": 0.05929487179487179,
            "instit_pct": 0.006009615384615385,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.383256487399047,
            "mixed_qty_pct": 0.4622980198078555,
            "instit_qty_pct": 0.15444549279309752,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3833771221800971,
            "mixed_notional_pct": 0.4605161190373211,
            "instit_notional_pct": 0.15610675878258176,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3478.291266025641,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8760330578512396,
            "mixed_pct": 0.12396694214876033,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4796522615597833,
            "mixed_qty_pct": 0.5203477384402168,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4903576600848391,
            "mixed_notional_pct": 0.509642339915161,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5147.322314049587,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.84,
            "mixed_pct": 0.14608695652173914,
            "instit_pct": 0.01391304347826087,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3218559945966611,
            "mixed_qty_pct": 0.4565363574908007,
            "instit_qty_pct": 0.2216076479125382,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.32226316859137266,
            "mixed_notional_pct": 0.4593256733675964,
            "instit_notional_pct": 0.218411158041031,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7912.836695652173,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8751173708920188,
            "mixed_pct": 0.11564945226917057,
            "instit_pct": 0.009233176838810642,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3445871866288264,
            "mixed_qty_pct": 0.5150863626168083,
            "instit_qty_pct": 0.14032645075436526,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.33908956152357395,
            "mixed_notional_pct": 0.5202483669843243,
            "instit_notional_pct": 0.14066207149210172,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6336.589749608764,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 452.0941176470588,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
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
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 663.7205882352941,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9897959183673469,
            "mixed_pct": 0.01020408163265306,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8496508103834497,
            "mixed_qty_pct": 0.15034918961655028,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8441190178544205,
            "mixed_notional_pct": 0.15588098214557952,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1366.5416666666667,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9464816650148662,
            "mixed_pct": 0.053518334985133795,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7241226612942478,
            "mixed_qty_pct": 0.27587733870575215,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7095268269619439,
            "mixed_notional_pct": 0.2904731730380561,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3982.5453914767095,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9318181818181818,
            "mixed_pct": 0.06818181818181818,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6034346624555863,
            "mixed_qty_pct": 0.39656533754441375,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6079932783713339,
            "mixed_notional_pct": 0.3920067216286662,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4190.452651515152,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9259259259259259,
            "mixed_pct": 0.06172839506172839,
            "instit_pct": 0.012345679012345678,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2538334512856806,
            "mixed_qty_pct": 0.11708736337186443,
            "instit_qty_pct": 0.629079185342455,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2562097295243583,
            "mixed_notional_pct": 0.1258703850413286,
            "instit_notional_pct": 0.6179198854343131,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11827.814814814816,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9115845358017969,
            "mixed_pct": 0.0803158181323169,
            "instit_pct": 0.008099646065886196,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36382938949295074,
            "mixed_qty_pct": 0.460613213469603,
            "instit_qty_pct": 0.17555739703744624,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3644735654575209,
            "mixed_notional_pct": 0.4583972265970632,
            "instit_notional_pct": 0.1771292079454159,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4801.7078001633545,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9077429983525536,
            "mixed_pct": 0.085667215815486,
            "instit_pct": 0.006589785831960461,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.45362295475027076,
            "mixed_qty_pct": 0.39229522699274916,
            "instit_qty_pct": 0.1540818182569801,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.43899702159175114,
            "mixed_notional_pct": 0.40268291734410083,
            "instit_notional_pct": 0.15832006106414803,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5170.353459637561,
            "avg_run_notional": null,
            "dominant_bucket": null,
            "dominant_label": null,
            "high_confidence_pct": null,
            "medium_confidence_pct": null,
            "low_confidence_pct": null,
            "na_confidence_pct": null,
            "avg_feature_coverage": null,
            "observable_run_pct": null,
            "thresholds": {
              "retail_max": 13500.0,
              "instit_min": 67500.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
      "recent_trades": [],
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
      "total_trades": 6350,
      "price_moving_trades": 1275,
      "pct_price_moving": 20.078740157480315,
      "all_movers": {
        "count": 1275,
        "avg_size": 6826.387843137255,
        "median_size": 795.0,
        "retail_count": 1087,
        "mixed_count": 172,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.25490196078431,
        "mixed_pct": 13.49019607843137,
        "instit_pct": 1.2549019607843137,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 641,
        "avg_size": 5023.454758190328,
        "median_size": 66.0,
        "retail_count": 569,
        "mixed_count": 67,
        "institutional_count": 5,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.76755070202809,
        "mixed_pct": 10.452418096723868,
        "instit_pct": 0.7800312012480499,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 634,
        "avg_size": 8649.22712933754,
        "median_size": 2363.0,
        "retail_count": 518,
        "mixed_count": 105,
        "institutional_count": 11,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.70347003154575,
        "mixed_pct": 16.561514195583594,
        "instit_pct": 1.7350157728706623,
        "unclear_pct": null
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
        "n_days_short_data": 63,
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
            "avg_short_ratio": 0.0026255633809334307,
            "max_short_ratio": 0.03807390817469205,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.007666180538655473,
            "max_short_ratio": 0.0924792304328815,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.029173649417639398,
        "interpretation": "No clear relationship"
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
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
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
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
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
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.07566872528200433,
            "short_vol": 388400,
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
            "return": -0.018867924528301883
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.027351428548504857,
            "short_vol": 340900,
            "total_vol": 12463700,
            "close": 0.265,
            "return": -0.07017543859649111
          },
          {
            "date": "2026-01-22",
            "short_ratio": 1.628478837917501e-05,
            "short_vol": 500,
            "total_vol": 30703500,
            "close": 0.285,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0026255633809334307,
          "max_short_ratio": 0.03807390817469205,
          "is_target": true
        },
        {
          "ticker": "42F",
          "avg_short_ratio": 2.4900385074969807e-05,
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
          "avg_short_ratio": 0.00027104501035209936,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0030637519305565034,
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
        "1M",
        "3M"
      ],
      "session": {
        "1D": {
          "opening": 0.01086955522691782,
          "continuous": 0.9599821479943871,
          "closing": 0.029011741278272406,
          "auctions": 0.04001785200561296,
          "other": 0.0
        },
        "1W": {
          "opening": 0.007962772176472887,
          "continuous": 0.9725667313337841,
          "closing": 0.019392815279834233,
          "auctions": 0.027433268666215864,
          "other": 0.0
        },
        "1M": {
          "opening": 0.012431554976144857,
          "continuous": 0.972554949242968,
          "closing": 0.014916563578344064,
          "auctions": 0.02744505075703196,
          "other": 0.0
        },
        "3M": {
          "opening": 0.03238334812572355,
          "continuous": 0.9397625787104303,
          "closing": 0.022648502448204558,
          "auctions": 0.06023742128956968,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.4093154849260901,
        "1W": 0.418909434618299,
        "1M": 0.3545582808677164,
        "3M": 0.26070466458555847
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0105
        },
        {
          "time": "09:00",
          "avg_share": 0.1301
        },
        {
          "time": "09:30",
          "avg_share": 0.1021
        },
        {
          "time": "10:00",
          "avg_share": 0.0554
        },
        {
          "time": "10:30",
          "avg_share": 0.059
        },
        {
          "time": "11:00",
          "avg_share": 0.0461
        },
        {
          "time": "11:30",
          "avg_share": 0.0617
        },
        {
          "time": "12:00",
          "avg_share": 0.0024
        },
        {
          "time": "12:30",
          "avg_share": 0.0091
        },
        {
          "time": "13:00",
          "avg_share": 0.0709
        },
        {
          "time": "13:30",
          "avg_share": 0.0601
        },
        {
          "time": "14:00",
          "avg_share": 0.0735
        },
        {
          "time": "14:30",
          "avg_share": 0.0571
        },
        {
          "time": "15:00",
          "avg_share": 0.0582
        },
        {
          "time": "15:30",
          "avg_share": 0.047
        },
        {
          "time": "16:00",
          "avg_share": 0.0494
        },
        {
          "time": "16:30",
          "avg_share": 0.0714
        },
        {
          "time": "17:00",
          "avg_share": 0.0358
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.023742128956968,
          "hhi": 0.26070466458555847,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.5745339729188172,
          "hhi": 0.7077179421101513,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 6.538166148644123,
          "hhi": 0.8311636969769056,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.850413224842505,
          "hhi": 0.5293423207113266,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 5.525315649623197,
          "hhi": 0.6371405721944959,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 3.0310998952885635,
          "hhi": 0.7289624251226504,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 6.483347446368086,
          "hhi": 0.48512844761842966,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.02411693487809,
          "hhi": 0.4547096715804632,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.953624712845611,
          "hhi": 0.21882370946422144,
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
