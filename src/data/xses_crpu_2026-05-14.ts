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
      "marketCap": 838016708.0200001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1135442437.8,
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
    "asof_date": "2026-05-14",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "838.0M",
    "market_cap_category": "small",
    "universe_total": 557,
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
          "score_pca": 77.55834829443447,
          "score_pca_percentile": 77.55834829443447,
          "rank_pca": 126,
          "total": 557,
          "adv_notional_sgd": 610605.0,
          "adv_volume_shares": 904600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019791677562828233,
          "votes": 402.0,
          "trades": 402.0,
          "spread_pct": 0.0074353121655810666,
          "spread_ticks": 1.0,
          "amihud": 1.2221790793007083e-08,
          "volatility": 0.07088221175209525
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5227530850212775,
          "loadings": {
            "log_adv": 0.547946254880704,
            "log_trades": 0.5034196611324426,
            "log_turnover": 0.5142651878673885,
            "neg_spread": 0.3681858634430157,
            "neg_amihud": 0.04363022149780936,
            "neg_vol": -0.2106903814320915
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
          "peer_median_score_pca": 82.9443447037702,
          "peer_median_trades": 1561.0,
          "peer_median_volatility": 0.21424752335923616,
          "peer_median_spread_pct": 0.00759949295938324,
          "peer_median_spread_ticks": 1.0109845402766477,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0010058591448304072,
          "target_vs_peer": {
            "score_pca_delta": -5.39,
            "adv_delta_pct": -24.4,
            "trades_delta_pct": -74.25,
            "volatility_delta_pct": 66.92,
            "spread_pct_delta_pct": 2.16,
            "spread_ticks_delta_pct": -1.09,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 96.76
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 77.55834829443447,
            "rank_pca": 126,
            "adv": 610605.0,
            "trades": 402.0,
            "volatility": 0.07088221175209525,
            "spread_pct": 0.0074353121655810666,
            "spread_ticks": 1.0,
            "amihud": 1.2221790793007083e-08,
            "turnover_ratio": 0.0019791677562828233,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 82.9443447037702,
            "rank_pca": 96,
            "adv": 808174.5,
            "trades": 1561.0,
            "volatility": 0.21424752335923616,
            "spread_pct": 0.00759949295938324,
            "spread_ticks": 1.0109845402766477,
            "amihud": 0.0,
            "turnover_ratio": 0.0010058591448304072,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2761300460653999,
              "median": 0.1305994883757059,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.9891535904428602,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4343714.224729807,
              "median": 25194.0,
              "min": 0.0,
              "max": 432605285.0,
              "p5": 0.0,
              "p95": 17645718.799999975,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10128100731613544,
              "median": 0.028886503366839098,
              "min": 0.0002502086688440683,
              "max": 1.6923076923076923,
              "p5": 0.003167164232101539,
              "p95": 0.4963829851134757,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008721905758425423,
              "median": 0.00045833446415375343,
              "min": 0.0,
              "max": 1.9379078505042515,
              "p5": 0.0,
              "p95": 0.022773327137361566,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00016879118547933418,
              "median": 2.108238679081148e-08,
              "min": 0.0,
              "max": 0.04166666666666666,
              "p5": 0.0,
              "p95": 4.58803147756635e-05,
              "count": 418
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 656.8456014362657,
              "median": 10.0,
              "min": 0.0,
              "max": 15762.0,
              "p5": 0.0,
              "p95": 3837.3999999999705,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2596404913933309,
              "median": 0.1300552312768112,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.024808774113233338,
              "p95": 0.9024604854867864,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9630547.396142002,
              "median": 709389.75,
              "min": 0.0,
              "max": 69289026.0,
              "p5": 318.08000000000004,
              "p95": 46880815.699999966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05255611759071662,
              "median": 0.008335822201042294,
              "min": 0.004437433895370233,
              "max": 0.24442082890541975,
              "p5": 0.004455325328293755,
              "p95": 0.20554020545518945,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020512203905930933,
              "median": 0.0011192546349689538,
              "min": 0.0,
              "max": 0.008605527448650745,
              "p5": 1.2544856993954577e-05,
              "p95": 0.006699000285862848,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2459337727985483e-05,
              "median": 6.32995607743224e-11,
              "min": 0.0,
              "max": 0.00015719315895372225,
              "p5": 0.0,
              "p95": 0.00011003887780484337,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1447.625,
              "median": 591.5,
              "min": 0.0,
              "max": 5326.0,
              "p5": 12.250000000000002,
              "p95": 4651.199999999999,
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
              "mean": 1561.0,
              "median": 1561.0,
              "min": 1561.0,
              "max": 1561.0,
              "p5": 1561.0,
              "p95": 1561.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21424752335923616,
              "median": 0.21424752335923616,
              "min": 0.21424752335923616,
              "max": 0.21424752335923616,
              "p5": 0.21424752335923616,
              "p95": 0.21424752335923616,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00759949295938324,
              "median": 0.00759949295938324,
              "min": 0.00759949295938324,
              "max": 0.00759949295938324,
              "p5": 0.00759949295938324,
              "p95": 0.00759949295938324,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0109845402766477,
              "median": 1.0109845402766477,
              "min": 1.0109845402766477,
              "max": 1.0109845402766477,
              "p5": 1.0109845402766477,
              "p95": 1.0109845402766477,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0,
              "median": 0.0,
              "min": 0.0,
              "max": 0.0,
              "p5": 0.0,
              "p95": 0.0,
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
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.00746268656716409,
            "market": -0.0016027345530054138,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.009065421120169503,
            "vs_sector": 0.00746268656716409,
            "vs_peers": 0.00746268656716409
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 80.96947935368043,
          "score_pca_percentile": 80.96947935368043,
          "rank_pca": 107,
          "total": 557,
          "adv_notional_sgd": 561260.0,
          "adv_volume_shares": 844000.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018465814573321942,
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.007547169811320759,
          "spread_ticks": 1.0006325110689438,
          "amihud": 1.2221790793007083e-08,
          "volatility": 0.12278240189482978
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5298188435876381,
          "loadings": {
            "log_adv": 0.5371100655755844,
            "log_trades": 0.4887188249415284,
            "log_turnover": 0.4875302267770856,
            "neg_spread": 0.4153501120941171,
            "neg_amihud": 0.17887013166220547,
            "neg_vol": 0.17455866053105792
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
          "peer_median_adv": 746861.5,
          "peer_median_score_pca": 83.48294434470377,
          "peer_median_trades": 767.0,
          "peer_median_volatility": 0.14521967718487838,
          "peer_median_spread_pct": 0.007467064020482989,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 8.693788528045263e-09,
          "peer_median_turnover_ratio": 0.0009295485934000085,
          "target_vs_peer": {
            "score_pca_delta": -2.51,
            "adv_delta_pct": -24.9,
            "trades_delta_pct": -55.28,
            "volatility_delta_pct": 15.45,
            "spread_pct_delta_pct": -1.07,
            "spread_ticks_delta_pct": -0.75,
            "amihud_delta_pct": -40.58,
            "turnover_ratio_delta_pct": 98.65
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 80.96947935368043,
            "rank_pca": 107,
            "adv": 561260.0,
            "trades": 343.0,
            "volatility": 0.12278240189482978,
            "spread_pct": 0.007547169811320759,
            "spread_ticks": 1.0006325110689438,
            "amihud": 1.2221790793007083e-08,
            "turnover_ratio": 0.0018465814573321942,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.48294434470377,
            "rank_pca": 93,
            "adv": 746861.5,
            "trades": 767.0,
            "volatility": 0.14521967718487838,
            "spread_pct": 0.007467064020482989,
            "spread_ticks": 1.0081615120274914,
            "amihud": 8.693788528045263e-09,
            "turnover_ratio": 0.0009295485934000085,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6292467158514021,
              "median": 0.40184911398028356,
              "min": 0.0,
              "max": 5.558776843874919,
              "p5": 0.07730711202459883,
              "p95": 1.8466915740460033,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3469068.5016560317,
              "median": 16296.0,
              "min": 0.0,
              "max": 312928590.0,
              "p5": 0.0,
              "p95": 14827633.399999956,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10095262763778023,
              "median": 0.029205841168233673,
              "min": 0.00027741427863602243,
              "max": 1.2847682119205297,
              "p5": 0.0033085084347113524,
              "p95": 0.49078320294937416,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547849135086362,
              "median": 0.00035556556271540245,
              "min": 0.0,
              "max": 1.9379078505042515,
              "p5": 0.0,
              "p95": 0.014135967236243059,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.835583191649715e-05,
              "median": 8.665573123725239e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.8475101666932894e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 509.4721723518851,
              "median": 8.0,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 3001.3999999999796,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3069263782186353,
              "median": 0.14418521989892225,
              "min": 0.10028230795899903,
              "max": 1.4802268165965071,
              "p5": 0.10726064844548162,
              "p95": 1.0254450928160221,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11018703.762731133,
              "median": 602835.25,
              "min": 0.0,
              "max": 75572756.0,
              "p5": 4886.525000000001,
              "p95": 52787664.99999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03925088432697305,
              "median": 0.008298471783488437,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004310572679192477,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024575017104590743,
              "median": 0.0008903556408160668,
              "min": 0.0,
              "max": 0.008886751071857197,
              "p5": 0.00012090239922811311,
              "p95": 0.007936322460068113,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0932388649640943e-06,
              "median": 4.635481187952865e-09,
              "min": 0.0,
              "max": 8.707767328456976e-06,
              "p5": 0.0,
              "p95": 5.665853808074e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1274.625,
              "median": 294.0,
              "min": 0.0,
              "max": 6474.0,
              "p5": 8.4,
              "p95": 5010.649999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 746861.5,
              "median": 746861.5,
              "min": 746861.5,
              "max": 746861.5,
              "p5": 746861.5,
              "p95": 746861.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 767.0,
              "median": 767.0,
              "min": 767.0,
              "max": 767.0,
              "p5": 767.0,
              "p95": 767.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14521967718487838,
              "median": 0.14521967718487838,
              "min": 0.14521967718487838,
              "max": 0.14521967718487838,
              "p5": 0.14521967718487838,
              "p95": 0.14521967718487838,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007467064020482989,
              "median": 0.007467064020482989,
              "min": 0.007467064020482989,
              "max": 0.007467064020482989,
              "p5": 0.007467064020482989,
              "p95": 0.007467064020482989,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0081615120274914,
              "median": 1.0081615120274914,
              "min": 1.0081615120274914,
              "max": 1.0081615120274914,
              "p5": 1.0081615120274914,
              "p95": 1.0081615120274914,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.693788528045263e-09,
              "median": 8.693788528045263e-09,
              "min": 8.693788528045263e-09,
              "max": 8.693788528045263e-09,
              "p5": 8.693788528045263e-09,
              "p95": 8.693788528045263e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009295485934000085,
              "median": 0.0009295485934000085,
              "min": 0.0009295485934000085,
              "max": 0.0009295485934000085,
              "p5": 0.0009295485934000085,
              "p95": 0.0009295485934000085,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.030534351145037997,
            "market": -0.0023224604390442716,
            "sector": 0.011731075694589421,
            "peers": -0.007462686567163979,
            "vs_market": 0.03285681158408227,
            "vs_sector": 0.018803275450448576,
            "vs_peers": 0.037997037712201975
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.84201077199282,
          "score_pca_percentile": 83.84201077199282,
          "rank_pca": 91,
          "total": 557,
          "adv_notional_sgd": 684382.5,
          "adv_volume_shares": 1013900.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022183044307927864,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.1805830957307274
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5603097453816666,
          "loadings": {
            "log_adv": 0.5187355651115553,
            "log_trades": 0.46693589083924003,
            "log_turnover": 0.4750605851760777,
            "neg_spread": 0.415607412556328,
            "neg_amihud": 0.24375257362156216,
            "neg_vol": 0.23464204488501922
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
          "peer_median_adv": 1204346.0,
          "peer_median_score_pca": 85.99640933572711,
          "peer_median_trades": 848.0,
          "peer_median_volatility": 0.19987962114928196,
          "peer_median_spread_pct": 0.007535129050713284,
          "peer_median_spread_ticks": 1.0052830188679245,
          "peer_median_amihud": 6.59491400232141e-09,
          "peer_median_turnover_ratio": 0.0014069447546261903,
          "target_vs_peer": {
            "score_pca_delta": -2.15,
            "adv_delta_pct": -43.2,
            "trades_delta_pct": -52.12,
            "volatility_delta_pct": 9.65,
            "spread_pct_delta_pct": -1.77,
            "spread_ticks_delta_pct": -0.53,
            "amihud_delta_pct": 7.57,
            "turnover_ratio_delta_pct": 57.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.84201077199282,
            "rank_pca": 91,
            "adv": 684382.5,
            "trades": 406.0,
            "volatility": 0.1805830957307274,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.0022183044307927864,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.99640933572711,
            "rank_pca": 79,
            "adv": 1204346.0,
            "trades": 848.0,
            "volatility": 0.19987962114928196,
            "spread_pct": 0.007535129050713284,
            "spread_ticks": 1.0052830188679245,
            "amihud": 6.59491400232141e-09,
            "turnover_ratio": 0.0014069447546261903,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6878670155246315,
              "median": 0.482979446750165,
              "min": 0.0,
              "max": 7.249026630988066,
              "p5": 0.15862109294690366,
              "p95": 2.2216886585700646,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3380819.646512347,
              "median": 11970.0,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 13186323.999999953,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10047319259566122,
              "median": 0.030981067125645443,
              "min": 0.0002742695631217783,
              "max": 1.3378196500672945,
              "p5": 0.0035508696516023982,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006541844883717037,
              "median": 0.0002797779694726035,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011825604431881466,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2193733857074052e-05,
              "median": 1.4914138535550758e-07,
              "min": 0.0,
              "max": 0.0005935746352413022,
              "p5": 0.0,
              "p95": 3.5075538625651146e-05,
              "count": 552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 485.5278276481149,
              "median": 6.0,
              "min": 0.0,
              "max": 11430.0,
              "p5": 0.0,
              "p95": 2841.999999999995,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3404792906788658,
              "median": 0.19295543630155917,
              "min": 0.1305753574672915,
              "max": 1.3728741687735946,
              "p5": 0.14807806585949407,
              "p95": 0.9848733274534864,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11051843.750231134,
              "median": 736213.5,
              "min": 0.0,
              "max": 75024274.0,
              "p5": 3987.69,
              "p95": 52463326.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03823897371951976,
              "median": 0.008359030192893722,
              "min": 0.004294802335504355,
              "max": 0.15384615384615383,
              "p5": 0.004372261771919128,
              "p95": 0.13808487486398255,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025853584986197686,
              "median": 0.0012239124345953252,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 0.00012090239922811311,
              "p95": 0.007918369281116699,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.575760160173976e-07,
              "median": 6.210672394746991e-09,
              "min": 0.0,
              "max": 7.609262899160584e-06,
              "p5": 3.163899592968386e-11,
              "p95": 4.957102374177068e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1230.875,
              "median": 446.0,
              "min": 0.0,
              "max": 6075.0,
              "p5": 6.300000000000001,
              "p95": 4640.699999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1204346.0,
              "median": 1204346.0,
              "min": 1204346.0,
              "max": 1204346.0,
              "p5": 1204346.0,
              "p95": 1204346.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 848.0,
              "median": 848.0,
              "min": 848.0,
              "max": 848.0,
              "p5": 848.0,
              "p95": 848.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.19987962114928196,
              "median": 0.19987962114928196,
              "min": 0.19987962114928196,
              "max": 0.19987962114928196,
              "p5": 0.19987962114928196,
              "p95": 0.19987962114928196,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007535129050713284,
              "median": 0.007535129050713284,
              "min": 0.007535129050713284,
              "max": 0.007535129050713284,
              "p5": 0.007535129050713284,
              "p95": 0.007535129050713284,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0052830188679245,
              "median": 1.0052830188679245,
              "min": 1.0052830188679245,
              "max": 1.0052830188679245,
              "p5": 1.0052830188679245,
              "p95": 1.0052830188679245,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.59491400232141e-09,
              "median": 6.59491400232141e-09,
              "min": 6.59491400232141e-09,
              "max": 6.59491400232141e-09,
              "p5": 6.59491400232141e-09,
              "p95": 6.59491400232141e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014069447546261903,
              "median": 0.0014069447546261903,
              "min": 0.0014069447546261903,
              "max": 0.0014069447546261903,
              "p5": 0.0014069447546261903,
              "p95": 0.0014069447546261903,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.014598540145985273,
            "market": 0.006383631244649468,
            "sector": -0.015448111012800969,
            "peers": -0.13071895424836544,
            "vs_market": -0.02098217139063474,
            "vs_sector": 0.0008495708668156965,
            "vs_peers": 0.11612041410238017
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 84.91921005385996,
          "score_pca_percentile": 84.91921005385996,
          "rank_pca": 85,
          "total": 557,
          "adv_notional_sgd": 563782.0,
          "adv_volume_shares": 845950.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018508478481400114,
          "votes": 343.5,
          "trades": 343.5,
          "spread_pct": 0.007457550904350735,
          "spread_ticks": 1.0,
          "amihud": 5.507546014056164e-09,
          "volatility": 0.1427900250424208
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5763193464821068,
          "loadings": {
            "log_adv": 0.502940785848591,
            "log_trades": 0.44869535180588904,
            "log_turnover": 0.4573437643658017,
            "neg_spread": 0.43240024960386975,
            "neg_amihud": 0.26561021291537634,
            "neg_vol": 0.28114225461689124
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
          "peer_median_adv": 1082855.25,
          "peer_median_score_pca": 86.89407540394973,
          "peer_median_trades": 737.0,
          "peer_median_volatility": 0.16279639878880464,
          "peer_median_spread_pct": 0.006967538340364273,
          "peer_median_spread_ticks": 1.003866068939852,
          "peer_median_amihud": 5.458407282732866e-09,
          "peer_median_turnover_ratio": 0.0011843033410168927,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -47.9,
            "trades_delta_pct": -53.39,
            "volatility_delta_pct": 12.29,
            "spread_pct_delta_pct": -7.03,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": -0.9,
            "turnover_ratio_delta_pct": 56.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.91921005385996,
            "rank_pca": 85,
            "adv": 563782.0,
            "trades": 343.5,
            "volatility": 0.1427900250424208,
            "spread_pct": 0.007457550904350735,
            "spread_ticks": 1.0,
            "amihud": 5.507546014056164e-09,
            "turnover_ratio": 0.0018508478481400114,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.89407540394973,
            "rank_pca": 74,
            "adv": 1082855.25,
            "trades": 737.0,
            "volatility": 0.16279639878880464,
            "spread_pct": 0.006967538340364273,
            "spread_ticks": 1.003866068939852,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0011843033410168927,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6853976918499793,
              "median": 0.46071669592707043,
              "min": 0.0,
              "max": 7.033791454274304,
              "p5": 0.152148625339325,
              "p95": 1.9035846337449955,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2704264.175029334,
              "median": 11696.25,
              "min": 0.0,
              "max": 254635655.60000002,
              "p5": 0.0,
              "p95": 11069263.699999982,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09482100220969279,
              "median": 0.028695536770314077,
              "min": 0.0002707216748538581,
              "max": 1.267605633802817,
              "p5": 0.003618302148519528,
              "p95": 0.46604249856410274,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035955455100182714,
              "median": 0.0002683776227072485,
              "min": 0.0,
              "max": 0.9986157801067826,
              "p5": 0.0,
              "p95": 0.007527966230082484,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.876751838885559e-06,
              "median": 1.5426365217164815e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.765672275379646e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 397.0026929982047,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2239.0999999999967,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3545813211022694,
              "median": 0.16527924222309398,
              "min": 0.11442524188541034,
              "max": 1.3611547420473995,
              "p5": 0.12435291599036401,
              "p95": 1.0805098465276433,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8787024.419773273,
              "median": 636709.75,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 12063.9225,
              "p95": 40952467.149999976,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.035658285500887545,
              "median": 0.008124834713915261,
              "min": 0.0042712193330027145,
              "max": 0.13333333333333333,
              "p5": 0.004342333605669235,
              "p95": 0.12517362181317188,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022952409084658933,
              "median": 0.0011626728988256875,
              "min": 0.0,
              "max": 0.006833889104561173,
              "p5": 8.48750274404525e-05,
              "p95": 0.0066099798768735315,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.3389525664937e-07,
              "median": 5.4829766483945154e-09,
              "min": 0.0,
              "max": 7.421899249138285e-06,
              "p5": 3.229281837465633e-11,
              "p95": 4.835181380339842e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1121.0,
              "median": 384.0,
              "min": 0.0,
              "max": 5573.5,
              "p5": 8.575000000000001,
              "p95": 4264.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1082855.25,
              "median": 1082855.25,
              "min": 1082855.25,
              "max": 1082855.25,
              "p5": 1082855.25,
              "p95": 1082855.25,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 737.0,
              "median": 737.0,
              "min": 737.0,
              "max": 737.0,
              "p5": 737.0,
              "p95": 737.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16279639878880464,
              "median": 0.16279639878880464,
              "min": 0.16279639878880464,
              "max": 0.16279639878880464,
              "p5": 0.16279639878880464,
              "p95": 0.16279639878880464,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006967538340364273,
              "median": 0.006967538340364273,
              "min": 0.006967538340364273,
              "max": 0.006967538340364273,
              "p5": 0.006967538340364273,
              "p95": 0.006967538340364273,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.003866068939852,
              "median": 1.003866068939852,
              "min": 1.003866068939852,
              "max": 1.003866068939852,
              "p5": 1.003866068939852,
              "p95": 1.003866068939852,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.458407282732866e-09,
              "median": 5.458407282732866e-09,
              "min": 5.458407282732866e-09,
              "max": 5.458407282732866e-09,
              "p5": 5.458407282732866e-09,
              "p95": 5.458407282732866e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011843033410168927,
              "median": 0.0011843033410168927,
              "min": 0.0011843033410168927,
              "max": 0.0011843033410168927,
              "p5": 0.0011843033410168927,
              "p95": 0.0011843033410168927,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.02173913043478304,
            "market": 0.09989426414142,
            "sector": -0.02386240238869264,
            "peers": -0.1739130434782613,
            "vs_market": -0.12163339457620304,
            "vs_sector": 0.0021232719539096,
            "vs_peers": 0.15217391304347827
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks a little thinner, with the 1D score at 77.6 compared with a peer median of 82.9. That suggests access can be less consistent on the day.",
        "market_comparison": "The stock rose 0.7% while peers were flat, which matters because firmer price action can help keep attention on the name even when same-day liquidity is not leading peers."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with the 1M score at 81.0 compared with a peer median of 83.5. That keeps access broadly workable rather than standout.",
        "market_comparison": "Return 3.1% vs peers -0.7%."
      },
      "3m": {
        "liquidity": "Quarterly tradability has been steady at an average level, with the 3M score at 83.8 compared with a peer median of 86.0. That points to a market that is usable but not especially deep for its size.",
        "market_comparison": "The stock fell 1.5% while peers fell 13.1%, which matters because relative resilience can help sustain trading interest over the period."
      },
      "6m": {
        "liquidity": "Six-month tradability is average for its size, with the score at 84.9 compared with a peer median of 86.9. That indicates access is broadly stable but not as strong as the peer median.",
        "market_comparison": "Return -2.2% vs peers -17.4%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.3529850724169154,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.3%",
          "display_range": null,
          "display_text": "35.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 35.3,
          "plain_english": "Market explains about 35.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.1384519561580465,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "13.8%",
          "display_range": null,
          "display_text": "13.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 13.8,
          "plain_english": "Sector explains about 13.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.508562971425038,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.9%",
          "display_range": null,
          "display_text": "50.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.9,
          "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.021619338639854206,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.02",
          "display_range": null,
          "display_text": "-0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.02% stock move in the opposite direction in this state.",
          "value_num": -0.02
        },
        "beta_stock_lag": {
          "median": -1.5717015965979635,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.57",
          "display_range": null,
          "display_text": "-1.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.57
        },
        "beta_sector": {
          "median": -0.8170311459952047,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.82",
          "display_range": null,
          "display_text": "-0.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state.",
          "value_num": -0.82
        },
        "beta_market_lag": {
          "median": 1.7099578056887361,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.71",
          "display_range": null,
          "display_text": "1.71",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.71
        },
        "beta_sector_lag": {
          "median": 1.156004831753348,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.16",
          "display_range": null,
          "display_text": "1.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.16
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
          "period_label": "2025-05-20 to 2025-05-30",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3722770741349743,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.2%",
            "display_range": null,
            "display_text": "37.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 37.2,
            "plain_english": "Sector explains about 37.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3687220009311859,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.9%",
              "display_range": null,
              "display_text": "36.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 36.9,
              "plain_english": "Market explains about 36.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3722770741349743,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.2%",
              "display_range": null,
              "display_text": "37.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 37.2,
              "plain_english": "Sector explains about 37.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.25900092493383975,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.9%",
              "display_range": null,
              "display_text": "25.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 25.9,
              "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though sector-driven still has the largest share."
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
          "period_label": "2026-05-04 to 2026-05-14",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4771085467402192,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.7%",
            "display_range": null,
            "display_text": "47.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
            "kind": "share_pct",
            "value_pct": 47.7,
            "plain_english": "Company-specific explains about 47.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.320001992104104,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.0%",
              "display_range": null,
              "display_text": "32.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 32.0,
              "plain_english": "Market explains about 32.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2028894611556768,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.3%",
              "display_range": null,
              "display_text": "20.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 20.3,
              "plain_english": "Sector explains about 20.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4771085467402192,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.7%",
              "display_range": null,
              "display_text": "47.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 47.7,
              "plain_english": "Company-specific explains about 47.7% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 8.928571428571429,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005500815954968009,
            "low": 0.005500815954968009,
            "high": 0.005500815954968009
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010634492732575853,
            "low": 0.010634492732575853,
            "high": 0.010634492732575853
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            14.0
          ],
          [
            13.0,
            110.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 251,
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
        "market_link_display": "-0.02",
        "sector_link_display": "-0.82",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.02% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.57",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 50.9,
        "driver_share_display": "50.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8943089430894309,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
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
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 8.928571428571429,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005500815954968009,
            "low": 0.005500815954968009,
            "high": 0.005500815954968009
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010634492732575853,
            "low": 0.010634492732575853,
            "high": 0.010634492732575853
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.888,
          0.112
        ],
        [
          0.10569105691056911,
          0.8943089430894309
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            111.0,
            14.0
          ],
          [
            13.0,
            110.0
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
        "text": "Low short interest",
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
    "liq_subtitle": "Liquidity looks mixed for its size, with the 6M liquidity score 2.0 points below the peer median and the displayed book still balanced at a 1 tick spread.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have outperformed, with the stock up 3.1% over one month compared with peers down 0.7% and the market down 0.2%.",
    "perf_insight": "The stronger one-month return sits alongside only middle-of-the-pack liquidity, with the six-month score 2.0 points below the peer median. That suggests the firmer tape is being supported more by stock-specific demand than by a clear liquidity advantage.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being led mainly by company-specific factors, with stock-specific drivers at 50.9%.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 50.9% of price changes. Other influences are market 35.3%, and sector 13.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 35.3%, sector 13.8%, and company-specific 50.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 35.3%, sector 13.8%, and company-specific 50.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because company news is likely setting the tone, while a 1 tick spread and near-balanced displayed depth still point to orderly trading conditions.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: company-specific factors account for 50.9% of price moves.",
      "Monthly change: the stock has remained mostly company-driven from March through"
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly on screen, with a balanced book and no clear sign of immediate stress.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 14, 2025 to May 14, 2026 (255 trading days • 101,304 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book looks balanced, with bid depth at 0.95x ask depth and a 1 tick spread. That supports a broadly middle-of-the-pack liquidity profile.",
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
    "intraday_subtitle": "Displayed liquidity looks balanced, with the order book showing similar depth on both sides.",
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
    "intraday_insight": "Session split is open 3.8%, continuous 86.7%, and close 8.3%. Current trading concentration score is 0.234.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current execution conditions remain orderly, with a balanced displayed book and a 1 tick spread.",
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
    "exec_subtitle": "Trading access looks broadly workable, with peer standing close to the middle and current execution conditions still orderly.",
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
        "sub": "Peer median 86.9 (-2.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$563.8K",
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
    "liq_insight": "Liquidity looks mixed rather than strong, with the 6M score at 84.9 compared with a peer median of 86.9. That points to access that is serviceable, but not leading the group. Near-term execution still looks orderly, with displayed bid depth at 0.95x ask depth and a 1 tick spread, which supports day-to-day accessibility even as peer standing remains near the middle.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.673",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.95x",
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
        "text": "Estimated impact ~-1.19% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.51% with 100.0% fill.",
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
        "subtext": "Rank 85/557",
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
        "value": "563.8K",
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
        "value": "50.9",
        "suffix": "company-specific",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 35.3% • Sector 13.8%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity looks mixed for its size, with a 6M liquidity score of 84.9 compared with a peer median of 86.9. That leaves access broadly workable, but without a clear peer advantage.",
      "The stock has outperformed over one month, rising 3.1% while peers fell 0.7% and the market slipped 0.2%. That gives trading a firmer return backdrop than the main comparison groups.",
      "Price moves are being driven mainly by company-specific factors, at 50.9%, while the displayed book remains balanced with bid depth at 0.95x ask depth and a 1 tick spread. That means execution looks orderly on screen even as trading stays more sensitive to company news."
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
      "overall": "6M liquidity is strong: score 84.9 vs peer median 86.9 (-2.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 84.9 vs peer median 86.9 (-2.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 10.0%.",
        "vs_sector": "In line with sector: -2.2% vs sector -2.4%.",
        "vs_peers": "Better than peers: -2.2% vs peers -17.4%."
      },
      "adv": {
        "insight": "ADV is S$563.8K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$563.8K vs market S$11.7K.",
        "vs_sector": "Worse than sector: S$563.8K vs sector S$636.7K.",
        "vs_peers": "Worse than peers: S$563.8K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.87%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.81%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.70%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.28%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.28% vs market 46.07%.",
        "vs_sector": "Better than sector: 14.28% vs sector 16.53%.",
        "vs_peers": "Better than peers: 14.28% vs peers 16.28%."
      },
      "trades": {
        "insight": "Trades is 344, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 344 vs market 7.",
        "vs_sector": "Worse than sector: 344 vs sector 384.",
        "vs_peers": "Worse than peers: 344 vs peers 737."
      },
      "amihud": {
        "insight": "Price impact is 5.51e-09, better than market, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.51e-09 vs market 1.54e-07.",
        "vs_sector": "In line with sector: 5.51e-09 vs sector 5.48e-09.",
        "vs_peers": "In line with peers: 5.51e-09 vs peers 5.46e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are ahead of peers and the market, with the stock up 3.1% over one month compared with peers down 0.7% and the market down 0.2%. Liquidity gives a mixed read on that move because the six-month liquidity score of 84.9 is 2.0 points below the peer median of 86.9, even though the current screen shows a one-tick spread and broadly balanced displayed depth. The move looks more company-specific than broad-based, with stock-specific factors accounting for 50.9% of current trading drivers.",
      "conclusion": "The recent move looks company-specific, with strong relative returns only partly confirmed by a mixed liquidity backdrop."
    },
    "drivers": {
      "overall": "Price moves are being driven mainly by company-specific factors, with stock-specific influences accounting for 50.9% of the current mix. That matters because the share price is responding more to company developments than to broader market or sector moves.",
      "beta": "Trading conditions look orderly around that driver mix, with a 1-tick spread and displayed bid depth at 0.95x ask depth. That matters because liquidity on screen appears broadly balanced even as stock-specific news leads the tape.",
      "rolling_change": "This pattern looks reasonably stable rather than temporary, as the stock was mostly company-driven in March, April, and May. That matters because the current read is consistent with the recent monthly picture rather than a one-off shift."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, and that matters because price moves are likely to stay larger even though the order book is currently balanced with a 1-tick spread and bid depth at 0.95x ask depth.",
      "current": "The stock is currently in a high-volatility state, pointing to a more reactive trading backdrop than a calmer market phase.",
      "transitions": "This state looks fairly persistent, with a typical run length of about 8.9 days, although the read is mixed rather than definitive.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.9 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth is close to ask depth at 0.95x and the spread is 1 tick. That matters because immediate access on screen appears orderly rather than strained.",
      "concern": "The main watchpoint is a slightly lighter bid side, with displayed bid depth at 0.95x ask depth. That matters because buy-side support is marginally thinner if selling pressure picks up.",
      "peer_context": "Immediate displayed depth broadly matches the stronger monthly liquidity read."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and trade value, so the trading base appears balanced rather than clearly dominated by one group.",
      "retail_heavy": "Retail-like trades account for 37.6% of individual trade count but only 2.9% of trade value, while institution-like trades are 21.3% of count and 54.0% of value. That split shows broad participation by count, but most value still comes from larger institutional-style tickets.",
      "institutional_gap": "",
      "peer_comparison": "The mix stands out as balanced rather than extreme, with retail-like activity prominent in count and institution-like activity dominant in value."
    },
    "price_moving": {
      "overall": "Price moves are more likely to reflect larger value trades than sheer trade count, because institution-like activity contributes 54.0% of trade value on 21.3% of trades. The signal is mixed rather than clean, as retail-like trades make up 37.6% of count but only 2.9% of value. That means activity is broad, but the trades carrying most value are more likely to shape the tape.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture. The average short ratio is 3.28%, and the stronger 1M share price performance compared with peers and the market points away from short pressure as a key influence.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning has fallen sharply, with shorts covering by 34% month on month. That reduces the chance that short activity is driving near-term trading conditions, even as the broader liquidity picture remains mixed.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.8%, continuous 86.7%, and close 8.3%. Current trading concentration score is 0.234.",
      "hhi_interpretation": "A concentration score of 0.234 indicates trading is reasonably well distributed through the session, which supports steadier access rather than liquidity appearing only at the edges of the day.",
      "best_times": "The continuous session is the clearest source of liquidity, with far more activity than either the open or the close. That matters because it gives the day a broader base of trading rather than relying on auction windows.",
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
        "CRPU",
        "AU8U"
      ],
      "scores": [
        84.91921005385996,
        86.89407540394973
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        563782.0,
        1082855.25
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.1427900250424208,
        "adv": 563782.0,
        "spread_pct": 0.007457550904350735,
        "turnover_ratio": 0.0018508478481400114,
        "amihud": 5.507546014056164e-09,
        "trades": 343.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6853976918499793,
          "median": 0.46071669592707043,
          "min": 0.0,
          "max": 7.033791454274304,
          "p5": 0.152148625339325,
          "p95": 1.9035846337449955,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2704264.175029334,
          "median": 11696.25,
          "min": 0.0,
          "max": 254635655.60000002,
          "p5": 0.0,
          "p95": 11069263.699999982,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09482100220969279,
          "median": 0.028695536770314077,
          "min": 0.0002707216748538581,
          "max": 1.267605633802817,
          "p5": 0.003618302148519528,
          "p95": 0.46604249856410274,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035955455100182714,
          "median": 0.0002683776227072485,
          "min": 0.0,
          "max": 0.9986157801067826,
          "p5": 0.0,
          "p95": 0.007527966230082484,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.876751838885559e-06,
          "median": 1.5426365217164815e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.765672275379646e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 397.0026929982047,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2239.0999999999967,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3545813211022694,
          "median": 0.16527924222309398,
          "min": 0.11442524188541034,
          "max": 1.3611547420473995,
          "p5": 0.12435291599036401,
          "p95": 1.0805098465276433,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8787024.419773273,
          "median": 636709.75,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 12063.9225,
          "p95": 40952467.149999976,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.035658285500887545,
          "median": 0.008124834713915261,
          "min": 0.0042712193330027145,
          "max": 0.13333333333333333,
          "p5": 0.004342333605669235,
          "p95": 0.12517362181317188,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0022952409084658933,
          "median": 0.0011626728988256875,
          "min": 0.0,
          "max": 0.006833889104561173,
          "p5": 8.48750274404525e-05,
          "p95": 0.0066099798768735315,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.3389525664937e-07,
          "median": 5.4829766483945154e-09,
          "min": 0.0,
          "max": 7.421899249138285e-06,
          "p5": 3.229281837465633e-11,
          "p95": 4.835181380339842e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1121.0,
          "median": 384.0,
          "min": 0.0,
          "max": 5573.5,
          "p5": 8.575000000000001,
          "p95": 4264.149999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1082855.25,
          "median": 1082855.25,
          "min": 1082855.25,
          "max": 1082855.25,
          "p5": 1082855.25,
          "p95": 1082855.25,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 737.0,
          "median": 737.0,
          "min": 737.0,
          "max": 737.0,
          "p5": 737.0,
          "p95": 737.0,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.16279639878880464,
          "median": 0.16279639878880464,
          "min": 0.16279639878880464,
          "max": 0.16279639878880464,
          "p5": 0.16279639878880464,
          "p95": 0.16279639878880464,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006967538340364273,
          "median": 0.006967538340364273,
          "min": 0.006967538340364273,
          "max": 0.006967538340364273,
          "p5": 0.006967538340364273,
          "p95": 0.006967538340364273,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.003866068939852,
          "median": 1.003866068939852,
          "min": 1.003866068939852,
          "max": 1.003866068939852,
          "p5": 1.003866068939852,
          "p95": 1.003866068939852,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.458407282732866e-09,
          "median": 5.458407282732866e-09,
          "min": 5.458407282732866e-09,
          "max": 5.458407282732866e-09,
          "p5": 5.458407282732866e-09,
          "p95": 5.458407282732866e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0011843033410168927,
          "median": 0.0011843033410168927,
          "min": 0.0011843033410168927,
          "max": 0.0011843033410168927,
          "p5": 0.0011843033410168927,
          "p95": 0.0011843033410168927,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.030534351145037997,
        "market": -0.0023224604390442716,
        "sector": 0.011731075694589421,
        "peers": -0.007462686567163979
      },
      {
        "horizon": "3M",
        "stock": -0.014598540145985273,
        "market": 0.006383631244649468,
        "sector": -0.015448111012800969,
        "peers": -0.13071895424836544
      },
      {
        "horizon": "6M",
        "stock": -0.02173913043478304,
        "market": 0.09989426414142,
        "sector": -0.02386240238869264,
        "peers": -0.1739130434782613
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
      "share_market": 0.3529850724169154,
      "share_sector": 0.1384519561580465,
      "share_idio": 0.508562971425038,
      "beta_market": -0.021619338639854206,
      "beta_sector": -0.8170311459952047,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.3529850724169154,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.3%",
            "display_range": null,
            "display_text": "35.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 35.3,
            "plain_english": "Market explains about 35.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.1384519561580465,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "13.8%",
            "display_range": null,
            "display_text": "13.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 13.8,
            "plain_english": "Sector explains about 13.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.508562971425038,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.9%",
            "display_range": null,
            "display_text": "50.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.9,
            "plain_english": "Company-specific explains about 50.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.021619338639854206,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.02",
            "display_range": null,
            "display_text": "-0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.02% stock move in the opposite direction in this state.",
            "value_num": -0.02
          },
          "beta_stock_lag": {
            "median": -1.5717015965979635,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.57",
            "display_range": null,
            "display_text": "-1.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.57
          },
          "beta_sector": {
            "median": -0.8170311459952047,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.82",
            "display_range": null,
            "display_text": "-0.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state.",
            "value_num": -0.82
          },
          "beta_market_lag": {
            "median": 1.7099578056887361,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.71",
            "display_range": null,
            "display_text": "1.71",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.71
          },
          "beta_sector_lag": {
            "median": 1.156004831753348,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.16",
            "display_range": null,
            "display_text": "1.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.16
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
            "period_label": "2025-05-20 to 2025-05-30",
            "n_obs": 9,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3722770741349743,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.2%",
              "display_range": null,
              "display_text": "37.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 37.2,
              "plain_english": "Sector explains about 37.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3687220009311859,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.9%",
                "display_range": null,
                "display_text": "36.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 36.9,
                "plain_english": "Market explains about 36.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3722770741349743,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.2%",
                "display_range": null,
                "display_text": "37.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 37.2,
                "plain_english": "Sector explains about 37.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.25900092493383975,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.9%",
                "display_range": null,
                "display_text": "25.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 25.9,
                "plain_english": "Company-specific explains about 25.9% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though sector-driven still has the largest share."
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
            "period_label": "2026-05-04 to 2026-05-14",
            "n_obs": 9,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4771085467402192,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.7%",
              "display_range": null,
              "display_text": "47.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
              "kind": "share_pct",
              "value_pct": 47.7,
              "plain_english": "Company-specific explains about 47.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.320001992104104,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.0%",
                "display_range": null,
                "display_text": "32.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 32.0,
                "plain_english": "Market explains about 32.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2028894611556768,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.3%",
                "display_range": null,
                "display_text": "20.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 20.3,
                "plain_english": "Sector explains about 20.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4771085467402192,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.7%",
                "display_range": null,
                "display_text": "47.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 9 trading days.",
                "kind": "share_pct",
                "value_pct": 47.7,
                "plain_english": "Company-specific explains about 47.7% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 8.928571428571429,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005500815954968009,
              "low": 0.005500815954968009,
              "high": 0.005500815954968009
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010634492732575853,
              "low": 0.010634492732575853,
              "high": 0.010634492732575853
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.888,
              0.112
            ],
            [
              0.10569105691056911,
              0.8943089430894309
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              111.0,
              14.0
            ],
            [
              13.0,
              110.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 251,
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
          "market_link_display": "-0.02",
          "sector_link_display": "-0.82",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.02% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.57",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 50.9,
          "driver_share_display": "50.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8943089430894309,
          "effective_days": 124.0,
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
          "period_label": "2025-05-20 to 2025-05-30",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.3687220009311859,
          "share_sector": 0.3722770741349743,
          "share_company": 0.25900092493383975,
          "share_market_display": "36.9%",
          "share_sector_display": "37.2%",
          "share_company_display": "25.9%",
          "dominant_share_display": "37.2%"
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
          "period_label": "2026-05-04 to 2026-05-14",
          "n_obs": 9,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.320001992104104,
          "share_sector": 0.2028894611556768,
          "share_company": 0.4771085467402192,
          "share_market_display": "32.0%",
          "share_sector_display": "20.3%",
          "share_company_display": "47.7%",
          "dominant_share_display": "47.7%"
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
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 8.928571428571429,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005500815954968009,
              "low": 0.005500815954968009,
              "high": 0.005500815954968009
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010634492732575853,
              "low": 0.010634492732575853,
              "high": 0.010634492732575853
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.888,
            0.112
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 246000.0,
          "value": 164820.0
        },
        {
          "level": 2,
          "price": 0.665,
          "quantity": 857000.0,
          "value": 569905.0
        },
        {
          "level": 3,
          "price": 0.66,
          "quantity": 1290700.0,
          "value": 851862.0
        },
        {
          "level": 4,
          "price": 0.655,
          "quantity": 377600.0,
          "value": 247328.0
        },
        {
          "level": 5,
          "price": 0.65,
          "quantity": 333500.0,
          "value": 216775.0
        },
        {
          "level": 6,
          "price": 0.645,
          "quantity": 69500.0,
          "value": 44827.5
        },
        {
          "level": 7,
          "price": 0.64,
          "quantity": 151600.0,
          "value": 97024.0
        },
        {
          "level": 8,
          "price": 0.635,
          "quantity": 111900.0,
          "value": 71056.5
        },
        {
          "level": 9,
          "price": 0.63,
          "quantity": 337900.0,
          "value": 212877.0
        },
        {
          "level": 10,
          "price": 0.625,
          "quantity": 116400.0,
          "value": 72750.0
        },
        {
          "level": 11,
          "price": 0.62,
          "quantity": 74200.0,
          "value": 46004.0
        },
        {
          "level": 12,
          "price": 0.615,
          "quantity": 14100.0,
          "value": 8671.5
        },
        {
          "level": 13,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
        },
        {
          "level": 14,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 15,
          "price": 0.6,
          "quantity": 31800.0,
          "value": 19080.0
        },
        {
          "level": 16,
          "price": 0.59,
          "quantity": 6500.0,
          "value": 3835.0
        },
        {
          "level": 17,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 18,
          "price": 0.57,
          "quantity": 23000.0,
          "value": 13109.999999999998
        },
        {
          "level": 19,
          "price": 0.565,
          "quantity": 10500.0,
          "value": 5932.499999999999
        },
        {
          "level": 20,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 21,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 22,
          "price": 0.52,
          "quantity": 5000.0,
          "value": 2600.0
        },
        {
          "level": 23,
          "price": 0.515,
          "quantity": 5000.0,
          "value": 2575.0
        },
        {
          "level": 24,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.675,
          "quantity": 697100.0,
          "value": 470542.50000000006
        },
        {
          "level": 2,
          "price": 0.68,
          "quantity": 863500.0,
          "value": 587180.0
        },
        {
          "level": 3,
          "price": 0.685,
          "quantity": 224700.0,
          "value": 153919.5
        },
        {
          "level": 4,
          "price": 0.69,
          "quantity": 1218200.0,
          "value": 840557.9999999999
        },
        {
          "level": 5,
          "price": 0.695,
          "quantity": 210300.0,
          "value": 146158.5
        },
        {
          "level": 6,
          "price": 0.7,
          "quantity": 156300.0,
          "value": 109410.0
        },
        {
          "level": 7,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 8,
          "price": 0.71,
          "quantity": 77300.0,
          "value": 54883.0
        },
        {
          "level": 9,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        },
        {
          "level": 10,
          "price": 0.72,
          "quantity": 25200.0,
          "value": 18144.0
        },
        {
          "level": 11,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 12,
          "price": 0.75,
          "quantity": 10000.0,
          "value": 7500.0
        },
        {
          "level": 13,
          "price": 0.755,
          "quantity": 26000.0,
          "value": 19630.0
        },
        {
          "level": 14,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 15,
          "price": 0.775,
          "quantity": 12400.0,
          "value": 9610.0
        },
        {
          "level": 16,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 17,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
        },
        {
          "level": 18,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 19,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-14 08:59:57.629800000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6725000000000001,
        "spread_pct": 0.0074349442379182205,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2698453.0,
        "ask_depth_notional_displayed": 2831278.5,
        "bid_depth_notional_top10": 2698453.0,
        "ask_depth_notional_top10": 2831278.5,
        "bid_ask_depth_ratio": 0.9531
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 255,
        "n_trades_used": 101304,
        "first_trade_date": "2025-05-14",
        "last_trade_date": "2026-05-14",
        "window_label": "May 14, 2025 to May 14, 2026",
        "window_short_label": "May 14, 2025 to May 14, 2026",
        "trade_days_label": "255 trading days",
        "trade_count_label": "101,304 trades",
        "window_detail_label": "255 trading days • 101,304 trades",
        "history_note": "Trade-size percentiles use May 14, 2025 to May 14, 2026 history (255 trading days • 101,304 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003717,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.13,
            "pct_of_adv": 0.65
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7886.95,
            "impact_pct": -0.003717,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.29,
            "pct_of_adv": 1.52
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 339022.75,
            "impact_pct": -0.007552,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.56,
            "pct_of_adv": 65.25
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-14",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-05-13 22:59:01.088900000",
            "local_timestamp": "2026-05-14 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.009387,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 25.57,
            "price_vs_mid_pct": 2.602,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8148702225041223680",
            "timestamp": "2026-05-14 01:06:52.034400000",
            "local_timestamp": "2026-05-14 09:06:52",
            "posted_price": 0.675,
            "size_shares": 457700.0,
            "notional": 308947.5,
            "impact_pct": -0.0072,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.45,
            "price_vs_mid_pct": 0.372,
            "executed_event_count": 0,
            "event_count": 48
          },
          {
            "rank": 3,
            "order_id": "8148702225041584128",
            "timestamp": "2026-05-14 01:36:56.946600000",
            "local_timestamp": "2026-05-14 09:36:56",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.005154,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.56,
            "price_vs_mid_pct": 1.115,
            "executed_event_count": 0,
            "event_count": 13
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-14",
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
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2403447.5,
            "ask_depth_notional": 2609179.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2500667.0,
            "ask_depth_notional": 2695434.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2585737.0,
            "ask_depth_notional": 2796212.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2627894.5,
            "ask_depth_notional": 2799767.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2637322.0,
            "ask_depth_notional": 2703019.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2609370.0,
            "ask_depth_notional": 2715830.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2631511.0,
            "ask_depth_notional": 2783831.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2724842.5,
            "ask_depth_notional": 2808469.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2633454.5,
            "ask_depth_notional": 2888996.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2669724.5,
            "ask_depth_notional": 2886389.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2668384.5,
            "ask_depth_notional": 2878104.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2668012.0,
            "ask_depth_notional": 2878036.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2790639.0,
            "ask_depth_notional": 2863861.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2698453.0,
            "ask_depth_notional": 2831278.5,
            "mid_price": 0.6725000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.007434944237918221,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2635388.25,
          "median_ask_depth_notional": 2804118.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 9.6,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 135.0
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 351,
          "n_runs": 233,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-14",
          "last_trade_date": "2026-05-14",
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
            "retail_pct": 0.39316239316239315,
            "mixed_pct": 0.396011396011396,
            "instit_pct": 0.1168091168091168,
            "ambiguous_pct": 0.09401709401709402,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09401709401709402,
            "retail_qty_pct": 0.018598382749326146,
            "mixed_qty_pct": 0.2982479784366577,
            "instit_qty_pct": 0.14258760107816712,
            "ambiguous_qty_pct": 0.5405660377358491,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5405660377358491,
            "retail_notional_pct": 0.018511976895803958,
            "mixed_notional_pct": 0.29879945842035266,
            "instit_notional_pct": 0.1421376384845777,
            "ambiguous_notional_pct": 0.5405509261992657,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5405509261992657
          },
          "run_composition": {
            "retail_pct": 0.592274678111588,
            "mixed_pct": 0.27896995708154504,
            "instit_pct": 0.04721030042918455,
            "ambiguous_pct": 0.0815450643776824,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0815450643776824,
            "retail_notional_pct": 0.018511976895803958,
            "mixed_notional_pct": 0.29879945842035266,
            "instit_notional_pct": 0.1421376384845777,
            "unclear_notional_pct": 0.5405509261992657
          },
          "counts": {
            "trades": {
              "retail": 138,
              "mixed": 139,
              "institutional": 41,
              "ambiguous": 33,
              "unobservable": 0,
              "unclear": 33
            },
            "runs": {
              "retail": 138,
              "mixed": 65,
              "institutional": 11,
              "ambiguous": 19,
              "unobservable": 0,
              "unclear": 19
            }
          },
          "confidence": {
            "high": 0.6394849785407726,
            "medium": 0.27896995708154504,
            "low": 0.0815450643776824,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 149,
            "medium": 65,
            "low": 19,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.50997150997151,
            "medium": 0.396011396011396,
            "low": 0.09401709401709402,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 179,
            "medium": 139,
            "low": 33,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8770386266094419,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0815450643776824,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.592274678111588,
          "dominance_gap": 0.3133047210300429,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 351
            },
            "d2_information": {
              "UNOBSERVABLE": 351
            },
            "d3_urgency": {
              "UNOBSERVABLE": 233
            },
            "participant_confidence": {
              "HIGH": 149,
              "MEDIUM": 65,
              "LOW": 19
            }
          },
          "trade_size": {
            "avg": 1423.502849002849,
            "median": 67.0
          },
          "run_size": {
            "avg": 2144.4184549356223,
            "median": 67.0,
            "avg_length": 1.2746781115879828
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-14T08:59:54.003000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47816,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-05-14T08:59:52.094100",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47815,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-05-14T08:59:47.075600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-05-14T08:59:41.476400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-05-14T08:59:41.325400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-05-14T08:59:35.855100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-05-14T08:59:30.042400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-05-14T08:59:25.409200",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47813,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-05-14T08:59:21.592000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47812,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-05-14T08:59:21.561800",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-05-14T08:59:21.380200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-367",
              "timestamp": "2026-05-14T08:59:20.290900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-05-14T08:59:17.598600",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-05-14T08:59:11.767300",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-05-14T08:59:06.569400",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-05-14T08:58:56.230600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-362",
              "timestamp": "2026-05-14T08:58:42.766400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-05-14T08:58:33.287400",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-14T08:58:32.562700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-14T08:58:26.074200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-14T08:58:24.958300",
              "price": 0.675,
              "size": 600.0,
              "notional": 405.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-14T08:58:04.667400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-14T08:58:00.741500",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-14T08:57:59.172400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-14T08:57:55.795400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-14T08:57:52.355500",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-14T08:57:42.309200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-14T08:57:33.893200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-14T08:57:22.737100",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47803,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-14T08:57:14.894800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47802,
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
              "retail_pct": 0.39316239316239315,
              "mixed_pct": 0.396011396011396,
              "instit_pct": 0.1168091168091168,
              "ambiguous_pct": 0.09401709401709402,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.09401709401709402,
              "retail_qty_pct": 0.018598382749326146,
              "mixed_qty_pct": 0.2982479784366577,
              "instit_qty_pct": 0.14258760107816712,
              "ambiguous_qty_pct": 0.5405660377358491,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5405660377358491,
              "retail_notional_pct": 0.018511976895803958,
              "mixed_notional_pct": 0.29879945842035266,
              "instit_notional_pct": 0.1421376384845777,
              "ambiguous_notional_pct": 0.5405509261992657,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5405509261992657,
              "run_retail_pct": 0.592274678111588,
              "run_mixed_pct": 0.27896995708154504,
              "run_instit_pct": 0.04721030042918455,
              "run_unclear_pct": 0.0815450643776824,
              "avg_trade_size": 1423.502849002849,
              "avg_run_notional": 2144.4184549356223,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6394849785407726,
              "medium_confidence_pct": 0.27896995708154504,
              "low_confidence_pct": 0.0815450643776824,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8770386266094419,
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
              "retail_pct": 0.35453315290933696,
              "mixed_pct": 0.08592692828146144,
              "instit_pct": 0.5581867388362652,
              "ambiguous_pct": 0.0013531799729364006,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0013531799729364006,
              "retail_qty_pct": 0.15311137902253547,
              "mixed_qty_pct": 0.03783733654827043,
              "instit_qty_pct": 0.8087730687192803,
              "ambiguous_qty_pct": 0.0002782157099137531,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0002782157099137531,
              "retail_notional_pct": 0.15287037908168777,
              "mixed_notional_pct": 0.03793186355986243,
              "instit_notional_pct": 0.8089176013910232,
              "ambiguous_notional_pct": 0.000280155967426642,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.000280155967426642,
              "run_retail_pct": 0.7087827426810478,
              "run_mixed_pct": 0.08166409861325115,
              "run_instit_pct": 0.20801232665639446,
              "run_unclear_pct": 0.0015408320493066256,
              "avg_trade_size": 485.4245602165088,
              "avg_run_notional": 1105.4815100154083,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.736517719568567,
              "low_confidence_pct": 0.26348228043143296,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4987673343605547,
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
          "n_trades": 7415,
          "n_runs": 4228,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-15",
          "last_trade_date": "2026-05-14",
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
            "retail_pct": 0.33998651382333106,
            "mixed_pct": 0.29345920431557654,
            "instit_pct": 0.2182063385030344,
            "ambiguous_pct": 0.14834794335805798,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14834794335805798,
            "retail_qty_pct": 0.027286781901088904,
            "mixed_qty_pct": 0.1677391988658879,
            "instit_qty_pct": 0.5339312723599243,
            "ambiguous_qty_pct": 0.27104274687309887,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27104274687309887,
            "retail_notional_pct": 0.027283792055807703,
            "mixed_notional_pct": 0.16791045214519845,
            "instit_notional_pct": 0.5336524509444371,
            "ambiguous_notional_pct": 0.27115330485455663,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27115330485455663
          },
          "run_composition": {
            "retail_pct": 0.5858561967833491,
            "mixed_pct": 0.2641911069063387,
            "instit_pct": 0.05227057710501419,
            "ambiguous_pct": 0.09768211920529801,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09768211920529801,
            "retail_notional_pct": 0.027283792055807703,
            "mixed_notional_pct": 0.16791045214519845,
            "instit_notional_pct": 0.5336524509444371,
            "unclear_notional_pct": 0.27115330485455663
          },
          "counts": {
            "trades": {
              "retail": 2521,
              "mixed": 2176,
              "institutional": 1618,
              "ambiguous": 1100,
              "unobservable": 0,
              "unclear": 1100
            },
            "runs": {
              "retail": 2477,
              "mixed": 1117,
              "institutional": 221,
              "ambiguous": 413,
              "unobservable": 0,
              "unclear": 413
            }
          },
          "confidence": {
            "high": 0.6381267738883633,
            "medium": 0.2641911069063387,
            "low": 0.09768211920529801,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2698,
            "medium": 1117,
            "low": 413,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5581928523263655,
            "medium": 0.29345920431557654,
            "low": 0.14834794335805798,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4139,
            "medium": 2176,
            "low": 1100,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8788197729422894,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09768211920529801,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5858561967833491,
          "dominance_gap": 0.3216650898770104,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7058,
              "WALK_BOOK": 353,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 7415
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4228
            },
            "participant_confidence": {
              "HIGH": 2698,
              "MEDIUM": 1117,
              "LOW": 413
            }
          },
          "trade_size": {
            "avg": 1606.9823331085638,
            "median": 132.0
          },
          "run_size": {
            "avg": 2818.3003784295174,
            "median": 133.0,
            "avg_length": 1.3758278145695364
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-14T08:59:54.003000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47816,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-05-14T08:59:52.094100",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47815,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-05-14T08:59:47.075600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-05-14T08:59:41.476400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-05-14T08:59:41.325400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-05-14T08:59:35.855100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-05-14T08:59:30.042400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-05-14T08:59:25.409200",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47813,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-05-14T08:59:21.592000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47812,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-05-14T08:59:21.561800",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-05-14T08:59:21.380200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-367",
              "timestamp": "2026-05-14T08:59:20.290900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-05-14T08:59:17.598600",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-05-14T08:59:11.767300",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-05-14T08:59:06.569400",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-05-14T08:58:56.230600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-362",
              "timestamp": "2026-05-14T08:58:42.766400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-05-14T08:58:33.287400",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-14T08:58:32.562700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-14T08:58:26.074200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-14T08:58:24.958300",
              "price": 0.675,
              "size": 600.0,
              "notional": 405.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-14T08:58:04.667400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-14T08:58:00.741500",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-14T08:57:59.172400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-14T08:57:55.795400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-14T08:57:52.355500",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-14T08:57:42.309200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-14T08:57:33.893200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-14T08:57:22.737100",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47803,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-14T08:57:14.894800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47802,
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
              "retail_pct": 0.33998651382333106,
              "mixed_pct": 0.29345920431557654,
              "instit_pct": 0.2182063385030344,
              "ambiguous_pct": 0.14834794335805798,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14834794335805798,
              "retail_qty_pct": 0.027286781901088904,
              "mixed_qty_pct": 0.1677391988658879,
              "instit_qty_pct": 0.5339312723599243,
              "ambiguous_qty_pct": 0.27104274687309887,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.27104274687309887,
              "retail_notional_pct": 0.027283792055807703,
              "mixed_notional_pct": 0.16791045214519845,
              "instit_notional_pct": 0.5336524509444371,
              "ambiguous_notional_pct": 0.27115330485455663,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.27115330485455663,
              "run_retail_pct": 0.5858561967833491,
              "run_mixed_pct": 0.2641911069063387,
              "run_instit_pct": 0.05227057710501419,
              "run_unclear_pct": 0.09768211920529801,
              "avg_trade_size": 1606.9823331085638,
              "avg_run_notional": 2818.3003784295174,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6381267738883633,
              "medium_confidence_pct": 0.2641911069063387,
              "low_confidence_pct": 0.09768211920529801,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8788197729422894,
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
              "retail_pct": 0.4984992655980586,
              "mixed_pct": 0.03844434510505141,
              "instit_pct": 0.46075739191519255,
              "ambiguous_pct": 0.0022989973816974264,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0022989973816974264,
              "retail_qty_pct": 0.21935566624623212,
              "mixed_qty_pct": 0.0064860935930051095,
              "instit_qty_pct": 0.7740000427560553,
              "ambiguous_qty_pct": 0.0001581974047074417,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0001581974047074417,
              "retail_notional_pct": 0.21976964626778264,
              "mixed_notional_pct": 0.0064761608149829985,
              "instit_notional_pct": 0.7735943603322215,
              "ambiguous_notional_pct": 0.00015983258501281412,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00015983258501281412,
              "run_retail_pct": 0.7934889838868793,
              "run_mixed_pct": 0.030362819248054368,
              "run_instit_pct": 0.17417516167927216,
              "run_unclear_pct": 0.0019730351857941467,
              "avg_trade_size": 1009.6617280796986,
              "avg_run_notional": 1733.0146881508276,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7227885563959224,
              "low_confidence_pct": 0.2772114436040776,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48201249588951,
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
          "n_trades": 23977,
          "n_runs": 14116,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-11",
          "last_trade_date": "2026-05-14",
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
            "retail_pct": 0.35509029486591315,
            "mixed_pct": 0.2868165325103224,
            "instit_pct": 0.22229636735204572,
            "ambiguous_pct": 0.13579680527171872,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13579680527171872,
            "retail_qty_pct": 0.023104678859939363,
            "mixed_qty_pct": 0.17528983275456259,
            "instit_qty_pct": 0.5520088383802707,
            "ambiguous_qty_pct": 0.2495966500052273,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2495966500052273,
            "retail_notional_pct": 0.02307275597328173,
            "mixed_notional_pct": 0.176404830035737,
            "instit_notional_pct": 0.5506932186134512,
            "ambiguous_notional_pct": 0.24982919537753,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24982919537753
          },
          "run_composition": {
            "retail_pct": 0.596982147917257,
            "mixed_pct": 0.25262113913289885,
            "instit_pct": 0.05051005950694248,
            "ambiguous_pct": 0.09988665344290167,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09988665344290167,
            "retail_notional_pct": 0.02307275597328173,
            "mixed_notional_pct": 0.176404830035737,
            "instit_notional_pct": 0.5506932186134512,
            "unclear_notional_pct": 0.24982919537753
          },
          "counts": {
            "trades": {
              "retail": 8514,
              "mixed": 6877,
              "institutional": 5330,
              "ambiguous": 3256,
              "unobservable": 0,
              "unclear": 3256
            },
            "runs": {
              "retail": 8427,
              "mixed": 3566,
              "institutional": 713,
              "ambiguous": 1410,
              "unobservable": 0,
              "unclear": 1410
            }
          },
          "confidence": {
            "high": 0.6474213658260131,
            "medium": 0.2526919807310853,
            "low": 0.09988665344290167,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9139,
            "medium": 3567,
            "low": 1410,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5773032489469074,
            "medium": 0.28689994578137384,
            "low": 0.13579680527171872,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13842,
            "medium": 6879,
            "low": 3256,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8777628223292717,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09988665344290167,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.596982147917257,
          "dominance_gap": 0.34436100878435816,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23086,
              "WALK_BOOK": 885,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 23977
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14116
            },
            "participant_confidence": {
              "HIGH": 9139,
              "MEDIUM": 3567,
              "LOW": 1410
            }
          },
          "trade_size": {
            "avg": 1959.2492597072194,
            "median": 131.0
          },
          "run_size": {
            "avg": 3327.9200552564466,
            "median": 134.0,
            "avg_length": 1.358812694814395
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-14T08:59:54.003000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47816,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-05-14T08:59:52.094100",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47815,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-05-14T08:59:47.075600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-05-14T08:59:41.476400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-05-14T08:59:41.325400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-05-14T08:59:35.855100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-05-14T08:59:30.042400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-05-14T08:59:25.409200",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47813,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-05-14T08:59:21.592000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47812,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-05-14T08:59:21.561800",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-05-14T08:59:21.380200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-367",
              "timestamp": "2026-05-14T08:59:20.290900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-05-14T08:59:17.598600",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-05-14T08:59:11.767300",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-05-14T08:59:06.569400",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-05-14T08:58:56.230600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-362",
              "timestamp": "2026-05-14T08:58:42.766400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-05-14T08:58:33.287400",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-14T08:58:32.562700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-14T08:58:26.074200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-14T08:58:24.958300",
              "price": 0.675,
              "size": 600.0,
              "notional": 405.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-14T08:58:04.667400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-14T08:58:00.741500",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-14T08:57:59.172400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-14T08:57:55.795400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-14T08:57:52.355500",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-14T08:57:42.309200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-14T08:57:33.893200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-14T08:57:22.737100",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47803,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-14T08:57:14.894800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47802,
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
              "retail_pct": 0.35509029486591315,
              "mixed_pct": 0.2868165325103224,
              "instit_pct": 0.22229636735204572,
              "ambiguous_pct": 0.13579680527171872,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13579680527171872,
              "retail_qty_pct": 0.023104678859939363,
              "mixed_qty_pct": 0.17528983275456259,
              "instit_qty_pct": 0.5520088383802707,
              "ambiguous_qty_pct": 0.2495966500052273,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2495966500052273,
              "retail_notional_pct": 0.02307275597328173,
              "mixed_notional_pct": 0.176404830035737,
              "instit_notional_pct": 0.5506932186134512,
              "ambiguous_notional_pct": 0.24982919537753,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24982919537753,
              "run_retail_pct": 0.596982147917257,
              "run_mixed_pct": 0.25262113913289885,
              "run_instit_pct": 0.05051005950694248,
              "run_unclear_pct": 0.09988665344290167,
              "avg_trade_size": 1959.2492597072194,
              "avg_run_notional": 3327.9200552564466,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6474213658260131,
              "medium_confidence_pct": 0.2526919807310853,
              "low_confidence_pct": 0.09988665344290167,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8777628223292717,
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
              "retail_pct": 0.4500630724510503,
              "mixed_pct": 0.04645423133878133,
              "instit_pct": 0.5014168449148979,
              "ambiguous_pct": 0.0020658512952704804,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0020658512952704804,
              "retail_qty_pct": 0.21483605436549671,
              "mixed_qty_pct": 0.030124366729072306,
              "instit_qty_pct": 0.7545373513786356,
              "ambiguous_qty_pct": 0.0005022275267953156,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0005022275267953156,
              "retail_notional_pct": 0.2154357346884562,
              "mixed_notional_pct": 0.030750623588666672,
              "instit_notional_pct": 0.7533239800093172,
              "ambiguous_notional_pct": 0.0004896617135599229,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0004896617135599229,
              "run_retail_pct": 0.7806069958847737,
              "run_mixed_pct": 0.03714726631393298,
              "run_instit_pct": 0.18037184009406232,
              "run_unclear_pct": 0.0018738977072310405,
              "avg_trade_size": 1467.8349421378819,
              "avg_run_notional": 2950.0699404761904,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6987801293356849,
              "low_confidence_pct": 0.3012198706643151,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48673390652557325,
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
          "n_trades": 44089,
          "n_runs": 27224,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-12",
          "last_trade_date": "2026-05-14",
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
            "retail_pct": 0.37623897117194766,
            "mixed_pct": 0.2849463585021207,
            "instit_pct": 0.2130463380888657,
            "ambiguous_pct": 0.12576833223706593,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12576833223706593,
            "retail_qty_pct": 0.02867932859922878,
            "mixed_qty_pct": 0.17984804996311643,
            "instit_qty_pct": 0.5406549358088969,
            "ambiguous_qty_pct": 0.2508176856287579,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2508176856287579,
            "retail_notional_pct": 0.028713765934534962,
            "mixed_notional_pct": 0.1806414739317294,
            "instit_notional_pct": 0.5395084398751828,
            "ambiguous_notional_pct": 0.25113632025855287,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25113632025855287
          },
          "run_composition": {
            "retail_pct": 0.6021157801939465,
            "mixed_pct": 0.2513958272112842,
            "instit_pct": 0.054584190420217456,
            "ambiguous_pct": 0.09190420217455186,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09190420217455186,
            "retail_notional_pct": 0.028712929204671108,
            "mixed_notional_pct": 0.18064162954817964,
            "instit_notional_pct": 0.5395089046432476,
            "unclear_notional_pct": 0.2511365366039016
          },
          "counts": {
            "trades": {
              "retail": 16588,
              "mixed": 12563,
              "institutional": 9393,
              "ambiguous": 5545,
              "unobservable": 0,
              "unclear": 5545
            },
            "runs": {
              "retail": 16392,
              "mixed": 6844,
              "institutional": 1486,
              "ambiguous": 2502,
              "unobservable": 0,
              "unclear": 2502
            }
          },
          "confidence": {
            "high": 0.6566632383191302,
            "medium": 0.25143255950631793,
            "low": 0.09190420217455186,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17877,
            "medium": 6845,
            "low": 2502,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.589217265077457,
            "medium": 0.28499172129102496,
            "low": 0.12579101363151807,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25978,
            "medium": 12565,
            "low": 5546,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8766107111372317,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09190420217455186,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6021157801939465,
          "dominance_gap": 0.35071995298266234,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42946,
              "WALK_BOOK": 1136,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 44089
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27224
            },
            "participant_confidence": {
              "HIGH": 17877,
              "MEDIUM": 6845,
              "LOW": 2502
            }
          },
          "trade_size": {
            "avg": 1777.1981900247226,
            "median": 135.0
          },
          "run_size": {
            "avg": 2878.1524941228326,
            "median": 137.0,
            "avg_length": 1.3278724654716427
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-05-14T08:59:54.003000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47816,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-05-14T08:59:52.094100",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 47815,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-05-14T08:59:47.075600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-05-14T08:59:41.476400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-05-14T08:59:41.325400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-05-14T08:59:35.855100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-05-14T08:59:30.042400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47814,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-05-14T08:59:25.409200",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47813,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-05-14T08:59:21.592000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47812,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-05-14T08:59:21.561800",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47811,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-05-14T08:59:21.380200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 47810,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-367",
              "timestamp": "2026-05-14T08:59:20.290900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-05-14T08:59:17.598600",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-05-14T08:59:11.767300",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-05-14T08:59:06.569400",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47809,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-05-14T08:58:56.230600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-362",
              "timestamp": "2026-05-14T08:58:42.766400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-05-14T08:58:33.287400",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-14T08:58:32.562700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-14T08:58:26.074200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 47808,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-14T08:58:24.958300",
              "price": 0.675,
              "size": 600.0,
              "notional": 405.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47807,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-14T08:58:04.667400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-14T08:58:00.741500",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-14T08:57:59.172400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-14T08:57:55.795400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47806,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-14T08:57:52.355500",
              "price": 0.675,
              "size": 400.0,
              "notional": 270.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47805,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-14T08:57:42.309200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-14T08:57:33.893200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47804,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-14T08:57:22.737100",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47803,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-14T08:57:14.894800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 47802,
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
              "retail_pct": 0.37623897117194766,
              "mixed_pct": 0.2849463585021207,
              "instit_pct": 0.2130463380888657,
              "ambiguous_pct": 0.12576833223706593,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12576833223706593,
              "retail_qty_pct": 0.02867932859922878,
              "mixed_qty_pct": 0.17984804996311643,
              "instit_qty_pct": 0.5406549358088969,
              "ambiguous_qty_pct": 0.2508176856287579,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2508176856287579,
              "retail_notional_pct": 0.028713765934534962,
              "mixed_notional_pct": 0.1806414739317294,
              "instit_notional_pct": 0.5395084398751828,
              "ambiguous_notional_pct": 0.25113632025855287,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25113632025855287,
              "run_retail_pct": 0.6021157801939465,
              "run_mixed_pct": 0.2513958272112842,
              "run_instit_pct": 0.054584190420217456,
              "run_unclear_pct": 0.09190420217455186,
              "avg_trade_size": 1777.1981900247226,
              "avg_run_notional": 2878.1524941228326,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6566632383191302,
              "medium_confidence_pct": 0.25143255950631793,
              "low_confidence_pct": 0.09190420217455186,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8766107111372317,
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
              "retail_pct": 0.47956536686495327,
              "mixed_pct": 0.04785965058496286,
              "instit_pct": 0.4709289606100699,
              "ambiguous_pct": 0.00164602194001396,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.00164602194001396,
              "retail_qty_pct": 0.23420612595597512,
              "mixed_qty_pct": 0.027588455827249912,
              "instit_qty_pct": 0.7377635955620226,
              "ambiguous_qty_pct": 0.000441822654752371,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.000441822654752371,
              "retail_notional_pct": 0.23622162896074772,
              "mixed_notional_pct": 0.02769741458396621,
              "instit_notional_pct": 0.7356535158166112,
              "ambiguous_notional_pct": 0.00042744063867489586,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00042744063867489586,
              "run_retail_pct": 0.7913067432754176,
              "run_mixed_pct": 0.03632356702937762,
              "run_instit_pct": 0.1709923063300604,
              "run_unclear_pct": 0.0013773833651443302,
              "avg_trade_size": 1458.0449426496787,
              "avg_run_notional": 2753.9063772849804,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7179512406288739,
              "low_confidence_pct": 0.2820487593711261,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4850170205230122,
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
      "n_trades": 44089,
      "n_runs": 27224,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-12",
      "last_trade_date": "2026-05-14",
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
        "retail_pct": 0.37623897117194766,
        "mixed_pct": 0.2849463585021207,
        "instit_pct": 0.2130463380888657,
        "ambiguous_pct": 0.12576833223706593,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12576833223706593,
        "retail_qty_pct": 0.02867932859922878,
        "mixed_qty_pct": 0.17984804996311643,
        "instit_qty_pct": 0.5406549358088969,
        "ambiguous_qty_pct": 0.2508176856287579,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2508176856287579,
        "retail_notional_pct": 0.028713765934534962,
        "mixed_notional_pct": 0.1806414739317294,
        "instit_notional_pct": 0.5395084398751828,
        "ambiguous_notional_pct": 0.25113632025855287,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.25113632025855287
      },
      "run_composition": {
        "retail_pct": 0.6021157801939465,
        "mixed_pct": 0.2513958272112842,
        "instit_pct": 0.054584190420217456,
        "ambiguous_pct": 0.09190420217455186,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09190420217455186
      },
      "trade_size": {
        "avg": 1777.1981900247226,
        "median": 135.0
      },
      "run_size": {
        "avg": 2878.1524941228326,
        "median": 137.0,
        "avg_length": 1.3278724654716427
      },
      "confidence": {
        "high": 0.6566632383191302,
        "medium": 0.25143255950631793,
        "low": 0.09190420217455186,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17877,
        "medium": 6845,
        "low": 2502,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.589217265077457,
        "medium": 0.28499172129102496,
        "low": 0.12579101363151807,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25978,
        "medium": 12565,
        "low": 5546,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16588,
          "mixed": 12563,
          "institutional": 9393,
          "ambiguous": 5545,
          "unobservable": 0,
          "unclear": 5545
        },
        "runs": {
          "retail": 16392,
          "mixed": 6844,
          "institutional": 1486,
          "ambiguous": 2502,
          "unobservable": 0,
          "unclear": 2502
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8766107111372317,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09190420217455186,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6021157801939465,
      "dominance_gap": 0.35071995298266234,
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
            "n_trades": 2958,
            "n_runs": 1817,
            "retail_pct": 0.36240703177822853,
            "mixed_pct": 0.28093306288032455,
            "instit_pct": 0.200473292765382,
            "ambiguous_pct": 0.15618661257606492,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15618661257606492,
            "avg_trade_size": 1586.7511832319135,
            "avg_run_notional": 2583.1645569620255,
            "retail_qty_pct": 0.030026406201198216,
            "mixed_qty_pct": 0.13390499446321588,
            "instit_qty_pct": 0.5591726056957892,
            "ambiguous_qty_pct": 0.2768959936397967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2768959936397967,
            "retail_notional_pct": 0.029999829555502056,
            "mixed_notional_pct": 0.13425369811296636,
            "instit_notional_pct": 0.5585273382321922,
            "ambiguous_notional_pct": 0.2772191340993393,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2772191340993393,
            "run_retail_pct": 0.5784259768849752,
            "run_mixed_pct": 0.26307099614749585,
            "run_instit_pct": 0.05063291139240506,
            "run_ambiguous_pct": 0.10787011557512383,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10787011557512383,
            "avg_feature_coverage": 0.8763346175013758,
            "high_confidence_pct": 0.6290588882773803,
            "medium_confidence_pct": 0.26307099614749585,
            "low_confidence_pct": 0.10787011557512383,
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
          "retail_pct": 0.37623897117194766,
          "mixed_pct": 0.2849463585021207,
          "instit_pct": 0.2130463380888657,
          "ambiguous_pct": 0.12576833223706593,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12576833223706593,
          "retail_qty_pct": 0.02867932859922878,
          "mixed_qty_pct": 0.17984804996311643,
          "instit_qty_pct": 0.5406549358088969,
          "ambiguous_qty_pct": 0.2508176856287579,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2508176856287579,
          "retail_notional_pct": 0.028713765934534962,
          "mixed_notional_pct": 0.1806414739317294,
          "instit_notional_pct": 0.5395084398751828,
          "ambiguous_notional_pct": 0.25113632025855287,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.25113632025855287,
          "run_retail_pct": 0.6021157801939465,
          "run_mixed_pct": 0.2513958272112842,
          "run_instit_pct": 0.054584190420217456,
          "run_unclear_pct": 0.09190420217455186,
          "avg_trade_size": 1777.1981900247226,
          "avg_run_notional": 2878.1524941228326,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6566632383191302,
          "medium_confidence_pct": 0.25143255950631793,
          "low_confidence_pct": 0.09190420217455186,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8766107111372317,
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
          "retail_pct": 0.47956536686495327,
          "mixed_pct": 0.04785965058496286,
          "instit_pct": 0.4709289606100699,
          "ambiguous_pct": 0.00164602194001396,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.00164602194001396,
          "retail_qty_pct": 0.23420612595597512,
          "mixed_qty_pct": 0.027588455827249912,
          "instit_qty_pct": 0.7377635955620226,
          "ambiguous_qty_pct": 0.000441822654752371,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.000441822654752371,
          "retail_notional_pct": 0.23622162896074772,
          "mixed_notional_pct": 0.02769741458396621,
          "instit_notional_pct": 0.7356535158166112,
          "ambiguous_notional_pct": 0.00042744063867489586,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00042744063867489586,
          "run_retail_pct": 0.7913067432754176,
          "run_mixed_pct": 0.03632356702937762,
          "run_instit_pct": 0.1709923063300604,
          "run_unclear_pct": 0.0013773833651443302,
          "avg_trade_size": 1458.0449426496787,
          "avg_run_notional": 2753.9063772849804,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7179512406288739,
          "low_confidence_pct": 0.2820487593711261,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4850170205230122,
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
            "retail_pct": 0.39316239316239315,
            "mixed_pct": 0.396011396011396,
            "instit_pct": 0.1168091168091168,
            "ambiguous_pct": 0.09401709401709402,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09401709401709402,
            "retail_qty_pct": 0.018598382749326146,
            "mixed_qty_pct": 0.2982479784366577,
            "instit_qty_pct": 0.14258760107816712,
            "ambiguous_qty_pct": 0.5405660377358491,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5405660377358491,
            "retail_notional_pct": 0.018511976895803958,
            "mixed_notional_pct": 0.29879945842035266,
            "instit_notional_pct": 0.1421376384845777,
            "ambiguous_notional_pct": 0.5405509261992657,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5405509261992657,
            "run_retail_pct": 0.592274678111588,
            "run_mixed_pct": 0.27896995708154504,
            "run_instit_pct": 0.04721030042918455,
            "run_unclear_pct": 0.0815450643776824,
            "avg_trade_size": 1423.502849002849,
            "avg_run_notional": 2144.4184549356223,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6394849785407726,
            "medium_confidence_pct": 0.27896995708154504,
            "low_confidence_pct": 0.0815450643776824,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8770386266094419,
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
            "retail_pct": 0.35453315290933696,
            "mixed_pct": 0.08592692828146144,
            "instit_pct": 0.5581867388362652,
            "ambiguous_pct": 0.0013531799729364006,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0013531799729364006,
            "retail_qty_pct": 0.15311137902253547,
            "mixed_qty_pct": 0.03783733654827043,
            "instit_qty_pct": 0.8087730687192803,
            "ambiguous_qty_pct": 0.0002782157099137531,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0002782157099137531,
            "retail_notional_pct": 0.15287037908168777,
            "mixed_notional_pct": 0.03793186355986243,
            "instit_notional_pct": 0.8089176013910232,
            "ambiguous_notional_pct": 0.000280155967426642,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.000280155967426642,
            "run_retail_pct": 0.7087827426810478,
            "run_mixed_pct": 0.08166409861325115,
            "run_instit_pct": 0.20801232665639446,
            "run_unclear_pct": 0.0015408320493066256,
            "avg_trade_size": 485.4245602165088,
            "avg_run_notional": 1105.4815100154083,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.736517719568567,
            "low_confidence_pct": 0.26348228043143296,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4987673343605547,
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
            "retail_pct": 0.33998651382333106,
            "mixed_pct": 0.29345920431557654,
            "instit_pct": 0.2182063385030344,
            "ambiguous_pct": 0.14834794335805798,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14834794335805798,
            "retail_qty_pct": 0.027286781901088904,
            "mixed_qty_pct": 0.1677391988658879,
            "instit_qty_pct": 0.5339312723599243,
            "ambiguous_qty_pct": 0.27104274687309887,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27104274687309887,
            "retail_notional_pct": 0.027283792055807703,
            "mixed_notional_pct": 0.16791045214519845,
            "instit_notional_pct": 0.5336524509444371,
            "ambiguous_notional_pct": 0.27115330485455663,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27115330485455663,
            "run_retail_pct": 0.5858561967833491,
            "run_mixed_pct": 0.2641911069063387,
            "run_instit_pct": 0.05227057710501419,
            "run_unclear_pct": 0.09768211920529801,
            "avg_trade_size": 1606.9823331085638,
            "avg_run_notional": 2818.3003784295174,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6381267738883633,
            "medium_confidence_pct": 0.2641911069063387,
            "low_confidence_pct": 0.09768211920529801,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8788197729422894,
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
            "retail_pct": 0.4984992655980586,
            "mixed_pct": 0.03844434510505141,
            "instit_pct": 0.46075739191519255,
            "ambiguous_pct": 0.0022989973816974264,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0022989973816974264,
            "retail_qty_pct": 0.21935566624623212,
            "mixed_qty_pct": 0.0064860935930051095,
            "instit_qty_pct": 0.7740000427560553,
            "ambiguous_qty_pct": 0.0001581974047074417,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0001581974047074417,
            "retail_notional_pct": 0.21976964626778264,
            "mixed_notional_pct": 0.0064761608149829985,
            "instit_notional_pct": 0.7735943603322215,
            "ambiguous_notional_pct": 0.00015983258501281412,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00015983258501281412,
            "run_retail_pct": 0.7934889838868793,
            "run_mixed_pct": 0.030362819248054368,
            "run_instit_pct": 0.17417516167927216,
            "run_unclear_pct": 0.0019730351857941467,
            "avg_trade_size": 1009.6617280796986,
            "avg_run_notional": 1733.0146881508276,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7227885563959224,
            "low_confidence_pct": 0.2772114436040776,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48201249588951,
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
            "retail_pct": 0.35509029486591315,
            "mixed_pct": 0.2868165325103224,
            "instit_pct": 0.22229636735204572,
            "ambiguous_pct": 0.13579680527171872,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13579680527171872,
            "retail_qty_pct": 0.023104678859939363,
            "mixed_qty_pct": 0.17528983275456259,
            "instit_qty_pct": 0.5520088383802707,
            "ambiguous_qty_pct": 0.2495966500052273,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2495966500052273,
            "retail_notional_pct": 0.02307275597328173,
            "mixed_notional_pct": 0.176404830035737,
            "instit_notional_pct": 0.5506932186134512,
            "ambiguous_notional_pct": 0.24982919537753,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24982919537753,
            "run_retail_pct": 0.596982147917257,
            "run_mixed_pct": 0.25262113913289885,
            "run_instit_pct": 0.05051005950694248,
            "run_unclear_pct": 0.09988665344290167,
            "avg_trade_size": 1959.2492597072194,
            "avg_run_notional": 3327.9200552564466,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6474213658260131,
            "medium_confidence_pct": 0.2526919807310853,
            "low_confidence_pct": 0.09988665344290167,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8777628223292717,
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
            "retail_pct": 0.4500630724510503,
            "mixed_pct": 0.04645423133878133,
            "instit_pct": 0.5014168449148979,
            "ambiguous_pct": 0.0020658512952704804,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0020658512952704804,
            "retail_qty_pct": 0.21483605436549671,
            "mixed_qty_pct": 0.030124366729072306,
            "instit_qty_pct": 0.7545373513786356,
            "ambiguous_qty_pct": 0.0005022275267953156,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0005022275267953156,
            "retail_notional_pct": 0.2154357346884562,
            "mixed_notional_pct": 0.030750623588666672,
            "instit_notional_pct": 0.7533239800093172,
            "ambiguous_notional_pct": 0.0004896617135599229,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0004896617135599229,
            "run_retail_pct": 0.7806069958847737,
            "run_mixed_pct": 0.03714726631393298,
            "run_instit_pct": 0.18037184009406232,
            "run_unclear_pct": 0.0018738977072310405,
            "avg_trade_size": 1467.8349421378819,
            "avg_run_notional": 2950.0699404761904,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6987801293356849,
            "low_confidence_pct": 0.3012198706643151,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48673390652557325,
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
            "retail_pct": 0.37623897117194766,
            "mixed_pct": 0.2849463585021207,
            "instit_pct": 0.2130463380888657,
            "ambiguous_pct": 0.12576833223706593,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12576833223706593,
            "retail_qty_pct": 0.02867932859922878,
            "mixed_qty_pct": 0.17984804996311643,
            "instit_qty_pct": 0.5406549358088969,
            "ambiguous_qty_pct": 0.2508176856287579,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2508176856287579,
            "retail_notional_pct": 0.028713765934534962,
            "mixed_notional_pct": 0.1806414739317294,
            "instit_notional_pct": 0.5395084398751828,
            "ambiguous_notional_pct": 0.25113632025855287,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25113632025855287,
            "run_retail_pct": 0.6021157801939465,
            "run_mixed_pct": 0.2513958272112842,
            "run_instit_pct": 0.054584190420217456,
            "run_unclear_pct": 0.09190420217455186,
            "avg_trade_size": 1777.1981900247226,
            "avg_run_notional": 2878.1524941228326,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6566632383191302,
            "medium_confidence_pct": 0.25143255950631793,
            "low_confidence_pct": 0.09190420217455186,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8766107111372317,
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
            "retail_pct": 0.47956536686495327,
            "mixed_pct": 0.04785965058496286,
            "instit_pct": 0.4709289606100699,
            "ambiguous_pct": 0.00164602194001396,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00164602194001396,
            "retail_qty_pct": 0.23420612595597512,
            "mixed_qty_pct": 0.027588455827249912,
            "instit_qty_pct": 0.7377635955620226,
            "ambiguous_qty_pct": 0.000441822654752371,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.000441822654752371,
            "retail_notional_pct": 0.23622162896074772,
            "mixed_notional_pct": 0.02769741458396621,
            "instit_notional_pct": 0.7356535158166112,
            "ambiguous_notional_pct": 0.00042744063867489586,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00042744063867489586,
            "run_retail_pct": 0.7913067432754176,
            "run_mixed_pct": 0.03632356702937762,
            "run_instit_pct": 0.1709923063300604,
            "run_unclear_pct": 0.0013773833651443302,
            "avg_trade_size": 1458.0449426496787,
            "avg_run_notional": 2753.9063772849804,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7179512406288739,
            "low_confidence_pct": 0.2820487593711261,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4850170205230122,
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
          "trade_id": "BMLL-378",
          "timestamp": "2026-05-14T08:59:54.003000",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47816,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-377",
          "timestamp": "2026-05-14T08:59:52.094100",
          "price": 0.675,
          "size": 800.0,
          "notional": 540.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 47815,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-376",
          "timestamp": "2026-05-14T08:59:47.075600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47814,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-375",
          "timestamp": "2026-05-14T08:59:41.476400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47814,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-374",
          "timestamp": "2026-05-14T08:59:41.325400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47814,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-373",
          "timestamp": "2026-05-14T08:59:35.855100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47814,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-372",
          "timestamp": "2026-05-14T08:59:30.042400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47814,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-371",
          "timestamp": "2026-05-14T08:59:25.409200",
          "price": 0.675,
          "size": 200.0,
          "notional": 135.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47813,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-370",
          "timestamp": "2026-05-14T08:59:21.592000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47812,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-369",
          "timestamp": "2026-05-14T08:59:21.561800",
          "price": 0.675,
          "size": 200.0,
          "notional": 135.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47811,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-368",
          "timestamp": "2026-05-14T08:59:21.380200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 47810,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-367",
          "timestamp": "2026-05-14T08:59:20.290900",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-366",
          "timestamp": "2026-05-14T08:59:17.598600",
          "price": 0.675,
          "size": 400.0,
          "notional": 270.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-365",
          "timestamp": "2026-05-14T08:59:11.767300",
          "price": 0.675,
          "size": 200.0,
          "notional": 135.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-364",
          "timestamp": "2026-05-14T08:59:06.569400",
          "price": 0.675,
          "size": 200.0,
          "notional": 135.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47809,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-363",
          "timestamp": "2026-05-14T08:58:56.230600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-362",
          "timestamp": "2026-05-14T08:58:42.766400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-361",
          "timestamp": "2026-05-14T08:58:33.287400",
          "price": 0.67,
          "size": 400.0,
          "notional": 268.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-360",
          "timestamp": "2026-05-14T08:58:32.562700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-359",
          "timestamp": "2026-05-14T08:58:26.074200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 47808,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-358",
          "timestamp": "2026-05-14T08:58:24.958300",
          "price": 0.675,
          "size": 600.0,
          "notional": 405.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47807,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-357",
          "timestamp": "2026-05-14T08:58:04.667400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-356",
          "timestamp": "2026-05-14T08:58:00.741500",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-355",
          "timestamp": "2026-05-14T08:57:59.172400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-354",
          "timestamp": "2026-05-14T08:57:55.795400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47806,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-353",
          "timestamp": "2026-05-14T08:57:52.355500",
          "price": 0.675,
          "size": 400.0,
          "notional": 270.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47805,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-352",
          "timestamp": "2026-05-14T08:57:42.309200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47804,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-351",
          "timestamp": "2026-05-14T08:57:33.893200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47804,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-350",
          "timestamp": "2026-05-14T08:57:22.737100",
          "price": 0.675,
          "size": 300.0,
          "notional": 202.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47803,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-349",
          "timestamp": "2026-05-14T08:57:14.894800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 47802,
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
      "total_trades": 44088,
      "price_moving_trades": 10532,
      "pct_price_moving": 23.888586463436763,
      "all_movers": {
        "count": 10532,
        "avg_size": 1483.0833649829092,
        "median_size": 137.0,
        "retail_count": 5565,
        "mixed_count": 3126,
        "institutional_count": 669,
        "ambiguous_count": 1172,
        "unobservable_count": 0,
        "retail_pct": 52.83896695784277,
        "mixed_pct": 29.680972274971516,
        "instit_pct": 6.352069882263578,
        "unclear_pct": 11.127990884922143
      },
      "positive_movers": {
        "count": 5259,
        "avg_size": 1466.3597642137288,
        "median_size": 137.0,
        "retail_count": 2671,
        "mixed_count": 1606,
        "institutional_count": 333,
        "ambiguous_count": 649,
        "unobservable_count": 0,
        "retail_pct": 50.78912340749192,
        "mixed_pct": 30.538125118843883,
        "instit_pct": 6.332002281802625,
        "unclear_pct": 12.34074919186157
      },
      "negative_movers": {
        "count": 5273,
        "avg_size": 1499.76256400531,
        "median_size": 138.0,
        "retail_count": 2894,
        "mixed_count": 1520,
        "institutional_count": 336,
        "ambiguous_count": 523,
        "unobservable_count": 0,
        "retail_pct": 54.88336810164991,
        "mixed_pct": 28.82609520197231,
        "instit_pct": 6.372084202541248,
        "unclear_pct": 9.918452493836526
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
            "avg_short_ratio": 0.032771630817893645,
            "max_short_ratio": 0.1365038753856573,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06936604286504579,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06150116347998836,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.13354792681919028,
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
            "avg_short_ratio": 0.025795172161735366
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
            "avg_short_ratio": 0.025795172161735366,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": 52.15466953696208
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
        "interpretation": "Shorts covering significantly (-34% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.002872737719046251,
            "short_vol": 2000,
            "total_vol": 696200,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.013897662665824383,
            "short_vol": 4400,
            "total_vol": 316600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.04928861788617886,
            "short_vol": 58200,
            "total_vol": 1180800,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.10728476821192053,
            "short_vol": 24300,
            "total_vol": 226500,
            "close": 0.675,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06936604286504579,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06343751134533533,
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
          "opening": 0.07702564085784727,
          "continuous": 0.8628902038606072,
          "closing": 0.05338437074131576,
          "auctions": 0.13710979613939284,
          "other": 0.0
        },
        "1M": {
          "opening": 0.020663381988124493,
          "continuous": 0.9015375560409801,
          "closing": 0.06989060889697853,
          "auctions": 0.09846244395901996,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04770494369633832,
          "continuous": 0.8720480286803756,
          "closing": 0.06676339091963363,
          "auctions": 0.1279519713196245,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03815901417786444,
          "continuous": 0.8671750158384988,
          "closing": 0.08325851022070871,
          "auctions": 0.13282498416150132,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.2597797974987886,
        "1M": 0.22931138091267791,
        "3M": 0.22457786029447713,
        "6M": 0.23352786494798525
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0183
        },
        {
          "time": "09:00",
          "avg_share": 0.1008
        },
        {
          "time": "09:30",
          "avg_share": 0.0416
        },
        {
          "time": "10:00",
          "avg_share": 0.0445
        },
        {
          "time": "10:30",
          "avg_share": 0.034
        },
        {
          "time": "11:00",
          "avg_share": 0.0297
        },
        {
          "time": "11:30",
          "avg_share": 0.0391
        },
        {
          "time": "12:00",
          "avg_share": 0.2362
        },
        {
          "time": "12:30",
          "avg_share": 0.0094
        },
        {
          "time": "13:00",
          "avg_share": 0.0213
        },
        {
          "time": "13:30",
          "avg_share": 0.0202
        },
        {
          "time": "14:00",
          "avg_share": 0.0318
        },
        {
          "time": "14:30",
          "avg_share": 0.0317
        },
        {
          "time": "15:00",
          "avg_share": 0.0323
        },
        {
          "time": "15:30",
          "avg_share": 0.0501
        },
        {
          "time": "16:00",
          "avg_share": 0.0385
        },
        {
          "time": "16:30",
          "avg_share": 0.1032
        },
        {
          "time": "17:00",
          "avg_share": 0.1172
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 12.008143687985772,
          "hhi": 0.22754276447074273,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.117504105585981,
          "hhi": 0.17060171129974752,
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
