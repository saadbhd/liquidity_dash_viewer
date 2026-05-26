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
    "asof_date": "2026-05-25",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "838.0M",
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
          "score_pca": 76.79856115107914,
          "score_pca_percentile": 76.79856115107914,
          "rank_pca": 130,
          "total": 556,
          "adv_notional_sgd": 178957.0,
          "adv_volume_shares": 267100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0005843861460348685,
          "votes": 380.0,
          "trades": 380.0,
          "spread_pct": 0.007557116687927361,
          "spread_ticks": 1.016260162601626,
          "amihud": 0.0,
          "volatility": 0.07088221175209525
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5015236933755156,
          "loadings": {
            "log_adv": 0.5631848269075088,
            "log_trades": 0.5187810243754641,
            "log_turnover": 0.516229378803972,
            "neg_spread": 0.3411523083316072,
            "neg_amihud": 0.04418254130507761,
            "neg_vol": -0.1698803505783105
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
          "peer_median_adv": 971982.0,
          "peer_median_score_pca": 82.01438848920863,
          "peer_median_trades": 682.0,
          "peer_median_volatility": 0.14555417938472365,
          "peer_median_spread_pct": 0.007828128162597958,
          "peer_median_spread_ticks": 1.024776324845148,
          "peer_median_amihud": 7.853630814417801e-09,
          "peer_median_turnover_ratio": 0.0012188996647673337,
          "target_vs_peer": {
            "score_pca_delta": -5.22,
            "adv_delta_pct": -81.6,
            "trades_delta_pct": -44.28,
            "volatility_delta_pct": 51.3,
            "spread_pct_delta_pct": 3.46,
            "spread_ticks_delta_pct": -0.83,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": -52.06
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 76.79856115107914,
            "rank_pca": 130,
            "adv": 178957.0,
            "trades": 380.0,
            "volatility": 0.07088221175209525,
            "spread_pct": 0.007557116687927361,
            "spread_ticks": 1.016260162601626,
            "amihud": 0.0,
            "turnover_ratio": 0.0005843861460348685,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 82.01438848920863,
            "rank_pca": 101,
            "adv": 971982.0,
            "trades": 682.0,
            "volatility": 0.14555417938472365,
            "spread_pct": 0.007828128162597958,
            "spread_ticks": 1.024776324845148,
            "amihud": 7.853630814417801e-09,
            "turnover_ratio": 0.0012188996647673337,
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
              "mean": 0.26073149701675813,
              "median": 0.12314863947395847,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.867247527938474,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2763806.6923070587,
              "median": 15882.0,
              "min": 0.0,
              "max": 158512738.0,
              "p5": 0.0,
              "p95": 14302418.75,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10357585320035632,
              "median": 0.03125000000000003,
              "min": 0.0002630736276341987,
              "max": 1.7037037037037037,
              "p5": 0.003318113744926958,
              "p95": 0.4954250655588474,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0050018210540971894,
              "median": 0.0003191309690936439,
              "min": 0.0,
              "max": 0.6855184233076264,
              "p5": 0.0,
              "p95": 0.013918336424207405,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.770481718289762e-05,
              "median": 1.826969541677288e-08,
              "min": 0.0,
              "max": 0.012499999999999997,
              "p5": 0.0,
              "p95": 6.509435796140764e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 495.64208633093523,
              "median": 9.0,
              "min": 0.0,
              "max": 13347.0,
              "p5": 0.0,
              "p95": 3312.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.25043014109942724,
              "median": 0.10919389915525662,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.024808774113233338,
              "p95": 0.9001731276896987,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 5974549.226790986,
              "median": 217281.0,
              "min": 0.0,
              "max": 40499795.0,
              "p5": 13412.705014762036,
              "p95": 28330051.74999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03195253655505105,
              "median": 0.00852235901217456,
              "min": 0.00445813465297965,
              "max": 0.13333333333333333,
              "p5": 0.00446197560278707,
              "p95": 0.11435028248587567,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019341832170699774,
              "median": 0.0009016429054011011,
              "min": 0.0,
              "max": 0.004986045501972649,
              "p5": 3.4246776806392374e-05,
              "p95": 0.004933723302919801,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.731426586082771e-08,
              "median": 0.0,
              "min": 0.0,
              "max": 2.533462302113762e-07,
              "p5": 0.0,
              "p95": 1.7969845039228848e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 900.875,
              "median": 366.0,
              "min": 0.0,
              "max": 3941.0,
              "p5": 3.5000000000000004,
              "p95": 3202.499999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 971982.0,
              "median": 971982.0,
              "min": 971982.0,
              "max": 971982.0,
              "p5": 971982.0,
              "p95": 971982.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 682.0,
              "median": 682.0,
              "min": 682.0,
              "max": 682.0,
              "p5": 682.0,
              "p95": 682.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14555417938472365,
              "median": 0.14555417938472365,
              "min": 0.14555417938472365,
              "max": 0.14555417938472365,
              "p5": 0.14555417938472365,
              "p95": 0.14555417938472365,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007828128162597958,
              "median": 0.007828128162597958,
              "min": 0.007828128162597958,
              "max": 0.007828128162597958,
              "p5": 0.007828128162597958,
              "p95": 0.007828128162597958,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.024776324845148,
              "median": 1.024776324845148,
              "min": 1.024776324845148,
              "max": 1.024776324845148,
              "p5": 1.024776324845148,
              "p95": 1.024776324845148,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.853630814417801e-09,
              "median": 7.853630814417801e-09,
              "min": 7.853630814417801e-09,
              "max": 7.853630814417801e-09,
              "p5": 7.853630814417801e-09,
              "p95": 7.853630814417801e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012188996647673337,
              "median": 0.0012188996647673337,
              "min": 0.0012188996647673337,
              "max": 0.0012188996647673337,
              "p5": 0.0012188996647673337,
              "p95": 0.0012188996647673337,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0004735263143342827,
            "sector": 0.0,
            "peers": 0.007633587786259444,
            "vs_market": -0.0004735263143342827,
            "vs_sector": 0.0,
            "vs_peers": -0.007633587786259444
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
          "spread_pct": 0.007547169811320759,
          "spread_ticks": 1.0,
          "amihud": 1.2051208186646115e-08,
          "volatility": 0.09877132560331238
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5221699736735255,
          "loadings": {
            "log_adv": 0.5447396713545345,
            "log_trades": 0.496801986627357,
            "log_turnover": 0.4907051999051254,
            "neg_spread": 0.41069274561715624,
            "neg_amihud": 0.13269705279571542,
            "neg_vol": 0.17139966218901767
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
          "peer_median_adv": 861102.0,
          "peer_median_score_pca": 83.99280575539568,
          "peer_median_trades": 825.0,
          "peer_median_volatility": 0.12296716539964252,
          "peer_median_spread_pct": 0.00755900731108807,
          "peer_median_spread_ticks": 1.0024813895781637,
          "peer_median_amihud": 5.046565365143366e-09,
          "peer_median_turnover_ratio": 0.001079852239167475,
          "target_vs_peer": {
            "score_pca_delta": -2.88,
            "adv_delta_pct": -44.5,
            "trades_delta_pct": -60.48,
            "volatility_delta_pct": 19.68,
            "spread_pct_delta_pct": 0.16,
            "spread_ticks_delta_pct": -0.25,
            "amihud_delta_pct": -138.8,
            "turnover_ratio_delta_pct": 45.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.11510791366906,
            "rank_pca": 106,
            "adv": 477935.5,
            "trades": 326.0,
            "volatility": 0.09877132560331238,
            "spread_pct": 0.007547169811320759,
            "spread_ticks": 1.0,
            "amihud": 1.2051208186646115e-08,
            "turnover_ratio": 0.00157243849927091,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 83.99280575539568,
            "rank_pca": 90,
            "adv": 861102.0,
            "trades": 825.0,
            "volatility": 0.12296716539964252,
            "spread_pct": 0.00755900731108807,
            "spread_ticks": 1.0024813895781637,
            "amihud": 5.046565365143366e-09,
            "turnover_ratio": 0.001079852239167475,
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
              "mean": 0.6297220784465721,
              "median": 0.39883545547780097,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08535081743222095,
              "p95": 1.9553610033578983,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3496280.6573026506,
              "median": 18393.9,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 14896319.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09673839167482731,
              "median": 0.03100958693336488,
              "min": 0.0002872245650042818,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.4356284569902718,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006419063748871638,
              "median": 0.0003313476048005184,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.01379731142668417,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.714425133466879e-05,
              "median": 1.2312475230762787e-07,
              "min": 0.0,
              "max": 0.011904761904761915,
              "p5": 0.0,
              "p95": 5.412093995505483e-05,
              "count": 549
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 538.6474820143885,
              "median": 9.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3203.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2994999401193761,
              "median": 0.13722996565399195,
              "min": 0.09001392771956264,
              "max": 1.4823077934618785,
              "p5": 0.09307901697887505,
              "p95": 1.0229877788416828,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9957719.317200208,
              "median": 516781.5,
              "min": 0.0,
              "max": 69289026.0,
              "p5": 10989.720000000001,
              "p95": 47966106.89999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03982617842889028,
              "median": 0.008304390533372093,
              "min": 0.00436181501591727,
              "max": 0.1424083769633507,
              "p5": 0.0043953925613415875,
              "p95": 0.13923211169284463,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00232741659544905,
              "median": 0.0012475620669187809,
              "min": 0.0,
              "max": 0.008605527448650745,
              "p5": 7.104573975260255e-05,
              "p95": 0.007342155840160234,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.056355767473025e-09,
              "median": 3.105700355881638e-10,
              "min": 0.0,
              "max": 3.073193251681839e-08,
              "p5": 0.0,
              "p95": 2.4193679001258084e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1288.875,
              "median": 336.5,
              "min": 0.0,
              "max": 6286.0,
              "p5": 8.75,
              "p95": 4950.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 861102.0,
              "median": 861102.0,
              "min": 861102.0,
              "max": 861102.0,
              "p5": 861102.0,
              "p95": 861102.0,
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
              "mean": 0.12296716539964252,
              "median": 0.12296716539964252,
              "min": 0.12296716539964252,
              "max": 0.12296716539964252,
              "p5": 0.12296716539964252,
              "p95": 0.12296716539964252,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00755900731108807,
              "median": 0.00755900731108807,
              "min": 0.00755900731108807,
              "max": 0.00755900731108807,
              "p5": 0.00755900731108807,
              "p95": 0.00755900731108807,
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
              "mean": 5.046565365143366e-09,
              "median": 5.046565365143366e-09,
              "min": 5.046565365143366e-09,
              "max": 5.046565365143366e-09,
              "p5": 5.046565365143366e-09,
              "p95": 5.046565365143366e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001079852239167475,
              "median": 0.001079852239167475,
              "min": 0.001079852239167475,
              "max": 0.001079852239167475,
              "p5": 0.001079852239167475,
              "p95": 0.001079852239167475,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.015151515151515138,
            "market": 0.02557385351512753,
            "sector": -0.00579582843242088,
            "peers": -0.03649635036496368,
            "vs_market": -0.010422338363612393,
            "vs_sector": 0.020947343583936018,
            "vs_peers": 0.05164786551647882
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
          "adv_notional_sgd": 644996.0,
          "adv_volume_shares": 941600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0020601197869952537,
          "votes": 413.0,
          "trades": 413.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.17879181412413198
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5573968456489309,
          "loadings": {
            "log_adv": 0.5218861373608259,
            "log_trades": 0.4708871345832243,
            "log_turnover": 0.4786825209128084,
            "neg_spread": 0.41504764795594734,
            "neg_amihud": 0.21481201207342746,
            "neg_vol": 0.24156667750821592
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
          "peer_median_score_pca": 85.61151079136691,
          "peer_median_trades": 848.0,
          "peer_median_volatility": 0.18373287642084696,
          "peer_median_spread_pct": 0.00760309589063116,
          "peer_median_spread_ticks": 1.0047961630695443,
          "peer_median_amihud": 6.1955971199717675e-09,
          "peer_median_turnover_ratio": 0.0013235162992662752,
          "target_vs_peer": {
            "score_pca_delta": -1.98,
            "adv_delta_pct": -41.1,
            "trades_delta_pct": -51.3,
            "volatility_delta_pct": 2.69,
            "spread_pct_delta_pct": -0.86,
            "spread_ticks_delta_pct": -0.48,
            "amihud_delta_pct": 1.61,
            "turnover_ratio_delta_pct": 55.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.63309352517986,
            "rank_pca": 92,
            "adv": 644996.0,
            "trades": 413.0,
            "volatility": 0.17879181412413198,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.0020601197869952537,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.61151079136691,
            "rank_pca": 81,
            "adv": 1095383.5,
            "trades": 848.0,
            "volatility": 0.18373287642084696,
            "spread_pct": 0.00760309589063116,
            "spread_ticks": 1.0047961630695443,
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
              "mean": 0.6986582433961841,
              "median": 0.47067780794993297,
              "min": 0.0,
              "max": 6.916553309085341,
              "p5": 0.1556209011664717,
              "p95": 2.250447984076117,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3341228.847952133,
              "median": 14132.8,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 14143887.75,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1012652678512444,
              "median": 0.032338308457711476,
              "min": 0.0002805689255457263,
              "max": 1.2394366197183098,
              "p5": 0.0034758312328819923,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547639250074105,
              "median": 0.0002650704022521927,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.01128061556452464,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2996056164139764e-05,
              "median": 1.487180622012699e-07,
              "min": 0.0,
              "max": 0.0007680491551459317,
              "p5": 0.0,
              "p95": 3.46248922276352e-05,
              "count": 551
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.78057553956836,
              "median": 7.0,
              "min": 0.0,
              "max": 11380.0,
              "p5": 0.0,
              "p95": 2997.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3412901174799808,
              "median": 0.18603563245761298,
              "min": 0.13706570042659272,
              "max": 1.3975478017204908,
              "p5": 0.15166984022073146,
              "p95": 0.9994269809448144,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10854993.964399124,
              "median": 714080.5,
              "min": 0.0,
              "max": 73705554.0,
              "p5": 4140.5,
              "p95": 51579123.099999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03825801276531234,
              "median": 0.008384058561742444,
              "min": 0.004331174309860836,
              "max": 0.15384615384615383,
              "p5": 0.004395174440279933,
              "p95": 0.13808487486398255,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025369146800140983,
              "median": 0.0011671703582298463,
              "min": 0.0,
              "max": 0.008733466576681911,
              "p5": 0.00010190938609458527,
              "p95": 0.007893634337667082,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.793502561357101e-07,
              "median": 6.1456217711224576e-09,
              "min": 0.0,
              "max": 6.981022091444426e-06,
              "p5": 3.267082641860938e-11,
              "p95": 4.549491282968967e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1239.875,
              "median": 460.5,
              "min": 0.0,
              "max": 6075.0,
              "p5": 6.300000000000001,
              "p95": 4658.199999999998,
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
              "mean": 0.18373287642084696,
              "median": 0.18373287642084696,
              "min": 0.18373287642084696,
              "max": 0.18373287642084696,
              "p5": 0.18373287642084696,
              "p95": 0.18373287642084696,
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
              "mean": 1.0047961630695443,
              "median": 1.0047961630695443,
              "min": 1.0047961630695443,
              "max": 1.0047961630695443,
              "p5": 1.0047961630695443,
              "p95": 1.0047961630695443,
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
            "stock": -0.021897810218977853,
            "market": 0.005796035195015259,
            "sector": -0.019564724113965815,
            "peers": -0.07692307692307698,
            "vs_market": -0.027693845413993112,
            "vs_sector": -0.002333086105012039,
            "vs_peers": 0.05502526670409913
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
          "votes": 343.0,
          "trades": 343.0,
          "spread_pct": 0.007490636704119858,
          "spread_ticks": 1.0,
          "amihud": 3.9140585202070595e-09,
          "volatility": 0.14054897138885009
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.579307771714983,
          "loadings": {
            "log_adv": 0.5029346554990648,
            "log_trades": 0.4470301311445324,
            "log_turnover": 0.45818903761392493,
            "neg_spread": 0.4305888306539804,
            "neg_amihud": 0.2664849932729867,
            "neg_vol": 0.28436351248656755
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
          "peer_median_adv": 1108351.5,
          "peer_median_score_pca": 86.6906474820144,
          "peer_median_trades": 768.0,
          "peer_median_volatility": 0.1609561074943504,
          "peer_median_spread_pct": 0.00724156221737917,
          "peer_median_spread_ticks": 1.0032629993208255,
          "peer_median_amihud": 5.164666225731466e-09,
          "peer_median_turnover_ratio": 0.001240874123991597,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -49.7,
            "trades_delta_pct": -55.34,
            "volatility_delta_pct": 12.68,
            "spread_pct_delta_pct": -3.44,
            "spread_ticks_delta_pct": -0.33,
            "amihud_delta_pct": 24.21,
            "turnover_ratio_delta_pct": 47.94
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.89208633093526,
            "rank_pca": 85,
            "adv": 557574.0,
            "trades": 343.0,
            "volatility": 0.14054897138885009,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 3.9140585202070595e-09,
            "turnover_ratio": 0.0018357513883585043,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.6906474820144,
            "rank_pca": 75,
            "adv": 1108351.5,
            "trades": 768.0,
            "volatility": 0.1609561074943504,
            "spread_pct": 0.00724156221737917,
            "spread_ticks": 1.0032629993208255,
            "amihud": 5.164666225731466e-09,
            "turnover_ratio": 0.001240874123991597,
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
              "mean": 0.6889612950738538,
              "median": 0.4638191016307287,
              "min": 0.0,
              "max": 6.985699678629192,
              "p5": 0.15322016166337624,
              "p95": 2.00359794096288,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2750438.875107048,
              "median": 12328.525000000001,
              "min": 0.0,
              "max": 256049087.60000002,
              "p5": 0.0,
              "p95": 11354203.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09528341730906953,
              "median": 0.029248195685443523,
              "min": 0.00027368816798512355,
              "max": 1.267605633802817,
              "p5": 0.003662131301335203,
              "p95": 0.4651295118463559,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036928110353029535,
              "median": 0.0002776127577174482,
              "min": 0.0,
              "max": 1.0299255157866982,
              "p5": 0.0,
              "p95": 0.00808210065449701,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.527329936183962e-06,
              "median": 1.5396592063738855e-07,
              "min": 0.0,
              "max": 0.0004555293191656827,
              "p5": 0.0,
              "p95": 3.441741312640073e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 405.5674460431655,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2324.875,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3580860566684624,
              "median": 0.16313282553761954,
              "min": 0.11683915634731308,
              "max": 1.3896496620542778,
              "p5": 0.12513759161185103,
              "p95": 1.0990315445321142,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8781084.652363377,
              "median": 629622.625,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 13601.42,
              "p95": 40931737.34999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03592938311529791,
              "median": 0.008187377504467873,
              "min": 0.004274986168547341,
              "max": 0.13333333333333333,
              "p5": 0.004344782048773242,
              "p95": 0.12579667946059614,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002333873259997993,
              "median": 0.0013427917613119279,
              "min": 0.0,
              "max": 0.006834523443560886,
              "p5": 8.196672230438104e-05,
              "p95": 0.006604349535182897,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.97051909048962e-07,
              "median": 4.539362372969263e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.3048834462562446e-11,
              "p95": 4.12544661146755e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1132.125,
              "median": 385.25,
              "min": 0.0,
              "max": 5575.5,
              "p5": 8.225000000000001,
              "p95": 4283.999999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1108351.5,
              "median": 1108351.5,
              "min": 1108351.5,
              "max": 1108351.5,
              "p5": 1108351.5,
              "p95": 1108351.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 768.0,
              "median": 768.0,
              "min": 768.0,
              "max": 768.0,
              "p5": 768.0,
              "p95": 768.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1609561074943504,
              "median": 0.1609561074943504,
              "min": 0.1609561074943504,
              "max": 0.1609561074943504,
              "p5": 0.1609561074943504,
              "p95": 0.1609561074943504,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00724156221737917,
              "median": 0.00724156221737917,
              "min": 0.00724156221737917,
              "max": 0.00724156221737917,
              "p5": 0.00724156221737917,
              "p95": 0.00724156221737917,
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
              "mean": 5.164666225731466e-09,
              "median": 5.164666225731466e-09,
              "min": 5.164666225731466e-09,
              "max": 5.164666225731466e-09,
              "p5": 5.164666225731466e-09,
              "p95": 5.164666225731466e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001240874123991597,
              "median": 0.001240874123991597,
              "min": 0.001240874123991597,
              "max": 0.001240874123991597,
              "p5": 0.001240874123991597,
              "p95": 0.001240874123991597,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.021897810218977964,
            "market": 0.12382441714617798,
            "sector": -0.01835894831732765,
            "peers": -0.16981132075471672,
            "vs_market": -0.14572222736515594,
            "vs_sector": -0.0035388619016503142,
            "vs_peers": 0.14791351053573876
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 76.8 vs peer median 82.0 (-5.2 pts).",
        "market_comparison": "The stock was flat on the day while peers rose 0.8%, so trading support was less evident than in the peer group."
      },
      "30d": {
        "liquidity": "Monthly tradability is average, with a 1M liquidity score of 81.1 compared with a peer median of 84.0, leaving access broadly serviceable but not standout.",
        "market_comparison": "The stock returned 1.5% over the month while peers fell 3.6%, which gives liquidity a firmer price backdrop than the group."
      },
      "3m": {
        "liquidity": "Quarterly tradability remains average, with a 3M liquidity score of 83.6 compared with a peer median of 85.6, indicating access has stayed close to peer norms.",
        "market_comparison": "Return -2.2% vs peers -7.7%."
      },
      "6m": {
        "liquidity": "Structural liquidity is average for its size, with a 6M score of 84.9 compared with a peer median of 86.7, so access looks broadly in line rather than clearly strong.",
        "market_comparison": "The stock fell 2.2% over 6M while peers fell 17.0%, which suggests the trading backdrop has held up better than the group."
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
      "current_regime_probability": 0.99999999999999,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.4944588001464733,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "49.4%",
          "display_range": null,
          "display_text": "49.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 49.4,
          "plain_english": "Market explains about 49.4% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4440436569981499,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "44.4%",
          "display_range": null,
          "display_text": "44.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 44.4,
          "plain_english": "Sector explains about 44.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.06149754285537681,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.1%",
          "display_range": null,
          "display_text": "6.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 6.1,
          "plain_english": "Company-specific explains about 6.1% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.4501168704418296,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.45",
          "display_range": null,
          "display_text": "0.45",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.45% stock move in the same direction in this state.",
          "value_num": 0.45
        },
        "beta_stock_lag": {
          "median": 0.2735095392525562,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.27",
          "display_range": null,
          "display_text": "0.27",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.27
        },
        "beta_sector": {
          "median": -0.6815427468219923,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.68",
          "display_range": null,
          "display_text": "-0.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.68% stock move in the opposite direction in this state.",
          "value_num": -0.68
        },
        "beta_market_lag": {
          "median": -0.8027401624674646,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.80",
          "display_range": null,
          "display_text": "-0.80",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.8
        },
        "beta_sector_lag": {
          "median": 0.6438459178642563,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.64",
          "display_range": null,
          "display_text": "0.64",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.64
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
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
          "period_label": "2026-05-04 to 2026-05-25",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8208573498121035,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.1%",
            "display_range": null,
            "display_text": "82.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 82.1,
            "plain_english": "Company-specific explains about 82.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.0974844882939047,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.7%",
              "display_range": null,
              "display_text": "9.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 9.7,
              "plain_english": "Market explains about 9.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08165816189399187,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.2%",
              "display_range": null,
              "display_text": "8.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 8.2,
              "plain_english": "Sector explains about 8.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8208573498121035,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.1%",
              "display_range": null,
              "display_text": "82.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 82.1,
              "plain_english": "Company-specific explains about 82.1% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.3426293206476763,
          "expected_duration_days": 1.8907381838709605,
          "current_probability": 0.99999999999999,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.99995948256675,
          "volatility": {
            "median": 2.897349763166967e-128,
            "low": 2.897349763166967e-128,
            "high": 2.897349763166967e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10222205391312149,
          "jump_rate": 0.0,
          "risk_score": 0.025865343754839374,
          "metrics": {
            "rolling_vol_10d": 0.006588819119547666,
            "downside_vol_10d": 0.0035936672207428776,
            "drawdown_21d": 0.009480325295896304,
            "amihud_stress": 2.6499782604333634e-252,
            "spread_rel": 75.81685149380931,
            "spread_ticks": 1.0172988264355767,
            "log_notional": 13.099036601610049,
            "log_trade_count": 5.72738039375515
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3350705527363911,
          "expected_duration_days": 1.7787180015242907,
          "current_probability": 8.059664782870994e-222,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 84.10270873683416,
          "volatility": {
            "median": 0.007409156388257532,
            "low": 0.007409156388257532,
            "high": 0.007409156388257532
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2264747927169541,
          "jump_rate": 8.838034837332633e-07,
          "risk_score": 0.141714566978503,
          "metrics": {
            "rolling_vol_10d": 0.006688808624737277,
            "downside_vol_10d": 0.0036718892111419262,
            "drawdown_21d": 0.0100045326800131,
            "amihud_stress": 0.8784164337507896,
            "spread_rel": 74.46159562119287,
            "spread_ticks": 1.003952808475737,
            "log_notional": 13.270678895246675,
            "log_trade_count": 5.856495831843359
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1549694493250959,
          "expected_duration_days": 1.4424552619466495,
          "current_probability": 1.007225187267905e-14,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 38.897331780599075,
          "volatility": {
            "median": 0.0120615937965651,
            "low": 0.0120615937965651,
            "high": 0.0120615937965651
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3376570605276326,
          "jump_rate": 0.12854161046148802,
          "risk_score": 0.5177884463319871,
          "metrics": {
            "rolling_vol_10d": 0.008469871325236373,
            "downside_vol_10d": 0.004502033853990481,
            "drawdown_21d": 0.007654289486291656,
            "amihud_stress": 0.9709653561523228,
            "spread_rel": 77.94158406865168,
            "spread_ticks": 1.0509794445616703,
            "log_notional": 13.573024644238055,
            "log_trade_count": 5.768314161338725
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 2.921198422523134e-32,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19299646836218132,
          "jump_rate": 0.047619047619047686,
          "risk_score": 0.7643438904183459,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193383,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770921,
            "log_trade_count": 6.156592091448428
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.47110604285111946,
            0.39983191616131053,
            0.12894458732580996,
            0.00011745366176005203
          ],
          [
            0.35991975590587083,
            0.43779733541627186,
            0.19083095880642684,
            0.011451949871430394
          ],
          [
            0.37654646416426096,
            0.28968456450697083,
            0.30673759777446324,
            0.027031373554304884
          ],
          [
            0.0002373042240151887,
            0.047697581853232134,
            0.00023787139783579446,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            40.0,
            34.0,
            11.0,
            0.0
          ],
          [
            30.0,
            37.0,
            16.0,
            1.0
          ],
          [
            15.0,
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
          "probability": 0.99999999999999,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 8.059664782870994e-222,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.007225187267905e-14,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 2.921198422523134e-32,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.10222205391312386,
        "current_score": 0.05142524193325754,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11037.87252274266,
        "loglik": -4991.255505684245,
        "n_params": 191,
        "bic_delta_vs_next_best": 528.4207781589466,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13388.303016746067,
            "loglik": -6442.743399642538,
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
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
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
            "bic": 11566.293300901607,
            "loglik": -5396.364944711579,
            "n_params": 140,
            "converged": true,
            "iterations": 16,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300901607,
                "loglik": -5396.364944711579,
                "n_params": 140,
                "converged": true,
                "iterations": 16
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300904888,
                "loglik": -5396.364944713219,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300910489,
                "loglik": -5396.36494471602,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11037.87252274266,
            "loglik": -4991.255505684245,
            "n_params": 191,
            "converged": true,
            "iterations": 21,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.87252274266,
                "loglik": -4991.255505684245,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.872536976822,
                "loglik": -4991.2555128013255,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.87255596624,
                "loglik": -4991.2555222960345,
                "n_params": 191,
                "converged": true,
                "iterations": 19
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
              "bic": 11037.87252274266,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11037.872536976822,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11037.87255596624,
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
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6366.522952251611,
                "3": 5406.0804256482625,
                "4": 5508.1394230013375
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
                "2": 10333.508746561956,
                "3": 9969.789335613525,
                "4": 8815.484022077942
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
                "2": 13388.303016746067,
                "3": 11566.293300901607,
                "4": 11037.872570684103
              },
              "valid": true
            }
          ],
          "stable": false
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
        "bic_delta_vs_next_best": 528.4207781589466,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 528.42 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 38.897331780599075,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.99995948256675,
              "pct_time": 0.3426293206476763,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 84.10270873683416,
              "pct_time": 0.3350705527363911,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 38.897331780599075,
              "pct_time": 0.1549694493250959,
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
            0.47110604285111946,
            0.43779733541627186,
            0.30673759777446324,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.8907381838709605,
            1.7787180015242907,
            1.4424552619466495,
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
              "bic": 11037.87252274266,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11037.872536976822,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11037.87255596624,
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
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6366.522952251611,
                "3": 5406.0804256482625,
                "4": 5508.1394230013375
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
                "2": 10333.508746561956,
                "3": 9969.789335613525,
                "4": 8815.484022077942
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
                "2": 13388.303016746067,
                "3": 11566.293300901607,
                "4": 11037.872570684103
              },
              "valid": true
            }
          ],
          "stable": false
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.025865343754839374,
            "jump_probability": 0.10222205391312149,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006588819119547666,
            "downside_vol_10d": 0.0035936672207428776,
            "drawdown_21d": 0.009480325295896304,
            "amihud_stress": 2.6499782604333634e-252,
            "spread_rel": 75.81685149380931,
            "spread_ticks": 1.0172988264355767,
            "log_notional": 13.099036601610049,
            "log_trade_count": 5.72738039375515
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.141714566978503,
            "jump_probability": 0.2264747927169541,
            "jump_rate": 8.838034837332633e-07,
            "rolling_vol_10d": 0.006688808624737277,
            "downside_vol_10d": 0.0036718892111419262,
            "drawdown_21d": 0.0100045326800131,
            "amihud_stress": 0.8784164337507896,
            "spread_rel": 74.46159562119287,
            "spread_ticks": 1.003952808475737,
            "log_notional": 13.270678895246675,
            "log_trade_count": 5.856495831843359
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5177884463319871,
            "jump_probability": 0.3376570605276326,
            "jump_rate": 0.12854161046148802,
            "rolling_vol_10d": 0.008469871325236373,
            "downside_vol_10d": 0.004502033853990481,
            "drawdown_21d": 0.007654289486291656,
            "amihud_stress": 0.9709653561523228,
            "spread_rel": 77.94158406865168,
            "spread_ticks": 1.0509794445616703,
            "log_notional": 13.573024644238055,
            "log_trade_count": 5.768314161338725
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7643438904183459,
            "jump_probability": 0.19299646836218132,
            "jump_rate": 0.047619047619047686,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193383,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770921,
            "log_trade_count": 6.156592091448428
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
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999921400404218,
            7.859959578249766e-06,
            2.1251930324584884e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999881217839656,
            1.187821603445596e-05,
            1.9506701560645355e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999756610647331,
            2.433893526681093e-05,
            2.219837310231105e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999963217807865,
            3.678219213494952e-05,
            2.037496479934209e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999898146218539,
            1.0185378146164252e-05,
            3.836553744203363e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999846072761138,
            1.5392723886125038e-05,
            3.5214436258943066e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999884389441955,
            1.1561055804453506e-05,
            4.172589160962082e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999928074777334,
            7.192522266545304e-06,
            3.3474502443804377e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            7.550817310902684e-37,
            1.0,
            1.5244874390602417e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            7.899631959267083e-37,
            1.0,
            2.4190060291469538e-23
          ],
          "jump_probability": 0.16914375656737293,
          "jump_score": 0.8659062576406098
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999531011925,
            6.020352044630865e-217,
            4.689880750403693e-08,
            1.3817611700371793e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999413238114,
            7.880157029938508e-217,
            5.867618861653875e-08,
            2.7431287069860947e-26
          ],
          "jump_probability": 0.14360945040250525,
          "jump_score": 0.6972790812432602
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999251601,
            9.311275263657318e-218,
            7.483982762091674e-11,
            1.9282209752079072e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999063661,
            1.2187711208664158e-217,
            9.363384971813729e-11,
            3.827983075835974e-29
          ],
          "jump_probability": 0.11616876810363819,
          "jump_score": 0.48545904430158543
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999995417,
            7.738028485815931e-220,
            4.583706556289155e-13,
            3.6319119434231034e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999993674,
            7.066905139919348e-220,
            6.326067187683491e-13,
            3.044609136925726e-29
          ],
          "jump_probability": 0.08341566728210535,
          "jump_score": 0.16581049540522047
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999645926953881,
            3.540730461197953e-05,
            4.537897381067403e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999661560801384,
            3.384391986168098e-05,
            6.882648119864461e-27
          ],
          "jump_probability": 0.16530751519714065,
          "jump_score": 0.8419513847267664
        },
        {
          "trade_date": "2026-05-25",
          "state": 0,
          "probabilities": [
            0.99999999999999,
            8.059664782870994e-222,
            1.007225187267905e-14,
            2.921198422523134e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.99999999999999,
            8.059664782870994e-222,
            1.007225187267905e-14,
            2.921198422523134e-32
          ],
          "jump_probability": 0.0738937326506577,
          "jump_score": 0.05142524193325754
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
        "market_link_display": "0.45",
        "sector_link_display": "-0.68",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.45% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.68% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.27",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 49.4,
        "driver_share_display": "49.4%",
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
        "jump_risk_probability": 10.2,
        "jump_risk_score": 0.05,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.47110604285111946,
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
          "pct_time": 0.3426293206476763,
          "expected_duration_days": 1.8907381838709605,
          "current_probability": 0.99999999999999,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.99995948256675,
          "volatility": {
            "median": 2.897349763166967e-128,
            "low": 2.897349763166967e-128,
            "high": 2.897349763166967e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10222205391312149,
          "jump_rate": 0.0,
          "risk_score": 0.025865343754839374,
          "metrics": {
            "rolling_vol_10d": 0.006588819119547666,
            "downside_vol_10d": 0.0035936672207428776,
            "drawdown_21d": 0.009480325295896304,
            "amihud_stress": 2.6499782604333634e-252,
            "spread_rel": 75.81685149380931,
            "spread_ticks": 1.0172988264355767,
            "log_notional": 13.099036601610049,
            "log_trade_count": 5.72738039375515
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3350705527363911,
          "expected_duration_days": 1.7787180015242907,
          "current_probability": 8.059664782870994e-222,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 84.10270873683416,
          "volatility": {
            "median": 0.007409156388257532,
            "low": 0.007409156388257532,
            "high": 0.007409156388257532
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.2264747927169541,
          "jump_rate": 8.838034837332633e-07,
          "risk_score": 0.141714566978503,
          "metrics": {
            "rolling_vol_10d": 0.006688808624737277,
            "downside_vol_10d": 0.0036718892111419262,
            "drawdown_21d": 0.0100045326800131,
            "amihud_stress": 0.8784164337507896,
            "spread_rel": 74.46159562119287,
            "spread_ticks": 1.003952808475737,
            "log_notional": 13.270678895246675,
            "log_trade_count": 5.856495831843359
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1549694493250959,
          "expected_duration_days": 1.4424552619466495,
          "current_probability": 1.007225187267905e-14,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 38.897331780599075,
          "volatility": {
            "median": 0.0120615937965651,
            "low": 0.0120615937965651,
            "high": 0.0120615937965651
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3376570605276326,
          "jump_rate": 0.12854161046148802,
          "risk_score": 0.5177884463319871,
          "metrics": {
            "rolling_vol_10d": 0.008469871325236373,
            "downside_vol_10d": 0.004502033853990481,
            "drawdown_21d": 0.007654289486291656,
            "amihud_stress": 0.9709653561523228,
            "spread_rel": 77.94158406865168,
            "spread_ticks": 1.0509794445616703,
            "log_notional": 13.573024644238055,
            "log_trade_count": 5.768314161338725
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083664,
          "expected_duration_days": 20.758620689655157,
          "current_probability": 2.921198422523134e-32,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.0,
          "volatility": {
            "median": 0.014842549552227611,
            "low": 0.014842549552227611,
            "high": 0.014842549552227611
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19299646836218132,
          "jump_rate": 0.047619047619047686,
          "risk_score": 0.7643438904183459,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193383,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770921,
            "log_trade_count": 6.156592091448428
          }
        }
      ],
      "transitions": [
        [
          0.47110604285111946,
          0.39983191616131053,
          0.12894458732580996,
          0.00011745366176005203
        ],
        [
          0.35991975590587083,
          0.43779733541627186,
          0.19083095880642684,
          0.011451949871430394
        ],
        [
          0.37654646416426096,
          0.28968456450697083,
          0.30673759777446324,
          0.027031373554304884
        ],
        [
          0.0002373042240151887,
          0.047697581853232134,
          0.00023787139783579446,
          0.9518272425249169
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.47110604285111946,
            0.39983191616131053,
            0.12894458732580996,
            0.00011745366176005203
          ],
          [
            0.35991975590587083,
            0.43779733541627186,
            0.19083095880642684,
            0.011451949871430394
          ],
          [
            0.37654646416426096,
            0.28968456450697083,
            0.30673759777446324,
            0.027031373554304884
          ],
          [
            0.0002373042240151887,
            0.047697581853232134,
            0.00023787139783579446,
            0.9518272425249169
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            40.0,
            34.0,
            11.0,
            0.0
          ],
          [
            30.0,
            37.0,
            16.0,
            1.0
          ],
          [
            15.0,
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
      "current_regime_probability": 0.99999999999999,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.99999999999999,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 8.059664782870994e-222,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.007225187267905e-14,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 2.921198422523134e-32,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.10222205391312386,
        "current_score": 0.05142524193325754,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11037.87252274266,
        "loglik": -4991.255505684245,
        "n_params": 191,
        "bic_delta_vs_next_best": 528.4207781589466,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13388.303016746067,
            "loglik": -6442.743399642538,
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
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13388.303016746067,
                "loglik": -6442.743399642538,
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
            "bic": 11566.293300901607,
            "loglik": -5396.364944711579,
            "n_params": 140,
            "converged": true,
            "iterations": 16,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300901607,
                "loglik": -5396.364944711579,
                "n_params": 140,
                "converged": true,
                "iterations": 16
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300904888,
                "loglik": -5396.364944713219,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11566.293300910489,
                "loglik": -5396.36494471602,
                "n_params": 140,
                "converged": true,
                "iterations": 15
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11037.87252274266,
            "loglik": -4991.255505684245,
            "n_params": 191,
            "converged": true,
            "iterations": 21,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.87252274266,
                "loglik": -4991.255505684245,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.872536976822,
                "loglik": -4991.2555128013255,
                "n_params": 191,
                "converged": true,
                "iterations": 23
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11037.87255596624,
                "loglik": -4991.2555222960345,
                "n_params": 191,
                "converged": true,
                "iterations": 19
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
              "bic": 11037.87252274266,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11037.872536976822,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11037.87255596624,
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
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6366.522952251611,
                "3": 5406.0804256482625,
                "4": 5508.1394230013375
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
                "2": 10333.508746561956,
                "3": 9969.789335613525,
                "4": 8815.484022077942
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
                "2": 13388.303016746067,
                "3": 11566.293300901607,
                "4": 11037.872570684103
              },
              "valid": true
            }
          ],
          "stable": false
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
        "bic_delta_vs_next_best": 528.4207781589466,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 528.42 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 38.897331780599075,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.99995948256675,
              "pct_time": 0.3426293206476763,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 84.10270873683416,
              "pct_time": 0.3350705527363911,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 38.897331780599075,
              "pct_time": 0.1549694493250959,
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
            0.47110604285111946,
            0.43779733541627186,
            0.30673759777446324,
            0.9518272425249169
          ],
          "expected_duration_days": [
            1.8907381838709605,
            1.7787180015242907,
            1.4424552619466495,
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
              "bic": 11037.87252274266,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11037.872536976822,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11037.87255596624,
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
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6366.522952251611,
                "3": 5406.0804256482625,
                "4": 5508.1394230013375
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
                "2": 10333.508746561956,
                "3": 9969.789335613525,
                "4": 8815.484022077942
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
                "2": 13388.303016746067,
                "3": 11566.293300901607,
                "4": 11037.872570684103
              },
              "valid": true
            }
          ],
          "stable": false
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.025865343754839374,
            "jump_probability": 0.10222205391312149,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006588819119547666,
            "downside_vol_10d": 0.0035936672207428776,
            "drawdown_21d": 0.009480325295896304,
            "amihud_stress": 2.6499782604333634e-252,
            "spread_rel": 75.81685149380931,
            "spread_ticks": 1.0172988264355767,
            "log_notional": 13.099036601610049,
            "log_trade_count": 5.72738039375515
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.141714566978503,
            "jump_probability": 0.2264747927169541,
            "jump_rate": 8.838034837332633e-07,
            "rolling_vol_10d": 0.006688808624737277,
            "downside_vol_10d": 0.0036718892111419262,
            "drawdown_21d": 0.0100045326800131,
            "amihud_stress": 0.8784164337507896,
            "spread_rel": 74.46159562119287,
            "spread_ticks": 1.003952808475737,
            "log_notional": 13.270678895246675,
            "log_trade_count": 5.856495831843359
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5177884463319871,
            "jump_probability": 0.3376570605276326,
            "jump_rate": 0.12854161046148802,
            "rolling_vol_10d": 0.008469871325236373,
            "downside_vol_10d": 0.004502033853990481,
            "drawdown_21d": 0.007654289486291656,
            "amihud_stress": 0.9709653561523228,
            "spread_rel": 77.94158406865168,
            "spread_ticks": 1.0509794445616703,
            "log_notional": 13.573024644238055,
            "log_trade_count": 5.768314161338725
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7643438904183459,
            "jump_probability": 0.19299646836218132,
            "jump_rate": 0.047619047619047686,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193383,
            "drawdown_21d": 0.05147347269692714,
            "amihud_stress": 0.45792090949976294,
            "spread_rel": 76.65742404215185,
            "spread_ticks": 1.0154334671594107,
            "log_notional": 13.655842671770921,
            "log_trade_count": 6.156592091448428
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
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999921400404218,
            7.859959578249766e-06,
            2.1251930324584884e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999881217839656,
            1.187821603445596e-05,
            1.9506701560645355e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999756610647331,
            2.433893526681093e-05,
            2.219837310231105e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.999963217807865,
            3.678219213494952e-05,
            2.037496479934209e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999898146218539,
            1.0185378146164252e-05,
            3.836553744203363e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999846072761138,
            1.5392723886125038e-05,
            3.5214436258943066e-25
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999884389441955,
            1.1561055804453506e-05,
            4.172589160962082e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999928074777334,
            7.192522266545304e-06,
            3.3474502443804377e-25
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            7.550817310902684e-37,
            1.0,
            1.5244874390602417e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            7.899631959267083e-37,
            1.0,
            2.4190060291469538e-23
          ],
          "jump_probability": 0.16914375656737293,
          "jump_score": 0.8659062576406098
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999531011925,
            6.020352044630865e-217,
            4.689880750403693e-08,
            1.3817611700371793e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999413238114,
            7.880157029938508e-217,
            5.867618861653875e-08,
            2.7431287069860947e-26
          ],
          "jump_probability": 0.14360945040250525,
          "jump_score": 0.6972790812432602
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999251601,
            9.311275263657318e-218,
            7.483982762091674e-11,
            1.9282209752079072e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999063661,
            1.2187711208664158e-217,
            9.363384971813729e-11,
            3.827983075835974e-29
          ],
          "jump_probability": 0.11616876810363819,
          "jump_score": 0.48545904430158543
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999995417,
            7.738028485815931e-220,
            4.583706556289155e-13,
            3.6319119434231034e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999993674,
            7.066905139919348e-220,
            6.326067187683491e-13,
            3.044609136925726e-29
          ],
          "jump_probability": 0.08341566728210535,
          "jump_score": 0.16581049540522047
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999645926953881,
            3.540730461197953e-05,
            4.537897381067403e-30
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999661560801384,
            3.384391986168098e-05,
            6.882648119864461e-27
          ],
          "jump_probability": 0.16530751519714065,
          "jump_score": 0.8419513847267664
        },
        {
          "trade_date": "2026-05-25",
          "state": 0,
          "probabilities": [
            0.99999999999999,
            8.059664782870994e-222,
            1.007225187267905e-14,
            2.921198422523134e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.99999999999999,
            8.059664782870994e-222,
            1.007225187267905e-14,
            2.921198422523134e-32
          ],
          "jump_probability": 0.0738937326506577,
          "jump_score": 0.05142524193325754
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
    "liq_subtitle": "Liquidity is mixed for the stock’s size, with a six-month score just below peers and a lighter trading day today.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firmer than the main comparison groups, with the stock up 1.5% over one month.",
    "perf_insight": "That stronger return backdrop stands out because peers fell 3.6% while the market rose 2.6%. It matters because price performance is supportive even as liquidity remains only middle of the pack for its size.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main influence at present, accounting for 49.4% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 49.4% of price changes. Other influences are sector 44.4%, and company-specific 6.1%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 49.4%, sector 44.4%, and company-specific 6.1%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 49.4%, sector 44.4%, and company-specific 6.1%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader market direction is still shaping trading conditions, while the current book remains orderly with a 1 tick spread and bid depth 1.14x ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors account for 49.4% of recent price moves.",
      "Monthly change: the stock was mostly market through March to May, so the current mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Conditions look orderly rather than stressed, with a balanced book supporting a mixed overall liquidity picture.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 26, 2025 to May 25, 2026 (254 trading days • 102,251 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks stable, with a 1 tick spread and displayed bid depth 1.14x ask depth. That matters because the screen is holding up even with lighter activity today.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.4% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current execution looks orderly, with a balanced book supporting access through the session.",
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
    "intraday_insight": "The book is balanced, with displayed bid depth at 1.14x ask depth and the spread at 1 tick. That matters because near-term access looks stable even though one-day average volume is 62.6% below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity looks moderate rather than elevated.",
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
    "exec_subtitle": "Liquidity is balanced overall, with peer standing slightly below the group while the current book remains orderly.",
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
        "sub": "1.00 ticks; peers 0.72%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size, with a six-month score of 84.9 compared with a peer median of 86.7. Today’s activity is lighter, with one-day average volume down 62.6% from the one-month average, which makes the tape thinner in the near term. Even so, execution remains orderly, with a 1 tick spread and displayed bid depth 1.14x ask depth.",
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
        "value": "1.14x",
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
        "text": "Estimated impact ~-1.17% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.89% with 96.9% fill.",
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
        "subtext": "0.75% • 1.00 ticks vs peers 0.72%",
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
        "value": "49.4",
        "suffix": "market",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 44.4% • Company 6.1%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is balanced rather than standout, with the six-month liquidity score at 84.9 compared with a peer median of 86.7. That matters because access looks serviceable for the company’s size, but not clearly stronger than the group.",
      "Today’s trading activity is lighter, with one-day average volume down 62.6% from the one-month average. That matters because day-to-day execution can be thinner even when the broader liquidity profile is still intact.",
      "Execution conditions remain orderly, with a 1 tick spread and displayed bid depth 1.14x ask depth. That matters because the stock’s firmer one-month return of 1.5%, compared with peers at -3.6% and the market at +2.6%, is being met by a stable screen while market moves still account for 49.4% of the tape."
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
      "overall": "6M liquidity is strong: score 84.9 vs peer median 86.7 (-1.8 pts). 1D average volume down -62.6% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 84.9 vs peer median 86.7 (-1.8 pts)."
      ],
      "concerns": [
        "1D average volume down -62.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -2.2%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -2.2% vs market 12.4%.",
        "vs_sector": "Worse than sector: -2.2% vs sector -1.8%.",
        "vs_peers": "Better than peers: -2.2% vs peers -17.0%."
      },
      "adv": {
        "insight": "ADV is S$557.6K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$557.6K vs market S$12.3K.",
        "vs_sector": "Worse than sector: S$557.6K vs sector S$629.6K.",
        "vs_peers": "Worse than peers: S$557.6K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.92%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.82%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.72%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.18%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.18% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.05%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.05% vs market 46.38%.",
        "vs_sector": "Better than sector: 14.05% vs sector 16.31%.",
        "vs_peers": "Better than peers: 14.05% vs peers 16.10%."
      },
      "trades": {
        "insight": "Trades is 343, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 343 vs market 7.",
        "vs_sector": "Worse than sector: 343 vs sector 385.",
        "vs_peers": "Worse than peers: 343 vs peers 768."
      },
      "amihud": {
        "insight": "Price impact is 3.91e-09, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.91e-09 vs market 1.54e-07.",
        "vs_sector": "Better than sector: 3.91e-09 vs sector 4.54e-09.",
        "vs_peers": "Better than peers: 3.91e-09 vs peers 5.16e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is stronger than the main comparison groups, with the stock up 1.5% over one month while peers fell 3.6% and the market rose 2.6%. Liquidity gives a mixed read on that move because the six-month liquidity score is 84.9, or 1.8 points below the peer median, and one-day average volume is 62.6% below the monthly average, even though the spread is 1 tick and displayed bid depth is 1.14 times ask depth.",
      "conclusion": "The move looks more broad-market than company-specific, with market factors accounting for 49.4% of current trading."
    },
    "drivers": {
      "overall": "Market factors are the main influence on the stock now, accounting for 49.4% of recent price moves. That matters because the tape is being driven more by broader conditions than by company-specific news, which can make day-to-day trading feel more tied to the market backdrop.",
      "beta": "The current read is mixed rather than one-way, with market influence leading while the stock has still outperformed over 1M at +1.5% compared with peers at -3.6% and the market at +2.6%. That combination suggests the broader tape is setting direction, but the return backdrop has remained firmer than the main comparison groups.",
      "rolling_change": "The pattern has shifted from mostly market in March, April, and May to a more balanced market-led mix now. That matters because the stock is no longer trading primarily on its own story, even as the 1D average volume has dropped 62.6% from the 1M average."
    },
    "regime": {
      "overall": "The market is calm and liquid now, which supports orderly trading, but the state typically lasts about 1.9 days, so the backdrop is mixed rather than firmly established.",
      "current": "The active state is Calm / Liquid, pointing to orderly trading conditions at the moment.",
      "transitions": "This state looks changeable rather than settled because its typical run length is about 1.9 days.",
      "trading_implications": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.9 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth is modestly stronger than ask depth at 1.14x and the spread is 1 tick. That matters because the visible book is orderly even with the stock sitting slightly below the peer median on the 6M liquidity score.",
      "concern": "Trade-size percentiles use May 26, 2025 to May 25, 2026 history (254 trading days • 102,251 trades).",
      "peer_context": "The displayed book supports the broader read rather than challenging it, as a tight 1 tick spread and near-even depth sit comfortably with a 6M liquidity score of 84.9 compared with the peer median of 86.7. That matters because the stock looks serviceable on screen today, but not clearly stronger than peers overall."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so the trading base is broad but not clearly dominated by one participant type.",
      "retail_heavy": "Retail-like trades account for 37.3% of trade count but only 2.8% of trade value, while institution-like trades are 21.3% of count and 54.4% of value. That shows many smaller tickets alongside a smaller number of higher-value trades, which keeps the mix balanced rather than clearly retail-led.",
      "institutional_gap": "Institution-like activity carries over half of trade value despite representing just over a fifth of trade count. That gives the tape meaningful higher-value participation, even though the overall mix remains mixed.",
      "peer_comparison": "The trader mix does not read as unusually one-sided, with count spread across retail-like activity and value concentrated in institution-like trades. That makes the flow profile look broadly in line with a mixed market rather than an extreme peer outlier."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner read is that market factors still explain 49.4% of trading. That matters because tape direction is being shaped materially by broader moves rather than by one participant group alone. The signal is mixed because trade count skews retail-like while trade value skews institution-like. That means price formation is likely coming from a combination of broad participation and higher-value trades rather than a single clear source.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks material enough to watch, but it does not dominate the current trading picture. The clearest signal is moderate short interest, while the stock still outperformed peers by 5.1 percentage points over the past month, which suggests shorts have not overwhelmed the tape.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is building, with short interest up 24% month on month and 97% year on year. That makes the short backdrop more relevant, but the broader picture still looks mixed rather than driven by short pressure alone.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 4.0%, continuous 86.2%, and close 8.6%. Current trading concentration score is 0.230.",
      "hhi_interpretation": "Trading is not heavily concentrated in the opening or closing periods, which supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity, accounting for 86.2% of activity. That matters because access appears strongest during regular market hours rather than relying on the open or close.",
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
        84.89208633093526,
        86.6906474820144
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        557574.0,
        1108351.5
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.14054897138885009,
        "adv": 557574.0,
        "spread_pct": 0.007490636704119858,
        "turnover_ratio": 0.0018357513883585043,
        "amihud": 3.9140585202070595e-09,
        "trades": 343.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6889612950738538,
          "median": 0.4638191016307287,
          "min": 0.0,
          "max": 6.985699678629192,
          "p5": 0.15322016166337624,
          "p95": 2.00359794096288,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2750438.875107048,
          "median": 12328.525000000001,
          "min": 0.0,
          "max": 256049087.60000002,
          "p5": 0.0,
          "p95": 11354203.5,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09528341730906953,
          "median": 0.029248195685443523,
          "min": 0.00027368816798512355,
          "max": 1.267605633802817,
          "p5": 0.003662131301335203,
          "p95": 0.4651295118463559,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036928110353029535,
          "median": 0.0002776127577174482,
          "min": 0.0,
          "max": 1.0299255157866982,
          "p5": 0.0,
          "p95": 0.00808210065449701,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.527329936183962e-06,
          "median": 1.5396592063738855e-07,
          "min": 0.0,
          "max": 0.0004555293191656827,
          "p5": 0.0,
          "p95": 3.441741312640073e-05,
          "count": 554
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 405.5674460431655,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2324.875,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3580860566684624,
          "median": 0.16313282553761954,
          "min": 0.11683915634731308,
          "max": 1.3896496620542778,
          "p5": 0.12513759161185103,
          "p95": 1.0990315445321142,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8781084.652363377,
          "median": 629622.625,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 13601.42,
          "p95": 40931737.34999998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03592938311529791,
          "median": 0.008187377504467873,
          "min": 0.004274986168547341,
          "max": 0.13333333333333333,
          "p5": 0.004344782048773242,
          "p95": 0.12579667946059614,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002333873259997993,
          "median": 0.0013427917613119279,
          "min": 0.0,
          "max": 0.006834523443560886,
          "p5": 8.196672230438104e-05,
          "p95": 0.006604349535182897,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.97051909048962e-07,
          "median": 4.539362372969263e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.3048834462562446e-11,
          "p95": 4.12544661146755e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1132.125,
          "median": 385.25,
          "min": 0.0,
          "max": 5575.5,
          "p5": 8.225000000000001,
          "p95": 4283.999999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1108351.5,
          "median": 1108351.5,
          "min": 1108351.5,
          "max": 1108351.5,
          "p5": 1108351.5,
          "p95": 1108351.5,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 768.0,
          "median": 768.0,
          "min": 768.0,
          "max": 768.0,
          "p5": 768.0,
          "p95": 768.0,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.1609561074943504,
          "median": 0.1609561074943504,
          "min": 0.1609561074943504,
          "max": 0.1609561074943504,
          "p5": 0.1609561074943504,
          "p95": 0.1609561074943504,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.00724156221737917,
          "median": 0.00724156221737917,
          "min": 0.00724156221737917,
          "max": 0.00724156221737917,
          "p5": 0.00724156221737917,
          "p95": 0.00724156221737917,
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
          "mean": 5.164666225731466e-09,
          "median": 5.164666225731466e-09,
          "min": 5.164666225731466e-09,
          "max": 5.164666225731466e-09,
          "p5": 5.164666225731466e-09,
          "p95": 5.164666225731466e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001240874123991597,
          "median": 0.001240874123991597,
          "min": 0.001240874123991597,
          "max": 0.001240874123991597,
          "p5": 0.001240874123991597,
          "p95": 0.001240874123991597,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.015151515151515138,
        "market": 0.02557385351512753,
        "sector": -0.00579582843242088,
        "peers": -0.03649635036496368
      },
      {
        "horizon": "3M",
        "stock": -0.021897810218977853,
        "market": 0.005796035195015259,
        "sector": -0.019564724113965815,
        "peers": -0.07692307692307698
      },
      {
        "horizon": "6M",
        "stock": -0.021897810218977964,
        "market": 0.12382441714617798,
        "sector": -0.01835894831732765,
        "peers": -0.16981132075471672
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
      "share_market": 0.4944588001464733,
      "share_sector": 0.4440436569981499,
      "share_idio": 0.06149754285537681,
      "beta_market": 0.4501168704418296,
      "beta_sector": -0.6815427468219923,
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
        "current_regime_probability": 0.99999999999999,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.4944588001464733,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Market explains about 49.4% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4440436569981499,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.4%",
            "display_range": null,
            "display_text": "44.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 44.4,
            "plain_english": "Sector explains about 44.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.06149754285537681,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.1%",
            "display_range": null,
            "display_text": "6.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 6.1,
            "plain_english": "Company-specific explains about 6.1% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.4501168704418296,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.45",
            "display_range": null,
            "display_text": "0.45",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.45% stock move in the same direction in this state.",
            "value_num": 0.45
          },
          "beta_stock_lag": {
            "median": 0.2735095392525562,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.27",
            "display_range": null,
            "display_text": "0.27",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.27
          },
          "beta_sector": {
            "median": -0.6815427468219923,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.68",
            "display_range": null,
            "display_text": "-0.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.68% stock move in the opposite direction in this state.",
            "value_num": -0.68
          },
          "beta_market_lag": {
            "median": -0.8027401624674646,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.80",
            "display_range": null,
            "display_text": "-0.80",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.8
          },
          "beta_sector_lag": {
            "median": 0.6438459178642563,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.64",
            "display_range": null,
            "display_text": "0.64",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.64
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
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
            "period_label": "2026-05-04 to 2026-05-25",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8208573498121035,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.1%",
              "display_range": null,
              "display_text": "82.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 82.1,
              "plain_english": "Company-specific explains about 82.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.0974844882939047,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.7%",
                "display_range": null,
                "display_text": "9.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 9.7,
                "plain_english": "Market explains about 9.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08165816189399187,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.2%",
                "display_range": null,
                "display_text": "8.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 8.2,
                "plain_english": "Sector explains about 8.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8208573498121035,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.1%",
                "display_range": null,
                "display_text": "82.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 82.1,
                "plain_english": "Company-specific explains about 82.1% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293206476763,
            "expected_duration_days": 1.8907381838709605,
            "current_probability": 0.99999999999999,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.99995948256675,
            "volatility": {
              "median": 2.897349763166967e-128,
              "low": 2.897349763166967e-128,
              "high": 2.897349763166967e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10222205391312149,
            "jump_rate": 0.0,
            "risk_score": 0.025865343754839374,
            "metrics": {
              "rolling_vol_10d": 0.006588819119547666,
              "downside_vol_10d": 0.0035936672207428776,
              "drawdown_21d": 0.009480325295896304,
              "amihud_stress": 2.6499782604333634e-252,
              "spread_rel": 75.81685149380931,
              "spread_ticks": 1.0172988264355767,
              "log_notional": 13.099036601610049,
              "log_trade_count": 5.72738039375515
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3350705527363911,
            "expected_duration_days": 1.7787180015242907,
            "current_probability": 8.059664782870994e-222,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 84.10270873683416,
            "volatility": {
              "median": 0.007409156388257532,
              "low": 0.007409156388257532,
              "high": 0.007409156388257532
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2264747927169541,
            "jump_rate": 8.838034837332633e-07,
            "risk_score": 0.141714566978503,
            "metrics": {
              "rolling_vol_10d": 0.006688808624737277,
              "downside_vol_10d": 0.0036718892111419262,
              "drawdown_21d": 0.0100045326800131,
              "amihud_stress": 0.8784164337507896,
              "spread_rel": 74.46159562119287,
              "spread_ticks": 1.003952808475737,
              "log_notional": 13.270678895246675,
              "log_trade_count": 5.856495831843359
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1549694493250959,
            "expected_duration_days": 1.4424552619466495,
            "current_probability": 1.007225187267905e-14,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 38.897331780599075,
            "volatility": {
              "median": 0.0120615937965651,
              "low": 0.0120615937965651,
              "high": 0.0120615937965651
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3376570605276326,
            "jump_rate": 0.12854161046148802,
            "risk_score": 0.5177884463319871,
            "metrics": {
              "rolling_vol_10d": 0.008469871325236373,
              "downside_vol_10d": 0.004502033853990481,
              "drawdown_21d": 0.007654289486291656,
              "amihud_stress": 0.9709653561523228,
              "spread_rel": 77.94158406865168,
              "spread_ticks": 1.0509794445616703,
              "log_notional": 13.573024644238055,
              "log_trade_count": 5.768314161338725
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 2.921198422523134e-32,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19299646836218132,
            "jump_rate": 0.047619047619047686,
            "risk_score": 0.7643438904183459,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193383,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770921,
              "log_trade_count": 6.156592091448428
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.47110604285111946,
              0.39983191616131053,
              0.12894458732580996,
              0.00011745366176005203
            ],
            [
              0.35991975590587083,
              0.43779733541627186,
              0.19083095880642684,
              0.011451949871430394
            ],
            [
              0.37654646416426096,
              0.28968456450697083,
              0.30673759777446324,
              0.027031373554304884
            ],
            [
              0.0002373042240151887,
              0.047697581853232134,
              0.00023787139783579446,
              0.9518272425249169
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              40.0,
              34.0,
              11.0,
              0.0
            ],
            [
              30.0,
              37.0,
              16.0,
              1.0
            ],
            [
              15.0,
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
            "probability": 0.99999999999999,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 8.059664782870994e-222,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 1.007225187267905e-14,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 2.921198422523134e-32,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.10222205391312386,
          "current_score": 0.05142524193325754,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11037.87252274266,
          "loglik": -4991.255505684245,
          "n_params": 191,
          "bic_delta_vs_next_best": 528.4207781589466,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 13388.303016746067,
              "loglik": -6442.743399642538,
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
                  "bic": 13388.303016746067,
                  "loglik": -6442.743399642538,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13388.303016746067,
                  "loglik": -6442.743399642538,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13388.303016746067,
                  "loglik": -6442.743399642538,
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
              "bic": 11566.293300901607,
              "loglik": -5396.364944711579,
              "n_params": 140,
              "converged": true,
              "iterations": 16,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.293300901607,
                  "loglik": -5396.364944711579,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 16
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.293300904888,
                  "loglik": -5396.364944713219,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 15
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11566.293300910489,
                  "loglik": -5396.36494471602,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 15
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11037.87252274266,
              "loglik": -4991.255505684245,
              "n_params": 191,
              "converged": true,
              "iterations": 21,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11037.87252274266,
                  "loglik": -4991.255505684245,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 21
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11037.872536976822,
                  "loglik": -4991.2555128013255,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 23
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11037.87255596624,
                  "loglik": -4991.2555222960345,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 19
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
                "bic": 11037.87252274266,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11037.872536976822,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11037.87255596624,
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
            "status": "mixed",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 3,
                "bic_by_state": {
                  "2": 6366.522952251611,
                  "3": 5406.0804256482625,
                  "4": 5508.1394230013375
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
                  "2": 10333.508746561956,
                  "3": 9969.789335613525,
                  "4": 8815.484022077942
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
                  "2": 13388.303016746067,
                  "3": 11566.293300901607,
                  "4": 11037.872570684103
                },
                "valid": true
              }
            ],
            "stable": false
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
          "bic_delta_vs_next_best": 528.4207781589466,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 528.42 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 38.897331780599075,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 85.99995948256675,
                "pct_time": 0.3426293206476763,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 84.10270873683416,
                "pct_time": 0.3350705527363911,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 38.897331780599075,
                "pct_time": 0.1549694493250959,
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
              0.47110604285111946,
              0.43779733541627186,
              0.30673759777446324,
              0.9518272425249169
            ],
            "expected_duration_days": [
              1.8907381838709605,
              1.7787180015242907,
              1.4424552619466495,
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
                "bic": 11037.87252274266,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11037.872536976822,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11037.87255596624,
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
            "status": "mixed",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 3,
                "bic_by_state": {
                  "2": 6366.522952251611,
                  "3": 5406.0804256482625,
                  "4": 5508.1394230013375
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
                  "2": 10333.508746561956,
                  "3": 9969.789335613525,
                  "4": 8815.484022077942
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
                  "2": 13388.303016746067,
                  "3": 11566.293300901607,
                  "4": 11037.872570684103
                },
                "valid": true
              }
            ],
            "stable": false
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.025865343754839374,
              "jump_probability": 0.10222205391312149,
              "jump_rate": 0.0,
              "rolling_vol_10d": 0.006588819119547666,
              "downside_vol_10d": 0.0035936672207428776,
              "drawdown_21d": 0.009480325295896304,
              "amihud_stress": 2.6499782604333634e-252,
              "spread_rel": 75.81685149380931,
              "spread_ticks": 1.0172988264355767,
              "log_notional": 13.099036601610049,
              "log_trade_count": 5.72738039375515
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.141714566978503,
              "jump_probability": 0.2264747927169541,
              "jump_rate": 8.838034837332633e-07,
              "rolling_vol_10d": 0.006688808624737277,
              "downside_vol_10d": 0.0036718892111419262,
              "drawdown_21d": 0.0100045326800131,
              "amihud_stress": 0.8784164337507896,
              "spread_rel": 74.46159562119287,
              "spread_ticks": 1.003952808475737,
              "log_notional": 13.270678895246675,
              "log_trade_count": 5.856495831843359
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.5177884463319871,
              "jump_probability": 0.3376570605276326,
              "jump_rate": 0.12854161046148802,
              "rolling_vol_10d": 0.008469871325236373,
              "downside_vol_10d": 0.004502033853990481,
              "drawdown_21d": 0.007654289486291656,
              "amihud_stress": 0.9709653561523228,
              "spread_rel": 77.94158406865168,
              "spread_ticks": 1.0509794445616703,
              "log_notional": 13.573024644238055,
              "log_trade_count": 5.768314161338725
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.7643438904183459,
              "jump_probability": 0.19299646836218132,
              "jump_rate": 0.047619047619047686,
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193383,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770921,
              "log_trade_count": 6.156592091448428
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
            "trade_date": "2026-05-12",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999921400404218,
              7.859959578249766e-06,
              2.1251930324584884e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999881217839656,
              1.187821603445596e-05,
              1.9506701560645355e-25
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999756610647331,
              2.433893526681093e-05,
              2.219837310231105e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.999963217807865,
              3.678219213494952e-05,
              2.037496479934209e-26
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999898146218539,
              1.0185378146164252e-05,
              3.836553744203363e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999846072761138,
              1.5392723886125038e-05,
              3.5214436258943066e-25
            ],
            "jump_probability": 0.14041641997052026,
            "jump_score": 0.6744907594765851
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999884389441955,
              1.1561055804453506e-05,
              4.172589160962082e-28
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999928074777334,
              7.192522266545304e-06,
              3.3474502443804377e-25
            ],
            "jump_probability": 0.139724352328269,
            "jump_score": 0.6694945316286194
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              0.0,
              7.550817310902684e-37,
              1.0,
              1.5244874390602417e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              7.899631959267083e-37,
              1.0,
              2.4190060291469538e-23
            ],
            "jump_probability": 0.16914375656737293,
            "jump_score": 0.8659062576406098
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.9999999531011925,
              6.020352044630865e-217,
              4.689880750403693e-08,
              1.3817611700371793e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999413238114,
              7.880157029938508e-217,
              5.867618861653875e-08,
              2.7431287069860947e-26
            ],
            "jump_probability": 0.14360945040250525,
            "jump_score": 0.6972790812432602
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999999999251601,
              9.311275263657318e-218,
              7.483982762091674e-11,
              1.9282209752079072e-32
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999063661,
              1.2187711208664158e-217,
              9.363384971813729e-11,
              3.827983075835974e-29
            ],
            "jump_probability": 0.11616876810363819,
            "jump_score": 0.48545904430158543
          },
          {
            "trade_date": "2026-05-21",
            "state": 0,
            "probabilities": [
              0.9999999999995417,
              7.738028485815931e-220,
              4.583706556289155e-13,
              3.6319119434231034e-30
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999993674,
              7.066905139919348e-220,
              6.326067187683491e-13,
              3.044609136925726e-29
            ],
            "jump_probability": 0.08341566728210535,
            "jump_score": 0.16581049540522047
          },
          {
            "trade_date": "2026-05-22",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999645926953881,
              3.540730461197953e-05,
              4.537897381067403e-30
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999661560801384,
              3.384391986168098e-05,
              6.882648119864461e-27
            ],
            "jump_probability": 0.16530751519714065,
            "jump_score": 0.8419513847267664
          },
          {
            "trade_date": "2026-05-25",
            "state": 0,
            "probabilities": [
              0.99999999999999,
              8.059664782870994e-222,
              1.007225187267905e-14,
              2.921198422523134e-32
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.99999999999999,
              8.059664782870994e-222,
              1.007225187267905e-14,
              2.921198422523134e-32
            ],
            "jump_probability": 0.0738937326506577,
            "jump_score": 0.05142524193325754
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
          "market_link_display": "0.45",
          "sector_link_display": "-0.68",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.45% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.68% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.27",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 49.4,
          "driver_share_display": "49.4%",
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
          "jump_risk_probability": 10.2,
          "jump_risk_score": 0.05,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.47110604285111946,
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
          "period_label": "2026-05-04 to 2026-05-25",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.0974844882939047,
          "share_sector": 0.08165816189399187,
          "share_company": 0.8208573498121035,
          "share_market_display": "9.7%",
          "share_sector_display": "8.2%",
          "share_company_display": "82.1%",
          "dominant_share_display": "82.1%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.99999999999999,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.3426293206476763,
          0.3350705527363911,
          0.1549694493250959,
          0.16733067729083664
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293206476763,
            "expected_duration_days": 1.8907381838709605,
            "current_probability": 0.99999999999999,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.99995948256675,
            "volatility": {
              "median": 2.897349763166967e-128,
              "low": 2.897349763166967e-128,
              "high": 2.897349763166967e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10222205391312149,
            "jump_rate": 0.0,
            "risk_score": 0.025865343754839374,
            "metrics": {
              "rolling_vol_10d": 0.006588819119547666,
              "downside_vol_10d": 0.0035936672207428776,
              "drawdown_21d": 0.009480325295896304,
              "amihud_stress": 2.6499782604333634e-252,
              "spread_rel": 75.81685149380931,
              "spread_ticks": 1.0172988264355767,
              "log_notional": 13.099036601610049,
              "log_trade_count": 5.72738039375515
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3350705527363911,
            "expected_duration_days": 1.7787180015242907,
            "current_probability": 8.059664782870994e-222,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 84.10270873683416,
            "volatility": {
              "median": 0.007409156388257532,
              "low": 0.007409156388257532,
              "high": 0.007409156388257532
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.2264747927169541,
            "jump_rate": 8.838034837332633e-07,
            "risk_score": 0.141714566978503,
            "metrics": {
              "rolling_vol_10d": 0.006688808624737277,
              "downside_vol_10d": 0.0036718892111419262,
              "drawdown_21d": 0.0100045326800131,
              "amihud_stress": 0.8784164337507896,
              "spread_rel": 74.46159562119287,
              "spread_ticks": 1.003952808475737,
              "log_notional": 13.270678895246675,
              "log_trade_count": 5.856495831843359
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1549694493250959,
            "expected_duration_days": 1.4424552619466495,
            "current_probability": 1.007225187267905e-14,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 38.897331780599075,
            "volatility": {
              "median": 0.0120615937965651,
              "low": 0.0120615937965651,
              "high": 0.0120615937965651
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3376570605276326,
            "jump_rate": 0.12854161046148802,
            "risk_score": 0.5177884463319871,
            "metrics": {
              "rolling_vol_10d": 0.008469871325236373,
              "downside_vol_10d": 0.004502033853990481,
              "drawdown_21d": 0.007654289486291656,
              "amihud_stress": 0.9709653561523228,
              "spread_rel": 77.94158406865168,
              "spread_ticks": 1.0509794445616703,
              "log_notional": 13.573024644238055,
              "log_trade_count": 5.768314161338725
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083664,
            "expected_duration_days": 20.758620689655157,
            "current_probability": 2.921198422523134e-32,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.0,
            "volatility": {
              "median": 0.014842549552227611,
              "low": 0.014842549552227611,
              "high": 0.014842549552227611
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19299646836218132,
            "jump_rate": 0.047619047619047686,
            "risk_score": 0.7643438904183459,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193383,
              "drawdown_21d": 0.05147347269692714,
              "amihud_stress": 0.45792090949976294,
              "spread_rel": 76.65742404215185,
              "spread_ticks": 1.0154334671594107,
              "log_notional": 13.655842671770921,
              "log_trade_count": 6.156592091448428
            }
          }
        ],
        "transitions": [
          [
            0.47110604285111946,
            0.39983191616131053,
            0.12894458732580996,
            0.00011745366176005203
          ],
          [
            0.35991975590587083,
            0.43779733541627186,
            0.19083095880642684,
            0.011451949871430394
          ],
          [
            0.37654646416426096,
            0.28968456450697083,
            0.30673759777446324,
            0.027031373554304884
          ],
          [
            0.0002373042240151887,
            0.047697581853232134,
            0.00023787139783579446,
            0.9518272425249169
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 170900.0,
          "value": 114503.0
        },
        {
          "level": 2,
          "price": 0.665,
          "quantity": 1050600.0,
          "value": 698649.0
        },
        {
          "level": 3,
          "price": 0.66,
          "quantity": 1047500.0,
          "value": 691350.0
        },
        {
          "level": 4,
          "price": 0.655,
          "quantity": 261300.0,
          "value": 171151.5
        },
        {
          "level": 5,
          "price": 0.65,
          "quantity": 329000.0,
          "value": 213850.0
        },
        {
          "level": 6,
          "price": 0.645,
          "quantity": 139200.0,
          "value": 89784.0
        },
        {
          "level": 7,
          "price": 0.64,
          "quantity": 75400.0,
          "value": 48256.0
        },
        {
          "level": 8,
          "price": 0.635,
          "quantity": 154700.0,
          "value": 98234.5
        },
        {
          "level": 9,
          "price": 0.63,
          "quantity": 244200.0,
          "value": 153846.0
        },
        {
          "level": 10,
          "price": 0.625,
          "quantity": 63900.0,
          "value": 39937.5
        },
        {
          "level": 11,
          "price": 0.62,
          "quantity": 60900.0,
          "value": 37758.0
        },
        {
          "level": 12,
          "price": 0.615,
          "quantity": 6500.0,
          "value": 3997.5
        },
        {
          "level": 13,
          "price": 0.61,
          "quantity": 41000.0,
          "value": 25010.0
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
          "quantity": 21800.0,
          "value": 13080.0
        },
        {
          "level": 16,
          "price": 0.58,
          "quantity": 1400.0,
          "value": 812.0
        },
        {
          "level": 17,
          "price": 0.57,
          "quantity": 3000.0,
          "value": 1709.9999999999998
        },
        {
          "level": 18,
          "price": 0.565,
          "quantity": 10000.0,
          "value": 5649.999999999999
        },
        {
          "level": 19,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 20,
          "price": 0.525,
          "quantity": 5500.0,
          "value": 2887.5
        },
        {
          "level": 21,
          "price": 0.52,
          "quantity": 12000.0,
          "value": 6240.0
        },
        {
          "level": 22,
          "price": 0.515,
          "quantity": 5000.0,
          "value": 2575.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.675,
          "quantity": 326100.0,
          "value": 220117.5
        },
        {
          "level": 2,
          "price": 0.68,
          "quantity": 494700.0,
          "value": 336396.0
        },
        {
          "level": 3,
          "price": 0.685,
          "quantity": 114200.0,
          "value": 78227.0
        },
        {
          "level": 4,
          "price": 0.69,
          "quantity": 1111600.0,
          "value": 767003.9999999999
        },
        {
          "level": 5,
          "price": 0.695,
          "quantity": 190100.0,
          "value": 132119.5
        },
        {
          "level": 6,
          "price": 0.7,
          "quantity": 109000.0,
          "value": 76300.0
        },
        {
          "level": 7,
          "price": 0.705,
          "quantity": 89300.0,
          "value": 62956.5
        },
        {
          "level": 8,
          "price": 0.71,
          "quantity": 81900.0,
          "value": 58149.0
        },
        {
          "level": 9,
          "price": 0.715,
          "quantity": 21200.0,
          "value": 15158.0
        },
        {
          "level": 10,
          "price": 0.72,
          "quantity": 51800.0,
          "value": 37296.0
        },
        {
          "level": 11,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 12,
          "price": 0.77,
          "quantity": 12400.0,
          "value": 9548.0
        },
        {
          "level": 13,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 14,
          "price": 0.81,
          "quantity": 1000.0,
          "value": 810.0
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
        "snapshot_time": "2026-05-25 08:59:58.195400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6725000000000001,
        "spread_pct": 0.0074349442379182205,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2422841.5,
        "ask_depth_notional_displayed": 2120689.0,
        "bid_depth_notional_top10": 2422841.5,
        "ask_depth_notional_top10": 2120689.0,
        "bid_ask_depth_ratio": 1.1425
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 102251,
        "first_trade_date": "2025-05-26",
        "last_trade_date": "2026-05-25",
        "window_label": "May 26, 2025 to May 25, 2026",
        "window_short_label": "May 26, 2025 to May 25, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "102,251 trades",
        "window_detail_label": "254 trading days • 102,251 trades",
        "history_note": "Trade-size percentiles use May 26, 2025 to May 25, 2026 history (254 trading days • 102,251 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3375.0,
            "impact_pct": -0.003717,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.14,
            "pct_of_adv": 0.65
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7875.0,
            "impact_pct": -0.003717,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.33,
            "pct_of_adv": 1.52
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 338312.5,
            "impact_pct": -0.008648,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 13.96,
            "pct_of_adv": 65.26
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-25",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8149098049227054080",
            "timestamp": "2026-05-24 22:59:01.500200000",
            "local_timestamp": "2026-05-25 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.009926,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 28.48,
            "price_vs_mid_pct": 2.602,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8152813299017546752",
            "timestamp": "2026-05-25 01:25:59.295800000",
            "local_timestamp": "2026-05-25 09:25:59",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.006993,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 8.42,
            "price_vs_mid_pct": 1.115,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8145931455739072512",
            "timestamp": "2026-05-24 22:59:01.500200000",
            "local_timestamp": "2026-05-25 06:59:01",
            "posted_price": 0.8,
            "size_shares": 210000.0,
            "notional": 168000.0,
            "impact_pct": -0.006097,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 6.93,
            "price_vs_mid_pct": 18.959,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-25",
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
            "bid_depth_notional": 2056027.0,
            "ask_depth_notional": 2053196.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2203074.5,
            "ask_depth_notional": 2058200.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2219128.5,
            "ask_depth_notional": 2087121.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2239719.0,
            "ask_depth_notional": 2093171.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2237303.5,
            "ask_depth_notional": 2118294.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2394036.5,
            "ask_depth_notional": 2141919.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2454770.0,
            "ask_depth_notional": 2160937.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2445199.5,
            "ask_depth_notional": 2160144.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2419735.5,
            "ask_depth_notional": 2159334.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2448701.0,
            "ask_depth_notional": 2160887.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2432353.0,
            "ask_depth_notional": 2174999.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2458509.0,
            "ask_depth_notional": 2159348.0,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2484974.0,
            "ask_depth_notional": 2169675.5,
            "mid_price": 0.6725000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007434944237918221,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2422841.5,
            "ask_depth_notional": 2120689.0,
            "mid_price": 0.6725000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.007434944237918221,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2421288.5,
          "median_ask_depth_notional": 2150626.75,
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
          "pct": 111.9
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 345,
          "n_runs": 270,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-25",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.5362318840579711,
            "mixed_pct": 0.18840579710144928,
            "instit_pct": 0.1565217391304348,
            "ambiguous_pct": 0.11884057971014493,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11884057971014493,
            "retail_qty_pct": 0.09268537074148296,
            "mixed_qty_pct": 0.09969939879759519,
            "instit_qty_pct": 0.3572144288577154,
            "ambiguous_qty_pct": 0.4504008016032064,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4504008016032064,
            "retail_notional_pct": 0.09276199646926657,
            "mixed_notional_pct": 0.09976374690687598,
            "instit_notional_pct": 0.35696983947479405,
            "ambiguous_notional_pct": 0.45050441714906336,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45050441714906336
          },
          "run_composition": {
            "retail_pct": 0.6851851851851852,
            "mixed_pct": 0.17407407407407408,
            "instit_pct": 0.06666666666666667,
            "ambiguous_pct": 0.07407407407407407,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07407407407407407,
            "retail_notional_pct": 0.09276199646926657,
            "mixed_notional_pct": 0.09976374690687598,
            "instit_notional_pct": 0.35696983947479405,
            "unclear_notional_pct": 0.45050441714906336
          },
          "counts": {
            "trades": {
              "retail": 185,
              "mixed": 65,
              "institutional": 54,
              "ambiguous": 41,
              "unobservable": 0,
              "unclear": 41
            },
            "runs": {
              "retail": 185,
              "mixed": 47,
              "institutional": 18,
              "ambiguous": 20,
              "unobservable": 0,
              "unclear": 20
            }
          },
          "confidence": {
            "high": 0.7518518518518519,
            "medium": 0.17407407407407408,
            "low": 0.07407407407407407,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 203,
            "medium": 47,
            "low": 20,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.6927536231884058,
            "medium": 0.18840579710144928,
            "low": 0.11884057971014493,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 239,
            "medium": 65,
            "low": 41,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8666666666666665,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.07407407407407407,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6851851851851852,
          "dominance_gap": 0.5111111111111112,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 338,
              "WALK_BOOK": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 345
            },
            "d3_urgency": {
              "UNOBSERVABLE": 270
            },
            "participant_confidence": {
              "HIGH": 203,
              "MEDIUM": 47,
              "LOW": 20
            }
          },
          "trade_size": {
            "avg": 388.3086956521739,
            "median": 67.5
          },
          "run_size": {
            "avg": 496.1722222222222,
            "median": 67.5,
            "avg_length": 1.1333333333333333
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-25T08:59:52.700000",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48400,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-25T08:59:41.710200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48399,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-25T08:59:39.175700",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-25T08:59:30.023900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-25T08:59:24.163800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48397,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-25T08:59:22.653600",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48396,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-25T08:59:13.318400",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-25T08:59:05.107700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-25T08:58:46.736900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-25T08:58:45.109300",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-25T08:58:40.711400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-25T08:58:32.998100",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48393,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-348",
              "timestamp": "2026-05-25T08:58:31.340000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-347",
              "timestamp": "2026-05-25T08:58:20.012900",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-346",
              "timestamp": "2026-05-25T08:58:10.664800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-345",
              "timestamp": "2026-05-25T08:57:51.947900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-344",
              "timestamp": "2026-05-25T08:57:42.063100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-343",
              "timestamp": "2026-05-25T08:57:36.398300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-342",
              "timestamp": "2026-05-25T08:57:21.720100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-341",
              "timestamp": "2026-05-25T08:57:16.741500",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48390,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-340",
              "timestamp": "2026-05-25T08:57:15.957000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-339",
              "timestamp": "2026-05-25T08:57:08.818800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-338",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-337",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-336",
              "timestamp": "2026-05-25T08:56:44.020600",
              "price": 0.675,
              "size": 13400.0,
              "notional": 9045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48387,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-335",
              "timestamp": "2026-05-25T08:56:35.044400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48386,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-334",
              "timestamp": "2026-05-25T08:56:28.386700",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48385,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-333",
              "timestamp": "2026-05-25T08:56:23.895700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48384,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-332",
              "timestamp": "2026-05-25T08:56:22.419000",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48383,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-331",
              "timestamp": "2026-05-25T08:55:23.905900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48382,
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
              "retail_pct": 0.5362318840579711,
              "mixed_pct": 0.18840579710144928,
              "instit_pct": 0.1565217391304348,
              "ambiguous_pct": 0.11884057971014493,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.11884057971014493,
              "retail_qty_pct": 0.09268537074148296,
              "mixed_qty_pct": 0.09969939879759519,
              "instit_qty_pct": 0.3572144288577154,
              "ambiguous_qty_pct": 0.4504008016032064,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4504008016032064,
              "retail_notional_pct": 0.09276199646926657,
              "mixed_notional_pct": 0.09976374690687598,
              "instit_notional_pct": 0.35696983947479405,
              "ambiguous_notional_pct": 0.45050441714906336,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.45050441714906336,
              "run_retail_pct": 0.6851851851851852,
              "run_mixed_pct": 0.17407407407407408,
              "run_instit_pct": 0.06666666666666667,
              "run_unclear_pct": 0.07407407407407407,
              "avg_trade_size": 388.3086956521739,
              "avg_run_notional": 496.1722222222222,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.7518518518518519,
              "medium_confidence_pct": 0.17407407407407408,
              "low_confidence_pct": 0.07407407407407407,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8666666666666665,
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
              "retail_pct": 0.6067961165048543,
              "mixed_pct": 0.022653721682847898,
              "instit_pct": 0.3705501618122977,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.2557397462837575,
              "mixed_qty_pct": 0.001089578955560744,
              "instit_qty_pct": 0.7431706747606818,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.2550553731164843,
              "mixed_notional_pct": 0.0010825401149514849,
              "instit_notional_pct": 0.7438620867685642,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8505747126436781,
              "run_mixed_pct": 0.016091954022988506,
              "run_instit_pct": 0.13333333333333333,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1360.2192556634304,
              "avg_run_notional": 1932.4494252873562,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.8666666666666667,
              "low_confidence_pct": 0.13333333333333333,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.47172413793103457,
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
          "n_trades": 6575,
          "n_runs": 4006,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-24",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.3666920152091255,
            "mixed_pct": 0.28152091254752853,
            "instit_pct": 0.21155893536121673,
            "ambiguous_pct": 0.1402281368821293,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1402281368821293,
            "retail_qty_pct": 0.03107130274533185,
            "mixed_qty_pct": 0.15434022602238542,
            "instit_qty_pct": 0.562169706496111,
            "ambiguous_qty_pct": 0.2524187647361717,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2524187647361717,
            "retail_notional_pct": 0.031054763221970323,
            "mixed_notional_pct": 0.15447183445512477,
            "instit_notional_pct": 0.5617585863892605,
            "ambiguous_notional_pct": 0.2527148159336444,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2527148159336444
          },
          "run_composition": {
            "retail_pct": 0.5923614578132801,
            "mixed_pct": 0.2581128307538692,
            "instit_pct": 0.05142286570144783,
            "ambiguous_pct": 0.09810284573140289,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09810284573140289,
            "retail_notional_pct": 0.031054763221970323,
            "mixed_notional_pct": 0.15447183445512477,
            "instit_notional_pct": 0.5617585863892605,
            "unclear_notional_pct": 0.2527148159336444
          },
          "counts": {
            "trades": {
              "retail": 2411,
              "mixed": 1851,
              "institutional": 1391,
              "ambiguous": 922,
              "unobservable": 0,
              "unclear": 922
            },
            "runs": {
              "retail": 2373,
              "mixed": 1034,
              "institutional": 206,
              "ambiguous": 393,
              "unobservable": 0,
              "unclear": 393
            }
          },
          "confidence": {
            "high": 0.6437843235147279,
            "medium": 0.2581128307538692,
            "low": 0.09810284573140289,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2579,
            "medium": 1034,
            "low": 393,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5782509505703423,
            "medium": 0.28152091254752853,
            "low": 0.1402281368821293,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3802,
            "medium": 1851,
            "low": 922,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8753120319520716,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09810284573140289,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5923614578132801,
          "dominance_gap": 0.3342486270594109,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6281,
              "WALK_BOOK": 294
            },
            "d2_information": {
              "UNOBSERVABLE": 6575
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4006
            },
            "participant_confidence": {
              "HIGH": 2579,
              "MEDIUM": 1034,
              "LOW": 393
            }
          },
          "trade_size": {
            "avg": 1495.8194676806083,
            "median": 67.0
          },
          "run_size": {
            "avg": 2455.070644033949,
            "median": 133.0,
            "avg_length": 1.2928107838242635
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-25T08:59:52.700000",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48400,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-25T08:59:41.710200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48399,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-25T08:59:39.175700",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-25T08:59:30.023900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-25T08:59:24.163800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48397,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-25T08:59:22.653600",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48396,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-25T08:59:13.318400",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-25T08:59:05.107700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-25T08:58:46.736900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-25T08:58:45.109300",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-25T08:58:40.711400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-25T08:58:32.998100",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48393,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-348",
              "timestamp": "2026-05-25T08:58:31.340000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-347",
              "timestamp": "2026-05-25T08:58:20.012900",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-346",
              "timestamp": "2026-05-25T08:58:10.664800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-345",
              "timestamp": "2026-05-25T08:57:51.947900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-344",
              "timestamp": "2026-05-25T08:57:42.063100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-343",
              "timestamp": "2026-05-25T08:57:36.398300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-342",
              "timestamp": "2026-05-25T08:57:21.720100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-341",
              "timestamp": "2026-05-25T08:57:16.741500",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48390,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-340",
              "timestamp": "2026-05-25T08:57:15.957000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-339",
              "timestamp": "2026-05-25T08:57:08.818800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-338",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-337",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-336",
              "timestamp": "2026-05-25T08:56:44.020600",
              "price": 0.675,
              "size": 13400.0,
              "notional": 9045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48387,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-335",
              "timestamp": "2026-05-25T08:56:35.044400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48386,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-334",
              "timestamp": "2026-05-25T08:56:28.386700",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48385,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-333",
              "timestamp": "2026-05-25T08:56:23.895700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48384,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-332",
              "timestamp": "2026-05-25T08:56:22.419000",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48383,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-331",
              "timestamp": "2026-05-25T08:55:23.905900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48382,
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
              "retail_pct": 0.3666920152091255,
              "mixed_pct": 0.28152091254752853,
              "instit_pct": 0.21155893536121673,
              "ambiguous_pct": 0.1402281368821293,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1402281368821293,
              "retail_qty_pct": 0.03107130274533185,
              "mixed_qty_pct": 0.15434022602238542,
              "instit_qty_pct": 0.562169706496111,
              "ambiguous_qty_pct": 0.2524187647361717,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2524187647361717,
              "retail_notional_pct": 0.031054763221970323,
              "mixed_notional_pct": 0.15447183445512477,
              "instit_notional_pct": 0.5617585863892605,
              "ambiguous_notional_pct": 0.2527148159336444,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2527148159336444,
              "run_retail_pct": 0.5923614578132801,
              "run_mixed_pct": 0.2581128307538692,
              "run_instit_pct": 0.05142286570144783,
              "run_unclear_pct": 0.09810284573140289,
              "avg_trade_size": 1495.8194676806083,
              "avg_run_notional": 2455.070644033949,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6437843235147279,
              "medium_confidence_pct": 0.2581128307538692,
              "low_confidence_pct": 0.09810284573140289,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8753120319520716,
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
              "retail_pct": 0.48380336506796,
              "mixed_pct": 0.04568588707263038,
              "instit_pct": 0.4701514879348542,
              "ambiguous_pct": 0.00035925992455541585,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.00035925992455541585,
              "retail_qty_pct": 0.18674692162296075,
              "mixed_qty_pct": 0.009483786908410254,
              "instit_qty_pct": 0.8037362597030812,
              "ambiguous_qty_pct": 3.3031765547868536e-05,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 3.3031765547868536e-05,
              "retail_notional_pct": 0.18734111574422901,
              "mixed_notional_pct": 0.00944185370707059,
              "instit_notional_pct": 0.8031839190815443,
              "ambiguous_notional_pct": 3.311146715611938e-05,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 3.311146715611938e-05,
              "run_retail_pct": 0.7943984723106302,
              "run_mixed_pct": 0.03490345851899003,
              "run_instit_pct": 0.1703798005516656,
              "run_unclear_pct": 0.00031826861871419476,
              "avg_trade_size": 1083.1931920244297,
              "avg_run_notional": 1919.203214513049,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7354126883089327,
              "low_confidence_pct": 0.26458731169106725,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48257479312539786,
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
          "n_trades": 24594,
          "n_runs": 14291,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-24",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.35081727250548916,
            "mixed_pct": 0.2867772627470115,
            "instit_pct": 0.22708790761974465,
            "ambiguous_pct": 0.13531755712775473,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13531755712775473,
            "retail_qty_pct": 0.023884446515910335,
            "mixed_qty_pct": 0.17452258985976143,
            "instit_qty_pct": 0.5536241995507906,
            "ambiguous_qty_pct": 0.24796876407353768,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24796876407353768,
            "retail_notional_pct": 0.023862129071985434,
            "mixed_notional_pct": 0.17559673506371354,
            "instit_notional_pct": 0.5523233777317206,
            "ambiguous_notional_pct": 0.24821775813258043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24821775813258043
          },
          "run_composition": {
            "retail_pct": 0.5971590511510741,
            "mixed_pct": 0.25288643202015254,
            "instit_pct": 0.0505912812259464,
            "ambiguous_pct": 0.09936323560282695,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09936323560282695,
            "retail_notional_pct": 0.023862129071985434,
            "mixed_notional_pct": 0.17559673506371354,
            "instit_notional_pct": 0.5523233777317206,
            "unclear_notional_pct": 0.24821775813258043
          },
          "counts": {
            "trades": {
              "retail": 8628,
              "mixed": 7053,
              "institutional": 5585,
              "ambiguous": 3328,
              "unobservable": 0,
              "unclear": 3328
            },
            "runs": {
              "retail": 8534,
              "mixed": 3614,
              "institutional": 723,
              "ambiguous": 1420,
              "unobservable": 0,
              "unclear": 1420
            }
          },
          "confidence": {
            "high": 0.6476803582674411,
            "medium": 0.252956406129732,
            "low": 0.09936323560282695,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9256,
            "medium": 3615,
            "low": 1420,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5778238594779215,
            "medium": 0.2868585833943238,
            "low": 0.13531755712775473,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 14211,
            "medium": 7055,
            "low": 3328,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8780631166468406,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09936323560282695,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5971590511510741,
          "dominance_gap": 0.3442726191309216,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23756,
              "WALK_BOOK": 832,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 24594
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14291
            },
            "participant_confidence": {
              "HIGH": 9256,
              "MEDIUM": 3615,
              "LOW": 1420
            }
          },
          "trade_size": {
            "avg": 1883.9036553630967,
            "median": 130.0
          },
          "run_size": {
            "avg": 3242.091281225946,
            "median": 133.0,
            "avg_length": 1.3690434539220488
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-25T08:59:52.700000",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48400,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-25T08:59:41.710200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48399,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-25T08:59:39.175700",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-25T08:59:30.023900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-25T08:59:24.163800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48397,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-25T08:59:22.653600",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48396,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-25T08:59:13.318400",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-25T08:59:05.107700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-25T08:58:46.736900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-25T08:58:45.109300",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-25T08:58:40.711400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-25T08:58:32.998100",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48393,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-348",
              "timestamp": "2026-05-25T08:58:31.340000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-347",
              "timestamp": "2026-05-25T08:58:20.012900",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-346",
              "timestamp": "2026-05-25T08:58:10.664800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-345",
              "timestamp": "2026-05-25T08:57:51.947900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-344",
              "timestamp": "2026-05-25T08:57:42.063100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-343",
              "timestamp": "2026-05-25T08:57:36.398300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-342",
              "timestamp": "2026-05-25T08:57:21.720100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-341",
              "timestamp": "2026-05-25T08:57:16.741500",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48390,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-340",
              "timestamp": "2026-05-25T08:57:15.957000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-339",
              "timestamp": "2026-05-25T08:57:08.818800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-338",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-337",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-336",
              "timestamp": "2026-05-25T08:56:44.020600",
              "price": 0.675,
              "size": 13400.0,
              "notional": 9045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48387,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-335",
              "timestamp": "2026-05-25T08:56:35.044400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48386,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-334",
              "timestamp": "2026-05-25T08:56:28.386700",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48385,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-333",
              "timestamp": "2026-05-25T08:56:23.895700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48384,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-332",
              "timestamp": "2026-05-25T08:56:22.419000",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48383,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-331",
              "timestamp": "2026-05-25T08:55:23.905900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48382,
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
              "retail_pct": 0.35081727250548916,
              "mixed_pct": 0.2867772627470115,
              "instit_pct": 0.22708790761974465,
              "ambiguous_pct": 0.13531755712775473,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13531755712775473,
              "retail_qty_pct": 0.023884446515910335,
              "mixed_qty_pct": 0.17452258985976143,
              "instit_qty_pct": 0.5536241995507906,
              "ambiguous_qty_pct": 0.24796876407353768,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24796876407353768,
              "retail_notional_pct": 0.023862129071985434,
              "mixed_notional_pct": 0.17559673506371354,
              "instit_notional_pct": 0.5523233777317206,
              "ambiguous_notional_pct": 0.24821775813258043,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24821775813258043,
              "run_retail_pct": 0.5971590511510741,
              "run_mixed_pct": 0.25288643202015254,
              "run_instit_pct": 0.0505912812259464,
              "run_unclear_pct": 0.09936323560282695,
              "avg_trade_size": 1883.9036553630967,
              "avg_run_notional": 3242.091281225946,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6476803582674411,
              "medium_confidence_pct": 0.252956406129732,
              "low_confidence_pct": 0.09936323560282695,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8780631166468406,
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
              "retail_pct": 0.4500267335312229,
              "mixed_pct": 0.04528107081620236,
              "instit_pct": 0.5025719500728258,
              "ambiguous_pct": 0.0021202455797488893,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021202455797488893,
              "retail_qty_pct": 0.20256707681600386,
              "mixed_qty_pct": 0.023596227458888404,
              "instit_qty_pct": 0.7733022226584458,
              "ambiguous_qty_pct": 0.0005344730666619079,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0005344730666619079,
              "retail_notional_pct": 0.20301805051562485,
              "mixed_notional_pct": 0.02390171762908243,
              "instit_notional_pct": 0.772550653884987,
              "ambiguous_notional_pct": 0.0005295779703057402,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0005295779703057402,
              "run_retail_pct": 0.782476344164894,
              "run_mixed_pct": 0.03597887478911465,
              "run_instit_pct": 0.17963764395217488,
              "run_unclear_pct": 0.0019071370938164747,
              "avg_trade_size": 1377.9001456516528,
              "avg_run_notional": 2740.9933983715982,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7064109146922908,
              "low_confidence_pct": 0.2935890853077092,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4859458666471063,
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
          "n_trades": 43201,
          "n_runs": 26560,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-21",
          "last_trade_date": "2026-05-25",
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
            "retail_pct": 0.37339413439503716,
            "mixed_pct": 0.2879562973079327,
            "instit_pct": 0.21312006666512348,
            "ambiguous_pct": 0.12552950163190668,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12552950163190668,
            "retail_qty_pct": 0.028020855457672786,
            "mixed_qty_pct": 0.17295153425536472,
            "instit_qty_pct": 0.5452562898293652,
            "ambiguous_qty_pct": 0.25377132045759726,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25377132045759726,
            "retail_notional_pct": 0.02805223241398993,
            "mixed_notional_pct": 0.17360776794512212,
            "instit_notional_pct": 0.5441227448917557,
            "ambiguous_notional_pct": 0.2542172547491322,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2542172547491322
          },
          "run_composition": {
            "retail_pct": 0.6006777108433735,
            "mixed_pct": 0.2536144578313253,
            "instit_pct": 0.053125,
            "ambiguous_pct": 0.09258283132530121,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09258283132530121,
            "retail_notional_pct": 0.028051361430788593,
            "mixed_notional_pct": 0.17360792351875945,
            "instit_notional_pct": 0.5441232324917957,
            "unclear_notional_pct": 0.2542174825586563
          },
          "counts": {
            "trades": {
              "retail": 16131,
              "mixed": 12440,
              "institutional": 9207,
              "ambiguous": 5423,
              "unobservable": 0,
              "unclear": 5423
            },
            "runs": {
              "retail": 15954,
              "mixed": 6736,
              "institutional": 1411,
              "ambiguous": 2459,
              "unobservable": 0,
              "unclear": 2459
            }
          },
          "confidence": {
            "high": 0.6537650602409638,
            "medium": 0.2536521084337349,
            "low": 0.09258283132530121,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17364,
            "medium": 6737,
            "low": 2459,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5864447582231893,
            "medium": 0.28800259253258026,
            "low": 0.12555264924423046,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25335,
            "medium": 12442,
            "low": 5424,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8769823042168674,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09258283132530121,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6006777108433735,
          "dominance_gap": 0.3470632530120482,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42044,
              "WALK_BOOK": 1150,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 43201
            },
            "d3_urgency": {
              "UNOBSERVABLE": 26560
            },
            "participant_confidence": {
              "HIGH": 17364,
              "MEDIUM": 6737,
              "LOW": 2459
            }
          },
          "trade_size": {
            "avg": 1743.5865489224786,
            "median": 133.0
          },
          "run_size": {
            "avg": 2836.017131024096,
            "median": 136.0,
            "avg_length": 1.3333207831325302
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-360",
              "timestamp": "2026-05-25T08:59:52.700000",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48400,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-05-25T08:59:41.710200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48399,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-05-25T08:59:39.175700",
              "price": 0.675,
              "size": 300.0,
              "notional": 202.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-05-25T08:59:30.023900",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48398,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-05-25T08:59:24.163800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48397,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-355",
              "timestamp": "2026-05-25T08:59:22.653600",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48396,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-354",
              "timestamp": "2026-05-25T08:59:13.318400",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-353",
              "timestamp": "2026-05-25T08:59:05.107700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48395,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-352",
              "timestamp": "2026-05-25T08:58:46.736900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-351",
              "timestamp": "2026-05-25T08:58:45.109300",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-350",
              "timestamp": "2026-05-25T08:58:40.711400",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48394,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-349",
              "timestamp": "2026-05-25T08:58:32.998100",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48393,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-348",
              "timestamp": "2026-05-25T08:58:31.340000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-347",
              "timestamp": "2026-05-25T08:58:20.012900",
              "price": 0.67,
              "size": 800.0,
              "notional": 536.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-346",
              "timestamp": "2026-05-25T08:58:10.664800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48392,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-345",
              "timestamp": "2026-05-25T08:57:51.947900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-344",
              "timestamp": "2026-05-25T08:57:42.063100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-343",
              "timestamp": "2026-05-25T08:57:36.398300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-342",
              "timestamp": "2026-05-25T08:57:21.720100",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48391,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-341",
              "timestamp": "2026-05-25T08:57:16.741500",
              "price": 0.675,
              "size": 800.0,
              "notional": 540.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48390,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-340",
              "timestamp": "2026-05-25T08:57:15.957000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-339",
              "timestamp": "2026-05-25T08:57:08.818800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48389,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-338",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-337",
              "timestamp": "2026-05-25T08:56:52.635700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48388,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-336",
              "timestamp": "2026-05-25T08:56:44.020600",
              "price": 0.675,
              "size": 13400.0,
              "notional": 9045.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48387,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-335",
              "timestamp": "2026-05-25T08:56:35.044400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48386,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-334",
              "timestamp": "2026-05-25T08:56:28.386700",
              "price": 0.675,
              "size": 100.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48385,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-333",
              "timestamp": "2026-05-25T08:56:23.895700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48384,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-332",
              "timestamp": "2026-05-25T08:56:22.419000",
              "price": 0.675,
              "size": 200.0,
              "notional": 135.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48383,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-331",
              "timestamp": "2026-05-25T08:55:23.905900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48382,
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
              "retail_pct": 0.37339413439503716,
              "mixed_pct": 0.2879562973079327,
              "instit_pct": 0.21312006666512348,
              "ambiguous_pct": 0.12552950163190668,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12552950163190668,
              "retail_qty_pct": 0.028020855457672786,
              "mixed_qty_pct": 0.17295153425536472,
              "instit_qty_pct": 0.5452562898293652,
              "ambiguous_qty_pct": 0.25377132045759726,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25377132045759726,
              "retail_notional_pct": 0.02805223241398993,
              "mixed_notional_pct": 0.17360776794512212,
              "instit_notional_pct": 0.5441227448917557,
              "ambiguous_notional_pct": 0.2542172547491322,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2542172547491322,
              "run_retail_pct": 0.6006777108433735,
              "run_mixed_pct": 0.2536144578313253,
              "run_instit_pct": 0.053125,
              "run_unclear_pct": 0.09258283132530121,
              "avg_trade_size": 1743.5865489224786,
              "avg_run_notional": 2836.017131024096,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6537650602409638,
              "medium_confidence_pct": 0.2536521084337349,
              "low_confidence_pct": 0.09258283132530121,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8769823042168674,
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
              "retail_pct": 0.47874106618614726,
              "mixed_pct": 0.04728594278309813,
              "instit_pct": 0.47235326274017536,
              "ambiguous_pct": 0.0016197282905792553,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016197282905792553,
              "retail_qty_pct": 0.2280499508216958,
              "mixed_qty_pct": 0.02662646788278441,
              "instit_qty_pct": 0.7448940177679023,
              "ambiguous_qty_pct": 0.0004295635276175003,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004295635276175003,
              "retail_notional_pct": 0.23038878513536695,
              "mixed_notional_pct": 0.026790848939366257,
              "instit_notional_pct": 0.7424013357471718,
              "ambiguous_notional_pct": 0.00041903017809497375,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00041903017809497375,
              "run_retail_pct": 0.7908763368091961,
              "run_mixed_pct": 0.035934193720571134,
              "run_instit_pct": 0.17183597994547917,
              "run_unclear_pct": 0.0013534895247536078,
              "avg_trade_size": 1451.6349132433033,
              "avg_run_notional": 2733.5798844768096,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7206283241512096,
              "low_confidence_pct": 0.2793716758487904,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48509159883333025,
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
      "n_trades": 43201,
      "n_runs": 26560,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-21",
      "last_trade_date": "2026-05-25",
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
        "retail_pct": 0.37339413439503716,
        "mixed_pct": 0.2879562973079327,
        "instit_pct": 0.21312006666512348,
        "ambiguous_pct": 0.12552950163190668,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12552950163190668,
        "retail_qty_pct": 0.028020855457672786,
        "mixed_qty_pct": 0.17295153425536472,
        "instit_qty_pct": 0.5452562898293652,
        "ambiguous_qty_pct": 0.25377132045759726,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.25377132045759726,
        "retail_notional_pct": 0.02805223241398993,
        "mixed_notional_pct": 0.17360776794512212,
        "instit_notional_pct": 0.5441227448917557,
        "ambiguous_notional_pct": 0.2542172547491322,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2542172547491322
      },
      "run_composition": {
        "retail_pct": 0.6006777108433735,
        "mixed_pct": 0.2536144578313253,
        "instit_pct": 0.053125,
        "ambiguous_pct": 0.09258283132530121,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09258283132530121
      },
      "trade_size": {
        "avg": 1743.5865489224786,
        "median": 133.0
      },
      "run_size": {
        "avg": 2836.017131024096,
        "median": 136.0,
        "avg_length": 1.3333207831325302
      },
      "confidence": {
        "high": 0.6537650602409638,
        "medium": 0.2536521084337349,
        "low": 0.09258283132530121,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17364,
        "medium": 6737,
        "low": 2459,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5864447582231893,
        "medium": 0.28800259253258026,
        "low": 0.12555264924423046,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25335,
        "medium": 12442,
        "low": 5424,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16131,
          "mixed": 12440,
          "institutional": 9207,
          "ambiguous": 5423,
          "unobservable": 0,
          "unclear": 5423
        },
        "runs": {
          "retail": 15954,
          "mixed": 6736,
          "institutional": 1411,
          "ambiguous": 2459,
          "unobservable": 0,
          "unclear": 2459
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8769823042168674,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09258283132530121,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6006777108433735,
      "dominance_gap": 0.3470632530120482,
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
            "n_trades": 5370,
            "n_runs": 3347,
            "retail_pct": 0.3743016759776536,
            "mixed_pct": 0.286219739292365,
            "instit_pct": 0.2080074487895717,
            "ambiguous_pct": 0.13147113594040968,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13147113594040968,
            "avg_trade_size": 1451.2551210428305,
            "avg_run_notional": 2328.4254556319092,
            "retail_qty_pct": 0.030414509988450186,
            "mixed_qty_pct": 0.1511656756641143,
            "instit_qty_pct": 0.5620310561663173,
            "ambiguous_qty_pct": 0.25638875818111817,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25638875818111817,
            "retail_notional_pct": 0.030392429849459276,
            "mixed_notional_pct": 0.15134732152480868,
            "instit_notional_pct": 0.561532751461523,
            "ambiguous_notional_pct": 0.256727497164209,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.256727497164209,
            "run_retail_pct": 0.5921720944129071,
            "run_mixed_pct": 0.26142814460711084,
            "run_instit_pct": 0.049895428742157154,
            "run_ambiguous_pct": 0.09650433223782492,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09650433223782492,
            "avg_feature_coverage": 0.8746937556020316,
            "high_confidence_pct": 0.6420675231550642,
            "medium_confidence_pct": 0.26142814460711084,
            "low_confidence_pct": 0.09650433223782492,
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
          "retail_pct": 0.37339413439503716,
          "mixed_pct": 0.2879562973079327,
          "instit_pct": 0.21312006666512348,
          "ambiguous_pct": 0.12552950163190668,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12552950163190668,
          "retail_qty_pct": 0.028020855457672786,
          "mixed_qty_pct": 0.17295153425536472,
          "instit_qty_pct": 0.5452562898293652,
          "ambiguous_qty_pct": 0.25377132045759726,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.25377132045759726,
          "retail_notional_pct": 0.02805223241398993,
          "mixed_notional_pct": 0.17360776794512212,
          "instit_notional_pct": 0.5441227448917557,
          "ambiguous_notional_pct": 0.2542172547491322,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2542172547491322,
          "run_retail_pct": 0.6006777108433735,
          "run_mixed_pct": 0.2536144578313253,
          "run_instit_pct": 0.053125,
          "run_unclear_pct": 0.09258283132530121,
          "avg_trade_size": 1743.5865489224786,
          "avg_run_notional": 2836.017131024096,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6537650602409638,
          "medium_confidence_pct": 0.2536521084337349,
          "low_confidence_pct": 0.09258283132530121,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8769823042168674,
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
          "retail_pct": 0.47874106618614726,
          "mixed_pct": 0.04728594278309813,
          "instit_pct": 0.47235326274017536,
          "ambiguous_pct": 0.0016197282905792553,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016197282905792553,
          "retail_qty_pct": 0.2280499508216958,
          "mixed_qty_pct": 0.02662646788278441,
          "instit_qty_pct": 0.7448940177679023,
          "ambiguous_qty_pct": 0.0004295635276175003,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004295635276175003,
          "retail_notional_pct": 0.23038878513536695,
          "mixed_notional_pct": 0.026790848939366257,
          "instit_notional_pct": 0.7424013357471718,
          "ambiguous_notional_pct": 0.00041903017809497375,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00041903017809497375,
          "run_retail_pct": 0.7908763368091961,
          "run_mixed_pct": 0.035934193720571134,
          "run_instit_pct": 0.17183597994547917,
          "run_unclear_pct": 0.0013534895247536078,
          "avg_trade_size": 1451.6349132433033,
          "avg_run_notional": 2733.5798844768096,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7206283241512096,
          "low_confidence_pct": 0.2793716758487904,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48509159883333025,
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
            "retail_pct": 0.5362318840579711,
            "mixed_pct": 0.18840579710144928,
            "instit_pct": 0.1565217391304348,
            "ambiguous_pct": 0.11884057971014493,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11884057971014493,
            "retail_qty_pct": 0.09268537074148296,
            "mixed_qty_pct": 0.09969939879759519,
            "instit_qty_pct": 0.3572144288577154,
            "ambiguous_qty_pct": 0.4504008016032064,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4504008016032064,
            "retail_notional_pct": 0.09276199646926657,
            "mixed_notional_pct": 0.09976374690687598,
            "instit_notional_pct": 0.35696983947479405,
            "ambiguous_notional_pct": 0.45050441714906336,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45050441714906336,
            "run_retail_pct": 0.6851851851851852,
            "run_mixed_pct": 0.17407407407407408,
            "run_instit_pct": 0.06666666666666667,
            "run_unclear_pct": 0.07407407407407407,
            "avg_trade_size": 388.3086956521739,
            "avg_run_notional": 496.1722222222222,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.7518518518518519,
            "medium_confidence_pct": 0.17407407407407408,
            "low_confidence_pct": 0.07407407407407407,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8666666666666665,
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
            "retail_pct": 0.6067961165048543,
            "mixed_pct": 0.022653721682847898,
            "instit_pct": 0.3705501618122977,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.2557397462837575,
            "mixed_qty_pct": 0.001089578955560744,
            "instit_qty_pct": 0.7431706747606818,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.2550553731164843,
            "mixed_notional_pct": 0.0010825401149514849,
            "instit_notional_pct": 0.7438620867685642,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8505747126436781,
            "run_mixed_pct": 0.016091954022988506,
            "run_instit_pct": 0.13333333333333333,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1360.2192556634304,
            "avg_run_notional": 1932.4494252873562,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.8666666666666667,
            "low_confidence_pct": 0.13333333333333333,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.47172413793103457,
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
            "retail_pct": 0.3666920152091255,
            "mixed_pct": 0.28152091254752853,
            "instit_pct": 0.21155893536121673,
            "ambiguous_pct": 0.1402281368821293,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1402281368821293,
            "retail_qty_pct": 0.03107130274533185,
            "mixed_qty_pct": 0.15434022602238542,
            "instit_qty_pct": 0.562169706496111,
            "ambiguous_qty_pct": 0.2524187647361717,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2524187647361717,
            "retail_notional_pct": 0.031054763221970323,
            "mixed_notional_pct": 0.15447183445512477,
            "instit_notional_pct": 0.5617585863892605,
            "ambiguous_notional_pct": 0.2527148159336444,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2527148159336444,
            "run_retail_pct": 0.5923614578132801,
            "run_mixed_pct": 0.2581128307538692,
            "run_instit_pct": 0.05142286570144783,
            "run_unclear_pct": 0.09810284573140289,
            "avg_trade_size": 1495.8194676806083,
            "avg_run_notional": 2455.070644033949,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6437843235147279,
            "medium_confidence_pct": 0.2581128307538692,
            "low_confidence_pct": 0.09810284573140289,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8753120319520716,
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
            "retail_pct": 0.48380336506796,
            "mixed_pct": 0.04568588707263038,
            "instit_pct": 0.4701514879348542,
            "ambiguous_pct": 0.00035925992455541585,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.00035925992455541585,
            "retail_qty_pct": 0.18674692162296075,
            "mixed_qty_pct": 0.009483786908410254,
            "instit_qty_pct": 0.8037362597030812,
            "ambiguous_qty_pct": 3.3031765547868536e-05,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 3.3031765547868536e-05,
            "retail_notional_pct": 0.18734111574422901,
            "mixed_notional_pct": 0.00944185370707059,
            "instit_notional_pct": 0.8031839190815443,
            "ambiguous_notional_pct": 3.311146715611938e-05,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 3.311146715611938e-05,
            "run_retail_pct": 0.7943984723106302,
            "run_mixed_pct": 0.03490345851899003,
            "run_instit_pct": 0.1703798005516656,
            "run_unclear_pct": 0.00031826861871419476,
            "avg_trade_size": 1083.1931920244297,
            "avg_run_notional": 1919.203214513049,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7354126883089327,
            "low_confidence_pct": 0.26458731169106725,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48257479312539786,
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
            "retail_pct": 0.35081727250548916,
            "mixed_pct": 0.2867772627470115,
            "instit_pct": 0.22708790761974465,
            "ambiguous_pct": 0.13531755712775473,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13531755712775473,
            "retail_qty_pct": 0.023884446515910335,
            "mixed_qty_pct": 0.17452258985976143,
            "instit_qty_pct": 0.5536241995507906,
            "ambiguous_qty_pct": 0.24796876407353768,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24796876407353768,
            "retail_notional_pct": 0.023862129071985434,
            "mixed_notional_pct": 0.17559673506371354,
            "instit_notional_pct": 0.5523233777317206,
            "ambiguous_notional_pct": 0.24821775813258043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24821775813258043,
            "run_retail_pct": 0.5971590511510741,
            "run_mixed_pct": 0.25288643202015254,
            "run_instit_pct": 0.0505912812259464,
            "run_unclear_pct": 0.09936323560282695,
            "avg_trade_size": 1883.9036553630967,
            "avg_run_notional": 3242.091281225946,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6476803582674411,
            "medium_confidence_pct": 0.252956406129732,
            "low_confidence_pct": 0.09936323560282695,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8780631166468406,
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
            "retail_pct": 0.4500267335312229,
            "mixed_pct": 0.04528107081620236,
            "instit_pct": 0.5025719500728258,
            "ambiguous_pct": 0.0021202455797488893,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021202455797488893,
            "retail_qty_pct": 0.20256707681600386,
            "mixed_qty_pct": 0.023596227458888404,
            "instit_qty_pct": 0.7733022226584458,
            "ambiguous_qty_pct": 0.0005344730666619079,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0005344730666619079,
            "retail_notional_pct": 0.20301805051562485,
            "mixed_notional_pct": 0.02390171762908243,
            "instit_notional_pct": 0.772550653884987,
            "ambiguous_notional_pct": 0.0005295779703057402,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0005295779703057402,
            "run_retail_pct": 0.782476344164894,
            "run_mixed_pct": 0.03597887478911465,
            "run_instit_pct": 0.17963764395217488,
            "run_unclear_pct": 0.0019071370938164747,
            "avg_trade_size": 1377.9001456516528,
            "avg_run_notional": 2740.9933983715982,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7064109146922908,
            "low_confidence_pct": 0.2935890853077092,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4859458666471063,
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
            "retail_pct": 0.37339413439503716,
            "mixed_pct": 0.2879562973079327,
            "instit_pct": 0.21312006666512348,
            "ambiguous_pct": 0.12552950163190668,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12552950163190668,
            "retail_qty_pct": 0.028020855457672786,
            "mixed_qty_pct": 0.17295153425536472,
            "instit_qty_pct": 0.5452562898293652,
            "ambiguous_qty_pct": 0.25377132045759726,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25377132045759726,
            "retail_notional_pct": 0.02805223241398993,
            "mixed_notional_pct": 0.17360776794512212,
            "instit_notional_pct": 0.5441227448917557,
            "ambiguous_notional_pct": 0.2542172547491322,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2542172547491322,
            "run_retail_pct": 0.6006777108433735,
            "run_mixed_pct": 0.2536144578313253,
            "run_instit_pct": 0.053125,
            "run_unclear_pct": 0.09258283132530121,
            "avg_trade_size": 1743.5865489224786,
            "avg_run_notional": 2836.017131024096,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6537650602409638,
            "medium_confidence_pct": 0.2536521084337349,
            "low_confidence_pct": 0.09258283132530121,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8769823042168674,
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
            "retail_pct": 0.47874106618614726,
            "mixed_pct": 0.04728594278309813,
            "instit_pct": 0.47235326274017536,
            "ambiguous_pct": 0.0016197282905792553,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016197282905792553,
            "retail_qty_pct": 0.2280499508216958,
            "mixed_qty_pct": 0.02662646788278441,
            "instit_qty_pct": 0.7448940177679023,
            "ambiguous_qty_pct": 0.0004295635276175003,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004295635276175003,
            "retail_notional_pct": 0.23038878513536695,
            "mixed_notional_pct": 0.026790848939366257,
            "instit_notional_pct": 0.7424013357471718,
            "ambiguous_notional_pct": 0.00041903017809497375,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00041903017809497375,
            "run_retail_pct": 0.7908763368091961,
            "run_mixed_pct": 0.035934193720571134,
            "run_instit_pct": 0.17183597994547917,
            "run_unclear_pct": 0.0013534895247536078,
            "avg_trade_size": 1451.6349132433033,
            "avg_run_notional": 2733.5798844768096,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7206283241512096,
            "low_confidence_pct": 0.2793716758487904,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48509159883333025,
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
          "trade_id": "BMLL-360",
          "timestamp": "2026-05-25T08:59:52.700000",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48400,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-359",
          "timestamp": "2026-05-25T08:59:41.710200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48399,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-358",
          "timestamp": "2026-05-25T08:59:39.175700",
          "price": 0.675,
          "size": 300.0,
          "notional": 202.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48398,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-357",
          "timestamp": "2026-05-25T08:59:30.023900",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48398,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-356",
          "timestamp": "2026-05-25T08:59:24.163800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48397,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-355",
          "timestamp": "2026-05-25T08:59:22.653600",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48396,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-354",
          "timestamp": "2026-05-25T08:59:13.318400",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48395,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-353",
          "timestamp": "2026-05-25T08:59:05.107700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48395,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-352",
          "timestamp": "2026-05-25T08:58:46.736900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48394,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-351",
          "timestamp": "2026-05-25T08:58:45.109300",
          "price": 0.67,
          "size": 400.0,
          "notional": 268.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48394,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-350",
          "timestamp": "2026-05-25T08:58:40.711400",
          "price": 0.67,
          "size": 1300.0,
          "notional": 871.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48394,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-349",
          "timestamp": "2026-05-25T08:58:32.998100",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48393,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-348",
          "timestamp": "2026-05-25T08:58:31.340000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48392,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-347",
          "timestamp": "2026-05-25T08:58:20.012900",
          "price": 0.67,
          "size": 800.0,
          "notional": 536.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48392,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-346",
          "timestamp": "2026-05-25T08:58:10.664800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48392,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-345",
          "timestamp": "2026-05-25T08:57:51.947900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48391,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-344",
          "timestamp": "2026-05-25T08:57:42.063100",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48391,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-343",
          "timestamp": "2026-05-25T08:57:36.398300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48391,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-342",
          "timestamp": "2026-05-25T08:57:21.720100",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48391,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-341",
          "timestamp": "2026-05-25T08:57:16.741500",
          "price": 0.675,
          "size": 800.0,
          "notional": 540.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48390,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-340",
          "timestamp": "2026-05-25T08:57:15.957000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48389,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-339",
          "timestamp": "2026-05-25T08:57:08.818800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48389,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-338",
          "timestamp": "2026-05-25T08:56:52.635700",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48388,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-337",
          "timestamp": "2026-05-25T08:56:52.635700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48388,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-336",
          "timestamp": "2026-05-25T08:56:44.020600",
          "price": 0.675,
          "size": 13400.0,
          "notional": 9045.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48387,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-335",
          "timestamp": "2026-05-25T08:56:35.044400",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48386,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-334",
          "timestamp": "2026-05-25T08:56:28.386700",
          "price": 0.675,
          "size": 100.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48385,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-333",
          "timestamp": "2026-05-25T08:56:23.895700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48384,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-332",
          "timestamp": "2026-05-25T08:56:22.419000",
          "price": 0.675,
          "size": 200.0,
          "notional": 135.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48383,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-331",
          "timestamp": "2026-05-25T08:55:23.905900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48382,
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
      "total_trades": 43200,
      "price_moving_trades": 10110,
      "pct_price_moving": 23.40277777777778,
      "all_movers": {
        "count": 10110,
        "avg_size": 1528.763897131553,
        "median_size": 136.0,
        "retail_count": 5292,
        "mixed_count": 3040,
        "institutional_count": 629,
        "ambiguous_count": 1149,
        "unobservable_count": 0,
        "retail_pct": 52.34421364985163,
        "mixed_pct": 30.06923837784372,
        "instit_pct": 6.2215628090999004,
        "unclear_pct": 11.364985163204748
      },
      "positive_movers": {
        "count": 5050,
        "avg_size": 1535.9214851485149,
        "median_size": 137.0,
        "retail_count": 2564,
        "mixed_count": 1537,
        "institutional_count": 311,
        "ambiguous_count": 638,
        "unobservable_count": 0,
        "retail_pct": 50.772277227722775,
        "mixed_pct": 30.435643564356436,
        "instit_pct": 6.158415841584159,
        "unclear_pct": 12.633663366336634
      },
      "negative_movers": {
        "count": 5060,
        "avg_size": 1521.6204545454545,
        "median_size": 136.0,
        "retail_count": 2728,
        "mixed_count": 1503,
        "institutional_count": 318,
        "ambiguous_count": 511,
        "unobservable_count": 0,
        "retail_pct": 53.91304347826087,
        "mixed_pct": 29.703557312252965,
        "instit_pct": 6.284584980237154,
        "unclear_pct": 10.098814229249012
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
            "avg_short_ratio": 0.05204966930388872,
            "max_short_ratio": 0.18750749310634215,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.07500213120116962,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06462654285594847,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.15421293702456984,
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
            "avg_short_ratio": 0.04851123235662935
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
            "avg_short_ratio": 0.04851123235662935,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": -19.093873619528175
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
        "interpretation": "Shorts building significantly (+24% MoM) | YoY: +97% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 267100,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2026-05-22",
            "short_ratio": 0.012326001487620869,
            "short_vol": 11600,
            "total_vol": 941100,
            "close": 0.67,
            "return": 0.007518796992481258
          },
          {
            "date": "2026-05-21",
            "short_ratio": 0.02190959409594096,
            "short_vol": 28500,
            "total_vol": 1300800,
            "close": 0.665,
            "return": 0.0
          },
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
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.07500213120116962,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06050435777120921,
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
          "opening": 0.02467606388321559,
          "continuous": 0.7475725717346905,
          "closing": 0.21984129641410252,
          "auctions": 0.2524274282653095,
          "other": 0.0
        },
        "1M": {
          "opening": 0.02777097436702373,
          "continuous": 0.886811497066079,
          "closing": 0.07530816986849695,
          "auctions": 0.11318850293392108,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04418073201192915,
          "continuous": 0.8780078881201033,
          "closing": 0.06510762947615532,
          "auctions": 0.12199211187989666,
          "other": 0.0
        },
        "6M": {
          "opening": 0.04000655829255452,
          "continuous": 0.8623763525041013,
          "closing": 0.08551194152729678,
          "auctions": 0.1376236474958988,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.12485009398022817,
        "1M": 0.22447021637286887,
        "3M": 0.21263113580473655,
        "6M": 0.2303429260708154
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0191
        },
        {
          "time": "09:00",
          "avg_share": 0.1079
        },
        {
          "time": "09:30",
          "avg_share": 0.039
        },
        {
          "time": "10:00",
          "avg_share": 0.0485
        },
        {
          "time": "10:30",
          "avg_share": 0.0317
        },
        {
          "time": "11:00",
          "avg_share": 0.03
        },
        {
          "time": "11:30",
          "avg_share": 0.0363
        },
        {
          "time": "12:00",
          "avg_share": 0.2341
        },
        {
          "time": "12:30",
          "avg_share": 0.0096
        },
        {
          "time": "13:00",
          "avg_share": 0.0207
        },
        {
          "time": "13:30",
          "avg_share": 0.0191
        },
        {
          "time": "14:00",
          "avg_share": 0.0315
        },
        {
          "time": "14:30",
          "avg_share": 0.0338
        },
        {
          "time": "15:00",
          "avg_share": 0.0334
        },
        {
          "time": "15:30",
          "avg_share": 0.0497
        },
        {
          "time": "16:00",
          "avg_share": 0.0445
        },
        {
          "time": "16:30",
          "avg_share": 0.0954
        },
        {
          "time": "17:00",
          "avg_share": 0.1155
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.979935216791187,
          "hhi": 0.22240309355612264,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 14.11379667349935,
          "hhi": 0.17134630178997204,
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
