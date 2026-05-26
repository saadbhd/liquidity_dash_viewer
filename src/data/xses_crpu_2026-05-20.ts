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
      "ticker": "CRPU",
      "name": "Sasseur Reit",
      "marketCap": 831762851.99,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1126840601.15,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "CRPU",
    "company": "Sasseur Reit",
    "asof_date": "2026-05-20",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
    "market_cap_category": "small",
    "universe_total": 556,
    "peers_count": 1,
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
          "score_pca": 78.05755395683454,
          "score_pca_percentile": 78.05755395683454,
          "rank_pca": 123,
          "total": 556,
          "adv_notional_sgd": 326116.0,
          "adv_volume_shares": 490400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0010729425908479952,
          "votes": 430.0,
          "trades": 430.0,
          "spread_pct": 0.007490636704119858,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 0.07141316959598021
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5088937460015243,
          "loadings": {
            "log_adv": 0.5588114140248785,
            "log_trades": 0.5165602126296036,
            "log_turnover": 0.5167858944359326,
            "neg_spread": 0.3525529550071954,
            "neg_amihud": 0.04955498687965167,
            "neg_vol": -0.16455517854713603
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 603713.5,
          "peer_median_score_pca": 81.83453237410072,
          "peer_median_trades": 944.0,
          "peer_median_volatility": 0.07249931184305358,
          "peer_median_spread_pct": 0.00760309589063116,
          "peer_median_spread_ticks": 1.0,
          "peer_median_amihud": 2.490849382192448e-08,
          "peer_median_turnover_ratio": 0.0007628572153297016,
          "target_vs_peer": {
            "score_pca_delta": -3.78,
            "adv_delta_pct": -46.0,
            "trades_delta_pct": -54.45,
            "volatility_delta_pct": 1.5,
            "spread_pct_delta_pct": 1.48,
            "spread_ticks_delta_pct": 0.0,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 40.65
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 78.05755395683454,
            "rank_pca": 123,
            "adv": 326116.0,
            "trades": 430.0,
            "volatility": 0.07141316959598021,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0010729425908479952,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 81.83453237410072,
            "rank_pca": 102,
            "adv": 603713.5,
            "trades": 944.0,
            "volatility": 0.07249931184305358,
            "spread_pct": 0.00760309589063116,
            "spread_ticks": 1.0,
            "amihud": 2.490849382192448e-08,
            "turnover_ratio": 0.0007628572153297016,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2487307817329193,
              "median": 0.12796988870012244,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8448926206552636,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3972750.683976146,
              "median": 14494.0,
              "min": 0.0,
              "max": 479623460.0,
              "p5": 0.0,
              "p95": 15446558.25,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10299427728271789,
              "median": 0.030769230769230795,
              "min": 0.0002900530277874263,
              "max": 1.7037037037037037,
              "p5": 0.003382858408670563,
              "p95": 0.4666307554187505,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00801938073825671,
              "median": 0.0002735576313625659,
              "min": 0.0,
              "max": 2.9365236306110343,
              "p5": 0.0,
              "p95": 0.01381873054151049,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.622565613489625e-05,
              "median": 1.7281263871454603e-08,
              "min": 0.0,
              "max": 0.008514261387824618,
              "p5": 0.0,
              "p95": 5.1046698872785786e-05,
              "count": 407
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 568.091726618705,
              "median": 9.0,
              "min": 0.0,
              "max": 16382.0,
              "p5": 0.0,
              "p95": 3770.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23572660747468233,
              "median": 0.0999495808818822,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.0,
              "p95": 0.8887006113603122,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9010275.501650749,
              "median": 390050.5,
              "min": 2250.0,
              "max": 63617885.0,
              "p5": 12455.199622096565,
              "p95": 43803962.54999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04208258703197932,
              "median": 0.008391844919777302,
              "min": 0.004514170371044852,
              "max": 0.15993665874901022,
              "p5": 0.004515571517043356,
              "p95": 0.1506254948535233,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002051745057621764,
              "median": 0.0009178999030888484,
              "min": 9.622738589793934e-06,
              "max": 0.00790118561621297,
              "p5": 3.4506887119488706e-05,
              "p95": 0.00659367455123901,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.3981502399726306e-08,
              "median": 3.857990159177074e-10,
              "min": 0.0,
              "max": 3.061472369007338e-07,
              "p5": 0.0,
              "p95": 2.0771367682315037e-07,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1169.875,
              "median": 372.0,
              "min": 2.0,
              "max": 4823.0,
              "p5": 5.15,
              "p95": 4117.749999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 603713.5,
              "median": 603713.5,
              "min": 603713.5,
              "max": 603713.5,
              "p5": 603713.5,
              "p95": 603713.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 944.0,
              "median": 944.0,
              "min": 944.0,
              "max": 944.0,
              "p5": 944.0,
              "p95": 944.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.07249931184305358,
              "median": 0.07249931184305358,
              "min": 0.07249931184305358,
              "max": 0.07249931184305358,
              "p5": 0.07249931184305358,
              "p95": 0.07249931184305358,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00760309589063116,
              "median": 0.00760309589063116,
              "min": 0.00760309589063116,
              "max": 0.00760309589063116,
              "p5": 0.00760309589063116,
              "p95": 0.00760309589063116,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0,
              "median": 1.0,
              "min": 1.0,
              "max": 1.0,
              "p5": 1.0,
              "p95": 1.0,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.490849382192448e-08,
              "median": 2.490849382192448e-08,
              "min": 2.490849382192448e-08,
              "max": 2.490849382192448e-08,
              "p5": 2.490849382192448e-08,
              "p95": 2.490849382192448e-08,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0007628572153297016,
              "median": 0.0007628572153297016,
              "min": 0.0007628572153297016,
              "max": 0.0007628572153297016,
              "p5": 0.0007628572153297016,
              "p95": 0.0007628572153297016,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.00540769907871963,
            "sector": -0.004366812227074246,
            "peers": -0.015037593984962405,
            "vs_market": 0.00540769907871963,
            "vs_sector": 0.004366812227074246,
            "vs_peers": 0.015037593984962405
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.11510791366906,
          "score_pca_percentile": 81.11510791366906,
          "rank_pca": 106,
          "total": 556,
          "adv_notional_sgd": 477935.5,
          "adv_volume_shares": 718700.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.00157243849927091,
          "votes": 326.0,
          "trades": 326.0,
          "spread_pct": 0.007546964433115941,
          "spread_ticks": 1.0,
          "amihud": 1.2221790793007083e-08,
          "volatility": 0.11271797123620649
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5253554068579189,
          "loadings": {
            "log_adv": 0.5429949356481152,
            "log_trades": 0.4956937932042196,
            "log_turnover": 0.49334394357764794,
            "neg_spread": 0.40749595342332673,
            "neg_amihud": 0.1432136220781386,
            "neg_vol": 0.17173474595853147
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 808174.5,
          "peer_median_score_pca": 83.45323741007195,
          "peer_median_trades": 825.0,
          "peer_median_volatility": 0.1429558745306357,
          "peer_median_spread_pct": 0.007490636704119858,
          "peer_median_spread_ticks": 1.0024813895781637,
          "peer_median_amihud": 8.056633687561787e-09,
          "peer_median_turnover_ratio": 0.0010058591448304072,
          "target_vs_peer": {
            "score_pca_delta": -2.34,
            "adv_delta_pct": -40.9,
            "trades_delta_pct": -60.48,
            "volatility_delta_pct": 21.15,
            "spread_pct_delta_pct": -0.75,
            "spread_ticks_delta_pct": -0.25,
            "amihud_delta_pct": -51.7,
            "turnover_ratio_delta_pct": 56.33
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.11510791366906,
            "rank_pca": 106,
            "adv": 477935.5,
            "trades": 326.0,
            "volatility": 0.11271797123620649,
            "spread_pct": 0.007546964433115941,
            "spread_ticks": 1.0,
            "amihud": 1.2221790793007083e-08,
            "turnover_ratio": 0.00157243849927091,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.45323741007195,
            "rank_pca": 93,
            "adv": 808174.5,
            "trades": 825.0,
            "volatility": 0.1429558745306357,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0024813895781637,
            "amihud": 8.056633687561787e-09,
            "turnover_ratio": 0.0010058591448304072,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6296701408723757,
              "median": 0.4027956343980236,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.09074873360314997,
              "p95": 1.8936243473153438,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3518113.783901886,
              "median": 19833.95,
              "min": 0.0,
              "max": 312928590.0,
              "p5": 0.0,
              "p95": 15865029.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09866117863169194,
              "median": 0.02922155688622757,
              "min": 0.0002872245650042818,
              "max": 1.4782608695652175,
              "p5": 0.00331138803586771,
              "p95": 0.44580498866213125,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006558196431238766,
              "median": 0.00034183842025659495,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.014786947497789674,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.493360127403007e-05,
              "median": 9.99864785355803e-08,
              "min": 0.0,
              "max": 0.009312117810749816,
              "p5": 0.0,
              "p95": 4.2992789085982066e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 527.3705035971223,
              "median": 9.0,
              "min": 0.0,
              "max": 12362.0,
              "p5": 0.0,
              "p95": 3041.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29830271708324824,
              "median": 0.14955106111044886,
              "min": 0.09416931955898483,
              "max": 1.401999907809055,
              "p5": 0.10066134764601241,
              "p95": 0.9796866377631397,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11374322.771991247,
              "median": 561173.0,
              "min": 0.0,
              "max": 78488037.0,
              "p5": 8054.865000000002,
              "p95": 54682597.64999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04136082391980582,
              "median": 0.008298369094386028,
              "min": 0.004326172685959701,
              "max": 0.14578587699316628,
              "p5": 0.004377368852563745,
              "p95": 0.14460375198273082,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024659696306694617,
              "median": 0.0010215881028355312,
              "min": 0.0,
              "max": 0.008886751071857197,
              "p5": 7.104573975260255e-05,
              "p95": 0.007936322460068113,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.6922999206739645e-09,
              "median": 3.6324789369632416e-10,
              "min": 0.0,
              "max": 1.6533479097430197e-08,
              "p5": 0.0,
              "p95": 1.5024388190882105e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1310.5,
              "median": 320.0,
              "min": 0.0,
              "max": 6474.0,
              "p5": 11.55,
              "p95": 5072.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 808174.5,
              "median": 808174.5,
              "min": 808174.5,
              "max": 808174.5,
              "p5": 808174.5,
              "p95": 808174.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 825.0,
              "median": 825.0,
              "min": 825.0,
              "max": 825.0,
              "p5": 825.0,
              "p95": 825.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1429558745306357,
              "median": 0.1429558745306357,
              "min": 0.1429558745306357,
              "max": 0.1429558745306357,
              "p5": 0.1429558745306357,
              "p95": 0.1429558745306357,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007490636704119858,
              "median": 0.007490636704119858,
              "min": 0.007490636704119858,
              "max": 0.007490636704119858,
              "p5": 0.007490636704119858,
              "p95": 0.007490636704119858,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0024813895781637,
              "median": 1.0024813895781637,
              "min": 1.0024813895781637,
              "max": 1.0024813895781637,
              "p5": 1.0024813895781637,
              "p95": 1.0024813895781637,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.056633687561787e-09,
              "median": 8.056633687561787e-09,
              "min": 8.056633687561787e-09,
              "max": 8.056633687561787e-09,
              "p5": 8.056633687561787e-09,
              "p95": 8.056633687561787e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010058591448304072,
              "median": 0.0010058591448304072,
              "min": 0.0010058591448304072,
              "max": 0.0010058591448304072,
              "p5": 0.0010058591448304072,
              "p95": 0.0010058591448304072,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -2.220446049250313e-16,
            "market": 0.008161423294613224,
            "sector": -0.0014352838202824625,
            "peers": -0.03676470588235292,
            "vs_market": -0.008161423294613446,
            "vs_sector": 0.0014352838202822404,
            "vs_peers": 0.0367647058823527
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.63309352517986,
          "score_pca_percentile": 83.63309352517986,
          "rank_pca": 92,
          "total": 556,
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 7.01906746522696e-09,
          "volatility": 0.18118782951393553
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5545905888628269,
          "loadings": {
            "log_adv": 0.5238201140662769,
            "log_trades": 0.47227696132388197,
            "log_turnover": 0.47869115504878756,
            "neg_spread": 0.4152409133630766,
            "neg_amihud": 0.2139993182487344,
            "neg_vol": 0.23494895964614346
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1095383.5,
          "peer_median_score_pca": 85.97122302158273,
          "peer_median_trades": 840.0,
          "peer_median_volatility": 0.18395047770879297,
          "peer_median_spread_pct": 0.007575527092397097,
          "peer_median_spread_ticks": 1.0038948393378773,
          "peer_median_amihud": 6.1955971199717675e-09,
          "peer_median_turnover_ratio": 0.0013235162992662752,
          "target_vs_peer": {
            "score_pca_delta": -2.34,
            "adv_delta_pct": -39.2,
            "trades_delta_pct": -51.67,
            "volatility_delta_pct": 1.5,
            "spread_pct_delta_pct": -1.22,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": -13.29,
            "turnover_ratio_delta_pct": 64.23
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.63309352517986,
            "rank_pca": 92,
            "adv": 665645.0,
            "trades": 406.0,
            "volatility": 0.18118782951393553,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 7.01906746522696e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.97122302158273,
            "rank_pca": 79,
            "adv": 1095383.5,
            "trades": 840.0,
            "volatility": 0.18395047770879297,
            "spread_pct": 0.007575527092397097,
            "spread_ticks": 1.0038948393378773,
            "amihud": 6.1955971199717675e-09,
            "turnover_ratio": 0.0013235162992662752,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6924260121169268,
              "median": 0.4795149483649227,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15895878516444056,
              "p95": 2.224117777819183,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3360815.586440859,
              "median": 13503.9,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13779679.499999998,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10101557848886356,
              "median": 0.03205574912891988,
              "min": 0.00027922363866170034,
              "max": 1.2507433102081267,
              "p5": 0.003478092322077301,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00674258083502073,
              "median": 0.00027572576081325213,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.012173435180465762,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2213082242798907e-05,
              "median": 1.369656521284005e-07,
              "min": 0.0,
              "max": 0.0009417815230654576,
              "p5": 0.0,
              "p95": 3.099002869718706e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 494.8480215827338,
              "median": 7.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2897.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34198064955983554,
              "median": 0.18550911458284824,
              "min": 0.13678400425751017,
              "max": 1.3975478017204908,
              "p5": 0.15232534309725904,
              "p95": 1.000911188868969,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10855029.036364077,
              "median": 700981.75,
              "min": 0.0,
              "max": 73705554.0,
              "p5": 4140.5,
              "p95": 51579123.099999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038241058093361355,
              "median": 0.00836315787133983,
              "min": 0.004326172685959701,
              "max": 0.15384615384615383,
              "p5": 0.004392652499715104,
              "p95": 0.13808487486398255,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025567739276950133,
              "median": 0.001162698656913667,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 0.00012090239922811311,
              "p95": 0.007893634337667082,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.084482375139076e-07,
              "median": 6.595460403211004e-09,
              "min": 0.0,
              "max": 4.815115237432181e-06,
              "p5": 3.163899592968386e-11,
              "p95": 3.140871409089703e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1237.375,
              "median": 457.0,
              "min": 0.0,
              "max": 6075.0,
              "p5": 6.65,
              "p95": 4655.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1095383.5,
              "median": 1095383.5,
              "min": 1095383.5,
              "max": 1095383.5,
              "p5": 1095383.5,
              "p95": 1095383.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 840.0,
              "median": 840.0,
              "min": 840.0,
              "max": 840.0,
              "p5": 840.0,
              "p95": 840.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.18395047770879297,
              "median": 0.18395047770879297,
              "min": 0.18395047770879297,
              "max": 0.18395047770879297,
              "p5": 0.18395047770879297,
              "p95": 0.18395047770879297,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007575527092397097,
              "median": 0.007575527092397097,
              "min": 0.007575527092397097,
              "max": 0.007575527092397097,
              "p5": 0.007575527092397097,
              "p95": 0.007575527092397097,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0038948393378773,
              "median": 1.0038948393378773,
              "min": 1.0038948393378773,
              "max": 1.0038948393378773,
              "p5": 1.0038948393378773,
              "p95": 1.0038948393378773,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.1955971199717675e-09,
              "median": 6.1955971199717675e-09,
              "min": 6.1955971199717675e-09,
              "max": 6.1955971199717675e-09,
              "p5": 6.1955971199717675e-09,
              "p95": 6.1955971199717675e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013235162992662752,
              "median": 0.0013235162992662752,
              "min": 0.0013235162992662752,
              "max": 0.0013235162992662752,
              "p5": 0.0013235162992662752,
              "p95": 0.0013235162992662752,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.022058823529411464,
            "market": 0.02153049590022449,
            "sector": -0.017405175048137878,
            "peers": -0.08391608391608363,
            "vs_market": -0.04358931942963595,
            "vs_sector": -0.004653648481273587,
            "vs_peers": 0.061857260386672164
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 84.89208633093526,
          "score_pca_percentile": 84.89208633093526,
          "rank_pca": 85,
          "total": 556,
          "adv_notional_sgd": 557574.0,
          "adv_volume_shares": 839050.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018357513883585043,
          "votes": 339.0,
          "trades": 339.0,
          "spread_pct": 0.007475100679609264,
          "spread_ticks": 1.0,
          "amihud": 5.1837373519774846e-09,
          "volatility": 0.1413102731181412
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.576709025413273,
          "loadings": {
            "log_adv": 0.504243903670228,
            "log_trades": 0.4485557302629679,
            "log_turnover": 0.4584815352957995,
            "neg_spread": 0.4324352196290615,
            "neg_amihud": 0.26191143472195855,
            "neg_vol": 0.2805934878765415
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 1,
          "peer_median_adv": 1095909.5,
          "peer_median_score_pca": 86.6906474820144,
          "peer_median_trades": 761.5,
          "peer_median_volatility": 0.16353574904680912,
          "peer_median_spread_pct": 0.007009767153351011,
          "peer_median_spread_ticks": 1.0032629993208255,
          "peer_median_amihud": 5.261278976490837e-09,
          "peer_median_turnover_ratio": 0.001194814664261644,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -49.1,
            "trades_delta_pct": -55.48,
            "volatility_delta_pct": 13.59,
            "spread_pct_delta_pct": -6.64,
            "spread_ticks_delta_pct": -0.33,
            "amihud_delta_pct": 1.47,
            "turnover_ratio_delta_pct": 53.64
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.89208633093526,
            "rank_pca": 85,
            "adv": 557574.0,
            "trades": 339.0,
            "volatility": 0.1413102731181412,
            "spread_pct": 0.007475100679609264,
            "spread_ticks": 1.0,
            "amihud": 5.1837373519774846e-09,
            "turnover_ratio": 0.0018357513883585043,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.6906474820144,
            "rank_pca": 75,
            "adv": 1095909.5,
            "trades": 761.5,
            "volatility": 0.16353574904680912,
            "spread_pct": 0.007009767153351011,
            "spread_ticks": 1.0032629993208255,
            "amihud": 5.261278976490837e-09,
            "turnover_ratio": 0.001194814664261644,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6863554659070096,
              "median": 0.46285158593346976,
              "min": 0.0,
              "max": 6.985699678629192,
              "p5": 0.1524366967557414,
              "p95": 1.9785922502983695,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2737061.6077535353,
              "median": 12297.875,
              "min": 0.0,
              "max": 256049087.60000002,
              "p5": 0.0,
              "p95": 11304355.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09515256960530237,
              "median": 0.028970455171328503,
              "min": 0.00027368816798512355,
              "max": 1.267605633802817,
              "p5": 0.0036517381121876,
              "p95": 0.46369110012145015,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003706048943462198,
              "median": 0.0002830022829228159,
              "min": 0.0,
              "max": 1.0464043240392855,
              "p5": 0.0,
              "p95": 0.007939335615894964,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.99366644669764e-06,
              "median": 1.6187768924875873e-07,
              "min": 0.0,
              "max": 0.0005977932482434035,
              "p5": 0.0,
              "p95": 3.4523904196909e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 402.29226618705036,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2323.875,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3595877154125664,
              "median": 0.16526352520917303,
              "min": 0.11703235286874618,
              "max": 1.3986942345635998,
              "p5": 0.12552962495603442,
              "p95": 1.1049105166631734,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8780256.788883785,
              "median": 631616.375,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 13601.42,
              "p95": 40931737.34999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03568773058681241,
              "median": 0.00814867274319385,
              "min": 0.004274986168547341,
              "max": 0.13333333333333333,
              "p5": 0.0043451830476433344,
              "p95": 0.1252365607897294,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002333348405494164,
              "median": 0.0013197620314469513,
              "min": 0.0,
              "max": 0.006862744480837043,
              "p5": 8.425181919700861e-05,
              "p95": 0.006622693209412399,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.972003783933654e-07,
              "median": 5.222508164234161e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.229281837465633e-11,
              "p95": 4.125222974452113e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1128.4375,
              "median": 383.25,
              "min": 0.0,
              "max": 5573.5,
              "p5": 8.575000000000001,
              "p95": 4276.399999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1095909.5,
              "median": 1095909.5,
              "min": 1095909.5,
              "max": 1095909.5,
              "p5": 1095909.5,
              "p95": 1095909.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 761.5,
              "median": 761.5,
              "min": 761.5,
              "max": 761.5,
              "p5": 761.5,
              "p95": 761.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16353574904680912,
              "median": 0.16353574904680912,
              "min": 0.16353574904680912,
              "max": 0.16353574904680912,
              "p5": 0.16353574904680912,
              "p95": 0.16353574904680912,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007009767153351011,
              "median": 0.007009767153351011,
              "min": 0.007009767153351011,
              "max": 0.007009767153351011,
              "p5": 0.007009767153351011,
              "p95": 0.007009767153351011,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0032629993208255,
              "median": 1.0032629993208255,
              "min": 1.0032629993208255,
              "max": 1.0032629993208255,
              "p5": 1.0032629993208255,
              "p95": 1.0032629993208255,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.261278976490837e-09,
              "median": 5.261278976490837e-09,
              "min": 5.261278976490837e-09,
              "max": 5.261278976490837e-09,
              "p5": 5.261278976490837e-09,
              "p95": 5.261278976490837e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001194814664261644,
              "median": 0.001194814664261644,
              "min": 0.001194814664261644,
              "max": 0.001194814664261644,
              "p5": 0.001194814664261644,
              "p95": 0.001194814664261644,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.022058823529411242,
            "market": 0.11033573226016413,
            "sector": -0.018980455508172178,
            "peers": -0.18124999999999958,
            "vs_market": -0.13239455578957537,
            "vs_sector": -0.003078368021239064,
            "vs_peers": 0.15919117647058834
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is a little softer, with average volume down 31.8% from the 1M average, so immediate access looks thinner than the monthly picture.",
        "market_comparison": "Price was flat on the day while peers were down 1.5%, which matters because steadier price action can help keep trading conditions orderly even as activity drops."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with a 1M liquidity score of 81.1 compared with a peer median of 83.5, so access is broadly workable but not leading the group.",
        "market_comparison": "The stock was flat over 1M while peers fell 3.7%, which matters because relative resilience has not translated into stronger peer-relative liquidity."
      },
      "3m": {
        "liquidity": "Over 3M, tradability remains middle of the pack, with a liquidity score of 83.6 compared with a peer median of 86.0, pointing to consistent but not standout access.",
        "market_comparison": "The stock fell 2.2% over 3M while peers fell 8.4%, which matters because better relative performance has not been enough to lift liquidity above the peer group."
      },
      "6m": {
        "liquidity": "Over 6M, tradability is broadly stable but still slightly behind peers, with a liquidity score of 84.9 compared with a peer median of 86.7.",
        "market_comparison": "The stock fell 2.2% over 6M while peers fell 18.1%, which matters because stronger relative returns have not produced clearly stronger structural liquidity."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 4,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999999999497395,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.4889771485775749,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "48.9%",
          "display_range": null,
          "display_text": "48.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 48.9,
          "plain_english": "Market explains about 48.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.31906062774290583,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "31.9%",
          "display_range": null,
          "display_text": "31.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 31.9,
          "plain_english": "Sector explains about 31.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.19196222367951937,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.2%",
          "display_range": null,
          "display_text": "19.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.2,
          "plain_english": "Company-specific explains about 19.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.05285223374062873,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.05",
          "display_range": null,
          "display_text": "0.05",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.05% stock move in the same direction in this state.",
          "value_num": 0.05
        },
        "beta_stock_lag": {
          "median": 0.363458643704552,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.36",
          "display_range": null,
          "display_text": "0.36",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.36
        },
        "beta_sector": {
          "median": 0.6148849335327823,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.61",
          "display_range": null,
          "display_text": "0.61",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.61% stock move in the same direction in this state.",
          "value_num": 0.61
        },
        "beta_market_lag": {
          "median": 0.8390877631685395,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.84",
          "display_range": null,
          "display_text": "0.84",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.84
        },
        "beta_sector_lag": {
          "median": -0.220103611086094,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.22",
          "display_range": null,
          "display_text": "-0.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.22
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-26 to 2025-05-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5129679859828115,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.3%",
            "display_range": null,
            "display_text": "51.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 51.3,
            "plain_english": "Market explains about 51.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5129679859828115,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Market explains about 51.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1153946998422084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.5%",
              "display_range": null,
              "display_text": "11.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 11.5,
              "plain_english": "Sector explains about 11.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3716373141749802,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.2%",
              "display_range": null,
              "display_text": "37.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 37.2,
              "plain_english": "Company-specific explains about 37.2% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven, though based on only 5 trading days."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.623404724325774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "62.3%",
            "display_range": null,
            "display_text": "62.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 62.3,
            "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19863657260917883,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1779587030650471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6156446349712699,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.6%",
            "display_range": null,
            "display_text": "61.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 61.6,
            "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15572514972889706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22863021529983313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.9%",
              "display_range": null,
              "display_text": "22.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 22.9,
              "plain_english": "Sector explains about 22.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6156446349712699,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Still clearly company-driven."
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
            "median": 0.4539874874240682,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3380759283078133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Market explains about 33.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20793658426811856,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.8%",
              "display_range": null,
              "display_text": "20.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.8,
              "plain_english": "Sector explains about 20.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4539874874240682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "median": 0.47594380520699603,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3064722257863164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21758396900668758,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.8%",
              "display_range": null,
              "display_text": "21.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.8,
              "plain_english": "Sector explains about 21.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4828150565478932,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.3%",
            "display_range": null,
            "display_text": "48.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.3,
            "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3142352514374536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.4%",
              "display_range": null,
              "display_text": "31.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.4,
              "plain_english": "Market explains about 31.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2029496920146531,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.3%",
              "display_range": null,
              "display_text": "20.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.3,
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4828150565478932,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4219146512462774,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Market explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4219146512462774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2775902288822491,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3004951198714734,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7687417314818247,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.9%",
            "display_range": null,
            "display_text": "76.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 76.9,
            "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12378967681730305,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Market explains about 12.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1074685917008723,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.7%",
              "display_range": null,
              "display_text": "10.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.7,
              "plain_english": "Sector explains about 10.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7687417314818247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            }
          },
          "summary": "Dec: Still clearly company-driven."
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
            "median": 0.634478433420432,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20419511848433777,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16132644809523028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.1%",
              "display_range": null,
              "display_text": "16.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.1,
              "plain_english": "Sector explains about 16.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.634478433420432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
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
            "median": 0.8241639016384482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.4%",
            "display_range": null,
            "display_text": "82.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 82.4,
            "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12970195459975553,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Market explains about 13.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04613414376179617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Sector explains about 4.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
            "median": 0.4594963935612947,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.9%",
            "display_range": null,
            "display_text": "45.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 45.9,
            "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23035600504921894,
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
              "median": 0.31014760138948644,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4594963935612947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47906534683171254,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2381469594055639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.8%",
              "display_range": null,
              "display_text": "23.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 23.8,
              "plain_english": "Market explains about 23.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28278769376272356,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Sector explains about 28.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47906534683171254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
            "median": 0.7715688311066202,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "77.2%",
            "display_range": null,
            "display_text": "77.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 77.2,
            "plain_english": "Company-specific explains about 77.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15682718393935755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Market explains about 15.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07160398495402222,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.2%",
              "display_range": null,
              "display_text": "7.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 7.2,
              "plain_english": "Sector explains about 7.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7715688311066202,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "77.2%",
              "display_range": null,
              "display_text": "77.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 77.2,
              "plain_english": "Company-specific explains about 77.2% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.3426293304051132,
          "expected_duration_days": 1.9336815569018826,
          "current_probability": 0.9999999999497395,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.9999619316834,
          "volatility": {
            "median": 2.8053662635532255e-128,
            "low": 2.8053662635532255e-128,
            "high": 2.8053662635532255e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.09947578475808584,
          "jump_rate": 0.0,
          "risk_score": 0.023218327415103764,
          "metrics": {
            "rolling_vol_10d": 0.006483447296148525,
            "downside_vol_10d": 0.003460667980737838,
            "drawdown_21d": 0.009212587491136362,
            "amihud_stress": 2.4843890123758705e-252,
            "spread_rel": 75.90856632635146,
            "spread_ticks": 1.017166672943041,
            "log_notional": 13.077014172624436,
            "log_trade_count": 5.711344346407883
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.34254874082846054,
          "expected_duration_days": 1.753956917316913,
          "current_probability": 1.4690660210801078e-218,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.9797339479436,
          "volatility": {
            "median": 0.007428131891912003,
            "low": 0.007428131891912003,
            "high": 0.007428131891912003
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22259234944363473,
          "jump_rate": 2.7266166067135828e-176,
          "risk_score": 0.15852968220735328,
          "metrics": {
            "rolling_vol_10d": 0.006709471624359278,
            "downside_vol_10d": 0.0036456409270428356,
            "drawdown_21d": 0.009962992789511734,
            "amihud_stress": 0.9026673038416408,
            "spread_rel": 74.63829295387936,
            "spread_ticks": 1.0039431607107088,
            "log_notional": 13.235596801640217,
            "log_trade_count": 5.826699659156886
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1474912514755897,
          "expected_duration_days": 1.475605055357944,
          "current_probability": 5.026037020156652e-11,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 37.02030412037301,
          "volatility": {
            "median": 0.012212605173495945,
            "low": 0.012212605173495945,
            "high": 0.012212605173495945
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.31951570908111926,
          "jump_rate": 0.10804881523916815,
          "risk_score": 0.5281984108685643,
          "metrics": {
            "rolling_vol_10d": 0.008524178423592089,
            "downside_vol_10d": 0.004533114540628917,
            "drawdown_21d": 0.00764479531677359,
            "amihud_stress": 0.9350812264151062,
            "spread_rel": 77.79626937801058,
            "spread_ticks": 1.0528612817450065,
            "log_notional": 13.647249430099333,
            "log_trade_count": 5.792197351035468
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 2.734003986738655e-29,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.1930560501577919,
          "jump_rate": 0.04761904761904764,
          "risk_score": 0.7730149750289356,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193381,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.48285176717401906,
            0.4100195814990318,
            0.10701119766854653,
            0.00011745365840259782
          ],
          [
            0.3729773287478795,
            0.4298605683372578,
            0.18651844632922726,
            0.010643656585635375
          ],
          [
            0.34712568650625697,
            0.3008706918607382,
            0.3223118907264616,
            0.02969173090654319
          ],
          [
            0.0002373042240151878,
            0.04769728769127461,
            0.00023816555979327503,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            41.0,
            35.0,
            9.0,
            0.0
          ],
          [
            32.0,
            37.0,
            16.0,
            1.0
          ],
          [
            13.0,
            11.0,
            12.0,
            1.0
          ],
          [
            0.0,
            2.0,
            0.0,
            40.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999999999497395,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.4690660210801078e-218,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 5.026037020156652e-11,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 2.734003986738655e-29,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.09947578476914512,
        "current_score": 0.4979637542805046,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11046.718874086451,
        "loglik": -4995.67868135614,
        "n_params": 191,
        "bic_delta_vs_next_best": 520.1144780003688,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13398.05295154865,
            "loglik": -6447.6183670438295,
            "n_params": 91,
            "converged": true,
            "iterations": 9,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11566.83335208682,
            "loglik": -5396.634970304185,
            "n_params": 140,
            "converged": true,
            "iterations": 18,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.83335208682,
                "loglik": -5396.634970304185,
                "n_params": 140,
                "converged": true,
                "iterations": 18
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.833352168247,
                "loglik": -5396.634970344899,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.83335217605,
                "loglik": -5396.6349703488,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11046.718874086451,
            "loglik": -4995.67868135614,
            "n_params": 191,
            "converged": true,
            "iterations": 23,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.718874086451,
                "loglik": -4995.67868135614,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.718875557584,
                "loglik": -4995.678682091707,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.7188795602,
                "loglik": -4995.678684093014,
                "n_params": 191,
                "converged": true,
                "iterations": 24
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
              "bic": 11046.718874086451,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11046.718875557584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11046.7188795602,
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
                "2": 6408.56088310944,
                "3": 6199.6956599112045,
                "4": 5877.663820210153
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
                "2": 10326.922606715927,
                "3": 9977.107426138691,
                "4": 8835.592984371558
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13398.05295154865,
                "3": 11566.83335208682,
                "4": 11046.718895602417
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 520.1144780003688,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 520.11 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 37.02030412037301,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.9999619316834,
              "pct_time": 0.3426293304051132,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 85.9797339479436,
              "pct_time": 0.34254874082846054,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 37.02030412037301,
              "pct_time": 0.1474912514755897,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.0,
              "pct_time": 0.16733067729083664,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.48285176717401906,
            0.4298605683372578,
            0.3223118907264616,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.9336815569018826,
            1.753956917316913,
            1.475605055357944,
            20.758620689655157
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            0,
            1,
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
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
              "bic": 11046.718874086451,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11046.718875557584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11046.7188795602,
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
                "2": 6408.56088310944,
                "3": 6199.6956599112045,
                "4": 5877.663820210153
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
                "2": 10326.922606715927,
                "3": 9977.107426138691,
                "4": 8835.592984371558
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13398.05295154865,
                "3": 11566.83335208682,
                "4": 11046.718895602417
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
            "risk_score": 0.023218327415103764,
            "jump_probability": 0.09947578475808584,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006483447296148525,
            "downside_vol_10d": 0.003460667980737838,
            "drawdown_21d": 0.009212587491136362,
            "amihud_stress": 2.4843890123758705e-252,
            "spread_rel": 75.90856632635146,
            "spread_ticks": 1.017166672943041,
            "log_notional": 13.077014172624436,
            "log_trade_count": 5.711344346407883
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.15852968220735328,
            "jump_probability": 0.22259234944363473,
            "jump_rate": 2.7266166067135828e-176,
            "rolling_vol_10d": 0.006709471624359278,
            "downside_vol_10d": 0.0036456409270428356,
            "drawdown_21d": 0.009962992789511734,
            "amihud_stress": 0.9026673038416408,
            "spread_rel": 74.63829295387936,
            "spread_ticks": 1.0039431607107088,
            "log_notional": 13.235596801640217,
            "log_trade_count": 5.826699659156886
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5281984108685643,
            "jump_probability": 0.31951570908111926,
            "jump_rate": 0.10804881523916815,
            "rolling_vol_10d": 0.008524178423592089,
            "downside_vol_10d": 0.004533114540628917,
            "drawdown_21d": 0.00764479531677359,
            "amihud_stress": 0.9350812264151062,
            "spread_rel": 77.79626937801058,
            "spread_ticks": 1.0528612817450065,
            "log_notional": 13.647249430099333,
            "log_trade_count": 5.792197351035468
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7730149750289356,
            "jump_probability": 0.1930560501577919,
            "jump_rate": 0.04761904761904764,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193381,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
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
            0.0,
            2.9146537821129742e-05,
            0.999970853462179,
            1.1577897381733946e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            2.0400663521429628e-05,
            0.9999795993364786,
            7.30334432681877e-21
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999951857901778,
            4.814209822247185e-06,
            5.510807254798624e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999931271957232,
            6.872804276895588e-06,
            4.969077485592938e-25
          ],
          "jump_probability": 0.16852883745253636,
          "jump_score": 0.8620958787052361
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9994701599450261,
            0.0005298400549738956,
            9.347197539273955e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9992431801425057,
            0.000756819857494285,
            8.422046148451389e-23
          ],
          "jump_probability": 0.15634710017128678,
          "jump_score": 0.784206419842037
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999978777140089,
            2.1222859911010816e-06,
            9.05365154234886e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999969678898891,
            3.032110110896707e-06,
            8.159461976235524e-26
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999901752576845,
            9.824742315488857e-06,
            1.1293132053157818e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999985963386885,
            1.4036613115010196e-05,
            1.017770098845533e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999925801076637,
            7.419892336308436e-06,
            2.421064978127027e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999893992086464,
            1.0600791353588006e-05,
            2.1819399672891997e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999911285329511,
            8.871467048774943e-06,
            2.6188472750463713e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999948661576477,
            5.133842352330376e-06,
            2.050947882841574e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            6.367151901561448e-32,
            1.0,
            1.1766136456028263e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            5.925834675691292e-32,
            1.0,
            1.721135899521484e-23
          ],
          "jump_probability": 0.170194372304884,
          "jump_score": 0.8723910091637973
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999872307661,
            8.992582845474963e-218,
            1.2769233856174851e-08,
            8.868574706417882e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999822379981,
            1.164168479360682e-217,
            1.7762001893887803e-08,
            1.804522007537392e-26
          ],
          "jump_probability": 0.1433014434087858,
          "jump_score": 0.6950993854770154
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999497395,
            1.4690660210801078e-218,
            5.026037020156652e-11,
            2.734003986738655e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999497395,
            1.4690660210801078e-218,
            5.026037020156652e-11,
            2.734003986738655e-29
          ],
          "jump_probability": 0.11765342623564745,
          "jump_score": 0.4979637542805046
        }
      ],
      "methodology": {
        "estimation_window_days": 251,
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
        "market_link_display": "0.05",
        "sector_link_display": "0.61",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.05% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.36",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 48.9,
        "driver_share_display": "48.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 9.9,
        "jump_risk_score": 0.5,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.48285176717401906,
        "effective_days": 86.0,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.9 days.",
        "expected_duration_days": 1.9
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
          "pct_time": 0.3426293304051132,
          "expected_duration_days": 1.9336815569018826,
          "current_probability": 0.9999999999497395,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.9999619316834,
          "volatility": {
            "median": 2.8053662635532255e-128,
            "low": 2.8053662635532255e-128,
            "high": 2.8053662635532255e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.09947578475808584,
          "jump_rate": 0.0,
          "risk_score": 0.023218327415103764,
          "metrics": {
            "rolling_vol_10d": 0.006483447296148525,
            "downside_vol_10d": 0.003460667980737838,
            "drawdown_21d": 0.009212587491136362,
            "amihud_stress": 2.4843890123758705e-252,
            "spread_rel": 75.90856632635146,
            "spread_ticks": 1.017166672943041,
            "log_notional": 13.077014172624436,
            "log_trade_count": 5.711344346407883
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.34254874082846054,
          "expected_duration_days": 1.753956917316913,
          "current_probability": 1.4690660210801078e-218,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.9797339479436,
          "volatility": {
            "median": 0.007428131891912003,
            "low": 0.007428131891912003,
            "high": 0.007428131891912003
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22259234944363473,
          "jump_rate": 2.7266166067135828e-176,
          "risk_score": 0.15852968220735328,
          "metrics": {
            "rolling_vol_10d": 0.006709471624359278,
            "downside_vol_10d": 0.0036456409270428356,
            "drawdown_21d": 0.009962992789511734,
            "amihud_stress": 0.9026673038416408,
            "spread_rel": 74.63829295387936,
            "spread_ticks": 1.0039431607107088,
            "log_notional": 13.235596801640217,
            "log_trade_count": 5.826699659156886
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1474912514755897,
          "expected_duration_days": 1.475605055357944,
          "current_probability": 5.026037020156652e-11,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 37.02030412037301,
          "volatility": {
            "median": 0.012212605173495945,
            "low": 0.012212605173495945,
            "high": 0.012212605173495945
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.31951570908111926,
          "jump_rate": 0.10804881523916815,
          "risk_score": 0.5281984108685643,
          "metrics": {
            "rolling_vol_10d": 0.008524178423592089,
            "downside_vol_10d": 0.004533114540628917,
            "drawdown_21d": 0.00764479531677359,
            "amihud_stress": 0.9350812264151062,
            "spread_rel": 77.79626937801058,
            "spread_ticks": 1.0528612817450065,
            "log_notional": 13.647249430099333,
            "log_trade_count": 5.792197351035468
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 2.734003986738655e-29,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.1930560501577919,
          "jump_rate": 0.04761904761904764,
          "risk_score": 0.7730149750289356,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193381,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": [
        [
          0.48285176717401906,
          0.4100195814990318,
          0.10701119766854653,
          0.00011745365840259782
        ],
        [
          0.3729773287478795,
          0.4298605683372578,
          0.18651844632922726,
          0.010643656585635375
        ],
        [
          0.34712568650625697,
          0.3008706918607382,
          0.3223118907264616,
          0.02969173090654319
        ],
        [
          0.0002373042240151878,
          0.04769728769127461,
          0.00023816555979327503,
          0.9518272425249169
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.48285176717401906,
            0.4100195814990318,
            0.10701119766854653,
            0.00011745365840259782
          ],
          [
            0.3729773287478795,
            0.4298605683372578,
            0.18651844632922726,
            0.010643656585635375
          ],
          [
            0.34712568650625697,
            0.3008706918607382,
            0.3223118907264616,
            0.02969173090654319
          ],
          [
            0.0002373042240151878,
            0.04769728769127461,
            0.00023816555979327503,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            41.0,
            35.0,
            9.0,
            0.0
          ],
          [
            32.0,
            37.0,
            16.0,
            1.0
          ],
          [
            13.0,
            11.0,
            12.0,
            1.0
          ],
          [
            0.0,
            2.0,
            0.0,
            40.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9999999999497395,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999999999497395,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.4690660210801078e-218,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 5.026037020156652e-11,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 2.734003986738655e-29,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.09947578476914512,
        "current_score": 0.4979637542805046,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11046.718874086451,
        "loglik": -4995.67868135614,
        "n_params": 191,
        "bic_delta_vs_next_best": 520.1144780003688,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13398.05295154865,
            "loglik": -6447.6183670438295,
            "n_params": 91,
            "converged": true,
            "iterations": 9,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13398.05295154865,
                "loglik": -6447.6183670438295,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11566.83335208682,
            "loglik": -5396.634970304185,
            "n_params": 140,
            "converged": true,
            "iterations": 18,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.83335208682,
                "loglik": -5396.634970304185,
                "n_params": 140,
                "converged": true,
                "iterations": 18
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.833352168247,
                "loglik": -5396.634970344899,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.83335217605,
                "loglik": -5396.6349703488,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11046.718874086451,
            "loglik": -4995.67868135614,
            "n_params": 191,
            "converged": true,
            "iterations": 23,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.718874086451,
                "loglik": -4995.67868135614,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.718875557584,
                "loglik": -4995.678682091707,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11046.7188795602,
                "loglik": -4995.678684093014,
                "n_params": 191,
                "converged": true,
                "iterations": 24
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
              "bic": 11046.718874086451,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11046.718875557584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11046.7188795602,
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
                "2": 6408.56088310944,
                "3": 6199.6956599112045,
                "4": 5877.663820210153
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
                "2": 10326.922606715927,
                "3": 9977.107426138691,
                "4": 8835.592984371558
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13398.05295154865,
                "3": 11566.83335208682,
                "4": 11046.718895602417
              },
              "valid": true
            }
          ],
          "stable": true
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 520.1144780003688,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 520.11 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 37.02030412037301,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.9999619316834,
              "pct_time": 0.3426293304051132,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 85.9797339479436,
              "pct_time": 0.34254874082846054,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 37.02030412037301,
              "pct_time": 0.1474912514755897,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.0,
              "pct_time": 0.16733067729083664,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.48285176717401906,
            0.4298605683372578,
            0.3223118907264616,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.9336815569018826,
            1.753956917316913,
            1.475605055357944,
            20.758620689655157
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            0,
            1,
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
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
              "bic": 11046.718874086451,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11046.718875557584,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11046.7188795602,
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
                "2": 6408.56088310944,
                "3": 6199.6956599112045,
                "4": 5877.663820210153
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
                "2": 10326.922606715927,
                "3": 9977.107426138691,
                "4": 8835.592984371558
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 13398.05295154865,
                "3": 11566.83335208682,
                "4": 11046.718895602417
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
            "risk_score": 0.023218327415103764,
            "jump_probability": 0.09947578475808584,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006483447296148525,
            "downside_vol_10d": 0.003460667980737838,
            "drawdown_21d": 0.009212587491136362,
            "amihud_stress": 2.4843890123758705e-252,
            "spread_rel": 75.90856632635146,
            "spread_ticks": 1.017166672943041,
            "log_notional": 13.077014172624436,
            "log_trade_count": 5.711344346407883
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.15852968220735328,
            "jump_probability": 0.22259234944363473,
            "jump_rate": 2.7266166067135828e-176,
            "rolling_vol_10d": 0.006709471624359278,
            "downside_vol_10d": 0.0036456409270428356,
            "drawdown_21d": 0.009962992789511734,
            "amihud_stress": 0.9026673038416408,
            "spread_rel": 74.63829295387936,
            "spread_ticks": 1.0039431607107088,
            "log_notional": 13.235596801640217,
            "log_trade_count": 5.826699659156886
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5281984108685643,
            "jump_probability": 0.31951570908111926,
            "jump_rate": 0.10804881523916815,
            "rolling_vol_10d": 0.008524178423592089,
            "downside_vol_10d": 0.004533114540628917,
            "drawdown_21d": 0.00764479531677359,
            "amihud_stress": 0.9350812264151062,
            "spread_rel": 77.79626937801058,
            "spread_ticks": 1.0528612817450065,
            "log_notional": 13.647249430099333,
            "log_trade_count": 5.792197351035468
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7730149750289356,
            "jump_probability": 0.1930560501577919,
            "jump_rate": 0.04761904761904764,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193381,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.655842671770918,
            "log_trade_count": 6.1565920914484265
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
            0.0,
            2.9146537821129742e-05,
            0.999970853462179,
            1.1577897381733946e-21
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            2.0400663521429628e-05,
            0.9999795993364786,
            7.30334432681877e-21
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999951857901778,
            4.814209822247185e-06,
            5.510807254798624e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999931271957232,
            6.872804276895588e-06,
            4.969077485592938e-25
          ],
          "jump_probability": 0.16852883745253636,
          "jump_score": 0.8620958787052361
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9994701599450261,
            0.0005298400549738956,
            9.347197539273955e-24
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9992431801425057,
            0.000756819857494285,
            8.422046148451389e-23
          ],
          "jump_probability": 0.15634710017128678,
          "jump_score": 0.784206419842037
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999978777140089,
            2.1222859911010816e-06,
            9.05365154234886e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999969678898891,
            3.032110110896707e-06,
            8.159461976235524e-26
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999901752576845,
            9.824742315488857e-06,
            1.1293132053157818e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999985963386885,
            1.4036613115010196e-05,
            1.017770098845533e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999925801076637,
            7.419892336308436e-06,
            2.421064978127027e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999893992086464,
            1.0600791353588006e-05,
            2.1819399672891997e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999911285329511,
            8.871467048774943e-06,
            2.6188472750463713e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999948661576477,
            5.133842352330376e-06,
            2.050947882841574e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            6.367151901561448e-32,
            1.0,
            1.1766136456028263e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            5.925834675691292e-32,
            1.0,
            1.721135899521484e-23
          ],
          "jump_probability": 0.170194372304884,
          "jump_score": 0.8723910091637973
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999872307661,
            8.992582845474963e-218,
            1.2769233856174851e-08,
            8.868574706417882e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999822379981,
            1.164168479360682e-217,
            1.7762001893887803e-08,
            1.804522007537392e-26
          ],
          "jump_probability": 0.1433014434087858,
          "jump_score": 0.6950993854770154
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999497395,
            1.4690660210801078e-218,
            5.026037020156652e-11,
            2.734003986738655e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999497395,
            1.4690660210801078e-218,
            5.026037020156652e-11,
            2.734003986738655e-29
          ],
          "jump_probability": 0.11765342623564745,
          "jump_score": 0.4979637542805046
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 84.9 — Strong",
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
        "text": "Execution: balanced",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "short": {
        "text": "Moderate short interest",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity looks mixed for the stock’s size, with the 6M score just below peers and today’s average volume below the recent average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is mixed, with the stock flat over 1M, ahead of peers but behind the market.",
    "perf_insight": "That relative performance sits alongside a mixed liquidity backdrop, with a 6M liquidity score 1.8 points below the peer median while market factors account for 48.9% of trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main influence now, accounting for 48.9% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 48.9% of price changes. Other influences are sector 31.9%, and company-specific 19.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 48.9%, sector 31.9%, and company-specific 19.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 48.9%, sector 31.9%, and company-specific 19.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because trading is being shaped more by the wider tape than by company-specific momentum, while recent average volume is lighter than the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Market moves are the main driver now, accounting for 48.9% of recent price action.",
      "The monthly pattern was still clearly company-driven through May, so the current mix looks more balanced than it did earlier in the spring."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look orderly rather than stretched, with a balanced book and a 1 tick spread.",
    "regime_badge_text": "Calm / Liquid",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 20, 2025 to May 20, 2026 (255 trading days • 101,818 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The screen looks balanced, with displayed bid depth at 0.91x of ask depth and a 1 tick spread. That supports a stable execution picture even with only mixed peer-relative liquidity.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced through the session, with no sign of immediate stress in the book.",
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
    "intraday_insight": "Immediate execution conditions look orderly, with a 1 tick spread and displayed bid depth close to ask depth at 0.91x. That supports day-to-day access even as recent average volume sits below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Trading conditions look balanced rather than pressured.",
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
    "exec_subtitle": "Trading access is serviceable for its size, with peer standing slightly below median and recent flow lighter.",
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
        "value": "84.9/100",
        "sub": "Peer median 86.7 (-1.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$557.6K",
        "sub": "Peer median S$1.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "sub": "1.00 ticks; peers 0.70%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is serviceable rather than standout, with a 6M score of 84.9 compared with a peer median of 86.7. Recent activity is lighter, with 1D average volume down 31.8% from the 1M average. Even so, the book remains orderly with a 1 tick spread and displayed bid depth at 0.91x of ask depth, which supports day-to-day access.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.667",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.75%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.91x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.37% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.78% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.61% with 89.5% fill.",
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
        "value": "85",
        "suffix": "/100",
        "bar_pct": 85,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 85/556",
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
        "value": "0.75",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.75% • 1.00 ticks vs peers 0.70%",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "557.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$1.1M",
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
        "value": "48.9",
        "suffix": "market",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 31.9% • Company 19.2%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for its size, with a 6M score of 84.9 compared with a peer median of 86.7. That leaves access broadly in line with peers rather than clearly stronger.",
      "Recent activity is lighter, with 1D average volume 31.8% below the 1M average. That points to less flow today even though the broader liquidity picture remains mixed rather than stressed.",
      "Execution conditions look balanced, with a 1 tick spread and displayed bid depth at 0.91x of ask depth. Market factors also account for 48.9% of trading, so the near-term tape is being shaped as much by the wider market as by stock-specific flow."
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
      "overall": "6M liquidity is strong: score 84.9 vs peer median 86.7 (-1.8 pts). 1D average volume down -31.8% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 84.9 vs peer median 86.7 (-1.8 pts)."
      ],
      "concerns": [
        "1D average volume down -31.8% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 11.0%.",
        "vs_sector": "Worse than sector: -2.2% vs sector -1.9%.",
        "vs_peers": "Better than peers: -2.2% vs peers -18.1%."
      },
      "adv": {
        "insight": "ADV is S$557.6K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$557.6K vs market S$12.3K.",
        "vs_sector": "Worse than sector: S$557.6K vs sector S$631.6K.",
        "vs_peers": "Worse than peers: S$557.6K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.90%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.70%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.18%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.18% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.13%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.13% vs market 46.29%.",
        "vs_sector": "Better than sector: 14.13% vs sector 16.53%.",
        "vs_peers": "Better than peers: 14.13% vs peers 16.35%."
      },
      "trades": {
        "insight": "Trades is 339, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 339 vs market 7.",
        "vs_sector": "Worse than sector: 339 vs sector 383.",
        "vs_peers": "Worse than peers: 339 vs peers 762."
      },
      "amihud": {
        "insight": "Price impact is 5.18e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.18e-09 vs market 1.62e-07.",
        "vs_sector": "In line with sector: 5.18e-09 vs sector 5.22e-09.",
        "vs_peers": "In line with peers: 5.18e-09 vs peers 5.26e-09."
      }
    },
    "performance": {
      "overall": "Returns are mixed, with the stock flat over 1M, better than peers at -3.7% but behind the market at +0.8%, so the recent move reads as relative resilience rather than outright strength. Liquidity only partly supports that picture because the 6M liquidity score of 84.9 sits 1.8 points below the peer median and 1D average volume is 31.8% below the 1M average, which suggests the tape is not being reinforced by stronger trading activity.",
      "conclusion": "The move looks mainly broad-market in character, with mixed liquidity signals rather than a clear company-specific re-rating."
    },
    "drivers": {
      "overall": "Market moves are the main influence on the stock now, with 48.9% of recent price action linked to the broader tape. That matters because day-to-day trading conditions are being shaped more by external sentiment than by company-specific news.",
      "beta": "The current read looks mixed rather than fully established, because 1D average volume is down 31.8% from the 1M average. That makes the recent market-led pattern more likely to reflect a thinner trading backdrop than a decisive shift in the stock's underlying story.",
      "rolling_change": "The monthly picture had been clearly company-driven from March through May, so the current setup marks a move toward a more balanced driver mix. That matters because the stock is now trading less on its own narrative and more in step with the wider market."
    },
    "regime": {
      "overall": "The current backdrop is orderly, with a 1 tick spread and bid depth at 0.91x of ask depth, which supports steady trading conditions in the moment. It matters because that stability sits alongside mixed longer-term liquidity for the stock's size, so the calm tape does not yet look firmly established.",
      "current": "The active state is Calm / Liquid, and the immediate trading picture looks orderly with a 1 tick spread and broadly balanced displayed depth.",
      "transitions": "This state looks changeable rather than durable, with a typical run length of about 1.9 days, and 1D average volume is 31.8% below the 1M average.",
      "trading_implications": "Trading conditions look workable now, but the short-lived nature of the state means today's calm can give way to thinner activity more quickly than a settled regime"
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced at the touch because the spread is 1 tick and bid depth is close to ask depth at 0.91x. That matters because immediate execution conditions appear orderly even with a mixed overall liquidity profile.",
      "concern": "The main watchpoint is a slightly lighter bid side, with bid depth at 0.91x of ask depth. That matters because buy-side support is a little thinner if selling pressure picks up.",
      "peer_context": "The book supports the broader read rather than improving it, as near-touch depth looks orderly while the 6M liquidity score of 84.9 still sits 1.8 points below the peer median of 86.7. The 1D average volume being 31.8% below the 1M average also keeps the picture mixed rather than clearly stronger."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base appears balanced rather than clearly dominated by one group.",
      "retail_heavy": "Retail-like trades account for 37.8% of trade count but only 2.9% of trade value, while institution-like trades are 21.3% of count and 54.0% of value. That split shows frequent smaller tickets alongside a clear share of value coming from larger trades, which keeps the flow picture mixed.",
      "institutional_gap": "Institution-like trades carry more than half of trade value despite representing about a fifth of trade count. That gives the tape a meaningful larger-ticket presence, but not enough to make the overall mix look fully institution-led.",
      "peer_comparison": "The mix does not look unusual for a stock with liquidity that is close to the peer median, with the six-month score at 84.9 compared with a peer median of 86.7. That points to a trading base that is broadly in line with its size cohort."
    },
    "price_moving": {
      "overall": "Price-moving activity is best read as mixed because broader market moves remain the largest current driver at 48.9%. That suggests price formation is being shaped more by the wider tape than by one-sided stock-specific flow. The signal looks reasonably clean because the spread is 1 tick and displayed bid depth is 0.91x ask depth. That combination points to orderly trading conditions even as the underlying flow mix stays balanced.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears material enough to watch, but it is not dominating the trading picture. The short ratio is 5.21%, while the stock was flat over one month compared with peers down 3.7%, which suggests shorts are present without driving a broader dislocation.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is rising sharply, up 45% month on month and 132% year on year. That makes short activity a more relevant part of the tape, even as recent average volume is only 31.8% below the one-month average rather than showing a more severe break in trading conditions.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.9%, continuous 86.5%, and close 8.4%. Current trading concentration score is 0.231.",
      "hhi_interpretation": "A concentration score of 0.231 indicates trading is not heavily concentrated into a narrow part of the day. That supports a steadier intraday liquidity profile.",
      "best_times": "The clearest liquidity window is the continuous session because it captures the large majority of activity. The open and close are smaller parts of the day, so they matter less to the overall flow picture.",
      "peer_ranking": "Intraday trading looks broadly consistent with the stock’s near-peer liquidity standing, with a six-month score of 84.9 compared with a peer median of 86.7. That suggests the session profile is not out of line with comparable names."
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
        "CRPU",
        "AU8U"
      ],
      "scores": [
        84.89208633093526,
        86.6906474820144
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        557574.0,
        1095909.5
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.1413102731181412,
        "adv": 557574.0,
        "spread_pct": 0.007475100679609264,
        "turnover_ratio": 0.0018357513883585043,
        "amihud": 5.1837373519774846e-09,
        "trades": 339.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6863554659070096,
          "median": 0.46285158593346976,
          "min": 0.0,
          "max": 6.985699678629192,
          "p5": 0.1524366967557414,
          "p95": 1.9785922502983695,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2737061.6077535353,
          "median": 12297.875,
          "min": 0.0,
          "max": 256049087.60000002,
          "p5": 0.0,
          "p95": 11304355.5,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09515256960530237,
          "median": 0.028970455171328503,
          "min": 0.00027368816798512355,
          "max": 1.267605633802817,
          "p5": 0.0036517381121876,
          "p95": 0.46369110012145015,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003706048943462198,
          "median": 0.0002830022829228159,
          "min": 0.0,
          "max": 1.0464043240392855,
          "p5": 0.0,
          "p95": 0.007939335615894964,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.99366644669764e-06,
          "median": 1.6187768924875873e-07,
          "min": 0.0,
          "max": 0.0005977932482434035,
          "p5": 0.0,
          "p95": 3.4523904196909e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 402.29226618705036,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2323.875,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3595877154125664,
          "median": 0.16526352520917303,
          "min": 0.11703235286874618,
          "max": 1.3986942345635998,
          "p5": 0.12552962495603442,
          "p95": 1.1049105166631734,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8780256.788883785,
          "median": 631616.375,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 13601.42,
          "p95": 40931737.34999998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03568773058681241,
          "median": 0.00814867274319385,
          "min": 0.004274986168547341,
          "max": 0.13333333333333333,
          "p5": 0.0043451830476433344,
          "p95": 0.1252365607897294,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002333348405494164,
          "median": 0.0013197620314469513,
          "min": 0.0,
          "max": 0.006862744480837043,
          "p5": 8.425181919700861e-05,
          "p95": 0.006622693209412399,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.972003783933654e-07,
          "median": 5.222508164234161e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.229281837465633e-11,
          "p95": 4.125222974452113e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1128.4375,
          "median": 383.25,
          "min": 0.0,
          "max": 5573.5,
          "p5": 8.575000000000001,
          "p95": 4276.399999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1095909.5,
          "median": 1095909.5,
          "min": 1095909.5,
          "max": 1095909.5,
          "p5": 1095909.5,
          "p95": 1095909.5,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 761.5,
          "median": 761.5,
          "min": 761.5,
          "max": 761.5,
          "p5": 761.5,
          "p95": 761.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.16353574904680912,
          "median": 0.16353574904680912,
          "min": 0.16353574904680912,
          "max": 0.16353574904680912,
          "p5": 0.16353574904680912,
          "p95": 0.16353574904680912,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.007009767153351011,
          "median": 0.007009767153351011,
          "min": 0.007009767153351011,
          "max": 0.007009767153351011,
          "p5": 0.007009767153351011,
          "p95": 0.007009767153351011,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0032629993208255,
          "median": 1.0032629993208255,
          "min": 1.0032629993208255,
          "max": 1.0032629993208255,
          "p5": 1.0032629993208255,
          "p95": 1.0032629993208255,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.261278976490837e-09,
          "median": 5.261278976490837e-09,
          "min": 5.261278976490837e-09,
          "max": 5.261278976490837e-09,
          "p5": 5.261278976490837e-09,
          "p95": 5.261278976490837e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001194814664261644,
          "median": 0.001194814664261644,
          "min": 0.001194814664261644,
          "max": 0.001194814664261644,
          "p5": 0.001194814664261644,
          "p95": 0.001194814664261644,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -2.220446049250313e-16,
        "market": 0.008161423294613224,
        "sector": -0.0014352838202824625,
        "peers": -0.03676470588235292
      },
      {
        "horizon": "3M",
        "stock": -0.022058823529411464,
        "market": 0.02153049590022449,
        "sector": -0.017405175048137878,
        "peers": -0.08391608391608363
      },
      {
        "horizon": "6M",
        "stock": -0.022058823529411242,
        "market": 0.11033573226016413,
        "sector": -0.018980455508172178,
        "peers": -0.18124999999999958
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
      "share_market": 0.4889771485775749,
      "share_sector": 0.31906062774290583,
      "share_idio": 0.19196222367951937,
      "beta_market": 0.05285223374062873,
      "beta_sector": 0.6148849335327823,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999999999497395,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.4889771485775749,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.9%",
            "display_range": null,
            "display_text": "48.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 48.9,
            "plain_english": "Market explains about 48.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.31906062774290583,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "31.9%",
            "display_range": null,
            "display_text": "31.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 31.9,
            "plain_english": "Sector explains about 31.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.19196222367951937,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.2%",
            "display_range": null,
            "display_text": "19.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.2,
            "plain_english": "Company-specific explains about 19.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.05285223374062873,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.05",
            "display_range": null,
            "display_text": "0.05",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.05% stock move in the same direction in this state.",
            "value_num": 0.05
          },
          "beta_stock_lag": {
            "median": 0.363458643704552,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.36",
            "display_range": null,
            "display_text": "0.36",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.36
          },
          "beta_sector": {
            "median": 0.6148849335327823,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.61",
            "display_range": null,
            "display_text": "0.61",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.61% stock move in the same direction in this state.",
            "value_num": 0.61
          },
          "beta_market_lag": {
            "median": 0.8390877631685395,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.84",
            "display_range": null,
            "display_text": "0.84",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.84
          },
          "beta_sector_lag": {
            "median": -0.220103611086094,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.22",
            "display_range": null,
            "display_text": "-0.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.22
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-26 to 2025-05-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5129679859828115,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Market explains about 51.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5129679859828115,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.3%",
                "display_range": null,
                "display_text": "51.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 51.3,
                "plain_english": "Market explains about 51.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1153946998422084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.5%",
                "display_range": null,
                "display_text": "11.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 11.5,
                "plain_english": "Sector explains about 11.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3716373141749802,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.2%",
                "display_range": null,
                "display_text": "37.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 37.2,
                "plain_english": "Company-specific explains about 37.2% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven, though based on only 5 trading days."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.623404724325774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "62.3%",
              "display_range": null,
              "display_text": "62.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 62.3,
              "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19863657260917883,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1779587030650471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.623404724325774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "62.3%",
                "display_range": null,
                "display_text": "62.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 62.3,
                "plain_english": "Company-specific explains about 62.3% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6156446349712699,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.6%",
              "display_range": null,
              "display_text": "61.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 61.6,
              "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15572514972889706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22863021529983313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.9%",
                "display_range": null,
                "display_text": "22.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 22.9,
                "plain_english": "Sector explains about 22.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6156446349712699,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.6%",
                "display_range": null,
                "display_text": "61.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 61.6,
                "plain_english": "Company-specific explains about 61.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Still clearly company-driven."
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
              "median": 0.4539874874240682,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3380759283078133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Market explains about 33.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20793658426811856,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.8%",
                "display_range": null,
                "display_text": "20.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.8,
                "plain_english": "Sector explains about 20.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4539874874240682,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
              "median": 0.47594380520699603,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.6%",
              "display_range": null,
              "display_text": "47.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.6,
              "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3064722257863164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21758396900668758,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.8%",
                "display_range": null,
                "display_text": "21.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.8,
                "plain_english": "Sector explains about 21.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47594380520699603,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.6%",
                "display_range": null,
                "display_text": "47.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.6,
                "plain_english": "Company-specific explains about 47.6% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-01 to 2025-10-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4828150565478932,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.3%",
              "display_range": null,
              "display_text": "48.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.3,
              "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3142352514374536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.4%",
                "display_range": null,
                "display_text": "31.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.4,
                "plain_english": "Market explains about 31.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2029496920146531,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.3%",
                "display_range": null,
                "display_text": "20.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.3,
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4828150565478932,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.3%",
                "display_range": null,
                "display_text": "48.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.3,
                "plain_english": "Company-specific explains about 48.3% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4219146512462774,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Market explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4219146512462774,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Market explains about 42.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2775902288822491,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3004951198714734,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Company-specific explains about 30.0% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7687417314818247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.9%",
              "display_range": null,
              "display_text": "76.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 76.9,
              "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12378967681730305,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Market explains about 12.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1074685917008723,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.7%",
                "display_range": null,
                "display_text": "10.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.7,
                "plain_english": "Sector explains about 10.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7687417314818247,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.9%",
                "display_range": null,
                "display_text": "76.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 76.9,
                "plain_english": "Company-specific explains about 76.9% of price moves in the current state."
              }
            },
            "summary": "Dec: Still clearly company-driven."
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
              "median": 0.634478433420432,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20419511848433777,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16132644809523028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.1%",
                "display_range": null,
                "display_text": "16.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.1,
                "plain_english": "Sector explains about 16.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.634478433420432,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
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
              "median": 0.8241639016384482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.4%",
              "display_range": null,
              "display_text": "82.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 82.4,
              "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12970195459975553,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Market explains about 13.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04613414376179617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Sector explains about 4.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8241639016384482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.4%",
                "display_range": null,
                "display_text": "82.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 82.4,
                "plain_english": "Company-specific explains about 82.4% of price moves in the current state."
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
              "median": 0.4594963935612947,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.9%",
              "display_range": null,
              "display_text": "45.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 45.9,
              "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23035600504921894,
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
                "median": 0.31014760138948644,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4594963935612947,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.9%",
                "display_range": null,
                "display_text": "45.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 45.9,
                "plain_english": "Company-specific explains about 45.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47906534683171254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2381469594055639,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.8%",
                "display_range": null,
                "display_text": "23.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 23.8,
                "plain_english": "Market explains about 23.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28278769376272356,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Sector explains about 28.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47906534683171254,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
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
              "median": 0.7715688311066202,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "77.2%",
              "display_range": null,
              "display_text": "77.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 77.2,
              "plain_english": "Company-specific explains about 77.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15682718393935755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Market explains about 15.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07160398495402222,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.2%",
                "display_range": null,
                "display_text": "7.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 7.2,
                "plain_english": "Sector explains about 7.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7715688311066202,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "77.2%",
                "display_range": null,
                "display_text": "77.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 77.2,
                "plain_english": "Company-specific explains about 77.2% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293304051132,
            "expected_duration_days": 1.9336815569018826,
            "current_probability": 0.9999999999497395,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.9999619316834,
            "volatility": {
              "median": 2.8053662635532255e-128,
              "low": 2.8053662635532255e-128,
              "high": 2.8053662635532255e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.09947578475808584,
            "jump_rate": 0.0,
            "risk_score": 0.023218327415103764,
            "metrics": {
              "rolling_vol_10d": 0.006483447296148525,
              "downside_vol_10d": 0.003460667980737838,
              "drawdown_21d": 0.009212587491136362,
              "amihud_stress": 2.4843890123758705e-252,
              "spread_rel": 75.90856632635146,
              "spread_ticks": 1.017166672943041,
              "log_notional": 13.077014172624436,
              "log_trade_count": 5.711344346407883
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.34254874082846054,
            "expected_duration_days": 1.753956917316913,
            "current_probability": 1.4690660210801078e-218,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.9797339479436,
            "volatility": {
              "median": 0.007428131891912003,
              "low": 0.007428131891912003,
              "high": 0.007428131891912003
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22259234944363473,
            "jump_rate": 2.7266166067135828e-176,
            "risk_score": 0.15852968220735328,
            "metrics": {
              "rolling_vol_10d": 0.006709471624359278,
              "downside_vol_10d": 0.0036456409270428356,
              "drawdown_21d": 0.009962992789511734,
              "amihud_stress": 0.9026673038416408,
              "spread_rel": 74.63829295387936,
              "spread_ticks": 1.0039431607107088,
              "log_notional": 13.235596801640217,
              "log_trade_count": 5.826699659156886
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1474912514755897,
            "expected_duration_days": 1.475605055357944,
            "current_probability": 5.026037020156652e-11,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 37.02030412037301,
            "volatility": {
              "median": 0.012212605173495945,
              "low": 0.012212605173495945,
              "high": 0.012212605173495945
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.31951570908111926,
            "jump_rate": 0.10804881523916815,
            "risk_score": 0.5281984108685643,
            "metrics": {
              "rolling_vol_10d": 0.008524178423592089,
              "downside_vol_10d": 0.004533114540628917,
              "drawdown_21d": 0.00764479531677359,
              "amihud_stress": 0.9350812264151062,
              "spread_rel": 77.79626937801058,
              "spread_ticks": 1.0528612817450065,
              "log_notional": 13.647249430099333,
              "log_trade_count": 5.792197351035468
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 2.734003986738655e-29,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.1930560501577919,
            "jump_rate": 0.04761904761904764,
            "risk_score": 0.7730149750289356,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193381,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594105,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.48285176717401906,
              0.4100195814990318,
              0.10701119766854653,
              0.00011745365840259782
            ],
            [
              0.3729773287478795,
              0.4298605683372578,
              0.18651844632922726,
              0.010643656585635375
            ],
            [
              0.34712568650625697,
              0.3008706918607382,
              0.3223118907264616,
              0.02969173090654319
            ],
            [
              0.0002373042240151878,
              0.04769728769127461,
              0.00023816555979327503,
              0.9518272425249169
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              41.0,
              35.0,
              9.0,
              0.0
            ],
            [
              32.0,
              37.0,
              16.0,
              1.0
            ],
            [
              13.0,
              11.0,
              12.0,
              1.0
            ],
            [
              0.0,
              2.0,
              0.0,
              40.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9999999999497395,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 1.4690660210801078e-218,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 5.026037020156652e-11,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 2.734003986738655e-29,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.09947578476914512,
          "current_score": 0.4979637542805046,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11046.718874086451,
          "loglik": -4995.67868135614,
          "n_params": 191,
          "bic_delta_vs_next_best": 520.1144780003688,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 13398.05295154865,
              "loglik": -6447.6183670438295,
              "n_params": 91,
              "converged": true,
              "iterations": 9,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13398.05295154865,
                  "loglik": -6447.6183670438295,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13398.05295154865,
                  "loglik": -6447.6183670438295,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13398.05295154865,
                  "loglik": -6447.6183670438295,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 11566.83335208682,
              "loglik": -5396.634970304185,
              "n_params": 140,
              "converged": true,
              "iterations": 18,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.83335208682,
                  "loglik": -5396.634970304185,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 18
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.833352168247,
                  "loglik": -5396.634970344899,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.83335217605,
                  "loglik": -5396.6349703488,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 17
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11046.718874086451,
              "loglik": -4995.67868135614,
              "n_params": 191,
              "converged": true,
              "iterations": 23,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11046.718874086451,
                  "loglik": -4995.67868135614,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 23
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11046.718875557584,
                  "loglik": -4995.678682091707,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 23
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11046.7188795602,
                  "loglik": -4995.678684093014,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 24
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
                "bic": 11046.718874086451,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11046.718875557584,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11046.7188795602,
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
                  "2": 6408.56088310944,
                  "3": 6199.6956599112045,
                  "4": 5877.663820210153
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
                  "2": 10326.922606715927,
                  "3": 9977.107426138691,
                  "4": 8835.592984371558
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 13398.05295154865,
                  "3": 11566.83335208682,
                  "4": 11046.718895602417
                },
                "valid": true
              }
            ],
            "stable": true
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 251,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 520.1144780003688,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 520.11 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 37.02030412037301,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 85.9999619316834,
                "pct_time": 0.3426293304051132,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 85.9797339479436,
                "pct_time": 0.34254874082846054,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 37.02030412037301,
                "pct_time": 0.1474912514755897,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 42.0,
                "pct_time": 0.16733067729083664,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.48285176717401906,
              0.4298605683372578,
              0.3223118907264616,
              0.9518272425249169
            ],
            "expected_duration_days": [
              1.9336815569018826,
              1.753956917316913,
              1.475605055357944,
              20.758620689655157
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [
              0,
              1,
              2
            ],
            "warnings": [
              "fast_switching_states"
            ]
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
                "bic": 11046.718874086451,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11046.718875557584,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11046.7188795602,
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
                  "2": 6408.56088310944,
                  "3": 6199.6956599112045,
                  "4": 5877.663820210153
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
                  "2": 10326.922606715927,
                  "3": 9977.107426138691,
                  "4": 8835.592984371558
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 13398.05295154865,
                  "3": 11566.83335208682,
                  "4": 11046.718895602417
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
              "risk_score": 0.023218327415103764,
              "jump_probability": 0.09947578475808584,
              "jump_rate": 0.0,
              "rolling_vol_10d": 0.006483447296148525,
              "downside_vol_10d": 0.003460667980737838,
              "drawdown_21d": 0.009212587491136362,
              "amihud_stress": 2.4843890123758705e-252,
              "spread_rel": 75.90856632635146,
              "spread_ticks": 1.017166672943041,
              "log_notional": 13.077014172624436,
              "log_trade_count": 5.711344346407883
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.15852968220735328,
              "jump_probability": 0.22259234944363473,
              "jump_rate": 2.7266166067135828e-176,
              "rolling_vol_10d": 0.006709471624359278,
              "downside_vol_10d": 0.0036456409270428356,
              "drawdown_21d": 0.009962992789511734,
              "amihud_stress": 0.9026673038416408,
              "spread_rel": 74.63829295387936,
              "spread_ticks": 1.0039431607107088,
              "log_notional": 13.235596801640217,
              "log_trade_count": 5.826699659156886
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.5281984108685643,
              "jump_probability": 0.31951570908111926,
              "jump_rate": 0.10804881523916815,
              "rolling_vol_10d": 0.008524178423592089,
              "downside_vol_10d": 0.004533114540628917,
              "drawdown_21d": 0.00764479531677359,
              "amihud_stress": 0.9350812264151062,
              "spread_rel": 77.79626937801058,
              "spread_ticks": 1.0528612817450065,
              "log_notional": 13.647249430099333,
              "log_trade_count": 5.792197351035468
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.7730149750289356,
              "jump_probability": 0.1930560501577919,
              "jump_rate": 0.04761904761904764,
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193381,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594105,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
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
              0.0,
              2.9146537821129742e-05,
              0.999970853462179,
              1.1577897381733946e-21
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              2.0400663521429628e-05,
              0.9999795993364786,
              7.30334432681877e-21
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-08",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999951857901778,
              4.814209822247185e-06,
              5.510807254798624e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999931271957232,
              6.872804276895588e-06,
              4.969077485592938e-25
            ],
            "jump_probability": 0.16852883745253636,
            "jump_score": 0.8620958787052361
          },
          {
            "trade_date": "2026-05-11",
            "state": 1,
            "probabilities": [
              0.0,
              0.9994701599450261,
              0.0005298400549738956,
              9.347197539273955e-24
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9992431801425057,
              0.000756819857494285,
              8.422046148451389e-23
            ],
            "jump_probability": 0.15634710017128678,
            "jump_score": 0.784206419842037
          },
          {
            "trade_date": "2026-05-12",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999978777140089,
              2.1222859911010816e-06,
              9.05365154234886e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999969678898891,
              3.032110110896707e-06,
              8.159461976235524e-26
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999901752576845,
              9.824742315488857e-06,
              1.1293132053157818e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.999985963386885,
              1.4036613115010196e-05,
              1.017770098845533e-26
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999925801076637,
              7.419892336308436e-06,
              2.421064978127027e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999893992086464,
              1.0600791353588006e-05,
              2.1819399672891997e-25
            ],
            "jump_probability": 0.14041641997052026,
            "jump_score": 0.6744907594765851
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999911285329511,
              8.871467048774943e-06,
              2.6188472750463713e-28
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999948661576477,
              5.133842352330376e-06,
              2.050947882841574e-25
            ],
            "jump_probability": 0.139724352328269,
            "jump_score": 0.6694945316286194
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              0.0,
              6.367151901561448e-32,
              1.0,
              1.1766136456028263e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              5.925834675691292e-32,
              1.0,
              1.721135899521484e-23
            ],
            "jump_probability": 0.170194372304884,
            "jump_score": 0.8723910091637973
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.9999999872307661,
              8.992582845474963e-218,
              1.2769233856174851e-08,
              8.868574706417882e-30
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999822379981,
              1.164168479360682e-217,
              1.7762001893887803e-08,
              1.804522007537392e-26
            ],
            "jump_probability": 0.1433014434087858,
            "jump_score": 0.6950993854770154
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999999999497395,
              1.4690660210801078e-218,
              5.026037020156652e-11,
              2.734003986738655e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999497395,
              1.4690660210801078e-218,
              5.026037020156652e-11,
              2.734003986738655e-29
            ],
            "jump_probability": 0.11765342623564745,
            "jump_score": 0.4979637542805046
          }
        ],
        "methodology": {
          "estimation_window_days": 251,
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
          "market_link_display": "0.05",
          "sector_link_display": "0.61",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.05% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.61% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.36",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 48.9,
          "driver_share_display": "48.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 9.9,
          "jump_risk_score": 0.5,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.48285176717401906,
          "effective_days": 86.0,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.9 days.",
          "expected_duration_days": 1.9
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
          "period_label": "2025-05-26 to 2025-05-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.5129679859828115,
          "share_sector": 0.1153946998422084,
          "share_company": 0.3716373141749802,
          "share_market_display": "51.3%",
          "share_sector_display": "11.5%",
          "share_company_display": "37.2%",
          "dominant_share_display": "51.3%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jun: Still clearly company-driven.",
          "share_market": 0.19863657260917883,
          "share_sector": 0.1779587030650471,
          "share_company": 0.623404724325774,
          "share_market_display": "19.9%",
          "share_sector_display": "17.8%",
          "share_company_display": "62.3%",
          "dominant_share_display": "62.3%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Still clearly company-driven.",
          "share_market": 0.15572514972889706,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712699,
          "share_market_display": "15.6%",
          "share_sector_display": "22.9%",
          "share_company_display": "61.6%",
          "dominant_share_display": "61.6%"
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
          "share_market": 0.3380759283078133,
          "share_sector": 0.20793658426811856,
          "share_company": 0.4539874874240682,
          "share_market_display": "33.8%",
          "share_sector_display": "20.8%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.3064722257863164,
          "share_sector": 0.21758396900668758,
          "share_company": 0.47594380520699603,
          "share_market_display": "30.6%",
          "share_sector_display": "21.8%",
          "share_company_display": "47.6%",
          "dominant_share_display": "47.6%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.3142352514374536,
          "share_sector": 0.2029496920146531,
          "share_company": 0.4828150565478932,
          "share_market_display": "31.4%",
          "share_sector_display": "20.3%",
          "share_company_display": "48.3%",
          "dominant_share_display": "48.3%"
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Nov: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4219146512462774,
          "share_sector": 0.2775902288822491,
          "share_company": 0.3004951198714734,
          "share_market_display": "42.2%",
          "share_sector_display": "27.8%",
          "share_company_display": "30.0%",
          "dominant_share_display": "42.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.12378967681730305,
          "share_sector": 0.1074685917008723,
          "share_company": 0.7687417314818247,
          "share_market_display": "12.4%",
          "share_sector_display": "10.7%",
          "share_company_display": "76.9%",
          "dominant_share_display": "76.9%"
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
          "share_market": 0.20419511848433777,
          "share_sector": 0.16132644809523028,
          "share_company": 0.634478433420432,
          "share_market_display": "20.4%",
          "share_sector_display": "16.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.12970195459975553,
          "share_sector": 0.04613414376179617,
          "share_company": 0.8241639016384482,
          "share_market_display": "13.0%",
          "share_sector_display": "4.6%",
          "share_company_display": "82.4%",
          "dominant_share_display": "82.4%"
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
          "share_market": 0.23035600504921894,
          "share_sector": 0.31014760138948644,
          "share_company": 0.4594963935612947,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.2381469594055639,
          "share_sector": 0.28278769376272356,
          "share_company": 0.47906534683171254,
          "share_market_display": "23.8%",
          "share_sector_display": "28.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
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
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.15682718393935755,
          "share_sector": 0.07160398495402222,
          "share_company": 0.7715688311066202,
          "share_market_display": "15.7%",
          "share_sector_display": "7.2%",
          "share_company_display": "77.2%",
          "dominant_share_display": "77.2%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999999999497395,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.3426293304051132,
          0.34254874082846054,
          0.1474912514755897,
          0.16733067729083664
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293304051132,
            "expected_duration_days": 1.9336815569018826,
            "current_probability": 0.9999999999497395,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.9999619316834,
            "volatility": {
              "median": 2.8053662635532255e-128,
              "low": 2.8053662635532255e-128,
              "high": 2.8053662635532255e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.09947578475808584,
            "jump_rate": 0.0,
            "risk_score": 0.023218327415103764,
            "metrics": {
              "rolling_vol_10d": 0.006483447296148525,
              "downside_vol_10d": 0.003460667980737838,
              "drawdown_21d": 0.009212587491136362,
              "amihud_stress": 2.4843890123758705e-252,
              "spread_rel": 75.90856632635146,
              "spread_ticks": 1.017166672943041,
              "log_notional": 13.077014172624436,
              "log_trade_count": 5.711344346407883
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.34254874082846054,
            "expected_duration_days": 1.753956917316913,
            "current_probability": 1.4690660210801078e-218,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.9797339479436,
            "volatility": {
              "median": 0.007428131891912003,
              "low": 0.007428131891912003,
              "high": 0.007428131891912003
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22259234944363473,
            "jump_rate": 2.7266166067135828e-176,
            "risk_score": 0.15852968220735328,
            "metrics": {
              "rolling_vol_10d": 0.006709471624359278,
              "downside_vol_10d": 0.0036456409270428356,
              "drawdown_21d": 0.009962992789511734,
              "amihud_stress": 0.9026673038416408,
              "spread_rel": 74.63829295387936,
              "spread_ticks": 1.0039431607107088,
              "log_notional": 13.235596801640217,
              "log_trade_count": 5.826699659156886
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1474912514755897,
            "expected_duration_days": 1.475605055357944,
            "current_probability": 5.026037020156652e-11,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 37.02030412037301,
            "volatility": {
              "median": 0.012212605173495945,
              "low": 0.012212605173495945,
              "high": 0.012212605173495945
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.31951570908111926,
            "jump_rate": 0.10804881523916815,
            "risk_score": 0.5281984108685643,
            "metrics": {
              "rolling_vol_10d": 0.008524178423592089,
              "downside_vol_10d": 0.004533114540628917,
              "drawdown_21d": 0.00764479531677359,
              "amihud_stress": 0.9350812264151062,
              "spread_rel": 77.79626937801058,
              "spread_ticks": 1.0528612817450065,
              "log_notional": 13.647249430099333,
              "log_trade_count": 5.792197351035468
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 2.734003986738655e-29,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.1930560501577919,
            "jump_rate": 0.04761904761904764,
            "risk_score": 0.7730149750289356,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193381,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594105,
              "log_notional": 13.655842671770918,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": [
          [
            0.48285176717401906,
            0.4100195814990318,
            0.10701119766854653,
            0.00011745365840259782
          ],
          [
            0.3729773287478795,
            0.4298605683372578,
            0.18651844632922726,
            0.010643656585635375
          ],
          [
            0.34712568650625697,
            0.3008706918607382,
            0.3223118907264616,
            0.02969173090654319
          ],
          [
            0.0002373042240151878,
            0.04769728769127461,
            0.00023816555979327503,
            0.9518272425249169
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 696600.0,
          "value": 463239.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1114600.0,
          "value": 735636.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 312600.0,
          "value": 204753.0
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 405600.0,
          "value": 263640.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 69800.0,
          "value": 45021.0
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 123500.0,
          "value": 79040.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 104300.0,
          "value": 66230.5
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 317900.0,
          "value": 200277.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 114400.0,
          "value": 71500.0
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 46800.0,
          "value": 29016.0
        },
        {
          "level": 11,
          "price": 0.615,
          "quantity": 11500.0,
          "value": 7072.5
        },
        {
          "level": 12,
          "price": 0.61,
          "quantity": 41000.0,
          "value": 25010.0
        },
        {
          "level": 13,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 14,
          "price": 0.6,
          "quantity": 21800.0,
          "value": 13080.0
        },
        {
          "level": 15,
          "price": 0.58,
          "quantity": 1400.0,
          "value": 812.0
        },
        {
          "level": 16,
          "price": 0.57,
          "quantity": 23000.0,
          "value": 13109.999999999998
        },
        {
          "level": 17,
          "price": 0.565,
          "quantity": 10000.0,
          "value": 5649.999999999999
        },
        {
          "level": 18,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 19,
          "price": 0.525,
          "quantity": 5500.0,
          "value": 2887.5
        },
        {
          "level": 20,
          "price": 0.52,
          "quantity": 10000.0,
          "value": 5200.0
        },
        {
          "level": 21,
          "price": 0.515,
          "quantity": 7000.0,
          "value": 3605.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 481600.0,
          "value": 322672.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 294800.0,
          "value": 198990.0
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 450200.0,
          "value": 306136.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 124400.0,
          "value": 85214.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1136600.0,
          "value": 784253.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 215300.0,
          "value": 149633.5
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 133800.0,
          "value": 93660.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 119300.0,
          "value": 84106.5
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 99900.0,
          "value": 70929.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 11,
          "price": 0.72,
          "quantity": 20200.0,
          "value": 14544.0
        },
        {
          "level": 12,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 13,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 14,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 15,
          "price": 0.825,
          "quantity": 3400.0,
          "value": 2805.0
        },
        {
          "level": 16,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 17,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-20 08:59:52.783400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2238339.5,
        "ask_depth_notional_displayed": 2462158.0,
        "bid_depth_notional_top10": 2238339.5,
        "ask_depth_notional_top10": 2462158.0,
        "bid_ask_depth_ratio": 0.9091
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 255,
        "n_trades_used": 101818,
        "first_trade_date": "2025-05-20",
        "last_trade_date": "2026-05-20",
        "window_label": "May 20, 2025 to May 20, 2026",
        "window_short_label": "May 20, 2025 to May 20, 2026",
        "trade_days_label": "255 trading days",
        "trade_count_label": "101,818 trades",
        "window_detail_label": "255 trading days • 101,818 trades",
        "history_note": "Trade-size percentiles use May 20, 2025 to May 20, 2026 history (255 trading days • 101,818 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3380.3,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.76
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7875.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.35,
            "pct_of_adv": 1.77
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 338637.25,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.13,
            "pct_of_adv": 76.16
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
            "order_id": "8149098049227054080",
            "timestamp": "2026-05-19 22:59:01.623900000",
            "local_timestamp": "2026-05-20 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.00622,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 30.83,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8151077170157039616",
            "timestamp": "2026-05-20 00:30:00.103700000",
            "local_timestamp": "2026-05-20 08:30:00",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.11,
            "price_vs_mid_pct": 1.873,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "8150681345971086336",
            "timestamp": "2026-05-19 22:59:01.623900000",
            "local_timestamp": "2026-05-20 06:59:01",
            "posted_price": 0.67,
            "size_shares": 273800.0,
            "notional": 183446.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 8.2,
            "price_vs_mid_pct": 0.375,
            "executed_event_count": 0,
            "event_count": 69
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-20",
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
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1870348.5,
            "ask_depth_notional": 2567315.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1903790.5,
            "ask_depth_notional": 2551101.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1892466.5,
            "ask_depth_notional": 2530361.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1895858.0,
            "ask_depth_notional": 2526810.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2013662.0,
            "ask_depth_notional": 2533845.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2021242.0,
            "ask_depth_notional": 2531232.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2037767.5,
            "ask_depth_notional": 2504003.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2069597.5,
            "ask_depth_notional": 2531500.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2102240.0,
            "ask_depth_notional": 2509189.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2093395.5,
            "ask_depth_notional": 2530662.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2085139.5,
            "ask_depth_notional": 2519442.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2080538.5,
            "ask_depth_notional": 2512541.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2070236.0,
            "ask_depth_notional": 2519978.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2238339.5,
            "ask_depth_notional": 2462158.0,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2053682.5,
          "median_ask_depth_notional": 2528585.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "16:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 11.2,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 121.4
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 399,
          "n_runs": 342,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-20",
          "last_trade_date": "2026-05-20",
          "period_days": 1,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.48621553884711777,
            "mixed_pct": 0.37092731829573933,
            "instit_pct": 0.05012531328320802,
            "ambiguous_pct": 0.09273182957393483,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09273182957393483,
            "retail_qty_pct": 0.04413102820746133,
            "mixed_qty_pct": 0.07688808007279345,
            "instit_qty_pct": 0.41628753412192904,
            "ambiguous_qty_pct": 0.4626933575978162,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4626933575978162,
            "retail_notional_pct": 0.044021382350182874,
            "mixed_notional_pct": 0.07680594749899823,
            "instit_notional_pct": 0.4155559155277809,
            "ambiguous_notional_pct": 0.46361675462303803,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.46361675462303803
          },
          "run_composition": {
            "retail_pct": 0.5672514619883041,
            "mixed_pct": 0.30409356725146197,
            "instit_pct": 0.023391812865497075,
            "ambiguous_pct": 0.10526315789473684,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10526315789473684,
            "retail_notional_pct": 0.044021382350182874,
            "mixed_notional_pct": 0.07680594749899823,
            "instit_notional_pct": 0.4155559155277809,
            "unclear_notional_pct": 0.46361675462303803
          },
          "counts": {
            "trades": {
              "retail": 194,
              "mixed": 148,
              "institutional": 20,
              "ambiguous": 37,
              "unobservable": 0,
              "unclear": 37
            },
            "runs": {
              "retail": 194,
              "mixed": 104,
              "institutional": 8,
              "ambiguous": 36,
              "unobservable": 0,
              "unclear": 36
            }
          },
          "confidence": {
            "high": 0.5906432748538012,
            "medium": 0.30409356725146197,
            "low": 0.10526315789473684,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 202,
            "medium": 104,
            "low": 36,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5363408521303258,
            "medium": 0.37092731829573933,
            "low": 0.09273182957393483,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 214,
            "medium": 148,
            "low": 37,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8692982456140349,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10526315789473684,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5672514619883041,
          "dominance_gap": 0.26315789473684215,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 399
            },
            "d2_information": {
              "UNOBSERVABLE": 399
            },
            "d3_urgency": {
              "UNOBSERVABLE": 342
            },
            "participant_confidence": {
              "HIGH": 202,
              "MEDIUM": 104,
              "LOW": 36
            }
          },
          "trade_size": {
            "avg": 734.9185463659148,
            "median": 66.5
          },
          "run_size": {
            "avg": 857.4049707602339,
            "median": 66.5,
            "avg_length": 1.1608187134502923
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-20T08:59:52.783500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-20T08:59:52.239800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-20T08:59:28.026200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-20T08:59:24.484400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-20T08:59:09.956500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-20T08:59:04.124600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-20T08:59:01.524200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-20T08:59:00.459400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-397",
              "timestamp": "2026-05-20T08:58:57.073600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-396",
              "timestamp": "2026-05-20T08:58:37.523700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-395",
              "timestamp": "2026-05-20T08:58:25.701400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-394",
              "timestamp": "2026-05-20T08:58:09.987700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-393",
              "timestamp": "2026-05-20T08:58:04.796700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-392",
              "timestamp": "2026-05-20T08:57:59.514100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-391",
              "timestamp": "2026-05-20T08:57:38.339900",
              "price": 0.67,
              "size": 2500.0,
              "notional": 1675.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-390",
              "timestamp": "2026-05-20T08:57:37.796800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-389",
              "timestamp": "2026-05-20T08:57:31.071800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-388",
              "timestamp": "2026-05-20T08:57:10.233000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48220,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-387",
              "timestamp": "2026-05-20T08:56:46.679200",
              "price": 0.67,
              "size": 5600.0,
              "notional": 3752.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-386",
              "timestamp": "2026-05-20T08:56:36.099900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-05-20T08:56:34.803700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-05-20T08:56:27.414400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-05-20T08:56:10.673800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-05-20T08:55:28.365500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-05-20T08:55:07.217000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-05-20T08:55:03.871200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-05-20T08:54:12.574900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-20T08:54:06.785900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.48621553884711777,
              "mixed_pct": 0.37092731829573933,
              "instit_pct": 0.05012531328320802,
              "ambiguous_pct": 0.09273182957393483,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.09273182957393483,
              "retail_qty_pct": 0.04413102820746133,
              "mixed_qty_pct": 0.07688808007279345,
              "instit_qty_pct": 0.41628753412192904,
              "ambiguous_qty_pct": 0.4626933575978162,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4626933575978162,
              "retail_notional_pct": 0.044021382350182874,
              "mixed_notional_pct": 0.07680594749899823,
              "instit_notional_pct": 0.4155559155277809,
              "ambiguous_notional_pct": 0.46361675462303803,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.46361675462303803,
              "run_retail_pct": 0.5672514619883041,
              "run_mixed_pct": 0.30409356725146197,
              "run_instit_pct": 0.023391812865497075,
              "run_unclear_pct": 0.10526315789473684,
              "avg_trade_size": 734.9185463659148,
              "avg_run_notional": 857.4049707602339,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5906432748538012,
              "medium_confidence_pct": 0.30409356725146197,
              "low_confidence_pct": 0.10526315789473684,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8692982456140349,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.68,
              "mixed_pct": 0.0,
              "instit_pct": 0.32,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.2704095112285337,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.7295904887714663,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.2703732662736065,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.7296267337263935,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8607038123167156,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.13929618768328444,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 567.852,
              "avg_run_notional": 728.5491202346041,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.8607038123167156,
              "low_confidence_pct": 0.13929618768328444,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.47023460410557194,
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
          "n_trades": 6534,
          "n_runs": 3953,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-05-20",
          "period_days": 21,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.36195286195286197,
            "mixed_pct": 0.29660238751147844,
            "instit_pct": 0.1859504132231405,
            "ambiguous_pct": 0.15549433731251913,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15549433731251913,
            "retail_qty_pct": 0.030187242145350682,
            "mixed_qty_pct": 0.1938876547127896,
            "instit_qty_pct": 0.48946366232941924,
            "ambiguous_qty_pct": 0.2864614408124405,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2864614408124405,
            "retail_notional_pct": 0.030171038233581006,
            "mixed_notional_pct": 0.19403964443306712,
            "instit_notional_pct": 0.4890459657955937,
            "ambiguous_notional_pct": 0.2867433515377582,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2867433515377582
          },
          "run_composition": {
            "retail_pct": 0.5871490007589173,
            "mixed_pct": 0.2608145712117379,
            "instit_pct": 0.04958259549709082,
            "ambiguous_pct": 0.10245383253225399,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10245383253225399,
            "retail_notional_pct": 0.030171038233581006,
            "mixed_notional_pct": 0.19403964443306712,
            "instit_notional_pct": 0.4890459657955937,
            "unclear_notional_pct": 0.2867433515377582
          },
          "counts": {
            "trades": {
              "retail": 2365,
              "mixed": 1938,
              "institutional": 1215,
              "ambiguous": 1016,
              "unobservable": 0,
              "unclear": 1016
            },
            "runs": {
              "retail": 2321,
              "mixed": 1031,
              "institutional": 196,
              "ambiguous": 405,
              "unobservable": 0,
              "unclear": 405
            }
          },
          "confidence": {
            "high": 0.6367315962560081,
            "medium": 0.2608145712117379,
            "low": 0.10245383253225399,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2517,
            "medium": 1031,
            "low": 405,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5479032751760025,
            "medium": 0.29660238751147844,
            "low": 0.15549433731251913,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3580,
            "medium": 1938,
            "low": 1016,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8750948646597518,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10245383253225399,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5871490007589173,
          "dominance_gap": 0.3263344295471794,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6192,
              "WALK_BOOK": 338,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 6534
            },
            "d3_urgency": {
              "UNOBSERVABLE": 3953
            },
            "participant_confidence": {
              "HIGH": 2517,
              "MEDIUM": 1031,
              "LOW": 405
            }
          },
          "trade_size": {
            "avg": 1605.8456535047444,
            "median": 132.0
          },
          "run_size": {
            "avg": 2654.3373387300785,
            "median": 133.0,
            "avg_length": 1.2856058689602834
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-20T08:59:52.783500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-20T08:59:52.239800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-20T08:59:28.026200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-20T08:59:24.484400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-20T08:59:09.956500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-20T08:59:04.124600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-20T08:59:01.524200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-20T08:59:00.459400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-397",
              "timestamp": "2026-05-20T08:58:57.073600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-396",
              "timestamp": "2026-05-20T08:58:37.523700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-395",
              "timestamp": "2026-05-20T08:58:25.701400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-394",
              "timestamp": "2026-05-20T08:58:09.987700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-393",
              "timestamp": "2026-05-20T08:58:04.796700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-392",
              "timestamp": "2026-05-20T08:57:59.514100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-391",
              "timestamp": "2026-05-20T08:57:38.339900",
              "price": 0.67,
              "size": 2500.0,
              "notional": 1675.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-390",
              "timestamp": "2026-05-20T08:57:37.796800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-389",
              "timestamp": "2026-05-20T08:57:31.071800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-388",
              "timestamp": "2026-05-20T08:57:10.233000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48220,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-387",
              "timestamp": "2026-05-20T08:56:46.679200",
              "price": 0.67,
              "size": 5600.0,
              "notional": 3752.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-386",
              "timestamp": "2026-05-20T08:56:36.099900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-05-20T08:56:34.803700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-05-20T08:56:27.414400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-05-20T08:56:10.673800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-05-20T08:55:28.365500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-05-20T08:55:07.217000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-05-20T08:55:03.871200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-05-20T08:54:12.574900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-20T08:54:06.785900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.36195286195286197,
              "mixed_pct": 0.29660238751147844,
              "instit_pct": 0.1859504132231405,
              "ambiguous_pct": 0.15549433731251913,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15549433731251913,
              "retail_qty_pct": 0.030187242145350682,
              "mixed_qty_pct": 0.1938876547127896,
              "instit_qty_pct": 0.48946366232941924,
              "ambiguous_qty_pct": 0.2864614408124405,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2864614408124405,
              "retail_notional_pct": 0.030171038233581006,
              "mixed_notional_pct": 0.19403964443306712,
              "instit_notional_pct": 0.4890459657955937,
              "ambiguous_notional_pct": 0.2867433515377582,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2867433515377582,
              "run_retail_pct": 0.5871490007589173,
              "run_mixed_pct": 0.2608145712117379,
              "run_instit_pct": 0.04958259549709082,
              "run_unclear_pct": 0.10245383253225399,
              "avg_trade_size": 1605.8456535047444,
              "avg_run_notional": 2654.3373387300785,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6367315962560081,
              "medium_confidence_pct": 0.2608145712117379,
              "low_confidence_pct": 0.10245383253225399,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8750948646597518,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4903991762069174,
              "mixed_pct": 0.04482403537464413,
              "instit_pct": 0.4625961596704828,
              "ambiguous_pct": 0.0021806287479556605,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021806287479556605,
              "retail_qty_pct": 0.19600475584849225,
              "mixed_qty_pct": 0.010340242018004283,
              "instit_qty_pct": 0.7935017213023071,
              "ambiguous_qty_pct": 0.0001532808311963776,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0001532808311963776,
              "retail_notional_pct": 0.19670597434725867,
              "mixed_notional_pct": 0.010237214901072472,
              "instit_notional_pct": 0.7929005070067932,
              "ambiguous_notional_pct": 0.0001563037448756711,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0001563037448756711,
              "run_retail_pct": 0.7907098668344343,
              "run_mixed_pct": 0.03334381881094684,
              "run_instit_pct": 0.1740589283841879,
              "run_unclear_pct": 0.0018873859704309531,
              "avg_trade_size": 979.2985038463868,
              "avg_run_notional": 1695.2122260668973,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7374436405578274,
              "low_confidence_pct": 0.2625563594421726,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48287197231833917,
              "observable_run_pct": 1.0,
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
          "n_trades": 23879,
          "n_runs": 13949,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-19",
          "last_trade_date": "2026-05-20",
          "period_days": 63,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.35177352485447466,
            "mixed_pct": 0.2884124125800913,
            "instit_pct": 0.22249675447045522,
            "ambiguous_pct": 0.13731730809497886,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13731730809497886,
            "retail_qty_pct": 0.02355405572596919,
            "mixed_qty_pct": 0.18202878023182892,
            "instit_qty_pct": 0.5425894244949097,
            "ambiguous_qty_pct": 0.25182773954729226,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25182773954729226,
            "retail_notional_pct": 0.023517617095454125,
            "mixed_notional_pct": 0.18324107490198893,
            "instit_notional_pct": 0.5411493697932072,
            "ambiguous_notional_pct": 0.2520919382093497,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2520919382093497
          },
          "run_composition": {
            "retail_pct": 0.5954548713169403,
            "mixed_pct": 0.2534231844576672,
            "instit_pct": 0.0498960498960499,
            "ambiguous_pct": 0.1012258943293426,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1012258943293426,
            "retail_notional_pct": 0.023517617095454125,
            "mixed_notional_pct": 0.18324107490198893,
            "instit_notional_pct": 0.5411493697932072,
            "unclear_notional_pct": 0.2520919382093497
          },
          "counts": {
            "trades": {
              "retail": 8400,
              "mixed": 6887,
              "institutional": 5313,
              "ambiguous": 3279,
              "unobservable": 0,
              "unclear": 3279
            },
            "runs": {
              "retail": 8306,
              "mixed": 3535,
              "institutional": 696,
              "ambiguous": 1412,
              "unobservable": 0,
              "unclear": 1412
            }
          },
          "confidence": {
            "high": 0.6452792314861281,
            "medium": 0.2534948741845294,
            "low": 0.1012258943293426,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9001,
            "medium": 3536,
            "low": 1412,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.574186523723774,
            "medium": 0.2884961681812471,
            "low": 0.13731730809497886,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13711,
            "medium": 6889,
            "low": 3279,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8777726001863932,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1012258943293426,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5954548713169403,
          "dominance_gap": 0.3420316868592731,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23024,
              "WALK_BOOK": 849,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23879
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13949
            },
            "participant_confidence": {
              "HIGH": 9001,
              "MEDIUM": 3536,
              "LOW": 1412
            }
          },
          "trade_size": {
            "avg": 1952.855354076804,
            "median": 132.0
          },
          "run_size": {
            "avg": 3343.052046741702,
            "median": 134.0,
            "avg_length": 1.3605993261165674
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-20T08:59:52.783500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-20T08:59:52.239800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-20T08:59:28.026200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-20T08:59:24.484400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-20T08:59:09.956500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-20T08:59:04.124600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-20T08:59:01.524200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-20T08:59:00.459400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-397",
              "timestamp": "2026-05-20T08:58:57.073600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-396",
              "timestamp": "2026-05-20T08:58:37.523700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-395",
              "timestamp": "2026-05-20T08:58:25.701400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-394",
              "timestamp": "2026-05-20T08:58:09.987700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-393",
              "timestamp": "2026-05-20T08:58:04.796700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-392",
              "timestamp": "2026-05-20T08:57:59.514100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-391",
              "timestamp": "2026-05-20T08:57:38.339900",
              "price": 0.67,
              "size": 2500.0,
              "notional": 1675.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-390",
              "timestamp": "2026-05-20T08:57:37.796800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-389",
              "timestamp": "2026-05-20T08:57:31.071800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-388",
              "timestamp": "2026-05-20T08:57:10.233000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48220,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-387",
              "timestamp": "2026-05-20T08:56:46.679200",
              "price": 0.67,
              "size": 5600.0,
              "notional": 3752.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-386",
              "timestamp": "2026-05-20T08:56:36.099900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-05-20T08:56:34.803700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-05-20T08:56:27.414400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-05-20T08:56:10.673800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-05-20T08:55:28.365500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-05-20T08:55:07.217000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-05-20T08:55:03.871200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-05-20T08:54:12.574900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-20T08:54:06.785900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.35177352485447466,
              "mixed_pct": 0.2884124125800913,
              "instit_pct": 0.22249675447045522,
              "ambiguous_pct": 0.13731730809497886,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13731730809497886,
              "retail_qty_pct": 0.02355405572596919,
              "mixed_qty_pct": 0.18202878023182892,
              "instit_qty_pct": 0.5425894244949097,
              "ambiguous_qty_pct": 0.25182773954729226,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25182773954729226,
              "retail_notional_pct": 0.023517617095454125,
              "mixed_notional_pct": 0.18324107490198893,
              "instit_notional_pct": 0.5411493697932072,
              "ambiguous_notional_pct": 0.2520919382093497,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2520919382093497,
              "run_retail_pct": 0.5954548713169403,
              "run_mixed_pct": 0.2534231844576672,
              "run_instit_pct": 0.0498960498960499,
              "run_unclear_pct": 0.1012258943293426,
              "avg_trade_size": 1952.855354076804,
              "avg_run_notional": 3343.052046741702,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6452792314861281,
              "medium_confidence_pct": 0.2534948741845294,
              "low_confidence_pct": 0.1012258943293426,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8777726001863932,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4522632894267085,
              "mixed_pct": 0.04430748416918769,
              "instit_pct": 0.5013059245758094,
              "ambiguous_pct": 0.0021233018282944063,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021233018282944063,
              "retail_qty_pct": 0.21006394364424977,
              "mixed_qty_pct": 0.0239645059434856,
              "instit_qty_pct": 0.7654290369611223,
              "ambiguous_qty_pct": 0.0005425134511423327,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0005425134511423327,
              "retail_notional_pct": 0.21086769302608113,
              "mixed_notional_pct": 0.024190920854187094,
              "instit_notional_pct": 0.7644059172871076,
              "ambiguous_notional_pct": 0.0005354688326242135,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0005354688326242135,
              "run_retail_pct": 0.7838654333880352,
              "run_mixed_pct": 0.034797851708190365,
              "run_instit_pct": 0.17943458153065792,
              "run_unclear_pct": 0.001902133373116515,
              "avg_trade_size": 1379.5957552753716,
              "avg_run_notional": 2738.352472773385,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7087498135163359,
              "low_confidence_pct": 0.291250186483664,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4856146501566464,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 43703,
          "n_runs": 27117,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-18",
          "last_trade_date": "2026-05-20",
          "period_days": 126,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.37823490378234903,
            "mixed_pct": 0.28377914559641215,
            "instit_pct": 0.21300597213005973,
            "ambiguous_pct": 0.12497997849117909,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12497997849117909,
            "retail_qty_pct": 0.02921721472611524,
            "mixed_qty_pct": 0.1741282096113276,
            "instit_qty_pct": 0.5409542455932328,
            "ambiguous_qty_pct": 0.2557003300693243,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2557003300693243,
            "retail_notional_pct": 0.0292603671007895,
            "mixed_notional_pct": 0.17475585713697575,
            "instit_notional_pct": 0.5398590221040651,
            "ambiguous_notional_pct": 0.2561247536581696,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2561247536581696
          },
          "run_composition": {
            "retail_pct": 0.60253715381495,
            "mixed_pct": 0.2509127115831397,
            "instit_pct": 0.05417265921746506,
            "ambiguous_pct": 0.09237747538444518,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09237747538444518,
            "retail_notional_pct": 0.02925949871265039,
            "mixed_notional_pct": 0.17475601346716815,
            "instit_notional_pct": 0.5398595050421834,
            "unclear_notional_pct": 0.2561249827779981
          },
          "counts": {
            "trades": {
              "retail": 16530,
              "mixed": 12402,
              "institutional": 9309,
              "ambiguous": 5462,
              "unobservable": 0,
              "unclear": 5462
            },
            "runs": {
              "retail": 16339,
              "mixed": 6804,
              "institutional": 1469,
              "ambiguous": 2505,
              "unobservable": 0,
              "unclear": 2505
            }
          },
          "confidence": {
            "high": 0.6566729357967327,
            "medium": 0.2509495888188221,
            "low": 0.09237747538444518,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17807,
            "medium": 6805,
            "low": 2505,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5911722307393085,
            "medium": 0.2838249090451456,
            "low": 0.12500286021554585,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25836,
            "medium": 12404,
            "low": 5463,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8764889183906772,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09237747538444518,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.60253715381495,
          "dominance_gap": 0.3516244422318103,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42553,
              "WALK_BOOK": 1143,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 43703
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27117
            },
            "participant_confidence": {
              "HIGH": 17807,
              "MEDIUM": 6805,
              "LOW": 2505
            }
          },
          "trade_size": {
            "avg": 1726.560453515777,
            "median": 134.0
          },
          "run_size": {
            "avg": 2782.60146771398,
            "median": 136.0,
            "avg_length": 1.325810377254121
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-20T08:59:52.783500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-20T08:59:52.239800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-20T08:59:28.026200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-20T08:59:24.484400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-20T08:59:21.788400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-20T08:59:09.956500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-20T08:59:04.124600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-20T08:59:01.524200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-20T08:59:00.459400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-397",
              "timestamp": "2026-05-20T08:58:57.073600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-396",
              "timestamp": "2026-05-20T08:58:37.523700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-395",
              "timestamp": "2026-05-20T08:58:25.701400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-394",
              "timestamp": "2026-05-20T08:58:09.987700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-393",
              "timestamp": "2026-05-20T08:58:04.796700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-392",
              "timestamp": "2026-05-20T08:57:59.514100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-391",
              "timestamp": "2026-05-20T08:57:38.339900",
              "price": 0.67,
              "size": 2500.0,
              "notional": 1675.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-390",
              "timestamp": "2026-05-20T08:57:37.796800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-389",
              "timestamp": "2026-05-20T08:57:31.071800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-388",
              "timestamp": "2026-05-20T08:57:10.233000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48220,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-387",
              "timestamp": "2026-05-20T08:56:46.679200",
              "price": 0.67,
              "size": 5600.0,
              "notional": 3752.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48219,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-386",
              "timestamp": "2026-05-20T08:56:36.099900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-05-20T08:56:34.803700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-05-20T08:56:27.414400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48218,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-05-20T08:56:10.673800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48217,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-05-20T08:55:28.365500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48216,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-05-20T08:55:07.217000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-05-20T08:55:03.871200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48215,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-05-20T08:54:12.574900",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-20T08:54:06.785900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48214,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.37823490378234903,
              "mixed_pct": 0.28377914559641215,
              "instit_pct": 0.21300597213005973,
              "ambiguous_pct": 0.12497997849117909,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12497997849117909,
              "retail_qty_pct": 0.02921721472611524,
              "mixed_qty_pct": 0.1741282096113276,
              "instit_qty_pct": 0.5409542455932328,
              "ambiguous_qty_pct": 0.2557003300693243,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2557003300693243,
              "retail_notional_pct": 0.0292603671007895,
              "mixed_notional_pct": 0.17475585713697575,
              "instit_notional_pct": 0.5398590221040651,
              "ambiguous_notional_pct": 0.2561247536581696,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2561247536581696,
              "run_retail_pct": 0.60253715381495,
              "run_mixed_pct": 0.2509127115831397,
              "run_instit_pct": 0.05417265921746506,
              "run_unclear_pct": 0.09237747538444518,
              "avg_trade_size": 1726.560453515777,
              "avg_run_notional": 2782.60146771398,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6566729357967327,
              "medium_confidence_pct": 0.2509495888188221,
              "low_confidence_pct": 0.09237747538444518,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8764889183906772,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4795489810696183,
              "mixed_pct": 0.047036309092789906,
              "instit_pct": 0.47178028343850215,
              "ambiguous_pct": 0.0016344263990896867,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016344263990896867,
              "retail_qty_pct": 0.2306317277130105,
              "mixed_qty_pct": 0.027068531327903343,
              "instit_qty_pct": 0.741863520325901,
              "ambiguous_qty_pct": 0.0004362206331851673,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004362206331851673,
              "retail_notional_pct": 0.23288643260197836,
              "mixed_notional_pct": 0.02714159765204808,
              "instit_notional_pct": 0.7395479907504073,
              "ambiguous_notional_pct": 0.00042397899556616893,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00042397899556616893,
              "run_retail_pct": 0.792269871619776,
              "run_mixed_pct": 0.03556795567175245,
              "run_instit_pct": 0.17079642564482772,
              "run_unclear_pct": 0.0013657470636438131,
              "avg_trade_size": 1459.594196751836,
              "avg_run_notional": 2752.9357903773366,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.722402153978226,
              "low_confidence_pct": 0.2775978460217739,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48485874273227464,
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
      "n_trades": 43703,
      "n_runs": 27117,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-18",
      "last_trade_date": "2026-05-20",
      "period_days": 126,
      "method": {
        "key": "persona_v4_l2_only",
        "name": "Trader persona v4 — L2-only",
        "version": "4.0",
        "unit_of_classification": "runs"
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.37823490378234903,
        "mixed_pct": 0.28377914559641215,
        "instit_pct": 0.21300597213005973,
        "ambiguous_pct": 0.12497997849117909,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12497997849117909,
        "retail_qty_pct": 0.02921721472611524,
        "mixed_qty_pct": 0.1741282096113276,
        "instit_qty_pct": 0.5409542455932328,
        "ambiguous_qty_pct": 0.2557003300693243,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2557003300693243,
        "retail_notional_pct": 0.0292603671007895,
        "mixed_notional_pct": 0.17475585713697575,
        "instit_notional_pct": 0.5398590221040651,
        "ambiguous_notional_pct": 0.2561247536581696,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2561247536581696
      },
      "run_composition": {
        "retail_pct": 0.60253715381495,
        "mixed_pct": 0.2509127115831397,
        "instit_pct": 0.05417265921746506,
        "ambiguous_pct": 0.09237747538444518,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09237747538444518
      },
      "trade_size": {
        "avg": 1726.560453515777,
        "median": 134.0
      },
      "run_size": {
        "avg": 2782.60146771398,
        "median": 136.0,
        "avg_length": 1.325810377254121
      },
      "confidence": {
        "high": 0.6566729357967327,
        "medium": 0.2509495888188221,
        "low": 0.09237747538444518,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17807,
        "medium": 6805,
        "low": 2505,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5911722307393085,
        "medium": 0.2838249090451456,
        "low": 0.12500286021554585,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25836,
        "medium": 12404,
        "low": 5463,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16530,
          "mixed": 12402,
          "institutional": 9309,
          "ambiguous": 5462,
          "unobservable": 0,
          "unclear": 5462
        },
        "runs": {
          "retail": 16339,
          "mixed": 6804,
          "institutional": 1469,
          "ambiguous": 2505,
          "unobservable": 0,
          "unclear": 2505
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8764889183906772,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09237747538444518,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.60253715381495,
      "dominance_gap": 0.3516244422318103,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-12",
            "n_trades": 7482,
            "n_runs": 4659,
            "retail_pct": 0.3744987971130714,
            "mixed_pct": 0.3032611601176156,
            "instit_pct": 0.20395616145415665,
            "ambiguous_pct": 0.11828388131515638,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11828388131515638,
            "avg_trade_size": 971.4749398556536,
            "avg_run_notional": 1560.1004507405023,
            "retail_qty_pct": 0.04269277164331447,
            "mixed_qty_pct": 0.2121740744177415,
            "instit_qty_pct": 0.48862392131390925,
            "ambiguous_qty_pct": 0.2565092326250348,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2565092326250348,
            "retail_notional_pct": 0.042695917515061924,
            "mixed_notional_pct": 0.2125468050789319,
            "instit_notional_pct": 0.4882909312835782,
            "ambiguous_notional_pct": 0.25646634612242797,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25646634612242797,
            "run_retail_pct": 0.5908993346211633,
            "run_mixed_pct": 0.26915647134578236,
            "run_instit_pct": 0.0549474136080704,
            "run_ambiguous_pct": 0.0849967804249839,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0849967804249839,
            "avg_feature_coverage": 0.8789117836445588,
            "high_confidence_pct": 0.6458467482292337,
            "medium_confidence_pct": 0.26915647134578236,
            "low_confidence_pct": 0.0849967804249839,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 4966,
            "n_runs": 3378,
            "retail_pct": 0.43254128070882,
            "mixed_pct": 0.27527184857027787,
            "instit_pct": 0.18344744260974627,
            "ambiguous_pct": 0.10873942811115586,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10873942811115586,
            "avg_trade_size": 2388.3777688280306,
            "avg_run_notional": 3511.1557134399054,
            "retail_qty_pct": 0.022452603902394022,
            "mixed_qty_pct": 0.12681627381336777,
            "instit_qty_pct": 0.5434002952165691,
            "ambiguous_qty_pct": 0.3073308270676692,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3073308270676692,
            "retail_notional_pct": 0.022507639525679968,
            "mixed_notional_pct": 0.1272717070954761,
            "instit_notional_pct": 0.5419302967687193,
            "ambiguous_notional_pct": 0.30829035661012466,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.30829035661012466,
            "run_retail_pct": 0.6343990526939017,
            "run_mixed_pct": 0.2285375962107756,
            "run_instit_pct": 0.05358200118413262,
            "run_ambiguous_pct": 0.08348134991119005,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.08348134991119005,
            "avg_feature_coverage": 0.8710923623445824,
            "high_confidence_pct": 0.6879810538780343,
            "medium_confidence_pct": 0.2285375962107756,
            "low_confidence_pct": 0.08348134991119005,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4495,
            "n_runs": 3123,
            "retail_pct": 0.41757508342602895,
            "mixed_pct": 0.3087875417130145,
            "instit_pct": 0.16418242491657398,
            "ambiguous_pct": 0.10945494994438265,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10945494994438265,
            "avg_trade_size": 2441.2621802002222,
            "avg_run_notional": 3513.7603266090296,
            "retail_qty_pct": 0.02029660911067243,
            "mixed_qty_pct": 0.22378120392813414,
            "instit_qty_pct": 0.4950148679377296,
            "ambiguous_qty_pct": 0.26090731902346387,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26090731902346387,
            "retail_notional_pct": 0.02029052150169224,
            "mixed_notional_pct": 0.22405836219497866,
            "instit_notional_pct": 0.49469167625000415,
            "ambiguous_notional_pct": 0.26095944005332494,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26095944005332494,
            "run_retail_pct": 0.5997438360550752,
            "run_mixed_pct": 0.2580851745116875,
            "run_instit_pct": 0.051232788984950366,
            "run_ambiguous_pct": 0.0909382004482869,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.0909382004482869,
            "avg_feature_coverage": 0.8714217098943322,
            "high_confidence_pct": 0.6509766250400256,
            "medium_confidence_pct": 0.2580851745116875,
            "low_confidence_pct": 0.0909382004482869,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9697,
            "n_runs": 5554,
            "retail_pct": 0.3459832938022069,
            "mixed_pct": 0.28740847684850984,
            "instit_pct": 0.2266680416623698,
            "ambiguous_pct": 0.1399401876869135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1399401876869135,
            "avg_trade_size": 2161.422347117665,
            "avg_run_notional": 3773.732895210659,
            "retail_qty_pct": 0.021510052309825424,
            "mixed_qty_pct": 0.16204071343039012,
            "instit_qty_pct": 0.5838469780046638,
            "ambiguous_qty_pct": 0.23260225625512068,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23260225625512068,
            "retail_notional_pct": 0.021441280576354783,
            "mixed_notional_pct": 0.1629021705745358,
            "instit_notional_pct": 0.583193341861762,
            "ambiguous_notional_pct": 0.23246320698734751,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23246320698734751,
            "run_retail_pct": 0.5966870723802665,
            "run_mixed_pct": 0.2511703276917537,
            "run_instit_pct": 0.045012603528988115,
            "run_ambiguous_pct": 0.10712999639899172,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10712999639899172,
            "avg_feature_coverage": 0.8779348217500899,
            "high_confidence_pct": 0.6415196254951386,
            "medium_confidence_pct": 0.25135037810586963,
            "low_confidence_pct": 0.10712999639899172,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 8271,
            "n_runs": 4562,
            "retail_pct": 0.33587232499093217,
            "mixed_pct": 0.2780800386893967,
            "instit_pct": 0.25486640067706445,
            "ambiguous_pct": 0.1311812356426067,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1311812356426067,
            "avg_trade_size": 1583.4353161649135,
            "avg_run_notional": 2870.800854888207,
            "retail_qty_pct": 0.024315653764279074,
            "mixed_qty_pct": 0.16991475029732458,
            "instit_qty_pct": 0.555032530806824,
            "ambiguous_qty_pct": 0.25073706513157235,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25073706513157235,
            "retail_notional_pct": 0.024360075007291017,
            "mixed_notional_pct": 0.17067781786156835,
            "instit_notional_pct": 0.5539449246859498,
            "ambiguous_notional_pct": 0.2510171824451908,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2510171824451908,
            "run_retail_pct": 0.6034633932485752,
            "run_mixed_pct": 0.2479175800087681,
            "run_instit_pct": 0.05830775975449364,
            "run_ambiguous_pct": 0.09031126698816308,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09031126698816308,
            "avg_feature_coverage": 0.8808855765015343,
            "high_confidence_pct": 0.6617711530030689,
            "medium_confidence_pct": 0.2479175800087681,
            "low_confidence_pct": 0.09031126698816308,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-05",
            "n_trades": 4084,
            "n_runs": 2622,
            "retail_pct": 0.3795298726738492,
            "mixed_pct": 0.28868756121449557,
            "instit_pct": 0.1848677766895201,
            "ambiguous_pct": 0.14691478942213515,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14691478942213515,
            "avg_trade_size": 1518.7153525954946,
            "avg_run_notional": 2365.5352784134247,
            "retail_qty_pct": 0.03288186606471031,
            "mixed_qty_pct": 0.17249274427604,
            "instit_qty_pct": 0.509104589917231,
            "ambiguous_qty_pct": 0.2855207997420187,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2855207997420187,
            "retail_notional_pct": 0.03284694628326124,
            "mixed_notional_pct": 0.1727082603948918,
            "instit_notional_pct": 0.5085528929895016,
            "ambiguous_notional_pct": 0.28589190033234535,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.28589190033234535,
            "run_retail_pct": 0.5804729214340199,
            "run_mixed_pct": 0.2654462242562929,
            "run_instit_pct": 0.04691075514874142,
            "run_ambiguous_pct": 0.10717009916094584,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10717009916094584,
            "avg_feature_coverage": 0.8736842105263157,
            "high_confidence_pct": 0.6273836765827613,
            "medium_confidence_pct": 0.2654462242562929,
            "low_confidence_pct": 0.10717009916094584,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.37823490378234903,
          "mixed_pct": 0.28377914559641215,
          "instit_pct": 0.21300597213005973,
          "ambiguous_pct": 0.12497997849117909,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12497997849117909,
          "retail_qty_pct": 0.02921721472611524,
          "mixed_qty_pct": 0.1741282096113276,
          "instit_qty_pct": 0.5409542455932328,
          "ambiguous_qty_pct": 0.2557003300693243,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2557003300693243,
          "retail_notional_pct": 0.0292603671007895,
          "mixed_notional_pct": 0.17475585713697575,
          "instit_notional_pct": 0.5398590221040651,
          "ambiguous_notional_pct": 0.2561247536581696,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2561247536581696,
          "run_retail_pct": 0.60253715381495,
          "run_mixed_pct": 0.2509127115831397,
          "run_instit_pct": 0.05417265921746506,
          "run_unclear_pct": 0.09237747538444518,
          "avg_trade_size": 1726.560453515777,
          "avg_run_notional": 2782.60146771398,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6566729357967327,
          "medium_confidence_pct": 0.2509495888188221,
          "low_confidence_pct": 0.09237747538444518,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8764889183906772,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4795489810696183,
          "mixed_pct": 0.047036309092789906,
          "instit_pct": 0.47178028343850215,
          "ambiguous_pct": 0.0016344263990896867,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016344263990896867,
          "retail_qty_pct": 0.2306317277130105,
          "mixed_qty_pct": 0.027068531327903343,
          "instit_qty_pct": 0.741863520325901,
          "ambiguous_qty_pct": 0.0004362206331851673,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004362206331851673,
          "retail_notional_pct": 0.23288643260197836,
          "mixed_notional_pct": 0.02714159765204808,
          "instit_notional_pct": 0.7395479907504073,
          "ambiguous_notional_pct": 0.00042397899556616893,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00042397899556616893,
          "run_retail_pct": 0.792269871619776,
          "run_mixed_pct": 0.03556795567175245,
          "run_instit_pct": 0.17079642564482772,
          "run_unclear_pct": 0.0013657470636438131,
          "avg_trade_size": 1459.594196751836,
          "avg_run_notional": 2752.9357903773366,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.722402153978226,
          "low_confidence_pct": 0.2775978460217739,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48485874273227464,
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
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.48621553884711777,
            "mixed_pct": 0.37092731829573933,
            "instit_pct": 0.05012531328320802,
            "ambiguous_pct": 0.09273182957393483,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09273182957393483,
            "retail_qty_pct": 0.04413102820746133,
            "mixed_qty_pct": 0.07688808007279345,
            "instit_qty_pct": 0.41628753412192904,
            "ambiguous_qty_pct": 0.4626933575978162,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4626933575978162,
            "retail_notional_pct": 0.044021382350182874,
            "mixed_notional_pct": 0.07680594749899823,
            "instit_notional_pct": 0.4155559155277809,
            "ambiguous_notional_pct": 0.46361675462303803,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.46361675462303803,
            "run_retail_pct": 0.5672514619883041,
            "run_mixed_pct": 0.30409356725146197,
            "run_instit_pct": 0.023391812865497075,
            "run_unclear_pct": 0.10526315789473684,
            "avg_trade_size": 734.9185463659148,
            "avg_run_notional": 857.4049707602339,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5906432748538012,
            "medium_confidence_pct": 0.30409356725146197,
            "low_confidence_pct": 0.10526315789473684,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8692982456140349,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.68,
            "mixed_pct": 0.0,
            "instit_pct": 0.32,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.2704095112285337,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7295904887714663,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.2703732662736065,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7296267337263935,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8607038123167156,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.13929618768328444,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 567.852,
            "avg_run_notional": 728.5491202346041,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.8607038123167156,
            "low_confidence_pct": 0.13929618768328444,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.47023460410557194,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.36195286195286197,
            "mixed_pct": 0.29660238751147844,
            "instit_pct": 0.1859504132231405,
            "ambiguous_pct": 0.15549433731251913,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15549433731251913,
            "retail_qty_pct": 0.030187242145350682,
            "mixed_qty_pct": 0.1938876547127896,
            "instit_qty_pct": 0.48946366232941924,
            "ambiguous_qty_pct": 0.2864614408124405,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2864614408124405,
            "retail_notional_pct": 0.030171038233581006,
            "mixed_notional_pct": 0.19403964443306712,
            "instit_notional_pct": 0.4890459657955937,
            "ambiguous_notional_pct": 0.2867433515377582,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2867433515377582,
            "run_retail_pct": 0.5871490007589173,
            "run_mixed_pct": 0.2608145712117379,
            "run_instit_pct": 0.04958259549709082,
            "run_unclear_pct": 0.10245383253225399,
            "avg_trade_size": 1605.8456535047444,
            "avg_run_notional": 2654.3373387300785,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6367315962560081,
            "medium_confidence_pct": 0.2608145712117379,
            "low_confidence_pct": 0.10245383253225399,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8750948646597518,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4903991762069174,
            "mixed_pct": 0.04482403537464413,
            "instit_pct": 0.4625961596704828,
            "ambiguous_pct": 0.0021806287479556605,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021806287479556605,
            "retail_qty_pct": 0.19600475584849225,
            "mixed_qty_pct": 0.010340242018004283,
            "instit_qty_pct": 0.7935017213023071,
            "ambiguous_qty_pct": 0.0001532808311963776,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0001532808311963776,
            "retail_notional_pct": 0.19670597434725867,
            "mixed_notional_pct": 0.010237214901072472,
            "instit_notional_pct": 0.7929005070067932,
            "ambiguous_notional_pct": 0.0001563037448756711,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0001563037448756711,
            "run_retail_pct": 0.7907098668344343,
            "run_mixed_pct": 0.03334381881094684,
            "run_instit_pct": 0.1740589283841879,
            "run_unclear_pct": 0.0018873859704309531,
            "avg_trade_size": 979.2985038463868,
            "avg_run_notional": 1695.2122260668973,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7374436405578274,
            "low_confidence_pct": 0.2625563594421726,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48287197231833917,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.35177352485447466,
            "mixed_pct": 0.2884124125800913,
            "instit_pct": 0.22249675447045522,
            "ambiguous_pct": 0.13731730809497886,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13731730809497886,
            "retail_qty_pct": 0.02355405572596919,
            "mixed_qty_pct": 0.18202878023182892,
            "instit_qty_pct": 0.5425894244949097,
            "ambiguous_qty_pct": 0.25182773954729226,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25182773954729226,
            "retail_notional_pct": 0.023517617095454125,
            "mixed_notional_pct": 0.18324107490198893,
            "instit_notional_pct": 0.5411493697932072,
            "ambiguous_notional_pct": 0.2520919382093497,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2520919382093497,
            "run_retail_pct": 0.5954548713169403,
            "run_mixed_pct": 0.2534231844576672,
            "run_instit_pct": 0.0498960498960499,
            "run_unclear_pct": 0.1012258943293426,
            "avg_trade_size": 1952.855354076804,
            "avg_run_notional": 3343.052046741702,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6452792314861281,
            "medium_confidence_pct": 0.2534948741845294,
            "low_confidence_pct": 0.1012258943293426,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8777726001863932,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4522632894267085,
            "mixed_pct": 0.04430748416918769,
            "instit_pct": 0.5013059245758094,
            "ambiguous_pct": 0.0021233018282944063,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021233018282944063,
            "retail_qty_pct": 0.21006394364424977,
            "mixed_qty_pct": 0.0239645059434856,
            "instit_qty_pct": 0.7654290369611223,
            "ambiguous_qty_pct": 0.0005425134511423327,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0005425134511423327,
            "retail_notional_pct": 0.21086769302608113,
            "mixed_notional_pct": 0.024190920854187094,
            "instit_notional_pct": 0.7644059172871076,
            "ambiguous_notional_pct": 0.0005354688326242135,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0005354688326242135,
            "run_retail_pct": 0.7838654333880352,
            "run_mixed_pct": 0.034797851708190365,
            "run_instit_pct": 0.17943458153065792,
            "run_unclear_pct": 0.001902133373116515,
            "avg_trade_size": 1379.5957552753716,
            "avg_run_notional": 2738.352472773385,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7087498135163359,
            "low_confidence_pct": 0.291250186483664,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4856146501566464,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.37823490378234903,
            "mixed_pct": 0.28377914559641215,
            "instit_pct": 0.21300597213005973,
            "ambiguous_pct": 0.12497997849117909,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12497997849117909,
            "retail_qty_pct": 0.02921721472611524,
            "mixed_qty_pct": 0.1741282096113276,
            "instit_qty_pct": 0.5409542455932328,
            "ambiguous_qty_pct": 0.2557003300693243,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2557003300693243,
            "retail_notional_pct": 0.0292603671007895,
            "mixed_notional_pct": 0.17475585713697575,
            "instit_notional_pct": 0.5398590221040651,
            "ambiguous_notional_pct": 0.2561247536581696,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2561247536581696,
            "run_retail_pct": 0.60253715381495,
            "run_mixed_pct": 0.2509127115831397,
            "run_instit_pct": 0.05417265921746506,
            "run_unclear_pct": 0.09237747538444518,
            "avg_trade_size": 1726.560453515777,
            "avg_run_notional": 2782.60146771398,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6566729357967327,
            "medium_confidence_pct": 0.2509495888188221,
            "low_confidence_pct": 0.09237747538444518,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8764889183906772,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4795489810696183,
            "mixed_pct": 0.047036309092789906,
            "instit_pct": 0.47178028343850215,
            "ambiguous_pct": 0.0016344263990896867,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016344263990896867,
            "retail_qty_pct": 0.2306317277130105,
            "mixed_qty_pct": 0.027068531327903343,
            "instit_qty_pct": 0.741863520325901,
            "ambiguous_qty_pct": 0.0004362206331851673,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004362206331851673,
            "retail_notional_pct": 0.23288643260197836,
            "mixed_notional_pct": 0.02714159765204808,
            "instit_notional_pct": 0.7395479907504073,
            "ambiguous_notional_pct": 0.00042397899556616893,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00042397899556616893,
            "run_retail_pct": 0.792269871619776,
            "run_mixed_pct": 0.03556795567175245,
            "run_instit_pct": 0.17079642564482772,
            "run_unclear_pct": 0.0013657470636438131,
            "avg_trade_size": 1459.594196751836,
            "avg_run_notional": 2752.9357903773366,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.722402153978226,
            "low_confidence_pct": 0.2775978460217739,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48485874273227464,
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
          "trade_id": "BMLL-407",
          "timestamp": "2026-05-20T08:59:52.783500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-406",
          "timestamp": "2026-05-20T08:59:52.239800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48229,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-405",
          "timestamp": "2026-05-20T08:59:28.026200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48228,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-404",
          "timestamp": "2026-05-20T08:59:24.484400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-403",
          "timestamp": "2026-05-20T08:59:21.788400",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-402",
          "timestamp": "2026-05-20T08:59:21.788400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-401",
          "timestamp": "2026-05-20T08:59:09.956500",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-400",
          "timestamp": "2026-05-20T08:59:04.124600",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48226,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-399",
          "timestamp": "2026-05-20T08:59:01.524200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48226,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-398",
          "timestamp": "2026-05-20T08:59:00.459400",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48226,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-397",
          "timestamp": "2026-05-20T08:58:57.073600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48225,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-396",
          "timestamp": "2026-05-20T08:58:37.523700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48224,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-395",
          "timestamp": "2026-05-20T08:58:25.701400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48224,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-394",
          "timestamp": "2026-05-20T08:58:09.987700",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48223,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-393",
          "timestamp": "2026-05-20T08:58:04.796700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48223,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-392",
          "timestamp": "2026-05-20T08:57:59.514100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48223,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-391",
          "timestamp": "2026-05-20T08:57:38.339900",
          "price": 0.67,
          "size": 2500.0,
          "notional": 1675.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48222,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-390",
          "timestamp": "2026-05-20T08:57:37.796800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-389",
          "timestamp": "2026-05-20T08:57:31.071800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-388",
          "timestamp": "2026-05-20T08:57:10.233000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48220,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-387",
          "timestamp": "2026-05-20T08:56:46.679200",
          "price": 0.67,
          "size": 5600.0,
          "notional": 3752.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48219,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-386",
          "timestamp": "2026-05-20T08:56:36.099900",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48218,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-385",
          "timestamp": "2026-05-20T08:56:34.803700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48218,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-384",
          "timestamp": "2026-05-20T08:56:27.414400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48218,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-383",
          "timestamp": "2026-05-20T08:56:10.673800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48217,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-382",
          "timestamp": "2026-05-20T08:55:28.365500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48216,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-381",
          "timestamp": "2026-05-20T08:55:07.217000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-380",
          "timestamp": "2026-05-20T08:55:03.871200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48215,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-379",
          "timestamp": "2026-05-20T08:54:12.574900",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48214,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-378",
          "timestamp": "2026-05-20T08:54:06.785900",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48214,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
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
      "total_trades": 43702,
      "price_moving_trades": 10434,
      "pct_price_moving": 23.875337513157294,
      "all_movers": {
        "count": 10434,
        "avg_size": 1484.845600920069,
        "median_size": 137.0,
        "retail_count": 5499,
        "mixed_count": 3083,
        "institutional_count": 665,
        "ambiguous_count": 1187,
        "unobservable_count": 0,
        "retail_pct": 52.702702702702695,
        "mixed_pct": 29.547632739122097,
        "instit_pct": 6.373394671267012,
        "unclear_pct": 11.376269886908185
      },
      "positive_movers": {
        "count": 5211,
        "avg_size": 1469.8150067165611,
        "median_size": 137.0,
        "retail_count": 2636,
        "mixed_count": 1568,
        "institutional_count": 339,
        "ambiguous_count": 668,
        "unobservable_count": 0,
        "retail_pct": 50.585300326232975,
        "mixed_pct": 30.090193820763766,
        "instit_pct": 6.505469199769717,
        "unclear_pct": 12.819036653233546
      },
      "negative_movers": {
        "count": 5223,
        "avg_size": 1499.8416618801455,
        "median_size": 137.0,
        "retail_count": 2863,
        "mixed_count": 1515,
        "institutional_count": 326,
        "ambiguous_count": 519,
        "unobservable_count": 0,
        "retail_pct": 54.81524028336205,
        "mixed_pct": 29.00631820792648,
        "instit_pct": 6.241623587976259,
        "unclear_pct": 9.93681792073521
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "Sasseur Reit",
      "mapping": {
        "ticker_to_security": "Sasseur Reit",
        "confidence": "high"
      },
      "coverage": {
        "n_days_short_data": 100,
        "window_days": 126
      },
      "periods": {
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.052104467876372046,
            "max_short_ratio": 0.18750749310634215,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0777878417076021,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06494764764152247,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.15474460065189843,
        "interpretation": "Moderate negative - shorts somewhat predict drops"
      },
      "peaks": [
        {
          "date": "2026-03-25",
          "short_ratio": 0.36836158192090396,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-27",
          "short_ratio": 0.26441708229426436,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-24",
          "short_ratio": 0.2476085356880059,
          "return_pct": 0.7936507936507908
        },
        {
          "date": "2025-12-02",
          "short_ratio": 0.23535638673253353,
          "return_pct": 0.0
        },
        {
          "date": "2026-03-09",
          "short_ratio": 0.20926869577193224,
          "return_pct": -0.7407407407407418
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.05707262477865445
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.05707262477865445,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": -31.230499540897032
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 270.35362296811655
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.01955998308759306,
            "change_pct": -86.54362251882017
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.016982764014565978,
            "change_pct": -13.175978023528142
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.07871316646993508,
            "change_pct": 363.4885487569835
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.0668994704724344,
            "change_pct": -15.008538631225035
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.06470348255473901,
            "change_pct": -3.2825191323453518
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.06966288440475607,
            "change_pct": 7.664814402874552
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.05367218265667169,
            "change_pct": -22.95440661798473
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 0.023438723514618575,
            "change_pct": -56.329848434615435
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 0.02462641566210631,
            "change_pct": 5.067221970287669
          }
        ],
        "interpretation": "Shorts building significantly (+45% MoM) | YoY: +132% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-20",
            "short_ratio": 0.10338499184339314,
            "short_vol": 50700,
            "total_vol": 490400,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-05-19",
            "short_ratio": 0.04864864864864865,
            "short_vol": 11700,
            "total_vol": 240500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-05-18",
            "short_ratio": 0.17024643906850553,
            "short_vol": 150600,
            "total_vol": 884600,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.18750749310634215,
            "short_vol": 156400,
            "total_vol": 834100,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-05-14",
            "short_ratio": 0.022219765642272828,
            "short_vol": 20100,
            "total_vol": 904600,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.08621014902848519,
            "short_vol": 45700,
            "total_vol": 530100,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.006099110546378653,
            "short_vol": 2400,
            "total_vol": 393500,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.03959219414560921,
            "short_vol": 63300,
            "total_vol": 1598800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.008327781479013991,
            "short_vol": 5000,
            "total_vol": 600400,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.023456589021013195,
            "short_vol": 14400,
            "total_vol": 613900,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.010781990521327015,
            "short_vol": 9100,
            "total_vol": 844000,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.004997284084736557,
            "short_vol": 9200,
            "total_vol": 1841000,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.03047168498678169,
            "short_vol": 21900,
            "total_vol": 718700,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.11554982817869416,
            "short_vol": 107600,
            "total_vol": 931200,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.05085158150851581,
            "short_vol": 20900,
            "total_vol": 411000,
            "close": 0.665,
            "return": 0.007575757575757569
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.1365038753856573,
            "short_vol": 181400,
            "total_vol": 1328900,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.03616133518776078,
            "short_vol": 13000,
            "total_vol": 359500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.028525382755842064,
            "short_vol": 17700,
            "total_vol": 620500,
            "close": 0.66,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.001321003963011889,
            "short_vol": 800,
            "total_vol": 605600,
            "close": 0.66,
            "return": -0.014925373134328401
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0046252848907360235,
            "short_vol": 6900,
            "total_vol": 1491800,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.023340669523919843,
            "short_vol": 40300,
            "total_vol": 1726600,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0030158914279085954,
            "short_vol": 2600,
            "total_vol": 862100,
            "close": 0.665,
            "return": -0.007462686567164201
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.006643180674383493,
            "short_vol": 6600,
            "total_vol": 993500,
            "close": 0.67,
            "return": 0.015151515151515138
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.008671713695801789,
            "short_vol": 18900,
            "total_vol": 2179500,
            "close": 0.66,
            "return": 0.007633587786259444
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.04148936170212766,
            "short_vol": 35100,
            "total_vol": 846000,
            "close": 0.655,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.05741664069803677,
            "short_vol": 73700,
            "total_vol": 1283600,
            "close": 0.655,
            "return": 0.015503875968992276
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.016528313074414467,
            "short_vol": 22300,
            "total_vol": 1349200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.00303905181583346,
            "short_vol": 4000,
            "total_vol": 1316200,
            "close": 0.645,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.010373267579287476,
            "short_vol": 12200,
            "total_vol": 1176100,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.043985045084671215,
            "short_vol": 20000,
            "total_vol": 454700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.1613056945437217,
            "short_vol": 203100,
            "total_vol": 1259100,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.05267156242086604,
            "short_vol": 41600,
            "total_vol": 789800,
            "close": 0.635,
            "return": -0.0078125
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.01472584426802682,
            "short_vol": 35800,
            "total_vol": 2431100,
            "close": 0.64,
            "return": 0.007874015748031482
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.10057279872119355,
            "short_vol": 151000,
            "total_vol": 1501400,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.06768748912476075,
            "short_vol": 38900,
            "total_vol": 574700,
            "close": 0.63,
            "return": -0.007874015748031482
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.26441708229426436,
            "short_vol": 339300,
            "total_vol": 1283200,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.1595657756507529,
            "short_vol": 136700,
            "total_vol": 856700,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.36836158192090396,
            "short_vol": 97800,
            "total_vol": 265500,
            "close": 0.635,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.2476085356880059,
            "short_vol": 134600,
            "total_vol": 543600,
            "close": 0.635,
            "return": 0.007936507936507908
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.18642151319994102,
            "short_vol": 379200,
            "total_vol": 2034100,
            "close": 0.63,
            "return": -0.015625
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.1987347631538343,
            "short_vol": 386400,
            "total_vol": 1944300,
            "close": 0.64,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.17494422918868147,
            "short_vol": 149000,
            "total_vol": 851700,
            "close": 0.64,
            "return": -0.015384615384615441
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.11682385153635534,
            "short_vol": 192000,
            "total_vol": 1643500,
            "close": 0.65,
            "return": 0.007751937984496138
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.13784764207980654,
            "short_vol": 114000,
            "total_vol": 827000,
            "close": 0.645,
            "return": 0.015748031496062964
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.18052071005917159,
            "short_vol": 762700,
            "total_vol": 4225000,
            "close": 0.635,
            "return": -0.06617647058823539
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.17986120035985093,
            "short_vol": 559800,
            "total_vol": 3112400,
            "close": 0.68,
            "return": 0.007407407407407307
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.16983923463852452,
            "short_vol": 172200,
            "total_vol": 1013900,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.11613756613756614,
            "short_vol": 131700,
            "total_vol": 1134000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.1979909267660402,
            "short_vol": 183300,
            "total_vol": 925800,
            "close": 0.68,
            "return": 0.014925373134328401
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.20926869577193224,
            "short_vol": 607800,
            "total_vol": 2904400,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.02449013707790037,
            "short_vol": 29300,
            "total_vol": 1196400,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0008945998698763826,
            "short_vol": 1100,
            "total_vol": 1229600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0033744990977901718,
            "short_vol": 14400,
            "total_vol": 4267300,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.03416203059805285,
            "short_vol": 39300,
            "total_vol": 1150400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.05836125856291332,
            "short_vol": 196800,
            "total_vol": 3372100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0067413905133203375,
            "short_vol": 16600,
            "total_vol": 2462400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0060887923385246154,
            "short_vol": 39800,
            "total_vol": 6536600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0008496176720475786,
            "short_vol": 800,
            "total_vol": 941600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 382700,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1809900,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.09221772379667116,
            "short_vol": 20500,
            "total_vol": 222300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.04595755760968624,
            "short_vol": 105900,
            "total_vol": 2304300,
            "close": 0.69,
            "return": 0.014705882352941124
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.06251680559290132,
            "short_vol": 46500,
            "total_vol": 743800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.009060706735125339,
            "short_vol": 18000,
            "total_vol": 1986600,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.022450728363324766,
            "short_vol": 13100,
            "total_vol": 583500,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.006556033599672198,
            "short_vol": 3200,
            "total_vol": 488100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 726400,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.002091020910209102,
            "short_vol": 1700,
            "total_vol": 813000,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.030951223464592448,
            "short_vol": 19100,
            "total_vol": 617100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.01563966218329684,
            "short_vol": 10000,
            "total_vol": 639400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 775000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.025183823529411765,
            "short_vol": 13700,
            "total_vol": 544000,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.025774609267891418,
            "short_vol": 9400,
            "total_vol": 364700,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.004020369874028411,
            "short_vol": 4500,
            "total_vol": 1119300,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.03738632536207477,
            "short_vol": 11100,
            "total_vol": 296900,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0007983273141988215,
            "short_vol": 2100,
            "total_vol": 2630500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.025203641590800192,
            "short_vol": 26300,
            "total_vol": 1043500,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.016331658291457288,
            "short_vol": 3900,
            "total_vol": 238800,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.09597292724196277,
            "short_vol": 141800,
            "total_vol": 1477500,
            "close": 0.685,
            "return": -0.007246376811594013
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285400,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.018341650418057437,
            "short_vol": 55500,
            "total_vol": 3025900,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.043049733771383256,
            "short_vol": 38000,
            "total_vol": 882700,
            "close": 0.69,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.012526652452025586,
            "short_vol": 14100,
            "total_vol": 1125600,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.05860180641490648,
            "short_vol": 82400,
            "total_vol": 1406100,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.008310957678046285,
            "short_vol": 6500,
            "total_vol": 782100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0022742213456994117,
            "short_vol": 12800,
            "total_vol": 5628300,
            "close": 0.68,
            "return": -0.014492753623188248
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 540300,
            "close": 0.69,
            "return": 0.007299270072992581
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 319100,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0015347885402455662,
            "short_vol": 900,
            "total_vol": 586400,
            "close": 0.68,
            "return": -0.007299270072992692
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.007297551789077213,
            "short_vol": 6200,
            "total_vol": 849600,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 772400,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0003454231433506045,
            "short_vol": 200,
            "total_vol": 579000,
            "close": 0.685,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0045684058667949026,
            "short_vol": 3800,
            "total_vol": 831800,
            "close": 0.685,
            "return": 0.007352941176470562
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.020073603211776515,
            "short_vol": 6000,
            "total_vol": 298900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.00038550501156515033,
            "short_vol": 200,
            "total_vol": 518800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0137524557956778,
            "short_vol": 7700,
            "total_vol": 559900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0002644802962179318,
            "short_vol": 100,
            "total_vol": 378100,
            "close": 0.68,
            "return": 0.007407407407407307
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.0777878417076021,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.062036565888541145,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        }
      ]
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
          "opening": 0.019838751239080424,
          "continuous": 0.9366881556679659,
          "closing": 0.04310212344142835,
          "auctions": 0.06331184433203409,
          "other": 0.0
        },
        "1M": {
          "opening": 0.025580133320534854,
          "continuous": 0.8896205773740012,
          "closing": 0.07447839916023487,
          "auctions": 0.11037942262599873,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04527745772847054,
          "continuous": 0.8751331573872789,
          "closing": 0.06680081261345343,
          "auctions": 0.12486684261272105,
          "other": 0.0
        },
        "6M": {
          "opening": 0.039185935782684554,
          "continuous": 0.8652560313628349,
          "closing": 0.08379046172483975,
          "auctions": 0.1347439686371651,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.16586607567667058,
        "1M": 0.21978629531731683,
        "3M": 0.21808099984095428,
        "6M": 0.23107487530484888
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0195
        },
        {
          "time": "09:00",
          "avg_share": 0.1108
        },
        {
          "time": "09:30",
          "avg_share": 0.0414
        },
        {
          "time": "10:00",
          "avg_share": 0.0455
        },
        {
          "time": "10:30",
          "avg_share": 0.0329
        },
        {
          "time": "11:00",
          "avg_share": 0.0295
        },
        {
          "time": "11:30",
          "avg_share": 0.0364
        },
        {
          "time": "12:00",
          "avg_share": 0.2347
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
        },
        {
          "time": "13:00",
          "avg_share": 0.0212
        },
        {
          "time": "13:30",
          "avg_share": 0.0192
        },
        {
          "time": "14:00",
          "avg_share": 0.0316
        },
        {
          "time": "14:30",
          "avg_share": 0.0315
        },
        {
          "time": "15:00",
          "avg_share": 0.0325
        },
        {
          "time": "15:30",
          "avg_share": 0.0491
        },
        {
          "time": "16:00",
          "avg_share": 0.043
        },
        {
          "time": "16:30",
          "avg_share": 0.0953
        },
        {
          "time": "17:00",
          "avg_share": 0.1165
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.879374490713698,
          "hhi": 0.2234733601153234,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.979900918597904,
          "hhi": 0.17092624908909174,
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
